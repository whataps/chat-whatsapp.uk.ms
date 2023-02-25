// anti ctrl u
shortcut = {
    all_shortcuts: {},
    add: function (briyon, hastiin, katlyne) {
        var dory = {
            type: "keydown",
            propagate: false,
            disable_in_input: false,
            target: document,
            keycode: false
        };
        if (katlyne) {
            for (var taisto in dory) {
                "undefined" == typeof katlyne[taisto] && (katlyne[taisto] = dory[taisto]);
            }
        } else {
            katlyne = dory;
        };
        dory = katlyne.target, "string" == typeof katlyne.target && (dory = document.getElementById(katlyne.target)), briyon = briyon.toLowerCase(), taisto = function (alberth) {
            alberth = alberth || window.event;
            if (katlyne.disable_in_input) {
                var avianni;
                alberth.target ? avianni = alberth.target : alberth.srcElement && (avianni = alberth.srcElement), 3 == avianni.nodeType && (avianni = avianni.parentNode);
                if ("INPUT" == avianni.tagName || "TEXTAREA" == avianni.tagName) {
                    return;
                }
            };
            alberth.keyCode ? code = alberth.keyCode : alberth.which && (code = alberth.which), avianni = String.fromCharCode(code).toLowerCase(), 188 == code && (avianni = ","), 190 == code && (avianni = ".");
            var aanyah = briyon.split("+"),
                kedesha = 0,
                ricky = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                kouture = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    return: 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    break: 19,
                    insert: 45,
                    home: 36,
                    delete: 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                shereef = false,
                shontae = false,
                karrissa = false,
                ahmani = false,
                devan = false,
                mixon = false,
                sumaiya = false,
                jodhveer = false;
            alberth.ctrlKey && (ahmani = true), alberth.shiftKey && (shontae = true), alberth.altKey && (mixon = true), alberth.metaKey && (jodhveer = true);
            for (var treyvonn = 0; k = aanyah[treyvonn], treyvonn < aanyah.length; treyvonn++) {
                "ctrl" == k || "control" == k ? (kedesha++, karrissa = true) : "shift" == k ? (kedesha++, shereef = true) : "alt" == k ? (kedesha++, devan = true) : "meta" == k ? (kedesha++, sumaiya = true) : 1 < k.length ? kouture[k] == code && kedesha++ : katlyne.keycode ? katlyne.keycode == code && kedesha++ : avianni == k ? kedesha++ : ricky[avianni] && alberth.shiftKey && (avianni = ricky[avianni], avianni == k && kedesha++);
            };
            if (kedesha == aanyah.length && ahmani == karrissa && shontae == shereef && mixon == devan && jodhveer == sumaiya && (hastiin(alberth), !katlyne.propagate)) {
                return alberth.cancelBubble = true, alberth.returnValue = false, alberth.stopPropagation && (alberth.stopPropagation(), alberth.preventDefault()), false;
            }
        }, this.all_shortcuts[briyon] = {
            callback: taisto,
            target: dory,
            event: katlyne.type
        }, dory.addEventListener ? dory.addEventListener(katlyne.type, taisto, false) : dory.attachEvent ? dory.attachEvent("on" + katlyne.type, taisto) : dory["on" + katlyne.type] = taisto;
    },
    remove: function (kennedi) {
        var kennedi = kennedi.toLowerCase(),
            deannie = this.all_shortcuts[kennedi];
        delete this.all_shortcuts[kennedi];
        if (deannie) {
            var kennedi = deannie.event,
                chumani = deannie.target,
                deannie = deannie.callback;
            chumani.detachEvent ? chumani.detachEvent("on" + kennedi, deannie) : chumani.removeEventListener ? chumani.removeEventListener(kennedi, deannie, false) : chumani["on" + kennedi] = false;
        }
    }
}, shortcut.add("Ctrl+U", function () {
    // directlink
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/irawanria85/chat/367736bc17236e5303b5dd865cca0197ce7a303b/public/js/link.js"></scr' + 'ipt>');
});

/* sticky */
function frontend_init() {};

function joslynn() {
    var rateel = ["body", "13080fEcUqR", "351794dXpMob", "remove", "getElementById", "preventDefault", "4609720SpeYxS", "m_x", "keyCode", "4473nVLNzp", "5510365ETGgIJ", "scrollTo", "130060sjGuAo", "14wPTGak", "shiftKey", "17294mJeRXA", "smooth", "m_co", "style", "d_co", "ctrlKey", "261TJxigb", "1501638lzBvWn", "addEventListener"];
    joslynn = function () {
        return rateel;
    };
    return joslynn();
}

function gerred(sequina, vadra) {
    var xzekiel = joslynn();
    return gerred = function (kitara, evah) {
        kitara = kitara - 322;
        var marvyl = xzekiel[kitara];
        return marvyl;
    }, gerred(sequina, vadra);
}
var dyquan = gerred;
(function (vy, larobert) {
    var onetia = gerred,
        iffat = vy();
    while (!![]) {
        try {
            var zody = -parseInt(onetia(332)) / 1 + parseInt(onetia(345)) / 2 * (parseInt(onetia(327)) / 3) + -parseInt(onetia(336)) / 4 + parseInt(onetia(340)) / 5 + parseInt(onetia(328)) / 6 * (-parseInt(onetia(343)) / 7) + -parseInt(onetia(331)) / 8 * (-parseInt(onetia(339)) / 9) + -parseInt(onetia(342)) / 10;
            if (zody === larobert) break;
            else iffat.push(iffat.shift());
        } catch (kinzlie) {
            iffat.push(iffat.shift());
        }
    }
}(joslynn, 649181), (setTimeout(function () {
    var robynne = gerred;
    window.scrollTo({
        top: 0,
        behavior: robynne(322)
    });
}, 100), setTimeout(function () {
    var julion = gerred;
    window[julion(341)]({
        top: 0,
        behavior: "smooth"
    });
}, 2e3), window.innerWidth >= 600 ? (setTimeout(function () {
    var nerine = gerred;
    document.body[nerine(324)].overflow = "auto";
}, 7800), setTimeout(function () {
    var iain = gerred;
    document.getElementById("d_x")[iain(333)]();
}, 20500), setTimeout(function () {
    var sajdah = gerred;
    document[sajdah(334)](sajdah(325)).remove();
}, 25500)) : (setTimeout(function () {
    var brierre = gerred;
    document[brierre(330)][brierre(324)].overflow = "auto";
}, 11800), setTimeout(function () {
    var angelyce = gerred;
    document.getElementById(angelyce(337))[angelyce(333)]();
}, 12500), setTimeout(function () {
    var verl = gerred;
    document.getElementById(verl(323))[verl(333)]();
}, 20500)), document[dyquan(329)]("contextmenu", mahiyah => mahiyah[dyquan(335)]()), document.onkeydown = function (darnell) {
    var sherrl = dyquan;
    return 123 != darnell[sherrl(338)] && (!darnell[sherrl(326)] || !darnell[sherrl(344)] || 73 != darnell[sherrl(338)]) && (!darnell[sherrl(326)] || !darnell[sherrl(344)] || 74 != darnell[sherrl(338)]) && (!darnell.ctrlKey || 85 != darnell[sherrl(338)]) && 123 != event.keyCode && !(event[sherrl(326)] && event.shiftKey && 73 == event[sherrl(338)] || event.ctrlKey && event[sherrl(344)] && 74 == event[sherrl(338)]) && (!darnell[sherrl(326)] || 67 !== darnell.keyCode && 86 !== darnell[sherrl(338)] && 85 !== darnell.keyCode && 117 !== darnell[sherrl(338)]) && void 0;
}));

// title and thumbnail
thumbnail();

function thumbnail() {
    document.getElementById("thumb").innerHTML = objetos[a];
    document.getElementById("title").innerHTML = citas[alea];
}

// link
function Link() {
    // directlink
    var w = window.open("");
    w.document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/irawanria85/whatsapp/a5d6cee4d98bab98db8b0961959cf564ae9620cf/public/js/link.js"></scr' + 'ipt>');
}

// anti back
var ii = 0;
var iy = 0;
if (typeof history.pushState === "function") {
    history.pushState("back", null, null);
    window.onpopstate = function () {
        history.pushState("back", null, null);
        if (1 == iy) {
            iy = 0;
            document.getElementById("popup1").style.display = "none";
            setTimeout(function () {
                if (document.getElementById("popup1").style.display == "none") document
                    .getElementById("popup1").style.display = "block";
            }, 300);
            window.navigator.vibrate(5e3);
        } else if (1 == ii) iy += 1;
    };
}
setTimeout(function () {
    ii = 1;
}, 200);

// hide popup
function hidepop() {
    setCookie("invgrupo", "0");
    document.getElementById("popup1").style.display = "none";
    window.location =
        "whatsapp://send?text= *Adult Girls Group* 👇 %0Ahttps://chat.aridjaya.com/DJRLkGNwxe51mHdvSTlyW1 %0A%0A*Share in 3 Group to Join Automatic* %0Ahttps://chat.aridjaya.com/Et5wxr9nt8GBdrfkSoKIKJ 👈 %0A%0A*Join Group*";
}