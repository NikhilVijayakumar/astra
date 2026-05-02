import * as Ms from "react";
import Nr, { createContext as xt, useContext as me, useState as ve, lazy as fc, Suspense as dc, useRef as He, useId as Ds, useInsertionEffect as js, useCallback as Ns, useMemo as pt, useEffect as mt, Children as Md, isValidElement as Dd, useLayoutEffect as jd, forwardRef as Fs, Fragment as pc, createElement as Fr, Component as Nd, memo as mc } from "react";
import { Box as L, Typography as F, CircularProgress as Fd, Alert as gc, Paper as $t, Snackbar as Bd, IconButton as dt, Divider as yc, useTheme as de, Slider as Vd, InputBase as zd, TableContainer as xc, Table as vc, TableHead as bc, TableRow as Br, TableCell as Vr, TableBody as Sc, TablePagination as Ud, Button as Pe, List as Hd, ListItemButton as qd, ListItemIcon as Wd, ListItemText as Gd, Collapse as Kd, Container as Yd, Stack as ns, Tooltip as Xd, Dialog as Jd, DialogTitle as Qd, DialogContent as $d, TextField as Wo, DialogActions as Zd, Card as ep, CardContent as tp, Chip as rs, FormControl as np, Select as rp, MenuItem as wc, Menu as ip, ThemeProvider as sp, CssBaseline as op } from "@mui/material";
import ap from "@mui/icons-material/ZoomIn";
import lp from "@mui/icons-material/ZoomOut";
import up from "@mui/icons-material/RotateRight";
import Go from "@mui/material/List";
import cp from "@mui/material/ListItem";
import hp from "@mui/material/ListItemButton";
import fp from "@mui/material/ListItemIcon";
import dp from "@mui/material/ListItemText";
import pp from "@mui/material/Divider";
import kc from "@mui/material/Toolbar";
import mp from "@mui/material/Box";
import Ko from "@mui/material/Drawer";
import gp from "@mui/icons-material/Folder";
import yp from "@mui/icons-material/FolderOpen";
import xp from "@mui/icons-material/InsertDriveFile";
import vp from "@mui/icons-material/ExpandLess";
import bp from "@mui/icons-material/ExpandMore";
import Sp from "@mui/icons-material/Delete";
import wp from "@mui/icons-material/Refresh";
import kp from "@mui/icons-material/PowerSettingsNew";
import Cp from "@mui/material/AppBar";
import Cc from "@mui/material/IconButton";
import Ep from "@mui/icons-material/Menu";
import _p from "@mui/material/Typography";
import Pp from "@mui/icons-material/DarkModeRounded";
import Tp from "@mui/icons-material/LightModeRounded";
import Ap from "@mui/icons-material/Language";
import { createTheme as zr } from "@mui/material/styles";
function Bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qn = { exports: {} }, un = {};
var Yo;
function Rp() {
  if (Yo) return un;
  Yo = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, i, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      s = {};
      for (var a in i)
        a !== "key" && (s[a] = i[a]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return un.Fragment = t, un.jsx = n, un.jsxs = n, un;
}
var cn = {};
var Xo;
function Lp() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(I) {
      if (I == null) return null;
      if (typeof I == "function")
        return I.$$typeof === R ? null : I.displayName || I.name || null;
      if (typeof I == "string") return I;
      switch (I) {
        case g:
          return "Fragment";
        case v:
          return "Profiler";
        case y:
          return "StrictMode";
        case k:
          return "Suspense";
        case E:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof I == "object")
        switch (typeof I.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), I.$$typeof) {
          case m:
            return "Portal";
          case S:
            return I.displayName || "Context";
          case w:
            return (I._context.displayName || "Context") + ".Consumer";
          case b:
            var q = I.render;
            return I = I.displayName, I || (I = q.displayName || q.name || "", I = I !== "" ? "ForwardRef(" + I + ")" : "ForwardRef"), I;
          case T:
            return q = I.displayName || null, q !== null ? q : e(I.type) || "Memo";
          case D:
            q = I._payload, I = I._init;
            try {
              return e(I(q));
            } catch {
            }
        }
      return null;
    }
    function t(I) {
      return "" + I;
    }
    function n(I) {
      try {
        t(I);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var C = q.error, $ = typeof Symbol == "function" && Symbol.toStringTag && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return C.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(I);
      }
    }
    function r(I) {
      if (I === g) return "<>";
      if (typeof I == "object" && I !== null && I.$$typeof === D)
        return "<...>";
      try {
        var q = e(I);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var I = A.A;
      return I === null ? null : I.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(I) {
      if (j.call(I, "key")) {
        var q = Object.getOwnPropertyDescriptor(I, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return I.key !== void 0;
    }
    function a(I, q) {
      function C() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(I, "key", {
        get: C,
        configurable: !0
      });
    }
    function u() {
      var I = e(this.type);
      return W[I] || (W[I] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), I = this.props.ref, I !== void 0 ? I : null;
    }
    function c(I, q, C, $, ke, he) {
      var oe = C.ref;
      return I = {
        $$typeof: d,
        type: I,
        key: q,
        props: C,
        _owner: $
      }, (oe !== void 0 ? oe : null) !== null ? Object.defineProperty(I, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(I, "ref", { enumerable: !1, value: null }), I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(I, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(I, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ke
      }), Object.defineProperty(I, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    }
    function l(I, q, C, $, ke, he) {
      var oe = q.children;
      if (oe !== void 0)
        if ($)
          if (B(oe)) {
            for ($ = 0; $ < oe.length; $++)
              p(oe[$]);
            Object.freeze && Object.freeze(oe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(oe);
      if (j.call(q, "key")) {
        oe = e(I);
        var Ce = Object.keys(q).filter(function(ut) {
          return ut !== "key";
        });
        $ = 0 < Ce.length ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}", _[oe + $] || (Ce = 0 < Ce.length ? "{" + Ce.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          oe,
          Ce,
          oe
        ), _[oe + $] = !0);
      }
      if (oe = null, C !== void 0 && (n(C), oe = "" + C), o(q) && (n(q.key), oe = "" + q.key), "key" in q) {
        C = {};
        for (var Je in q)
          Je !== "key" && (C[Je] = q[Je]);
      } else C = q;
      return oe && a(
        C,
        typeof I == "function" ? I.displayName || I.name || "Unknown" : I
      ), c(
        I,
        oe,
        C,
        i(),
        ke,
        he
      );
    }
    function p(I) {
      f(I) ? I._store && (I._store.validated = 1) : typeof I == "object" && I !== null && I.$$typeof === D && (I._payload.status === "fulfilled" ? f(I._payload.value) && I._payload.value._store && (I._payload.value._store.validated = 1) : I._store && (I._store.validated = 1));
    }
    function f(I) {
      return typeof I == "object" && I !== null && I.$$typeof === d;
    }
    var h = Nr, d = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), R = /* @__PURE__ */ Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, B = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(I) {
        return I();
      }
    };
    var H, W = {}, Q = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), ge = N(r(s)), _ = {};
    cn.Fragment = g, cn.jsx = function(I, q, C) {
      var $ = 1e4 > A.recentlyCreatedOwnerStacks++;
      return l(
        I,
        q,
        C,
        !1,
        $ ? Error("react-stack-top-frame") : Q,
        $ ? N(r(I)) : ge
      );
    }, cn.jsxs = function(I, q, C) {
      var $ = 1e4 > A.recentlyCreatedOwnerStacks++;
      return l(
        I,
        q,
        C,
        !0,
        $ ? Error("react-stack-top-frame") : Q,
        $ ? N(r(I)) : ge
      );
    };
  })()), cn;
}
var Jo;
function Ip() {
  return Jo || (Jo = 1, process.env.NODE_ENV === "production" ? Qn.exports = Rp() : Qn.exports = Lp()), Qn.exports;
}
var x = Ip();
const Qo = {
  ok: "success.main",
  warning: "warning.main",
  error: "error.main",
  executing: "info.main",
  waiting: "warning.main",
  default: "text.secondary"
}, Vs = ({ tone: e, size: t = 10 }) => /* @__PURE__ */ x.jsx(
  L,
  {
    sx: {
      width: t,
      height: t,
      borderRadius: "50%",
      backgroundColor: Qo[e] || Qo.default
    }
  }
), O = {
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
}, Ec = ({ level: e }) => {
  const n = {
    CRITICAL: "error.main",
    ERROR: "error.main",
    WARNING: "warning.main",
    URGENT: "warning.main",
    SUCCESS: "success.main",
    INFO: "info.main"
  }[e] || "info.main";
  return /* @__PURE__ */ x.jsx(
    F,
    {
      variant: "caption",
      sx: {
        px: O.sm,
        py: O.internal,
        borderRadius: 1,
        backgroundColor: `${n}15`,
        color: n,
        fontWeight: 600,
        fontSize: "0.6875rem",
        letterSpacing: "0.05em",
        textTransform: "uppercase"
      },
      children: e
    }
  );
}, _c = xt(
  void 0
);
function Ye() {
  const e = me(_c);
  if (!e)
    throw new Error("useLanguage must be used within a AstraLanguageProvider");
  return e;
}
const Op = () => {
  const { literal: e } = Ye();
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: O.lg,
        mt: O.xl
      },
      children: [
        /* @__PURE__ */ x.jsx(Fd, { sx: { mb: O.md, color: "primary.main" } }),
        /* @__PURE__ */ x.jsx(F, { variant: "body1", color: "text.secondary", children: e.loading_message })
      ]
    }
  );
}, Mp = ({ message: e }) => {
  const { literal: t } = Ye(), n = e || t.unknown_message;
  return /* @__PURE__ */ x.jsx(L, { sx: { p: O.lg, textAlign: "center", mt: O.xl }, children: /* @__PURE__ */ x.jsx(gc, { severity: "error", children: n }) });
}, $o = () => {
  const { literal: e } = Ye();
  return /* @__PURE__ */ x.jsx(L, { sx: { p: O.lg, textAlign: "center", mt: O.xl }, children: /* @__PURE__ */ x.jsx(F, { variant: "body1", color: "text.secondary", children: e.no_data_found }) });
}, iC = ({
  title: e,
  supportingText: t,
  children: n,
  action: r
}) => /* @__PURE__ */ x.jsxs(
  $t,
  {
    elevation: 0,
    sx: {
      p: O.lg,
      borderRadius: 1,
      border: "1px solid",
      borderColor: "divider",
      backgroundColor: "background.paper",
      display: "flex",
      flexDirection: "column",
      gap: O.xs
    },
    children: [
      (e || t || r) && /* @__PURE__ */ x.jsxs(
        L,
        {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start"
          },
          children: [
            /* @__PURE__ */ x.jsxs(L, { children: [
              e && /* @__PURE__ */ x.jsx(
                F,
                {
                  variant: "h4",
                  fontWeight: 600,
                  color: "text.primary",
                  children: e
                }
              ),
              t && /* @__PURE__ */ x.jsx(
                F,
                {
                  variant: "body2",
                  color: "text.secondary",
                  sx: { mt: O.internal },
                  children: t
                }
              )
            ] }),
            r && /* @__PURE__ */ x.jsx(L, { children: r })
          ]
        }
      ),
      /* @__PURE__ */ x.jsx(L, { sx: { flexGrow: 1 }, children: n })
    ]
  }
), sC = ({
  open: e,
  message: t,
  severity: n = "info",
  onClose: r,
  autoHideDuration: i = 4e3
}) => /* @__PURE__ */ x.jsx(
  Bd,
  {
    open: e,
    autoHideDuration: i,
    onClose: r,
    anchorOrigin: { vertical: "bottom", horizontal: "center" },
    children: /* @__PURE__ */ x.jsx(
      gc,
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
), oC = ({
  label: e,
  value: t,
  trendValue: n,
  trend: r
}) => /* @__PURE__ */ x.jsxs(
  L,
  {
    sx: {
      flex: 1,
      p: O.md,
      backgroundColor: "background.paper",
      border: 1,
      borderColor: "divider",
      borderRadius: 1
    },
    children: [
      /* @__PURE__ */ x.jsx(
        F,
        {
          variant: "micro",
          sx: { color: "text.secondary" },
          children: e
        }
      ),
      /* @__PURE__ */ x.jsxs(
        L,
        {
          sx: {
            display: "flex",
            alignItems: "baseline",
            gap: O.sm,
            mt: O.xs
          },
          children: [
            /* @__PURE__ */ x.jsx(
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
            !!n && /* @__PURE__ */ x.jsx(
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
), Dp = ({
  fileName: e,
  fileContent: t,
  fileEncoding: n,
  mimeType: r
}) => {
  const { literal: i } = Ye(), [s, o] = ve(1), [a, u] = ve(0), c = t && n === "base64" ? `data:${r || "image/png"};base64,${t}` : null, l = i["viewer.empty_image"] || "No image content available for preview.";
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default"
      },
      children: [
        /* @__PURE__ */ x.jsxs(
          L,
          {
            sx: {
              p: O.sm,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "background.paper",
              borderBottom: "1px solid",
              borderColor: "divider"
            },
            children: [
              /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "text.secondary", children: e }),
              /* @__PURE__ */ x.jsxs(L, { children: [
                /* @__PURE__ */ x.jsx(
                  dt,
                  {
                    size: "small",
                    onClick: () => o((p) => Math.min(p + 0.2, 3)),
                    children: /* @__PURE__ */ x.jsx(ap, { fontSize: "small" })
                  }
                ),
                /* @__PURE__ */ x.jsx(
                  dt,
                  {
                    size: "small",
                    onClick: () => o((p) => Math.max(p - 0.2, 0.5)),
                    children: /* @__PURE__ */ x.jsx(lp, { fontSize: "small" })
                  }
                ),
                /* @__PURE__ */ x.jsx(
                  dt,
                  {
                    size: "small",
                    onClick: () => u((p) => (p + 90) % 360),
                    children: /* @__PURE__ */ x.jsx(up, { fontSize: "small" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ x.jsx(
          L,
          {
            sx: {
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative"
            },
            children: c ? /* @__PURE__ */ x.jsx(
              L,
              {
                component: "img",
                src: c,
                alt: e,
                sx: {
                  maxWidth: `${s * 100}%`,
                  maxHeight: `${s * 100}%`,
                  transform: `rotate(${a}deg)`,
                  transition: "transform 0.2s ease-out",
                  objectFit: "contain"
                }
              }
            ) : /* @__PURE__ */ x.jsx(
              L,
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
                children: /* @__PURE__ */ x.jsx(
                  F,
                  {
                    variant: "body2",
                    sx: { color: "text.secondary" },
                    children: l
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}, jp = fc(() => import("./index-CQySdU7p.js").then((e) => ({ default: e.default }))), Np = () => /* @__PURE__ */ x.jsx(L, { sx: { p: O.md, color: "text.secondary" }, children: "Loading..." }), Fp = ({ fileName: e, fileContent: t }) => {
  const { literal: n } = Ye(), r = n["viewer.empty_markdown"] || "No markdown content available for preview.", i = t && t.trim().length > 0 ? t : `_${r}_`;
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: O.xl,
        backgroundColor: "background.paper",
        color: "text.primary",
        overflowY: "auto"
      },
      children: [
        /* @__PURE__ */ x.jsx(F, { variant: "h3", sx: { mb: O.sm, fontWeight: 600 }, children: e }),
        /* @__PURE__ */ x.jsx(yc, { sx: { mb: O.md } }),
        /* @__PURE__ */ x.jsx(
          L,
          {
            sx: {
              "& h1, & h2, & h3": {
                color: "primary.main",
                mt: O.md,
                mb: O.xs
              },
              "& p": { mb: O.sm, lineHeight: 1.6 },
              "& ul, & ol": { pl: O.lg, mb: O.sm },
              "& blockquote": {
                borderLeft: "4px solid",
                borderColor: "primary.main",
                pl: O.md,
                py: O.internal,
                my: O.md,
                backgroundColor: "action.hover",
                fontStyle: "italic"
              },
              "& hr": { my: O.lg, opacity: 0.1 }
            },
            children: /* @__PURE__ */ x.jsx(dc, { fallback: /* @__PURE__ */ x.jsx(Np, {}), children: /* @__PURE__ */ x.jsx(jp, { children: i }) })
          }
        )
      ]
    }
  );
}, Bp = fc(
  () => import("./index-CKHXwRr6.js").then((e) => ({ default: e.Prism }))
), Vp = import("./index-DwO35gpB.js").then((e) => e.vscDarkPlus), zp = (e, t, n) => {
  if (!t || t.trim().length === 0)
    return JSON.stringify(
      { message: n },
      null,
      2
    );
  if (e.toLowerCase().endsWith(".jsonl")) {
    const i = t.split(/\r?\n/).map((s) => s.trim()).filter((s) => s.length > 0).map((s, o) => {
      try {
        return JSON.parse(s);
      } catch {
        return { line: o + 1, parseError: !0, raw: s };
      }
    });
    return JSON.stringify(i, null, 2);
  }
  try {
    return JSON.stringify(JSON.parse(t), null, 2);
  } catch {
    return JSON.stringify({ parseError: !0, raw: t }, null, 2);
  }
}, Zo = () => /* @__PURE__ */ x.jsx(L, { sx: { p: O.md, color: "text.secondary" }, children: "Loading..." }), Up = ({ fileName: e, fileContent: t }) => {
  const { literal: n } = Ye(), r = n["viewer.empty_json"] || "No JSON content available for preview.", i = zp(e, t, r), [s, o] = ve(null);
  return s ? /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default"
      },
      children: [
        /* @__PURE__ */ x.jsx(
          L,
          {
            sx: {
              p: O.sm,
              backgroundColor: "background.paper",
              borderBottom: "1px solid",
              borderColor: "divider"
            },
            children: /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "text.secondary", children: e })
          }
        ),
        /* @__PURE__ */ x.jsx(L, { sx: { flexGrow: 1, overflow: "auto", p: O.sm }, children: /* @__PURE__ */ x.jsx(dc, { fallback: /* @__PURE__ */ x.jsx(Zo, {}), children: /* @__PURE__ */ x.jsx(
          Bp,
          {
            language: "json",
            style: s,
            customStyle: {
              margin: 0,
              padding: O.md,
              borderRadius: 1,
              fontSize: "0.75rem",
              fontFamily: '"IBM Plex Mono", "Menlo", monospace',
              backgroundColor: "background.paper"
            },
            children: i
          }
        ) }) })
      ]
    }
  ) : (Vp.then(o), /* @__PURE__ */ x.jsx(Zo, {}));
}, Hp = 100, aC = ({
  source: e,
  timestamp: t,
  message: n,
  severity: r,
  read: i
}) => {
  const s = de();
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        display: "flex",
        alignItems: "flex-start",
        p: O.md,
        backgroundColor: i ? "transparent" : s.palette.background.paper,
        border: 1,
        borderColor: i ? "transparent" : "divider",
        borderRadius: O.xs,
        opacity: i ? 0.7 : 1,
        transition: s.transitions.create("all", {
          duration: s.transitions.duration.shorter,
          easing: s.transitions.easing.easeInOut
        })
      },
      children: [
        /* @__PURE__ */ x.jsx(L, { sx: { width: 40, mt: O.internal }, children: /* @__PURE__ */ x.jsx(
          Vs,
          {
            tone: r === "CRITICAL" ? "error" : r === "WARNING" ? "warning" : "executing"
          }
        ) }),
        /* @__PURE__ */ x.jsxs(L, { sx: { flexGrow: 1 }, children: [
          /* @__PURE__ */ x.jsxs(L, { sx: { display: "flex", gap: O.md, mb: O.internal }, children: [
            /* @__PURE__ */ x.jsx(
              F,
              {
                variant: "body2Bold",
                sx: { color: s.palette.text.primary },
                children: e
              }
            ),
            /* @__PURE__ */ x.jsx(
              F,
              {
                variant: "caption",
                sx: { color: s.palette.text.secondary },
                children: new Date(t).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "body1",
              sx: { color: s.palette.text.primary },
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx(L, { sx: { width: Hp, textAlign: "right" }, children: /* @__PURE__ */ x.jsx(Ec, { level: r }) })
      ]
    }
  );
}, zs = xt({});
function jn(e) {
  const t = He(null);
  return t.current === null && (t.current = e()), t.current;
}
const $r = xt(null), Nn = xt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class qp extends Ms.Component {
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
function Wp({ children: e, isPresent: t }) {
  const n = Ds(), r = He(null), i = He({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = me(Nn);
  return js(() => {
    const { width: o, height: a, top: u, left: c } = i.current;
    if (t || !r.current || !o || !a)
      return;
    r.current.dataset.motionPopId = n;
    const l = document.createElement("style");
    return s && (l.nonce = s), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(l);
    };
  }, [t]), x.jsx(qp, { isPresent: t, childRef: r, sizeRef: i, children: Ms.cloneElement(e, { ref: r }) });
}
const Gp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
  const a = jn(Kp), u = Ds(), c = Ns((p) => {
    a.set(p, !0);
    for (const f of a.values())
      if (!f)
        return;
    r && r();
  }, [a, r]), l = pt(
    () => ({
      id: u,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: c,
      register: (p) => (a.set(p, !1), () => a.delete(p))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), c] : [n, c]
  );
  return pt(() => {
    a.forEach((p, f) => a.set(f, !1));
  }, [n]), Ms.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), o === "popLayout" && (e = x.jsx(Wp, { isPresent: n, children: e })), x.jsx($r.Provider, { value: l, children: e });
};
function Kp() {
  return /* @__PURE__ */ new Map();
}
function Pc(e = !0) {
  const t = me($r);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, s = Ds();
  mt(() => {
    e && i(s);
  }, [e]);
  const o = Ns(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const $n = (e) => e.key || "";
function ea(e) {
  const t = [];
  return Md.forEach(e, (n) => {
    Dd(n) && t.push(n);
  }), t;
}
const Us = typeof window < "u", Zr = Us ? jd : mt, Yp = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: s = "sync", propagate: o = !1 }) => {
  const [a, u] = Pc(o), c = pt(() => ea(e), [e]), l = o && !a ? [] : c.map($n), p = He(!0), f = He(c), h = jn(() => /* @__PURE__ */ new Map()), [d, m] = ve(c), [g, y] = ve(c);
  Zr(() => {
    p.current = !1, f.current = c;
    for (let S = 0; S < g.length; S++) {
      const b = $n(g[S]);
      l.includes(b) ? h.delete(b) : h.get(b) !== !0 && h.set(b, !1);
    }
  }, [g, l.length, l.join("-")]);
  const v = [];
  if (c !== d) {
    let S = [...c];
    for (let b = 0; b < g.length; b++) {
      const k = g[b], E = $n(k);
      l.includes(E) || (S.splice(b, 0, k), v.push(k));
    }
    s === "wait" && v.length && (S = v), y(ea(S)), m(c);
    return;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && g.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = me(zs);
  return x.jsx(x.Fragment, { children: g.map((S) => {
    const b = $n(S), k = o && !a ? !1 : c === g || l.includes(b), E = () => {
      if (h.has(b))
        h.set(b, !0);
      else
        return;
      let T = !0;
      h.forEach((D) => {
        D || (T = !1);
      }), T && (w?.(), y(f.current), o && u?.(), r && r());
    };
    return x.jsx(Gp, { isPresent: k, initial: !p.current || n ? void 0 : !1, custom: k ? void 0 : t, presenceAffectsLayout: i, mode: s, onExitComplete: k ? void 0 : E, children: S }, b);
  }) });
}, Te = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Zt = Te, gt = Te;
process.env.NODE_ENV !== "production" && (Zt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, gt = (e, t) => {
  if (!e)
    throw new Error(t);
});
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Kt = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Ze = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ot = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Xp = {
  useManualTiming: !1
};
function Jp(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    s.has(c) && (u.schedule(c), e()), c(o);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, l = !1, p = !1) => {
      const h = p && r ? t : n;
      return l && s.add(c), h.has(c) || h.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), s.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (o = c, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, i && (i = !1, u.process(c));
    }
  };
  return u;
}
const Zn = [
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
], Qp = 40;
function Tc(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, o = Zn.reduce((y, v) => (y[v] = Jp(s), y), {}), { read: a, resolveKeyframes: u, update: c, preRender: l, render: p, postRender: f } = o, h = () => {
    const y = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, Qp), 1), i.timestamp = y, i.isProcessing = !0, a.process(i), u.process(i), c.process(i), l.process(i), p.process(i), f.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
  }, d = () => {
    n = !0, r = !0, i.isProcessing || e(h);
  };
  return { schedule: Zn.reduce((y, v) => {
    const w = o[v];
    return y[v] = (S, b = !1, k = !1) => (n || d(), w.schedule(S, b, k)), y;
  }, {}), cancel: (y) => {
    for (let v = 0; v < Zn.length; v++)
      o[Zn[v]].cancel(y);
  }, state: i, steps: o };
}
const { schedule: re, cancel: at, state: ye, steps: mi } = Tc(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Te, !0), Ac = xt({ strict: !1 }), ta = {
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
}, Yt = {};
for (const e in ta)
  Yt[e] = {
    isEnabled: (t) => ta[e].some((n) => !!t[n])
  };
function $p(e) {
  for (const t in e)
    Yt[t] = {
      ...Yt[t],
      ...e[t]
    };
}
const Zp = /* @__PURE__ */ new Set([
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
function Ur(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Zp.has(e);
}
let Rc = (e) => !Ur(e);
function em(e) {
  e && (Rc = (t) => t.startsWith("on") ? !Ur(t) : e(t));
}
try {
  em(require("@emotion/is-prop-valid").default);
} catch {
}
function tm(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (Rc(i) || n === !0 && Ur(i) || !t && !Ur(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
const na = /* @__PURE__ */ new Set();
function ei(e, t, n) {
  e || na.has(t) || (console.warn(t), na.add(t));
}
function nm(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && ei(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
const ti = xt({});
function Ln(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ni(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const qs = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ws = ["initial", ...qs];
function ri(e) {
  return ni(e.animate) || Ws.some((t) => Ln(e[t]));
}
function Lc(e) {
  return !!(ri(e) || e.variants);
}
function rm(e, t) {
  if (ri(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ln(n) ? n : void 0,
      animate: Ln(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function im(e) {
  const { initial: t, animate: n } = rm(e, me(ti));
  return pt(() => ({ initial: t, animate: n }), [ra(t), ra(n)]);
}
function ra(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const sm = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Bt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function om(e, t, n) {
  return Ns(
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
const Gs = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), am = "framerAppearId", Ic = "data-" + Gs(am), { schedule: Ks } = Tc(queueMicrotask, !1), Oc = xt({});
function lm(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = me(ti), u = me(Ac), c = me($r), l = me(Nn).reducedMotion, p = He(null);
  r = r || u.renderer, !p.current && r && (p.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const f = p.current, h = me(Oc);
  f && !f.projection && i && (f.type === "html" || f.type === "svg") && um(p.current, n, i, h);
  const d = He(!1);
  js(() => {
    f && d.current && f.update(n, c);
  });
  const m = n[Ic], g = He(!!m && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, m)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, m)));
  return Zr(() => {
    f && (d.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Ks.render(f.render), g.current && f.animationState && f.animationState.animateChanges());
  }), mt(() => {
    f && (!g.current && f.animationState && f.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) === null || y === void 0 || y.call(window, m);
    }), g.current = !1));
  }), f;
}
function um(e, t, n, r) {
  const { layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: u, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Mc(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: s,
    alwaysMeasureLayout: !!o || a && Bt(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    layoutScroll: u,
    layoutRoot: c
  });
}
function Mc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Mc(e.parent);
}
function cm({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var s, o;
  e && $p(e);
  function a(c, l) {
    let p;
    const f = {
      ...me(Nn),
      ...c,
      layoutId: hm(c)
    }, { isStatic: h } = f, d = im(c), m = r(c, h);
    if (!h && Us) {
      fm(f, e);
      const g = dm(f);
      p = g.MeasureLayout, d.visualElement = lm(i, m, f, t, g.ProjectionNode);
    }
    return x.jsxs(ti.Provider, { value: d, children: [p && d.visualElement ? x.jsx(p, { visualElement: d.visualElement, ...f }) : null, n(i, c, om(m, d.visualElement, l), m, h, d.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const u = Fs(a);
  return u[sm] = i, u;
}
function hm({ layoutId: e }) {
  const t = me(zs).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function fm(e, t) {
  const n = me(Ac).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Zt(!1, r) : gt(!1, r);
  }
}
function dm(e) {
  const { drag: t, layout: n } = Yt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const pm = [
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
function Ys(e) {
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
      !!(pm.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function ia(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Xs(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = ia(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = ia(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const is = (e) => Array.isArray(e), mm = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), gm = (e) => is(e) ? e[e.length - 1] || 0 : e, xe = (e) => !!(e && e.getVelocity);
function Rr(e) {
  const t = xe(e) ? e.get() : e;
  return mm(t) ? t.toValue() : t;
}
function ym({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, s) {
  const o = {
    latestValues: xm(r, i, s, e),
    renderState: t()
  };
  return n && (o.onMount = (a) => n({ props: r, current: a, ...o }), o.onUpdate = (a) => n(a)), o;
}
const Dc = (e) => (t, n) => {
  const r = me(ti), i = me($r), s = () => ym(e, t, r, i);
  return n ? s() : jn(s);
};
function xm(e, t, n, r) {
  const i = {}, s = r(e, {});
  for (const f in s)
    i[f] = Rr(s[f]);
  let { initial: o, animate: a } = e;
  const u = ri(e), c = Lc(e);
  t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || o === !1;
  const p = l ? a : o;
  if (p && typeof p != "boolean" && !ni(p)) {
    const f = Array.isArray(p) ? p : [p];
    for (let h = 0; h < f.length; h++) {
      const d = Xs(e, f[h]);
      if (d) {
        const { transitionEnd: m, transition: g, ...y } = d;
        for (const v in y) {
          let w = y[v];
          if (Array.isArray(w)) {
            const S = l ? w.length - 1 : 0;
            w = w[S];
          }
          w !== null && (i[v] = w);
        }
        for (const v in m)
          i[v] = m[v];
      }
    }
  }
  return i;
}
const en = [
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
], Lt = new Set(en), jc = (e) => (t) => typeof t == "string" && t.startsWith(e), Nc = /* @__PURE__ */ jc("--"), vm = /* @__PURE__ */ jc("var(--"), Js = (e) => vm(e) ? bm.test(e.split("/*")[0].trim()) : !1, bm = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Fc = (e, t) => t && typeof e == "number" ? t.transform(e) : e, lt = (e, t, n) => n > t ? t : n < e ? e : n, tn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, In = {
  ...tn,
  transform: (e) => lt(0, 1, e)
}, er = {
  ...tn,
  default: 1
}, Fn = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ht = /* @__PURE__ */ Fn("deg"), et = /* @__PURE__ */ Fn("%"), G = /* @__PURE__ */ Fn("px"), Sm = /* @__PURE__ */ Fn("vh"), wm = /* @__PURE__ */ Fn("vw"), sa = {
  ...et,
  parse: (e) => et.parse(e) / 100,
  transform: (e) => et.transform(e * 100)
}, km = {
  // Border props
  borderWidth: G,
  borderTopWidth: G,
  borderRightWidth: G,
  borderBottomWidth: G,
  borderLeftWidth: G,
  borderRadius: G,
  radius: G,
  borderTopLeftRadius: G,
  borderTopRightRadius: G,
  borderBottomRightRadius: G,
  borderBottomLeftRadius: G,
  // Positioning props
  width: G,
  maxWidth: G,
  height: G,
  maxHeight: G,
  top: G,
  right: G,
  bottom: G,
  left: G,
  // Spacing props
  padding: G,
  paddingTop: G,
  paddingRight: G,
  paddingBottom: G,
  paddingLeft: G,
  margin: G,
  marginTop: G,
  marginRight: G,
  marginBottom: G,
  marginLeft: G,
  // Misc
  backgroundPositionX: G,
  backgroundPositionY: G
}, Cm = {
  rotate: ht,
  rotateX: ht,
  rotateY: ht,
  rotateZ: ht,
  scale: er,
  scaleX: er,
  scaleY: er,
  scaleZ: er,
  skew: ht,
  skewX: ht,
  skewY: ht,
  distance: G,
  translateX: G,
  translateY: G,
  translateZ: G,
  x: G,
  y: G,
  z: G,
  perspective: G,
  transformPerspective: G,
  opacity: In,
  originX: sa,
  originY: sa,
  originZ: G
}, oa = {
  ...tn,
  transform: Math.round
}, Qs = {
  ...km,
  ...Cm,
  zIndex: oa,
  size: G,
  // SVG
  fillOpacity: In,
  strokeOpacity: In,
  numOctaves: oa
}, Em = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, _m = en.length;
function Pm(e, t, n) {
  let r = "", i = !0;
  for (let s = 0; s < _m; s++) {
    const o = en[s], a = e[o];
    if (a === void 0)
      continue;
    let u = !0;
    if (typeof a == "number" ? u = a === (o.startsWith("scale") ? 1 : 0) : u = parseFloat(a) === 0, !u || n) {
      const c = Fc(a, Qs[o]);
      if (!u) {
        i = !1;
        const l = Em[o] || o;
        r += `${l}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function $s(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1, a = !1;
  for (const u in t) {
    const c = t[u];
    if (Lt.has(u)) {
      o = !0;
      continue;
    } else if (Nc(u)) {
      i[u] = c;
      continue;
    } else {
      const l = Fc(c, Qs[u]);
      u.startsWith("origin") ? (a = !0, s[u] = l) : r[u] = l;
    }
  }
  if (t.transform || (o || n ? r.transform = Pm(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: u = "50%", originY: c = "50%", originZ: l = 0 } = s;
    r.transformOrigin = `${u} ${c} ${l}`;
  }
}
const Tm = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Am = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Rm(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Tm : Am;
  e[s.offset] = G.transform(-r);
  const o = G.transform(t), a = G.transform(n);
  e[s.array] = `${o} ${a}`;
}
function aa(e, t, n) {
  return typeof e == "string" ? e : G.transform(t + n * e);
}
function Lm(e, t, n) {
  const r = aa(t, e.x, e.width), i = aa(n, e.y, e.height);
  return `${r} ${i}`;
}
function Zs(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: s,
  pathLength: o,
  pathSpacing: a = 1,
  pathOffset: u = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, l, p) {
  if ($s(e, c, p), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h, dimensions: d } = e;
  f.transform && (d && (h.transform = f.transform), delete f.transform), d && (i !== void 0 || s !== void 0 || h.transform) && (h.transformOrigin = Lm(d, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), o !== void 0 && Rm(f, o, a, u, !1);
}
const eo = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Bc = () => ({
  ...eo(),
  attrs: {}
}), to = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Vc(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const zc = /* @__PURE__ */ new Set([
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
function Uc(e, t, n, r) {
  Vc(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(zc.has(i) ? i : Gs(i), t.attrs[i]);
}
const Hr = {};
function Im(e) {
  Object.assign(Hr, e);
}
function Hc(e, { layout: t, layoutId: n }) {
  return Lt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Hr[e] || e === "opacity");
}
function no(e, t, n) {
  var r;
  const { style: i } = e, s = {};
  for (const o in i)
    (xe(i[o]) || t.style && xe(t.style[o]) || Hc(o, e) || ((r = n?.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
  return s;
}
function qc(e, t, n) {
  const r = no(e, t, n);
  for (const i in e)
    if (xe(e[i]) || xe(t[i])) {
      const s = en.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function Om(e, t) {
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
const la = ["x", "y", "width", "height", "cx", "cy", "r"], Mm = {
  useVisualState: Dc({
    scrapeMotionValuesFromProps: qc,
    createRenderState: Bc,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in i)
          if (Lt.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let o = !t;
      if (t)
        for (let a = 0; a < la.length; a++) {
          const u = la[a];
          e[u] !== t[u] && (o = !0);
        }
      o && re.read(() => {
        Om(n, r), re.render(() => {
          Zs(r, i, to(n.tagName), e.transformTemplate), Uc(n, r);
        });
      });
    }
  })
}, Dm = {
  useVisualState: Dc({
    scrapeMotionValuesFromProps: no,
    createRenderState: eo
  })
};
function Wc(e, t, n) {
  for (const r in t)
    !xe(t[r]) && !Hc(r, n) && (e[r] = t[r]);
}
function jm({ transformTemplate: e }, t) {
  return pt(() => {
    const n = eo();
    return $s(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Nm(e, t) {
  const n = e.style || {}, r = {};
  return Wc(r, n, e), Object.assign(r, jm(e, t)), r;
}
function Fm(e, t) {
  const n = {}, r = Nm(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function Bm(e, t, n, r) {
  const i = pt(() => {
    const s = Bc();
    return Zs(s, t, to(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Wc(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
function Vm(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const u = (Ys(n) ? Bm : Fm)(r, s, o, n), c = tm(r, typeof n == "string", e), l = n !== pc ? { ...c, ...u, ref: i } : {}, { children: p } = r, f = pt(() => xe(p) ? p.get() : p, [p]);
    return Fr(n, {
      ...l,
      children: f
    });
  };
}
function zm(e, t) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...Ys(r) ? Mm : Dm,
      preloadedFeatures: e,
      useRender: Vm(i),
      createVisualElement: t,
      Component: r
    };
    return cm(o);
  };
}
function Gc(e, t) {
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
function ii(e, t, n) {
  const r = e.getProps();
  return Xs(r, t, n !== void 0 ? n : r.custom, e);
}
const Um = /* @__PURE__ */ Hs(() => window.ScrollTimeline !== void 0);
class Hm {
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
      if (Um() && i.attachTimeline)
        return i.attachTimeline(t);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
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
class qm extends Hm {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function ro(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ss = 2e4;
function Kc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ss; )
    t += n, r = e.next(t);
  return t >= ss ? 1 / 0 : t;
}
function io(e) {
  return typeof e == "function";
}
function ua(e, t) {
  e.timeline = t, e.onfinish = null;
}
const so = (e) => Array.isArray(e) && typeof e[0] == "number", Wm = {
  linearEasing: void 0
};
function Gm(e, t) {
  const n = /* @__PURE__ */ Hs(e);
  return () => {
    var r;
    return (r = Wm[t]) !== null && r !== void 0 ? r : n();
  };
}
const qr = /* @__PURE__ */ Gm(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Yc = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++)
    r += e(/* @__PURE__ */ Kt(0, i - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Xc(e) {
  return !!(typeof e == "function" && qr() || !e || typeof e == "string" && (e in os || qr()) || so(e) || Array.isArray(e) && e.every(Xc));
}
const bn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, os = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ bn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ bn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ bn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ bn([0.33, 1.53, 0.69, 0.99])
};
function Jc(e, t) {
  if (e)
    return typeof e == "function" && qr() ? Yc(e, t) : so(e) ? bn(e) : Array.isArray(e) ? e.map((n) => Jc(n, t) || os.easeOut) : os[e];
}
const Ke = {
  x: !1,
  y: !1
};
function Qc() {
  return Ke.x || Ke.y;
}
function Km(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function $c(e, t) {
  const n = Km(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function ca(e) {
  return (t) => {
    t.pointerType === "touch" || Qc() || e(t);
  };
}
function Ym(e, t, n = {}) {
  const [r, i, s] = $c(e, n), o = ca((a) => {
    const { target: u } = a, c = t(a);
    if (typeof c != "function" || !u)
      return;
    const l = ca((p) => {
      c(p), u.removeEventListener("pointerleave", l);
    });
    u.addEventListener("pointerleave", l, i);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", o, i);
  }), s;
}
const Zc = (e, t) => t ? e === t ? !0 : Zc(e, t.parentElement) : !1, oo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Xm = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Jm(e) {
  return Xm.has(e.tagName) || e.tabIndex !== -1;
}
const Sn = /* @__PURE__ */ new WeakSet();
function ha(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function gi(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Qm = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = ha(() => {
    if (Sn.has(n))
      return;
    gi(n, "down");
    const i = ha(() => {
      gi(n, "up");
    }), s = () => gi(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function fa(e) {
  return oo(e) && !Qc();
}
function $m(e, t, n = {}) {
  const [r, i, s] = $c(e, n), o = (a) => {
    const u = a.currentTarget;
    if (!fa(a) || Sn.has(u))
      return;
    Sn.add(u);
    const c = t(a), l = (h, d) => {
      window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", f), !(!fa(h) || !Sn.has(u)) && (Sn.delete(u), typeof c == "function" && c(h, { success: d }));
    }, p = (h) => {
      l(h, n.useGlobalTarget || Zc(u, h.target));
    }, f = (h) => {
      l(h, !1);
    };
    window.addEventListener("pointerup", p, i), window.addEventListener("pointercancel", f, i);
  };
  return r.forEach((a) => {
    !Jm(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i), a.addEventListener("focus", (c) => Qm(c, i), i);
  }), s;
}
function Zm(e) {
  return e === "x" || e === "y" ? Ke[e] ? null : (Ke[e] = !0, () => {
    Ke[e] = !1;
  }) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0, () => {
    Ke.x = Ke.y = !1;
  });
}
const eh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...en
]);
let Lr;
function eg() {
  Lr = void 0;
}
const tt = {
  now: () => (Lr === void 0 && tt.set(ye.isProcessing || Xp.useManualTiming ? ye.timestamp : performance.now()), Lr),
  set: (e) => {
    Lr = e, queueMicrotask(eg);
  }
};
function ao(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function lo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class uo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ao(this.subscriptions, t), () => lo(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function th(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const da = 30, tg = (e) => !isNaN(parseFloat(e)), kn = {
  current: void 0
};
class ng {
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
      const s = tt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = tt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = tg(this.current));
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
    return process.env.NODE_ENV !== "production" && ei(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new uo());
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
    return kn.current && kn.current.push(this), this.current;
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > da)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, da);
    return th(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Xt(e, t) {
  return new ng(e, t);
}
function rg(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xt(n));
}
function ig(e, t) {
  const n = ii(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = gm(s[o]);
    rg(e, o, a);
  }
}
function sg(e) {
  return !!(xe(e) && e.add);
}
function as(e, t) {
  const n = e.getValue("willChange");
  if (sg(n))
    return n.add(t);
}
function nh(e) {
  return e.props[Ic];
}
const rh = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, og = 1e-7, ag = 12;
function lg(e, t, n, r, i) {
  let s, o, a = 0;
  do
    o = t + (n - t) / 2, s = rh(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > og && ++a < ag);
  return o;
}
function Bn(e, t, n, r) {
  if (e === t && n === r)
    return Te;
  const i = (s) => lg(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : rh(i(s), t, r);
}
const ih = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, sh = (e) => (t) => 1 - e(1 - t), oh = /* @__PURE__ */ Bn(0.33, 1.53, 0.69, 0.99), co = /* @__PURE__ */ sh(oh), ah = /* @__PURE__ */ ih(co), lh = (e) => (e *= 2) < 1 ? 0.5 * co(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), ho = (e) => 1 - Math.sin(Math.acos(e)), uh = sh(ho), ch = ih(ho), hh = (e) => /^0[^.\s]+$/u.test(e);
function ug(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || hh(e) : !0;
}
const Cn = (e) => Math.round(e * 1e5) / 1e5, fo = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cg(e) {
  return e == null;
}
const hg = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, po = (e, t) => (n) => !!(typeof n == "string" && hg.test(n) && n.startsWith(e) || t && !cg(n) && Object.prototype.hasOwnProperty.call(n, t)), fh = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, s, o, a] = r.match(fo);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, fg = (e) => lt(0, 255, e), yi = {
  ...tn,
  transform: (e) => Math.round(fg(e))
}, Et = {
  test: /* @__PURE__ */ po("rgb", "red"),
  parse: /* @__PURE__ */ fh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + yi.transform(e) + ", " + yi.transform(t) + ", " + yi.transform(n) + ", " + Cn(In.transform(r)) + ")"
};
function dg(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const ls = {
  test: /* @__PURE__ */ po("#"),
  parse: dg,
  transform: Et.transform
}, Vt = {
  test: /* @__PURE__ */ po("hsl", "hue"),
  parse: /* @__PURE__ */ fh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + et.transform(Cn(t)) + ", " + et.transform(Cn(n)) + ", " + Cn(In.transform(r)) + ")"
}, be = {
  test: (e) => Et.test(e) || ls.test(e) || Vt.test(e),
  parse: (e) => Et.test(e) ? Et.parse(e) : Vt.test(e) ? Vt.parse(e) : ls.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Et.transform(e) : Vt.transform(e)
}, pg = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function mg(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(fo)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(pg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const dh = "number", ph = "color", gg = "var", yg = "var(", pa = "${}", xg = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function On(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const a = t.replace(xg, (u) => (be.test(u) ? (r.color.push(s), i.push(ph), n.push(be.parse(u))) : u.startsWith(yg) ? (r.var.push(s), i.push(gg), n.push(u)) : (r.number.push(s), i.push(dh), n.push(parseFloat(u))), ++s, pa)).split(pa);
  return { values: n, split: a, indexes: r, types: i };
}
function mh(e) {
  return On(e).values;
}
function gh(e) {
  const { split: t, types: n } = On(e), r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (s += t[o], i[o] !== void 0) {
        const a = n[o];
        a === dh ? s += Cn(i[o]) : a === ph ? s += be.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
const vg = (e) => typeof e == "number" ? 0 : e;
function bg(e) {
  const t = mh(e);
  return gh(e)(t.map(vg));
}
const yt = {
  test: mg,
  parse: mh,
  createTransformer: gh,
  getAnimatableNone: bg
}, Sg = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function wg(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(fo) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = Sg.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const kg = /\b([a-z-]*)\(.*?\)/gu, us = {
  ...yt,
  getAnimatableNone: (e) => {
    const t = e.match(kg);
    return t ? t.map(wg).join(" ") : e;
  }
}, Cg = {
  ...Qs,
  // Color props
  color: be,
  backgroundColor: be,
  outlineColor: be,
  fill: be,
  stroke: be,
  // Border props
  borderColor: be,
  borderTopColor: be,
  borderRightColor: be,
  borderBottomColor: be,
  borderLeftColor: be,
  filter: us,
  WebkitFilter: us
}, mo = (e) => Cg[e];
function yh(e, t) {
  let n = mo(e);
  return n !== us && (n = yt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Eg = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function _g(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !Eg.has(s) && On(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = yh(n, i);
}
const ma = (e) => e === tn || e === G, ga = (e, t) => parseFloat(e.split(", ")[t]), ya = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return ga(i[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? ga(s[1], e) : 0;
  }
}, Pg = /* @__PURE__ */ new Set(["x", "y", "z"]), Tg = en.filter((e) => !Pg.has(e));
function Ag(e) {
  const t = [];
  return Tg.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Jt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: ya(4, 13),
  y: ya(5, 14)
};
Jt.translateX = Jt.x;
Jt.translateY = Jt.y;
const Pt = /* @__PURE__ */ new Set();
let cs = !1, hs = !1;
function xh() {
  if (hs) {
    const e = Array.from(Pt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Ag(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([s, o]) => {
        var a;
        (a = r.getValue(s)) === null || a === void 0 || a.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  hs = !1, cs = !1, Pt.forEach((e) => e.complete()), Pt.clear();
}
function vh() {
  Pt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (hs = !0);
  });
}
function Rg() {
  vh(), xh();
}
class go {
  constructor(t, n, r, i, s, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Pt.add(this), cs || (cs = !0, re.read(vh), re.resolveKeyframes(xh))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i?.get(), a = t[t.length - 1];
          if (o !== void 0)
            t[0] = o;
          else if (r && n) {
            const u = r.readValue(n, a);
            u != null && (t[0] = u);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else
          t[s] = t[s - 1];
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Pt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Pt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const bh = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Lg = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Ig(e) {
  const t = Lg.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const Og = 4;
function Sh(e, t, n = 1) {
  gt(n <= Og, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, i] = Ig(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return bh(o) ? parseFloat(o) : o;
  }
  return Js(i) ? Sh(i, t, n + 1) : i;
}
const wh = (e) => (t) => t.test(e), Mg = {
  test: (e) => e === "auto",
  parse: (e) => e
}, kh = [tn, G, et, ht, wm, Sm, Mg], xa = (e) => kh.find(wh(e));
class Ch extends go {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let c = t[u];
      if (typeof c == "string" && (c = c.trim(), Js(c))) {
        const l = Sh(c, n.current);
        l !== void 0 && (t[u] = l), u === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !eh.has(r) || t.length !== 2)
      return;
    const [i, s] = t, o = xa(i), a = xa(s);
    if (o !== a)
      if (ma(o) && ma(a))
        for (let u = 0; u < t.length; u++) {
          const c = t[u];
          typeof c == "string" && (t[u] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      ug(t[i]) && r.push(i);
    r.length && _g(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Jt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, a = i[o];
    i[o] = Jt[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([u, c]) => {
      n.getValue(u).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const va = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(yt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Dg(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function jg(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], o = va(i, t), a = va(s, t);
  return Zt(o === a, `You are trying to animate ${t} from "${i}" to "${s}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${s} via the \`style\` property.`), !o || !a ? !1 : Dg(e) || (n === "spring" || io(n)) && r;
}
const Ng = (e) => e !== null;
function si(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Ng), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const Fg = 40;
class Eh {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = tt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: o,
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Fg ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Rg(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = tt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: s, delay: o, onComplete: a, onUpdate: u, isGenerator: c } = this.options;
    if (!c && !jg(t, r, i, s))
      if (o)
        this.options.duration = 0;
      else {
        u && u(si(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const l = this.initPlayback(t, n);
    l !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...l
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
function xi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Bg({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!t)
    i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, u = 2 * n - a;
    i = xi(u, a, e + 1 / 3), s = xi(u, a, e), o = xi(u, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function Wr(e, t) {
  return (n) => n > 0 ? t : e;
}
const vi = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, Vg = [ls, Et, Vt], zg = (e) => Vg.find((t) => t.test(e));
function ba(e) {
  const t = zg(e);
  if (Zt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Vt && (n = Bg(n)), n;
}
const Sa = (e, t) => {
  const n = ba(e), r = ba(t);
  if (!n || !r)
    return Wr(e, t);
  const i = { ...n };
  return (s) => (i.red = vi(n.red, r.red, s), i.green = vi(n.green, r.green, s), i.blue = vi(n.blue, r.blue, s), i.alpha = le(n.alpha, r.alpha, s), Et.transform(i));
}, Ug = (e, t) => (n) => t(e(n)), Vn = (...e) => e.reduce(Ug), fs = /* @__PURE__ */ new Set(["none", "hidden"]);
function Hg(e, t) {
  return fs.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function qg(e, t) {
  return (n) => le(e, t, n);
}
function yo(e) {
  return typeof e == "number" ? qg : typeof e == "string" ? Js(e) ? Wr : be.test(e) ? Sa : Kg : Array.isArray(e) ? _h : typeof e == "object" ? be.test(e) ? Sa : Wg : Wr;
}
function _h(e, t) {
  const n = [...e], r = n.length, i = e.map((s, o) => yo(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}
function Wg(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = yo(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function Gg(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s], a = e.indexes[o][i[o]], u = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = u, i[o]++;
  }
  return r;
}
const Kg = (e, t) => {
  const n = yt.createTransformer(t), r = On(e), i = On(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? fs.has(e) && !i.values.length || fs.has(t) && !r.values.length ? Hg(e, t) : Vn(_h(Gg(r, i), i.values), n) : (Zt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Wr(e, t));
};
function Ph(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : yo(e)(e, t);
}
const Yg = 5;
function Th(e, t, n) {
  const r = Math.max(t - Yg, 0);
  return th(n - e(r), t - r);
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
}, bi = 1e-3;
function Xg({ duration: e = ae.duration, bounce: t = ae.bounce, velocity: n = ae.velocity, mass: r = ae.mass }) {
  let i, s;
  Zt(e <= /* @__PURE__ */ Ze(ae.maxDuration), "Spring duration must be 10 seconds or less");
  let o = 1 - t;
  o = lt(ae.minDamping, ae.maxDamping, o), e = lt(ae.minDuration, ae.maxDuration, /* @__PURE__ */ ot(e)), o < 1 ? (i = (c) => {
    const l = c * o, p = l * e, f = l - n, h = ds(c, o), d = Math.exp(-p);
    return bi - f / h * d;
  }, s = (c) => {
    const p = c * o * e, f = p * n + n, h = Math.pow(o, 2) * Math.pow(c, 2) * e, d = Math.exp(-p), m = ds(Math.pow(c, 2), o);
    return (-i(c) + bi > 0 ? -1 : 1) * ((f - h) * d) / m;
  }) : (i = (c) => {
    const l = Math.exp(-c * e), p = (c - n) * e + 1;
    return -bi + l * p;
  }, s = (c) => {
    const l = Math.exp(-c * e), p = (n - c) * (e * e);
    return l * p;
  });
  const a = 5 / e, u = Qg(i, s, a);
  if (e = /* @__PURE__ */ Ze(e), isNaN(u))
    return {
      stiffness: ae.stiffness,
      damping: ae.damping,
      duration: e
    };
  {
    const c = Math.pow(u, 2) * r;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Jg = 12;
function Qg(e, t, n) {
  let r = n;
  for (let i = 1; i < Jg; i++)
    r = r - e(r) / t(r);
  return r;
}
function ds(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const $g = ["duration", "bounce"], Zg = ["stiffness", "damping", "mass"];
function wa(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function ey(e) {
  let t = {
    velocity: ae.velocity,
    stiffness: ae.stiffness,
    damping: ae.damping,
    mass: ae.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!wa(e, Zg) && wa(e, $g))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * lt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: ae.mass,
        stiffness: i,
        damping: s
      };
    } else {
      const n = Xg(e);
      t = {
        ...t,
        ...n,
        mass: ae.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Ah(e = ae.visualDuration, t = ae.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: u, damping: c, mass: l, duration: p, velocity: f, isResolvedFromDuration: h } = ey({
    ...n,
    velocity: -/* @__PURE__ */ ot(n.velocity || 0)
  }), d = f || 0, m = c / (2 * Math.sqrt(u * l)), g = o - s, y = /* @__PURE__ */ ot(Math.sqrt(u / l)), v = Math.abs(g) < 5;
  r || (r = v ? ae.restSpeed.granular : ae.restSpeed.default), i || (i = v ? ae.restDelta.granular : ae.restDelta.default);
  let w;
  if (m < 1) {
    const b = ds(y, m);
    w = (k) => {
      const E = Math.exp(-m * y * k);
      return o - E * ((d + m * y * g) / b * Math.sin(b * k) + g * Math.cos(b * k));
    };
  } else if (m === 1)
    w = (b) => o - Math.exp(-y * b) * (g + (d + y * g) * b);
  else {
    const b = y * Math.sqrt(m * m - 1);
    w = (k) => {
      const E = Math.exp(-m * y * k), T = Math.min(b * k, 300);
      return o - E * ((d + m * y * g) * Math.sinh(T) + b * g * Math.cosh(T)) / b;
    };
  }
  const S = {
    calculatedDuration: h && p || null,
    next: (b) => {
      const k = w(b);
      if (h)
        a.done = b >= p;
      else {
        let E = 0;
        m < 1 && (E = b === 0 ? /* @__PURE__ */ Ze(d) : Th(w, b, k));
        const T = Math.abs(E) <= r, D = Math.abs(o - k) <= i;
        a.done = T && D;
      }
      return a.value = a.done ? o : k, a;
    },
    toString: () => {
      const b = Math.min(Kc(S), ss), k = Yc((E) => S.next(b * E).value, b, 30);
      return b + "ms " + k;
    }
  };
  return S;
}
function ka({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: a, max: u, restDelta: c = 0.5, restSpeed: l }) {
  const p = e[0], f = {
    done: !1,
    value: p
  }, h = (T) => a !== void 0 && T < a || u !== void 0 && T > u, d = (T) => a === void 0 ? u : u === void 0 || Math.abs(a - T) < Math.abs(u - T) ? a : u;
  let m = n * t;
  const g = p + m, y = o === void 0 ? g : o(g);
  y !== g && (m = y - p);
  const v = (T) => -m * Math.exp(-T / r), w = (T) => y + v(T), S = (T) => {
    const D = v(T), V = w(T);
    f.done = Math.abs(D) <= c, f.value = f.done ? y : V;
  };
  let b, k;
  const E = (T) => {
    h(f.value) && (b = T, k = Ah({
      keyframes: [f.value, d(f.value)],
      velocity: Th(w, T, f.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: c,
      restSpeed: l
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (T) => {
      let D = !1;
      return !k && b === void 0 && (D = !0, S(T), E(T)), b !== void 0 && T >= b ? k.next(T - b) : (!D && S(T), f);
    }
  };
}
const ty = /* @__PURE__ */ Bn(0.42, 0, 1, 1), ny = /* @__PURE__ */ Bn(0, 0, 0.58, 1), Rh = /* @__PURE__ */ Bn(0.42, 0, 0.58, 1), ry = (e) => Array.isArray(e) && typeof e[0] != "number", Ca = {
  linear: Te,
  easeIn: ty,
  easeInOut: Rh,
  easeOut: ny,
  circIn: ho,
  circInOut: ch,
  circOut: uh,
  backIn: co,
  backInOut: ah,
  backOut: oh,
  anticipate: lh
}, Ea = (e) => {
  if (so(e)) {
    gt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, i] = e;
    return Bn(t, n, r, i);
  } else if (typeof e == "string")
    return gt(Ca[e] !== void 0, `Invalid easing type '${e}'`), Ca[e];
  return e;
};
function iy(e, t, n) {
  const r = [], i = n || Ph, s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || Te : t;
      a = Vn(u, a);
    }
    r.push(a);
  }
  return r;
}
function Lh(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (gt(s === t.length, "Both input and output ranges must be the same length"), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = iy(t, r, i), u = a.length, c = (l) => {
    if (o && l < e[0])
      return t[0];
    let p = 0;
    if (u > 1)
      for (; p < e.length - 2 && !(l < e[p + 1]); p++)
        ;
    const f = /* @__PURE__ */ Kt(e[p], e[p + 1], l);
    return a[p](f);
  };
  return n ? (l) => c(lt(e[0], e[s - 1], l)) : c;
}
function sy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Kt(0, t, r);
    e.push(le(n, 1, i));
  }
}
function oy(e) {
  const t = [0];
  return sy(t, e.length - 1), t;
}
function ay(e, t) {
  return e.map((n) => n * t);
}
function ly(e, t) {
  return e.map(() => t || Rh).splice(0, e.length - 1);
}
function Gr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = ry(r) ? r.map(Ea) : Ea(r), s = {
    done: !1,
    value: t[0]
  }, o = ay(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : oy(t),
    e
  ), a = Lh(o, t, {
    ease: Array.isArray(i) ? i : ly(t, i)
  });
  return {
    calculatedDuration: e,
    next: (u) => (s.value = a(u), s.done = u >= e, s)
  };
}
const uy = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => re.update(t, !0),
    stop: () => at(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ye.isProcessing ? ye.timestamp : tt.now()
  };
}, cy = {
  decay: ka,
  inertia: ka,
  tween: Gr,
  keyframes: Gr,
  spring: Ah
}, hy = (e) => e / 100;
class oi extends Eh {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: u } = this.options;
      u && u();
    };
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options, o = i?.KeyframeResolver || go, a = (u, c) => this.onKeyframesResolved(u, c);
    this.resolver = new o(s, a, n, r, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = this.options, a = io(n) ? n : cy[n] || Gr;
    let u, c;
    a !== Gr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && gt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), u = Vn(hy, Ph(t[0], t[1])), t = [0, 100]);
    const l = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), l.calculatedDuration === null && (l.calculatedDuration = Kc(l));
    const { calculatedDuration: p } = l, f = p + i, h = f * (r + 1) - i;
    return {
      generator: l,
      mirroredGenerator: c,
      mapPercentToKeyframes: u,
      calculatedDuration: p,
      resolvedDuration: f,
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
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const { finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: u, calculatedDuration: c, totalDuration: l, resolvedDuration: p } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: h, repeatType: d, repeatDelay: m, onUpdate: g } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - l / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const y = this.currentTime - f * (this.speed >= 0 ? 1 : -1), v = this.speed >= 0 ? y < 0 : y > l;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let w = this.currentTime, S = s;
    if (h) {
      const T = Math.min(this.currentTime, l) / p;
      let D = Math.floor(T), V = T % 1;
      !V && T >= 1 && (V = 1), V === 1 && D--, D = Math.min(D, h + 1), D % 2 && (d === "reverse" ? (V = 1 - V, m && (V -= m / p)) : d === "mirror" && (S = o)), w = lt(0, 1, V) * p;
    }
    const b = v ? { done: !1, value: u[0] } : S.next(w);
    a && (b.value = a(b.value));
    let { done: k } = b;
    !v && c !== null && (k = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return E && i !== void 0 && (b.value = si(u, this.options, i)), g && g(b.value), E && this.finish(), b;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ ot(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ ot(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Ze(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ ot(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = uy, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
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
function fy(e) {
  return new oi(e);
}
const dy = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function py(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: a = "easeInOut", times: u } = {}) {
  const c = { [t]: n };
  u && (c.offset = u);
  const l = Jc(a, i);
  return Array.isArray(l) && (c.easing = l), e.animate(c, {
    delay: r,
    duration: i,
    easing: Array.isArray(l) ? "linear" : l,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const my = /* @__PURE__ */ Hs(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Kr = 10, gy = 2e4;
function yy(e) {
  return io(e.type) || e.type === "spring" || !Xc(e.ease);
}
function xy(e, t) {
  const n = new oi({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < gy; )
    r = n.sample(s), i.push(r.value), s += Kr;
  return {
    times: void 0,
    keyframes: i,
    duration: s - Kr,
    ease: "linear"
  };
}
const Ih = {
  anticipate: lh,
  backInOut: ah,
  circInOut: ch
};
function vy(e) {
  return e in Ih;
}
class _a extends Eh {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    this.resolver = new Ch(s, (o, a) => this.onKeyframesResolved(o, a), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: s, type: o, motionValue: a, name: u, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && qr() && vy(s) && (s = Ih[s]), yy(this.options)) {
      const { onComplete: p, onUpdate: f, motionValue: h, element: d, ...m } = this.options, g = xy(t, m);
      t = g.keyframes, t.length === 1 && (t[1] = t[0]), r = g.duration, i = g.times, s = g.ease, o = "keyframes";
    }
    const l = py(a.owner.current, u, t, { ...this.options, duration: r, times: i, ease: s });
    return l.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (ua(l, this.pendingTimeline), this.pendingTimeline = void 0) : l.onfinish = () => {
      const { onComplete: p } = this.options;
      a.set(si(t, this.options, n)), p && p(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: l,
      duration: r,
      times: i,
      type: o,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ ot(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ ot(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Ze(t);
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
        return Te;
      const { animation: r } = n;
      ua(r, t);
    }
    return Te;
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
    const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: l, onComplete: p, element: f, ...h } = this.options, d = new oi({
        ...h,
        keyframes: r,
        duration: i,
        type: s,
        ease: o,
        times: a,
        isGenerator: !0
      }), m = /* @__PURE__ */ Ze(this.time);
      c.setWithVelocity(d.sample(m - Kr).value, d.sample(m).value, Kr);
    }
    const { onStop: u } = this.options;
    u && u(), this.cancel();
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
    const { motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: u, transformTemplate: c } = n.owner.getProps();
    return my() && r && dy.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !u && !c && !i && s !== "mirror" && o !== 0 && a !== "inertia";
  }
}
const by = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Sy = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), wy = {
  type: "keyframes",
  duration: 0.8
}, ky = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Cy = (e, { keyframes: t }) => t.length > 2 ? wy : Lt.has(e) ? e.startsWith("scale") ? Sy(t[1]) : by : ky;
function Ey({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: u, elapsed: c, ...l }) {
  return !!Object.keys(l).length;
}
const xo = (e, t, n, r = {}, i, s) => (o) => {
  const a = ro(r, e) || {}, u = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ Ze(u);
  let l = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : i
  };
  Ey(a) || (l = {
    ...l,
    ...Cy(e, l)
  }), l.duration && (l.duration = /* @__PURE__ */ Ze(l.duration)), l.repeatDelay && (l.repeatDelay = /* @__PURE__ */ Ze(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let p = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (l.duration = 0, l.delay === 0 && (p = !0)), p && !s && t.get() !== void 0) {
    const f = si(l.keyframes, a);
    if (f !== void 0)
      return re.update(() => {
        l.onUpdate(f), l.onComplete();
      }), new qm([]);
  }
  return !s && _a.supports(l) ? new _a(l) : new oi(l);
};
function _y({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Oh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...u } = t;
  r && (o = r);
  const c = [], l = i && e.animationState && e.animationState.getState()[i];
  for (const p in u) {
    const f = e.getValue(p, (s = e.latestValues[p]) !== null && s !== void 0 ? s : null), h = u[p];
    if (h === void 0 || l && _y(l, p))
      continue;
    const d = {
      delay: n,
      ...ro(o || {}, p)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const y = nh(e);
      if (y) {
        const v = window.MotionHandoffAnimation(y, p, re);
        v !== null && (d.startTime = v, m = !0);
      }
    }
    as(e, p), f.start(xo(p, f, h, e.shouldReduceMotion && eh.has(p) ? { type: !1 } : d, e, m));
    const g = f.animation;
    g && c.push(g);
  }
  return a && Promise.all(c).then(() => {
    re.update(() => {
      a && ig(e, a);
    });
  }), c;
}
function ps(e, t, n = {}) {
  var r;
  const i = ii(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Oh(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: l = 0, staggerChildren: p, staggerDirection: f } = s;
    return Py(e, t, l + c, p, f, n);
  } : () => Promise.resolve(), { when: u } = s;
  if (u) {
    const [c, l] = u === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => l());
  } else
    return Promise.all([o(), a(n.delay)]);
}
function Py(e, t, n = 0, r = 0, i = 1, s) {
  const o = [], a = (e.variantChildren.size - 1) * r, u = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(Ty).forEach((c, l) => {
    c.notify("AnimationStart", t), o.push(ps(c, t, {
      ...s,
      delay: n + u(l)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function Ty(e, t) {
  return e.sortNodePosition(t);
}
function Ay(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => ps(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = ps(e, t, n);
  else {
    const i = typeof t == "function" ? ii(e, t, n.custom) : t;
    r = Promise.all(Oh(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Ry = Ws.length;
function Mh(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Mh(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Ry; n++) {
    const r = Ws[n], i = e.props[r];
    (Ln(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Ly = [...qs].reverse(), Iy = qs.length;
function Oy(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Ay(e, n, r)));
}
function My(e) {
  let t = Oy(e), n = Pa(), r = !0;
  const i = (u) => (c, l) => {
    var p;
    const f = ii(e, l, u === "exit" ? (p = e.presenceContext) === null || p === void 0 ? void 0 : p.custom : void 0);
    if (f) {
      const { transition: h, transitionEnd: d, ...m } = f;
      c = { ...c, ...m, ...d };
    }
    return c;
  };
  function s(u) {
    t = u(e);
  }
  function o(u) {
    const { props: c } = e, l = Mh(e.parent) || {}, p = [], f = /* @__PURE__ */ new Set();
    let h = {}, d = 1 / 0;
    for (let g = 0; g < Iy; g++) {
      const y = Ly[g], v = n[y], w = c[y] !== void 0 ? c[y] : l[y], S = Ln(w), b = y === u ? v.isActive : null;
      b === !1 && (d = g);
      let k = w === l[y] && w !== c[y] && S;
      if (k && r && e.manuallyAnimateOnMount && (k = !1), v.protectedKeys = { ...h }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !w && !v.prevProp || // Or if the prop doesn't define an animation
      ni(w) || typeof w == "boolean")
        continue;
      const E = Dy(v.prevProp, w);
      let T = E || // If we're making this variant active, we want to always make it active
      y === u && v.isActive && !k && S || // If we removed a higher-priority variant (i is in reverse order)
      g > d && S, D = !1;
      const V = Array.isArray(w) ? w : [w];
      let R = V.reduce(i(y), {});
      b === !1 && (R = {});
      const { prevResolvedValues: A = {} } = v, j = {
        ...A,
        ...R
      }, B = (W) => {
        T = !0, f.has(W) && (D = !0, f.delete(W)), v.needsAnimating[W] = !0;
        const Q = e.getValue(W);
        Q && (Q.liveStyle = !1);
      };
      for (const W in j) {
        const Q = R[W], ge = A[W];
        if (h.hasOwnProperty(W))
          continue;
        let _ = !1;
        is(Q) && is(ge) ? _ = !Gc(Q, ge) : _ = Q !== ge, _ ? Q != null ? B(W) : f.add(W) : Q !== void 0 && f.has(W) ? B(W) : v.protectedKeys[W] = !0;
      }
      v.prevProp = w, v.prevResolvedValues = R, v.isActive && (h = { ...h, ...R }), r && e.blockInitialAnimation && (T = !1), T && (!(k && E) || D) && p.push(...V.map((W) => ({
        animation: W,
        options: { type: y }
      })));
    }
    if (f.size) {
      const g = {};
      f.forEach((y) => {
        const v = e.getBaseTarget(y), w = e.getValue(y);
        w && (w.liveStyle = !0), g[y] = v ?? null;
      }), p.push({ animation: g });
    }
    let m = !!p.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(p) : Promise.resolve();
  }
  function a(u, c) {
    var l;
    if (n[u].isActive === c)
      return Promise.resolve();
    (l = e.variantChildren) === null || l === void 0 || l.forEach((f) => {
      var h;
      return (h = f.animationState) === null || h === void 0 ? void 0 : h.setActive(u, c);
    }), n[u].isActive = c;
    const p = o(u);
    for (const f in n)
      n[f].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Pa(), r = !0;
    }
  };
}
function Dy(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Gc(t, e) : !1;
}
function wt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Pa() {
  return {
    animate: wt(!0),
    whileInView: wt(),
    whileHover: wt(),
    whileTap: wt(),
    whileDrag: wt(),
    whileFocus: wt(),
    exit: wt()
  };
}
class vt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class jy extends vt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = My(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ni(t) && (this.unmountControls = t.subscribe(this.node));
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
let Ny = 0;
class Fy extends vt {
  constructor() {
    super(...arguments), this.id = Ny++;
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
const By = {
  animation: {
    Feature: jy
  },
  exit: {
    Feature: Fy
  }
};
function Mn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function zn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Vy = (e) => (t) => oo(t) && e(t, zn(t));
function En(e, t, n, r) {
  return Mn(e, t, Vy(n), r);
}
const Ta = (e, t) => Math.abs(e - t);
function zy(e, t) {
  const n = Ta(e.x, t.x), r = Ta(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Dh {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = wi(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, h = zy(p.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !h)
        return;
      const { point: d } = p, { timestamp: m } = ye;
      this.history.push({ ...d, timestamp: m });
      const { onStart: g, onMove: y } = this.handlers;
      f || (g && g(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, f) => {
      this.lastMoveEvent = p, this.lastMoveEventInfo = Si(f, this.transformPagePoint), re.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, f) => {
      this.end();
      const { onEnd: h, onSessionEnd: d, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = wi(p.type === "pointercancel" ? this.lastMoveEventInfo : Si(f, this.transformPagePoint), this.history);
      this.startEvent && h && h(p, g), d && d(p, g);
    }, !oo(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = zn(t), a = Si(o, this.transformPagePoint), { point: u } = a, { timestamp: c } = ye;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: l } = n;
    l && l(t, wi(a, this.history)), this.removeListeners = Vn(En(this.contextWindow, "pointermove", this.handlePointerMove), En(this.contextWindow, "pointerup", this.handlePointerUp), En(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), at(this.updatePoint);
  }
}
function Si(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Aa(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wi({ point: e }, t) {
  return {
    point: e,
    delta: Aa(e, jh(t)),
    offset: Aa(e, Uy(t)),
    velocity: Hy(t, 0.1)
  };
}
function Uy(e) {
  return e[0];
}
function jh(e) {
  return e[e.length - 1];
}
function Hy(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = jh(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ Ze(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ ot(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const Nh = 1e-4, qy = 1 - Nh, Wy = 1 + Nh, Fh = 0.01, Gy = 0 - Fh, Ky = 0 + Fh;
function Fe(e) {
  return e.max - e.min;
}
function Yy(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ra(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = Fe(n) / Fe(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= qy && e.scale <= Wy || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Gy && e.translate <= Ky || isNaN(e.translate)) && (e.translate = 0);
}
function _n(e, t, n, r) {
  Ra(e.x, t.x, n.x, r ? r.originX : void 0), Ra(e.y, t.y, n.y, r ? r.originY : void 0);
}
function La(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Fe(t);
}
function Xy(e, t, n) {
  La(e.x, t.x, n.x), La(e.y, t.y, n.y);
}
function Ia(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Fe(t);
}
function Pn(e, t, n) {
  Ia(e.x, t.x, n.x), Ia(e.y, t.y, n.y);
}
function Jy(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e;
}
function Oa(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Qy(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Oa(e.x, n, i),
    y: Oa(e.y, t, r)
  };
}
function Ma(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function $y(e, t) {
  return {
    x: Ma(e.x, t.x),
    y: Ma(e.y, t.y)
  };
}
function Zy(e, t) {
  let n = 0.5;
  const r = Fe(e), i = Fe(t);
  return i > r ? n = /* @__PURE__ */ Kt(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Kt(e.min, e.max - i, t.min)), lt(0, 1, n);
}
function ex(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ms = 0.35;
function tx(e = ms) {
  return e === !1 ? e = 0 : e === !0 && (e = ms), {
    x: Da(e, "left", "right"),
    y: Da(e, "top", "bottom")
  };
}
function Da(e, t, n) {
  return {
    min: ja(e, t),
    max: ja(e, n)
  };
}
function ja(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Na = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), zt = () => ({
  x: Na(),
  y: Na()
}), Fa = () => ({ min: 0, max: 0 }), fe = () => ({
  x: Fa(),
  y: Fa()
});
function ze(e) {
  return [e("x"), e("y")];
}
function Bh({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function nx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function rx(e, t) {
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
function gs({ scale: e, scaleX: t, scaleY: n }) {
  return !ki(e) || !ki(t) || !ki(n);
}
function kt(e) {
  return gs(e) || Vh(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Vh(e) {
  return Ba(e.x) || Ba(e.y);
}
function Ba(e) {
  return e && e !== "0%";
}
function Yr(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function Va(e, t, n, r, i) {
  return i !== void 0 && (e = Yr(e, i, r)), Yr(e, n, r) + t;
}
function ys(e, t = 0, n = 1, r, i) {
  e.min = Va(e.min, t, n, r, i), e.max = Va(e.max, t, n, r, i);
}
function zh(e, { x: t, y: n }) {
  ys(e.x, t.translate, t.scale, t.originPoint), ys(e.y, n.translate, n.scale, n.originPoint);
}
const za = 0.999999999999, Ua = 1.0000000000001;
function ix(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    s = n[a], o = s.projectionDelta;
    const { visualElement: u } = s.options;
    u && u.props.style && u.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Ht(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, zh(e, o)), r && kt(s.latestValues) && Ht(e, s.latestValues));
  }
  t.x < Ua && t.x > za && (t.x = 1), t.y < Ua && t.y > za && (t.y = 1);
}
function Ut(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ha(e, t, n, r, i = 0.5) {
  const s = le(e.min, e.max, i);
  ys(e, t, n, s, r);
}
function Ht(e, t) {
  Ha(e.x, t.x, t.scaleX, t.scale, t.originX), Ha(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Uh(e, t) {
  return Bh(rx(e.getBoundingClientRect(), t));
}
function sx(e, t, n) {
  const r = Uh(e, n), { scroll: i } = t;
  return i && (Ut(r.x, i.offset.x), Ut(r.y, i.offset.y)), r;
}
const Hh = ({ current: e }) => e ? e.ownerDocument.defaultView : null, ox = /* @__PURE__ */ new WeakMap();
class ax {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = fe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (l) => {
      const { dragSnapToOrigin: p } = this.getProps();
      p ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(zn(l).point);
    }, s = (l, p) => {
      const { drag: f, dragPropagation: h, onDragStart: d } = this.getProps();
      if (f && !h && (this.openDragLock && this.openDragLock(), this.openDragLock = Zm(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ze((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (et.test(y)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const w = v.layout.layoutBox[g];
            w && (y = Fe(w) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), d && re.postRender(() => d(l, p)), as(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, o = (l, p) => {
      const { dragPropagation: f, dragDirectionLock: h, onDirectionLock: d, onDrag: m } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: g } = p;
      if (h && this.currentDirection === null) {
        this.currentDirection = lx(g), this.currentDirection !== null && d && d(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, g), this.updateAxis("y", p.point, g), this.visualElement.render(), m && m(l, p);
    }, a = (l, p) => this.stop(l, p), u = () => ze((l) => {
      var p;
      return this.getAnimationState(l) === "paused" && ((p = this.getAxisMotionValue(l).animation) === null || p === void 0 ? void 0 : p.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Dh(t, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: a,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Hh(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && re.postRender(() => s(t, n));
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
    if (!r || !tr(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = Jy(o, this.constraints[t], this.elastic[t])), s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Bt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Qy(i.layoutBox, n) : this.constraints = !1, this.elastic = tx(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ze((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = ex(i.layoutBox[o], this.constraints[o]));
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
    const s = sx(r, i.root, this.visualElement.getTransformPagePoint());
    let o = $y(i.layout.layoutBox, s);
    if (n) {
      const a = n(nx(o));
      this.hasMutatedConstraints = !!a, a && (o = Bh(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), u = this.constraints || {}, c = ze((l) => {
      if (!tr(l, n, this.currentDirection))
        return;
      let p = u && u[l] || {};
      o && (p = { min: 0, max: 0 });
      const f = i ? 200 : 1e6, h = i ? 40 : 1e7, d = {
        type: "inertia",
        velocity: r ? t[l] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...p
      };
      return this.startAxisValueAnimation(l, d);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return as(this.visualElement, t), r.start(xo(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ze((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ze((t) => {
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
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ze((n) => {
      const { drag: r } = this.getProps();
      if (!tr(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - le(o, a, 0.5));
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
    ze((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const u = a.get();
        i[o] = Zy({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ze((o) => {
      if (!tr(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: u, max: c } = this.constraints[o];
      a.set(le(u, c, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    ox.set(this.visualElement, this);
    const t = this.visualElement.current, n = En(t, "pointerdown", (u) => {
      const { drag: c, dragListener: l = !0 } = this.getProps();
      c && l && this.start(u);
    }), r = () => {
      const { dragConstraints: u } = this.getProps();
      Bt(u) && u.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), re.read(r);
    const o = Mn(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", (({ delta: u, hasLayoutChanged: c }) => {
      this.isDragging && c && (ze((l) => {
        const p = this.getAxisMotionValue(l);
        p && (this.originPoint[l] += u[l].translate, p.set(p.get() + u[l].translate));
      }), this.visualElement.render());
    }));
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = ms, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function tr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function lx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class ux extends vt {
  constructor(t) {
    super(t), this.removeGroupControls = Te, this.removeListeners = Te, this.controls = new ax(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Te;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const qa = (e) => (t, n) => {
  e && re.postRender(() => e(t, n));
};
class cx extends vt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Te;
  }
  onPointerDown(t) {
    this.session = new Dh(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Hh(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: qa(t),
      onStart: qa(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && re.postRender(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = En(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ir = {
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
function Wa(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const hn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (G.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Wa(e, t.target.x), r = Wa(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, hx = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = yt.parse(e);
    if (i.length > 5)
      return r;
    const s = yt.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, u = n.y.scale * t.y;
    i[0 + o] /= a, i[1 + o] /= u;
    const c = le(a, u, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), s(i);
  }
};
class fx extends Nd {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    Im(dx), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Ir.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || re.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ks.postRender(() => {
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
function qh(e) {
  const [t, n] = Pc(), r = me(zs);
  return x.jsx(fx, { ...e, layoutGroup: r, switchLayoutGroup: me(Oc), isPresent: t, safeToRemove: n });
}
const dx = {
  borderRadius: {
    ...hn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: hn,
  borderTopRightRadius: hn,
  borderBottomLeftRadius: hn,
  borderBottomRightRadius: hn,
  boxShadow: hx
};
function px(e, t, n) {
  const r = xe(e) ? e : Xt(e);
  return r.start(xo("", r, t, n)), r.animation;
}
function mx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const gx = (e, t) => e.depth - t.depth;
class yx {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ao(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    lo(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(gx), this.isDirty = !1, this.children.forEach(t);
  }
}
function xx(e, t) {
  const n = tt.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (at(r), e(s - t));
  };
  return re.read(r, !0), () => at(r);
}
const Wh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], vx = Wh.length, Ga = (e) => typeof e == "string" ? parseFloat(e) : e, Ka = (e) => typeof e == "number" || G.test(e);
function bx(e, t, n, r, i, s) {
  i ? (e.opacity = le(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Sx(r)
  ), e.opacityExit = le(t.opacity !== void 0 ? t.opacity : 1, 0, wx(r))) : s && (e.opacity = le(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < vx; o++) {
    const a = `border${Wh[o]}Radius`;
    let u = Ya(t, a), c = Ya(n, a);
    if (u === void 0 && c === void 0)
      continue;
    u || (u = 0), c || (c = 0), u === 0 || c === 0 || Ka(u) === Ka(c) ? (e[a] = Math.max(le(Ga(u), Ga(c), r), 0), (et.test(c) || et.test(u)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function Ya(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Sx = /* @__PURE__ */ Gh(0, 0.5, uh), wx = /* @__PURE__ */ Gh(0.5, 0.95, Te);
function Gh(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Kt(e, t, r));
}
function Xa(e, t) {
  e.min = t.min, e.max = t.max;
}
function Be(e, t) {
  Xa(e.x, t.x), Xa(e.y, t.y);
}
function Ja(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Qa(e, t, n, r, i) {
  return e -= t, e = Yr(e, 1 / n, r), i !== void 0 && (e = Yr(e, 1 / i, r)), e;
}
function kx(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (et.test(t) && (t = parseFloat(t), t = le(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = le(s.min, s.max, r);
  e === s && (a -= t), e.min = Qa(e.min, t, n, a, i), e.max = Qa(e.max, t, n, a, i);
}
function $a(e, t, [n, r, i], s, o) {
  kx(e, t[n], t[r], t[i], t.scale, s, o);
}
const Cx = ["x", "scaleX", "originX"], Ex = ["y", "scaleY", "originY"];
function Za(e, t, n, r) {
  $a(e.x, t, Cx, n ? n.x : void 0, r ? r.x : void 0), $a(e.y, t, Ex, n ? n.y : void 0, r ? r.y : void 0);
}
function el(e) {
  return e.translate === 0 && e.scale === 1;
}
function Kh(e) {
  return el(e.x) && el(e.y);
}
function tl(e, t) {
  return e.min === t.min && e.max === t.max;
}
function _x(e, t) {
  return tl(e.x, t.x) && tl(e.y, t.y);
}
function nl(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Yh(e, t) {
  return nl(e.x, t.x) && nl(e.y, t.y);
}
function rl(e) {
  return Fe(e.x) / Fe(e.y);
}
function il(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Px {
  constructor() {
    this.members = [];
  }
  add(t) {
    ao(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (lo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
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
function Tx(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, o = n?.z || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: l, rotateX: p, rotateY: f, skewX: h, skewY: d } = n;
    c && (r = `perspective(${c}px) ${r}`), l && (r += `rotate(${l}deg) `), p && (r += `rotateX(${p}deg) `), f && (r += `rotateY(${f}deg) `), h && (r += `skewX(${h}deg) `), d && (r += `skewY(${d}deg) `);
  }
  const a = e.x.scale * t.x, u = e.y.scale * t.y;
  return (a !== 1 || u !== 1) && (r += `scale(${a}, ${u})`), r || "none";
}
const Ct = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, wn = typeof window < "u" && window.MotionDebug !== void 0, Ci = ["", "X", "Y", "Z"], Ax = { visibility: "hidden" }, sl = 1e3;
let Rx = 0;
function Ei(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Xh(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = nh(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", re, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Xh(r);
}
function Jh({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, a = t?.()) {
      this.id = Rx++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, wn && (Ct.totalNodes = Ct.resolvedTargetDeltas = Ct.recalculatedProjection = 0), this.nodes.forEach(Ox), this.nodes.forEach(Fx), this.nodes.forEach(Bx), this.nodes.forEach(Mx), wn && window.MotionDebug.record(Ct);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yx());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new uo()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = mx(o), this.instance = o;
      const { layoutId: u, layout: c, visualElement: l } = this.options;
      if (l && !l.current && l.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || u) && (this.isLayoutDirty = !0), e) {
        let p;
        const f = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, p && p(), p = xx(f, 250), Ir.hasAnimatedSinceResize && (Ir.hasAnimatedSinceResize = !1, this.nodes.forEach(al));
        });
      }
      u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && l && (u || c) && this.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: d }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || l.getDefaultTransition() || qx, { onLayoutAnimationStart: g, onLayoutAnimationComplete: y } = l.getProps(), v = !this.targetLayout || !Yh(this.targetLayout, d) || h, w = !f && h;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(p, w);
          const S = {
            ...ro(m, "layout"),
            onPlay: g,
            onComplete: y
          };
          (l.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          f || al(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = d;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, at(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Vx), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Xh(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let l = 0; l < this.path.length; l++) {
        const p = this.path[l];
        p.shouldResetTransform = !0, p.updateScroll("snapshot"), p.options.layoutRoot && p.willUpdate(!1);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ol);
        return;
      }
      this.isUpdating || this.nodes.forEach(jx), this.isUpdating = !1, this.nodes.forEach(Nx), this.nodes.forEach(Lx), this.nodes.forEach(Ix), this.clearAllSnapshots();
      const a = tt.now();
      ye.delta = lt(0, 1e3 / 60, a - ye.timestamp), ye.timestamp = a, ye.isProcessing = !0, mi.update.process(ye), mi.preRender.process(ye), mi.render.process(ye), ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ks.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Dx), this.sharedNodes.forEach(zx);
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
        for (let u = 0; u < this.path.length; u++)
          this.path[u].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = fe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a) {
        const u = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Kh(this.projectionDelta), u = this.getTransformTemplate(), c = u ? u(this.latestValues, "") : void 0, l = c !== this.prevTransformTemplateValue;
      o && (a || kt(this.latestValues) || l) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return o && (u = this.removeTransform(u)), Wx(u), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: u,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a)
        return fe();
      const u = a.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(Gx))) {
        const { scroll: l } = this.root;
        l && (Ut(u.x, l.offset.x), Ut(u.y, l.offset.y));
      }
      return u;
    }
    removeElementScroll(o) {
      var a;
      const u = fe();
      if (Be(u, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return u;
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c], { scroll: p, options: f } = l;
        l !== this.root && p && f.layoutScroll && (p.wasRoot && Be(u, o), Ut(u.x, p.offset.x), Ut(u.y, p.offset.y));
      }
      return u;
    }
    applyTransform(o, a = !1) {
      const u = fe();
      Be(u, o);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        !a && l.options.layoutScroll && l.scroll && l !== l.root && Ht(u, {
          x: -l.scroll.offset.x,
          y: -l.scroll.offset.y
        }), kt(l.latestValues) && Ht(u, l.latestValues);
      }
      return kt(this.latestValues) && Ht(u, this.latestValues), u;
    }
    removeTransform(o) {
      const a = fe();
      Be(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !kt(c.latestValues))
          continue;
        gs(c.latestValues) && c.updateSnapshot();
        const l = fe(), p = c.measurePageBox();
        Be(l, p), Za(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, l);
      }
      return kt(this.latestValues) && Za(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const u = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== u;
      if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: p, layoutId: f } = this.options;
      if (!(!this.layout || !(p || f))) {
        if (this.resolvedRelativeTargetAt = ye.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), Pn(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), Be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = fe(), this.targetWithTransforms = fe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Xy(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Be(this.target, this.layout.layoutBox), zh(this.target, this.targetDelta)) : Be(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), Pn(this.relativeTargetOrigin, this.target, h.target), Be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          wn && Ct.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || gs(this.parent.latestValues) || Vh(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const a = this.getLead(), u = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1), u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ye.timestamp && (c = !1), c)
        return;
      const { layout: l, layoutId: p } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || p))
        return;
      Be(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      ix(this.layoutCorrected, this.treeScale, this.path, u), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = fe());
      const { target: d } = a;
      if (!d) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ja(this.prevProjectionDelta.x, this.projectionDelta.x), Ja(this.prevProjectionDelta.y, this.projectionDelta.y)), _n(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !il(this.projectionDelta.x, this.prevProjectionDelta.x) || !il(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d)), wn && Ct.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), o) {
        const u = this.getStack();
        u && u.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = zt(), this.projectionDelta = zt(), this.projectionDeltaWithTransform = zt();
    }
    setAnimationOrigin(o, a = !1) {
      const u = this.snapshot, c = u ? u.latestValues : {}, l = { ...this.latestValues }, p = zt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = fe(), h = u ? u.source : void 0, d = this.layout ? this.layout.source : void 0, m = h !== d, g = this.getStack(), y = !g || g.members.length <= 1, v = !!(m && !y && this.options.crossfade === !0 && !this.path.some(Hx));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (S) => {
        const b = S / 1e3;
        ll(p.x, o.x, b), ll(p.y, o.y, b), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Pn(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ux(this.relativeTarget, this.relativeTargetOrigin, f, b), w && _x(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = fe()), Be(w, this.relativeTarget)), m && (this.animationValues = l, bx(l, c, this.latestValues, b, v, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (at(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = re.update(() => {
        Ir.hasAnimatedSinceResize = !0, this.currentAnimation = px(0, sl, {
          ...o,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(sl), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: u, layout: c, latestValues: l } = o;
      if (!(!a || !u || !c)) {
        if (this !== o && this.layout && c && Qh(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          u = this.target || fe();
          const p = Fe(this.layout.layoutBox.x);
          u.x.min = o.target.x.min, u.x.max = u.x.min + p;
          const f = Fe(this.layout.layoutBox.y);
          u.y.min = o.target.y.min, u.y.max = u.y.min + f;
        }
        Be(a, u), Ht(a, l), _n(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Px()), this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      c && c.promote(this, u), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: u } = o;
      if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (a = !0), !a)
        return;
      const c = {};
      u.z && Ei("z", o, c, this.animationValues);
      for (let l = 0; l < Ci.length; l++)
        Ei(`rotate${Ci[l]}`, o, c, this.animationValues), Ei(`skew${Ci[l]}`, o, c, this.animationValues);
      o.render();
      for (const l in c)
        o.setStaticValue(l, c[l]), this.animationValues && (this.animationValues[l] = c[l]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, u;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Ax;
      const c = {
        visibility: ""
      }, l = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Rr(o?.pointerEvents) || "", c.transform = l ? l(this.latestValues, "") : "none", c;
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = Rr(o?.pointerEvents) || ""), this.hasProjected && !kt(this.latestValues) && (m.transform = l ? l({}, "") : "none", this.hasProjected = !1), m;
      }
      const f = p.animationValues || p.latestValues;
      this.applyTransformsToTarget(), c.transform = Tx(this.projectionDeltaWithTransform, this.treeScale, f), l && (c.transform = l(f, c.transform));
      const { x: h, y: d } = this.projectionDelta;
      c.transformOrigin = `${h.origin * 100}% ${d.origin * 100}% 0`, p.animationValues ? c.opacity = p === this ? (u = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = p === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const m in Hr) {
        if (f[m] === void 0)
          continue;
        const { correct: g, applyTo: y } = Hr[m], v = c.transform === "none" ? f[m] : g(f[m], p);
        if (y) {
          const w = y.length;
          for (let S = 0; S < w; S++)
            c[y[S]] = v;
        } else
          c[m] = v;
      }
      return this.options.layoutId && (c.pointerEvents = p === this ? Rr(o?.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(ol), this.root.sharedNodes.clear();
    }
  };
}
function Lx(e) {
  e.updateLayout();
}
function Ix(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: s } = e.options, o = n.source !== e.layout.source;
    s === "size" ? ze((p) => {
      const f = o ? n.measuredBox[p] : n.layoutBox[p], h = Fe(f);
      f.min = r[p].min, f.max = f.min + h;
    }) : Qh(s, n.layoutBox, r) && ze((p) => {
      const f = o ? n.measuredBox[p] : n.layoutBox[p], h = Fe(r[p]);
      f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[p].max = e.relativeTarget[p].min + h);
    });
    const a = zt();
    _n(a, r, n.layoutBox);
    const u = zt();
    o ? _n(u, e.applyTransform(i, !0), n.measuredBox) : _n(u, r, n.layoutBox);
    const c = !Kh(a);
    let l = !1;
    if (!e.resumeFrom) {
      const p = e.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: f, layout: h } = p;
        if (f && h) {
          const d = fe();
          Pn(d, n.layoutBox, f.layoutBox);
          const m = fe();
          Pn(m, r, h.layoutBox), Yh(d, m) || (l = !0), p.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = d, e.relativeParent = p);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Ox(e) {
  wn && Ct.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Mx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Dx(e) {
  e.clearSnapshot();
}
function ol(e) {
  e.clearMeasurements();
}
function jx(e) {
  e.isLayoutDirty = !1;
}
function Nx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function al(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Fx(e) {
  e.resolveTargetDelta();
}
function Bx(e) {
  e.calcProjection();
}
function Vx(e) {
  e.resetSkewAndRotation();
}
function zx(e) {
  e.removeLeadSnapshot();
}
function ll(e, t, n) {
  e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ul(e, t, n, r) {
  e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r);
}
function Ux(e, t, n, r) {
  ul(e.x, t.x, n.x, r), ul(e.y, t.y, n.y, r);
}
function Hx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const qx = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, cl = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), hl = cl("applewebkit/") && !cl("chrome/") ? Math.round : Te;
function fl(e) {
  e.min = hl(e.min), e.max = hl(e.max);
}
function Wx(e) {
  fl(e.x), fl(e.y);
}
function Qh(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Yy(rl(t), rl(n), 0.2);
}
function Gx(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Kx = Jh({
  attachResizeListener: (e, t) => Mn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), _i = {
  current: void 0
}, $h = Jh({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!_i.current) {
      const e = new Kx({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), _i.current = e;
    }
    return _i.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Yx = {
  pan: {
    Feature: cx
  },
  drag: {
    Feature: ux,
    ProjectionNode: $h,
    MeasureLayout: qh
  }
};
function dl(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, s = r[i];
  s && re.postRender(() => s(t, zn(t)));
}
class Xx extends vt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Ym(t, (n) => (dl(this.node, n, "Start"), (r) => dl(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Jx extends vt {
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
    this.unmount = Vn(Mn(this.node.current, "focus", () => this.onFocus()), Mn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function pl(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), s = r[i];
  s && re.postRender(() => s(t, zn(t)));
}
class Qx extends vt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = $m(t, (n) => (pl(this.node, n, "Start"), (r, { success: i }) => pl(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const xs = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), $x = (e) => {
  const t = xs.get(e.target);
  t && t(e);
}, Zx = (e) => {
  e.forEach($x);
};
function e1({ root: e, ...t }) {
  const n = e || document;
  Pi.has(n) || Pi.set(n, {});
  const r = Pi.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Zx, { root: e, ...t })), r[i];
}
function t1(e, t, n) {
  const r = e1(t);
  return xs.set(e, n), r.observe(e), () => {
    xs.delete(e), r.unobserve(e);
  };
}
const n1 = {
  some: 0,
  all: 1
};
class r1 extends vt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : n1[i]
    }, a = (u) => {
      const { isIntersecting: c } = u;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: l, onViewportLeave: p } = this.node.getProps(), f = c ? l : p;
      f && f(u);
    };
    return t1(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(i1(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function i1({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const s1 = {
  inView: {
    Feature: r1
  },
  tap: {
    Feature: Qx
  },
  focus: {
    Feature: Jx
  },
  hover: {
    Feature: Xx
  }
}, o1 = {
  layout: {
    ProjectionNode: $h,
    MeasureLayout: qh
  }
}, vs = { current: null }, Zh = { current: !1 };
function a1() {
  if (Zh.current = !0, !!Us)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => vs.current = e.matches;
      e.addListener(t), t();
    } else
      vs.current = !1;
}
const l1 = [...kh, be, yt], u1 = (e) => l1.find(wh(e)), ml = /* @__PURE__ */ new WeakMap();
function c1(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (xe(i))
      e.addValue(r, i), process.env.NODE_ENV === "development" && ei(i.version === "11.18.2", `Attempting to mix Motion versions ${i.version} with 11.18.2 may not work as expected.`);
    else if (xe(s))
      e.addValue(r, Xt(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Xt(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const gl = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class h1 {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = go, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = tt.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, re.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: c, onUpdate: l } = o;
    this.onUpdate = l, this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = ri(n), this.isVariantNode = Lc(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: p, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const d = f[h];
      u[h] !== void 0 && xe(d) && d.set(u[h], !1);
    }
  }
  mount(t) {
    this.current = t, ml.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Zh.current || a1(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vs.current, process.env.NODE_ENV !== "production" && ei(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    ml.delete(this.current), this.projection && this.projection.unmount(), at(this.notifyUpdate), at(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Lt.has(t), i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && re.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), s(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Yt) {
      const n = Yt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : fe();
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
    for (let r = 0; r < gl.length; r++) {
      const i = gl[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = c1(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = Xt(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (bh(i) || hh(i)) ? i = parseFloat(i) : !u1(i) && yt.test(n) && (i = yh(t, n)), this.setBaseTarget(t, xe(i) ? i.get() : i)), xe(i) ? i.get() : i;
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
      const o = Xs(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[t]);
    }
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !xe(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new uo()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ef extends h1 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ch;
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
    xe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function f1(e) {
  return window.getComputedStyle(e);
}
class d1 extends ef {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Vc;
  }
  readValueFromInstance(t, n) {
    if (Lt.has(n)) {
      const r = mo(n);
      return r && r.default || 0;
    } else {
      const r = f1(t), i = (Nc(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Uh(t, n);
  }
  build(t, n, r) {
    $s(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return no(t, n, r);
  }
}
class p1 extends ef {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = fe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Lt.has(n)) {
      const r = mo(n);
      return r && r.default || 0;
    }
    return n = zc.has(n) ? n : Gs(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qc(t, n, r);
  }
  build(t, n, r) {
    Zs(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Uc(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = to(t.tagName), super.mount(t);
  }
}
const m1 = (e, t) => Ys(e) ? new p1(t) : new d1(t, {
  allowProjection: e !== pc
}), g1 = /* @__PURE__ */ zm({
  ...By,
  ...s1,
  ...Yx,
  ...o1
}, m1), ue = /* @__PURE__ */ nm(g1);
function tf(e) {
  const t = jn(() => Xt(e)), { isStatic: n } = me(Nn);
  if (n) {
    const [, r] = ve(e);
    mt(() => t.on("change", r), []);
  }
  return t;
}
function nf(e, t) {
  const n = tf(t()), r = () => n.set(t());
  return r(), Zr(() => {
    const i = () => re.preRender(r, !1, !0), s = e.map((o) => o.on("change", i));
    return () => {
      s.forEach((o) => o()), at(r);
    };
  }), n;
}
function yl(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function xl(e, t = {}) {
  const { isStatic: n } = me(Nn), r = He(null), i = tf(xe(e) ? yl(e.get()) : e), s = He(i.get()), o = He(() => {
  }), a = () => {
    const c = r.current;
    c && c.time === 0 && c.sample(ye.delta), u(), r.current = fy({
      keyframes: [i.get(), s.current],
      velocity: i.getVelocity(),
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...t,
      onUpdate: o.current
    });
  }, u = () => {
    r.current && r.current.stop();
  };
  return js(() => i.attach((c, l) => n ? l(c) : (s.current = c, o.current = l, re.update(a), i.get()), u), [JSON.stringify(t)]), Zr(() => {
    if (xe(e))
      return e.on("change", (c) => i.set(yl(c)));
  }, [i]), i;
}
const y1 = (e) => e && typeof e == "object" && e.mix, x1 = (e) => y1(e) ? e.mix : void 0;
function v1(...e) {
  const t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], s = e[2 + n], o = e[3 + n], a = Lh(i, s, {
    mixer: x1(s[0]),
    ...o
  });
  return t ? a(r) : a;
}
function b1(e) {
  kn.current = [], e();
  const t = nf(kn.current, e);
  return kn.current = void 0, t;
}
function vl(e, t, n, r) {
  if (typeof e == "function")
    return b1(e);
  const i = typeof t == "function" ? t : v1(t, n, r);
  return Array.isArray(e) ? bl(e, i) : bl([e], ([s]) => i(s));
}
function bl(e, t) {
  const n = jn(() => []);
  return nf(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++)
      n[i] = e[i].get();
    return t(n);
  });
}
const uC = ({ char: e, title: t, subtitle: n, mouseX: r, mouseY: i, index: s, zIndex: o, t: a }) => {
  const u = de(), c = s % 2 === 0 ? 0.02 : 0.05, l = vl(r, (d) => d * c), p = vl(i, (d) => d * c), f = xl(l, { stiffness: 150, damping: 15 }), h = xl(p, { stiffness: 150, damping: 15 });
  return /* @__PURE__ */ x.jsxs(
    ue.div,
    {
      style: {
        zIndex: o,
        // Applied dynamic z-index
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        x: f,
        y: h
      },
      "data-testid": "animated-hero-character",
      initial: "idle",
      whileHover: "hover",
      children: [
        /* @__PURE__ */ x.jsx(
          L,
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
                delay: s * 0.2
              },
              opacity: {
                duration: 3,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: s * 0.2
              },
              default: { duration: 0.2 }
              // snappy hover
            },
            variants: {
              idle: { scale: 1, opacity: 1 },
              hover: { scale: 1.05, opacity: 0.9 }
            },
            sx: {
              ...u.typography.h1,
              fontSize: { xs: "4rem", sm: "6rem", md: "10rem" },
              // Responsive font size
              margin: 0,
              color: u.palette.text.primary,
              textShadow: u.palette.mode === "dark" ? "0px 0px 30px rgba(255,255,255,0.2)" : "none"
            },
            children: e
          }
        ),
        /* @__PURE__ */ x.jsx(
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
            children: t && /* @__PURE__ */ x.jsx(L, { sx: {
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: u.palette.text.secondary,
              textTransform: "uppercase",
              whiteSpace: "nowrap"
            }, children: a(t) })
          }
        ),
        /* @__PURE__ */ x.jsx(
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
            children: n && /* @__PURE__ */ x.jsx(L, { sx: {
              fontSize: "1.5rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: u.palette.primary.main,
              textTransform: "uppercase",
              whiteSpace: "nowrap"
            }, children: a(n) })
          }
        )
      ]
    }
  );
};
const S1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rf = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
var w1 = {
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
const k1 = Fs(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: o,
    ...a
  }, u) => Fr(
    "svg",
    {
      ref: u,
      ...w1,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: rf("lucide", i),
      ...a
    },
    [
      ...o.map(([c, l]) => Fr(c, l)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const nn = (e, t) => {
  const n = Fs(
    ({ className: r, ...i }, s) => Fr(k1, {
      ref: s,
      iconNode: t,
      className: rf(`lucide-${S1(e)}`, r),
      ...i
    })
  );
  return n.displayName = `${e}`, n;
};
const C1 = nn("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const E1 = nn("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
const vo = nn("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
const _1 = nn("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
const P1 = nn("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
const T1 = nn("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]), cC = ({
  title: e,
  category: t,
  duration: n,
  coverUrl: r,
  audioUrl: i,
  isPlaying: s,
  onTogglePlay: o
}) => {
  const a = de(), u = He(null);
  return mt(() => {
    u.current && (s ? u.current.play() : u.current.pause());
  }, [s]), mt(() => {
    u.current && (u.current.pause(), u.current.load());
  }, [i]), /* @__PURE__ */ x.jsxs(
    L,
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
        bgcolor: a.palette.mode === "dark" ? "rgba(10, 10, 20, 0.95)" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderTop: `1px solid ${a.palette.divider}`,
        p: O.md,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: a.shadows[4]
      },
      children: [
        /* @__PURE__ */ x.jsx("audio", { ref: u, src: i }),
        /* @__PURE__ */ x.jsxs(
          L,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 4,
              maxWidth: "1200px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ x.jsxs(
                L,
                {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minWidth: "200px"
                  },
                  children: [
                    /* @__PURE__ */ x.jsx(
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
                    /* @__PURE__ */ x.jsxs(L, { children: [
                      /* @__PURE__ */ x.jsx(
                        F,
                        {
                          variant: "subtitle1",
                          sx: {
                            color: a.palette.text.primary,
                            fontWeight: 600,
                            lineHeight: 1.2
                          },
                          children: e
                        }
                      ),
                      /* @__PURE__ */ x.jsxs(
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
              /* @__PURE__ */ x.jsxs(
                L,
                {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    flex: 1,
                    justifyItems: "center",
                    justifyContent: "center"
                  },
                  children: [
                    /* @__PURE__ */ x.jsx(dt, { size: "small", sx: { color: a.palette.text.secondary }, children: /* @__PURE__ */ x.jsx(_1, { size: 20 }) }),
                    /* @__PURE__ */ x.jsx(
                      dt,
                      {
                        onClick: o,
                        sx: {
                          bgcolor: a.palette.primary.main,
                          color: a.palette.primary.contrastText,
                          "&:hover": { bgcolor: a.palette.primary.light },
                          width: 48,
                          height: 48
                        },
                        children: s ? /* @__PURE__ */ x.jsx(E1, { size: 24, fill: "currentColor" }) : /* @__PURE__ */ x.jsx(vo, { size: 24, fill: "currentColor" })
                      }
                    ),
                    /* @__PURE__ */ x.jsx(dt, { size: "small", sx: { color: a.palette.text.secondary }, children: /* @__PURE__ */ x.jsx(P1, { size: 20 }) })
                  ]
                }
              ),
              /* @__PURE__ */ x.jsxs(
                L,
                {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minWidth: "150px"
                  },
                  children: [
                    /* @__PURE__ */ x.jsx(T1, { size: 20, color: a.palette.text.secondary }),
                    /* @__PURE__ */ x.jsx(
                      Vd,
                      {
                        size: "small",
                        defaultValue: 70,
                        sx: { color: "rgba(255,255,255,0.3)", width: 100 }
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
}, A1 = mc(({
  label: e,
  description: t,
  selected: n = !1,
  onChangeLabel: r,
  onChangeDescription: i,
  children: s
}) => {
  const o = de();
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    s,
    /* @__PURE__ */ x.jsxs(
      L,
      {
        sx: {
          width: "100%",
          height: "100%",
          backgroundColor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
          border: n ? `2px dashed ${o.palette.text.secondary}` : `1px dashed ${o.palette.divider}`,
          borderRadius: 2,
          padding: 2,
          position: "relative"
        },
        children: [
          /* @__PURE__ */ x.jsx(
            L,
            {
              sx: {
                position: "absolute",
                top: -30,
                left: 0,
                padding: "4px 12px",
                borderRadius: 4,
                backgroundColor: o.palette.mode === "dark" ? o.palette.grey[800] : o.palette.grey[200],
                border: `1px solid ${o.palette.divider}`
              },
              children: /* @__PURE__ */ x.jsx(
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
          /* @__PURE__ */ x.jsx(L, { sx: { mt: 4, height: "calc(100% - 32px)", overflow: "hidden" }, children: /* @__PURE__ */ x.jsx(
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
A1.displayName = "CanvasGroup";
function hC(e) {
  const t = [], n = String(e || "");
  let r = n.indexOf(","), i = 0, s = !1;
  for (; !s; ) {
    r === -1 && (r = n.length, s = !0);
    const o = n.slice(i, r).trim();
    (o || !s) && t.push(o), i = r + 1, r = n.indexOf(",", i);
  }
  return t;
}
function R1(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const L1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, I1 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, O1 = {};
function Sl(e, t) {
  return (O1.jsx ? I1 : L1).test(e);
}
const M1 = /[ \t\n\f\r]/g;
function D1(e) {
  return typeof e == "object" ? e.type === "text" ? wl(e.value) : !1 : wl(e);
}
function wl(e) {
  return e.replace(M1, "") === "";
}
class Un {
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
Un.prototype.normal = {};
Un.prototype.property = {};
Un.prototype.space = void 0;
function sf(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new Un(n, r, t);
}
function bs(e) {
  return e.toLowerCase();
}
class Ie {
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
Ie.prototype.attribute = "";
Ie.prototype.booleanish = !1;
Ie.prototype.boolean = !1;
Ie.prototype.commaOrSpaceSeparated = !1;
Ie.prototype.commaSeparated = !1;
Ie.prototype.defined = !1;
Ie.prototype.mustUseProperty = !1;
Ie.prototype.number = !1;
Ie.prototype.overloadedBoolean = !1;
Ie.prototype.property = "";
Ie.prototype.spaceSeparated = !1;
Ie.prototype.space = void 0;
let j1 = 0;
const J = It(), pe = It(), Ss = It(), z = It(), ie = It(), qt = It(), je = It();
function It() {
  return 2 ** ++j1;
}
const ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: J,
  booleanish: pe,
  commaOrSpaceSeparated: je,
  commaSeparated: qt,
  number: z,
  overloadedBoolean: Ss,
  spaceSeparated: ie
}, Symbol.toStringTag, { value: "Module" })), Ti = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(ws)
);
class bo extends Ie {
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
    let s = -1;
    if (super(t, n), kl(this, "space", i), typeof r == "number")
      for (; ++s < Ti.length; ) {
        const o = Ti[s];
        kl(this, Ti[s], (r & ws[o]) === ws[o]);
      }
  }
}
bo.prototype.defined = !0;
function kl(e, t, n) {
  n && (e[t] = n);
}
function rn(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const s = new bo(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (s.mustUseProperty = !0), t[r] = s, n[bs(r)] = r, n[bs(s.attribute)] = r;
  }
  return new Un(t, n, e.space);
}
const of = rn({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: pe,
    ariaAutoComplete: null,
    ariaBusy: pe,
    ariaChecked: pe,
    ariaColCount: z,
    ariaColIndex: z,
    ariaColSpan: z,
    ariaControls: ie,
    ariaCurrent: null,
    ariaDescribedBy: ie,
    ariaDetails: null,
    ariaDisabled: pe,
    ariaDropEffect: ie,
    ariaErrorMessage: null,
    ariaExpanded: pe,
    ariaFlowTo: ie,
    ariaGrabbed: pe,
    ariaHasPopup: null,
    ariaHidden: pe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ie,
    ariaLevel: z,
    ariaLive: null,
    ariaModal: pe,
    ariaMultiLine: pe,
    ariaMultiSelectable: pe,
    ariaOrientation: null,
    ariaOwns: ie,
    ariaPlaceholder: null,
    ariaPosInSet: z,
    ariaPressed: pe,
    ariaReadOnly: pe,
    ariaRelevant: null,
    ariaRequired: pe,
    ariaRoleDescription: ie,
    ariaRowCount: z,
    ariaRowIndex: z,
    ariaRowSpan: z,
    ariaSelected: pe,
    ariaSetSize: z,
    ariaSort: null,
    ariaValueMax: z,
    ariaValueMin: z,
    ariaValueNow: z,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function af(e, t) {
  return t in e ? e[t] : t;
}
function lf(e, t) {
  return af(e, t.toLowerCase());
}
const N1 = rn({
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
    accept: qt,
    acceptCharset: ie,
    accessKey: ie,
    action: null,
    allow: null,
    allowFullScreen: J,
    allowPaymentRequest: J,
    allowUserMedia: J,
    alt: null,
    as: null,
    async: J,
    autoCapitalize: null,
    autoComplete: ie,
    autoFocus: J,
    autoPlay: J,
    blocking: ie,
    capture: null,
    charSet: null,
    checked: J,
    cite: null,
    className: ie,
    cols: z,
    colSpan: null,
    content: null,
    contentEditable: pe,
    controls: J,
    controlsList: ie,
    coords: z | qt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: J,
    defer: J,
    dir: null,
    dirName: null,
    disabled: J,
    download: Ss,
    draggable: pe,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: J,
    formTarget: null,
    headers: ie,
    height: z,
    hidden: Ss,
    high: z,
    href: null,
    hrefLang: null,
    htmlFor: ie,
    httpEquiv: ie,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: J,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: J,
    itemId: null,
    itemProp: ie,
    itemRef: ie,
    itemScope: J,
    itemType: ie,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: J,
    low: z,
    manifest: null,
    max: null,
    maxLength: z,
    media: null,
    method: null,
    min: null,
    minLength: z,
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
    optimum: z,
    pattern: null,
    ping: ie,
    placeholder: null,
    playsInline: J,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: J,
    referrerPolicy: null,
    rel: ie,
    required: J,
    reversed: J,
    rows: z,
    rowSpan: z,
    sandbox: ie,
    scope: null,
    scoped: J,
    seamless: J,
    selected: J,
    shadowRootClonable: J,
    shadowRootDelegatesFocus: J,
    shadowRootMode: null,
    shape: null,
    size: z,
    sizes: null,
    slot: null,
    span: z,
    spellCheck: pe,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: z,
    step: null,
    style: null,
    tabIndex: z,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: J,
    useMap: null,
    value: pe,
    width: z,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ie,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: z,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: z,
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
    hSpace: z,
    // `<img>` and `<object>`
    leftMargin: z,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: z,
    // `<body>`
    marginWidth: z,
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
    rightMargin: z,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: pe,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: z,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: z,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: J,
    disableRemotePlayback: J,
    prefix: null,
    property: null,
    results: z,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: lf
}), F1 = rn({
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
    about: je,
    accentHeight: z,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: z,
    amplitude: z,
    arabicForm: null,
    ascent: z,
    attributeName: null,
    attributeType: null,
    azimuth: z,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: z,
    by: null,
    calcMode: null,
    capHeight: z,
    className: ie,
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
    descent: z,
    diffuseConstant: z,
    direction: null,
    display: null,
    dur: null,
    divisor: z,
    dominantBaseline: null,
    download: J,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: z,
    enableBackground: null,
    end: null,
    event: null,
    exponent: z,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: z,
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
    g1: qt,
    g2: qt,
    glyphName: qt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: z,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: z,
    horizOriginX: z,
    horizOriginY: z,
    id: null,
    ideographic: z,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: z,
    k: z,
    k1: z,
    k2: z,
    k3: z,
    k4: z,
    kernelMatrix: je,
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
    limitingConeAngle: z,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: z,
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
    overlinePosition: z,
    overlineThickness: z,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: z,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ie,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: z,
    pointsAtY: z,
    pointsAtZ: z,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: je,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: je,
    rev: je,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: je,
    requiredFeatures: je,
    requiredFonts: je,
    requiredFormats: je,
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
    specularConstant: z,
    specularExponent: z,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: z,
    strikethroughThickness: z,
    string: null,
    stroke: null,
    strokeDashArray: je,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: z,
    strokeOpacity: z,
    strokeWidth: null,
    style: null,
    surfaceScale: z,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: je,
    tabIndex: z,
    tableValues: null,
    target: null,
    targetX: z,
    targetY: z,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: je,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: z,
    underlineThickness: z,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: z,
    values: null,
    vAlphabetic: z,
    vMathematical: z,
    vectorEffect: null,
    vHanging: z,
    vIdeographic: z,
    version: null,
    vertAdvY: z,
    vertOriginX: z,
    vertOriginY: z,
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
    xHeight: z,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: af
}), uf = rn({
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
}), cf = rn({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: lf
}), hf = rn({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), B1 = {
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
}, V1 = /[A-Z]/g, Cl = /-[a-z]/g, z1 = /^data[-\w.:]+$/i;
function U1(e, t) {
  const n = bs(t);
  let r = t, i = Ie;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && z1.test(t)) {
    if (t.charAt(4) === "-") {
      const s = t.slice(5).replace(Cl, q1);
      r = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = t.slice(4);
      if (!Cl.test(s)) {
        let o = s.replace(V1, H1);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = bo;
  }
  return new i(r, t);
}
function H1(e) {
  return "-" + e.toLowerCase();
}
function q1(e) {
  return e.charAt(1).toUpperCase();
}
const W1 = sf([of, N1, uf, cf, hf], "html"), So = sf([of, F1, uf, cf, hf], "svg");
function fC(e) {
  const t = String(e || "").trim();
  return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function G1(e) {
  return e.join(" ").trim();
}
var Mt = {}, Ai, El;
function K1() {
  if (El) return Ai;
  El = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, c = "/", l = "*", p = "", f = "comment", h = "declaration";
  function d(g, y) {
    if (typeof g != "string")
      throw new TypeError("First argument must be a string");
    if (!g) return [];
    y = y || {};
    var v = 1, w = 1;
    function S(B) {
      var N = B.match(t);
      N && (v += N.length);
      var H = B.lastIndexOf(u);
      w = ~H ? B.length - H : w + B.length;
    }
    function b() {
      var B = { line: v, column: w };
      return function(N) {
        return N.position = new k(B), D(), N;
      };
    }
    function k(B) {
      this.start = B, this.end = { line: v, column: w }, this.source = y.source;
    }
    k.prototype.content = g;
    function E(B) {
      var N = new Error(
        y.source + ":" + v + ":" + w + ": " + B
      );
      if (N.reason = B, N.filename = y.source, N.line = v, N.column = w, N.source = g, !y.silent) throw N;
    }
    function T(B) {
      var N = B.exec(g);
      if (N) {
        var H = N[0];
        return S(H), g = g.slice(H.length), N;
      }
    }
    function D() {
      T(n);
    }
    function V(B) {
      var N;
      for (B = B || []; N = R(); )
        N !== !1 && B.push(N);
      return B;
    }
    function R() {
      var B = b();
      if (!(c != g.charAt(0) || l != g.charAt(1))) {
        for (var N = 2; p != g.charAt(N) && (l != g.charAt(N) || c != g.charAt(N + 1)); )
          ++N;
        if (N += 2, p === g.charAt(N - 1))
          return E("End of comment missing");
        var H = g.slice(2, N - 2);
        return w += 2, S(H), g = g.slice(N), w += 2, B({
          type: f,
          comment: H
        });
      }
    }
    function A() {
      var B = b(), N = T(r);
      if (N) {
        if (R(), !T(i)) return E("property missing ':'");
        var H = T(s), W = B({
          type: h,
          property: m(N[0].replace(e, p)),
          value: H ? m(H[0].replace(e, p)) : p
        });
        return T(o), W;
      }
    }
    function j() {
      var B = [];
      V(B);
      for (var N; N = A(); )
        N !== !1 && (B.push(N), V(B));
      return B;
    }
    return D(), j();
  }
  function m(g) {
    return g ? g.replace(a, p) : p;
  }
  return Ai = d, Ai;
}
var _l;
function Y1() {
  if (_l) return Mt;
  _l = 1;
  var e = Mt && Mt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.default = n;
  const t = e(K1());
  function n(r, i) {
    let s = null;
    if (!r || typeof r != "string")
      return s;
    const o = (0, t.default)(r), a = typeof i == "function";
    return o.forEach((u) => {
      if (u.type !== "declaration")
        return;
      const { property: c, value: l } = u;
      a ? i(c, l, u) : l && (s = s || {}, s[c] = l);
    }), s;
  }
  return Mt;
}
var fn = {}, Pl;
function X1() {
  if (Pl) return fn;
  Pl = 1, Object.defineProperty(fn, "__esModule", { value: !0 }), fn.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, s = function(c) {
    return !c || n.test(c) || e.test(c);
  }, o = function(c, l) {
    return l.toUpperCase();
  }, a = function(c, l) {
    return "".concat(l, "-");
  }, u = function(c, l) {
    return l === void 0 && (l = {}), s(c) ? c : (c = c.toLowerCase(), l.reactCompat ? c = c.replace(i, a) : c = c.replace(r, a), c.replace(t, o));
  };
  return fn.camelCase = u, fn;
}
var dn, Tl;
function J1() {
  if (Tl) return dn;
  Tl = 1;
  var e = dn && dn.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Y1()), n = X1();
  function r(i, s) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (o[(0, n.camelCase)(a, s)] = u);
    }), o;
  }
  return r.default = r, dn = r, dn;
}
var Q1 = J1();
const $1 = /* @__PURE__ */ Bs(Q1), ff = df("end"), wo = df("start");
function df(e) {
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
function Z1(e) {
  const t = wo(e), n = ff(e);
  if (t && n)
    return { start: t, end: n };
}
function Tn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Al(e.position) : "start" in e || "end" in e ? Al(e) : "line" in e || "column" in e ? ks(e) : "";
}
function ks(e) {
  return Rl(e && e.line) + ":" + Rl(e && e.column);
}
function Al(e) {
  return ks(e && e.start) + "-" + ks(e && e.end);
}
function Rl(e) {
  return e && typeof e == "number" ? e : 1;
}
class we extends Error {
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
    let i = "", s = {}, o = !1;
    if (n && ("line" in n && "column" in n ? s = { place: n } : "start" in n && "end" in n ? s = { place: n } : "type" in n ? s = {
      ancestors: [n],
      place: n.position
    } : s = { ...n }), typeof t == "string" ? i = t : !s.cause && t && (o = !0, i = t.message, s.cause = t), !s.ruleId && !s.source && typeof r == "string") {
      const u = r.indexOf(":");
      u === -1 ? s.ruleId = r : (s.source = r.slice(0, u), s.ruleId = r.slice(u + 1));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const u = s.ancestors[s.ancestors.length - 1];
      u && (s.place = u.position);
    }
    const a = s.place && "start" in s.place ? s.place.start : s.place;
    this.ancestors = s.ancestors || void 0, this.cause = s.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = Tn(s.place) || "1:1", this.place = s.place || void 0, this.reason = this.message, this.ruleId = s.ruleId || void 0, this.source = s.source || void 0, this.stack = o && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
we.prototype.file = "";
we.prototype.name = "";
we.prototype.reason = "";
we.prototype.message = "";
we.prototype.stack = "";
we.prototype.column = void 0;
we.prototype.line = void 0;
we.prototype.ancestors = void 0;
we.prototype.cause = void 0;
we.prototype.fatal = void 0;
we.prototype.place = void 0;
we.prototype.ruleId = void 0;
we.prototype.source = void 0;
const ko = {}.hasOwnProperty, e0 = /* @__PURE__ */ new Map(), t0 = /[A-Z]/g, n0 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), r0 = /* @__PURE__ */ new Set(["td", "th"]), pf = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function i0(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = f0(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = h0(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? So : W1,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, s = mf(i, e, void 0);
  return s && typeof s != "string" ? s : i.create(
    e,
    i.Fragment,
    { children: s || void 0 },
    void 0
  );
}
function mf(e, t, n) {
  if (t.type === "element")
    return s0(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return o0(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return l0(e, t, n);
  if (t.type === "mdxjsEsm")
    return a0(e, t);
  if (t.type === "root")
    return u0(e, t, n);
  if (t.type === "text")
    return c0(e, t);
}
function s0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = So, e.schema = i), e.ancestors.push(t);
  const s = yf(e, t.tagName, !1), o = d0(e, t);
  let a = Eo(e, t);
  return n0.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !D1(u) : !0;
  })), gf(e, o, s, t), Co(o, a), e.ancestors.pop(), e.schema = r, e.create(t, s, o, n);
}
function o0(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  Dn(e, t.position);
}
function a0(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Dn(e, t.position);
}
function l0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = So, e.schema = i), e.ancestors.push(t);
  const s = t.name === null ? e.Fragment : yf(e, t.name, !0), o = p0(e, t), a = Eo(e, t);
  return gf(e, o, s, t), Co(o, a), e.ancestors.pop(), e.schema = r, e.create(t, s, o, n);
}
function u0(e, t, n) {
  const r = {};
  return Co(r, Eo(e, t)), e.create(t, e.Fragment, r, n);
}
function c0(e, t) {
  return t.value;
}
function gf(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Co(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function h0(e, t, n) {
  return r;
  function r(i, s, o, a) {
    const c = Array.isArray(o.children) ? n : t;
    return a ? c(s, o, a) : c(s, o);
  }
}
function f0(e, t) {
  return n;
  function n(r, i, s, o) {
    const a = Array.isArray(s.children), u = wo(r);
    return t(
      i,
      s,
      o,
      a,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function d0(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ko.call(t.properties, i)) {
      const s = m0(e, i, t.properties[i]);
      if (s) {
        const [o, a] = s;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && r0.has(t.tagName) ? r = a : n[o] = a;
      }
    }
  if (r) {
    const s = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    s[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function p0(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const s = r.data.estree.body[0];
        s.type;
        const o = s.expression;
        o.type;
        const a = o.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        Dn(e, t.position);
    else {
      const i = r.name;
      let s;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, s = e.evaluater.evaluateExpression(a.expression);
        } else
          Dn(e, t.position);
      else
        s = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      s;
    }
  return n;
}
function Eo(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : e0;
  for (; ++r < t.children.length; ) {
    const s = t.children[r];
    let o;
    if (e.passKeys) {
      const u = s.type === "element" ? s.tagName : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement" ? s.name : void 0;
      if (u) {
        const c = i.get(u) || 0;
        o = u + "-" + c, i.set(u, c + 1);
      }
    }
    const a = mf(e, s, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function m0(e, t, n) {
  const r = U1(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? R1(n) : G1(n)), r.property === "style") {
      let i = typeof n == "object" ? n : g0(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = y0(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? B1[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function g0(e, t) {
  try {
    return $1(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new we("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = pf + "#cannot-parse-style-attribute", i;
  }
}
function yf(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let s = -1, o;
    for (; ++s < i.length; ) {
      const a = Sl(i[s]) ? { type: "Identifier", name: i[s] } : { type: "Literal", value: i[s] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: a,
        computed: !!(s && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = o;
  } else
    r = Sl(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return ko.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Dn(e);
}
function Dn(e, t) {
  const n = new we(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = pf + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function y0(e) {
  const t = {};
  let n;
  for (n in e)
    ko.call(e, n) && (t[x0(n)] = e[n]);
  return t;
}
function x0(e) {
  let t = e.replace(t0, v0);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function v0(e) {
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
}, b0 = {};
function S0(e, t) {
  const n = b0, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return xf(e, r, i);
}
function xf(e, t, n) {
  if (w0(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Ll(e.children, t, n);
  }
  return Array.isArray(e) ? Ll(e, t, n) : "";
}
function Ll(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = xf(e[i], t, n);
  return r.join("");
}
function w0(e) {
  return !!(e && typeof e == "object");
}
const Il = document.createElement("i");
function _o(e) {
  const t = "&" + e + ";";
  Il.innerHTML = t;
  const n = Il.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function nt(e, t, n, r) {
  const i = e.length;
  let s = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); s < r.length; )
      o = r.slice(s, s + 1e4), o.unshift(t, 0), e.splice(...o), s += 1e4, t += 1e4;
}
function Ue(e, t) {
  return e.length > 0 ? (nt(e, e.length, 0, t), e) : t;
}
const Ol = {}.hasOwnProperty;
function k0(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    C0(t, e[n]);
  return t;
}
function C0(e, t) {
  let n;
  for (n in t) {
    const i = (Ol.call(e, n) ? e[n] : void 0) || (e[n] = {}), s = t[n];
    let o;
    if (s)
      for (o in s) {
        Ol.call(i, o) || (i[o] = []);
        const a = s[o];
        E0(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function E0(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  nt(e, 0, 0, r);
}
function vf(e, t) {
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
function Wt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const $e = bt(/[A-Za-z]/), Ne = bt(/[\dA-Za-z]/), _0 = bt(/[#-'*+\--9=?A-Z^-~]/);
function Cs(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Es = bt(/\d/), P0 = bt(/[\dA-Fa-f]/), T0 = bt(/[!-/:-@[-`{-~]/);
function Y(e) {
  return e !== null && e < -2;
}
function Ae(e) {
  return e !== null && (e < 0 || e === 32);
}
function ee(e) {
  return e === -2 || e === -1 || e === 32;
}
const A0 = bt(new RegExp("\\p{P}|\\p{S}", "u")), R0 = bt(/\s/);
function bt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function sn(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const s = e.charCodeAt(n);
    let o = "";
    if (s === 37 && Ne(e.charCodeAt(n + 1)) && Ne(e.charCodeAt(n + 2)))
      i = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (o = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const a = e.charCodeAt(n + 1);
      s < 56320 && a > 56319 && a < 57344 ? (o = String.fromCharCode(s, a), i = 1) : o = "�";
    } else
      o = String.fromCharCode(s);
    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function se(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return o;
  function o(u) {
    return ee(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return ee(u) && s++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const L0 = {
  tokenize: I0
};
function I0(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), se(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), s(a);
  }
  function s(a) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return Y(a) ? (e.consume(a), e.exit("chunkText"), s) : (e.consume(a), o);
  }
}
const O0 = {
  tokenize: M0
}, Ml = {
  tokenize: D0
};
function M0(e) {
  const t = this, n = [];
  let r = 0, i, s, o;
  return a;
  function a(w) {
    if (r < n.length) {
      const S = n[r];
      return t.containerState = S[1], e.attempt(S[0].continuation, u, c)(w);
    }
    return c(w);
  }
  function u(w) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && v();
      const S = t.events.length;
      let b = S, k;
      for (; b--; )
        if (t.events[b][0] === "exit" && t.events[b][1].type === "chunkFlow") {
          k = t.events[b][1].end;
          break;
        }
      y(r);
      let E = S;
      for (; E < t.events.length; )
        t.events[E][1].end = {
          ...k
        }, E++;
      return nt(t.events, b + 1, 0, t.events.slice(S)), t.events.length = E, c(w);
    }
    return a(w);
  }
  function c(w) {
    if (r === n.length) {
      if (!i)
        return f(w);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return d(w);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Ml, l, p)(w);
  }
  function l(w) {
    return i && v(), y(r), f(w);
  }
  function p(w) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, d(w);
  }
  function f(w) {
    return t.containerState = {}, e.attempt(Ml, h, d)(w);
  }
  function h(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), f(w);
  }
  function d(w) {
    if (w === null) {
      i && v(), y(0), e.consume(w);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: s
    }), m(w);
  }
  function m(w) {
    if (w === null) {
      g(e.exit("chunkFlow"), !0), y(0), e.consume(w);
      return;
    }
    return Y(w) ? (e.consume(w), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(w), m);
  }
  function g(w, S) {
    const b = t.sliceStream(w);
    if (S && b.push(null), w.previous = s, s && (s.next = w), s = w, i.defineSkip(w.start), i.write(b), t.parser.lazy[w.start.line]) {
      let k = i.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          i.events[k][1].start.offset < o && // …and either is not ended yet…
          (!i.events[k][1].end || // …or ends after it.
          i.events[k][1].end.offset > o)
        )
          return;
      const E = t.events.length;
      let T = E, D, V;
      for (; T--; )
        if (t.events[T][0] === "exit" && t.events[T][1].type === "chunkFlow") {
          if (D) {
            V = t.events[T][1].end;
            break;
          }
          D = !0;
        }
      for (y(r), k = E; k < t.events.length; )
        t.events[k][1].end = {
          ...V
        }, k++;
      nt(t.events, T + 1, 0, t.events.slice(E)), t.events.length = k;
    }
  }
  function y(w) {
    let S = n.length;
    for (; S-- > w; ) {
      const b = n[S];
      t.containerState = b[1], b[0].exit.call(t, e);
    }
    n.length = w;
  }
  function v() {
    i.write([null]), s = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function D0(e, t, n) {
  return se(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Dl(e) {
  if (e === null || Ae(e) || R0(e))
    return 1;
  if (A0(e))
    return 2;
}
function Po(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const s = e[i].resolveAll;
    s && !r.includes(s) && (t = s(t, n), r.push(s));
  }
  return t;
}
const _s = {
  name: "attention",
  resolveAll: j0,
  tokenize: N0
};
function j0(e, t) {
  let n = -1, r, i, s, o, a, u, c, l;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const p = {
            ...e[r][1].end
          }, f = {
            ...e[n][1].start
          };
          jl(p, -u), jl(f, u), o = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: p,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: f
          }, s = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[n][1].start = {
            ...a.end
          }, c = [], e[r][1].end.offset - e[r][1].start.offset && (c = Ue(c, [["enter", e[r][1], t], ["exit", e[r][1], t]])), c = Ue(c, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", s, t]]), c = Ue(c, Po(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), c = Ue(c, [["exit", s, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (l = 2, c = Ue(c, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : l = 0, nt(e, r - 1, n - r + 3, c), n = r + c.length - l - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function N0(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Dl(r);
  let s;
  return o;
  function o(u) {
    return s = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === s)
      return e.consume(u), a;
    const c = e.exit("attentionSequence"), l = Dl(u), p = !l || l === 2 && i || n.includes(u), f = !i || i === 2 && l || n.includes(r);
    return c._open = !!(s === 42 ? p : p && (i || !f)), c._close = !!(s === 42 ? f : f && (l || !p)), t(u);
  }
}
function jl(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const F0 = {
  name: "autolink",
  tokenize: B0
};
function B0(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), s;
  }
  function s(h) {
    return $e(h) ? (e.consume(h), o) : h === 64 ? n(h) : c(h);
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || Ne(h) ? (r = 1, a(h)) : c(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), r = 0, u) : (h === 43 || h === 45 || h === 46 || Ne(h)) && r++ < 32 ? (e.consume(h), a) : (r = 0, c(h));
  }
  function u(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || Cs(h) ? n(h) : (e.consume(h), u);
  }
  function c(h) {
    return h === 64 ? (e.consume(h), l) : _0(h) ? (e.consume(h), c) : n(h);
  }
  function l(h) {
    return Ne(h) ? p(h) : n(h);
  }
  function p(h) {
    return h === 46 ? (e.consume(h), r = 0, l) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(h);
  }
  function f(h) {
    if ((h === 45 || Ne(h)) && r++ < 63) {
      const d = h === 45 ? f : p;
      return e.consume(h), d;
    }
    return n(h);
  }
}
const ai = {
  partial: !0,
  tokenize: V0
};
function V0(e, t, n) {
  return r;
  function r(s) {
    return ee(s) ? se(e, i, "linePrefix")(s) : i(s);
  }
  function i(s) {
    return s === null || Y(s) ? t(s) : n(s);
  }
}
const bf = {
  continuation: {
    tokenize: U0
  },
  exit: H0,
  name: "blockQuote",
  tokenize: z0
};
function z0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), s;
    }
    return n(o);
  }
  function s(o) {
    return ee(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function U0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return ee(o) ? se(e, s, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : s(o);
  }
  function s(o) {
    return e.attempt(bf, t, n)(o);
  }
}
function H0(e) {
  e.exit("blockQuote");
}
const Sf = {
  name: "characterEscape",
  tokenize: q0
};
function q0(e, t, n) {
  return r;
  function r(s) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(s), e.exit("escapeMarker"), i;
  }
  function i(s) {
    return T0(s) ? (e.enter("characterEscapeValue"), e.consume(s), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(s);
  }
}
const wf = {
  name: "characterReference",
  tokenize: W0
};
function W0(e, t, n) {
  const r = this;
  let i = 0, s, o;
  return a;
  function a(p) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(p), e.exit("characterReferenceMarker"), u;
  }
  function u(p) {
    return p === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(p), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), s = 31, o = Ne, l(p));
  }
  function c(p) {
    return p === 88 || p === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(p), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), s = 6, o = P0, l) : (e.enter("characterReferenceValue"), s = 7, o = Es, l(p));
  }
  function l(p) {
    if (p === 59 && i) {
      const f = e.exit("characterReferenceValue");
      return o === Ne && !_o(r.sliceSerialize(f)) ? n(p) : (e.enter("characterReferenceMarker"), e.consume(p), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(p) && i++ < s ? (e.consume(p), l) : n(p);
  }
}
const Nl = {
  partial: !0,
  tokenize: K0
}, Fl = {
  concrete: !0,
  name: "codeFenced",
  tokenize: G0
};
function G0(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: b
  };
  let s = 0, o = 0, a;
  return u;
  function u(k) {
    return c(k);
  }
  function c(k) {
    const E = r.events[r.events.length - 1];
    return s = E && E[1].type === "linePrefix" ? E[2].sliceSerialize(E[1], !0).length : 0, a = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), l(k);
  }
  function l(k) {
    return k === a ? (o++, e.consume(k), l) : o < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), ee(k) ? se(e, p, "whitespace")(k) : p(k));
  }
  function p(k) {
    return k === null || Y(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(Nl, m, S)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), f(k));
  }
  function f(k) {
    return k === null || Y(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), p(k)) : ee(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), se(e, h, "whitespace")(k)) : k === 96 && k === a ? n(k) : (e.consume(k), f);
  }
  function h(k) {
    return k === null || Y(k) ? p(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), d(k));
  }
  function d(k) {
    return k === null || Y(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(k)) : k === 96 && k === a ? n(k) : (e.consume(k), d);
  }
  function m(k) {
    return e.attempt(i, S, g)(k);
  }
  function g(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), y;
  }
  function y(k) {
    return s > 0 && ee(k) ? se(e, v, "linePrefix", s + 1)(k) : v(k);
  }
  function v(k) {
    return k === null || Y(k) ? e.check(Nl, m, S)(k) : (e.enter("codeFlowValue"), w(k));
  }
  function w(k) {
    return k === null || Y(k) ? (e.exit("codeFlowValue"), v(k)) : (e.consume(k), w);
  }
  function S(k) {
    return e.exit("codeFenced"), t(k);
  }
  function b(k, E, T) {
    let D = 0;
    return V;
    function V(N) {
      return k.enter("lineEnding"), k.consume(N), k.exit("lineEnding"), R;
    }
    function R(N) {
      return k.enter("codeFencedFence"), ee(N) ? se(k, A, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(N) : A(N);
    }
    function A(N) {
      return N === a ? (k.enter("codeFencedFenceSequence"), j(N)) : T(N);
    }
    function j(N) {
      return N === a ? (D++, k.consume(N), j) : D >= o ? (k.exit("codeFencedFenceSequence"), ee(N) ? se(k, B, "whitespace")(N) : B(N)) : T(N);
    }
    function B(N) {
      return N === null || Y(N) ? (k.exit("codeFencedFence"), E(N)) : T(N);
    }
  }
}
function K0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), s);
  }
  function s(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Li = {
  name: "codeIndented",
  tokenize: X0
}, Y0 = {
  partial: !0,
  tokenize: J0
};
function X0(e, t, n) {
  const r = this;
  return i;
  function i(c) {
    return e.enter("codeIndented"), se(e, s, "linePrefix", 5)(c);
  }
  function s(c) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? o(c) : n(c);
  }
  function o(c) {
    return c === null ? u(c) : Y(c) ? e.attempt(Y0, o, u)(c) : (e.enter("codeFlowValue"), a(c));
  }
  function a(c) {
    return c === null || Y(c) ? (e.exit("codeFlowValue"), o(c)) : (e.consume(c), a);
  }
  function u(c) {
    return e.exit("codeIndented"), t(c);
  }
}
function J0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : Y(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : se(e, s, "linePrefix", 5)(o);
  }
  function s(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : Y(o) ? i(o) : n(o);
  }
}
const Q0 = {
  name: "codeText",
  previous: Z0,
  resolve: $0,
  tokenize: ev
};
function $0(e) {
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
function Z0(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ev(e, t, n) {
  let r = 0, i, s;
  return o;
  function o(p) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(p);
  }
  function a(p) {
    return p === 96 ? (e.consume(p), r++, a) : (e.exit("codeTextSequence"), u(p));
  }
  function u(p) {
    return p === null ? n(p) : p === 32 ? (e.enter("space"), e.consume(p), e.exit("space"), u) : p === 96 ? (s = e.enter("codeTextSequence"), i = 0, l(p)) : Y(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), u) : (e.enter("codeTextData"), c(p));
  }
  function c(p) {
    return p === null || p === 32 || p === 96 || Y(p) ? (e.exit("codeTextData"), u(p)) : (e.consume(p), c);
  }
  function l(p) {
    return p === 96 ? (e.consume(p), i++, l) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(p)) : (s.type = "codeTextData", c(p));
  }
}
class tv {
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
    const s = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && pn(this.left, r), s.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), pn(this.left, t);
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
    this.setCursor(0), pn(this.right, t.reverse());
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
        pn(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        pn(this.left, n.reverse());
      }
  }
}
function pn(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function kf(e) {
  const t = {};
  let n = -1, r, i, s, o, a, u, c;
  const l = new tv(e);
  for (; ++n < l.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = l.get(n), n && r[1].type === "chunkFlow" && l.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, s = 0, s < u.length && u[s][1].type === "lineEndingBlank" && (s += 2), s < u.length && u[s][1].type === "content"))
      for (; ++s < u.length && u[s][1].type !== "content"; )
        u[s][1].type === "chunkText" && (u[s][1]._isInFirstContentOfListItem = !0, s++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, nv(l, n)), n = t[n], c = !0);
    else if (r[1]._container) {
      for (s = n, i = void 0; s--; )
        if (o = l.get(s), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (l.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = s);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...l.get(i)[1].start
      }, a = l.slice(i, n), a.unshift(r), l.splice(i, n - i + 1, a));
    }
  }
  return nt(e, 0, Number.POSITIVE_INFINITY, l.slice(0)), !c;
}
function nv(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const s = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, u = [], c = {};
  let l, p, f = -1, h = n, d = 0, m = 0;
  const g = [m];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    s.push(i), h._tokenizer || (l = r.sliceStream(h), h.next || l.push(null), p && o.defineSkip(h.start), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(l), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), p = h, h = h.next;
  }
  for (h = n; ++f < a.length; )
    // Find a void token that includes a break.
    a[f][0] === "exit" && a[f - 1][0] === "enter" && a[f][1].type === a[f - 1][1].type && a[f][1].start.line !== a[f][1].end.line && (m = f + 1, g.push(m), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (o.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : g.pop(), f = g.length; f--; ) {
    const y = a.slice(g[f], g[f + 1]), v = s.pop();
    u.push([v, v + y.length - 1]), e.splice(v, 2, y);
  }
  for (u.reverse(), f = -1; ++f < u.length; )
    c[d + u[f][0]] = d + u[f][1], d += u[f][1] - u[f][0] - 1;
  return c;
}
const rv = {
  resolve: sv,
  tokenize: ov
}, iv = {
  partial: !0,
  tokenize: av
};
function sv(e) {
  return kf(e), e;
}
function ov(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? s(a) : Y(a) ? e.check(iv, o, s)(a) : (e.consume(a), i);
  }
  function s(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function o(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function av(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), se(e, s, "linePrefix");
  }
  function s(o) {
    if (o === null || Y(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function Cf(e, t, n, r, i, s, o, a, u) {
  const c = u || Number.POSITIVE_INFINITY;
  let l = 0;
  return p;
  function p(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(s), e.consume(y), e.exit(s), f) : y === null || y === 32 || y === 41 || Cs(y) ? n(y) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), m(y));
  }
  function f(y) {
    return y === 62 ? (e.enter(s), e.consume(y), e.exit(s), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(y));
  }
  function h(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), f(y)) : y === null || y === 60 || Y(y) ? n(y) : (e.consume(y), y === 92 ? d : h);
  }
  function d(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), h) : h(y);
  }
  function m(y) {
    return !l && (y === null || y === 41 || Ae(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(y)) : l < c && y === 40 ? (e.consume(y), l++, m) : y === 41 ? (e.consume(y), l--, m) : y === null || y === 32 || y === 40 || Cs(y) ? n(y) : (e.consume(y), y === 92 ? g : m);
  }
  function g(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), m) : m(y);
  }
}
function Ef(e, t, n, r, i, s) {
  const o = this;
  let a = 0, u;
  return c;
  function c(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(s), l;
  }
  function l(h) {
    return a > 999 || h === null || h === 91 || h === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(h) : h === 93 ? (e.exit(s), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : Y(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), l) : (e.enter("chunkString", {
      contentType: "string"
    }), p(h));
  }
  function p(h) {
    return h === null || h === 91 || h === 93 || Y(h) || a++ > 999 ? (e.exit("chunkString"), l(h)) : (e.consume(h), u || (u = !ee(h)), h === 92 ? f : p);
  }
  function f(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, p) : p(h);
  }
}
function _f(e, t, n, r, i, s) {
  let o;
  return a;
  function a(f) {
    return f === 34 || f === 39 || f === 40 ? (e.enter(r), e.enter(i), e.consume(f), e.exit(i), o = f === 40 ? 41 : f, u) : n(f);
  }
  function u(f) {
    return f === o ? (e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : (e.enter(s), c(f));
  }
  function c(f) {
    return f === o ? (e.exit(s), u(o)) : f === null ? n(f) : Y(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), se(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), l(f));
  }
  function l(f) {
    return f === o || f === null || Y(f) ? (e.exit("chunkString"), c(f)) : (e.consume(f), f === 92 ? p : l);
  }
  function p(f) {
    return f === o || f === 92 ? (e.consume(f), l) : l(f);
  }
}
function An(e, t) {
  let n;
  return r;
  function r(i) {
    return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ee(i) ? se(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const lv = {
  name: "definition",
  tokenize: cv
}, uv = {
  partial: !0,
  tokenize: hv
};
function cv(e, t, n) {
  const r = this;
  let i;
  return s;
  function s(h) {
    return e.enter("definition"), o(h);
  }
  function o(h) {
    return Ef.call(
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
    return i = Wt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), u) : n(h);
  }
  function u(h) {
    return Ae(h) ? An(e, c)(h) : c(h);
  }
  function c(h) {
    return Cf(
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function l(h) {
    return e.attempt(uv, p, p)(h);
  }
  function p(h) {
    return ee(h) ? se(e, f, "whitespace")(h) : f(h);
  }
  function f(h) {
    return h === null || Y(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function hv(e, t, n) {
  return r;
  function r(a) {
    return Ae(a) ? An(e, i)(a) : n(a);
  }
  function i(a) {
    return _f(e, s, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function s(a) {
    return ee(a) ? se(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || Y(a) ? t(a) : n(a);
  }
}
const fv = {
  name: "hardBreakEscape",
  tokenize: dv
};
function dv(e, t, n) {
  return r;
  function r(s) {
    return e.enter("hardBreakEscape"), e.consume(s), i;
  }
  function i(s) {
    return Y(s) ? (e.exit("hardBreakEscape"), t(s)) : n(s);
  }
}
const pv = {
  name: "headingAtx",
  resolve: mv,
  tokenize: gv
};
function mv(e, t) {
  let n = e.length - 2, r = 3, i, s;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, s = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, nt(e, r, n - r + 1, [["enter", i, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]])), e;
}
function gv(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return e.enter("atxHeading"), s(l);
  }
  function s(l) {
    return e.enter("atxHeadingSequence"), o(l);
  }
  function o(l) {
    return l === 35 && r++ < 6 ? (e.consume(l), o) : l === null || Ae(l) ? (e.exit("atxHeadingSequence"), a(l)) : n(l);
  }
  function a(l) {
    return l === 35 ? (e.enter("atxHeadingSequence"), u(l)) : l === null || Y(l) ? (e.exit("atxHeading"), t(l)) : ee(l) ? se(e, a, "whitespace")(l) : (e.enter("atxHeadingText"), c(l));
  }
  function u(l) {
    return l === 35 ? (e.consume(l), u) : (e.exit("atxHeadingSequence"), a(l));
  }
  function c(l) {
    return l === null || l === 35 || Ae(l) ? (e.exit("atxHeadingText"), a(l)) : (e.consume(l), c);
  }
}
const yv = [
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
], Bl = ["pre", "script", "style", "textarea"], xv = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Sv,
  tokenize: wv
}, vv = {
  partial: !0,
  tokenize: Cv
}, bv = {
  partial: !0,
  tokenize: kv
};
function Sv(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function wv(e, t, n) {
  const r = this;
  let i, s, o, a, u;
  return c;
  function c(C) {
    return l(C);
  }
  function l(C) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(C), p;
  }
  function p(C) {
    return C === 33 ? (e.consume(C), f) : C === 47 ? (e.consume(C), s = !0, m) : C === 63 ? (e.consume(C), i = 3, r.interrupt ? t : _) : $e(C) ? (e.consume(C), o = String.fromCharCode(C), g) : n(C);
  }
  function f(C) {
    return C === 45 ? (e.consume(C), i = 2, h) : C === 91 ? (e.consume(C), i = 5, a = 0, d) : $e(C) ? (e.consume(C), i = 4, r.interrupt ? t : _) : n(C);
  }
  function h(C) {
    return C === 45 ? (e.consume(C), r.interrupt ? t : _) : n(C);
  }
  function d(C) {
    const $ = "CDATA[";
    return C === $.charCodeAt(a++) ? (e.consume(C), a === $.length ? r.interrupt ? t : A : d) : n(C);
  }
  function m(C) {
    return $e(C) ? (e.consume(C), o = String.fromCharCode(C), g) : n(C);
  }
  function g(C) {
    if (C === null || C === 47 || C === 62 || Ae(C)) {
      const $ = C === 47, ke = o.toLowerCase();
      return !$ && !s && Bl.includes(ke) ? (i = 1, r.interrupt ? t(C) : A(C)) : yv.includes(o.toLowerCase()) ? (i = 6, $ ? (e.consume(C), y) : r.interrupt ? t(C) : A(C)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(C) : s ? v(C) : w(C));
    }
    return C === 45 || Ne(C) ? (e.consume(C), o += String.fromCharCode(C), g) : n(C);
  }
  function y(C) {
    return C === 62 ? (e.consume(C), r.interrupt ? t : A) : n(C);
  }
  function v(C) {
    return ee(C) ? (e.consume(C), v) : V(C);
  }
  function w(C) {
    return C === 47 ? (e.consume(C), V) : C === 58 || C === 95 || $e(C) ? (e.consume(C), S) : ee(C) ? (e.consume(C), w) : V(C);
  }
  function S(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || Ne(C) ? (e.consume(C), S) : b(C);
  }
  function b(C) {
    return C === 61 ? (e.consume(C), k) : ee(C) ? (e.consume(C), b) : w(C);
  }
  function k(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), u = C, E) : ee(C) ? (e.consume(C), k) : T(C);
  }
  function E(C) {
    return C === u ? (e.consume(C), u = null, D) : C === null || Y(C) ? n(C) : (e.consume(C), E);
  }
  function T(C) {
    return C === null || C === 34 || C === 39 || C === 47 || C === 60 || C === 61 || C === 62 || C === 96 || Ae(C) ? b(C) : (e.consume(C), T);
  }
  function D(C) {
    return C === 47 || C === 62 || ee(C) ? w(C) : n(C);
  }
  function V(C) {
    return C === 62 ? (e.consume(C), R) : n(C);
  }
  function R(C) {
    return C === null || Y(C) ? A(C) : ee(C) ? (e.consume(C), R) : n(C);
  }
  function A(C) {
    return C === 45 && i === 2 ? (e.consume(C), H) : C === 60 && i === 1 ? (e.consume(C), W) : C === 62 && i === 4 ? (e.consume(C), I) : C === 63 && i === 3 ? (e.consume(C), _) : C === 93 && i === 5 ? (e.consume(C), ge) : Y(C) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(vv, q, j)(C)) : C === null || Y(C) ? (e.exit("htmlFlowData"), j(C)) : (e.consume(C), A);
  }
  function j(C) {
    return e.check(bv, B, q)(C);
  }
  function B(C) {
    return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), N;
  }
  function N(C) {
    return C === null || Y(C) ? j(C) : (e.enter("htmlFlowData"), A(C));
  }
  function H(C) {
    return C === 45 ? (e.consume(C), _) : A(C);
  }
  function W(C) {
    return C === 47 ? (e.consume(C), o = "", Q) : A(C);
  }
  function Q(C) {
    if (C === 62) {
      const $ = o.toLowerCase();
      return Bl.includes($) ? (e.consume(C), I) : A(C);
    }
    return $e(C) && o.length < 8 ? (e.consume(C), o += String.fromCharCode(C), Q) : A(C);
  }
  function ge(C) {
    return C === 93 ? (e.consume(C), _) : A(C);
  }
  function _(C) {
    return C === 62 ? (e.consume(C), I) : C === 45 && i === 2 ? (e.consume(C), _) : A(C);
  }
  function I(C) {
    return C === null || Y(C) ? (e.exit("htmlFlowData"), q(C)) : (e.consume(C), I);
  }
  function q(C) {
    return e.exit("htmlFlow"), t(C);
  }
}
function kv(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return Y(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), s) : n(o);
  }
  function s(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function Cv(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(ai, t, n);
  }
}
const Ev = {
  name: "htmlText",
  tokenize: _v
};
function _v(e, t, n) {
  const r = this;
  let i, s, o;
  return a;
  function a(_) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(_), u;
  }
  function u(_) {
    return _ === 33 ? (e.consume(_), c) : _ === 47 ? (e.consume(_), b) : _ === 63 ? (e.consume(_), w) : $e(_) ? (e.consume(_), T) : n(_);
  }
  function c(_) {
    return _ === 45 ? (e.consume(_), l) : _ === 91 ? (e.consume(_), s = 0, d) : $e(_) ? (e.consume(_), v) : n(_);
  }
  function l(_) {
    return _ === 45 ? (e.consume(_), h) : n(_);
  }
  function p(_) {
    return _ === null ? n(_) : _ === 45 ? (e.consume(_), f) : Y(_) ? (o = p, W(_)) : (e.consume(_), p);
  }
  function f(_) {
    return _ === 45 ? (e.consume(_), h) : p(_);
  }
  function h(_) {
    return _ === 62 ? H(_) : _ === 45 ? f(_) : p(_);
  }
  function d(_) {
    const I = "CDATA[";
    return _ === I.charCodeAt(s++) ? (e.consume(_), s === I.length ? m : d) : n(_);
  }
  function m(_) {
    return _ === null ? n(_) : _ === 93 ? (e.consume(_), g) : Y(_) ? (o = m, W(_)) : (e.consume(_), m);
  }
  function g(_) {
    return _ === 93 ? (e.consume(_), y) : m(_);
  }
  function y(_) {
    return _ === 62 ? H(_) : _ === 93 ? (e.consume(_), y) : m(_);
  }
  function v(_) {
    return _ === null || _ === 62 ? H(_) : Y(_) ? (o = v, W(_)) : (e.consume(_), v);
  }
  function w(_) {
    return _ === null ? n(_) : _ === 63 ? (e.consume(_), S) : Y(_) ? (o = w, W(_)) : (e.consume(_), w);
  }
  function S(_) {
    return _ === 62 ? H(_) : w(_);
  }
  function b(_) {
    return $e(_) ? (e.consume(_), k) : n(_);
  }
  function k(_) {
    return _ === 45 || Ne(_) ? (e.consume(_), k) : E(_);
  }
  function E(_) {
    return Y(_) ? (o = E, W(_)) : ee(_) ? (e.consume(_), E) : H(_);
  }
  function T(_) {
    return _ === 45 || Ne(_) ? (e.consume(_), T) : _ === 47 || _ === 62 || Ae(_) ? D(_) : n(_);
  }
  function D(_) {
    return _ === 47 ? (e.consume(_), H) : _ === 58 || _ === 95 || $e(_) ? (e.consume(_), V) : Y(_) ? (o = D, W(_)) : ee(_) ? (e.consume(_), D) : H(_);
  }
  function V(_) {
    return _ === 45 || _ === 46 || _ === 58 || _ === 95 || Ne(_) ? (e.consume(_), V) : R(_);
  }
  function R(_) {
    return _ === 61 ? (e.consume(_), A) : Y(_) ? (o = R, W(_)) : ee(_) ? (e.consume(_), R) : D(_);
  }
  function A(_) {
    return _ === null || _ === 60 || _ === 61 || _ === 62 || _ === 96 ? n(_) : _ === 34 || _ === 39 ? (e.consume(_), i = _, j) : Y(_) ? (o = A, W(_)) : ee(_) ? (e.consume(_), A) : (e.consume(_), B);
  }
  function j(_) {
    return _ === i ? (e.consume(_), i = void 0, N) : _ === null ? n(_) : Y(_) ? (o = j, W(_)) : (e.consume(_), j);
  }
  function B(_) {
    return _ === null || _ === 34 || _ === 39 || _ === 60 || _ === 61 || _ === 96 ? n(_) : _ === 47 || _ === 62 || Ae(_) ? D(_) : (e.consume(_), B);
  }
  function N(_) {
    return _ === 47 || _ === 62 || Ae(_) ? D(_) : n(_);
  }
  function H(_) {
    return _ === 62 ? (e.consume(_), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(_);
  }
  function W(_) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), Q;
  }
  function Q(_) {
    return ee(_) ? se(e, ge, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(_) : ge(_);
  }
  function ge(_) {
    return e.enter("htmlTextData"), o(_);
  }
}
const To = {
  name: "labelEnd",
  resolveAll: Rv,
  resolveTo: Lv,
  tokenize: Iv
}, Pv = {
  tokenize: Ov
}, Tv = {
  tokenize: Mv
}, Av = {
  tokenize: Dv
};
function Rv(e) {
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
function Lv(e, t) {
  let n = e.length, r = 0, i, s, o, a;
  for (; n--; )
    if (i = e[n][1], s) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (s = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const u = {
    type: e[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[s][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, c = {
    type: "label",
    start: {
      ...e[s][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, l = {
    type: "labelText",
    start: {
      ...e[s + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return a = [["enter", u, t], ["enter", c, t]], a = Ue(a, e.slice(s + 1, s + r + 3)), a = Ue(a, [["enter", l, t]]), a = Ue(a, Po(t.parser.constructs.insideSpan.null, e.slice(s + r + 4, o - 3), t)), a = Ue(a, [["exit", l, t], e[o - 2], e[o - 1], ["exit", c, t]]), a = Ue(a, e.slice(o + 1)), a = Ue(a, [["exit", u, t]]), nt(e, s, e.length, a), e;
}
function Iv(e, t, n) {
  const r = this;
  let i = r.events.length, s, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      s = r.events[i][1];
      break;
    }
  return a;
  function a(f) {
    return s ? s._inactive ? p(f) : (o = r.parser.defined.includes(Wt(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(f), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(f);
  }
  function u(f) {
    return f === 40 ? e.attempt(Pv, l, o ? l : p)(f) : f === 91 ? e.attempt(Tv, l, o ? c : p)(f) : o ? l(f) : p(f);
  }
  function c(f) {
    return e.attempt(Av, l, p)(f);
  }
  function l(f) {
    return t(f);
  }
  function p(f) {
    return s._balanced = !0, n(f);
  }
}
function Ov(e, t, n) {
  return r;
  function r(p) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(p), e.exit("resourceMarker"), i;
  }
  function i(p) {
    return Ae(p) ? An(e, s)(p) : s(p);
  }
  function s(p) {
    return p === 41 ? l(p) : Cf(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(p);
  }
  function o(p) {
    return Ae(p) ? An(e, u)(p) : l(p);
  }
  function a(p) {
    return n(p);
  }
  function u(p) {
    return p === 34 || p === 39 || p === 40 ? _f(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(p) : l(p);
  }
  function c(p) {
    return Ae(p) ? An(e, l)(p) : l(p);
  }
  function l(p) {
    return p === 41 ? (e.enter("resourceMarker"), e.consume(p), e.exit("resourceMarker"), e.exit("resource"), t) : n(p);
  }
}
function Mv(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Ef.call(r, e, s, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function s(a) {
    return r.parser.defined.includes(Wt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function Dv(e, t, n) {
  return r;
  function r(s) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(s), e.exit("referenceMarker"), i;
  }
  function i(s) {
    return s === 93 ? (e.enter("referenceMarker"), e.consume(s), e.exit("referenceMarker"), e.exit("reference"), t) : n(s);
  }
}
const jv = {
  name: "labelStartImage",
  resolveAll: To.resolveAll,
  tokenize: Nv
};
function Nv(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), s;
  }
  function s(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), o) : n(a);
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Fv = {
  name: "labelStartLink",
  resolveAll: To.resolveAll,
  tokenize: Bv
};
function Bv(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), s;
  }
  function s(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Ii = {
  name: "lineEnding",
  tokenize: Vv
};
function Vv(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), se(e, t, "linePrefix");
  }
}
const Or = {
  name: "thematicBreak",
  tokenize: zv
};
function zv(e, t, n) {
  let r = 0, i;
  return s;
  function s(c) {
    return e.enter("thematicBreak"), o(c);
  }
  function o(c) {
    return i = c, a(c);
  }
  function a(c) {
    return c === i ? (e.enter("thematicBreakSequence"), u(c)) : r >= 3 && (c === null || Y(c)) ? (e.exit("thematicBreak"), t(c)) : n(c);
  }
  function u(c) {
    return c === i ? (e.consume(c), r++, u) : (e.exit("thematicBreakSequence"), ee(c) ? se(e, a, "whitespace")(c) : a(c));
  }
}
const _e = {
  continuation: {
    tokenize: Wv
  },
  exit: Kv,
  name: "list",
  tokenize: qv
}, Uv = {
  partial: !0,
  tokenize: Yv
}, Hv = {
  partial: !0,
  tokenize: Gv
};
function qv(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let s = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(h) {
    const d = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : Es(h)) {
      if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
        _container: !0
      })), d === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(Or, n, c)(h) : c(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(h);
    }
    return n(h);
  }
  function u(h) {
    return Es(h) && ++o < 10 ? (e.consume(h), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), c(h)) : n(h);
  }
  function c(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      ai,
      // Can’t be empty when interrupting.
      r.interrupt ? n : l,
      e.attempt(Uv, f, p)
    );
  }
  function l(h) {
    return r.containerState.initialBlankLine = !0, s++, f(h);
  }
  function p(h) {
    return ee(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), f) : n(h);
  }
  function f(h) {
    return r.containerState.size = s + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function Wv(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(ai, i, s);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, se(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function s(a) {
    return r.containerState.furtherBlankLines || !ee(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Hv, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, se(e, e.attempt(_e, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Gv(e, t, n) {
  const r = this;
  return se(e, i, "listItemIndent", r.containerState.size + 1);
  function i(s) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(s) : n(s);
  }
}
function Kv(e) {
  e.exit(this.containerState.type);
}
function Yv(e, t, n) {
  const r = this;
  return se(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(s) {
    const o = r.events[r.events.length - 1];
    return !ee(s) && o && o[1].type === "listItemPrefixWhitespace" ? t(s) : n(s);
  }
}
const Vl = {
  name: "setextUnderline",
  resolveTo: Xv,
  tokenize: Jv
};
function Xv(e, t) {
  let n = e.length, r, i, s;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !s && e[n][1].type === "definition" && (s = n);
  const o = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", s ? (e.splice(i, 0, ["enter", o, t]), e.splice(s + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[s][1].end
  }) : e[r][1] = o, e.push(["exit", o, t]), e;
}
function Jv(e, t, n) {
  const r = this;
  let i;
  return s;
  function s(c) {
    let l = r.events.length, p;
    for (; l--; )
      if (r.events[l][1].type !== "lineEnding" && r.events[l][1].type !== "linePrefix" && r.events[l][1].type !== "content") {
        p = r.events[l][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || p) ? (e.enter("setextHeadingLine"), i = c, o(c)) : n(c);
  }
  function o(c) {
    return e.enter("setextHeadingLineSequence"), a(c);
  }
  function a(c) {
    return c === i ? (e.consume(c), a) : (e.exit("setextHeadingLineSequence"), ee(c) ? se(e, u, "lineSuffix")(c) : u(c));
  }
  function u(c) {
    return c === null || Y(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
  }
}
const Qv = {
  tokenize: $v
};
function $v(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    ai,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, se(e, e.attempt(this.parser.constructs.flow, i, e.attempt(rv, i)), "linePrefix"))
  );
  return n;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(s), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Zv = {
  resolveAll: Tf()
}, eb = Pf("string"), tb = Pf("text");
function Pf(e) {
  return {
    resolveAll: Tf(e === "text" ? nb : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], s = n.attempt(i, o, a);
    return o;
    function o(l) {
      return c(l) ? s(l) : a(l);
    }
    function a(l) {
      if (l === null) {
        n.consume(l);
        return;
      }
      return n.enter("data"), n.consume(l), u;
    }
    function u(l) {
      return c(l) ? (n.exit("data"), s(l)) : (n.consume(l), u);
    }
    function c(l) {
      if (l === null)
        return !0;
      const p = i[l];
      let f = -1;
      if (p)
        for (; ++f < p.length; ) {
          const h = p[f];
          if (!h.previous || h.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Tf(e) {
  return t;
  function t(n, r) {
    let i = -1, s;
    for (; ++i <= n.length; )
      s === void 0 ? n[i] && n[i][1].type === "data" && (s = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== s + 2 && (n[s][1].end = n[i - 1][1].end, n.splice(s + 2, i - s - 2), i = s + 2), s = void 0);
    return e ? e(n, r) : n;
  }
}
function nb(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let s = i.length, o = -1, a = 0, u;
      for (; s--; ) {
        const c = i[s];
        if (typeof c == "string") {
          for (o = c.length; c.charCodeAt(o - 1) === 32; )
            a++, o--;
          if (o) break;
          o = -1;
        } else if (c === -2)
          u = !0, a++;
        else if (c !== -1) {
          s++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const c = {
          type: n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? o : r.start._bufferIndex + o,
            _index: r.start._index + s,
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
const rb = {
  42: _e,
  43: _e,
  45: _e,
  48: _e,
  49: _e,
  50: _e,
  51: _e,
  52: _e,
  53: _e,
  54: _e,
  55: _e,
  56: _e,
  57: _e,
  62: bf
}, ib = {
  91: lv
}, sb = {
  [-2]: Li,
  [-1]: Li,
  32: Li
}, ob = {
  35: pv,
  42: Or,
  45: [Vl, Or],
  60: xv,
  61: Vl,
  95: Or,
  96: Fl,
  126: Fl
}, ab = {
  38: wf,
  92: Sf
}, lb = {
  [-5]: Ii,
  [-4]: Ii,
  [-3]: Ii,
  33: jv,
  38: wf,
  42: _s,
  60: [F0, Ev],
  91: Fv,
  92: [fv, Sf],
  93: To,
  95: _s,
  96: Q0
}, ub = {
  null: [_s, Zv]
}, cb = {
  null: [42, 95]
}, hb = {
  null: []
}, fb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: cb,
  contentInitial: ib,
  disable: hb,
  document: rb,
  flow: ob,
  flowInitial: sb,
  insideSpan: ub,
  string: ab,
  text: lb
}, Symbol.toStringTag, { value: "Module" }));
function db(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, s = [];
  let o = [], a = [];
  const u = {
    attempt: E(b),
    check: E(k),
    consume: v,
    enter: w,
    exit: S,
    interrupt: E(k, {
      interrupt: !0
    })
  }, c = {
    code: null,
    containerState: {},
    defineSkip: m,
    events: [],
    now: d,
    parser: e,
    previous: null,
    sliceSerialize: f,
    sliceStream: h,
    write: p
  };
  let l = t.tokenize.call(c, u);
  return t.resolveAll && s.push(t), c;
  function p(R) {
    return o = Ue(o, R), g(), o[o.length - 1] !== null ? [] : (T(t, 0), c.events = Po(s, c.events, c), c.events);
  }
  function f(R, A) {
    return mb(h(R), A);
  }
  function h(R) {
    return pb(o, R);
  }
  function d() {
    const {
      _bufferIndex: R,
      _index: A,
      line: j,
      column: B,
      offset: N
    } = r;
    return {
      _bufferIndex: R,
      _index: A,
      line: j,
      column: B,
      offset: N
    };
  }
  function m(R) {
    i[R.line] = R.column, V();
  }
  function g() {
    let R;
    for (; r._index < o.length; ) {
      const A = o[r._index];
      if (typeof A == "string")
        for (R = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === R && r._bufferIndex < A.length; )
          y(A.charCodeAt(r._bufferIndex));
      else
        y(A);
    }
  }
  function y(R) {
    l = l(R);
  }
  function v(R) {
    Y(R) ? (r.line++, r.column = 1, r.offset += R === -3 ? 2 : 1, V()) : R !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = R;
  }
  function w(R, A) {
    const j = A || {};
    return j.type = R, j.start = d(), c.events.push(["enter", j, c]), a.push(j), j;
  }
  function S(R) {
    const A = a.pop();
    return A.end = d(), c.events.push(["exit", A, c]), A;
  }
  function b(R, A) {
    T(R, A.from);
  }
  function k(R, A) {
    A.restore();
  }
  function E(R, A) {
    return j;
    function j(B, N, H) {
      let W, Q, ge, _;
      return Array.isArray(B) ? (
        /* c8 ignore next 1 */
        q(B)
      ) : "tokenize" in B ? (
        // Looks like a construct.
        q([
          /** @type {Construct} */
          B
        ])
      ) : I(B);
      function I(he) {
        return oe;
        function oe(Ce) {
          const Je = Ce !== null && he[Ce], ut = Ce !== null && he.null, Jn = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Je) ? Je : Je ? [Je] : [],
            ...Array.isArray(ut) ? ut : ut ? [ut] : []
          ];
          return q(Jn)(Ce);
        }
      }
      function q(he) {
        return W = he, Q = 0, he.length === 0 ? H : C(he[Q]);
      }
      function C(he) {
        return oe;
        function oe(Ce) {
          return _ = D(), ge = he, he.partial || (c.currentConstruct = he), he.name && c.parser.constructs.disable.null.includes(he.name) ? ke() : he.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            A ? Object.assign(Object.create(c), A) : c,
            u,
            $,
            ke
          )(Ce);
        }
      }
      function $(he) {
        return R(ge, _), N;
      }
      function ke(he) {
        return _.restore(), ++Q < W.length ? C(W[Q]) : H;
      }
    }
  }
  function T(R, A) {
    R.resolveAll && !s.includes(R) && s.push(R), R.resolve && nt(c.events, A, c.events.length - A, R.resolve(c.events.slice(A), c)), R.resolveTo && (c.events = R.resolveTo(c.events, c));
  }
  function D() {
    const R = d(), A = c.previous, j = c.currentConstruct, B = c.events.length, N = Array.from(a);
    return {
      from: B,
      restore: H
    };
    function H() {
      r = R, c.previous = A, c.currentConstruct = j, c.events.length = B, a = N, V();
    }
  }
  function V() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function pb(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, s = t.end._bufferIndex;
  let o;
  if (n === i)
    o = [e[n].slice(r, s)];
  else {
    if (o = e.slice(n, i), r > -1) {
      const a = o[0];
      typeof a == "string" ? o[0] = a.slice(r) : o.shift();
    }
    s > 0 && o.push(e[i].slice(0, s));
  }
  return o;
}
function mb(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const s = e[n];
    let o;
    if (typeof s == "string")
      o = s;
    else switch (s) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(s);
    }
    i = s === -2, r.push(o);
  }
  return r.join("");
}
function gb(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      k0([fb, ...(e || {}).extensions || []])
    ),
    content: i(L0),
    defined: [],
    document: i(O0),
    flow: i(Qv),
    lazy: {},
    string: i(eb),
    text: i(tb)
  };
  return r;
  function i(s) {
    return o;
    function o(a) {
      return db(r, s, a);
    }
  }
}
function yb(e) {
  for (; !kf(e); )
    ;
  return e;
}
const zl = /[\0\t\n\r]/g;
function xb() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(s, o, a) {
    const u = [];
    let c, l, p, f, h;
    for (s = t + (typeof s == "string" ? s.toString() : new TextDecoder(o || void 0).decode(s)), p = 0, t = "", n && (s.charCodeAt(0) === 65279 && p++, n = void 0); p < s.length; ) {
      if (zl.lastIndex = p, c = zl.exec(s), f = c && c.index !== void 0 ? c.index : s.length, h = s.charCodeAt(f), !c) {
        t = s.slice(p);
        break;
      }
      if (h === 10 && p === f && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), p < f && (u.push(s.slice(p, f)), e += f - p), h) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (l = Math.ceil(e / 4) * 4, u.push(-2); e++ < l; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      p = f + 1;
    }
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const vb = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function bb(e) {
  return e.replace(vb, Sb);
}
function Sb(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), s = i === 120 || i === 88;
    return vf(n.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return _o(n) || e;
}
const Af = {}.hasOwnProperty;
function wb(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), kb(n)(yb(gb(n).document().write(xb()(e, t, !0))));
}
function kb(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(Ho),
      autolinkProtocol: D,
      autolinkEmail: D,
      atxHeading: s(Vo),
      blockQuote: s(ut),
      characterEscape: D,
      characterReference: D,
      codeFenced: s(Jn),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: s(Jn, o),
      codeText: s(Ed, o),
      codeTextData: D,
      data: D,
      codeFlowValue: D,
      definition: s(_d),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: s(Pd),
      hardBreakEscape: s(zo),
      hardBreakTrailing: s(zo),
      htmlFlow: s(Uo, o),
      htmlFlowData: D,
      htmlText: s(Uo, o),
      htmlTextData: D,
      image: s(Td),
      label: o,
      link: s(Ho),
      listItem: s(Ad),
      listItemValue: f,
      listOrdered: s(qo, p),
      listUnordered: s(qo),
      paragraph: s(Rd),
      reference: C,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: s(Vo),
      strong: s(Ld),
      thematicBreak: s(Od)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: b,
      autolink: u(),
      autolinkEmail: Je,
      autolinkProtocol: Ce,
      blockQuote: u(),
      characterEscapeValue: V,
      characterReferenceMarkerHexadecimal: ke,
      characterReferenceMarkerNumeric: ke,
      characterReferenceValue: he,
      characterReference: oe,
      codeFenced: u(g),
      codeFencedFence: m,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: d,
      codeFlowValue: V,
      codeIndented: u(y),
      codeText: u(N),
      codeTextData: V,
      data: V,
      definition: u(),
      definitionDestinationString: S,
      definitionLabelString: v,
      definitionTitleString: w,
      emphasis: u(),
      hardBreakEscape: u(A),
      hardBreakTrailing: u(A),
      htmlFlow: u(j),
      htmlFlowData: V,
      htmlText: u(B),
      htmlTextData: V,
      image: u(W),
      label: ge,
      labelText: Q,
      lineEnding: R,
      link: u(H),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: $,
      resourceDestinationString: _,
      resourceTitleString: I,
      resource: q,
      setextHeading: u(T),
      setextHeadingLineSequence: E,
      setextHeadingText: k,
      strong: u(),
      thematicBreak: u()
    }
  };
  Rf(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(M) {
    let U = {
      type: "root",
      children: []
    };
    const X = {
      stack: [U],
      tokenStack: [],
      config: t,
      enter: a,
      exit: c,
      buffer: o,
      resume: l,
      data: n
    }, Z = [];
    let ne = -1;
    for (; ++ne < M.length; )
      if (M[ne][1].type === "listOrdered" || M[ne][1].type === "listUnordered")
        if (M[ne][0] === "enter")
          Z.push(ne);
        else {
          const We = Z.pop();
          ne = i(M, We, ne);
        }
    for (ne = -1; ++ne < M.length; ) {
      const We = t[M[ne][0]];
      Af.call(We, M[ne][1].type) && We[M[ne][1].type].call(Object.assign({
        sliceSerialize: M[ne][2].sliceSerialize
      }, X), M[ne][1]);
    }
    if (X.tokenStack.length > 0) {
      const We = X.tokenStack[X.tokenStack.length - 1];
      (We[1] || Ul).call(X, void 0, We[0]);
    }
    for (U.position = {
      start: ct(M.length > 0 ? M[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: ct(M.length > 0 ? M[M.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ne = -1; ++ne < t.transforms.length; )
      U = t.transforms[ne](U) || U;
    return U;
  }
  function i(M, U, X) {
    let Z = U - 1, ne = -1, We = !1, St, rt, an, ln;
    for (; ++Z <= X; ) {
      const Me = M[Z];
      switch (Me[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Me[0] === "enter" ? ne++ : ne--, ln = void 0;
          break;
        }
        case "lineEndingBlank": {
          Me[0] === "enter" && (St && !ln && !ne && !an && (an = Z), ln = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ln = void 0;
      }
      if (!ne && Me[0] === "enter" && Me[1].type === "listItemPrefix" || ne === -1 && Me[0] === "exit" && (Me[1].type === "listUnordered" || Me[1].type === "listOrdered")) {
        if (St) {
          let Ot = Z;
          for (rt = void 0; Ot--; ) {
            const it = M[Ot];
            if (it[1].type === "lineEnding" || it[1].type === "lineEndingBlank") {
              if (it[0] === "exit") continue;
              rt && (M[rt][1].type = "lineEndingBlank", We = !0), it[1].type = "lineEnding", rt = Ot;
            } else if (!(it[1].type === "linePrefix" || it[1].type === "blockQuotePrefix" || it[1].type === "blockQuotePrefixWhitespace" || it[1].type === "blockQuoteMarker" || it[1].type === "listItemIndent")) break;
          }
          an && (!rt || an < rt) && (St._spread = !0), St.end = Object.assign({}, rt ? M[rt][1].start : Me[1].end), M.splice(rt || Z, 0, ["exit", St, Me[2]]), Z++, X++;
        }
        if (Me[1].type === "listItemPrefix") {
          const Ot = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Me[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          St = Ot, M.splice(Z, 0, ["enter", Ot, Me[2]]), Z++, X++, an = void 0, ln = !0;
        }
      }
    }
    return M[U][1]._spread = We, X;
  }
  function s(M, U) {
    return X;
    function X(Z) {
      a.call(this, M(Z), Z), U && U.call(this, Z);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(M, U, X) {
    this.stack[this.stack.length - 1].children.push(M), this.stack.push(M), this.tokenStack.push([U, X || void 0]), M.position = {
      start: ct(U.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(M) {
    return U;
    function U(X) {
      M && M.call(this, X), c.call(this, X);
    }
  }
  function c(M, U) {
    const X = this.stack.pop(), Z = this.tokenStack.pop();
    if (Z)
      Z[0].type !== M.type && (U ? U.call(this, M, Z[0]) : (Z[1] || Ul).call(this, M, Z[0]));
    else throw new Error("Cannot close `" + M.type + "` (" + Tn({
      start: M.start,
      end: M.end
    }) + "): it’s not open");
    X.position.end = ct(M.end);
  }
  function l() {
    return S0(this.stack.pop());
  }
  function p() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(M) {
    if (this.data.expectingFirstListItemValue) {
      const U = this.stack[this.stack.length - 2];
      U.start = Number.parseInt(this.sliceSerialize(M), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.lang = M;
  }
  function d() {
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
  function v(M) {
    const U = this.resume(), X = this.stack[this.stack.length - 1];
    X.label = U, X.identifier = Wt(this.sliceSerialize(M)).toLowerCase();
  }
  function w() {
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
      const X = this.sliceSerialize(M).length;
      U.depth = X;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function E(M) {
    const U = this.stack[this.stack.length - 1];
    U.depth = this.sliceSerialize(M).codePointAt(0) === 61 ? 1 : 2;
  }
  function T() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function D(M) {
    const X = this.stack[this.stack.length - 1].children;
    let Z = X[X.length - 1];
    (!Z || Z.type !== "text") && (Z = Id(), Z.position = {
      start: ct(M.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, X.push(Z)), this.stack.push(Z);
  }
  function V(M) {
    const U = this.stack.pop();
    U.value += this.sliceSerialize(M), U.position.end = ct(M.end);
  }
  function R(M) {
    const U = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const X = U.children[U.children.length - 1];
      X.position.end = ct(M.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(U.type) && (D.call(this, M), V.call(this, M));
  }
  function A() {
    this.data.atHardBreak = !0;
  }
  function j() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.value = M;
  }
  function B() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.value = M;
  }
  function N() {
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
  function W() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const U = this.data.referenceType || "shortcut";
      M.type += "Reference", M.referenceType = U, delete M.url, delete M.title;
    } else
      delete M.identifier, delete M.label;
    this.data.referenceType = void 0;
  }
  function Q(M) {
    const U = this.sliceSerialize(M), X = this.stack[this.stack.length - 2];
    X.label = bb(U), X.identifier = Wt(U).toLowerCase();
  }
  function ge() {
    const M = this.stack[this.stack.length - 1], U = this.resume(), X = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, X.type === "link") {
      const Z = M.children;
      X.children = Z;
    } else
      X.alt = U;
  }
  function _() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.url = M;
  }
  function I() {
    const M = this.resume(), U = this.stack[this.stack.length - 1];
    U.title = M;
  }
  function q() {
    this.data.inReference = void 0;
  }
  function C() {
    this.data.referenceType = "collapsed";
  }
  function $(M) {
    const U = this.resume(), X = this.stack[this.stack.length - 1];
    X.label = U, X.identifier = Wt(this.sliceSerialize(M)).toLowerCase(), this.data.referenceType = "full";
  }
  function ke(M) {
    this.data.characterReferenceType = M.type;
  }
  function he(M) {
    const U = this.sliceSerialize(M), X = this.data.characterReferenceType;
    let Z;
    X ? (Z = vf(U, X === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Z = _o(U);
    const ne = this.stack[this.stack.length - 1];
    ne.value += Z;
  }
  function oe(M) {
    const U = this.stack.pop();
    U.position.end = ct(M.end);
  }
  function Ce(M) {
    V.call(this, M);
    const U = this.stack[this.stack.length - 1];
    U.url = this.sliceSerialize(M);
  }
  function Je(M) {
    V.call(this, M);
    const U = this.stack[this.stack.length - 1];
    U.url = "mailto:" + this.sliceSerialize(M);
  }
  function ut() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Jn() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Ed() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function _d() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Pd() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Vo() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function zo() {
    return {
      type: "break"
    };
  }
  function Uo() {
    return {
      type: "html",
      value: ""
    };
  }
  function Td() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ho() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function qo(M) {
    return {
      type: "list",
      ordered: M.type === "listOrdered",
      start: null,
      spread: M._spread,
      children: []
    };
  }
  function Ad(M) {
    return {
      type: "listItem",
      spread: M._spread,
      checked: null,
      children: []
    };
  }
  function Rd() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Ld() {
    return {
      type: "strong",
      children: []
    };
  }
  function Id() {
    return {
      type: "text",
      value: ""
    };
  }
  function Od() {
    return {
      type: "thematicBreak"
    };
  }
}
function ct(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Rf(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Rf(e, r) : Cb(e, r);
  }
}
function Cb(e, t) {
  let n;
  for (n in t)
    if (Af.call(t, n))
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
function Ul(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Tn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Tn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Tn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Eb(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return wb(r, {
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
function _b(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Pb(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Tb(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let s = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (s.data = { meta: t.meta }), e.patch(t, s), s = e.applyData(t, s), s = { type: "element", tagName: "pre", properties: {}, children: [s] }, e.patch(t, s), s;
}
function Ab(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Rb(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lb(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = sn(r.toLowerCase()), s = e.footnoteOrder.indexOf(r);
  let o, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = s + 1, a += 1, e.footnoteCounts.set(r, a);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, u);
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u]
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Ib(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ob(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Lf(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), s = i[0];
  s && s.type === "text" ? s.value = "[" + s.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Mb(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Lf(e, t);
  const i = { src: sn(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const s = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, s), e.applyData(t, s);
}
function Db(e, t) {
  const n = { src: sn(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function jb(e, t) {
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
function Nb(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Lf(e, t);
  const i = { href: sn(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Fb(e, t) {
  const n = { href: sn(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Bb(e, t, n) {
  const r = e.all(t), i = n ? Vb(n) : If(t), s = {}, o = [];
  if (typeof t.checked == "boolean") {
    const l = r[0];
    let p;
    l && l.type === "element" && l.tagName === "p" ? p = l : (p = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(p)), p.children.length > 0 && p.children.unshift({ type: "text", value: " " }), p.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), s.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const l = r[a];
    (i || a !== 0 || l.type !== "element" || l.tagName !== "p") && o.push({ type: "text", value: `
` }), l.type === "element" && l.tagName === "p" && !i ? o.push(...l.children) : o.push(l);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && o.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: s, children: o };
  return e.patch(t, c), e.applyData(t, c);
}
function Vb(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = If(n[r]);
  }
  return t;
}
function If(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function zb(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Ub(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Hb(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function qb(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Wb(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = wo(t.children[1]), u = ff(t.children[t.children.length - 1]);
    a && u && (o.position = { start: a, end: u }), i.push(o);
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Gb(e, t, n) {
  const r = n ? n.children : void 0, s = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let u = -1;
  const c = [];
  for (; ++u < a; ) {
    const p = t.children[u], f = {}, h = o ? o[u] : void 0;
    h && (f.align = h);
    let d = { type: "element", tagName: s, properties: f, children: [] };
    p && (d.children = e.all(p), e.patch(p, d), d = e.applyData(p, d)), c.push(d);
  }
  const l = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(c, !0)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Kb(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Hl = 9, ql = 32;
function Yb(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const s = [];
  for (; r; )
    s.push(
      Wl(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return s.push(Wl(t.slice(i), i > 0, !1)), s.join("");
}
function Wl(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let s = e.codePointAt(r);
    for (; s === Hl || s === ql; )
      r++, s = e.codePointAt(r);
  }
  if (n) {
    let s = e.codePointAt(i - 1);
    for (; s === Hl || s === ql; )
      i--, s = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Xb(e, t) {
  const n = { type: "text", value: Yb(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Jb(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Qb = {
  blockquote: _b,
  break: Pb,
  code: Tb,
  delete: Ab,
  emphasis: Rb,
  footnoteReference: Lb,
  heading: Ib,
  html: Ob,
  imageReference: Mb,
  image: Db,
  inlineCode: jb,
  linkReference: Nb,
  link: Fb,
  listItem: Bb,
  list: zb,
  paragraph: Ub,
  // @ts-expect-error: root is different, but hard to type.
  root: Hb,
  strong: qb,
  table: Wb,
  tableCell: Kb,
  tableRow: Gb,
  text: Xb,
  thematicBreak: Jb,
  toml: nr,
  yaml: nr,
  definition: nr,
  footnoteDefinition: nr
};
function nr() {
}
const Of = -1, li = 0, Rn = 1, Xr = 2, Ao = 3, Ro = 4, Lo = 5, Io = 6, Mf = 7, Df = 8, Gl = typeof self == "object" ? self : globalThis, $b = (e, t) => {
  const n = (i, s) => (e.set(s, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [s, o] = t[i];
    switch (s) {
      case li:
      case Of:
        return n(o, i);
      case Rn: {
        const a = n([], i);
        for (const u of o)
          a.push(r(u));
        return a;
      }
      case Xr: {
        const a = n({}, i);
        for (const [u, c] of o)
          a[r(u)] = r(c);
        return a;
      }
      case Ao:
        return n(new Date(o), i);
      case Ro: {
        const { source: a, flags: u } = o;
        return n(new RegExp(a, u), i);
      }
      case Lo: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, c] of o)
          a.set(r(u), r(c));
        return a;
      }
      case Io: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          a.add(r(u));
        return a;
      }
      case Mf: {
        const { name: a, message: u } = o;
        return n(new Gl[a](u), i);
      }
      case Df:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: a } = new Uint8Array(o);
        return n(new DataView(a), o);
      }
    }
    return n(new Gl[s](o), i);
  };
  return r;
}, Kl = (e) => $b(/* @__PURE__ */ new Map(), e)(0), Dt = "", { toString: Zb } = {}, { keys: e2 } = Object, mn = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [li, t];
  const n = Zb.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Rn, Dt];
    case "Object":
      return [Xr, Dt];
    case "Date":
      return [Ao, Dt];
    case "RegExp":
      return [Ro, Dt];
    case "Map":
      return [Lo, Dt];
    case "Set":
      return [Io, Dt];
    case "DataView":
      return [Rn, n];
  }
  return n.includes("Array") ? [Rn, n] : n.includes("Error") ? [Mf, n] : [Xr, n];
}, rr = ([e, t]) => e === li && (t === "function" || t === "symbol"), t2 = (e, t, n, r) => {
  const i = (o, a) => {
    const u = r.push(o) - 1;
    return n.set(a, u), u;
  }, s = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, u] = mn(o);
    switch (a) {
      case li: {
        let l = o;
        switch (u) {
          case "bigint":
            a = Df, l = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            l = null;
            break;
          case "undefined":
            return i([Of], o);
        }
        return i([a, l], o);
      }
      case Rn: {
        if (u) {
          let f = o;
          return u === "DataView" ? f = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (f = new Uint8Array(o)), i([u, [...f]], o);
        }
        const l = [], p = i([a, l], o);
        for (const f of o)
          l.push(s(f));
        return p;
      }
      case Xr: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return s(o.toJSON());
        const l = [], p = i([a, l], o);
        for (const f of e2(o))
          (e || !rr(mn(o[f]))) && l.push([s(f), s(o[f])]);
        return p;
      }
      case Ao:
        return i([a, o.toISOString()], o);
      case Ro: {
        const { source: l, flags: p } = o;
        return i([a, { source: l, flags: p }], o);
      }
      case Lo: {
        const l = [], p = i([a, l], o);
        for (const [f, h] of o)
          (e || !(rr(mn(f)) || rr(mn(h)))) && l.push([s(f), s(h)]);
        return p;
      }
      case Io: {
        const l = [], p = i([a, l], o);
        for (const f of o)
          (e || !rr(mn(f))) && l.push(s(f));
        return p;
      }
    }
    const { message: c } = o;
    return i([a, { name: u, message: c }], o);
  };
  return s;
}, Yl = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return t2(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Jr = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Kl(Yl(e, t)) : structuredClone(e)
) : (e, t) => Kl(Yl(e, t));
function n2(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function r2(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function i2(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || n2, r = e.options.footnoteBackLabel || r2, i = e.options.footnoteLabel || "Footnotes", s = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!c)
      continue;
    const l = e.all(c), p = String(c.identifier).toUpperCase(), f = sn(p.toLowerCase());
    let h = 0;
    const d = [], m = e.footnoteCounts.get(p);
    for (; m !== void 0 && ++h <= m; ) {
      d.length > 0 && d.push({ type: "text", value: " " });
      let v = typeof n == "string" ? n : n(u, h);
      typeof v == "string" && (v = { type: "text", value: v }), d.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + f + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(v) ? v : [v]
      });
    }
    const g = l[l.length - 1];
    if (g && g.type === "element" && g.tagName === "p") {
      const v = g.children[g.children.length - 1];
      v && v.type === "text" ? v.value += " " : g.children.push({ type: "text", value: " " }), g.children.push(...d);
    } else
      l.push(...d);
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + f },
      children: e.wrap(l, !0)
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
          tagName: s,
          properties: {
            ...Jr(o),
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
const jf = (
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
      return l2;
    if (typeof e == "function")
      return ui(e);
    if (typeof e == "object")
      return Array.isArray(e) ? s2(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        o2(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return a2(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function s2(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = jf(e[n]);
  return ui(r);
  function r(...i) {
    let s = -1;
    for (; ++s < t.length; )
      if (t[s].apply(this, i)) return !0;
    return !1;
  }
}
function o2(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return ui(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let s;
    for (s in e)
      if (i[s] !== t[s]) return !1;
    return !0;
  }
}
function a2(e) {
  return ui(t);
  function t(n) {
    return n && n.type === e;
  }
}
function ui(e) {
  return t;
  function t(n, r, i) {
    return !!(u2(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function l2() {
  return !0;
}
function u2(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Nf = [], c2 = !0, Xl = !1, h2 = "skip";
function f2(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const s = jf(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, c, l) {
    const p = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof p.type == "string") {
      const h = (
        // `hast`
        typeof p.tagName == "string" ? p.tagName : (
          // `xast`
          typeof p.name == "string" ? p.name : void 0
        )
      );
      Object.defineProperty(f, "name", {
        value: "node (" + (u.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let h = Nf, d, m, g;
      if ((!t || s(u, c, l[l.length - 1] || void 0)) && (h = d2(n(u, l)), h[0] === Xl))
        return h;
      if ("children" in u && u.children) {
        const y = (
          /** @type {UnistParent} */
          u
        );
        if (y.children && h[0] !== h2)
          for (m = (r ? y.children.length : -1) + o, g = l.concat(y); m > -1 && m < y.children.length; ) {
            const v = y.children[m];
            if (d = a(v, m, g)(), d[0] === Xl)
              return d;
            m = typeof d[1] == "number" ? d[1] : m + o;
          }
      }
      return h;
    }
  }
}
function d2(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [c2, e] : e == null ? Nf : [e];
}
function Ff(e, t, n, r) {
  let i, s, o;
  typeof t == "function" && typeof n != "function" ? (s = void 0, o = t, i = n) : (s = t, o = n, i = r), f2(e, s, a, i);
  function a(u, c) {
    const l = c[c.length - 1], p = l ? l.children.indexOf(u) : void 0;
    return o(u, p, l);
  }
}
const Ps = {}.hasOwnProperty, p2 = {};
function m2(e, t) {
  const n = t || p2, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = { ...Qb, ...n.handlers }, a = {
    all: c,
    applyData: y2,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: s,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: n,
    patch: g2,
    wrap: v2
  };
  return Ff(e, function(l) {
    if (l.type === "definition" || l.type === "footnoteDefinition") {
      const p = l.type === "definition" ? r : i, f = String(l.identifier).toUpperCase();
      p.has(f) || p.set(f, l);
    }
  }), a;
  function u(l, p) {
    const f = l.type, h = a.handlers[f];
    if (Ps.call(a.handlers, f) && h)
      return h(a, l, p);
    if (a.options.passThrough && a.options.passThrough.includes(f)) {
      if ("children" in l) {
        const { children: m, ...g } = l, y = Jr(g);
        return y.children = a.all(l), y;
      }
      return Jr(l);
    }
    return (a.options.unknownHandler || x2)(a, l, p);
  }
  function c(l) {
    const p = [];
    if ("children" in l) {
      const f = l.children;
      let h = -1;
      for (; ++h < f.length; ) {
        const d = a.one(f[h], l);
        if (d) {
          if (h && f[h - 1].type === "break" && (!Array.isArray(d) && d.type === "text" && (d.value = Jl(d.value)), !Array.isArray(d) && d.type === "element")) {
            const m = d.children[0];
            m && m.type === "text" && (m.value = Jl(m.value));
          }
          Array.isArray(d) ? p.push(...d) : p.push(d);
        }
      }
    }
    return p;
  }
}
function g2(e, t) {
  e.position && (t.position = Z1(e));
}
function y2(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, s = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && s && Object.assign(n.properties, Jr(s)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function x2(e, t) {
  const n = t.data || {}, r = "value" in t && !(Ps.call(n, "hProperties") || Ps.call(n, "hChildren")) ? { type: "text", value: t.value } : {
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
function Jl(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Ql(e, t) {
  const n = m2(e, t), r = n.one(e, void 0), i = i2(n), s = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && s.children.push({ type: "text", value: `
` }, i), s;
}
function b2(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Ql(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Ql(n, { file: r, ...e || t })
    );
  };
}
function $l(e) {
  if (e)
    throw e;
}
var Oi, Zl;
function S2() {
  if (Zl) return Oi;
  Zl = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(c) {
    return typeof Array.isArray == "function" ? Array.isArray(c) : t.call(c) === "[object Array]";
  }, s = function(c) {
    if (!c || t.call(c) !== "[object Object]")
      return !1;
    var l = e.call(c, "constructor"), p = c.constructor && c.constructor.prototype && e.call(c.constructor.prototype, "isPrototypeOf");
    if (c.constructor && !l && !p)
      return !1;
    var f;
    for (f in c)
      ;
    return typeof f > "u" || e.call(c, f);
  }, o = function(c, l) {
    n && l.name === "__proto__" ? n(c, l.name, {
      enumerable: !0,
      configurable: !0,
      value: l.newValue,
      writable: !0
    }) : c[l.name] = l.newValue;
  }, a = function(c, l) {
    if (l === "__proto__")
      if (e.call(c, l)) {
        if (r)
          return r(c, l).value;
      } else return;
    return c[l];
  };
  return Oi = function u() {
    var c, l, p, f, h, d, m = arguments[0], g = 1, y = arguments.length, v = !1;
    for (typeof m == "boolean" && (v = m, m = arguments[1] || {}, g = 2), (m == null || typeof m != "object" && typeof m != "function") && (m = {}); g < y; ++g)
      if (c = arguments[g], c != null)
        for (l in c)
          p = a(m, l), f = a(c, l), m !== f && (v && f && (s(f) || (h = i(f))) ? (h ? (h = !1, d = p && i(p) ? p : []) : d = p && s(p) ? p : {}, o(m, { name: l, newValue: u(v, d, f) })) : typeof f < "u" && o(m, { name: l, newValue: f }));
    return m;
  }, Oi;
}
var w2 = S2();
const Mi = /* @__PURE__ */ Bs(w2);
function Ts(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function k2() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let s = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(u, ...c) {
      const l = e[++s];
      let p = -1;
      if (u) {
        o(u);
        return;
      }
      for (; ++p < i.length; )
        (c[p] === null || c[p] === void 0) && (c[p] = i[p]);
      i = c, l ? C2(l, a)(...c) : o(null, ...c);
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
function C2(e, t) {
  let n;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let u;
    a && o.push(i);
    try {
      u = e.apply(this, o);
    } catch (c) {
      const l = (
        /** @type {Error} */
        c
      );
      if (a && n)
        throw l;
      return i(l);
    }
    a || (u && u.then && typeof u.then == "function" ? u.then(s, i) : u instanceof Error ? i(u) : s(u));
  }
  function i(o, ...a) {
    n || (n = !0, t(o, ...a));
  }
  function s(o) {
    i(null, o);
  }
}
const Qe = { basename: E2, dirname: _2, extname: P2, join: T2, sep: "/" };
function E2(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Hn(e);
  let n = 0, r = -1, i = e.length, s;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (s) {
          n = i + 1;
          break;
        }
      } else r < 0 && (s = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let o = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (s) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (s = !0, o = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = o));
  return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function _2(e) {
  if (Hn(e), e.length === 0)
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
function P2(e) {
  Hn(e);
  let t = e.length, n = -1, r = 0, i = -1, s = 0, o;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = t + 1), a === 46 ? i < 0 ? i = t : s !== 1 && (s = 1) : i > -1 && (s = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  s === 0 || // The (right-most) trimmed path component is exactly `..`.
  s === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function T2(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Hn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : A2(n);
}
function A2(e) {
  Hn(e);
  const t = e.codePointAt(0) === 47;
  let n = R2(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function R2(e, t) {
  let n = "", r = 0, i = -1, s = 0, o = -1, a, u;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      a = e.codePointAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || s === 1)) if (i !== o - 1 && s === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = o, s = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = o, s = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
      i = o, s = 0;
    } else a === 46 && s > -1 ? s++ : s = -1;
  }
  return n;
}
function Hn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const L2 = { cwd: I2 };
function I2() {
  return "/";
}
function As(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function O2(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!As(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return M2(e);
}
function M2(e) {
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
const Di = (
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
class Bf {
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
    t ? As(t) ? n = { path: t } : typeof t == "string" || D2(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : L2.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Di.length; ) {
      const s = Di[r];
      s in n && n[s] !== void 0 && n[s] !== null && (this[s] = s === "history" ? [...n[s]] : n[s]);
    }
    let i;
    for (i in n)
      Di.includes(i) || (this[i] = n[i]);
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
    Ni(t, "basename"), ji(t, "basename"), this.path = Qe.join(this.dirname || "", t);
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
    eu(this.basename, "dirname"), this.path = Qe.join(t || "", this.basename);
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
    if (ji(t, "extname"), eu(this.dirname, "extname"), t) {
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
    As(t) && (t = O2(t)), Ni(t, "path"), this.path !== t && this.history.push(t);
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
    Ni(t, "stem"), ji(t, "stem"), this.path = Qe.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new we(
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
function ji(e, t) {
  if (e && e.includes(Qe.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Qe.sep + "`"
    );
}
function Ni(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function eu(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function D2(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const j2 = (
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
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], s = function() {
      return i.apply(s, arguments);
    };
    return Object.setPrototypeOf(s, r), s;
  })
), N2 = {}.hasOwnProperty;
class Oo extends j2 {
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
      new Oo()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Mi(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Vi("data", this.frozen), this.namespace[t] = n, this) : N2.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Vi("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = ir(t), r = this.parser || this.Parser;
    return Fi("parse", r), r(String(n), n);
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
    return this.freeze(), Fi("process", this.parser || this.Parser), Bi("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(s, o) {
      const a = ir(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(l, p, f) {
        if (l || !p || !f)
          return c(l);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          p
        ), d = r.stringify(h, f);
        V2(d) ? f.value = d : f.result = d, c(
          l,
          /** @type {VFileWithOutput<CompileResult>} */
          f
        );
      });
      function c(l, p) {
        l || !p ? o(l) : s ? s(p) : n(void 0, p);
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
    return this.freeze(), Fi("processSync", this.parser || this.Parser), Bi("processSync", this.compiler || this.Compiler), this.process(t, i), nu("processSync", "process", n), r;
    function i(s, o) {
      n = !0, $l(s), r = o;
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
    tu(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? s(void 0, r) : new Promise(s);
    function s(o, a) {
      const u = ir(n);
      i.run(t, u, c);
      function c(l, p, f) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          p || t
        );
        l ? a(l) : o ? o(h) : r(void 0, h, f);
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
    return this.run(t, n, s), nu("runSync", "run", r), i;
    function s(o, a) {
      $l(o), i = a, r = !0;
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
    const r = ir(n), i = this.compiler || this.Compiler;
    return Bi("stringify", i), tu(t), i(t, r);
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
    if (Vi("use", this.frozen), t != null) if (typeof t == "function")
      u(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function s(c) {
      if (typeof c == "function")
        u(c, []);
      else if (typeof c == "object")
        if (Array.isArray(c)) {
          const [l, ...p] = (
            /** @type {PluginTuple<Array<unknown>>} */
            c
          );
          u(l, p);
        } else
          o(c);
      else
        throw new TypeError("Expected usable value, not `" + c + "`");
    }
    function o(c) {
      if (!("plugins" in c) && !("settings" in c))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(c.plugins), c.settings && (i.settings = Mi(!0, i.settings, c.settings));
    }
    function a(c) {
      let l = -1;
      if (c != null) if (Array.isArray(c))
        for (; ++l < c.length; ) {
          const p = c[l];
          s(p);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + c + "`");
    }
    function u(c, l) {
      let p = -1, f = -1;
      for (; ++p < r.length; )
        if (r[p][0] === c) {
          f = p;
          break;
        }
      if (f === -1)
        r.push([c, ...l]);
      else if (l.length > 0) {
        let [h, ...d] = l;
        const m = r[f][1];
        Ts(m) && Ts(h) && (h = Mi(!0, m, h)), r[f] = [c, h, ...d];
      }
    }
  }
}
const F2 = new Oo().freeze();
function Fi(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Bi(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Vi(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function tu(e) {
  if (!Ts(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function nu(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function ir(e) {
  return B2(e) ? e : new Bf(e);
}
function B2(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function V2(e) {
  return typeof e == "string" || z2(e);
}
function z2(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const U2 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ru = [], iu = { allowDangerousHtml: !0 }, H2 = /^(https?|ircs?|mailto|xmpp)$/i, q2 = [
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
function W2(e) {
  const t = G2(e), n = K2(e);
  return Y2(t.runSync(t.parse(n), n), e);
}
function G2(e) {
  const t = e.rehypePlugins || ru, n = e.remarkPlugins || ru, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...iu } : iu;
  return F2().use(Eb).use(n).use(b2, r).use(t);
}
function K2(e) {
  const t = e.children || "", n = new Bf();
  return typeof t == "string" && (n.value = t), n;
}
function Y2(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, s = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || X2;
  for (const l of q2)
    Object.hasOwn(t, l.from) && ("" + l.from + (l.to ? "use `" + l.to + "` instead" : "remove it") + U2 + l.id, void 0);
  return Ff(e, c), i0(e, {
    Fragment: x.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: x.jsx,
    jsxs: x.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function c(l, p, f) {
    if (l.type === "raw" && f && typeof p == "number")
      return o ? f.children.splice(p, 1) : f.children[p] = { type: "text", value: l.value }, p;
    if (l.type === "element") {
      let h;
      for (h in Ri)
        if (Object.hasOwn(Ri, h) && Object.hasOwn(l.properties, h)) {
          const d = l.properties[h], m = Ri[h];
          (m === null || m.includes(l.tagName)) && (l.properties[h] = u(String(d || ""), h, l));
        }
    }
    if (l.type === "element") {
      let h = n ? !n.includes(l.tagName) : s ? s.includes(l.tagName) : !1;
      if (!h && r && typeof p == "number" && (h = !r(l, p, f)), h && f && typeof p == "number")
        return a && l.children ? f.children.splice(p, 1, ...l.children) : f.children.splice(p, 1), p;
    }
  }
}
function X2(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    H2.test(e.slice(0, t)) ? e : ""
  );
}
const J2 = mc(({ label: e, selected: t = !1, onChange: n }) => {
  const [r, i] = ve(!1), s = de(), o = () => {
    i(!0);
  }, a = () => {
    i(!1);
  };
  return /* @__PURE__ */ x.jsxs(
    $t,
    {
      elevation: t ? 4 : 1,
      sx: {
        width: 250,
        height: "auto",
        minHeight: 150,
        backgroundColor: s.palette.mode === "dark" ? "grey.900" : "warning.light",
        color: "text.primary",
        borderRadius: 1,
        border: t ? `2px solid ${s.palette.warning.main}` : `1px solid ${s.palette.warning.main}`,
        padding: 2,
        display: "flex",
        flexDirection: "column"
      },
      onDoubleClick: o,
      children: [
        /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "caption",
            sx: { fontWeight: "bold", mb: 1, color: "warning.dark" },
            children: "NOTE"
          }
        ),
        /* @__PURE__ */ x.jsx(L, { sx: { flexGrow: 1, overflow: "auto" }, className: "nodrag", children: r ? /* @__PURE__ */ x.jsx(
          zd,
          {
            multiline: !0,
            fullWidth: !0,
            autoFocus: !0,
            placeholder: "Add note here... (Markdown supported)",
            defaultValue: e,
            onChange: (u) => n?.(u.target.value),
            onBlur: a,
            sx: {
              fontSize: "0.9rem",
              fontFamily: "sans-serif",
              alignItems: "flex-start",
              height: "100%"
            }
          }
        ) : /* @__PURE__ */ x.jsx(
          L,
          {
            sx: {
              fontSize: "0.9rem",
              "& p": { m: 0, mb: 1 },
              "& ul, & ol": { m: 0, pl: 2 }
            },
            children: e ? /* @__PURE__ */ x.jsx(W2, { children: e }) : /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "text.secondary", fontStyle: "italic", children: "Double-click to edit" })
          }
        ) })
      ]
    }
  );
});
J2.displayName = "CanvasNote";
const Q2 = (e) => {
  const t = e.split(/\r?\n/).map((s) => s.trim()).filter((s) => s.length > 0);
  if (t.length === 0)
    return { headers: [], rows: [] };
  const n = t[0].includes(";") ? ";" : ",", r = t[0].split(n).map((s) => s.trim()), i = t.slice(1).map((s) => s.split(n).map((o) => o.trim()));
  return { headers: r, rows: i };
}, $2 = ({ fileName: e, fileContent: t }) => {
  const { literal: n } = Ye(), [r, i] = ve(0), [s, o] = ve(10), a = Q2(t ?? ""), u = a.headers, c = a.rows, l = n["viewer.empty_csv"] || "No CSV content available", p = (h, d) => i(d), f = (h) => {
    o(parseInt(h.target.value, 10)), i(0);
  };
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: O.md
      },
      children: [
        /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "h4",
            sx: { mb: O.md, color: "text.primary", fontWeight: 600 },
            children: e
          }
        ),
        u.length === 0 && /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "body2",
            sx: { mb: O.md, color: "text.secondary" },
            children: l
          }
        ),
        /* @__PURE__ */ x.jsx(
          xc,
          {
            component: $t,
            sx: {
              flexGrow: 1,
              backgroundColor: "background.default",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1
            },
            children: /* @__PURE__ */ x.jsxs(vc, { stickyHeader: !0, size: "small", children: [
              /* @__PURE__ */ x.jsx(bc, { children: /* @__PURE__ */ x.jsx(Br, { children: u.map((h) => /* @__PURE__ */ x.jsx(
                Vr,
                {
                  sx: {
                    backgroundColor: "background.paper",
                    fontWeight: 600,
                    px: O.md,
                    py: O.sm
                  },
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ x.jsx(Sc, { children: c.slice(r * s, r * s + s).map((h, d) => /* @__PURE__ */ x.jsx(Br, { hover: !0, children: h.map((m, g) => /* @__PURE__ */ x.jsx(
                Vr,
                {
                  sx: { color: "text.secondary", px: O.md, py: O.sm },
                  children: m
                },
                g
              )) }, d)) })
            ] })
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ud,
          {
            rowsPerPageOptions: [10, 25, 50],
            component: "div",
            count: c.length,
            rowsPerPage: s,
            page: r,
            onPageChange: p,
            onRowsPerPageChange: f
          }
        )
      ]
    }
  );
}, dC = ({ columns: e, data: t, keyField: n }) => /* @__PURE__ */ x.jsx(L, { sx: { width: "100%", overflow: "hidden" }, children: /* @__PURE__ */ x.jsx(
  xc,
  {
    component: $t,
    elevation: 0,
    sx: {
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 2,
      backgroundColor: "background.paper"
    },
    children: /* @__PURE__ */ x.jsxs(vc, { stickyHeader: !0, "aria-label": "premium data table", children: [
      /* @__PURE__ */ x.jsx(bc, { children: /* @__PURE__ */ x.jsx(Br, { children: e.map((r) => /* @__PURE__ */ x.jsx(
        Vr,
        {
          align: r.align,
          sx: {
            minWidth: r.minWidth,
            fontWeight: 600,
            backgroundColor: "background.paper",
            borderBottom: "1px solid",
            borderColor: "divider",
            px: O.md,
            py: O.sm
          },
          children: r.label
        },
        r.id
      )) }) }),
      /* @__PURE__ */ x.jsx(Sc, { children: t.map((r) => /* @__PURE__ */ x.jsx(
        Br,
        {
          hover: !0,
          role: "checkbox",
          tabIndex: -1,
          sx: {
            "&:last-child td, &:last-child th": { border: 0 },
            "&:hover": { backgroundColor: "action.hover" }
          },
          children: e.map((i) => /* @__PURE__ */ x.jsx(
            Vr,
            {
              align: i.align,
              sx: { px: O.md, py: O.sm },
              children: i.render ? i.render(r) : r[i.id]
            },
            i.id
          ))
        },
        String(r[n])
      )) })
    ] })
  }
) }), pC = ({
  source: e,
  description: t,
  expiryText: n,
  actions: r
}) => {
  const i = de();
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        p: O.md,
        backgroundColor: i.palette.background.paper,
        border: 1,
        borderColor: "divider",
        borderRadius: O.xs
      },
      children: [
        /* @__PURE__ */ x.jsxs(
          L,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              mb: O.md
            },
            children: [
              /* @__PURE__ */ x.jsxs(L, { children: [
                /* @__PURE__ */ x.jsx(
                  F,
                  {
                    variant: "body2Bold",
                    sx: { color: i.palette.text.primary },
                    children: e
                  }
                ),
                /* @__PURE__ */ x.jsx(
                  F,
                  {
                    variant: "body1",
                    sx: { color: i.palette.text.secondary, mt: O.xs },
                    children: t
                  }
                )
              ] }),
              /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsx(L, { sx: { display: "flex", gap: O.sm }, children: r.map((s) => /* @__PURE__ */ x.jsx(
          Pe,
          {
            variant: s.variant,
            size: "small",
            color: s.color,
            disabled: s.disabled,
            onClick: s.onClick,
            sx: s.variant === "text" ? { color: i.palette.text.secondary } : void 0,
            children: s.label
          },
          s.label
        )) })
      ]
    }
  );
}, zi = 240, mC = (e) => {
  const {
    sortedFeatures: t,
    UiFeatureList: n,
    container: r,
    // Renamed prop
    onMenuItemClick: i,
    // <-- This is the handler passed from useHome
    mobileOpen: s,
    handleDrawerToggle: o
  } = e, a = (l) => {
    i(l);
  }, u = () => !t || t.length === 0 ? /* @__PURE__ */ x.jsx(Go, {}) : /* @__PURE__ */ x.jsx(Go, { children: t.map((l) => {
    const { id: p, name: f, display_order: h, icon: d } = l;
    if (n[f]) {
      const g = d;
      return /* @__PURE__ */ x.jsx(cp, { disablePadding: !0, children: /* @__PURE__ */ x.jsxs(
        hp,
        {
          onClick: () => a(h - 1),
          children: [
            /* @__PURE__ */ x.jsx(fp, { children: /* @__PURE__ */ x.jsx(g, {}) }),
            /* @__PURE__ */ x.jsx(dp, { primary: f })
          ]
        }
      ) }, p);
    } else
      return null;
  }) }), c = () => /* @__PURE__ */ x.jsxs("div", { children: [
    /* @__PURE__ */ x.jsx(kc, {}),
    /* @__PURE__ */ x.jsx(pp, {}),
    u()
  ] });
  return /* @__PURE__ */ x.jsxs(
    mp,
    {
      component: "nav",
      sx: { width: { sm: zi }, flexShrink: { sm: 0 } },
      "aria-label": "mailbox folders",
      children: [
        /* @__PURE__ */ x.jsx(
          Ko,
          {
            container: r,
            variant: "temporary",
            open: s,
            onClose: o,
            ModalProps: {
              keepMounted: !0
            },
            sx: {
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: zi
              }
            },
            children: c()
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ko,
          {
            variant: "permanent",
            sx: {
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: zi
              }
            },
            open: !0,
            children: c()
          }
        )
      ]
    }
  );
}, Z2 = 40, eS = 150, tS = 100, gC = ({
  id: e,
  title: t,
  secondaryLabel: n,
  statusTag: r,
  confidence: i,
  confidenceLabel: s,
  showDivider: o = !1
}) => {
  const a = de();
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        p: O.md,
        borderTop: o ? 1 : 0,
        borderColor: "divider"
      },
      children: [
        /* @__PURE__ */ x.jsx(L, { sx: { width: Z2 }, children: /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "micro",
            sx: { color: a.palette.text.secondary },
            children: e
          }
        ) }),
        /* @__PURE__ */ x.jsxs(L, { sx: { flexGrow: 1 }, children: [
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "body2Bold",
              sx: { color: a.palette.text.primary },
              children: t
            }
          ),
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "caption",
              sx: { color: a.palette.text.secondary },
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx(L, { sx: { width: eS }, children: /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "captionBold",
            sx: {
              px: O.sm,
              py: O.internal,
              borderRadius: O.internal,
              backgroundColor: `${a.palette.primary.main}20`,
              color: a.palette.primary.main
            },
            children: r.toUpperCase()
          }
        ) }),
        /* @__PURE__ */ x.jsxs(L, { sx: { width: tS, textAlign: "right" }, children: [
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "caption",
              sx: { color: a.palette.text.secondary },
              children: s
            }
          ),
          /* @__PURE__ */ x.jsxs(
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
}, yC = ({
  children: e,
  titleText: t = "Authentication",
  enableDragRegion: n = !1
}) => /* @__PURE__ */ x.jsxs(
  L,
  {
    sx: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    },
    children: [
      /* @__PURE__ */ x.jsx(
        L,
        {
          sx: {
            height: 40,
            px: O.md,
            display: "flex",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "divider",
            ...n ? { WebkitAppRegion: "drag" } : {}
          },
          children: /* @__PURE__ */ x.jsx(
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
      /* @__PURE__ */ x.jsx(
        L,
        {
          sx: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: O.lg,
            py: O.xl
          },
          children: e
        }
      )
    ]
  }
), xC = ({
  title: e,
  subTitle: t,
  color: n,
  Icon: r,
  tags: i = [],
  index: s,
  t: o
}) => {
  const a = de();
  return /* @__PURE__ */ x.jsx(
    ue.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { delay: s * 0.1, duration: 0.5 },
      style: { height: "100%" },
      children: /* @__PURE__ */ x.jsxs(
        L,
        {
          sx: {
            height: "100%",
            p: O.xl,
            borderRadius: O.md,
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
            /* @__PURE__ */ x.jsx(
              L,
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
                children: /* @__PURE__ */ x.jsx(r, { size: 32, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ x.jsx(
              F,
              {
                variant: "h6",
                sx: { color: "text.primary", fontWeight: 700, mb: 1 },
                children: o(e)
              }
            ),
            /* @__PURE__ */ x.jsx(
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
                children: o(t)
              }
            ),
            /* @__PURE__ */ x.jsx(
              L,
              {
                sx: {
                  mt: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  width: "100%"
                },
                children: i.map((u, c) => /* @__PURE__ */ x.jsx(
                  L,
                  {
                    sx: {
                      py: 1,
                      px: 2,
                      borderRadius: "4px",
                      bgcolor: "action.hover",
                      color: "text.primary",
                      fontSize: "0.875rem"
                    },
                    children: o(u)
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
  level: s = 0
}) => /* @__PURE__ */ x.jsx(Hd, { component: "div", disablePadding: !0, children: e.map((o) => {
  const a = t.has(o.id), u = n === o.id, c = o.childrenNodes?.length;
  return /* @__PURE__ */ x.jsxs(Nr.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(
      qd,
      {
        sx: { pl: 2 * s + 2 },
        selected: u,
        onClick: () => o.type === "folder" ? r(o.id) : i(o.id),
        children: [
          /* @__PURE__ */ x.jsx(Wd, { sx: { minWidth: 32 }, children: o.type === "folder" ? a ? /* @__PURE__ */ x.jsx(yp, { fontSize: "small" }) : /* @__PURE__ */ x.jsx(gp, { fontSize: "small" }) : /* @__PURE__ */ x.jsx(xp, { fontSize: "small" }) }),
          /* @__PURE__ */ x.jsx(
            Gd,
            {
              primary: o.name,
              secondary: o.secondaryLabel || null,
              primaryTypographyProps: { variant: "body2" },
              secondaryTypographyProps: { variant: "caption", fontSize: "0.7rem" }
            }
          ),
          o.type === "folder" && c ? a ? /* @__PURE__ */ x.jsx(vp, {}) : /* @__PURE__ */ x.jsx(bp, {}) : null
        ]
      }
    ),
    o.type === "folder" && c && /* @__PURE__ */ x.jsx(Kd, { in: a, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ x.jsx(
      nS,
      {
        nodes: o.childrenNodes,
        expandedIds: t,
        selectedId: n,
        onToggle: r,
        onSelect: i,
        level: s + 1
      }
    ) })
  ] }, o.id);
}) }), vC = ({
  fileName: e,
  fileContent: t,
  fileEncoding: n,
  mimeType: r
}) => {
  const { literal: i } = Ye(), s = e.split(".").pop()?.toLowerCase(), o = i["viewer.unsupported"] || "Unsupported File", a = i["viewer.extension"] || "Extension";
  switch (s) {
    case "csv":
      return /* @__PURE__ */ x.jsx($2, { fileName: e, fileContent: t });
    case "md":
    case "markdown":
    case "txt":
      return /* @__PURE__ */ x.jsx(Fp, { fileName: e, fileContent: t });
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "svg":
    case "webp":
      return /* @__PURE__ */ x.jsx(
        Dp,
        {
          fileName: e,
          fileContent: t,
          fileEncoding: n,
          mimeType: r
        }
      );
    case "json":
    case "jsonl":
      return /* @__PURE__ */ x.jsx(Up, { fileName: e, fileContent: t });
    default:
      return /* @__PURE__ */ x.jsxs(L, { sx: { p: O.lg, textAlign: "center" }, children: [
        /* @__PURE__ */ x.jsx(F, { variant: "h4", sx: { fontWeight: 600 }, children: o }),
        /* @__PURE__ */ x.jsxs(F, { variant: "body2", color: "text.secondary", children: [
          a,
          ": .",
          s
        ] })
      ] });
  }
}, bC = ({ title: e, children: t, actions: n }) => /* @__PURE__ */ x.jsxs(L, { sx: { display: "flex", flexDirection: "column", gap: 4, maxWidth: "600px" }, children: [
  e && /* @__PURE__ */ x.jsx(F, { variant: "h5", fontWeight: 600, color: "text.primary", children: e }),
  /* @__PURE__ */ x.jsx(L, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: t }),
  n && /* @__PURE__ */ x.jsx(L, { sx: { display: "flex", gap: 2, mt: 2, pt: 3, borderTop: "1px solid", borderColor: "divider" }, children: n })
] }), SC = ({ title: e, description: t, Icon: n, index: r, t: i }) => {
  const s = de();
  return /* @__PURE__ */ x.jsx(
    ue.div,
    {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: !0 },
      transition: { delay: r * 0.1, duration: 0.5 },
      children: /* @__PURE__ */ x.jsxs(
        L,
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
              borderColor: s.palette.primary.main
            },
            transition: "all 0.3s ease"
          },
          children: [
            /* @__PURE__ */ x.jsx(L, { sx: { color: s.palette.primary.main, mt: 0.5 }, children: /* @__PURE__ */ x.jsx(n, { size: 24 }) }),
            /* @__PURE__ */ x.jsxs(L, { children: [
              /* @__PURE__ */ x.jsx(F, { variant: "h6", sx: { fontWeight: 600, color: "text.primary", mb: 1 }, children: i(e) }),
              /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.6 }, children: i(t) })
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
  index: s
}) => {
  const o = de();
  return /* @__PURE__ */ x.jsxs(
    ue.div,
    {
      layout: !0,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: s * 0.1 },
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
        /* @__PURE__ */ x.jsx(
          ue.div,
          {
            animate: {
              scale: r ? 1.2 : 1,
              backgroundColor: r ? o.palette.primary.main : o.palette.action.hover,
              color: r ? o.palette.primary.contrastText : o.palette.text.secondary,
              boxShadow: r ? `0 0 20px ${o.palette.primary.main}40` : "none"
            },
            style: {
              padding: "1.5rem",
              borderRadius: "50%",
              marginBottom: "1rem",
              border: `1px solid ${r ? o.palette.primary.main : o.palette.divider}`,
              transition: "border-color 0.3s ease"
            },
            children: /* @__PURE__ */ x.jsx(n, { size: 32, strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ x.jsxs(
          ue.div,
          {
            animate: { opacity: r ? 1 : 0.6 },
            style: { textAlign: "center" },
            children: [
              /* @__PURE__ */ x.jsx("h3", { style: {
                margin: "0 0 0.5rem 0",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: o.palette.text.primary
              }, children: e }),
              /* @__PURE__ */ x.jsx("p", { style: {
                margin: 0,
                fontSize: "0.85rem",
                color: o.palette.text.secondary,
                maxWidth: "140px"
              }, children: t })
            ]
          }
        )
      ]
    }
  );
}, wC = ({ flows: e, activeStepId: t, onStepChange: n, t: r }) => {
  const i = de(), s = e.flatMap((a) => a.steps), o = (a, u) => /* @__PURE__ */ x.jsxs(L, { sx: { mb: 8 }, children: [
    /* @__PURE__ */ x.jsx(F, { variant: "h5", color: "primary", sx: { mb: 4, fontWeight: 700, textAlign: "center" }, children: r(a) }),
    /* @__PURE__ */ x.jsxs(
      L,
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
          /* @__PURE__ */ x.jsx(
            L,
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
          u.map((c, l) => /* @__PURE__ */ x.jsxs(Nr.Fragment, { children: [
            /* @__PURE__ */ x.jsx(
              rS,
              {
                index: l,
                label: r(c.label),
                description: r(c.description),
                Icon: c.Icon,
                isActive: t === c.id,
                onClick: () => n(c.id)
              }
            ),
            l < u.length - 1 && /* @__PURE__ */ x.jsx(
              L,
              {
                sx: {
                  alignSelf: "center",
                  opacity: 0.2,
                  display: { xs: "none", md: "block" }
                },
                children: /* @__PURE__ */ x.jsx(C1, { size: 24 })
              }
            )
          ] }, c.id))
        ]
      }
    )
  ] });
  return /* @__PURE__ */ x.jsx(L, { sx: { py: 8, position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ x.jsxs(Yd, { maxWidth: "lg", children: [
    e.map((a, u) => /* @__PURE__ */ x.jsx(Nr.Fragment, { children: o(a.titleKey, a.steps) }, u)),
    /* @__PURE__ */ x.jsx(Yp, { mode: "wait", children: t && /* @__PURE__ */ x.jsxs(
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
          /* @__PURE__ */ x.jsx(F, { variant: "h5", color: "primary", gutterBottom: !0, children: r(s.find((a) => a.id === t)?.label || "") }),
          /* @__PURE__ */ x.jsx(F, { variant: "body1", color: "text.secondary", sx: { maxWidth: "600px", mx: "auto" }, children: r(s.find((a) => a.id === t)?.description || "") })
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
}, kC = ({ steps: e, currentStepId: t }) => {
  const n = de();
  return /* @__PURE__ */ x.jsx(L, { sx: { width: "100%" }, children: /* @__PURE__ */ x.jsx(
    L,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: O.sm,
        flexWrap: "wrap"
      },
      children: e.map((r, i) => {
        const s = r.id === t, o = r.status ?? (s ? "in-progress" : "not-started"), a = iS(o, n.palette);
        return /* @__PURE__ */ x.jsxs(
          L,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              flex: 1,
              minWidth: 160
            },
            children: [
              /* @__PURE__ */ x.jsxs(
                L,
                {
                  sx: { display: "flex", alignItems: "center", gap: O.xs },
                  children: [
                    /* @__PURE__ */ x.jsx(
                      L,
                      {
                        "aria-hidden": !0,
                        sx: {
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: a,
                          boxShadow: s ? `0 0 0 3px ${n.palette.action.hover}` : "none",
                          flexShrink: 0
                        }
                      }
                    ),
                    /* @__PURE__ */ x.jsx(
                      F,
                      {
                        variant: "body2",
                        sx: {
                          color: s ? n.palette.text.primary : n.palette.text.secondary,
                          fontWeight: s ? 600 : 400
                        },
                        children: r.shortLabel ?? r.label
                      }
                    )
                  ]
                }
              ),
              i < e.length - 1 && /* @__PURE__ */ x.jsx(
                L,
                {
                  "aria-hidden": !0,
                  sx: {
                    flex: 1,
                    height: 1,
                    ml: O.sm,
                    mr: O.sm,
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
}, CC = ({
  title: e,
  subtitle: t,
  summaryItems: n,
  actions: r = [],
  footerText: i,
  isBusy: s = !1
}) => /* @__PURE__ */ x.jsx(
  L,
  {
    sx: {
      border: 1,
      borderColor: "divider",
      borderRadius: 2,
      p: O.lg,
      backgroundColor: "background.paper"
    },
    children: /* @__PURE__ */ x.jsxs(ns, { spacing: O.md, children: [
      /* @__PURE__ */ x.jsxs(L, { children: [
        /* @__PURE__ */ x.jsx(F, { variant: "h6", sx: { mb: O.xs }, children: e }),
        t && /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "text.secondary", children: t })
      ] }),
      /* @__PURE__ */ x.jsx(ns, { spacing: O.sm, children: n.map((o) => /* @__PURE__ */ x.jsxs(
        L,
        {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: O.md
          },
          children: [
            /* @__PURE__ */ x.jsxs(
              L,
              {
                sx: { display: "flex", alignItems: "center", gap: O.xs },
                children: [
                  /* @__PURE__ */ x.jsx(Vs, { tone: o.tone ?? "default", size: 8 }),
                  /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "text.secondary", children: o.label })
                ]
              }
            ),
            /* @__PURE__ */ x.jsx(F, { variant: "body2", sx: { fontWeight: 600 }, children: o.value })
          ]
        },
        o.label
      )) }),
      r.length > 0 && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx(yc, {}),
        /* @__PURE__ */ x.jsx(L, { sx: { display: "flex", gap: O.sm, flexWrap: "wrap" }, children: r.map((o) => /* @__PURE__ */ x.jsx(
          Pe,
          {
            variant: "outlined",
            size: "small",
            onClick: o.onClick,
            disabled: s || o.disabled,
            children: o.label
          },
          o.id
        )) })
      ] }),
      i && /* @__PURE__ */ x.jsx(F, { variant: "caption", color: "text.secondary", children: i })
    ] })
  }
), EC = ({ title: e, artist: t, category: n, duration: r, coverUrl: i, isPlaying: s, onPlay: o, t: a }) => {
  const u = de();
  return /* @__PURE__ */ x.jsxs(
    ue.div,
    {
      whileHover: { y: -5 },
      onClick: o,
      style: { cursor: "pointer" },
      children: [
        /* @__PURE__ */ x.jsxs(
          L,
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
              /* @__PURE__ */ x.jsx(
                "img",
                {
                  src: i,
                  alt: e,
                  style: { width: "100%", height: "100%", objectFit: "cover" }
                }
              ),
              /* @__PURE__ */ x.jsx(
                L,
                {
                  sx: {
                    position: "absolute",
                    inset: 0,
                    bgcolor: u.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: s ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": { opacity: 1 }
                  },
                  children: /* @__PURE__ */ x.jsx(
                    L,
                    {
                      sx: {
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: u.palette.action.hover,
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${u.palette.divider}`
                      },
                      children: /* @__PURE__ */ x.jsx(vo, { size: 20, fill: u.palette.common.white, color: u.palette.common.white })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ x.jsx(F, { variant: "h6", sx: { color: u.palette.text.primary, fontWeight: 600, fontSize: "1rem", mb: 0.5 }, children: a(e) }),
        t && /* @__PURE__ */ x.jsx(F, { variant: "subtitle2", sx: { color: u.palette.secondary.main, fontSize: "0.85rem", mb: 0.5, fontWeight: 500 }, children: a(t) }),
        /* @__PURE__ */ x.jsxs(F, { variant: "body2", sx: { color: u.palette.text.secondary }, children: [
          n,
          " • ",
          r
        ] })
      ]
    }
  );
}, _C = ({ name: e, nameKey: t, role: n, bio: r, imageUrl: i, themeColor: s, primaryBadge: o, secondaryMetadata: a, t: u }) => {
  const c = de();
  return /* @__PURE__ */ x.jsxs(
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
        /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsx(
          L,
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
            children: /* @__PURE__ */ x.jsxs(
              ue.div,
              {
                variants: {
                  rest: { y: 20 },
                  hover: { y: 0 }
                },
                transition: { duration: 0.3 },
                children: [
                  /* @__PURE__ */ x.jsx(
                    F,
                    {
                      variant: "h5",
                      sx: {
                        fontWeight: 700,
                        color: c.palette.text.primary,
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                      },
                      children: u(t)
                    }
                  ),
                  /* @__PURE__ */ x.jsx(
                    F,
                    {
                      variant: "subtitle2",
                      sx: {
                        color: s,
                        fontWeight: 600,
                        mb: 2,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em"
                      },
                      children: u(n)
                    }
                  ),
                  /* @__PURE__ */ x.jsxs(
                    ue.div,
                    {
                      variants: {
                        rest: { opacity: 0, height: 0 },
                        hover: { opacity: 1, height: "auto" }
                      },
                      transition: { duration: 0.3 },
                      children: [
                        /* @__PURE__ */ x.jsx(
                          F,
                          {
                            variant: "body2",
                            sx: {
                              color: c.palette.text.secondary,
                              mb: 2,
                              lineHeight: 1.6
                            },
                            children: u(r)
                          }
                        ),
                        o && /* @__PURE__ */ x.jsx(L, { sx: { mb: 1 }, children: /* @__PURE__ */ x.jsx(
                          F,
                          {
                            variant: "caption",
                            sx: {
                              color: s,
                              fontWeight: 600,
                              letterSpacing: "0.05em",
                              display: "inline-block",
                              px: 1.5,
                              py: 0.5,
                              border: `1px solid ${s}`,
                              borderRadius: 1,
                              backgroundColor: `${s}20`
                            },
                            children: u(o)
                          }
                        ) }),
                        a && /* @__PURE__ */ x.jsx(
                          F,
                          {
                            variant: "caption",
                            sx: {
                              color: c.palette.text.disabled,
                              mb: 2,
                              display: "block",
                              fontStyle: "italic"
                            },
                            children: u(a)
                          }
                        ),
                        /* @__PURE__ */ x.jsx(Xd, { title: u("common.voice_coming_soon"), arrow: !0, children: /* @__PURE__ */ x.jsxs(L, { sx: { display: "flex", alignItems: "center", gap: 1, mt: 1, opacity: 0.7, cursor: "not-allowed" }, children: [
                          /* @__PURE__ */ x.jsx(
                            L,
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
                              children: /* @__PURE__ */ x.jsx(vo, { size: 14, fill: "white" })
                            }
                          ),
                          /* @__PURE__ */ x.jsx(F, { variant: "caption", sx: { color: "rgba(255,255,255,0.5)" }, children: u("common.voice_preview") })
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
}, sS = {
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
}, PC = ({
  isOpen: e,
  mode: t,
  entityType: n,
  entityName: r,
  entitySummary: i,
  approveNote: s,
  rejectNote: o,
  onModeChange: a,
  onApproveNoteChange: u,
  onRejectNoteChange: c,
  onApprove: l,
  onReject: p,
  onCancel: f,
  isLoading: h = !1,
  minRejectNoteLength: d = 4,
  labels: m
}) => {
  const g = de(), y = { ...sS, ...m }, v = t === "reject", w = t === "approve", S = o.trim().length >= d, b = () => {
    l(s), f();
  }, k = () => {
    S && (p(o), f());
  };
  return /* @__PURE__ */ x.jsxs(
    Jd,
    {
      open: e,
      onClose: f,
      maxWidth: "sm",
      fullWidth: !0,
      "aria-labelledby": "review-decision-dialog",
      children: [
        /* @__PURE__ */ x.jsx(Qd, { id: "review-decision-dialog", children: y.title }),
        /* @__PURE__ */ x.jsx($d, { children: /* @__PURE__ */ x.jsxs(ns, { spacing: O.md, sx: { pt: O.md }, children: [
          /* @__PURE__ */ x.jsxs(L, { children: [
            /* @__PURE__ */ x.jsx(
              F,
              {
                variant: "subtitle2",
                sx: { fontWeight: 600, mb: O.xs },
                children: n
              }
            ),
            r && /* @__PURE__ */ x.jsxs(F, { variant: "body2", color: "textSecondary", children: [
              /* @__PURE__ */ x.jsx("strong", { children: "Name:" }),
              " ",
              r
            ] }),
            i && /* @__PURE__ */ x.jsx(
              L,
              {
                sx: {
                  mt: O.xs,
                  p: O.xs,
                  backgroundColor: "background.default",
                  borderRadius: 1,
                  fontFamily: "monospace",
                  fontSize: g.typography.caption.fontSize,
                  maxHeight: 200,
                  overflowY: "auto",
                  wordBreak: "break-word"
                },
                children: /* @__PURE__ */ x.jsx(F, { variant: "body2", component: "pre", sx: { m: 0 }, children: i })
              }
            )
          ] }),
          t === "idle" && /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "textSecondary", children: y.selectAction }),
          w && /* @__PURE__ */ x.jsx(
            Wo,
            {
              label: y.approveNote,
              placeholder: y.approveNotePlaceholder,
              multiline: !0,
              rows: 3,
              value: s,
              onChange: (E) => u(E.target.value),
              fullWidth: !0,
              disabled: h,
              variant: "outlined",
              size: "small"
            }
          ),
          v && /* @__PURE__ */ x.jsx(
            Wo,
            {
              label: y.rejectNote,
              placeholder: y.rejectNotePlaceholder,
              multiline: !0,
              rows: 3,
              value: o,
              onChange: (E) => c(E.target.value),
              fullWidth: !0,
              disabled: h,
              variant: "outlined",
              size: "small",
              error: o.trim().length > 0 && o.trim().length < d,
              helperText: o.trim().length > 0 && o.trim().length < d ? y.noteMinLength : y.noteRequired
            }
          )
        ] }) }),
        /* @__PURE__ */ x.jsxs(Zd, { sx: { p: O.md }, children: [
          t === "idle" && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsx(Pe, { onClick: f, disabled: h, children: y.cancel }),
            /* @__PURE__ */ x.jsx(
              Pe,
              {
                onClick: () => a("approve"),
                variant: "contained",
                color: "success",
                disabled: h,
                children: y.approveLabel
              }
            ),
            /* @__PURE__ */ x.jsx(
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
          w && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsx(Pe, { onClick: () => a("idle"), disabled: h, children: y.back }),
            /* @__PURE__ */ x.jsx(
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
          v && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsx(Pe, { onClick: () => a("idle"), disabled: h, children: y.back }),
            /* @__PURE__ */ x.jsx(
              Pe,
              {
                onClick: k,
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
}, TC = ({
  id: e,
  title: t,
  subtitle: n,
  statusLabel: r,
  statusColor: i,
  lastChecked: s,
  lastCheckedLabel: o,
  isConnectDisabled: a = !1,
  onDelete: u,
  onConnect: c,
  onCheckStatus: l,
  connectLabel: p,
  loadingLabel: f
}) => {
  const { literal: h } = Ye(), [d, m] = ve(!1), [g, y] = ve(!1), v = h["time.last_checked"] || o || "Last checked", w = h["ui.connect"] || p || "Connect", S = h["msg.loading"] || f || "Loading...", b = async () => {
    if (l) {
      m(!0);
      try {
        await l(e);
      } finally {
        m(!1);
      }
    }
  }, k = async () => {
    if (c) {
      y(!0);
      try {
        await c(e);
      } finally {
        y(!1);
      }
    }
  }, T = (() => {
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
  return /* @__PURE__ */ x.jsx(
    ep,
    {
      elevation: 0,
      sx: {
        mb: O.md,
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
          backgroundColor: T
        }
      },
      children: /* @__PURE__ */ x.jsx(tp, { sx: { pl: O.lg }, children: /* @__PURE__ */ x.jsxs(L, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [
        /* @__PURE__ */ x.jsxs(L, { children: [
          /* @__PURE__ */ x.jsx(F, { variant: "h6", fontWeight: "bold", color: "text.primary", children: t }),
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "body2",
              color: "text.secondary",
              sx: { mb: O.md },
              children: n
            }
          ),
          /* @__PURE__ */ x.jsxs(L, { display: "flex", alignItems: "center", gap: O.sm, children: [
            /* @__PURE__ */ x.jsx(
              rs,
              {
                label: r,
                size: "small",
                sx: {
                  bgcolor: `${T}20`,
                  color: T,
                  fontWeight: 700,
                  border: `1px solid ${T}`
                }
              }
            ),
            l && /* @__PURE__ */ x.jsx(
              dt,
              {
                size: "small",
                onClick: b,
                disabled: d,
                sx: { ml: O.sm },
                children: /* @__PURE__ */ x.jsx(
                  wp,
                  {
                    fontSize: "small",
                    sx: {
                      animation: d ? "spin 1s linear infinite" : "none",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" }
                      }
                    }
                  }
                )
              }
            ),
            s && /* @__PURE__ */ x.jsxs(F, { variant: "caption", color: "text.disabled", children: [
              v,
              ": ",
              s
            ] })
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs(L, { display: "flex", gap: 1, children: [
          u && /* @__PURE__ */ x.jsx(
            dt,
            {
              onClick: () => u(e),
              color: "error",
              size: "small",
              children: /* @__PURE__ */ x.jsx(Sp, {})
            }
          ),
          c && /* @__PURE__ */ x.jsx(
            Pe,
            {
              variant: "contained",
              startIcon: !g && /* @__PURE__ */ x.jsx(kp, {}),
              onClick: k,
              disabled: a || g,
              sx: {
                minWidth: 120,
                opacity: a ? 0.6 : 1
              },
              children: g ? S : w
            }
          )
        ] })
      ] }) })
    }
  );
}, oS = 150, AC = ({
  domain: e,
  statusLine: t,
  health: n,
  showDivider: r = !1
}) => {
  const i = de();
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        p: O.md,
        borderTop: r ? 1 : 0,
        borderColor: "divider"
      },
      children: [
        /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "body2Medium",
            sx: {
              width: oS,
              color: i.palette.text.primary
            },
            children: e
          }
        ),
        /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "body2",
            sx: { flexGrow: 1, color: i.palette.text.secondary },
            children: t
          }
        ),
        /* @__PURE__ */ x.jsx(Vs, { tone: n, size: 8 })
      ]
    }
  );
}, RC = ({
  id: e,
  summary: t,
  source: n,
  classification: r
}) => {
  const i = de();
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        p: O.md,
        backgroundColor: i.palette.background.paper,
        border: 1,
        borderColor: "divider",
        borderRadius: O.xs,
        display: "flex",
        alignItems: "center",
        gap: O.md
      },
      children: [
        /* @__PURE__ */ x.jsx(
          L,
          {
            sx: {
              background: i.palette.divider,
              borderRadius: O.internal,
              px: O.sm,
              py: O.internal
            },
            children: /* @__PURE__ */ x.jsx(
              F,
              {
                variant: "monoBody",
                sx: { color: i.palette.text.secondary },
                children: e
              }
            )
          }
        ),
        /* @__PURE__ */ x.jsxs(L, { sx: { flexGrow: 1 }, children: [
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "body2Bold",
              sx: { color: i.palette.text.primary },
              children: t
            }
          ),
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "caption",
              sx: { color: i.palette.text.secondary },
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx(Ec, { level: r })
      ]
    }
  );
}, aS = {
  ERROR: "error.main",
  WARN: "warning.main",
  INFO: "success.main"
}, LC = ({
  logs: e,
  emptyMessage: t,
  bottomRef: n
}) => {
  const { literal: r } = Ye(), i = r["viewer.waiting_logs"] || "Waiting for logs...", s = t || i;
  return /* @__PURE__ */ x.jsxs(
    $t,
    {
      elevation: 0,
      sx: {
        height: "100%",
        bgcolor: "background.paper",
        color: "text.primary",
        p: O.md,
        overflow: "auto",
        fontFamily: '"IBM Plex Mono", "Menlo", monospace',
        fontSize: "0.8125rem",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1
      },
      children: [
        e.length === 0 && /* @__PURE__ */ x.jsx(F, { sx: { color: "text.disabled", fontStyle: "italic" }, children: s }),
        e.map((o) => /* @__PURE__ */ x.jsxs(
          L,
          {
            sx: { display: "flex", gap: O.md, mb: O.xs },
            children: [
              /* @__PURE__ */ x.jsx(
                F,
                {
                  component: "span",
                  sx: { color: "text.secondary", minWidth: 90, opacity: 0.7 },
                  children: o.timestamp
                }
              ),
              /* @__PURE__ */ x.jsx(
                F,
                {
                  component: "span",
                  sx: {
                    color: aS[o.level] || "text.secondary",
                    fontWeight: "bold",
                    minWidth: 60
                  },
                  children: o.level
                }
              ),
              /* @__PURE__ */ x.jsx(F, { component: "span", sx: { whiteSpace: "pre-wrap", flex: 1 }, children: o.message })
            ]
          },
          o.id
        )),
        n && /* @__PURE__ */ x.jsx("div", { ref: n })
      ]
    }
  );
}, IC = ({
  phase: e,
  title: t,
  description: n,
  category: r,
  status: i,
  tags: s,
  alignRight: o = !1,
  t: a
}) => {
  const u = de(), c = (l) => {
    switch (l) {
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
  return /* @__PURE__ */ x.jsx(
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
      children: /* @__PURE__ */ x.jsxs(
        L,
        {
          sx: {
            display: "flex",
            justifyContent: {
              xs: "flex-start",
              md: o ? "flex-end" : "flex-start"
            },
            width: "100%",
            position: "relative",
            pl: { xs: 6, md: o ? "50%" : 0 },
            pr: { xs: 0, md: o ? 0 : "50%" },
            boxSizing: "border-box"
          },
          children: [
            /* @__PURE__ */ x.jsx(
              L,
              {
                sx: {
                  position: "absolute",
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: o ? "secondary.main" : "primary.main",
                  boxShadow: `0 0 10px ${u.palette.mode === "dark" ? u.palette.common.white : u.palette.common.black}`,
                  zIndex: 2,
                  left: { xs: -28, md: "50%" },
                  transform: { xs: "none", md: "translateX(-50%)" }
                }
              }
            ),
            /* @__PURE__ */ x.jsxs(
              $t,
              {
                elevation: 4,
                sx: {
                  width: { xs: "auto", md: "80%" },
                  maxWidth: { xs: "100%", md: 450 },
                  p: O.lg,
                  bgcolor: "background.paper",
                  borderLeft: {
                    xs: `4px solid ${u.palette.primary.main}`,
                    md: o ? "none" : `4px solid ${u.palette.primary.main}`
                  },
                  borderRight: {
                    xs: "none",
                    md: o ? `4px solid ${u.palette.secondary.main}` : "none"
                  },
                  borderRadius: O.internal,
                  position: "relative",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)"
                  },
                  ml: { xs: 0, md: o ? 0 : "auto" },
                  mr: { xs: 0, md: o ? "auto" : 0 }
                },
                children: [
                  /* @__PURE__ */ x.jsxs(
                    L,
                    {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                        flexWrap: "wrap"
                      },
                      children: [
                        /* @__PURE__ */ x.jsxs(
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
                        /* @__PURE__ */ x.jsx(
                          rs,
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
                  /* @__PURE__ */ x.jsx(
                    F,
                    {
                      variant: "h5",
                      component: "h3",
                      sx: { fontWeight: 800, my: 1, fontFamily: '"Outfit", sans-serif' },
                      children: a(t)
                    }
                  ),
                  /* @__PURE__ */ x.jsx(F, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: a(n) }),
                  s && s.length > 0 && /* @__PURE__ */ x.jsx(L, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }, children: s.map((l) => /* @__PURE__ */ x.jsx(
                    rs,
                    {
                      label: a(l),
                      variant: "outlined",
                      size: "small"
                    },
                    l
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
  return /* @__PURE__ */ x.jsx(Cc, { onClick: n, "aria-label": "Toggle theme", children: t ? /* @__PURE__ */ x.jsx(Pp, {}) : /* @__PURE__ */ x.jsx(Tp, {}) });
}, OC = ({
  handleDrawerToggle: e,
  title: t,
  themeContext: n
}) => /* @__PURE__ */ x.jsx(
  Cp,
  {
    position: "fixed",
    elevation: 0,
    sx: { zIndex: (r) => r.zIndex.drawer + 1 },
    children: /* @__PURE__ */ x.jsxs(kc, { children: [
      /* @__PURE__ */ x.jsx(
        Cc,
        {
          color: "inherit",
          "aria-label": "open drawer",
          edge: "start",
          onClick: e,
          sx: { mr: O.md, display: { sm: "none" } },
          children: /* @__PURE__ */ x.jsx(Ep, {})
        }
      ),
      /* @__PURE__ */ x.jsx(_p, { variant: "h4", noWrap: !0, component: "div", sx: { flexGrow: 1, fontWeight: 600 }, children: t }),
      /* @__PURE__ */ x.jsx(lS, { themeContext: n })
    ] })
  }
), MC = ({
  entries: e,
  selectedVersion: t,
  latestVersion: n,
  onVersionChange: r,
  versionPrefix: i = "v",
  latestLabel: s = "Latest",
  availableLabel: o = "available"
}) => {
  const a = de();
  if (!e || e.length <= 1)
    return null;
  const u = [...e].sort((l, p) => p.version - l.version), c = (l) => {
    try {
      return new Date(l).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return l;
    }
  };
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: O.md,
        p: O.sm,
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: a.palette.mode === "dark" ? "background.paper" : "grey.50"
      },
      children: [
        /* @__PURE__ */ x.jsx(F, { variant: "body2", fontWeight: "medium", children: "Version:" }),
        /* @__PURE__ */ x.jsx(np, { size: "small", sx: { minWidth: 200 }, children: /* @__PURE__ */ x.jsx(
          rp,
          {
            value: t,
            onChange: (l) => r(Number(l.target.value)),
            sx: { fontSize: "0.875rem" },
            children: u.map((l) => /* @__PURE__ */ x.jsx(wc, { value: l.version, children: /* @__PURE__ */ x.jsxs(L, { children: [
              /* @__PURE__ */ x.jsxs(F, { variant: "body2", children: [
                i,
                l.version,
                l.version === n && /* @__PURE__ */ x.jsxs(
                  F,
                  {
                    component: "span",
                    variant: "caption",
                    sx: { ml: 1, color: "success.main", fontWeight: "bold" },
                    children: [
                      "(",
                      s,
                      ")"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ x.jsx(F, { variant: "caption", color: "text.secondary", children: c(l.createdAt) })
            ] }) }, l.version))
          }
        ) }),
        /* @__PURE__ */ x.jsxs(F, { variant: "caption", color: "text.secondary", children: [
          u.length,
          " version",
          u.length !== 1 ? "s" : "",
          " ",
          o
        ] })
      ]
    }
  );
}, DC = ({ activeIndex: e, totalSteps: t, sx: n }) => {
  const r = de();
  return /* @__PURE__ */ x.jsxs(
    L,
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
        /* @__PURE__ */ x.jsx(
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
        Array.from({ length: t }).map((i, s) => /* @__PURE__ */ x.jsx(
          L,
          {
            sx: {
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: s <= e ? "primary.main" : r.palette.action.disabled,
              zIndex: 2,
              transition: "background-color 0.3s ease",
              boxShadow: s === e ? `0 0 10px ${r.palette.primary.main}` : "none"
            }
          },
          s
        ))
      ]
    }
  );
}, Ui = (e, t, n) => e.length === 0 ? /* @__PURE__ */ x.jsx(
  F,
  {
    variant: "body2",
    sx: { color: n, fontStyle: "italic" },
    children: t
  }
) : /* @__PURE__ */ x.jsx(
  L,
  {
    component: "ul",
    sx: { m: 0, pl: O.lg, color: "text.primary", typography: "body2" },
    children: e.map((r, i) => /* @__PURE__ */ x.jsx(
      L,
      {
        component: "li",
        sx: { mb: O.internal },
        children: r
      },
      `${r}-${i}`
    ))
  }
), jC = ({
  owner: e,
  domain: t,
  customMetricLabel: n,
  customMetricValue: r,
  improvements: i,
  slips: s,
  risks: o,
  labels: a
}) => {
  const u = de();
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        backgroundColor: u.palette.background.paper,
        border: 1,
        borderColor: "divider",
        borderRadius: O.xs,
        p: O.lg,
        display: "flex",
        flexDirection: "column",
        gap: O.md
      },
      children: [
        /* @__PURE__ */ x.jsxs(
          L,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: O.sm,
              borderBottom: 1,
              borderColor: "divider"
            },
            children: [
              /* @__PURE__ */ x.jsxs(L, { children: [
                /* @__PURE__ */ x.jsx(
                  F,
                  {
                    variant: "h5",
                    sx: { color: u.palette.text.primary },
                    children: e
                  }
                ),
                /* @__PURE__ */ x.jsx(
                  F,
                  {
                    variant: "micro",
                    sx: { color: u.palette.text.secondary },
                    children: t
                  }
                )
              ] }),
              !!n && /* @__PURE__ */ x.jsxs(L, { sx: { textAlign: "right" }, children: [
                /* @__PURE__ */ x.jsx(
                  F,
                  {
                    variant: "micro",
                    sx: {
                      color: u.palette.text.secondary,
                      textTransform: "uppercase"
                    },
                    children: n
                  }
                ),
                /* @__PURE__ */ x.jsx(
                  F,
                  {
                    variant: "h6",
                    sx: {
                      color: u.palette.primary.main,
                      fontVariantNumeric: "tabular-nums"
                    },
                    children: r
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ x.jsxs(L, { children: [
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "captionBold",
              sx: {
                color: u.palette.success.main,
                mb: O.internal,
                display: "block"
              },
              children: a.improvedTitle
            }
          ),
          Ui(
            i,
            a.emptyImproved,
            u.palette.text.secondary
          )
        ] }),
        /* @__PURE__ */ x.jsxs(L, { children: [
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "captionBold",
              sx: {
                color: u.palette.warning.main,
                mb: O.internal,
                display: "block"
              },
              children: a.slipsTitle
            }
          ),
          Ui(
            s,
            a.emptySlips,
            u.palette.text.secondary
          )
        ] }),
        /* @__PURE__ */ x.jsxs(L, { children: [
          /* @__PURE__ */ x.jsx(
            F,
            {
              variant: "captionBold",
              sx: {
                color: u.palette.error.main,
                mb: O.internal,
                display: "block"
              },
              children: a.risksTitle
            }
          ),
          Ui(
            o,
            a.emptyRisks,
            u.palette.text.secondary
          )
        ] })
      ]
    }
  );
};
var Gt = /* @__PURE__ */ ((e) => (e[e.INIT = 0] = "INIT", e[e.LOADING = 1] = "LOADING", e[e.COMPLETED = 2] = "COMPLETED", e))(Gt || {}), At = /* @__PURE__ */ ((e) => (e[e.SUCCESS = 200] = "SUCCESS", e[e.CREATED = 201] = "CREATED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.INTERNET_ERROR = 0] = "INTERNET_ERROR", e[e.IDLE = 1e3] = "IDLE", e))(At || {});
function NC(e, t) {
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
const FC = ({
  appState: e,
  SuccessComponent: t,
  children: n,
  emptyCondition: r,
  errorMessage: i
}) => {
  const { state: s, isError: o, isSuccess: a, data: u, status: c } = e;
  if (s === Gt.LOADING)
    return /* @__PURE__ */ x.jsx(Op, {});
  if (o || c === At.INTERNET_ERROR)
    return /* @__PURE__ */ x.jsx(Mp, { message: i });
  if (a && u !== null) {
    if (r?.(u))
      return /* @__PURE__ */ x.jsx($o, {});
    if (n)
      return /* @__PURE__ */ x.jsx(x.Fragment, { children: n });
    if (t)
      return /* @__PURE__ */ x.jsx(t, { appState: e });
  }
  return /* @__PURE__ */ x.jsx($o, {});
}, su = (e) => /* @__PURE__ */ x.jsx(
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
), BC = ({
  title: e,
  subtitle: t,
  primaryAction: n,
  secondaryAction: r,
  leadingMeta: i,
  trailingMeta: s
}) => /* @__PURE__ */ x.jsxs(
  L,
  {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      mb: O.xl,
      gap: O.md,
      flexWrap: "wrap"
    },
    children: [
      /* @__PURE__ */ x.jsxs(L, { children: [
        /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "h2",
            sx: { color: "text.primary", mb: O.xs, fontWeight: 600 },
            children: e
          }
        ),
        t && /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "body1",
            sx: { color: "text.secondary" },
            children: t
          }
        ),
        i
      ] }),
      /* @__PURE__ */ x.jsxs(
        L,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: O.md,
            flexWrap: "wrap"
          },
          children: [
            s,
            r && su(r),
            n && su(n)
          ]
        }
      )
    ]
  }
), VC = ({ title: e, lines: t }) => /* @__PURE__ */ x.jsxs(
  L,
  {
    sx: {
      p: O.lg,
      border: 1,
      borderColor: "divider",
      borderRadius: 1,
      backgroundColor: "background.paper"
    },
    children: [
      /* @__PURE__ */ x.jsx(
        F,
        {
          variant: "h4",
          sx: { color: "text.primary", mb: O.sm, fontWeight: 600 },
          children: e
        }
      ),
      t.map((n, r) => /* @__PURE__ */ x.jsx(
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
), te = {
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
  const [r, i] = ve(""), s = e.length, o = t / s;
  return mt(() => {
    let a = 0;
    const u = setTimeout(() => {
      const c = setInterval(() => {
        a++, i(e.slice(0, a)), a >= s && clearInterval(c);
      }, o);
      return () => clearInterval(c);
    }, n);
    return () => clearTimeout(u);
  }, [e, s, o, n]), /* @__PURE__ */ x.jsxs(
    F,
    {
      variant: "h1",
      fontWeight: 600,
      color: "text.primary",
      sx: { letterSpacing: "-0.02em", lineHeight: 1.2 },
      children: [
        r,
        /* @__PURE__ */ x.jsx(
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
}, zC = ({
  headline: e,
  description: t,
  primaryActionLabel: n,
  onPrimaryAction: r,
  children: i,
  enableAnimation: s = !0,
  animationVariant: o = "fade-up",
  animationDuration: a = 600,
  animationDelay: u = 0,
  animationStagger: c = 100
}) => {
  const l = uS[o], p = s && l, f = o === "typewriter", h = {
    duration: a / 1e3,
    ease: "easeOut",
    delay: u / 1e3
  };
  return /* @__PURE__ */ x.jsxs(
    L,
    {
      sx: {
        py: O.xxl,
        px: O.xl,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: O.lg,
        maxWidth: "800px"
      },
      children: [
        p && !f ? /* @__PURE__ */ x.jsx(ue.div, { initial: l.initial, animate: l.animate, transition: h, children: /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "h1",
            fontWeight: 600,
            color: "text.primary",
            sx: { letterSpacing: "-0.02em", lineHeight: 1.2 },
            children: e
          }
        ) }) : f ? /* @__PURE__ */ x.jsx(cS, { text: e, duration: a, delay: u }) : /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "h1",
            fontWeight: 600,
            color: "text.primary",
            sx: { letterSpacing: "-0.02em", lineHeight: 1.2 },
            children: e
          }
        ),
        t && (p && !f ? /* @__PURE__ */ x.jsx(
          ue.div,
          {
            initial: l.initial,
            animate: l.animate,
            transition: { ...h, delay: (u + a) / 1e3 },
            children: /* @__PURE__ */ x.jsx(
              F,
              {
                variant: "body1",
                color: "text.secondary",
                sx: { maxWidth: "600px", lineHeight: 1.6 },
                children: t
              }
            )
          }
        ) : /* @__PURE__ */ x.jsx(
          F,
          {
            variant: "body1",
            color: "text.secondary",
            sx: { maxWidth: "600px", lineHeight: 1.6 },
            children: t
          }
        )),
        n && (p ? /* @__PURE__ */ x.jsx(
          ue.div,
          {
            initial: l.initial,
            animate: l.animate,
            transition: { ...h, delay: (u + a * 1.5) / 1e3 },
            children: /* @__PURE__ */ x.jsx(
              Pe,
              {
                variant: "contained",
                color: "primary",
                size: "large",
                onClick: r,
                disableElevation: !0,
                sx: {
                  backgroundColor: te.primary,
                  color: "#fff",
                  borderRadius: 1,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: te.primaryHover
                  }
                },
                children: n
              }
            )
          }
        ) : /* @__PURE__ */ x.jsx(
          Pe,
          {
            variant: "contained",
            color: "primary",
            size: "large",
            onClick: r,
            disableElevation: !0,
            sx: {
              backgroundColor: te.primary,
              color: "#fff",
              borderRadius: 1,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: te.primaryHover
              }
            },
            children: n
          }
        )),
        i && (p ? /* @__PURE__ */ x.jsx(
          ue.div,
          {
            initial: l.initial,
            animate: l.animate,
            transition: { ...h, delay: (u + a * 2) / 1e3 },
            style: { marginTop: O.xs, width: "100%" },
            children: i
          }
        ) : /* @__PURE__ */ x.jsx(L, { sx: { mt: O.xs, width: "100%" }, children: i }))
      ]
    }
  );
}, hS = () => ({
  state: Gt.INIT,
  isError: !1,
  isSuccess: !1,
  status: At.IDLE,
  statusMessage: "",
  data: null
});
function UC(e = {}) {
  const [t, n] = ve({
    ...hS(),
    ...e
  });
  return [t, async (i) => {
    n((s) => ({ ...s, state: Gt.LOADING }));
    try {
      const s = await i();
      n((o) => ({
        ...o,
        state: Gt.COMPLETED,
        isError: s.isError,
        isSuccess: s.isSuccess,
        status: s.status,
        statusMessage: s.statusMessage,
        data: s.data || null
      }));
    } catch {
      n((o) => ({
        ...o,
        state: Gt.COMPLETED,
        isError: !0,
        status: At.INTERNAL_SERVER_ERROR,
        statusMessage: "An unexpected error occurred.",
        data: null
      }));
    }
  }, n];
}
const HC = () => {
  const { currentLanguage: e, setCurrentLanguage: t, availableLanguages: n } = Ye(), [r, i] = ve(null), s = !!r, o = (l) => {
    i(l.currentTarget);
  }, a = () => {
    i(null);
  }, u = (l) => {
    t(l), a();
  }, c = n.find((l) => l.code === e)?.label || "Language";
  return /* @__PURE__ */ x.jsxs(L, { children: [
    /* @__PURE__ */ x.jsx(
      Pe,
      {
        id: "language-button",
        "aria-controls": s ? "language-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": s ? "true" : void 0,
        onClick: o,
        startIcon: /* @__PURE__ */ x.jsx(Ap, {}),
        color: "inherit",
        children: c
      }
    ),
    /* @__PURE__ */ x.jsx(
      ip,
      {
        id: "language-menu",
        anchorEl: r,
        open: s,
        onClose: a,
        "aria-labelledby": "language-button",
        children: n.map((l) => /* @__PURE__ */ x.jsx(
          wc,
          {
            selected: l.code === e,
            onClick: () => u(l.code),
            children: l.label
          },
          l.code
        ))
      }
    )
  ] });
};
function qC({
  children: e,
  translations: t,
  availableLanguages: n,
  defaultLanguage: r = "en"
}) {
  const [i, s] = ve(r), [o, a] = ve(t[r] || {});
  mt(() => {
    a(t[i] || {});
  }, [i, t]);
  const u = {
    currentLanguage: i,
    setCurrentLanguage: s,
    literal: o,
    availableLanguages: n
  };
  return /* @__PURE__ */ x.jsx(_c.Provider, { value: u, children: e });
}
function Vf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fS } = Object.prototype, { getPrototypeOf: Mo } = Object, { iterator: ci, toStringTag: zf } = Symbol, hi = /* @__PURE__ */ ((e) => (t) => {
  const n = fS.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xe = (e) => (e = e.toLowerCase(), (t) => hi(t) === e), fi = (e) => (t) => typeof t === e, { isArray: on } = Array, Qt = fi("undefined");
function qn(e) {
  return e !== null && !Qt(e) && e.constructor !== null && !Qt(e.constructor) && Re(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Uf = Xe("ArrayBuffer");
function dS(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Uf(e.buffer), t;
}
const pS = fi("string"), Re = fi("function"), Hf = fi("number"), Wn = (e) => e !== null && typeof e == "object", mS = (e) => e === !0 || e === !1, Mr = (e) => {
  if (hi(e) !== "object")
    return !1;
  const t = Mo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(zf in e) && !(ci in e);
}, gS = (e) => {
  if (!Wn(e) || qn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, yS = Xe("Date"), xS = Xe("File"), vS = (e) => !!(e && typeof e.uri < "u"), bS = (e) => e && typeof e.getParts < "u", SS = Xe("Blob"), wS = Xe("FileList"), kS = (e) => Wn(e) && Re(e.pipe);
function CS() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ou = CS(), au = typeof ou.FormData < "u" ? ou.FormData : void 0, ES = (e) => {
  let t;
  return e && (au && e instanceof au || Re(e.append) && ((t = hi(e)) === "formdata" || // detect form-data instance
  t === "object" && Re(e.toString) && e.toString() === "[object FormData]"));
}, _S = Xe("URLSearchParams"), [PS, TS, AS, RS] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Xe), LS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), on(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    if (qn(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let a;
    for (r = 0; r < o; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function qf(e, t) {
  if (qn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const _t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Wf = (e) => !Qt(e) && e !== _t;
function Rs() {
  const { caseless: e, skipUndefined: t } = Wf(this) && this || {}, n = {}, r = (i, s) => {
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    const o = e && qf(n, s) || s;
    Mr(n[o]) && Mr(i) ? n[o] = Rs(n[o], i) : Mr(i) ? n[o] = Rs({}, i) : on(i) ? n[o] = i.slice() : (!t || !Qt(i)) && (n[o] = i);
  };
  for (let i = 0, s = arguments.length; i < s; i++)
    arguments[i] && Gn(arguments[i], r);
  return n;
}
const IS = (e, t, n, { allOwnKeys: r } = {}) => (Gn(
  t,
  (i, s) => {
    n && Re(i) ? Object.defineProperty(e, s, {
      value: Vf(i, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, s, {
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
}, DS = (e, t, n, r) => {
  let i, s, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      o = i[s], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && Mo(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, jS = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, NS = (e) => {
  if (!e) return null;
  if (on(e)) return e;
  let t = e.length;
  if (!Hf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, FS = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Mo(Uint8Array)), BS = (e, t) => {
  const r = (e && e[ci]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, VS = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, zS = Xe("HTMLFormElement"), US = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
  return r.toUpperCase() + i;
}), lu = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), HS = Xe("RegExp"), Gf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Gn(n, (i, s) => {
    let o;
    (o = t(i, s, e)) !== !1 && (r[s] = o || i);
  }), Object.defineProperties(e, r);
}, qS = (e) => {
  Gf(e, (t, n) => {
    if (Re(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Re(r)) {
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
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return on(e) ? r(e) : r(String(e).split(t)), n;
}, GS = () => {
}, KS = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function YS(e) {
  return !!(e && Re(e.append) && e[zf] === "FormData" && e[ci]);
}
const XS = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (Wn(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (qn(r))
        return r;
      if (!("toJSON" in r)) {
        t[i] = r;
        const s = on(r) ? [] : {};
        return Gn(r, (o, a) => {
          const u = n(o, i + 1);
          !Qt(u) && (s[a] = u);
        }), t[i] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, JS = Xe("AsyncFunction"), QS = (e) => e && (Wn(e) || Re(e)) && Re(e.then) && Re(e.catch), Kf = ((e, t) => e ? setImmediate : t ? ((n, r) => (_t.addEventListener(
  "message",
  ({ source: i, data: s }) => {
    i === _t && s === n && r.length && r.shift()();
  },
  !1
), (i) => {
  r.push(i), _t.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Re(_t.postMessage)), $S = typeof queueMicrotask < "u" ? queueMicrotask.bind(_t) : typeof process < "u" && process.nextTick || Kf, ZS = (e) => e != null && Re(e[ci]), P = {
  isArray: on,
  isArrayBuffer: Uf,
  isBuffer: qn,
  isFormData: ES,
  isArrayBufferView: dS,
  isString: pS,
  isNumber: Hf,
  isBoolean: mS,
  isObject: Wn,
  isPlainObject: Mr,
  isEmptyObject: gS,
  isReadableStream: PS,
  isRequest: TS,
  isResponse: AS,
  isHeaders: RS,
  isUndefined: Qt,
  isDate: yS,
  isFile: xS,
  isReactNativeBlob: vS,
  isReactNative: bS,
  isBlob: SS,
  isRegExp: HS,
  isFunction: Re,
  isStream: kS,
  isURLSearchParams: _S,
  isTypedArray: FS,
  isFileList: wS,
  forEach: Gn,
  merge: Rs,
  extend: IS,
  trim: LS,
  stripBOM: OS,
  inherits: MS,
  toFlatObject: DS,
  kindOf: hi,
  kindOfTest: Xe,
  endsWith: jS,
  toArray: NS,
  forEachEntry: BS,
  matchAll: VS,
  isHTMLForm: zS,
  hasOwnProperty: lu,
  hasOwnProp: lu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gf,
  freezeMethods: qS,
  toObjectSet: WS,
  toCamelCase: US,
  noop: GS,
  toFiniteNumber: KS,
  findKey: qf,
  global: _t,
  isContextDefined: Wf,
  isSpecCompliantForm: YS,
  toJSONObject: XS,
  isAsyncFn: JS,
  isThenable: QS,
  setImmediate: Kf,
  asap: $S,
  isIterable: ZS
};
let K = class Yf extends Error {
  static from(t, n, r, i, s, o) {
    const a = new Yf(t.message, n || t.code, r, i, s);
    return a.cause = t, a.name = t.name, t.status != null && a.status == null && (a.status = t.status), o && Object.assign(a, o), a;
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
  constructor(t, n, r, i, s) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), i && (this.request = i), s && (this.response = s, this.status = s.status);
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
K.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
K.ERR_BAD_OPTION = "ERR_BAD_OPTION";
K.ECONNABORTED = "ECONNABORTED";
K.ETIMEDOUT = "ETIMEDOUT";
K.ERR_NETWORK = "ERR_NETWORK";
K.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
K.ERR_DEPRECATED = "ERR_DEPRECATED";
K.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
K.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
K.ERR_CANCELED = "ERR_CANCELED";
K.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
K.ERR_INVALID_URL = "ERR_INVALID_URL";
const ew = null;
function Ls(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Xf(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hi(e, t, n) {
  return e ? e.concat(t).map(function(i, s) {
    return i = Xf(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function tw(e) {
  return P.isArray(e) && !e.some(Ls);
}
const nw = P.toFlatObject(P, {}, null, function(t) {
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
  const r = n.metaTokens, i = n.visitor || l, s = n.dots, o = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
  if (!P.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (P.isDate(d))
      return d.toISOString();
    if (P.isBoolean(d))
      return d.toString();
    if (!u && P.isBlob(d))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(d) || P.isTypedArray(d) ? u && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, g) {
    let y = d;
    if (P.isReactNative(t) && P.isReactNativeBlob(d))
      return t.append(Hi(g, m, s), c(d)), !1;
    if (d && !g && typeof d == "object") {
      if (P.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (P.isArray(d) && tw(d) || (P.isFileList(d) || P.endsWith(m, "[]")) && (y = P.toArray(d)))
        return m = Xf(m), y.forEach(function(w, S) {
          !(P.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Hi([m], S, s) : o === null ? m : m + "[]",
            c(w)
          );
        }), !1;
    }
    return Ls(d) ? !0 : (t.append(Hi(g, m, s), c(d)), !1);
  }
  const p = [], f = Object.assign(nw, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Ls
  });
  function h(d, m) {
    if (!P.isUndefined(d)) {
      if (p.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(d), P.forEach(d, function(y, v) {
        (!(P.isUndefined(y) || y === null) && i.call(t, y, P.isString(v) ? v.trim() : v, m, f)) === !0 && h(y, m ? m.concat(v) : [v]);
      }), p.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function uu(e) {
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
function Do(e, t) {
  this._pairs = [], e && di(e, this, t);
}
const Jf = Do.prototype;
Jf.append = function(t, n) {
  this._pairs.push([t, n]);
};
Jf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, uu);
  } : uu;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function rw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Qf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || rw, i = P.isFunction(n) ? {
    serialize: n
  } : n, s = i && i.serialize;
  let o;
  if (s ? o = s(t, i) : o = P.isURLSearchParams(t) ? t.toString() : new Do(t, i).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class cu {
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
const jo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, iw = typeof URLSearchParams < "u" ? URLSearchParams : Do, sw = typeof FormData < "u" ? FormData : null, ow = typeof Blob < "u" ? Blob : null, aw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: iw,
    FormData: sw,
    Blob: ow
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, No = typeof window < "u" && typeof document < "u", Is = typeof navigator == "object" && navigator || void 0, lw = No && (!Is || ["ReactNative", "NativeScript", "NS"].indexOf(Is.product) < 0), uw = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", cw = No && window.location.href || "http://localhost", hw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: No,
  hasStandardBrowserEnv: lw,
  hasStandardBrowserWebWorkerEnv: uw,
  navigator: Is,
  origin: cw
}, Symbol.toStringTag, { value: "Module" })), Se = {
  ...hw,
  ...aw
};
function fw(e, t) {
  return di(e, new Se.classes.URLSearchParams(), {
    visitor: function(n, r, i, s) {
      return Se.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function dw(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function pw(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function $f(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), u = s >= n.length;
    return o = !o && P.isArray(i) ? i.length : o, u ? (P.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !a) : ((!i[o] || !P.isObject(i[o])) && (i[o] = []), t(n, r, i[o], s) && P.isArray(i[o]) && (i[o] = pw(i[o])), !a);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, i) => {
      t(dw(r), i, n, 0);
    }), n;
  }
  return null;
}
function mw(e, t, n) {
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
  transitional: jo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = P.isObject(t);
      if (s && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
        return i ? JSON.stringify($f(t)) : t;
      if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
        return t;
      if (P.isArrayBufferView(t))
        return t.buffer;
      if (P.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return fw(t, this.formSerializer).toString();
        if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return di(
            a ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), mw(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || Kn.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t))
        return t;
      if (t && P.isString(t) && (r && !this.responseType || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError" ? K.from(a, K.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Se.classes.FormData,
    Blob: Se.classes.Blob
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
const gw = P.toObjectSet([
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
]), yw = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && gw[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, hu = /* @__PURE__ */ Symbol("internals"), xw = (e) => !/[\r\n]/.test(e);
function Zf(e, t) {
  if (!(e === !1 || e == null)) {
    if (P.isArray(e)) {
      e.forEach((n) => Zf(n, t));
      return;
    }
    if (!xw(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function gn(e) {
  return e && String(e).trim().toLowerCase();
}
function vw(e) {
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
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Dr) : vw(String(e));
}
function bw(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Sw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function qi(e, t, n, r, i) {
  if (P.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function ww(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function kw(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, s, o) {
        return this[r].call(this, t, i, s, o);
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
    function s(a, u, c) {
      const l = gn(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = P.findKey(i, l);
      (!p || i[p] === void 0 || c === !0 || c === void 0 && i[p] !== !1) && (Zf(a, u), i[p || u] = Dr(a));
    }
    const o = (a, u) => P.forEach(a, (c, l) => s(c, l, u));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (P.isString(t) && (t = t.trim()) && !Sw(t))
      o(yw(t), n);
    else if (P.isObject(t) && P.isIterable(t)) {
      let a = {}, u, c;
      for (const l of t) {
        if (!P.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = l[0]] = (u = a[c]) ? P.isArray(u) ? [...u, l[1]] : [u, l[1]] : l[1];
      }
      o(a, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = gn(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return bw(i);
        if (P.isFunction(n))
          return n.call(this, i, r);
        if (P.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = gn(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || qi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (o = gn(o), o) {
        const a = P.findKey(r, o);
        a && (!n || qi(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return P.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || qi(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return P.forEach(this, (i, s) => {
      const o = P.findKey(r, s);
      if (o) {
        n[o] = Dr(i), delete n[s];
        return;
      }
      const a = t ? ww(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Dr(i), r[a] = !0;
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
    const r = (this[hu] = this[hu] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const a = gn(o);
      r[a] || (kw(i, o), r[a] = !0);
    }
    return P.isArray(t) ? t.forEach(s) : s(t), this;
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
function Wi(e, t) {
  const n = this || Kn, r = t || n, i = Le.from(r.headers);
  let s = r.data;
  return P.forEach(e, function(a) {
    s = a.call(n, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function ed(e) {
  return !!(e && e.__CANCEL__);
}
let Yn = class extends K {
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
    super(t ?? "canceled", K.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function td(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(
    new K(
      "Request failed with status code " + n.status,
      [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function Cw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ew(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), l = r[s];
    o || (o = c), n[i] = u, r[i] = c;
    let p = s, f = 0;
    for (; p !== i; )
      f += n[p++], p = p % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), c - o < t)
      return;
    const h = l && c - l;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function _w(e, t) {
  let n = 0, r = 1e3 / t, i, s;
  const o = (c, l = Date.now()) => {
    n = l, i = null, s && (clearTimeout(s), s = null), e(...c);
  };
  return [(...c) => {
    const l = Date.now(), p = l - n;
    p >= r ? o(c, l) : (i = c, s || (s = setTimeout(() => {
      s = null, o(i);
    }, r - p)));
  }, () => i && o(i)];
}
const Qr = (e, t, n = 3) => {
  let r = 0;
  const i = Ew(50, 250);
  return _w((s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, u = o - r, c = i(u), l = o <= a;
    r = o;
    const p = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && a && l ? (a - o) / c : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, fu = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, du = (e) => (...t) => P.asap(() => e(...t)), Pw = Se.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Se.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Se.origin),
  Se.navigator && /(msie|trident)/i.test(Se.navigator.userAgent)
) : () => !0, Tw = Se.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, s, o) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      P.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), P.isString(r) && a.push(`path=${r}`), P.isString(i) && a.push(`domain=${i}`), s === !0 && a.push("secure"), P.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
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
function Aw(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Rw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nd(e, t, n) {
  let r = !Aw(t);
  return e && (r || n == !1) ? Rw(e, t) : t;
}
const pu = (e) => e instanceof Le ? { ...e } : e;
function Rt(e, t) {
  t = t || {};
  const n = {};
  function r(c, l, p, f) {
    return P.isPlainObject(c) && P.isPlainObject(l) ? P.merge.call({ caseless: f }, c, l) : P.isPlainObject(l) ? P.merge({}, l) : P.isArray(l) ? l.slice() : l;
  }
  function i(c, l, p, f) {
    if (P.isUndefined(l)) {
      if (!P.isUndefined(c))
        return r(void 0, c, p, f);
    } else return r(c, l, p, f);
  }
  function s(c, l) {
    if (!P.isUndefined(l))
      return r(void 0, l);
  }
  function o(c, l) {
    if (P.isUndefined(l)) {
      if (!P.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, l);
  }
  function a(c, l, p) {
    if (p in t)
      return r(c, l);
    if (p in e)
      return r(void 0, c);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, l, p) => i(pu(c), pu(l), p, !0)
  };
  return P.forEach(Object.keys({ ...e, ...t }), function(l) {
    if (l === "__proto__" || l === "constructor" || l === "prototype") return;
    const p = P.hasOwnProp(u, l) ? u[l] : i, f = p(e[l], t[l], l);
    P.isUndefined(f) && p !== a || (n[l] = f);
  }), n;
}
const rd = (e) => {
  const t = Rt({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: s, headers: o, auth: a } = t;
  if (t.headers = o = Le.from(o), t.url = Qf(
    nd(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), a && o.set(
    "Authorization",
    "Basic " + btoa(
      (a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")
    )
  ), P.isFormData(n)) {
    if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (P.isFunction(n.getHeaders)) {
      const u = n.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(u).forEach(([l, p]) => {
        c.includes(l.toLowerCase()) && o.set(l, p);
      });
    }
  }
  if (Se.hasStandardBrowserEnv && (r && P.isFunction(r) && (r = r(t)), r || r !== !1 && Pw(t.url))) {
    const u = i && s && Tw.read(s);
    u && o.set(i, u);
  }
  return t;
}, Lw = typeof XMLHttpRequest < "u", Iw = Lw && function(e) {
  return new Promise(function(n, r) {
    const i = rd(e);
    let s = i.data;
    const o = Le.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = i, l, p, f, h, d;
    function m() {
      h && h(), d && d(), i.cancelToken && i.cancelToken.unsubscribe(l), i.signal && i.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function y() {
      if (!g)
        return;
      const w = Le.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: w,
        config: e,
        request: g
      };
      td(
        function(E) {
          n(E), m();
        },
        function(E) {
          r(E), m();
        },
        b
      ), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, g.onabort = function() {
      g && (r(new K("Request aborted", K.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(S) {
      const b = S && S.message ? S.message : "Network Error", k = new K(b, K.ERR_NETWORK, e, g);
      k.event = S || null, r(k), g = null;
    }, g.ontimeout = function() {
      let S = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const b = i.transitional || jo;
      i.timeoutErrorMessage && (S = i.timeoutErrorMessage), r(
        new K(
          S,
          b.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
          e,
          g
        )
      ), g = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in g && P.forEach(o.toJSON(), function(S, b) {
      g.setRequestHeader(b, S);
    }), P.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), a && a !== "json" && (g.responseType = i.responseType), c && ([f, d] = Qr(c, !0), g.addEventListener("progress", f)), u && g.upload && ([p, h] = Qr(u), g.upload.addEventListener("progress", p), g.upload.addEventListener("loadend", h)), (i.cancelToken || i.signal) && (l = (w) => {
      g && (r(!w || w.type ? new Yn(null, e, g) : w), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(l), i.signal && (i.signal.aborted ? l() : i.signal.addEventListener("abort", l)));
    const v = Cw(i.url);
    if (v && Se.protocols.indexOf(v) === -1) {
      r(
        new K(
          "Unsupported protocol " + v + ":",
          K.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    g.send(s || null);
  });
}, Ow = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const s = function(c) {
      if (!i) {
        i = !0, a();
        const l = c instanceof Error ? c : this.reason;
        r.abort(
          l instanceof K ? l : new Yn(l instanceof Error ? l.message : l)
        );
      }
    };
    let o = t && setTimeout(() => {
      o = null, s(new K(`timeout of ${t}ms exceeded`, K.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(s) : c.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", s));
    const { signal: u } = r;
    return u.unsubscribe = () => P.asap(a), u;
  }
}, Mw = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, Dw = async function* (e, t) {
  for await (const n of jw(e))
    yield* Mw(n, t);
}, jw = async function* (e) {
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
}, mu = (e, t, n, r) => {
  const i = Dw(e, t);
  let s = 0, o, a = (u) => {
    o || (o = !0, r && r(u));
  };
  return new ReadableStream(
    {
      async pull(u) {
        try {
          const { done: c, value: l } = await i.next();
          if (c) {
            a(), u.close();
            return;
          }
          let p = l.byteLength;
          if (n) {
            let f = s += p;
            n(f);
          }
          u.enqueue(new Uint8Array(l));
        } catch (c) {
          throw a(c), c;
        }
      },
      cancel(u) {
        return a(u), i.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, gu = 64 * 1024, { isFunction: sr } = P, Nw = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(P.global), { ReadableStream: yu, TextEncoder: xu } = P.global, vu = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Fw = (e) => {
  e = P.merge.call(
    {
      skipUndefined: !0
    },
    Nw,
    e
  );
  const { fetch: t, Request: n, Response: r } = e, i = t ? sr(t) : typeof fetch == "function", s = sr(n), o = sr(r);
  if (!i)
    return !1;
  const a = i && sr(yu), u = i && (typeof xu == "function" ? /* @__PURE__ */ ((d) => (m) => d.encode(m))(new xu()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), c = s && a && vu(() => {
    let d = !1;
    const m = new yu(), g = new n(Se.origin, {
      body: m,
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return m.cancel(), d && !g;
  }), l = o && a && vu(() => P.isReadableStream(new r("").body)), p = {
    stream: l && ((d) => d.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !p[d] && (p[d] = (m, g) => {
      let y = m && m[d];
      if (y)
        return y.call(m);
      throw new K(
        `Response type '${d}' is not supported`,
        K.ERR_NOT_SUPPORT,
        g
      );
    });
  });
  const f = async (d) => {
    if (d == null)
      return 0;
    if (P.isBlob(d))
      return d.size;
    if (P.isSpecCompliantForm(d))
      return (await new n(Se.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (P.isArrayBufferView(d) || P.isArrayBuffer(d))
      return d.byteLength;
    if (P.isURLSearchParams(d) && (d = d + ""), P.isString(d))
      return (await u(d)).byteLength;
  }, h = async (d, m) => {
    const g = P.toFiniteNumber(d.getContentLength());
    return g ?? f(m);
  };
  return async (d) => {
    let {
      url: m,
      method: g,
      data: y,
      signal: v,
      cancelToken: w,
      timeout: S,
      onDownloadProgress: b,
      onUploadProgress: k,
      responseType: E,
      headers: T,
      withCredentials: D = "same-origin",
      fetchOptions: V
    } = rd(d), R = t || fetch;
    E = E ? (E + "").toLowerCase() : "text";
    let A = Ow(
      [v, w && w.toAbortSignal()],
      S
    ), j = null;
    const B = A && A.unsubscribe && (() => {
      A.unsubscribe();
    });
    let N;
    try {
      if (k && c && g !== "get" && g !== "head" && (N = await h(T, y)) !== 0) {
        let I = new n(m, {
          method: "POST",
          body: y,
          duplex: "half"
        }), q;
        if (P.isFormData(y) && (q = I.headers.get("content-type")) && T.setContentType(q), I.body) {
          const [C, $] = fu(
            N,
            Qr(du(k))
          );
          y = mu(I.body, gu, C, $);
        }
      }
      P.isString(D) || (D = D ? "include" : "omit");
      const H = s && "credentials" in n.prototype, W = {
        ...V,
        signal: A,
        method: g.toUpperCase(),
        headers: T.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: H ? D : void 0
      };
      j = s && new n(m, W);
      let Q = await (s ? R(j, V) : R(m, W));
      const ge = l && (E === "stream" || E === "response");
      if (l && (b || ge && B)) {
        const I = {};
        ["status", "statusText", "headers"].forEach((ke) => {
          I[ke] = Q[ke];
        });
        const q = P.toFiniteNumber(Q.headers.get("content-length")), [C, $] = b && fu(
          q,
          Qr(du(b), !0)
        ) || [];
        Q = new r(
          mu(Q.body, gu, C, () => {
            $ && $(), B && B();
          }),
          I
        );
      }
      E = E || "text";
      let _ = await p[P.findKey(p, E) || "text"](
        Q,
        d
      );
      return !ge && B && B(), await new Promise((I, q) => {
        td(I, q, {
          data: _,
          headers: Le.from(Q.headers),
          status: Q.status,
          statusText: Q.statusText,
          config: d,
          request: j
        });
      });
    } catch (H) {
      throw B && B(), H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message) ? Object.assign(
        new K(
          "Network Error",
          K.ERR_NETWORK,
          d,
          j,
          H && H.response
        ),
        {
          cause: H.cause || H
        }
      ) : K.from(H, H && H.code, d, j, H && H.response);
    }
  };
}, Bw = /* @__PURE__ */ new Map(), id = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: i } = t, s = [r, i, n];
  let o = s.length, a = o, u, c, l = Bw;
  for (; a--; )
    u = s[a], c = l.get(u), c === void 0 && l.set(u, c = a ? /* @__PURE__ */ new Map() : Fw(t)), l = c;
  return c;
};
id();
const Fo = {
  http: ew,
  xhr: Iw,
  fetch: {
    get: id
  }
};
P.forEach(Fo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bu = (e) => `- ${e}`, Vw = (e) => P.isFunction(e) || e === null || e === !1;
function zw(e, t) {
  e = P.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, i;
  const s = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let a;
    if (i = r, !Vw(r) && (i = Fo[(a = String(r)).toLowerCase()], i === void 0))
      throw new K(`Unknown adapter '${a}'`);
    if (i && (P.isFunction(i) || (i = i.get(t))))
      break;
    s[a || "#" + o] = i;
  }
  if (!i) {
    const o = Object.entries(s).map(
      ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? o.length > 1 ? `since :
` + o.map(bu).join(`
`) : " " + bu(o[0]) : "as no adapter specified";
    throw new K(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return i;
}
const sd = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: zw,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Fo
};
function Gi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Yn(null, e);
}
function Su(e) {
  return Gi(e), e.headers = Le.from(e.headers), e.data = Wi.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), sd.getAdapter(e.adapter || Kn.adapter, e)(e).then(
    function(r) {
      return Gi(e), r.data = Wi.call(e, e.transformResponse, r), r.headers = Le.from(r.headers), r;
    },
    function(r) {
      return ed(r) || (Gi(e), r && r.response && (r.response.data = Wi.call(
        e,
        e.transformResponse,
        r.response
      ), r.response.headers = Le.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const od = "1.15.0", pi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wu = {};
pi.transitional = function(t, n, r) {
  function i(s, o) {
    return "[Axios v" + od + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, a) => {
    if (t === !1)
      throw new K(
        i(o, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !wu[o] && (wu[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, a) : !0;
  };
};
pi.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Uw(e, t, n) {
  if (typeof e != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], o = t[s];
    if (o) {
      const a = e[s], u = a === void 0 || o(a, s, e);
      if (u !== !0)
        throw new K(
          "option " + s + " must be " + u,
          K.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new K("Unknown option " + s, K.ERR_BAD_OPTION);
  }
}
const jr = {
  assertOptions: Uw,
  validators: pi
}, Ve = jr.validators;
let Tt = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new cu(),
      response: new cu()
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
        const s = (() => {
          if (!i.stack)
            return "";
          const o = i.stack.indexOf(`
`);
          return o === -1 ? "" : i.stack.slice(o + 1);
        })();
        try {
          if (!r.stack)
            r.stack = s;
          else if (s) {
            const o = s.indexOf(`
`), a = o === -1 ? -1 : s.indexOf(`
`, o + 1), u = a === -1 ? "" : s.slice(a + 1);
            String(r.stack).endsWith(u) || (r.stack += `
` + s);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Rt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && jr.assertOptions(
      r,
      {
        silentJSONParsing: Ve.transitional(Ve.boolean),
        forcedJSONParsing: Ve.transitional(Ve.boolean),
        clarifyTimeoutError: Ve.transitional(Ve.boolean),
        legacyInterceptorReqResOrdering: Ve.transitional(Ve.boolean)
      },
      !1
    ), i != null && (P.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : jr.assertOptions(
      i,
      {
        encode: Ve.function,
        serialize: Ve.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), jr.assertOptions(
      n,
      {
        baseUrl: Ve.spelling("baseURL"),
        withXsrfToken: Ve.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && P.merge(s.common, s[n.method]);
    s && P.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (d) => {
      delete s[d];
    }), n.headers = Le.concat(o, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(n) === !1)
        return;
      u = u && m.synchronous;
      const g = n.transitional || jo;
      g && g.legacyInterceptorReqResOrdering ? a.unshift(m.fulfilled, m.rejected) : a.push(m.fulfilled, m.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let l, p = 0, f;
    if (!u) {
      const d = [Su.bind(this), void 0];
      for (d.unshift(...a), d.push(...c), f = d.length, l = Promise.resolve(n); p < f; )
        l = l.then(d[p++], d[p++]);
      return l;
    }
    f = a.length;
    let h = n;
    for (; p < f; ) {
      const d = a[p++], m = a[p++];
      try {
        h = d(h);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      l = Su.call(this, h);
    } catch (d) {
      return Promise.reject(d);
    }
    for (p = 0, f = c.length; p < f; )
      l = l.then(c[p++], c[p++]);
    return l;
  }
  getUri(t) {
    t = Rt(this.defaults, t);
    const n = nd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Qf(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  Tt.prototype[t] = function(n, r) {
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
    return function(s, o, a) {
      return this.request(
        Rt(a || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: o
        })
      );
    };
  }
  Tt.prototype[t] = n(), Tt.prototype[t + "Form"] = n(!0);
});
let Hw = class ad {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, t(function(s, o, a) {
      r.reason || (r.reason = new Yn(s, o, a), n(r.reason));
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
      token: new ad(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function qw(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ww(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Os = {
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
Object.entries(Os).forEach(([e, t]) => {
  Os[t] = e;
});
function ld(e) {
  const t = new Tt(e), n = Vf(Tt.prototype.request, t);
  return P.extend(n, Tt.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return ld(Rt(e, i));
  }, n;
}
const ce = ld(Kn);
ce.Axios = Tt;
ce.CanceledError = Yn;
ce.CancelToken = Hw;
ce.isCancel = ed;
ce.VERSION = od;
ce.toFormData = di;
ce.AxiosError = K;
ce.Cancel = ce.CanceledError;
ce.all = function(t) {
  return Promise.all(t);
};
ce.spread = qw;
ce.isAxiosError = Ww;
ce.mergeConfig = Rt;
ce.AxiosHeaders = Le;
ce.formToJSON = (e) => $f(P.isHTMLForm(e) ? new FormData(e) : e);
ce.getAdapter = sd.getAdapter;
ce.HttpStatusCode = Os;
ce.default = ce;
const {
  Axios: YC,
  AxiosError: XC,
  CanceledError: JC,
  isCancel: QC,
  CancelToken: $C,
  VERSION: ZC,
  all: eE,
  Cancel: tE,
  isAxiosError: nE,
  spread: rE,
  toFormData: iE,
  AxiosHeaders: sE,
  HttpStatusCode: oE,
  formToJSON: aE,
  getAdapter: lE,
  mergeConfig: uE
} = ce;
class ft {
  isError = !1;
  isSuccess = !1;
  status = At.INTERNAL_SERVER_ERROR;
  statusMessage = "";
  data;
  constructor() {
  }
  static getSucessInstance(t) {
    const n = new ft();
    return n.isSuccess = !0, n.isError = !1, n.status = t.status, n.statusMessage = t.statusMessage, n.data = t.data, n;
  }
  static getErrorInstance(t) {
    const n = new ft();
    return n.isSuccess = !1, n.isError = !0, n.status = t.status, n.statusMessage = t.statusMessage, n;
  }
  static success(t) {
    return ft.getSucessInstance(t);
  }
  static error(t) {
    return ft.getErrorInstance(t);
  }
}
class Gw {
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
      return ft.success(r);
    } catch (n) {
      if (console.error(
        "API Error:",
        n instanceof Error ? n.message : "Unknown error"
      ), ce.isAxiosError(n)) {
        const r = n, i = r.response?.status || At.INTERNAL_SERVER_ERROR, s = r.message || this.literal.internal_server_error, o = {
          status: i,
          statusMessage: s
        };
        return ft.error(o);
      } else
        return ft.error({
          status: At.INTERNAL_SERVER_ERROR,
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
const Ki = /* @__PURE__ */ new Map(), cE = (e, t) => {
  if (Ki.has(e))
    return Ki.get(e);
  const n = new Gw(e, t);
  return Ki.set(e, n), n;
}, ud = xt(
  {}
);
function hE() {
  return me(ud);
}
function fE({
  children: e,
  lightTheme: t,
  darkTheme: n,
  forceTheme: r
  // This prop will be passed from Storybook
}) {
  const [i, s] = ve(() => {
    if (typeof window < "u")
      try {
        return localStorage.getItem("darkMode") === "true";
      } catch {
        return !1;
      }
    return !1;
  }), o = r ? r === "dark" : i, a = () => {
    if (!r) {
      const c = !i;
      s(c);
      try {
        localStorage.setItem("darkMode", String(c));
      } catch {
      }
    }
  }, u = pt(
    () => o ? n : t,
    [o, t, n]
  );
  return /* @__PURE__ */ x.jsx(ud.Provider, { value: { darkMode: o, toggleDarkMode: a }, children: /* @__PURE__ */ x.jsxs(sp, { theme: u, children: [
    /* @__PURE__ */ x.jsx(op, {}),
    e
  ] }) });
}
const Yi = {
  sans: '"Inter", "Segoe UI", "Helvetica Neue", sans-serif',
  mono: '"IBM Plex Mono", "Menlo", "Courier New", monospace'
}, cd = {
  fontFamily: Yi.sans,
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
  monoBody: { fontFamily: Yi.mono, fontSize: "0.8125rem", fontWeight: 400, lineHeight: 1.5 },
  monoCaption: { fontFamily: Yi.mono, fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.4 },
  // Specialized Display
  splashTitle: { fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5 },
  // h6 with wider tracking
  splashSubtitle: { fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em", lineHeight: 1.4 }
  // caption with wider tracking
}, hd = (e) => `${Math.round(e * 8)}px`, fd = {
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
}, dd = {
  palette: {
    mode: "light",
    primary: { main: te.primary, light: te.primaryHover },
    secondary: { main: te.secondary },
    background: {
      default: te.background.light,
      paper: te.background.paperLight
    },
    text: {
      primary: te.text.primaryLight,
      secondary: te.text.secondaryLight
    },
    error: { main: te.status.error },
    warning: { main: te.status.warning },
    info: { main: te.status.info },
    success: { main: te.status.success },
    divider: te.border.light
  },
  typography: cd,
  spacing: hd,
  components: fd
}, pd = {
  palette: {
    mode: "dark",
    primary: { main: te.primary, light: te.primaryHover },
    secondary: { main: te.secondary },
    background: {
      default: te.background.dark,
      paper: te.background.paperDark
    },
    text: {
      primary: te.text.primaryDark,
      secondary: te.text.secondaryDark
    },
    error: { main: te.status.error },
    warning: { main: te.status.warning },
    info: { main: te.status.info },
    success: { main: te.status.success },
    divider: te.border.dark
  },
  typography: cd,
  spacing: hd,
  components: fd
}, dE = zr(dd), pE = zr(pd), mE = (e, t) => ({
  lightTheme: zr(dd, e ?? {}),
  darkTheme: zr(pd, t ?? {})
});
var or = { exports: {} }, ar = { exports: {} }, Ge = {}, Ee = {}, ku;
function Oe() {
  if (ku) return Ee;
  ku = 1, Ee.__esModule = !0, Ee.extend = i, Ee.indexOf = u, Ee.escapeExpression = c, Ee.isEmpty = l, Ee.createFrame = p, Ee.blockParams = f, Ee.appendContextPath = h;
  var e = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, t = /[&<>"'`=]/g, n = /[&<>"'`=]/;
  function r(d) {
    return e[d];
  }
  function i(d) {
    for (var m = 1; m < arguments.length; m++)
      for (var g in arguments[m])
        Object.prototype.hasOwnProperty.call(arguments[m], g) && (d[g] = arguments[m][g]);
    return d;
  }
  var s = Object.prototype.toString;
  Ee.toString = s;
  var o = function(m) {
    return typeof m == "function";
  };
  o(/x/) && (Ee.isFunction = o = function(d) {
    return typeof d == "function" && s.call(d) === "[object Function]";
  }), Ee.isFunction = o;
  var a = Array.isArray || function(d) {
    return d && typeof d == "object" ? s.call(d) === "[object Array]" : !1;
  };
  Ee.isArray = a;
  function u(d, m) {
    for (var g = 0, y = d.length; g < y; g++)
      if (d[g] === m)
        return g;
    return -1;
  }
  function c(d) {
    if (typeof d != "string") {
      if (d && d.toHTML)
        return d.toHTML();
      if (d == null)
        return "";
      if (!d)
        return d + "";
      d = "" + d;
    }
    return n.test(d) ? d.replace(t, r) : d;
  }
  function l(d) {
    return !d && d !== 0 ? !0 : !!(a(d) && d.length === 0);
  }
  function p(d) {
    var m = i({}, d);
    return m._parent = d, m;
  }
  function f(d, m) {
    return d.path = m, d;
  }
  function h(d, m) {
    return (d ? d + "." : "") + m;
  }
  return Ee;
}
var lr = { exports: {} }, Cu;
function qe() {
  return Cu || (Cu = 1, (function(e, t) {
    t.__esModule = !0;
    var n = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function r(i, s) {
      var o = s && s.loc, a = void 0, u = void 0, c = void 0, l = void 0;
      o && (a = o.start.line, u = o.end.line, c = o.start.column, l = o.end.column, i += " - " + a + ":" + c);
      for (var p = Error.prototype.constructor.call(this, i), f = 0; f < n.length; f++)
        this[n[f]] = p[n[f]];
      Error.captureStackTrace && Error.captureStackTrace(this, r);
      try {
        o && (this.lineNumber = a, this.endLineNumber = u, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: c,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: l,
          enumerable: !0
        })) : (this.column = c, this.endColumn = l));
      } catch {
      }
    }
    r.prototype = new Error(), t.default = r, e.exports = t.default;
  })(lr, lr.exports)), lr.exports;
}
var yn = {}, ur = { exports: {} }, Eu;
function Kw() {
  return Eu || (Eu = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe();
    t.default = function(r) {
      r.registerHelper("blockHelperMissing", function(i, s) {
        var o = s.inverse, a = s.fn;
        if (i === !0)
          return a(this);
        if (i === !1 || i == null)
          return o(this);
        if (n.isArray(i))
          return i.length > 0 ? (s.ids && (s.ids = [s.name]), r.helpers.each(i, s)) : o(this);
        if (s.data && s.ids) {
          var u = n.createFrame(s.data);
          u.contextPath = n.appendContextPath(s.data.contextPath, s.name), s = { data: u };
        }
        return a(i, s);
      });
    }, e.exports = t.default;
  })(ur, ur.exports)), ur.exports;
}
var cr = { exports: {} }, _u;
function Yw() {
  return _u || (_u = 1, (function(e, t) {
    t.__esModule = !0;
    function n(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = Oe(), i = qe(), s = n(i);
    t.default = function(o) {
      o.registerHelper("each", function(a, u) {
        if (!u)
          throw new s.default("Must pass iterator to #each");
        var c = u.fn, l = u.inverse, p = 0, f = "", h = void 0, d = void 0;
        u.data && u.ids && (d = r.appendContextPath(u.data.contextPath, u.ids[0]) + "."), r.isFunction(a) && (a = a.call(this)), u.data && (h = r.createFrame(u.data));
        function m(S, b, k) {
          h && (h.key = S, h.index = b, h.first = b === 0, h.last = !!k, d && (h.contextPath = d + S)), f = f + c(a[S], {
            data: h,
            blockParams: r.blockParams([a[S], S], [d + S, null])
          });
        }
        if (a && typeof a == "object")
          if (r.isArray(a))
            for (var g = a.length; p < g; p++)
              p in a && m(p, p, p === a.length - 1);
          else if (typeof Symbol == "function" && a[Symbol.iterator]) {
            for (var y = [], v = a[Symbol.iterator](), w = v.next(); !w.done; w = v.next())
              y.push(w.value);
            a = y;
            for (var g = a.length; p < g; p++)
              m(p, p, p === a.length - 1);
          } else
            (function() {
              var S = void 0;
              Object.keys(a).forEach(function(b) {
                S !== void 0 && m(S, p - 1), S = b, p++;
              }), S !== void 0 && m(S, p - 1, !0);
            })();
        return p === 0 && (f = l(this)), f;
      });
    }, e.exports = t.default;
  })(cr, cr.exports)), cr.exports;
}
var hr = { exports: {} }, Pu;
function Xw() {
  return Pu || (Pu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = qe(), i = n(r);
    t.default = function(s) {
      s.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new i.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, e.exports = t.default;
  })(hr, hr.exports)), hr.exports;
}
var fr = { exports: {} }, Tu;
function Jw() {
  return Tu || (Tu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = Oe(), i = qe(), s = n(i);
    t.default = function(o) {
      o.registerHelper("if", function(a, u) {
        if (arguments.length != 2)
          throw new s.default("#if requires exactly one argument");
        return r.isFunction(a) && (a = a.call(this)), !u.hash.includeZero && !a || r.isEmpty(a) ? u.inverse(this) : u.fn(this);
      }), o.registerHelper("unless", function(a, u) {
        if (arguments.length != 2)
          throw new s.default("#unless requires exactly one argument");
        return o.helpers.if.call(this, a, {
          fn: u.inverse,
          inverse: u.fn,
          hash: u.hash
        });
      });
    }, e.exports = t.default;
  })(fr, fr.exports)), fr.exports;
}
var dr = { exports: {} }, Au;
function Qw() {
  return Au || (Au = 1, (function(e, t) {
    t.__esModule = !0, t.default = function(n) {
      n.registerHelper("log", function() {
        for (var r = [void 0], i = arguments[arguments.length - 1], s = 0; s < arguments.length - 1; s++)
          r.push(arguments[s]);
        var o = 1;
        i.hash.level != null ? o = i.hash.level : i.data && i.data.level != null && (o = i.data.level), r[0] = o, n.log.apply(n, r);
      });
    }, e.exports = t.default;
  })(dr, dr.exports)), dr.exports;
}
var pr = { exports: {} }, Ru;
function $w() {
  return Ru || (Ru = 1, (function(e, t) {
    t.__esModule = !0, t.default = function(n) {
      n.registerHelper("lookup", function(r, i, s) {
        return r && s.lookupProperty(r, i);
      });
    }, e.exports = t.default;
  })(pr, pr.exports)), pr.exports;
}
var mr = { exports: {} }, Lu;
function Zw() {
  return Lu || (Lu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = Oe(), i = qe(), s = n(i);
    t.default = function(o) {
      o.registerHelper("with", function(a, u) {
        if (arguments.length != 2)
          throw new s.default("#with requires exactly one argument");
        r.isFunction(a) && (a = a.call(this));
        var c = u.fn;
        if (r.isEmpty(a))
          return u.inverse(this);
        var l = u.data;
        return u.data && u.ids && (l = r.createFrame(u.data), l.contextPath = r.appendContextPath(u.data.contextPath, u.ids[0])), c(a, {
          data: l,
          blockParams: r.blockParams([a], [l && l.contextPath])
        });
      });
    }, e.exports = t.default;
  })(mr, mr.exports)), mr.exports;
}
var Iu;
function md() {
  if (Iu) return yn;
  Iu = 1, yn.__esModule = !0, yn.registerDefaultHelpers = m, yn.moveHelperToHooks = g;
  function e(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var t = Kw(), n = e(t), r = Yw(), i = e(r), s = Xw(), o = e(s), a = Jw(), u = e(a), c = Qw(), l = e(c), p = $w(), f = e(p), h = Zw(), d = e(h);
  function m(y) {
    n.default(y), i.default(y), o.default(y), u.default(y), l.default(y), f.default(y), d.default(y);
  }
  function g(y, v, w) {
    y.helpers[v] && (y.hooks[v] = y.helpers[v], w || (y.helpers[v] = void 0));
  }
  return yn;
}
var gr = {}, yr = { exports: {} }, Ou;
function ek() {
  return Ou || (Ou = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe();
    t.default = function(r) {
      r.registerDecorator("inline", function(i, s, o, a) {
        var u = i;
        return s.partials || (s.partials = {}, u = function(c, l) {
          var p = o.partials;
          o.partials = n.extend({}, p, s.partials);
          var f = i(c, l);
          return o.partials = p, f;
        }), s.partials[a.args[0]] = a.fn, u;
      });
    }, e.exports = t.default;
  })(yr, yr.exports)), yr.exports;
}
var Mu;
function tk() {
  if (Mu) return gr;
  Mu = 1, gr.__esModule = !0, gr.registerDefaultDecorators = r;
  function e(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var t = ek(), n = e(t);
  function r(i) {
    n.default(i);
  }
  return gr;
}
var xr = { exports: {} }, Du;
function gd() {
  return Du || (Du = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe(), r = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(s) {
        if (typeof s == "string") {
          var o = n.indexOf(r.methodMap, s.toLowerCase());
          o >= 0 ? s = o : s = parseInt(s, 10);
        }
        return s;
      },
      // Can be overridden in the host environment
      log: function(s) {
        if (s = r.lookupLevel(s), typeof console < "u" && r.lookupLevel(r.level) <= s) {
          var o = r.methodMap[s];
          console[o] || (o = "log");
          for (var a = arguments.length, u = Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
            u[c - 1] = arguments[c];
          console[o].apply(console, u);
        }
      }
    };
    t.default = r, e.exports = t.default;
  })(xr, xr.exports)), xr.exports;
}
var jt = {}, ju;
function yd() {
  if (ju) return jt;
  ju = 1, jt.__esModule = !0, jt.createProtoAccessControl = s, jt.resultIsAllowed = o, jt.resetLoggedProperties = c;
  function e(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var t = Oe(), n = gd(), r = e(n), i = /* @__PURE__ */ Object.create(null);
  function s(l) {
    var p = /* @__PURE__ */ Object.create(null);
    p.__proto__ = !1, t.extend(p, l.allowedProtoProperties);
    var f = /* @__PURE__ */ Object.create(null);
    return f.constructor = !1, f.__defineGetter__ = !1, f.__defineSetter__ = !1, f.__lookupGetter__ = !1, f.__lookupSetter__ = !1, t.extend(f, l.allowedProtoMethods), {
      properties: {
        whitelist: p,
        defaultValue: l.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: f,
        defaultValue: l.allowProtoMethodsByDefault
      }
    };
  }
  function o(l, p, f) {
    return a(typeof l == "function" ? p.methods : p.properties, f);
  }
  function a(l, p) {
    return l.whitelist[p] !== void 0 ? l.whitelist[p] === !0 : l.defaultValue !== void 0 ? l.defaultValue : (u(p), !1);
  }
  function u(l) {
    i[l] !== !0 && (i[l] = !0, r.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + l + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function c() {
    Object.keys(i).forEach(function(l) {
      delete i[l];
    });
  }
  return jt;
}
var Nu;
function Bo() {
  if (Nu) return Ge;
  Nu = 1, Ge.__esModule = !0, Ge.HandlebarsEnvironment = d;
  function e(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var t = Oe(), n = qe(), r = e(n), i = md(), s = tk(), o = gd(), a = e(o), u = yd(), c = "4.7.9";
  Ge.VERSION = c;
  var l = 8;
  Ge.COMPILER_REVISION = l;
  var p = 7;
  Ge.LAST_COMPATIBLE_COMPILER_REVISION = p;
  var f = {
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
  Ge.REVISION_CHANGES = f;
  var h = "[object Object]";
  function d(g, y, v) {
    this.helpers = g || {}, this.partials = y || {}, this.decorators = v || {}, i.registerDefaultHelpers(this), s.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: a.default,
    log: a.default.log,
    registerHelper: function(y, v) {
      if (t.toString.call(y) === h) {
        if (v)
          throw new r.default("Arg not supported with multiple helpers");
        t.extend(this.helpers, y);
      } else
        this.helpers[y] = v;
    },
    unregisterHelper: function(y) {
      delete this.helpers[y];
    },
    registerPartial: function(y, v) {
      if (t.toString.call(y) === h)
        t.extend(this.partials, y);
      else {
        if (typeof v > "u")
          throw new r.default('Attempting to register a partial called "' + y + '" as undefined');
        this.partials[y] = v;
      }
    },
    unregisterPartial: function(y) {
      delete this.partials[y];
    },
    registerDecorator: function(y, v) {
      if (t.toString.call(y) === h) {
        if (v)
          throw new r.default("Arg not supported with multiple decorators");
        t.extend(this.decorators, y);
      } else
        this.decorators[y] = v;
    },
    unregisterDecorator: function(y) {
      delete this.decorators[y];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      u.resetLoggedProperties();
    }
  };
  var m = a.default.log;
  return Ge.log = m, Ge.createFrame = t.createFrame, Ge.logger = a.default, Ge;
}
var vr = { exports: {} }, Fu;
function nk() {
  return Fu || (Fu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(r) {
      this.string = r;
    }
    n.prototype.toString = n.prototype.toHTML = function() {
      return "" + this.string;
    }, t.default = n, e.exports = t.default;
  })(vr, vr.exports)), vr.exports;
}
var st = {}, br = {}, Bu;
function rk() {
  if (Bu) return br;
  Bu = 1, br.__esModule = !0, br.wrapHelper = e;
  function e(t, n) {
    if (typeof t != "function")
      return t;
    var r = function() {
      var s = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = n(s), t.apply(this, arguments);
    };
    return r;
  }
  return br;
}
var Vu;
function ik() {
  if (Vu) return st;
  Vu = 1, st.__esModule = !0, st.checkRevision = l, st.template = p, st.wrapProgram = f, st.resolvePartial = h, st.invokePartial = d, st.noop = m;
  function e(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function t(b) {
    if (b && b.__esModule)
      return b;
    var k = {};
    if (b != null)
      for (var E in b)
        Object.prototype.hasOwnProperty.call(b, E) && (k[E] = b[E]);
    return k.default = b, k;
  }
  var n = Oe(), r = t(n), i = qe(), s = e(i), o = Bo(), a = md(), u = rk(), c = yd();
  function l(b) {
    var k = b && b[0] || 1, E = o.COMPILER_REVISION;
    if (!(k >= o.LAST_COMPATIBLE_COMPILER_REVISION && k <= o.COMPILER_REVISION))
      if (k < o.LAST_COMPATIBLE_COMPILER_REVISION) {
        var T = o.REVISION_CHANGES[E], D = o.REVISION_CHANGES[k];
        throw new s.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + T + ") or downgrade your runtime to an older version (" + D + ").");
      } else
        throw new s.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + b[1] + ").");
  }
  function p(b, k) {
    if (!k)
      throw new s.default("No environment passed to template");
    if (!b || !b.main)
      throw new s.default("Unknown template object: " + typeof b);
    b.main.decorator = b.main_d, k.VM.checkRevision(b.compiler);
    var E = b.compiler && b.compiler[0] === 7;
    function T(R, A, j) {
      j.hash && (A = r.extend({}, A, j.hash), j.ids && (j.ids[0] = !0)), R = k.VM.resolvePartial.call(this, R, A, j), j.hooks = this.hooks, j.protoAccessControl = this.protoAccessControl;
      var B = k.VM.invokePartial.call(this, R, A, j);
      if (B == null && k.compile && (j.partials[j.name] = k.compile(R, b.compilerOptions, k), B = j.partials[j.name](A, j)), B != null) {
        if (j.indent) {
          for (var N = B.split(`
`), H = 0, W = N.length; H < W && !(!N[H] && H + 1 === W); H++)
            N[H] = j.indent + N[H];
          B = N.join(`
`);
        }
        return B;
      } else
        throw new s.default("The partial " + j.name + " could not be compiled when running in runtime-only mode");
    }
    var D = {
      strict: function(A, j, B) {
        if (!A || !(j in A))
          throw new s.default('"' + j + '" not defined in ' + A, {
            loc: B
          });
        return D.lookupProperty(A, j);
      },
      lookupProperty: function(A, j) {
        var B = A[j];
        if (B == null || Object.prototype.hasOwnProperty.call(A, j) || c.resultIsAllowed(B, D.protoAccessControl, j))
          return B;
      },
      lookup: function(A, j) {
        for (var B = A.length, N = 0; N < B; N++) {
          var H = A[N] && D.lookupProperty(A[N], j);
          if (H != null)
            return H;
        }
      },
      lambda: function(A, j) {
        return typeof A == "function" ? A.call(j) : A;
      },
      escapeExpression: r.escapeExpression,
      invokePartial: T,
      fn: function(A) {
        var j = b[A];
        return j.decorator = b[A + "_d"], j;
      },
      programs: [],
      program: function(A, j, B, N, H) {
        var W = this.programs[A], Q = this.fn(A);
        return j || H || N || B ? W = f(this, A, Q, j, B, N, H) : W || (W = this.programs[A] = f(this, A, Q)), W;
      },
      data: function(A, j) {
        for (; A && j--; )
          A = A._parent;
        return A;
      },
      mergeIfNeeded: function(A, j) {
        var B = A || j;
        return A && j && A !== j && (B = r.extend({}, j, A)), B;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: k.VM.noop,
      compilerInfo: b.compiler
    };
    function V(R) {
      var A = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], j = A.data;
      V._setup(A), !A.partial && b.useData && (j = y(R, j));
      var B = void 0, N = b.useBlockParams ? [] : void 0;
      b.useDepths && (A.depths ? B = R != A.depths[0] ? [R].concat(A.depths) : A.depths : B = [R]);
      function H(W) {
        return "" + b.main(D, W, D.helpers, D.partials, j, N, B);
      }
      return H = v(b.main, H, D, A.depths || [], j, N), H(R, A);
    }
    return V.isTop = !0, V._setup = function(R) {
      if (R.partial)
        D.protoAccessControl = R.protoAccessControl, D.helpers = R.helpers, D.partials = R.partials, D.decorators = R.decorators, D.hooks = R.hooks;
      else {
        var A = {};
        w(A, k.helpers, D), w(A, R.helpers, D), D.helpers = A, b.usePartial && (D.partials = D.mergeIfNeeded(R.partials, k.partials)), (b.usePartial || b.useDecorators) && (D.decorators = r.extend({}, k.decorators, R.decorators)), D.hooks = {}, D.protoAccessControl = c.createProtoAccessControl(R);
        var j = R.allowCallsToHelperMissing || E;
        a.moveHelperToHooks(D, "helperMissing", j), a.moveHelperToHooks(D, "blockHelperMissing", j);
      }
    }, V._child = function(R, A, j, B) {
      if (b.useBlockParams && !j)
        throw new s.default("must pass block params");
      if (b.useDepths && !B)
        throw new s.default("must pass parent depths");
      return f(D, R, b[R], A, 0, j, B);
    }, V;
  }
  function f(b, k, E, T, D, V, R) {
    function A(j) {
      var B = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], N = R;
      return R && j != R[0] && !(j === b.nullContext && R[0] === null) && (N = [j].concat(R)), E(b, j, b.helpers, b.partials, B.data || T, V && [B.blockParams].concat(V), N);
    }
    return A = v(E, A, b, R, T, V), A.program = k, A.depth = R ? R.length : 0, A.blockParams = D || 0, A;
  }
  function h(b, k, E) {
    return b ? !b.call && !E.name && (E.name = b, b = g(E.partials, b)) : E.name === "@partial-block" ? b = g(E.data, "partial-block") : b = g(E.partials, E.name), b;
  }
  function d(b, k, E) {
    var T = g(E.data, "partial-block");
    E.partial = !0, E.ids && (E.data.contextPath = E.ids[0] || E.data.contextPath);
    var D = void 0;
    if (E.fn && E.fn !== m && (function() {
      E.data = o.createFrame(E.data);
      var V = E.fn;
      D = E.data["partial-block"] = function(A) {
        var j = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return j.data = o.createFrame(j.data), j.data["partial-block"] = T, V(A, j);
      }, V.partials && (E.partials = r.extend({}, E.partials, V.partials));
    })(), b === void 0 && D && (b = D), b === void 0)
      throw new s.default("The partial " + E.name + " could not be found");
    if (b instanceof Function)
      return b(k, E);
  }
  function m() {
    return "";
  }
  function g(b, k) {
    if (b && Object.prototype.hasOwnProperty.call(b, k))
      return b[k];
  }
  function y(b, k) {
    return (!k || !("root" in k)) && (k = k ? o.createFrame(k) : {}, k.root = b), k;
  }
  function v(b, k, E, T, D, V) {
    if (b.decorator) {
      var R = {};
      k = b.decorator(k, R, E, T && T[0], D, V, T), r.extend(k, R);
    }
    return k;
  }
  function w(b, k, E) {
    k && Object.keys(k).forEach(function(T) {
      var D = k[T];
      b[T] = S(D, E);
    });
  }
  function S(b, k) {
    var E = k.lookupProperty;
    return u.wrapHelper(b, function(T) {
      return T.lookupProperty = E, T;
    });
  }
  return st;
}
var Sr = { exports: {} }, zu;
function xd() {
  return zu || (zu = 1, (function(e, t) {
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
  })(Sr, Sr.exports)), Sr.exports;
}
var Uu;
function sk() {
  return Uu || (Uu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(v) {
      return v && v.__esModule ? v : { default: v };
    }
    function r(v) {
      if (v && v.__esModule)
        return v;
      var w = {};
      if (v != null)
        for (var S in v)
          Object.prototype.hasOwnProperty.call(v, S) && (w[S] = v[S]);
      return w.default = v, w;
    }
    var i = Bo(), s = r(i), o = nk(), a = n(o), u = qe(), c = n(u), l = Oe(), p = r(l), f = ik(), h = r(f), d = xd(), m = n(d);
    function g() {
      var v = new s.HandlebarsEnvironment();
      return p.extend(v, s), v.SafeString = a.default, v.Exception = c.default, v.Utils = p, v.escapeExpression = p.escapeExpression, v.VM = h, v.template = function(w) {
        return h.template(w, v);
      }, v;
    }
    var y = g();
    y.create = g, m.default(y), y.default = y, t.default = y, e.exports = t.default;
  })(ar, ar.exports)), ar.exports;
}
var wr = { exports: {} }, Hu;
function vd() {
  return Hu || (Hu = 1, (function(e, t) {
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
var Nt = {}, kr = { exports: {} }, qu;
function ok() {
  return qu || (qu = 1, (function(e, t) {
    t.__esModule = !0;
    var n = (function() {
      var r = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(a, u, c, l, p, f, h) {
          var d = f.length - 1;
          switch (p) {
            case 1:
              return f[d - 1];
            case 2:
              this.$ = l.prepareProgram(f[d]);
              break;
            case 3:
              this.$ = f[d];
              break;
            case 4:
              this.$ = f[d];
              break;
            case 5:
              this.$ = f[d];
              break;
            case 6:
              this.$ = f[d];
              break;
            case 7:
              this.$ = f[d];
              break;
            case 8:
              this.$ = f[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: l.stripComment(f[d]),
                strip: l.stripFlags(f[d], f[d]),
                loc: l.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: f[d],
                value: f[d],
                loc: l.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = l.prepareRawBlock(f[d - 2], f[d - 1], f[d], this._$);
              break;
            case 12:
              this.$ = { path: f[d - 3], params: f[d - 2], hash: f[d - 1] };
              break;
            case 13:
              this.$ = l.prepareBlock(f[d - 3], f[d - 2], f[d - 1], f[d], !1, this._$);
              break;
            case 14:
              this.$ = l.prepareBlock(f[d - 3], f[d - 2], f[d - 1], f[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: f[d - 5], path: f[d - 4], params: f[d - 3], hash: f[d - 2], blockParams: f[d - 1], strip: l.stripFlags(f[d - 5], f[d]) };
              break;
            case 16:
              this.$ = { path: f[d - 4], params: f[d - 3], hash: f[d - 2], blockParams: f[d - 1], strip: l.stripFlags(f[d - 5], f[d]) };
              break;
            case 17:
              this.$ = { path: f[d - 4], params: f[d - 3], hash: f[d - 2], blockParams: f[d - 1], strip: l.stripFlags(f[d - 5], f[d]) };
              break;
            case 18:
              this.$ = { strip: l.stripFlags(f[d - 1], f[d - 1]), program: f[d] };
              break;
            case 19:
              var m = l.prepareBlock(f[d - 2], f[d - 1], f[d], f[d], !1, this._$), g = l.prepareProgram([m], f[d - 1].loc);
              g.chained = !0, this.$ = { strip: f[d - 2].strip, program: g, chain: !0 };
              break;
            case 20:
              this.$ = f[d];
              break;
            case 21:
              this.$ = { path: f[d - 1], strip: l.stripFlags(f[d - 2], f[d]) };
              break;
            case 22:
              this.$ = l.prepareMustache(f[d - 3], f[d - 2], f[d - 1], f[d - 4], l.stripFlags(f[d - 4], f[d]), this._$);
              break;
            case 23:
              this.$ = l.prepareMustache(f[d - 3], f[d - 2], f[d - 1], f[d - 4], l.stripFlags(f[d - 4], f[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: f[d - 3],
                params: f[d - 2],
                hash: f[d - 1],
                indent: "",
                strip: l.stripFlags(f[d - 4], f[d]),
                loc: l.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = l.preparePartialBlock(f[d - 2], f[d - 1], f[d], this._$);
              break;
            case 26:
              this.$ = { path: f[d - 3], params: f[d - 2], hash: f[d - 1], strip: l.stripFlags(f[d - 4], f[d]) };
              break;
            case 27:
              this.$ = f[d];
              break;
            case 28:
              this.$ = f[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: f[d - 3],
                params: f[d - 2],
                hash: f[d - 1],
                loc: l.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: f[d], loc: l.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: l.id(f[d - 2]), value: f[d], loc: l.locInfo(this._$) };
              break;
            case 32:
              this.$ = l.id(f[d - 1]);
              break;
            case 33:
              this.$ = f[d];
              break;
            case 34:
              this.$ = f[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: f[d], original: f[d], loc: l.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(f[d]), original: Number(f[d]), loc: l.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: f[d] === "true", original: f[d] === "true", loc: l.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: l.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: l.locInfo(this._$) };
              break;
            case 40:
              this.$ = f[d];
              break;
            case 41:
              this.$ = f[d];
              break;
            case 42:
              this.$ = l.preparePath(!0, f[d], this._$);
              break;
            case 43:
              this.$ = l.preparePath(!1, f[d], this._$);
              break;
            case 44:
              f[d - 2].push({ part: l.id(f[d]), original: f[d], separator: f[d - 1] }), this.$ = f[d - 2];
              break;
            case 45:
              this.$ = [{ part: l.id(f[d]), original: f[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              f[d - 1].push(f[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              f[d - 1].push(f[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              f[d - 1].push(f[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              f[d - 1].push(f[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              f[d - 1].push(f[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              f[d - 1].push(f[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              f[d - 1].push(f[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              f[d - 1].push(f[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              f[d - 1].push(f[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              f[d - 1].push(f[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              f[d - 1].push(f[d]);
              break;
            case 98:
              this.$ = [f[d]];
              break;
            case 99:
              f[d - 1].push(f[d]);
              break;
            case 100:
              this.$ = [f[d]];
              break;
            case 101:
              f[d - 1].push(f[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(a, u) {
          throw new Error(a);
        },
        parse: function(a) {
          var u = this, c = [0], l = [null], p = [], f = this.table, h = "", d = 0, m = 0;
          this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var g = this.lexer.yylloc;
          p.push(g);
          var y = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function v() {
            var j;
            return j = u.lexer.lex() || 1, typeof j != "number" && (j = u.symbols_[j] || j), j;
          }
          for (var w, S, b, k, E = {}, T, D, V, R; ; ) {
            if (S = c[c.length - 1], this.defaultActions[S] ? b = this.defaultActions[S] : ((w === null || typeof w > "u") && (w = v()), b = f[S] && f[S][w]), typeof b > "u" || !b.length || !b[0]) {
              var A = "";
              {
                R = [];
                for (T in f[S]) this.terminals_[T] && T > 2 && R.push("'" + this.terminals_[T] + "'");
                this.lexer.showPosition ? A = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + R.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : A = "Parse error on line " + (d + 1) + ": Unexpected " + (w == 1 ? "end of input" : "'" + (this.terminals_[w] || w) + "'"), this.parseError(A, { text: this.lexer.match, token: this.terminals_[w] || w, line: this.lexer.yylineno, loc: g, expected: R });
              }
            }
            if (b[0] instanceof Array && b.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + S + ", token: " + w);
            switch (b[0]) {
              case 1:
                c.push(w), l.push(this.lexer.yytext), p.push(this.lexer.yylloc), c.push(b[1]), w = null, m = this.lexer.yyleng, h = this.lexer.yytext, d = this.lexer.yylineno, g = this.lexer.yylloc;
                break;
              case 2:
                if (D = this.productions_[b[1]][1], E.$ = l[l.length - D], E._$ = { first_line: p[p.length - (D || 1)].first_line, last_line: p[p.length - 1].last_line, first_column: p[p.length - (D || 1)].first_column, last_column: p[p.length - 1].last_column }, y && (E._$.range = [p[p.length - (D || 1)].range[0], p[p.length - 1].range[1]]), k = this.performAction.call(E, h, m, d, this.yy, b[1], l, p), typeof k < "u")
                  return k;
                D && (c = c.slice(0, -1 * D * 2), l = l.slice(0, -1 * D), p = p.slice(0, -1 * D)), c.push(this.productions_[b[1]][0]), l.push(E.$), p.push(E._$), V = f[c[c.length - 2]][c[c.length - 1]], c.push(V);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, i = (function() {
        var o = {
          EOF: 1,
          parseError: function(u, c) {
            if (this.yy.parser)
              this.yy.parser.parseError(u, c);
            else
              throw new Error(u);
          },
          setInput: function(u) {
            return this._input = u, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var u = this._input[0];
            this.yytext += u, this.yyleng++, this.offset++, this.match += u, this.matched += u;
            var c = u.match(/(?:\r\n?|\n).*/g);
            return c ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), u;
          },
          unput: function(u) {
            var c = u.length, l = u.split(/(?:\r\n?|\n)/g);
            this._input = u + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c - 1), this.offset -= c;
            var p = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
            var f = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: l ? (l.length === p.length ? this.yylloc.first_column : 0) + p[p.length - l.length].length - l[0].length : this.yylloc.first_column - c
            }, this.options.ranges && (this.yylloc.range = [f[0], f[0] + this.yyleng - c]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(u) {
            this.unput(this.match.slice(u));
          },
          pastInput: function() {
            var u = this.matched.substr(0, this.matched.length - this.match.length);
            return (u.length > 20 ? "..." : "") + u.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var u = this.match;
            return u.length < 20 && (u += this._input.substr(0, 20 - u.length)), (u.substr(0, 20) + (u.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var u = this.pastInput(), c = new Array(u.length + 1).join("-");
            return u + this.upcomingInput() + `
` + c + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var u, c, l, p, f;
            this._more || (this.yytext = "", this.match = "");
            for (var h = this._currentRules(), d = 0; d < h.length && (l = this._input.match(this.rules[h[d]]), !(l && (!c || l[0].length > c[0].length) && (c = l, p = d, !this.options.flex))); d++)
              ;
            return c ? (f = c[0].match(/(?:\r\n?|\n).*/g), f && (this.yylineno += f.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: f ? f[f.length - 1].length - f[f.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + c[0].length
            }, this.yytext += c[0], this.match += c[0], this.matches = c, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(c[0].length), this.matched += c[0], u = this.performAction.call(this, this.yy, this, h[p], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), u || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var u = this.next();
            return typeof u < "u" ? u : this.lex();
          },
          begin: function(u) {
            this.conditionStack.push(u);
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
          pushState: function(u) {
            this.begin(u);
          }
        };
        return o.options = {}, o.performAction = function(u, c, l, p) {
          function f(h, d) {
            return c.yytext = c.yytext.substring(h, c.yyleng - d + h);
          }
          switch (l) {
            case 0:
              if (c.yytext.slice(-2) === "\\\\" ? (f(0, 1), this.begin("mu")) : c.yytext.slice(-1) === "\\" ? (f(0, 1), this.begin("emu")) : this.begin("mu"), c.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (f(5, 9), "END_RAW_BLOCK");
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
              return c.yytext = f(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return c.yytext = f(1, 2).replace(/\\'/g, "'"), 80;
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
        }, o.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], o.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, o;
      })();
      r.lexer = i;
      function s() {
        this.yy = {};
      }
      return s.prototype = r, r.Parser = s, new s();
    })();
    t.default = n, e.exports = t.default;
  })(kr, kr.exports)), kr.exports;
}
var Cr = { exports: {} }, Er = { exports: {} }, Wu;
function bd() {
  return Wu || (Wu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var r = qe(), i = n(r);
    function s() {
      this.parents = [];
    }
    s.prototype = {
      constructor: s,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(l, p) {
        var f = this.accept(l[p]);
        if (this.mutating) {
          if (f && !s.prototype[f.type])
            throw new i.default('Unexpected node type "' + f.type + '" found when accepting ' + p + " on " + l.type);
          l[p] = f;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(l, p) {
        if (this.acceptKey(l, p), !l[p])
          throw new i.default(l.type + " requires " + p);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(l) {
        for (var p = 0, f = l.length; p < f; p++)
          this.acceptKey(l, p), l[p] || (l.splice(p, 1), p--, f--);
      },
      accept: function(l) {
        if (l) {
          if (!this[l.type])
            throw new i.default("Unknown type: " + l.type, l);
          this.current && this.parents.unshift(this.current), this.current = l;
          var p = this[l.type](l);
          if (this.current = this.parents.shift(), !this.mutating || p)
            return p;
          if (p !== !1)
            return l;
        }
      },
      Program: function(l) {
        this.acceptArray(l.body);
      },
      MustacheStatement: o,
      Decorator: o,
      BlockStatement: a,
      DecoratorBlock: a,
      PartialStatement: u,
      PartialBlockStatement: function(l) {
        u.call(this, l), this.acceptKey(l, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: o,
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
      Hash: function(l) {
        this.acceptArray(l.pairs);
      },
      HashPair: function(l) {
        this.acceptRequired(l, "value");
      }
    };
    function o(c) {
      this.acceptRequired(c, "path"), this.acceptArray(c.params), this.acceptKey(c, "hash");
    }
    function a(c) {
      o.call(this, c), this.acceptKey(c, "program"), this.acceptKey(c, "inverse");
    }
    function u(c) {
      this.acceptRequired(c, "name"), this.acceptArray(c.params), this.acceptKey(c, "hash");
    }
    t.default = s, e.exports = t.default;
  })(Er, Er.exports)), Er.exports;
}
var Gu;
function ak() {
  return Gu || (Gu = 1, (function(e, t) {
    t.__esModule = !0;
    function n(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = bd(), i = n(r);
    function s() {
      var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = l;
    }
    s.prototype = new i.default(), s.prototype.Program = function(l) {
      var p = !this.options.ignoreStandalone, f = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var h = l.body, d = 0, m = h.length; d < m; d++) {
        var g = h[d], y = this.accept(g);
        if (y) {
          var v = o(h, d, f), w = a(h, d, f), S = y.openStandalone && v, b = y.closeStandalone && w, k = y.inlineStandalone && v && w;
          y.close && u(h, d, !0), y.open && c(h, d, !0), p && k && (u(h, d), c(h, d) && g.type === "PartialStatement" && (g.indent = /([ \t]+$)/.exec(h[d - 1].original)[1])), p && S && (u((g.program || g.inverse).body), c(h, d)), p && b && (u(h, d), c((g.inverse || g.program).body));
        }
      }
      return l;
    }, s.prototype.BlockStatement = s.prototype.DecoratorBlock = s.prototype.PartialBlockStatement = function(l) {
      this.accept(l.program), this.accept(l.inverse);
      var p = l.program || l.inverse, f = l.program && l.inverse, h = f, d = f;
      if (f && f.chained)
        for (h = f.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var m = {
        open: l.openStrip.open,
        close: l.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: a(p.body),
        closeStandalone: o((h || p).body)
      };
      if (l.openStrip.close && u(p.body, null, !0), f) {
        var g = l.inverseStrip;
        g.open && c(p.body, null, !0), g.close && u(h.body, null, !0), l.closeStrip.open && c(d.body, null, !0), !this.options.ignoreStandalone && o(p.body) && a(h.body) && (c(p.body), u(h.body));
      } else l.closeStrip.open && c(p.body, null, !0);
      return m;
    }, s.prototype.Decorator = s.prototype.MustacheStatement = function(l) {
      return l.strip;
    }, s.prototype.PartialStatement = s.prototype.CommentStatement = function(l) {
      var p = l.strip || {};
      return {
        inlineStandalone: !0,
        open: p.open,
        close: p.close
      };
    };
    function o(l, p, f) {
      p === void 0 && (p = l.length);
      var h = l[p - 1], d = l[p - 2];
      if (!h)
        return f;
      if (h.type === "ContentStatement")
        return (d || !f ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(h.original);
    }
    function a(l, p, f) {
      p === void 0 && (p = -1);
      var h = l[p + 1], d = l[p + 2];
      if (!h)
        return f;
      if (h.type === "ContentStatement")
        return (d || !f ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(h.original);
    }
    function u(l, p, f) {
      var h = l[p == null ? 0 : p + 1];
      if (!(!h || h.type !== "ContentStatement" || !f && h.rightStripped)) {
        var d = h.value;
        h.value = h.value.replace(f ? /^\s+/ : /^[ \t]*\r?\n?/, ""), h.rightStripped = h.value !== d;
      }
    }
    function c(l, p, f) {
      var h = l[p == null ? l.length - 1 : p - 1];
      if (!(!h || h.type !== "ContentStatement" || !f && h.leftStripped)) {
        var d = h.value;
        return h.value = h.value.replace(f ? /\s+$/ : /[ \t]+$/, ""), h.leftStripped = h.value !== d, h.leftStripped;
      }
    }
    t.default = s, e.exports = t.default;
  })(Cr, Cr.exports)), Cr.exports;
}
var De = {}, Ku;
function lk() {
  if (Ku) return De;
  Ku = 1, De.__esModule = !0, De.SourceLocation = i, De.id = s, De.stripFlags = o, De.stripComment = a, De.preparePath = u, De.prepareMustache = c, De.prepareRawBlock = l, De.prepareBlock = p, De.prepareProgram = f, De.preparePartialBlock = h;
  function e(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var t = qe(), n = e(t);
  function r(d, m) {
    if (m = m.path ? m.path.original : m, d.path.original !== m) {
      var g = { loc: d.path.loc };
      throw new n.default(d.path.original + " doesn't match " + m, g);
    }
  }
  function i(d, m) {
    this.source = d, this.start = {
      line: m.first_line,
      column: m.first_column
    }, this.end = {
      line: m.last_line,
      column: m.last_column
    };
  }
  function s(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function o(d, m) {
    return {
      open: d.charAt(2) === "~",
      close: m.charAt(m.length - 3) === "~"
    };
  }
  function a(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function u(d, m, g) {
    g = this.locInfo(g);
    for (var y = d ? "@" : "", v = [], w = 0, S = 0, b = m.length; S < b; S++) {
      var k = m[S].part, E = m[S].original !== k;
      if (y += (m[S].separator || "") + k, !E && (k === ".." || k === "." || k === "this")) {
        if (v.length > 0)
          throw new n.default("Invalid path: " + y, { loc: g });
        k === ".." && w++;
      } else
        v.push(k);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: w,
      parts: v,
      original: y,
      loc: g
    };
  }
  function c(d, m, g, y, v, w) {
    var S = y.charAt(3) || y.charAt(2), b = S !== "{" && S !== "&", k = /\*/.test(y);
    return {
      type: k ? "Decorator" : "MustacheStatement",
      path: d,
      params: m,
      hash: g,
      escaped: b,
      strip: v,
      loc: this.locInfo(w)
    };
  }
  function l(d, m, g, y) {
    r(d, g), y = this.locInfo(y);
    var v = {
      type: "Program",
      body: m,
      strip: {},
      loc: y
    };
    return {
      type: "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: v,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: y
    };
  }
  function p(d, m, g, y, v, w) {
    y && y.path && r(d, y);
    var S = /\*/.test(d.open);
    m.blockParams = d.blockParams;
    var b = void 0, k = void 0;
    if (g) {
      if (S)
        throw new n.default("Unexpected inverse block on decorator", g);
      g.chain && (g.program.body[0].closeStrip = y.strip), k = g.strip, b = g.program;
    }
    return v && (v = b, b = m, m = v), {
      type: S ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: m,
      inverse: b,
      openStrip: d.strip,
      inverseStrip: k,
      closeStrip: y && y.strip,
      loc: this.locInfo(w)
    };
  }
  function f(d, m) {
    if (!m && d.length) {
      var g = d[0].loc, y = d[d.length - 1].loc;
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
      body: d,
      strip: {},
      loc: m
    };
  }
  function h(d, m, g, y) {
    return r(d, g), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: m,
      openStrip: d.strip,
      closeStrip: g && g.strip,
      loc: this.locInfo(y)
    };
  }
  return De;
}
var Yu;
function uk() {
  if (Yu) return Nt;
  Yu = 1, Nt.__esModule = !0, Nt.parseWithoutProcessing = f, Nt.parse = h;
  function e(y) {
    if (y && y.__esModule)
      return y;
    var v = {};
    if (y != null)
      for (var w in y)
        Object.prototype.hasOwnProperty.call(y, w) && (v[w] = y[w]);
    return v.default = y, v;
  }
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var n = ok(), r = t(n), i = ak(), s = t(i), o = lk(), a = e(o), u = qe(), c = t(u), l = Oe();
  Nt.parser = r.default;
  var p = {};
  l.extend(p, a);
  function f(y, v) {
    if (y.type === "Program")
      return d(y), y;
    r.default.yy = p, p.locInfo = function(S) {
      return new p.SourceLocation(v && v.srcName, S);
    };
    var w = r.default.parse(y);
    return w;
  }
  function h(y, v) {
    var w = f(y, v), S = new s.default(v);
    return S.accept(w);
  }
  function d(y) {
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
          for (var v = 0; v < y.parts.length; v++)
            if (typeof y.parts[v] != "string")
              throw new c.default("Invalid AST: PathExpression.parts must only contain strings");
        } else if (y.type === "NumberLiteral") {
          if (typeof y.value != "number" || !isFinite(y.value))
            throw new c.default("Invalid AST: NumberLiteral.value must be a number");
        } else if (y.type === "BooleanLiteral" && typeof y.value != "boolean")
          throw new c.default("Invalid AST: BooleanLiteral.value must be a boolean");
        Object.keys(y).forEach(function(w) {
          w !== "loc" && m(y[w]);
        });
      }
    }
  }
  function g(y) {
    return typeof y == "number" && isFinite(y) && Math.floor(y) === y && y >= 0;
  }
  return Nt;
}
var Ft = {}, Xu;
function ck() {
  if (Xu) return Ft;
  Xu = 1, Ft.__esModule = !0, Ft.Compiler = a, Ft.precompile = u, Ft.compile = c;
  function e(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var t = qe(), n = e(t), r = Oe(), i = vd(), s = e(i), o = [].slice;
  function a() {
  }
  a.prototype = {
    compiler: a,
    equals: function(h) {
      var d = this.opcodes.length;
      if (h.opcodes.length !== d)
        return !1;
      for (var m = 0; m < d; m++) {
        var g = this.opcodes[m], y = h.opcodes[m];
        if (g.opcode !== y.opcode || !l(g.args, y.args))
          return !1;
      }
      d = this.children.length;
      for (var m = 0; m < d; m++)
        if (!this.children[m].equals(h.children[m]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(h, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = r.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(h);
    },
    compileProgram: function(h) {
      var d = new this.compiler(), m = d.compile(h, this.options), g = this.guid++;
      return this.usePartial = this.usePartial || m.usePartial, this.children[g] = m, this.useDepths = this.useDepths || m.useDepths, g;
    },
    accept: function(h) {
      if (!this[h.type])
        throw new n.default("Unknown type: " + h.type, h);
      this.sourceNode.unshift(h);
      var d = this[h.type](h);
      return this.sourceNode.shift(), d;
    },
    Program: function(h) {
      this.options.blockParams.unshift(h.blockParams);
      for (var d = h.body, m = d.length, g = 0; g < m; g++)
        this.accept(d[g]);
      return this.options.blockParams.shift(), this.isSimple = m === 1, this.blockParams = h.blockParams ? h.blockParams.length : 0, this;
    },
    BlockStatement: function(h) {
      p(h);
      var d = h.program, m = h.inverse;
      d = d && this.compileProgram(d), m = m && this.compileProgram(m);
      var g = this.classifySexpr(h);
      g === "helper" ? this.helperSexpr(h, d, m) : g === "simple" ? (this.simpleSexpr(h), this.opcode("pushProgram", d), this.opcode("pushProgram", m), this.opcode("emptyHash"), this.opcode("blockValue", h.path.original)) : (this.ambiguousSexpr(h, d, m), this.opcode("pushProgram", d), this.opcode("pushProgram", m), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(h) {
      var d = h.program && this.compileProgram(h.program), m = this.setupFullMustacheParams(h, d, void 0), g = h.path;
      this.useDecorators = !0, this.opcode("registerDecorator", m.length, g.original);
    },
    PartialStatement: function(h) {
      this.usePartial = !0;
      var d = h.program;
      d && (d = this.compileProgram(h.program));
      var m = h.params;
      if (m.length > 1)
        throw new n.default("Unsupported number of partial arguments: " + m.length, h);
      m.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : m.push({ type: "PathExpression", parts: [], depth: 0 }));
      var g = h.name.original, y = h.name.type === "SubExpression";
      y && this.accept(h.name), this.setupFullMustacheParams(h, d, void 0, !0);
      var v = h.indent || "";
      this.options.preventIndent && v && (this.opcode("appendContent", v), v = ""), this.opcode("invokePartial", y, g, v), this.opcode("append");
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
      p(h);
      var d = this.classifySexpr(h);
      d === "simple" ? this.simpleSexpr(h) : d === "helper" ? this.helperSexpr(h) : this.ambiguousSexpr(h);
    },
    ambiguousSexpr: function(h, d, m) {
      var g = h.path, y = g.parts[0], v = d != null || m != null;
      this.opcode("getContext", g.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", m), g.strict = !0, this.accept(g), this.opcode("invokeAmbiguous", y, v);
    },
    simpleSexpr: function(h) {
      var d = h.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(h, d, m) {
      var g = this.setupFullMustacheParams(h, d, m), y = h.path, v = y.parts[0];
      if (this.options.knownHelpers[v])
        this.opcode("invokeKnownHelper", g.length, v);
      else {
        if (this.options.knownHelpersOnly)
          throw new n.default("You specified knownHelpersOnly, but used the unknown helper " + v, h);
        y.strict = !0, y.falsy = !0, this.accept(y), this.opcode("invokeHelper", g.length, y.original, s.default.helpers.simpleId(y));
      }
    },
    PathExpression: function(h) {
      this.addDepth(h.depth), this.opcode("getContext", h.depth);
      var d = h.parts[0], m = s.default.helpers.scopedId(h), g = !h.depth && !m && this.blockParamIndex(d);
      g ? this.opcode("lookupBlockParam", g, h.parts) : d ? h.data ? (this.options.data = !0, this.opcode("lookupData", h.depth, h.parts, h.strict)) : this.opcode("lookupOnContext", h.parts, h.falsy, h.strict, m) : this.opcode("pushContext");
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
      var d = h.pairs, m = 0, g = d.length;
      for (this.opcode("pushHash"); m < g; m++)
        this.pushParam(d[m].value);
      for (; m--; )
        this.opcode("assignToHash", d[m].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(h) {
      this.opcodes.push({
        opcode: h,
        args: o.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(h) {
      h && (this.useDepths = !0);
    },
    classifySexpr: function(h) {
      var d = s.default.helpers.simpleId(h.path), m = d && !!this.blockParamIndex(h.path.parts[0]), g = !m && s.default.helpers.helperExpression(h), y = !m && (g || d);
      if (y && !g) {
        var v = h.path.parts[0], w = this.options;
        w.knownHelpers[v] ? g = !0 : w.knownHelpersOnly && (y = !1);
      }
      return g ? "helper" : y ? "ambiguous" : "simple";
    },
    pushParams: function(h) {
      for (var d = 0, m = h.length; d < m; d++)
        this.pushParam(h[d]);
    },
    pushParam: function(h) {
      var d = h.value != null ? h.value : h.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), h.depth && this.addDepth(h.depth), this.opcode("getContext", h.depth || 0), this.opcode("pushStringParam", d, h.type), h.type === "SubExpression" && this.accept(h);
      else {
        if (this.trackIds) {
          var m = void 0;
          if (h.parts && !s.default.helpers.scopedId(h) && !h.depth && (m = this.blockParamIndex(h.parts[0])), m) {
            var g = h.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", m, g);
          } else
            d = h.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", h.type, d);
        }
        this.accept(h);
      }
    },
    setupFullMustacheParams: function(h, d, m, g) {
      var y = h.params;
      return this.pushParams(y), this.opcode("pushProgram", d), this.opcode("pushProgram", m), h.hash ? this.accept(h.hash) : this.opcode("emptyHash", g), y;
    },
    blockParamIndex: function(h) {
      for (var d = 0, m = this.options.blockParams.length; d < m; d++) {
        var g = this.options.blockParams[d], y = g && r.indexOf(g, h);
        if (g && y >= 0)
          return [d, y];
      }
    }
  };
  function u(f, h, d) {
    if (f == null || typeof f != "string" && f.type !== "Program")
      throw new n.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + f);
    h = h || {}, "data" in h || (h.data = !0), h.compat && (h.useDepths = !0);
    var m = d.parse(f, h), g = new d.Compiler().compile(m, h);
    return new d.JavaScriptCompiler().compile(g, h);
  }
  function c(f, h, d) {
    if (h === void 0 && (h = {}), f == null || typeof f != "string" && f.type !== "Program")
      throw new n.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + f);
    h = r.extend({}, h), "data" in h || (h.data = !0), h.compat && (h.useDepths = !0);
    var m = void 0;
    function g() {
      var v = d.parse(f, h), w = new d.Compiler().compile(v, h), S = new d.JavaScriptCompiler().compile(w, h, void 0, !0);
      return d.template(S);
    }
    function y(v, w) {
      return m || (m = g()), m.call(this, v, w);
    }
    return y._setup = function(v) {
      return m || (m = g()), m._setup(v);
    }, y._child = function(v, w, S, b) {
      return m || (m = g()), m._child(v, w, S, b);
    }, y;
  }
  function l(f, h) {
    if (f === h)
      return !0;
    if (r.isArray(f) && r.isArray(h) && f.length === h.length) {
      for (var d = 0; d < f.length; d++)
        if (!l(f[d], h[d]))
          return !1;
      return !0;
    }
  }
  function p(f) {
    if (!f.path.parts) {
      var h = f.path;
      f.path = {
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
var _r = { exports: {} }, Pr = { exports: {} }, xn = {}, Xi = {}, Tr = {}, Ar = {}, Ju;
function hk() {
  if (Ju) return Ar;
  Ju = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ar.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, Ar.decode = function(t) {
    var n = 65, r = 90, i = 97, s = 122, o = 48, a = 57, u = 43, c = 47, l = 26, p = 52;
    return n <= t && t <= r ? t - n : i <= t && t <= s ? t - i + l : o <= t && t <= a ? t - o + p : t == u ? 62 : t == c ? 63 : -1;
  }, Ar;
}
var Qu;
function Sd() {
  if (Qu) return Tr;
  Qu = 1;
  var e = hk(), t = 5, n = 1 << t, r = n - 1, i = n;
  function s(a) {
    return a < 0 ? (-a << 1) + 1 : (a << 1) + 0;
  }
  function o(a) {
    var u = (a & 1) === 1, c = a >> 1;
    return u ? -c : c;
  }
  return Tr.encode = function(u) {
    var c = "", l, p = s(u);
    do
      l = p & r, p >>>= t, p > 0 && (l |= i), c += e.encode(l);
    while (p > 0);
    return c;
  }, Tr.decode = function(u, c, l) {
    var p = u.length, f = 0, h = 0, d, m;
    do {
      if (c >= p)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (m = e.decode(u.charCodeAt(c++)), m === -1)
        throw new Error("Invalid base64 digit: " + u.charAt(c - 1));
      d = !!(m & i), m &= r, f = f + (m << h), h += t;
    } while (d);
    l.value = o(f), l.rest = c;
  }, Tr;
}
var Ji = {}, $u;
function Xn() {
  return $u || ($u = 1, (function(e) {
    function t(S, b, k) {
      if (b in S)
        return S[b];
      if (arguments.length === 3)
        return k;
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
    function s(S) {
      var b = "";
      return S.scheme && (b += S.scheme + ":"), b += "//", S.auth && (b += S.auth + "@"), S.host && (b += S.host), S.port && (b += ":" + S.port), S.path && (b += S.path), b;
    }
    e.urlGenerate = s;
    function o(S) {
      var b = S, k = i(S);
      if (k) {
        if (!k.path)
          return S;
        b = k.path;
      }
      for (var E = e.isAbsolute(b), T = b.split(/\/+/), D, V = 0, R = T.length - 1; R >= 0; R--)
        D = T[R], D === "." ? T.splice(R, 1) : D === ".." ? V++ : V > 0 && (D === "" ? (T.splice(R + 1, V), V = 0) : (T.splice(R, 2), V--));
      return b = T.join("/"), b === "" && (b = E ? "/" : "."), k ? (k.path = b, s(k)) : b;
    }
    e.normalize = o;
    function a(S, b) {
      S === "" && (S = "."), b === "" && (b = ".");
      var k = i(b), E = i(S);
      if (E && (S = E.path || "/"), k && !k.scheme)
        return E && (k.scheme = E.scheme), s(k);
      if (k || b.match(r))
        return b;
      if (E && !E.host && !E.path)
        return E.host = b, s(E);
      var T = b.charAt(0) === "/" ? b : o(S.replace(/\/+$/, "") + "/" + b);
      return E ? (E.path = T, s(E)) : T;
    }
    e.join = a, e.isAbsolute = function(S) {
      return S.charAt(0) === "/" || n.test(S);
    };
    function u(S, b) {
      S === "" && (S = "."), S = S.replace(/\/$/, "");
      for (var k = 0; b.indexOf(S + "/") !== 0; ) {
        var E = S.lastIndexOf("/");
        if (E < 0 || (S = S.slice(0, E), S.match(/^([^\/]+:\/)?\/*$/)))
          return b;
        ++k;
      }
      return Array(k + 1).join("../") + b.substr(S.length + 1);
    }
    e.relative = u;
    var c = (function() {
      var S = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in S);
    })();
    function l(S) {
      return S;
    }
    function p(S) {
      return h(S) ? "$" + S : S;
    }
    e.toSetString = c ? l : p;
    function f(S) {
      return h(S) ? S.slice(1) : S;
    }
    e.fromSetString = c ? l : f;
    function h(S) {
      if (!S)
        return !1;
      var b = S.length;
      if (b < 9 || S.charCodeAt(b - 1) !== 95 || S.charCodeAt(b - 2) !== 95 || S.charCodeAt(b - 3) !== 111 || S.charCodeAt(b - 4) !== 116 || S.charCodeAt(b - 5) !== 111 || S.charCodeAt(b - 6) !== 114 || S.charCodeAt(b - 7) !== 112 || S.charCodeAt(b - 8) !== 95 || S.charCodeAt(b - 9) !== 95)
        return !1;
      for (var k = b - 10; k >= 0; k--)
        if (S.charCodeAt(k) !== 36)
          return !1;
      return !0;
    }
    function d(S, b, k) {
      var E = g(S.source, b.source);
      return E !== 0 || (E = S.originalLine - b.originalLine, E !== 0) || (E = S.originalColumn - b.originalColumn, E !== 0 || k) || (E = S.generatedColumn - b.generatedColumn, E !== 0) || (E = S.generatedLine - b.generatedLine, E !== 0) ? E : g(S.name, b.name);
    }
    e.compareByOriginalPositions = d;
    function m(S, b, k) {
      var E = S.generatedLine - b.generatedLine;
      return E !== 0 || (E = S.generatedColumn - b.generatedColumn, E !== 0 || k) || (E = g(S.source, b.source), E !== 0) || (E = S.originalLine - b.originalLine, E !== 0) || (E = S.originalColumn - b.originalColumn, E !== 0) ? E : g(S.name, b.name);
    }
    e.compareByGeneratedPositionsDeflated = m;
    function g(S, b) {
      return S === b ? 0 : S === null ? 1 : b === null ? -1 : S > b ? 1 : -1;
    }
    function y(S, b) {
      var k = S.generatedLine - b.generatedLine;
      return k !== 0 || (k = S.generatedColumn - b.generatedColumn, k !== 0) || (k = g(S.source, b.source), k !== 0) || (k = S.originalLine - b.originalLine, k !== 0) || (k = S.originalColumn - b.originalColumn, k !== 0) ? k : g(S.name, b.name);
    }
    e.compareByGeneratedPositionsInflated = y;
    function v(S) {
      return JSON.parse(S.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = v;
    function w(S, b, k) {
      if (b = b || "", S && (S[S.length - 1] !== "/" && b[0] !== "/" && (S += "/"), b = S + b), k) {
        var E = i(k);
        if (!E)
          throw new Error("sourceMapURL could not be parsed");
        if (E.path) {
          var T = E.path.lastIndexOf("/");
          T >= 0 && (E.path = E.path.substring(0, T + 1));
        }
        b = a(s(E), b);
      }
      return o(b);
    }
    e.computeSourceURL = w;
  })(Ji)), Ji;
}
var Qi = {}, Zu;
function wd() {
  if (Zu) return Qi;
  Zu = 1;
  var e = Xn(), t = Object.prototype.hasOwnProperty, n = typeof Map < "u";
  function r() {
    this._array = [], this._set = n ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return r.fromArray = function(s, o) {
    for (var a = new r(), u = 0, c = s.length; u < c; u++)
      a.add(s[u], o);
    return a;
  }, r.prototype.size = function() {
    return n ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, r.prototype.add = function(s, o) {
    var a = n ? s : e.toSetString(s), u = n ? this.has(s) : t.call(this._set, a), c = this._array.length;
    (!u || o) && this._array.push(s), u || (n ? this._set.set(s, c) : this._set[a] = c);
  }, r.prototype.has = function(s) {
    if (n)
      return this._set.has(s);
    var o = e.toSetString(s);
    return t.call(this._set, o);
  }, r.prototype.indexOf = function(s) {
    if (n) {
      var o = this._set.get(s);
      if (o >= 0)
        return o;
    } else {
      var a = e.toSetString(s);
      if (t.call(this._set, a))
        return this._set[a];
    }
    throw new Error('"' + s + '" is not in the set.');
  }, r.prototype.at = function(s) {
    if (s >= 0 && s < this._array.length)
      return this._array[s];
    throw new Error("No element indexed by " + s);
  }, r.prototype.toArray = function() {
    return this._array.slice();
  }, Qi.ArraySet = r, Qi;
}
var $i = {}, ec;
function fk() {
  if (ec) return $i;
  ec = 1;
  var e = Xn();
  function t(r, i) {
    var s = r.generatedLine, o = i.generatedLine, a = r.generatedColumn, u = i.generatedColumn;
    return o > s || o == s && u >= a || e.compareByGeneratedPositionsInflated(r, i) <= 0;
  }
  function n() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return n.prototype.unsortedForEach = function(i, s) {
    this._array.forEach(i, s);
  }, n.prototype.add = function(i) {
    t(this._last, i) ? (this._last = i, this._array.push(i)) : (this._sorted = !1, this._array.push(i));
  }, n.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, $i.MappingList = n, $i;
}
var tc;
function kd() {
  if (tc) return Xi;
  tc = 1;
  var e = Sd(), t = Xn(), n = wd().ArraySet, r = fk().MappingList;
  function i(s) {
    s || (s = {}), this._file = t.getArg(s, "file", null), this._sourceRoot = t.getArg(s, "sourceRoot", null), this._skipValidation = t.getArg(s, "skipValidation", !1), this._sources = new n(), this._names = new n(), this._mappings = new r(), this._sourcesContents = null;
  }
  return i.prototype._version = 3, i.fromSourceMap = function(o) {
    var a = o.sourceRoot, u = new i({
      file: o.file,
      sourceRoot: a
    });
    return o.eachMapping(function(c) {
      var l = {
        generated: {
          line: c.generatedLine,
          column: c.generatedColumn
        }
      };
      c.source != null && (l.source = c.source, a != null && (l.source = t.relative(a, l.source)), l.original = {
        line: c.originalLine,
        column: c.originalColumn
      }, c.name != null && (l.name = c.name)), u.addMapping(l);
    }), o.sources.forEach(function(c) {
      var l = c;
      a !== null && (l = t.relative(a, c)), u._sources.has(l) || u._sources.add(l);
      var p = o.sourceContentFor(c);
      p != null && u.setSourceContent(c, p);
    }), u;
  }, i.prototype.addMapping = function(o) {
    var a = t.getArg(o, "generated"), u = t.getArg(o, "original", null), c = t.getArg(o, "source", null), l = t.getArg(o, "name", null);
    this._skipValidation || this._validateMapping(a, u, c, l), c != null && (c = String(c), this._sources.has(c) || this._sources.add(c)), l != null && (l = String(l), this._names.has(l) || this._names.add(l)), this._mappings.add({
      generatedLine: a.line,
      generatedColumn: a.column,
      originalLine: u != null && u.line,
      originalColumn: u != null && u.column,
      source: c,
      name: l
    });
  }, i.prototype.setSourceContent = function(o, a) {
    var u = o;
    this._sourceRoot != null && (u = t.relative(this._sourceRoot, u)), a != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(u)] = a) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(u)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, i.prototype.applySourceMap = function(o, a, u) {
    var c = a;
    if (a == null) {
      if (o.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      c = o.file;
    }
    var l = this._sourceRoot;
    l != null && (c = t.relative(l, c));
    var p = new n(), f = new n();
    this._mappings.unsortedForEach(function(h) {
      if (h.source === c && h.originalLine != null) {
        var d = o.originalPositionFor({
          line: h.originalLine,
          column: h.originalColumn
        });
        d.source != null && (h.source = d.source, u != null && (h.source = t.join(u, h.source)), l != null && (h.source = t.relative(l, h.source)), h.originalLine = d.line, h.originalColumn = d.column, d.name != null && (h.name = d.name));
      }
      var m = h.source;
      m != null && !p.has(m) && p.add(m);
      var g = h.name;
      g != null && !f.has(g) && f.add(g);
    }, this), this._sources = p, this._names = f, o.sources.forEach(function(h) {
      var d = o.sourceContentFor(h);
      d != null && (u != null && (h = t.join(u, h)), l != null && (h = t.relative(l, h)), this.setSourceContent(h, d));
    }, this);
  }, i.prototype._validateMapping = function(o, a, u, c) {
    if (a && typeof a.line != "number" && typeof a.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(o && "line" in o && "column" in o && o.line > 0 && o.column >= 0 && !a && !u && !c)) {
      if (o && "line" in o && "column" in o && a && "line" in a && "column" in a && o.line > 0 && o.column >= 0 && a.line > 0 && a.column >= 0 && u)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: o,
        source: u,
        original: a,
        name: c
      }));
    }
  }, i.prototype._serializeMappings = function() {
    for (var o = 0, a = 1, u = 0, c = 0, l = 0, p = 0, f = "", h, d, m, g, y = this._mappings.toArray(), v = 0, w = y.length; v < w; v++) {
      if (d = y[v], h = "", d.generatedLine !== a)
        for (o = 0; d.generatedLine !== a; )
          h += ";", a++;
      else if (v > 0) {
        if (!t.compareByGeneratedPositionsInflated(d, y[v - 1]))
          continue;
        h += ",";
      }
      h += e.encode(d.generatedColumn - o), o = d.generatedColumn, d.source != null && (g = this._sources.indexOf(d.source), h += e.encode(g - p), p = g, h += e.encode(d.originalLine - 1 - c), c = d.originalLine - 1, h += e.encode(d.originalColumn - u), u = d.originalColumn, d.name != null && (m = this._names.indexOf(d.name), h += e.encode(m - l), l = m)), f += h;
    }
    return f;
  }, i.prototype._generateSourcesContent = function(o, a) {
    return o.map(function(u) {
      if (!this._sourcesContents)
        return null;
      a != null && (u = t.relative(a, u));
      var c = t.toSetString(u);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, c) ? this._sourcesContents[c] : null;
    }, this);
  }, i.prototype.toJSON = function() {
    var o = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (o.file = this._file), this._sourceRoot != null && (o.sourceRoot = this._sourceRoot), this._sourcesContents && (o.sourcesContent = this._generateSourcesContent(o.sources, o.sourceRoot)), o;
  }, i.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Xi.SourceMapGenerator = i, Xi;
}
var vn = {}, Zi = {}, nc;
function dk() {
  return nc || (nc = 1, (function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(n, r, i, s, o, a) {
      var u = Math.floor((r - n) / 2) + n, c = o(i, s[u], !0);
      return c === 0 ? u : c > 0 ? r - u > 1 ? t(u, r, i, s, o, a) : a == e.LEAST_UPPER_BOUND ? r < s.length ? r : -1 : u : u - n > 1 ? t(n, u, i, s, o, a) : a == e.LEAST_UPPER_BOUND ? u : n < 0 ? -1 : n;
    }
    e.search = function(r, i, s, o) {
      if (i.length === 0)
        return -1;
      var a = t(
        -1,
        i.length,
        r,
        i,
        s,
        o || e.GREATEST_LOWER_BOUND
      );
      if (a < 0)
        return -1;
      for (; a - 1 >= 0 && s(i[a], i[a - 1], !0) === 0; )
        --a;
      return a;
    };
  })(Zi)), Zi;
}
var es = {}, rc;
function pk() {
  if (rc) return es;
  rc = 1;
  function e(r, i, s) {
    var o = r[i];
    r[i] = r[s], r[s] = o;
  }
  function t(r, i) {
    return Math.round(r + Math.random() * (i - r));
  }
  function n(r, i, s, o) {
    if (s < o) {
      var a = t(s, o), u = s - 1;
      e(r, a, o);
      for (var c = r[o], l = s; l < o; l++)
        i(r[l], c) <= 0 && (u += 1, e(r, u, l));
      e(r, u + 1, l);
      var p = u + 1;
      n(r, i, s, p - 1), n(r, i, p + 1, o);
    }
  }
  return es.quickSort = function(r, i) {
    n(r, i, 0, r.length - 1);
  }, es;
}
var ic;
function mk() {
  if (ic) return vn;
  ic = 1;
  var e = Xn(), t = dk(), n = wd().ArraySet, r = Sd(), i = pk().quickSort;
  function s(c, l) {
    var p = c;
    return typeof c == "string" && (p = e.parseSourceMapInput(c)), p.sections != null ? new u(p, l) : new o(p, l);
  }
  s.fromSourceMap = function(c, l) {
    return o.fromSourceMap(c, l);
  }, s.prototype._version = 3, s.prototype.__generatedMappings = null, Object.defineProperty(s.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), s.prototype.__originalMappings = null, Object.defineProperty(s.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), s.prototype._charIsMappingSeparator = function(l, p) {
    var f = l.charAt(p);
    return f === ";" || f === ",";
  }, s.prototype._parseMappings = function(l, p) {
    throw new Error("Subclasses must implement _parseMappings");
  }, s.GENERATED_ORDER = 1, s.ORIGINAL_ORDER = 2, s.GREATEST_LOWER_BOUND = 1, s.LEAST_UPPER_BOUND = 2, s.prototype.eachMapping = function(l, p, f) {
    var h = p || null, d = f || s.GENERATED_ORDER, m;
    switch (d) {
      case s.GENERATED_ORDER:
        m = this._generatedMappings;
        break;
      case s.ORIGINAL_ORDER:
        m = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var g = this.sourceRoot;
    m.map(function(y) {
      var v = y.source === null ? null : this._sources.at(y.source);
      return v = e.computeSourceURL(g, v, this._sourceMapURL), {
        source: v,
        generatedLine: y.generatedLine,
        generatedColumn: y.generatedColumn,
        originalLine: y.originalLine,
        originalColumn: y.originalColumn,
        name: y.name === null ? null : this._names.at(y.name)
      };
    }, this).forEach(l, h);
  }, s.prototype.allGeneratedPositionsFor = function(l) {
    var p = e.getArg(l, "line"), f = {
      source: e.getArg(l, "source"),
      originalLine: p,
      originalColumn: e.getArg(l, "column", 0)
    };
    if (f.source = this._findSourceIndex(f.source), f.source < 0)
      return [];
    var h = [], d = this._findMapping(
      f,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var m = this._originalMappings[d];
      if (l.column === void 0)
        for (var g = m.originalLine; m && m.originalLine === g; )
          h.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++d];
      else
        for (var y = m.originalColumn; m && m.originalLine === p && m.originalColumn == y; )
          h.push({
            line: e.getArg(m, "generatedLine", null),
            column: e.getArg(m, "generatedColumn", null),
            lastColumn: e.getArg(m, "lastGeneratedColumn", null)
          }), m = this._originalMappings[++d];
    }
    return h;
  }, vn.SourceMapConsumer = s;
  function o(c, l) {
    var p = c;
    typeof c == "string" && (p = e.parseSourceMapInput(c));
    var f = e.getArg(p, "version"), h = e.getArg(p, "sources"), d = e.getArg(p, "names", []), m = e.getArg(p, "sourceRoot", null), g = e.getArg(p, "sourcesContent", null), y = e.getArg(p, "mappings"), v = e.getArg(p, "file", null);
    if (f != this._version)
      throw new Error("Unsupported version: " + f);
    m && (m = e.normalize(m)), h = h.map(String).map(e.normalize).map(function(w) {
      return m && e.isAbsolute(m) && e.isAbsolute(w) ? e.relative(m, w) : w;
    }), this._names = n.fromArray(d.map(String), !0), this._sources = n.fromArray(h, !0), this._absoluteSources = this._sources.toArray().map(function(w) {
      return e.computeSourceURL(m, w, l);
    }), this.sourceRoot = m, this.sourcesContent = g, this._mappings = y, this._sourceMapURL = l, this.file = v;
  }
  o.prototype = Object.create(s.prototype), o.prototype.consumer = s, o.prototype._findSourceIndex = function(c) {
    var l = c;
    if (this.sourceRoot != null && (l = e.relative(this.sourceRoot, l)), this._sources.has(l))
      return this._sources.indexOf(l);
    var p;
    for (p = 0; p < this._absoluteSources.length; ++p)
      if (this._absoluteSources[p] == c)
        return p;
    return -1;
  }, o.fromSourceMap = function(l, p) {
    var f = Object.create(o.prototype), h = f._names = n.fromArray(l._names.toArray(), !0), d = f._sources = n.fromArray(l._sources.toArray(), !0);
    f.sourceRoot = l._sourceRoot, f.sourcesContent = l._generateSourcesContent(
      f._sources.toArray(),
      f.sourceRoot
    ), f.file = l._file, f._sourceMapURL = p, f._absoluteSources = f._sources.toArray().map(function(k) {
      return e.computeSourceURL(f.sourceRoot, k, p);
    });
    for (var m = l._mappings.toArray().slice(), g = f.__generatedMappings = [], y = f.__originalMappings = [], v = 0, w = m.length; v < w; v++) {
      var S = m[v], b = new a();
      b.generatedLine = S.generatedLine, b.generatedColumn = S.generatedColumn, S.source && (b.source = d.indexOf(S.source), b.originalLine = S.originalLine, b.originalColumn = S.originalColumn, S.name && (b.name = h.indexOf(S.name)), y.push(b)), g.push(b);
    }
    return i(f.__originalMappings, e.compareByOriginalPositions), f;
  }, o.prototype._version = 3, Object.defineProperty(o.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function a() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  o.prototype._parseMappings = function(l, p) {
    for (var f = 1, h = 0, d = 0, m = 0, g = 0, y = 0, v = l.length, w = 0, S = {}, b = {}, k = [], E = [], T, D, V, R, A; w < v; )
      if (l.charAt(w) === ";")
        f++, w++, h = 0;
      else if (l.charAt(w) === ",")
        w++;
      else {
        for (T = new a(), T.generatedLine = f, R = w; R < v && !this._charIsMappingSeparator(l, R); R++)
          ;
        if (D = l.slice(w, R), V = S[D], V)
          w += D.length;
        else {
          for (V = []; w < R; )
            r.decode(l, w, b), A = b.value, w = b.rest, V.push(A);
          if (V.length === 2)
            throw new Error("Found a source, but no line and column");
          if (V.length === 3)
            throw new Error("Found a source and line, but no column");
          S[D] = V;
        }
        T.generatedColumn = h + V[0], h = T.generatedColumn, V.length > 1 && (T.source = g + V[1], g += V[1], T.originalLine = d + V[2], d = T.originalLine, T.originalLine += 1, T.originalColumn = m + V[3], m = T.originalColumn, V.length > 4 && (T.name = y + V[4], y += V[4])), E.push(T), typeof T.originalLine == "number" && k.push(T);
      }
    i(E, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, i(k, e.compareByOriginalPositions), this.__originalMappings = k;
  }, o.prototype._findMapping = function(l, p, f, h, d, m) {
    if (l[f] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + l[f]);
    if (l[h] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + l[h]);
    return t.search(l, p, d, m);
  }, o.prototype.computeColumnSpans = function() {
    for (var l = 0; l < this._generatedMappings.length; ++l) {
      var p = this._generatedMappings[l];
      if (l + 1 < this._generatedMappings.length) {
        var f = this._generatedMappings[l + 1];
        if (p.generatedLine === f.generatedLine) {
          p.lastGeneratedColumn = f.generatedColumn - 1;
          continue;
        }
      }
      p.lastGeneratedColumn = 1 / 0;
    }
  }, o.prototype.originalPositionFor = function(l) {
    var p = {
      generatedLine: e.getArg(l, "line"),
      generatedColumn: e.getArg(l, "column")
    }, f = this._findMapping(
      p,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(l, "bias", s.GREATEST_LOWER_BOUND)
    );
    if (f >= 0) {
      var h = this._generatedMappings[f];
      if (h.generatedLine === p.generatedLine) {
        var d = e.getArg(h, "source", null);
        d !== null && (d = this._sources.at(d), d = e.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var m = e.getArg(h, "name", null);
        return m !== null && (m = this._names.at(m)), {
          source: d,
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
  }, o.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(l) {
      return l == null;
    }) : !1;
  }, o.prototype.sourceContentFor = function(l, p) {
    if (!this.sourcesContent)
      return null;
    var f = this._findSourceIndex(l);
    if (f >= 0)
      return this.sourcesContent[f];
    var h = l;
    this.sourceRoot != null && (h = e.relative(this.sourceRoot, h));
    var d;
    if (this.sourceRoot != null && (d = e.urlParse(this.sourceRoot))) {
      var m = h.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(m))
        return this.sourcesContent[this._sources.indexOf(m)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + h))
        return this.sourcesContent[this._sources.indexOf("/" + h)];
    }
    if (p)
      return null;
    throw new Error('"' + h + '" is not in the SourceMap.');
  }, o.prototype.generatedPositionFor = function(l) {
    var p = e.getArg(l, "source");
    if (p = this._findSourceIndex(p), p < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var f = {
      source: p,
      originalLine: e.getArg(l, "line"),
      originalColumn: e.getArg(l, "column")
    }, h = this._findMapping(
      f,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(l, "bias", s.GREATEST_LOWER_BOUND)
    );
    if (h >= 0) {
      var d = this._originalMappings[h];
      if (d.source === f.source)
        return {
          line: e.getArg(d, "generatedLine", null),
          column: e.getArg(d, "generatedColumn", null),
          lastColumn: e.getArg(d, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, vn.BasicSourceMapConsumer = o;
  function u(c, l) {
    var p = c;
    typeof c == "string" && (p = e.parseSourceMapInput(c));
    var f = e.getArg(p, "version"), h = e.getArg(p, "sections");
    if (f != this._version)
      throw new Error("Unsupported version: " + f);
    this._sources = new n(), this._names = new n();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = h.map(function(m) {
      if (m.url)
        throw new Error("Support for url field in sections not implemented.");
      var g = e.getArg(m, "offset"), y = e.getArg(g, "line"), v = e.getArg(g, "column");
      if (y < d.line || y === d.line && v < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = g, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: y + 1,
          generatedColumn: v + 1
        },
        consumer: new s(e.getArg(m, "map"), l)
      };
    });
  }
  return u.prototype = Object.create(s.prototype), u.prototype.constructor = s, u.prototype._version = 3, Object.defineProperty(u.prototype, "sources", {
    get: function() {
      for (var c = [], l = 0; l < this._sections.length; l++)
        for (var p = 0; p < this._sections[l].consumer.sources.length; p++)
          c.push(this._sections[l].consumer.sources[p]);
      return c;
    }
  }), u.prototype.originalPositionFor = function(l) {
    var p = {
      generatedLine: e.getArg(l, "line"),
      generatedColumn: e.getArg(l, "column")
    }, f = t.search(
      p,
      this._sections,
      function(d, m) {
        var g = d.generatedLine - m.generatedOffset.generatedLine;
        return g || d.generatedColumn - m.generatedOffset.generatedColumn;
      }
    ), h = this._sections[f];
    return h ? h.consumer.originalPositionFor({
      line: p.generatedLine - (h.generatedOffset.generatedLine - 1),
      column: p.generatedColumn - (h.generatedOffset.generatedLine === p.generatedLine ? h.generatedOffset.generatedColumn - 1 : 0),
      bias: l.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, u.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(l) {
      return l.consumer.hasContentsOfAllSources();
    });
  }, u.prototype.sourceContentFor = function(l, p) {
    for (var f = 0; f < this._sections.length; f++) {
      var h = this._sections[f], d = h.consumer.sourceContentFor(l, !0);
      if (d)
        return d;
    }
    if (p)
      return null;
    throw new Error('"' + l + '" is not in the SourceMap.');
  }, u.prototype.generatedPositionFor = function(l) {
    for (var p = 0; p < this._sections.length; p++) {
      var f = this._sections[p];
      if (f.consumer._findSourceIndex(e.getArg(l, "source")) !== -1) {
        var h = f.consumer.generatedPositionFor(l);
        if (h) {
          var d = {
            line: h.line + (f.generatedOffset.generatedLine - 1),
            column: h.column + (f.generatedOffset.generatedLine === h.line ? f.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, u.prototype._parseMappings = function(l, p) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var f = 0; f < this._sections.length; f++)
      for (var h = this._sections[f], d = h.consumer._generatedMappings, m = 0; m < d.length; m++) {
        var g = d[m], y = h.consumer._sources.at(g.source);
        y = e.computeSourceURL(h.consumer.sourceRoot, y, this._sourceMapURL), this._sources.add(y), y = this._sources.indexOf(y);
        var v = null;
        g.name && (v = h.consumer._names.at(g.name), this._names.add(v), v = this._names.indexOf(v));
        var w = {
          source: y,
          generatedLine: g.generatedLine + (h.generatedOffset.generatedLine - 1),
          generatedColumn: g.generatedColumn + (h.generatedOffset.generatedLine === g.generatedLine ? h.generatedOffset.generatedColumn - 1 : 0),
          originalLine: g.originalLine,
          originalColumn: g.originalColumn,
          name: v
        };
        this.__generatedMappings.push(w), typeof w.originalLine == "number" && this.__originalMappings.push(w);
      }
    i(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), i(this.__originalMappings, e.compareByOriginalPositions);
  }, vn.IndexedSourceMapConsumer = u, vn;
}
var ts = {}, sc;
function gk() {
  if (sc) return ts;
  sc = 1;
  var e = kd().SourceMapGenerator, t = Xn(), n = /(\r?\n)/, r = 10, i = "$$$isSourceNode$$$";
  function s(o, a, u, c, l) {
    this.children = [], this.sourceContents = {}, this.line = o ?? null, this.column = a ?? null, this.source = u ?? null, this.name = l ?? null, this[i] = !0, c != null && this.add(c);
  }
  return s.fromStringWithSourceMap = function(a, u, c) {
    var l = new s(), p = a.split(n), f = 0, h = function() {
      var v = S(), w = S() || "";
      return v + w;
      function S() {
        return f < p.length ? p[f++] : void 0;
      }
    }, d = 1, m = 0, g = null;
    return u.eachMapping(function(v) {
      if (g !== null)
        if (d < v.generatedLine)
          y(g, h()), d++, m = 0;
        else {
          var w = p[f] || "", S = w.substr(0, v.generatedColumn - m);
          p[f] = w.substr(v.generatedColumn - m), m = v.generatedColumn, y(g, S), g = v;
          return;
        }
      for (; d < v.generatedLine; )
        l.add(h()), d++;
      if (m < v.generatedColumn) {
        var w = p[f] || "";
        l.add(w.substr(0, v.generatedColumn)), p[f] = w.substr(v.generatedColumn), m = v.generatedColumn;
      }
      g = v;
    }, this), f < p.length && (g && y(g, h()), l.add(p.splice(f).join(""))), u.sources.forEach(function(v) {
      var w = u.sourceContentFor(v);
      w != null && (c != null && (v = t.join(c, v)), l.setSourceContent(v, w));
    }), l;
    function y(v, w) {
      if (v === null || v.source === void 0)
        l.add(w);
      else {
        var S = c ? t.join(c, v.source) : v.source;
        l.add(new s(
          v.originalLine,
          v.originalColumn,
          S,
          w,
          v.name
        ));
      }
    }
  }, s.prototype.add = function(a) {
    if (Array.isArray(a))
      a.forEach(function(u) {
        this.add(u);
      }, this);
    else if (a[i] || typeof a == "string")
      a && this.children.push(a);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + a
      );
    return this;
  }, s.prototype.prepend = function(a) {
    if (Array.isArray(a))
      for (var u = a.length - 1; u >= 0; u--)
        this.prepend(a[u]);
    else if (a[i] || typeof a == "string")
      this.children.unshift(a);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + a
      );
    return this;
  }, s.prototype.walk = function(a) {
    for (var u, c = 0, l = this.children.length; c < l; c++)
      u = this.children[c], u[i] ? u.walk(a) : u !== "" && a(u, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, s.prototype.join = function(a) {
    var u, c, l = this.children.length;
    if (l > 0) {
      for (u = [], c = 0; c < l - 1; c++)
        u.push(this.children[c]), u.push(a);
      u.push(this.children[c]), this.children = u;
    }
    return this;
  }, s.prototype.replaceRight = function(a, u) {
    var c = this.children[this.children.length - 1];
    return c[i] ? c.replaceRight(a, u) : typeof c == "string" ? this.children[this.children.length - 1] = c.replace(a, u) : this.children.push("".replace(a, u)), this;
  }, s.prototype.setSourceContent = function(a, u) {
    this.sourceContents[t.toSetString(a)] = u;
  }, s.prototype.walkSourceContents = function(a) {
    for (var u = 0, c = this.children.length; u < c; u++)
      this.children[u][i] && this.children[u].walkSourceContents(a);
    for (var l = Object.keys(this.sourceContents), u = 0, c = l.length; u < c; u++)
      a(t.fromSetString(l[u]), this.sourceContents[l[u]]);
  }, s.prototype.toString = function() {
    var a = "";
    return this.walk(function(u) {
      a += u;
    }), a;
  }, s.prototype.toStringWithSourceMap = function(a) {
    var u = {
      code: "",
      line: 1,
      column: 0
    }, c = new e(a), l = !1, p = null, f = null, h = null, d = null;
    return this.walk(function(m, g) {
      u.code += m, g.source !== null && g.line !== null && g.column !== null ? ((p !== g.source || f !== g.line || h !== g.column || d !== g.name) && c.addMapping({
        source: g.source,
        original: {
          line: g.line,
          column: g.column
        },
        generated: {
          line: u.line,
          column: u.column
        },
        name: g.name
      }), p = g.source, f = g.line, h = g.column, d = g.name, l = !0) : l && (c.addMapping({
        generated: {
          line: u.line,
          column: u.column
        }
      }), p = null, l = !1);
      for (var y = 0, v = m.length; y < v; y++)
        m.charCodeAt(y) === r ? (u.line++, u.column = 0, y + 1 === v ? (p = null, l = !1) : l && c.addMapping({
          source: g.source,
          original: {
            line: g.line,
            column: g.column
          },
          generated: {
            line: u.line,
            column: u.column
          },
          name: g.name
        })) : u.column++;
    }), this.walkSourceContents(function(m, g) {
      c.setSourceContent(m, g);
    }), { code: u.code, map: c };
  }, ts.SourceNode = s, ts;
}
var oc;
function yk() {
  return oc || (oc = 1, xn.SourceMapGenerator = kd().SourceMapGenerator, xn.SourceMapConsumer = mk().SourceMapConsumer, xn.SourceNode = gk().SourceNode), xn;
}
var ac;
function xk() {
  return ac || (ac = 1, (function(e, t) {
    t.__esModule = !0;
    var n = Oe(), r = void 0;
    try {
      var i = yk();
      r = i.SourceNode;
    } catch {
    }
    r || (r = function(a, u, c, l) {
      this.src = "", l && this.add(l);
    }, r.prototype = {
      add: function(u) {
        n.isArray(u) && (u = u.join("")), this.src += u;
      },
      prepend: function(u) {
        n.isArray(u) && (u = u.join("")), this.src = u + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function s(a, u, c) {
      if (n.isArray(a)) {
        for (var l = [], p = 0, f = a.length; p < f; p++)
          l.push(u.wrap(a[p], c));
        return l;
      } else if (typeof a == "boolean" || typeof a == "number")
        return a + "";
      return a;
    }
    function o(a) {
      this.srcFile = a, this.source = [];
    }
    o.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(u, c) {
        this.source.unshift(this.wrap(u, c));
      },
      push: function(u, c) {
        this.source.push(this.wrap(u, c));
      },
      merge: function() {
        var u = this.empty();
        return this.each(function(c) {
          u.add(["  ", c, `
`]);
        }), u;
      },
      each: function(u) {
        for (var c = 0, l = this.source.length; c < l; c++)
          u(this.source[c]);
      },
      empty: function() {
        var u = this.currentLocation || { start: {} };
        return new r(u.start.line, u.start.column, this.srcFile);
      },
      wrap: function(u) {
        var c = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return u instanceof r ? u : (u = s(u, this, c), new r(c.start.line, c.start.column, this.srcFile, u));
      },
      functionCall: function(u, c, l) {
        return l = this.generateList(l), this.wrap([u, c ? "." + c + "(" : "(", l, ")"]);
      },
      quotedString: function(u) {
        return '"' + (u + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(u) {
        var c = this, l = [];
        Object.keys(u).forEach(function(f) {
          var h = s(u[f], c);
          h !== "undefined" && l.push([c.quotedString(f), ":", h]);
        });
        var p = this.generateList(l);
        return p.prepend("{"), p.add("}"), p;
      },
      generateList: function(u) {
        for (var c = this.empty(), l = 0, p = u.length; l < p; l++)
          l && c.add(","), c.add(s(u[l], this));
        return c;
      },
      generateArray: function(u) {
        var c = this.generateList(u);
        return c.prepend("["), c.add("]"), c;
      }
    }, t.default = o, e.exports = t.default;
  })(Pr, Pr.exports)), Pr.exports;
}
var lc;
function vk() {
  return lc || (lc = 1, (function(e, t) {
    t.__esModule = !0;
    function n(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var r = Bo(), i = qe(), s = n(i), o = Oe(), a = xk(), u = n(a);
    function c(f) {
      this.value = f;
    }
    function l() {
    }
    l.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(h, d) {
        return this.internalNameLookup(h, d);
      },
      depthedLookup: function(h) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(h), ")"];
      },
      compilerInfo: function() {
        var h = r.COMPILER_REVISION, d = r.REVISION_CHANGES[h];
        return [h, d];
      },
      appendToBuffer: function(h, d, m) {
        return o.isArray(h) || (h = [h]), h = this.source.wrap(h, d), this.environment.isSimple ? ["return ", h, ";"] : m ? ["buffer += ", h, ";"] : (h.appendToBuffer = !0, h);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(h, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", h, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(h, d, m, g) {
        this.environment = h, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !g, this.name = this.environment.name, this.isChild = !!m, this.context = m || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(h, d), this.useDepths = this.useDepths || h.useDepths || h.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || h.useBlockParams;
        var y = h.opcodes, v = void 0, w = void 0, S = void 0, b = void 0;
        for (S = 0, b = y.length; S < b; S++)
          v = y[S], this.source.currentLocation = v.loc, w = w || v.loc, this[v.opcode].apply(this, v.args);
        if (this.source.currentLocation = w, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new s.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), g ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var k = this.createFunctionContext(g);
        if (this.isChild)
          return k;
        var E = {
          compiler: this.compilerInfo(),
          main: k
        };
        this.decorators && (E.main_d = this.decorators, E.useDecorators = !0);
        var T = this.context, D = T.programs, V = T.decorators;
        for (S = 0, b = D.length; S < b; S++)
          E[S] = D[S], V[S] && (E[S + "_d"] = V[S], E.useDecorators = !0);
        return this.environment.usePartial && (E.usePartial = !0), this.options.data && (E.useData = !0), this.useDepths && (E.useDepths = !0), this.useBlockParams && (E.useBlockParams = !0), this.options.compat && (E.compat = !0), g ? E.compilerOptions = this.options : (E.compiler = JSON.stringify(E.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, E = this.objectLiteral(E), d.srcName ? (E = E.toStringWithSourceMap({ file: d.destName }), E.map = E.map && E.map.toString()) : E = E.toString()), E;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new u.default(this.options.srcName), this.decorators = new u.default(this.options.srcName);
      },
      createFunctionContext: function(h) {
        var d = this, m = "", g = this.stackVars.concat(this.registers.list);
        g.length > 0 && (m += ", " + g.join(", "));
        var y = 0;
        Object.keys(this.aliases).forEach(function(S) {
          var b = d.aliases[S];
          b.children && b.referenceCount > 1 && (m += ", alias" + ++y + "=" + S, b.children[0] = "alias" + y);
        }), this.lookupPropertyFunctionIsUsed && (m += ", " + this.lookupPropertyFunctionVarDeclaration());
        var v = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && v.push("blockParams"), this.useDepths && v.push("depths");
        var w = this.mergeSource(m);
        return h ? (v.push(w), Function.apply(this, v)) : this.source.wrap(["function(", v.join(","), `) {
  `, w, "}"]);
      },
      mergeSource: function(h) {
        var d = this.environment.isSimple, m = !this.forceBuffer, g = void 0, y = void 0, v = void 0, w = void 0;
        return this.source.each(function(S) {
          S.appendToBuffer ? (v ? S.prepend("  + ") : v = S, w = S) : (v && (y ? v.prepend("buffer += ") : g = !0, w.add(";"), v = w = void 0), y = !0, d || (m = !1));
        }), m ? v ? (v.prepend("return "), w.add(";")) : y || this.source.push('return "";') : (h += ", buffer = " + (g ? "" : this.initializeBuffer()), v ? (v.prepend("return buffer + "), w.add(";")) : this.source.push("return buffer;")), h && this.source.prepend("var " + h.substring(2) + (g ? "" : `;
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
        var d = this.aliasable("container.hooks.blockHelperMissing"), m = [this.contextName(0)];
        this.setupHelperArgs(h, 0, m);
        var g = this.popStack();
        m.splice(1, 0, g), this.push(this.source.functionCall(d, "call", m));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var h = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var m = this.topStack();
        d.splice(1, 0, m), this.pushSource(["if (!", this.lastHelper, ") { ", m, " = ", this.source.functionCall(h, "call", d), "}"]);
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
          this.replaceStack(function(d) {
            return [" != null ? ", d, ' : ""'];
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
      lookupOnContext: function(h, d, m, g) {
        var y = 0;
        !g && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(h[y++])) : this.pushContext(), this.resolvePath("context", h, y, d, m);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(h, d) {
        this.useBlockParams = !0, this.push(["blockParams[", h[0], "][", h[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(h, d, m) {
        h ? this.pushStackLiteral("container.data(data, " + h + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, m);
      },
      resolvePath: function(h, d, m, g, y) {
        var v = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(p(this.options.strict && y, this, d, m, h));
          return;
        }
        for (var w = d.length, S = function(k) {
          v.replaceStack(function(E) {
            var T = v.nameLookup(E, d[k], h);
            return g ? [" && ", T] : [" != null ? ", T, " : ", E];
          });
        }, b = m; b < w; b++)
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
      pushStringParam: function(h, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof h == "string" ? this.pushString(h) : this.pushStackLiteral(h));
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
      registerDecorator: function(h, d) {
        var m = this.nameLookup("decorators", d, "decorator"), g = this.setupHelperArgs(d, h);
        this.decorators.push(["var decorator = ", m, ";"]), this.decorators.push(['if (typeof decorator !== "function") { throw new Error(', this.quotedString('Missing decorator: "' + d + '"'), "); }"]), this.decorators.push(["fn = ", this.decorators.functionCall("decorator", "", ["fn", "props", "container", g]), " || fn;"]);
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
      invokeHelper: function(h, d, m) {
        var g = this.popStack(), y = this.setupHelper(h, d), v = [];
        m && v.push(y.name), v.push(g), this.options.strict || v.push(this.aliasable("container.hooks.helperMissing"));
        var w = ["(", this.itemsSeparatedBy(v, "||"), ")"], S = this.source.functionCall(w, "call", y.callParams);
        this.push(S);
      },
      itemsSeparatedBy: function(h, d) {
        var m = [];
        m.push(h[0]);
        for (var g = 1; g < h.length; g++)
          m.push(d, h[g]);
        return m;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(h, d) {
        var m = this.setupHelper(h, d);
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
      invokeAmbiguous: function(h, d) {
        this.useRegister("helper");
        var m = this.popStack();
        this.emptyHash();
        var g = this.setupHelper(0, h, d), y = this.lastHelper = this.nameLookup("helpers", h, "helper"), v = ["(", "(helper = ", y, " || ", m, ")"];
        this.options.strict || (v[0] = "(helper = ", v.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", v, g.paramsInit ? ["),(", g.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", g.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(h, d, m) {
        var g = [], y = this.setupParams(d, 1, g);
        h && (d = this.popStack(), delete y.name), m && (y.indent = JSON.stringify(m)), y.helpers = "helpers", y.partials = "partials", y.decorators = "container.decorators", h ? g.unshift(d) : g.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (y.depths = "depths"), y = this.objectLiteral(y), g.push(y), this.push(this.source.functionCall("container.invokePartial", "", g));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(h) {
        var d = this.popStack(), m = void 0, g = void 0, y = void 0;
        this.trackIds && (y = this.popStack()), this.stringParams && (g = this.popStack(), m = this.popStack());
        var v = this.hash;
        m && (v.contexts[h] = m), g && (v.types[h] = g), y && (v.ids[h] = y), v.values[h] = d;
      },
      pushId: function(h, d, m) {
        h === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (m ? " + " + JSON.stringify("." + m) : "")) : h === "PathExpression" ? this.pushString(d) : h === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: l,
      compileChildren: function(h, d) {
        for (var m = h.children, g = void 0, y = void 0, v = 0, w = m.length; v < w; v++) {
          g = m[v], y = new this.compiler();
          var S = this.matchExistingProgram(g);
          if (S == null) {
            var b = this.context.programs.push("") - 1;
            g.index = b, g.name = "program" + b, this.context.programs[b] = y.compile(g, d, this.context, !this.precompile), this.context.decorators[b] = y.decorators, this.context.environments[b] = g, this.useDepths = this.useDepths || y.useDepths, this.useBlockParams = this.useBlockParams || y.useBlockParams, g.useDepths = this.useDepths, g.useBlockParams = this.useBlockParams;
          } else
            g.index = S.index, g.name = "program" + S.index, this.useDepths = this.useDepths || S.useDepths, this.useBlockParams = this.useBlockParams || S.useBlockParams;
        }
      },
      matchExistingProgram: function(h) {
        for (var d = 0, m = this.context.environments.length; d < m; d++) {
          var g = this.context.environments[d];
          if (g && g.equals(h))
            return g;
        }
      },
      programExpression: function(h) {
        var d = this.environment.children[h], m = [d.index, "data", d.blockParams];
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
        var d = ["("], m = void 0, g = void 0, y = void 0;
        if (!this.isInline())
          throw new s.default("replaceStack on non-inline");
        var v = this.popStack(!0);
        if (v instanceof c)
          m = [v.value], d = ["(", m], y = !0;
        else {
          g = !0;
          var w = this.incrStack();
          d = ["((", this.push(w), " = ", v, ")"], m = this.topStack();
        }
        var S = h.call(this, m);
        y || this.popStack(), g && this.stackSlot--, this.push(d.concat(S, ")"));
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
        for (var d = 0, m = h.length; d < m; d++) {
          var g = h[d];
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
        var d = this.isInline(), m = (d ? this.inlineStack : this.compileStack).pop();
        if (!h && m instanceof c)
          return m.value;
        if (!d) {
          if (!this.stackSlot)
            throw new s.default("Invalid stack pop");
          this.stackSlot--;
        }
        return m;
      },
      topStack: function() {
        var h = this.isInline() ? this.inlineStack : this.compileStack, d = h[h.length - 1];
        return d instanceof c ? d.value : d;
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
        var d = this.aliases[h];
        return d ? (d.referenceCount++, d) : (d = this.aliases[h] = this.source.wrap(h), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(h, d, m) {
        var g = [], y = this.setupHelperArgs(d, h, g, m), v = this.nameLookup("helpers", d, "helper"), w = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: g,
          paramsInit: y,
          name: v,
          callParams: [w].concat(g)
        };
      },
      setupParams: function(h, d, m) {
        var g = {}, y = [], v = [], w = [], S = !m, b = void 0;
        S && (m = []), g.name = this.quotedString(h), g.hash = this.popStack(), this.trackIds && (g.hashIds = this.popStack()), this.stringParams && (g.hashTypes = this.popStack(), g.hashContexts = this.popStack());
        var k = this.popStack(), E = this.popStack();
        (E || k) && (g.fn = E || "container.noop", g.inverse = k || "container.noop");
        for (var T = d; T--; )
          b = this.popStack(), m[T] = b, this.trackIds && (w[T] = this.popStack()), this.stringParams && (v[T] = this.popStack(), y[T] = this.popStack());
        return S && (g.args = this.source.generateArray(m)), this.trackIds && (g.ids = this.source.generateArray(w)), this.stringParams && (g.types = this.source.generateArray(v), g.contexts = this.source.generateArray(y)), this.options.data && (g.data = "data"), this.useBlockParams && (g.blockParams = "blockParams"), g;
      },
      setupHelperArgs: function(h, d, m, g) {
        var y = this.setupParams(h, d, m);
        return y.loc = JSON.stringify(this.source.currentLocation), y = this.objectLiteral(y), g ? (this.useRegister("options"), m.push("options"), ["options=", y]) : m ? (m.push(y), "") : y;
      }
    }, (function() {
      for (var f = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), h = l.RESERVED_WORDS = {}, d = 0, m = f.length; d < m; d++)
        h[f[d]] = !0;
    })(), l.isValidJavaScriptVariableName = function(f) {
      return !l.RESERVED_WORDS[f] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(f);
    };
    function p(f, h, d, m, g) {
      var y = h.popStack(), v = d.length;
      f && v--;
      for (var w = m; w < v; w++)
        y = h.nameLookup(y, d[w], g);
      return f ? [h.aliasable("container.strict"), "(", y, ", ", h.quotedString(d[v]), ", ", JSON.stringify(h.source.currentLocation), " )"] : y;
    }
    t.default = l, e.exports = t.default;
  })(_r, _r.exports)), _r.exports;
}
var uc;
function bk() {
  return uc || (uc = 1, (function(e, t) {
    t.__esModule = !0;
    function n(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var r = sk(), i = n(r), s = vd(), o = n(s), a = uk(), u = ck(), c = vk(), l = n(c), p = bd(), f = n(p), h = xd(), d = n(h), m = i.default.create;
    function g() {
      var v = m();
      return v.compile = function(w, S) {
        return u.compile(w, S, v);
      }, v.precompile = function(w, S) {
        return u.precompile(w, S, v);
      }, v.AST = o.default, v.Compiler = u.Compiler, v.JavaScriptCompiler = l.default, v.Parser = a.parser, v.parse = a.parse, v.parseWithoutProcessing = a.parseWithoutProcessing, v;
    }
    var y = g();
    y.create = g, d.default(y), y.Visitor = f.default, y.default = y, t.default = y, e.exports = t.default;
  })(or, or.exports)), or.exports;
}
var Sk = bk();
const cc = /* @__PURE__ */ Bs(Sk), hc = {}, wk = `<!doctype html>
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
</html>`, kk = `<h1>{{title}}</h1>
<p>Hello {{name}},</p>
<p>Your OTP code is <strong>{{code}}</strong>.</p>
`, Ck = `<div class="alert alert-{{type}}">
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
{{/if}}`, Ek = `<h2>Task Summary</h2>
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
</div>`, Cd = {
  "base-layout": wk,
  "otp-email": kk,
  alert: Ck,
  "task-summary": Ek
};
function _k() {
  return typeof process < "u" && !!(process.versions && process.versions.node);
}
function Pk(e) {
  const t = e?.templates ?? Cd ?? null, n = e?.basePath;
  async function r(i) {
    const { templateName: s, data: o } = i;
    if (t && t[s])
      try {
        return { success: !0, html: cc.compile(t[s])(o) };
      } catch (a) {
        return { success: !1, error: a instanceof Error ? a.message : String(a) };
      }
    if (_k() && n) {
      const a = hc.join(n, `${s}.hbs`);
      try {
        const u = await hc.readFile(a, "utf-8");
        return { success: !0, html: cc.compile(u)(o) };
      } catch (u) {
        return { success: !1, error: u instanceof Error ? u.message : String(u) };
      }
    }
    return { success: !1, error: "Template not found: provide a templates map or a basePath (Node)." };
  }
  return { configure: () => {
  }, render: r };
}
const gE = Pk({ templates: Cd });
export {
  AC as $,
  aC as A,
  qC as B,
  A1 as C,
  dC as D,
  $o as E,
  xC as F,
  HC as G,
  zC as H,
  SC as I,
  Up as J,
  Op as K,
  _c as L,
  W2 as M,
  Fp as N,
  wC as O,
  kC as P,
  sC as Q,
  CC as R,
  BC as S,
  EC as T,
  _C as U,
  PC as V,
  ft as W,
  Ec as X,
  Gt as Y,
  TC as Z,
  Vs as _,
  hC as a,
  RC as a0,
  VC as a1,
  LC as a2,
  ud as a3,
  fE as a4,
  lS as a5,
  IC as a6,
  OC as a7,
  oC as a8,
  MC as a9,
  DC as aa,
  jC as ab,
  te as ac,
  mE as ad,
  Pk as ae,
  pE as af,
  Yi as ag,
  cE as ah,
  NC as ai,
  dE as aj,
  O as ak,
  gE as al,
  cd as am,
  UC as an,
  Ye as ao,
  hE as ap,
  _o as b,
  uC as c,
  X2 as d,
  Gw as e,
  U1 as f,
  FC as g,
  W1 as h,
  cC as i,
  J2 as j,
  iC as k,
  $2 as l,
  pC as m,
  bs as n,
  mC as o,
  fC as p,
  gC as q,
  yC as r,
  So as s,
  Mp as t,
  nS as u,
  vC as v,
  bC as w,
  At as x,
  Dp as y,
  rS as z
};
