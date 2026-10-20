# DFI Case Evidence Matrix

This matrix describes the strength and preservation level of the first 17 historical DFI cases. It does not score whether DFI is superior to other debugging methods.

| Case | Preserved evidence | Verification | Evidence level |
|---|---|---|---|
| DFI-001 | Methodological narrative; DevTools inspection recorded, exact script not preserved | Origin reported identified; exact before/after artifact absent | B- |
| DFI-002 | AJAX context, runtime membership values, exact membership check and code diff | Positive scheduling retest preserved | A |
| DFI-003 | HTTP 302 trace, destination, exact plugin class/method/file location | Origin verified; correction handled in DFI-014 | A- |
| DFI-004 | Query Monitor timings, query count, SQL time, lifecycle timings, HTTP-call result | Exact slow callback unresolved | A- |
| DFI-005 | Browser diagnostics, sanitized script probes, server-side integrity findings, remediation record | Partial remediation only; no clean-state certification | A- |
| DFI-006 | Form IDs, request path, runtime cart value, file IDs/names, config falsification test | Failure reproduced; backend selection cause unresolved | A |
| DFI-007 | Exact TYPO3 table/error context, comparative TCA evidence, exact proposed override | Permanent change not executed in preserved session | A- |
| DFI-008 | HTTP route/status matrix, response sizes, filesystem file validation, reversible rename | Plesk root symptom retested successfully | A |
| DFI-009 | AJAX success response, rewrite rule, dependency exception diff, UI retest | Resolved and verified | A |
| DFI-010 | Exact fatal class error, implicated integration file, configuration change, recovery | Page recovered after correction | A |
| DFI-011 | Exact user-facing error, image stack/config, offload state, successful control account | Original failing account unresolved | B+ |
| DFI-012 | Affected routes, exact Permalinks action, immediate before/after recovery | Operational recovery verified; trigger unknown | A- |
| DFI-013 | Exact point-rule values/frequencies and contradiction analysis | Configuration defects identified; no remediation retest | A- |
| DFI-014 | Exact editor path, post type/capability evidence, redirect callback, bridge constraints | Own-certificate editing and backend restriction verified | A |
| DFI-015 | Exact page/CE/form IDs, storage target and submission PID records | Cause identified; read-only investigation | A |
| DFI-016 | Exact AJAX action/handler/nonce, authorization condition, correction constraints | Production workflow retested including delete | A |
| DFI-017 | Error state, exact cache action, recovery, Redis connectivity state | Operational recovery verified; original cache trigger unknown | A- |

## Evidence-level meaning

- **A** — strong technical artifacts plus a meaningful verification or falsification step.
- **A-** — strong diagnostic artifacts, but one material root-cause or post-change element remains incomplete.
- **B+** — useful controlled evidence, but the originally failing path lacks decisive request/log evidence.
- **B-** — historically important case with limited preserved technical artifacts.

## Historical reconstruction rule

These cases were reconstructed from prior engineering chats and project records. Missing commands, logs, timings or outputs remain explicitly missing. No exact artifact may be invented merely to make a case appear more complete.

See also: `docs/diagnostic-artifact-policy.md`.
