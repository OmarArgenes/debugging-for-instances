# DFI-003 — Tracing an unexpected WordPress backend redirect

## Evidence status

**Date:** 2026-09-09  
**Mode:** HTTP redirect tracing + origin identification  
**Stack:** WordPress, LearnDash Instructor Role  
**Outcome:** redirect origin identified; the generic backend restriction was intentionally kept in place

## Observable problem

An Instructor account was redirected away from WordPress backend URLs even though the required workflow needed a narrowly scoped backend editor.

The account had the Instructor role and:

```text
manage_options = false
```

## Diagnostic probe

A trace request was made to the backend with a DFI marker:

```text
/wp-admin/?yakuma_dfi_redirect=1
```

## Preserved evidence

The request produced:

```text
HTTP status: 302
destination: site root
```

The redirect trace identified:

```text
InstructorRole\Modules\Classes\Instructor_Role_Settings
  ->toggle_instructor_backend_access
```

in:

```text
/wp-content/plugins/instructor-role/modules/classes/class-instructor-role-settings.php
line 3510
```

called through WordPress redirect handling.

## Hypothesis result

The redirect was **not** attributed to BuddyBoss, a generic WPCode lockdown rule, or missing `manage_options` by itself.

The responsible origin was the Instructor Role backend-access restriction.

## Product decision

The global Instructor backend restriction was not disabled. The requirement was to keep the Instructor backend dashboard blocked while allowing only the specific certificate-edit workflow.

That constrained correction is documented separately in **DFI-014**.

## Verification

Origin identification is verified by the redirect trace. This case intentionally stops at identifying the responsible redirect component; the narrowly scoped correction and its verification belong to DFI-014.

## DFI significance

A visible redirect was traced to the exact plugin class/method and file location before any broad access setting was changed.
