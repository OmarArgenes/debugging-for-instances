# DFI-015 — Multilingual form submissions stored in an unexpected TYPO3 PID

## Status
Mode: configuration tracing  
Stack: TYPO3 12.4, Powermail, multilingual forms  
Outcome: storage destination explanation identified

## Observable problem
English Powermail submissions were stored under an unexpected TYPO3 page/location while German submissions were stored with product pages.

## Evidence
The English form's FlexForm explicitly targeted a storage page equivalent to PID 2. The visible TypoScript review did not show a separate PID-2 override.

## Supported cause
The English storage behavior was explained by the form/content configuration itself rather than by a hidden TypoScript override.

## Verification status
The storage destination cause was identified. A public post-change verification record is not preserved.

## DFI significance
The case demonstrates how inspecting the actual form configuration can disprove a more complex global-configuration hypothesis.