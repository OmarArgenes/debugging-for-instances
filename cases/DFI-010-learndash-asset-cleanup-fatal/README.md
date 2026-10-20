# DFI-010 — LearnDash dependency mismatch caused by global unload rules

## Evidence status

**Date:** 2026-07-08  
**Mode:** fatal-error dependency tracing  
**Stack:** WordPress, LearnDash LMS, LearnDash WooCommerce Integration, Asset CleanUp  
**Outcome:** resolved operationally and verified by page recovery

## Observable problem

After optimization rules were changed, the affected page failed with a PHP fatal error.

## Preserved fatal error

```text
Uncaught Error: Class "LearnDash\Core\Autoloader" not found
```

The stack implicated:

```text
learndash-woocommerce/learndash_woocommerce.php
```

## Configuration state

The preserved investigation established a dependency mismatch:

- LearnDash core was unloaded on the affected frontend surface;
- LearnDash WooCommerce Integration was still being loaded there;
- the integration attempted to use a LearnDash core class that was unavailable.

## Hypothesis

If the fatal was caused by that mismatch, then the integration should not load on a surface where its required LearnDash core dependency is intentionally unloaded.

## Corrective configuration

The LearnDash WooCommerce Integration was returned to the optimization state:

```text
Unload on all pages
```

for surfaces where the integration was not required, keeping its load state coordinated with the LearnDash core unload strategy.

## Verification

The user reported that after re-enabling the global unload rule for the integration, the affected page worked again.

## Root cause

Asset optimization produced an invalid dependency state: a dependent LearnDash integration remained active after its required core class had been unloaded.

## Evidence limitations

The complete PHP stack trace was not preserved beyond the fatal class and implicated integration file. No additional stack frames are reconstructed.

## DFI significance

The fatal error supplied a precise dependency signal. The correction targeted the smallest relevant load rule instead of abandoning the whole optimization strategy.
