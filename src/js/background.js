chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg == "say hi") {
            console.log("hi")
        }
    }
);
