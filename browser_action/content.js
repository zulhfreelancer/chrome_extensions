(function(){
	'use strict';

	console.log("hello from content script file!");

	// grab the first h1 of visited page
	var h1 = document.getElementsByTagName('h1')[0];

	if (h1) {

		// send to background.js file
		chrome.runtime.sendMessage({
			firstHeading: h1.textContent
		},
		// callback after we send to background.js file
		function(response){
			console.log(response.status);
		});

	}

	// send data from content script to background.js
	var messagePort = chrome.runtime.connect({
		name: "headings"
	});

	// grab all h2 inside the page
	var h2s = Array.prototype.slice.call(document.getElementsByTagName('h2'));

	// for each h2, send the text of the h2
	h2s.forEach(function(h2){
		messagePort.postMessage({
			h2: h2.textContent
		});
	});

	// callback after we send the h2 to the background.js
	messagePort.onMessage.addListener(function(message){
		console.log(message.status);
	});
	
}());