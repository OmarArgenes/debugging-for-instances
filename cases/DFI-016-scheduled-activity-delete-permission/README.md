# DFI-016 — Scheduled activity deletion denied for Premium members

## Status
Mode: AJAX/authorization tracing  
Stack: WordPress, BuddyBoss, WooCommerce Memberships  
Outcome: resolved and verified in production

## Observable problem
Premium members could create scheduled activity but received a permission error when deleting their own scheduled activity.

## Evidence
The native deletion path used the BuddyBoss AJAX action responsible for scheduled-activity deletion. The existing authorization behavior did not cover the intended Premium-member use case.

## Minimal correction
A narrowly scoped authorization handler was added before the native path. It preserved nonce validation, ownership checks, scheduled status, non-group scope, active Premium membership, and BuddyBoss native restrictions.

## Verification
Production testing covered create/schedule/view/pin/unpin/delete behavior and the deletion issue was reported completed and verified.

## DFI significance
The case demonstrates tracing a frontend permission symptom through the exact AJAX action and then extending authorization without modifying core/plugin code.