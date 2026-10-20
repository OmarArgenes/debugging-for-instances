# DFI-004 — Slow WordPress contact page

## Status
Mode: profiling + isolation  
Stack: WordPress, Query Monitor, form plugin  
Outcome: major hypotheses excluded; exact slow callback unresolved

## Observable problem
A contact page showed very slow server-side generation.

## Evidence
Query Monitor captured approximately:
- total generation time: 10.99 s;
- SQL time: 0.15 s;
- query count: 85;
- actual WordPress HTTP API calls: none for the measured request.

Execution time clustered around major lifecycle phases:
- `plugins_loaded`: ~2.53 s;
- `init`: ~2.68 s;
- `wp_head`: ~4.19 s.

## Hypothesis updates
- Database latency was not supported as the primary cause.
- External WordPress HTTP API latency was not supported as the primary cause.
- Plugin/theme callback execution inside lifecycle hooks remained the strongest area for further isolation.

## Functional optimization test
A form-asset unload rule with an exception for the contact page was validated functionally: the form still rendered and required-field validation worked.

However, the historical record does not preserve sufficient before/after timing evidence to claim a measured performance improvement.

## DFI significance
This case demonstrates hypothesis elimination: expensive SQL and external HTTP calls were plausible suspects but were contradicted by measurements. The diagnostic surface moved toward hook/callback timing.

## Unresolved item
The individual callback responsible for the remaining delay was not measured to closure.