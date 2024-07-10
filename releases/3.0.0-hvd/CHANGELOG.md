# **Consolidated ChangeLog**

This Changelog provides an overview of the changes incorporated in DCAT-AP HVD 3.0.0. A complete list of the issues closed with this release is accessible on [GitHub](https://github.com/SEMICeu/DCAT-AP/issues?q=is%3Aissue+is%3Aopen+label%3AHVD).

# **Editorial changes**

- resolve spelling mistakes.
- improve captions on figures

# **Adaptations to the different sections**

- remove "this section is non-normative" from Conformance section
- update [section 9](#controlled-vocs) the usage note on HVD Categories to use the most detailed level.
- update [section 10](#mapping-the-hvd-ir-to-dcat-ap) with extended insights on the mapping from HVD IR to DCAT-AP 
- add [section 10.1.1](#guidelines-datasetseries) with a guidelines on the use of Dataset Series
- update [section 10.3](#c2) the usage note on HVD Categories to use the most detailed level.
- add [section 10.5.1](#assessment-support-for-licences) with a guidelines on mapping licences to EU NAL Licencea. 
- include a [section 10.8](#apis-are-mandatory) on the obligation to provide an API and how this can be expressed in DCAT-AP (HVD)
- reword the [section 10.9](#c8) on reporting to align with the most recent recommendations on the Common HVD Reporting.
- add in the  [section 11](#example) an example of the HVD Categories
- update [section 12](#validation) on validation with improved and more SHACL templates.

# **Data model adaptations**

- align min en max cardinalities with advice on mandatory, recommendation and optional in the Quick Reference.
- add the suggestion of sharing a self-declaration of conformity to the usage note of dct:conformsTo.
- preform alignment with DCAT-AP 3: include Dataset Series explicitly with the possibility to annotate this as a HVD Dataset. 
    - property documentation for Data Service has been introduced in DCAT-AP 3 and thus it is used here instead of added in the context of this specification
    - align the reuse column of properties in line with DCAT-AP 3.0.0


## **Detailed issue feedback**

See the comments in the individual issues.
