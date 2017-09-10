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
    var n, r;
    if (t)
        if (CE2.sampleVisit(t))
            CE2.testID = t.id,
            CE2.testVersion = t.v || 1;
        else if (!e)
            return;
    e && (CE2.sessionIDs = e),
    n = CE2.d.createElement("script"),
    r = "crazyegg_track.js"
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



