/*
all this information can be seen after we open new tab inside the browser console
*/


// get popular sites
chrome.topSites.get(function(sites){
	console.log(sites);
});


// get recent bookmarked sites
chrome.bookmarks.getRecent(10, function(bookmarks){
	// ------------------- ^^ how many we want?
	console.log(bookmarks);
});


// get recent history (closed tabs)
// give empty string to `text` to search all history regardless the history text
chrome.history.search({text: ''}, function(results){
	console.log(results);
});