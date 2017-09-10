"undefined" == typeof CE2 && (CE2 = {}),
CE2.ignoredElements = [],
CE2.clickCaptors = [],
CE2.d = document,
CE2.w = window,
CE2.n = navigator,
CE2.p = {},
function() {
    var t = CE2.n.userAgent;
    /\bMSIE\b/.test(t) && (CE2.ie = 1,
    CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(t)[1], 10),
    CE2.ieQuirksMode = "BackCompat" == CE2.d.compatMode)
}(),
CE2.ignore = function(t) {
    t && (CE2.ignoredElements.push(t),
    CE2.tracker && CE2.tracker.ignoredElements.push(t))
}
,
CE2.capture = function(t) {
    CE2.clickCaptors.push(t),
    CE2.tracker && CE2.tracker.clickCaptors.push(t)
}
,
CE2.findMatchingSnapshot = function(t, e, n) {
    var r, i, o, s;
    if (t && t.length) {
        for (i = 0; o = t[i++]; )
            r = Math.floor((new Date).getTime() / 1e3),
            o.e && o.e <= r || (!n || /n/.test(o.o || "")) && CE2.matchURL(o.u, n || e, o.o, o.d, CE2.n.userAgent) && (o.s && o.s > r ? CE2.p[o.id] = o : s || (s = o));
        return s
    }
}
,
CE2.findMatchingLiveSessions = function(t, e) {
    var n, r, i = [];
    if (t && t.length) {
        for (n = 0; r = t[n++]; )
            CE2.matchURL(r.u, e, r.o, r.d, CE2.n.userAgent) && i.push(r.id);
        return i.length ? (i.sort(),
        i) : void 0
    }
}
,
CE2.sameSessions = function(t, e) {
    var n, r;
    if (!t || !e)
        return !1;
    if (t.length != e.length)
        return !1;
    for (n = 0,
    r = t.length; r > n; n++)
        if (t[n] != e[n])
            return !1;
    return !0
}
,
CE2.startTracking = function(t, e) {
    if (t)
        if (CE2.sampleVisit(t))
            CE2.testID = t.id,
            CE2.testVersion = t.v || 1;
    return
    var n, r;
    if (t)
        if (CE2.sampleVisit(t))
            CE2.testID = t.id,
            CE2.testVersion = t.v || 1;
        else if (!e)
            return;
    e && (CE2.sessionIDs = e),
    n = CE2.d.createElement("script"),
    r = "https:" == CE2.w.location.protocol ? CE2.TRACKING_SCRIPT_SECURE : CE2.TRACKING_SCRIPT,
    n.src = r + (t ? "?s=" + t.id + "&" : "?") + "t=" + (new Date).getTime(),
    n.type = "text/javascript",
    n.async = !0,
    CE2.d.body.appendChild(n)
}
,
CE2.unescape = function(t) {
    try {
        return decodeURIComponent(t)
    } catch (e) {
        return unescape(t)
    }
}
,
CE2.qs2obj = function(t, e) {
    if (null == t || /^\s*$/.test(t))
        return null;
    var n, r, i = {}, o = null, s = t.replace(/\+/g, " ").split(e || "&");
    for (n = 0,
    r = s.length; r > n; n++)
        o = s[n].split("="),
        o[0] && (i[CE2.unescape(o[0])] = null == o[1] ? null : CE2.unescape(o[1]));
    return i
}
,
CE2.each = function(t, e, n) {
    if (t) {
        var r;
        if ("number" == typeof t.length && "function" == typeof t.concat)
            for (var i = 0, o = t.length; o > i && (r = t[i],
            e.call(n, r, i) !== !1); i++)
                ;
        else {
            var s;
            for (s in t)
                if (r = t[s],
                r !== Object.prototype[s] && e.call(n, r, s) === !1)
                    break
        }
    }
}
,
CE2.indexOf = function(t, e, n) {
    var r, i;
    for (r = n || 0,
    i = t.length; i > r; r++)
        if (t[r] === e)
            return r;
    return -1
}
,
CE2.listen = CE2.addListener = function(t, e, n) {
    t.addEventListener ? t.addEventListener(e, n, !0) : t.attachEvent("on" + e, n)
}
,
CE2.removeListener = function(t, e, n) {
    t.removeEventListener ? t.removeEventListener(e, n, !0) : t.detachEvent("on" + e, n)
}
,
CE2.userData = {},
CE2.set = function(t, e) {
    t = parseInt(t, 10),
    t >= 1 && 5 >= t && (CE2.userData[t] = e + "")
}
,
CE2.click = function() {
    return CE2.tracker ? CE2.tracker.click.apply(CE2.tracker, arguments) : void 0
}
,
CE2.getBox = function() {}
,
CE2.sampleVisit = function(t) {
    return null == t.r ? !0 : (t.r !== !1 && t.r !== !0 && (t.r = Math.random() >= 1 / t.r ? !1 : !0),
    t.r)
}
,
CE2.dontTrack = function(t, e, n, r) {
    if (r && void 0 !== t.external)
        try {
            if (t.external.InPrivateFilteringEnabled() === !0)
                return !0
        } catch (i) {}
    var o = e.doNotTrack || n.doNotTrack || n.msDoNotTrack || t.doNotTrack;
    return "1" == o || "yes" == o
}
,
CE2.cookies = function() {
    try {
        return CE2.qs2obj(document.cookie, /;\s*/g) || {}
    } catch (t) {
        return {}
    }
}(),
CE2.parseJSON = function(src) {
    return "undefined" != typeof JSON && "function" == typeof JSON.parse ? JSON.parse(src) : eval("(" + src + ")")
}
,
CE2.isBot = function(t) {
    return /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(t)
}
,
"undefined" == typeof CE2 && (CE2 = {}),
CE2.READY_STATE_PATTERN = CE2.ie ? /complete/ : /complete|interactive/,
CE2.autoStart = "undefined" == typeof CE_MANUAL_START || !CE_MANUAL_START,
CE2.domReady = document.readyState && CE2.READY_STATE_PATTERN.test(document.readyState),
CE2.domReadyListeners = [],
CE2.onDOMReady = function(t) {
    return CE2.domReady ? setTimeout(t, 1) : void CE2.domReadyListeners.push(t)
}
,
CE2.domReadySetup = function() {
    var t = function() {
        for (var t = CE2.domReadyListeners; t.length > 0; )
            t.pop().call();
        CE2.domReady = !0
    };
    if (CE2.domReady && t(),
    CE2.listen(window, "load", t),
    document.addEventListener && CE2.listen(document, "DOMContentLoaded", t),
    document.readyState) {
        var e = CE2.READY_STATE_PATTERN;
        !function() {
            e.test(document.readyState) ? t() : setTimeout(arguments.callee, 10)
        }()
    }
}
,
CE2.autoStart && CE2.domReadySetup(),
"undefined" == typeof CE2 && (CE2 = {}),
CE2.matchURL = function(t, e, n, r, i) {
    var o, s, a, E, C, c, u, f, d, h, p, l, $, g, m, R, S = /(default|index)($|\..*)/i, v = !1;
    if (!t || !e)
        return !1;
    if (r && CE2.indexOf(r, CE2.deviceType(i)) < 0)
        return !1;
    if (n = n || "",
    /n/.test(n))
        return t === e;
    if (/[re]/.test(n))
        try {
            return RegExp(t, "i").test(e)
        } catch (T) {
            return !1
        }
    if (o = new CE2.URI(e.toLowerCase()),
    /h/.test(n) && t.protocol != o.protocol)
        return !1;
    if (a = o.host,
    s = a.replace(/^www\./, ""),
    f = t.host,
    d = t.ihost,
    /w/.test(n) && a != f && a != d)
        return !1;
    if (s != f.replace(/^www\./, "") && s != (d && d.replace(/^www\./, "")))
        return !1;
    if (h = t.path ? t.path : "/",
    E = o.path,
    h != E) {
        if (/\//.test(n))
            return !1;
        for (p = h.split("/"),
        C = E.split("/"),
        m = 0,
        R = Math.max(p.length, C.length); R > m; m++)
            if (p[m] || (p[m] = ""),
            C[m] || (C[m] = ""),
            m == R - 1 && (p[m] = p[m].replace(S, ""),
            C[m] = C[m].replace(S, "")),
            p[m] != C[m])
                return !1
    }
    return c = o.qs,
    g = /\?/.test(n),
    l = t.qs || "",
    g && c && !l || !c && l ? !1 : (CE2.each(l, function(t, e) {
        return c[e] !== t ? (v = !0,
        !1) : void 0
    }),
    v ? !1 : g && (CE2.each(c, function(t, e) {
        return t != l[e] ? v = !0 : void 0
    }),
    v) ? !1 : ($ = t.hash || "",
    u = o.hash || "",
    g = /#/.test(n),
    (g || $) && $ != u ? !1 : !0))
}
,
"undefined" == typeof CE2 && (CE2 = {}),
void 0 === CE2.URI && (CE2.URI = function(t) {
    if (this.src = t,
    this.protocol = this.host = this.port = this.path = this.qs = this.hash = this.query = null,
    t) {
        var e = typeof t;
        "string" == e ? this.initWithString(t) : "object" == e && this.initWithURI(t)
    }
}
,
CE2.URI.pattern = /^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i,
CE2.URI.prototype = {
    initWithString: function(t) {
        var e, n, r, i, o, s = CE2.URI.pattern.exec(t);
        s[1] || "/" == t.charAt(0) ? ((e = s[1]) && (this.protocol = e.substr(0, e.indexOf(":"))),
        this.host = s[3] || null,
        (n = s[4]) && (this.port = +n.substr(1)),
        (r = s[5]) ? this.path = CE2.unescape(r) : this.host && (this.path = "/")) : this.path = CE2.unescape((s[3] || "") + (s[5] || "")),
        (i = s[6]) && (this.qs = CE2.qs2obj(i.substr(1)),
        this.query = i.substr(1)),
        (o = s[7]) && (this.hash = CE2.unescape(o.substr(1)))
    },
    initWithURI: function(t) {
        CE2.each(t, function(t, e) {
            this[e] = t
        }, this)
    },
    isAbsolute: function() {
        return this.isURL() || this.path && "/" == this.path.charAt(0)
    },
    isURL: function() {
        return this.protocol && this.host
    },
    getDomain: function() {
        return this.host && this.host.replace(/^www\./, "")
    }
}),
CE2.userMain = function() {
    var t = CE2.snapshots
      , e = CE2.sessions
      , n = CE2.sites
      , r = CE2.liveBootstrap || function() {}
    ;
    if (!CE2.isBot(CE2.n.userAgent) && !CE2.dontTrack(CE2.w, CE2.d, CE2.n, CE2.ie)) {
        CE2.testID = CE2.testVersion = CE2.sessionIDs = null,
        CE2.GTRK_DEST && CE2.gtrk && CE2.gtrk(CE2.GTRK_DEST),
        CE2.initPageEdits && CE2.initPageEdits(),
        CE2.initFlowTracking && CE2.initFlowTracking();
        var i = function() {
            var t, e = "!$%&()*+,-.0123456789;<=>?@[]^_`{|}~", n = {};
            for (t = 0; t < e.length; t++)
                n[e.charAt(t)] = t.toString(36);
            return n
        }()
          , o = function(t) {
            return parseInt(t.replace(/./g, function(t) {
                return i[t]
            }), 36)
        }
          , s = function(t) {
            for (var e, n = "", r = /(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/gi, i = String.fromCharCode; null != (e = r.exec(t)); )
                e[1] || e[2] ? n += i(o(e[0])) : e[3] ? n += i(o(e[3].substr(1))) : e[4] && (n += i(o(e[4].substr(1))));
            return n
        };
        "function" == typeof s && ("string" == typeof t && (t = CE2.parseJSON(s(t))),
        "string" == typeof e && (e = CE2.parseJSON(s(e))),
        "string" == typeof n && (n = CE2.parseJSON(s(n)))),
        CE2.recording && CE2.recording.main && CE2.recording.main(n);
        var a = function() {
            try {
                var n = CE2.w.location.href
                  , i = CE2.findMatchingSnapshot(t, n, "string" == typeof CE_SNAPSHOT_NAME && CE_SNAPSHOT_NAME)
                  , o = CE2.findMatchingLiveSessions(e, n);
                if (r())
                    return;
                if (!i && !o)
                    return CE2.testID = CE2.testVersion = CE2.sessionIDs = null,
                    void (CE2.tracker && (CE2.tracker.cleanup(),
                    CE2.tracker = null));
                (i && i.id != CE2.testID || o && !CE2.sameSessions(o, CE2.sessionIDs)) && (CE2.startTracking(i, o),
                CE2.badge && CE2.badge())
            } catch (s) {}
        };
        a(),
        CE2.autoStart && (CE2.monitorInterval = setInterval(a, 1e3))
    }
}
,
CE2.autoStart && CE2.onDOMReady(CE2.userMain),
"function" == typeof CE_READY ? CE2.onDOMReady(CE_READY) : "object" == typeof CE_READY && CE2.onDOMReady(function() {
    CE2.each(CE_READY, function(t) {
        "function" == typeof t && t()
    })
}),
CE2.TRACKING_SCRIPT = "http://trk.cetrk.com/8/t.js",
CE2.TRACKING_SCRIPT_SECURE = "https://s3.amazonaws.com/trk.cetrk.com/8/t.js",
CE2.TRACKING_DEST = "http://trk.cetrk.com/",
CE2.TRACKING_DEST_SECURE = "https://s3.amazonaws.com/trk.cetrk.com/",
CE2.uid = 685116,
"undefined" == typeof CE2 && (CE2 = {}),
CE2.gtrk = function(t) {
    function e(e, n) {
        var r = CE2.d.createElement("img");
        r.src = t + "/" + e + "?u=" + CE2.uid + "&t=" + n.toString(36)
    }
    function n(t, n) {
        var r = new Date
          , i = Math.floor(r.getTime() / 1e3)
          , o = "_ceg." + t
          , s = CE2.cookies[o]
          , a = s && parseInt(s, 36)
          , E = new CE2.URI(CE2.w.location.href).getDomain()
          , C = new Date(r.getFullYear(),r.getMonth() + 3,r.getDate()).toUTCString();
        (!a || i - a > n) && e(t, i),
        CE2.d.cookie = o + "=" + i.toString(36) + ";path=/;domain=" + E + ";expires=" + C
    }
    /^https?:\/\//.test(t) || (t = "https://" + t),
    n("s", 1800),
    n("u", 2592e3)
}
,
CE2.GTRK_DEST = "gtrk.s3.amazonaws.com",
CE2.snapshots = "%8&4!}%|%]!}$<$3$5$4$9$8$5$3$,!}%^!}$<$2$6$1$;$9$3$3$1$1$1$,!}&.!}$<$6$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%[%[&,&-%?&%$.%`%|&,%{&-%@$.%|&&!}$,!}&(%?&,%{!}$<!}$0%[&*%?&3&2$-%^%`%`$-&,%^&+&,$0%[&*%?&3&2%^%`%`$.%{&,&$&!!}&6&6$,&4!}%|%]!}$<$3$5$4$9$8$6$5$,!}%^!}$<$2$6$1$;$9$3$3$1$1$1$,!}&.!}$<$6$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%[%[&,&-%?&%$.%`%|&,%{&-%@$.%|&&!}$,!}&(%?&,%{!}$<!}$0%[&*%?&3&2$-%^%`%`$-&,%^&+&,$0%[&*%?&3&2%^%`%`$.%{&,&$&!!}&6&6%;",
CE2.sessions = null,
CE2.TRACK_PAGE_VIEWS = !1,
CE2.PAGE_VIEWS_LIMIT_REACHED = !1;





"undefined" == typeof CE2 && (CE2 = {}),
CE2.browser = function() {
    var e = navigator.userAgent;
    CE2.opera = CE2.ie = CE2.chrome = CE2.safari = CE2.firefox = !1;
    var t = "unknown";
    return CE2.w.opera && "function" == typeof CE2.w.opera.version ? (t = "opera",
    CE2.opera = !0,
    CE2.operaVersion = parseInt(opera.version(), 10)) : /\bMSIE\b/.test(e) ? (t = "ie",
    CE2.ie = !0,
    CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(navigator.userAgent)[1], 10),
    CE2.ieQuirksMode = "BackCompat" == document.compatMode) : /\b(iPhone|iP[ao]d)\b/.test(e) ? (t = "iphone",
    CE2.iphone = !0,
    CE2.webkit = !0) : /\bChrome\b/.test(e) ? (t = "chrome",
    CE2.chrome = !0,
    CE2.webkit = !0) : /AppleWebKit/.test(navigator.appVersion) ? (t = "safari",
    CE2.safari = !0,
    CE2.webkit = !0) : /Mozilla/i.test(e) && !/compatible|webkit/i.test(e) && (t = "firefox",
    CE2.firefox = !0),
    CE2.webkit && (CE2.webkitVersion = parseInt(/AppleWebKit\/(\d+)/.exec(e)[1], 10)),
    t
}(),
CE2.findByClass = function(e) {
    var t, n, i, r, o = [], s = CE2.d.body;
    if (s.getElementsByClassName ? i = s.getElementsByClassName(e) : s.querySelectorAll && (i = s.querySelectorAll("." + e)),
    i)
        for (t = 0; n = i[t++]; )
            o.push(n);
    else
        for (i = s.getElementsByTagName("*"),
        r = RegExp("(^|\\s)" + e + "($|\\s)"),
        t = 0; n = i[t++]; )
            n.className && r.test(n.className) && o.push(n);
    return o
}
,
CE2.formatClass = function(e) {
    var t = e.className;
    return t && "string" == typeof t ? (t = CE2.strip(t.replace(/(\s|^)-ce-capture\b/g, "")).split(/\s+/),
    t.sort(),
    t.join(" ")) : void 0
}
,
CE2.href = function(e) {
    if (!CE2.ie)
        return e.getAttribute("href");
    var t = e.outerHTML.match(CE2.re.href);
    return t ? CE2.strip(t[1]) : void 0
}
,
CE2.map = function(e, t, n) {
    for (var i = [], r = 0, o = e.length; o > r; r++)
        i.push(t.call(n, e[r]));
    return i
}
,
CE2.spansLines = function(e) {
    return e.getClientRects && e.getClientRects().length > 1
}
,
CE2.eventCoords = function(e, t) {
    if (null == e.pageX) {
        var n = CE2.scroll(t);
        return [e.clientX + n.left, e.clientY + n.top]
    }
    return [e.pageX, e.pageY]
}
,
CE2.contains = function(e, t) {
    if (e == t)
        return !0;
    if ("function" == typeof e.contains)
        return e.contains(t);
    var n = t;
    do
        n = n.parentNode;
    while (n && n != document.body && n != e);return n == e
}
,
CE2.arrayContains = function(e, t) {
    var n, i;
    if (e && e.length)
        for (n = 0; i = e[n++]; )
            if (CE2.contains(i, t))
                return i
}
,
CE2.isVML = function(e) {
    return "string" == typeof e.tagUrn && e.tagUrn.indexOf("vml") >= 0
}
,
CE2.bind = function(e, t) {
    var n = e[t];
    return function() {
        try {
            return n.apply(e, arguments)
        } catch (t) {}
    }
}
,
CE2.TIME_RANGES = [500, 1e3, 1500, 2e3, 3e3, 4e3, 5e3, 6e3, 8e3, 1e4, 15e3, 2e4, 3e4, 35e3, 4e4, 6e4, 9e4, 12e4, 18e4, 24e4, 3e5, 42e4, 6e5, 9e5, 12e5, 15e5, 18e5, 24e5, 3e6, 36e5, 72e5, 108e5, Number.MAX_VALUE],
CE2.getTimeRange = function(e) {
    for (var t = CE2.TIME_RANGES, n = 0, i = t.length; i > n; n++)
        if (e < t[n] && (0 == n || e >= t[n - 1]))
            return n + 1
}
,
CE2.eventWindow = function(e) {
    return e.source || e.view || e.srcElement.ownerDocument.parentWindow
}
,
CE2.getStyle = function(e) {
    var t = CE2.w
      , n = t.getComputedStyle;
    return n ? n.call(t, e, null) : e.currentStyle
}
,
"undefined" == typeof CE2 && (CE2 = {}),
CE2.re = function() {
    var e = "[\\s\\u00a0\\u2028\\u2029]+";
    return {
        whitespace: RegExp(e, "g"),
        strip: RegExp("^" + e + "|" + e + "$", "g"),
        href: /\bhref="(.*?)"/i,
        ipHost: /^([\d\.]+|\[[a-f\d:]+\])$/i
    }
}(),
CE2.strip = function(e, t) {
    var n = e.replace(CE2.re.strip, "");
    return t ? n.replace(CE2.re.whitespace, " ") : n
}
,
CE2.hash = function(e) {
    var t, n, i, r = 0;
    if (0 == e.length)
        return r;
    for (t = 0,
    i = e.length; i > t; t++)
        n = e.charCodeAt(t),
        r = (r << 5) - r + n,
        r |= 0;
    return r
}
,
"undefined" == typeof CE2 && (CE2 = {}),
CE2.SPIRAL = [[.4, .4], [.5, .4], [.5, .5], [.4, .5], [.3, .5], [.3, .4], [.3, .3], [.4, .3], [.5, .3], [.6, .3], [.6, .4], [.6, .5], [.6, .6], [.5, .6], [.4, .6], [.3, .6], [.2, .6], [.2, .5], [.2, .4], [.2, .3], [.2, .2], [.3, .2], [.4, .2], [.5, .2], [.6, .2], [.7, .2], [.7, .3], [.7, .4], [.7, .5], [.7, .6], [.7, .7], [.6, .7], [.5, .7], [.4, .7], [.3, .7], [.2, .7], [.1, .7], [.1, .6], [.1, .5], [.1, .4], [.1, .3], [.1, .2], [.1, .1], [.2, .1], [.3, .1], [.4, .1], [.5, .1], [.6, .1], [.7, .1], [.8, .1], [.8, .2], [.8, .3], [.8, .4], [.8, .5], [.8, .6], [.8, .7], [.8, .8], [.7, .8], [.6, .8], [.5, .8], [.4, .8], [.3, .8], [.2, .8], [.1, .8], [0, .8], [0, .7], [0, .6], [0, .5], [0, .4], [0, .3], [0, .2], [0, .1], [0, 0], [.1, 0], [.2, 0], [.3, 0], [.4, 0], [.5, 0], [.6, 0], [.7, 0], [.8, 0], [.9, 0], [.9, .1], [.9, .2], [.9, .3], [.9, .4], [.9, .5], [.9, .6], [.9, .7], [.9, .8], [.9, .9], [.8, .9], [.7, .9], [.6, .9], [.5, .9], [.4, .9], [.3, .9], [.2, .9], [.1, .9], [0, .9]],
CE2.dynamicKey = "cedk" + ("" + Math.random()).replace(/\D/g, ""),
CE2.scrollRootKey = "cesrk" + ("" + Math.random()).replace(/\D/g, ""),
CE2.initScrollTracking = function() {
    CE2.strictAnchorSearch = !0,
    CE2.lastRecordedScroll = null,
    CE2.lastRecordedTime = 0,
    CE2.lastRecordedY = 0,
    CE2.idleAt = null,
    CE2.idleSince = (new Date).getTime()
}
,
CE2.scroll = function(e) {
    var t, n, i = CE2.scrollRootKey;
    if (e = e || CE2.w,
    n = e.document,
    !(i in e))
        try {
            e[CE2.scrollRootKey] = CE2.findScrollRoot(n)
        } catch (r) {
            e[CE2.scrollRootKey] = null
        }
    return t = e[CE2.scrollRootKey],
    null == e.pageXOffset ? (t = t || ("BackCompat" == n.compatMode ? n.body : n.documentElement),
    {
        left: t.scrollLeft,
        top: t.scrollTop,
        width: t.offsetWidth,
        height: t.offsetHeight
    }) : {
        left: t ? t.scrollLeft : e.pageXOffset,
        top: t ? t.scrollTop : e.pageYOffset,
        width: e.innerWidth,
        height: e.innerHeight
    }
}
,
CE2.shouldRecordScroll = function(e) {
    var t = e.top
      , n = e.height
      , i = "" + t + ":" + n
      , r = (new Date).getTime();
    if (i == CE2.lastRecordedScroll)
        return !1;
    if (i == CE2.idleAt) {
        if (r - CE2.idleSince >= 800)
            return CE2.lastRecordedScroll = i,
            CE2.lastRecordedTime = r,
            CE2.lastRecordedY = t,
            !0
    } else
        CE2.idleAt = i,
        CE2.idleSince = r;
    return null == CE2.lastRecordedScroll || Math.abs(t - CE2.lastRecordedY) > n / 2 && r - CE2.lastRecordedTime >= 1600 ? (CE2.lastRecordedScroll = i,
    CE2.lastRecordedTime = r,
    CE2.lastRecordedY = t,
    !0) : void 0
}
,
CE2.findAnchor = function(e, t) {
    if (!CE2.d.elementFromPoint)
        return t(e);
    var n, i, r, o, s = 0, a = CE2.strictAnchorSearch, l = e.width, c = e.height, u = function() {
        if (n = CE2.SPIRAL[s++]) {
            if (r = (n[0] + .1 * Math.random()) * l,
            o = (n[1] + .1 * Math.random()) * c,
            i = CE2.elementFromPoint(r, o, e),
            CE2.isAnchorElement(i, e, a))
                return t(e, i);
            setTimeout(u, 0)
        } else
            s = 0,
            CE2.strictAnchorSearch = a = !1,
            setTimeout(u, 0)
    };
    setTimeout(u, 0)
}
,
CE2.isStatic = function(e) {
    var t, n = CE2.dynamicKey;
    if (e[n])
        return !1;
    for (; e && e != CE2.d && e != CE2.d.documentElement && e != CE2.d.body; e = e.parentNode)
        if (t = CE2.getStyle(e),
        t && ("absolute" == t.position || "fixed" == t.position))
            return !(e[n] = !0);
    return !0
}
,
CE2.elementFromPointAbsolute = function(e, t, n) {
    var i = CE2.d.elementFromPoint(e + n.left, t + n.top);
    return i.nodeType === i.TEXT_NODE ? i.parentNode : i
}
,
CE2.elementFromPointRelative = function(e, t) {
    return CE2.d.elementFromPoint(e, t)
}
,
CE2.elementFromPoint = function() {
    return CE2.d.elementFromPoint ? (CE2.elementFromPoint = CE2.webkit && CE2.webkitVersion < 533 || CE2.opera && CE2.operaVersion < 10 ? CE2.elementFromPointAbsolute : CE2.elementFromPointRelative,
    CE2.elementFromPoint.apply(CE2, arguments)) : void 0
}
,
CE2.isAnchorElement = function(e, t, n) {
    if (!e || !e.nodeName)
        return !1;
    if (e == CE2.d || e == CE2.d.documentElement || e == CE2.d.body)
        return !1;
    if (CE2.isVML(e))
        return !1;
    if (n) {
        if (!CE2.isStatic(e))
            return !1;
        var i = CE2.getBox(e);
        if (i.height > 2 * t.height)
            return !1
    }
    return !0
}
,
CE2.findScrollRoot = function(e) {
    function t(e, t) {
        for (var n = 0; e != t; e = e.parentNode)
            n++;
        return n
    }
    if (e.querySelectorAll && "number" == typeof e.body.scrollHeight) {
        var n, i, r, o, s, a, l = e.body, c = e.querySelectorAll("body, body > *, body > * > *, body > * > * > *"), u = l.getElementsByTagName("*").length, E = (document.body.scrollHeight,
        Number.MIN_VALUE);
        for (n = 0,
        i = Math.min(7e3, c.length); i > n; n++)
            r = c[n],
            s = CE2.getStyle(r),
            0 != r.clientWidth && 0 != r.clientHeight && "none" != s.display && "hidden" != s.visibility && "visible" != s.overflow && "visible" != s.overflowY && "hidden" != s.overflow && "hidden" != s.overflowY && (r.getElementsByTagName("*").length / u < .5 || r.clientHeight > window.innerHeight || (o = t(r, l),
            (!a || o > E) && (a = r,
            E = o)));
        return a
    }
}
,
"undefined" == typeof CE2 && (CE2 = {}),
CE2.S16_0 = 32768,
CE2.Package = function() {
    for (var e, t, n, i, r = [], o = {}, s = arguments, a = 0, l = s.length; l > a; a++)
        e = s[a],
        t = e[0],
        n = e[1],
        i = e[2],
        r.push(t),
        o[t] = {
            t: n,
            s: i
        };
    this.props = o,
    this.propList = r,
    this.overBudget = [],
    this.surplus = 0
}
,
CE2.Package.prototype = {
    set: function(e, t) {
        var n = this.props[e]
          , i = 0;
        n && ("s" == n.t ? (n.ov = t,
        n.v = t + "" ? CE2.utf8Trim(t + "", 255) : "",
        i = n.s - n.v.length,
        this.surplus += i,
        0 > i && this.overBudget.push(n)) : (n.ov = t,
        n.v = isNaN(parseInt(t, 10)) ? 0 : parseInt(t, 10)))
    },
    trimStrings: function() {
        var e = this.surplus
          , t = this.overBudget;
        if (!(e >= 0)) {
            var n = Math.abs(e) / t.length
              , i = Math.floor(n) == n ? 0 : 1;
            n = Math.floor(n);
            for (var r = 0, o = t.length, s = null; o > r; r++)
                s = t[r],
                s.v = CE2.utf8Trim(s.v, s.v.length - n - i),
                i && (i = 0)
        }
    },
    toString: function() {
        this.trimStrings();
        for (var e, t, n = this.props, i = this.propList, r = [], o = 0, s = i.length; s > o; o++)
            e = n[i[o]],
            t = e.v,
            "s" == e.t ? null == t ? r.push("\x00") : (r.push(CE2.pack(1, t.length)),
            r.push(t)) : r.push(null == t ? CE2.pack(e.s, 0) : CE2.pack(e.s, t));
        return r.join("")
    }
},
CE2.pack = function(e, t) {
    for (var n = "", i = 0; e > i; i++)
        n += String.fromCharCode(t >> 8 * i & 255);
    return n
}
,
CE2.utf8 = function(e) {
    return unescape(encodeURIComponent(e))
}
,
CE2.utf8Trim = function(e, t) {
    var n = e.substr(0, t)
      , i = CE2.utf8(n);
    if (i == n)
        return n;
    for (var r = n.length - 1; i.length > t; r--)
        i = CE2.utf8(n.substr(0, r));
    return i
}
,
CE2.base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
CE2.base64 = function(e) {
    for (var t, n, i, r, o, s, a, l = CE2.base64Alphabet, c = [], u = 0, E = e.length; E > u; )
        t = e.charCodeAt(u++),
        n = e.charCodeAt(u++),
        i = e.charCodeAt(u++),
        r = t >> 2,
        o = (3 & t) << 4 | n >> 4,
        s = (15 & n) << 2 | i >> 6,
        a = 63 & i,
        isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64),
        c.push(l.charAt(r) + l.charAt(o)),
        64 != s && (c.push(l.charAt(s)),
        64 != a && c.push(l.charAt(a)));
    return c.join("")
}
,
"undefined" == typeof CE2 && (CE2 = {}),
CE2.getBox = function(e, t, n) {
    if (t = t || {},
    "AREA" == e.nodeName) {
        var i = CE2.boxForArea(e);
        i && (t.left = i.left,
        t.top = i.top,
        t.width = i.width,
        t.height = i.height)
    } else if (e.getBoundingClientRect) {
        var i = e.getBoundingClientRect()
          , r = CE2.scroll();
        t.left = Math.floor(i.left + r.left),
        t.top = Math.floor(i.top + r.top),
        CE2.webkit && CE2.webkitVersion < 533 && "relative" == e.style.position && (t.left += parseInt(e.style.left, 10),
        t.top += parseInt(e.style.top, 10)),
        t.width = Math.floor(i.width || i.right - i.left),
        t.height = Math.floor(i.height || i.bottom - i.top)
    } else {
        t.width = e.offsetWidth,
        t.height = e.offsetHeight;
        var o = e
          , s = 0
          , a = 0;
        do
            s += o.offsetLeft || 0,
            a += o.offsetTop || 0,
            o = o.offsetParent;
        while (o);t.left = Math.floor(s),
        t.top = Math.floor(a)
    }
    if (t.pageX = t.left,
    t.pageY = t.top,
    n) {
        var l = CE2.getBox(n);
        t.left -= l.pageX,
        t.top -= l.pageY
    }
    return t
}
,
CE2.boxForArea = function(e) {
    var t = CE2.imageForArea(e);
    if (t) {
        var n = CE2.getBox(t)
          , i = CE2.areaBounds(e, n);
        return i ? {
            left: n.left + i.left,
            top: n.top + i.top,
            width: i.width,
            height: i.height
        } : void 0
    }
}
,
CE2.imageForArea = function(e) {
    var t, n, i = RegExp("(^|#)" + e.parentNode.name, "i"), r = e.ownerDocument.getElementsByTagName("IMG");
    for (t = 0; n = r[t++]; )
        if (i.test(n.useMap))
            return n
}
,
CE2.areaBounds = function(e, t) {
    var n, i, r, o = CE2.areaLength, s = Math.min(t.width, t.height), a = CE2.map(CE2.strip(e.coords, !0).split(/[^\d\.%]+/), function(e) {
        return o(e, s)
    });
    if (!/circle/i.test(e.shape)) {
        n = [],
        i = [];
        for (var l = 0, c = a.length; c > l; l++)
            l % 2 ? i.push(a[l]) : n.push(a[l]);
        var u = Math.min.apply(null, n)
          , E = Math.max.apply(null, n)
          , h = Math.min.apply(null, i)
          , C = Math.max.apply(null, i);
        return {
            left: u,
            top: h,
            width: E - u,
            height: C - h
        }
    }
    return a.length >= 3 ? (n = a[0],
    i = a[1],
    r = a[2],
    {
        left: n - r,
        top: i - r,
        width: 2 * r,
        height: 2 * r
    }) : void 0
}
,
CE2.areaLength = function(e, t) {
    var n = parseInt(e, 10);
    return -1 != e.indexOf("%") && (n *= .01 * t),
    isNaN(n) ? null : n
}
,
CE2.getPageCoords = function(e) {
    e.pageX = e.left,
    e.pageY = e.top;
    var t, n;
    e.parentID && (t = CE2.d.getElementById(e.parentID + "")) && (n = CE2.getBox(t),
    e.pageX += n.pageX,
    e.pageY += n.pageY)
}
,
"undefined" == typeof CE2 && (CE2 = {}),
CE2.fingerprint = function(e) {
    var t, n, i, r, o, s = {
        type: CE2.tagTypes[e.nodeName.toLowerCase()] || 0
    };
    return (t = CE2.getName(e)) && (s.name = t),
    (n = CE2.getData(e)) && (s.data = n),
    (i = e.getAttribute("id")) && (s.id = i),
    (r = CE2.getCEID(e)) && (s.ceid = r),
    (o = CE2.getParentID(e)) && (s.parentID = o),
    CE2.getBox(e, s, o ? e.parentNode : null),
    s
}
,
CE2.getParentID = function(e) {
    var t = e.parentNode
      , n = null;
    return t && t.getAttribute && t != e.ownerDocument.body ? (n = t.id) && t.ownerDocument.getElementById(n) == t ? n : CE2.getCEID(t) || null : void 0
}
,
CE2.getCEID = function(e) {
    return e.getAttribute("ceid") || e.getAttribute("data-ceid")
}
,
CE2.IGNORE_HREF = /^\s*javascript:|^\s*#\s*$/,
CE2.getName = function(e) {
    var t, n;
    return (t = e.getAttribute("cename")) ? t : (t = e.getAttribute("ceid")) ? t : (t = "SELECT" != e.nodeName && e.getAttribute("value")) ? t : (t = e.getAttribute("title")) ? t : (t = e.getAttribute("alt")) ? t : (t = e.getAttribute("name")) ? t : "A" == e.nodeName && (t = CE2.innerTextName(e)) ? t : (t = CE2.href(e)) && (n = CE2.href(e),
    n && !CE2.IGNORE_HREF.test(n)) ? new CE2.URI(t).simplify() : (t = e.getAttribute("src")) ? new CE2.URI(t).simplify() : (t = CE2.innerTextName(e)) ? t : (t = e.getAttribute("id")) ? t : (t = CE2.formatClass(e)) ? t : ""
}
,
CE2.getData = function(e) {
    var t;
    switch (e.nodeName) {
    case "A":
        if (t = CE2.href(e),
        t && !CE2.IGNORE_HREF.test(t))
            return new CE2.URI(e.href).simplify();
        if (e.className)
            return "@#" + CE2.formatClass(e);
        break;
    case "IMG":
    case "IFRAME":
    case "EMBED":
        return new CE2.URI(e.src).simplify();
    case "OBJECT":
        return new CE2.URI(e.data).simplify();
    case "INPUT":
    case "SELECT":
    case "TEXTAREA":
        return e.name;
    default:
        return CE2.formatClass(e)
    }
}
,
CE2.innerText = function(e) {
    function t(e, t) {
        var i, r;
        for (i = 0; r = t[i++]; )
            e = e.replace(r[n], "");
        return e
    }
    var n = void 0 === e.textContent ? "innerText" : "textContent"
      , i = e[n].substr(0, 16384);
    return i = t(i, e.getElementsByTagName("SCRIPT")),
    i = t(i, e.getElementsByTagName("NOSCRIPT"))
}
,
CE2.innerTextName = function(e, t) {
    var n = CE2.strip(CE2.strip(CE2.innerText(e), !0).substr(0, t || 100));
    return CE2.strip(n.replace(/[\ud800-\udbff\udc00-\udfff]+$/, ""))
}
,
CE2.tagTypes = {
    a: 3,
    abbr: 4,
    acronym: 5,
    address: 6,
    applet: 7,
    area: 8,
    b: 9,
    base: 10,
    basefont: 11,
    bdo: 12,
    big: 13,
    blockquote: 14,
    body: 15,
    br: 16,
    button: 17,
    caption: 18,
    center: 19,
    cite: 20,
    code: 21,
    col: 22,
    colgroup: 23,
    dd: 24,
    del: 25,
    dfn: 26,
    dir: 27,
    div: 28,
    dl: 29,
    dt: 30,
    em: 31,
    fieldset: 32,
    font: 33,
    form: 34,
    frame: 35,
    frameset: 36,
    head: 37,
    h1: 38,
    h2: 38,
    h3: 38,
    h4: 38,
    h5: 38,
    h6: 38,
    hr: 38,
    html: 39,
    i: 40,
    iframe: 41,
    img: 42,
    input: 43,
    ins: 44,
    kbd: 45,
    label: 46,
    legend: 47,
    li: 48,
    link: 49,
    map: 50,
    menu: 51,
    meta: 52,
    noframes: 53,
    noscript: 54,
    object: 55,
    embed: 55,
    ol: 56,
    optgroup: 57,
    option: 58,
    p: 59,
    param: 60,
    pre: 61,
    q: 62,
    s: 63,
    samp: 64,
    script: 65,
    select: 66,
    small: 67,
    span: 68,
    strike: 69,
    strong: 70,
    style: 71,
    sub: 72,
    sup: 73,
    table: 74,
    tbody: 75,
    td: 76,
    textarea: 77,
    tfoot: 78,
    th: 79,
    thead: 80,
    title: 81,
    tr: 82,
    tt: 83,
    u: 84,
    ul: 85,
    "var": 86,
    article: 87,
    aside: 88,
    audio: 89,
    bdi: 90,
    canvas: 91,
    command: 92,
    details: 93,
    figcaption: 94,
    figure: 95,
    footer: 96,
    header: 97,
    hgroup: 98,
    keygen: 99,
    mark: 100,
    meter: 101,
    nav: 102,
    output: 103,
    progress: 104,
    rp: 105,
    rt: 106,
    ruby: 107,
    section: 108,
    summary: 109,
    time: 110,
    video: 111,
    "(custom)": 255
},
"undefined" == typeof CE2 && (CE2 = {}),
CE2.URI.prototype.join = function(e) {
    var t = new CE2.URI(this)
      , n = this.path;
    return "string" == typeof e && (e = new CE2.URI(e)),
    e.isURL() ? new CE2.URI(e) : (e.isAbsolute() ? n = e.path : n ? (n = n.split("/"),
    n.pop(),
    n = e.path ? n.concat(e.path.split("/")) : n,
    n = n.join("/")) : n = this.isURL() ? "/" + e.path : e.path,
    t.path = n,
    t.qs = e.qs,
    t.hash = e.hash,
    t)
}
,
CE2.URI.prototype.normalize = function() {
    if (this.path) {
        var e;
        CE2.ie && CE2.ieVersion < 9 ? (e = [],
        "/" == this.path.charAt(0) && e.push(""),
        e = e.concat(this.path.split(/\/+/g)),
        "/" == this.path.charAt(this.path.length - 1) && e.push("")) : e = this.path.split(/\/+/g);
        var t, n = 0;
        do
            if (t = e.length - 1,
            ".." == e[n + 1])
                "" == e[n] && 0 == n ? e.splice(n + 1, 1) : (e.splice(n, 2),
                n -= 1);
            else if ("." == e[n]) {
                if (0 == t)
                    break;
                e.splice(n, 1)
            } else
                n++;
        while (t >= n);this.path = e.join("/")
    }
}
,
CE2.URI.prototype.simplify = function(e) {
    var t, n = [];
    if ("file" == this.protocol ? t = this : CE2.ie ? t = e ? e.join(this) : this : (e = e || new CE2.URI(CE2.d.baseURI),
    t = e.join(this)),
    t.normalize(),
    t.host && n.push(t.host.replace(/^www\./, "")),
    null != t.port && n.push(":" + t.port),
    "/" == t.path || /^\/(default|home|index)\b[^\/]*$/i.test(t.path) ? (t.qs || t.hash) && n.push("/") : n.push(t.path),
    t.qs) {
        var i = [];
        CE2.each(t.qs, function(e, t) {
            e && !/(^sess|^sid$|^phpsessid$|^jsessionid$|^__VIEWSTATE$)/i.test(t) && i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
        }),
        i.length && n.push("?" + i.join("&"))
    }
    return t.hash && n.push("#" + t.hash),
    n.join("")
}
,
CE2.URI.prototype.sameOrigin = function(e) {
    return e ? ("string" == typeof e && (e = new CE2.URI(e)),
    null == e.host || e.host == this.host && e.port == this.port && e.protocol == this.protocol) : !1
}
,
CE2.Tracker = function(e, t, n) {
    if (this.id = e,
    this.version = t,
    this.liveSessions = n,
    this.location = new CE2.URI(window.location.href),
    this.startTime = (new Date).getTime(),
    this.ignoredElements = CE2.ignoredElements.concat(CE2.findByClass("-ce-ignore")),
    this.clickCaptors = CE2.clickCaptors.concat(CE2.findByClass("-ce-capture")),
    this.trackURL = "https:" == window.location.protocol ? CE2.TRACKING_DEST_SECURE : CE2.TRACKING_DEST,
    this.liveURL = "https:" == window.location.protocol ? CE2.LIVE_DEST_SECURE : CE2.LIVE_DEST,
    this.opaqueElement = null,
    this.lastClicked = null,
    this.handlers = {},
    CE2.each(["onOver", "onOut", "onBlur", "onUnload", "onClickFrame", "onClick", "foundAnchor"], function(e) {
        this.handlers[e] = CE2.bind(this, e)
    }, this),
    this.handleEvents(),
    this.isReturning = function() {
        var e = CE2.qs2obj(document.cookie.replace(/;\s*/g, "&"));
        return e ? parseInt(e._ceir, 10) || parseInt(e.is_returning, 10) || 0 : void 0
    }(),
    "undefined" == typeof CE_NO_COOKIES || !CE_NO_COOKIES) {
        var i, r = new Date;
        i = "number" == typeof CE_COOKIE_EXPIRE_DAYS ? new Date(r.getFullYear(),r.getMonth(),r.getDate() + CE_COOKIE_EXPIRE_DAYS).toUTCString() : new Date(r.getFullYear() + 5,r.getMonth(),r.getDate()).toUTCString(),
        document.cookie = "_ceir=1;domain=." + this.location.host.replace(/^www\./, "") + ";expires=" + i
    }
    this.visit()
}
,
CE2.Tracker.prototype = {
    handleEvents: function() {
        var e = this.handlers;
        (this.liveSessions || this.version && this.version >= 2) && (CE2.initScrollTracking(),
        this.trackScrollInterval = setInterval(CE2.bind(this, "trackScroll"), 100)),
        CE2.listen(document, "mousedown", e.onClick),
        CE2.each(["FRAME", "IFRAME", "OBJECT", "EMBED"], function(t, n) {
            var n, i, r, o = document.body.getElementsByTagName(t);
            for (n = 0; i = o[n++]; )
                /I?FRAME/.test(i.nodeName) && this.location.sameOrigin(i.src) ? CE2.listen(CE2.ieVersion < 9 ? i.contentWindow.document : i.contentWindow, "mousedown", e.onClickFrame) : (r = CE2.getBox(i),
                r.width > 1 && r.height > 1 && (CE2.listen(i, "mouseover", e.onOver),
                CE2.listen(i, "mouseout", e.onOut)))
        }, this),
        CE2.listen(window, "blur", e.onBlur),
        CE2.listen(window, CE2.opera ? "unload" : "beforeunload", e.onUnload)
    },
    cleanup: function() {
        var e = this.handlers;
        clearInterval(this.trackScrollInterval),
        CE2.removeListener(document, "mousedown", e.onClick),
        CE2.removeListener(window, "blur", e.onBlur),
        CE2.removeListener(window, CE2.opera ? "unload" : "beforeunload", e.onUnload),
        CE2.each(["FRAME", "IFRAME", "OBJECT", "EMBED"], function(t, n) {
            var n, i, r, o = document.body.getElementsByTagName(t);
            for (n = 0; i = o[n++]; )
                /i?frame/i.test(i.nodeName) && this.location.sameOrigin(i.src) ? CE2.removeListener(CE2.ieVersion < 9 ? i.contentWindow.document : i.contentWindow, "mousedown", e.onClickFrame) : (r = CE2.getBox(i),
                r.width > 1 && r.height > 1 && (CE2.removeListener(i, "mouseover", e.onOver),
                CE2.removeListener(i, "mouseout", e.onOut)))
        }, this)
    },
    ts: function() {
        return Math.floor((new Date).getTime() / 1e3)
    },
    visit: function() {
        var e, t, n = this.liveSessions;
        if (n)
            for (e = 0; t = n[e++]; )
                this.send("v", 0, this.ts())
    },
    click: function(e, t, n) {
        var i, r, o, s, a, l, c, u, E;
        if (e != document && e != document.body && e != document.documentElement && !this.isIgnored(e) && ((E = CE2.arrayContains(this.clickCaptors, e)) && (e = E),
        "OPTION" == e.nodeName && (e = e.parentNode),
        !CE2.isVML(e))) {
            for (this.lastClicked = e,
            t && (t.srcElement || t.target) && (i = t),
            r = new CE2.Package(["type", "i", 1],["left", "i", 2],["top", "i", 2],["width", "i", 2],["height", "i", 2],["id", "s", 40],["ceid", "s", 40],["name", "s", 100],["data", "s", 180],["parentID", "s", 40],["x", "i", 1],["y", "i", 1],["windowWidth", "i", 1],["timeToClick", "i", 1],["isReturning", "i", 1],["referrer", "s", 100],["googleCampaignSource", "s", 100],["googleCampaignMedium", "s", 100],["googleCampaignTerm", "s", 100],["googleCampaignContent", "s", 100],["googleCampaignName", "s", 100],["user1", "s", 100],["user2", "s", 100],["user3", "s", 100],["user4", "s", 100],["user5", "s", 100],["flags", "i", 1]),
            1 === e.nodeType ? o = CE2.fingerprint(e) : (r.set("type", CE2.tagTypes["(custom)"]),
            r.set("flags", 1),
            CE2.getPageCoords(e),
            o = e),
            CE2.each(o, function(e, t) {
                r.set(t, e)
            }),
            i ? (s = CE2.eventCoords(i),
            t = s[0] - o.pageX,
            n = s[1] - o.pageY) : null == t && (t = o.width / 2,
            n = o.height / 2),
            r.set("x", Math.floor(255 * t / o.width)),
            r.set("y", Math.floor(255 * n / o.height)),
            a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth,
            0 == a ? r.set("windowWidth", 0) : r.set("windowWidth", Math.floor(a / 100) + 1),
            r.set("timeToClick", CE2.getTimeRange((new Date).getTime() - this.startTime)),
            r.set("isReturning", this.isReturning),
            r.set("referrer", new CE2.URI(document.referrer).simplify()),
            (l = this.location.qs) && (r.set("googleCampaignSource", l.utm_source || ""),
            r.set("googleCampaignMedium", l.utm_medium || ""),
            r.set("googleCampaignTerm", l.utm_term || ""),
            r.set("googleCampaignContent", l.utm_content || ""),
            r.set("googleCampaignName", l.utm_campaign || "")),
            u = 1; 5 >= u; u++)
                c = CE2.userData[u],
                c && r.set("user" + u, c);
            this.send("c", r)
        }
    },
    send: function(e, t, n) {
        var i, r, o, s = this.liveSessions, a = t && CE2.base64("" + t);
        if ("v" != e && this.id && (o = document.createElement("img"),
        o.src = this.url(e, a, n)),
        s)
            for (i = 0; r = s[i++]; )
                o = document.createElement("img"),
                o.src = this.url(e, a, n, r)
    },
    url: function(e, t, n, i) {
        var r = i || this.id
          , t = t || ""
          , n = n ? n + (t && "&") : "";
        return (i ? this.liveURL : this.trackURL) + e + "?" + r + "&" + n + t
    },
    isIgnored: function(e) {
        return CE2.arrayContains(this.ignoredElements, e)
    },
    onClick: function(e, t) {
        var n, i;
        if (CE2.ieVersion && (CE2.ieVersion < 9 || CE2.ieQuirksMode)) {
            if (1 != e.button)
                return
        } else if (0 != e.button)
            return;
        t ? (n = CE2.eventWindow(e),
        i = n.frameElement) : i = e.srcElement || e.target,
        t ? this.click.apply(this, [i].concat(CE2.eventCoords(e, n))) : this.click(i, e)
    },
    onClickFrame: function(e) {
        this.onClick(e, !0)
    },
    onOver: function(e) {
        var t = e.srcElement || e.target;
        this.isIgnored(t) || (this.opaqueElement = t)
    },
    onOut: function(e) {
        this.isIgnored(e.srcElement || e.target) || (this.opaqueElement = null)
    },
    onBlur: function() {
        var e = this.opaqueElement;
        e && e != this.lastClicked && (this.click(e),
        this.opaqueElement = null)
    },
    onUnload: function() {
        var e = this.opaqueElement;
        this.isIgnored(e) || e && (this.click(e),
        this.opaqueElement = null)
    },
    trackScroll: function() {
        var e = CE2.scroll();
        CE2.shouldRecordScroll(e) && CE2.findAnchor(e, this.handlers.foundAnchor)
    },
    foundAnchor: function(e, t) {
        var n, i = new CE2.Package(["screenTop", "i", 2],["screenHeight", "i", 2],["screenTopDistanceFromAnchor", "i", 2],["screenBottomDistanceFromAnchor", "i", 2],["type", "i", 1],["left", "i", 2],["top", "i", 2],["width", "i", 2],["height", "i", 2],["id", "s", 40],["ceid", "s", 40],["name", "s", 100],["data", "s", 180],["parentID", "s", 40]);
        i.set("screenTop", e.top),
        i.set("screenHeight", e.height),
        t && (n = CE2.fingerprint(t),
        i.set("screenTopDistanceFromAnchor", e.top - n.pageY + CE2.S16_0),
        i.set("screenBottomDistanceFromAnchor", e.top + e.height - n.pageY + CE2.S16_0),
        CE2.each(n, function(e, t) {
            i.set(t, e)
        })),
        this.send("s", i, this.ts())
    }
},
CE2.tracker && CE2.tracker.cleanup(),
CE2.tracker = new CE2.Tracker(CE2.testID,CE2.testVersion,CE2.sessionIDs);
