'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
    console.log('previousVersion', details.previousVersion);
});

function updateSetting() {
    chrome.storage.local.get(function(data) {
        return data.quant;
    });
    return 6;
}

//chrome.extension.getBackgroundPage().updateSetting();
//chrome.browserAction.setBadgeText({
//    text: '' + updateSetting() + ''
//});
