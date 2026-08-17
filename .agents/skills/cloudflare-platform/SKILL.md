---
name: cloudflare-platform
description: Manage Cloudflare programmatically with Wrangler and the direct Cloudflare
  API.
aliases: [cloudflare, cf, wrangler, workers, dns, zero-trust, api, cloudflare-automation]
allowed-tools: Bash(npx:*), Bash(curl:*), Bash(jq:*), Bash(python3:*), Bash(node:*)
---


# Cloudflare Platform

Use this skill for MCP-free Cloudflare automation.

## Core rule

Prefer the smallest tool that fully covers the task:

1. Use **Wrangler** for supported Workers and Developer Platform workflows.
2. Use the **Cloudflare API** for everything else, especially account-level,
   DNS, Zero Trust, WAF, or product areas not covered cleanly by Wrangler.
3. Do **not** use MCP in this workflow.

## What this skill is for

Use this skill when the user wants to:

- deploy or manage Cloudflare Workers
- update KV, R2, D1, Queues, or Workflows from the CLI where supported
- manage DNS, zones, token permissions, account settings, or security products
- build an AI-agent workflow around Cloudflare that should stay CLI/API-first
- avoid MCP and keep the setup stable and explicit

## Decision flow

### 1) Check CLI coverage first
If the task is clearly supported by Wrangler, use it.

Common Wrangler flows:
- `npx wrangler dev`
- `npx wrangler deploy`
- `npx wrangler tail`
- `npx wrangler login`

If Wrangler is not installed locally, use `npx wrangler ...`.

### 2) Fall back to direct API when needed
If Wrangler does not cleanly expose the operation, use the Cloudflare REST API.

General pattern:
- authenticate with a Cloudflare API token
- call the smallest endpoint that performs the action
- verify the change with a read-back request

### 3) Verify after every mutation
Never assume the first command succeeded.

After changing Cloudflare state, always do one of:
- read the resource back through Wrangler
- query the Cloudflare API again
- check the updated state in the dashboard only as a last resort

## Authentication guidance

- Prefer API tokens over legacy API keys.
- Keep credentials in environment variables.
- Verify token validity before making destructive changes.
- Use narrow permissions and narrow resource scope whenever possible.

## Practical guidance for agents

When the user asks for Cloudflare automation, respond with:

1. the tool you will use
2. the exact command or API endpoint
3. the verification step
4. any coverage caveat if Wrangler does not support the operation

This keeps the agent deterministic and avoids guessing.

## Safety

- Do not use MCP.
- Do not overclaim Wrangler coverage for all Cloudflare products.
- Do not change destructive settings without explicit confirmation.
- Prefer explicit IDs, not dashboard navigation.

## Good defaults

- Use Wrangler for Worker/project lifecycle tasks.
- Use the API for DNS, Zero Trust, WAF, token management, and broad account operations.
- Use `npx wrangler` if the binary is not installed.

## Notes for future expansion

If this skill grows, split it by workflow:
- `cloudflare-workers`
- `cloudflare-dns`
- `cloudflare-security`
- `cloudflare-account`

Keep each sub-skill narrow and trigger-focused.
