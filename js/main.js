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
            if (theater.checked == true) {
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

    var concentration = document.getElementById("concentration_checkbox")
    if (concentration) {
        concentration.addEventListener("click", () => {
            if (concentration.checked == true) {
                chrome.tabs.executeScript({
                    file: "scripts/concEffectOn.js"
                })
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/concEffectOff.js"
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
                let x = document.getElementById('font-size').value;
                if (x < 30) {
                    chrome.storage.sync.set({ 'font_size': x })
                    chrome.tabs.executeScript({
                        file: "scripts/change_size.js"
                    })
                }
                else {
                    alert("This value is not user-experience rich! ")
                }
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/sameSize.js"
                })
            }
        })
    }

})