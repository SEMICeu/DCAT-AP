# **Consolidated ChangeLog**

This Changelog provides an overview of the changes incorporated in DCAT-AP 3.0.1. A complete list of the issues closed with this release is accessible on [GitHub]().

# **Editorial changes**

- fixed the styling of the tables.
- Improved navigation to point to previous version and current version.
- TODO: update affiliations
- removed the deprecated owl:versionInfo from the UML figure
- validated the property reuse qualifications for the class Dataset.
- removed the redundant link column in the properties table as the link used in the reuse table is the same.
  This creates more space for additional documentation.
- removed the supporting annotation for posting issues on specific datatypes.
- Adapted the version history text.
- fixed the diagram to the correct version


# **Adaptations to the different sections**


# **Data model adaptations**

The list below indicates all changes and differences compared to DCAT-AP 3.0.0. 
- Issue [370](https://github.com/SEMICeu/dcat-ap/issues/370): Relaxing the cardinality of dct:rights to 0..n for the existing occurrences in the classes Catalogue and Distribution. 
    As consequence the reuse qualification changes from extended to as-is.
- Issue [380](https://github.com/SEMICeu/dcat-ap/issues/380): Relaxing the cardinality of dcat:spatialresolution to 0..n for the classes Dataset. 
    Adapted the reuse qualification.

## **Detailed issue feedback**

- Issue [399](https://github.com/SEMICeu/dcat-ap/issues/399): Fix the SHACL shape so that dcat:byteSize has range xsd:nonNegativeInteger.
- Issue [392](https://github.com/SEMICeu/dcat-ap/issues/392): Make the notion Application more clear in the context of DCAT-AP as Application Profile.
- Issue [389](https://github.com/SEMICeu/dcat-ap/issues/389): Fix the typo "Catalogue Record" in the class Catalogue Resource
- Issue [368](https://github.com/SEMICeu/dcat-ap/issues/368): Ensure that the reference to DCAT is correct. Provide motivation for the reference.
- Issue [395](https://github.com/SEMICeu/dcat-ap/issues/395): Replace abbreviation with expanded version.
- Issue [415](https://github.com/SEMICeu/dcat-ap/issues/415): Remove duplicate Media Type
- Issue [416](https://github.com/SEMICeu/dcat-ap/issues/416): Use British english spelling for Catalogue.
- Issue [418](https://github.com/SEMICeu/dcat-ap/issues/418): Data Service property conforms to link to DCAT corrected.
- Issue [419](https://github.com/SEMICeu/dcat-ap/issues/419): Add reference to DCAT for Dataset property has version.
- Issue [426](https://github.com/SEMICeu/dcat-ap/issues/426): fixed the diagram
- Issue [432](https://github.com/SEMICeu/dcat-ap/issues/432): TODO: add the Iana codelists to the codelist tables
- Issue [436](https://github.com/SEMICeu/dcat-ap/issues/432): Remove catalogue from the classes that use dcat:theme in section 10


 
