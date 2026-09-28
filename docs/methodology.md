# DFI Methodology

## Definition
Debugging for Instances (DFI) is a proposed AI-assisted, evidence-based methodology for software diagnosis and debugging. It uses falsifiable hypotheses, adaptive diagnostic tests, controlled instrumentation, observable evidence, traceability, and explicit verification to progressively reduce uncertainty about a concrete software behavior.

> **AI proposes. Evidence decides. The engineer controls.**

## Entry criteria
A DFI investigation should begin with a concrete observable problem, enough system access to collect relevant evidence, and a clear authorization boundary.

Record the symptom, expected behavior, actual behavior, environment, reproducibility, affected scope, constraints, and known facts.

## Phase 1 — Delimit the problem
Define what is actually observed without beginning from a presumed cause.

**Output:** a bounded problem statement.

## Phase 2 — Form hypotheses
Create candidate explanations that are testable. For each hypothesis record what evidence would support or contradict it.

**Output:** prioritized hypothesis set.

## Phase 3 — Select the next diagnostic test
Choose a test that reduces uncertainty rather than merely collecting more data. Prefer low-risk, reversible, discriminating tests.

**Output:** one justified diagnostic test and its expected interpretations.

## Phase 4 — Execute and capture evidence
Instrument only what is needed. Evidence may include console output, network traffic, runtime values, logs, traces, database records, configuration values, component state, or screenshots where visual state is material.

**Output:** evidence artifact.

## Phase 5 — Reason and update
Compare the observation with predicted outcomes. Retain, weaken, reject, refine, or split hypotheses. If evidence remains insufficient, select another test.

**Output:** updated uncertainty model.

## Phase 6 — Identify cause and correct minimally
When evidence supports a responsible cause or origin point, apply the smallest justified correction. Separate cause, contributing factors, unrelated anomalies, and remediation.

**Output:** justified correction.

## Phase 7 — Verify and close
Reproduce the original path, confirm expected behavior, check relevant neighboring behavior, remove temporary instrumentation, and document the conclusion.

**Output:** closed DFI case record.

## Optional operating modes
- **Exploratory** — origin is unknown.
- **Validation** — test whether an assumed or documented path is true.
- **Comparative** — compare relevant states when comparison adds information.
- **Tracing** — follow evidence across components or layers.
- **Isolation** — remove variables and reduce the search space.
- **Verification** — demonstrate that a correction addresses the observed behavior.

## Closure criteria
A case is closed when the original symptom is reproducibly resolved or explicitly classified as unresolved, the conclusion is tied to recorded evidence, the correction is documented, verification has been performed, and temporary diagnostic instrumentation has been removed or intentionally retained and documented.