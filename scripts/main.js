document.addEventListener("DOMContentLoaded", function () {
    var showFlag = document.getElementById("flag_checkbox")
    if (showFlag) {
        showFlag.addEventListener("click", () => {
            if (showFlag.checked == true) {
                chrome.tabs.executeScript({
                    file: "scripts/show_flag.js"
                })
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/remove_flag.js"
                })
            }
        })
    }
    var cfont = document.getElementById("font_checkbox")
    if (cfont) {
        cfont.addEventListener("click", () => {
            if (cfont.checked == true) {
                chrome.tabs.executeScript({
                    file: "scripts/change_font.js"
                })
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/sameFont.js"
                })
            }
        })
    }
    var ccolor = document.getElementById("size_checkbox")
    if (ccolor) {
        ccolor.addEventListener("click", () => {
            if (ccolor.checked == true) {
                chrome.tabs.executeScript({
                    file: "scripts/sameSize.js"
                })
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/sameSize.js"
                })
            }
        })
    }
})