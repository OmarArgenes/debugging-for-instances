# DFI — Diagnostic Artifact Policy

DFI case records should preserve the **actual technical work performed**, not only the narrative conclusion.

## What to capture

Whenever available and safe to publish, each case should include:

- exact DevTools / browser-console probes;
- shell, WP-CLI, TYPO3 CLI, framework CLI or database commands;
- relevant code snippets;
- minimal before/after configuration diffs;
- HTTP request/response details;
- SQL queries and result shape;
- stack traces or log excerpts;
- screenshots or redacted evidence files;
- commit/change references;
- verification commands and observed outputs.

## Evidence fidelity

A case must distinguish between:

1. **Exact preserved artifact** — copied from the original investigation.
2. **Sanitized exact artifact** — same diagnostic logic with secrets/private identifiers removed.
3. **Reconstructed pseudocode** — useful explanation, but not presented as the historical command.
4. **Narrative-only evidence** — the action is known, but the original command/code was not preserved.

Never invent an exact historical command, output, timestamp, metric, stack trace, or code fragment.

## Security and privacy

Do not publish:

- credentials, tokens, cookies or secrets;
- private customer URLs or internal hostnames unless explicitly approved;
- personal/user-identifying data;
- exploit-ready malicious payloads;
- sensitive production dumps;
- proprietary code that the author is not permitted to redistribute.

Security cases may describe defensive probes and remediation while redacting details that would materially enable abuse.

## Why this matters

The code, command, output and verification trail make DFI cases more reproducible, auditable and useful for scientific review. The narrative explains the reasoning; the artifacts show what actually happened.
