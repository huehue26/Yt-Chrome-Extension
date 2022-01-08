// selecting video from the page
var links = document.querySelectorAll('div#byline-container')
for (var i = 0; i < links.length; i++) {
    var images = links[i].getElementsByTagName('img')
    var l = images.length;
    for (var j = 0; j < l; j++) {
        images[0].parentNode.removeChild(images[0]);
    }
}