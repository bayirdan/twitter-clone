import {
  o as r,
  c as i,
  a as e,
  r as v,
  p,
  b as u,
  d as a,
  w as g,
  e as y,
  n as b,
  t as d,
  F as f,
  f as x,
  g as S,
  v as V,
  i as C,
  u as T,
  h as K,
  j as z,
  k as D,
} from "./vendor.a84faa8c.js";
const E = function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) _(n);
  new MutationObserver((n) => {
    for (const l of n)
      if (l.type === "childList")
        for (const w of l.addedNodes)
          w.tagName === "LINK" && w.rel === "modulepreload" && _(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
    const l = {};
    return (
      n.integrity && (l.integrity = n.integrity),
      n.referrerpolicy && (l.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function _(n) {
    if (n.ep) return;
    n.ep = !0;
    const l = o(n);
    fetch(n.href, l);
  }
};
E();
var c = (t, s) => {
  for (const [o, _] of s) t[o] = _;
  return t;
};
const I = {},
  N = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  L = e(
    "g",
    null,
    [
      e("path", {
        d: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",
      }),
    ],
    -1
  ),
  A = [L];
function O(t, s) {
  return r(), i("svg", N, A);
}
var F = c(I, [["render", O]]);
const Y = {},
  P = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  J = e(
    "g",
    null,
    [
      e("path", {
        d: "M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z",
      }),
    ],
    -1
  ),
  R = [J];
function Z(t, s) {
  return r(), i("svg", P, R);
}
var W = c(Y, [["render", Z]]);
const G = {},
  U = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  Q = e(
    "g",
    null,
    [
      e("path", {
        d: "M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z",
      }),
    ],
    -1
  ),
  X = [Q];
function ee(t, s) {
  return r(), i("svg", U, X);
}
var te = c(G, [["render", ee]]);
const se = {},
  re = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  ie = e(
    "g",
    null,
    [
      e("path", {
        d: "M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z",
      }),
    ],
    -1
  ),
  ae = [ie];
function ce(t, s) {
  return r(), i("svg", re, ae);
}
var ne = c(se, [["render", ce]]);
const oe = {},
  le = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  _e = e(
    "g",
    null,
    [
      e("path", {
        d: "M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z",
      }),
    ],
    -1
  ),
  de = [_e];
function he(t, s) {
  return r(), i("svg", le, de);
}
var pe = c(oe, [["render", he]]);
const ue = {},
  me = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  ve = e(
    "g",
    null,
    [
      e("path", {
        d: "M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z",
      }),
    ],
    -1
  ),
  ge = [ve];
function we(t, s) {
  return r(), i("svg", me, ge);
}
var ye = c(ue, [["render", we]]);
const fe = {},
  xe = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  $e = e(
    "g",
    null,
    [
      e("path", {
        d: "M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z",
      }),
      e("path", {
        d: "M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z",
      }),
    ],
    -1
  ),
  be = [$e];
function ze(t, s) {
  return r(), i("svg", xe, be);
}
var ke = c(fe, [["render", ze]]);
const qe = {},
  Me = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  Be = e(
    "g",
    null,
    [
      e("path", {
        d: "M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z",
      }),
    ],
    -1
  ),
  je = [Be];
function He(t, s) {
  return r(), i("svg", Me, je);
}
var Se = c(qe, [["render", He]]);
const Ve = {},
  Ce = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
  },
  Te = e(
    "g",
    null,
    [
      e("circle", { cx: "17", cy: "12", r: "1.5" }),
      e("circle", { cx: "12", cy: "12", r: "1.5" }),
      e("circle", { cx: "7", cy: "12", r: "1.5" }),
      e("path", {
        d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
      }),
    ],
    -1
  ),
  Ke = [Te];
function De(t, s) {
  return r(), i("svg", Ce, Ke);
}
var Ee = c(Ve, [["render", De]]);
const Ie = {},
  Ne = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  Le = e(
    "g",
    null,
    [
      e("path", {
        d: "M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z",
      }),
    ],
    -1
  ),
  Ae = [Le];
function Oe(t, s) {
  return r(), i("svg", Ne, Ae);
}
var Fe = c(Ie, [["render", Oe]]);
const Ye = {},
  Pe = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi",
  },
  Je = e(
    "g",
    null,
    [
      e("circle", { cx: "5", cy: "12", r: "2" }),
      e("circle", { cx: "12", cy: "12", r: "2" }),
      e("circle", { cx: "19", cy: "12", r: "2" }),
    ],
    -1
  ),
  Re = [Je];
function Ze(t, s) {
  return r(), i("svg", Pe, Re);
}
var $ = c(Ye, [["render", Ze]]);
const We = {},
  Ge = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-111h2gw r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr",
  },
  Ue = e(
    "g",
    null,
    [
      e("path", {
        d: "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z",
      }),
    ],
    -1
  ),
  Qe = [Ue];
function Xe(t, s) {
  return r(), i("svg", Ge, Qe);
}
var k = c(We, [["render", Xe]]),
  q = "./assets/pp.91eb3196.jpg";
const e2 = {},
  M = (t) => (p("data-v-656d44fc"), (t = t()), u(), t),
  t2 = { class: "profile" },
  s2 = M(() => e("div", { class: "pp" }, [e("img", { src: q, alt: "" })], -1)),
  r2 = M(() =>
    e(
      "div",
      { class: "info" },
      [
        e("span", { class: "name" }, "Burkay"),
        e("span", { class: "username" }, "@bayirdan"),
      ],
      -1
    )
  ),
  i2 = { class: "more" };
function a2(t, s) {
  return (
    r(),
    i("div", t2, [
      s2,
      r2,
      e("div", i2, [v(t.$slots, "default", {}, void 0, !0)]),
    ])
  );
}
var c2 = c(e2, [
  ["render", a2],
  ["__scopeId", "data-v-656d44fc"],
]);
const h = (t) => (p("data-v-71730bcc"), (t = t()), u(), t),
  n2 = { class: "navbar-box" },
  o2 = { class: "menu-box" },
  l2 = { class: "menu" },
  _2 = { class: "logo mobile" },
  d2 = { class: "items" },
  h2 = { class: "item active" },
  p2 = h(() => e("span", null, "Home", -1)),
  u2 = { class: "item mobile no-tablet" },
  m2 = h(() => e("span", null, "Explore", -1)),
  v2 = { class: "item no-mobile tablet" },
  g2 = h(() => e("span", null, "Search", -1)),
  w2 = { class: "item" },
  y2 = h(() => e("span", null, "Notifications", -1)),
  f2 = { class: "item" },
  x2 = h(() => e("span", null, "Messages", -1)),
  $2 = { class: "item mobile" },
  b2 = h(() => e("span", null, "Bookmarks", -1)),
  z2 = { class: "item mobile" },
  k2 = h(() => e("span", null, "Lists", -1)),
  q2 = { class: "item mobile" },
  M2 = h(() => e("span", null, "Profile", -1)),
  B2 = { class: "item mobile" },
  j2 = h(() => e("span", null, "More", -1)),
  H2 = { class: "btn" },
  S2 = { class: "btn-mobile" },
  V2 = h(() => e("span", { class: "btn-title" }, "Tweet", -1)),
  C2 = {
    setup(t) {
      return (s, o) => (
        r(),
        i("div", n2, [
          e("div", o2, [
            e("div", l2, [
              e("div", _2, [a(F, { width: "30px", height: "30px" })]),
              e("div", d2, [
                e("div", h2, [a(W), p2]),
                e("div", u2, [a(te), m2]),
                e("div", v2, [a(k), g2]),
                e("div", w2, [a(ne), y2]),
                e("div", f2, [a(pe), x2]),
                e("div", $2, [a(ye), b2]),
                e("div", z2, [a(ke), k2]),
                e("div", q2, [a(Se), M2]),
                e("div", B2, [a(Ee), j2]),
              ]),
              e("button", H2, [e("div", S2, [a(Fe)]), V2]),
              a(
                c2,
                { class: "profile" },
                {
                  default: g(() => [a($, { width: "18px", height: "18px" })]),
                  _: 1,
                }
              ),
            ]),
          ]),
        ])
      );
    },
  };
var T2 = c(C2, [["__scopeId", "data-v-71730bcc"]]);
const K2 = {},
  D2 = { class: "top-header" };
function E2(t, s) {
  return r(), i("div", D2, [v(t.$slots, "default", {}, void 0, !0)]);
}
var I2 = c(K2, [
  ["render", E2],
  ["__scopeId", "data-v-3ff4e45b"],
]);
const N2 = { class: "time-line" },
  L2 = {
    setup(t) {
      return (s, o) => (
        r(),
        i("div", N2, [
          v(s.$slots, "topTitle"),
          v(s.$slots, "main"),
          v(s.$slots, "tweets"),
        ])
      );
    },
  };
const A2 = {},
  O2 = { class: "right-box" };
function F2(t, s) {
  return r(), i("div", O2, [v(t.$slots, "default", {}, void 0, !0)]);
}
var Y2 = c(A2, [
  ["render", F2],
  ["__scopeId", "data-v-6cae3153"],
]);
const P2 = { class: "search-svg" },
  J2 = {
    setup(t) {
      const s = y(!1);
      return (o, _) => (
        r(),
        i(
          "div",
          { class: b(s.value ? "search-box input-focus" : "search-box") },
          [
            e("div", P2, [
              a(
                k,
                {
                  class: "svg",
                  fill: s.value ? "var(--blue)" : "#6e767d",
                  width: "19px",
                  height: "19px",
                },
                null,
                8,
                ["fill"]
              ),
            ]),
            e(
              "input",
              {
                onFocus: _[0] || (_[0] = (n) => (s.value = !0)),
                onBlur: _[1] || (_[1] = (n) => (s.value = !1)),
                type: "text",
                name: "searcBar",
                id: "",
                placeholder: "Search Twitter",
              },
              null,
              32
            ),
          ],
          2
        )
      );
    },
  };
var R2 = c(J2, [["__scopeId", "data-v-28d5cb74"]]);
const Z2 = {},
  W2 = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  G2 = e(
    "g",
    null,
    [
      e("path", {
        d: "M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z",
      }),
      e("path", {
        d: "M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z",
      }),
    ],
    -1
  ),
  U2 = [G2];
function Q2(t, s) {
  return r(), i("svg", W2, U2);
}
var X2 = c(Z2, [["render", Q2]]);
const e1 = { class: "title" },
  t1 = { class: "svg" },
  s1 = {
    props: { item: Object },
    setup(t) {
      const s = t,
        o = (_) => _.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1.");
      return (_, n) => (
        r(),
        i("li", null, [
          e("div", e1, [
            e("small", null, d(s.item.topic), 1),
            e("span", null, d(s.item.title), 1),
            e("small", null, d(o(s.item.tweet_count)) + " Tweets", 1),
          ]),
          e("div", t1, [a($, { width: "18px", height: "18px" })]),
        ])
      );
    },
  };
var r1 = c(s1, [["__scopeId", "data-v-2fff28c5"]]);
const B = (t) => (p("data-v-0efbf5df"), (t = t()), u(), t),
  i1 = { class: "trend-box" },
  a1 = { class: "title" },
  c1 = B(() => e("span", null, "Trends for you", -1)),
  n1 = { class: "setting-svg" },
  o1 = B(() =>
    e("div", { class: "show-more" }, [e("a", null, "Show more")], -1)
  ),
  l1 = {
    setup(t) {
      const s = [
        { topic: "Business & Finance", title: "#usdtry", tweet_count: 5300 },
        { topic: "Trending in World", title: "COVID-19", tweet_count: 872250 },
        { topic: "Sports", title: "#galatasaray", tweet_count: 8340 },
        { topic: "Finance", title: "Bitcoin", tweet_count: 244800 },
        {
          topic: "Trending in Turkey",
          title: "#istanbulsozlesmesiyasatir",
          tweet_count: 102100,
        },
      ];
      return (o, _) => (
        r(),
        i("div", i1, [
          e("div", a1, [
            c1,
            e("div", n1, [a(X2, { width: "20px", height: "20px" })]),
          ]),
          (r(),
          i(
            f,
            null,
            x(s, (n, l) =>
              e("ul", { key: l }, [a(r1, { item: n }, null, 8, ["item"])])
            ),
            64
          )),
          o1,
        ])
      );
    },
  };
var _1 = c(l1, [["__scopeId", "data-v-0efbf5df"]]);
const d1 = (t) => (p("data-v-c104e124"), (t = t()), u(), t),
  h1 = { class: "info" },
  p1 = { class: "pp" },
  u1 = ["src"],
  m1 = { class: "name" },
  v1 = { class: "username" },
  g1 = d1(() => e("button", { class: "btn" }, "Follow", -1)),
  w1 = {
    props: { item: Object },
    setup(t) {
      const s = t;
      return (o, _) => (
        r(),
        i("li", null, [
          e("div", h1, [
            e("div", p1, [
              e(
                "img",
                { src: s.item.pp_route, alt: "", srcset: "" },
                null,
                8,
                u1
              ),
            ]),
            e("div", m1, [
              e("small", null, d(s.item.name), 1),
              e("small", v1, d(s.item.username), 1),
            ]),
          ]),
          g1,
        ])
      );
    },
  };
var y1 = c(w1, [["__scopeId", "data-v-c104e124"]]);
const j = (t) => (p("data-v-34708345"), (t = t()), u(), t),
  f1 = { class: "follow-box" },
  x1 = j(() => e("span", null, "Who to follow", -1)),
  $1 = j(() =>
    e("div", { class: "show-more" }, [e("a", null, "Show more")], -1)
  ),
  b1 = {
    setup(t) {
      const s = [
        {
          pp_route: "./assets/follow1-pp.jpg",
          name: "Brad Traversy",
          username: "@traversymedia",
        },
        {
          pp_route: "./assets/follow2-pp.jpg",
          name: "Dev Ed",
          username: "@developedbyed",
        },
      ];
      return (o, _) => (
        r(),
        i("div", f1, [
          x1,
          (r(),
          i(
            f,
            null,
            x(s, (n, l) =>
              e("ul", { key: l }, [a(y1, { item: n }, null, 8, ["item"])])
            ),
            64
          )),
          $1,
        ])
      );
    },
  };
var z1 = c(b1, [["__scopeId", "data-v-34708345"]]);
const k1 = {},
  m = (t) => (p("data-v-399fc6ec"), (t = t()), u(), t),
  q1 = m(() => e("a", null, "Terms of Service", -1)),
  M1 = m(() => e("a", null, "Privacy Policy", -1)),
  B1 = m(() => e("a", null, "Cookie Policy", -1)),
  j1 = m(() => e("a", null, "Imprint", -1)),
  H1 = m(() => e("a", null, "Ads into", -1)),
  S1 = m(() => e("a", null, "More...", -1)),
  V1 = m(() => e("a", { class: "no-cursor" }, "\xA9 2021 Bayirdan, Inc", -1)),
  C1 = [q1, M1, B1, j1, H1, S1, V1];
function T1(t, s) {
  return r(), i("div", null, C1);
}
var K1 = c(k1, [
  ["render", T1],
  ["__scopeId", "data-v-399fc6ec"],
]);
const D1 = {},
  E1 = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-111h2gw r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz",
  },
  I1 = e(
    "g",
    { class: "st-current" },
    [
      e("path", {
        d: "M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z",
        class: "",
      }),
    ],
    -1
  ),
  N1 = [I1];
function L1(t, s) {
  return r(), i("svg", E1, N1);
}
var A1 = c(D1, [["render", L1]]);
const O1 = {},
  F1 = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  Y1 = e(
    "g",
    null,
    [
      e("path", {
        d: "M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z",
      }),
      e("circle", { cx: "8.868", cy: "8.309", r: "1.542" }),
    ],
    -1
  ),
  P1 = [Y1];
function J1(t, s) {
  return r(), i("svg", F1, P1);
}
var R1 = c(O1, [["render", J1]]);
const Z1 = {},
  W1 = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  G1 = e(
    "g",
    null,
    [
      e("path", {
        d: "M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z",
      }),
      e("path", {
        d: "M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z",
      }),
    ],
    -1
  ),
  U1 = [G1];
function Q1(t, s) {
  return r(), i("svg", W1, U1);
}
var X1 = c(Z1, [["render", Q1]]);
const et = {},
  tt = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  st = e(
    "g",
    null,
    [
      e("path", {
        d: "M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z",
      }),
    ],
    -1
  ),
  rt = [st];
function it(t, s) {
  return r(), i("svg", tt, rt);
}
var at = c(et, [["render", it]]);
const ct = {},
  nt = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  ot = e(
    "g",
    null,
    [
      e("path", {
        d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
      }),
      e("path", {
        d: "M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z",
      }),
      e("circle", { cx: "14.738", cy: "9.458", r: "1.478" }),
      e("circle", { cx: "9.262", cy: "9.458", r: "1.478" }),
    ],
    -1
  ),
  lt = [ot];
function _t(t, s) {
  return r(), i("svg", nt, lt);
}
var dt = c(ct, [["render", _t]]);
const ht = {},
  pt = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  ut = e(
    "g",
    null,
    [
      e("path", { d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z" }),
      e("path", {
        d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z",
      }),
      e("path", {
        d: "M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z",
      }),
      e("path", {
        d: "M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z",
      }),
    ],
    -1
  ),
  mt = [ut];
function vt(t, s) {
  return r(), i("svg", pt, mt);
}
var gt = c(ht, [["render", vt]]);
const H = (t) => (p("data-v-f9b366d6"), (t = t()), u(), t),
  wt = { class: "pp-and-tweet" },
  yt = H(() =>
    e(
      "div",
      { class: "pp-box" },
      [e("div", { class: "pp" }, [e("img", { src: q, alt: "" })])],
      -1
    )
  ),
  ft = { class: "tweet" },
  xt = { class: "who-reply" },
  $t = H(() => e("span", null, "Everyone can reply", -1)),
  bt = { class: "add-other-box" },
  zt = { class: "add-other" },
  kt = { class: "item" },
  qt = { class: "item" },
  Mt = { class: "item invisible" },
  Bt = { class: "item" },
  jt = { class: "item invisible" },
  Ht = {
    setup(t) {
      const s = y("");
      let o = y(!1);
      return (_, n) => (
        r(),
        i("div", wt, [
          yt,
          e("div", ft, [
            S(
              e(
                "input",
                {
                  type: "text",
                  name: "newTweet",
                  id: "",
                  placeholder: "What's happening?",
                  "onUpdate:modelValue": n[0] || (n[0] = (l) => (s.value = l)),
                  onFocus:
                    n[1] || (n[1] = (l) => (C(o) ? (o.value = !0) : (o = !0))),
                },
                null,
                544
              ),
              [[V, s.value]]
            ),
            e(
              "div",
              { class: b(T(o) ? "who-reply-box change-who" : "who-reply-box") },
              [
                e("div", xt, [
                  a(A1, {
                    width: "16px",
                    hight: "16px",
                    fill: "var(--blue-hover)",
                  }),
                  $t,
                ]),
              ],
              2
            ),
            e("div", bt, [
              e("div", zt, [
                e("div", kt, [
                  a(R1, { width: "20px", height: "20px", fill: "var(--blue)" }),
                ]),
                e("div", qt, [
                  a(X1, { width: "20px", height: "20px", fill: "var(--blue)" }),
                ]),
                e("div", Mt, [
                  a(at, { width: "20px", height: "20px", fill: "var(--blue)" }),
                ]),
                e("div", Bt, [
                  a(dt, { width: "20px", height: "20px", fill: "var(--blue)" }),
                ]),
                e("div", jt, [
                  a(gt, { width: "20px", height: "20px", fill: "var(--blue)" }),
                ]),
              ]),
              e(
                "button",
                {
                  class: "btn",
                  style: K(
                    s.value.length > 0
                      ? { opacity: 1, cursor: "pointer" }
                      : { opacity: 0.5 }
                  ),
                },
                " Tweet ",
                4
              ),
            ]),
          ]),
        ])
      );
    },
  };
var St = c(Ht, [["__scopeId", "data-v-f9b366d6"]]);
const Vt = {},
  Ct = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi",
  },
  Tt = e(
    "g",
    null,
    [
      e("path", {
        d: "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z",
      }),
    ],
    -1
  ),
  Kt = [Tt];
function Dt(t, s) {
  return r(), i("svg", Ct, Kt);
}
var Et = c(Vt, [["render", Dt]]);
const It = {},
  Nt = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi",
  },
  Lt = e(
    "g",
    null,
    [
      e("path", {
        d: "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z",
      }),
    ],
    -1
  ),
  At = [Lt];
function Ot(t, s) {
  return r(), i("svg", Nt, At);
}
var Ft = c(It, [["render", Ot]]);
const Yt = {},
  Pt = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi",
  },
  Jt = e(
    "g",
    null,
    [
      e("path", {
        d: "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z",
      }),
    ],
    -1
  ),
  Rt = [Jt];
function Zt(t, s) {
  return r(), i("svg", Pt, Rt);
}
var Wt = c(Yt, [["render", Zt]]);
const Gt = {},
  Ut = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi",
  },
  Qt = e(
    "g",
    null,
    [
      e("path", {
        d: "M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z",
      }),
      e("path", {
        d: "M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z",
      }),
    ],
    -1
  ),
  Xt = [Qt];
function es(t, s) {
  return r(), i("svg", Ut, Xt);
}
var ts = c(Gt, [["render", es]]);
const ss = {},
  rs = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-label": "Onaylanm\u0131\u015F hesap",
    class:
      "r-jwli3a r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr",
  },
  is = e(
    "g",
    null,
    [
      e("path", {
        d: "M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z",
      }),
    ],
    -1
  ),
  as = [is];
function cs(t, s) {
  return r(), i("svg", rs, as);
}
var ns = c(ss, [["render", cs]]);
const os = (t) => (p("data-v-f2b3ecac"), (t = t()), u(), t),
  ls = { class: "tweet-box" },
  _s = { class: "left" },
  ds = { class: "pp" },
  hs = ["src"],
  ps = { class: "right" },
  us = { class: "info" },
  ms = { class: "info__left" },
  vs = { class: "name" },
  gs = { key: 0, class: "badge" },
  ws = { class: "username" },
  ys = os(() => e("div", { class: "dot" }, "\xB7", -1)),
  fs = { class: "time" },
  xs = { class: "info__right" },
  $s = { class: "tweet" },
  bs = { key: 0, class: "tweet-image" },
  zs = ["src"],
  ks = { class: "tools" },
  qs = { class: "comment tools-item" },
  Ms = { class: "svg-box" },
  Bs = { class: "re-tweet tools-item" },
  js = { class: "svg-box" },
  Hs = { class: "like tools-item" },
  Ss = { class: "svg-box" },
  Vs = { class: "share tools-item" },
  Cs = { class: "svg-box" },
  Ts = {
    props: { tweet: Object },
    setup(t) {
      const s = t;
      return (o, _) => (
        r(),
        i("div", ls, [
          e("div", _s, [
            e("div", ds, [
              e("img", { src: s.tweet.pp_route, alt: "" }, null, 8, hs),
            ]),
          ]),
          e("div", ps, [
            e("div", us, [
              e("div", ms, [
                e("div", vs, [e("span", null, d(s.tweet.name), 1)]),
                s.tweet.badge
                  ? (r(),
                    i("div", gs, [a(ns, { width: "17px", height: "17px" })]))
                  : z("", !0),
                e("div", ws, [e("span", null, d(s.tweet.username), 1)]),
                ys,
                e("div", fs, [e("span", null, d(s.tweet.time), 1)]),
              ]),
              e("div", xs, [
                a($, { class: "dots", width: "18px", height: "18px" }),
              ]),
            ]),
            e("div", $s, [e("span", null, d(s.tweet.text), 1)]),
            s.tweet.image_route !== !1
              ? (r(),
                i("div", bs, [
                  e("img", { src: s.tweet.image_route, alt: "" }, null, 8, zs),
                ]))
              : z("", !0),
            e("div", ks, [
              e("div", qs, [
                e("div", Ms, [
                  a(Et, { class: "svg", width: "18px", height: "18px" }),
                ]),
                e("span", null, d(s.tweet.comment), 1),
              ]),
              e("div", Bs, [
                e("div", js, [
                  a(Ft, { class: "svg", width: "18px", height: "18px" }),
                ]),
                e("span", null, d(s.tweet.retweet), 1),
              ]),
              e("div", Hs, [
                e("div", Ss, [
                  a(Wt, { class: "svg", width: "18px", height: "18px" }),
                ]),
                e("span", null, d(s.tweet.like), 1),
              ]),
              e("div", Vs, [
                e("div", Cs, [
                  a(ts, { class: "svg", width: "18px", height: "18px" }),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  };
var Ks = c(Ts, [["__scopeId", "data-v-f2b3ecac"]]);
const Ds = {
    setup(t) {
      const s = [
        {
          name: "Jahrein",
          username: "@jahreindota",
          badge: !0,
          time: "Jan 6",
          pp_route: "./assets/person2-pp.jpg",
          image_route: !1,
          text: "Uzun zaman yanl\u0131\u015F\u0131 o kadar \xE7ok tekrar etmi\u015Fiz ki normalmi\u015F\xE7esine k\xFClt\xFCr\xFCm\xFCze i\u015Flemi\u015F baz\u0131 \u015Feyler. Motorla yaya yoluna girene bir daha hi\xE7bir motorlu ta\u015F\u0131t s\xFCrd\xFCrmezler \xF6zendi\u011Fimiz bat\u0131da. \xD6zenmekle kalmayal\u0131m, benzeyelim. Ne dersiniz?",
          comment: "67",
          retweet: "138",
          like: "8.2K",
        },
        {
          name: "Tarih Ota\u011F",
          username: "@tarihotag",
          badge: !1,
          time: "Aug 15",
          pp_route: "./assets/person4-pp.jpg",
          image_route: "./assets/image.jpg",
          text: "\u015Eayet bir g\xFCn \xE7aresiz kal\u0131rsan\u0131z kurtar\u0131c\u0131 beklemeyin, kurtar\u0131c\u0131 siz olun. Gazi Mustafa Kemal Atat\xFCrk",
          comment: "2",
          retweet: "148",
          like: "1.6K",
        },
        {
          name: "Cem Y\u0131lmaz",
          username: "@CMYLMZ",
          badge: !0,
          time: "Nov 1",
          pp_route: "./assets/person5-pp.jpg",
          image_route: !1,
          text: "D\xFCn g\xF6steri iki saat kala ya\u011Fan ya\u011Fmurdan iptal oldu.Olur insanl\u0131k hali ! ben Nazilliden geldim otopark param\u0131 kim verec\xFCk yazm\u0131\u015F. Ben verece\u011Fim \xE7\xFCnk\xFC b\xFCt\xFCn paray\u0131 ben topluyorum otopark otob\xFCs yolda yenilen po\u011Fa\xE7a \xE7\xF6p \u015Fi\u015F bunlar\u0131 hep ben \xF6deyece\u011Fim. Bunun do\u011Frusu budur.",
          comment: "1.1K",
          retweet: "820",
          like: "32.2K",
        },
        {
          name: "\xD6zg\xFCr Demirta\u015F",
          username: "@ProfDemirtas",
          badge: !0,
          time: "March 13",
          pp_route: "./assets/person1-pp.jpg",
          image_route: !1,
          text: "Fazla tevazunun sonu vasat adamdan nasihat dinlemektir.",
          comment: "791",
          retweet: "9K",
          like: "98K",
        },
        {
          name: "Haluk Tatar",
          username: "@haluktatar",
          badge: !0,
          time: "Aug 15",
          pp_route: "./assets/person3-pp.jpg",
          image_route: !1,
          text: "Sel-Deprem-Yang\u0131n... Do\u011Fal afete maruz kalan afetzedelere bor\xE7 ya da faizsiz kredi vermek marifet de\u011Fil! Zaten her \u015Feyini kaybetmi\u015F aileye bor\xE7 de\u011Fil, H\u0130BE VERECEK DEVLET! Y\u0131llarca maa\u015Flardan, vergilerden kesiyorsunuz. Somali\u2019ye 30 milyon dolar verebiliyorsak, bize de olmal\u0131!",
          comment: "13",
          retweet: "147",
          like: "1.5K",
        },
        {
          name: "Jahrein",
          username: "@jahreindota",
          badge: !0,
          time: "Jan 6",
          pp_route: "./assets/person2-pp.jpg",
          image_route: !1,
          text: "Uzun zaman yanl\u0131\u015F\u0131 o kadar \xE7ok tekrar etmi\u015Fiz ki normalmi\u015F\xE7esine k\xFClt\xFCr\xFCm\xFCze i\u015Flemi\u015F baz\u0131 \u015Feyler. Motorla yaya yoluna girene bir daha hi\xE7bir motorlu ta\u015F\u0131t s\xFCrd\xFCrmezler \xF6zendi\u011Fimiz bat\u0131da. \xD6zenmekle kalmayal\u0131m, benzeyelim. Ne dersiniz?",
          comment: "67",
          retweet: "138",
          like: "8.2K",
        },
        {
          name: "Tarih Ota\u011F",
          username: "@tarihotag",
          badge: !1,
          time: "Aug 15",
          pp_route: "./assets/person4-pp.jpg",
          image_route: "./assets/image.jpg",
          text: "\u015Eayet bir g\xFCn \xE7aresiz kal\u0131rsan\u0131z kurtar\u0131c\u0131 beklemeyin, kurtar\u0131c\u0131 siz olun. Gazi Mustafa Kemal Atat\xFCrk",
          comment: "2",
          retweet: "148",
          like: "1.6K",
        },
        {
          name: "Cem Y\u0131lmaz",
          username: "@CMYLMZ",
          badge: !0,
          time: "Nov 1",
          pp_route: "./assets/person5-pp.jpg",
          image_route: !1,
          text: "D\xFCn g\xF6steri iki saat kala ya\u011Fan ya\u011Fmurdan iptal oldu.Olur insanl\u0131k hali ! ben Nazilliden geldim otopark param\u0131 kim verec\xFCk yazm\u0131\u015F. Ben verece\u011Fim \xE7\xFCnk\xFC b\xFCt\xFCn paray\u0131 ben topluyorum otopark otob\xFCs yolda yenilen po\u011Fa\xE7a \xE7\xF6p \u015Fi\u015F bunlar\u0131 hep ben \xF6deyece\u011Fim. Bunun do\u011Frusu budur.",
          comment: "1.1K",
          retweet: "820",
          like: "32.2K",
        },
        {
          name: "\xD6zg\xFCr Demirta\u015F",
          username: "@ProfDemirtas",
          badge: !0,
          time: "March 13",
          pp_route: "./assets/person1-pp.jpg",
          image_route: !1,
          text: "Fazla tevazunun sonu vasat adamdan nasihat dinlemektir.",
          comment: "791",
          retweet: "9K",
          like: "98K",
        },
        {
          name: "Haluk Tatar",
          username: "@haluktatar",
          badge: !0,
          time: "Aug 15",
          pp_route: "./assets/person3-pp.jpg",
          image_route: !1,
          text: "Sel-Deprem-Yang\u0131n... Do\u011Fal afete maruz kalan afetzedelere bor\xE7 ya da faizsiz kredi vermek marifet de\u011Fil! Zaten her \u015Feyini kaybetmi\u015F aileye bor\xE7 de\u011Fil, H\u0130BE VERECEK DEVLET! Y\u0131llarca maa\u015Flardan, vergilerden kesiyorsunuz. Somali\u2019ye 30 milyon dolar verebiliyorsak, bize de olmal\u0131!",
          comment: "13",
          retweet: "147",
          like: "1.5K",
        },
        {
          name: "Jahrein",
          username: "@jahreindota",
          badge: !0,
          time: "Jan 6",
          pp_route: "./assets/person2-pp.jpg",
          image_route: !1,
          text: "Uzun zaman yanl\u0131\u015F\u0131 o kadar \xE7ok tekrar etmi\u015Fiz ki normalmi\u015F\xE7esine k\xFClt\xFCr\xFCm\xFCze i\u015Flemi\u015F baz\u0131 \u015Feyler. Motorla yaya yoluna girene bir daha hi\xE7bir motorlu ta\u015F\u0131t s\xFCrd\xFCrmezler \xF6zendi\u011Fimiz bat\u0131da. \xD6zenmekle kalmayal\u0131m, benzeyelim. Ne dersiniz?",
          comment: "67",
          retweet: "138",
          like: "8.2K",
        },
        {
          name: "Tarih Ota\u011F",
          username: "@tarihotag",
          badge: !1,
          time: "Aug 15",
          pp_route: "./assets/person4-pp.jpg",
          image_route: "./assets/image.jpg",
          text: "\u015Eayet bir g\xFCn \xE7aresiz kal\u0131rsan\u0131z kurtar\u0131c\u0131 beklemeyin, kurtar\u0131c\u0131 siz olun. Gazi Mustafa Kemal Atat\xFCrk",
          comment: "2",
          retweet: "148",
          like: "1.6K",
        },
        {
          name: "Cem Y\u0131lmaz",
          username: "@CMYLMZ",
          badge: !0,
          time: "Nov 1",
          pp_route: "./assets/person5-pp.jpg",
          image_route: !1,
          text: "D\xFCn g\xF6steri iki saat kala ya\u011Fan ya\u011Fmurdan iptal oldu.Olur insanl\u0131k hali ! ben Nazilliden geldim otopark param\u0131 kim verec\xFCk yazm\u0131\u015F. Ben verece\u011Fim \xE7\xFCnk\xFC b\xFCt\xFCn paray\u0131 ben topluyorum otopark otob\xFCs yolda yenilen po\u011Fa\xE7a \xE7\xF6p \u015Fi\u015F bunlar\u0131 hep ben \xF6deyece\u011Fim. Bunun do\u011Frusu budur.",
          comment: "1.1K",
          retweet: "820",
          like: "32.2K",
        },
        {
          name: "\xD6zg\xFCr Demirta\u015F",
          username: "@ProfDemirtas",
          badge: !0,
          time: "March 13",
          pp_route: "./assets/person1-pp.jpg",
          image_route: !1,
          text: "Fazla tevazunun sonu vasat adamdan nasihat dinlemektir.",
          comment: "791",
          retweet: "9K",
          like: "98K",
        },
        {
          name: "Haluk Tatar",
          username: "@haluktatar",
          badge: !0,
          time: "Aug 15",
          pp_route: "./assets/person3-pp.jpg",
          image_route: !1,
          text: "Sel-Deprem-Yang\u0131n... Do\u011Fal afete maruz kalan afetzedelere bor\xE7 ya da faizsiz kredi vermek marifet de\u011Fil! Zaten her \u015Feyini kaybetmi\u015F aileye bor\xE7 de\u011Fil, H\u0130BE VERECEK DEVLET! Y\u0131llarca maa\u015Flardan, vergilerden kesiyorsunuz. Somali\u2019ye 30 milyon dolar verebiliyorsak, bize de olmal\u0131!",
          comment: "13",
          retweet: "147",
          like: "1.5K",
        },
        {
          name: "Jahrein",
          username: "@jahreindota",
          badge: !0,
          time: "Jan 6",
          pp_route: "./assets/person2-pp.jpg",
          image_route: !1,
          text: "Uzun zaman yanl\u0131\u015F\u0131 o kadar \xE7ok tekrar etmi\u015Fiz ki normalmi\u015F\xE7esine k\xFClt\xFCr\xFCm\xFCze i\u015Flemi\u015F baz\u0131 \u015Feyler. Motorla yaya yoluna girene bir daha hi\xE7bir motorlu ta\u015F\u0131t s\xFCrd\xFCrmezler \xF6zendi\u011Fimiz bat\u0131da. \xD6zenmekle kalmayal\u0131m, benzeyelim. Ne dersiniz?",
          comment: "67",
          retweet: "138",
          like: "8.2K",
        },
        {
          name: "Tarih Ota\u011F",
          username: "@tarihotag",
          badge: !1,
          time: "Aug 15",
          pp_route: "./assets/person4-pp.jpg",
          image_route: "./assets/image.jpg",
          text: "\u015Eayet bir g\xFCn \xE7aresiz kal\u0131rsan\u0131z kurtar\u0131c\u0131 beklemeyin, kurtar\u0131c\u0131 siz olun. Gazi Mustafa Kemal Atat\xFCrk",
          comment: "2",
          retweet: "148",
          like: "1.6K",
        },
        {
          name: "Cem Y\u0131lmaz",
          username: "@CMYLMZ",
          badge: !0,
          time: "Nov 1",
          pp_route: "./assets/person5-pp.jpg",
          image_route: !1,
          text: "D\xFCn g\xF6steri iki saat kala ya\u011Fan ya\u011Fmurdan iptal oldu.Olur insanl\u0131k hali ! ben Nazilliden geldim otopark param\u0131 kim verec\xFCk yazm\u0131\u015F. Ben verece\u011Fim \xE7\xFCnk\xFC b\xFCt\xFCn paray\u0131 ben topluyorum otopark otob\xFCs yolda yenilen po\u011Fa\xE7a \xE7\xF6p \u015Fi\u015F bunlar\u0131 hep ben \xF6deyece\u011Fim. Bunun do\u011Frusu budur.",
          comment: "1.1K",
          retweet: "820",
          like: "32.2K",
        },
        {
          name: "\xD6zg\xFCr Demirta\u015F",
          username: "@ProfDemirtas",
          badge: !0,
          time: "March 13",
          pp_route: "./assets/person1-pp.jpg",
          image_route: !1,
          text: "Fazla tevazunun sonu vasat adamdan nasihat dinlemektir.",
          comment: "791",
          retweet: "9K",
          like: "98K",
        },
        {
          name: "Haluk Tatar",
          username: "@haluktatar",
          badge: !0,
          time: "Aug 15",
          pp_route: "./assets/person3-pp.jpg",
          image_route: !1,
          text: "Sel-Deprem-Yang\u0131n... Do\u011Fal afete maruz kalan afetzedelere bor\xE7 ya da faizsiz kredi vermek marifet de\u011Fil! Zaten her \u015Feyini kaybetmi\u015F aileye bor\xE7 de\u011Fil, H\u0130BE VERECEK DEVLET! Y\u0131llarca maa\u015Flardan, vergilerden kesiyorsunuz. Somali\u2019ye 30 milyon dolar verebiliyorsak, bize de olmal\u0131!",
          comment: "13",
          retweet: "147",
          like: "1.5K",
        },
      ];
      return (o, _) => (
        r(),
        i(
          f,
          null,
          x(s, (n, l) =>
            e("div", { class: "tweets", key: l }, [
              a(Ks, { tweet: n }, null, 8, ["tweet"]),
            ])
          ),
          64
        )
      );
    },
  },
  Es = {},
  Is = {
    with: "26px",
    height: "26px",
    fill: "#d9d9d9",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class:
      "r-13gxpu9 r-4qtqp9 r-yyyyoo r-18yzcnr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-yc9v9c",
  },
  Ns = e(
    "g",
    null,
    [
      e("path", {
        d: "M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z",
      }),
    ],
    -1
  ),
  Ls = [Ns];
function As(t, s) {
  return r(), i("svg", Is, Ls);
}
var Os = c(Es, [["render", As]]);
const Fs = (t) => (p("data-v-4935f364"), (t = t()), u(), t),
  Ys = { class: "home-box" },
  Ps = { class: "top" },
  Js = Fs(() => e("span", { class: "top-title" }, "Latest Tweets", -1)),
  Rs = { class: "svg-top" },
  Zs = {
    setup(t) {
      return (s, o) => (
        r(),
        i("div", Ys, [
          a(T2, { class: "navbar" }),
          a(L2, null, {
            topTitle: g(() => [
              a(I2, null, {
                default: g(() => [
                  e("div", Ps, [
                    Js,
                    e("div", Rs, [a(Os, { width: "20px", height: "20px" })]),
                  ]),
                ]),
                _: 1,
              }),
            ]),
            main: g(() => [a(St)]),
            tweets: g(() => [a(Ds)]),
            _: 1,
          }),
          a(
            Y2,
            { class: "right" },
            { default: g(() => [a(R2), a(_1), a(z1), a(K1)]), _: 1 }
          ),
        ])
      );
    },
  };
var Ws = c(Zs, [["__scopeId", "data-v-4935f364"]]);
const Gs = { class: "container" },
  Us = { class: "main" },
  Qs = {
    setup(t) {
      return (s, o) => (r(), i("div", Gs, [e("div", Us, [a(Ws)])]));
    },
  };
D(Qs).mount("#app");
