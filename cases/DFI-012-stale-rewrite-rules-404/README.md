# DFI-012 — Intermittent WordPress 404s recovered by flushing rewrite rules

## Evidence status

**Primary verification date:** 2026-09-27  
**Mode:** low-risk recovery test + validation  
**Stack:** WordPress, BuddyBoss/LearnDash frontend routes, Modern Events Calendar  
**Outcome:** affected routes recovered; original trigger not established

## Observable problem

Multiple frontend routes intermittently returned 404 or stopped resolving correctly.

Preserved affected areas included:

```text
/all-events/
Courses → Dashboard
Courses → Create a Course
```

An earlier MEC event route had also shown 404 behavior.

## Diagnostic intervention

No permalink structure was changed.

The exact action was:

```text
Settings → Permalinks → Save Changes
```

Saving the existing structure causes WordPress to regenerate its rewrite rules.

## Verification

Immediately after saving the existing permalink settings, the affected routes worked again.

## Supported conclusion

The recovery strongly supports stale/incomplete rewrite state as the immediate operational cause of those 404s.

## What was not established

The event that originally desynchronized the rules was not proven.

Plugin activation/update, configuration changes, migration or other rewrite-generating operations remained possible triggers only; none was promoted to fact.

## Important non-example

A later Quiz Builder redirect was also tested by saving Permalinks, but **that case did not recover**. It is documented separately in DFI-009.

Therefore this case does not turn “save Permalinks” into a universal routing fix.

## DFI significance

A cheap, reversible intervention had high diagnostic value: it restored the affected paths and confirmed rewrite-state involvement while preserving uncertainty about the deeper trigger.
