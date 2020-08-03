var default_site = "https://en.wikipedia.org/wiki/List_of_lists_of_lists";

function searching() {
    console.log(urelle);
    if (urelle !=  default_site) {
        return browser.history.search({
            text: urelle,
            maxResults: 1
        })
    }
}

if (window.location.href != default_site) {
    searching.then(window.location.href = default_site,);
}