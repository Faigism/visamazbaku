;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o)
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === 'childList')
        for (const c of l.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && i(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const l = {}
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    )
  }
  function i(o) {
    if (o.ep) return
    o.ep = !0
    const l = n(o)
    fetch(o.href, l)
  }
})()
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const o = t(i)
    fetch(i.href, o)
  }
})()
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const o = t(i)
    fetch(i.href, o)
  }
})()
function EE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n]
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const o in i)
        if (o !== 'default' && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(i, o)
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => i[o] }
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
    for (const o of i)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const o = t(i)
    fetch(i.href, o)
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
  Oc = {},
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
  CE = Symbol.for('react.portal'),
  TE = Symbol.for('react.fragment'),
  AE = Symbol.for('react.strict_mode'),
  PE = Symbol.for('react.profiler'),
  OE = Symbol.for('react.provider'),
  RE = Symbol.for('react.context'),
  LE = Symbol.for('react.forward_ref'),
  IE = Symbol.for('react.suspense'),
  NE = Symbol.for('react.memo'),
  jE = Symbol.for('react.lazy'),
  Am = Symbol.iterator
function zE(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Am && e[Am]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var _0 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  k0 = Object.assign,
  S0 = {}
function po(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || _0)
}
po.prototype.isReactComponent = {}
po.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
po.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function E0() {}
E0.prototype = po.prototype
function Dd(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || _0)
}
var Md = (Dd.prototype = new E0())
Md.constructor = Dd
k0(Md, po.prototype)
Md.isPureReactComponent = !0
var Pm = Array.isArray,
  x0 = Object.prototype.hasOwnProperty,
  Fd = { current: null },
  C0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function T0(e, t, n) {
  var i,
    o = {},
    l = null,
    c = null
  if (t != null)
    for (i in (t.ref !== void 0 && (c = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      x0.call(t, i) && !C0.hasOwnProperty(i) && (o[i] = t[i])
  var d = arguments.length - 2
  if (d === 1) o.children = n
  else if (1 < d) {
    for (var g = Array(d), w = 0; w < d; w++) g[w] = arguments[w + 2]
    o.children = g
  }
  if (e && e.defaultProps)
    for (i in ((d = e.defaultProps), d)) o[i] === void 0 && (o[i] = d[i])
  return { $$typeof: tl, type: e, key: l, ref: c, props: o, _owner: Fd.current }
}
function DE(e, t) {
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
function ME(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Om = /\/+/g
function rh(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? ME('' + e.key)
    : t.toString(36)
}
function Mu(e, t, n, i, o) {
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
          case CE:
            c = !0
        }
    }
  if (c)
    return (
      (c = e),
      (o = o(c)),
      (e = i === '' ? '.' + rh(c, 0) : i),
      Pm(o)
        ? ((n = ''),
          e != null && (n = e.replace(Om, '$&/') + '/'),
          Mu(o, t, n, '', function (w) {
            return w
          }))
        : o != null &&
          (Ud(o) &&
            (o = DE(
              o,
              n +
                (!o.key || (c && c.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Om, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((c = 0), (i = i === '' ? '.' : i + ':'), Pm(e)))
    for (var d = 0; d < e.length; d++) {
      l = e[d]
      var g = i + rh(l, d)
      c += Mu(l, t, n, g, o)
    }
  else if (((g = zE(e)), typeof g == 'function'))
    for (e = g.call(e), d = 0; !(l = e.next()).done; )
      (l = l.value), (g = i + rh(l, d++)), (c += Mu(l, t, n, g, o))
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
    o = 0
  return (
    Mu(e, i, '', '', function (l) {
      return t.call(n, l, o++)
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
be.Component = po
be.Fragment = TE
be.Profiler = PE
be.PureComponent = Dd
be.StrictMode = AE
be.Suspense = IE
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = UE
be.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var i = k0({}, e.props),
    o = e.key,
    l = e.ref,
    c = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (c = Fd.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps
    for (g in t)
      x0.call(t, g) &&
        !C0.hasOwnProperty(g) &&
        (i[g] = t[g] === void 0 && d !== void 0 ? d[g] : t[g])
  }
  var g = arguments.length - 2
  if (g === 1) i.children = n
  else if (1 < g) {
    d = Array(g)
    for (var w = 0; w < g; w++) d[w] = arguments[w + 2]
    i.children = d
  }
  return { $$typeof: tl, type: e.type, key: o, ref: l, props: i, _owner: c }
}
be.createContext = function (e) {
  return (
    (e = {
      $$typeof: RE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: OE, _context: e }),
    (e.Consumer = e)
  )
}
be.createElement = T0
be.createFactory = function (e) {
  var t = T0.bind(null, e)
  return (t.type = e), t
}
be.createRef = function () {
  return { current: null }
}
be.forwardRef = function (e) {
  return { $$typeof: LE, render: e }
}
be.isValidElement = Ud
be.lazy = function (e) {
  return { $$typeof: jE, _payload: { _status: -1, _result: e }, _init: FE }
}
be.memo = function (e, t) {
  return { $$typeof: NE, type: e, compare: t === void 0 ? null : t }
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
var At = w0.exports
const A0 = xE(At),
  $E = EE({ __proto__: null, default: A0 }, [At])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var BE = At,
  VE = Symbol.for('react.element'),
  HE = Symbol.for('react.fragment'),
  WE = Object.prototype.hasOwnProperty,
  qE = BE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  KE = { key: !0, ref: !0, __self: !0, __source: !0 }
function P0(e, t, n) {
  var i,
    o = {},
    l = null,
    c = null
  n !== void 0 && (l = '' + n),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (c = t.ref)
  for (i in t) WE.call(t, i) && !KE.hasOwnProperty(i) && (o[i] = t[i])
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) o[i] === void 0 && (o[i] = t[i])
  return { $$typeof: VE, type: e, key: l, ref: c, props: o, _owner: qE.current }
}
Oc.Fragment = HE
Oc.jsx = P0
Oc.jsxs = P0
b0.exports = Oc
var oi = b0.exports,
  zh = {},
  O0 = { exports: {} },
  hn = {},
  R0 = { exports: {} },
  L0 = {}
;(function (e) {
  function t(Z, ae) {
    var ue = Z.length
    Z.push(ae)
    e: for (; 0 < ue; ) {
      var _e = (ue - 1) >>> 1,
        Ae = Z[_e]
      if (0 < o(Ae, ae)) (Z[_e] = ae), (Z[ue] = Ae), (ue = _e)
      else break e
    }
  }
  function n(Z) {
    return Z.length === 0 ? null : Z[0]
  }
  function i(Z) {
    if (Z.length === 0) return null
    var ae = Z[0],
      ue = Z.pop()
    if (ue !== ae) {
      Z[0] = ue
      e: for (var _e = 0, Ae = Z.length, $e = Ae >>> 1; _e < $e; ) {
        var An = 2 * (_e + 1) - 1,
          bt = Z[An],
          Bt = An + 1,
          pn = Z[Bt]
        if (0 > o(bt, ue))
          Bt < Ae && 0 > o(pn, bt)
            ? ((Z[_e] = pn), (Z[Bt] = ue), (_e = Bt))
            : ((Z[_e] = bt), (Z[An] = ue), (_e = An))
        else if (Bt < Ae && 0 > o(pn, ue)) (Z[_e] = pn), (Z[Bt] = ue), (_e = Bt)
        else break e
      }
    }
    return ae
  }
  function o(Z, ae) {
    var ue = Z.sortIndex - ae.sortIndex
    return ue !== 0 ? ue : Z.id - ae.id
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
    P = 1,
    O = null,
    k = 3,
    V = !1,
    F = !1,
    W = !1,
    J = typeof setTimeout == 'function' ? setTimeout : null,
    L = typeof clearTimeout == 'function' ? clearTimeout : null,
    x = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function I(Z) {
    for (var ae = n(w); ae !== null; ) {
      if (ae.callback === null) i(w)
      else if (ae.startTime <= Z)
        i(w), (ae.sortIndex = ae.expirationTime), t(g, ae)
      else break
      ae = n(w)
    }
  }
  function B(Z) {
    if (((W = !1), I(Z), !F))
      if (n(g) !== null) (F = !0), qn(G)
      else {
        var ae = n(w)
        ae !== null && Ee(B, ae.startTime - Z)
      }
  }
  function G(Z, ae) {
    ;(F = !1), W && ((W = !1), L(_), (_ = -1)), (V = !0)
    var ue = k
    try {
      for (
        I(ae), O = n(g);
        O !== null && (!(O.expirationTime > ae) || (Z && !N()));

      ) {
        var _e = O.callback
        if (typeof _e == 'function') {
          ;(O.callback = null), (k = O.priorityLevel)
          var Ae = _e(O.expirationTime <= ae)
          ;(ae = e.unstable_now()),
            typeof Ae == 'function' ? (O.callback = Ae) : O === n(g) && i(g),
            I(ae)
        } else i(g)
        O = n(g)
      }
      if (O !== null) var $e = !0
      else {
        var An = n(w)
        An !== null && Ee(B, An.startTime - ae), ($e = !1)
      }
      return $e
    } finally {
      ;(O = null), (k = ue), (V = !1)
    }
  }
  var X = !1,
    S = null,
    _ = -1,
    C = 5,
    A = -1
  function N() {
    return !(e.unstable_now() - A < C)
  }
  function M() {
    if (S !== null) {
      var Z = e.unstable_now()
      A = Z
      var ae = !0
      try {
        ae = S(!0, Z)
      } finally {
        ae ? T() : ((X = !1), (S = null))
      }
    } else X = !1
  }
  var T
  if (typeof x == 'function')
    T = function () {
      x(M)
    }
  else if (typeof MessageChannel < 'u') {
    var Je = new MessageChannel(),
      $t = Je.port2
    ;(Je.port1.onmessage = M),
      (T = function () {
        $t.postMessage(null)
      })
  } else
    T = function () {
      J(M, 0)
    }
  function qn(Z) {
    ;(S = Z), X || ((X = !0), T())
  }
  function Ee(Z, ae) {
    _ = J(function () {
      Z(e.unstable_now())
    }, ae)
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
      F || V || ((F = !0), qn(G))
    }),
    (e.unstable_forceFrameRate = function (Z) {
      0 > Z || 125 < Z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (C = 0 < Z ? Math.floor(1e3 / Z) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return k
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(g)
    }),
    (e.unstable_next = function (Z) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var ae = 3
          break
        default:
          ae = k
      }
      var ue = k
      k = ae
      try {
        return Z()
      } finally {
        k = ue
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (Z, ae) {
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
      var ue = k
      k = Z
      try {
        return ae()
      } finally {
        k = ue
      }
    }),
    (e.unstable_scheduleCallback = function (Z, ae, ue) {
      var _e = e.unstable_now()
      switch (
        (typeof ue == 'object' && ue !== null
          ? ((ue = ue.delay),
            (ue = typeof ue == 'number' && 0 < ue ? _e + ue : _e))
          : (ue = _e),
        Z)
      ) {
        case 1:
          var Ae = -1
          break
        case 2:
          Ae = 250
          break
        case 5:
          Ae = 1073741823
          break
        case 4:
          Ae = 1e4
          break
        default:
          Ae = 5e3
      }
      return (
        (Ae = ue + Ae),
        (Z = {
          id: P++,
          callback: ae,
          priorityLevel: Z,
          startTime: ue,
          expirationTime: Ae,
          sortIndex: -1,
        }),
        ue > _e
          ? ((Z.sortIndex = ue),
            t(w, Z),
            n(g) === null &&
              Z === n(w) &&
              (W ? (L(_), (_ = -1)) : (W = !0), Ee(B, ue - _e)))
          : ((Z.sortIndex = Ae), t(g, Z), F || V || ((F = !0), qn(G))),
        Z
      )
    }),
    (e.unstable_shouldYield = N),
    (e.unstable_wrapCallback = function (Z) {
      var ae = k
      return function () {
        var ue = k
        k = ae
        try {
          return Z.apply(this, arguments)
        } finally {
          k = ue
        }
      }
    })
})(L0)
R0.exports = L0
var QE = R0.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I0 = At,
  fn = QE
function Y(e) {
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
var N0 = new Set(),
  js = {}
function oa(e, t) {
  ao(e, t), ao(e + 'Capture', t)
}
function ao(e, t) {
  for (js[e] = t, e = 0; e < t.length; e++) N0.add(t[e])
}
var Cr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Dh = Object.prototype.hasOwnProperty,
  GE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rm = {},
  Lm = {}
function JE(e) {
  return Dh.call(Lm, e)
    ? !0
    : Dh.call(Rm, e)
    ? !1
    : GE.test(e)
    ? (Lm[e] = !0)
    : ((Rm[e] = !0), !1)
}
function YE(e, t, n, i) {
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
  if (t === null || typeof t > 'u' || YE(e, t, n, i)) return !0
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
function Ut(e, t, n, i, o, l, c) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = o),
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
function Vd(e, t, n, i) {
  var o = yt.hasOwnProperty(t) ? yt[t] : null
  ;(o !== null
    ? o.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (XE(t, n, o, i) && (n = null),
    i || o === null
      ? JE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (i = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var Rr = I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wu = Symbol.for('react.element'),
  Ua = Symbol.for('react.portal'),
  $a = Symbol.for('react.fragment'),
  Hd = Symbol.for('react.strict_mode'),
  Mh = Symbol.for('react.profiler'),
  j0 = Symbol.for('react.provider'),
  z0 = Symbol.for('react.context'),
  Wd = Symbol.for('react.forward_ref'),
  Fh = Symbol.for('react.suspense'),
  Uh = Symbol.for('react.suspense_list'),
  qd = Symbol.for('react.memo'),
  ni = Symbol.for('react.lazy'),
  D0 = Symbol.for('react.offscreen'),
  Im = Symbol.iterator
function cs(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Im && e[Im]) || e['@@iterator']),
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
var ah = !1
function oh(e, t) {
  if (!e || ah) return ''
  ah = !0
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
        var o = w.stack.split(`
`),
          l = i.stack.split(`
`),
          c = o.length - 1,
          d = l.length - 1;
        1 <= c && 0 <= d && o[c] !== l[d];

      )
        d--
      for (; 1 <= c && 0 <= d; c--, d--)
        if (o[c] !== l[d]) {
          if (c !== 1 || d !== 1)
            do
              if ((c--, d--, 0 > d || o[c] !== l[d])) {
                var g =
                  `
` + o[c].replace(' at new ', ' at ')
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
    ;(ah = !1), (Error.prepareStackTrace = n)
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
      return (e = oh(e.type, !1)), e
    case 11:
      return (e = oh(e.type.render, !1)), e
    case 1:
      return (e = oh(e.type, !0)), e
    default:
      return ''
  }
}
function $h(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case $a:
      return 'Fragment'
    case Ua:
      return 'Portal'
    case Mh:
      return 'Profiler'
    case Hd:
      return 'StrictMode'
    case Fh:
      return 'Suspense'
    case Uh:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case z0:
        return (e.displayName || 'Context') + '.Consumer'
      case j0:
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
      return t === Hd ? 'StrictMode' : 'Mode'
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
function M0(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function t4(e) {
  var t = M0(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      l = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
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
function _u(e) {
  e._valueTracker || (e._valueTracker = t4(e))
}
function F0(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    i = ''
  return (
    e && (i = M0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ju(e) {
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
function Nm(e, t) {
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
  ;(t = t.checked), t != null && Vd(e, 'checked', t, !1)
}
function Vh(e, t) {
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
    ? Hh(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Hh(e, t.type, bi(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function jm(e, t, n) {
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
function Hh(e, t, n) {
  ;(t !== 'number' || Ju(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ws = Array.isArray
function Xa(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && i && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + bi(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), i && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Wh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Y(91))
  return We({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function zm(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Y(92))
      if (ws(n)) {
        if (1 < n.length) throw Error(Y(93))
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
function Dm(e) {
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
var ku,
  V0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ku = ku || document.createElement('div'),
          ku.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ku.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function zs(e, t) {
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
function H0(e, t, n) {
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
        o = H0(n, t[n], i)
      n === 'float' && (n = 'cssFloat'), i ? e.setProperty(n, o) : (e[n] = o)
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
      throw Error(Y(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Y(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(Y(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(Y(62))
  }
}
function Qh(e, t) {
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
var Jh = null,
  Za = null,
  eo = null
function Mm(e) {
  if ((e = il(e))) {
    if (typeof Jh != 'function') throw Error(Y(280))
    var t = e.stateNode
    t && ((t = jc(t)), Jh(e.stateNode, e.type, t))
  }
}
function q0(e) {
  Za ? (eo ? eo.push(e) : (eo = [e])) : (Za = e)
}
function K0() {
  if (Za) {
    var e = Za,
      t = eo
    if (((eo = Za = null), Mm(e), t)) for (e = 0; e < t.length; e++) Mm(t[e])
  }
}
function Q0(e, t) {
  return e(t)
}
function G0() {}
var sh = !1
function J0(e, t, n) {
  if (sh) return e(t, n)
  sh = !0
  try {
    return Q0(e, t, n)
  } finally {
    ;(sh = !1), (Za !== null || eo !== null) && (G0(), K0())
  }
}
function Ds(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var i = jc(n)
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
  if (n && typeof n != 'function') throw Error(Y(231, t, typeof n))
  return n
}
var Yh = !1
if (Cr)
  try {
    var fs = {}
    Object.defineProperty(fs, 'passive', {
      get: function () {
        Yh = !0
      },
    }),
      window.addEventListener('test', fs, fs),
      window.removeEventListener('test', fs, fs)
  } catch {
    Yh = !1
  }
function i4(e, t, n, i, o, l, c, d, g) {
  var w = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, w)
  } catch (P) {
    this.onError(P)
  }
}
var Es = !1,
  Yu = null,
  Xu = !1,
  Xh = null,
  a4 = {
    onError: function (e) {
      ;(Es = !0), (Yu = e)
    },
  }
function o4(e, t, n, i, o, l, c, d, g) {
  ;(Es = !1), (Yu = null), i4.apply(a4, arguments)
}
function s4(e, t, n, i, o, l, c, d, g) {
  if ((o4.apply(this, arguments), Es)) {
    if (Es) {
      var w = Yu
      ;(Es = !1), (Yu = null)
    } else throw Error(Y(198))
    Xu || ((Xu = !0), (Xh = w))
  }
}
function sa(e) {
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
function Y0(e) {
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
  if (sa(e) !== e) throw Error(Y(188))
}
function l4(e) {
  var t = e.alternate
  if (!t) {
    if (((t = sa(e)), t === null)) throw Error(Y(188))
    return t !== e ? null : e
  }
  for (var n = e, i = t; ; ) {
    var o = n.return
    if (o === null) break
    var l = o.alternate
    if (l === null) {
      if (((i = o.return), i !== null)) {
        n = i
        continue
      }
      break
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Fm(o), e
        if (l === i) return Fm(o), t
        l = l.sibling
      }
      throw Error(Y(188))
    }
    if (n.return !== i.return) (n = o), (i = l)
    else {
      for (var c = !1, d = o.child; d; ) {
        if (d === n) {
          ;(c = !0), (n = o), (i = l)
          break
        }
        if (d === i) {
          ;(c = !0), (i = o), (n = l)
          break
        }
        d = d.sibling
      }
      if (!c) {
        for (d = l.child; d; ) {
          if (d === n) {
            ;(c = !0), (n = l), (i = o)
            break
          }
          if (d === i) {
            ;(c = !0), (i = l), (n = o)
            break
          }
          d = d.sibling
        }
        if (!c) throw Error(Y(189))
      }
    }
    if (n.alternate !== i) throw Error(Y(190))
  }
  if (n.tag !== 3) throw Error(Y(188))
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
  Qd = fn.unstable_ImmediatePriority,
  ty = fn.unstable_UserBlockingPriority,
  Zu = fn.unstable_NormalPriority,
  h4 = fn.unstable_LowPriority,
  ny = fn.unstable_IdlePriority,
  Rc = null,
  ir = null
function d4(e) {
  if (ir && typeof ir.onCommitFiberRoot == 'function')
    try {
      ir.onCommitFiberRoot(Rc, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Vn = Math.clz32 ? Math.clz32 : m4,
  p4 = Math.log,
  g4 = Math.LN2
function m4(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((p4(e) / g4) | 0)) | 0
}
var Su = 64,
  Eu = 4194304
function _s(e) {
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
    o = e.suspendedLanes,
    l = e.pingedLanes,
    c = n & 268435455
  if (c !== 0) {
    var d = c & ~o
    d !== 0 ? (i = _s(d)) : ((l &= c), l !== 0 && (i = _s(l)))
  } else (c = n & ~o), c !== 0 ? (i = _s(c)) : l !== 0 && (i = _s(l))
  if (i === 0) return 0
  if (
    t !== 0 &&
    t !== i &&
    !(t & o) &&
    ((o = i & -i), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - Vn(t)), (o = 1 << n), (i |= e[n]), (t &= ~o)
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
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var c = 31 - Vn(l),
      d = 1 << c,
      g = o[c]
    g === -1
      ? (!(d & n) || d & i) && (o[c] = v4(d, t))
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
    (t = 31 - Vn(t)),
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
    var o = 31 - Vn(n),
      l = 1 << o
    ;(t[o] = 0), (i[o] = -1), (e[o] = -1), (n &= ~l)
  }
}
function Gd(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var i = 31 - Vn(n),
      o = 1 << i
    ;(o & t) | (e[i] & t) && (e[i] |= t), (n &= ~o)
  }
}
var Le = 0
function iy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var ay,
  Jd,
  oy,
  sy,
  ly,
  ed = !1,
  xu = [],
  ui = null,
  ci = null,
  fi = null,
  Ms = new Map(),
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
      Ms.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Fs.delete(t.pointerId)
  }
}
function hs(e, t, n, i, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = il(t)), t !== null && Jd(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function _4(e, t, n, i, o) {
  switch (t) {
    case 'focusin':
      return (ui = hs(ui, e, t, n, i, o)), !0
    case 'dragenter':
      return (ci = hs(ci, e, t, n, i, o)), !0
    case 'mouseover':
      return (fi = hs(fi, e, t, n, i, o)), !0
    case 'pointerover':
      var l = o.pointerId
      return Ms.set(l, hs(Ms.get(l) || null, e, t, n, i, o)), !0
    case 'gotpointercapture':
      return (
        (l = o.pointerId), Fs.set(l, hs(Fs.get(l) || null, e, t, n, i, o)), !0
      )
  }
  return !1
}
function uy(e) {
  var t = Gi(e.target)
  if (t !== null) {
    var n = sa(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Y0(n)), t !== null)) {
          ;(e.blockedOn = t),
            ly(e.priority, function () {
              oy(n)
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
    } else return (t = il(n)), t !== null && Jd(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Bm(e, t, n) {
  Uu(e) && n.delete(t)
}
function k4() {
  ;(ed = !1),
    ui !== null && Uu(ui) && (ui = null),
    ci !== null && Uu(ci) && (ci = null),
    fi !== null && Uu(fi) && (fi = null),
    Ms.forEach(Bm),
    Fs.forEach(Bm)
}
function ds(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ed ||
      ((ed = !0), fn.unstable_scheduleCallback(fn.unstable_NormalPriority, k4)))
}
function Us(e) {
  function t(o) {
    return ds(o, e)
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
      Ms.forEach(t),
      Fs.forEach(t),
      n = 0;
    n < ii.length;
    n++
  )
    (i = ii[n]), i.blockedOn === e && (i.blockedOn = null)
  for (; 0 < ii.length && ((n = ii[0]), n.blockedOn === null); )
    uy(n), n.blockedOn === null && ii.shift()
}
var to = Rr.ReactCurrentBatchConfig,
  tc = !0
function S4(e, t, n, i) {
  var o = Le,
    l = to.transition
  to.transition = null
  try {
    ;(Le = 1), Yd(e, t, n, i)
  } finally {
    ;(Le = o), (to.transition = l)
  }
}
function E4(e, t, n, i) {
  var o = Le,
    l = to.transition
  to.transition = null
  try {
    ;(Le = 4), Yd(e, t, n, i)
  } finally {
    ;(Le = o), (to.transition = l)
  }
}
function Yd(e, t, n, i) {
  if (tc) {
    var o = td(e, t, n, i)
    if (o === null) yh(e, t, i, nc, n), $m(e, i)
    else if (_4(o, e, t, n, i)) i.stopPropagation()
    else if (($m(e, i), t & 4 && -1 < w4.indexOf(e))) {
      for (; o !== null; ) {
        var l = il(o)
        if (
          (l !== null && ay(l),
          (l = td(e, t, n, i)),
          l === null && yh(e, t, i, nc, n),
          l === o)
        )
          break
        o = l
      }
      o !== null && i.stopPropagation()
    } else yh(e, t, i, null, n)
  }
}
var nc = null
function td(e, t, n, i) {
  if (((nc = null), (e = Kd(i)), (e = Gi(e)), e !== null))
    if (((t = sa(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Y0(t)), e !== null)) return e
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
        case Qd:
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
    o = 'value' in si ? si.value : si.textContent,
    l = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var c = n - e
  for (i = 1; i <= c && t[n - i] === o[l - i]; i++);
  return ($u = o.slice(e, 1 < i ? 1 - i : void 0))
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
function Cu() {
  return !0
}
function Vm() {
  return !1
}
function dn(e) {
  function t(n, i, o, l, c) {
    ;(this._reactName = n),
      (this._targetInst = o),
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
        ? Cu
        : Vm),
      (this.isPropagationStopped = Vm),
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
          (this.isDefaultPrevented = Cu))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cu))
      },
      persist: function () {},
      isPersistent: Cu,
    }),
    t
  )
}
var go = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zd = dn(go),
  rl = We({}, go, { view: 0, detail: 0 }),
  x4 = dn(rl),
  uh,
  ch,
  ps,
  Lc = We({}, rl, {
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
  Hm = dn(Lc),
  C4 = We({}, Lc, { dataTransfer: 0 }),
  T4 = dn(C4),
  A4 = We({}, rl, { relatedTarget: 0 }),
  fh = dn(A4),
  P4 = We({}, go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  O4 = dn(P4),
  R4 = We({}, go, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  L4 = dn(R4),
  I4 = We({}, go, { data: 0 }),
  Wm = dn(I4),
  N4 = {
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
  j4 = {
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
  z4 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function D4(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = z4[e]) ? !!t[e] : !1
}
function ep() {
  return D4
}
var M4 = We({}, rl, {
    key: function (e) {
      if (e.key) {
        var t = N4[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Bu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? j4[e.keyCode] || 'Unidentified'
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
  F4 = dn(M4),
  U4 = We({}, Lc, {
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
  V4 = We({}, go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  H4 = dn(V4),
  W4 = We({}, Lc, {
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
  tp = Cr && 'CompositionEvent' in window,
  xs = null
Cr && 'documentMode' in document && (xs = document.documentMode)
var Q4 = Cr && 'TextEvent' in window && !xs,
  hy = Cr && (!tp || (xs && 8 < xs && 11 >= xs)),
  Km = ' ',
  Qm = !1
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
var Ba = !1
function G4(e, t) {
  switch (e) {
    case 'compositionend':
      return py(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Qm = !0), Km)
    case 'textInput':
      return (e = t.data), e === Km && Qm ? null : e
    default:
      return null
  }
}
function J4(e, t) {
  if (Ba)
    return e === 'compositionend' || (!tp && dy(e, t))
      ? ((e = fy()), ($u = Xd = si = null), (Ba = !1), e)
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
var Y4 = {
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
  return t === 'input' ? !!Y4[e.type] : t === 'textarea'
}
function gy(e, t, n, i) {
  q0(i),
    (t = rc(t, 'onChange')),
    0 < t.length &&
      ((n = new Zd('onChange', 'change', null, n, i)),
      e.push({ event: n, listeners: t }))
}
var Cs = null,
  $s = null
function X4(e) {
  Cy(e, 0)
}
function Ic(e) {
  var t = Wa(e)
  if (F0(t)) return e
}
function Z4(e, t) {
  if (e === 'change') return t
}
var my = !1
if (Cr) {
  var hh
  if (Cr) {
    var dh = 'oninput' in document
    if (!dh) {
      var Jm = document.createElement('div')
      Jm.setAttribute('oninput', 'return;'),
        (dh = typeof Jm.oninput == 'function')
    }
    hh = dh
  } else hh = !1
  my = hh && (!document.documentMode || 9 < document.documentMode)
}
function Ym() {
  Cs && (Cs.detachEvent('onpropertychange', vy), ($s = Cs = null))
}
function vy(e) {
  if (e.propertyName === 'value' && Ic($s)) {
    var t = []
    gy(t, $s, e, Kd(e)), J0(X4, t)
  }
}
function ex(e, t, n) {
  e === 'focusin'
    ? (Ym(), (Cs = t), ($s = n), Cs.attachEvent('onpropertychange', vy))
    : e === 'focusout' && Ym()
}
function tx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ic($s)
}
function nx(e, t) {
  if (e === 'click') return Ic(t)
}
function rx(e, t) {
  if (e === 'input' || e === 'change') return Ic(t)
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
    var o = n[i]
    if (!Dh.call(t, o) || !Wn(e[o], t[o])) return !1
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
  for (var e = window, t = Ju(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ju(e.document)
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
function ax(e) {
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
        var o = n.textContent.length,
          l = Math.min(i.start, o)
        ;(i = i.end === void 0 ? l : Math.min(i.end, o)),
          !e.extend && l > i && ((o = i), (i = l), (l = o)),
          (o = Zm(n, l))
        var c = Zm(n, i)
        o &&
          c &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== c.node ||
            e.focusOffset !== c.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
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
var ox = Cr && 'documentMode' in document && 11 >= document.documentMode,
  Va = null,
  nd = null,
  Ts = null,
  rd = !1
function ev(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  rd ||
    Va == null ||
    Va !== Ju(i) ||
    ((i = Va),
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
    (Ts && Bs(Ts, i)) ||
      ((Ts = i),
      (i = rc(nd, 'onSelect')),
      0 < i.length &&
        ((t = new Zd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Va))))
}
function Tu(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Ha = {
    animationend: Tu('Animation', 'AnimationEnd'),
    animationiteration: Tu('Animation', 'AnimationIteration'),
    animationstart: Tu('Animation', 'AnimationStart'),
    transitionend: Tu('Transition', 'TransitionEnd'),
  },
  ph = {},
  wy = {}
Cr &&
  ((wy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ha.animationend.animation,
    delete Ha.animationiteration.animation,
    delete Ha.animationstart.animation),
  'TransitionEvent' in window || delete Ha.transitionend.transition)
function Nc(e) {
  if (ph[e]) return ph[e]
  if (!Ha[e]) return e
  var t = Ha[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in wy) return (ph[e] = t[n])
  return e
}
var _y = Nc('animationend'),
  ky = Nc('animationiteration'),
  Sy = Nc('animationstart'),
  Ey = Nc('transitionend'),
  xy = new Map(),
  tv =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function _i(e, t) {
  xy.set(e, t), oa(t, [e])
}
for (var gh = 0; gh < tv.length; gh++) {
  var mh = tv[gh],
    sx = mh.toLowerCase(),
    lx = mh[0].toUpperCase() + mh.slice(1)
  _i(sx, 'on' + lx)
}
_i(_y, 'onAnimationEnd')
_i(ky, 'onAnimationIteration')
_i(Sy, 'onAnimationStart')
_i('dblclick', 'onDoubleClick')
_i('focusin', 'onFocus')
_i('focusout', 'onBlur')
_i(Ey, 'onTransitionEnd')
ao('onMouseEnter', ['mouseout', 'mouseover'])
ao('onMouseLeave', ['mouseout', 'mouseover'])
ao('onPointerEnter', ['pointerout', 'pointerover'])
ao('onPointerLeave', ['pointerout', 'pointerover'])
oa(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
oa(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
oa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
oa(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
oa(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
oa(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var ks =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ux = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ks))
function nv(e, t, n) {
  var i = e.type || 'unknown-event'
  ;(e.currentTarget = n), s4(i, t, void 0, e), (e.currentTarget = null)
}
function Cy(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      o = i.event
    i = i.listeners
    e: {
      var l = void 0
      if (t)
        for (var c = i.length - 1; 0 <= c; c--) {
          var d = i[c],
            g = d.instance,
            w = d.currentTarget
          if (((d = d.listener), g !== l && o.isPropagationStopped())) break e
          nv(o, d, w), (l = g)
        }
      else
        for (c = 0; c < i.length; c++) {
          if (
            ((d = i[c]),
            (g = d.instance),
            (w = d.currentTarget),
            (d = d.listener),
            g !== l && o.isPropagationStopped())
          )
            break e
          nv(o, d, w), (l = g)
        }
    }
  }
  if (Xu) throw ((e = Xh), (Xu = !1), (Xh = null), e)
}
function Me(e, t) {
  var n = t[ld]
  n === void 0 && (n = t[ld] = new Set())
  var i = e + '__bubble'
  n.has(i) || (Ty(t, e, 2, !1), n.add(i))
}
function vh(e, t, n) {
  var i = 0
  t && (i |= 4), Ty(n, e, i, t)
}
var Au = '_reactListening' + Math.random().toString(36).slice(2)
function Vs(e) {
  if (!e[Au]) {
    ;(e[Au] = !0),
      N0.forEach(function (n) {
        n !== 'selectionchange' && (ux.has(n) || vh(n, !1, e), vh(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Au] || ((t[Au] = !0), vh('selectionchange', !1, t))
  }
}
function Ty(e, t, n, i) {
  switch (cy(t)) {
    case 1:
      var o = S4
      break
    case 4:
      o = E4
      break
    default:
      o = Yd
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Yh ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    i
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function yh(e, t, n, i, o) {
  var l = i
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return
      var c = i.tag
      if (c === 3 || c === 4) {
        var d = i.stateNode.containerInfo
        if (d === o || (d.nodeType === 8 && d.parentNode === o)) break
        if (c === 4)
          for (c = i.return; c !== null; ) {
            var g = c.tag
            if (
              (g === 3 || g === 4) &&
              ((g = c.stateNode.containerInfo),
              g === o || (g.nodeType === 8 && g.parentNode === o))
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
  J0(function () {
    var w = l,
      P = Kd(n),
      O = []
    e: {
      var k = xy.get(e)
      if (k !== void 0) {
        var V = Zd,
          F = e
        switch (e) {
          case 'keypress':
            if (Bu(n) === 0) break e
          case 'keydown':
          case 'keyup':
            V = F4
            break
          case 'focusin':
            ;(F = 'focus'), (V = fh)
            break
          case 'focusout':
            ;(F = 'blur'), (V = fh)
            break
          case 'beforeblur':
          case 'afterblur':
            V = fh
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
            V = Hm
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            V = T4
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            V = B4
            break
          case _y:
          case ky:
          case Sy:
            V = O4
            break
          case Ey:
            V = H4
            break
          case 'scroll':
            V = x4
            break
          case 'wheel':
            V = q4
            break
          case 'copy':
          case 'cut':
          case 'paste':
            V = L4
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            V = qm
        }
        var W = (t & 4) !== 0,
          J = !W && e === 'scroll',
          L = W ? (k !== null ? k + 'Capture' : null) : k
        W = []
        for (var x = w, I; x !== null; ) {
          I = x
          var B = I.stateNode
          if (
            (I.tag === 5 &&
              B !== null &&
              ((I = B),
              L !== null && ((B = Ds(x, L)), B != null && W.push(Hs(x, B, I)))),
            J)
          )
            break
          x = x.return
        }
        0 < W.length &&
          ((k = new V(k, F, null, n, P)), O.push({ event: k, listeners: W }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((k = e === 'mouseover' || e === 'pointerover'),
          (V = e === 'mouseout' || e === 'pointerout'),
          k &&
            n !== Gh &&
            (F = n.relatedTarget || n.fromElement) &&
            (Gi(F) || F[Tr]))
        )
          break e
        if (
          (V || k) &&
          ((k =
            P.window === P
              ? P
              : (k = P.ownerDocument)
              ? k.defaultView || k.parentWindow
              : window),
          V
            ? ((F = n.relatedTarget || n.toElement),
              (V = w),
              (F = F ? Gi(F) : null),
              F !== null &&
                ((J = sa(F)), F !== J || (F.tag !== 5 && F.tag !== 6)) &&
                (F = null))
            : ((V = null), (F = w)),
          V !== F)
        ) {
          if (
            ((W = Hm),
            (B = 'onMouseLeave'),
            (L = 'onMouseEnter'),
            (x = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((W = qm),
              (B = 'onPointerLeave'),
              (L = 'onPointerEnter'),
              (x = 'pointer')),
            (J = V == null ? k : Wa(V)),
            (I = F == null ? k : Wa(F)),
            (k = new W(B, x + 'leave', V, n, P)),
            (k.target = J),
            (k.relatedTarget = I),
            (B = null),
            Gi(P) === w &&
              ((W = new W(L, x + 'enter', F, n, P)),
              (W.target = I),
              (W.relatedTarget = J),
              (B = W)),
            (J = B),
            V && F)
          )
            t: {
              for (W = V, L = F, x = 0, I = W; I; I = Da(I)) x++
              for (I = 0, B = L; B; B = Da(B)) I++
              for (; 0 < x - I; ) (W = Da(W)), x--
              for (; 0 < I - x; ) (L = Da(L)), I--
              for (; x--; ) {
                if (W === L || (L !== null && W === L.alternate)) break t
                ;(W = Da(W)), (L = Da(L))
              }
              W = null
            }
          else W = null
          V !== null && rv(O, k, V, W, !1),
            F !== null && J !== null && rv(O, J, F, W, !0)
        }
      }
      e: {
        if (
          ((k = w ? Wa(w) : window),
          (V = k.nodeName && k.nodeName.toLowerCase()),
          V === 'select' || (V === 'input' && k.type === 'file'))
        )
          var G = Z4
        else if (Gm(k))
          if (my) G = rx
          else {
            G = tx
            var X = ex
          }
        else
          (V = k.nodeName) &&
            V.toLowerCase() === 'input' &&
            (k.type === 'checkbox' || k.type === 'radio') &&
            (G = nx)
        if (G && (G = G(e, w))) {
          gy(O, G, n, P)
          break e
        }
        X && X(e, k, w),
          e === 'focusout' &&
            (X = k._wrapperState) &&
            X.controlled &&
            k.type === 'number' &&
            Hh(k, 'number', k.value)
      }
      switch (((X = w ? Wa(w) : window), e)) {
        case 'focusin':
          ;(Gm(X) || X.contentEditable === 'true') &&
            ((Va = X), (nd = w), (Ts = null))
          break
        case 'focusout':
          Ts = nd = Va = null
          break
        case 'mousedown':
          rd = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(rd = !1), ev(O, n, P)
          break
        case 'selectionchange':
          if (ox) break
        case 'keydown':
        case 'keyup':
          ev(O, n, P)
      }
      var S
      if (tp)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart'
              break e
            case 'compositionend':
              _ = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              _ = 'onCompositionUpdate'
              break e
          }
          _ = void 0
        }
      else
        Ba
          ? dy(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart')
      _ &&
        (hy &&
          n.locale !== 'ko' &&
          (Ba || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Ba && (S = fy())
            : ((si = P),
              (Xd = 'value' in si ? si.value : si.textContent),
              (Ba = !0))),
        (X = rc(w, _)),
        0 < X.length &&
          ((_ = new Wm(_, e, null, n, P)),
          O.push({ event: _, listeners: X }),
          S ? (_.data = S) : ((S = py(n)), S !== null && (_.data = S)))),
        (S = Q4 ? G4(e, n) : J4(e, n)) &&
          ((w = rc(w, 'onBeforeInput')),
          0 < w.length &&
            ((P = new Wm('onBeforeInput', 'beforeinput', null, n, P)),
            O.push({ event: P, listeners: w }),
            (P.data = S)))
    }
    Cy(O, t)
  })
}
function Hs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function rc(e, t) {
  for (var n = t + 'Capture', i = []; e !== null; ) {
    var o = e,
      l = o.stateNode
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Ds(e, n)),
      l != null && i.unshift(Hs(e, l, o)),
      (l = Ds(e, t)),
      l != null && i.push(Hs(e, l, o))),
      (e = e.return)
  }
  return i
}
function Da(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function rv(e, t, n, i, o) {
  for (var l = t._reactName, c = []; n !== null && n !== i; ) {
    var d = n,
      g = d.alternate,
      w = d.stateNode
    if (g !== null && g === i) break
    d.tag === 5 &&
      w !== null &&
      ((d = w),
      o
        ? ((g = Ds(n, l)), g != null && c.unshift(Hs(n, g, d)))
        : o || ((g = Ds(n, l)), g != null && c.push(Hs(n, g, d)))),
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
function Pu(e, t, n) {
  if (((t = iv(t)), iv(e) !== t && n)) throw Error(Y(425))
}
function ic() {}
var id = null,
  ad = null
function od(e, t) {
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
  av = typeof Promise == 'function' ? Promise : void 0,
  dx =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof av < 'u'
      ? function (e) {
          return av.resolve(null).then(e).catch(px)
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
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (i === 0) {
          e.removeChild(o), Us(t)
          return
        }
        i--
      } else (n !== '$' && n !== '$?' && n !== '$!') || i++
    n = o
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
function ov(e) {
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
var mo = Math.random().toString(36).slice(2),
  nr = '__reactFiber$' + mo,
  Ws = '__reactProps$' + mo,
  Tr = '__reactContainer$' + mo,
  ld = '__reactEvents$' + mo,
  gx = '__reactListeners$' + mo,
  mx = '__reactHandles$' + mo
function Gi(e) {
  var t = e[nr]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tr] || n[nr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ov(e); e !== null; ) {
          if ((n = e[nr])) return n
          e = ov(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function il(e) {
  return (
    (e = e[nr] || e[Tr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Wa(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(Y(33))
}
function jc(e) {
  return e[Ws] || null
}
var ud = [],
  qa = -1
function ki(e) {
  return { current: e }
}
function Fe(e) {
  0 > qa || ((e.current = ud[qa]), (ud[qa] = null), qa--)
}
function De(e, t) {
  qa++, (ud[qa] = e.current), (e.current = t)
}
var wi = {},
  Pt = ki(wi),
  Zt = ki(!1),
  ta = wi
function oo(e, t) {
  var n = e.type.contextTypes
  if (!n) return wi
  var i = e.stateNode
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext
  var o = {},
    l
  for (l in n) o[l] = t[l]
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function en(e) {
  return (e = e.childContextTypes), e != null
}
function ac() {
  Fe(Zt), Fe(Pt)
}
function sv(e, t, n) {
  if (Pt.current !== wi) throw Error(Y(168))
  De(Pt, t), De(Zt, n)
}
function Ay(e, t, n) {
  var i = e.stateNode
  if (((t = t.childContextTypes), typeof i.getChildContext != 'function'))
    return n
  i = i.getChildContext()
  for (var o in i) if (!(o in t)) throw Error(Y(108, e4(e) || 'Unknown', o))
  return We({}, n, i)
}
function oc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wi),
    (ta = Pt.current),
    De(Pt, e),
    De(Zt, Zt.current),
    !0
  )
}
function lv(e, t, n) {
  var i = e.stateNode
  if (!i) throw Error(Y(169))
  n
    ? ((e = Ay(e, t, ta)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      Fe(Zt),
      Fe(Pt),
      De(Pt, e))
    : Fe(Zt),
    De(Zt, n)
}
var kr = null,
  zc = !1,
  wh = !1
function Py(e) {
  kr === null ? (kr = [e]) : kr.push(e)
}
function vx(e) {
  ;(zc = !0), Py(e)
}
function Si() {
  if (!wh && kr !== null) {
    wh = !0
    var e = 0,
      t = Le
    try {
      var n = kr
      for (Le = 1; e < n.length; e++) {
        var i = n[e]
        do i = i(!0)
        while (i !== null)
      }
      ;(kr = null), (zc = !1)
    } catch (o) {
      throw (kr !== null && (kr = kr.slice(e + 1)), ey(Qd, Si), o)
    } finally {
      ;(Le = t), (wh = !1)
    }
  }
  return null
}
var Ka = [],
  Qa = 0,
  sc = null,
  lc = 0,
  kn = [],
  Sn = 0,
  na = null,
  Sr = 1,
  Er = ''
function qi(e, t) {
  ;(Ka[Qa++] = lc), (Ka[Qa++] = sc), (sc = e), (lc = t)
}
function Oy(e, t, n) {
  ;(kn[Sn++] = Sr), (kn[Sn++] = Er), (kn[Sn++] = na), (na = e)
  var i = Sr
  e = Er
  var o = 32 - Vn(i) - 1
  ;(i &= ~(1 << o)), (n += 1)
  var l = 32 - Vn(t) + o
  if (30 < l) {
    var c = o - (o % 5)
    ;(l = (i & ((1 << c) - 1)).toString(32)),
      (i >>= c),
      (o -= c),
      (Sr = (1 << (32 - Vn(t) + o)) | (n << o) | i),
      (Er = l + e)
  } else (Sr = (1 << l) | (n << o) | i), (Er = e)
}
function rp(e) {
  e.return !== null && (qi(e, 1), Oy(e, 1, 0))
}
function ip(e) {
  for (; e === sc; )
    (sc = Ka[--Qa]), (Ka[Qa] = null), (lc = Ka[--Qa]), (Ka[Qa] = null)
  for (; e === na; )
    (na = kn[--Sn]),
      (kn[Sn] = null),
      (Er = kn[--Sn]),
      (kn[Sn] = null),
      (Sr = kn[--Sn]),
      (kn[Sn] = null)
}
var cn = null,
  un = null,
  Ue = !1,
  $n = null
function Ry(e, t) {
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
          ? ((n = na !== null ? { id: Sr, overflow: Er } : null),
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
        if (cd(e)) throw Error(Y(418))
        t = hi(n.nextSibling)
        var i = cn
        t && uv(e, t)
          ? Ry(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ue = !1), (cn = e))
      }
    } else {
      if (cd(e)) throw Error(Y(418))
      ;(e.flags = (e.flags & -4097) | 2), (Ue = !1), (cn = e)
    }
  }
}
function cv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  cn = e
}
function Ou(e) {
  if (e !== cn) return !1
  if (!Ue) return cv(e), (Ue = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !od(e.type, e.memoizedProps))),
    t && (t = un))
  ) {
    if (cd(e)) throw (Ly(), Error(Y(418)))
    for (; t; ) Ry(e, t), (t = hi(t.nextSibling))
  }
  if ((cv(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Y(317))
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
function Ly() {
  for (var e = un; e; ) e = hi(e.nextSibling)
}
function so() {
  ;(un = cn = null), (Ue = !1)
}
function ap(e) {
  $n === null ? ($n = [e]) : $n.push(e)
}
var yx = Rr.ReactCurrentBatchConfig
function Fn(e, t) {
  if (e && e.defaultProps) {
    ;(t = We({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var uc = ki(null),
  cc = null,
  Ga = null,
  op = null
function sp() {
  op = Ga = cc = null
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
function no(e, t) {
  ;(cc = e),
    (op = Ga = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xt = !0), (e.firstContext = null))
}
function Cn(e) {
  var t = e._currentValue
  if (op !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ga === null)) {
      if (cc === null) throw Error(Y(308))
      ;(Ga = e), (cc.dependencies = { lanes: 0, firstContext: e })
    } else Ga = Ga.next = e
  return t
}
var Ji = null
function up(e) {
  Ji === null ? (Ji = [e]) : Ji.push(e)
}
function Iy(e, t, n, i) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), up(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ar(e, i)
  )
}
function Ar(e, t) {
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
function Ny(e, t) {
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
    var o = i.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (i.pending = t),
      Ar(e, n)
    )
  }
  return (
    (o = i.interleaved),
    o === null ? ((t.next = t), up(i)) : ((t.next = o.next), (o.next = t)),
    (i.interleaved = t),
    Ar(e, n)
  )
}
function Vu(e, t, n) {
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
    var o = null,
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
        l === null ? (o = l = c) : (l = l.next = c), (n = n.next)
      } while (n !== null)
      l === null ? (o = l = t) : (l = l.next = t)
    } else o = l = t
    ;(n = {
      baseState: i.baseState,
      firstBaseUpdate: o,
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
  var o = e.updateQueue
  ri = !1
  var l = o.firstBaseUpdate,
    c = o.lastBaseUpdate,
    d = o.shared.pending
  if (d !== null) {
    o.shared.pending = null
    var g = d,
      w = g.next
    ;(g.next = null), c === null ? (l = w) : (c.next = w), (c = g)
    var P = e.alternate
    P !== null &&
      ((P = P.updateQueue),
      (d = P.lastBaseUpdate),
      d !== c &&
        (d === null ? (P.firstBaseUpdate = w) : (d.next = w),
        (P.lastBaseUpdate = g)))
  }
  if (l !== null) {
    var O = o.baseState
    ;(c = 0), (P = w = g = null), (d = l)
    do {
      var k = d.lane,
        V = d.eventTime
      if ((i & k) === k) {
        P !== null &&
          (P = P.next =
            {
              eventTime: V,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            })
        e: {
          var F = e,
            W = d
          switch (((k = t), (V = n), W.tag)) {
            case 1:
              if (((F = W.payload), typeof F == 'function')) {
                O = F.call(V, O, k)
                break e
              }
              O = F
              break e
            case 3:
              F.flags = (F.flags & -65537) | 128
            case 0:
              if (
                ((F = W.payload),
                (k = typeof F == 'function' ? F.call(V, O, k) : F),
                k == null)
              )
                break e
              O = We({}, O, k)
              break e
            case 2:
              ri = !0
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((e.flags |= 64),
          (k = o.effects),
          k === null ? (o.effects = [d]) : k.push(d))
      } else
        (V = {
          eventTime: V,
          lane: k,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          P === null ? ((w = P = V), (g = O)) : (P = P.next = V),
          (c |= k)
      if (((d = d.next), d === null)) {
        if (((d = o.shared.pending), d === null)) break
        ;(k = d),
          (d = k.next),
          (k.next = null),
          (o.lastBaseUpdate = k),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (P === null && (g = O),
      (o.baseState = g),
      (o.firstBaseUpdate = w),
      (o.lastBaseUpdate = P),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (c |= o.lane), (o = o.next)
      while (o !== t)
    } else l === null && (o.shared.lanes = 0)
    ;(ia |= c), (e.lanes = c), (e.memoizedState = O)
  }
}
function hv(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        o = i.callback
      if (o !== null) {
        if (((i.callback = null), (i = n), typeof o != 'function'))
          throw Error(Y(191, o))
        o.call(i)
      }
    }
}
var jy = new I0.Component().refs
function dd(e, t, n, i) {
  ;(t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : We({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Dc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sa(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var i = Mt(),
      o = gi(e),
      l = xr(i, o)
    ;(l.payload = t),
      n != null && (l.callback = n),
      (t = di(e, l, o)),
      t !== null && (Hn(t, e, o, i), Vu(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var i = Mt(),
      o = gi(e),
      l = xr(i, o)
    ;(l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = di(e, l, o)),
      t !== null && (Hn(t, e, o, i), Vu(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Mt(),
      i = gi(e),
      o = xr(n, i)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = di(e, o, i)),
      t !== null && (Hn(t, e, i, n), Vu(t, e, i))
  },
}
function dv(e, t, n, i, o, l, c) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(i, l, c)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bs(n, i) || !Bs(o, l)
      : !0
  )
}
function zy(e, t, n) {
  var i = !1,
    o = wi,
    l = t.contextType
  return (
    typeof l == 'object' && l !== null
      ? (l = Cn(l))
      : ((o = en(t) ? ta : Pt.current),
        (i = t.contextTypes),
        (l = (i = i != null) ? oo(e, o) : wi)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Dc),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
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
    t.state !== e && Dc.enqueueReplaceState(t, t.state, null)
}
function pd(e, t, n, i) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = jy), cp(e)
  var l = t.contextType
  typeof l == 'object' && l !== null
    ? (o.context = Cn(l))
    : ((l = en(t) ? ta : Pt.current), (o.context = oo(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (dd(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Dc.enqueueReplaceState(o, o.state, null),
      fc(e, n, o, i),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function gs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(Y(309))
        var i = n.stateNode
      }
      if (!i) throw Error(Y(147, e))
      var o = i,
        l = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (c) {
            var d = o.refs
            d === jy && (d = o.refs = {}), c === null ? delete d[l] : (d[l] = c)
          }),
          (t._stringRef = l),
          t)
    }
    if (typeof e != 'string') throw Error(Y(284))
    if (!n._owner) throw Error(Y(290, e))
  }
  return e
}
function Ru(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Y(
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
function Dy(e) {
  function t(L, x) {
    if (e) {
      var I = L.deletions
      I === null ? ((L.deletions = [x]), (L.flags |= 16)) : I.push(x)
    }
  }
  function n(L, x) {
    if (!e) return null
    for (; x !== null; ) t(L, x), (x = x.sibling)
    return null
  }
  function i(L, x) {
    for (L = new Map(); x !== null; )
      x.key !== null ? L.set(x.key, x) : L.set(x.index, x), (x = x.sibling)
    return L
  }
  function o(L, x) {
    return (L = mi(L, x)), (L.index = 0), (L.sibling = null), L
  }
  function l(L, x, I) {
    return (
      (L.index = I),
      e
        ? ((I = L.alternate),
          I !== null
            ? ((I = I.index), I < x ? ((L.flags |= 2), x) : I)
            : ((L.flags |= 2), x))
        : ((L.flags |= 1048576), x)
    )
  }
  function c(L) {
    return e && L.alternate === null && (L.flags |= 2), L
  }
  function d(L, x, I, B) {
    return x === null || x.tag !== 6
      ? ((x = Th(I, L.mode, B)), (x.return = L), x)
      : ((x = o(x, I)), (x.return = L), x)
  }
  function g(L, x, I, B) {
    var G = I.type
    return G === $a
      ? P(L, x, I.props.children, B, I.key)
      : x !== null &&
        (x.elementType === G ||
          (typeof G == 'object' &&
            G !== null &&
            G.$$typeof === ni &&
            gv(G) === x.type))
      ? ((B = o(x, I.props)), (B.ref = gs(L, x, I)), (B.return = L), B)
      : ((B = Gu(I.type, I.key, I.props, null, L.mode, B)),
        (B.ref = gs(L, x, I)),
        (B.return = L),
        B)
  }
  function w(L, x, I, B) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== I.containerInfo ||
      x.stateNode.implementation !== I.implementation
      ? ((x = Ah(I, L.mode, B)), (x.return = L), x)
      : ((x = o(x, I.children || [])), (x.return = L), x)
  }
  function P(L, x, I, B, G) {
    return x === null || x.tag !== 7
      ? ((x = ea(I, L.mode, B, G)), (x.return = L), x)
      : ((x = o(x, I)), (x.return = L), x)
  }
  function O(L, x, I) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (x = Th('' + x, L.mode, I)), (x.return = L), x
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case wu:
          return (
            (I = Gu(x.type, x.key, x.props, null, L.mode, I)),
            (I.ref = gs(L, null, x)),
            (I.return = L),
            I
          )
        case Ua:
          return (x = Ah(x, L.mode, I)), (x.return = L), x
        case ni:
          var B = x._init
          return O(L, B(x._payload), I)
      }
      if (ws(x) || cs(x)) return (x = ea(x, L.mode, I, null)), (x.return = L), x
      Ru(L, x)
    }
    return null
  }
  function k(L, x, I, B) {
    var G = x !== null ? x.key : null
    if ((typeof I == 'string' && I !== '') || typeof I == 'number')
      return G !== null ? null : d(L, x, '' + I, B)
    if (typeof I == 'object' && I !== null) {
      switch (I.$$typeof) {
        case wu:
          return I.key === G ? g(L, x, I, B) : null
        case Ua:
          return I.key === G ? w(L, x, I, B) : null
        case ni:
          return (G = I._init), k(L, x, G(I._payload), B)
      }
      if (ws(I) || cs(I)) return G !== null ? null : P(L, x, I, B, null)
      Ru(L, I)
    }
    return null
  }
  function V(L, x, I, B, G) {
    if ((typeof B == 'string' && B !== '') || typeof B == 'number')
      return (L = L.get(I) || null), d(x, L, '' + B, G)
    if (typeof B == 'object' && B !== null) {
      switch (B.$$typeof) {
        case wu:
          return (L = L.get(B.key === null ? I : B.key) || null), g(x, L, B, G)
        case Ua:
          return (L = L.get(B.key === null ? I : B.key) || null), w(x, L, B, G)
        case ni:
          var X = B._init
          return V(L, x, I, X(B._payload), G)
      }
      if (ws(B) || cs(B)) return (L = L.get(I) || null), P(x, L, B, G, null)
      Ru(x, B)
    }
    return null
  }
  function F(L, x, I, B) {
    for (
      var G = null, X = null, S = x, _ = (x = 0), C = null;
      S !== null && _ < I.length;
      _++
    ) {
      S.index > _ ? ((C = S), (S = null)) : (C = S.sibling)
      var A = k(L, S, I[_], B)
      if (A === null) {
        S === null && (S = C)
        break
      }
      e && S && A.alternate === null && t(L, S),
        (x = l(A, x, _)),
        X === null ? (G = A) : (X.sibling = A),
        (X = A),
        (S = C)
    }
    if (_ === I.length) return n(L, S), Ue && qi(L, _), G
    if (S === null) {
      for (; _ < I.length; _++)
        (S = O(L, I[_], B)),
          S !== null &&
            ((x = l(S, x, _)), X === null ? (G = S) : (X.sibling = S), (X = S))
      return Ue && qi(L, _), G
    }
    for (S = i(L, S); _ < I.length; _++)
      (C = V(S, L, _, I[_], B)),
        C !== null &&
          (e && C.alternate !== null && S.delete(C.key === null ? _ : C.key),
          (x = l(C, x, _)),
          X === null ? (G = C) : (X.sibling = C),
          (X = C))
    return (
      e &&
        S.forEach(function (N) {
          return t(L, N)
        }),
      Ue && qi(L, _),
      G
    )
  }
  function W(L, x, I, B) {
    var G = cs(I)
    if (typeof G != 'function') throw Error(Y(150))
    if (((I = G.call(I)), I == null)) throw Error(Y(151))
    for (
      var X = (G = null), S = x, _ = (x = 0), C = null, A = I.next();
      S !== null && !A.done;
      _++, A = I.next()
    ) {
      S.index > _ ? ((C = S), (S = null)) : (C = S.sibling)
      var N = k(L, S, A.value, B)
      if (N === null) {
        S === null && (S = C)
        break
      }
      e && S && N.alternate === null && t(L, S),
        (x = l(N, x, _)),
        X === null ? (G = N) : (X.sibling = N),
        (X = N),
        (S = C)
    }
    if (A.done) return n(L, S), Ue && qi(L, _), G
    if (S === null) {
      for (; !A.done; _++, A = I.next())
        (A = O(L, A.value, B)),
          A !== null &&
            ((x = l(A, x, _)), X === null ? (G = A) : (X.sibling = A), (X = A))
      return Ue && qi(L, _), G
    }
    for (S = i(L, S); !A.done; _++, A = I.next())
      (A = V(S, L, _, A.value, B)),
        A !== null &&
          (e && A.alternate !== null && S.delete(A.key === null ? _ : A.key),
          (x = l(A, x, _)),
          X === null ? (G = A) : (X.sibling = A),
          (X = A))
    return (
      e &&
        S.forEach(function (M) {
          return t(L, M)
        }),
      Ue && qi(L, _),
      G
    )
  }
  function J(L, x, I, B) {
    if (
      (typeof I == 'object' &&
        I !== null &&
        I.type === $a &&
        I.key === null &&
        (I = I.props.children),
      typeof I == 'object' && I !== null)
    ) {
      switch (I.$$typeof) {
        case wu:
          e: {
            for (var G = I.key, X = x; X !== null; ) {
              if (X.key === G) {
                if (((G = I.type), G === $a)) {
                  if (X.tag === 7) {
                    n(L, X.sibling),
                      (x = o(X, I.props.children)),
                      (x.return = L),
                      (L = x)
                    break e
                  }
                } else if (
                  X.elementType === G ||
                  (typeof G == 'object' &&
                    G !== null &&
                    G.$$typeof === ni &&
                    gv(G) === X.type)
                ) {
                  n(L, X.sibling),
                    (x = o(X, I.props)),
                    (x.ref = gs(L, X, I)),
                    (x.return = L),
                    (L = x)
                  break e
                }
                n(L, X)
                break
              } else t(L, X)
              X = X.sibling
            }
            I.type === $a
              ? ((x = ea(I.props.children, L.mode, B, I.key)),
                (x.return = L),
                (L = x))
              : ((B = Gu(I.type, I.key, I.props, null, L.mode, B)),
                (B.ref = gs(L, x, I)),
                (B.return = L),
                (L = B))
          }
          return c(L)
        case Ua:
          e: {
            for (X = I.key; x !== null; ) {
              if (x.key === X)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === I.containerInfo &&
                  x.stateNode.implementation === I.implementation
                ) {
                  n(L, x.sibling),
                    (x = o(x, I.children || [])),
                    (x.return = L),
                    (L = x)
                  break e
                } else {
                  n(L, x)
                  break
                }
              else t(L, x)
              x = x.sibling
            }
            ;(x = Ah(I, L.mode, B)), (x.return = L), (L = x)
          }
          return c(L)
        case ni:
          return (X = I._init), J(L, x, X(I._payload), B)
      }
      if (ws(I)) return F(L, x, I, B)
      if (cs(I)) return W(L, x, I, B)
      Ru(L, I)
    }
    return (typeof I == 'string' && I !== '') || typeof I == 'number'
      ? ((I = '' + I),
        x !== null && x.tag === 6
          ? (n(L, x.sibling), (x = o(x, I)), (x.return = L), (L = x))
          : (n(L, x), (x = Th(I, L.mode, B)), (x.return = L), (L = x)),
        c(L))
      : n(L, x)
  }
  return J
}
var lo = Dy(!0),
  My = Dy(!1),
  al = {},
  ar = ki(al),
  qs = ki(al),
  Ks = ki(al)
function Yi(e) {
  if (e === al) throw Error(Y(174))
  return e
}
function fp(e, t) {
  switch ((De(Ks, t), De(qs, e), De(ar, al), (e = t.nodeType), e)) {
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
  Fe(ar), De(ar, t)
}
function uo() {
  Fe(ar), Fe(qs), Fe(Ks)
}
function Fy(e) {
  Yi(Ks.current)
  var t = Yi(ar.current),
    n = qh(t, e.type)
  t !== n && (De(qs, e), De(ar, n))
}
function hp(e) {
  qs.current === e && (Fe(ar), Fe(qs))
}
var Ve = ki(0)
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
var _h = []
function dp() {
  for (var e = 0; e < _h.length; e++) _h[e]._workInProgressVersionPrimary = null
  _h.length = 0
}
var Hu = Rr.ReactCurrentDispatcher,
  kh = Rr.ReactCurrentBatchConfig,
  ra = 0,
  He = null,
  ot = null,
  ft = null,
  dc = !1,
  As = !1,
  Qs = 0,
  bx = 0
function xt() {
  throw Error(Y(321))
}
function pp(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wn(e[n], t[n])) return !1
  return !0
}
function gp(e, t, n, i, o, l) {
  if (
    ((ra = l),
    (He = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hu.current = e === null || e.memoizedState === null ? Sx : Ex),
    (e = n(i, o)),
    As)
  ) {
    l = 0
    do {
      if (((As = !1), (Qs = 0), 25 <= l)) throw Error(Y(301))
      ;(l += 1),
        (ft = ot = null),
        (t.updateQueue = null),
        (Hu.current = xx),
        (e = n(i, o))
    } while (As)
  }
  if (
    ((Hu.current = pc),
    (t = ot !== null && ot.next !== null),
    (ra = 0),
    (ft = ot = He = null),
    (dc = !1),
    t)
  )
    throw Error(Y(300))
  return e
}
function mp() {
  var e = Qs !== 0
  return (Qs = 0), e
}
function tr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ft === null ? (He.memoizedState = ft = e) : (ft = ft.next = e), ft
}
function Tn() {
  if (ot === null) {
    var e = He.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ot.next
  var t = ft === null ? He.memoizedState : ft.next
  if (t !== null) (ft = t), (ot = e)
  else {
    if (e === null) throw Error(Y(310))
    ;(ot = e),
      (e = {
        memoizedState: ot.memoizedState,
        baseState: ot.baseState,
        baseQueue: ot.baseQueue,
        queue: ot.queue,
        next: null,
      }),
      ft === null ? (He.memoizedState = ft = e) : (ft = ft.next = e)
  }
  return ft
}
function Gs(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Sh(e) {
  var t = Tn(),
    n = t.queue
  if (n === null) throw Error(Y(311))
  n.lastRenderedReducer = e
  var i = ot,
    o = i.baseQueue,
    l = n.pending
  if (l !== null) {
    if (o !== null) {
      var c = o.next
      ;(o.next = l.next), (l.next = c)
    }
    ;(i.baseQueue = o = l), (n.pending = null)
  }
  if (o !== null) {
    ;(l = o.next), (i = i.baseState)
    var d = (c = null),
      g = null,
      w = l
    do {
      var P = w.lane
      if ((ra & P) === P)
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
        var O = {
          lane: P,
          action: w.action,
          hasEagerState: w.hasEagerState,
          eagerState: w.eagerState,
          next: null,
        }
        g === null ? ((d = g = O), (c = i)) : (g = g.next = O),
          (He.lanes |= P),
          (ia |= P)
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
    o = e
    do (l = o.lane), (He.lanes |= l), (ia |= l), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Eh(e) {
  var t = Tn(),
    n = t.queue
  if (n === null) throw Error(Y(311))
  n.lastRenderedReducer = e
  var i = n.dispatch,
    o = n.pending,
    l = t.memoizedState
  if (o !== null) {
    n.pending = null
    var c = (o = o.next)
    do (l = e(l, c.action)), (c = c.next)
    while (c !== o)
    Wn(l, t.memoizedState) || (Xt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l)
  }
  return [l, i]
}
function Uy() {}
function $y(e, t) {
  var n = He,
    i = Tn(),
    o = t(),
    l = !Wn(i.memoizedState, o)
  if (
    (l && ((i.memoizedState = o), (Xt = !0)),
    (i = i.queue),
    vp(Hy.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || l || (ft !== null && ft.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Js(9, Vy.bind(null, n, i, o, t), void 0, null),
      ht === null)
    )
      throw Error(Y(349))
    ra & 30 || By(n, t, o)
  }
  return o
}
function By(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Vy(e, t, n, i) {
  ;(t.value = n), (t.getSnapshot = i), Wy(t) && qy(e)
}
function Hy(e, t, n) {
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
  var t = Ar(e, 1)
  t !== null && Hn(t, e, 1, -1)
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
    (e = e.dispatch = kx.bind(null, He, e)),
    [t.memoizedState, e]
  )
}
function Js(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  )
}
function Ky() {
  return Tn().memoizedState
}
function Wu(e, t, n, i) {
  var o = tr()
  ;(He.flags |= e),
    (o.memoizedState = Js(1 | t, n, void 0, i === void 0 ? null : i))
}
function Mc(e, t, n, i) {
  var o = Tn()
  i = i === void 0 ? null : i
  var l = void 0
  if (ot !== null) {
    var c = ot.memoizedState
    if (((l = c.destroy), i !== null && pp(i, c.deps))) {
      o.memoizedState = Js(t, n, l, i)
      return
    }
  }
  ;(He.flags |= e), (o.memoizedState = Js(1 | t, n, l, i))
}
function vv(e, t) {
  return Wu(8390656, 8, e, t)
}
function vp(e, t) {
  return Mc(2048, 8, e, t)
}
function Qy(e, t) {
  return Mc(4, 2, e, t)
}
function Gy(e, t) {
  return Mc(4, 4, e, t)
}
function Jy(e, t) {
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
function Yy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mc(4, 4, Jy.bind(null, t, e), n)
  )
}
function yp() {}
function Xy(e, t) {
  var n = Tn()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && pp(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e)
}
function Zy(e, t) {
  var n = Tn()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && pp(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function e1(e, t, n) {
  return ra & 21
    ? (Wn(n, t) || ((n = ry()), (He.lanes |= n), (ia |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xt = !0)), (e.memoizedState = n))
}
function wx(e, t) {
  var n = Le
  ;(Le = n !== 0 && 4 > n ? n : 4), e(!0)
  var i = kh.transition
  kh.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Le = n), (kh.transition = i)
  }
}
function t1() {
  return Tn().memoizedState
}
function _x(e, t, n) {
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
  else if (((n = Iy(e, t, n, i)), n !== null)) {
    var o = Mt()
    Hn(n, e, i, o), i1(n, t, i)
  }
}
function kx(e, t, n) {
  var i = gi(e),
    o = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (n1(e)) r1(t, o)
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
        if (((o.hasEagerState = !0), (o.eagerState = d), Wn(d, c))) {
          var g = t.interleaved
          g === null
            ? ((o.next = o), up(t))
            : ((o.next = g.next), (g.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Iy(e, t, o, i)),
      n !== null && ((o = Mt()), Hn(n, e, i, o), i1(n, t, i))
  }
}
function n1(e) {
  var t = e.alternate
  return e === He || (t !== null && t === He)
}
function r1(e, t) {
  As = dc = !0
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
    readContext: Cn,
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
    readContext: Cn,
    useCallback: function (e, t) {
      return (tr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Cn,
    useEffect: vv,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wu(4194308, 4, Jy.bind(null, t, e), n)
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
        (e = e.dispatch = _x.bind(null, He, e)),
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
      var i = He,
        o = tr()
      if (Ue) {
        if (n === void 0) throw Error(Y(407))
        n = n()
      } else {
        if (((n = t()), ht === null)) throw Error(Y(349))
        ra & 30 || By(i, t, n)
      }
      o.memoizedState = n
      var l = { value: n, getSnapshot: t }
      return (
        (o.queue = l),
        vv(Hy.bind(null, i, l, e), [e]),
        (i.flags |= 2048),
        Js(9, Vy.bind(null, i, l, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = tr(),
        t = ht.identifierPrefix
      if (Ue) {
        var n = Er,
          i = Sr
        ;(n = (i & ~(1 << (32 - Vn(i) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Qs++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = bx++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Ex = {
    readContext: Cn,
    useCallback: Xy,
    useContext: Cn,
    useEffect: vp,
    useImperativeHandle: Yy,
    useInsertionEffect: Qy,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Sh,
    useRef: Ky,
    useState: function () {
      return Sh(Gs)
    },
    useDebugValue: yp,
    useDeferredValue: function (e) {
      var t = Tn()
      return e1(t, ot.memoizedState, e)
    },
    useTransition: function () {
      var e = Sh(Gs)[0],
        t = Tn().memoizedState
      return [e, t]
    },
    useMutableSource: Uy,
    useSyncExternalStore: $y,
    useId: t1,
    unstable_isNewReconciler: !1,
  },
  xx = {
    readContext: Cn,
    useCallback: Xy,
    useContext: Cn,
    useEffect: vp,
    useImperativeHandle: Yy,
    useInsertionEffect: Qy,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Eh,
    useRef: Ky,
    useState: function () {
      return Eh(Gs)
    },
    useDebugValue: yp,
    useDeferredValue: function (e) {
      var t = Tn()
      return ot === null ? (t.memoizedState = e) : e1(t, ot.memoizedState, e)
    },
    useTransition: function () {
      var e = Eh(Gs)[0],
        t = Tn().memoizedState
      return [e, t]
    },
    useMutableSource: Uy,
    useSyncExternalStore: $y,
    useId: t1,
    unstable_isNewReconciler: !1,
  }
function co(e, t) {
  try {
    var n = '',
      i = t
    do (n += ZE(i)), (i = i.return)
    while (i)
    var o = n
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack
  }
  return { value: e, source: t, stack: o, digest: null }
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
var Cx = typeof WeakMap == 'function' ? WeakMap : Map
function a1(e, t, n) {
  ;(n = xr(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var i = t.value
  return (
    (n.callback = function () {
      mc || ((mc = !0), (Ed = i)), gd(e, t)
    }),
    n
  )
}
function o1(e, t, n) {
  ;(n = xr(-1, n)), (n.tag = 3)
  var i = e.type.getDerivedStateFromError
  if (typeof i == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return i(o)
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
    i = e.pingCache = new Cx()
    var o = new Set()
    i.set(t, o)
  } else (o = i.get(t)), o === void 0 && ((o = new Set()), i.set(t, o))
  o.has(n) || (o.add(n), (e = Ux.bind(null, e, t, n)), t.then(e, e))
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
function wv(e, t, n, i, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
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
var Tx = Rr.ReactCurrentOwner,
  Xt = !1
function zt(e, t, n, i) {
  t.child = e === null ? My(t, null, n, i) : lo(t, e.child, n, i)
}
function _v(e, t, n, i, o) {
  n = n.render
  var l = t.ref
  return (
    no(t, o),
    (i = gp(e, t, n, i, l, o)),
    (n = mp()),
    e !== null && !Xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Pr(e, t, o))
      : (Ue && n && rp(t), (t.flags |= 1), zt(e, t, i, o), t.child)
  )
}
function kv(e, t, n, i, o) {
  if (e === null) {
    var l = n.type
    return typeof l == 'function' &&
      !Cp(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), s1(e, t, l, i, o))
      : ((e = Gu(n.type, null, i, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((l = e.child), !(e.lanes & o))) {
    var c = l.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Bs), n(c, i) && e.ref === t.ref)
    )
      return Pr(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = mi(l, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function s1(e, t, n, i, o) {
  if (e !== null) {
    var l = e.memoizedProps
    if (Bs(l, i) && e.ref === t.ref)
      if (((Xt = !1), (t.pendingProps = i = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Xt = !0)
      else return (t.lanes = e.lanes), Pr(e, t, o)
  }
  return md(e, t, n, i, o)
}
function l1(e, t, n) {
  var i = t.pendingProps,
    o = i.children,
    l = e !== null ? e.memoizedState : null
  if (i.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        De(Ya, ln),
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
          De(Ya, ln),
          (ln |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = l !== null ? l.baseLanes : n),
        De(Ya, ln),
        (ln |= i)
    }
  else
    l !== null ? ((i = l.baseLanes | n), (t.memoizedState = null)) : (i = n),
      De(Ya, ln),
      (ln |= i)
  return zt(e, t, o, n), t.child
}
function u1(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function md(e, t, n, i, o) {
  var l = en(n) ? ta : Pt.current
  return (
    (l = oo(t, l)),
    no(t, o),
    (n = gp(e, t, n, i, l, o)),
    (i = mp()),
    e !== null && !Xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Pr(e, t, o))
      : (Ue && i && rp(t), (t.flags |= 1), zt(e, t, n, o), t.child)
  )
}
function Sv(e, t, n, i, o) {
  if (en(n)) {
    var l = !0
    oc(t)
  } else l = !1
  if ((no(t, o), t.stateNode === null))
    qu(e, t), zy(t, n, i), pd(t, n, i, o), (i = !0)
  else if (e === null) {
    var c = t.stateNode,
      d = t.memoizedProps
    c.props = d
    var g = c.context,
      w = n.contextType
    typeof w == 'object' && w !== null
      ? (w = Cn(w))
      : ((w = en(n) ? ta : Pt.current), (w = oo(t, w)))
    var P = n.getDerivedStateFromProps,
      O =
        typeof P == 'function' || typeof c.getSnapshotBeforeUpdate == 'function'
    O ||
      (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof c.componentWillReceiveProps != 'function') ||
      ((d !== i || g !== w) && pv(t, c, i, w)),
      (ri = !1)
    var k = t.memoizedState
    ;(c.state = k),
      fc(t, i, c, o),
      (g = t.memoizedState),
      d !== i || k !== g || Zt.current || ri
        ? (typeof P == 'function' && (dd(t, n, P, i), (g = t.memoizedState)),
          (d = ri || dv(t, n, d, i, k, g, w))
            ? (O ||
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
      Ny(e, t),
      (d = t.memoizedProps),
      (w = t.type === t.elementType ? d : Fn(t.type, d)),
      (c.props = w),
      (O = t.pendingProps),
      (k = c.context),
      (g = n.contextType),
      typeof g == 'object' && g !== null
        ? (g = Cn(g))
        : ((g = en(n) ? ta : Pt.current), (g = oo(t, g)))
    var V = n.getDerivedStateFromProps
    ;(P =
      typeof V == 'function' ||
      typeof c.getSnapshotBeforeUpdate == 'function') ||
      (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof c.componentWillReceiveProps != 'function') ||
      ((d !== O || k !== g) && pv(t, c, i, g)),
      (ri = !1),
      (k = t.memoizedState),
      (c.state = k),
      fc(t, i, c, o)
    var F = t.memoizedState
    d !== O || k !== F || Zt.current || ri
      ? (typeof V == 'function' && (dd(t, n, V, i), (F = t.memoizedState)),
        (w = ri || dv(t, n, w, i, k, F, g) || !1)
          ? (P ||
              (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                typeof c.componentWillUpdate != 'function') ||
              (typeof c.componentWillUpdate == 'function' &&
                c.componentWillUpdate(i, F, g),
              typeof c.UNSAFE_componentWillUpdate == 'function' &&
                c.UNSAFE_componentWillUpdate(i, F, g)),
            typeof c.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof c.componentDidUpdate != 'function' ||
              (d === e.memoizedProps && k === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != 'function' ||
              (d === e.memoizedProps && k === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = F)),
        (c.props = i),
        (c.state = F),
        (c.context = g),
        (i = w))
      : (typeof c.componentDidUpdate != 'function' ||
          (d === e.memoizedProps && k === e.memoizedState) ||
          (t.flags |= 4),
        typeof c.getSnapshotBeforeUpdate != 'function' ||
          (d === e.memoizedProps && k === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1))
  }
  return vd(e, t, n, i, l, o)
}
function vd(e, t, n, i, o, l) {
  u1(e, t)
  var c = (t.flags & 128) !== 0
  if (!i && !c) return o && lv(t, n, !1), Pr(e, t, l)
  ;(i = t.stateNode), (Tx.current = t)
  var d =
    c && typeof n.getDerivedStateFromError != 'function' ? null : i.render()
  return (
    (t.flags |= 1),
    e !== null && c
      ? ((t.child = lo(t, e.child, null, l)), (t.child = lo(t, null, d, l)))
      : zt(e, t, d, l),
    (t.memoizedState = i.state),
    o && lv(t, n, !0),
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
function Ev(e, t, n, i, o) {
  return so(), ap(o), (t.flags |= 256), zt(e, t, n, i), t.child
}
var yd = { dehydrated: null, treeContext: null, retryLane: 0 }
function bd(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function f1(e, t, n) {
  var i = t.pendingProps,
    o = Ve.current,
    l = !1,
    c = (t.flags & 128) !== 0,
    d
  if (
    ((d = c) ||
      (d = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    d
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    De(Ve, o & 1),
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
              (e = ea(e, i, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = bd(n)),
              (t.memoizedState = yd),
              e)
            : bp(t, c))
    )
  if (((o = e.memoizedState), o !== null && ((d = o.dehydrated), d !== null)))
    return Ax(e, t, c, i, d, o, n)
  if (l) {
    ;(l = i.fallback), (c = t.mode), (o = e.child), (d = o.sibling)
    var g = { mode: 'hidden', children: i.children }
    return (
      !(c & 1) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = g),
          (t.deletions = null))
        : ((i = mi(o, g)), (i.subtreeFlags = o.subtreeFlags & 14680064)),
      d !== null ? (l = mi(d, l)) : ((l = ea(l, c, n, null)), (l.flags |= 2)),
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
function Lu(e, t, n, i) {
  return (
    i !== null && ap(i),
    lo(t, e.child, null, n),
    (e = bp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Ax(e, t, n, i, o, l, c) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = xh(Error(Y(422)))), Lu(e, t, c, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = i.fallback),
        (o = t.mode),
        (i = $c({ mode: 'visible', children: i.children }, o, 0, null)),
        (l = ea(l, o, c, null)),
        (l.flags |= 2),
        (i.return = t),
        (l.return = t),
        (i.sibling = l),
        (t.child = i),
        t.mode & 1 && lo(t, e.child, null, c),
        (t.child.memoizedState = bd(c)),
        (t.memoizedState = yd),
        l)
  if (!(t.mode & 1)) return Lu(e, t, c, null)
  if (o.data === '$!') {
    if (((i = o.nextSibling && o.nextSibling.dataset), i)) var d = i.dgst
    return (i = d), (l = Error(Y(419))), (i = xh(l, i, void 0)), Lu(e, t, c, i)
  }
  if (((d = (c & e.childLanes) !== 0), Xt || d)) {
    if (((i = ht), i !== null)) {
      switch (c & -c) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
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
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (i.suspendedLanes | c) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Ar(e, o), Hn(i, e, o, -1))
    }
    return xp(), (i = xh(Error(Y(421)))), Lu(e, t, c, i)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $x.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (un = hi(o.nextSibling)),
      (cn = t),
      (Ue = !0),
      ($n = null),
      e !== null &&
        ((kn[Sn++] = Sr),
        (kn[Sn++] = Er),
        (kn[Sn++] = na),
        (Sr = e.id),
        (Er = e.overflow),
        (na = t)),
      (t = bp(t, i.children)),
      (t.flags |= 4096),
      t)
}
function xv(e, t, n) {
  e.lanes |= t
  var i = e.alternate
  i !== null && (i.lanes |= t), hd(e.return, t, n)
}
function Ch(e, t, n, i, o) {
  var l = e.memoizedState
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = i),
      (l.tail = n),
      (l.tailMode = o))
}
function h1(e, t, n) {
  var i = t.pendingProps,
    o = i.revealOrder,
    l = i.tail
  if ((zt(e, t, i.children, n), (i = Ve.current), i & 2))
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
  if ((De(Ve, i), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && hc(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ch(t, !1, o, n, l)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && hc(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Ch(t, !0, n, null, l)
        break
      case 'together':
        Ch(t, !1, null, null, void 0)
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
function Pr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ia |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(Y(153))
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
function Px(e, t, n) {
  switch (t.tag) {
    case 3:
      c1(t), so()
      break
    case 5:
      Fy(t)
      break
    case 1:
      en(t.type) && oc(t)
      break
    case 4:
      fp(t, t.stateNode.containerInfo)
      break
    case 10:
      var i = t.type._context,
        o = t.memoizedProps.value
      De(uc, i._currentValue), (i._currentValue = o)
      break
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (De(Ve, Ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? f1(e, t, n)
          : (De(Ve, Ve.current & 1),
            (e = Pr(e, t, n)),
            e !== null ? e.sibling : null)
      De(Ve, Ve.current & 1)
      break
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return h1(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        De(Ve, Ve.current),
        i)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), l1(e, t, n)
  }
  return Pr(e, t, n)
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
  var o = e.memoizedProps
  if (o !== i) {
    ;(e = t.stateNode), Yi(ar.current)
    var l = null
    switch (n) {
      case 'input':
        ;(o = Bh(e, o)), (i = Bh(e, i)), (l = [])
        break
      case 'select':
        ;(o = We({}, o, { value: void 0 })),
          (i = We({}, i, { value: void 0 })),
          (l = [])
        break
      case 'textarea':
        ;(o = Wh(e, o)), (i = Wh(e, i)), (l = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof i.onClick == 'function' &&
          (e.onclick = ic)
    }
    Kh(n, i)
    var c
    n = null
    for (w in o)
      if (!i.hasOwnProperty(w) && o.hasOwnProperty(w) && o[w] != null)
        if (w === 'style') {
          var d = o[w]
          for (c in d) d.hasOwnProperty(c) && (n || (n = {}), (n[c] = ''))
        } else
          w !== 'dangerouslySetInnerHTML' &&
            w !== 'children' &&
            w !== 'suppressContentEditableWarning' &&
            w !== 'suppressHydrationWarning' &&
            w !== 'autoFocus' &&
            (js.hasOwnProperty(w) ? l || (l = []) : (l = l || []).push(w, null))
    for (w in i) {
      var g = i[w]
      if (
        ((d = o?.[w]),
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
              (js.hasOwnProperty(w)
                ? (g != null && w === 'onScroll' && Me('scroll', e),
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
function Ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (i |= o.subtreeFlags & 14680064),
        (i |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (i |= o.subtreeFlags),
        (i |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= i), (e.childLanes = n), t
}
function Ox(e, t, n) {
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
      return Ct(t), null
    case 1:
      return en(t.type) && ac(), Ct(t), null
    case 3:
      return (
        (i = t.stateNode),
        uo(),
        Fe(Zt),
        Fe(Pt),
        dp(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ou(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $n !== null && (Td($n), ($n = null)))),
        wd(e, t),
        Ct(t),
        null
      )
    case 5:
      hp(t)
      var o = Yi(Ks.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        p1(e, t, n, i, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(Y(166))
          return Ct(t), null
        }
        if (((e = Yi(ar.current)), Ou(t))) {
          ;(i = t.stateNode), (n = t.type)
          var l = t.memoizedProps
          switch (((i[nr] = t), (i[Ws] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Me('cancel', i), Me('close', i)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Me('load', i)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < ks.length; o++) Me(ks[o], i)
              break
            case 'source':
              Me('error', i)
              break
            case 'img':
            case 'image':
            case 'link':
              Me('error', i), Me('load', i)
              break
            case 'details':
              Me('toggle', i)
              break
            case 'input':
              Nm(i, l), Me('invalid', i)
              break
            case 'select':
              ;(i._wrapperState = { wasMultiple: !!l.multiple }),
                Me('invalid', i)
              break
            case 'textarea':
              zm(i, l), Me('invalid', i)
          }
          Kh(n, l), (o = null)
          for (var c in l)
            if (l.hasOwnProperty(c)) {
              var d = l[c]
              c === 'children'
                ? typeof d == 'string'
                  ? i.textContent !== d &&
                    (l.suppressHydrationWarning !== !0 &&
                      Pu(i.textContent, d, e),
                    (o = ['children', d]))
                  : typeof d == 'number' &&
                    i.textContent !== '' + d &&
                    (l.suppressHydrationWarning !== !0 &&
                      Pu(i.textContent, d, e),
                    (o = ['children', '' + d]))
                : js.hasOwnProperty(c) &&
                  d != null &&
                  c === 'onScroll' &&
                  Me('scroll', i)
            }
          switch (n) {
            case 'input':
              _u(i), jm(i, l, !0)
              break
            case 'textarea':
              _u(i), Dm(i)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof l.onClick == 'function' && (i.onclick = ic)
          }
          ;(i = o), (t.updateQueue = i), i !== null && (t.flags |= 4)
        } else {
          ;(c = o.nodeType === 9 ? o : o.ownerDocument),
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
            switch (((c = Qh(n, i)), n)) {
              case 'dialog':
                Me('cancel', e), Me('close', e), (o = i)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Me('load', e), (o = i)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < ks.length; o++) Me(ks[o], e)
                o = i
                break
              case 'source':
                Me('error', e), (o = i)
                break
              case 'img':
              case 'image':
              case 'link':
                Me('error', e), Me('load', e), (o = i)
                break
              case 'details':
                Me('toggle', e), (o = i)
                break
              case 'input':
                Nm(e, i), (o = Bh(e, i)), Me('invalid', e)
                break
              case 'option':
                o = i
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                  (o = We({}, i, { value: void 0 })),
                  Me('invalid', e)
                break
              case 'textarea':
                zm(e, i), (o = Wh(e, i)), Me('invalid', e)
                break
              default:
                o = i
            }
            Kh(n, o), (d = o)
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var g = d[l]
                l === 'style'
                  ? W0(e, g)
                  : l === 'dangerouslySetInnerHTML'
                  ? ((g = g ? g.__html : void 0), g != null && V0(e, g))
                  : l === 'children'
                  ? typeof g == 'string'
                    ? (n !== 'textarea' || g !== '') && zs(e, g)
                    : typeof g == 'number' && zs(e, '' + g)
                  : l !== 'suppressContentEditableWarning' &&
                    l !== 'suppressHydrationWarning' &&
                    l !== 'autoFocus' &&
                    (js.hasOwnProperty(l)
                      ? g != null && l === 'onScroll' && Me('scroll', e)
                      : g != null && Vd(e, l, g, c))
              }
            switch (n) {
              case 'input':
                _u(e), jm(e, i, !1)
                break
              case 'textarea':
                _u(e), Dm(e)
                break
              case 'option':
                i.value != null && e.setAttribute('value', '' + bi(i.value))
                break
              case 'select':
                ;(e.multiple = !!i.multiple),
                  (l = i.value),
                  l != null
                    ? Xa(e, !!i.multiple, l, !1)
                    : i.defaultValue != null &&
                      Xa(e, !!i.multiple, i.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = ic)
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
      return Ct(t), null
    case 6:
      if (e && t.stateNode != null) g1(e, t, e.memoizedProps, i)
      else {
        if (typeof i != 'string' && t.stateNode === null) throw Error(Y(166))
        if (((n = Yi(Ks.current)), Yi(ar.current), Ou(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[nr] = t),
            (l = i.nodeValue !== n) && ((e = cn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pu(i.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pu(i.nodeValue, n, (e.mode & 1) !== 0)
            }
          l && (t.flags |= 4)
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[nr] = t),
            (t.stateNode = i)
      }
      return Ct(t), null
    case 13:
      if (
        (Fe(Ve),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ue && un !== null && t.mode & 1 && !(t.flags & 128))
          Ly(), so(), (t.flags |= 98560), (l = !1)
        else if (((l = Ou(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(Y(318))
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(Y(317))
            l[nr] = t
          } else
            so(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ct(t), (l = !1)
        } else $n !== null && (Td($n), ($n = null)), (l = !0)
        if (!l) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ve.current & 1 ? st === 0 && (st = 3) : xp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ct(t),
          null)
    case 4:
      return (
        uo(), wd(e, t), e === null && Vs(t.stateNode.containerInfo), Ct(t), null
      )
    case 10:
      return lp(t.type._context), Ct(t), null
    case 17:
      return en(t.type) && ac(), Ct(t), null
    case 19:
      if ((Fe(Ve), (l = t.memoizedState), l === null)) return Ct(t), null
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
                return De(Ve, (Ve.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          l.tail !== null &&
            Ze() > fo &&
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
              return Ct(t), null
          } else
            2 * Ze() - l.renderingStartTime > fo &&
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
          (n = Ve.current),
          De(Ve, i ? (n & 1) | 2 : n & 1),
          t)
        : (Ct(t), null)
    case 22:
    case 23:
      return (
        Ep(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? ln & 1073741824 && (Ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ct(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(Y(156, t.tag))
}
function Rx(e, t) {
  switch ((ip(t), t.tag)) {
    case 1:
      return (
        en(t.type) && ac(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        uo(),
        Fe(Zt),
        Fe(Pt),
        dp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return hp(t), null
    case 13:
      if (
        (Fe(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Y(340))
        so()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return Fe(Ve), null
    case 4:
      return uo(), null
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
var Iu = !1,
  Tt = !1,
  Lx = typeof WeakSet == 'function' ? WeakSet : Set,
  re = null
function Ja(e, t) {
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
var Cv = !1
function Ix(e, t) {
  if (((id = tc), (e = by()), np(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var i = n.getSelection && n.getSelection()
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode
          var o = i.anchorOffset,
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
            P = 0,
            O = e,
            k = null
          t: for (;;) {
            for (
              var V;
              O !== n || (o !== 0 && O.nodeType !== 3) || (d = c + o),
                O !== l || (i !== 0 && O.nodeType !== 3) || (g = c + i),
                O.nodeType === 3 && (c += O.nodeValue.length),
                (V = O.firstChild) !== null;

            )
              (k = O), (O = V)
            for (;;) {
              if (O === e) break t
              if (
                (k === n && ++w === o && (d = c),
                k === l && ++P === i && (g = c),
                (V = O.nextSibling) !== null)
              )
                break
              ;(O = k), (k = O.parentNode)
            }
            O = V
          }
          n = d === -1 || g === -1 ? null : { start: d, end: g }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (
    ad = { focusedElem: e, selectionRange: n }, tc = !1, re = t;
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
                    J = F.memoizedState,
                    L = t.stateNode,
                    x = L.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? W : Fn(t.type, W),
                      J
                    )
                  L.__reactInternalSnapshotBeforeUpdate = x
                }
                break
              case 3:
                var I = t.stateNode.containerInfo
                I.nodeType === 1
                  ? (I.textContent = '')
                  : I.nodeType === 9 &&
                    I.documentElement &&
                    I.removeChild(I.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(Y(163))
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
  return (F = Cv), (Cv = !1), F
}
function Ps(e, t, n) {
  var i = t.updateQueue
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var o = (i = i.next)
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy
        ;(o.destroy = void 0), l !== void 0 && m1(t, n, l)
      }
      o = o.next
    } while (o !== i)
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
function _d(e) {
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
function Tv(e) {
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
function kd(e, t, n) {
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
    for (kd(e, t, n), e = e.sibling; e !== null; ) kd(e, t, n), (e = e.sibling)
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
      ir.onCommitFiberUnmount(Rc, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Tt || Ja(n, t)
    case 6:
      var i = mt,
        o = Un
      ;(mt = null),
        ti(e, t, n),
        (mt = i),
        (Un = o),
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
        (o = Un),
        (mt = n.stateNode.containerInfo),
        (Un = !0),
        ti(e, t, n),
        (mt = i),
        (Un = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Tt &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        o = i = i.next
        do {
          var l = o,
            c = l.destroy
          ;(l = l.tag),
            c !== void 0 && (l & 2 || l & 4) && m1(n, t, c),
            (o = o.next)
        } while (o !== i)
      }
      ti(e, t, n)
      break
    case 1:
      if (
        !Tt &&
        (Ja(n, t),
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
        ? ((Tt = (i = Tt) || n.memoizedState !== null), ti(e, t, n), (Tt = i))
        : ti(e, t, n)
      break
    default:
      ti(e, t, n)
  }
}
function Av(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Lx()),
      t.forEach(function (i) {
        var o = Bx.bind(null, e, i)
        n.has(i) || (n.add(i), i.then(o, o))
      })
  }
}
function Mn(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var o = n[i]
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
        if (mt === null) throw Error(Y(160))
        b1(l, c, o), (mt = null), (Un = !1)
        var g = o.alternate
        g !== null && (g.return = null), (o.return = null)
      } catch (w) {
        Ge(o, t, w)
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
      if ((Mn(t, e), er(e), i & 4)) {
        try {
          Ps(3, e, e.return), Fc(3, e)
        } catch (W) {
          Ge(e, e.return, W)
        }
        try {
          Ps(5, e, e.return)
        } catch (W) {
          Ge(e, e.return, W)
        }
      }
      break
    case 1:
      Mn(t, e), er(e), i & 512 && n !== null && Ja(n, n.return)
      break
    case 5:
      if (
        (Mn(t, e),
        er(e),
        i & 512 && n !== null && Ja(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          zs(o, '')
        } catch (W) {
          Ge(e, e.return, W)
        }
      }
      if (i & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          c = n !== null ? n.memoizedProps : l,
          d = e.type,
          g = e.updateQueue
        if (((e.updateQueue = null), g !== null))
          try {
            d === 'input' && l.type === 'radio' && l.name != null && U0(o, l),
              Qh(d, c)
            var w = Qh(d, l)
            for (c = 0; c < g.length; c += 2) {
              var P = g[c],
                O = g[c + 1]
              P === 'style'
                ? W0(o, O)
                : P === 'dangerouslySetInnerHTML'
                ? V0(o, O)
                : P === 'children'
                ? zs(o, O)
                : Vd(o, P, O, w)
            }
            switch (d) {
              case 'input':
                Vh(o, l)
                break
              case 'textarea':
                $0(o, l)
                break
              case 'select':
                var k = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!l.multiple
                var V = l.value
                V != null
                  ? Xa(o, !!l.multiple, V, !1)
                  : k !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Xa(o, !!l.multiple, l.defaultValue, !0)
                      : Xa(o, !!l.multiple, l.multiple ? [] : '', !1))
            }
            o[Ws] = l
          } catch (W) {
            Ge(e, e.return, W)
          }
      }
      break
    case 6:
      if ((Mn(t, e), er(e), i & 4)) {
        if (e.stateNode === null) throw Error(Y(162))
        ;(o = e.stateNode), (l = e.memoizedProps)
        try {
          o.nodeValue = l
        } catch (W) {
          Ge(e, e.return, W)
        }
      }
      break
    case 3:
      if (
        (Mn(t, e), er(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Us(t.containerInfo)
        } catch (W) {
          Ge(e, e.return, W)
        }
      break
    case 4:
      Mn(t, e), er(e)
      break
    case 13:
      Mn(t, e),
        er(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (kp = Ze())),
        i & 4 && Av(e)
      break
    case 22:
      if (
        ((P = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Tt = (w = Tt) || P), Mn(t, e), (Tt = w)) : Mn(t, e),
        er(e),
        i & 8192)
      ) {
        if (
          ((w = e.memoizedState !== null),
          (e.stateNode.isHidden = w) && !P && e.mode & 1)
        )
          for (re = e, P = e.child; P !== null; ) {
            for (O = re = P; re !== null; ) {
              switch (((k = re), (V = k.child), k.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ps(4, k, k.return)
                  break
                case 1:
                  Ja(k, k.return)
                  var F = k.stateNode
                  if (typeof F.componentWillUnmount == 'function') {
                    ;(i = k), (n = k.return)
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
                  Ja(k, k.return)
                  break
                case 22:
                  if (k.memoizedState !== null) {
                    Ov(O)
                    continue
                  }
              }
              V !== null ? ((V.return = k), (re = V)) : Ov(O)
            }
            P = P.sibling
          }
        e: for (P = null, O = e; ; ) {
          if (O.tag === 5) {
            if (P === null) {
              P = O
              try {
                ;(o = O.stateNode),
                  w
                    ? ((l = o.style),
                      typeof l.setProperty == 'function'
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none'))
                    : ((d = O.stateNode),
                      (g = O.memoizedProps.style),
                      (c =
                        g != null && g.hasOwnProperty('display')
                          ? g.display
                          : null),
                      (d.style.display = H0('display', c)))
              } catch (W) {
                Ge(e, e.return, W)
              }
            }
          } else if (O.tag === 6) {
            if (P === null)
              try {
                O.stateNode.nodeValue = w ? '' : O.memoizedProps
              } catch (W) {
                Ge(e, e.return, W)
              }
          } else if (
            ((O.tag !== 22 && O.tag !== 23) ||
              O.memoizedState === null ||
              O === e) &&
            O.child !== null
          ) {
            ;(O.child.return = O), (O = O.child)
            continue
          }
          if (O === e) break e
          for (; O.sibling === null; ) {
            if (O.return === null || O.return === e) break e
            P === O && (P = null), (O = O.return)
          }
          P === O && (P = null), (O.sibling.return = O.return), (O = O.sibling)
        }
      }
      break
    case 19:
      Mn(t, e), er(e), i & 4 && Av(e)
      break
    case 21:
      break
    default:
      Mn(t, e), er(e)
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
        throw Error(Y(160))
      }
      switch (i.tag) {
        case 5:
          var o = i.stateNode
          i.flags & 32 && (zs(o, ''), (i.flags &= -33))
          var l = Tv(e)
          Sd(e, l, o)
          break
        case 3:
        case 4:
          var c = i.stateNode.containerInfo,
            d = Tv(e)
          kd(e, d, c)
          break
        default:
          throw Error(Y(161))
      }
    } catch (g) {
      Ge(e, e.return, g)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Nx(e, t, n) {
  ;(re = e), _1(e)
}
function _1(e, t, n) {
  for (var i = (e.mode & 1) !== 0; re !== null; ) {
    var o = re,
      l = o.child
    if (o.tag === 22 && i) {
      var c = o.memoizedState !== null || Iu
      if (!c) {
        var d = o.alternate,
          g = (d !== null && d.memoizedState !== null) || Tt
        d = Iu
        var w = Tt
        if (((Iu = c), (Tt = g) && !w))
          for (re = o; re !== null; )
            (c = re),
              (g = c.child),
              c.tag === 22 && c.memoizedState !== null
                ? Rv(o)
                : g !== null
                ? ((g.return = c), (re = g))
                : Rv(o)
        for (; l !== null; ) (re = l), _1(l), (l = l.sibling)
        ;(re = o), (Iu = d), (Tt = w)
      }
      Pv(e)
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (re = l)) : Pv(e)
  }
}
function Pv(e) {
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
              Tt || Fc(5, t)
              break
            case 1:
              var i = t.stateNode
              if (t.flags & 4 && !Tt)
                if (n === null) i.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fn(t.type, n.memoizedProps)
                  i.componentDidUpdate(
                    o,
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
                  var P = w.memoizedState
                  if (P !== null) {
                    var O = P.dehydrated
                    O !== null && Us(O)
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
              throw Error(Y(163))
          }
        Tt || (t.flags & 512 && _d(t))
      } catch (k) {
        Ge(t, t.return, k)
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
function Ov(e) {
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
function Rv(e) {
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
            var o = t.return
            try {
              i.componentDidMount()
            } catch (g) {
              Ge(t, o, g)
            }
          }
          var l = t.return
          try {
            _d(t)
          } catch (g) {
            Ge(t, l, g)
          }
          break
        case 5:
          var c = t.return
          try {
            _d(t)
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
var jx = Math.ceil,
  gc = Rr.ReactCurrentDispatcher,
  wp = Rr.ReactCurrentOwner,
  xn = Rr.ReactCurrentBatchConfig,
  Se = 0,
  ht = null,
  rt = null,
  vt = 0,
  ln = 0,
  Ya = ki(0),
  st = 0,
  Ys = null,
  ia = 0,
  Uc = 0,
  _p = 0,
  Os = null,
  Gt = null,
  kp = 0,
  fo = 1 / 0,
  _r = null,
  mc = !1,
  Ed = null,
  pi = null,
  Nu = !1,
  li = null,
  vc = 0,
  Rs = 0,
  xd = null,
  Ku = -1,
  Qu = 0
function Mt() {
  return Se & 6 ? Ze() : Ku !== -1 ? Ku : (Ku = Ze())
}
function gi(e) {
  return e.mode & 1
    ? Se & 2 && vt !== 0
      ? vt & -vt
      : yx.transition !== null
      ? (Qu === 0 && (Qu = ry()), Qu)
      : ((e = Le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cy(e.type))),
        e)
    : 1
}
function Hn(e, t, n, i) {
  if (50 < Rs) throw ((Rs = 0), (xd = null), Error(Y(185)))
  nl(e, n, i),
    (!(Se & 2) || e !== ht) &&
      (e === ht && (!(Se & 2) && (Uc |= n), st === 4 && ai(e, vt)),
      tn(e, i),
      n === 1 && Se === 0 && !(t.mode & 1) && ((fo = Ze() + 500), zc && Si()))
}
function tn(e, t) {
  var n = e.callbackNode
  y4(e, t)
  var i = ec(e, e === ht ? vt : 0)
  if (i === 0)
    n !== null && Um(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Um(n), t === 1))
      e.tag === 0 ? vx(Lv.bind(null, e)) : Py(Lv.bind(null, e)),
        dx(function () {
          !(Se & 6) && Si()
        }),
        (n = null)
    else {
      switch (iy(i)) {
        case 1:
          n = Qd
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
      n = P1(n, k1.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function k1(e, t) {
  if (((Ku = -1), (Qu = 0), Se & 6)) throw Error(Y(327))
  var n = e.callbackNode
  if (ro() && e.callbackNode !== n) return null
  var i = ec(e, e === ht ? vt : 0)
  if (i === 0) return null
  if (i & 30 || i & e.expiredLanes || t) t = yc(e, i)
  else {
    t = i
    var o = Se
    Se |= 2
    var l = E1()
    ;(ht !== e || vt !== t) && ((_r = null), (fo = Ze() + 500), Zi(e, t))
    do
      try {
        Mx()
        break
      } catch (d) {
        S1(e, d)
      }
    while (!0)
    sp(),
      (gc.current = l),
      (Se = o),
      rt !== null ? (t = 0) : ((ht = null), (vt = 0), (t = st))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Zh(e)), o !== 0 && ((i = o), (t = Cd(e, o)))), t === 1)
    )
      throw ((n = Ys), Zi(e, 0), ai(e, i), tn(e, Ze()), n)
    if (t === 6) ai(e, i)
    else {
      if (
        ((o = e.current.alternate),
        !(i & 30) &&
          !zx(o) &&
          ((t = yc(e, i)),
          t === 2 && ((l = Zh(e)), l !== 0 && ((i = l), (t = Cd(e, l)))),
          t === 1))
      )
        throw ((n = Ys), Zi(e, 0), ai(e, i), tn(e, Ze()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(Y(345))
        case 2:
          Ki(e, Gt, _r)
          break
        case 3:
          if (
            (ai(e, i), (i & 130023424) === i && ((t = kp + 500 - Ze()), 10 < t))
          ) {
            if (ec(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & i) !== i)) {
              Mt(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = sd(Ki.bind(null, e, Gt, _r), t)
            break
          }
          Ki(e, Gt, _r)
          break
        case 4:
          if ((ai(e, i), (i & 4194240) === i)) break
          for (t = e.eventTimes, o = -1; 0 < i; ) {
            var c = 31 - Vn(i)
            ;(l = 1 << c), (c = t[c]), c > o && (o = c), (i &= ~l)
          }
          if (
            ((i = o),
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
                : 1960 * jx(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = sd(Ki.bind(null, e, Gt, _r), i)
            break
          }
          Ki(e, Gt, _r)
          break
        case 5:
          Ki(e, Gt, _r)
          break
        default:
          throw Error(Y(329))
      }
    }
  }
  return tn(e, Ze()), e.callbackNode === n ? k1.bind(null, e) : null
}
function Cd(e, t) {
  var n = Os
  return (
    e.current.memoizedState.isDehydrated && (Zi(e, t).flags |= 256),
    (e = yc(e, t)),
    e !== 2 && ((t = Gt), (Gt = n), t !== null && Td(t)),
    e
  )
}
function Td(e) {
  Gt === null ? (Gt = e) : Gt.push.apply(Gt, e)
}
function zx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var o = n[i],
            l = o.getSnapshot
          o = o.value
          try {
            if (!Wn(l(), o)) return !1
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
function ai(e, t) {
  for (
    t &= ~_p,
      t &= ~Uc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vn(t),
      i = 1 << n
    ;(e[n] = -1), (t &= ~i)
  }
}
function Lv(e) {
  if (Se & 6) throw Error(Y(327))
  ro()
  var t = ec(e, 0)
  if (!(t & 1)) return tn(e, Ze()), null
  var n = yc(e, t)
  if (e.tag !== 0 && n === 2) {
    var i = Zh(e)
    i !== 0 && ((t = i), (n = Cd(e, i)))
  }
  if (n === 1) throw ((n = Ys), Zi(e, 0), ai(e, t), tn(e, Ze()), n)
  if (n === 6) throw Error(Y(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ki(e, Gt, _r),
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
    ;(Se = n), Se === 0 && ((fo = Ze() + 500), zc && Si())
  }
}
function aa(e) {
  li !== null && li.tag === 0 && !(Se & 6) && ro()
  var t = Se
  Se |= 1
  var n = xn.transition,
    i = Le
  try {
    if (((xn.transition = null), (Le = 1), e)) return e()
  } finally {
    ;(Le = i), (xn.transition = n), (Se = t), !(Se & 6) && Si()
  }
}
function Ep() {
  ;(ln = Ya.current), Fe(Ya)
}
function Zi(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), hx(n)), rt !== null))
    for (n = rt.return; n !== null; ) {
      var i = n
      switch ((ip(i), i.tag)) {
        case 1:
          ;(i = i.type.childContextTypes), i != null && ac()
          break
        case 3:
          uo(), Fe(Zt), Fe(Pt), dp()
          break
        case 5:
          hp(i)
          break
        case 4:
          uo()
          break
        case 13:
          Fe(Ve)
          break
        case 19:
          Fe(Ve)
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
    (Ys = null),
    (_p = Uc = ia = 0),
    (Gt = Os = null),
    Ji !== null)
  ) {
    for (t = 0; t < Ji.length; t++)
      if (((n = Ji[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null
        var o = i.next,
          l = n.pending
        if (l !== null) {
          var c = l.next
          ;(l.next = o), (i.next = c)
        }
        n.pending = i
      }
    Ji = null
  }
  return e
}
function S1(e, t) {
  do {
    var n = rt
    try {
      if ((sp(), (Hu.current = pc), dc)) {
        for (var i = He.memoizedState; i !== null; ) {
          var o = i.queue
          o !== null && (o.pending = null), (i = i.next)
        }
        dc = !1
      }
      if (
        ((ra = 0),
        (ft = ot = He = null),
        (As = !1),
        (Qs = 0),
        (wp.current = null),
        n === null || n.return === null)
      ) {
        ;(st = 1), (Ys = t), (rt = null)
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
            P = d,
            O = P.tag
          if (!(P.mode & 1) && (O === 0 || O === 11 || O === 15)) {
            var k = P.alternate
            k
              ? ((P.updateQueue = k.updateQueue),
                (P.memoizedState = k.memoizedState),
                (P.lanes = k.lanes))
              : ((P.updateQueue = null), (P.memoizedState = null))
          }
          var V = bv(c)
          if (V !== null) {
            ;(V.flags &= -257),
              wv(V, c, d, l, t),
              V.mode & 1 && yv(l, w, t),
              (t = V),
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
            g = Error(Y(426))
          }
        } else if (Ue && d.mode & 1) {
          var J = bv(c)
          if (J !== null) {
            !(J.flags & 65536) && (J.flags |= 256),
              wv(J, c, d, l, t),
              ap(co(g, d))
            break e
          }
        }
        ;(l = g = co(g, d)),
          st !== 4 && (st = 2),
          Os === null ? (Os = [l]) : Os.push(l),
          (l = c)
        do {
          switch (l.tag) {
            case 3:
              ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
              var L = a1(l, g, t)
              fv(l, L)
              break e
            case 1:
              d = g
              var x = l.type,
                I = l.stateNode
              if (
                !(l.flags & 128) &&
                (typeof x.getDerivedStateFromError == 'function' ||
                  (I !== null &&
                    typeof I.componentDidCatch == 'function' &&
                    (pi === null || !pi.has(I))))
              ) {
                ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                var B = o1(l, d, t)
                fv(l, B)
                break e
              }
          }
          l = l.return
        } while (l !== null)
      }
      C1(n)
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
    ht === null || (!(ia & 268435455) && !(Uc & 268435455)) || ai(ht, vt)
}
function yc(e, t) {
  var n = Se
  Se |= 2
  var i = E1()
  ;(ht !== e || vt !== t) && ((_r = null), Zi(e, t))
  do
    try {
      Dx()
      break
    } catch (o) {
      S1(e, o)
    }
  while (!0)
  if ((sp(), (Se = n), (gc.current = i), rt !== null)) throw Error(Y(261))
  return (ht = null), (vt = 0), st
}
function Dx() {
  for (; rt !== null; ) x1(rt)
}
function Mx() {
  for (; rt !== null && !u4(); ) x1(rt)
}
function x1(e) {
  var t = A1(e.alternate, e, ln)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? C1(e) : (rt = t),
    (wp.current = null)
}
function C1(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rx(n, t)), n !== null)) {
        ;(n.flags &= 32767), (rt = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(st = 6), (rt = null)
        return
      }
    } else if (((n = Ox(n, t, ln)), n !== null)) {
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
  var i = Le,
    o = xn.transition
  try {
    ;(xn.transition = null), (Le = 1), Fx(e, t, n, i)
  } finally {
    ;(xn.transition = o), (Le = i)
  }
  return null
}
function Fx(e, t, n, i) {
  do ro()
  while (li !== null)
  if (Se & 6) throw Error(Y(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Y(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var l = n.lanes | n.childLanes
  if (
    (b4(e, l),
    e === ht && ((rt = ht = null), (vt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nu ||
      ((Nu = !0),
      P1(Zu, function () {
        return ro(), null
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ;(l = xn.transition), (xn.transition = null)
    var c = Le
    Le = 1
    var d = Se
    ;(Se |= 4),
      (wp.current = null),
      Ix(e, n),
      w1(n, e),
      ax(ad),
      (tc = !!id),
      (ad = id = null),
      (e.current = n),
      Nx(n),
      c4(),
      (Se = d),
      (Le = c),
      (xn.transition = l)
  } else e.current = n
  if (
    (Nu && ((Nu = !1), (li = e), (vc = o)),
    (l = e.pendingLanes),
    l === 0 && (pi = null),
    d4(n.stateNode),
    tn(e, Ze()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), i(o.value, { componentStack: o.stack, digest: o.digest })
  if (mc) throw ((mc = !1), (e = Ed), (Ed = null), e)
  return (
    vc & 1 && e.tag !== 0 && ro(),
    (l = e.pendingLanes),
    l & 1 ? (e === xd ? Rs++ : ((Rs = 0), (xd = e))) : (Rs = 0),
    Si(),
    null
  )
}
function ro() {
  if (li !== null) {
    var e = iy(vc),
      t = xn.transition,
      n = Le
    try {
      if (((xn.transition = null), (Le = 16 > e ? 16 : e), li === null))
        var i = !1
      else {
        if (((e = li), (li = null), (vc = 0), Se & 6)) throw Error(Y(331))
        var o = Se
        for (Se |= 4, re = e.current; re !== null; ) {
          var l = re,
            c = l.child
          if (re.flags & 16) {
            var d = l.deletions
            if (d !== null) {
              for (var g = 0; g < d.length; g++) {
                var w = d[g]
                for (re = w; re !== null; ) {
                  var P = re
                  switch (P.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(8, P, l)
                  }
                  var O = P.child
                  if (O !== null) (O.return = P), (re = O)
                  else
                    for (; re !== null; ) {
                      P = re
                      var k = P.sibling,
                        V = P.return
                      if ((v1(P), P === w)) {
                        re = null
                        break
                      }
                      if (k !== null) {
                        ;(k.return = V), (re = k)
                        break
                      }
                      re = V
                    }
                }
              }
              var F = l.alternate
              if (F !== null) {
                var W = F.child
                if (W !== null) {
                  F.child = null
                  do {
                    var J = W.sibling
                    ;(W.sibling = null), (W = J)
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
                    Ps(9, l, l.return)
                }
              var L = l.sibling
              if (L !== null) {
                ;(L.return = l.return), (re = L)
                break e
              }
              re = l.return
            }
        }
        var x = e.current
        for (re = x; re !== null; ) {
          c = re
          var I = c.child
          if (c.subtreeFlags & 2064 && I !== null) (I.return = c), (re = I)
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
          ((Se = o), Si(), ir && typeof ir.onPostCommitFiberRoot == 'function')
        )
          try {
            ir.onPostCommitFiberRoot(Rc, e)
          } catch {}
        i = !0
      }
      return i
    } finally {
      ;(Le = n), (xn.transition = t)
    }
  }
  return !1
}
function Iv(e, t, n) {
  ;(t = co(n, t)),
    (t = a1(e, t, 1)),
    (e = di(e, t, 1)),
    (t = Mt()),
    e !== null && (nl(e, 1, t), tn(e, t))
}
function Ge(e, t, n) {
  if (e.tag === 3) Iv(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Iv(t, e, n)
        break
      } else if (t.tag === 1) {
        var i = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof i.componentDidCatch == 'function' &&
            (pi === null || !pi.has(i)))
        ) {
          ;(e = co(n, e)),
            (e = o1(t, e, 1)),
            (t = di(t, e, 1)),
            (e = Mt()),
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
    (t = Mt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ht === e &&
      (vt & n) === n &&
      (st === 4 || (st === 3 && (vt & 130023424) === vt && 500 > Ze() - kp)
        ? Zi(e, 0)
        : (_p |= n)),
    tn(e, t)
}
function T1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Eu), (Eu <<= 1), !(Eu & 130023424) && (Eu = 4194304))
      : (t = 1))
  var n = Mt()
  ;(e = Ar(e, t)), e !== null && (nl(e, t, n), tn(e, n))
}
function $x(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), T1(e, n)
}
function Bx(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      i = e.stateNode
      break
    default:
      throw Error(Y(314))
  }
  i !== null && i.delete(t), T1(e, n)
}
var A1
A1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Zt.current) Xt = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xt = !1), Px(e, t, n)
      Xt = !!(e.flags & 131072)
    }
  else (Xt = !1), Ue && t.flags & 1048576 && Oy(t, lc, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type
      qu(e, t), (e = t.pendingProps)
      var o = oo(t, Pt.current)
      no(t, n), (o = gp(null, t, i, e, o, n))
      var l = mp()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            en(i) ? ((l = !0), oc(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            cp(t),
            (o.updater = Dc),
            (t.stateNode = o),
            (o._reactInternals = t),
            pd(t, i, e, n),
            (t = vd(null, t, i, !0, l, n)))
          : ((t.tag = 0), Ue && l && rp(t), zt(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      i = t.elementType
      e: {
        switch (
          (qu(e, t),
          (e = t.pendingProps),
          (o = i._init),
          (i = o(i._payload)),
          (t.type = i),
          (o = t.tag = Hx(i)),
          (e = Fn(i, e)),
          o)
        ) {
          case 0:
            t = md(null, t, i, e, n)
            break e
          case 1:
            t = Sv(null, t, i, e, n)
            break e
          case 11:
            t = _v(null, t, i, e, n)
            break e
          case 14:
            t = kv(null, t, i, Fn(i.type, e), n)
            break e
        }
        throw Error(Y(306, i, ''))
      }
      return t
    case 0:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Fn(i, o)),
        md(e, t, i, o, n)
      )
    case 1:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Fn(i, o)),
        Sv(e, t, i, o, n)
      )
    case 3:
      e: {
        if ((c1(t), e === null)) throw Error(Y(387))
        ;(i = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ny(e, t),
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
            ;(o = co(Error(Y(423)), t)), (t = Ev(e, t, i, n, o))
            break e
          } else if (i !== o) {
            ;(o = co(Error(Y(424)), t)), (t = Ev(e, t, i, n, o))
            break e
          } else
            for (
              un = hi(t.stateNode.containerInfo.firstChild),
                cn = t,
                Ue = !0,
                $n = null,
                n = My(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((so(), i === o)) {
            t = Pr(e, t, n)
            break e
          }
          zt(e, t, i, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Fy(t),
        e === null && fd(t),
        (i = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (c = o.children),
        od(i, o) ? (c = null) : l !== null && od(i, l) && (t.flags |= 32),
        u1(e, t),
        zt(e, t, c, n),
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
        e === null ? (t.child = lo(t, null, i, n)) : zt(e, t, i, n),
        t.child
      )
    case 11:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Fn(i, o)),
        _v(e, t, i, o, n)
      )
    case 7:
      return zt(e, t, t.pendingProps, n), t.child
    case 8:
      return zt(e, t, t.pendingProps.children, n), t.child
    case 12:
      return zt(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (c = o.value),
          De(uc, i._currentValue),
          (i._currentValue = c),
          l !== null)
        )
          if (Wn(l.value, c)) {
            if (l.children === o.children && !Zt.current) {
              t = Pr(e, t, n)
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
                        var P = w.pending
                        P === null
                          ? (g.next = g)
                          : ((g.next = P.next), (P.next = g)),
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
                if (((c = l.return), c === null)) throw Error(Y(341))
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
        zt(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (i = t.pendingProps.children),
        no(t, n),
        (o = Cn(o)),
        (i = i(o)),
        (t.flags |= 1),
        zt(e, t, i, n),
        t.child
      )
    case 14:
      return (
        (i = t.type),
        (o = Fn(i, t.pendingProps)),
        (o = Fn(i.type, o)),
        kv(e, t, i, o, n)
      )
    case 15:
      return s1(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Fn(i, o)),
        qu(e, t),
        (t.tag = 1),
        en(i) ? ((e = !0), oc(t)) : (e = !1),
        no(t, n),
        zy(t, i, o),
        pd(t, i, o, n),
        vd(null, t, i, !0, e, n)
      )
    case 19:
      return h1(e, t, n)
    case 22:
      return l1(e, t, n)
  }
  throw Error(Y(156, t.tag))
}
function P1(e, t) {
  return ey(e, t)
}
function Vx(e, t, n, i) {
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
  return new Vx(e, t, n, i)
}
function Cp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Hx(e) {
  if (typeof e == 'function') return Cp(e) ? 1 : 0
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
function Gu(e, t, n, i, o, l) {
  var c = 2
  if (((i = e), typeof e == 'function')) Cp(e) && (c = 1)
  else if (typeof e == 'string') c = 5
  else
    e: switch (e) {
      case $a:
        return ea(n.children, o, l, t)
      case Hd:
        ;(c = 8), (o |= 8)
        break
      case Mh:
        return (e = En(12, n, t, o | 2)), (e.elementType = Mh), (e.lanes = l), e
      case Fh:
        return (e = En(13, n, t, o)), (e.elementType = Fh), (e.lanes = l), e
      case Uh:
        return (e = En(19, n, t, o)), (e.elementType = Uh), (e.lanes = l), e
      case D0:
        return $c(n, o, l, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case j0:
              c = 10
              break e
            case z0:
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
        throw Error(Y(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = En(c, n, t, o)), (t.elementType = e), (t.type = i), (t.lanes = l), t
  )
}
function ea(e, t, n, i) {
  return (e = En(7, e, i, t)), (e.lanes = n), e
}
function $c(e, t, n, i) {
  return (
    (e = En(22, e, i, t)),
    (e.elementType = D0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Th(e, t, n) {
  return (e = En(6, e, null, t)), (e.lanes = n), e
}
function Ah(e, t, n) {
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
function Wx(e, t, n, i, o) {
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
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Tp(e, t, n, i, o, l, c, d, g) {
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
    $$typeof: Ua,
    key: i == null ? null : '' + i,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function O1(e) {
  if (!e) return wi
  e = e._reactInternals
  e: {
    if (sa(e) !== e || e.tag !== 1) throw Error(Y(170))
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
    throw Error(Y(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (en(n)) return Ay(e, n, t)
  }
  return t
}
function R1(e, t, n, i, o, l, c, d, g) {
  return (
    (e = Tp(n, i, !0, e, o, l, c, d, g)),
    (e.context = O1(null)),
    (n = e.current),
    (i = Mt()),
    (o = gi(n)),
    (l = xr(i, o)),
    (l.callback = t ?? null),
    di(n, l, o),
    (e.current.lanes = o),
    nl(e, o, i),
    tn(e, i),
    e
  )
}
function Bc(e, t, n, i) {
  var o = t.current,
    l = Mt(),
    c = gi(o)
  return (
    (n = O1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xr(l, c)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = di(o, t, c)),
    e !== null && (Hn(e, o, c, l), Vu(e, o, c)),
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
function Nv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ap(e, t) {
  Nv(e, t), (e = e.alternate) && Nv(e, t)
}
function Kx() {
  return null
}
var L1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Pp(e) {
  this._internalRoot = e
}
Vc.prototype.render = Pp.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(Y(409))
  Bc(e, t, null, null)
}
Vc.prototype.unmount = Pp.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    aa(function () {
      Bc(null, e, null, null)
    }),
      (t[Tr] = null)
  }
}
function Vc(e) {
  this._internalRoot = e
}
Vc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sy()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < ii.length && t !== 0 && t < ii[n].priority; n++);
    ii.splice(n, 0, e), n === 0 && uy(e)
  }
}
function Op(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Hc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function jv() {}
function Qx(e, t, n, i, o) {
  if (o) {
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var w = bc(c)
        l.call(w)
      }
    }
    var c = R1(t, i, e, 0, null, !1, !1, '', jv)
    return (
      (e._reactRootContainer = c),
      (e[Tr] = c.current),
      Vs(e.nodeType === 8 ? e.parentNode : e),
      aa(),
      c
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof i == 'function') {
    var d = i
    i = function () {
      var w = bc(g)
      d.call(w)
    }
  }
  var g = Tp(e, 0, !1, null, null, !1, !1, '', jv)
  return (
    (e._reactRootContainer = g),
    (e[Tr] = g.current),
    Vs(e.nodeType === 8 ? e.parentNode : e),
    aa(function () {
      Bc(t, g, n, i)
    }),
    g
  )
}
function Wc(e, t, n, i, o) {
  var l = n._reactRootContainer
  if (l) {
    var c = l
    if (typeof o == 'function') {
      var d = o
      o = function () {
        var g = bc(c)
        d.call(g)
      }
    }
    Bc(t, c, e, o)
  } else c = Qx(n, t, e, o, i)
  return bc(c)
}
ay = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = _s(t.pendingLanes)
        n !== 0 &&
          (Gd(t, n | 1), tn(t, Ze()), !(Se & 6) && ((fo = Ze() + 500), Si()))
      }
      break
    case 13:
      aa(function () {
        var i = Ar(e, 1)
        if (i !== null) {
          var o = Mt()
          Hn(i, e, 1, o)
        }
      }),
        Ap(e, 1)
  }
}
Jd = function (e) {
  if (e.tag === 13) {
    var t = Ar(e, 134217728)
    if (t !== null) {
      var n = Mt()
      Hn(t, e, 134217728, n)
    }
    Ap(e, 134217728)
  }
}
oy = function (e) {
  if (e.tag === 13) {
    var t = gi(e),
      n = Ar(e, t)
    if (n !== null) {
      var i = Mt()
      Hn(n, e, t, i)
    }
    Ap(e, t)
  }
}
sy = function () {
  return Le
}
ly = function (e, t) {
  var n = Le
  try {
    return (Le = e), t()
  } finally {
    Le = n
  }
}
Jh = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Vh(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = jc(i)
            if (!o) throw Error(Y(90))
            F0(i), Vh(i, o)
          }
        }
      }
      break
    case 'textarea':
      $0(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Xa(e, !!n.multiple, t, !1)
  }
}
Q0 = Sp
G0 = aa
var Gx = { usingClientEntryPoint: !1, Events: [il, Wa, jc, q0, K0, Sp] },
  vs = {
    findFiberByHostInstance: Gi,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Jx = {
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
    currentDispatcherRef: Rr.ReactCurrentDispatcher,
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
  var ju = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!ju.isDisabled && ju.supportsFiber)
    try {
      ;(Rc = ju.inject(Jx)), (ir = ju)
    } catch {}
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gx
hn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Op(t)) throw Error(Y(200))
  return qx(e, t, null, n)
}
hn.createRoot = function (e, t) {
  if (!Op(e)) throw Error(Y(299))
  var n = !1,
    i = '',
    o = L1
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Tp(e, 1, !1, null, null, n, !1, i, o)),
    (e[Tr] = t.current),
    Vs(e.nodeType === 8 ? e.parentNode : e),
    new Pp(t)
  )
}
hn.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(Y(188))
      : ((e = Object.keys(e).join(',')), Error(Y(268, e)))
  return (e = X0(t)), (e = e === null ? null : e.stateNode), e
}
hn.flushSync = function (e) {
  return aa(e)
}
hn.hydrate = function (e, t, n) {
  if (!Hc(t)) throw Error(Y(200))
  return Wc(null, e, t, !0, n)
}
hn.hydrateRoot = function (e, t, n) {
  if (!Op(e)) throw Error(Y(405))
  var i = (n != null && n.hydratedSources) || null,
    o = !1,
    l = '',
    c = L1
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
    (t = R1(t, null, e, 1, n ?? null, o, !1, l, c)),
    (e[Tr] = t.current),
    Vs(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Vc(t)
}
hn.render = function (e, t, n) {
  if (!Hc(t)) throw Error(Y(200))
  return Wc(null, e, t, !1, n)
}
hn.unmountComponentAtNode = function (e) {
  if (!Hc(e)) throw Error(Y(40))
  return e._reactRootContainer
    ? (aa(function () {
        Wc(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Tr] = null)
        })
      }),
      !0)
    : !1
}
hn.unstable_batchedUpdates = Sp
hn.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Hc(n)) throw Error(Y(200))
  if (e == null || e._reactInternals === void 0) throw Error(Y(38))
  return Wc(e, t, n, !1, i)
}
hn.version = '18.2.0-next-9e3b772b8-20220608'
function I1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I1)
    } catch (e) {
      console.error(e)
    }
}
I1(), (O0.exports = hn)
var Yx = O0.exports,
  zv = Yx
;(zh.createRoot = zv.createRoot), (zh.hydrateRoot = zv.hydrateRoot)
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
let Dv = {
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
    Dv = { ...Dv, ...e }
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
const Mv = 'popstate'
function i3(e) {
  e === void 0 && (e = {})
  function t(i, o) {
    let { pathname: l, search: c, hash: d } = i.location
    return Ad(
      '',
      { pathname: l, search: c, hash: d },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function n(i, o) {
    return typeof o == 'string' ? o : j1(o)
  }
  return o3(t, n, null, e)
}
function N1(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function a3() {
  return Math.random().toString(36).substr(2, 8)
}
function Fv(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Ad(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    wc(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? z1(t) : t,
      { state: n, key: (t && t.key) || i || a3() }
    )
  )
}
function j1(e) {
  let { pathname: t = '/', search: n = '', hash: i = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    i && i !== '#' && (t += i.charAt(0) === '#' ? i : '#' + i),
    t
  )
}
function z1(e) {
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
function o3(e, t, n, i) {
  i === void 0 && (i = {})
  let { window: o = document.defaultView, v5Compat: l = !1 } = i,
    c = o.history,
    d = Xi.Pop,
    g = null,
    w = P()
  w == null && ((w = 0), c.replaceState(wc({}, c.state, { idx: w }), ''))
  function P() {
    return (c.state || { idx: null }).idx
  }
  function O() {
    d = Xi.Pop
    let J = P(),
      L = J == null ? null : J - w
    ;(w = J), g && g({ action: d, location: W.location, delta: L })
  }
  function k(J, L) {
    d = Xi.Push
    let x = Ad(W.location, J, L)
    n && n(x, J), (w = P() + 1)
    let I = Fv(x, w),
      B = W.createHref(x)
    try {
      c.pushState(I, '', B)
    } catch (G) {
      if (G instanceof DOMException && G.name === 'DataCloneError') throw G
      o.location.assign(B)
    }
    l && g && g({ action: d, location: W.location, delta: 1 })
  }
  function V(J, L) {
    d = Xi.Replace
    let x = Ad(W.location, J, L)
    n && n(x, J), (w = P())
    let I = Fv(x, w),
      B = W.createHref(x)
    c.replaceState(I, '', B),
      l && g && g({ action: d, location: W.location, delta: 0 })
  }
  function F(J) {
    let L = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      x = typeof J == 'string' ? J : j1(J)
    return (
      (x = x.replace(/ $/, '%20')),
      N1(
        L,
        'No window.location.(origin|href) available to create URL for href: ' +
          x
      ),
      new URL(x, L)
    )
  }
  let W = {
    get action() {
      return d
    },
    get location() {
      return e(o, c)
    },
    listen(J) {
      if (g) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(Mv, O),
        (g = J),
        () => {
          o.removeEventListener(Mv, O), (g = null)
        }
      )
    },
    createHref(J) {
      return t(o, J)
    },
    createURL: F,
    encodeLocation(J) {
      let L = F(J)
      return { pathname: L.pathname, search: L.search, hash: L.hash }
    },
    push: k,
    replace: V,
    go(J) {
      return c.go(J)
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
const D1 = ['post', 'put', 'patch', 'delete']
new Set(D1)
const l3 = ['get', ...D1]
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
 */ function Pd() {
  return (
    (Pd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    Pd.apply(this, arguments)
  )
}
const u3 = At.createContext(null),
  M1 = At.createContext(null)
function c3() {
  return At.useContext(M1) != null
}
function f3(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: o = Xi.Pop,
    navigator: l,
    static: c = !1,
    future: d,
  } = e
  c3() && N1(!1)
  let g = t.replace(/^\/*/, '/'),
    w = At.useMemo(
      () => ({
        basename: g,
        navigator: l,
        static: c,
        future: Pd({ v7_relativeSplatPath: !1 }, d),
      }),
      [g, d, l, c]
    )
  typeof i == 'string' && (i = z1(i))
  let {
      pathname: P = '/',
      search: O = '',
      hash: k = '',
      state: V = null,
      key: F = 'default',
    } = i,
    W = At.useMemo(() => {
      let J = s3(P, g)
      return J == null
        ? null
        : {
            location: { pathname: J, search: O, hash: k, state: V, key: F },
            navigationType: o,
          }
    }, [g, P, O, k, V, F, o])
  return W == null
    ? null
    : At.createElement(
        u3.Provider,
        { value: w },
        At.createElement(M1.Provider, { children: n, value: W })
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
  let { basename: t, children: n, future: i, window: o } = e,
    l = At.useRef()
  l.current == null && (l.current = i3({ window: o, v5Compat: !0 }))
  let c = l.current,
    [d, g] = At.useState({ action: c.action, location: c.location }),
    { v7_startTransition: w } = i || {},
    P = At.useCallback(
      (O) => {
        w && $v ? $v(() => g(O)) : g(O)
      },
      [g, w]
    )
  return (
    At.useLayoutEffect(() => c.listen(P), [c, P]),
    At.createElement(f3, {
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
var Vv
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Vv || (Vv = {}))
var Hv = {}
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
      let o = e.charCodeAt(i)
      o < 128
        ? (t[n++] = o)
        : o < 2048
        ? ((t[n++] = (o >> 6) | 192), (t[n++] = (o & 63) | 128))
        : (o & 64512) === 55296 &&
          i + 1 < e.length &&
          (e.charCodeAt(i + 1) & 64512) === 56320
        ? ((o = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++i) & 1023)),
          (t[n++] = (o >> 18) | 240),
          (t[n++] = ((o >> 12) & 63) | 128),
          (t[n++] = ((o >> 6) & 63) | 128),
          (t[n++] = (o & 63) | 128))
        : ((t[n++] = (o >> 12) | 224),
          (t[n++] = ((o >> 6) & 63) | 128),
          (t[n++] = (o & 63) | 128))
    }
    return t
  },
  g3 = function (e) {
    const t = []
    let n = 0,
      i = 0
    for (; n < e.length; ) {
      const o = e[n++]
      if (o < 128) t[i++] = String.fromCharCode(o)
      else if (o > 191 && o < 224) {
        const l = e[n++]
        t[i++] = String.fromCharCode(((o & 31) << 6) | (l & 63))
      } else if (o > 239 && o < 365) {
        const l = e[n++],
          c = e[n++],
          d = e[n++],
          g =
            (((o & 7) << 18) | ((l & 63) << 12) | ((c & 63) << 6) | (d & 63)) -
            65536
        ;(t[i++] = String.fromCharCode(55296 + (g >> 10))),
          (t[i++] = String.fromCharCode(56320 + (g & 1023)))
      } else {
        const l = e[n++],
          c = e[n++]
        t[i++] = String.fromCharCode(
          ((o & 15) << 12) | ((l & 63) << 6) | (c & 63)
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
      for (let o = 0; o < e.length; o += 3) {
        const l = e[o],
          c = o + 1 < e.length,
          d = c ? e[o + 1] : 0,
          g = o + 2 < e.length,
          w = g ? e[o + 2] : 0,
          P = l >> 2,
          O = ((l & 3) << 4) | (d >> 4)
        let k = ((d & 15) << 2) | (w >> 6),
          V = w & 63
        g || ((V = 64), c || (k = 64)), i.push(n[P], n[O], n[k], n[V])
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
      for (let o = 0; o < e.length; ) {
        const l = n[e.charAt(o++)],
          c = o < e.length ? n[e.charAt(o)] : 0
        ++o
        const d = o < e.length ? n[e.charAt(o)] : 64
        ++o
        const g = o < e.length ? n[e.charAt(o)] : 64
        if ((++o, l == null || c == null || d == null || g == null))
          throw new m3()
        const w = (l << 2) | (c >> 4)
        if ((i.push(w), d !== 64)) {
          const P = ((c << 4) & 240) | (d >> 2)
          if ((i.push(P), g !== 64)) {
            const O = ((d << 6) & 192) | g
            i.push(O)
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
  _c = function (e) {
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
  _3 = () => {
    if (typeof process > 'u' || typeof Hv > 'u') return
    const e = Hv.__FIREBASE_DEFAULTS__
    if (e) return JSON.parse(e)
  },
  k3 = () => {
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
      return w3() || _3() || k3()
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
 */ function C3(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    )
  const n = { alg: 'none', type: 'JWT' },
    i = t || 'demo-project',
    o = e.iat || 0,
    l = e.sub || e.user_id
  if (!l)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
  const c = Object.assign(
    {
      iss: `https://securetoken.google.com/${i}`,
      aud: i,
      iat: o,
      exp: o + 3600,
      auth_time: o,
      sub: l,
      user_id: l,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    e
  )
  return [_c(JSON.stringify(n)), _c(JSON.stringify(c)), ''].join('.')
}
function T3() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function A3() {
  return new Promise((e, t) => {
    try {
      let n = !0
      const i = 'validate-browser-context-for-indexeddb-analytics-module',
        o = self.indexedDB.open(i)
      ;(o.onsuccess = () => {
        o.result.close(), n || self.indexedDB.deleteDatabase(i), e(!0)
      }),
        (o.onupgradeneeded = () => {
          n = !1
        }),
        (o.onerror = () => {
          var l
          t(((l = o.error) === null || l === void 0 ? void 0 : l.message) || '')
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
 */ const P3 = 'FirebaseError'
class vo extends Error {
  constructor(t, n, i) {
    super(n),
      (this.code = t),
      (this.customData = i),
      (this.name = P3),
      Object.setPrototypeOf(this, vo.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, V1.prototype.create)
  }
}
class V1 {
  constructor(t, n, i) {
    ;(this.service = t), (this.serviceName = n), (this.errors = i)
  }
  create(t, ...n) {
    const i = n[0] || {},
      o = `${this.service}/${t}`,
      l = this.errors[t],
      c = l ? O3(l, i) : 'Error',
      d = `${this.serviceName}: ${c} (${o}).`
    return new vo(o, d, i)
  }
}
function O3(e, t) {
  return e.replace(R3, (n, i) => {
    const o = t[i]
    return o != null ? String(o) : `<${i}?>`
  })
}
const R3 = /\{\$([^}]+)}/g
function Od(e, t) {
  if (e === t) return !0
  const n = Object.keys(e),
    i = Object.keys(t)
  for (const o of n) {
    if (!i.includes(o)) return !1
    const l = e[o],
      c = t[o]
    if (Wv(l) && Wv(c)) {
      if (!Od(l, c)) return !1
    } else if (l !== c) return !1
  }
  for (const o of i) if (!n.includes(o)) return !1
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
 */ const Qi = '[DEFAULT]'
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
 */ class L3 {
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
          const o = this.getOrInitializeService({ instanceIdentifier: n })
          o && i.resolve(o)
        } catch {}
    }
    return this.instancesDeferred.get(n).promise
  }
  getImmediate(t) {
    var n
    const i = this.normalizeInstanceIdentifier(t?.identifier),
      o = (n = t?.optional) !== null && n !== void 0 ? n : !1
    if (this.isInitialized(i) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: i })
      } catch (l) {
        if (o) return null
        throw l
      }
    else {
      if (o) return null
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
      if (N3(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Qi })
        } catch {}
      for (const [n, i] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(n)
        try {
          const l = this.getOrInitializeService({ instanceIdentifier: o })
          i.resolve(l)
        } catch {}
      }
    }
  }
  clearInstance(t = Qi) {
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
  isInitialized(t = Qi) {
    return this.instances.has(t)
  }
  getOptions(t = Qi) {
    return this.instancesOptions.get(t) || {}
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      i = this.normalizeInstanceIdentifier(t.instanceIdentifier)
    if (this.isInitialized(i))
      throw Error(`${this.name}(${i}) has already been initialized`)
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`)
    const o = this.getOrInitializeService({ instanceIdentifier: i, options: n })
    for (const [l, c] of this.instancesDeferred.entries()) {
      const d = this.normalizeInstanceIdentifier(l)
      i === d && c.resolve(o)
    }
    return o
  }
  onInit(t, n) {
    var i
    const o = this.normalizeInstanceIdentifier(n),
      l =
        (i = this.onInitCallbacks.get(o)) !== null && i !== void 0
          ? i
          : new Set()
    l.add(t), this.onInitCallbacks.set(o, l)
    const c = this.instances.get(o)
    return (
      c && t(c, o),
      () => {
        l.delete(t)
      }
    )
  }
  invokeOnInitCallbacks(t, n) {
    const i = this.onInitCallbacks.get(n)
    if (i)
      for (const o of i)
        try {
          o(t, n)
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let i = this.instances.get(t)
    if (
      !i &&
      this.component &&
      ((i = this.component.instanceFactory(this.container, {
        instanceIdentifier: I3(t),
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
  normalizeInstanceIdentifier(t = Qi) {
    return this.component ? (this.component.multipleInstances ? t : Qi) : t
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
  }
}
function I3(e) {
  return e === Qi ? void 0 : e
}
function N3(e) {
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
 */ class j3 {
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
    const n = new L3(t, this)
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
 */ var Ne
;(function (e) {
  ;(e[(e.DEBUG = 0)] = 'DEBUG'),
    (e[(e.VERBOSE = 1)] = 'VERBOSE'),
    (e[(e.INFO = 2)] = 'INFO'),
    (e[(e.WARN = 3)] = 'WARN'),
    (e[(e.ERROR = 4)] = 'ERROR'),
    (e[(e.SILENT = 5)] = 'SILENT')
})(Ne || (Ne = {}))
const z3 = {
    debug: Ne.DEBUG,
    verbose: Ne.VERBOSE,
    info: Ne.INFO,
    warn: Ne.WARN,
    error: Ne.ERROR,
    silent: Ne.SILENT,
  },
  D3 = Ne.INFO,
  M3 = {
    [Ne.DEBUG]: 'log',
    [Ne.VERBOSE]: 'log',
    [Ne.INFO]: 'info',
    [Ne.WARN]: 'warn',
    [Ne.ERROR]: 'error',
  },
  F3 = (e, t, ...n) => {
    if (t < e.logLevel) return
    const i = new Date().toISOString(),
      o = M3[t]
    if (o) console[o](`[${i}]  ${e.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      )
  }
let H1 = class {
  constructor(e) {
    ;(this.name = e),
      (this._logLevel = D3),
      (this._logHandler = F3),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(e) {
    if (!(e in Ne))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
    this._logLevel = e
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? z3[e] : e
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
    this._userLogHandler && this._userLogHandler(this, Ne.DEBUG, ...e),
      this._logHandler(this, Ne.DEBUG, ...e)
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, Ne.VERBOSE, ...e),
      this._logHandler(this, Ne.VERBOSE, ...e)
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, Ne.INFO, ...e),
      this._logHandler(this, Ne.INFO, ...e)
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, Ne.WARN, ...e),
      this._logHandler(this, Ne.WARN, ...e)
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, Ne.ERROR, ...e),
      this._logHandler(this, Ne.ERROR, ...e)
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
  Rd = new WeakMap(),
  q1 = new WeakMap(),
  Ph = new WeakMap(),
  Rp = new WeakMap()
function V3(e) {
  const t = new Promise((n, i) => {
    const o = () => {
        e.removeEventListener('success', l), e.removeEventListener('error', c)
      },
      l = () => {
        n(vi(e.result)), o()
      },
      c = () => {
        i(e.error), o()
      }
    e.addEventListener('success', l), e.addEventListener('error', c)
  })
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && W1.set(n, e)
      })
      .catch(() => {}),
    Rp.set(t, e),
    t
  )
}
function H3(e) {
  if (Rd.has(e)) return
  const t = new Promise((n, i) => {
    const o = () => {
        e.removeEventListener('complete', l),
          e.removeEventListener('error', c),
          e.removeEventListener('abort', c)
      },
      l = () => {
        n(), o()
      },
      c = () => {
        i(e.error || new DOMException('AbortError', 'AbortError')), o()
      }
    e.addEventListener('complete', l),
      e.addEventListener('error', c),
      e.addEventListener('abort', c)
  })
  Rd.set(e, t)
}
let Ld = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return Rd.get(e)
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
  Ld = e(Ld)
}
function q3(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const i = e.call(Oh(this), t, ...n)
        return q1.set(i, t.sort ? t.sort() : [t]), vi(i)
      }
    : B3().includes(e)
    ? function (...t) {
        return e.apply(Oh(this), t), vi(W1.get(this))
      }
    : function (...t) {
        return vi(e.apply(Oh(this), t))
      }
}
function K3(e) {
  return typeof e == 'function'
    ? q3(e)
    : (e instanceof IDBTransaction && H3(e), U3(e, $3()) ? new Proxy(e, Ld) : e)
}
function vi(e) {
  if (e instanceof IDBRequest) return V3(e)
  if (Ph.has(e)) return Ph.get(e)
  const t = K3(e)
  return t !== e && (Ph.set(e, t), Rp.set(t, e)), t
}
const Oh = (e) => Rp.get(e)
function Q3(e, t, { blocked: n, upgrade: i, blocking: o, terminated: l } = {}) {
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
          o &&
            g.addEventListener('versionchange', (w) =>
              o(w.oldVersion, w.newVersion, w)
            )
      })
      .catch(() => {}),
    d
  )
}
const G3 = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  J3 = ['put', 'add', 'delete', 'clear'],
  Rh = new Map()
function Qv(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return
  if (Rh.get(t)) return Rh.get(t)
  const n = t.replace(/FromIndex$/, ''),
    i = t !== n,
    o = J3.includes(n)
  if (
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || G3.includes(n))
  )
    return
  const l = async function (c, ...d) {
    const g = this.transaction(c, o ? 'readwrite' : 'readonly')
    let w = g.store
    return (
      i && (w = w.index(d.shift())),
      (await Promise.all([w[n](...d), o && g.done]))[0]
    )
  }
  return Rh.set(t, l), l
}
W3((e) => ({
  ...e,
  get: (t, n, i) => Qv(t, n) || e.get(t, n, i),
  has: (t, n) => !!Qv(t, n) || e.has(t, n),
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
 */ class Y3 {
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
const Id = '@firebase/app',
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
 */ const Or = new H1('@firebase/app'),
  Z3 = '@firebase/app-compat',
  e9 = '@firebase/analytics-compat',
  t9 = '@firebase/analytics',
  n9 = '@firebase/app-check-compat',
  r9 = '@firebase/app-check',
  i9 = '@firebase/auth',
  a9 = '@firebase/auth-compat',
  o9 = '@firebase/database',
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
  _9 = '@firebase/firestore',
  k9 = '@firebase/vertexai',
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
 */ const Nd = '[DEFAULT]',
  C9 = {
    [Id]: 'fire-core',
    [Z3]: 'fire-core-compat',
    [t9]: 'fire-analytics',
    [e9]: 'fire-analytics-compat',
    [r9]: 'fire-app-check',
    [n9]: 'fire-app-check-compat',
    [i9]: 'fire-auth',
    [a9]: 'fire-auth-compat',
    [o9]: 'fire-rtdb',
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
    [_9]: 'fire-fst',
    [S9]: 'fire-fst-compat',
    [k9]: 'fire-vertex',
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
 */ const kc = new Map(),
  T9 = new Map(),
  jd = new Map()
function Jv(e, t) {
  try {
    e.container.addComponent(t)
  } catch (n) {
    Or.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    )
  }
}
function Sc(e) {
  const t = e.name
  if (jd.has(t))
    return (
      Or.debug(`There were multiple attempts to register component ${t}.`), !1
    )
  jd.set(t, e)
  for (const n of kc.values()) Jv(n, e)
  for (const n of T9.values()) Jv(n, e)
  return !0
}
function A9(e, t) {
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
 */ const P9 = {
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
  yi = new V1('app', 'Firebase', P9)
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
 */ class O9 {
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
 */ const R9 = x9
function K1(e, t = {}) {
  let n = e
  typeof t != 'object' && (t = { name: t })
  const i = Object.assign({ name: Nd, automaticDataCollectionEnabled: !1 }, t),
    o = i.name
  if (typeof o != 'string' || !o)
    throw yi.create('bad-app-name', { appName: String(o) })
  if ((n || (n = B1()), !n)) throw yi.create('no-options')
  const l = kc.get(o)
  if (l) {
    if (Od(n, l.options) && Od(i, l.config)) return l
    throw yi.create('duplicate-app', { appName: o })
  }
  const c = new j3(o)
  for (const g of jd.values()) c.addComponent(g)
  const d = new O9(n, i, c)
  return kc.set(o, d), d
}
function L9(e = Nd) {
  const t = kc.get(e)
  if (!t && e === Nd && B1()) return K1()
  if (!t) throw yi.create('no-app', { appName: e })
  return t
}
function io(e, t, n) {
  var i
  let o = (i = C9[e]) !== null && i !== void 0 ? i : e
  n && (o += `-${n}`)
  const l = o.match(/\s|\//),
    c = t.match(/\s|\//)
  if (l || c) {
    const d = [`Unable to register library "${o}" with version "${t}":`]
    l &&
      d.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`
      ),
      l && c && d.push('and'),
      c &&
        d.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Or.warn(d.join(' '))
    return
  }
  Sc(new Xs(`${o}-version`, () => ({ library: o, version: t }), 'VERSION'))
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
 */ const I9 = 'firebase-heartbeat-database',
  N9 = 1,
  Zs = 'firebase-heartbeat-store'
let Lh = null
function Q1() {
  return (
    Lh ||
      (Lh = Q3(I9, N9, {
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
    Lh
  )
}
async function j9(e) {
  try {
    const t = (await Q1()).transaction(Zs),
      n = await t.objectStore(Zs).get(G1(e))
    return await t.done, n
  } catch (t) {
    if (t instanceof vo) Or.warn(t.message)
    else {
      const n = yi.create('idb-get', { originalErrorMessage: t?.message })
      Or.warn(n.message)
    }
  }
}
async function Yv(e, t) {
  try {
    const n = (await Q1()).transaction(Zs, 'readwrite')
    await n.objectStore(Zs).put(t, G1(e)), await n.done
  } catch (n) {
    if (n instanceof vo) Or.warn(n.message)
    else {
      const i = yi.create('idb-set', { originalErrorMessage: n?.message })
      Or.warn(i.message)
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
 */ const z9 = 1024,
  D9 = 30 * 24 * 60 * 60 * 1e3
class M9 {
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
        o = Xv()
      return (((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === o ||
        this._heartbeatsCache.heartbeats.some((l) => l.date === o)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: o, agent: i }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((l) => {
              const c = new Date(l.date).valueOf()
              return Date.now() - c <= D9
            })),
          this._storage.overwrite(this._heartbeatsCache))
    } catch (i) {
      Or.warn(i)
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
        { heartbeatsToSend: i, unsentEntries: o } = F9(
          this._heartbeatsCache.heartbeats
        ),
        l = _c(JSON.stringify({ version: 2, heartbeats: i }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        o.length > 0
          ? ((this._heartbeatsCache.heartbeats = o),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        l
      )
    } catch (n) {
      return Or.warn(n), ''
    }
  }
}
function Xv() {
  return new Date().toISOString().substring(0, 10)
}
function F9(e, t = z9) {
  const n = []
  let i = e.slice()
  for (const o of e) {
    const l = n.find((c) => c.agent === o.agent)
    if (l) {
      if ((l.dates.push(o.date), Zv(n) > t)) {
        l.dates.pop()
        break
      }
    } else if ((n.push({ agent: o.agent, dates: [o.date] }), Zv(n) > t)) {
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
    return T3()
      ? A3()
          .then(() => !0)
          .catch(() => !1)
      : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await j9(this.app)
      return t?.heartbeats ? t : { heartbeats: [] }
    } else return { heartbeats: [] }
  }
  async overwrite(t) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return Yv(this.app, {
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
      return Yv(this.app, {
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
  return _c(JSON.stringify({ version: 2, heartbeats: e })).length
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
  Sc(new Xs('platform-logger', (t) => new Y3(t), 'PRIVATE')),
    Sc(new Xs('heartbeat', (t) => new M9(t), 'PRIVATE')),
    io(Id, Gv, e),
    io(Id, Gv, 'esm2017'),
    io('fire-js', '')
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
*/ var J1
;(function () {
  var e
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function t(S, _) {
    function C() {}
    ;(C.prototype = _.prototype),
      (S.D = _.prototype),
      (S.prototype = new C()),
      (S.prototype.constructor = S),
      (S.C = function (A, N, M) {
        for (
          var T = Array(arguments.length - 2), Je = 2;
          Je < arguments.length;
          Je++
        )
          T[Je - 2] = arguments[Je]
        return _.prototype[N].apply(A, T)
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
  function o(S, _, C) {
    C || (C = 0)
    var A = Array(16)
    if (typeof _ == 'string')
      for (var N = 0; 16 > N; ++N)
        A[N] =
          _.charCodeAt(C++) |
          (_.charCodeAt(C++) << 8) |
          (_.charCodeAt(C++) << 16) |
          (_.charCodeAt(C++) << 24)
    else
      for (N = 0; 16 > N; ++N)
        A[N] = _[C++] | (_[C++] << 8) | (_[C++] << 16) | (_[C++] << 24)
    ;(_ = S.g[0]), (C = S.g[1]), (N = S.g[2])
    var M = S.g[3],
      T = (_ + (M ^ (C & (N ^ M))) + A[0] + 3614090360) & 4294967295
    ;(_ = C + (((T << 7) & 4294967295) | (T >>> 25))),
      (T = (M + (N ^ (_ & (C ^ N))) + A[1] + 3905402710) & 4294967295),
      (M = _ + (((T << 12) & 4294967295) | (T >>> 20))),
      (T = (N + (C ^ (M & (_ ^ C))) + A[2] + 606105819) & 4294967295),
      (N = M + (((T << 17) & 4294967295) | (T >>> 15))),
      (T = (C + (_ ^ (N & (M ^ _))) + A[3] + 3250441966) & 4294967295),
      (C = N + (((T << 22) & 4294967295) | (T >>> 10))),
      (T = (_ + (M ^ (C & (N ^ M))) + A[4] + 4118548399) & 4294967295),
      (_ = C + (((T << 7) & 4294967295) | (T >>> 25))),
      (T = (M + (N ^ (_ & (C ^ N))) + A[5] + 1200080426) & 4294967295),
      (M = _ + (((T << 12) & 4294967295) | (T >>> 20))),
      (T = (N + (C ^ (M & (_ ^ C))) + A[6] + 2821735955) & 4294967295),
      (N = M + (((T << 17) & 4294967295) | (T >>> 15))),
      (T = (C + (_ ^ (N & (M ^ _))) + A[7] + 4249261313) & 4294967295),
      (C = N + (((T << 22) & 4294967295) | (T >>> 10))),
      (T = (_ + (M ^ (C & (N ^ M))) + A[8] + 1770035416) & 4294967295),
      (_ = C + (((T << 7) & 4294967295) | (T >>> 25))),
      (T = (M + (N ^ (_ & (C ^ N))) + A[9] + 2336552879) & 4294967295),
      (M = _ + (((T << 12) & 4294967295) | (T >>> 20))),
      (T = (N + (C ^ (M & (_ ^ C))) + A[10] + 4294925233) & 4294967295),
      (N = M + (((T << 17) & 4294967295) | (T >>> 15))),
      (T = (C + (_ ^ (N & (M ^ _))) + A[11] + 2304563134) & 4294967295),
      (C = N + (((T << 22) & 4294967295) | (T >>> 10))),
      (T = (_ + (M ^ (C & (N ^ M))) + A[12] + 1804603682) & 4294967295),
      (_ = C + (((T << 7) & 4294967295) | (T >>> 25))),
      (T = (M + (N ^ (_ & (C ^ N))) + A[13] + 4254626195) & 4294967295),
      (M = _ + (((T << 12) & 4294967295) | (T >>> 20))),
      (T = (N + (C ^ (M & (_ ^ C))) + A[14] + 2792965006) & 4294967295),
      (N = M + (((T << 17) & 4294967295) | (T >>> 15))),
      (T = (C + (_ ^ (N & (M ^ _))) + A[15] + 1236535329) & 4294967295),
      (C = N + (((T << 22) & 4294967295) | (T >>> 10))),
      (T = (_ + (N ^ (M & (C ^ N))) + A[1] + 4129170786) & 4294967295),
      (_ = C + (((T << 5) & 4294967295) | (T >>> 27))),
      (T = (M + (C ^ (N & (_ ^ C))) + A[6] + 3225465664) & 4294967295),
      (M = _ + (((T << 9) & 4294967295) | (T >>> 23))),
      (T = (N + (_ ^ (C & (M ^ _))) + A[11] + 643717713) & 4294967295),
      (N = M + (((T << 14) & 4294967295) | (T >>> 18))),
      (T = (C + (M ^ (_ & (N ^ M))) + A[0] + 3921069994) & 4294967295),
      (C = N + (((T << 20) & 4294967295) | (T >>> 12))),
      (T = (_ + (N ^ (M & (C ^ N))) + A[5] + 3593408605) & 4294967295),
      (_ = C + (((T << 5) & 4294967295) | (T >>> 27))),
      (T = (M + (C ^ (N & (_ ^ C))) + A[10] + 38016083) & 4294967295),
      (M = _ + (((T << 9) & 4294967295) | (T >>> 23))),
      (T = (N + (_ ^ (C & (M ^ _))) + A[15] + 3634488961) & 4294967295),
      (N = M + (((T << 14) & 4294967295) | (T >>> 18))),
      (T = (C + (M ^ (_ & (N ^ M))) + A[4] + 3889429448) & 4294967295),
      (C = N + (((T << 20) & 4294967295) | (T >>> 12))),
      (T = (_ + (N ^ (M & (C ^ N))) + A[9] + 568446438) & 4294967295),
      (_ = C + (((T << 5) & 4294967295) | (T >>> 27))),
      (T = (M + (C ^ (N & (_ ^ C))) + A[14] + 3275163606) & 4294967295),
      (M = _ + (((T << 9) & 4294967295) | (T >>> 23))),
      (T = (N + (_ ^ (C & (M ^ _))) + A[3] + 4107603335) & 4294967295),
      (N = M + (((T << 14) & 4294967295) | (T >>> 18))),
      (T = (C + (M ^ (_ & (N ^ M))) + A[8] + 1163531501) & 4294967295),
      (C = N + (((T << 20) & 4294967295) | (T >>> 12))),
      (T = (_ + (N ^ (M & (C ^ N))) + A[13] + 2850285829) & 4294967295),
      (_ = C + (((T << 5) & 4294967295) | (T >>> 27))),
      (T = (M + (C ^ (N & (_ ^ C))) + A[2] + 4243563512) & 4294967295),
      (M = _ + (((T << 9) & 4294967295) | (T >>> 23))),
      (T = (N + (_ ^ (C & (M ^ _))) + A[7] + 1735328473) & 4294967295),
      (N = M + (((T << 14) & 4294967295) | (T >>> 18))),
      (T = (C + (M ^ (_ & (N ^ M))) + A[12] + 2368359562) & 4294967295),
      (C = N + (((T << 20) & 4294967295) | (T >>> 12))),
      (T = (_ + (C ^ N ^ M) + A[5] + 4294588738) & 4294967295),
      (_ = C + (((T << 4) & 4294967295) | (T >>> 28))),
      (T = (M + (_ ^ C ^ N) + A[8] + 2272392833) & 4294967295),
      (M = _ + (((T << 11) & 4294967295) | (T >>> 21))),
      (T = (N + (M ^ _ ^ C) + A[11] + 1839030562) & 4294967295),
      (N = M + (((T << 16) & 4294967295) | (T >>> 16))),
      (T = (C + (N ^ M ^ _) + A[14] + 4259657740) & 4294967295),
      (C = N + (((T << 23) & 4294967295) | (T >>> 9))),
      (T = (_ + (C ^ N ^ M) + A[1] + 2763975236) & 4294967295),
      (_ = C + (((T << 4) & 4294967295) | (T >>> 28))),
      (T = (M + (_ ^ C ^ N) + A[4] + 1272893353) & 4294967295),
      (M = _ + (((T << 11) & 4294967295) | (T >>> 21))),
      (T = (N + (M ^ _ ^ C) + A[7] + 4139469664) & 4294967295),
      (N = M + (((T << 16) & 4294967295) | (T >>> 16))),
      (T = (C + (N ^ M ^ _) + A[10] + 3200236656) & 4294967295),
      (C = N + (((T << 23) & 4294967295) | (T >>> 9))),
      (T = (_ + (C ^ N ^ M) + A[13] + 681279174) & 4294967295),
      (_ = C + (((T << 4) & 4294967295) | (T >>> 28))),
      (T = (M + (_ ^ C ^ N) + A[0] + 3936430074) & 4294967295),
      (M = _ + (((T << 11) & 4294967295) | (T >>> 21))),
      (T = (N + (M ^ _ ^ C) + A[3] + 3572445317) & 4294967295),
      (N = M + (((T << 16) & 4294967295) | (T >>> 16))),
      (T = (C + (N ^ M ^ _) + A[6] + 76029189) & 4294967295),
      (C = N + (((T << 23) & 4294967295) | (T >>> 9))),
      (T = (_ + (C ^ N ^ M) + A[9] + 3654602809) & 4294967295),
      (_ = C + (((T << 4) & 4294967295) | (T >>> 28))),
      (T = (M + (_ ^ C ^ N) + A[12] + 3873151461) & 4294967295),
      (M = _ + (((T << 11) & 4294967295) | (T >>> 21))),
      (T = (N + (M ^ _ ^ C) + A[15] + 530742520) & 4294967295),
      (N = M + (((T << 16) & 4294967295) | (T >>> 16))),
      (T = (C + (N ^ M ^ _) + A[2] + 3299628645) & 4294967295),
      (C = N + (((T << 23) & 4294967295) | (T >>> 9))),
      (T = (_ + (N ^ (C | ~M)) + A[0] + 4096336452) & 4294967295),
      (_ = C + (((T << 6) & 4294967295) | (T >>> 26))),
      (T = (M + (C ^ (_ | ~N)) + A[7] + 1126891415) & 4294967295),
      (M = _ + (((T << 10) & 4294967295) | (T >>> 22))),
      (T = (N + (_ ^ (M | ~C)) + A[14] + 2878612391) & 4294967295),
      (N = M + (((T << 15) & 4294967295) | (T >>> 17))),
      (T = (C + (M ^ (N | ~_)) + A[5] + 4237533241) & 4294967295),
      (C = N + (((T << 21) & 4294967295) | (T >>> 11))),
      (T = (_ + (N ^ (C | ~M)) + A[12] + 1700485571) & 4294967295),
      (_ = C + (((T << 6) & 4294967295) | (T >>> 26))),
      (T = (M + (C ^ (_ | ~N)) + A[3] + 2399980690) & 4294967295),
      (M = _ + (((T << 10) & 4294967295) | (T >>> 22))),
      (T = (N + (_ ^ (M | ~C)) + A[10] + 4293915773) & 4294967295),
      (N = M + (((T << 15) & 4294967295) | (T >>> 17))),
      (T = (C + (M ^ (N | ~_)) + A[1] + 2240044497) & 4294967295),
      (C = N + (((T << 21) & 4294967295) | (T >>> 11))),
      (T = (_ + (N ^ (C | ~M)) + A[8] + 1873313359) & 4294967295),
      (_ = C + (((T << 6) & 4294967295) | (T >>> 26))),
      (T = (M + (C ^ (_ | ~N)) + A[15] + 4264355552) & 4294967295),
      (M = _ + (((T << 10) & 4294967295) | (T >>> 22))),
      (T = (N + (_ ^ (M | ~C)) + A[6] + 2734768916) & 4294967295),
      (N = M + (((T << 15) & 4294967295) | (T >>> 17))),
      (T = (C + (M ^ (N | ~_)) + A[13] + 1309151649) & 4294967295),
      (C = N + (((T << 21) & 4294967295) | (T >>> 11))),
      (T = (_ + (N ^ (C | ~M)) + A[4] + 4149444226) & 4294967295),
      (_ = C + (((T << 6) & 4294967295) | (T >>> 26))),
      (T = (M + (C ^ (_ | ~N)) + A[11] + 3174756917) & 4294967295),
      (M = _ + (((T << 10) & 4294967295) | (T >>> 22))),
      (T = (N + (_ ^ (M | ~C)) + A[2] + 718787259) & 4294967295),
      (N = M + (((T << 15) & 4294967295) | (T >>> 17))),
      (T = (C + (M ^ (N | ~_)) + A[9] + 3951481745) & 4294967295),
      (S.g[0] = (S.g[0] + _) & 4294967295),
      (S.g[1] =
        (S.g[1] + (N + (((T << 21) & 4294967295) | (T >>> 11)))) & 4294967295),
      (S.g[2] = (S.g[2] + N) & 4294967295),
      (S.g[3] = (S.g[3] + M) & 4294967295)
  }
  ;(i.prototype.u = function (S, _) {
    _ === void 0 && (_ = S.length)
    for (var C = _ - this.blockSize, A = this.B, N = this.h, M = 0; M < _; ) {
      if (N == 0) for (; M <= C; ) o(this, S, M), (M += this.blockSize)
      if (typeof S == 'string') {
        for (; M < _; )
          if (((A[N++] = S.charCodeAt(M++)), N == this.blockSize)) {
            o(this, A), (N = 0)
            break
          }
      } else
        for (; M < _; )
          if (((A[N++] = S[M++]), N == this.blockSize)) {
            o(this, A), (N = 0)
            break
          }
    }
    ;(this.h = N), (this.o += _)
  }),
    (i.prototype.v = function () {
      var S = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      )
      S[0] = 128
      for (var _ = 1; _ < S.length - 8; ++_) S[_] = 0
      var C = 8 * this.o
      for (_ = S.length - 8; _ < S.length; ++_) (S[_] = C & 255), (C /= 256)
      for (this.u(S), S = Array(16), _ = C = 0; 4 > _; ++_)
        for (var A = 0; 32 > A; A += 8) S[C++] = (this.g[_] >>> A) & 255
      return S
    })
  function l(S, _) {
    var C = d
    return Object.prototype.hasOwnProperty.call(C, S) ? C[S] : (C[S] = _(S))
  }
  function c(S, _) {
    this.h = _
    for (var C = [], A = !0, N = S.length - 1; 0 <= N; N--) {
      var M = S[N] | 0
      ;(A && M == _) || ((C[N] = M), (A = !1))
    }
    this.g = C
  }
  var d = {}
  function g(S) {
    return -128 <= S && 128 > S
      ? l(S, function (_) {
          return new c([_ | 0], 0 > _ ? -1 : 0)
        })
      : new c([S | 0], 0 > S ? -1 : 0)
  }
  function w(S) {
    if (isNaN(S) || !isFinite(S)) return O
    if (0 > S) return J(w(-S))
    for (var _ = [], C = 1, A = 0; S >= C; A++)
      (_[A] = (S / C) | 0), (C *= 4294967296)
    return new c(_, 0)
  }
  function P(S, _) {
    if (S.length == 0) throw Error('number format error: empty string')
    if (((_ = _ || 10), 2 > _ || 36 < _))
      throw Error('radix out of range: ' + _)
    if (S.charAt(0) == '-') return J(P(S.substring(1), _))
    if (0 <= S.indexOf('-'))
      throw Error('number format error: interior "-" character')
    for (var C = w(Math.pow(_, 8)), A = O, N = 0; N < S.length; N += 8) {
      var M = Math.min(8, S.length - N),
        T = parseInt(S.substring(N, N + M), _)
      8 > M
        ? ((M = w(Math.pow(_, M))), (A = A.j(M).add(w(T))))
        : ((A = A.j(C)), (A = A.add(w(T))))
    }
    return A
  }
  var O = g(0),
    k = g(1),
    V = g(16777216)
  ;(e = c.prototype),
    (e.m = function () {
      if (W(this)) return -J(this).m()
      for (var S = 0, _ = 1, C = 0; C < this.g.length; C++) {
        var A = this.i(C)
        ;(S += (0 <= A ? A : 4294967296 + A) * _), (_ *= 4294967296)
      }
      return S
    }),
    (e.toString = function (S) {
      if (((S = S || 10), 2 > S || 36 < S))
        throw Error('radix out of range: ' + S)
      if (F(this)) return '0'
      if (W(this)) return '-' + J(this).toString(S)
      for (var _ = w(Math.pow(S, 6)), C = this, A = ''; ; ) {
        var N = B(C, _).g
        C = L(C, N.j(_))
        var M = ((0 < C.g.length ? C.g[0] : C.h) >>> 0).toString(S)
        if (((C = N), F(C))) return M + A
        for (; 6 > M.length; ) M = '0' + M
        A = M + A
      }
    }),
    (e.i = function (S) {
      return 0 > S ? 0 : S < this.g.length ? this.g[S] : this.h
    })
  function F(S) {
    if (S.h != 0) return !1
    for (var _ = 0; _ < S.g.length; _++) if (S.g[_] != 0) return !1
    return !0
  }
  function W(S) {
    return S.h == -1
  }
  e.l = function (S) {
    return (S = L(this, S)), W(S) ? -1 : F(S) ? 0 : 1
  }
  function J(S) {
    for (var _ = S.g.length, C = [], A = 0; A < _; A++) C[A] = ~S.g[A]
    return new c(C, ~S.h).add(k)
  }
  ;(e.abs = function () {
    return W(this) ? J(this) : this
  }),
    (e.add = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], A = 0, N = 0;
        N <= _;
        N++
      ) {
        var M = A + (this.i(N) & 65535) + (S.i(N) & 65535),
          T = (M >>> 16) + (this.i(N) >>> 16) + (S.i(N) >>> 16)
        ;(A = T >>> 16), (M &= 65535), (T &= 65535), (C[N] = (T << 16) | M)
      }
      return new c(C, C[C.length - 1] & -2147483648 ? -1 : 0)
    })
  function L(S, _) {
    return S.add(J(_))
  }
  e.j = function (S) {
    if (F(this) || F(S)) return O
    if (W(this)) return W(S) ? J(this).j(J(S)) : J(J(this).j(S))
    if (W(S)) return J(this.j(J(S)))
    if (0 > this.l(V) && 0 > S.l(V)) return w(this.m() * S.m())
    for (var _ = this.g.length + S.g.length, C = [], A = 0; A < 2 * _; A++)
      C[A] = 0
    for (A = 0; A < this.g.length; A++)
      for (var N = 0; N < S.g.length; N++) {
        var M = this.i(A) >>> 16,
          T = this.i(A) & 65535,
          Je = S.i(N) >>> 16,
          $t = S.i(N) & 65535
        ;(C[2 * A + 2 * N] += T * $t),
          x(C, 2 * A + 2 * N),
          (C[2 * A + 2 * N + 1] += M * $t),
          x(C, 2 * A + 2 * N + 1),
          (C[2 * A + 2 * N + 1] += T * Je),
          x(C, 2 * A + 2 * N + 1),
          (C[2 * A + 2 * N + 2] += M * Je),
          x(C, 2 * A + 2 * N + 2)
      }
    for (A = 0; A < _; A++) C[A] = (C[2 * A + 1] << 16) | C[2 * A]
    for (A = _; A < 2 * _; A++) C[A] = 0
    return new c(C, 0)
  }
  function x(S, _) {
    for (; (S[_] & 65535) != S[_]; )
      (S[_ + 1] += S[_] >>> 16), (S[_] &= 65535), _++
  }
  function I(S, _) {
    ;(this.g = S), (this.h = _)
  }
  function B(S, _) {
    if (F(_)) throw Error('division by zero')
    if (F(S)) return new I(O, O)
    if (W(S)) return (_ = B(J(S), _)), new I(J(_.g), J(_.h))
    if (W(_)) return (_ = B(S, J(_))), new I(J(_.g), _.h)
    if (30 < S.g.length) {
      if (W(S) || W(_))
        throw Error('slowDivide_ only works with positive integers.')
      for (var C = k, A = _; 0 >= A.l(S); ) (C = G(C)), (A = G(A))
      var N = X(C, 1),
        M = X(A, 1)
      for (A = X(A, 2), C = X(C, 2); !F(A); ) {
        var T = M.add(A)
        0 >= T.l(S) && ((N = N.add(C)), (M = T)), (A = X(A, 1)), (C = X(C, 1))
      }
      return (_ = L(S, N.j(_))), new I(N, _)
    }
    for (N = O; 0 <= S.l(_); ) {
      for (
        C = Math.max(1, Math.floor(S.m() / _.m())),
          A = Math.ceil(Math.log(C) / Math.LN2),
          A = 48 >= A ? 1 : Math.pow(2, A - 48),
          M = w(C),
          T = M.j(_);
        W(T) || 0 < T.l(S);

      )
        (C -= A), (M = w(C)), (T = M.j(_))
      F(M) && (M = k), (N = N.add(M)), (S = L(S, T))
    }
    return new I(N, S)
  }
  ;(e.A = function (S) {
    return B(this, S).h
  }),
    (e.and = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], A = 0;
        A < _;
        A++
      )
        C[A] = this.i(A) & S.i(A)
      return new c(C, this.h & S.h)
    }),
    (e.or = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], A = 0;
        A < _;
        A++
      )
        C[A] = this.i(A) | S.i(A)
      return new c(C, this.h | S.h)
    }),
    (e.xor = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], A = 0;
        A < _;
        A++
      )
        C[A] = this.i(A) ^ S.i(A)
      return new c(C, this.h ^ S.h)
    })
  function G(S) {
    for (var _ = S.g.length + 1, C = [], A = 0; A < _; A++)
      C[A] = (S.i(A) << 1) | (S.i(A - 1) >>> 31)
    return new c(C, S.h)
  }
  function X(S, _) {
    var C = _ >> 5
    _ %= 32
    for (var A = S.g.length - C, N = [], M = 0; M < A; M++)
      N[M] =
        0 < _ ? (S.i(M + C) >>> _) | (S.i(M + C + 1) << (32 - _)) : S.i(M + C)
    return new c(N, S.h)
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
    (c.fromString = P),
    (J1 = c)
}).apply(
  typeof e0 < 'u'
    ? e0
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
var zu =
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
      typeof zu == 'object' && zu,
    ]
    for (var f = 0; f < s.length; ++f) {
      var p = s[f]
      if (p && p.Math == Math) return p
    }
    throw Error('Cannot find global object')
  }
  var i = n(this)
  function o(s, f) {
    if (f)
      e: {
        var p = i
        s = s.split('.')
        for (var y = 0; y < s.length - 1; y++) {
          var D = s[y]
          if (!(D in p)) break e
          p = p[D]
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
      D = {
        next: function () {
          if (!y && p < s.length) {
            var $ = p++
            return { value: f($, s[$]), done: !1 }
          }
          return (y = !0), { done: !0, value: void 0 }
        },
      }
    return (
      (D[Symbol.iterator] = function () {
        return D
      }),
      D
    )
  }
  o('Array.prototype.values', function (s) {
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
  function P(s, f, p) {
    return s.call.apply(s.bind, arguments)
  }
  function O(s, f, p) {
    if (!s) throw Error()
    if (2 < arguments.length) {
      var y = Array.prototype.slice.call(arguments, 2)
      return function () {
        var D = Array.prototype.slice.call(arguments)
        return Array.prototype.unshift.apply(D, y), s.apply(f, D)
      }
    }
    return function () {
      return s.apply(f, arguments)
    }
  }
  function k(s, f, p) {
    return (
      (k =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? P
          : O),
      k.apply(null, arguments)
    )
  }
  function V(s, f) {
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
      (s.Qb = function (y, D, $) {
        for (
          var ee = Array(arguments.length - 2), Oe = 2;
          Oe < arguments.length;
          Oe++
        )
          ee[Oe - 2] = arguments[Oe]
        return f.prototype[D].apply(y, ee)
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
  function J(s, f) {
    for (let p = 1; p < arguments.length; p++) {
      const y = arguments[p]
      if (g(y)) {
        const D = s.length || 0,
          $ = y.length || 0
        s.length = D + $
        for (let ee = 0; ee < $; ee++) s[D + ee] = y[ee]
      } else s.push(y)
    }
  }
  class L {
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
  function I() {
    var s = d.navigator
    return s && (s = s.userAgent) ? s : ''
  }
  function B(s) {
    return B[' '](s), s
  }
  B[' '] = function () {}
  var G =
    I().indexOf('Gecko') != -1 &&
    !(I().toLowerCase().indexOf('webkit') != -1 && I().indexOf('Edge') == -1) &&
    !(I().indexOf('Trident') != -1 || I().indexOf('MSIE') != -1) &&
    I().indexOf('Edge') == -1
  function X(s, f, p) {
    for (const y in s) f.call(p, s[y], y, s)
  }
  function S(s, f) {
    for (const p in s) f.call(void 0, s[p], p, s)
  }
  function _(s) {
    const f = {}
    for (const p in s) f[p] = s[p]
    return f
  }
  const C =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    )
  function A(s, f) {
    let p, y
    for (let D = 1; D < arguments.length; D++) {
      y = arguments[D]
      for (p in y) s[p] = y[p]
      for (let $ = 0; $ < C.length; $++)
        (p = C[$]), Object.prototype.hasOwnProperty.call(y, p) && (s[p] = y[p])
    }
  }
  function N(s) {
    var f = 1
    s = s.split(':')
    const p = []
    for (; 0 < f && s.length; ) p.push(s.shift()), f--
    return s.length && p.push(s.join(':')), p
  }
  function M(s) {
    d.setTimeout(() => {
      throw s
    }, 0)
  }
  function T() {
    var s = ae
    let f = null
    return (
      s.g &&
        ((f = s.g), (s.g = s.g.next), s.g || (s.h = null), (f.next = null)),
      f
    )
  }
  class Je {
    constructor() {
      this.h = this.g = null
    }
    add(f, p) {
      const y = $t.get()
      y.set(f, p), this.h ? (this.h.next = y) : (this.g = y), (this.h = y)
    }
  }
  var $t = new L(
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
    ae = new Je(),
    ue = () => {
      const s = d.Promise.resolve(void 0)
      Ee = () => {
        s.then(_e)
      }
    }
  var _e = () => {
    for (var s; (s = T()); ) {
      try {
        s.h.call(s.g)
      } catch (p) {
        M(p)
      }
      var f = $t
      f.j(s), 100 > f.h && (f.h++, (s.next = f.g), (f.g = s))
    }
    Z = !1
  }
  function Ae() {
    ;(this.s = this.s), (this.C = this.C)
  }
  ;(Ae.prototype.s = !1),
    (Ae.prototype.ma = function () {
      this.s || ((this.s = !0), this.N())
    }),
    (Ae.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()()
    })
  function $e(s, f) {
    ;(this.type = s), (this.g = this.target = f), (this.defaultPrevented = !1)
  }
  $e.prototype.h = function () {
    this.defaultPrevented = !0
  }
  var An = (function () {
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
              var D = !0
              break e
            } catch {}
            D = !1
          }
          D || (f = null)
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
  function xi(s, f, p, y, D) {
    ;(this.listener = s),
      (this.proxy = null),
      (this.src = f),
      (this.type = p),
      (this.capture = !!y),
      (this.ha = D),
      (this.key = ++Ei),
      (this.da = this.fa = !1)
  }
  function la(s) {
    ;(s.da = !0),
      (s.listener = null),
      (s.proxy = null),
      (s.src = null),
      (s.ha = null)
  }
  function or(s) {
    ;(this.src = s), (this.g = {}), (this.h = 0)
  }
  or.prototype.add = function (s, f, p, y, D) {
    var $ = s.toString()
    ;(s = this.g[$]), s || ((s = this.g[$] = []), this.h++)
    var ee = ua(s, f, y, D)
    return (
      -1 < ee
        ? ((f = s[ee]), p || (f.fa = !1))
        : ((f = new xi(f, this.src, $, !!y, D)), (f.fa = p), s.push(f)),
      f
    )
  }
  function Lr(s, f) {
    var p = f.type
    if (p in s.g) {
      var y = s.g[p],
        D = Array.prototype.indexOf.call(y, f, void 0),
        $
      ;($ = 0 <= D) && Array.prototype.splice.call(y, D, 1),
        $ && (la(f), s.g[p].length == 0 && (delete s.g[p], s.h--))
    }
  }
  function ua(s, f, p, y) {
    for (var D = 0; D < s.length; ++D) {
      var $ = s[D]
      if (!$.da && $.listener == f && $.capture == !!p && $.ha == y) return D
    }
    return -1
  }
  var Rt = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    sr = {}
  function sl(s, f, p, y, D) {
    if (y && y.once) return ul(s, f, p, y, D)
    if (Array.isArray(f)) {
      for (var $ = 0; $ < f.length; $++) sl(s, f[$], p, y, D)
      return null
    }
    return (
      (p = bo(p)),
      s && s[pn]
        ? s.K(f, p, w(y) ? !!y.capture : !!y, D)
        : gn(s, f, p, !1, y, D)
    )
  }
  function gn(s, f, p, y, D, $) {
    if (!f) throw Error('Invalid event type')
    var ee = w(D) ? !!D.capture : !!D,
      Oe = yo(s)
    if ((Oe || (s[Rt] = Oe = new or(s)), (p = Oe.add(f, p, y, ee, $)), p.proxy))
      return p
    if (
      ((y = ll()),
      (p.proxy = y),
      (y.src = s),
      (y.listener = p),
      s.addEventListener)
    )
      An || (D = ee),
        D === void 0 && (D = !1),
        s.addEventListener(f.toString(), y, D)
    else if (s.attachEvent) s.attachEvent(Nr(f.toString()), y)
    else if (s.addListener && s.removeListener) s.addListener(y)
    else throw Error('addEventListener and attachEvent are unavailable.')
    return p
  }
  function ll() {
    function s(p) {
      return f.call(s.src, s.listener, p)
    }
    const f = ca
    return s
  }
  function ul(s, f, p, y, D) {
    if (Array.isArray(f)) {
      for (var $ = 0; $ < f.length; $++) ul(s, f[$], p, y, D)
      return null
    }
    return (
      (p = bo(p)),
      s && s[pn]
        ? s.L(f, p, w(y) ? !!y.capture : !!y, D)
        : gn(s, f, p, !0, y, D)
    )
  }
  function Ir(s, f, p, y, D) {
    if (Array.isArray(f))
      for (var $ = 0; $ < f.length; $++) Ir(s, f[$], p, y, D)
    else
      (y = w(y) ? !!y.capture : !!y),
        (p = bo(p)),
        s && s[pn]
          ? ((s = s.i),
            (f = String(f).toString()),
            f in s.g &&
              (($ = s.g[f]),
              (p = ua($, p, y, D)),
              -1 < p &&
                (la($[p]),
                Array.prototype.splice.call($, p, 1),
                $.length == 0 && (delete s.g[f], s.h--))))
          : s &&
            (s = yo(s)) &&
            ((f = s.g[f.toString()]),
            (s = -1),
            f && (s = ua(f, p, y, D)),
            (p = -1 < s ? f[s] : null) && Lt(p))
  }
  function Lt(s) {
    if (typeof s != 'number' && s && !s.da) {
      var f = s.src
      if (f && f[pn]) Lr(f.i, s)
      else {
        var p = s.type,
          y = s.proxy
        f.removeEventListener
          ? f.removeEventListener(p, y, s.capture)
          : f.detachEvent
          ? f.detachEvent(Nr(p), y)
          : f.addListener && f.removeListener && f.removeListener(y),
          (p = yo(f))
            ? (Lr(p, s), p.h == 0 && ((p.src = null), (f[Rt] = null)))
            : la(s)
      }
    }
  }
  function Nr(s) {
    return s in sr ? sr[s] : (sr[s] = 'on' + s)
  }
  function ca(s, f) {
    if (s.da) s = !0
    else {
      f = new bt(f, this)
      var p = s.listener,
        y = s.ha || s.src
      s.fa && Lt(s), (s = p.call(y, f))
    }
    return s
  }
  function yo(s) {
    return (s = s[Rt]), s instanceof or ? s : null
  }
  var lr = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  function bo(s) {
    return typeof s == 'function'
      ? s
      : (s[lr] ||
          (s[lr] = function (f) {
            return s.handleEvent(f)
          }),
        s[lr])
  }
  function qe() {
    Ae.call(this), (this.i = new or(this)), (this.M = this), (this.F = null)
  }
  F(qe, Ae),
    (qe.prototype[pn] = !0),
    (qe.prototype.removeEventListener = function (s, f, p, y) {
      Ir(this, s, f, p, y)
    })
  function Ke(s, f) {
    var p,
      y = s.F
    if (y) for (p = []; y; y = y.F) p.push(y)
    if (((s = s.M), (y = f.type || f), typeof f == 'string')) f = new $e(f, s)
    else if (f instanceof $e) f.target = f.target || s
    else {
      var D = f
      ;(f = new $e(y, s)), A(f, D)
    }
    if (((D = !0), p))
      for (var $ = p.length - 1; 0 <= $; $--) {
        var ee = (f.g = p[$])
        D = jr(ee, y, !0, f) && D
      }
    if (
      ((ee = f.g = s),
      (D = jr(ee, y, !0, f) && D),
      (D = jr(ee, y, !1, f) && D),
      p)
    )
      for ($ = 0; $ < p.length; $++)
        (ee = f.g = p[$]), (D = jr(ee, y, !1, f) && D)
  }
  ;(qe.prototype.N = function () {
    if ((qe.aa.N.call(this), this.i)) {
      var s = this.i,
        f
      for (f in s.g) {
        for (var p = s.g[f], y = 0; y < p.length; y++) la(p[y])
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
  function jr(s, f, p, y) {
    if (((f = s.i.g[String(f)]), !f)) return !0
    f = f.concat()
    for (var D = !0, $ = 0; $ < f.length; ++$) {
      var ee = f[$]
      if (ee && !ee.da && ee.capture == p) {
        var Oe = ee.listener,
          tt = ee.ha || ee.src
        ee.fa && Lr(s.i, ee), (D = Oe.call(tt, y) !== !1 && D)
      }
    }
    return D && !y.defaultPrevented
  }
  function fa(s, f, p) {
    if (typeof s == 'function') p && (s = k(s, p))
    else if (s && typeof s.handleEvent == 'function') s = k(s.handleEvent, s)
    else throw Error('Invalid listener argument')
    return 2147483647 < Number(f) ? -1 : d.setTimeout(s, f || 0)
  }
  function ha(s) {
    s.g = fa(() => {
      ;(s.g = null), s.i && ((s.i = !1), ha(s))
    }, s.l)
    const f = s.h
    ;(s.h = null), s.m.apply(null, f)
  }
  class wo extends Ae {
    constructor(f, p) {
      super(),
        (this.m = f),
        (this.l = p),
        (this.h = null),
        (this.i = !1),
        (this.g = null)
    }
    j(f) {
      ;(this.h = arguments), this.g ? (this.i = !0) : ha(this)
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
    Ae.call(this), (this.h = s), (this.g = {})
  }
  F(ur, Ae)
  var da = []
  function pa(s) {
    X(
      s.g,
      function (f, p) {
        this.g.hasOwnProperty(p) && Lt(f)
      },
      s
    ),
      (s.g = {})
  }
  ;(ur.prototype.N = function () {
    ur.aa.N.call(this), pa(this)
  }),
    (ur.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented')
    })
  var Ci = d.JSON.stringify,
    _o = d.JSON.parse,
    Kc = class {
      stringify(s) {
        return d.JSON.stringify(s, void 0)
      }
      parse(s) {
        return d.JSON.parse(s, void 0)
      }
    }
  function ko() {}
  ko.prototype.h = null
  function cl(s) {
    return s.h || (s.h = s.i())
  }
  function ga() {
    $e.call(this, 'd')
  }
  F(ga, $e)
  function ma() {
    $e.call(this, 'c')
  }
  F(ma, $e)
  var zr = {},
    fl = null
  function So() {
    return (fl = fl || new qe())
  }
  zr.La = 'serverreachability'
  function hl(s) {
    $e.call(this, zr.La, s)
  }
  F(hl, $e)
  function Dr(s) {
    const f = So()
    Ke(f, new hl(f))
  }
  zr.STAT_EVENT = 'statevent'
  function dl(s, f) {
    $e.call(this, zr.STAT_EVENT, s), (this.stat = f)
  }
  F(dl, $e)
  function dt(s) {
    const f = So()
    Ke(f, new dl(f, s))
  }
  zr.Ma = 'timingevent'
  function pl(s, f) {
    $e.call(this, zr.Ma, s), (this.size = f)
  }
  F(pl, $e)
  function cr(s, f) {
    if (typeof s != 'function')
      throw Error('Fn must not be null and must be a function')
    return d.setTimeout(function () {
      s()
    }, f)
  }
  function Ti() {
    this.g = !0
  }
  Ti.prototype.xa = function () {
    this.g = !1
  }
  function Eo(s, f, p, y, D, $) {
    s.info(function () {
      if (s.g)
        if ($)
          for (var ee = '', Oe = $.split('&'), tt = 0; tt < Oe.length; tt++) {
            var xe = Oe[tt].split('=')
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
        D +
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
  function Qc(s, f, p, y, D, $, ee) {
    s.info(function () {
      return (
        'XMLHTTP RESP (' +
        y +
        ') [ attempt ' +
        D +
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
  function Mr(s, f, p, y) {
    s.info(function () {
      return 'XMLHTTP TEXT (' + f + '): ' + Jc(s, p) + (y ? ' ' + y : '')
    })
  }
  function Gc(s, f) {
    s.info(function () {
      return 'TIMEOUT: ' + f
    })
  }
  Ti.prototype.info = function () {}
  function Jc(s, f) {
    if (!s.g) return f
    if (!f) return null
    try {
      var p = JSON.parse(f)
      if (p) {
        for (s = 0; s < p.length; s++)
          if (Array.isArray(p[s])) {
            var y = p[s]
            if (!(2 > y.length)) {
              var D = y[1]
              if (Array.isArray(D) && !(1 > D.length)) {
                var $ = D[0]
                if ($ != 'noop' && $ != 'stop' && $ != 'close')
                  for (var ee = 1; ee < D.length; ee++) D[ee] = ''
              }
            }
          }
      }
      return Ci(p)
    } catch {
      return f
    }
  }
  var xo
  function va() {}
  F(va, ko),
    (va.prototype.g = function () {
      return new XMLHttpRequest()
    }),
    (va.prototype.i = function () {
      return {}
    }),
    (xo = new va())
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
  var Co = {},
    To = {}
  function Ao(s, f, p) {
    ;(s.L = 1), (s.v = Fr(Vt(f))), (s.m = p), (s.P = !0), ml(s, null)
  }
  function ml(s, f) {
    ;(s.F = Date.now()), ya(s), (s.A = Vt(s.v))
    var p = s.A,
      y = s.R
    Array.isArray(y) || (y = [String(y)]),
      El(p.i, 't', y),
      (s.C = 0),
      (p = s.j.J),
      (s.h = new gl()),
      (s.g = Ea(s.j, p ? f : null, !s.m)),
      0 < s.O && (s.M = new wo(k(s.Y, s, s.g), s.O)),
      (f = s.U),
      (p = s.g),
      (y = s.ca)
    var D = 'readystatechange'
    Array.isArray(D) || (D && (da[0] = D.toString()), (D = da))
    for (var $ = 0; $ < D.length; $++) {
      var ee = sl(p, D[$], y || f.handleEvent, !1, f.h || f)
      if (!ee) break
      f.g[ee.key] = ee
    }
    ;(f = s.H ? _(s.H) : {}),
      s.m
        ? (s.u || (s.u = 'POST'),
          (f['Content-Type'] = 'application/x-www-form-urlencoded'),
          s.g.ea(s.A, s.u, s.m, f))
        : ((s.u = 'GET'), s.g.ea(s.A, s.u, null, f)),
      Dr(),
      Eo(s.i, s.u, s.A, s.l, s.R, s.m)
  }
  ;(Kn.prototype.ca = function (s) {
    s = s.target
    const f = this.M
    f && On(s) == 3 ? f.j() : this.Y(s)
  }),
    (Kn.prototype.Y = function (s) {
      try {
        if (s == this.g)
          e: {
            const lt = On(this.g)
            var f = this.g.Ba()
            const Kr = this.g.Z()
            if (
              !(3 > lt) &&
              (lt != 3 || (this.g && (this.h.h || this.g.oa() || et(this.g))))
            ) {
              this.J ||
                lt != 4 ||
                f == 7 ||
                (f == 8 || 0 >= Kr ? Dr(3) : Dr(2)),
                Po(this)
              var p = this.g.Z()
              this.X = p
              t: if (vl(this)) {
                var y = et(this.g)
                s = ''
                var D = y.length,
                  $ = On(this.g) == 4
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    fr(this), Qn(this)
                    var ee = ''
                    break t
                  }
                  this.h.i = new d.TextDecoder()
                }
                for (f = 0; f < D; f++)
                  (this.h.h = !0),
                    (s += this.h.i.decode(y[f], { stream: !($ && f == D - 1) }))
                ;(y.length = 0), (this.h.g += s), (this.C = 0), (ee = this.h.g)
              } else ee = this.g.oa()
              if (
                ((this.o = p == 200),
                Qc(this.i, this.u, this.A, this.l, this.R, lt, p),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var Oe,
                        tt = this.g
                      if (
                        (Oe = tt.g
                          ? tt.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !x(Oe)
                      ) {
                        var xe = Oe
                        break t
                      }
                    }
                    xe = null
                  }
                  if ((p = xe))
                    Mr(
                      this.i,
                      this.l,
                      p,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      Oo(this, p)
                  else {
                    ;(this.o = !1), (this.s = 3), dt(12), fr(this), Qn(this)
                    break e
                  }
                }
                if (this.P) {
                  p = !0
                  let Ht
                  for (; !this.J && this.C < ee.length; )
                    if (((Ht = Yc(this, ee)), Ht == To)) {
                      lt == 4 && ((this.s = 4), dt(14), (p = !1)),
                        Mr(this.i, this.l, null, '[Incomplete Response]')
                      break
                    } else if (Ht == Co) {
                      ;(this.s = 4),
                        dt(15),
                        Mr(this.i, this.l, ee, '[Invalid Chunk]'),
                        (p = !1)
                      break
                    } else Mr(this.i, this.l, Ht, null), Oo(this, Ht)
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
                    Mr(this.i, this.l, ee, '[Invalid Chunked Response]'),
                      fr(this),
                      Qn(this)
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
                      _t(nt),
                      (nt.M = !0),
                      dt(11))
                  }
                } else Mr(this.i, this.l, ee, null), Oo(this, ee)
                lt == 4 && fr(this),
                  this.o &&
                    !this.J &&
                    (lt == 4 ? Rn(this.j, this) : ((this.o = !1), ya(this)))
              } else
                Bo(this.g),
                  p == 400 && 0 < ee.indexOf('Unknown SID')
                    ? ((this.s = 3), dt(12))
                    : ((this.s = 0), dt(13)),
                  fr(this),
                  Qn(this)
            }
          }
      } catch {
      } finally {
      }
    })
  function vl(s) {
    return s.g ? s.u == 'GET' && s.L != 2 && s.j.Ca : !1
  }
  function Yc(s, f) {
    var p = s.C,
      y = f.indexOf(
        `
`,
        p
      )
    return y == -1
      ? To
      : ((p = Number(f.substring(p, y))),
        isNaN(p)
          ? Co
          : ((y += 1),
            y + p > f.length
              ? To
              : ((f = f.slice(y, y + p)), (s.C = y + p), f)))
  }
  Kn.prototype.cancel = function () {
    ;(this.J = !0), fr(this)
  }
  function ya(s) {
    ;(s.S = Date.now() + s.I), Ai(s, s.I)
  }
  function Ai(s, f) {
    if (s.B != null) throw Error('WatchDog timer not null')
    s.B = cr(k(s.ba, s), f)
  }
  function Po(s) {
    s.B && (d.clearTimeout(s.B), (s.B = null))
  }
  Kn.prototype.ba = function () {
    this.B = null
    const s = Date.now()
    0 <= s - this.S
      ? (Gc(this.i, this.A),
        this.L != 2 && (Dr(), dt(17)),
        fr(this),
        (this.s = 2),
        Qn(this))
      : Ai(this, this.S - s)
  }
  function Qn(s) {
    s.j.G == 0 || s.J || Rn(s.j, s)
  }
  function fr(s) {
    Po(s)
    var f = s.M
    f && typeof f.ma == 'function' && f.ma(),
      (s.M = null),
      pa(s.U),
      s.g && ((f = s.g), (s.g = null), f.abort(), f.ma())
  }
  function Oo(s, f) {
    try {
      var p = s.j
      if (p.G != 0 && (p.g == s || No(p.h, s))) {
        if (!s.K && No(p.h, s) && p.G == 3) {
          try {
            var y = p.Da.g.parse(f)
          } catch {
            y = null
          }
          if (Array.isArray(y) && y.length == 3) {
            var D = y
            if (D[0] == 0) {
              e: if (!p.u) {
                if (p.g)
                  if (p.g.F + 3e3 < s.F) ji(p), pt(p)
                  else break e
                Ko(p), dt(18)
              }
            } else
              (p.za = D[1]),
                0 < p.za - p.T &&
                  37500 > D[2] &&
                  p.F &&
                  p.v == 0 &&
                  !p.C &&
                  (p.C = cr(k(p.Za, p), 6e3))
            if (1 >= Io(p.h) && p.ca) {
              try {
                p.ca()
              } catch {}
              p.ca = void 0
            }
          } else Ln(p, 11)
        } else if (((s.K || p.g == s) && ji(p), !x(f)))
          for (D = p.Da.g.parse(f), f = 0; f < D.length; f++) {
            let xe = D[f]
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
                const Ht = s.g
                if (Ht) {
                  const ut = Ht.g
                    ? Ht.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null
                  if (ut) {
                    var $ = y.h
                    $.g ||
                      (ut.indexOf('spdy') == -1 &&
                        ut.indexOf('quic') == -1 &&
                        ut.indexOf('h2') == -1) ||
                      (($.j = $.l),
                      ($.g = new Set()),
                      $.h && (jo($, $.h), ($.h = null)))
                  }
                  if (y.D) {
                    const Di = Ht.g
                      ? Ht.g.getResponseHeader('X-HTTP-Session-Id')
                      : null
                    Di && ((y.ya = Di), Ie(y.I, y.D, Di))
                  }
                }
                ;(p.G = 3),
                  p.l && p.l.ua(),
                  p.ba &&
                    ((p.R = Date.now() - s.F),
                    p.j.info('Handshake RTT: ' + p.R + 'ms')),
                  (y = p)
                var ee = s
                if (((y.qa = In(y, y.J ? y.ia : null, y.W)), ee.K)) {
                  yl(y.h, ee)
                  var Oe = ee,
                    tt = y.L
                  tt && (Oe.I = tt), Oe.B && (Po(Oe), ya(Oe)), (y.g = ee)
                } else wt(y)
                0 < p.i.length && Ni(p)
              } else (xe[0] != 'stop' && xe[0] != 'close') || Ln(p, 7)
            else
              p.G == 3 &&
                (xe[0] == 'stop' || xe[0] == 'close'
                  ? xe[0] == 'stop'
                    ? Ln(p, 7)
                    : Ii(p)
                  : xe[0] != 'noop' && p.l && p.l.ta(xe),
                (p.v = 0))
          }
      }
      Dr(4)
    } catch {}
  }
  var Xc = class {
    constructor(s, f) {
      ;(this.g = s), (this.map = f)
    }
  }
  function Ro(s) {
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
  function Lo(s) {
    return s.h ? !0 : s.g ? s.g.size >= s.j : !1
  }
  function Io(s) {
    return s.h ? 1 : s.g ? s.g.size : 0
  }
  function No(s, f) {
    return s.h ? s.h == f : s.g ? s.g.has(f) : !1
  }
  function jo(s, f) {
    s.g ? s.g.add(f) : (s.h = f)
  }
  function yl(s, f) {
    s.h && s.h == f ? (s.h = null) : s.g && s.g.has(f) && s.g.delete(f)
  }
  Ro.prototype.cancel = function () {
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
  function _l(s) {
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
  function zo(s, f) {
    if (s.forEach && typeof s.forEach == 'function') s.forEach(f, void 0)
    else if (g(s) || typeof s == 'string')
      Array.prototype.forEach.call(s, f, void 0)
    else
      for (var p = _l(s), y = wl(s), D = y.length, $ = 0; $ < D; $++)
        f.call(void 0, y[$], p && p[$], s)
  }
  var ba = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  )
  function Zc(s, f) {
    if (s) {
      s = s.split('&')
      for (var p = 0; p < s.length; p++) {
        var y = s[p].indexOf('='),
          D = null
        if (0 <= y) {
          var $ = s[p].substring(0, y)
          D = s[p].substring(y + 1)
        } else $ = s[p]
        f($, D ? decodeURIComponent(D.replace(/\+/g, ' ')) : '')
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
        Pi(this, s.j),
        (this.o = s.o),
        (this.g = s.g),
        wa(this, s.s),
        (this.l = s.l)
      var f = s.i,
        p = new Br()
      ;(p.i = f.i),
        f.g && ((p.g = new Map(f.g)), (p.h = f.h)),
        Do(this, p),
        (this.m = s.m)
    } else
      s && (f = String(s).match(ba))
        ? ((this.h = !1),
          Pi(this, f[1] || '', !0),
          (this.o = Oi(f[2] || '')),
          (this.g = Oi(f[3] || '', !0)),
          wa(this, f[4]),
          (this.l = Oi(f[5] || '', !0)),
          Do(this, f[6] || '', !0),
          (this.m = Oi(f[7] || '')))
        : ((this.h = !1), (this.i = new Br(null, this.h)))
  }
  Gn.prototype.toString = function () {
    var s = [],
      f = this.j
    f && s.push(Ur(f, _a, !0), ':')
    var p = this.g
    return (
      (p || f == 'file') &&
        (s.push('//'),
        (f = this.o) && s.push(Ur(f, _a, !0), '@'),
        s.push(
          encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (p = this.s),
        p != null && s.push(':', String(p))),
      (p = this.l) &&
        (this.g && p.charAt(0) != '/' && s.push('/'),
        s.push(Ur(p, p.charAt(0) == '/' ? kl : $r, !0))),
      (p = this.i.toString()) && s.push('?', p),
      (p = this.m) && s.push('#', Ur(p, ef)),
      s.join('')
    )
  }
  function Vt(s) {
    return new Gn(s)
  }
  function Pi(s, f, p) {
    ;(s.j = p ? Oi(f, !0) : f), s.j && (s.j = s.j.replace(/:$/, ''))
  }
  function wa(s, f) {
    if (f) {
      if (((f = Number(f)), isNaN(f) || 0 > f))
        throw Error('Bad port number ' + f)
      s.s = f
    } else s.s = null
  }
  function Do(s, f, p) {
    f instanceof Br
      ? ((s.i = f), tf(s.i, s.h))
      : (p || (f = Ur(f, Sl)), (s.i = new Br(f, s.h)))
  }
  function Ie(s, f, p) {
    s.i.set(f, p)
  }
  function Fr(s) {
    return (
      Ie(
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
  function Oi(s, f) {
    return s
      ? f
        ? decodeURI(s.replace(/%25/g, '%2525'))
        : decodeURIComponent(s)
      : ''
  }
  function Ur(s, f, p) {
    return typeof s == 'string'
      ? ((s = encodeURI(s).replace(f, Mo)),
        p && (s = s.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        s)
      : null
  }
  function Mo(s) {
    return (
      (s = s.charCodeAt(0)),
      '%' + ((s >> 4) & 15).toString(16) + (s & 15).toString(16)
    )
  }
  var _a = /[#\/\?@]/g,
    $r = /[#\?:]/g,
    kl = /[#\?]/g,
    Sl = /[#\?@]/g,
    ef = /#/g
  function Br(s, f) {
    ;(this.h = this.g = null), (this.i = s || null), (this.j = !!f)
  }
  function Pn(s) {
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
      Pn(this), (this.i = null), (s = Vr(this, s))
      var p = this.g.get(s)
      return p || this.g.set(s, (p = [])), p.push(f), (this.h += 1), this
    })
  function Fo(s, f) {
    Pn(s),
      (f = Vr(s, f)),
      s.g.has(f) && ((s.i = null), (s.h -= s.g.get(f).length), s.g.delete(f))
  }
  function Uo(s, f) {
    return Pn(s), (f = Vr(s, f)), s.g.has(f)
  }
  ;(e.forEach = function (s, f) {
    Pn(this),
      this.g.forEach(function (p, y) {
        p.forEach(function (D) {
          s.call(f, D, y, this)
        }, this)
      }, this)
  }),
    (e.na = function () {
      Pn(this)
      const s = Array.from(this.g.values()),
        f = Array.from(this.g.keys()),
        p = []
      for (let y = 0; y < f.length; y++) {
        const D = s[y]
        for (let $ = 0; $ < D.length; $++) p.push(f[y])
      }
      return p
    }),
    (e.V = function (s) {
      Pn(this)
      let f = []
      if (typeof s == 'string')
        Uo(this, s) && (f = f.concat(this.g.get(Vr(this, s))))
      else {
        s = Array.from(this.g.values())
        for (let p = 0; p < s.length; p++) f = f.concat(s[p])
      }
      return f
    }),
    (e.set = function (s, f) {
      return (
        Pn(this),
        (this.i = null),
        (s = Vr(this, s)),
        Uo(this, s) && (this.h -= this.g.get(s).length),
        this.g.set(s, [f]),
        (this.h += 1),
        this
      )
    }),
    (e.get = function (s, f) {
      return s ? ((s = this.V(s)), 0 < s.length ? String(s[0]) : f) : f
    })
  function El(s, f, p) {
    Fo(s, f),
      0 < p.length && ((s.i = null), s.g.set(Vr(s, f), W(p)), (s.h += p.length))
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
        var D = $
        ee[y] !== '' && (D += '=' + encodeURIComponent(String(ee[y]))),
          s.push(D)
      }
    }
    return (this.i = s.join('&'))
  }
  function Vr(s, f) {
    return (f = String(f)), s.j && (f = f.toLowerCase()), f
  }
  function tf(s, f) {
    f &&
      !s.j &&
      (Pn(s),
      (s.i = null),
      s.g.forEach(function (p, y) {
        var D = y.toLowerCase()
        y != D && (Fo(this, y), El(this, D, p))
      }, s)),
      (s.j = f)
  }
  function xl(s, f) {
    const p = new Ti()
    if (d.Image) {
      const y = new Image()
      ;(y.onload = V(Jn, p, 'TestLoadImage: loaded', !0, f, y)),
        (y.onerror = V(Jn, p, 'TestLoadImage: error', !1, f, y)),
        (y.onabort = V(Jn, p, 'TestLoadImage: abort', !1, f, y)),
        (y.ontimeout = V(Jn, p, 'TestLoadImage: timeout', !1, f, y)),
        d.setTimeout(function () {
          y.ontimeout && y.ontimeout()
        }, 1e4),
        (y.src = s)
    } else f(!1)
  }
  function nf(s, f) {
    const p = new Ti(),
      y = new AbortController(),
      D = setTimeout(() => {
        y.abort(), Jn(p, 'TestPingServer: timeout', !1, f)
      }, 1e4)
    fetch(s, { signal: y.signal })
      .then(($) => {
        clearTimeout(D),
          $.ok
            ? Jn(p, 'TestPingServer: ok', !0, f)
            : Jn(p, 'TestPingServer: server error', !1, f)
      })
      .catch(() => {
        clearTimeout(D), Jn(p, 'TestPingServer: error', !1, f)
      })
  }
  function Jn(s, f, p, y, D) {
    try {
      D &&
        ((D.onload = null),
        (D.onerror = null),
        (D.onabort = null),
        (D.ontimeout = null)),
        y(p)
    } catch {}
  }
  function rf() {
    this.g = new Kc()
  }
  function af(s, f, p) {
    const y = p || ''
    try {
      zo(s, function (D, $) {
        let ee = D
        w(D) && (ee = Ci(D)), f.push(y + $ + '=' + encodeURIComponent(ee))
      })
    } catch (D) {
      throw (f.push(y + 'type=' + encodeURIComponent('_badmap')), D)
    }
  }
  function Hr(s) {
    ;(this.l = s.Ub || null), (this.j = s.eb || !1)
  }
  F(Hr, ko),
    (Hr.prototype.g = function () {
      return new ka(this.l, this.j)
    }),
    (Hr.prototype.i = (function (s) {
      return function () {
        return s
      }
    })({}))
  function ka(s, f) {
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
  F(ka, qe),
    (e = ka.prototype),
    (e.open = function (s, f) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.B = s), (this.A = f), (this.readyState = 1), Li(this)
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
          ((this.g = !1), Ri(this)),
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
          Li(this)),
        this.g && ((this.readyState = 3), Li(this), this.g))
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
          Cl(this)
        } else s.text().then(this.Ra.bind(this), this.ga.bind(this))
    })
  function Cl(s) {
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
      s.done ? Ri(this) : Li(this), this.readyState == 3 && Cl(this)
    }
  }),
    (e.Ra = function (s) {
      this.g && ((this.response = this.responseText = s), Ri(this))
    }),
    (e.Qa = function (s) {
      this.g && ((this.response = s), Ri(this))
    }),
    (e.ga = function () {
      this.g && Ri(this)
    })
  function Ri(s) {
    ;(s.readyState = 4), (s.l = null), (s.j = null), (s.v = null), Li(s)
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
  function Li(s) {
    s.onreadystatechange && s.onreadystatechange.call(s)
  }
  Object.defineProperty(ka.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include'
    },
    set: function (s) {
      this.m = s ? 'include' : 'same-origin'
    },
  })
  function Tl(s) {
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
  function Pe(s, f, p) {
    e: {
      for (y in p) {
        var y = !1
        break e
      }
      y = !0
    }
    y ||
      ((p = Tl(p)),
      typeof s == 'string'
        ? p != null && encodeURIComponent(String(p))
        : Ie(s, f, p))
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
  var of = /^https?$/i,
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
        (this.g = this.o ? this.o.g() : xo.g()),
        (this.v = this.o ? cl(this.o) : cl(xo)),
        (this.g.onreadystatechange = k(this.Ea, this))
      try {
        ;(this.B = !0), this.g.open(f, String(s), !0), (this.B = !1)
      } catch ($) {
        Al(this, $)
        return
      }
      if (((s = p || ''), (p = new Map(this.headers)), y))
        if (Object.getPrototypeOf(y) === Object.prototype)
          for (var D in y) p.set(D, y[D])
        else if (typeof y.keys == 'function' && typeof y.get == 'function')
          for (const $ of y.keys()) p.set($, y.get($))
        else throw Error('Unknown input type for opt_headers: ' + String(y))
      ;(y = Array.from(p.keys()).find(
        ($) => $.toLowerCase() == 'content-type'
      )),
        (D = d.FormData && s instanceof d.FormData),
        !(0 <= Array.prototype.indexOf.call(sf, f, void 0)) ||
          y ||
          D ||
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
        $o(this), (this.u = !0), this.g.send(s), (this.u = !1)
      } catch ($) {
        Al(this, $)
      }
    })
  function Al(s, f) {
    ;(s.h = !1),
      s.g && ((s.j = !0), s.g.abort(), (s.j = !1)),
      (s.l = f),
      (s.m = 5),
      Pl(s),
      Sa(s)
  }
  function Pl(s) {
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
      Sa(this))
  }),
    (e.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Sa(this, !0)),
        ce.aa.N.call(this)
    }),
    (e.Ea = function () {
      this.s || (this.B || this.u || this.j ? Ol(this) : this.bb())
    }),
    (e.bb = function () {
      Ol(this)
    })
  function Ol(s) {
    if (s.h && typeof c < 'u' && (!s.v[1] || On(s) != 4 || s.Z() != 2)) {
      if (s.u && On(s) == 4) fa(s.Ea, 0, s)
      else if ((Ke(s, 'readystatechange'), On(s) == 4)) {
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
              var D = String(s.D).match(ba)[1] || null
              !D &&
                d.self &&
                d.self.location &&
                (D = d.self.location.protocol.slice(0, -1)),
                (y = !of.test(D ? D.toLowerCase() : ''))
            }
            p = y
          }
          if (p) Ke(s, 'complete'), Ke(s, 'success')
          else {
            s.m = 6
            try {
              var $ = 2 < On(s) ? s.g.statusText : ''
            } catch {
              $ = ''
            }
            ;(s.l = $ + ' [' + s.Z() + ']'), Pl(s)
          }
        } finally {
          Sa(s)
        }
      }
    }
  }
  function Sa(s, f) {
    if (s.g) {
      $o(s)
      const p = s.g,
        y = s.v[0] ? () => {} : null
      ;(s.g = null), (s.v = null), f || Ke(s, 'ready')
      try {
        p.onreadystatechange = y
      } catch {}
    }
  }
  function $o(s) {
    s.I && (d.clearTimeout(s.I), (s.I = null))
  }
  e.isActive = function () {
    return !!this.g
  }
  function On(s) {
    return s.g ? s.g.readyState : 0
  }
  ;(e.Z = function () {
    try {
      return 2 < On(this) ? this.g.status : -1
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
        return s && f.indexOf(s) == 0 && (f = f.substring(s.length)), _o(f)
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
  function Bo(s) {
    const f = {}
    s = ((s.g && 2 <= On(s) && s.g.getAllResponseHeaders()) || '').split(`\r
`)
    for (let y = 0; y < s.length; y++) {
      if (x(s[y])) continue
      var p = N(s[y])
      const D = p[0]
      if (((p = p[1]), typeof p != 'string')) continue
      p = p.trim()
      const $ = f[D] || []
      ;(f[D] = $), $.push(p)
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
  function Vo(s) {
    ;(this.Aa = 0),
      (this.i = []),
      (this.j = new Ti()),
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
      (this.h = new Ro(s && s.concurrentRequestLimit)),
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
  ;(e = Vo.prototype),
    (e.la = 8),
    (e.G = 1),
    (e.connect = function (s, f, p, y) {
      dt(0),
        (this.W = s),
        (this.H = f || {}),
        p && y !== void 0 && ((this.H.OSID = p), (this.H.OAID = y)),
        (this.F = this.X),
        (this.I = In(this, null, this.W)),
        Ni(this)
    })
  function Ii(s) {
    if ((Ho(s), s.G == 3)) {
      var f = s.U++,
        p = Vt(s.I)
      if (
        (Ie(p, 'SID', s.K),
        Ie(p, 'RID', f),
        Ie(p, 'TYPE', 'terminate'),
        Wr(s, p),
        (f = new Kn(s, s.j, f)),
        (f.L = 2),
        (f.v = Fr(Vt(p))),
        (p = !1),
        d.navigator && d.navigator.sendBeacon)
      )
        try {
          p = d.navigator.sendBeacon(f.v.toString(), '')
        } catch {}
      !p && d.Image && ((new Image().src = f.v), (p = !0)),
        p || ((f.g = Ea(f.j, null)), f.g.ea(f.v)),
        (f.F = Date.now()),
        ya(f)
    }
    je(s)
  }
  function pt(s) {
    s.g && (_t(s), s.g.cancel(), (s.g = null))
  }
  function Ho(s) {
    pt(s),
      s.u && (d.clearTimeout(s.u), (s.u = null)),
      ji(s),
      s.h.cancel(),
      s.s && (typeof s.s == 'number' && d.clearTimeout(s.s), (s.s = null))
  }
  function Ni(s) {
    if (!Lo(s.h) && !s.s) {
      s.s = !0
      var f = s.Ga
      Ee || ue(), Z || (Ee(), (Z = !0)), ae.add(f, s), (s.B = 0)
    }
  }
  function Rl(s, f) {
    return Io(s.h) >= s.h.j - (s.s ? 1 : 0)
      ? !1
      : s.s
      ? ((s.i = f.D.concat(s.i)), !0)
      : s.G == 1 || s.G == 2 || s.B >= (s.Va ? 0 : s.Wa)
      ? !1
      : ((s.s = cr(k(s.Ga, s, f), zi(s, s.B))), s.B++, !0)
  }
  e.Ga = function (s) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!s) {
          ;(this.U = Math.floor(1e5 * Math.random())), (s = this.U++)
          const D = new Kn(this, this.j, s)
          let $ = this.o
          if (
            (this.S && ($ ? (($ = _($)), A($, this.S)) : ($ = this.S)),
            this.m !== null || this.O || ((D.H = $), ($ = null)),
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
          ;(f = qo(this, D, f)),
            (p = Vt(this.I)),
            Ie(p, 'RID', s),
            Ie(p, 'CVER', 22),
            this.D && Ie(p, 'X-HTTP-Session-Id', this.D),
            Wr(this, p),
            $ &&
              (this.O
                ? (f = 'headers=' + encodeURIComponent(String(Tl($))) + '&' + f)
                : this.m && Pe(p, this.m, $)),
            jo(this.h, D),
            this.Ua && Ie(p, 'TYPE', 'init'),
            this.P
              ? (Ie(p, '$req', f),
                Ie(p, 'SID', 'null'),
                (D.T = !0),
                Ao(D, p, null))
              : Ao(D, p, f),
            (this.G = 2)
        }
      } else
        this.G == 3 &&
          (s ? Wo(this, s) : this.i.length == 0 || Lo(this.h) || Wo(this))
  }
  function Wo(s, f) {
    var p
    f ? (p = f.l) : (p = s.U++)
    const y = Vt(s.I)
    Ie(y, 'SID', s.K),
      Ie(y, 'RID', p),
      Ie(y, 'AID', s.T),
      Wr(s, y),
      s.m && s.o && Pe(y, s.m, s.o),
      (p = new Kn(s, s.j, p, s.B + 1)),
      s.m === null && (p.H = s.o),
      f && (s.i = f.D.concat(s.i)),
      (f = qo(s, p, 1e3)),
      (p.I = Math.round(0.5 * s.wa) + Math.round(0.5 * s.wa * Math.random())),
      jo(s.h, p),
      Ao(p, y, f)
  }
  function Wr(s, f) {
    s.H &&
      X(s.H, function (p, y) {
        Ie(f, y, p)
      }),
      s.l &&
        zo({}, function (p, y) {
          Ie(f, y, p)
        })
  }
  function qo(s, f, p) {
    p = Math.min(s.i.length, p)
    var y = s.l ? k(s.l.Na, s.l, s) : null
    e: {
      var D = s.i
      let $ = -1
      for (;;) {
        const ee = ['count=' + p]
        $ == -1
          ? 0 < p
            ? (($ = D[0].g), ee.push('ofs=' + $))
            : ($ = 0)
          : ee.push('ofs=' + $)
        let Oe = !0
        for (let tt = 0; tt < p; tt++) {
          let xe = D[tt].g
          const nt = D[tt].map
          if (((xe -= $), 0 > xe)) ($ = Math.max(0, D[tt].g - 100)), (Oe = !1)
          else
            try {
              af(nt, ee, 'req' + xe + '_')
            } catch {
              y && y(nt)
            }
        }
        if (Oe) {
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
      Ee || ue(), Z || (Ee(), (Z = !0)), ae.add(f, s), (s.v = 0)
    }
  }
  function Ko(s) {
    return s.g || s.u || 3 <= s.v
      ? !1
      : (s.Y++, (s.u = cr(k(s.Fa, s), zi(s, s.v))), s.v++, !0)
  }
  ;(e.Fa = function () {
    if (
      ((this.u = null),
      Ll(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var s = 2 * this.R
      this.j.info('BP detection timer enabled: ' + s),
        (this.A = cr(k(this.ab, this), s))
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
        Ll(this))
    })
  function _t(s) {
    s.A != null && (d.clearTimeout(s.A), (s.A = null))
  }
  function Ll(s) {
    ;(s.g = new Kn(s, s.j, 'rpc', s.Y)),
      s.m === null && (s.g.H = s.o),
      (s.g.O = 0)
    var f = Vt(s.qa)
    Ie(f, 'RID', 'rpc'),
      Ie(f, 'SID', s.K),
      Ie(f, 'AID', s.T),
      Ie(f, 'CI', s.F ? '0' : '1'),
      !s.F && s.ja && Ie(f, 'TO', s.ja),
      Ie(f, 'TYPE', 'xmlhttp'),
      Wr(s, f),
      s.m && s.o && Pe(f, s.m, s.o),
      s.L && (s.g.I = s.L)
    var p = s.g
    ;(s = s.ia),
      (p.L = 1),
      (p.v = Fr(Vt(f))),
      (p.m = null),
      (p.P = !0),
      ml(p, s)
  }
  e.Za = function () {
    this.C != null && ((this.C = null), pt(this), Ko(this), dt(19))
  }
  function ji(s) {
    s.C != null && (d.clearTimeout(s.C), (s.C = null))
  }
  function Rn(s, f) {
    var p = null
    if (s.g == f) {
      ji(s), _t(s), (s.g = null)
      var y = 2
    } else if (No(s.h, f)) (p = f.D), yl(s.h, f), (y = 1)
    else return
    if (s.G != 0) {
      if (f.o)
        if (y == 1) {
          ;(p = f.m ? f.m.length : 0), (f = Date.now() - f.F)
          var D = s.B
          ;(y = So()), Ke(y, new pl(y, p)), Ni(s)
        } else wt(s)
      else if (
        ((D = f.s),
        D == 3 ||
          (D == 0 && 0 < f.X) ||
          !((y == 1 && Rl(s, f)) || (y == 2 && Ko(s))))
      )
        switch ((p && 0 < p.length && ((f = s.h), (f.i = f.i.concat(p))), D)) {
          case 1:
            Ln(s, 5)
            break
          case 4:
            Ln(s, 10)
            break
          case 3:
            Ln(s, 6)
            break
          default:
            Ln(s, 2)
        }
    }
  }
  function zi(s, f) {
    let p = s.Ta + Math.floor(Math.random() * s.cb)
    return s.isActive() || (p *= 2), p * f
  }
  function Ln(s, f) {
    if ((s.j.info('Error code ' + f), f == 2)) {
      var p = k(s.fb, s),
        y = s.Xa
      const D = !y
      ;(y = new Gn(y || '//www.google.com/images/cleardot.gif')),
        (d.location && d.location.protocol == 'http') || Pi(y, 'https'),
        Fr(y),
        D ? xl(y.toString(), p) : nf(y.toString(), p)
    } else dt(2)
    ;(s.G = 0), s.l && s.l.sa(f), je(s), Ho(s)
  }
  e.fb = function (s) {
    s
      ? (this.j.info('Successfully pinged google.com'), dt(2))
      : (this.j.info('Failed to ping google.com'), dt(1))
  }
  function je(s) {
    if (((s.G = 0), (s.ka = []), s.l)) {
      const f = bl(s.h)
      ;(f.length != 0 || s.i.length != 0) &&
        (J(s.ka, f),
        J(s.ka, s.i),
        (s.h.i.length = 0),
        W(s.i),
        (s.i.length = 0)),
        s.l.ra()
    }
  }
  function In(s, f, p) {
    var y = p instanceof Gn ? Vt(p) : new Gn(p)
    if (y.g != '') f && (y.g = f + '.' + y.g), wa(y, y.s)
    else {
      var D = d.location
      ;(y = D.protocol),
        (f = f ? f + '.' + D.hostname : D.hostname),
        (D = +D.port)
      var $ = new Gn(null)
      y && Pi($, y), f && ($.g = f), D && wa($, D), p && ($.l = p), (y = $)
    }
    return (
      (p = s.D),
      (f = s.ya),
      p && f && Ie(y, p, f),
      Ie(y, 'VER', s.la),
      Wr(s, y),
      y
    )
  }
  function Ea(s, f, p) {
    if (f && !s.J)
      throw Error("Can't create secondary domain capable XhrIo object.")
    return (
      (f = s.Ca && !s.pa ? new ce(new Hr({ eb: p })) : new ce(s.pa)),
      f.Ha(s.J),
      f
    )
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this)
  }
  function Il() {}
  ;(e = Il.prototype),
    (e.ua = function () {}),
    (e.ta = function () {}),
    (e.sa = function () {}),
    (e.ra = function () {}),
    (e.isActive = function () {
      return !0
    }),
    (e.Na = function () {})
  function kt(s, f) {
    qe.call(this),
      (this.g = new Vo(f)),
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
  F(kt, qe),
    (kt.prototype.m = function () {
      ;(this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }),
    (kt.prototype.close = function () {
      Ii(this.g)
    }),
    (kt.prototype.o = function (s) {
      var f = this.g
      if (typeof s == 'string') {
        var p = {}
        ;(p.__data__ = s), (s = p)
      } else this.u && ((p = {}), (p.__data__ = Ci(s)), (s = p))
      f.i.push(new Xc(f.Ya++, s)), f.G == 3 && Ni(f)
    }),
    (kt.prototype.N = function () {
      ;(this.g.l = null),
        delete this.j,
        Ii(this.g),
        delete this.g,
        kt.aa.N.call(this)
    })
  function Nl(s) {
    ga.call(this),
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
  F(Nl, ga)
  function jl() {
    ma.call(this), (this.status = 1)
  }
  F(jl, ma)
  function qr(s) {
    this.g = s
  }
  F(qr, Il),
    (qr.prototype.ua = function () {
      Ke(this.g, 'a')
    }),
    (qr.prototype.ta = function (s) {
      Ke(this.g, new Nl(s))
    }),
    (qr.prototype.sa = function (s) {
      Ke(this.g, new jl())
    }),
    (qr.prototype.ra = function () {
      Ke(this.g, 'b')
    }),
    (kt.prototype.send = kt.prototype.o),
    (kt.prototype.open = kt.prototype.m),
    (kt.prototype.close = kt.prototype.close),
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
  typeof zu < 'u'
    ? zu
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
 */ class Dt {
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
;(Dt.UNAUTHENTICATED = new Dt(null)),
  (Dt.GOOGLE_CREDENTIALS = new Dt('google-credentials-uid')),
  (Dt.FIRST_PARTY = new Dt('first-party-uid')),
  (Dt.MOCK_USER = new Dt('mock-user'))
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
 */ let ol = '11.0.0'
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
 */ const ho = new H1('@firebase/firestore')
function Bn(e, ...t) {
  if (ho.logLevel <= Ne.DEBUG) {
    const n = t.map(Lp)
    ho.debug(`Firestore (${ol}): ${e}`, ...n)
  }
}
function Y1(e, ...t) {
  if (ho.logLevel <= Ne.ERROR) {
    const n = t.map(Lp)
    ho.error(`Firestore (${ol}): ${e}`, ...n)
  }
}
function B9(e, ...t) {
  if (ho.logLevel <= Ne.WARN) {
    const n = t.map(Lp)
    ho.warn(`Firestore (${ol}): ${e}`, ...n)
  }
}
function Lp(e) {
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
 */ function Ip(e = 'Unexpected state') {
  const t = `FIRESTORE (${ol}) INTERNAL ASSERTION FAILED: ` + e
  throw (Y1(t), new Error(t))
}
function Ls(e, t) {
  e || Ip()
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
 */ const Jt = {
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
class Yt extends vo {
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
 */ class Is {
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
class V9 {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(Dt.UNAUTHENTICATED))
  }
  shutdown() {}
}
class H9 {
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
      (this.currentUser = Dt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(t, n) {
    Ls(this.o === void 0)
    let i = this.i
    const o = (g) => (this.i !== i ? ((i = this.i), n(g)) : Promise.resolve())
    let l = new Is()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        l.resolve(),
        (l = new Is()),
        t.enqueueRetryable(() => o(this.currentUser))
    }
    const c = () => {
        const g = l
        t.enqueueRetryable(async () => {
          await g.promise, await o(this.currentUser)
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
              (l = new Is()))
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
                ? (Ls(typeof i.accessToken == 'string'),
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
    return Ls(t === null || typeof t == 'string'), new Dt(t)
  }
}
class q9 {
  constructor(t, n, i) {
    ;(this.l = t),
      (this.h = n),
      (this.P = i),
      (this.type = 'FirstParty'),
      (this.user = Dt.FIRST_PARTY),
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
    t.enqueueRetryable(() => n(Dt.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class Q9 {
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
    Ls(this.o === void 0)
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
    const o = (l) => {
      Bn('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = l),
        this.o && this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((l) => o(l)),
      setTimeout(() => {
        if (!this.appCheck) {
          const l = this.A.getImmediate({ optional: !0 })
          l
            ? o(l)
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
                ? (Ls(typeof n.token == 'string'),
                  (this.R = n.token),
                  new Q9(n.token))
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
function J9(e) {
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
 */ var n0, ke
;((ke = n0 || (n0 = {}))[(ke.OK = 0)] = 'OK'),
  (ke[(ke.CANCELLED = 1)] = 'CANCELLED'),
  (ke[(ke.UNKNOWN = 2)] = 'UNKNOWN'),
  (ke[(ke.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (ke[(ke.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (ke[(ke.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (ke[(ke.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (ke[(ke.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (ke[(ke.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (ke[(ke.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (ke[(ke.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (ke[(ke.ABORTED = 10)] = 'ABORTED'),
  (ke[(ke.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (ke[(ke.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (ke[(ke.INTERNAL = 13)] = 'INTERNAL'),
  (ke[(ke.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (ke[(ke.DATA_LOSS = 15)] = 'DATA_LOSS')
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
 */ new J1([4294967295, 4294967295], 0)
function Ih() {
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
 */ class Y9 {
  constructor(t, n, i = 1e3, o = 1.5, l = 6e4) {
    ;(this.ui = t),
      (this.timerId = n),
      (this.ko = i),
      (this.qo = o),
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
      o = Math.max(0, n - i)
    o > 0 &&
      Bn(
        'ExponentialBackoff',
        `Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        o,
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
 */ class Np {
  constructor(t, n, i, o, l) {
    ;(this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = i),
      (this.op = o),
      (this.removalCallback = l),
      (this.deferred = new Is()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((c) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(t, n, i, o, l) {
    const c = Date.now() + i,
      d = new Np(t, n, c, o, l)
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
        new Yt(Jt.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))
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
 */ const a0 = new Map()
function Z9(e, t, n, i) {
  if (t === !0 && i === !0)
    throw new Yt(Jt.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`)
}
function eC(e) {
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
  return typeof e == 'function' ? 'a function' : Ip()
}
function tC(e, t) {
  if (('_delegate' in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new Yt(
        Jt.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = eC(e)
      throw new Yt(
        Jt.INVALID_ARGUMENT,
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
 */ class o0 {
  constructor(t) {
    var n, i
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new Yt(
          Jt.INVALID_ARGUMENT,
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
        throw new Yt(
          Jt.INVALID_ARGUMENT,
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
      (function (o) {
        if (o.timeoutSeconds !== void 0) {
          if (isNaN(o.timeoutSeconds))
            throw new Yt(
              Jt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`
            )
          if (o.timeoutSeconds < 5)
            throw new Yt(
              Jt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (o.timeoutSeconds > 30)
            throw new Yt(
              Jt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`
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
  constructor(t, n, i, o) {
    ;(this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = i),
      (this._app = o),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new o0({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = 'notTerminated')
  }
  get app() {
    if (!this._app)
      throw new Yt(
        Jt.FAILED_PRECONDITION,
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
      throw new Yt(
        Jt.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new o0(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new V9()
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
              throw new Yt(
                Jt.INVALID_ARGUMENT,
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
        const n = a0.get(t)
        n &&
          (Bn('ComponentProvider', 'Removing Datastore'),
          a0.delete(t),
          n.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function nC(e, t, n, i = {}) {
  var o
  const l = (e = tC(e, Z1))._getSettings(),
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
      (d = i.mockUserToken), (g = Dt.MOCK_USER)
    else {
      d = C3(
        i.mockUserToken,
        (o = e._app) === null || o === void 0 ? void 0 : o.options.projectId
      )
      const w = i.mockUserToken.sub || i.mockUserToken.user_id
      if (!w)
        throw new Yt(
          Jt.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      g = new Dt(w)
    }
    e._authCredentials = new H9(new X1(d, g))
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
      (this.t_ = new Y9(this, 'async_queue_retry')),
      (this.Vu = () => {
        const i = Ih()
        i &&
          Bn('AsyncQueue', 'Visibility state changed to ' + i.visibilityState),
          this.t_.jo()
      }),
      (this.mu = t)
    const n = Ih()
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
      const n = Ih()
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Vu)
    }
  }
  enqueue(t) {
    if ((this.fu(), this.Iu)) return new Promise(() => {})
    const n = new Is()
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
        if (!J9(t)) throw t
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
            const o = (function (l) {
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
            throw (Y1('INTERNAL UNHANDLED ERROR: ', o), i)
          })
          .then((i) => ((this.du = !1), i))
      )
    )
    return (this.mu = n), n
  }
  enqueueAfterDelay(t, n, i) {
    this.fu(), this.Ru.indexOf(t) > -1 && (n = 0)
    const o = Np.createAndSchedule(this, t, n, i, (l) => this.yu(l))
    return this.Tu.push(o), o
  }
  fu() {
    this.Eu && Ip()
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
class rC extends Z1 {
  constructor(t, n, i, o) {
    super(t, n, i, o),
      (this.type = 'firestore'),
      (this._queue = new s0()),
      (this._persistenceKey = o?.name || '[DEFAULT]')
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate()
      ;(this._queue = new s0(t)), (this._firestoreClient = void 0), await t
    }
  }
}
function iC(e, t) {
  const n = typeof e == 'object' ? e : L9(),
    i = typeof e == 'string' ? e : t || '(default)',
    o = A9(n, 'firestore').getImmediate({ identifier: i })
  if (!o._initialized) {
    const l = E3('firestore')
    l && nC(o, ...l)
  }
  return o
}
;(function (e, t = !0) {
  ;(function (n) {
    ol = n
  })(R9),
    Sc(
      new Xs(
        'firestore',
        (n, { instanceIdentifier: i, options: o }) => {
          const l = n.getProvider('app').getImmediate(),
            c = new rC(
              new W9(n.getProvider('auth-internal')),
              new G9(n.getProvider('app-check-internal')),
              (function (d, g) {
                if (
                  !Object.prototype.hasOwnProperty.apply(d.options, [
                    'projectId',
                  ])
                )
                  throw new Yt(
                    Jt.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new Ec(d.options.projectId, g)
              })(l, i),
              l
            )
          return (
            (o = Object.assign({ useFetchStreams: t }, o)), c._setSettings(o), c
          )
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    io(t0, '4.7.4', e),
    io(t0, '4.7.4', 'esm2017')
})()
var aC = 'firebase',
  oC = '11.0.1'
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
 */ io(aC, oC, 'app')
const sC = {
    apiKey: 'AIzaSyDVlRzfLEHgZDHF8brQyVqoQvIvgIkrcnA',
    authDomain: 'visamaz-69bdf.firebaseapp.com',
    projectId: 'visamaz-69bdf',
    storageBucket: 'visamaz-69bdf.firebasestorage.app',
    messagingSenderId: '521376424647',
    appId: '1:521376424647:web:d74bf4909c2c2e096b14e2',
  },
  lC = K1(sC)
iC(lC)
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
      o = 200,
      l = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      c = 'Expected a function',
      d = 'Invalid `variable` option passed into `_.template`',
      g = '__lodash_hash_undefined__',
      w = 500,
      P = '__lodash_placeholder__',
      O = 1,
      k = 2,
      V = 4,
      F = 1,
      W = 2,
      J = 1,
      L = 2,
      x = 4,
      I = 8,
      B = 16,
      G = 32,
      X = 64,
      S = 128,
      _ = 256,
      C = 512,
      A = 30,
      N = '...',
      M = 800,
      T = 16,
      Je = 1,
      $t = 2,
      qn = 3,
      Ee = 1 / 0,
      Z = 9007199254740991,
      ae = 17976931348623157e292,
      ue = NaN,
      _e = 4294967295,
      Ae = _e - 1,
      $e = _e >>> 1,
      An = [
        ['ary', S],
        ['bind', J],
        ['bindKey', L],
        ['curry', I],
        ['curryRight', B],
        ['flip', C],
        ['partial', G],
        ['partialRight', X],
        ['rearg', _],
      ],
      bt = '[object Arguments]',
      Bt = '[object Array]',
      pn = '[object AsyncFunction]',
      Ei = '[object Boolean]',
      xi = '[object Date]',
      la = '[object DOMException]',
      or = '[object Error]',
      Lr = '[object Function]',
      ua = '[object GeneratorFunction]',
      Rt = '[object Map]',
      sr = '[object Number]',
      sl = '[object Null]',
      gn = '[object Object]',
      ll = '[object Promise]',
      ul = '[object Proxy]',
      Ir = '[object RegExp]',
      Lt = '[object Set]',
      Nr = '[object String]',
      ca = '[object Symbol]',
      yo = '[object Undefined]',
      lr = '[object WeakMap]',
      bo = '[object WeakSet]',
      qe = '[object ArrayBuffer]',
      Ke = '[object DataView]',
      jr = '[object Float32Array]',
      fa = '[object Float64Array]',
      ha = '[object Int8Array]',
      wo = '[object Int16Array]',
      ur = '[object Int32Array]',
      da = '[object Uint8Array]',
      pa = '[object Uint8ClampedArray]',
      Ci = '[object Uint16Array]',
      _o = '[object Uint32Array]',
      Kc = /\b__p \+= '';/g,
      ko = /\b(__p \+=) '' \+/g,
      cl = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      ga = /&(?:amp|lt|gt|quot|#39);/g,
      ma = /[&<>"']/g,
      zr = RegExp(ga.source),
      fl = RegExp(ma.source),
      So = /<%-([\s\S]+?)%>/g,
      hl = /<%([\s\S]+?)%>/g,
      Dr = /<%=([\s\S]+?)%>/g,
      dl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      dt = /^\w*$/,
      pl =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      cr = /[\\^$.*+?()[\]{}|]/g,
      Ti = RegExp(cr.source),
      Eo = /^\s+/,
      Qc = /\s/,
      Mr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Gc = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Jc = /,? & /,
      xo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      va = /[()=,{}\[\]\/\s]/,
      Kn = /\\(\\)?/g,
      gl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Co = /\w*$/,
      To = /^[-+]0x[0-9a-f]+$/i,
      Ao = /^0b[01]+$/i,
      ml = /^\[object .+?Constructor\]$/,
      vl = /^0o[0-7]+$/i,
      Yc = /^(?:0|[1-9]\d*)$/,
      ya = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Ai = /($^)/,
      Po = /['\n\r\u2028\u2029\\]/g,
      Qn = '\\ud800-\\udfff',
      fr = '\\u0300-\\u036f',
      Oo = '\\ufe20-\\ufe2f',
      Xc = '\\u20d0-\\u20ff',
      Ro = fr + Oo + Xc,
      Lo = '\\u2700-\\u27bf',
      Io = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      No = '\\xac\\xb1\\xd7\\xf7',
      jo = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      yl = '\\u2000-\\u206f',
      bl =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      wl = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      _l = '\\ufe0e\\ufe0f',
      zo = No + jo + yl + bl,
      ba = "['’]",
      Zc = '[' + Qn + ']',
      Gn = '[' + zo + ']',
      Vt = '[' + Ro + ']',
      Pi = '\\d+',
      wa = '[' + Lo + ']',
      Do = '[' + Io + ']',
      Ie = '[^' + Qn + zo + Pi + Lo + Io + wl + ']',
      Fr = '\\ud83c[\\udffb-\\udfff]',
      Oi = '(?:' + Vt + '|' + Fr + ')',
      Ur = '[^' + Qn + ']',
      Mo = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      _a = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      $r = '[' + wl + ']',
      kl = '\\u200d',
      Sl = '(?:' + Do + '|' + Ie + ')',
      ef = '(?:' + $r + '|' + Ie + ')',
      Br = '(?:' + ba + '(?:d|ll|m|re|s|t|ve))?',
      Pn = '(?:' + ba + '(?:D|LL|M|RE|S|T|VE))?',
      Fo = Oi + '?',
      Uo = '[' + _l + ']?',
      El = '(?:' + kl + '(?:' + [Ur, Mo, _a].join('|') + ')' + Uo + Fo + ')*',
      Vr = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      tf = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      xl = Uo + Fo + El,
      nf = '(?:' + [wa, Mo, _a].join('|') + ')' + xl,
      Jn = '(?:' + [Ur + Vt + '?', Vt, Mo, _a, Zc].join('|') + ')',
      rf = RegExp(ba, 'g'),
      af = RegExp(Vt, 'g'),
      Hr = RegExp(Fr + '(?=' + Fr + ')|' + Jn + xl, 'g'),
      ka = RegExp(
        [
          $r + '?' + Do + '+' + Br + '(?=' + [Gn, $r, '$'].join('|') + ')',
          ef + '+' + Pn + '(?=' + [Gn, $r + Sl, '$'].join('|') + ')',
          $r + '?' + Sl + '+' + Br,
          $r + '+' + Pn,
          tf,
          Vr,
          Pi,
          nf,
        ].join('|'),
        'g'
      ),
      Cl = RegExp('[' + kl + Qn + Ro + _l + ']'),
      Ri = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Li = [
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
      Tl = -1,
      Pe = {}
    ;(Pe[jr] =
      Pe[fa] =
      Pe[ha] =
      Pe[wo] =
      Pe[ur] =
      Pe[da] =
      Pe[pa] =
      Pe[Ci] =
      Pe[_o] =
        !0),
      (Pe[bt] =
        Pe[Bt] =
        Pe[qe] =
        Pe[Ei] =
        Pe[Ke] =
        Pe[xi] =
        Pe[or] =
        Pe[Lr] =
        Pe[Rt] =
        Pe[sr] =
        Pe[gn] =
        Pe[Ir] =
        Pe[Lt] =
        Pe[Nr] =
        Pe[lr] =
          !1)
    var ce = {}
    ;(ce[bt] =
      ce[Bt] =
      ce[qe] =
      ce[Ke] =
      ce[Ei] =
      ce[xi] =
      ce[jr] =
      ce[fa] =
      ce[ha] =
      ce[wo] =
      ce[ur] =
      ce[Rt] =
      ce[sr] =
      ce[gn] =
      ce[Ir] =
      ce[Lt] =
      ce[Nr] =
      ce[ca] =
      ce[da] =
      ce[pa] =
      ce[Ci] =
      ce[_o] =
        !0),
      (ce[or] = ce[Lr] = ce[lr] = !1)
    var of = {
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
      Al = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      Pl = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      Ol = parseFloat,
      Sa = parseInt,
      $o = typeof us == 'object' && us && us.Object === Object && us,
      On = typeof self == 'object' && self && self.Object === Object && self,
      et = $o || On || Function('return this')(),
      Bo = t && !t.nodeType && t,
      nn = Bo && !0 && e && !e.nodeType && e,
      Vo = nn && nn.exports === Bo,
      Ii = Vo && $o.process,
      pt = (function () {
        try {
          var j = nn && nn.require && nn.require('util').types
          return j || (Ii && Ii.binding && Ii.binding('util'))
        } catch {}
      })(),
      Ho = pt && pt.isArrayBuffer,
      Ni = pt && pt.isDate,
      Rl = pt && pt.isMap,
      Wo = pt && pt.isRegExp,
      Wr = pt && pt.isSet,
      qo = pt && pt.isTypedArray
    function wt(j, H, U) {
      switch (U.length) {
        case 0:
          return j.call(H)
        case 1:
          return j.call(H, U[0])
        case 2:
          return j.call(H, U[0], U[1])
        case 3:
          return j.call(H, U[0], U[1], U[2])
      }
      return j.apply(H, U)
    }
    function Ko(j, H, U, ne) {
      for (var fe = -1, Ce = j == null ? 0 : j.length; ++fe < Ce; ) {
        var it = j[fe]
        H(ne, it, U(it), j)
      }
      return ne
    }
    function _t(j, H) {
      for (
        var U = -1, ne = j == null ? 0 : j.length;
        ++U < ne && H(j[U], U, j) !== !1;

      );
      return j
    }
    function Ll(j, H) {
      for (var U = j == null ? 0 : j.length; U-- && H(j[U], U, j) !== !1; );
      return j
    }
    function ji(j, H) {
      for (var U = -1, ne = j == null ? 0 : j.length; ++U < ne; )
        if (!H(j[U], U, j)) return !1
      return !0
    }
    function Rn(j, H) {
      for (
        var U = -1, ne = j == null ? 0 : j.length, fe = 0, Ce = [];
        ++U < ne;

      ) {
        var it = j[U]
        H(it, U, j) && (Ce[fe++] = it)
      }
      return Ce
    }
    function zi(j, H) {
      var U = j == null ? 0 : j.length
      return !!U && p(j, H, 0) > -1
    }
    function Ln(j, H, U) {
      for (var ne = -1, fe = j == null ? 0 : j.length; ++ne < fe; )
        if (U(H, j[ne])) return !0
      return !1
    }
    function je(j, H) {
      for (
        var U = -1, ne = j == null ? 0 : j.length, fe = Array(ne);
        ++U < ne;

      )
        fe[U] = H(j[U], U, j)
      return fe
    }
    function In(j, H) {
      for (var U = -1, ne = H.length, fe = j.length; ++U < ne; )
        j[fe + U] = H[U]
      return j
    }
    function Ea(j, H, U, ne) {
      var fe = -1,
        Ce = j == null ? 0 : j.length
      for (ne && Ce && (U = j[++fe]); ++fe < Ce; ) U = H(U, j[fe], fe, j)
      return U
    }
    function Il(j, H, U, ne) {
      var fe = j == null ? 0 : j.length
      for (ne && fe && (U = j[--fe]); fe--; ) U = H(U, j[fe], fe, j)
      return U
    }
    function kt(j, H) {
      for (var U = -1, ne = j == null ? 0 : j.length; ++U < ne; )
        if (H(j[U], U, j)) return !0
      return !1
    }
    var Nl = ee('length')
    function jl(j) {
      return j.split('')
    }
    function qr(j) {
      return j.match(xo) || []
    }
    function s(j, H, U) {
      var ne
      return (
        U(j, function (fe, Ce, it) {
          if (H(fe, Ce, it)) return (ne = Ce), !1
        }),
        ne
      )
    }
    function f(j, H, U, ne) {
      for (var fe = j.length, Ce = U + (ne ? 1 : -1); ne ? Ce-- : ++Ce < fe; )
        if (H(j[Ce], Ce, j)) return Ce
      return -1
    }
    function p(j, H, U) {
      return H === H ? cb(j, H, U) : f(j, D, U)
    }
    function y(j, H, U, ne) {
      for (var fe = U - 1, Ce = j.length; ++fe < Ce; )
        if (ne(j[fe], H)) return fe
      return -1
    }
    function D(j) {
      return j !== j
    }
    function $(j, H) {
      var U = j == null ? 0 : j.length
      return U ? nt(j, H) / U : ue
    }
    function ee(j) {
      return function (H) {
        return H == null ? n : H[j]
      }
    }
    function Oe(j) {
      return function (H) {
        return j == null ? n : j[H]
      }
    }
    function tt(j, H, U, ne, fe) {
      return (
        fe(j, function (Ce, it, ze) {
          U = ne ? ((ne = !1), Ce) : H(U, Ce, it, ze)
        }),
        U
      )
    }
    function xe(j, H) {
      var U = j.length
      for (j.sort(H); U--; ) j[U] = j[U].value
      return j
    }
    function nt(j, H) {
      for (var U, ne = -1, fe = j.length; ++ne < fe; ) {
        var Ce = H(j[ne])
        Ce !== n && (U = U === n ? Ce : U + Ce)
      }
      return U
    }
    function lt(j, H) {
      for (var U = -1, ne = Array(j); ++U < j; ) ne[U] = H(U)
      return ne
    }
    function Kr(j, H) {
      return je(H, function (U) {
        return [U, j[U]]
      })
    }
    function Ht(j) {
      return j && j.slice(0, Mp(j) + 1).replace(Eo, '')
    }
    function ut(j) {
      return function (H) {
        return j(H)
      }
    }
    function Di(j, H) {
      return je(H, function (U) {
        return j[U]
      })
    }
    function Qo(j, H) {
      return j.has(H)
    }
    function jp(j, H) {
      for (var U = -1, ne = j.length; ++U < ne && p(H, j[U], 0) > -1; );
      return U
    }
    function zp(j, H) {
      for (var U = j.length; U-- && p(H, j[U], 0) > -1; );
      return U
    }
    function nb(j, H) {
      for (var U = j.length, ne = 0; U--; ) j[U] === H && ++ne
      return ne
    }
    var rb = Oe(of),
      ib = Oe(sf)
    function ab(j) {
      return '\\' + Pl[j]
    }
    function ob(j, H) {
      return j == null ? n : j[H]
    }
    function xa(j) {
      return Cl.test(j)
    }
    function sb(j) {
      return Ri.test(j)
    }
    function lb(j) {
      for (var H, U = []; !(H = j.next()).done; ) U.push(H.value)
      return U
    }
    function lf(j) {
      var H = -1,
        U = Array(j.size)
      return (
        j.forEach(function (ne, fe) {
          U[++H] = [fe, ne]
        }),
        U
      )
    }
    function Dp(j, H) {
      return function (U) {
        return j(H(U))
      }
    }
    function Qr(j, H) {
      for (var U = -1, ne = j.length, fe = 0, Ce = []; ++U < ne; ) {
        var it = j[U]
        ;(it === H || it === P) && ((j[U] = P), (Ce[fe++] = U))
      }
      return Ce
    }
    function zl(j) {
      var H = -1,
        U = Array(j.size)
      return (
        j.forEach(function (ne) {
          U[++H] = ne
        }),
        U
      )
    }
    function ub(j) {
      var H = -1,
        U = Array(j.size)
      return (
        j.forEach(function (ne) {
          U[++H] = [ne, ne]
        }),
        U
      )
    }
    function cb(j, H, U) {
      for (var ne = U - 1, fe = j.length; ++ne < fe; )
        if (j[ne] === H) return ne
      return -1
    }
    function fb(j, H, U) {
      for (var ne = U + 1; ne--; ) if (j[ne] === H) return ne
      return ne
    }
    function Ca(j) {
      return xa(j) ? db(j) : Nl(j)
    }
    function Nn(j) {
      return xa(j) ? pb(j) : jl(j)
    }
    function Mp(j) {
      for (var H = j.length; H-- && Qc.test(j.charAt(H)); );
      return H
    }
    var hb = Oe(Al)
    function db(j) {
      for (var H = (Hr.lastIndex = 0); Hr.test(j); ) ++H
      return H
    }
    function pb(j) {
      return j.match(Hr) || []
    }
    function gb(j) {
      return j.match(ka) || []
    }
    var mb = function j(H) {
        H = H == null ? et : Ta.defaults(et.Object(), H, Ta.pick(et, Li))
        var U = H.Array,
          ne = H.Date,
          fe = H.Error,
          Ce = H.Function,
          it = H.Math,
          ze = H.Object,
          uf = H.RegExp,
          vb = H.String,
          mn = H.TypeError,
          Dl = U.prototype,
          yb = Ce.prototype,
          Aa = ze.prototype,
          Ml = H['__core-js_shared__'],
          Fl = yb.toString,
          Re = Aa.hasOwnProperty,
          bb = 0,
          Fp = (function () {
            var r = /[^.]+$/.exec((Ml && Ml.keys && Ml.keys.IE_PROTO) || '')
            return r ? 'Symbol(src)_1.' + r : ''
          })(),
          Ul = Aa.toString,
          wb = Fl.call(ze),
          _b = et._,
          kb = uf(
            '^' +
              Fl.call(Re)
                .replace(cr, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          $l = Vo ? H.Buffer : n,
          Gr = H.Symbol,
          Bl = H.Uint8Array,
          Up = $l ? $l.allocUnsafe : n,
          Vl = Dp(ze.getPrototypeOf, ze),
          $p = ze.create,
          Bp = Aa.propertyIsEnumerable,
          Hl = Dl.splice,
          Vp = Gr ? Gr.isConcatSpreadable : n,
          Go = Gr ? Gr.iterator : n,
          Mi = Gr ? Gr.toStringTag : n,
          Wl = (function () {
            try {
              var r = Vi(ze, 'defineProperty')
              return r({}, '', {}), r
            } catch {}
          })(),
          Sb = H.clearTimeout !== et.clearTimeout && H.clearTimeout,
          Eb = ne && ne.now !== et.Date.now && ne.now,
          xb = H.setTimeout !== et.setTimeout && H.setTimeout,
          ql = it.ceil,
          Kl = it.floor,
          cf = ze.getOwnPropertySymbols,
          Cb = $l ? $l.isBuffer : n,
          Hp = H.isFinite,
          Tb = Dl.join,
          Ab = Dp(ze.keys, ze),
          at = it.max,
          St = it.min,
          Pb = ne.now,
          Ob = H.parseInt,
          Wp = it.random,
          Rb = Dl.reverse,
          ff = Vi(H, 'DataView'),
          Jo = Vi(H, 'Map'),
          hf = Vi(H, 'Promise'),
          Pa = Vi(H, 'Set'),
          Yo = Vi(H, 'WeakMap'),
          Xo = Vi(ze, 'create'),
          Ql = Yo && new Yo(),
          Oa = {},
          Lb = Hi(ff),
          Ib = Hi(Jo),
          Nb = Hi(hf),
          jb = Hi(Pa),
          zb = Hi(Yo),
          Gl = Gr ? Gr.prototype : n,
          Zo = Gl ? Gl.valueOf : n,
          qp = Gl ? Gl.toString : n
        function v(r) {
          if (Qe(r) && !de(r) && !(r instanceof ye)) {
            if (r instanceof vn) return r
            if (Re.call(r, '__wrapped__')) return Kg(r)
          }
          return new vn(r)
        }
        var Ra = (function () {
          function r() {}
          return function (a) {
            if (!Be(a)) return {}
            if ($p) return $p(a)
            r.prototype = a
            var u = new r()
            return (r.prototype = n), u
          }
        })()
        function Jl() {}
        function vn(r, a) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!a),
            (this.__index__ = 0),
            (this.__values__ = n)
        }
        ;(v.templateSettings = {
          escape: So,
          evaluate: hl,
          interpolate: Dr,
          variable: '',
          imports: { _: v },
        }),
          (v.prototype = Jl.prototype),
          (v.prototype.constructor = v),
          (vn.prototype = Ra(Jl.prototype)),
          (vn.prototype.constructor = vn)
        function ye(r) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = _e),
            (this.__views__ = [])
        }
        function Db() {
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
        function Mb() {
          if (this.__filtered__) {
            var r = new ye(this)
            ;(r.__dir__ = -1), (r.__filtered__ = !0)
          } else (r = this.clone()), (r.__dir__ *= -1)
          return r
        }
        function Fb() {
          var r = this.__wrapped__.value(),
            a = this.__dir__,
            u = de(r),
            h = a < 0,
            m = u ? r.length : 0,
            b = Yw(0, m, this.__views__),
            E = b.start,
            R = b.end,
            z = R - E,
            q = h ? R : E - 1,
            K = this.__iteratees__,
            Q = K.length,
            te = 0,
            ie = St(z, this.__takeCount__)
          if (!u || (!h && m == z && ie == z)) return mg(r, this.__actions__)
          var se = []
          e: for (; z-- && te < ie; ) {
            q += a
            for (var ge = -1, le = r[q]; ++ge < Q; ) {
              var ve = K[ge],
                we = ve.iteratee,
                on = ve.type,
                jt = we(le)
              if (on == $t) le = jt
              else if (!jt) {
                if (on == Je) continue e
                break e
              }
            }
            se[te++] = le
          }
          return se
        }
        ;(ye.prototype = Ra(Jl.prototype)), (ye.prototype.constructor = ye)
        function Fi(r) {
          var a = -1,
            u = r == null ? 0 : r.length
          for (this.clear(); ++a < u; ) {
            var h = r[a]
            this.set(h[0], h[1])
          }
        }
        function Ub() {
          ;(this.__data__ = Xo ? Xo(null) : {}), (this.size = 0)
        }
        function $b(r) {
          var a = this.has(r) && delete this.__data__[r]
          return (this.size -= a ? 1 : 0), a
        }
        function Bb(r) {
          var a = this.__data__
          if (Xo) {
            var u = a[r]
            return u === g ? n : u
          }
          return Re.call(a, r) ? a[r] : n
        }
        function Vb(r) {
          var a = this.__data__
          return Xo ? a[r] !== n : Re.call(a, r)
        }
        function Hb(r, a) {
          var u = this.__data__
          return (
            (this.size += this.has(r) ? 0 : 1),
            (u[r] = Xo && a === n ? g : a),
            this
          )
        }
        ;(Fi.prototype.clear = Ub),
          (Fi.prototype.delete = $b),
          (Fi.prototype.get = Bb),
          (Fi.prototype.has = Vb),
          (Fi.prototype.set = Hb)
        function hr(r) {
          var a = -1,
            u = r == null ? 0 : r.length
          for (this.clear(); ++a < u; ) {
            var h = r[a]
            this.set(h[0], h[1])
          }
        }
        function Wb() {
          ;(this.__data__ = []), (this.size = 0)
        }
        function qb(r) {
          var a = this.__data__,
            u = Yl(a, r)
          if (u < 0) return !1
          var h = a.length - 1
          return u == h ? a.pop() : Hl.call(a, u, 1), --this.size, !0
        }
        function Kb(r) {
          var a = this.__data__,
            u = Yl(a, r)
          return u < 0 ? n : a[u][1]
        }
        function Qb(r) {
          return Yl(this.__data__, r) > -1
        }
        function Gb(r, a) {
          var u = this.__data__,
            h = Yl(u, r)
          return h < 0 ? (++this.size, u.push([r, a])) : (u[h][1] = a), this
        }
        ;(hr.prototype.clear = Wb),
          (hr.prototype.delete = qb),
          (hr.prototype.get = Kb),
          (hr.prototype.has = Qb),
          (hr.prototype.set = Gb)
        function dr(r) {
          var a = -1,
            u = r == null ? 0 : r.length
          for (this.clear(); ++a < u; ) {
            var h = r[a]
            this.set(h[0], h[1])
          }
        }
        function Jb() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new Fi(),
              map: new (Jo || hr)(),
              string: new Fi(),
            })
        }
        function Yb(r) {
          var a = uu(this, r).delete(r)
          return (this.size -= a ? 1 : 0), a
        }
        function Xb(r) {
          return uu(this, r).get(r)
        }
        function Zb(r) {
          return uu(this, r).has(r)
        }
        function ew(r, a) {
          var u = uu(this, r),
            h = u.size
          return u.set(r, a), (this.size += u.size == h ? 0 : 1), this
        }
        ;(dr.prototype.clear = Jb),
          (dr.prototype.delete = Yb),
          (dr.prototype.get = Xb),
          (dr.prototype.has = Zb),
          (dr.prototype.set = ew)
        function Ui(r) {
          var a = -1,
            u = r == null ? 0 : r.length
          for (this.__data__ = new dr(); ++a < u; ) this.add(r[a])
        }
        function tw(r) {
          return this.__data__.set(r, g), this
        }
        function nw(r) {
          return this.__data__.has(r)
        }
        ;(Ui.prototype.add = Ui.prototype.push = tw), (Ui.prototype.has = nw)
        function jn(r) {
          var a = (this.__data__ = new hr(r))
          this.size = a.size
        }
        function rw() {
          ;(this.__data__ = new hr()), (this.size = 0)
        }
        function iw(r) {
          var a = this.__data__,
            u = a.delete(r)
          return (this.size = a.size), u
        }
        function aw(r) {
          return this.__data__.get(r)
        }
        function ow(r) {
          return this.__data__.has(r)
        }
        function sw(r, a) {
          var u = this.__data__
          if (u instanceof hr) {
            var h = u.__data__
            if (!Jo || h.length < o - 1)
              return h.push([r, a]), (this.size = ++u.size), this
            u = this.__data__ = new dr(h)
          }
          return u.set(r, a), (this.size = u.size), this
        }
        ;(jn.prototype.clear = rw),
          (jn.prototype.delete = iw),
          (jn.prototype.get = aw),
          (jn.prototype.has = ow),
          (jn.prototype.set = sw)
        function Kp(r, a) {
          var u = de(r),
            h = !u && Wi(r),
            m = !u && !h && ei(r),
            b = !u && !h && !m && ja(r),
            E = u || h || m || b,
            R = E ? lt(r.length, vb) : [],
            z = R.length
          for (var q in r)
            (a || Re.call(r, q)) &&
              !(
                E &&
                (q == 'length' ||
                  (m && (q == 'offset' || q == 'parent')) ||
                  (b &&
                    (q == 'buffer' ||
                      q == 'byteLength' ||
                      q == 'byteOffset')) ||
                  vr(q, z))
              ) &&
              R.push(q)
          return R
        }
        function Qp(r) {
          var a = r.length
          return a ? r[Sf(0, a - 1)] : n
        }
        function lw(r, a) {
          return cu(Wt(r), $i(a, 0, r.length))
        }
        function uw(r) {
          return cu(Wt(r))
        }
        function df(r, a, u) {
          ;((u !== n && !zn(r[a], u)) || (u === n && !(a in r))) && pr(r, a, u)
        }
        function es(r, a, u) {
          var h = r[a]
          ;(!(Re.call(r, a) && zn(h, u)) || (u === n && !(a in r))) &&
            pr(r, a, u)
        }
        function Yl(r, a) {
          for (var u = r.length; u--; ) if (zn(r[u][0], a)) return u
          return -1
        }
        function cw(r, a, u, h) {
          return (
            Jr(r, function (m, b, E) {
              a(h, m, u(m), E)
            }),
            h
          )
        }
        function Gp(r, a) {
          return r && Xn(a, ct(a), r)
        }
        function fw(r, a) {
          return r && Xn(a, Kt(a), r)
        }
        function pr(r, a, u) {
          a == '__proto__' && Wl
            ? Wl(r, a, {
                configurable: !0,
                enumerable: !0,
                value: u,
                writable: !0,
              })
            : (r[a] = u)
        }
        function pf(r, a) {
          for (var u = -1, h = a.length, m = U(h), b = r == null; ++u < h; )
            m[u] = b ? n : Qf(r, a[u])
          return m
        }
        function $i(r, a, u) {
          return (
            r === r &&
              (u !== n && (r = r <= u ? r : u),
              a !== n && (r = r >= a ? r : a)),
            r
          )
        }
        function yn(r, a, u, h, m, b) {
          var E,
            R = a & O,
            z = a & k,
            q = a & V
          if ((u && (E = m ? u(r, h, m, b) : u(r)), E !== n)) return E
          if (!Be(r)) return r
          var K = de(r)
          if (K) {
            if (((E = Zw(r)), !R)) return Wt(r, E)
          } else {
            var Q = Et(r),
              te = Q == Lr || Q == ua
            if (ei(r)) return bg(r, R)
            if (Q == gn || Q == bt || (te && !m)) {
              if (((E = z || te ? {} : Mg(r)), !R))
                return z ? Bw(r, fw(E, r)) : $w(r, Gp(E, r))
            } else {
              if (!ce[Q]) return m ? r : {}
              E = e2(r, Q, R)
            }
          }
          b || (b = new jn())
          var ie = b.get(r)
          if (ie) return ie
          b.set(r, E),
            dm(r)
              ? r.forEach(function (le) {
                  E.add(yn(le, a, u, le, r, b))
                })
              : fm(r) &&
                r.forEach(function (le, ve) {
                  E.set(ve, yn(le, a, u, ve, r, b))
                })
          var se = q ? (z ? Nf : If) : z ? Kt : ct,
            ge = K ? n : se(r)
          return (
            _t(ge || r, function (le, ve) {
              ge && ((ve = le), (le = r[ve])), es(E, ve, yn(le, a, u, ve, r, b))
            }),
            E
          )
        }
        function hw(r) {
          var a = ct(r)
          return function (u) {
            return Jp(u, r, a)
          }
        }
        function Jp(r, a, u) {
          var h = u.length
          if (r == null) return !h
          for (r = ze(r); h--; ) {
            var m = u[h],
              b = a[m],
              E = r[m]
            if ((E === n && !(m in r)) || !b(E)) return !1
          }
          return !0
        }
        function Yp(r, a, u) {
          if (typeof r != 'function') throw new mn(c)
          return ss(function () {
            r.apply(n, u)
          }, a)
        }
        function ts(r, a, u, h) {
          var m = -1,
            b = zi,
            E = !0,
            R = r.length,
            z = [],
            q = a.length
          if (!R) return z
          u && (a = je(a, ut(u))),
            h
              ? ((b = Ln), (E = !1))
              : a.length >= o && ((b = Qo), (E = !1), (a = new Ui(a)))
          e: for (; ++m < R; ) {
            var K = r[m],
              Q = u == null ? K : u(K)
            if (((K = h || K !== 0 ? K : 0), E && Q === Q)) {
              for (var te = q; te--; ) if (a[te] === Q) continue e
              z.push(K)
            } else b(a, Q, h) || z.push(K)
          }
          return z
        }
        var Jr = Eg(Yn),
          Xp = Eg(mf, !0)
        function dw(r, a) {
          var u = !0
          return (
            Jr(r, function (h, m, b) {
              return (u = !!a(h, m, b)), u
            }),
            u
          )
        }
        function Xl(r, a, u) {
          for (var h = -1, m = r.length; ++h < m; ) {
            var b = r[h],
              E = a(b)
            if (E != null && (R === n ? E === E && !an(E) : u(E, R)))
              var R = E,
                z = b
          }
          return z
        }
        function pw(r, a, u, h) {
          var m = r.length
          for (
            u = pe(u),
              u < 0 && (u = -u > m ? 0 : m + u),
              h = h === n || h > m ? m : pe(h),
              h < 0 && (h += m),
              h = u > h ? 0 : gm(h);
            u < h;

          )
            r[u++] = a
          return r
        }
        function Zp(r, a) {
          var u = []
          return (
            Jr(r, function (h, m, b) {
              a(h, m, b) && u.push(h)
            }),
            u
          )
        }
        function gt(r, a, u, h, m) {
          var b = -1,
            E = r.length
          for (u || (u = n2), m || (m = []); ++b < E; ) {
            var R = r[b]
            a > 0 && u(R)
              ? a > 1
                ? gt(R, a - 1, u, h, m)
                : In(m, R)
              : h || (m[m.length] = R)
          }
          return m
        }
        var gf = xg(),
          eg = xg(!0)
        function Yn(r, a) {
          return r && gf(r, a, ct)
        }
        function mf(r, a) {
          return r && eg(r, a, ct)
        }
        function Zl(r, a) {
          return Rn(a, function (u) {
            return yr(r[u])
          })
        }
        function Bi(r, a) {
          a = Xr(a, r)
          for (var u = 0, h = a.length; r != null && u < h; ) r = r[Zn(a[u++])]
          return u && u == h ? r : n
        }
        function tg(r, a, u) {
          var h = a(r)
          return de(r) ? h : In(h, u(r))
        }
        function It(r) {
          return r == null
            ? r === n
              ? yo
              : sl
            : Mi && Mi in ze(r)
            ? Jw(r)
            : u2(r)
        }
        function vf(r, a) {
          return r > a
        }
        function gw(r, a) {
          return r != null && Re.call(r, a)
        }
        function mw(r, a) {
          return r != null && a in ze(r)
        }
        function vw(r, a, u) {
          return r >= St(a, u) && r < at(a, u)
        }
        function yf(r, a, u) {
          for (
            var h = u ? Ln : zi,
              m = r[0].length,
              b = r.length,
              E = b,
              R = U(b),
              z = 1 / 0,
              q = [];
            E--;

          ) {
            var K = r[E]
            E && a && (K = je(K, ut(a))),
              (z = St(K.length, z)),
              (R[E] =
                !u && (a || (m >= 120 && K.length >= 120)) ? new Ui(E && K) : n)
          }
          K = r[0]
          var Q = -1,
            te = R[0]
          e: for (; ++Q < m && q.length < z; ) {
            var ie = K[Q],
              se = a ? a(ie) : ie
            if (
              ((ie = u || ie !== 0 ? ie : 0), !(te ? Qo(te, se) : h(q, se, u)))
            ) {
              for (E = b; --E; ) {
                var ge = R[E]
                if (!(ge ? Qo(ge, se) : h(r[E], se, u))) continue e
              }
              te && te.push(se), q.push(ie)
            }
          }
          return q
        }
        function yw(r, a, u, h) {
          return (
            Yn(r, function (m, b, E) {
              a(h, u(m), b, E)
            }),
            h
          )
        }
        function ns(r, a, u) {
          ;(a = Xr(a, r)), (r = Bg(r, a))
          var h = r == null ? r : r[Zn(wn(a))]
          return h == null ? n : wt(h, r, u)
        }
        function ng(r) {
          return Qe(r) && It(r) == bt
        }
        function bw(r) {
          return Qe(r) && It(r) == qe
        }
        function ww(r) {
          return Qe(r) && It(r) == xi
        }
        function rs(r, a, u, h, m) {
          return r === a
            ? !0
            : r == null || a == null || (!Qe(r) && !Qe(a))
            ? r !== r && a !== a
            : _w(r, a, u, h, rs, m)
        }
        function _w(r, a, u, h, m, b) {
          var E = de(r),
            R = de(a),
            z = E ? Bt : Et(r),
            q = R ? Bt : Et(a)
          ;(z = z == bt ? gn : z), (q = q == bt ? gn : q)
          var K = z == gn,
            Q = q == gn,
            te = z == q
          if (te && ei(r)) {
            if (!ei(a)) return !1
            ;(E = !0), (K = !1)
          }
          if (te && !K)
            return (
              b || (b = new jn()),
              E || ja(r) ? jg(r, a, u, h, m, b) : Qw(r, a, z, u, h, m, b)
            )
          if (!(u & F)) {
            var ie = K && Re.call(r, '__wrapped__'),
              se = Q && Re.call(a, '__wrapped__')
            if (ie || se) {
              var ge = ie ? r.value() : r,
                le = se ? a.value() : a
              return b || (b = new jn()), m(ge, le, u, h, b)
            }
          }
          return te ? (b || (b = new jn()), Gw(r, a, u, h, m, b)) : !1
        }
        function kw(r) {
          return Qe(r) && Et(r) == Rt
        }
        function bf(r, a, u, h) {
          var m = u.length,
            b = m,
            E = !h
          if (r == null) return !b
          for (r = ze(r); m--; ) {
            var R = u[m]
            if (E && R[2] ? R[1] !== r[R[0]] : !(R[0] in r)) return !1
          }
          for (; ++m < b; ) {
            R = u[m]
            var z = R[0],
              q = r[z],
              K = R[1]
            if (E && R[2]) {
              if (q === n && !(z in r)) return !1
            } else {
              var Q = new jn()
              if (h) var te = h(q, K, z, r, a, Q)
              if (!(te === n ? rs(K, q, F | W, h, Q) : te)) return !1
            }
          }
          return !0
        }
        function rg(r) {
          if (!Be(r) || i2(r)) return !1
          var a = yr(r) ? kb : ml
          return a.test(Hi(r))
        }
        function Sw(r) {
          return Qe(r) && It(r) == Ir
        }
        function Ew(r) {
          return Qe(r) && Et(r) == Lt
        }
        function xw(r) {
          return Qe(r) && mu(r.length) && !!Pe[It(r)]
        }
        function ig(r) {
          return typeof r == 'function'
            ? r
            : r == null
            ? Qt
            : typeof r == 'object'
            ? de(r)
              ? sg(r[0], r[1])
              : og(r)
            : Cm(r)
        }
        function wf(r) {
          if (!os(r)) return Ab(r)
          var a = []
          for (var u in ze(r)) Re.call(r, u) && u != 'constructor' && a.push(u)
          return a
        }
        function Cw(r) {
          if (!Be(r)) return l2(r)
          var a = os(r),
            u = []
          for (var h in r)
            (h == 'constructor' && (a || !Re.call(r, h))) || u.push(h)
          return u
        }
        function _f(r, a) {
          return r < a
        }
        function ag(r, a) {
          var u = -1,
            h = qt(r) ? U(r.length) : []
          return (
            Jr(r, function (m, b, E) {
              h[++u] = a(m, b, E)
            }),
            h
          )
        }
        function og(r) {
          var a = zf(r)
          return a.length == 1 && a[0][2]
            ? Ug(a[0][0], a[0][1])
            : function (u) {
                return u === r || bf(u, r, a)
              }
        }
        function sg(r, a) {
          return Mf(r) && Fg(a)
            ? Ug(Zn(r), a)
            : function (u) {
                var h = Qf(u, r)
                return h === n && h === a ? Gf(u, r) : rs(a, h, F | W)
              }
        }
        function eu(r, a, u, h, m) {
          r !== a &&
            gf(
              a,
              function (b, E) {
                if ((m || (m = new jn()), Be(b))) Tw(r, a, E, u, eu, h, m)
                else {
                  var R = h ? h(Uf(r, E), b, E + '', r, a, m) : n
                  R === n && (R = b), df(r, E, R)
                }
              },
              Kt
            )
        }
        function Tw(r, a, u, h, m, b, E) {
          var R = Uf(r, u),
            z = Uf(a, u),
            q = E.get(z)
          if (q) {
            df(r, u, q)
            return
          }
          var K = b ? b(R, z, u + '', r, a, E) : n,
            Q = K === n
          if (Q) {
            var te = de(z),
              ie = !te && ei(z),
              se = !te && !ie && ja(z)
            ;(K = z),
              te || ie || se
                ? de(R)
                  ? (K = R)
                  : Ye(R)
                  ? (K = Wt(R))
                  : ie
                  ? ((Q = !1), (K = bg(z, !0)))
                  : se
                  ? ((Q = !1), (K = wg(z, !0)))
                  : (K = [])
                : ls(z) || Wi(z)
                ? ((K = R),
                  Wi(R) ? (K = mm(R)) : (!Be(R) || yr(R)) && (K = Mg(z)))
                : (Q = !1)
          }
          Q && (E.set(z, K), m(K, z, h, b, E), E.delete(z)), df(r, u, K)
        }
        function lg(r, a) {
          var u = r.length
          if (u) return (a += a < 0 ? u : 0), vr(a, u) ? r[a] : n
        }
        function ug(r, a, u) {
          a.length
            ? (a = je(a, function (b) {
                return de(b)
                  ? function (E) {
                      return Bi(E, b.length === 1 ? b[0] : b)
                    }
                  : b
              }))
            : (a = [Qt])
          var h = -1
          a = je(a, ut(oe()))
          var m = ag(r, function (b, E, R) {
            var z = je(a, function (q) {
              return q(b)
            })
            return { criteria: z, index: ++h, value: b }
          })
          return xe(m, function (b, E) {
            return Uw(b, E, u)
          })
        }
        function Aw(r, a) {
          return cg(r, a, function (u, h) {
            return Gf(r, h)
          })
        }
        function cg(r, a, u) {
          for (var h = -1, m = a.length, b = {}; ++h < m; ) {
            var E = a[h],
              R = Bi(r, E)
            u(R, E) && is(b, Xr(E, r), R)
          }
          return b
        }
        function Pw(r) {
          return function (a) {
            return Bi(a, r)
          }
        }
        function kf(r, a, u, h) {
          var m = h ? y : p,
            b = -1,
            E = a.length,
            R = r
          for (r === a && (a = Wt(a)), u && (R = je(r, ut(u))); ++b < E; )
            for (
              var z = 0, q = a[b], K = u ? u(q) : q;
              (z = m(R, K, z, h)) > -1;

            )
              R !== r && Hl.call(R, z, 1), Hl.call(r, z, 1)
          return r
        }
        function fg(r, a) {
          for (var u = r ? a.length : 0, h = u - 1; u--; ) {
            var m = a[u]
            if (u == h || m !== b) {
              var b = m
              vr(m) ? Hl.call(r, m, 1) : Cf(r, m)
            }
          }
          return r
        }
        function Sf(r, a) {
          return r + Kl(Wp() * (a - r + 1))
        }
        function Ow(r, a, u, h) {
          for (var m = -1, b = at(ql((a - r) / (u || 1)), 0), E = U(b); b--; )
            (E[h ? b : ++m] = r), (r += u)
          return E
        }
        function Ef(r, a) {
          var u = ''
          if (!r || a < 1 || a > Z) return u
          do a % 2 && (u += r), (a = Kl(a / 2)), a && (r += r)
          while (a)
          return u
        }
        function me(r, a) {
          return $f($g(r, a, Qt), r + '')
        }
        function Rw(r) {
          return Qp(za(r))
        }
        function Lw(r, a) {
          var u = za(r)
          return cu(u, $i(a, 0, u.length))
        }
        function is(r, a, u, h) {
          if (!Be(r)) return r
          a = Xr(a, r)
          for (
            var m = -1, b = a.length, E = b - 1, R = r;
            R != null && ++m < b;

          ) {
            var z = Zn(a[m]),
              q = u
            if (z === '__proto__' || z === 'constructor' || z === 'prototype')
              return r
            if (m != E) {
              var K = R[z]
              ;(q = h ? h(K, z, R) : n),
                q === n && (q = Be(K) ? K : vr(a[m + 1]) ? [] : {})
            }
            es(R, z, q), (R = R[z])
          }
          return r
        }
        var hg = Ql
            ? function (r, a) {
                return Ql.set(r, a), r
              }
            : Qt,
          Iw = Wl
            ? function (r, a) {
                return Wl(r, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Yf(a),
                  writable: !0,
                })
              }
            : Qt
        function Nw(r) {
          return cu(za(r))
        }
        function bn(r, a, u) {
          var h = -1,
            m = r.length
          a < 0 && (a = -a > m ? 0 : m + a),
            (u = u > m ? m : u),
            u < 0 && (u += m),
            (m = a > u ? 0 : (u - a) >>> 0),
            (a >>>= 0)
          for (var b = U(m); ++h < m; ) b[h] = r[h + a]
          return b
        }
        function jw(r, a) {
          var u
          return (
            Jr(r, function (h, m, b) {
              return (u = a(h, m, b)), !u
            }),
            !!u
          )
        }
        function tu(r, a, u) {
          var h = 0,
            m = r == null ? h : r.length
          if (typeof a == 'number' && a === a && m <= $e) {
            for (; h < m; ) {
              var b = (h + m) >>> 1,
                E = r[b]
              E !== null && !an(E) && (u ? E <= a : E < a)
                ? (h = b + 1)
                : (m = b)
            }
            return m
          }
          return xf(r, a, Qt, u)
        }
        function xf(r, a, u, h) {
          var m = 0,
            b = r == null ? 0 : r.length
          if (b === 0) return 0
          a = u(a)
          for (
            var E = a !== a, R = a === null, z = an(a), q = a === n;
            m < b;

          ) {
            var K = Kl((m + b) / 2),
              Q = u(r[K]),
              te = Q !== n,
              ie = Q === null,
              se = Q === Q,
              ge = an(Q)
            if (E) var le = h || se
            else
              q
                ? (le = se && (h || te))
                : R
                ? (le = se && te && (h || !ie))
                : z
                ? (le = se && te && !ie && (h || !ge))
                : ie || ge
                ? (le = !1)
                : (le = h ? Q <= a : Q < a)
            le ? (m = K + 1) : (b = K)
          }
          return St(b, Ae)
        }
        function dg(r, a) {
          for (var u = -1, h = r.length, m = 0, b = []; ++u < h; ) {
            var E = r[u],
              R = a ? a(E) : E
            if (!u || !zn(R, z)) {
              var z = R
              b[m++] = E === 0 ? 0 : E
            }
          }
          return b
        }
        function pg(r) {
          return typeof r == 'number' ? r : an(r) ? ue : +r
        }
        function rn(r) {
          if (typeof r == 'string') return r
          if (de(r)) return je(r, rn) + ''
          if (an(r)) return qp ? qp.call(r) : ''
          var a = r + ''
          return a == '0' && 1 / r == -Ee ? '-0' : a
        }
        function Yr(r, a, u) {
          var h = -1,
            m = zi,
            b = r.length,
            E = !0,
            R = [],
            z = R
          if (u) (E = !1), (m = Ln)
          else if (b >= o) {
            var q = a ? null : qw(r)
            if (q) return zl(q)
            ;(E = !1), (m = Qo), (z = new Ui())
          } else z = a ? [] : R
          e: for (; ++h < b; ) {
            var K = r[h],
              Q = a ? a(K) : K
            if (((K = u || K !== 0 ? K : 0), E && Q === Q)) {
              for (var te = z.length; te--; ) if (z[te] === Q) continue e
              a && z.push(Q), R.push(K)
            } else m(z, Q, u) || (z !== R && z.push(Q), R.push(K))
          }
          return R
        }
        function Cf(r, a) {
          return (
            (a = Xr(a, r)), (r = Bg(r, a)), r == null || delete r[Zn(wn(a))]
          )
        }
        function gg(r, a, u, h) {
          return is(r, a, u(Bi(r, a)), h)
        }
        function nu(r, a, u, h) {
          for (
            var m = r.length, b = h ? m : -1;
            (h ? b-- : ++b < m) && a(r[b], b, r);

          );
          return u
            ? bn(r, h ? 0 : b, h ? b + 1 : m)
            : bn(r, h ? b + 1 : 0, h ? m : b)
        }
        function mg(r, a) {
          var u = r
          return (
            u instanceof ye && (u = u.value()),
            Ea(
              a,
              function (h, m) {
                return m.func.apply(m.thisArg, In([h], m.args))
              },
              u
            )
          )
        }
        function Tf(r, a, u) {
          var h = r.length
          if (h < 2) return h ? Yr(r[0]) : []
          for (var m = -1, b = U(h); ++m < h; )
            for (var E = r[m], R = -1; ++R < h; )
              R != m && (b[m] = ts(b[m] || E, r[R], a, u))
          return Yr(gt(b, 1), a, u)
        }
        function vg(r, a, u) {
          for (var h = -1, m = r.length, b = a.length, E = {}; ++h < m; ) {
            var R = h < b ? a[h] : n
            u(E, r[h], R)
          }
          return E
        }
        function Af(r) {
          return Ye(r) ? r : []
        }
        function Pf(r) {
          return typeof r == 'function' ? r : Qt
        }
        function Xr(r, a) {
          return de(r) ? r : Mf(r, a) ? [r] : qg(Te(r))
        }
        var zw = me
        function Zr(r, a, u) {
          var h = r.length
          return (u = u === n ? h : u), !a && u >= h ? r : bn(r, a, u)
        }
        var yg =
          Sb ||
          function (r) {
            return et.clearTimeout(r)
          }
        function bg(r, a) {
          if (a) return r.slice()
          var u = r.length,
            h = Up ? Up(u) : new r.constructor(u)
          return r.copy(h), h
        }
        function Of(r) {
          var a = new r.constructor(r.byteLength)
          return new Bl(a).set(new Bl(r)), a
        }
        function Dw(r, a) {
          var u = a ? Of(r.buffer) : r.buffer
          return new r.constructor(u, r.byteOffset, r.byteLength)
        }
        function Mw(r) {
          var a = new r.constructor(r.source, Co.exec(r))
          return (a.lastIndex = r.lastIndex), a
        }
        function Fw(r) {
          return Zo ? ze(Zo.call(r)) : {}
        }
        function wg(r, a) {
          var u = a ? Of(r.buffer) : r.buffer
          return new r.constructor(u, r.byteOffset, r.length)
        }
        function _g(r, a) {
          if (r !== a) {
            var u = r !== n,
              h = r === null,
              m = r === r,
              b = an(r),
              E = a !== n,
              R = a === null,
              z = a === a,
              q = an(a)
            if (
              (!R && !q && !b && r > a) ||
              (b && E && z && !R && !q) ||
              (h && E && z) ||
              (!u && z) ||
              !m
            )
              return 1
            if (
              (!h && !b && !q && r < a) ||
              (q && u && m && !h && !b) ||
              (R && u && m) ||
              (!E && m) ||
              !z
            )
              return -1
          }
          return 0
        }
        function Uw(r, a, u) {
          for (
            var h = -1,
              m = r.criteria,
              b = a.criteria,
              E = m.length,
              R = u.length;
            ++h < E;

          ) {
            var z = _g(m[h], b[h])
            if (z) {
              if (h >= R) return z
              var q = u[h]
              return z * (q == 'desc' ? -1 : 1)
            }
          }
          return r.index - a.index
        }
        function kg(r, a, u, h) {
          for (
            var m = -1,
              b = r.length,
              E = u.length,
              R = -1,
              z = a.length,
              q = at(b - E, 0),
              K = U(z + q),
              Q = !h;
            ++R < z;

          )
            K[R] = a[R]
          for (; ++m < E; ) (Q || m < b) && (K[u[m]] = r[m])
          for (; q--; ) K[R++] = r[m++]
          return K
        }
        function Sg(r, a, u, h) {
          for (
            var m = -1,
              b = r.length,
              E = -1,
              R = u.length,
              z = -1,
              q = a.length,
              K = at(b - R, 0),
              Q = U(K + q),
              te = !h;
            ++m < K;

          )
            Q[m] = r[m]
          for (var ie = m; ++z < q; ) Q[ie + z] = a[z]
          for (; ++E < R; ) (te || m < b) && (Q[ie + u[E]] = r[m++])
          return Q
        }
        function Wt(r, a) {
          var u = -1,
            h = r.length
          for (a || (a = U(h)); ++u < h; ) a[u] = r[u]
          return a
        }
        function Xn(r, a, u, h) {
          var m = !u
          u || (u = {})
          for (var b = -1, E = a.length; ++b < E; ) {
            var R = a[b],
              z = h ? h(u[R], r[R], R, u, r) : n
            z === n && (z = r[R]), m ? pr(u, R, z) : es(u, R, z)
          }
          return u
        }
        function $w(r, a) {
          return Xn(r, Df(r), a)
        }
        function Bw(r, a) {
          return Xn(r, zg(r), a)
        }
        function ru(r, a) {
          return function (u, h) {
            var m = de(u) ? Ko : cw,
              b = a ? a() : {}
            return m(u, r, oe(h, 2), b)
          }
        }
        function La(r) {
          return me(function (a, u) {
            var h = -1,
              m = u.length,
              b = m > 1 ? u[m - 1] : n,
              E = m > 2 ? u[2] : n
            for (
              b = r.length > 3 && typeof b == 'function' ? (m--, b) : n,
                E && Nt(u[0], u[1], E) && ((b = m < 3 ? n : b), (m = 1)),
                a = ze(a);
              ++h < m;

            ) {
              var R = u[h]
              R && r(a, R, h, b)
            }
            return a
          })
        }
        function Eg(r, a) {
          return function (u, h) {
            if (u == null) return u
            if (!qt(u)) return r(u, h)
            for (
              var m = u.length, b = a ? m : -1, E = ze(u);
              (a ? b-- : ++b < m) && h(E[b], b, E) !== !1;

            );
            return u
          }
        }
        function xg(r) {
          return function (a, u, h) {
            for (var m = -1, b = ze(a), E = h(a), R = E.length; R--; ) {
              var z = E[r ? R : ++m]
              if (u(b[z], z, b) === !1) break
            }
            return a
          }
        }
        function Vw(r, a, u) {
          var h = a & J,
            m = as(r)
          function b() {
            var E = this && this !== et && this instanceof b ? m : r
            return E.apply(h ? u : this, arguments)
          }
          return b
        }
        function Cg(r) {
          return function (a) {
            a = Te(a)
            var u = xa(a) ? Nn(a) : n,
              h = u ? u[0] : a.charAt(0),
              m = u ? Zr(u, 1).join('') : a.slice(1)
            return h[r]() + m
          }
        }
        function Ia(r) {
          return function (a) {
            return Ea(Em(Sm(a).replace(rf, '')), r, '')
          }
        }
        function as(r) {
          return function () {
            var a = arguments
            switch (a.length) {
              case 0:
                return new r()
              case 1:
                return new r(a[0])
              case 2:
                return new r(a[0], a[1])
              case 3:
                return new r(a[0], a[1], a[2])
              case 4:
                return new r(a[0], a[1], a[2], a[3])
              case 5:
                return new r(a[0], a[1], a[2], a[3], a[4])
              case 6:
                return new r(a[0], a[1], a[2], a[3], a[4], a[5])
              case 7:
                return new r(a[0], a[1], a[2], a[3], a[4], a[5], a[6])
            }
            var u = Ra(r.prototype),
              h = r.apply(u, a)
            return Be(h) ? h : u
          }
        }
        function Hw(r, a, u) {
          var h = as(r)
          function m() {
            for (var b = arguments.length, E = U(b), R = b, z = Na(m); R--; )
              E[R] = arguments[R]
            var q = b < 3 && E[0] !== z && E[b - 1] !== z ? [] : Qr(E, z)
            if (((b -= q.length), b < u))
              return Rg(r, a, iu, m.placeholder, n, E, q, n, n, u - b)
            var K = this && this !== et && this instanceof m ? h : r
            return wt(K, this, E)
          }
          return m
        }
        function Tg(r) {
          return function (a, u, h) {
            var m = ze(a)
            if (!qt(a)) {
              var b = oe(u, 3)
              ;(a = ct(a)),
                (u = function (R) {
                  return b(m[R], R, m)
                })
            }
            var E = r(a, u, h)
            return E > -1 ? m[b ? a[E] : E] : n
          }
        }
        function Ag(r) {
          return mr(function (a) {
            var u = a.length,
              h = u,
              m = vn.prototype.thru
            for (r && a.reverse(); h--; ) {
              var b = a[h]
              if (typeof b != 'function') throw new mn(c)
              if (m && !E && lu(b) == 'wrapper') var E = new vn([], !0)
            }
            for (h = E ? h : u; ++h < u; ) {
              b = a[h]
              var R = lu(b),
                z = R == 'wrapper' ? jf(b) : n
              z &&
              Ff(z[0]) &&
              z[1] == (S | I | G | _) &&
              !z[4].length &&
              z[9] == 1
                ? (E = E[lu(z[0])].apply(E, z[3]))
                : (E = b.length == 1 && Ff(b) ? E[R]() : E.thru(b))
            }
            return function () {
              var q = arguments,
                K = q[0]
              if (E && q.length == 1 && de(K)) return E.plant(K).value()
              for (var Q = 0, te = u ? a[Q].apply(this, q) : K; ++Q < u; )
                te = a[Q].call(this, te)
              return te
            }
          })
        }
        function iu(r, a, u, h, m, b, E, R, z, q) {
          var K = a & S,
            Q = a & J,
            te = a & L,
            ie = a & (I | B),
            se = a & C,
            ge = te ? n : as(r)
          function le() {
            for (var ve = arguments.length, we = U(ve), on = ve; on--; )
              we[on] = arguments[on]
            if (ie)
              var jt = Na(le),
                sn = nb(we, jt)
            if (
              (h && (we = kg(we, h, m, ie)),
              b && (we = Sg(we, b, E, ie)),
              (ve -= sn),
              ie && ve < q)
            ) {
              var Xe = Qr(we, jt)
              return Rg(r, a, iu, le.placeholder, u, we, Xe, R, z, q - ve)
            }
            var Dn = Q ? u : this,
              wr = te ? Dn[r] : r
            return (
              (ve = we.length),
              R ? (we = c2(we, R)) : se && ve > 1 && we.reverse(),
              K && z < ve && (we.length = z),
              this && this !== et && this instanceof le && (wr = ge || as(wr)),
              wr.apply(Dn, we)
            )
          }
          return le
        }
        function Pg(r, a) {
          return function (u, h) {
            return yw(u, r, a(h), {})
          }
        }
        function au(r, a) {
          return function (u, h) {
            var m
            if (u === n && h === n) return a
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
        function Rf(r) {
          return mr(function (a) {
            return (
              (a = je(a, ut(oe()))),
              me(function (u) {
                var h = this
                return r(a, function (m) {
                  return wt(m, h, u)
                })
              })
            )
          })
        }
        function ou(r, a) {
          a = a === n ? ' ' : rn(a)
          var u = a.length
          if (u < 2) return u ? Ef(a, r) : a
          var h = Ef(a, ql(r / Ca(a)))
          return xa(a) ? Zr(Nn(h), 0, r).join('') : h.slice(0, r)
        }
        function Ww(r, a, u, h) {
          var m = a & J,
            b = as(r)
          function E() {
            for (
              var R = -1,
                z = arguments.length,
                q = -1,
                K = h.length,
                Q = U(K + z),
                te = this && this !== et && this instanceof E ? b : r;
              ++q < K;

            )
              Q[q] = h[q]
            for (; z--; ) Q[q++] = arguments[++R]
            return wt(te, m ? u : this, Q)
          }
          return E
        }
        function Og(r) {
          return function (a, u, h) {
            return (
              h && typeof h != 'number' && Nt(a, u, h) && (u = h = n),
              (a = br(a)),
              u === n ? ((u = a), (a = 0)) : (u = br(u)),
              (h = h === n ? (a < u ? 1 : -1) : br(h)),
              Ow(a, u, h, r)
            )
          }
        }
        function su(r) {
          return function (a, u) {
            return (
              (typeof a == 'string' && typeof u == 'string') ||
                ((a = _n(a)), (u = _n(u))),
              r(a, u)
            )
          }
        }
        function Rg(r, a, u, h, m, b, E, R, z, q) {
          var K = a & I,
            Q = K ? E : n,
            te = K ? n : E,
            ie = K ? b : n,
            se = K ? n : b
          ;(a |= K ? G : X), (a &= ~(K ? X : G)), a & x || (a &= ~(J | L))
          var ge = [r, a, m, ie, Q, se, te, R, z, q],
            le = u.apply(n, ge)
          return Ff(r) && Vg(le, ge), (le.placeholder = h), Hg(le, r, a)
        }
        function Lf(r) {
          var a = it[r]
          return function (u, h) {
            if (
              ((u = _n(u)), (h = h == null ? 0 : St(pe(h), 292)), h && Hp(u))
            ) {
              var m = (Te(u) + 'e').split('e'),
                b = a(m[0] + 'e' + (+m[1] + h))
              return (m = (Te(b) + 'e').split('e')), +(m[0] + 'e' + (+m[1] - h))
            }
            return a(u)
          }
        }
        var qw =
          Pa && 1 / zl(new Pa([, -0]))[1] == Ee
            ? function (r) {
                return new Pa(r)
              }
            : eh
        function Lg(r) {
          return function (a) {
            var u = Et(a)
            return u == Rt ? lf(a) : u == Lt ? ub(a) : Kr(a, r(a))
          }
        }
        function gr(r, a, u, h, m, b, E, R) {
          var z = a & L
          if (!z && typeof r != 'function') throw new mn(c)
          var q = h ? h.length : 0
          if (
            (q || ((a &= ~(G | X)), (h = m = n)),
            (E = E === n ? E : at(pe(E), 0)),
            (R = R === n ? R : pe(R)),
            (q -= m ? m.length : 0),
            a & X)
          ) {
            var K = h,
              Q = m
            h = m = n
          }
          var te = z ? n : jf(r),
            ie = [r, a, u, h, m, K, Q, b, E, R]
          if (
            (te && s2(ie, te),
            (r = ie[0]),
            (a = ie[1]),
            (u = ie[2]),
            (h = ie[3]),
            (m = ie[4]),
            (R = ie[9] = ie[9] === n ? (z ? 0 : r.length) : at(ie[9] - q, 0)),
            !R && a & (I | B) && (a &= ~(I | B)),
            !a || a == J)
          )
            var se = Vw(r, a, u)
          else
            a == I || a == B
              ? (se = Hw(r, a, R))
              : (a == G || a == (J | G)) && !m.length
              ? (se = Ww(r, a, u, h))
              : (se = iu.apply(n, ie))
          var ge = te ? hg : Vg
          return Hg(ge(se, ie), r, a)
        }
        function Ig(r, a, u, h) {
          return r === n || (zn(r, Aa[u]) && !Re.call(h, u)) ? a : r
        }
        function Ng(r, a, u, h, m, b) {
          return (
            Be(r) && Be(a) && (b.set(a, r), eu(r, a, n, Ng, b), b.delete(a)), r
          )
        }
        function Kw(r) {
          return ls(r) ? n : r
        }
        function jg(r, a, u, h, m, b) {
          var E = u & F,
            R = r.length,
            z = a.length
          if (R != z && !(E && z > R)) return !1
          var q = b.get(r),
            K = b.get(a)
          if (q && K) return q == a && K == r
          var Q = -1,
            te = !0,
            ie = u & W ? new Ui() : n
          for (b.set(r, a), b.set(a, r); ++Q < R; ) {
            var se = r[Q],
              ge = a[Q]
            if (h) var le = E ? h(ge, se, Q, a, r, b) : h(se, ge, Q, r, a, b)
            if (le !== n) {
              if (le) continue
              te = !1
              break
            }
            if (ie) {
              if (
                !kt(a, function (ve, we) {
                  if (!Qo(ie, we) && (se === ve || m(se, ve, u, h, b)))
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
          return b.delete(r), b.delete(a), te
        }
        function Qw(r, a, u, h, m, b, E) {
          switch (u) {
            case Ke:
              if (r.byteLength != a.byteLength || r.byteOffset != a.byteOffset)
                return !1
              ;(r = r.buffer), (a = a.buffer)
            case qe:
              return !(r.byteLength != a.byteLength || !b(new Bl(r), new Bl(a)))
            case Ei:
            case xi:
            case sr:
              return zn(+r, +a)
            case or:
              return r.name == a.name && r.message == a.message
            case Ir:
            case Nr:
              return r == a + ''
            case Rt:
              var R = lf
            case Lt:
              var z = h & F
              if ((R || (R = zl), r.size != a.size && !z)) return !1
              var q = E.get(r)
              if (q) return q == a
              ;(h |= W), E.set(r, a)
              var K = jg(R(r), R(a), h, m, b, E)
              return E.delete(r), K
            case ca:
              if (Zo) return Zo.call(r) == Zo.call(a)
          }
          return !1
        }
        function Gw(r, a, u, h, m, b) {
          var E = u & F,
            R = If(r),
            z = R.length,
            q = If(a),
            K = q.length
          if (z != K && !E) return !1
          for (var Q = z; Q--; ) {
            var te = R[Q]
            if (!(E ? te in a : Re.call(a, te))) return !1
          }
          var ie = b.get(r),
            se = b.get(a)
          if (ie && se) return ie == a && se == r
          var ge = !0
          b.set(r, a), b.set(a, r)
          for (var le = E; ++Q < z; ) {
            te = R[Q]
            var ve = r[te],
              we = a[te]
            if (h) var on = E ? h(we, ve, te, a, r, b) : h(ve, we, te, r, a, b)
            if (!(on === n ? ve === we || m(ve, we, u, h, b) : on)) {
              ge = !1
              break
            }
            le || (le = te == 'constructor')
          }
          if (ge && !le) {
            var jt = r.constructor,
              sn = a.constructor
            jt != sn &&
              'constructor' in r &&
              'constructor' in a &&
              !(
                typeof jt == 'function' &&
                jt instanceof jt &&
                typeof sn == 'function' &&
                sn instanceof sn
              ) &&
              (ge = !1)
          }
          return b.delete(r), b.delete(a), ge
        }
        function mr(r) {
          return $f($g(r, n, Jg), r + '')
        }
        function If(r) {
          return tg(r, ct, Df)
        }
        function Nf(r) {
          return tg(r, Kt, zg)
        }
        var jf = Ql
          ? function (r) {
              return Ql.get(r)
            }
          : eh
        function lu(r) {
          for (
            var a = r.name + '', u = Oa[a], h = Re.call(Oa, a) ? u.length : 0;
            h--;

          ) {
            var m = u[h],
              b = m.func
            if (b == null || b == r) return m.name
          }
          return a
        }
        function Na(r) {
          var a = Re.call(v, 'placeholder') ? v : r
          return a.placeholder
        }
        function oe() {
          var r = v.iteratee || Xf
          return (
            (r = r === Xf ? ig : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          )
        }
        function uu(r, a) {
          var u = r.__data__
          return r2(a) ? u[typeof a == 'string' ? 'string' : 'hash'] : u.map
        }
        function zf(r) {
          for (var a = ct(r), u = a.length; u--; ) {
            var h = a[u],
              m = r[h]
            a[u] = [h, m, Fg(m)]
          }
          return a
        }
        function Vi(r, a) {
          var u = ob(r, a)
          return rg(u) ? u : n
        }
        function Jw(r) {
          var a = Re.call(r, Mi),
            u = r[Mi]
          try {
            r[Mi] = n
            var h = !0
          } catch {}
          var m = Ul.call(r)
          return h && (a ? (r[Mi] = u) : delete r[Mi]), m
        }
        var Df = cf
            ? function (r) {
                return r == null
                  ? []
                  : ((r = ze(r)),
                    Rn(cf(r), function (a) {
                      return Bp.call(r, a)
                    }))
              }
            : th,
          zg = cf
            ? function (r) {
                for (var a = []; r; ) In(a, Df(r)), (r = Vl(r))
                return a
              }
            : th,
          Et = It
        ;((ff && Et(new ff(new ArrayBuffer(1))) != Ke) ||
          (Jo && Et(new Jo()) != Rt) ||
          (hf && Et(hf.resolve()) != ll) ||
          (Pa && Et(new Pa()) != Lt) ||
          (Yo && Et(new Yo()) != lr)) &&
          (Et = function (r) {
            var a = It(r),
              u = a == gn ? r.constructor : n,
              h = u ? Hi(u) : ''
            if (h)
              switch (h) {
                case Lb:
                  return Ke
                case Ib:
                  return Rt
                case Nb:
                  return ll
                case jb:
                  return Lt
                case zb:
                  return lr
              }
            return a
          })
        function Yw(r, a, u) {
          for (var h = -1, m = u.length; ++h < m; ) {
            var b = u[h],
              E = b.size
            switch (b.type) {
              case 'drop':
                r += E
                break
              case 'dropRight':
                a -= E
                break
              case 'take':
                a = St(a, r + E)
                break
              case 'takeRight':
                r = at(r, a - E)
                break
            }
          }
          return { start: r, end: a }
        }
        function Xw(r) {
          var a = r.match(Gc)
          return a ? a[1].split(Jc) : []
        }
        function Dg(r, a, u) {
          a = Xr(a, r)
          for (var h = -1, m = a.length, b = !1; ++h < m; ) {
            var E = Zn(a[h])
            if (!(b = r != null && u(r, E))) break
            r = r[E]
          }
          return b || ++h != m
            ? b
            : ((m = r == null ? 0 : r.length),
              !!m && mu(m) && vr(E, m) && (de(r) || Wi(r)))
        }
        function Zw(r) {
          var a = r.length,
            u = new r.constructor(a)
          return (
            a &&
              typeof r[0] == 'string' &&
              Re.call(r, 'index') &&
              ((u.index = r.index), (u.input = r.input)),
            u
          )
        }
        function Mg(r) {
          return typeof r.constructor == 'function' && !os(r) ? Ra(Vl(r)) : {}
        }
        function e2(r, a, u) {
          var h = r.constructor
          switch (a) {
            case qe:
              return Of(r)
            case Ei:
            case xi:
              return new h(+r)
            case Ke:
              return Dw(r, u)
            case jr:
            case fa:
            case ha:
            case wo:
            case ur:
            case da:
            case pa:
            case Ci:
            case _o:
              return wg(r, u)
            case Rt:
              return new h()
            case sr:
            case Nr:
              return new h(r)
            case Ir:
              return Mw(r)
            case Lt:
              return new h()
            case ca:
              return Fw(r)
          }
        }
        function t2(r, a) {
          var u = a.length
          if (!u) return r
          var h = u - 1
          return (
            (a[h] = (u > 1 ? '& ' : '') + a[h]),
            (a = a.join(u > 2 ? ', ' : ' ')),
            r.replace(
              Mr,
              `{
/* [wrapped with ` +
                a +
                `] */
`
            )
          )
        }
        function n2(r) {
          return de(r) || Wi(r) || !!(Vp && r && r[Vp])
        }
        function vr(r, a) {
          var u = typeof r
          return (
            (a = a ?? Z),
            !!a &&
              (u == 'number' || (u != 'symbol' && Yc.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < a
          )
        }
        function Nt(r, a, u) {
          if (!Be(u)) return !1
          var h = typeof a
          return (
            h == 'number' ? qt(u) && vr(a, u.length) : h == 'string' && a in u
          )
            ? zn(u[a], r)
            : !1
        }
        function Mf(r, a) {
          if (de(r)) return !1
          var u = typeof r
          return u == 'number' ||
            u == 'symbol' ||
            u == 'boolean' ||
            r == null ||
            an(r)
            ? !0
            : dt.test(r) || !dl.test(r) || (a != null && r in ze(a))
        }
        function r2(r) {
          var a = typeof r
          return a == 'string' ||
            a == 'number' ||
            a == 'symbol' ||
            a == 'boolean'
            ? r !== '__proto__'
            : r === null
        }
        function Ff(r) {
          var a = lu(r),
            u = v[a]
          if (typeof u != 'function' || !(a in ye.prototype)) return !1
          if (r === u) return !0
          var h = jf(u)
          return !!h && r === h[0]
        }
        function i2(r) {
          return !!Fp && Fp in r
        }
        var a2 = Ml ? yr : nh
        function os(r) {
          var a = r && r.constructor,
            u = (typeof a == 'function' && a.prototype) || Aa
          return r === u
        }
        function Fg(r) {
          return r === r && !Be(r)
        }
        function Ug(r, a) {
          return function (u) {
            return u == null ? !1 : u[r] === a && (a !== n || r in ze(u))
          }
        }
        function o2(r) {
          var a = pu(r, function (h) {
              return u.size === w && u.clear(), h
            }),
            u = a.cache
          return a
        }
        function s2(r, a) {
          var u = r[1],
            h = a[1],
            m = u | h,
            b = m < (J | L | S),
            E =
              (h == S && u == I) ||
              (h == S && u == _ && r[7].length <= a[8]) ||
              (h == (S | _) && a[7].length <= a[8] && u == I)
          if (!(b || E)) return r
          h & J && ((r[2] = a[2]), (m |= u & J ? 0 : x))
          var R = a[3]
          if (R) {
            var z = r[3]
            ;(r[3] = z ? kg(z, R, a[4]) : R), (r[4] = z ? Qr(r[3], P) : a[4])
          }
          return (
            (R = a[5]),
            R &&
              ((z = r[5]),
              (r[5] = z ? Sg(z, R, a[6]) : R),
              (r[6] = z ? Qr(r[5], P) : a[6])),
            (R = a[7]),
            R && (r[7] = R),
            h & S && (r[8] = r[8] == null ? a[8] : St(r[8], a[8])),
            r[9] == null && (r[9] = a[9]),
            (r[0] = a[0]),
            (r[1] = m),
            r
          )
        }
        function l2(r) {
          var a = []
          if (r != null) for (var u in ze(r)) a.push(u)
          return a
        }
        function u2(r) {
          return Ul.call(r)
        }
        function $g(r, a, u) {
          return (
            (a = at(a === n ? r.length - 1 : a, 0)),
            function () {
              for (
                var h = arguments, m = -1, b = at(h.length - a, 0), E = U(b);
                ++m < b;

              )
                E[m] = h[a + m]
              m = -1
              for (var R = U(a + 1); ++m < a; ) R[m] = h[m]
              return (R[a] = u(E)), wt(r, this, R)
            }
          )
        }
        function Bg(r, a) {
          return a.length < 2 ? r : Bi(r, bn(a, 0, -1))
        }
        function c2(r, a) {
          for (var u = r.length, h = St(a.length, u), m = Wt(r); h--; ) {
            var b = a[h]
            r[h] = vr(b, u) ? m[b] : n
          }
          return r
        }
        function Uf(r, a) {
          if (
            !(a === 'constructor' && typeof r[a] == 'function') &&
            a != '__proto__'
          )
            return r[a]
        }
        var Vg = Wg(hg),
          ss =
            xb ||
            function (r, a) {
              return et.setTimeout(r, a)
            },
          $f = Wg(Iw)
        function Hg(r, a, u) {
          var h = a + ''
          return $f(r, t2(h, f2(Xw(h), u)))
        }
        function Wg(r) {
          var a = 0,
            u = 0
          return function () {
            var h = Pb(),
              m = T - (h - u)
            if (((u = h), m > 0)) {
              if (++a >= M) return arguments[0]
            } else a = 0
            return r.apply(n, arguments)
          }
        }
        function cu(r, a) {
          var u = -1,
            h = r.length,
            m = h - 1
          for (a = a === n ? h : a; ++u < a; ) {
            var b = Sf(u, m),
              E = r[b]
            ;(r[b] = r[u]), (r[u] = E)
          }
          return (r.length = a), r
        }
        var qg = o2(function (r) {
          var a = []
          return (
            r.charCodeAt(0) === 46 && a.push(''),
            r.replace(pl, function (u, h, m, b) {
              a.push(m ? b.replace(Kn, '$1') : h || u)
            }),
            a
          )
        })
        function Zn(r) {
          if (typeof r == 'string' || an(r)) return r
          var a = r + ''
          return a == '0' && 1 / r == -Ee ? '-0' : a
        }
        function Hi(r) {
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
        function f2(r, a) {
          return (
            _t(An, function (u) {
              var h = '_.' + u[0]
              a & u[1] && !zi(r, h) && r.push(h)
            }),
            r.sort()
          )
        }
        function Kg(r) {
          if (r instanceof ye) return r.clone()
          var a = new vn(r.__wrapped__, r.__chain__)
          return (
            (a.__actions__ = Wt(r.__actions__)),
            (a.__index__ = r.__index__),
            (a.__values__ = r.__values__),
            a
          )
        }
        function h2(r, a, u) {
          ;(u ? Nt(r, a, u) : a === n) ? (a = 1) : (a = at(pe(a), 0))
          var h = r == null ? 0 : r.length
          if (!h || a < 1) return []
          for (var m = 0, b = 0, E = U(ql(h / a)); m < h; )
            E[b++] = bn(r, m, (m += a))
          return E
        }
        function d2(r) {
          for (
            var a = -1, u = r == null ? 0 : r.length, h = 0, m = [];
            ++a < u;

          ) {
            var b = r[a]
            b && (m[h++] = b)
          }
          return m
        }
        function p2() {
          var r = arguments.length
          if (!r) return []
          for (var a = U(r - 1), u = arguments[0], h = r; h--; )
            a[h - 1] = arguments[h]
          return In(de(u) ? Wt(u) : [u], gt(a, 1))
        }
        var g2 = me(function (r, a) {
            return Ye(r) ? ts(r, gt(a, 1, Ye, !0)) : []
          }),
          m2 = me(function (r, a) {
            var u = wn(a)
            return (
              Ye(u) && (u = n), Ye(r) ? ts(r, gt(a, 1, Ye, !0), oe(u, 2)) : []
            )
          }),
          v2 = me(function (r, a) {
            var u = wn(a)
            return Ye(u) && (u = n), Ye(r) ? ts(r, gt(a, 1, Ye, !0), n, u) : []
          })
        function y2(r, a, u) {
          var h = r == null ? 0 : r.length
          return h
            ? ((a = u || a === n ? 1 : pe(a)), bn(r, a < 0 ? 0 : a, h))
            : []
        }
        function b2(r, a, u) {
          var h = r == null ? 0 : r.length
          return h
            ? ((a = u || a === n ? 1 : pe(a)),
              (a = h - a),
              bn(r, 0, a < 0 ? 0 : a))
            : []
        }
        function w2(r, a) {
          return r && r.length ? nu(r, oe(a, 3), !0, !0) : []
        }
        function _2(r, a) {
          return r && r.length ? nu(r, oe(a, 3), !0) : []
        }
        function k2(r, a, u, h) {
          var m = r == null ? 0 : r.length
          return m
            ? (u && typeof u != 'number' && Nt(r, a, u) && ((u = 0), (h = m)),
              pw(r, a, u, h))
            : []
        }
        function Qg(r, a, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = u == null ? 0 : pe(u)
          return m < 0 && (m = at(h + m, 0)), f(r, oe(a, 3), m)
        }
        function Gg(r, a, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h - 1
          return (
            u !== n && ((m = pe(u)), (m = u < 0 ? at(h + m, 0) : St(m, h - 1))),
            f(r, oe(a, 3), m, !0)
          )
        }
        function Jg(r) {
          var a = r == null ? 0 : r.length
          return a ? gt(r, 1) : []
        }
        function S2(r) {
          var a = r == null ? 0 : r.length
          return a ? gt(r, Ee) : []
        }
        function E2(r, a) {
          var u = r == null ? 0 : r.length
          return u ? ((a = a === n ? 1 : pe(a)), gt(r, a)) : []
        }
        function x2(r) {
          for (var a = -1, u = r == null ? 0 : r.length, h = {}; ++a < u; ) {
            var m = r[a]
            h[m[0]] = m[1]
          }
          return h
        }
        function Yg(r) {
          return r && r.length ? r[0] : n
        }
        function C2(r, a, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = u == null ? 0 : pe(u)
          return m < 0 && (m = at(h + m, 0)), p(r, a, m)
        }
        function T2(r) {
          var a = r == null ? 0 : r.length
          return a ? bn(r, 0, -1) : []
        }
        var A2 = me(function (r) {
            var a = je(r, Af)
            return a.length && a[0] === r[0] ? yf(a) : []
          }),
          P2 = me(function (r) {
            var a = wn(r),
              u = je(r, Af)
            return (
              a === wn(u) ? (a = n) : u.pop(),
              u.length && u[0] === r[0] ? yf(u, oe(a, 2)) : []
            )
          }),
          O2 = me(function (r) {
            var a = wn(r),
              u = je(r, Af)
            return (
              (a = typeof a == 'function' ? a : n),
              a && u.pop(),
              u.length && u[0] === r[0] ? yf(u, n, a) : []
            )
          })
        function R2(r, a) {
          return r == null ? '' : Tb.call(r, a)
        }
        function wn(r) {
          var a = r == null ? 0 : r.length
          return a ? r[a - 1] : n
        }
        function L2(r, a, u) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h
          return (
            u !== n && ((m = pe(u)), (m = m < 0 ? at(h + m, 0) : St(m, h - 1))),
            a === a ? fb(r, a, m) : f(r, D, m, !0)
          )
        }
        function I2(r, a) {
          return r && r.length ? lg(r, pe(a)) : n
        }
        var N2 = me(Xg)
        function Xg(r, a) {
          return r && r.length && a && a.length ? kf(r, a) : r
        }
        function j2(r, a, u) {
          return r && r.length && a && a.length ? kf(r, a, oe(u, 2)) : r
        }
        function z2(r, a, u) {
          return r && r.length && a && a.length ? kf(r, a, n, u) : r
        }
        var D2 = mr(function (r, a) {
          var u = r == null ? 0 : r.length,
            h = pf(r, a)
          return (
            fg(
              r,
              je(a, function (m) {
                return vr(m, u) ? +m : m
              }).sort(_g)
            ),
            h
          )
        })
        function M2(r, a) {
          var u = []
          if (!(r && r.length)) return u
          var h = -1,
            m = [],
            b = r.length
          for (a = oe(a, 3); ++h < b; ) {
            var E = r[h]
            a(E, h, r) && (u.push(E), m.push(h))
          }
          return fg(r, m), u
        }
        function Bf(r) {
          return r == null ? r : Rb.call(r)
        }
        function F2(r, a, u) {
          var h = r == null ? 0 : r.length
          return h
            ? (u && typeof u != 'number' && Nt(r, a, u)
                ? ((a = 0), (u = h))
                : ((a = a == null ? 0 : pe(a)), (u = u === n ? h : pe(u))),
              bn(r, a, u))
            : []
        }
        function U2(r, a) {
          return tu(r, a)
        }
        function $2(r, a, u) {
          return xf(r, a, oe(u, 2))
        }
        function B2(r, a) {
          var u = r == null ? 0 : r.length
          if (u) {
            var h = tu(r, a)
            if (h < u && zn(r[h], a)) return h
          }
          return -1
        }
        function V2(r, a) {
          return tu(r, a, !0)
        }
        function H2(r, a, u) {
          return xf(r, a, oe(u, 2), !0)
        }
        function W2(r, a) {
          var u = r == null ? 0 : r.length
          if (u) {
            var h = tu(r, a, !0) - 1
            if (zn(r[h], a)) return h
          }
          return -1
        }
        function q2(r) {
          return r && r.length ? dg(r) : []
        }
        function K2(r, a) {
          return r && r.length ? dg(r, oe(a, 2)) : []
        }
        function Q2(r) {
          var a = r == null ? 0 : r.length
          return a ? bn(r, 1, a) : []
        }
        function G2(r, a, u) {
          return r && r.length
            ? ((a = u || a === n ? 1 : pe(a)), bn(r, 0, a < 0 ? 0 : a))
            : []
        }
        function J2(r, a, u) {
          var h = r == null ? 0 : r.length
          return h
            ? ((a = u || a === n ? 1 : pe(a)),
              (a = h - a),
              bn(r, a < 0 ? 0 : a, h))
            : []
        }
        function Y2(r, a) {
          return r && r.length ? nu(r, oe(a, 3), !1, !0) : []
        }
        function X2(r, a) {
          return r && r.length ? nu(r, oe(a, 3)) : []
        }
        var Z2 = me(function (r) {
            return Yr(gt(r, 1, Ye, !0))
          }),
          e_ = me(function (r) {
            var a = wn(r)
            return Ye(a) && (a = n), Yr(gt(r, 1, Ye, !0), oe(a, 2))
          }),
          t_ = me(function (r) {
            var a = wn(r)
            return (
              (a = typeof a == 'function' ? a : n), Yr(gt(r, 1, Ye, !0), n, a)
            )
          })
        function n_(r) {
          return r && r.length ? Yr(r) : []
        }
        function r_(r, a) {
          return r && r.length ? Yr(r, oe(a, 2)) : []
        }
        function i_(r, a) {
          return (
            (a = typeof a == 'function' ? a : n),
            r && r.length ? Yr(r, n, a) : []
          )
        }
        function Vf(r) {
          if (!(r && r.length)) return []
          var a = 0
          return (
            (r = Rn(r, function (u) {
              if (Ye(u)) return (a = at(u.length, a)), !0
            })),
            lt(a, function (u) {
              return je(r, ee(u))
            })
          )
        }
        function Zg(r, a) {
          if (!(r && r.length)) return []
          var u = Vf(r)
          return a == null
            ? u
            : je(u, function (h) {
                return wt(a, n, h)
              })
        }
        var a_ = me(function (r, a) {
            return Ye(r) ? ts(r, a) : []
          }),
          o_ = me(function (r) {
            return Tf(Rn(r, Ye))
          }),
          s_ = me(function (r) {
            var a = wn(r)
            return Ye(a) && (a = n), Tf(Rn(r, Ye), oe(a, 2))
          }),
          l_ = me(function (r) {
            var a = wn(r)
            return (a = typeof a == 'function' ? a : n), Tf(Rn(r, Ye), n, a)
          }),
          u_ = me(Vf)
        function c_(r, a) {
          return vg(r || [], a || [], es)
        }
        function f_(r, a) {
          return vg(r || [], a || [], is)
        }
        var h_ = me(function (r) {
          var a = r.length,
            u = a > 1 ? r[a - 1] : n
          return (u = typeof u == 'function' ? (r.pop(), u) : n), Zg(r, u)
        })
        function em(r) {
          var a = v(r)
          return (a.__chain__ = !0), a
        }
        function d_(r, a) {
          return a(r), r
        }
        function fu(r, a) {
          return a(r)
        }
        var p_ = mr(function (r) {
          var a = r.length,
            u = a ? r[0] : 0,
            h = this.__wrapped__,
            m = function (b) {
              return pf(b, r)
            }
          return a > 1 ||
            this.__actions__.length ||
            !(h instanceof ye) ||
            !vr(u)
            ? this.thru(m)
            : ((h = h.slice(u, +u + (a ? 1 : 0))),
              h.__actions__.push({ func: fu, args: [m], thisArg: n }),
              new vn(h, this.__chain__).thru(function (b) {
                return a && !b.length && b.push(n), b
              }))
        })
        function g_() {
          return em(this)
        }
        function m_() {
          return new vn(this.value(), this.__chain__)
        }
        function v_() {
          this.__values__ === n && (this.__values__ = pm(this.value()))
          var r = this.__index__ >= this.__values__.length,
            a = r ? n : this.__values__[this.__index__++]
          return { done: r, value: a }
        }
        function y_() {
          return this
        }
        function b_(r) {
          for (var a, u = this; u instanceof Jl; ) {
            var h = Kg(u)
            ;(h.__index__ = 0),
              (h.__values__ = n),
              a ? (m.__wrapped__ = h) : (a = h)
            var m = h
            u = u.__wrapped__
          }
          return (m.__wrapped__ = r), a
        }
        function w_() {
          var r = this.__wrapped__
          if (r instanceof ye) {
            var a = r
            return (
              this.__actions__.length && (a = new ye(this)),
              (a = a.reverse()),
              a.__actions__.push({ func: fu, args: [Bf], thisArg: n }),
              new vn(a, this.__chain__)
            )
          }
          return this.thru(Bf)
        }
        function __() {
          return mg(this.__wrapped__, this.__actions__)
        }
        var k_ = ru(function (r, a, u) {
          Re.call(r, u) ? ++r[u] : pr(r, u, 1)
        })
        function S_(r, a, u) {
          var h = de(r) ? ji : dw
          return u && Nt(r, a, u) && (a = n), h(r, oe(a, 3))
        }
        function E_(r, a) {
          var u = de(r) ? Rn : Zp
          return u(r, oe(a, 3))
        }
        var x_ = Tg(Qg),
          C_ = Tg(Gg)
        function T_(r, a) {
          return gt(hu(r, a), 1)
        }
        function A_(r, a) {
          return gt(hu(r, a), Ee)
        }
        function P_(r, a, u) {
          return (u = u === n ? 1 : pe(u)), gt(hu(r, a), u)
        }
        function tm(r, a) {
          var u = de(r) ? _t : Jr
          return u(r, oe(a, 3))
        }
        function nm(r, a) {
          var u = de(r) ? Ll : Xp
          return u(r, oe(a, 3))
        }
        var O_ = ru(function (r, a, u) {
          Re.call(r, u) ? r[u].push(a) : pr(r, u, [a])
        })
        function R_(r, a, u, h) {
          ;(r = qt(r) ? r : za(r)), (u = u && !h ? pe(u) : 0)
          var m = r.length
          return (
            u < 0 && (u = at(m + u, 0)),
            vu(r) ? u <= m && r.indexOf(a, u) > -1 : !!m && p(r, a, u) > -1
          )
        }
        var L_ = me(function (r, a, u) {
            var h = -1,
              m = typeof a == 'function',
              b = qt(r) ? U(r.length) : []
            return (
              Jr(r, function (E) {
                b[++h] = m ? wt(a, E, u) : ns(E, a, u)
              }),
              b
            )
          }),
          I_ = ru(function (r, a, u) {
            pr(r, u, a)
          })
        function hu(r, a) {
          var u = de(r) ? je : ag
          return u(r, oe(a, 3))
        }
        function N_(r, a, u, h) {
          return r == null
            ? []
            : (de(a) || (a = a == null ? [] : [a]),
              (u = h ? n : u),
              de(u) || (u = u == null ? [] : [u]),
              ug(r, a, u))
        }
        var j_ = ru(
          function (r, a, u) {
            r[u ? 0 : 1].push(a)
          },
          function () {
            return [[], []]
          }
        )
        function z_(r, a, u) {
          var h = de(r) ? Ea : tt,
            m = arguments.length < 3
          return h(r, oe(a, 4), u, m, Jr)
        }
        function D_(r, a, u) {
          var h = de(r) ? Il : tt,
            m = arguments.length < 3
          return h(r, oe(a, 4), u, m, Xp)
        }
        function M_(r, a) {
          var u = de(r) ? Rn : Zp
          return u(r, gu(oe(a, 3)))
        }
        function F_(r) {
          var a = de(r) ? Qp : Rw
          return a(r)
        }
        function U_(r, a, u) {
          ;(u ? Nt(r, a, u) : a === n) ? (a = 1) : (a = pe(a))
          var h = de(r) ? lw : Lw
          return h(r, a)
        }
        function $_(r) {
          var a = de(r) ? uw : Nw
          return a(r)
        }
        function B_(r) {
          if (r == null) return 0
          if (qt(r)) return vu(r) ? Ca(r) : r.length
          var a = Et(r)
          return a == Rt || a == Lt ? r.size : wf(r).length
        }
        function V_(r, a, u) {
          var h = de(r) ? kt : jw
          return u && Nt(r, a, u) && (a = n), h(r, oe(a, 3))
        }
        var H_ = me(function (r, a) {
            if (r == null) return []
            var u = a.length
            return (
              u > 1 && Nt(r, a[0], a[1])
                ? (a = [])
                : u > 2 && Nt(a[0], a[1], a[2]) && (a = [a[0]]),
              ug(r, gt(a, 1), [])
            )
          }),
          du =
            Eb ||
            function () {
              return et.Date.now()
            }
        function W_(r, a) {
          if (typeof a != 'function') throw new mn(c)
          return (
            (r = pe(r)),
            function () {
              if (--r < 1) return a.apply(this, arguments)
            }
          )
        }
        function rm(r, a, u) {
          return (
            (a = u ? n : a),
            (a = r && a == null ? r.length : a),
            gr(r, S, n, n, n, n, a)
          )
        }
        function im(r, a) {
          var u
          if (typeof a != 'function') throw new mn(c)
          return (
            (r = pe(r)),
            function () {
              return (
                --r > 0 && (u = a.apply(this, arguments)), r <= 1 && (a = n), u
              )
            }
          )
        }
        var Hf = me(function (r, a, u) {
            var h = J
            if (u.length) {
              var m = Qr(u, Na(Hf))
              h |= G
            }
            return gr(r, h, a, u, m)
          }),
          am = me(function (r, a, u) {
            var h = J | L
            if (u.length) {
              var m = Qr(u, Na(am))
              h |= G
            }
            return gr(a, h, r, u, m)
          })
        function om(r, a, u) {
          a = u ? n : a
          var h = gr(r, I, n, n, n, n, n, a)
          return (h.placeholder = om.placeholder), h
        }
        function sm(r, a, u) {
          a = u ? n : a
          var h = gr(r, B, n, n, n, n, n, a)
          return (h.placeholder = sm.placeholder), h
        }
        function lm(r, a, u) {
          var h,
            m,
            b,
            E,
            R,
            z,
            q = 0,
            K = !1,
            Q = !1,
            te = !0
          if (typeof r != 'function') throw new mn(c)
          ;(a = _n(a) || 0),
            Be(u) &&
              ((K = !!u.leading),
              (Q = 'maxWait' in u),
              (b = Q ? at(_n(u.maxWait) || 0, a) : b),
              (te = 'trailing' in u ? !!u.trailing : te))
          function ie(Xe) {
            var Dn = h,
              wr = m
            return (h = m = n), (q = Xe), (E = r.apply(wr, Dn)), E
          }
          function se(Xe) {
            return (q = Xe), (R = ss(ve, a)), K ? ie(Xe) : E
          }
          function ge(Xe) {
            var Dn = Xe - z,
              wr = Xe - q,
              Tm = a - Dn
            return Q ? St(Tm, b - wr) : Tm
          }
          function le(Xe) {
            var Dn = Xe - z,
              wr = Xe - q
            return z === n || Dn >= a || Dn < 0 || (Q && wr >= b)
          }
          function ve() {
            var Xe = du()
            if (le(Xe)) return we(Xe)
            R = ss(ve, ge(Xe))
          }
          function we(Xe) {
            return (R = n), te && h ? ie(Xe) : ((h = m = n), E)
          }
          function on() {
            R !== n && yg(R), (q = 0), (h = z = m = R = n)
          }
          function jt() {
            return R === n ? E : we(du())
          }
          function sn() {
            var Xe = du(),
              Dn = le(Xe)
            if (((h = arguments), (m = this), (z = Xe), Dn)) {
              if (R === n) return se(z)
              if (Q) return yg(R), (R = ss(ve, a)), ie(z)
            }
            return R === n && (R = ss(ve, a)), E
          }
          return (sn.cancel = on), (sn.flush = jt), sn
        }
        var q_ = me(function (r, a) {
            return Yp(r, 1, a)
          }),
          K_ = me(function (r, a, u) {
            return Yp(r, _n(a) || 0, u)
          })
        function Q_(r) {
          return gr(r, C)
        }
        function pu(r, a) {
          if (typeof r != 'function' || (a != null && typeof a != 'function'))
            throw new mn(c)
          var u = function () {
            var h = arguments,
              m = a ? a.apply(this, h) : h[0],
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
            var a = arguments
            switch (a.length) {
              case 0:
                return !r.call(this)
              case 1:
                return !r.call(this, a[0])
              case 2:
                return !r.call(this, a[0], a[1])
              case 3:
                return !r.call(this, a[0], a[1], a[2])
            }
            return !r.apply(this, a)
          }
        }
        function G_(r) {
          return im(2, r)
        }
        var J_ = zw(function (r, a) {
            a =
              a.length == 1 && de(a[0])
                ? je(a[0], ut(oe()))
                : je(gt(a, 1), ut(oe()))
            var u = a.length
            return me(function (h) {
              for (var m = -1, b = St(h.length, u); ++m < b; )
                h[m] = a[m].call(this, h[m])
              return wt(r, this, h)
            })
          }),
          Wf = me(function (r, a) {
            var u = Qr(a, Na(Wf))
            return gr(r, G, n, a, u)
          }),
          um = me(function (r, a) {
            var u = Qr(a, Na(um))
            return gr(r, X, n, a, u)
          }),
          Y_ = mr(function (r, a) {
            return gr(r, _, n, n, n, a)
          })
        function X_(r, a) {
          if (typeof r != 'function') throw new mn(c)
          return (a = a === n ? a : pe(a)), me(r, a)
        }
        function Z_(r, a) {
          if (typeof r != 'function') throw new mn(c)
          return (
            (a = a == null ? 0 : at(pe(a), 0)),
            me(function (u) {
              var h = u[a],
                m = Zr(u, 0, a)
              return h && In(m, h), wt(r, this, m)
            })
          )
        }
        function ek(r, a, u) {
          var h = !0,
            m = !0
          if (typeof r != 'function') throw new mn(c)
          return (
            Be(u) &&
              ((h = 'leading' in u ? !!u.leading : h),
              (m = 'trailing' in u ? !!u.trailing : m)),
            lm(r, a, { leading: h, maxWait: a, trailing: m })
          )
        }
        function tk(r) {
          return rm(r, 1)
        }
        function nk(r, a) {
          return Wf(Pf(a), r)
        }
        function rk() {
          if (!arguments.length) return []
          var r = arguments[0]
          return de(r) ? r : [r]
        }
        function ik(r) {
          return yn(r, V)
        }
        function ak(r, a) {
          return (a = typeof a == 'function' ? a : n), yn(r, V, a)
        }
        function ok(r) {
          return yn(r, O | V)
        }
        function sk(r, a) {
          return (a = typeof a == 'function' ? a : n), yn(r, O | V, a)
        }
        function lk(r, a) {
          return a == null || Jp(r, a, ct(a))
        }
        function zn(r, a) {
          return r === a || (r !== r && a !== a)
        }
        var uk = su(vf),
          ck = su(function (r, a) {
            return r >= a
          }),
          Wi = ng(
            (function () {
              return arguments
            })()
          )
            ? ng
            : function (r) {
                return Qe(r) && Re.call(r, 'callee') && !Bp.call(r, 'callee')
              },
          de = U.isArray,
          fk = Ho ? ut(Ho) : bw
        function qt(r) {
          return r != null && mu(r.length) && !yr(r)
        }
        function Ye(r) {
          return Qe(r) && qt(r)
        }
        function hk(r) {
          return r === !0 || r === !1 || (Qe(r) && It(r) == Ei)
        }
        var ei = Cb || nh,
          dk = Ni ? ut(Ni) : ww
        function pk(r) {
          return Qe(r) && r.nodeType === 1 && !ls(r)
        }
        function gk(r) {
          if (r == null) return !0
          if (
            qt(r) &&
            (de(r) ||
              typeof r == 'string' ||
              typeof r.splice == 'function' ||
              ei(r) ||
              ja(r) ||
              Wi(r))
          )
            return !r.length
          var a = Et(r)
          if (a == Rt || a == Lt) return !r.size
          if (os(r)) return !wf(r).length
          for (var u in r) if (Re.call(r, u)) return !1
          return !0
        }
        function mk(r, a) {
          return rs(r, a)
        }
        function vk(r, a, u) {
          u = typeof u == 'function' ? u : n
          var h = u ? u(r, a) : n
          return h === n ? rs(r, a, n, u) : !!h
        }
        function qf(r) {
          if (!Qe(r)) return !1
          var a = It(r)
          return (
            a == or ||
            a == la ||
            (typeof r.message == 'string' &&
              typeof r.name == 'string' &&
              !ls(r))
          )
        }
        function yk(r) {
          return typeof r == 'number' && Hp(r)
        }
        function yr(r) {
          if (!Be(r)) return !1
          var a = It(r)
          return a == Lr || a == ua || a == pn || a == ul
        }
        function cm(r) {
          return typeof r == 'number' && r == pe(r)
        }
        function mu(r) {
          return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= Z
        }
        function Be(r) {
          var a = typeof r
          return r != null && (a == 'object' || a == 'function')
        }
        function Qe(r) {
          return r != null && typeof r == 'object'
        }
        var fm = Rl ? ut(Rl) : kw
        function bk(r, a) {
          return r === a || bf(r, a, zf(a))
        }
        function wk(r, a, u) {
          return (u = typeof u == 'function' ? u : n), bf(r, a, zf(a), u)
        }
        function _k(r) {
          return hm(r) && r != +r
        }
        function kk(r) {
          if (a2(r)) throw new fe(l)
          return rg(r)
        }
        function Sk(r) {
          return r === null
        }
        function Ek(r) {
          return r == null
        }
        function hm(r) {
          return typeof r == 'number' || (Qe(r) && It(r) == sr)
        }
        function ls(r) {
          if (!Qe(r) || It(r) != gn) return !1
          var a = Vl(r)
          if (a === null) return !0
          var u = Re.call(a, 'constructor') && a.constructor
          return typeof u == 'function' && u instanceof u && Fl.call(u) == wb
        }
        var Kf = Wo ? ut(Wo) : Sw
        function xk(r) {
          return cm(r) && r >= -Z && r <= Z
        }
        var dm = Wr ? ut(Wr) : Ew
        function vu(r) {
          return typeof r == 'string' || (!de(r) && Qe(r) && It(r) == Nr)
        }
        function an(r) {
          return typeof r == 'symbol' || (Qe(r) && It(r) == ca)
        }
        var ja = qo ? ut(qo) : xw
        function Ck(r) {
          return r === n
        }
        function Tk(r) {
          return Qe(r) && Et(r) == lr
        }
        function Ak(r) {
          return Qe(r) && It(r) == bo
        }
        var Pk = su(_f),
          Ok = su(function (r, a) {
            return r <= a
          })
        function pm(r) {
          if (!r) return []
          if (qt(r)) return vu(r) ? Nn(r) : Wt(r)
          if (Go && r[Go]) return lb(r[Go]())
          var a = Et(r),
            u = a == Rt ? lf : a == Lt ? zl : za
          return u(r)
        }
        function br(r) {
          if (!r) return r === 0 ? r : 0
          if (((r = _n(r)), r === Ee || r === -Ee)) {
            var a = r < 0 ? -1 : 1
            return a * ae
          }
          return r === r ? r : 0
        }
        function pe(r) {
          var a = br(r),
            u = a % 1
          return a === a ? (u ? a - u : a) : 0
        }
        function gm(r) {
          return r ? $i(pe(r), 0, _e) : 0
        }
        function _n(r) {
          if (typeof r == 'number') return r
          if (an(r)) return ue
          if (Be(r)) {
            var a = typeof r.valueOf == 'function' ? r.valueOf() : r
            r = Be(a) ? a + '' : a
          }
          if (typeof r != 'string') return r === 0 ? r : +r
          r = Ht(r)
          var u = Ao.test(r)
          return u || vl.test(r)
            ? Sa(r.slice(2), u ? 2 : 8)
            : To.test(r)
            ? ue
            : +r
        }
        function mm(r) {
          return Xn(r, Kt(r))
        }
        function Rk(r) {
          return r ? $i(pe(r), -Z, Z) : r === 0 ? r : 0
        }
        function Te(r) {
          return r == null ? '' : rn(r)
        }
        var Lk = La(function (r, a) {
            if (os(a) || qt(a)) {
              Xn(a, ct(a), r)
              return
            }
            for (var u in a) Re.call(a, u) && es(r, u, a[u])
          }),
          vm = La(function (r, a) {
            Xn(a, Kt(a), r)
          }),
          yu = La(function (r, a, u, h) {
            Xn(a, Kt(a), r, h)
          }),
          Ik = La(function (r, a, u, h) {
            Xn(a, ct(a), r, h)
          }),
          Nk = mr(pf)
        function jk(r, a) {
          var u = Ra(r)
          return a == null ? u : Gp(u, a)
        }
        var zk = me(function (r, a) {
            r = ze(r)
            var u = -1,
              h = a.length,
              m = h > 2 ? a[2] : n
            for (m && Nt(a[0], a[1], m) && (h = 1); ++u < h; )
              for (var b = a[u], E = Kt(b), R = -1, z = E.length; ++R < z; ) {
                var q = E[R],
                  K = r[q]
                ;(K === n || (zn(K, Aa[q]) && !Re.call(r, q))) && (r[q] = b[q])
              }
            return r
          }),
          Dk = me(function (r) {
            return r.push(n, Ng), wt(ym, n, r)
          })
        function Mk(r, a) {
          return s(r, oe(a, 3), Yn)
        }
        function Fk(r, a) {
          return s(r, oe(a, 3), mf)
        }
        function Uk(r, a) {
          return r == null ? r : gf(r, oe(a, 3), Kt)
        }
        function $k(r, a) {
          return r == null ? r : eg(r, oe(a, 3), Kt)
        }
        function Bk(r, a) {
          return r && Yn(r, oe(a, 3))
        }
        function Vk(r, a) {
          return r && mf(r, oe(a, 3))
        }
        function Hk(r) {
          return r == null ? [] : Zl(r, ct(r))
        }
        function Wk(r) {
          return r == null ? [] : Zl(r, Kt(r))
        }
        function Qf(r, a, u) {
          var h = r == null ? n : Bi(r, a)
          return h === n ? u : h
        }
        function qk(r, a) {
          return r != null && Dg(r, a, gw)
        }
        function Gf(r, a) {
          return r != null && Dg(r, a, mw)
        }
        var Kk = Pg(function (r, a, u) {
            a != null && typeof a.toString != 'function' && (a = Ul.call(a)),
              (r[a] = u)
          }, Yf(Qt)),
          Qk = Pg(function (r, a, u) {
            a != null && typeof a.toString != 'function' && (a = Ul.call(a)),
              Re.call(r, a) ? r[a].push(u) : (r[a] = [u])
          }, oe),
          Gk = me(ns)
        function ct(r) {
          return qt(r) ? Kp(r) : wf(r)
        }
        function Kt(r) {
          return qt(r) ? Kp(r, !0) : Cw(r)
        }
        function Jk(r, a) {
          var u = {}
          return (
            (a = oe(a, 3)),
            Yn(r, function (h, m, b) {
              pr(u, a(h, m, b), h)
            }),
            u
          )
        }
        function Yk(r, a) {
          var u = {}
          return (
            (a = oe(a, 3)),
            Yn(r, function (h, m, b) {
              pr(u, m, a(h, m, b))
            }),
            u
          )
        }
        var Xk = La(function (r, a, u) {
            eu(r, a, u)
          }),
          ym = La(function (r, a, u, h) {
            eu(r, a, u, h)
          }),
          Zk = mr(function (r, a) {
            var u = {}
            if (r == null) return u
            var h = !1
            ;(a = je(a, function (b) {
              return (b = Xr(b, r)), h || (h = b.length > 1), b
            })),
              Xn(r, Nf(r), u),
              h && (u = yn(u, O | k | V, Kw))
            for (var m = a.length; m--; ) Cf(u, a[m])
            return u
          })
        function eS(r, a) {
          return bm(r, gu(oe(a)))
        }
        var tS = mr(function (r, a) {
          return r == null ? {} : Aw(r, a)
        })
        function bm(r, a) {
          if (r == null) return {}
          var u = je(Nf(r), function (h) {
            return [h]
          })
          return (
            (a = oe(a)),
            cg(r, u, function (h, m) {
              return a(h, m[0])
            })
          )
        }
        function nS(r, a, u) {
          a = Xr(a, r)
          var h = -1,
            m = a.length
          for (m || ((m = 1), (r = n)); ++h < m; ) {
            var b = r == null ? n : r[Zn(a[h])]
            b === n && ((h = m), (b = u)), (r = yr(b) ? b.call(r) : b)
          }
          return r
        }
        function rS(r, a, u) {
          return r == null ? r : is(r, a, u)
        }
        function iS(r, a, u, h) {
          return (
            (h = typeof h == 'function' ? h : n), r == null ? r : is(r, a, u, h)
          )
        }
        var wm = Lg(ct),
          _m = Lg(Kt)
        function aS(r, a, u) {
          var h = de(r),
            m = h || ei(r) || ja(r)
          if (((a = oe(a, 4)), u == null)) {
            var b = r && r.constructor
            m
              ? (u = h ? new b() : [])
              : Be(r)
              ? (u = yr(b) ? Ra(Vl(r)) : {})
              : (u = {})
          }
          return (
            (m ? _t : Yn)(r, function (E, R, z) {
              return a(u, E, R, z)
            }),
            u
          )
        }
        function oS(r, a) {
          return r == null ? !0 : Cf(r, a)
        }
        function sS(r, a, u) {
          return r == null ? r : gg(r, a, Pf(u))
        }
        function lS(r, a, u, h) {
          return (
            (h = typeof h == 'function' ? h : n),
            r == null ? r : gg(r, a, Pf(u), h)
          )
        }
        function za(r) {
          return r == null ? [] : Di(r, ct(r))
        }
        function uS(r) {
          return r == null ? [] : Di(r, Kt(r))
        }
        function cS(r, a, u) {
          return (
            u === n && ((u = a), (a = n)),
            u !== n && ((u = _n(u)), (u = u === u ? u : 0)),
            a !== n && ((a = _n(a)), (a = a === a ? a : 0)),
            $i(_n(r), a, u)
          )
        }
        function fS(r, a, u) {
          return (
            (a = br(a)),
            u === n ? ((u = a), (a = 0)) : (u = br(u)),
            (r = _n(r)),
            vw(r, a, u)
          )
        }
        function hS(r, a, u) {
          if (
            (u && typeof u != 'boolean' && Nt(r, a, u) && (a = u = n),
            u === n &&
              (typeof a == 'boolean'
                ? ((u = a), (a = n))
                : typeof r == 'boolean' && ((u = r), (r = n))),
            r === n && a === n
              ? ((r = 0), (a = 1))
              : ((r = br(r)), a === n ? ((a = r), (r = 0)) : (a = br(a))),
            r > a)
          ) {
            var h = r
            ;(r = a), (a = h)
          }
          if (u || r % 1 || a % 1) {
            var m = Wp()
            return St(r + m * (a - r + Ol('1e-' + ((m + '').length - 1))), a)
          }
          return Sf(r, a)
        }
        var dS = Ia(function (r, a, u) {
          return (a = a.toLowerCase()), r + (u ? km(a) : a)
        })
        function km(r) {
          return Jf(Te(r).toLowerCase())
        }
        function Sm(r) {
          return (r = Te(r)), r && r.replace(ya, rb).replace(af, '')
        }
        function pS(r, a, u) {
          ;(r = Te(r)), (a = rn(a))
          var h = r.length
          u = u === n ? h : $i(pe(u), 0, h)
          var m = u
          return (u -= a.length), u >= 0 && r.slice(u, m) == a
        }
        function gS(r) {
          return (r = Te(r)), r && fl.test(r) ? r.replace(ma, ib) : r
        }
        function mS(r) {
          return (r = Te(r)), r && Ti.test(r) ? r.replace(cr, '\\$&') : r
        }
        var vS = Ia(function (r, a, u) {
            return r + (u ? '-' : '') + a.toLowerCase()
          }),
          yS = Ia(function (r, a, u) {
            return r + (u ? ' ' : '') + a.toLowerCase()
          }),
          bS = Cg('toLowerCase')
        function wS(r, a, u) {
          ;(r = Te(r)), (a = pe(a))
          var h = a ? Ca(r) : 0
          if (!a || h >= a) return r
          var m = (a - h) / 2
          return ou(Kl(m), u) + r + ou(ql(m), u)
        }
        function _S(r, a, u) {
          ;(r = Te(r)), (a = pe(a))
          var h = a ? Ca(r) : 0
          return a && h < a ? r + ou(a - h, u) : r
        }
        function kS(r, a, u) {
          ;(r = Te(r)), (a = pe(a))
          var h = a ? Ca(r) : 0
          return a && h < a ? ou(a - h, u) + r : r
        }
        function SS(r, a, u) {
          return (
            u || a == null ? (a = 0) : a && (a = +a),
            Ob(Te(r).replace(Eo, ''), a || 0)
          )
        }
        function ES(r, a, u) {
          return (
            (u ? Nt(r, a, u) : a === n) ? (a = 1) : (a = pe(a)), Ef(Te(r), a)
          )
        }
        function xS() {
          var r = arguments,
            a = Te(r[0])
          return r.length < 3 ? a : a.replace(r[1], r[2])
        }
        var CS = Ia(function (r, a, u) {
          return r + (u ? '_' : '') + a.toLowerCase()
        })
        function TS(r, a, u) {
          return (
            u && typeof u != 'number' && Nt(r, a, u) && (a = u = n),
            (u = u === n ? _e : u >>> 0),
            u
              ? ((r = Te(r)),
                r &&
                (typeof a == 'string' || (a != null && !Kf(a))) &&
                ((a = rn(a)), !a && xa(r))
                  ? Zr(Nn(r), 0, u)
                  : r.split(a, u))
              : []
          )
        }
        var AS = Ia(function (r, a, u) {
          return r + (u ? ' ' : '') + Jf(a)
        })
        function PS(r, a, u) {
          return (
            (r = Te(r)),
            (u = u == null ? 0 : $i(pe(u), 0, r.length)),
            (a = rn(a)),
            r.slice(u, u + a.length) == a
          )
        }
        function OS(r, a, u) {
          var h = v.templateSettings
          u && Nt(r, a, u) && (a = n), (r = Te(r)), (a = yu({}, a, h, Ig))
          var m = yu({}, a.imports, h.imports, Ig),
            b = ct(m),
            E = Di(m, b),
            R,
            z,
            q = 0,
            K = a.interpolate || Ai,
            Q = "__p += '",
            te = uf(
              (a.escape || Ai).source +
                '|' +
                K.source +
                '|' +
                (K === Dr ? gl : Ai).source +
                '|' +
                (a.evaluate || Ai).source +
                '|$',
              'g'
            ),
            ie =
              '//# sourceURL=' +
              (Re.call(a, 'sourceURL')
                ? (a.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++Tl + ']') +
              `
`
          r.replace(te, function (le, ve, we, on, jt, sn) {
            return (
              we || (we = on),
              (Q += r.slice(q, sn).replace(Po, ab)),
              ve &&
                ((R = !0),
                (Q +=
                  `' +
__e(` +
                  ve +
                  `) +
'`)),
              jt &&
                ((z = !0),
                (Q +=
                  `';
` +
                  jt +
                  `;
__p += '`)),
              we &&
                (Q +=
                  `' +
((__t = (` +
                  we +
                  `)) == null ? '' : __t) +
'`),
              (q = sn + le.length),
              le
            )
          }),
            (Q += `';
`)
          var se = Re.call(a, 'variable') && a.variable
          if (!se)
            Q =
              `with (obj) {
` +
              Q +
              `
}
`
          else if (va.test(se)) throw new fe(d)
          ;(Q = (z ? Q.replace(Kc, '') : Q)
            .replace(ko, '$1')
            .replace(cl, '$1;')),
            (Q =
              'function(' +
              (se || 'obj') +
              `) {
` +
              (se
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (R ? ', __e = _.escape' : '') +
              (z
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Q +
              `return __p
}`)
          var ge = xm(function () {
            return Ce(b, ie + 'return ' + Q).apply(n, E)
          })
          if (((ge.source = Q), qf(ge))) throw ge
          return ge
        }
        function RS(r) {
          return Te(r).toLowerCase()
        }
        function LS(r) {
          return Te(r).toUpperCase()
        }
        function IS(r, a, u) {
          if (((r = Te(r)), r && (u || a === n))) return Ht(r)
          if (!r || !(a = rn(a))) return r
          var h = Nn(r),
            m = Nn(a),
            b = jp(h, m),
            E = zp(h, m) + 1
          return Zr(h, b, E).join('')
        }
        function NS(r, a, u) {
          if (((r = Te(r)), r && (u || a === n))) return r.slice(0, Mp(r) + 1)
          if (!r || !(a = rn(a))) return r
          var h = Nn(r),
            m = zp(h, Nn(a)) + 1
          return Zr(h, 0, m).join('')
        }
        function jS(r, a, u) {
          if (((r = Te(r)), r && (u || a === n))) return r.replace(Eo, '')
          if (!r || !(a = rn(a))) return r
          var h = Nn(r),
            m = jp(h, Nn(a))
          return Zr(h, m).join('')
        }
        function zS(r, a) {
          var u = A,
            h = N
          if (Be(a)) {
            var m = 'separator' in a ? a.separator : m
            ;(u = 'length' in a ? pe(a.length) : u),
              (h = 'omission' in a ? rn(a.omission) : h)
          }
          r = Te(r)
          var b = r.length
          if (xa(r)) {
            var E = Nn(r)
            b = E.length
          }
          if (u >= b) return r
          var R = u - Ca(h)
          if (R < 1) return h
          var z = E ? Zr(E, 0, R).join('') : r.slice(0, R)
          if (m === n) return z + h
          if ((E && (R += z.length - R), Kf(m))) {
            if (r.slice(R).search(m)) {
              var q,
                K = z
              for (
                m.global || (m = uf(m.source, Te(Co.exec(m)) + 'g')),
                  m.lastIndex = 0;
                (q = m.exec(K));

              )
                var Q = q.index
              z = z.slice(0, Q === n ? R : Q)
            }
          } else if (r.indexOf(rn(m), R) != R) {
            var te = z.lastIndexOf(m)
            te > -1 && (z = z.slice(0, te))
          }
          return z + h
        }
        function DS(r) {
          return (r = Te(r)), r && zr.test(r) ? r.replace(ga, hb) : r
        }
        var MS = Ia(function (r, a, u) {
            return r + (u ? ' ' : '') + a.toUpperCase()
          }),
          Jf = Cg('toUpperCase')
        function Em(r, a, u) {
          return (
            (r = Te(r)),
            (a = u ? n : a),
            a === n ? (sb(r) ? gb(r) : qr(r)) : r.match(a) || []
          )
        }
        var xm = me(function (r, a) {
            try {
              return wt(r, n, a)
            } catch (u) {
              return qf(u) ? u : new fe(u)
            }
          }),
          FS = mr(function (r, a) {
            return (
              _t(a, function (u) {
                ;(u = Zn(u)), pr(r, u, Hf(r[u], r))
              }),
              r
            )
          })
        function US(r) {
          var a = r == null ? 0 : r.length,
            u = oe()
          return (
            (r = a
              ? je(r, function (h) {
                  if (typeof h[1] != 'function') throw new mn(c)
                  return [u(h[0]), h[1]]
                })
              : []),
            me(function (h) {
              for (var m = -1; ++m < a; ) {
                var b = r[m]
                if (wt(b[0], this, h)) return wt(b[1], this, h)
              }
            })
          )
        }
        function $S(r) {
          return hw(yn(r, O))
        }
        function Yf(r) {
          return function () {
            return r
          }
        }
        function BS(r, a) {
          return r == null || r !== r ? a : r
        }
        var VS = Ag(),
          HS = Ag(!0)
        function Qt(r) {
          return r
        }
        function Xf(r) {
          return ig(typeof r == 'function' ? r : yn(r, O))
        }
        function WS(r) {
          return og(yn(r, O))
        }
        function qS(r, a) {
          return sg(r, yn(a, O))
        }
        var KS = me(function (r, a) {
            return function (u) {
              return ns(u, r, a)
            }
          }),
          QS = me(function (r, a) {
            return function (u) {
              return ns(r, u, a)
            }
          })
        function Zf(r, a, u) {
          var h = ct(a),
            m = Zl(a, h)
          u == null &&
            !(Be(a) && (m.length || !h.length)) &&
            ((u = a), (a = r), (r = this), (m = Zl(a, ct(a))))
          var b = !(Be(u) && 'chain' in u) || !!u.chain,
            E = yr(r)
          return (
            _t(m, function (R) {
              var z = a[R]
              ;(r[R] = z),
                E &&
                  (r.prototype[R] = function () {
                    var q = this.__chain__
                    if (b || q) {
                      var K = r(this.__wrapped__),
                        Q = (K.__actions__ = Wt(this.__actions__))
                      return (
                        Q.push({ func: z, args: arguments, thisArg: r }),
                        (K.__chain__ = q),
                        K
                      )
                    }
                    return z.apply(r, In([this.value()], arguments))
                  })
            }),
            r
          )
        }
        function GS() {
          return et._ === this && (et._ = _b), this
        }
        function eh() {}
        function JS(r) {
          return (
            (r = pe(r)),
            me(function (a) {
              return lg(a, r)
            })
          )
        }
        var YS = Rf(je),
          XS = Rf(ji),
          ZS = Rf(kt)
        function Cm(r) {
          return Mf(r) ? ee(Zn(r)) : Pw(r)
        }
        function eE(r) {
          return function (a) {
            return r == null ? n : Bi(r, a)
          }
        }
        var tE = Og(),
          nE = Og(!0)
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
        function aE() {
          return !0
        }
        function oE(r, a) {
          if (((r = pe(r)), r < 1 || r > Z)) return []
          var u = _e,
            h = St(r, _e)
          ;(a = oe(a)), (r -= _e)
          for (var m = lt(h, a); ++u < r; ) a(u)
          return m
        }
        function sE(r) {
          return de(r) ? je(r, Zn) : an(r) ? [r] : Wt(qg(Te(r)))
        }
        function lE(r) {
          var a = ++bb
          return Te(r) + a
        }
        var uE = au(function (r, a) {
            return r + a
          }, 0),
          cE = Lf('ceil'),
          fE = au(function (r, a) {
            return r / a
          }, 1),
          hE = Lf('floor')
        function dE(r) {
          return r && r.length ? Xl(r, Qt, vf) : n
        }
        function pE(r, a) {
          return r && r.length ? Xl(r, oe(a, 2), vf) : n
        }
        function gE(r) {
          return $(r, Qt)
        }
        function mE(r, a) {
          return $(r, oe(a, 2))
        }
        function vE(r) {
          return r && r.length ? Xl(r, Qt, _f) : n
        }
        function yE(r, a) {
          return r && r.length ? Xl(r, oe(a, 2), _f) : n
        }
        var bE = au(function (r, a) {
            return r * a
          }, 1),
          wE = Lf('round'),
          _E = au(function (r, a) {
            return r - a
          }, 0)
        function kE(r) {
          return r && r.length ? nt(r, Qt) : 0
        }
        function SE(r, a) {
          return r && r.length ? nt(r, oe(a, 2)) : 0
        }
        return (
          (v.after = W_),
          (v.ary = rm),
          (v.assign = Lk),
          (v.assignIn = vm),
          (v.assignInWith = yu),
          (v.assignWith = Ik),
          (v.at = Nk),
          (v.before = im),
          (v.bind = Hf),
          (v.bindAll = FS),
          (v.bindKey = am),
          (v.castArray = rk),
          (v.chain = em),
          (v.chunk = h2),
          (v.compact = d2),
          (v.concat = p2),
          (v.cond = US),
          (v.conforms = $S),
          (v.constant = Yf),
          (v.countBy = k_),
          (v.create = jk),
          (v.curry = om),
          (v.curryRight = sm),
          (v.debounce = lm),
          (v.defaults = zk),
          (v.defaultsDeep = Dk),
          (v.defer = q_),
          (v.delay = K_),
          (v.difference = g2),
          (v.differenceBy = m2),
          (v.differenceWith = v2),
          (v.drop = y2),
          (v.dropRight = b2),
          (v.dropRightWhile = w2),
          (v.dropWhile = _2),
          (v.fill = k2),
          (v.filter = E_),
          (v.flatMap = T_),
          (v.flatMapDeep = A_),
          (v.flatMapDepth = P_),
          (v.flatten = Jg),
          (v.flattenDeep = S2),
          (v.flattenDepth = E2),
          (v.flip = Q_),
          (v.flow = VS),
          (v.flowRight = HS),
          (v.fromPairs = x2),
          (v.functions = Hk),
          (v.functionsIn = Wk),
          (v.groupBy = O_),
          (v.initial = T2),
          (v.intersection = A2),
          (v.intersectionBy = P2),
          (v.intersectionWith = O2),
          (v.invert = Kk),
          (v.invertBy = Qk),
          (v.invokeMap = L_),
          (v.iteratee = Xf),
          (v.keyBy = I_),
          (v.keys = ct),
          (v.keysIn = Kt),
          (v.map = hu),
          (v.mapKeys = Jk),
          (v.mapValues = Yk),
          (v.matches = WS),
          (v.matchesProperty = qS),
          (v.memoize = pu),
          (v.merge = Xk),
          (v.mergeWith = ym),
          (v.method = KS),
          (v.methodOf = QS),
          (v.mixin = Zf),
          (v.negate = gu),
          (v.nthArg = JS),
          (v.omit = Zk),
          (v.omitBy = eS),
          (v.once = G_),
          (v.orderBy = N_),
          (v.over = YS),
          (v.overArgs = J_),
          (v.overEvery = XS),
          (v.overSome = ZS),
          (v.partial = Wf),
          (v.partialRight = um),
          (v.partition = j_),
          (v.pick = tS),
          (v.pickBy = bm),
          (v.property = Cm),
          (v.propertyOf = eE),
          (v.pull = N2),
          (v.pullAll = Xg),
          (v.pullAllBy = j2),
          (v.pullAllWith = z2),
          (v.pullAt = D2),
          (v.range = tE),
          (v.rangeRight = nE),
          (v.rearg = Y_),
          (v.reject = M_),
          (v.remove = M2),
          (v.rest = X_),
          (v.reverse = Bf),
          (v.sampleSize = U_),
          (v.set = rS),
          (v.setWith = iS),
          (v.shuffle = $_),
          (v.slice = F2),
          (v.sortBy = H_),
          (v.sortedUniq = q2),
          (v.sortedUniqBy = K2),
          (v.split = TS),
          (v.spread = Z_),
          (v.tail = Q2),
          (v.take = G2),
          (v.takeRight = J2),
          (v.takeRightWhile = Y2),
          (v.takeWhile = X2),
          (v.tap = d_),
          (v.throttle = ek),
          (v.thru = fu),
          (v.toArray = pm),
          (v.toPairs = wm),
          (v.toPairsIn = _m),
          (v.toPath = sE),
          (v.toPlainObject = mm),
          (v.transform = aS),
          (v.unary = tk),
          (v.union = Z2),
          (v.unionBy = e_),
          (v.unionWith = t_),
          (v.uniq = n_),
          (v.uniqBy = r_),
          (v.uniqWith = i_),
          (v.unset = oS),
          (v.unzip = Vf),
          (v.unzipWith = Zg),
          (v.update = sS),
          (v.updateWith = lS),
          (v.values = za),
          (v.valuesIn = uS),
          (v.without = a_),
          (v.words = Em),
          (v.wrap = nk),
          (v.xor = o_),
          (v.xorBy = s_),
          (v.xorWith = l_),
          (v.zip = u_),
          (v.zipObject = c_),
          (v.zipObjectDeep = f_),
          (v.zipWith = h_),
          (v.entries = wm),
          (v.entriesIn = _m),
          (v.extend = vm),
          (v.extendWith = yu),
          Zf(v, v),
          (v.add = uE),
          (v.attempt = xm),
          (v.camelCase = dS),
          (v.capitalize = km),
          (v.ceil = cE),
          (v.clamp = cS),
          (v.clone = ik),
          (v.cloneDeep = ok),
          (v.cloneDeepWith = sk),
          (v.cloneWith = ak),
          (v.conformsTo = lk),
          (v.deburr = Sm),
          (v.defaultTo = BS),
          (v.divide = fE),
          (v.endsWith = pS),
          (v.eq = zn),
          (v.escape = gS),
          (v.escapeRegExp = mS),
          (v.every = S_),
          (v.find = x_),
          (v.findIndex = Qg),
          (v.findKey = Mk),
          (v.findLast = C_),
          (v.findLastIndex = Gg),
          (v.findLastKey = Fk),
          (v.floor = hE),
          (v.forEach = tm),
          (v.forEachRight = nm),
          (v.forIn = Uk),
          (v.forInRight = $k),
          (v.forOwn = Bk),
          (v.forOwnRight = Vk),
          (v.get = Qf),
          (v.gt = uk),
          (v.gte = ck),
          (v.has = qk),
          (v.hasIn = Gf),
          (v.head = Yg),
          (v.identity = Qt),
          (v.includes = R_),
          (v.indexOf = C2),
          (v.inRange = fS),
          (v.invoke = Gk),
          (v.isArguments = Wi),
          (v.isArray = de),
          (v.isArrayBuffer = fk),
          (v.isArrayLike = qt),
          (v.isArrayLikeObject = Ye),
          (v.isBoolean = hk),
          (v.isBuffer = ei),
          (v.isDate = dk),
          (v.isElement = pk),
          (v.isEmpty = gk),
          (v.isEqual = mk),
          (v.isEqualWith = vk),
          (v.isError = qf),
          (v.isFinite = yk),
          (v.isFunction = yr),
          (v.isInteger = cm),
          (v.isLength = mu),
          (v.isMap = fm),
          (v.isMatch = bk),
          (v.isMatchWith = wk),
          (v.isNaN = _k),
          (v.isNative = kk),
          (v.isNil = Ek),
          (v.isNull = Sk),
          (v.isNumber = hm),
          (v.isObject = Be),
          (v.isObjectLike = Qe),
          (v.isPlainObject = ls),
          (v.isRegExp = Kf),
          (v.isSafeInteger = xk),
          (v.isSet = dm),
          (v.isString = vu),
          (v.isSymbol = an),
          (v.isTypedArray = ja),
          (v.isUndefined = Ck),
          (v.isWeakMap = Tk),
          (v.isWeakSet = Ak),
          (v.join = R2),
          (v.kebabCase = vS),
          (v.last = wn),
          (v.lastIndexOf = L2),
          (v.lowerCase = yS),
          (v.lowerFirst = bS),
          (v.lt = Pk),
          (v.lte = Ok),
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
          (v.stubTrue = aE),
          (v.multiply = bE),
          (v.nth = I2),
          (v.noConflict = GS),
          (v.noop = eh),
          (v.now = du),
          (v.pad = wS),
          (v.padEnd = _S),
          (v.padStart = kS),
          (v.parseInt = SS),
          (v.random = hS),
          (v.reduce = z_),
          (v.reduceRight = D_),
          (v.repeat = ES),
          (v.replace = xS),
          (v.result = nS),
          (v.round = wE),
          (v.runInContext = j),
          (v.sample = F_),
          (v.size = B_),
          (v.snakeCase = CS),
          (v.some = V_),
          (v.sortedIndex = U2),
          (v.sortedIndexBy = $2),
          (v.sortedIndexOf = B2),
          (v.sortedLastIndex = V2),
          (v.sortedLastIndexBy = H2),
          (v.sortedLastIndexOf = W2),
          (v.startCase = AS),
          (v.startsWith = PS),
          (v.subtract = _E),
          (v.sum = kE),
          (v.sumBy = SE),
          (v.template = OS),
          (v.times = oE),
          (v.toFinite = br),
          (v.toInteger = pe),
          (v.toLength = gm),
          (v.toLower = RS),
          (v.toNumber = _n),
          (v.toSafeInteger = Rk),
          (v.toString = Te),
          (v.toUpper = LS),
          (v.trim = IS),
          (v.trimEnd = NS),
          (v.trimStart = jS),
          (v.truncate = zS),
          (v.unescape = DS),
          (v.uniqueId = lE),
          (v.upperCase = MS),
          (v.upperFirst = Jf),
          (v.each = tm),
          (v.eachRight = nm),
          (v.first = Yg),
          Zf(
            v,
            (function () {
              var r = {}
              return (
                Yn(v, function (a, u) {
                  Re.call(v.prototype, u) || (r[u] = a)
                }),
                r
              )
            })(),
            { chain: !1 }
          ),
          (v.VERSION = i),
          _t(
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
          _t(['drop', 'take'], function (r, a) {
            ;(ye.prototype[r] = function (u) {
              u = u === n ? 1 : at(pe(u), 0)
              var h = this.__filtered__ && !a ? new ye(this) : this.clone()
              return (
                h.__filtered__
                  ? (h.__takeCount__ = St(u, h.__takeCount__))
                  : h.__views__.push({
                      size: St(u, _e),
                      type: r + (h.__dir__ < 0 ? 'Right' : ''),
                    }),
                h
              )
            }),
              (ye.prototype[r + 'Right'] = function (u) {
                return this.reverse()[r](u).reverse()
              })
          }),
          _t(['filter', 'map', 'takeWhile'], function (r, a) {
            var u = a + 1,
              h = u == Je || u == qn
            ye.prototype[r] = function (m) {
              var b = this.clone()
              return (
                b.__iteratees__.push({ iteratee: oe(m, 3), type: u }),
                (b.__filtered__ = b.__filtered__ || h),
                b
              )
            }
          }),
          _t(['head', 'last'], function (r, a) {
            var u = 'take' + (a ? 'Right' : '')
            ye.prototype[r] = function () {
              return this[u](1).value()[0]
            }
          }),
          _t(['initial', 'tail'], function (r, a) {
            var u = 'drop' + (a ? '' : 'Right')
            ye.prototype[r] = function () {
              return this.__filtered__ ? new ye(this) : this[u](1)
            }
          }),
          (ye.prototype.compact = function () {
            return this.filter(Qt)
          }),
          (ye.prototype.find = function (r) {
            return this.filter(r).head()
          }),
          (ye.prototype.findLast = function (r) {
            return this.reverse().find(r)
          }),
          (ye.prototype.invokeMap = me(function (r, a) {
            return typeof r == 'function'
              ? new ye(this)
              : this.map(function (u) {
                  return ns(u, r, a)
                })
          })),
          (ye.prototype.reject = function (r) {
            return this.filter(gu(oe(r)))
          }),
          (ye.prototype.slice = function (r, a) {
            r = pe(r)
            var u = this
            return u.__filtered__ && (r > 0 || a < 0)
              ? new ye(u)
              : (r < 0 ? (u = u.takeRight(-r)) : r && (u = u.drop(r)),
                a !== n &&
                  ((a = pe(a)), (u = a < 0 ? u.dropRight(-a) : u.take(a - r))),
                u)
          }),
          (ye.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse()
          }),
          (ye.prototype.toArray = function () {
            return this.take(_e)
          }),
          Yn(ye.prototype, function (r, a) {
            var u = /^(?:filter|find|map|reject)|While$/.test(a),
              h = /^(?:head|last)$/.test(a),
              m = v[h ? 'take' + (a == 'last' ? 'Right' : '') : a],
              b = h || /^find/.test(a)
            m &&
              (v.prototype[a] = function () {
                var E = this.__wrapped__,
                  R = h ? [1] : arguments,
                  z = E instanceof ye,
                  q = R[0],
                  K = z || de(E),
                  Q = function (ve) {
                    var we = m.apply(v, In([ve], R))
                    return h && te ? we[0] : we
                  }
                K &&
                  u &&
                  typeof q == 'function' &&
                  q.length != 1 &&
                  (z = K = !1)
                var te = this.__chain__,
                  ie = !!this.__actions__.length,
                  se = b && !te,
                  ge = z && !ie
                if (!b && K) {
                  E = ge ? E : new ye(this)
                  var le = r.apply(E, R)
                  return (
                    le.__actions__.push({ func: fu, args: [Q], thisArg: n }),
                    new vn(le, te)
                  )
                }
                return se && ge
                  ? r.apply(this, R)
                  : ((le = this.thru(Q)),
                    se ? (h ? le.value()[0] : le.value()) : le)
              })
          }),
          _t(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (r) {
              var a = Dl[r],
                u = /^(?:push|sort|unshift)$/.test(r) ? 'tap' : 'thru',
                h = /^(?:pop|shift)$/.test(r)
              v.prototype[r] = function () {
                var m = arguments
                if (h && !this.__chain__) {
                  var b = this.value()
                  return a.apply(de(b) ? b : [], m)
                }
                return this[u](function (E) {
                  return a.apply(de(E) ? E : [], m)
                })
              }
            }
          ),
          Yn(ye.prototype, function (r, a) {
            var u = v[a]
            if (u) {
              var h = u.name + ''
              Re.call(Oa, h) || (Oa[h] = []), Oa[h].push({ name: a, func: u })
            }
          }),
          (Oa[iu(n, L).name] = [{ name: 'wrapper', func: n }]),
          (ye.prototype.clone = Db),
          (ye.prototype.reverse = Mb),
          (ye.prototype.value = Fb),
          (v.prototype.at = p_),
          (v.prototype.chain = g_),
          (v.prototype.commit = m_),
          (v.prototype.next = v_),
          (v.prototype.plant = b_),
          (v.prototype.reverse = w_),
          (v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = __),
          (v.prototype.first = v.prototype.head),
          Go && (v.prototype[Go] = y_),
          v
        )
      },
      Ta = mb()
    nn ? (((nn.exports = Ta)._ = Ta), (Bo._ = Ta)) : (et._ = Ta)
  }).call(us)
})(xc, xc.exports)
xc.exports
const uC = () =>
  oi.jsx('div', {
    className:
      'flex items-center justify-center h-screen bg-gray-100 text-gray-800',
    children: oi.jsxs('div', {
      className: 'text-center',
      children: [
        oi.jsx('h1', {
          className: 'text-4xl font-bold mb-4',
          children: 'Coming Soon',
        }),
        oi.jsx('p', {
          className: 'text-lg text-gray-600 mb-6',
          children: "We're working hard to bring you something amazing.",
        }),
      ],
    }),
  })
function cC() {
  return oi.jsx(p3, { children: oi.jsx(uC, {}) })
}
const he = (e) => typeof e == 'string',
  ys = () => {
    let e, t
    const n = new Promise((i, o) => {
      ;(e = i), (t = o)
    })
    return (n.resolve = e), (n.reject = t), n
  },
  l0 = (e) => (e == null ? '' : '' + e),
  fC = (e, t, n) => {
    e.forEach((i) => {
      t[i] && (n[i] = t[i])
    })
  },
  hC = /###/g,
  u0 = (e) => (e && e.indexOf('###') > -1 ? e.replace(hC, '.') : e),
  c0 = (e) => !e || he(e),
  Ns = (e, t, n) => {
    const i = he(t) ? t.split('.') : t
    let o = 0
    for (; o < i.length - 1; ) {
      if (c0(e)) return {}
      const l = u0(i[o])
      !e[l] && n && (e[l] = new n()),
        Object.prototype.hasOwnProperty.call(e, l) ? (e = e[l]) : (e = {}),
        ++o
    }
    return c0(e) ? {} : { obj: e, k: u0(i[o]) }
  },
  f0 = (e, t, n) => {
    const { obj: i, k: o } = Ns(e, t, Object)
    if (i !== void 0 || t.length === 1) {
      i[o] = n
      return
    }
    let l = t[t.length - 1],
      c = t.slice(0, t.length - 1),
      d = Ns(e, c, Object)
    for (; d.obj === void 0 && c.length; )
      (l = `${c[c.length - 1]}.${l}`),
        (c = c.slice(0, c.length - 1)),
        (d = Ns(e, c, Object)),
        d && d.obj && typeof d.obj[`${d.k}.${l}`] < 'u' && (d.obj = void 0)
    d.obj[`${d.k}.${l}`] = n
  },
  dC = (e, t, n, i) => {
    const { obj: o, k: l } = Ns(e, t, Object)
    ;(o[l] = o[l] || []), o[l].push(n)
  },
  Cc = (e, t) => {
    const { obj: n, k: i } = Ns(e, t)
    if (n) return n[i]
  },
  pC = (e, t, n) => {
    const i = Cc(e, n)
    return i !== void 0 ? i : Cc(t, n)
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
  Ma = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var gC = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const mC = (e) => (he(e) ? e.replace(/[&<>"'\/]/g, (t) => gC[t]) : e)
class vC {
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
const yC = [' ', ',', '?', '!', ';'],
  bC = new vC(20),
  wC = (e, t, n) => {
    ;(t = t || ''), (n = n || '')
    const i = yC.filter((c) => t.indexOf(c) < 0 && n.indexOf(c) < 0)
    if (i.length === 0) return !0
    const o = bC.getRegExp(
      `(${i.map((c) => (c === '?' ? '\\?' : c)).join('|')})`
    )
    let l = !o.test(e)
    if (!l) {
      const c = e.indexOf(n)
      c > 0 && !o.test(e.substring(0, c)) && (l = !0)
    }
    return l
  },
  zd = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!e) return
    if (e[t]) return e[t]
    const i = t.split(n)
    let o = e
    for (let l = 0; l < i.length; ) {
      if (!o || typeof o != 'object') return
      let c,
        d = ''
      for (let g = l; g < i.length; ++g)
        if ((g !== l && (d += n), (d += i[g]), (c = o[d]), c !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof c) > -1 &&
            g < i.length - 1
          )
            continue
          l += g - l + 1
          break
        }
      o = c
    }
    return o
  },
  Tc = (e) => e && e.replace('_', '-'),
  _C = {
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
class Ac {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || _C),
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
  forward(t, n, i, o) {
    return o && !this.debug
      ? null
      : (he(t[0]) && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[n](t))
  }
  create(t) {
    return new Ac(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Ac(this.logger, t)
    )
  }
}
var rr = new Ac()
class qc {
  constructor() {
    this.observers = {}
  }
  on(t, n) {
    return (
      t.split(' ').forEach((i) => {
        this.observers[i] || (this.observers[i] = new Map())
        const o = this.observers[i].get(n) || 0
        this.observers[i].set(n, o + 1)
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
      var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      i[o - 1] = arguments[o]
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
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const l =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      c =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
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
    const g = Cc(this.data, d)
    return (
      !g &&
        !n &&
        !i &&
        t.indexOf('.') > -1 &&
        ((t = d[0]), (n = d[1]), (i = d.slice(2).join('.'))),
      g || !c || !he(i)
        ? g
        : zd(this.data && this.data[t] && this.data[t][n], i, l)
    )
  }
  addResource(t, n, i, o) {
    let l =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const c =
      l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator
    let d = [t, n]
    i && (d = d.concat(c ? i.split(c) : i)),
      t.indexOf('.') > -1 && ((d = t.split('.')), (o = n), (n = d[1])),
      this.addNamespaces(n),
      f0(this.data, d, o),
      l.silent || this.emit('added', t, n, i, o)
  }
  addResources(t, n, i) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const l in i)
      (he(i[l]) || Array.isArray(i[l])) &&
        this.addResource(t, n, l, i[l], { silent: !0 })
    o.silent || this.emit('added', t, n, i)
  }
  addResourceBundle(t, n, i, o, l) {
    let c =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      d = [t, n]
    t.indexOf('.') > -1 && ((d = t.split('.')), (o = i), (i = n), (n = d[1])),
      this.addNamespaces(n)
    let g = Cc(this.data, d) || {}
    c.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      o ? eb(g, i, l) : (g = { ...g, ...i }),
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
  handle(e, t, n, i, o) {
    return (
      e.forEach((l) => {
        this.processors[l] && (t = this.processors[l].process(t, n, i, o))
      }),
      t
    )
  },
}
const d0 = {}
class Pc extends qc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      fC(
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
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
    let l = n.ns || this.options.defaultNS || []
    const c = i && t.indexOf(i) > -1,
      d =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !wC(t, i, o)
    if (c && !d) {
      const g = t.match(this.interpolator.nestingRegexp)
      if (g && g.length > 0) return { key: t, namespaces: l }
      const w = t.split(i)
      ;(i !== o || (i === o && this.options.ns.indexOf(w[0]) > -1)) &&
        (l = w.shift()),
        (t = w.join(o))
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
    const o =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      l =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: c, namespaces: d } = this.extractFromKey(t[t.length - 1], n),
      g = d[d.length - 1],
      w = n.lng || this.language,
      P = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (w && w.toLowerCase() === 'cimode') {
      if (P) {
        const B = n.nsSeparator || this.options.nsSeparator
        return o
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
      return o
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
    const O = this.resolve(t, n)
    let k = O && O.res
    const V = (O && O.usedKey) || c,
      F = (O && O.exactUsedKey) || c,
      W = Object.prototype.toString.apply(k),
      J = ['[object Number]', '[object Function]', '[object RegExp]'],
      L = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      x = !this.i18nFormat || this.i18nFormat.handleAsObject,
      I = !he(k) && typeof k != 'boolean' && typeof k != 'number'
    if (x && k && I && J.indexOf(W) < 0 && !(he(L) && Array.isArray(k))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          )
        const B = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(V, k, { ...n, ns: d })
          : `key '${c} (${this.language})' returned an object instead of string.`
        return o
          ? ((O.res = B), (O.usedParams = this.getUsedParamsDetails(n)), O)
          : B
      }
      if (l) {
        const B = Array.isArray(k),
          G = B ? [] : {},
          X = B ? F : V
        for (const S in k)
          if (Object.prototype.hasOwnProperty.call(k, S)) {
            const _ = `${X}${l}${S}`
            ;(G[S] = this.translate(_, { ...n, joinArrays: !1, ns: d })),
              G[S] === _ && (G[S] = k[S])
          }
        k = G
      }
    } else if (x && he(L) && Array.isArray(k))
      (k = k.join(L)), k && (k = this.extendTranslation(k, t, n, i))
    else {
      let B = !1,
        G = !1
      const X = n.count !== void 0 && !he(n.count),
        S = Pc.hasDefaultValue(n),
        _ = X ? this.pluralResolver.getSuffix(w, n.count, n) : '',
        C =
          n.ordinal && X
            ? this.pluralResolver.getSuffix(w, n.count, { ordinal: !1 })
            : '',
        A =
          X &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        N =
          (A && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${_}`] ||
          n[`defaultValue${C}`] ||
          n.defaultValue
      !this.isValidLookup(k) && S && ((B = !0), (k = N)),
        this.isValidLookup(k) || ((G = !0), (k = c))
      const M =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          G
            ? void 0
            : k,
        T = S && N !== k && this.options.updateMissing
      if (G || B || T) {
        if (
          (this.logger.log(T ? 'updateKey' : 'missingKey', w, g, c, T ? N : k),
          l)
        ) {
          const Ee = this.resolve(c, { ...n, keySeparator: !1 })
          Ee &&
            Ee.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let Je = []
        const $t = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && $t && $t[0])
          for (let Ee = 0; Ee < $t.length; Ee++) Je.push($t[Ee])
        else
          this.options.saveMissingTo === 'all'
            ? (Je = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Je.push(n.lng || this.language)
        const qn = (Ee, Z, ae) => {
          const ue = S && ae !== k ? ae : M
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(Ee, g, Z, ue, T, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(Ee, g, Z, ue, T, n),
            this.emit('missingKey', Ee, g, Z, k)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && X
            ? Je.forEach((Ee) => {
                const Z = this.pluralResolver.getSuffixes(Ee, n)
                A &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  Z.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  Z.push(`${this.options.pluralSeparator}zero`),
                  Z.forEach((ae) => {
                    qn([Ee], c + ae, n[`defaultValue${ae}`] || N)
                  })
              })
            : qn(Je, c, N))
      }
      ;(k = this.extendTranslation(k, t, n, O, i)),
        G &&
          k === c &&
          this.options.appendNamespaceToMissingKey &&
          (k = `${g}:${c}`),
        (G || B) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (k = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${g}:${c}` : c,
                B ? k : void 0
              ))
            : (k = this.options.parseMissingKeyHandler(k)))
    }
    return o
      ? ((O.res = k), (O.usedParams = this.getUsedParamsDetails(n)), O)
      : k
  }
  extendTranslation(t, n, i, o, l) {
    var c = this
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...i },
        i.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o }
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
      let P
      if (w) {
        const k = t.match(this.interpolator.nestingRegexp)
        P = k && k.length
      }
      let O = i.replace && !he(i.replace) ? i.replace : i
      if (
        (this.options.interpolation.defaultVariables &&
          (O = { ...this.options.interpolation.defaultVariables, ...O }),
        (t = this.interpolator.interpolate(
          t,
          O,
          i.lng || this.language || o.usedLng,
          i
        )),
        w)
      ) {
        const k = t.match(this.interpolator.nestingRegexp),
          V = k && k.length
        P < V && (i.nest = !1)
      }
      !i.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        o &&
        o.res &&
        (i.lng = this.language || o.usedLng),
        i.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var k = arguments.length, V = new Array(k), F = 0;
                F < k;
                F++
              )
                V[F] = arguments[F]
              return l && l[0] === V[0] && !i.context
                ? (c.logger.warn(
                    `It seems you are nesting recursively key: ${V[0]} in key: ${n[0]}`
                  ),
                  null)
                : c.translate(...V, n)
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
                  ...o,
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
      o,
      l,
      c,
      d
    return (
      he(t) && (t = [t]),
      t.forEach((g) => {
        if (this.isValidLookup(i)) return
        const w = this.extractFromKey(g, n),
          P = w.key
        o = P
        let O = w.namespaces
        this.options.fallbackNS && (O = O.concat(this.options.fallbackNS))
        const k = n.count !== void 0 && !he(n.count),
          V =
            k &&
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
        O.forEach((J) => {
          this.isValidLookup(i) ||
            ((d = J),
            !d0[`${W[0]}-${J}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(d) &&
              ((d0[`${W[0]}-${J}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${W.join(
                  ', '
                )}" won't get resolved as namespace "${d}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            W.forEach((L) => {
              if (this.isValidLookup(i)) return
              c = L
              const x = [P]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(x, P, L, J, n)
              else {
                let B
                k && (B = this.pluralResolver.getSuffix(L, n.count, n))
                const G = `${this.options.pluralSeparator}zero`,
                  X = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (k &&
                    (x.push(P + B),
                    n.ordinal &&
                      B.indexOf(X) === 0 &&
                      x.push(P + B.replace(X, this.options.pluralSeparator)),
                    V && x.push(P + G)),
                  F)
                ) {
                  const S = `${P}${this.options.contextSeparator}${n.context}`
                  x.push(S),
                    k &&
                      (x.push(S + B),
                      n.ordinal &&
                        B.indexOf(X) === 0 &&
                        x.push(S + B.replace(X, this.options.pluralSeparator)),
                      V && x.push(S + G))
                }
              }
              let I
              for (; (I = x.pop()); )
                this.isValidLookup(i) ||
                  ((l = I), (i = this.getResource(L, J, I, n)))
            }))
        })
      }),
      { res: i, usedKey: o, exactUsedKey: l, usedLng: c, usedNS: d }
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
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, i, o)
      : this.resourceStore.getResource(t, n, i, o)
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
    let o = i ? t.replace : t
    if (
      (i && typeof t.count < 'u' && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !i)
    ) {
      o = { ...o }
      for (const l of n) delete o[l]
    }
    return o
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
const Nh = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class p0 {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = rr.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = Tc(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = Tc(t)), !t || t.indexOf('-') < 0)) return t
    const n = t.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(t) {
    if (he(t) && t.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let o = Intl.getCanonicalLocales(t)[0]
          if ((o && this.options.lowerCaseLng && (o = o.toLowerCase()), o))
            return o
        } catch {}
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let i = t.split('-')
      return (
        this.options.lowerCaseLng
          ? (i = i.map((o) => o.toLowerCase()))
          : i.length === 2
          ? ((i[0] = i[0].toLowerCase()),
            (i[1] = i[1].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = Nh(i[1].toLowerCase())))
          : i.length === 3 &&
            ((i[0] = i[0].toLowerCase()),
            i[1].length === 2 && (i[1] = i[1].toUpperCase()),
            i[0] !== 'sgn' && i[2].length === 2 && (i[2] = i[2].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = Nh(i[1].toLowerCase())),
            n.indexOf(i[2].toLowerCase()) > -1 &&
              (i[2] = Nh(i[2].toLowerCase()))),
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
        const o = this.formatLanguageCode(i)
        ;(!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o)
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((i) => {
          if (n) return
          const o = this.getLanguagePartFromCode(i)
          if (this.isSupportedCode(o)) return (n = o)
          n = this.options.supportedLngs.find((l) => {
            if (
              l === o ||
              (!(l.indexOf('-') < 0 && o.indexOf('-') < 0) &&
                ((l.indexOf('-') > 0 &&
                  o.indexOf('-') < 0 &&
                  l.substring(0, l.indexOf('-')) === o) ||
                  (l.indexOf(o) === 0 && o.length > 1)))
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
      o = [],
      l = (c) => {
        c &&
          (this.isSupportedCode(c)
            ? o.push(c)
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
        o.indexOf(c) < 0 && l(this.formatLanguageCode(c))
      }),
      o
    )
  }
}
let kC = [
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
  SC = {
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
const EC = ['v1', 'v2', 'v3'],
  xC = ['v4'],
  g0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  CC = () => {
    const e = {}
    return (
      kC.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: SC[t.fc] }
        })
      }),
      e
    )
  }
class TC {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = n),
      (this.logger = rr.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        xC.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = CC()),
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
        const i = Tc(t === 'dev' ? 'en' : t),
          o = n.ordinal ? 'ordinal' : 'cardinal',
          l = JSON.stringify({ cleanedCode: i, type: o })
        if (l in this.pluralRulesCache) return this.pluralRulesCache[l]
        const c = new Intl.PluralRules(i, { type: o })
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
    return this.getSuffixes(t, i).map((o) => `${n}${o}`)
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const i = this.getRule(t, n)
    return i
      ? this.shouldUseIntlApi()
        ? i
            .resolvedOptions()
            .pluralCategories.sort((o, l) => g0[o] - g0[l])
            .map(
              (o) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ''
                }${o}`
            )
        : i.numbers.map((o) => this.getSuffix(t, o, n))
      : []
  }
  getSuffix(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const o = this.getRule(t, i)
    return o
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            i.ordinal ? `ordinal${this.options.prepend}` : ''
          }${o.select(n)}`
        : this.getSuffixRetroCompatible(o, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '')
  }
  getSuffixRetroCompatible(t, n) {
    const i = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n))
    let o = t.numbers[i]
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (o === 2 ? (o = 'plural') : o === 1 && (o = ''))
    const l = () =>
      this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString()
    return this.options.compatibilityJSON === 'v1'
      ? o === 1
        ? ''
        : typeof o == 'number'
        ? `_plural_${o.toString()}`
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
    return !EC.includes(this.options.compatibilityJSON)
  }
}
const m0 = function (e, t, n) {
    let i =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      l = pC(e, t, n)
    return (
      !l &&
        o &&
        he(n) &&
        ((l = zd(e, n, i)), l === void 0 && (l = zd(t, n, i))),
      l
    )
  },
  jh = (e) => e.replace(/\$/g, '$$$$')
class AC {
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
      useRawValueToEscape: o,
      prefix: l,
      prefixEscaped: c,
      suffix: d,
      suffixEscaped: g,
      formatSeparator: w,
      unescapeSuffix: P,
      unescapePrefix: O,
      nestingPrefix: k,
      nestingPrefixEscaped: V,
      nestingSuffix: F,
      nestingSuffixEscaped: W,
      nestingOptionsSeparator: J,
      maxReplaces: L,
      alwaysFormat: x,
    } = t.interpolation
    ;(this.escape = n !== void 0 ? n : mC),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = l ? Ma(l) : c || '{{'),
      (this.suffix = d ? Ma(d) : g || '}}'),
      (this.formatSeparator = w || ','),
      (this.unescapePrefix = P ? '' : O || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : P || ''),
      (this.nestingPrefix = k ? Ma(k) : V || Ma('$t(')),
      (this.nestingSuffix = F ? Ma(F) : W || Ma(')')),
      (this.nestingOptionsSeparator = J || ','),
      (this.maxReplaces = L || 1e3),
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
  interpolate(t, n, i, o) {
    let l, c, d
    const g =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      w = (k) => {
        if (k.indexOf(this.formatSeparator) < 0) {
          const J = m0(
            n,
            g,
            k,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          )
          return this.alwaysFormat
            ? this.format(J, void 0, i, { ...o, ...n, interpolationkey: k })
            : J
        }
        const V = k.split(this.formatSeparator),
          F = V.shift().trim(),
          W = V.join(this.formatSeparator).trim()
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
          { ...o, ...n, interpolationkey: F }
        )
      }
    this.resetRegExp()
    const P =
        (o && o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      O =
        o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (k) => jh(k) },
        {
          regex: this.regexp,
          safeValue: (k) => (this.escapeValue ? jh(this.escape(k)) : jh(k)),
        },
      ].forEach((k) => {
        for (d = 0; (l = k.regex.exec(t)); ) {
          const V = l[1].trim()
          if (((c = w(V)), c === void 0))
            if (typeof P == 'function') {
              const W = P(t, l, o)
              c = he(W) ? W : ''
            } else if (o && Object.prototype.hasOwnProperty.call(o, V)) c = ''
            else if (O) {
              c = l[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${V} for interpolating ${t}`
              ),
                (c = '')
          else !he(c) && !this.useRawValueToEscape && (c = l0(c))
          const F = k.safeValue(c)
          if (
            ((t = t.replace(l[0], F)),
            O
              ? ((k.regex.lastIndex += c.length),
                (k.regex.lastIndex -= l[0].length))
              : (k.regex.lastIndex = 0),
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
      o,
      l,
      c
    const d = (g, w) => {
      const P = this.nestingOptionsSeparator
      if (g.indexOf(P) < 0) return g
      const O = g.split(new RegExp(`${P}[ ]*{`))
      let k = `{${O[1]}`
      ;(g = O[0]), (k = this.interpolate(k, c))
      const V = k.match(/'/g),
        F = k.match(/"/g)
      ;((V && V.length % 2 === 0 && !F) || F.length % 2 !== 0) &&
        (k = k.replace(/'/g, '"'))
      try {
        ;(c = JSON.parse(k)), w && (c = { ...w, ...c })
      } catch (W) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${g}`,
            W
          ),
          `${g}${P}${k}`
        )
      }
      return (
        c.defaultValue &&
          c.defaultValue.indexOf(this.prefix) > -1 &&
          delete c.defaultValue,
        g
      )
    }
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let g = []
      ;(c = { ...i }),
        (c = c.replace && !he(c.replace) ? c.replace : c),
        (c.applyPostProcessor = !1),
        delete c.defaultValue
      let w = !1
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const P = o[1].split(this.formatSeparator).map((O) => O.trim())
        ;(o[1] = P.shift()), (g = P), (w = !0)
      }
      if (((l = n(d.call(this, o[1].trim(), c), c)), l && o[0] === t && !he(l)))
        return l
      he(l) || (l = l0(l)),
        l ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (l = '')),
        w &&
          (l = g.reduce(
            (P, O) =>
              this.format(P, O, i.lng, { ...i, interpolationkey: o[1].trim() }),
            l.trim()
          )),
        (t = t.replace(o[0], l)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
const PC = (e) => {
    let t = e.toLowerCase().trim()
    const n = {}
    if (e.indexOf('(') > -1) {
      const i = e.split('(')
      t = i[0].toLowerCase().trim()
      const o = i[1].substring(0, i[1].length - 1)
      t === 'currency' && o.indexOf(':') < 0
        ? n.currency || (n.currency = o.trim())
        : t === 'relativetime' && o.indexOf(':') < 0
        ? n.range || (n.range = o.trim())
        : o.split(';').forEach((l) => {
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
  Fa = (e) => {
    const t = {}
    return (n, i, o) => {
      let l = o
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (l = { ...l, [o.interpolationkey]: void 0 })
      const c = i + JSON.stringify(l)
      let d = t[c]
      return d || ((d = e(Tc(i), o)), (t[c] = d)), d(n)
    }
  }
class OC {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = rr.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Fa((n, i) => {
          const o = new Intl.NumberFormat(n, { ...i })
          return (l) => o.format(l)
        }),
        currency: Fa((n, i) => {
          const o = new Intl.NumberFormat(n, { ...i, style: 'currency' })
          return (l) => o.format(l)
        }),
        datetime: Fa((n, i) => {
          const o = new Intl.DateTimeFormat(n, { ...i })
          return (l) => o.format(l)
        }),
        relativetime: Fa((n, i) => {
          const o = new Intl.RelativeTimeFormat(n, { ...i })
          return (l) => o.format(l, i.range || 'day')
        }),
        list: Fa((n, i) => {
          const o = new Intl.ListFormat(n, { ...i })
          return (l) => o.format(l)
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
    this.formats[t.toLowerCase().trim()] = Fa(n)
  }
  format(t, n, i) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
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
      const { formatName: g, formatOptions: w } = PC(d)
      if (this.formats[g]) {
        let P = c
        try {
          const O =
              (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
            k = O.locale || O.lng || o.locale || o.lng || i
          P = this.formats[g](c, k, { ...w, ...o, ...O })
        } catch (O) {
          this.logger.warn(O)
        }
        return P
      } else this.logger.warn(`there was no format function for ${g}`)
      return c
    }, t)
  }
}
const RC = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class LC extends qc {
  constructor(t, n, i) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = o),
      (this.logger = rr.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(i, o.backend, o)
  }
  queueLoad(t, n, i, o) {
    const l = {},
      c = {},
      d = {},
      g = {}
    return (
      t.forEach((w) => {
        let P = !0
        n.forEach((O) => {
          const k = `${w}|${O}`
          !i.reload && this.store.hasResourceBundle(w, O)
            ? (this.state[k] = 2)
            : this.state[k] < 0 ||
              (this.state[k] === 1
                ? c[k] === void 0 && (c[k] = !0)
                : ((this.state[k] = 1),
                  (P = !1),
                  c[k] === void 0 && (c[k] = !0),
                  l[k] === void 0 && (l[k] = !0),
                  g[O] === void 0 && (g[O] = !0)))
        }),
          P || (d[w] = !0)
      }),
      (Object.keys(l).length || Object.keys(c).length) &&
        this.queue.push({
          pending: c,
          pendingCount: Object.keys(c).length,
          loaded: {},
          errors: [],
          callback: o,
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
    const o = t.split('|'),
      l = o[0],
      c = o[1]
    n && this.emit('failedLoading', l, c, n),
      !n &&
        i &&
        this.store.addResourceBundle(l, c, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && i && (this.state[t] = 0)
    const d = {}
    this.queue.forEach((g) => {
      dC(g.loaded, [l], c),
        RC(g, t),
        n && g.errors.push(n),
        g.pendingCount === 0 &&
          !g.done &&
          (Object.keys(g.loaded).forEach((w) => {
            d[w] || (d[w] = {})
            const P = g.loaded[w]
            P.length &&
              P.forEach((O) => {
                d[w][O] === void 0 && (d[w][O] = !0)
              })
          }),
          (g.done = !0),
          g.errors.length ? g.callback(g.errors) : g.callback())
    }),
      this.emit('loaded', d),
      (this.queue = this.queue.filter((g) => !g.done))
  }
  read(t, n, i) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
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
        tried: o,
        wait: l,
        callback: c,
      })
      return
    }
    this.readingCalls++
    const d = (w, P) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const O = this.waitingReads.shift()
          this.read(O.lng, O.ns, O.fcName, O.tried, O.wait, O.callback)
        }
        if (w && P && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, i, o + 1, l * 2, c)
          }, l)
          return
        }
        c(w, P)
      },
      g = this.backend[i].bind(this.backend)
    if (g.length === 2) {
      try {
        const w = g(t, n)
        w && typeof w.then == 'function'
          ? w.then((P) => d(null, P)).catch(d)
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
      o = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        o && o()
      )
    he(t) && (t = this.languageUtils.toResolveHierarchy(t)), he(n) && (n = [n])
    const l = this.queueLoad(t, n, i, o)
    if (!l.toLoad.length) return l.pending.length || o(), null
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
      o = i[0],
      l = i[1]
    this.read(o, l, 'read', void 0, void 0, (c, d) => {
      c &&
        this.logger.warn(
          `${n}loading namespace ${l} for language ${o} failed`,
          c
        ),
        !c &&
          d &&
          this.logger.log(`${n}loaded namespace ${l} for language ${o}`, d),
        this.loaded(t, c, d)
    })
  }
  saveMissing(t, n, i, o, l) {
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
            let P
            w.length === 5 ? (P = w(t, n, i, o, g)) : (P = w(t, n, i, o)),
              P && typeof P.then == 'function'
                ? P.then((O) => d(null, O)).catch(d)
                : d(null, P)
          } catch (P) {
            d(P)
          }
        else w(t, n, i, o, d, g)
      }
      !t || !t[0] || this.store.addResource(t[0], n, i, o)
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
  Du = () => {},
  IC = (e) => {
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
      IC(this),
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
    const o = v0()
    ;(this.options = { ...o, ...this.options, ...y0(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...o.interpolation,
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
        : typeof Intl < 'u' && (g = OC)
      const w = new p0(this.options)
      this.store = new h0(this.options.resources, this.options)
      const P = this.services
      ;(P.logger = rr),
        (P.resourceStore = this.store),
        (P.languageUtils = w),
        (P.pluralResolver = new TC(w, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((P.formatter = l(g)),
          P.formatter.init(P, this.options),
          (this.options.interpolation.format = P.formatter.format.bind(
            P.formatter
          ))),
        (P.interpolator = new AC(this.options)),
        (P.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (P.backendConnector = new LC(
          l(this.modules.backend),
          P.resourceStore,
          P,
          this.options
        )),
        P.backendConnector.on('*', function (O) {
          for (
            var k = arguments.length, V = new Array(k > 1 ? k - 1 : 0), F = 1;
            F < k;
            F++
          )
            V[F - 1] = arguments[F]
          t.emit(O, ...V)
        }),
        this.modules.languageDetector &&
          ((P.languageDetector = l(this.modules.languageDetector)),
          P.languageDetector.init &&
            P.languageDetector.init(P, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((P.i18nFormat = l(this.modules.i18nFormat)),
          P.i18nFormat.init && P.i18nFormat.init(this)),
        (this.translator = new Pc(this.services, this.options)),
        this.translator.on('*', function (O) {
          for (
            var k = arguments.length, V = new Array(k > 1 ? k - 1 : 0), F = 1;
            F < k;
            F++
          )
            V[F - 1] = arguments[F]
          t.emit(O, ...V)
        }),
        this.modules.external.forEach((O) => {
          O.init && O.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = Du),
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
        const g = (w, P) => {
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
            c.resolve(P),
            i(w, P)
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Du
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
      const o = [],
        l = (c) => {
          !c ||
            c === 'cimode' ||
            this.services.languageUtils.toResolveHierarchy(c).forEach((d) => {
              d !== 'cimode' && o.indexOf(d) < 0 && o.push(d)
            })
        }
      i
        ? l(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((c) => l(c)),
        this.options.preload && this.options.preload.forEach((c) => l(c)),
        this.services.backendConnector.load(o, this.options.ns, (c) => {
          !c &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            n(c)
        })
    } else n(null)
  }
  reloadResources(t, n, i) {
    const o = ys()
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof n == 'function' && ((i = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      i || (i = Du),
      this.services.backendConnector.reload(t, n, (l) => {
        o.resolve(), i(l)
      }),
      o
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
    const o = ys()
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
          o.resolve(function () {
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
          this.loadResources(w, (P) => {
            c(P, w)
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
      o
    )
  }
  getFixedT(t, n, i) {
    var o = this
    const l = function (c, d) {
      let g
      if (typeof d != 'object') {
        for (
          var w = arguments.length, P = new Array(w > 2 ? w - 2 : 0), O = 2;
          O < w;
          O++
        )
          P[O - 2] = arguments[O]
        g = o.options.overloadTranslationOptionHandler([c, d].concat(P))
      } else g = { ...d }
      ;(g.lng = g.lng || l.lng),
        (g.lngs = g.lngs || l.lngs),
        (g.ns = g.ns || l.ns),
        g.keyPrefix !== '' && (g.keyPrefix = g.keyPrefix || i || l.keyPrefix)
      const k = o.options.keySeparator || '.'
      let V
      return (
        g.keyPrefix && Array.isArray(c)
          ? (V = c.map((F) => `${g.keyPrefix}${k}${F}`))
          : (V = g.keyPrefix ? `${g.keyPrefix}${k}${c}` : c),
        o.t(V, g)
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
      o = this.options ? this.options.fallbackLng : !1,
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
      (c(i, t) && (!o || c(l, t)))
    )
  }
  loadNamespaces(t, n) {
    const i = ys()
    return this.options.ns
      ? (he(t) && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
        }),
        this.loadResources((o) => {
          i.resolve(), n && n(o)
        }),
        i)
      : (n && n(), Promise.resolve())
  }
  loadLanguages(t, n) {
    const i = ys()
    he(t) && (t = [t])
    const o = this.options.preload || [],
      l = t.filter(
        (c) =>
          o.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c)
      )
    return l.length
      ? ((this.options.preload = o.concat(l)),
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
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Du
    const i = t.forkResourceStore
    i && delete t.forkResourceStore
    const o = { ...this.options, ...t, isClone: !0 },
      l = new el(o)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (l.logger = l.logger.clone(t)),
      ['store', 'services', 'language'].forEach((c) => {
        l[c] = this[c]
      }),
      (l.services = { ...this.services }),
      (l.services.utils = { hasLoadedNamespace: l.hasLoadedNamespace.bind(l) }),
      i &&
        ((l.store = new h0(this.store.data, o)),
        (l.services.resourceStore = l.store)),
      (l.translator = new Pc(l.services, o)),
      l.translator.on('*', function (c) {
        for (
          var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), w = 1;
          w < d;
          w++
        )
          g[w - 1] = arguments[w]
        l.emit(c, ...g)
      }),
      l.init(o, n),
      (l.translator.options = o),
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
const Ot = el.createInstance()
Ot.createInstance = el.createInstance
Ot.createInstance
Ot.dir
Ot.init
Ot.loadResources
Ot.reloadResources
Ot.use
Ot.changeLanguage
Ot.getFixedT
Ot.t
Ot.exists
Ot.setDefaultNamespace
Ot.hasLoadedNamespace
Ot.loadNamespaces
Ot.loadLanguages
Ot.use(r3).init({
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
zh.createRoot(document.getElementById('root')).render(
  oi.jsx(A0.StrictMode, { children: oi.jsx(cC, {}) })
)
