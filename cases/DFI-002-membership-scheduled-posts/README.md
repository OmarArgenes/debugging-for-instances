# DFI-002 — Premium membership detected incorrectly during Scheduled Posts

## Evidence status

**Date:** 2026-09-08  
**Mode:** comparative + runtime tracing  
**Stack:** WordPress, BuddyBoss Scheduled Posts, WooCommerce Memberships, AJAX, WPCode/custom PHP  
**Outcome:** resolved and positively verified

## Observable problem

An active Premium member received:

> “You don't have access to schedule the activity.”

while another Premium member could schedule successfully.

A static capability/role comparison did not explain the difference.

## Runtime request

The failing workflow used:

```text
POST /wp-admin/admin-ajax.php
action=post_update
object=user
```

The original trace included a concrete user ID; it is omitted from the public case.

## Preserved runtime evidence

The DFI instrumentation showed:

```text
filter_args: []
BuddyBoss permission before custom rule: false
BuddyBoss permission after yakuma_premium_can_schedule_activity: false
feature enabled: true
group context: false
membership lookup by slug "premium": false
membership lookup by plan ID 605: true
membership status: active
plan: 605 / premium
```

The individual membership record ID is intentionally omitted from the public case.

## Failing implementation

The access snippet **yakUma — Premium Scheduled Posts Access** used:

```php
wc_memberships_is_user_active_member($user_id, 'premium')
```

The runtime evidence contradicted that check: the membership was active, but the slug lookup returned `false`.

## Minimal correction

The membership test was changed to the numeric plan ID:

```diff
- wc_memberships_is_user_active_member($user_id, 'premium')
+ wc_memberships_is_user_active_member($user_id, 605)
```

No administrator capability was granted and the native group restrictions were preserved.

## Verification

After the correction:

- the previously failing Premium member could schedule activity;
- the Premium account that already worked continued to work;
- the flow remained scoped to the intended Premium scheduling rule.

A preserved negative test with a Free/non-Premium account is not available and is not claimed.

## Evidence interpretation

The cause was not “the user has the wrong WordPress role.” The decisive failure occurred inside a **runtime membership lookup**.

## DFI significance

This case demonstrates the value of instrumenting the actual decision path. Static roles looked equivalent; the live dependency returned two different answers for the same active plan depending on how the plan was addressed.

> Related but separate: deletion of an already scheduled activity is documented in DFI-016.
