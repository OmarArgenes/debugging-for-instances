# DFI-014 — Certificate editor required controlled backend access

## Status
Mode: tracing + constrained correction  
Stack: WordPress, LearnDash, Instructor Role, certificate builder  
Outcome: redirect barrier corrected; UI-isolation verification partially documented

## Observable problem
A frontend instructor workflow opened a certificate editor that ultimately depended on a WordPress backend edit URL, while instructor backend access was intentionally restricted.

## Evidence
- The course editor itself used a frontend route.
- The certificate edit control was JavaScript-driven.
- DOM inspection exposed a concrete backend edit URL for the certificate post.
- The certificate owner/instructor had edit permission for the certificate.
- The backend redirect originated from the instructor-role backend-access restriction.

## Minimal correction
A narrow bridge removed the redirect only for the required certificate-edit flow while preserving ownership, post type and capability checks.

Additional isolation was added so the ordinary WordPress admin shell was not intended to become generally available.

## Verification
The redirect barrier was reported solved. Further UI-isolation checks were requested for the admin menu/shell and the normal blocked backend path.

## DFI significance
The case shows how a broad access-control rule can be narrowed around one evidence-backed workflow rather than disabled globally.