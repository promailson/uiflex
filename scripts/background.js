'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

function updateSetting() {

    chrome.storage.local.get(function (data) {
        return data.quant;
    });
    return 6;
}

//chrome.extension.getBackgroundPage().updateSetting();
//chrome.browserAction.setBadgeText({
//    text: '' + updateSetting() + ''
//});


var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

var oitanteAtual;
setInterval(function () {
    getJSON('https://lifes.dc.ufscar.br/uiflex/oitanteAtivo.json',
        function (err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                if (oitanteAtual != data[0].ativo) {
                    chrome.storage.sync.set({
                        'oitante': data[0].ativo
                    });
                    oitanteAtual = data[0].ativo;
                }
            }
        });
}, 1000);
