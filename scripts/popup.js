$(document).ready(function() {
    'use strict';
    var cont = 0;
    chrome.storage.sync.get(function(data) {
        console.log(data);
        if (data.perfilusuario === 1) {
            $("#pu").html('<i class="material-icons">create</i> Alterar Perfil de Usuário');
            $("#deletePU").show();
            $("#regras").hide();
            $("#animacaoPI").show();
            setTimeout(function() {
                $("#animacaoPI").fadeOut();
            }, 1500);
            $.getJSON("http://slifes.dc.ufscar.br/uiflex/rules.json", function(json) {
                console.log(json);
                var r1 = false;
                var r2 = false;
                var r3 = false;
                for (var i in json) {
                    if (json[i].conditions[0].condition.predicate == "AbilityToHear" && json[i].conditions[0].condition.object == "no" && data.audicao == 2) {
                        var domEl = document.getElementById("r1");
                        var mdlComp = new MaterialSwitch(domEl);
                        if (data.mailson == 1) {
                            mdlComp.on();
                        } else {
                            mdlComp.off();
                        }
                        r1 = true;
                        cont++;
                    }
                    if (json[i].conditions[0].condition.predicate == "AbilityToSee" && json[i].conditions[0].condition.object == "low" && data.visao2 == 2) {
                        var domE2 = document.getElementById("r2");
                        var mdlComp2 = new MaterialSwitch(domE2);
                        if (data.mailson2 == 1) {
                            mdlComp2.on();
                        } else {
                            mdlComp2.off();
                        }
                        r2 = true;
                        cont++;
                    }
                    if (json[i].conditions[0].condition.predicate == "AbilityToDifferentiateColors" && json[i].conditions[0].condition.object == "no" && data.daltonismo == 2) {
                        var domE3 = document.getElementById("r3");
                        var mdlComp3 = new MaterialSwitch(domE3);
                        if (data.mailson3 == 1) {
                            mdlComp3.on();
                        } else {
                            mdlComp3.off();
                        }
                        r3 = true;
                        cont++;
                    }
                }
                if (r1 == false) {
                    $("#r1").hide();
                }
                if (r2 == false) {
                    $("#r2").hide();
                }
                if (r3 == false) {
                    $("#r3").hide();
                }
                chrome.storage.sync.set({
                    'quant': cont
                });
                chrome.browserAction.setBadgeText({
                    text: '' + cont + ''
                });
            }).fail(function() {
                $("#regras").hide();
                $("#perfilInteracao").append("<p>Erro ao carregar regras de design.</p>");
            });
            setTimeout(function() {
                $("#regras").fadeIn();
            }, 2000);
        } else {
            $("#deletePU").hide();
            $("#animacaoPI").hide();
            $("#regras").hide();
        }
    });
    $('#m1').click(function() {
        chrome.tabs.executeScript({
            file: 'inject.js'
        });
    });
    $('#baixarPI').click(function() {
        var mailsonaa = {
            a: 1,
            b: 2,
            c: 3
        };
        var jsn = JSON.stringify(mailsonaa);
        var a = $("<a style='display: none;'/>");
        var url = window.URL.createObjectURL(new Blob([jsn], {
            type: "application/json"
        }));
        a.attr("href", url);
        a.attr("download", "pi.json");
        $("body").append(a);
        a[0].click();
        window.URL.revokeObjectURL(url);
        a.remove();
    });
    //var switch_3 = document.getElementById("switch_3");
    $('#switch_1').change(function() {
        chrome.storage.sync.set({
            'mailson': $('#switch_1').is(':checked') ? 1 : 2
        });
        chrome.storage.sync.get(function(data) {
            console.log(data);
        });
    });
    $('#switch_2').change(function() {
        chrome.storage.sync.set({
            'mailson2': $('#switch_2').is(':checked') ? 1 : 2
        });
        chrome.storage.sync.get(function(data) {
            console.log(data);
        });
    });
    $('#switch_3').change(function() {
        chrome.storage.sync.set({
            'mailson3': $('#switch_3').is(':checked') ? 1 : 2
        });
        chrome.storage.sync.get(function(data) {
            console.log(data);
        });
    });


});

$('#excluirSim').click(function() {
    chrome.storage.sync.set({
        'perfilusuario': 2
    });
    window.location.href = "popup.html";
});




//exibir dialog exclusao
var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#deletePU');
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
showDialogButton.addEventListener('click', function() {
    dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});

//animação gerando pi
function gerarpi() {
    // $("#animacaoPI").show();
    setTimeout('$("#animacaoPI").hide();', 2000);
}
