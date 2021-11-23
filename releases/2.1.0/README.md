# DCAT-AP 2.1.0 release notes


## updates to supporting distributions

### new diagram

### JSON-LD

### validating DCAT-AP
To check whether a catalogue satisfies the DCAT-AP 2.0.1 specification the SHACL files can be used:
- [dcat-ap_2.1.0_shacl_shapes.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.0-draft/releases/2.1.0/dcat-ap_2.0.1_shacl_shapes.ttl): constraints concerning existance, domain and literal range, and cardinalities.
- [dcat-ap_2.1.0_shacl_range.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.0-draft/releases/2.1.0/dcat-ap_2.0.1_shacl_range.ttl): constraints concerning object range.
- [dcat-ap_2.1.0_shacl_mdr-vocabularies.shape.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.1.0-draft/dcat-ap_2.1.0_shacl_mdr-vocabularies.shape.ttl): constraints concerning the usage of controlled vocabularies

The first file provides for each class mentioned in DCAT-AP and having additional properties defined a template with the corresponding constraints. Class membership constraints are not present in the first fil. These are collected in the second file.  

- [dcat-ap_2.1.0_shacl_shapes_recommended.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.0-draft/releases/2.1.0/dcat-ap_2.0.1_shacl_shapes_recommended.ttl): constraints concerning existance of recommended properties. 

In order to validate a catalogue additional data might be required to import into the validator, such as the controlled vocabularies. These have to be retrieved from the appropriate places.
As support, the following files express the imports (not transitive) according to the SHACL specification, which can be loaded into the ISA testbed.
- [dcat-ap_2.1.0_shacl_imports.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.0-draft/releases/2.1.0/dcat-ap_2.1.0_shacl_imports.ttl): imports the vocabulary knowledge
- [dcat-ap_2.1.0_shacl_mdr_imports.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.0-draft/releases/2.1.0/dcat-ap_2.1.0_shacl_mdr_imports.ttl): imports the recommended codelists


The shacl files are configured in this instance of the ISA testbed: https://www.itb.ec.europa.eu/shacl/dcat-ap/upload

To comment on the [Usage guide on Datasets, Distributions and Data Services](https://github.com/SEMICeu/DCAT-AP/blob/2.1.0-draft/releases/2.1.0/usageguide-dataset-distribution-dataservice.md), please add a commit via this [link](https://github.com/SEMICeu/DCAT-AP/commit/d1bcb7937100b846527222737824ad37243ccd48).
