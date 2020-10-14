# Context

Exploiting and using SHACL in an operational context is not that obvious. The decisions taken can influence the outcome of the SHACL validation results from _accepted_ to _erroneous_. To guide these decisions this directory describes scenarios to illustrate various decision making points. 



The example files in this directory are for illustration purposes only. They do not represent an existing dataset. 
The copies of the existing vocabularies are also included for illustration purposes too. 

## executing a demo scenario

The demo scenarios have been evaluated and tested with the ISA testbed generic instance. https://www.itb.ec.europa.eu/shacl/any/upload.
This instance is a frontend to a barebone SHACL validation service. 

It has 2 key input fields 
    - content to validate: the file which will be validated 
    - external shapes: the background knowledge that this used to validate against. This consists of SHACL template files, but also of additional knowledge.

The values to be provided to these input fields are downloadable machine processable URLs. Therefore one must use the _raw_ variants of the URLs pointing to the files. For the ISA testbed generic instance to work properly one should indicate that the input value is a URI and set the provided RDF serialization correct.  


Each scenario will consists of a number of situations which will be constructed by inputting the described values.
Each situation will differ from another situation by small changes in either a change in the content to validate or the provided external shapes. 



# Scenarios

## Scenario 1

This scenario demonstrates the influence of the background knowledge.

### Situation 1

File example1.nt contains a coherent and DCAT-AP compliant dataset description

 - content to validate: https://github.com/SEMICeu/DCAT-AP/raw/2.1.0-draft/releases/2.1.0/examples/example1.nt
 - external shapes: https://github.com/SEMICeu/DCAT-AP/raw/2.1.0-draft/releases/2.1.0/dcat-ap_2.1.0_shacl_shapes.ttl

expected outcome: success, no errors
ISA testbed result: success, no errors


### Situation 2

The file example2.nt is the same as example1.nt except that the publisher is now declared as an foaf:Organisation. 

 - content to validate: https://github.com/SEMICeu/DCAT-AP/raw/2.1.0-draft/releases/2.1.0/examples/example2.nt
 - external shapes: https://github.com/SEMICeu/DCAT-AP/raw/2.1.0-draft/releases/2.1.0/dcat-ap_2.1.0_shacl_shapes.ttl

expected outcome: success, no errors because one knows that foaf:Organisation is a foaf:Agent
ISA testbed results: error, the publisher is not an foaf:Agent as expected by SHACL rules.

### Situation 3

Test the same file example2.nt, but with additional extra information, namely the foaf vocabulary

 - content to validate: https://github.com/SEMICeu/DCAT-AP/raw/2.1.0-draft/releases/2.1.0/examples/example2.nt
 - external shapes: 
    - https://github.com/SEMICeu/DCAT-AP/raw/2.1.0-draft/releases/2.1.0/dcat-ap_2.1.0_shacl_shapes.ttl
    - http://xmlns.com/foaf/spec/index.rdf

expected outcome: success, no errors because one knows that foaf:Organisation is a foaf:Agent
ISA testbed result: success, no errors

### Explanation
The SHACL specification allows for take into the evaluation process background knowledge. Especially subclass relationships are supported. However only when this knowledge is available to the evaluation engine this knowledge will be taken into account. To understand the reason for an error one needs to know the configuration of the external shapes parameter. A validation service with the single parameter 'content to validate' must thus communicate to its users what is its used configuration in order to enable the user of that service to understand the error.
A user providing data according to the example2.nt interpretation has a valid point that this interpretation should be considered an acceptable input. From the other perspective on the revieving side, the harvester might decide it is up to the provider to apply the subclass inference and provide the data according to the most abstract setting. The DCAT-AP specification does not provide a 

