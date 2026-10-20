# DFI-012 — Intermittent builder/event 404s from stale rewrite state

## Status
Mode: validation  
Stack: WordPress, LearnDash, events plugin, rewrite rules  
Outcome: resolved operationally; root trigger uncertain

## Observable problem
Frontend routes for a course/dashboard builder and an events administration path intermittently returned 404 responses.

## Intervention
WordPress Permalinks was opened and the existing permalink settings were saved without changing the structure.

## Result
The affected routes began working immediately after the permalink save.

## Supported conclusion
Stale or incomplete rewrite rules were strongly implicated because a rewrite flush restored the routes without a structural URL change.

## Uncertainty
The event that originally caused the rewrite state to become stale was not established.

## DFI significance
The case distinguishes a verified operational recovery from an unproven root trigger.