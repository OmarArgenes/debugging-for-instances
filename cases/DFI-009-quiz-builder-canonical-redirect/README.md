# DFI-009 — Quiz Builder canonical redirect

## Status
Mode: routing + query-state tracing  
Stack: WordPress, LearnDash, Instructor Role, rewrite rules  
Outcome: redirect cause narrowed; final rendering fix unresolved

## Observable problem
A frontend Quiz Builder URL matched a rewrite rule but redirected with HTTP 301 to the site home instead of rendering the builder.

## Evidence
- The quiz existed and was editable by an administrator.
- The site's permalink structure was `/%postname%/`.
- A rewrite rule for Quiz Builder existed.
- Runtime query state did not contain the expected builder query variables.
- WordPress `redirect_canonical` returned a redirect to the home page.

## Diagnostic intervention
Registering the missing query variables stopped the home redirect, but the request then rendered the Blog page instead of the Quiz Builder.

## Supported conclusion
The canonical redirect was related to missing/incorrect request query state, but restoring those variables alone did not complete routing to the intended builder template.

## Verification status
Partially diagnosed. No final rendering fix is claimed.

## DFI significance
The case shows that eliminating one visible symptom can reveal a second routing failure. DFI therefore treats each result as evidence for the next hypothesis rather than as proof of full resolution.