var links = document.getElementsByTagName("a")

for (let i = 0; i < links.length; i++) {
    if (links[i].style.textDecoration === "underline") {
        links[i].style.textDecoration = "none"
    }
}