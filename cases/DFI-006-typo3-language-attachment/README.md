# DFI-006 — TYPO3 English form attaches the German PDF

## Evidence status

**Date:** 2026-10-17  
**Mode:** cross-layer tracing + falsification by configuration change  
**Stack:** TYPO3 12.4.36, Powermail, multilingual product/download flow  
**Outcome:** failure reproduced; visible page configuration falsified as sole cause; backend selection logic remained unresolved

## Observable problem

The English data-sheet request produced an English form/email flow, but the attachment was the German technical data sheet.

## Relevant records

The product records under investigation were documented as:

```text
DE product UID: 304
EN translation UID: 388
```

The rendered English page still exposed:

```text
body.id = p304
cartcontent = p304
```

The Powermail form was:

```text
form: 2
content element observed: c4742
EN POST target: /en/download-data-sheet/
DE POST target: /de/datenblatt-herunterladen/
action: checkCreate
controller: Form
```

## Attachment evidence

German PDF:

```text
file UID: 1420
8420100_TDS_DE_Admerginsaeure_v20240412.pdf
/user_upload/hobum/Downloads/Produkte/DE/
```

English PDF:

```text
file UID: 1392
8420100_TDS_EN_Admergin_acid_ADA_v20250826.pdf
/user_upload/hobum/Downloads/Produkte/EN/
```

The failing English request attached the German file.

## Frontend code evidence

The recovered frontend code included:

```js
$("#powermail_field_cartcontent").val($("body").attr("id"))
```

and another cart path that also wrote the field:

```js
$('#powermail_field_cartcontent').val(submitval)
```

This explained why `cartcontent` could remain tied to `p304` even in the English flow.

## Falsification test

The English product/download configuration was changed so `product_downloads` pointed only to the English PDF (UID 1392).

**Observed result:** the next English test still attached the German PDF.

That result falsified the hypothesis that the visible `product_downloads` field alone selected the email attachment.

## TypoScript search evidence

Visible TypoScript searches returned:

```text
cartcontent       0
product_downloads 0
addAttachment     0
attachment        0
prefill           4
```

The active Powermail setup exposed standard processors/finishers and did not reveal an obvious active `addAttachment` rule responsible for the German file.

## Supported conclusion

The attachment selection was occurring outside the page-level field that had just been changed. The remaining investigation had to move to custom PHP / hook / listener / extension logic that selected the outgoing attachment.

## Verification status

**Unresolved at backend-code level.** No permanent attachment-selection correction is claimed in this case.

## DFI significance

This case is a strong DFI example because an actual configuration change was used as a falsification test. When the observable result did not change, the investigation moved to a new technical layer instead of repeating the same configuration edits.
