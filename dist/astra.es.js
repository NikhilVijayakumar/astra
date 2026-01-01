import zt, { createContext as at, useContext as ct, useState as Z, useEffect as Vt, useMemo as Jt } from "react";
import $e from "@mui/material/List";
import Ht from "@mui/material/ListItem";
import Wt from "@mui/material/ListItemButton";
import Yt from "@mui/material/ListItemIcon";
import Gt from "@mui/material/ListItemText";
import Kt from "@mui/material/Divider";
import ut from "@mui/material/Toolbar";
import Xt from "@mui/material/Box";
import ze from "@mui/material/Drawer";
import Zt from "@mui/material/AppBar";
import lt from "@mui/material/IconButton";
import Qt from "@mui/icons-material/Menu";
import er from "@mui/material/Typography";
import tr from "@mui/icons-material/DarkModeRounded";
import rr from "@mui/icons-material/LightModeRounded";
import { Box as ue, CircularProgress as nr, Typography as ft, Alert as sr, Button as or, Menu as ir, MenuItem as ar, ThemeProvider as cr, CssBaseline as ur } from "@mui/material";
import lr from "@mui/icons-material/Language";
var ne = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function fr() {
  if (Ve) return G;
  Ve = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var c in s)
        c !== "key" && (o[c] = s[c]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return G.Fragment = t, G.jsx = r, G.jsxs = r, G;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function dr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === Mt ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case m:
          return "Fragment";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case F:
          return "Suspense";
        case U:
          return "SuspenseList";
        case Bt:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case b:
            return "Portal";
          case L:
            return u.displayName || "Context";
          case A:
            return (u._context.displayName || "Context") + ".Consumer";
          case C:
            var g = u.render;
            return u = u.displayName, u || (u = g.displayName || g.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case z:
            return g = u.displayName || null, g !== null ? g : e(u.type) || "Memo";
          case V:
            g = u._payload, u = u._init;
            try {
              return e(u(g));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var x = g.error, _ = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return x.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(u);
      }
    }
    function n(u) {
      if (u === m) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === V)
        return "<...>";
      try {
        var g = e(u);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = ye.A;
      return u === null ? null : u.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(u) {
      if (Ie.call(u, "key")) {
        var g = Object.getOwnPropertyDescriptor(u, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, g) {
      function x() {
        Ue || (Ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: x,
        configurable: !0
      });
    }
    function d() {
      var u = e(this.type);
      return ve[u] || (ve[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, g, x, _, re, Re) {
      var N = x.ref;
      return u = {
        $$typeof: p,
        type: u,
        key: g,
        props: x,
        _owner: _
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Re
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function l(u, g, x, _, re, Re) {
      var N = g.children;
      if (N !== void 0)
        if (_)
          if (qt(N)) {
            for (_ = 0; _ < N.length; _++)
              h(N[_]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(N);
      if (Ie.call(g, "key")) {
        N = e(u);
        var J = Object.keys(g).filter(function($t) {
          return $t !== "key";
        });
        _ = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", qe[N + _] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          N,
          J,
          N
        ), qe[N + _] = !0);
      }
      if (N = null, x !== void 0 && (r(x), N = "" + x), i(g) && (r(g.key), N = "" + g.key), "key" in g) {
        x = {};
        for (var we in g)
          we !== "key" && (x[we] = g[we]);
      } else x = g;
      return N && c(
        x,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        N,
        x,
        s(),
        re,
        Re
      );
    }
    function h(u) {
      R(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === V && (u._payload.status === "fulfilled" ? R(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function R(u) {
      return typeof u == "object" && u !== null && u.$$typeof === p;
    }
    var w = zt, p = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), L = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Bt = Symbol.for("react.activity"), Mt = Symbol.for("react.client.reference"), ye = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ie = Object.prototype.hasOwnProperty, qt = Array.isArray, ge = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var Ue, ve = {}, Be = w.react_stack_bottom_frame.bind(
      w,
      o
    )(), Me = ge(n(o)), qe = {};
    K.Fragment = m, K.jsx = function(u, g, x) {
      var _ = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return l(
        u,
        g,
        x,
        !1,
        _ ? Error("react-stack-top-frame") : Be,
        _ ? ge(n(u)) : Me
      );
    }, K.jsxs = function(u, g, x) {
      var _ = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return l(
        u,
        g,
        x,
        !0,
        _ ? Error("react-stack-top-frame") : Be,
        _ ? ge(n(u)) : Me
      );
    };
  }()), K;
}
var He;
function pr() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? ne.exports = fr() : ne.exports = dr()), ne.exports;
}
var E = pr();
const Te = 240, hs = (e) => {
  const {
    sortedFeatures: t,
    UiFeatureList: r,
    container: n,
    // Renamed prop
    onMenuItemClick: s,
    // <-- This is the handler passed from useHome
    mobileOpen: o,
    handleDrawerToggle: i
  } = e, c = (l) => {
    s(l);
  }, d = () => !t || t.length === 0 ? /* @__PURE__ */ E.jsx($e, {}) : /* @__PURE__ */ E.jsx($e, { children: t.map((l) => {
    const { id: h, name: R, display_order: w, icon: p } = l;
    if (r[R]) {
      const m = p;
      return /* @__PURE__ */ E.jsx(Ht, { disablePadding: !0, children: /* @__PURE__ */ E.jsxs(
        Wt,
        {
          onClick: () => c(w - 1),
          children: [
            /* @__PURE__ */ E.jsx(Yt, { children: /* @__PURE__ */ E.jsx(m, {}) }),
            /* @__PURE__ */ E.jsx(Gt, { primary: R })
          ]
        }
      ) }, h);
    } else
      return null;
  }) }), f = () => /* @__PURE__ */ E.jsxs("div", { children: [
    /* @__PURE__ */ E.jsx(ut, {}),
    /* @__PURE__ */ E.jsx(Kt, {}),
    d()
  ] });
  return /* @__PURE__ */ E.jsxs(
    Xt,
    {
      component: "nav",
      sx: { width: { sm: Te }, flexShrink: { sm: 0 } },
      "aria-label": "mailbox folders",
      children: [
        /* @__PURE__ */ E.jsx(
          ze,
          {
            container: n,
            variant: "temporary",
            open: o,
            onClose: i,
            ModalProps: {
              keepMounted: !0
            },
            sx: {
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: Te
              }
            },
            children: f()
          }
        ),
        /* @__PURE__ */ E.jsx(
          ze,
          {
            variant: "permanent",
            sx: {
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: Te
              }
            },
            open: !0,
            children: f()
          }
        )
      ]
    }
  );
}, hr = ({
  themeContext: e
}) => {
  const { darkMode: t, toggleDarkMode: r } = e;
  return /* @__PURE__ */ E.jsx(lt, { onClick: r, "aria-label": "Toggle theme", children: t ? /* @__PURE__ */ E.jsx(tr, {}) : /* @__PURE__ */ E.jsx(rr, {}) });
}, ms = ({
  handleDrawerToggle: e,
  title: t,
  themeContext: r
}) => /* @__PURE__ */ E.jsx(
  Zt,
  {
    position: "fixed",
    sx: { zIndex: (n) => n.zIndex.drawer + 1 },
    children: /* @__PURE__ */ E.jsxs(ut, { children: [
      /* @__PURE__ */ E.jsx(
        lt,
        {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "start",
          onClick: e,
          sx: { mr: 2, display: { sm: "none" } },
          children: /* @__PURE__ */ E.jsx(Qt, {})
        }
      ),
      /* @__PURE__ */ E.jsx(er, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1 }, children: t }),
      /* @__PURE__ */ E.jsx(hr, { themeContext: r })
    ] })
  }
);
var H = /* @__PURE__ */ ((e) => (e[e.INIT = 0] = "INIT", e[e.LOADING = 1] = "LOADING", e[e.COMPLETED = 2] = "COMPLETED", e))(H || {}), q = /* @__PURE__ */ ((e) => (e[e.SUCCESS = 200] = "SUCCESS", e[e.CREATED = 201] = "CREATED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.INTERNET_ERROR = 0] = "INTERNET_ERROR", e[e.IDLE = 1e3] = "IDLE", e))(q || {});
function Es(e, t) {
  switch (e) {
    case 200:
      return t.success_message;
    case 201:
      return t.created_message;
    case 400:
      return t.bad_request_message;
    case 401:
      return t.unauthorized_message;
    case 404:
      return t.not_found_message;
    case 500:
      return t.internal_server_error;
    case 0:
      return t.internet_error;
    case 1e3:
      return t.idle_message;
    default:
      return t.unknown_message;
  }
}
const dt = at(
  void 0
);
function le() {
  const e = ct(dt);
  if (!e)
    throw new Error("useLanguage must be used within a AstraLanguageProvider");
  return e;
}
const mr = () => {
  const { literal: e } = le();
  return /* @__PURE__ */ E.jsxs(
    ue,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        mt: 8
      },
      children: [
        /* @__PURE__ */ E.jsx(nr, { sx: { mb: 2 } }),
        /* @__PURE__ */ E.jsx(ft, { variant: "h6", component: "div", children: e.loading_message })
      ]
    }
  );
}, Er = ({ message: e }) => {
  const { literal: t } = le(), r = e || t.unknown_message;
  return /* @__PURE__ */ E.jsx(ue, { sx: { p: 4, textAlign: "center", mt: 8 }, children: /* @__PURE__ */ E.jsx(sr, { severity: "error", children: r }) });
}, We = () => {
  const { literal: e } = le();
  return /* @__PURE__ */ E.jsx(ue, { sx: { p: 4, textAlign: "center", mt: 8 }, children: /* @__PURE__ */ E.jsx(ft, { variant: "h6", children: e.no_data_found }) });
}, bs = ({
  appState: e,
  SuccessComponent: t,
  children: r,
  emptyCondition: n,
  errorMessage: s
}) => {
  const { state: o, isError: i, isSuccess: c, data: d, status: f } = e;
  if (o === H.LOADING)
    return /* @__PURE__ */ E.jsx(mr, {});
  if (i || f === q.INTERNET_ERROR)
    return /* @__PURE__ */ E.jsx(Er, { message: s });
  if (c && d !== null) {
    if (n?.(d))
      return /* @__PURE__ */ E.jsx(We, {});
    if (r)
      return /* @__PURE__ */ E.jsx(E.Fragment, { children: r });
    if (t)
      return /* @__PURE__ */ E.jsx(t, { appState: e });
  }
  return /* @__PURE__ */ E.jsx(We, {});
}, br = () => ({
  state: H.INIT,
  isError: !1,
  isSuccess: !1,
  status: q.IDLE,
  statusMessage: "",
  data: null
});
function ys(e = {}) {
  const [t, r] = Z({
    ...br(),
    ...e
  });
  return [t, async (s) => {
    r((o) => ({ ...o, state: H.LOADING }));
    try {
      const o = await s();
      r((i) => ({
        ...i,
        state: H.COMPLETED,
        isError: o.isError,
        isSuccess: o.isSuccess,
        status: o.status,
        statusMessage: o.statusMessage,
        data: o.data || null
      }));
    } catch {
      r((i) => ({
        ...i,
        state: H.COMPLETED,
        isError: !0,
        status: q.INTERNAL_SERVER_ERROR,
        statusMessage: "An unexpected error occurred.",
        data: null
      }));
    }
  }, r];
}
const gs = () => {
  const { currentLanguage: e, setCurrentLanguage: t, availableLanguages: r } = le(), [n, s] = Z(null), o = !!n, i = (l) => {
    s(l.currentTarget);
  }, c = () => {
    s(null);
  }, d = (l) => {
    t(l), c();
  }, f = r.find((l) => l.code === e)?.label || "Language";
  return /* @__PURE__ */ E.jsxs(ue, { children: [
    /* @__PURE__ */ E.jsx(
      or,
      {
        id: "language-button",
        "aria-controls": o ? "language-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": o ? "true" : void 0,
        onClick: i,
        startIcon: /* @__PURE__ */ E.jsx(lr, {}),
        color: "inherit",
        children: f
      }
    ),
    /* @__PURE__ */ E.jsx(
      ir,
      {
        id: "language-menu",
        anchorEl: n,
        open: o,
        onClose: c,
        "aria-labelledby": "language-button",
        children: r.map((l) => /* @__PURE__ */ E.jsx(
          ar,
          {
            selected: l.code === e,
            onClick: () => d(l.code),
            children: l.label
          },
          l.code
        ))
      }
    )
  ] });
};
function Rs({
  children: e,
  translations: t,
  availableLanguages: r,
  defaultLanguage: n = "en"
}) {
  const [s, o] = Z(n), [i, c] = Z(t[n] || {});
  Vt(() => {
    c(t[s] || {});
  }, [s, t]);
  const d = {
    currentLanguage: s,
    setCurrentLanguage: o,
    literal: i,
    availableLanguages: r
  };
  return /* @__PURE__ */ E.jsx(dt.Provider, { value: d, children: e });
}
function pt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: yr } = Object.prototype, { getPrototypeOf: Le } = Object, { iterator: fe, toStringTag: ht } = Symbol, de = /* @__PURE__ */ ((e) => (t) => {
  const r = yr.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), D = (e) => (e = e.toLowerCase(), (t) => de(t) === e), pe = (e) => (t) => typeof t === e, { isArray: W } = Array, Q = pe("undefined");
function gr(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && k(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mt = D("ArrayBuffer");
function Rr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && mt(e.buffer), t;
}
const wr = pe("string"), k = pe("function"), Et = pe("number"), he = (e) => e !== null && typeof e == "object", Tr = (e) => e === !0 || e === !1, se = (e) => {
  if (de(e) !== "object")
    return !1;
  const t = Le(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ht in e) && !(fe in e);
}, xr = D("Date"), Sr = D("File"), Or = D("Blob"), Ar = D("FileList"), _r = (e) => he(e) && k(e.pipe), Nr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || k(e.append) && ((t = de(e)) === "formdata" || // detect form-data instance
  t === "object" && k(e.toString) && e.toString() === "[object FormData]"));
}, Cr = D("URLSearchParams"), [Pr, kr, jr, Lr] = ["ReadableStream", "Request", "Response", "Headers"].map(D), Dr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), W(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (n = 0; n < i; n++)
      c = o[n], t.call(null, e[c], c, e);
  }
}
function bt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yt = (e) => !Q(e) && e !== B;
function _e() {
  const { caseless: e } = yt(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && bt(t, s) || s;
    se(t[o]) && se(n) ? t[o] = _e(t[o], n) : se(n) ? t[o] = _e({}, n) : W(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && ee(arguments[n], r);
  return t;
}
const Fr = (e, t, r, { allOwnKeys: n } = {}) => (ee(t, (s, o) => {
  r && k(s) ? e[o] = pt(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), Ir = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ur = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, vr = (e, t, r, n) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = r !== !1 && Le(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Br = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Mr = (e) => {
  if (!e) return null;
  if (W(e)) return e;
  let t = e.length;
  if (!Et(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, qr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Le(Uint8Array)), $r = (e, t) => {
  const n = (e && e[fe]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, zr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Vr = D("HTMLFormElement"), Jr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Ye = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Hr = D("RegExp"), gt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ee(r, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(e, n);
}, Wr = (e) => {
  gt(e, (t, r) => {
    if (k(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (k(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Yr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return W(e) ? n(e) : n(String(e).split(t)), r;
}, Gr = () => {
}, Kr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Xr(e) {
  return !!(e && k(e.append) && e[ht] === "FormData" && e[fe]);
}
const Zr = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (he(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = W(n) ? [] : {};
        return ee(n, (i, c) => {
          const d = r(i, s + 1);
          !Q(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Qr = D("AsyncFunction"), en = (e) => e && (he(e) || k(e)) && k(e.then) && k(e.catch), Rt = ((e, t) => e ? setImmediate : t ? ((r, n) => (B.addEventListener("message", ({ source: s, data: o }) => {
  s === B && o === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), B.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  k(B.postMessage)
), tn = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || Rt, rn = (e) => e != null && k(e[fe]), a = {
  isArray: W,
  isArrayBuffer: mt,
  isBuffer: gr,
  isFormData: Nr,
  isArrayBufferView: Rr,
  isString: wr,
  isNumber: Et,
  isBoolean: Tr,
  isObject: he,
  isPlainObject: se,
  isReadableStream: Pr,
  isRequest: kr,
  isResponse: jr,
  isHeaders: Lr,
  isUndefined: Q,
  isDate: xr,
  isFile: Sr,
  isBlob: Or,
  isRegExp: Hr,
  isFunction: k,
  isStream: _r,
  isURLSearchParams: Cr,
  isTypedArray: qr,
  isFileList: Ar,
  forEach: ee,
  merge: _e,
  extend: Fr,
  trim: Dr,
  stripBOM: Ir,
  inherits: Ur,
  toFlatObject: vr,
  kindOf: de,
  kindOfTest: D,
  endsWith: Br,
  toArray: Mr,
  forEachEntry: $r,
  matchAll: zr,
  isHTMLForm: Vr,
  hasOwnProperty: Ye,
  hasOwnProp: Ye,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gt,
  freezeMethods: Wr,
  toObjectSet: Yr,
  toCamelCase: Jr,
  noop: Gr,
  toFiniteNumber: Kr,
  findKey: bt,
  global: B,
  isContextDefined: yt,
  isSpecCompliantForm: Xr,
  toJSONObject: Zr,
  isAsyncFn: Qr,
  isThenable: en,
  setImmediate: Rt,
  asap: tn,
  isIterable: rn
};
function y(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const wt = y.prototype, Tt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Tt[e] = { value: e };
});
Object.defineProperties(y, Tt);
Object.defineProperty(wt, "isAxiosError", { value: !0 });
y.from = (e, t, r, n, s, o) => {
  const i = Object.create(wt);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), y.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const nn = null;
function Ne(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function xt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ge(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = xt(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function sn(e) {
  return a.isArray(e) && !e.some(Ne);
}
const on = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function me(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, m) {
    return !a.isUndefined(m[b]);
  });
  const n = r.metaTokens, s = r.visitor || l, o = r.dots, i = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (a.isBoolean(p))
      return p.toString();
    if (!d && a.isBlob(p))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, b, m) {
    let T = p;
    if (p && !m && typeof p == "object") {
      if (a.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && sn(p) || (a.isFileList(p) || a.endsWith(b, "[]")) && (T = a.toArray(p)))
        return b = xt(b), T.forEach(function(A, L) {
          !(a.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ge([b], L, o) : i === null ? b : b + "[]",
            f(A)
          );
        }), !1;
    }
    return Ne(p) ? !0 : (t.append(Ge(m, b, o), f(p)), !1);
  }
  const h = [], R = Object.assign(on, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: Ne
  });
  function w(p, b) {
    if (!a.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      h.push(p), a.forEach(p, function(T, O) {
        (!(a.isUndefined(T) || T === null) && s.call(
          t,
          T,
          a.isString(O) ? O.trim() : O,
          b,
          R
        )) === !0 && w(T, b ? b.concat(O) : [O]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Ke(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function De(e, t) {
  this._pairs = [], e && me(e, this, t);
}
const St = De.prototype;
St.append = function(t, r) {
  this._pairs.push([t, r]);
};
St.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ke);
  } : Ke;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function an(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ot(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || an;
  a.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = a.isURLSearchParams(t) ? t.toString() : new De(t, r).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Xe {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const At = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, cn = typeof URLSearchParams < "u" ? URLSearchParams : De, un = typeof FormData < "u" ? FormData : null, ln = typeof Blob < "u" ? Blob : null, fn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: cn,
    FormData: un,
    Blob: ln
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fe = typeof window < "u" && typeof document < "u", Ce = typeof navigator == "object" && navigator || void 0, dn = Fe && (!Ce || ["ReactNative", "NativeScript", "NS"].indexOf(Ce.product) < 0), pn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", hn = Fe && window.location.href || "http://localhost", mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fe,
  hasStandardBrowserEnv: dn,
  hasStandardBrowserWebWorkerEnv: pn,
  navigator: Ce,
  origin: hn
}, Symbol.toStringTag, { value: "Module" })), P = {
  ...mn,
  ...fn
};
function En(e, t) {
  return me(e, new P.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return P.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function bn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function yn(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function _t(e) {
  function t(r, n, s, o) {
    let i = r[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= r.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(r, n, s[i], o) && a.isArray(s[i]) && (s[i] = yn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {};
    return a.forEachEntry(e, (n, s) => {
      t(bn(n), s, r, 0);
    }), r;
  }
  return null;
}
function gn(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const te = {
  transitional: At,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(_t(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return En(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return me(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), gn(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || te.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (n && !this.responseType || s)) {
      const i = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: P.classes.FormData,
    Blob: P.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  te.headers[e] = {};
});
const Rn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), wn = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || t[r] && Rn[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ze = Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function oe(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(oe) : String(e);
}
function Tn(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const xn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xe(e, t, r, n, s) {
  if (a.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!a.isString(t)) {
    if (a.isString(n))
      return t.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(t);
  }
}
function Sn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function On(e, t) {
  const r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, i) {
        return this[n].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let j = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(c, d, f) {
      const l = X(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, l);
      (!h || s[h] === void 0 || f === !0 || f === void 0 && s[h] !== !1) && (s[h || d] = oe(c));
    }
    const i = (c, d) => a.forEach(c, (f, l) => o(f, l, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (a.isString(t) && (t = t.trim()) && !xn(t))
      i(wn(t), r);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, f;
      for (const l of t) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[f = l[0]] = (d = c[f]) ? a.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1];
      }
      i(c, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = X(t), t) {
      const n = a.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Tn(s);
        if (a.isFunction(r))
          return r.call(this, s, n);
        if (a.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = X(t), t) {
      const n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || xe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(i) {
      if (i = X(i), i) {
        const c = a.findKey(n, i);
        c && (!r || xe(n, n[c], c, r)) && (delete n[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || xe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(n, o);
      if (i) {
        r[i] = oe(s), delete r[o];
        return;
      }
      const c = t ? Sn(o) : String(o).trim();
      c !== o && delete r[o], r[c] = oe(s), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && a.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Ze] = this[Ze] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = X(i);
      n[c] || (On(s, i), n[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
j.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(j.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
a.freezeMethods(j);
function Se(e, t) {
  const r = this || te, n = t || r, s = j.from(n.headers);
  let o = n.data;
  return a.forEach(e, function(c) {
    o = c.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Nt(e) {
  return !!(e && e.__CANCEL__);
}
function Y(e, t, r) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(Y, y, {
  __CANCEL__: !0
});
function Ct(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new y(
    "Request failed with status code " + r.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function An(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _n(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const f = Date.now(), l = n[o];
    i || (i = f), r[s] = d, n[s] = f;
    let h = o, R = 0;
    for (; h !== s; )
      R += r[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const w = l && f - l;
    return w ? Math.round(R * 1e3 / w) : void 0;
  };
}
function Nn(e, t) {
  let r = 0, n = 1e3 / t, s, o;
  const i = (f, l = Date.now()) => {
    r = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, f);
  };
  return [(...f) => {
    const l = Date.now(), h = l - r;
    h >= n ? i(f, l) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, n - h)));
  }, () => s && i(s)];
}
const ae = (e, t, r = 3) => {
  let n = 0;
  const s = _n(50, 250);
  return Nn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - n, f = s(d), l = i <= c;
    n = i;
    const h = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && c && l ? (c - i) / f : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, r);
}, Qe = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, et = (e) => (...t) => a.asap(() => e(...t)), Cn = P.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, P.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(P.origin),
  P.navigator && /(msie|trident)/i.test(P.navigator.userAgent)
) : () => !0, Pn = P.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), a.isString(n) && i.push("path=" + n), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function kn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pt(e, t, r) {
  let n = !kn(t);
  return e && (n || r == !1) ? jn(e, t) : t;
}
const tt = (e) => e instanceof j ? { ...e } : e;
function $(e, t) {
  t = t || {};
  const r = {};
  function n(f, l, h, R) {
    return a.isPlainObject(f) && a.isPlainObject(l) ? a.merge.call({ caseless: R }, f, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(f, l, h, R) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return n(void 0, f, h, R);
    } else return n(f, l, h, R);
  }
  function o(f, l) {
    if (!a.isUndefined(l))
      return n(void 0, l);
  }
  function i(f, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, l);
  }
  function c(f, l, h) {
    if (h in t)
      return n(f, l);
    if (h in e)
      return n(void 0, f);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (f, l, h) => s(tt(f), tt(l), h, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const h = d[l] || s, R = h(e[l], t[l], l);
    a.isUndefined(R) && h !== c || (r[l] = R);
  }), r;
}
const kt = (e) => {
  const t = $({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = j.from(i), t.url = Ot(Pt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(r)) {
    if (P.hasStandardBrowserEnv || P.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [f, ...l] = d ? d.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...l].join("; "));
    }
  }
  if (P.hasStandardBrowserEnv && (n && a.isFunction(n) && (n = n(t)), n || n !== !1 && Cn(t.url))) {
    const f = s && o && Pn.read(o);
    f && i.set(s, f);
  }
  return t;
}, Ln = typeof XMLHttpRequest < "u", Dn = Ln && function(e) {
  return new Promise(function(r, n) {
    const s = kt(e);
    let o = s.data;
    const i = j.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: f } = s, l, h, R, w, p;
    function b() {
      w && w(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function T() {
      if (!m)
        return;
      const A = j.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), C = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: A,
        config: e,
        request: m
      };
      Ct(function(U) {
        r(U), b();
      }, function(U) {
        n(U), b();
      }, C), m = null;
    }
    "onloadend" in m ? m.onloadend = T : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, m.onabort = function() {
      m && (n(new y("Request aborted", y.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new y("Network Error", y.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let L = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const C = s.transitional || At;
      s.timeoutErrorMessage && (L = s.timeoutErrorMessage), n(new y(
        L,
        C.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && a.forEach(i.toJSON(), function(L, C) {
      m.setRequestHeader(C, L);
    }), a.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), c && c !== "json" && (m.responseType = s.responseType), f && ([R, p] = ae(f, !0), m.addEventListener("progress", R)), d && m.upload && ([h, w] = ae(d), m.upload.addEventListener("progress", h), m.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (l = (A) => {
      m && (n(!A || A.type ? new Y(null, e, m) : A), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const O = An(s.url);
    if (O && P.protocols.indexOf(O) === -1) {
      n(new y("Unsupported protocol " + O + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, Fn = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, c();
        const l = f instanceof Error ? f : this.reason;
        n.abort(l instanceof y ? l : new Y(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: d } = n;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, In = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, Un = async function* (e, t) {
  for await (const r of vn(e))
    yield* In(r, t);
}, vn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, rt = (e, t, r, n) => {
  const s = Un(e, t);
  let o = 0, i, c = (d) => {
    i || (i = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: l } = await s.next();
        if (f) {
          c(), d.close();
          return;
        }
        let h = l.byteLength;
        if (r) {
          let R = o += h;
          r(R);
        }
        d.enqueue(new Uint8Array(l));
      } catch (f) {
        throw c(f), f;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ee = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", jt = Ee && typeof ReadableStream == "function", Bn = Ee && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Lt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Mn = jt && Lt(() => {
  let e = !1;
  const t = new Request(P.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), nt = 64 * 1024, Pe = jt && Lt(() => a.isReadableStream(new Response("").body)), ce = {
  stream: Pe && ((e) => e.body)
};
Ee && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ce[t] && (ce[t] = a.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const qn = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(P.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Bn(e)).byteLength;
}, $n = async (e, t) => {
  const r = a.toFiniteNumber(e.getContentLength());
  return r ?? qn(t);
}, zn = Ee && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: f,
    headers: l,
    withCredentials: h = "same-origin",
    fetchOptions: R
  } = kt(e);
  f = f ? (f + "").toLowerCase() : "text";
  let w = Fn([s, o && o.toAbortSignal()], i), p;
  const b = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let m;
  try {
    if (d && Mn && r !== "get" && r !== "head" && (m = await $n(l, n)) !== 0) {
      let C = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), F;
      if (a.isFormData(n) && (F = C.headers.get("content-type")) && l.setContentType(F), C.body) {
        const [U, z] = Qe(
          m,
          ae(et(d))
        );
        n = rt(C.body, nt, U, z);
      }
    }
    a.isString(h) || (h = h ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    p = new Request(t, {
      ...R,
      signal: w,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: T ? h : void 0
    });
    let O = await fetch(p, R);
    const A = Pe && (f === "stream" || f === "response");
    if (Pe && (c || A && b)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((V) => {
        C[V] = O[V];
      });
      const F = a.toFiniteNumber(O.headers.get("content-length")), [U, z] = c && Qe(
        F,
        ae(et(c), !0)
      ) || [];
      O = new Response(
        rt(O.body, nt, U, () => {
          z && z(), b && b();
        }),
        C
      );
    }
    f = f || "text";
    let L = await ce[a.findKey(ce, f) || "text"](O, e);
    return !A && b && b(), await new Promise((C, F) => {
      Ct(C, F, {
        data: L,
        headers: j.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: p
      });
    });
  } catch (T) {
    throw b && b(), T && T.name === "TypeError" && /Load failed|fetch/i.test(T.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, p),
      {
        cause: T.cause || T
      }
    ) : y.from(T, T && T.code, e, p);
  }
}), ke = {
  http: nn,
  xhr: Dn,
  fetch: zn
};
a.forEach(ke, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const st = (e) => `- ${e}`, Vn = (e) => a.isFunction(e) || e === null || e === !1, Dt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let i;
      if (n = r, !Vn(r) && (n = ke[(i = String(r)).toLowerCase()], n === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (n)
        break;
      s[i || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(st).join(`
`) : " " + st(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ke
};
function Oe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Y(null, e);
}
function ot(e) {
  return Oe(e), e.headers = j.from(e.headers), e.data = Se.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dt.getAdapter(e.adapter || te.adapter)(e).then(function(n) {
    return Oe(e), n.data = Se.call(
      e,
      e.transformResponse,
      n
    ), n.headers = j.from(n.headers), n;
  }, function(n) {
    return Nt(n) || (Oe(e), n && n.response && (n.response.data = Se.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = j.from(n.response.headers))), Promise.reject(n);
  });
}
const Ft = "1.10.0", be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  be[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const it = {};
be.transitional = function(t, r, n) {
  function s(o, i) {
    return "[Axios v" + Ft + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (r ? " in " + r : "")),
        y.ERR_DEPRECATED
      );
    return r && !it[i] && (it[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
be.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Jn(e, t, r) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], i = t[o];
    if (i) {
      const c = e[o], d = c === void 0 || i(c, o, e);
      if (d !== !0)
        throw new y("option " + o + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const ie = {
  assertOptions: Jn,
  validators: be
}, I = ie.validators;
let M = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Xe(),
      response: new Xe()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = $(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && ie.assertOptions(n, {
      silentJSONParsing: I.transitional(I.boolean),
      forcedJSONParsing: I.transitional(I.boolean),
      clarifyTimeoutError: I.transitional(I.boolean)
    }, !1), s != null && (a.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ie.assertOptions(s, {
      encode: I.function,
      serialize: I.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ie.assertOptions(r, {
      baseUrl: I.spelling("baseURL"),
      withXsrfToken: I.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[r.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), r.headers = j.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(r) === !1 || (d = d && b.synchronous, c.unshift(b.fulfilled, b.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(b) {
      f.push(b.fulfilled, b.rejected);
    });
    let l, h = 0, R;
    if (!d) {
      const p = [ot.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, f), R = p.length, l = Promise.resolve(r); h < R; )
        l = l.then(p[h++], p[h++]);
      return l;
    }
    R = c.length;
    let w = r;
    for (h = 0; h < R; ) {
      const p = c[h++], b = c[h++];
      try {
        w = p(w);
      } catch (m) {
        b.call(this, m);
        break;
      }
    }
    try {
      l = ot.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, R = f.length; h < R; )
      l = l.then(f[h++], f[h++]);
    return l;
  }
  getUri(t) {
    t = $(this.defaults, t);
    const r = Pt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ot(r, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(r, n) {
    return this.request($(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, i, c) {
      return this.request($(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  M.prototype[t] = r(), M.prototype[t + "Form"] = r(!0);
});
let Hn = class It {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        n.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      n.reason || (n.reason = new Y(o, i, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new It(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Wn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Yn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const je = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(je).forEach(([e, t]) => {
  je[t] = e;
});
function Ut(e) {
  const t = new M(e), r = pt(M.prototype.request, t);
  return a.extend(r, M.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Ut($(e, s));
  }, r;
}
const S = Ut(te);
S.Axios = M;
S.CanceledError = Y;
S.CancelToken = Hn;
S.isCancel = Nt;
S.VERSION = Ft;
S.toFormData = me;
S.AxiosError = y;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = Wn;
S.isAxiosError = Yn;
S.mergeConfig = $;
S.AxiosHeaders = j;
S.formToJSON = (e) => _t(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Dt.getAdapter;
S.HttpStatusCode = je;
S.default = S;
const {
  Axios: xs,
  AxiosError: Ss,
  CanceledError: Os,
  isCancel: As,
  CancelToken: _s,
  VERSION: Ns,
  all: Cs,
  Cancel: Ps,
  isAxiosError: ks,
  spread: js,
  toFormData: Ls,
  AxiosHeaders: Ds,
  HttpStatusCode: Fs,
  formToJSON: Is,
  getAdapter: Us,
  mergeConfig: vs
} = S;
class v {
  isError = !1;
  isSuccess = !1;
  status = q.INTERNAL_SERVER_ERROR;
  statusMessage = "";
  data;
  constructor() {
  }
  static getSucessInstance(t) {
    const r = new v();
    return r.isSuccess = !0, r.isError = !1, r.status = t.status, r.statusMessage = t.statusMessage, r.data = t.data, r;
  }
  static getErrorInstance(t) {
    const r = new v();
    return r.isSuccess = !1, r.isError = !0, r.status = t.status, r.statusMessage = t.statusMessage, r;
  }
  static success(t) {
    return v.getSucessInstance(t);
  }
  static error(t) {
    return v.getErrorInstance(t);
  }
}
class Gn {
  baseUrl;
  literal;
  constructor(t, r) {
    this.baseUrl = t, this.literal = r;
  }
  async request(t) {
    try {
      const r = await S(t), n = {
        status: r.status,
        statusMessage: r.statusText,
        data: r.data
      };
      return v.success(n);
    } catch (r) {
      if (console.log(r), S.isAxiosError(r)) {
        const n = r, s = n.response?.status || q.INTERNAL_SERVER_ERROR, o = n.message || this.literal.internal_server_error, i = {
          status: s,
          statusMessage: o
        };
        return v.error(i);
      } else
        return v.error({
          status: q.INTERNAL_SERVER_ERROR,
          statusMessage: this.literal.internal_server_error
        });
    }
  }
  async get(t, r) {
    return this.request({
      ...r,
      url: `${this.baseUrl}/${t}`,
      method: "GET"
      /* GET */
    });
  }
  async post(t, r, n) {
    return this.request({
      ...n,
      url: `${this.baseUrl}/${t}`,
      method: "POST",
      data: r
    });
  }
  async put(t, r, n) {
    return this.request({
      ...n,
      url: `${this.baseUrl}/${t}`,
      method: "PUT",
      data: r
    });
  }
  async delete(t, r) {
    return this.request({
      ...r,
      url: `${this.baseUrl}/${t}`,
      method: "DELETE"
      /* DELETE */
    });
  }
}
const Ae = /* @__PURE__ */ new Map(), Bs = (e, t) => {
  if (Ae.has(e))
    return Ae.get(e);
  const r = new Gn(e, t);
  return Ae.set(e, r), r;
}, vt = at(
  {}
);
function Ms() {
  return ct(vt);
}
function qs({
  children: e,
  lightTheme: t,
  darkTheme: r,
  forceTheme: n
  // This prop will be passed from Storybook
}) {
  const [s, o] = Z(() => typeof window < "u" ? localStorage.getItem("darkMode") === "true" : !1), i = n ? n === "dark" : s, c = () => {
    if (!n) {
      const f = !s;
      o(f), localStorage.setItem("darkMode", String(f));
    }
  }, d = Jt(() => i ? r : t, [
    i,
    t,
    r
  ]);
  return /* @__PURE__ */ E.jsx(vt.Provider, { value: { darkMode: i, toggleDarkMode: c }, children: /* @__PURE__ */ E.jsxs(cr, { theme: d, children: [
    /* @__PURE__ */ E.jsx(ur, {}),
    e
  ] }) });
}
export {
  Gn as ApiService,
  bs as AppStateHandler,
  hs as DrawerComponent,
  We as EmptyState,
  Er as ErrorState,
  q as HttpStatusCode,
  dt as LanguageContext,
  Rs as LanguageProvider,
  gs as LanguageSelector,
  mr as LoadingState,
  v as ServerResponse,
  H as StateType,
  vt as ThemeContext,
  qs as ThemeProvider,
  hr as ThemeToggle,
  ms as ToolbarComponent,
  Te as drawerWidth,
  Bs as getApiService,
  Es as getStatusMessage,
  ys as useDataState,
  le as useLanguage,
  Ms as useTheme
};
