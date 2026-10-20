# DFI-008 — WordPress site serving a Plesk default page

## Evidence status

**Date:** 2026-10-13  
**Mode:** read-only HTTP surface isolation + filesystem validation  
**Stack:** WordPress, Plesk hosting, browser Console, file manager  
**Outcome:** default-page cause identified and removed; independent WordPress REST failure remained

## Observable problem

The public root displayed **“Web Server's Default Page”** / Plesk content instead of the WordPress site.

## DFI read-only probe

The historical DFI script used browser-side `fetch` + `DOMParser` to inspect several routes and report status/final URL and whether returned HTML looked like Plesk or WordPress.

Tested surfaces included:

```text
/
/index.php
/wp-admin/
/wp-admin/index.php
/wp-login.php
/wp-json/
/wp-content/
```

It also inspected loaded CSS/assets and copied the resulting report as JSON.

The complete original script text is not preserved in this public case, so no reconstructed script is presented as exact history.

## Preserved outputs

```text
/index.html          200  Plesk      432 bytes
/index.php           200  final "/"  Plesk
/wp-admin/           200  WordPress  383255 bytes
/wp-admin/index.php  200  WordPress  383300 bytes
/wp-login.php        200  WordPress  47360 bytes
/wp-json/            500  WordPress  2730 bytes
```

This separated the public-root symptom from WordPress availability.

## Filesystem validation

The file manager confirmed:

```text
wiki/index.html
size: 432 bytes
content: "Web Server's Default Page" / "Plesk International GmbH"
```

That matched the browser probe.

## Minimal reversible correction

The file was preserved rather than deleted:

```text
index.html
→ index.html.plesk-backup.html
```

## Verification

After renaming the file, the public root no longer presented the Plesk default page.

However, `/wp-json/` still returned HTTP 500, so the application-layer problem was kept as a separate unresolved symptom.

## Supported conclusion

The visible Plesk page at the root was caused by the physical default `index.html` taking precedence in the hosting/document-root path. WordPress itself was still present and independently unhealthy on at least one endpoint.

## DFI significance

The probe prevented an incorrect conclusion that WordPress was gone. It separated the web-server entry point from application health before applying a reversible change.
