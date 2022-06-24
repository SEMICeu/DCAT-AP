*DISCLAIMER*: this release is a preparation for a future release.
Any change or topic elaborated here has not been officially endorsed by the DCAT-AP community.
Nevertheless it might reflect the ideas discussed in the DCAT-AP community.


# DCAT-AP 2.x.y 

This release addresses the topics registered as a github issue and discussed during the webinars:
  - https://github.com/SEMICeu/DCAT-AP/tree/master/Webinars/15-Sept-2021
  - https://github.com/SEMICeu/DCAT-AP/tree/master/Webinars/21-Oct-2021

Besides editorial fixes and small concrete requests (such as lifting a cardinality), this release mainly improves the readability of the specification as a profile from DCAT and provides guidelines for Datasets, Distributions and Data Services. 

# Changelog
The [Changelog](CHANGELOG.md) documents in detail the changes performed for the release 2.1.1. 

# Guidelines for Datasets, Distributions and Data Services.
The [usage guide on Datasets, Distributions and Data Services](usageguide-dataset-distribution-dataservice.md) provides a common interpretation for the treatment of Datasets, Distributions and Data Services.

### validating DCAT-AP
To check whether a catalogue satisfies the DCAT-AP 2.0.1 specification the SHACL files can be used:
- [dcat-ap_2.1.1_shacl_shapes.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.1-draft/releases/2.1.1/dcat-ap_2.0.1_shacl_shapes.ttl): constraints concerning existance, domain and literal range, and cardinalities.
- [dcat-ap_2.1.1_shacl_range.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.1-draft/releases/2.1.1/dcat-ap_2.0.1_shacl_range.ttl): constraints concerning object range.
- [dcat-ap_2.1.1_shacl_mdr-vocabularies.shape.ttl](https://github.com/SEMICeu/DCAT-AP/blob/master/releases/2.1.1-draft/dcat-ap_2.1.1_shacl_mdr-vocabularies.shape.ttl): constraints concerning the usage of controlled vocabularies

The first file provides for each class mentioned in DCAT-AP and having additional properties defined a template with the corresponding constraints. Class membership constraints are not present in the first fil. These are collected in the second file.  

- [dcat-ap_2.1.1_shacl_shapes_recommended.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.1-draft/releases/2.1.1/dcat-ap_2.0.1_shacl_shapes_recommended.ttl): constraints concerning existance of recommended properties. 

In order to validate a catalogue additional data might be required to import into the validator, such as the controlled vocabularies. These have to be retrieved from the appropriate places.
As support, the following files express the imports (not transitive) according to the SHACL specification, which can be loaded into the ISA testbed.
- [dcat-ap_2.1.1_shacl_imports.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.1-draft/releases/2.1.1/dcat-ap_2.1.1_shacl_imports.ttl): imports the vocabulary knowledge
- [dcat-ap_2.1.1_shacl_mdr_imports.ttl](https://github.com/SEMICeu/DCAT-AP/blob/2.1.1-draft/releases/2.1.1/dcat-ap_2.1.1_shacl_mdr_imports.ttl): imports the recommended codelists

The shacl files are configured in this instance of the ISA testbed: https://www.itb.ec.europa.eu/shacl/dcat-ap/upload. More information about the configured validation profiles is https://github.com/ISAITB/validator-resources-dcat-ap. 


