var CONTENT_SCRIPT = {};
CONTENT_SCRIPT.timer = "";

CONTENT_SCRIPT.init = function() {
    chrome.storage.sync.get('availableFlag', function(item) {
        if (item.availableFlag) {
            CONTENT_SCRIPT.autoScroll();
        }
    });
};

CONTENT_SCRIPT.autoScroll = function() {
    CONTENT_SCRIPT.timer = setInterval(function() {
        let chatsArea = document.querySelector(".chats-area");
        chatsArea.scrollTop = chatsArea.scrollHeight;
    }, 300);
};


window.addEventListener("load", CONTENT_SCRIPT.init);