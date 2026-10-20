# DFI-006 — TYPO3 wrong-language PDF attachment

## Status
Mode: cross-layer tracing + validation
Stack: TYPO3 12.4, Powermail, multilingual forms
Outcome: failure reproduced; exact attachment-selection cause unresolved

## Observable problem
An English product-data-sheet request produced an English form and email flow but attached a German PDF.

## Evidence
- The English request path was reproduced.
- The message body was English.
- The attached PDF was German.
- Updating the visible English download configuration did not change the attachment in a later test.
- The visible standard configuration did not reveal the rule responsible for attaching that file.

## Hypothesis update
A simple page-level language configuration was no longer enough to explain the failure. The investigation moved toward custom backend attachment-selection logic that was not visible from the TYPO3 page configuration alone.

## Correction status
No permanent correction is claimed. Additional code-level access was required to continue the investigation.

## DFI significance
The case demonstrates changing diagnostic surface when a configuration change fails to alter the observed behavior.