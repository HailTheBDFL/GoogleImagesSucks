var inputUrl = window.location.href;
var query = "";
var queryPos = inputUrl.search("q=")

var queryNotFound = true;
for (; queryNotFound && queryPos < inputUrl.length; queryPos++) {
	if (inputUrl[queryPos] == "&") {
		queryNotFound = false;
	}
	else {
		query += inputUrl[queryPos];
	}
}

var DDG_url = "https://duckduckgo.com/?t=hg&iax=images&ia=images&";
var outputUrl = DDG_url + query;

var tagsToSearch = document.getElementsByClassName("qs");
var searchText = "Images";
var found;

for (var i = 0; i < tagsToSearch.length; i++) {
	if (tagsToSearch[i].textContent == searchText) {
		found = tagsToSearch[i];
		break;
	}
}

found.setAttribute("href", outputUrl);