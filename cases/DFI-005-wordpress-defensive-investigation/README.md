# DFI-005 — Defensive investigation of compromised WordPress admin behavior

## Status
Mode: cross-layer defensive tracing
Stack: WordPress, browser DevTools, theme/plugin inspection
Outcome: multiple compromise indicators confirmed; full forensic closure unresolved

## Observable problem
A legitimate administration control stopped behaving normally. The initial symptom could have been mistaken for a backup-plugin or AJAX failure.

## Diagnostic evidence
Browser diagnostics showed that the related administrative request itself could complete successfully, weakening the hypothesis that the endpoint alone was broken.

Event and script tracing revealed injected client-side behavior interfering with normal clicks. Separate server-side inspection also confirmed unauthorized modifications in more than one WordPress persistence surface.

## Supported conclusions
- The visible administration symptom was affected by injected browser-side behavior.
- The incident was not limited to a single remote script or one plugin.
- A narrow client-side block was not sufficient to declare the site remediated.

## Defensive remediation record
The investigation included containment of confirmed unauthorized components, cleanup of known modified application files, and recommendations to preserve evidence, inspect backups offline, rotate access material, reinstall trusted components, and validate the site in a controlled environment before declaring closure.

## Unresolved items
- exact initial compromise vector;
- exact first compromise date;
- proof that all persistence mechanisms were removed;
- final clean-state certification.

Accordingly this case is documented as a defensive investigation with partial remediation, not as a completed forensic cleanup.

## DFI significance
The case demonstrates movement from a visible UI symptom to browser evidence and then to server-side integrity surfaces, showing how one symptom can cross multiple technical layers.

## Safety and privacy
This public record intentionally omits exploit-enabling details, credentials, customer data, private URLs, and sensitive artifacts.