# DFI-004 — Slow WordPress Contact page

## Evidence status

**Date:** 2026-07-08  
**Mode:** profiling + hypothesis elimination  
**Stack:** WordPress, Query Monitor, BuddyBoss theme/plugin stack  
**Outcome:** major causes excluded; exact slow callback not isolated to closure

## Observable problem

The Contact page had very slow server-side generation.

## Query Monitor evidence

Preserved measurements:

```text
Page generation time: 10.99 s
Database time:        0.15 s
Queries:              85
HTTP API calls:       none for this request
```

Hook/lifecycle timings included:

```text
plugins_loaded  2.5312 s
init            2.6796 s
wp_head         4.1945 s
wp_body_open    0.1972 s
wp_footer       0.1260 s
shutdown        0.1416 s
```

## Interpretation

The evidence weakened two common hypotheses:

### H1 — Slow database is the primary cause

Not supported. SQL accounted for only about 0.15 s of an approximately 10.99 s request.

### H2 — External WordPress HTTP API calls are blocking the page

Not supported for the measured request. Query Monitor showed no executed HTTP API calls.

## Remaining diagnostic surface

The largest measured time was inside WordPress lifecycle execution, especially:

- `plugins_loaded`;
- `init`;
- `wp_head`.

Callbacks visible around `wp_head` included components from BuddyBoss Theme, Elementor/Pro, Yoast, GamiPress, WPCode, WooCommerce, Gravity Forms and Asset CleanUp.

**Important:** visibility in the hook list did not prove any one of those components caused the delay.

## Diagnostic artifacts

The exact Query Monitor screenshots are not stored in this public case, but the measured values above were preserved in the engineering record.

An exact before/after performance result for a later asset-unload experiment was not preserved, so this case does not claim a measured speedup from that experiment.

## Supported conclusion

The bottleneck was primarily outside SQL and outside executed WordPress HTTP API calls, and further isolation needed callback-level timing inside lifecycle hooks.

## Verification status

**Partially diagnosed.** The individual slow callback was not measured to closure.

## DFI significance

The value of the case is negative evidence: DFI removed attractive but weak hypotheses and redirected effort toward the execution phases that actually consumed the request time.
