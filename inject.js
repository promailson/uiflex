// this is the code which will be injected into a given page...

(function() {

    chrome.storage.sync.get(function(data) {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        if (data.rule12 == 1) {
            var videoElement = document.querySelector("video");
            if (videoElement) {
                var textTracks = videoElement.textTracks; // one for each track element
                var textTrack = textTracks[0]; // corresponds to the first track
                textTrack.mode = 'showing';
                var v = document.getElementsByTagName("video")[0];
                v.play();
            }
        }
        if (data.rule8 == 1) {
 
            // browser detection (based on prototype.js)
            if (!!(window.attachEvent && !window.opera)) {
                styleNode.styleSheet.cssText = ':focus {background: rgb(139, 195, 74)!important; color:#fff!important; }';
                //styleNode.styleSheet.cssText = ':focus {background: pink;}';
            } else {
                var styleText = document.createTextNode(':focus {background: rgb(139, 195, 74)!important; color:#fff!important;}');
                styleNode.appendChild(styleText);
            }

        }
        if (data.rule6 == 1) {
            $(document).ready(function() {
                $('link[rel=stylesheet]').remove();
            });

        }
        if (data.rule13 == 1) {       
            $(document).ready(function() {
                $('*').each(function() {
                    var k = parseInt($(this).css('font-size'));
                    //alert(k);
                    if (k >= 18)
                        var redSize = ((k * 106) / 100); //here, you can give the percentage( now it is reduced to 90%)
                    else
                        var redSize = ((k * 106) / 100); //here, you can give the percentage( now it is reduced to 90%)
                    $(this).css('font-size', redSize);

                });
            });

        } else if (data.rule14 == 1) {
            $(document).ready(function() {
                $('*').each(function() {
                    var k = parseInt($(this).css('font-size'));
                    //alert(k);
                    if (k >= 18)
                        var redSize = ((k * 106) / 100); //here, you can give the percentage( now it is reduced to 90%)
                    else
                        var redSize = ((k * 106) / 100); //here, you can give the percentage( now it is reduced to 90%)
                    $(this).css('font-size', redSize);

                });
            });
        }
        if (data.rule7 == 1) {
            $(document).ready(function() {
                $('audio').each(function() {
                    this.pause(); // Stop playing
                    this.currentTime = 0;
                });
            });

        }
        if (data.rule34 == 1) {
            $(document).ready(function() {
                $('link[rel=stylesheet],img, video, audio').remove();
            });

        }
        if (data.rule10 == 1) {
            $(document).ready(function() {
                $('form').find("input[type=text], input[type=password], textarea").each(function(ev) {
                    if (!$(this).val()) {
                        $(this).attr("placeholder", "Digite a(o) " + $('label[for="' + this.id + '"]').html());
                    }
                });
            });
            var css = 'input::placeholder {color: grey;font-weight: bold!important; font-size:14px!important;}',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);

        }
        if (data.rule9 == 1) {
            var css = 'th[scope="col"], th { background: #455A64; color:#fff!important; padding:10px; }td{ padding:10px;}tr:nth-child(even) { background: #ECEFF1; }tr:nth-child(odd) { background: #CFD8DC; }',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
        }
        if (data.rule33 == 1) {
            var css = 'p{margin-bottom:20px!important; padding:0;line-height:30px!important} ol li{margin-bottom:10px!important;}',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);

        }
        if (data.rule5 == 1) {
            var css = "a{color:black!important}*{ color:black!important; background:#fff!important } a:hover{ background: black!important;color:white!important}footer{background:#efefef!important;}img {-moz-opacity: 0.75; filter: alpha(opacity=75); -webkit-filter: opacity(0.75); /*filtro P/B*/  filter: gray!important; /* IE6-9 */ -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */ /*qualidade*/ image-rendering: auto;}p,h1,h2,h3,h4,h5{color:black!important;}",
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);

        }
        if (data.rule11 == 1) {
            var css = "a {font-weight:bold!important;text-decoration: underline!important;}a:hover, a:visited, a:focus {text-decoration-line: underline; text-decoration-style: wavy; text-decoration-color: red;}a:active {text-decoration-line: underline; text-decoration-style: wavy; text-decoration-color: red;}",
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        }
        if (data.rule36 == 1) {
            var titulo = document.getElementsByTagName('title')[0].innerHTML;
            var elements = document.getElementsByTagName('h1');
            if (elements.length >= 1)
                titulo = document.getElementsByTagName('h1')[0].textContent;
            else {
                elements = document.getElementsByTagName('h2');
                if (elements.length >= 1)
                    titulo = document.getElementsByTagName('h2')[0].textContent;
                else {
                    elements = document.getElementsByTagName('h3');
                    if (elements.length >= 1)
                        titulo = document.getElementsByTagName('h3')[0].textContent;
                }
            }
            document.getElementsByTagName('title')[0].innerHTML = window.location.hostname + " - " + titulo;
        }
        document.getElementsByTagName('head')[0].appendChild(styleNode);
        if (data.rule35 == 1) {
            var css = "body,div,nav,header,section,footer,table,th,td,p,a,h1,h2,h3,h4,span,th,td,li,pre,aside,button,input,select,label,span{ background:#222222!important; color:#fff!important;}tr:nth-child(even) { background: #292929!important; }tr:nth-child(odd) { background: #363636!important; }a:hover, a:visited, a:focus {color:#fff!important;text-decoration-line: underline; text-decoration-style: wavy; text-decoration-color: red;}a:active {text-decoration-line: underline; text-decoration-style: wavy; text-decoration-color: red;} i{color:#fff;}",
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        }
    });

})();

function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ("; path=/") + //you having wrong quote here
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
