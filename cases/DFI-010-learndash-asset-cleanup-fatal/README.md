# DFI-010 — LearnDash dependency removed by asset optimization

## Status
Mode: dependency tracing  
Stack: WordPress, LearnDash, WooCommerce integration, Asset CleanUp  
Outcome: cause identified; correction proposed

## Observable problem
After asset/plugin-loading optimization, the site produced a fatal error and became inaccessible on the affected frontend path.

## Evidence
The active integration expected LearnDash core classes to exist, while LearnDash LMS itself had been globally unloaded by optimization rules.

The fatal error referenced a missing LearnDash autoloader class.

## Supported root cause
A dependency mismatch was created by unloading LearnDash core while leaving a LearnDash-dependent WooCommerce integration active.

## Minimal correction
Disable the global unload rule for LearnDash core so dependent integrations load with their required classes.

## Verification status
The historical evidence supports the diagnosis and correction path, but a preserved post-fix verification record is not available in this reconstruction.

## DFI significance
The case demonstrates dependency evidence overriding a broad performance-optimization assumption.