# Historical DFI Incident Inventory

This inventory is a staging document for mining prior engineering conversations into public DFI case studies.

## Rules

- A conversation is not automatically promoted to a formal DFI case.
- Public cases must preserve only supported facts.
- Missing metrics, timestamps, causes, fixes or verification remain unknown.
- Client names, personal names, private URLs, credentials and sensitive identifiers are removed.
- Security cases are documented defensively and omit exploit-enabling detail.
- Duplicate incidents are merged when they describe the same diagnostic chain.

## Formalized cases

DFI-001 through DFI-017 are listed in `cases/README.md` and `docs/cases.json`.

## Additional candidate incidents requiring deeper source review

| Candidate | Symptom / theme | Current evidence status |
|---|---|---|
| C-018 | WordPress/PHP 8.4 deprecation and compatibility warnings across LearnDash/BuddyBoss | Measured warnings available; not yet a single closed incident |
| C-019 | PHP-FPM / OPcache memory saturation | Resource saturation observed; causal link to a user-visible incident needs stronger evidence |
| C-020 | Wiki/category page CSS/design test with a 404 request | Screenshot evidence exists; cause/fix not yet recovered |
| C-021 | WordPress page blank/spinner while assets and third-party requests load | Network evidence exists; cause unresolved |
| C-022 | Unauthorized or unexpected Google Search Console ownership after compromise | Security follow-up evidence exists; access/removal verification needs review |
| C-023 | Multilingual product request path not visible in frontend | Needs reconstruction of page/content configuration and post-fix verification |
| C-024 | Product request/data-sheet action downloading directly instead of opening form | Needs exact before/after evidence from TYPO3 configuration |
| C-025 | Incorrect image/banner asset with malformed text after prior compromise/change | Asset-origin problem documented; original-source recovery status needs review |
| C-026 | Hidden spam/unauthorized content rendered after WordPress footer | Security symptom known; exact injector and cleanup chain needs source recovery |
| C-027 | Site inaccessible through expected FTP/SFTP/SSH ports during outage investigation | Connectivity evidence exists; application root cause needs separation |
| C-028 | SMTP/mail delivery configuration and sender validation | Successful tests exist in some projects; need isolate actual failure incidents |
| C-029 | reCAPTCHA / form submission protection configuration incidents | Configuration history exists; need identify concrete failure/verification episodes |
| C-030 | Netlify/Angular deployment or production-state incidents | Project history exists; need recover concrete symptom/probe/fix sequences |
| C-031 | Multilingual routing/content visibility mismatches in CMS | Multiple episodes likely; need separate distinct causes and avoid duplicates |
| C-032 | Backup/restore selection where recent backups may already contain malware | Strong decision evidence exists; needs a precise case boundary and final outcome |

## Mining queue

Future archival passes should search historical chats by technical surface instead of only by project name:

1. WordPress roles, capabilities, AJAX, rewrite rules, media, cache, forms and plugins.
2. TYPO3/Powermail/TCA/multilingual attachment and form flows.
3. Plesk/Linux/DNS/SSL/SMTP/Redis/PHP-FPM infrastructure.
4. Angular/SSR/Netlify/CI/deployment/runtime routing.
5. Malware, integrity, unauthorized ownership, injected scripts and backup recovery.
6. Performance, Query Monitor, database queries, lifecycle hooks and resource saturation.
7. UI/DOM/CSS/media-origin investigations.

## Research use

This inventory is intentionally conservative. Its purpose is to preserve discoverable leads for future DFI evidence extraction without turning incomplete memories into scientific claims.