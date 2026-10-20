# DFI-007 — TYPO3 Timeline blocked by a page-type restriction

## Evidence status

**Date:** 2026-10-15  
**Mode:** configuration comparison + origin identification  
**Stack:** TYPO3 12.4.36, TCA, Bootstrap Package/custom content elements  
**Outcome:** cause strongly identified; permanent code change not executed in the recorded session

## Observable problem

Creating a Timeline item on a TYPO3 page failed with an error equivalent to:

```text
Attempt to insert record on page … where table
tx_bootstrappackage_timeline_item
is not allowed.
```

The affected page was recorded as PID 192.

## Comparative evidence

The investigation compared the TCA configuration of custom content-element item tables that worked with the one that failed.

Working item types such as Accordion, Tabs and Cards had the page-type restriction bypass enabled.

Timeline did not.

Carousel was also noted as lacking the equivalent override in the inspected configuration.

## Proposed TCA correction

The exact proposed override was:

```php
$GLOBALS['TCA']['tx_bootstrappackage_timeline_item']['ctrl']['security']['ignorePageTypeRestriction'] = true;
```

The intended location was the site's TCA overrides, for example under:

```text
Configuration/TCA/Overrides/
```

followed by clearing TYPO3 caches.

## Evidence interpretation

The failure was not treated as a generic editor permission problem. The comparison isolated a concrete configuration difference on the affected database table.

## Execution status

The session did not have the required PHP/server access to implement the permanent TCA override safely.

Therefore this case records:

- **cause/origin:** strongly supported;
- **proposed correction:** explicit;
- **post-change verification:** not performed in the preserved investigation.

## Verification status

**Cause strongly supported; correction not executed in the preserved session.**

The comparison evidence supports the missing TCA restriction override as the responsible configuration difference, but no post-change creation test is claimed because the required server/PHP change was not performed.

## DFI significance

The working content elements served as a diagnostic control. Comparison was used as a probe to isolate one missing configuration condition; it was not assumed to be the definition of DFI itself.
