---
name: test-driven-development
description: >-
  Strict Red-Green-Refactor TDD methodology, 3 Iron Laws, vertical slicing, public seam design,
  and testing anti-pattern guardrails for Arif Coskun's personal platform.
---

# Test-Driven Development (TDD) Skill

> **"NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST."**
> Software is not verified because an LLM generated it without syntax errors. It is verified only when an observed, failing test is made green by minimal, high-signal implementation.

---

## 1. The Three Iron Laws of TDD

1. **Iron Law 1 (The Fundamental Rule):**
   *You shall not write any production code unless it is to make a failing test pass.* Every line of production code in `src/` must have a corresponding test in `test/` that was written first.
2. **Iron Law 2 (Proof Through Observation):**
   *If you did not watch the test fail, you do not know if it tests the right thing.* Always run the test runner, verify the red failure and the failure message, then write the solution.
3. **Iron Law 3 (Strict Vertical Slicing):**
   *Never horizontal-slice.* Do not write 10 tests in bulk before writing code. Work behavior by behavior: **1 failing test → minimal passing code → refactor → next test**.

---

## 2. The Red-Green-Refactor Cycle

```
  ┌─────────────────────────────────────────────────────────────┐
  │ 1. RED: Write one minimal failing test for desired behavior │
  │    → Run test runner → Observe specific failure             │
  ├─────────────────────────────────────────────────────────────┤
  │ 2. GREEN: Write the minimal code to satisfy the test        │
  │    → Run test runner → Observe clean pass                   │
  ├─────────────────────────────────────────────────────────────┤
  │ 3. REFACTOR: Improve design, remove duplication, keep green │
  │    → Clean up types & tokens while tests stay 100% green    │
  └─────────────────────────────────────────────────────────────┘
```

---

## 3. Public Seams & Behavioral Testing

Always test through **Public Seams** (contracts, DOM output, exported interfaces), NEVER private implementation details:

- ✅ **Good (Behavior):** Verify that calling `switchLocale('tr')` updates `document.documentElement.lang` to `'tr'` and renders Turkish hero text.
- ❌ **Bad (Implementation):** Checking private variable `_currentLanguageIndex` inside a module closure.
- ✅ **Good (Behavior):** Verify that submitting `--benchmark` in the terminal output produces the Autoresearch benchmark metrics table.
- ❌ **Bad (Implementation):** Checking whether an internal regex was instantiated 2 times.

---

## 4. Testing Anti-Patterns to Reject

| Anti-Pattern | Why It Fails | Correct TDD Approach |
| :--- | :--- | :--- |
| **Testing Mocks** | Verifying mock functions were called rather than actual output. | Test real DOM/data state; assert actual transformed values. |
| **Test-Only Production Code** | Adding `_resetForTest()` or test flags into production files. | Use fresh instances, pure functions, or test fixture builders. |
| **Tautological Assertions** | Re-implementing production calculation inside the test expectation. | Assert exact hardcoded expected literals (`toBe('Yüksek Doğruluklu')`). |
| **Horizontal Slicing** | Writing a huge suite of tests before implementing anything. | Strict vertical slice: one behavior, one test, one green cycle. |
| **Flaky Sleep Waits** | Using arbitrary `setTimeout(1000)` instead of condition-based waiting. | Await specific state changes, Promises, or DOM element queries. |

---

## 5. Practical Checklist for New Features

Before declaring any feature complete:
- [ ] Test was written **before** the implementation code.
- [ ] Test was executed and observed to **fail** with a descriptive message.
- [ ] Production code was written to satisfy only that test.
- [ ] Test now passes cleanly.
- [ ] Refactoring maintained green status across the entire test suite.
