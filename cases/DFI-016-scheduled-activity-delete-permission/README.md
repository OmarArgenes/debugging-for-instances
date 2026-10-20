# DFI-016 — Premium member could schedule activity but could not delete it

## Evidence status

**Date:** 2026-08-29  
**Mode:** AJAX + authorization-path tracing  
**Stack:** WordPress, BuddyBoss Scheduled Posts, WooCommerce Memberships, custom PHP  
**Outcome:** resolved and verified in production

## Observable problem

Premium members could create scheduled activity, but deleting their own scheduled item returned:

> “You don't have permission to delete scheduled activity.”

This was a different authorization path from the creation/scheduling issue documented in DFI-002.

## Native AJAX evidence

The delete operation used:

```text
action = delete_scheduled_activity
```

registered as:

```text
wp_ajax_delete_scheduled_activity
→ bb_nouveau_ajax_delete_scheduled_activity
```

inside BuddyBoss Nouveau activity AJAX handling.

The request used the nonce:

```text
scheduled_post_nonce
```

## Authorization evidence

The native path checked whether the current user could delete the activity and, for non-group activity, required a moderation capability equivalent to:

```text
bp_moderate
```

That policy was stricter than the intended product rule for a Premium member deleting their **own** scheduled feed activity.

## Minimal correction

A narrowly scoped custom delete authorization path was introduced before the native denial.

The preserved logic required all of the following:

```text
valid scheduled_post_nonce
current user owns the activity
activity is scheduled
activity is not a group activity
user has active Premium membership
BuddyBoss/native restrictions outside this narrow case remain intact
```

Deletion then used BuddyPress activity deletion rather than directly manipulating database rows.

### Fidelity note

The original complete PHP snippet is not reproduced here because its literal historical code block is not available in the current reconstruction. The handler/action names and validation conditions above are preserved from the investigation.

## Verification

The production workflow was tested across:

```text
create
schedule
view
pin
unpin
delete
```

The Premium member could delete their own scheduled activity after the correction, and the task was reported completed.

## Root cause

The native non-group Scheduled Posts delete authorization expected moderation-level permission and did not express the desired Premium-owner exception.

## DFI significance

The visible error was traced through the exact AJAX action to the authorization condition that rejected the request. The correction added the smallest policy exception instead of granting broad moderation/admin capability.
