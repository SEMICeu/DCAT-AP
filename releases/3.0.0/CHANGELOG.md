# **Consolidated Changelog**

This Changelog provides an overview of the changes incorporated in DCAT-AP 3.0.0. A complete list of the issues closed with this release is accessible on [GitHub](https://github.com/SEMICeu/DCAT-AP/issues?q=is%3Aissue+is%3Aopen+label%3Arelease%3A3.0.0-jun2024).

# **Editorial changes**

- turned PDF document into html representation (RESPEC style) (issue [150](https://github.com/SEMICeu/dcat-ap/issues/150)).
- included all adopted guidelines and texts surrounding DCAT-AP into the new document.
- added cross-references to existing texts so that readers can take benefit from the HTML representation.
- address numerous typo’s and pdf > html conversion issues.
- update the attribution of the contributors.

# **Adaptations to the different sections**

- Introduction: revised the introduction and context to be more up to date.
- Conformance: reflect the html specification by cross-referencing, fit the RESPEC requirements, and move the stereotype annotation definitions to the quick-reference section.
- Terminology: updated the list of prefixes.
- Formal data model presentation: introduced the notions of Main Entities, Supportive Entities and Datatypes to enhance the readability.
- Controlled Vocabularies: removed the section on licence vocabularies as there is a new section on expressing legal information.
- Legal information: new section on legal conditions, matching the use case of Czechia (issue [209](https://github.com/SEMICeu/dcat-ap/issues/209)) .
- Agent roles: added paragraph to cross-reference to the guidelines in DCAT 3.
- Accessibility and Multilingual Aspects: no change.
- Usage guide on Datasets, Distributions and Data Services: integrated this GitHub located section in the document.
- High Value Datasets: new section to create a reference to the guidelines for High Value Datasets.
- Validation of DCAT-AP: integrated this GitHub located section in the document.
- Example Dataset Series: new section containing examples for Dataset Series.
- Inverse properties: new section on the handling of inverse properties.
- Annex Quick Reference of Classes and Properties: - adapted the information to fit the HTML representation. - The quick reference generated from the Data Model to be always in sync. (Issue [235](https://github.com/SEMICeu/dcat-ap/issues/235)). - Moved the overview of deprecated terms to this section.
- Annex Acknowledgments: updated the list.

# **Data model adaptations**

The list below indicates all changes and differences compared to DCAT-AP 2.1.1. The impact of the alignment with W3C DCAT 3 is provided below.

- DCAT-AP 2.1.1 has no notion of definition and usage notes. Splitted the existing descriptive texts in definitions and usage nodes according to the SEMIC best practices for definitions as advised by the [SEMIC Style Guide](https://semiceu.github.io/style-guide/1.0.0/index.html).
- Added a direct link to the W3C specification for classes and properties that are explictly mentioned in DCAT 3 to indicate the relation of a property with W3C DCAT in a more precise way. Where appropriate we aligned the definitions and usage notes. (issue [128](https://github.com/SEMICeu/dcat-ap/issues/128), [135](https://github.com/SEMICeu/dcat-ap/issues/135), [179](https://github.com/SEMICeu/dcat-ap/issues/179))
- Reorganised the Application Profile in Main Entities, Supportive Entities and Datatypes in order to enhance the readibility.
- Added the classes Dataset Series to reflect the new notions in DCAT 3.
- The notion Dataset member of a Dataset Series which was present during the first Candidate Recommendation has been removed.
- Applied the deprecation by replacing the mapping to the URIs for the impacted properties.
- Integrated DCAT-AP HVD specific aspects as general approach in DCAT-AP so that this is available for other profiles.

## **Detailed issue feedback**

- Issue [177](https://github.com/SEMICeu/dcat-ap/issues/177), [247](https://github.com/SEMICeu/dcat-ap/issues/247): Range of locn:geometry is locn:Geometry.
- Issue [228](https://github.com/SEMICeu/dcat-ap/issues/228): Replace controlled vocabulary for Distribution status.
- Issue [207](https://github.com/SEMICeu/dcat-ap/issues/207): applied new usage notes for Catalogue themes.
- Issue [214](https://github.com/SEMICeu/dcat-ap/issues/214), [246](https://github.com/SEMICeu/dcat-ap/issues/246): Bytesize range aligned with W3C to xsd:nonNegativeInteger.
- Issue [217](https://github.com/SEMICeu/dcat-ap/issues/217): add format to Data service as the structure that can be returned by querying the endpointURL.
- Issue [236](https://github.com/SEMICeu/dcat-ap/issues/236): missing class is included (coherency throughout UML visualisation, data model, quick-reference).
- Issue [232](https://github.com/SEMICeu/dcat-ap/issues/232): fix typo in class name.
- Issue [319](https://github.com/SEMICeu/dcat-ap/issues/319), [299](https://github.com/SEMICeu/dcat-ap/issues/299), [294](https://github.com/SEMICeu/dcat-ap/issues/294): change definition of type of Agent to be role (publisher) agnositic.
- Issue [333](https://github.com/SEMICeu/dcat-ap/issues/333), [317](https://github.com/SEMICeu/dcat-ap/issues/317): add and improve reference to property application profile (dct:conformsTo) for a Data Service as it was implicitly mentioned in the usage note of the endpointDescription.
- Issue [319](https://github.com/SEMICeu/dcat-ap/issues/319), [305](https://github.com/SEMICeu/dcat-ap/issues/305): make publisher a recommended property for a Data Service.
- Issue [304](https://github.com/SEMICeu/dcat-ap/issues/304): improve the application area of the codelists to properties in all relevant classes.
- Issue [301](https://github.com/SEMICeu/dcat-ap/issues/301): adjust the definition of access rights for Dataset by replacing the policy notion ‘Open Data’ with a neutral term.
- Issue [284](https://github.com/SEMICeu/dcat-ap/issues/284): lift the max cardinality of application profile (dct:conformsTo) for Catalogue Record.
- issue [260](https://github.com/SEMICeu/dcat-ap/issues/260): include applicableLegislation as generic approach to indicate the legislation under which a dataset is made available.
- issue [237](https://github.com/SEMICeu/dcat-ap/issues/237): introduction adapted to reflect a more recent view.
- issue [272](https://github.com/SEMICeu/dcat-ap/issues/272): a request to enlarge the adopted properties for Data Services.

The following additional data model adaptations were performed during the most recent public review which took place in the first quarter of 2024:

- Issue [352](https://github.com/SEMICeu/DCAT-AP/issues/352): Add the property documentation (foaf:homepage) to the class DataService, conform to DCAT-AP for HVD.

# **Alignment with W3C DCAT 3**

## **Dataset Series**

Dataset Series are the main change for DCAT 2 to DCAT 3.

DCAT-AP 3.0.0 has adopted Dataset Series in a lightweight alignment: namely very few restrictions have been included. Nevertheless the Working Group discussed extensively the potential to add additional constraints and usage conditions. Given the wide variation of possible usages, the Working Group decided to go forward with a lightweight alignment as first step. The reflections are summarised as general usage guidelines (section 14.2) for Dataset Series so that implementers and other users have a common basis to start from.

As a consequence of the discussion, this resulted in a major editorial revision compared to the June 2023 Candidate release of DCAT-AP 3.0.0.  
The supporting class Dataset Member of Dataset Series has been removed, because no additional constraints are being set on datasets which are a member of a Dataset Series collection. Consequently also the properties that were associated with this supporting class are removed and not included in DCAT-AP. Users that want to use them can still do in line with the approach on extending [DCAT-AP](https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/3.0.0/#specoverviewr).

Various aspects of this alignment have been discussed in the issues [155](https://github.com/SEMICeu/dcat-ap/issues/155), [239](https://github.com/SEMICeu/dcat-ap/issues/239), [240](https://github.com/SEMICeu/dcat-ap/issues/240), [249](https://github.com/SEMICeu/dcat-ap/issues/249), [289](https://github.com/SEMICeu/dcat-ap/issues/289), [296](https://github.com/SEMICeu/dcat-ap/issues/296), [278](https://github.com/SEMICeu/dcat-ap/issues/278), [277](https://github.com/SEMICeu/dcat-ap/issues/277), [276](https://github.com/SEMICeu/dcat-ap/issues/276), [275](https://github.com/SEMICeu/dcat-ap/issues/275). The Working Group did an attempt to categorise different cases of Dataset Series and tried to give them a unique name (identified with dct:type). That work did not resulted in a clear path forward, ready to be included in DCAT-AP.

## **Other Alignment Topics**

- new section with guidelines on Inverse properties.
  - confirming that DCAT-AP with follow in a strict sense W3C DCAT inverse properties guidelines.
  - concerns issues [332](https://github.com/SEMICeu/dcat-ap/issues/332), [313](https://github.com/SEMICeu/dcat-ap/issues/313), [300](https://github.com/SEMICeu/dcat-ap/issues/300).
  - remove dcat:isVersionOf as consequence (issue [331](https://github.com/SEMICeu/dcat-ap/issues/331)).
- issue [203](https://github.com/SEMICeu/dcat-ap/issues/203), [241](https://github.com/SEMICeu/dcat-ap/issues/241): Versioning - not explicitly included, DCAT-AP users are advised to follow the generic DCAT 3 best practices.
- issue [242](https://github.com/SEMICeu/dcat-ap/issues/242): indication of a need in which status the dataset is, no consensus reached.
- issue [243](https://github.com/SEMICeu/dcat-ap/issues/243): the interpretation of Dataset Series as a Dataset is added in section 14.
- issue [244](https://github.com/SEMICeu/dcat-ap/issues/244): adoption of the practice in DCAT-AP in DCAT.
- Issue [214](https://github.com/SEMICeu/dcat-ap/issues/214), [246](https://github.com/SEMICeu/dcat-ap/issues/246): Bytesize range aligned with W3C to xsd:nonNegativeInteger.
- issue [177](https://github.com/SEMICeu/dcat-ap/issues/177), [247](https://github.com/SEMICeu/dcat-ap/issues/247): Range of locn:geometry is locn:Geometry.

# **SHACL**

- issue [245](https://github.com/SEMICeu/dcat-ap/issues/245): replace sh:name with rdfs:label in shacl.
- issue [48](https://github.com/SEMICeu/dcat-ap/issues/48): provide a shacl file with unique identifiers for each constraint.

The following additional SHACL changes were performed during the most recent public review which took place in the first quarter of 2024:

- Issue [366](https://github.com/SEMICeu/DCAT-AP/issues/366): Correcting errors related to SHACL shapes.

# **Other issue handling**

- issue [209](https://github.com/SEMICeu/dcat-ap/issues/209): provided a new guideline for legal information.
- issue [223](https://github.com/SEMICeu/dcat-ap/issues/223): closed the issue as the reference to past assessment of Identifiers is included in the DCAT-AP guideline on identifiers. The assessment is not uplifted as guideline, but it is now more accessible from the specification. A placeholder issue is not needed anymore.

# **Specification agnostic issues or questions for information/assistance**

- issue [56](https://github.com/SEMICeu/dcat-ap/issues/56), [99](https://github.com/SEMICeu/dcat-ap/issues/99), [152](https://github.com/SEMICeu/dcat-ap/issues/152): related to the governance of the specification on GitHub.
- issue [234](https://github.com/SEMICeu/dcat-ap/issues/234): request for information on behaviour of dereferenceable URIs of EU Vocabularies.
- issue [261](https://github.com/SEMICeu/dcat-ap/issues/261): question on DCAT-AP for agriculture.
- issue [233](https://github.com/SEMICeu/dcat-ap/issues/233): question to reach out on SEMIC conference.
- issue [189](https://github.com/SEMICeu/dcat-ap/issues/189): during the Webinar of 16 jan 2024 an improved handling of GitHub issues has been presented. This is now also documented in [Governance](https://github.com/SEMICeu/Governance).

# **Bug fixes**

These are issues that point out editorial improvements.

- issue [311](https://github.com/SEMICeu/dcat-ap/issues/311): corrected typos in multiple definitions.
- issue [338](https://github.com/SEMICeu/dcat-ap/issues/338): improved reference to property application profile (dct:conformsTo).
- issue [297](https://github.com/SEMICeu/dcat-ap/issues/297): many of the properties can apply to instances of Datasets, Data Services or Dataset Series. In that case the notion Catalogue Resource is used.
  - issue [337](https://github.com/SEMICeu/dcat-ap/issues/337): part of issue 297.
  - issue [336](https://github.com/SEMICeu/dcat-ap/issues/336): part of issue 297.
- issue [334](https://github.com/SEMICeu/dcat-ap/issues/334): Supporting class Identifier improvements: aligmenent with [ADMS 2.0.0](https://github.com/SEMICeu/ADMS/tree/main/releases/2.00) definitions and correction of the cardinality in line with DCAT-AP 2.1.1.
- issue [330](https://github.com/SEMICeu/dcat-ap/issues/330): correct cross-references.
- issue [326](https://github.com/SEMICeu/dcat-ap/issues/326): synctactical bugs in the examples.
- issue [303](https://github.com/SEMICeu/dcat-ap/issues/303): a number of typos.
- issue [291](https://github.com/SEMICeu/dcat-ap/issues/391): incorrect conversion from PDF to HMTL: reapply the agreed cardinality for Dataset creator.
- issue [285](https://github.com/SEMICeu/dcat-ap/issues/285): correct URL to specification.
- issue [267](https://github.com/SEMICeu/dcat-ap/issues/267): fix malformed table for recommended Controlled Vocabularies.

The following additional bug fixes were performed during the most recent public review which took place in the first quarter of 2024:

- Issue [343](https://github.com/SEMICeu/DCAT-AP/issues/343), [346](https://github.com/SEMICeu/DCAT-AP/issues/346), [347](https://github.com/SEMICeu/DCAT-AP/issues/347), [373](https://github.com/SEMICeu/DCAT-AP/issues/373): Correcting the usage scope of DataService.applicableLegislation, Concept, ConceptScheme.title, and DatasetSeries.description.
- Issue [342](https://github.com/SEMICeu/DCAT-AP/issues/342), [359](https://github.com/SEMICeu/DCAT-AP/issues/359), [340](https://github.com/SEMICeu/DCAT-AP/issues/340): Correcting usage note of dct:accessRights, Dataset.otherIdentifier and deleting usage not on Dataset.
- Issue [335](https://github.com/SEMICeu/DCAT-AP/issues/335), [344](https://github.com/SEMICeu/DCAT-AP/issues/344), [345](https://github.com/SEMICeu/DCAT-AP/issues/345): Adjusting definition of Catalogue.language, CatalogueRecord.sourceMetadata, and Standard to be less restrictive.
- Issue [327](https://github.com/SEMICeu/DCAT-AP/issues/327): Changing the ‘Conformance section’ to be normative instead of non-normative.
- Issue [349](https://github.com/SEMICeu/DCAT-AP/issues/349): Rewriting the first paragraph of the section ‘Overview’.
- Issue [360](https://github.com/SEMICeu/DCAT-AP/issues/360): Correcting cardinality and usage note of the property Dataset.type.
- Issue [363](https://github.com/SEMICeu/DCAT-AP/issues/363): Correcting hyperlink of the property dcatap:applicableLegislation.
- Issue [353](https://github.com/SEMICeu/DCAT-AP/issues/353), [356](https://github.com/SEMICeu/DCAT-AP/issues/356): Correcting typo in the section ‘Scope of the Application Profile’ and ‘Inverse properties’.
- Issue [369](https://github.com/SEMICeu/DCAT-AP/issues/369): Making Media Type usage consistent by always pointing to the Media Type data type.
- Issue [374](https://github.com/SEMICeu/DCAT-AP/issues/374): Correcting the list of ‘10.2 Controlled vocabularies to be used’ by adding missing classes.
