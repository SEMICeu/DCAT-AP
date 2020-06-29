# DCAT-AP 2.0.1 release notes

This is a bugfix release. Only minor editorial changes have been applied.

- corrections to the prefix mappings
- insert the reference to the recommendation URL of DCAT
- fix the dcterms version to the version of 012-06-14, since a new release of dcterms has been done since nov 2019.
- corrections to the shacl templates
- small editorial changes
- version bumping from 2.0.0 to 2.0.1


The complete list of addressed topics can be found in the [issue list, having the label release:2.0.1-june2020 ](https://github.com/SEMICeu/DCAT-AP/labels/release%3A2.0.1-june2020).

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
DCAT-AP 2.0.1 implements a URI change for the properties _startDate_ and _endDate_. To identify the existence of the old URIs in the catalogue, the SHACL rules in [dcat-ap_2.0.1_shacl_deprecateduris.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.0.0/Draft/dcat-ap_2.0.1_shacl_deprecateduris.ttl) can be executed.  

### validating DCAT-AP
To check whether a catalogue satisfies the DCAT-AP 2.0.1 specification the SHACL files can be used:
- [dcat-ap_2.0.1_shacl_shapes.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.0.1/Draft/dcat-ap_2.0.1_shacl_shapes.ttl): constraints concerning existance, domain and range, and cardinalities.
- [dcat-ap_2.0.1_shacl_mdr-vocabularies.shape.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.0.1/Draft/dcat-ap_2.0.1_shacl_mdr-vocabularies.shape.ttl): constraints concerning the usage of controlled vocabularies

The first file provides for each class mentioned in DCAT-AP and having additional properties defined a template with the corresponding constraints. 
In order to validate a catalogue additional data might be required to import into the validator, such as the controlled vocabularies. These have to be retrieved from the appropriate places.

The shacl files are configured in this instance of the ISA testbed: https://www.itb.ec.europa.eu/shacl/dcat-ap/upload
