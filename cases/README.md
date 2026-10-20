# DFI Public Case Registry

This registry reconstructs selected real debugging incidents from historical engineering chats and project notes. Cases are sanitized for public documentation: personal names, credentials, private URLs, customer identifiers and unnecessary internal details are omitted.

Important: reconstruction from prior chats is not equivalent to a contemporaneous lab notebook. Where a metric, exact timestamp, final verification, or root cause was not recorded, the public case leaves it explicitly unknown rather than inventing evidence.

| Case | Topic | DFI mode | Status |
|---|---|---|---|
| DFI-001 | WordPress header element origin | Exploratory + validation | Resolved in original context; public reconstruction |
| DFI-002 | Membership-based scheduled-post access | Comparative + runtime tracing | Resolved and positively verified |
| DFI-003 | Unexpected WordPress backend redirect | Tracing + isolation | Origin identified; correction verification pending |
| DFI-004 | Slow WordPress contact page | Profiling + isolation | Bottleneck narrowed; exact callback unresolved |
| DFI-005 | Defensive WordPress compromise investigation | Cross-layer defensive tracing | Multiple compromise indicators confirmed; full forensic closure unresolved |
| DFI-006 | TYPO3 wrong-language PDF attachment | Cross-layer tracing | Failure reproduced; server-side cause unresolved |
| DFI-007 | TYPO3 TCA page-type restriction | Configuration tracing | Cause strongly identified; permanent-fix verification pending |
| DFI-008 | WordPress site serving hosting default page | HTTP surface isolation | Hosting/application layers separated; root cause unresolved |

## Status vocabulary

- Resolved and verified: a correction was applied and the originally failing behavior was retested successfully.
- Origin identified: the responsible component/path was identified, but final correction or regression verification is not fully documented.
- Partially diagnosed: the investigation excluded major hypotheses or localized the problem but did not reach a fully supported root cause.
- Unresolved: the evidence is useful, but no final cause/correction is claimed.

These cases are research artifacts, not marketing claims. A single case does not demonstrate that DFI is universally faster, safer or more accurate.