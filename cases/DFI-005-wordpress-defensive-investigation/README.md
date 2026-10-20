# DFI-005 — Defensive investigation of compromised WordPress admin behavior

## Evidence status

**Date:** October 2026  
**Mode:** cross-layer defensive tracing  
**Stack:** WordPress, UpdraftPlus workflow, DevTools, PHP/theme, must-use plugins  
**Outcome:** multiple compromise indicators confirmed; partial remediation; no claim of full forensic closure

## Observable problem

A legitimate restore control in WordPress stopped behaving normally. A simple plugin/AJAX failure was initially plausible.

## Browser-side evidence

The related administrative AJAX path could return HTTP 200, including a normal environment message such as:

```text
Working binary zip found: /usr/bin/zip
```

That weakened the hypothesis that the restore endpoint itself was simply unavailable.

Event/script tracing then identified injected browser behavior that installed a document-level click handler and called:

```js
e.preventDefault()
```

The injected flow presented a fake CAPTCHA/social-engineering interaction instead of allowing the expected administration action.

## Preserved DFI probe pattern

The private incident record preserved a script search of the form:

```js
(() => {
  const rx = /<redacted-malicious-indicator>|all\.min\.js|showCaptcha/i;
  const rows = [...document.scripts]
    .filter(s => rx.test(s.src || s.textContent))
    .map(s => ({ source: s.src || '[inline]', id: s.id || '-' }));
  console.table(rows);
})();
```

A same-origin HTML fetch was also used to determine whether the suspicious indicator was present in server-delivered HTML rather than only injected after load:

```js
(async () => {
  const html = await fetch(location.href, {
    credentials: 'same-origin',
    cache: 'no-store'
  }).then(r => r.text());

  // indicator value intentionally redacted in the public case
  console.log({ htmlLength: html.length });
})();
```

The exact malicious domain/payload is intentionally not republished here.

## Server-side integrity evidence

The defensive review confirmed unauthorized artifacts in more than one persistence surface, including:

- injected code in a child-theme `functions.php`;
- a block identified as `wphc-theme-compat` / Base64-related code;
- `mu-plugins/wph-auto-cache.php`, which also produced errors around line 333;
- an unauthorized upload/backdoor-style plugin directory.

This established that the incident was not just one blocked remote JavaScript request.

## Remediation actions preserved

- a cleaned copy of the affected `functions.php` was uploaded;
- the malicious/suspicious must-use component was disabled by renaming it;
- known unauthorized application artifacts were removed/disabled;
- preservation of logs, backups and database evidence was recommended;
- trusted reinstall/cleanup, credential/session/salt rotation and staging verification were recommended.

## Important failed experiment

Temporarily blocking the suspicious remote resource prevented it from loading, but the Restore control still did not become a reliable working path.

Therefore:

`block remote script` ≠ `site remediated`.

## What was not established

The historical evidence did **not** establish:

- the exact initial compromise vector;
- the exact first compromise date;
- the complete PHP/database injection chain;
- proof that every persistence mechanism was removed;
- a final forensic clean-state certification.

## Verification status

**Partially verified / not forensically closed.**

Verified observations:
- the suspicious browser behavior was reproducibly detected;
- multiple unauthorized server-side artifacts were confirmed;
- blocking one remote resource did not restore the full workflow;
- selected known unauthorized components were cleaned or disabled.

Not verified:
- complete removal of every persistence mechanism;
- complete recovery of the Restore workflow;
- forensic clean-state certification.

## DFI significance

The investigation moved through several evidence surfaces:

`UI symptom` → `AJAX behavior` → `event listener/script evidence` → `server-side integrity`.

That cross-layer movement is exactly the type of adaptive diagnostic path DFI is intended to formalize.

## Safety

This public version is intentionally sanitized. Credentials, customer identifiers, private URLs and exploit-enabling payload details are not published.
