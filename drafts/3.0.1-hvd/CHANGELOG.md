# **Consolidated ChangeLog**  
  
This Changelog provides an overview of the changes incorporated in DCAT-AP HVD 3.0.1. A list of open issues is accessible on [GitHub](https://github.com/SEMICeu/DCAT-AP/issues?q=is%3Aissue+is%3Aopen+label%3AHVD).
  
# **Editorial Changes**  
  
- Resolve spelling mistakes.
- Dark mode support.
- Change overview to SVG.
- Fix examples - syntax, `dcat:downloadURL` in Bulk download
  
# **Adaptations to the Different Sections**  
   
# **Data Model Adaptations**  
  
- Add Dataset `title` and `description` attributes, as they are required for the HVD reporting, and add usage notes specifying the requirement on their English versions
- Add Data Service `title` as it is mandatory for DCAT-AP, to make it visible
- Change Dataset title and description range to `rdf:langString` to support auto-translation activities
- Add Distribution `downloadURL`, which is mandatory for HVD bulk downloads for the HVD reporting.
- Add LicenceDocument `as permissive as` and `more permissive than` properties for mapping to the EU Vocabularies Licences NAL, add the NAL to Controlled Vocabularies
  
## **Detailed Issue Feedback**  
  
- Issue [460](https://github.com/SEMICeu/dcat-ap/issues/460), `Dataset.datasetdistribution` cardinality
- Issue [461](https://github.com/SEMICeu/dcat-ap/issues/461), missing `inseries` `<<optional>>` qualification in diagram
- Issue [463](https://github.com/SEMICeu/dcat-ap/issues/463), missing reference to DCAT-AP for Dataset Series
- Issue [459](https://github.com/SEMICeu/dcat-ap/issues/459), missing contact point for Dataset in diagram
- Issue [462](https://github.com/SEMICeu/dcat-ap/issues/462), `DatasetSeries.HVDcategory` definition fix