import * as Oo from "react";
import Fr, { createContext as vt, lazy as uc, forwardRef as Mo, createElement as Br, memo as cc, useState as ve, useContext as me, useRef as Fe, useEffect as at, Suspense as hc, useMemo as mt, useInsertionEffect as Io, useLayoutEffect as Ap, useId as Do, useCallback as No, Children as Rp, isValidElement as Tp, Fragment as dc, Component as Lp } from "react";
import { useTheme as pe, Box as j, Paper as Dn, Typography as F, InputBase as jp, IconButton as ft, Slider as Op, alpha as Mp, TablePagination as Ip, TableContainer as Dp, Table as Np, TableHead as Fp, TableRow as Us, TableCell as Hs, TableBody as Bp, Button as Pe, Alert as pc, List as Vp, ListItemButton as zp, ListItemIcon as Up, ListItemText as Hp, Collapse as qp, Menu as Wp, MenuItem as fc, CircularProgress as Gp, Divider as mc, Container as Yp, Snackbar as Kp, Stack as eo, Tooltip as Jp, Dialog as Xp, DialogTitle as Qp, DialogContent as Zp, TextField as qs, DialogActions as $p, Card as ef, CardContent as tf, Chip as to, ThemeProvider as nf, CssBaseline as rf, FormControl as of, Select as sf } from "@mui/material";
import af from "@mui/icons-material/ZoomIn";
import lf from "@mui/icons-material/ZoomOut";
import uf from "@mui/icons-material/RotateRight";
import Ws from "@mui/material/List";
import cf from "@mui/material/ListItem";
import hf from "@mui/material/ListItemButton";
import df from "@mui/material/ListItemIcon";
import pf from "@mui/material/ListItemText";
import ff from "@mui/material/Divider";
import gc from "@mui/material/Toolbar";
import mf from "@mui/material/Box";
import Gs from "@mui/material/Drawer";
import gf from "@mui/icons-material/Folder";
import yf from "@mui/icons-material/FolderOpen";
import vf from "@mui/icons-material/InsertDriveFile";
import xf from "@mui/icons-material/ExpandLess";
import bf from "@mui/icons-material/ExpandMore";
import Sf from "@mui/icons-material/Delete";
import kf from "@mui/icons-material/Refresh";
import wf from "@mui/icons-material/PowerSettingsNew";
import Ef from "@mui/material/AppBar";
import yc from "@mui/material/IconButton";
import _f from "@mui/icons-material/Menu";
import Cf from "@mui/material/Typography";
import Pf from "@mui/icons-material/DarkModeRounded";
import Af from "@mui/icons-material/LightModeRounded";
import Rf from "@mui/icons-material/Language";
import { createTheme as Vr } from "@mui/material/styles";
function Tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zn = { exports: {} }, sn = {};
var Ys;
function Lf() {
  if (Ys) return sn;
  Ys = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, i, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      o = {};
      for (var a in i)
        a !== "key" && (o[a] = i[a]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return sn.Fragment = t, sn.jsx = n, sn.jsxs = n, sn;
}
var an = {};
var Ks;
function jf() {
  return Ks || (Ks = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(O) {
      if (O == null) return null;
      if (typeof O == "function")
        return O.$$typeof === T ? null : O.displayName || O.name || null;
      if (typeof O == "string") return O;
      switch (O) {
        case g:
          return "Fragment";
        case x:
          return "Profiler";
        case y:
          return "StrictMode";
        case w:
          return "Suspense";
        case _:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof O == "object")
        switch (typeof O.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), O.$$typeof) {
          case m:
            return "Portal";
          case S:
            return O.displayName || "Context";
          case k:
            return (O._context.displayName || "Context") + ".Consumer";
          case b:
            var q = O.render;
            return O = O.displayName, O || (O = q.displayName || q.name || "", O = O !== "" ? "ForwardRef(" + O + ")" : "ForwardRef"), O;
          case R:
            return q = O.displayName || null, q !== null ? q : e(O.type) || "Memo";
          case I:
            q = O._payload, O = O._init;
            try {
              return e(O(q));
            } catch {
            }
        }
      return null;
    }
    function t(O) {
      return "" + O;
    }
    function n(O) {
      try {
        t(O);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var E = q.error, Q = typeof Symbol == "function" && Symbol.toStringTag && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return E.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Q
        ), t(O);
      }
    }
    function r(O) {
      if (O === g) return "<>";
      if (typeof O == "object" && O !== null && O.$$typeof === I)
        return "<...>";
      try {
        var q = e(O);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var O = A.A;
      return O === null ? null : O.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(O) {
      if (N.call(O, "key")) {
        var q = Object.getOwnPropertyDescriptor(O, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return O.key !== void 0;
    }
    function a(O, q) {
      function E() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: E,
        configurable: !0
      });
    }
    function l() {
      var O = e(this.type);
      return X[O] || (X[O] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), O = this.props.ref, O !== void 0 ? O : null;
    }
    function c(O, q, E, Q, we, he) {
      var oe = E.ref;
      return O = {
        $$typeof: p,
        type: O,
        key: q,
        props: E,
        _owner: Q
      }, (oe !== void 0 ? oe : null) !== null ? Object.defineProperty(O, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(O, "ref", { enumerable: !1, value: null }), O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(O, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(O, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.defineProperty(O, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    }
    function u(O, q, E, Q, we, he) {
      var oe = q.children;
      if (oe !== void 0)
        if (Q)
          if (B(oe)) {
            for (Q = 0; Q < oe.length; Q++)
              f(oe[Q]);
            Object.freeze && Object.freeze(oe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(oe);
      if (N.call(q, "key")) {
        oe = e(O);
        var Ee = Object.keys(q).filter(function(ct) {
          return ct !== "key";
        });
        Q = 0 < Ee.length ? "{key: someKey, " + Ee.join(": ..., ") + ": ...}" : "{key: someKey}", C[oe + Q] || (Ee = 0 < Ee.length ? "{" + Ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Q,
          oe,
          Ee,
          oe
        ), C[oe + Q] = !0);
      }
      if (oe = null, E !== void 0 && (n(E), oe = "" + E), s(q) && (n(q.key), oe = "" + q.key), "key" in q) {
        E = {};
        for (var Je in q)
          Je !== "key" && (E[Je] = q[Je]);
      } else E = q;
      return oe && a(
        E,
        typeof O == "function" ? O.displayName || O.name || "Unknown" : O
      ), c(
        O,
        oe,
        E,
        i(),
        we,
        he
      );
    }
    function f(O) {
      d(O) ? O._store && (O._store.validated = 1) : typeof O == "object" && O !== null && O.$$typeof === I && (O._payload.status === "fulfilled" ? d(O._payload.value) && O._payload.value._store && (O._payload.value._store.validated = 1) : O._store && (O._store.validated = 1));
    }
    function d(O) {
      return typeof O == "object" && O !== null && O.$$typeof === p;
    }
    var h = Fr, p = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), z = /* @__PURE__ */ Symbol.for("react.activity"), T = /* @__PURE__ */ Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, B = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(O) {
        return O();
      }
    };
    var H, X = {}, $ = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), ke = D(r(o)), C = {};
    an.Fragment = g, an.jsx = function(O, q, E) {
      var Q = 1e4 > A.recentlyCreatedOwnerStacks++;
      return u(
        O,
        q,
        E,
        !1,
        Q ? Error("react-stack-top-frame") : $,
        Q ? D(r(O)) : ke
      );
    }, an.jsxs = function(O, q, E) {
      var Q = 1e4 > A.recentlyCreatedOwnerStacks++;
      return u(
        O,
        q,
        E,
        !0,
        Q ? Error("react-stack-top-frame") : $,
        Q ? D(r(O)) : ke
      );
    };
  })()), an;
}
var Js;
function Of() {
  return Js || (Js = 1, process.env.NODE_ENV === "production" ? Zn.exports = Lf() : Zn.exports = jf()), Zn.exports;
}
var v = Of();
const Xs = {
  ok: "success.main",
  warning: "warning.main",
  error: "error.main",
  executing: "info.main",
  waiting: "warning.main",
  default: "text.secondary"
}, Fo = ({ tone: e, size: t = 10 }) => /* @__PURE__ */ v.jsx(
  j,
  {
    sx: {
      width: t,
      height: t,
      borderRadius: "50%",
      backgroundColor: Xs[e] || Xs.default
    }
  }
), L = {
  internal: 0.5,
  // 4px
  xs: 1,
  // 8px
  sm: 1.5,
  // 12px
  md: 2,
  // 16px
  lg: 3,
  // 24px
  xl: 4,
  // 32px
  xxl: 6,
  // 48px
  section: 8,
  // 64px
  page: 12
  // 96px
}, vc = ({ level: e }) => {
  const t = {
    CRITICAL: "error.main",
    ERROR: "error.main",
    WARNING: "warning.main",
    URGENT: "warning.main",
    SUCCESS: "success.main",
    INFO: "info.main"
  }[e] || "info.main";
  return /* @__PURE__ */ v.jsx(
    F,
    {
      variant: "micro",
      sx: {
        px: L.sm,
        py: L.internal,
        borderRadius: 1,
        backgroundColor: `${t}15`,
        color: t
      },
      children: e
    }
  );
}, xc = vt(
  void 0
);
function qe() {
  const e = me(xc);
  if (!e)
    throw new Error("useLanguage must be used within a AstraLanguageProvider");
  return e;
}
const iE = () => {
  const { literal: e } = qe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      role: "status",
      "aria-label": e.loading_message,
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: L.lg,
        mt: L.xl
      },
      children: [
        /* @__PURE__ */ v.jsx(Gp, { "aria-hidden": "true", sx: { mb: L.md, color: "primary.main" } }),
        /* @__PURE__ */ v.jsx(F, { variant: "body1", color: "text.secondary", children: e.loading_message })
      ]
    }
  );
}, oE = ({ message: e }) => {
  const { literal: t } = qe(), n = e || t.unknown_message;
  return /* @__PURE__ */ v.jsx(j, { sx: { p: L.lg, textAlign: "center", mt: L.xl }, children: /* @__PURE__ */ v.jsx(pc, { severity: "error", children: n }) });
}, sE = () => {
  const { literal: e } = qe();
  return /* @__PURE__ */ v.jsx(j, { sx: { p: L.lg, textAlign: "center", mt: L.xl }, children: /* @__PURE__ */ v.jsx(F, { variant: "body1", color: "text.secondary", children: e.no_data_found }) });
}, aE = ({
  title: e,
  supportingText: t,
  children: n,
  action: r
}) => /* @__PURE__ */ v.jsxs(
  Dn,
  {
    elevation: 0,
    sx: {
      p: L.lg,
      borderRadius: 1,
      border: "1px solid",
      borderColor: "divider",
      backgroundColor: "background.paper",
      display: "flex",
      flexDirection: "column",
      gap: L.xs
    },
    children: [
      (e || t || r) && /* @__PURE__ */ v.jsxs(
        j,
        {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start"
          },
          children: [
            /* @__PURE__ */ v.jsxs(j, { children: [
              e && /* @__PURE__ */ v.jsx(
                F,
                {
                  variant: "h4",
                  color: "text.primary",
                  children: e
                }
              ),
              t && /* @__PURE__ */ v.jsx(
                F,
                {
                  variant: "body2",
                  color: "text.secondary",
                  sx: { mt: L.internal },
                  children: t
                }
              )
            ] }),
            r && /* @__PURE__ */ v.jsx(j, { children: r })
          ]
        }
      ),
      /* @__PURE__ */ v.jsx(j, { sx: { flexGrow: 1 }, children: n })
    ]
  }
), lE = ({
  open: e,
  message: t,
  severity: n = "info",
  onClose: r,
  autoHideDuration: i = 4e3
}) => /* @__PURE__ */ v.jsx(
  Kp,
  {
    open: e,
    autoHideDuration: i,
    onClose: r,
    anchorOrigin: { vertical: "bottom", horizontal: "center" },
    children: /* @__PURE__ */ v.jsx(
      pc,
      {
        onClose: r,
        severity: n,
        sx: {
          width: "100%",
          boxShadow: 3,
          borderRadius: 1
        },
        children: t
      }
    )
  }
), uE = ({
  label: e,
  value: t,
  trendValue: n,
  trend: r
}) => /* @__PURE__ */ v.jsxs(
  j,
  {
    sx: {
      flex: 1,
      p: L.md,
      backgroundColor: "background.paper",
      border: 1,
      borderColor: "divider",
      borderRadius: 1
    },
    children: [
      /* @__PURE__ */ v.jsx(
        F,
        {
          variant: "micro",
          sx: { color: "text.secondary" },
          children: e
        }
      ),
      /* @__PURE__ */ v.jsxs(
        j,
        {
          sx: {
            display: "flex",
            alignItems: "baseline",
            gap: L.sm,
            mt: L.xs
          },
          children: [
            /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "h3",
                sx: {
                  color: "text.primary",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums"
                },
                children: t
              }
            ),
            !!n && /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "caption",
                sx: {
                  color: r === "up" ? "success.main" : r === "down" ? "error.main" : "text.secondary",
                  fontWeight: 600
                },
                children: n
              }
            )
          ]
        }
      )
    ]
  }
), Mf = ({
  fileName: e,
  fileContent: t,
  fileEncoding: n,
  mimeType: r
}) => {
  const { literal: i } = qe(), [o, s] = ve(1), [a, l] = ve(0), c = t && n === "base64" ? `data:${r || "image/png"};base64,${t}` : null, u = i["viewer.empty_image"];
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default"
      },
      children: [
        /* @__PURE__ */ v.jsxs(
          j,
          {
            sx: {
              p: L.sm,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "background.paper",
              borderBottom: "1px solid",
              borderColor: "divider"
            },
            children: [
              /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "text.secondary", children: e }),
              /* @__PURE__ */ v.jsxs(j, { children: [
                /* @__PURE__ */ v.jsx(
                  ft,
                  {
                    size: "small",
                    onClick: () => s((f) => Math.min(f + 0.2, 3)),
                    children: /* @__PURE__ */ v.jsx(af, { fontSize: "small" })
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  ft,
                  {
                    size: "small",
                    onClick: () => s((f) => Math.max(f - 0.2, 0.5)),
                    children: /* @__PURE__ */ v.jsx(lf, { fontSize: "small" })
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  ft,
                  {
                    size: "small",
                    onClick: () => l((f) => (f + 90) % 360),
                    children: /* @__PURE__ */ v.jsx(uf, { fontSize: "small" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ v.jsx(
          j,
          {
            sx: {
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative"
            },
            children: c ? /* @__PURE__ */ v.jsx(
              j,
              {
                component: "img",
                src: c,
                alt: e,
                sx: {
                  maxWidth: `${o * 100}%`,
                  maxHeight: `${o * 100}%`,
                  transform: `rotate(${a}deg)`,
                  transition: "transform 0.2s ease-out",
                  objectFit: "contain"
                }
              }
            ) : /* @__PURE__ */ v.jsx(
              j,
              {
                sx: {
                  width: 400,
                  height: 300,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: /* @__PURE__ */ v.jsx(
                  F,
                  {
                    variant: "body2",
                    sx: { color: "text.secondary" },
                    children: u
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}, If = uc(() => import("./index-DsEmDkn7-CK2HZ0fu.js").then((e) => ({ default: e.default }))), Df = ({ fileName: e, fileContent: t }) => {
  const { literal: n } = qe(), r = () => /* @__PURE__ */ v.jsx(j, { sx: { p: L.md, color: "text.secondary" }, children: n["msg.loading"] }), i = n["viewer.empty_markdown"], o = t && t.trim().length > 0 ? t : `_${i}_`;
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: L.xl,
        backgroundColor: "background.paper",
        color: "text.primary",
        overflowY: "auto"
      },
      children: [
        /* @__PURE__ */ v.jsx(F, { variant: "h3", sx: { mb: L.sm, fontWeight: 600 }, children: e }),
        /* @__PURE__ */ v.jsx(mc, { sx: { mb: L.md } }),
        /* @__PURE__ */ v.jsx(
          j,
          {
            sx: {
              "& h1, & h2, & h3": {
                color: "primary.main",
                mt: L.md,
                mb: L.xs
              },
              "& p": { mb: L.sm, lineHeight: 1.6 },
              "& ul, & ol": { pl: L.lg, mb: L.sm },
              "& blockquote": {
                borderLeft: "4px solid",
                borderColor: "primary.main",
                pl: L.md,
                py: L.internal,
                my: L.md,
                backgroundColor: "action.hover",
                fontStyle: "italic"
              },
              "& hr": { my: L.lg, opacity: 0.1 }
            },
            children: /* @__PURE__ */ v.jsx(hc, { fallback: /* @__PURE__ */ v.jsx(r, {}), children: /* @__PURE__ */ v.jsx(If, { children: o }) })
          }
        )
      ]
    }
  );
}, Nf = uc(
  () => import("./index-CaPfULk5-BiMRXh-c.js").then((e) => ({ default: e.Prism }))
), Ff = import("./index-DwO35gpB-D5SMOdMM.js").then((e) => e.vscDarkPlus), Bf = (e, t, n) => {
  if (!t || t.trim().length === 0)
    return JSON.stringify(
      { message: n },
      null,
      2
    );
  if (e.toLowerCase().endsWith(".jsonl")) {
    const r = t.split(/\r?\n/).map((i) => i.trim()).filter((i) => i.length > 0).map((i, o) => {
      try {
        return JSON.parse(i);
      } catch {
        return { line: o + 1, parseError: !0, raw: i };
      }
    });
    return JSON.stringify(r, null, 2);
  }
  try {
    return JSON.stringify(JSON.parse(t), null, 2);
  } catch {
    return JSON.stringify({ parseError: !0, raw: t }, null, 2);
  }
}, Vf = ({ fileName: e, fileContent: t }) => {
  const { literal: n } = qe(), r = () => /* @__PURE__ */ v.jsx(j, { sx: { p: L.md, color: "text.secondary" }, children: n["msg.loading"] }), i = n["viewer.empty_json"], o = Bf(e, t, i), [s, a] = ve(null);
  return s ? /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default"
      },
      children: [
        /* @__PURE__ */ v.jsx(
          j,
          {
            sx: {
              p: L.sm,
              backgroundColor: "background.paper",
              borderBottom: "1px solid",
              borderColor: "divider"
            },
            children: /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "text.secondary", children: e })
          }
        ),
        /* @__PURE__ */ v.jsx(j, { sx: { flexGrow: 1, overflow: "auto", p: L.sm }, children: /* @__PURE__ */ v.jsx(hc, { fallback: /* @__PURE__ */ v.jsx(r, {}), children: /* @__PURE__ */ v.jsx(
          Nf,
          {
            language: "json",
            style: s,
            customStyle: {
              margin: 0,
              padding: L.md,
              borderRadius: 1,
              fontSize: "0.75rem",
              fontFamily: '"IBM Plex Mono", "Menlo", monospace',
              backgroundColor: "background.paper"
            },
            children: o
          }
        ) }) })
      ]
    }
  ) : (Ff.then(a), /* @__PURE__ */ v.jsx(r, {}));
}, zf = 100, cE = ({
  source: e,
  timestamp: t,
  message: n,
  severity: r,
  read: i
}) => {
  const o = pe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        display: "flex",
        alignItems: "flex-start",
        p: L.md,
        backgroundColor: i ? "transparent" : o.palette.background.paper,
        border: 1,
        borderColor: i ? "transparent" : "divider",
        borderRadius: L.xs,
        opacity: i ? 0.7 : 1,
        transition: o.transitions.create("all", {
          duration: o.transitions.duration.shorter,
          easing: o.transitions.easing.easeInOut
        })
      },
      children: [
        /* @__PURE__ */ v.jsx(j, { sx: { width: 40, mt: L.internal }, children: /* @__PURE__ */ v.jsx(
          Fo,
          {
            tone: r === "CRITICAL" ? "error" : r === "WARNING" ? "warning" : "executing"
          }
        ) }),
        /* @__PURE__ */ v.jsxs(j, { sx: { flexGrow: 1 }, children: [
          /* @__PURE__ */ v.jsxs(j, { sx: { display: "flex", gap: L.md, mb: L.internal }, children: [
            /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "body2Bold",
                sx: { color: o.palette.text.primary },
                children: e
              }
            ),
            /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "caption",
                sx: { color: o.palette.text.secondary },
                children: new Date(t).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })
              }
            )
          ] }),
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "body1",
              sx: { color: o.palette.text.primary },
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(j, { sx: { width: zf, textAlign: "right" }, children: /* @__PURE__ */ v.jsx(vc, { level: r }) })
      ]
    }
  );
}, Bo = vt({});
function Nn(e) {
  const t = Fe(null);
  return t.current === null && (t.current = e()), t.current;
}
const Qr = vt(null), Fn = vt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class Uf extends Oo.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Hf({ children: e, isPresent: t }) {
  const n = Do(), r = Fe(null), i = Fe({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: o } = me(Fn);
  return Io(() => {
    const { width: s, height: a, top: l, left: c } = i.current;
    if (t || !r.current || !s || !a)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return o && (u.nonce = o), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), v.jsx(Uf, { isPresent: t, childRef: r, sizeRef: i, children: Oo.cloneElement(e, { ref: r }) });
}
const qf = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
  const a = Nn(Wf), l = Do(), c = No((f) => {
    a.set(f, !0);
    for (const d of a.values())
      if (!d)
        return;
    r && r();
  }, [a, r]), u = mt(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: c,
      register: (f) => (a.set(f, !1), () => a.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? [Math.random(), c] : [n, c]
  );
  return mt(() => {
    a.forEach((f, d) => a.set(d, !1));
  }, [n]), Oo.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), s === "popLayout" && (e = v.jsx(Hf, { isPresent: n, children: e })), v.jsx(Qr.Provider, { value: u, children: e });
};
function Wf() {
  return /* @__PURE__ */ new Map();
}
function bc(e = !0) {
  const t = me(Qr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, o = Do();
  at(() => {
    e && i(o);
  }, [e]);
  const s = No(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const $n = (e) => e.key || "";
function Qs(e) {
  const t = [];
  return Rp.forEach(e, (n) => {
    Tp(n) && t.push(n);
  }), t;
}
const Vo = typeof window < "u", Zr = Vo ? Ap : at, Gf = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: s = !1 }) => {
  const [a, l] = bc(s), c = mt(() => Qs(e), [e]), u = s && !a ? [] : c.map($n), f = Fe(!0), d = Fe(c), h = Nn(() => /* @__PURE__ */ new Map()), [p, m] = ve(c), [g, y] = ve(c);
  Zr(() => {
    f.current = !1, d.current = c;
    for (let S = 0; S < g.length; S++) {
      const b = $n(g[S]);
      u.includes(b) ? h.delete(b) : h.get(b) !== !0 && h.set(b, !1);
    }
  }, [g, u.length, u.join("-")]);
  const x = [];
  if (c !== p) {
    let S = [...c];
    for (let b = 0; b < g.length; b++) {
      const w = g[b], _ = $n(w);
      u.includes(_) || (S.splice(b, 0, w), x.push(w));
    }
    o === "wait" && x.length && (S = x), y(Qs(S)), m(c);
    return;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && g.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: k } = me(Bo);
  return v.jsx(v.Fragment, { children: g.map((S) => {
    const b = $n(S), w = s && !a ? !1 : c === g || u.includes(b), _ = () => {
      if (h.has(b))
        h.set(b, !0);
      else
        return;
      let R = !0;
      h.forEach((I) => {
        I || (R = !1);
      }), R && (k?.(), y(d.current), s && l?.(), r && r());
    };
    return v.jsx(qf, { isPresent: w, initial: !f.current || n ? void 0 : !1, custom: w ? void 0 : t, presenceAffectsLayout: i, mode: o, onExitComplete: w ? void 0 : _, children: S }, b);
  }) });
}, Ae = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Xt = Ae, gt = Ae;
process.env.NODE_ENV !== "production" && (Xt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, gt = (e, t) => {
  if (!e)
    throw new Error(t);
});
// @__NO_SIDE_EFFECTS__
function zo(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Wt = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, $e = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, st = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Yf = {
  useManualTiming: !1
};
function Kf(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    o.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, f = !1) => {
      const d = f && r ? t : n;
      return u && o.add(c), d.has(c) || d.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), o.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (s = c, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, i && (i = !1, l.process(c));
    }
  };
  return l;
}
const er = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Jf = 40;
function Sc(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = er.reduce((m, g) => (m[g] = Kf(o), m), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: d } = s, h = () => {
    const m = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Jf), 1), i.timestamp = m, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
  }, p = () => {
    n = !0, r = !0, i.isProcessing || e(h);
  };
  return { schedule: er.reduce((m, g) => {
    const y = s[g];
    return m[g] = (x, k = !1, S = !1) => (n || p(), y.schedule(x, k, S)), m;
  }, {}), cancel: (m) => {
    for (let g = 0; g < er.length; g++)
      s[er[g]].cancel(m);
  }, state: i, steps: s };
}
const { schedule: re, cancel: lt, state: ge, steps: fi } = Sc(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ae, !0), kc = vt({ strict: !1 }), Zs = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Gt = {};
for (const e in Zs)
  Gt[e] = {
    isEnabled: (t) => Zs[e].some((n) => !!t[n])
  };
function Xf(e) {
  for (const t in e)
    Gt[t] = {
      ...Gt[t],
      ...e[t]
    };
}
const Qf = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function zr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Qf.has(e);
}
let wc = (e) => !zr(e);
function Zf(e) {
  e && (wc = (t) => t.startsWith("on") ? !zr(t) : e(t));
}
try {
  Zf(require("@emotion/is-prop-valid").default);
} catch {
}
function $f(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (wc(i) || n === !0 && zr(i) || !t && !zr(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
const $s = /* @__PURE__ */ new Set();
function $r(e, t, n) {
  e || $s.has(t) || (console.warn(t), $s.add(t));
}
function em(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && $r(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
const ei = vt({});
function Tn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ti(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Uo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ho = ["initial", ...Uo];
function ni(e) {
  return ti(e.animate) || Ho.some((t) => Tn(e[t]));
}
function Ec(e) {
  return !!(ni(e) || e.variants);
}
function tm(e, t) {
  if (ni(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Tn(n) ? n : void 0,
      animate: Tn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function nm(e) {
  const { initial: t, animate: n } = tm(e, me(ei));
  return mt(() => ({ initial: t, animate: n }), [ea(t), ea(n)]);
}
function ea(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const rm = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Bt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function im(e, t, n) {
  return No(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Bt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const qo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), om = "framerAppearId", _c = "data-" + qo(om), { schedule: Wo } = Sc(queueMicrotask, !1), Cc = vt({});
function sm(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = me(ei), l = me(kc), c = me(Qr), u = me(Fn).reducedMotion, f = Fe(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = f.current, h = me(Cc);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && am(f.current, n, i, h);
  const p = Fe(!1);
  Io(() => {
    d && p.current && d.update(n, c);
  });
  const m = n[_c], g = Fe(!!m && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, m)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, m)));
  return Zr(() => {
    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Wo.render(d.render), g.current && d.animationState && d.animationState.animateChanges());
  }), at(() => {
    d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) === null || y === void 0 || y.call(window, m);
    }), g.current = !1));
  }), d;
}
function am(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Pc(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!s || a && Bt(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    layoutScroll: l,
    layoutRoot: c
  });
}
function Pc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Pc(e.parent);
}
function lm({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var o, s;
  e && Xf(e);
  function a(c, u) {
    let f;
    const d = {
      ...me(Fn),
      ...c,
      layoutId: um(c)
    }, { isStatic: h } = d, p = nm(c), m = r(c, h);
    if (!h && Vo) {
      cm(d, e);
      const g = hm(d);
      f = g.MeasureLayout, p.visualElement = sm(i, m, d, t, g.ProjectionNode);
    }
    return v.jsxs(ei.Provider, { value: p, children: [f && p.visualElement ? v.jsx(f, { visualElement: p.visualElement, ...d }) : null, n(i, c, im(m, p.visualElement, u), m, h, p.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
  const l = Mo(a);
  return l[rm] = i, l;
}
function um({ layoutId: e }) {
  const t = me(Bo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cm(e, t) {
  const n = me(kc).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Xt(!1, r) : gt(!1, r);
  }
}
function hm(e) {
  const { drag: t, layout: n } = Gt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const dm = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Go(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
    * If it contains a dash, the element is a custom HTML webcomponent.
    */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(dm.indexOf(e) > -1 || /**
      * If it contains a capital letter, it's an SVG component
      */
      /[A-Z]/u.test(e))
    )
  );
}
function ta(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Yo(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = ta(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = ta(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const no = (e) => Array.isArray(e), pm = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), fm = (e) => no(e) ? e[e.length - 1] || 0 : e, ye = (e) => !!(e && e.getVelocity);
function Lr(e) {
  const t = ye(e) ? e.get() : e;
  return pm(t) ? t.toValue() : t;
}
function mm({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, o) {
  const s = {
    latestValues: gm(r, i, o, e),
    renderState: t()
  };
  return n && (s.onMount = (a) => n({ props: r, current: a, ...s }), s.onUpdate = (a) => n(a)), s;
}
const Ac = (e) => (t, n) => {
  const r = me(ei), i = me(Qr), o = () => mm(e, t, r, i);
  return n ? o() : Nn(o);
};
function gm(e, t, n, r) {
  const i = {}, o = r(e, {});
  for (const d in o)
    i[d] = Lr(o[d]);
  let { initial: s, animate: a } = e;
  const l = ni(e), c = Ec(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const f = u ? a : s;
  if (f && typeof f != "boolean" && !ti(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let h = 0; h < d.length; h++) {
      const p = Yo(e, d[h]);
      if (p) {
        const { transitionEnd: m, transition: g, ...y } = p;
        for (const x in y) {
          let k = y[x];
          if (Array.isArray(k)) {
            const S = u ? k.length - 1 : 0;
            k = k[S];
          }
          k !== null && (i[x] = k);
        }
        for (const x in m)
          i[x] = m[x];
      }
    }
  }
  return i;
}
const Qt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Tt = new Set(Qt), Rc = (e) => (t) => typeof t == "string" && t.startsWith(e), Tc = /* @__PURE__ */ Rc("--"), ym = /* @__PURE__ */ Rc("var(--"), Ko = (e) => ym(e) ? vm.test(e.split("/*")[0].trim()) : !1, vm = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Lc = (e, t) => t && typeof e == "number" ? t.transform(e) : e, ut = (e, t, n) => n > t ? t : n < e ? e : n, Zt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ln = {
  ...Zt,
  transform: (e) => ut(0, 1, e)
}, tr = {
  ...Zt,
  default: 1
}, Bn = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), dt = /* @__PURE__ */ Bn("deg"), et = /* @__PURE__ */ Bn("%"), W = /* @__PURE__ */ Bn("px"), xm = /* @__PURE__ */ Bn("vh"), bm = /* @__PURE__ */ Bn("vw"), na = {
  ...et,
  parse: (e) => et.parse(e) / 100,
  transform: (e) => et.transform(e * 100)
}, Sm = {
  // Border props
  borderWidth: W,
  borderTopWidth: W,
  borderRightWidth: W,
  borderBottomWidth: W,
  borderLeftWidth: W,
  borderRadius: W,
  radius: W,
  borderTopLeftRadius: W,
  borderTopRightRadius: W,
  borderBottomRightRadius: W,
  borderBottomLeftRadius: W,
  // Positioning props
  width: W,
  maxWidth: W,
  height: W,
  maxHeight: W,
  top: W,
  right: W,
  bottom: W,
  left: W,
  // Spacing props
  padding: W,
  paddingTop: W,
  paddingRight: W,
  paddingBottom: W,
  paddingLeft: W,
  margin: W,
  marginTop: W,
  marginRight: W,
  marginBottom: W,
  marginLeft: W,
  // Misc
  backgroundPositionX: W,
  backgroundPositionY: W
}, km = {
  rotate: dt,
  rotateX: dt,
  rotateY: dt,
  rotateZ: dt,
  scale: tr,
  scaleX: tr,
  scaleY: tr,
  scaleZ: tr,
  skew: dt,
  skewX: dt,
  skewY: dt,
  distance: W,
  translateX: W,
  translateY: W,
  translateZ: W,
  x: W,
  y: W,
  z: W,
  perspective: W,
  transformPerspective: W,
  opacity: Ln,
  originX: na,
  originY: na,
  originZ: W
}, ra = {
  ...Zt,
  transform: Math.round
}, Jo = {
  ...Sm,
  ...km,
  zIndex: ra,
  size: W,
  // SVG
  fillOpacity: Ln,
  strokeOpacity: Ln,
  numOctaves: ra
}, wm = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Em = Qt.length;
function _m(e, t, n) {
  let r = "", i = !0;
  for (let o = 0; o < Em; o++) {
    const s = Qt[o], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = Lc(a, Jo[s]);
      if (!l) {
        i = !1;
        const u = wm[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function Xo(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Tt.has(l)) {
      s = !0;
      continue;
    } else if (Tc(l)) {
      i[l] = c;
      continue;
    } else {
      const u = Lc(c, Jo[l]);
      l.startsWith("origin") ? (a = !0, o[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (s || n ? r.transform = _m(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const Cm = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Pm = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Am(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Cm : Pm;
  e[o.offset] = W.transform(-r);
  const s = W.transform(t), a = W.transform(n);
  e[o.array] = `${s} ${a}`;
}
function ia(e, t, n) {
  return typeof e == "string" ? e : W.transform(t + n * e);
}
function Rm(e, t, n) {
  const r = ia(t, e.x, e.width), i = ia(n, e.y, e.height);
  return `${r} ${i}`;
}
function Qo(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: o,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, f) {
  if (Xo(e, c, f), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: h, dimensions: p } = e;
  d.transform && (p && (h.transform = d.transform), delete d.transform), p && (i !== void 0 || o !== void 0 || h.transform) && (h.transformOrigin = Rm(p, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && Am(d, s, a, l, !1);
}
const Zo = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), jc = () => ({
  ...Zo(),
  attrs: {}
}), $o = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Oc(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const Mc = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ic(e, t, n, r) {
  Oc(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(Mc.has(i) ? i : qo(i), t.attrs[i]);
}
const Ur = {};
function Tm(e) {
  Object.assign(Ur, e);
}
function Dc(e, { layout: t, layoutId: n }) {
  return Tt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ur[e] || e === "opacity");
}
function es(e, t, n) {
  var r;
  const { style: i } = e, o = {};
  for (const s in i)
    (ye(i[s]) || t.style && ye(t.style[s]) || Dc(s, e) || ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
  return o;
}
function Nc(e, t, n) {
  const r = es(e, t, n);
  for (const i in e)
    if (ye(e[i]) || ye(t[i])) {
      const o = Qt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
function Lm(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const oa = ["x", "y", "width", "height", "cx", "cy", "r"], jm = {
  useVisualState: Ac({
    scrapeMotionValuesFromProps: Nc,
    createRenderState: jc,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
      if (!n)
        return;
      let o = !!e.drag;
      if (!o) {
        for (const a in i)
          if (Tt.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let s = !t;
      if (t)
        for (let a = 0; a < oa.length; a++) {
          const l = oa[a];
          e[l] !== t[l] && (s = !0);
        }
      s && re.read(() => {
        Lm(n, r), re.render(() => {
          Qo(r, i, $o(n.tagName), e.transformTemplate), Ic(n, r);
        });
      });
    }
  })
}, Om = {
  useVisualState: Ac({
    scrapeMotionValuesFromProps: es,
    createRenderState: Zo
  })
};
function Fc(e, t, n) {
  for (const r in t)
    !ye(t[r]) && !Dc(r, n) && (e[r] = t[r]);
}
function Mm({ transformTemplate: e }, t) {
  return mt(() => {
    const n = Zo();
    return Xo(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Im(e, t) {
  const n = e.style || {}, r = {};
  return Fc(r, n, e), Object.assign(r, Mm(e, t)), r;
}
function Dm(e, t) {
  const n = {}, r = Im(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function Nm(e, t, n, r) {
  const i = mt(() => {
    const o = jc();
    return Qo(o, t, $o(r), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    Fc(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function Fm(e = !1) {
  return (t, n, r, { latestValues: i }, o) => {
    const s = (Go(t) ? Nm : Dm)(n, i, o, t), a = $f(n, typeof t == "string", e), l = t !== dc ? { ...a, ...s, ref: r } : {}, { children: c } = n, u = mt(() => ye(c) ? c.get() : c, [c]);
    return Br(t, {
      ...l,
      children: u
    });
  };
}
function Bm(e, t) {
  return function(n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    const i = {
      ...Go(n) ? jm : Om,
      preloadedFeatures: e,
      useRender: Fm(r),
      createVisualElement: t,
      Component: n
    };
    return lm(i);
  };
}
function Bc(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function ri(e, t, n) {
  const r = e.getProps();
  return Yo(r, t, n !== void 0 ? n : r.custom, e);
}
const Vm = /* @__PURE__ */ zo(() => window.ScrollTimeline !== void 0);
class zm {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (Vm() && i.attachTimeline)
        return i.attachTimeline(t);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Um extends zm {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function ts(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ro = 2e4;
function Vc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ro; )
    t += n, r = e.next(t);
  return t >= ro ? 1 / 0 : t;
}
function ns(e) {
  return typeof e == "function";
}
function sa(e, t) {
  e.timeline = t, e.onfinish = null;
}
const rs = (e) => Array.isArray(e) && typeof e[0] == "number", Hm = {
  linearEasing: void 0
};
function qm(e, t) {
  const n = /* @__PURE__ */ zo(e);
  return () => {
    var r;
    return (r = Hm[t]) !== null && r !== void 0 ? r : n();
  };
}
const Hr = /* @__PURE__ */ qm(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), zc = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    r += e(/* @__PURE__ */ Wt(0, i - 1, o)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Uc(e) {
  return !!(typeof e == "function" && Hr() || !e || typeof e == "string" && (e in io || Hr()) || rs(e) || Array.isArray(e) && e.every(Uc));
}
const yn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, io = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ yn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ yn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ yn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ yn([0.33, 1.53, 0.69, 0.99])
};
function Hc(e, t) {
  if (e)
    return typeof e == "function" && Hr() ? zc(e, t) : rs(e) ? yn(e) : Array.isArray(e) ? e.map((n) => Hc(n, t) || io.easeOut) : io[e];
}
const Ye = {
  x: !1,
  y: !1
};
function qc() {
  return Ye.x || Ye.y;
}
function Wm(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Wc(e, t) {
  const n = Wm(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function aa(e) {
  return (t) => {
    t.pointerType === "touch" || qc() || e(t);
  };
}
function Gm(e, t, n = {}) {
  const [r, i, o] = Wc(e, n), s = aa((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const u = aa((f) => {
      c(f), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, i);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", s, i);
  }), o;
}
const Gc = (e, t) => t ? e === t ? !0 : Gc(e, t.parentElement) : !1, is = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Ym = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Km(e) {
  return Ym.has(e.tagName) || e.tabIndex !== -1;
}
const vn = /* @__PURE__ */ new WeakSet();
function la(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function mi(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Jm = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = la(() => {
    if (vn.has(n))
      return;
    mi(n, "down");
    const i = la(() => {
      mi(n, "up");
    }), o = () => mi(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function ua(e) {
  return is(e) && !qc();
}
function Xm(e, t, n = {}) {
  const [r, i, o] = Wc(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!ua(a) || vn.has(l))
      return;
    vn.add(l);
    const c = t(a), u = (h, p) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!ua(h) || !vn.has(l)) && (vn.delete(l), typeof c == "function" && c(h, { success: p }));
    }, f = (h) => {
      u(h, n.useGlobalTarget || Gc(l, h.target));
    }, d = (h) => {
      u(h, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return r.forEach((a) => {
    !Km(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i), a.addEventListener("focus", (l) => Jm(l, i), i);
  }), o;
}
function Qm(e) {
  return e === "x" || e === "y" ? Ye[e] ? null : (Ye[e] = !0, () => {
    Ye[e] = !1;
  }) : Ye.x || Ye.y ? null : (Ye.x = Ye.y = !0, () => {
    Ye.x = Ye.y = !1;
  });
}
const Yc = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Qt
]);
let jr;
function Zm() {
  jr = void 0;
}
const tt = {
  now: () => (jr === void 0 && tt.set(ge.isProcessing || Yf.useManualTiming ? ge.timestamp : performance.now()), jr),
  set: (e) => {
    jr = e, queueMicrotask(Zm);
  }
};
function os(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ss(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class as {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return os(this.subscriptions, t), () => ss(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Kc(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ca = 30, $m = (e) => !isNaN(parseFloat(e)), bn = {
  current: void 0
};
class eg {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const o = tt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = tt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = $m(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && $r(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new as());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), re.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return bn.current && bn.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = tt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ca)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ca);
    return Kc(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Yt(e, t) {
  return new eg(e, t);
}
function tg(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Yt(n));
}
function ng(e, t) {
  const n = ri(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = fm(o[s]);
    tg(e, s, a);
  }
}
function rg(e) {
  return !!(ye(e) && e.add);
}
function oo(e, t) {
  const n = e.getValue("willChange");
  if (rg(n))
    return n.add(t);
}
function Jc(e) {
  return e.props[_c];
}
const Xc = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ig = 1e-7, og = 12;
function sg(e, t, n, r, i) {
  let o, s, a = 0;
  do
    s = t + (n - t) / 2, o = Xc(s, r, i) - e, o > 0 ? n = s : t = s;
  while (Math.abs(o) > ig && ++a < og);
  return s;
}
function Vn(e, t, n, r) {
  if (e === t && n === r)
    return Ae;
  const i = (o) => sg(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Xc(i(o), t, r);
}
const Qc = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Zc = (e) => (t) => 1 - e(1 - t), $c = /* @__PURE__ */ Vn(0.33, 1.53, 0.69, 0.99), ls = /* @__PURE__ */ Zc($c), eh = /* @__PURE__ */ Qc(ls), th = (e) => (e *= 2) < 1 ? 0.5 * ls(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), us = (e) => 1 - Math.sin(Math.acos(e)), nh = Zc(us), rh = Qc(us), ih = (e) => /^0[^.\s]+$/u.test(e);
function ag(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ih(e) : !0;
}
const Sn = (e) => Math.round(e * 1e5) / 1e5, cs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function lg(e) {
  return e == null;
}
const ug = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, hs = (e, t) => (n) => !!(typeof n == "string" && ug.test(n) && n.startsWith(e) || t && !lg(n) && Object.prototype.hasOwnProperty.call(n, t)), oh = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, o, s, a] = r.match(cs);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, cg = (e) => ut(0, 255, e), gi = {
  ...Zt,
  transform: (e) => Math.round(cg(e))
}, Et = {
  test: /* @__PURE__ */ hs("rgb", "red"),
  parse: /* @__PURE__ */ oh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + gi.transform(e) + ", " + gi.transform(t) + ", " + gi.transform(n) + ", " + Sn(Ln.transform(r)) + ")"
};
function hg(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const so = {
  test: /* @__PURE__ */ hs("#"),
  parse: hg,
  transform: Et.transform
}, Vt = {
  test: /* @__PURE__ */ hs("hsl", "hue"),
  parse: /* @__PURE__ */ oh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + et.transform(Sn(t)) + ", " + et.transform(Sn(n)) + ", " + Sn(Ln.transform(r)) + ")"
}, xe = {
  test: (e) => Et.test(e) || so.test(e) || Vt.test(e),
  parse: (e) => Et.test(e) ? Et.parse(e) : Vt.test(e) ? Vt.parse(e) : so.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Et.transform(e) : Vt.transform(e)
}, dg = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function pg(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(cs)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(dg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const sh = "number", ah = "color", fg = "var", mg = "var(", ha = "${}", gg = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function jn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const s = t.replace(gg, (a) => (xe.test(a) ? (r.color.push(o), i.push(ah), n.push(xe.parse(a))) : a.startsWith(mg) ? (r.var.push(o), i.push(fg), n.push(a)) : (r.number.push(o), i.push(sh), n.push(parseFloat(a))), ++o, ha)).split(ha);
  return { values: n, split: s, indexes: r, types: i };
}
function lh(e) {
  return jn(e).values;
}
function uh(e) {
  const { split: t, types: n } = jn(e), r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += t[s], i[s] !== void 0) {
        const a = n[s];
        a === sh ? o += Sn(i[s]) : a === ah ? o += xe.transform(i[s]) : o += i[s];
      }
    return o;
  };
}
const yg = (e) => typeof e == "number" ? 0 : e;
function vg(e) {
  const t = lh(e);
  return uh(e)(t.map(yg));
}
const yt = {
  test: pg,
  parse: lh,
  createTransformer: uh,
  getAnimatableNone: vg
}, xg = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function bg(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(cs) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = xg.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Sg = /\b([a-z-]*)\(.*?\)/gu, ao = {
  ...yt,
  getAnimatableNone: (e) => {
    const t = e.match(Sg);
    return t ? t.map(bg).join(" ") : e;
  }
}, kg = {
  ...Jo,
  // Color props
  color: xe,
  backgroundColor: xe,
  outlineColor: xe,
  fill: xe,
  stroke: xe,
  // Border props
  borderColor: xe,
  borderTopColor: xe,
  borderRightColor: xe,
  borderBottomColor: xe,
  borderLeftColor: xe,
  filter: ao,
  WebkitFilter: ao
}, ds = (e) => kg[e];
function ch(e, t) {
  let n = ds(e);
  return n !== ao && (n = yt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const wg = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Eg(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !wg.has(o) && jn(o).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const o of t)
      e[o] = ch(n, i);
}
const da = (e) => e === Zt || e === W, pa = (e, t) => parseFloat(e.split(", ")[t]), fa = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return pa(i[1], t);
  {
    const o = r.match(/^matrix\((.+)\)$/u);
    return o ? pa(o[1], e) : 0;
  }
}, _g = /* @__PURE__ */ new Set(["x", "y", "z"]), Cg = Qt.filter((e) => !_g.has(e));
function Pg(e) {
  const t = [];
  return Cg.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Kt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: fa(4, 13),
  y: fa(5, 14)
};
Kt.translateX = Kt.x;
Kt.translateY = Kt.y;
const Ct = /* @__PURE__ */ new Set();
let lo = !1, uo = !1;
function hh() {
  if (uo) {
    const e = Array.from(Ct).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Pg(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, s]) => {
        var a;
        (a = r.getValue(o)) === null || a === void 0 || a.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  uo = !1, lo = !1, Ct.forEach((e) => e.complete()), Ct.clear();
}
function dh() {
  Ct.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (uo = !0);
  });
}
function Ag() {
  dh(), hh();
}
class ps {
  constructor(t, n, r, i, o, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Ct.add(this), lo || (lo = !0, re.read(dh), re.resolveKeyframes(hh))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i?.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else
          t[o] = t[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Ct.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Ct.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ph = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Rg = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Tg(e) {
  const t = Rg.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const Lg = 4;
function fh(e, t, n = 1) {
  gt(n <= Lg, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, i] = Tg(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return ph(s) ? parseFloat(s) : s;
  }
  return Ko(i) ? fh(i, t, n + 1) : i;
}
const mh = (e) => (t) => t.test(e), jg = {
  test: (e) => e === "auto",
  parse: (e) => e
}, gh = [Zt, W, et, dt, bm, xm, jg], ma = (e) => gh.find(mh(e));
class yh extends ps {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), Ko(c))) {
        const u = fh(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Yc.has(r) || t.length !== 2)
      return;
    const [i, o] = t, s = ma(i), a = ma(o);
    if (s !== a)
      if (da(s) && da(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      ag(t[i]) && r.push(i);
    r.length && Eg(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Kt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1, a = i[s];
    i[s] = Kt[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const ga = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(yt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Og(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Mg(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], s = ga(i, t), a = ga(o, t);
  return Xt(s === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !a ? !1 : Og(e) || (n === "spring" || ns(n)) && r;
}
const Ig = (e) => e !== null;
function ii(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Ig), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const Dg = 40;
class vh {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = tt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Dg ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ag(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = tt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !Mg(t, r, i, o))
      if (s)
        this.options.duration = 0;
      else {
        l && l(ii(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const le = (e, t, n) => e + (t - e) * n;
function yi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ng({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, s = 0;
  if (!t)
    i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    i = yi(l, a, e + 1 / 3), o = yi(l, a, e), s = yi(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function qr(e, t) {
  return (n) => n > 0 ? t : e;
}
const vi = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, Fg = [so, Et, Vt], Bg = (e) => Fg.find((t) => t.test(e));
function ya(e) {
  const t = Bg(e);
  if (Xt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Vt && (n = Ng(n)), n;
}
const va = (e, t) => {
  const n = ya(e), r = ya(t);
  if (!n || !r)
    return qr(e, t);
  const i = { ...n };
  return (o) => (i.red = vi(n.red, r.red, o), i.green = vi(n.green, r.green, o), i.blue = vi(n.blue, r.blue, o), i.alpha = le(n.alpha, r.alpha, o), Et.transform(i));
}, Vg = (e, t) => (n) => t(e(n)), zn = (...e) => e.reduce(Vg), co = /* @__PURE__ */ new Set(["none", "hidden"]);
function zg(e, t) {
  return co.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Ug(e, t) {
  return (n) => le(e, t, n);
}
function fs(e) {
  return typeof e == "number" ? Ug : typeof e == "string" ? Ko(e) ? qr : xe.test(e) ? va : Wg : Array.isArray(e) ? xh : typeof e == "object" ? xe.test(e) ? va : Hg : qr;
}
function xh(e, t) {
  const n = [...e], r = n.length, i = e.map((o, s) => fs(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n;
  };
}
function Hg(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = fs(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function qg(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[o] = l, i[s]++;
  }
  return r;
}
const Wg = (e, t) => {
  const n = yt.createTransformer(t), r = jn(e), i = jn(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? co.has(e) && !i.values.length || co.has(t) && !r.values.length ? zg(e, t) : zn(xh(qg(r, i), i.values), n) : (Xt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), qr(e, t));
};
function bh(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : fs(e)(e, t);
}
const Gg = 5;
function Sh(e, t, n) {
  const r = Math.max(t - Gg, 0);
  return Kc(n - e(r), t - r);
}
const ae = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, xi = 1e-3;
function Yg({ duration: e = ae.duration, bounce: t = ae.bounce, velocity: n = ae.velocity, mass: r = ae.mass }) {
  let i, o;
  Xt(e <= /* @__PURE__ */ $e(ae.maxDuration), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  s = ut(ae.minDamping, ae.maxDamping, s), e = ut(ae.minDuration, ae.maxDuration, /* @__PURE__ */ st(e)), s < 1 ? (i = (c) => {
    const u = c * s, f = u * e, d = u - n, h = ho(c, s), p = Math.exp(-f);
    return xi - d / h * p;
  }, o = (c) => {
    const u = c * s * e, f = u * n + n, d = Math.pow(s, 2) * Math.pow(c, 2) * e, h = Math.exp(-u), p = ho(Math.pow(c, 2), s);
    return (-i(c) + xi > 0 ? -1 : 1) * ((f - d) * h) / p;
  }) : (i = (c) => {
    const u = Math.exp(-c * e), f = (c - n) * e + 1;
    return -xi + u * f;
  }, o = (c) => {
    const u = Math.exp(-c * e), f = (n - c) * (e * e);
    return u * f;
  });
  const a = 5 / e, l = Jg(i, o, a);
  if (e = /* @__PURE__ */ $e(e), isNaN(l))
    return {
      stiffness: ae.stiffness,
      damping: ae.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Kg = 12;
function Jg(e, t, n) {
  let r = n;
  for (let i = 1; i < Kg; i++)
    r = r - e(r) / t(r);
  return r;
}
function ho(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Xg = ["duration", "bounce"], Qg = ["stiffness", "damping", "mass"];
function xa(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Zg(e) {
  let t = {
    velocity: ae.velocity,
    stiffness: ae.stiffness,
    damping: ae.damping,
    mass: ae.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!xa(e, Qg) && xa(e, Xg))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, o = 2 * ut(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: ae.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Yg(e);
      t = {
        ...t,
        ...n,
        mass: ae.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function kh(e = ae.visualDuration, t = ae.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: f, velocity: d, isResolvedFromDuration: h } = Zg({
    ...n,
    velocity: -/* @__PURE__ */ st(n.velocity || 0)
  }), p = d || 0, m = c / (2 * Math.sqrt(l * u)), g = s - o, y = /* @__PURE__ */ st(Math.sqrt(l / u)), x = Math.abs(g) < 5;
  r || (r = x ? ae.restSpeed.granular : ae.restSpeed.default), i || (i = x ? ae.restDelta.granular : ae.restDelta.default);
  let k;
  if (m < 1) {
    const b = ho(y, m);
    k = (w) => {
      const _ = Math.exp(-m * y * w);
      return s - _ * ((p + m * y * g) / b * Math.sin(b * w) + g * Math.cos(b * w));
    };
  } else if (m === 1)
    k = (b) => s - Math.exp(-y * b) * (g + (p + y * g) * b);
  else {
    const b = y * Math.sqrt(m * m - 1);
    k = (w) => {
      const _ = Math.exp(-m * y * w), R = Math.min(b * w, 300);
      return s - _ * ((p + m * y * g) * Math.sinh(R) + b * g * Math.cosh(R)) / b;
    };
  }
  const S = {
    calculatedDuration: h && f || null,
    next: (b) => {
      const w = k(b);
      if (h)
        a.done = b >= f;
      else {
        let _ = 0;
        m < 1 && (_ = b === 0 ? /* @__PURE__ */ $e(p) : Sh(k, b, w));
        const R = Math.abs(_) <= r, I = Math.abs(s - w) <= i;
        a.done = R && I;
      }
      return a.value = a.done ? s : w, a;
    },
    toString: () => {
      const b = Math.min(Vc(S), ro), w = zc((_) => S.next(b * _).value, b, 30);
      return b + "ms " + w;
    }
  };
  return S;
}
function ba({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, h = (R) => a !== void 0 && R < a || l !== void 0 && R > l, p = (R) => a === void 0 ? l : l === void 0 || Math.abs(a - R) < Math.abs(l - R) ? a : l;
  let m = n * t;
  const g = f + m, y = s === void 0 ? g : s(g);
  y !== g && (m = y - f);
  const x = (R) => -m * Math.exp(-R / r), k = (R) => y + x(R), S = (R) => {
    const I = x(R), z = k(R);
    d.done = Math.abs(I) <= c, d.value = d.done ? y : z;
  };
  let b, w;
  const _ = (R) => {
    h(d.value) && (b = R, w = kh({
      keyframes: [d.value, p(d.value)],
      velocity: Sh(k, R, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: c,
      restSpeed: u
    }));
  };
  return _(0), {
    calculatedDuration: null,
    next: (R) => {
      let I = !1;
      return !w && b === void 0 && (I = !0, S(R), _(R)), b !== void 0 && R >= b ? w.next(R - b) : (!I && S(R), d);
    }
  };
}
const $g = /* @__PURE__ */ Vn(0.42, 0, 1, 1), ey = /* @__PURE__ */ Vn(0, 0, 0.58, 1), wh = /* @__PURE__ */ Vn(0.42, 0, 0.58, 1), ty = (e) => Array.isArray(e) && typeof e[0] != "number", Sa = {
  linear: Ae,
  easeIn: $g,
  easeInOut: wh,
  easeOut: ey,
  circIn: us,
  circInOut: rh,
  circOut: nh,
  backIn: ls,
  backInOut: eh,
  backOut: $c,
  anticipate: th
}, ka = (e) => {
  if (rs(e)) {
    gt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, i] = e;
    return Vn(t, n, r, i);
  } else if (typeof e == "string")
    return gt(Sa[e] !== void 0, `Invalid easing type '${e}'`), Sa[e];
  return e;
};
function ny(e, t, n) {
  const r = [], i = n || bh, o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ae : t;
      a = zn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Eh(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (gt(o === t.length, "Both input and output ranges must be the same length"), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = ny(t, r, i), l = a.length, c = (u) => {
    if (s && u < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(u < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ Wt(e[f], e[f + 1], u);
    return a[f](d);
  };
  return n ? (u) => c(ut(e[0], e[o - 1], u)) : c;
}
function ry(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Wt(0, t, r);
    e.push(le(n, 1, i));
  }
}
function iy(e) {
  const t = [0];
  return ry(t, e.length - 1), t;
}
function oy(e, t) {
  return e.map((n) => n * t);
}
function sy(e, t) {
  return e.map(() => t || wh).splice(0, e.length - 1);
}
function Wr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = ty(r) ? r.map(ka) : ka(r), o = {
    done: !1,
    value: t[0]
  }, s = oy(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : iy(t),
    e
  ), a = Eh(s, t, {
    ease: Array.isArray(i) ? i : sy(t, i)
  });
  return {
    calculatedDuration: e,
    next: (l) => (o.value = a(l), o.done = l >= e, o)
  };
}
const ay = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => re.update(t, !0),
    stop: () => lt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ge.isProcessing ? ge.timestamp : tt.now()
  };
}, ly = {
  decay: ba,
  inertia: ba,
  tween: Wr,
  keyframes: Wr,
  spring: kh
}, uy = (e) => e / 100;
class oi extends vh {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options, s = i?.KeyframeResolver || ps, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, a = ns(n) ? n : ly[n] || Wr;
    let l, c;
    a !== Wr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && gt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), l = zn(uy, bh(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    o === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), u.calculatedDuration === null && (u.calculatedDuration = Vc(u));
    const { calculatedDuration: f } = u, d = f + i, h = d * (r + 1) - i;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: h
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: f } = r;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: h, repeatType: p, repeatDelay: m, onUpdate: g } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const y = this.currentTime - d * (this.speed >= 0 ? 1 : -1), x = this.speed >= 0 ? y < 0 : y > u;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let k = this.currentTime, S = o;
    if (h) {
      const R = Math.min(this.currentTime, u) / f;
      let I = Math.floor(R), z = R % 1;
      !z && R >= 1 && (z = 1), z === 1 && I--, I = Math.min(I, h + 1), I % 2 && (p === "reverse" ? (z = 1 - z, m && (z -= m / f)) : p === "mirror" && (S = s)), k = ut(0, 1, z) * f;
    }
    const b = x ? { done: !1, value: l[0] } : S.next(k);
    a && (b.value = a(b.value));
    let { done: w } = b;
    !x && c !== null && (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const _ = this.holdTime === null && (this.state === "finished" || this.state === "running" && w);
    return _ && i !== void 0 && (b.value = ii(l, this.options, i)), g && g(b.value), _ && this.finish(), b;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ st(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ st(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ $e(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ st(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = ay, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
function cy(e) {
  return new oi(e);
}
const hy = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function dy(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Hc(a, i);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: i,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const py = /* @__PURE__ */ zo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Gr = 10, fy = 2e4;
function my(e) {
  return ns(e.type) || e.type === "spring" || !Uc(e.ease);
}
function gy(e, t) {
  const n = new oi({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < fy; )
    r = n.sample(o), i.push(r.value), o += Gr;
  return {
    times: void 0,
    keyframes: i,
    duration: o - Gr,
    ease: "linear"
  };
}
const _h = {
  anticipate: th,
  backInOut: eh,
  circInOut: rh
};
function yy(e) {
  return e in _h;
}
class wa extends vh {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    this.resolver = new yh(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: o, type: s, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Hr() && yy(o) && (o = _h[o]), my(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: h, element: p, ...m } = this.options, g = gy(t, m);
      t = g.keyframes, t.length === 1 && (t[1] = t[0]), r = g.duration, i = g.times, o = g.ease, s = "keyframes";
    }
    const u = dy(a.owner.current, l, t, { ...this.options, duration: r, times: i, ease: o });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (sa(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(ii(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: r,
      times: i,
      type: s,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ st(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ st(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ $e(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Ae;
      const { animation: r } = n;
      sa(r, t);
    }
    return Ae;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: f, element: d, ...h } = this.options, p = new oi({
        ...h,
        keyframes: r,
        duration: i,
        type: o,
        ease: s,
        times: a,
        isGenerator: !0
      }), m = /* @__PURE__ */ $e(this.time);
      c.setWithVelocity(p.sample(m - Gr).value, p.sample(m).value, Gr);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return py() && r && hy.has(r) && /**
    * If we're outputting values to onUpdate then we can't use WAAPI as there's
    * no way to read the value from WAAPI every frame.
    */
    !l && !c && !i && o !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const vy = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, xy = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), by = {
  type: "keyframes",
  duration: 0.8
}, Sy = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ky = (e, { keyframes: t }) => t.length > 2 ? by : Tt.has(e) ? e.startsWith("scale") ? xy(t[1]) : vy : Sy;
function wy({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const ms = (e, t, n, r = {}, i, o) => (s) => {
  const a = ts(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ $e(l);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (d) => {
      t.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  wy(a) || (u = {
    ...u,
    ...ky(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ $e(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ $e(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
    const d = ii(u.keyframes, a);
    if (d !== void 0)
      return re.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new Um([]);
  }
  return !o && wa.supports(u) ? new wa(u) : new oi(u);
};
function Ey({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Ch(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const c = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null), h = l[f];
    if (h === void 0 || u && Ey(u, f))
      continue;
    const p = {
      delay: n,
      ...ts(s || {}, f)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const y = Jc(e);
      if (y) {
        const x = window.MotionHandoffAnimation(y, f, re);
        x !== null && (p.startTime = x, m = !0);
      }
    }
    oo(e, f), d.start(ms(f, d, h, e.shouldReduceMotion && Yc.has(f) ? { type: !1 } : p, e, m));
    const g = d.animation;
    g && c.push(g);
  }
  return a && Promise.all(c).then(() => {
    re.update(() => {
      a && ng(e, a);
    });
  }), c;
}
function po(e, t, n = {}) {
  var r;
  const i = ri(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(Ch(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: d } = o;
    return _y(e, t, u + c, f, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else
    return Promise.all([s(), a(n.delay)]);
}
function _y(e, t, n = 0, r = 0, i = 1, o) {
  const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(Cy).forEach((c, u) => {
    c.notify("AnimationStart", t), s.push(po(c, t, {
      ...o,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function Cy(e, t) {
  return e.sortNodePosition(t);
}
function Py(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => po(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = po(e, t, n);
  else {
    const i = typeof t == "function" ? ri(e, t, n.custom) : t;
    r = Promise.all(Ch(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Ay = Ho.length;
function Ph(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Ph(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Ay; n++) {
    const r = Ho[n], i = e.props[r];
    (Tn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Ry = [...Uo].reverse(), Ty = Uo.length;
function Ly(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Py(e, n, r)));
}
function jy(e) {
  let t = Ly(e), n = Ea(), r = !0;
  const i = (l) => (c, u) => {
    var f;
    const d = ri(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: h, transitionEnd: p, ...m } = d;
      c = { ...c, ...m, ...p };
    }
    return c;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e, u = Ph(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let h = {}, p = 1 / 0;
    for (let g = 0; g < Ty; g++) {
      const y = Ry[g], x = n[y], k = c[y] !== void 0 ? c[y] : u[y], S = Tn(k), b = y === l ? x.isActive : null;
      b === !1 && (p = g);
      let w = k === u[y] && k !== c[y] && S;
      if (w && r && e.manuallyAnimateOnMount && (w = !1), x.protectedKeys = { ...h }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !k && !x.prevProp || // Or if the prop doesn't define an animation
      ti(k) || typeof k == "boolean")
        continue;
      const _ = Oy(x.prevProp, k);
      let R = _ || // If we're making this variant active, we want to always make it active
      y === l && x.isActive && !w && S || // If we removed a higher-priority variant (i is in reverse order)
      g > p && S, I = !1;
      const z = Array.isArray(k) ? k : [k];
      let T = z.reduce(i(y), {});
      b === !1 && (T = {});
      const { prevResolvedValues: A = {} } = x, N = {
        ...A,
        ...T
      }, B = (D) => {
        R = !0, d.has(D) && (I = !0, d.delete(D)), x.needsAnimating[D] = !0;
        const H = e.getValue(D);
        H && (H.liveStyle = !1);
      };
      for (const D in N) {
        const H = T[D], X = A[D];
        if (h.hasOwnProperty(D))
          continue;
        let $ = !1;
        no(H) && no(X) ? $ = !Bc(H, X) : $ = H !== X, $ ? H != null ? B(D) : d.add(D) : H !== void 0 && d.has(D) ? B(D) : x.protectedKeys[D] = !0;
      }
      x.prevProp = k, x.prevResolvedValues = T, x.isActive && (h = { ...h, ...T }), r && e.blockInitialAnimation && (R = !1), R && (!(w && _) || I) && f.push(...z.map((D) => ({
        animation: D,
        options: { type: y }
      })));
    }
    if (d.size) {
      const g = {};
      d.forEach((y) => {
        const x = e.getBaseTarget(y), k = e.getValue(y);
        k && (k.liveStyle = !0), g[y] = x ?? null;
      }), f.push({ animation: g });
    }
    let m = !!f.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(f) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((d) => {
      var h;
      return (h = d.animationState) === null || h === void 0 ? void 0 : h.setActive(l, c);
    }), n[l].isActive = c;
    const f = s(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Ea(), r = !0;
    }
  };
}
function Oy(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Bc(t, e) : !1;
}
function St(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ea() {
  return {
    animate: St(!0),
    whileInView: St(),
    whileHover: St(),
    whileTap: St(),
    whileDrag: St(),
    whileFocus: St(),
    exit: St()
  };
}
class xt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class My extends xt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = jy(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ti(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Iy = 0;
class Dy extends xt {
  constructor() {
    super(...arguments), this.id = Iy++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Ny = {
  animation: {
    Feature: My
  },
  exit: {
    Feature: Dy
  }
};
function On(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Un(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Fy = (e) => (t) => is(t) && e(t, Un(t));
function kn(e, t, n, r) {
  return On(e, t, Fy(n), r);
}
const _a = (e, t) => Math.abs(e - t);
function By(e, t) {
  const n = _a(e.x, t.x), r = _a(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ah {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Si(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, h = By(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !h)
        return;
      const { point: p } = f, { timestamp: m } = ge;
      this.history.push({ ...p, timestamp: m });
      const { onStart: g, onMove: y } = this.handlers;
      d || (g && g(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = bi(d, this.transformPagePoint), re.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: h, onSessionEnd: p, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Si(f.type === "pointercancel" ? this.lastMoveEventInfo : bi(d, this.transformPagePoint), this.history);
      this.startEvent && h && h(f, g), p && p(f, g);
    }, !is(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const s = Un(t), a = bi(s, this.transformPagePoint), { point: l } = a, { timestamp: c } = ge;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Si(a, this.history)), this.removeListeners = zn(kn(this.contextWindow, "pointermove", this.handlePointerMove), kn(this.contextWindow, "pointerup", this.handlePointerUp), kn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), lt(this.updatePoint);
  }
}
function bi(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ca(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Si({ point: e }, t) {
  return {
    point: e,
    delta: Ca(e, Rh(t)),
    offset: Ca(e, Vy(t)),
    velocity: zy(t, 0.1)
  };
}
function Vy(e) {
  return e[0];
}
function Rh(e) {
  return e[e.length - 1];
}
function zy(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = Rh(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ $e(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ st(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const Th = 1e-4, Uy = 1 - Th, Hy = 1 + Th, Lh = 0.01, qy = 0 - Lh, Wy = 0 + Lh;
function Be(e) {
  return e.max - e.min;
}
function Gy(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Pa(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = Be(n) / Be(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Uy && e.scale <= Hy || isNaN(e.scale)) && (e.scale = 1), (e.translate >= qy && e.translate <= Wy || isNaN(e.translate)) && (e.translate = 0);
}
function wn(e, t, n, r) {
  Pa(e.x, t.x, n.x, r ? r.originX : void 0), Pa(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Aa(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Be(t);
}
function Yy(e, t, n) {
  Aa(e.x, t.x, n.x), Aa(e.y, t.y, n.y);
}
function Ra(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Be(t);
}
function En(e, t, n) {
  Ra(e.x, t.x, n.x), Ra(e.y, t.y, n.y);
}
function Ky(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e;
}
function Ta(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Jy(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Ta(e.x, n, i),
    y: Ta(e.y, t, r)
  };
}
function La(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Xy(e, t) {
  return {
    x: La(e.x, t.x),
    y: La(e.y, t.y)
  };
}
function Qy(e, t) {
  let n = 0.5;
  const r = Be(e), i = Be(t);
  return i > r ? n = /* @__PURE__ */ Wt(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Wt(e.min, e.max - i, t.min)), ut(0, 1, n);
}
function Zy(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const fo = 0.35;
function $y(e = fo) {
  return e === !1 ? e = 0 : e === !0 && (e = fo), {
    x: ja(e, "left", "right"),
    y: ja(e, "top", "bottom")
  };
}
function ja(e, t, n) {
  return {
    min: Oa(e, t),
    max: Oa(e, n)
  };
}
function Oa(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ma = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), zt = () => ({
  x: Ma(),
  y: Ma()
}), Ia = () => ({ min: 0, max: 0 }), de = () => ({
  x: Ia(),
  y: Ia()
});
function Ue(e) {
  return [e("x"), e("y")];
}
function jh({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function ev({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function tv(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ki(e) {
  return e === void 0 || e === 1;
}
function mo({ scale: e, scaleX: t, scaleY: n }) {
  return !ki(e) || !ki(t) || !ki(n);
}
function kt(e) {
  return mo(e) || Oh(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Oh(e) {
  return Da(e.x) || Da(e.y);
}
function Da(e) {
  return e && e !== "0%";
}
function Yr(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function Na(e, t, n, r, i) {
  return i !== void 0 && (e = Yr(e, i, r)), Yr(e, n, r) + t;
}
function go(e, t = 0, n = 1, r, i) {
  e.min = Na(e.min, t, n, r, i), e.max = Na(e.max, t, n, r, i);
}
function Mh(e, { x: t, y: n }) {
  go(e.x, t.translate, t.scale, t.originPoint), go(e.y, n.translate, n.scale, n.originPoint);
}
const Fa = 0.999999999999, Ba = 1.0000000000001;
function nv(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    o = n[a], s = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Ht(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Mh(e, s)), r && kt(o.latestValues) && Ht(e, o.latestValues));
  }
  t.x < Ba && t.x > Fa && (t.x = 1), t.y < Ba && t.y > Fa && (t.y = 1);
}
function Ut(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Va(e, t, n, r, i = 0.5) {
  const o = le(e.min, e.max, i);
  go(e, t, n, o, r);
}
function Ht(e, t) {
  Va(e.x, t.x, t.scaleX, t.scale, t.originX), Va(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ih(e, t) {
  return jh(tv(e.getBoundingClientRect(), t));
}
function rv(e, t, n) {
  const r = Ih(e, n), { scroll: i } = t;
  return i && (Ut(r.x, i.offset.x), Ut(r.y, i.offset.y)), r;
}
const Dh = ({ current: e }) => e ? e.ownerDocument.defaultView : null, iv = /* @__PURE__ */ new WeakMap();
class ov {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = de(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (u) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Un(u).point);
    }, o = (u, f) => {
      const { drag: d, dragPropagation: h, onDragStart: p } = this.getProps();
      if (d && !h && (this.openDragLock && this.openDragLock(), this.openDragLock = Qm(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ue((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (et.test(y)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const k = x.layout.layoutBox[g];
            k && (y = Be(k) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), p && re.postRender(() => p(u, f)), oo(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, s = (u, f) => {
      const { dragPropagation: d, dragDirectionLock: h, onDirectionLock: p, onDrag: m } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: g } = f;
      if (h && this.currentDirection === null) {
        this.currentDirection = sv(g), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, g), this.updateAxis("y", f.point, g), this.visualElement.render(), m && m(u, f);
    }, a = (u, f) => this.stop(u, f), l = () => Ue((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Ah(t, {
      onSessionStart: i,
      onStart: o,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Dh(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && re.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !nr(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Ky(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && Bt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Jy(i.layoutBox, n) : this.constraints = !1, this.elastic = $y(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Ue((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Zy(i.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Bt(t))
      return !1;
    const r = t.current;
    gt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = rv(r, i.root, this.visualElement.getTransformPagePoint());
    let s = Xy(i.layout.layoutBox, o);
    if (n) {
      const a = n(ev(s));
      this.hasMutatedConstraints = !!a, a && (s = jh(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Ue((u) => {
      if (!nr(u, n, this.currentDirection))
        return;
      let f = l && l[u] || {};
      s && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, h = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: d,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(u, p);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return oo(this.visualElement, t), r.start(ms(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Ue((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ue((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps();
    return r[n] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Ue((n) => {
      const { drag: r } = this.getProps();
      if (!nr(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - le(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Bt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ue((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = Qy({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Ue((s) => {
      if (!nr(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(le(l, c, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    iv.set(this.visualElement, this);
    const t = this.visualElement.current, n = kn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Bt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), re.read(r);
    const s = On(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Ue((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = fo, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function nr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function sv(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class av extends xt {
  constructor(t) {
    super(t), this.removeGroupControls = Ae, this.removeListeners = Ae, this.controls = new ov(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ae;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const za = (e) => (t, n) => {
  e && re.postRender(() => e(t, n));
};
class lv extends xt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ae;
  }
  onPointerDown(t) {
    this.session = new Ah(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Dh(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: za(t),
      onStart: za(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && re.postRender(() => i(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = kn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Or = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ua(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ln = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (W.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Ua(e, t.target.x), r = Ua(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, uv = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = yt.parse(e);
    if (i.length > 5)
      return r;
    const o = yt.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + s] /= a, i[1 + s] /= l;
    const c = le(a, l, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= c), typeof i[3 + s] == "number" && (i[3 + s] /= c), o(i);
  }
};
class cv extends Lp {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
    Tm(hv), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Or.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
    return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || re.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Wo.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Nh(e) {
  const [t, n] = bc(), r = me(Bo);
  return v.jsx(cv, { ...e, layoutGroup: r, switchLayoutGroup: me(Cc), isPresent: t, safeToRemove: n });
}
const hv = {
  borderRadius: {
    ...ln,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ln,
  borderTopRightRadius: ln,
  borderBottomLeftRadius: ln,
  borderBottomRightRadius: ln,
  boxShadow: uv
};
function dv(e, t, n) {
  const r = ye(e) ? e : Yt(e);
  return r.start(ms("", r, t, n)), r.animation;
}
function pv(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const fv = (e, t) => e.depth - t.depth;
class mv {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    os(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ss(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(fv), this.isDirty = !1, this.children.forEach(t);
  }
}
function gv(e, t) {
  const n = tt.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (lt(r), e(o - t));
  };
  return re.read(r, !0), () => lt(r);
}
const Fh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], yv = Fh.length, Ha = (e) => typeof e == "string" ? parseFloat(e) : e, qa = (e) => typeof e == "number" || W.test(e);
function vv(e, t, n, r, i, o) {
  i ? (e.opacity = le(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    xv(r)
  ), e.opacityExit = le(t.opacity !== void 0 ? t.opacity : 1, 0, bv(r))) : o && (e.opacity = le(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < yv; s++) {
    const a = `border${Fh[s]}Radius`;
    let l = Wa(t, a), c = Wa(n, a);
    l === void 0 && c === void 0 || (l || (l = 0), c || (c = 0), l === 0 || c === 0 || qa(l) === qa(c) ? (e[a] = Math.max(le(Ha(l), Ha(c), r), 0), (et.test(c) || et.test(l)) && (e[a] += "%")) : e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function Wa(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const xv = /* @__PURE__ */ Bh(0, 0.5, nh), bv = /* @__PURE__ */ Bh(0.5, 0.95, Ae);
function Bh(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Wt(e, t, r));
}
function Ga(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ve(e, t) {
  Ga(e.x, t.x), Ga(e.y, t.y);
}
function Ya(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Ka(e, t, n, r, i) {
  return e -= t, e = Yr(e, 1 / n, r), i !== void 0 && (e = Yr(e, 1 / i, r)), e;
}
function Sv(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (et.test(t) && (t = parseFloat(t), t = le(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = le(o.min, o.max, r);
  e === o && (a -= t), e.min = Ka(e.min, t, n, a, i), e.max = Ka(e.max, t, n, a, i);
}
function Ja(e, t, [n, r, i], o, s) {
  Sv(e, t[n], t[r], t[i], t.scale, o, s);
}
const kv = ["x", "scaleX", "originX"], wv = ["y", "scaleY", "originY"];
function Xa(e, t, n, r) {
  Ja(e.x, t, kv, n ? n.x : void 0, r ? r.x : void 0), Ja(e.y, t, wv, n ? n.y : void 0, r ? r.y : void 0);
}
function Qa(e) {
  return e.translate === 0 && e.scale === 1;
}
function Vh(e) {
  return Qa(e.x) && Qa(e.y);
}
function Za(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Ev(e, t) {
  return Za(e.x, t.x) && Za(e.y, t.y);
}
function $a(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function zh(e, t) {
  return $a(e.x, t.x) && $a(e.y, t.y);
}
function el(e) {
  return Be(e.x) / Be(e.y);
}
function tl(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class _v {
  constructor() {
    this.members = [];
  }
  add(t) {
    os(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ss(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Cv(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, s = n?.z || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: h, skewY: p } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), h && (r += `skewX(${h}deg) `), p && (r += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const wt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, xn = typeof window < "u" && window.MotionDebug !== void 0, wi = ["", "X", "Y", "Z"], Pv = { visibility: "hidden" }, nl = 1e3;
let Av = 0;
function Ei(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Uh(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Jc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", re, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Uh(r);
}
function Hh({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, s = t?.()) {
      this.id = Av++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, xn && (wt.totalNodes = wt.resolvedTargetDeltas = wt.recalculatedProjection = 0), this.nodes.forEach(Lv), this.nodes.forEach(Dv), this.nodes.forEach(Nv), this.nodes.forEach(jv), xn && window.MotionDebug.record(wt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new mv());
    }
    addEventListener(o, s) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new as()), this.eventHandlers.get(o).add(s);
    }
    notifyListeners(o, ...s) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...s);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = pv(o), this.instance = o;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (l || a) && (this.isLayoutDirty = !0), e) {
        let u;
        const f = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = gv(f, 250), Or.hasAnimatedSinceResize && (Or.hasAnimatedSinceResize = !1, this.nodes.forEach(il));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || Uv, { onLayoutAnimationStart: m, onLayoutAnimationComplete: g } = c.getProps(), y = !this.targetLayout || !zh(this.targetLayout, h) || d, x = !f && d;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || x || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, x);
          const k = {
            ...ts(p, "layout"),
            onPlay: m,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || il(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, lt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Fv), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Uh(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: s, layout: a } = this.options;
      if (s === void 0 && !a)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rl);
        return;
      }
      this.isUpdating || this.nodes.forEach(Mv), this.isUpdating = !1, this.nodes.forEach(Iv), this.nodes.forEach(Rv), this.nodes.forEach(Tv), this.clearAllSnapshots();
      const o = tt.now();
      ge.delta = ut(0, 1e3 / 60, o - ge.timestamp), ge.timestamp = o, ge.isProcessing = !0, fi.update.process(ge), fi.preRender.process(ge), fi.render.process(ge), ge.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Wo.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ov), this.sharedNodes.forEach(Bv);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, re.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      re.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = de(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (s = !1), s) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, s = this.projectionDelta && !Vh(this.projectionDelta), a = this.getTransformTemplate(), l = a ? a(this.latestValues, "") : void 0, c = l !== this.prevTransformTemplateValue;
      o && (s || kt(this.latestValues) || c) && (i(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const s = this.measurePageBox();
      let a = this.removeElementScroll(s);
      return o && (a = this.removeTransform(a)), Hv(a), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: a,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var o;
      const { visualElement: s } = this.options;
      if (!s)
        return de();
      const a = s.measureViewportBox();
      if (!(!((o = this.scroll) === null || o === void 0) && o.wasRoot || this.path.some(qv))) {
        const { scroll: l } = this.root;
        l && (Ut(a.x, l.offset.x), Ut(a.y, l.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var s;
      const a = de();
      if (Ve(a, o), !((s = this.scroll) === null || s === void 0) && s.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: f } = c;
        c !== this.root && u && f.layoutScroll && (u.wasRoot && Ve(a, o), Ut(a.x, u.offset.x), Ut(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(o, s = !1) {
      const a = de();
      Ve(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Ht(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), kt(c.latestValues) && Ht(a, c.latestValues);
      }
      return kt(this.latestValues) && Ht(a, this.latestValues), a;
    }
    removeTransform(o) {
      const s = de();
      Ve(s, o);
      for (let a = 0; a < this.path.length; a++) {
        const l = this.path[a];
        if (!l.instance || !kt(l.latestValues))
          continue;
        mo(l.latestValues) && l.updateSnapshot();
        const c = de(), u = l.measurePageBox();
        Ve(c, u), Xa(s, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, c);
      }
      return kt(this.latestValues) && Xa(s, this.latestValues), s;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var s;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: u } = this.options;
      if (!(!this.layout || !(c || u))) {
        if (this.resolvedRelativeTargetAt = ge.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), En(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = de(), this.targetWithTransforms = de()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Yy(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), Mh(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const f = this.getClosestProjectingParent();
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), En(this.relativeTargetOrigin, this.target, f.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          xn && wt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || mo(this.parent.latestValues) || Oh(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const s = this.getLead(), a = !!this.resumingFrom || this !== s;
      let l = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ge.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      nv(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = de());
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ya(this.prevProjectionDelta.x, this.projectionDelta.x), Ya(this.prevProjectionDelta.y, this.projectionDelta.y)), wn(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !tl(this.projectionDelta.x, this.prevProjectionDelta.x) || !tl(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h)), xn && wt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var s;
      if ((s = this.options.visualElement) === null || s === void 0 || s.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = zt(), this.projectionDelta = zt(), this.projectionDeltaWithTransform = zt();
    }
    setAnimationOrigin(o, s = !1) {
      const a = this.snapshot, l = a ? a.latestValues : {}, c = { ...this.latestValues }, u = zt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = de(), d = a ? a.source : void 0, h = this.layout ? this.layout.source : void 0, p = d !== h, m = this.getStack(), g = !m || m.members.length <= 1, y = !!(p && !g && this.options.crossfade === !0 && !this.path.some(zv));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (k) => {
        const S = k / 1e3;
        ol(u.x, o.x, S), ol(u.y, o.y, S), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (En(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Vv(this.relativeTarget, this.relativeTargetOrigin, f, S), x && Ev(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = de()), Ve(x, this.relativeTarget)), p && (this.animationValues = c, vv(c, l, this.latestValues, S, y, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (lt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = re.update(() => {
        Or.hasAnimatedSinceResize = !0, this.currentAnimation = dv(0, nl, {
          ...o,
          onUpdate: (s) => {
            this.mixTargetDelta(s), o.onUpdate && o.onUpdate(s);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(nl), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: s, target: a, layout: l, latestValues: c } = o;
      if (!(!s || !a || !l)) {
        if (this !== o && this.layout && l && qh(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          a = this.target || de();
          const u = Be(this.layout.layoutBox.x);
          a.x.min = o.target.x.min, a.x.max = a.x.min + u;
          const f = Be(this.layout.layoutBox.y);
          a.y.min = o.target.y.min, a.y.max = a.y.min + f;
        }
        Ve(s, a), Ht(s, c), wn(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(o, s) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new _v()), this.sharedNodes.get(o).add(s);
      const a = s.options.initialPromotionConfig;
      s.promote({
        transition: a ? a.transition : void 0,
        preserveFollowOpacity: a && a.shouldPreserveFollowOpacity ? a.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: s } = this.options;
      return s ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: s } = this.options;
      return s ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: s, preserveFollowOpacity: a } = {}) {
      const l = this.getStack();
      l && l.promote(this, a), o && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let s = !1;
      const { latestValues: a } = o;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (s = !0), !s)
        return;
      const l = {};
      a.z && Ei("z", o, l, this.animationValues);
      for (let c = 0; c < wi.length; c++)
        Ei(`rotate${wi[c]}`, o, l, this.animationValues), Ei(`skew${wi[c]}`, o, l, this.animationValues);
      o.render();
      for (const c in l)
        o.setStaticValue(c, l[c]), this.animationValues && (this.animationValues[c] = l[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var s, a;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Pv;
      const l = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, l.opacity = "", l.pointerEvents = Lr(o?.pointerEvents) || "", l.transform = c ? c(this.latestValues, "") : "none", l;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Lr(o?.pointerEvents) || ""), this.hasProjected && !kt(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const f = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), l.transform = Cv(this.projectionDeltaWithTransform, this.treeScale, f), c && (l.transform = c(f, l.transform));
      const { x: d, y: h } = this.projectionDelta;
      l.transformOrigin = `${d.origin * 100}% ${h.origin * 100}% 0`, u.animationValues ? l.opacity = u === this ? (a = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : l.opacity = u === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const p in Ur) {
        if (f[p] === void 0)
          continue;
        const { correct: m, applyTo: g } = Ur[p], y = l.transform === "none" ? f[p] : m(f[p], u);
        if (g) {
          const x = g.length;
          for (let k = 0; k < x; k++)
            l[g[k]] = y;
        } else
          l[p] = y;
      }
      return this.options.layoutId && (l.pointerEvents = u === this ? Lr(o?.pointerEvents) || "" : "none"), l;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var s;
        return (s = o.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(rl), this.root.sharedNodes.clear();
    }
  };
}
function Rv(e) {
  e.updateLayout();
}
function Tv(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
    o === "size" ? Ue((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], h = Be(d);
      d.min = r[f].min, d.max = d.min + h;
    }) : qh(o, n.layoutBox, r) && Ue((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], h = Be(r[f]);
      d.max = d.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + h);
    });
    const a = zt();
    wn(a, r, n.layoutBox);
    const l = zt();
    s ? wn(l, e.applyTransform(i, !0), n.measuredBox) : wn(l, r, n.layoutBox);
    const c = !Vh(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: h } = f;
        if (d && h) {
          const p = de();
          En(p, n.layoutBox, d.layoutBox);
          const m = de();
          En(m, r, h.layoutBox), zh(p, m) || (u = !0), f.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = p, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Lv(e) {
  xn && wt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function jv(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ov(e) {
  e.clearSnapshot();
}
function rl(e) {
  e.clearMeasurements();
}
function Mv(e) {
  e.isLayoutDirty = !1;
}
function Iv(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function il(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Dv(e) {
  e.resolveTargetDelta();
}
function Nv(e) {
  e.calcProjection();
}
function Fv(e) {
  e.resetSkewAndRotation();
}
function Bv(e) {
  e.removeLeadSnapshot();
}
function ol(e, t, n) {
  e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function sl(e, t, n, r) {
  e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r);
}
function Vv(e, t, n, r) {
  sl(e.x, t.x, n.x, r), sl(e.y, t.y, n.y, r);
}
function zv(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Uv = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, al = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), ll = al("applewebkit/") && !al("chrome/") ? Math.round : Ae;
function ul(e) {
  e.min = ll(e.min), e.max = ll(e.max);
}
function Hv(e) {
  ul(e.x), ul(e.y);
}
function qh(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Gy(el(t), el(n), 0.2);
}
function qv(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Wv = Hh({
  attachResizeListener: (e, t) => On(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), _i = {
  current: void 0
}, Wh = Hh({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!_i.current) {
      const e = new Wv({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), _i.current = e;
    }
    return _i.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Gv = {
  pan: {
    Feature: lv
  },
  drag: {
    Feature: av,
    ProjectionNode: Wh,
    MeasureLayout: Nh
  }
};
function cl(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = r[i];
  o && re.postRender(() => o(t, Un(t)));
}
class Yv extends xt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Gm(t, (n) => (cl(this.node, n, "Start"), (r) => cl(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Kv extends xt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = zn(On(this.node.current, "focus", () => this.onFocus()), On(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function hl(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = r[i];
  o && re.postRender(() => o(t, Un(t)));
}
class Jv extends xt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Xm(t, (n) => (hl(this.node, n, "Start"), (r, { success: i }) => hl(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const yo = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Xv = (e) => {
  const t = yo.get(e.target);
  t && t(e);
}, Qv = (e) => {
  e.forEach(Xv);
};
function Zv({ root: e, ...t }) {
  const n = e || document;
  Ci.has(n) || Ci.set(n, {});
  const r = Ci.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Qv, { root: e, ...t })), r[i];
}
function $v(e, t, n) {
  const r = Zv(t);
  return yo.set(e, n), r.observe(e), () => {
    yo.delete(e), r.unobserve(e);
  };
}
const ex = {
  some: 0,
  all: 1
};
class tx extends xt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : ex[i]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), d = c ? u : f;
      d && d(l);
    };
    return $v(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(nx(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function nx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const rx = {
  inView: {
    Feature: tx
  },
  tap: {
    Feature: Jv
  },
  focus: {
    Feature: Kv
  },
  hover: {
    Feature: Yv
  }
}, ix = {
  layout: {
    ProjectionNode: Wh,
    MeasureLayout: Nh
  }
}, vo = { current: null }, Gh = { current: !1 };
function ox() {
  if (Gh.current = !0, !!Vo)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => vo.current = e.matches;
      e.addListener(t), t();
    } else
      vo.current = !1;
}
const sx = [...gh, xe, yt], ax = (e) => sx.find(mh(e)), dl = /* @__PURE__ */ new WeakMap();
function lx(e, t, n) {
  for (const r in t) {
    const i = t[r], o = n[r];
    if (ye(i))
      e.addValue(r, i), process.env.NODE_ENV === "development" && $r(i.version === "11.18.2", `Attempting to mix Motion versions ${i.version} with 11.18.2 may not work as expected.`);
    else if (ye(o))
      e.addValue(r, Yt(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Yt(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const pl = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ux {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ps, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = tt.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, re.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = s;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ni(n), this.isVariantNode = Ec(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in d) {
      const p = d[h];
      l[h] !== void 0 && ye(p) && p.set(l[h], !1);
    }
  }
  mount(t) {
    this.current = t, dl.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Gh.current || ox(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vo.current, process.env.NODE_ENV !== "production" && $r(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    dl.delete(this.current), this.projection && this.projection.unmount(), lt(this.notifyUpdate), lt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Tt.has(t), i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && re.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), o(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Gt) {
      const n = Gt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : de();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < pl.length; r++) {
      const i = pl[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = lx(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Yt(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (ph(i) || ih(i)) ? i = parseFloat(i) : !ax(i) && yt.test(n) && (i = ch(t, n)), this.setBaseTarget(t, ye(i) ? i.get() : i)), ye(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = Yo(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (i = s[t]);
    }
    if (r && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ye(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new as()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Yh extends ux {
  constructor() {
    super(...arguments), this.KeyframeResolver = yh;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ye(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function cx(e) {
  return window.getComputedStyle(e);
}
class hx extends Yh {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Oc;
  }
  readValueFromInstance(t, n) {
    if (Tt.has(n)) {
      const r = ds(n);
      return r && r.default || 0;
    } else {
      const r = cx(t), i = (Tc(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Ih(t, n);
  }
  build(t, n, r) {
    Xo(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return es(t, n, r);
  }
}
class dx extends Yh {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = de;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Tt.has(n)) {
      const r = ds(n);
      return r && r.default || 0;
    }
    return n = Mc.has(n) ? n : qo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Nc(t, n, r);
  }
  build(t, n, r) {
    Qo(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Ic(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = $o(t.tagName), super.mount(t);
  }
}
const px = (e, t) => Go(e) ? new dx(t) : new hx(t, {
  allowProjection: e !== dc
}), fx = /* @__PURE__ */ Bm({
  ...Ny,
  ...rx,
  ...Gv,
  ...ix
}, px), ue = /* @__PURE__ */ em(fx);
function Kh(e) {
  const t = Nn(() => Yt(e)), { isStatic: n } = me(Fn);
  if (n) {
    const [, r] = ve(e);
    at(() => t.on("change", r), []);
  }
  return t;
}
function Jh(e, t) {
  const n = Kh(t()), r = () => n.set(t());
  return r(), Zr(() => {
    const i = () => re.preRender(r, !1, !0), o = e.map((s) => s.on("change", i));
    return () => {
      o.forEach((s) => s()), lt(r);
    };
  }), n;
}
function fl(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function ml(e, t = {}) {
  const { isStatic: n } = me(Fn), r = Fe(null), i = Kh(ye(e) ? fl(e.get()) : e), o = Fe(i.get()), s = Fe(() => {
  }), a = () => {
    const c = r.current;
    c && c.time === 0 && c.sample(ge.delta), l(), r.current = cy({
      keyframes: [i.get(), o.current],
      velocity: i.getVelocity(),
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...t,
      onUpdate: s.current
    });
  }, l = () => {
    r.current && r.current.stop();
  };
  return Io(() => i.attach((c, u) => n ? u(c) : (o.current = c, s.current = u, re.update(a), i.get()), l), [JSON.stringify(t)]), Zr(() => {
    if (ye(e))
      return e.on("change", (c) => i.set(fl(c)));
  }, [i]), i;
}
const mx = (e) => e && typeof e == "object" && e.mix, gx = (e) => mx(e) ? e.mix : void 0;
function yx(...e) {
  const t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], o = e[2 + n], s = e[3 + n], a = Eh(i, o, {
    mixer: gx(o[0]),
    ...s
  });
  return t ? a(r) : a;
}
function vx(e) {
  bn.current = [], e();
  const t = Jh(bn.current, e);
  return bn.current = void 0, t;
}
function gl(e, t, n, r) {
  if (typeof e == "function")
    return vx(e);
  const i = typeof t == "function" ? t : yx(t, n, r);
  return Array.isArray(e) ? yl(e, i) : yl([e], ([o]) => i(o));
}
function yl(e, t) {
  const n = Nn(() => []);
  return Jh(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++)
      n[i] = e[i].get();
    return t(n);
  });
}
const hE = ({ char: e, title: t, subtitle: n, mouseX: r, mouseY: i, index: o, zIndex: s, t: a }) => {
  const l = pe(), c = o % 2 === 0 ? 0.02 : 0.05, u = gl(r, (p) => p * c), f = gl(i, (p) => p * c), d = ml(u, { stiffness: 150, damping: 15 }), h = ml(f, { stiffness: 150, damping: 15 });
  return /* @__PURE__ */ v.jsxs(
    ue.div,
    {
      style: {
        zIndex: s,
        // Applied dynamic z-index
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        x: d,
        y: h
      },
      "data-testid": "animated-hero-character",
      initial: "idle",
      whileHover: "hover",
      children: [
        /* @__PURE__ */ v.jsx(
          j,
          {
            component: ue.h1,
            animate: {
              y: [0, -15, 0],
              opacity: [1, 0.8, 1]
            },
            transition: {
              y: {
                duration: 3,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: o * 0.2
              },
              opacity: {
                duration: 3,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: o * 0.2
              },
              default: { duration: 0.2 }
              // snappy hover
            },
            variants: {
              idle: { scale: 1, opacity: 1 },
              hover: { scale: 1.05, opacity: 0.9 }
            },
            sx: {
              ...l.typography.h1,
              fontSize: { xs: "4rem", sm: "6rem", md: "10rem" },
              // Responsive font size
              margin: 0,
              color: l.palette.text.primary,
              textShadow: l.palette.mode === "dark" ? "0px 0px 30px rgba(255,255,255,0.2)" : "none"
            },
            children: e
          }
        ),
        /* @__PURE__ */ v.jsx(
          ue.div,
          {
            variants: {
              idle: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 }
            },
            transition: { duration: 0.2 },
            style: {
              position: "absolute",
              top: "-3rem",
              width: "100%",
              textAlign: "center",
              pointerEvents: "none",
              display: "flex",
              justifyContent: "center"
            },
            children: t && /* @__PURE__ */ v.jsx(F, { variant: "h4", sx: {
              letterSpacing: "0.1em",
              color: "text.secondary",
              textTransform: "uppercase",
              whiteSpace: "nowrap"
            }, children: a(t) })
          }
        ),
        /* @__PURE__ */ v.jsx(
          ue.div,
          {
            variants: {
              idle: { opacity: 0, y: -10 },
              hover: { opacity: 1, y: 0 }
            },
            transition: { duration: 0.2 },
            style: {
              position: "absolute",
              bottom: "-4.5rem",
              width: "300px",
              // Allow wrapping for meaning
              left: "50%",
              marginLeft: "-150px",
              // center horizontally
              textAlign: "center",
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px"
            },
            children: n && /* @__PURE__ */ v.jsx(F, { variant: "h2", sx: {
              letterSpacing: "0.2em",
              color: "primary.main",
              textTransform: "uppercase",
              whiteSpace: "nowrap"
            }, children: a(n) })
          }
        )
      ]
    }
  );
}, xx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xh = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
var bx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Sx = Mo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
  }, l) => Br(
    "svg",
    {
      ref: l,
      ...bx,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Xh("lucide", i),
      ...a
    },
    [
      ...s.map(([c, u]) => Br(c, u)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
), $t = (e, t) => {
  const n = Mo(
    ({ className: r, ...i }, o) => Br(Sx, {
      ref: o,
      iconNode: t,
      className: Xh(`lucide-${xx(e)}`, r),
      ...i
    })
  );
  return n.displayName = `${e}`, n;
}, kx = $t("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), wx = $t("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]), gs = $t("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]), Ex = $t("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]), _x = $t("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]), Cx = $t("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]), dE = ({
  title: e,
  category: t,
  duration: n,
  coverUrl: r,
  audioUrl: i,
  isPlaying: o,
  onTogglePlay: s
}) => {
  const a = pe(), l = Fe(null);
  return at(() => {
    l.current && (o ? l.current.play() : l.current.pause());
  }, [o]), at(() => {
    l.current && (l.current.pause(), l.current.load());
  }, [i]), /* @__PURE__ */ v.jsxs(
    j,
    {
      component: ue.div,
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      sx: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: Mp(a.palette.background.paper, 0.95),
        backdropFilter: "blur(20px)",
        borderTop: `1px solid ${a.palette.divider}`,
        p: L.md,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: a.shadows[4]
      },
      children: [
        /* @__PURE__ */ v.jsx("audio", { ref: l, src: i }),
        /* @__PURE__ */ v.jsxs(
          j,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: L.xl,
              maxWidth: "1200px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ v.jsxs(
                j,
                {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: L.md,
                    minWidth: "200px"
                  },
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "img",
                      {
                        src: r,
                        alt: e,
                        style: {
                          width: 48,
                          height: 48,
                          borderRadius: 4,
                          objectFit: "cover"
                        }
                      }
                    ),
                    /* @__PURE__ */ v.jsxs(j, { children: [
                      /* @__PURE__ */ v.jsx(
                        F,
                        {
                          variant: "subtitle1",
                          sx: {
                            color: a.palette.text.primary
                          },
                          children: e
                        }
                      ),
                      /* @__PURE__ */ v.jsxs(
                        F,
                        {
                          variant: "caption",
                          sx: { color: a.palette.text.secondary },
                          children: [
                            t,
                            " • ",
                            n
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ v.jsxs(
                j,
                {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: L.md,
                    flex: 1,
                    justifyItems: "center",
                    justifyContent: "center"
                  },
                  children: [
                    /* @__PURE__ */ v.jsx(ft, { size: "small", sx: { color: a.palette.text.secondary }, children: /* @__PURE__ */ v.jsx(Ex, { size: 20 }) }),
                    /* @__PURE__ */ v.jsx(
                      ft,
                      {
                        onClick: s,
                        sx: {
                          bgcolor: a.palette.primary.main,
                          color: a.palette.primary.contrastText,
                          "&:hover": { bgcolor: a.palette.primary.light },
                          width: L.xxl,
                          height: L.xxl
                        },
                        children: o ? /* @__PURE__ */ v.jsx(wx, { size: 24, fill: "currentColor" }) : /* @__PURE__ */ v.jsx(gs, { size: 24, fill: "currentColor" })
                      }
                    ),
                    /* @__PURE__ */ v.jsx(ft, { size: "small", sx: { color: a.palette.text.secondary }, children: /* @__PURE__ */ v.jsx(_x, { size: 20 }) })
                  ]
                }
              ),
              /* @__PURE__ */ v.jsxs(
                j,
                {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: L.md,
                    minWidth: "150px"
                  },
                  children: [
                    /* @__PURE__ */ v.jsx(Cx, { size: 20, color: a.palette.text.secondary }),
                    /* @__PURE__ */ v.jsx(
                      Op,
                      {
                        size: "small",
                        defaultValue: 70,
                        sx: { color: "action.disabled", width: 100 }
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Px = cc(({
  label: e,
  description: t,
  selected: n = !1,
  onChangeLabel: r,
  onChangeDescription: i,
  children: o
}) => {
  const s = pe();
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    o,
    /* @__PURE__ */ v.jsxs(
      j,
      {
        sx: {
          width: "100%",
          height: "100%",
          backgroundColor: s.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
          border: n ? `2px dashed ${s.palette.text.secondary}` : `1px dashed ${s.palette.divider}`,
          borderRadius: 2,
          padding: 2,
          position: "relative"
        },
        children: [
          /* @__PURE__ */ v.jsx(
            j,
            {
              sx: {
                position: "absolute",
                top: -30,
                left: 0,
                padding: "4px 12px",
                borderRadius: 4,
                backgroundColor: s.palette.mode === "dark" ? s.palette.grey[800] : s.palette.grey[200],
                border: `1px solid ${s.palette.divider}`
              },
              children: /* @__PURE__ */ v.jsx(
                "input",
                {
                  defaultValue: e || "Group",
                  onChange: (a) => r?.(a.target.value),
                  style: {
                    border: "none",
                    background: "transparent",
                    fontWeight: "bold",
                    fontSize: "14px",
                    outline: "none",
                    width: "100%",
                    color: "inherit"
                  },
                  className: "nodrag"
                }
              )
            }
          ),
          /* @__PURE__ */ v.jsx(j, { sx: { mt: 4, height: "calc(100% - 32px)", overflow: "hidden" }, children: /* @__PURE__ */ v.jsx(
            "textarea",
            {
              placeholder: "Description...",
              defaultValue: t || "",
              onChange: (a) => i?.(a.target.value),
              style: {
                width: "100%",
                height: "100%",
                border: "none",
                background: "transparent",
                fontSize: "12px",
                color: "inherit",
                resize: "none",
                outline: "none",
                fontFamily: "inherit",
                opacity: 0.7
              },
              className: "nodrag"
            }
          ) })
        ]
      }
    )
  ] });
});
Px.displayName = "CanvasGroup";
function pE(e) {
  const t = [], n = String(e || "");
  let r = n.indexOf(","), i = 0, o = !1;
  for (; !o; ) {
    r === -1 && (r = n.length, o = !0);
    const s = n.slice(i, r).trim();
    (s || !o) && t.push(s), i = r + 1, r = n.indexOf(",", i);
  }
  return t;
}
function Ax(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Rx = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Tx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Lx = {};
function vl(e, t) {
  return (Lx.jsx ? Tx : Rx).test(e);
}
const jx = /[ \t\n\f\r]/g;
function Ox(e) {
  return typeof e == "object" ? e.type === "text" ? xl(e.value) : !1 : xl(e);
}
function xl(e) {
  return e.replace(jx, "") === "";
}
class Hn {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
Hn.prototype.normal = {};
Hn.prototype.property = {};
Hn.prototype.space = void 0;
function Qh(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new Hn(n, r, t);
}
function xo(e) {
  return e.toLowerCase();
}
class je {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
je.prototype.attribute = "";
je.prototype.booleanish = !1;
je.prototype.boolean = !1;
je.prototype.commaOrSpaceSeparated = !1;
je.prototype.commaSeparated = !1;
je.prototype.defined = !1;
je.prototype.mustUseProperty = !1;
je.prototype.number = !1;
je.prototype.overloadedBoolean = !1;
je.prototype.property = "";
je.prototype.spaceSeparated = !1;
je.prototype.space = void 0;
let Mx = 0;
const J = Lt(), fe = Lt(), bo = Lt(), V = Lt(), ne = Lt(), Pt = Lt(), De = Lt();
function Lt() {
  return 2 ** ++Mx;
}
const So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: J,
  booleanish: fe,
  commaOrSpaceSeparated: De,
  commaSeparated: Pt,
  number: V,
  overloadedBoolean: bo,
  spaceSeparated: ne
}, Symbol.toStringTag, { value: "Module" })), Pi = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(So)
);
class ys extends je {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), bl(this, "space", i), typeof r == "number")
      for (; ++o < Pi.length; ) {
        const s = Pi[o];
        bl(this, Pi[o], (r & So[s]) === So[s]);
      }
  }
}
ys.prototype.defined = !0;
function bl(e, t, n) {
  n && (e[t] = n);
}
function en(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new ys(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[xo(r)] = r, n[xo(o.attribute)] = r;
  }
  return new Hn(t, n, e.space);
}
const Zh = en({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: fe,
    ariaAutoComplete: null,
    ariaBusy: fe,
    ariaChecked: fe,
    ariaColCount: V,
    ariaColIndex: V,
    ariaColSpan: V,
    ariaControls: ne,
    ariaCurrent: null,
    ariaDescribedBy: ne,
    ariaDetails: null,
    ariaDisabled: fe,
    ariaDropEffect: ne,
    ariaErrorMessage: null,
    ariaExpanded: fe,
    ariaFlowTo: ne,
    ariaGrabbed: fe,
    ariaHasPopup: null,
    ariaHidden: fe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ne,
    ariaLevel: V,
    ariaLive: null,
    ariaModal: fe,
    ariaMultiLine: fe,
    ariaMultiSelectable: fe,
    ariaOrientation: null,
    ariaOwns: ne,
    ariaPlaceholder: null,
    ariaPosInSet: V,
    ariaPressed: fe,
    ariaReadOnly: fe,
    ariaRelevant: null,
    ariaRequired: fe,
    ariaRoleDescription: ne,
    ariaRowCount: V,
    ariaRowIndex: V,
    ariaRowSpan: V,
    ariaSelected: fe,
    ariaSetSize: V,
    ariaSort: null,
    ariaValueMax: V,
    ariaValueMin: V,
    ariaValueNow: V,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function $h(e, t) {
  return t in e ? e[t] : t;
}
function ed(e, t) {
  return $h(e, t.toLowerCase());
}
const Ix = en({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Pt,
    acceptCharset: ne,
    accessKey: ne,
    action: null,
    allow: null,
    allowFullScreen: J,
    allowPaymentRequest: J,
    allowUserMedia: J,
    alpha: J,
    alt: null,
    as: null,
    async: J,
    autoCapitalize: null,
    autoComplete: ne,
    autoFocus: J,
    autoPlay: J,
    blocking: ne,
    capture: null,
    charSet: null,
    checked: J,
    cite: null,
    className: ne,
    closedBy: null,
    colorSpace: null,
    cols: V,
    colSpan: V,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: fe,
    controls: J,
    controlsList: ne,
    coords: V | Pt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: J,
    defer: J,
    dir: null,
    dirName: null,
    disabled: J,
    download: bo,
    draggable: fe,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: J,
    formTarget: null,
    headers: ne,
    height: V,
    hidden: bo,
    high: V,
    href: null,
    hrefLang: null,
    htmlFor: ne,
    httpEquiv: ne,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: J,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: J,
    itemId: null,
    itemProp: ne,
    itemRef: ne,
    itemScope: J,
    itemType: ne,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: J,
    low: V,
    manifest: null,
    max: null,
    maxLength: V,
    media: null,
    method: null,
    min: null,
    minLength: V,
    multiple: J,
    muted: J,
    name: null,
    nonce: null,
    noModule: J,
    noValidate: J,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: J,
    optimum: V,
    pattern: null,
    ping: ne,
    placeholder: null,
    playsInline: J,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: J,
    referrerPolicy: null,
    rel: ne,
    required: J,
    reversed: J,
    rows: V,
    rowSpan: V,
    sandbox: ne,
    scope: null,
    scoped: J,
    seamless: J,
    selected: J,
    shadowRootClonable: J,
    shadowRootCustomElementRegistry: J,
    shadowRootDelegatesFocus: J,
    shadowRootMode: null,
    shadowRootSerializable: J,
    shape: null,
    size: V,
    sizes: null,
    slot: null,
    span: V,
    spellCheck: fe,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: V,
    step: null,
    style: null,
    tabIndex: V,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: J,
    useMap: null,
    value: fe,
    width: V,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ne,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: V,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: V,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: J,
    // Lists. Use CSS to reduce space between items instead
    declare: J,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: V,
    // `<img>` and `<object>`
    leftMargin: V,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: V,
    // `<body>`
    marginWidth: V,
    // `<body>`
    noResize: J,
    // `<frame>`
    noHref: J,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: J,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: J,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: V,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: fe,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: V,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: V,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: J,
    disablePictureInPicture: J,
    disableRemotePlayback: J,
    exportParts: Pt,
    part: ne,
    prefix: null,
    property: null,
    results: V,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: ed
}), Dx = en({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: De,
    accentHeight: V,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: V,
    amplitude: V,
    arabicForm: null,
    ascent: V,
    attributeName: null,
    attributeType: null,
    azimuth: V,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: V,
    by: null,
    calcMode: null,
    capHeight: V,
    className: ne,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: V,
    diffuseConstant: V,
    direction: null,
    display: null,
    dur: null,
    divisor: V,
    dominantBaseline: null,
    download: J,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: V,
    enableBackground: null,
    end: null,
    event: null,
    exponent: V,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: V,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Pt,
    g2: Pt,
    glyphName: Pt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: V,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: V,
    horizOriginX: V,
    horizOriginY: V,
    id: null,
    ideographic: V,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: V,
    k: V,
    k1: V,
    k2: V,
    k3: V,
    k4: V,
    kernelMatrix: De,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: V,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: V,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: V,
    overlineThickness: V,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: V,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ne,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: V,
    pointsAtY: V,
    pointsAtZ: V,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: De,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: De,
    rev: De,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: De,
    requiredFeatures: De,
    requiredFonts: De,
    requiredFormats: De,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: V,
    specularExponent: V,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: V,
    strikethroughThickness: V,
    string: null,
    stroke: null,
    strokeDashArray: De,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: V,
    strokeOpacity: V,
    strokeWidth: null,
    style: null,
    surfaceScale: V,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: De,
    tabIndex: V,
    tableValues: null,
    target: null,
    targetX: V,
    targetY: V,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: De,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: V,
    underlineThickness: V,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: V,
    values: null,
    vAlphabetic: V,
    vMathematical: V,
    vectorEffect: null,
    vHanging: V,
    vIdeographic: V,
    version: null,
    vertAdvY: V,
    vertOriginX: V,
    vertOriginY: V,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: V,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: $h
}), td = en({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), nd = en({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ed
}), rd = en({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Nx = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Fx = /[A-Z]/g, Sl = /-[a-z]/g, Bx = /^data[-\w.:]+$/i;
function Vx(e, t) {
  const n = xo(t);
  let r = t, i = je;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Bx.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Sl, Ux);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Sl.test(o)) {
        let s = o.replace(Fx, zx);
        s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s;
      }
    }
    i = ys;
  }
  return new i(r, t);
}
function zx(e) {
  return "-" + e.toLowerCase();
}
function Ux(e) {
  return e.charAt(1).toUpperCase();
}
const Hx = Qh([Zh, Ix, td, nd, rd], "html"), vs = Qh([Zh, Dx, td, nd, rd], "svg");
function fE(e) {
  const t = String(e || "").trim();
  return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function qx(e) {
  return e.join(" ").trim();
}
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mt = {}, Ai, kl;
function Wx() {
  if (kl) return Ai;
  kl = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, s = /^[;\s]*/, a = /^\s+|\s+$/g, l = `
`, c = "/", u = "*", f = "", d = "comment", h = "declaration";
  function p(g, y) {
    if (typeof g != "string")
      throw new TypeError("First argument must be a string");
    if (!g) return [];
    y = y || {};
    var x = 1, k = 1;
    function S(B) {
      var D = B.match(t);
      D && (x += D.length);
      var H = B.lastIndexOf(l);
      k = ~H ? B.length - H : k + B.length;
    }
    function b() {
      var B = { line: x, column: k };
      return function(D) {
        return D.position = new w(B), I(), D;
      };
    }
    function w(B) {
      this.start = B, this.end = { line: x, column: k }, this.source = y.source;
    }
    w.prototype.content = g;
    function _(B) {
      var D = new Error(
        y.source + ":" + x + ":" + k + ": " + B
      );
      if (D.reason = B, D.filename = y.source, D.line = x, D.column = k, D.source = g, !y.silent) throw D;
    }
    function R(B) {
      var D = B.exec(g);
      if (D) {
        var H = D[0];
        return S(H), g = g.slice(H.length), D;
      }
    }
    function I() {
      R(n);
    }
    function z(B) {
      var D;
      for (B = B || []; D = T(); )
        D !== !1 && B.push(D);
      return B;
    }
    function T() {
      var B = b();
      if (!(c != g.charAt(0) || u != g.charAt(1))) {
        for (var D = 2; f != g.charAt(D) && (u != g.charAt(D) || c != g.charAt(D + 1)); )
          ++D;
        if (D += 2, f === g.charAt(D - 1))
          return _("End of comment missing");
        var H = g.slice(2, D - 2);
        return k += 2, S(H), g = g.slice(D), k += 2, B({
          type: d,
          comment: H
        });
      }
    }
    function A() {
      var B = b(), D = R(r);
      if (D) {
        if (T(), !R(i)) return _("property missing ':'");
        var H = R(o), X = B({
          type: h,
          property: m(D[0].replace(e, f)),
          value: H ? m(H[0].replace(e, f)) : f
        });
        return R(s), X;
      }
    }
    function N() {
      var B = [];
      z(B);
      for (var D; D = A(); )
        D !== !1 && (B.push(D), z(B));
      return B;
    }
    return I(), N();
  }
  function m(g) {
    return g ? g.replace(a, f) : f;
  }
  return Ai = p, Ai;
}
var wl;
function Gx() {
  if (wl) return Mt;
  wl = 1;
  var e = Mt && Mt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.default = n;
  const t = e(Wx());
  function n(r, i) {
    let o = null;
    if (!r || typeof r != "string")
      return o;
    const s = (0, t.default)(r), a = typeof i == "function";
    return s.forEach((l) => {
      if (l.type !== "declaration")
        return;
      const { property: c, value: u } = l;
      a ? i(c, u, l) : u && (o = o || {}, o[c] = u);
    }), o;
  }
  return Mt;
}
var un = {}, El;
function Yx() {
  if (El) return un;
  El = 1, Object.defineProperty(un, "__esModule", { value: !0 }), un.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, o = function(c) {
    return !c || n.test(c) || e.test(c);
  }, s = function(c, u) {
    return u.toUpperCase();
  }, a = function(c, u) {
    return "".concat(u, "-");
  }, l = function(c, u) {
    return u === void 0 && (u = {}), o(c) ? c : (c = c.toLowerCase(), u.reactCompat ? c = c.replace(i, a) : c = c.replace(r, a), c.replace(t, s));
  };
  return un.camelCase = l, un;
}
var cn, _l;
function Kx() {
  if (_l) return cn;
  _l = 1;
  var e = cn && cn.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Gx()), n = Yx();
  function r(i, o) {
    var s = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, l) {
      a && l && (s[(0, n.camelCase)(a, o)] = l);
    }), s;
  }
  return r.default = r, cn = r, cn;
}
var Jx = Kx();
const Xx = /* @__PURE__ */ id(Jx), od = sd("end"), xs = sd("start");
function sd(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function Qx(e) {
  const t = xs(e), n = od(e);
  if (t && n)
    return { start: t, end: n };
}
function _n(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Cl(e.position) : "start" in e || "end" in e ? Cl(e) : "line" in e || "column" in e ? ko(e) : "";
}
function ko(e) {
  return Pl(e && e.line) + ":" + Pl(e && e.column);
}
function Cl(e) {
  return ko(e && e.start) + "-" + ko(e && e.end);
}
function Pl(e) {
  return e && typeof e == "number" ? e : 1;
}
class Se extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, s = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (s = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? o.ruleId = r : (o.source = r.slice(0, l), o.ruleId = r.slice(l + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const l = o.ancestors[o.ancestors.length - 1];
      l && (o.place = l.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = _n(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = s && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Se.prototype.file = "";
Se.prototype.name = "";
Se.prototype.reason = "";
Se.prototype.message = "";
Se.prototype.stack = "";
Se.prototype.column = void 0;
Se.prototype.line = void 0;
Se.prototype.ancestors = void 0;
Se.prototype.cause = void 0;
Se.prototype.fatal = void 0;
Se.prototype.place = void 0;
Se.prototype.ruleId = void 0;
Se.prototype.source = void 0;
const bs = {}.hasOwnProperty, Zx = /* @__PURE__ */ new Map(), $x = /[A-Z]/g, e0 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), t0 = /* @__PURE__ */ new Set(["td", "th"]), ad = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function n0(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = c0(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = u0(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? vs : Hx,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = ld(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function ld(e, t, n) {
  if (t.type === "element")
    return r0(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return i0(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return s0(e, t, n);
  if (t.type === "mdxjsEsm")
    return o0(e, t);
  if (t.type === "root")
    return a0(e, t, n);
  if (t.type === "text")
    return l0(e, t);
}
function r0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = vs, e.schema = i), e.ancestors.push(t);
  const o = cd(e, t.tagName, !1), s = h0(e, t);
  let a = ks(e, t);
  return e0.has(t.tagName) && (a = a.filter(function(l) {
    return typeof l == "string" ? !Ox(l) : !0;
  })), ud(e, s, o, t), Ss(s, a), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n);
}
function i0(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const n = t.data.estree.body[0];
    return n.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(n.expression);
  }
  Mn(e, t.position);
}
function o0(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Mn(e, t.position);
}
function s0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = vs, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : cd(e, t.name, !0), s = d0(e, t), a = ks(e, t);
  return ud(e, s, o, t), Ss(s, a), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n);
}
function a0(e, t, n) {
  const r = {};
  return Ss(r, ks(e, t)), e.create(t, e.Fragment, r, n);
}
function l0(e, t) {
  return t.value;
}
function ud(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Ss(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function u0(e, t, n) {
  return r;
  function r(i, o, s, a) {
    const l = Array.isArray(s.children) ? n : t;
    return a ? l(o, s, a) : l(o, s);
  }
}
function c0(e, t) {
  return n;
  function n(r, i, o, s) {
    const a = Array.isArray(o.children), l = xs(r);
    return t(
      i,
      o,
      s,
      a,
      {
        columnNumber: l ? l.column - 1 : void 0,
        fileName: e,
        lineNumber: l ? l.line : void 0
      },
      void 0
    );
  }
}
function h0(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && bs.call(t.properties, i)) {
      const o = p0(e, i, t.properties[i]);
      if (o) {
        const [s, a] = o;
        e.tableCellAlignToStyle && s === "align" && typeof a == "string" && t0.has(t.tagName) ? r = a : n[s] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function d0(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const i = r.data.estree.body[0];
        i.type;
        const o = i.expression;
        o.type;
        const s = o.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        Mn(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, o = e.evaluater.evaluateExpression(s.expression);
        } else
          Mn(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function ks(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Zx;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let s;
    if (e.passKeys) {
      const l = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (l) {
        const c = i.get(l) || 0;
        s = l + "-" + c, i.set(l, c + 1);
      }
    }
    const a = ld(e, o, s);
    a !== void 0 && n.push(a);
  }
  return n;
}
function p0(e, t, n) {
  const r = Vx(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Ax(n) : qx(n)), r.property === "style") {
      let i = typeof n == "object" ? n : f0(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = m0(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Nx[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function f0(e, t) {
  try {
    return Xx(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Se("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = ad + "#cannot-parse-style-attribute", i;
  }
}
function cd(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, s;
    for (; ++o < i.length; ) {
      const a = vl(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      s = s ? {
        type: "MemberExpression",
        object: s,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = s;
  } else
    r = vl(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return bs.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Mn(e);
}
function Mn(e, t) {
  const n = new Se(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = ad + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function m0(e) {
  const t = {};
  let n;
  for (n in e)
    bs.call(e, n) && (t[g0(n)] = e[n]);
  return t;
}
function g0(e) {
  let t = e.replace($x, y0);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function y0(e) {
  return "-" + e.toLowerCase();
}
const Ri = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, v0 = {};
function x0(e, t) {
  const n = v0, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return hd(e, r, i);
}
function hd(e, t, n) {
  if (b0(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Al(e.children, t, n);
  }
  return Array.isArray(e) ? Al(e, t, n) : "";
}
function Al(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = hd(e[i], t, n);
  return r.join("");
}
function b0(e) {
  return !!(e && typeof e == "object");
}
const Rl = document.createElement("i");
function ws(e) {
  const t = "&" + e + ";";
  Rl.innerHTML = t;
  const n = Rl.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function nt(e, t, n, r) {
  const i = e.length;
  let o = 0, s;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    s = Array.from(r), s.unshift(t, n), e.splice(...s);
  else
    for (n && e.splice(t, n); o < r.length; )
      s = r.slice(o, o + 1e4), s.unshift(t, 0), e.splice(...s), o += 1e4, t += 1e4;
}
function He(e, t) {
  return e.length > 0 ? (nt(e, e.length, 0, t), e) : t;
}
const Tl = {}.hasOwnProperty;
function S0(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    k0(t, e[n]);
  return t;
}
function k0(e, t) {
  let n;
  for (n in t) {
    const r = (Tl.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n];
    let o;
    if (i)
      for (o in i) {
        Tl.call(r, o) || (r[o] = []);
        const s = i[o];
        w0(
          // @ts-expect-error Looks like a list.
          r[o],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function w0(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  nt(e, 0, 0, r);
}
function dd(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function qt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Ze = bt(/[A-Za-z]/), Ne = bt(/[\dA-Za-z]/), E0 = bt(/[#-'*+\--9=?A-Z^-~]/);
function wo(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Eo = bt(/\d/), _0 = bt(/[\dA-Fa-f]/), C0 = bt(/[!-/:-@[-`{-~]/);
function Y(e) {
  return e !== null && e < -2;
}
function Re(e) {
  return e !== null && (e < 0 || e === 32);
}
function Z(e) {
  return e === -2 || e === -1 || e === 32;
}
const P0 = bt(new RegExp("\\p{P}|\\p{S}", "u")), A0 = bt(/\s/);
function bt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function tn(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let s = "";
    if (o === 37 && Ne(e.charCodeAt(n + 1)) && Ne(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (s = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (s = String.fromCharCode(o, a), i = 1) : s = "�";
    } else
      s = String.fromCharCode(o);
    s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function ie(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return s;
  function s(l) {
    return Z(l) ? (e.enter(n), a(l)) : t(l);
  }
  function a(l) {
    return Z(l) && o++ < i ? (e.consume(l), a) : (e.exit(n), t(l));
  }
}
const R0 = {
  tokenize: T0
};
function T0(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ie(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const l = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, s(a);
  }
  function s(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return Y(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), s);
  }
}
const L0 = {
  tokenize: j0
}, Ll = {
  tokenize: O0
};
function j0(e) {
  const t = this, n = [];
  let r = 0, i, o, s;
  return a;
  function a(k) {
    if (r < n.length) {
      const S = n[r];
      return t.containerState = S[1], e.attempt(S[0].continuation, l, c)(k);
    }
    return c(k);
  }
  function l(k) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && x();
      const S = t.events.length;
      let b = S, w;
      for (; b--; )
        if (t.events[b][0] === "exit" && t.events[b][1].type === "chunkFlow") {
          w = t.events[b][1].end;
          break;
        }
      y(r);
      let _ = S;
      for (; _ < t.events.length; )
        t.events[_][1].end = {
          ...w
        }, _++;
      return nt(t.events, b + 1, 0, t.events.slice(S)), t.events.length = _, c(k);
    }
    return a(k);
  }
  function c(k) {
    if (r === n.length) {
      if (!i)
        return d(k);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return p(k);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Ll, u, f)(k);
  }
  function u(k) {
    return i && x(), y(r), d(k);
  }
  function f(k) {
    return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, p(k);
  }
  function d(k) {
    return t.containerState = {}, e.attempt(Ll, h, p)(k);
  }
  function h(k) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(k);
  }
  function p(k) {
    if (k === null) {
      i && x(), y(0), e.consume(k);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), m(k);
  }
  function m(k) {
    if (k === null) {
      g(e.exit("chunkFlow"), !0), y(0), e.consume(k);
      return;
    }
    return Y(k) ? (e.consume(k), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(k), m);
  }
  function g(k, S) {
    const b = t.sliceStream(k);
    if (S && b.push(null), k.previous = o, o && (o.next = k), o = k, i.defineSkip(k.start), i.write(b), t.parser.lazy[k.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < s && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > s)
        )
          return;
      const _ = t.events.length;
      let R = _, I, z;
      for (; R--; )
        if (t.events[R][0] === "exit" && t.events[R][1].type === "chunkFlow") {
          if (I) {
            z = t.events[R][1].end;
            break;
          }
          I = !0;
        }
      for (y(r), w = _; w < t.events.length; )
        t.events[w][1].end = {
          ...z
        }, w++;
      nt(t.events, R + 1, 0, t.events.slice(_)), t.events.length = w;
    }
  }
  function y(k) {
    let S = n.length;
    for (; S-- > k; ) {
      const b = n[S];
      t.containerState = b[1], b[0].exit.call(t, e);
    }
    n.length = k;
  }
  function x() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function O0(e, t, n) {
  return ie(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function jl(e) {
  if (e === null || Re(e) || A0(e))
    return 1;
  if (P0(e))
    return 2;
}
function Es(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const _o = {
  name: "attention",
  resolveAll: M0,
  tokenize: I0
};
function M0(e, t) {
  let n = -1, r, i, o, s, a, l, c, u;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, d = {
            ...e[n][1].start
          };
          Ol(f, -l), Ol(d, l), s = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: d
          }, o = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: {
              ...s.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...s.start
          }, e[n][1].start = {
            ...a.end
          }, c = [], e[r][1].end.offset - e[r][1].start.offset && (c = He(c, [["enter", e[r][1], t], ["exit", e[r][1], t]])), c = He(c, [["enter", i, t], ["enter", s, t], ["exit", s, t], ["enter", o, t]]), c = He(c, Es(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), c = He(c, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, c = He(c, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : u = 0, nt(e, r - 1, n - r + 3, c), n = r + c.length - u - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function I0(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = jl(r);
  let o;
  return s;
  function s(l) {
    return o = l, e.enter("attentionSequence"), a(l);
  }
  function a(l) {
    if (l === o)
      return e.consume(l), a;
    const c = e.exit("attentionSequence"), u = jl(l), f = !u || u === 2 && i || n.includes(l), d = !i || i === 2 && u || n.includes(r);
    return c._open = !!(o === 42 ? f : f && (i || !d)), c._close = !!(o === 42 ? d : d && (u || !f)), t(l);
  }
}
function Ol(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const D0 = {
  name: "autolink",
  tokenize: N0
};
function N0(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(h) {
    return Ze(h) ? (e.consume(h), s) : h === 64 ? n(h) : c(h);
  }
  function s(h) {
    return h === 43 || h === 45 || h === 46 || Ne(h) ? (r = 1, a(h)) : c(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), r = 0, l) : (h === 43 || h === 45 || h === 46 || Ne(h)) && r++ < 32 ? (e.consume(h), a) : (r = 0, c(h));
  }
  function l(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || wo(h) ? n(h) : (e.consume(h), l);
  }
  function c(h) {
    return h === 64 ? (e.consume(h), u) : E0(h) ? (e.consume(h), c) : n(h);
  }
  function u(h) {
    return Ne(h) ? f(h) : n(h);
  }
  function f(h) {
    return h === 46 ? (e.consume(h), r = 0, u) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(h);
  }
  function d(h) {
    if ((h === 45 || Ne(h)) && r++ < 63) {
      const p = h === 45 ? d : f;
      return e.consume(h), p;
    }
    return n(h);
  }
}
const si = {
  partial: !0,
  tokenize: F0
};
function F0(e, t, n) {
  return r;
  function r(o) {
    return Z(o) ? ie(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || Y(o) ? t(o) : n(o);
  }
}
const pd = {
  continuation: {
    tokenize: V0
  },
  exit: z0,
  name: "blockQuote",
  tokenize: B0
};
function B0(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    if (s === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), o;
    }
    return n(s);
  }
  function o(s) {
    return Z(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s));
  }
}
function V0(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return Z(s) ? ie(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s) : o(s);
  }
  function o(s) {
    return e.attempt(pd, t, n)(s);
  }
}
function z0(e) {
  e.exit("blockQuote");
}
const fd = {
  name: "characterEscape",
  tokenize: U0
};
function U0(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return C0(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const md = {
  name: "characterReference",
  tokenize: H0
};
function H0(e, t, n) {
  const r = this;
  let i = 0, o, s;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), l;
  }
  function l(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), o = 31, s = Ne, u(f));
  }
  function c(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, s = _0, u) : (e.enter("characterReferenceValue"), o = 7, s = Eo, u(f));
  }
  function u(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return s === Ne && !ws(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return s(f) && i++ < o ? (e.consume(f), u) : n(f);
  }
}
const Ml = {
  partial: !0,
  tokenize: W0
}, Il = {
  concrete: !0,
  name: "codeFenced",
  tokenize: q0
};
function q0(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: b
  };
  let o = 0, s = 0, a;
  return l;
  function l(w) {
    return c(w);
  }
  function c(w) {
    const _ = r.events[r.events.length - 1];
    return o = _ && _[1].type === "linePrefix" ? _[2].sliceSerialize(_[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(w);
  }
  function u(w) {
    return w === a ? (s++, e.consume(w), u) : s < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), Z(w) ? ie(e, f, "whitespace")(w) : f(w));
  }
  function f(w) {
    return w === null || Y(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(Ml, m, S)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || Y(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w)) : Z(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ie(e, h, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), d);
  }
  function h(w) {
    return w === null || Y(w) ? f(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || Y(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w)) : w === 96 && w === a ? n(w) : (e.consume(w), p);
  }
  function m(w) {
    return e.attempt(i, S, g)(w);
  }
  function g(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), y;
  }
  function y(w) {
    return o > 0 && Z(w) ? ie(e, x, "linePrefix", o + 1)(w) : x(w);
  }
  function x(w) {
    return w === null || Y(w) ? e.check(Ml, m, S)(w) : (e.enter("codeFlowValue"), k(w));
  }
  function k(w) {
    return w === null || Y(w) ? (e.exit("codeFlowValue"), x(w)) : (e.consume(w), k);
  }
  function S(w) {
    return e.exit("codeFenced"), t(w);
  }
  function b(w, _, R) {
    let I = 0;
    return z;
    function z(D) {
      return w.enter("lineEnding"), w.consume(D), w.exit("lineEnding"), T;
    }
    function T(D) {
      return w.enter("codeFencedFence"), Z(D) ? ie(w, A, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(D) : A(D);
    }
    function A(D) {
      return D === a ? (w.enter("codeFencedFenceSequence"), N(D)) : R(D);
    }
    function N(D) {
      return D === a ? (I++, w.consume(D), N) : I >= s ? (w.exit("codeFencedFenceSequence"), Z(D) ? ie(w, B, "whitespace")(D) : B(D)) : R(D);
    }
    function B(D) {
      return D === null || Y(D) ? (w.exit("codeFencedFence"), _(D)) : R(D);
    }
  }
}
function W0(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return s === null ? n(s) : (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o);
  }
  function o(s) {
    return r.parser.lazy[r.now().line] ? n(s) : t(s);
  }
}
const Ti = {
  name: "codeIndented",
  tokenize: Y0
}, G0 = {
  partial: !0,
  tokenize: K0
};
function Y0(e, t, n) {
  const r = this;
  return i;
  function i(c) {
    return e.enter("codeIndented"), ie(e, o, "linePrefix", 5)(c);
  }
  function o(c) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? s(c) : n(c);
  }
  function s(c) {
    return c === null ? l(c) : Y(c) ? e.attempt(G0, s, l)(c) : (e.enter("codeFlowValue"), a(c));
  }
  function a(c) {
    return c === null || Y(c) ? (e.exit("codeFlowValue"), s(c)) : (e.consume(c), a);
  }
  function l(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function K0(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return r.parser.lazy[r.now().line] ? n(s) : Y(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : ie(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : Y(s) ? i(s) : n(s);
  }
}
const J0 = {
  name: "codeText",
  previous: Q0,
  resolve: X0,
  tokenize: Z0
};
function X0(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Q0(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Z0(e, t, n) {
  let r = 0, i, o;
  return s;
  function s(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), l(f));
  }
  function l(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), l) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, u(f)) : Y(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), l) : (e.enter("codeTextData"), c(f));
  }
  function c(f) {
    return f === null || f === 32 || f === 96 || Y(f) ? (e.exit("codeTextData"), l(f)) : (e.consume(f), c);
  }
  function u(f) {
    return f === 96 ? (e.consume(f), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", c(f));
  }
}
class $0 {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && hn(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), hn(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), hn(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        hn(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        hn(this.left, n.reverse());
      }
  }
}
function hn(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function gd(e) {
  const t = {};
  let n = -1, r, i, o, s, a, l, c;
  const u = new $0(e);
  for (; ++n < u.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, o = 0, o < l.length && l[o][1].type === "lineEndingBlank" && (o += 2), o < l.length && l[o][1].type === "content"))
      for (; ++o < l.length && l[o][1].type !== "content"; )
        l[o][1].type === "chunkText" && (l[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, e1(u, n)), n = t[n], c = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (s = u.get(o), s[1].type === "lineEnding" || s[1].type === "lineEndingBlank")
          s[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = o);
        else if (!(s[1].type === "linePrefix" || s[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...u.get(i)[1].start
      }, a = u.slice(i, n), a.unshift(r), u.splice(i, n - i + 1, a));
    }
  }
  return nt(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !c;
}
function e1(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let s = n._tokenizer;
  s || (s = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (s._contentTypeTextTrailing = !0));
  const a = s.events, l = [], c = {};
  let u, f, d = -1, h = n, p = 0, m = 0;
  const g = [m];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    o.push(i), h._tokenizer || (u = r.sliceStream(h), h.next || u.push(null), f && s.defineSkip(h.start), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(u), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), f = h, h = h.next;
  }
  for (h = n; ++d < a.length; )
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (m = d + 1, g.push(m), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (s.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : g.pop(), d = g.length; d--; ) {
    const y = a.slice(g[d], g[d + 1]), x = o.pop();
    l.push([x, x + y.length - 1]), e.splice(x, 2, y);
  }
  for (l.reverse(), d = -1; ++d < l.length; )
    c[p + l[d][0]] = p + l[d][1], p += l[d][1] - l[d][0] - 1;
  return c;
}
const t1 = {
  resolve: r1,
  tokenize: i1
}, n1 = {
  partial: !0,
  tokenize: o1
};
function r1(e) {
  return gd(e), e;
}
function i1(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : Y(a) ? e.check(n1, s, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function s(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function o1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), ie(e, o, "linePrefix");
  }
  function o(s) {
    if (s === null || Y(s))
      return n(s);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s);
  }
}
function yd(e, t, n, r, i, o, s, a, l) {
  const c = l || Number.POSITIVE_INFINITY;
  let u = 0;
  return f;
  function f(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(y), e.exit(o), d) : y === null || y === 32 || y === 41 || wo(y) ? n(y) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), m(y));
  }
  function d(y) {
    return y === 62 ? (e.enter(o), e.consume(y), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(y));
  }
  function h(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), d(y)) : y === null || y === 60 || Y(y) ? n(y) : (e.consume(y), y === 92 ? p : h);
  }
  function p(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), h) : h(y);
  }
  function m(y) {
    return !u && (y === null || y === 41 || Re(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(y)) : u < c && y === 40 ? (e.consume(y), u++, m) : y === 41 ? (e.consume(y), u--, m) : y === null || y === 32 || y === 40 || wo(y) ? n(y) : (e.consume(y), y === 92 ? g : m);
  }
  function g(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), m) : m(y);
  }
}
function vd(e, t, n, r, i, o) {
  const s = this;
  let a = 0, l;
  return c;
  function c(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(o), u;
  }
  function u(h) {
    return a > 999 || h === null || h === 91 || h === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs ? n(h) : h === 93 ? (e.exit(o), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : Y(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), u) : (e.enter("chunkString", {
      contentType: "string"
    }), f(h));
  }
  function f(h) {
    return h === null || h === 91 || h === 93 || Y(h) || a++ > 999 ? (e.exit("chunkString"), u(h)) : (e.consume(h), l || (l = !Z(h)), h === 92 ? d : f);
  }
  function d(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, f) : f(h);
  }
}
function xd(e, t, n, r, i, o) {
  let s;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), s = d === 40 ? 41 : d, l) : n(d);
  }
  function l(d) {
    return d === s ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), c(d));
  }
  function c(d) {
    return d === s ? (e.exit(o), l(s)) : d === null ? n(d) : Y(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ie(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), u(d));
  }
  function u(d) {
    return d === s || d === null || Y(d) ? (e.exit("chunkString"), c(d)) : (e.consume(d), d === 92 ? f : u);
  }
  function f(d) {
    return d === s || d === 92 ? (e.consume(d), u) : u(d);
  }
}
function Cn(e, t) {
  let n;
  return r;
  function r(i) {
    return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Z(i) ? ie(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const s1 = {
  name: "definition",
  tokenize: l1
}, a1 = {
  partial: !0,
  tokenize: u1
};
function l1(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(h) {
    return e.enter("definition"), s(h);
  }
  function s(h) {
    return vd.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function a(h) {
    return i = qt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), l) : n(h);
  }
  function l(h) {
    return Re(h) ? Cn(e, c)(h) : c(h);
  }
  function c(h) {
    return yd(
      e,
      u,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function u(h) {
    return e.attempt(a1, f, f)(h);
  }
  function f(h) {
    return Z(h) ? ie(e, d, "whitespace")(h) : d(h);
  }
  function d(h) {
    return h === null || Y(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function u1(e, t, n) {
  return r;
  function r(a) {
    return Re(a) ? Cn(e, i)(a) : n(a);
  }
  function i(a) {
    return xd(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return Z(a) ? ie(e, s, "whitespace")(a) : s(a);
  }
  function s(a) {
    return a === null || Y(a) ? t(a) : n(a);
  }
}
const c1 = {
  name: "hardBreakEscape",
  tokenize: h1
};
function h1(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return Y(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const d1 = {
  name: "headingAtx",
  resolve: p1,
  tokenize: f1
};
function p1(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, nt(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function f1(e, t, n) {
  let r = 0;
  return i;
  function i(u) {
    return e.enter("atxHeading"), o(u);
  }
  function o(u) {
    return e.enter("atxHeadingSequence"), s(u);
  }
  function s(u) {
    return u === 35 && r++ < 6 ? (e.consume(u), s) : u === null || Re(u) ? (e.exit("atxHeadingSequence"), a(u)) : n(u);
  }
  function a(u) {
    return u === 35 ? (e.enter("atxHeadingSequence"), l(u)) : u === null || Y(u) ? (e.exit("atxHeading"), t(u)) : Z(u) ? ie(e, a, "whitespace")(u) : (e.enter("atxHeadingText"), c(u));
  }
  function l(u) {
    return u === 35 ? (e.consume(u), l) : (e.exit("atxHeadingSequence"), a(u));
  }
  function c(u) {
    return u === null || u === 35 || Re(u) ? (e.exit("atxHeadingText"), a(u)) : (e.consume(u), c);
  }
}
const m1 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Dl = ["pre", "script", "style", "textarea"], g1 = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: x1,
  tokenize: b1
}, y1 = {
  partial: !0,
  tokenize: k1
}, v1 = {
  partial: !0,
  tokenize: S1
};
function x1(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function b1(e, t, n) {
  const r = this;
  let i, o, s, a, l;
  return c;
  function c(E) {
    return u(E);
  }
  function u(E) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(E), f;
  }
  function f(E) {
    return E === 33 ? (e.consume(E), d) : E === 47 ? (e.consume(E), o = !0, m) : E === 63 ? (e.consume(E), i = 3, r.interrupt ? t : C) : Ze(E) ? (e.consume(E), s = String.fromCharCode(E), g) : n(E);
  }
  function d(E) {
    return E === 45 ? (e.consume(E), i = 2, h) : E === 91 ? (e.consume(E), i = 5, a = 0, p) : Ze(E) ? (e.consume(E), i = 4, r.interrupt ? t : C) : n(E);
  }
  function h(E) {
    return E === 45 ? (e.consume(E), r.interrupt ? t : C) : n(E);
  }
  function p(E) {
    const Q = "CDATA[";
    return E === Q.charCodeAt(a++) ? (e.consume(E), a === Q.length ? r.interrupt ? t : A : p) : n(E);
  }
  function m(E) {
    return Ze(E) ? (e.consume(E), s = String.fromCharCode(E), g) : n(E);
  }
  function g(E) {
    if (E === null || E === 47 || E === 62 || Re(E)) {
      const Q = E === 47, we = s.toLowerCase();
      return !Q && !o && Dl.includes(we) ? (i = 1, r.interrupt ? t(E) : A(E)) : m1.includes(s.toLowerCase()) ? (i = 6, Q ? (e.consume(E), y) : r.interrupt ? t(E) : A(E)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(E) : o ? x(E) : k(E));
    }
    return E === 45 || Ne(E) ? (e.consume(E), s += String.fromCharCode(E), g) : n(E);
  }
  function y(E) {
    return E === 62 ? (e.consume(E), r.interrupt ? t : A) : n(E);
  }
  function x(E) {
    return Z(E) ? (e.consume(E), x) : z(E);
  }
  function k(E) {
    return E === 47 ? (e.consume(E), z) : E === 58 || E === 95 || Ze(E) ? (e.consume(E), S) : Z(E) ? (e.consume(E), k) : z(E);
  }
  function S(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || Ne(E) ? (e.consume(E), S) : b(E);
  }
  function b(E) {
    return E === 61 ? (e.consume(E), w) : Z(E) ? (e.consume(E), b) : k(E);
  }
  function w(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? n(E) : E === 34 || E === 39 ? (e.consume(E), l = E, _) : Z(E) ? (e.consume(E), w) : R(E);
  }
  function _(E) {
    return E === l ? (e.consume(E), l = null, I) : E === null || Y(E) ? n(E) : (e.consume(E), _);
  }
  function R(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Re(E) ? b(E) : (e.consume(E), R);
  }
  function I(E) {
    return E === 47 || E === 62 || Z(E) ? k(E) : n(E);
  }
  function z(E) {
    return E === 62 ? (e.consume(E), T) : n(E);
  }
  function T(E) {
    return E === null || Y(E) ? A(E) : Z(E) ? (e.consume(E), T) : n(E);
  }
  function A(E) {
    return E === 45 && i === 2 ? (e.consume(E), H) : E === 60 && i === 1 ? (e.consume(E), X) : E === 62 && i === 4 ? (e.consume(E), O) : E === 63 && i === 3 ? (e.consume(E), C) : E === 93 && i === 5 ? (e.consume(E), ke) : Y(E) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(y1, q, N)(E)) : E === null || Y(E) ? (e.exit("htmlFlowData"), N(E)) : (e.consume(E), A);
  }
  function N(E) {
    return e.check(v1, B, q)(E);
  }
  function B(E) {
    return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), D;
  }
  function D(E) {
    return E === null || Y(E) ? N(E) : (e.enter("htmlFlowData"), A(E));
  }
  function H(E) {
    return E === 45 ? (e.consume(E), C) : A(E);
  }
  function X(E) {
    return E === 47 ? (e.consume(E), s = "", $) : A(E);
  }
  function $(E) {
    if (E === 62) {
      const Q = s.toLowerCase();
      return Dl.includes(Q) ? (e.consume(E), O) : A(E);
    }
    return Ze(E) && s.length < 8 ? (e.consume(E), s += String.fromCharCode(E), $) : A(E);
  }
  function ke(E) {
    return E === 93 ? (e.consume(E), C) : A(E);
  }
  function C(E) {
    return E === 62 ? (e.consume(E), O) : E === 45 && i === 2 ? (e.consume(E), C) : A(E);
  }
  function O(E) {
    return E === null || Y(E) ? (e.exit("htmlFlowData"), q(E)) : (e.consume(E), O);
  }
  function q(E) {
    return e.exit("htmlFlow"), t(E);
  }
}
function S1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return Y(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o) : n(s);
  }
  function o(s) {
    return r.parser.lazy[r.now().line] ? n(s) : t(s);
  }
}
function k1(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(si, t, n);
  }
}
const w1 = {
  name: "htmlText",
  tokenize: E1
};
function E1(e, t, n) {
  const r = this;
  let i, o, s;
  return a;
  function a(C) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(C), l;
  }
  function l(C) {
    return C === 33 ? (e.consume(C), c) : C === 47 ? (e.consume(C), b) : C === 63 ? (e.consume(C), k) : Ze(C) ? (e.consume(C), R) : n(C);
  }
  function c(C) {
    return C === 45 ? (e.consume(C), u) : C === 91 ? (e.consume(C), o = 0, p) : Ze(C) ? (e.consume(C), x) : n(C);
  }
  function u(C) {
    return C === 45 ? (e.consume(C), h) : n(C);
  }
  function f(C) {
    return C === null ? n(C) : C === 45 ? (e.consume(C), d) : Y(C) ? (s = f, X(C)) : (e.consume(C), f);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), h) : f(C);
  }
  function h(C) {
    return C === 62 ? H(C) : C === 45 ? d(C) : f(C);
  }
  function p(C) {
    const O = "CDATA[";
    return C === O.charCodeAt(o++) ? (e.consume(C), o === O.length ? m : p) : n(C);
  }
  function m(C) {
    return C === null ? n(C) : C === 93 ? (e.consume(C), g) : Y(C) ? (s = m, X(C)) : (e.consume(C), m);
  }
  function g(C) {
    return C === 93 ? (e.consume(C), y) : m(C);
  }
  function y(C) {
    return C === 62 ? H(C) : C === 93 ? (e.consume(C), y) : m(C);
  }
  function x(C) {
    return C === null || C === 62 ? H(C) : Y(C) ? (s = x, X(C)) : (e.consume(C), x);
  }
  function k(C) {
    return C === null ? n(C) : C === 63 ? (e.consume(C), S) : Y(C) ? (s = k, X(C)) : (e.consume(C), k);
  }
  function S(C) {
    return C === 62 ? H(C) : k(C);
  }
  function b(C) {
    return Ze(C) ? (e.consume(C), w) : n(C);
  }
  function w(C) {
    return C === 45 || Ne(C) ? (e.consume(C), w) : _(C);
  }
  function _(C) {
    return Y(C) ? (s = _, X(C)) : Z(C) ? (e.consume(C), _) : H(C);
  }
  function R(C) {
    return C === 45 || Ne(C) ? (e.consume(C), R) : C === 47 || C === 62 || Re(C) ? I(C) : n(C);
  }
  function I(C) {
    return C === 47 ? (e.consume(C), H) : C === 58 || C === 95 || Ze(C) ? (e.consume(C), z) : Y(C) ? (s = I, X(C)) : Z(C) ? (e.consume(C), I) : H(C);
  }
  function z(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || Ne(C) ? (e.consume(C), z) : T(C);
  }
  function T(C) {
    return C === 61 ? (e.consume(C), A) : Y(C) ? (s = T, X(C)) : Z(C) ? (e.consume(C), T) : I(C);
  }
  function A(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), i = C, N) : Y(C) ? (s = A, X(C)) : Z(C) ? (e.consume(C), A) : (e.consume(C), B);
  }
  function N(C) {
    return C === i ? (e.consume(C), i = void 0, D) : C === null ? n(C) : Y(C) ? (s = N, X(C)) : (e.consume(C), N);
  }
  function B(C) {
    return C === null || C === 34 || C === 39 || C === 60 || C === 61 || C === 96 ? n(C) : C === 47 || C === 62 || Re(C) ? I(C) : (e.consume(C), B);
  }
  function D(C) {
    return C === 47 || C === 62 || Re(C) ? I(C) : n(C);
  }
  function H(C) {
    return C === 62 ? (e.consume(C), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(C);
  }
  function X(C) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), $;
  }
  function $(C) {
    return Z(C) ? ie(e, ke, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : ke(C);
  }
  function ke(C) {
    return e.enter("htmlTextData"), s(C);
  }
}
const _s = {
  name: "labelEnd",
  resolveAll: A1,
  resolveTo: R1,
  tokenize: T1
}, _1 = {
  tokenize: L1
}, C1 = {
  tokenize: j1
}, P1 = {
  tokenize: O1
};
function A1(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && nt(e, 0, e.length, n), e;
}
function R1(e, t) {
  let n = e.length, r = 0, i, o, s, a;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (s) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (s = n);
  const l = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, c = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[s][1].end
    }
  }, u = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[s - 2][1].start
    }
  };
  return a = [["enter", l, t], ["enter", c, t]], a = He(a, e.slice(o + 1, o + r + 3)), a = He(a, [["enter", u, t]]), a = He(a, Es(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, s - 3), t)), a = He(a, [["exit", u, t], e[s - 2], e[s - 1], ["exit", c, t]]), a = He(a, e.slice(s + 1)), a = He(a, [["exit", l, t]]), nt(e, o, e.length, a), e;
}
function T1(e, t, n) {
  const r = this;
  let i = r.events.length, o, s;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return o ? o._inactive ? f(d) : (s = r.parser.defined.includes(qt(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(d);
  }
  function l(d) {
    return d === 40 ? e.attempt(_1, u, s ? u : f)(d) : d === 91 ? e.attempt(C1, u, s ? c : f)(d) : s ? u(d) : f(d);
  }
  function c(d) {
    return e.attempt(P1, u, f)(d);
  }
  function u(d) {
    return t(d);
  }
  function f(d) {
    return o._balanced = !0, n(d);
  }
}
function L1(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return Re(f) ? Cn(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? u(f) : yd(e, s, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function s(f) {
    return Re(f) ? Cn(e, l)(f) : u(f);
  }
  function a(f) {
    return n(f);
  }
  function l(f) {
    return f === 34 || f === 39 || f === 40 ? xd(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : u(f);
  }
  function c(f) {
    return Re(f) ? Cn(e, u)(f) : u(f);
  }
  function u(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function j1(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return vd.call(r, e, o, s, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(qt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function s(a) {
    return n(a);
  }
}
function O1(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const M1 = {
  name: "labelStartImage",
  resolveAll: _s.resolveAll,
  tokenize: I1
};
function I1(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), s) : n(a);
  }
  function s(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const D1 = {
  name: "labelStartLink",
  resolveAll: _s.resolveAll,
  tokenize: N1
};
function N1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const Li = {
  name: "lineEnding",
  tokenize: F1
};
function F1(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ie(e, t, "linePrefix");
  }
}
const Mr = {
  name: "thematicBreak",
  tokenize: B1
};
function B1(e, t, n) {
  let r = 0, i;
  return o;
  function o(c) {
    return e.enter("thematicBreak"), s(c);
  }
  function s(c) {
    return i = c, a(c);
  }
  function a(c) {
    return c === i ? (e.enter("thematicBreakSequence"), l(c)) : r >= 3 && (c === null || Y(c)) ? (e.exit("thematicBreak"), t(c)) : n(c);
  }
  function l(c) {
    return c === i ? (e.consume(c), r++, l) : (e.exit("thematicBreakSequence"), Z(c) ? ie(e, a, "whitespace")(c) : a(c));
  }
}
const Ce = {
  continuation: {
    tokenize: H1
  },
  exit: W1,
  name: "list",
  tokenize: U1
}, V1 = {
  partial: !0,
  tokenize: G1
}, z1 = {
  partial: !0,
  tokenize: q1
};
function U1(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, s = 0;
  return a;
  function a(h) {
    const p = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (p === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : Eo(h)) {
      if (r.containerState.type || (r.containerState.type = p, e.enter(p, {
        _container: !0
      })), p === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(Mr, n, c)(h) : c(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), l(h);
    }
    return n(h);
  }
  function l(h) {
    return Eo(h) && ++s < 10 ? (e.consume(h), l) : (!r.interrupt || s < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), c(h)) : n(h);
  }
  function c(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      si,
      // Can’t be empty when interrupting.
      r.interrupt ? n : u,
      e.attempt(V1, d, f)
    );
  }
  function u(h) {
    return r.containerState.initialBlankLine = !0, o++, d(h);
  }
  function f(h) {
    return Z(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), d) : n(h);
  }
  function d(h) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function H1(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(si, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ie(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !Z(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(z1, t, s)(a));
  }
  function s(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ie(e, e.attempt(Ce, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function q1(e, t, n) {
  const r = this;
  return ie(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function W1(e) {
  e.exit(this.containerState.type);
}
function G1(e, t, n) {
  const r = this;
  return ie(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const s = r.events[r.events.length - 1];
    return !Z(o) && s && s[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Nl = {
  name: "setextUnderline",
  resolveTo: Y1,
  tokenize: K1
};
function Y1(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const s = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", s, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = s, e.push(["exit", s, t]), e;
}
function K1(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(c) {
    let u = r.events.length, f;
    for (; u--; )
      if (r.events[u][1].type !== "lineEnding" && r.events[u][1].type !== "linePrefix" && r.events[u][1].type !== "content") {
        f = r.events[u][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = c, s(c)) : n(c);
  }
  function s(c) {
    return e.enter("setextHeadingLineSequence"), a(c);
  }
  function a(c) {
    return c === i ? (e.consume(c), a) : (e.exit("setextHeadingLineSequence"), Z(c) ? ie(e, l, "lineSuffix")(c) : l(c));
  }
  function l(c) {
    return c === null || Y(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const J1 = {
  tokenize: X1
};
function X1(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    si,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ie(e, e.attempt(this.parser.constructs.flow, i, e.attempt(t1, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Q1 = {
  resolveAll: Sd()
}, Z1 = bd("string"), $1 = bd("text");
function bd(e) {
  return {
    resolveAll: Sd(e === "text" ? eb : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, s, a);
    return s;
    function s(u) {
      return c(u) ? o(u) : a(u);
    }
    function a(u) {
      if (u === null) {
        n.consume(u);
        return;
      }
      return n.enter("data"), n.consume(u), l;
    }
    function l(u) {
      return c(u) ? (n.exit("data"), o(u)) : (n.consume(u), l);
    }
    function c(u) {
      if (u === null)
        return !0;
      const f = i[u];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const h = f[d];
          if (!h.previous || h.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Sd(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function eb(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, s = -1, a = 0, l;
      for (; o--; ) {
        const c = i[o];
        if (typeof c == "string") {
          for (s = c.length; c.charCodeAt(s - 1) === 32; )
            a++, s--;
          if (s) break;
          s = -1;
        } else if (c === -2)
          l = !0, a++;
        else if (c !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const c = {
          type: n === e.length || l || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? s : r.start._bufferIndex + s,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...c.start
        }, r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]), n += 2);
      }
      n++;
    }
  return e;
}
const tb = {
  42: Ce,
  43: Ce,
  45: Ce,
  48: Ce,
  49: Ce,
  50: Ce,
  51: Ce,
  52: Ce,
  53: Ce,
  54: Ce,
  55: Ce,
  56: Ce,
  57: Ce,
  62: pd
}, nb = {
  91: s1
}, rb = {
  [-2]: Ti,
  [-1]: Ti,
  32: Ti
}, ib = {
  35: d1,
  42: Mr,
  45: [Nl, Mr],
  60: g1,
  61: Nl,
  95: Mr,
  96: Il,
  126: Il
}, ob = {
  38: md,
  92: fd
}, sb = {
  [-5]: Li,
  [-4]: Li,
  [-3]: Li,
  33: M1,
  38: md,
  42: _o,
  60: [D0, w1],
  91: D1,
  92: [c1, fd],
  93: _s,
  95: _o,
  96: J0
}, ab = {
  null: [_o, Q1]
}, lb = {
  null: [42, 95]
}, ub = {
  null: []
}, cb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: lb,
  contentInitial: nb,
  disable: ub,
  document: tb,
  flow: ib,
  flowInitial: rb,
  insideSpan: ab,
  string: ob,
  text: sb
}, Symbol.toStringTag, { value: "Module" }));
function hb(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let s = [], a = [];
  const l = {
    attempt: _(b),
    check: _(w),
    consume: x,
    enter: k,
    exit: S,
    interrupt: _(w, {
      interrupt: !0
    })
  }, c = {
    code: null,
    containerState: {},
    defineSkip: m,
    events: [],
    now: p,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: h,
    write: f
  };
  let u = t.tokenize.call(c, l);
  return t.resolveAll && o.push(t), c;
  function f(T) {
    return s = He(s, T), g(), s[s.length - 1] !== null ? [] : (R(t, 0), c.events = Es(o, c.events, c), c.events);
  }
  function d(T, A) {
    return pb(h(T), A);
  }
  function h(T) {
    return db(s, T);
  }
  function p() {
    const {
      _bufferIndex: T,
      _index: A,
      line: N,
      column: B,
      offset: D
    } = r;
    return {
      _bufferIndex: T,
      _index: A,
      line: N,
      column: B,
      offset: D
    };
  }
  function m(T) {
    i[T.line] = T.column, z();
  }
  function g() {
    let T;
    for (; r._index < s.length; ) {
      const A = s[r._index];
      if (typeof A == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < A.length; )
          y(A.charCodeAt(r._bufferIndex));
      else
        y(A);
    }
  }
  function y(T) {
    u = u(T);
  }
  function x(T) {
    Y(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, z()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    s[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = T;
  }
  function k(T, A) {
    const N = A || {};
    return N.type = T, N.start = p(), c.events.push(["enter", N, c]), a.push(N), N;
  }
  function S(T) {
    const A = a.pop();
    return A.end = p(), c.events.push(["exit", A, c]), A;
  }
  function b(T, A) {
    R(T, A.from);
  }
  function w(T, A) {
    A.restore();
  }
  function _(T, A) {
    return N;
    function N(B, D, H) {
      let X, $, ke, C;
      return Array.isArray(B) ? (
        /* c8 ignore next 1 */
        q(B)
      ) : "tokenize" in B ? (
        // Looks like a construct.
        q([
          /** @type {Construct} */
          B
        ])
      ) : O(B);
      function O(he) {
        return oe;
        function oe(Ee) {
          const Je = Ee !== null && he[Ee], ct = Ee !== null && he.null, Qn = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Je) ? Je : Je ? [Je] : [],
            ...Array.isArray(ct) ? ct : ct ? [ct] : []
          ];
          return q(Qn)(Ee);
        }
      }
      function q(he) {
        return X = he, $ = 0, he.length === 0 ? H : E(he[$]);
      }
      function E(he) {
        return oe;
        function oe(Ee) {
          return C = I(), ke = he, he.partial || (c.currentConstruct = he), he.name && c.parser.constructs.disable.null.includes(he.name) ? we() : he.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            A ? Object.assign(Object.create(c), A) : c,
            l,
            Q,
            we
          )(Ee);
        }
      }
      function Q(he) {
        return T(ke, C), D;
      }
      function we(he) {
        return C.restore(), ++$ < X.length ? E(X[$]) : H;
      }
    }
  }
  function R(T, A) {
    T.resolveAll && !o.includes(T) && o.push(T), T.resolve && nt(c.events, A, c.events.length - A, T.resolve(c.events.slice(A), c)), T.resolveTo && (c.events = T.resolveTo(c.events, c));
  }
  function I() {
    const T = p(), A = c.previous, N = c.currentConstruct, B = c.events.length, D = Array.from(a);
    return {
      from: B,
      restore: H
    };
    function H() {
      r = T, c.previous = A, c.currentConstruct = N, c.events.length = B, a = D, z();
    }
  }
  function z() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function db(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let s;
  if (n === i)
    s = [e[n].slice(r, o)];
  else {
    if (s = e.slice(n, i), r > -1) {
      const a = s[0];
      typeof a == "string" ? s[0] = a.slice(r) : s.shift();
    }
    o > 0 && s.push(e[i].slice(0, o));
  }
  return s;
}
function pb(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let s;
    if (typeof o == "string")
      s = o;
    else switch (o) {
      case -5: {
        s = "\r";
        break;
      }
      case -4: {
        s = `
`;
        break;
      }
      case -3: {
        s = `\r
`;
        break;
      }
      case -2: {
        s = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        s = " ";
        break;
      }
      default:
        s = String.fromCharCode(o);
    }
    i = o === -2, r.push(s);
  }
  return r.join("");
}
function fb(e) {
  const t = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      S0([cb, ...(e || {}).extensions || []])
    ),
    content: n(R0),
    defined: [],
    document: n(L0),
    flow: n(J1),
    lazy: {},
    string: n(Z1),
    text: n($1)
  };
  return t;
  function n(r) {
    return i;
    function i(o) {
      return hb(t, r, o);
    }
  }
}
function mb(e) {
  for (; !gd(e); )
    ;
  return e;
}
const Fl = /[\0\t\n\r]/g;
function gb() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, s, a) {
    const l = [];
    let c, u, f, d, h;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(s || void 0).decode(o)), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length; ) {
      if (Fl.lastIndex = f, c = Fl.exec(o), d = c && c.index !== void 0 ? c.index : o.length, h = o.charCodeAt(d), !c) {
        t = o.slice(f);
        break;
      }
      if (h === 10 && f === d && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), f < d && (l.push(o.slice(f, d)), e += d - f), h) {
          case 0: {
            l.push(65533), e++;
            break;
          }
          case 9: {
            for (u = Math.ceil(e / 4) * 4, l.push(-2); e++ < u; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = d + 1;
    }
    return a && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
const yb = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function vb(e) {
  return e.replace(yb, xb);
}
function xb(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const r = n.charCodeAt(1), i = r === 120 || r === 88;
    return dd(n.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return ws(n) || e;
}
const kd = {}.hasOwnProperty;
function bb(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Sb(n)(mb(fb(n).document().write(gb()(e, t, !0))));
}
function Sb(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(Vs),
      autolinkProtocol: I,
      autolinkEmail: I,
      atxHeading: o(Ns),
      blockQuote: o(ct),
      characterEscape: I,
      characterReference: I,
      codeFenced: o(Qn),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: o(Qn, s),
      codeText: o(xp, s),
      codeTextData: I,
      data: I,
      codeFlowValue: I,
      definition: o(bp),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: o(Sp),
      hardBreakEscape: o(Fs),
      hardBreakTrailing: o(Fs),
      htmlFlow: o(Bs, s),
      htmlFlowData: I,
      htmlText: o(Bs, s),
      htmlTextData: I,
      image: o(kp),
      label: s,
      link: o(Vs),
      listItem: o(wp),
      listItemValue: d,
      listOrdered: o(zs, f),
      listUnordered: o(zs),
      paragraph: o(Ep),
      reference: E,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: o(Ns),
      strong: o(_p),
      thematicBreak: o(Pp)
    },
    exit: {
      atxHeading: l(),
      atxHeadingSequence: b,
      autolink: l(),
      autolinkEmail: Je,
      autolinkProtocol: Ee,
      blockQuote: l(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: we,
      characterReferenceMarkerNumeric: we,
      characterReferenceValue: he,
      characterReference: oe,
      codeFenced: l(g),
      codeFencedFence: m,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: p,
      codeFlowValue: z,
      codeIndented: l(y),
      codeText: l(D),
      codeTextData: z,
      data: z,
      definition: l(),
      definitionDestinationString: S,
      definitionLabelString: x,
      definitionTitleString: k,
      emphasis: l(),
      hardBreakEscape: l(A),
      hardBreakTrailing: l(A),
      htmlFlow: l(N),
      htmlFlowData: z,
      htmlText: l(B),
      htmlTextData: z,
      image: l(X),
      label: ke,
      labelText: $,
      lineEnding: T,
      link: l(H),
      listItem: l(),
      listOrdered: l(),
      listUnordered: l(),
      paragraph: l(),
      referenceString: Q,
      resourceDestinationString: C,
      resourceTitleString: O,
      resource: q,
      setextHeading: l(R),
      setextHeadingLineSequence: _,
      setextHeadingText: w,
      strong: l(),
      thematicBreak: l()
    }
  };
  wd(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(M) {
    let U = {
      type: "root",
      children: []
    };
    const K = {
      stack: [U],
      tokenStack: [],
      config: t,
      enter: a,
      exit: c,
      buffer: s,
      resume: u,
      data: n
    }, te = [];
    let se = -1;
    for (; ++se < M.length; )
      if (M[se][1].type === "listOrdered" || M[se][1].type === "listUnordered")
        if (M[se][0] === "enter")
          te.push(se);
        else {
          const Xe = te.pop();
          se = i(M, Xe, se);
        }
    for (se = -1; ++se < M.length; ) {
      const Xe = t[M[se][0]];
      kd.call(Xe, M[se][1].type) && Xe[M[se][1].type].call(Object.assign({
        sliceSerialize: M[se][2].sliceSerialize
      }, K), M[se][1]);
    }
    if (K.tokenStack.length > 0) {
      const Xe = K.tokenStack[K.tokenStack.length - 1];
      (Xe[1] || Bl).call(K, void 0, Xe[0]);
    }
    for (U.position = {
      start: ht(M.length > 0 ? M[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: ht(M.length > 0 ? M[M.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, se = -1; ++se < t.transforms.length; )
      U = t.transforms[se](U) || U;
    return U;
  }
  function i(M, U, K) {
    let te = U - 1, se = -1, Xe = !1, jt, rt, rn, on;
    for (; ++te <= K; ) {
      const Me = M[te];
      switch (Me[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Me[0] === "enter" ? se++ : se--, on = void 0;
          break;
        }
        case "lineEndingBlank": {
          Me[0] === "enter" && (jt && !on && !se && !rn && (rn = te), on = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          on = void 0;
      }
      if (!se && Me[0] === "enter" && Me[1].type === "listItemPrefix" || se === -1 && Me[0] === "exit" && (Me[1].type === "listUnordered" || Me[1].type === "listOrdered")) {
        if (jt) {
          let Ot = te;
          for (rt = void 0; Ot--; ) {
            const it = M[Ot];
            if (it[1].type === "lineEnding" || it[1].type === "lineEndingBlank") {
              if (it[0] === "exit") continue;
              rt && (M[rt][1].type = "lineEndingBlank", Xe = !0), it[1].type = "lineEnding", rt = Ot;
            } else if (!(it[1].type === "linePrefix" || it[1].type === "blockQuotePrefix" || it[1].type === "blockQuotePrefixWhitespace" || it[1].type === "blockQuoteMarker" || it[1].type === "listItemIndent")) break;
          }
          rn && (!rt || rn < rt) && (jt._spread = !0), jt.end = Object.assign({}, rt ? M[rt][1].start : Me[1].end), M.splice(rt || te, 0, ["exit", jt, Me[2]]), te++, K++;
        }
        if (Me[1].type === "listItemPrefix") {
          const Ot = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Me[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          jt = Ot, M.splice(te, 0, ["enter", Ot, Me[2]]), te++, K++, rn = void 0, on = !0;
        }
      }
    }
    return M[U][1]._spread = Xe, K;
  }
  function o(M, U) {
    return K;
    function K(te) {
      a.call(this, M(te), te), U && U.call(this, te);
    }
  }
  function s() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(M, U, K) {
    this.stack[this.stack.length - 1].children.push(M), this.stack.push(M), this.tokenStack.push([U, K || void 0]), M.position = {
      start: ht(U.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function l(M) {
    return U;
    function U(K) {
      M && M.call(this, K), c.call(this, K);
    }
  }
  function c(M, U) {
    const K = this.stack.pop(), te = this.tokenStack.pop();
    if (te)
      te[0].type !== M.type && (U ? U.call(this, M, te[0]) : (te[1] || Bl).call(this, M, te[0]));
    else throw new Error("Cannot close `" + M.type + "` (" + _n({
      start: M.start,
      end: M.end
    }) + "): it’s not open");
    K.position.end = ht(M.end);
  }
  function u() {
    return x0(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(M) {
    if (this.data.expectingFirstListItemValue) {
      const U = this.stack[this.stack.length - 2];
      U.start = Number.parseInt(this.sliceSerialize(M), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.lang = M;
  }
  function p() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.meta = M;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function g() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.value = M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function y() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.value = M.replace(/(\r?\n|\r)$/g, "");
  }
  function x(M) {
    const U = this.resume(), K = this.stack[this.stack.length - 1];
    K.label = U, K.identifier = qt(this.sliceSerialize(M)).toLowerCase();
  }
  function k() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.title = M;
  }
  function S() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.url = M;
  }
  function b(M) {
    const U = this.stack[this.stack.length - 1];
    if (!U.depth) {
      const K = this.sliceSerialize(M).length;
      U.depth = K;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function _(M) {
    const U = this.stack[this.stack.length - 1];
    U.depth = this.sliceSerialize(M).codePointAt(0) === 61 ? 1 : 2;
  }
  function R() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function I(M) {
    const U = this.stack[this.stack.length - 1].children;
    let K = U[U.length - 1];
    (!K || K.type !== "text") && (K = Cp(), K.position = {
      start: ht(M.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, U.push(K)), this.stack.push(K);
  }
  function z(M) {
    const U = this.stack.pop();
    U.value += this.sliceSerialize(M), U.position.end = ht(M.end);
  }
  function T(M) {
    const U = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const K = U.children[U.children.length - 1];
      K.position.end = ht(M.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(U.type) && (I.call(this, M), z.call(this, M));
  }
  function A() {
    this.data.atHardBreak = !0;
  }
  function N() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.value = M;
  }
  function B() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.value = M;
  }
  function D() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.value = M;
  }
  function H() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const U = this.data.referenceType || "shortcut";
      M.type += "Reference", M.referenceType = U, delete M.url, delete M.title;
    } else
      delete M.identifier, delete M.label;
    this.data.referenceType = void 0;
  }
  function X() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const U = this.data.referenceType || "shortcut";
      M.type += "Reference", M.referenceType = U, delete M.url, delete M.title;
    } else
      delete M.identifier, delete M.label;
    this.data.referenceType = void 0;
  }
  function $(M) {
    const U = this.sliceSerialize(M), K = this.stack[this.stack.length - 2];
    K.label = vb(U), K.identifier = qt(U).toLowerCase();
  }
  function ke() {
    const M = this.stack[this.stack.length - 1], U = this.resume(), K = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, K.type === "link") {
      const te = M.children;
      K.children = te;
    } else
      K.alt = U;
  }
  function C() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.url = M;
  }
  function O() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.title = M;
  }
  function q() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function Q(M) {
    const U = this.resume(), K = this.stack[this.stack.length - 1];
    K.label = U, K.identifier = qt(this.sliceSerialize(M)).toLowerCase(), this.data.referenceType = "full";
  }
  function we(M) {
    this.data.characterReferenceType = M.type;
  }
  function he(M) {
    const U = this.sliceSerialize(M), K = this.data.characterReferenceType;
    let te;
    K ? (te = dd(U, K === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : te = ws(U);
    const se = this.stack[this.stack.length - 1];
    se.value += te;
  }
  function oe(M) {
    const U = this.stack.pop();
    U.position.end = ht(M.end);
  }
  function Ee(M) {
    z.call(this, M);
    const U = this.stack[this.stack.length - 1];
    U.url = this.sliceSerialize(M);
  }
  function Je(M) {
    z.call(this, M);
    const U = this.stack[this.stack.length - 1];
    U.url = "mailto:" + this.sliceSerialize(M);
  }
  function ct() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Qn() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function xp() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function bp() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Sp() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Ns() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Fs() {
    return {
      type: "break"
    };
  }
  function Bs() {
    return {
      type: "html",
      value: ""
    };
  }
  function kp() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Vs() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function zs(M) {
    return {
      type: "list",
      ordered: M.type === "listOrdered",
      start: null,
      spread: M._spread,
      children: []
    };
  }
  function wp(M) {
    return {
      type: "listItem",
      spread: M._spread,
      checked: null,
      children: []
    };
  }
  function Ep() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function _p() {
    return {
      type: "strong",
      children: []
    };
  }
  function Cp() {
    return {
      type: "text",
      value: ""
    };
  }
  function Pp() {
    return {
      type: "thematicBreak"
    };
  }
}
function ht(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function wd(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? wd(e, r) : kb(e, r);
  }
}
function kb(e, t) {
  let n;
  for (n in t)
    if (kd.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Bl(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + _n({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + _n({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + _n({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function wb(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return bb(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Eb(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function _b(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Cb(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function Pb(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ab(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Rb(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = tn(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let s, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), s = e.footnoteOrder.length) : s = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(s) }]
  };
  e.patch(t, l);
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [l]
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Tb(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lb(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Ed(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const s = i[i.length - 1];
  return s && s.type === "text" ? s.value += r : i.push({ type: "text", value: r }), i;
}
function jb(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ed(e, t);
  const i = { src: tn(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Ob(e, t) {
  const n = { src: tn(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Mb(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ib(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ed(e, t);
  const i = { href: tn(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Db(e, t) {
  const n = { href: tn(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Nb(e, t, n) {
  const r = e.all(t), i = n ? Fb(n) : _d(t), o = {}, s = [];
  if (typeof t.checked == "boolean") {
    const u = r[0];
    let f;
    u && u.type === "element" && u.tagName === "p" ? f = u : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const u = r[a];
    (i || a !== 0 || u.type !== "element" || u.tagName !== "p") && s.push({ type: "text", value: `
` }), u.type === "element" && u.tagName === "p" && !i ? s.push(...u.children) : s.push(u);
  }
  const l = r[r.length - 1];
  l && (i || l.type !== "element" || l.tagName !== "p") && s.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: o, children: s };
  return e.patch(t, c), e.applyData(t, c);
}
function Fb(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = _d(n[r]);
  }
  return t;
}
function _d(e) {
  return e.spread ?? e.children.length > 1;
}
function Bb(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const s = r[i];
    if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Vb(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zb(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Ub(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Hb(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const s = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], s), i.push(s);
  }
  if (n.length > 0) {
    const s = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = xs(t.children[1]), l = od(t.children[t.children.length - 1]);
    a && l && (s.position = { start: a, end: l }), i.push(s);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function qb(e, t, n) {
  const r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, s = o ? o.length : t.children.length;
  let a = -1;
  const l = [];
  for (; ++a < s; ) {
    const u = t.children[a], f = {}, d = o ? o[a] : void 0;
    d && (f.align = d);
    let h = { type: "element", tagName: i, properties: f, children: [] };
    u && (h.children = e.all(u), e.patch(u, h), h = e.applyData(u, h)), l.push(h);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(l, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Wb(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Vl = 9, zl = 32;
function Gb(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Ul(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Ul(t.slice(i), i > 0, !1)), o.join("");
}
function Ul(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Vl || o === zl; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Vl || o === zl; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Yb(e, t) {
  const n = { type: "text", value: Gb(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Kb(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Jb = {
  blockquote: Eb,
  break: _b,
  code: Cb,
  delete: Pb,
  emphasis: Ab,
  footnoteReference: Rb,
  heading: Tb,
  html: Lb,
  imageReference: jb,
  image: Ob,
  inlineCode: Mb,
  linkReference: Ib,
  link: Db,
  listItem: Nb,
  list: Bb,
  paragraph: Vb,
  // @ts-expect-error: root is different, but hard to type.
  root: zb,
  strong: Ub,
  table: Hb,
  tableCell: Wb,
  tableRow: qb,
  text: Yb,
  thematicBreak: Kb,
  toml: rr,
  yaml: rr,
  definition: rr,
  footnoteDefinition: rr
};
function rr() {
}
const Cd = -1, ai = 0, Pn = 1, Kr = 2, Cs = 3, Ps = 4, As = 5, Rs = 6, Pd = 7, Ad = 8, Xb = typeof self == "object" ? self : globalThis, Hl = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new Xb[e](t);
}, Qb = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, s] = t[i];
    switch (o) {
      case ai:
      case Cd:
        return n(s, i);
      case Pn: {
        const a = n([], i);
        for (const l of s)
          a.push(r(l));
        return a;
      }
      case Kr: {
        const a = n({}, i);
        for (const [l, c] of s)
          a[r(l)] = r(c);
        return a;
      }
      case Cs:
        return n(new Date(s), i);
      case Ps: {
        const { source: a, flags: l } = s;
        return n(new RegExp(a, l), i);
      }
      case As: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [l, c] of s)
          a.set(r(l), r(c));
        return a;
      }
      case Rs: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const l of s)
          a.add(r(l));
        return a;
      }
      case Pd: {
        const { name: a, message: l } = s;
        return n(Hl(a, l), i);
      }
      case Ad:
        return n(BigInt(s), i);
      case "BigInt":
        return n(Object(BigInt(s)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(s).buffer, s);
      case "DataView": {
        const { buffer: a } = new Uint8Array(s);
        return n(new DataView(a), s);
      }
    }
    return n(Hl(o, s), i);
  };
  return r;
}, ql = (e) => Qb(/* @__PURE__ */ new Map(), e)(0), It = "", { toString: Zb } = {}, { keys: $b } = Object, dn = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [ai, t];
  const n = Zb.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Pn, It];
    case "Object":
      return [Kr, It];
    case "Date":
      return [Cs, It];
    case "RegExp":
      return [Ps, It];
    case "Map":
      return [As, It];
    case "Set":
      return [Rs, It];
    case "DataView":
      return [Pn, n];
  }
  return n.includes("Array") ? [Pn, n] : n.includes("Error") ? [Pd, n] : [Kr, n];
}, ir = ([e, t]) => e === ai && (t === "function" || t === "symbol"), e2 = (e, t, n, r) => {
  const i = (s, a) => {
    const l = r.push(s) - 1;
    return n.set(a, l), l;
  }, o = (s) => {
    if (n.has(s))
      return n.get(s);
    let [a, l] = dn(s);
    switch (a) {
      case ai: {
        let u = s;
        switch (l) {
          case "bigint":
            a = Ad, u = s.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + l);
            u = null;
            break;
          case "undefined":
            return i([Cd], s);
        }
        return i([a, u], s);
      }
      case Pn: {
        if (l) {
          let d = s;
          return l === "DataView" ? d = new Uint8Array(s.buffer) : l === "ArrayBuffer" && (d = new Uint8Array(s)), i([l, [...d]], s);
        }
        const u = [], f = i([a, u], s);
        for (const d of s)
          u.push(o(d));
        return f;
      }
      case Kr: {
        if (l)
          switch (l) {
            case "BigInt":
              return i([l, s.toString()], s);
            case "Boolean":
            case "Number":
            case "String":
              return i([l, s.valueOf()], s);
          }
        if (t && "toJSON" in s)
          return o(s.toJSON());
        const u = [], f = i([a, u], s);
        for (const d of $b(s))
          (e || !ir(dn(s[d]))) && u.push([o(d), o(s[d])]);
        return f;
      }
      case Cs:
        return i([a, s.toISOString()], s);
      case Ps: {
        const { source: u, flags: f } = s;
        return i([a, { source: u, flags: f }], s);
      }
      case As: {
        const u = [], f = i([a, u], s);
        for (const [d, h] of s)
          (e || !(ir(dn(d)) || ir(dn(h)))) && u.push([o(d), o(h)]);
        return f;
      }
      case Rs: {
        const u = [], f = i([a, u], s);
        for (const d of s)
          (e || !ir(dn(d))) && u.push(o(d));
        return f;
      }
    }
    const { message: c } = s;
    return i([a, { name: l, message: c }], s);
  };
  return o;
}, Wl = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return e2(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Jr = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  ((e, t) => t && ("json" in t || "lossy" in t) ? ql(Wl(e, t)) : structuredClone(e))
) : (e, t) => ql(Wl(e, t));
function t2(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function n2(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function r2(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || t2, r = e.options.footnoteBackLabel || n2, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", s = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let l = -1;
  for (; ++l < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(
      e.footnoteOrder[l]
    );
    if (!c)
      continue;
    const u = e.all(c), f = String(c.identifier).toUpperCase(), d = tn(f.toLowerCase());
    let h = 0;
    const p = [], m = e.footnoteCounts.get(f);
    for (; m !== void 0 && ++h <= m; ) {
      p.length > 0 && p.push({ type: "text", value: " " });
      let x = typeof n == "string" ? n : n(l, h);
      typeof x == "string" && (x = { type: "text", value: x }), p.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(l, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(x) ? x : [x]
      });
    }
    const g = u[u.length - 1];
    if (g && g.type === "element" && g.tagName === "p") {
      const x = g.children[g.children.length - 1];
      x && x.type === "text" ? x.value += " " : g.children.push({ type: "text", value: " " }), g.children.push(...p);
    } else
      u.push(...p);
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(u, !0)
    };
    e.patch(c, y), a.push(y);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Jr(s),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Rd = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(e) {
    if (e == null)
      return a2;
    if (typeof e == "function")
      return li(e);
    if (typeof e == "object")
      return Array.isArray(e) ? i2(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        o2(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return s2(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function i2(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Rd(e[n]);
  return li(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function o2(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return li(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function s2(e) {
  return li(t);
  function t(n) {
    return n && n.type === e;
  }
}
function li(e) {
  return t;
  function t(n, r, i) {
    return !!(l2(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function a2() {
  return !0;
}
function l2(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Td = [], u2 = !0, Gl = !1, c2 = "skip";
function h2(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Rd(i), s = r ? -1 : 1;
  a(e, void 0, [])();
  function a(l, c, u) {
    const f = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof f.type == "string") {
      const h = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (l.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let h = Td, p, m, g;
      if ((!t || o(l, c, u[u.length - 1] || void 0)) && (h = d2(n(l, u)), h[0] === Gl))
        return h;
      if ("children" in l && l.children) {
        const y = (
          /** @type {UnistParent} */
          l
        );
        if (y.children && h[0] !== c2)
          for (m = (r ? y.children.length : -1) + s, g = u.concat(y); m > -1 && m < y.children.length; ) {
            const x = y.children[m];
            if (p = a(x, m, g)(), p[0] === Gl)
              return p;
            m = typeof p[1] == "number" ? p[1] : m + s;
          }
      }
      return h;
    }
  }
}
function d2(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [u2, e] : e == null ? Td : [e];
}
function Ld(e, t, n, r) {
  let i, o, s;
  typeof t == "function" && typeof n != "function" ? (o = void 0, s = t, i = n) : (o = t, s = n, i = r), h2(e, o, a, i);
  function a(l, c) {
    const u = c[c.length - 1], f = u ? u.children.indexOf(l) : void 0;
    return s(l, f, u);
  }
}
const Co = {}.hasOwnProperty, p2 = {};
function f2(e, t) {
  const n = t || p2, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = { ...Jb, ...n.handlers }, a = {
    all: c,
    applyData: g2,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: s,
    one: l,
    options: n,
    patch: m2,
    wrap: v2
  };
  return Ld(e, function(u) {
    if (u.type === "definition" || u.type === "footnoteDefinition") {
      const f = u.type === "definition" ? r : i, d = String(u.identifier).toUpperCase();
      f.has(d) || f.set(d, u);
    }
  }), a;
  function l(u, f) {
    const d = u.type, h = a.handlers[d];
    if (Co.call(a.handlers, d) && h)
      return h(a, u, f);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in u) {
        const { children: p, ...m } = u, g = Jr(m);
        return g.children = a.all(u), g;
      }
      return Jr(u);
    }
    return (a.options.unknownHandler || y2)(a, u, f);
  }
  function c(u) {
    const f = [];
    if ("children" in u) {
      const d = u.children;
      let h = -1;
      for (; ++h < d.length; ) {
        const p = a.one(d[h], u);
        if (p) {
          if (h && d[h - 1].type === "break" && (!Array.isArray(p) && p.type === "text" && (p.value = Yl(p.value)), !Array.isArray(p) && p.type === "element")) {
            const m = p.children[0];
            m && m.type === "text" && (m.value = Yl(m.value));
          }
          Array.isArray(p) ? f.push(...p) : f.push(p);
        }
      }
    }
    return f;
  }
}
function m2(e, t) {
  e.position && (t.position = Qx(e));
}
function g2(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const s = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: s };
      }
    n.type === "element" && o && Object.assign(n.properties, Jr(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function y2(e, t) {
  const n = t.data || {}, r = "value" in t && !(Co.call(n, "hProperties") || Co.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function v2(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Yl(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Kl(e, t) {
  const n = f2(e, t), r = n.one(e, void 0), i = r2(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function x2(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Kl(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Kl(n, { file: r, ...e || t })
    );
  };
}
function Jl(e) {
  if (e)
    throw e;
}
var ji, Xl;
function b2() {
  if (Xl) return ji;
  Xl = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(l) {
    return typeof Array.isArray == "function" ? Array.isArray(l) : t.call(l) === "[object Array]";
  }, o = function(l) {
    if (!l || t.call(l) !== "[object Object]")
      return !1;
    var c = e.call(l, "constructor"), u = l.constructor && l.constructor.prototype && e.call(l.constructor.prototype, "isPrototypeOf");
    if (l.constructor && !c && !u)
      return !1;
    var f;
    for (f in l)
      ;
    return typeof f > "u" || e.call(l, f);
  }, s = function(l, c) {
    n && c.name === "__proto__" ? n(l, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : l[c.name] = c.newValue;
  }, a = function(l, c) {
    if (c === "__proto__")
      if (e.call(l, c)) {
        if (r)
          return r(l, c).value;
      } else return;
    return l[c];
  };
  return ji = function l() {
    var c, u, f, d, h, p, m = arguments[0], g = 1, y = arguments.length, x = !1;
    for (typeof m == "boolean" && (x = m, m = arguments[1] || {}, g = 2), (m == null || typeof m != "object" && typeof m != "function") && (m = {}); g < y; ++g)
      if (c = arguments[g], c != null)
        for (u in c)
          f = a(m, u), d = a(c, u), m !== d && (x && d && (o(d) || (h = i(d))) ? (h ? (h = !1, p = f && i(f) ? f : []) : p = f && o(f) ? f : {}, s(m, { name: u, newValue: l(x, p, d) })) : typeof d < "u" && s(m, { name: u, newValue: d }));
    return m;
  }, ji;
}
var S2 = b2();
const Oi = /* @__PURE__ */ id(S2);
function Po(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function k2() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const s = i.pop();
    if (typeof s != "function")
      throw new TypeError("Expected function as last argument, not " + s);
    a(null, ...i);
    function a(l, ...c) {
      const u = e[++o];
      let f = -1;
      if (l) {
        s(l);
        return;
      }
      for (; ++f < i.length; )
        (c[f] === null || c[f] === void 0) && (c[f] = i[f]);
      i = c, u ? w2(u, a)(...c) : s(null, ...c);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function w2(e, t) {
  let n;
  return r;
  function r(...s) {
    const a = e.length > s.length;
    let l;
    a && s.push(i);
    try {
      l = e.apply(this, s);
    } catch (c) {
      const u = (
        /** @type {Error} */
        c
      );
      if (a && n)
        throw u;
      return i(u);
    }
    a || (l && l.then && typeof l.then == "function" ? l.then(o, i) : l instanceof Error ? i(l) : o(l));
  }
  function i(s, ...a) {
    n || (n = !0, t(s, ...a));
  }
  function o(s) {
    i(null, s);
  }
}
const Qe = { basename: E2, dirname: _2, extname: C2, join: P2, sep: "/" };
function E2(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  qn(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let s = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      s < 0 && (o = !0, s = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = s));
  return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r);
}
function _2(e) {
  if (qn(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function C2(e) {
  qn(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, s;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (s) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (s = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function P2(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    qn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : A2(n);
}
function A2(e) {
  qn(e);
  const t = e.codePointAt(0) === 47;
  let n = R2(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function R2(e, t) {
  let n = "", r = 0, i = -1, o = 0, s = -1, a, l;
  for (; ++s <= e.length; ) {
    if (s < e.length)
      a = e.codePointAt(s);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === s - 1 || o === 1)) if (i !== s - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
              l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = s, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = s, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
      i = s, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function qn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const T2 = { cwd: L2 };
function L2() {
  return "/";
}
function Ao(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function j2(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Ao(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return O2(e);
}
function O2(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const Mi = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class jd {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? Ao(t) ? n = { path: t } : typeof t == "string" || M2(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : T2.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Mi.length; ) {
      const o = Mi[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Mi.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Qe.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Di(t, "basename"), Ii(t, "basename"), this.path = Qe.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Qe.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Ql(this.basename, "dirname"), this.path = Qe.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Qe.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Ii(t, "extname"), Ql(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Qe.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Ao(t) && (t = j2(t)), Di(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Qe.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Di(t, "stem"), Ii(t, "stem"), this.path = Qe.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Se(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Ii(e, t) {
  if (e && e.includes(Qe.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Qe.sep + "`"
    );
}
function Di(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ql(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function M2(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const I2 = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(e) {
    const t = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), n = t[e], r = function() {
      return n.apply(r, arguments);
    };
    return Object.setPrototypeOf(r, t), r;
  })
), D2 = {}.hasOwnProperty;
class Ts extends I2 {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = k2();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Ts()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Oi(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Bi("data", this.frozen), this.namespace[t] = n, this) : D2.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Bi("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = or(t), r = this.parser || this.Parser;
    return Ni("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Ni("process", this.parser || this.Parser), Fi("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, s) {
      const a = or(t), l = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(l, a, function(u, f, d) {
        if (u || !f || !d)
          return c(u);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), p = r.stringify(h, d);
        B2(p) ? d.value = p : d.result = p, c(
          u,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function c(u, f) {
        u || !f ? s(u) : o ? o(f) : n(void 0, f);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Ni("processSync", this.parser || this.Parser), Fi("processSync", this.compiler || this.Compiler), this.process(t, i), $l("processSync", "process", n), r;
    function i(o, s) {
      n = !0, Jl(o), r = s;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    Zl(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(s, a) {
      const l = or(n);
      i.run(t, l, c);
      function c(u, f, d) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        u ? a(u) : s ? s(h) : r(void 0, h, d);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), $l("runSync", "run", r), i;
    function o(s, a) {
      Jl(s), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = or(n), i = this.compiler || this.Compiler;
    return Fi("stringify", i), Zl(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (Bi("use", this.frozen), t != null) if (typeof t == "function")
      l(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : s(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(c) {
      if (typeof c == "function")
        l(c, []);
      else if (typeof c == "object")
        if (Array.isArray(c)) {
          const [u, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            c
          );
          l(u, f);
        } else
          s(c);
      else
        throw new TypeError("Expected usable value, not `" + c + "`");
    }
    function s(c) {
      if (!("plugins" in c) && !("settings" in c))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(c.plugins), c.settings && (i.settings = Oi(!0, i.settings, c.settings));
    }
    function a(c) {
      let u = -1;
      if (c != null) if (Array.isArray(c))
        for (; ++u < c.length; ) {
          const f = c[u];
          o(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + c + "`");
    }
    function l(c, u) {
      let f = -1, d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === c) {
          d = f;
          break;
        }
      if (d === -1)
        r.push([c, ...u]);
      else if (u.length > 0) {
        let [h, ...p] = u;
        const m = r[d][1];
        Po(m) && Po(h) && (h = Oi(!0, m, h)), r[d] = [c, h, ...p];
      }
    }
  }
}
const N2 = new Ts().freeze();
function Ni(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Fi(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Bi(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Zl(e) {
  if (!Po(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function $l(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function or(e) {
  return F2(e) ? e : new jd(e);
}
function F2(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function B2(e) {
  return typeof e == "string" || V2(e);
}
function V2(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const z2 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", eu = [], tu = { allowDangerousHtml: !0 }, U2 = /^(https?|ircs?|mailto|xmpp)$/i, H2 = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function q2(e) {
  const t = W2(e), n = G2(e);
  return Y2(t.runSync(t.parse(n), n), e);
}
function W2(e) {
  const t = e.rehypePlugins || eu, n = e.remarkPlugins || eu, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...tu } : tu;
  return N2().use(wb).use(n).use(x2, r).use(t);
}
function G2(e) {
  const t = e.children || "", n = new jd();
  return typeof t == "string" && (n.value = t), n;
}
function Y2(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, s = t.skipHtml, a = t.unwrapDisallowed, l = t.urlTransform || K2;
  for (const u of H2)
    Object.hasOwn(t, u.from) && "" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + z2 + u.id;
  return Ld(e, c), n0(e, {
    Fragment: v.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: v.jsx,
    jsxs: v.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function c(u, f, d) {
    if (u.type === "raw" && d && typeof f == "number")
      return s ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: u.value }, f;
    if (u.type === "element") {
      let h;
      for (h in Ri)
        if (Object.hasOwn(Ri, h) && Object.hasOwn(u.properties, h)) {
          const p = u.properties[h], m = Ri[h];
          (m === null || m.includes(u.tagName)) && (u.properties[h] = l(String(p || ""), h, u));
        }
    }
    if (u.type === "element") {
      let h = n ? !n.includes(u.tagName) : o ? o.includes(u.tagName) : !1;
      if (!h && r && typeof f == "number" && (h = !r(u, f, d)), h && d && typeof f == "number")
        return a && u.children ? d.children.splice(f, 1, ...u.children) : d.children.splice(f, 1), f;
    }
  }
}
function K2(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    U2.test(e.slice(0, t)) ? e : ""
  );
}
const J2 = cc(({ label: e, selected: t = !1, onChange: n, noteLabel: r, placeholderLabel: i, emptyLabel: o }) => {
  const [s, a] = ve(!1), l = pe(), { literal: c } = qe(), u = () => {
    a(!0);
  }, f = () => {
    a(!1);
  };
  return /* @__PURE__ */ v.jsxs(
    Dn,
    {
      elevation: t ? 4 : 1,
      sx: {
        width: 250,
        height: "auto",
        minHeight: 150,
        backgroundColor: l.palette.mode === "dark" ? "grey.900" : "warning.light",
        color: "text.primary",
        borderRadius: 1,
        border: t ? `2px solid ${l.palette.warning.main}` : `1px solid ${l.palette.warning.main}`,
        padding: 2,
        display: "flex",
        flexDirection: "column"
      },
      onDoubleClick: u,
      children: [
        /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "caption",
            sx: { fontWeight: "bold", mb: 1, color: "warning.dark" },
            children: "NOTE"
          }
        ),
        /* @__PURE__ */ v.jsx(j, { sx: { flexGrow: 1, overflow: "auto" }, className: "nodrag", children: s ? /* @__PURE__ */ v.jsx(
          jp,
          {
            multiline: !0,
            fullWidth: !0,
            autoFocus: !0,
            placeholder: "Add note here... (Markdown supported)",
            defaultValue: e,
            onChange: (d) => n?.(d.target.value),
            onBlur: f,
            sx: {
              fontSize: "0.9rem",
              fontFamily: "sans-serif",
              alignItems: "flex-start",
              height: "100%"
            }
          }
        ) : /* @__PURE__ */ v.jsx(
          j,
          {
            sx: {
              fontSize: "0.9rem",
              "& p": { m: 0, mb: 1 },
              "& ul, & ol": { m: 0, pl: 2 }
            },
            children: e ? /* @__PURE__ */ v.jsx(q2, { children: e }) : /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "text.secondary", fontStyle: "italic", children: "Double-click to edit" })
          }
        ) })
      ]
    }
  );
});
J2.displayName = "CanvasNote";
const X2 = ({ columns: e, data: t, keyField: n, "aria-label": r }) => /* @__PURE__ */ v.jsx(j, { sx: { width: "100%", overflow: "hidden" }, children: /* @__PURE__ */ v.jsx(
  Dp,
  {
    component: Dn,
    elevation: 0,
    sx: {
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 2,
      backgroundColor: "background.paper"
    },
    children: /* @__PURE__ */ v.jsxs(Np, { stickyHeader: !0, "aria-label": r ?? "data table", children: [
      /* @__PURE__ */ v.jsx(Fp, { children: /* @__PURE__ */ v.jsx(Us, { children: e.map((i) => /* @__PURE__ */ v.jsx(
        Hs,
        {
          align: i.align,
          sx: {
            minWidth: i.minWidth,
            fontWeight: 600,
            backgroundColor: "background.paper",
            borderBottom: "1px solid",
            borderColor: "divider",
            px: L.md,
            py: L.sm
          },
          children: i.label
        },
        i.id
      )) }) }),
      /* @__PURE__ */ v.jsx(Bp, { children: t.map((i) => /* @__PURE__ */ v.jsx(
        Us,
        {
          hover: !0,
          role: "checkbox",
          tabIndex: -1,
          sx: {
            "&:last-child td, &:last-child th": { border: 0 },
            "&:hover": { backgroundColor: "action.hover" }
          },
          children: e.map((o) => /* @__PURE__ */ v.jsx(
            Hs,
            {
              align: o.align,
              sx: { px: L.md, py: L.sm },
              children: o.render ? o.render(i) : i[o.id]
            },
            o.id
          ))
        },
        String(i[n])
      )) })
    ] })
  }
) }), Q2 = (e) => {
  const t = e.split(/\r?\n/).map((o) => o.trim()).filter((o) => o.length > 0);
  if (t.length === 0)
    return { headers: [], rows: [] };
  const n = t[0].includes(";") ? ";" : ",", r = t[0].split(n).map((o) => o.trim()), i = t.slice(1).map((o) => o.split(n).map((s) => s.trim()));
  return { headers: r, rows: i };
}, Z2 = ({ fileName: e, fileContent: t }) => {
  const { literal: n } = qe(), [r, i] = ve(0), [o, s] = ve(10), { headers: a, rows: l } = Q2(t ?? ""), c = a.map((f) => ({
    id: f,
    label: f,
    minWidth: 100
  })), u = l.slice(r * o, r * o + o).map(
    (f, d) => a.reduce(
      (h, p, m) => ({ ...h, [p]: f[m] ?? "" }),
      { __key: String(r * o + d) }
    )
  );
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: L.md
      },
      children: [
        /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "h4",
            sx: { mb: L.md, color: "text.primary" },
            children: e
          }
        ),
        a.length === 0 ? /* @__PURE__ */ v.jsx(F, { variant: "body2", sx: { mb: L.md, color: "text.secondary" }, children: n["viewer.empty_csv"] }) : /* @__PURE__ */ v.jsx(
          X2,
          {
            columns: c,
            data: u,
            keyField: "__key",
            "aria-label": `${e} data`
          }
        ),
        /* @__PURE__ */ v.jsx(
          Ip,
          {
            rowsPerPageOptions: [10, 25, 50],
            component: "div",
            count: l.length,
            rowsPerPage: o,
            page: r,
            onPageChange: (f, d) => i(d),
            onRowsPerPageChange: (f) => {
              s(parseInt(f.target.value, 10)), i(0);
            }
          }
        )
      ]
    }
  );
}, mE = ({
  source: e,
  description: t,
  expiryText: n,
  actions: r
}) => {
  const i = pe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        p: L.md,
        backgroundColor: i.palette.background.paper,
        border: 1,
        borderColor: "divider",
        borderRadius: L.xs
      },
      children: [
        /* @__PURE__ */ v.jsxs(
          j,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              mb: L.md
            },
            children: [
              /* @__PURE__ */ v.jsxs(j, { children: [
                /* @__PURE__ */ v.jsx(
                  F,
                  {
                    variant: "body2Bold",
                    sx: { color: i.palette.text.primary },
                    children: e
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  F,
                  {
                    variant: "body1",
                    sx: { color: i.palette.text.secondary, mt: L.xs },
                    children: t
                  }
                )
              ] }),
              /* @__PURE__ */ v.jsx(
                F,
                {
                  variant: "monoBody",
                  sx: { color: i.palette.error.main },
                  children: n
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ v.jsx(j, { sx: { display: "flex", gap: L.sm }, children: r.map((o) => /* @__PURE__ */ v.jsx(
          Pe,
          {
            variant: o.variant,
            size: "small",
            color: o.color,
            disabled: o.disabled,
            onClick: o.onClick,
            sx: o.variant === "text" ? { color: i.palette.text.secondary } : void 0,
            children: o.label
          },
          o.label
        )) })
      ]
    }
  );
}, Vi = 240, gE = (e) => {
  const {
    sortedFeatures: t,
    UiFeatureList: n,
    container: r,
    // Renamed prop
    onMenuItemClick: i,
    // <-- This is the handler passed from useHome
    mobileOpen: o,
    handleDrawerToggle: s
  } = e, a = (u) => {
    i(u);
  }, l = () => !t || t.length === 0 ? /* @__PURE__ */ v.jsx(Ws, {}) : /* @__PURE__ */ v.jsx(Ws, { children: t.map((u) => {
    const { id: f, name: d, display_order: h, icon: p } = u;
    return n[d] ? /* @__PURE__ */ v.jsx(cf, { disablePadding: !0, children: /* @__PURE__ */ v.jsxs(
      hf,
      {
        onClick: () => a(h - 1),
        children: [
          /* @__PURE__ */ v.jsx(df, { children: /* @__PURE__ */ v.jsx(p, {}) }),
          /* @__PURE__ */ v.jsx(pf, { primary: d })
        ]
      }
    ) }, f) : null;
  }) }), c = () => /* @__PURE__ */ v.jsxs("div", { children: [
    /* @__PURE__ */ v.jsx(gc, {}),
    /* @__PURE__ */ v.jsx(ff, {}),
    l()
  ] });
  return /* @__PURE__ */ v.jsxs(
    mf,
    {
      component: "nav",
      sx: { width: { sm: Vi }, flexShrink: { sm: 0 } },
      "aria-label": "mailbox folders",
      children: [
        /* @__PURE__ */ v.jsx(
          Gs,
          {
            container: r,
            variant: "temporary",
            open: o,
            onClose: s,
            ModalProps: {
              keepMounted: !0
            },
            sx: {
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: Vi
              }
            },
            children: c()
          }
        ),
        /* @__PURE__ */ v.jsx(
          Gs,
          {
            variant: "permanent",
            sx: {
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: Vi
              }
            },
            open: !0,
            children: c()
          }
        )
      ]
    }
  );
}, $2 = 40, eS = 150, tS = 100, yE = ({
  id: e,
  title: t,
  secondaryLabel: n,
  statusTag: r,
  confidence: i,
  confidenceLabel: o,
  showDivider: s = !1
}) => {
  const a = pe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        p: L.md,
        borderTop: s ? 1 : 0,
        borderColor: "divider"
      },
      children: [
        /* @__PURE__ */ v.jsx(j, { sx: { width: $2 }, children: /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "micro",
            sx: { color: a.palette.text.secondary },
            children: e
          }
        ) }),
        /* @__PURE__ */ v.jsxs(j, { sx: { flexGrow: 1 }, children: [
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "body2Bold",
              sx: { color: a.palette.text.primary },
              children: t
            }
          ),
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "caption",
              sx: { color: a.palette.text.secondary },
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(j, { sx: { width: eS }, children: /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "captionBold",
            sx: {
              px: L.sm,
              py: L.internal,
              borderRadius: L.internal,
              backgroundColor: `${a.palette.primary.main}20`,
              color: a.palette.primary.main
            },
            children: r.toUpperCase()
          }
        ) }),
        /* @__PURE__ */ v.jsxs(j, { sx: { width: tS, textAlign: "right" }, children: [
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "caption",
              sx: { color: a.palette.text.secondary },
              children: o
            }
          ),
          /* @__PURE__ */ v.jsxs(
            F,
            {
              variant: "body2Bold",
              sx: { color: a.palette.text.primary },
              children: [
                i,
                "%"
              ]
            }
          )
        ] })
      ]
    }
  );
}, vE = ({
  children: e,
  titleText: t = "Authentication",
  enableDragRegion: n = !1
}) => /* @__PURE__ */ v.jsxs(
  j,
  {
    sx: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    },
    children: [
      /* @__PURE__ */ v.jsx(
        j,
        {
          sx: {
            height: 40,
            px: L.md,
            display: "flex",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "divider",
            ...n ? { WebkitAppRegion: "drag" } : {}
          },
          children: /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "body2",
              color: "text.secondary",
              sx: { letterSpacing: 0.2 },
              children: t
            }
          )
        }
      ),
      /* @__PURE__ */ v.jsx(
        j,
        {
          sx: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: L.lg,
            py: L.xl
          },
          children: e
        }
      )
    ]
  }
), xE = ({
  title: e,
  subTitle: t,
  color: n,
  Icon: r,
  tags: i = [],
  index: o,
  t: s
}) => {
  const a = pe();
  return /* @__PURE__ */ v.jsx(
    ue.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { delay: o * 0.1, duration: 0.5 },
      style: { height: "100%" },
      children: /* @__PURE__ */ v.jsxs(
        j,
        {
          sx: {
            height: "100%",
            p: L.xl,
            borderRadius: L.md,
            position: "relative",
            overflow: "hidden",
            background: a.palette.mode === "dark" ? `linear-gradient(180deg, ${a.palette.background.paper} 0%, transparent 100%)` : a.palette.background.paper,
            backdropFilter: "blur(12px)",
            border: `1px solid ${a.palette.divider}`,
            boxShadow: a.shadows[1],
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: a.shadows[4],
              borderColor: a.palette.primary.main
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          },
          children: [
            /* @__PURE__ */ v.jsx(
              j,
              {
                sx: {
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  bgcolor: `${n}15`,
                  color: n,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3
                },
                children: /* @__PURE__ */ v.jsx(r, { size: 32, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "h6",
                sx: { color: "text.primary", fontWeight: 700, mb: 1 },
                children: s(e)
              }
            ),
            /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "subtitle2",
                color: "text.secondary",
                sx: {
                  mb: 3,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.75rem"
                },
                children: s(t)
              }
            ),
            /* @__PURE__ */ v.jsx(
              j,
              {
                sx: {
                  mt: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  width: "100%"
                },
                children: i.map((l, c) => /* @__PURE__ */ v.jsx(
                  j,
                  {
                    sx: {
                      py: 1,
                      px: 2,
                      borderRadius: "4px",
                      bgcolor: "action.hover",
                      color: "text.primary",
                      fontSize: "0.875rem"
                    },
                    children: s(l)
                  },
                  c
                ))
              }
            )
          ]
        }
      )
    }
  );
}, nS = ({
  nodes: e,
  expandedIds: t,
  selectedId: n,
  onToggle: r,
  onSelect: i,
  level: o = 0
}) => /* @__PURE__ */ v.jsx(Vp, { component: "div", disablePadding: !0, children: e.map((s) => {
  const a = t.has(s.id), l = n === s.id, c = s.childrenNodes?.length;
  return /* @__PURE__ */ v.jsxs(Fr.Fragment, { children: [
    /* @__PURE__ */ v.jsxs(
      zp,
      {
        sx: { pl: 2 * o + 2 },
        selected: l,
        onClick: () => s.type === "folder" ? r(s.id) : i(s.id),
        children: [
          /* @__PURE__ */ v.jsx(Up, { sx: { minWidth: 32 }, children: s.type === "folder" ? a ? /* @__PURE__ */ v.jsx(yf, { fontSize: "small" }) : /* @__PURE__ */ v.jsx(gf, { fontSize: "small" }) : /* @__PURE__ */ v.jsx(vf, { fontSize: "small" }) }),
          /* @__PURE__ */ v.jsx(
            Hp,
            {
              primary: s.name,
              secondary: s.secondaryLabel || null,
              primaryTypographyProps: { variant: "body2" },
              secondaryTypographyProps: { variant: "caption", fontSize: "0.7rem" }
            }
          ),
          s.type === "folder" && c ? a ? /* @__PURE__ */ v.jsx(xf, {}) : /* @__PURE__ */ v.jsx(bf, {}) : null
        ]
      }
    ),
    s.type === "folder" && c && /* @__PURE__ */ v.jsx(qp, { in: a, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ v.jsx(
      nS,
      {
        nodes: s.childrenNodes,
        expandedIds: t,
        selectedId: n,
        onToggle: r,
        onSelect: i,
        level: o + 1
      }
    ) })
  ] }, s.id);
}) }), bE = ({
  fileName: e,
  fileContent: t,
  fileEncoding: n,
  mimeType: r
}) => {
  const { literal: i } = qe(), o = e.split(".").pop()?.toLowerCase(), s = i["viewer.unsupported"] ?? "⚠️", a = i["viewer.extension"] ?? "📄";
  switch (o) {
    case "csv":
      return /* @__PURE__ */ v.jsx(Z2, { fileName: e, fileContent: t });
    case "md":
    case "markdown":
    case "txt":
      return /* @__PURE__ */ v.jsx(Df, { fileName: e, fileContent: t });
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "svg":
    case "webp":
      return /* @__PURE__ */ v.jsx(
        Mf,
        {
          fileName: e,
          fileContent: t,
          fileEncoding: n,
          mimeType: r
        }
      );
    case "json":
    case "jsonl":
      return /* @__PURE__ */ v.jsx(Vf, { fileName: e, fileContent: t });
    default:
      return /* @__PURE__ */ v.jsxs(j, { sx: { p: L.lg, textAlign: "center" }, children: [
        /* @__PURE__ */ v.jsx(F, { variant: "h4", children: s }),
        /* @__PURE__ */ v.jsxs(F, { variant: "body2", color: "text.secondary", children: [
          a,
          ": .",
          o
        ] })
      ] });
  }
}, SE = ({ title: e, children: t, actions: n }) => /* @__PURE__ */ v.jsxs(j, { sx: { display: "flex", flexDirection: "column", gap: L.xl, maxWidth: "600px" }, children: [
  e && /* @__PURE__ */ v.jsx(F, { variant: "h5", color: "text.primary", children: e }),
  /* @__PURE__ */ v.jsx(j, { sx: { display: "flex", flexDirection: "column", gap: L.lg }, children: t }),
  n && /* @__PURE__ */ v.jsx(j, { sx: { display: "flex", gap: L.md, mt: L.md, pt: L.lg, borderTop: "1px solid", borderColor: "divider" }, children: n })
] }), kE = ({ title: e, description: t, Icon: n, index: r, t: i }) => {
  const o = pe();
  return /* @__PURE__ */ v.jsx(
    ue.div,
    {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: !0 },
      transition: { delay: r * 0.1, duration: 0.5 },
      children: /* @__PURE__ */ v.jsxs(
        j,
        {
          sx: {
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: 2, md: 3 },
            mb: 4,
            p: { xs: 2, md: 3 },
            borderRadius: "8px",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "action.hover",
            "&:hover": {
              bgcolor: "action.selected",
              borderColor: o.palette.primary.main
            },
            transition: "all 0.3s ease"
          },
          children: [
            /* @__PURE__ */ v.jsx(j, { sx: { color: o.palette.primary.main, mt: 0.5 }, children: /* @__PURE__ */ v.jsx(n, { size: 24 }) }),
            /* @__PURE__ */ v.jsxs(j, { children: [
              /* @__PURE__ */ v.jsx(F, { variant: "h6", sx: { fontWeight: 600, color: "text.primary", mb: 1 }, children: i(e) }),
              /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.6 }, children: i(t) })
            ] })
          ]
        }
      )
    }
  );
}, rS = ({
  label: e,
  description: t,
  Icon: n,
  isActive: r,
  onClick: i,
  index: o
}) => {
  const s = pe();
  return /* @__PURE__ */ v.jsxs(
    ue.div,
    {
      layout: !0,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: o * 0.1 },
      onClick: i,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
        zIndex: 1
      },
      children: [
        /* @__PURE__ */ v.jsx(
          ue.div,
          {
            animate: {
              scale: r ? 1.2 : 1,
              backgroundColor: r ? s.palette.primary.main : s.palette.action.hover,
              color: r ? s.palette.primary.contrastText : s.palette.text.secondary,
              boxShadow: r ? `0 0 20px ${s.palette.primary.main}40` : "none"
            },
            style: {
              padding: "1.5rem",
              borderRadius: "50%",
              marginBottom: "1rem",
              border: `1px solid ${r ? s.palette.primary.main : s.palette.divider}`,
              transition: "border-color 0.3s ease"
            },
            children: /* @__PURE__ */ v.jsx(n, { size: 32, strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ v.jsxs(
          ue.div,
          {
            animate: { opacity: r ? 1 : 0.6 },
            style: { textAlign: "center" },
            children: [
              /* @__PURE__ */ v.jsx("h3", { style: {
                margin: "0 0 0.5rem 0",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: s.palette.text.primary
              }, children: e }),
              /* @__PURE__ */ v.jsx("p", { style: {
                margin: 0,
                fontSize: "0.85rem",
                color: s.palette.text.secondary,
                maxWidth: "140px"
              }, children: t })
            ]
          }
        )
      ]
    }
  );
}, wE = ({ flows: e, activeStepId: t, onStepChange: n, t: r }) => {
  const i = pe(), o = e.flatMap((a) => a.steps), s = (a, l) => /* @__PURE__ */ v.jsxs(j, { sx: { mb: 8 }, children: [
    /* @__PURE__ */ v.jsx(F, { variant: "h5", color: "primary", sx: { mb: 4, fontWeight: 700, textAlign: "center" }, children: r(a) }),
    /* @__PURE__ */ v.jsxs(
      j,
      {
        sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          gap: 2,
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ v.jsx(
            j,
            {
              sx: {
                position: "absolute",
                top: "50%",
                left: "5%",
                right: "5%",
                height: "2px",
                background: i.palette.mode === "dark" ? "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)" : "linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)",
                transform: "translateY(-50%)",
                zIndex: -1,
                display: { xs: "none", md: "block" }
              }
            }
          ),
          l.map((c, u) => /* @__PURE__ */ v.jsxs(Fr.Fragment, { children: [
            /* @__PURE__ */ v.jsx(
              rS,
              {
                index: u,
                label: r(c.label),
                description: r(c.description),
                Icon: c.Icon,
                isActive: t === c.id,
                onClick: () => n(c.id)
              }
            ),
            u < l.length - 1 && /* @__PURE__ */ v.jsx(
              j,
              {
                sx: {
                  alignSelf: "center",
                  opacity: 0.2,
                  display: { xs: "none", md: "block" }
                },
                children: /* @__PURE__ */ v.jsx(kx, { size: 24 })
              }
            )
          ] }, c.id))
        ]
      }
    )
  ] });
  return /* @__PURE__ */ v.jsx(j, { sx: { py: 8, position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ v.jsxs(Yp, { maxWidth: "lg", children: [
    e.map((a, l) => /* @__PURE__ */ v.jsx(Fr.Fragment, { children: s(a.titleKey, a.steps) }, l)),
    /* @__PURE__ */ v.jsx(Gf, { mode: "wait", children: t && /* @__PURE__ */ v.jsxs(
      ue.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.3 },
        style: {
          marginTop: "2rem",
          textAlign: "center",
          padding: "2rem",
          background: i.palette.background.paper,
          borderRadius: "16px",
          border: `1px solid ${i.palette.divider}`,
          backdropFilter: "blur(10px)"
        },
        children: [
          /* @__PURE__ */ v.jsx(F, { variant: "h5", color: "primary", gutterBottom: !0, children: r(o.find((a) => a.id === t)?.label || "") }),
          /* @__PURE__ */ v.jsx(F, { variant: "body1", color: "text.secondary", sx: { maxWidth: "600px", mx: "auto" }, children: r(o.find((a) => a.id === t)?.description || "") })
        ]
      },
      t
    ) })
  ] }) });
}, iS = (e, t) => {
  switch (e) {
    case "completed":
      return t.success.main;
    case "in-progress":
      return t.info.main;
    case "blocked":
      return t.error.main;
    default:
      return t.grey[500];
  }
}, EE = ({ steps: e, currentStepId: t }) => {
  const n = pe();
  return /* @__PURE__ */ v.jsx(j, { sx: { width: "100%" }, children: /* @__PURE__ */ v.jsx(
    j,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: L.sm,
        flexWrap: "wrap"
      },
      children: e.map((r, i) => {
        const o = r.id === t, s = r.status ?? (o ? "in-progress" : "not-started"), a = iS(s, n.palette);
        return /* @__PURE__ */ v.jsxs(
          j,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              flex: 1,
              minWidth: 160
            },
            children: [
              /* @__PURE__ */ v.jsxs(
                j,
                {
                  sx: { display: "flex", alignItems: "center", gap: L.xs },
                  children: [
                    /* @__PURE__ */ v.jsx(
                      j,
                      {
                        "aria-hidden": !0,
                        sx: {
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: a,
                          boxShadow: o ? `0 0 0 3px ${n.palette.action.hover}` : "none",
                          flexShrink: 0
                        }
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      F,
                      {
                        variant: "body2",
                        sx: {
                          color: o ? n.palette.text.primary : n.palette.text.secondary,
                          fontWeight: o ? 600 : 400
                        },
                        children: r.shortLabel ?? r.label
                      }
                    )
                  ]
                }
              ),
              i < e.length - 1 && /* @__PURE__ */ v.jsx(
                j,
                {
                  "aria-hidden": !0,
                  sx: {
                    flex: 1,
                    height: 1,
                    ml: L.sm,
                    mr: L.sm,
                    backgroundColor: n.palette.divider
                  }
                }
              )
            ]
          },
          r.id
        );
      })
    }
  ) });
}, _E = ({
  title: e,
  subtitle: t,
  summaryItems: n,
  actions: r = [],
  footerText: i,
  isBusy: o = !1
}) => /* @__PURE__ */ v.jsx(
  j,
  {
    sx: {
      border: 1,
      borderColor: "divider",
      borderRadius: 2,
      p: L.lg,
      backgroundColor: "background.paper"
    },
    children: /* @__PURE__ */ v.jsxs(eo, { spacing: L.md, children: [
      /* @__PURE__ */ v.jsxs(j, { children: [
        /* @__PURE__ */ v.jsx(F, { variant: "h6", sx: { mb: L.xs }, children: e }),
        t && /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "text.secondary", children: t })
      ] }),
      /* @__PURE__ */ v.jsx(eo, { spacing: L.sm, children: n.map((s) => /* @__PURE__ */ v.jsxs(
        j,
        {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: L.md
          },
          children: [
            /* @__PURE__ */ v.jsxs(
              j,
              {
                sx: { display: "flex", alignItems: "center", gap: L.xs },
                children: [
                  /* @__PURE__ */ v.jsx(Fo, { tone: s.tone ?? "default", size: 8 }),
                  /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "text.secondary", children: s.label })
                ]
              }
            ),
            /* @__PURE__ */ v.jsx(F, { variant: "body2", sx: { fontWeight: 600 }, children: s.value })
          ]
        },
        s.label
      )) }),
      r.length > 0 && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(mc, {}),
        /* @__PURE__ */ v.jsx(j, { sx: { display: "flex", gap: L.sm, flexWrap: "wrap" }, children: r.map((s) => /* @__PURE__ */ v.jsx(
          Pe,
          {
            variant: "outlined",
            size: "small",
            onClick: s.onClick,
            disabled: o || s.disabled,
            children: s.label
          },
          s.id
        )) })
      ] }),
      i && /* @__PURE__ */ v.jsx(F, { variant: "caption", color: "text.secondary", children: i })
    ] })
  }
), CE = ({ title: e, artist: t, category: n, duration: r, coverUrl: i, isPlaying: o, onPlay: s, t: a }) => {
  const l = pe();
  return /* @__PURE__ */ v.jsxs(
    ue.div,
    {
      whileHover: { y: -5 },
      onClick: s,
      style: { cursor: "pointer" },
      children: [
        /* @__PURE__ */ v.jsxs(
          j,
          {
            sx: {
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              aspectRatio: "1/1",
              mb: 2,
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
            },
            children: [
              /* @__PURE__ */ v.jsx(
                "img",
                {
                  src: i,
                  alt: e,
                  style: { width: "100%", height: "100%", objectFit: "cover" }
                }
              ),
              /* @__PURE__ */ v.jsx(
                j,
                {
                  sx: {
                    position: "absolute",
                    inset: 0,
                    bgcolor: l.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: o ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": { opacity: 1 }
                  },
                  children: /* @__PURE__ */ v.jsx(
                    j,
                    {
                      sx: {
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: l.palette.action.hover,
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${l.palette.divider}`
                      },
                      children: /* @__PURE__ */ v.jsx(gs, { size: 20, fill: l.palette.common.white, color: l.palette.common.white })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ v.jsx(F, { variant: "h6", sx: { color: l.palette.text.primary, fontWeight: 600, fontSize: "1rem", mb: 0.5 }, children: a(e) }),
        t && /* @__PURE__ */ v.jsx(F, { variant: "subtitle2", sx: { color: l.palette.secondary.main, fontSize: "0.85rem", mb: 0.5, fontWeight: 500 }, children: a(t) }),
        /* @__PURE__ */ v.jsxs(F, { variant: "body2", sx: { color: l.palette.text.secondary }, children: [
          n,
          " • ",
          r
        ] })
      ]
    }
  );
}, PE = ({ name: e, nameKey: t, role: n, bio: r, imageUrl: i, themeColor: o, primaryBadge: s, secondaryMetadata: a, t: l }) => {
  const c = pe();
  return /* @__PURE__ */ v.jsxs(
    ue.div,
    {
      className: "profile-reveal-card",
      initial: "rest",
      whileHover: "hover",
      animate: "rest",
      style: {
        position: "relative",
        width: "100%",
        aspectRatio: "2/3",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: c.palette.background.paper
      },
      children: [
        /* @__PURE__ */ v.jsx(
          ue.img,
          {
            src: i,
            alt: e,
            variants: {
              rest: { scale: 1, filter: "brightness(0.8) grayscale(0.2)" },
              hover: { scale: 1.1, filter: "brightness(1) grayscale(0)" }
            },
            transition: { duration: 0.4 },
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ),
        /* @__PURE__ */ v.jsx(
          j,
          {
            sx: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: { xs: 2, md: 3 },
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              background: `linear-gradient(to top, ${c.palette.background.paper} 0%, transparent 100%)`,
              backdropFilter: "blur(4px)",
              borderTop: `1px solid ${c.palette.divider}`
            },
            children: /* @__PURE__ */ v.jsxs(
              ue.div,
              {
                variants: {
                  rest: { y: 20 },
                  hover: { y: 0 }
                },
                transition: { duration: 0.3 },
                children: [
                  /* @__PURE__ */ v.jsx(
                    F,
                    {
                      variant: "h5",
                      sx: {
                        fontWeight: 700,
                        color: c.palette.text.primary,
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                      },
                      children: l(t)
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    F,
                    {
                      variant: "subtitle2",
                      sx: {
                        color: o,
                        fontWeight: 600,
                        mb: 2,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em"
                      },
                      children: l(n)
                    }
                  ),
                  /* @__PURE__ */ v.jsxs(
                    ue.div,
                    {
                      variants: {
                        rest: { opacity: 0, height: 0 },
                        hover: { opacity: 1, height: "auto" }
                      },
                      transition: { duration: 0.3 },
                      children: [
                        /* @__PURE__ */ v.jsx(
                          F,
                          {
                            variant: "body2",
                            sx: {
                              color: c.palette.text.secondary,
                              mb: 2,
                              lineHeight: 1.6
                            },
                            children: l(r)
                          }
                        ),
                        s && /* @__PURE__ */ v.jsx(j, { sx: { mb: 1 }, children: /* @__PURE__ */ v.jsx(
                          F,
                          {
                            variant: "caption",
                            sx: {
                              color: o,
                              fontWeight: 600,
                              letterSpacing: "0.05em",
                              display: "inline-block",
                              px: 1.5,
                              py: 0.5,
                              border: `1px solid ${o}`,
                              borderRadius: 1,
                              backgroundColor: `${o}20`
                            },
                            children: l(s)
                          }
                        ) }),
                        a && /* @__PURE__ */ v.jsx(
                          F,
                          {
                            variant: "caption",
                            sx: {
                              color: c.palette.text.disabled,
                              mb: 2,
                              display: "block",
                              fontStyle: "italic"
                            },
                            children: l(a)
                          }
                        ),
                        /* @__PURE__ */ v.jsx(Jp, { title: l("common.voice_coming_soon"), arrow: !0, children: /* @__PURE__ */ v.jsxs(j, { sx: { display: "flex", alignItems: "center", gap: 1, mt: 1, opacity: 0.7, cursor: "not-allowed" }, children: [
                          /* @__PURE__ */ v.jsx(
                            j,
                            {
                              sx: {
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                bgcolor: "rgba(255,255,255,0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid rgba(255,255,255,0.2)"
                              },
                              children: /* @__PURE__ */ v.jsx(gs, { size: 14, fill: "white" })
                            }
                          ),
                          /* @__PURE__ */ v.jsx(F, { variant: "caption", sx: { color: "rgba(255,255,255,0.5)" }, children: l("common.voice_preview") })
                        ] }) })
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}, An = {
  sans: '"Inter", "Segoe UI", "Helvetica Neue", sans-serif',
  mono: '"IBM Plex Mono", "Menlo", "Courier New", monospace'
}, Od = {
  fontFamily: An.sans,
  // Headings: Confident and readable (Rule 3)
  h1: { fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 },
  h2: { fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.3 },
  h3: { fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.4 },
  h4: { fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.4 },
  h5: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.5 },
  h6: { fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1.5 },
  // Body: Effortless to scan
  body1: { fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.5 },
  // 15px is extremely common in premium Electron apps (Linear, Slack)
  body2: { fontSize: "0.8125rem", fontWeight: 400, lineHeight: 1.5 },
  // 13px standard
  body2Medium: { fontSize: "0.8125rem", fontWeight: 500, lineHeight: 1.5 },
  // 13px medium weight
  body2Bold: { fontSize: "0.8125rem", fontWeight: 600, lineHeight: 1.5 },
  // 13px bold weight
  // UI Elements
  button: { fontSize: "0.875rem", fontWeight: 500, textTransform: "none", letterSpacing: "0" },
  caption: { fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.4 },
  // 12px standard
  captionBold: { fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.4 },
  // 12px bold
  micro: { fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1.2 },
  // 10px uppercase badging
  // Custom Data Typography
  monoBody: { fontFamily: An.mono, fontSize: "0.8125rem", fontWeight: 400, lineHeight: 1.5 },
  monoCaption: { fontFamily: An.mono, fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.4 },
  // Specialized Display
  splashTitle: { fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5 },
  // h6 with wider tracking
  splashSubtitle: { fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", lineHeight: 1.4 }
  // caption with wider tracking
}, oS = {
  title: "Review Decision",
  selectAction: "Choose an action below.",
  approveLabel: "Approve",
  rejectLabel: "Reject",
  confirmApprove: "Confirm Approve",
  confirmReject: "Confirm Reject",
  approveNote: "Approval Note (Optional)",
  approveNotePlaceholder: "Record optional feedback...",
  rejectNote: "Rejection Reason (Required)",
  rejectNotePlaceholder: "Explain why this is rejected so follow-up is actionable...",
  noteMinLength: "Minimum 4 characters required",
  noteRequired: "Required: provide feedback for improvement",
  cancel: "Cancel",
  back: "Back"
}, AE = ({
  isOpen: e,
  mode: t,
  entityType: n,
  entityName: r,
  entitySummary: i,
  approveNote: o,
  rejectNote: s,
  onModeChange: a,
  onApproveNoteChange: l,
  onRejectNoteChange: c,
  onApprove: u,
  onReject: f,
  onCancel: d,
  isLoading: h = !1,
  minRejectNoteLength: p = 4,
  labels: m
}) => {
  const g = pe(), y = { ...oS, ...m }, x = t === "reject", k = t === "approve", S = s.trim().length >= p, b = () => {
    u(o), d();
  }, w = () => {
    S && (f(s), d());
  };
  return /* @__PURE__ */ v.jsxs(
    Xp,
    {
      open: e,
      onClose: d,
      maxWidth: "sm",
      fullWidth: !0,
      "aria-labelledby": "review-decision-dialog",
      children: [
        /* @__PURE__ */ v.jsx(Qp, { id: "review-decision-dialog", children: y.title }),
        /* @__PURE__ */ v.jsx(Zp, { children: /* @__PURE__ */ v.jsxs(eo, { spacing: L.md, sx: { pt: L.md }, children: [
          /* @__PURE__ */ v.jsxs(j, { children: [
            /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "subtitle2",
                sx: { mb: L.xs },
                children: n
              }
            ),
            r && /* @__PURE__ */ v.jsxs(F, { variant: "body2", color: "textSecondary", children: [
              /* @__PURE__ */ v.jsx("strong", { children: "Name:" }),
              " ",
              r
            ] }),
            i && /* @__PURE__ */ v.jsx(
              j,
              {
                sx: {
                  mt: L.xs,
                  p: L.xs,
                  backgroundColor: "background.default",
                  borderRadius: 1,
                  fontFamily: An.mono,
                  fontSize: g.typography.caption.fontSize,
                  maxHeight: 200,
                  overflowY: "auto",
                  wordBreak: "break-word"
                },
                children: /* @__PURE__ */ v.jsx(F, { variant: "body2", component: "pre", sx: { m: 0 }, children: i })
              }
            )
          ] }),
          t === "idle" && /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "textSecondary", children: y.selectAction }),
          k && /* @__PURE__ */ v.jsx(
            qs,
            {
              label: y.approveNote,
              placeholder: y.approveNotePlaceholder,
              multiline: !0,
              rows: 3,
              value: o,
              onChange: (_) => l(_.target.value),
              fullWidth: !0,
              disabled: h,
              variant: "outlined",
              size: "small"
            }
          ),
          x && /* @__PURE__ */ v.jsx(
            qs,
            {
              label: y.rejectNote,
              placeholder: y.rejectNotePlaceholder,
              multiline: !0,
              rows: 3,
              value: s,
              onChange: (_) => c(_.target.value),
              fullWidth: !0,
              disabled: h,
              variant: "outlined",
              size: "small",
              error: s.trim().length > 0 && s.trim().length < p,
              helperText: s.trim().length > 0 && s.trim().length < p ? y.noteMinLength : y.noteRequired
            }
          )
        ] }) }),
        /* @__PURE__ */ v.jsxs($p, { sx: { p: L.md }, children: [
          t === "idle" && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(Pe, { onClick: d, disabled: h, children: y.cancel }),
            /* @__PURE__ */ v.jsx(
              Pe,
              {
                onClick: () => a("approve"),
                variant: "contained",
                color: "success",
                disabled: h,
                children: y.approveLabel
              }
            ),
            /* @__PURE__ */ v.jsx(
              Pe,
              {
                onClick: () => a("reject"),
                variant: "contained",
                color: "error",
                disabled: h,
                children: y.rejectLabel
              }
            )
          ] }),
          k && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(Pe, { onClick: () => a("idle"), disabled: h, children: y.back }),
            /* @__PURE__ */ v.jsx(
              Pe,
              {
                onClick: b,
                variant: "contained",
                color: "success",
                disabled: h,
                children: y.confirmApprove
              }
            )
          ] }),
          x && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(Pe, { onClick: () => a("idle"), disabled: h, children: y.back }),
            /* @__PURE__ */ v.jsx(
              Pe,
              {
                onClick: w,
                variant: "contained",
                color: "error",
                disabled: h || !S,
                children: y.confirmReject
              }
            )
          ] })
        ] })
      ]
    }
  );
}, RE = ({
  id: e,
  title: t,
  subtitle: n,
  statusLabel: r,
  statusColor: i,
  lastChecked: o,
  lastCheckedLabel: s,
  isConnectDisabled: a = !1,
  onDelete: l,
  onConnect: c,
  onCheckStatus: u,
  connectLabel: f,
  loadingLabel: d
}) => {
  const { literal: h } = qe(), [p, m] = ve(!1), [g, y] = ve(!1), x = h["time.last_checked"] || s, k = h["ui.connect"] || f, S = h["msg.loading"] || d, b = async () => {
    if (u) {
      m(!0);
      try {
        await u(e);
      } finally {
        m(!1);
      }
    }
  }, w = async () => {
    if (c) {
      y(!0);
      try {
        await c(e);
      } finally {
        y(!1);
      }
    }
  }, _ = (() => {
    switch (i) {
      case "success":
        return "success.main";
      case "error":
        return "error.main";
      case "warning":
        return "warning.main";
      case "info":
        return "info.main";
      default:
        return "text.secondary";
    }
  })();
  return /* @__PURE__ */ v.jsx(
    ef,
    {
      elevation: 0,
      sx: {
        mb: L.md,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          backgroundColor: _
        }
      },
      children: /* @__PURE__ */ v.jsx(tf, { sx: { pl: L.lg }, children: /* @__PURE__ */ v.jsxs(j, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [
        /* @__PURE__ */ v.jsxs(j, { children: [
          /* @__PURE__ */ v.jsx(F, { variant: "h6", fontWeight: "bold", color: "text.primary", children: t }),
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "body2",
              color: "text.secondary",
              sx: { mb: L.md },
              children: n
            }
          ),
          /* @__PURE__ */ v.jsxs(j, { display: "flex", alignItems: "center", gap: L.sm, children: [
            /* @__PURE__ */ v.jsx(
              to,
              {
                label: r,
                size: "small",
                sx: {
                  bgcolor: `${_}20`,
                  color: _,
                  fontWeight: 700,
                  border: `1px solid ${_}`
                }
              }
            ),
            u && /* @__PURE__ */ v.jsx(
              ft,
              {
                size: "small",
                onClick: b,
                disabled: p,
                sx: { ml: L.sm },
                children: /* @__PURE__ */ v.jsx(
                  kf,
                  {
                    fontSize: "small",
                    sx: {
                      animation: p ? "spin 1s linear infinite" : "none",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" }
                      }
                    }
                  }
                )
              }
            ),
            o && /* @__PURE__ */ v.jsxs(F, { variant: "caption", color: "text.disabled", children: [
              x,
              ": ",
              o
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs(j, { display: "flex", gap: 1, children: [
          l && /* @__PURE__ */ v.jsx(
            ft,
            {
              onClick: () => l(e),
              color: "error",
              size: "small",
              children: /* @__PURE__ */ v.jsx(Sf, {})
            }
          ),
          c && /* @__PURE__ */ v.jsx(
            Pe,
            {
              variant: "contained",
              startIcon: !g && /* @__PURE__ */ v.jsx(wf, {}),
              onClick: w,
              disabled: a || g,
              sx: {
                minWidth: 120,
                opacity: a ? 0.6 : 1
              },
              children: g ? S : k
            }
          )
        ] })
      ] }) })
    }
  );
}, sS = 150, TE = ({
  domain: e,
  statusLine: t,
  health: n,
  showDivider: r = !1
}) => {
  const i = pe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        p: L.md,
        borderTop: r ? 1 : 0,
        borderColor: "divider"
      },
      children: [
        /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "body2Medium",
            sx: {
              width: sS,
              color: i.palette.text.primary
            },
            children: e
          }
        ),
        /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "body2",
            sx: { flexGrow: 1, color: i.palette.text.secondary },
            children: t
          }
        ),
        /* @__PURE__ */ v.jsx(Fo, { tone: n, size: 8 })
      ]
    }
  );
}, LE = ({
  id: e,
  summary: t,
  source: n,
  classification: r
}) => {
  const i = pe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        p: L.md,
        backgroundColor: i.palette.background.paper,
        border: 1,
        borderColor: "divider",
        borderRadius: L.xs,
        display: "flex",
        alignItems: "center",
        gap: L.md
      },
      children: [
        /* @__PURE__ */ v.jsx(
          j,
          {
            sx: {
              background: i.palette.divider,
              borderRadius: L.internal,
              px: L.sm,
              py: L.internal
            },
            children: /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "monoBody",
                sx: { color: i.palette.text.secondary },
                children: e
              }
            )
          }
        ),
        /* @__PURE__ */ v.jsxs(j, { sx: { flexGrow: 1 }, children: [
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "body2Bold",
              sx: { color: i.palette.text.primary },
              children: t
            }
          ),
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "caption",
              sx: { color: i.palette.text.secondary },
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(vc, { level: r })
      ]
    }
  );
}, aS = {
  ERROR: "error.main",
  WARN: "warning.main",
  INFO: "success.main"
}, jE = ({
  logs: e,
  emptyMessage: t,
  bottomRef: n
}) => {
  const { literal: r } = qe(), i = r["viewer.waiting_logs"], o = t || i;
  return /* @__PURE__ */ v.jsxs(
    Dn,
    {
      elevation: 0,
      sx: {
        height: "100%",
        bgcolor: "background.paper",
        color: "text.primary",
        p: L.md,
        overflow: "auto",
        fontFamily: An.mono,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1
      },
      children: [
        e.length === 0 && /* @__PURE__ */ v.jsx(F, { sx: { color: "text.disabled", fontStyle: "italic" }, children: o }),
        e.map((s) => /* @__PURE__ */ v.jsxs(
          j,
          {
            sx: { display: "flex", gap: L.md, mb: L.xs },
            children: [
              /* @__PURE__ */ v.jsx(
                F,
                {
                  component: "span",
                  sx: { color: "text.secondary", minWidth: 90, opacity: 0.7 },
                  children: s.timestamp
                }
              ),
              /* @__PURE__ */ v.jsx(
                F,
                {
                  component: "span",
                  sx: {
                    color: aS[s.level] || "text.secondary",
                    fontWeight: "bold",
                    minWidth: 60
                  },
                  children: s.level
                }
              ),
              /* @__PURE__ */ v.jsx(F, { component: "span", sx: { whiteSpace: "pre-wrap", flex: 1 }, children: s.message })
            ]
          },
          s.id
        )),
        n && /* @__PURE__ */ v.jsx("div", { ref: n })
      ]
    }
  );
}, OE = ({
  phase: e,
  title: t,
  description: n,
  category: r,
  status: i,
  tags: o,
  alignRight: s = !1,
  t: a
}) => {
  const l = pe(), c = (u) => {
    switch (u) {
      case "active":
        return "success";
      case "planned":
        return "primary";
      case "vision":
        return "default";
      default:
        return "default";
    }
  };
  return /* @__PURE__ */ v.jsx(
    ue.div,
    {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: !0, margin: "-50px" },
      transition: { duration: 0.5 },
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "4rem",
        position: "relative"
      },
      children: /* @__PURE__ */ v.jsxs(
        j,
        {
          sx: {
            display: "flex",
            justifyContent: {
              xs: "flex-start",
              md: s ? "flex-end" : "flex-start"
            },
            width: "100%",
            position: "relative",
            pl: { xs: 6, md: s ? "50%" : 0 },
            pr: { xs: 0, md: s ? 0 : "50%" },
            boxSizing: "border-box"
          },
          children: [
            /* @__PURE__ */ v.jsx(
              j,
              {
                sx: {
                  position: "absolute",
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: s ? "secondary.main" : "primary.main",
                  boxShadow: `0 0 10px ${l.palette.mode === "dark" ? l.palette.common.white : l.palette.common.black}`,
                  zIndex: 2,
                  left: { xs: -28, md: "50%" },
                  transform: { xs: "none", md: "translateX(-50%)" }
                }
              }
            ),
            /* @__PURE__ */ v.jsxs(
              Dn,
              {
                elevation: 4,
                sx: {
                  width: { xs: "auto", md: "80%" },
                  maxWidth: { xs: "100%", md: 450 },
                  p: L.lg,
                  bgcolor: "background.paper",
                  borderLeft: {
                    xs: `4px solid ${l.palette.primary.main}`,
                    md: s ? "none" : `4px solid ${l.palette.primary.main}`
                  },
                  borderRight: {
                    xs: "none",
                    md: s ? `4px solid ${l.palette.secondary.main}` : "none"
                  },
                  borderRadius: L.internal,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)"
                  },
                  ml: { xs: 0, md: s ? 0 : "auto" },
                  mr: { xs: 0, md: s ? "auto" : 0 }
                },
                children: [
                  /* @__PURE__ */ v.jsxs(
                    j,
                    {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                        flexWrap: "wrap"
                      },
                      children: [
                        /* @__PURE__ */ v.jsxs(
                          F,
                          {
                            variant: "overline",
                            color: "text.secondary",
                            sx: { letterSpacing: "0.1em" },
                            children: [
                              e,
                              " •",
                              " ",
                              a(`category.${r.toLowerCase()}`) || r.toUpperCase()
                            ]
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          to,
                          {
                            label: a(`common.status_${i.toLowerCase()}`).toUpperCase(),
                            color: c(i),
                            size: "small",
                            sx: { letterSpacing: "0.05em", height: 20 }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    F,
                    {
                      variant: "h5",
                      component: "h3",
                      sx: { fontWeight: 800, my: 1, fontFamily: '"Outfit", sans-serif' },
                      children: a(t)
                    }
                  ),
                  /* @__PURE__ */ v.jsx(F, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: a(n) }),
                  o && o.length > 0 && /* @__PURE__ */ v.jsx(j, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }, children: o.map((u) => /* @__PURE__ */ v.jsx(
                    to,
                    {
                      label: a(u),
                      variant: "outlined",
                      size: "small"
                    },
                    u
                  )) })
                ]
              }
            )
          ]
        }
      )
    }
  );
}, lS = ({
  themeContext: e
}) => {
  const { darkMode: t, toggleDarkMode: n } = e;
  return /* @__PURE__ */ v.jsx(yc, { onClick: n, "aria-label": "Toggle theme", children: t ? /* @__PURE__ */ v.jsx(Pf, {}) : /* @__PURE__ */ v.jsx(Af, {}) });
}, ME = ({
  handleDrawerToggle: e,
  title: t,
  themeContext: n
}) => /* @__PURE__ */ v.jsx(
  Ef,
  {
    position: "fixed",
    elevation: 0,
    sx: { zIndex: (r) => r.zIndex.drawer + 1 },
    children: /* @__PURE__ */ v.jsxs(gc, { children: [
      /* @__PURE__ */ v.jsx(
        yc,
        {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "start",
          onClick: e,
          sx: { mr: L.md, display: { sm: "none" } },
          children: /* @__PURE__ */ v.jsx(_f, {})
        }
      ),
      /* @__PURE__ */ v.jsx(Cf, { variant: "h4", noWrap: !0, component: "div", sx: { flexGrow: 1, fontWeight: 600 }, children: t }),
      /* @__PURE__ */ v.jsx(lS, { themeContext: n })
    ] })
  }
), IE = ({
  entries: e,
  selectedVersion: t,
  latestVersion: n,
  onVersionChange: r,
  versionPrefix: i = "v",
  latestLabel: o = "Latest",
  availableLabel: s = "available"
}) => {
  const a = pe();
  if (!e || e.length <= 1)
    return null;
  const l = [...e].sort((u, f) => f.version - u.version), c = (u) => {
    try {
      return new Date(u).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return u;
    }
  };
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: L.md,
        p: L.sm,
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: a.palette.mode === "dark" ? "background.paper" : "grey.50"
      },
      children: [
        /* @__PURE__ */ v.jsx(F, { variant: "body2", fontWeight: "medium", children: "Version:" }),
        /* @__PURE__ */ v.jsx(of, { size: "small", sx: { minWidth: 200 }, children: /* @__PURE__ */ v.jsx(
          sf,
          {
            value: t,
            onChange: (u) => r(Number(u.target.value)),
            sx: { fontSize: "0.875rem" },
            children: l.map((u) => /* @__PURE__ */ v.jsx(fc, { value: u.version, children: /* @__PURE__ */ v.jsxs(j, { children: [
              /* @__PURE__ */ v.jsxs(F, { variant: "body2", children: [
                i,
                u.version,
                u.version === n && /* @__PURE__ */ v.jsxs(
                  F,
                  {
                    component: "span",
                    variant: "caption",
                    sx: { ml: 1, color: "success.main", fontWeight: "bold" },
                    children: [
                      "(",
                      o,
                      ")"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ v.jsx(F, { variant: "caption", color: "text.secondary", children: c(u.createdAt) })
            ] }) }, u.version))
          }
        ) }),
        /* @__PURE__ */ v.jsxs(F, { variant: "caption", color: "text.secondary", children: [
          l.length,
          " version",
          l.length !== 1 ? "s" : "",
          " ",
          s
        ] })
      ]
    }
  );
}, DE = ({ activeIndex: e, totalSteps: t, sx: n }) => {
  const r = pe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        position: "absolute",
        left: { xs: 20, md: 60 },
        top: "50%",
        transform: "translateY(-50%)",
        height: "400px",
        width: "2px",
        bgcolor: r.palette.divider,
        zIndex: 10,
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        ...n
      },
      children: [
        /* @__PURE__ */ v.jsx(
          ue.div,
          {
            animate: { height: `${(e + 1) / t * 100}%` },
            style: {
              position: "absolute",
              top: 0,
              width: "2px",
              background: r.palette.primary.main,
              boxShadow: `0 0 10px ${r.palette.primary.main}`,
              zIndex: 1
            }
          }
        ),
        Array.from({ length: t }).map((i, o) => /* @__PURE__ */ v.jsx(
          j,
          {
            sx: {
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: o <= e ? "primary.main" : r.palette.action.disabled,
              zIndex: 2,
              transition: "background-color 0.3s ease",
              boxShadow: o === e ? `0 0 10px ${r.palette.primary.main}` : "none"
            }
          },
          o
        ))
      ]
    }
  );
}, zi = (e, t, n) => e.length === 0 ? /* @__PURE__ */ v.jsx(
  F,
  {
    variant: "body2",
    sx: { color: n, fontStyle: "italic" },
    children: t
  }
) : /* @__PURE__ */ v.jsx(
  j,
  {
    component: "ul",
    sx: { m: 0, pl: L.lg, color: "text.primary", typography: "body2" },
    children: e.map((r, i) => /* @__PURE__ */ v.jsx(
      j,
      {
        component: "li",
        sx: { mb: L.internal },
        children: r
      },
      `${r}-${i}`
    ))
  }
), NE = ({
  owner: e,
  domain: t,
  customMetricLabel: n,
  customMetricValue: r,
  improvements: i,
  slips: o,
  risks: s,
  labels: a
}) => {
  const l = pe();
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        backgroundColor: l.palette.background.paper,
        border: 1,
        borderColor: "divider",
        borderRadius: L.xs,
        p: L.lg,
        display: "flex",
        flexDirection: "column",
        gap: L.md
      },
      children: [
        /* @__PURE__ */ v.jsxs(
          j,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: L.sm,
              borderBottom: 1,
              borderColor: "divider"
            },
            children: [
              /* @__PURE__ */ v.jsxs(j, { children: [
                /* @__PURE__ */ v.jsx(
                  F,
                  {
                    variant: "h5",
                    sx: { color: l.palette.text.primary },
                    children: e
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  F,
                  {
                    variant: "micro",
                    sx: { color: l.palette.text.secondary },
                    children: t
                  }
                )
              ] }),
              !!n && /* @__PURE__ */ v.jsxs(j, { sx: { textAlign: "right" }, children: [
                /* @__PURE__ */ v.jsx(
                  F,
                  {
                    variant: "micro",
                    sx: {
                      color: l.palette.text.secondary,
                      textTransform: "uppercase"
                    },
                    children: n
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  F,
                  {
                    variant: "h6",
                    sx: {
                      color: l.palette.primary.main,
                      fontVariantNumeric: "tabular-nums"
                    },
                    children: r
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs(j, { children: [
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "captionBold",
              sx: {
                color: l.palette.success.main,
                mb: L.internal,
                display: "block"
              },
              children: a.improvedTitle
            }
          ),
          zi(
            i,
            a.emptyImproved,
            l.palette.text.secondary
          )
        ] }),
        /* @__PURE__ */ v.jsxs(j, { children: [
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "captionBold",
              sx: {
                color: l.palette.warning.main,
                mb: L.internal,
                display: "block"
              },
              children: a.slipsTitle
            }
          ),
          zi(
            o,
            a.emptySlips,
            l.palette.text.secondary
          )
        ] }),
        /* @__PURE__ */ v.jsxs(j, { children: [
          /* @__PURE__ */ v.jsx(
            F,
            {
              variant: "captionBold",
              sx: {
                color: l.palette.error.main,
                mb: L.internal,
                display: "block"
              },
              children: a.risksTitle
            }
          ),
          zi(
            s,
            a.emptyRisks,
            l.palette.text.secondary
          )
        ] })
      ]
    }
  );
}, nu = (e) => /* @__PURE__ */ v.jsx(
  Pe,
  {
    variant: e.variant ?? "outlined",
    size: e.size ?? "small",
    onClick: e.onClick,
    disabled: e.disabled,
    sx: {
      borderRadius: 1,
      textTransform: "none"
    },
    children: e.label
  }
), FE = ({
  title: e,
  subtitle: t,
  primaryAction: n,
  secondaryAction: r,
  leadingMeta: i,
  trailingMeta: o
}) => /* @__PURE__ */ v.jsxs(
  j,
  {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      mb: L.xl,
      gap: L.md,
      flexWrap: "wrap"
    },
    children: [
      /* @__PURE__ */ v.jsxs(j, { children: [
        /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "h2",
            sx: { color: "text.primary", mb: L.xs, fontWeight: 600 },
            children: e
          }
        ),
        t && /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "body1",
            sx: { color: "text.secondary" },
            children: t
          }
        ),
        i
      ] }),
      /* @__PURE__ */ v.jsxs(
        j,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: L.md,
            flexWrap: "wrap"
          },
          children: [
            o,
            r && nu(r),
            n && nu(n)
          ]
        }
      )
    ]
  }
), BE = ({ title: e, lines: t }) => /* @__PURE__ */ v.jsxs(
  j,
  {
    sx: {
      p: L.lg,
      border: 1,
      borderColor: "divider",
      borderRadius: 1,
      backgroundColor: "background.paper"
    },
    children: [
      /* @__PURE__ */ v.jsx(
        F,
        {
          variant: "h4",
          sx: { color: "text.primary", mb: L.sm, fontWeight: 600 },
          children: e
        }
      ),
      t.map((n, r) => /* @__PURE__ */ v.jsx(
        F,
        {
          variant: n.variant ?? "body2",
          sx: {
            color: "text.secondary",
            display: n.variant === "caption" ? "block" : "inline"
          },
          children: n.text
        },
        `${n.text}-${r}`
      ))
    ]
  }
), ee = {
  // Brand Accent (Subtle, rarely used largely)
  primary: "#5A60F5",
  // Soft indigo
  primaryHover: "#5255DF",
  secondary: "#8a8f98",
  // Neutral secondary
  // App Backgrounds (Linear / GitHub styling)
  background: {
    // Light Mode (Soft neutral, 3-4 tones)
    light: "#F5F5F7",
    // Barely gray
    paperLight: "#FFFFFF",
    // Elevated surface
    // Dark Mode (Deep gray, not #000)
    dark: "#0e1015",
    // Linear-style deep background
    paperDark: "#16181D",
    // Slightly lighter elevated surface
    panelDark: "#1E2028"
    // Highest elevation
  },
  // Borders & Dividers
  border: {
    light: "rgba(0, 0, 0, 0.08)",
    dark: "rgba(255, 255, 255, 0.08)"
  },
  // UI Text Hierarchy
  text: {
    // Light
    primaryLight: "#111318",
    // Near-black
    secondaryLight: "#687076",
    // Muted text
    // Dark
    primaryDark: "#EDEDEF",
    // Near-white
    secondaryDark: "#8A8F98"
    // Muted text
  },
  // Status Colors
  status: {
    error: "#ED5F74",
    warning: "#F5A623",
    success: "#34C759",
    info: "#5A60F5",
    // Crisis Protocol Safety Red override
    crisis: "#F85149"
  }
}, uS = {
  "fade-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  "slide-left": {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  },
  "slide-right": {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  },
  "scale-up": {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 }
  },
  "stagger-fade": {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
  },
  typewriter: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }
}, cS = ({
  text: e,
  duration: t,
  delay: n
}) => {
  const [r, i] = ve(""), o = e.length, s = t / o;
  return at(() => {
    let a = 0;
    const l = setTimeout(() => {
      const c = setInterval(() => {
        a++, i(e.slice(0, a)), a >= o && clearInterval(c);
      }, s);
      return () => clearInterval(c);
    }, n);
    return () => clearTimeout(l);
  }, [e, o, s, n]), /* @__PURE__ */ v.jsxs(
    F,
    {
      variant: "h1",
      fontWeight: 600,
      color: "text.primary",
      sx: { letterSpacing: "-0.02em", lineHeight: 1.2 },
      children: [
        r,
        /* @__PURE__ */ v.jsx(
          ue.span,
          {
            animate: { opacity: [0, 1, 0] },
            transition: { duration: 0.8, repeat: 1 / 0 },
            children: "|"
          }
        )
      ]
    }
  );
}, VE = ({
  headline: e,
  description: t,
  primaryActionLabel: n,
  onPrimaryAction: r,
  children: i,
  enableAnimation: o = !0,
  animationVariant: s = "fade-up",
  animationDuration: a = 600,
  animationDelay: l = 0,
  animationStagger: c = 100
}) => {
  const u = uS[s], f = o && u, d = s === "typewriter", h = {
    duration: a / 1e3,
    ease: "easeOut",
    delay: l / 1e3
  };
  return /* @__PURE__ */ v.jsxs(
    j,
    {
      sx: {
        py: L.xxl,
        px: L.xl,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: L.lg,
        maxWidth: "800px"
      },
      children: [
        f && !d ? /* @__PURE__ */ v.jsx(ue.div, { initial: u.initial, animate: u.animate, transition: h, children: /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "h1",
            fontWeight: 600,
            color: "text.primary",
            sx: { letterSpacing: "-0.02em", lineHeight: 1.2 },
            children: e
          }
        ) }) : d ? /* @__PURE__ */ v.jsx(cS, { text: e, duration: a, delay: l }) : /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "h1",
            fontWeight: 600,
            color: "text.primary",
            sx: { letterSpacing: "-0.02em", lineHeight: 1.2 },
            children: e
          }
        ),
        t && (f && !d ? /* @__PURE__ */ v.jsx(
          ue.div,
          {
            initial: u.initial,
            animate: u.animate,
            transition: { ...h, delay: (l + a) / 1e3 },
            children: /* @__PURE__ */ v.jsx(
              F,
              {
                variant: "body1",
                color: "text.secondary",
                sx: { maxWidth: "600px", lineHeight: 1.6 },
                children: t
              }
            )
          }
        ) : /* @__PURE__ */ v.jsx(
          F,
          {
            variant: "body1",
            color: "text.secondary",
            sx: { maxWidth: "600px", lineHeight: 1.6 },
            children: t
          }
        )),
        n && (f ? /* @__PURE__ */ v.jsx(
          ue.div,
          {
            initial: u.initial,
            animate: u.animate,
            transition: { ...h, delay: (l + a * 1.5) / 1e3 },
            children: /* @__PURE__ */ v.jsx(
              Pe,
              {
                variant: "contained",
                color: "primary",
                size: "large",
                onClick: r,
                disableElevation: !0,
                sx: {
                  backgroundColor: ee.primary,
                  color: "#fff",
                  borderRadius: 1,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: ee.primaryHover
                  }
                },
                children: n
              }
            )
          }
        ) : /* @__PURE__ */ v.jsx(
          Pe,
          {
            variant: "contained",
            color: "primary",
            size: "large",
            onClick: r,
            disableElevation: !0,
            sx: {
              backgroundColor: ee.primary,
              color: "#fff",
              borderRadius: 1,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: ee.primaryHover
              }
            },
            children: n
          }
        )),
        i && (f ? /* @__PURE__ */ v.jsx(
          ue.div,
          {
            initial: u.initial,
            animate: u.animate,
            transition: { ...h, delay: (l + a * 2) / 1e3 },
            style: { marginTop: L.xs, width: "100%" },
            children: i
          }
        ) : /* @__PURE__ */ v.jsx(j, { sx: { mt: L.xs, width: "100%" }, children: i }))
      ]
    }
  );
}, Md = vt(
  {}
);
function zE() {
  return me(Md);
}
function UE({
  children: e,
  lightTheme: t,
  darkTheme: n,
  forceTheme: r
  // This prop will be passed from Storybook
}) {
  const [i, o] = ve(() => {
    if (typeof window < "u")
      try {
        return localStorage.getItem("darkMode") === "true";
      } catch {
        return !1;
      }
    return !1;
  }), s = r ? r === "dark" : i, a = () => {
    if (!r) {
      const c = !i;
      o(c);
      try {
        localStorage.setItem("darkMode", String(c));
      } catch {
      }
    }
  }, l = mt(
    () => s ? n : t,
    [s, t, n]
  );
  return /* @__PURE__ */ v.jsx(Md.Provider, { value: { darkMode: s, toggleDarkMode: a }, children: /* @__PURE__ */ v.jsxs(nf, { theme: l, children: [
    /* @__PURE__ */ v.jsx(rf, {}),
    e
  ] }) });
}
const HE = () => {
  const { currentLanguage: e, setCurrentLanguage: t, availableLanguages: n } = qe(), [r, i] = ve(null), o = !!r, s = (u) => {
    i(u.currentTarget);
  }, a = () => {
    i(null);
  }, l = (u) => {
    t(u), a();
  }, c = n.find((u) => u.code === e)?.label ?? "";
  return /* @__PURE__ */ v.jsxs(j, { children: [
    /* @__PURE__ */ v.jsx(
      Pe,
      {
        id: "language-button",
        "aria-controls": o ? "language-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": o ? "true" : void 0,
        onClick: s,
        startIcon: /* @__PURE__ */ v.jsx(Rf, {}),
        color: "inherit",
        children: c
      }
    ),
    /* @__PURE__ */ v.jsx(
      Wp,
      {
        id: "language-menu",
        anchorEl: r,
        open: o,
        onClose: a,
        "aria-labelledby": "language-button",
        children: n.map((u) => /* @__PURE__ */ v.jsx(
          fc,
          {
            selected: u.code === e,
            onClick: () => l(u.code),
            children: u.label
          },
          u.code
        ))
      }
    )
  ] });
};
function qE({
  children: e,
  translations: t,
  availableLanguages: n,
  defaultLanguage: r = "en"
}) {
  const [i, o] = ve(r), [s, a] = ve(t[r] || {});
  at(() => {
    a(t[i] || {});
  }, [i, t]);
  const l = {
    currentLanguage: i,
    setCurrentLanguage: o,
    literal: s,
    availableLanguages: n
  };
  return /* @__PURE__ */ v.jsx(xc.Provider, { value: l, children: e });
}
const Id = (e) => `${Math.round(e * 8)}px`, Dd = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px"
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent"
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(150, 150, 150, 0.3)",
          borderRadius: "4px"
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "rgba(150, 150, 150, 0.5)"
        }
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        // Disable MUI's default elevation overlay
        boxShadow: "none"
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        borderRadius: "6px",
        "&:hover": { boxShadow: "none" }
      }
    }
  }
}, Nd = {
  palette: {
    mode: "light",
    primary: { main: ee.primary, light: ee.primaryHover },
    secondary: { main: ee.secondary },
    background: {
      default: ee.background.light,
      paper: ee.background.paperLight
    },
    text: {
      primary: ee.text.primaryLight,
      secondary: ee.text.secondaryLight
    },
    error: { main: ee.status.error },
    warning: { main: ee.status.warning },
    info: { main: ee.status.info },
    success: { main: ee.status.success },
    divider: ee.border.light
  },
  typography: Od,
  spacing: Id,
  components: Dd
}, Fd = {
  palette: {
    mode: "dark",
    primary: { main: ee.primary, light: ee.primaryHover },
    secondary: { main: ee.secondary },
    background: {
      default: ee.background.dark,
      paper: ee.background.paperDark
    },
    text: {
      primary: ee.text.primaryDark,
      secondary: ee.text.secondaryDark
    },
    error: { main: ee.status.error },
    warning: { main: ee.status.warning },
    info: { main: ee.status.info },
    success: { main: ee.status.success },
    divider: ee.border.dark
  },
  typography: Od,
  spacing: Id,
  components: Dd
}, WE = Vr(Nd), GE = Vr(Fd), YE = (e, t) => ({
  lightTheme: Vr(Nd, e ?? {}),
  darkTheme: Vr(Fd, t ?? {})
});
var Rn = /* @__PURE__ */ ((e) => (e[e.INIT = 0] = "INIT", e[e.LOADING = 1] = "LOADING", e[e.COMPLETED = 2] = "COMPLETED", e))(Rn || {}), Bd = /* @__PURE__ */ ((e) => (e[e.IDLE = 1e3] = "IDLE", e))(Bd || {}), In = /* @__PURE__ */ ((e) => (e[e.SUCCESS = 200] = "SUCCESS", e[e.CREATED = 201] = "CREATED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.INTERNET_ERROR = 0] = "INTERNET_ERROR", e[e.IDLE = 1e3] = "IDLE", e))(In || {});
const hS = () => ({
  state: Rn.INIT,
  isError: !1,
  isSuccess: !1,
  status: Bd.IDLE,
  statusMessage: "",
  data: null
});
function KE(e = {}, t) {
  const [n, r] = ve({
    ...hS(),
    ...e
  }), i = Fe(!0);
  return at(() => () => {
    i.current = !1;
  }, []), [n, async (s) => {
    r((a) => ({ ...a, state: Rn.LOADING }));
    try {
      const a = await s();
      if (!i.current) return;
      r((l) => ({
        ...l,
        state: Rn.COMPLETED,
        isError: a.isError,
        isSuccess: a.isSuccess,
        status: a.status,
        statusMessage: a.statusMessage,
        data: a.data || null
      }));
    } catch {
      if (!i.current) return;
      r((l) => ({
        ...l,
        state: Rn.COMPLETED,
        isError: !0,
        status: In.INTERNAL_SERVER_ERROR,
        statusMessage: t?.unexpectedErrorMessage ?? "",
        data: null
      }));
    }
  }, r];
}
function Vd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: dS } = Object.prototype, { getPrototypeOf: Ls } = Object, { iterator: ui, toStringTag: zd } = Symbol, ci = /* @__PURE__ */ ((e) => (t) => {
  const n = dS.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ke = (e) => (e = e.toLowerCase(), (t) => ci(t) === e), hi = (e) => (t) => typeof t === e, { isArray: nn } = Array, Jt = hi("undefined");
function Wn(e) {
  return e !== null && !Jt(e) && e.constructor !== null && !Jt(e.constructor) && Te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ud = Ke("ArrayBuffer");
function pS(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ud(e.buffer), t;
}
const fS = hi("string"), Te = hi("function"), Hd = hi("number"), Gn = (e) => e !== null && typeof e == "object", mS = (e) => e === !0 || e === !1, Ir = (e) => {
  if (ci(e) !== "object")
    return !1;
  const t = Ls(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(zd in e) && !(ui in e);
}, gS = (e) => {
  if (!Gn(e) || Wn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, yS = Ke("Date"), vS = Ke("File"), xS = (e) => !!(e && typeof e.uri < "u"), bS = (e) => e && typeof e.getParts < "u", SS = Ke("Blob"), kS = Ke("FileList"), wS = (e) => Gn(e) && Te(e.pipe);
function ES() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ru = ES(), iu = typeof ru.FormData < "u" ? ru.FormData : void 0, _S = (e) => {
  let t;
  return e && (iu && e instanceof iu || Te(e.append) && ((t = ci(e)) === "formdata" || // detect form-data instance
  t === "object" && Te(e.toString) && e.toString() === "[object FormData]"));
}, CS = Ke("URLSearchParams"), [PS, AS, RS, TS] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Ke), LS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), nn(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    if (Wn(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let a;
    for (r = 0; r < s; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function qd(e, t) {
  if (Wn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const _t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Wd = (e) => !Jt(e) && e !== _t;
function Ro() {
  const { caseless: e, skipUndefined: t } = Wd(this) && this || {}, n = {}, r = (i, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const s = e && qd(n, o) || o;
    Ir(n[s]) && Ir(i) ? n[s] = Ro(n[s], i) : Ir(i) ? n[s] = Ro({}, i) : nn(i) ? n[s] = i.slice() : (!t || !Jt(i)) && (n[s] = i);
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Yn(arguments[i], r);
  return n;
}
const jS = (e, t, n, { allOwnKeys: r } = {}) => (Yn(
  t,
  (i, o) => {
    n && Te(i) ? Object.defineProperty(e, o, {
      value: Vd(i, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      value: i,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), OS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), MS = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, IS = (e, t, n, r) => {
  let i, o, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && Ls(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, DS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, NS = (e) => {
  if (!e) return null;
  if (nn(e)) return e;
  let t = e.length;
  if (!Hd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, FS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ls(Uint8Array)), BS = (e, t) => {
  const r = (e && e[ui]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, VS = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, zS = Ke("HTMLFormElement"), US = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
  return r.toUpperCase() + i;
}), ou = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), HS = Ke("RegExp"), Gd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Yn(n, (i, o) => {
    let s;
    (s = t(i, o, e)) !== !1 && (r[o] = s || i);
  }), Object.defineProperties(e, r);
}, qS = (e) => {
  Gd(e, (t, n) => {
    if (Te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Te(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, WS = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return nn(e) ? r(e) : r(String(e).split(t)), n;
}, GS = () => {
}, YS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function KS(e) {
  return !!(e && Te(e.append) && e[zd] === "FormData" && e[ui]);
}
const JS = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (Gn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Wn(r))
        return r;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = nn(r) ? [] : {};
        return Yn(r, (s, a) => {
          const l = n(s, i + 1);
          !Jt(l) && (o[a] = l);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, XS = Ke("AsyncFunction"), QS = (e) => e && (Gn(e) || Te(e)) && Te(e.then) && Te(e.catch), Yd = ((e, t) => e ? setImmediate : t ? ((n, r) => (_t.addEventListener(
  "message",
  ({ source: i, data: o }) => {
    i === _t && o === n && r.length && r.shift()();
  },
  !1
), (i) => {
  r.push(i), _t.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Te(_t.postMessage)), ZS = typeof queueMicrotask < "u" ? queueMicrotask.bind(_t) : typeof process < "u" && process.nextTick || Yd, $S = (e) => e != null && Te(e[ui]), P = {
  isArray: nn,
  isArrayBuffer: Ud,
  isBuffer: Wn,
  isFormData: _S,
  isArrayBufferView: pS,
  isString: fS,
  isNumber: Hd,
  isBoolean: mS,
  isObject: Gn,
  isPlainObject: Ir,
  isEmptyObject: gS,
  isReadableStream: PS,
  isRequest: AS,
  isResponse: RS,
  isHeaders: TS,
  isUndefined: Jt,
  isDate: yS,
  isFile: vS,
  isReactNativeBlob: xS,
  isReactNative: bS,
  isBlob: SS,
  isRegExp: HS,
  isFunction: Te,
  isStream: wS,
  isURLSearchParams: CS,
  isTypedArray: FS,
  isFileList: kS,
  forEach: Yn,
  merge: Ro,
  extend: jS,
  trim: LS,
  stripBOM: OS,
  inherits: MS,
  toFlatObject: IS,
  kindOf: ci,
  kindOfTest: Ke,
  endsWith: DS,
  toArray: NS,
  forEachEntry: BS,
  matchAll: VS,
  isHTMLForm: zS,
  hasOwnProperty: ou,
  hasOwnProp: ou,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gd,
  freezeMethods: qS,
  toObjectSet: WS,
  toCamelCase: US,
  noop: GS,
  toFiniteNumber: YS,
  findKey: qd,
  global: _t,
  isContextDefined: Wd,
  isSpecCompliantForm: KS,
  toJSONObject: JS,
  isAsyncFn: XS,
  isThenable: QS,
  setImmediate: Yd,
  asap: ZS,
  isIterable: $S
};
let G = class Kd extends Error {
  static from(t, n, r, i, o, s) {
    const a = new Kd(t.message, n || t.code, r, i, o);
    return a.cause = t, a.name = t.name, t.status != null && a.status == null && (a.status = t.status), s && Object.assign(a, s), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, i, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), i && (this.request = i), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
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
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
G.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
G.ERR_BAD_OPTION = "ERR_BAD_OPTION";
G.ECONNABORTED = "ECONNABORTED";
G.ETIMEDOUT = "ETIMEDOUT";
G.ERR_NETWORK = "ERR_NETWORK";
G.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
G.ERR_DEPRECATED = "ERR_DEPRECATED";
G.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
G.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
G.ERR_CANCELED = "ERR_CANCELED";
G.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
G.ERR_INVALID_URL = "ERR_INVALID_URL";
const ek = null;
function To(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Jd(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ui(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = Jd(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function tk(e) {
  return P.isArray(e) && !e.some(To);
}
const nk = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function di(e, t, n) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = P.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(m, g) {
      return !P.isUndefined(g[m]);
    }
  );
  const r = n.metaTokens, i = n.visitor || u, o = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
  if (!P.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (P.isDate(p))
      return p.toISOString();
    if (P.isBoolean(p))
      return p.toString();
    if (!l && P.isBlob(p))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(p) || P.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, m, g) {
    let y = p;
    if (P.isReactNative(t) && P.isReactNativeBlob(p))
      return t.append(Ui(g, m, o), c(p)), !1;
    if (p && !g && typeof p == "object") {
      if (P.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (P.isArray(p) && tk(p) || (P.isFileList(p) || P.endsWith(m, "[]")) && (y = P.toArray(p)))
        return m = Jd(m), y.forEach(function(k, S) {
          !(P.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ui([m], S, o) : s === null ? m : m + "[]",
            c(k)
          );
        }), !1;
    }
    return To(p) ? !0 : (t.append(Ui(g, m, o), c(p)), !1);
  }
  const f = [], d = Object.assign(nk, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: To
  });
  function h(p, m) {
    if (!P.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(p), P.forEach(p, function(y, x) {
        (!(P.isUndefined(y) || y === null) && i.call(t, y, P.isString(x) ? x.trim() : x, m, d)) === !0 && h(y, m ? m.concat(x) : [x]);
      }), f.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function su(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function js(e, t) {
  this._pairs = [], e && di(e, this, t);
}
const Xd = js.prototype;
Xd.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, su);
  } : su;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function rk(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Qd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || rk, i = P.isFunction(n) ? {
    serialize: n
  } : n, o = i && i.serialize;
  let s;
  if (o ? s = o(t, i) : s = P.isURLSearchParams(t) ? t.toString() : new js(t, i).toString(r), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class au {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
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
    P.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Os = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, ik = typeof URLSearchParams < "u" ? URLSearchParams : js, ok = typeof FormData < "u" ? FormData : null, sk = typeof Blob < "u" ? Blob : null, ak = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ik,
    FormData: ok,
    Blob: sk
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ms = typeof window < "u" && typeof document < "u", Lo = typeof navigator == "object" && navigator || void 0, lk = Ms && (!Lo || ["ReactNative", "NativeScript", "NS"].indexOf(Lo.product) < 0), uk = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ck = Ms && window.location.href || "http://localhost", hk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ms,
  hasStandardBrowserEnv: lk,
  hasStandardBrowserWebWorkerEnv: uk,
  navigator: Lo,
  origin: ck
}, Symbol.toStringTag, { value: "Module" })), be = {
  ...hk,
  ...ak
};
function dk(e, t) {
  return di(e, new be.classes.URLSearchParams(), {
    visitor: function(n, r, i, o) {
      return be.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function pk(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function fk(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Zd(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), l = o >= n.length;
    return s = !s && P.isArray(i) ? i.length : s, l ? (P.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !a) : ((!i[s] || !P.isObject(i[s])) && (i[s] = []), t(n, r, i[s], o) && P.isArray(i[s]) && (i[s] = fk(i[s])), !a);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, i) => {
      t(pk(r), i, n, 0);
    }), n;
  }
  return null;
}
function mk(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Kn = {
  transitional: Os,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = P.isObject(t);
      if (o && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
        return i ? JSON.stringify(Zd(t)) : t;
      if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
        return t;
      if (P.isArrayBufferView(t))
        return t.buffer;
      if (P.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return dk(t, this.formSerializer).toString();
        if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return di(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), mk(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || Kn.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t))
        return t;
      if (t && P.isString(t) && (r && !this.responseType || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError" ? G.from(a, G.ERR_BAD_RESPONSE, this, null, this.response) : a;
        }
      }
      return t;
    }
  ],
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
    FormData: be.classes.FormData,
    Blob: be.classes.Blob
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
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Kn.headers[e] = {};
});
const gk = P.toObjectSet([
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
]), yk = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || t[n] && gk[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, lu = /* @__PURE__ */ Symbol("internals"), vk = (e) => !/[\r\n]/.test(e);
function $d(e, t) {
  if (!(e === !1 || e == null)) {
    if (P.isArray(e)) {
      e.forEach((n) => $d(n, t));
      return;
    }
    if (!vk(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function pn(e) {
  return e && String(e).trim().toLowerCase();
}
function xk(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function Dr(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Dr) : xk(String(e));
}
function bk(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Sk = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Hi(e, t, n, r, i) {
  if (P.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function kk(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function wk(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0
    });
  });
}
let Le = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(a, l, c) {
      const u = pn(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = P.findKey(i, u);
      (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && ($d(a, l), i[f || l] = Dr(a));
    }
    const s = (a, l) => P.forEach(a, (c, u) => o(c, u, l));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (P.isString(t) && (t = t.trim()) && !Sk(t))
      s(yk(t), n);
    else if (P.isObject(t) && P.isIterable(t)) {
      let a = {}, l, c;
      for (const u of t) {
        if (!P.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = u[0]] = (l = a[c]) ? P.isArray(l) ? [...l, u[1]] : [l, u[1]] : u[1];
      }
      s(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = pn(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return bk(i);
        if (P.isFunction(n))
          return n.call(this, i, r);
        if (P.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = pn(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Hi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = pn(s), s) {
        const a = P.findKey(r, s);
        a && (!n || Hi(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return P.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Hi(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return P.forEach(this, (i, o) => {
      const s = P.findKey(r, o);
      if (s) {
        n[s] = Dr(i), delete n[o];
        return;
      }
      const a = t ? kk(o) : String(o).trim();
      a !== o && delete n[o], n[a] = Dr(i), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && P.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
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
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[lu] = this[lu] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const a = pn(s);
      r[a] || (wk(i, s), r[a] = !0);
    }
    return P.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Le.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
P.reduceDescriptors(Le.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
P.freezeMethods(Le);
function qi(e, t) {
  const n = this || Kn, r = t || n, i = Le.from(r.headers);
  let o = r.data;
  return P.forEach(e, function(a) {
    o = a.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function ep(e) {
  return !!(e && e.__CANCEL__);
}
let Jn = class extends G {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", G.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function tp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(
    new G(
      "Request failed with status code " + n.status,
      [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function Ek(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _k(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[o];
    s || (s = c), n[i] = l, r[i] = c;
    let f = o, d = 0;
    for (; f !== i; )
      d += n[f++], f = f % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), c - s < t)
      return;
    const h = u && c - u;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function Ck(e, t) {
  let n = 0, r = 1e3 / t, i, o;
  const s = (c, u = Date.now()) => {
    n = u, i = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), f = u - n;
    f >= r ? s(c, u) : (i = c, o || (o = setTimeout(() => {
      o = null, s(i);
    }, r - f)));
  }, () => i && s(i)];
}
const Xr = (e, t, n = 3) => {
  let r = 0;
  const i = _k(50, 250);
  return Ck((o) => {
    const s = o.loaded, a = o.lengthComputable ? o.total : void 0, l = s - r, c = i(l), u = s <= a;
    r = s;
    const f = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && u ? (a - s) / c : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, uu = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, cu = (e) => (...t) => P.asap(() => e(...t)), Pk = be.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, be.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(be.origin),
  be.navigator && /(msie|trident)/i.test(be.navigator.userAgent)
) : () => !0, Ak = be.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, o, s) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      P.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), P.isString(r) && a.push(`path=${r}`), P.isString(i) && a.push(`domain=${i}`), o === !0 && a.push("secure"), P.isString(s) && a.push(`SameSite=${s}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
function Rk(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tk(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function np(e, t, n) {
  let r = !Rk(t);
  return e && (r || n == !1) ? Tk(e, t) : t;
}
const hu = (e) => e instanceof Le ? { ...e } : e;
function Rt(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, f, d) {
    return P.isPlainObject(c) && P.isPlainObject(u) ? P.merge.call({ caseless: d }, c, u) : P.isPlainObject(u) ? P.merge({}, u) : P.isArray(u) ? u.slice() : u;
  }
  function i(c, u, f, d) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(c))
        return r(void 0, c, f, d);
    } else return r(c, u, f, d);
  }
  function o(c, u) {
    if (!P.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, f) {
    if (f in t)
      return r(c, u);
    if (f in e)
      return r(void 0, c);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (c, u, f) => i(hu(c), hu(u), f, !0)
  };
  return P.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const f = P.hasOwnProp(l, u) ? l[u] : i, d = f(e[u], t[u], u);
    P.isUndefined(d) && f !== a || (n[u] = d);
  }), n;
}
const rp = (e) => {
  const t = Rt({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: a } = t;
  if (t.headers = s = Le.from(s), t.url = Qd(
    np(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), a && s.set(
    "Authorization",
    "Basic " + btoa(
      (a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")
    )
  ), P.isFormData(n)) {
    if (be.hasStandardBrowserEnv || be.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if (P.isFunction(n.getHeaders)) {
      const l = n.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(l).forEach(([u, f]) => {
        c.includes(u.toLowerCase()) && s.set(u, f);
      });
    }
  }
  if (be.hasStandardBrowserEnv && (r && P.isFunction(r) && (r = r(t)), r || r !== !1 && Pk(t.url))) {
    const l = i && o && Ak.read(o);
    l && s.set(i, l);
  }
  return t;
}, Lk = typeof XMLHttpRequest < "u", jk = Lk && function(e) {
  return new Promise(function(n, r) {
    const i = rp(e);
    let o = i.data;
    const s = Le.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = i, u, f, d, h, p;
    function m() {
      h && h(), p && p(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function y() {
      if (!g)
        return;
      const k = Le.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: k,
        config: e,
        request: g
      };
      tp(
        function(_) {
          n(_), m();
        },
        function(_) {
          r(_), m();
        },
        b
      ), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, g.onabort = function() {
      g && (r(new G("Request aborted", G.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(S) {
      const b = S && S.message ? S.message : "Network Error", w = new G(b, G.ERR_NETWORK, e, g);
      w.event = S || null, r(w), g = null;
    }, g.ontimeout = function() {
      let S = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const b = i.transitional || Os;
      i.timeoutErrorMessage && (S = i.timeoutErrorMessage), r(
        new G(
          S,
          b.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
          e,
          g
        )
      ), g = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in g && P.forEach(s.toJSON(), function(S, b) {
      g.setRequestHeader(b, S);
    }), P.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), a && a !== "json" && (g.responseType = i.responseType), c && ([d, p] = Xr(c, !0), g.addEventListener("progress", d)), l && g.upload && ([f, h] = Xr(l), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", h)), (i.cancelToken || i.signal) && (u = (k) => {
      g && (r(!k || k.type ? new Jn(null, e, g) : k), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const x = Ek(i.url);
    if (x && be.protocols.indexOf(x) === -1) {
      r(
        new G(
          "Unsupported protocol " + x + ":",
          G.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    g.send(o || null);
  });
}, Ok = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const o = function(c) {
      if (!i) {
        i = !0, a();
        const u = c instanceof Error ? c : this.reason;
        r.abort(
          u instanceof G ? u : new Jn(u instanceof Error ? u.message : u)
        );
      }
    };
    let s = t && setTimeout(() => {
      s = null, o(new G(`timeout of ${t}ms exceeded`, G.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: l } = r;
    return l.unsubscribe = () => P.asap(a), l;
  }
}, Mk = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, Ik = async function* (e, t) {
  for await (const n of Dk(e))
    yield* Mk(n, t);
}, Dk = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, du = (e, t, n, r) => {
  const i = Ik(e, t);
  let o = 0, s, a = (l) => {
    s || (s = !0, r && r(l));
  };
  return new ReadableStream(
    {
      async pull(l) {
        try {
          const { done: c, value: u } = await i.next();
          if (c) {
            a(), l.close();
            return;
          }
          let f = u.byteLength;
          if (n) {
            let d = o += f;
            n(d);
          }
          l.enqueue(new Uint8Array(u));
        } catch (c) {
          throw a(c), c;
        }
      },
      cancel(l) {
        return a(l), i.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, pu = 64 * 1024, { isFunction: sr } = P, Nk = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(P.global), { ReadableStream: fu, TextEncoder: mu } = P.global, gu = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Fk = (e) => {
  e = P.merge.call(
    {
      skipUndefined: !0
    },
    Nk,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, i = t ? sr(t) : typeof fetch == "function", o = sr(n), s = sr(r);
  if (!i)
    return !1;
  const a = i && sr(fu), l = i && (typeof mu == "function" ? /* @__PURE__ */ ((p) => (m) => p.encode(m))(new mu()) : async (p) => new Uint8Array(await new n(p).arrayBuffer())), c = o && a && gu(() => {
    let p = !1;
    const m = new fu(), g = new n(be.origin, {
      body: m,
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return m.cancel(), p && !g;
  }), u = s && a && gu(() => P.isReadableStream(new r("").body)), f = {
    stream: u && ((p) => p.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !f[p] && (f[p] = (m, g) => {
      let y = m && m[p];
      if (y)
        return y.call(m);
      throw new G(
        `Response type '${p}' is not supported`,
        G.ERR_NOT_SUPPORT,
        g
      );
    });
  });
  const d = async (p) => {
    if (p == null)
      return 0;
    if (P.isBlob(p))
      return p.size;
    if (P.isSpecCompliantForm(p))
      return (await new n(be.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (P.isArrayBufferView(p) || P.isArrayBuffer(p))
      return p.byteLength;
    if (P.isURLSearchParams(p) && (p = p + ""), P.isString(p))
      return (await l(p)).byteLength;
  }, h = async (p, m) => {
    const g = P.toFiniteNumber(p.getContentLength());
    return g ?? d(m);
  };
  return async (p) => {
    let {
      url: m,
      method: g,
      data: y,
      signal: x,
      cancelToken: k,
      timeout: S,
      onDownloadProgress: b,
      onUploadProgress: w,
      responseType: _,
      headers: R,
      withCredentials: I = "same-origin",
      fetchOptions: z
    } = rp(p), T = t || fetch;
    _ = _ ? (_ + "").toLowerCase() : "text";
    let A = Ok(
      [x, k && k.toAbortSignal()],
      S
    ), N = null;
    const B = A && A.unsubscribe && (() => {
      A.unsubscribe();
    });
    let D;
    try {
      if (w && c && g !== "get" && g !== "head" && (D = await h(R, y)) !== 0) {
        let O = new n(m, {
          method: "POST",
          body: y,
          duplex: "half"
        }), q;
        if (P.isFormData(y) && (q = O.headers.get("content-type")) && R.setContentType(q), O.body) {
          const [E, Q] = uu(
            D,
            Xr(cu(w))
          );
          y = du(O.body, pu, E, Q);
        }
      }
      P.isString(I) || (I = I ? "include" : "omit");
      const H = o && "credentials" in n.prototype, X = {
        ...z,
        signal: A,
        method: g.toUpperCase(),
        headers: R.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: H ? I : void 0
      };
      N = o && new n(m, X);
      let $ = await (o ? T(N, z) : T(m, X));
      const ke = u && (_ === "stream" || _ === "response");
      if (u && (b || ke && B)) {
        const O = {};
        ["status", "statusText", "headers"].forEach((we) => {
          O[we] = $[we];
        });
        const q = P.toFiniteNumber($.headers.get("content-length")), [E, Q] = b && uu(
          q,
          Xr(cu(b), !0)
        ) || [];
        $ = new r(
          du($.body, pu, E, () => {
            Q && Q(), B && B();
          }),
          O
        );
      }
      _ = _ || "text";
      let C = await f[P.findKey(f, _) || "text"](
        $,
        p
      );
      return !ke && B && B(), await new Promise((O, q) => {
        tp(O, q, {
          data: C,
          headers: Le.from($.headers),
          status: $.status,
          statusText: $.statusText,
          config: p,
          request: N
        });
      });
    } catch (H) {
      throw B && B(), H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message) ? Object.assign(
        new G(
          "Network Error",
          G.ERR_NETWORK,
          p,
          N,
          H && H.response
        ),
        {
          cause: H.cause || H
        }
      ) : G.from(H, H && H.code, p, N, H && H.response);
    }
  };
}, Bk = /* @__PURE__ */ new Map(), ip = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: i } = t, o = [r, i, n];
  let s = o.length, a = s, l, c, u = Bk;
  for (; a--; )
    l = o[a], c = u.get(l), c === void 0 && u.set(l, c = a ? /* @__PURE__ */ new Map() : Fk(t)), u = c;
  return c;
};
ip();
const Is = {
  http: ek,
  xhr: jk,
  fetch: {
    get: ip
  }
};
P.forEach(Is, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yu = (e) => `- ${e}`, Vk = (e) => P.isFunction(e) || e === null || e === !1;
function zk(e, t) {
  e = P.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, i;
  const o = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let a;
    if (i = r, !Vk(r) && (i = Is[(a = String(r)).toLowerCase()], i === void 0))
      throw new G(`Unknown adapter '${a}'`);
    if (i && (P.isFunction(i) || (i = i.get(t))))
      break;
    o[a || "#" + s] = i;
  }
  if (!i) {
    const s = Object.entries(o).map(
      ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? s.length > 1 ? `since :
` + s.map(yu).join(`
`) : " " + yu(s[0]) : "as no adapter specified";
    throw new G(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const op = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: zk,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Is
};
function Wi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Jn(null, e);
}
function vu(e) {
  return Wi(e), e.headers = Le.from(e.headers), e.data = qi.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), op.getAdapter(e.adapter || Kn.adapter, e)(e).then(
    function(r) {
      return Wi(e), r.data = qi.call(e, e.transformResponse, r), r.headers = Le.from(r.headers), r;
    },
    function(r) {
      return ep(r) || (Wi(e), r && r.response && (r.response.data = qi.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = Le.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const sp = "1.15.0", pi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const xu = {};
pi.transitional = function(t, n, r) {
  function i(o, s) {
    return "[Axios v" + sp + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, a) => {
    if (t === !1)
      throw new G(
        i(s, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return n && !xu[s] && (xu[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, a) : !0;
  };
};
pi.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Uk(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = t[o];
    if (s) {
      const a = e[o], l = a === void 0 || s(a, o, e);
      if (l !== !0)
        throw new G(
          "option " + o + " must be " + l,
          G.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const Nr = {
  assertOptions: Uk,
  validators: pi
}, ze = Nr.validators;
let At = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new au(),
      response: new au()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const o = (() => {
          if (!i.stack)
            return "";
          const s = i.stack.indexOf(`
`);
          return s === -1 ? "" : i.stack.slice(s + 1);
        })();
        try {
          if (!r.stack)
            r.stack = o;
          else if (o) {
            const s = o.indexOf(`
`), a = s === -1 ? -1 : o.indexOf(`
`, s + 1), l = a === -1 ? "" : o.slice(a + 1);
            String(r.stack).endsWith(l) || (r.stack += `
` + o);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Rt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && Nr.assertOptions(
      r,
      {
        silentJSONParsing: ze.transitional(ze.boolean),
        forcedJSONParsing: ze.transitional(ze.boolean),
        clarifyTimeoutError: ze.transitional(ze.boolean),
        legacyInterceptorReqResOrdering: ze.transitional(ze.boolean)
      },
      !1
    ), i != null && (P.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Nr.assertOptions(
      i,
      {
        encode: ze.function,
        serialize: ze.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Nr.assertOptions(
      n,
      {
        baseUrl: ze.spelling("baseURL"),
        withXsrfToken: ze.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && P.merge(o.common, o[n.method]);
    o && P.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
      delete o[p];
    }), n.headers = Le.concat(s, o);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      l = l && m.synchronous;
      const g = n.transitional || Os;
      g && g.legacyInterceptorReqResOrdering ? a.unshift(m.fulfilled, m.rejected) : a.push(m.fulfilled, m.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, f = 0, d;
    if (!l) {
      const p = [vu.bind(this), void 0];
      for (p.unshift(...a), p.push(...c), d = p.length, u = Promise.resolve(n); f < d; )
        u = u.then(p[f++], p[f++]);
      return u;
    }
    d = a.length;
    let h = n;
    for (; f < d; ) {
      const p = a[f++], m = a[f++];
      try {
        h = p(h);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      u = vu.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = c.length; f < d; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = Rt(this.defaults, t);
    const n = np(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Qd(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  At.prototype[t] = function(n, r) {
    return this.request(
      Rt(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
P.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, s, a) {
      return this.request(
        Rt(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: s
        })
      );
    };
  }
  At.prototype[t] = n(), At.prototype[t + "Form"] = n(!0);
});
let Hk = class ap {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const s = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(i);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, t(function(o, s, a) {
      r.reason || (r.reason = new Jn(o, s, a), n(r.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ap(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function qk(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Wk(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const jo = {
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
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(jo).forEach(([e, t]) => {
  jo[t] = e;
});
function lp(e) {
  const t = new At(e), n = Vd(At.prototype.request, t);
  return P.extend(n, At.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return lp(Rt(e, i));
  }, n;
}
const ce = lp(Kn);
ce.Axios = At;
ce.CanceledError = Jn;
ce.CancelToken = Hk;
ce.isCancel = ep;
ce.VERSION = sp;
ce.toFormData = di;
ce.AxiosError = G;
ce.Cancel = ce.CanceledError;
ce.all = function(t) {
  return Promise.all(t);
};
ce.spread = qk;
ce.isAxiosError = Wk;
ce.mergeConfig = Rt;
ce.AxiosHeaders = Le;
ce.formToJSON = (e) => Zd(P.isHTMLForm(e) ? new FormData(e) : e);
ce.getAdapter = op.getAdapter;
ce.HttpStatusCode = jo;
ce.default = ce;
const {
  Axios: ZE,
  AxiosError: $E,
  CanceledError: e_,
  isCancel: t_,
  CancelToken: n_,
  VERSION: r_,
  all: i_,
  Cancel: o_,
  isAxiosError: s_,
  spread: a_,
  toFormData: l_,
  AxiosHeaders: u_,
  HttpStatusCode: c_,
  formToJSON: h_,
  getAdapter: d_,
  mergeConfig: p_
} = ce;
class pt {
  isError = !1;
  isSuccess = !1;
  status = In.INTERNAL_SERVER_ERROR;
  statusMessage = "";
  data;
  constructor() {
  }
  static getSucessInstance(t) {
    const n = new pt();
    return n.isSuccess = !0, n.isError = !1, n.status = t.status, n.statusMessage = t.statusMessage, n.data = t.data, n;
  }
  static getErrorInstance(t) {
    const n = new pt();
    return n.isSuccess = !1, n.isError = !0, n.status = t.status, n.statusMessage = t.statusMessage, n;
  }
  static success(t) {
    return pt.getSucessInstance(t);
  }
  static error(t) {
    return pt.getErrorInstance(t);
  }
}
class Gk {
  baseUrl;
  literal;
  constructor(t, n) {
    this.baseUrl = t, this.literal = n;
  }
  async request(t) {
    try {
      const n = await ce(t), r = {
        status: n.status,
        statusMessage: n.statusText,
        data: n.data
      };
      return pt.success(r);
    } catch (n) {
      if (console.error(
        "API Error:",
        n instanceof Error ? n.message : "Unknown error"
      ), ce.isAxiosError(n)) {
        const r = n, i = r.response?.status || In.INTERNAL_SERVER_ERROR, o = r.message || this.literal.internal_server_error, s = {
          status: i,
          statusMessage: o
        };
        return pt.error(s);
      } else
        return pt.error({
          status: In.INTERNAL_SERVER_ERROR,
          statusMessage: this.literal.internal_server_error
        });
    }
  }
  async get(t, n) {
    return this.request({
      ...n,
      url: `${this.baseUrl}/${t}`,
      method: "GET"
      /* GET */
    });
  }
  async post(t, n, r) {
    return this.request({
      ...r,
      url: `${this.baseUrl}/${t}`,
      method: "POST",
      data: n
    });
  }
  async put(t, n, r) {
    return this.request({
      ...r,
      url: `${this.baseUrl}/${t}`,
      method: "PUT",
      data: n
    });
  }
  async delete(t, n) {
    return this.request({
      ...n,
      url: `${this.baseUrl}/${t}`,
      method: "DELETE"
      /* DELETE */
    });
  }
}
const Gi = /* @__PURE__ */ new Map(), f_ = (e, t) => {
  if (Gi.has(e))
    return Gi.get(e);
  const n = new Gk(e, t);
  return Gi.set(e, n), n;
};
var ar = { exports: {} }, lr = { exports: {} }, Ge = {}, _e = {}, bu;
function Oe() {
  if (bu) return _e;
  bu = 1, _e.__esModule = !0, _e.extend = i, _e.indexOf = l, _e.escapeExpression = c, _e.isEmpty = u, _e.createFrame = f, _e.blockParams = d, _e.appendContextPath = h;
  var e = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, t = /[&<>"'`=]/g, n = /[&<>"'`=]/;
  function r(p) {
    return e[p];
  }
  function i(p) {
    for (var m = 1; m < arguments.length; m++)
      for (var g in arguments[m])
        Object.prototype.hasOwnProperty.call(arguments[m], g) && (p[g] = arguments[m][g]);
    return p;
  }
  var o = Object.prototype.toString;
  _e.toString = o;
  var s = function(m) {
    return typeof m == "function";
  };
  s(/x/) && (_e.isFunction = s = function(p) {
    return typeof p == "function" && o.call(p) === "[object Function]";
  }), _e.isFunction = s;
  var a = Array.isArray || function(p) {
    return p && typeof p == "object" ? o.call(p) === "[object Array]" : !1;
  };
  _e.isArray = a;
  function l(p, m) {
    for (var g = 0, y = p.length; g < y; g++)
      if (p[g] === m)
        return g;
    return -1;
  }
  function c(p) {
    if (typeof p != "string") {
      if (p && p.toHTML)
        return p.toHTML();
      if (p == null)
        return "";
      if (!p)
        return p + "";
      p = "" + p;
    }
    return n.test(p) ? p.replace(t, r) : p;
  }
  function u(p) {
    return !p && p !== 0 ? !0 : !!(a(p) && p.length === 0);
  }
  function f(p) {
    var m = i({}, p);
    return m._parent = p, m;
  }
  function d(p, m) {
    return p.path = m, p;
  }
  function h(p, m) {
    return (p ? p + "." : "") + m;
  }
  return _e;
}
var ur = { exports: {} }, Su;
function We() {
  return Su || (Su = 1, (function(e, t) {
    t.__esModule = !0;
    var n = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function r(i, o) {
      var s = o && o.loc, a = void 0, l = void 0, c = void 0, u = void 0;
      s && (a = s.start.line, l = s.end.line, c = s.start.column, u = s.end.column, i += " - " + a + ":" + c);
      for (var f = Error.prototype.constructor.call(this, i), d = 0; d < n.length; d++)
        this[n[d]] = f[n[d]];
      Error.captureStackTrace && Error.captureStackTrace(this, r);
      try {
        s && (this.lineNumber = a, this.endLineNumber = l, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: c,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: u,
          enumerable: !0
        })) : (this.column = c, this.endColumn = u));
      } catch {
      }
    }
    r.prototype = new Error(), t.default = r, e.exports = t.default;
  })(ur, ur.exports)), ur.exports;
}
var fn = {}, cr = { exports: {} }, ku;
function Yk() {
  return ku || (ku = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe();
    t.default = function(r) {
      r.registerHelper("blockHelperMissing", function(i, o) {
        var s = o.inverse, a = o.fn;
        if (i === !0)
          return a(this);
        if (i === !1 || i == null)
          return s(this);
        if (n.isArray(i))
          return i.length > 0 ? (o.ids && (o.ids = [o.name]), r.helpers.each(i, o)) : s(this);
        if (o.data && o.ids) {
          var l = n.createFrame(o.data);
          l.contextPath = n.appendContextPath(o.data.contextPath, o.name), o = { data: l };
        }
        return a(i, o);
      });
    }, e.exports = t.default;
  })(cr, cr.exports)), cr.exports;
}
var hr = { exports: {} }, wu;
function Kk() {
  return wu || (wu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = Oe(), i = We(), o = n(i);
    t.default = function(s) {
      s.registerHelper("each", function(a, l) {
        if (!l)
          throw new o.default("Must pass iterator to #each");
        var c = l.fn, u = l.inverse, f = 0, d = "", h = void 0, p = void 0;
        l.data && l.ids && (p = r.appendContextPath(l.data.contextPath, l.ids[0]) + "."), r.isFunction(a) && (a = a.call(this)), l.data && (h = r.createFrame(l.data));
        function m(S, b, w) {
          h && (h.key = S, h.index = b, h.first = b === 0, h.last = !!w, p && (h.contextPath = p + S)), d = d + c(a[S], {
            data: h,
            blockParams: r.blockParams([a[S], S], [p + S, null])
          });
        }
        if (a && typeof a == "object")
          if (r.isArray(a))
            for (var g = a.length; f < g; f++)
              f in a && m(f, f, f === a.length - 1);
          else if (typeof Symbol == "function" && a[Symbol.iterator]) {
            for (var y = [], x = a[Symbol.iterator](), k = x.next(); !k.done; k = x.next())
              y.push(k.value);
            a = y;
            for (var g = a.length; f < g; f++)
              m(f, f, f === a.length - 1);
          } else
            (function() {
              var S = void 0;
              Object.keys(a).forEach(function(b) {
                S !== void 0 && m(S, f - 1), S = b, f++;
              }), S !== void 0 && m(S, f - 1, !0);
            })();
        return f === 0 && (d = u(this)), d;
      });
    }, e.exports = t.default;
  })(hr, hr.exports)), hr.exports;
}
var dr = { exports: {} }, Eu;
function Jk() {
  return Eu || (Eu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = We(), i = n(r);
    t.default = function(o) {
      o.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new i.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, e.exports = t.default;
  })(dr, dr.exports)), dr.exports;
}
var pr = { exports: {} }, _u;
function Xk() {
  return _u || (_u = 1, (function(e, t) {
    t.__esModule = !0;
    function n(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = Oe(), i = We(), o = n(i);
    t.default = function(s) {
      s.registerHelper("if", function(a, l) {
        if (arguments.length != 2)
          throw new o.default("#if requires exactly one argument");
        return r.isFunction(a) && (a = a.call(this)), !l.hash.includeZero && !a || r.isEmpty(a) ? l.inverse(this) : l.fn(this);
      }), s.registerHelper("unless", function(a, l) {
        if (arguments.length != 2)
          throw new o.default("#unless requires exactly one argument");
        return s.helpers.if.call(this, a, {
          fn: l.inverse,
          inverse: l.fn,
          hash: l.hash
        });
      });
    }, e.exports = t.default;
  })(pr, pr.exports)), pr.exports;
}
var fr = { exports: {} }, Cu;
function Qk() {
  return Cu || (Cu = 1, (function(e, t) {
    t.__esModule = !0, t.default = function(n) {
      n.registerHelper("log", function() {
        for (var r = [void 0], i = arguments[arguments.length - 1], o = 0; o < arguments.length - 1; o++)
          r.push(arguments[o]);
        var s = 1;
        i.hash.level != null ? s = i.hash.level : i.data && i.data.level != null && (s = i.data.level), r[0] = s, n.log.apply(n, r);
      });
    }, e.exports = t.default;
  })(fr, fr.exports)), fr.exports;
}
var mr = { exports: {} }, Pu;
function Zk() {
  return Pu || (Pu = 1, (function(e, t) {
    t.__esModule = !0, t.default = function(n) {
      n.registerHelper("lookup", function(r, i, o) {
        return r && o.lookupProperty(r, i);
      });
    }, e.exports = t.default;
  })(mr, mr.exports)), mr.exports;
}
var gr = { exports: {} }, Au;
function $k() {
  return Au || (Au = 1, (function(e, t) {
    t.__esModule = !0;
    function n(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = Oe(), i = We(), o = n(i);
    t.default = function(s) {
      s.registerHelper("with", function(a, l) {
        if (arguments.length != 2)
          throw new o.default("#with requires exactly one argument");
        r.isFunction(a) && (a = a.call(this));
        var c = l.fn;
        if (r.isEmpty(a))
          return l.inverse(this);
        var u = l.data;
        return l.data && l.ids && (u = r.createFrame(l.data), u.contextPath = r.appendContextPath(l.data.contextPath, l.ids[0])), c(a, {
          data: u,
          blockParams: r.blockParams([a], [u && u.contextPath])
        });
      });
    }, e.exports = t.default;
  })(gr, gr.exports)), gr.exports;
}
var Ru;
function up() {
  if (Ru) return fn;
  Ru = 1, fn.__esModule = !0, fn.registerDefaultHelpers = m, fn.moveHelperToHooks = g;
  function e(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var t = Yk(), n = e(t), r = Kk(), i = e(r), o = Jk(), s = e(o), a = Xk(), l = e(a), c = Qk(), u = e(c), f = Zk(), d = e(f), h = $k(), p = e(h);
  function m(y) {
    n.default(y), i.default(y), s.default(y), l.default(y), u.default(y), d.default(y), p.default(y);
  }
  function g(y, x, k) {
    y.helpers[x] && (y.hooks[x] = y.helpers[x], k || (y.helpers[x] = void 0));
  }
  return fn;
}
var yr = {}, vr = { exports: {} }, Tu;
function ew() {
  return Tu || (Tu = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe();
    t.default = function(r) {
      r.registerDecorator("inline", function(i, o, s, a) {
        var l = i;
        return o.partials || (o.partials = {}, l = function(c, u) {
          var f = s.partials;
          s.partials = n.extend({}, f, o.partials);
          var d = i(c, u);
          return s.partials = f, d;
        }), o.partials[a.args[0]] = a.fn, l;
      });
    }, e.exports = t.default;
  })(vr, vr.exports)), vr.exports;
}
var Lu;
function tw() {
  if (Lu) return yr;
  Lu = 1, yr.__esModule = !0, yr.registerDefaultDecorators = r;
  function e(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var t = ew(), n = e(t);
  function r(i) {
    n.default(i);
  }
  return yr;
}
var xr = { exports: {} }, ju;
function cp() {
  return ju || (ju = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe(), r = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(o) {
        if (typeof o == "string") {
          var s = n.indexOf(r.methodMap, o.toLowerCase());
          s >= 0 ? o = s : o = parseInt(o, 10);
        }
        return o;
      },
      // Can be overridden in the host environment
      log: function(o) {
        if (o = r.lookupLevel(o), typeof console < "u" && r.lookupLevel(r.level) <= o) {
          var s = r.methodMap[o];
          console[s] || (s = "log");
          for (var a = arguments.length, l = Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
            l[c - 1] = arguments[c];
          console[s].apply(console, l);
        }
      }
    };
    t.default = r, e.exports = t.default;
  })(xr, xr.exports)), xr.exports;
}
var Dt = {}, Ou;
function hp() {
  if (Ou) return Dt;
  Ou = 1, Dt.__esModule = !0, Dt.createProtoAccessControl = o, Dt.resultIsAllowed = s, Dt.resetLoggedProperties = c;
  function e(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var t = Oe(), n = cp(), r = e(n), i = /* @__PURE__ */ Object.create(null);
  function o(u) {
    var f = /* @__PURE__ */ Object.create(null);
    f.__proto__ = !1, t.extend(f, u.allowedProtoProperties);
    var d = /* @__PURE__ */ Object.create(null);
    return d.constructor = !1, d.__defineGetter__ = !1, d.__defineSetter__ = !1, d.__lookupGetter__ = !1, d.__lookupSetter__ = !1, t.extend(d, u.allowedProtoMethods), {
      properties: {
        whitelist: f,
        defaultValue: u.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: d,
        defaultValue: u.allowProtoMethodsByDefault
      }
    };
  }
  function s(u, f, d) {
    return a(typeof u == "function" ? f.methods : f.properties, d);
  }
  function a(u, f) {
    return u.whitelist[f] !== void 0 ? u.whitelist[f] === !0 : u.defaultValue !== void 0 ? u.defaultValue : (l(f), !1);
  }
  function l(u) {
    i[u] !== !0 && (i[u] = !0, r.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + u + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function c() {
    Object.keys(i).forEach(function(u) {
      delete i[u];
    });
  }
  return Dt;
}
var Mu;
function Ds() {
  if (Mu) return Ge;
  Mu = 1, Ge.__esModule = !0, Ge.HandlebarsEnvironment = p;
  function e(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var t = Oe(), n = We(), r = e(n), i = up(), o = tw(), s = cp(), a = e(s), l = hp(), c = "4.7.9";
  Ge.VERSION = c;
  var u = 8;
  Ge.COMPILER_REVISION = u;
  var f = 7;
  Ge.LAST_COMPATIBLE_COMPILER_REVISION = f;
  var d = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  Ge.REVISION_CHANGES = d;
  var h = "[object Object]";
  function p(g, y, x) {
    this.helpers = g || {}, this.partials = y || {}, this.decorators = x || {}, i.registerDefaultHelpers(this), o.registerDefaultDecorators(this);
  }
  p.prototype = {
    constructor: p,
    logger: a.default,
    log: a.default.log,
    registerHelper: function(y, x) {
      if (t.toString.call(y) === h) {
        if (x)
          throw new r.default("Arg not supported with multiple helpers");
        t.extend(this.helpers, y);
      } else
        this.helpers[y] = x;
    },
    unregisterHelper: function(y) {
      delete this.helpers[y];
    },
    registerPartial: function(y, x) {
      if (t.toString.call(y) === h)
        t.extend(this.partials, y);
      else {
        if (typeof x > "u")
          throw new r.default('Attempting to register a partial called "' + y + '" as undefined');
        this.partials[y] = x;
      }
    },
    unregisterPartial: function(y) {
      delete this.partials[y];
    },
    registerDecorator: function(y, x) {
      if (t.toString.call(y) === h) {
        if (x)
          throw new r.default("Arg not supported with multiple decorators");
        t.extend(this.decorators, y);
      } else
        this.decorators[y] = x;
    },
    unregisterDecorator: function(y) {
      delete this.decorators[y];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      l.resetLoggedProperties();
    }
  };
  var m = a.default.log;
  return Ge.log = m, Ge.createFrame = t.createFrame, Ge.logger = a.default, Ge;
}
var br = { exports: {} }, Iu;
function nw() {
  return Iu || (Iu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(r) {
      this.string = r;
    }
    n.prototype.toString = n.prototype.toHTML = function() {
      return "" + this.string;
    }, t.default = n, e.exports = t.default;
  })(br, br.exports)), br.exports;
}
var ot = {}, Sr = {}, Du;
function rw() {
  if (Du) return Sr;
  Du = 1, Sr.__esModule = !0, Sr.wrapHelper = e;
  function e(t, n) {
    if (typeof t != "function")
      return t;
    var r = function() {
      var o = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = n(o), t.apply(this, arguments);
    };
    return r;
  }
  return Sr;
}
var Nu;
function iw() {
  if (Nu) return ot;
  Nu = 1, ot.__esModule = !0, ot.checkRevision = u, ot.template = f, ot.wrapProgram = d, ot.resolvePartial = h, ot.invokePartial = p, ot.noop = m;
  function e(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function t(b) {
    if (b && b.__esModule)
      return b;
    var w = {};
    if (b != null)
      for (var _ in b)
        Object.prototype.hasOwnProperty.call(b, _) && (w[_] = b[_]);
    return w.default = b, w;
  }
  var n = Oe(), r = t(n), i = We(), o = e(i), s = Ds(), a = up(), l = rw(), c = hp();
  function u(b) {
    var w = b && b[0] || 1, _ = s.COMPILER_REVISION;
    if (!(w >= s.LAST_COMPATIBLE_COMPILER_REVISION && w <= s.COMPILER_REVISION))
      if (w < s.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = s.REVISION_CHANGES[_], I = s.REVISION_CHANGES[w];
        throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + R + ") or downgrade your runtime to an older version (" + I + ").");
      } else
        throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + b[1] + ").");
  }
  function f(b, w) {
    if (!w)
      throw new o.default("No environment passed to template");
    if (!b || !b.main)
      throw new o.default("Unknown template object: " + typeof b);
    b.main.decorator = b.main_d, w.VM.checkRevision(b.compiler);
    var _ = b.compiler && b.compiler[0] === 7;
    function R(T, A, N) {
      N.hash && (A = r.extend({}, A, N.hash), N.ids && (N.ids[0] = !0)), T = w.VM.resolvePartial.call(this, T, A, N), N.hooks = this.hooks, N.protoAccessControl = this.protoAccessControl;
      var B = w.VM.invokePartial.call(this, T, A, N);
      if (B == null && w.compile && (N.partials[N.name] = w.compile(T, b.compilerOptions, w), B = N.partials[N.name](A, N)), B != null) {
        if (N.indent) {
          for (var D = B.split(`
`), H = 0, X = D.length; H < X && !(!D[H] && H + 1 === X); H++)
            D[H] = N.indent + D[H];
          B = D.join(`
`);
        }
        return B;
      } else
        throw new o.default("The partial " + N.name + " could not be compiled when running in runtime-only mode");
    }
    var I = {
      strict: function(A, N, B) {
        if (!A || !(N in A))
          throw new o.default('"' + N + '" not defined in ' + A, {
            loc: B
          });
        return I.lookupProperty(A, N);
      },
      lookupProperty: function(A, N) {
        var B = A[N];
        if (B == null || Object.prototype.hasOwnProperty.call(A, N) || c.resultIsAllowed(B, I.protoAccessControl, N))
          return B;
      },
      lookup: function(A, N) {
        for (var B = A.length, D = 0; D < B; D++) {
          var H = A[D] && I.lookupProperty(A[D], N);
          if (H != null)
            return H;
        }
      },
      lambda: function(A, N) {
        return typeof A == "function" ? A.call(N) : A;
      },
      escapeExpression: r.escapeExpression,
      invokePartial: R,
      fn: function(A) {
        var N = b[A];
        return N.decorator = b[A + "_d"], N;
      },
      programs: [],
      program: function(A, N, B, D, H) {
        var X = this.programs[A], $ = this.fn(A);
        return N || H || D || B ? X = d(this, A, $, N, B, D, H) : X || (X = this.programs[A] = d(this, A, $)), X;
      },
      data: function(A, N) {
        for (; A && N--; )
          A = A._parent;
        return A;
      },
      mergeIfNeeded: function(A, N) {
        var B = A || N;
        return A && N && A !== N && (B = r.extend({}, N, A)), B;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: w.VM.noop,
      compilerInfo: b.compiler
    };
    function z(T) {
      var A = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], N = A.data;
      z._setup(A), !A.partial && b.useData && (N = y(T, N));
      var B = void 0, D = b.useBlockParams ? [] : void 0;
      b.useDepths && (A.depths ? B = T != A.depths[0] ? [T].concat(A.depths) : A.depths : B = [T]);
      function H(X) {
        return "" + b.main(I, X, I.helpers, I.partials, N, D, B);
      }
      return H = x(b.main, H, I, A.depths || [], N, D), H(T, A);
    }
    return z.isTop = !0, z._setup = function(T) {
      if (T.partial)
        I.protoAccessControl = T.protoAccessControl, I.helpers = T.helpers, I.partials = T.partials, I.decorators = T.decorators, I.hooks = T.hooks;
      else {
        var A = {};
        k(A, w.helpers, I), k(A, T.helpers, I), I.helpers = A, b.usePartial && (I.partials = I.mergeIfNeeded(T.partials, w.partials)), (b.usePartial || b.useDecorators) && (I.decorators = r.extend({}, w.decorators, T.decorators)), I.hooks = {}, I.protoAccessControl = c.createProtoAccessControl(T);
        var N = T.allowCallsToHelperMissing || _;
        a.moveHelperToHooks(I, "helperMissing", N), a.moveHelperToHooks(I, "blockHelperMissing", N);
      }
    }, z._child = function(T, A, N, B) {
      if (b.useBlockParams && !N)
        throw new o.default("must pass block params");
      if (b.useDepths && !B)
        throw new o.default("must pass parent depths");
      return d(I, T, b[T], A, 0, N, B);
    }, z;
  }
  function d(b, w, _, R, I, z, T) {
    function A(N) {
      var B = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], D = T;
      return T && N != T[0] && !(N === b.nullContext && T[0] === null) && (D = [N].concat(T)), _(b, N, b.helpers, b.partials, B.data || R, z && [B.blockParams].concat(z), D);
    }
    return A = x(_, A, b, T, R, z), A.program = w, A.depth = T ? T.length : 0, A.blockParams = I || 0, A;
  }
  function h(b, w, _) {
    return b ? !b.call && !_.name && (_.name = b, b = g(_.partials, b)) : _.name === "@partial-block" ? b = g(_.data, "partial-block") : b = g(_.partials, _.name), b;
  }
  function p(b, w, _) {
    var R = g(_.data, "partial-block");
    _.partial = !0, _.ids && (_.data.contextPath = _.ids[0] || _.data.contextPath);
    var I = void 0;
    if (_.fn && _.fn !== m && (function() {
      _.data = s.createFrame(_.data);
      var z = _.fn;
      I = _.data["partial-block"] = function(A) {
        var N = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return N.data = s.createFrame(N.data), N.data["partial-block"] = R, z(A, N);
      }, z.partials && (_.partials = r.extend({}, _.partials, z.partials));
    })(), b === void 0 && I && (b = I), b === void 0)
      throw new o.default("The partial " + _.name + " could not be found");
    if (b instanceof Function)
      return b(w, _);
  }
  function m() {
    return "";
  }
  function g(b, w) {
    if (b && Object.prototype.hasOwnProperty.call(b, w))
      return b[w];
  }
  function y(b, w) {
    return (!w || !("root" in w)) && (w = w ? s.createFrame(w) : {}, w.root = b), w;
  }
  function x(b, w, _, R, I, z) {
    if (b.decorator) {
      var T = {};
      w = b.decorator(w, T, _, R && R[0], I, z, R), r.extend(w, T);
    }
    return w;
  }
  function k(b, w, _) {
    w && Object.keys(w).forEach(function(R) {
      var I = w[R];
      b[R] = S(I, _);
    });
  }
  function S(b, w) {
    var _ = w.lookupProperty;
    return l.wrapHelper(b, function(R) {
      return R.lookupProperty = _, R;
    });
  }
  return ot;
}
var kr = { exports: {} }, Fu;
function dp() {
  return Fu || (Fu = 1, (function(e, t) {
    t.__esModule = !0, t.default = function(n) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var r = globalThis.Handlebars;
      n.noConflict = function() {
        return globalThis.Handlebars === n && (globalThis.Handlebars = r), n;
      };
    }, e.exports = t.default;
  })(kr, kr.exports)), kr.exports;
}
var Bu;
function ow() {
  return Bu || (Bu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(x) {
      return x && x.__esModule ? x : { default: x };
    }
    function r(x) {
      if (x && x.__esModule)
        return x;
      var k = {};
      if (x != null)
        for (var S in x)
          Object.prototype.hasOwnProperty.call(x, S) && (k[S] = x[S]);
      return k.default = x, k;
    }
    var i = Ds(), o = r(i), s = nw(), a = n(s), l = We(), c = n(l), u = Oe(), f = r(u), d = iw(), h = r(d), p = dp(), m = n(p);
    function g() {
      var x = new o.HandlebarsEnvironment();
      return f.extend(x, o), x.SafeString = a.default, x.Exception = c.default, x.Utils = f, x.escapeExpression = f.escapeExpression, x.VM = h, x.template = function(k) {
        return h.template(k, x);
      }, x;
    }
    var y = g();
    y.create = g, m.default(y), y.default = y, t.default = y, e.exports = t.default;
  })(lr, lr.exports)), lr.exports;
}
var wr = { exports: {} }, Vu;
function pp() {
  return Vu || (Vu = 1, (function(e, t) {
    t.__esModule = !0;
    var n = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(i) {
          return i.type === "SubExpression" || (i.type === "MustacheStatement" || i.type === "BlockStatement") && !!(i.params && i.params.length || i.hash);
        },
        scopedId: function(i) {
          return /^\.|this\b/.test(i.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(i) {
          return i.parts.length === 1 && !n.helpers.scopedId(i) && !i.depth;
        }
      }
    };
    t.default = n, e.exports = t.default;
  })(wr, wr.exports)), wr.exports;
}
var Nt = {}, Er = { exports: {} }, zu;
function sw() {
  return zu || (zu = 1, (function(e, t) {
    t.__esModule = !0;
    var n = (function() {
      var r = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(a, l, c, u, f, d, h) {
          var p = d.length - 1;
          switch (f) {
            case 1:
              return d[p - 1];
            case 2:
              this.$ = u.prepareProgram(d[p]);
              break;
            case 3:
              this.$ = d[p];
              break;
            case 4:
              this.$ = d[p];
              break;
            case 5:
              this.$ = d[p];
              break;
            case 6:
              this.$ = d[p];
              break;
            case 7:
              this.$ = d[p];
              break;
            case 8:
              this.$ = d[p];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: u.stripComment(d[p]),
                strip: u.stripFlags(d[p], d[p]),
                loc: u.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: d[p],
                value: d[p],
                loc: u.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = u.prepareRawBlock(d[p - 2], d[p - 1], d[p], this._$);
              break;
            case 12:
              this.$ = { path: d[p - 3], params: d[p - 2], hash: d[p - 1] };
              break;
            case 13:
              this.$ = u.prepareBlock(d[p - 3], d[p - 2], d[p - 1], d[p], !1, this._$);
              break;
            case 14:
              this.$ = u.prepareBlock(d[p - 3], d[p - 2], d[p - 1], d[p], !0, this._$);
              break;
            case 15:
              this.$ = { open: d[p - 5], path: d[p - 4], params: d[p - 3], hash: d[p - 2], blockParams: d[p - 1], strip: u.stripFlags(d[p - 5], d[p]) };
              break;
            case 16:
              this.$ = { path: d[p - 4], params: d[p - 3], hash: d[p - 2], blockParams: d[p - 1], strip: u.stripFlags(d[p - 5], d[p]) };
              break;
            case 17:
              this.$ = { path: d[p - 4], params: d[p - 3], hash: d[p - 2], blockParams: d[p - 1], strip: u.stripFlags(d[p - 5], d[p]) };
              break;
            case 18:
              this.$ = { strip: u.stripFlags(d[p - 1], d[p - 1]), program: d[p] };
              break;
            case 19:
              var m = u.prepareBlock(d[p - 2], d[p - 1], d[p], d[p], !1, this._$), g = u.prepareProgram([m], d[p - 1].loc);
              g.chained = !0, this.$ = { strip: d[p - 2].strip, program: g, chain: !0 };
              break;
            case 20:
              this.$ = d[p];
              break;
            case 21:
              this.$ = { path: d[p - 1], strip: u.stripFlags(d[p - 2], d[p]) };
              break;
            case 22:
              this.$ = u.prepareMustache(d[p - 3], d[p - 2], d[p - 1], d[p - 4], u.stripFlags(d[p - 4], d[p]), this._$);
              break;
            case 23:
              this.$ = u.prepareMustache(d[p - 3], d[p - 2], d[p - 1], d[p - 4], u.stripFlags(d[p - 4], d[p]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: d[p - 3],
                params: d[p - 2],
                hash: d[p - 1],
                indent: "",
                strip: u.stripFlags(d[p - 4], d[p]),
                loc: u.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = u.preparePartialBlock(d[p - 2], d[p - 1], d[p], this._$);
              break;
            case 26:
              this.$ = { path: d[p - 3], params: d[p - 2], hash: d[p - 1], strip: u.stripFlags(d[p - 4], d[p]) };
              break;
            case 27:
              this.$ = d[p];
              break;
            case 28:
              this.$ = d[p];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: d[p - 3],
                params: d[p - 2],
                hash: d[p - 1],
                loc: u.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: d[p], loc: u.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: u.id(d[p - 2]), value: d[p], loc: u.locInfo(this._$) };
              break;
            case 32:
              this.$ = u.id(d[p - 1]);
              break;
            case 33:
              this.$ = d[p];
              break;
            case 34:
              this.$ = d[p];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: d[p], original: d[p], loc: u.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(d[p]), original: Number(d[p]), loc: u.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: d[p] === "true", original: d[p] === "true", loc: u.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: u.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: u.locInfo(this._$) };
              break;
            case 40:
              this.$ = d[p];
              break;
            case 41:
              this.$ = d[p];
              break;
            case 42:
              this.$ = u.preparePath(!0, d[p], this._$);
              break;
            case 43:
              this.$ = u.preparePath(!1, d[p], this._$);
              break;
            case 44:
              d[p - 2].push({ part: u.id(d[p]), original: d[p], separator: d[p - 1] }), this.$ = d[p - 2];
              break;
            case 45:
              this.$ = [{ part: u.id(d[p]), original: d[p] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              d[p - 1].push(d[p]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              d[p - 1].push(d[p]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              d[p - 1].push(d[p]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              d[p - 1].push(d[p]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              d[p - 1].push(d[p]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              d[p - 1].push(d[p]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              d[p - 1].push(d[p]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              d[p - 1].push(d[p]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              d[p - 1].push(d[p]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              d[p - 1].push(d[p]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              d[p - 1].push(d[p]);
              break;
            case 98:
              this.$ = [d[p]];
              break;
            case 99:
              d[p - 1].push(d[p]);
              break;
            case 100:
              this.$ = [d[p]];
              break;
            case 101:
              d[p - 1].push(d[p]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(a, l) {
          throw new Error(a);
        },
        parse: function(a) {
          var l = this, c = [0], u = [null], f = [], d = this.table, h = "", p = 0, m = 0;
          this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var g = this.lexer.yylloc;
          f.push(g);
          var y = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function x() {
            var N;
            return N = l.lexer.lex() || 1, typeof N != "number" && (N = l.symbols_[N] || N), N;
          }
          for (var k, S, b, w, _ = {}, R, I, z, T; ; ) {
            if (S = c[c.length - 1], this.defaultActions[S] ? b = this.defaultActions[S] : ((k === null || typeof k > "u") && (k = x()), b = d[S] && d[S][k]), typeof b > "u" || !b.length || !b[0]) {
              var A = "";
              {
                T = [];
                for (R in d[S]) this.terminals_[R] && R > 2 && T.push("'" + this.terminals_[R] + "'");
                this.lexer.showPosition ? A = "Parse error on line " + (p + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + T.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : A = "Parse error on line " + (p + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(A, { text: this.lexer.match, token: this.terminals_[k] || k, line: this.lexer.yylineno, loc: g, expected: T });
              }
            }
            if (b[0] instanceof Array && b.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + S + ", token: " + k);
            switch (b[0]) {
              case 1:
                c.push(k), u.push(this.lexer.yytext), f.push(this.lexer.yylloc), c.push(b[1]), k = null, m = this.lexer.yyleng, h = this.lexer.yytext, p = this.lexer.yylineno, g = this.lexer.yylloc;
                break;
              case 2:
                if (I = this.productions_[b[1]][1], _.$ = u[u.length - I], _._$ = { first_line: f[f.length - (I || 1)].first_line, last_line: f[f.length - 1].last_line, first_column: f[f.length - (I || 1)].first_column, last_column: f[f.length - 1].last_column }, y && (_._$.range = [f[f.length - (I || 1)].range[0], f[f.length - 1].range[1]]), w = this.performAction.call(_, h, m, p, this.yy, b[1], u, f), typeof w < "u")
                  return w;
                I && (c = c.slice(0, -1 * I * 2), u = u.slice(0, -1 * I), f = f.slice(0, -1 * I)), c.push(this.productions_[b[1]][0]), u.push(_.$), f.push(_._$), z = d[c[c.length - 2]][c[c.length - 1]], c.push(z);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, i = (function() {
        var s = {
          EOF: 1,
          parseError: function(l, c) {
            if (this.yy.parser)
              this.yy.parser.parseError(l, c);
            else
              throw new Error(l);
          },
          setInput: function(l) {
            return this._input = l, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var l = this._input[0];
            this.yytext += l, this.yyleng++, this.offset++, this.match += l, this.matched += l;
            var c = l.match(/(?:\r\n?|\n).*/g);
            return c ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), l;
          },
          unput: function(l) {
            var c = l.length, u = l.split(/(?:\r\n?|\n)/g);
            this._input = l + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c - 1), this.offset -= c;
            var f = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
            var d = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: u ? (u.length === f.length ? this.yylloc.first_column : 0) + f[f.length - u.length].length - u[0].length : this.yylloc.first_column - c
            }, this.options.ranges && (this.yylloc.range = [d[0], d[0] + this.yyleng - c]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(l) {
            this.unput(this.match.slice(l));
          },
          pastInput: function() {
            var l = this.matched.substr(0, this.matched.length - this.match.length);
            return (l.length > 20 ? "..." : "") + l.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var l = this.match;
            return l.length < 20 && (l += this._input.substr(0, 20 - l.length)), (l.substr(0, 20) + (l.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var l = this.pastInput(), c = new Array(l.length + 1).join("-");
            return l + this.upcomingInput() + `
` + c + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var l, c, u, f, d;
            this._more || (this.yytext = "", this.match = "");
            for (var h = this._currentRules(), p = 0; p < h.length && (u = this._input.match(this.rules[h[p]]), !(u && (!c || u[0].length > c[0].length) && (c = u, f = p, !this.options.flex))); p++)
              ;
            return c ? (d = c[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
            }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(c[0].length), this.matched += c[0], l = this.performAction.call(this, this.yy, this, h[f], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var l = this.next();
            return typeof l < "u" ? l : this.lex();
          },
          begin: function(l) {
            this.conditionStack.push(l);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(l) {
            this.begin(l);
          }
        };
        return s.options = {}, s.performAction = function(l, c, u, f) {
          function d(h, p) {
            return c.yytext = c.yytext.substring(h, c.yyleng - p + h);
          }
          switch (u) {
            case 0:
              if (c.yytext.slice(-2) === "\\\\" ? (d(0, 1), this.begin("mu")) : c.yytext.slice(-1) === "\\" ? (d(0, 1), this.begin("emu")) : this.begin("mu"), c.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (d(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(c.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return c.yytext = d(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return c.yytext = d(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return c.yytext = c.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, s.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], s.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, s;
      })();
      r.lexer = i;
      function o() {
        this.yy = {};
      }
      return o.prototype = r, r.Parser = o, new o();
    })();
    t.default = n, e.exports = t.default;
  })(Er, Er.exports)), Er.exports;
}
var _r = { exports: {} }, Cr = { exports: {} }, Uu;
function fp() {
  return Uu || (Uu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var r = We(), i = n(r);
    function o() {
      this.parents = [];
    }
    o.prototype = {
      constructor: o,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(u, f) {
        var d = this.accept(u[f]);
        if (this.mutating) {
          if (d && !o.prototype[d.type])
            throw new i.default('Unexpected node type "' + d.type + '" found when accepting ' + f + " on " + u.type);
          u[f] = d;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(u, f) {
        if (this.acceptKey(u, f), !u[f])
          throw new i.default(u.type + " requires " + f);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(u) {
        for (var f = 0, d = u.length; f < d; f++)
          this.acceptKey(u, f), u[f] || (u.splice(f, 1), f--, d--);
      },
      accept: function(u) {
        if (u) {
          if (!this[u.type])
            throw new i.default("Unknown type: " + u.type, u);
          this.current && this.parents.unshift(this.current), this.current = u;
          var f = this[u.type](u);
          if (this.current = this.parents.shift(), !this.mutating || f)
            return f;
          if (f !== !1)
            return u;
        }
      },
      Program: function(u) {
        this.acceptArray(u.body);
      },
      MustacheStatement: s,
      Decorator: s,
      BlockStatement: a,
      DecoratorBlock: a,
      PartialStatement: l,
      PartialBlockStatement: function(u) {
        l.call(this, u), this.acceptKey(u, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: s,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(u) {
        this.acceptArray(u.pairs);
      },
      HashPair: function(u) {
        this.acceptRequired(u, "value");
      }
    };
    function s(c) {
      this.acceptRequired(c, "path"), this.acceptArray(c.params), this.acceptKey(c, "hash");
    }
    function a(c) {
      s.call(this, c), this.acceptKey(c, "program"), this.acceptKey(c, "inverse");
    }
    function l(c) {
      this.acceptRequired(c, "name"), this.acceptArray(c.params), this.acceptKey(c, "hash");
    }
    t.default = o, e.exports = t.default;
  })(Cr, Cr.exports)), Cr.exports;
}
var Hu;
function aw() {
  return Hu || (Hu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var r = fp(), i = n(r);
    function o() {
      var u = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = u;
    }
    o.prototype = new i.default(), o.prototype.Program = function(u) {
      var f = !this.options.ignoreStandalone, d = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var h = u.body, p = 0, m = h.length; p < m; p++) {
        var g = h[p], y = this.accept(g);
        if (y) {
          var x = s(h, p, d), k = a(h, p, d), S = y.openStandalone && x, b = y.closeStandalone && k, w = y.inlineStandalone && x && k;
          y.close && l(h, p, !0), y.open && c(h, p, !0), f && w && (l(h, p), c(h, p) && g.type === "PartialStatement" && (g.indent = /([ \t]+$)/.exec(h[p - 1].original)[1])), f && S && (l((g.program || g.inverse).body), c(h, p)), f && b && (l(h, p), c((g.inverse || g.program).body));
        }
      }
      return u;
    }, o.prototype.BlockStatement = o.prototype.DecoratorBlock = o.prototype.PartialBlockStatement = function(u) {
      this.accept(u.program), this.accept(u.inverse);
      var f = u.program || u.inverse, d = u.program && u.inverse, h = d, p = d;
      if (d && d.chained)
        for (h = d.body[0].program; p.chained; )
          p = p.body[p.body.length - 1].program;
      var m = {
        open: u.openStrip.open,
        close: u.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: a(f.body),
        closeStandalone: s((h || f).body)
      };
      if (u.openStrip.close && l(f.body, null, !0), d) {
        var g = u.inverseStrip;
        g.open && c(f.body, null, !0), g.close && l(h.body, null, !0), u.closeStrip.open && c(p.body, null, !0), !this.options.ignoreStandalone && s(f.body) && a(h.body) && (c(f.body), l(h.body));
      } else u.closeStrip.open && c(f.body, null, !0);
      return m;
    }, o.prototype.Decorator = o.prototype.MustacheStatement = function(u) {
      return u.strip;
    }, o.prototype.PartialStatement = o.prototype.CommentStatement = function(u) {
      var f = u.strip || {};
      return {
        inlineStandalone: !0,
        open: f.open,
        close: f.close
      };
    };
    function s(u, f, d) {
      f === void 0 && (f = u.length);
      var h = u[f - 1], p = u[f - 2];
      if (!h)
        return d;
      if (h.type === "ContentStatement")
        return (p || !d ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(h.original);
    }
    function a(u, f, d) {
      f === void 0 && (f = -1);
      var h = u[f + 1], p = u[f + 2];
      if (!h)
        return d;
      if (h.type === "ContentStatement")
        return (p || !d ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(h.original);
    }
    function l(u, f, d) {
      var h = u[f == null ? 0 : f + 1];
      if (!(!h || h.type !== "ContentStatement" || !d && h.rightStripped)) {
        var p = h.value;
        h.value = h.value.replace(d ? /^\s+/ : /^[ \t]*\r?\n?/, ""), h.rightStripped = h.value !== p;
      }
    }
    function c(u, f, d) {
      var h = u[f == null ? u.length - 1 : f - 1];
      if (!(!h || h.type !== "ContentStatement" || !d && h.leftStripped)) {
        var p = h.value;
        return h.value = h.value.replace(d ? /\s+$/ : /[ \t]+$/, ""), h.leftStripped = h.value !== p, h.leftStripped;
      }
    }
    t.default = o, e.exports = t.default;
  })(_r, _r.exports)), _r.exports;
}
var Ie = {}, qu;
function lw() {
  if (qu) return Ie;
  qu = 1, Ie.__esModule = !0, Ie.SourceLocation = i, Ie.id = o, Ie.stripFlags = s, Ie.stripComment = a, Ie.preparePath = l, Ie.prepareMustache = c, Ie.prepareRawBlock = u, Ie.prepareBlock = f, Ie.prepareProgram = d, Ie.preparePartialBlock = h;
  function e(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var t = We(), n = e(t);
  function r(p, m) {
    if (m = m.path ? m.path.original : m, p.path.original !== m) {
      var g = { loc: p.path.loc };
      throw new n.default(p.path.original + " doesn't match " + m, g);
    }
  }
  function i(p, m) {
    this.source = p, this.start = {
      line: m.first_line,
      column: m.first_column
    }, this.end = {
      line: m.last_line,
      column: m.last_column
    };
  }
  function o(p) {
    return /^\[.*\]$/.test(p) ? p.substring(1, p.length - 1) : p;
  }
  function s(p, m) {
    return {
      open: p.charAt(2) === "~",
      close: m.charAt(m.length - 3) === "~"
    };
  }
  function a(p) {
    return p.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function l(p, m, g) {
    g = this.locInfo(g);
    for (var y = p ? "@" : "", x = [], k = 0, S = 0, b = m.length; S < b; S++) {
      var w = m[S].part, _ = m[S].original !== w;
      if (y += (m[S].separator || "") + w, !_ && (w === ".." || w === "." || w === "this")) {
        if (x.length > 0)
          throw new n.default("Invalid path: " + y, { loc: g });
        w === ".." && k++;
      } else
        x.push(w);
    }
    return {
      type: "PathExpression",
      data: p,
      depth: k,
      parts: x,
      original: y,
      loc: g
    };
  }
  function c(p, m, g, y, x, k) {
    var S = y.charAt(3) || y.charAt(2), b = S !== "{" && S !== "&", w = /\*/.test(y);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: p,
      params: m,
      hash: g,
      escaped: b,
      strip: x,
      loc: this.locInfo(k)
    };
  }
  function u(p, m, g, y) {
    r(p, g), y = this.locInfo(y);
    var x = {
      type: "Program",
      body: m,
      strip: {},
      loc: y
    };
    return {
      type: "BlockStatement",
      path: p.path,
      params: p.params,
      hash: p.hash,
      program: x,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: y
    };
  }
  function f(p, m, g, y, x, k) {
    y && y.path && r(p, y);
    var S = /\*/.test(p.open);
    m.blockParams = p.blockParams;
    var b = void 0, w = void 0;
    if (g) {
      if (S)
        throw new n.default("Unexpected inverse block on decorator", g);
      g.chain && (g.program.body[0].closeStrip = y.strip), w = g.strip, b = g.program;
    }
    return x && (x = b, b = m, m = x), {
      type: S ? "DecoratorBlock" : "BlockStatement",
      path: p.path,
      params: p.params,
      hash: p.hash,
      program: m,
      inverse: b,
      openStrip: p.strip,
      inverseStrip: w,
      closeStrip: y && y.strip,
      loc: this.locInfo(k)
    };
  }
  function d(p, m) {
    if (!m && p.length) {
      var g = p[0].loc, y = p[p.length - 1].loc;
      g && y && (m = {
        source: g.source,
        start: {
          line: g.start.line,
          column: g.start.column
        },
        end: {
          line: y.end.line,
          column: y.end.column
        }
      });
    }
    return {
      type: "Program",
      body: p,
      strip: {},
      loc: m
    };
  }
  function h(p, m, g, y) {
    return r(p, g), {
      type: "PartialBlockStatement",
      name: p.path,
      params: p.params,
      hash: p.hash,
      program: m,
      openStrip: p.strip,
      closeStrip: g && g.strip,
      loc: this.locInfo(y)
    };
  }
  return Ie;
}
var Wu;
function uw() {
  if (Wu) return Nt;
  Wu = 1, Nt.__esModule = !0, Nt.parseWithoutProcessing = d, Nt.parse = h;
  function e(y) {
    if (y && y.__esModule)
      return y;
    var x = {};
    if (y != null)
      for (var k in y)
        Object.prototype.hasOwnProperty.call(y, k) && (x[k] = y[k]);
    return x.default = y, x;
  }
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var n = sw(), r = t(n), i = aw(), o = t(i), s = lw(), a = e(s), l = We(), c = t(l), u = Oe();
  Nt.parser = r.default;
  var f = {};
  u.extend(f, a);
  function d(y, x) {
    if (y.type === "Program")
      return p(y), y;
    r.default.yy = f, f.locInfo = function(S) {
      return new f.SourceLocation(x && x.srcName, S);
    };
    var k = r.default.parse(y);
    return k;
  }
  function h(y, x) {
    var k = d(y, x), S = new o.default(x);
    return S.accept(k);
  }
  function p(y) {
    m(y);
  }
  function m(y) {
    if (y != null) {
      if (Array.isArray(y)) {
        y.forEach(m);
        return;
      }
      if (typeof y == "object") {
        if (y.type === "PathExpression") {
          if (!g(y.depth))
            throw new c.default("Invalid AST: PathExpression.depth must be an integer");
          if (!Array.isArray(y.parts))
            throw new c.default("Invalid AST: PathExpression.parts must be an array");
          for (var x = 0; x < y.parts.length; x++)
            if (typeof y.parts[x] != "string")
              throw new c.default("Invalid AST: PathExpression.parts must only contain strings");
        } else if (y.type === "NumberLiteral") {
          if (typeof y.value != "number" || !isFinite(y.value))
            throw new c.default("Invalid AST: NumberLiteral.value must be a number");
        } else if (y.type === "BooleanLiteral" && typeof y.value != "boolean")
          throw new c.default("Invalid AST: BooleanLiteral.value must be a boolean");
        Object.keys(y).forEach(function(k) {
          k !== "loc" && m(y[k]);
        });
      }
    }
  }
  function g(y) {
    return typeof y == "number" && isFinite(y) && Math.floor(y) === y && y >= 0;
  }
  return Nt;
}
var Ft = {}, Gu;
function cw() {
  if (Gu) return Ft;
  Gu = 1, Ft.__esModule = !0, Ft.Compiler = a, Ft.precompile = l, Ft.compile = c;
  function e(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var t = We(), n = e(t), r = Oe(), i = pp(), o = e(i), s = [].slice;
  function a() {
  }
  a.prototype = {
    compiler: a,
    equals: function(h) {
      var p = this.opcodes.length;
      if (h.opcodes.length !== p)
        return !1;
      for (var m = 0; m < p; m++) {
        var g = this.opcodes[m], y = h.opcodes[m];
        if (g.opcode !== y.opcode || !u(g.args, y.args))
          return !1;
      }
      p = this.children.length;
      for (var m = 0; m < p; m++)
        if (!this.children[m].equals(h.children[m]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(h, p) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = p, this.stringParams = p.stringParams, this.trackIds = p.trackIds, p.blockParams = p.blockParams || [], p.knownHelpers = r.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, p.knownHelpers), this.accept(h);
    },
    compileProgram: function(h) {
      var p = new this.compiler(), m = p.compile(h, this.options), g = this.guid++;
      return this.usePartial = this.usePartial || m.usePartial, this.children[g] = m, this.useDepths = this.useDepths || m.useDepths, g;
    },
    accept: function(h) {
      if (!this[h.type])
        throw new n.default("Unknown type: " + h.type, h);
      this.sourceNode.unshift(h);
      var p = this[h.type](h);
      return this.sourceNode.shift(), p;
    },
    Program: function(h) {
      this.options.blockParams.unshift(h.blockParams);
      for (var p = h.body, m = p.length, g = 0; g < m; g++)
        this.accept(p[g]);
      return this.options.blockParams.shift(), this.isSimple = m === 1, this.blockParams = h.blockParams ? h.blockParams.length : 0, this;
    },
    BlockStatement: function(h) {
      f(h);
      var p = h.program, m = h.inverse;
      p = p && this.compileProgram(p), m = m && this.compileProgram(m);
      var g = this.classifySexpr(h);
      g === "helper" ? this.helperSexpr(h, p, m) : g === "simple" ? (this.simpleSexpr(h), this.opcode("pushProgram", p), this.opcode("pushProgram", m), this.opcode("emptyHash"), this.opcode("blockValue", h.path.original)) : (this.ambiguousSexpr(h, p, m), this.opcode("pushProgram", p), this.opcode("pushProgram", m), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(h) {
      var p = h.program && this.compileProgram(h.program), m = this.setupFullMustacheParams(h, p, void 0), g = h.path;
      this.useDecorators = !0, this.opcode("registerDecorator", m.length, g.original);
    },
    PartialStatement: function(h) {
      this.usePartial = !0;
      var p = h.program;
      p && (p = this.compileProgram(h.program));
      var m = h.params;
      if (m.length > 1)
        throw new n.default("Unsupported number of partial arguments: " + m.length, h);
      m.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : m.push({ type: "PathExpression", parts: [], depth: 0 }));
      var g = h.name.original, y = h.name.type === "SubExpression";
      y && this.accept(h.name), this.setupFullMustacheParams(h, p, void 0, !0);
      var x = h.indent || "";
      this.options.preventIndent && x && (this.opcode("appendContent", x), x = ""), this.opcode("invokePartial", y, g, x), this.opcode("append");
    },
    PartialBlockStatement: function(h) {
      this.PartialStatement(h);
    },
    MustacheStatement: function(h) {
      this.SubExpression(h), h.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(h) {
      this.DecoratorBlock(h);
    },
    ContentStatement: function(h) {
      h.value && this.opcode("appendContent", h.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(h) {
      f(h);
      var p = this.classifySexpr(h);
      p === "simple" ? this.simpleSexpr(h) : p === "helper" ? this.helperSexpr(h) : this.ambiguousSexpr(h);
    },
    ambiguousSexpr: function(h, p, m) {
      var g = h.path, y = g.parts[0], x = p != null || m != null;
      this.opcode("getContext", g.depth), this.opcode("pushProgram", p), this.opcode("pushProgram", m), g.strict = !0, this.accept(g), this.opcode("invokeAmbiguous", y, x);
    },
    simpleSexpr: function(h) {
      var p = h.path;
      p.strict = !0, this.accept(p), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(h, p, m) {
      var g = this.setupFullMustacheParams(h, p, m), y = h.path, x = y.parts[0];
      if (this.options.knownHelpers[x])
        this.opcode("invokeKnownHelper", g.length, x);
      else {
        if (this.options.knownHelpersOnly)
          throw new n.default("You specified knownHelpersOnly, but used the unknown helper " + x, h);
        y.strict = !0, y.falsy = !0, this.accept(y), this.opcode("invokeHelper", g.length, y.original, o.default.helpers.simpleId(y));
      }
    },
    PathExpression: function(h) {
      this.addDepth(h.depth), this.opcode("getContext", h.depth);
      var p = h.parts[0], m = o.default.helpers.scopedId(h), g = !h.depth && !m && this.blockParamIndex(p);
      g ? this.opcode("lookupBlockParam", g, h.parts) : p ? h.data ? (this.options.data = !0, this.opcode("lookupData", h.depth, h.parts, h.strict)) : this.opcode("lookupOnContext", h.parts, h.falsy, h.strict, m) : this.opcode("pushContext");
    },
    StringLiteral: function(h) {
      this.opcode("pushString", h.value);
    },
    NumberLiteral: function(h) {
      this.opcode("pushLiteral", h.value);
    },
    BooleanLiteral: function(h) {
      this.opcode("pushLiteral", h.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(h) {
      var p = h.pairs, m = 0, g = p.length;
      for (this.opcode("pushHash"); m < g; m++)
        this.pushParam(p[m].value);
      for (; m--; )
        this.opcode("assignToHash", p[m].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(h) {
      this.opcodes.push({
        opcode: h,
        args: s.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(h) {
      h && (this.useDepths = !0);
    },
    classifySexpr: function(h) {
      var p = o.default.helpers.simpleId(h.path), m = p && !!this.blockParamIndex(h.path.parts[0]), g = !m && o.default.helpers.helperExpression(h), y = !m && (g || p);
      if (y && !g) {
        var x = h.path.parts[0], k = this.options;
        k.knownHelpers[x] ? g = !0 : k.knownHelpersOnly && (y = !1);
      }
      return g ? "helper" : y ? "ambiguous" : "simple";
    },
    pushParams: function(h) {
      for (var p = 0, m = h.length; p < m; p++)
        this.pushParam(h[p]);
    },
    pushParam: function(h) {
      var p = h.value != null ? h.value : h.original || "";
      if (this.stringParams)
        p.replace && (p = p.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), h.depth && this.addDepth(h.depth), this.opcode("getContext", h.depth || 0), this.opcode("pushStringParam", p, h.type), h.type === "SubExpression" && this.accept(h);
      else {
        if (this.trackIds) {
          var m = void 0;
          if (h.parts && !o.default.helpers.scopedId(h) && !h.depth && (m = this.blockParamIndex(h.parts[0])), m) {
            var g = h.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", m, g);
          } else
            p = h.original || p, p.replace && (p = p.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", h.type, p);
        }
        this.accept(h);
      }
    },
    setupFullMustacheParams: function(h, p, m, g) {
      var y = h.params;
      return this.pushParams(y), this.opcode("pushProgram", p), this.opcode("pushProgram", m), h.hash ? this.accept(h.hash) : this.opcode("emptyHash", g), y;
    },
    blockParamIndex: function(h) {
      for (var p = 0, m = this.options.blockParams.length; p < m; p++) {
        var g = this.options.blockParams[p], y = g && r.indexOf(g, h);
        if (g && y >= 0)
          return [p, y];
      }
    }
  };
  function l(d, h, p) {
    if (d == null || typeof d != "string" && d.type !== "Program")
      throw new n.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + d);
    h = h || {}, "data" in h || (h.data = !0), h.compat && (h.useDepths = !0);
    var m = p.parse(d, h), g = new p.Compiler().compile(m, h);
    return new p.JavaScriptCompiler().compile(g, h);
  }
  function c(d, h, p) {
    if (h === void 0 && (h = {}), d == null || typeof d != "string" && d.type !== "Program")
      throw new n.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + d);
    h = r.extend({}, h), "data" in h || (h.data = !0), h.compat && (h.useDepths = !0);
    var m = void 0;
    function g() {
      var x = p.parse(d, h), k = new p.Compiler().compile(x, h), S = new p.JavaScriptCompiler().compile(k, h, void 0, !0);
      return p.template(S);
    }
    function y(x, k) {
      return m || (m = g()), m.call(this, x, k);
    }
    return y._setup = function(x) {
      return m || (m = g()), m._setup(x);
    }, y._child = function(x, k, S, b) {
      return m || (m = g()), m._child(x, k, S, b);
    }, y;
  }
  function u(d, h) {
    if (d === h)
      return !0;
    if (r.isArray(d) && r.isArray(h) && d.length === h.length) {
      for (var p = 0; p < d.length; p++)
        if (!u(d[p], h[p]))
          return !1;
      return !0;
    }
  }
  function f(d) {
    if (!d.path.parts) {
      var h = d.path;
      d.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [h.original + ""],
        original: h.original + "",
        loc: h.loc
      };
    }
  }
  return Ft;
}
var Pr = { exports: {} }, Ar = { exports: {} }, mn = {}, Yi = {}, Rr = {}, Tr = {}, Yu;
function hw() {
  if (Yu) return Tr;
  Yu = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Tr.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, Tr.decode = function(t) {
    var n = 65, r = 90, i = 97, o = 122, s = 48, a = 57, l = 43, c = 47, u = 26, f = 52;
    return n <= t && t <= r ? t - n : i <= t && t <= o ? t - i + u : s <= t && t <= a ? t - s + f : t == l ? 62 : t == c ? 63 : -1;
  }, Tr;
}
var Ku;
function mp() {
  if (Ku) return Rr;
  Ku = 1;
  var e = hw(), t = 5, n = 1 << t, r = n - 1, i = n;
  function o(a) {
    return a < 0 ? (-a << 1) + 1 : (a << 1) + 0;
  }
  function s(a) {
    var l = (a & 1) === 1, c = a >> 1;
    return l ? -c : c;
  }
  return Rr.encode = function(l) {
    var c = "", u, f = o(l);
    do
      u = f & r, f >>>= t, f > 0 && (u |= i), c += e.encode(u);
    while (f > 0);
    return c;
  }, Rr.decode = function(l, c, u) {
    var f = l.length, d = 0, h = 0, p, m;
    do {
      if (c >= f)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (m = e.decode(l.charCodeAt(c++)), m === -1)
        throw new Error("Invalid base64 digit: " + l.charAt(c - 1));
      p = !!(m & i), m &= r, d = d + (m << h), h += t;
    } while (p);
    u.value = s(d), u.rest = c;
  }, Rr;
}
var Ki = {}, Ju;
function Xn() {
  return Ju || (Ju = 1, (function(e) {
    function t(S, b, w) {
      if (b in S)
        return S[b];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + b + '" is a required argument.');
    }
    e.getArg = t;
    var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r = /^data:.+\,.+$/;
    function i(S) {
      var b = S.match(n);
      return b ? {
        scheme: b[1],
        auth: b[2],
        host: b[3],
        port: b[4],
        path: b[5]
      } : null;
    }
    e.urlParse = i;
    function o(S) {
      var b = "";
      return S.scheme && (b += S.scheme + ":"), b += "//", S.auth && (b += S.auth + "@"), S.host && (b += S.host), S.port && (b += ":" + S.port), S.path && (b += S.path), b;
    }
    e.urlGenerate = o;
    function s(S) {
      var b = S, w = i(S);
      if (w) {
        if (!w.path)
          return S;
        b = w.path;
      }
      for (var _ = e.isAbsolute(b), R = b.split(/\/+/), I, z = 0, T = R.length - 1; T >= 0; T--)
        I = R[T], I === "." ? R.splice(T, 1) : I === ".." ? z++ : z > 0 && (I === "" ? (R.splice(T + 1, z), z = 0) : (R.splice(T, 2), z--));
      return b = R.join("/"), b === "" && (b = _ ? "/" : "."), w ? (w.path = b, o(w)) : b;
    }
    e.normalize = s;
    function a(S, b) {
      S === "" && (S = "."), b === "" && (b = ".");
      var w = i(b), _ = i(S);
      if (_ && (S = _.path || "/"), w && !w.scheme)
        return _ && (w.scheme = _.scheme), o(w);
      if (w || b.match(r))
        return b;
      if (_ && !_.host && !_.path)
        return _.host = b, o(_);
      var R = b.charAt(0) === "/" ? b : s(S.replace(/\/+$/, "") + "/" + b);
      return _ ? (_.path = R, o(_)) : R;
    }
    e.join = a, e.isAbsolute = function(S) {
      return S.charAt(0) === "/" || n.test(S);
    };
    function l(S, b) {
      S === "" && (S = "."), S = S.replace(/\/$/, "");
      for (var w = 0; b.indexOf(S + "/") !== 0; ) {
        var _ = S.lastIndexOf("/");
        if (_ < 0 || (S = S.slice(0, _), S.match(/^([^\/]+:\/)?\/*$/)))
          return b;
        ++w;
      }
      return Array(w + 1).join("../") + b.substr(S.length + 1);
    }
    e.relative = l;
    var c = (function() {
      var S = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in S);
    })();
    function u(S) {
      return S;
    }
    function f(S) {
      return h(S) ? "$" + S : S;
    }
    e.toSetString = c ? u : f;
    function d(S) {
      return h(S) ? S.slice(1) : S;
    }
    e.fromSetString = c ? u : d;
    function h(S) {
      if (!S)
        return !1;
      var b = S.length;
      if (b < 9 || S.charCodeAt(b - 1) !== 95 || S.charCodeAt(b - 2) !== 95 || S.charCodeAt(b - 3) !== 111 || S.charCodeAt(b - 4) !== 116 || S.charCodeAt(b - 5) !== 111 || S.charCodeAt(b - 6) !== 114 || S.charCodeAt(b - 7) !== 112 || S.charCodeAt(b - 8) !== 95 || S.charCodeAt(b - 9) !== 95)
        return !1;
      for (var w = b - 10; w >= 0; w--)
        if (S.charCodeAt(w) !== 36)
          return !1;
      return !0;
    }
    function p(S, b, w) {
      var _ = g(S.source, b.source);
      return _ !== 0 || (_ = S.originalLine - b.originalLine, _ !== 0) || (_ = S.originalColumn - b.originalColumn, _ !== 0 || w) || (_ = S.generatedColumn - b.generatedColumn, _ !== 0) || (_ = S.generatedLine - b.generatedLine, _ !== 0) ? _ : g(S.name, b.name);
    }
    e.compareByOriginalPositions = p;
    function m(S, b, w) {
      var _ = S.generatedLine - b.generatedLine;
      return _ !== 0 || (_ = S.generatedColumn - b.generatedColumn, _ !== 0 || w) || (_ = g(S.source, b.source), _ !== 0) || (_ = S.originalLine - b.originalLine, _ !== 0) || (_ = S.originalColumn - b.originalColumn, _ !== 0) ? _ : g(S.name, b.name);
    }
    e.compareByGeneratedPositionsDeflated = m;
    function g(S, b) {
      return S === b ? 0 : S === null ? 1 : b === null ? -1 : S > b ? 1 : -1;
    }
    function y(S, b) {
      var w = S.generatedLine - b.generatedLine;
      return w !== 0 || (w = S.generatedColumn - b.generatedColumn, w !== 0) || (w = g(S.source, b.source), w !== 0) || (w = S.originalLine - b.originalLine, w !== 0) || (w = S.originalColumn - b.originalColumn, w !== 0) ? w : g(S.name, b.name);
    }
    e.compareByGeneratedPositionsInflated = y;
    function x(S) {
      return JSON.parse(S.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = x;
    function k(S, b, w) {
      if (b = b || "", S && (S[S.length - 1] !== "/" && b[0] !== "/" && (S += "/"), b = S + b), w) {
        var _ = i(w);
        if (!_)
          throw new Error("sourceMapURL could not be parsed");
        if (_.path) {
          var R = _.path.lastIndexOf("/");
          R >= 0 && (_.path = _.path.substring(0, R + 1));
        }
        b = a(o(_), b);
      }
      return s(b);
    }
    e.computeSourceURL = k;
  })(Ki)), Ki;
}
var Ji = {}, Xu;
function gp() {
  if (Xu) return Ji;
  Xu = 1;
  var e = Xn(), t = Object.prototype.hasOwnProperty, n = typeof Map < "u";
  function r() {
    this._array = [], this._set = n ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return r.fromArray = function(o, s) {
    for (var a = new r(), l = 0, c = o.length; l < c; l++)
      a.add(o[l], s);
    return a;
  }, r.prototype.size = function() {
    return n ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, r.prototype.add = function(o, s) {
    var a = n ? o : e.toSetString(o), l = n ? this.has(o) : t.call(this._set, a), c = this._array.length;
    (!l || s) && this._array.push(o), l || (n ? this._set.set(o, c) : this._set[a] = c);
  }, r.prototype.has = function(o) {
    if (n)
      return this._set.has(o);
    var s = e.toSetString(o);
    return t.call(this._set, s);
  }, r.prototype.indexOf = function(o) {
    if (n) {
      var s = this._set.get(o);
      if (s >= 0)
        return s;
    } else {
      var a = e.toSetString(o);
      if (t.call(this._set, a))
        return this._set[a];
    }
    throw new Error('"' + o + '" is not in the set.');
  }, r.prototype.at = function(o) {
    if (o >= 0 && o < this._array.length)
      return this._array[o];
    throw new Error("No element indexed by " + o);
  }, r.prototype.toArray = function() {
    return this._array.slice();
  }, Ji.ArraySet = r, Ji;
}
var Xi = {}, Qu;
function dw() {
  if (Qu) return Xi;
  Qu = 1;
  var e = Xn();
  function t(r, i) {
    var o = r.generatedLine, s = i.generatedLine, a = r.generatedColumn, l = i.generatedColumn;
    return s > o || s == o && l >= a || e.compareByGeneratedPositionsInflated(r, i) <= 0;
  }
  function n() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return n.prototype.unsortedForEach = function(i, o) {
    this._array.forEach(i, o);
  }, n.prototype.add = function(i) {
    t(this._last, i) ? (this._last = i, this._array.push(i)) : (this._sorted = !1, this._array.push(i));
  }, n.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, Xi.MappingList = n, Xi;
}
var Zu;
function yp() {
  if (Zu) return Yi;
  Zu = 1;
  var e = mp(), t = Xn(), n = gp().ArraySet, r = dw().MappingList;
  function i(o) {
    o || (o = {}), this._file = t.getArg(o, "file", null), this._sourceRoot = t.getArg(o, "sourceRoot", null), this._skipValidation = t.getArg(o, "skipValidation", !1), this._sources = new n(), this._names = new n(), this._mappings = new r(), this._sourcesContents = null;
  }
  return i.prototype._version = 3, i.fromSourceMap = function(s) {
    var a = s.sourceRoot, l = new i({
      file: s.file,
      sourceRoot: a
    });
    return s.eachMapping(function(c) {
      var u = {
        generated: {
          line: c.generatedLine,
          column: c.generatedColumn
        }
      };
      c.source != null && (u.source = c.source, a != null && (u.source = t.relative(a, u.source)), u.original = {
        line: c.originalLine,
        column: c.originalColumn
      }, c.name != null && (u.name = c.name)), l.addMapping(u);
    }), s.sources.forEach(function(c) {
      var u = c;
      a !== null && (u = t.relative(a, c)), l._sources.has(u) || l._sources.add(u);
      var f = s.sourceContentFor(c);
      f != null && l.setSourceContent(c, f);
    }), l;
  }, i.prototype.addMapping = function(s) {
    var a = t.getArg(s, "generated"), l = t.getArg(s, "original", null), c = t.getArg(s, "source", null), u = t.getArg(s, "name", null);
    this._skipValidation || this._validateMapping(a, l, c, u), c != null && (c = String(c), this._sources.has(c) || this._sources.add(c)), u != null && (u = String(u), this._names.has(u) || this._names.add(u)), this._mappings.add({
      generatedLine: a.line,
      generatedColumn: a.column,
      originalLine: l != null && l.line,
      originalColumn: l != null && l.column,
      source: c,
      name: u
    });
  }, i.prototype.setSourceContent = function(s, a) {
    var l = s;
    this._sourceRoot != null && (l = t.relative(this._sourceRoot, l)), a != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(l)] = a) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(l)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, i.prototype.applySourceMap = function(s, a, l) {
    var c = a;
    if (a == null) {
      if (s.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      c = s.file;
    }
    var u = this._sourceRoot;
    u != null && (c = t.relative(u, c));
    var f = new n(), d = new n();
    this._mappings.unsortedForEach(function(h) {
      if (h.source === c && h.originalLine != null) {
        var p = s.originalPositionFor({
          line: h.originalLine,
          column: h.originalColumn
        });
        p.source != null && (h.source = p.source, l != null && (h.source = t.join(l, h.source)), u != null && (h.source = t.relative(u, h.source)), h.originalLine = p.line, h.originalColumn = p.column, p.name != null && (h.name = p.name));
      }
      var m = h.source;
      m != null && !f.has(m) && f.add(m);
      var g = h.name;
      g != null && !d.has(g) && d.add(g);
    }, this), this._sources = f, this._names = d, s.sources.forEach(function(h) {
      var p = s.sourceContentFor(h);
      p != null && (l != null && (h = t.join(l, h)), u != null && (h = t.relative(u, h)), this.setSourceContent(h, p));
    }, this);
  }, i.prototype._validateMapping = function(s, a, l, c) {
    if (a && typeof a.line != "number" && typeof a.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(s && "line" in s && "column" in s && s.line > 0 && s.column >= 0 && !a && !l && !c)) {
      if (s && "line" in s && "column" in s && a && "line" in a && "column" in a && s.line > 0 && s.column >= 0 && a.line > 0 && a.column >= 0 && l)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: s,
        source: l,
        original: a,
        name: c
      }));
    }
  }, i.prototype._serializeMappings = function() {
    for (var s = 0, a = 1, l = 0, c = 0, u = 0, f = 0, d = "", h, p, m, g, y = this._mappings.toArray(), x = 0, k = y.length; x < k; x++) {
      if (p = y[x], h = "", p.generatedLine !== a)
        for (s = 0; p.generatedLine !== a; )
          h += ";", a++;
      else if (x > 0) {
        if (!t.compareByGeneratedPositionsInflated(p, y[x - 1]))
          continue;
        h += ",";
      }
      h += e.encode(p.generatedColumn - s), s = p.generatedColumn, p.source != null && (g = this._sources.indexOf(p.source), h += e.encode(g - f), f = g, h += e.encode(p.originalLine - 1 - c), c = p.originalLine - 1, h += e.encode(p.originalColumn - l), l = p.originalColumn, p.name != null && (m = this._names.indexOf(p.name), h += e.encode(m - u), u = m)), d += h;
    }
    return d;
  }, i.prototype._generateSourcesContent = function(s, a) {
    return s.map(function(l) {
      if (!this._sourcesContents)
        return null;
      a != null && (l = t.relative(a, l));
      var c = t.toSetString(l);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, c) ? this._sourcesContents[c] : null;
    }, this);
  }, i.prototype.toJSON = function() {
    var s = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (s.file = this._file), this._sourceRoot != null && (s.sourceRoot = this._sourceRoot), this._sourcesContents && (s.sourcesContent = this._generateSourcesContent(s.sources, s.sourceRoot)), s;
  }, i.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Yi.SourceMapGenerator = i, Yi;
}
var gn = {}, Qi = {}, $u;
function pw() {
  return $u || ($u = 1, (function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(n, r, i, o, s, a) {
      var l = Math.floor((r - n) / 2) + n, c = s(i, o[l], !0);
      return c === 0 ? l : c > 0 ? r - l > 1 ? t(l, r, i, o, s, a) : a == e.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : l : l - n > 1 ? t(n, l, i, o, s, a) : a == e.LEAST_UPPER_BOUND ? l : n < 0 ? -1 : n;
    }
    e.search = function(r, i, o, s) {
      if (i.length === 0)
        return -1;
      var a = t(
        -1,
        i.length,
        r,
        i,
        o,
        s || e.GREATEST_LOWER_BOUND
      );
      if (a < 0)
        return -1;
      for (; a - 1 >= 0 && o(i[a], i[a - 1], !0) === 0; )
        --a;
      return a;
    };
  })(Qi)), Qi;
}
var Zi = {}, ec;
function fw() {
  if (ec) return Zi;
  ec = 1;
  function e(r, i, o) {
    var s = r[i];
    r[i] = r[o], r[o] = s;
  }
  function t(r, i) {
    return Math.round(r + Math.random() * (i - r));
  }
  function n(r, i, o, s) {
    if (o < s) {
      var a = t(o, s), l = o - 1;
      e(r, a, s);
      for (var c = r[s], u = o; u < s; u++)
        i(r[u], c) <= 0 && (l += 1, e(r, l, u));
      e(r, l + 1, u);
      var f = l + 1;
      n(r, i, o, f - 1), n(r, i, f + 1, s);
    }
  }
  return Zi.quickSort = function(r, i) {
    n(r, i, 0, r.length - 1);
  }, Zi;
}
var tc;
function mw() {
  if (tc) return gn;
  tc = 1;
  var e = Xn(), t = pw(), n = gp().ArraySet, r = mp(), i = fw().quickSort;
  function o(c, u) {
    var f = c;
    return typeof c == "string" && (f = e.parseSourceMapInput(c)), f.sections != null ? new l(f, u) : new s(f, u);
  }
  o.fromSourceMap = function(c, u) {
    return s.fromSourceMap(c, u);
  }, o.prototype._version = 3, o.prototype.__generatedMappings = null, Object.defineProperty(o.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), o.prototype.__originalMappings = null, Object.defineProperty(o.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), o.prototype._charIsMappingSeparator = function(u, f) {
    var d = u.charAt(f);
    return d === ";" || d === ",";
  }, o.prototype._parseMappings = function(u, f) {
    throw new Error("Subclasses must implement _parseMappings");
  }, o.GENERATED_ORDER = 1, o.ORIGINAL_ORDER = 2, o.GREATEST_LOWER_BOUND = 1, o.LEAST_UPPER_BOUND = 2, o.prototype.eachMapping = function(u, f, d) {
    var h = f || null, p = d || o.GENERATED_ORDER, m;
    switch (p) {
      case o.GENERATED_ORDER:
        m = this._generatedMappings;
        break;
      case o.ORIGINAL_ORDER:
        m = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var g = this.sourceRoot;
    m.map(function(y) {
      var x = y.source === null ? null : this._sources.at(y.source);
      return x = e.computeSourceURL(g, x, this._sourceMapURL), {
        source: x,
        generatedLine: y.generatedLine,
        generatedColumn: y.generatedColumn,
        originalLine: y.originalLine,
        originalColumn: y.originalColumn,
        name: y.name === null ? null : this._names.at(y.name)
      };
    }, this).forEach(u, h);
  }, o.prototype.allGeneratedPositionsFor = function(u) {
    var f = e.getArg(u, "line"), d = {
      source: e.getArg(u, "source"),
      originalLine: f,
      originalColumn: e.getArg(u, "column", 0)
    };
    if (d.source = this._findSourceIndex(d.source), d.source < 0)
      return [];
    var h = [], p = this._findMapping(
      d,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (p >= 0) {
      var m = this._originalMappings[p];
      if (u.column === void 0)
        for (var g = m.originalLine; m && m.originalLine === g; )
          h.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++p];
      else
        for (var y = m.originalColumn; m && m.originalLine === f && m.originalColumn == y; )
          h.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++p];
    }
    return h;
  }, gn.SourceMapConsumer = o;
  function s(c, u) {
    var f = c;
    typeof c == "string" && (f = e.parseSourceMapInput(c));
    var d = e.getArg(f, "version"), h = e.getArg(f, "sources"), p = e.getArg(f, "names", []), m = e.getArg(f, "sourceRoot", null), g = e.getArg(f, "sourcesContent", null), y = e.getArg(f, "mappings"), x = e.getArg(f, "file", null);
    if (d != this._version)
      throw new Error("Unsupported version: " + d);
    m && (m = e.normalize(m)), h = h.map(String).map(e.normalize).map(function(k) {
      return m && e.isAbsolute(m) && e.isAbsolute(k) ? e.relative(m, k) : k;
    }), this._names = n.fromArray(p.map(String), !0), this._sources = n.fromArray(h, !0), this._absoluteSources = this._sources.toArray().map(function(k) {
      return e.computeSourceURL(m, k, u);
    }), this.sourceRoot = m, this.sourcesContent = g, this._mappings = y, this._sourceMapURL = u, this.file = x;
  }
  s.prototype = Object.create(o.prototype), s.prototype.consumer = o, s.prototype._findSourceIndex = function(c) {
    var u = c;
    if (this.sourceRoot != null && (u = e.relative(this.sourceRoot, u)), this._sources.has(u))
      return this._sources.indexOf(u);
    var f;
    for (f = 0; f < this._absoluteSources.length; ++f)
      if (this._absoluteSources[f] == c)
        return f;
    return -1;
  }, s.fromSourceMap = function(u, f) {
    var d = Object.create(s.prototype), h = d._names = n.fromArray(u._names.toArray(), !0), p = d._sources = n.fromArray(u._sources.toArray(), !0);
    d.sourceRoot = u._sourceRoot, d.sourcesContent = u._generateSourcesContent(
      d._sources.toArray(),
      d.sourceRoot
    ), d.file = u._file, d._sourceMapURL = f, d._absoluteSources = d._sources.toArray().map(function(w) {
      return e.computeSourceURL(d.sourceRoot, w, f);
    });
    for (var m = u._mappings.toArray().slice(), g = d.__generatedMappings = [], y = d.__originalMappings = [], x = 0, k = m.length; x < k; x++) {
      var S = m[x], b = new a();
      b.generatedLine = S.generatedLine, b.generatedColumn = S.generatedColumn, S.source && (b.source = p.indexOf(S.source), b.originalLine = S.originalLine, b.originalColumn = S.originalColumn, S.name && (b.name = h.indexOf(S.name)), y.push(b)), g.push(b);
    }
    return i(d.__originalMappings, e.compareByOriginalPositions), d;
  }, s.prototype._version = 3, Object.defineProperty(s.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function a() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  s.prototype._parseMappings = function(u, f) {
    for (var d = 1, h = 0, p = 0, m = 0, g = 0, y = 0, x = u.length, k = 0, S = {}, b = {}, w = [], _ = [], R, I, z, T, A; k < x; )
      if (u.charAt(k) === ";")
        d++, k++, h = 0;
      else if (u.charAt(k) === ",")
        k++;
      else {
        for (R = new a(), R.generatedLine = d, T = k; T < x && !this._charIsMappingSeparator(u, T); T++)
          ;
        if (I = u.slice(k, T), z = S[I], z)
          k += I.length;
        else {
          for (z = []; k < T; )
            r.decode(u, k, b), A = b.value, k = b.rest, z.push(A);
          if (z.length === 2)
            throw new Error("Found a source, but no line and column");
          if (z.length === 3)
            throw new Error("Found a source and line, but no column");
          S[I] = z;
        }
        R.generatedColumn = h + z[0], h = R.generatedColumn, z.length > 1 && (R.source = g + z[1], g += z[1], R.originalLine = p + z[2], p = R.originalLine, R.originalLine += 1, R.originalColumn = m + z[3], m = R.originalColumn, z.length > 4 && (R.name = y + z[4], y += z[4])), _.push(R), typeof R.originalLine == "number" && w.push(R);
      }
    i(_, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = _, i(w, e.compareByOriginalPositions), this.__originalMappings = w;
  }, s.prototype._findMapping = function(u, f, d, h, p, m) {
    if (u[d] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + u[d]);
    if (u[h] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + u[h]);
    return t.search(u, f, p, m);
  }, s.prototype.computeColumnSpans = function() {
    for (var u = 0; u < this._generatedMappings.length; ++u) {
      var f = this._generatedMappings[u];
      if (u + 1 < this._generatedMappings.length) {
        var d = this._generatedMappings[u + 1];
        if (f.generatedLine === d.generatedLine) {
          f.lastGeneratedColumn = d.generatedColumn - 1;
          continue;
        }
      }
      f.lastGeneratedColumn = 1 / 0;
    }
  }, s.prototype.originalPositionFor = function(u) {
    var f = {
      generatedLine: e.getArg(u, "line"),
      generatedColumn: e.getArg(u, "column")
    }, d = this._findMapping(
      f,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(u, "bias", o.GREATEST_LOWER_BOUND)
    );
    if (d >= 0) {
      var h = this._generatedMappings[d];
      if (h.generatedLine === f.generatedLine) {
        var p = e.getArg(h, "source", null);
        p !== null && (p = this._sources.at(p), p = e.computeSourceURL(this.sourceRoot, p, this._sourceMapURL));
        var m = e.getArg(h, "name", null);
        return m !== null && (m = this._names.at(m)), {
          source: p,
          line: e.getArg(h, "originalLine", null),
          column: e.getArg(h, "originalColumn", null),
          name: m
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, s.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(u) {
      return u == null;
    }) : !1;
  }, s.prototype.sourceContentFor = function(u, f) {
    if (!this.sourcesContent)
      return null;
    var d = this._findSourceIndex(u);
    if (d >= 0)
      return this.sourcesContent[d];
    var h = u;
    this.sourceRoot != null && (h = e.relative(this.sourceRoot, h));
    var p;
    if (this.sourceRoot != null && (p = e.urlParse(this.sourceRoot))) {
      var m = h.replace(/^file:\/\//, "");
      if (p.scheme == "file" && this._sources.has(m))
        return this.sourcesContent[this._sources.indexOf(m)];
      if ((!p.path || p.path == "/") && this._sources.has("/" + h))
        return this.sourcesContent[this._sources.indexOf("/" + h)];
    }
    if (f)
      return null;
    throw new Error('"' + h + '" is not in the SourceMap.');
  }, s.prototype.generatedPositionFor = function(u) {
    var f = e.getArg(u, "source");
    if (f = this._findSourceIndex(f), f < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var d = {
      source: f,
      originalLine: e.getArg(u, "line"),
      originalColumn: e.getArg(u, "column")
    }, h = this._findMapping(
      d,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(u, "bias", o.GREATEST_LOWER_BOUND)
    );
    if (h >= 0) {
      var p = this._originalMappings[h];
      if (p.source === d.source)
        return {
          line: e.getArg(p, "generatedLine", null),
          column: e.getArg(p, "generatedColumn", null),
          lastColumn: e.getArg(p, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, gn.BasicSourceMapConsumer = s;
  function l(c, u) {
    var f = c;
    typeof c == "string" && (f = e.parseSourceMapInput(c));
    var d = e.getArg(f, "version"), h = e.getArg(f, "sections");
    if (d != this._version)
      throw new Error("Unsupported version: " + d);
    this._sources = new n(), this._names = new n();
    var p = {
      line: -1,
      column: 0
    };
    this._sections = h.map(function(m) {
      if (m.url)
        throw new Error("Support for url field in sections not implemented.");
      var g = e.getArg(m, "offset"), y = e.getArg(g, "line"), x = e.getArg(g, "column");
      if (y < p.line || y === p.line && x < p.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return p = g, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: y + 1,
          generatedColumn: x + 1
        },
        consumer: new o(e.getArg(m, "map"), u)
      };
    });
  }
  return l.prototype = Object.create(o.prototype), l.prototype.constructor = o, l.prototype._version = 3, Object.defineProperty(l.prototype, "sources", {
    get: function() {
      for (var c = [], u = 0; u < this._sections.length; u++)
        for (var f = 0; f < this._sections[u].consumer.sources.length; f++)
          c.push(this._sections[u].consumer.sources[f]);
      return c;
    }
  }), l.prototype.originalPositionFor = function(u) {
    var f = {
      generatedLine: e.getArg(u, "line"),
      generatedColumn: e.getArg(u, "column")
    }, d = t.search(
      f,
      this._sections,
      function(p, m) {
        var g = p.generatedLine - m.generatedOffset.generatedLine;
        return g || p.generatedColumn - m.generatedOffset.generatedColumn;
      }
    ), h = this._sections[d];
    return h ? h.consumer.originalPositionFor({
      line: f.generatedLine - (h.generatedOffset.generatedLine - 1),
      column: f.generatedColumn - (h.generatedOffset.generatedLine === f.generatedLine ? h.generatedOffset.generatedColumn - 1 : 0),
      bias: u.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, l.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(u) {
      return u.consumer.hasContentsOfAllSources();
    });
  }, l.prototype.sourceContentFor = function(u, f) {
    for (var d = 0; d < this._sections.length; d++) {
      var h = this._sections[d], p = h.consumer.sourceContentFor(u, !0);
      if (p)
        return p;
    }
    if (f)
      return null;
    throw new Error('"' + u + '" is not in the SourceMap.');
  }, l.prototype.generatedPositionFor = function(u) {
    for (var f = 0; f < this._sections.length; f++) {
      var d = this._sections[f];
      if (d.consumer._findSourceIndex(e.getArg(u, "source")) !== -1) {
        var h = d.consumer.generatedPositionFor(u);
        if (h) {
          var p = {
            line: h.line + (d.generatedOffset.generatedLine - 1),
            column: h.column + (d.generatedOffset.generatedLine === h.line ? d.generatedOffset.generatedColumn - 1 : 0)
          };
          return p;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, l.prototype._parseMappings = function(u, f) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var d = 0; d < this._sections.length; d++)
      for (var h = this._sections[d], p = h.consumer._generatedMappings, m = 0; m < p.length; m++) {
        var g = p[m], y = h.consumer._sources.at(g.source);
        y = e.computeSourceURL(h.consumer.sourceRoot, y, this._sourceMapURL), this._sources.add(y), y = this._sources.indexOf(y);
        var x = null;
        g.name && (x = h.consumer._names.at(g.name), this._names.add(x), x = this._names.indexOf(x));
        var k = {
          source: y,
          generatedLine: g.generatedLine + (h.generatedOffset.generatedLine - 1),
          generatedColumn: g.generatedColumn + (h.generatedOffset.generatedLine === g.generatedLine ? h.generatedOffset.generatedColumn - 1 : 0),
          originalLine: g.originalLine,
          originalColumn: g.originalColumn,
          name: x
        };
        this.__generatedMappings.push(k), typeof k.originalLine == "number" && this.__originalMappings.push(k);
      }
    i(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), i(this.__originalMappings, e.compareByOriginalPositions);
  }, gn.IndexedSourceMapConsumer = l, gn;
}
var $i = {}, nc;
function gw() {
  if (nc) return $i;
  nc = 1;
  var e = yp().SourceMapGenerator, t = Xn(), n = /(\r?\n)/, r = 10, i = "$$$isSourceNode$$$";
  function o(s, a, l, c, u) {
    this.children = [], this.sourceContents = {}, this.line = s ?? null, this.column = a ?? null, this.source = l ?? null, this.name = u ?? null, this[i] = !0, c != null && this.add(c);
  }
  return o.fromStringWithSourceMap = function(a, l, c) {
    var u = new o(), f = a.split(n), d = 0, h = function() {
      var x = S(), k = S() || "";
      return x + k;
      function S() {
        return d < f.length ? f[d++] : void 0;
      }
    }, p = 1, m = 0, g = null;
    return l.eachMapping(function(x) {
      if (g !== null)
        if (p < x.generatedLine)
          y(g, h()), p++, m = 0;
        else {
          var k = f[d] || "", S = k.substr(0, x.generatedColumn - m);
          f[d] = k.substr(x.generatedColumn - m), m = x.generatedColumn, y(g, S), g = x;
          return;
        }
      for (; p < x.generatedLine; )
        u.add(h()), p++;
      if (m < x.generatedColumn) {
        var k = f[d] || "";
        u.add(k.substr(0, x.generatedColumn)), f[d] = k.substr(x.generatedColumn), m = x.generatedColumn;
      }
      g = x;
    }, this), d < f.length && (g && y(g, h()), u.add(f.splice(d).join(""))), l.sources.forEach(function(x) {
      var k = l.sourceContentFor(x);
      k != null && (c != null && (x = t.join(c, x)), u.setSourceContent(x, k));
    }), u;
    function y(x, k) {
      if (x === null || x.source === void 0)
        u.add(k);
      else {
        var S = c ? t.join(c, x.source) : x.source;
        u.add(new o(
          x.originalLine,
          x.originalColumn,
          S,
          k,
          x.name
        ));
      }
    }
  }, o.prototype.add = function(a) {
    if (Array.isArray(a))
      a.forEach(function(l) {
        this.add(l);
      }, this);
    else if (a[i] || typeof a == "string")
      a && this.children.push(a);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + a
      );
    return this;
  }, o.prototype.prepend = function(a) {
    if (Array.isArray(a))
      for (var l = a.length - 1; l >= 0; l--)
        this.prepend(a[l]);
    else if (a[i] || typeof a == "string")
      this.children.unshift(a);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + a
      );
    return this;
  }, o.prototype.walk = function(a) {
    for (var l, c = 0, u = this.children.length; c < u; c++)
      l = this.children[c], l[i] ? l.walk(a) : l !== "" && a(l, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, o.prototype.join = function(a) {
    var l, c, u = this.children.length;
    if (u > 0) {
      for (l = [], c = 0; c < u - 1; c++)
        l.push(this.children[c]), l.push(a);
      l.push(this.children[c]), this.children = l;
    }
    return this;
  }, o.prototype.replaceRight = function(a, l) {
    var c = this.children[this.children.length - 1];
    return c[i] ? c.replaceRight(a, l) : typeof c == "string" ? this.children[this.children.length - 1] = c.replace(a, l) : this.children.push("".replace(a, l)), this;
  }, o.prototype.setSourceContent = function(a, l) {
    this.sourceContents[t.toSetString(a)] = l;
  }, o.prototype.walkSourceContents = function(a) {
    for (var l = 0, c = this.children.length; l < c; l++)
      this.children[l][i] && this.children[l].walkSourceContents(a);
    for (var u = Object.keys(this.sourceContents), l = 0, c = u.length; l < c; l++)
      a(t.fromSetString(u[l]), this.sourceContents[u[l]]);
  }, o.prototype.toString = function() {
    var a = "";
    return this.walk(function(l) {
      a += l;
    }), a;
  }, o.prototype.toStringWithSourceMap = function(a) {
    var l = {
      code: "",
      line: 1,
      column: 0
    }, c = new e(a), u = !1, f = null, d = null, h = null, p = null;
    return this.walk(function(m, g) {
      l.code += m, g.source !== null && g.line !== null && g.column !== null ? ((f !== g.source || d !== g.line || h !== g.column || p !== g.name) && c.addMapping({
        source: g.source,
        original: {
          line: g.line,
          column: g.column
        },
        generated: {
          line: l.line,
          column: l.column
        },
        name: g.name
      }), f = g.source, d = g.line, h = g.column, p = g.name, u = !0) : u && (c.addMapping({
        generated: {
          line: l.line,
          column: l.column
        }
      }), f = null, u = !1);
      for (var y = 0, x = m.length; y < x; y++)
        m.charCodeAt(y) === r ? (l.line++, l.column = 0, y + 1 === x ? (f = null, u = !1) : u && c.addMapping({
          source: g.source,
          original: {
            line: g.line,
            column: g.column
          },
          generated: {
            line: l.line,
            column: l.column
          },
          name: g.name
        })) : l.column++;
    }), this.walkSourceContents(function(m, g) {
      c.setSourceContent(m, g);
    }), { code: l.code, map: c };
  }, $i.SourceNode = o, $i;
}
var rc;
function yw() {
  return rc || (rc = 1, mn.SourceMapGenerator = yp().SourceMapGenerator, mn.SourceMapConsumer = mw().SourceMapConsumer, mn.SourceNode = gw().SourceNode), mn;
}
var ic;
function vw() {
  return ic || (ic = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe(), r = void 0;
    try {
      var i = yw();
      r = i.SourceNode;
    } catch {
    }
    r || (r = function(a, l, c, u) {
      this.src = "", u && this.add(u);
    }, r.prototype = {
      add: function(l) {
        n.isArray(l) && (l = l.join("")), this.src += l;
      },
      prepend: function(l) {
        n.isArray(l) && (l = l.join("")), this.src = l + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function o(a, l, c) {
      if (n.isArray(a)) {
        for (var u = [], f = 0, d = a.length; f < d; f++)
          u.push(l.wrap(a[f], c));
        return u;
      } else if (typeof a == "boolean" || typeof a == "number")
        return a + "";
      return a;
    }
    function s(a) {
      this.srcFile = a, this.source = [];
    }
    s.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(l, c) {
        this.source.unshift(this.wrap(l, c));
      },
      push: function(l, c) {
        this.source.push(this.wrap(l, c));
      },
      merge: function() {
        var l = this.empty();
        return this.each(function(c) {
          l.add(["  ", c, `
`]);
        }), l;
      },
      each: function(l) {
        for (var c = 0, u = this.source.length; c < u; c++)
          l(this.source[c]);
      },
      empty: function() {
        var l = this.currentLocation || { start: {} };
        return new r(l.start.line, l.start.column, this.srcFile);
      },
      wrap: function(l) {
        var c = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return l instanceof r ? l : (l = o(l, this, c), new r(c.start.line, c.start.column, this.srcFile, l));
      },
      functionCall: function(l, c, u) {
        return u = this.generateList(u), this.wrap([l, c ? "." + c + "(" : "(", u, ")"]);
      },
      quotedString: function(l) {
        return '"' + (l + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(l) {
        var c = this, u = [];
        Object.keys(l).forEach(function(d) {
          var h = o(l[d], c);
          h !== "undefined" && u.push([c.quotedString(d), ":", h]);
        });
        var f = this.generateList(u);
        return f.prepend("{"), f.add("}"), f;
      },
      generateList: function(l) {
        for (var c = this.empty(), u = 0, f = l.length; u < f; u++)
          u && c.add(","), c.add(o(l[u], this));
        return c;
      },
      generateArray: function(l) {
        var c = this.generateList(l);
        return c.prepend("["), c.add("]"), c;
      }
    }, t.default = s, e.exports = t.default;
  })(Ar, Ar.exports)), Ar.exports;
}
var oc;
function xw() {
  return oc || (oc = 1, (function(e, t) {
    t.__esModule = !0;
    function n(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var r = Ds(), i = We(), o = n(i), s = Oe(), a = vw(), l = n(a);
    function c(d) {
      this.value = d;
    }
    function u() {
    }
    u.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(h, p) {
        return this.internalNameLookup(h, p);
      },
      depthedLookup: function(h) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(h), ")"];
      },
      compilerInfo: function() {
        var h = r.COMPILER_REVISION, p = r.REVISION_CHANGES[h];
        return [h, p];
      },
      appendToBuffer: function(h, p, m) {
        return s.isArray(h) || (h = [h]), h = this.source.wrap(h, p), this.environment.isSimple ? ["return ", h, ";"] : m ? ["buffer += ", h, ";"] : (h.appendToBuffer = !0, h);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(h, p) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", h, ",", JSON.stringify(p), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(h, p, m, g) {
        this.environment = h, this.options = p, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !g, this.name = this.environment.name, this.isChild = !!m, this.context = m || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(h, p), this.useDepths = this.useDepths || h.useDepths || h.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || h.useBlockParams;
        var y = h.opcodes, x = void 0, k = void 0, S = void 0, b = void 0;
        for (S = 0, b = y.length; S < b; S++)
          x = y[S], this.source.currentLocation = x.loc, k = k || x.loc, this[x.opcode].apply(this, x.args);
        if (this.source.currentLocation = k, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new o.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), g ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var w = this.createFunctionContext(g);
        if (this.isChild)
          return w;
        var _ = {
          compiler: this.compilerInfo(),
          main: w
        };
        this.decorators && (_.main_d = this.decorators, _.useDecorators = !0);
        var R = this.context, I = R.programs, z = R.decorators;
        for (S = 0, b = I.length; S < b; S++)
          _[S] = I[S], z[S] && (_[S + "_d"] = z[S], _.useDecorators = !0);
        return this.environment.usePartial && (_.usePartial = !0), this.options.data && (_.useData = !0), this.useDepths && (_.useDepths = !0), this.useBlockParams && (_.useBlockParams = !0), this.options.compat && (_.compat = !0), g ? _.compilerOptions = this.options : (_.compiler = JSON.stringify(_.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, _ = this.objectLiteral(_), p.srcName ? (_ = _.toStringWithSourceMap({ file: p.destName }), _.map = _.map && _.map.toString()) : _ = _.toString()), _;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new l.default(this.options.srcName), this.decorators = new l.default(this.options.srcName);
      },
      createFunctionContext: function(h) {
        var p = this, m = "", g = this.stackVars.concat(this.registers.list);
        g.length > 0 && (m += ", " + g.join(", "));
        var y = 0;
        Object.keys(this.aliases).forEach(function(S) {
          var b = p.aliases[S];
          b.children && b.referenceCount > 1 && (m += ", alias" + ++y + "=" + S, b.children[0] = "alias" + y);
        }), this.lookupPropertyFunctionIsUsed && (m += ", " + this.lookupPropertyFunctionVarDeclaration());
        var x = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths");
        var k = this.mergeSource(m);
        return h ? (x.push(k), Function.apply(this, x)) : this.source.wrap(["function(", x.join(","), `) {
  `, k, "}"]);
      },
      mergeSource: function(h) {
        var p = this.environment.isSimple, m = !this.forceBuffer, g = void 0, y = void 0, x = void 0, k = void 0;
        return this.source.each(function(S) {
          S.appendToBuffer ? (x ? S.prepend("  + ") : x = S, k = S) : (x && (y ? x.prepend("buffer += ") : g = !0, k.add(";"), x = k = void 0), y = !0, p || (m = !1));
        }), m ? x ? (x.prepend("return "), k.add(";")) : y || this.source.push('return "";') : (h += ", buffer = " + (g ? "" : this.initializeBuffer()), x ? (x.prepend("return buffer + "), k.add(";")) : this.source.push("return buffer;")), h && this.source.prepend("var " + h.substring(2) + (g ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(h) {
        var p = this.aliasable("container.hooks.blockHelperMissing"), m = [this.contextName(0)];
        this.setupHelperArgs(h, 0, m);
        var g = this.popStack();
        m.splice(1, 0, g), this.push(this.source.functionCall(p, "call", m));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var h = this.aliasable("container.hooks.blockHelperMissing"), p = [this.contextName(0)];
        this.setupHelperArgs("", 0, p, !0), this.flushInline();
        var m = this.topStack();
        p.splice(1, 0, m), this.pushSource(["if (!", this.lastHelper, ") { ", m, " = ", this.source.functionCall(h, "call", p), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(h) {
        this.pendingContent ? h = this.pendingContent + h : this.pendingLocation = this.source.currentLocation, this.pendingContent = h;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(p) {
            return [" != null ? ", p, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var h = this.popStack();
          this.pushSource(["if (", h, " != null) { ", this.appendToBuffer(h, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(h) {
        this.lastContext = h;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(h, p, m, g) {
        var y = 0;
        !g && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(h[y++])) : this.pushContext(), this.resolvePath("context", h, y, p, m);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(h, p) {
        this.useBlockParams = !0, this.push(["blockParams[", h[0], "][", h[1], "]"]), this.resolvePath("context", p, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(h, p, m) {
        h ? this.pushStackLiteral("container.data(data, " + h + ")") : this.pushStackLiteral("data"), this.resolvePath("data", p, 0, !0, m);
      },
      resolvePath: function(h, p, m, g, y) {
        var x = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(f(this.options.strict && y, this, p, m, h));
          return;
        }
        for (var k = p.length, S = function(w) {
          x.replaceStack(function(_) {
            var R = x.nameLookup(_, p[w], h);
            return g ? [" && ", R] : [" != null ? ", R, " : ", _];
          });
        }, b = m; b < k; b++)
          S(b);
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(h, p) {
        this.pushContext(), this.pushString(p), p !== "SubExpression" && (typeof h == "string" ? this.pushString(h) : this.pushStackLiteral(h));
      },
      emptyHash: function(h) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(h ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var h = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(h.ids)), this.stringParams && (this.push(this.objectLiteral(h.contexts)), this.push(this.objectLiteral(h.types))), this.push(this.objectLiteral(h.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(h) {
        this.pushStackLiteral(this.quotedString(h));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(h) {
        this.pushStackLiteral(h);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(h) {
        h != null ? this.pushStackLiteral(this.programExpression(h)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(h, p) {
        var m = this.nameLookup("decorators", p, "decorator"), g = this.setupHelperArgs(p, h);
        this.decorators.push(["var decorator = ", m, ";"]), this.decorators.push(['if (typeof decorator !== "function") { throw new Error(', this.quotedString('Missing decorator: "' + p + '"'), "); }"]), this.decorators.push(["fn = ", this.decorators.functionCall("decorator", "", ["fn", "props", "container", g]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(h, p, m) {
        var g = this.popStack(), y = this.setupHelper(h, p), x = [];
        m && x.push(y.name), x.push(g), this.options.strict || x.push(this.aliasable("container.hooks.helperMissing"));
        var k = ["(", this.itemsSeparatedBy(x, "||"), ")"], S = this.source.functionCall(k, "call", y.callParams);
        this.push(S);
      },
      itemsSeparatedBy: function(h, p) {
        var m = [];
        m.push(h[0]);
        for (var g = 1; g < h.length; g++)
          m.push(p, h[g]);
        return m;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(h, p) {
        var m = this.setupHelper(h, p);
        this.push(this.source.functionCall(m.name, "call", m.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(h, p) {
        this.useRegister("helper");
        var m = this.popStack();
        this.emptyHash();
        var g = this.setupHelper(0, h, p), y = this.lastHelper = this.nameLookup("helpers", h, "helper"), x = ["(", "(helper = ", y, " || ", m, ")"];
        this.options.strict || (x[0] = "(helper = ", x.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", x, g.paramsInit ? ["),(", g.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", g.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(h, p, m) {
        var g = [], y = this.setupParams(p, 1, g);
        h && (p = this.popStack(), delete y.name), m && (y.indent = JSON.stringify(m)), y.helpers = "helpers", y.partials = "partials", y.decorators = "container.decorators", h ? g.unshift(p) : g.unshift(this.nameLookup("partials", p, "partial")), this.options.compat && (y.depths = "depths"), y = this.objectLiteral(y), g.push(y), this.push(this.source.functionCall("container.invokePartial", "", g));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(h) {
        var p = this.popStack(), m = void 0, g = void 0, y = void 0;
        this.trackIds && (y = this.popStack()), this.stringParams && (g = this.popStack(), m = this.popStack());
        var x = this.hash;
        m && (x.contexts[h] = m), g && (x.types[h] = g), y && (x.ids[h] = y), x.values[h] = p;
      },
      pushId: function(h, p, m) {
        h === "BlockParam" ? this.pushStackLiteral("blockParams[" + p[0] + "].path[" + p[1] + "]" + (m ? " + " + JSON.stringify("." + m) : "")) : h === "PathExpression" ? this.pushString(p) : h === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: u,
      compileChildren: function(h, p) {
        for (var m = h.children, g = void 0, y = void 0, x = 0, k = m.length; x < k; x++) {
          g = m[x], y = new this.compiler();
          var S = this.matchExistingProgram(g);
          if (S == null) {
            var b = this.context.programs.push("") - 1;
            g.index = b, g.name = "program" + b, this.context.programs[b] = y.compile(g, p, this.context, !this.precompile), this.context.decorators[b] = y.decorators, this.context.environments[b] = g, this.useDepths = this.useDepths || y.useDepths, this.useBlockParams = this.useBlockParams || y.useBlockParams, g.useDepths = this.useDepths, g.useBlockParams = this.useBlockParams;
          } else
            g.index = S.index, g.name = "program" + S.index, this.useDepths = this.useDepths || S.useDepths, this.useBlockParams = this.useBlockParams || S.useBlockParams;
        }
      },
      matchExistingProgram: function(h) {
        for (var p = 0, m = this.context.environments.length; p < m; p++) {
          var g = this.context.environments[p];
          if (g && g.equals(h))
            return g;
        }
      },
      programExpression: function(h) {
        var p = this.environment.children[h], m = [p.index, "data", p.blockParams];
        return (this.useBlockParams || this.useDepths) && m.push("blockParams"), this.useDepths && m.push("depths"), "container.program(" + m.join(", ") + ")";
      },
      useRegister: function(h) {
        this.registers[h] || (this.registers[h] = !0, this.registers.list.push(h));
      },
      push: function(h) {
        return h instanceof c || (h = this.source.wrap(h)), this.inlineStack.push(h), h;
      },
      pushStackLiteral: function(h) {
        this.push(new c(h));
      },
      pushSource: function(h) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), h && this.source.push(h);
      },
      replaceStack: function(h) {
        var p = ["("], m = void 0, g = void 0, y = void 0;
        if (!this.isInline())
          throw new o.default("replaceStack on non-inline");
        var x = this.popStack(!0);
        if (x instanceof c)
          m = [x.value], p = ["(", m], y = !0;
        else {
          g = !0;
          var k = this.incrStack();
          p = ["((", this.push(k), " = ", x, ")"], m = this.topStack();
        }
        var S = h.call(this, m);
        y || this.popStack(), g && this.stackSlot--, this.push(p.concat(S, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var h = this.inlineStack;
        this.inlineStack = [];
        for (var p = 0, m = h.length; p < m; p++) {
          var g = h[p];
          if (g instanceof c)
            this.compileStack.push(g);
          else {
            var y = this.incrStack();
            this.pushSource([y, " = ", g, ";"]), this.compileStack.push(y);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(h) {
        var p = this.isInline(), m = (p ? this.inlineStack : this.compileStack).pop();
        if (!h && m instanceof c)
          return m.value;
        if (!p) {
          if (!this.stackSlot)
            throw new o.default("Invalid stack pop");
          this.stackSlot--;
        }
        return m;
      },
      topStack: function() {
        var h = this.isInline() ? this.inlineStack : this.compileStack, p = h[h.length - 1];
        return p instanceof c ? p.value : p;
      },
      contextName: function(h) {
        return this.useDepths && h ? "depths[" + h + "]" : "depth" + h;
      },
      quotedString: function(h) {
        return this.source.quotedString(h);
      },
      objectLiteral: function(h) {
        return this.source.objectLiteral(h);
      },
      aliasable: function(h) {
        var p = this.aliases[h];
        return p ? (p.referenceCount++, p) : (p = this.aliases[h] = this.source.wrap(h), p.aliasable = !0, p.referenceCount = 1, p);
      },
      setupHelper: function(h, p, m) {
        var g = [], y = this.setupHelperArgs(p, h, g, m), x = this.nameLookup("helpers", p, "helper"), k = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: g,
          paramsInit: y,
          name: x,
          callParams: [k].concat(g)
        };
      },
      setupParams: function(h, p, m) {
        var g = {}, y = [], x = [], k = [], S = !m, b = void 0;
        S && (m = []), g.name = this.quotedString(h), g.hash = this.popStack(), this.trackIds && (g.hashIds = this.popStack()), this.stringParams && (g.hashTypes = this.popStack(), g.hashContexts = this.popStack());
        var w = this.popStack(), _ = this.popStack();
        (_ || w) && (g.fn = _ || "container.noop", g.inverse = w || "container.noop");
        for (var R = p; R--; )
          b = this.popStack(), m[R] = b, this.trackIds && (k[R] = this.popStack()), this.stringParams && (x[R] = this.popStack(), y[R] = this.popStack());
        return S && (g.args = this.source.generateArray(m)), this.trackIds && (g.ids = this.source.generateArray(k)), this.stringParams && (g.types = this.source.generateArray(x), g.contexts = this.source.generateArray(y)), this.options.data && (g.data = "data"), this.useBlockParams && (g.blockParams = "blockParams"), g;
      },
      setupHelperArgs: function(h, p, m, g) {
        var y = this.setupParams(h, p, m);
        return y.loc = JSON.stringify(this.source.currentLocation), y = this.objectLiteral(y), g ? (this.useRegister("options"), m.push("options"), ["options=", y]) : m ? (m.push(y), "") : y;
      }
    }, (function() {
      for (var d = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), h = u.RESERVED_WORDS = {}, p = 0, m = d.length; p < m; p++)
        h[d[p]] = !0;
    })(), u.isValidJavaScriptVariableName = function(d) {
      return !u.RESERVED_WORDS[d] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(d);
    };
    function f(d, h, p, m, g) {
      var y = h.popStack(), x = p.length;
      d && x--;
      for (var k = m; k < x; k++)
        y = h.nameLookup(y, p[k], g);
      return d ? [h.aliasable("container.strict"), "(", y, ", ", h.quotedString(p[x]), ", ", JSON.stringify(h.source.currentLocation), " )"] : y;
    }
    t.default = u, e.exports = t.default;
  })(Pr, Pr.exports)), Pr.exports;
}
var sc;
function bw() {
  return sc || (sc = 1, (function(e, t) {
    t.__esModule = !0;
    function n(x) {
      return x && x.__esModule ? x : { default: x };
    }
    var r = ow(), i = n(r), o = pp(), s = n(o), a = uw(), l = cw(), c = xw(), u = n(c), f = fp(), d = n(f), h = dp(), p = n(h), m = i.default.create;
    function g() {
      var x = m();
      return x.compile = function(k, S) {
        return l.compile(k, S, x);
      }, x.precompile = function(k, S) {
        return l.precompile(k, S, x);
      }, x.AST = s.default, x.Compiler = l.Compiler, x.JavaScriptCompiler = u.default, x.Parser = a.parser, x.parse = a.parse, x.parseWithoutProcessing = a.parseWithoutProcessing, x;
    }
    var y = g();
    y.create = g, p.default(y), y.Visitor = d.default, y.default = y, t.default = y, e.exports = t.default;
  })(ar, ar.exports)), ar.exports;
}
var Sw = bw();
const ac = /* @__PURE__ */ Tf(Sw), lc = {}, kw = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>{{title}}</title>
  </head>
  <body>
    {{{body}}}
  </body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            background: #ffffff;
            border-radius: 8px;
            padding: 32px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .footer {
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #888;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        {{#if header}}
        <div class="header">
            <h1 style="margin: 0 0 16px 0; color: #1a1a1a;">{{header}}</h1>
        </div>
        {{/if}}
        {{> @partial-block }}
    </div>
    {{#if footer}}
    <div class="footer">
        {{footer}}
    </div>
    {{/if}}
</body>
</html>`, ww = `<h1>{{title}}</h1>
<p>Hello {{name}},</p>
<p>Your OTP code is <strong>{{code}}</strong>.</p>
`, Ew = `<div class="alert alert-{{type}}">
  {{#if title}}<strong>{{title}}</strong>{{/if}}
  <p>{{message}}</p>
</div>
{{#if show}}
<div style="
    padding: 16px;
    border-radius: 8px;
    margin: 16px 0;
    {{#ifEquals type 'warning'}}
    background: #fff3cd;
    border: 1px solid #ffc107;
    color: #856404;
    {{else ifEquals type 'error'}}
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
    {{else ifEquals type 'success'}}
    background: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
    {{else}}
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    color: #0c5460;
    {{/ifEquals}}
">
    <strong>{{title}}</strong>
    <p style="margin: 8px 0 0 0;">{{message}}</p>
</div>
{{/if}}`, _w = `<h2>Task Summary</h2>
<ul>
  {{#each tasks}}
    <li>{{this.title}} - {{this.status}}</li>
  {{/each}}
</ul>
<div style="background: #f9f9f9; border-radius: 8px; padding: 20px; margin: 16px 0;">
    <h3 style="margin: 0 0 12px 0; color: #333;">{{title}}</h3>
    {{#if tasks}}
    <ul style="margin: 0; padding-left: 20px;">
        {{#each tasks}}
        <li style="margin: 8px 0;">
            <span style="{{#ifEquals status 'completed'}}text-decoration: line-through; color: #888;{{else}}color: #333;{{/ifEquals}}">
                {{text}}
            </span>
            {{#if dueDate}}
            <span style="font-size: 12px; color: #888; margin-left: 8px;">Due: {{dueDate}}</span>
            {{/if}}
        </li>
        {{/each}}
    </ul>
    {{/if}}
</div>`, vp = {
  "base-layout": kw,
  "otp-email": ww,
  alert: Ew,
  "task-summary": _w
};
function Cw() {
  return typeof process < "u" && !!(process.versions && process.versions.node);
}
function Pw(e) {
  const t = e?.templates ?? vp ?? null, n = e?.basePath;
  async function r(i) {
    const { templateName: o, data: s } = i;
    if (t && t[o])
      try {
        return { success: !0, html: ac.compile(t[o])(s) };
      } catch (a) {
        return { success: !1, error: a instanceof Error ? a.message : String(a) };
      }
    if (Cw() && n) {
      const a = lc.join(n, `${o}.hbs`);
      try {
        const l = await lc.readFile(a, "utf-8");
        return { success: !0, html: ac.compile(l)(s) };
      } catch (l) {
        return { success: !1, error: l instanceof Error ? l.message : String(l) };
      }
    }
    return { success: !1, error: "Template not found: provide a templates map or a basePath (Node)." };
  }
  return { configure: () => {
  }, render: r };
}
const m_ = Pw({ templates: vp });
export {
  xo as $,
  Gk as A,
  CE as B,
  pE as C,
  xE as D,
  yE as E,
  EE as F,
  AE as G,
  pt as H,
  vE as I,
  vc as J,
  Fo as K,
  kE as L,
  SE as M,
  vs as N,
  _E as O,
  Z2 as P,
  VE as Q,
  bE as R,
  dE as S,
  fE as T,
  TE as U,
  wE as V,
  LE as W,
  BE as X,
  jE as Y,
  FE as Z,
  RE as _,
  ws as a,
  Md as a0,
  UE as a1,
  lS as a2,
  OE as a3,
  ME as a4,
  uE as a5,
  IE as a6,
  DE as a7,
  NE as a8,
  ee as a9,
  YE as aa,
  Pw as ab,
  GE as ac,
  An as ad,
  f_ as ae,
  WE as af,
  L as ag,
  m_ as ah,
  Od as ai,
  KE as aj,
  qe as ak,
  zE as al,
  hE as b,
  J2 as c,
  aE as d,
  X2 as e,
  mE as f,
  gE as g,
  nS as h,
  Mf as i,
  rS as j,
  K2 as k,
  Vf as l,
  xc as m,
  HE as n,
  iE as o,
  Vx as p,
  Df as q,
  qE as r,
  oE as s,
  Px as t,
  sE as u,
  cE as v,
  lE as w,
  q2 as x,
  Hx as y,
  PE as z
};
