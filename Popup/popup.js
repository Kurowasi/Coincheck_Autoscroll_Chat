var POPUP = {};
POPUP.availableElm = "";

POPUP.init = function() {
    POPUP.availableElm = document.querySelector("input[name=available");
    POPUP.availableElm.addEventListener("click", POPUP.clickAvailableCheckbox);

    chrome.storage.sync.get('availableFlag', function(item) {
        if (item.availableFlag) {
            POPUP.availableElm.checked = true;
        }
    });
};

POPUP.clickAvailableCheckbox = function() {
    if (POPUP.availableElm.checked) {
        chrome.storage.sync.set({
            'availableFlag': true
        }, function() {
            console.log('Settings saved');
        });
    } else {
        chrome.storage.sync.remove('availableFlag', function() {
            console.log('Remove AvailableFlag');
        });
    }
};

window.addEventListener("load", POPUP.init);