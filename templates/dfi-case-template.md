# DFI Case — <short title>

## 1. Case metadata
- Case ID:
- Date:
- Investigator:
- Environment:
- Technology stack:
- Authorization / scope:
- DFI mode:
- Status: Open / Resolved / Unresolved

## 2. Observable problem
**Expected behavior**

...

**Actual behavior**

...

**Reproduction**
1. ...
2. ...

## 3. Known facts
- ...

## 4. Initial hypotheses
| ID | Hypothesis | Why plausible | Evidence if true | Evidence if false |
|---|---|---|---|---|
| H1 | | | | |
| H2 | | | | |

## 5. Diagnostic artifacts

Record the exact technical material used during the investigation whenever it is available and safe to publish.

### Commands / code / console probes
```text
<exact command, code snippet, DevTools probe, SQL, WP-CLI command, curl request, configuration fragment, or pseudocode if the exact artifact was not preserved>
```

For each artifact record:
- Purpose:
- Execution context:
- Expected signal:
- Observed output:
- Whether it was read-only or changed state:
- Whether the exact original artifact is preserved:

### Configuration / code diff
```diff
<minimal before/after diff when available>
```

### Evidence files
- Screenshots:
- Logs:
- HTTP requests/responses:
- Stack traces:
- Query results:
- Commit / change reference:

If the exact historical command or code was not preserved, state that explicitly. Do not reconstruct an exact command and present it as historical fact.

## 6. Diagnostic cycle
### Test P1
**Question**

What uncertainty is this test intended to reduce?

**Procedure**

...

**Risk / reversibility**

...

**Observed evidence**

...

**Interpretation**
- H1: retained / weakened / rejected
- H2: retained / weakened / rejected

**Next-best test rationale**

...

## 7. Cause / origin
**Supported conclusion**

...

**Evidence supporting it**
- ...

**Alternative explanations not fully excluded**
- ...

## 8. Minimal correction
- Change:
- Why this is minimal:
- Rollback:

## 9. Verification
- Original reproduction path:
- Expected result:
- Observed result:
- Neighboring / regression checks:
- Temporary instrumentation removed:

## 10. Metrics
- Investigation start:
- Correct-cause time:
- Hypotheses considered:
- Diagnostic tests:
- Persistent changes:
- False paths:
- Regressions introduced:

## 11. Limitations
...

## 12. Artifacts
- Logs:
- Screenshots:
- Requests:
- Queries:
- Commits:
- Other: