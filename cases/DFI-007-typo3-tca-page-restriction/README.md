# DFI-007 — TYPO3 TCA page-type restriction

## Status
Mode: configuration tracing
Stack: TYPO3 12.4, TCA overrides, custom content elements
Outcome: cause strongly identified; permanent-fix verification pending

## Observable problem
A Timeline content element could not be created on a specific TYPO3 page because of a page-type restriction.

## Comparative configuration evidence
Other custom content elements such as Accordion, Tabs and Cards had an override equivalent to allowing the page type explicitly, while Timeline and Carousel did not.

## Supported diagnosis
The difference in TCA configuration explained why some custom content elements were available while Timeline remained blocked on that page type.

## Proposed permanent correction
Add the required Sitepackage TCA override in `Configuration/TCA/Overrides/` and clear TYPO3 caches.

## Verification status
The historical record does not preserve execution of the permanent code change and successful creation of the Timeline element afterward. The case therefore remains diagnosed, verification pending.

## DFI significance
This case uses a working/failing configuration comparison as a diagnostic probe to isolate the missing condition responsible for the behavior.