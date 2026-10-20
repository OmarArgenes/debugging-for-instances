# DFI-014 — Allowing certificate editing without opening the full WordPress backend

## Evidence status

**Date:** 2026-09-09  
**Mode:** redirect tracing + constrained authorization correction  
**Stack:** WordPress, LearnDash 5.1.9, Instructor Role 5.9.13, Certificate Builder 1.1.5  
**Outcome:** resolved and functionally verified

## Requirement

Instructor backend access had to remain disabled globally, but an instructor still needed to edit **their own** LearnDash certificate with the Certificate Creator.

## Observable problem

The frontend control **Edit with Certificate creator** ultimately opened a WordPress backend editor URL of the form:

```text
/wp-admin/post.php?post=1781&action=edit
```

The certificate was:

```text
post type: sfwd-certificates
author: the instructor account
current_user_can('edit_post', 1781): true
```

Despite that post-level capability, the account was redirected away from wp-admin.

## Redirect evidence

Deep tracing identified:

```text
Instructor_Role_Settings->toggle_instructor_backend_access
hook: init
priority: 10
```

as the component performing the backend redirect.

This is the same origin documented independently in DFI-003.

## Constraint

The product requirement explicitly rejected simply enabling the Instructor backend dashboard.

The general backend had to remain blocked.

## Correction strategy

A narrow bridge was implemented for the certificate-edit request only.

The preserved Bridge v3.x logic checked:

```text
request is post.php
action is edit or editpost
post type is sfwd-certificates
current user owns the certificate
current_user_can('edit_post', post_id) is true
```

Only under that constrained condition was the Instructor Role backend redirect removed from the request.

The later bridge revision also preserved post type/ownership during save and isolated the normal admin UI so the exception did not become general backend access.

### Fidelity note

The original full PHP Bridge v3.1 code existed in the engineering chat, but the complete literal code block is not available in the current public reconstruction. The checks above are preserved facts; this document does not fabricate a replacement code block and call it historical evidence.

## Verification

The recorded outcome confirmed:

- the instructor could edit their own certificate;
- the Certificate Creator workflow opened;
- the ordinary `/wp-admin/` restriction remained in place.

## Root cause

A global Instructor Role backend restriction intercepted a legitimate post-level edit request even when the instructor had permission to edit the owned certificate.

## DFI significance

The correction was narrower than the failing policy. DFI traced the exact redirect origin and then removed that restriction only inside an evidence-backed authorization envelope.
