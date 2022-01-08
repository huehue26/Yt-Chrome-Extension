var size_

chrome.storage.sync.get("font_size", function (obj) {
    size_ = obj.font_size
    console.log(obj.font_size)
});

console.log(size_)
if (size_ > 8 || size < 25) {
    document.querySelector("html").style.fontSize = size_ + "px"
} else {
    alert("Inappropriate Size")
}