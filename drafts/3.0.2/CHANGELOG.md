# **Consolidated ChangeLog**

This Changelog provides an overview of the changes incorporated in DCAT-AP 3.0.2. A complete list of the issues closed with this release is accessible on [GitHub](https://github.com/SEMICeu/DCAT-AP/issues?q=label%3Arelease-3.0.2)

# **Editorial changes**

Updated section on the <a href="https://semiceu.github.io/DCAT-AP/drafts/3.0.2/#dcat-ap-ecosystem">ecosystem</a> with the addition of DCAT-AP NL, DCAT-AP ES and DCAT-AP Flanders

Updates on codelist usage:
- actualising the names and urls of codelists 
- updating the generic guidelines on codelist conformance

Bugfixing of the SHACL shapes

Identified issues with external used vocabularies SPDX and ADMS

Clarified and improved the communication on the DCAT-AP releases 


# **Data model adaptations**
- Issue [357](https://github.com/SEMICeu/dcat-ap/issues/357): 
        extend the advice for modeling agents to the usage of Core Business and Core Person Vocabularies.
- Issue [242](https://github.com/SEMICeu/dcat-ap/issues/242): 
        add adms:status as optional property to the class Dataset. 
        It MUST use the controlled vocabulary http://publications.europa.eu/resource/authority/dataset-status.
        This property is part of W3C DCAT and applicable to the class Dataset as it is a property of Catalogued Resource. 
        This change of DCAT-AP adds a max 1 cardinality and a codelist usage guideline.
- Issue [265](https://github.com/SEMICeu/dcat-ap/issues/265) and issue [175](https://github.com/SEMICeu/dcat-ap/issues/175): 
        add usage note to allow for multiple serialisations for the same geographic expression. 
        The properties bbox, centroid and geometry of a location can be expressed in different serialisations.
        Given that the serialisations are convertable, there is in principle no need to encourage sharing multiple values.
        This changes enables publishers perform a single publication effort for supporting catalogues that do not support 
        serialisation conversion between multiple serialisations. 


## **Detailed issue feedback**

## resolution provided
- Issue [481](https://github.com/SEMICeu/dcat-ap/issues/481): fixed name of controlled vocabulary
- Issue [480](https://github.com/SEMICeu/dcat-ap/issues/480): aligned general conformance statements with the specific codelist usage qualifications
- Issue [475](https://github.com/SEMICeu/dcat-ap/issues/475): fixed ineffective check in shacl shape  
- Issue [473](https://github.com/SEMICeu/dcat-ap/issues/473): provided information to publish DCAT-AP on the website semantic farm  
- Issue [469](https://github.com/SEMICeu/dcat-ap/issues/469): improved usage note for codelist usage for geographical coverage  
- Issue [467](https://github.com/SEMICeu/dcat-ap/issues/467): reference W3C DCAT recommendation instead of the draft  
- Issue [466](https://github.com/SEMICeu/dcat-ap/issues/466): explained the equivalence between * and n notation for max cardinality; harmonised the usage to * as it is the most used notation in the specification  
- Issue [452](https://github.com/SEMICeu/dcat-ap/issues/452): integrated DCAT-AP NL references in the ecosystem section  
- Issue [451](https://github.com/SEMICeu/dcat-ap/issues/451): integrated DCAT-AP ES references in the ecosystem section  
- Issue [450](https://github.com/SEMICeu/dcat-ap/issues/450): provided an draft update of ADMS to document the advised adms:Identifier usage   
- Issue [448](https://github.com/SEMICeu/dcat-ap/issues/448): fix SHACL shape deadlinks  
- Issue [447](https://github.com/SEMICeu/dcat-ap/issues/447): remove schema.org from the SHACL import list as it is not used anymore.   
- Issue [446](https://github.com/SEMICeu/dcat-ap/issues/446): fix SHACL shape for property dct:conformsTo for Catalogue Record    
- Issue [445](https://github.com/SEMICeu/dcat-ap/issues/445): integrated DCAT-AP Flanders, BE references in the ecosystem section  
- Issue [442](https://github.com/SEMICeu/dcat-ap/issues/442): fix links to codelists  
- Issue [357](https://github.com/SEMICeu/dcat-ap/issues/357): advice the usage of Core Business and Core Person for modeling agents (TODO)  
- Issue [242](https://github.com/SEMICeu/dcat-ap/issues/242): add adms:status to dataset and it MUST use the controlled vocabulary (TODO)  
- Issue [316](https://github.com/SEMICeu/dcat-ap/issues/316): request on guidance on additional theme support closed because addressed due to updated codelist usage qualifications  
- Issue [314](https://github.com/SEMICeu/dcat-ap/issues/314): request on guidance on mapping theme support closed because addressed due to updated codelist usage qualifications  

## issues requesting clarification or closed due to long inactivity
- Issue [471](https://github.com/SEMICeu/dcat-ap/issues/471): feedback provided on dataset series  
- Issue [455](https://github.com/SEMICeu/dcat-ap/issues/455): feedback on publication as W3C and SEMIC for ADMS  
- Issue [440](https://github.com/SEMICeu/dcat-ap/issues/440): feedback on the interplay of DCAT-AP and DCAT-AP HVD  
- Issue [437](https://github.com/SEMICeu/dcat-ap/issues/437): feedback on the definition and usage of Catogue  
- Issue [433](https://github.com/SEMICeu/dcat-ap/issues/433): feedback on the versioning of DCAT-AP  
- Issue [430](https://github.com/SEMICeu/dcat-ap/issues/430): feedback on the usage of the properties accessURL and downloadURL  
- Issue [417](https://github.com/SEMICeu/dcat-ap/issues/417): feedback on the availability of a common codelist for Standards  
- Issue [414](https://github.com/SEMICeu/dcat-ap/issues/414): feedback on the published artefacts for DCAT-AP  
- Issue [404](https://github.com/SEMICeu/dcat-ap/issues/404): request for an additional property target audience closed because no additional support  


- Issue [402](https://github.com/SEMICeu/dcat-ap/issues/402): adaptation of the SPDX URIs forwarded to W3C  

## version management 
- Issue [468](https://github.com/SEMICeu/dcat-ap/issues/468): release notes and versioning clarified and improved  
- Issue [458](https://github.com/SEMICeu/dcat-ap/issues/458): release notes and versioning clarified and improved  
- Issue [477](https://github.com/SEMICeu/dcat-ap/issues/477): release notes and versioning implemented in publication branch  
