# DFI-003 — Unexpected WordPress backend redirect

## Status
Mode: tracing + isolation  
Stack: WordPress, HTTP redirect, instructor-role plugin  
Outcome: redirect origin identified; final correction/verification not preserved

## Observable problem
A non-administrator instructor account attempting to access a WordPress backend path received an HTTP 302 redirect to the public site instead of the expected backend view.

## Investigation
The investigation traced the redirect rather than assuming it originated from BuddyBoss or from a generic lockdown snippet.

## Evidence
The redirect path was attributed to the instructor-role plugin method `Instructor_Role_Settings->toggle_instructor_backend_access` in the plugin's backend-access logic.

The affected account did not have `manage_options`, which was consistent with plugin-specific backend restrictions being relevant.

## Supported diagnosis
The redirect originated from the instructor-role plugin's backend-access control, not from the initially suspected BuddyBoss path.

A configuration state equivalent to the instructor backend dashboard being disabled was the leading operational explanation.

## Correction and verification
The historical record does not preserve a completed correction and post-fix verification. This case is therefore classified as origin identified, not fully resolved.

## DFI significance
The case illustrates tracing a visible HTTP symptom to the exact plugin/class/method responsible, avoiding unrelated configuration changes.