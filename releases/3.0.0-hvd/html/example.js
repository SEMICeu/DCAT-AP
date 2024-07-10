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
		</div>
		<div id="` + exampleid + `-tabs-2">
			<textarea class="validationquery" id="` + exampleid + `-tab2validationquery" name="query" cols="80" rows="16"></textarea>
			<button class="buttonsample copyjsonldtoclipboard" id="` + exampleid + `-tabs-2-button-1">Copy</button>
			<button class="buttonsample openinplayground" id="` + exampleid + `-tabs-2-button-2">Open in Playground</button>
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

		newUrl = "https://json-ld.org/playground/#startTab=tab-expand&json-ld=" + editors[index].CM1.getValue(); 
		window.open(encodeURI(newUrl), '_blank');
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
