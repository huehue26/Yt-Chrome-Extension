chrome.runtime.onMessage.addListener(function (req, sender, sndres) {
    if (req.page == "youtube") {
        chrome.tabs.query({ action: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id)
        })
    };
})