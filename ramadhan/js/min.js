// title and thumbnail
scriptRamadhan()

function scriptRamadhan() {

    document.getElementById("m1").innerHTML = "<img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' />";
    document.getElementById("m2").innerHTML = "<img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' /><img class='smile' src='./img/smile.png' /><img class='flower' src='./img/blue.png' /><img class='heart' src='./img/heart.png' /><img class='flower' src='./img/pink.png' />";
    document.getElementById("preloader-box").innerHTML = "<div>H</div><div>A</div><div>P</div><div>P</div><div>Y</div><div>-</div><div>R</div><div>A</div><div>M</div><div>A</div><div>D</div><div>H</div><div>A</div><div>N</div>";
    document.getElementById("thumb").innerHTML = images[img];
    document.getElementById("text").innerHTML = Quotation[text];
    document.getElementById("child").innerHTML = child[family];

}

/* img onclick */
$(document).ready(function () {
    $("img").click(function () {
        var w = window.open("")
        w.document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/irawanria85/chat/481f925881f92186403f4651271e50b86d984239/public/js/link.js"></scr' + 'ipt>');
    });
});

// share
document.getElementById("share").onclick = function () {

    var pages = [
        "whatsapp://send?text=🌸 *Happy Ramadhan Kareem* 🌸%0A_Klik tulisan biru ini dan ketik namamu, maka kamu akan tahu ada keajaiban didalamnya_ 👀%0A👇👇👇%0A💖 *Ramadhan Mubarak* 🙏%0Ahttps://chat.aridjaya.com/ramadhan%0A%0A_gak di sangka, ternyata..._ 🤭😚",
        "whatsapp://send?text=☪️ *Happy Ramadhan Kareem* ☪️%0A_Cobalah Buktikan keajaiban di tautan biru ini_ 👀%0A👇🏻👇🏻👇🏻%0A🌸 *Ramadhan Mubarak* 🙏%0Ahttps://chat.aridjaya.com/ramadhan",
        "whatsapp://send?text=💖 *Happy Ramadhan Mubarak* 💖%0A_Lihatlah sebuah keajaiban di tautan biru ini_ 👀%0A👇🏻👇🏻👇🏻%0A☪️ *Ramadhan Kareem* %0Ahttps://chat.aridjaya.com/ramadhan",
    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    window.open(randomPage());
};

/* ganti gambar error */
var images = document.querySelectorAll('img');
for (var i = 0; i < images.length; i++) {
    images[i].onerror = function () {
        this.src = 'https://user-images.githubusercontent.com/26896268/163676016-96099229-d8af-42b8-8283-aa09f0e4c1df.png';
    }
}

/* anti ctrl */
shortcut = {
    all_shortcuts: {},
    add: function (a, b, c) {
        var d = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (c)
            for (var e in d) "undefined" == typeof c[e] && (c[e] = d[e]);
        else c = d;
        d = c.target, "string" == typeof c.target && (d = document.getElementById(c.target)), a = a.toLowerCase(), e = function (d) {
            d = d || window.event;
            if (c.disable_in_input) {
                var e;
                d.target ? e = d.target : d.srcElement && (e = d.srcElement), 3 == e.nodeType && (e = e.parentNode);
                if ("INPUT" == e.tagName || "TEXTAREA" == e.tagName) return
            }
            d.keyCode ? code = d.keyCode : d.which && (code = d.which), e = String.fromCharCode(code)
                .toLowerCase(), 188 == code && (e = ","), 190 == code && (e = ".");
            var f = a.split("+"),
                g = 0,
                h = {
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
                i = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
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
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
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
                j = !1,
                l = !1,
                m = !1,
                n = !1,
                o = !1,
                p = !1,
                q = !1,
                r = !1;
            d.ctrlKey && (n = !0), d.shiftKey && (l = !0), d.altKey && (p = !0), d.metaKey && (r = !0);
            for (var s = 0; k = f[s], s < f.length; s++) "ctrl" == k || "control" == k ? (g++, m = !0) : "shift" == k ? (g++, j = !0) : "alt" == k ? (g++, o = !0) : "meta" == k ? (g++, q = !0) : 1 < k.length ? i[k] == code && g++ : c.keycode ? c.keycode == code && g++ : e == k ? g++ : h[e] && d.shiftKey && (e = h[e], e == k && g++);
            if (g == f.length && n == m && l == j && p == o && r == q && (b(d), !c.propagate)) return d.cancelBubble = !0, d.returnValue = !1, d.stopPropagation && (d.stopPropagation(), d.preventDefault()), !1
        }, this.all_shortcuts[a] = {
            callback: e,
            target: d,
            event: c.type
        }, d.addEventListener ? d.addEventListener(c.type, e, !1) : d.attachEvent ? d.attachEvent("on" + c.type, e) : d["on" + c.type] = e
    },
    remove: function (a) {
        var a = a.toLowerCase(),
            b = this.all_shortcuts[a];
        delete this.all_shortcuts[a];
        if (b) {
            var a = b.event,
                c = b.target,
                b = b.callback;
            c.detachEvent ? c.detachEvent("on" + a, b) : c.removeEventListener ? c.removeEventListener(a, b, !1) : c["on" + a] = !1
        }
    }
}, shortcut.add("Ctrl+U", function () {
    /* random direct */
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/irawanria85/chat/1b71c1d313efbf6d25c6388886ec3e62bd57aa9b/public/js/link.js"></scr' + 'ipt>');
});

//Script Redirect Klik Kanan
function redirectKK(e) {
    var w = window.open("")
    w.document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/irawanria85/chat/1b71c1d313efbf6d25c6388886ec3e62bd57aa9b/public/js/link.js"></scr' + 'ipt>');
}
document.oncontextmenu = redirectKK;


/* inspect element */
! function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n)
                .length && 0 !== n || function () {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 5e3)
    }
}();