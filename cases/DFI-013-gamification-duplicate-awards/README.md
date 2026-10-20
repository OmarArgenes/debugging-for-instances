# DFI-013 — Duplicate and inconsistent gamification awards

## Status
Mode: configuration audit + rule isolation  
Stack: WordPress, gamification plugin  
Outcome: configuration defects identified; production changes intentionally deferred

## Observable problem
Point awards did not match their displayed labels and some actions could award unexpectedly large or repeated totals.

## Evidence
The configuration audit found:
- two registration awards, 5 and 100 points, producing a combined 105-point registration reward;
- comment awards of 5 points with no effective cap;
- activity-post awards configured at 10 points while the label indicated 5;
- subscription-product purchase award of 30 points;
- no configured deductions.

## Supported diagnosis
Multiple reward rules were internally inconsistent or duplicative.

## Action
No speculative production changes were made during the diagnostic review. The duplicated and unlimited rules were documented for controlled correction.

## Verification status
Configuration defects identified; correction/verification not preserved.

## DFI significance
The case demonstrates that configuration evidence can be sufficient to identify a defect without first editing live rules.