# DFI-008 — WordPress site serving a hosting default page

## Status
Mode: HTTP surface isolation
Stack: WordPress, managed hosting/Plesk, browser and HTTP probes
Outcome: hosting and application symptoms separated; root cause unresolved

## Observable problem
A WordPress site's public root no longer displayed the site and instead served the hosting platform's default page after maintenance/update activity.

## Read-only probes
A browser/HTTP probe tested multiple application surfaces and followed redirects.

Observed behavior included:
- `/` served the hosting default page;
- `/wp-login.php` returned HTTP 200;
- `/wp-json/` returned HTTP 500;
- `/wp-content/` remained reachable;
- the visible default page did not load the normal WordPress site stylesheets.

## Hypothesis updates
The evidence suggested at least two layers of failure:
1. the public root was being served by an incorrect/default hosting entry point or routing path;
2. the WordPress application also exposed an independent application failure through the REST endpoint.

## What was not proven
The evidence did not establish whether the public default page was caused by DNS, virtual-host mapping, document-root selection, deployment state, or another hosting configuration.

No correction or post-fix verification is claimed.

## DFI significance
The case demonstrates how read-only probes can prevent premature attribution to plugins. The root page and WordPress endpoints were tested independently, revealing that the visible symptom likely crossed hosting and application layers.