# DFI-002 — Membership-based scheduled-post access failure

## Status

Mode: comparative + runtime tracing  
Stack: WordPress, BuddyBoss, WooCommerce Memberships, AJAX  
Outcome: resolved and positively verified

## Observable problem

One active Premium member could not schedule posts while another active Premium member could. A static permission comparison did not reveal a meaningful capability difference.

## Initial hypotheses

- H1: the failing account lacked a required WordPress/BuddyBoss capability.
- H2: the scheduling feature was disabled for the failing context.
- H3: Premium-membership detection was returning a false negative at runtime.

## Diagnostic probes and evidence

Static comparison showed equivalent relevant capabilities for the investigated path and confirmed an active Premium membership state.

Runtime tracing of the failing AJAX request captured membership checks and context flags.

Key evidence:

- active membership state was present;
- scheduling feature flag was enabled;
- request was in the main activity feed, not a group context;
- administrator/moderator capabilities were not the deciding factor;
- membership lookup by slug `premium` returned false;
- membership lookup by numeric plan ID `605` returned true.

## Root cause

The custom Premium scheduling-access logic used a slug-based WooCommerce Memberships lookup that returned a false negative for the affected active member.

## Minimal correction

The membership check was changed to use the numeric plan ID `605` while preserving native BuddyBoss group/admin rules.

## Verification

After the correction:

- the previously failing Premium member could schedule posts;
- the previously working Premium member continued to work;
- no administrator capabilities were granted by the fix.

A negative test with a free/non-Premium account was not preserved in the historical evidence and is therefore not claimed.

## DFI significance

This case demonstrates why static role/capability comparison can be insufficient. The decisive evidence existed in a runtime dependency: a membership lookup returned a different result than expected despite an active membership record.

## Privacy

Public documentation intentionally removes member names and personal identifiers.