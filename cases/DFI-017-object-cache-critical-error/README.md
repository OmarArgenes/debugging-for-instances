# DFI-017 — Frontend critical error recovered after object-cache flush

## Status
Mode: cache-state validation  
Stack: WordPress, Redis/Object Cache, plugin-heavy site  
Outcome: frontend recovered; underlying trigger not fully established

## Observable problem
The frontend entered a critical-error state while the WordPress backend remained accessible.

## Diagnostic artifact / intervention

The preserved historical record confirms the following action:

- Object cache / Redis state was flushed after backup/maintenance preparation.
- The frontend was retested immediately afterward.

**Exact command or UI path:** not preserved in the historical record.

Because the exact execution artifact was not retained, this case does **not** claim that a specific WP-CLI, Redis CLI, plugin button, or hosting-panel action was used.

## Evidence before/after

**Before:** frontend in a critical-error state while the WordPress backend remained accessible.  
**Intervention:** object cache / Redis state flushed.  
**After:** frontend recovered immediately.

No historical cache-key dump, Redis command transcript, PHP stack trace, or exact CLI command is currently preserved.

## Result
The frontend recovered immediately after the cache flush.

## Supported conclusion
Cached application/object state was materially involved in the observed failure.

## Uncertainty
The exact plugin/object/key or event that produced the invalid cache state was not established.

## DFI significance
The case distinguishes a verified recovery action from an unproven deeper root trigger.