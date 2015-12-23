chrome.runtime.onInstalled.addListener(function(){
	
	chrome.declarativeContent.onPageChanged.removeRules(['googleRule'], function(){
		chrome.declarativeContent.onPageChanged.addRules([{
			id: 'googleRule',
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: { urlContains: 'google.com' }
				})
			],
			actions: [
				new chrome.declarativeContent.ShowPageAction()
			]
		}]);
	});

});