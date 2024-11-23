;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a)
  new MutationObserver((a) => {
    for (const l of a)
      if (l.type === 'childList')
        for (const c of l.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && i(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(a) {
    const l = {}
    return (
      a.integrity && (l.integrity = a.integrity),
      a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : a.crossOrigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    )
  }
  function i(a) {
    if (a.ep) return
    a.ep = !0
    const l = n(a)
    fetch(a.href, l)
  }
})()
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const l of a.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(i) {
    const a = {}
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const a = t(i)
    fetch(i.href, a)
  }
})()
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const l of a.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(i) {
    const a = {}
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const a = t(i)
    fetch(i.href, a)
  }
})()
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const l of a.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(i) {
    const a = {}
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const a = t(i)
    fetch(i.href, a)
  }
})()
function EE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n]
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const a in i)
        if (a !== 'default' && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(i, a)
          l &&
            Object.defineProperty(
              e,
              a,
              l.get ? l : { enumerable: !0, get: () => i[a] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const l of a.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(i) {
    const a = {}
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const a = t(i)
    fetch(i.href, a)
  }
})()
var us =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function xE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var b0 = { exports: {} },
  Rc = {},
  w0 = { exports: {} },
  be = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tl = Symbol.for('react.element'),
  TE = Symbol.for('react.portal'),
  CE = Symbol.for('react.fragment'),
  PE = Symbol.for('react.strict_mode'),
  OE = Symbol.for('react.profiler'),
  RE = Symbol.for('react.provider'),
  LE = Symbol.for('react.context'),
  IE = Symbol.for('react.forward_ref'),
  AE = Symbol.for('react.suspense'),
  DE = Symbol.for('react.memo'),
  zE = Symbol.for('react.lazy'),
  Pm = Symbol.iterator
function NE(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Pm && e[Pm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var k0 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _0 = Object.assign,
  S0 = {}
function pa(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || k0)
}
pa.prototype.isReactComponent = {}
pa.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
pa.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function E0() {}
E0.prototype = pa.prototype
function Md(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || k0)
}
var jd = (Md.prototype = new E0())
jd.constructor = Md
_0(jd, pa.prototype)
jd.isPureReactComponent = !0
var Om = Array.isArray,
  x0 = Object.prototype.hasOwnProperty,
  Fd = { current: null },
  T0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function C0(e, t, n) {
  var i,
    a = {},
    l = null,
    c = null
  if (t != null)
    for (i in (t.ref !== void 0 && (c = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      x0.call(t, i) && !T0.hasOwnProperty(i) && (a[i] = t[i])
  var d = arguments.length - 2
  if (d === 1) a.children = n
  else if (1 < d) {
    for (var g = Array(d), w = 0; w < d; w++) g[w] = arguments[w + 2]
    a.children = g
  }
  if (e && e.defaultProps)
    for (i in ((d = e.defaultProps), d)) a[i] === void 0 && (a[i] = d[i])
  return { $$typeof: tl, type: e, key: l, ref: c, props: a, _owner: Fd.current }
}
function ME(e, t) {
  return {
    $$typeof: tl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Ud(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === tl
}
function jE(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Rm = /\/+/g
function rh(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? jE('' + e.key)
    : t.toString(36)
}
function ju(e, t, n, i, a) {
  var l = typeof e
  ;(l === 'undefined' || l === 'boolean') && (e = null)
  var c = !1
  if (e === null) c = !0
  else
    switch (l) {
      case 'string':
      case 'number':
        c = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case tl:
          case TE:
            c = !0
        }
    }
  if (c)
    return (
      (c = e),
      (a = a(c)),
      (e = i === '' ? '.' + rh(c, 0) : i),
      Om(a)
        ? ((n = ''),
          e != null && (n = e.replace(Rm, '$&/') + '/'),
          ju(a, t, n, '', function (w) {
            return w
          }))
        : a != null &&
          (Ud(a) &&
            (a = ME(
              a,
              n +
                (!a.key || (c && c.key === a.key)
                  ? ''
                  : ('' + a.key).replace(Rm, '$&/') + '/') +
                e
            )),
          t.push(a)),
      1
    )
  if (((c = 0), (i = i === '' ? '.' : i + ':'), Om(e)))
    for (var d = 0; d < e.length; d++) {
      l = e[d]
      var g = i + rh(l, d)
      c += ju(l, t, n, g, a)
    }
  else if (((g = NE(e)), typeof g == 'function'))
    for (e = g.call(e), d = 0; !(l = e.next()).done; )
      (l = l.value), (g = i + rh(l, d++)), (c += ju(l, t, n, g, a))
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return c
}
function bu(e, t, n) {
  if (e == null) return e
  var i = [],
    a = 0
  return (
    ju(e, i, '', '', function (l) {
      return t.call(n, l, a++)
    }),
    i
  )
}
function FE(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Ft = { current: null },
  Fu = { transition: null },
  UE = {
    ReactCurrentDispatcher: Ft,
    ReactCurrentBatchConfig: Fu,
    ReactCurrentOwner: Fd,
  }
be.Children = {
  map: bu,
  forEach: function (e, t, n) {
    bu(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      bu(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      bu(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Ud(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
be.Component = pa
be.Fragment = CE
be.Profiler = OE
be.PureComponent = Md
be.StrictMode = PE
be.Suspense = AE
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = UE
be.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var i = _0({}, e.props),
    a = e.key,
    l = e.ref,
    c = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (c = Fd.current)),
      t.key !== void 0 && (a = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps
    for (g in t)
      x0.call(t, g) &&
        !T0.hasOwnProperty(g) &&
        (i[g] = t[g] === void 0 && d !== void 0 ? d[g] : t[g])
  }
  var g = arguments.length - 2
  if (g === 1) i.children = n
  else if (1 < g) {
    d = Array(g)
    for (var w = 0; w < g; w++) d[w] = arguments[w + 2]
    i.children = d
  }
  return { $$typeof: tl, type: e.type, key: a, ref: l, props: i, _owner: c }
}
be.createContext = function (e) {
  return (
    (e = {
      $$typeof: LE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: RE, _context: e }),
    (e.Consumer = e)
  )
}
be.createElement = C0
be.createFactory = function (e) {
  var t = C0.bind(null, e)
  return (t.type = e), t
}
be.createRef = function () {
  return { current: null }
}
be.forwardRef = function (e) {
  return { $$typeof: IE, render: e }
}
be.isValidElement = Ud
be.lazy = function (e) {
  return { $$typeof: zE, _payload: { _status: -1, _result: e }, _init: FE }
}
be.memo = function (e, t) {
  return { $$typeof: DE, type: e, compare: t === void 0 ? null : t }
}
be.startTransition = function (e) {
  var t = Fu.transition
  Fu.transition = {}
  try {
    e()
  } finally {
    Fu.transition = t
  }
}
be.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
be.useCallback = function (e, t) {
  return Ft.current.useCallback(e, t)
}
be.useContext = function (e) {
  return Ft.current.useContext(e)
}
be.useDebugValue = function () {}
be.useDeferredValue = function (e) {
  return Ft.current.useDeferredValue(e)
}
be.useEffect = function (e, t) {
  return Ft.current.useEffect(e, t)
}
be.useId = function () {
  return Ft.current.useId()
}
be.useImperativeHandle = function (e, t, n) {
  return Ft.current.useImperativeHandle(e, t, n)
}
be.useInsertionEffect = function (e, t) {
  return Ft.current.useInsertionEffect(e, t)
}
be.useLayoutEffect = function (e, t) {
  return Ft.current.useLayoutEffect(e, t)
}
be.useMemo = function (e, t) {
  return Ft.current.useMemo(e, t)
}
be.useReducer = function (e, t, n) {
  return Ft.current.useReducer(e, t, n)
}
be.useRef = function (e) {
  return Ft.current.useRef(e)
}
be.useState = function (e) {
  return Ft.current.useState(e)
}
be.useSyncExternalStore = function (e, t, n) {
  return Ft.current.useSyncExternalStore(e, t, n)
}
be.useTransition = function () {
  return Ft.current.useTransition()
}
be.version = '18.2.0'
w0.exports = be
var Pt = w0.exports
const P0 = xE(Pt),
  $E = EE({ __proto__: null, default: P0 }, [Pt])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var BE = Pt,
  HE = Symbol.for('react.element'),
  VE = Symbol.for('react.fragment'),
  WE = Object.prototype.hasOwnProperty,
  qE = BE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  KE = { key: !0, ref: !0, __self: !0, __source: !0 }
function O0(e, t, n) {
  var i,
    a = {},
    l = null,
    c = null
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (c = t.ref)
  for (i in t) WE.call(t, i) && !KE.hasOwnProperty(i) && (a[i] = t[i])
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) a[i] === void 0 && (a[i] = t[i])
  return { $$typeof: HE, type: e, key: l, ref: c, props: a, _owner: qE.current }
}
Rc.Fragment = VE
Rc.jsx = O0
Rc.jsxs = O0
b0.exports = Rc
var ai = b0.exports,
  Nh = {},
  R0 = { exports: {} },
  hn = {},
  L0 = { exports: {} },
  I0 = {}
;(function (e) {
  function t(Z, oe) {
    var ue = Z.length
    Z.push(oe)
    e: for (; 0 < ue; ) {
      var ke = (ue - 1) >>> 1,
        Pe = Z[ke]
      if (0 < a(Pe, oe)) (Z[ke] = oe), (Z[ue] = Pe), (ue = ke)
      else break e
    }
  }
  function n(Z) {
    return Z.length === 0 ? null : Z[0]
  }
  function i(Z) {
    if (Z.length === 0) return null
    var oe = Z[0],
      ue = Z.pop()
    if (ue !== oe) {
      Z[0] = ue
      e: for (var ke = 0, Pe = Z.length, $e = Pe >>> 1; ke < $e; ) {
        var Pn = 2 * (ke + 1) - 1,
          bt = Z[Pn],
          Bt = Pn + 1,
          pn = Z[Bt]
        if (0 > a(bt, ue))
          Bt < Pe && 0 > a(pn, bt)
            ? ((Z[ke] = pn), (Z[Bt] = ue), (ke = Bt))
            : ((Z[ke] = bt), (Z[Pn] = ue), (ke = Pn))
        else if (Bt < Pe && 0 > a(pn, ue)) (Z[ke] = pn), (Z[Bt] = ue), (ke = Bt)
        else break e
      }
    }
    return oe
  }
  function a(Z, oe) {
    var ue = Z.sortIndex - oe.sortIndex
    return ue !== 0 ? ue : Z.id - oe.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance
    e.unstable_now = function () {
      return l.now()
    }
  } else {
    var c = Date,
      d = c.now()
    e.unstable_now = function () {
      return c.now() - d
    }
  }
  var g = [],
    w = [],
    O = 1,
    R = null,
    _ = 3,
    H = !1,
    F = !1,
    W = !1,
    Q = typeof setTimeout == 'function' ? setTimeout : null,
    I = typeof clearTimeout == 'function' ? clearTimeout : null,
    x = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function A(Z) {
    for (var oe = n(w); oe !== null; ) {
      if (oe.callback === null) i(w)
      else if (oe.startTime <= Z)
        i(w), (oe.sortIndex = oe.expirationTime), t(g, oe)
      else break
      oe = n(w)
    }
  }
  function B(Z) {
    if (((W = !1), A(Z), !F))
      if (n(g) !== null) (F = !0), qn(G)
      else {
        var oe = n(w)
        oe !== null && Ee(B, oe.startTime - Z)
      }
  }
  function G(Z, oe) {
    ;(F = !1), W && ((W = !1), I(k), (k = -1)), (H = !0)
    var ue = _
    try {
      for (
        A(oe), R = n(g);
        R !== null && (!(R.expirationTime > oe) || (Z && !D()));

      ) {
        var ke = R.callback
        if (typeof ke == 'function') {
          ;(R.callback = null), (_ = R.priorityLevel)
          var Pe = ke(R.expirationTime <= oe)
          ;(oe = e.unstable_now()),
            typeof Pe == 'function' ? (R.callback = Pe) : R === n(g) && i(g),
            A(oe)
        } else i(g)
        R = n(g)
      }
      if (R !== null) var $e = !0
      else {
        var Pn = n(w)
        Pn !== null && Ee(B, Pn.startTime - oe), ($e = !1)
      }
      return $e
    } finally {
      ;(R = null), (_ = ue), (H = !1)
    }
  }
  var X = !1,
    S = null,
    k = -1,
    T = 5,
    P = -1
  function D() {
    return !(e.unstable_now() - P < T)
  }
  function j() {
    if (S !== null) {
      var Z = e.unstable_now()
      P = Z
      var oe = !0
      try {
        oe = S(!0, Z)
      } finally {
        oe ? C() : ((X = !1), (S = null))
      }
    } else X = !1
  }
  var C
  if (typeof x == 'function')
    C = function () {
      x(j)
    }
  else if (typeof MessageChannel < 'u') {
    var Qe = new MessageChannel(),
      $t = Qe.port2
    ;(Qe.port1.onmessage = j),
      (C = function () {
        $t.postMessage(null)
      })
  } else
    C = function () {
      Q(j, 0)
    }
  function qn(Z) {
    ;(S = Z), X || ((X = !0), C())
  }
  function Ee(Z, oe) {
    k = Q(function () {
      Z(e.unstable_now())
    }, oe)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (Z) {
      Z.callback = null
    }),
    (e.unstable_continueExecution = function () {
      F || H || ((F = !0), qn(G))
    }),
    (e.unstable_forceFrameRate = function (Z) {
      0 > Z || 125 < Z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < Z ? Math.floor(1e3 / Z) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return _
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(g)
    }),
    (e.unstable_next = function (Z) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var oe = 3
          break
        default:
          oe = _
      }
      var ue = _
      _ = oe
      try {
        return Z()
      } finally {
        _ = ue
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (Z, oe) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          Z = 3
      }
      var ue = _
      _ = Z
      try {
        return oe()
      } finally {
        _ = ue
      }
    }),
    (e.unstable_scheduleCallback = function (Z, oe, ue) {
      var ke = e.unstable_now()
      switch (
        (typeof ue == 'object' && ue !== null
          ? ((ue = ue.delay),
            (ue = typeof ue == 'number' && 0 < ue ? ke + ue : ke))
          : (ue = ke),
        Z)
      ) {
        case 1:
          var Pe = -1
          break
        case 2:
          Pe = 250
          break
        case 5:
          Pe = 1073741823
          break
        case 4:
          Pe = 1e4
          break
        default:
          Pe = 5e3
      }
      return (
        (Pe = ue + Pe),
        (Z = {
          id: O++,
          callback: oe,
          priorityLevel: Z,
          startTime: ue,
          expirationTime: Pe,
          sortIndex: -1,
        }),
        ue > ke
          ? ((Z.sortIndex = ue),
            t(w, Z),
            n(g) === null &&
              Z === n(w) &&
              (W ? (I(k), (k = -1)) : (W = !0), Ee(B, ue - ke)))
          : ((Z.sortIndex = Pe), t(g, Z), F || H || ((F = !0), qn(G))),
        Z
      )
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (Z) {
      var oe = _
      return function () {
        var ue = _
        _ = oe
        try {
          return Z.apply(this, arguments)
        } finally {
          _ = ue
        }
      }
    })
})(I0)
L0.exports = I0
var YE = L0.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var A0 = Pt,
  fn = YE
function J(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var D0 = new Set(),
  zs = {}
function ao(e, t) {
  aa(e, t), aa(e + 'Capture', t)
}
function aa(e, t) {
  for (zs[e] = t, e = 0; e < t.length; e++) D0.add(t[e])
}
var Tr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Mh = Object.prototype.hasOwnProperty,
  GE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Lm = {},
  Im = {}
function QE(e) {
  return Mh.call(Im, e)
    ? !0
    : Mh.call(Lm, e)
    ? !1
    : GE.test(e)
    ? (Im[e] = !0)
    : ((Lm[e] = !0), !1)
}
function JE(e, t, n, i) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function XE(e, t, n, i) {
  if (t === null || typeof t > 'u' || JE(e, t, n, i)) return !0
  if (i) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Ut(e, t, n, i, a, l, c) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = c)
}
var yt = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    yt[e] = new Ut(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  yt[t] = new Ut(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  yt[e] = new Ut(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  yt[e] = new Ut(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    yt[e] = new Ut(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  yt[e] = new Ut(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  yt[e] = new Ut(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  yt[e] = new Ut(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  yt[e] = new Ut(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var $d = /[\-:]([a-z])/g
function Bd(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace($d, Bd)
    yt[t] = new Ut(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace($d, Bd)
    yt[t] = new Ut(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace($d, Bd)
  yt[t] = new Ut(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  yt[e] = new Ut(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
yt.xlinkHref = new Ut(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  yt[e] = new Ut(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Hd(e, t, n, i) {
  var a = yt.hasOwnProperty(t) ? yt[t] : null
  ;(a !== null
    ? a.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (XE(t, n, a, i) && (n = null),
    i || a === null
      ? QE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : '') : n)
      : ((t = a.attributeName),
        (i = a.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((a = a.type),
            (n = a === 3 || (a === 4 && n === !0) ? '' : '' + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var Lr = A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wu = Symbol.for('react.element'),
  $o = Symbol.for('react.portal'),
  Bo = Symbol.for('react.fragment'),
  Vd = Symbol.for('react.strict_mode'),
  jh = Symbol.for('react.profiler'),
  z0 = Symbol.for('react.provider'),
  N0 = Symbol.for('react.context'),
  Wd = Symbol.for('react.forward_ref'),
  Fh = Symbol.for('react.suspense'),
  Uh = Symbol.for('react.suspense_list'),
  qd = Symbol.for('react.memo'),
  ni = Symbol.for('react.lazy'),
  M0 = Symbol.for('react.offscreen'),
  Am = Symbol.iterator
function cs(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Am && e[Am]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var We = Object.assign,
  ih
function bs(e) {
  if (ih === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      ih = (t && t[1]) || ''
    }
  return (
    `
` +
    ih +
    e
  )
}
var oh = !1
function ah(e, t) {
  if (!e || oh) return ''
  oh = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (w) {
          var i = w
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (w) {
          i = w
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (w) {
        i = w
      }
      e()
    }
  } catch (w) {
    if (w && i && typeof w.stack == 'string') {
      for (
        var a = w.stack.split(`
`),
          l = i.stack.split(`
`),
          c = a.length - 1,
          d = l.length - 1;
        1 <= c && 0 <= d && a[c] !== l[d];

      )
        d--
      for (; 1 <= c && 0 <= d; c--, d--)
        if (a[c] !== l[d]) {
          if (c !== 1 || d !== 1)
            do
              if ((c--, d--, 0 > d || a[c] !== l[d])) {
                var g =
                  `
` + a[c].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    g.includes('<anonymous>') &&
                    (g = g.replace('<anonymous>', e.displayName)),
                  g
                )
              }
            while (1 <= c && 0 <= d)
          break
        }
    }
  } finally {
    ;(oh = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? bs(e) : ''
}
function ZE(e) {
  switch (e.tag) {
    case 5:
      return bs(e.type)
    case 16:
      return bs('Lazy')
    case 13:
      return bs('Suspense')
    case 19:
      return bs('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = ah(e.type, !1)), e
    case 11:
      return (e = ah(e.type.render, !1)), e
    case 1:
      return (e = ah(e.type, !0)), e
    default:
      return ''
  }
}
function $h(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Bo:
      return 'Fragment'
    case $o:
      return 'Portal'
    case jh:
      return 'Profiler'
    case Vd:
      return 'StrictMode'
    case Fh:
      return 'Suspense'
    case Uh:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case N0:
        return (e.displayName || 'Context') + '.Consumer'
      case z0:
        return (e._context.displayName || 'Context') + '.Provider'
      case Wd:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case qd:
        return (
          (t = e.displayName || null), t !== null ? t : $h(e.type) || 'Memo'
        )
      case ni:
        ;(t = e._payload), (e = e._init)
        try {
          return $h(e(t))
        } catch {}
    }
  return null
}
function e4(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return $h(t)
    case 8:
      return t === Vd ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function bi(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function j0(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function t4(e) {
  var t = j0(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var a = n.get,
      l = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this)
        },
        set: function (c) {
          ;(i = '' + c), l.call(this, c)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i
        },
        setValue: function (c) {
          i = '' + c
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function ku(e) {
  e._valueTracker || (e._valueTracker = t4(e))
}
function F0(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    i = ''
  return (
    e && (i = j0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Qu(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Bh(e, t) {
  var n = t.checked
  return We({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Dm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked
  ;(n = bi(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function U0(e, t) {
  ;(t = t.checked), t != null && Hd(e, 'checked', t, !1)
}
function Hh(e, t) {
  U0(e, t)
  var n = bi(t.value),
    i = t.type
  if (n != null)
    i === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (i === 'submit' || i === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Vh(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Vh(e, t.type, bi(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function zm(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var i = t.type
    if (
      !(
        (i !== 'submit' && i !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Vh(e, t, n) {
  ;(t !== 'number' || Qu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ws = Array.isArray
function Zo(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {}
    for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && i && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + bi(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        ;(e[a].selected = !0), i && (e[a].defaultSelected = !0)
        return
      }
      t !== null || e[a].disabled || (t = e[a])
    }
    t !== null && (t.selected = !0)
  }
}
function Wh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(J(91))
  return We({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Nm(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(J(92))
      if (ws(n)) {
        if (1 < n.length) throw Error(J(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: bi(n) }
}
function $0(e, t) {
  var n = bi(t.value),
    i = bi(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = '' + i)
}
function Mm(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function B0(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function qh(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? B0(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var _u,
  H0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, a)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        _u = _u || document.createElement('div'),
          _u.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = _u.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Ns(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Ss = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  n4 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Ss).forEach(function (e) {
  n4.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ss[t] = Ss[e])
  })
})
function V0(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ss.hasOwnProperty(e) && Ss[e])
    ? ('' + t).trim()
    : t + 'px'
}
function W0(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf('--') === 0,
        a = V0(n, t[n], i)
      n === 'float' && (n = 'cssFloat'), i ? e.setProperty(n, a) : (e[n] = a)
    }
}
var r4 = We(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function Kh(e, t) {
  if (t) {
    if (r4[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(J(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(J(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(J(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(J(62))
  }
}
function Yh(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Gh = null
function Kd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Qh = null,
  ea = null,
  ta = null
function jm(e) {
  if ((e = il(e))) {
    if (typeof Qh != 'function') throw Error(J(280))
    var t = e.stateNode
    t && ((t = zc(t)), Qh(e.stateNode, e.type, t))
  }
}
function q0(e) {
  ea ? (ta ? ta.push(e) : (ta = [e])) : (ea = e)
}
function K0() {
  if (ea) {
    var e = ea,
      t = ta
    if (((ta = ea = null), jm(e), t)) for (e = 0; e < t.length; e++) jm(t[e])
  }
}
function Y0(e, t) {
  return e(t)
}
function G0() {}
var sh = !1
function Q0(e, t, n) {
  if (sh) return e(t, n)
  sh = !0
  try {
    return Y0(e, t, n)
  } finally {
    ;(sh = !1), (ea !== null || ta !== null) && (G0(), K0())
  }
}
function Ms(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var i = zc(n)
  if (i === null) return null
  n = i[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !i)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(J(231, t, typeof n))
  return n
}
var Jh = !1
if (Tr)
  try {
    var fs = {}
    Object.defineProperty(fs, 'passive', {
      get: function () {
        Jh = !0
      },
    }),
      window.addEventListener('test', fs, fs),
      window.removeEventListener('test', fs, fs)
  } catch {
    Jh = !1
  }
function i4(e, t, n, i, a, l, c, d, g) {
  var w = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, w)
  } catch (O) {
    this.onError(O)
  }
}
var Es = !1,
  Ju = null,
  Xu = !1,
  Xh = null,
  o4 = {
    onError: function (e) {
      ;(Es = !0), (Ju = e)
    },
  }
function a4(e, t, n, i, a, l, c, d, g) {
  ;(Es = !1), (Ju = null), i4.apply(o4, arguments)
}
function s4(e, t, n, i, a, l, c, d, g) {
  if ((a4.apply(this, arguments), Es)) {
    if (Es) {
      var w = Ju
      ;(Es = !1), (Ju = null)
    } else throw Error(J(198))
    Xu || ((Xu = !0), (Xh = w))
  }
}
function so(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function J0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Fm(e) {
  if (so(e) !== e) throw Error(J(188))
}
function l4(e) {
  var t = e.alternate
  if (!t) {
    if (((t = so(e)), t === null)) throw Error(J(188))
    return t !== e ? null : e
  }
  for (var n = e, i = t; ; ) {
    var a = n.return
    if (a === null) break
    var l = a.alternate
    if (l === null) {
      if (((i = a.return), i !== null)) {
        n = i
        continue
      }
      break
    }
    if (a.child === l.child) {
      for (l = a.child; l; ) {
        if (l === n) return Fm(a), e
        if (l === i) return Fm(a), t
        l = l.sibling
      }
      throw Error(J(188))
    }
    if (n.return !== i.return) (n = a), (i = l)
    else {
      for (var c = !1, d = a.child; d; ) {
        if (d === n) {
          ;(c = !0), (n = a), (i = l)
          break
        }
        if (d === i) {
          ;(c = !0), (i = a), (n = l)
          break
        }
        d = d.sibling
      }
      if (!c) {
        for (d = l.child; d; ) {
          if (d === n) {
            ;(c = !0), (n = l), (i = a)
            break
          }
          if (d === i) {
            ;(c = !0), (i = l), (n = a)
            break
          }
          d = d.sibling
        }
        if (!c) throw Error(J(189))
      }
    }
    if (n.alternate !== i) throw Error(J(190))
  }
  if (n.tag !== 3) throw Error(J(188))
  return n.stateNode.current === n ? e : t
}
function X0(e) {
  return (e = l4(e)), e !== null ? Z0(e) : null
}
function Z0(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Z0(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var ey = fn.unstable_scheduleCallback,
  Um = fn.unstable_cancelCallback,
  u4 = fn.unstable_shouldYield,
  c4 = fn.unstable_requestPaint,
  Ze = fn.unstable_now,
  f4 = fn.unstable_getCurrentPriorityLevel,
  Yd = fn.unstable_ImmediatePriority,
  ty = fn.unstable_UserBlockingPriority,
  Zu = fn.unstable_NormalPriority,
  h4 = fn.unstable_LowPriority,
  ny = fn.unstable_IdlePriority,
  Lc = null,
  ir = null
function d4(e) {
  if (ir && typeof ir.onCommitFiberRoot == 'function')
    try {
      ir.onCommitFiberRoot(Lc, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Hn = Math.clz32 ? Math.clz32 : m4,
  p4 = Math.log,
  g4 = Math.LN2
function m4(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((p4(e) / g4) | 0)) | 0
}
var Su = 64,
  Eu = 4194304
function ks(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function ec(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var i = 0,
    a = e.suspendedLanes,
    l = e.pingedLanes,
    c = n & 268435455
  if (c !== 0) {
    var d = c & ~a
    d !== 0 ? (i = ks(d)) : ((l &= c), l !== 0 && (i = ks(l)))
  } else (c = n & ~a), c !== 0 ? (i = ks(c)) : l !== 0 && (i = ks(l))
  if (i === 0) return 0
  if (
    t !== 0 &&
    t !== i &&
    !(t & a) &&
    ((a = i & -i), (l = t & -t), a >= l || (a === 16 && (l & 4194240) !== 0))
  )
    return t
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - Hn(t)), (a = 1 << n), (i |= e[n]), (t &= ~a)
  return i
}
function v4(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function y4(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      a = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var c = 31 - Hn(l),
      d = 1 << c,
      g = a[c]
    g === -1
      ? (!(d & n) || d & i) && (a[c] = v4(d, t))
      : g <= t && (e.expiredLanes |= d),
      (l &= ~d)
  }
}
function Zh(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function ry() {
  var e = Su
  return (Su <<= 1), !(Su & 4194240) && (Su = 64), e
}
function lh(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function nl(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Hn(t)),
    (e[t] = n)
}
function b4(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var i = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - Hn(n),
      l = 1 << a
    ;(t[a] = 0), (i[a] = -1), (e[a] = -1), (n &= ~l)
  }
}
function Gd(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var i = 31 - Hn(n),
      a = 1 << i
    ;(a & t) | (e[i] & t) && (e[i] |= t), (n &= ~a)
  }
}
var Ie = 0
function iy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var oy,
  Qd,
  ay,
  sy,
  ly,
  ed = !1,
  xu = [],
  ui = null,
  ci = null,
  fi = null,
  js = new Map(),
  Fs = new Map(),
  ii = [],
  w4 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function $m(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ui = null
      break
    case 'dragenter':
    case 'dragleave':
      ci = null
      break
    case 'mouseover':
    case 'mouseout':
      fi = null
      break
    case 'pointerover':
    case 'pointerout':
      js.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Fs.delete(t.pointerId)
  }
}
function hs(e, t, n, i, a, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: l,
        targetContainers: [a],
      }),
      t !== null && ((t = il(t)), t !== null && Qd(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      a !== null && t.indexOf(a) === -1 && t.push(a),
      e)
}
function k4(e, t, n, i, a) {
  switch (t) {
    case 'focusin':
      return (ui = hs(ui, e, t, n, i, a)), !0
    case 'dragenter':
      return (ci = hs(ci, e, t, n, i, a)), !0
    case 'mouseover':
      return (fi = hs(fi, e, t, n, i, a)), !0
    case 'pointerover':
      var l = a.pointerId
      return js.set(l, hs(js.get(l) || null, e, t, n, i, a)), !0
    case 'gotpointercapture':
      return (
        (l = a.pointerId), Fs.set(l, hs(Fs.get(l) || null, e, t, n, i, a)), !0
      )
  }
  return !1
}
function uy(e) {
  var t = Gi(e.target)
  if (t !== null) {
    var n = so(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = J0(n)), t !== null)) {
          ;(e.blockedOn = t),
            ly(e.priority, function () {
              ay(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Uu(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = td(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var i = new n.constructor(n.type, n)
      ;(Gh = i), n.target.dispatchEvent(i), (Gh = null)
    } else return (t = il(n)), t !== null && Qd(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Bm(e, t, n) {
  Uu(e) && n.delete(t)
}
function _4() {
  ;(ed = !1),
    ui !== null && Uu(ui) && (ui = null),
    ci !== null && Uu(ci) && (ci = null),
    fi !== null && Uu(fi) && (fi = null),
    js.forEach(Bm),
    Fs.forEach(Bm)
}
function ds(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ed ||
      ((ed = !0), fn.unstable_scheduleCallback(fn.unstable_NormalPriority, _4)))
}
function Us(e) {
  function t(a) {
    return ds(a, e)
  }
  if (0 < xu.length) {
    ds(xu[0], e)
    for (var n = 1; n < xu.length; n++) {
      var i = xu[n]
      i.blockedOn === e && (i.blockedOn = null)
    }
  }
  for (
    ui !== null && ds(ui, e),
      ci !== null && ds(ci, e),
      fi !== null && ds(fi, e),
      js.forEach(t),
      Fs.forEach(t),
      n = 0;
    n < ii.length;
    n++
  )
    (i = ii[n]), i.blockedOn === e && (i.blockedOn = null)
  for (; 0 < ii.length && ((n = ii[0]), n.blockedOn === null); )
    uy(n), n.blockedOn === null && ii.shift()
}
var na = Lr.ReactCurrentBatchConfig,
  tc = !0
function S4(e, t, n, i) {
  var a = Ie,
    l = na.transition
  na.transition = null
  try {
    ;(Ie = 1), Jd(e, t, n, i)
  } finally {
    ;(Ie = a), (na.transition = l)
  }
}
function E4(e, t, n, i) {
  var a = Ie,
    l = na.transition
  na.transition = null
  try {
    ;(Ie = 4), Jd(e, t, n, i)
  } finally {
    ;(Ie = a), (na.transition = l)
  }
}
function Jd(e, t, n, i) {
  if (tc) {
    var a = td(e, t, n, i)
    if (a === null) yh(e, t, i, nc, n), $m(e, i)
    else if (k4(a, e, t, n, i)) i.stopPropagation()
    else if (($m(e, i), t & 4 && -1 < w4.indexOf(e))) {
      for (; a !== null; ) {
        var l = il(a)
        if (
          (l !== null && oy(l),
          (l = td(e, t, n, i)),
          l === null && yh(e, t, i, nc, n),
          l === a)
        )
          break
        a = l
      }
      a !== null && i.stopPropagation()
    } else yh(e, t, i, null, n)
  }
}
var nc = null
function td(e, t, n, i) {
  if (((nc = null), (e = Kd(i)), (e = Gi(e)), e !== null))
    if (((t = so(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = J0(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (nc = e), null
}
function cy(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (f4()) {
        case Yd:
          return 1
        case ty:
          return 4
        case Zu:
        case h4:
          return 16
        case ny:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var si = null,
  Xd = null,
  $u = null
function fy() {
  if ($u) return $u
  var e,
    t = Xd,
    n = t.length,
    i,
    a = 'value' in si ? si.value : si.textContent,
    l = a.length
  for (e = 0; e < n && t[e] === a[e]; e++);
  var c = n - e
  for (i = 1; i <= c && t[n - i] === a[l - i]; i++);
  return ($u = a.slice(e, 1 < i ? 1 - i : void 0))
}
function Bu(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Tu() {
  return !0
}
function Hm() {
  return !1
}
function dn(e) {
  function t(n, i, a, l, c) {
    ;(this._reactName = n),
      (this._targetInst = a),
      (this.type = i),
      (this.nativeEvent = l),
      (this.target = c),
      (this.currentTarget = null)
    for (var d in e)
      e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(l) : l[d]))
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Tu
        : Hm),
      (this.isPropagationStopped = Hm),
      this
    )
  }
  return (
    We(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Tu))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Tu))
      },
      persist: function () {},
      isPersistent: Tu,
    }),
    t
  )
}
var ga = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zd = dn(ga),
  rl = We({}, ga, { view: 0, detail: 0 }),
  x4 = dn(rl),
  uh,
  ch,
  ps,
  Ic = We({}, rl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ep,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ps &&
            (ps && e.type === 'mousemove'
              ? ((uh = e.screenX - ps.screenX), (ch = e.screenY - ps.screenY))
              : (ch = uh = 0),
            (ps = e)),
          uh)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ch
    },
  }),
  Vm = dn(Ic),
  T4 = We({}, Ic, { dataTransfer: 0 }),
  C4 = dn(T4),
  P4 = We({}, rl, { relatedTarget: 0 }),
  fh = dn(P4),
  O4 = We({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R4 = dn(O4),
  L4 = We({}, ga, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  I4 = dn(L4),
  A4 = We({}, ga, { data: 0 }),
  Wm = dn(A4),
  D4 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  z4 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  N4 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function M4(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = N4[e]) ? !!t[e] : !1
}
function ep() {
  return M4
}
var j4 = We({}, rl, {
    key: function (e) {
      if (e.key) {
        var t = D4[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Bu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? z4[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ep,
    charCode: function (e) {
      return e.type === 'keypress' ? Bu(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Bu(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  F4 = dn(j4),
  U4 = We({}, Ic, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qm = dn(U4),
  $4 = We({}, rl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ep,
  }),
  B4 = dn($4),
  H4 = We({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  V4 = dn(H4),
  W4 = We({}, Ic, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  q4 = dn(W4),
  K4 = [9, 13, 27, 32],
  tp = Tr && 'CompositionEvent' in window,
  xs = null
Tr && 'documentMode' in document && (xs = document.documentMode)
var Y4 = Tr && 'TextEvent' in window && !xs,
  hy = Tr && (!tp || (xs && 8 < xs && 11 >= xs)),
  Km = ' ',
  Ym = !1
function dy(e, t) {
  switch (e) {
    case 'keyup':
      return K4.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function py(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Ho = !1
function G4(e, t) {
  switch (e) {
    case 'compositionend':
      return py(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Ym = !0), Km)
    case 'textInput':
      return (e = t.data), e === Km && Ym ? null : e
    default:
      return null
  }
}
function Q4(e, t) {
  if (Ho)
    return e === 'compositionend' || (!tp && dy(e, t))
      ? ((e = fy()), ($u = Xd = si = null), (Ho = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return hy && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var J4 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Gm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!J4[e.type] : t === 'textarea'
}
function gy(e, t, n, i) {
  q0(i),
    (t = rc(t, 'onChange')),
    0 < t.length &&
      ((n = new Zd('onChange', 'change', null, n, i)),
      e.push({ event: n, listeners: t }))
}
var Ts = null,
  $s = null
function X4(e) {
  Ty(e, 0)
}
function Ac(e) {
  var t = qo(e)
  if (F0(t)) return e
}
function Z4(e, t) {
  if (e === 'change') return t
}
var my = !1
if (Tr) {
  var hh
  if (Tr) {
    var dh = 'oninput' in document
    if (!dh) {
      var Qm = document.createElement('div')
      Qm.setAttribute('oninput', 'return;'),
        (dh = typeof Qm.oninput == 'function')
    }
    hh = dh
  } else hh = !1
  my = hh && (!document.documentMode || 9 < document.documentMode)
}
function Jm() {
  Ts && (Ts.detachEvent('onpropertychange', vy), ($s = Ts = null))
}
function vy(e) {
  if (e.propertyName === 'value' && Ac($s)) {
    var t = []
    gy(t, $s, e, Kd(e)), Q0(X4, t)
  }
}
function ex(e, t, n) {
  e === 'focusin'
    ? (Jm(), (Ts = t), ($s = n), Ts.attachEvent('onpropertychange', vy))
    : e === 'focusout' && Jm()
}
function tx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ac($s)
}
function nx(e, t) {
  if (e === 'click') return Ac(t)
}
function rx(e, t) {
  if (e === 'input' || e === 'change') return Ac(t)
}
function ix(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Wn = typeof Object.is == 'function' ? Object.is : ix
function Bs(e, t) {
  if (Wn(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    i = Object.keys(t)
  if (n.length !== i.length) return !1
  for (i = 0; i < n.length; i++) {
    var a = n[i]
    if (!Mh.call(t, a) || !Wn(e[a], t[a])) return !1
  }
  return !0
}
function Xm(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Zm(e, t) {
  var n = Xm(e)
  e = 0
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e }
      e = i
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Xm(n)
  }
}
function yy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yy(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function by() {
  for (var e = window, t = Qu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Qu(e.document)
  }
  return t
}
function np(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function ox(e) {
  var t = by(),
    n = e.focusedElem,
    i = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yy(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && np(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var a = n.textContent.length,
          l = Math.min(i.start, a)
        ;(i = i.end === void 0 ? l : Math.min(i.end, a)),
          !e.extend && l > i && ((a = i), (i = l), (l = a)),
          (a = Zm(n, l))
        var c = Zm(n, i)
        a &&
          c &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== c.node ||
            e.focusOffset !== c.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          l > i
            ? (e.addRange(t), e.extend(c.node, c.offset))
            : (t.setEnd(c.node, c.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var ax = Tr && 'documentMode' in document && 11 >= document.documentMode,
  Vo = null,
  nd = null,
  Cs = null,
  rd = !1
function ev(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  rd ||
    Vo == null ||
    Vo !== Qu(i) ||
    ((i = Vo),
    'selectionStart' in i && np(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Cs && Bs(Cs, i)) ||
      ((Cs = i),
      (i = rc(nd, 'onSelect')),
      0 < i.length &&
        ((t = new Zd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Vo))))
}
function Cu(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Wo = {
    animationend: Cu('Animation', 'AnimationEnd'),
    animationiteration: Cu('Animation', 'AnimationIteration'),
    animationstart: Cu('Animation', 'AnimationStart'),
    transitionend: Cu('Transition', 'TransitionEnd'),
  },
  ph = {},
  wy = {}
Tr &&
  ((wy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Wo.animationend.animation,
    delete Wo.animationiteration.animation,
    delete Wo.animationstart.animation),
  'TransitionEvent' in window || delete Wo.transitionend.transition)
function Dc(e) {
  if (ph[e]) return ph[e]
  if (!Wo[e]) return e
  var t = Wo[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in wy) return (ph[e] = t[n])
  return e
}
var ky = Dc('animationend'),
  _y = Dc('animationiteration'),
  Sy = Dc('animationstart'),
  Ey = Dc('transitionend'),
  xy = new Map(),
  tv =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function ki(e, t) {
  xy.set(e, t), ao(t, [e])
}
for (var gh = 0; gh < tv.length; gh++) {
  var mh = tv[gh],
    sx = mh.toLowerCase(),
    lx = mh[0].toUpperCase() + mh.slice(1)
  ki(sx, 'on' + lx)
}
ki(ky, 'onAnimationEnd')
ki(_y, 'onAnimationIteration')
ki(Sy, 'onAnimationStart')
ki('dblclick', 'onDoubleClick')
ki('focusin', 'onFocus')
ki('focusout', 'onBlur')
ki(Ey, 'onTransitionEnd')
aa('onMouseEnter', ['mouseout', 'mouseover'])
aa('onMouseLeave', ['mouseout', 'mouseover'])
aa('onPointerEnter', ['pointerout', 'pointerover'])
aa('onPointerLeave', ['pointerout', 'pointerover'])
ao(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
ao(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
ao('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
ao(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
ao(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
ao(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var _s =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ux = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_s))
function nv(e, t, n) {
  var i = e.type || 'unknown-event'
  ;(e.currentTarget = n), s4(i, t, void 0, e), (e.currentTarget = null)
}
function Ty(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      a = i.event
    i = i.listeners
    e: {
      var l = void 0
      if (t)
        for (var c = i.length - 1; 0 <= c; c--) {
          var d = i[c],
            g = d.instance,
            w = d.currentTarget
          if (((d = d.listener), g !== l && a.isPropagationStopped())) break e
          nv(a, d, w), (l = g)
        }
      else
        for (c = 0; c < i.length; c++) {
          if (
            ((d = i[c]),
            (g = d.instance),
            (w = d.currentTarget),
            (d = d.listener),
            g !== l && a.isPropagationStopped())
          )
            break e
          nv(a, d, w), (l = g)
        }
    }
  }
  if (Xu) throw ((e = Xh), (Xu = !1), (Xh = null), e)
}
function je(e, t) {
  var n = t[ld]
  n === void 0 && (n = t[ld] = new Set())
  var i = e + '__bubble'
  n.has(i) || (Cy(t, e, 2, !1), n.add(i))
}
function vh(e, t, n) {
  var i = 0
  t && (i |= 4), Cy(n, e, i, t)
}
var Pu = '_reactListening' + Math.random().toString(36).slice(2)
function Hs(e) {
  if (!e[Pu]) {
    ;(e[Pu] = !0),
      D0.forEach(function (n) {
        n !== 'selectionchange' && (ux.has(n) || vh(n, !1, e), vh(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Pu] || ((t[Pu] = !0), vh('selectionchange', !1, t))
  }
}
function Cy(e, t, n, i) {
  switch (cy(t)) {
    case 1:
      var a = S4
      break
    case 4:
      a = E4
      break
    default:
      a = Jd
  }
  ;(n = a.bind(null, t, n, e)),
    (a = void 0),
    !Jh ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (a = !0),
    i
      ? a !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : a !== void 0
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1)
}
function yh(e, t, n, i, a) {
  var l = i
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return
      var c = i.tag
      if (c === 3 || c === 4) {
        var d = i.stateNode.containerInfo
        if (d === a || (d.nodeType === 8 && d.parentNode === a)) break
        if (c === 4)
          for (c = i.return; c !== null; ) {
            var g = c.tag
            if (
              (g === 3 || g === 4) &&
              ((g = c.stateNode.containerInfo),
              g === a || (g.nodeType === 8 && g.parentNode === a))
            )
              return
            c = c.return
          }
        for (; d !== null; ) {
          if (((c = Gi(d)), c === null)) return
          if (((g = c.tag), g === 5 || g === 6)) {
            i = l = c
            continue e
          }
          d = d.parentNode
        }
      }
      i = i.return
    }
  Q0(function () {
    var w = l,
      O = Kd(n),
      R = []
    e: {
      var _ = xy.get(e)
      if (_ !== void 0) {
        var H = Zd,
          F = e
        switch (e) {
          case 'keypress':
            if (Bu(n) === 0) break e
          case 'keydown':
          case 'keyup':
            H = F4
            break
          case 'focusin':
            ;(F = 'focus'), (H = fh)
            break
          case 'focusout':
            ;(F = 'blur'), (H = fh)
            break
          case 'beforeblur':
          case 'afterblur':
            H = fh
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            H = Vm
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            H = C4
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            H = B4
            break
          case ky:
          case _y:
          case Sy:
            H = R4
            break
          case Ey:
            H = V4
            break
          case 'scroll':
            H = x4
            break
          case 'wheel':
            H = q4
            break
          case 'copy':
          case 'cut':
          case 'paste':
            H = I4
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            H = qm
        }
        var W = (t & 4) !== 0,
          Q = !W && e === 'scroll',
          I = W ? (_ !== null ? _ + 'Capture' : null) : _
        W = []
        for (var x = w, A; x !== null; ) {
          A = x
          var B = A.stateNode
          if (
            (A.tag === 5 &&
              B !== null &&
              ((A = B),
              I !== null && ((B = Ms(x, I)), B != null && W.push(Vs(x, B, A)))),
            Q)
          )
            break
          x = x.return
        }
        0 < W.length &&
          ((_ = new H(_, F, null, n, O)), R.push({ event: _, listeners: W }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((_ = e === 'mouseover' || e === 'pointerover'),
          (H = e === 'mouseout' || e === 'pointerout'),
          _ &&
            n !== Gh &&
            (F = n.relatedTarget || n.fromElement) &&
            (Gi(F) || F[Cr]))
        )
          break e
        if (
          (H || _) &&
          ((_ =
            O.window === O
              ? O
              : (_ = O.ownerDocument)
              ? _.defaultView || _.parentWindow
              : window),
          H
            ? ((F = n.relatedTarget || n.toElement),
              (H = w),
              (F = F ? Gi(F) : null),
              F !== null &&
                ((Q = so(F)), F !== Q || (F.tag !== 5 && F.tag !== 6)) &&
                (F = null))
            : ((H = null), (F = w)),
          H !== F)
        ) {
          if (
            ((W = Vm),
            (B = 'onMouseLeave'),
            (I = 'onMouseEnter'),
            (x = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((W = qm),
              (B = 'onPointerLeave'),
              (I = 'onPointerEnter'),
              (x = 'pointer')),
            (Q = H == null ? _ : qo(H)),
            (A = F == null ? _ : qo(F)),
            (_ = new W(B, x + 'leave', H, n, O)),
            (_.target = Q),
            (_.relatedTarget = A),
            (B = null),
            Gi(O) === w &&
              ((W = new W(I, x + 'enter', F, n, O)),
              (W.target = A),
              (W.relatedTarget = Q),
              (B = W)),
            (Q = B),
            H && F)
          )
            t: {
              for (W = H, I = F, x = 0, A = W; A; A = jo(A)) x++
              for (A = 0, B = I; B; B = jo(B)) A++
              for (; 0 < x - A; ) (W = jo(W)), x--
              for (; 0 < A - x; ) (I = jo(I)), A--
              for (; x--; ) {
                if (W === I || (I !== null && W === I.alternate)) break t
                ;(W = jo(W)), (I = jo(I))
              }
              W = null
            }
          else W = null
          H !== null && rv(R, _, H, W, !1),
            F !== null && Q !== null && rv(R, Q, F, W, !0)
        }
      }
      e: {
        if (
          ((_ = w ? qo(w) : window),
          (H = _.nodeName && _.nodeName.toLowerCase()),
          H === 'select' || (H === 'input' && _.type === 'file'))
        )
          var G = Z4
        else if (Gm(_))
          if (my) G = rx
          else {
            G = tx
            var X = ex
          }
        else
          (H = _.nodeName) &&
            H.toLowerCase() === 'input' &&
            (_.type === 'checkbox' || _.type === 'radio') &&
            (G = nx)
        if (G && (G = G(e, w))) {
          gy(R, G, n, O)
          break e
        }
        X && X(e, _, w),
          e === 'focusout' &&
            (X = _._wrapperState) &&
            X.controlled &&
            _.type === 'number' &&
            Vh(_, 'number', _.value)
      }
      switch (((X = w ? qo(w) : window), e)) {
        case 'focusin':
          ;(Gm(X) || X.contentEditable === 'true') &&
            ((Vo = X), (nd = w), (Cs = null))
          break
        case 'focusout':
          Cs = nd = Vo = null
          break
        case 'mousedown':
          rd = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(rd = !1), ev(R, n, O)
          break
        case 'selectionchange':
          if (ax) break
        case 'keydown':
        case 'keyup':
          ev(R, n, O)
      }
      var S
      if (tp)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart'
              break e
            case 'compositionend':
              k = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              k = 'onCompositionUpdate'
              break e
          }
          k = void 0
        }
      else
        Ho
          ? dy(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart')
      k &&
        (hy &&
          n.locale !== 'ko' &&
          (Ho || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && Ho && (S = fy())
            : ((si = O),
              (Xd = 'value' in si ? si.value : si.textContent),
              (Ho = !0))),
        (X = rc(w, k)),
        0 < X.length &&
          ((k = new Wm(k, e, null, n, O)),
          R.push({ event: k, listeners: X }),
          S ? (k.data = S) : ((S = py(n)), S !== null && (k.data = S)))),
        (S = Y4 ? G4(e, n) : Q4(e, n)) &&
          ((w = rc(w, 'onBeforeInput')),
          0 < w.length &&
            ((O = new Wm('onBeforeInput', 'beforeinput', null, n, O)),
            R.push({ event: O, listeners: w }),
            (O.data = S)))
    }
    Ty(R, t)
  })
}
function Vs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function rc(e, t) {
  for (var n = t + 'Capture', i = []; e !== null; ) {
    var a = e,
      l = a.stateNode
    a.tag === 5 &&
      l !== null &&
      ((a = l),
      (l = Ms(e, n)),
      l != null && i.unshift(Vs(e, l, a)),
      (l = Ms(e, t)),
      l != null && i.push(Vs(e, l, a))),
      (e = e.return)
  }
  return i
}
function jo(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function rv(e, t, n, i, a) {
  for (var l = t._reactName, c = []; n !== null && n !== i; ) {
    var d = n,
      g = d.alternate,
      w = d.stateNode
    if (g !== null && g === i) break
    d.tag === 5 &&
      w !== null &&
      ((d = w),
      a
        ? ((g = Ms(n, l)), g != null && c.unshift(Vs(n, g, d)))
        : a || ((g = Ms(n, l)), g != null && c.push(Vs(n, g, d)))),
      (n = n.return)
  }
  c.length !== 0 && e.push({ event: t, listeners: c })
}
var cx = /\r\n?/g,
  fx = /\u0000|\uFFFD/g
function iv(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      cx,
      `
`
    )
    .replace(fx, '')
}
function Ou(e, t, n) {
  if (((t = iv(t)), iv(e) !== t && n)) throw Error(J(425))
}
function ic() {}
var id = null,
  od = null
function ad(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var sd = typeof setTimeout == 'function' ? setTimeout : void 0,
  hx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ov = typeof Promise == 'function' ? Promise : void 0,
  dx =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ov < 'u'
      ? function (e) {
          return ov.resolve(null).then(e).catch(px)
        }
      : sd
function px(e) {
  setTimeout(function () {
    throw e
  })
}
function bh(e, t) {
  var n = t,
    i = 0
  do {
    var a = n.nextSibling
    if ((e.removeChild(n), a && a.nodeType === 8))
      if (((n = a.data), n === '/$')) {
        if (i === 0) {
          e.removeChild(a), Us(t)
          return
        }
        i--
      } else (n !== '$' && n !== '$?' && n !== '$!') || i++
    n = a
  } while (n)
  Us(t)
}
function hi(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function av(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var ma = Math.random().toString(36).slice(2),
  nr = '__reactFiber$' + ma,
  Ws = '__reactProps$' + ma,
  Cr = '__reactContainer$' + ma,
  ld = '__reactEvents$' + ma,
  gx = '__reactListeners$' + ma,
  mx = '__reactHandles$' + ma
function Gi(e) {
  var t = e[nr]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Cr] || n[nr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = av(e); e !== null; ) {
          if ((n = e[nr])) return n
          e = av(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function il(e) {
  return (
    (e = e[nr] || e[Cr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function qo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(J(33))
}
function zc(e) {
  return e[Ws] || null
}
var ud = [],
  Ko = -1
function _i(e) {
  return { current: e }
}
function Fe(e) {
  0 > Ko || ((e.current = ud[Ko]), (ud[Ko] = null), Ko--)
}
function Me(e, t) {
  Ko++, (ud[Ko] = e.current), (e.current = t)
}
var wi = {},
  Ot = _i(wi),
  Zt = _i(!1),
  to = wi
function sa(e, t) {
  var n = e.type.contextTypes
  if (!n) return wi
  var i = e.stateNode
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext
  var a = {},
    l
  for (l in n) a[l] = t[l]
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  )
}
function en(e) {
  return (e = e.childContextTypes), e != null
}
function oc() {
  Fe(Zt), Fe(Ot)
}
function sv(e, t, n) {
  if (Ot.current !== wi) throw Error(J(168))
  Me(Ot, t), Me(Zt, n)
}
function Py(e, t, n) {
  var i = e.stateNode
  if (((t = t.childContextTypes), typeof i.getChildContext != 'function'))
    return n
  i = i.getChildContext()
  for (var a in i) if (!(a in t)) throw Error(J(108, e4(e) || 'Unknown', a))
  return We({}, n, i)
}
function ac(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wi),
    (to = Ot.current),
    Me(Ot, e),
    Me(Zt, Zt.current),
    !0
  )
}
function lv(e, t, n) {
  var i = e.stateNode
  if (!i) throw Error(J(169))
  n
    ? ((e = Py(e, t, to)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      Fe(Zt),
      Fe(Ot),
      Me(Ot, e))
    : Fe(Zt),
    Me(Zt, n)
}
var _r = null,
  Nc = !1,
  wh = !1
function Oy(e) {
  _r === null ? (_r = [e]) : _r.push(e)
}
function vx(e) {
  ;(Nc = !0), Oy(e)
}
function Si() {
  if (!wh && _r !== null) {
    wh = !0
    var e = 0,
      t = Ie
    try {
      var n = _r
      for (Ie = 1; e < n.length; e++) {
        var i = n[e]
        do i = i(!0)
        while (i !== null)
      }
      ;(_r = null), (Nc = !1)
    } catch (a) {
      throw (_r !== null && (_r = _r.slice(e + 1)), ey(Yd, Si), a)
    } finally {
      ;(Ie = t), (wh = !1)
    }
  }
  return null
}
var Yo = [],
  Go = 0,
  sc = null,
  lc = 0,
  _n = [],
  Sn = 0,
  no = null,
  Sr = 1,
  Er = ''
function qi(e, t) {
  ;(Yo[Go++] = lc), (Yo[Go++] = sc), (sc = e), (lc = t)
}
function Ry(e, t, n) {
  ;(_n[Sn++] = Sr), (_n[Sn++] = Er), (_n[Sn++] = no), (no = e)
  var i = Sr
  e = Er
  var a = 32 - Hn(i) - 1
  ;(i &= ~(1 << a)), (n += 1)
  var l = 32 - Hn(t) + a
  if (30 < l) {
    var c = a - (a % 5)
    ;(l = (i & ((1 << c) - 1)).toString(32)),
      (i >>= c),
      (a -= c),
      (Sr = (1 << (32 - Hn(t) + a)) | (n << a) | i),
      (Er = l + e)
  } else (Sr = (1 << l) | (n << a) | i), (Er = e)
}
function rp(e) {
  e.return !== null && (qi(e, 1), Ry(e, 1, 0))
}
function ip(e) {
  for (; e === sc; )
    (sc = Yo[--Go]), (Yo[Go] = null), (lc = Yo[--Go]), (Yo[Go] = null)
  for (; e === no; )
    (no = _n[--Sn]),
      (_n[Sn] = null),
      (Er = _n[--Sn]),
      (_n[Sn] = null),
      (Sr = _n[--Sn]),
      (_n[Sn] = null)
}
var cn = null,
  un = null,
  Ue = !1,
  $n = null
function Ly(e, t) {
  var n = En(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function uv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (cn = e), (un = hi(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (cn = e), (un = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = no !== null ? { id: Sr, overflow: Er } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = En(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (cn = e),
            (un = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function cd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fd(e) {
  if (Ue) {
    var t = un
    if (t) {
      var n = t
      if (!uv(e, t)) {
        if (cd(e)) throw Error(J(418))
        t = hi(n.nextSibling)
        var i = cn
        t && uv(e, t)
          ? Ly(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ue = !1), (cn = e))
      }
    } else {
      if (cd(e)) throw Error(J(418))
      ;(e.flags = (e.flags & -4097) | 2), (Ue = !1), (cn = e)
    }
  }
}
function cv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  cn = e
}
function Ru(e) {
  if (e !== cn) return !1
  if (!Ue) return cv(e), (Ue = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ad(e.type, e.memoizedProps))),
    t && (t = un))
  ) {
    if (cd(e)) throw (Iy(), Error(J(418)))
    for (; t; ) Ly(e, t), (t = hi(t.nextSibling))
  }
  if ((cv(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(J(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              un = hi(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      un = null
    }
  } else un = cn ? hi(e.stateNode.nextSibling) : null
  return !0
}
function Iy() {
  for (var e = un; e; ) e = hi(e.nextSibling)
}
function la() {
  ;(un = cn = null), (Ue = !1)
}
function op(e) {
  $n === null ? ($n = [e]) : $n.push(e)
}
var yx = Lr.ReactCurrentBatchConfig
function Fn(e, t) {
  if (e && e.defaultProps) {
    ;(t = We({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var uc = _i(null),
  cc = null,
  Qo = null,
  ap = null
function sp() {
  ap = Qo = cc = null
}
function lp(e) {
  var t = uc.current
  Fe(uc), (e._currentValue = t)
}
function hd(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function ra(e, t) {
  ;(cc = e),
    (ap = Qo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xt = !0), (e.firstContext = null))
}
function Tn(e) {
  var t = e._currentValue
  if (ap !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qo === null)) {
      if (cc === null) throw Error(J(308))
      ;(Qo = e), (cc.dependencies = { lanes: 0, firstContext: e })
    } else Qo = Qo.next = e
  return t
}
var Qi = null
function up(e) {
  Qi === null ? (Qi = [e]) : Qi.push(e)
}
function Ay(e, t, n, i) {
  var a = t.interleaved
  return (
    a === null ? ((n.next = n), up(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    Pr(e, i)
  )
}
function Pr(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var ri = !1
function cp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Dy(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function xr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function di(e, t, n) {
  var i = e.updateQueue
  if (i === null) return null
  if (((i = i.shared), Se & 2)) {
    var a = i.pending
    return (
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (i.pending = t),
      Pr(e, n)
    )
  }
  return (
    (a = i.interleaved),
    a === null ? ((t.next = t), up(i)) : ((t.next = a.next), (a.next = t)),
    (i.interleaved = t),
    Pr(e, n)
  )
}
function Hu(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Gd(e, n)
  }
}
function fv(e, t) {
  var n = e.updateQueue,
    i = e.alternate
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var a = null,
      l = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var c = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        l === null ? (a = l = c) : (l = l.next = c), (n = n.next)
      } while (n !== null)
      l === null ? (a = l = t) : (l = l.next = t)
    } else a = l = t
    ;(n = {
      baseState: i.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: l,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function fc(e, t, n, i) {
  var a = e.updateQueue
  ri = !1
  var l = a.firstBaseUpdate,
    c = a.lastBaseUpdate,
    d = a.shared.pending
  if (d !== null) {
    a.shared.pending = null
    var g = d,
      w = g.next
    ;(g.next = null), c === null ? (l = w) : (c.next = w), (c = g)
    var O = e.alternate
    O !== null &&
      ((O = O.updateQueue),
      (d = O.lastBaseUpdate),
      d !== c &&
        (d === null ? (O.firstBaseUpdate = w) : (d.next = w),
        (O.lastBaseUpdate = g)))
  }
  if (l !== null) {
    var R = a.baseState
    ;(c = 0), (O = w = g = null), (d = l)
    do {
      var _ = d.lane,
        H = d.eventTime
      if ((i & _) === _) {
        O !== null &&
          (O = O.next =
            {
              eventTime: H,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            })
        e: {
          var F = e,
            W = d
          switch (((_ = t), (H = n), W.tag)) {
            case 1:
              if (((F = W.payload), typeof F == 'function')) {
                R = F.call(H, R, _)
                break e
              }
              R = F
              break e
            case 3:
              F.flags = (F.flags & -65537) | 128
            case 0:
              if (
                ((F = W.payload),
                (_ = typeof F == 'function' ? F.call(H, R, _) : F),
                _ == null)
              )
                break e
              R = We({}, R, _)
              break e
            case 2:
              ri = !0
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((e.flags |= 64),
          (_ = a.effects),
          _ === null ? (a.effects = [d]) : _.push(d))
      } else
        (H = {
          eventTime: H,
          lane: _,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          O === null ? ((w = O = H), (g = R)) : (O = O.next = H),
          (c |= _)
      if (((d = d.next), d === null)) {
        if (((d = a.shared.pending), d === null)) break
        ;(_ = d),
          (d = _.next),
          (_.next = null),
          (a.lastBaseUpdate = _),
          (a.shared.pending = null)
      }
    } while (!0)
    if (
      (O === null && (g = R),
      (a.baseState = g),
      (a.firstBaseUpdate = w),
      (a.lastBaseUpdate = O),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t
      do (c |= a.lane), (a = a.next)
      while (a !== t)
    } else l === null && (a.shared.lanes = 0)
    ;(io |= c), (e.lanes = c), (e.memoizedState = R)
  }
}
function hv(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        a = i.callback
      if (a !== null) {
        if (((i.callback = null), (i = n), typeof a != 'function'))
          throw Error(J(191, a))
        a.call(i)
      }
    }
}
var zy = new A0.Component().refs
function dd(e, t, n, i) {
  ;(t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : We({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? so(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var i = jt(),
      a = gi(e),
      l = xr(i, a)
    ;(l.payload = t),
      n != null && (l.callback = n),
      (t = di(e, l, a)),
      t !== null && (Vn(t, e, a, i), Hu(t, e, a))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var i = jt(),
      a = gi(e),
      l = xr(i, a)
    ;(l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = di(e, l, a)),
      t !== null && (Vn(t, e, a, i), Hu(t, e, a))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = jt(),
      i = gi(e),
      a = xr(n, i)
    ;(a.tag = 2),
      t != null && (a.callback = t),
      (t = di(e, a, i)),
      t !== null && (Vn(t, e, i, n), Hu(t, e, i))
  },
}
function dv(e, t, n, i, a, l, c) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(i, l, c)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bs(n, i) || !Bs(a, l)
      : !0
  )
}
function Ny(e, t, n) {
  var i = !1,
    a = wi,
    l = t.contextType
  return (
    typeof l == 'object' && l !== null
      ? (l = Tn(l))
      : ((a = en(t) ? to : Ot.current),
        (i = t.contextTypes),
        (l = (i = i != null) ? sa(e, a) : wi)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mc),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  )
}
function pv(e, t, n, i) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Mc.enqueueReplaceState(t, t.state, null)
}
function pd(e, t, n, i) {
  var a = e.stateNode
  ;(a.props = n), (a.state = e.memoizedState), (a.refs = zy), cp(e)
  var l = t.contextType
  typeof l == 'object' && l !== null
    ? (a.context = Tn(l))
    : ((l = en(t) ? to : Ot.current), (a.context = sa(e, l))),
    (a.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (dd(e, t, l, n), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function' ||
      (typeof a.UNSAFE_componentWillMount != 'function' &&
        typeof a.componentWillMount != 'function') ||
      ((t = a.state),
      typeof a.componentWillMount == 'function' && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == 'function' &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && Mc.enqueueReplaceState(a, a.state, null),
      fc(e, n, a, i),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == 'function' && (e.flags |= 4194308)
}
function gs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(J(309))
        var i = n.stateNode
      }
      if (!i) throw Error(J(147, e))
      var a = i,
        l = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (c) {
            var d = a.refs
            d === zy && (d = a.refs = {}), c === null ? delete d[l] : (d[l] = c)
          }),
          (t._stringRef = l),
          t)
    }
    if (typeof e != 'string') throw Error(J(284))
    if (!n._owner) throw Error(J(290, e))
  }
  return e
}
function Lu(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      J(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function gv(e) {
  var t = e._init
  return t(e._payload)
}
function My(e) {
  function t(I, x) {
    if (e) {
      var A = I.deletions
      A === null ? ((I.deletions = [x]), (I.flags |= 16)) : A.push(x)
    }
  }
  function n(I, x) {
    if (!e) return null
    for (; x !== null; ) t(I, x), (x = x.sibling)
    return null
  }
  function i(I, x) {
    for (I = new Map(); x !== null; )
      x.key !== null ? I.set(x.key, x) : I.set(x.index, x), (x = x.sibling)
    return I
  }
  function a(I, x) {
    return (I = mi(I, x)), (I.index = 0), (I.sibling = null), I
  }
  function l(I, x, A) {
    return (
      (I.index = A),
      e
        ? ((A = I.alternate),
          A !== null
            ? ((A = A.index), A < x ? ((I.flags |= 2), x) : A)
            : ((I.flags |= 2), x))
        : ((I.flags |= 1048576), x)
    )
  }
  function c(I) {
    return e && I.alternate === null && (I.flags |= 2), I
  }
  function d(I, x, A, B) {
    return x === null || x.tag !== 6
      ? ((x = Ch(A, I.mode, B)), (x.return = I), x)
      : ((x = a(x, A)), (x.return = I), x)
  }
  function g(I, x, A, B) {
    var G = A.type
    return G === Bo
      ? O(I, x, A.props.children, B, A.key)
      : x !== null &&
        (x.elementType === G ||
          (typeof G == 'object' &&
            G !== null &&
            G.$$typeof === ni &&
            gv(G) === x.type))
      ? ((B = a(x, A.props)), (B.ref = gs(I, x, A)), (B.return = I), B)
      : ((B = Gu(A.type, A.key, A.props, null, I.mode, B)),
        (B.ref = gs(I, x, A)),
        (B.return = I),
        B)
  }
  function w(I, x, A, B) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== A.containerInfo ||
      x.stateNode.implementation !== A.implementation
      ? ((x = Ph(A, I.mode, B)), (x.return = I), x)
      : ((x = a(x, A.children || [])), (x.return = I), x)
  }
  function O(I, x, A, B, G) {
    return x === null || x.tag !== 7
      ? ((x = eo(A, I.mode, B, G)), (x.return = I), x)
      : ((x = a(x, A)), (x.return = I), x)
  }
  function R(I, x, A) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (x = Ch('' + x, I.mode, A)), (x.return = I), x
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case wu:
          return (
            (A = Gu(x.type, x.key, x.props, null, I.mode, A)),
            (A.ref = gs(I, null, x)),
            (A.return = I),
            A
          )
        case $o:
          return (x = Ph(x, I.mode, A)), (x.return = I), x
        case ni:
          var B = x._init
          return R(I, B(x._payload), A)
      }
      if (ws(x) || cs(x)) return (x = eo(x, I.mode, A, null)), (x.return = I), x
      Lu(I, x)
    }
    return null
  }
  function _(I, x, A, B) {
    var G = x !== null ? x.key : null
    if ((typeof A == 'string' && A !== '') || typeof A == 'number')
      return G !== null ? null : d(I, x, '' + A, B)
    if (typeof A == 'object' && A !== null) {
      switch (A.$$typeof) {
        case wu:
          return A.key === G ? g(I, x, A, B) : null
        case $o:
          return A.key === G ? w(I, x, A, B) : null
        case ni:
          return (G = A._init), _(I, x, G(A._payload), B)
      }
      if (ws(A) || cs(A)) return G !== null ? null : O(I, x, A, B, null)
      Lu(I, A)
    }
    return null
  }
  function H(I, x, A, B, G) {
    if ((typeof B == 'string' && B !== '') || typeof B == 'number')
      return (I = I.get(A) || null), d(x, I, '' + B, G)
    if (typeof B == 'object' && B !== null) {
      switch (B.$$typeof) {
        case wu:
          return (I = I.get(B.key === null ? A : B.key) || null), g(x, I, B, G)
        case $o:
          return (I = I.get(B.key === null ? A : B.key) || null), w(x, I, B, G)
        case ni:
          var X = B._init
          return H(I, x, A, X(B._payload), G)
      }
      if (ws(B) || cs(B)) return (I = I.get(A) || null), O(x, I, B, G, null)
      Lu(x, B)
    }
    return null
  }
  function F(I, x, A, B) {
    for (
      var G = null, X = null, S = x, k = (x = 0), T = null;
      S !== null && k < A.length;
      k++
    ) {
      S.index > k ? ((T = S), (S = null)) : (T = S.sibling)
      var P = _(I, S, A[k], B)
      if (P === null) {
        S === null && (S = T)
        break
      }
      e && S && P.alternate === null && t(I, S),
        (x = l(P, x, k)),
        X === null ? (G = P) : (X.sibling = P),
        (X = P),
        (S = T)
    }
    if (k === A.length) return n(I, S), Ue && qi(I, k), G
    if (S === null) {
      for (; k < A.length; k++)
        (S = R(I, A[k], B)),
          S !== null &&
            ((x = l(S, x, k)), X === null ? (G = S) : (X.sibling = S), (X = S))
      return Ue && qi(I, k), G
    }
    for (S = i(I, S); k < A.length; k++)
      (T = H(S, I, k, A[k], B)),
        T !== null &&
          (e && T.alternate !== null && S.delete(T.key === null ? k : T.key),
          (x = l(T, x, k)),
          X === null ? (G = T) : (X.sibling = T),
          (X = T))
    return (
      e &&
        S.forEach(function (D) {
          return t(I, D)
        }),
      Ue && qi(I, k),
      G
    )
  }
  function W(I, x, A, B) {
    var G = cs(A)
    if (typeof G != 'function') throw Error(J(150))
    if (((A = G.call(A)), A == null)) throw Error(J(151))
    for (
      var X = (G = null), S = x, k = (x = 0), T = null, P = A.next();
      S !== null && !P.done;
      k++, P = A.next()
    ) {
      S.index > k ? ((T = S), (S = null)) : (T = S.sibling)
      var D = _(I, S, P.value, B)
      if (D === null) {
        S === null && (S = T)
        break
      }
      e && S && D.alternate === null && t(I, S),
        (x = l(D, x, k)),
        X === null ? (G = D) : (X.sibling = D),
        (X = D),
        (S = T)
    }
    if (P.done) return n(I, S), Ue && qi(I, k), G
    if (S === null) {
      for (; !P.done; k++, P = A.next())
        (P = R(I, P.value, B)),
          P !== null &&
            ((x = l(P, x, k)), X === null ? (G = P) : (X.sibling = P), (X = P))
      return Ue && qi(I, k), G
    }
    for (S = i(I, S); !P.done; k++, P = A.next())
      (P = H(S, I, k, P.value, B)),
        P !== null &&
          (e && P.alternate !== null && S.delete(P.key === null ? k : P.key),
          (x = l(P, x, k)),
          X === null ? (G = P) : (X.sibling = P),
          (X = P))
    return (
      e &&
        S.forEach(function (j) {
          return t(I, j)
        }),
      Ue && qi(I, k),
      G
    )
  }
  function Q(I, x, A, B) {
    if (
      (typeof A == 'object' &&
        A !== null &&
        A.type === Bo &&
        A.key === null &&
        (A = A.props.children),
      typeof A == 'object' && A !== null)
    ) {
      switch (A.$$typeof) {
        case wu:
          e: {
            for (var G = A.key, X = x; X !== null; ) {
              if (X.key === G) {
                if (((G = A.type), G === Bo)) {
                  if (X.tag === 7) {
                    n(I, X.sibling),
                      (x = a(X, A.props.children)),
                      (x.return = I),
                      (I = x)
                    break e
                  }
                } else if (
                  X.elementType === G ||
                  (typeof G == 'object' &&
                    G !== null &&
                    G.$$typeof === ni &&
                    gv(G) === X.type)
                ) {
                  n(I, X.sibling),
                    (x = a(X, A.props)),
                    (x.ref = gs(I, X, A)),
                    (x.return = I),
                    (I = x)
                  break e
                }
                n(I, X)
                break
              } else t(I, X)
              X = X.sibling
            }
            A.type === Bo
              ? ((x = eo(A.props.children, I.mode, B, A.key)),
                (x.return = I),
                (I = x))
              : ((B = Gu(A.type, A.key, A.props, null, I.mode, B)),
                (B.ref = gs(I, x, A)),
                (B.return = I),
                (I = B))
          }
          return c(I)
        case $o:
          e: {
            for (X = A.key; x !== null; ) {
              if (x.key === X)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === A.containerInfo &&
                  x.stateNode.implementation === A.implementation
                ) {
                  n(I, x.sibling),
                    (x = a(x, A.children || [])),
                    (x.return = I),
                    (I = x)
                  break e
                } else {
                  n(I, x)
                  break
                }
              else t(I, x)
              x = x.sibling
            }
            ;(x = Ph(A, I.mode, B)), (x.return = I), (I = x)
          }
          return c(I)
        case ni:
          return (X = A._init), Q(I, x, X(A._payload), B)
      }
      if (ws(A)) return F(I, x, A, B)
      if (cs(A)) return W(I, x, A, B)
      Lu(I, A)
    }
    return (typeof A == 'string' && A !== '') || typeof A == 'number'
      ? ((A = '' + A),
        x !== null && x.tag === 6
          ? (n(I, x.sibling), (x = a(x, A)), (x.return = I), (I = x))
          : (n(I, x), (x = Ch(A, I.mode, B)), (x.return = I), (I = x)),
        c(I))
      : n(I, x)
  }
  return Q
}
var ua = My(!0),
  jy = My(!1),
  ol = {},
  or = _i(ol),
  qs = _i(ol),
  Ks = _i(ol)
function Ji(e) {
  if (e === ol) throw Error(J(174))
  return e
}
function fp(e, t) {
  switch ((Me(Ks, t), Me(qs, e), Me(or, ol), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qh(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qh(t, e))
  }
  Fe(or), Me(or, t)
}
function ca() {
  Fe(or), Fe(qs), Fe(Ks)
}
function Fy(e) {
  Ji(Ks.current)
  var t = Ji(or.current),
    n = qh(t, e.type)
  t !== n && (Me(qs, e), Me(or, n))
}
function hp(e) {
  qs.current === e && (Fe(or), Fe(qs))
}
var He = _i(0)
function hc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var kh = []
function dp() {
  for (var e = 0; e < kh.length; e++) kh[e]._workInProgressVersionPrimary = null
  kh.length = 0
}
var Vu = Lr.ReactCurrentDispatcher,
  _h = Lr.ReactCurrentBatchConfig,
  ro = 0,
  Ve = null,
  at = null,
  ft = null,
  dc = !1,
  Ps = !1,
  Ys = 0,
  bx = 0
function xt() {
  throw Error(J(321))
}
function pp(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wn(e[n], t[n])) return !1
  return !0
}
function gp(e, t, n, i, a, l) {
  if (
    ((ro = l),
    (Ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vu.current = e === null || e.memoizedState === null ? Sx : Ex),
    (e = n(i, a)),
    Ps)
  ) {
    l = 0
    do {
      if (((Ps = !1), (Ys = 0), 25 <= l)) throw Error(J(301))
      ;(l += 1),
        (ft = at = null),
        (t.updateQueue = null),
        (Vu.current = xx),
        (e = n(i, a))
    } while (Ps)
  }
  if (
    ((Vu.current = pc),
    (t = at !== null && at.next !== null),
    (ro = 0),
    (ft = at = Ve = null),
    (dc = !1),
    t)
  )
    throw Error(J(300))
  return e
}
function mp() {
  var e = Ys !== 0
  return (Ys = 0), e
}
function tr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ft === null ? (Ve.memoizedState = ft = e) : (ft = ft.next = e), ft
}
function Cn() {
  if (at === null) {
    var e = Ve.alternate
    e = e !== null ? e.memoizedState : null
  } else e = at.next
  var t = ft === null ? Ve.memoizedState : ft.next
  if (t !== null) (ft = t), (at = e)
  else {
    if (e === null) throw Error(J(310))
    ;(at = e),
      (e = {
        memoizedState: at.memoizedState,
        baseState: at.baseState,
        baseQueue: at.baseQueue,
        queue: at.queue,
        next: null,
      }),
      ft === null ? (Ve.memoizedState = ft = e) : (ft = ft.next = e)
  }
  return ft
}
function Gs(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Sh(e) {
  var t = Cn(),
    n = t.queue
  if (n === null) throw Error(J(311))
  n.lastRenderedReducer = e
  var i = at,
    a = i.baseQueue,
    l = n.pending
  if (l !== null) {
    if (a !== null) {
      var c = a.next
      ;(a.next = l.next), (l.next = c)
    }
    ;(i.baseQueue = a = l), (n.pending = null)
  }
  if (a !== null) {
    ;(l = a.next), (i = i.baseState)
    var d = (c = null),
      g = null,
      w = l
    do {
      var O = w.lane
      if ((ro & O) === O)
        g !== null &&
          (g = g.next =
            {
              lane: 0,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
          (i = w.hasEagerState ? w.eagerState : e(i, w.action))
      else {
        var R = {
          lane: O,
          action: w.action,
          hasEagerState: w.hasEagerState,
          eagerState: w.eagerState,
          next: null,
        }
        g === null ? ((d = g = R), (c = i)) : (g = g.next = R),
          (Ve.lanes |= O),
          (io |= O)
      }
      w = w.next
    } while (w !== null && w !== l)
    g === null ? (c = i) : (g.next = d),
      Wn(i, t.memoizedState) || (Xt = !0),
      (t.memoizedState = i),
      (t.baseState = c),
      (t.baseQueue = g),
      (n.lastRenderedState = i)
  }
  if (((e = n.interleaved), e !== null)) {
    a = e
    do (l = a.lane), (Ve.lanes |= l), (io |= l), (a = a.next)
    while (a !== e)
  } else a === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Eh(e) {
  var t = Cn(),
    n = t.queue
  if (n === null) throw Error(J(311))
  n.lastRenderedReducer = e
  var i = n.dispatch,
    a = n.pending,
    l = t.memoizedState
  if (a !== null) {
    n.pending = null
    var c = (a = a.next)
    do (l = e(l, c.action)), (c = c.next)
    while (c !== a)
    Wn(l, t.memoizedState) || (Xt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l)
  }
  return [l, i]
}
function Uy() {}
function $y(e, t) {
  var n = Ve,
    i = Cn(),
    a = t(),
    l = !Wn(i.memoizedState, a)
  if (
    (l && ((i.memoizedState = a), (Xt = !0)),
    (i = i.queue),
    vp(Vy.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || l || (ft !== null && ft.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qs(9, Hy.bind(null, n, i, a, t), void 0, null),
      ht === null)
    )
      throw Error(J(349))
    ro & 30 || By(n, t, a)
  }
  return a
}
function By(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Hy(e, t, n, i) {
  ;(t.value = n), (t.getSnapshot = i), Wy(t) && qy(e)
}
function Vy(e, t, n) {
  return n(function () {
    Wy(t) && qy(e)
  })
}
function Wy(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Wn(e, n)
  } catch {
    return !0
  }
}
function qy(e) {
  var t = Pr(e, 1)
  t !== null && Vn(t, e, 1, -1)
}
function mv(e) {
  var t = tr()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _x.bind(null, Ve, e)),
    [t.memoizedState, e]
  )
}
function Qs(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  )
}
function Ky() {
  return Cn().memoizedState
}
function Wu(e, t, n, i) {
  var a = tr()
  ;(Ve.flags |= e),
    (a.memoizedState = Qs(1 | t, n, void 0, i === void 0 ? null : i))
}
function jc(e, t, n, i) {
  var a = Cn()
  i = i === void 0 ? null : i
  var l = void 0
  if (at !== null) {
    var c = at.memoizedState
    if (((l = c.destroy), i !== null && pp(i, c.deps))) {
      a.memoizedState = Qs(t, n, l, i)
      return
    }
  }
  ;(Ve.flags |= e), (a.memoizedState = Qs(1 | t, n, l, i))
}
function vv(e, t) {
  return Wu(8390656, 8, e, t)
}
function vp(e, t) {
  return jc(2048, 8, e, t)
}
function Yy(e, t) {
  return jc(4, 2, e, t)
}
function Gy(e, t) {
  return jc(4, 4, e, t)
}
function Qy(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Jy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), jc(4, 4, Qy.bind(null, t, e), n)
  )
}
function yp() {}
function Xy(e, t) {
  var n = Cn()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && pp(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e)
}
function Zy(e, t) {
  var n = Cn()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && pp(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function e1(e, t, n) {
  return ro & 21
    ? (Wn(n, t) || ((n = ry()), (Ve.lanes |= n), (io |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xt = !0)), (e.memoizedState = n))
}
function wx(e, t) {
  var n = Ie
  ;(Ie = n !== 0 && 4 > n ? n : 4), e(!0)
  var i = _h.transition
  _h.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Ie = n), (_h.transition = i)
  }
}
function t1() {
  return Cn().memoizedState
}
function kx(e, t, n) {
  var i = gi(e)
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    n1(e))
  )
    r1(t, n)
  else if (((n = Ay(e, t, n, i)), n !== null)) {
    var a = jt()
    Vn(n, e, i, a), i1(n, t, i)
  }
}
function _x(e, t, n) {
  var i = gi(e),
    a = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (n1(e)) r1(t, a)
  else {
    var l = e.alternate
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var c = t.lastRenderedState,
          d = l(c, n)
        if (((a.hasEagerState = !0), (a.eagerState = d), Wn(d, c))) {
          var g = t.interleaved
          g === null
            ? ((a.next = a), up(t))
            : ((a.next = g.next), (g.next = a)),
            (t.interleaved = a)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Ay(e, t, a, i)),
      n !== null && ((a = jt()), Vn(n, e, i, a), i1(n, t, i))
  }
}
function n1(e) {
  var t = e.alternate
  return e === Ve || (t !== null && t === Ve)
}
function r1(e, t) {
  Ps = dc = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function i1(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Gd(e, n)
  }
}
var pc = {
    readContext: Tn,
    useCallback: xt,
    useContext: xt,
    useEffect: xt,
    useImperativeHandle: xt,
    useInsertionEffect: xt,
    useLayoutEffect: xt,
    useMemo: xt,
    useReducer: xt,
    useRef: xt,
    useState: xt,
    useDebugValue: xt,
    useDeferredValue: xt,
    useTransition: xt,
    useMutableSource: xt,
    useSyncExternalStore: xt,
    useId: xt,
    unstable_isNewReconciler: !1,
  },
  Sx = {
    readContext: Tn,
    useCallback: function (e, t) {
      return (tr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Tn,
    useEffect: vv,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wu(4194308, 4, Qy.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Wu(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Wu(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = tr()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var i = tr()
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = kx.bind(null, Ve, e)),
        [i.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = tr()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: mv,
    useDebugValue: yp,
    useDeferredValue: function (e) {
      return (tr().memoizedState = e)
    },
    useTransition: function () {
      var e = mv(!1),
        t = e[0]
      return (e = wx.bind(null, e[1])), (tr().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = Ve,
        a = tr()
      if (Ue) {
        if (n === void 0) throw Error(J(407))
        n = n()
      } else {
        if (((n = t()), ht === null)) throw Error(J(349))
        ro & 30 || By(i, t, n)
      }
      a.memoizedState = n
      var l = { value: n, getSnapshot: t }
      return (
        (a.queue = l),
        vv(Vy.bind(null, i, l, e), [e]),
        (i.flags |= 2048),
        Qs(9, Hy.bind(null, i, l, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = tr(),
        t = ht.identifierPrefix
      if (Ue) {
        var n = Er,
          i = Sr
        ;(n = (i & ~(1 << (32 - Hn(i) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ys++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = bx++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Ex = {
    readContext: Tn,
    useCallback: Xy,
    useContext: Tn,
    useEffect: vp,
    useImperativeHandle: Jy,
    useInsertionEffect: Yy,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Sh,
    useRef: Ky,
    useState: function () {
      return Sh(Gs)
    },
    useDebugValue: yp,
    useDeferredValue: function (e) {
      var t = Cn()
      return e1(t, at.memoizedState, e)
    },
    useTransition: function () {
      var e = Sh(Gs)[0],
        t = Cn().memoizedState
      return [e, t]
    },
    useMutableSource: Uy,
    useSyncExternalStore: $y,
    useId: t1,
    unstable_isNewReconciler: !1,
  },
  xx = {
    readContext: Tn,
    useCallback: Xy,
    useContext: Tn,
    useEffect: vp,
    useImperativeHandle: Jy,
    useInsertionEffect: Yy,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Eh,
    useRef: Ky,
    useState: function () {
      return Eh(Gs)
    },
    useDebugValue: yp,
    useDeferredValue: function (e) {
      var t = Cn()
      return at === null ? (t.memoizedState = e) : e1(t, at.memoizedState, e)
    },
    useTransition: function () {
      var e = Eh(Gs)[0],
        t = Cn().memoizedState
      return [e, t]
    },
    useMutableSource: Uy,
    useSyncExternalStore: $y,
    useId: t1,
    unstable_isNewReconciler: !1,
  }
function fa(e, t) {
  try {
    var n = '',
      i = t
    do (n += ZE(i)), (i = i.return)
    while (i)
    var a = n
  } catch (l) {
    a =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack
  }
  return { value: e, source: t, stack: a, digest: null }
}
function xh(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function gd(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Tx = typeof WeakMap == 'function' ? WeakMap : Map
function o1(e, t, n) {
  ;(n = xr(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var i = t.value
  return (
    (n.callback = function () {
      mc || ((mc = !0), (Ed = i)), gd(e, t)
    }),
    n
  )
}
function a1(e, t, n) {
  ;(n = xr(-1, n)), (n.tag = 3)
  var i = e.type.getDerivedStateFromError
  if (typeof i == 'function') {
    var a = t.value
    ;(n.payload = function () {
      return i(a)
    }),
      (n.callback = function () {
        gd(e, t)
      })
  }
  var l = e.stateNode
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        gd(e, t),
          typeof i != 'function' &&
            (pi === null ? (pi = new Set([this])) : pi.add(this))
        var c = t.stack
        this.componentDidCatch(t.value, { componentStack: c !== null ? c : '' })
      }),
    n
  )
}
function yv(e, t, n) {
  var i = e.pingCache
  if (i === null) {
    i = e.pingCache = new Tx()
    var a = new Set()
    i.set(t, a)
  } else (a = i.get(t)), a === void 0 && ((a = new Set()), i.set(t, a))
  a.has(n) || (a.add(n), (e = Ux.bind(null, e, t, n)), t.then(e, e))
}
function bv(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function wv(e, t, n, i, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xr(-1, 1)), (t.tag = 2), di(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Cx = Lr.ReactCurrentOwner,
  Xt = !1
function Nt(e, t, n, i) {
  t.child = e === null ? jy(t, null, n, i) : ua(t, e.child, n, i)
}
function kv(e, t, n, i, a) {
  n = n.render
  var l = t.ref
  return (
    ra(t, a),
    (i = gp(e, t, n, i, l, a)),
    (n = mp()),
    e !== null && !Xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Or(e, t, a))
      : (Ue && n && rp(t), (t.flags |= 1), Nt(e, t, i, a), t.child)
  )
}
function _v(e, t, n, i, a) {
  if (e === null) {
    var l = n.type
    return typeof l == 'function' &&
      !Tp(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), s1(e, t, l, i, a))
      : ((e = Gu(n.type, null, i, t, t.mode, a)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((l = e.child), !(e.lanes & a))) {
    var c = l.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Bs), n(c, i) && e.ref === t.ref)
    )
      return Or(e, t, a)
  }
  return (
    (t.flags |= 1),
    (e = mi(l, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function s1(e, t, n, i, a) {
  if (e !== null) {
    var l = e.memoizedProps
    if (Bs(l, i) && e.ref === t.ref)
      if (((Xt = !1), (t.pendingProps = i = l), (e.lanes & a) !== 0))
        e.flags & 131072 && (Xt = !0)
      else return (t.lanes = e.lanes), Or(e, t, a)
  }
  return md(e, t, n, i, a)
}
function l1(e, t, n) {
  var i = t.pendingProps,
    a = i.children,
    l = e !== null ? e.memoizedState : null
  if (i.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Me(Xo, ln),
        (ln |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Me(Xo, ln),
          (ln |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = l !== null ? l.baseLanes : n),
        Me(Xo, ln),
        (ln |= i)
    }
  else
    l !== null ? ((i = l.baseLanes | n), (t.memoizedState = null)) : (i = n),
      Me(Xo, ln),
      (ln |= i)
  return Nt(e, t, a, n), t.child
}
function u1(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function md(e, t, n, i, a) {
  var l = en(n) ? to : Ot.current
  return (
    (l = sa(t, l)),
    ra(t, a),
    (n = gp(e, t, n, i, l, a)),
    (i = mp()),
    e !== null && !Xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Or(e, t, a))
      : (Ue && i && rp(t), (t.flags |= 1), Nt(e, t, n, a), t.child)
  )
}
function Sv(e, t, n, i, a) {
  if (en(n)) {
    var l = !0
    ac(t)
  } else l = !1
  if ((ra(t, a), t.stateNode === null))
    qu(e, t), Ny(t, n, i), pd(t, n, i, a), (i = !0)
  else if (e === null) {
    var c = t.stateNode,
      d = t.memoizedProps
    c.props = d
    var g = c.context,
      w = n.contextType
    typeof w == 'object' && w !== null
      ? (w = Tn(w))
      : ((w = en(n) ? to : Ot.current), (w = sa(t, w)))
    var O = n.getDerivedStateFromProps,
      R =
        typeof O == 'function' || typeof c.getSnapshotBeforeUpdate == 'function'
    R ||
      (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof c.componentWillReceiveProps != 'function') ||
      ((d !== i || g !== w) && pv(t, c, i, w)),
      (ri = !1)
    var _ = t.memoizedState
    ;(c.state = _),
      fc(t, i, c, a),
      (g = t.memoizedState),
      d !== i || _ !== g || Zt.current || ri
        ? (typeof O == 'function' && (dd(t, n, O, i), (g = t.memoizedState)),
          (d = ri || dv(t, n, d, i, _, g, w))
            ? (R ||
                (typeof c.UNSAFE_componentWillMount != 'function' &&
                  typeof c.componentWillMount != 'function') ||
                (typeof c.componentWillMount == 'function' &&
                  c.componentWillMount(),
                typeof c.UNSAFE_componentWillMount == 'function' &&
                  c.UNSAFE_componentWillMount()),
              typeof c.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = g)),
          (c.props = i),
          (c.state = g),
          (c.context = w),
          (i = d))
        : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308),
          (i = !1))
  } else {
    ;(c = t.stateNode),
      Dy(e, t),
      (d = t.memoizedProps),
      (w = t.type === t.elementType ? d : Fn(t.type, d)),
      (c.props = w),
      (R = t.pendingProps),
      (_ = c.context),
      (g = n.contextType),
      typeof g == 'object' && g !== null
        ? (g = Tn(g))
        : ((g = en(n) ? to : Ot.current), (g = sa(t, g)))
    var H = n.getDerivedStateFromProps
    ;(O =
      typeof H == 'function' ||
      typeof c.getSnapshotBeforeUpdate == 'function') ||
      (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof c.componentWillReceiveProps != 'function') ||
      ((d !== R || _ !== g) && pv(t, c, i, g)),
      (ri = !1),
      (_ = t.memoizedState),
      (c.state = _),
      fc(t, i, c, a)
    var F = t.memoizedState
    d !== R || _ !== F || Zt.current || ri
      ? (typeof H == 'function' && (dd(t, n, H, i), (F = t.memoizedState)),
        (w = ri || dv(t, n, w, i, _, F, g) || !1)
          ? (O ||
              (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                typeof c.componentWillUpdate != 'function') ||
              (typeof c.componentWillUpdate == 'function' &&
                c.componentWillUpdate(i, F, g),
              typeof c.UNSAFE_componentWillUpdate == 'function' &&
                c.UNSAFE_componentWillUpdate(i, F, g)),
            typeof c.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof c.componentDidUpdate != 'function' ||
              (d === e.memoizedProps && _ === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != 'function' ||
              (d === e.memoizedProps && _ === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = F)),
        (c.props = i),
        (c.state = F),
        (c.context = g),
        (i = w))
      : (typeof c.componentDidUpdate != 'function' ||
          (d === e.memoizedProps && _ === e.memoizedState) ||
          (t.flags |= 4),
        typeof c.getSnapshotBeforeUpdate != 'function' ||
          (d === e.memoizedProps && _ === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1))
  }
  return vd(e, t, n, i, l, a)
}
function vd(e, t, n, i, a, l) {
  u1(e, t)
  var c = (t.flags & 128) !== 0
  if (!i && !c) return a && lv(t, n, !1), Or(e, t, l)
  ;(i = t.stateNode), (Cx.current = t)
  var d =
    c && typeof n.getDerivedStateFromError != 'function' ? null : i.render()
  return (
    (t.flags |= 1),
    e !== null && c
      ? ((t.child = ua(t, e.child, null, l)), (t.child = ua(t, null, d, l)))
      : Nt(e, t, d, l),
    (t.memoizedState = i.state),
    a && lv(t, n, !0),
    t.child
  )
}
function c1(e) {
  var t = e.stateNode
  t.pendingContext
    ? sv(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sv(e, t.context, !1),
    fp(e, t.containerInfo)
}
function Ev(e, t, n, i, a) {
  return la(), op(a), (t.flags |= 256), Nt(e, t, n, i), t.child
}
var yd = { dehydrated: null, treeContext: null, retryLane: 0 }
function bd(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function f1(e, t, n) {
  var i = t.pendingProps,
    a = He.current,
    l = !1,
    c = (t.flags & 128) !== 0,
    d
  if (
    ((d = c) ||
      (d = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    d
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    Me(He, a & 1),
    e === null)
  )
    return (
      fd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((c = i.children),
          (e = i.fallback),
          l
            ? ((i = t.mode),
              (l = t.child),
              (c = { mode: 'hidden', children: c }),
              !(i & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = c))
                : (l = $c(c, i, 0, null)),
              (e = eo(e, i, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = bd(n)),
              (t.memoizedState = yd),
              e)
            : bp(t, c))
    )
  if (((a = e.memoizedState), a !== null && ((d = a.dehydrated), d !== null)))
    return Px(e, t, c, i, d, a, n)
  if (l) {
    ;(l = i.fallback), (c = t.mode), (a = e.child), (d = a.sibling)
    var g = { mode: 'hidden', children: i.children }
    return (
      !(c & 1) && t.child !== a
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = g),
          (t.deletions = null))
        : ((i = mi(a, g)), (i.subtreeFlags = a.subtreeFlags & 14680064)),
      d !== null ? (l = mi(d, l)) : ((l = eo(l, c, n, null)), (l.flags |= 2)),
      (l.return = t),
      (i.return = t),
      (i.sibling = l),
      (t.child = i),
      (i = l),
      (l = t.child),
      (c = e.child.memoizedState),
      (c =
        c === null
          ? bd(n)
          : {
              baseLanes: c.baseLanes | n,
              cachePool: null,
              transitions: c.transitions,
            }),
      (l.memoizedState = c),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = yd),
      i
    )
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (i = mi(l, { mode: 'visible', children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  )
}
function bp(e, t) {
  return (
    (t = $c({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Iu(e, t, n, i) {
  return (
    i !== null && op(i),
    ua(t, e.child, null, n),
    (e = bp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Px(e, t, n, i, a, l, c) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = xh(Error(J(422)))), Iu(e, t, c, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = i.fallback),
        (a = t.mode),
        (i = $c({ mode: 'visible', children: i.children }, a, 0, null)),
        (l = eo(l, a, c, null)),
        (l.flags |= 2),
        (i.return = t),
        (l.return = t),
        (i.sibling = l),
        (t.child = i),
        t.mode & 1 && ua(t, e.child, null, c),
        (t.child.memoizedState = bd(c)),
        (t.memoizedState = yd),
        l)
  if (!(t.mode & 1)) return Iu(e, t, c, null)
  if (a.data === '$!') {
    if (((i = a.nextSibling && a.nextSibling.dataset), i)) var d = i.dgst
    return (i = d), (l = Error(J(419))), (i = xh(l, i, void 0)), Iu(e, t, c, i)
  }
  if (((d = (c & e.childLanes) !== 0), Xt || d)) {
    if (((i = ht), i !== null)) {
      switch (c & -c) {
        case 4:
          a = 2
          break
        case 16:
          a = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32
          break
        case 536870912:
          a = 268435456
          break
        default:
          a = 0
      }
      ;(a = a & (i.suspendedLanes | c) ? 0 : a),
        a !== 0 &&
          a !== l.retryLane &&
          ((l.retryLane = a), Pr(e, a), Vn(i, e, a, -1))
    }
    return xp(), (i = xh(Error(J(421)))), Iu(e, t, c, i)
  }
  return a.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $x.bind(null, e)),
      (a._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (un = hi(a.nextSibling)),
      (cn = t),
      (Ue = !0),
      ($n = null),
      e !== null &&
        ((_n[Sn++] = Sr),
        (_n[Sn++] = Er),
        (_n[Sn++] = no),
        (Sr = e.id),
        (Er = e.overflow),
        (no = t)),
      (t = bp(t, i.children)),
      (t.flags |= 4096),
      t)
}
function xv(e, t, n) {
  e.lanes |= t
  var i = e.alternate
  i !== null && (i.lanes |= t), hd(e.return, t, n)
}
function Th(e, t, n, i, a) {
  var l = e.memoizedState
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: a,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = i),
      (l.tail = n),
      (l.tailMode = a))
}
function h1(e, t, n) {
  var i = t.pendingProps,
    a = i.revealOrder,
    l = i.tail
  if ((Nt(e, t, i.children, n), (i = He.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xv(e, n, t)
        else if (e.tag === 19) xv(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    i &= 1
  }
  if ((Me(He, i), !(t.mode & 1))) t.memoizedState = null
  else
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; n !== null; )
          (e = n.alternate),
            e !== null && hc(e) === null && (a = n),
            (n = n.sibling)
        ;(n = a),
          n === null
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
          Th(t, !1, a, n, l)
        break
      case 'backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && hc(e) === null)) {
            t.child = a
            break
          }
          ;(e = a.sibling), (a.sibling = n), (n = a), (a = e)
        }
        Th(t, !0, n, null, l)
        break
      case 'together':
        Th(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function qu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Or(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (io |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(J(153))
  if (t.child !== null) {
    for (
      e = t.child, n = mi(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mi(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Ox(e, t, n) {
  switch (t.tag) {
    case 3:
      c1(t), la()
      break
    case 5:
      Fy(t)
      break
    case 1:
      en(t.type) && ac(t)
      break
    case 4:
      fp(t, t.stateNode.containerInfo)
      break
    case 10:
      var i = t.type._context,
        a = t.memoizedProps.value
      Me(uc, i._currentValue), (i._currentValue = a)
      break
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (Me(He, He.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? f1(e, t, n)
          : (Me(He, He.current & 1),
            (e = Or(e, t, n)),
            e !== null ? e.sibling : null)
      Me(He, He.current & 1)
      break
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return h1(e, t, n)
        t.flags |= 128
      }
      if (
        ((a = t.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        Me(He, He.current),
        i)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), l1(e, t, n)
  }
  return Or(e, t, n)
}
var d1, wd, p1, g1
d1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
wd = function () {}
p1 = function (e, t, n, i) {
  var a = e.memoizedProps
  if (a !== i) {
    ;(e = t.stateNode), Ji(or.current)
    var l = null
    switch (n) {
      case 'input':
        ;(a = Bh(e, a)), (i = Bh(e, i)), (l = [])
        break
      case 'select':
        ;(a = We({}, a, { value: void 0 })),
          (i = We({}, i, { value: void 0 })),
          (l = [])
        break
      case 'textarea':
        ;(a = Wh(e, a)), (i = Wh(e, i)), (l = [])
        break
      default:
        typeof a.onClick != 'function' &&
          typeof i.onClick == 'function' &&
          (e.onclick = ic)
    }
    Kh(n, i)
    var c
    n = null
    for (w in a)
      if (!i.hasOwnProperty(w) && a.hasOwnProperty(w) && a[w] != null)
        if (w === 'style') {
          var d = a[w]
          for (c in d) d.hasOwnProperty(c) && (n || (n = {}), (n[c] = ''))
        } else
          w !== 'dangerouslySetInnerHTML' &&
            w !== 'children' &&
            w !== 'suppressContentEditableWarning' &&
            w !== 'suppressHydrationWarning' &&
            w !== 'autoFocus' &&
            (zs.hasOwnProperty(w) ? l || (l = []) : (l = l || []).push(w, null))
    for (w in i) {
      var g = i[w]
      if (
        ((d = a?.[w]),
        i.hasOwnProperty(w) && g !== d && (g != null || d != null))
      )
        if (w === 'style')
          if (d) {
            for (c in d)
              !d.hasOwnProperty(c) ||
                (g && g.hasOwnProperty(c)) ||
                (n || (n = {}), (n[c] = ''))
            for (c in g)
              g.hasOwnProperty(c) &&
                d[c] !== g[c] &&
                (n || (n = {}), (n[c] = g[c]))
          } else n || (l || (l = []), l.push(w, n)), (n = g)
        else
          w === 'dangerouslySetInnerHTML'
            ? ((g = g ? g.__html : void 0),
              (d = d ? d.__html : void 0),
              g != null && d !== g && (l = l || []).push(w, g))
            : w === 'children'
            ? (typeof g != 'string' && typeof g != 'number') ||
              (l = l || []).push(w, '' + g)
            : w !== 'suppressContentEditableWarning' &&
              w !== 'suppressHydrationWarning' &&
              (zs.hasOwnProperty(w)
                ? (g != null && w === 'onScroll' && je('scroll', e),
                  l || d === g || (l = []))
                : (l = l || []).push(w, g))
    }
    n && (l = l || []).push('style', n)
    var w = l
    ;(t.updateQueue = w) && (t.flags |= 4)
  }
}
g1 = function (e, t, n, i) {
  n !== i && (t.flags |= 4)
}
function ms(e, t) {
  if (!Ue)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling)
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null)
    }
}
function Tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0
  if (t)
    for (var a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (i |= a.subtreeFlags & 14680064),
        (i |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling)
  else
    for (a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (i |= a.subtreeFlags),
        (i |= a.flags),
        (a.return = e),
        (a = a.sibling)
  return (e.subtreeFlags |= i), (e.childLanes = n), t
}
function Rx(e, t, n) {
  var i = t.pendingProps
  switch ((ip(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Tt(t), null
    case 1:
      return en(t.type) && oc(), Tt(t), null
    case 3:
      return (
        (i = t.stateNode),
        ca(),
        Fe(Zt),
        Fe(Ot),
        dp(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ru(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $n !== null && (Cd($n), ($n = null)))),
        wd(e, t),
        Tt(t),
        null
      )
    case 5:
      hp(t)
      var a = Ji(Ks.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        p1(e, t, n, i, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(J(166))
          return Tt(t), null
        }
        if (((e = Ji(or.current)), Ru(t))) {
          ;(i = t.stateNode), (n = t.type)
          var l = t.memoizedProps
          switch (((i[nr] = t), (i[Ws] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              je('cancel', i), je('close', i)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              je('load', i)
              break
            case 'video':
            case 'audio':
              for (a = 0; a < _s.length; a++) je(_s[a], i)
              break
            case 'source':
              je('error', i)
              break
            case 'img':
            case 'image':
            case 'link':
              je('error', i), je('load', i)
              break
            case 'details':
              je('toggle', i)
              break
            case 'input':
              Dm(i, l), je('invalid', i)
              break
            case 'select':
              ;(i._wrapperState = { wasMultiple: !!l.multiple }),
                je('invalid', i)
              break
            case 'textarea':
              Nm(i, l), je('invalid', i)
          }
          Kh(n, l), (a = null)
          for (var c in l)
            if (l.hasOwnProperty(c)) {
              var d = l[c]
              c === 'children'
                ? typeof d == 'string'
                  ? i.textContent !== d &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ou(i.textContent, d, e),
                    (a = ['children', d]))
                  : typeof d == 'number' &&
                    i.textContent !== '' + d &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ou(i.textContent, d, e),
                    (a = ['children', '' + d]))
                : zs.hasOwnProperty(c) &&
                  d != null &&
                  c === 'onScroll' &&
                  je('scroll', i)
            }
          switch (n) {
            case 'input':
              ku(i), zm(i, l, !0)
              break
            case 'textarea':
              ku(i), Mm(i)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof l.onClick == 'function' && (i.onclick = ic)
          }
          ;(i = a), (t.updateQueue = i), i !== null && (t.flags |= 4)
        } else {
          ;(c = a.nodeType === 9 ? a : a.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = B0(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = c.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == 'string'
                ? (e = c.createElement(n, { is: i.is }))
                : ((e = c.createElement(n)),
                  n === 'select' &&
                    ((c = e),
                    i.multiple
                      ? (c.multiple = !0)
                      : i.size && (c.size = i.size)))
              : (e = c.createElementNS(e, n)),
            (e[nr] = t),
            (e[Ws] = i),
            d1(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((c = Yh(n, i)), n)) {
              case 'dialog':
                je('cancel', e), je('close', e), (a = i)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                je('load', e), (a = i)
                break
              case 'video':
              case 'audio':
                for (a = 0; a < _s.length; a++) je(_s[a], e)
                a = i
                break
              case 'source':
                je('error', e), (a = i)
                break
              case 'img':
              case 'image':
              case 'link':
                je('error', e), je('load', e), (a = i)
                break
              case 'details':
                je('toggle', e), (a = i)
                break
              case 'input':
                Dm(e, i), (a = Bh(e, i)), je('invalid', e)
                break
              case 'option':
                a = i
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                  (a = We({}, i, { value: void 0 })),
                  je('invalid', e)
                break
              case 'textarea':
                Nm(e, i), (a = Wh(e, i)), je('invalid', e)
                break
              default:
                a = i
            }
            Kh(n, a), (d = a)
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var g = d[l]
                l === 'style'
                  ? W0(e, g)
                  : l === 'dangerouslySetInnerHTML'
                  ? ((g = g ? g.__html : void 0), g != null && H0(e, g))
                  : l === 'children'
                  ? typeof g == 'string'
                    ? (n !== 'textarea' || g !== '') && Ns(e, g)
                    : typeof g == 'number' && Ns(e, '' + g)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    l !== 'autoFocus' &&
                    (zs.hasOwnProperty(l)
                      ? g != null && l === 'onScroll' && je('scroll', e)
                      : g != null && Hd(e, l, g, c))
              }
            switch (n) {
              case 'input':
                ku(e), zm(e, i, !1)
                break
              case 'textarea':
                ku(e), Mm(e)
                break
              case 'option':
                i.value != null && e.setAttribute('value', '' + bi(i.value))
                break
              case 'select':
                ;(e.multiple = !!i.multiple),
                  (l = i.value),
                  l != null
                    ? Zo(e, !!i.multiple, l, !1)
                    : i.defaultValue != null &&
                      Zo(e, !!i.multiple, i.defaultValue, !0)
                break
              default:
                typeof a.onClick == 'function' && (e.onclick = ic)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                i = !!i.autoFocus
                break e
              case 'img':
                i = !0
                break e
              default:
                i = !1
            }
          }
          i && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Tt(t), null
    case 6:
      if (e && t.stateNode != null) g1(e, t, e.memoizedProps, i)
      else {
        if (typeof i != 'string' && t.stateNode === null) throw Error(J(166))
        if (((n = Ji(Ks.current)), Ji(or.current), Ru(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[nr] = t),
            (l = i.nodeValue !== n) && ((e = cn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ou(i.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ou(i.nodeValue, n, (e.mode & 1) !== 0)
            }
          l && (t.flags |= 4)
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[nr] = t),
            (t.stateNode = i)
      }
      return Tt(t), null
    case 13:
      if (
        (Fe(He),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ue && un !== null && t.mode & 1 && !(t.flags & 128))
          Iy(), la(), (t.flags |= 98560), (l = !1)
        else if (((l = Ru(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(J(318))
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(J(317))
            l[nr] = t
          } else
            la(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Tt(t), (l = !1)
        } else $n !== null && (Cd($n), ($n = null)), (l = !0)
        if (!l) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || He.current & 1 ? st === 0 && (st = 3) : xp())),
          t.updateQueue !== null && (t.flags |= 4),
          Tt(t),
          null)
    case 4:
      return (
        ca(), wd(e, t), e === null && Hs(t.stateNode.containerInfo), Tt(t), null
      )
    case 10:
      return lp(t.type._context), Tt(t), null
    case 17:
      return en(t.type) && oc(), Tt(t), null
    case 19:
      if ((Fe(He), (l = t.memoizedState), l === null)) return Tt(t), null
      if (((i = (t.flags & 128) !== 0), (c = l.rendering), c === null))
        if (i) ms(l, !1)
        else {
          if (st !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((c = hc(e)), c !== null)) {
                for (
                  t.flags |= 128,
                    ms(l, !1),
                    i = c.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = i),
                    (l.flags &= 14680066),
                    (c = l.alternate),
                    c === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = c.childLanes),
                        (l.lanes = c.lanes),
                        (l.child = c.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = c.memoizedProps),
                        (l.memoizedState = c.memoizedState),
                        (l.updateQueue = c.updateQueue),
                        (l.type = c.type),
                        (e = c.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return Me(He, (He.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          l.tail !== null &&
            Ze() > ha &&
            ((t.flags |= 128), (i = !0), ms(l, !1), (t.lanes = 4194304))
        }
      else {
        if (!i)
          if (((e = hc(c)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ms(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !c.alternate && !Ue)
            )
              return Tt(t), null
          } else
            2 * Ze() - l.renderingStartTime > ha &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), ms(l, !1), (t.lanes = 4194304))
        l.isBackwards
          ? ((c.sibling = t.child), (t.child = c))
          : ((n = l.last),
            n !== null ? (n.sibling = c) : (t.child = c),
            (l.last = c))
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ze()),
          (t.sibling = null),
          (n = He.current),
          Me(He, i ? (n & 1) | 2 : n & 1),
          t)
        : (Tt(t), null)
    case 22:
    case 23:
      return (
        Ep(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? ln & 1073741824 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Tt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(J(156, t.tag))
}
function Lx(e, t) {
  switch ((ip(t), t.tag)) {
    case 1:
      return (
        en(t.type) && oc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ca(),
        Fe(Zt),
        Fe(Ot),
        dp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return hp(t), null
    case 13:
      if (
        (Fe(He), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(J(340))
        la()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return Fe(He), null
    case 4:
      return ca(), null
    case 10:
      return lp(t.type._context), null
    case 22:
    case 23:
      return Ep(), null
    case 24:
      return null
    default:
      return null
  }
}
var Au = !1,
  Ct = !1,
  Ix = typeof WeakSet == 'function' ? WeakSet : Set,
  re = null
function Jo(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (i) {
        Ge(e, t, i)
      }
    else n.current = null
}
function m1(e, t, n) {
  try {
    n()
  } catch (i) {
    Ge(e, t, i)
  }
}
var Tv = !1
function Ax(e, t) {
  if (((id = tc), (e = by()), np(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var i = n.getSelection && n.getSelection()
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode
          var a = i.anchorOffset,
            l = i.focusNode
          i = i.focusOffset
          try {
            n.nodeType, l.nodeType
          } catch {
            n = null
            break e
          }
          var c = 0,
            d = -1,
            g = -1,
            w = 0,
            O = 0,
            R = e,
            _ = null
          t: for (;;) {
            for (
              var H;
              R !== n || (a !== 0 && R.nodeType !== 3) || (d = c + a),
                R !== l || (i !== 0 && R.nodeType !== 3) || (g = c + i),
                R.nodeType === 3 && (c += R.nodeValue.length),
                (H = R.firstChild) !== null;

            )
              (_ = R), (R = H)
            for (;;) {
              if (R === e) break t
              if (
                (_ === n && ++w === a && (d = c),
                _ === l && ++O === i && (g = c),
                (H = R.nextSibling) !== null)
              )
                break
              ;(R = _), (_ = R.parentNode)
            }
            R = H
          }
          n = d === -1 || g === -1 ? null : { start: d, end: g }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (
    od = { focusedElem: e, selectionRange: n }, tc = !1, re = t;
    re !== null;

  )
    if (((t = re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (re = e)
    else
      for (; re !== null; ) {
        t = re
        try {
          var F = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (F !== null) {
                  var W = F.memoizedProps,
                    Q = F.memoizedState,
                    I = t.stateNode,
                    x = I.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? W : Fn(t.type, W),
                      Q
                    )
                  I.__reactInternalSnapshotBeforeUpdate = x
                }
                break
              case 3:
                var A = t.stateNode.containerInfo
                A.nodeType === 1
                  ? (A.textContent = '')
                  : A.nodeType === 9 &&
                    A.documentElement &&
                    A.removeChild(A.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(J(163))
            }
        } catch (B) {
          Ge(t, t.return, B)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (re = e)
          break
        }
        re = t.return
      }
  return (F = Tv), (Tv = !1), F
}
function Os(e, t, n) {
  var i = t.updateQueue
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var a = (i = i.next)
    do {
      if ((a.tag & e) === e) {
        var l = a.destroy
        ;(a.destroy = void 0), l !== void 0 && m1(t, n, l)
      }
      a = a.next
    } while (a !== i)
  }
}
function Fc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var i = n.create
        n.destroy = i()
      }
      n = n.next
    } while (n !== t)
  }
}
function kd(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function v1(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), v1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nr], delete t[Ws], delete t[ld], delete t[gx], delete t[mx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function y1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Cv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || y1(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function _d(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ic))
  else if (i !== 4 && ((e = e.child), e !== null))
    for (_d(e, t, n), e = e.sibling; e !== null; ) _d(e, t, n), (e = e.sibling)
}
function Sd(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Sd(e, t, n), e = e.sibling; e !== null; ) Sd(e, t, n), (e = e.sibling)
}
var mt = null,
  Un = !1
function ti(e, t, n) {
  for (n = n.child; n !== null; ) b1(e, t, n), (n = n.sibling)
}
function b1(e, t, n) {
  if (ir && typeof ir.onCommitFiberUnmount == 'function')
    try {
      ir.onCommitFiberUnmount(Lc, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ct || Jo(n, t)
    case 6:
      var i = mt,
        a = Un
      ;(mt = null),
        ti(e, t, n),
        (mt = i),
        (Un = a),
        mt !== null &&
          (Un
            ? ((e = mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : mt.removeChild(n.stateNode))
      break
    case 18:
      mt !== null &&
        (Un
          ? ((e = mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? bh(e.parentNode, n)
              : e.nodeType === 1 && bh(e, n),
            Us(e))
          : bh(mt, n.stateNode))
      break
    case 4:
      ;(i = mt),
        (a = Un),
        (mt = n.stateNode.containerInfo),
        (Un = !0),
        ti(e, t, n),
        (mt = i),
        (Un = a)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ct &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        a = i = i.next
        do {
          var l = a,
            c = l.destroy
          ;(l = l.tag),
            c !== void 0 && (l & 2 || l & 4) && m1(n, t, c),
            (a = a.next)
        } while (a !== i)
      }
      ti(e, t, n)
      break
    case 1:
      if (
        !Ct &&
        (Jo(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == 'function')
      )
        try {
          ;(i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount()
        } catch (d) {
          Ge(n, t, d)
        }
      ti(e, t, n)
      break
    case 21:
      ti(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ct = (i = Ct) || n.memoizedState !== null), ti(e, t, n), (Ct = i))
        : ti(e, t, n)
      break
    default:
      ti(e, t, n)
  }
}
function Pv(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Ix()),
      t.forEach(function (i) {
        var a = Bx.bind(null, e, i)
        n.has(i) || (n.add(i), i.then(a, a))
      })
  }
}
function jn(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i]
      try {
        var l = e,
          c = t,
          d = c
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              ;(mt = d.stateNode), (Un = !1)
              break e
            case 3:
              ;(mt = d.stateNode.containerInfo), (Un = !0)
              break e
            case 4:
              ;(mt = d.stateNode.containerInfo), (Un = !0)
              break e
          }
          d = d.return
        }
        if (mt === null) throw Error(J(160))
        b1(l, c, a), (mt = null), (Un = !1)
        var g = a.alternate
        g !== null && (g.return = null), (a.return = null)
      } catch (w) {
        Ge(a, t, w)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) w1(t, e), (t = t.sibling)
}
function w1(e, t) {
  var n = e.alternate,
    i = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((jn(t, e), er(e), i & 4)) {
        try {
          Os(3, e, e.return), Fc(3, e)
        } catch (W) {
          Ge(e, e.return, W)
        }
        try {
          Os(5, e, e.return)
        } catch (W) {
          Ge(e, e.return, W)
        }
      }
      break
    case 1:
      jn(t, e), er(e), i & 512 && n !== null && Jo(n, n.return)
      break
    case 5:
      if (
        (jn(t, e),
        er(e),
        i & 512 && n !== null && Jo(n, n.return),
        e.flags & 32)
      ) {
        var a = e.stateNode
        try {
          Ns(a, '')
        } catch (W) {
          Ge(e, e.return, W)
        }
      }
      if (i & 4 && ((a = e.stateNode), a != null)) {
        var l = e.memoizedProps,
          c = n !== null ? n.memoizedProps : l,
          d = e.type,
          g = e.updateQueue
        if (((e.updateQueue = null), g !== null))
          try {
            d === 'input' && l.type === 'radio' && l.name != null && U0(a, l),
              Yh(d, c)
            var w = Yh(d, l)
            for (c = 0; c < g.length; c += 2) {
              var O = g[c],
                R = g[c + 1]
              O === 'style'
                ? W0(a, R)
                : O === 'dangerouslySetInnerHTML'
                ? H0(a, R)
                : O === 'children'
                ? Ns(a, R)
                : Hd(a, O, R, w)
            }
            switch (d) {
              case 'input':
                Hh(a, l)
                break
              case 'textarea':
                $0(a, l)
                break
              case 'select':
                var _ = a._wrapperState.wasMultiple
                a._wrapperState.wasMultiple = !!l.multiple
                var H = l.value
                H != null
                  ? Zo(a, !!l.multiple, H, !1)
                  : _ !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Zo(a, !!l.multiple, l.defaultValue, !0)
                      : Zo(a, !!l.multiple, l.multiple ? [] : '', !1))
            }
            a[Ws] = l
          } catch (W) {
            Ge(e, e.return, W)
          }
      }
      break
    case 6:
      if ((jn(t, e), er(e), i & 4)) {
        if (e.stateNode === null) throw Error(J(162))
        ;(a = e.stateNode), (l = e.memoizedProps)
        try {
          a.nodeValue = l
        } catch (W) {
          Ge(e, e.return, W)
        }
      }
      break
    case 3:
      if (
        (jn(t, e), er(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Us(t.containerInfo)
        } catch (W) {
          Ge(e, e.return, W)
        }
      break
    case 4:
      jn(t, e), er(e)
      break
    case 13:
      jn(t, e),
        er(e),
        (a = e.child),
        a.flags & 8192 &&
          ((l = a.memoizedState !== null),
          (a.stateNode.isHidden = l),
          !l ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (_p = Ze())),
        i & 4 && Pv(e)
      break
    case 22:
      if (
        ((O = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ct = (w = Ct) || O), jn(t, e), (Ct = w)) : jn(t, e),
        er(e),
        i & 8192)
      ) {
        if (
          ((w = e.memoizedState !== null),
          (e.stateNode.isHidden = w) && !O && e.mode & 1)
        )
          for (re = e, O = e.child; O !== null; ) {
            for (R = re = O; re !== null; ) {
              switch (((_ = re), (H = _.child), _.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, _, _.return)
                  break
                case 1:
                  Jo(_, _.return)
                  var F = _.stateNode
                  if (typeof F.componentWillUnmount == 'function') {
                    ;(i = _), (n = _.return)
                    try {
                      ;(t = i),
                        (F.props = t.memoizedProps),
                        (F.state = t.memoizedState),
                        F.componentWillUnmount()
                    } catch (W) {
                      Ge(i, n, W)
                    }
                  }
                  break
                case 5:
                  Jo(_, _.return)
                  break
                case 22:
                  if (_.memoizedState !== null) {
                    Rv(R)
                    continue
                  }
              }
              H !== null ? ((H.return = _), (re = H)) : Rv(R)
            }
            O = O.sibling
          }
        e: for (O = null, R = e; ; ) {
          if (R.tag === 5) {
            if (O === null) {
              O = R
              try {
                ;(a = R.stateNode),
                  w
                    ? ((l = a.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((d = R.stateNode),
                      (g = R.memoizedProps.style),
                      (c =
                        g != null && g.hasOwnProperty('display')
                          ? g.display
                          : null),
                      (d.style.display = V0('display', c)))
              } catch (W) {
                Ge(e, e.return, W)
              }
            }
          } else if (R.tag === 6) {
            if (O === null)
              try {
                R.stateNode.nodeValue = w ? '' : R.memoizedProps
              } catch (W) {
                Ge(e, e.return, W)
              }
          } else if (
            ((R.tag !== 22 && R.tag !== 23) ||
              R.memoizedState === null ||
              R === e) &&
            R.child !== null
          ) {
            ;(R.child.return = R), (R = R.child)
            continue
          }
          if (R === e) break e
          for (; R.sibling === null; ) {
            if (R.return === null || R.return === e) break e
            O === R && (O = null), (R = R.return)
          }
          O === R && (O = null), (R.sibling.return = R.return), (R = R.sibling)
        }
      }
      break
    case 19:
      jn(t, e), er(e), i & 4 && Pv(e)
      break
    case 21:
      break
    default:
      jn(t, e), er(e)
  }
}
function er(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (y1(n)) {
            var i = n
            break e
          }
          n = n.return
        }
        throw Error(J(160))
      }
      switch (i.tag) {
        case 5:
          var a = i.stateNode
          i.flags & 32 && (Ns(a, ''), (i.flags &= -33))
          var l = Cv(e)
          Sd(e, l, a)
          break
        case 3:
        case 4:
          var c = i.stateNode.containerInfo,
            d = Cv(e)
          _d(e, d, c)
          break
        default:
          throw Error(J(161))
      }
    } catch (g) {
      Ge(e, e.return, g)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Dx(e, t, n) {
  ;(re = e), k1(e)
}
function k1(e, t, n) {
  for (var i = (e.mode & 1) !== 0; re !== null; ) {
    var a = re,
      l = a.child
    if (a.tag === 22 && i) {
      var c = a.memoizedState !== null || Au
      if (!c) {
        var d = a.alternate,
          g = (d !== null && d.memoizedState !== null) || Ct
        d = Au
        var w = Ct
        if (((Au = c), (Ct = g) && !w))
          for (re = a; re !== null; )
            (c = re),
              (g = c.child),
              c.tag === 22 && c.memoizedState !== null
                ? Lv(a)
                : g !== null
                ? ((g.return = c), (re = g))
                : Lv(a)
        for (; l !== null; ) (re = l), k1(l), (l = l.sibling)
        ;(re = a), (Au = d), (Ct = w)
      }
      Ov(e)
    } else
      a.subtreeFlags & 8772 && l !== null ? ((l.return = a), (re = l)) : Ov(e)
  }
}
function Ov(e) {
  for (; re !== null; ) {
    var t = re
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ct || Fc(5, t)
              break
            case 1:
              var i = t.stateNode
              if (t.flags & 4 && !Ct)
                if (n === null) i.componentDidMount()
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fn(t.type, n.memoizedProps)
                  i.componentDidUpdate(
                    a,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var l = t.updateQueue
              l !== null && hv(t, l, i)
              break
            case 3:
              var c = t.updateQueue
              if (c !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                hv(t, c, n)
              }
              break
            case 5:
              var d = t.stateNode
              if (n === null && t.flags & 4) {
                n = d
                var g = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    g.autoFocus && n.focus()
                    break
                  case 'img':
                    g.src && (n.src = g.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var w = t.alternate
                if (w !== null) {
                  var O = w.memoizedState
                  if (O !== null) {
                    var R = O.dehydrated
                    R !== null && Us(R)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(J(163))
          }
        Ct || (t.flags & 512 && kd(t))
      } catch (_) {
        Ge(t, t.return, _)
      }
    }
    if (t === e) {
      re = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (re = n)
      break
    }
    re = t.return
  }
}
function Rv(e) {
  for (; re !== null; ) {
    var t = re
    if (t === e) {
      re = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (re = n)
      break
    }
    re = t.return
  }
}
function Lv(e) {
  for (; re !== null; ) {
    var t = re
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Fc(4, t)
          } catch (g) {
            Ge(t, n, g)
          }
          break
        case 1:
          var i = t.stateNode
          if (typeof i.componentDidMount == 'function') {
            var a = t.return
            try {
              i.componentDidMount()
            } catch (g) {
              Ge(t, a, g)
            }
          }
          var l = t.return
          try {
            kd(t)
          } catch (g) {
            Ge(t, l, g)
          }
          break
        case 5:
          var c = t.return
          try {
            kd(t)
          } catch (g) {
            Ge(t, c, g)
          }
      }
    } catch (g) {
      Ge(t, t.return, g)
    }
    if (t === e) {
      re = null
      break
    }
    var d = t.sibling
    if (d !== null) {
      ;(d.return = t.return), (re = d)
      break
    }
    re = t.return
  }
}
var zx = Math.ceil,
  gc = Lr.ReactCurrentDispatcher,
  wp = Lr.ReactCurrentOwner,
  xn = Lr.ReactCurrentBatchConfig,
  Se = 0,
  ht = null,
  rt = null,
  vt = 0,
  ln = 0,
  Xo = _i(0),
  st = 0,
  Js = null,
  io = 0,
  Uc = 0,
  kp = 0,
  Rs = null,
  Gt = null,
  _p = 0,
  ha = 1 / 0,
  kr = null,
  mc = !1,
  Ed = null,
  pi = null,
  Du = !1,
  li = null,
  vc = 0,
  Ls = 0,
  xd = null,
  Ku = -1,
  Yu = 0
function jt() {
  return Se & 6 ? Ze() : Ku !== -1 ? Ku : (Ku = Ze())
}
function gi(e) {
  return e.mode & 1
    ? Se & 2 && vt !== 0
      ? vt & -vt
      : yx.transition !== null
      ? (Yu === 0 && (Yu = ry()), Yu)
      : ((e = Ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cy(e.type))),
        e)
    : 1
}
function Vn(e, t, n, i) {
  if (50 < Ls) throw ((Ls = 0), (xd = null), Error(J(185)))
  nl(e, n, i),
    (!(Se & 2) || e !== ht) &&
      (e === ht && (!(Se & 2) && (Uc |= n), st === 4 && oi(e, vt)),
      tn(e, i),
      n === 1 && Se === 0 && !(t.mode & 1) && ((ha = Ze() + 500), Nc && Si()))
}
function tn(e, t) {
  var n = e.callbackNode
  y4(e, t)
  var i = ec(e, e === ht ? vt : 0)
  if (i === 0)
    n !== null && Um(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Um(n), t === 1))
      e.tag === 0 ? vx(Iv.bind(null, e)) : Oy(Iv.bind(null, e)),
        dx(function () {
          !(Se & 6) && Si()
        }),
        (n = null)
    else {
      switch (iy(i)) {
        case 1:
          n = Yd
          break
        case 4:
          n = ty
          break
        case 16:
          n = Zu
          break
        case 536870912:
          n = ny
          break
        default:
          n = Zu
      }
      n = O1(n, _1.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function _1(e, t) {
  if (((Ku = -1), (Yu = 0), Se & 6)) throw Error(J(327))
  var n = e.callbackNode
  if (ia() && e.callbackNode !== n) return null
  var i = ec(e, e === ht ? vt : 0)
  if (i === 0) return null
  if (i & 30 || i & e.expiredLanes || t) t = yc(e, i)
  else {
    t = i
    var a = Se
    Se |= 2
    var l = E1()
    ;(ht !== e || vt !== t) && ((kr = null), (ha = Ze() + 500), Zi(e, t))
    do
      try {
        jx()
        break
      } catch (d) {
        S1(e, d)
      }
    while (!0)
    sp(),
      (gc.current = l),
      (Se = a),
      rt !== null ? (t = 0) : ((ht = null), (vt = 0), (t = st))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((a = Zh(e)), a !== 0 && ((i = a), (t = Td(e, a)))), t === 1)
    )
      throw ((n = Js), Zi(e, 0), oi(e, i), tn(e, Ze()), n)
    if (t === 6) oi(e, i)
    else {
      if (
        ((a = e.current.alternate),
        !(i & 30) &&
          !Nx(a) &&
          ((t = yc(e, i)),
          t === 2 && ((l = Zh(e)), l !== 0 && ((i = l), (t = Td(e, l)))),
          t === 1))
      )
        throw ((n = Js), Zi(e, 0), oi(e, i), tn(e, Ze()), n)
      switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(J(345))
        case 2:
          Ki(e, Gt, kr)
          break
        case 3:
          if (
            (oi(e, i), (i & 130023424) === i && ((t = _p + 500 - Ze()), 10 < t))
          ) {
            if (ec(e, 0) !== 0) break
            if (((a = e.suspendedLanes), (a & i) !== i)) {
              jt(), (e.pingedLanes |= e.suspendedLanes & a)
              break
            }
            e.timeoutHandle = sd(Ki.bind(null, e, Gt, kr), t)
            break
          }
          Ki(e, Gt, kr)
          break
        case 4:
          if ((oi(e, i), (i & 4194240) === i)) break
          for (t = e.eventTimes, a = -1; 0 < i; ) {
            var c = 31 - Hn(i)
            ;(l = 1 << c), (c = t[c]), c > a && (a = c), (i &= ~l)
          }
          if (
            ((i = a),
            (i = Ze() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * zx(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = sd(Ki.bind(null, e, Gt, kr), i)
            break
          }
          Ki(e, Gt, kr)
          break
        case 5:
          Ki(e, Gt, kr)
          break
        default:
          throw Error(J(329))
      }
    }
  }
  return tn(e, Ze()), e.callbackNode === n ? _1.bind(null, e) : null
}
function Td(e, t) {
  var n = Rs
  return (
    e.current.memoizedState.isDehydrated && (Zi(e, t).flags |= 256),
    (e = yc(e, t)),
    e !== 2 && ((t = Gt), (Gt = n), t !== null && Cd(t)),
    e
  )
}
function Cd(e) {
  Gt === null ? (Gt = e) : Gt.push.apply(Gt, e)
}
function Nx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var a = n[i],
            l = a.getSnapshot
          a = a.value
          try {
            if (!Wn(l(), a)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function oi(e, t) {
  for (
    t &= ~kp,
      t &= ~Uc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Hn(t),
      i = 1 << n
    ;(e[n] = -1), (t &= ~i)
  }
}
function Iv(e) {
  if (Se & 6) throw Error(J(327))
  ia()
  var t = ec(e, 0)
  if (!(t & 1)) return tn(e, Ze()), null
  var n = yc(e, t)
  if (e.tag !== 0 && n === 2) {
    var i = Zh(e)
    i !== 0 && ((t = i), (n = Td(e, i)))
  }
  if (n === 1) throw ((n = Js), Zi(e, 0), oi(e, t), tn(e, Ze()), n)
  if (n === 6) throw Error(J(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ki(e, Gt, kr),
    tn(e, Ze()),
    null
  )
}
function Sp(e, t) {
  var n = Se
  Se |= 1
  try {
    return e(t)
  } finally {
    ;(Se = n), Se === 0 && ((ha = Ze() + 500), Nc && Si())
  }
}
function oo(e) {
  li !== null && li.tag === 0 && !(Se & 6) && ia()
  var t = Se
  Se |= 1
  var n = xn.transition,
    i = Ie
  try {
    if (((xn.transition = null), (Ie = 1), e)) return e()
  } finally {
    ;(Ie = i), (xn.transition = n), (Se = t), !(Se & 6) && Si()
  }
}
function Ep() {
  ;(ln = Xo.current), Fe(Xo)
}
function Zi(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), hx(n)), rt !== null))
    for (n = rt.return; n !== null; ) {
      var i = n
      switch ((ip(i), i.tag)) {
        case 1:
          ;(i = i.type.childContextTypes), i != null && oc()
          break
        case 3:
          ca(), Fe(Zt), Fe(Ot), dp()
          break
        case 5:
          hp(i)
          break
        case 4:
          ca()
          break
        case 13:
          Fe(He)
          break
        case 19:
          Fe(He)
          break
        case 10:
          lp(i.type._context)
          break
        case 22:
        case 23:
          Ep()
      }
      n = n.return
    }
  if (
    ((ht = e),
    (rt = e = mi(e.current, null)),
    (vt = ln = t),
    (st = 0),
    (Js = null),
    (kp = Uc = io = 0),
    (Gt = Rs = null),
    Qi !== null)
  ) {
    for (t = 0; t < Qi.length; t++)
      if (((n = Qi[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null
        var a = i.next,
          l = n.pending
        if (l !== null) {
          var c = l.next
          ;(l.next = a), (i.next = c)
        }
        n.pending = i
      }
    Qi = null
  }
  return e
}
function S1(e, t) {
  do {
    var n = rt
    try {
      if ((sp(), (Vu.current = pc), dc)) {
        for (var i = Ve.memoizedState; i !== null; ) {
          var a = i.queue
          a !== null && (a.pending = null), (i = i.next)
        }
        dc = !1
      }
      if (
        ((ro = 0),
        (ft = at = Ve = null),
        (Ps = !1),
        (Ys = 0),
        (wp.current = null),
        n === null || n.return === null)
      ) {
        ;(st = 1), (Js = t), (rt = null)
        break
      }
      e: {
        var l = e,
          c = n.return,
          d = n,
          g = t
        if (
          ((t = vt),
          (d.flags |= 32768),
          g !== null && typeof g == 'object' && typeof g.then == 'function')
        ) {
          var w = g,
            O = d,
            R = O.tag
          if (!(O.mode & 1) && (R === 0 || R === 11 || R === 15)) {
            var _ = O.alternate
            _
              ? ((O.updateQueue = _.updateQueue),
                (O.memoizedState = _.memoizedState),
                (O.lanes = _.lanes))
              : ((O.updateQueue = null), (O.memoizedState = null))
          }
          var H = bv(c)
          if (H !== null) {
            ;(H.flags &= -257),
              wv(H, c, d, l, t),
              H.mode & 1 && yv(l, w, t),
              (t = H),
              (g = w)
            var F = t.updateQueue
            if (F === null) {
              var W = new Set()
              W.add(g), (t.updateQueue = W)
            } else F.add(g)
            break e
          } else {
            if (!(t & 1)) {
              yv(l, w, t), xp()
              break e
            }
            g = Error(J(426))
          }
        } else if (Ue && d.mode & 1) {
          var Q = bv(c)
          if (Q !== null) {
            !(Q.flags & 65536) && (Q.flags |= 256),
              wv(Q, c, d, l, t),
              op(fa(g, d))
            break e
          }
        }
        ;(l = g = fa(g, d)),
          st !== 4 && (st = 2),
          Rs === null ? (Rs = [l]) : Rs.push(l),
          (l = c)
        do {
          switch (l.tag) {
            case 3:
              ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
              var I = o1(l, g, t)
              fv(l, I)
              break e
            case 1:
              d = g
              var x = l.type,
                A = l.stateNode
              if (
                !(l.flags & 128) &&
                (typeof x.getDerivedStateFromError == 'function' ||
                  (A !== null &&
                    typeof A.componentDidCatch == 'function' &&
                    (pi === null || !pi.has(A))))
              ) {
                ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                var B = a1(l, d, t)
                fv(l, B)
                break e
              }
          }
          l = l.return
        } while (l !== null)
      }
      T1(n)
    } catch (G) {
      ;(t = G), rt === n && n !== null && (rt = n = n.return)
      continue
    }
    break
  } while (!0)
}
function E1() {
  var e = gc.current
  return (gc.current = pc), e === null ? pc : e
}
function xp() {
  ;(st === 0 || st === 3 || st === 2) && (st = 4),
    ht === null || (!(io & 268435455) && !(Uc & 268435455)) || oi(ht, vt)
}
function yc(e, t) {
  var n = Se
  Se |= 2
  var i = E1()
  ;(ht !== e || vt !== t) && ((kr = null), Zi(e, t))
  do
    try {
      Mx()
      break
    } catch (a) {
      S1(e, a)
    }
  while (!0)
  if ((sp(), (Se = n), (gc.current = i), rt !== null)) throw Error(J(261))
  return (ht = null), (vt = 0), st
}
function Mx() {
  for (; rt !== null; ) x1(rt)
}
function jx() {
  for (; rt !== null && !u4(); ) x1(rt)
}
function x1(e) {
  var t = P1(e.alternate, e, ln)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? T1(e) : (rt = t),
    (wp.current = null)
}
function T1(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lx(n, t)), n !== null)) {
        ;(n.flags &= 32767), (rt = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(st = 6), (rt = null)
        return
      }
    } else if (((n = Rx(n, t, ln)), n !== null)) {
      rt = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      rt = t
      return
    }
    rt = t = e
  } while (t !== null)
  st === 0 && (st = 5)
}
function Ki(e, t, n) {
  var i = Ie,
    a = xn.transition
  try {
    ;(xn.transition = null), (Ie = 1), Fx(e, t, n, i)
  } finally {
    ;(xn.transition = a), (Ie = i)
  }
  return null
}
function Fx(e, t, n, i) {
  do ia()
  while (li !== null)
  if (Se & 6) throw Error(J(327))
  n = e.finishedWork
  var a = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(J(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var l = n.lanes | n.childLanes
  if (
    (b4(e, l),
    e === ht && ((rt = ht = null), (vt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Du ||
      ((Du = !0),
      O1(Zu, function () {
        return ia(), null
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ;(l = xn.transition), (xn.transition = null)
    var c = Ie
    Ie = 1
    var d = Se
    ;(Se |= 4),
      (wp.current = null),
      Ax(e, n),
      w1(n, e),
      ox(od),
      (tc = !!id),
      (od = id = null),
      (e.current = n),
      Dx(n),
      c4(),
      (Se = d),
      (Ie = c),
      (xn.transition = l)
  } else e.current = n
  if (
    (Du && ((Du = !1), (li = e), (vc = a)),
    (l = e.pendingLanes),
    l === 0 && (pi = null),
    d4(n.stateNode),
    tn(e, Ze()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (a = t[n]), i(a.value, { componentStack: a.stack, digest: a.digest })
  if (mc) throw ((mc = !1), (e = Ed), (Ed = null), e)
  return (
    vc & 1 && e.tag !== 0 && ia(),
    (l = e.pendingLanes),
    l & 1 ? (e === xd ? Ls++ : ((Ls = 0), (xd = e))) : (Ls = 0),
    Si(),
    null
  )
}
function ia() {
  if (li !== null) {
    var e = iy(vc),
      t = xn.transition,
      n = Ie
    try {
      if (((xn.transition = null), (Ie = 16 > e ? 16 : e), li === null))
        var i = !1
      else {
        if (((e = li), (li = null), (vc = 0), Se & 6)) throw Error(J(331))
        var a = Se
        for (Se |= 4, re = e.current; re !== null; ) {
          var l = re,
            c = l.child
          if (re.flags & 16) {
            var d = l.deletions
            if (d !== null) {
              for (var g = 0; g < d.length; g++) {
                var w = d[g]
                for (re = w; re !== null; ) {
                  var O = re
                  switch (O.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Os(8, O, l)
                  }
                  var R = O.child
                  if (R !== null) (R.return = O), (re = R)
                  else
                    for (; re !== null; ) {
                      O = re
                      var _ = O.sibling,
                        H = O.return
                      if ((v1(O), O === w)) {
                        re = null
                        break
                      }
                      if (_ !== null) {
                        ;(_.return = H), (re = _)
                        break
                      }
                      re = H
                    }
                }
              }
              var F = l.alternate
              if (F !== null) {
                var W = F.child
                if (W !== null) {
                  F.child = null
                  do {
                    var Q = W.sibling
                    ;(W.sibling = null), (W = Q)
                  } while (W !== null)
                }
              }
              re = l
            }
          }
          if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (re = c)
          else
            e: for (; re !== null; ) {
              if (((l = re), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Os(9, l, l.return)
                }
              var I = l.sibling
              if (I !== null) {
                ;(I.return = l.return), (re = I)
                break e
              }
              re = l.return
            }
        }
        var x = e.current
        for (re = x; re !== null; ) {
          c = re
          var A = c.child
          if (c.subtreeFlags & 2064 && A !== null) (A.return = c), (re = A)
          else
            e: for (c = x; re !== null; ) {
              if (((d = re), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fc(9, d)
                  }
                } catch (G) {
                  Ge(d, d.return, G)
                }
              if (d === c) {
                re = null
                break e
              }
              var B = d.sibling
              if (B !== null) {
                ;(B.return = d.return), (re = B)
                break e
              }
              re = d.return
            }
        }
        if (
          ((Se = a), Si(), ir && typeof ir.onPostCommitFiberRoot == 'function')
        )
          try {
            ir.onPostCommitFiberRoot(Lc, e)
          } catch {}
        i = !0
      }
      return i
    } finally {
      ;(Ie = n), (xn.transition = t)
    }
  }
  return !1
}
function Av(e, t, n) {
  ;(t = fa(n, t)),
    (t = o1(e, t, 1)),
    (e = di(e, t, 1)),
    (t = jt()),
    e !== null && (nl(e, 1, t), tn(e, t))
}
function Ge(e, t, n) {
  if (e.tag === 3) Av(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Av(t, e, n)
        break
      } else if (t.tag === 1) {
        var i = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof i.componentDidCatch == 'function' &&
            (pi === null || !pi.has(i)))
        ) {
          ;(e = fa(n, e)),
            (e = a1(t, e, 1)),
            (t = di(t, e, 1)),
            (e = jt()),
            t !== null && (nl(t, 1, e), tn(t, e))
          break
        }
      }
      t = t.return
    }
}
function Ux(e, t, n) {
  var i = e.pingCache
  i !== null && i.delete(t),
    (t = jt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ht === e &&
      (vt & n) === n &&
      (st === 4 || (st === 3 && (vt & 130023424) === vt && 500 > Ze() - _p)
        ? Zi(e, 0)
        : (kp |= n)),
    tn(e, t)
}
function C1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Eu), (Eu <<= 1), !(Eu & 130023424) && (Eu = 4194304))
      : (t = 1))
  var n = jt()
  ;(e = Pr(e, t)), e !== null && (nl(e, t, n), tn(e, n))
}
function $x(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), C1(e, n)
}
function Bx(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        a = e.memoizedState
      a !== null && (n = a.retryLane)
      break
    case 19:
      i = e.stateNode
      break
    default:
      throw Error(J(314))
  }
  i !== null && i.delete(t), C1(e, n)
}
var P1
P1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Zt.current) Xt = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xt = !1), Ox(e, t, n)
      Xt = !!(e.flags & 131072)
    }
  else (Xt = !1), Ue && t.flags & 1048576 && Ry(t, lc, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type
      qu(e, t), (e = t.pendingProps)
      var a = sa(t, Ot.current)
      ra(t, n), (a = gp(null, t, i, e, a, n))
      var l = mp()
      return (
        (t.flags |= 1),
        typeof a == 'object' &&
        a !== null &&
        typeof a.render == 'function' &&
        a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            en(i) ? ((l = !0), ac(t)) : (l = !1),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            cp(t),
            (a.updater = Mc),
            (t.stateNode = a),
            (a._reactInternals = t),
            pd(t, i, e, n),
            (t = vd(null, t, i, !0, l, n)))
          : ((t.tag = 0), Ue && l && rp(t), Nt(null, t, a, n), (t = t.child)),
        t
      )
    case 16:
      i = t.elementType
      e: {
        switch (
          (qu(e, t),
          (e = t.pendingProps),
          (a = i._init),
          (i = a(i._payload)),
          (t.type = i),
          (a = t.tag = Vx(i)),
          (e = Fn(i, e)),
          a)
        ) {
          case 0:
            t = md(null, t, i, e, n)
            break e
          case 1:
            t = Sv(null, t, i, e, n)
            break e
          case 11:
            t = kv(null, t, i, e, n)
            break e
          case 14:
            t = _v(null, t, i, Fn(i.type, e), n)
            break e
        }
        throw Error(J(306, i, ''))
      }
      return t
    case 0:
      return (
        (i = t.type),
        (a = t.pendingProps),
        (a = t.elementType === i ? a : Fn(i, a)),
        md(e, t, i, a, n)
      )
    case 1:
      return (
        (i = t.type),
        (a = t.pendingProps),
        (a = t.elementType === i ? a : Fn(i, a)),
        Sv(e, t, i, a, n)
      )
    case 3:
      e: {
        if ((c1(t), e === null)) throw Error(J(387))
        ;(i = t.pendingProps),
          (l = t.memoizedState),
          (a = l.element),
          Dy(e, t),
          fc(t, i, null, n)
        var c = t.memoizedState
        if (((i = c.element), l.isDehydrated))
          if (
            ((l = {
              element: i,
              isDehydrated: !1,
              cache: c.cache,
              pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
              transitions: c.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ;(a = fa(Error(J(423)), t)), (t = Ev(e, t, i, n, a))
            break e
          } else if (i !== a) {
            ;(a = fa(Error(J(424)), t)), (t = Ev(e, t, i, n, a))
            break e
          } else
            for (
              un = hi(t.stateNode.containerInfo.firstChild),
                cn = t,
                Ue = !0,
                $n = null,
                n = jy(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((la(), i === a)) {
            t = Or(e, t, n)
            break e
          }
          Nt(e, t, i, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Fy(t),
        e === null && fd(t),
        (i = t.type),
        (a = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (c = a.children),
        ad(i, a) ? (c = null) : l !== null && ad(i, l) && (t.flags |= 32),
        u1(e, t),
        Nt(e, t, c, n),
        t.child
      )
    case 6:
      return e === null && fd(t), null
    case 13:
      return f1(e, t, n)
    case 4:
      return (
        fp(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = ua(t, null, i, n)) : Nt(e, t, i, n),
        t.child
      )
    case 11:
      return (
        (i = t.type),
        (a = t.pendingProps),
        (a = t.elementType === i ? a : Fn(i, a)),
        kv(e, t, i, a, n)
      )
    case 7:
      return Nt(e, t, t.pendingProps, n), t.child
    case 8:
      return Nt(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Nt(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (a = t.pendingProps),
          (l = t.memoizedProps),
          (c = a.value),
          Me(uc, i._currentValue),
          (i._currentValue = c),
          l !== null)
        )
          if (Wn(l.value, c)) {
            if (l.children === a.children && !Zt.current) {
              t = Or(e, t, n)
              break e
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var d = l.dependencies
              if (d !== null) {
                c = l.child
                for (var g = d.firstContext; g !== null; ) {
                  if (g.context === i) {
                    if (l.tag === 1) {
                      ;(g = xr(-1, n & -n)), (g.tag = 2)
                      var w = l.updateQueue
                      if (w !== null) {
                        w = w.shared
                        var O = w.pending
                        O === null
                          ? (g.next = g)
                          : ((g.next = O.next), (O.next = g)),
                          (w.pending = g)
                      }
                    }
                    ;(l.lanes |= n),
                      (g = l.alternate),
                      g !== null && (g.lanes |= n),
                      hd(l.return, n, t),
                      (d.lanes |= n)
                    break
                  }
                  g = g.next
                }
              } else if (l.tag === 10) c = l.type === t.type ? null : l.child
              else if (l.tag === 18) {
                if (((c = l.return), c === null)) throw Error(J(341))
                ;(c.lanes |= n),
                  (d = c.alternate),
                  d !== null && (d.lanes |= n),
                  hd(c, n, t),
                  (c = l.sibling)
              } else c = l.child
              if (c !== null) c.return = l
              else
                for (c = l; c !== null; ) {
                  if (c === t) {
                    c = null
                    break
                  }
                  if (((l = c.sibling), l !== null)) {
                    ;(l.return = c.return), (c = l)
                    break
                  }
                  c = c.return
                }
              l = c
            }
        Nt(e, t, a.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (a = t.type),
        (i = t.pendingProps.children),
        ra(t, n),
        (a = Tn(a)),
        (i = i(a)),
        (t.flags |= 1),
        Nt(e, t, i, n),
        t.child
      )
    case 14:
      return (
        (i = t.type),
        (a = Fn(i, t.pendingProps)),
        (a = Fn(i.type, a)),
        _v(e, t, i, a, n)
      )
    case 15:
      return s1(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (i = t.type),
        (a = t.pendingProps),
        (a = t.elementType === i ? a : Fn(i, a)),
        qu(e, t),
        (t.tag = 1),
        en(i) ? ((e = !0), ac(t)) : (e = !1),
        ra(t, n),
        Ny(t, i, a),
        pd(t, i, a, n),
        vd(null, t, i, !0, e, n)
      )
    case 19:
      return h1(e, t, n)
    case 22:
      return l1(e, t, n)
  }
  throw Error(J(156, t.tag))
}
function O1(e, t) {
  return ey(e, t)
}
function Hx(e, t, n, i) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function En(e, t, n, i) {
  return new Hx(e, t, n, i)
}
function Tp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Vx(e) {
  if (typeof e == 'function') return Tp(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Wd)) return 11
    if (e === qd) return 14
  }
  return 2
}
function mi(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = En(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Gu(e, t, n, i, a, l) {
  var c = 2
  if (((i = e), typeof e == 'function')) Tp(e) && (c = 1)
  else if (typeof e == 'string') c = 5
  else
    e: switch (e) {
      case Bo:
        return eo(n.children, a, l, t)
      case Vd:
        ;(c = 8), (a |= 8)
        break
      case jh:
        return (e = En(12, n, t, a | 2)), (e.elementType = jh), (e.lanes = l), e
      case Fh:
        return (e = En(13, n, t, a)), (e.elementType = Fh), (e.lanes = l), e
      case Uh:
        return (e = En(19, n, t, a)), (e.elementType = Uh), (e.lanes = l), e
      case M0:
        return $c(n, a, l, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case z0:
              c = 10
              break e
            case N0:
              c = 9
              break e
            case Wd:
              c = 11
              break e
            case qd:
              c = 14
              break e
            case ni:
              ;(c = 16), (i = null)
              break e
          }
        throw Error(J(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = En(c, n, t, a)), (t.elementType = e), (t.type = i), (t.lanes = l), t
  )
}
function eo(e, t, n, i) {
  return (e = En(7, e, i, t)), (e.lanes = n), e
}
function $c(e, t, n, i) {
  return (
    (e = En(22, e, i, t)),
    (e.elementType = M0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ch(e, t, n) {
  return (e = En(6, e, null, t)), (e.lanes = n), e
}
function Ph(e, t, n) {
  return (
    (t = En(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Wx(e, t, n, i, a) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = lh(0)),
    (this.expirationTimes = lh(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lh(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null)
}
function Cp(e, t, n, i, a, l, c, d, g) {
  return (
    (e = new Wx(e, t, n, d, g)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = En(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cp(l),
    e
  )
}
function qx(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: $o,
    key: i == null ? null : '' + i,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function R1(e) {
  if (!e) return wi
  e = e._reactInternals
  e: {
    if (so(e) !== e || e.tag !== 1) throw Error(J(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (en(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(J(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (en(n)) return Py(e, n, t)
  }
  return t
}
function L1(e, t, n, i, a, l, c, d, g) {
  return (
    (e = Cp(n, i, !0, e, a, l, c, d, g)),
    (e.context = R1(null)),
    (n = e.current),
    (i = jt()),
    (a = gi(n)),
    (l = xr(i, a)),
    (l.callback = t ?? null),
    di(n, l, a),
    (e.current.lanes = a),
    nl(e, a, i),
    tn(e, i),
    e
  )
}
function Bc(e, t, n, i) {
  var a = t.current,
    l = jt(),
    c = gi(a)
  return (
    (n = R1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xr(l, c)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = di(a, t, c)),
    e !== null && (Vn(e, a, c, l), Hu(e, a, c)),
    c
  )
}
function bc(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Dv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Pp(e, t) {
  Dv(e, t), (e = e.alternate) && Dv(e, t)
}
function Kx() {
  return null
}
var I1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Op(e) {
  this._internalRoot = e
}
Hc.prototype.render = Op.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(J(409))
  Bc(e, t, null, null)
}
Hc.prototype.unmount = Op.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    oo(function () {
      Bc(null, e, null, null)
    }),
      (t[Cr] = null)
  }
}
function Hc(e) {
  this._internalRoot = e
}
Hc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sy()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < ii.length && t !== 0 && t < ii[n].priority; n++);
    ii.splice(n, 0, e), n === 0 && uy(e)
  }
}
function Rp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Vc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function zv() {}
function Yx(e, t, n, i, a) {
  if (a) {
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var w = bc(c)
        l.call(w)
      }
    }
    var c = L1(t, i, e, 0, null, !1, !1, '', zv)
    return (
      (e._reactRootContainer = c),
      (e[Cr] = c.current),
      Hs(e.nodeType === 8 ? e.parentNode : e),
      oo(),
      c
    )
  }
  for (; (a = e.lastChild); ) e.removeChild(a)
  if (typeof i == 'function') {
    var d = i
    i = function () {
      var w = bc(g)
      d.call(w)
    }
  }
  var g = Cp(e, 0, !1, null, null, !1, !1, '', zv)
  return (
    (e._reactRootContainer = g),
    (e[Cr] = g.current),
    Hs(e.nodeType === 8 ? e.parentNode : e),
    oo(function () {
      Bc(t, g, n, i)
    }),
    g
  )
}
function Wc(e, t, n, i, a) {
  var l = n._reactRootContainer
  if (l) {
    var c = l
    if (typeof a == 'function') {
      var d = a
      a = function () {
        var g = bc(c)
        d.call(g)
      }
    }
    Bc(t, c, e, a)
  } else c = Yx(n, t, e, a, i)
  return bc(c)
}
oy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = ks(t.pendingLanes)
        n !== 0 &&
          (Gd(t, n | 1), tn(t, Ze()), !(Se & 6) && ((ha = Ze() + 500), Si()))
      }
      break
    case 13:
      oo(function () {
        var i = Pr(e, 1)
        if (i !== null) {
          var a = jt()
          Vn(i, e, 1, a)
        }
      }),
        Pp(e, 1)
  }
}
Qd = function (e) {
  if (e.tag === 13) {
    var t = Pr(e, 134217728)
    if (t !== null) {
      var n = jt()
      Vn(t, e, 134217728, n)
    }
    Pp(e, 134217728)
  }
}
ay = function (e) {
  if (e.tag === 13) {
    var t = gi(e),
      n = Pr(e, t)
    if (n !== null) {
      var i = jt()
      Vn(n, e, t, i)
    }
    Pp(e, t)
  }
}
sy = function () {
  return Ie
}
ly = function (e, t) {
  var n = Ie
  try {
    return (Ie = e), t()
  } finally {
    Ie = n
  }
}
Qh = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Hh(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t]
          if (i !== e && i.form === e.form) {
            var a = zc(i)
            if (!a) throw Error(J(90))
            F0(i), Hh(i, a)
          }
        }
      }
      break
    case 'textarea':
      $0(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Zo(e, !!n.multiple, t, !1)
  }
}
Y0 = Sp
G0 = oo
var Gx = { usingClientEntryPoint: !1, Events: [il, qo, zc, q0, K0, Sp] },
  vs = {
    findFiberByHostInstance: Gi,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Qx = {
    bundleType: vs.bundleType,
    version: vs.version,
    rendererPackageName: vs.rendererPackageName,
    rendererConfig: vs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = X0(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: vs.findFiberByHostInstance || Kx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!zu.isDisabled && zu.supportsFiber)
    try {
      ;(Lc = zu.inject(Qx)), (ir = zu)
    } catch {}
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gx
hn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Rp(t)) throw Error(J(200))
  return qx(e, t, null, n)
}
hn.createRoot = function (e, t) {
  if (!Rp(e)) throw Error(J(299))
  var n = !1,
    i = '',
    a = I1
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = Cp(e, 1, !1, null, null, n, !1, i, a)),
    (e[Cr] = t.current),
    Hs(e.nodeType === 8 ? e.parentNode : e),
    new Op(t)
  )
}
hn.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(J(188))
      : ((e = Object.keys(e).join(',')), Error(J(268, e)))
  return (e = X0(t)), (e = e === null ? null : e.stateNode), e
}
hn.flushSync = function (e) {
  return oo(e)
}
hn.hydrate = function (e, t, n) {
  if (!Vc(t)) throw Error(J(200))
  return Wc(null, e, t, !0, n)
}
hn.hydrateRoot = function (e, t, n) {
  if (!Rp(e)) throw Error(J(405))
  var i = (n != null && n.hydratedSources) || null,
    a = !1,
    l = '',
    c = I1
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
    (t = L1(t, null, e, 1, n ?? null, a, !1, l, c)),
    (e[Cr] = t.current),
    Hs(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (a = n._getVersion),
        (a = a(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, a])
          : t.mutableSourceEagerHydrationData.push(n, a)
  return new Hc(t)
}
hn.render = function (e, t, n) {
  if (!Vc(t)) throw Error(J(200))
  return Wc(null, e, t, !1, n)
}
hn.unmountComponentAtNode = function (e) {
  if (!Vc(e)) throw Error(J(40))
  return e._reactRootContainer
    ? (oo(function () {
        Wc(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Cr] = null)
        })
      }),
      !0)
    : !1
}
hn.unstable_batchedUpdates = Sp
hn.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Vc(n)) throw Error(J(200))
  if (e == null || e._reactInternals === void 0) throw Error(J(38))
  return Wc(e, t, n, !1, i)
}
hn.version = '18.2.0-next-9e3b772b8-20220608'
function A1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A1)
    } catch (e) {
      console.error(e)
    }
}
A1(), (R0.exports = hn)
var Jx = R0.exports,
  Nv = Jx
;(Nh.createRoot = Nv.createRoot), (Nh.hydrateRoot = Nv.hydrateRoot)
const Xx =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Zx = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  e3 = (e) => Zx[e],
  t3 = (e) => e.replace(Xx, e3)
let Mv = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: t3,
}
const n3 = (e = {}) => {
    Mv = { ...Mv, ...e }
  },
  r3 = {
    type: '3rdParty',
    init(e) {
      n3(e.options.react)
    },
  }
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wc() {
  return (
    (wc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    wc.apply(this, arguments)
  )
}
var Xi
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Xi || (Xi = {}))
const jv = 'popstate'
function i3(e) {
  e === void 0 && (e = {})
  function t(i, a) {
    let { pathname: l, search: c, hash: d } = i.location
    return Pd(
      '',
      { pathname: l, search: c, hash: d },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    )
  }
  function n(i, a) {
    return typeof a == 'string' ? a : z1(a)
  }
  return a3(t, n, null, e)
}
function D1(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function o3() {
  return Math.random().toString(36).substr(2, 8)
}
function Fv(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Pd(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    wc(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? N1(t) : t,
      { state: n, key: (t && t.key) || i || o3() }
    )
  )
}
function z1(e) {
  let { pathname: t = '/', search: n = '', hash: i = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    i && i !== '#' && (t += i.charAt(0) === '#' ? i : '#' + i),
    t
  )
}
function N1(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let i = e.indexOf('?')
    i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))),
      e && (t.pathname = e)
  }
  return t
}
function a3(e, t, n, i) {
  i === void 0 && (i = {})
  let { window: a = document.defaultView, v5Compat: l = !1 } = i,
    c = a.history,
    d = Xi.Pop,
    g = null,
    w = O()
  w == null && ((w = 0), c.replaceState(wc({}, c.state, { idx: w }), ''))
  function O() {
    return (c.state || { idx: null }).idx
  }
  function R() {
    d = Xi.Pop
    let Q = O(),
      I = Q == null ? null : Q - w
    ;(w = Q), g && g({ action: d, location: W.location, delta: I })
  }
  function _(Q, I) {
    d = Xi.Push
    let x = Pd(W.location, Q, I)
    n && n(x, Q), (w = O() + 1)
    let A = Fv(x, w),
      B = W.createHref(x)
    try {
      c.pushState(A, '', B)
    } catch (G) {
      if (G instanceof DOMException && G.name === 'DataCloneError') throw G
      a.location.assign(B)
    }
    l && g && g({ action: d, location: W.location, delta: 1 })
  }
  function H(Q, I) {
    d = Xi.Replace
    let x = Pd(W.location, Q, I)
    n && n(x, Q), (w = O())
    let A = Fv(x, w),
      B = W.createHref(x)
    c.replaceState(A, '', B),
      l && g && g({ action: d, location: W.location, delta: 0 })
  }
  function F(Q) {
    let I = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      x = typeof Q == 'string' ? Q : z1(Q)
    return (
      (x = x.replace(/ $/, '%20')),
      D1(
        I,
        'No window.location.(origin|href) available to create URL for href: ' +
          x
      ),
      new URL(x, I)
    )
  }
  let W = {
    get action() {
      return d
    },
    get location() {
      return e(a, c)
    },
    listen(Q) {
      if (g) throw new Error('A history only accepts one active listener')
      return (
        a.addEventListener(jv, R),
        (g = Q),
        () => {
          a.removeEventListener(jv, R), (g = null)
        }
      )
    },
    createHref(Q) {
      return t(a, Q)
    },
    createURL: F,
    encodeLocation(Q) {
      let I = F(Q)
      return { pathname: I.pathname, search: I.search, hash: I.hash }
    },
    push: _,
    replace: H,
    go(Q) {
      return c.go(Q)
    },
  }
  return W
}
var Uv
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(Uv || (Uv = {}))
function s3(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    i = e.charAt(n)
  return i && i !== '/' ? null : e.slice(n) || '/'
}
const M1 = ['post', 'put', 'patch', 'delete']
new Set(M1)
const l3 = ['get', ...M1]
new Set(l3)
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Od() {
  return (
    (Od = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    Od.apply(this, arguments)
  )
}
const u3 = Pt.createContext(null),
  j1 = Pt.createContext(null)
function c3() {
  return Pt.useContext(j1) != null
}
function f3(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: a = Xi.Pop,
    navigator: l,
    static: c = !1,
    future: d,
  } = e
  c3() && D1(!1)
  let g = t.replace(/^\/*/, '/'),
    w = Pt.useMemo(
      () => ({
        basename: g,
        navigator: l,
        static: c,
        future: Od({ v7_relativeSplatPath: !1 }, d),
      }),
      [g, d, l, c]
    )
  typeof i == 'string' && (i = N1(i))
  let {
      pathname: O = '/',
      search: R = '',
      hash: _ = '',
      state: H = null,
      key: F = 'default',
    } = i,
    W = Pt.useMemo(() => {
      let Q = s3(O, g)
      return Q == null
        ? null
        : {
            location: { pathname: Q, search: R, hash: _, state: H, key: F },
            navigationType: a,
          }
    }, [g, O, R, _, H, F, a])
  return W == null
    ? null
    : Pt.createElement(
        u3.Provider,
        { value: w },
        Pt.createElement(j1.Provider, { children: n, value: W })
      )
}
new Promise(() => {})
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const h3 = '6'
try {
  window.__reactRouterVersion = h3
} catch {}
const d3 = 'startTransition',
  $v = $E[d3]
function p3(e) {
  let { basename: t, children: n, future: i, window: a } = e,
    l = Pt.useRef()
  l.current == null && (l.current = i3({ window: a, v5Compat: !0 }))
  let c = l.current,
    [d, g] = Pt.useState({ action: c.action, location: c.location }),
    { v7_startTransition: w } = i || {},
    O = Pt.useCallback(
      (R) => {
        w && $v ? $v(() => g(R)) : g(R)
      },
      [g, w]
    )
  return (
    Pt.useLayoutEffect(() => c.listen(O), [c, O]),
    Pt.createElement(f3, {
      basename: t,
      children: n,
      location: d.location,
      navigationType: d.action,
      navigator: c,
      future: i,
    })
  )
}
var Bv
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(Bv || (Bv = {}))
var Hv
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Hv || (Hv = {}))
var Vv = {}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const F1 = function (e) {
    const t = []
    let n = 0
    for (let i = 0; i < e.length; i++) {
      let a = e.charCodeAt(i)
      a < 128
        ? (t[n++] = a)
        : a < 2048
        ? ((t[n++] = (a >> 6) | 192), (t[n++] = (a & 63) | 128))
        : (a & 64512) === 55296 &&
          i + 1 < e.length &&
          (e.charCodeAt(i + 1) & 64512) === 56320
        ? ((a = 65536 + ((a & 1023) << 10) + (e.charCodeAt(++i) & 1023)),
          (t[n++] = (a >> 18) | 240),
          (t[n++] = ((a >> 12) & 63) | 128),
          (t[n++] = ((a >> 6) & 63) | 128),
          (t[n++] = (a & 63) | 128))
        : ((t[n++] = (a >> 12) | 224),
          (t[n++] = ((a >> 6) & 63) | 128),
          (t[n++] = (a & 63) | 128))
    }
    return t
  },
  g3 = function (e) {
    const t = []
    let n = 0,
      i = 0
    for (; n < e.length; ) {
      const a = e[n++]
      if (a < 128) t[i++] = String.fromCharCode(a)
      else if (a > 191 && a < 224) {
        const l = e[n++]
        t[i++] = String.fromCharCode(((a & 31) << 6) | (l & 63))
      } else if (a > 239 && a < 365) {
        const l = e[n++],
          c = e[n++],
          d = e[n++],
          g =
            (((a & 7) << 18) | ((l & 63) << 12) | ((c & 63) << 6) | (d & 63)) -
            65536
        ;(t[i++] = String.fromCharCode(55296 + (g >> 10))),
          (t[i++] = String.fromCharCode(56320 + (g & 1023)))
      } else {
        const l = e[n++],
          c = e[n++]
        t[i++] = String.fromCharCode(
          ((a & 15) << 12) | ((l & 63) << 6) | (c & 63)
        )
      }
    }
    return t.join('')
  },
  U1 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/='
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.'
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error('encodeByteArray takes an array as a parameter')
      this.init_()
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        i = []
      for (let a = 0; a < e.length; a += 3) {
        const l = e[a],
          c = a + 1 < e.length,
          d = c ? e[a + 1] : 0,
          g = a + 2 < e.length,
          w = g ? e[a + 2] : 0,
          O = l >> 2,
          R = ((l & 3) << 4) | (d >> 4)
        let _ = ((d & 15) << 2) | (w >> 6),
          H = w & 63
        g || ((H = 64), c || (_ = 64)), i.push(n[O], n[R], n[_], n[H])
      }
      return i.join('')
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(F1(e), t)
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : g3(this.decodeStringToByteArray(e, t))
    },
    decodeStringToByteArray(e, t) {
      this.init_()
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        i = []
      for (let a = 0; a < e.length; ) {
        const l = n[e.charAt(a++)],
          c = a < e.length ? n[e.charAt(a)] : 0
        ++a
        const d = a < e.length ? n[e.charAt(a)] : 64
        ++a
        const g = a < e.length ? n[e.charAt(a)] : 64
        if ((++a, l == null || c == null || d == null || g == null))
          throw new m3()
        const w = (l << 2) | (c >> 4)
        if ((i.push(w), d !== 64)) {
          const O = ((c << 4) & 240) | (d >> 2)
          if ((i.push(O), g !== 64)) {
            const R = ((d << 6) & 192) | g
            i.push(R)
          }
        }
      }
      return i
    },
    init_() {
      if (!this.byteToCharMap_) {
        ;(this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {})
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e))
      }
    },
  }
class m3 extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError')
  }
}
const v3 = function (e) {
    const t = F1(e)
    return U1.encodeByteArray(t, !0)
  },
  kc = function (e) {
    return v3(e).replace(/\./g, '')
  },
  y3 = function (e) {
    try {
      return U1.decodeString(e, !0)
    } catch (t) {
      console.error('base64Decode failed: ', t)
    }
    return null
  }
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b3() {
  if (typeof self < 'u') return self
  if (typeof window < 'u') return window
  if (typeof global < 'u') return global
  throw new Error('Unable to locate global object.')
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const w3 = () => b3().__FIREBASE_DEFAULTS__,
  k3 = () => {
    if (typeof process > 'u' || typeof Vv > 'u') return
    const e = Vv.__FIREBASE_DEFAULTS__
    if (e) return JSON.parse(e)
  },
  _3 = () => {
    if (typeof document > 'u') return
    let e
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const t = e && y3(e[1])
    return t && JSON.parse(t)
  },
  $1 = () => {
    try {
      return w3() || k3() || _3()
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
      return
    }
  },
  S3 = (e) => {
    var t, n
    return (n =
      (t = $1()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e]
  },
  E3 = (e) => {
    const t = S3(e)
    if (!t) return
    const n = t.lastIndexOf(':')
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`)
    const i = parseInt(t.substring(n + 1), 10)
    return t[0] === '[' ? [t.substring(1, n - 1), i] : [t.substring(0, n), i]
  },
  B1 = () => {
    var e
    return (e = $1()) === null || e === void 0 ? void 0 : e.config
  }
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x3 {
  constructor() {
    ;(this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        ;(this.resolve = t), (this.reject = n)
      }))
  }
  wrapCallback(t) {
    return (n, i) => {
      n ? this.reject(n) : this.resolve(i),
        typeof t == 'function' &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, i))
    }
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T3(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    )
  const n = { alg: 'none', type: 'JWT' },
    i = t || 'demo-project',
    a = e.iat || 0,
    l = e.sub || e.user_id
  if (!l)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
  const c = Object.assign(
    {
      iss: `https://securetoken.google.com/${i}`,
      aud: i,
      iat: a,
      exp: a + 3600,
      auth_time: a,
      sub: l,
      user_id: l,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    e
  )
  return [kc(JSON.stringify(n)), kc(JSON.stringify(c)), ''].join('.')
}
function C3() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function P3() {
  return new Promise((e, t) => {
    try {
      let n = !0
      const i = 'validate-browser-context-for-indexeddb-analytics-module',
        a = self.indexedDB.open(i)
      ;(a.onsuccess = () => {
        a.result.close(), n || self.indexedDB.deleteDatabase(i), e(!0)
      }),
        (a.onupgradeneeded = () => {
          n = !1
        }),
        (a.onerror = () => {
          var l
          t(((l = a.error) === null || l === void 0 ? void 0 : l.message) || '')
        })
    } catch (n) {
      t(n)
    }
  })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const O3 = 'FirebaseError'
class va extends Error {
  constructor(t, n, i) {
    super(n),
      (this.code = t),
      (this.customData = i),
      (this.name = O3),
      Object.setPrototypeOf(this, va.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, H1.prototype.create)
  }
}
class H1 {
  constructor(t, n, i) {
    ;(this.service = t), (this.serviceName = n), (this.errors = i)
  }
  create(t, ...n) {
    const i = n[0] || {},
      a = `${this.service}/${t}`,
      l = this.errors[t],
      c = l ? R3(l, i) : 'Error',
      d = `${this.serviceName}: ${c} (${a}).`
    return new va(a, d, i)
  }
}
function R3(e, t) {
  return e.replace(L3, (n, i) => {
    const a = t[i]
    return a != null ? String(a) : `<${i}?>`
  })
}
const L3 = /\{\$([^}]+)}/g
function Rd(e, t) {
  if (e === t) return !0
  const n = Object.keys(e),
    i = Object.keys(t)
  for (const a of n) {
    if (!i.includes(a)) return !1
    const l = e[a],
      c = t[a]
    if (Wv(l) && Wv(c)) {
      if (!Rd(l, c)) return !1
    } else if (l !== c) return !1
  }
  for (const a of i) if (!n.includes(a)) return !1
  return !0
}
function Wv(e) {
  return e !== null && typeof e == 'object'
}
class Xs {
  constructor(t, n, i) {
    ;(this.name = t),
      (this.instanceFactory = n),
      (this.type = i),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null)
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yi = '[DEFAULT]'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I3 {
  constructor(t, n) {
    ;(this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map())
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t)
    if (!this.instancesDeferred.has(n)) {
      const i = new x3()
      if (
        (this.instancesDeferred.set(n, i),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const a = this.getOrInitializeService({ instanceIdentifier: n })
          a && i.resolve(a)
        } catch {}
    }
    return this.instancesDeferred.get(n).promise
  }
  getImmediate(t) {
    var n
    const i = this.normalizeInstanceIdentifier(t?.identifier),
      a = (n = t?.optional) !== null && n !== void 0 ? n : !1
    if (this.isInitialized(i) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: i })
      } catch (l) {
        if (a) return null
        throw l
      }
    else {
      if (a) return null
      throw Error(`Service ${this.name} is not available`)
    }
  }
  getComponent() {
    return this.component
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`)
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`)
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (D3(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Yi })
        } catch {}
      for (const [n, i] of this.instancesDeferred.entries()) {
        const a = this.normalizeInstanceIdentifier(n)
        try {
          const l = this.getOrInitializeService({ instanceIdentifier: a })
          i.resolve(l)
        } catch {}
      }
    }
  }
  clearInstance(t = Yi) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t)
  }
  async delete() {
    const t = Array.from(this.instances.values())
    await Promise.all([
      ...t.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => '_delete' in n).map((n) => n._delete()),
    ])
  }
  isComponentSet() {
    return this.component != null
  }
  isInitialized(t = Yi) {
    return this.instances.has(t)
  }
  getOptions(t = Yi) {
    return this.instancesOptions.get(t) || {}
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      i = this.normalizeInstanceIdentifier(t.instanceIdentifier)
    if (this.isInitialized(i))
      throw Error(`${this.name}(${i}) has already been initialized`)
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`)
    const a = this.getOrInitializeService({ instanceIdentifier: i, options: n })
    for (const [l, c] of this.instancesDeferred.entries()) {
      const d = this.normalizeInstanceIdentifier(l)
      i === d && c.resolve(a)
    }
    return a
  }
  onInit(t, n) {
    var i
    const a = this.normalizeInstanceIdentifier(n),
      l =
        (i = this.onInitCallbacks.get(a)) !== null && i !== void 0
          ? i
          : new Set()
    l.add(t), this.onInitCallbacks.set(a, l)
    const c = this.instances.get(a)
    return (
      c && t(c, a),
      () => {
        l.delete(t)
      }
    )
  }
  invokeOnInitCallbacks(t, n) {
    const i = this.onInitCallbacks.get(n)
    if (i)
      for (const a of i)
        try {
          a(t, n)
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let i = this.instances.get(t)
    if (
      !i &&
      this.component &&
      ((i = this.component.instanceFactory(this.container, {
        instanceIdentifier: A3(t),
        options: n,
      })),
      this.instances.set(t, i),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(i, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, i)
      } catch {}
    return i || null
  }
  normalizeInstanceIdentifier(t = Yi) {
    return this.component ? (this.component.multipleInstances ? t : Yi) : t
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
  }
}
function A3(e) {
  return e === Yi ? void 0 : e
}
function D3(e) {
  return e.instantiationMode === 'EAGER'
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z3 {
  constructor(t) {
    ;(this.name = t), (this.providers = new Map())
  }
  addComponent(t) {
    const n = this.getProvider(t.name)
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      )
    n.setComponent(t)
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t)
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t)
    const n = new I3(t, this)
    return this.providers.set(t, n), n
  }
  getProviders() {
    return Array.from(this.providers.values())
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var De
;(function (e) {
  ;(e[(e.DEBUG = 0)] = 'DEBUG'),
    (e[(e.VERBOSE = 1)] = 'VERBOSE'),
    (e[(e.INFO = 2)] = 'INFO'),
    (e[(e.WARN = 3)] = 'WARN'),
    (e[(e.ERROR = 4)] = 'ERROR'),
    (e[(e.SILENT = 5)] = 'SILENT')
})(De || (De = {}))
const N3 = {
    debug: De.DEBUG,
    verbose: De.VERBOSE,
    info: De.INFO,
    warn: De.WARN,
    error: De.ERROR,
    silent: De.SILENT,
  },
  M3 = De.INFO,
  j3 = {
    [De.DEBUG]: 'log',
    [De.VERBOSE]: 'log',
    [De.INFO]: 'info',
    [De.WARN]: 'warn',
    [De.ERROR]: 'error',
  },
  F3 = (e, t, ...n) => {
    if (t < e.logLevel) return
    const i = new Date().toISOString(),
      a = j3[t]
    if (a) console[a](`[${i}]  ${e.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      )
  }
let V1 = class {
  constructor(e) {
    ;(this.name = e),
      (this._logLevel = M3),
      (this._logHandler = F3),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(e) {
    if (!(e in De))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
    this._logLevel = e
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? N3[e] : e
  }
  get logHandler() {
    return this._logHandler
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function')
    this._logHandler = e
  }
  get userLogHandler() {
    return this._userLogHandler
  }
  set userLogHandler(e) {
    this._userLogHandler = e
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, De.DEBUG, ...e),
      this._logHandler(this, De.DEBUG, ...e)
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, De.VERBOSE, ...e),
      this._logHandler(this, De.VERBOSE, ...e)
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, De.INFO, ...e),
      this._logHandler(this, De.INFO, ...e)
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, De.WARN, ...e),
      this._logHandler(this, De.WARN, ...e)
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, De.ERROR, ...e),
      this._logHandler(this, De.ERROR, ...e)
  }
}
const U3 = (e, t) => t.some((n) => e instanceof n)
let qv, Kv
function $3() {
  return (
    qv ||
    (qv = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  )
}
function B3() {
  return (
    Kv ||
    (Kv = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  )
}
const W1 = new WeakMap(),
  Ld = new WeakMap(),
  q1 = new WeakMap(),
  Oh = new WeakMap(),
  Lp = new WeakMap()
function H3(e) {
  const t = new Promise((n, i) => {
    const a = () => {
        e.removeEventListener('success', l), e.removeEventListener('error', c)
      },
      l = () => {
        n(vi(e.result)), a()
      },
      c = () => {
        i(e.error), a()
      }
    e.addEventListener('success', l), e.addEventListener('error', c)
  })
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && W1.set(n, e)
      })
      .catch(() => {}),
    Lp.set(t, e),
    t
  )
}
function V3(e) {
  if (Ld.has(e)) return
  const t = new Promise((n, i) => {
    const a = () => {
        e.removeEventListener('complete', l),
          e.removeEventListener('error', c),
          e.removeEventListener('abort', c)
      },
      l = () => {
        n(), a()
      },
      c = () => {
        i(e.error || new DOMException('AbortError', 'AbortError')), a()
      }
    e.addEventListener('complete', l),
      e.addEventListener('error', c),
      e.addEventListener('abort', c)
  })
  Ld.set(e, t)
}
let Id = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return Ld.get(e)
      if (t === 'objectStoreNames') return e.objectStoreNames || q1.get(e)
      if (t === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0])
    }
    return vi(e[t])
  },
  set(e, t, n) {
    return (e[t] = n), !0
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === 'done' || t === 'store')
      ? !0
      : t in e
  },
}
function W3(e) {
  Id = e(Id)
}
function q3(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const i = e.call(Rh(this), t, ...n)
        return q1.set(i, t.sort ? t.sort() : [t]), vi(i)
      }
    : B3().includes(e)
    ? function (...t) {
        return e.apply(Rh(this), t), vi(W1.get(this))
      }
    : function (...t) {
        return vi(e.apply(Rh(this), t))
      }
}
function K3(e) {
  return typeof e == 'function'
    ? q3(e)
    : (e instanceof IDBTransaction && V3(e), U3(e, $3()) ? new Proxy(e, Id) : e)
}
function vi(e) {
  if (e instanceof IDBRequest) return H3(e)
  if (Oh.has(e)) return Oh.get(e)
  const t = K3(e)
  return t !== e && (Oh.set(e, t), Lp.set(t, e)), t
}
const Rh = (e) => Lp.get(e)
function Y3(e, t, { blocked: n, upgrade: i, blocking: a, terminated: l } = {}) {
  const c = indexedDB.open(e, t),
    d = vi(c)
  return (
    i &&
      c.addEventListener('upgradeneeded', (g) => {
        i(vi(c.result), g.oldVersion, g.newVersion, vi(c.transaction), g)
      }),
    n && c.addEventListener('blocked', (g) => n(g.oldVersion, g.newVersion, g)),
    d
      .then((g) => {
        l && g.addEventListener('close', () => l()),
          a &&
            g.addEventListener('versionchange', (w) =>
              a(w.oldVersion, w.newVersion, w)
            )
      })
      .catch(() => {}),
    d
  )
}
const G3 = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  Q3 = ['put', 'add', 'delete', 'clear'],
  Lh = new Map()
function Yv(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return
  if (Lh.get(t)) return Lh.get(t)
  const n = t.replace(/FromIndex$/, ''),
    i = t !== n,
    a = Q3.includes(n)
  if (
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) ||
    !(a || G3.includes(n))
  )
    return
  const l = async function (c, ...d) {
    const g = this.transaction(c, a ? 'readwrite' : 'readonly')
    let w = g.store
    return (
      i && (w = w.index(d.shift())),
      (await Promise.all([w[n](...d), a && g.done]))[0]
    )
  }
  return Lh.set(t, l), l
}
W3((e) => ({
  ...e,
  get: (t, n, i) => Yv(t, n) || e.get(t, n, i),
  has: (t, n) => !!Yv(t, n) || e.has(t, n),
}))
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J3 {
  constructor(t) {
    this.container = t
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((t) => {
        if (X3(t)) {
          const n = t.getImmediate()
          return `${n.library}/${n.version}`
        } else return null
      })
      .filter((t) => t)
      .join(' ')
  }
}
function X3(e) {
  return e.getComponent()?.type === 'VERSION'
}
const Ad = '@firebase/app',
  Gv = '0.10.15'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rr = new V1('@firebase/app'),
  Z3 = '@firebase/app-compat',
  e9 = '@firebase/analytics-compat',
  t9 = '@firebase/analytics',
  n9 = '@firebase/app-check-compat',
  r9 = '@firebase/app-check',
  i9 = '@firebase/auth',
  o9 = '@firebase/auth-compat',
  a9 = '@firebase/database',
  s9 = '@firebase/data-connect',
  l9 = '@firebase/database-compat',
  u9 = '@firebase/functions',
  c9 = '@firebase/functions-compat',
  f9 = '@firebase/installations',
  h9 = '@firebase/installations-compat',
  d9 = '@firebase/messaging',
  p9 = '@firebase/messaging-compat',
  g9 = '@firebase/performance',
  m9 = '@firebase/performance-compat',
  v9 = '@firebase/remote-config',
  y9 = '@firebase/remote-config-compat',
  b9 = '@firebase/storage',
  w9 = '@firebase/storage-compat',
  k9 = '@firebase/firestore',
  _9 = '@firebase/vertexai',
  S9 = '@firebase/firestore-compat',
  E9 = 'firebase',
  x9 = '11.0.1'
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dd = '[DEFAULT]',
  T9 = {
    [Ad]: 'fire-core',
    [Z3]: 'fire-core-compat',
    [t9]: 'fire-analytics',
    [e9]: 'fire-analytics-compat',
    [r9]: 'fire-app-check',
    [n9]: 'fire-app-check-compat',
    [i9]: 'fire-auth',
    [o9]: 'fire-auth-compat',
    [a9]: 'fire-rtdb',
    [s9]: 'fire-data-connect',
    [l9]: 'fire-rtdb-compat',
    [u9]: 'fire-fn',
    [c9]: 'fire-fn-compat',
    [f9]: 'fire-iid',
    [h9]: 'fire-iid-compat',
    [d9]: 'fire-fcm',
    [p9]: 'fire-fcm-compat',
    [g9]: 'fire-perf',
    [m9]: 'fire-perf-compat',
    [v9]: 'fire-rc',
    [y9]: 'fire-rc-compat',
    [b9]: 'fire-gcs',
    [w9]: 'fire-gcs-compat',
    [k9]: 'fire-fst',
    [S9]: 'fire-fst-compat',
    [_9]: 'fire-vertex',
    'fire-js': 'fire-js',
    [E9]: 'fire-js-all',
  }
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _c = new Map(),
  C9 = new Map(),
  zd = new Map()
function Qv(e, t) {
  try {
    e.container.addComponent(t)
  } catch (n) {
    Rr.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    )
  }
}
function Sc(e) {
  const t = e.name
  if (zd.has(t))
    return (
      Rr.debug(`There were multiple attempts to register component ${t}.`), !1
    )
  zd.set(t, e)
  for (const n of _c.values()) Qv(n, e)
  for (const n of C9.values()) Qv(n, e)
  return !0
}
function P9(e, t) {
  const n = e.container.getProvider('heartbeat').getImmediate({ optional: !0 })
  return n && n.triggerHeartbeat(), e.container.getProvider(t)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const O9 = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  yi = new H1('app', 'Firebase', O9)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R9 {
  constructor(t, n, i) {
    ;(this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = i),
      this.container.addComponent(new Xs('app', () => this, 'PUBLIC'))
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t)
  }
  get name() {
    return this.checkDestroyed(), this._name
  }
  get options() {
    return this.checkDestroyed(), this._options
  }
  get config() {
    return this.checkDestroyed(), this._config
  }
  get container() {
    return this._container
  }
  get isDeleted() {
    return this._isDeleted
  }
  set isDeleted(t) {
    this._isDeleted = t
  }
  checkDestroyed() {
    if (this.isDeleted) throw yi.create('app-deleted', { appName: this._name })
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const L9 = x9
function K1(e, t = {}) {
  let n = e
  typeof t != 'object' && (t = { name: t })
  const i = Object.assign({ name: Dd, automaticDataCollectionEnabled: !1 }, t),
    a = i.name
  if (typeof a != 'string' || !a)
    throw yi.create('bad-app-name', { appName: String(a) })
  if ((n || (n = B1()), !n)) throw yi.create('no-options')
  const l = _c.get(a)
  if (l) {
    if (Rd(n, l.options) && Rd(i, l.config)) return l
    throw yi.create('duplicate-app', { appName: a })
  }
  const c = new z3(a)
  for (const g of zd.values()) c.addComponent(g)
  const d = new R9(n, i, c)
  return _c.set(a, d), d
}
function I9(e = Dd) {
  const t = _c.get(e)
  if (!t && e === Dd && B1()) return K1()
  if (!t) throw yi.create('no-app', { appName: e })
  return t
}
function oa(e, t, n) {
  var i
  let a = (i = T9[e]) !== null && i !== void 0 ? i : e
  n && (a += `-${n}`)
  const l = a.match(/\s|\//),
    c = t.match(/\s|\//)
  if (l || c) {
    const d = [`Unable to register library "${a}" with version "${t}":`]
    l &&
      d.push(
        `library name "${a}" contains illegal characters (whitespace or "/")`
      ),
      l && c && d.push('and'),
      c &&
        d.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Rr.warn(d.join(' '))
    return
  }
  Sc(new Xs(`${a}-version`, () => ({ library: a, version: t }), 'VERSION'))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const A9 = 'firebase-heartbeat-database',
  D9 = 1,
  Zs = 'firebase-heartbeat-store'
let Ih = null
function Y1() {
  return (
    Ih ||
      (Ih = Y3(A9, D9, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Zs)
              } catch (n) {
                console.warn(n)
              }
          }
        },
      }).catch((e) => {
        throw yi.create('idb-open', { originalErrorMessage: e.message })
      })),
    Ih
  )
}
async function z9(e) {
  try {
    const t = (await Y1()).transaction(Zs),
      n = await t.objectStore(Zs).get(G1(e))
    return await t.done, n
  } catch (t) {
    if (t instanceof va) Rr.warn(t.message)
    else {
      const n = yi.create('idb-get', { originalErrorMessage: t?.message })
      Rr.warn(n.message)
    }
  }
}
async function Jv(e, t) {
  try {
    const n = (await Y1()).transaction(Zs, 'readwrite')
    await n.objectStore(Zs).put(t, G1(e)), await n.done
  } catch (n) {
    if (n instanceof va) Rr.warn(n.message)
    else {
      const i = yi.create('idb-set', { originalErrorMessage: n?.message })
      Rr.warn(i.message)
    }
  }
}
function G1(e) {
  return `${e.name}!${e.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const N9 = 1024,
  M9 = 30 * 24 * 60 * 60 * 1e3
class j9 {
  constructor(t) {
    ;(this.container = t), (this._heartbeatsCache = null)
    const n = this.container.getProvider('app').getImmediate()
    ;(this._storage = new U9(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((i) => ((this._heartbeatsCache = i), i)))
  }
  async triggerHeartbeat() {
    var t, n
    try {
      const i = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        a = Xv()
      return (((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === a ||
        this._heartbeatsCache.heartbeats.some((l) => l.date === a)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: a, agent: i }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((l) => {
              const c = new Date(l.date).valueOf()
              return Date.now() - c <= M9
            })),
          this._storage.overwrite(this._heartbeatsCache))
    } catch (i) {
      Rr.warn(i)
    }
  }
  async getHeartbeatsHeader() {
    var t
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return ''
      const n = Xv(),
        { heartbeatsToSend: i, unsentEntries: a } = F9(
          this._heartbeatsCache.heartbeats
        ),
        l = kc(JSON.stringify({ version: 2, heartbeats: i }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        a.length > 0
          ? ((this._heartbeatsCache.heartbeats = a),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        l
      )
    } catch (n) {
      return Rr.warn(n), ''
    }
  }
}
function Xv() {
  return new Date().toISOString().substring(0, 10)
}
function F9(e, t = N9) {
  const n = []
  let i = e.slice()
  for (const a of e) {
    const l = n.find((c) => c.agent === a.agent)
    if (l) {
      if ((l.dates.push(a.date), Zv(n) > t)) {
        l.dates.pop()
        break
      }
    } else if ((n.push({ agent: a.agent, dates: [a.date] }), Zv(n) > t)) {
      n.pop()
      break
    }
    i = i.slice(1)
  }
  return { heartbeatsToSend: n, unsentEntries: i }
}
class U9 {
  constructor(t) {
    ;(this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
  }
  async runIndexedDBEnvironmentCheck() {
    return C3()
      ? P3()
          .then(() => !0)
          .catch(() => !1)
      : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await z9(this.app)
      return t?.heartbeats ? t : { heartbeats: [] }
    } else return { heartbeats: [] }
  }
  async overwrite(t) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return Jv(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      })
    } else return
  }
  async add(t) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return Jv(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      })
    } else return
  }
}
function Zv(e) {
  return kc(JSON.stringify({ version: 2, heartbeats: e })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $9(e) {
  Sc(new Xs('platform-logger', (t) => new J3(t), 'PRIVATE')),
    Sc(new Xs('heartbeat', (t) => new j9(t), 'PRIVATE')),
    oa(Ad, Gv, e),
    oa(Ad, Gv, 'esm2017'),
    oa('fire-js', '')
}
$9('')
var e0 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Q1
;(function () {
  var e
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function t(S, k) {
    function T() {}
    ;(T.prototype = k.prototype),
      (S.D = k.prototype),
      (S.prototype = new T()),
      (S.prototype.constructor = S),
      (S.C = function (P, D, j) {
        for (
          var C = Array(arguments.length - 2), Qe = 2;
          Qe < arguments.length;
          Qe++
        )
          C[Qe - 2] = arguments[Qe]
        return k.prototype[D].apply(P, C)
      })
  }
  function n() {
    this.blockSize = -1
  }
  function i() {
    ;(this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s()
  }
  t(i, n),
    (i.prototype.s = function () {
      ;(this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0)
    })
  function a(S, k, T) {
    T || (T = 0)
    var P = Array(16)
    if (typeof k == 'string')
      for (var D = 0; 16 > D; ++D)
        P[D] =
          k.charCodeAt(T++) |
          (k.charCodeAt(T++) << 8) |
          (k.charCodeAt(T++) << 16) |
          (k.charCodeAt(T++) << 24)
    else
      for (D = 0; 16 > D; ++D)
        P[D] = k[T++] | (k[T++] << 8) | (k[T++] << 16) | (k[T++] << 24)
    ;(k = S.g[0]), (T = S.g[1]), (D = S.g[2])
    var j = S.g[3],
      C = (k + (j ^ (T & (D ^ j))) + P[0] + 3614090360) & 4294967295
    ;(k = T + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (j + (D ^ (k & (T ^ D))) + P[1] + 3905402710) & 4294967295),
      (j = k + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (D + (T ^ (j & (k ^ T))) + P[2] + 606105819) & 4294967295),
      (D = j + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (T + (k ^ (D & (j ^ k))) + P[3] + 3250441966) & 4294967295),
      (T = D + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (k + (j ^ (T & (D ^ j))) + P[4] + 4118548399) & 4294967295),
      (k = T + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (j + (D ^ (k & (T ^ D))) + P[5] + 1200080426) & 4294967295),
      (j = k + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (D + (T ^ (j & (k ^ T))) + P[6] + 2821735955) & 4294967295),
      (D = j + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (T + (k ^ (D & (j ^ k))) + P[7] + 4249261313) & 4294967295),
      (T = D + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (k + (j ^ (T & (D ^ j))) + P[8] + 1770035416) & 4294967295),
      (k = T + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (j + (D ^ (k & (T ^ D))) + P[9] + 2336552879) & 4294967295),
      (j = k + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (D + (T ^ (j & (k ^ T))) + P[10] + 4294925233) & 4294967295),
      (D = j + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (T + (k ^ (D & (j ^ k))) + P[11] + 2304563134) & 4294967295),
      (T = D + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (k + (j ^ (T & (D ^ j))) + P[12] + 1804603682) & 4294967295),
      (k = T + (((C << 7) & 4294967295) | (C >>> 25))),
      (C = (j + (D ^ (k & (T ^ D))) + P[13] + 4254626195) & 4294967295),
      (j = k + (((C << 12) & 4294967295) | (C >>> 20))),
      (C = (D + (T ^ (j & (k ^ T))) + P[14] + 2792965006) & 4294967295),
      (D = j + (((C << 17) & 4294967295) | (C >>> 15))),
      (C = (T + (k ^ (D & (j ^ k))) + P[15] + 1236535329) & 4294967295),
      (T = D + (((C << 22) & 4294967295) | (C >>> 10))),
      (C = (k + (D ^ (j & (T ^ D))) + P[1] + 4129170786) & 4294967295),
      (k = T + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (j + (T ^ (D & (k ^ T))) + P[6] + 3225465664) & 4294967295),
      (j = k + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (D + (k ^ (T & (j ^ k))) + P[11] + 643717713) & 4294967295),
      (D = j + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (T + (j ^ (k & (D ^ j))) + P[0] + 3921069994) & 4294967295),
      (T = D + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (k + (D ^ (j & (T ^ D))) + P[5] + 3593408605) & 4294967295),
      (k = T + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (j + (T ^ (D & (k ^ T))) + P[10] + 38016083) & 4294967295),
      (j = k + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (D + (k ^ (T & (j ^ k))) + P[15] + 3634488961) & 4294967295),
      (D = j + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (T + (j ^ (k & (D ^ j))) + P[4] + 3889429448) & 4294967295),
      (T = D + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (k + (D ^ (j & (T ^ D))) + P[9] + 568446438) & 4294967295),
      (k = T + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (j + (T ^ (D & (k ^ T))) + P[14] + 3275163606) & 4294967295),
      (j = k + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (D + (k ^ (T & (j ^ k))) + P[3] + 4107603335) & 4294967295),
      (D = j + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (T + (j ^ (k & (D ^ j))) + P[8] + 1163531501) & 4294967295),
      (T = D + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (k + (D ^ (j & (T ^ D))) + P[13] + 2850285829) & 4294967295),
      (k = T + (((C << 5) & 4294967295) | (C >>> 27))),
      (C = (j + (T ^ (D & (k ^ T))) + P[2] + 4243563512) & 4294967295),
      (j = k + (((C << 9) & 4294967295) | (C >>> 23))),
      (C = (D + (k ^ (T & (j ^ k))) + P[7] + 1735328473) & 4294967295),
      (D = j + (((C << 14) & 4294967295) | (C >>> 18))),
      (C = (T + (j ^ (k & (D ^ j))) + P[12] + 2368359562) & 4294967295),
      (T = D + (((C << 20) & 4294967295) | (C >>> 12))),
      (C = (k + (T ^ D ^ j) + P[5] + 4294588738) & 4294967295),
      (k = T + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (j + (k ^ T ^ D) + P[8] + 2272392833) & 4294967295),
      (j = k + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (D + (j ^ k ^ T) + P[11] + 1839030562) & 4294967295),
      (D = j + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (T + (D ^ j ^ k) + P[14] + 4259657740) & 4294967295),
      (T = D + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (k + (T ^ D ^ j) + P[1] + 2763975236) & 4294967295),
      (k = T + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (j + (k ^ T ^ D) + P[4] + 1272893353) & 4294967295),
      (j = k + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (D + (j ^ k ^ T) + P[7] + 4139469664) & 4294967295),
      (D = j + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (T + (D ^ j ^ k) + P[10] + 3200236656) & 4294967295),
      (T = D + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (k + (T ^ D ^ j) + P[13] + 681279174) & 4294967295),
      (k = T + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (j + (k ^ T ^ D) + P[0] + 3936430074) & 4294967295),
      (j = k + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (D + (j ^ k ^ T) + P[3] + 3572445317) & 4294967295),
      (D = j + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (T + (D ^ j ^ k) + P[6] + 76029189) & 4294967295),
      (T = D + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (k + (T ^ D ^ j) + P[9] + 3654602809) & 4294967295),
      (k = T + (((C << 4) & 4294967295) | (C >>> 28))),
      (C = (j + (k ^ T ^ D) + P[12] + 3873151461) & 4294967295),
      (j = k + (((C << 11) & 4294967295) | (C >>> 21))),
      (C = (D + (j ^ k ^ T) + P[15] + 530742520) & 4294967295),
      (D = j + (((C << 16) & 4294967295) | (C >>> 16))),
      (C = (T + (D ^ j ^ k) + P[2] + 3299628645) & 4294967295),
      (T = D + (((C << 23) & 4294967295) | (C >>> 9))),
      (C = (k + (D ^ (T | ~j)) + P[0] + 4096336452) & 4294967295),
      (k = T + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (j + (T ^ (k | ~D)) + P[7] + 1126891415) & 4294967295),
      (j = k + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (D + (k ^ (j | ~T)) + P[14] + 2878612391) & 4294967295),
      (D = j + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (T + (j ^ (D | ~k)) + P[5] + 4237533241) & 4294967295),
      (T = D + (((C << 21) & 4294967295) | (C >>> 11))),
      (C = (k + (D ^ (T | ~j)) + P[12] + 1700485571) & 4294967295),
      (k = T + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (j + (T ^ (k | ~D)) + P[3] + 2399980690) & 4294967295),
      (j = k + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (D + (k ^ (j | ~T)) + P[10] + 4293915773) & 4294967295),
      (D = j + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (T + (j ^ (D | ~k)) + P[1] + 2240044497) & 4294967295),
      (T = D + (((C << 21) & 4294967295) | (C >>> 11))),
      (C = (k + (D ^ (T | ~j)) + P[8] + 1873313359) & 4294967295),
      (k = T + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (j + (T ^ (k | ~D)) + P[15] + 4264355552) & 4294967295),
      (j = k + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (D + (k ^ (j | ~T)) + P[6] + 2734768916) & 4294967295),
      (D = j + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (T + (j ^ (D | ~k)) + P[13] + 1309151649) & 4294967295),
      (T = D + (((C << 21) & 4294967295) | (C >>> 11))),
      (C = (k + (D ^ (T | ~j)) + P[4] + 4149444226) & 4294967295),
      (k = T + (((C << 6) & 4294967295) | (C >>> 26))),
      (C = (j + (T ^ (k | ~D)) + P[11] + 3174756917) & 4294967295),
      (j = k + (((C << 10) & 4294967295) | (C >>> 22))),
      (C = (D + (k ^ (j | ~T)) + P[2] + 718787259) & 4294967295),
      (D = j + (((C << 15) & 4294967295) | (C >>> 17))),
      (C = (T + (j ^ (D | ~k)) + P[9] + 3951481745) & 4294967295),
      (S.g[0] = (S.g[0] + k) & 4294967295),
      (S.g[1] =
        (S.g[1] + (D + (((C << 21) & 4294967295) | (C >>> 11)))) & 4294967295),
      (S.g[2] = (S.g[2] + D) & 4294967295),
      (S.g[3] = (S.g[3] + j) & 4294967295)
  }
  ;(i.prototype.u = function (S, k) {
    k === void 0 && (k = S.length)
    for (var T = k - this.blockSize, P = this.B, D = this.h, j = 0; j < k; ) {
      if (D == 0) for (; j <= T; ) a(this, S, j), (j += this.blockSize)
      if (typeof S == 'string') {
        for (; j < k; )
          if (((P[D++] = S.charCodeAt(j++)), D == this.blockSize)) {
            a(this, P), (D = 0)
            break
          }
      } else
        for (; j < k; )
          if (((P[D++] = S[j++]), D == this.blockSize)) {
            a(this, P), (D = 0)
            break
          }
    }
    ;(this.h = D), (this.o += k)
  }),
    (i.prototype.v = function () {
      var S = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      )
      S[0] = 128
      for (var k = 1; k < S.length - 8; ++k) S[k] = 0
      var T = 8 * this.o
      for (k = S.length - 8; k < S.length; ++k) (S[k] = T & 255), (T /= 256)
      for (this.u(S), S = Array(16), k = T = 0; 4 > k; ++k)
        for (var P = 0; 32 > P; P += 8) S[T++] = (this.g[k] >>> P) & 255
      return S
    })
  function l(S, k) {
    var T = d
    return Object.prototype.hasOwnProperty.call(T, S) ? T[S] : (T[S] = k(S))
  }
  function c(S, k) {
    this.h = k
    for (var T = [], P = !0, D = S.length - 1; 0 <= D; D--) {
      var j = S[D] | 0
      ;(P && j == k) || ((T[D] = j), (P = !1))
    }
    this.g = T
  }
  var d = {}
  function g(S) {
    return -128 <= S && 128 > S
      ? l(S, function (k) {
          return new c([k | 0], 0 > k ? -1 : 0)
        })
      : new c([S | 0], 0 > S ? -1 : 0)
  }
  function w(S) {
    if (isNaN(S) || !isFinite(S)) return R
    if (0 > S) return Q(w(-S))
    for (var k = [], T = 1, P = 0; S >= T; P++)
      (k[P] = (S / T) | 0), (T *= 4294967296)
    return new c(k, 0)
  }
  function O(S, k) {
    if (S.length == 0) throw Error('number format error: empty string')
    if (((k = k || 10), 2 > k || 36 < k))
      throw Error('radix out of range: ' + k)
    if (S.charAt(0) == '-') return Q(O(S.substring(1), k))
    if (0 <= S.indexOf('-'))
      throw Error('number format error: interior "-" character')
    for (var T = w(Math.pow(k, 8)), P = R, D = 0; D < S.length; D += 8) {
      var j = Math.min(8, S.length - D),
        C = parseInt(S.substring(D, D + j), k)
      8 > j
        ? ((j = w(Math.pow(k, j))), (P = P.j(j).add(w(C))))
        : ((P = P.j(T)), (P = P.add(w(C))))
    }
    return P
  }
  var R = g(0),
    _ = g(1),
    H = g(16777216)
  ;(e = c.prototype),
    (e.m = function () {
      if (W(this)) return -Q(this).m()
      for (var S = 0, k = 1, T = 0; T < this.g.length; T++) {
        var P = this.i(T)
        ;(S += (0 <= P ? P : 4294967296 + P) * k), (k *= 4294967296)
      }
      return S
    }),
    (e.toString = function (S) {
      if (((S = S || 10), 2 > S || 36 < S))
        throw Error('radix out of range: ' + S)
      if (F(this)) return '0'
      if (W(this)) return '-' + Q(this).toString(S)
      for (var k = w(Math.pow(S, 6)), T = this, P = ''; ; ) {
        var D = B(T, k).g
        T = I(T, D.j(k))
        var j = ((0 < T.g.length ? T.g[0] : T.h) >>> 0).toString(S)
        if (((T = D), F(T))) return j + P
        for (; 6 > j.length; ) j = '0' + j
        P = j + P
      }
    }),
    (e.i = function (S) {
      return 0 > S ? 0 : S < this.g.length ? this.g[S] : this.h
    })
  function F(S) {
    if (S.h != 0) return !1
    for (var k = 0; k < S.g.length; k++) if (S.g[k] != 0) return !1
    return !0
  }
  function W(S) {
    return S.h == -1
  }
  e.l = function (S) {
    return (S = I(this, S)), W(S) ? -1 : F(S) ? 0 : 1
  }
  function Q(S) {
    for (var k = S.g.length, T = [], P = 0; P < k; P++) T[P] = ~S.g[P]
    return new c(T, ~S.h).add(_)
  }
  ;(e.abs = function () {
    return W(this) ? Q(this) : this
  }),
    (e.add = function (S) {
      for (
        var k = Math.max(this.g.length, S.g.length), T = [], P = 0, D = 0;
        D <= k;
        D++
      ) {
        var j = P + (this.i(D) & 65535) + (S.i(D) & 65535),
          C = (j >>> 16) + (this.i(D) >>> 16) + (S.i(D) >>> 16)
        ;(P = C >>> 16), (j &= 65535), (C &= 65535), (T[D] = (C << 16) | j)
      }
      return new c(T, T[T.length - 1] & -2147483648 ? -1 : 0)
    })
  function I(S, k) {
    return S.add(Q(k))
  }
  e.j = function (S) {
    if (F(this) || F(S)) return R
    if (W(this)) return W(S) ? Q(this).j(Q(S)) : Q(Q(this).j(S))
    if (W(S)) return Q(this.j(Q(S)))
    if (0 > this.l(H) && 0 > S.l(H)) return w(this.m() * S.m())
    for (var k = this.g.length + S.g.length, T = [], P = 0; P < 2 * k; P++)
      T[P] = 0
    for (P = 0; P < this.g.length; P++)
      for (var D = 0; D < S.g.length; D++) {
        var j = this.i(P) >>> 16,
          C = this.i(P) & 65535,
          Qe = S.i(D) >>> 16,
          $t = S.i(D) & 65535
        ;(T[2 * P + 2 * D] += C * $t),
          x(T, 2 * P + 2 * D),
          (T[2 * P + 2 * D + 1] += j * $t),
          x(T, 2 * P + 2 * D + 1),
          (T[2 * P + 2 * D + 1] += C * Qe),
          x(T, 2 * P + 2 * D + 1),
          (T[2 * P + 2 * D + 2] += j * Qe),
          x(T, 2 * P + 2 * D + 2)
      }
    for (P = 0; P < k; P++) T[P] = (T[2 * P + 1] << 16) | T[2 * P]
    for (P = k; P < 2 * k; P++) T[P] = 0
    return new c(T, 0)
  }
  function x(S, k) {
    for (; (S[k] & 65535) != S[k]; )
      (S[k + 1] += S[k] >>> 16), (S[k] &= 65535), k++
  }
  function A(S, k) {
    ;(this.g = S), (this.h = k)
  }
  function B(S, k) {
    if (F(k)) throw Error('division by zero')
    if (F(S)) return new A(R, R)
    if (W(S)) return (k = B(Q(S), k)), new A(Q(k.g), Q(k.h))
    if (W(k)) return (k = B(S, Q(k))), new A(Q(k.g), k.h)
    if (30 < S.g.length) {
      if (W(S) || W(k))
        throw Error('slowDivide_ only works with positive integers.')
      for (var T = _, P = k; 0 >= P.l(S); ) (T = G(T)), (P = G(P))
      var D = X(T, 1),
        j = X(P, 1)
      for (P = X(P, 2), T = X(T, 2); !F(P); ) {
        var C = j.add(P)
        0 >= C.l(S) && ((D = D.add(T)), (j = C)), (P = X(P, 1)), (T = X(T, 1))
      }
      return (k = I(S, D.j(k))), new A(D, k)
    }
    for (D = R; 0 <= S.l(k); ) {
      for (
        T = Math.max(1, Math.floor(S.m() / k.m())),
          P = Math.ceil(Math.log(T) / Math.LN2),
          P = 48 >= P ? 1 : Math.pow(2, P - 48),
          j = w(T),
          C = j.j(k);
        W(C) || 0 < C.l(S);

      )
        (T -= P), (j = w(T)), (C = j.j(k))
      F(j) && (j = _), (D = D.add(j)), (S = I(S, C))
    }
    return new A(D, S)
  }
  ;(e.A = function (S) {
    return B(this, S).h
  }),
    (e.and = function (S) {
      for (
        var k = Math.max(this.g.length, S.g.length), T = [], P = 0;
        P < k;
        P++
      )
        T[P] = this.i(P) & S.i(P)
      return new c(T, this.h & S.h)
    }),
    (e.or = function (S) {
      for (
        var k = Math.max(this.g.length, S.g.length), T = [], P = 0;
        P < k;
        P++
      )
        T[P] = this.i(P) | S.i(P)
      return new c(T, this.h | S.h)
    }),
    (e.xor = function (S) {
      for (
        var k = Math.max(this.g.length, S.g.length), T = [], P = 0;
        P < k;
        P++
      )
        T[P] = this.i(P) ^ S.i(P)
      return new c(T, this.h ^ S.h)
    })
  function G(S) {
    for (var k = S.g.length + 1, T = [], P = 0; P < k; P++)
      T[P] = (S.i(P) << 1) | (S.i(P - 1) >>> 31)
    return new c(T, S.h)
  }
  function X(S, k) {
    var T = k >> 5
    k %= 32
    for (var P = S.g.length - T, D = [], j = 0; j < P; j++)
      D[j] =
        0 < k ? (S.i(j + T) >>> k) | (S.i(j + T + 1) << (32 - k)) : S.i(j + T)
    return new c(D, S.h)
  }
  ;(i.prototype.digest = i.prototype.v),
    (i.prototype.reset = i.prototype.s),
    (i.prototype.update = i.prototype.u),
    (c.prototype.add = c.prototype.add),
    (c.prototype.multiply = c.prototype.j),
    (c.prototype.modulo = c.prototype.A),
    (c.prototype.compare = c.prototype.l),
    (c.prototype.toNumber = c.prototype.m),
    (c.prototype.toString = c.prototype.toString),
    (c.prototype.getBits = c.prototype.i),
    (c.fromNumber = w),
    (c.fromString = O),
    (Q1 = c)
}).apply(
  typeof e0 < 'u'
    ? e0
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
var Nu =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
;(function () {
  var e,
    t =
      typeof Object.defineProperties == 'function'
        ? Object.defineProperty
        : function (s, f, p) {
            return (
              s == Array.prototype || s == Object.prototype || (s[f] = p.value),
              s
            )
          }
  function n(s) {
    s = [
      typeof globalThis == 'object' && globalThis,
      s,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof Nu == 'object' && Nu,
    ]
    for (var f = 0; f < s.length; ++f) {
      var p = s[f]
      if (p && p.Math == Math) return p
    }
    throw Error('Cannot find global object')
  }
  var i = n(this)
  function a(s, f) {
    if (f)
      e: {
        var p = i
        s = s.split('.')
        for (var y = 0; y < s.length - 1; y++) {
          var M = s[y]
          if (!(M in p)) break e
          p = p[M]
        }
        ;(s = s[s.length - 1]),
          (y = p[s]),
          (f = f(y)),
          f != y &&
            f != null &&
            t(p, s, { configurable: !0, writable: !0, value: f })
      }
  }
  function l(s, f) {
    s instanceof String && (s += '')
    var p = 0,
      y = !1,
      M = {
        next: function () {
          if (!y && p < s.length) {
            var $ = p++
            return { value: f($, s[$]), done: !1 }
          }
          return (y = !0), { done: !0, value: void 0 }
        },
      }
    return (
      (M[Symbol.iterator] = function () {
        return M
      }),
      M
    )
  }
  a('Array.prototype.values', function (s) {
    return (
      s ||
      function () {
        return l(this, function (f, p) {
          return p
        })
      }
    )
  })
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var c = c || {},
    d = this || self
  function g(s) {
    var f = typeof s
    return (
      (f = f != 'object' ? f : s ? (Array.isArray(s) ? 'array' : f) : 'null'),
      f == 'array' || (f == 'object' && typeof s.length == 'number')
    )
  }
  function w(s) {
    var f = typeof s
    return (f == 'object' && s != null) || f == 'function'
  }
  function O(s, f, p) {
    return s.call.apply(s.bind, arguments)
  }
  function R(s, f, p) {
    if (!s) throw Error()
    if (2 < arguments.length) {
      var y = Array.prototype.slice.call(arguments, 2)
      return function () {
        var M = Array.prototype.slice.call(arguments)
        return Array.prototype.unshift.apply(M, y), s.apply(f, M)
      }
    }
    return function () {
      return s.apply(f, arguments)
    }
  }
  function _(s, f, p) {
    return (
      (_ =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? O
          : R),
      _.apply(null, arguments)
    )
  }
  function H(s, f) {
    var p = Array.prototype.slice.call(arguments, 1)
    return function () {
      var y = p.slice()
      return y.push.apply(y, arguments), s.apply(this, y)
    }
  }
  function F(s, f) {
    function p() {}
    ;(p.prototype = f.prototype),
      (s.aa = f.prototype),
      (s.prototype = new p()),
      (s.prototype.constructor = s),
      (s.Qb = function (y, M, $) {
        for (
          var ee = Array(arguments.length - 2), Re = 2;
          Re < arguments.length;
          Re++
        )
          ee[Re - 2] = arguments[Re]
        return f.prototype[M].apply(y, ee)
      })
  }
  function W(s) {
    const f = s.length
    if (0 < f) {
      const p = Array(f)
      for (let y = 0; y < f; y++) p[y] = s[y]
      return p
    }
    return []
  }
  function Q(s, f) {
    for (let p = 1; p < arguments.length; p++) {
      const y = arguments[p]
      if (g(y)) {
        const M = s.length || 0,
          $ = y.length || 0
        s.length = M + $
        for (let ee = 0; ee < $; ee++) s[M + ee] = y[ee]
      } else s.push(y)
    }
  }
  class I {
    constructor(f, p) {
      ;(this.i = f), (this.j = p), (this.h = 0), (this.g = null)
    }
    get() {
      let f
      return (
        0 < this.h
          ? (this.h--, (f = this.g), (this.g = f.next), (f.next = null))
          : (f = this.i()),
        f
      )
    }
  }
  function x(s) {
    return /^[\s\xa0]*$/.test(s)
  }
  function A() {
    var s = d.navigator
    return s && (s = s.userAgent) ? s : ''
  }
  function B(s) {
    return B[' '](s), s
  }
  B[' '] = function () {}
  var G =
    A().indexOf('Gecko') != -1 &&
    !(A().toLowerCase().indexOf('webkit') != -1 && A().indexOf('Edge') == -1) &&
    !(A().indexOf('Trident') != -1 || A().indexOf('MSIE') != -1) &&
    A().indexOf('Edge') == -1
  function X(s, f, p) {
    for (const y in s) f.call(p, s[y], y, s)
  }
  function S(s, f) {
    for (const p in s) f.call(void 0, s[p], p, s)
  }
  function k(s) {
    const f = {}
    for (const p in s) f[p] = s[p]
    return f
  }
  const T =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    )
  function P(s, f) {
    let p, y
    for (let M = 1; M < arguments.length; M++) {
      y = arguments[M]
      for (p in y) s[p] = y[p]
      for (let $ = 0; $ < T.length; $++)
        (p = T[$]), Object.prototype.hasOwnProperty.call(y, p) && (s[p] = y[p])
    }
  }
  function D(s) {
    var f = 1
    s = s.split(':')
    const p = []
    for (; 0 < f && s.length; ) p.push(s.shift()), f--
    return s.length && p.push(s.join(':')), p
  }
  function j(s) {
    d.setTimeout(() => {
      throw s
    }, 0)
  }
  function C() {
    var s = oe
    let f = null
    return (
      s.g &&
        ((f = s.g), (s.g = s.g.next), s.g || (s.h = null), (f.next = null)),
      f
    )
  }
  class Qe {
    constructor() {
      this.h = this.g = null
    }
    add(f, p) {
      const y = $t.get()
      y.set(f, p), this.h ? (this.h.next = y) : (this.g = y), (this.h = y)
    }
  }
  var $t = new I(
    () => new qn(),
    (s) => s.reset()
  )
  class qn {
    constructor() {
      this.next = this.g = this.h = null
    }
    set(f, p) {
      ;(this.h = f), (this.g = p), (this.next = null)
    }
    reset() {
      this.next = this.g = this.h = null
    }
  }
  let Ee,
    Z = !1,
    oe = new Qe(),
    ue = () => {
      const s = d.Promise.resolve(void 0)
      Ee = () => {
        s.then(ke)
      }
    }
  var ke = () => {
    for (var s; (s = C()); ) {
      try {
        s.h.call(s.g)
      } catch (p) {
        j(p)
      }
      var f = $t
      f.j(s), 100 > f.h && (f.h++, (s.next = f.g), (f.g = s))
    }
    Z = !1
  }
  function Pe() {
    ;(this.s = this.s), (this.C = this.C)
  }
  ;(Pe.prototype.s = !1),
    (Pe.prototype.ma = function () {
      this.s || ((this.s = !0), this.N())
    }),
    (Pe.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()()
    })
  function $e(s, f) {
    ;(this.type = s), (this.g = this.target = f), (this.defaultPrevented = !1)
  }
  $e.prototype.h = function () {
    this.defaultPrevented = !0
  }
  var Pn = (function () {
    if (!d.addEventListener || !Object.defineProperty) return !1
    var s = !1,
      f = Object.defineProperty({}, 'passive', {
        get: function () {
          s = !0
        },
      })
    try {
      const p = () => {}
      d.addEventListener('test', p, f), d.removeEventListener('test', p, f)
    } catch {}
    return s
  })()
  function bt(s, f) {
    if (
      ($e.call(this, s ? s.type : ''),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ''),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ''),
      (this.i = null),
      s)
    ) {
      var p = (this.type = s.type),
        y =
          s.changedTouches && s.changedTouches.length
            ? s.changedTouches[0]
            : null
      if (
        ((this.target = s.target || s.srcElement),
        (this.g = f),
        (f = s.relatedTarget))
      ) {
        if (G) {
          e: {
            try {
              B(f.nodeName)
              var M = !0
              break e
            } catch {}
            M = !1
          }
          M || (f = null)
        }
      } else
        p == 'mouseover'
          ? (f = s.fromElement)
          : p == 'mouseout' && (f = s.toElement)
      ;(this.relatedTarget = f),
        y
          ? ((this.clientX = y.clientX !== void 0 ? y.clientX : y.pageX),
            (this.clientY = y.clientY !== void 0 ? y.clientY : y.pageY),
            (this.screenX = y.screenX || 0),
            (this.screenY = y.screenY || 0))
          : ((this.clientX = s.clientX !== void 0 ? s.clientX : s.pageX),
            (this.clientY = s.clientY !== void 0 ? s.clientY : s.pageY),
            (this.screenX = s.screenX || 0),
            (this.screenY = s.screenY || 0)),
        (this.button = s.button),
        (this.key = s.key || ''),
        (this.ctrlKey = s.ctrlKey),
        (this.altKey = s.altKey),
        (this.shiftKey = s.shiftKey),
        (this.metaKey = s.metaKey),
        (this.pointerId = s.pointerId || 0),
        (this.pointerType =
          typeof s.pointerType == 'string'
            ? s.pointerType
            : Bt[s.pointerType] || ''),
        (this.state = s.state),
        (this.i = s),
        s.defaultPrevented && bt.aa.h.call(this)
    }
  }
  F(bt, $e)
  var Bt = { 2: 'touch', 3: 'pen', 4: 'mouse' }
  bt.prototype.h = function () {
    bt.aa.h.call(this)
    var s = this.i
    s.preventDefault ? s.preventDefault() : (s.returnValue = !1)
  }
  var pn = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    Ei = 0
  function xi(s, f, p, y, M) {
    ;(this.listener = s),
      (this.proxy = null),
      (this.src = f),
      (this.type = p),
      (this.capture = !!y),
      (this.ha = M),
      (this.key = ++Ei),
      (this.da = this.fa = !1)
  }
  function lo(s) {
    ;(s.da = !0),
      (s.listener = null),
      (s.proxy = null),
      (s.src = null),
      (s.ha = null)
  }
  function ar(s) {
    ;(this.src = s), (this.g = {}), (this.h = 0)
  }
  ar.prototype.add = function (s, f, p, y, M) {
    var $ = s.toString()
    ;(s = this.g[$]), s || ((s = this.g[$] = []), this.h++)
    var ee = uo(s, f, y, M)
    return (
      -1 < ee
        ? ((f = s[ee]), p || (f.fa = !1))
        : ((f = new xi(f, this.src, $, !!y, M)), (f.fa = p), s.push(f)),
      f
    )
  }
  function Ir(s, f) {
    var p = f.type
    if (p in s.g) {
      var y = s.g[p],
        M = Array.prototype.indexOf.call(y, f, void 0),
        $
      ;($ = 0 <= M) && Array.prototype.splice.call(y, M, 1),
        $ && (lo(f), s.g[p].length == 0 && (delete s.g[p], s.h--))
    }
  }
  function uo(s, f, p, y) {
    for (var M = 0; M < s.length; ++M) {
      var $ = s[M]
      if (!$.da && $.listener == f && $.capture == !!p && $.ha == y) return M
    }
    return -1
  }
  var Lt = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    sr = {}
  function sl(s, f, p, y, M) {
    if (y && y.once) return ul(s, f, p, y, M)
    if (Array.isArray(f)) {
      for (var $ = 0; $ < f.length; $++) sl(s, f[$], p, y, M)
      return null
    }
    return (
      (p = ba(p)),
      s && s[pn]
        ? s.K(f, p, w(y) ? !!y.capture : !!y, M)
        : gn(s, f, p, !1, y, M)
    )
  }
  function gn(s, f, p, y, M, $) {
    if (!f) throw Error('Invalid event type')
    var ee = w(M) ? !!M.capture : !!M,
      Re = ya(s)
    if ((Re || (s[Lt] = Re = new ar(s)), (p = Re.add(f, p, y, ee, $)), p.proxy))
      return p
    if (
      ((y = ll()),
      (p.proxy = y),
      (y.src = s),
      (y.listener = p),
      s.addEventListener)
    )
      Pn || (M = ee),
        M === void 0 && (M = !1),
        s.addEventListener(f.toString(), y, M)
    else if (s.attachEvent) s.attachEvent(Dr(f.toString()), y)
    else if (s.addListener && s.removeListener) s.addListener(y)
    else throw Error('addEventListener and attachEvent are unavailable.')
    return p
  }
  function ll() {
    function s(p) {
      return f.call(s.src, s.listener, p)
    }
    const f = co
    return s
  }
  function ul(s, f, p, y, M) {
    if (Array.isArray(f)) {
      for (var $ = 0; $ < f.length; $++) ul(s, f[$], p, y, M)
      return null
    }
    return (
      (p = ba(p)),
      s && s[pn]
        ? s.L(f, p, w(y) ? !!y.capture : !!y, M)
        : gn(s, f, p, !0, y, M)
    )
  }
  function Ar(s, f, p, y, M) {
    if (Array.isArray(f))
      for (var $ = 0; $ < f.length; $++) Ar(s, f[$], p, y, M)
    else
      (y = w(y) ? !!y.capture : !!y),
        (p = ba(p)),
        s && s[pn]
          ? ((s = s.i),
            (f = String(f).toString()),
            f in s.g &&
              (($ = s.g[f]),
              (p = uo($, p, y, M)),
              -1 < p &&
                (lo($[p]),
                Array.prototype.splice.call($, p, 1),
                $.length == 0 && (delete s.g[f], s.h--))))
          : s &&
            (s = ya(s)) &&
            ((f = s.g[f.toString()]),
            (s = -1),
            f && (s = uo(f, p, y, M)),
            (p = -1 < s ? f[s] : null) && It(p))
  }
  function It(s) {
    if (typeof s != 'number' && s && !s.da) {
      var f = s.src
      if (f && f[pn]) Ir(f.i, s)
      else {
        var p = s.type,
          y = s.proxy
        f.removeEventListener
          ? f.removeEventListener(p, y, s.capture)
          : f.detachEvent
          ? f.detachEvent(Dr(p), y)
          : f.addListener && f.removeListener && f.removeListener(y),
          (p = ya(f))
            ? (Ir(p, s), p.h == 0 && ((p.src = null), (f[Lt] = null)))
            : lo(s)
      }
    }
  }
  function Dr(s) {
    return s in sr ? sr[s] : (sr[s] = 'on' + s)
  }
  function co(s, f) {
    if (s.da) s = !0
    else {
      f = new bt(f, this)
      var p = s.listener,
        y = s.ha || s.src
      s.fa && It(s), (s = p.call(y, f))
    }
    return s
  }
  function ya(s) {
    return (s = s[Lt]), s instanceof ar ? s : null
  }
  var lr = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  function ba(s) {
    return typeof s == 'function'
      ? s
      : (s[lr] ||
          (s[lr] = function (f) {
            return s.handleEvent(f)
          }),
        s[lr])
  }
  function qe() {
    Pe.call(this), (this.i = new ar(this)), (this.M = this), (this.F = null)
  }
  F(qe, Pe),
    (qe.prototype[pn] = !0),
    (qe.prototype.removeEventListener = function (s, f, p, y) {
      Ar(this, s, f, p, y)
    })
  function Ke(s, f) {
    var p,
      y = s.F
    if (y) for (p = []; y; y = y.F) p.push(y)
    if (((s = s.M), (y = f.type || f), typeof f == 'string')) f = new $e(f, s)
    else if (f instanceof $e) f.target = f.target || s
    else {
      var M = f
      ;(f = new $e(y, s)), P(f, M)
    }
    if (((M = !0), p))
      for (var $ = p.length - 1; 0 <= $; $--) {
        var ee = (f.g = p[$])
        M = zr(ee, y, !0, f) && M
      }
    if (
      ((ee = f.g = s),
      (M = zr(ee, y, !0, f) && M),
      (M = zr(ee, y, !1, f) && M),
      p)
    )
      for ($ = 0; $ < p.length; $++)
        (ee = f.g = p[$]), (M = zr(ee, y, !1, f) && M)
  }
  ;(qe.prototype.N = function () {
    if ((qe.aa.N.call(this), this.i)) {
      var s = this.i,
        f
      for (f in s.g) {
        for (var p = s.g[f], y = 0; y < p.length; y++) lo(p[y])
        delete s.g[f], s.h--
      }
    }
    this.F = null
  }),
    (qe.prototype.K = function (s, f, p, y) {
      return this.i.add(String(s), f, !1, p, y)
    }),
    (qe.prototype.L = function (s, f, p, y) {
      return this.i.add(String(s), f, !0, p, y)
    })
  function zr(s, f, p, y) {
    if (((f = s.i.g[String(f)]), !f)) return !0
    f = f.concat()
    for (var M = !0, $ = 0; $ < f.length; ++$) {
      var ee = f[$]
      if (ee && !ee.da && ee.capture == p) {
        var Re = ee.listener,
          tt = ee.ha || ee.src
        ee.fa && Ir(s.i, ee), (M = Re.call(tt, y) !== !1 && M)
      }
    }
    return M && !y.defaultPrevented
  }
  function fo(s, f, p) {
    if (typeof s == 'function') p && (s = _(s, p))
    else if (s && typeof s.handleEvent == 'function') s = _(s.handleEvent, s)
    else throw Error('Invalid listener argument')
    return 2147483647 < Number(f) ? -1 : d.setTimeout(s, f || 0)
  }
  function ho(s) {
    s.g = fo(() => {
      ;(s.g = null), s.i && ((s.i = !1), ho(s))
    }, s.l)
    const f = s.h
    ;(s.h = null), s.m.apply(null, f)
  }
  class wa extends Pe {
    constructor(f, p) {
      super(),
        (this.m = f),
        (this.l = p),
        (this.h = null),
        (this.i = !1),
        (this.g = null)
    }
    j(f) {
      ;(this.h = arguments), this.g ? (this.i = !0) : ho(this)
    }
    N() {
      super.N(),
        this.g &&
          (d.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null))
    }
  }
  function ur(s) {
    Pe.call(this), (this.h = s), (this.g = {})
  }
  F(ur, Pe)
  var po = []
  function go(s) {
    X(
      s.g,
      function (f, p) {
        this.g.hasOwnProperty(p) && It(f)
      },
      s
    ),
      (s.g = {})
  }
  ;(ur.prototype.N = function () {
    ur.aa.N.call(this), go(this)
  }),
    (ur.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented')
    })
  var Ti = d.JSON.stringify,
    ka = d.JSON.parse,
    Kc = class {
      stringify(s) {
        return d.JSON.stringify(s, void 0)
      }
      parse(s) {
        return d.JSON.parse(s, void 0)
      }
    }
  function _a() {}
  _a.prototype.h = null
  function cl(s) {
    return s.h || (s.h = s.i())
  }
  function mo() {
    $e.call(this, 'd')
  }
  F(mo, $e)
  function vo() {
    $e.call(this, 'c')
  }
  F(vo, $e)
  var Nr = {},
    fl = null
  function Sa() {
    return (fl = fl || new qe())
  }
  Nr.La = 'serverreachability'
  function hl(s) {
    $e.call(this, Nr.La, s)
  }
  F(hl, $e)
  function Mr(s) {
    const f = Sa()
    Ke(f, new hl(f))
  }
  Nr.STAT_EVENT = 'statevent'
  function dl(s, f) {
    $e.call(this, Nr.STAT_EVENT, s), (this.stat = f)
  }
  F(dl, $e)
  function dt(s) {
    const f = Sa()
    Ke(f, new dl(f, s))
  }
  Nr.Ma = 'timingevent'
  function pl(s, f) {
    $e.call(this, Nr.Ma, s), (this.size = f)
  }
  F(pl, $e)
  function cr(s, f) {
    if (typeof s != 'function')
      throw Error('Fn must not be null and must be a function')
    return d.setTimeout(function () {
      s()
    }, f)
  }
  function Ci() {
    this.g = !0
  }
  Ci.prototype.xa = function () {
    this.g = !1
  }
  function Ea(s, f, p, y, M, $) {
    s.info(function () {
      if (s.g)
        if ($)
          for (var ee = '', Re = $.split('&'), tt = 0; tt < Re.length; tt++) {
            var xe = Re[tt].split('=')
            if (1 < xe.length) {
              var nt = xe[0]
              xe = xe[1]
              var lt = nt.split('_')
              ee =
                2 <= lt.length && lt[1] == 'type'
                  ? ee + (nt + '=' + xe + '&')
                  : ee + (nt + '=redacted&')
            }
          }
        else ee = null
      else ee = $
      return (
        'XMLHTTP REQ (' +
        y +
        ') [attempt ' +
        M +
        ']: ' +
        f +
        `
` +
        p +
        `
` +
        ee
      )
    })
  }
  function Yc(s, f, p, y, M, $, ee) {
    s.info(function () {
      return (
        'XMLHTTP RESP (' +
        y +
        ') [ attempt ' +
        M +
        ']: ' +
        f +
        `
` +
        p +
        `
` +
        $ +
        ' ' +
        ee
      )
    })
  }
  function jr(s, f, p, y) {
    s.info(function () {
      return 'XMLHTTP TEXT (' + f + '): ' + Qc(s, p) + (y ? ' ' + y : '')
    })
  }
  function Gc(s, f) {
    s.info(function () {
      return 'TIMEOUT: ' + f
    })
  }
  Ci.prototype.info = function () {}
  function Qc(s, f) {
    if (!s.g) return f
    if (!f) return null
    try {
      var p = JSON.parse(f)
      if (p) {
        for (s = 0; s < p.length; s++)
          if (Array.isArray(p[s])) {
            var y = p[s]
            if (!(2 > y.length)) {
              var M = y[1]
              if (Array.isArray(M) && !(1 > M.length)) {
                var $ = M[0]
                if ($ != 'noop' && $ != 'stop' && $ != 'close')
                  for (var ee = 1; ee < M.length; ee++) M[ee] = ''
              }
            }
          }
      }
      return Ti(p)
    } catch {
      return f
    }
  }
  var xa
  function yo() {}
  F(yo, _a),
    (yo.prototype.g = function () {
      return new XMLHttpRequest()
    }),
    (yo.prototype.i = function () {
      return {}
    }),
    (xa = new yo())
  function Kn(s, f, p, y) {
    ;(this.j = s),
      (this.i = f),
      (this.l = p),
      (this.R = y || 1),
      (this.U = new ur(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new gl())
  }
  function gl() {
    ;(this.i = null), (this.g = ''), (this.h = !1)
  }
  var Ta = {},
    Ca = {}
  function Pa(s, f, p) {
    ;(s.L = 1), (s.v = Fr(Ht(f))), (s.m = p), (s.P = !0), ml(s, null)
  }
  function ml(s, f) {
    ;(s.F = Date.now()), bo(s), (s.A = Ht(s.v))
    var p = s.A,
      y = s.R
    Array.isArray(y) || (y = [String(y)]),
      El(p.i, 't', y),
      (s.C = 0),
      (p = s.j.J),
      (s.h = new gl()),
      (s.g = xo(s.j, p ? f : null, !s.m)),
      0 < s.O && (s.M = new wa(_(s.Y, s, s.g), s.O)),
      (f = s.U),
      (p = s.g),
      (y = s.ca)
    var M = 'readystatechange'
    Array.isArray(M) || (M && (po[0] = M.toString()), (M = po))
    for (var $ = 0; $ < M.length; $++) {
      var ee = sl(p, M[$], y || f.handleEvent, !1, f.h || f)
      if (!ee) break
      f.g[ee.key] = ee
    }
    ;(f = s.H ? k(s.H) : {}),
      s.m
        ? (s.u || (s.u = 'POST'),
          (f['Content-Type'] = 'application/x-www-form-urlencoded'),
          s.g.ea(s.A, s.u, s.m, f))
        : ((s.u = 'GET'), s.g.ea(s.A, s.u, null, f)),
      Mr(),
      Ea(s.i, s.u, s.A, s.l, s.R, s.m)
  }
  ;(Kn.prototype.ca = function (s) {
    s = s.target
    const f = this.M
    f && Rn(s) == 3 ? f.j() : this.Y(s)
  }),
    (Kn.prototype.Y = function (s) {
      try {
        if (s == this.g)
          e: {
            const lt = Rn(this.g)
            var f = this.g.Ba()
            const Kr = this.g.Z()
            if (
              !(3 > lt) &&
              (lt != 3 || (this.g && (this.h.h || this.g.oa() || et(this.g))))
            ) {
              this.J ||
                lt != 4 ||
                f == 7 ||
                (f == 8 || 0 >= Kr ? Mr(3) : Mr(2)),
                Oa(this)
              var p = this.g.Z()
              this.X = p
              t: if (vl(this)) {
                var y = et(this.g)
                s = ''
                var M = y.length,
                  $ = Rn(this.g) == 4
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    fr(this), Yn(this)
                    var ee = ''
                    break t
                  }
                  this.h.i = new d.TextDecoder()
                }
                for (f = 0; f < M; f++)
                  (this.h.h = !0),
                    (s += this.h.i.decode(y[f], { stream: !($ && f == M - 1) }))
                ;(y.length = 0), (this.h.g += s), (this.C = 0), (ee = this.h.g)
              } else ee = this.g.oa()
              if (
                ((this.o = p == 200),
                Yc(this.i, this.u, this.A, this.l, this.R, lt, p),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var Re,
                        tt = this.g
                      if (
                        (Re = tt.g
                          ? tt.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !x(Re)
                      ) {
                        var xe = Re
                        break t
                      }
                    }
                    xe = null
                  }
                  if ((p = xe))
                    jr(
                      this.i,
                      this.l,
                      p,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      Ra(this, p)
                  else {
                    ;(this.o = !1), (this.s = 3), dt(12), fr(this), Yn(this)
                    break e
                  }
                }
                if (this.P) {
                  p = !0
                  let Vt
                  for (; !this.J && this.C < ee.length; )
                    if (((Vt = Jc(this, ee)), Vt == Ca)) {
                      lt == 4 && ((this.s = 4), dt(14), (p = !1)),
                        jr(this.i, this.l, null, '[Incomplete Response]')
                      break
                    } else if (Vt == Ta) {
                      ;(this.s = 4),
                        dt(15),
                        jr(this.i, this.l, ee, '[Invalid Chunk]'),
                        (p = !1)
                      break
                    } else jr(this.i, this.l, Vt, null), Ra(this, Vt)
                  if (
                    (vl(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    lt != 4 ||
                      ee.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), dt(16), (p = !1)),
                    (this.o = this.o && p),
                    !p)
                  )
                    jr(this.i, this.l, ee, '[Invalid Chunked Response]'),
                      fr(this),
                      Yn(this)
                  else if (0 < ee.length && !this.W) {
                    this.W = !0
                    var nt = this.j
                    nt.g == this &&
                      nt.ba &&
                      !nt.M &&
                      (nt.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          ee.length
                      ),
                      kt(nt),
                      (nt.M = !0),
                      dt(11))
                  }
                } else jr(this.i, this.l, ee, null), Ra(this, ee)
                lt == 4 && fr(this),
                  this.o &&
                    !this.J &&
                    (lt == 4 ? Ln(this.j, this) : ((this.o = !1), bo(this)))
              } else
                Ba(this.g),
                  p == 400 && 0 < ee.indexOf('Unknown SID')
                    ? ((this.s = 3), dt(12))
                    : ((this.s = 0), dt(13)),
                  fr(this),
                  Yn(this)
            }
          }
      } catch {
      } finally {
      }
    })
  function vl(s) {
    return s.g ? s.u == 'GET' && s.L != 2 && s.j.Ca : !1
  }
  function Jc(s, f) {
    var p = s.C,
      y = f.indexOf(
        `
`,
        p
      )
    return y == -1
      ? Ca
      : ((p = Number(f.substring(p, y))),
        isNaN(p)
          ? Ta
          : ((y += 1),
            y + p > f.length
              ? Ca
              : ((f = f.slice(y, y + p)), (s.C = y + p), f)))
  }
  Kn.prototype.cancel = function () {
    ;(this.J = !0), fr(this)
  }
  function bo(s) {
    ;(s.S = Date.now() + s.I), Pi(s, s.I)
  }
  function Pi(s, f) {
    if (s.B != null) throw Error('WatchDog timer not null')
    s.B = cr(_(s.ba, s), f)
  }
  function Oa(s) {
    s.B && (d.clearTimeout(s.B), (s.B = null))
  }
  Kn.prototype.ba = function () {
    this.B = null
    const s = Date.now()
    0 <= s - this.S
      ? (Gc(this.i, this.A),
        this.L != 2 && (Mr(), dt(17)),
        fr(this),
        (this.s = 2),
        Yn(this))
      : Pi(this, this.S - s)
  }
  function Yn(s) {
    s.j.G == 0 || s.J || Ln(s.j, s)
  }
  function fr(s) {
    Oa(s)
    var f = s.M
    f && typeof f.ma == 'function' && f.ma(),
      (s.M = null),
      go(s.U),
      s.g && ((f = s.g), (s.g = null), f.abort(), f.ma())
  }
  function Ra(s, f) {
    try {
      var p = s.j
      if (p.G != 0 && (p.g == s || Da(p.h, s))) {
        if (!s.K && Da(p.h, s) && p.G == 3) {
          try {
            var y = p.Da.g.parse(f)
          } catch {
            y = null
          }
          if (Array.isArray(y) && y.length == 3) {
            var M = y
            if (M[0] == 0) {
              e: if (!p.u) {
                if (p.g)
                  if (p.g.F + 3e3 < s.F) zi(p), pt(p)
                  else break e
                Ka(p), dt(18)
              }
            } else
              (p.za = M[1]),
                0 < p.za - p.T &&
                  37500 > M[2] &&
                  p.F &&
                  p.v == 0 &&
                  !p.C &&
                  (p.C = cr(_(p.Za, p), 6e3))
            if (1 >= Aa(p.h) && p.ca) {
              try {
                p.ca()
              } catch {}
              p.ca = void 0
            }
          } else In(p, 11)
        } else if (((s.K || p.g == s) && zi(p), !x(f)))
          for (M = p.Da.g.parse(f), f = 0; f < M.length; f++) {
            let xe = M[f]
            if (((p.T = xe[0]), (xe = xe[1]), p.G == 2))
              if (xe[0] == 'c') {
                ;(p.K = xe[1]), (p.ia = xe[2])
                const nt = xe[3]
                nt != null && ((p.la = nt), p.j.info('VER=' + p.la))
                const lt = xe[4]
                lt != null && ((p.Aa = lt), p.j.info('SVER=' + p.Aa))
                const Kr = xe[5]
                Kr != null &&
                  typeof Kr == 'number' &&
                  0 < Kr &&
                  ((y = 1.5 * Kr),
                  (p.L = y),
                  p.j.info('backChannelRequestTimeoutMs_=' + y)),
                  (y = p)
                const Vt = s.g
                if (Vt) {
                  const ut = Vt.g
                    ? Vt.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null
                  if (ut) {
                    var $ = y.h
                    $.g ||
                      (ut.indexOf('spdy') == -1 &&
                        ut.indexOf('quic') == -1 &&
                        ut.indexOf('h2') == -1) ||
                      (($.j = $.l),
                      ($.g = new Set()),
                      $.h && (za($, $.h), ($.h = null)))
                  }
                  if (y.D) {
                    const Mi = Vt.g
                      ? Vt.g.getResponseHeader('X-HTTP-Session-Id')
                      : null
                    Mi && ((y.ya = Mi), Ae(y.I, y.D, Mi))
                  }
                }
                ;(p.G = 3),
                  p.l && p.l.ua(),
                  p.ba &&
                    ((p.R = Date.now() - s.F),
                    p.j.info('Handshake RTT: ' + p.R + 'ms')),
                  (y = p)
                var ee = s
                if (((y.qa = An(y, y.J ? y.ia : null, y.W)), ee.K)) {
                  yl(y.h, ee)
                  var Re = ee,
                    tt = y.L
                  tt && (Re.I = tt), Re.B && (Oa(Re), bo(Re)), (y.g = ee)
                } else wt(y)
                0 < p.i.length && Di(p)
              } else (xe[0] != 'stop' && xe[0] != 'close') || In(p, 7)
            else
              p.G == 3 &&
                (xe[0] == 'stop' || xe[0] == 'close'
                  ? xe[0] == 'stop'
                    ? In(p, 7)
                    : Ai(p)
                  : xe[0] != 'noop' && p.l && p.l.ta(xe),
                (p.v = 0))
          }
      }
      Mr(4)
    } catch {}
  }
  var Xc = class {
    constructor(s, f) {
      ;(this.g = s), (this.map = f)
    }
  }
  function La(s) {
    ;(this.l = s || 10),
      d.PerformanceNavigationTiming
        ? ((s = d.performance.getEntriesByType('navigation')),
          (s =
            0 < s.length &&
            (s[0].nextHopProtocol == 'hq' || s[0].nextHopProtocol == 'h2')))
        : (s = !!(
            d.chrome &&
            d.chrome.loadTimes &&
            d.chrome.loadTimes() &&
            d.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = s ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = [])
  }
  function Ia(s) {
    return s.h ? !0 : s.g ? s.g.size >= s.j : !1
  }
  function Aa(s) {
    return s.h ? 1 : s.g ? s.g.size : 0
  }
  function Da(s, f) {
    return s.h ? s.h == f : s.g ? s.g.has(f) : !1
  }
  function za(s, f) {
    s.g ? s.g.add(f) : (s.h = f)
  }
  function yl(s, f) {
    s.h && s.h == f ? (s.h = null) : s.g && s.g.has(f) && s.g.delete(f)
  }
  La.prototype.cancel = function () {
    if (((this.i = bl(this)), this.h)) this.h.cancel(), (this.h = null)
    else if (this.g && this.g.size !== 0) {
      for (const s of this.g.values()) s.cancel()
      this.g.clear()
    }
  }
  function bl(s) {
    if (s.h != null) return s.i.concat(s.h.D)
    if (s.g != null && s.g.size !== 0) {
      let f = s.i
      for (const p of s.g.values()) f = f.concat(p.D)
      return f
    }
    return W(s.i)
  }
  function wl(s) {
    if (s.V && typeof s.V == 'function') return s.V()
    if (
      (typeof Map < 'u' && s instanceof Map) ||
      (typeof Set < 'u' && s instanceof Set)
    )
      return Array.from(s.values())
    if (typeof s == 'string') return s.split('')
    if (g(s)) {
      for (var f = [], p = s.length, y = 0; y < p; y++) f.push(s[y])
      return f
    }
    ;(f = []), (p = 0)
    for (y in s) f[p++] = s[y]
    return f
  }
  function kl(s) {
    if (s.na && typeof s.na == 'function') return s.na()
    if (!s.V || typeof s.V != 'function') {
      if (typeof Map < 'u' && s instanceof Map) return Array.from(s.keys())
      if (!(typeof Set < 'u' && s instanceof Set)) {
        if (g(s) || typeof s == 'string') {
          var f = []
          s = s.length
          for (var p = 0; p < s; p++) f.push(p)
          return f
        }
        ;(f = []), (p = 0)
        for (const y in s) f[p++] = y
        return f
      }
    }
  }
  function Na(s, f) {
    if (s.forEach && typeof s.forEach == 'function') s.forEach(f, void 0)
    else if (g(s) || typeof s == 'string')
      Array.prototype.forEach.call(s, f, void 0)
    else
      for (var p = kl(s), y = wl(s), M = y.length, $ = 0; $ < M; $++)
        f.call(void 0, y[$], p && p[$], s)
  }
  var wo = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  )
  function Zc(s, f) {
    if (s) {
      s = s.split('&')
      for (var p = 0; p < s.length; p++) {
        var y = s[p].indexOf('='),
          M = null
        if (0 <= y) {
          var $ = s[p].substring(0, y)
          M = s[p].substring(y + 1)
        } else $ = s[p]
        f($, M ? decodeURIComponent(M.replace(/\+/g, ' ')) : '')
      }
    }
  }
  function Gn(s) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      s instanceof Gn)
    ) {
      ;(this.h = s.h),
        Oi(this, s.j),
        (this.o = s.o),
        (this.g = s.g),
        ko(this, s.s),
        (this.l = s.l)
      var f = s.i,
        p = new Br()
      ;(p.i = f.i),
        f.g && ((p.g = new Map(f.g)), (p.h = f.h)),
        Ma(this, p),
        (this.m = s.m)
    } else
      s && (f = String(s).match(wo))
        ? ((this.h = !1),
          Oi(this, f[1] || '', !0),
          (this.o = Ri(f[2] || '')),
          (this.g = Ri(f[3] || '', !0)),
          ko(this, f[4]),
          (this.l = Ri(f[5] || '', !0)),
          Ma(this, f[6] || '', !0),
          (this.m = Ri(f[7] || '')))
        : ((this.h = !1), (this.i = new Br(null, this.h)))
  }
  Gn.prototype.toString = function () {
    var s = [],
      f = this.j
    f && s.push(Ur(f, _o, !0), ':')
    var p = this.g
    return (
      (p || f == 'file') &&
        (s.push('//'),
        (f = this.o) && s.push(Ur(f, _o, !0), '@'),
        s.push(
          encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (p = this.s),
        p != null && s.push(':', String(p))),
      (p = this.l) &&
        (this.g && p.charAt(0) != '/' && s.push('/'),
        s.push(Ur(p, p.charAt(0) == '/' ? _l : $r, !0))),
      (p = this.i.toString()) && s.push('?', p),
      (p = this.m) && s.push('#', Ur(p, ef)),
      s.join('')
    )
  }
  function Ht(s) {
    return new Gn(s)
  }
  function Oi(s, f, p) {
    ;(s.j = p ? Ri(f, !0) : f), s.j && (s.j = s.j.replace(/:$/, ''))
  }
  function ko(s, f) {
    if (f) {
      if (((f = Number(f)), isNaN(f) || 0 > f))
        throw Error('Bad port number ' + f)
      s.s = f
    } else s.s = null
  }
  function Ma(s, f, p) {
    f instanceof Br
      ? ((s.i = f), tf(s.i, s.h))
      : (p || (f = Ur(f, Sl)), (s.i = new Br(f, s.h)))
  }
  function Ae(s, f, p) {
    s.i.set(f, p)
  }
  function Fr(s) {
    return (
      Ae(
        s,
        'zx',
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      s
    )
  }
  function Ri(s, f) {
    return s
      ? f
        ? decodeURI(s.replace(/%25/g, '%2525'))
        : decodeURIComponent(s)
      : ''
  }
  function Ur(s, f, p) {
    return typeof s == 'string'
      ? ((s = encodeURI(s).replace(f, ja)),
        p && (s = s.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        s)
      : null
  }
  function ja(s) {
    return (
      (s = s.charCodeAt(0)),
      '%' + ((s >> 4) & 15).toString(16) + (s & 15).toString(16)
    )
  }
  var _o = /[#\/\?@]/g,
    $r = /[#\?:]/g,
    _l = /[#\?]/g,
    Sl = /[#\?@]/g,
    ef = /#/g
  function Br(s, f) {
    ;(this.h = this.g = null), (this.i = s || null), (this.j = !!f)
  }
  function On(s) {
    s.g ||
      ((s.g = new Map()),
      (s.h = 0),
      s.i &&
        Zc(s.i, function (f, p) {
          s.add(decodeURIComponent(f.replace(/\+/g, ' ')), p)
        }))
  }
  ;(e = Br.prototype),
    (e.add = function (s, f) {
      On(this), (this.i = null), (s = Hr(this, s))
      var p = this.g.get(s)
      return p || this.g.set(s, (p = [])), p.push(f), (this.h += 1), this
    })
  function Fa(s, f) {
    On(s),
      (f = Hr(s, f)),
      s.g.has(f) && ((s.i = null), (s.h -= s.g.get(f).length), s.g.delete(f))
  }
  function Ua(s, f) {
    return On(s), (f = Hr(s, f)), s.g.has(f)
  }
  ;(e.forEach = function (s, f) {
    On(this),
      this.g.forEach(function (p, y) {
        p.forEach(function (M) {
          s.call(f, M, y, this)
        }, this)
      }, this)
  }),
    (e.na = function () {
      On(this)
      const s = Array.from(this.g.values()),
        f = Array.from(this.g.keys()),
        p = []
      for (let y = 0; y < f.length; y++) {
        const M = s[y]
        for (let $ = 0; $ < M.length; $++) p.push(f[y])
      }
      return p
    }),
    (e.V = function (s) {
      On(this)
      let f = []
      if (typeof s == 'string')
        Ua(this, s) && (f = f.concat(this.g.get(Hr(this, s))))
      else {
        s = Array.from(this.g.values())
        for (let p = 0; p < s.length; p++) f = f.concat(s[p])
      }
      return f
    }),
    (e.set = function (s, f) {
      return (
        On(this),
        (this.i = null),
        (s = Hr(this, s)),
        Ua(this, s) && (this.h -= this.g.get(s).length),
        this.g.set(s, [f]),
        (this.h += 1),
        this
      )
    }),
    (e.get = function (s, f) {
      return s ? ((s = this.V(s)), 0 < s.length ? String(s[0]) : f) : f
    })
  function El(s, f, p) {
    Fa(s, f),
      0 < p.length && ((s.i = null), s.g.set(Hr(s, f), W(p)), (s.h += p.length))
  }
  e.toString = function () {
    if (this.i) return this.i
    if (!this.g) return ''
    const s = [],
      f = Array.from(this.g.keys())
    for (var p = 0; p < f.length; p++) {
      var y = f[p]
      const $ = encodeURIComponent(String(y)),
        ee = this.V(y)
      for (y = 0; y < ee.length; y++) {
        var M = $
        ee[y] !== '' && (M += '=' + encodeURIComponent(String(ee[y]))),
          s.push(M)
      }
    }
    return (this.i = s.join('&'))
  }
  function Hr(s, f) {
    return (f = String(f)), s.j && (f = f.toLowerCase()), f
  }
  function tf(s, f) {
    f &&
      !s.j &&
      (On(s),
      (s.i = null),
      s.g.forEach(function (p, y) {
        var M = y.toLowerCase()
        y != M && (Fa(this, y), El(this, M, p))
      }, s)),
      (s.j = f)
  }
  function xl(s, f) {
    const p = new Ci()
    if (d.Image) {
      const y = new Image()
      ;(y.onload = H(Qn, p, 'TestLoadImage: loaded', !0, f, y)),
        (y.onerror = H(Qn, p, 'TestLoadImage: error', !1, f, y)),
        (y.onabort = H(Qn, p, 'TestLoadImage: abort', !1, f, y)),
        (y.ontimeout = H(Qn, p, 'TestLoadImage: timeout', !1, f, y)),
        d.setTimeout(function () {
          y.ontimeout && y.ontimeout()
        }, 1e4),
        (y.src = s)
    } else f(!1)
  }
  function nf(s, f) {
    const p = new Ci(),
      y = new AbortController(),
      M = setTimeout(() => {
        y.abort(), Qn(p, 'TestPingServer: timeout', !1, f)
      }, 1e4)
    fetch(s, { signal: y.signal })
      .then(($) => {
        clearTimeout(M),
          $.ok
            ? Qn(p, 'TestPingServer: ok', !0, f)
            : Qn(p, 'TestPingServer: server error', !1, f)
      })
      .catch(() => {
        clearTimeout(M), Qn(p, 'TestPingServer: error', !1, f)
      })
  }
  function Qn(s, f, p, y, M) {
    try {
      M &&
        ((M.onload = null),
        (M.onerror = null),
        (M.onabort = null),
        (M.ontimeout = null)),
        y(p)
    } catch {}
  }
  function rf() {
    this.g = new Kc()
  }
  function of(s, f, p) {
    const y = p || ''
    try {
      Na(s, function (M, $) {
        let ee = M
        w(M) && (ee = Ti(M)), f.push(y + $ + '=' + encodeURIComponent(ee))
      })
    } catch (M) {
      throw (f.push(y + 'type=' + encodeURIComponent('_badmap')), M)
    }
  }
  function Vr(s) {
    ;(this.l = s.Ub || null), (this.j = s.eb || !1)
  }
  F(Vr, _a),
    (Vr.prototype.g = function () {
      return new So(this.l, this.j)
    }),
    (Vr.prototype.i = (function (s) {
      return function () {
        return s
      }
    })({}))
  function So(s, f) {
    qe.call(this),
      (this.D = s),
      (this.o = f),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ''),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = 'GET'),
      (this.A = ''),
      (this.g = !1),
      (this.v = this.j = this.l = null)
  }
  F(So, qe),
    (e = So.prototype),
    (e.open = function (s, f) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.B = s), (this.A = f), (this.readyState = 1), Ii(this)
    }),
    (e.send = function (s) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '))
      this.g = !0
      const f = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      }
      s && (f.body = s),
        (this.D || d)
          .fetch(new Request(this.A, f))
          .then(this.Sa.bind(this), this.ga.bind(this))
    }),
    (e.abort = function () {
      ;(this.response = this.responseText = ''),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel('Request was aborted.').catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Li(this)),
        (this.readyState = 0)
    }),
    (e.Sa = function (s) {
      if (
        this.g &&
        ((this.l = s),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = s.headers),
          (this.readyState = 2),
          Ii(this)),
        this.g && ((this.readyState = 3), Ii(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          s.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this))
        else if (typeof d.ReadableStream < 'u' && 'body' in s) {
          if (((this.j = s.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              )
            this.response = []
          } else
            (this.response = this.responseText = ''),
              (this.v = new TextDecoder())
          Tl(this)
        } else s.text().then(this.Ra.bind(this), this.ga.bind(this))
    })
  function Tl(s) {
    s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))
  }
  ;(e.Pa = function (s) {
    if (this.g) {
      if (this.o && s.value) this.response.push(s.value)
      else if (!this.o) {
        var f = s.value ? s.value : new Uint8Array(0)
        ;(f = this.v.decode(f, { stream: !s.done })) &&
          (this.response = this.responseText += f)
      }
      s.done ? Li(this) : Ii(this), this.readyState == 3 && Tl(this)
    }
  }),
    (e.Ra = function (s) {
      this.g && ((this.response = this.responseText = s), Li(this))
    }),
    (e.Qa = function (s) {
      this.g && ((this.response = s), Li(this))
    }),
    (e.ga = function () {
      this.g && Li(this)
    })
  function Li(s) {
    ;(s.readyState = 4), (s.l = null), (s.j = null), (s.v = null), Ii(s)
  }
  ;(e.setRequestHeader = function (s, f) {
    this.u.append(s, f)
  }),
    (e.getResponseHeader = function (s) {
      return (this.h && this.h.get(s.toLowerCase())) || ''
    }),
    (e.getAllResponseHeaders = function () {
      if (!this.h) return ''
      const s = [],
        f = this.h.entries()
      for (var p = f.next(); !p.done; )
        (p = p.value), s.push(p[0] + ': ' + p[1]), (p = f.next())
      return s.join(`\r
`)
    })
  function Ii(s) {
    s.onreadystatechange && s.onreadystatechange.call(s)
  }
  Object.defineProperty(So.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include'
    },
    set: function (s) {
      this.m = s ? 'include' : 'same-origin'
    },
  })
  function Cl(s) {
    let f = ''
    return (
      X(s, function (p, y) {
        ;(f += y),
          (f += ':'),
          (f += p),
          (f += `\r
`)
      }),
      f
    )
  }
  function Oe(s, f, p) {
    e: {
      for (y in p) {
        var y = !1
        break e
      }
      y = !0
    }
    y ||
      ((p = Cl(p)),
      typeof s == 'string'
        ? p != null && encodeURIComponent(String(p))
        : Ae(s, f, p))
  }
  function ce(s) {
    qe.call(this),
      (this.headers = new Map()),
      (this.o = s || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ''),
      (this.m = 0),
      (this.l = ''),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ''),
      (this.J = !1)
  }
  F(ce, qe)
  var af = /^https?$/i,
    sf = ['POST', 'PUT']
  ;(e = ce.prototype),
    (e.Ha = function (s) {
      this.J = s
    }),
    (e.ea = function (s, f, p, y) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            s
        )
      ;(f = f ? f.toUpperCase() : 'GET'),
        (this.D = s),
        (this.l = ''),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : xa.g()),
        (this.v = this.o ? cl(this.o) : cl(xa)),
        (this.g.onreadystatechange = _(this.Ea, this))
      try {
        ;(this.B = !0), this.g.open(f, String(s), !0), (this.B = !1)
      } catch ($) {
        Pl(this, $)
        return
      }
      if (((s = p || ''), (p = new Map(this.headers)), y))
        if (Object.getPrototypeOf(y) === Object.prototype)
          for (var M in y) p.set(M, y[M])
        else if (typeof y.keys == 'function' && typeof y.get == 'function')
          for (const $ of y.keys()) p.set($, y.get($))
        else throw Error('Unknown input type for opt_headers: ' + String(y))
      ;(y = Array.from(p.keys()).find(
        ($) => $.toLowerCase() == 'content-type'
      )),
        (M = d.FormData && s instanceof d.FormData),
        !(0 <= Array.prototype.indexOf.call(sf, f, void 0)) ||
          y ||
          M ||
          p.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          )
      for (const [$, ee] of p) this.g.setRequestHeader($, ee)
      this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J)
      try {
        $a(this), (this.u = !0), this.g.send(s), (this.u = !1)
      } catch ($) {
        Pl(this, $)
      }
    })
  function Pl(s, f) {
    ;(s.h = !1),
      s.g && ((s.j = !0), s.g.abort(), (s.j = !1)),
      (s.l = f),
      (s.m = 5),
      Ol(s),
      Eo(s)
  }
  function Ol(s) {
    s.A || ((s.A = !0), Ke(s, 'complete'), Ke(s, 'error'))
  }
  ;(e.abort = function (s) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = s || 7),
      Ke(this, 'complete'),
      Ke(this, 'abort'),
      Eo(this))
  }),
    (e.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Eo(this, !0)),
        ce.aa.N.call(this)
    }),
    (e.Ea = function () {
      this.s || (this.B || this.u || this.j ? Rl(this) : this.bb())
    }),
    (e.bb = function () {
      Rl(this)
    })
  function Rl(s) {
    if (s.h && typeof c < 'u' && (!s.v[1] || Rn(s) != 4 || s.Z() != 2)) {
      if (s.u && Rn(s) == 4) fo(s.Ea, 0, s)
      else if ((Ke(s, 'readystatechange'), Rn(s) == 4)) {
        s.h = !1
        try {
          const ee = s.Z()
          e: switch (ee) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var f = !0
              break e
            default:
              f = !1
          }
          var p
          if (!(p = f)) {
            var y
            if ((y = ee === 0)) {
              var M = String(s.D).match(wo)[1] || null
              !M &&
                d.self &&
                d.self.location &&
                (M = d.self.location.protocol.slice(0, -1)),
                (y = !af.test(M ? M.toLowerCase() : ''))
            }
            p = y
          }
          if (p) Ke(s, 'complete'), Ke(s, 'success')
          else {
            s.m = 6
            try {
              var $ = 2 < Rn(s) ? s.g.statusText : ''
            } catch {
              $ = ''
            }
            ;(s.l = $ + ' [' + s.Z() + ']'), Ol(s)
          }
        } finally {
          Eo(s)
        }
      }
    }
  }
  function Eo(s, f) {
    if (s.g) {
      $a(s)
      const p = s.g,
        y = s.v[0] ? () => {} : null
      ;(s.g = null), (s.v = null), f || Ke(s, 'ready')
      try {
        p.onreadystatechange = y
      } catch {}
    }
  }
  function $a(s) {
    s.I && (d.clearTimeout(s.I), (s.I = null))
  }
  e.isActive = function () {
    return !!this.g
  }
  function Rn(s) {
    return s.g ? s.g.readyState : 0
  }
  ;(e.Z = function () {
    try {
      return 2 < Rn(this) ? this.g.status : -1
    } catch {
      return -1
    }
  }),
    (e.oa = function () {
      try {
        return this.g ? this.g.responseText : ''
      } catch {
        return ''
      }
    }),
    (e.Oa = function (s) {
      if (this.g) {
        var f = this.g.responseText
        return s && f.indexOf(s) == 0 && (f = f.substring(s.length)), ka(f)
      }
    })
  function et(s) {
    try {
      if (!s.g) return null
      if ('response' in s.g) return s.g.response
      switch (s.H) {
        case '':
        case 'text':
          return s.g.responseText
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in s.g) return s.g.mozResponseArrayBuffer
      }
      return null
    } catch {
      return null
    }
  }
  function Ba(s) {
    const f = {}
    s = ((s.g && 2 <= Rn(s) && s.g.getAllResponseHeaders()) || '').split(`\r
`)
    for (let y = 0; y < s.length; y++) {
      if (x(s[y])) continue
      var p = D(s[y])
      const M = p[0]
      if (((p = p[1]), typeof p != 'string')) continue
      p = p.trim()
      const $ = f[M] || []
      ;(f[M] = $), $.push(p)
    }
    S(f, function (y) {
      return y.join(', ')
    })
  }
  ;(e.Ba = function () {
    return this.m
  }),
    (e.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l)
    })
  function nn(s, f, p) {
    return (p && p.internalChannelParams && p.internalChannelParams[s]) || f
  }
  function Ha(s) {
    ;(this.Aa = 0),
      (this.i = []),
      (this.j = new Ci()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = nn('failFast', !1, s)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = nn('baseRetryDelayMs', 5e3, s)),
      (this.cb = nn('retryDelaySeedMs', 1e4, s)),
      (this.Wa = nn('forwardChannelMaxRetries', 2, s)),
      (this.wa = nn('forwardChannelRequestTimeoutMs', 2e4, s)),
      (this.pa = (s && s.xmlHttpFactory) || void 0),
      (this.Xa = (s && s.Tb) || void 0),
      (this.Ca = (s && s.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (s && s.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new La(s && s.concurrentRequestLimit)),
      (this.Da = new rf()),
      (this.P = (s && s.fastHandshake) || !1),
      (this.O = (s && s.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (s && s.Rb) || !1),
      s && s.xa && this.j.xa(),
      s && s.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && s && s.detectBufferingProxy) || !1),
      (this.ja = void 0),
      s &&
        s.longPollingTimeout &&
        0 < s.longPollingTimeout &&
        (this.ja = s.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null)
  }
  ;(e = Ha.prototype),
    (e.la = 8),
    (e.G = 1),
    (e.connect = function (s, f, p, y) {
      dt(0),
        (this.W = s),
        (this.H = f || {}),
        p && y !== void 0 && ((this.H.OSID = p), (this.H.OAID = y)),
        (this.F = this.X),
        (this.I = An(this, null, this.W)),
        Di(this)
    })
  function Ai(s) {
    if ((Va(s), s.G == 3)) {
      var f = s.U++,
        p = Ht(s.I)
      if (
        (Ae(p, 'SID', s.K),
        Ae(p, 'RID', f),
        Ae(p, 'TYPE', 'terminate'),
        Wr(s, p),
        (f = new Kn(s, s.j, f)),
        (f.L = 2),
        (f.v = Fr(Ht(p))),
        (p = !1),
        d.navigator && d.navigator.sendBeacon)
      )
        try {
          p = d.navigator.sendBeacon(f.v.toString(), '')
        } catch {}
      !p && d.Image && ((new Image().src = f.v), (p = !0)),
        p || ((f.g = xo(f.j, null)), f.g.ea(f.v)),
        (f.F = Date.now()),
        bo(f)
    }
    ze(s)
  }
  function pt(s) {
    s.g && (kt(s), s.g.cancel(), (s.g = null))
  }
  function Va(s) {
    pt(s),
      s.u && (d.clearTimeout(s.u), (s.u = null)),
      zi(s),
      s.h.cancel(),
      s.s && (typeof s.s == 'number' && d.clearTimeout(s.s), (s.s = null))
  }
  function Di(s) {
    if (!Ia(s.h) && !s.s) {
      s.s = !0
      var f = s.Ga
      Ee || ue(), Z || (Ee(), (Z = !0)), oe.add(f, s), (s.B = 0)
    }
  }
  function Ll(s, f) {
    return Aa(s.h) >= s.h.j - (s.s ? 1 : 0)
      ? !1
      : s.s
      ? ((s.i = f.D.concat(s.i)), !0)
      : s.G == 1 || s.G == 2 || s.B >= (s.Va ? 0 : s.Wa)
      ? !1
      : ((s.s = cr(_(s.Ga, s, f), Ni(s, s.B))), s.B++, !0)
  }
  e.Ga = function (s) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!s) {
          ;(this.U = Math.floor(1e5 * Math.random())), (s = this.U++)
          const M = new Kn(this, this.j, s)
          let $ = this.o
          if (
            (this.S && ($ ? (($ = k($)), P($, this.S)) : ($ = this.S)),
            this.m !== null || this.O || ((M.H = $), ($ = null)),
            this.P)
          )
            e: {
              for (var f = 0, p = 0; p < this.i.length; p++) {
                t: {
                  var y = this.i[p]
                  if (
                    '__data__' in y.map &&
                    ((y = y.map.__data__), typeof y == 'string')
                  ) {
                    y = y.length
                    break t
                  }
                  y = void 0
                }
                if (y === void 0) break
                if (((f += y), 4096 < f)) {
                  f = p
                  break e
                }
                if (f === 4096 || p === this.i.length - 1) {
                  f = p + 1
                  break e
                }
              }
              f = 1e3
            }
          else f = 1e3
          ;(f = qa(this, M, f)),
            (p = Ht(this.I)),
            Ae(p, 'RID', s),
            Ae(p, 'CVER', 22),
            this.D && Ae(p, 'X-HTTP-Session-Id', this.D),
            Wr(this, p),
            $ &&
              (this.O
                ? (f = 'headers=' + encodeURIComponent(String(Cl($))) + '&' + f)
                : this.m && Oe(p, this.m, $)),
            za(this.h, M),
            this.Ua && Ae(p, 'TYPE', 'init'),
            this.P
              ? (Ae(p, '$req', f),
                Ae(p, 'SID', 'null'),
                (M.T = !0),
                Pa(M, p, null))
              : Pa(M, p, f),
            (this.G = 2)
        }
      } else
        this.G == 3 &&
          (s ? Wa(this, s) : this.i.length == 0 || Ia(this.h) || Wa(this))
  }
  function Wa(s, f) {
    var p
    f ? (p = f.l) : (p = s.U++)
    const y = Ht(s.I)
    Ae(y, 'SID', s.K),
      Ae(y, 'RID', p),
      Ae(y, 'AID', s.T),
      Wr(s, y),
      s.m && s.o && Oe(y, s.m, s.o),
      (p = new Kn(s, s.j, p, s.B + 1)),
      s.m === null && (p.H = s.o),
      f && (s.i = f.D.concat(s.i)),
      (f = qa(s, p, 1e3)),
      (p.I = Math.round(0.5 * s.wa) + Math.round(0.5 * s.wa * Math.random())),
      za(s.h, p),
      Pa(p, y, f)
  }
  function Wr(s, f) {
    s.H &&
      X(s.H, function (p, y) {
        Ae(f, y, p)
      }),
      s.l &&
        Na({}, function (p, y) {
          Ae(f, y, p)
        })
  }
  function qa(s, f, p) {
    p = Math.min(s.i.length, p)
    var y = s.l ? _(s.l.Na, s.l, s) : null
    e: {
      var M = s.i
      let $ = -1
      for (;;) {
        const ee = ['count=' + p]
        $ == -1
          ? 0 < p
            ? (($ = M[0].g), ee.push('ofs=' + $))
            : ($ = 0)
          : ee.push('ofs=' + $)
        let Re = !0
        for (let tt = 0; tt < p; tt++) {
          let xe = M[tt].g
          const nt = M[tt].map
          if (((xe -= $), 0 > xe)) ($ = Math.max(0, M[tt].g - 100)), (Re = !1)
          else
            try {
              of(nt, ee, 'req' + xe + '_')
            } catch {
              y && y(nt)
            }
        }
        if (Re) {
          y = ee.join('&')
          break e
        }
      }
    }
    return (s = s.i.splice(0, p)), (f.D = s), y
  }
  function wt(s) {
    if (!s.g && !s.u) {
      s.Y = 1
      var f = s.Fa
      Ee || ue(), Z || (Ee(), (Z = !0)), oe.add(f, s), (s.v = 0)
    }
  }
  function Ka(s) {
    return s.g || s.u || 3 <= s.v
      ? !1
      : (s.Y++, (s.u = cr(_(s.Fa, s), Ni(s, s.v))), s.v++, !0)
  }
  ;(e.Fa = function () {
    if (
      ((this.u = null),
      Il(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var s = 2 * this.R
      this.j.info('BP detection timer enabled: ' + s),
        (this.A = cr(_(this.ab, this), s))
    }
  }),
    (e.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        dt(10),
        pt(this),
        Il(this))
    })
  function kt(s) {
    s.A != null && (d.clearTimeout(s.A), (s.A = null))
  }
  function Il(s) {
    ;(s.g = new Kn(s, s.j, 'rpc', s.Y)),
      s.m === null && (s.g.H = s.o),
      (s.g.O = 0)
    var f = Ht(s.qa)
    Ae(f, 'RID', 'rpc'),
      Ae(f, 'SID', s.K),
      Ae(f, 'AID', s.T),
      Ae(f, 'CI', s.F ? '0' : '1'),
      !s.F && s.ja && Ae(f, 'TO', s.ja),
      Ae(f, 'TYPE', 'xmlhttp'),
      Wr(s, f),
      s.m && s.o && Oe(f, s.m, s.o),
      s.L && (s.g.I = s.L)
    var p = s.g
    ;(s = s.ia),
      (p.L = 1),
      (p.v = Fr(Ht(f))),
      (p.m = null),
      (p.P = !0),
      ml(p, s)
  }
  e.Za = function () {
    this.C != null && ((this.C = null), pt(this), Ka(this), dt(19))
  }
  function zi(s) {
    s.C != null && (d.clearTimeout(s.C), (s.C = null))
  }
  function Ln(s, f) {
    var p = null
    if (s.g == f) {
      zi(s), kt(s), (s.g = null)
      var y = 2
    } else if (Da(s.h, f)) (p = f.D), yl(s.h, f), (y = 1)
    else return
    if (s.G != 0) {
      if (f.o)
        if (y == 1) {
          ;(p = f.m ? f.m.length : 0), (f = Date.now() - f.F)
          var M = s.B
          ;(y = Sa()), Ke(y, new pl(y, p)), Di(s)
        } else wt(s)
      else if (
        ((M = f.s),
        M == 3 ||
          (M == 0 && 0 < f.X) ||
          !((y == 1 && Ll(s, f)) || (y == 2 && Ka(s))))
      )
        switch ((p && 0 < p.length && ((f = s.h), (f.i = f.i.concat(p))), M)) {
          case 1:
            In(s, 5)
            break
          case 4:
            In(s, 10)
            break
          case 3:
            In(s, 6)
            break
          default:
            In(s, 2)
        }
    }
  }
  function Ni(s, f) {
    let p = s.Ta + Math.floor(Math.random() * s.cb)
    return s.isActive() || (p *= 2), p * f
  }
  function In(s, f) {
    if ((s.j.info('Error code ' + f), f == 2)) {
      var p = _(s.fb, s),
        y = s.Xa
      const M = !y
      ;(y = new Gn(y || '//www.google.com/images/cleardot.gif')),
        (d.location && d.location.protocol == 'http') || Oi(y, 'https'),
        Fr(y),
        M ? xl(y.toString(), p) : nf(y.toString(), p)
    } else dt(2)
    ;(s.G = 0), s.l && s.l.sa(f), ze(s), Va(s)
  }
  e.fb = function (s) {
    s
      ? (this.j.info('Successfully pinged google.com'), dt(2))
      : (this.j.info('Failed to ping google.com'), dt(1))
  }
  function ze(s) {
    if (((s.G = 0), (s.ka = []), s.l)) {
      const f = bl(s.h)
      ;(f.length != 0 || s.i.length != 0) &&
        (Q(s.ka, f),
        Q(s.ka, s.i),
        (s.h.i.length = 0),
        W(s.i),
        (s.i.length = 0)),
        s.l.ra()
    }
  }
  function An(s, f, p) {
    var y = p instanceof Gn ? Ht(p) : new Gn(p)
    if (y.g != '') f && (y.g = f + '.' + y.g), ko(y, y.s)
    else {
      var M = d.location
      ;(y = M.protocol),
        (f = f ? f + '.' + M.hostname : M.hostname),
        (M = +M.port)
      var $ = new Gn(null)
      y && Oi($, y), f && ($.g = f), M && ko($, M), p && ($.l = p), (y = $)
    }
    return (
      (p = s.D),
      (f = s.ya),
      p && f && Ae(y, p, f),
      Ae(y, 'VER', s.la),
      Wr(s, y),
      y
    )
  }
  function xo(s, f, p) {
    if (f && !s.J)
      throw Error("Can't create secondary domain capable XhrIo object.")
    return (
      (f = s.Ca && !s.pa ? new ce(new Vr({ eb: p })) : new ce(s.pa)),
      f.Ha(s.J),
      f
    )
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this)
  }
  function Al() {}
  ;(e = Al.prototype),
    (e.ua = function () {}),
    (e.ta = function () {}),
    (e.sa = function () {}),
    (e.ra = function () {}),
    (e.isActive = function () {
      return !0
    }),
    (e.Na = function () {})
  function _t(s, f) {
    qe.call(this),
      (this.g = new Ha(f)),
      (this.l = s),
      (this.h = (f && f.messageUrlParams) || null),
      (s = (f && f.messageHeaders) || null),
      f &&
        f.clientProtocolHeaderRequired &&
        (s
          ? (s['X-Client-Protocol'] = 'webchannel')
          : (s = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = s),
      (s = (f && f.initMessageHeaders) || null),
      f &&
        f.messageContentType &&
        (s
          ? (s['X-WebChannel-Content-Type'] = f.messageContentType)
          : (s = { 'X-WebChannel-Content-Type': f.messageContentType })),
      f &&
        f.va &&
        (s
          ? (s['X-WebChannel-Client-Profile'] = f.va)
          : (s = { 'X-WebChannel-Client-Profile': f.va })),
      (this.g.S = s),
      (s = f && f.Sb) && !x(s) && (this.g.m = s),
      (this.v = (f && f.supportsCrossDomainXhr) || !1),
      (this.u = (f && f.sendRawJson) || !1),
      (f = f && f.httpSessionIdParam) &&
        !x(f) &&
        ((this.g.D = f),
        (s = this.h),
        s !== null && f in s && ((s = this.h), f in s && delete s[f])),
      (this.j = new qr(this))
  }
  F(_t, qe),
    (_t.prototype.m = function () {
      ;(this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }),
    (_t.prototype.close = function () {
      Ai(this.g)
    }),
    (_t.prototype.o = function (s) {
      var f = this.g
      if (typeof s == 'string') {
        var p = {}
        ;(p.__data__ = s), (s = p)
      } else this.u && ((p = {}), (p.__data__ = Ti(s)), (s = p))
      f.i.push(new Xc(f.Ya++, s)), f.G == 3 && Di(f)
    }),
    (_t.prototype.N = function () {
      ;(this.g.l = null),
        delete this.j,
        Ai(this.g),
        delete this.g,
        _t.aa.N.call(this)
    })
  function Dl(s) {
    mo.call(this),
      s.__headers__ &&
        ((this.headers = s.__headers__),
        (this.statusCode = s.__status__),
        delete s.__headers__,
        delete s.__status__)
    var f = s.__sm__
    if (f) {
      e: {
        for (const p in f) {
          s = p
          break e
        }
        s = void 0
      }
      ;(this.i = s) &&
        ((s = this.i), (f = f !== null && s in f ? f[s] : void 0)),
        (this.data = f)
    } else this.data = s
  }
  F(Dl, mo)
  function zl() {
    vo.call(this), (this.status = 1)
  }
  F(zl, vo)
  function qr(s) {
    this.g = s
  }
  F(qr, Al),
    (qr.prototype.ua = function () {
      Ke(this.g, 'a')
    }),
    (qr.prototype.ta = function (s) {
      Ke(this.g, new Dl(s))
    }),
    (qr.prototype.sa = function (s) {
      Ke(this.g, new zl())
    }),
    (qr.prototype.ra = function () {
      Ke(this.g, 'b')
    }),
    (_t.prototype.send = _t.prototype.o),
    (_t.prototype.open = _t.prototype.m),
    (_t.prototype.close = _t.prototype.close),
    (qe.prototype.listen = qe.prototype.K),
    (ce.prototype.listenOnce = ce.prototype.L),
    (ce.prototype.getLastError = ce.prototype.Ka),
    (ce.prototype.getLastErrorCode = ce.prototype.Ba),
    (ce.prototype.getStatus = ce.prototype.Z),
    (ce.prototype.getResponseJson = ce.prototype.Oa),
    (ce.prototype.getResponseText = ce.prototype.oa),
    (ce.prototype.send = ce.prototype.ea),
    (ce.prototype.setWithCredentials = ce.prototype.Ha)
}).apply(
  typeof Nu < 'u'
    ? Nu
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
const t0 = '@firebase/firestore'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mt {
  constructor(t) {
    this.uid = t
  }
  isAuthenticated() {
    return this.uid != null
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user'
  }
  isEqual(t) {
    return t.uid === this.uid
  }
}
;(Mt.UNAUTHENTICATED = new Mt(null)),
  (Mt.GOOGLE_CREDENTIALS = new Mt('google-credentials-uid')),
  (Mt.FIRST_PARTY = new Mt('first-party-uid')),
  (Mt.MOCK_USER = new Mt('mock-user'))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let al = '11.0.0'
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const da = new V1('@firebase/firestore')
function Bn(e, ...t) {
  if (da.logLevel <= De.DEBUG) {
    const n = t.map(Ip)
    da.debug(`Firestore (${al}): ${e}`, ...n)
  }
}
function J1(e, ...t) {
  if (da.logLevel <= De.ERROR) {
    const n = t.map(Ip)
    da.error(`Firestore (${al}): ${e}`, ...n)
  }
}
function B9(e, ...t) {
  if (da.logLevel <= De.WARN) {
    const n = t.map(Ip)
    da.warn(`Firestore (${al}): ${e}`, ...n)
  }
}
function Ip(e) {
  if (typeof e == 'string') return e
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (t) {
      return JSON.stringify(t)
    })(e)
  } catch {
    return e
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ap(e = 'Unexpected state') {
  const t = `FIRESTORE (${al}) INTERNAL ASSERTION FAILED: ` + e
  throw (J1(t), new Error(t))
}
function Is(e, t) {
  e || Ap()
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qt = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
}
class Jt extends va {
  constructor(t, n) {
    super(t, n),
      (this.code = t),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`)
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class As {
  constructor() {
    this.promise = new Promise((t, n) => {
      ;(this.resolve = t), (this.reject = n)
    })
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X1 {
  constructor(t, n) {
    ;(this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${t}`)
  }
}
class H9 {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(Mt.UNAUTHENTICATED))
  }
  shutdown() {}
}
class V9 {
  constructor(t) {
    ;(this.token = t), (this.changeListener = null)
  }
  getToken() {
    return Promise.resolve(this.token)
  }
  invalidateToken() {}
  start(t, n) {
    ;(this.changeListener = n), t.enqueueRetryable(() => n(this.token.user))
  }
  shutdown() {
    this.changeListener = null
  }
}
class W9 {
  constructor(t) {
    ;(this.t = t),
      (this.currentUser = Mt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(t, n) {
    Is(this.o === void 0)
    let i = this.i
    const a = (g) => (this.i !== i ? ((i = this.i), n(g)) : Promise.resolve())
    let l = new As()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        l.resolve(),
        (l = new As()),
        t.enqueueRetryable(() => a(this.currentUser))
    }
    const c = () => {
        const g = l
        t.enqueueRetryable(async () => {
          await g.promise, await a(this.currentUser)
        })
      },
      d = (g) => {
        Bn('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = g),
          this.o && (this.auth.addAuthTokenListener(this.o), c())
      }
    this.t.onInit((g) => d(g)),
      setTimeout(() => {
        if (!this.auth) {
          const g = this.t.getImmediate({ optional: !0 })
          g
            ? d(g)
            : (Bn('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              l.resolve(),
              (l = new As()))
        }
      }, 0),
      c()
  }
  getToken() {
    const t = this.i,
      n = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((i) =>
              this.i !== t
                ? (Bn(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : i
                ? (Is(typeof i.accessToken == 'string'),
                  new X1(i.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    )
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0)
  }
  u() {
    const t = this.auth && this.auth.getUid()
    return Is(t === null || typeof t == 'string'), new Mt(t)
  }
}
class q9 {
  constructor(t, n, i) {
    ;(this.l = t),
      (this.h = n),
      (this.P = i),
      (this.type = 'FirstParty'),
      (this.user = Mt.FIRST_PARTY),
      (this.I = new Map())
  }
  T() {
    return this.P ? this.P() : null
  }
  get headers() {
    this.I.set('X-Goog-AuthUser', this.l)
    const t = this.T()
    return (
      t && this.I.set('Authorization', t),
      this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
      this.I
    )
  }
}
class K9 {
  constructor(t, n, i) {
    ;(this.l = t), (this.h = n), (this.P = i)
  }
  getToken() {
    return Promise.resolve(new q9(this.l, this.h, this.P))
  }
  start(t, n) {
    t.enqueueRetryable(() => n(Mt.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class Y9 {
  constructor(t) {
    ;(this.value = t),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set('x-firebase-appcheck', this.value)
  }
}
class G9 {
  constructor(t) {
    ;(this.A = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null)
  }
  start(t, n) {
    Is(this.o === void 0)
    const i = (l) => {
      l.error != null &&
        Bn(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`
        )
      const c = l.token !== this.R
      return (
        (this.R = l.token),
        Bn(
          'FirebaseAppCheckTokenProvider',
          `Received ${c ? 'new' : 'existing'} token.`
        ),
        c ? n(l.token) : Promise.resolve()
      )
    }
    this.o = (l) => {
      t.enqueueRetryable(() => i(l))
    }
    const a = (l) => {
      Bn('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = l),
        this.o && this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((l) => a(l)),
      setTimeout(() => {
        if (!this.appCheck) {
          const l = this.A.getImmediate({ optional: !0 })
          l
            ? a(l)
            : Bn('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected')
        }
      }, 0)
  }
  getToken() {
    const t = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((n) =>
              n
                ? (Is(typeof n.token == 'string'),
                  (this.R = n.token),
                  new Y9(n.token))
                : null
            )
        : Promise.resolve(null)
    )
  }
  invalidateToken() {
    this.forceRefresh = !0
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0)
  }
}
function Q9(e) {
  return e.name === 'IndexedDbTransactionError'
}
class Ec {
  constructor(t, n) {
    ;(this.projectId = t), (this.database = n || '(default)')
  }
  static empty() {
    return new Ec('', '')
  }
  get isDefaultDatabase() {
    return this.database === '(default)'
  }
  isEqual(t) {
    return (
      t instanceof Ec &&
      t.projectId === this.projectId &&
      t.database === this.database
    )
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var n0, _e
;((_e = n0 || (n0 = {}))[(_e.OK = 0)] = 'OK'),
  (_e[(_e.CANCELLED = 1)] = 'CANCELLED'),
  (_e[(_e.UNKNOWN = 2)] = 'UNKNOWN'),
  (_e[(_e.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (_e[(_e.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (_e[(_e.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (_e[(_e.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (_e[(_e.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (_e[(_e.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (_e[(_e.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (_e[(_e.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (_e[(_e.ABORTED = 10)] = 'ABORTED'),
  (_e[(_e.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (_e[(_e.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (_e[(_e.INTERNAL = 13)] = 'INTERNAL'),
  (_e[(_e.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (_e[(_e.DATA_LOSS = 15)] = 'DATA_LOSS')
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new Q1([4294967295, 4294967295], 0)
function Ah() {
  return typeof document < 'u' ? document : null
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J9 {
  constructor(t, n, i = 1e3, a = 1.5, l = 6e4) {
    ;(this.ui = t),
      (this.timerId = n),
      (this.ko = i),
      (this.qo = a),
      (this.Qo = l),
      (this.Ko = 0),
      (this.$o = null),
      (this.Uo = Date.now()),
      this.reset()
  }
  reset() {
    this.Ko = 0
  }
  Wo() {
    this.Ko = this.Qo
  }
  Go(t) {
    this.cancel()
    const n = Math.floor(this.Ko + this.zo()),
      i = Math.max(0, Date.now() - this.Uo),
      a = Math.max(0, n - i)
    a > 0 &&
      Bn(
        'ExponentialBackoff',
        `Backing off for ${a} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        a,
        () => ((this.Uo = Date.now()), t())
      )),
      (this.Ko *= this.qo),
      this.Ko < this.ko && (this.Ko = this.ko),
      this.Ko > this.Qo && (this.Ko = this.Qo)
  }
  jo() {
    this.$o !== null && (this.$o.skipDelay(), (this.$o = null))
  }
  cancel() {
    this.$o !== null && (this.$o.cancel(), (this.$o = null))
  }
  zo() {
    return (Math.random() - 0.5) * this.Ko
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dp {
  constructor(t, n, i, a, l) {
    ;(this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = i),
      (this.op = a),
      (this.removalCallback = l),
      (this.deferred = new As()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((c) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(t, n, i, a, l) {
    const c = Date.now() + i,
      d = new Dp(t, n, c, a, l)
    return d.start(i), d
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t)
  }
  skipDelay() {
    return this.handleDelayElapsed()
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new Jt(Qt.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))
      ))
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    )
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null))
  }
}
var r0, i0
;((i0 = r0 || (r0 = {})).ea = 'default'), (i0.Cache = 'cache')
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function X9(e) {
  const t = {}
  return e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const o0 = new Map()
function Z9(e, t, n, i) {
  if (t === !0 && i === !0)
    throw new Jt(Qt.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`)
}
function eT(e) {
  if (e === void 0) return 'undefined'
  if (e === null) return 'null'
  if (typeof e == 'string')
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e)
  if (typeof e == 'number' || typeof e == 'boolean') return '' + e
  if (typeof e == 'object') {
    if (e instanceof Array) return 'an array'
    {
      const t = (function (n) {
        return n.constructor ? n.constructor.name : null
      })(e)
      return t ? `a custom ${t} object` : 'an object'
    }
  }
  return typeof e == 'function' ? 'a function' : Ap()
}
function tT(e, t) {
  if (('_delegate' in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new Jt(
        Qt.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = eT(e)
      throw new Jt(
        Qt.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${n}`
      )
    }
  }
  return e
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a0 {
  constructor(t) {
    var n, i
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new Jt(
          Qt.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        )
      ;(this.host = 'firestore.googleapis.com'), (this.ssl = !0)
    } else
      (this.host = t.host),
        (this.ssl = (n = t.ssl) === null || n === void 0 || n)
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new Jt(
          Qt.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        )
      this.cacheSizeBytes = t.cacheSizeBytes
    }
    Z9(
      'experimentalForceLongPolling',
      t.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      t.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = X9(
        (i = t.experimentalLongPollingOptions) !== null && i !== void 0 ? i : {}
      )),
      (function (a) {
        if (a.timeoutSeconds !== void 0) {
          if (isNaN(a.timeoutSeconds))
            throw new Jt(
              Qt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`
            )
          if (a.timeoutSeconds < 5)
            throw new Jt(
              Qt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (a.timeoutSeconds > 30)
            throw new Jt(
              Qt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`
            )
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams)
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (n, i) {
        return n.timeoutSeconds === i.timeoutSeconds
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    )
  }
}
class Z1 {
  constructor(t, n, i, a) {
    ;(this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = i),
      (this._app = a),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new a0({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = 'notTerminated')
  }
  get app() {
    if (!this._app)
      throw new Jt(
        Qt.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      )
    return this._app
  }
  get _initialized() {
    return this._settingsFrozen
  }
  get _terminated() {
    return this._terminateTask !== 'notTerminated'
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new Jt(
        Qt.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new a0(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new H9()
          switch (n.type) {
            case 'firstParty':
              return new K9(
                n.sessionIndex || '0',
                n.iamToken || null,
                n.authTokenFactory || null
              )
            case 'provider':
              return n.client
            default:
              throw new Jt(
                Qt.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              )
          }
        })(t.credentials))
  }
  _getSettings() {
    return this._settings
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings
  }
  _delete() {
    return (
      this._terminateTask === 'notTerminated' &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    )
  }
  async _restart() {
    this._terminateTask === 'notTerminated'
      ? await this._terminate()
      : (this._terminateTask = 'notTerminated')
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    }
  }
  _terminate() {
    return (
      (function (t) {
        const n = o0.get(t)
        n &&
          (Bn('ComponentProvider', 'Removing Datastore'),
          o0.delete(t),
          n.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function nT(e, t, n, i = {}) {
  var a
  const l = (e = tT(e, Z1))._getSettings(),
    c = `${t}:${n}`
  if (
    (l.host !== 'firestore.googleapis.com' &&
      l.host !== c &&
      B9(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ),
    e._setSettings(Object.assign(Object.assign({}, l), { host: c, ssl: !1 })),
    i.mockUserToken)
  ) {
    let d, g
    if (typeof i.mockUserToken == 'string')
      (d = i.mockUserToken), (g = Mt.MOCK_USER)
    else {
      d = T3(
        i.mockUserToken,
        (a = e._app) === null || a === void 0 ? void 0 : a.options.projectId
      )
      const w = i.mockUserToken.sub || i.mockUserToken.user_id
      if (!w)
        throw new Jt(
          Qt.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      g = new Mt(w)
    }
    e._authCredentials = new V9(new X1(d, g))
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s0 {
  constructor(t = Promise.resolve()) {
    ;(this.Pu = []),
      (this.Iu = !1),
      (this.Tu = []),
      (this.Eu = null),
      (this.du = !1),
      (this.Au = !1),
      (this.Ru = []),
      (this.t_ = new J9(this, 'async_queue_retry')),
      (this.Vu = () => {
        const i = Ah()
        i &&
          Bn('AsyncQueue', 'Visibility state changed to ' + i.visibilityState),
          this.t_.jo()
      }),
      (this.mu = t)
    const n = Ah()
    n &&
      typeof n.addEventListener == 'function' &&
      n.addEventListener('visibilitychange', this.Vu)
  }
  get isShuttingDown() {
    return this.Iu
  }
  enqueueAndForget(t) {
    this.enqueue(t)
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.fu(), this.gu(t)
  }
  enterRestrictedMode(t) {
    if (!this.Iu) {
      ;(this.Iu = !0), (this.Au = t || !1)
      const n = Ah()
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Vu)
    }
  }
  enqueue(t) {
    if ((this.fu(), this.Iu)) return new Promise(() => {})
    const n = new As()
    return this.gu(() =>
      this.Iu && this.Au
        ? Promise.resolve()
        : (t().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise)
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Pu.push(t), this.pu()))
  }
  async pu() {
    if (this.Pu.length !== 0) {
      try {
        await this.Pu[0](), this.Pu.shift(), this.t_.reset()
      } catch (t) {
        if (!Q9(t)) throw t
        Bn('AsyncQueue', 'Operation failed with retryable error: ' + t)
      }
      this.Pu.length > 0 && this.t_.Go(() => this.pu())
    }
  }
  gu(t) {
    const n = this.mu.then(
      () => (
        (this.du = !0),
        t()
          .catch((i) => {
            ;(this.Eu = i), (this.du = !1)
            const a = (function (l) {
              let c = l.message || ''
              return (
                l.stack &&
                  (c = l.stack.includes(l.message)
                    ? l.stack
                    : l.message +
                      `
` +
                      l.stack),
                c
              )
            })(i)
            throw (J1('INTERNAL UNHANDLED ERROR: ', a), i)
          })
          .then((i) => ((this.du = !1), i))
      )
    )
    return (this.mu = n), n
  }
  enqueueAfterDelay(t, n, i) {
    this.fu(), this.Ru.indexOf(t) > -1 && (n = 0)
    const a = Dp.createAndSchedule(this, t, n, i, (l) => this.yu(l))
    return this.Tu.push(a), a
  }
  fu() {
    this.Eu && Ap()
  }
  verifyOperationInProgress() {}
  async wu() {
    let t
    do (t = this.mu), await t
    while (t !== this.mu)
  }
  Su(t) {
    for (const n of this.Tu) if (n.timerId === t) return !0
    return !1
  }
  bu(t) {
    return this.wu().then(() => {
      this.Tu.sort((n, i) => n.targetTimeMs - i.targetTimeMs)
      for (const n of this.Tu)
        if ((n.skipDelay(), t !== 'all' && n.timerId === t)) break
      return this.wu()
    })
  }
  Du(t) {
    this.Ru.push(t)
  }
  yu(t) {
    const n = this.Tu.indexOf(t)
    this.Tu.splice(n, 1)
  }
}
class rT extends Z1 {
  constructor(t, n, i, a) {
    super(t, n, i, a),
      (this.type = 'firestore'),
      (this._queue = new s0()),
      (this._persistenceKey = a?.name || '[DEFAULT]')
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate()
      ;(this._queue = new s0(t)), (this._firestoreClient = void 0), await t
    }
  }
}
function iT(e, t) {
  const n = typeof e == 'object' ? e : I9(),
    i = typeof e == 'string' ? e : t || '(default)',
    a = P9(n, 'firestore').getImmediate({ identifier: i })
  if (!a._initialized) {
    const l = E3('firestore')
    l && nT(a, ...l)
  }
  return a
}
;(function (e, t = !0) {
  ;(function (n) {
    al = n
  })(L9),
    Sc(
      new Xs(
        'firestore',
        (n, { instanceIdentifier: i, options: a }) => {
          const l = n.getProvider('app').getImmediate(),
            c = new rT(
              new W9(n.getProvider('auth-internal')),
              new G9(n.getProvider('app-check-internal')),
              (function (d, g) {
                if (
                  !Object.prototype.hasOwnProperty.apply(d.options, [
                    'projectId',
                  ])
                )
                  throw new Jt(
                    Qt.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new Ec(d.options.projectId, g)
              })(l, i),
              l
            )
          return (
            (a = Object.assign({ useFetchStreams: t }, a)), c._setSettings(a), c
          )
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    oa(t0, '4.7.4', e),
    oa(t0, '4.7.4', 'esm2017')
})()
var oT = 'firebase',
  aT = '11.0.1'
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ oa(oT, aT, 'app')
const sT = {
    apiKey: 'AIzaSyDVlRzfLEHgZDHF8brQyVqoQvIvgIkrcnA',
    authDomain: 'visamaz-69bdf.firebaseapp.com',
    projectId: 'visamaz-69bdf',
    storageBucket: 'visamaz-69bdf.firebasestorage.app',
    messagingSenderId: '521376424647',
    appId: '1:521376424647:web:d74bf4909c2c2e096b14e2',
  },
  lT = K1(sT)
iT(lT)
var xc = { exports: {} }
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ xc.exports
;(function (e, t) {
  ;(function () {
    var n,
      i = '4.17.21',
      a = 200,
      l = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      c = 'Expected a function',
      d = 'Invalid `variable` option passed into `_.template`',
      g = '__lodash_hash_undefined__',
      w = 500,
      O = '__lodash_placeholder__',
      R = 1,
      _ = 2,
      H = 4,
      F = 1,
      W = 2,
      Q = 1,
      I = 2,
      x = 4,
      A = 8,
      B = 16,
      G = 32,
      X = 64,
      S = 128,
      k = 256,
      T = 512,
      P = 30,
      D = '...',
      j = 800,
      C = 16,
      Qe = 1,
      $t = 2,
      qn = 3,
      Ee = 1 / 0,
      Z = 9007199254740991,
      oe = 17976931348623157e292,
      ue = NaN,
      ke = 4294967295,
      Pe = ke - 1,
      $e = ke >>> 1,
      Pn = [
        ['ary', S],
        ['bind', Q],
        ['bindKey', I],
        ['curry', A],
        ['curryRight', B],
        ['flip', T],
        ['partial', G],
        ['partialRight', X],
        ['rearg', k],
      ],
      bt = '[object Arguments]',
      Bt = '[object Array]',
      pn = '[object AsyncFunction]',
      Ei = '[object Boolean]',
      xi = '[object Date]',
      lo = '[object DOMException]',
      ar = '[object Error]',
      Ir = '[object Function]',
      uo = '[object GeneratorFunction]',
      Lt = '[object Map]',
      sr = '[object Number]',
      sl = '[object Null]',
      gn = '[object Object]',
      ll = '[object Promise]',
      ul = '[object Proxy]',
      Ar = '[object RegExp]',
      It = '[object Set]',
      Dr = '[object String]',
      co = '[object Symbol]',
      ya = '[object Undefined]',
      lr = '[object WeakMap]',
      ba = '[object WeakSet]',
      qe = '[object ArrayBuffer]',
      Ke = '[object DataView]',
      zr = '[object Float32Array]',
      fo = '[object Float64Array]',
      ho = '[object Int8Array]',
      wa = '[object Int16Array]',
      ur = '[object Int32Array]',
      po = '[object Uint8Array]',
      go = '[object Uint8ClampedArray]',
      Ti = '[object Uint16Array]',
      ka = '[object Uint32Array]',
      Kc = /\b__p \+= '';/g,
      _a = /\b(__p \+=) '' \+/g,
      cl = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      mo = /&(?:amp|lt|gt|quot|#39);/g,
      vo = /[&<>"']/g,
      Nr = RegExp(mo.source),
      fl = RegExp(vo.source),
      Sa = /<%-([\s\S]+?)%>/g,
      hl = /<%([\s\S]+?)%>/g,
      Mr = /<%=([\s\S]+?)%>/g,
      dl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      dt = /^\w*$/,
      pl =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      cr = /[\\^$.*+?()[\]{}|]/g,
      Ci = RegExp(cr.source),
      Ea = /^\s+/,
      Yc = /\s/,
      jr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Gc = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Qc = /,? & /,
      xa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      yo = /[()=,{}\[\]\/\s]/,
      Kn = /\\(\\)?/g,
      gl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Ta = /\w*$/,
      Ca = /^[-+]0x[0-9a-f]+$/i,
      Pa = /^0b[01]+$/i,
      ml = /^\[object .+?Constructor\]$/,
      vl = /^0o[0-7]+$/i,
      Jc = /^(?:0|[1-9]\d*)$/,
      bo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Pi = /($^)/,
      Oa = /['\n\r\u2028\u2029\\]/g,
      Yn = '\\ud800-\\udfff',
      fr = '\\u0300-\\u036f',
      Ra = '\\ufe20-\\ufe2f',
      Xc = '\\u20d0-\\u20ff',
      La = fr + Ra + Xc,
      Ia = '\\u2700-\\u27bf',
      Aa = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      Da = '\\xac\\xb1\\xd7\\xf7',
      za = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      yl = '\\u2000-\\u206f',
      bl =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      wl = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      kl = '\\ufe0e\\ufe0f',
      Na = Da + za + yl + bl,
      wo = "['’]",
      Zc = '[' + Yn + ']',
      Gn = '[' + Na + ']',
      Ht = '[' + La + ']',
      Oi = '\\d+',
      ko = '[' + Ia + ']',
      Ma = '[' + Aa + ']',
      Ae = '[^' + Yn + Na + Oi + Ia + Aa + wl + ']',
      Fr = '\\ud83c[\\udffb-\\udfff]',
      Ri = '(?:' + Ht + '|' + Fr + ')',
      Ur = '[^' + Yn + ']',
      ja = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      _o = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      $r = '[' + wl + ']',
      _l = '\\u200d',
      Sl = '(?:' + Ma + '|' + Ae + ')',
      ef = '(?:' + $r + '|' + Ae + ')',
      Br = '(?:' + wo + '(?:d|ll|m|re|s|t|ve))?',
      On = '(?:' + wo + '(?:D|LL|M|RE|S|T|VE))?',
      Fa = Ri + '?',
      Ua = '[' + kl + ']?',
      El = '(?:' + _l + '(?:' + [Ur, ja, _o].join('|') + ')' + Ua + Fa + ')*',
      Hr = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      tf = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      xl = Ua + Fa + El,
      nf = '(?:' + [ko, ja, _o].join('|') + ')' + xl,
      Qn = '(?:' + [Ur + Ht + '?', Ht, ja, _o, Zc].join('|') + ')',
      rf = RegExp(wo, 'g'),
      of = RegExp(Ht, 'g'),
      Vr = RegExp(Fr + '(?=' + Fr + ')|' + Qn + xl, 'g'),
      So = RegExp(
        [
          $r + '?' + Ma + '+' + Br + '(?=' + [Gn, $r, '$'].join('|') + ')',
          ef + '+' + On + '(?=' + [Gn, $r + Sl, '$'].join('|') + ')',
          $r + '?' + Sl + '+' + Br,
          $r + '+' + On,
          tf,
          Hr,
          Oi,
          nf,
        ].join('|'),
        'g'
      ),
      Tl = RegExp('[' + _l + Yn + La + kl + ']'),
      Li = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Ii = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout',
      ],
      Cl = -1,
      Oe = {}
    ;(Oe[zr] =
      Oe[fo] =
      Oe[ho] =
      Oe[wa] =
      Oe[ur] =
      Oe[po] =
      Oe[go] =
      Oe[Ti] =
      Oe[ka] =
        !0),
      (Oe[bt] =
        Oe[Bt] =
        Oe[qe] =
        Oe[Ei] =
        Oe[Ke] =
        Oe[xi] =
        Oe[ar] =
        Oe[Ir] =
        Oe[Lt] =
        Oe[sr] =
        Oe[gn] =
        Oe[Ar] =
        Oe[It] =
        Oe[Dr] =
        Oe[lr] =
          !1)
    var ce = {}
    ;(ce[bt] =
      ce[Bt] =
      ce[qe] =
      ce[Ke] =
      ce[Ei] =
      ce[xi] =
      ce[zr] =
      ce[fo] =
      ce[ho] =
      ce[wa] =
      ce[ur] =
      ce[Lt] =
      ce[sr] =
      ce[gn] =
      ce[Ar] =
      ce[It] =
      ce[Dr] =
      ce[co] =
      ce[po] =
      ce[go] =
      ce[Ti] =
      ce[ka] =
        !0),
      (ce[ar] = ce[Ir] = ce[lr] = !1)
    var af = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      },
      sf = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      Pl = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      Ol = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      Rl = parseFloat,
      Eo = parseInt,
      $a = typeof us == 'object' && us && us.Object === Object && us,
      Rn = typeof self == 'object' && self && self.Object === Object && self,
      et = $a || Rn || Function('return this')(),
      Ba = t && !t.nodeType && t,
      nn = Ba && !0 && e && !e.nodeType && e,
      Ha = nn && nn.exports === Ba,
      Ai = Ha && $a.process,
      pt = (function () {
        try {
          var z = nn && nn.require && nn.require('util').types
          return z || (Ai && Ai.binding && Ai.binding('util'))
        } catch {}
      })(),
      Va = pt && pt.isArrayBuffer,
      Di = pt && pt.isDate,
      Ll = pt && pt.isMap,
      Wa = pt && pt.isRegExp,
      Wr = pt && pt.isSet,
      qa = pt && pt.isTypedArray
    function wt(z, V, U) {
      switch (U.length) {
        case 0:
          return z.call(V)
        case 1:
          return z.call(V, U[0])
        case 2:
          return z.call(V, U[0], U[1])
        case 3:
          return z.call(V, U[0], U[1], U[2])
      }
      return z.apply(V, U)
    }
    function Ka(z, V, U, ne) {
      for (var fe = -1, Te = z == null ? 0 : z.length; ++fe < Te; ) {
        var it = z[fe]
        V(ne, it, U(it), z)
      }
      return ne
    }
    function kt(z, V) {
      for (
        var U = -1, ne = z == null ? 0 : z.length;
        ++U < ne && V(z[U], U, z) !== !1;

      );
      return z
    }
    function Il(z, V) {
      for (var U = z == null ? 0 : z.length; U-- && V(z[U], U, z) !== !1; );
      return z
    }
    function zi(z, V) {
      for (var U = -1, ne = z == null ? 0 : z.length; ++U < ne; )
        if (!V(z[U], U, z)) return !1
      return !0
    }
    function Ln(z, V) {
      for (
        var U = -1, ne = z == null ? 0 : z.length, fe = 0, Te = [];
        ++U < ne;

      ) {
        var it = z[U]
        V(it, U, z) && (Te[fe++] = it)
      }
      return Te
    }
    function Ni(z, V) {
      var U = z == null ? 0 : z.length
      return !!U && p(z, V, 0) > -1
    }
    function In(z, V, U) {
      for (var ne = -1, fe = z == null ? 0 : z.length; ++ne < fe; )
        if (U(V, z[ne])) return !0
      return !1
    }
    function ze(z, V) {
      for (
        var U = -1, ne = z == null ? 0 : z.length, fe = Array(ne);
        ++U < ne;

      )
        fe[U] = V(z[U], U, z)
      return fe
    }
    function An(z, V) {
      for (var U = -1, ne = V.length, fe = z.length; ++U < ne; )
        z[fe + U] = V[U]
      return z
    }
    function xo(z, V, U, ne) {
      var fe = -1,
        Te = z == null ? 0 : z.length
      for (ne && Te && (U = z[++fe]); ++fe < Te; ) U = V(U, z[fe], fe, z)
      return U
    }
    function Al(z, V, U, ne) {
      var fe = z == null ? 0 : z.length
      for (ne && fe && (U = z[--fe]); fe--; ) U = V(U, z[fe], fe, z)
      return U
    }
    function _t(z, V) {
      for (var U = -1, ne = z == null ? 0 : z.length; ++U < ne; )
        if (V(z[U], U, z)) return !0
      return !1
    }
    var Dl = ee('length')
    function zl(z) {
      return z.split('')
    }
    function qr(z) {
      return z.match(xa) || []
    }
    function s(z, V, U) {
      var ne
      return (
        U(z, function (fe, Te, it) {
          if (V(fe, Te, it)) return (ne = Te), !1
        }),
        ne
      )
    }
    function f(z, V, U, ne) {
      for (var fe = z.length, Te = U + (ne ? 1 : -1); ne ? Te-- : ++Te < fe; )
        if (V(z[Te], Te, z)) return Te
      return -1
    }
    function p(z, V, U) {
      return V === V ? cb(z, V, U) : f(z, M, U)
    }
    function y(z, V, U, ne) {
      for (var fe = U - 1, Te = z.length; ++fe < Te; )
        if (ne(z[fe], V)) return fe
      return -1
    }
    function M(z) {
      return z !== z
    }
    function $(z, V) {
      var U = z == null ? 0 : z.length
      return U ? nt(z, V) / U : ue
    }
    function ee(z) {
      return function (V) {
        return V == null ? n : V[z]
      }
    }
    function Re(z) {
      return function (V) {
        return z == null ? n : z[V]
      }
    }
    function tt(z, V, U, ne, fe) {
      return (
        fe(z, function (Te, it, Ne) {
          U = ne ? ((ne = !1), Te) : V(U, Te, it, Ne)
        }),
        U
      )
    }
    function xe(z, V) {
      var U = z.length
      for (z.sort(V); U--; ) z[U] = z[U].value
      return z
    }
    function nt(z, V) {
      for (var U, ne = -1, fe = z.length; ++ne < fe; ) {
        var Te = V(z[ne])
        Te !== n && (U = U === n ? Te : U + Te)
      }
      return U
    }
    function lt(z, V) {
      for (var U = -1, ne = Array(z); ++U < z; ) ne[U] = V(U)
      return ne
    }
    function Kr(z, V) {
      return ze(V, function (U) {
        return [U, z[U]]
      })
    }
    function Vt(z) {
      return z && z.slice(0, jp(z) + 1).replace(Ea, '')
    }
    function ut(z) {
      return function (V) {
        return z(V)
      }
    }
    function Mi(z, V) {
      return ze(V, function (U) {
        return z[U]
      })
    }
    function Ya(z, V) {
      return z.has(V)
    }
    function zp(z, V) {
      for (var U = -1, ne = z.length; ++U < ne && p(V, z[U], 0) > -1; );
      return U
    }
    function Np(z, V) {
      for (var U = z.length; U-- && p(V, z[U], 0) > -1; );
      return U
    }
    function nb(z, V) {
      for (var U = z.length, ne = 0; U--; ) z[U] === V && ++ne
      return ne
    }
    var rb = Re(af),
      ib = Re(sf)
    function ob(z) {
      return '\\' + Ol[z]
    }
    function ab(z, V) {
      return z == null ? n : z[V]
    }
    function To(z) {
      return Tl.test(z)
    }
    function sb(z) {
      return Li.test(z)
    }
    function lb(z) {
      for (var V, U = []; !(V = z.next()).done; ) U.push(V.value)
      return U
    }
    function lf(z) {
      var V = -1,
        U = Array(z.size)
      return (
        z.forEach(function (ne, fe) {
          U[++V] = [fe, ne]
        }),
        U
      )
    }
    function Mp(z, V) {
      return function (U) {
        return z(V(U))
      }
    }
    function Yr(z, V) {
      for (var U = -1, ne = z.length, fe = 0, Te = []; ++U < ne; ) {
        var it = z[U]
        ;(it === V || it === O) && ((z[U] = O), (Te[fe++] = U))
      }
      return Te
    }
    function Nl(z) {
      var V = -1,
        U = Array(z.size)
      return (
        z.forEach(function (ne) {
          U[++V] = ne
        }),
        U
      )
    }
    function ub(z) {
      var V = -1,
        U = Array(z.size)
      return (
        z.forEach(function (ne) {
          U[++V] = [ne, ne]
        }),
        U
      )
    }
    function cb(z, V, U) {
      for (var ne = U - 1, fe = z.length; ++ne < fe; )
        if (z[ne] === V) return ne
      return -1
    }
    function fb(z, V, U) {
      for (var ne = U + 1; ne--; ) if (z[ne] === V) return ne
      return ne
    }
    function Co(z) {
      return To(z) ? db(z) : Dl(z)
    }
    function Dn(z) {
      return To(z) ? pb(z) : zl(z)
    }
    function jp(z) {
      for (var V = z.length; V-- && Yc.test(z.charAt(V)); );
      return V
    }
    var hb = Re(Pl)
    function db(z) {
      for (var V = (Vr.lastIndex = 0); Vr.test(z); ) ++V
      return V
    }
    function pb(z) {
      return z.match(Vr) || []
    }
    function gb(z) {
      return z.match(So) || []
    }
    var mb = function z(V) {
        V = V == null ? et : Po.defaults(et.Object(), V, Po.pick(et, Ii))
        var U = V.Array,
          ne = V.Date,
          fe = V.Error,
          Te = V.Function,
          it = V.Math,
          Ne = V.Object,
          uf = V.RegExp,
          vb = V.String,
          mn = V.TypeError,
          Ml = U.prototype,
          yb = Te.prototype,
          Oo = Ne.prototype,
          jl = V['__core-js_shared__'],
          Fl = yb.toString,
          Le = Oo.hasOwnProperty,
          bb = 0,
          Fp = (function () {
            var r = /[^.]+$/.exec((jl && jl.keys && jl.keys.IE_PROTO) || '')
            return r ? 'Symbol(src)_1.' + r : ''
          })(),
          Ul = Oo.toString,
          wb = Fl.call(Ne),
          kb = et._,
          _b = uf(
            '^' +
              Fl.call(Le)
                .replace(cr, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          $l = Ha ? V.Buffer : n,
          Gr = V.Symbol,
          Bl = V.Uint8Array,
          Up = $l ? $l.allocUnsafe : n,
          Hl = Mp(Ne.getPrototypeOf, Ne),
          $p = Ne.create,
          Bp = Oo.propertyIsEnumerable,
          Vl = Ml.splice,
          Hp = Gr ? Gr.isConcatSpreadable : n,
          Ga = Gr ? Gr.iterator : n,
          ji = Gr ? Gr.toStringTag : n,
          Wl = (function () {
            try {
              var r = Hi(Ne, 'defineProperty')
              return r({}, '', {}), r
            } catch {}
          })(),
          Sb = V.clearTimeout !== et.clearTimeout && V.clearTimeout,
          Eb = ne && ne.now !== et.Date.now && ne.now,
          xb = V.setTimeout !== et.setTimeout && V.setTimeout,
          ql = it.ceil,
          Kl = it.floor,
          cf = Ne.getOwnPropertySymbols,
          Tb = $l ? $l.isBuffer : n,
          Vp = V.isFinite,
          Cb = Ml.join,
          Pb = Mp(Ne.keys, Ne),
          ot = it.max,
          St = it.min,
          Ob = ne.now,
          Rb = V.parseInt,
          Wp = it.random,
          Lb = Ml.reverse,
          ff = Hi(V, 'DataView'),
          Qa = Hi(V, 'Map'),
          hf = Hi(V, 'Promise'),
          Ro = Hi(V, 'Set'),
          Ja = Hi(V, 'WeakMap'),
          Xa = Hi(Ne, 'create'),
          Yl = Ja && new Ja(),
          Lo = {},
          Ib = Vi(ff),
          Ab = Vi(Qa),
          Db = Vi(hf),
          zb = Vi(Ro),
          Nb = Vi(Ja),
          Gl = Gr ? Gr.prototype : n,
          Za = Gl ? Gl.valueOf : n,
          qp = Gl ? Gl.toString : n
        function v(r) {
          if (Ye(r) && !de(r) && !(r instanceof ye)) {
            if (r instanceof vn) return r
            if (Le.call(r, '__wrapped__')) return Kg(r)
          }
          return new vn(r)
        }
        var Io = (function () {
          function r() {}
          return function (o) {
            if (!Be(o)) return {}
            if ($p) return $p(o)
            r.prototype = o
            var u = new r()
            return (r.prototype = n), u
          }
        })()
        function Ql() {}
        function vn(r, o) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!o),
            (this.__index__ = 0),
            (this.__values__ = n)
        }
        ;(v.templateSettings = {
          escape: Sa,
          evaluate: hl,
          interpolate: Mr,
          variable: '',
          imports: { _: v },
        }),
          (v.prototype = Ql.prototype),
          (v.prototype.constructor = v),
          (vn.prototype = Io(Ql.prototype)),
          (vn.prototype.constructor = vn)
        function ye(r) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = ke),
            (this.__views__ = [])
        }
        function Mb() {
          var r = new ye(this.__wrapped__)
          return (
            (r.__actions__ = Wt(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = Wt(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = Wt(this.__views__)),
            r
          )
        }
        function jb() {
          if (this.__filtered__) {
            var r = new ye(this)
            ;(r.__dir__ = -1), (r.__filtered__ = !0)
          } else (r = this.clone()), (r.__dir__ *= -1)
          return r
        }
        function Fb() {
          var r = this.__wrapped__.value(),
            o = this.__dir__,
            u = de(r),
            h = o < 0,
            m = u ? r.length : 0,
            b = Jw(0, m, this.__views__),
            E = b.start,
            L = b.end,
            N = L - E,
            q = h ? L : E - 1,
            K = this.__iteratees__,
            Y = K.length,
            te = 0,
            ie = St(N, this.__takeCount__)
          if (!u || (!h && m == N && ie == N)) return mg(r, this.__actions__)
          var se = []
          e: for (; N-- && te < ie; ) {
            q += o
            for (var ge = -1, le = r[q]; ++ge < Y; ) {
              var ve = K[ge],
                we = ve.iteratee,
                an = ve.type,
                zt = we(le)
              if (an == $t) le = zt
              else if (!zt) {
                if (an == Qe) continue e
                break e
              }
            }
            se[te++] = le
          }
          return se
        }
        ;(ye.prototype = Io(Ql.prototype)), (ye.prototype.constructor = ye)
        function Fi(r) {
          var o = -1,
            u = r == null ? 0 : r.length
          for (this.clear(); ++o < u; ) {
            var h = r[o]
            this.set(h[0], h[1])
          }
        }
        function Ub() {
          ;(this.__data__ = Xa ? Xa(null) : {}), (this.size = 0)
        }
        function $b(r) {
          var o = this.has(r) && delete this.__data__[r]
          return (this.size -= o ? 1 : 0), o
        }
        function Bb(r) {
          var o = this.__data__
          if (Xa) {
            var u = o[r]
            return u === g ? n : u
          }
          return Le.call(o, r) ? o[r] : n
        }
        function Hb(r) {
          var o = this.__data__
          return Xa ? o[r] !== n : Le.call(o, r)
        }
        function Vb(r, o) {
          var u = this.__data__
          return (
            (this.size += this.has(r) ? 0 : 1),
            (u[r] = Xa && o === n ? g : o),
            this
          )
        }
        ;(Fi.prototype.clear = Ub),
          (Fi.prototype.delete = $b),
          (Fi.prototype.get = Bb),
          (Fi.prototype.has = Hb),
          (Fi.prototype.set = Vb)
        function hr(r) {
          var o = -1,
            u = r == null ? 0 : r.length
          for (this.clear(); ++o < u; ) {
            var h = r[o]
            this.set(h[0], h[1])
          }
        }
        function Wb() {
          ;(this.__data__ = []), (this.size = 0)
        }
        function qb(r) {
          var o = this.__data__,
            u = Jl(o, r)
          if (u < 0) return !1
          var h = o.length - 1
          return u == h ? o.pop() : Vl.call(o, u, 1), --this.size, !0
        }
        function Kb(r) {
          var o = this.__data__,
            u = Jl(o, r)
          return u < 0 ? n : o[u][1]
        }
        function Yb(r) {
          return Jl(this.__data__, r) > -1
        }
        function Gb(r, o) {
          var u = this.__data__,
            h = Jl(u, r)
          return h < 0 ? (++this.size, u.push([r, o])) : (u[h][1] = o), this
        }
        ;(hr.prototype.clear = Wb),
          (hr.prototype.delete = qb),
          (hr.prototype.get = Kb),
          (hr.prototype.has = Yb),
          (hr.prototype.set = Gb)
        function dr(r) {
          var o = -1,
            u = r == null ? 0 : r.length
          for (this.clear(); ++o < u; ) {
            var h = r[o]
            this.set(h[0], h[1])
          }
        }
        function Qb() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new Fi(),
              map: new (Qa || hr)(),
              string: new Fi(),
            })
        }
        function Jb(r) {
          var o = uu(this, r).delete(r)
          return (this.size -= o ? 1 : 0), o
        }
        function Xb(r) {
          return uu(this, r).get(r)
        }
        function Zb(r) {
          return uu(this, r).has(r)
        }
        function ew(r, o) {
          var u = uu(this, r),
            h = u.size
          return u.set(r, o), (this.size += u.size == h ? 0 : 1), this
        }
        ;(dr.prototype.clear = Qb),
          (dr.prototype.delete = Jb),
          (dr.prototype.get = Xb),
          (dr.prototype.has = Zb),
          (dr.prototype.set = ew)
        function Ui(r) {
          var o = -1,
            u = r == null ? 0 : r.length
          for (this.__data__ = new dr(); ++o < u; ) this.add(r[o])
        }
        function tw(r) {
          return this.__data__.set(r, g), this
        }
        function nw(r) {
          return this.__data__.has(r)
        }
        ;(Ui.prototype.add = Ui.prototype.push = tw), (Ui.prototype.has = nw)
        function zn(r) {
          var o = (this.__data__ = new hr(r))
          this.size = o.size
        }
        function rw() {
          ;(this.__data__ = new hr()), (this.size = 0)
        }
        function iw(r) {
          var o = this.__data__,
            u = o.delete(r)
          return (this.size = o.size), u
        }
        function ow(r) {
          return this.__data__.get(r)
        }
        function aw(r) {
          return this.__data__.has(r)
        }
        function sw(r, o) {
          var u = this.__data__
          if (u instanceof hr) {
            var h = u.__data__
            if (!Qa || h.length < a - 1)
              return h.push([r, o]), (this.size = ++u.size), this
            u = this.__data__ = new dr(h)
          }
          return u.set(r, o), (this.size = u.size), this
        }
        ;(zn.prototype.clear = rw),
          (zn.prototype.delete = iw),
          (zn.prototype.get = ow),
          (zn.prototype.has = aw),
          (zn.prototype.set = sw)
        function Kp(r, o) {
          var u = de(r),
            h = !u && Wi(r),
            m = !u && !h && ei(r),
            b = !u && !h && !m && No(r),
            E = u || h || m || b,
            L = E ? lt(r.length, vb) : [],
            N = L.length
          for (var q in r)
            (o || Le.call(r, q)) &&
              !(
                E &&
                (q == 'length' ||
                  (m && (q == 'offset' || q == 'parent')) ||
                  (b &&
                    (q == 'buffer' ||
                      q == 'byteLength' ||
                      q == 'byteOffset')) ||
                  vr(q, N))
              ) &&
              L.push(q)
          return L
        }
        function Yp(r) {
          var o = r.length
          return o ? r[Sf(0, o - 1)] : n
        }
        function lw(r, o) {
          return cu(Wt(r), $i(o, 0, r.length))
        }
        function uw(r) {
          return cu(Wt(r))
        }
        function df(r, o, u) {
          ;((u !== n && !Nn(r[o], u)) || (u === n && !(o in r))) && pr(r, o, u)
        }
        function es(r, o, u) {
          var h = r[o]
          ;(!(Le.call(r, o) && Nn(h, u)) || (u === n && !(o in r))) &&
            pr(r, o, u)
        }
        function Jl(r, o) {
          for (var u = r.length; u--; ) if (Nn(r[u][0], o)) return u
          return -1
        }
        function cw(r, o, u, h) {
          return (
            Qr(r, function (m, b, E) {
              o(h, m, u(m), E)
            }),
            h
          )
        }
        function Gp(r, o) {
          return r && Xn(o, ct(o), r)
        }
        function fw(r, o) {
          return r && Xn(o, Kt(o), r)
        }
        function pr(r, o, u) {
          o == '__proto__' && Wl
            ? Wl(r, o, {
                configurable: !0,
                enumerable: !0,
                value: u,
                writable: !0,
              })
            : (r[o] = u)
        }
        function pf(r, o) {
          for (var u = -1, h = o.length, m = U(h), b = r == null; ++u < h; )
            m[u] = b ? n : Yf(r, o[u])
          return m
        }
        function $i(r, o, u) {
          return (
            r === r &&
              (u !== n && (r = r <= u ? r : u),
              o !== n && (r = r >= o ? r : o)),
            r
          )
        }
        function yn(r, o, u, h, m, b) {
          var E,
            L = o & R,
            N = o & _,
            q = o & H
          if ((u && (E = m ? u(r, h, m, b) : u(r)), E !== n)) return E
          if (!Be(r)) return r
          var K = de(r)
          if (K) {
            if (((E = Zw(r)), !L)) return Wt(r, E)
          } else {
            var Y = Et(r),
              te = Y == Ir || Y == uo
            if (ei(r)) return bg(r, L)
            if (Y == gn || Y == bt || (te && !m)) {
              if (((E = N || te ? {} : jg(r)), !L))
                return N ? Bw(r, fw(E, r)) : $w(r, Gp(E, r))
            } else {
              if (!ce[Y]) return m ? r : {}
              E = e2(r, Y, L)
            }
          }
          b || (b = new zn())
          var ie = b.get(r)
          if (ie) return ie
          b.set(r, E),
            dm(r)
              ? r.forEach(function (le) {
                  E.add(yn(le, o, u, le, r, b))
                })
              : fm(r) &&
                r.forEach(function (le, ve) {
                  E.set(ve, yn(le, o, u, ve, r, b))
                })
          var se = q ? (N ? Df : Af) : N ? Kt : ct,
            ge = K ? n : se(r)
          return (
            kt(ge || r, function (le, ve) {
              ge && ((ve = le), (le = r[ve])), es(E, ve, yn(le, o, u, ve, r, b))
            }),
            E
          )
        }
        function hw(r) {
          var o = ct(r)
          return function (u) {
            return Qp(u, r, o)
          }
        }
        function Qp(r, o, u) {
          var h = u.length
          if (r == null) return !h
          for (r = Ne(r); h--; ) {
            var m = u[h],
              b = o[m],
              E = r[m]
            if ((E === n && !(m in r)) || !b(E)) return !1
          }
          return !0
        }
        function Jp(r, o, u) {
          if (typeof r != 'function') throw new mn(c)
          return ss(function () {
            r.apply(n, u)
          }, o)
        }
        function ts(r, o, u, h) {
          var m = -1,
            b = Ni,
            E = !0,
            L = r.length,
            N = [],
            q = o.length
          if (!L) return N
          u && (o = ze(o, ut(u))),
            h
              ? ((b = In), (E = !1))
              : o.length >= a && ((b = Ya), (E = !1), (o = new Ui(o)))
          e: for (; ++m < L; ) {
            var K = r[m],
              Y = u == null ? K : u(K)
            if (((K = h || K !== 0 ? K : 0), E && Y === Y)) {
              for (var te = q; te--; ) if (o[te] === Y) continue e
              N.push(K)
            } else b(o, Y, h) || N.push(K)
          }
          return N
        }
        var Qr = Eg(Jn),
          Xp = Eg(mf, !0)
        function dw(r, o) {
          var u = !0
          return (
            Qr(r, function (h, m, b) {
              return (u = !!o(h, m, b)), u
            }),
            u
          )
        }
        function Xl(r, o, u) {
          for (var h = -1, m = r.length; ++h < m; ) {
            var b = r[h],
              E = o(b)
            if (E != null && (L === n ? E === E && !on(E) : u(E, L)))
              var L = E,
                N = b
          }
          return N
        }
        function pw(r, o, u, h) {
          var m = r.length
          for (
            u = pe(u),
              u < 0 && (u = -u > m ? 0 : m + u),
              h = h === n || h > m ? m : pe(h),
              h < 0 && (h += m),
              h = u > h ? 0 : gm(h);
            u < h;

          )
            r[u++] = o
          return r
        }
        function Zp(r, o) {
          var u = []
          return (
            Qr(r, function (h, m, b) {
              o(h, m, b) && u.push(h)
            }),
            u
          )
        }
        function gt(r, o, u, h, m) {
          var b = -1,
            E = r.length
          for (u || (u = n2), m || (m = []); ++b < E; ) {
            var L = r[b]
            o > 0 && u(L)
              ? o > 1
                ? gt(L, o - 1, u, h, m)
                : An(m, L)
              : h || (m[m.length] = L)
          }
          return m
        }
        var gf = xg(),
          eg = xg(!0)
        function Jn(r, o) {
          return r && gf(r, o, ct)
        }
        function mf(r, o) {
          return r && eg(r, o, ct)
        }
        function Zl(r, o) {
          return Ln(o, function (u) {
            return yr(r[u])
          })
        }
        function Bi(r, o) {
          o = Xr(o, r)
          for (var u = 0, h = o.length; r != null && u < h; ) r = r[Zn(o[u++])]
          return u && u == h ? r : n
        }
        function tg(r, o, u) {
          var h = o(r)
          return de(r) ? h : An(h, u(r))
        }
        function At(r) {
          return r == null
            ? r === n
              ? ya
              : sl
            : ji && ji in Ne(r)
            ? Qw(r)
            : u2(r)
        }
        function vf(r, o) {
          return r > o
        }
        function gw(r, o) {
          return r != null && Le.call(r, o)
        }
        function mw(r, o) {
          return r != null && o in Ne(r)
        }
        function vw(r, o, u) {
          return r >= St(o, u) && r < ot(o, u)
        }
        function yf(r, o, u) {
          for (
            var h = u ? In : Ni,
              m = r[0].length,
              b = r.length,
              E = b,
              L = U(b),
              N = 1 / 0,
              q = [];
            E--;

          ) {
            var K = r[E]
            E && o && (K = ze(K, ut(o))),
              (N = St(K.length, N)),
              (L[E] =
                !u && (o || (m >= 120 && K.length >= 120)) ? new Ui(E && K) : n)
          }
          K = r[0]
          var Y = -1,
            te = L[0]
          e: for (; ++Y < m && q.length < N; ) {
            var ie = K[Y],
              se = o ? o(ie) : ie
            if (
              ((ie = u || ie !== 0 ? ie : 0), !(te ? Ya(te, se) : h(q, se, u)))
            ) {
              for (E = b; --E; ) {
                var ge = L[E]
                if (!(ge ? Ya(ge, se) : h(r[E], se, u))) continue e
              }
              te && te.push(se), q.push(ie)
            }
          }
          return q
        }
        function yw(r, o, u, h) {
          return (
            Jn(r, function (m, b, E) {
              o(h, u(m), b, E)
            }),
            h
          )
        }
        function ns(r, o, u) {
          ;(o = Xr(o, r)), (r = Bg(r, o))
          var h = r == null ? r : r[Zn(wn(o))]
          return h == null ? n : wt(h, r, u)
        }
        function ng(r) {
          return Ye(r) && At(r) == bt
        }
        function bw(r) {
          return Ye(r) && At(r) == qe
        }
        function ww(r) {
          return Ye(r) && At(r) == xi
        }
        function rs(r, o, u, h, m) {
          return r === o
            ? !0
            : r == null || o == null || (!Ye(r) && !Ye(o))
            ? r !== r && o !== o
            : kw(r, o, u, h, rs, m)
        }
        function kw(r, o, u, h, m, b) {
          var E = de(r),
            L = de(o),
            N = E ? Bt : Et(r),
            q = L ? Bt : Et(o)
          ;(N = N == bt ? gn : N), (q = q == bt ? gn : q)
          var K = N == gn,
            Y = q == gn,
            te = N == q
          if (te && ei(r)) {
            if (!ei(o)) return !1
            ;(E = !0), (K = !1)
          }
          if (te && !K)
            return (
              b || (b = new zn()),
              E || No(r) ? zg(r, o, u, h, m, b) : Yw(r, o, N, u, h, m, b)
            )
          if (!(u & F)) {
            var ie = K && Le.call(r, '__wrapped__'),
              se = Y && Le.call(o, '__wrapped__')
            if (ie || se) {
              var ge = ie ? r.value() : r,
                le = se ? o.value() : o
              return b || (b = new zn()), m(ge, le, u, h, b)
            }
          }
          return te ? (b || (b = new zn()), Gw(r, o, u, h, m, b)) : !1
        }
        function _w(r) {
          return Ye(r) && Et(r) == Lt
        }
        function bf(r, o, u, h) {
          var m = u.length,
            b = m,
            E = !h
          if (r == null) return !b
          for (r = Ne(r); m--; ) {
            var L = u[m]
            if (E && L[2] ? L[1] !== r[L[0]] : !(L[0] in r)) return !1
          }
          for (; ++m < b; ) {
            L = u[m]
            var N = L[0],
              q = r[N],
              K = L[1]
            if (E && L[2]) {
              if (q === n && !(N in r)) return !1
            } else {
              var Y = new zn()
              if (h) var te = h(q, K, N, r, o, Y)
              if (!(te === n ? rs(K, q, F | W, h, Y) : te)) return !1
            }
          }
          return !0
        }
        function rg(r) {
          if (!Be(r) || i2(r)) return !1
          var o = yr(r) ? _b : ml
          return o.test(Vi(r))
        }
        function Sw(r) {
          return Ye(r) && At(r) == Ar
        }
        function Ew(r) {
          return Ye(r) && Et(r) == It
        }
        function xw(r) {
          return Ye(r) && mu(r.length) && !!Oe[At(r)]
        }
        function ig(r) {
          return typeof r == 'function'
            ? r
            : r == null
            ? Yt
            : typeof r == 'object'
            ? de(r)
              ? sg(r[0], r[1])
              : ag(r)
            : Tm(r)
        }
        function wf(r) {
          if (!as(r)) return Pb(r)
          var o = []
          for (var u in Ne(r)) Le.call(r, u) && u != 'constructor' && o.push(u)
          return o
        }
        function Tw(r) {
          if (!Be(r)) return l2(r)
          var o = as(r),
            u = []
          for (var h in r)
            (h == 'constructor' && (o || !Le.call(r, h))) || u.push(h)
          return u
        }
        function kf(r, o) {
          return r < o
        }
        function og(r, o) {
          var u = -1,
            h = qt(r) ? U(r.length) : []
          return (
            Qr(r, function (m, b, E) {
              h[++u] = o(m, b, E)
            }),
            h
          )
        }
        function ag(r) {
          var o = Nf(r)
          return o.length == 1 && o[0][2]
            ? Ug(o[0][0], o[0][1])
            : function (u) {
                return u === r || bf(u, r, o)
              }
        }
        function sg(r, o) {
          return jf(r) && Fg(o)
            ? Ug(Zn(r), o)
            : function (u) {
                var h = Yf(u, r)
                return h === n && h === o ? Gf(u, r) : rs(o, h, F | W)
              }
        }
        function eu(r, o, u, h, m) {
          r !== o &&
            gf(
              o,
              function (b, E) {
                if ((m || (m = new zn()), Be(b))) Cw(r, o, E, u, eu, h, m)
                else {
                  var L = h ? h(Uf(r, E), b, E + '', r, o, m) : n
                  L === n && (L = b), df(r, E, L)
                }
              },
              Kt
            )
        }
        function Cw(r, o, u, h, m, b, E) {
          var L = Uf(r, u),
            N = Uf(o, u),
            q = E.get(N)
          if (q) {
            df(r, u, q)
            return
          }
          var K = b ? b(L, N, u + '', r, o, E) : n,
            Y = K === n
          if (Y) {
            var te = de(N),
              ie = !te && ei(N),
              se = !te && !ie && No(N)
            ;(K = N),
              te || ie || se
                ? de(L)
                  ? (K = L)
                  : Je(L)
                  ? (K = Wt(L))
                  : ie
                  ? ((Y = !1), (K = bg(N, !0)))
                  : se
                  ? ((Y = !1), (K = wg(N, !0)))
                  : (K = [])
                : ls(N) || Wi(N)
                ? ((K = L),
                  Wi(L) ? (K = mm(L)) : (!Be(L) || yr(L)) && (K = jg(N)))
                : (Y = !1)
          }
          Y && (E.set(N, K), m(K, N, h, b, E), E.delete(N)), df(r, u, K)
        }
        function lg(r, o) {
          var u = r.length
          if (u) return (o += o < 0 ? u : 0), vr(o, u) ? r[o] : n
        }
        function ug(r, o, u) {
          o.length
            ? (o = ze(o, function (b) {
                return de(b)
                  ? function (E) {
                      return Bi(E, b.length === 1 ? b[0] : b)
                    }
                  : b
              }))
            : (o = [Yt])
          var h = -1
          o = ze(o, ut(ae()))
          var m = og(r, function (b, E, L) {
            var N = ze(o, function (q) {
              return q(b)
            })
            return { criteria: N, index: ++h, value: b }
          })
          return xe(m, function (b, E) {
            return Uw(b, E, u)
          })
        }
        function Pw(r, o) {
          return cg(r, o, function (u, h) {
            return Gf(r, h)
          })
        }
        function cg(r, o, u) {
          for (var h = -1, m = o.length, b = {}; ++h < m; ) {
            var E = o[h],
              L = Bi(r, E)
            u(L, E) && is(b, Xr(E, r), L)
          }
          return b
        }
        function Ow(r) {
          return function (o) {
            return Bi(o, r)
          }
        }
        function _f(r, o, u, h) {
          var m = h ? y : p,
            b = -1,
            E = o.length,
            L = r
          for (r === o && (o = Wt(o)), u && (L = ze(r, ut(u))); ++b < E; )
            for (
              var N = 0, q = o[b], K = u ? u(q) : q;
              (N = m(L, K, N, h)) > -1;

            )
              L !== r && Vl.call(L, N, 1), Vl.call(r, N, 1)
          return r
        }
        function fg(r, o) {
          for (var u = r ? o.length : 0, h = u - 1; u--; ) {
            var m = o[u]
            if (u == h || m !== b) {
              var b = m
              vr(m) ? Vl.call(r, m, 1) : Tf(r, m)
            }
          }
          return r
        }
        function Sf(r, o) {
          return r + Kl(Wp() * (o - r + 1))
        }
        function Rw(r, o, u, h) {
          for (var m = -1, b = ot(ql((o - r) / (u || 1)), 0), E = U(b); b--; )
            (E[h ? b : ++m] = r), (r += u)
          return E
        }
        function Ef(r, o) {
          var u = ''
          if (!r || o < 1 || o > Z) return u
          do o % 2 && (u += r), (o = Kl(o / 2)), o && (r += r)
          while (o)
          return u
        }
        function me(r, o) {
          return $f($g(r, o, Yt), r + '')
        }
        function Lw(r) {
          return Yp(Mo(r))
        }
        function Iw(r, o) {
          var u = Mo(r)
          return cu(u, $i(o, 0, u.length))
        }
        function is(r, o, u, h) {
          if (!Be(r)) return r
          o = Xr(o, r)
          for (
            var m = -1, b = o.length, E = b - 1, L = r;
            L != null && ++m < b;

          ) {
            var N = Zn(o[m]),
              q = u
            if (N === '__proto__' || N === 'constructor' || N === 'prototype')
              return r
            if (m != E) {
              var K = L[N]
              ;(q = h ? h(K, N, L) : n),
                q === n && (q = Be(K) ? K : vr(o[m + 1]) ? [] : {})
            }
            es(L, N, q), (L = L[N])
          }
          return r
        }
        var hg = Yl
            ? function (r, o) {
                return Yl.set(r, o), r
              }
            : Yt,
          Aw = Wl
            ? function (r, o) {
                return Wl(r, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Jf(o),
                  writable: !0,
                })
              }
            : Yt
        function Dw(r) {
          return cu(Mo(r))
        }
        function bn(r, o, u) {
          var h = -1,
            m = r.length
          o < 0 && (o = -o > m ? 0 : m + o),
            (u = u > m ? m : u),
            u < 0 && (u += m),
            (m = o > u ? 0 : (u - o) >>> 0),
            (o >>>= 0)
          for (var b = U(m); ++h < m; ) b[h] = r[h + o]
          return b
        }
        function zw(r, o) {
          var u
          return (
            Qr(r, function (h, m, b) {
              return (u = o(h, m, b)), !u
            }),
            !!u
          )
        }
        function tu(r, o, u) {
          var h = 0,
            m = r == null ? h : r.length
          if (typeof o == 'number' && o === o && m <= $e) {
            for (; h < m; ) {
              var b = (h + m) >>> 1,
                E = r[b]
              E !== null && !on(E) && (u ? E <= o : E < o)
                ? (h = b + 1)
                : (m = b)
            }
            return m
          }
          return xf(r, o, Yt, u)
        }
        function xf(r, o, u, h) {
          var m = 0,
            b = r == null ? 0 : r.length
          if (b === 0) return 0
          o = u(o)
          for (
            var E = o !== o, L = o === null, N = on(o), q = o === n;
            m < b;

          ) {
            var K = Kl((m + b) / 2),
              Y = u(r[K]),
              te = Y !== n,
              ie = Y === null,
              se = Y === Y,
              ge = on(Y)
            if (E) var le = h || se
            else
              q
                ? (le = se && (h || te))
                : L
                ? (le = se && te && (h || !ie))
                : N
                ? (le = se && te && !ie && (h || !ge))
                : ie || ge
                ? (le = !1)
                : (le = h ? Y <= o : Y < o)
            le ? (m = K + 1) : (b = K)
          }
          return St(b, Pe)
        }
        function dg(r, o) {
          for (var u = -1, h = r.length, m = 0, b = []; ++u < h; ) {
            var E = r[u],
              L = o ? o(E) : E
            if (!u || !Nn(L, N)) {
              var N = L
              b[m++] = E === 0 ? 0 : E
            }
          }
          return b
        }
        function pg(r) {
          return typeof r == 'number' ? r : on(r) ? ue : +r
        }
        function rn(r) {
          if (typeof r == 'string') return r
          if (de(r)) return ze(r, rn) + ''
          if (on(r)) return qp ? qp.call(r) : ''
          var o = r + ''
          return o == '0' && 1 / r == -Ee ? '-0' : o
        }
        function Jr(r, o, u) {
          var h = -1,
            m = Ni,
            b = r.length,
            E = !0,
            L = [],
            N = L
          if (u) (E = !1), (m = In)
          else if (b >= a) {
            var q = o ? null : qw(r)
            if (q) return Nl(q)
            ;(E = !1), (m = Ya), (N = new Ui())
          } else N = o ? [] : L
          e: for (; ++h < b; ) {
            var K = r[h],
              Y = o ? o(K) : K
            if (((K = u || K !== 0 ? K : 0), E && Y === Y)) {
              for (var te = N.length; te--; ) if (N[te] === Y) continue e
              o && N.push(Y), L.push(K)
            } else m(N, Y, u) || (N !== L && N.push(Y), L.push(K))
          }
          return L
        }
        function Tf(r, o) {
          return (
            (o = Xr(o, r)), (r = Bg(r, o)), r == null || delete r[Zn(wn(o))]
          )
        }
        function gg(r, o, u, h) {
          return is(r, o, u(Bi(r, o)), h)
        }
        function nu(r, o, u, h) {
          for (
            var m = r.length, b = h ? m : -1;
            (h ? b-- : ++b < m) && o(r[b], b, r);

          );
          return u
            ? bn(r, h ? 0 : b, h ? b + 1 : m)
            : bn(r, h ? b + 1 : 0, h ? m : b)
        }
        function mg(r, o) {
          var u = r
          return (
            u instanceof ye && (u = u.value()),
            xo(
              o,
              function (h, m) {
                return m.func.apply(m.thisArg, An([h], m.args))
              },
              u
            )
          )
        }
        function Cf(r, o, u) {
          var h = r.length
          if (h < 2) return h ? Jr(r[0]) : []
          for (var m = -1, b = U(h); ++m < h; )
            for (var E = r[m], L = -1; ++L < h; )
              L != m && (b[m] = ts(b[m] || E, r[L], o, u))
          return Jr(gt(b, 1), o, u)
        }
        function vg(r, o, u) {
          for (var h = -1, m = r.length, b = o.length, E = {}; ++h < m; ) {
            var L = h < b ? o[h] : n
            u(E, r[h], L)
          }
          return E
        }
        function Pf(r) {
          return Je(r) ? r : []
        }
        function Of(r) {
          return typeof r == 'function' ? r : Yt
        }
        function Xr(r, o) {
          return de(r) ? r : jf(r, o) ? [r] : qg(Ce(r))
        }
        var Nw = me
        function Zr(r, o, u) {
          var h = r.length
          return (u = u === n ? h : u), !o && u >= h ? r : bn(r, o, u)
        }
        var yg =
          Sb ||
          function (r) {
            return et.clearTimeout(r)
          }
        function bg(r, o) {
          if (o) return r.slice()
          var u = r.length,
            h = Up ? Up(u) : new r.constructor(u)
          return r.copy(h), h
        }
        function Rf(r) {
          var o = new r.constructor(r.byteLength)
          return new Bl(o).set(new Bl(r)), o
        }
        function Mw(r, o) {
          var u = o ? Rf(r.buffer) : r.buffer
          return new r.constructor(u, r.byteOffset, r.byteLength)
        }
        function jw(r) {
          var o = new r.constructor(r.source, Ta.exec(r))
          return (o.lastIndex = r.lastIndex), o
        }
        function Fw(r) {
          return Za ? Ne(Za.call(r)) : {}
        }
        function wg(r, o) {
          var u = o ? Rf(r.buffer) : r.buffer
          return new r.constructor(u, r.byteOffset, r.length)
        }
        function kg(r, o) {
          if (r !== o) {
            var u = r !== n,
              h = r === null,
              m = r === r,
              b = on(r),
              E = o !== n,
              L = o === null,
              N = o === o,
              q = on(o)
            if (
              (!L && !q && !b && r > o) ||
              (b && E && N && !L && !q) ||
              (h && E && N) ||
              (!u && N) ||
              !m
            )
              return 1
            if (
              (!h && !b && !q && r < o) ||
              (q && u && m && !h && !b) ||
              (L && u && m) ||
              (!E && m) ||
              !N
            )
              return -1
          }
          return 0
        }
        function Uw(r, o, u) {
          for (
            var h = -1,
              m = r.criteria,
              b = o.criteria,
              E = m.length,
              L = u.length;
            ++h < E;

          ) {
            var N = kg(m[h], b[h])
            if (N) {
              if (h >= L) return N
              var q = u[h]
              return N * (q == 'desc' ? -1 : 1)
            }
          }
          return r.index - o.index
        }
        function _g(r, o, u, h) {
          for (
            var m = -1,
              b = r.length,
              E = u.length,
              L = -1,
              N = o.length,
              q = ot(b - E, 0),
              K = U(N + q),
              Y = !h;
            ++L < N;

          )
            K[L] = o[L]
          for (; ++m < E; ) (Y || m < b) && (K[u[m]] = r[m])
          for (; q--; ) K[L++] = r[m++]
          return K
        }
        function Sg(r, o, u, h) {
          for (
            var m = -1,
              b = r.length,
              E = -1,
              L = u.length,
              N = -1,
              q = o.length,
              K = ot(b - L, 0),
              Y = U(K + q),
              te = !h;
            ++m < K;

          )
            Y[m] = r[m]
          for (var ie = m; ++N < q; ) Y[ie + N] = o[N]
          for (; ++E < L; ) (te || m < b) && (Y[ie + u[E]] = r[m++])
          return Y
        }
        function Wt(r, o) {
          var u = -1,
            h = r.length
          for (o || (o = U(h)); ++u < h; ) o[u] = r[u]
          return o
        }
        function Xn(r, o, u, h) {
          var m = !u
          u || (u = {})
          for (var b = -1, E = o.length; ++b < E; ) {
            var L = o[b],
              N = h ? h(u[L], r[L], L, u, r) : n
            N === n && (N = r[L]), m ? pr(u, L, N) : es(u, L, N)
          }
          return u
        }
        function $w(r, o) {
          return Xn(r, Mf(r), o)
        }
        function Bw(r, o) {
          return Xn(r, Ng(r), o)
        }
        function ru(r, o) {
          return function (u, h) {
            var m = de(u) ? Ka : cw,
              b = o ? o() : {}
            return m(u, r, ae(h, 2), b)
          }
        }
        function Ao(r) {
          return me(function (o, u) {
            var h = -1,
              m = u.length,
              b = m > 1 ? u[m - 1] : n,
              E = m > 2 ? u[2] : n
            for (
              b = r.length > 3 && typeof b == 'function' ? (m--, b) : n,
                E && Dt(u[0], u[1], E) && ((b = m < 3 ? n : b), (m = 1)),
                o = Ne(o);
              ++h < m;

            ) {
              var L = u[h]
              L && r(o, L, h, b)
            }
            return o
          })
        }
        function Eg(r, o) {
          return function (u, h) {
            if (u == null) return u
            if (!qt(u)) return r(u, h)
            for (
              var m = u.length, b = o ? m : -1, E = Ne(u);
              (o ? b-- : ++b < m) && h(E[b], b, E) !== !1;

            );
            return u
          }
        }
        function xg(r) {
          return function (o, u, h) {
            for (var m = -1, b = Ne(o), E = h(o), L = E.length; L--; ) {
              var N = E[r ? L : ++m]
              if (u(b[N], N, b) === !1) break
            }
            return o
          }
        }
        function Hw(r, o, u) {
          var h = o & Q,
            m = os(r)
          function b() {
            var E = this && this !== et && this instanceof b ? m : r
            return E.apply(h ? u : this, arguments)
          }
          return b
        }
        function Tg(r) {
          return function (o) {
            o = Ce(o)
            var u = To(o) ? Dn(o) : n,
              h = u ? u[0] : o.charAt(0),
              m = u ? Zr(u, 1).join('') : o.slice(1)
            return h[r]() + m
          }
        }
        function Do(r) {
          return function (o) {
            return xo(Em(Sm(o).replace(rf, '')), r, '')
          }
        }
        function os(r) {
          return function () {
            var o = arguments
            switch (o.length) {
              case 0:
                return new r()
              case 1:
                return new r(o[0])
              case 2:
                return new r(o[0], o[1])
              case 3:
                return new r(o[0], o[1], o[2])
              case 4:
                return new r(o[0], o[1], o[2], o[3])
              case 5:
                return new r(o[0], o[1], o[2], o[3], o[4])
              case 6:
                return new r(o[0], o[1], o[2], o[3], o[4], o[5])
              case 7:
                return new r(o[0], o[1], o[2], o[3], o[4], o[5], o[6])
            }
            var u = Io(r.prototype),
              h = r.apply(u, o)
            return Be(h) ? h : u
          }
        }
        function Vw(r, o, u) {
          var h = os(r)
          function m() {
            for (var b = arguments.length, E = U(b), L = b, N = zo(m); L--; )
              E[L] = arguments[L]
            var q = b < 3 && E[0] !== N && E[b - 1] !== N ? [] : Yr(E, N)
            if (((b -= q.length), b < u))
              return Lg(r, o, iu, m.placeholder, n, E, q, n, n, u - b)
            var K = this && this !== et && this instanceof m ? h : r
            return wt(K, this, E)
          }
          return m
        }
        function Cg(r) {
          return function (o, u, h) {
            var m = Ne(o)
            if (!qt(o)) {
              var b = ae(u, 3)
              ;(o = ct(o)),
                (u = function (L) {
                  return b(m[L], L, m)
                })
            }
            var E = r(o, u, h)
            return E > -1 ? m[b ? o[E] : E] : n
          }
        }
        function Pg(r) {
          return mr(function (o) {
            var u = o.length,
              h = u,
              m = vn.prototype.thru
            for (r && o.reverse(); h--; ) {
              var b = o[h]
              if (typeof b != 'function') throw new mn(c)
              if (m && !E && lu(b) == 'wrapper') var E = new vn([], !0)
            }
            for (h = E ? h : u; ++h < u; ) {
              b = o[h]
              var L = lu(b),
                N = L == 'wrapper' ? zf(b) : n
              N &&
              Ff(N[0]) &&
              N[1] == (S | A | G | k) &&
              !N[4].length &&
              N[9] == 1
                ? (E = E[lu(N[0])].apply(E, N[3]))
                : (E = b.length == 1 && Ff(b) ? E[L]() : E.thru(b))
            }
            return function () {
              var q = arguments,
                K = q[0]
              if (E && q.length == 1 && de(K)) return E.plant(K).value()
              for (var Y = 0, te = u ? o[Y].apply(this, q) : K; ++Y < u; )
                te = o[Y].call(this, te)
              return te
            }
          })
        }
        function iu(r, o, u, h, m, b, E, L, N, q) {
          var K = o & S,
            Y = o & Q,
            te = o & I,
            ie = o & (A | B),
            se = o & T,
            ge = te ? n : os(r)
          function le() {
            for (var ve = arguments.length, we = U(ve), an = ve; an--; )
              we[an] = arguments[an]
            if (ie)
              var zt = zo(le),
                sn = nb(we, zt)
            if (
              (h && (we = _g(we, h, m, ie)),
              b && (we = Sg(we, b, E, ie)),
              (ve -= sn),
              ie && ve < q)
            ) {
              var Xe = Yr(we, zt)
              return Lg(r, o, iu, le.placeholder, u, we, Xe, L, N, q - ve)
            }
            var Mn = Y ? u : this,
              wr = te ? Mn[r] : r
            return (
              (ve = we.length),
              L ? (we = c2(we, L)) : se && ve > 1 && we.reverse(),
              K && N < ve && (we.length = N),
              this && this !== et && this instanceof le && (wr = ge || os(wr)),
              wr.apply(Mn, we)
            )
          }
          return le
        }
        function Og(r, o) {
          return function (u, h) {
            return yw(u, r, o(h), {})
          }
        }
        function ou(r, o) {
          return function (u, h) {
            var m
            if (u === n && h === n) return o
            if ((u !== n && (m = u), h !== n)) {
              if (m === n) return h
              typeof u == 'string' || typeof h == 'string'
                ? ((u = rn(u)), (h = rn(h)))
                : ((u = pg(u)), (h = pg(h))),
                (m = r(u, h))
            }
            return m
          }
        }
        function Lf(r) {
          return mr(function (o) {
            return (
              (o = ze(o, ut(ae()))),
              me(function (u) {
                var h = this
                return r(o, function (m) {
                  return wt(m, h, u)
                })
              })
            )
          })
        }
        function au(r, o) {
          o = o === n ? ' ' : rn(o)
          var u = o.length
          if (u < 2) return u ? Ef(o, r) : o
          var h = Ef(o, ql(r / Co(o)))
          return To(o) ? Zr(Dn(h), 0, r).join('') : h.slice(0, r)
        }
        function Ww(r, o, u, h) {
          var m = o & Q,
            b = os(r)
          function E() {
            for (
              var L = -1,
                N = arguments.length,
                q = -1,
                K = h.length,
                Y = U(K + N),
                te = this && this !== et && this instanceof E ? b : r;
              ++q < K;

            )
              Y[q] = h[q]
            for (; N--; ) Y[q++] = arguments[++L]
            return wt(te, m ? u : this, Y)
          }
          return E
        }
        function Rg(r) {
          return function (o, u, h) {
            return (
              h && typeof h != 'number' && Dt(o, u, h) && (u = h = n),
              (o = br(o)),
              u === n ? ((u = o), (o = 0)) : (u = br(u)),
              (h = h === n ? (o < u ? 1 : -1) : br(h)),
              Rw(o, u, h, r)
            )
          }
        }
        function su(r) {
          return function (o, u) {
            return (
              (typeof o == 'string' && typeof u == 'string') ||
                ((o = kn(o)), (u = kn(u))),
              r(o, u)
            )
          }
        }
        function Lg(r, o, u, h, m, b, E, L, N, q) {
          var K = o & A,
            Y = K ? E : n,
            te = K ? n : E,
            ie = K ? b : n,
            se = K ? n : b
          ;(o |= K ? G : X), (o &= ~(K ? X : G)), o & x || (o &= ~(Q | I))
          var ge = [r, o, m, ie, Y, se, te, L, N, q],
            le = u.apply(n, ge)
          return Ff(r) && Hg(le, ge), (le.placeholder = h), Vg(le, r, o)
        }
        function If(r) {
          var o = it[r]
          return function (u, h) {
            if (
              ((u = kn(u)), (h = h == null ? 0 : St(pe(h), 292)), h && Vp(u))
            ) {
              var m = (Ce(u) + 'e').split('e'),
                b = o(m[0] + 'e' + (+m[1] + h))
              return (m = (Ce(b) + 'e').split('e')), +(m[0] + 'e' + (+m[1] - h))
            }
            return o(u)
          }
        }
        var qw =
          Ro && 1 / Nl(new Ro([, -0]))[1] == Ee
            ? function (r) {
                return new Ro(r)
              }
            : eh
        function Ig(r) {
          return function (o) {
            var u = Et(o)
            return u == Lt ? lf(o) : u == It ? ub(o) : Kr(o, r(o))
          }
        }
        function gr(r, o, u, h, m, b, E, L) {
          var N = o & I
          if (!N && typeof r != 'function') throw new mn(c)
          var q = h ? h.length : 0
          if (
            (q || ((o &= ~(G | X)), (h = m = n)),
            (E = E === n ? E : ot(pe(E), 0)),
            (L = L === n ? L : pe(L)),
            (q -= m ? m.length : 0),
            o & X)
          ) {
            var K = h,
              Y = m
            h = m = n
          }
          var te = N ? n : zf(r),
            ie = [r, o, u, h, m, K, Y, b, E, L]
          if (
            (te && s2(ie, te),
            (r = ie[0]),
            (o = ie[1]),
            (u = ie[2]),
            (h = ie[3]),
            (m = ie[4]),
            (L = ie[9] = ie[9] === n ? (N ? 0 : r.length) : ot(ie[9] - q, 0)),
            !L && o & (A | B) && (o &= ~(A | B)),
            !o || o == Q)
          )
            var se = Hw(r, o, u)
          else
            o == A || o == B
              ? (se = Vw(r, o, L))
              : (o == G || o == (Q | G)) && !m.length
              ? (se = Ww(r, o, u, h))
              : (se = iu.apply(n, ie))
          var ge = te ? hg : Hg
          return Vg(ge(se, ie), r, o)
        }
        function Ag(r, o, u, h) {
          return r === n || (Nn(r, Oo[u]) && !Le.call(h, u)) ? o : r
        }
        function Dg(r, o, u, h, m, b) {
          return (
            Be(r) && Be(o) && (b.set(o, r), eu(r, o, n, Dg, b), b.delete(o)), r
          )
        }
        function Kw(r) {
          return ls(r) ? n : r
        }
        function zg(r, o, u, h, m, b) {
          var E = u & F,
            L = r.length,
            N = o.length
          if (L != N && !(E && N > L)) return !1
          var q = b.get(r),
            K = b.get(o)
          if (q && K) return q == o && K == r
          var Y = -1,
            te = !0,
            ie = u & W ? new Ui() : n
          for (b.set(r, o), b.set(o, r); ++Y < L; ) {
            var se = r[Y],
              ge = o[Y]
            if (h) var le = E ? h(ge, se, Y, o, r, b) : h(se, ge, Y, r, o, b)
            if (le !== n) {
              if (le) continue
              te = !1
              break
            }
            if (ie) {
              if (
                !_t(o, function (ve, we) {
                  if (!Ya(ie, we) && (se === ve || m(se, ve, u, h, b)))
                    return ie.push(we)
                })
              ) {
                te = !1
                break
              }
            } else if (!(se === ge || m(se, ge, u, h, b))) {
              te = !1
              break
            }
          }
          return b.delete(r), b.delete(o), te
        }
        function Yw(r, o, u, h, m, b, E) {
          switch (u) {
            case Ke:
              if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
                return !1
              ;(r = r.buffer), (o = o.buffer)
            case qe:
              return !(r.byteLength != o.byteLength || !b(new Bl(r), new Bl(o)))
            case Ei:
            case xi:
            case sr:
              return Nn(+r, +o)
            case ar:
              return r.name == o.name && r.message == o.message
            case Ar:
            case Dr:
              return r == o + ''
            case Lt:
              var L = lf
            case It:
              var N = h & F
              if ((L || (L = Nl), r.size != o.size && !N)) return !1
              var q = E.get(r)
              if (q) return q == o
              ;(h |= W), E.set(r, o)
              var K = zg(L(r), L(o), h, m, b, E)
              return E.delete(r), K
            case co:
              if (Za) return Za.call(r) == Za.call(o)
          }
          return !1
        }
        function Gw(r, o, u, h, m, b) {
          var E = u & F,
            L = Af(r),
            N = L.length,
            q = Af(o),
            K = q.length
          if (N != K && !E) return !1
          for (var Y = N; Y--; ) {
            var te = L[Y]
            if (!(E ? te in o : Le.call(o, te))) return !1
          }
          var ie = b.get(r),
            se = b.get(o)
          if (ie && se) return ie == o && se == r
          var ge = !0
          b.set(r, o), b.set(o, r)
          for (var le = E; ++Y < N; ) {
            te = L[Y]
            var ve = r[te],
              we = o[te]
            if (h) var an = E ? h(we, ve, te, o, r, b) : h(ve, we, te, r, o, b)
            if (!(an === n ? ve === we || m(ve, we, u, h, b) : an)) {
              ge = !1
              break
            }
            le || (le = te == 'constructor')
          }
          if (ge && !le) {
            var zt = r.constructor,
              sn = o.constructor
            zt != sn &&
              'constructor' in r &&
              'constructor' in o &&
              !(
                typeof zt == 'function' &&
                zt instanceof zt &&
                typeof sn == 'function' &&
                sn instanceof sn
              ) &&
              (ge = !1)
          }
          return b.delete(r), b.delete(o), ge
        }
        function mr(r) {
          return $f($g(r, n, Qg), r + '')
        }
        function Af(r) {
          return tg(r, ct, Mf)
        }
        function Df(r) {
          return tg(r, Kt, Ng)
        }
        var zf = Yl
          ? function (r) {
              return Yl.get(r)
            }
          : eh
        function lu(r) {
          for (
            var o = r.name + '', u = Lo[o], h = Le.call(Lo, o) ? u.length : 0;
            h--;

          ) {
            var m = u[h],
              b = m.func
            if (b == null || b == r) return m.name
          }
          return o
        }
        function zo(r) {
          var o = Le.call(v, 'placeholder') ? v : r
          return o.placeholder
        }
        function ae() {
          var r = v.iteratee || Xf
          return (
            (r = r === Xf ? ig : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          )
        }
        function uu(r, o) {
          var u = r.__data__
          return r2(o) ? u[typeof o == 'string' ? 'string' : 'hash'] : u.map
        }
        function Nf(r) {
          for (var o = ct(r), u = o.length; u--; ) {
            var h = o[u],
              m = r[h]
            o[u] = [h, m, Fg(m)]
          }
          return o
        }
        function Hi(r, o) {
          var u = ab(r, o)
          return rg(u) ? u : n
        }
        function Qw(r) {
          var o = Le.call(r, ji),
            u = r[ji]
          try {
            r[ji] = n
            var h = !0
          } catch {}
          var m = Ul.call(r)
          return h && (o ? (r[ji] = u) : delete r[ji]), m
        }
        var Mf = cf
            ? function (r) {
                return r == null
                  ? []
                  : ((r = Ne(r)),
                    Ln(cf(r), function (o) {
                      return Bp.call(r, o)
                    }))
              }
            : th,
          Ng = cf
            ? function (r) {
                for (var o = []; r; ) An(o, Mf(r)), (r = Hl(r))
                return o
              }
            : th,
          Et = At
        ;((ff && Et(new ff(new ArrayBuffer(1))) != Ke) ||
          (Qa && Et(new Qa()) != Lt) ||
          (hf && Et(hf.resolve()) != ll) ||
          (Ro && Et(new Ro()) != It) ||
          (Ja && Et(new Ja()) != lr)) &&
          (Et = function (r) {
            var o = At(r),
              u = o == gn ? r.constructor : n,
              h = u ? Vi(u) : ''
            if (h)
              switch (h) {
                case Ib:
                  return Ke
                case Ab:
                  return Lt
                case Db:
                  return ll
                case zb:
                  return It
                case Nb:
                  return lr
              }
            return o
          })
        function Jw(r, o, u) {
          for (var h = -1, m = u.length; ++h < m; ) {
            var b = u[h],
              E = b.size
            switch (b.type) {
              case 'drop':
                r += E
                break
              case 'dropRight':
                o -= E
                break
              case 'take':
                o = St(o, r + E)
                break
              case 'takeRight':
                r = ot(r, o - E)
                break
            }
          }
          return { start: r, end: o }
        }
        function Xw(r) {
          var o = r.match(Gc)
          return o ? o[1].split(Qc) : []
        }
        function Mg(r, o, u) {
          o = Xr(o, r)
          for (var h = -1, m = o.length, b = !1; ++h < m; ) {
            var E = Zn(o[h])
            if (!(b = r != null && u(r, E))) break
            r = r[E]
          }
          return b || ++h != m
            ? b
            : ((m = r == null ? 0 : r.length),
              !!m && mu(m) && vr(E, m) && (de(r) || Wi(r)))
        }
        function Zw(r) {
          var o = r.length,
            u = new r.constructor(o)
          return (
            o &&
              typeof r[0] == 'string' &&
              Le.call(r, 'index') &&
              ((u.index = r.index), (u.input = r.input)),
            u
          )
        }
        function jg(r) {
          return typeof r.constructor == 'function' && !as(r) ? Io(Hl(r)) : {}
        }
        function e2(r, o, u) {
          var h = r.constructor
          switch (o) {
            case qe:
              return Rf(r)
            case Ei:
            case xi:
              return new h(+r)
            case Ke:
              return Mw(r, u)
            case zr:
            case fo:
            case ho:
            case wa:
            case ur:
            case po:
            case go:
            case Ti:
            case ka:
              return wg(r, u)
            case Lt:
              return new h()
            case sr:
            case Dr:
              return new h(r)
            case Ar:
              return jw(r)
            case It:
              return new h()
            case co:
              return Fw(r)
          }
        }
        function t2(r, o) {
          var u = o.length
          if (!u) return r
          var h = u - 1
          return (
            (o[h] = (u > 1 ? '& ' : '') + o[h]),
            (o = o.join(u > 2 ? ', ' : ' ')),
            r.replace(
              jr,
              `{
/* [wrapped with ` +
                o +
                `] */
`
            )
          )
        }
        function n2(r) {
          return de(r) || Wi(r) || !!(Hp && r && r[Hp])
        }
        function vr(r, o) {
          var u = typeof r
          return (
            (o = o ?? Z),
            !!o &&
              (u == 'number' || (u != 'symbol' && Jc.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < o
          )
        }
        function Dt(r, o, u) {
          if (!Be(u)) return !1
          var h = typeof o
          return (
            h == 'number' ? qt(u) && vr(o, u.length) : h == 'string' && o in u
          )
            ? Nn(u[o], r)
            : !1
        }
        function jf(r, o) {
          if (de(r)) return !1
          var u = typeof r
          return u == 'number' ||
            u == 'symbol' ||
            u == 'boolean' ||
            r == null ||
            on(r)
            ? !0
            : dt.test(r) || !dl.test(r) || (o != null && r in Ne(o))
        }
        function r2(r) {
          var o = typeof r
          return o == 'string' ||
            o == 'number' ||
            o == 'symbol' ||
            o == 'boolean'
            ? r !== '__proto__'
            : r === null
        }
        function Ff(r) {
          var o = lu(r),
            u = v[o]
          if (typeof u != 'function' || !(o in ye.prototype)) return !1
          if (r === u) return !0
          var h = zf(u)
          return !!h && r === h[0]
        }
        function i2(r) {
          return !!Fp && Fp in r
        }
        var o2 = jl ? yr : nh
        function as(r) {
          var o = r && r.constructor,
            u = (typeof o == 'function' && o.prototype) || Oo
          return r === u
        }
        function Fg(r) {
          return r === r && !Be(r)
        }
        function Ug(r, o) {
          return function (u) {
            return u == null ? !1 : u[r] === o && (o !== n || r in Ne(u))
          }
        }
        function a2(r) {
          var o = pu(r, function (h) {
              return u.size === w && u.clear(), h
            }),
            u = o.cache
          return o
        }
        function s2(r, o) {
          var u = r[1],
            h = o[1],
            m = u | h,
            b = m < (Q | I | S),
            E =
              (h == S && u == A) ||
              (h == S && u == k && r[7].length <= o[8]) ||
              (h == (S | k) && o[7].length <= o[8] && u == A)
          if (!(b || E)) return r
          h & Q && ((r[2] = o[2]), (m |= u & Q ? 0 : x))
          var L = o[3]
          if (L) {
            var N = r[3]
            ;(r[3] = N ? _g(N, L, o[4]) : L), (r[4] = N ? Yr(r[3], O) : o[4])
          }
          return (
            (L = o[5]),
            L &&
              ((N = r[5]),
              (r[5] = N ? Sg(N, L, o[6]) : L),
              (r[6] = N ? Yr(r[5], O) : o[6])),
            (L = o[7]),
            L && (r[7] = L),
            h & S && (r[8] = r[8] == null ? o[8] : St(r[8], o[8])),
            r[9] == null && (r[9] = o[9]),
            (r[0] = o[0]),
            (r[1] = m),
            r
          )
        }
        function l2(r) {
          var o = []
          if (r != null) for (var u in Ne(r)) o.push(u)
          return o
        }
        function u2(r) {
          return Ul.call(r)
        }
        function $g(r, o, u) {
          return (
            (o = ot(o === n ? r.length - 1 : o, 0)),
            function () {
              for (
                var h = arguments, m = -1, b = ot(h.length - o, 0), E = U(b);
                ++m < b;

              )
                E[m] = h[o + m]
              m = -1
              for (var L = U(o + 1); ++m < o; ) L[m] = h[m]
              return (L[o] = u(E)), wt(r, this, L)
            }
          )
        }
        function Bg(r, o) {
          return o.length < 2 ? r : Bi(r, bn(o, 0, -1))
        }
        function c2(r, o) {
          for (var u = r.length, h = St(o.length, u), m = Wt(r); h--; ) {
            var b = o[h]
            r[h] = vr(b, u) ? m[b] : n
          }
          return r
        }
        function Uf(r, o) {
          if (
            !(o === 'constructor' && typeof r[o] == 'function') &&
            o != '__proto__'
          )
            return r[o]
        }
        var Hg = Wg(hg),
          ss =
            xb ||
            function (r, o) {
              return et.setTimeout(r, o)
            },
          $f = Wg(Aw)
        function Vg(r, o, u) {
          var h = o + ''
          return $f(r, t2(h, f2(Xw(h), u)))
        }
        function Wg(r) {
          var o = 0,
            u = 0
          return function () {
            var h = Ob(),
              m = C - (h - u)
            if (((u = h), m > 0)) {
              if (++o >= j) return arguments[0]
            } else o = 0
            return r.apply(n, arguments)
          }
        }
        function cu(r, o) {
          var u = -1,
            h = r.length,
            m = h - 1
          for (o = o === n ? h : o; ++u < o; ) {
            var b = Sf(u, m),
              E = r[b]
            ;(r[b] = r[u]), (r[u] = E)
          }
          return (r.length = o), r
        }
        var qg = a2(function (r) {
          var o = []
          return (
            r.charCodeAt(0) === 46 && o.push(''),
            r.replace(pl, function (u, h, m, b) {
              o.push(m ? b.replace(Kn, '$1') : h || u)
            }),
            o
          )
        })
        function Zn(r) {
          if (typeof r == 'string' || on(r)) return r
          var o = r + ''
          return o == '0' && 1 / r == -Ee ? '-0' : o
        }
        function Vi(r) {
          if (r != null) {
            try {
              return Fl.call(r)
            } catch {}
            try {
              return r + ''
            } catch {}
          }
          return ''
        }
        function f2(r, o) {
          return (
            kt(Pn, function (u) {
              var h = '_.' + u[0]
              o & u[1] && !Ni(r, h) && r.push(h)
            }),
            r.sort()
          )
        }
        function Kg(r) {
          if (r instanceof ye) return r.clone()
          var o = new vn(r.__wrapped__, r.__chain__)
          return (
            (o.__actions__ = Wt(r.__actions__)),
            (o.__index__ = r.__index__),
            (o.__values__ = r.__values__),
            o
          )
        }
        function h2(r, o, u) {
          ;(u ? Dt(r, o, u) : o === n) ? (o = 1) : (o = ot(pe(o), 0))
          var h = r == null ? 0 : r.length
          if (!h || o < 1) return []
          for (var m = 0, b = 0, E = U(ql(h / o)); m < h; )
            E[b++] = bn(r, m, (m += o))
          return E
        }
        function d2(r) {
          for (
            var o = -1, u = r == null ? 0 : r.length, h = 0, m = [];
            ++o < u;

          ) {
            var b = r[o]
            b && (m[h++] = b)
          }
          return m
        }
        function p2() {
          var r = arguments.length
          if (!r) return []
          for (var o = U(r - 1), u = arguments[0], h = r; h--; )
            o[h - 1] = arguments[h]
          return An(de(u) ? Wt(u) : [u], gt(o, 1))
        }
        var g2 = me(function (r, o) {
            return Je(r) ? ts(r, gt(o, 1, Je, !0)) : []
          }),
          m2 = me(function (r, o) {
            var u = wn(o)
            return (
              Je(u) && (u = n), Je(r) ? ts(r, gt(o, 1, Je, !0), ae(u, 2)) : []
            )
          }),
          v2 = me(function (r, o) {
            var u = wn(o)
            return Je(u) && (u = n), Je(r) ? ts(r, gt(o, 1, Je, !0), n, u) : []
          })
        function y2(r, o, u) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = u || o === n ? 1 : pe(o)), bn(r, o < 0 ? 0 : o, h))
            : []
        }
        function b2(r, o, u) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = u || o === n ? 1 : pe(o)),
              (o = h - o),
              bn(r, 0, o < 0 ? 0 : o))
            : []
        }
        function w2(r, o) {
          return r && r.length ? nu(r, ae(o, 3), !0, !0) : []
        }
        function k2(r, o) {
          return r && r.length ? nu(r, ae(o, 3), !0) : []
        }
        function _2(r, o, u, h) {
          var m = r == null ? 0 : r.length
          return m
            ? (u && typeof u != 'number' && Dt(r, o, u) && ((u = 0), (h = m)),
              pw(r, o, u, h))
            : []
        }
        function Yg(r, o, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = u == null ? 0 : pe(u)
          return m < 0 && (m = ot(h + m, 0)), f(r, ae(o, 3), m)
        }
        function Gg(r, o, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h - 1
          return (
            u !== n && ((m = pe(u)), (m = u < 0 ? ot(h + m, 0) : St(m, h - 1))),
            f(r, ae(o, 3), m, !0)
          )
        }
        function Qg(r) {
          var o = r == null ? 0 : r.length
          return o ? gt(r, 1) : []
        }
        function S2(r) {
          var o = r == null ? 0 : r.length
          return o ? gt(r, Ee) : []
        }
        function E2(r, o) {
          var u = r == null ? 0 : r.length
          return u ? ((o = o === n ? 1 : pe(o)), gt(r, o)) : []
        }
        function x2(r) {
          for (var o = -1, u = r == null ? 0 : r.length, h = {}; ++o < u; ) {
            var m = r[o]
            h[m[0]] = m[1]
          }
          return h
        }
        function Jg(r) {
          return r && r.length ? r[0] : n
        }
        function T2(r, o, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = u == null ? 0 : pe(u)
          return m < 0 && (m = ot(h + m, 0)), p(r, o, m)
        }
        function C2(r) {
          var o = r == null ? 0 : r.length
          return o ? bn(r, 0, -1) : []
        }
        var P2 = me(function (r) {
            var o = ze(r, Pf)
            return o.length && o[0] === r[0] ? yf(o) : []
          }),
          O2 = me(function (r) {
            var o = wn(r),
              u = ze(r, Pf)
            return (
              o === wn(u) ? (o = n) : u.pop(),
              u.length && u[0] === r[0] ? yf(u, ae(o, 2)) : []
            )
          }),
          R2 = me(function (r) {
            var o = wn(r),
              u = ze(r, Pf)
            return (
              (o = typeof o == 'function' ? o : n),
              o && u.pop(),
              u.length && u[0] === r[0] ? yf(u, n, o) : []
            )
          })
        function L2(r, o) {
          return r == null ? '' : Cb.call(r, o)
        }
        function wn(r) {
          var o = r == null ? 0 : r.length
          return o ? r[o - 1] : n
        }
        function I2(r, o, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h
          return (
            u !== n && ((m = pe(u)), (m = m < 0 ? ot(h + m, 0) : St(m, h - 1))),
            o === o ? fb(r, o, m) : f(r, M, m, !0)
          )
        }
        function A2(r, o) {
          return r && r.length ? lg(r, pe(o)) : n
        }
        var D2 = me(Xg)
        function Xg(r, o) {
          return r && r.length && o && o.length ? _f(r, o) : r
        }
        function z2(r, o, u) {
          return r && r.length && o && o.length ? _f(r, o, ae(u, 2)) : r
        }
        function N2(r, o, u) {
          return r && r.length && o && o.length ? _f(r, o, n, u) : r
        }
        var M2 = mr(function (r, o) {
          var u = r == null ? 0 : r.length,
            h = pf(r, o)
          return (
            fg(
              r,
              ze(o, function (m) {
                return vr(m, u) ? +m : m
              }).sort(kg)
            ),
            h
          )
        })
        function j2(r, o) {
          var u = []
          if (!(r && r.length)) return u
          var h = -1,
            m = [],
            b = r.length
          for (o = ae(o, 3); ++h < b; ) {
            var E = r[h]
            o(E, h, r) && (u.push(E), m.push(h))
          }
          return fg(r, m), u
        }
        function Bf(r) {
          return r == null ? r : Lb.call(r)
        }
        function F2(r, o, u) {
          var h = r == null ? 0 : r.length
          return h
            ? (u && typeof u != 'number' && Dt(r, o, u)
                ? ((o = 0), (u = h))
                : ((o = o == null ? 0 : pe(o)), (u = u === n ? h : pe(u))),
              bn(r, o, u))
            : []
        }
        function U2(r, o) {
          return tu(r, o)
        }
        function $2(r, o, u) {
          return xf(r, o, ae(u, 2))
        }
        function B2(r, o) {
          var u = r == null ? 0 : r.length
          if (u) {
            var h = tu(r, o)
            if (h < u && Nn(r[h], o)) return h
          }
          return -1
        }
        function H2(r, o) {
          return tu(r, o, !0)
        }
        function V2(r, o, u) {
          return xf(r, o, ae(u, 2), !0)
        }
        function W2(r, o) {
          var u = r == null ? 0 : r.length
          if (u) {
            var h = tu(r, o, !0) - 1
            if (Nn(r[h], o)) return h
          }
          return -1
        }
        function q2(r) {
          return r && r.length ? dg(r) : []
        }
        function K2(r, o) {
          return r && r.length ? dg(r, ae(o, 2)) : []
        }
        function Y2(r) {
          var o = r == null ? 0 : r.length
          return o ? bn(r, 1, o) : []
        }
        function G2(r, o, u) {
          return r && r.length
            ? ((o = u || o === n ? 1 : pe(o)), bn(r, 0, o < 0 ? 0 : o))
            : []
        }
        function Q2(r, o, u) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = u || o === n ? 1 : pe(o)),
              (o = h - o),
              bn(r, o < 0 ? 0 : o, h))
            : []
        }
        function J2(r, o) {
          return r && r.length ? nu(r, ae(o, 3), !1, !0) : []
        }
        function X2(r, o) {
          return r && r.length ? nu(r, ae(o, 3)) : []
        }
        var Z2 = me(function (r) {
            return Jr(gt(r, 1, Je, !0))
          }),
          ek = me(function (r) {
            var o = wn(r)
            return Je(o) && (o = n), Jr(gt(r, 1, Je, !0), ae(o, 2))
          }),
          tk = me(function (r) {
            var o = wn(r)
            return (
              (o = typeof o == 'function' ? o : n), Jr(gt(r, 1, Je, !0), n, o)
            )
          })
        function nk(r) {
          return r && r.length ? Jr(r) : []
        }
        function rk(r, o) {
          return r && r.length ? Jr(r, ae(o, 2)) : []
        }
        function ik(r, o) {
          return (
            (o = typeof o == 'function' ? o : n),
            r && r.length ? Jr(r, n, o) : []
          )
        }
        function Hf(r) {
          if (!(r && r.length)) return []
          var o = 0
          return (
            (r = Ln(r, function (u) {
              if (Je(u)) return (o = ot(u.length, o)), !0
            })),
            lt(o, function (u) {
              return ze(r, ee(u))
            })
          )
        }
        function Zg(r, o) {
          if (!(r && r.length)) return []
          var u = Hf(r)
          return o == null
            ? u
            : ze(u, function (h) {
                return wt(o, n, h)
              })
        }
        var ok = me(function (r, o) {
            return Je(r) ? ts(r, o) : []
          }),
          ak = me(function (r) {
            return Cf(Ln(r, Je))
          }),
          sk = me(function (r) {
            var o = wn(r)
            return Je(o) && (o = n), Cf(Ln(r, Je), ae(o, 2))
          }),
          lk = me(function (r) {
            var o = wn(r)
            return (o = typeof o == 'function' ? o : n), Cf(Ln(r, Je), n, o)
          }),
          uk = me(Hf)
        function ck(r, o) {
          return vg(r || [], o || [], es)
        }
        function fk(r, o) {
          return vg(r || [], o || [], is)
        }
        var hk = me(function (r) {
          var o = r.length,
            u = o > 1 ? r[o - 1] : n
          return (u = typeof u == 'function' ? (r.pop(), u) : n), Zg(r, u)
        })
        function em(r) {
          var o = v(r)
          return (o.__chain__ = !0), o
        }
        function dk(r, o) {
          return o(r), r
        }
        function fu(r, o) {
          return o(r)
        }
        var pk = mr(function (r) {
          var o = r.length,
            u = o ? r[0] : 0,
            h = this.__wrapped__,
            m = function (b) {
              return pf(b, r)
            }
          return o > 1 ||
            this.__actions__.length ||
            !(h instanceof ye) ||
            !vr(u)
            ? this.thru(m)
            : ((h = h.slice(u, +u + (o ? 1 : 0))),
              h.__actions__.push({ func: fu, args: [m], thisArg: n }),
              new vn(h, this.__chain__).thru(function (b) {
                return o && !b.length && b.push(n), b
              }))
        })
        function gk() {
          return em(this)
        }
        function mk() {
          return new vn(this.value(), this.__chain__)
        }
        function vk() {
          this.__values__ === n && (this.__values__ = pm(this.value()))
          var r = this.__index__ >= this.__values__.length,
            o = r ? n : this.__values__[this.__index__++]
          return { done: r, value: o }
        }
        function yk() {
          return this
        }
        function bk(r) {
          for (var o, u = this; u instanceof Ql; ) {
            var h = Kg(u)
            ;(h.__index__ = 0),
              (h.__values__ = n),
              o ? (m.__wrapped__ = h) : (o = h)
            var m = h
            u = u.__wrapped__
          }
          return (m.__wrapped__ = r), o
        }
        function wk() {
          var r = this.__wrapped__
          if (r instanceof ye) {
            var o = r
            return (
              this.__actions__.length && (o = new ye(this)),
              (o = o.reverse()),
              o.__actions__.push({ func: fu, args: [Bf], thisArg: n }),
              new vn(o, this.__chain__)
            )
          }
          return this.thru(Bf)
        }
        function kk() {
          return mg(this.__wrapped__, this.__actions__)
        }
        var _k = ru(function (r, o, u) {
          Le.call(r, u) ? ++r[u] : pr(r, u, 1)
        })
        function Sk(r, o, u) {
          var h = de(r) ? zi : dw
          return u && Dt(r, o, u) && (o = n), h(r, ae(o, 3))
        }
        function Ek(r, o) {
          var u = de(r) ? Ln : Zp
          return u(r, ae(o, 3))
        }
        var xk = Cg(Yg),
          Tk = Cg(Gg)
        function Ck(r, o) {
          return gt(hu(r, o), 1)
        }
        function Pk(r, o) {
          return gt(hu(r, o), Ee)
        }
        function Ok(r, o, u) {
          return (u = u === n ? 1 : pe(u)), gt(hu(r, o), u)
        }
        function tm(r, o) {
          var u = de(r) ? kt : Qr
          return u(r, ae(o, 3))
        }
        function nm(r, o) {
          var u = de(r) ? Il : Xp
          return u(r, ae(o, 3))
        }
        var Rk = ru(function (r, o, u) {
          Le.call(r, u) ? r[u].push(o) : pr(r, u, [o])
        })
        function Lk(r, o, u, h) {
          ;(r = qt(r) ? r : Mo(r)), (u = u && !h ? pe(u) : 0)
          var m = r.length
          return (
            u < 0 && (u = ot(m + u, 0)),
            vu(r) ? u <= m && r.indexOf(o, u) > -1 : !!m && p(r, o, u) > -1
          )
        }
        var Ik = me(function (r, o, u) {
            var h = -1,
              m = typeof o == 'function',
              b = qt(r) ? U(r.length) : []
            return (
              Qr(r, function (E) {
                b[++h] = m ? wt(o, E, u) : ns(E, o, u)
              }),
              b
            )
          }),
          Ak = ru(function (r, o, u) {
            pr(r, u, o)
          })
        function hu(r, o) {
          var u = de(r) ? ze : og
          return u(r, ae(o, 3))
        }
        function Dk(r, o, u, h) {
          return r == null
            ? []
            : (de(o) || (o = o == null ? [] : [o]),
              (u = h ? n : u),
              de(u) || (u = u == null ? [] : [u]),
              ug(r, o, u))
        }
        var zk = ru(
          function (r, o, u) {
            r[u ? 0 : 1].push(o)
          },
          function () {
            return [[], []]
          }
        )
        function Nk(r, o, u) {
          var h = de(r) ? xo : tt,
            m = arguments.length < 3
          return h(r, ae(o, 4), u, m, Qr)
        }
        function Mk(r, o, u) {
          var h = de(r) ? Al : tt,
            m = arguments.length < 3
          return h(r, ae(o, 4), u, m, Xp)
        }
        function jk(r, o) {
          var u = de(r) ? Ln : Zp
          return u(r, gu(ae(o, 3)))
        }
        function Fk(r) {
          var o = de(r) ? Yp : Lw
          return o(r)
        }
        function Uk(r, o, u) {
          ;(u ? Dt(r, o, u) : o === n) ? (o = 1) : (o = pe(o))
          var h = de(r) ? lw : Iw
          return h(r, o)
        }
        function $k(r) {
          var o = de(r) ? uw : Dw
          return o(r)
        }
        function Bk(r) {
          if (r == null) return 0
          if (qt(r)) return vu(r) ? Co(r) : r.length
          var o = Et(r)
          return o == Lt || o == It ? r.size : wf(r).length
        }
        function Hk(r, o, u) {
          var h = de(r) ? _t : zw
          return u && Dt(r, o, u) && (o = n), h(r, ae(o, 3))
        }
        var Vk = me(function (r, o) {
            if (r == null) return []
            var u = o.length
            return (
              u > 1 && Dt(r, o[0], o[1])
                ? (o = [])
                : u > 2 && Dt(o[0], o[1], o[2]) && (o = [o[0]]),
              ug(r, gt(o, 1), [])
            )
          }),
          du =
            Eb ||
            function () {
              return et.Date.now()
            }
        function Wk(r, o) {
          if (typeof o != 'function') throw new mn(c)
          return (
            (r = pe(r)),
            function () {
              if (--r < 1) return o.apply(this, arguments)
            }
          )
        }
        function rm(r, o, u) {
          return (
            (o = u ? n : o),
            (o = r && o == null ? r.length : o),
            gr(r, S, n, n, n, n, o)
          )
        }
        function im(r, o) {
          var u
          if (typeof o != 'function') throw new mn(c)
          return (
            (r = pe(r)),
            function () {
              return (
                --r > 0 && (u = o.apply(this, arguments)), r <= 1 && (o = n), u
              )
            }
          )
        }
        var Vf = me(function (r, o, u) {
            var h = Q
            if (u.length) {
              var m = Yr(u, zo(Vf))
              h |= G
            }
            return gr(r, h, o, u, m)
          }),
          om = me(function (r, o, u) {
            var h = Q | I
            if (u.length) {
              var m = Yr(u, zo(om))
              h |= G
            }
            return gr(o, h, r, u, m)
          })
        function am(r, o, u) {
          o = u ? n : o
          var h = gr(r, A, n, n, n, n, n, o)
          return (h.placeholder = am.placeholder), h
        }
        function sm(r, o, u) {
          o = u ? n : o
          var h = gr(r, B, n, n, n, n, n, o)
          return (h.placeholder = sm.placeholder), h
        }
        function lm(r, o, u) {
          var h,
            m,
            b,
            E,
            L,
            N,
            q = 0,
            K = !1,
            Y = !1,
            te = !0
          if (typeof r != 'function') throw new mn(c)
          ;(o = kn(o) || 0),
            Be(u) &&
              ((K = !!u.leading),
              (Y = 'maxWait' in u),
              (b = Y ? ot(kn(u.maxWait) || 0, o) : b),
              (te = 'trailing' in u ? !!u.trailing : te))
          function ie(Xe) {
            var Mn = h,
              wr = m
            return (h = m = n), (q = Xe), (E = r.apply(wr, Mn)), E
          }
          function se(Xe) {
            return (q = Xe), (L = ss(ve, o)), K ? ie(Xe) : E
          }
          function ge(Xe) {
            var Mn = Xe - N,
              wr = Xe - q,
              Cm = o - Mn
            return Y ? St(Cm, b - wr) : Cm
          }
          function le(Xe) {
            var Mn = Xe - N,
              wr = Xe - q
            return N === n || Mn >= o || Mn < 0 || (Y && wr >= b)
          }
          function ve() {
            var Xe = du()
            if (le(Xe)) return we(Xe)
            L = ss(ve, ge(Xe))
          }
          function we(Xe) {
            return (L = n), te && h ? ie(Xe) : ((h = m = n), E)
          }
          function an() {
            L !== n && yg(L), (q = 0), (h = N = m = L = n)
          }
          function zt() {
            return L === n ? E : we(du())
          }
          function sn() {
            var Xe = du(),
              Mn = le(Xe)
            if (((h = arguments), (m = this), (N = Xe), Mn)) {
              if (L === n) return se(N)
              if (Y) return yg(L), (L = ss(ve, o)), ie(N)
            }
            return L === n && (L = ss(ve, o)), E
          }
          return (sn.cancel = an), (sn.flush = zt), sn
        }
        var qk = me(function (r, o) {
            return Jp(r, 1, o)
          }),
          Kk = me(function (r, o, u) {
            return Jp(r, kn(o) || 0, u)
          })
        function Yk(r) {
          return gr(r, T)
        }
        function pu(r, o) {
          if (typeof r != 'function' || (o != null && typeof o != 'function'))
            throw new mn(c)
          var u = function () {
            var h = arguments,
              m = o ? o.apply(this, h) : h[0],
              b = u.cache
            if (b.has(m)) return b.get(m)
            var E = r.apply(this, h)
            return (u.cache = b.set(m, E) || b), E
          }
          return (u.cache = new (pu.Cache || dr)()), u
        }
        pu.Cache = dr
        function gu(r) {
          if (typeof r != 'function') throw new mn(c)
          return function () {
            var o = arguments
            switch (o.length) {
              case 0:
                return !r.call(this)
              case 1:
                return !r.call(this, o[0])
              case 2:
                return !r.call(this, o[0], o[1])
              case 3:
                return !r.call(this, o[0], o[1], o[2])
            }
            return !r.apply(this, o)
          }
        }
        function Gk(r) {
          return im(2, r)
        }
        var Qk = Nw(function (r, o) {
            o =
              o.length == 1 && de(o[0])
                ? ze(o[0], ut(ae()))
                : ze(gt(o, 1), ut(ae()))
            var u = o.length
            return me(function (h) {
              for (var m = -1, b = St(h.length, u); ++m < b; )
                h[m] = o[m].call(this, h[m])
              return wt(r, this, h)
            })
          }),
          Wf = me(function (r, o) {
            var u = Yr(o, zo(Wf))
            return gr(r, G, n, o, u)
          }),
          um = me(function (r, o) {
            var u = Yr(o, zo(um))
            return gr(r, X, n, o, u)
          }),
          Jk = mr(function (r, o) {
            return gr(r, k, n, n, n, o)
          })
        function Xk(r, o) {
          if (typeof r != 'function') throw new mn(c)
          return (o = o === n ? o : pe(o)), me(r, o)
        }
        function Zk(r, o) {
          if (typeof r != 'function') throw new mn(c)
          return (
            (o = o == null ? 0 : ot(pe(o), 0)),
            me(function (u) {
              var h = u[o],
                m = Zr(u, 0, o)
              return h && An(m, h), wt(r, this, m)
            })
          )
        }
        function e_(r, o, u) {
          var h = !0,
            m = !0
          if (typeof r != 'function') throw new mn(c)
          return (
            Be(u) &&
              ((h = 'leading' in u ? !!u.leading : h),
              (m = 'trailing' in u ? !!u.trailing : m)),
            lm(r, o, { leading: h, maxWait: o, trailing: m })
          )
        }
        function t_(r) {
          return rm(r, 1)
        }
        function n_(r, o) {
          return Wf(Of(o), r)
        }
        function r_() {
          if (!arguments.length) return []
          var r = arguments[0]
          return de(r) ? r : [r]
        }
        function i_(r) {
          return yn(r, H)
        }
        function o_(r, o) {
          return (o = typeof o == 'function' ? o : n), yn(r, H, o)
        }
        function a_(r) {
          return yn(r, R | H)
        }
        function s_(r, o) {
          return (o = typeof o == 'function' ? o : n), yn(r, R | H, o)
        }
        function l_(r, o) {
          return o == null || Qp(r, o, ct(o))
        }
        function Nn(r, o) {
          return r === o || (r !== r && o !== o)
        }
        var u_ = su(vf),
          c_ = su(function (r, o) {
            return r >= o
          }),
          Wi = ng(
            (function () {
              return arguments
            })()
          )
            ? ng
            : function (r) {
                return Ye(r) && Le.call(r, 'callee') && !Bp.call(r, 'callee')
              },
          de = U.isArray,
          f_ = Va ? ut(Va) : bw
        function qt(r) {
          return r != null && mu(r.length) && !yr(r)
        }
        function Je(r) {
          return Ye(r) && qt(r)
        }
        function h_(r) {
          return r === !0 || r === !1 || (Ye(r) && At(r) == Ei)
        }
        var ei = Tb || nh,
          d_ = Di ? ut(Di) : ww
        function p_(r) {
          return Ye(r) && r.nodeType === 1 && !ls(r)
        }
        function g_(r) {
          if (r == null) return !0
          if (
            qt(r) &&
            (de(r) ||
              typeof r == 'string' ||
              typeof r.splice == 'function' ||
              ei(r) ||
              No(r) ||
              Wi(r))
          )
            return !r.length
          var o = Et(r)
          if (o == Lt || o == It) return !r.size
          if (as(r)) return !wf(r).length
          for (var u in r) if (Le.call(r, u)) return !1
          return !0
        }
        function m_(r, o) {
          return rs(r, o)
        }
        function v_(r, o, u) {
          u = typeof u == 'function' ? u : n
          var h = u ? u(r, o) : n
          return h === n ? rs(r, o, n, u) : !!h
        }
        function qf(r) {
          if (!Ye(r)) return !1
          var o = At(r)
          return (
            o == ar ||
            o == lo ||
            (typeof r.message == 'string' &&
              typeof r.name == 'string' &&
              !ls(r))
          )
        }
        function y_(r) {
          return typeof r == 'number' && Vp(r)
        }
        function yr(r) {
          if (!Be(r)) return !1
          var o = At(r)
          return o == Ir || o == uo || o == pn || o == ul
        }
        function cm(r) {
          return typeof r == 'number' && r == pe(r)
        }
        function mu(r) {
          return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= Z
        }
        function Be(r) {
          var o = typeof r
          return r != null && (o == 'object' || o == 'function')
        }
        function Ye(r) {
          return r != null && typeof r == 'object'
        }
        var fm = Ll ? ut(Ll) : _w
        function b_(r, o) {
          return r === o || bf(r, o, Nf(o))
        }
        function w_(r, o, u) {
          return (u = typeof u == 'function' ? u : n), bf(r, o, Nf(o), u)
        }
        function k_(r) {
          return hm(r) && r != +r
        }
        function __(r) {
          if (o2(r)) throw new fe(l)
          return rg(r)
        }
        function S_(r) {
          return r === null
        }
        function E_(r) {
          return r == null
        }
        function hm(r) {
          return typeof r == 'number' || (Ye(r) && At(r) == sr)
        }
        function ls(r) {
          if (!Ye(r) || At(r) != gn) return !1
          var o = Hl(r)
          if (o === null) return !0
          var u = Le.call(o, 'constructor') && o.constructor
          return typeof u == 'function' && u instanceof u && Fl.call(u) == wb
        }
        var Kf = Wa ? ut(Wa) : Sw
        function x_(r) {
          return cm(r) && r >= -Z && r <= Z
        }
        var dm = Wr ? ut(Wr) : Ew
        function vu(r) {
          return typeof r == 'string' || (!de(r) && Ye(r) && At(r) == Dr)
        }
        function on(r) {
          return typeof r == 'symbol' || (Ye(r) && At(r) == co)
        }
        var No = qa ? ut(qa) : xw
        function T_(r) {
          return r === n
        }
        function C_(r) {
          return Ye(r) && Et(r) == lr
        }
        function P_(r) {
          return Ye(r) && At(r) == ba
        }
        var O_ = su(kf),
          R_ = su(function (r, o) {
            return r <= o
          })
        function pm(r) {
          if (!r) return []
          if (qt(r)) return vu(r) ? Dn(r) : Wt(r)
          if (Ga && r[Ga]) return lb(r[Ga]())
          var o = Et(r),
            u = o == Lt ? lf : o == It ? Nl : Mo
          return u(r)
        }
        function br(r) {
          if (!r) return r === 0 ? r : 0
          if (((r = kn(r)), r === Ee || r === -Ee)) {
            var o = r < 0 ? -1 : 1
            return o * oe
          }
          return r === r ? r : 0
        }
        function pe(r) {
          var o = br(r),
            u = o % 1
          return o === o ? (u ? o - u : o) : 0
        }
        function gm(r) {
          return r ? $i(pe(r), 0, ke) : 0
        }
        function kn(r) {
          if (typeof r == 'number') return r
          if (on(r)) return ue
          if (Be(r)) {
            var o = typeof r.valueOf == 'function' ? r.valueOf() : r
            r = Be(o) ? o + '' : o
          }
          if (typeof r != 'string') return r === 0 ? r : +r
          r = Vt(r)
          var u = Pa.test(r)
          return u || vl.test(r)
            ? Eo(r.slice(2), u ? 2 : 8)
            : Ca.test(r)
            ? ue
            : +r
        }
        function mm(r) {
          return Xn(r, Kt(r))
        }
        function L_(r) {
          return r ? $i(pe(r), -Z, Z) : r === 0 ? r : 0
        }
        function Ce(r) {
          return r == null ? '' : rn(r)
        }
        var I_ = Ao(function (r, o) {
            if (as(o) || qt(o)) {
              Xn(o, ct(o), r)
              return
            }
            for (var u in o) Le.call(o, u) && es(r, u, o[u])
          }),
          vm = Ao(function (r, o) {
            Xn(o, Kt(o), r)
          }),
          yu = Ao(function (r, o, u, h) {
            Xn(o, Kt(o), r, h)
          }),
          A_ = Ao(function (r, o, u, h) {
            Xn(o, ct(o), r, h)
          }),
          D_ = mr(pf)
        function z_(r, o) {
          var u = Io(r)
          return o == null ? u : Gp(u, o)
        }
        var N_ = me(function (r, o) {
            r = Ne(r)
            var u = -1,
              h = o.length,
              m = h > 2 ? o[2] : n
            for (m && Dt(o[0], o[1], m) && (h = 1); ++u < h; )
              for (var b = o[u], E = Kt(b), L = -1, N = E.length; ++L < N; ) {
                var q = E[L],
                  K = r[q]
                ;(K === n || (Nn(K, Oo[q]) && !Le.call(r, q))) && (r[q] = b[q])
              }
            return r
          }),
          M_ = me(function (r) {
            return r.push(n, Dg), wt(ym, n, r)
          })
        function j_(r, o) {
          return s(r, ae(o, 3), Jn)
        }
        function F_(r, o) {
          return s(r, ae(o, 3), mf)
        }
        function U_(r, o) {
          return r == null ? r : gf(r, ae(o, 3), Kt)
        }
        function $_(r, o) {
          return r == null ? r : eg(r, ae(o, 3), Kt)
        }
        function B_(r, o) {
          return r && Jn(r, ae(o, 3))
        }
        function H_(r, o) {
          return r && mf(r, ae(o, 3))
        }
        function V_(r) {
          return r == null ? [] : Zl(r, ct(r))
        }
        function W_(r) {
          return r == null ? [] : Zl(r, Kt(r))
        }
        function Yf(r, o, u) {
          var h = r == null ? n : Bi(r, o)
          return h === n ? u : h
        }
        function q_(r, o) {
          return r != null && Mg(r, o, gw)
        }
        function Gf(r, o) {
          return r != null && Mg(r, o, mw)
        }
        var K_ = Og(function (r, o, u) {
            o != null && typeof o.toString != 'function' && (o = Ul.call(o)),
              (r[o] = u)
          }, Jf(Yt)),
          Y_ = Og(function (r, o, u) {
            o != null && typeof o.toString != 'function' && (o = Ul.call(o)),
              Le.call(r, o) ? r[o].push(u) : (r[o] = [u])
          }, ae),
          G_ = me(ns)
        function ct(r) {
          return qt(r) ? Kp(r) : wf(r)
        }
        function Kt(r) {
          return qt(r) ? Kp(r, !0) : Tw(r)
        }
        function Q_(r, o) {
          var u = {}
          return (
            (o = ae(o, 3)),
            Jn(r, function (h, m, b) {
              pr(u, o(h, m, b), h)
            }),
            u
          )
        }
        function J_(r, o) {
          var u = {}
          return (
            (o = ae(o, 3)),
            Jn(r, function (h, m, b) {
              pr(u, m, o(h, m, b))
            }),
            u
          )
        }
        var X_ = Ao(function (r, o, u) {
            eu(r, o, u)
          }),
          ym = Ao(function (r, o, u, h) {
            eu(r, o, u, h)
          }),
          Z_ = mr(function (r, o) {
            var u = {}
            if (r == null) return u
            var h = !1
            ;(o = ze(o, function (b) {
              return (b = Xr(b, r)), h || (h = b.length > 1), b
            })),
              Xn(r, Df(r), u),
              h && (u = yn(u, R | _ | H, Kw))
            for (var m = o.length; m--; ) Tf(u, o[m])
            return u
          })
        function eS(r, o) {
          return bm(r, gu(ae(o)))
        }
        var tS = mr(function (r, o) {
          return r == null ? {} : Pw(r, o)
        })
        function bm(r, o) {
          if (r == null) return {}
          var u = ze(Df(r), function (h) {
            return [h]
          })
          return (
            (o = ae(o)),
            cg(r, u, function (h, m) {
              return o(h, m[0])
            })
          )
        }
        function nS(r, o, u) {
          o = Xr(o, r)
          var h = -1,
            m = o.length
          for (m || ((m = 1), (r = n)); ++h < m; ) {
            var b = r == null ? n : r[Zn(o[h])]
            b === n && ((h = m), (b = u)), (r = yr(b) ? b.call(r) : b)
          }
          return r
        }
        function rS(r, o, u) {
          return r == null ? r : is(r, o, u)
        }
        function iS(r, o, u, h) {
          return (
            (h = typeof h == 'function' ? h : n), r == null ? r : is(r, o, u, h)
          )
        }
        var wm = Ig(ct),
          km = Ig(Kt)
        function oS(r, o, u) {
          var h = de(r),
            m = h || ei(r) || No(r)
          if (((o = ae(o, 4)), u == null)) {
            var b = r && r.constructor
            m
              ? (u = h ? new b() : [])
              : Be(r)
              ? (u = yr(b) ? Io(Hl(r)) : {})
              : (u = {})
          }
          return (
            (m ? kt : Jn)(r, function (E, L, N) {
              return o(u, E, L, N)
            }),
            u
          )
        }
        function aS(r, o) {
          return r == null ? !0 : Tf(r, o)
        }
        function sS(r, o, u) {
          return r == null ? r : gg(r, o, Of(u))
        }
        function lS(r, o, u, h) {
          return (
            (h = typeof h == 'function' ? h : n),
            r == null ? r : gg(r, o, Of(u), h)
          )
        }
        function Mo(r) {
          return r == null ? [] : Mi(r, ct(r))
        }
        function uS(r) {
          return r == null ? [] : Mi(r, Kt(r))
        }
        function cS(r, o, u) {
          return (
            u === n && ((u = o), (o = n)),
            u !== n && ((u = kn(u)), (u = u === u ? u : 0)),
            o !== n && ((o = kn(o)), (o = o === o ? o : 0)),
            $i(kn(r), o, u)
          )
        }
        function fS(r, o, u) {
          return (
            (o = br(o)),
            u === n ? ((u = o), (o = 0)) : (u = br(u)),
            (r = kn(r)),
            vw(r, o, u)
          )
        }
        function hS(r, o, u) {
          if (
            (u && typeof u != 'boolean' && Dt(r, o, u) && (o = u = n),
            u === n &&
              (typeof o == 'boolean'
                ? ((u = o), (o = n))
                : typeof r == 'boolean' && ((u = r), (r = n))),
            r === n && o === n
              ? ((r = 0), (o = 1))
              : ((r = br(r)), o === n ? ((o = r), (r = 0)) : (o = br(o))),
            r > o)
          ) {
            var h = r
            ;(r = o), (o = h)
          }
          if (u || r % 1 || o % 1) {
            var m = Wp()
            return St(r + m * (o - r + Rl('1e-' + ((m + '').length - 1))), o)
          }
          return Sf(r, o)
        }
        var dS = Do(function (r, o, u) {
          return (o = o.toLowerCase()), r + (u ? _m(o) : o)
        })
        function _m(r) {
          return Qf(Ce(r).toLowerCase())
        }
        function Sm(r) {
          return (r = Ce(r)), r && r.replace(bo, rb).replace(of, '')
        }
        function pS(r, o, u) {
          ;(r = Ce(r)), (o = rn(o))
          var h = r.length
          u = u === n ? h : $i(pe(u), 0, h)
          var m = u
          return (u -= o.length), u >= 0 && r.slice(u, m) == o
        }
        function gS(r) {
          return (r = Ce(r)), r && fl.test(r) ? r.replace(vo, ib) : r
        }
        function mS(r) {
          return (r = Ce(r)), r && Ci.test(r) ? r.replace(cr, '\\$&') : r
        }
        var vS = Do(function (r, o, u) {
            return r + (u ? '-' : '') + o.toLowerCase()
          }),
          yS = Do(function (r, o, u) {
            return r + (u ? ' ' : '') + o.toLowerCase()
          }),
          bS = Tg('toLowerCase')
        function wS(r, o, u) {
          ;(r = Ce(r)), (o = pe(o))
          var h = o ? Co(r) : 0
          if (!o || h >= o) return r
          var m = (o - h) / 2
          return au(Kl(m), u) + r + au(ql(m), u)
        }
        function kS(r, o, u) {
          ;(r = Ce(r)), (o = pe(o))
          var h = o ? Co(r) : 0
          return o && h < o ? r + au(o - h, u) : r
        }
        function _S(r, o, u) {
          ;(r = Ce(r)), (o = pe(o))
          var h = o ? Co(r) : 0
          return o && h < o ? au(o - h, u) + r : r
        }
        function SS(r, o, u) {
          return (
            u || o == null ? (o = 0) : o && (o = +o),
            Rb(Ce(r).replace(Ea, ''), o || 0)
          )
        }
        function ES(r, o, u) {
          return (
            (u ? Dt(r, o, u) : o === n) ? (o = 1) : (o = pe(o)), Ef(Ce(r), o)
          )
        }
        function xS() {
          var r = arguments,
            o = Ce(r[0])
          return r.length < 3 ? o : o.replace(r[1], r[2])
        }
        var TS = Do(function (r, o, u) {
          return r + (u ? '_' : '') + o.toLowerCase()
        })
        function CS(r, o, u) {
          return (
            u && typeof u != 'number' && Dt(r, o, u) && (o = u = n),
            (u = u === n ? ke : u >>> 0),
            u
              ? ((r = Ce(r)),
                r &&
                (typeof o == 'string' || (o != null && !Kf(o))) &&
                ((o = rn(o)), !o && To(r))
                  ? Zr(Dn(r), 0, u)
                  : r.split(o, u))
              : []
          )
        }
        var PS = Do(function (r, o, u) {
          return r + (u ? ' ' : '') + Qf(o)
        })
        function OS(r, o, u) {
          return (
            (r = Ce(r)),
            (u = u == null ? 0 : $i(pe(u), 0, r.length)),
            (o = rn(o)),
            r.slice(u, u + o.length) == o
          )
        }
        function RS(r, o, u) {
          var h = v.templateSettings
          u && Dt(r, o, u) && (o = n), (r = Ce(r)), (o = yu({}, o, h, Ag))
          var m = yu({}, o.imports, h.imports, Ag),
            b = ct(m),
            E = Mi(m, b),
            L,
            N,
            q = 0,
            K = o.interpolate || Pi,
            Y = "__p += '",
            te = uf(
              (o.escape || Pi).source +
                '|' +
                K.source +
                '|' +
                (K === Mr ? gl : Pi).source +
                '|' +
                (o.evaluate || Pi).source +
                '|$',
              'g'
            ),
            ie =
              '//# sourceURL=' +
              (Le.call(o, 'sourceURL')
                ? (o.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++Cl + ']') +
              `
`
          r.replace(te, function (le, ve, we, an, zt, sn) {
            return (
              we || (we = an),
              (Y += r.slice(q, sn).replace(Oa, ob)),
              ve &&
                ((L = !0),
                (Y +=
                  `' +
__e(` +
                  ve +
                  `) +
'`)),
              zt &&
                ((N = !0),
                (Y +=
                  `';
` +
                  zt +
                  `;
__p += '`)),
              we &&
                (Y +=
                  `' +
((__t = (` +
                  we +
                  `)) == null ? '' : __t) +
'`),
              (q = sn + le.length),
              le
            )
          }),
            (Y += `';
`)
          var se = Le.call(o, 'variable') && o.variable
          if (!se)
            Y =
              `with (obj) {
` +
              Y +
              `
}
`
          else if (yo.test(se)) throw new fe(d)
          ;(Y = (N ? Y.replace(Kc, '') : Y)
            .replace(_a, '$1')
            .replace(cl, '$1;')),
            (Y =
              'function(' +
              (se || 'obj') +
              `) {
` +
              (se
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (L ? ', __e = _.escape' : '') +
              (N
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Y +
              `return __p
}`)
          var ge = xm(function () {
            return Te(b, ie + 'return ' + Y).apply(n, E)
          })
          if (((ge.source = Y), qf(ge))) throw ge
          return ge
        }
        function LS(r) {
          return Ce(r).toLowerCase()
        }
        function IS(r) {
          return Ce(r).toUpperCase()
        }
        function AS(r, o, u) {
          if (((r = Ce(r)), r && (u || o === n))) return Vt(r)
          if (!r || !(o = rn(o))) return r
          var h = Dn(r),
            m = Dn(o),
            b = zp(h, m),
            E = Np(h, m) + 1
          return Zr(h, b, E).join('')
        }
        function DS(r, o, u) {
          if (((r = Ce(r)), r && (u || o === n))) return r.slice(0, jp(r) + 1)
          if (!r || !(o = rn(o))) return r
          var h = Dn(r),
            m = Np(h, Dn(o)) + 1
          return Zr(h, 0, m).join('')
        }
        function zS(r, o, u) {
          if (((r = Ce(r)), r && (u || o === n))) return r.replace(Ea, '')
          if (!r || !(o = rn(o))) return r
          var h = Dn(r),
            m = zp(h, Dn(o))
          return Zr(h, m).join('')
        }
        function NS(r, o) {
          var u = P,
            h = D
          if (Be(o)) {
            var m = 'separator' in o ? o.separator : m
            ;(u = 'length' in o ? pe(o.length) : u),
              (h = 'omission' in o ? rn(o.omission) : h)
          }
          r = Ce(r)
          var b = r.length
          if (To(r)) {
            var E = Dn(r)
            b = E.length
          }
          if (u >= b) return r
          var L = u - Co(h)
          if (L < 1) return h
          var N = E ? Zr(E, 0, L).join('') : r.slice(0, L)
          if (m === n) return N + h
          if ((E && (L += N.length - L), Kf(m))) {
            if (r.slice(L).search(m)) {
              var q,
                K = N
              for (
                m.global || (m = uf(m.source, Ce(Ta.exec(m)) + 'g')),
                  m.lastIndex = 0;
                (q = m.exec(K));

              )
                var Y = q.index
              N = N.slice(0, Y === n ? L : Y)
            }
          } else if (r.indexOf(rn(m), L) != L) {
            var te = N.lastIndexOf(m)
            te > -1 && (N = N.slice(0, te))
          }
          return N + h
        }
        function MS(r) {
          return (r = Ce(r)), r && Nr.test(r) ? r.replace(mo, hb) : r
        }
        var jS = Do(function (r, o, u) {
            return r + (u ? ' ' : '') + o.toUpperCase()
          }),
          Qf = Tg('toUpperCase')
        function Em(r, o, u) {
          return (
            (r = Ce(r)),
            (o = u ? n : o),
            o === n ? (sb(r) ? gb(r) : qr(r)) : r.match(o) || []
          )
        }
        var xm = me(function (r, o) {
            try {
              return wt(r, n, o)
            } catch (u) {
              return qf(u) ? u : new fe(u)
            }
          }),
          FS = mr(function (r, o) {
            return (
              kt(o, function (u) {
                ;(u = Zn(u)), pr(r, u, Vf(r[u], r))
              }),
              r
            )
          })
        function US(r) {
          var o = r == null ? 0 : r.length,
            u = ae()
          return (
            (r = o
              ? ze(r, function (h) {
                  if (typeof h[1] != 'function') throw new mn(c)
                  return [u(h[0]), h[1]]
                })
              : []),
            me(function (h) {
              for (var m = -1; ++m < o; ) {
                var b = r[m]
                if (wt(b[0], this, h)) return wt(b[1], this, h)
              }
            })
          )
        }
        function $S(r) {
          return hw(yn(r, R))
        }
        function Jf(r) {
          return function () {
            return r
          }
        }
        function BS(r, o) {
          return r == null || r !== r ? o : r
        }
        var HS = Pg(),
          VS = Pg(!0)
        function Yt(r) {
          return r
        }
        function Xf(r) {
          return ig(typeof r == 'function' ? r : yn(r, R))
        }
        function WS(r) {
          return ag(yn(r, R))
        }
        function qS(r, o) {
          return sg(r, yn(o, R))
        }
        var KS = me(function (r, o) {
            return function (u) {
              return ns(u, r, o)
            }
          }),
          YS = me(function (r, o) {
            return function (u) {
              return ns(r, u, o)
            }
          })
        function Zf(r, o, u) {
          var h = ct(o),
            m = Zl(o, h)
          u == null &&
            !(Be(o) && (m.length || !h.length)) &&
            ((u = o), (o = r), (r = this), (m = Zl(o, ct(o))))
          var b = !(Be(u) && 'chain' in u) || !!u.chain,
            E = yr(r)
          return (
            kt(m, function (L) {
              var N = o[L]
              ;(r[L] = N),
                E &&
                  (r.prototype[L] = function () {
                    var q = this.__chain__
                    if (b || q) {
                      var K = r(this.__wrapped__),
                        Y = (K.__actions__ = Wt(this.__actions__))
                      return (
                        Y.push({ func: N, args: arguments, thisArg: r }),
                        (K.__chain__ = q),
                        K
                      )
                    }
                    return N.apply(r, An([this.value()], arguments))
                  })
            }),
            r
          )
        }
        function GS() {
          return et._ === this && (et._ = kb), this
        }
        function eh() {}
        function QS(r) {
          return (
            (r = pe(r)),
            me(function (o) {
              return lg(o, r)
            })
          )
        }
        var JS = Lf(ze),
          XS = Lf(zi),
          ZS = Lf(_t)
        function Tm(r) {
          return jf(r) ? ee(Zn(r)) : Ow(r)
        }
        function eE(r) {
          return function (o) {
            return r == null ? n : Bi(r, o)
          }
        }
        var tE = Rg(),
          nE = Rg(!0)
        function th() {
          return []
        }
        function nh() {
          return !1
        }
        function rE() {
          return {}
        }
        function iE() {
          return ''
        }
        function oE() {
          return !0
        }
        function aE(r, o) {
          if (((r = pe(r)), r < 1 || r > Z)) return []
          var u = ke,
            h = St(r, ke)
          ;(o = ae(o)), (r -= ke)
          for (var m = lt(h, o); ++u < r; ) o(u)
          return m
        }
        function sE(r) {
          return de(r) ? ze(r, Zn) : on(r) ? [r] : Wt(qg(Ce(r)))
        }
        function lE(r) {
          var o = ++bb
          return Ce(r) + o
        }
        var uE = ou(function (r, o) {
            return r + o
          }, 0),
          cE = If('ceil'),
          fE = ou(function (r, o) {
            return r / o
          }, 1),
          hE = If('floor')
        function dE(r) {
          return r && r.length ? Xl(r, Yt, vf) : n
        }
        function pE(r, o) {
          return r && r.length ? Xl(r, ae(o, 2), vf) : n
        }
        function gE(r) {
          return $(r, Yt)
        }
        function mE(r, o) {
          return $(r, ae(o, 2))
        }
        function vE(r) {
          return r && r.length ? Xl(r, Yt, kf) : n
        }
        function yE(r, o) {
          return r && r.length ? Xl(r, ae(o, 2), kf) : n
        }
        var bE = ou(function (r, o) {
            return r * o
          }, 1),
          wE = If('round'),
          kE = ou(function (r, o) {
            return r - o
          }, 0)
        function _E(r) {
          return r && r.length ? nt(r, Yt) : 0
        }
        function SE(r, o) {
          return r && r.length ? nt(r, ae(o, 2)) : 0
        }
        return (
          (v.after = Wk),
          (v.ary = rm),
          (v.assign = I_),
          (v.assignIn = vm),
          (v.assignInWith = yu),
          (v.assignWith = A_),
          (v.at = D_),
          (v.before = im),
          (v.bind = Vf),
          (v.bindAll = FS),
          (v.bindKey = om),
          (v.castArray = r_),
          (v.chain = em),
          (v.chunk = h2),
          (v.compact = d2),
          (v.concat = p2),
          (v.cond = US),
          (v.conforms = $S),
          (v.constant = Jf),
          (v.countBy = _k),
          (v.create = z_),
          (v.curry = am),
          (v.curryRight = sm),
          (v.debounce = lm),
          (v.defaults = N_),
          (v.defaultsDeep = M_),
          (v.defer = qk),
          (v.delay = Kk),
          (v.difference = g2),
          (v.differenceBy = m2),
          (v.differenceWith = v2),
          (v.drop = y2),
          (v.dropRight = b2),
          (v.dropRightWhile = w2),
          (v.dropWhile = k2),
          (v.fill = _2),
          (v.filter = Ek),
          (v.flatMap = Ck),
          (v.flatMapDeep = Pk),
          (v.flatMapDepth = Ok),
          (v.flatten = Qg),
          (v.flattenDeep = S2),
          (v.flattenDepth = E2),
          (v.flip = Yk),
          (v.flow = HS),
          (v.flowRight = VS),
          (v.fromPairs = x2),
          (v.functions = V_),
          (v.functionsIn = W_),
          (v.groupBy = Rk),
          (v.initial = C2),
          (v.intersection = P2),
          (v.intersectionBy = O2),
          (v.intersectionWith = R2),
          (v.invert = K_),
          (v.invertBy = Y_),
          (v.invokeMap = Ik),
          (v.iteratee = Xf),
          (v.keyBy = Ak),
          (v.keys = ct),
          (v.keysIn = Kt),
          (v.map = hu),
          (v.mapKeys = Q_),
          (v.mapValues = J_),
          (v.matches = WS),
          (v.matchesProperty = qS),
          (v.memoize = pu),
          (v.merge = X_),
          (v.mergeWith = ym),
          (v.method = KS),
          (v.methodOf = YS),
          (v.mixin = Zf),
          (v.negate = gu),
          (v.nthArg = QS),
          (v.omit = Z_),
          (v.omitBy = eS),
          (v.once = Gk),
          (v.orderBy = Dk),
          (v.over = JS),
          (v.overArgs = Qk),
          (v.overEvery = XS),
          (v.overSome = ZS),
          (v.partial = Wf),
          (v.partialRight = um),
          (v.partition = zk),
          (v.pick = tS),
          (v.pickBy = bm),
          (v.property = Tm),
          (v.propertyOf = eE),
          (v.pull = D2),
          (v.pullAll = Xg),
          (v.pullAllBy = z2),
          (v.pullAllWith = N2),
          (v.pullAt = M2),
          (v.range = tE),
          (v.rangeRight = nE),
          (v.rearg = Jk),
          (v.reject = jk),
          (v.remove = j2),
          (v.rest = Xk),
          (v.reverse = Bf),
          (v.sampleSize = Uk),
          (v.set = rS),
          (v.setWith = iS),
          (v.shuffle = $k),
          (v.slice = F2),
          (v.sortBy = Vk),
          (v.sortedUniq = q2),
          (v.sortedUniqBy = K2),
          (v.split = CS),
          (v.spread = Zk),
          (v.tail = Y2),
          (v.take = G2),
          (v.takeRight = Q2),
          (v.takeRightWhile = J2),
          (v.takeWhile = X2),
          (v.tap = dk),
          (v.throttle = e_),
          (v.thru = fu),
          (v.toArray = pm),
          (v.toPairs = wm),
          (v.toPairsIn = km),
          (v.toPath = sE),
          (v.toPlainObject = mm),
          (v.transform = oS),
          (v.unary = t_),
          (v.union = Z2),
          (v.unionBy = ek),
          (v.unionWith = tk),
          (v.uniq = nk),
          (v.uniqBy = rk),
          (v.uniqWith = ik),
          (v.unset = aS),
          (v.unzip = Hf),
          (v.unzipWith = Zg),
          (v.update = sS),
          (v.updateWith = lS),
          (v.values = Mo),
          (v.valuesIn = uS),
          (v.without = ok),
          (v.words = Em),
          (v.wrap = n_),
          (v.xor = ak),
          (v.xorBy = sk),
          (v.xorWith = lk),
          (v.zip = uk),
          (v.zipObject = ck),
          (v.zipObjectDeep = fk),
          (v.zipWith = hk),
          (v.entries = wm),
          (v.entriesIn = km),
          (v.extend = vm),
          (v.extendWith = yu),
          Zf(v, v),
          (v.add = uE),
          (v.attempt = xm),
          (v.camelCase = dS),
          (v.capitalize = _m),
          (v.ceil = cE),
          (v.clamp = cS),
          (v.clone = i_),
          (v.cloneDeep = a_),
          (v.cloneDeepWith = s_),
          (v.cloneWith = o_),
          (v.conformsTo = l_),
          (v.deburr = Sm),
          (v.defaultTo = BS),
          (v.divide = fE),
          (v.endsWith = pS),
          (v.eq = Nn),
          (v.escape = gS),
          (v.escapeRegExp = mS),
          (v.every = Sk),
          (v.find = xk),
          (v.findIndex = Yg),
          (v.findKey = j_),
          (v.findLast = Tk),
          (v.findLastIndex = Gg),
          (v.findLastKey = F_),
          (v.floor = hE),
          (v.forEach = tm),
          (v.forEachRight = nm),
          (v.forIn = U_),
          (v.forInRight = $_),
          (v.forOwn = B_),
          (v.forOwnRight = H_),
          (v.get = Yf),
          (v.gt = u_),
          (v.gte = c_),
          (v.has = q_),
          (v.hasIn = Gf),
          (v.head = Jg),
          (v.identity = Yt),
          (v.includes = Lk),
          (v.indexOf = T2),
          (v.inRange = fS),
          (v.invoke = G_),
          (v.isArguments = Wi),
          (v.isArray = de),
          (v.isArrayBuffer = f_),
          (v.isArrayLike = qt),
          (v.isArrayLikeObject = Je),
          (v.isBoolean = h_),
          (v.isBuffer = ei),
          (v.isDate = d_),
          (v.isElement = p_),
          (v.isEmpty = g_),
          (v.isEqual = m_),
          (v.isEqualWith = v_),
          (v.isError = qf),
          (v.isFinite = y_),
          (v.isFunction = yr),
          (v.isInteger = cm),
          (v.isLength = mu),
          (v.isMap = fm),
          (v.isMatch = b_),
          (v.isMatchWith = w_),
          (v.isNaN = k_),
          (v.isNative = __),
          (v.isNil = E_),
          (v.isNull = S_),
          (v.isNumber = hm),
          (v.isObject = Be),
          (v.isObjectLike = Ye),
          (v.isPlainObject = ls),
          (v.isRegExp = Kf),
          (v.isSafeInteger = x_),
          (v.isSet = dm),
          (v.isString = vu),
          (v.isSymbol = on),
          (v.isTypedArray = No),
          (v.isUndefined = T_),
          (v.isWeakMap = C_),
          (v.isWeakSet = P_),
          (v.join = L2),
          (v.kebabCase = vS),
          (v.last = wn),
          (v.lastIndexOf = I2),
          (v.lowerCase = yS),
          (v.lowerFirst = bS),
          (v.lt = O_),
          (v.lte = R_),
          (v.max = dE),
          (v.maxBy = pE),
          (v.mean = gE),
          (v.meanBy = mE),
          (v.min = vE),
          (v.minBy = yE),
          (v.stubArray = th),
          (v.stubFalse = nh),
          (v.stubObject = rE),
          (v.stubString = iE),
          (v.stubTrue = oE),
          (v.multiply = bE),
          (v.nth = A2),
          (v.noConflict = GS),
          (v.noop = eh),
          (v.now = du),
          (v.pad = wS),
          (v.padEnd = kS),
          (v.padStart = _S),
          (v.parseInt = SS),
          (v.random = hS),
          (v.reduce = Nk),
          (v.reduceRight = Mk),
          (v.repeat = ES),
          (v.replace = xS),
          (v.result = nS),
          (v.round = wE),
          (v.runInContext = z),
          (v.sample = Fk),
          (v.size = Bk),
          (v.snakeCase = TS),
          (v.some = Hk),
          (v.sortedIndex = U2),
          (v.sortedIndexBy = $2),
          (v.sortedIndexOf = B2),
          (v.sortedLastIndex = H2),
          (v.sortedLastIndexBy = V2),
          (v.sortedLastIndexOf = W2),
          (v.startCase = PS),
          (v.startsWith = OS),
          (v.subtract = kE),
          (v.sum = _E),
          (v.sumBy = SE),
          (v.template = RS),
          (v.times = aE),
          (v.toFinite = br),
          (v.toInteger = pe),
          (v.toLength = gm),
          (v.toLower = LS),
          (v.toNumber = kn),
          (v.toSafeInteger = L_),
          (v.toString = Ce),
          (v.toUpper = IS),
          (v.trim = AS),
          (v.trimEnd = DS),
          (v.trimStart = zS),
          (v.truncate = NS),
          (v.unescape = MS),
          (v.uniqueId = lE),
          (v.upperCase = jS),
          (v.upperFirst = Qf),
          (v.each = tm),
          (v.eachRight = nm),
          (v.first = Jg),
          Zf(
            v,
            (function () {
              var r = {}
              return (
                Jn(v, function (o, u) {
                  Le.call(v.prototype, u) || (r[u] = o)
                }),
                r
              )
            })(),
            { chain: !1 }
          ),
          (v.VERSION = i),
          kt(
            [
              'bind',
              'bindKey',
              'curry',
              'curryRight',
              'partial',
              'partialRight',
            ],
            function (r) {
              v[r].placeholder = v
            }
          ),
          kt(['drop', 'take'], function (r, o) {
            ;(ye.prototype[r] = function (u) {
              u = u === n ? 1 : ot(pe(u), 0)
              var h = this.__filtered__ && !o ? new ye(this) : this.clone()
              return (
                h.__filtered__
                  ? (h.__takeCount__ = St(u, h.__takeCount__))
                  : h.__views__.push({
                      size: St(u, ke),
                      type: r + (h.__dir__ < 0 ? 'Right' : ''),
                    }),
                h
              )
            }),
              (ye.prototype[r + 'Right'] = function (u) {
                return this.reverse()[r](u).reverse()
              })
          }),
          kt(['filter', 'map', 'takeWhile'], function (r, o) {
            var u = o + 1,
              h = u == Qe || u == qn
            ye.prototype[r] = function (m) {
              var b = this.clone()
              return (
                b.__iteratees__.push({ iteratee: ae(m, 3), type: u }),
                (b.__filtered__ = b.__filtered__ || h),
                b
              )
            }
          }),
          kt(['head', 'last'], function (r, o) {
            var u = 'take' + (o ? 'Right' : '')
            ye.prototype[r] = function () {
              return this[u](1).value()[0]
            }
          }),
          kt(['initial', 'tail'], function (r, o) {
            var u = 'drop' + (o ? '' : 'Right')
            ye.prototype[r] = function () {
              return this.__filtered__ ? new ye(this) : this[u](1)
            }
          }),
          (ye.prototype.compact = function () {
            return this.filter(Yt)
          }),
          (ye.prototype.find = function (r) {
            return this.filter(r).head()
          }),
          (ye.prototype.findLast = function (r) {
            return this.reverse().find(r)
          }),
          (ye.prototype.invokeMap = me(function (r, o) {
            return typeof r == 'function'
              ? new ye(this)
              : this.map(function (u) {
                  return ns(u, r, o)
                })
          })),
          (ye.prototype.reject = function (r) {
            return this.filter(gu(ae(r)))
          }),
          (ye.prototype.slice = function (r, o) {
            r = pe(r)
            var u = this
            return u.__filtered__ && (r > 0 || o < 0)
              ? new ye(u)
              : (r < 0 ? (u = u.takeRight(-r)) : r && (u = u.drop(r)),
                o !== n &&
                  ((o = pe(o)), (u = o < 0 ? u.dropRight(-o) : u.take(o - r))),
                u)
          }),
          (ye.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse()
          }),
          (ye.prototype.toArray = function () {
            return this.take(ke)
          }),
          Jn(ye.prototype, function (r, o) {
            var u = /^(?:filter|find|map|reject)|While$/.test(o),
              h = /^(?:head|last)$/.test(o),
              m = v[h ? 'take' + (o == 'last' ? 'Right' : '') : o],
              b = h || /^find/.test(o)
            m &&
              (v.prototype[o] = function () {
                var E = this.__wrapped__,
                  L = h ? [1] : arguments,
                  N = E instanceof ye,
                  q = L[0],
                  K = N || de(E),
                  Y = function (ve) {
                    var we = m.apply(v, An([ve], L))
                    return h && te ? we[0] : we
                  }
                K &&
                  u &&
                  typeof q == 'function' &&
                  q.length != 1 &&
                  (N = K = !1)
                var te = this.__chain__,
                  ie = !!this.__actions__.length,
                  se = b && !te,
                  ge = N && !ie
                if (!b && K) {
                  E = ge ? E : new ye(this)
                  var le = r.apply(E, L)
                  return (
                    le.__actions__.push({ func: fu, args: [Y], thisArg: n }),
                    new vn(le, te)
                  )
                }
                return se && ge
                  ? r.apply(this, L)
                  : ((le = this.thru(Y)),
                    se ? (h ? le.value()[0] : le.value()) : le)
              })
          }),
          kt(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (r) {
              var o = Ml[r],
                u = /^(?:push|sort|unshift)$/.test(r) ? 'tap' : 'thru',
                h = /^(?:pop|shift)$/.test(r)
              v.prototype[r] = function () {
                var m = arguments
                if (h && !this.__chain__) {
                  var b = this.value()
                  return o.apply(de(b) ? b : [], m)
                }
                return this[u](function (E) {
                  return o.apply(de(E) ? E : [], m)
                })
              }
            }
          ),
          Jn(ye.prototype, function (r, o) {
            var u = v[o]
            if (u) {
              var h = u.name + ''
              Le.call(Lo, h) || (Lo[h] = []), Lo[h].push({ name: o, func: u })
            }
          }),
          (Lo[iu(n, I).name] = [{ name: 'wrapper', func: n }]),
          (ye.prototype.clone = Mb),
          (ye.prototype.reverse = jb),
          (ye.prototype.value = Fb),
          (v.prototype.at = pk),
          (v.prototype.chain = gk),
          (v.prototype.commit = mk),
          (v.prototype.next = vk),
          (v.prototype.plant = bk),
          (v.prototype.reverse = wk),
          (v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = kk),
          (v.prototype.first = v.prototype.head),
          Ga && (v.prototype[Ga] = yk),
          v
        )
      },
      Po = mb()
    nn ? (((nn.exports = Po)._ = Po), (Ba._ = Po)) : (et._ = Po)
  }).call(us)
})(xc, xc.exports)
xc.exports
const uT = () =>
  ai.jsx('div', {
    className:
      'flex items-center justify-center h-screen bg-gray-100 text-gray-800',
    children: ai.jsxs('div', {
      className: 'text-center',
      children: [
        ai.jsx('h1', {
          className: 'text-4xl font-bold mb-4',
          children: 'Coming Soon',
        }),
        ai.jsx('p', {
          className: 'text-lg text-gray-600 mb-6',
          children: "We're working hard to bring you something amazing.",
        }),
      ],
    }),
  })
function cT() {
  return ai.jsx(p3, { children: ai.jsx(uT, {}) })
}
const he = (e) => typeof e == 'string',
  ys = () => {
    let e, t
    const n = new Promise((i, a) => {
      ;(e = i), (t = a)
    })
    return (n.resolve = e), (n.reject = t), n
  },
  l0 = (e) => (e == null ? '' : '' + e),
  fT = (e, t, n) => {
    e.forEach((i) => {
      t[i] && (n[i] = t[i])
    })
  },
  hT = /###/g,
  u0 = (e) => (e && e.indexOf('###') > -1 ? e.replace(hT, '.') : e),
  c0 = (e) => !e || he(e),
  Ds = (e, t, n) => {
    const i = he(t) ? t.split('.') : t
    let a = 0
    for (; a < i.length - 1; ) {
      if (c0(e)) return {}
      const l = u0(i[a])
      !e[l] && n && (e[l] = new n()),
        Object.prototype.hasOwnProperty.call(e, l) ? (e = e[l]) : (e = {}),
        ++a
    }
    return c0(e) ? {} : { obj: e, k: u0(i[a]) }
  },
  f0 = (e, t, n) => {
    const { obj: i, k: a } = Ds(e, t, Object)
    if (i !== void 0 || t.length === 1) {
      i[a] = n
      return
    }
    let l = t[t.length - 1],
      c = t.slice(0, t.length - 1),
      d = Ds(e, c, Object)
    for (; d.obj === void 0 && c.length; )
      (l = `${c[c.length - 1]}.${l}`),
        (c = c.slice(0, c.length - 1)),
        (d = Ds(e, c, Object)),
        d && d.obj && typeof d.obj[`${d.k}.${l}`] < 'u' && (d.obj = void 0)
    d.obj[`${d.k}.${l}`] = n
  },
  dT = (e, t, n, i) => {
    const { obj: a, k: l } = Ds(e, t, Object)
    ;(a[l] = a[l] || []), a[l].push(n)
  },
  Tc = (e, t) => {
    const { obj: n, k: i } = Ds(e, t)
    if (n) return n[i]
  },
  pT = (e, t, n) => {
    const i = Tc(e, n)
    return i !== void 0 ? i : Tc(t, n)
  },
  eb = (e, t, n) => {
    for (const i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in e
          ? he(e[i]) ||
            e[i] instanceof String ||
            he(t[i]) ||
            t[i] instanceof String
            ? n && (e[i] = t[i])
            : eb(e[i], t[i], n)
          : (e[i] = t[i]))
    return e
  },
  Fo = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var gT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const mT = (e) => (he(e) ? e.replace(/[&<>"'\/]/g, (t) => gT[t]) : e)
class vT {
  constructor(t) {
    ;(this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = [])
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t)
    if (n !== void 0) return n
    const i = new RegExp(t)
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, i),
      this.regExpQueue.push(t),
      i
    )
  }
}
const yT = [' ', ',', '?', '!', ';'],
  bT = new vT(20),
  wT = (e, t, n) => {
    ;(t = t || ''), (n = n || '')
    const i = yT.filter((c) => t.indexOf(c) < 0 && n.indexOf(c) < 0)
    if (i.length === 0) return !0
    const a = bT.getRegExp(
      `(${i.map((c) => (c === '?' ? '\\?' : c)).join('|')})`
    )
    let l = !a.test(e)
    if (!l) {
      const c = e.indexOf(n)
      c > 0 && !a.test(e.substring(0, c)) && (l = !0)
    }
    return l
  },
  Nd = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!e) return
    if (e[t]) return e[t]
    const i = t.split(n)
    let a = e
    for (let l = 0; l < i.length; ) {
      if (!a || typeof a != 'object') return
      let c,
        d = ''
      for (let g = l; g < i.length; ++g)
        if ((g !== l && (d += n), (d += i[g]), (c = a[d]), c !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof c) > -1 &&
            g < i.length - 1
          )
            continue
          l += g - l + 1
          break
        }
      a = c
    }
    return a
  },
  Cc = (e) => e && e.replace('_', '-'),
  kT = {
    type: 'logger',
    log(e) {
      this.output('log', e)
    },
    warn(e) {
      this.output('warn', e)
    },
    error(e) {
      this.output('error', e)
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t)
    },
  }
class Pc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || kT),
      (this.options = n),
      (this.debug = n.debug)
  }
  log() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i]
    return this.forward(n, 'log', '', !0)
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i]
    return this.forward(n, 'warn', '', !0)
  }
  error() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i]
    return this.forward(n, 'error', '')
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i]
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0)
  }
  forward(t, n, i, a) {
    return a && !this.debug
      ? null
      : (he(t[0]) && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[n](t))
  }
  create(t) {
    return new Pc(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Pc(this.logger, t)
    )
  }
}
var rr = new Pc()
class qc {
  constructor() {
    this.observers = {}
  }
  on(t, n) {
    return (
      t.split(' ').forEach((i) => {
        this.observers[i] || (this.observers[i] = new Map())
        const a = this.observers[i].get(n) || 0
        this.observers[i].set(n, a + 1)
      }),
      this
    )
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t]
        return
      }
      this.observers[t].delete(n)
    }
  }
  emit(t) {
    for (
      var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1;
      a < n;
      a++
    )
      i[a - 1] = arguments[a]
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((l) => {
        let [c, d] = l
        for (let g = 0; g < d; g++) c(...i)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((l) => {
          let [c, d] = l
          for (let g = 0; g < d; g++) c.apply(c, [t, ...i])
        })
  }
}
class h0 extends qc {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' }
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0)
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t)
    n > -1 && this.options.ns.splice(n, 1)
  }
  getResource(t, n, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const l =
        a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      c =
        a.ignoreJSONStructure !== void 0
          ? a.ignoreJSONStructure
          : this.options.ignoreJSONStructure
    let d
    t.indexOf('.') > -1
      ? (d = t.split('.'))
      : ((d = [t, n]),
        i &&
          (Array.isArray(i)
            ? d.push(...i)
            : he(i) && l
            ? d.push(...i.split(l))
            : d.push(i)))
    const g = Tc(this.data, d)
    return (
      !g &&
        !n &&
        !i &&
        t.indexOf('.') > -1 &&
        ((t = d[0]), (n = d[1]), (i = d.slice(2).join('.'))),
      g || !c || !he(i)
        ? g
        : Nd(this.data && this.data[t] && this.data[t][n], i, l)
    )
  }
  addResource(t, n, i, a) {
    let l =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const c =
      l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator
    let d = [t, n]
    i && (d = d.concat(c ? i.split(c) : i)),
      t.indexOf('.') > -1 && ((d = t.split('.')), (a = n), (n = d[1])),
      this.addNamespaces(n),
      f0(this.data, d, a),
      l.silent || this.emit('added', t, n, i, a)
  }
  addResources(t, n, i) {
    let a =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const l in i)
      (he(i[l]) || Array.isArray(i[l])) &&
        this.addResource(t, n, l, i[l], { silent: !0 })
    a.silent || this.emit('added', t, n, i)
  }
  addResourceBundle(t, n, i, a, l) {
    let c =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      d = [t, n]
    t.indexOf('.') > -1 && ((d = t.split('.')), (a = i), (i = n), (n = d[1])),
      this.addNamespaces(n)
    let g = Tc(this.data, d) || {}
    c.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      a ? eb(g, i, l) : (g = { ...g, ...i }),
      f0(this.data, d, g),
      c.silent || this.emit('added', t, n, i)
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n)
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    )
  }
  getDataByLanguage(t) {
    return this.data[t]
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t)
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    )
  }
  toJSON() {
    return this.data
  }
}
var tb = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e
  },
  handle(e, t, n, i, a) {
    return (
      e.forEach((l) => {
        this.processors[l] && (t = this.processors[l].process(t, n, i, a))
      }),
      t
    )
  },
}
const d0 = {}
class Oc extends qc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      fT(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = rr.create('translator'))
  }
  changeLanguage(t) {
    t && (this.language = t)
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    if (t == null) return !1
    const i = this.resolve(t, n)
    return i && i.res !== void 0
  }
  extractFromKey(t, n) {
    let i = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator
    i === void 0 && (i = ':')
    const a =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
    let l = n.ns || this.options.defaultNS || []
    const c = i && t.indexOf(i) > -1,
      d =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !wT(t, i, a)
    if (c && !d) {
      const g = t.match(this.interpolator.nestingRegexp)
      if (g && g.length > 0) return { key: t, namespaces: l }
      const w = t.split(i)
      ;(i !== a || (i === a && this.options.ns.indexOf(w[0]) > -1)) &&
        (l = w.shift()),
        (t = w.join(a))
    }
    return he(l) && (l = [l]), { key: t, namespaces: l }
  }
  translate(t, n, i) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return ''
    Array.isArray(t) || (t = [String(t)])
    const a =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      l =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: c, namespaces: d } = this.extractFromKey(t[t.length - 1], n),
      g = d[d.length - 1],
      w = n.lng || this.language,
      O = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (w && w.toLowerCase() === 'cimode') {
      if (O) {
        const B = n.nsSeparator || this.options.nsSeparator
        return a
          ? {
              res: `${g}${B}${c}`,
              usedKey: c,
              exactUsedKey: c,
              usedLng: w,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${g}${B}${c}`
      }
      return a
        ? {
            res: c,
            usedKey: c,
            exactUsedKey: c,
            usedLng: w,
            usedNS: g,
            usedParams: this.getUsedParamsDetails(n),
          }
        : c
    }
    const R = this.resolve(t, n)
    let _ = R && R.res
    const H = (R && R.usedKey) || c,
      F = (R && R.exactUsedKey) || c,
      W = Object.prototype.toString.apply(_),
      Q = ['[object Number]', '[object Function]', '[object RegExp]'],
      I = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      x = !this.i18nFormat || this.i18nFormat.handleAsObject,
      A = !he(_) && typeof _ != 'boolean' && typeof _ != 'number'
    if (x && _ && A && Q.indexOf(W) < 0 && !(he(I) && Array.isArray(_))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          )
        const B = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(H, _, { ...n, ns: d })
          : `key '${c} (${this.language})' returned an object instead of string.`
        return a
          ? ((R.res = B), (R.usedParams = this.getUsedParamsDetails(n)), R)
          : B
      }
      if (l) {
        const B = Array.isArray(_),
          G = B ? [] : {},
          X = B ? F : H
        for (const S in _)
          if (Object.prototype.hasOwnProperty.call(_, S)) {
            const k = `${X}${l}${S}`
            ;(G[S] = this.translate(k, { ...n, joinArrays: !1, ns: d })),
              G[S] === k && (G[S] = _[S])
          }
        _ = G
      }
    } else if (x && he(I) && Array.isArray(_))
      (_ = _.join(I)), _ && (_ = this.extendTranslation(_, t, n, i))
    else {
      let B = !1,
        G = !1
      const X = n.count !== void 0 && !he(n.count),
        S = Oc.hasDefaultValue(n),
        k = X ? this.pluralResolver.getSuffix(w, n.count, n) : '',
        T =
          n.ordinal && X
            ? this.pluralResolver.getSuffix(w, n.count, { ordinal: !1 })
            : '',
        P =
          X &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        D =
          (P && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${k}`] ||
          n[`defaultValue${T}`] ||
          n.defaultValue
      !this.isValidLookup(_) && S && ((B = !0), (_ = D)),
        this.isValidLookup(_) || ((G = !0), (_ = c))
      const j =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          G
            ? void 0
            : _,
        C = S && D !== _ && this.options.updateMissing
      if (G || B || C) {
        if (
          (this.logger.log(C ? 'updateKey' : 'missingKey', w, g, c, C ? D : _),
          l)
        ) {
          const Ee = this.resolve(c, { ...n, keySeparator: !1 })
          Ee &&
            Ee.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let Qe = []
        const $t = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && $t && $t[0])
          for (let Ee = 0; Ee < $t.length; Ee++) Qe.push($t[Ee])
        else
          this.options.saveMissingTo === 'all'
            ? (Qe = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Qe.push(n.lng || this.language)
        const qn = (Ee, Z, oe) => {
          const ue = S && oe !== _ ? oe : j
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(Ee, g, Z, ue, C, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(Ee, g, Z, ue, C, n),
            this.emit('missingKey', Ee, g, Z, _)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && X
            ? Qe.forEach((Ee) => {
                const Z = this.pluralResolver.getSuffixes(Ee, n)
                P &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  Z.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  Z.push(`${this.options.pluralSeparator}zero`),
                  Z.forEach((oe) => {
                    qn([Ee], c + oe, n[`defaultValue${oe}`] || D)
                  })
              })
            : qn(Qe, c, D))
      }
      ;(_ = this.extendTranslation(_, t, n, R, i)),
        G &&
          _ === c &&
          this.options.appendNamespaceToMissingKey &&
          (_ = `${g}:${c}`),
        (G || B) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (_ = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${g}:${c}` : c,
                B ? _ : void 0
              ))
            : (_ = this.options.parseMissingKeyHandler(_)))
    }
    return a
      ? ((R.res = _), (R.usedParams = this.getUsedParamsDetails(n)), R)
      : _
  }
  extendTranslation(t, n, i, a, l) {
    var c = this
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...i },
        i.lng || this.language || a.usedLng,
        a.usedNS,
        a.usedKey,
        { resolved: a }
      )
    else if (!i.skipInterpolation) {
      i.interpolation &&
        this.interpolator.init({
          ...i,
          interpolation: { ...this.options.interpolation, ...i.interpolation },
        })
      const w =
        he(t) &&
        (i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let O
      if (w) {
        const _ = t.match(this.interpolator.nestingRegexp)
        O = _ && _.length
      }
      let R = i.replace && !he(i.replace) ? i.replace : i
      if (
        (this.options.interpolation.defaultVariables &&
          (R = { ...this.options.interpolation.defaultVariables, ...R }),
        (t = this.interpolator.interpolate(
          t,
          R,
          i.lng || this.language || a.usedLng,
          i
        )),
        w)
      ) {
        const _ = t.match(this.interpolator.nestingRegexp),
          H = _ && _.length
        O < H && (i.nest = !1)
      }
      !i.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        a &&
        a.res &&
        (i.lng = this.language || a.usedLng),
        i.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var _ = arguments.length, H = new Array(_), F = 0;
                F < _;
                F++
              )
                H[F] = arguments[F]
              return l && l[0] === H[0] && !i.context
                ? (c.logger.warn(
                    `It seems you are nesting recursively key: ${H[0]} in key: ${n[0]}`
                  ),
                  null)
                : c.translate(...H, n)
            },
            i
          )),
        i.interpolation && this.interpolator.reset()
    }
    const d = i.postProcess || this.options.postProcess,
      g = he(d) ? [d] : d
    return (
      t != null &&
        g &&
        g.length &&
        i.applyPostProcessor !== !1 &&
        (t = tb.handle(
          g,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...a,
                  usedParams: this.getUsedParamsDetails(i),
                },
                ...i,
              }
            : i,
          this
        )),
      t
    )
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i,
      a,
      l,
      c,
      d
    return (
      he(t) && (t = [t]),
      t.forEach((g) => {
        if (this.isValidLookup(i)) return
        const w = this.extractFromKey(g, n),
          O = w.key
        a = O
        let R = w.namespaces
        this.options.fallbackNS && (R = R.concat(this.options.fallbackNS))
        const _ = n.count !== void 0 && !he(n.count),
          H =
            _ &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          F =
            n.context !== void 0 &&
            (he(n.context) || typeof n.context == 'number') &&
            n.context !== '',
          W = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              )
        R.forEach((Q) => {
          this.isValidLookup(i) ||
            ((d = Q),
            !d0[`${W[0]}-${Q}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(d) &&
              ((d0[`${W[0]}-${Q}`] = !0),
              this.logger.warn(
                `key "${a}" for languages "${W.join(
                  ', '
                )}" won't get resolved as namespace "${d}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            W.forEach((I) => {
              if (this.isValidLookup(i)) return
              c = I
              const x = [O]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(x, O, I, Q, n)
              else {
                let B
                _ && (B = this.pluralResolver.getSuffix(I, n.count, n))
                const G = `${this.options.pluralSeparator}zero`,
                  X = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (_ &&
                    (x.push(O + B),
                    n.ordinal &&
                      B.indexOf(X) === 0 &&
                      x.push(O + B.replace(X, this.options.pluralSeparator)),
                    H && x.push(O + G)),
                  F)
                ) {
                  const S = `${O}${this.options.contextSeparator}${n.context}`
                  x.push(S),
                    _ &&
                      (x.push(S + B),
                      n.ordinal &&
                        B.indexOf(X) === 0 &&
                        x.push(S + B.replace(X, this.options.pluralSeparator)),
                      H && x.push(S + G))
                }
              }
              let A
              for (; (A = x.pop()); )
                this.isValidLookup(i) ||
                  ((l = A), (i = this.getResource(I, Q, A, n)))
            }))
        })
      }),
      { res: i, usedKey: a, exactUsedKey: l, usedLng: c, usedNS: d }
    )
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    )
  }
  getResource(t, n, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, i, a)
      : this.resourceStore.getResource(t, n, i, a)
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      i = t.replace && !he(t.replace)
    let a = i ? t.replace : t
    if (
      (i && typeof t.count < 'u' && (a.count = t.count),
      this.options.interpolation.defaultVariables &&
        (a = { ...this.options.interpolation.defaultVariables, ...a }),
      !i)
    ) {
      a = { ...a }
      for (const l of n) delete a[l]
    }
    return a
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue'
    for (const i in t)
      if (
        Object.prototype.hasOwnProperty.call(t, i) &&
        n === i.substring(0, n.length) &&
        t[i] !== void 0
      )
        return !0
    return !1
  }
}
const Dh = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class p0 {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = rr.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = Cc(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = Cc(t)), !t || t.indexOf('-') < 0)) return t
    const n = t.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(t) {
    if (he(t) && t.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let a = Intl.getCanonicalLocales(t)[0]
          if ((a && this.options.lowerCaseLng && (a = a.toLowerCase()), a))
            return a
        } catch {}
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let i = t.split('-')
      return (
        this.options.lowerCaseLng
          ? (i = i.map((a) => a.toLowerCase()))
          : i.length === 2
          ? ((i[0] = i[0].toLowerCase()),
            (i[1] = i[1].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = Dh(i[1].toLowerCase())))
          : i.length === 3 &&
            ((i[0] = i[0].toLowerCase()),
            i[1].length === 2 && (i[1] = i[1].toUpperCase()),
            i[0] !== 'sgn' && i[2].length === 2 && (i[2] = i[2].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = Dh(i[1].toLowerCase())),
            n.indexOf(i[2].toLowerCase()) > -1 &&
              (i[2] = Dh(i[2].toLowerCase()))),
        i.join('-')
      )
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    )
  }
  getBestMatchFromCodes(t) {
    if (!t) return null
    let n
    return (
      t.forEach((i) => {
        if (n) return
        const a = this.formatLanguageCode(i)
        ;(!this.options.supportedLngs || this.isSupportedCode(a)) && (n = a)
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((i) => {
          if (n) return
          const a = this.getLanguagePartFromCode(i)
          if (this.isSupportedCode(a)) return (n = a)
          n = this.options.supportedLngs.find((l) => {
            if (
              l === a ||
              (!(l.indexOf('-') < 0 && a.indexOf('-') < 0) &&
                ((l.indexOf('-') > 0 &&
                  a.indexOf('-') < 0 &&
                  l.substring(0, l.indexOf('-')) === a) ||
                  (l.indexOf(a) === 0 && a.length > 1)))
            )
              return l
          })
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    )
  }
  getFallbackCodes(t, n) {
    if (!t) return []
    if (
      (typeof t == 'function' && (t = t(n)),
      he(t) && (t = [t]),
      Array.isArray(t))
    )
      return t
    if (!n) return t.default || []
    let i = t[n]
    return (
      i || (i = t[this.getScriptPartFromCode(n)]),
      i || (i = t[this.formatLanguageCode(n)]),
      i || (i = t[this.getLanguagePartFromCode(n)]),
      i || (i = t.default),
      i || []
    )
  }
  toResolveHierarchy(t, n) {
    const i = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      a = [],
      l = (c) => {
        c &&
          (this.isSupportedCode(c)
            ? a.push(c)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${c}`
              ))
      }
    return (
      he(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            l(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            l(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            l(this.getLanguagePartFromCode(t)))
        : he(t) && l(this.formatLanguageCode(t)),
      i.forEach((c) => {
        a.indexOf(c) < 0 && l(this.formatLanguageCode(c))
      }),
      a
    )
  }
}
let _T = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  ST = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  }
const ET = ['v1', 'v2', 'v3'],
  xT = ['v4'],
  g0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  TT = () => {
    const e = {}
    return (
      _T.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: ST[t.fc] }
        })
      }),
      e
    )
  }
class CT {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = n),
      (this.logger = rr.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        xT.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = TT()),
      (this.pluralRulesCache = {})
  }
  addRule(t, n) {
    this.rules[t] = n
  }
  clearCache() {
    this.pluralRulesCache = {}
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (this.shouldUseIntlApi())
      try {
        const i = Cc(t === 'dev' ? 'en' : t),
          a = n.ordinal ? 'ordinal' : 'cardinal',
          l = JSON.stringify({ cleanedCode: i, type: a })
        if (l in this.pluralRulesCache) return this.pluralRulesCache[l]
        const c = new Intl.PluralRules(i, { type: a })
        return (this.pluralRulesCache[l] = c), c
      } catch {
        return
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    )
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const i = this.getRule(t, n)
    return this.shouldUseIntlApi()
      ? i && i.resolvedOptions().pluralCategories.length > 1
      : i && i.numbers.length > 1
  }
  getPluralFormsOfKey(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return this.getSuffixes(t, i).map((a) => `${n}${a}`)
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const i = this.getRule(t, n)
    return i
      ? this.shouldUseIntlApi()
        ? i
            .resolvedOptions()
            .pluralCategories.sort((a, l) => g0[a] - g0[l])
            .map(
              (a) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ''
                }${a}`
            )
        : i.numbers.map((a) => this.getSuffix(t, a, n))
      : []
  }
  getSuffix(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const a = this.getRule(t, i)
    return a
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            i.ordinal ? `ordinal${this.options.prepend}` : ''
          }${a.select(n)}`
        : this.getSuffixRetroCompatible(a, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '')
  }
  getSuffixRetroCompatible(t, n) {
    const i = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n))
    let a = t.numbers[i]
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (a === 2 ? (a = 'plural') : a === 1 && (a = ''))
    const l = () =>
      this.options.prepend && a.toString()
        ? this.options.prepend + a.toString()
        : a.toString()
    return this.options.compatibilityJSON === 'v1'
      ? a === 1
        ? ''
        : typeof a == 'number'
        ? `_plural_${a.toString()}`
        : l()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? l()
      : this.options.prepend && i.toString()
      ? this.options.prepend + i.toString()
      : i.toString()
  }
  shouldUseIntlApi() {
    return !ET.includes(this.options.compatibilityJSON)
  }
}
const m0 = function (e, t, n) {
    let i =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      l = pT(e, t, n)
    return (
      !l &&
        a &&
        he(n) &&
        ((l = Nd(e, n, i)), l === void 0 && (l = Nd(t, n, i))),
      l
    )
  },
  zh = (e) => e.replace(/\$/g, '$$$$')
class PT {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = rr.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t)
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    t.interpolation || (t.interpolation = { escapeValue: !0 })
    const {
      escape: n,
      escapeValue: i,
      useRawValueToEscape: a,
      prefix: l,
      prefixEscaped: c,
      suffix: d,
      suffixEscaped: g,
      formatSeparator: w,
      unescapeSuffix: O,
      unescapePrefix: R,
      nestingPrefix: _,
      nestingPrefixEscaped: H,
      nestingSuffix: F,
      nestingSuffixEscaped: W,
      nestingOptionsSeparator: Q,
      maxReplaces: I,
      alwaysFormat: x,
    } = t.interpolation
    ;(this.escape = n !== void 0 ? n : mT),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = a !== void 0 ? a : !1),
      (this.prefix = l ? Fo(l) : c || '{{'),
      (this.suffix = d ? Fo(d) : g || '}}'),
      (this.formatSeparator = w || ','),
      (this.unescapePrefix = O ? '' : R || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : O || ''),
      (this.nestingPrefix = _ ? Fo(_) : H || Fo('$t(')),
      (this.nestingSuffix = F ? Fo(F) : W || Fo(')')),
      (this.nestingOptionsSeparator = Q || ','),
      (this.maxReplaces = I || 1e3),
      (this.alwaysFormat = x !== void 0 ? x : !1),
      this.resetRegExp()
  }
  reset() {
    this.options && this.init(this.options)
  }
  resetRegExp() {
    const t = (n, i) =>
      n && n.source === i ? ((n.lastIndex = 0), n) : new RegExp(i, 'g')
    ;(this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ))
  }
  interpolate(t, n, i, a) {
    let l, c, d
    const g =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      w = (_) => {
        if (_.indexOf(this.formatSeparator) < 0) {
          const Q = m0(
            n,
            g,
            _,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          )
          return this.alwaysFormat
            ? this.format(Q, void 0, i, { ...a, ...n, interpolationkey: _ })
            : Q
        }
        const H = _.split(this.formatSeparator),
          F = H.shift().trim(),
          W = H.join(this.formatSeparator).trim()
        return this.format(
          m0(
            n,
            g,
            F,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          W,
          i,
          { ...a, ...n, interpolationkey: F }
        )
      }
    this.resetRegExp()
    const O =
        (a && a.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      R =
        a && a.interpolation && a.interpolation.skipOnVariables !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (_) => zh(_) },
        {
          regex: this.regexp,
          safeValue: (_) => (this.escapeValue ? zh(this.escape(_)) : zh(_)),
        },
      ].forEach((_) => {
        for (d = 0; (l = _.regex.exec(t)); ) {
          const H = l[1].trim()
          if (((c = w(H)), c === void 0))
            if (typeof O == 'function') {
              const W = O(t, l, a)
              c = he(W) ? W : ''
            } else if (a && Object.prototype.hasOwnProperty.call(a, H)) c = ''
            else if (R) {
              c = l[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${H} for interpolating ${t}`
              ),
                (c = '')
          else !he(c) && !this.useRawValueToEscape && (c = l0(c))
          const F = _.safeValue(c)
          if (
            ((t = t.replace(l[0], F)),
            R
              ? ((_.regex.lastIndex += c.length),
                (_.regex.lastIndex -= l[0].length))
              : (_.regex.lastIndex = 0),
            d++,
            d >= this.maxReplaces)
          )
            break
        }
      }),
      t
    )
  }
  nest(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a,
      l,
      c
    const d = (g, w) => {
      const O = this.nestingOptionsSeparator
      if (g.indexOf(O) < 0) return g
      const R = g.split(new RegExp(`${O}[ ]*{`))
      let _ = `{${R[1]}`
      ;(g = R[0]), (_ = this.interpolate(_, c))
      const H = _.match(/'/g),
        F = _.match(/"/g)
      ;((H && H.length % 2 === 0 && !F) || F.length % 2 !== 0) &&
        (_ = _.replace(/'/g, '"'))
      try {
        ;(c = JSON.parse(_)), w && (c = { ...w, ...c })
      } catch (W) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${g}`,
            W
          ),
          `${g}${O}${_}`
        )
      }
      return (
        c.defaultValue &&
          c.defaultValue.indexOf(this.prefix) > -1 &&
          delete c.defaultValue,
        g
      )
    }
    for (; (a = this.nestingRegexp.exec(t)); ) {
      let g = []
      ;(c = { ...i }),
        (c = c.replace && !he(c.replace) ? c.replace : c),
        (c.applyPostProcessor = !1),
        delete c.defaultValue
      let w = !1
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const O = a[1].split(this.formatSeparator).map((R) => R.trim())
        ;(a[1] = O.shift()), (g = O), (w = !0)
      }
      if (((l = n(d.call(this, a[1].trim(), c), c)), l && a[0] === t && !he(l)))
        return l
      he(l) || (l = l0(l)),
        l ||
          (this.logger.warn(`missed to resolve ${a[1]} for nesting ${t}`),
          (l = '')),
        w &&
          (l = g.reduce(
            (O, R) =>
              this.format(O, R, i.lng, { ...i, interpolationkey: a[1].trim() }),
            l.trim()
          )),
        (t = t.replace(a[0], l)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
const OT = (e) => {
    let t = e.toLowerCase().trim()
    const n = {}
    if (e.indexOf('(') > -1) {
      const i = e.split('(')
      t = i[0].toLowerCase().trim()
      const a = i[1].substring(0, i[1].length - 1)
      t === 'currency' && a.indexOf(':') < 0
        ? n.currency || (n.currency = a.trim())
        : t === 'relativetime' && a.indexOf(':') < 0
        ? n.range || (n.range = a.trim())
        : a.split(';').forEach((l) => {
            if (l) {
              const [c, ...d] = l.split(':'),
                g = d
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                w = c.trim()
              n[w] || (n[w] = g),
                g === 'false' && (n[w] = !1),
                g === 'true' && (n[w] = !0),
                isNaN(g) || (n[w] = parseInt(g, 10))
            }
          })
    }
    return { formatName: t, formatOptions: n }
  },
  Uo = (e) => {
    const t = {}
    return (n, i, a) => {
      let l = a
      a &&
        a.interpolationkey &&
        a.formatParams &&
        a.formatParams[a.interpolationkey] &&
        a[a.interpolationkey] &&
        (l = { ...l, [a.interpolationkey]: void 0 })
      const c = i + JSON.stringify(l)
      let d = t[c]
      return d || ((d = e(Cc(i), a)), (t[c] = d)), d(n)
    }
  }
class RT {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = rr.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Uo((n, i) => {
          const a = new Intl.NumberFormat(n, { ...i })
          return (l) => a.format(l)
        }),
        currency: Uo((n, i) => {
          const a = new Intl.NumberFormat(n, { ...i, style: 'currency' })
          return (l) => a.format(l)
        }),
        datetime: Uo((n, i) => {
          const a = new Intl.DateTimeFormat(n, { ...i })
          return (l) => a.format(l)
        }),
        relativetime: Uo((n, i) => {
          const a = new Intl.RelativeTimeFormat(n, { ...i })
          return (l) => a.format(l, i.range || 'day')
        }),
        list: Uo((n, i) => {
          const a = new Intl.ListFormat(n, { ...i })
          return (l) => a.format(l)
        }),
      }),
      this.init(t)
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    this.formatSeparator = n.interpolation.formatSeparator || ','
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Uo(n)
  }
  format(t, n, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const l = n.split(this.formatSeparator)
    if (
      l.length > 1 &&
      l[0].indexOf('(') > 1 &&
      l[0].indexOf(')') < 0 &&
      l.find((c) => c.indexOf(')') > -1)
    ) {
      const c = l.findIndex((d) => d.indexOf(')') > -1)
      l[0] = [l[0], ...l.splice(1, c)].join(this.formatSeparator)
    }
    return l.reduce((c, d) => {
      const { formatName: g, formatOptions: w } = OT(d)
      if (this.formats[g]) {
        let O = c
        try {
          const R =
              (a && a.formatParams && a.formatParams[a.interpolationkey]) || {},
            _ = R.locale || R.lng || a.locale || a.lng || i
          O = this.formats[g](c, _, { ...w, ...a, ...R })
        } catch (R) {
          this.logger.warn(R)
        }
        return O
      } else this.logger.warn(`there was no format function for ${g}`)
      return c
    }, t)
  }
}
const LT = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class IT extends qc {
  constructor(t, n, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = a),
      (this.logger = rr.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = a.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
      (this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(i, a.backend, a)
  }
  queueLoad(t, n, i, a) {
    const l = {},
      c = {},
      d = {},
      g = {}
    return (
      t.forEach((w) => {
        let O = !0
        n.forEach((R) => {
          const _ = `${w}|${R}`
          !i.reload && this.store.hasResourceBundle(w, R)
            ? (this.state[_] = 2)
            : this.state[_] < 0 ||
              (this.state[_] === 1
                ? c[_] === void 0 && (c[_] = !0)
                : ((this.state[_] = 1),
                  (O = !1),
                  c[_] === void 0 && (c[_] = !0),
                  l[_] === void 0 && (l[_] = !0),
                  g[R] === void 0 && (g[R] = !0)))
        }),
          O || (d[w] = !0)
      }),
      (Object.keys(l).length || Object.keys(c).length) &&
        this.queue.push({
          pending: c,
          pendingCount: Object.keys(c).length,
          loaded: {},
          errors: [],
          callback: a,
        }),
      {
        toLoad: Object.keys(l),
        pending: Object.keys(c),
        toLoadLanguages: Object.keys(d),
        toLoadNamespaces: Object.keys(g),
      }
    )
  }
  loaded(t, n, i) {
    const a = t.split('|'),
      l = a[0],
      c = a[1]
    n && this.emit('failedLoading', l, c, n),
      !n &&
        i &&
        this.store.addResourceBundle(l, c, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && i && (this.state[t] = 0)
    const d = {}
    this.queue.forEach((g) => {
      dT(g.loaded, [l], c),
        LT(g, t),
        n && g.errors.push(n),
        g.pendingCount === 0 &&
          !g.done &&
          (Object.keys(g.loaded).forEach((w) => {
            d[w] || (d[w] = {})
            const O = g.loaded[w]
            O.length &&
              O.forEach((R) => {
                d[w][R] === void 0 && (d[w][R] = !0)
              })
          }),
          (g.done = !0),
          g.errors.length ? g.callback(g.errors) : g.callback())
    }),
      this.emit('loaded', d),
      (this.queue = this.queue.filter((g) => !g.done))
  }
  read(t, n, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      l =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      c = arguments.length > 5 ? arguments[5] : void 0
    if (!t.length) return c(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: i,
        tried: a,
        wait: l,
        callback: c,
      })
      return
    }
    this.readingCalls++
    const d = (w, O) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const R = this.waitingReads.shift()
          this.read(R.lng, R.ns, R.fcName, R.tried, R.wait, R.callback)
        }
        if (w && O && a < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, i, a + 1, l * 2, c)
          }, l)
          return
        }
        c(w, O)
      },
      g = this.backend[i].bind(this.backend)
    if (g.length === 2) {
      try {
        const w = g(t, n)
        w && typeof w.then == 'function'
          ? w.then((O) => d(null, O)).catch(d)
          : d(null, w)
      } catch (w) {
        d(w)
      }
      return
    }
    return g(t, n, d)
  }
  prepareLoading(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        a && a()
      )
    he(t) && (t = this.languageUtils.toResolveHierarchy(t)), he(n) && (n = [n])
    const l = this.queueLoad(t, n, i, a)
    if (!l.toLoad.length) return l.pending.length || a(), null
    l.toLoad.forEach((c) => {
      this.loadOne(c)
    })
  }
  load(t, n, i) {
    this.prepareLoading(t, n, {}, i)
  }
  reload(t, n, i) {
    this.prepareLoading(t, n, { reload: !0 }, i)
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const i = t.split('|'),
      a = i[0],
      l = i[1]
    this.read(a, l, 'read', void 0, void 0, (c, d) => {
      c &&
        this.logger.warn(
          `${n}loading namespace ${l} for language ${a} failed`,
          c
        ),
        !c &&
          d &&
          this.logger.log(`${n}loaded namespace ${l} for language ${a}`, d),
        this.loaded(t, c, d)
    })
  }
  saveMissing(t, n, i, a, l) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      d =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {}
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${i}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      )
      return
    }
    if (!(i == null || i === '')) {
      if (this.backend && this.backend.create) {
        const g = { ...c, isUpdate: l },
          w = this.backend.create.bind(this.backend)
        if (w.length < 6)
          try {
            let O
            w.length === 5 ? (O = w(t, n, i, a, g)) : (O = w(t, n, i, a)),
              O && typeof O.then == 'function'
                ? O.then((R) => d(null, R)).catch(d)
                : d(null, O)
          } catch (O) {
            d(O)
          }
        else w(t, n, i, a, d, g)
      }
      !t || !t[0] || this.store.addResource(t[0], n, i, a)
    }
  }
}
const v0 = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {}
      if (
        (typeof e[1] == 'object' && (t = e[1]),
        he(e[1]) && (t.defaultValue = e[1]),
        he(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == 'object' || typeof e[3] == 'object')
      ) {
        const n = e[3] || e[2]
        Object.keys(n).forEach((i) => {
          t[i] = n[i]
        })
      }
      return t
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  y0 = (e) => (
    he(e.ns) && (e.ns = [e.ns]),
    he(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    he(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  Mu = () => {},
  AT = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
      typeof e[t] == 'function' && (e[t] = e[t].bind(e))
    })
  }
class el extends qc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = y0(t)),
      (this.services = {}),
      (this.logger = rr),
      (this.modules = { external: [] }),
      AT(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this
      setTimeout(() => {
        this.init(t, n)
      }, 0)
    }
  }
  init() {
    var t = this
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      i = arguments.length > 1 ? arguments[1] : void 0
    ;(this.isInitializing = !0),
      typeof n == 'function' && ((i = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (he(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]))
    const a = v0()
    ;(this.options = { ...a, ...this.options, ...y0(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...a.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator)
    const l = (g) => (g ? (typeof g == 'function' ? new g() : g) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? rr.init(l(this.modules.logger), this.options)
        : rr.init(null, this.options)
      let g
      this.modules.formatter
        ? (g = this.modules.formatter)
        : typeof Intl < 'u' && (g = RT)
      const w = new p0(this.options)
      this.store = new h0(this.options.resources, this.options)
      const O = this.services
      ;(O.logger = rr),
        (O.resourceStore = this.store),
        (O.languageUtils = w),
        (O.pluralResolver = new CT(w, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === a.interpolation.format) &&
          ((O.formatter = l(g)),
          O.formatter.init(O, this.options),
          (this.options.interpolation.format = O.formatter.format.bind(
            O.formatter
          ))),
        (O.interpolator = new PT(this.options)),
        (O.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (O.backendConnector = new IT(
          l(this.modules.backend),
          O.resourceStore,
          O,
          this.options
        )),
        O.backendConnector.on('*', function (R) {
          for (
            var _ = arguments.length, H = new Array(_ > 1 ? _ - 1 : 0), F = 1;
            F < _;
            F++
          )
            H[F - 1] = arguments[F]
          t.emit(R, ...H)
        }),
        this.modules.languageDetector &&
          ((O.languageDetector = l(this.modules.languageDetector)),
          O.languageDetector.init &&
            O.languageDetector.init(O, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((O.i18nFormat = l(this.modules.i18nFormat)),
          O.i18nFormat.init && O.i18nFormat.init(this)),
        (this.translator = new Oc(this.services, this.options)),
        this.translator.on('*', function (R) {
          for (
            var _ = arguments.length, H = new Array(_ > 1 ? _ - 1 : 0), F = 1;
            F < _;
            F++
          )
            H[F - 1] = arguments[F]
          t.emit(R, ...H)
        }),
        this.modules.external.forEach((R) => {
          R.init && R.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = Mu),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const g = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      )
      g.length > 0 && g[0] !== 'dev' && (this.options.lng = g[0])
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((g) => {
        this[g] = function () {
          return t.store[g](...arguments)
        }
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((g) => {
        this[g] = function () {
          return t.store[g](...arguments), t
        }
      })
    const c = ys(),
      d = () => {
        const g = (w, O) => {
          ;(this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            c.resolve(O),
            i(w, O)
        }
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return g(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, g)
      }
    return (
      this.options.resources || !this.options.initImmediate
        ? d()
        : setTimeout(d, 0),
      c
    )
  }
  loadResources(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mu
    const i = he(t) ? t : this.language
    if (
      (typeof t == 'function' && (n = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return n()
      const a = [],
        l = (c) => {
          !c ||
            c === 'cimode' ||
            this.services.languageUtils.toResolveHierarchy(c).forEach((d) => {
              d !== 'cimode' && a.indexOf(d) < 0 && a.push(d)
            })
        }
      i
        ? l(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((c) => l(c)),
        this.options.preload && this.options.preload.forEach((c) => l(c)),
        this.services.backendConnector.load(a, this.options.ns, (c) => {
          !c &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            n(c)
        })
    } else n(null)
  }
  reloadResources(t, n, i) {
    const a = ys()
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof n == 'function' && ((i = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      i || (i = Mu),
      this.services.backendConnector.reload(t, n, (l) => {
        a.resolve(), i(l)
      }),
      a
    )
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      )
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      )
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && tb.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    )
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const i = this.languages[n]
        if (
          !(['cimode', 'dev'].indexOf(i) > -1) &&
          this.store.hasLanguageSomeTranslations(i)
        ) {
          this.resolvedLanguage = i
          break
        }
      }
  }
  changeLanguage(t, n) {
    var i = this
    this.isLanguageChangingTo = t
    const a = ys()
    this.emit('languageChanging', t)
    const l = (g) => {
        ;(this.language = g),
          (this.languages = this.services.languageUtils.toResolveHierarchy(g)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(g)
      },
      c = (g, w) => {
        w
          ? (l(w),
            this.translator.changeLanguage(w),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', w),
            this.logger.log('languageChanged', w))
          : (this.isLanguageChangingTo = void 0),
          a.resolve(function () {
            return i.t(...arguments)
          }),
          n &&
            n(g, function () {
              return i.t(...arguments)
            })
      },
      d = (g) => {
        !t && !g && this.services.languageDetector && (g = [])
        const w = he(g)
          ? g
          : this.services.languageUtils.getBestMatchFromCodes(g)
        w &&
          (this.language || l(w),
          this.translator.language || this.translator.changeLanguage(w),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(w)),
          this.loadResources(w, (O) => {
            c(O, w)
          })
      }
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? d(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(d)
          : this.services.languageDetector.detect(d)
        : d(t),
      a
    )
  }
  getFixedT(t, n, i) {
    var a = this
    const l = function (c, d) {
      let g
      if (typeof d != 'object') {
        for (
          var w = arguments.length, O = new Array(w > 2 ? w - 2 : 0), R = 2;
          R < w;
          R++
        )
          O[R - 2] = arguments[R]
        g = a.options.overloadTranslationOptionHandler([c, d].concat(O))
      } else g = { ...d }
      ;(g.lng = g.lng || l.lng),
        (g.lngs = g.lngs || l.lngs),
        (g.ns = g.ns || l.ns),
        g.keyPrefix !== '' && (g.keyPrefix = g.keyPrefix || i || l.keyPrefix)
      const _ = a.options.keySeparator || '.'
      let H
      return (
        g.keyPrefix && Array.isArray(c)
          ? (H = c.map((F) => `${g.keyPrefix}${_}${F}`))
          : (H = g.keyPrefix ? `${g.keyPrefix}${_}${c}` : c),
        a.t(H, g)
      )
    }
    return he(t) ? (l.lng = t) : (l.lngs = t), (l.ns = n), (l.keyPrefix = i), l
  }
  t() {
    return this.translator && this.translator.translate(...arguments)
  }
  exists() {
    return this.translator && this.translator.exists(...arguments)
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      )
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      )
    const i = n.lng || this.resolvedLanguage || this.languages[0],
      a = this.options ? this.options.fallbackLng : !1,
      l = this.languages[this.languages.length - 1]
    if (i.toLowerCase() === 'cimode') return !0
    const c = (d, g) => {
      const w = this.services.backendConnector.state[`${d}|${g}`]
      return w === -1 || w === 0 || w === 2
    }
    if (n.precheck) {
      const d = n.precheck(this, c)
      if (d !== void 0) return d
    }
    return !!(
      this.hasResourceBundle(i, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (c(i, t) && (!a || c(l, t)))
    )
  }
  loadNamespaces(t, n) {
    const i = ys()
    return this.options.ns
      ? (he(t) && (t = [t]),
        t.forEach((a) => {
          this.options.ns.indexOf(a) < 0 && this.options.ns.push(a)
        }),
        this.loadResources((a) => {
          i.resolve(), n && n(a)
        }),
        i)
      : (n && n(), Promise.resolve())
  }
  loadLanguages(t, n) {
    const i = ys()
    he(t) && (t = [t])
    const a = this.options.preload || [],
      l = t.filter(
        (c) =>
          a.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c)
      )
    return l.length
      ? ((this.options.preload = a.concat(l)),
        this.loadResources((c) => {
          i.resolve(), n && n(c)
        }),
        i)
      : (n && n(), Promise.resolve())
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl'
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      i = (this.services && this.services.languageUtils) || new p0(v0())
    return n.indexOf(i.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    return new el(t, n)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mu
    const i = t.forkResourceStore
    i && delete t.forkResourceStore
    const a = { ...this.options, ...t, isClone: !0 },
      l = new el(a)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (l.logger = l.logger.clone(t)),
      ['store', 'services', 'language'].forEach((c) => {
        l[c] = this[c]
      }),
      (l.services = { ...this.services }),
      (l.services.utils = { hasLoadedNamespace: l.hasLoadedNamespace.bind(l) }),
      i &&
        ((l.store = new h0(this.store.data, a)),
        (l.services.resourceStore = l.store)),
      (l.translator = new Oc(l.services, a)),
      l.translator.on('*', function (c) {
        for (
          var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), w = 1;
          w < d;
          w++
        )
          g[w - 1] = arguments[w]
        l.emit(c, ...g)
      }),
      l.init(a, n),
      (l.translator.options = a),
      (l.translator.backendConnector.services.utils = {
        hasLoadedNamespace: l.hasLoadedNamespace.bind(l),
      }),
      l
    )
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    }
  }
}
const Rt = el.createInstance()
Rt.createInstance = el.createInstance
Rt.createInstance
Rt.dir
Rt.init
Rt.loadResources
Rt.reloadResources
Rt.use
Rt.changeLanguage
Rt.getFixedT
Rt.t
Rt.exists
Rt.setDefaultNamespace
Rt.hasLoadedNamespace
Rt.loadNamespaces
Rt.loadLanguages
Rt.use(r3).init({
  resources: {
    en: {
      translation: {
        Services: 'Services',
        Blog: 'Blog',
        ContactUs: 'Contact Us',
        AboutUs: 'About Us',
        apply: 'Apply',
        loading: 'Loading...',
        hero: {
          title: 'Discover the world and enjoy its beauty',
          desc: 'Where are you planning to travel?',
          search: 'Search...',
        },
        popular: {
          title1: 'Popular Place',
          title2: "Let's enjoy this heaven on earth",
          title3:
            'Many places are very famous, beautiful, clean, and will give a very deep impression to visitors and make them come back',
          travel_make: 'Travel to make sweet memories',
          travel_make_title: 'Find trips that fit a flexible lifestyle',
          travel_make1: 'Find trips that fit your freedom',
          travel_make1_title:
            'Travel provides the freedom to explore, the flexibility to roam, the solitude to reflect, the spontaneity to discover, and the privacy to find your purpose.',
          travel_make2: 'Get back to nature by travel',
          travel_make2_title:
            "The world is a vast playground, and you finally have the opportunity to discover Mother Nature's unique masterpiece.",
          travel_make3: 'Reignite your passion for travel.',
          travel_make3_title:
            'There are countless reasons to love travel, and one of the best is the food—glorious food.',
          travel_make_btn: 'Start your explore',
        },
        adventure: { tickets_btn: 'Book tickets and go now!' },
        footer: {
          aboutH5: 'About us',
          about: { features: 'Features', news: 'News', plans: 'Plans' },
          businessH5: 'Business',
          business: {
            whyBusiness: 'Why visamazbaku',
            faq: 'FAQ',
            blog: 'Blog',
          },
          supportH5: 'Support',
          support: {
            supportCenter: 'Support center',
            feedback: 'Feedback',
            contactUs: 'Contact us',
          },
        },
        aboutUs: {
          aboutH2: 'About',
          chatH2: 'Chat with us',
          chatP1: 'Response time: Immediate',
          chatP2: 'Contact us on WhatsApp or gmail',
          chatP3: "We're available 24/7.",
          chatWpBtn: 'Chat on WhatsApp',
          aboutTitle: 'About us',
          aboutTitleDesc:
            'Our mission is to make your travels an unforgettable experience. We are with you in your travel plans with our professional team and innovative solutions.',
          aboutWhy: 'Why Choose Us?',
          aboutWhyP1:
            'With our industry experience and our focus on customer satisfaction, we make your travel plans easy and offer the best options for you. As a team that is with you every step of the way, we are committed to providing a safe and enjoyable experience.',
          aboutWhyP2:
            'With our commitment to sustainable tourism and innovative solutions, we provide travel experiences that respect our planet.',
          aboutVision: 'Our Vision and Values',
          aboutVisionP1:
            'Our vision is to provide affordable, reliable and sustainable travel experiences for all travelers. We always aim to provide the highest quality and ensure that every individual enjoys their travel experience.',
          aboutVisionP2:
            'As a team, we place honesty, transparency and customer satisfaction at the center of our values. We make your trip a special experience, not just a service.',
          aboutReviews: 'Customer Reviews',
          aboutReviews1:
            '«Traveling with the VisamAzBaku team was very comfortable! Many thanks!»',
          aboutReviews2:
            '«Everything was very well organized during my trip. Thank you!»',
          aboutReviews3:
            '«Excellent service and very comfortable! Everything was better than I expected.»',
          aboutOurTeam: 'Our Team',
          teamCeo: 'CEO',
          teamMarketing: 'Marketing Director',
          teamCustomer: 'Customer Services',
          teamIT: 'IT',
        },
        contactForm: {
          title: 'How can we help?',
          desc: "Don't know who to talk to? You can contact us via info@visamazbaku.az. We are ready to answer any questions you may have about the website.",
          fullName: 'Full name',
          email: 'Your e-mail address',
          request: 'Request type',
          requestVisa: 'Visa questions',
          requestTravel: 'Travel planning',
          requestOther: 'Other',
          requestYour: 'Your request',
          symbols: 'Remaining symbols',
          formBtn: 'Confirm',
        },
      },
    },
    az: {
      translation: {
        Services: 'Xidmətlərimiz',
        Blog: 'Bloq',
        ContactUs: 'Əlaqə',
        AboutUs: 'Haqqımızda',
        apply: 'Müraciət et',
        loading: 'Yüklənir...',
        hero: {
          title: 'Dünyanı kəşf edin və onun gözəlliyindən həzz alın',
          desc: 'Hara səyahət planlayırsınız',
          search: 'Axtarış...',
        },
        popular: {
          title1: 'Məhşur Yerlər',
          title2: 'Gəlin yer üzündəki bu cənnətdən zövq alaq',
          title3:
            'Bir çox yerlər çox məşhur, gözəl, təmizdir və ziyarətçilərdə çox dərin təəssürat yaradacaq və onları geri qaytaracaq',
          travel_make: 'Şirin xatirələr yaratmaq üçün səyahət et.',
          travel_make_title: 'Çevik həyat tərzinə uyğun səfərlər tapın',
          travel_make1: 'Azadlığınıza uyğun səfərlər tapın',
          travel_make1_title:
            'Səyahət araşdırmaq azadlığı, gəzmək üçün çeviklik, düşünmək üçün təklik, kəşf etmək üçün kortəbiilik və məqsədinizi tapmaq üçün məxfilik təmin edir.',
          travel_make2: 'Səyahətlə təbiətə qayıdın',
          travel_make2_title:
            'Dünya böyük bir oyun meydançasıdır, və nəhayət Ana Təbiətin bənzərsiz əsərini kəşf etmək imkanı əldə edirsiniz.',
          travel_make3: 'Səyahət həvəsinizi yenidən alovlandırın',
          travel_make3_title:
            'Səyahəti sevmək üçün saysız-hesabsız səbəb var, və onlardan ən gözəli yeməklərdir – möhtəşəm yeməklər!',
          travel_make_btn: 'Kəşf etməyə başla',
        },
        adventure: { tickets_btn: 'Biletləri rezerv et və indi get!' },
        footer: {
          aboutH5: 'Haqqımızda',
          about: {
            features: 'Xüsusiyyətlər',
            news: 'Xəbərlər',
            plans: 'Planlar',
          },
          businessH5: 'Şirkət',
          business: {
            whyBusiness: 'Niyə visamazbaku',
            faq: 'FAQ',
            blog: 'Bloq',
          },
          supportH5: 'Dəstək',
          support: {
            supportCenter: 'Dəstək mərkəzi',
            feedback: 'Geri bildirim',
            contactUs: 'Bizimlə əlaqə',
          },
        },
        aboutUs: {
          aboutH2: 'Əlaqə',
          chatH2: 'Bizimlə söhbət edin',
          chatP1: 'Cavab vaxtı: Dərhal',
          chatP2: 'WhatsApp və ya gmail vasitəsilə bizimlə əlaqə saxlayın',
          chatP3: '24/7 xidmətinizdəyik.',
          chatWpBtn: 'WhatsApp-da söhbət edin',
          aboutTitle: 'Haqqımızda',
          aboutTitleDesc:
            'Missiyamız, səyahətlərinizi unudulmaz bir təcrübəyə çevirməkdir. Peşəkar komandamız və yenilikçi həllərimizlə səyahət planlarınızda yanınızdayıq.',
          aboutWhy: 'Niyə Bizi Seçməlisiniz?',
          aboutWhyP1:
            'Sənayedəki təcrübəmiz və müştəri məmnuniyyətinə verdiyimiz önəm sayəsində səyahət planlarınızı asanlaşdırır və sizin üçün ən yaxşı seçimləri təklif edirik. Yolculuğunuzun hər addımında yanınızda olan bir komanda olaraq, təhlükəsiz və xoş bir təcrübə təqdim etməyi öhdəmizə götürürük.',
          aboutWhyP2:
            'Davamlı turizmə sadiqliyimiz və yenilikçi həllərimizlə, planetimizə hörmət edən səyahət təcrübələri təmin edirik.',
          aboutVision: 'Vizyonumuz və Dəyərlərimiz',
          aboutVisionP1:
            'Vizyonumuz, bütün səyahətsevərlər üçün əlçatan, etibarlı və davamlı səyahət təcrübələri təqdim etməkdir. Hər zaman ən yüksək keyfiyyəti təmin etməyi hədəfləyirik və hər bir fərdin səyahət təcrübəsindən zövq almasını önəmsəyirik.',
          aboutVisionP2:
            'Komanda olaraq dürüstlük, şəffaflıq və müştəri məmnuniyyətini dəyərlərimizin mərkəzinə qoyuruq. Səyahətinizi yalnız bir xidmət deyil, xüsusi bir təcrübəyə çeviririk.',
          aboutReviews: 'Müştəri Rəyləri',
          aboutReviews1:
            '«VisamAzBaku komandası ilə səyahət etmək çox rahat idi! Çox təşəkkürlər!»',
          aboutReviews2:
            '«Səyahətim ərzində hər şey çox yaxşı təşkil olunmuşdu. Təşəkkürlər!»',
          aboutReviews3:
            '«Əla xidmət və çox rahatlıq! Hər şey gözlədiyimdən daha yaxşı idi.»',
          aboutOurTeam: 'Bizim Komanda',
          teamCeo: 'CEO',
          teamMarketing: 'Marketinq Direktoru',
          teamCustomer: 'Müştəri Xidmətləri',
          teamIT: 'IT',
        },
        contactForm: {
          title: 'Necə kömək edə bilərik?',
          desc: 'Kimlə danışacağınızı bilmirsiniz? Bizimlə info@visamazbaku.az vasitəsilə əlaqə saxlaya bilərsiniz. Web saytla bağlı hər hansı bir sorğunuza cavab verməyə hazırıq.',
          fullName: 'Ad soyad',
          email: 'E-mail ünvanınız',
          request: 'Sorğu növü',
          requestVisa: 'Viza sualları',
          requestTravel: 'Səyahət Planlaşdırma',
          requestOther: 'Digər',
          requestYour: 'Sorğunuz',
          symbols: 'Qalan Simvollar',
          formBtn: 'Təsdiq et',
        },
      },
    },
    ru: {
      translation: {
        Services: 'Сервисы',
        Blog: 'Блог',
        ContactUs: 'Контакты',
        AboutUs: 'О нас',
        apply: 'Обратиться',
        loading: 'Загрузка...',
        hero: {
          title: 'Откройте для себя мир и наслаждайтесь его красотой',
          desc: 'Куда вы планируете поехать?',
          search: 'Поиск...',
        },
        popular: {
          title1: 'Популярное Место',
          title2: 'Давайте насладимся этим раем на земле.',
          title3:
            'Многие места очень известны, красивы, чисты и оставляют глубокое впечатление на посетителей, заставляя их возвращаться',
          travel_make: 'Путешествуйте, чтобы создавать сладкие воспоминания.',
          travel_make_title:
            'Найдите путешествия, которые подходят для гибкого образа жизни.',
          travel_make1: 'Найдите поездки, которые соответствуют вашей свободе.',
          travel_make1_title:
            'Путешествия дают свободу для исследований, гибкость для передвижения, уединение для размышлений, спонтанность для открытий и уединение для поиска своей цели.',
          travel_make2: 'Вернитесь к природе через путешествия.',
          travel_make2_title:
            'Мир — это огромная игровая площадка, и у вас наконец-то появилась возможность открыть для себя уникальный шедевр Матушки Природы.',
          travel_make3: 'Разожгите свою страсть к путешествиям заново.',
          travel_make3_title:
            'Существует бесконечное множество причин любить путешествия, и одна из них — это еда, великолепная еда!',
          travel_make_btn: 'Начни своё исследование.',
        },
        adventure: { tickets_btn: 'Забронируй билеты и поехали прямо сейчас!' },
        footer: {
          aboutH5: 'О нас',
          about: { features: 'Функции', news: 'Новости', plans: 'Планы' },
          businessH5: 'бизнес',
          business: {
            whyBusiness: 'Почему visamazbaku',
            faq: 'FAQ',
            blog: 'Блог',
          },
          supportH5: 'Поддерживать',
          support: {
            supportCenter: 'Центр поддержки',
            feedback: 'Обратная связь',
            contactUs: 'Связаться с нами',
          },
        },
        aboutUs: {
          aboutH2: 'О нас',
          chatH2: 'Пообщайтесь с нами',
          chatP1: 'Время ответа: Немедленно',
          chatP2: 'Свяжитесь с нами через WhatsApp или Gmail',
          chatP3: 'Мы к вашим услугам 24/7.',
          chatWpBtn: 'Чат в WhatsApp',
          aboutTitle: 'О нас',
          aboutTitleDesc:
            'Наша миссия - сделать ваши путешествия незабываемыми. Наша профессиональная команда и инновационные решения помогут вам в ваших путешествиях.',
          aboutWhy: 'Почему выбирают нас?',
          aboutWhyP1:
            'Благодаря нашему опыту работы в отрасли и ориентации на удовлетворение потребностей клиентов мы упростим ваши планы путешествий и предложим лучшие варианты для вас. Наша команда, которая будет с вами на каждом шагу, стремится обеспечить безопасный и приятный опыт.',
          aboutWhyP2:
            'Благодаря нашей приверженности устойчивому туризму и инновационным решениям мы обеспечиваем путешествия, которые бережно относятся к нашей планете.',
          aboutVision: 'Наше видение и ценности',
          aboutVisionP1:
            'Наша цель - обеспечить доступные, надежные и экологичные путешествия для всех путешественников. Мы всегда стремимся обеспечить высочайшее качество и гарантировать, что каждый человек получит удовольствие от своего путешествия.',
          aboutVisionP2:
            'Как команда, мы ставим честность, прозрачность и удовлетворенность клиентов в центр наших ценностей. Мы превращаем ваше путешествие в особый опыт, а не просто в услугу.',
          aboutReviews: 'Отзывы покупателей',
          aboutReviews1:
            '«Путешествовать с командой VisamAzBaku было очень комфортно! Большое спасибо!»',
          aboutReviews2:
            '«Все было очень хорошо организовано во время моей поездки. Спасибо!»',
          aboutReviews3:
            '«Отличный сервис и очень комфортно! Все было лучше, чем я ожидал».',
          aboutOurTeam: 'Наша команда',
          teamCeo: 'CEO',
          teamMarketing: 'Директор по маркетингу',
          teamCustomer: 'Обслуживание клиентов',
          teamIT: 'IT',
        },
        contactForm: {
          title: 'Как мы можем помочь?',
          desc: 'Не знаете, с кем поговорить? Вы можете связаться с нами по адресу info@visamazbaku.az. Мы готовы ответить на любые ваши вопросы о сайте.',
          fullName: 'Полное имя',
          email: 'Ваш электронный адрес',
          request: 'Тип запроса',
          requestVisa: 'Визовые вопросы',
          requestTravel: 'Планирование путешествия',
          requestOther: 'Другой',
          requestYour: 'Ваш запрос',
          symbols: 'Остальные символы',
          formBtn: 'Подтвердите',
        },
      },
    },
  },
  lng: 'az',
  fallbackLng: 'en',
  interpolation: { escapeValue: !1 },
})
Nh.createRoot(document.getElementById('root')).render(
  ai.jsx(P0.StrictMode, { children: ai.jsx(cT, {}) })
)
