# Debugging for Instances (DFI)

**English** · [Español](README.es.md)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22986103.svg)](https://doi.org/10.5281/zenodo.22986103) [![ORCID](https://img.shields.io/badge/ORCID-0009--0009--7371--1384-A6CE39?logo=orcid&logoColor=white)](https://orcid.org/0009-0009-7371-1384) ![Version](https://img.shields.io/badge/version-1.0-0b6fa4) ![Status](https://img.shields.io/badge/status-foundational%20publication-2f855a)

**Debugging for Instances (DFI)** is a proposed evidence-based methodology for AI-assisted software diagnosis and debugging.

> **Core principle:** AI proposes. Evidence decides. The engineer controls.

DFI structures an investigation around falsifiable hypotheses, adaptive diagnostic tests, controlled instrumentation, observable evidence, iterative reasoning, minimal-risk correction, and explicit verification.

## Canonical publication

- **Foundational document:** [Zenodo record](https://zenodo.org/records/22986103)
- **DOI:** [10.5281/zenodo.22986103](https://doi.org/10.5281/zenodo.22986103)
- **Author:** Omar Argenes Quispe
- **ORCID:** [0009-0009-7371-1384](https://orcid.org/0009-0009-7371-1384)
- **Version:** 1.0
- **Publication date:** 2026-09-27

## What DFI is

DFI is not limited to comparing a working and a failing instance. Comparison is only one diagnostic mode. An **instance** is a concrete, observable manifestation of a state or behavior under investigation: a UI element, request, session, plugin, configuration, query, record, runtime execution, service, container, or another observable state.

DFI can operate in exploratory, validation, comparative, tracing, isolation, and verification modes.

## Seven-phase cycle

1. **Delimit the problem** — define the observable symptom, environment, scope, and constraints.
2. **Form hypotheses** — express candidate explanations that can be tested.
3. **Select the diagnostic test** — choose the next probe with the greatest useful diagnostic value.
4. **Execute and capture evidence** — instrument minimally and record what the system actually does.
5. **Reason and update** — reject, weaken, refine, or prioritize hypotheses using the evidence.
6. **Identify cause and correct minimally** — apply the smallest justified intervention.
7. **Verify and close** — reproduce the expected behavior, check regressions, and remove temporary instrumentation.

Read the operational specification in [docs/methodology.md](docs/methodology.md).

## Scope

| Surface | Typical evidence |
|---|---|
| WordPress / CMS | hooks, options, roles, plugin state, PHP runtime, database records |
| Frontend | DOM, component state, routes, browser console, network traffic |
| Angular / React / Vue | services, guards, signals/hooks, stores, rendering state |
| Backend / APIs | middleware, authentication, services, logs, traces, responses |
| Databases | queries, constraints, RLS, indexes, locks, records |
| DevOps / SRE | processes, deployments, containers, network, configuration |
| Defensive security | integrity, permissions, persistence indicators, authorized logs and traffic |

## Research status

DFI v1.0 is a **foundational methodological proposal**. Expected improvements in diagnosis time, precision, productivity, quality, risk reduction, and reproducibility are research hypotheses that require controlled empirical validation.

See [docs/validation.md](docs/validation.md) for the proposed evaluation framework.

## Repository contents

- [docs/methodology.md](docs/methodology.md) — operational DFI method
- [docs/terminology.md](docs/terminology.md) — core vocabulary
- [docs/validation.md](docs/validation.md) — empirical validation plan
- [templates/dfi-case-template.md](templates/dfi-case-template.md) — reusable case template
- [schemas/dfi-case.schema.json](schemas/dfi-case.schema.json) — machine-readable case structure
- [examples/sample-case.json](examples/sample-case.json) — compact example
- [examples/adaptive-probe-demo.js](examples/adaptive-probe-demo.js) — educational JavaScript demo
- [docs/index.html](docs/index.html) — static project landing page source

## Quick start

Document a case using the template, capture evidence after every diagnostic test, and only promote a hypothesis to a conclusion when the recorded evidence supports it. The included JavaScript demo illustrates adaptive hypothesis updates:

~~~bash
node examples/adaptive-probe-demo.js
~~~

## Citation

> Quispe, Omar Argenes. (2026). *Debugging for Instances (DFI): Marco metodológico de diagnóstico y depuración de software asistido por inteligencia artificial y basado en evidencia* (Version 1.0). Zenodo. https://doi.org/10.5281/zenodo.22986103

GitHub-compatible metadata is available in [CITATION.cff](CITATION.cff).

## Licensing

DFI documentation is distributed under **CC BY-NC-ND 4.0**, consistent with the foundational publication. Reference source-code examples are licensed separately under the **MIT License**. See [LICENSE.md](LICENSE.md).

Licensing applies to the concrete materials in this repository; it does not create exclusive ownership over abstract debugging ideas, general engineering practices, independently developed methods, or prior scientific work.

## Responsible use

Security-related examples must be defensive, authorized, and evidence-driven. Do not submit credentials, private customer data, destructive payloads, persistence tooling, or material intended for unauthorized access.

See [SECURITY.md](SECURITY.md) and [CONTRIBUTING.md](CONTRIBUTING.md).

---

**DFI v1.0 — Foundational repository**  
© 2026 Omar Argenes Quispe