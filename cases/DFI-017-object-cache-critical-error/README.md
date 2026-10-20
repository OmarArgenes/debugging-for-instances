# DFI-017 — Frontend critical error recovered after object-cache flush

## Status
Mode: cache-state validation  
Stack: WordPress, Redis/Object Cache, plugin-heavy site  
Outcome: frontend recovered; underlying trigger not fully established

## Observable problem
The frontend entered a critical-error state while the WordPress backend remained accessible.

## Intervention
After backup/maintenance preparation, the object cache / Redis state was flushed.

## Result
The frontend recovered immediately after the cache flush.

## Supported conclusion
Cached application/object state was materially involved in the observed failure.

## Uncertainty
The exact plugin/object/key or event that produced the invalid cache state was not established.

## DFI significance
The case distinguishes a verified recovery action from an unproven deeper root trigger.