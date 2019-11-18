# DCAT-AP 2.0.0 release notes

- Alignment with W3C DCAT 2.0 which introduces the ability to share data services.
- In order to steer towards quality metadata descriptions, the implementation of a number of properties are recommended or made mandatory;
- Removal of non-existing controlled vocabularies adms:change_type;
- Addition of a new property dcatap:availability that indicates the planned availability of the distribution;
- Enforced the cardinality for the properties dcat:accessURL and dcat:downloadURL for distributions to be maximum 1;
- Coherency improvements on the specification and its distributions;
- The alignment with W3C DCAT 2.0 resulted in the replacement of the URIs with respect to the last DCAT-AP release 1.2.1. Namely, for describing a Period of Time the DCAT native properties dcat:startDate and dcat:endDate will be used instead of schema:startDate or schema:endDate. A dedicated set of SHACL validation rules are provided in order to support catalogue’s owners in the identification of the issue.
- The supporting distributions, namely the common JSON-LD context and the SHACL templates are improved. To increase their reuse, the distributions are now released under the CC-BY 4.0 licence.

The complete list of addressed topics can be found in the [issue list, having the label release:2.0.0-november2019](https://github.com/SEMICeu/DCAT-AP/labels/release%3A2.0.0-november2019).

## updates to supporting distributions
### JSON-LD
The context file is aligned with the specification in terms of the used labels. The used labels in the specification are in British English. Therefore the context file maps the British English terms to the corresponding URIs. E.g. 

```
...
"Catalogue": "http://www.w3.org/ns/dcat#Catalog",
...
```



The context file distinguishes between objectproperties (e.g. language in the example below) and dataproperties (e.g. title). The context does not support language tagged literals (e.g. description) as JSON-LD context mappings require to make an explicit choice. 
```
{ "@context": { ... }, 
 "@id" : "https://europeandataportal.eu/catalogue",
 "@type" : "Catalogue",
 "language" : "http://publications.europa.eu/resource/authority/language/NLD",
 "title" : "European Data Portal",
 "description" : {
   "en" : "The strategic objective of the European Data Portal is to improve accessibility and increase the value of Open Data"
 },
 "dataset" : [ {"@id": "https://europeandataportal.eu/dataset1", 
                "@type": "Dataset"
               }, 
              {"@id": "https://europeandataportal.eu/dataset2", 
               "@type": "Dataset"}
 ]
}
```
Catalogue owners can use the context extension mechanism to add and overwrite the mappings according to their needs.

The above example corresponds to the following RDF triples
```
<https://europeandataportal.eu/catalogue> <http://purl.org/dc/terms/description> _:b0 .
<https://europeandataportal.eu/catalogue> <http://purl.org/dc/terms/language> <http://publications.europa.eu/resource/authority/language/NLD> .
<https://europeandataportal.eu/catalogue> <http://purl.org/dc/terms/title> "European Data Portal" .
<https://europeandataportal.eu/catalogue> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/dcat#Catalog> .
<https://europeandataportal.eu/catalogue> <http://www.w3.org/ns/dcat#dataset> <https://europeandataportal.eu/dataset1> .
<https://europeandataportal.eu/catalogue> <http://www.w3.org/ns/dcat#dataset> <https://europeandataportal.eu/dataset2> .
<https://europeandataportal.eu/dataset1> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/dcat#Dataset> .
<https://europeandataportal.eu/dataset2> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/dcat#Dataset> .
```

### Identifying URI changes
DCAT-AP 2.0.0 implements a URI change for the properties _startDate_ and _endDate_. To identify the existence of the old URIs in the catalogue, the SHACL rules in [dcat-ap_2.0.0_shacl_deprecateduris.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.0.0/Draft/dcat-ap_2.0.0_shacl_deprecateduris.ttl) can be executed.  

### validating DCAT-AP
To check whether a catalogue satisfies the DCAT-AP 2.0.0 specification the SHACL files can be used:
- [dcat-ap_2.0.0_shacl_shapes.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.0.0/Draft/dcat-ap_2.0.0_shacl_shapes.ttl): constraints concerning existance, domain and range, and cardinalities.
- [dcat-ap_2.0.0_shacl_mdr-vocabularies.shape.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.0.0/Draft/dcat-ap_2.0.0_shacl_mdr-vocabularies.shape.ttl): constraints concerning the usage of controlled vocabularies

The first file provides for each class mentioned in DCAT-AP and having additional properties defined a template with the corresponding constraints. 
In order to validate a catalogue additional data might be required to import into the validator, such as the controlled vocabularies. These have to be retrieved from the appropriate places.

