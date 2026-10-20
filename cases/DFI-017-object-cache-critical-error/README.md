# DFI-017 — WordPress frontend recovered after Redis/Object Cache flush

## Evidence status

**Date:** 2026-06-28  
**Mode:** reversible cache-state validation  
**Stack:** WordPress, Redis Object Cache  
**Outcome:** frontend recovered immediately; deeper trigger not established

## Observable problem

The WordPress frontend entered an error state described as:

```text
500 Internal Server Error
```

/ a critical-error page, while WordPress administration remained accessible.

A preserved WordPress critical-error message from the environment was:

> “There has been a critical error on this website.”

## Cache context

The environment used Redis/Object Cache. A plugin inventory from the same system records:

```text
Redis Object Cache 2.7.0
```

## Diagnostic intervention

The recorded action was performed from the WordPress administration UI:

```text
Object Cache → Flush Cache / Purge Cache
```

The user then reported:

```text
borré cache y funcionó
```

and the environment reported:

```text
Object cache flushed
Redis: Connected / Reachable
```

## Before / after evidence

### Before

- frontend: critical error / HTTP 500;
- backend: still accessible.

### Intervention

- flush persistent object cache.

### After

- frontend recovered immediately.

## Console evidence

A browser-console message observed around the incident was:

```text
Uncaught (in promise) AbortError: Transition was skipped
```

It was not established as the cause of the server-side failure and is therefore not used as root-cause evidence.

## Verification scope

A wider smoke-test set was proposed for routes such as Home, Events, Courses, Jobs, Members, MEC submission and wp-admin.

The historical record confirms frontend recovery after the flush, but it does not preserve a route-by-route result for every proposed smoke test.

## Supported conclusion

Persistent object-cache state was materially involved because a cache flush changed the failing frontend state to a working state with no documented code deployment between those observations.

## What remains unknown

The investigation did **not** identify:

- the specific Redis key/object;
- the plugin or operation that created the invalid/stale state;
- whether the cached state was corrupt, incompatible after an update, or stale for another reason.

## DFI significance

The case records a verified recovery action without overstating it as a complete root-cause analysis. DFI separates “this intervention changed the outcome” from “we know what originally poisoned the cache.”
