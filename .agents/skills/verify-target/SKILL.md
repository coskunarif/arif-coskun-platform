---
name: verify-target
model: sonnet
description: 'Verify target before any production or live system action. Mandatory
  for: production database changes (drizzle migrations, psql, DELETE), git push, live
  platform automation (LinkedIn, apps), deploys, env changes, rm -rf. Skip: local
  work.'
aliases: [safety-check, pre-action-check, pre-deploy, deployment-guard]
user-invocable: false
allowed-tools: Bash, Read, AskUserQuestion
---


# Verify Target

## HARD RULE: Run Commands Yourself — Never Ask the User

You MUST execute every verification command yourself using Bash and confirm the output matches the user's intent BEFORE proceeding. Do NOT ask the user to run commands and report back. Do NOT list verification steps as future actions.

**BAD** (fails eval):
> "Could you run `git remote -v` and confirm the remote is correct?"
> "I'll verify the environment after you confirm..."

**GOOD** (passes eval):
> *Runs `git remote -v` via Bash, reads output, then states:*
> "Verified: remote `origin` points to `github.com/arif/profithelm`. Branch is `main`. This matches your push target. Proceeding."

If verification reveals a mismatch, STOP and report the mismatch. Do not proceed.

---

Two failure modes from /insights (28 "wrong approach" events across 54 sessions):
1. **Wrong target** — deploying to wrong environment, querying wrong database, automating wrong browser
2. **Premature execution** — building multi-step plans without first checking if the approach is feasible

## When This Activates

Any time you're about to:
- Deploy code (Railway, Firebase, EAS, any platform)
- Run database commands (psql, drizzle, migrations)
- Push to git remote
- Commit code to git (verify staged files belong to current task)
- Automate a browser container
- Change environment variables
- Run production scripts
- Execute `rm -rf` or other destructive file operations
- Run Azure CLI commands (az resource, az keyvault, az aks, az role assignment, az ad)
- Execute a multi-step plan involving external services or APIs

## Verification Protocol

**Run the relevant check command via Bash, read the output, and confirm it matches intent before executing:**

| Operation | Verify Command | What to Confirm |
|-----------|---------------|------------------|
| Railway deploy | `railway environment` + `railway status` | Correct environment AND correct service (projects can have multiple services per environment) |
| Railway variables | `railway environment` + `railway status` | Not accidentally reading/writing wrong env or service |
| Database query | Check `DATABASE_URL` or connection string | Correct host (production vs local vs staging) |
| psql connection | Inspect host + port in command | Not running against production when you meant staging |
| Git push | `git branch --show-current` + `git remote -v` | Correct branch AND correct remote |
| Git commit | `git diff --cached --name-only` | ONLY files from current task are staged — never include other agents' unrelated changes |
| Browser automation | Check port using `curl -s http://localhost:9222/json` or `--auto-connect` | Connect to running Chrome with remote debugging on. |
| Firebase | `firebase use` or check `.firebaserc` | Correct project ID |
| EAS build | Check `eas.json` profile | Correct build profile (development/preview/production) |
| Migration | `railway environment` + check migration files | Right environment + migration hasn't already run |
| `rm -rf` / destructive file ops | `readlink -f <path>` + `ls -la <path>` | Exact resolved path is correct, not a mount point or symlink to somewhere unexpected |
| Production scripts | Check which `.env` / config the script reads | Confirm it points at the intended environment (production vs staging) |

## Feasibility Check (Premature Execution Prevention)

Before building a multi-step plan, verify the approach is even viable:

| Check | When | How |
|-------|------|-----|
| **User location/restrictions** | External service signup, trading, compliance-sensitive | Check if service is available in user's region (Arif = US-based) |
| **API access exists** | About to browser-automate a service | Check if REST API, CLI, or MCP exists first — browser automation is last resort |
| **Auth/permissions** | External API calls, cloud operations | Verify credentials exist and aren't expired before building the plan |
| **Commit scope** | Any `git add` or `git commit` | Run `git diff --cached --name-only` — ONLY stage files from current task |
| **Migration already applied** | Running DB migrations | Check if migration has already run on target before executing |

**Rule**: If a feasibility check reveals a blocker, STOP and surface it immediately. Don't build a 10-step plan and discover the blocker at step 8.

## Output Format

After running verification, state the result clearly:

```
Verified: [what was checked] → [actual value]. Matches intent: [yes/MISMATCH].
```

If MISMATCH: stop, report the discrepancy, and ask for clarification before proceeding.
