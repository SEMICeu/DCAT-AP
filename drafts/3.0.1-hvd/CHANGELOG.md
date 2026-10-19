# **Consolidated ChangeLog**  
  
This Changelog provides an overview of the changes incorporated in DCAT-AP HVD 3.0.1. A list of open issues is accessible on [GitHub](https://github.com/SEMICeu/DCAT-AP/issues?q=is%3Aissue+is%3Aopen+label%3AHVD).
  
# **Editorial Changes**  
  
- Resolve spelling mistakes, including changing “High Value datasets” to “High-Value datasets”
- Dark mode support
- Change overview to SVG
- Fix examples - syntax, `dcat:downloadURL` in Bulk download example
- Update the editors, Interoperable Europe representatives and collaborating Directorate-General in the Acknowledgments
  
# **Adaptations to the Different Sections**  
- Align the specification with DCAT-AP 3.0.1, previously DCAT-AP 3.0.0, and updated the corresponding references and reuse links
- Change the HVD data category guidance from RECOMMENDED to MUST for annotating datasets and APIs with the most precise applicable HVD category concept. This is a normative change
- Update the Scope section to mention GeoDCAT-AP and StatDCAT-AP
- Change the Scope example of a requirement that DCAT-AP cannot verify from licence permissiveness to identifier persistence
- Remove Meeting minutes subsection containing links to the 2023 webinars
   
# **Data Model Adaptations**  
  
- Add Dataset `title` and `description` attributes, as they are required for the HVD reporting, and add usage notes specifying the requirement on their English versions
- Add Data Service title making the existing mandatory DCAT-AP property explicit in this profile, with range rdf:langString and reuse qualification E
- Add Dataset Series title and description with range rdf:langString
- Add Data Service `title` as it is mandatory for DCAT-AP, to make it visible
- Change Dataset title and description range to `rdf:langString` to support auto-translation activities
- Add Distribution download URL `dcat:downloadURL`, mandatory for Distributions representing HVD bulk downloads, not for Distributions providing API access
- Update the Distribution `access URL` usage note to cover bulk downloads and change its reuse qualification from A to E
- Add LicenceDocument `as permissive as` and `more permissive than` properties for mapping to the EU Vocabularies Licences NAL, add the NAL to Controlled Vocabularies
- Remove the supportive class Literal
- Add a Datatypes section
- Add the `eli` prefix

# **Validation (SHACL)**
- Add English-language title and description checks for Dataset, with severity Violation.
- Add licence-mapping validation shapes.
- Update download URL validation shapes.
- Add Data Service title validation shapes.
- Update Dataset and Dataset Series title and description shapes.
- Add the Dataset bulk-download shape as an rdfs:member of the shapes collection. This membership alone does not activate the check.
- Change the prefix used for the Dublin Core Terms namespace from dc to dct. 

  
## **Detailed Issue Feedback**  
  
- Issue [460](https://github.com/SEMICeu/dcat-ap/issues/460), `Dataset.datasetdistribution` cardinality
- Issue [461](https://github.com/SEMICeu/dcat-ap/issues/461), missing `inseries` `<<optional>>` qualification in diagram
- Issue [463](https://github.com/SEMICeu/dcat-ap/issues/463), missing reference to DCAT-AP for Dataset Series
- Issue [459](https://github.com/SEMICeu/dcat-ap/issues/459), missing contact point for Dataset in diagram
- Issue [462](https://github.com/SEMICeu/dcat-ap/issues/462), `DatasetSeries.HVDcategory` definition fix
- Issue [482](https://github.com/SEMICeu/DCAT-AP/issues/482), `High Value datasets` changed to `High-Value datasets`
- Issue [487](https://github.com/SEMICeu/DCAT-AP/issues/487), add note about illustrativeness of INSPIRE ELI
- Issue [492](https://github.com/SEMICeu/DCAT-AP/issues/492), change `DataService.title` reuse qualification to `E`
- Issue [494](https://github.com/SEMICeu/DCAT-AP/issues/494), add Dataset Series `title` and `description`
- Issue [497](https://github.com/SEMICeu/DCAT-AP/issues/497), fix license document `more permissive than` property