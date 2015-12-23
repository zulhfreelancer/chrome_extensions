function handleButtonClick() {

	// open new tab
	chrome.tabs.create({}, function(new_tab_info){
		console.log(new_tab_info);
		console.log(new_tab_info.incognito);
		console.log(new_tab_info.url); // need permissions inside manifest.json
	});

}

chrome.runtime.onMessage.addListener(function(message, sender_information, response){
	console.log(message, sender_information);

	// we'll return this reponse back to content.js file
	response({
		status: "Success!"
	});
});

// listen for h2s data from content.js
chrome.runtime.onConnect.addListener(function(messagePort){
	messagePort.onMessage.addListener(function(message){
		console.log(message.h2);
		
		// return a status so that messagePort callback 
		// can know the status the posted messages
		messagePort.postMessage({
			status: "Received!"
		});
	});
});