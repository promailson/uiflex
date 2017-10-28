$(document).ready(function() {
    'use strict';
    chrome.storage.sync.get(function(data) {
        console.log(data);
        if (data.locomocao === '1') {
            var domEl = document.getElementById("Teste1");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();

        } else {
            var domEl = document.getElementById("Teste2");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        }
        if (data.audicao === '1') {
            var domEl = document.getElementById("A1");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        } else {
            var domEl = document.getElementById("A2");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        }
        if (data.fala === '1') {
            var domEl = document.getElementById("F1");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        } else {
            var domEl = document.getElementById("F2");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        }
        if (data.daltonismo === '1') {
            var domEl = document.getElementById("D1");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        } else {
            var domEl = document.getElementById("D2");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        }
        if (data.daltonismo2 === '1') {
            var domEl = document.getElementById("D3");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        } else {
            var domEl = document.getElementById("D4");
            var mdlComp = new MaterialRadio(domEl);
            mdlComp.check();
        }
        if (data.visao1 === 1) {
            var domEl = document.getElementById("V1");
            var mdlComp = new MaterialCheckbox(domEl);
            mdlComp.check();
        }
        if (data.visao2 === 1) {
            var domEl = document.getElementById("V2");
            var mdlComp = new MaterialCheckbox(domEl);
            mdlComp.check();
        }
        if (data.visao3 === 1) {
            var domEl = document.getElementById("V3");
            var mdlComp = new MaterialCheckbox(domEl);
            mdlComp.check();
        }
    });

});
audio = document.getElementById('audio');

$(".som").mouseover(function() {
    audio.play();
});
$(".som").mouseout(function() {
    audio.pause();
});
$('#btnS1').click(function() {
    'use strict';
    chrome.storage.sync.set({
        'locomocao': $('input[name="locomocao"]:checked').val()
    });
    audio.play();
});

$('#btnS2').click(function() {
    'use strict';
    chrome.storage.sync.set({
        'audicao': $('input[name="audicao"]:checked').val()
    });
    chrome.storage.sync.get(function(data) {
        if (data.audicao == 1) {
            chrome.storage.sync.set({
                'mailson': 2
            });
        }
    });
    audio.pause();
});

$('#btnS3').click(function() {
    'use strict';
    chrome.storage.sync.set({
        'fala': $('input[name="fala"]:checked').val()
    });
});
$('#btnS4').click(function() {
    'use strict';
    var vi = $('#visao-1').is(':checked') ? 1 : 2;
    chrome.storage.sync.set({
        'visao1': vi
    });
    chrome.storage.sync.set({
        'visao2': $('#visao-2').is(':checked') ? 1 : 2
    });
    chrome.storage.sync.set({
        'visao3': $('#visao-3').is(':checked') ? 1 : 2
    });    
});
$('#btnS5').click(function() {
    'use strict';
    chrome.storage.sync.set({
        'daltonismo': $('input[name="daltonismo"]:checked').val()
    });
    chrome.storage.sync.set({
        'daltonismo2': $('input[name="daltonismo2"]:checked').val()
    });    
    chrome.storage.sync.set({
        'perfilusuario': 1
    });
    chrome.storage.sync.set({
        'gerou': 0
    });
    chrome.storage.sync.get(function(data) {
        $.getJSON("http://slifes.dc.ufscar.br/uiflex/rules.json", function(json) {
            console.log(json);
            //alert(json[0].context.user.predicate);
            for (var i in json) {
                if (json[i].id == "rule12" && json[i].context.user.predicate == "AbilityToHear" && json[i].context.user.object == "no" && data.audicao == 2) {
                    chrome.storage.sync.set({
                        'rule12': '1'
                    });
                }
                if (json[i].id == "rule13" && json[i].context.user.predicate == "AbilityToSee" && json[i].context.user.object == "low" && (data.visao2 == 2) && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule13': '1'
                    });
                }
                if (json[i].id == "rule8" && json[i].context.user.predicate == "AbilityToDifferentiateColors" && json[i].context.user.object == "no" && (data.daltonismo == 2 || data.daltonismo2 == 2) && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule8': '1'
                    });
                }
                if (json[i].id == "rule5" && json[i].context.user.predicate == "AbilityToDifferentiateColors" && json[i].context.user.object == "no" && (data.daltonismo == 2 || data.daltonismo2 == 2) && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule5': '2'
                    });
                }
                if (json[i].id == "rule6" && json[i].context.user.predicate == "AbilityToSee" && json[i].context.user.object == "no" && data.visao1 == 2 && data.visao2 == 2 && data.visao3 == 2) {
                    chrome.storage.sync.set({
                        'rule6': '1'
                    });
                }
                if (json[i].id == "rule9"&& (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule9': '1'
                    });
                }
                if (json[i].id == "rule10" && json[i].context.user.predicate == "AbilityToSee" && json[i].context.user.object == "low" && (data.visao1 == 2 || data.visao2 == 2 || data.visao3 == 2) && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule10': '1'
                    });
                }
                if (json[i].id == "rule11" && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule11': '1'
                    });
                }
                if (json[i].id == "rule14" && json[i].context.user.predicate == "AbilityToSee" && json[i].context.user.object == "medium" && (data.visao3 == 2) && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule14': '1'
                    });
                }
                if (json[i].id == "rule33" && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule33': '1'
                    });
                }
                if (json[i].id == "rule34" && json[i].context.user.predicate == "AbilityToSee" && json[i].context.user.object == "no" && (data.visao1 == 2 && data.visao2 == 2 && data.visao3 == 2)) {
                    chrome.storage.sync.set({
                        'rule34': '1'
                    });
                }
                if (json[i].id == "rule35" && json[i].context.user.predicate == "AbilityToDifferentiateColors" && json[i].context.user.object == "no" && (data.daltonismo == 2 || data.daltonismo2 == 2) && (data.visao1 != 2 || data.visao2 != 2 || data.visao3 != 2)) {
                    chrome.storage.sync.set({
                        'rule35': '1'
                    });
                }
                if (json[i].id == "rule36") {
                    chrome.storage.sync.set({
                        'rule36': '1'
                    });
                }
                if (json[i].id == "rule7") {
                    chrome.storage.sync.set({
                        'rule7': '1'
                    });
                }
            }

        }).fail(function() {
            alert("Não foi possível obter as regras de design");
        });
    });
});

(function() {
    'use strict';
    var dialogButton = document.querySelector('.dialog-button');
    var dialog = document.querySelector('#dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
        dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
        .addEventListener('click', function() {
            dialog.close();
            window.setTimeout(function() {
                window.location.href = "perfil.html";
            }, 500);
        });
}());


(function() {
    'use strict';
    // Stepper non-linear demonstration
    var demoNonLinear = function(e) {
        var element = document.querySelector('.mdl-stepper#demo-stepper-non-linear');

        if (!element) {
            return;
        }

        var stepper = element.MaterialStepper;
        var steps = element.querySelectorAll('.mdl-step');
        var step;

        for (var i = 0; i < steps.length; i++) {
            step = steps[i];
            step.addEventListener('onstepnext', function(e) {
                stepper.next();
            });
        }
        element.addEventListener('onsteppercomplete', function(e) {
            var toast = document.querySelector('#snackbar-stepper-complete');

            if (!toast) return false;

            toast.MaterialSnackbar.showSnackbar({
                message: 'Stepper non-linear are completed',
                timeout: 4000,
                actionText: 'Ok'
            });
        });
    };

    window.addEventListener('load', demoNonLinear);
})();
