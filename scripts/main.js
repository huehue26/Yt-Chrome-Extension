document.addEventListener("DOMContentLoaded", function () {
    var showFlag = document.getElementById("flag_checkbox")
    if (showFlag) {
        showFlag.addEventListener("click", () => {
            if (showFlag.checked == true) {
                setInterval(() => {
                    removeFlag()
                    displayFlag()
                }, 10000);
            } else {
                removeFlag()
            }
        })
    }
})

function displayFlag() {
    chrome.tabs.executeScript({
        file: "scripts/show_flag.js"
    })
}

function removeFlag() {
    chrome.tabs.executeScript({
        file: "scripts/remove_flag.js"
    })
}