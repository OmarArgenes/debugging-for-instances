# DFI-013 — Duplicate and inconsistent gamification awards

## Evidence status

**Date:** 2026-07-16  
**Mode:** configuration audit + rule isolation  
**Stack:** WordPress gamification / points configuration  
**Outcome:** configuration defects identified; production changes intentionally deferred

## Observable problem

The points configuration produced values that did not consistently match the visible labels and included duplicate or effectively unlimited award rules.

## Preserved configuration evidence

The audit recorded these rules:

```text
Register to website:
  +5 points
  +100 points

Comment:
  +5 points
  frequency/limit: Unlimited

Publish activity post:
  +10 points
  frequency/limit: Unlimited

Subscription purchase:
  +30 points
  frequency/limit: Unlimited

Points deductions:
  none configured
```

The points type under review had been published previously; the historical admin audit itself was performed in July 2026.

## Contradictions detected

### Duplicate registration award

Two active-looking registration rules existed:

```text
5 + 100 = 105 points
```

If both fired for the same registration event, the effective award would be 105.

### Activity label mismatch

The activity-related label indicated:

```text
got 5 points
```

while the configured award was:

```text
10 points
```

### Unlimited repetition

Comment and activity-post awards were configured with no effective cap in the observed rule set.

## Diagnostic decision

No production values were changed during the audit merely to make them look consistent.

The defects were first documented so each rule could be reviewed against the intended product policy.

## Verification status

This case proves configuration inconsistency, not a completed remediation.

No preserved post-change configuration audit exists in the historical record.

## DFI significance

The case shows that DFI does not require runtime instrumentation when static configuration already contains decisive contradictory evidence. The correct probe surface was the rule configuration itself.
