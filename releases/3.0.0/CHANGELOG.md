# Consolidated ChangeLog DCAT-AP 3.0.0

## Editorial changes

  - turned PDF document into html representation (RESPEC style) (issue 150)
  - included all adopted guidelines and texts surrounding the DCAT-AP into the new document
  - added cross-references to existing texts so that readers can take benifit from the HTML representation
  

##  Adaptions to the different sections

  - Introduction: revised the introduction and context to be more up to date
  - Conformance: reflect the html specification by cross-referencing, fit the RESPEC requirements, moved the steoreotype annotation definitions to the quick-reference section
  - Terminology: updated the list of prefixes
  - Formal data model presentation: introduced the notions of Main Entities, Supportive Entities and Datatypes to enhance the readibility
  - Controlled Vocabularies: removed the section on licence vocabularies as there is a new section on expressing legal information
  - Legal information: new section on legal conditions, matching the use case of Czechia (issue 209)
  - Agent roles: added paragraph to cross-reference to the guidelines in DCAT 3.
  - Accessibility and Multilingual Aspects: no change
  - Usage guide on Datasets, Distributions and Data Services: integrated this GitHub located section in the document
  - High Value Datasets: new section to create a reference to the guidelines for High Value Datasets
  - Validation of DCAT-AP: integrated this GitHub located section in the document
  - Example Dataset Series: new section containing examples for Dataset Series
  - Annex Quick Reference of Classes and Properties: 
          - adapted the information to fit the HTML representation. 
          - The quick reference generated from the Data Model to be always in sync. (Issue 235)
          - Moved the overview of deprecated terms to this section
  - Annex Acknowledgments: updated the list.
  


## Data model adaptations

  - DCAT-AP 2.1.1 has no notion of definition and usage notes. Splitted the exiting desciptive texts in definitions and usage nodes according to the SEMIC best practices for definitions as advised by the SEMIC style guide.
  - added for classes and properties that are explictly mentioned in DCAT 3 a direct link to the W3C specification
    Where appropriate we aligned the definitions and usage notes. (issue 128, 135, 179)
  - Reorganised the Application Profile in Main Entities, Supportive Entities and Datatypes in order to enhance the readibility.
  - Added the classes Dataset Series and Dataset member of a Dataset Series to reflect the new notions in DCAT 3 
  - applied the deprecation by replacing the mapping to the URIs for the impacted properties

### detailed issues

  - issue 177, 247: Range of locn:geometry is locn:Geometry  
  - Issue 228: Replace controlled vocabulary for Distribution status
  - Issue 207: applied new usage notes for Catalogue themes
  - Issue 214, 246: Bytesize range aligned with W3C to xsd:nonNegativeInteger
  - Issue 217: add format to Data service as the structure that can be returned by querying the endpointURL
  - Issue 236: missing class is included (coherency throughout UML visualisation, data model, quick-reference)
  - Issue 232: fix typo in class name



## Alignement with DCAT 3

### introduction Dataset Series
(issue 155, 239, 240, 249): added a subsection to section 14 with summary of the webinar discussion and generic advices.

### other topics

  - issue 203, 241: Versioning - not explicitly included, DCAT-AP users are advised to follow the generic DCAT 3 best practices.
  - issue 242: indication of a need in which status the dataset is, no consensus reached.
  - issue 243: the interpretation of Dataset Series as a Dataset is added in section 14. 
  - issue 244: adoption of the practice in DCAT-AP in DCAT
  - Issue 214, 246: Bytesize range aligned with W3C to xsd:nonNegativeInteger
  - issue 177, 247: Range of locn:geometry is locn:Geometry  


## SHACL
  - issue 245: replace sh:name with rdfs:label in shacl 
  - issue 48: propose SHACL version with individual constraints: a proposal has been added. 
           Each individual constraint gets is unique URI. In addition, an additional corresponding message is generated, and a reference to the specification.
           These two additional information elements allow to create a more informed feedback.

## Other issue handling

issue 209: provided a new guideline for legal information


## specification agnostic issues or questions for information/assistance
issue 56, 99, 152: relate to the governance of the specification on GitHub. 
issue 234: request for information on behaviour of dereferencable URIs of EU Vocabularies
issue 261: question on DCAT-AP for agriculture
issue 233: question to reach out on SEMIC conference


