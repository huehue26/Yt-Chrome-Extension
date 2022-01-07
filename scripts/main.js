document.addEventListener("DOMContentLoaded", function () {
    var underlineButton = document.getElementById("flag_checkbox")
    if (underlineButton) {
        underlineButton.addEventListener("click", () => {
            if (underlineButton.checked == true) {
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
})