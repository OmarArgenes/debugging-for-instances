# Empirical Validation Plan

DFI v1.0 is a methodological proposal. Expected improvements are hypotheses, not established outcomes.

## Core research question
Under controlled and reproducible software incidents, how does an evidence-driven DFI workflow with AI assistance compare with an appropriate baseline debugging workflow in diagnostic efficiency, correctness, intervention risk, and reproducibility?

## Candidate corpus
- WordPress / CMS incidents.
- Frontend incidents.
- Backend / API incidents.
- Database incidents.
- Deployment / infrastructure incidents.
- Authorized defensive-security scenarios.

## Candidate study conditions
- Conventional debugging baseline.
- DFI workflow without AI assistance.
- DFI workflow with AI assistance.

Participant experience, incident difficulty, tool access, and prior knowledge should be controlled where possible.

## Measures
### Primary
- Time to correct cause.
- Root-cause accuracy.
- Verification success.

### Secondary
- Number of hypotheses.
- Number of diagnostic tests.
- False diagnostic paths.
- Number and severity of persistent changes.
- Induced regressions.
- Reproducibility by another engineer.
- Amount and quality of evidence captured.

## Threats to validity
- Learning effects.
- Unequal incident familiarity.
- Tool familiarity.
- Observer effects.
- Probe-induced timing changes.
- AI model/version drift.
- Incomplete ground truth.
- Selection bias.
- Over-representation of one technology stack.

## Publication discipline
Report negative and inconclusive outcomes. Do not convert exploratory observations into general performance claims.