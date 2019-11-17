# DCAT-AP 2.0.0 release notes

The main highlights are the following:
- Alignment with W3C DCAT 2.0 which introduces the ability to share data services.
- In order to steer towards quality metadata descriptions, the implementation of a number of properties are recommended or made mandatory;
- Removal of non-existing controlled vocabularies adms:change_type;
- Addition of a new property dcatap:availability that indicates the planned availability of the distribution;
- Enforced the cardinality for the properties dcat:accessURL and dcat:downloadURL for distributions to be maximum 1;
- Coherency improvements on the specification and its distributions;
- The alignment with W3C DCAT 2.0 resulted in the replacement of the URIs with respect to the last DCAT-AP release 1.2.1. Namely, for describing a Period of Time the DCAT native properties dcat:startDate and dcat:endDate will be used instead of schema:startDate or schema:endDate. A dedicated set of SHACL validation rules are provided in order to support catalogue’s owners in the identification of the issue.
- The supporting distributions, namely the common JSON-LD context and the SHACL templates are improved. To increase their reuse, the distributions are now released under the CC-BY 4.0 licence.

