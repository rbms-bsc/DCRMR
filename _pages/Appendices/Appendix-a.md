---
layout: single
type: docs
title: A — MARC 21 Descriptive Conventions Source Codes
permalink: /DCRMR/appendices/Appendix-a/
sidebar:
  nav: "docs"
---

## Contents:
{: .no_toc .text-delta }

- TOC
{:toc}

## A1 Introduction

In MARC 21 bibliographic records, a code may be used in field **040 $e** to indicate when specific cataloging conventions have been followed *in addition to* the conventions identified in the descriptive cataloging form (Leader/18). This appendix offers guidance in using **dcrmr**, the description convention source code designating DCRMR, in **040 $e**.

DCRMR is intended to be used with the current version of the [RDA Toolkit](https://www.rdatoolkit.org/){:target="_blank"} (previously known as the Beta Toolkit). In field 040, use codes **$e rda $e dcrmr**, in this order, directly following the language of cataloging (**040 $b**), (e.g., **$b eng $e rda $e dcrmr**). In LDR/18 (Descriptive cataloging form), use code **i** (ISBD punctuation) or **c** (ISBD punctuation omitted) in accordance with the cataloger’s institutional practices (see [PCC Guidelines for Minimally Punctuated Records](https://www.loc.gov/aba/pcc/documents/PCC-Guidelines-Minimally-Punctuated-MARC-Data.docx){:target="_blank"} for further guidance).

The current iteration of DCRMR includes instructions for cataloging books only and is aligned with the current version of the [RDA Toolkit](https://www.rdatoolkit.org/){:target="_blank"}. If cataloging a non-book format or if using the [Original Toolkit](https://original.rdatoolkit.org/){:target="_blank"}, please continue to follow the guidance outlined in the [BSC statement on DCRM and RDA](https://rbms.info/dcrm/rda/#BSC-statement-on-DCRM-and-RDA){:target="_blank"} to either: 

+ Create records using the rare materials provisions of the [RDA BIBCO Standard Record](http://www.loc.gov/aba/pcc/bibco/documents/PCC-RDA-BSR.pdf){:target="_blank"}. In field 040, use code **$e rda**, with an additional **$e** for the appropriate DCRM manual
+ Create records using AACR2 with the appropriate format-specific DCRM manual, using RDA to construct access points. Add the descriptive convention source code to the 040 as directed in the DCRM manuals (e.g., **$e dcrmb**)

## A2 Full-level DCRMR 

Apply the code **rda** followed by **dcrmr** to records for resources cataloged at full level (i.e., the normative application of these rules). The fact that such records follow the full-level provisions of DCRMR is indicated by the blank value assigned in the encoding level (Leader/17) and the codes **rda** and **dcrmr** in **040 $e**.

## A3 Collection-level DCRMR

Guidance for creating collection-level DCRMR records is forthcoming. 

## A4 Minimal-level DCRMR 

Guidance for creating minimal-level DCRMR records is forthcoming.

## A5 Microforms and digital reproductions of books 

Apply the code **rda** followed by **dcrmr** to records for microforms and digital reproductions of books if the descriptive portion of the record conforms to DCRMR (full, core, or minimal level). If, however, DCRMR (full, core, or minimal level) is not used in all aspects (e.g., if the dimensions of the book are not recorded in the physical description area), do not code **dcrmr**.

## A6 Earlier codes 

If an existing record contains an earlier code in **040 $e**, such as **dcrmb** ([Descriptive Cataloging of Rare Materials (Books)](https://rbms.info/dcrm/dcrmb/){:target="_blank"}), **dcrb** (*Descriptive Cataloging of Rare Books*), or **bdrb** (*Bibliographic Description of Rare Books*), and the description is being re-described to DCRMR standards, delete the earlier code and add the **rda** and **dcrmr** codes.

---

[![Image of Left Arrow](https://rbms-bsc.github.io/DCRMR/assets/pictures/navigation/Arrow_Left.png "Appendices")](/DCRMR/appendices/) [![Image of Right Arrow](https://rbms-bsc.github.io/DCRMR/assets/pictures/navigation/Arrow_Right.png "B — Collection-level records")](/DCRMR/appendices/Appendix-b/)
