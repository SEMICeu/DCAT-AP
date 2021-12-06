# The changelog for release DCAT-AP 2.1.0

The complete list of all issues that resulted in some change are found at https://github.com/SEMICeu/DCAT-AP/labels/release%3A2.1.0-dec2021.  The discussions and interaction that have led to these changes can be found in the meeting minutes of the webinars, and in the github issues. The list below summarizes the applied changes.  

Webinars:
  - https://github.com/SEMICeu/DCAT-AP/tree/master/Webinars/15-Sept-2021
  - https://github.com/SEMICeu/DCAT-AP/tree/master/Webinars/21-Oct-2021

## Included issues 

- profile management:
   - https://github.com/SEMICeu/DCAT-AP/issues/194
   - https://github.com/SEMICeu/DCAT-AP/issues/168
   - https://github.com/SEMICeu/DCAT-AP/issues/142
   - https://github.com/SEMICeu/DCAT-AP/issues/123
   - add the interpretation that "Any  property  that  is mentioned  in  DCAT  applicable  to  this  class  but  not 
explicitly  is  listed    DCAT-AP  is  considered  an  optional field for DCAT-AP."
   - rearrange the sections 2 and 3 to enable to remove the notion of categorisation of classes
   - improved diagram to make the specification more readable
   - decision that the human readible specification is normative, while visual representations or machine readible serialisations support the interpretation to the best of their extend possible.
   - in terms of scope, the DCAT-AP specification has clarified how it is a profile of DCAT. The business scope has not been addressed.
	
   This adaptation resulted in an updated section 3
	 
- add usage guidelines on datasets/distribution/data service (cfr https://github.com/SEMICeu/DCAT-AP/labels/topic%3Acataloged-resources)
   - https://github.com/SEMICeu/DCAT-AP/issues/204 
   - https://github.com/SEMICeu/DCAT-AP/issues/202
   - https://github.com/SEMICeu/DCAT-AP/issues/180
	- A catalogue can contain both data services and datasets: datasets is recommended instead of mandatory
   - https://github.com/SEMICeu/DCAT-AP/issues/161
	- The updated diagram shows now that the primary topic of a catalogue record can be either datasets or data services
   - https://github.com/SEMICeu/DCAT-AP/issues/144
   - https://github.com/SEMICeu/DCAT-AP/issues/142
   - https://github.com/SEMICeu/DCAT-AP/issues/109 
   - https://github.com/SEMICeu/DCAT-AP/issues/100
   - https://github.com/SEMICeu/DCAT-AP/issues/91
	
- SHACL:
    - https://github.com/SEMICeu/DCAT-AP/issues/164: splitting is several files with adapted severity level messages	
    - https://github.com/SEMICeu/DCAT-AP/issues/127: splitting & reorganising the constraints to create different validation profiles.
    - https://github.com/SEMICeu/DCAT-AP/issues/55: splitting & reorganising the constraints to create different validation profiles.
	 
- use coherent expression to denoted the use of typed literals as range:
   https://github.com/SEMICeu/DCAT-AP/issues/206
   
- controlled vocabularies:
   - https://github.com/SEMICeu/DCAT-AP/issues/202
   - https://github.com/SEMICeu/DCAT-AP/issues/192
        - dct:title property will be added skos:ConceptScheme of EU Vocabularies used in DCAT-AP gradually by the Publications Office
   - https://github.com/SEMICeu/DCAT-AP/issues/159
        - improve the specification on the usage of the NAL access-right
   - https://github.com/SEMICeu/DCAT-AP/issues/153
        - add NAL dataset-type as recommended controlled vocabulary

- replacement of the controlled vocabulary planned availibility with a controlled vocabulary maintained by the Publications Office:
   - https://github.com/SEMICeu/DCAT-AP/issues/208
   - https://github.com/SEMICeu/DCAT-AP/issues/178

- dataset type:
   - https://github.com/SEMICeu/DCAT-AP/issues/153: lift the max-cardinality of dct:type for a dataset

- checksum: 
   - https://github.com/SEMICeu/DCAT-AP/issues/158: support the usage of other than SHA1 checksum algorithms.   
 
- temporal properties accept any temporal xsd format
   - https://github.com/SEMICeu/DCAT-AP/issues/172

- add max-cardinality 1 for dcat:temporalResolution and dcat:spatialResolutionInMeters
   - https://github.com/SEMICeu/DCAT-AP/issues/114: alignment between usage note(the minimum value) and the expected max-cardinality 
   
- lift the max-cardinality for dct:creator:
   - https://github.com/SEMICeu/DCAT-AP/issues/171

- clarification and alignment of definitions/usage notes for adms:status w.r.t. w3C DCAT
   - https://github.com/SEMICeu/DCAT-AP/issues/86 
 
- typo fixing:
   - https://github.com/SEMICeu/DCAT-AP/issues/195 : 
   - https://github.com/SEMICeu/DCAT-AP/issues/191 : use of wrong uri 
   - https://github.com/SEMICeu/DCAT-AP/issues/188 : references in the specification pointed to the wrong target
   - https://github.com/SEMICeu/DCAT-AP/issues/186 : diagram not in sync with the specification
   - https://github.com/SEMICeu/DCAT-AP/issues/185 : range of dct:format was incorrect in the specification: alignment DCAT
   - https://github.com/SEMICeu/DCAT-AP/issues/182 : diagram more consistent representation (no doubles)
   - https://github.com/SEMICeu/DCAT-AP/issues/181 : mandatory properties have min-cardinality 1 
   - https://github.com/SEMICeu/DCAT-AP/issues/173 : range of dct:format was incorrect in the specification: alignment between diagram and specification
   - https://github.com/SEMICeu/DCAT-AP/issues/154 : improvement to the metadata of the RDF distribution
   - https://github.com/SEMICeu/DCAT-AP/issues/147 : fix range in SHACL for checksum_shape
   - https://github.com/SEMICeu/DCAT-AP/issues/134 : skos:notation for class Identifier is declared mandatory, and thus min-cardinality must be 1
   
## Issues that were discussed as part of the release 2.1.0 that have not resulted to a change

### specific requests
- https://github.com/SEMICeu/DCAT-AP/issues/184: no qualification adaptation for dct:format & dct:mediaType   
- https://github.com/SEMICeu/DCAT-AP/issues/202: no adoption of distribution type NAL as recommended controlled vocabulary   
- https://github.com/SEMICeu/DCAT-AP/issues/174: no introduction of the inverse property for foaf:primaryTopic 
- https://github.com/SEMICeu/DCAT-AP/issues/157: no change in the cardinality constraints for dct:ispPartOf for a Catalogue
- https://github.com/SEMICeu/DCAT-AP/issues/97: no change in the qualification for dct:rights and dct:license.
- https://github.com/SEMICeu/DCAT-AP/issues/96: no change in the qualification for dct:rights and dct:license.

### adapting shacl expressions for DCAT-AP 1.2.1:
   - https://github.com/SEMICeu/DCAT-AP/issues/120
   - https://github.com/SEMICeu/DCAT-AP/issues/119
   - https://github.com/SEMICeu/DCAT-AP/issues/118
   - https://github.com/SEMICeu/DCAT-AP/issues/117
   - https://github.com/SEMICeu/DCAT-AP/issues/116
   - https://github.com/SEMICeu/DCAT-AP/issues/115
   
   It has been decided to not retrofit the changes to DCAT-AP 1.2.1, but to continue and further improve them in the new version. 
   Since DCAT-AP 2.1.0 is backward compatible (to a large extend), the SHACL constraints of 2.1.0 are thus mostly backward compatible.

## Additional issues that were closed as part of issue processing for release 2.1.0  
As part of the release 2.1.0 additional issues where closed. These contain announcements, questions, requests for advice.
