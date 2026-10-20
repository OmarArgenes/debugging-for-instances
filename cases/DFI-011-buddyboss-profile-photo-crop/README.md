# DFI-011 — BuddyBoss profile-photo crop failure

## Evidence status

**Date:** 2026-09-02  
**Mode:** controlled comparison + hypothesis elimination  
**Stack:** WordPress, BuddyBoss profile photo flow, Imagick, Offload Media  
**Outcome:** environment-wide image-processing hypothesis weakened; failing-user cause unresolved

## Observable problem

After selecting a crop area, one user received:

> “There was a problem cropping your profile photo”

## Environment evidence

The image-processing environment reported:

```text
WP image editor: WP_Image_Editor_Imagick
ImageMagick: 6.9.11-60
Imagick PHP extension: 3.8.1
uploads: enabled
resource/memory limit observed: 128 MB
formats: JPG/JPEG/PNG/WEBP supported
```

## Offload hypothesis

The media-offload path was checked.

Observed state:

```text
Offload Media: Not Connected
BuddyBoss Avatars & Covers offload/removal option: disabled
Remove media from server: disabled
```

That weakened the hypothesis that active offloading was removing the source image before BuddyBoss could crop it.

## Controlled comparison

The same feature was tested with an administrator/test account.

Observed success message:

```text
Your new profile photo was uploaded successfully.
```

The related `admin-ajax.php` requests returned HTTP 200.

## Interpretation

The successful control test showed that:

- the basic BuddyBoss avatar flow could work on the same server;
- Imagick could process at least the control upload;
- the failure was not demonstrated to be a universal server-wide crop failure.

## Missing evidence

The historical record does not preserve:

- the originally failing user's exact AJAX request/response body;
- a PHP error/log tied to the failing crop;
- a confirmed file-specific or account-specific difference;
- a corrective change;
- a post-fix verification for the originally failing user.

The requested next test was to reproduce with the same image/account while capturing the failing AJAX response, but that result was not preserved.

## DFI significance

A working control case materially narrowed the hypothesis space. The investigation avoided blaming Imagick or Offload Media without evidence.
