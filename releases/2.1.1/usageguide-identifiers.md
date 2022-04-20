# Guidelines on the management of identifiers 

DCAT-AP is an application profile for (open) data portals. 
It describes catalogues of (open) datasets and data services.
The profile provide means to express identifiers for the entities in the catalogue using the properties `dct:identifier` and `adms:identifier`.
But besides highlighting that identifiers should be qualityful (e.g. by following the [10 rules for persistent identifiers](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/document/10-rules-persistent-uris) ), the recommendations are limited.

This provides individual catalogue implementors with a lot of freedom. But it makes the usage harder. Harvesters which aggregate content from different sources face different interpretations. Data researchers that browse two data portals must adapt their search and use to the distinct rules of the data portals.

These guidelines are proposed with as main objective to support the reuse of datasets and data services throughout the catalogue network. 


### Problem case
Inspecting today (i.e april 2022) the usage of `dct:identifier`, one observes:

  - that only 60% has it assigned, and
  - that the variety of possible values is high: roughy 50% has an http(s) URI assigned, for others it is some other value.

This means that today implementers cannot use neither the presence, nor the representation, as reliable source to build decisions upon.

In addition the usage note for dct:identifier gives implementers the choice to either provide the value the catalogue is assigning or the value the first publisher/owner of the dataset (description) has given. These are two distinct values. Where the first is beneficial for the network of catalogues, the second is more important when building a nice frontend.

The alternative `adms:identifier` which provides metadata about an identifier, e.g. the agency that is responsible for assigning the identifier, is even less applied that dct:identifier. 
The DCAT-AP specification hints that these are *other identifiers*, additional secondary identifiers.  

Thirdly there are the RDF URIs. As many data catalogues exchange the catalogue content in RDF format, the datasets might get a URI assigned. 
This identifier may or may not included by the catalogue as `dct:identifier` or `adms:identifier`. 

### Application use case 1

Deciding whether two datasets are the same based on the identifying information provided today is thus a complicated algorithm, of which the success is uncertain. 

### Application use case 2

The catalogue network is a (virtual) network of interconnected catalogues which is establised via two activities:

  - *referencing from one entity in one catalogue to another catalogue.* 
         For example, a EU MS dataset on population could express it is a part of the Eurostat dataset on populations (using `dct:isPartOf`).
  - *harvesting.*  Harvesting is the process of aggregating (copying) source catalogues into a singe larger catalogue.

From the above the second is today the most frequent occurring case.

Although one may assume it, it is incorrect to consider the catalogue network as a tree of disjoint catalogues. 
That is not today's practice.   
This means that the same dataset may reach a catalogue throughout different routes in the network.
When this happens the identifying information should be supportive to detect this. 
Today the DCAT-AP specification and implementations do not guarantee that detecting this is simple and can be done with minimal effort.


## Proposal

The proposal consists of two parts. First, and foremost, the focus on sharing more metadata on identifiers. 
In all application use cases the lack of (complete) knowledge on identification is underlying to ability to provide simple decision making.
So the proposal will encourage sharing more identifying information in the catalogue network.

The second part expresses a longer term vision, which is shared by the community. But it represents a semantical usage change. 

### Proposal 1 - share metadata on identifiers

In short, the proposal is enlarge the use of `adms:identifier` not only for secondary identifiers, but for all identifiers assigned to the dataset throughout processing and sharing of that dataset in the catalogue network.

This is augmented with the processing advice that an aggregator should create additional adms:identifier properties for any identifiers received from dataset publishers and any identifiers created by the aggregator, with metadata as proposed in this proposal.



For a Dataset(*1)

|Property        | URI           | Range   | Cardinality | definition | Usage Note |
|----------------|---------------|---------|-------------|------------|------------|
|identifier | adms:identifier | adms:Identifier | 0..n  (*3)| described identifier for the Dataset | Each identifier a catalogue or a process assigns and which is publicly accessible (e.g. via a data portal) should be included.  |

On the completeness:
   - the value of `dct:identifier` should be included
   - the RDF URI should be included
   - on harvesting, the aggregator should never loose identifier information so if the RDF URI is changed, or dct:identifier value is changed during harvesting the original identifiers along the new identifiers should be part of the `adms:identifier` list. 

To ensure that the meta information about the identifier is not solely the identifier value, 
the proposal also includes additional requirements for [adms:Identifier](https://www.w3.org/TR/vocab-adms/#identifier).

|Property        | URI           | Range   | Cardinality | definition | Usage Note |
|----------------|---------------|---------|-------------|------------|------------|
|notation        | skos:notation | Literal | 1..1        | content string which is the identifier| |
|schema manager name  | adms:schemaAgency | Literal | 1..1 | the name of the agency that manages the identifier scheme | (*2) |
|schema manager agent | dct:creator | foaf:Agent | 1..1 | the agency that manages the identifier scheme | (*2) |

Besides the above properties other properties could be suggested to be added to adms:Identifier.

_Open Discussion_

(*1) The proposal can be applied to other (critical) entities in the application profile too. Obviously dcat:Dataservice, but also for dcat:Catalog, dcat:CatalogRecord, dcat:Distribution or foaf:Agent.

(*2) at least one of the forms should be present. Either by making one property mandatory or by making the union mandatory.

(*3) The minimum cardinality will be defacto 1 since managing a dataset without any identifier in a catalogue would be a rarity.  

_CHANGELOG_

- label change: "other identifier" -> "identifier"
- usage note change: "This property refers to a secondary identifier of the Dataset" -> "described identifier for the Dataset"

### Proposal 2 - main identifier

The motivation for this change is not only to clarify the meaning of the word _main_ in the label, but also that `adms:identifier` does not express a preference of use. 
Any Identifier is as good as any other to support the identification of the dataset. 
Without this knowledge, data portals cannot suggest data reseachers which identifier to use. 

This proposal fixes the one who decides the preference, namely the owner or first publisher of that dataset. 
This is a shift in the usage semantics as it now stresses the word _main_ in the label in the context of the whole metadata of the dataset, rather than the main in the usage context of a catalogue (which varies from catalogue to catalogue).      


For a Dataset(*1)

|Property        | URI           | Range   | Cardinality | definition | Usage Note |
|----------------|---------------|---------|-------------|------------|------------|
|main identifier | dct:identifier| Literal | 0..1        | The main identifier for the Dataset | the value is assigned by the owner/publisher of the Dataset |

It is strongly recommended that owners and the orinal publishers of the datasets consider the use persistent identifiers for this. 

_CHANGELOG_
- usage note change: "This property contains the main identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalogue." -> "the value is assigned by the owner/publisher of the Dataset"
- max cardinality: n -> 1

_Editorial note_ 

During the WG, the WG was presented with two possible interpretations for `dct:identifier`. The proposal in this document has been built on top of the chosen interpretation.

## Benefits applied to the usecases

### application use case 1
To detect that two datasets are the same one can rely on an assessment of `adms:identifier`. 
If they contain the same identifier with the same metadata, then they can be considered the same. 
Merging, metadata value priority selection, etc. can be based on a simple trusted basis.

Note that this will not exclude the existence of similar (or equal) datasets in the catalogue network have complete disjoint identifiers. 
Resolving this situation involves reaching out to the dataset owner.

### application use case 2
As harvesters propagate all dataset identifiers (the ones received from the source, plus those assigned by themselves) in adms:identifier, the case when a dataset is reaching a harvester catalogue via two routes is simpler to handle.

Similar like in application use case 1, it is sufficient to access `adms:identifier` to find coinciding datasets.

Observe that based on the guidelines none of the above use cases solutions must rely on `dct:identifier`. 
Nor it relies on an enforcement of a specific identifier representation.
It relies on sharing detailed metadata in the catalogue network. 


## Example scenarios

This section illustrates the above guidelines. 

All examples are expressed in RDF serialization turtle notation. 
To shorten the examples the used prefixes are summerised here:
```
prefix ex: <http://example.com/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dct: <http://purl.org/dc/elements/1.1/> .
@prefix adms: <https://www.w3.org/ns/adms#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
```

### Example Proposal 1 



Invalid cases. The examples only show the identifier properties. The absence of an identifier property means this value has not been provided.
```
ex:cat1
    a dcat:Catalog ;
    dcat:dataset ex:cat1-d1, ex:cat1-d2, ex:cat1-d3, ex:cat1-d4, ex:cat1-d5.

# no adms:identifier present
   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1".

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d".

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f".
    
   ex:cat1-d4 a dcat:Dataset.
      
   ex:cat1-d5 a dcat:Dataset;
              dct:identifier "ex:cat1-d5".

# blank nodes
ex:cat1
    a dcat:Catalog ;
    dcat:dataset 
    [
        dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d" ;
        a dcat:dataset
    ], [
        dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f" ;
        a dcat:dataset
    ], [
        a dcat:dataset
    ], [
        dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f" ;
        a dcat:dataset ;
        adms:identifier [
            dct:creator ex:org1 ;
            skos:notation "Dataset 1"
        ]
    ] .

# with adms:identifier, but not complete coverage 
ex:cat1 dcat:dataset ex:cat1-d10, ex:cat1-d11, ex:cat1-d12.
   
   ex:cat1-d10 a dcat:Dataset;
         dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
          adms:identifier 
            [ skos:notation "Dataset 1";
               dct:creator ex:org1
            ]  
            
    ex:cat1-d11 a dcat:Dataset;
         dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
          adms:identifier 
            [ skos:notation "Dataset 1";
                dct:creator ex:org1
            ], 
            [ skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                dct:creator ex:inspire   
            ].   
            
     ex:cat1-d12 a dcat:Dataset;
         dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
          adms:identifier [     
             skos:notation "ex:cat1-d12";
             dct:creator ex:cat1   
            ]   

```

valid situations for the above incorrect situations

```
ex:cat1 a dcat:Catalog.
  dcat:dataset ex:cat1-d1, ex:cat1-d2, ex:cat1-d3, ex:cat1-d4, ex:cat1-d5.

   # no adms:identifier present
   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier 
                [ skos:notation "ex:cat1-d1";
                dct:creator ex:cat1
                ],
                [ skos:notation "Dataset1";
                dct:creator ex:org1
                ].
              
    ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier 
                [ skos:notation "ex:cat1-d2";
                dct:creator ex:cat1
                ],
                [ skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                dct:creator ex:org1
                ].
             
   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f",
              adms:identifier 
                [ skos:notation "ex:cat1-d3";
                dct:creator ex:cat1
                ],
                [ skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                dct:creator ex:org1
                ].
              
   ex:cat1-d4 a dcat:Dataset;
             adms:identifier 
                [ skos:notation "ex:cat1-d4";
                dct:creator ex:cat1          
                ].
      
   ex:cat1-d5 a dcat:Dataset;
              dct:identifier "ex:cat1-d5";
              adms:identifier 
                [ skos:notation "ex:cat1-d5";
                dct:creator ex:cat1              
                ].

# with blank nodes
ex:cat1 a dcat:Catalog.
  dcat:dataset              
   [ a dcat:dataset;
      dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
      adms:identifier [     
                skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                dct:creator ex:org1
              ]
   ],   
   [ a dcat:dataset;
      dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
      adms:identifier 
                [ skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                dct:creator ex:org1
                ]
   ],                  
   [ a dcat:dataset  
       # this becomes virtually impossible, as only the owner of a dataset could provide that case.
   ],    
   [ a dcat:dataset;  
         dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f",
         adms:identifier [
            [ skos:notation "Dataset 1";
               dct:creator ex:org1
            ], 
            [ skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              dct:creator ex:org1
            ]
   ].

# with adms:identifier, but now with complete coverage 
ex:cat1 dcat:dataset ex:cat1-d10, ex:cat1-d11, ex:cat1-d12.

   ex:cat1-d10 a dcat:Dataset;
         dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
          adms:identifier [
            [ skos:notation "Dataset 1";
               dct:creator ex:org1
            ],   
            [ skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
               dct:creator ex:inspire
            ],
            [ skos:notation "ex:cat-d10";
                dct:creator ex:cat1   
            ].
            
    ex:cat1-d11 a dcat:Dataset;
         dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
          adms:identifier 
            [ skos:notation "Dataset 1";
                dct:creator ex:org1
            ],
            [ skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                dct:creator ex:inspire
            ],
            [ skos:notation "ex:cat-d11";
                dct:creator ex:cat1   
            ].   
            
     ex:cat1-d12 a dcat:Dataset;
         dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
          adms:identifier 
             [ skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
               dct:creator ex:inspire
             ],    
            [ skos:notation "ex:cat1-d12";
                dct:creator ex:cat1
            ]. 

```





### harvesting scenarios

#### harvesting scenario without proposal applied

Catalogue source 1: `ex:cat1`

```
ex:cat1 a dcat:Catalog.
ex:cat1 dcat:dataset ex:cat1-d1, ex:cat1-d2, ex:cat1-d3.

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1".

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d".

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f".


```

Catalogue source 2: `ex:cat2`

```
ex:cat2 a dcat:Catalog.
ex:cat2 dcat:dataset ex:cat2-d1.

   ex:cat2-d1 a dcat:Dataset;
              dct:identifier "Dataset 1".

```

The result of the aggregation process is open for interpretation in the current specification. Two possible outcomes are illustrated below.

A) The aggregated catalogue Aggr: `ex:cataggr` created from combining source 1 and source 2 can result in the following
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset ex:cat1-d1, ex:cat1-d2, ex:cat1-d3, ex:cat2-d1.

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1".

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d".

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f".

   ex:cat2-d1 a dcat:Dataset;
              dct:identifier "Dataset 1".

```

As dct:identifier is the identifier assigned by the owner/publisher of the datasets `ex:cat1-d1` and `ex:cat2-d1` the freetext search on the aggregated catalogue will return 2 answers for the search for "Dataset 1".

B) The aggregated catalogue Aggr: `ex:cataggr` created from combining source 1 and source 2 can result in the following
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset 
   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
              ],
   [ a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d"
              ],
   [ a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
              ].



```
when the aggregation catalogue considers the `dct:identifier` sufficient and sole basis for determining equality.

#### example guideline: add aggregator identifiers 

When the aggregated catalogue Aggr would need uniform identifiers for it search index, then the catalogue should enrich each dataset as follows (considering the result according situation A above):
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset ex:cat1-d1, ex:cat1-d2, ex:cat1-d3, ex:cat2-d1.

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ].

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ].

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-231";
                     dct:creator ex:cataggr
                     ].

   ex:cat2-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr
                     ].


```
This illustrates that the guideline is an additive. The original content is not changed.
At the same time, it offers implementation support for the aggregation catalogue: the search index can be constructed from the `adms:identifier` with as creator `ex:cataggr`. 



### example guideline: share metadata of all identifiers

The guidelines advice that instead of sharing the main identifier solely as a literal, also to share metadata about it.
In case when the harvesting process encounters a _main identifier_ without the metadata information, the harvester is recommended to add the information within it capabilities. 

```
ex:cat1 a dcat:Catalog.
ex:cat1 dcat:dataset ex:cat1-d1.

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "ex:cat1-d1";
                     dct:creator ex:org1 
                     ].

```


```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset ex:cat1-d1.

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier 
                 [
                     skos:notation "ex:cat1-d1";
                     dct:creator ex:org1
                     ],
                     [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1
                     ].
```

### example: catalogue network benefit
By sharing the identifier descriptions throughout the catalogue network, a harvester gets insight in the correlations, and can make smart decisions.


Consider that the source catalogue `ex:cat1` is harvested by two harvesters: `ex:cataggr` which selects all datasets and `ex:catthema` which only selects the datasets that match a particalur thema (e.g. Mobility).
The content of both will be:

```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset ex:cat1-d1, ex:cat1-d2, ex:cat1-d3.

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1
                     ],
[
                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ].

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1
                     ],
[
                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ].

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                     dct:creator ex:cat1
                     ],
[
                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr
                     ].


ex:catthema a dcat:Catalog.
ex:catthema dcat:dataset ex:cat1-d3.

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier 
              [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                     dct:creator ex:cat1,
                     ], 
              [
                     skos:notation "http://thema.catalogue.org/data/dataset/321321";
                     dct:creator ex:catthema
                     ].




```

Suppose that a third harvester `ex:global` harvests both aggregated catalogues.
According to the expectations expressed for harvesting, the aggregation should result in 3 datasets instead of 4.
One would expect that the dataset `ex:cat1-d3` present in both portals `cataggr` and `catthema` will be treated as the same dataset as it originates from the same source catalogue.
The desired result is shown below: 

```
ex:global a dcat:Catalog.
ex:global dcat:dataset  ex:cat1-d1, ex:cat1-d2, ex:cat1-d3.

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1
                     ],
                     [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ].

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1
                     ],
                     [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ].

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier 
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                     dct:creator ex:cat1,
                     ],
                     [
                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr
                     ],
                     [
                     skos:notation "http://thema.catalogue.org/data/dataset/321321";
                     dct:creator ex:catthema
                     ].

```
A detailed look to the last dataset shows that all the identifier information is concatenated, describing a trace of where the dataset has been exposed.
In the following section, this trace can be used to create trustworthy merging of metadata. 


## Identifiers and RDF

DCAT-AP is an application profile designed having the Semantic Web as base principle. 
In the Semantic Web community the data format RDF is a corner stone. 
RDF is a data format that comes with explicit and implicit principles on identifiers:
  - (explicit) a node in an RDF graph is either named (in the form of a URI) or without an identifier (blank nodes).
  - (implicit) URIs are preferrable stable, persistent and dereferenceable 
  - (implicit) when processing RDF graphs a named node does not change name, but blank nodes do.

When considering identifiers in a local processing context (within a single data portal) then the above principles might be interpreted very loose.
From the moment one considers a network of catalogues the interpretation is becomes stricter, otherwise the reuser (harvester) will not know what operations are valid.

Lets consider the first example scenario aggregating source 1 and source 2 but with blank nodes:


**Catalogue source 1: `ex:cat1`**

```
ex:cat1 a dcat:Catalog.
ex:cat1 dcat:dataset 
   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
              ],

   [ a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d"
              ],

   [ a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
              ].

```

**Catalogue source 2: `ex:cat2`**

```
ex:cat2 a dcat:Catalog.
ex:cat2 dcat:dataset 
   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
   ].

```

The aggregated catalogue Aggr: `ex:cataggr` created from combining (by RDF concatination) source 1 and source 2 will result in the following
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset 
   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
              ],

   [ a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d"
              ],

   [ a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
              ], 

   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
              ].

```

This is as one expects, namely that there are two distinct datasets having the same dct:identifier.

Lets now consider an additional aggregator `ex:catthema` which also harvests the first catalogue `ex:cat1`, but only maintains the datasets with thema Mobility.

```
ex:catthema a dcat:Catalog.
ex:catthema dcat:dataset 
   [ a dcat:Dataset;
              dct:identifier "Dataset 1";
   ].
```

Let the catalogue `ex:global` be the result from harvesting (RDF concatination) `ex:catAggr` and `ex:catthema.

```
ex:catglobal a dcat:Catalog.
ex:catglobal dcat:dataset
   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
              ],
   [ a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d"
              ],
   [ a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
              ], 
   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
              ],
   [ a dcat:Dataset;
              dct:identifier "Dataset 1";
   ].
```

In this case harvesters _contribute to the increase of datasets_ in the catalogue network because now ex:global contains 5 datasets instead of 4.

Observe that solely on the value of `dct:identifier` disambiguation is not thrustworthy. As this value is given by the publisher and the same value might be assigned by another publisher to another dataset.
The `adms:identifier` however is more trustable. Because the metadata assigns a scope and unless the scope (creator) is incoherent with itselves, the value is unique within that scope.

Thus with blank nodes, harvesters need additional information to apply a post-processing to reach the intended result. 
The provided guideline on sharing information via `adms:identifier` provide that reliable input to implemented a trusted merge operation.

With the guidelines applied the content of the catalogue `ex:global` is

```
ex:catglobal a dcat:Catalog.
ex:catglobal dcat:dataset
   [ a dcat:Dataset;
              dct:identifier "Dataset 1"
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1
                     ],
                     [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ]
              ],
   [ a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1
                     ],
                     [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ]        
              ],
   [ a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                     dct:creator ex:cat1
                     ],
                     [
                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr
                     ]
              ], 
   [ a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1"
                     dct:creator ex:cat2
                     ],
                     [
                     skos:notation "http://catalogue.aggregation/id/dataset/800-232";
                     dct:creator ex:cataggr
                     ]
              ],
   [ a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1"
                     dct:creator ex:cat1
                     ],
                     [
                     skos:notation "http://thema.catalogue.org/data/dataset/321321231";
                     dct:creator ex:catthema
                     ]
   ].
```
When inspecting the adms:identifier values one can see that the last entry and the first entry of the dataset having als dct:identifier "Dataset 1" are coinciding.
The identity equivalence check becomes straightforward. 

### named nodes 
The natural aggregation power of RDF via named nodes is as follows: information that is attached in the same named node in two sources is merged to create one view. 

Unfortunately the fact that an RDF node is named with a URI does not provide any indication whether this URI (identifier) is created 
with the objective to create just a coherent RDF or with the objective to support persistent stable identificators for datasets.
The value `http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f` is from the representation perspective as good as `https://example.com/d/23213`. 
One cannot tell the difference in objective just from the representation.

In general, treating named nodes (URIs) as blank nodes and replacing the URIs from the datasets with catalogue specific URIs goes against best practices in the Semantic Web community.  
This has several reasons: (a) source providers might have invested in Persistent URIs (PURIs) and this ignores the whole effort, (b) the source PURI might be lost if the replacement process does not add them, so a copy of the same dataset appear and (c) the ownership of the information seems transferred. In the Semantic Web the PURI implicitely claims ownership of the entity it refers to. In this case the PURI refers to a dataset, and thus replacing the PURI seem to shift ownership. Which is an unwanted effect.

These arguments are also underlying in the guideline proposal of the `dct:identifier`. By encouraging the owner or first publisher of the dataset to use PURIs for their datasets then this PURI can be used as named node. In that case, the named node in the RDF representation also corresponds to the 'main identifier'. And that is in line with the Semantic Web best practices. 


Thus the following catalogue after harvesting should be avoided:
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset ex:cataggr1, ex:cataggr2, ex:cataggr3, ex:cataggr4.

   ex:cataggr1 a dcat:Dataset;
              dct:identifier "Dataset 1".

   ex:cataggr2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d".

   ex:cataggr3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f".

   ex:cataggr4 a dcat:Dataset;
              dct:identifier "Dataset 1".

```
Replacing the named nodes might have the same underdesirable effects on the catalogue network as sharing blank nodes: namely it can be the source of injecting the same data again in the network.

Claiming *being unharvestable* as solution to this problem by data catalogues is neither adviced.  

**Open discussion:**

A sole exception to this approach is the naming of blank node dataset. 
In many EU Memberstates data portals will collect data from organisations that do not assign a quality main identifier. 
In that case the catalogue could (or even adviced to) generate a PURI and replace the blank node with the PURI. 

_Persistence_ is important here, because the harvester catalogue is faced with defining when a dataset is deprecated/deleted or the same when the metadata content changes. E.g. is a dataset title change a change in the dataset, or a landingspage change, etc. 
If any metadata content change is resulting in a new URI, then the catalogue network maybe is better of sharing the dataset as a blank node, because one cannot rely on the URI for persistency.

Applying this process as close as possible to the owner/first publisher of the dataset is in line with the guidelines.
Observe that if the publisher catalogue with the blank nodes is harvested by another catalogue the same dataset might appear in the catalogue network.
When this is detected the first time harvesters could encourage the publisher catalogue to introduce a quality main identifier.


Based on these possible negative impact on the catalogue network the following guideline proposal is given:

*Guideline proposal*

Only use URIs for RDF nodes as name in case the catalogue also wants to share this as a persistent indentifier in the catalogue network.
On harvesting, the URI of the RDF node is maintained as is in the aggregated catalogue. 
However, harvesters must still implement postprocessing to ensure that they not accidently inject duplicates into the catalogue network.



