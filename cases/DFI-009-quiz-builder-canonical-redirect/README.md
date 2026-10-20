# DFI-009 — Frontend Quiz Builder redirect caused by unloaded dependencies

## Evidence status

**Date:** 2026-10-02  
**Mode:** request tracing + routing + dependency isolation  
**Stack:** WordPress, LearnDash 5.1.9, Instructor Role 5.9.13, BuddyBoss Platform 3.5.0, Asset CleanUp  
**Outcome:** resolved and verified

## Observable problem

A quiz could be created successfully, but opening its frontend editor at:

```text
/quiz-builder/3004/
```

redirected to the site home instead of rendering the Frontend Quiz Builder.

## Creation-path evidence

The quiz creation AJAX call succeeded:

```text
POST /wp-admin/admin-ajax.php
action = ir_fqb_new_quiz
status = 200
```

The preserved response included:

```json
{
  "status": "success",
  "post_id": 3004,
  "post_title": "DFI Quiz 02",
  "post_status": "draft",
  "quiz_url": "/quiz-builder/3004"
}
```

This separated quiz creation from quiz-editor routing.

## Rewrite evidence

The route existed:

```text
^quiz-builder/([\d]+)/?$
→ index.php?quiz_builder=true&ir_quiz=$matches[1]
```

The quiz existed, was a `sfwd-quiz`, remained in draft status and was editable by the test account.

## Intermediate routing evidence

A DFI trace observed the expected query variables missing at runtime and WordPress canonical handling redirecting toward the site root. A temporary query-variable probe changed the behavior but still did not render the correct editor; at one stage the Blog page appeared.

That evidence was useful, but it was not treated as the final root cause.

## Dependency evidence

Asset CleanUp had required components unloaded globally while its route exceptions did not include `quiz-builder`.

Instructor Role exception before correction:

```regex
#^/(instructor-dashboard|create-course|course-builder)(?:/|\?|$)#
```

Corrected:

```regex
#^/(instructor-dashboard|create-course|course-builder|quiz-builder)(?:/|\?|$)#
```

LearnDash used the same route-exception strategy and also required `quiz-builder` in its exception.

## Final correction

The `quiz-builder` route was added to Asset CleanUp exceptions for the dependencies required by the frontend editor, specifically Instructor Role and LearnDash.

Temporary DFI tracing snippets were removed after the diagnosis.

## Verification

After the exceptions were corrected:

- the edit/pencil action opened `/quiz-builder/3004/`;
- the **Frontend Quiz Builder** rendered;
- the UI displayed **Quiz Page**, **Builder**, and **Settings**;
- the quiz could be saved and remained visible in Final Quizzes.

## Root cause

The rewrite existed, but Asset CleanUp was unloading dependencies required to execute the Frontend Quiz Builder on that route.

## DFI significance

The investigation did not stop at the first plausible routing explanation. Each probe changed the hypothesis set until dependency loading both explained and resolved the behavior.
