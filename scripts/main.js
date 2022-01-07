document.addEventListener("DOMContentLoaded", function () {
    var showFlag = document.getElementById("flag_checkbox")
    if (showFlag) {
        showFlag.addEventListener("click", () => {
            if (showFlag.checked == true) {
                chrome.tabs.executeScript({
                    file: "scripts/show_flag.js"
                })
                showsFlag()
            } else {
                chrome.tabs.executeScript({
                    file: "scripts/remove_flag.js"
                })
            }
        })
    }
})