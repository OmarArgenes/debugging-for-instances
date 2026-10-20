# DFI-015 — TYPO3 English Powermail submissions stored under PID 2

## Evidence status

**Date:** 2026-10-15  
**Mode:** configuration tracing + record-location validation  
**Stack:** TYPO3 12.4.36, Powermail, translated content elements  
**Outcome:** storage destination explained by form/content configuration; no remediation claimed

## Observable problem

English Powermail submissions were not appearing under the page where an administrator expected to find them.

German and English submissions appeared to be stored in different TYPO3 PIDs.

## Content-element evidence

The investigation recorded:

```text
Data-sheet page: 472
  DE content element: 4742
  EN content element: 4751

Product-request page: 296
  DE content element: 1001
  EN content element: 4755
```

For the English content elements, the Powermail storage field displayed:

```text
Frontend User [2]
```

while the corresponding German storage destination was empty, meaning the same-page/default behavior was used.

The data-sheet Powermail form was recorded as:

```text
base form UID: 2
English translation UID: 5
```

The English product request used form:

```text
Produktanfrage [13]
```

## Database/list evidence

Preserved submission records included:

```text
UID 7482 — English data-sheet submission — PID 2
UID 7480 — English data-sheet submission — PID 2
UID 7478 — German data-sheet submission  — PID 472
```

These records matched the configuration difference.

## Hypothesis test

**Hypothesis:** a hidden global TypoScript rule was forcing English Powermail records into PID 2.

**Evidence against that as the necessary explanation:** the English content element itself explicitly exposed storage target `Frontend User [2]`, while the German element did not.

## Supported cause

The observed English storage destination was explained directly by the translated Powermail content-element/FlexForm configuration pointing at PID 2.

## Correction status

The historical diagnostic session was intentionally read-only. No storage PID was changed in production and no post-change submission test is claimed.

## Verification status

**Cause/location verified; remediation intentionally not performed.**

The recorded English submissions in PID 2 matched the translated content-element storage target. Because the session was read-only, no post-change submission test is claimed.

## DFI significance

The investigation moved from “records are missing” to the exact persistence location, then matched that location to the translated form configuration instead of assuming a database or Powermail failure.
