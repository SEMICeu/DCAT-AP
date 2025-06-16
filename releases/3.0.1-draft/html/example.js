function example_structure_itb_instance(exampleid, linkinfo){
	structure=`
	<div id="` + exampleid + `-tabs" exampleid="` + exampleid + `"  class="tabs tabsstyle">
		<ul>
			<li><a href="#` + exampleid + `-tabs-1">Turtle</a></li>
			<li><a href="#` + exampleid + `-tabs-2">JSON-LD</a></li>
		</ul>
		<div id="` + exampleid + `-tabs-1">
			<textarea class="validationquery" id="` + exampleid + `-tab1validationquery" name="query" cols="80" rows="16"></textarea>
			<button class="buttonsample copyturtletoclipboard" id="` + exampleid + `-tabs-1-button-1">Copy</button>
			<button class="buttonsample openTurtleInConverter" id="` + exampleid + `-tabs-1-button-2">Open in Converter</button>
	        <button class="buttonsample validateTurtle" id="` + exampleid + `-tabs-1-button-3">Validate</button>
			<select name="version" id="` + exampleid + `-tabs-1-version" class="chooseVersion">
    		</select>
			<a href="` + linkinfo + `"><img src="./html/info.jpg" class="infosample"></a>
		</div>
		<div id="` + exampleid + `-tabs-2">
			<textarea class="validationquery" id="` + exampleid + `-tab2validationquery" name="query" cols="80" rows="16"></textarea>
			<button class="buttonsample copyjsonldtoclipboard" id="` + exampleid + `-tabs-2-button-1">Copy</button>
			<button class="buttonsample openinplayground" id="` + exampleid + `-tabs-2-button-2">Open in Playground</button>
			<button class="buttonsample openJsonldInConverter" id="` + exampleid + `-tabs-2-button-3">Open in Converter</button>
	        <button class="buttonsample validateJsonld" id="` + exampleid + `-tabs-2-button-4">Validate</button>
			<select name="version" id="` + exampleid + `-tabs-2-version" class="chooseVersion">
    		</select>
			<a href="` + linkinfo + `"><img src="./html/info.jpg" class="infosample"></a>
		</div>
	</div>`;
	return structure;
}

function example_structure(exampleid){
	structure=`
	<div id="` + exampleid + `-tabs" exampleid="` + exampleid + `"  class="tabs tabsstyle">
		<ul>
			<li><a href="#` + exampleid + `-tabs-1">Turtle</a></li>
			<li><a href="#` + exampleid + `-tabs-2">JSON-LD</a></li>
		</ul>
		<div id="` + exampleid + `-tabs-1">
			<textarea class="validationquery" id="` + exampleid + `-tab1validationquery" name="query" cols="80" rows="16"></textarea>
			<button class="buttonsample copyturtletoclipboard" id="` + exampleid + `-tabs-1-button-1">Copy</button>
			<button class="buttonsample openTurtleInConverter" id="` + exampleid + `-tabs-1-button-2">Open in Converter</button>
	        <button class="buttonsample validateTurtle" id="` + exampleid + `-tabs-1-button-3">Validate</button>
		</div>
		<div id="` + exampleid + `-tabs-2">
			<textarea class="validationquery" id="` + exampleid + `-tab2validationquery" name="query" cols="80" rows="16"></textarea>
			<button class="buttonsample copyjsonldtoclipboard" id="` + exampleid + `-tabs-2-button-1">Copy</button>
			<button class="buttonsample openinplayground" id="` + exampleid + `-tabs-2-button-2">Open in Playground</button>
			<button class="buttonsample openJsonldInConverter" id="` + exampleid + `-tabs-2-button-3">Open in Converter</button>
	        <button class="buttonsample validateJsonld" id="` + exampleid + `-tabs-2-button-4">Validate</button>
		</div>
	</div>`;
	return structure;
}


//v1.2, v2.0, vTest, vCodelists, v2.0Base, v2.0Rec, v2.0Range, v2.0Base0, v2.0Full, v2.0Range0, v3.Codelists, v3.0Base0, v3.0Range0, v3.0Base, v3.0Range, v3.0Rec, v3.Full, v3.Full1, hvd.0base, hvd.0Range, hvd.UsageNotes, hvd.Full
/**
 * auxiliary function to get around the issue that indexOf() is not working with jquery.
 */

function myIndexOf(list, val) {
	var myindex  = -1;
	var i = 0;

	var elem = list[0];
        
	while ( i < list.length ) {
		if ( elem == val ) return i;
		i = i+1;
		elem = list[i];

	}
	
	return -1;

}


/**
 * Fills in the direct input area with some samples
 * @param {string} file - file containing the sample
 */
 function loadFile(editorinstance, file) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
            alert('Error when opening the file: ' + file + ' - ' + xmlhttp.status + ' ' + xmlhttp.statusText);
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            editorinstance.setValue(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
    return xmlhttp.responseText;
}

 function loadShape(file, dataGraph, format) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
            alert('Error when opening the file: ' + file + ' - ' + xmlhttp.status + ' ' + xmlhttp.statusText);
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			newUrl = "https://shacl-playground.zazuko.com/#page=0&shapesGraph=" + encodeURIComponent(xmlhttp.responseText) + "&shapesGraphFormat=text%2Fturtle&dataGraph=" + encodeURIComponent(dataGraph) + "&dataGraphFormat=" + format ;
			//console.log(newUrl);
            window.open(newUrl, '_blank');
        }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
    return xmlhttp.responseText;
}

var dialog = $("<div>", {
    id: "dialog-form",
    title: "Validation Result"
  }).dialog({
    autoOpen: false,
    height: 400,
    width: 770,
    modal: true,
	show: { effect: "blind", duration: 400 }
  });

//curl -X 'POST' \
//'https://www.itb.ec.europa.eu/shacl/dcat-ap/api/validate' \
//-H 'accept: application/ld+json' \
//-H 'Content-Type: application/json' \
//-d '{
//"contentToValidate": "{\n   \"@context\": [\n   \"https://semiceu.github.io/uri.semic.eu-generated/Core-Person-Vocabulary/releases/2.1.1/context/core-person-ap.jsonld\",\n   {\n     \"adms\": \"http://www.w3.org/ns/adms#\",\n     \"cv\": \"http://data.europa.eu/m8g/\",\n     \"ex\": \"http://example.com/\",\n     \"foaf\": \"http://xmlns.com/foaf/0.1/\",\n     \"locn\": \"http://www.w3.org/ns/locn#\",\n     \"person\": \"http://www.w3.org/ns/person#\",\n     \"rdfs\": \"http://www.w3.org/2000/01/rdf-schema#\",\n     \"skos\": \"http://www.w3.org/2004/02/skos/core#\",\n     \"xsd\": \"http://www.w3.org/2001/XMLSchema#\"\n   }],\n   \"@graph\": [\n     {\n      \"@id\": \"ex:person\",\n      \"@type\": \"Person\",\n      \"person:birthName\" : {\n        \"@language\": \"fr\",\n        \"@value\": \"René François Ghislain Magritte\"\n      },\n       \"cv:birthDate\" : {\n        \"@type\": \"xsd:date\",\n        \"@value\": \"1898-11-21\"\n      },\n      \"cv:deathDate\" : {\n        \"@type\": \"xsd:date\",\n        \"@value\": \"1967-08-15\"\n      },\n      \"cv:domicile\" : {\n        \"@id\": \"ex:address\"\n      },\n      \"foaf:familyName\" : {\n        \"@language\": \"fr\",\n        \"@value\": \"Magritte\"     \n      },\n      \"foaf:name\" : {\n        \"@language\": \"fr\",\n        \"@value\": \"René François Ghislain Magritte\"\n      },\n      \"foaf:givenName\" : {\n        \"@language\": \"fr\",\n        \"@value\": \"René François Ghislain\"\n      },\n      \"person:placeOfBirth\" : {\n        \"@id\": \"ex:location1\"\n      },\n      \"person:placeOfDeath\" : {\n        \"@id\": \"ex:location2\"\n      },\n      \"cv:sex\" : {\n        \"@id\" : \"http://publications.europa.eu/resource/authority/human-sex/MALE\"\n      }\n    },\n    {\n       \"@id\": \"ex:address\",\n       \"@type\": \"Address\",\n       \"locn:adminUnitL1\": {\n         \"@language\": \"fr\",\n         \"@value\": \"Belgique\"\n       },\n       \"locn:adminUnitL2\": {\n         \"@language\": \"fr\",\n         \"@value\": \"Région de Bruxelles-Capitale\"\n       },\n       \"locn:fullAddress\": {\n         \"@language\": \"fr\",\n         \"@value\": \"Rue Esseghem 135, 1090 Bruxelles, Belgique\"\n       },\n       \"locn:locatorDesignator\": \"135\",\n       \"locn:postCode\": \"1090\",\n       \"locn:postName\": {\n         \"@language\": \"fr\",\n         \"@value\": \"Bruxelles\"\n       },\n       \"locn:thoroughfare\": {\n         \"@language\": \"fr\",\n         \"@value\": \"Rue Esseghem\"\n       }\n     },\n     {\n       \"@id\": \"ex:location1\",\n       \"@type\": \"Location\",\n       \"rdfs:seeAlso\" : {\n        \"@type\": \"xsd:anyURI\",\n        \"@value\": \"https://www.geonames.org/2792567\"\n       },\n       \"locn:geographicName\" : {\n         \"@language\": \"fr\",\n         \"@value\": \"Lessines\"\n       }\n     },\n     {\n       \"@id\": \"ex:location2\",\n       \"@type\": \"Location\",\n       \"rdfs:seeAlso\" : {\n        \"@type\": \"xsd:anyURI\",\n        \"@value\": \"https://www.geonames.org/2800866\"\n       },\n       \"locn:geographicName\" : {\n         \"@language\": \"fr\",\n         \"@value\": \"Bruxelles\"\n       }\n     }\n  ]\n }\n    \n ",
//"contentSyntax": "application/ld+json",
//"validationType": "v3.Full"
//}'

function validate(model, version, content, format) {
	console.log(version);
	if(version === undefined) {
		console.log("This is undefined");
	}
	request = {
	"contentToValidate": content,
    "contentSyntax": format,
   "validationType": version,
   "reportSyntax": "text/turtle"
	};
	callITBandDisplay(request, model) ;
}

function validateShacl(model, rule, content, format) {
	request = {
	"contentToValidate": content,
    "contentSyntax": format,
   "externalRules" : [
	{
	   "ruleSet" : rule,
	   "ruleSyntax" : "text/turtle",
	   "embeddingMethod" : "URL"
	}
	],
   "reportSyntax": "text/turtle"
	};
	callITBandDisplay(request, model) ;
}

function callITBandDisplay(request, model) {
	var itbapi = "https://www.itb.ec.europa.eu/shacl/" + model + "/api/validate" ;	
	$.ajax({
		type: "POST",
		url: itbapi,
		data: JSON.stringify(request),// now data come in this function
		contentType: "application/json; charset=utf-8",
		crossDomain: true,
		dataType: "text",
		success: function (response, status, jqXHR) {
			//dialog.css("white-space","pre-wrap");
			htmltable="<table id='ValidationResult' class='display' style='width:100%; word-break: break-all; font-size:14px'><thead><tr><th>Node</th><th>Path</th><th>Message</th><th>Severity</th></tr></thead><tbody>";

			const parser = new N3.Parser();
			const store = new N3.Store();

			// Parse the Turtle into the store
			parser.parse(response, (error, quad, prefixes) => {
				if (quad) {
				store.addQuad(quad);
				} else {
				runQuery(); // Done parsing
				}
			});

			async function runQuery() {
				const query = `
				PREFIX sh: <http://www.w3.org/ns/shacl#>
				SELECT ?node ?path ?message ?severity
				WHERE {
					?result a sh:ValidationResult .
					?result sh:focusNode ?node .
					?result sh:resultPath ?path .
					?result sh:resultMessage ?message .
					?result sh:resultSeverity ?severity .
				}
				`;

				const comunicaEngine = new Comunica.QueryEngine();
				const result = await comunicaEngine.queryBindings(query, {
				sources: [store] // Using the N3 store as the RDF source
				});

				const bindings = await result.toArray();

				bindings.forEach(binding => {
					nodestring = binding.get('node').value ;
					pathstring = binding.get('path').value ;
					messagestring = binding.get('message').value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
					severitystring = binding.get('severity').value ;
					triplestring = "<tr><td>" + nodestring + "</td><td>" + pathstring + "</td><td>" + messagestring + "</td><td>" + severitystring + "</td></tr>" ;
					htmltable += triplestring;
					//console.log("Message:", binding.get('message').value);
					//console.log("Predicate:", binding.get('p').value);
					//console.log("Object:", binding.get('o').value);
				});

				htmltable += "</tbody></table>"

				reg = /sh:conforms\s+true/g
				if(response.search(reg) >=0 ) {
					responseOk = "Congratulations, no errors were found"
					dialog.html(responseOk);
					dialog.dialog("open");
					dialog.closest(".ui-dialog").children(".ui-dialog-titlebar").css({"background": "darkgreen", "background-image": "linear-gradient(to bottom,#6a996a,#006400)","color":"white"});
				} else {
					dialog.html(htmltable);
					
					dialog.dialog("open");
					$('#ValidationResult').DataTable( {
						searching: false,
						layout: {
							topStart: {
								buttons: [
									'copy', 
									'csv', 
									'excel',
									{
										extend: 'pdfHtml5',
										orientation: 'landscape'
									}, 
									'print',
									{
										text: 'Copy Turtle',
										action: function (e, dt, node, config) {
											navigator.clipboard.writeText(response);
										},
										className: 'copyTurtle'
									}
								]
							}
						},
						"createdRow" : function( row, data, dataIndex) {
							if(data[3] == "http://www.w3.org/ns/shacl#Violation") {
								$(row).css("background-color", "#f2dede");
							} else {
								$(row).css("background-color", "#fcf8e3");
							}
						}
					});
					dialog.closest(".ui-dialog").children(".ui-dialog-titlebar").css({"background": "red", "background-image": "linear-gradient(to bottom,#ac6464,#b31c1c)","color":"white"});
				}
			}
			
		},

		error: function (jqXHR, exception) {
		 // error handler
		var msg = '';
		if (jqXHR.status === 0) {
			msg = 'Not connect.\n Verify Network.';
		} else if (jqXHR.status == 404) {
			msg = 'Requested page not found. [404]';
		} else if (jqXHR.status == 500) {
			msg = 'Internal Server Error [500].';
		} else if (exception === 'parsererror') {
			msg = 'Requested JSON parse failed.';
		} else if (exception === 'timeout') {
			msg = 'Time out error.';
		} else if (exception === 'abort') {
			msg = 'Ajax request aborted.';
		} else {
			msg = 'Uncaught Error.\n';
		}
		
		alert('It was not possible to validate, msg:' + msg + ' error:' + jqXHR.responseText);
		}
		});
}

function createTurtleEditorFrom(selector) {
  return CodeMirror.fromTextArea(selector, {
    mode: "turtle",
    lineNumbers: true
  });
}

function createJSONLDEditorFrom(selector) {
  return CodeMirror.fromTextArea(selector, {
    mode: "application/ld+json",
    lineNumbers: true
  });
}


$(document).ready(function () {

	
	
	var examples = [];
	var editors = [];

        var examples_id = ".examples";
	var examples_class = ".h3";
	//var folder = "./html/examples/";
	//var model = "dcat-ap" ;
	//var shaclfilepath = "shacl/dcat-ap-SHACL.ttl" ;
	//var linkinfo = "https://github.com/ISAITB/validator-resources-dcat-ap?tab=readme-ov-file#configured-options" ;
	/* var version_list = [
      {
		"type": "v3.0Base0",
		"description": "DCAT-AP 3.0.0 Base Zero"
	  },
	  {
		"type": "v3.0Range0",
		"description": "DCAT-AP 3.0.0 Ranges Zero"
	  },
	  {
		"type": "v3.0Base",
		"description": "DCAT-AP 3.0.0 Base"
	  },
	  {
		"type": "v3.0Range",
		"description": "DCAT-AP 3.0.0 Ranges"
	  },
	  {
		"type": "v3.0Rec",
		"description": "DCAT-AP 3.0.0 Recommendations"
	  },
	  {
		"type": "v3.Full",
		"description": "DCAT-AP 3.0.0 Full"
	  },
	  {
		"type": "v3.Full1",
		"description": "DCAT-AP 3.0.0 Full (with constraints)"
	  }
	] ;
	*/
	//var version_list = [] ;
	var $examples = $(examples_id);

//	$examples.children(examples_class).each(function(index){
	$examples.each(function(index){
		exampleid = this.id;
		examples.push(exampleid); 
		var text = "" ;
		if(model == "zazuko" || model == "any") {
			text = example_structure(exampleid);	
		}
		else if(version_list.length != 0 ) {
			console.log(version_list) ;
			text = example_structure_itb_instance(exampleid, linkinfo);
		}
		$(this).after(text);

		var obj = {CM0: createTurtleEditorFrom(document.getElementById(exampleid + "-tab1validationquery")), CM1: createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery"))};
		editors[index] = obj;
		//editors[index].push({CM: createTurtleEditorFrom(document.getElementById(exampleid + "-tab1validationquery")}, CM2: createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery")});
		//editors[index].push({CM: createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery")});
		//editors[index][0] = createTurtleEditorFrom(document.getElementById(exampleid + "-tab1validationquery"));
		//editors[index][1] = createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery"));

		example_tab = $("#" + exampleid + "-tabs") ;

		if(version_list.length != 0 && (model != "any" && model != "zazuko")) {
			select_list = example_tab.find('select');
			console.log("select_list length:" + select_list.length)
			$.each(select_list, function(i, select_item) {
				version_list.forEach(function (item, index) {
					$(select_item).append($('<option></option>').val(item.type).html(item.description) );
				})
			})
		}

		example_tab.tabs();

		$("#" + exampleid + "-tabs a").on('click', function(e) {
			$('.CodeMirror').each(function(i, el){
				el.CodeMirror.refresh();
			});
		});

                path_to_file = folder + exampleid;
		loadFile(editors[index].CM0, path_to_file + ".ttl");
		loadFile(editors[index].CM1, path_to_file + ".jsonld");
		
	});

	$("button.copyturtletoclipboard").on({
		"click": function() {
			var exampleid = $(this).parent().parent().attr("exampleid");
			var indexValues = $examples.map(function() { return this.id; }) ;
			var index = myIndexOf(indexValues, exampleid);
			texttocopy = editors[index].CM0.getValue()
			navigator.clipboard.writeText(texttocopy);
			$(this).tooltip({ items: "#" + this.id, content: "Copied !"});
			$(this).tooltip("open");
		},
		"mouseout": function() {
			$(this).tooltip("disable");
		}
	});
	$("button.copyjsonldtoclipboard").on({
		"click": function() {
			var exampleid = $(this).parent().parent().attr("exampleid");
			var indexValues = $examples.map(function() { return this.id; }) ;
			var index = myIndexOf(indexValues, exampleid);
			texttocopy = editors[index].CM1.getValue();
			navigator.clipboard.writeText(texttocopy);
			$(this).tooltip({ items: "#" + this.id, content: "Copied !"});
			$(this).tooltip("open");
		},
		"mouseout": function() {
			$(this).tooltip("disable");
		}
	});
	$("button.openinplayground").on('click', function(e) {
		var exampleid = $(this).parent().parent().attr("exampleid");
		var indexValues = $examples.map(function() { return this.id; }) ;
		var index = myIndexOf(indexValues, exampleid);

		newUrl = "https://json-ld.org/playground/#startTab=tab-expand&json-ld=" + encodeURIComponent(editors[index].CM1.getValue()); 
		window.open(newUrl, '_blank');
		return false;
	});
	$("button.openTurtleInConverter").on('click', function(e) {
		var exampleid = $(this).parent().parent().attr("exampleid");
		var indexValues = $examples.map(function() { return this.id; }) ;
		var index = myIndexOf(indexValues, exampleid);

		newUrl = "https://converter.zazuko.com/#value=" + encodeURIComponent(editors[index].CM0.getValue()) + "&format=text%2Fturtle"; 
		window.open(newUrl, '_blank');
		return false;
	});
	$("button.openJsonldInConverter").on('click', function(e) {
		var exampleid = $(this).parent().parent().attr("exampleid");
		var indexValues = $examples.map(function() { return this.id; }) ;
		var index = myIndexOf(indexValues, exampleid);

		newUrl = "https://converter.zazuko.com/#value=" + encodeURIComponent(editors[index].CM1.getValue()) + "&format=application%2Fld%2Bjson";
		window.open(newUrl, '_blank');
		return false;
	});
	$("button.validateTurtle").on('click', function(e) {
		var exampleid = $(this).parent().parent().attr("exampleid");
		var indexValues = $examples.map(function() { return this.id; }) ;
		var index = myIndexOf(indexValues, exampleid);
		
		if(model == "any") {
			currentlocation = window.location.protocol + '//' + window.location.hostname + window.location.pathname ;
			fullUrl = currentlocation + shaclfilepath ;
			console.log("full location:" + fullUrl) ;
			validateShacl(model, fullUrl, editors[index].CM0.getValue(), "text/turtle");
		}
		else if (model == "zazuko") {
			loadShape(shaclfilepath, editors[index].CM0.getValue(), "text%2Fturtle");
		}
		else {
			var versionSelected = $(this).siblings('.chooseVersion').val();
			validate(model, versionSelected, editors[index].CM0.getValue(), "text/turtle");
		}
		return false;
	});
	$("button.validateJsonld").on('click', function(e) {
		var exampleid = $(this).parent().parent().attr("exampleid");
		var indexValues = $examples.map(function() { return this.id; }) ;
		var index = myIndexOf(indexValues, exampleid);
		//var shapes = loadShape(shaclfilepath, editors[index].CM1.getValue(), "application%2Fld%2Bjson");
		if(model == "any") {
			currentlocation = window.location.protocol + '//' + window.location.hostname + window.location.pathname ;
			fullUrl = currentlocation + shaclfilepath ;
			console.log("full location:" + fullUrl) ;
			validateShacl(model, fullUrl, editors[index].CM1.getValue(), "application/ld+json");
		}
		else if (model == "zazuko") {
			loadShape(shaclfilepath, editors[index].CM1.getValue(), "application%2Fld%2Bjson");
		}
		else {
			var versionSelected = $(this).siblings('.chooseVersion').val();
			validate(model, versionSelected,  editors[index].CM1.getValue(), "application/ld+json");
		}
		return false;
	});
	$("div.CodeMirror pre").on('click', function(e) {
		var et = $(e.target);
		if(et.hasClass('cm-url'))  {
			newUrl = $(this).text();
			window.open(encodeURI(newUrl), '_blank');
			return false;
		}
	});
});
