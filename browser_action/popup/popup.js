(function(){
	'use strict';

	console.log("hello from popup.js file!");

	// `getBackgroundPage()` let us call JS function inside `background.js` file
	var background_page = chrome.extension.getBackgroundPage();

	document.querySelector('button').addEventListener('click', function () {
		background_page.handleButtonClick();
	});

	// get locale string
	var popup_title = chrome.i18n.getMessage("popupTitle");
	// inject to HTML view
	document.getElementsByTagName('h1')[0].textContent = popup_title;
	
}());

$(function(){
	console.log("jQuery is ready!");

	$.get( "http://numbersapi.com/random", function(data) {
		console.log(data);
	});
});