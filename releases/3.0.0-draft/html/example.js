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
    width: 700,
    modal: true,
	show: { effect: "blind", duration: 400 }
  });

function validate(model, version, content, format) {
	request = {
	"contentToValidate": btoa(content),
    "contentSyntax": format,
   "embeddingMethod": "BASE64",
   "validationType": version,
   "reportSyntax": "text/turtle"
	};
	var itbapi = "https://www.itb.ec.europa.eu/shacl/" + model + "/api/validate" ;
	$.ajax({
		type: "POST",
		url: itbapi,
		data: JSON.stringify(request),// now data come in this function
		contentType: "application/json; charset=utf-8",
		crossDomain: true,
		dataType: "text",
		success: function (response, status, jqXHR) {
			dialog.css("white-space","pre-wrap");
			dialog.text(response);
		    dialog.dialog("open");
			reg = /sh:conforms\s+true/g
			if(response.search(reg) >=0 )
				dialog.closest(".ui-dialog").children(".ui-dialog-titlebar").css({"background": "darkgreen", "background-image": "linear-gradient(to bottom,#6a996a,#006400)","color":"white"});
			else
				dialog.closest(".ui-dialog").children(".ui-dialog-titlebar").css({"background": "red", "background-image": "linear-gradient(to bottom,#ac6464,#b31c1c)","color":"white"});
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
	var folder = "./html/examples/";
	var $examples = $(examples_id);

//	$examples.children(examples_class).each(function(index){
	$examples.each(function(index){
		exampleid = this.id;
		examples.push(exampleid); 
		var text = example_structure(exampleid);
		$(this).after(text);

		var obj = {CM0: createTurtleEditorFrom(document.getElementById(exampleid + "-tab1validationquery")), CM1: createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery"))};
		editors[index] = obj;
		//editors[index].push({CM: createTurtleEditorFrom(document.getElementById(exampleid + "-tab1validationquery")}, CM2: createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery")});
		//editors[index].push({CM: createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery")});
		//editors[index][0] = createTurtleEditorFrom(document.getElementById(exampleid + "-tab1validationquery"));
		//editors[index][1] = createJSONLDEditorFrom(document.getElementById(exampleid + "-tab2validationquery"));

		$("#" + exampleid + "-tabs").tabs();

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
		var shapes = validate("dcat-ap", "v3.0Base0", editors[index].CM0.getValue(), "text/turtle");
		return false;
	});
	$("button.validateJsonld").on('click', function(e) {
		var exampleid = $(this).parent().parent().attr("exampleid");
		var indexValues = $examples.map(function() { return this.id; }) ;
		var index = myIndexOf(indexValues, exampleid);
		var shaclfilepath = "./html/shacl/shapes.ttl" ;
		//var shapes = loadShape(shaclfilepath, editors[index].CM1.getValue(), "application%2Fld%2Bjson");
		var shapes = validate("dcat-ap", "v3.0Base0", editors[index].CM1.getValue(), "application/ld+json");
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
