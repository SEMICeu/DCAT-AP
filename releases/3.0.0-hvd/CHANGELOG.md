# **Consolidated ChangeLog**  
  
This Changelog provides an overview of the changes incorporated in DCAT-AP HVD 3.0.0. A complete list of the issues closed with this release is accessible on [GitHub](https://github.com/SEMICeu/DCAT-AP/issues?q=is%3Aissue+is%3Aopen+label%3AHVD).  
  
# **Editorial Changes**  
  
- Resolve spelling mistakes.  
- Improve captions on figures.  
  
# **Adaptations to the Different Sections**  
  
- Remove "This section is non-normative" from Conformance section.  
- Update [Section 9](#controlled-vocs) the usage note on HVD Categories to use the most detailed level.  
- Update [Section 10](#mapping-the-hvd-ir-to-dcat-ap) with extended insights on the mapping from HVD IR to DCAT-AP.  
- Add [Section 10.1.1](#guidelines-datasetseries) with guidelines on the use of Dataset Series.  
- Update [Section 10.3](#c2) the usage note on HVD Categories to use the most detailed level.  
- Add [Section 10.5.1](#assessment-support-for-licences) with guidelines on mapping licences to EU NAL Licencea.  
- Include a [Section 10.8](#apis-are-mandatory) on the obligation to provide an API and how this can be expressed in DCAT-AP (HVD).  
- Reword the [Section 10.9](#c8) on reporting to align with the most recent recommendations on the Common HVD Reporting.  
- Add in the [Section 11](#example) an example of the HVD Categories.  
- Update [Section 12](#validation) on validation with improved and more SHACL templates.  
  
# **Data Model Adaptations**  
  
- Align min and max cardinalities with advice on mandatory, recommendation, and optional in the Quick Reference.  
- Add the suggestion of sharing a self-declaration of conformity to the usage note of dct:conformsTo.  
- Perform alignment with DCAT-AP 3.  
  - Include Dataset Series explicitly with the possibility to annotate this as a HVD Dataset.  
  - Property documentation for Data Service has been introduced in DCAT-AP 3 and thus it is used here instead of added in the context of this specification.  
  - Align the reuse column of properties in line with DCAT-AP 3.0.0.  
  
## **Detailed Issue Feedback**  
  
- Issue [177](https://github.com/SEMICeu/dcat-ap/issues/177), [247](https://github.com/SEMICeu/dcat-ap/issues/247): Range of locn:geometry is locn:Geometry.  
- Issue [321](https://github.com/SEMICeu/dcat-ap/issues/321): HVD reporting guidelines are being presented to the community. References are added to the text.  
- Issue [322](https://github.com/SEMICeu/dcat-ap/issues/322): Self-declaration of conformity is added as a possibility. Yet a standardized data format has not been added, that will be done upon request of the community.  
- Issue [325](https://github.com/SEMICeu/DCAT-AP/issues/325), [376](https://github.com/SEMICeu/DCAT-AP/issues/376), [378](https://github.com/SEMICeu/DCAT-AP/issues/378), [396](https://github.com/SEMICeu/DCAT-AP/issues/396): More explanation, usage notes, and guidelines are being added to the specifications to clarify the strong recommendation for a distribution.  
- Issue [375](https://github.com/SEMICeu/DCAT-AP/issues/375): Improved examples with addition hvdCategory + checked against the provided validation SHACL rules.  
- Issue [351](https://github.com/SEMICeu/DCAT-AP/issues/351): Terminology clarification provided.  
- Issue [350](https://github.com/SEMICeu/DCAT-AP/issues/350), [381](https://github.com/SEMICeu/DCAT-AP/issues/381), [382](https://github.com/SEMICeu/DCAT-AP/issues/382), [383](https://github.com/SEMICeu/DCAT-AP/issues/383): Editorial bug fixes.  
- Bugfix validation: The Distribution shape was pointing to non-existing constraints.  
- Adapted the reference to the HVD IR reporting guidelines.  
