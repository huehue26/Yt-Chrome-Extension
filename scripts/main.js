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

    var theater = document.getElementById("theater_checkbox")
    if (theater) {
        theater.addEventListener("click", () => {
            if (theater.checked == true && window.location.href.length >= 20) {
                chrome.tabs.executeScript({
                    file: "scripts/theaterEffectOn.js"
                })
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/theaterEffectOff.js"
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
                chrome.storage.sync.set({ 'font_size': document.getElementById('font-size').value })
                chrome.tabs.executeScript({
                    file: "scripts/change_size.js"
                })
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/sameSize.js"
                })
            }
        })
    }

})