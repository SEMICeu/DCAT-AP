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

- Issue [177](https://github.com/SEMICeu/dcat-ap/issues/177), [247](https://github.com/SEMICeu/dcat-ap/issues/247): Range of locn:geometry is locn:Geometry.
- Issue [321](https://github.com/SEMICeu/dcat-ap/issues/321): HVD reporting guidelines are being presented to the community. References are added to the text.
- Issue [322](https://github.com/SEMICeu/dcat-ap/issues/322): self declaration of comformity is added as a possibility. Yet a standardised dataformat has not been added, that will be done upon request of the community.
- Issue [325](https://github.com/SEMICeu/DCAT-AP/issues/325),[376](https://github.com/SEMICeu/DCAT-AP/issues/376), [378](https://github.com/SEMICeu/DCAT-AP/issues/378), [396](https://github.com/SEMICeu/DCAT-AP/issues/396) : More explanation, usagenotes and guidelines are being added to the specifications to clarify the strong recommendation for a distribution.
- Issue [375](https://github.com/SEMICeu/DCAT-AP/issues/375): improved examples with addition hvdCategory + checked against the provided validation SHACL rules
- Issue [351](https://github.com/SEMICeu/DCAT-AP/issues/351): terminology clarification provided.
- Issue [350](https://github.com/SEMICeu/DCAT-AP/issues/350), [381](https://github.com/SEMICeu/DCAT-AP/issues/381), [382](https://github.com/SEMICeu/DCAT-AP/issues/382), [383](https://github.com/SEMICeu/DCAT-AP/issues/383): editorial bug fixes
- bugfix validation: the Distribution shape was pointing to non-existing constraints
- adapted the reference to the HVD IR reporting guidelines
