# Guidelines on the management of identifiers 

DCAT-AP is an application profile for (open) data portals. 
It describes catalogues of (open) datasets and data services.
The profile provide means to express identifiers for the entities in the catalogue using the properties `dct:identifier` and `adms:identifier`.
But besides highlighting that identifiers should be of high quality (e.g. by following the [10 rules for persistent identifiers](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/document/10-rules-persistent-uris) ), the recommendations are limited.

This provides individual catalogue implementors with a lot of freedom. But makes the work for catalogues that want to reuse the content of other catalogues harder.
These guidelines are proposed with as main objective to support the reuse of datasets and data services throughout the catalogue network.


The catalogue network is a (virtual) network of interconnected catalogues which is establised via two activities:

  - *referencing from one entity in one catalogue to another catalogue.* 
         For example, a EU MS dataset on population could express it is a part of the Eurostat dataset on populations (using `dct:isPartOf`).
  - *harvesting.*  Harvesting is the process of aggregating source catalogues into a singe larger catalogue.

From the above the second is today the most frequent occurring case.

Harvesting is a technical process, but the following expectations are commonly expected from the process:

  - Harvested datasets should be easily retrievable in the aggregation. 
  - Harvesters should not be required to impose cross-source requirements like sources are disjoint
  - Harvesters should not contribute to the creation of duplicates
  - Harvesters should not claim *ownership* of the sources. There should be ways that users of the aggregated catalogue can find back the original source. 
  - Harvesting should require *minimal effort*: both for dataset owners as for the harvesters

## Editorial note 

During the WG, the WG was presented with two possible interpretations for dct:identifier. The proposal in this document has been built on top of the chosen interpretation.


## Proposal

For a Dataset(*1)

|Property        | URI           | Range   | Cardinality | definition | Usage Note |
|----------------|---------------|---------|-------------|------------|------------|
|main identifier | dct:identifier| Literal | 0..1        | The main identifier for the Dataset | the value is assigned by the owner/publisher of the Dataset |
|identifier | adms:identifier | adms:Identifier | 0..n | described identifiers for the Dataset | the value describes the identifier of a Dataset. |

If the _main identifier_ has a value, the full description is also part of the identifiers (adms:identifier).

To ensure that the meta information about the identifier is not solely the identifier value, 
the proposal also includes additional requirements for [adms:Identifier](https://www.w3.org/TR/vocab-adms/#identifier).

|Property        | URI           | Range   | Cardinality | definition | Usage Note |
|----------------|---------------|---------|-------------|------------|------------|
|notation        | skos:notation | Literal | 1..1        | 
|schema manager name  | adms:schemaAgency | Literal | 1..1 | the name of the agency that manages the identifier scheme | (*2) |
|schema manager agent | dct:creator | foaf:Agent | 1..1 | the agency that manages the identifier scheme | (*2) |

Besides the above properties other properties could be suggested to be added to adms:Identifier.

(*1) The proposal can be applied to other (critical) entities in the application profile too. Obviously dcat:Dataservice, but also for dcat:Catalog, dcat:CatalogRecord, dcat:Distribution or foaf:Agent.

(*2) at least one of the forms should be present. Either by making one property mandatory or by making the union mandatory.

*Harvesting guidelines*

When the services on a catalogue (like search, UI representation, statistics, ...) require identifiers in a coherent and consistent representation (e.g. a uuid), then the harvesting process will add these identifiers as part of the adms:identifier property. 
This enrichment is also shared with the catalogue network.




## Example scenarios

Catalogue source 1: `ex:cat1`

```
ex:cat1 a dcat:Catalog.
ex:cat1 dcat:dataset [

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1",

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d",

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
]

```

Catalogue source 2: `ex:cat2`

```
ex:cat2 a dcat:Catalog.
ex:cat2 dcat:dataset [

   ex:cat2-d1 a dcat:Dataset;
              dct:identifier "Dataset 1"
]

```

The aggregated catalogue Aggr: `ex:cataggr` created from combining source 1 and source 2 result in the following
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset [

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1",

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d",

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f", 

   ex:cat2-d1 a dcat:Dataset;
              dct:identifier "Dataset 1"
]

```

As dct:identifier is the identifier assigned by the owner/publisher of the datasets `ex:cat1-d1` and `ex:cat2-d1` the freetext search on the aggregated catalogue will return 2 answers for the search for "Dataset 1".


### example guideline harvesting 

Now suppose the aggregated catalogue Aggr would need uniform identifiers for it search index, then the catalogue would enrich each dataset as follows
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset [

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ],

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ],

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/123-231";
                     dct:creator ex:cataggr
                     ],

   ex:cat2-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr
                     ]
]

```
This illustrates that the guideline is an additive. The original content is not changed.
At the same time, the search index can be constructed from the adms:identifiers with as creator `ex:cataggr`. 



### example guideline "main identifier" and "identifiers"

The guidelines advice that instead of sharing the main identifier solely as a literal, also to share metadata about it.
```
ex:cat1 a dcat:Catalog.
ex:cat1 dcat:dataset [

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:org1 
                     ],

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:inspireportal
                     ],

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
                     dct:creator <http://data.europa.eu>
                     ],

]

```

In case a harvesting process encounters a _main identifier_ without the metadata information, the harvester is recommended to add the following information
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset [

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1
                     ],

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1
                     ],

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
                     dct:creator ex:cat1
                     ],

]

```

### harvesting network 
By sharing the identifier descriptions throughout the catalogue network, a harvester gets insight in the correlations, and can make smart decisions.


Consider that the source catalogue 1 is harvested by 2 harvesters: `ex:cataggr` which selects all datasets and `ex:catthema` which only selects the datasets that match a particalur thema (e.g. Mobility).
The content of both will be:

```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset [

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ],

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ],

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr
                     ],

]

ex:catthema a dcat:Catalog.
ex:catthema dcat:dataset [

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
                     dct:creator ex:cat1,

                     skos:notation "http://thema.catalogue.org/data/dataset/321321";
                     dct:creator ex:catthema
                     ],

]


```


Suppose a third harvester `ex:global` harvests both aggregated catalogues.
According to the expectations expressed for harvesting, the aggregation should result in 3 datasets instead of 4.


```
ex:global a dcat:Catalog.
ex:global dcat:dataset [

   ex:cat1-d1 a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ],

   ex:cat1-d2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ],

   ex:cat1-d3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr,

                     skos:notation "http://thema.catalogue.org/data/dataset/321321";
                     dct:creator ex:catthema
                     ],

]

```
A detailed look to the last dataset shows that all the identifier information is concatenated. To a certain extend this forms a trace of where the dataset has been exposed.



## Identifiers and RDF

DCAT-AP is an application profile designed having the Semantic Web as base principle. 
In the Semantic Web community the data format RDF is a corner stone. 
RDF is a data format that comes with explicit and implicit principles on identifiers:
  - (explicit) a node in an RDF graph is either named (in the form of a URI) or without an identifier (blank nodes).
  - (implicit) URIs are preferrable stable, persistent and dereferenceable 
  - (implicit) when processing RDF graphs a node is not changed from name.

When considering identifiers in a local processing context (within a single data portal) then the above principles might be interpreted very loose.
From the moment one considers a network of catalogues the interpretation is becomes stricter, otherwise the reuser (harvester) will not know what operations are valid.

Lets consider the first example scenario aggregating source 1 and source 2 but with blank nodes:


Catalogue source 1: `ex:cat1`

```
ex:cat1 a dcat:Catalog.
ex:cat1 dcat:dataset [

   [] a dcat:Dataset;
              dct:identifier "Dataset 1",

   [] a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d",

   [] a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
]

```

Catalogue source 2: `ex:cat2`

```
ex:cat2 a dcat:Catalog.
ex:cat2 dcat:dataset [

   [] a dcat:Dataset;
              dct:identifier "Dataset 1"
]

```

The aggregated catalogue Aggr: `ex:cataggr` created from combining source 1 and source 2 will result in the following
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset [

   [] a dcat:Dataset;
              dct:identifier "Dataset 1",

   [] a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d",

   [] a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f", 

   [] a dcat:Dataset;
              dct:identifier "Dataset 1"
]

```

This is as one expects.
But lets consider now the creation of ex:global, using the same principles:


```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset [

   [] a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ],

   [] a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ],

   [] a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr
                     ],

]

ex:catthema a dcat:Catalog.
ex:catthema dcat:dataset [

   [] a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f"
                     dct:creator ex:cat1,

                     skos:notation "http://thema.catalogue.org/data/dataset/321321";
                     dct:creator ex:catthema
                     ],

]


```

The aggregation will now result in 4 datasets instead of the expected 3.


```
ex:global a dcat:Catalog.
ex:global dcat:dataset [

   [] a dcat:Dataset;
              dct:identifier "Dataset 1";
              adms:identifier [
                     skos:notation "Dataset 1";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-121";
                     dct:creator ex:cataggr
                     ],

   [] a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
              adms:identifier [
                     skos:notation "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/123-468";
                     dct:creator ex:cataggr
                     ],

   [] a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                     dct:creator ex:cat1,

                     skos:notation "http://catalogue.aggregation/id/dataset/995-123";
                     dct:creator ex:cataggr,

                     ],

   [] a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
              adms:identifier [
                     skos:notation "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f";
                     dct:creator ex:cat1,

                     skos:notation "http://thema.catalogue.org/data/dataset/321321";
                     dct:creator ex:catthema
                     ],

]

```
In this case harvesters contribute to the increase of datasets because now ex:global contains 4 datasets instead of 3. 

Observe that solely on the value of `dct:identifier` disambiguation is not thrustworthy. As this value is given by the publisher and the same value might be assigned by another publisher.
The `adms:identifier` however is more trustable. Because the metadata assigns a scope and unless the scope (creator) is incoherent with itselves, the value is unique within that scope.

Thus with blank nodes, harvesters need additional information to do post-processing to reach the intended result. 
The provided guidelines on `dct:identifier` and  `adms:identifier` provide that context.


Unfortunately the fact that an RDF node is named with a URI does not provide any indication whether this URI (identifier) is created 
with the objective to create just a coherent RDF or with the objective to support persistent stable identificators for datasets.
The value `http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f` is from the represenatation perspective as good as 'https://example.com/d/23213'. 
One cannot tell the difference in objective just from the representation.

In general treating URIs as blank nodes and replacing the URIs from the datasets with catalogue specific URIs is considered bad practice. 
Thus the following should be avoided:
```
ex:cataggr a dcat:Catalog.
ex:cataggr dcat:dataset [

   ex:cataggr1 a dcat:Dataset;
              dct:identifier "Dataset 1",

   ex:cataggr2 a dcat:Dataset;
              dct:identifier "urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d",

   ex:cataggr3 a dcat:Dataset;
              dct:identifier "http://data.europa.eu/88u/dataset/1735eaaf-afe6-4d90-af67-488c4c37b91f", 

   ex:cataggr4 a dcat:Dataset;
              dct:identifier "Dataset 1"
]

```
Not only because the creation of the new URI `ex:cataggr1` is might be subject to less reliable design decisions 
(e.g. based on a hash of the title), but typically these rules are only known to the aggregating catalogue. 
In order to have correct execution of these rules, the aggregation catalogue might consider imposing editing rules on source catalogues, 
something that best is avoided when possible.  
This approach also materizalizes acccidental merging of two datasets that shouldn't be merged. 
That is problematic because this interpretation error might propagate throughout the catalogue network.
Finally the knowledge of the URI `ex:cat1-d1` is lost, and harvesters should avoid to loose identification data.

Based on these possible negative impact on the catalogue network the following guideline proposal is given:

*Guideline proposal*

Only use URIs for RDF nodes as name in case the catalogue also wants to share this as a persistent indentifier in the catalogue network.
On harvesting, the URI of the RDF node is maintained as is in the aggregated catalogue. 
However, harvesters must still implement postprocessing to ensure that they not accidently inject duplicates into the catalogue network.


# implementation note
The above guidelines impact most editorial processes and most current harvesting practices *minimally*. 
As before, dataset publishers are not forced to follow one centrally decided identifier schema.
Harvesters can add their catalogue specific identifiers as a non-intrusive addition.
And globally the catalogue network becomes more mature and stable.

Of-course 

