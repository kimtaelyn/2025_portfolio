/* jquery.nicescroll 3.6.0 InuYaksa*2014 MIT http://nicescroll.areaaperta.com */
(function (f) {
    "function" === typeof define && define.amd ? define(["jquery"], f) : f(jQuery)
})(function (f) {
    var y = !1, D = !1, N = 0, O = 2E3, x = 0, H = ["webkit", "ms", "moz", "o"], s = window.requestAnimationFrame || !1, t = window.cancelAnimationFrame || !1;
    if (!s)
        for (var P in H) {
            var E = H[P];
            s || (s = window[E + "RequestAnimationFrame"]);
            t || (t = window[E + "CancelAnimationFrame"] || window[E + "CancelRequestAnimationFrame"])
        }
    var v = window.MutationObserver || window.WebKitMutationObserver || !1, I = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {top: 0, right: 0, left: 0, bottom: 0},
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function () {
            var f = document.getElementsByTagName("script"), f = f[f.length - 1].src.split("?")[0];
            return 0 < f.split("/").length ? f.split("/").slice(0, -1).join("/") +
            "/" : ""
        }(),
        preventmultitouchscrolling: !0
    }, F = !1, Q = function () {
        if (F)
            return F;
        var f = document.createElement("DIV"), c = f.style, h = navigator.userAgent, m = navigator.platform, d = {haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document};
        d.isopera = "opera" in window;
        d.isopera12 = d.isopera && "getUserMedia" in navigator;
        d.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
        d.isie = "all" in document && "attachEvent" in f && !d.isopera;
        d.isieold = d.isie && !("msInterpolationMode" in c);
        d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || 7 == document.documentMode);
        d.isie8 = d.isie && "documentMode" in document && 8 == document.documentMode;
        d.isie9 = d.isie && "performance" in window && 9 <= document.documentMode;
        d.isie10 = d.isie && "performance" in window && 10 == document.documentMode;
        d.isie11 = "msRequestFullscreen" in f && 11 <= document.documentMode;
        d.isie9mobile = /iemobile.9/i.test(h);
        d.isie9mobile && (d.isie9 = !1);
        d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(h);
        d.ismozilla = "MozAppearance" in c;
        d.iswebkit = "WebkitAppearance" in c;
        d.ischrome = "chrome" in window;
        d.ischrome22 = d.ischrome && d.haspointerlock;
        d.ischrome26 = d.ischrome && "transition" in c;
        d.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
        d.hasmstouch = window.MSPointerEvent || !1;
        d.hasw3ctouch = window.PointerEvent || !1;
        d.ismac = /^mac$/i.test(m);
        d.isios = d.cantouch && /iphone|ipad|ipod/i.test(m);
        d.isios4 = d.isios && !("seal" in Object);
        d.isios7 = d.isios && "webkitHidden" in document;
        d.isandroid = /android/i.test(h);
        d.haseventlistener = "addEventListener" in f;
        d.trstyle = !1;
        d.hastransform = !1;
        d.hastranslate3d = !1;
        d.transitionstyle = !1;
        d.hastransition = !1;
        d.transitionend = !1;
        m = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
        for (h = 0; h < m.length; h++)
            if ("undefined" != typeof c[m[h]]) {
                d.trstyle = m[h];
                break
            }
        d.hastransform = !!d.trstyle;
        d.hastransform && (c[d.trstyle] = "translate3d(1px,2px,3px)", d.hastranslate3d = /translate3d/.test(c[d.trstyle]));
        d.transitionstyle = !1;
        d.prefixstyle = "";
        d.transitionend = !1;
        for (var m =
            "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), n = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), p = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), h = 0; h < m.length; h++)
            if (m[h] in c) {
                d.transitionstyle = m[h];
                d.prefixstyle = n[h];
                d.transitionend = p[h];
                break
            }
        d.ischrome26 && (d.prefixstyle = n[1]);
        d.hastransition = d.transitionstyle;
        a: {
            h = ["-webkit-grab", "-moz-grab", "grab"];
            if (d.ischrome && !d.ischrome22 || d.isie)
                h = [];
            for (m = 0; m < h.length; m++)
                if (n = h[m], c.cursor = n, c.cursor == n) {
                    c = n;
                    break a
                }
            c = "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
        }
        d.cursorgrabvalue = c;
        d.hasmousecapture = "setCapture" in f;
        d.hasMutationObserver = !1 !== v;
        return F = d
    }, R = function (k, c) {
        function h() {
            var b = a.doc.css(e.trstyle);
            return b && "matrix" == b.substr(0, 6) ? b.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
        }

        function m() {
            var b = a.win;
            if ("zIndex" in b)
                return b.zIndex();
            for (; 0 < b.length && 9 != b[0].nodeType;) {
                var g =
                    b.css("zIndex");
                if (!isNaN(g) && 0 != g)
                    return parseInt(g);
                b = b.parent()
            }
            return !1
        }

        function d(b, g, q) {
            g = b.css(g);
            b = parseFloat(g);
            return isNaN(b) ? (b = w[g] || 0, q = 3 == b ? q ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1, a.isie8 && b && (b += 1), q ? b : 0) : b
        }

        function n(b, g, q, c) {
            a._bind(b, g, function (a) {
                a = a ? a : window.event;
                var c = {
                    original: a,
                    target: a.target || a.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function () {
                        a.preventDefault ? a.preventDefault() :
                            a.returnValue = !1;
                        return !1
                    },
                    stopImmediatePropagation: function () {
                        a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.cancelBubble = !0
                    }
                };
                "mousewheel" == g ? (c.deltaY = -.025 * a.wheelDelta, a.wheelDeltaX && (c.deltaX = -.025 * a.wheelDeltaX)) : c.deltaY = a.detail;

                return q.call(b, c)
            }, c)
        }

        function p(b, g, c) {
            var d, e;
            0 == b.deltaMode ? (d = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaX), e = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaY)) : 1 == b.deltaMode && (d = -Math.floor(b.deltaX * a.opt.mousescrollstep), e = -Math.floor(b.deltaY * a.opt.mousescrollstep));
            g && a.opt.oneaxismousemode && 0 == d && e && (d = e, e = 0, c && (0 > d ? a.getScrollLeft() >= a.page.maxw : 0 >= a.getScrollLeft()) && (e = d, d = 0));
            d && (a.scrollmom && a.scrollmom.stop(), a.lastdeltax += d, a.debounced("mousewheelx", function () {
                var b = a.lastdeltax;
                a.lastdeltax = 0;
                a.rail.drag || a.doScrollLeftBy(b)
            }, 15));
            if (e) {
                if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive)
                    if (0 > e) {
                        if (a.getScrollTop() >= a.page.maxh)
                            return !0
                    } else if (0 >= a.getScrollTop())
                        return !0;
                a.scrollmom && a.scrollmom.stop();
                a.lastdeltay += e;
                a.debounced("mousewheely",
                    function () {
                        var b = a.lastdeltay;
                        a.lastdeltay = 0;
                        a.rail.drag || a.doScrollBy(b)
                    }, 15)
            }


            deltaYnum = b.deltaY;
            deltaXnum = b.deltaX;


            b.stopImmediatePropagation();
            return b.preventDefault()
        }

        var a = this;
        this.version = "3.6.0";
        this.name = "nicescroll";
        this.me = c;
        this.opt = {doc: f("body"), win: !1};
        f.extend(this.opt, I);
        this.opt.snapbackspeed = 80;
        if (k)
            for (var G in a.opt)
                "undefined" != typeof k[G] && (a.opt[G] = k[G]);
        this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
        this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
        this.haswrapper =
            !1 !== a.opt.win;
        this.win = a.opt.win || (this.ispage ? f(window) : this.doc);
        this.docscroll = this.ispage && !this.haswrapper ? f(window) : this.win;
        this.body = f("body");
        this.iframe = this.isfixed = this.viewport = !1;
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
        this.istextarea = "TEXTAREA" == this.win[0].nodeName;
        this.forcescreen = !1;
        this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
        this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick =
            this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
        this.scroll = {x: 0, y: 0};
        this.scrollratio = {x: 0, y: 0};
        this.cursorheight = 20;
        this.scrollvaluemax = 0;
        this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : !0 === this.opt.rtlmode;
        this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
        do
            this.id = "ascrail" + O++;
        while (document.getElementById(this.id));
        this.hasmousefocus = this.hasfocus =
            this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
        this.visibility = !0;
        this.hidden = this.locked = this.railslocked = !1;
        this.cursoractive = !0;
        this.wheelprevented = !1;
        this.overflowx = a.opt.overflowx;
        this.overflowy = a.opt.overflowy;
        this.nativescrollingarea = !1;
        this.checkarea = 0;
        this.events = [];
        this.saved = {};
        this.delaylist = {};
        this.synclist = {};
        this.lastdeltay = this.lastdeltax = 0;
        this.detected = Q();
        var e = f.extend({}, this.detected);
        this.ishwscroll = (this.canhwscroll = e.hastransform &&
                a.opt.hwacceleration) && a.haswrapper;
        this.hasreversehr = this.isrtlmode && !e.iswebkit;
        this.istouchcapable = !1;
        !e.cantouch || e.isios || e.isandroid || !e.iswebkit && !e.ismozilla || (this.istouchcapable = !0, e.cantouch = !1);
        a.opt.enablemouselockapi || (e.hasmousecapture = !1, e.haspointerlock = !1);
        this.debounced = function (b, g, c) {
            var d = a.delaylist[b];
            a.delaylist[b] = g;
            d || setTimeout(function () {
                var g = a.delaylist[b];
                a.delaylist[b] = !1;
                g.call(a)
            }, c)
        };
        var r = !1;
        this.synched = function (b, g) {
            a.synclist[b] = g;
            (function () {
                r || (s(function () {
                    r = !1;
                    for (var b in a.synclist) {
                        var g = a.synclist[b];
                        g && g.call(a);
                        a.synclist[b] = !1
                    }
                }), r = !0)
            })();
            return b
        };
        this.unsynched = function (b) {
            a.synclist[b] && (a.synclist[b] = !1)
        };
        this.css = function (b, g) {
            for (var c in g)
                a.saved.css.push([b, c, b.css(c)]), b.css(c, g[c])
        };
        this.scrollTop = function (b) {
            return "undefined" == typeof b ? a.getScrollTop() : a.setScrollTop(b)
        };
        this.scrollLeft = function (b) {
            return "undefined" == typeof b ? a.getScrollLeft() : a.setScrollLeft(b)
        };
        var A = function (a, g, c, d, e, f, h) {
            this.st = a;
            this.ed = g;
            this.spd = c;
            this.p1 =
                d || 0;
            this.p2 = e || 1;
            this.p3 = f || 0;
            this.p4 = h || 1;
            this.ts = (new Date).getTime();
            this.df = this.ed - this.st
        };
        A.prototype = {
            B2: function (a) {
                return 3 * a * a * (1 - a)
            }, B3: function (a) {
                return 3 * a * (1 - a) * (1 - a)
            }, B4: function (a) {
                return (1 - a) * (1 - a) * (1 - a)
            }, getNow: function () {
                var a = 1 - ((new Date).getTime() - this.ts) / this.spd, g = this.B2(a) + this.B3(a) + this.B4(a);
                return 0 > a ? this.ed : this.st + Math.round(this.df * g)
            }, update: function (a, g) {
                this.st = this.getNow();
                this.ed = a;
                this.spd = g;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st;
                return this
            }
        };
        if (this.ishwscroll) {
            this.doc.translate = {x: 0, y: 0, tx: "0px", ty: "0px"};
            e.hastranslate3d && e.isios && this.doc.css("-webkit-backface-visibility", "hidden");
            this.getScrollTop = function (b) {
                if (!b) {
                    if (b = h())
                        return 16 == b.length ? -b[13] : -b[5];
                    if (a.timerscroll && a.timerscroll.bz)
                        return a.timerscroll.bz.getNow()
                }
                return a.doc.translate.y
            };
            this.getScrollLeft = function (b) {
                if (!b) {
                    if (b = h())
                        return 16 == b.length ? -b[12] : -b[4];
                    if (a.timerscroll && a.timerscroll.bh)
                        return a.timerscroll.bh.getNow()
                }
                return a.doc.translate.x
            };
            this.notifyScrollEvent =
                function (a) {
                    var g = document.createEvent("UIEvents");
                    g.initUIEvent("scroll", !1, !0, window, 1);
                    g.niceevent = !0;
                    a.dispatchEvent(g)
                };
            var K = this.isrtlmode ? 1 : -1;
            e.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function (b, g) {
                a.doc.translate.y = b;
                a.doc.translate.ty = -1 * b + "px";
                a.doc.css(e.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                g || a.notifyScrollEvent(a.win[0])
            }, this.setScrollLeft = function (b, g) {
                a.doc.translate.x = b;
                a.doc.translate.tx = b * K + "px";
                a.doc.css(e.trstyle, "translate3d(" +
                    a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                g || a.notifyScrollEvent(a.win[0])
            }) : (this.setScrollTop = function (b, g) {
                a.doc.translate.y = b;
                a.doc.translate.ty = -1 * b + "px";
                a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                g || a.notifyScrollEvent(a.win[0])
            }, this.setScrollLeft = function (b, g) {
                a.doc.translate.x = b;
                a.doc.translate.tx = b * K + "px";
                a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                g || a.notifyScrollEvent(a.win[0])
            })
        } else
            this.getScrollTop =
                function () {
                    return a.docscroll.scrollTop()
                }, this.setScrollTop = function (b) {
                return a.docscroll.scrollTop(b)
            }, this.getScrollLeft = function () {
                return a.detected.ismozilla && a.isrtlmode ? Math.abs(a.docscroll.scrollLeft()) : a.docscroll.scrollLeft()
            }, this.setScrollLeft = function (b) {
                return a.docscroll.scrollLeft(a.detected.ismozilla && a.isrtlmode ? -b : b)
            };
        this.getTarget = function (a) {
            return a ? a.target ? a.target : a.srcElement ? a.srcElement : !1 : !1
        };
        this.hasParent = function (a, g) {
            if (!a)
                return !1;
            for (var c = a.target || a.srcElement ||
                a || !1; c && c.id != g;)
                c = c.parentNode || !1;
            return !1 !== c
        };
        var w = {thin: 1, medium: 3, thick: 5};
        this.getDocumentScrollOffset = function () {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            }
        };
        this.getOffset = function () {
            if (a.isfixed) {
                var b = a.win.offset(), g = a.getDocumentScrollOffset();
                b.top -= g.top;
                b.left -= g.left;
                return b
            }
            b = a.win.offset();
            if (!a.viewport)
                return b;
            g = a.viewport.offset();
            return {top: b.top - g.top, left: b.left - g.left}
        };
        this.updateScrollBar =
            function (b) {
                if (a.ishwscroll)
                    a.rail.css({height: a.win.innerHeight() - (a.opt.railpadding.top + a.opt.railpadding.bottom)}), a.railh && a.railh.css({width: a.win.innerWidth() - (a.opt.railpadding.left + a.opt.railpadding.right)});
                else {
                    var g = a.getOffset(), c = g.top, e = g.left - (a.opt.railpadding.left + a.opt.railpadding.right), c = c + d(a.win, "border-top-width", !0), e = e + (a.rail.align ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width : d(a.win, "border-left-width")), f = a.opt.railoffset;
                    f && (f.top && (c += f.top), a.rail.align &&
                    f.left && (e += f.left));
                    a.railslocked || a.rail.css({
                        top: c,
                        left: e,
                        height: (b ? b.h : a.win.innerHeight()) - (a.opt.railpadding.top + a.opt.railpadding.bottom)
                    });
                    a.zoom && a.zoom.css({top: c + 1, left: 1 == a.rail.align ? e - 20 : e + a.rail.width + 4});
                    if (a.railh && !a.railslocked) {
                        c = g.top;
                        e = g.left;
                        if (f = a.opt.railhoffset)
                            f.top && (c += f.top), f.left && (e += f.left);
                        b = a.railh.align ? c + d(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : c + d(a.win, "border-top-width", !0);
                        e += d(a.win, "border-left-width");
                        a.railh.css({
                            top: b - (a.opt.railpadding.top +
                            a.opt.railpadding.bottom), left: e, width: a.railh.width
                        })
                    }
                }
            };
        this.doRailClick = function (b, g, c) {
            var e;
            a.railslocked || (a.cancelEvent(b), g ? (g = c ? a.doScrollLeft : a.doScrollTop, e = c ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (b.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y, g(e)) : (g = c ? a.doScrollLeftBy : a.doScrollBy, e = c ? a.scroll.x : a.scroll.y, b = c ? b.pageX - a.railh.offset().left : b.pageY - a.rail.offset().top, c = c ? a.view.w : a.view.h, g(e >= b ? c : -c)))
        };
        a.hasanimationframe = s;
        a.hascancelanimationframe =
            t;
        a.hasanimationframe ? a.hascancelanimationframe || (t = function () {
            a.cancelAnimationFrame = !0
        }) : (s = function (a) {
            return setTimeout(a, 15 - Math.floor(+new Date / 1E3) % 16)
        }, t = clearInterval);
        this.init = function () {
            a.saved.css = [];
            if (e.isie7mobile || e.isoperamini)
                return !0;
            e.hasmstouch && a.css(a.ispage ? f("html") : a.win, {"-ms-touch-action": "none"});
            a.zindex = "auto";
            a.zindex = a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : m() || "auto";
            !a.ispage && "auto" != a.zindex && a.zindex > x && (x = a.zindex);
            a.isie && 0 == a.zindex && "auto" == a.opt.zindex &&
            (a.zindex = "auto");
            if (!a.ispage || !e.cantouch && !e.isieold && !e.isie9mobile) {
                var b = a.docscroll;
                a.ispage && (b = a.haswrapper ? a.win : a.doc);
                e.isie9mobile || a.css(b, {"overflow-y": "hidden"});
                a.ispage && e.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(f("html"), {"overflow-y": "hidden"}) : "HTML" == a.doc[0].nodeName && a.css(f("body"), {"overflow-y": "hidden"}));
                !e.isios || a.ispage || a.haswrapper || a.css(f("body"), {"-webkit-overflow-scrolling": "touch"});
                var g = f(document.createElement("div"));
                g.css({
                    position: "relative",
                    top: 0,
                    "float": "right",
                    width: a.opt.cursorwidth,
                    height: "0px",
                    "background-color": a.opt.cursorcolor,
                    border: a.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": a.opt.cursorborderradius,
                    "-moz-border-radius": a.opt.cursorborderradius,
                    "border-radius": a.opt.cursorborderradius
                });
                g.hborder = parseFloat(g.outerHeight() - g.innerHeight());
                g.addClass("nicescroll-cursors");
                a.cursor = g;
                var c = f(document.createElement("div"));
                c.attr("id", a.id);
                c.addClass("nicescroll-rails nicescroll-rails-vr");
                var d, h, k = ["left", "right",
                    "top", "bottom"], J;
                for (J in k)
                    h = k[J], (d = a.opt.railpadding[h]) ? c.css("padding-" + h, d + "px") : a.opt.railpadding[h] = 0;
                c.append(g);
                c.width = Math.max(parseFloat(a.opt.cursorwidth), g.outerWidth());
                c.css({width: c.width + "px", zIndex: a.zindex, background: a.opt.background, cursor: "default"});
                c.visibility = !0;
                c.scrollable = !0;
                c.align = "left" == a.opt.railalign ? 0 : 1;
                a.rail = c;
                g = a.rail.drag = !1;
                !a.opt.boxzoom || a.ispage || e.isieold || (g = document.createElement("div"), a.bind(g, "click", a.doZoom), a.bind(g, "mouseenter", function () {
                    a.zoom.css("opacity",
                        a.opt.cursoropacitymax)
                }), a.bind(g, "mouseleave", function () {
                    a.zoom.css("opacity", a.opt.cursoropacitymin)
                }), a.zoom = f(g), a.zoom.css({
                    cursor: "pointer",
                    "z-index": a.zindex,
                    backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0px 0px"
                }), a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom), e.cantouch && a.opt.gesturezoom && (a.ongesturezoom = function (b) {
                    1.5 < b.scale && a.doZoomIn(b);
                    .8 > b.scale && a.doZoomOut(b);
                    return a.cancelEvent(b)
                }, a.bind(a.win, "gestureend", a.ongesturezoom)));
                a.railh = !1;
                var l;
                a.opt.horizrailenabled && (a.css(b, {"overflow-x": "hidden"}), g = f(document.createElement("div")), g.css({
                    position: "absolute",
                    top: 0,
                    height: a.opt.cursorwidth,
                    width: "0px",
                    "background-color": a.opt.cursorcolor,
                    border: a.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": a.opt.cursorborderradius,
                    "-moz-border-radius": a.opt.cursorborderradius,
                    "border-radius": a.opt.cursorborderradius
                }), e.isieold && g.css({overflow: "hidden"}), g.wborder = parseFloat(g.outerWidth() - g.innerWidth()),
                    g.addClass("nicescroll-cursors"), a.cursorh = g, l = f(document.createElement("div")), l.attr("id", a.id + "-hr"), l.addClass("nicescroll-rails nicescroll-rails-hr"), l.height = Math.max(parseFloat(a.opt.cursorwidth), g.outerHeight()), l.css({
                    height: l.height + "px",
                    zIndex: a.zindex,
                    background: a.opt.background
                }), l.append(g), l.visibility = !0, l.scrollable = !0, l.align = "top" == a.opt.railvalign ? 0 : 1, a.railh = l, a.railh.drag = !1);
                a.ispage ? (c.css({
                    position: "fixed",
                    top: "0px",
                    height: "100%"
                }), c.align ? c.css({right: "0px"}) : c.css({left: "0px"}),
                    a.body.append(c), a.railh && (l.css({
                    position: "fixed",
                    left: "0px",
                    width: "100%"
                }), l.align ? l.css({bottom: "0px"}) : l.css({top: "0px"}), a.body.append(l))) : (a.ishwscroll ? ("static" == a.win.css("position") && a.css(a.win, {position: "relative"}), b = "HTML" == a.win[0].nodeName ? a.body : a.win, f(b).scrollTop(0).scrollLeft(0), a.zoom && (a.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": c.width + 4
                }), b.append(a.zoom)), c.css({
                    position: "absolute",
                    top: 0
                }), c.align ? c.css({right: 0}) : c.css({left: 0}), b.append(c), l && (l.css({
                    position: "absolute",
                    left: 0, bottom: 0
                }), l.align ? l.css({bottom: 0}) : l.css({top: 0}), b.append(l))) : (a.isfixed = "fixed" == a.win.css("position"), b = a.isfixed ? "fixed" : "absolute", a.isfixed || (a.viewport = a.getViewport(a.win[0])), a.viewport && (a.body = a.viewport, 0 == /fixed|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, {position: "relative"})), c.css({position: b}), a.zoom && a.zoom.css({position: b}), a.updateScrollBar(), a.body.append(c), a.zoom && a.body.append(a.zoom), a.railh && (l.css({position: b}), a.body.append(l))), e.isios && a.css(a.win,
                    {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), e.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"), e.iswebkit && a.opt.disableoutline && a.win.css({outline: "none"}));
                !1 === a.opt.autohidemode ? (a.autohidedom = !1, a.rail.css({opacity: a.opt.cursoropacitymax}), a.railh && a.railh.css({opacity: a.opt.cursoropacitymax})) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ? (a.autohidedom = f().add(a.rail), e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)), a.railh && (a.autohidedom =
                    a.autohidedom.add(a.railh)), a.railh && e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = f().add(a.rail), a.railh && (a.autohidedom = a.autohidedom.add(a.railh))) : "cursor" == a.opt.autohidemode ? (a.autohidedom = f().add(a.cursor), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1, a.hide(), a.railslocked = !1);
                if (e.isie9mobile)
                    a.scrollmom = new L(a), a.onmangotouch = function () {
                        var b = a.getScrollTop(), c = a.getScrollLeft();
                        if (b == a.scrollmom.lastscrolly && c == a.scrollmom.lastscrollx)
                            return !0;
                        var g = b - a.mangotouch.sy, e = c - a.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(e, 2) + Math.pow(g, 2)))) {
                            var d = 0 > g ? -1 : 1, f = 0 > e ? -1 : 1, q = +new Date;
                            a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
                            80 < q - a.mangotouch.tm || a.mangotouch.dry != d || a.mangotouch.drx != f ? (a.scrollmom.stop(), a.scrollmom.reset(c, b), a.mangotouch.sy = b, a.mangotouch.ly = b, a.mangotouch.sx = c, a.mangotouch.lx = c, a.mangotouch.dry = d, a.mangotouch.drx = f, a.mangotouch.tm = q) : (a.scrollmom.stop(),
                                a.scrollmom.update(a.mangotouch.sx - e, a.mangotouch.sy - g), a.mangotouch.tm = q, g = Math.max(Math.abs(a.mangotouch.ly - b), Math.abs(a.mangotouch.lx - c)), a.mangotouch.ly = b, a.mangotouch.lx = c, 2 < g && (a.mangotouch.lazy = setTimeout(function () {
                                a.mangotouch.lazy = !1;
                                a.mangotouch.dry = 0;
                                a.mangotouch.drx = 0;
                                a.mangotouch.tm = 0;
                                a.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }, c = a.getScrollTop(), l = a.getScrollLeft(), a.mangotouch = {
                        sy: c,
                        ly: c,
                        dry: 0,
                        sx: l,
                        lx: l,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, a.bind(a.docscroll, "scroll", a.onmangotouch);
                else {
                    if (e.cantouch ||
                        a.istouchcapable || a.opt.touchbehavior || e.hasmstouch) {
                        a.scrollmom = new L(a);
                        a.ontouchstart = function (b) {
                            if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType)
                                return !1;
                            a.hasmoving = !1;
                            if (!a.railslocked) {
                                var c;
                                if (e.hasmstouch)
                                    for (c = b.target ? b.target : !1; c;) {
                                        var g = f(c).getNiceScroll();
                                        if (0 < g.length && g[0].me == a.me)
                                            break;
                                        if (0 < g.length)
                                            return !1;
                                        if ("DIV" == c.nodeName && c.id == a.id)
                                            break;
                                        c = c.parentNode ? c.parentNode : !1
                                    }
                                a.cancelScroll();
                                if ((c = a.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type))
                                    return a.stopPropagation(b);
                                !("clientX" in b) && "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);
                                a.forcescreen && (g = b, b = {original: b.original ? b.original : b}, b.clientX = g.screenX, b.clientY = g.screenY);
                                a.rail.drag = {
                                    x: b.clientX,
                                    y: b.clientY,
                                    sx: a.scroll.x,
                                    sy: a.scroll.y,
                                    st: a.getScrollTop(),
                                    sl: a.getScrollLeft(),
                                    pt: 2,
                                    dl: !1
                                };
                                if (a.ispage || !a.opt.directionlockdeadzone)
                                    a.rail.drag.dl = "f";
                                else {
                                    var g = f(window).width(), d = f(window).height(), q = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                        h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), d = Math.max(0, h - d), g = Math.max(0, q - g);
                                    a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < d ? "v" : !1 : a.rail.scrollable && !a.railh.scrollable ? 0 < g ? "h" : !1 : !1;
                                    a.rail.drag.ck || (a.rail.drag.dl = "f")
                                }
                                a.opt.touchbehavior && a.isiframe && e.isie && (g = a.win.position(), a.rail.drag.x += g.left, a.rail.drag.y += g.top);
                                a.hasmoving = !1;
                                a.lastmouseup = !1;
                                a.scrollmom.reset(b.clientX, b.clientY);
                                if (!e.cantouch && !this.istouchcapable && !b.pointerType) {
                                    if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))
                                        return !a.ispage && e.hasmousecapture && c.setCapture(), a.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick = function (b) {
                                            if (a.hasmoving)
                                                return !1;
                                            c._onclick.call(this, b)
                                        }), a.cancelEvent(b)) : a.stopPropagation(b);
                                    /SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type")) && (pc = {
                                        tg: c,
                                        click: !1
                                    }, a.preventclick = pc)
                                }
                            }
                        };
                        a.ontouchend = function (b) {
                            if (!a.rail.drag)
                                return !0;
                            if (2 == a.rail.drag.pt) {
                                if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType)
                                    return !1;
                                a.scrollmom.doMomentum();
                                a.rail.drag = !1;
                                if (a.hasmoving && (a.lastmouseup = !0, a.hideCursor(), e.hasmousecapture && document.releaseCapture(), !e.cantouch))
                                    return a.cancelEvent(b)
                            } else if (1 == a.rail.drag.pt)
                                return a.onmouseup(b)
                        };
                        var n = a.opt.touchbehavior && a.isiframe && !e.hasmousecapture;
                        a.ontouchmove = function (b, c) {
                            if (!a.rail.drag || b.targetTouches && a.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType && 2 != b.pointerType && "touch" != b.pointerType)
                                return !1;
                            if (2 == a.rail.drag.pt) {
                                if (e.cantouch &&
                                    e.isios && "undefined" == typeof b.original)
                                    return !0;
                                a.hasmoving = !0;
                                a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1, a.preventclick.tg.onclick = a.onpreventclick);
                                b = f.extend({original: b}, b);
                                "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);
                                if (a.forcescreen) {
                                    var g = b;
                                    b = {original: b.original ? b.original : b};
                                    b.clientX = g.screenX;
                                    b.clientY = g.screenY
                                }
                                var d, g = d = 0;
                                n && !c && (d = a.win.position(), g = -d.left, d = -d.top);
                                var q = b.clientY +
                                    d;
                                d = q - a.rail.drag.y;
                                var h = b.clientX + g, u = h - a.rail.drag.x, k = a.rail.drag.st - d;
                                a.ishwscroll && a.opt.bouncescroll ? 0 > k ? k = Math.round(k / 2) : k > a.page.maxh && (k = a.page.maxh + Math.round((k - a.page.maxh) / 2)) : (0 > k && (q = k = 0), k > a.page.maxh && (k = a.page.maxh, q = 0));
                                var l;
                                a.railh && a.railh.scrollable && (l = a.isrtlmode ? u - a.rail.drag.sl : a.rail.drag.sl - u, a.ishwscroll && a.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) / 2)) : (0 > l && (h = l = 0), l > a.page.maxw && (l = a.page.maxw, h = 0)));
                                g = !1;
                                if (a.rail.drag.dl)
                                    g = !0, "v" == a.rail.drag.dl ? l = a.rail.drag.sl : "h" == a.rail.drag.dl && (k = a.rail.drag.st);
                                else {
                                    d = Math.abs(d);
                                    var u = Math.abs(u), z = a.opt.directionlockdeadzone;
                                    if ("v" == a.rail.drag.ck) {
                                        if (d > z && u <= .3 * d)
                                            return a.rail.drag = !1, !0;
                                        u > z && (a.rail.drag.dl = "f", f("body").scrollTop(f("body").scrollTop()))
                                    } else if ("h" == a.rail.drag.ck) {
                                        if (u > z && d <= .3 * u)
                                            return a.rail.drag = !1, !0;
                                        d > z && (a.rail.drag.dl = "f", f("body").scrollLeft(f("body").scrollLeft()))
                                    }
                                }
                                a.synched("touchmove", function () {
                                    a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition &&
                                    a.prepareTransition(0), a.rail.scrollable && a.setScrollTop(k), a.scrollmom.update(h, q), a.railh && a.railh.scrollable ? (a.setScrollLeft(l), a.showCursor(k, l)) : a.showCursor(k), e.isie10 && document.selection.clear())
                                });
                                e.ischrome && a.istouchcapable && (g = !1);
                                if (g)
                                    return a.cancelEvent(b)
                            } else if (1 == a.rail.drag.pt)
                                return a.onmousemove(b)
                        }
                    }
                    a.onmousedown = function (b, c) {
                        if (!a.rail.drag || 1 == a.rail.drag.pt) {
                            if (a.railslocked)
                                return a.cancelEvent(b);
                            a.cancelScroll();
                            a.rail.drag = {
                                x: b.clientX, y: b.clientY, sx: a.scroll.x, sy: a.scroll.y,
                                pt: 1, hr: !!c
                            };
                            var g = a.getTarget(b);
                            !a.ispage && e.hasmousecapture && g.setCapture();
                            a.isiframe && !e.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"), a.css(a.doc, {"pointer-events": "none"}));
                            a.hasmoving = !1;
                            return a.cancelEvent(b)
                        }
                    };
                    a.onmouseup = function (b) {
                        if (a.rail.drag) {
                            if (1 != a.rail.drag.pt)
                                return !0;
                            e.hasmousecapture && document.releaseCapture();
                            a.isiframe && !e.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents);
                            a.rail.drag = !1;
                            a.hasmoving && a.triggerScrollEnd();
                            return a.cancelEvent(b)
                        }
                    };
                    a.onmousemove = function (b) {
                        if (a.rail.drag && 1 == a.rail.drag.pt) {
                            if (e.ischrome && 0 == b.which)
                                return a.onmouseup(b);
                            a.cursorfreezed = !0;
                            a.hasmoving = !0;
                            if (a.rail.drag.hr) {
                                a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x);
                                0 > a.scroll.x && (a.scroll.x = 0);
                                var c = a.scrollvaluemaxw;
                                a.scroll.x > c && (a.scroll.x = c)
                            } else
                                a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y), 0 > a.scroll.y && (a.scroll.y = 0), c = a.scrollvaluemax, a.scroll.y > c && (a.scroll.y = c);
                            a.synched("mousemove", function () {
                                a.rail.drag && 1 == a.rail.drag.pt && (a.showCursor(),
                                    a.rail.drag.hr ? a.hasreversehr ? a.doScrollLeft(a.scrollvaluemaxw - Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed))
                            });
                            return a.cancelEvent(b)
                        }
                    };
                    if (e.cantouch || a.opt.touchbehavior)
                        a.onpreventclick = function (b) {
                            if (a.preventclick)
                                return a.preventclick.tg.onclick = a.preventclick.click, a.preventclick = !1, a.cancelEvent(b)
                        }, a.bind(a.win, "mousedown",
                            a.ontouchstart), a.onclick = e.isios ? !1 : function (b) {
                            return a.lastmouseup ? (a.lastmouseup = !1, a.cancelEvent(b)) : !0
                        }, a.opt.grabcursorenabled && e.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, {cursor: e.cursorgrabvalue}), a.css(a.rail, {cursor: e.cursorgrabvalue}));
                    else {
                        var p = function (b) {
                            if (a.selectiondrag) {
                                if (b) {
                                    var c = a.win.outerHeight();
                                    b = b.pageY - a.selectiondrag.top;
                                    0 < b && b < c && (b = 0);
                                    b >= c && (b -= c);
                                    a.selectiondrag.df = b
                                }
                                0 != a.selectiondrag.df && (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)), a.debounced("doselectionscroll",
                                    function () {
                                        p()
                                    }, 50))
                            }
                        };
                        a.hasTextSelected = "getSelection" in document ? function () {
                            return 0 < document.getSelection().rangeCount
                        } : "selection" in document ? function () {
                            return "None" != document.selection.type
                        } : function () {
                            return !1
                        };
                        a.onselectionstart = function (b) {
                            a.ispage || (a.selectiondrag = a.win.offset())
                        };
                        a.onselectionend = function (b) {
                            a.selectiondrag = !1
                        };
                        a.onselectiondrag = function (b) {
                            a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll", function () {
                                p(b)
                            }, 250)
                        }
                    }
                    e.hasw3ctouch ? (a.css(a.rail, {"touch-action": "none"}),
                        a.css(a.cursor, {"touch-action": "none"}), a.bind(a.win, "pointerdown", a.ontouchstart), a.bind(document, "pointerup", a.ontouchend), a.bind(document, "pointermove", a.ontouchmove)) : e.hasmstouch ? (a.css(a.rail, {"-ms-touch-action": "none"}), a.css(a.cursor, {"-ms-touch-action": "none"}), a.bind(a.win, "MSPointerDown", a.ontouchstart), a.bind(document, "MSPointerUp", a.ontouchend), a.bind(document, "MSPointerMove", a.ontouchmove), a.bind(a.cursor, "MSGestureHold", function (a) {
                        a.preventDefault()
                    }), a.bind(a.cursor, "contextmenu",
                        function (a) {
                            a.preventDefault()
                        })) : this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document, "touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove));
                    if (a.opt.cursordragontouch || !e.cantouch && !a.opt.touchbehavior)
                        a.rail.css({cursor: "default"}), a.railh && a.railh.css({cursor: "default"}), a.jqbind(a.rail, "mouseenter", function () {
                            if (!a.ispage && !a.win.is(":visible"))
                                return !1;
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }),
                            a.jqbind(a.rail, "mouseleave", function () {
                                a.rail.active = !1;
                                a.rail.drag || a.hideCursor()
                            }), a.opt.sensitiverail && (a.bind(a.rail, "click", function (b) {
                            a.doRailClick(b, !1, !1)
                        }), a.bind(a.rail, "dblclick", function (b) {
                            a.doRailClick(b, !0, !1)
                        }), a.bind(a.cursor, "click", function (b) {
                            a.cancelEvent(b)
                        }), a.bind(a.cursor, "dblclick", function (b) {
                            a.cancelEvent(b)
                        })), a.railh && (a.jqbind(a.railh, "mouseenter", function () {
                            if (!a.ispage && !a.win.is(":visible"))
                                return !1;
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }), a.jqbind(a.railh,
                            "mouseleave", function () {
                                a.rail.active = !1;
                                a.rail.drag || a.hideCursor()
                            }), a.opt.sensitiverail && (a.bind(a.railh, "click", function (b) {
                            a.doRailClick(b, !1, !0)
                        }), a.bind(a.railh, "dblclick", function (b) {
                            a.doRailClick(b, !0, !0)
                        }), a.bind(a.cursorh, "click", function (b) {
                            a.cancelEvent(b)
                        }), a.bind(a.cursorh, "dblclick", function (b) {
                            a.cancelEvent(b)
                        })));
                    e.cantouch || a.opt.touchbehavior ? (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.ontouchend), a.bind(document, "mousemove", a.ontouchmove), a.onclick && a.bind(document, "click",
                        a.onclick), a.opt.cursordragontouch && (a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.cursorh && a.bind(a.cursorh, "mousedown", function (b) {
                        a.onmousedown(b, !0)
                    }), a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup))) : (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.onmouseup), a.bind(document, "mousemove", a.onmousemove), a.onclick && a.bind(document, "click", a.onclick), a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.railh && (a.bind(a.cursorh,
                        "mousedown", function (b) {
                            a.onmousedown(b, !0)
                        }), a.bind(a.cursorh, "mouseup", a.onmouseup)), !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0], "mousedown", a.onselectionstart), a.bind(document, "mouseup", a.onselectionend), a.bind(a.cursor, "mouseup", a.onselectionend), a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend), a.bind(document, "mousemove", a.onselectiondrag)), a.zoom && (a.jqbind(a.zoom, "mouseenter", function () {
                        a.canshowonmouseevent && a.showCursor();
                        a.rail.active = !0
                    }), a.jqbind(a.zoom, "mouseleave",
                        function () {
                            a.rail.active = !1;
                            a.rail.drag || a.hideCursor()
                        })));
                    a.opt.enablemousewheel && (a.isiframe || a.bind(e.isie && a.ispage ? document : a.win, "mousewheel", a.onmousewheel), a.bind(a.rail, "mousewheel", a.onmousewheel), a.railh && a.bind(a.railh, "mousewheel", a.onmousewheelhr));
                    a.ispage || e.cantouch || /HTML|^BODY/.test(a.win[0].nodeName) || (a.win.attr("tabindex") || a.win.attr({tabindex: N++}), a.jqbind(a.win, "focus", function (b) {
                        y = a.getTarget(b).id || !0;
                        a.hasfocus = !0;
                        a.canshowonmouseevent && a.noticeCursor()
                    }), a.jqbind(a.win,
                        "blur", function (b) {
                            y = !1;
                            a.hasfocus = !1
                        }), a.jqbind(a.win, "mouseenter", function (b) {
                        D = a.getTarget(b).id || !0;
                        a.hasmousefocus = !0;
                        a.canshowonmouseevent && a.noticeCursor()
                    }), a.jqbind(a.win, "mouseleave", function () {
                        D = !1;
                        a.hasmousefocus = !1;
                        a.rail.drag || a.hideCursor()
                    }))
                }
                a.onkeypress = function (b) {
                    if (a.railslocked && 0 == a.page.maxh)
                        return !0;
                    b = b ? b : window.e;
                    var c = a.getTarget(b);
                    if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp) || f(c).attr("contenteditable"))
                        return !0;
                    if (a.hasfocus || a.hasmousefocus && !y || a.ispage && !y && !D) {
                        c = b.keyCode;
                        if (a.railslocked && 27 != c)
                            return a.cancelEvent(b);
                        var g = b.ctrlKey || !1, d = b.shiftKey || !1, e = !1;
                        switch (c) {
                            case 38:
                            case 63233:
                                a.doScrollBy(72);
                                e = !0;
                                break;
                            case 40:
                            case 63235:
                                a.doScrollBy(-72);
                                e = !0;
                                break;
                            case 37:
                            case 63232:
                                a.railh && (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72), e = !0);
                                break;
                            case 39:
                            case 63234:
                                a.railh && (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), e = !0);
                                break;
                            case 33:
                            case 63276:
                                a.doScrollBy(a.view.h);
                                e = !0;
                                break;
                            case 34:
                            case 63277:
                                a.doScrollBy(-a.view.h);
                                e = !0;
                                break;
                            case 36:
                            case 63273:
                                a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                                e = !0;
                                break;
                            case 35:
                            case 63275:
                                a.railh && g ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
                                e = !0;
                                break;
                            case 32:
                                a.opt.spacebarenabled && (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), e = !0);
                                break;
                            case 27:
                                a.zoomactive && (a.doZoom(), e = !0)
                        }
                        if (e)
                            return a.cancelEvent(b)
                    }
                };
                a.opt.enablekeyboard && a.bind(document, e.isopera && !e.isopera12 ? "keypress" : "keydown", a.onkeypress);
                a.bind(document, "keydown", function (b) {
                    b.ctrlKey &&
                    (a.wheelprevented = !0)
                });
                a.bind(document, "keyup", function (b) {
                    b.ctrlKey || (a.wheelprevented = !1)
                });
                a.bind(window, "blur", function (b) {
                    a.wheelprevented = !1
                });
                a.bind(window, "resize", a.lazyResize);
                a.bind(window, "orientationchange", a.lazyResize);
                a.bind(window, "load", a.lazyResize);
                if (e.ischrome && !a.ispage && !a.haswrapper) {
                    var r = a.win.attr("style"), c = parseFloat(a.win.css("width")) + 1;
                    a.win.css("width", c);
                    a.synched("chromefix", function () {
                        a.win.attr("style", r)
                    })
                }
                a.onAttributeChange = function (b) {
                    a.lazyResize(a.isieold ?
                        250 : 30)
                };
                !1 !== v && (a.observerbody = new v(function (b) {
                    b.forEach(function (b) {
                        if ("attributes" == b.type)
                            return f("body").hasClass("modal-open") ? a.hide() : a.show()
                    });
                    if (document.body.scrollHeight != a.page.maxh)
                        return a.lazyResize(30)
                }), a.observerbody.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                }));
                a.ispage || a.haswrapper || (!1 !== v ? (a.observer = new v(function (b) {
                    b.forEach(a.onAttributeChange)
                }), a.observer.observe(a.win[0], {
                    childList: !0, characterData: !1,
                    attributes: !0, subtree: !1
                }), a.observerremover = new v(function (b) {
                    b.forEach(function (b) {
                        if (0 < b.removedNodes.length)
                            for (var c in b.removedNodes)
                                if (a && b.removedNodes[c] == a.win[0])
                                    return a.remove()
                    })
                }), a.observerremover.observe(a.win[0].parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1
                })) : (a.bind(a.win, e.isie && !e.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange), e.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange), a.bind(a.win, "DOMNodeRemoved", function (b) {
                    b.target ==
                    a.win[0] && a.remove()
                })));
                !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
                a.istextarea && a.bind(a.win, "mouseup", a.lazyResize);
                a.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var M = function () {
                    a.iframexd = !1;
                    var b;
                    try {
                        b = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                    } catch (c) {
                        a.iframexd = !0, b = !1
                    }
                    if (a.iframexd)
                        return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                    a.forcescreen = !0;
                    a.isiframe && (a.iframe = {
                        doc: f(b), html: a.doc.contents().find("html")[0],
                        body: a.doc.contents().find("body")[0]
                    }, a.getContentSize = function () {
                        return {
                            w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth),
                            h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)
                        }
                    }, a.docscroll = f(a.iframe.body));
                    if (!e.isios && a.opt.iframeautoresize && !a.isiframe) {
                        a.win.scrollTop(0);
                        a.doc.height("");
                        var g = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight);
                        a.doc.height(g)
                    }
                    a.lazyResize(30);
                    e.isie7 && a.css(f(a.iframe.html), {"overflow-y": "hidden"});
                    a.css(f(a.iframe.body),
                        {"overflow-y": "hidden"});
                    e.isios && a.haswrapper && a.css(f(b.body), {"-webkit-transform": "translate3d(0,0,0)"});
                    "contentWindow" in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(b, "scroll", a.onscroll);
                    a.opt.enablemousewheel && a.bind(b, "mousewheel", a.onmousewheel);
                    a.opt.enablekeyboard && a.bind(b, e.isopera ? "keypress" : "keydown", a.onkeypress);
                    if (e.cantouch || a.opt.touchbehavior)
                        a.bind(b, "mousedown", a.ontouchstart), a.bind(b, "mousemove", function (b) {
                            return a.ontouchmove(b, !0)
                        }), a.opt.grabcursorenabled &&
                        e.cursorgrabvalue && a.css(f(b.body), {cursor: e.cursorgrabvalue});
                    a.bind(b, "mouseup", a.ontouchend);
                    a.zoom && (a.opt.dblclickzoom && a.bind(b, "dblclick", a.doZoom), a.ongesturezoom && a.bind(b, "gestureend", a.ongesturezoom))
                };
                this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                    M.call(a.doc[0], !1)
                }, 500);
                a.bind(this.doc, "load", M)
            }
        };
        this.showCursor = function (b, c) {
            a.cursortimeout && (clearTimeout(a.cursortimeout), a.cursortimeout = 0);
            if (a.rail) {
                a.autohidedom && (a.autohidedom.stop().css({opacity: a.opt.cursoropacitymax}),
                    a.cursoractive = !0);
                a.rail.drag && 1 == a.rail.drag.pt || ("undefined" != typeof b && !1 !== b && (a.scroll.y = Math.round(1 * b / a.scrollratio.y)), "undefined" != typeof c && (a.scroll.x = Math.round(1 * c / a.scrollratio.x)));
                a.cursor.css({height: a.cursorheight, top: a.scroll.y});
                if (a.cursorh) {
                    var d = a.hasreversehr ? a.scrollvaluemaxw - a.scroll.x : a.scroll.x;
                    !a.rail.align && a.rail.visibility ? a.cursorh.css({
                        width: a.cursorwidth,
                        left: d + a.rail.width
                    }) : a.cursorh.css({width: a.cursorwidth, left: d});
                    a.cursoractive = !0
                }
                a.zoom && a.zoom.stop().css({opacity: a.opt.cursoropacitymax})
            }
        };
        this.hideCursor = function (b) {
            a.cursortimeout || !a.rail || !a.autohidedom || a.hasmousefocus && "leave" == a.opt.autohidemode || (a.cursortimeout = setTimeout(function () {
                a.rail.active && a.showonmouseevent || (a.autohidedom.stop().animate({opacity: a.opt.cursoropacitymin}), a.zoom && a.zoom.stop().animate({opacity: a.opt.cursoropacitymin}), a.cursoractive = !1);
                a.cursortimeout = 0
            }, b || a.opt.hidecursordelay))
        };
        this.noticeCursor = function (b, c, d) {
            a.showCursor(c, d);
            a.rail.active || a.hideCursor(b)
        };
        this.getContentSize = a.ispage ? function () {
            return {
                w: Math.max(document.body.scrollWidth,
                    document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        } : a.haswrapper ? function () {
            return {
                w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")),
                h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
            }
        } : function () {
            return {w: a.docscroll[0].scrollWidth, h: a.docscroll[0].scrollHeight}
        };
        this.onResize = function (b, c) {
            if (!a || !a.win)
                return !1;
            if (!a.haswrapper && !a.ispage) {
                if ("none" ==
                    a.win.css("display"))
                    return a.visibility && a.hideRail().hideRailHr(), !1;
                a.hidden || a.visibility || a.showRail().showRailHr()
            }
            var d = a.page.maxh, e = a.page.maxw, f = a.view.h, h = a.view.w;
            a.view = {
                w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
                h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
            };
            a.page = c ? c : a.getContentSize();
            a.page.maxh = Math.max(0, a.page.h - a.view.h);
            a.page.maxw = Math.max(0, a.page.w - a.view.w);
            if (a.page.maxh == d && a.page.maxw == e && a.view.w == h && a.view.h == f) {
                if (a.ispage)
                    return a;
                d = a.win.offset();
                if (a.lastposition && (e = a.lastposition, e.top == d.top && e.left == d.left))
                    return a;
                a.lastposition = d
            }
            0 == a.page.maxh ? (a.hideRail(), a.scrollvaluemax = 0, a.scroll.y = 0, a.scrollratio.y = 0, a.cursorheight = 0, a.setScrollTop(0), a.rail.scrollable = !1) : (a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom, a.rail.scrollable = !0);
            0 == a.page.maxw ? (a.hideRailHr(), a.scrollvaluemaxw = 0, a.scroll.x = 0, a.scrollratio.x = 0, a.cursorwidth = 0, a.setScrollLeft(0), a.railh.scrollable = !1) : (a.page.maxw -= a.opt.railpadding.left + a.opt.railpadding.right,
                a.railh.scrollable = !0);
            a.railslocked = a.locked || 0 == a.page.maxh && 0 == a.page.maxw;
            if (a.railslocked)
                return a.ispage || a.updateScrollBar(a.view), !1;
            a.hidden || a.visibility ? a.hidden || a.railh.visibility || a.showRailHr() : a.showRail().showRailHr();
            a.istextarea && a.win.css("resize") && "none" != a.win.css("resize") && (a.view.h -= 20);
            a.cursorheight = Math.min(a.view.h, Math.round(a.view.h / a.page.h * a.view.h));
            a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
            a.cursorwidth =
                Math.min(a.view.w, Math.round(a.view.w / a.page.w * a.view.w));
            a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
            a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder - (a.opt.railpadding.top + a.opt.railpadding.bottom);
            a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w, a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder - (a.opt.railpadding.left + a.opt.railpadding.right));
            a.ispage || a.updateScrollBar(a.view);
            a.scrollratio =
            {x: a.page.maxw / a.scrollvaluemaxw, y: a.page.maxh / a.scrollvaluemax};
            a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)), a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)), a.cursoractive && a.noticeCursor());
            a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
            return a
        };
        this.resize = a.onResize;
        this.lazyResize = function (b) {
            b = isNaN(b) ? 30 : b;
            a.debounced("resize", a.resize, b);
            return a
        };
        this.jqbind = function (b,
                                c, d) {
            a.events.push({e: b, n: c, f: d, q: !0});
            f(b).bind(c, d)
        };
        this.bind = function (b, c, d, f) {
            var h = "jquery" in b ? b[0] : b;
            "mousewheel" == c ? window.addEventListener || "onwheel" in document ? a._bind(h, "wheel", d, f || !1) : (b = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", n(h, b, d, f || !1), "DOMMouseScroll" == b && n(h, "MozMousePixelScroll", d, f || !1)) : h.addEventListener ? (e.cantouch && /mouseup|mousedown|mousemove/.test(c) && a._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove", function (a) {
                if (a.touches) {
                    if (2 >
                        a.touches.length) {
                        var b = a.touches.length ? a.touches[0] : a;
                        b.original = a;
                        d.call(this, b)
                    }
                } else
                    a.changedTouches && (b = a.changedTouches[0], b.original = a, d.call(this, b))
            }, f || !1), a._bind(h, c, d, f || !1), e.cantouch && "mouseup" == c && a._bind(h, "touchcancel", d, f || !1)) : a._bind(h, c, function (b) {
                (b = b || window.event || !1) && b.srcElement && (b.target = b.srcElement);
                "pageY" in b || (b.pageX = b.clientX + document.documentElement.scrollLeft, b.pageY = b.clientY + document.documentElement.scrollTop);
                return !1 === d.call(h, b) || !1 === f ? a.cancelEvent(b) :
                    !0
            })
        };
        e.haseventlistener ? (this._bind = function (b, c, d, e) {
            a.events.push({e: b, n: c, f: d, b: e, q: !1});
            b.addEventListener(c, d, e || !1)
        }, this.cancelEvent = function (a) {
            if (!a)
                return !1;
            a = a.original ? a.original : a;
            a.preventDefault();
            a.stopPropagation();
            a.preventManipulation && a.preventManipulation();
            return !1
        }, this.stopPropagation = function (a) {
            if (!a)
                return !1;
            a = a.original ? a.original : a;
            a.stopPropagation();
            return !1
        }, this._unbind = function (a, c, d, e) {
            a.removeEventListener(c, d, e)
        }) : (this._bind = function (b, c, d, e) {
            a.events.push({
                e: b,
                n: c, f: d, b: e, q: !1
            });
            b.attachEvent ? b.attachEvent("on" + c, d) : b["on" + c] = d
        }, this.cancelEvent = function (a) {
            a = window.event || !1;
            if (!a)
                return !1;
            a.cancelBubble = !0;
            a.cancel = !0;
            return a.returnValue = !1
        }, this.stopPropagation = function (a) {
            a = window.event || !1;
            if (!a)
                return !1;
            a.cancelBubble = !0;
            return !1
        }, this._unbind = function (a, c, d, e) {
            a.detachEvent ? a.detachEvent("on" + c, d) : a["on" + c] = !1
        });
        this.unbindAll = function () {
            for (var b = 0; b < a.events.length; b++) {
                var c = a.events[b];
                c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e, c.n, c.f, c.b)
            }
        };
        this.showRail =
            function () {
                0 == a.page.maxh || !a.ispage && "none" == a.win.css("display") || (a.visibility = !0, a.rail.visibility = !0, a.rail.css("display", "block"));
                return a
            };
        this.showRailHr = function () {
            if (!a.railh)
                return a;
            0 == a.page.maxw || !a.ispage && "none" == a.win.css("display") || (a.railh.visibility = !0, a.railh.css("display", "block"));
            return a
        };
        this.hideRail = function () {
            a.visibility = !1;
            a.rail.visibility = !1;
            a.rail.css("display", "none");
            return a
        };
        this.hideRailHr = function () {
            if (!a.railh)
                return a;
            a.railh.visibility = !1;
            a.railh.css("display",
                "none");
            return a
        };
        this.show = function () {
            a.hidden = !1;
            a.railslocked = !1;
            return a.showRail().showRailHr()
        };
        this.hide = function () {
            a.hidden = !0;
            a.railslocked = !0;
            return a.hideRail().hideRailHr()
        };
        this.toggle = function () {
            return a.hidden ? a.show() : a.hide()
        };
        this.remove = function () {
            a.stop();
            a.cursortimeout && clearTimeout(a.cursortimeout);
            a.doZoomOut();
            a.unbindAll();
            e.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
            !1 !== a.observer && a.observer.disconnect();
            !1 !== a.observerremover && a.observerremover.disconnect();
            !1 !== a.observerbody && a.observerbody.disconnect();
            a.events = null;
            a.cursor && a.cursor.remove();
            a.cursorh && a.cursorh.remove();
            a.rail && a.rail.remove();
            a.railh && a.railh.remove();
            a.zoom && a.zoom.remove();
            for (var b = 0; b < a.saved.css.length; b++) {
                var c = a.saved.css[b];
                c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
            }
            a.saved = !1;
            a.me.data("__nicescroll", "");
            var d = f.nicescroll;
            d.each(function (b) {
                if (this && this.id === a.id) {
                    delete d[b];
                    for (var c = ++b; c < d.length; c++, b++)
                        d[b] = d[c];
                    d.length--;
                    d.length && delete d[d.length]
                }
            });
            for (var h in a)
                a[h] = null, delete a[h];
            a = null
        };
        this.scrollstart = function (b) {
            this.onscrollstart = b;
            return a
        };
        this.scrollend = function (b) {
            this.onscrollend = b;
            return a
        };
        this.scrollcancel = function (b) {
            this.onscrollcancel = b;
            return a
        };
        this.zoomin = function (b) {
            this.onzoomin = b;
            return a
        };
        this.zoomout = function (b) {
            this.onzoomout = b;
            return a
        };
        this.isScrollable = function (a) {
            a = a.target ? a.target : a;
            if ("OPTION" == a.nodeName)
                return !0;
            for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                var c = f(a), c = c.css("overflowY") || c.css("overflowX") ||
                    c.css("overflow") || "";
                if (/scroll|auto/.test(c))
                    return a.clientHeight != a.scrollHeight;
                a = a.parentNode ? a.parentNode : !1
            }
            return !1
        };
        this.getViewport = function (a) {
            for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                var c = f(a);
                if (/fixed|absolute/.test(c.css("position")))
                    return c;
                var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                if (/scroll|auto/.test(d) && a.clientHeight != a.scrollHeight || 0 < c.getNiceScroll().length)
                    return c;
                a = a.parentNode ? a.parentNode : !1
            }
            return !1
        };
        this.triggerScrollEnd = function () {
            if (a.onscrollend) {
                var b = a.getScrollLeft(), c = a.getScrollTop();
                a.onscrollend.call(a, {type: "scrollend", current: {x: b, y: c}, end: {x: b, y: c}})
            }
        };
        this.onmousewheel = function (b) {
            if (!a.wheelprevented) {
                if (a.railslocked)
                    return a.debounced("checkunlock", a.resize, 250), !0;
                if (a.rail.drag)
                    return a.cancelEvent(b);
                "auto" == a.opt.oneaxismousemode && 0 != b.deltaX && (a.opt.oneaxismousemode = !1);
                if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable)
                    return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) :
                        !0;
                var c = +new Date, d = !1;
                a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
                a.checkarea = c;
                if (a.nativescrollingarea)
                    return !0;
                if (b = p(b, !1, d))
                    a.checkarea = 0;
                return b
            }
        };
        this.onmousewheelhr = function (b) {
            if (!a.wheelprevented) {
                if (a.railslocked || !a.railh.scrollable)
                    return !0;
                if (a.rail.drag)
                    return a.cancelEvent(b);
                var c = +new Date, d = !1;
                a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
                a.checkarea = c;
                return a.nativescrollingarea ?
                    !0 : a.railslocked ? a.cancelEvent(b) : p(b, !0, d)
            }
        };
        this.stop = function () {
            a.cancelScroll();
            a.scrollmon && a.scrollmon.stop();
            a.cursorfreezed = !1;
            a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
            a.noticeCursor();
            return a
        };
        this.getTransitionSpeed = function (b) {
            var c = Math.round(10 * a.opt.scrollspeed);
            b = Math.min(c, Math.round(b / 20 * a.opt.scrollspeed));
            return 20 < b ? b : 0
        };
        a.opt.smoothscroll ? a.ishwscroll && e.hastransition && a.opt.usetransition && a.opt.smoothscroll ? (this.prepareTransition = function (b, c) {
            var d = c ? 20 <
            b ? b : 0 : a.getTransitionSpeed(b), f = d ? e.prefixstyle + "transform " + d + "ms ease-out" : "";
            a.lasttransitionstyle && a.lasttransitionstyle == f || (a.lasttransitionstyle = f, a.doc.css(e.transitionstyle, f));
            return d
        }, this.doScrollLeft = function (b, c) {
            var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
            a.doScrollPos(b, d, c)
        }, this.doScrollTop = function (b, c) {
            var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
            a.doScrollPos(d, b, c)
        }, this.doScrollPos = function (b, c, d) {
            var f = a.getScrollTop(), h = a.getScrollLeft();
            (0 > (a.newscrolly -
            f) * (c - f) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
            0 == a.opt.bouncescroll && (0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh), 0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw));
            if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly)
                return !1;
            a.newscrolly = c;
            a.newscrollx = b;
            a.newscrollspeed = d || !1;
            if (a.timer)
                return !1;
            a.timer = setTimeout(function () {
                var d = a.getScrollTop(), f = a.getScrollLeft(), h, k;
                h = b - f;
                k = c - d;
                h = Math.round(Math.sqrt(Math.pow(h, 2) + Math.pow(k, 2)));
                h = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(h);
                a.newscrollspeed && 1 >= a.newscrollspeed && (h *= a.newscrollspeed);
                a.prepareTransition(h, !0);
                a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                0 < h && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, {
                    type: "scrollstart",
                    current: {x: f, y: d},
                    request: {x: b, y: c},
                    end: {x: a.newscrollx, y: a.newscrolly},
                    speed: h
                }), e.transitionend ? a.scrollendtrapped || (a.scrollendtrapped = !0, a.bind(a.doc, e.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped), a.scrollendtrapped =
                    setTimeout(a.onScrollTransitionEnd, h)), a.timerscroll = {
                    bz: new A(d, a.newscrolly, h, 0, 0, .58, 1),
                    bh: new A(f, a.newscrollx, h, 0, 0, .58, 1)
                }, a.cursorfreezed || (a.timerscroll.tm = setInterval(function () {
                    a.showCursor(a.getScrollTop(), a.getScrollLeft())
                }, 60)));
                a.synched("doScroll-set", function () {
                    a.timer = 0;
                    a.scrollendtrapped && (a.scrollrunning = !0);
                    a.setScrollTop(a.newscrolly);
                    a.setScrollLeft(a.newscrollx);
                    if (!a.scrollendtrapped)
                        a.onScrollTransitionEnd()
                })
            }, 50)
        }, this.cancelScroll = function () {
            if (!a.scrollendtrapped)
                return !0;
            var b = a.getScrollTop(), c = a.getScrollLeft();
            a.scrollrunning = !1;
            e.transitionend || clearTimeout(e.transitionend);
            a.scrollendtrapped = !1;
            a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
            a.prepareTransition(0);
            a.setScrollTop(b);
            a.railh && a.setScrollLeft(c);
            a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
            a.timerscroll = !1;
            a.cursorfreezed = !1;
            a.showCursor(b, c);
            return a
        }, this.onScrollTransitionEnd = function () {
            a.scrollendtrapped && a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
            a.scrollendtrapped = !1;
            a.prepareTransition(0);
            a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
            a.timerscroll = !1;
            var b = a.getScrollTop(), c = a.getScrollLeft();
            a.setScrollTop(b);
            a.railh && a.setScrollLeft(c);
            a.noticeCursor(!1, b, c);
            a.cursorfreezed = !1;
            0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh);
            0 > c ? c = 0 : c > a.page.maxw && (c = a.page.maxw);
            if (b != a.newscrolly || c != a.newscrollx)
                return a.doScrollPos(c, b, a.opt.snapbackspeed);
            a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
            a.scrollrunning = !1
        }) : (this.doScrollLeft =
            function (b, c) {
                var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
                a.doScrollPos(b, d, c)
            }, this.doScrollTop = function (b, c) {
            var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
            a.doScrollPos(d, b, c)
        }, this.doScrollPos = function (b, c, d) {
            function e() {
                if (a.cancelAnimationFrame)
                    return !0;
                a.scrollrunning = !0;
                if (n = 1 - n)
                    return a.timer = s(e) || 1;
                var b = 0, c, d, g = d = a.getScrollTop();
                if (a.dst.ay) {
                    g = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly;
                    c = g - d;
                    if (0 > c && g < a.newscrolly || 0 < c && g > a.newscrolly)
                        g = a.newscrolly;
                    a.setScrollTop(g);
                    g == a.newscrolly && (b = 1)
                } else
                    b = 1;
                d = c = a.getScrollLeft();
                if (a.dst.ax) {
                    d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
                    c = d - c;
                    if (0 > c && d < a.newscrollx || 0 < c && d > a.newscrollx)
                        d = a.newscrollx;
                    a.setScrollLeft(d);
                    d == a.newscrollx && (b += 1)
                } else
                    b += 1;
                2 == b ? (a.timer = 0, a.cursorfreezed = !1, a.bzscroll = !1, a.scrollrunning = !1, 0 > g ? g = 0 : g > a.page.maxh && (g = a.page.maxh), 0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw), d != a.newscrollx || g != a.newscrolly ? a.doScrollPos(d, g) : a.onscrollend && a.triggerScrollEnd()) :
                    a.timer = s(e) || 1
            }

            c = "undefined" == typeof c || !1 === c ? a.getScrollTop(!0) : c;
            if (a.timer && a.newscrolly == c && a.newscrollx == b)
                return !0;
            a.timer && t(a.timer);
            a.timer = 0;
            var f = a.getScrollTop(), h = a.getScrollLeft();
            (0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
            a.newscrolly = c;
            a.newscrollx = b;
            a.bouncescroll && a.rail.visibility || (0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh));
            a.bouncescroll && a.railh.visibility || (0 > a.newscrollx ? a.newscrollx = 0 : a.newscrollx > a.page.maxw &&
            (a.newscrollx = a.page.maxw));
            a.dst = {};
            a.dst.x = b - h;
            a.dst.y = c - f;
            a.dst.px = h;
            a.dst.py = f;
            var k = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
            a.dst.ax = a.dst.x / k;
            a.dst.ay = a.dst.y / k;
            var l = 0, m = k;
            0 == a.dst.x ? (l = f, m = c, a.dst.ay = 1, a.dst.py = 0) : 0 == a.dst.y && (l = h, m = b, a.dst.ax = 1, a.dst.px = 0);
            k = a.getTransitionSpeed(k);
            d && 1 >= d && (k *= d);
            a.bzscroll = 0 < k ? a.bzscroll ? a.bzscroll.update(m, k) : new A(l, m, k, 0, 1, 0, 1) : !1;
            if (!a.timer) {
                (f == a.page.maxh && c >= a.page.maxh || h == a.page.maxw && b >= a.page.maxw) && a.checkContentSize();
                var n = 1;
                a.cancelAnimationFrame = !1;
                a.timer = 1;
                a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, {
                    type: "scrollstart",
                    current: {x: h, y: f},
                    request: {x: b, y: c},
                    end: {x: a.newscrollx, y: a.newscrolly},
                    speed: k
                });
                e();
                (f == a.page.maxh && c >= f || h == a.page.maxw && b >= h) && a.checkContentSize();
                a.noticeCursor()
            }
        }, this.cancelScroll = function () {
            a.timer && t(a.timer);
            a.timer = 0;
            a.bzscroll = !1;
            a.scrollrunning = !1;
            return a
        }) : (this.doScrollLeft = function (b, c) {
            var d = a.getScrollTop();
            a.doScrollPos(b, d, c)
        }, this.doScrollTop = function (b,
                                        c) {
            var d = a.getScrollLeft();
            a.doScrollPos(d, b, c)
        }, this.doScrollPos = function (b, c, d) {
            var e = b > a.page.maxw ? a.page.maxw : b;
            0 > e && (e = 0);
            var f = c > a.page.maxh ? a.page.maxh : c;
            0 > f && (f = 0);
            a.synched("scroll", function () {
                a.setScrollTop(f);
                a.setScrollLeft(e)
            })
        }, this.cancelScroll = function () {
        });
        this.doScrollBy = function (b, c) {
            var d = 0, d = c ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
            if (a.bouncescroll) {
                var e = Math.round(a.view.h / 2);
                d < -e ? d = -e : d > a.page.maxh + e && (d = a.page.maxh + e)
            }
            a.cursorfreezed = !1;
            e = a.getScrollTop(!0);
            if (0 > d && 0 >= e)
                return a.noticeCursor();
            if (d > a.page.maxh && e >= a.page.maxh)
                return a.checkContentSize(), a.noticeCursor();
            a.doScrollTop(d)
        };
        this.doScrollLeftBy = function (b, c) {
            var d = 0, d = c ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
            if (a.bouncescroll) {
                var e = Math.round(a.view.w / 2);
                d < -e ? d = -e : d > a.page.maxw + e && (d = a.page.maxw + e)
            }
            a.cursorfreezed = !1;
            e = a.getScrollLeft(!0);
            if (0 > d && 0 >= e || d > a.page.maxw && e >= a.page.maxw)
                return a.noticeCursor();
            a.doScrollLeft(d)
        };
        this.doScrollTo = function (b, c) {
            c && Math.round(b * a.scrollratio.y);
            a.cursorfreezed = !1;
            a.doScrollTop(b)
        };
        this.checkContentSize = function () {
            var b = a.getContentSize();
            b.h == a.page.h && b.w == a.page.w || a.resize(!1, b)
        };
        a.onscroll = function (b) {
            a.rail.drag || a.cursorfreezed || a.synched("scroll", function () {
                a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
                a.noticeCursor()
            })
        };
        a.bind(a.docscroll, "scroll", a.onscroll);
        this.doZoomIn = function (b) {
            if (!a.zoomactive) {
                a.zoomactive = !0;
                a.zoomrestore = {style: {}};
                var c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "), d = a.win[0].style, h;
                for (h in c) {
                    var k = c[h];
                    a.zoomrestore.style[k] = "undefined" != typeof d[k] ? d[k] : ""
                }
                a.zoomrestore.style.width = a.win.css("width");
                a.zoomrestore.style.height = a.win.css("height");
                a.zoomrestore.padding = {
                    w: a.win.outerWidth() - a.win.width(),
                    h: a.win.outerHeight() - a.win.height()
                };
                e.isios4 && (a.zoomrestore.scrollTop = f(window).scrollTop(), f(window).scrollTop(0));
                a.win.css({
                    position: e.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    "z-index": x + 100,
                    margin: "0px"
                });
                c = a.win.css("backgroundColor");
                ("" == c || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) && a.win.css("backgroundColor", "#fff");
                a.rail.css({"z-index": x + 101});
                a.zoom.css({"z-index": x + 102});
                a.zoom.css("backgroundPosition", "0px -18px");
                a.resizeZoom();
                a.onzoomin && a.onzoomin.call(a);
                return a.cancelEvent(b)
            }
        };
        this.doZoomOut = function (b) {
            if (a.zoomactive)
                return a.zoomactive = !1, a.win.css("margin", ""), a.win.css(a.zoomrestore.style),
                e.isios4 && f(window).scrollTop(a.zoomrestore.scrollTop), a.rail.css({"z-index": a.zindex}), a.zoom.css({"z-index": a.zindex}), a.zoomrestore = !1, a.zoom.css("backgroundPosition", "0px 0px"), a.onResize(), a.onzoomout && a.onzoomout.call(a), a.cancelEvent(b)
        };
        this.doZoom = function (b) {
            return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b)
        };
        this.resizeZoom = function () {
            if (a.zoomactive) {
                var b = a.getScrollTop();
                a.win.css({
                    width: f(window).width() - a.zoomrestore.padding.w + "px",
                    height: f(window).height() - a.zoomrestore.padding.h + "px"
                });
                a.onResize();
                a.setScrollTop(Math.min(a.page.maxh, b))
            }
        };
        this.init();
        f.nicescroll.push(this)
    }, L = function (f) {
        var c = this;
        this.nc = f;
        this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
        this.snapy = this.snapx = !1;
        this.demuly = this.demulx = 0;
        this.lastscrolly = this.lastscrollx = -1;
        this.timer = this.chky = this.chkx = 0;
        this.time = function () {
            return +new Date
        };
        this.reset = function (f, k) {
            c.stop();
            var d = c.time();
            c.steptime = 0;
            c.lasttime = d;
            c.speedx = 0;
            c.speedy = 0;
            c.lastx = f;
            c.lasty = k;
            c.lastscrollx = -1;
            c.lastscrolly = -1
        };
        this.update = function (f, k) {
            var d = c.time();
            c.steptime = d - c.lasttime;
            c.lasttime = d;
            var d = k - c.lasty, n = f - c.lastx, p = c.nc.getScrollTop(), a = c.nc.getScrollLeft(), p = p + d, a = a + n;
            c.snapx = 0 > a || a > c.nc.page.maxw;
            c.snapy = 0 > p || p > c.nc.page.maxh;
            c.speedx = n;
            c.speedy = d;
            c.lastx = f;
            c.lasty = k
        };
        this.stop = function () {
            c.nc.unsynched("domomentum2d");
            c.timer && clearTimeout(c.timer);
            c.timer = 0;
            c.lastscrollx = -1;
            c.lastscrolly = -1
        };
        this.doSnapy = function (f, k) {
            var d = !1;
            0 > k ? (k = 0, d = !0) : k > c.nc.page.maxh && (k = c.nc.page.maxh, d = !0);
            0 > f ? (f = 0, d = !0) : f > c.nc.page.maxw && (f = c.nc.page.maxw, d = !0);
            d ? c.nc.doScrollPos(f, k, c.nc.opt.snapbackspeed) : c.nc.triggerScrollEnd()
        };
        this.doMomentum = function (f) {
            var k = c.time(), d = f ? k + f : c.lasttime;
            f = c.nc.getScrollLeft();
            var n = c.nc.getScrollTop(), p = c.nc.page.maxh, a = c.nc.page.maxw;
            c.speedx = 0 < a ? Math.min(60, c.speedx) : 0;
            c.speedy = 0 < p ? Math.min(60, c.speedy) : 0;
            d = d && 60 >= k - d;
            if (0 > n || n > p || 0 > f || f > a)
                d = !1;
            f = c.speedx && d ? c.speedx : !1;
            if (c.speedy && d && c.speedy || f) {
                var s = Math.max(16, c.steptime);
                50 < s && (f = s / 50, c.speedx *= f, c.speedy *= f, s =
                    50);
                c.demulxy = 0;
                c.lastscrollx = c.nc.getScrollLeft();
                c.chkx = c.lastscrollx;
                c.lastscrolly = c.nc.getScrollTop();
                c.chky = c.lastscrolly;
                var e = c.lastscrollx, r = c.lastscrolly, t = function () {
                    var d = 600 < c.time() - k ? .04 : .02;
                    c.speedx && (e = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = e, 0 > e || e > a) && (d = .1);
                    c.speedy && (r = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = r, 0 > r || r > p) && (d = .1);
                    c.demulxy = Math.min(1, c.demulxy + d);
                    c.nc.synched("domomentum2d", function () {
                        c.speedx && (c.nc.getScrollLeft() !=
                        c.chkx && c.stop(), c.chkx = e, c.nc.setScrollLeft(e));
                        c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = r, c.nc.setScrollTop(r));
                        c.timer || (c.nc.hideCursor(), c.doSnapy(e, r))
                    });
                    1 > c.demulxy ? c.timer = setTimeout(t, s) : (c.stop(), c.nc.hideCursor(), c.doSnapy(e, r))
                };
                t()
            } else
                c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
        }
    }, w = f.fn.scrollTop;
    f.cssHooks.pageYOffset = {
        get: function (k, c, h) {
            return (c = f.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : w.call(k)
        }, set: function (k, c) {
            var h = f.data(k, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : w.call(k, c);
            return this
        }
    };
    f.fn.scrollTop = function (k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollTop() : w.call(this)
        }
        return this.each(function () {
            var c = f.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : w.call(f(this), k)
        })
    };
    var B = f.fn.scrollLeft;
    f.cssHooks.pageXOffset = {
        get: function (k, c, h) {
            return (c = f.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : B.call(k)
        },
        set: function (k, c) {
            var h = f.data(k, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c);
            return this
        }
    };
    f.fn.scrollLeft = function (k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollLeft() : B.call(this)
        }
        return this.each(function () {
            var c = f.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(f(this), k)
        })
    };
    var C = function (k) {
        var c = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function (d) {
            for (var f =
                0, h = 0; f < c.length; f++)
                d.call(c[f], h++);
            return c
        };
        this.push = function (d) {
            c[c.length] = d;
            c.length++
        };
        this.eq = function (d) {
            return c[d]
        };
        if (k)
            for (var h = 0; h < k.length; h++) {
                var m = f.data(k[h], "__nicescroll") || !1;
                m && (this[this.length] = m, this.length++)
            }
        return this
    };
    (function (f, c, h) {
        for (var m = 0; m < c.length; m++)
            h(f, c[m])
    })(C.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (f, c) {
        f[c] = function () {
            var f = arguments;
            return this.each(function () {
                this[c].apply(this, f)
            })
        }
    });
    f.fn.getNiceScroll =
        function (k) {
            return "undefined" == typeof k ? new C(this) : this[k] && f.data(this[k], "__nicescroll") || !1
        };
    f.extend(f.expr[":"], {
        nicescroll: function (k) {
            return f.data(k, "__nicescroll") ? !0 : !1
        }
    });
    f.fn.niceScroll = function (k, c) {
        "undefined" != typeof c || "object" != typeof k || "jquery" in k || (c = k, k = !1);
        c = f.extend({}, c);
        var h = new C;
        "undefined" == typeof c && (c = {});
        k && (c.doc = f(k), c.win = f(this));
        var m = !("doc" in c);
        m || "win" in c || (c.win = f(this));
        this.each(function () {
            var d = f(this).data("__nicescroll") || !1;
            d || (c.doc = m ? f(this) : c.doc,
                d = new R(c, f(this)), f(this).data("__nicescroll", d));
            h.push(d)
        });
        return 1 == h.length ? h[0] : h
    };
    window.NiceScroll = {
        getjQuery: function () {
            return f
        }
    };
    f.nicescroll || (f.nicescroll = new C, f.nicescroll.options = I)
});
