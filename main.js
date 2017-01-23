document.addEventListener('DOMContentLoaded', function () {
	var mainStylesheetLink = document.querySelector('[href="main.css"]');
	var mainStylesheet = mainStylesheetLink.sheet;
	var link = document.querySelector('[href="newStylesheet.css"]');
	var newStylesheet = link.sheet;

	console.log(mainStylesheet.cssRules);
	newStylesheet.insertRule('.container { background-color: #eee; }', newStylesheet.cssRules.length);
	newStylesheet.insertRule('.container { color: #ea1; }', newStylesheet.cssRules.length);
	newStylesheet.insertRule('.container { font-size: 20; }', newStylesheet.cssRules.length);
	newStylesheet.insertRule('.container { border-radius: 5px; }', newStylesheet.cssRules.length);
	newStylesheet.insertRule('.container { box-shadow: 1px 1px 5px black }', newStylesheet.cssRules.length);

});