var p = void 0, s = !0, u = null, y = !1;
window.jQuery =
	window.$ = window.jquip = function(){
		function b(a, d, e){
			if (a === d)return e;
			for(a = a.nextSibling; a;){
				if (a === d)return-1;
				a = a.nextSibling
			}
			return 1
		}

		function B(a, d){
			for(var e, i = 0, Ba = X.length; i < Ba; i++)if (X[i].apply(this, arguments))return this;
			if (!a)return this;
			if (g(a))return ga ? a() : Y.push(a), this;
			if (v(a))return this.make(a);
			if (a.nodeType || h(a))return this.make([a]);
			if ("body" == a && !d && w.body)return this.context = a.context, this[0] = w.body, this.length = 1, this.selector = a, this;
			if (a.selector !== p)return this.context = a.context,
				this.selector = a.selector, this.make(a);
			a = D(a) && "<" === a.charAt(0) ? (e = Ca.exec(a)) ? (a = [w.createElement(e[1])]) && C(d) ? c.fn.attr.call(a, d) && a : a : Z(a).childNodes : n(a, d);
			return this.make(a)
		}

		function c(a, d){
			return new B(a, d)
		}

		function x(a, d, e){
			d = d || 0;
			if (g(d))return F(a, function(a, i){
				return!!d.call(a, i, a) === e
			});
			if (d.nodeType)return F(a, function(a){
				return a === d === e
			});
			if (D(d)){
				var i = ":" == d.charAt(0) && c.Expr[d.substring(1)];
				return F(a, function(a){
					return i ? i(a) : a.parentNode && 0 <= E(n(d, a.parentNode), a)
				})
			}
			return F(a,
				function(a){
					return 0 <= E(d, a) === e
				})
		}

		function j(a, d){
			var e = c.data(a, "_J");
			if ("undefined" === typeof d)return e && Q[e] && Q[e].display;
			e || c.data(a, "_J", e = ++Q.id);
			return(Q[e] || (Q[e] = {})).display = d
		}

		function o(a){
			if (!aa[a]){
				var d = c("<" + a + ">").appendTo(w.body), e = c.css && c.css(d[0], "display") || d[0].style.display;
				d.remove();
				aa[a] = e
			}
			return aa[a]
		}

		function f(a, d){
			for(var d = " " + d + " ", e = 0, i = a.length; e < i; e++)if (m(a[e], d))return s;
			return y
		}

		function m(a, d){
			return 1 === a.nodeType && -1 < (" " + a.className + " ").replace(ha, " ").indexOf(d)
		}

		function z(a, d, e){
			d = d || w;
			e = e || [];
			1 == d.nodeType && a(d) && e.push(d);
			for(var d = d.childNodes, i = 0, g = d.length; i < g; i++){
				var b = d[i];
				1 == b.nodeType && z(a, b, e)
			}
			return e
		}

		function n(a, d, e){
			if (a && D(a)){
				d instanceof c && (d = d[0]);
				var d = d || w, e = e || c.query, i = a.charAt(0), g = a.substring(1), b = Da.test(g), h;
				try{
					return b ? G.call(e(a, d)) : b ? G.call(e(a, d)) : "#" == i ? (h = w.getElementById(g)) ? [h] : ia : L("." == i ? d.getElementsByClassName ? d.getElementsByClassName(g) : e(a, d) : d.getElementsByTagName(a))
				}catch(v){
					I(v)
				}
			}
			return 1 == a.nodeType || 9 == a.nodeType ?
				[a] : ia
		}

		function A(a, d, e){
			var i = w.head || w.getElementsByTagName("head")[0] || ba, g = w.createElement("script"), b;
			if (e)g.async = "async";
			g.onreadystatechange = function(){
				if (!(b = g.readyState) || "loaded" == b || "complete" == b)g.onload = g.onreadystatechange = u, i && g.parentNode && i.removeChild(g), g = p, d && d()
			};
			g.onload = d;
			g.src = a;
			i.insertBefore(g, i.firstChild)
		}

		function I(a){
			M.console && M.console.warn(arguments)
		}

		function r(a, d, e){
			if (a != u)if (ja && a.forEach === ja)a.forEach(d, e); else if (a.length === +a.length)for(var i = 0, g = a.length; i <
				g && !(i in a && d.call(e, a[i], i, a) === ka); i++); else for(i in a)if (U.call(a, i) && d.call(e, a[i], i, a) === ka)break
		}

		function k(a, d){
			return a && "INPUT" === a.nodeName && "text" === a.type && "value" === d ? a.value : a ? a.getAttribute(d) || (d in a ? a[d] : p) : u
		}

		function t(a, d){
			var e = [], i, g, b, c;
			for(i = 0, g = ca.length; i < g && !(c = ca[i].exec(a)); i++);
			if (i < ca.length)for(g = 0; b = d[g]; g++)(0 == i && c[1] == b.id || 1 == i && R(c[1], b.tagName) || 2 == i && m(b, c[1]) || 3 == i && c[2] == k(b, c[1])) && e.push(b); else I(a + " not supported");
			return e
		}

		function E(a, d){
			if (a == u)return-1;
			var e, i;
			if (la && a.indexOf === la)return a.indexOf(d);
			for(e = 0, i = a.length; e < i; e++)if (a[e] === d)return e;
			return-1
		}

		function H(a, d, e){
			for(var i = [], a = a[d]; a && 9 !== a.nodeType && (e === p || 1 !== a.nodeType || !c(a).U(e));)1 === a.nodeType && i.push(a), a = a[d];
			return i
		}

		function N(a, d, e){
			for(var d = d || 1, i = 0; a && !(1 === a.nodeType && ++i === d); a = a[e]);
			return a
		}

		function S(a, d){
			for(var e = []; a; a = a.nextSibling)1 === a.nodeType && a !== d && e.push(a);
			return e
		}

		function F(a, d, e){
			for(var i = [], g, e = !!e, b = 0, c = a.length; b < c; b++)g = !!d(a[b], b), e !== g && i.push(a[b]);
			return i
		}

		function O(a, d, e){
			var i, g, b = [], h = 0, f = a.length;
			if (a instanceof c || "number" == typeof f && (0 < f && a[0] && a[f - 1] || 0 === f || v(a)))for(; h < f; h++)i = d(a[h], h, e), i != u && (b[b.length] = i); else for(g in a)i = d(a[g], g, e), i != u && (b[b.length] = i);
			return b.concat.apply([], b)
		}

		function K(a, d, e){
			if (!a)return{};
			if (d && e)return a.setAttribute(d, e), u;
			var i = {};
			r(T(a), function(a, d){
				0 === d.indexOf("data-") && a && (i[d.substr(5)] = a)
			});
			return D(d) ? i[d] : i
		}

		function T(a){
			for(var d = {}, e = 0, a = a.attributes, i = a.length; e < i; e++)d[a.item(e).nodeName] =
				a.item(e).nodeValue;
			return d
		}

		function R(a, d){
			return!a || !d ? a == d : a.toLowerCase() === d.toLowerCase()
		}

		function J(a){
			return a == u ? "" + a : ma[Ea.call(a)] || "object"
		}

		function D(a){
			return"string" == typeof a
		}

		function g(a){
			return"function" == typeof a || "function" === J(a)
		}

		function v(a){
			return"array" === J(a)
		}

		function h(a){
			return a && "object" == typeof a && "setInterval"in a
		}

		function C(a){
			if (!a || "object" !== J(a) || a.nodeType || h(a))return y;
			try{
				if (a.constructor && !U.call(a, "constructor") && !U.call(a.constructor.prototype, "isPrototypeOf"))return y
			}catch(d){
				return y
			}
			for(var e in a);
			return e === p || U.call(a, e)
		}

		function P(a, d){
			var e = a.length, i = 0;
			if ("number" == typeof d.length)for(var g = d.length; i < g; i++)a[e++] = d[i]; else for(; d[i] !== p;)a[e++] = d[i++];
			a.length = e;
			return a
		}

		function na(){
			var a, d, e, i, b, c = arguments, h = c[0] || {}, f = 1, k = c.length, m = y;
			"boolean" == typeof h && (m = h, h = c[1] || {}, f = 2);
			"object" != typeof h && !g(h) && (h = {});
			k === f && (h = this, --f);
			for(; f < k; f++)if ((a = c[f]) != u)for(d in a)e = h[d], i = a[d], h !== i && (m && i && (C(i) || (b = v(i))) ? (b ? (b = y, e = e && v(e) ? e : []) : e = e && C(e) ? e : {}, h[d] = na(m, e, i)) : i !== p && (h[d] =
				i));
			return h
		}

		function L(a, d){
			var e = d || [];
			if (a != u){
				var i = J(a);
				a.length == u || "string" == i || "function" == i || "regexp" === i || h(a) ? oa.call(e, a) : P(e, a)
			}
			return e
		}

		function Z(a, d, e){
			d = d || w || d.ownerDocument || d[0] && d[0].ownerDocument || w;
			e = e || d.createDocumentFragment();
			if (!D(a) && "number" == typeof a.length){
				var i = e, g = [], b, c;
				for(b = 0; (c = a[b]) != u; b++)D(c) && (c = pa(c, d)), c.nodeType ? g.push(c) : g = P(g, c);
				if (i)for(b = 0; b < g.length; b++)g[b].nodeType && i.appendChild(g[b]);
				return g && e
			}
			for(a = pa(a); a.firstChild;)e.appendChild(a.firstChild);
			return e
		}

		function pa(a, d){
			var e = (d || w).createElement("div"), i = (Fa.exec(a) || ["", ""])[1].toLowerCase(), i = qa[i] || qa.i, g = i[0];
			for(e.innerHTML = i[1] + a + i[2]; g--;)e = e.lastChild;
			return e
		}

		function V(a){
			if (da && (W = Ga, a.sort(da), W))for(var d = 1; d < a.length; d++)a[d] === a[d - 1] && a.splice(d--, 1);
			return a
		}

		function Ha(){
			if (!w.body)return u;
			var a = w.createElement("div");
			w.body.appendChild(a);
			a.style.width = "20px";
			a.style.padding = "10px";
			var d = a.offsetWidth;
			w.body.removeChild(a);
			return 40 == d
		}

		function ra(a, d){
			sa.push({url: a,
				g: d})
		}

		function ta(){
			r(Y, function(a){
				a()
			});
			ga = s
		}

		var M = window, w = document, ba = w.documentElement, Y = [], sa = [], ga, Ia = /Until$/, Ja = /,/, Ka = /^(?:parents|prevUntil|prevAll)/, Fa = /<([\w:]+)/, ha = /[\n\t\r]/g, ua = /\s+/, La = /\d/, Ma = /\r\n/g, Ca = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, va = /\r?\n/g, Na = /^(?:select|textarea)/i, Oa = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, wa = String.prototype.trim, ea, xa = /^\s+/, ya = /\s+$/, fa, da, Pa = {children: s, T: s, next: s, Z: s}, Ea = Object.prototype.toString,
			ma = {}, W = y, Ga = s, qa = {X: [1, "<select multiple='multiple'>", "</select>"], V: [1, "<fieldset>", "</fieldset>"], ca: [1, "<table>", "</table>"], da: [2, "<table><tbody>", "</tbody></table>"], ba: [3, "<table><tbody><tr>", "</tr></tbody></table>"], S: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], P: [1, "<map>", "</map>"], i: [0, "", ""]}, Da = /[,\s.#\[>+]/, ia = [], ka = {}, q = Array.prototype, U = Object.prototype.hasOwnProperty, G = q.slice, oa = q.push, za = q.indexOf, ja = q.forEach, Aa = q.filter, la = q.indexOf;
		/\S/.test("\u00a0") && (xa = /^[\s\xA0]+/,
			ya = /[\s\xA0]+$/);
		var X = [], Qa = 0, Q = {O: 0}, aa = {}, q = B.prototype = c.prototype = c.fn = {constructor: c, selector: "", length: 0, d: function(a, d, e){
			if ((d = a[0]) && this[0]){
				if (!(a = 3 === d.nodeType && d))if (a = (a = d && d.parentNode) && 11 === a.nodeType && a.childNodes.length === this.length ? a : Z(d), d = a.firstChild, 1 === a.childNodes.length && (a = d), !d)return this;
				for(d = 0, l = this.length; d < l; d++)e.call(this[d], a)
			}
			return this
		}, a: function(a, d, e){
			var i = this.constructor();
			v(a) ? oa.apply(i, a) : P(i, a);
			i.aa = this;
			i.j = this.j;
			if ("find" === d)i.q = this.selector +
				(this.selector ? " " : "") + e; else if (d)i.q = this.selector + "." + d + "(" + e + ")";
			return i
		}};
		q.make = function(a){
			this.length = a && a.length || 0;
			if (0 != this.length)for(var d = 0, e = a.length; d < e; d++)this[d] = a[d];
			return this
		};
		q.toArray = function(){
			return G.call(this, 0)
		};
		q.get = function(a){
			return a == u ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
		};
		q.add = function(a, d){
			var e = "string" == typeof a ? c(a, d) : L(a && a.nodeType ? [a] : a), i = P(this.get(), e);
			return this.a(!e[0] || !e[0].parentNode || 11 == e[0].parentNode.nodeType || !i[0] || !i[0].parentNode ||
				11 == i[0].parentNode.nodeType ? i : V(i))
		};
		q.each = function(a){
			if (!g(a))return this;
			for(var d = 0, e = this.length; d < e; d++)a.call(this[d], d, this[d]);
			return this
		};
		q.attr = function(a, d){
			var e = this[0];
			return D(a) && d === p ? k(e, a) : this.each(function(e){
				var b = this.nodeType;
				if (3 !== b && 8 !== b && 2 !== b)if ("object" == typeof a)for(var c in a)d === u ? this.removeAttribute(a) : this.setAttribute(c, a[c]); else this.setAttribute(a, g(d) ? d.call(this, e, this.getAttribute(a)) : d)
			})
		};
		q.removeAttr = function(a){
			return this.each(function(){
				this.removeAttribute(a)
			})
		};
		q.data = function(a, d){
			return K(this[0], a, d)
		};
		q.append = function(){
			return this.d(arguments, s, function(a){
				1 === this.nodeType && this.appendChild(a)
			})
		};
		q.prepend = function(){
			return this.d(arguments, s, function(a){
				1 === this.nodeType && this.insertBefore(a, this.firstChild)
			})
		};
		q.before = function(){
			return this.d(arguments, y, function(a){
				this.parentNode.insertBefore(a, this)
			})
		};
		q.after = function(){
			return this[0] && this[0].parentNode ? this.d(arguments, y, function(a){
				this.parentNode.insertBefore(a, this.nextSibling)
			}) : this
		};
		q.hide = function(){
			return this.each(function(){
				j(this, this.style.display);
				this.style.display = "none"
			})
		};
		q.show = function(){
			return this.each(function(){
				this.style.display = j(this) || o(this.tagName)
			})
		};
		q.toggle = function(){
			return this.each(function(){
				this.style.display = c.Expr.hidden(this) ? j(this) || o(this.tagName) : (j(this, this.style.display), "none")
			})
		};
		q.eq = function(a){
			return-1 === a ? this.slice(a) : this.slice(a, +a + 1)
		};
		q.first = function(){
			return this.eq(0)
		};
		q.last = function(){
			return this.eq(-1)
		};
		q.slice = function(){
			return this.a(G.apply(this,
				arguments), "slice", G.call(arguments).join(","))
		};
		q.map = function(a){
			return this.a(O(this, function(d, e){
				return a.call(d, e, d)
			}))
		};
		q.find = function(a){
			var d = this, e, g;
			if (!D(a))return c(a).filter(function(){
				for(e = 0, g = d.length; e < g; e++)if (fa(d[e], this))return s
			});
			var b = this.a("", "find", a), h, f, v;
			for(e = 0, g = this.length; e < g; e++)if (h = b.length, P(b, c(a, this[e])), 0 == e)for(f = h; f < b.length; f++)for(v = 0; v < h; v++)if (b[v] === b[f]){
				b.splice(f--, 1);
				break
			}
			return b
		};
		q.not = function(a){
			return this.a(x(this, a, y), "not", a)
		};
		q.filter =
			function(a){
				return this.a(x(this, a, s), "filter", a)
			};
		q.indexOf = function(a){
			return E(this, a)
		};
		q.is = function(a){
			return 0 < this.length && 0 < c(this[0]).filter(a).length
		};
		q.remove = function(){
			for(var a = 0, d; (d = this[a]) != u; a++)d.parentNode && d.parentNode.removeChild(d);
			return this
		};
		q.closest = function(a, d){
			var e = [], g;
			for(g = 0, l = this.length; g < l; g++)for(cur = this[g]; cur;)if (0 < t(a, [cur]).length){
				e.push(cur);
				break
			} else if (cur = cur.parentNode, !cur || !cur.ownerDocument || cur === d || 11 === cur.nodeType)break;
			e = 1 < e.length ? V(e) :
				e;
			return this.a(e, "closest", a)
		};
		q.val = function(a){
			return a == u ? this[0] && this[0].value || "" : this.each(function(){
				this.value = a
			})
		};
		q.html = function(a){
			return a == u ? this[0] && this[0].innerHTML || "" : this.each(function(){
				this.innerHTML = a
			})
		};
		q.text = function(a){
			var d = this[0], e;
			return"undefined" == typeof a ? d && (e = d.nodeType) ? 1 === e || 9 === e ? "string" == typeof d.textContent ? d.textContent : d.innerText.replace(Ma, "") : 3 === e || 4 === e ? d.nodeValue : u : u : this.empty().append((d && d.ownerDocument || w).createTextNode(a))
		};
		q.empty = function(){
			for(var a =
				0, d; (d = this[a]) != u; a++)for(; d.firstChild;)d.removeChild(d.firstChild);
			return this
		};
		q.addClass = function(a){
			var d, e, b, h, f, v, C;
			if (g(a))return this.each(function(d){
				c(this).addClass(a.call(this, d, this.className))
			});
			if (a && D(a)){
				d = a.split(ua);
				for(e = 0, b = this.length; e < b; e++)if ((h = this[e]) && 1 === h.nodeType)if (!h.className && 1 === d.length)h.className = a; else {
					f = " " + h.className + " ";
					for(v = 0, C = d.length; v < C; v++)~f.indexOf(" " + d[v] + " ") || (f += d[v] + " ");
					h.className = ea(f)
				}
			}
			return this
		};
		q.removeClass = function(a){
			var d, e,
				b, h, f, v, C;
			if (g(a))return this.each(function(d){
				c(this).removeClass(a.call(this, d, this.className))
			});
			if (a && D(a) || a === p){
				d = (a || "").split(ua);
				for(e = 0, b = this.length; e < b; e++)if (h = this[e], 1 === h.nodeType && h.className)if (a){
					f = (" " + h.className + " ").replace(ha, " ");
					for(v = 0, C = d.length; v < C; v++)f = f.replace(" " + d[v] + " ", " ");
					h.className = ea(f)
				} else h.className = ""
			}
			return this
		};
		q.hasClass = function(a){
			return f(this, a)
		};
		q.fadeIn = function(){
			this.each(function(){
				c(this).show()
			})
		};
		q.fadeOut = function(){
			this.each(function(){
				c(this).hide()
			})
		};
		q.serializeArray = function(){
			return this.map(
				function(){
					return this.elements ? L(this.elements) : this
				}).filter(
				function(){
					return this.name && !this.disabled && (this.checked || Na.test(this.nodeName) || Oa.test(this.type))
				}).map(
				function(a, d){
					var e = c(this).val();
					return e == u || v(e) ? O(e, function(a){
						return{name: d.name, value: a.replace(va, "\r\n")}
					}) : {name: d.name, value: e.replace(va, "\r\n")}
				}).get()
		};
		c.Expr = {hidden: function(a){
			return 0 === a.offsetWidth || 0 == a.offsetHeight || "none" === (c.css && c.css(a, "display") || a.style.display)
		},
			visible: function(a){
				return!c.Expr.hidden(a)
			}};
		c.hasClass = f;
		c.walk = z;
		c.$$ = n;
		c.setQuery = function(a){
			c.query = function(d, e){
				return n(d, e, a || function(a, d){
					return d.querySelectorAll(a)
				})
			}
		};
		q = M.Sizzle || M.qwery;
		c.setQuery(q || function(a, d){
			return w.querySelectorAll ? L((d || w).querySelectorAll(a)) : []
		});
		c.loadScript = A;
		c.each = function(a, d, e){
			var b, h = 0, c = a.length, f = c === p || g(a);
			if (e)if (f)for(b in a){
				if (d.apply(a[b], e) === y)break
			} else for(; h < c && !(d.apply(a[h++], e) === y);); else if (f)for(b in a){
				if (d.call(a[b], b, a[b]) ===
					y)break
			} else for(; h < c && !(d.call(a[h], h, a[h++]) === y););
			return a
		};
		c._each = r;
		var ca = [/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/];
		c.filter = t;
		c._indexOf = E;
		c._defaults = function(a){
			r(G.call(arguments, 1), function(d){
				for(var e in d)a[e] == u && (a[e] = d[e])
			});
			return a
		};
		c._filter = function(a, d, e){
			var g = [];
			if (a == u)return g;
			if (Aa && a.filter === Aa)return a.filter(d,
				e);
			r(a, function(a, b, h){
				d.call(e, a, b, h) && (g[g.length] = a)
			});
			return g
		};
		c.proxy = function(a, d){
			if ("string" == typeof d)var e = a[d], d = a, a = e;
			if (g(a)){
				var b = G.call(arguments, 2), e = function(){
					return a.apply(d, b.concat(G.call(arguments)))
				};
				e.f = a.f = a.f || e.f || Qa++;
				return e
			}
		};
		c.dir = H;
		c.nth = N;
		c.sibling = S;
		c.grep = F;
		c.map = O;
		c.data = K;
		c.attrs = T;
		c.eqSI = R;
		c.trim = ea = wa ? function(a){
			return a == u ? "" : wa.call(a)
		} : function(a){
			return a == u ? "" : a.toString().replace(xa, "").replace(ya, "")
		};
		c.indexOf = c.inArray = function(a, d){
			if (!d)return-1;
			if (za)return za.call(d, a);
			for(var e = 0, g = d.length; e < g; e++)if (d[e] === a)return e;
			return-1
		};
		r("Boolean Number String Function Array Date RegExp Object".split(" "), function(a){
			ma["[object " + a + "]"] = a.toLowerCase();
			return this
		});
		c.type = J;
		c.isFunction = g;
		c.isArray = Array.isArray || v;
		c.isWindow = h;
		c.isNaN = function(a){
			return a == u || !La.test(a) || isNaN(a)
		};
		c.merge = P;
		c.extend = c.fn.extend = na;
		c.makeArray = L;
		c.htmlFrag = Z;
		fa = c.contains = ba.contains ? function(a, d){
			return a !== d && (a.contains ? a.contains(d) : s)
		} : function(){
			return y
		};
		da = ba.compareDocumentPosition ? (fa = function(a, d){
			return!!(a.compareDocumentPosition(d) & 16)
		}) && function(a, d){
			return a === d ? (W = s, 0) : !a.compareDocumentPosition || !d.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(d) & 4 ? -1 : 1
		} : function(a, d){
			if (a === d)return W = s, 0;
			if (a.sourceIndex && d.sourceIndex)return a.sourceIndex - d.sourceIndex;
			var e, g, h = [], c = [];
			e = a.parentNode;
			g = d.parentNode;
			var f = e;
			if (e === g)return b(a, d);
			if (e){
				if (!g)return 1
			} else return-1;
			for(; f;)h.unshift(f), f = f.parentNode;
			for(f = g; f;)c.unshift(f), f = f.parentNode;
			e = h.length;
			g = c.length;
			for(f = 0; f < e && f < g; f++)if (h[f] !== c[f])return b(h[f], c[f]);
			return f === e ? b(a, c[f], -1) : b(h[f], d, 1)
		};
		c.unique = V;
		r({parent: function(a){
			return(a = a.parentNode) && 11 !== a.nodeType ? a : u
		}, parents: function(a){
			return H(a, "parentNode")
		}, parentsUntil: function(a, d, e){
			return H(a, "parentNode", e)
		}, next: function(a){
			return N(a, 2, "nextSibling")
		}, prev: function(a){
			return N(a, 2, "previousSibling")
		}, nextAll: function(a){
			return H(a, "nextSibling")
		}, prevAll: function(a){
			return H(a,
				"previousSibling")
		}, nextUntil: function(a, d, e){
			return H(a, "nextSibling", e)
		}, prevUntil: function(a, d, e){
			return H(a, "previousSibling", e)
		}, siblings: function(a){
			return S(a.parentNode.firstChild, a)
		}, children: function(a){
			return S(a.firstChild)
		}, contents: function(a){
			return"iframe" === a.nodeName ? a.contentDocument || a.contentWindow["document "] : L(a.childNodes)
		}}, function(a, d){
			c.fn[d] = function(e, g){
				var b = O(this, a, e), h = G.call(arguments);
				Ia.test(d) || (g = e);
				"string" == typeof g && (b = t(g, b));
				b = 1 < this.length && !Pa[d] ? V(b) :
					b;
				if ((1 < this.length || Ja.test(g)) && Ka.test(d))b = b.reverse();
				return this.a(b, d, h.join(","))
			}
		});
		r({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after"}, function(a, d){
			c.fn[d] = function(e){
				var g = [], e = c(e), b, h;
				if ((b = 1 === this.length && this[0].parentNode) && 11 === b.nodeType && 1 === b.childNodes.length && 1 === e.length)return e[a](this[0]), this;
				for(b = 0, l = e.length; b < l; b++)h = (0 < b ? this.R(s) : this).get(), c(e[b])[a](h), g = g.concat(h);
				return this.a(g, d, e.selector)
			}
		});
		(function(){
			var a = document.createElement("div");
			a.style.display = "none";
			a.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
			a = a.getElementsByTagName("a")[0];
			c.support = {Q: u, opacity: /^0.55$/.test(a.style.opacity), cssFloat: !!a.style.cssFloat};
			var a = /(opera)(?:.*version)?[ \/]([\w.]+)/, d = /(msie) ([\w.]+)/, e = /(mozilla)(?:.*? rv:([\w.]+))?/, g = navigator.userAgent.toLowerCase(), a = /(webkit)[ \/]([\w.]+)/.exec(g) || a.exec(g) || d.exec(g) || 0 > g.indexOf("compatible") && e.exec(g) || [];
			(c.browser =
			{version: a[2] || "0"})[a[1] || ""] = s
		})();
		c.scriptsLoaded = function(a){
			g(a) && Y.push(a)
		};
		c.loadAsync = ra;
		!q && !w.querySelectorAll && ra("http://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js", function(){
			c.setQuery(M.Sizzle || M.qwery)
		});
		c.init = y;
		c.onload = function(){
			if (!c.init)try{
				c.support.boxModel = Ha();
				var a = 0;
				r(sa, function(d){
					a++;
					A(d.url, function(){
						try{
							d.g && d.g()
						}catch(g){
						}
						--a || ta()
					})
				});
				c.init = s;
				a || ta()
			}catch(d){
				I(d)
			}
		};
		w.body && !c.init && setTimeout(c.onload, 1);
		c.hook = function(a){
			X.push(a)
		};
		c.plug = function(a, d){
			d = g(a) ? a : d;
			if (!g(d))throw"Plugin fn required";
			d(c)
		};
		return c
	}();
$.plug("ajax", function(b){
	function B(){
		if (o != u)return o();
		for(var b = 0, c = j.length; b < c; b++)try{
			var z = j[b], n = z();
			if (n != u)return o = z, n
		}catch(A){
		}
		return function(){
		}
	}

	function c(b, c){
		c = c || b.getResponseHeader("Content-Type").split(";")[0];
		switch(c){
			case "text/xml":
				return b.responseXML;
			case "json":
			case "text/json":
			case "application/json":
			case "text/javascript":
			case "application/javascript":
			case "application/x-javascript":
				return window.JSON ? window.JSON.parse(b.responseText) : eval(b.responseText);
			default:
				return b.responseText
		}
	}

	function x(f){
		var m = B(), j, n = 0, f = b._defaults(f, {userAgent: "XMLHttpRequest", lang: "en", type: "GET", data: u, contentType: "application/x-www-form-urlencoded", dataType: "application/json"});
		f.timeout && (j = setTimeout(function(){
			m.abort();
			f.r && f.r(f.url)
		}, f.timeout));
		var A = b(f.context || document);
		m.onreadystatechange = function(){
			if (4 == m.readyState){
				j && clearTimeout(j);
				if (300 > m.status){
					var b = c(m, f.dataType);
					f.success && f.success(b);
					A.trigger("ajaxSuccess", [m, b, f])
				} else f.error && f.error(m, m.status, m.statusText), A.trigger(A,
					"ajaxError", [m, m.statusText, f]);
				f.complete && f.complete(m, m.statusText);
				A.trigger(A, "ajaxComplete", [m, f])
			} else f.progress && f.progress(++n)
		};
		var o = f.url, r = u, k = "POST" == f.type || "PUT" == f.type;
		!k && f.data && (o += "?" + formData(f.data));
		m.open(f.type, o);
		k && (r = (o = 0 <= f.dataType.indexOf("json")) ? JSON.stringify(f.data) : formData(f.data), m.setRequestHeader("Content-Type", o ? "application/json" : "application/x-www-form-urlencoded"));
		m.send(r)
	}

	var j = [function(){
		return new XMLHttpRequest
	}, function(){
		return new ActiveXObject("Microsoft.XMLHTTP")
	},
		function(){
			return new ActiveXObject("MSXML2.XMLHTTP.3.0")
		}, function(){
			return new ActiveXObject("MSXML2.XMLHTTP")
		}], o = u;
	b.xhr = B;
	b._xhrResp = c;
	b.formData = function(b){
		var c = [], j = /%20/g, n;
		for(n in b)c.push(encodeURIComponent(n).replace(j, "+") + "=" + encodeURIComponent(b[n].toString()).replace(j, "+"));
		return c.join("&")
	};
	b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(c, m){
		b.fn[m] = function(b){
			return this.bind(m, b)
		}
	});
	b.ajax = x;
	b.getJSON = function(c, m, j){
		b.isFunction(m) &&
		(j = m, m = u);
		x({url: c, data: m, success: j, dataType: "json"})
	};
	b.get = function(c, m, j, n){
		b.isFunction(m) && (n = j, j = m, m = u);
		x({url: c, type: "GET", data: m, success: j, dataType: n || "text/plain"})
	};
	b.post = function(c, j, o, n){
		b.isFunction(j) && (n = o, o = j, j = u);
		x({url: c, type: "POST", data: j, success: o, dataType: n || "text/plain"})
	};
	window.JSON || b.loadAsync("http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js")
});
$.plug("css", function(b){
	function B(b, c){
		return c.toUpperCase()
	}

	function c(g, c, h){
		var f = "width" === c ? g.offsetWidth : g.offsetHeight, c = "width" === c ? F : O;
		return 0 < f ? ("border" !== h && b.each(c, function(){
			h || (f -= parseFloat(j(g, "padding" + this)) || 0);
			f = "margin" === h ? f + (parseFloat(j(g, h + this)) || 0) : f - (parseFloat(j(g, "border" + this + "Width")) || 0)
		}), f + "px") : ""
	}

	function x(g, c, h, C){
		if (g && !(3 === g.nodeType || 8 === g.nodeType || !g.style)){
			var k, j = f(c), m = g.style, t = b.cssHooks[j], c = b.cssProps[j] || j;
			if (h !== p){
				if (!("number" === typeof h &&
					isNaN(h) || h == u))if ("number" === typeof h && !b.cssNumber[j] && (h += "px"), !t || !("set"in t) || (h = t.set(g, h)) !== p)try{
					m[c] = h
				}catch(n){
				}
			} else return t && "get"in t && (k = t.get(g, y, C)) !== p ? k : m[c]
		}
	}

	function j(g, c, h){
		var C, k = f(c), j = b.cssHooks[k], c = b.cssProps[k] || k;
		if (j && "get"in j && (C = j.get(g, s, h)) !== p)return C;
		if (K)return K(g, c, k)
	}

	function o(b, c, h){
		var f = {}, k;
		for(k in c)f[k] = b.style[k], b.style[k] = c[k];
		h.call(b);
		for(k in c)b.style[k] = f[k]
	}

	function f(b){
		return b.replace(k, B)
	}

	function m(g, c, h, f, k, j){
		var t = g.length;
		if ("object" ===
			typeof c){
			for(var n in c)m(g, n, c[n], f, k, h);
			return g
		}
		if (h !== p){
			f = !j && f && b.isFunction(h);
			for(n = 0; n < t; n++)k(g[n], c, f ? h.call(g[n], n, k(g[n], c)) : h, j);
			return g
		}
		return t ? k(g[0], c) : p
	}

	function z(g){
		return b.isWindow(g) ? g : 9 === g.nodeType ? g.defaultView || g.parentWindow : y
	}

	var n = document, A = n.documentElement, I = /alpha\([^)]*\)/i, r = /opacity=([^)]*)/, k = /-([a-z])/ig, t = /([A-Z])/g, E = /^-?\d+(?:px)?$/i, H = /^-?\d/, N = /^(?:body|html)$/i, S = {position: "absolute", visibility: "hidden", display: "block"}, F = ["Left", "Right"], O = ["Top", "Bottom"],
		K, T, R;
	b.cssHooks = {opacity: {get: function(b, c){
		if (!c)return b.style.opacity;
		var h = K(b, "opacity", "opacity");
		return"" === h ? "1" : h
	}}};
	b._each(["height", "width"], function(g){
		b.cssHooks[g] = {get: function(b, h, f){
			var k;
			if (h){
				if (0 !== b.offsetWidth)return c(b, g, f);
				o(b, S, function(){
					k = c(b, g, f)
				});
				return k
			}
		}, set: function(b, g){
			if (E.test(g)){
				if (g = parseFloat(g), 0 <= g)return g + "px"
			} else return g
		}}
	});
	b.support.opacity || (b.support.opacity = {get: function(b, c){
		return r.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) ||
			"") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
	}, set: function(g, c){
		var h = g.style;
		h.zoom = 1;
		var f = b.isNaN(c) ? "" : "alpha(opacity=" + 100 * c + ")", k = h.filter || "";
		h.filter = I.test(k) ? k.replace(I, f) : h.filter + " " + f
	}});
	n.defaultView && n.defaultView.getComputedStyle && (T = function(g, c, h){
		var f, h = h.replace(t, "-$1").toLowerCase();
		if (c = g.ownerDocument.defaultView){
			if (c = c.getComputedStyle(g, u))f = c.getPropertyValue(h), "" === f && !b.contains(g.ownerDocument.documentElement, g) && (f = b.style(g, h));
			return f
		}
	});
	n.documentElement.currentStyle &&
	(R = function(b, c){
		var f, k = b.currentStyle && b.currentStyle[c], j = b.runtimeStyle && b.runtimeStyle[c], t = b.style;
		if (!E.test(k) && H.test(k)){
			f = t.left;
			if (j)b.runtimeStyle.left = b.currentStyle.left;
			t.left = "fontSize" === c ? "1em" : k || 0;
			k = t.pixelLeft + "px";
			t.left = f;
			if (j)b.runtimeStyle.left = j
		}
		return"" === k ? "auto" : k
	});
	K = T || R;
	b.fn.css = function(b, c){
		return 2 === arguments.length && c === p ? this : m(this, b, c, s, function(b, c, g){
			return g !== p ? x(b, c, g) : j(b, c)
		})
	};
	b.cssNumber = {zIndex: s, fontWeight: s, opacity: s, zoom: s, lineHeight: s};
	b.cssProps =
	{"float": b.support.cssFloat ? "cssFloat" : "styleFloat"};
	b.style = x;
	b.css = j;
	b.swap = o;
	b.camelCase = f;
	var J, D;
	b.fn.offset = function(){
		var c = this[0], f;
		if (!c || !c.ownerDocument)return u;
		if (c === c.ownerDocument.body){
			f = c.offsetTop;
			var h = c.offsetLeft;
			if (!J){
				var k = n.body, t = n.createElement("div"), m, E, o = parseFloat(j(k, "marginTop")) || 0;
				b.extend(t.style, {position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden"});
				t.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
				k.insertBefore(t, k.firstChild);
				m = t.firstChild;
				E = m.firstChild;
				E.style.position = "fixed";
				E.style.top = "20px";
				E.style.position = E.style.top = "";
				m.style.overflow = "hidden";
				m.style.position = "relative";
				D = k.offsetTop !== o;
				k.removeChild(t);
				J = s
			}
			D && (f += parseFloat(j(c, "marginTop")) || 0, h += parseFloat(j(c, "marginLeft")) || 0);
			return{top: f, left: h}
		}
		try{
			f = c.getBoundingClientRect()
		}catch(r){
		}
		if (!f || !b.contains(A, c))return f ? {top: f.top, left: f.left} : {top: 0, left: 0};
		c = n.body;
		h = z(n);
		return{top: f.top + (h.pageYOffset || b.support.boxModel &&
			A.scrollTop || c.scrollTop) - (A.clientTop || c.clientTop || 0), left: f.left + (h.pageXOffset || b.support.boxModel && A.scrollLeft || c.scrollLeft) - (A.clientLeft || c.clientLeft || 0)}
	};
	b.fn.position = function(){
		if (!this[0])return u;
		var b = this[0], c = this.offsetParent(), f = this.offset(), k = N.test(c[0].nodeName) ? {top: 0, left: 0} : c.offset();
		f.top -= parseFloat(j(b, "marginTop")) || 0;
		f.left -= parseFloat(j(b, "marginLeft")) || 0;
		k.top += parseFloat(j(c[0], "borderTopWidth")) || 0;
		k.left += parseFloat(j(c[0], "borderLeftWidth")) || 0;
		return{top: f.top -
			k.top, left: f.left - k.left}
	};
	b.fn.offsetParent = function(){
		return this.map(function(){
			for(var b = this.offsetParent || n.body; b && !N.test(b.nodeName) && "static" === j(b, "position");)b = b.offsetParent;
			return b
		})
	};
	b._each(["Height", "Width"], function(c){
		var f = c.toLowerCase();
		b.fn["inner" + c] = function(){
			var b = this[0];
			return b && b.style ? parseFloat(j(b, f, "padding")) : u
		};
		b.fn["outer" + c] = function(b){
			var c = this[0];
			return c && c.style ? parseFloat(j(c, f, b ? "margin" : "border")) : u
		};
		b.fn[f] = function(h){
			var k = this[0];
			if (!k)return h ==
				u ? u : this;
			if (b.isFunction(h))return this.l(function(c){
				var g = b(this);
				g[f](h.call(this, c, g[f]()))
			});
			if (b.isWindow(k)){
				var t = k.document.documentElement["client" + c], m = k.document.body;
				return"CSS1Compat" === k.document.compatMode && t || m && m["client" + c] || t
			}
			if (9 === k.nodeType)return Math.max(k.documentElement["client" + c], k.body["scroll" + c], k.documentElement["scroll" + c], k.body["offset" + c], k.documentElement["offset" + c]);
			return h === p ? (k = j(k, f), t = parseFloat(k), b.isNaN(t) ? k : t) : this.css(f, "string" === typeof h ? h : h + "px")
		}
	});
	b._each(["Left", "Top"], function(c, f){
		var k = "scroll" + c;
		b.fn[k] = function(c){
			var g, j;
			if (c === p){
				g = this[0];
				return!g ? u : (j = z(g)) ? "pageXOffset"in j ? j[f ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && j.document.documentElement[k] || j.document.body[k] : g[k]
			}
			return this.l(function(){
				(j = z(this)) ? j.scrollTo(!f ? c : b(j).scrollLeft(), f ? c : b(j).scrollTop()) : this[k] = c
			})
		}
	})
});
$.plug("custom", function(b){
	for(var B = {}, c = window.location.search.substring(1).split("&"), x = 0; x < c.length; x++){
		var j = c[x].split("=");
		B[j[0]] = unescape(j[1])
	}
	b.queryString = function(b){
		return B[b]
	};
	var o = b.Key = function(b){
		this.keyCode = b
	};
	o.o = {t: 8, M: 9, B: 13, L: 16, v: 17, s: 18, J: 19, u: 20, C: 27, I: 33, H: 34, A: 35, D: 36, G: 37, N: 38, K: 39, z: 40, F: 45, w: 46};
	b._each(o.o, function(b, c){
		o.prototype["is" + c] = function(){
			return this.keyCode === b
		}
	});
	b.key = function(b){
		b = b || window.event;
		return new o(b.keyCode || b.which)
	};
	b.cancelEvent =
		function(b){
			if (!b)b = window.event;
			b.cancelBubble = s;
			b.returnValue = y;
			b.stopPropagation && (b.stopPropagation(), b.preventDefault());
			return y
		};
	b.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, n: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
	b._template = function(c, j){
		var o = b.templateSettings, o = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + c.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(o.escape,
			function(b, c){
				return"',_.escape(" + c.replace(/\\'/g, "'") + "),'"
			}).replace(o.n,
			function(b, c){
				return"'," + c.replace(/\\'/g, "'") + ",'"
			}).replace(o.evaluate || u,
			function(b, c){
				return"');" + c.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + ";__p.push('"
			}).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", n = new Function("obj", "$", o);
		return j ? n(j, b) : function(c){
			return n(c, b)
		}
	}
});
$.plug("docready", function(b){
	function B(){
		if (!z){
			try{
				j.documentElement.doScroll("left")
			}catch(b){
				setTimeout(B, 1);
				return
			}
			c()
		}
	}

	function c(c){
		c === s && n--;
		if (!n || c !== s && !z){
			if (!j.body)return setTimeout(o, 1);
			z = s;
			if (!(c !== s && 0 < --n) && m){
				var f = 0, o = m;
				for(m = u; c = o[f++];)c.call(j, b);
				b.fn.trigger && b(j).trigger("ready").unbind("ready")
			}
		}
	}

	var x = window, j = document, o, f, m = [], z = y, n = 1;
	b.hook(function(b){
		if ("function" == typeof b)return this.ready(b), s
	});
	b.ready = c;
	o = j.addEventListener ? function(){
		j.removeEventListener("DOMContentLoaded",
			o, y);
		c()
	} : function(){
		"complete" === j.readyState && (j.detachEvent("onreadystatechange", o), c())
	};
	b.bindReady = function(){
		if (!f){
			f = s;
			if ("complete" === j.readyState)return setTimeout(c, 1);
			if (j.addEventListener)j.addEventListener("DOMContentLoaded", o, y), x.addEventListener("load", c, y); else if (j.attachEvent){
				j.attachEvent("onreadystatechange", o);
				x.attachEvent("onload", c);
				var b = y;
				try{
					b = window.frameElement == u
				}catch(m){
				}
				j.documentElement.doScroll && b && B()
			}
		}
	};
	b.fn.ready = function(c){
		b.bindReady();
		z ? c.call(j, b) : m &&
			m.push(c);
		return this
	};
	b.init || b(document).ready(b.onload)
});
$.plug("events", function(b){
	function B(b, c, f){
		b.addEventListener ? b.addEventListener(c, f, y) : (b["e" + c + f] = f, b[c + f] = function(){
			b["e" + c + f](window.event)
		}, b.attachEvent("on" + c, b[c + f]))
	}

	function c(b, c, f){
		b.removeEventListener ? b.removeEventListener(c, f, y) : (b.detachEvent("on" + c, b[c + f]), b[c + f] = u)
	}

	function x(b){
		b = ("" + b).split(".");
		return{c: b[0], e: b.slice(1).sort().join(" ")}
	}

	function j(c, f, j, m){
		f = x(f);
		if (f.e)var o = RegExp("(?:^| )" + f.e.replace(" ", " .* ?") + "(?: |$)");
		return b._filter(n[c.b || (c.b = A++)] || [], function(b){
			return b &&
				(!f.c || b.c == f.c) && (!f.e || o.test(b.e)) && (!j || b.h == j) && (!m || b.p == m)
		})
	}

	function o(c, f, j, m, o){
		var r = c.b || (c.b = A++), F = n[r] || (n[r] = []);
		b._each(f.split(/\s/), function(f){
			f = b.extend(x(f), {h: j, p: m, k: o, m: F.length});
			F.push(f);
			B(c, f.c, o || j)
		});
		c = u
	}

	function f(f, m, o, r){
		var x = f.b || (f.b = A++);
		b._each((m || "").split(/\s/), function(m){
			b._each(j(f, m, o, r), function(b){
				delete n[x][b.m];
				c(f, b.c, b.k || b.h)
			})
		})
	}

	function m(c){
		var f = b.extend({Y: c}, c);
		b._each(I, function(b){
			f[b] = function(){
				return c[b].apply(c, arguments)
			}
		});
		return f
	}

	var z = document, n = {}, A = 1;
	b.bind = B;
	b.unbind = c;
	var I = ["preventDefault", "stopImmediatePropagation", "stopPropagation"], r = b.fn;
	b._each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(b){
		r[b] = function(c, f){
			return 0 < arguments.length ? this.bind(b, c, f) : this.trigger(b)
		}
	});
	r.bind = function(b, c){
		return this.each(function(){
			o(this, b, c)
		})
	};
	r.unbind = function(b, c){
		return this.each(function(){
			f(this, b, c)
		})
	};
	r.one = function(b, c){
		return this.each(function(){
			var j = this;
			o(this, b, function(){
				c();
				f(j, b, arguments.callee)
			})
		})
	};
	r.delegate = function(c, f, j){
		return this.each(function(n, r){
			o(r, f, j, c, function(f){
				for(var n = f.target, o = b.$$(c, r); n && 0 > o.indexOf(n);)n = n.parentNode;
				n && n !== r && n !== document && j.call(n, b.extend(m(f || window.event), {currentTarget: n, W: r}))
			})
		})
	};
	r.undelegate = function(b, c, j){
		return this.each(function(){
			f(this, c, j, b)
		})
	};
	r.live = function(c, f){
		b(z.body).delegate(this.selector,
			c, f);
		return this
	};
	r.die = function(c, f){
		b(z.body).undelegate(this.selector, c, f);
		return this
	};
	r.trigger = function(b){
		return this.each(function(){
			if (("click" == b || "blur" == b || "focus" == b) && this[b])return this[b]();
			if (z.createEvent){
				var c = z.createEvent("Events");
				this.dispatchEvent(c, c.initEvent(b, s, s))
			} else if (this.fireEvent)try{
				"ready" !== b && this.fireEvent("on" + b)
			}catch(f){
			}
		})
	};
	b.init || b(window).bind("load", b.onload)
});