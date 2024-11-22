;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o)
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === 'childList')
        for (const c of u.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && i(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const u = {}
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    )
  }
  function i(o) {
    if (o.ep) return
    o.ep = !0
    const u = n(o)
    fetch(o.href, u)
  }
})()
function EE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n]
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const o in i)
        if (o !== 'default' && !(o in e)) {
          const u = Object.getOwnPropertyDescriptor(i, o)
          u &&
            Object.defineProperty(
              e,
              o,
              u.get ? u : { enumerable: !0, get: () => i[o] }
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
        for (const u of o.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && n(u)
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
var ss =
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
  Tc = {},
  w0 = { exports: {} },
  ye = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zs = Symbol.for('react.element'),
  CE = Symbol.for('react.portal'),
  AE = Symbol.for('react.fragment'),
  LE = Symbol.for('react.strict_mode'),
  PE = Symbol.for('react.profiler'),
  OE = Symbol.for('react.provider'),
  IE = Symbol.for('react.context'),
  TE = Symbol.for('react.forward_ref'),
  NE = Symbol.for('react.suspense'),
  RE = Symbol.for('react.memo'),
  zE = Symbol.for('react.lazy'),
  Lm = Symbol.iterator
function jE(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Lm && e[Lm]) || e['@@iterator']),
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
function vo(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || _0)
}
vo.prototype.isReactComponent = {}
vo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
vo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function E0() {}
E0.prototype = vo.prototype
function Dd(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || _0)
}
var Fd = (Dd.prototype = new E0())
Fd.constructor = Dd
k0(Fd, vo.prototype)
Fd.isPureReactComponent = !0
var Pm = Array.isArray,
  x0 = Object.prototype.hasOwnProperty,
  Ud = { current: null },
  C0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function A0(e, t, n) {
  var i,
    o = {},
    u = null,
    c = null
  if (t != null)
    for (i in (t.ref !== void 0 && (c = t.ref),
    t.key !== void 0 && (u = '' + t.key),
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
  return { $$typeof: Zs, type: e, key: u, ref: c, props: o, _owner: Ud.current }
}
function DE(e, t) {
  return {
    $$typeof: Zs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Md(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zs
}
function FE(e) {
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
    ? FE('' + e.key)
    : t.toString(36)
}
function Ml(e, t, n, i, o) {
  var u = typeof e
  ;(u === 'undefined' || u === 'boolean') && (e = null)
  var c = !1
  if (e === null) c = !0
  else
    switch (u) {
      case 'string':
      case 'number':
        c = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Zs:
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
          Ml(o, t, n, '', function (w) {
            return w
          }))
        : o != null &&
          (Md(o) &&
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
      u = e[d]
      var g = i + rh(u, d)
      c += Ml(u, t, n, g, o)
    }
  else if (((g = jE(e)), typeof g == 'function'))
    for (e = g.call(e), d = 0; !(u = e.next()).done; )
      (u = u.value), (g = i + rh(u, d++)), (c += Ml(u, t, n, g, o))
  else if (u === 'object')
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
function _l(e, t, n) {
  if (e == null) return e
  var i = [],
    o = 0
  return (
    Ml(e, i, '', '', function (u) {
      return t.call(n, u, o++)
    }),
    i
  )
}
function UE(e) {
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
var Ut = { current: null },
  $l = { transition: null },
  ME = {
    ReactCurrentDispatcher: Ut,
    ReactCurrentBatchConfig: $l,
    ReactCurrentOwner: Ud,
  }
ye.Children = {
  map: _l,
  forEach: function (e, t, n) {
    _l(
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
      _l(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      _l(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Md(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
ye.Component = vo
ye.Fragment = AE
ye.Profiler = PE
ye.PureComponent = Dd
ye.StrictMode = LE
ye.Suspense = NE
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ME
ye.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var i = k0({}, e.props),
    o = e.key,
    u = e.ref,
    c = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (c = Ud.current)),
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
  return { $$typeof: Zs, type: e.type, key: o, ref: u, props: i, _owner: c }
}
ye.createContext = function (e) {
  return (
    (e = {
      $$typeof: IE,
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
ye.createElement = A0
ye.createFactory = function (e) {
  var t = A0.bind(null, e)
  return (t.type = e), t
}
ye.createRef = function () {
  return { current: null }
}
ye.forwardRef = function (e) {
  return { $$typeof: TE, render: e }
}
ye.isValidElement = Md
ye.lazy = function (e) {
  return { $$typeof: zE, _payload: { _status: -1, _result: e }, _init: UE }
}
ye.memo = function (e, t) {
  return { $$typeof: RE, type: e, compare: t === void 0 ? null : t }
}
ye.startTransition = function (e) {
  var t = $l.transition
  $l.transition = {}
  try {
    e()
  } finally {
    $l.transition = t
  }
}
ye.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
ye.useCallback = function (e, t) {
  return Ut.current.useCallback(e, t)
}
ye.useContext = function (e) {
  return Ut.current.useContext(e)
}
ye.useDebugValue = function () {}
ye.useDeferredValue = function (e) {
  return Ut.current.useDeferredValue(e)
}
ye.useEffect = function (e, t) {
  return Ut.current.useEffect(e, t)
}
ye.useId = function () {
  return Ut.current.useId()
}
ye.useImperativeHandle = function (e, t, n) {
  return Ut.current.useImperativeHandle(e, t, n)
}
ye.useInsertionEffect = function (e, t) {
  return Ut.current.useInsertionEffect(e, t)
}
ye.useLayoutEffect = function (e, t) {
  return Ut.current.useLayoutEffect(e, t)
}
ye.useMemo = function (e, t) {
  return Ut.current.useMemo(e, t)
}
ye.useReducer = function (e, t, n) {
  return Ut.current.useReducer(e, t, n)
}
ye.useRef = function (e) {
  return Ut.current.useRef(e)
}
ye.useState = function (e) {
  return Ut.current.useState(e)
}
ye.useSyncExternalStore = function (e, t, n) {
  return Ut.current.useSyncExternalStore(e, t, n)
}
ye.useTransition = function () {
  return Ut.current.useTransition()
}
ye.version = '18.2.0'
w0.exports = ye
var Lt = w0.exports
const L0 = xE(Lt),
  $E = EE({ __proto__: null, default: L0 }, [Lt])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var BE = Lt,
  VE = Symbol.for('react.element'),
  HE = Symbol.for('react.fragment'),
  WE = Object.prototype.hasOwnProperty,
  qE = BE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  KE = { key: !0, ref: !0, __self: !0, __source: !0 }
function P0(e, t, n) {
  var i,
    o = {},
    u = null,
    c = null
  n !== void 0 && (u = '' + n),
    t.key !== void 0 && (u = '' + t.key),
    t.ref !== void 0 && (c = t.ref)
  for (i in t) WE.call(t, i) && !KE.hasOwnProperty(i) && (o[i] = t[i])
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) o[i] === void 0 && (o[i] = t[i])
  return { $$typeof: VE, type: e, key: u, ref: c, props: o, _owner: qE.current }
}
Tc.Fragment = HE
Tc.jsx = P0
Tc.jsxs = P0
b0.exports = Tc
var oi = b0.exports,
  jh = {},
  O0 = { exports: {} },
  fn = {},
  I0 = { exports: {} },
  T0 = {}
;(function (e) {
  function t(Z, ae) {
    var le = Z.length
    Z.push(ae)
    e: for (; 0 < le; ) {
      var we = (le - 1) >>> 1,
        Pe = Z[we]
      if (0 < o(Pe, ae)) (Z[we] = ae), (Z[le] = Pe), (le = we)
      else break e
    }
  }
  function n(Z) {
    return Z.length === 0 ? null : Z[0]
  }
  function i(Z) {
    if (Z.length === 0) return null
    var ae = Z[0],
      le = Z.pop()
    if (le !== ae) {
      Z[0] = le
      e: for (var we = 0, Pe = Z.length, Ve = Pe >>> 1; we < Ve; ) {
        var Pn = 2 * (we + 1) - 1,
          yt = Z[Pn],
          Bt = Pn + 1,
          dn = Z[Bt]
        if (0 > o(yt, le))
          Bt < Pe && 0 > o(dn, yt)
            ? ((Z[we] = dn), (Z[Bt] = le), (we = Bt))
            : ((Z[we] = yt), (Z[Pn] = le), (we = Pn))
        else if (Bt < Pe && 0 > o(dn, le)) (Z[we] = dn), (Z[Bt] = le), (we = Bt)
        else break e
      }
    }
    return ae
  }
  function o(Z, ae) {
    var le = Z.sortIndex - ae.sortIndex
    return le !== 0 ? le : Z.id - ae.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var u = performance
    e.unstable_now = function () {
      return u.now()
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
    U = !1,
    W = !1,
    J = typeof setTimeout == 'function' ? setTimeout : null,
    T = typeof clearTimeout == 'function' ? clearTimeout : null,
    x = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function N(Z) {
    for (var ae = n(w); ae !== null; ) {
      if (ae.callback === null) i(w)
      else if (ae.startTime <= Z)
        i(w), (ae.sortIndex = ae.expirationTime), t(g, ae)
      else break
      ae = n(w)
    }
  }
  function B(Z) {
    if (((W = !1), N(Z), !U))
      if (n(g) !== null) (U = !0), Hn(G)
      else {
        var ae = n(w)
        ae !== null && xe(B, ae.startTime - Z)
      }
  }
  function G(Z, ae) {
    ;(U = !1), W && ((W = !1), T(_), (_ = -1)), (V = !0)
    var le = k
    try {
      for (
        N(ae), O = n(g);
        O !== null && (!(O.expirationTime > ae) || (Z && !R()));

      ) {
        var we = O.callback
        if (typeof we == 'function') {
          ;(O.callback = null), (k = O.priorityLevel)
          var Pe = we(O.expirationTime <= ae)
          ;(ae = e.unstable_now()),
            typeof Pe == 'function' ? (O.callback = Pe) : O === n(g) && i(g),
            N(ae)
        } else i(g)
        O = n(g)
      }
      if (O !== null) var Ve = !0
      else {
        var Pn = n(w)
        Pn !== null && xe(B, Pn.startTime - ae), (Ve = !1)
      }
      return Ve
    } finally {
      ;(O = null), (k = le), (V = !1)
    }
  }
  var X = !1,
    S = null,
    _ = -1,
    C = 5,
    L = -1
  function R() {
    return !(e.unstable_now() - L < C)
  }
  function F() {
    if (S !== null) {
      var Z = e.unstable_now()
      L = Z
      var ae = !0
      try {
        ae = S(!0, Z)
      } finally {
        ae ? A() : ((X = !1), (S = null))
      }
    } else X = !1
  }
  var A
  if (typeof x == 'function')
    A = function () {
      x(F)
    }
  else if (typeof MessageChannel < 'u') {
    var Ze = new MessageChannel(),
      $t = Ze.port2
    ;(Ze.port1.onmessage = F),
      (A = function () {
        $t.postMessage(null)
      })
  } else
    A = function () {
      J(F, 0)
    }
  function Hn(Z) {
    ;(S = Z), X || ((X = !0), A())
  }
  function xe(Z, ae) {
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
      U || V || ((U = !0), Hn(G))
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
      var le = k
      k = ae
      try {
        return Z()
      } finally {
        k = le
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
      var le = k
      k = Z
      try {
        return ae()
      } finally {
        k = le
      }
    }),
    (e.unstable_scheduleCallback = function (Z, ae, le) {
      var we = e.unstable_now()
      switch (
        (typeof le == 'object' && le !== null
          ? ((le = le.delay),
            (le = typeof le == 'number' && 0 < le ? we + le : we))
          : (le = we),
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
        (Pe = le + Pe),
        (Z = {
          id: P++,
          callback: ae,
          priorityLevel: Z,
          startTime: le,
          expirationTime: Pe,
          sortIndex: -1,
        }),
        le > we
          ? ((Z.sortIndex = le),
            t(w, Z),
            n(g) === null &&
              Z === n(w) &&
              (W ? (T(_), (_ = -1)) : (W = !0), xe(B, le - we)))
          : ((Z.sortIndex = Pe), t(g, Z), U || V || ((U = !0), Hn(G))),
        Z
      )
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (Z) {
      var ae = k
      return function () {
        var le = k
        k = ae
        try {
          return Z.apply(this, arguments)
        } finally {
          k = le
        }
      }
    })
})(T0)
I0.exports = T0
var QE = I0.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N0 = Lt,
  cn = QE
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
var R0 = new Set(),
  Ns = {}
function oa(e, t) {
  uo(e, t), uo(e + 'Capture', t)
}
function uo(e, t) {
  for (Ns[e] = t, e = 0; e < t.length; e++) R0.add(t[e])
}
var Pr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Dh = Object.prototype.hasOwnProperty,
  GE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Im = {},
  Tm = {}
function JE(e) {
  return Dh.call(Tm, e)
    ? !0
    : Dh.call(Im, e)
    ? !1
    : GE.test(e)
    ? (Tm[e] = !0)
    : ((Im[e] = !0), !1)
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
function Mt(e, t, n, i, o, u, c) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = c)
}
var vt = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    vt[e] = new Mt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  vt[t] = new Mt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  vt[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  vt[e] = new Mt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    vt[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  vt[e] = new Mt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  vt[e] = new Mt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  vt[e] = new Mt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  vt[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var $d = /[\-:]([a-z])/g
function Bd(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace($d, Bd)
    vt[t] = new Mt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace($d, Bd)
    vt[t] = new Mt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace($d, Bd)
  vt[t] = new Mt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  vt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
vt.xlinkHref = new Mt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  vt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Vd(e, t, n, i) {
  var o = vt.hasOwnProperty(t) ? vt[t] : null
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
var Rr = N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kl = Symbol.for('react.element'),
  Va = Symbol.for('react.portal'),
  Ha = Symbol.for('react.fragment'),
  Hd = Symbol.for('react.strict_mode'),
  Fh = Symbol.for('react.profiler'),
  z0 = Symbol.for('react.provider'),
  j0 = Symbol.for('react.context'),
  Wd = Symbol.for('react.forward_ref'),
  Uh = Symbol.for('react.suspense'),
  Mh = Symbol.for('react.suspense_list'),
  qd = Symbol.for('react.memo'),
  ni = Symbol.for('react.lazy'),
  D0 = Symbol.for('react.offscreen'),
  Nm = Symbol.iterator
function us(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Nm && e[Nm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Qe = Object.assign,
  ih
function vs(e) {
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
          u = i.stack.split(`
`),
          c = o.length - 1,
          d = u.length - 1;
        1 <= c && 0 <= d && o[c] !== u[d];

      )
        d--
      for (; 1 <= c && 0 <= d; c--, d--)
        if (o[c] !== u[d]) {
          if (c !== 1 || d !== 1)
            do
              if ((c--, d--, 0 > d || o[c] !== u[d])) {
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
  return (e = e ? e.displayName || e.name : '') ? vs(e) : ''
}
function ZE(e) {
  switch (e.tag) {
    case 5:
      return vs(e.type)
    case 16:
      return vs('Lazy')
    case 13:
      return vs('Suspense')
    case 19:
      return vs('SuspenseList')
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
    case Ha:
      return 'Fragment'
    case Va:
      return 'Portal'
    case Fh:
      return 'Profiler'
    case Hd:
      return 'StrictMode'
    case Uh:
      return 'Suspense'
    case Mh:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case j0:
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
function F0(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function t4(e) {
  var t = F0(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      u = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (c) {
          ;(i = '' + c), u.call(this, c)
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
function Sl(e) {
  e._valueTracker || (e._valueTracker = t4(e))
}
function U0(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    i = ''
  return (
    e && (i = F0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Xl(e) {
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
  return Qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Rm(e, t) {
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
function M0(e, t) {
  ;(t = t.checked), t != null && Vd(e, 'checked', t, !1)
}
function Vh(e, t) {
  M0(e, t)
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
function Hh(e, t, n) {
  ;(t !== 'number' || Xl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ys = Array.isArray
function to(e, t, n, i) {
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
  return Qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function jm(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Y(92))
      if (ys(n)) {
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
var El,
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
        El = El || document.createElement('div'),
          El.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = El.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Rs(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var _s = {
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
Object.keys(_s).forEach(function (e) {
  n4.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_s[t] = _s[e])
  })
})
function H0(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (_s.hasOwnProperty(e) && _s[e])
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
var r4 = Qe(
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
  no = null,
  ro = null
function Fm(e) {
  if ((e = nu(e))) {
    if (typeof Jh != 'function') throw Error(Y(280))
    var t = e.stateNode
    t && ((t = Dc(t)), Jh(e.stateNode, e.type, t))
  }
}
function q0(e) {
  no ? (ro ? ro.push(e) : (ro = [e])) : (no = e)
}
function K0() {
  if (no) {
    var e = no,
      t = ro
    if (((ro = no = null), Fm(e), t)) for (e = 0; e < t.length; e++) Fm(t[e])
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
    ;(sh = !1), (no !== null || ro !== null) && (G0(), K0())
  }
}
function zs(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var i = Dc(n)
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
if (Pr)
  try {
    var ls = {}
    Object.defineProperty(ls, 'passive', {
      get: function () {
        Yh = !0
      },
    }),
      window.addEventListener('test', ls, ls),
      window.removeEventListener('test', ls, ls)
  } catch {
    Yh = !1
  }
function i4(e, t, n, i, o, u, c, d, g) {
  var w = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, w)
  } catch (P) {
    this.onError(P)
  }
}
var ks = !1,
  Zl = null,
  ec = !1,
  Xh = null,
  a4 = {
    onError: function (e) {
      ;(ks = !0), (Zl = e)
    },
  }
function o4(e, t, n, i, o, u, c, d, g) {
  ;(ks = !1), (Zl = null), i4.apply(a4, arguments)
}
function s4(e, t, n, i, o, u, c, d, g) {
  if ((o4.apply(this, arguments), ks)) {
    if (ks) {
      var w = Zl
      ;(ks = !1), (Zl = null)
    } else throw Error(Y(198))
    ec || ((ec = !0), (Xh = w))
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
function Um(e) {
  if (sa(e) !== e) throw Error(Y(188))
}
function u4(e) {
  var t = e.alternate
  if (!t) {
    if (((t = sa(e)), t === null)) throw Error(Y(188))
    return t !== e ? null : e
  }
  for (var n = e, i = t; ; ) {
    var o = n.return
    if (o === null) break
    var u = o.alternate
    if (u === null) {
      if (((i = o.return), i !== null)) {
        n = i
        continue
      }
      break
    }
    if (o.child === u.child) {
      for (u = o.child; u; ) {
        if (u === n) return Um(o), e
        if (u === i) return Um(o), t
        u = u.sibling
      }
      throw Error(Y(188))
    }
    if (n.return !== i.return) (n = o), (i = u)
    else {
      for (var c = !1, d = o.child; d; ) {
        if (d === n) {
          ;(c = !0), (n = o), (i = u)
          break
        }
        if (d === i) {
          ;(c = !0), (i = o), (n = u)
          break
        }
        d = d.sibling
      }
      if (!c) {
        for (d = u.child; d; ) {
          if (d === n) {
            ;(c = !0), (n = u), (i = o)
            break
          }
          if (d === i) {
            ;(c = !0), (i = u), (n = o)
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
  return (e = u4(e)), e !== null ? Z0(e) : null
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
var ey = cn.unstable_scheduleCallback,
  Mm = cn.unstable_cancelCallback,
  l4 = cn.unstable_shouldYield,
  c4 = cn.unstable_requestPaint,
  nt = cn.unstable_now,
  f4 = cn.unstable_getCurrentPriorityLevel,
  Qd = cn.unstable_ImmediatePriority,
  ty = cn.unstable_UserBlockingPriority,
  tc = cn.unstable_NormalPriority,
  h4 = cn.unstable_LowPriority,
  ny = cn.unstable_IdlePriority,
  Nc = null,
  er = null
function d4(e) {
  if (er && typeof er.onCommitFiberRoot == 'function')
    try {
      er.onCommitFiberRoot(Nc, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var $n = Math.clz32 ? Math.clz32 : m4,
  p4 = Math.log,
  g4 = Math.LN2
function m4(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((p4(e) / g4) | 0)) | 0
}
var xl = 64,
  Cl = 4194304
function bs(e) {
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
function nc(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var i = 0,
    o = e.suspendedLanes,
    u = e.pingedLanes,
    c = n & 268435455
  if (c !== 0) {
    var d = c & ~o
    d !== 0 ? (i = bs(d)) : ((u &= c), u !== 0 && (i = bs(u)))
  } else (c = n & ~o), c !== 0 ? (i = bs(c)) : u !== 0 && (i = bs(u))
  if (i === 0) return 0
  if (
    t !== 0 &&
    t !== i &&
    !(t & o) &&
    ((o = i & -i), (u = t & -t), o >= u || (o === 16 && (u & 4194240) !== 0))
  )
    return t
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - $n(t)), (o = 1 << n), (i |= e[n]), (t &= ~o)
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
      u = e.pendingLanes;
    0 < u;

  ) {
    var c = 31 - $n(u),
      d = 1 << c,
      g = o[c]
    g === -1
      ? (!(d & n) || d & i) && (o[c] = v4(d, t))
      : g <= t && (e.expiredLanes |= d),
      (u &= ~d)
  }
}
function Zh(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function ry() {
  var e = xl
  return (xl <<= 1), !(xl & 4194240) && (xl = 64), e
}
function uh(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function eu(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $n(t)),
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
    var o = 31 - $n(n),
      u = 1 << o
    ;(t[o] = 0), (i[o] = -1), (e[o] = -1), (n &= ~u)
  }
}
function Gd(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var i = 31 - $n(n),
      o = 1 << i
    ;(o & t) | (e[i] & t) && (e[i] |= t), (n &= ~o)
  }
}
var Te = 0
function iy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var ay,
  Jd,
  oy,
  sy,
  uy,
  ed = !1,
  Al = [],
  li = null,
  ci = null,
  fi = null,
  js = new Map(),
  Ds = new Map(),
  ii = [],
  w4 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function $m(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      li = null
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
      Ds.delete(t.pointerId)
  }
}
function cs(e, t, n, i, o, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [o],
      }),
      t !== null && ((t = nu(t)), t !== null && Jd(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function _4(e, t, n, i, o) {
  switch (t) {
    case 'focusin':
      return (li = cs(li, e, t, n, i, o)), !0
    case 'dragenter':
      return (ci = cs(ci, e, t, n, i, o)), !0
    case 'mouseover':
      return (fi = cs(fi, e, t, n, i, o)), !0
    case 'pointerover':
      var u = o.pointerId
      return js.set(u, cs(js.get(u) || null, e, t, n, i, o)), !0
    case 'gotpointercapture':
      return (
        (u = o.pointerId), Ds.set(u, cs(Ds.get(u) || null, e, t, n, i, o)), !0
      )
  }
  return !1
}
function ly(e) {
  var t = Gi(e.target)
  if (t !== null) {
    var n = sa(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Y0(n)), t !== null)) {
          ;(e.blockedOn = t),
            uy(e.priority, function () {
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
function Bl(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = td(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var i = new n.constructor(n.type, n)
      ;(Gh = i), n.target.dispatchEvent(i), (Gh = null)
    } else return (t = nu(n)), t !== null && Jd(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Bm(e, t, n) {
  Bl(e) && n.delete(t)
}
function k4() {
  ;(ed = !1),
    li !== null && Bl(li) && (li = null),
    ci !== null && Bl(ci) && (ci = null),
    fi !== null && Bl(fi) && (fi = null),
    js.forEach(Bm),
    Ds.forEach(Bm)
}
function fs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ed ||
      ((ed = !0), cn.unstable_scheduleCallback(cn.unstable_NormalPriority, k4)))
}
function Fs(e) {
  function t(o) {
    return fs(o, e)
  }
  if (0 < Al.length) {
    fs(Al[0], e)
    for (var n = 1; n < Al.length; n++) {
      var i = Al[n]
      i.blockedOn === e && (i.blockedOn = null)
    }
  }
  for (
    li !== null && fs(li, e),
      ci !== null && fs(ci, e),
      fi !== null && fs(fi, e),
      js.forEach(t),
      Ds.forEach(t),
      n = 0;
    n < ii.length;
    n++
  )
    (i = ii[n]), i.blockedOn === e && (i.blockedOn = null)
  for (; 0 < ii.length && ((n = ii[0]), n.blockedOn === null); )
    ly(n), n.blockedOn === null && ii.shift()
}
var io = Rr.ReactCurrentBatchConfig,
  rc = !0
function S4(e, t, n, i) {
  var o = Te,
    u = io.transition
  io.transition = null
  try {
    ;(Te = 1), Yd(e, t, n, i)
  } finally {
    ;(Te = o), (io.transition = u)
  }
}
function E4(e, t, n, i) {
  var o = Te,
    u = io.transition
  io.transition = null
  try {
    ;(Te = 4), Yd(e, t, n, i)
  } finally {
    ;(Te = o), (io.transition = u)
  }
}
function Yd(e, t, n, i) {
  if (rc) {
    var o = td(e, t, n, i)
    if (o === null) yh(e, t, i, ic, n), $m(e, i)
    else if (_4(o, e, t, n, i)) i.stopPropagation()
    else if (($m(e, i), t & 4 && -1 < w4.indexOf(e))) {
      for (; o !== null; ) {
        var u = nu(o)
        if (
          (u !== null && ay(u),
          (u = td(e, t, n, i)),
          u === null && yh(e, t, i, ic, n),
          u === o)
        )
          break
        o = u
      }
      o !== null && i.stopPropagation()
    } else yh(e, t, i, null, n)
  }
}
var ic = null
function td(e, t, n, i) {
  if (((ic = null), (e = Kd(i)), (e = Gi(e)), e !== null))
    if (((t = sa(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Y0(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (ic = e), null
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
        case tc:
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
  Vl = null
function fy() {
  if (Vl) return Vl
  var e,
    t = Xd,
    n = t.length,
    i,
    o = 'value' in si ? si.value : si.textContent,
    u = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var c = n - e
  for (i = 1; i <= c && t[n - i] === o[u - i]; i++);
  return (Vl = o.slice(e, 1 < i ? 1 - i : void 0))
}
function Hl(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ll() {
  return !0
}
function Vm() {
  return !1
}
function hn(e) {
  function t(n, i, o, u, c) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = i),
      (this.nativeEvent = u),
      (this.target = c),
      (this.currentTarget = null)
    for (var d in e)
      e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(u) : u[d]))
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? Ll
        : Vm),
      (this.isPropagationStopped = Vm),
      this
    )
  }
  return (
    Qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ll))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ll))
      },
      persist: function () {},
      isPersistent: Ll,
    }),
    t
  )
}
var yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zd = hn(yo),
  tu = Qe({}, yo, { view: 0, detail: 0 }),
  x4 = hn(tu),
  lh,
  ch,
  hs,
  Rc = Qe({}, tu, {
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
        : (e !== hs &&
            (hs && e.type === 'mousemove'
              ? ((lh = e.screenX - hs.screenX), (ch = e.screenY - hs.screenY))
              : (ch = lh = 0),
            (hs = e)),
          lh)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ch
    },
  }),
  Hm = hn(Rc),
  C4 = Qe({}, Rc, { dataTransfer: 0 }),
  A4 = hn(C4),
  L4 = Qe({}, tu, { relatedTarget: 0 }),
  fh = hn(L4),
  P4 = Qe({}, yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  O4 = hn(P4),
  I4 = Qe({}, yo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  T4 = hn(I4),
  N4 = Qe({}, yo, { data: 0 }),
  Wm = hn(N4),
  R4 = {
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
  j4 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function D4(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = j4[e]) ? !!t[e] : !1
}
function ep() {
  return D4
}
var F4 = Qe({}, tu, {
    key: function (e) {
      if (e.key) {
        var t = R4[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Hl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
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
      return e.type === 'keypress' ? Hl(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Hl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  U4 = hn(F4),
  M4 = Qe({}, Rc, {
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
  qm = hn(M4),
  $4 = Qe({}, tu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ep,
  }),
  B4 = hn($4),
  V4 = Qe({}, yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  H4 = hn(V4),
  W4 = Qe({}, Rc, {
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
  q4 = hn(W4),
  K4 = [9, 13, 27, 32],
  tp = Pr && 'CompositionEvent' in window,
  Ss = null
Pr && 'documentMode' in document && (Ss = document.documentMode)
var Q4 = Pr && 'TextEvent' in window && !Ss,
  hy = Pr && (!tp || (Ss && 8 < Ss && 11 >= Ss)),
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
var Wa = !1
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
  if (Wa)
    return e === 'compositionend' || (!tp && dy(e, t))
      ? ((e = fy()), (Vl = Xd = si = null), (Wa = !1), e)
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
    (t = ac(t, 'onChange')),
    0 < t.length &&
      ((n = new Zd('onChange', 'change', null, n, i)),
      e.push({ event: n, listeners: t }))
}
var Es = null,
  Us = null
function X4(e) {
  Cy(e, 0)
}
function zc(e) {
  var t = Qa(e)
  if (U0(t)) return e
}
function Z4(e, t) {
  if (e === 'change') return t
}
var my = !1
if (Pr) {
  var hh
  if (Pr) {
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
  Es && (Es.detachEvent('onpropertychange', vy), (Us = Es = null))
}
function vy(e) {
  if (e.propertyName === 'value' && zc(Us)) {
    var t = []
    gy(t, Us, e, Kd(e)), J0(X4, t)
  }
}
function ex(e, t, n) {
  e === 'focusin'
    ? (Ym(), (Es = t), (Us = n), Es.attachEvent('onpropertychange', vy))
    : e === 'focusout' && Ym()
}
function tx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return zc(Us)
}
function nx(e, t) {
  if (e === 'click') return zc(t)
}
function rx(e, t) {
  if (e === 'input' || e === 'change') return zc(t)
}
function ix(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Vn = typeof Object.is == 'function' ? Object.is : ix
function Ms(e, t) {
  if (Vn(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    i = Object.keys(t)
  if (n.length !== i.length) return !1
  for (i = 0; i < n.length; i++) {
    var o = n[i]
    if (!Dh.call(t, o) || !Vn(e[o], t[o])) return !1
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
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Xl(e.document)
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
          u = Math.min(i.start, o)
        ;(i = i.end === void 0 ? u : Math.min(i.end, o)),
          !e.extend && u > i && ((o = i), (i = u), (u = o)),
          (o = Zm(n, u))
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
          u > i
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
var ox = Pr && 'documentMode' in document && 11 >= document.documentMode,
  qa = null,
  nd = null,
  xs = null,
  rd = !1
function ev(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  rd ||
    qa == null ||
    qa !== Xl(i) ||
    ((i = qa),
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
    (xs && Ms(xs, i)) ||
      ((xs = i),
      (i = ac(nd, 'onSelect')),
      0 < i.length &&
        ((t = new Zd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = qa))))
}
function Pl(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Ka = {
    animationend: Pl('Animation', 'AnimationEnd'),
    animationiteration: Pl('Animation', 'AnimationIteration'),
    animationstart: Pl('Animation', 'AnimationStart'),
    transitionend: Pl('Transition', 'TransitionEnd'),
  },
  ph = {},
  wy = {}
Pr &&
  ((wy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ka.animationend.animation,
    delete Ka.animationiteration.animation,
    delete Ka.animationstart.animation),
  'TransitionEvent' in window || delete Ka.transitionend.transition)
function jc(e) {
  if (ph[e]) return ph[e]
  if (!Ka[e]) return e
  var t = Ka[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in wy) return (ph[e] = t[n])
  return e
}
var _y = jc('animationend'),
  ky = jc('animationiteration'),
  Sy = jc('animationstart'),
  Ey = jc('transitionend'),
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
    ux = mh[0].toUpperCase() + mh.slice(1)
  _i(sx, 'on' + ux)
}
_i(_y, 'onAnimationEnd')
_i(ky, 'onAnimationIteration')
_i(Sy, 'onAnimationStart')
_i('dblclick', 'onDoubleClick')
_i('focusin', 'onFocus')
_i('focusout', 'onBlur')
_i(Ey, 'onTransitionEnd')
uo('onMouseEnter', ['mouseout', 'mouseover'])
uo('onMouseLeave', ['mouseout', 'mouseover'])
uo('onPointerEnter', ['pointerout', 'pointerover'])
uo('onPointerLeave', ['pointerout', 'pointerover'])
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
var ws =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  lx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ws))
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
      var u = void 0
      if (t)
        for (var c = i.length - 1; 0 <= c; c--) {
          var d = i[c],
            g = d.instance,
            w = d.currentTarget
          if (((d = d.listener), g !== u && o.isPropagationStopped())) break e
          nv(o, d, w), (u = g)
        }
      else
        for (c = 0; c < i.length; c++) {
          if (
            ((d = i[c]),
            (g = d.instance),
            (w = d.currentTarget),
            (d = d.listener),
            g !== u && o.isPropagationStopped())
          )
            break e
          nv(o, d, w), (u = g)
        }
    }
  }
  if (ec) throw ((e = Xh), (ec = !1), (Xh = null), e)
}
function Me(e, t) {
  var n = t[ud]
  n === void 0 && (n = t[ud] = new Set())
  var i = e + '__bubble'
  n.has(i) || (Ay(t, e, 2, !1), n.add(i))
}
function vh(e, t, n) {
  var i = 0
  t && (i |= 4), Ay(n, e, i, t)
}
var Ol = '_reactListening' + Math.random().toString(36).slice(2)
function $s(e) {
  if (!e[Ol]) {
    ;(e[Ol] = !0),
      R0.forEach(function (n) {
        n !== 'selectionchange' && (lx.has(n) || vh(n, !1, e), vh(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ol] || ((t[Ol] = !0), vh('selectionchange', !1, t))
  }
}
function Ay(e, t, n, i) {
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
  var u = i
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
            i = u = c
            continue e
          }
          d = d.parentNode
        }
      }
      i = i.return
    }
  J0(function () {
    var w = u,
      P = Kd(n),
      O = []
    e: {
      var k = xy.get(e)
      if (k !== void 0) {
        var V = Zd,
          U = e
        switch (e) {
          case 'keypress':
            if (Hl(n) === 0) break e
          case 'keydown':
          case 'keyup':
            V = U4
            break
          case 'focusin':
            ;(U = 'focus'), (V = fh)
            break
          case 'focusout':
            ;(U = 'blur'), (V = fh)
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
            V = A4
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
            V = T4
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
          T = W ? (k !== null ? k + 'Capture' : null) : k
        W = []
        for (var x = w, N; x !== null; ) {
          N = x
          var B = N.stateNode
          if (
            (N.tag === 5 &&
              B !== null &&
              ((N = B),
              T !== null && ((B = zs(x, T)), B != null && W.push(Bs(x, B, N)))),
            J)
          )
            break
          x = x.return
        }
        0 < W.length &&
          ((k = new V(k, U, null, n, P)), O.push({ event: k, listeners: W }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((k = e === 'mouseover' || e === 'pointerover'),
          (V = e === 'mouseout' || e === 'pointerout'),
          k &&
            n !== Gh &&
            (U = n.relatedTarget || n.fromElement) &&
            (Gi(U) || U[Or]))
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
            ? ((U = n.relatedTarget || n.toElement),
              (V = w),
              (U = U ? Gi(U) : null),
              U !== null &&
                ((J = sa(U)), U !== J || (U.tag !== 5 && U.tag !== 6)) &&
                (U = null))
            : ((V = null), (U = w)),
          V !== U)
        ) {
          if (
            ((W = Hm),
            (B = 'onMouseLeave'),
            (T = 'onMouseEnter'),
            (x = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((W = qm),
              (B = 'onPointerLeave'),
              (T = 'onPointerEnter'),
              (x = 'pointer')),
            (J = V == null ? k : Qa(V)),
            (N = U == null ? k : Qa(U)),
            (k = new W(B, x + 'leave', V, n, P)),
            (k.target = J),
            (k.relatedTarget = N),
            (B = null),
            Gi(P) === w &&
              ((W = new W(T, x + 'enter', U, n, P)),
              (W.target = N),
              (W.relatedTarget = J),
              (B = W)),
            (J = B),
            V && U)
          )
            t: {
              for (W = V, T = U, x = 0, N = W; N; N = Ma(N)) x++
              for (N = 0, B = T; B; B = Ma(B)) N++
              for (; 0 < x - N; ) (W = Ma(W)), x--
              for (; 0 < N - x; ) (T = Ma(T)), N--
              for (; x--; ) {
                if (W === T || (T !== null && W === T.alternate)) break t
                ;(W = Ma(W)), (T = Ma(T))
              }
              W = null
            }
          else W = null
          V !== null && rv(O, k, V, W, !1),
            U !== null && J !== null && rv(O, J, U, W, !0)
        }
      }
      e: {
        if (
          ((k = w ? Qa(w) : window),
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
      switch (((X = w ? Qa(w) : window), e)) {
        case 'focusin':
          ;(Gm(X) || X.contentEditable === 'true') &&
            ((qa = X), (nd = w), (xs = null))
          break
        case 'focusout':
          xs = nd = qa = null
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
        Wa
          ? dy(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart')
      _ &&
        (hy &&
          n.locale !== 'ko' &&
          (Wa || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Wa && (S = fy())
            : ((si = P),
              (Xd = 'value' in si ? si.value : si.textContent),
              (Wa = !0))),
        (X = ac(w, _)),
        0 < X.length &&
          ((_ = new Wm(_, e, null, n, P)),
          O.push({ event: _, listeners: X }),
          S ? (_.data = S) : ((S = py(n)), S !== null && (_.data = S)))),
        (S = Q4 ? G4(e, n) : J4(e, n)) &&
          ((w = ac(w, 'onBeforeInput')),
          0 < w.length &&
            ((P = new Wm('onBeforeInput', 'beforeinput', null, n, P)),
            O.push({ event: P, listeners: w }),
            (P.data = S)))
    }
    Cy(O, t)
  })
}
function Bs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function ac(e, t) {
  for (var n = t + 'Capture', i = []; e !== null; ) {
    var o = e,
      u = o.stateNode
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      (u = zs(e, n)),
      u != null && i.unshift(Bs(e, u, o)),
      (u = zs(e, t)),
      u != null && i.push(Bs(e, u, o))),
      (e = e.return)
  }
  return i
}
function Ma(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function rv(e, t, n, i, o) {
  for (var u = t._reactName, c = []; n !== null && n !== i; ) {
    var d = n,
      g = d.alternate,
      w = d.stateNode
    if (g !== null && g === i) break
    d.tag === 5 &&
      w !== null &&
      ((d = w),
      o
        ? ((g = zs(n, u)), g != null && c.unshift(Bs(n, g, d)))
        : o || ((g = zs(n, u)), g != null && c.push(Bs(n, g, d)))),
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
function Il(e, t, n) {
  if (((t = iv(t)), iv(e) !== t && n)) throw Error(Y(425))
}
function oc() {}
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
          e.removeChild(o), Fs(t)
          return
        }
        i--
      } else (n !== '$' && n !== '$?' && n !== '$!') || i++
    n = o
  } while (n)
  Fs(t)
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
var bo = Math.random().toString(36).slice(2),
  Xn = '__reactFiber$' + bo,
  Vs = '__reactProps$' + bo,
  Or = '__reactContainer$' + bo,
  ud = '__reactEvents$' + bo,
  gx = '__reactListeners$' + bo,
  mx = '__reactHandles$' + bo
function Gi(e) {
  var t = e[Xn]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Or] || n[Xn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ov(e); e !== null; ) {
          if ((n = e[Xn])) return n
          e = ov(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function nu(e) {
  return (
    (e = e[Xn] || e[Or]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Qa(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(Y(33))
}
function Dc(e) {
  return e[Vs] || null
}
var ld = [],
  Ga = -1
function ki(e) {
  return { current: e }
}
function $e(e) {
  0 > Ga || ((e.current = ld[Ga]), (ld[Ga] = null), Ga--)
}
function Fe(e, t) {
  Ga++, (ld[Ga] = e.current), (e.current = t)
}
var wi = {},
  Pt = ki(wi),
  Xt = ki(!1),
  ta = wi
function lo(e, t) {
  var n = e.type.contextTypes
  if (!n) return wi
  var i = e.stateNode
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext
  var o = {},
    u
  for (u in n) o[u] = t[u]
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function Zt(e) {
  return (e = e.childContextTypes), e != null
}
function sc() {
  $e(Xt), $e(Pt)
}
function sv(e, t, n) {
  if (Pt.current !== wi) throw Error(Y(168))
  Fe(Pt, t), Fe(Xt, n)
}
function Ly(e, t, n) {
  var i = e.stateNode
  if (((t = t.childContextTypes), typeof i.getChildContext != 'function'))
    return n
  i = i.getChildContext()
  for (var o in i) if (!(o in t)) throw Error(Y(108, e4(e) || 'Unknown', o))
  return Qe({}, n, i)
}
function uc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wi),
    (ta = Pt.current),
    Fe(Pt, e),
    Fe(Xt, Xt.current),
    !0
  )
}
function uv(e, t, n) {
  var i = e.stateNode
  if (!i) throw Error(Y(169))
  n
    ? ((e = Ly(e, t, ta)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      $e(Xt),
      $e(Pt),
      Fe(Pt, e))
    : $e(Xt),
    Fe(Xt, n)
}
var xr = null,
  Fc = !1,
  wh = !1
function Py(e) {
  xr === null ? (xr = [e]) : xr.push(e)
}
function vx(e) {
  ;(Fc = !0), Py(e)
}
function Si() {
  if (!wh && xr !== null) {
    wh = !0
    var e = 0,
      t = Te
    try {
      var n = xr
      for (Te = 1; e < n.length; e++) {
        var i = n[e]
        do i = i(!0)
        while (i !== null)
      }
      ;(xr = null), (Fc = !1)
    } catch (o) {
      throw (xr !== null && (xr = xr.slice(e + 1)), ey(Qd, Si), o)
    } finally {
      ;(Te = t), (wh = !1)
    }
  }
  return null
}
var Ja = [],
  Ya = 0,
  lc = null,
  cc = 0,
  Sn = [],
  En = 0,
  na = null,
  Cr = 1,
  Ar = ''
function qi(e, t) {
  ;(Ja[Ya++] = cc), (Ja[Ya++] = lc), (lc = e), (cc = t)
}
function Oy(e, t, n) {
  ;(Sn[En++] = Cr), (Sn[En++] = Ar), (Sn[En++] = na), (na = e)
  var i = Cr
  e = Ar
  var o = 32 - $n(i) - 1
  ;(i &= ~(1 << o)), (n += 1)
  var u = 32 - $n(t) + o
  if (30 < u) {
    var c = o - (o % 5)
    ;(u = (i & ((1 << c) - 1)).toString(32)),
      (i >>= c),
      (o -= c),
      (Cr = (1 << (32 - $n(t) + o)) | (n << o) | i),
      (Ar = u + e)
  } else (Cr = (1 << u) | (n << o) | i), (Ar = e)
}
function rp(e) {
  e.return !== null && (qi(e, 1), Oy(e, 1, 0))
}
function ip(e) {
  for (; e === lc; )
    (lc = Ja[--Ya]), (Ja[Ya] = null), (cc = Ja[--Ya]), (Ja[Ya] = null)
  for (; e === na; )
    (na = Sn[--En]),
      (Sn[En] = null),
      (Ar = Sn[--En]),
      (Sn[En] = null),
      (Cr = Sn[--En]),
      (Sn[En] = null)
}
var ln = null,
  un = null,
  Be = !1,
  Un = null
function Iy(e, t) {
  var n = xn(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function lv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ln = e), (un = hi(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ln = e), (un = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = na !== null ? { id: Cr, overflow: Ar } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ln = e),
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
  if (Be) {
    var t = un
    if (t) {
      var n = t
      if (!lv(e, t)) {
        if (cd(e)) throw Error(Y(418))
        t = hi(n.nextSibling)
        var i = ln
        t && lv(e, t)
          ? Iy(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (Be = !1), (ln = e))
      }
    } else {
      if (cd(e)) throw Error(Y(418))
      ;(e.flags = (e.flags & -4097) | 2), (Be = !1), (ln = e)
    }
  }
}
function cv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ln = e
}
function Tl(e) {
  if (e !== ln) return !1
  if (!Be) return cv(e), (Be = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !od(e.type, e.memoizedProps))),
    t && (t = un))
  ) {
    if (cd(e)) throw (Ty(), Error(Y(418)))
    for (; t; ) Iy(e, t), (t = hi(t.nextSibling))
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
  } else un = ln ? hi(e.stateNode.nextSibling) : null
  return !0
}
function Ty() {
  for (var e = un; e; ) e = hi(e.nextSibling)
}
function co() {
  ;(un = ln = null), (Be = !1)
}
function ap(e) {
  Un === null ? (Un = [e]) : Un.push(e)
}
var yx = Rr.ReactCurrentBatchConfig
function Dn(e, t) {
  if (e && e.defaultProps) {
    ;(t = Qe({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var fc = ki(null),
  hc = null,
  Xa = null,
  op = null
function sp() {
  op = Xa = hc = null
}
function up(e) {
  var t = fc.current
  $e(fc), (e._currentValue = t)
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
function ao(e, t) {
  ;(hc = e),
    (op = Xa = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Yt = !0), (e.firstContext = null))
}
function An(e) {
  var t = e._currentValue
  if (op !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xa === null)) {
      if (hc === null) throw Error(Y(308))
      ;(Xa = e), (hc.dependencies = { lanes: 0, firstContext: e })
    } else Xa = Xa.next = e
  return t
}
var Ji = null
function lp(e) {
  Ji === null ? (Ji = [e]) : Ji.push(e)
}
function Ny(e, t, n, i) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), lp(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ir(e, i)
  )
}
function Ir(e, t) {
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
function Ry(e, t) {
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
function Lr(e, t) {
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
      Ir(e, n)
    )
  }
  return (
    (o = i.interleaved),
    o === null ? ((t.next = t), lp(i)) : ((t.next = o.next), (o.next = t)),
    (i.interleaved = t),
    Ir(e, n)
  )
}
function Wl(e, t, n) {
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
      u = null
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
        u === null ? (o = u = c) : (u = u.next = c), (n = n.next)
      } while (n !== null)
      u === null ? (o = u = t) : (u = u.next = t)
    } else o = u = t
    ;(n = {
      baseState: i.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: u,
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
function dc(e, t, n, i) {
  var o = e.updateQueue
  ri = !1
  var u = o.firstBaseUpdate,
    c = o.lastBaseUpdate,
    d = o.shared.pending
  if (d !== null) {
    o.shared.pending = null
    var g = d,
      w = g.next
    ;(g.next = null), c === null ? (u = w) : (c.next = w), (c = g)
    var P = e.alternate
    P !== null &&
      ((P = P.updateQueue),
      (d = P.lastBaseUpdate),
      d !== c &&
        (d === null ? (P.firstBaseUpdate = w) : (d.next = w),
        (P.lastBaseUpdate = g)))
  }
  if (u !== null) {
    var O = o.baseState
    ;(c = 0), (P = w = g = null), (d = u)
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
          var U = e,
            W = d
          switch (((k = t), (V = n), W.tag)) {
            case 1:
              if (((U = W.payload), typeof U == 'function')) {
                O = U.call(V, O, k)
                break e
              }
              O = U
              break e
            case 3:
              U.flags = (U.flags & -65537) | 128
            case 0:
              if (
                ((U = W.payload),
                (k = typeof U == 'function' ? U.call(V, O, k) : U),
                k == null)
              )
                break e
              O = Qe({}, O, k)
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
    } else u === null && (o.shared.lanes = 0)
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
var zy = new N0.Component().refs
function dd(e, t, n, i) {
  ;(t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : Qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Uc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sa(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var i = Ft(),
      o = gi(e),
      u = Lr(i, o)
    ;(u.payload = t),
      n != null && (u.callback = n),
      (t = di(e, u, o)),
      t !== null && (Bn(t, e, o, i), Wl(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var i = Ft(),
      o = gi(e),
      u = Lr(i, o)
    ;(u.tag = 1),
      (u.payload = t),
      n != null && (u.callback = n),
      (t = di(e, u, o)),
      t !== null && (Bn(t, e, o, i), Wl(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ft(),
      i = gi(e),
      o = Lr(n, i)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = di(e, o, i)),
      t !== null && (Bn(t, e, i, n), Wl(t, e, i))
  },
}
function dv(e, t, n, i, o, u, c) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(i, u, c)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ms(n, i) || !Ms(o, u)
      : !0
  )
}
function jy(e, t, n) {
  var i = !1,
    o = wi,
    u = t.contextType
  return (
    typeof u == 'object' && u !== null
      ? (u = An(u))
      : ((o = Zt(t) ? ta : Pt.current),
        (i = t.contextTypes),
        (u = (i = i != null) ? lo(e, o) : wi)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Uc),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  )
}
function pv(e, t, n, i) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Uc.enqueueReplaceState(t, t.state, null)
}
function pd(e, t, n, i) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = zy), cp(e)
  var u = t.contextType
  typeof u == 'object' && u !== null
    ? (o.context = An(u))
    : ((u = Zt(t) ? ta : Pt.current), (o.context = lo(e, u))),
    (o.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == 'function' && (dd(e, t, u, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Uc.enqueueReplaceState(o, o.state, null),
      dc(e, n, o, i),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function ds(e, t, n) {
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
        u = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === u
        ? t.ref
        : ((t = function (c) {
            var d = o.refs
            d === zy && (d = o.refs = {}), c === null ? delete d[u] : (d[u] = c)
          }),
          (t._stringRef = u),
          t)
    }
    if (typeof e != 'string') throw Error(Y(284))
    if (!n._owner) throw Error(Y(290, e))
  }
  return e
}
function Nl(e, t) {
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
  function t(T, x) {
    if (e) {
      var N = T.deletions
      N === null ? ((T.deletions = [x]), (T.flags |= 16)) : N.push(x)
    }
  }
  function n(T, x) {
    if (!e) return null
    for (; x !== null; ) t(T, x), (x = x.sibling)
    return null
  }
  function i(T, x) {
    for (T = new Map(); x !== null; )
      x.key !== null ? T.set(x.key, x) : T.set(x.index, x), (x = x.sibling)
    return T
  }
  function o(T, x) {
    return (T = mi(T, x)), (T.index = 0), (T.sibling = null), T
  }
  function u(T, x, N) {
    return (
      (T.index = N),
      e
        ? ((N = T.alternate),
          N !== null
            ? ((N = N.index), N < x ? ((T.flags |= 2), x) : N)
            : ((T.flags |= 2), x))
        : ((T.flags |= 1048576), x)
    )
  }
  function c(T) {
    return e && T.alternate === null && (T.flags |= 2), T
  }
  function d(T, x, N, B) {
    return x === null || x.tag !== 6
      ? ((x = Ah(N, T.mode, B)), (x.return = T), x)
      : ((x = o(x, N)), (x.return = T), x)
  }
  function g(T, x, N, B) {
    var G = N.type
    return G === Ha
      ? P(T, x, N.props.children, B, N.key)
      : x !== null &&
        (x.elementType === G ||
          (typeof G == 'object' &&
            G !== null &&
            G.$$typeof === ni &&
            gv(G) === x.type))
      ? ((B = o(x, N.props)), (B.ref = ds(T, x, N)), (B.return = T), B)
      : ((B = Yl(N.type, N.key, N.props, null, T.mode, B)),
        (B.ref = ds(T, x, N)),
        (B.return = T),
        B)
  }
  function w(T, x, N, B) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== N.containerInfo ||
      x.stateNode.implementation !== N.implementation
      ? ((x = Lh(N, T.mode, B)), (x.return = T), x)
      : ((x = o(x, N.children || [])), (x.return = T), x)
  }
  function P(T, x, N, B, G) {
    return x === null || x.tag !== 7
      ? ((x = ea(N, T.mode, B, G)), (x.return = T), x)
      : ((x = o(x, N)), (x.return = T), x)
  }
  function O(T, x, N) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (x = Ah('' + x, T.mode, N)), (x.return = T), x
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case kl:
          return (
            (N = Yl(x.type, x.key, x.props, null, T.mode, N)),
            (N.ref = ds(T, null, x)),
            (N.return = T),
            N
          )
        case Va:
          return (x = Lh(x, T.mode, N)), (x.return = T), x
        case ni:
          var B = x._init
          return O(T, B(x._payload), N)
      }
      if (ys(x) || us(x)) return (x = ea(x, T.mode, N, null)), (x.return = T), x
      Nl(T, x)
    }
    return null
  }
  function k(T, x, N, B) {
    var G = x !== null ? x.key : null
    if ((typeof N == 'string' && N !== '') || typeof N == 'number')
      return G !== null ? null : d(T, x, '' + N, B)
    if (typeof N == 'object' && N !== null) {
      switch (N.$$typeof) {
        case kl:
          return N.key === G ? g(T, x, N, B) : null
        case Va:
          return N.key === G ? w(T, x, N, B) : null
        case ni:
          return (G = N._init), k(T, x, G(N._payload), B)
      }
      if (ys(N) || us(N)) return G !== null ? null : P(T, x, N, B, null)
      Nl(T, N)
    }
    return null
  }
  function V(T, x, N, B, G) {
    if ((typeof B == 'string' && B !== '') || typeof B == 'number')
      return (T = T.get(N) || null), d(x, T, '' + B, G)
    if (typeof B == 'object' && B !== null) {
      switch (B.$$typeof) {
        case kl:
          return (T = T.get(B.key === null ? N : B.key) || null), g(x, T, B, G)
        case Va:
          return (T = T.get(B.key === null ? N : B.key) || null), w(x, T, B, G)
        case ni:
          var X = B._init
          return V(T, x, N, X(B._payload), G)
      }
      if (ys(B) || us(B)) return (T = T.get(N) || null), P(x, T, B, G, null)
      Nl(x, B)
    }
    return null
  }
  function U(T, x, N, B) {
    for (
      var G = null, X = null, S = x, _ = (x = 0), C = null;
      S !== null && _ < N.length;
      _++
    ) {
      S.index > _ ? ((C = S), (S = null)) : (C = S.sibling)
      var L = k(T, S, N[_], B)
      if (L === null) {
        S === null && (S = C)
        break
      }
      e && S && L.alternate === null && t(T, S),
        (x = u(L, x, _)),
        X === null ? (G = L) : (X.sibling = L),
        (X = L),
        (S = C)
    }
    if (_ === N.length) return n(T, S), Be && qi(T, _), G
    if (S === null) {
      for (; _ < N.length; _++)
        (S = O(T, N[_], B)),
          S !== null &&
            ((x = u(S, x, _)), X === null ? (G = S) : (X.sibling = S), (X = S))
      return Be && qi(T, _), G
    }
    for (S = i(T, S); _ < N.length; _++)
      (C = V(S, T, _, N[_], B)),
        C !== null &&
          (e && C.alternate !== null && S.delete(C.key === null ? _ : C.key),
          (x = u(C, x, _)),
          X === null ? (G = C) : (X.sibling = C),
          (X = C))
    return (
      e &&
        S.forEach(function (R) {
          return t(T, R)
        }),
      Be && qi(T, _),
      G
    )
  }
  function W(T, x, N, B) {
    var G = us(N)
    if (typeof G != 'function') throw Error(Y(150))
    if (((N = G.call(N)), N == null)) throw Error(Y(151))
    for (
      var X = (G = null), S = x, _ = (x = 0), C = null, L = N.next();
      S !== null && !L.done;
      _++, L = N.next()
    ) {
      S.index > _ ? ((C = S), (S = null)) : (C = S.sibling)
      var R = k(T, S, L.value, B)
      if (R === null) {
        S === null && (S = C)
        break
      }
      e && S && R.alternate === null && t(T, S),
        (x = u(R, x, _)),
        X === null ? (G = R) : (X.sibling = R),
        (X = R),
        (S = C)
    }
    if (L.done) return n(T, S), Be && qi(T, _), G
    if (S === null) {
      for (; !L.done; _++, L = N.next())
        (L = O(T, L.value, B)),
          L !== null &&
            ((x = u(L, x, _)), X === null ? (G = L) : (X.sibling = L), (X = L))
      return Be && qi(T, _), G
    }
    for (S = i(T, S); !L.done; _++, L = N.next())
      (L = V(S, T, _, L.value, B)),
        L !== null &&
          (e && L.alternate !== null && S.delete(L.key === null ? _ : L.key),
          (x = u(L, x, _)),
          X === null ? (G = L) : (X.sibling = L),
          (X = L))
    return (
      e &&
        S.forEach(function (F) {
          return t(T, F)
        }),
      Be && qi(T, _),
      G
    )
  }
  function J(T, x, N, B) {
    if (
      (typeof N == 'object' &&
        N !== null &&
        N.type === Ha &&
        N.key === null &&
        (N = N.props.children),
      typeof N == 'object' && N !== null)
    ) {
      switch (N.$$typeof) {
        case kl:
          e: {
            for (var G = N.key, X = x; X !== null; ) {
              if (X.key === G) {
                if (((G = N.type), G === Ha)) {
                  if (X.tag === 7) {
                    n(T, X.sibling),
                      (x = o(X, N.props.children)),
                      (x.return = T),
                      (T = x)
                    break e
                  }
                } else if (
                  X.elementType === G ||
                  (typeof G == 'object' &&
                    G !== null &&
                    G.$$typeof === ni &&
                    gv(G) === X.type)
                ) {
                  n(T, X.sibling),
                    (x = o(X, N.props)),
                    (x.ref = ds(T, X, N)),
                    (x.return = T),
                    (T = x)
                  break e
                }
                n(T, X)
                break
              } else t(T, X)
              X = X.sibling
            }
            N.type === Ha
              ? ((x = ea(N.props.children, T.mode, B, N.key)),
                (x.return = T),
                (T = x))
              : ((B = Yl(N.type, N.key, N.props, null, T.mode, B)),
                (B.ref = ds(T, x, N)),
                (B.return = T),
                (T = B))
          }
          return c(T)
        case Va:
          e: {
            for (X = N.key; x !== null; ) {
              if (x.key === X)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === N.containerInfo &&
                  x.stateNode.implementation === N.implementation
                ) {
                  n(T, x.sibling),
                    (x = o(x, N.children || [])),
                    (x.return = T),
                    (T = x)
                  break e
                } else {
                  n(T, x)
                  break
                }
              else t(T, x)
              x = x.sibling
            }
            ;(x = Lh(N, T.mode, B)), (x.return = T), (T = x)
          }
          return c(T)
        case ni:
          return (X = N._init), J(T, x, X(N._payload), B)
      }
      if (ys(N)) return U(T, x, N, B)
      if (us(N)) return W(T, x, N, B)
      Nl(T, N)
    }
    return (typeof N == 'string' && N !== '') || typeof N == 'number'
      ? ((N = '' + N),
        x !== null && x.tag === 6
          ? (n(T, x.sibling), (x = o(x, N)), (x.return = T), (T = x))
          : (n(T, x), (x = Ah(N, T.mode, B)), (x.return = T), (T = x)),
        c(T))
      : n(T, x)
  }
  return J
}
var fo = Dy(!0),
  Fy = Dy(!1),
  ru = {},
  tr = ki(ru),
  Hs = ki(ru),
  Ws = ki(ru)
function Yi(e) {
  if (e === ru) throw Error(Y(174))
  return e
}
function fp(e, t) {
  switch ((Fe(Ws, t), Fe(Hs, e), Fe(tr, ru), (e = t.nodeType), e)) {
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
  $e(tr), Fe(tr, t)
}
function ho() {
  $e(tr), $e(Hs), $e(Ws)
}
function Uy(e) {
  Yi(Ws.current)
  var t = Yi(tr.current),
    n = qh(t, e.type)
  t !== n && (Fe(Hs, e), Fe(tr, n))
}
function hp(e) {
  Hs.current === e && ($e(tr), $e(Hs))
}
var qe = ki(0)
function pc(e) {
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
var ql = Rr.ReactCurrentDispatcher,
  kh = Rr.ReactCurrentBatchConfig,
  ra = 0,
  Ke = null,
  ut = null,
  ft = null,
  gc = !1,
  Cs = !1,
  qs = 0,
  bx = 0
function xt() {
  throw Error(Y(321))
}
function pp(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vn(e[n], t[n])) return !1
  return !0
}
function gp(e, t, n, i, o, u) {
  if (
    ((ra = u),
    (Ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ql.current = e === null || e.memoizedState === null ? Sx : Ex),
    (e = n(i, o)),
    Cs)
  ) {
    u = 0
    do {
      if (((Cs = !1), (qs = 0), 25 <= u)) throw Error(Y(301))
      ;(u += 1),
        (ft = ut = null),
        (t.updateQueue = null),
        (ql.current = xx),
        (e = n(i, o))
    } while (Cs)
  }
  if (
    ((ql.current = mc),
    (t = ut !== null && ut.next !== null),
    (ra = 0),
    (ft = ut = Ke = null),
    (gc = !1),
    t)
  )
    throw Error(Y(300))
  return e
}
function mp() {
  var e = qs !== 0
  return (qs = 0), e
}
function Yn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ft === null ? (Ke.memoizedState = ft = e) : (ft = ft.next = e), ft
}
function Ln() {
  if (ut === null) {
    var e = Ke.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ut.next
  var t = ft === null ? Ke.memoizedState : ft.next
  if (t !== null) (ft = t), (ut = e)
  else {
    if (e === null) throw Error(Y(310))
    ;(ut = e),
      (e = {
        memoizedState: ut.memoizedState,
        baseState: ut.baseState,
        baseQueue: ut.baseQueue,
        queue: ut.queue,
        next: null,
      }),
      ft === null ? (Ke.memoizedState = ft = e) : (ft = ft.next = e)
  }
  return ft
}
function Ks(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Sh(e) {
  var t = Ln(),
    n = t.queue
  if (n === null) throw Error(Y(311))
  n.lastRenderedReducer = e
  var i = ut,
    o = i.baseQueue,
    u = n.pending
  if (u !== null) {
    if (o !== null) {
      var c = o.next
      ;(o.next = u.next), (u.next = c)
    }
    ;(i.baseQueue = o = u), (n.pending = null)
  }
  if (o !== null) {
    ;(u = o.next), (i = i.baseState)
    var d = (c = null),
      g = null,
      w = u
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
          (Ke.lanes |= P),
          (ia |= P)
      }
      w = w.next
    } while (w !== null && w !== u)
    g === null ? (c = i) : (g.next = d),
      Vn(i, t.memoizedState) || (Yt = !0),
      (t.memoizedState = i),
      (t.baseState = c),
      (t.baseQueue = g),
      (n.lastRenderedState = i)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (u = o.lane), (Ke.lanes |= u), (ia |= u), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Eh(e) {
  var t = Ln(),
    n = t.queue
  if (n === null) throw Error(Y(311))
  n.lastRenderedReducer = e
  var i = n.dispatch,
    o = n.pending,
    u = t.memoizedState
  if (o !== null) {
    n.pending = null
    var c = (o = o.next)
    do (u = e(u, c.action)), (c = c.next)
    while (c !== o)
    Vn(u, t.memoizedState) || (Yt = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u)
  }
  return [u, i]
}
function My() {}
function $y(e, t) {
  var n = Ke,
    i = Ln(),
    o = t(),
    u = !Vn(i.memoizedState, o)
  if (
    (u && ((i.memoizedState = o), (Yt = !0)),
    (i = i.queue),
    vp(Hy.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || u || (ft !== null && ft.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qs(9, Vy.bind(null, n, i, o, t), void 0, null),
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
    (t = Ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ke.updateQueue = t),
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
    return !Vn(e, n)
  } catch {
    return !0
  }
}
function qy(e) {
  var t = Ir(e, 1)
  t !== null && Bn(t, e, 1, -1)
}
function mv(e) {
  var t = Yn()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ks,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kx.bind(null, Ke, e)),
    [t.memoizedState, e]
  )
}
function Qs(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = Ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  )
}
function Ky() {
  return Ln().memoizedState
}
function Kl(e, t, n, i) {
  var o = Yn()
  ;(Ke.flags |= e),
    (o.memoizedState = Qs(1 | t, n, void 0, i === void 0 ? null : i))
}
function Mc(e, t, n, i) {
  var o = Ln()
  i = i === void 0 ? null : i
  var u = void 0
  if (ut !== null) {
    var c = ut.memoizedState
    if (((u = c.destroy), i !== null && pp(i, c.deps))) {
      o.memoizedState = Qs(t, n, u, i)
      return
    }
  }
  ;(Ke.flags |= e), (o.memoizedState = Qs(1 | t, n, u, i))
}
function vv(e, t) {
  return Kl(8390656, 8, e, t)
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
  var n = Ln()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && pp(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e)
}
function Zy(e, t) {
  var n = Ln()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && pp(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function e1(e, t, n) {
  return ra & 21
    ? (Vn(n, t) || ((n = ry()), (Ke.lanes |= n), (ia |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Yt = !0)), (e.memoizedState = n))
}
function wx(e, t) {
  var n = Te
  ;(Te = n !== 0 && 4 > n ? n : 4), e(!0)
  var i = kh.transition
  kh.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Te = n), (kh.transition = i)
  }
}
function t1() {
  return Ln().memoizedState
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
  else if (((n = Ny(e, t, n, i)), n !== null)) {
    var o = Ft()
    Bn(n, e, i, o), i1(n, t, i)
  }
}
function kx(e, t, n) {
  var i = gi(e),
    o = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (n1(e)) r1(t, o)
  else {
    var u = e.alternate
    if (
      e.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = t.lastRenderedReducer), u !== null)
    )
      try {
        var c = t.lastRenderedState,
          d = u(c, n)
        if (((o.hasEagerState = !0), (o.eagerState = d), Vn(d, c))) {
          var g = t.interleaved
          g === null
            ? ((o.next = o), lp(t))
            : ((o.next = g.next), (g.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Ny(e, t, o, i)),
      n !== null && ((o = Ft()), Bn(n, e, i, o), i1(n, t, i))
  }
}
function n1(e) {
  var t = e.alternate
  return e === Ke || (t !== null && t === Ke)
}
function r1(e, t) {
  Cs = gc = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function i1(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Gd(e, n)
  }
}
var mc = {
    readContext: An,
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
    readContext: An,
    useCallback: function (e, t) {
      return (Yn().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: An,
    useEffect: vv,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Kl(4194308, 4, Jy.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Kl(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Kl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Yn()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var i = Yn()
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
        (e = e.dispatch = _x.bind(null, Ke, e)),
        [i.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Yn()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: mv,
    useDebugValue: yp,
    useDeferredValue: function (e) {
      return (Yn().memoizedState = e)
    },
    useTransition: function () {
      var e = mv(!1),
        t = e[0]
      return (e = wx.bind(null, e[1])), (Yn().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = Ke,
        o = Yn()
      if (Be) {
        if (n === void 0) throw Error(Y(407))
        n = n()
      } else {
        if (((n = t()), ht === null)) throw Error(Y(349))
        ra & 30 || By(i, t, n)
      }
      o.memoizedState = n
      var u = { value: n, getSnapshot: t }
      return (
        (o.queue = u),
        vv(Hy.bind(null, i, u, e), [e]),
        (i.flags |= 2048),
        Qs(9, Vy.bind(null, i, u, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Yn(),
        t = ht.identifierPrefix
      if (Be) {
        var n = Ar,
          i = Cr
        ;(n = (i & ~(1 << (32 - $n(i) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = qs++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = bx++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Ex = {
    readContext: An,
    useCallback: Xy,
    useContext: An,
    useEffect: vp,
    useImperativeHandle: Yy,
    useInsertionEffect: Qy,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Sh,
    useRef: Ky,
    useState: function () {
      return Sh(Ks)
    },
    useDebugValue: yp,
    useDeferredValue: function (e) {
      var t = Ln()
      return e1(t, ut.memoizedState, e)
    },
    useTransition: function () {
      var e = Sh(Ks)[0],
        t = Ln().memoizedState
      return [e, t]
    },
    useMutableSource: My,
    useSyncExternalStore: $y,
    useId: t1,
    unstable_isNewReconciler: !1,
  },
  xx = {
    readContext: An,
    useCallback: Xy,
    useContext: An,
    useEffect: vp,
    useImperativeHandle: Yy,
    useInsertionEffect: Qy,
    useLayoutEffect: Gy,
    useMemo: Zy,
    useReducer: Eh,
    useRef: Ky,
    useState: function () {
      return Eh(Ks)
    },
    useDebugValue: yp,
    useDeferredValue: function (e) {
      var t = Ln()
      return ut === null ? (t.memoizedState = e) : e1(t, ut.memoizedState, e)
    },
    useTransition: function () {
      var e = Eh(Ks)[0],
        t = Ln().memoizedState
      return [e, t]
    },
    useMutableSource: My,
    useSyncExternalStore: $y,
    useId: t1,
    unstable_isNewReconciler: !1,
  }
function po(e, t) {
  try {
    var n = '',
      i = t
    do (n += ZE(i)), (i = i.return)
    while (i)
    var o = n
  } catch (u) {
    o =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack
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
  ;(n = Lr(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var i = t.value
  return (
    (n.callback = function () {
      yc || ((yc = !0), (Ed = i)), gd(e, t)
    }),
    n
  )
}
function o1(e, t, n) {
  ;(n = Lr(-1, n)), (n.tag = 3)
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
  var u = e.stateNode
  return (
    u !== null &&
      typeof u.componentDidCatch == 'function' &&
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
  o.has(n) || (o.add(n), (e = Mx.bind(null, e, t, n)), t.then(e, e))
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
              : ((t = Lr(-1, 1)), (t.tag = 2), di(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Ax = Rr.ReactCurrentOwner,
  Yt = !1
function jt(e, t, n, i) {
  t.child = e === null ? Fy(t, null, n, i) : fo(t, e.child, n, i)
}
function _v(e, t, n, i, o) {
  n = n.render
  var u = t.ref
  return (
    ao(t, o),
    (i = gp(e, t, n, i, u, o)),
    (n = mp()),
    e !== null && !Yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Tr(e, t, o))
      : (Be && n && rp(t), (t.flags |= 1), jt(e, t, i, o), t.child)
  )
}
function kv(e, t, n, i, o) {
  if (e === null) {
    var u = n.type
    return typeof u == 'function' &&
      !Cp(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), s1(e, t, u, i, o))
      : ((e = Yl(n.type, null, i, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((u = e.child), !(e.lanes & o))) {
    var c = u.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Ms), n(c, i) && e.ref === t.ref)
    )
      return Tr(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = mi(u, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function s1(e, t, n, i, o) {
  if (e !== null) {
    var u = e.memoizedProps
    if (Ms(u, i) && e.ref === t.ref)
      if (((Yt = !1), (t.pendingProps = i = u), (e.lanes & o) !== 0))
        e.flags & 131072 && (Yt = !0)
      else return (t.lanes = e.lanes), Tr(e, t, o)
  }
  return md(e, t, n, i, o)
}
function u1(e, t, n) {
  var i = t.pendingProps,
    o = i.children,
    u = e !== null ? e.memoizedState : null
  if (i.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Fe(eo, sn),
        (sn |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = u !== null ? u.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Fe(eo, sn),
          (sn |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = u !== null ? u.baseLanes : n),
        Fe(eo, sn),
        (sn |= i)
    }
  else
    u !== null ? ((i = u.baseLanes | n), (t.memoizedState = null)) : (i = n),
      Fe(eo, sn),
      (sn |= i)
  return jt(e, t, o, n), t.child
}
function l1(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function md(e, t, n, i, o) {
  var u = Zt(n) ? ta : Pt.current
  return (
    (u = lo(t, u)),
    ao(t, o),
    (n = gp(e, t, n, i, u, o)),
    (i = mp()),
    e !== null && !Yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Tr(e, t, o))
      : (Be && i && rp(t), (t.flags |= 1), jt(e, t, n, o), t.child)
  )
}
function Sv(e, t, n, i, o) {
  if (Zt(n)) {
    var u = !0
    uc(t)
  } else u = !1
  if ((ao(t, o), t.stateNode === null))
    Ql(e, t), jy(t, n, i), pd(t, n, i, o), (i = !0)
  else if (e === null) {
    var c = t.stateNode,
      d = t.memoizedProps
    c.props = d
    var g = c.context,
      w = n.contextType
    typeof w == 'object' && w !== null
      ? (w = An(w))
      : ((w = Zt(n) ? ta : Pt.current), (w = lo(t, w)))
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
      dc(t, i, c, o),
      (g = t.memoizedState),
      d !== i || k !== g || Xt.current || ri
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
      Ry(e, t),
      (d = t.memoizedProps),
      (w = t.type === t.elementType ? d : Dn(t.type, d)),
      (c.props = w),
      (O = t.pendingProps),
      (k = c.context),
      (g = n.contextType),
      typeof g == 'object' && g !== null
        ? (g = An(g))
        : ((g = Zt(n) ? ta : Pt.current), (g = lo(t, g)))
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
      dc(t, i, c, o)
    var U = t.memoizedState
    d !== O || k !== U || Xt.current || ri
      ? (typeof V == 'function' && (dd(t, n, V, i), (U = t.memoizedState)),
        (w = ri || dv(t, n, w, i, k, U, g) || !1)
          ? (P ||
              (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                typeof c.componentWillUpdate != 'function') ||
              (typeof c.componentWillUpdate == 'function' &&
                c.componentWillUpdate(i, U, g),
              typeof c.UNSAFE_componentWillUpdate == 'function' &&
                c.UNSAFE_componentWillUpdate(i, U, g)),
            typeof c.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof c.componentDidUpdate != 'function' ||
              (d === e.memoizedProps && k === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != 'function' ||
              (d === e.memoizedProps && k === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = U)),
        (c.props = i),
        (c.state = U),
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
  return vd(e, t, n, i, u, o)
}
function vd(e, t, n, i, o, u) {
  l1(e, t)
  var c = (t.flags & 128) !== 0
  if (!i && !c) return o && uv(t, n, !1), Tr(e, t, u)
  ;(i = t.stateNode), (Ax.current = t)
  var d =
    c && typeof n.getDerivedStateFromError != 'function' ? null : i.render()
  return (
    (t.flags |= 1),
    e !== null && c
      ? ((t.child = fo(t, e.child, null, u)), (t.child = fo(t, null, d, u)))
      : jt(e, t, d, u),
    (t.memoizedState = i.state),
    o && uv(t, n, !0),
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
  return co(), ap(o), (t.flags |= 256), jt(e, t, n, i), t.child
}
var yd = { dehydrated: null, treeContext: null, retryLane: 0 }
function bd(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function f1(e, t, n) {
  var i = t.pendingProps,
    o = qe.current,
    u = !1,
    c = (t.flags & 128) !== 0,
    d
  if (
    ((d = c) ||
      (d = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    d
      ? ((u = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Fe(qe, o & 1),
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
          u
            ? ((i = t.mode),
              (u = t.child),
              (c = { mode: 'hidden', children: c }),
              !(i & 1) && u !== null
                ? ((u.childLanes = 0), (u.pendingProps = c))
                : (u = Vc(c, i, 0, null)),
              (e = ea(e, i, n, null)),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              (t.child.memoizedState = bd(n)),
              (t.memoizedState = yd),
              e)
            : bp(t, c))
    )
  if (((o = e.memoizedState), o !== null && ((d = o.dehydrated), d !== null)))
    return Lx(e, t, c, i, d, o, n)
  if (u) {
    ;(u = i.fallback), (c = t.mode), (o = e.child), (d = o.sibling)
    var g = { mode: 'hidden', children: i.children }
    return (
      !(c & 1) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = g),
          (t.deletions = null))
        : ((i = mi(o, g)), (i.subtreeFlags = o.subtreeFlags & 14680064)),
      d !== null ? (u = mi(d, u)) : ((u = ea(u, c, n, null)), (u.flags |= 2)),
      (u.return = t),
      (i.return = t),
      (i.sibling = u),
      (t.child = i),
      (i = u),
      (u = t.child),
      (c = e.child.memoizedState),
      (c =
        c === null
          ? bd(n)
          : {
              baseLanes: c.baseLanes | n,
              cachePool: null,
              transitions: c.transitions,
            }),
      (u.memoizedState = c),
      (u.childLanes = e.childLanes & ~n),
      (t.memoizedState = yd),
      i
    )
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (i = mi(u, { mode: 'visible', children: i.children })),
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
    (t = Vc({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Rl(e, t, n, i) {
  return (
    i !== null && ap(i),
    fo(t, e.child, null, n),
    (e = bp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Lx(e, t, n, i, o, u, c) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = xh(Error(Y(422)))), Rl(e, t, c, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((u = i.fallback),
        (o = t.mode),
        (i = Vc({ mode: 'visible', children: i.children }, o, 0, null)),
        (u = ea(u, o, c, null)),
        (u.flags |= 2),
        (i.return = t),
        (u.return = t),
        (i.sibling = u),
        (t.child = i),
        t.mode & 1 && fo(t, e.child, null, c),
        (t.child.memoizedState = bd(c)),
        (t.memoizedState = yd),
        u)
  if (!(t.mode & 1)) return Rl(e, t, c, null)
  if (o.data === '$!') {
    if (((i = o.nextSibling && o.nextSibling.dataset), i)) var d = i.dgst
    return (i = d), (u = Error(Y(419))), (i = xh(u, i, void 0)), Rl(e, t, c, i)
  }
  if (((d = (c & e.childLanes) !== 0), Yt || d)) {
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
          o !== u.retryLane &&
          ((u.retryLane = o), Ir(e, o), Bn(i, e, o, -1))
    }
    return xp(), (i = xh(Error(Y(421)))), Rl(e, t, c, i)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $x.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = u.treeContext),
      (un = hi(o.nextSibling)),
      (ln = t),
      (Be = !0),
      (Un = null),
      e !== null &&
        ((Sn[En++] = Cr),
        (Sn[En++] = Ar),
        (Sn[En++] = na),
        (Cr = e.id),
        (Ar = e.overflow),
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
  var u = e.memoizedState
  u === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: o,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = i),
      (u.tail = n),
      (u.tailMode = o))
}
function h1(e, t, n) {
  var i = t.pendingProps,
    o = i.revealOrder,
    u = i.tail
  if ((jt(e, t, i.children, n), (i = qe.current), i & 2))
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
  if ((Fe(qe, i), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && pc(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ch(t, !1, o, n, u)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && pc(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Ch(t, !0, n, null, u)
        break
      case 'together':
        Ch(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ql(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Tr(e, t, n) {
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
      c1(t), co()
      break
    case 5:
      Uy(t)
      break
    case 1:
      Zt(t.type) && uc(t)
      break
    case 4:
      fp(t, t.stateNode.containerInfo)
      break
    case 10:
      var i = t.type._context,
        o = t.memoizedProps.value
      Fe(fc, i._currentValue), (i._currentValue = o)
      break
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (Fe(qe, qe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? f1(e, t, n)
          : (Fe(qe, qe.current & 1),
            (e = Tr(e, t, n)),
            e !== null ? e.sibling : null)
      Fe(qe, qe.current & 1)
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
        Fe(qe, qe.current),
        i)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), u1(e, t, n)
  }
  return Tr(e, t, n)
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
    ;(e = t.stateNode), Yi(tr.current)
    var u = null
    switch (n) {
      case 'input':
        ;(o = Bh(e, o)), (i = Bh(e, i)), (u = [])
        break
      case 'select':
        ;(o = Qe({}, o, { value: void 0 })),
          (i = Qe({}, i, { value: void 0 })),
          (u = [])
        break
      case 'textarea':
        ;(o = Wh(e, o)), (i = Wh(e, i)), (u = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof i.onClick == 'function' &&
          (e.onclick = oc)
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
            (Ns.hasOwnProperty(w) ? u || (u = []) : (u = u || []).push(w, null))
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
          } else n || (u || (u = []), u.push(w, n)), (n = g)
        else
          w === 'dangerouslySetInnerHTML'
            ? ((g = g ? g.__html : void 0),
              (d = d ? d.__html : void 0),
              g != null && d !== g && (u = u || []).push(w, g))
            : w === 'children'
            ? (typeof g != 'string' && typeof g != 'number') ||
              (u = u || []).push(w, '' + g)
            : w !== 'suppressContentEditableWarning' &&
              w !== 'suppressHydrationWarning' &&
              (Ns.hasOwnProperty(w)
                ? (g != null && w === 'onScroll' && Me('scroll', e),
                  u || d === g || (u = []))
                : (u = u || []).push(w, g))
    }
    n && (u = u || []).push('style', n)
    var w = u
    ;(t.updateQueue = w) && (t.flags |= 4)
  }
}
g1 = function (e, t, n, i) {
  n !== i && (t.flags |= 4)
}
function ps(e, t) {
  if (!Be)
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
      return Zt(t.type) && sc(), Ct(t), null
    case 3:
      return (
        (i = t.stateNode),
        ho(),
        $e(Xt),
        $e(Pt),
        dp(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Un !== null && (Ad(Un), (Un = null)))),
        wd(e, t),
        Ct(t),
        null
      )
    case 5:
      hp(t)
      var o = Yi(Ws.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        p1(e, t, n, i, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(Y(166))
          return Ct(t), null
        }
        if (((e = Yi(tr.current)), Tl(t))) {
          ;(i = t.stateNode), (n = t.type)
          var u = t.memoizedProps
          switch (((i[Xn] = t), (i[Vs] = u), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < ws.length; o++) Me(ws[o], i)
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
              Rm(i, u), Me('invalid', i)
              break
            case 'select':
              ;(i._wrapperState = { wasMultiple: !!u.multiple }),
                Me('invalid', i)
              break
            case 'textarea':
              jm(i, u), Me('invalid', i)
          }
          Kh(n, u), (o = null)
          for (var c in u)
            if (u.hasOwnProperty(c)) {
              var d = u[c]
              c === 'children'
                ? typeof d == 'string'
                  ? i.textContent !== d &&
                    (u.suppressHydrationWarning !== !0 &&
                      Il(i.textContent, d, e),
                    (o = ['children', d]))
                  : typeof d == 'number' &&
                    i.textContent !== '' + d &&
                    (u.suppressHydrationWarning !== !0 &&
                      Il(i.textContent, d, e),
                    (o = ['children', '' + d]))
                : Ns.hasOwnProperty(c) &&
                  d != null &&
                  c === 'onScroll' &&
                  Me('scroll', i)
            }
          switch (n) {
            case 'input':
              Sl(i), zm(i, u, !0)
              break
            case 'textarea':
              Sl(i), Dm(i)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof u.onClick == 'function' && (i.onclick = oc)
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
            (e[Xn] = t),
            (e[Vs] = i),
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
                for (o = 0; o < ws.length; o++) Me(ws[o], e)
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
                Rm(e, i), (o = Bh(e, i)), Me('invalid', e)
                break
              case 'option':
                o = i
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                  (o = Qe({}, i, { value: void 0 })),
                  Me('invalid', e)
                break
              case 'textarea':
                jm(e, i), (o = Wh(e, i)), Me('invalid', e)
                break
              default:
                o = i
            }
            Kh(n, o), (d = o)
            for (u in d)
              if (d.hasOwnProperty(u)) {
                var g = d[u]
                u === 'style'
                  ? W0(e, g)
                  : u === 'dangerouslySetInnerHTML'
                  ? ((g = g ? g.__html : void 0), g != null && V0(e, g))
                  : u === 'children'
                  ? typeof g == 'string'
                    ? (n !== 'textarea' || g !== '') && Rs(e, g)
                    : typeof g == 'number' && Rs(e, '' + g)
                  : u !== 'suppressContentEditableWarning' &&
                    u !== 'suppressHydrationWarning' &&
                    u !== 'autoFocus' &&
                    (Ns.hasOwnProperty(u)
                      ? g != null && u === 'onScroll' && Me('scroll', e)
                      : g != null && Vd(e, u, g, c))
              }
            switch (n) {
              case 'input':
                Sl(e), zm(e, i, !1)
                break
              case 'textarea':
                Sl(e), Dm(e)
                break
              case 'option':
                i.value != null && e.setAttribute('value', '' + bi(i.value))
                break
              case 'select':
                ;(e.multiple = !!i.multiple),
                  (u = i.value),
                  u != null
                    ? to(e, !!i.multiple, u, !1)
                    : i.defaultValue != null &&
                      to(e, !!i.multiple, i.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = oc)
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
        if (((n = Yi(Ws.current)), Yi(tr.current), Tl(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[Xn] = t),
            (u = i.nodeValue !== n) && ((e = ln), e !== null))
          )
            switch (e.tag) {
              case 3:
                Il(i.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Il(i.nodeValue, n, (e.mode & 1) !== 0)
            }
          u && (t.flags |= 4)
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[Xn] = t),
            (t.stateNode = i)
      }
      return Ct(t), null
    case 13:
      if (
        ($e(qe),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Be && un !== null && t.mode & 1 && !(t.flags & 128))
          Ty(), co(), (t.flags |= 98560), (u = !1)
        else if (((u = Tl(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(Y(318))
            if (
              ((u = t.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(Y(317))
            u[Xn] = t
          } else
            co(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ct(t), (u = !1)
        } else Un !== null && (Ad(Un), (Un = null)), (u = !0)
        if (!u) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || qe.current & 1 ? lt === 0 && (lt = 3) : xp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ct(t),
          null)
    case 4:
      return (
        ho(), wd(e, t), e === null && $s(t.stateNode.containerInfo), Ct(t), null
      )
    case 10:
      return up(t.type._context), Ct(t), null
    case 17:
      return Zt(t.type) && sc(), Ct(t), null
    case 19:
      if (($e(qe), (u = t.memoizedState), u === null)) return Ct(t), null
      if (((i = (t.flags & 128) !== 0), (c = u.rendering), c === null))
        if (i) ps(u, !1)
        else {
          if (lt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((c = pc(e)), c !== null)) {
                for (
                  t.flags |= 128,
                    ps(u, !1),
                    i = c.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (u = n),
                    (e = i),
                    (u.flags &= 14680066),
                    (c = u.alternate),
                    c === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = c.childLanes),
                        (u.lanes = c.lanes),
                        (u.child = c.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = c.memoizedProps),
                        (u.memoizedState = c.memoizedState),
                        (u.updateQueue = c.updateQueue),
                        (u.type = c.type),
                        (e = c.dependencies),
                        (u.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return Fe(qe, (qe.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          u.tail !== null &&
            nt() > go &&
            ((t.flags |= 128), (i = !0), ps(u, !1), (t.lanes = 4194304))
        }
      else {
        if (!i)
          if (((e = pc(c)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ps(u, !0),
              u.tail === null && u.tailMode === 'hidden' && !c.alternate && !Be)
            )
              return Ct(t), null
          } else
            2 * nt() - u.renderingStartTime > go &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), ps(u, !1), (t.lanes = 4194304))
        u.isBackwards
          ? ((c.sibling = t.child), (t.child = c))
          : ((n = u.last),
            n !== null ? (n.sibling = c) : (t.child = c),
            (u.last = c))
      }
      return u.tail !== null
        ? ((t = u.tail),
          (u.rendering = t),
          (u.tail = t.sibling),
          (u.renderingStartTime = nt()),
          (t.sibling = null),
          (n = qe.current),
          Fe(qe, i ? (n & 1) | 2 : n & 1),
          t)
        : (Ct(t), null)
    case 22:
    case 23:
      return (
        Ep(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? sn & 1073741824 && (Ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function Ix(e, t) {
  switch ((ip(t), t.tag)) {
    case 1:
      return (
        Zt(t.type) && sc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ho(),
        $e(Xt),
        $e(Pt),
        dp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return hp(t), null
    case 13:
      if (
        ($e(qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Y(340))
        co()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return $e(qe), null
    case 4:
      return ho(), null
    case 10:
      return up(t.type._context), null
    case 22:
    case 23:
      return Ep(), null
    case 24:
      return null
    default:
      return null
  }
}
var zl = !1,
  At = !1,
  Tx = typeof WeakSet == 'function' ? WeakSet : Set,
  re = null
function Za(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (i) {
        Xe(e, t, i)
      }
    else n.current = null
}
function m1(e, t, n) {
  try {
    n()
  } catch (i) {
    Xe(e, t, i)
  }
}
var Cv = !1
function Nx(e, t) {
  if (((id = rc), (e = by()), np(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var i = n.getSelection && n.getSelection()
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode
          var o = i.anchorOffset,
            u = i.focusNode
          i = i.focusOffset
          try {
            n.nodeType, u.nodeType
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
                O !== u || (i !== 0 && O.nodeType !== 3) || (g = c + i),
                O.nodeType === 3 && (c += O.nodeValue.length),
                (V = O.firstChild) !== null;

            )
              (k = O), (O = V)
            for (;;) {
              if (O === e) break t
              if (
                (k === n && ++w === o && (d = c),
                k === u && ++P === i && (g = c),
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
    ad = { focusedElem: e, selectionRange: n }, rc = !1, re = t;
    re !== null;

  )
    if (((t = re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (re = e)
    else
      for (; re !== null; ) {
        t = re
        try {
          var U = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (U !== null) {
                  var W = U.memoizedProps,
                    J = U.memoizedState,
                    T = t.stateNode,
                    x = T.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? W : Dn(t.type, W),
                      J
                    )
                  T.__reactInternalSnapshotBeforeUpdate = x
                }
                break
              case 3:
                var N = t.stateNode.containerInfo
                N.nodeType === 1
                  ? (N.textContent = '')
                  : N.nodeType === 9 &&
                    N.documentElement &&
                    N.removeChild(N.documentElement)
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
          Xe(t, t.return, B)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (re = e)
          break
        }
        re = t.return
      }
  return (U = Cv), (Cv = !1), U
}
function As(e, t, n) {
  var i = t.updateQueue
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var o = (i = i.next)
    do {
      if ((o.tag & e) === e) {
        var u = o.destroy
        ;(o.destroy = void 0), u !== void 0 && m1(t, n, u)
      }
      o = o.next
    } while (o !== i)
  }
}
function $c(e, t) {
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
        (delete t[Xn], delete t[Vs], delete t[ud], delete t[gx], delete t[mx])),
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
function Av(e) {
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
          n != null || t.onclick !== null || (t.onclick = oc))
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
var gt = null,
  Fn = !1
function ti(e, t, n) {
  for (n = n.child; n !== null; ) b1(e, t, n), (n = n.sibling)
}
function b1(e, t, n) {
  if (er && typeof er.onCommitFiberUnmount == 'function')
    try {
      er.onCommitFiberUnmount(Nc, n)
    } catch {}
  switch (n.tag) {
    case 5:
      At || Za(n, t)
    case 6:
      var i = gt,
        o = Fn
      ;(gt = null),
        ti(e, t, n),
        (gt = i),
        (Fn = o),
        gt !== null &&
          (Fn
            ? ((e = gt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : gt.removeChild(n.stateNode))
      break
    case 18:
      gt !== null &&
        (Fn
          ? ((e = gt),
            (n = n.stateNode),
            e.nodeType === 8
              ? bh(e.parentNode, n)
              : e.nodeType === 1 && bh(e, n),
            Fs(e))
          : bh(gt, n.stateNode))
      break
    case 4:
      ;(i = gt),
        (o = Fn),
        (gt = n.stateNode.containerInfo),
        (Fn = !0),
        ti(e, t, n),
        (gt = i),
        (Fn = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !At &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        o = i = i.next
        do {
          var u = o,
            c = u.destroy
          ;(u = u.tag),
            c !== void 0 && (u & 2 || u & 4) && m1(n, t, c),
            (o = o.next)
        } while (o !== i)
      }
      ti(e, t, n)
      break
    case 1:
      if (
        !At &&
        (Za(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == 'function')
      )
        try {
          ;(i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount()
        } catch (d) {
          Xe(n, t, d)
        }
      ti(e, t, n)
      break
    case 21:
      ti(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((At = (i = At) || n.memoizedState !== null), ti(e, t, n), (At = i))
        : ti(e, t, n)
      break
    default:
      ti(e, t, n)
  }
}
function Lv(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Tx()),
      t.forEach(function (i) {
        var o = Bx.bind(null, e, i)
        n.has(i) || (n.add(i), i.then(o, o))
      })
  }
}
function jn(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var o = n[i]
      try {
        var u = e,
          c = t,
          d = c
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              ;(gt = d.stateNode), (Fn = !1)
              break e
            case 3:
              ;(gt = d.stateNode.containerInfo), (Fn = !0)
              break e
            case 4:
              ;(gt = d.stateNode.containerInfo), (Fn = !0)
              break e
          }
          d = d.return
        }
        if (gt === null) throw Error(Y(160))
        b1(u, c, o), (gt = null), (Fn = !1)
        var g = o.alternate
        g !== null && (g.return = null), (o.return = null)
      } catch (w) {
        Xe(o, t, w)
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
      if ((jn(t, e), Jn(e), i & 4)) {
        try {
          As(3, e, e.return), $c(3, e)
        } catch (W) {
          Xe(e, e.return, W)
        }
        try {
          As(5, e, e.return)
        } catch (W) {
          Xe(e, e.return, W)
        }
      }
      break
    case 1:
      jn(t, e), Jn(e), i & 512 && n !== null && Za(n, n.return)
      break
    case 5:
      if (
        (jn(t, e),
        Jn(e),
        i & 512 && n !== null && Za(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Rs(o, '')
        } catch (W) {
          Xe(e, e.return, W)
        }
      }
      if (i & 4 && ((o = e.stateNode), o != null)) {
        var u = e.memoizedProps,
          c = n !== null ? n.memoizedProps : u,
          d = e.type,
          g = e.updateQueue
        if (((e.updateQueue = null), g !== null))
          try {
            d === 'input' && u.type === 'radio' && u.name != null && M0(o, u),
              Qh(d, c)
            var w = Qh(d, u)
            for (c = 0; c < g.length; c += 2) {
              var P = g[c],
                O = g[c + 1]
              P === 'style'
                ? W0(o, O)
                : P === 'dangerouslySetInnerHTML'
                ? V0(o, O)
                : P === 'children'
                ? Rs(o, O)
                : Vd(o, P, O, w)
            }
            switch (d) {
              case 'input':
                Vh(o, u)
                break
              case 'textarea':
                $0(o, u)
                break
              case 'select':
                var k = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!u.multiple
                var V = u.value
                V != null
                  ? to(o, !!u.multiple, V, !1)
                  : k !== !!u.multiple &&
                    (u.defaultValue != null
                      ? to(o, !!u.multiple, u.defaultValue, !0)
                      : to(o, !!u.multiple, u.multiple ? [] : '', !1))
            }
            o[Vs] = u
          } catch (W) {
            Xe(e, e.return, W)
          }
      }
      break
    case 6:
      if ((jn(t, e), Jn(e), i & 4)) {
        if (e.stateNode === null) throw Error(Y(162))
        ;(o = e.stateNode), (u = e.memoizedProps)
        try {
          o.nodeValue = u
        } catch (W) {
          Xe(e, e.return, W)
        }
      }
      break
    case 3:
      if (
        (jn(t, e), Jn(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fs(t.containerInfo)
        } catch (W) {
          Xe(e, e.return, W)
        }
      break
    case 4:
      jn(t, e), Jn(e)
      break
    case 13:
      jn(t, e),
        Jn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((u = o.memoizedState !== null),
          (o.stateNode.isHidden = u),
          !u ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (kp = nt())),
        i & 4 && Lv(e)
      break
    case 22:
      if (
        ((P = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((At = (w = At) || P), jn(t, e), (At = w)) : jn(t, e),
        Jn(e),
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
                  As(4, k, k.return)
                  break
                case 1:
                  Za(k, k.return)
                  var U = k.stateNode
                  if (typeof U.componentWillUnmount == 'function') {
                    ;(i = k), (n = k.return)
                    try {
                      ;(t = i),
                        (U.props = t.memoizedProps),
                        (U.state = t.memoizedState),
                        U.componentWillUnmount()
                    } catch (W) {
                      Xe(i, n, W)
                    }
                  }
                  break
                case 5:
                  Za(k, k.return)
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
                    ? ((u = o.style),
                      typeof u.setProperty == 'function'
                        ? u.setProperty('display', 'none', 'important')
                        : (u.display = 'none'))
                    : ((d = O.stateNode),
                      (g = O.memoizedProps.style),
                      (c =
                        g != null && g.hasOwnProperty('display')
                          ? g.display
                          : null),
                      (d.style.display = H0('display', c)))
              } catch (W) {
                Xe(e, e.return, W)
              }
            }
          } else if (O.tag === 6) {
            if (P === null)
              try {
                O.stateNode.nodeValue = w ? '' : O.memoizedProps
              } catch (W) {
                Xe(e, e.return, W)
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
      jn(t, e), Jn(e), i & 4 && Lv(e)
      break
    case 21:
      break
    default:
      jn(t, e), Jn(e)
  }
}
function Jn(e) {
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
          i.flags & 32 && (Rs(o, ''), (i.flags &= -33))
          var u = Av(e)
          Sd(e, u, o)
          break
        case 3:
        case 4:
          var c = i.stateNode.containerInfo,
            d = Av(e)
          kd(e, d, c)
          break
        default:
          throw Error(Y(161))
      }
    } catch (g) {
      Xe(e, e.return, g)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Rx(e, t, n) {
  ;(re = e), _1(e)
}
function _1(e, t, n) {
  for (var i = (e.mode & 1) !== 0; re !== null; ) {
    var o = re,
      u = o.child
    if (o.tag === 22 && i) {
      var c = o.memoizedState !== null || zl
      if (!c) {
        var d = o.alternate,
          g = (d !== null && d.memoizedState !== null) || At
        d = zl
        var w = At
        if (((zl = c), (At = g) && !w))
          for (re = o; re !== null; )
            (c = re),
              (g = c.child),
              c.tag === 22 && c.memoizedState !== null
                ? Iv(o)
                : g !== null
                ? ((g.return = c), (re = g))
                : Iv(o)
        for (; u !== null; ) (re = u), _1(u), (u = u.sibling)
        ;(re = o), (zl = d), (At = w)
      }
      Pv(e)
    } else
      o.subtreeFlags & 8772 && u !== null ? ((u.return = o), (re = u)) : Pv(e)
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
              At || $c(5, t)
              break
            case 1:
              var i = t.stateNode
              if (t.flags & 4 && !At)
                if (n === null) i.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Dn(t.type, n.memoizedProps)
                  i.componentDidUpdate(
                    o,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var u = t.updateQueue
              u !== null && hv(t, u, i)
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
                    O !== null && Fs(O)
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
        At || (t.flags & 512 && _d(t))
      } catch (k) {
        Xe(t, t.return, k)
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
function Iv(e) {
  for (; re !== null; ) {
    var t = re
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            $c(4, t)
          } catch (g) {
            Xe(t, n, g)
          }
          break
        case 1:
          var i = t.stateNode
          if (typeof i.componentDidMount == 'function') {
            var o = t.return
            try {
              i.componentDidMount()
            } catch (g) {
              Xe(t, o, g)
            }
          }
          var u = t.return
          try {
            _d(t)
          } catch (g) {
            Xe(t, u, g)
          }
          break
        case 5:
          var c = t.return
          try {
            _d(t)
          } catch (g) {
            Xe(t, c, g)
          }
      }
    } catch (g) {
      Xe(t, t.return, g)
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
  vc = Rr.ReactCurrentDispatcher,
  wp = Rr.ReactCurrentOwner,
  Cn = Rr.ReactCurrentBatchConfig,
  Se = 0,
  ht = null,
  it = null,
  mt = 0,
  sn = 0,
  eo = ki(0),
  lt = 0,
  Gs = null,
  ia = 0,
  Bc = 0,
  _p = 0,
  Ls = null,
  Qt = null,
  kp = 0,
  go = 1 / 0,
  Er = null,
  yc = !1,
  Ed = null,
  pi = null,
  jl = !1,
  ui = null,
  bc = 0,
  Ps = 0,
  xd = null,
  Gl = -1,
  Jl = 0
function Ft() {
  return Se & 6 ? nt() : Gl !== -1 ? Gl : (Gl = nt())
}
function gi(e) {
  return e.mode & 1
    ? Se & 2 && mt !== 0
      ? mt & -mt
      : yx.transition !== null
      ? (Jl === 0 && (Jl = ry()), Jl)
      : ((e = Te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cy(e.type))),
        e)
    : 1
}
function Bn(e, t, n, i) {
  if (50 < Ps) throw ((Ps = 0), (xd = null), Error(Y(185)))
  eu(e, n, i),
    (!(Se & 2) || e !== ht) &&
      (e === ht && (!(Se & 2) && (Bc |= n), lt === 4 && ai(e, mt)),
      en(e, i),
      n === 1 && Se === 0 && !(t.mode & 1) && ((go = nt() + 500), Fc && Si()))
}
function en(e, t) {
  var n = e.callbackNode
  y4(e, t)
  var i = nc(e, e === ht ? mt : 0)
  if (i === 0)
    n !== null && Mm(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Mm(n), t === 1))
      e.tag === 0 ? vx(Tv.bind(null, e)) : Py(Tv.bind(null, e)),
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
          n = tc
          break
        case 536870912:
          n = ny
          break
        default:
          n = tc
      }
      n = P1(n, k1.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function k1(e, t) {
  if (((Gl = -1), (Jl = 0), Se & 6)) throw Error(Y(327))
  var n = e.callbackNode
  if (oo() && e.callbackNode !== n) return null
  var i = nc(e, e === ht ? mt : 0)
  if (i === 0) return null
  if (i & 30 || i & e.expiredLanes || t) t = wc(e, i)
  else {
    t = i
    var o = Se
    Se |= 2
    var u = E1()
    ;(ht !== e || mt !== t) && ((Er = null), (go = nt() + 500), Zi(e, t))
    do
      try {
        Fx()
        break
      } catch (d) {
        S1(e, d)
      }
    while (!0)
    sp(),
      (vc.current = u),
      (Se = o),
      it !== null ? (t = 0) : ((ht = null), (mt = 0), (t = lt))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Zh(e)), o !== 0 && ((i = o), (t = Cd(e, o)))), t === 1)
    )
      throw ((n = Gs), Zi(e, 0), ai(e, i), en(e, nt()), n)
    if (t === 6) ai(e, i)
    else {
      if (
        ((o = e.current.alternate),
        !(i & 30) &&
          !jx(o) &&
          ((t = wc(e, i)),
          t === 2 && ((u = Zh(e)), u !== 0 && ((i = u), (t = Cd(e, u)))),
          t === 1))
      )
        throw ((n = Gs), Zi(e, 0), ai(e, i), en(e, nt()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(Y(345))
        case 2:
          Ki(e, Qt, Er)
          break
        case 3:
          if (
            (ai(e, i), (i & 130023424) === i && ((t = kp + 500 - nt()), 10 < t))
          ) {
            if (nc(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & i) !== i)) {
              Ft(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = sd(Ki.bind(null, e, Qt, Er), t)
            break
          }
          Ki(e, Qt, Er)
          break
        case 4:
          if ((ai(e, i), (i & 4194240) === i)) break
          for (t = e.eventTimes, o = -1; 0 < i; ) {
            var c = 31 - $n(i)
            ;(u = 1 << c), (c = t[c]), c > o && (o = c), (i &= ~u)
          }
          if (
            ((i = o),
            (i = nt() - i),
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
            e.timeoutHandle = sd(Ki.bind(null, e, Qt, Er), i)
            break
          }
          Ki(e, Qt, Er)
          break
        case 5:
          Ki(e, Qt, Er)
          break
        default:
          throw Error(Y(329))
      }
    }
  }
  return en(e, nt()), e.callbackNode === n ? k1.bind(null, e) : null
}
function Cd(e, t) {
  var n = Ls
  return (
    e.current.memoizedState.isDehydrated && (Zi(e, t).flags |= 256),
    (e = wc(e, t)),
    e !== 2 && ((t = Qt), (Qt = n), t !== null && Ad(t)),
    e
  )
}
function Ad(e) {
  Qt === null ? (Qt = e) : Qt.push.apply(Qt, e)
}
function jx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var o = n[i],
            u = o.getSnapshot
          o = o.value
          try {
            if (!Vn(u(), o)) return !1
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
      t &= ~Bc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $n(t),
      i = 1 << n
    ;(e[n] = -1), (t &= ~i)
  }
}
function Tv(e) {
  if (Se & 6) throw Error(Y(327))
  oo()
  var t = nc(e, 0)
  if (!(t & 1)) return en(e, nt()), null
  var n = wc(e, t)
  if (e.tag !== 0 && n === 2) {
    var i = Zh(e)
    i !== 0 && ((t = i), (n = Cd(e, i)))
  }
  if (n === 1) throw ((n = Gs), Zi(e, 0), ai(e, t), en(e, nt()), n)
  if (n === 6) throw Error(Y(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ki(e, Qt, Er),
    en(e, nt()),
    null
  )
}
function Sp(e, t) {
  var n = Se
  Se |= 1
  try {
    return e(t)
  } finally {
    ;(Se = n), Se === 0 && ((go = nt() + 500), Fc && Si())
  }
}
function aa(e) {
  ui !== null && ui.tag === 0 && !(Se & 6) && oo()
  var t = Se
  Se |= 1
  var n = Cn.transition,
    i = Te
  try {
    if (((Cn.transition = null), (Te = 1), e)) return e()
  } finally {
    ;(Te = i), (Cn.transition = n), (Se = t), !(Se & 6) && Si()
  }
}
function Ep() {
  ;(sn = eo.current), $e(eo)
}
function Zi(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), hx(n)), it !== null))
    for (n = it.return; n !== null; ) {
      var i = n
      switch ((ip(i), i.tag)) {
        case 1:
          ;(i = i.type.childContextTypes), i != null && sc()
          break
        case 3:
          ho(), $e(Xt), $e(Pt), dp()
          break
        case 5:
          hp(i)
          break
        case 4:
          ho()
          break
        case 13:
          $e(qe)
          break
        case 19:
          $e(qe)
          break
        case 10:
          up(i.type._context)
          break
        case 22:
        case 23:
          Ep()
      }
      n = n.return
    }
  if (
    ((ht = e),
    (it = e = mi(e.current, null)),
    (mt = sn = t),
    (lt = 0),
    (Gs = null),
    (_p = Bc = ia = 0),
    (Qt = Ls = null),
    Ji !== null)
  ) {
    for (t = 0; t < Ji.length; t++)
      if (((n = Ji[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null
        var o = i.next,
          u = n.pending
        if (u !== null) {
          var c = u.next
          ;(u.next = o), (i.next = c)
        }
        n.pending = i
      }
    Ji = null
  }
  return e
}
function S1(e, t) {
  do {
    var n = it
    try {
      if ((sp(), (ql.current = mc), gc)) {
        for (var i = Ke.memoizedState; i !== null; ) {
          var o = i.queue
          o !== null && (o.pending = null), (i = i.next)
        }
        gc = !1
      }
      if (
        ((ra = 0),
        (ft = ut = Ke = null),
        (Cs = !1),
        (qs = 0),
        (wp.current = null),
        n === null || n.return === null)
      ) {
        ;(lt = 1), (Gs = t), (it = null)
        break
      }
      e: {
        var u = e,
          c = n.return,
          d = n,
          g = t
        if (
          ((t = mt),
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
              wv(V, c, d, u, t),
              V.mode & 1 && yv(u, w, t),
              (t = V),
              (g = w)
            var U = t.updateQueue
            if (U === null) {
              var W = new Set()
              W.add(g), (t.updateQueue = W)
            } else U.add(g)
            break e
          } else {
            if (!(t & 1)) {
              yv(u, w, t), xp()
              break e
            }
            g = Error(Y(426))
          }
        } else if (Be && d.mode & 1) {
          var J = bv(c)
          if (J !== null) {
            !(J.flags & 65536) && (J.flags |= 256),
              wv(J, c, d, u, t),
              ap(po(g, d))
            break e
          }
        }
        ;(u = g = po(g, d)),
          lt !== 4 && (lt = 2),
          Ls === null ? (Ls = [u]) : Ls.push(u),
          (u = c)
        do {
          switch (u.tag) {
            case 3:
              ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
              var T = a1(u, g, t)
              fv(u, T)
              break e
            case 1:
              d = g
              var x = u.type,
                N = u.stateNode
              if (
                !(u.flags & 128) &&
                (typeof x.getDerivedStateFromError == 'function' ||
                  (N !== null &&
                    typeof N.componentDidCatch == 'function' &&
                    (pi === null || !pi.has(N))))
              ) {
                ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
                var B = o1(u, d, t)
                fv(u, B)
                break e
              }
          }
          u = u.return
        } while (u !== null)
      }
      C1(n)
    } catch (G) {
      ;(t = G), it === n && n !== null && (it = n = n.return)
      continue
    }
    break
  } while (!0)
}
function E1() {
  var e = vc.current
  return (vc.current = mc), e === null ? mc : e
}
function xp() {
  ;(lt === 0 || lt === 3 || lt === 2) && (lt = 4),
    ht === null || (!(ia & 268435455) && !(Bc & 268435455)) || ai(ht, mt)
}
function wc(e, t) {
  var n = Se
  Se |= 2
  var i = E1()
  ;(ht !== e || mt !== t) && ((Er = null), Zi(e, t))
  do
    try {
      Dx()
      break
    } catch (o) {
      S1(e, o)
    }
  while (!0)
  if ((sp(), (Se = n), (vc.current = i), it !== null)) throw Error(Y(261))
  return (ht = null), (mt = 0), lt
}
function Dx() {
  for (; it !== null; ) x1(it)
}
function Fx() {
  for (; it !== null && !l4(); ) x1(it)
}
function x1(e) {
  var t = L1(e.alternate, e, sn)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? C1(e) : (it = t),
    (wp.current = null)
}
function C1(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ix(n, t)), n !== null)) {
        ;(n.flags &= 32767), (it = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(lt = 6), (it = null)
        return
      }
    } else if (((n = Ox(n, t, sn)), n !== null)) {
      it = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      it = t
      return
    }
    it = t = e
  } while (t !== null)
  lt === 0 && (lt = 5)
}
function Ki(e, t, n) {
  var i = Te,
    o = Cn.transition
  try {
    ;(Cn.transition = null), (Te = 1), Ux(e, t, n, i)
  } finally {
    ;(Cn.transition = o), (Te = i)
  }
  return null
}
function Ux(e, t, n, i) {
  do oo()
  while (ui !== null)
  if (Se & 6) throw Error(Y(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Y(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var u = n.lanes | n.childLanes
  if (
    (b4(e, u),
    e === ht && ((it = ht = null), (mt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jl ||
      ((jl = !0),
      P1(tc, function () {
        return oo(), null
      })),
    (u = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || u)
  ) {
    ;(u = Cn.transition), (Cn.transition = null)
    var c = Te
    Te = 1
    var d = Se
    ;(Se |= 4),
      (wp.current = null),
      Nx(e, n),
      w1(n, e),
      ax(ad),
      (rc = !!id),
      (ad = id = null),
      (e.current = n),
      Rx(n),
      c4(),
      (Se = d),
      (Te = c),
      (Cn.transition = u)
  } else e.current = n
  if (
    (jl && ((jl = !1), (ui = e), (bc = o)),
    (u = e.pendingLanes),
    u === 0 && (pi = null),
    d4(n.stateNode),
    en(e, nt()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), i(o.value, { componentStack: o.stack, digest: o.digest })
  if (yc) throw ((yc = !1), (e = Ed), (Ed = null), e)
  return (
    bc & 1 && e.tag !== 0 && oo(),
    (u = e.pendingLanes),
    u & 1 ? (e === xd ? Ps++ : ((Ps = 0), (xd = e))) : (Ps = 0),
    Si(),
    null
  )
}
function oo() {
  if (ui !== null) {
    var e = iy(bc),
      t = Cn.transition,
      n = Te
    try {
      if (((Cn.transition = null), (Te = 16 > e ? 16 : e), ui === null))
        var i = !1
      else {
        if (((e = ui), (ui = null), (bc = 0), Se & 6)) throw Error(Y(331))
        var o = Se
        for (Se |= 4, re = e.current; re !== null; ) {
          var u = re,
            c = u.child
          if (re.flags & 16) {
            var d = u.deletions
            if (d !== null) {
              for (var g = 0; g < d.length; g++) {
                var w = d[g]
                for (re = w; re !== null; ) {
                  var P = re
                  switch (P.tag) {
                    case 0:
                    case 11:
                    case 15:
                      As(8, P, u)
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
              var U = u.alternate
              if (U !== null) {
                var W = U.child
                if (W !== null) {
                  U.child = null
                  do {
                    var J = W.sibling
                    ;(W.sibling = null), (W = J)
                  } while (W !== null)
                }
              }
              re = u
            }
          }
          if (u.subtreeFlags & 2064 && c !== null) (c.return = u), (re = c)
          else
            e: for (; re !== null; ) {
              if (((u = re), u.flags & 2048))
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, u, u.return)
                }
              var T = u.sibling
              if (T !== null) {
                ;(T.return = u.return), (re = T)
                break e
              }
              re = u.return
            }
        }
        var x = e.current
        for (re = x; re !== null; ) {
          c = re
          var N = c.child
          if (c.subtreeFlags & 2064 && N !== null) (N.return = c), (re = N)
          else
            e: for (c = x; re !== null; ) {
              if (((d = re), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $c(9, d)
                  }
                } catch (G) {
                  Xe(d, d.return, G)
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
          ((Se = o), Si(), er && typeof er.onPostCommitFiberRoot == 'function')
        )
          try {
            er.onPostCommitFiberRoot(Nc, e)
          } catch {}
        i = !0
      }
      return i
    } finally {
      ;(Te = n), (Cn.transition = t)
    }
  }
  return !1
}
function Nv(e, t, n) {
  ;(t = po(n, t)),
    (t = a1(e, t, 1)),
    (e = di(e, t, 1)),
    (t = Ft()),
    e !== null && (eu(e, 1, t), en(e, t))
}
function Xe(e, t, n) {
  if (e.tag === 3) Nv(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nv(t, e, n)
        break
      } else if (t.tag === 1) {
        var i = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof i.componentDidCatch == 'function' &&
            (pi === null || !pi.has(i)))
        ) {
          ;(e = po(n, e)),
            (e = o1(t, e, 1)),
            (t = di(t, e, 1)),
            (e = Ft()),
            t !== null && (eu(t, 1, e), en(t, e))
          break
        }
      }
      t = t.return
    }
}
function Mx(e, t, n) {
  var i = e.pingCache
  i !== null && i.delete(t),
    (t = Ft()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ht === e &&
      (mt & n) === n &&
      (lt === 4 || (lt === 3 && (mt & 130023424) === mt && 500 > nt() - kp)
        ? Zi(e, 0)
        : (_p |= n)),
    en(e, t)
}
function A1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cl), (Cl <<= 1), !(Cl & 130023424) && (Cl = 4194304))
      : (t = 1))
  var n = Ft()
  ;(e = Ir(e, t)), e !== null && (eu(e, t, n), en(e, n))
}
function $x(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), A1(e, n)
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
  i !== null && i.delete(t), A1(e, n)
}
var L1
L1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xt.current) Yt = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Yt = !1), Px(e, t, n)
      Yt = !!(e.flags & 131072)
    }
  else (Yt = !1), Be && t.flags & 1048576 && Oy(t, cc, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type
      Ql(e, t), (e = t.pendingProps)
      var o = lo(t, Pt.current)
      ao(t, n), (o = gp(null, t, i, e, o, n))
      var u = mp()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Zt(i) ? ((u = !0), uc(t)) : (u = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            cp(t),
            (o.updater = Uc),
            (t.stateNode = o),
            (o._reactInternals = t),
            pd(t, i, e, n),
            (t = vd(null, t, i, !0, u, n)))
          : ((t.tag = 0), Be && u && rp(t), jt(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      i = t.elementType
      e: {
        switch (
          (Ql(e, t),
          (e = t.pendingProps),
          (o = i._init),
          (i = o(i._payload)),
          (t.type = i),
          (o = t.tag = Hx(i)),
          (e = Dn(i, e)),
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
            t = kv(null, t, i, Dn(i.type, e), n)
            break e
        }
        throw Error(Y(306, i, ''))
      }
      return t
    case 0:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Dn(i, o)),
        md(e, t, i, o, n)
      )
    case 1:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Dn(i, o)),
        Sv(e, t, i, o, n)
      )
    case 3:
      e: {
        if ((c1(t), e === null)) throw Error(Y(387))
        ;(i = t.pendingProps),
          (u = t.memoizedState),
          (o = u.element),
          Ry(e, t),
          dc(t, i, null, n)
        var c = t.memoizedState
        if (((i = c.element), u.isDehydrated))
          if (
            ((u = {
              element: i,
              isDehydrated: !1,
              cache: c.cache,
              pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
              transitions: c.transitions,
            }),
            (t.updateQueue.baseState = u),
            (t.memoizedState = u),
            t.flags & 256)
          ) {
            ;(o = po(Error(Y(423)), t)), (t = Ev(e, t, i, n, o))
            break e
          } else if (i !== o) {
            ;(o = po(Error(Y(424)), t)), (t = Ev(e, t, i, n, o))
            break e
          } else
            for (
              un = hi(t.stateNode.containerInfo.firstChild),
                ln = t,
                Be = !0,
                Un = null,
                n = Fy(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((co(), i === o)) {
            t = Tr(e, t, n)
            break e
          }
          jt(e, t, i, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Uy(t),
        e === null && fd(t),
        (i = t.type),
        (o = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (c = o.children),
        od(i, o) ? (c = null) : u !== null && od(i, u) && (t.flags |= 32),
        l1(e, t),
        jt(e, t, c, n),
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
        e === null ? (t.child = fo(t, null, i, n)) : jt(e, t, i, n),
        t.child
      )
    case 11:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Dn(i, o)),
        _v(e, t, i, o, n)
      )
    case 7:
      return jt(e, t, t.pendingProps, n), t.child
    case 8:
      return jt(e, t, t.pendingProps.children, n), t.child
    case 12:
      return jt(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (o = t.pendingProps),
          (u = t.memoizedProps),
          (c = o.value),
          Fe(fc, i._currentValue),
          (i._currentValue = c),
          u !== null)
        )
          if (Vn(u.value, c)) {
            if (u.children === o.children && !Xt.current) {
              t = Tr(e, t, n)
              break e
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var d = u.dependencies
              if (d !== null) {
                c = u.child
                for (var g = d.firstContext; g !== null; ) {
                  if (g.context === i) {
                    if (u.tag === 1) {
                      ;(g = Lr(-1, n & -n)), (g.tag = 2)
                      var w = u.updateQueue
                      if (w !== null) {
                        w = w.shared
                        var P = w.pending
                        P === null
                          ? (g.next = g)
                          : ((g.next = P.next), (P.next = g)),
                          (w.pending = g)
                      }
                    }
                    ;(u.lanes |= n),
                      (g = u.alternate),
                      g !== null && (g.lanes |= n),
                      hd(u.return, n, t),
                      (d.lanes |= n)
                    break
                  }
                  g = g.next
                }
              } else if (u.tag === 10) c = u.type === t.type ? null : u.child
              else if (u.tag === 18) {
                if (((c = u.return), c === null)) throw Error(Y(341))
                ;(c.lanes |= n),
                  (d = c.alternate),
                  d !== null && (d.lanes |= n),
                  hd(c, n, t),
                  (c = u.sibling)
              } else c = u.child
              if (c !== null) c.return = u
              else
                for (c = u; c !== null; ) {
                  if (c === t) {
                    c = null
                    break
                  }
                  if (((u = c.sibling), u !== null)) {
                    ;(u.return = c.return), (c = u)
                    break
                  }
                  c = c.return
                }
              u = c
            }
        jt(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (i = t.pendingProps.children),
        ao(t, n),
        (o = An(o)),
        (i = i(o)),
        (t.flags |= 1),
        jt(e, t, i, n),
        t.child
      )
    case 14:
      return (
        (i = t.type),
        (o = Dn(i, t.pendingProps)),
        (o = Dn(i.type, o)),
        kv(e, t, i, o, n)
      )
    case 15:
      return s1(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (o = t.elementType === i ? o : Dn(i, o)),
        Ql(e, t),
        (t.tag = 1),
        Zt(i) ? ((e = !0), uc(t)) : (e = !1),
        ao(t, n),
        jy(t, i, o),
        pd(t, i, o, n),
        vd(null, t, i, !0, e, n)
      )
    case 19:
      return h1(e, t, n)
    case 22:
      return u1(e, t, n)
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
function xn(e, t, n, i) {
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
      ? ((n = xn(e.tag, t, e.key, e.mode)),
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
function Yl(e, t, n, i, o, u) {
  var c = 2
  if (((i = e), typeof e == 'function')) Cp(e) && (c = 1)
  else if (typeof e == 'string') c = 5
  else
    e: switch (e) {
      case Ha:
        return ea(n.children, o, u, t)
      case Hd:
        ;(c = 8), (o |= 8)
        break
      case Fh:
        return (e = xn(12, n, t, o | 2)), (e.elementType = Fh), (e.lanes = u), e
      case Uh:
        return (e = xn(13, n, t, o)), (e.elementType = Uh), (e.lanes = u), e
      case Mh:
        return (e = xn(19, n, t, o)), (e.elementType = Mh), (e.lanes = u), e
      case D0:
        return Vc(n, o, u, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case z0:
              c = 10
              break e
            case j0:
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
    (t = xn(c, n, t, o)), (t.elementType = e), (t.type = i), (t.lanes = u), t
  )
}
function ea(e, t, n, i) {
  return (e = xn(7, e, i, t)), (e.lanes = n), e
}
function Vc(e, t, n, i) {
  return (
    (e = xn(22, e, i, t)),
    (e.elementType = D0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ah(e, t, n) {
  return (e = xn(6, e, null, t)), (e.lanes = n), e
}
function Lh(e, t, n) {
  return (
    (t = xn(4, e.children !== null ? e.children : [], e.key, t)),
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
    (this.eventTimes = uh(0)),
    (this.expirationTimes = uh(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = uh(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Ap(e, t, n, i, o, u, c, d, g) {
  return (
    (e = new Wx(e, t, n, d, g)),
    t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
    (u = xn(3, null, null, t)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cp(u),
    e
  )
}
function qx(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Va,
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
          if (Zt(t.type)) {
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
    if (Zt(n)) return Ly(e, n, t)
  }
  return t
}
function I1(e, t, n, i, o, u, c, d, g) {
  return (
    (e = Ap(n, i, !0, e, o, u, c, d, g)),
    (e.context = O1(null)),
    (n = e.current),
    (i = Ft()),
    (o = gi(n)),
    (u = Lr(i, o)),
    (u.callback = t ?? null),
    di(n, u, o),
    (e.current.lanes = o),
    eu(e, o, i),
    en(e, i),
    e
  )
}
function Hc(e, t, n, i) {
  var o = t.current,
    u = Ft(),
    c = gi(o)
  return (
    (n = O1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lr(u, c)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = di(o, t, c)),
    e !== null && (Bn(e, o, c, u), Wl(e, o, c)),
    c
  )
}
function _c(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Rv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Lp(e, t) {
  Rv(e, t), (e = e.alternate) && Rv(e, t)
}
function Kx() {
  return null
}
var T1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Pp(e) {
  this._internalRoot = e
}
Wc.prototype.render = Pp.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(Y(409))
  Hc(e, t, null, null)
}
Wc.prototype.unmount = Pp.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    aa(function () {
      Hc(null, e, null, null)
    }),
      (t[Or] = null)
  }
}
function Wc(e) {
  this._internalRoot = e
}
Wc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sy()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < ii.length && t !== 0 && t < ii[n].priority; n++);
    ii.splice(n, 0, e), n === 0 && ly(e)
  }
}
function Op(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function qc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function zv() {}
function Qx(e, t, n, i, o) {
  if (o) {
    if (typeof i == 'function') {
      var u = i
      i = function () {
        var w = _c(c)
        u.call(w)
      }
    }
    var c = I1(t, i, e, 0, null, !1, !1, '', zv)
    return (
      (e._reactRootContainer = c),
      (e[Or] = c.current),
      $s(e.nodeType === 8 ? e.parentNode : e),
      aa(),
      c
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof i == 'function') {
    var d = i
    i = function () {
      var w = _c(g)
      d.call(w)
    }
  }
  var g = Ap(e, 0, !1, null, null, !1, !1, '', zv)
  return (
    (e._reactRootContainer = g),
    (e[Or] = g.current),
    $s(e.nodeType === 8 ? e.parentNode : e),
    aa(function () {
      Hc(t, g, n, i)
    }),
    g
  )
}
function Kc(e, t, n, i, o) {
  var u = n._reactRootContainer
  if (u) {
    var c = u
    if (typeof o == 'function') {
      var d = o
      o = function () {
        var g = _c(c)
        d.call(g)
      }
    }
    Hc(t, c, e, o)
  } else c = Qx(n, t, e, o, i)
  return _c(c)
}
ay = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = bs(t.pendingLanes)
        n !== 0 &&
          (Gd(t, n | 1), en(t, nt()), !(Se & 6) && ((go = nt() + 500), Si()))
      }
      break
    case 13:
      aa(function () {
        var i = Ir(e, 1)
        if (i !== null) {
          var o = Ft()
          Bn(i, e, 1, o)
        }
      }),
        Lp(e, 1)
  }
}
Jd = function (e) {
  if (e.tag === 13) {
    var t = Ir(e, 134217728)
    if (t !== null) {
      var n = Ft()
      Bn(t, e, 134217728, n)
    }
    Lp(e, 134217728)
  }
}
oy = function (e) {
  if (e.tag === 13) {
    var t = gi(e),
      n = Ir(e, t)
    if (n !== null) {
      var i = Ft()
      Bn(n, e, t, i)
    }
    Lp(e, t)
  }
}
sy = function () {
  return Te
}
uy = function (e, t) {
  var n = Te
  try {
    return (Te = e), t()
  } finally {
    Te = n
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
            var o = Dc(i)
            if (!o) throw Error(Y(90))
            U0(i), Vh(i, o)
          }
        }
      }
      break
    case 'textarea':
      $0(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && to(e, !!n.multiple, t, !1)
  }
}
Q0 = Sp
G0 = aa
var Gx = { usingClientEntryPoint: !1, Events: [nu, Qa, Dc, q0, K0, Sp] },
  gs = {
    findFiberByHostInstance: Gi,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Jx = {
    bundleType: gs.bundleType,
    version: gs.version,
    rendererPackageName: gs.rendererPackageName,
    rendererConfig: gs.rendererConfig,
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
    findFiberByHostInstance: gs.findFiberByHostInstance || Kx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Dl.isDisabled && Dl.supportsFiber)
    try {
      ;(Nc = Dl.inject(Jx)), (er = Dl)
    } catch {}
}
fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gx
fn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Op(t)) throw Error(Y(200))
  return qx(e, t, null, n)
}
fn.createRoot = function (e, t) {
  if (!Op(e)) throw Error(Y(299))
  var n = !1,
    i = '',
    o = T1
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ap(e, 1, !1, null, null, n, !1, i, o)),
    (e[Or] = t.current),
    $s(e.nodeType === 8 ? e.parentNode : e),
    new Pp(t)
  )
}
fn.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(Y(188))
      : ((e = Object.keys(e).join(',')), Error(Y(268, e)))
  return (e = X0(t)), (e = e === null ? null : e.stateNode), e
}
fn.flushSync = function (e) {
  return aa(e)
}
fn.hydrate = function (e, t, n) {
  if (!qc(t)) throw Error(Y(200))
  return Kc(null, e, t, !0, n)
}
fn.hydrateRoot = function (e, t, n) {
  if (!Op(e)) throw Error(Y(405))
  var i = (n != null && n.hydratedSources) || null,
    o = !1,
    u = '',
    c = T1
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
    (t = I1(t, null, e, 1, n ?? null, o, !1, u, c)),
    (e[Or] = t.current),
    $s(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Wc(t)
}
fn.render = function (e, t, n) {
  if (!qc(t)) throw Error(Y(200))
  return Kc(null, e, t, !1, n)
}
fn.unmountComponentAtNode = function (e) {
  if (!qc(e)) throw Error(Y(40))
  return e._reactRootContainer
    ? (aa(function () {
        Kc(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Or] = null)
        })
      }),
      !0)
    : !1
}
fn.unstable_batchedUpdates = Sp
fn.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!qc(n)) throw Error(Y(200))
  if (e == null || e._reactInternals === void 0) throw Error(Y(38))
  return Kc(e, t, n, !1, i)
}
fn.version = '18.2.0-next-9e3b772b8-20220608'
function N1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N1)
    } catch (e) {
      console.error(e)
    }
}
N1(), (O0.exports = fn)
var Yx = O0.exports,
  jv = Yx
;(jh.createRoot = jv.createRoot), (jh.hydrateRoot = jv.hydrateRoot)
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
  eC = (e) => Zx[e],
  tC = (e) => e.replace(Xx, eC)
let Dv = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: tC,
}
const nC = (e = {}) => {
    Dv = { ...Dv, ...e }
  },
  rC = {
    type: '3rdParty',
    init(e) {
      nC(e.options.react)
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
 */ function kc() {
  return (
    (kc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    kc.apply(this, arguments)
  )
}
var Xi
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Xi || (Xi = {}))
const Fv = 'popstate'
function iC(e) {
  e === void 0 && (e = {})
  function t(i, o) {
    let { pathname: u, search: c, hash: d } = i.location
    return Ld(
      '',
      { pathname: u, search: c, hash: d },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function n(i, o) {
    return typeof o == 'string' ? o : z1(o)
  }
  return oC(t, n, null, e)
}
function R1(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function aC() {
  return Math.random().toString(36).substr(2, 8)
}
function Uv(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Ld(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    kc(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? j1(t) : t,
      { state: n, key: (t && t.key) || i || aC() }
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
function j1(e) {
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
function oC(e, t, n, i) {
  i === void 0 && (i = {})
  let { window: o = document.defaultView, v5Compat: u = !1 } = i,
    c = o.history,
    d = Xi.Pop,
    g = null,
    w = P()
  w == null && ((w = 0), c.replaceState(kc({}, c.state, { idx: w }), ''))
  function P() {
    return (c.state || { idx: null }).idx
  }
  function O() {
    d = Xi.Pop
    let J = P(),
      T = J == null ? null : J - w
    ;(w = J), g && g({ action: d, location: W.location, delta: T })
  }
  function k(J, T) {
    d = Xi.Push
    let x = Ld(W.location, J, T)
    n && n(x, J), (w = P() + 1)
    let N = Uv(x, w),
      B = W.createHref(x)
    try {
      c.pushState(N, '', B)
    } catch (G) {
      if (G instanceof DOMException && G.name === 'DataCloneError') throw G
      o.location.assign(B)
    }
    u && g && g({ action: d, location: W.location, delta: 1 })
  }
  function V(J, T) {
    d = Xi.Replace
    let x = Ld(W.location, J, T)
    n && n(x, J), (w = P())
    let N = Uv(x, w),
      B = W.createHref(x)
    c.replaceState(N, '', B),
      u && g && g({ action: d, location: W.location, delta: 0 })
  }
  function U(J) {
    let T = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      x = typeof J == 'string' ? J : z1(J)
    return (
      (x = x.replace(/ $/, '%20')),
      R1(
        T,
        'No window.location.(origin|href) available to create URL for href: ' +
          x
      ),
      new URL(x, T)
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
        o.addEventListener(Fv, O),
        (g = J),
        () => {
          o.removeEventListener(Fv, O), (g = null)
        }
      )
    },
    createHref(J) {
      return t(o, J)
    },
    createURL: U,
    encodeLocation(J) {
      let T = U(J)
      return { pathname: T.pathname, search: T.search, hash: T.hash }
    },
    push: k,
    replace: V,
    go(J) {
      return c.go(J)
    },
  }
  return W
}
var Mv
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(Mv || (Mv = {}))
function sC(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    i = e.charAt(n)
  return i && i !== '/' ? null : e.slice(n) || '/'
}
const D1 = ['post', 'put', 'patch', 'delete']
new Set(D1)
const uC = ['get', ...D1]
new Set(uC)
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
const lC = Lt.createContext(null),
  F1 = Lt.createContext(null)
function cC() {
  return Lt.useContext(F1) != null
}
function fC(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: o = Xi.Pop,
    navigator: u,
    static: c = !1,
    future: d,
  } = e
  cC() && R1(!1)
  let g = t.replace(/^\/*/, '/'),
    w = Lt.useMemo(
      () => ({
        basename: g,
        navigator: u,
        static: c,
        future: Pd({ v7_relativeSplatPath: !1 }, d),
      }),
      [g, d, u, c]
    )
  typeof i == 'string' && (i = j1(i))
  let {
      pathname: P = '/',
      search: O = '',
      hash: k = '',
      state: V = null,
      key: U = 'default',
    } = i,
    W = Lt.useMemo(() => {
      let J = sC(P, g)
      return J == null
        ? null
        : {
            location: { pathname: J, search: O, hash: k, state: V, key: U },
            navigationType: o,
          }
    }, [g, P, O, k, V, U, o])
  return W == null
    ? null
    : Lt.createElement(
        lC.Provider,
        { value: w },
        Lt.createElement(F1.Provider, { children: n, value: W })
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
 */ const hC = '6'
try {
  window.__reactRouterVersion = hC
} catch {}
const dC = 'startTransition',
  $v = $E[dC]
function pC(e) {
  let { basename: t, children: n, future: i, window: o } = e,
    u = Lt.useRef()
  u.current == null && (u.current = iC({ window: o, v5Compat: !0 }))
  let c = u.current,
    [d, g] = Lt.useState({ action: c.action, location: c.location }),
    { v7_startTransition: w } = i || {},
    P = Lt.useCallback(
      (O) => {
        w && $v ? $v(() => g(O)) : g(O)
      },
      [g, w]
    )
  return (
    Lt.useLayoutEffect(() => c.listen(P), [c, P]),
    Lt.createElement(fC, {
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
 */ const U1 = function (e) {
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
  gC = function (e) {
    const t = []
    let n = 0,
      i = 0
    for (; n < e.length; ) {
      const o = e[n++]
      if (o < 128) t[i++] = String.fromCharCode(o)
      else if (o > 191 && o < 224) {
        const u = e[n++]
        t[i++] = String.fromCharCode(((o & 31) << 6) | (u & 63))
      } else if (o > 239 && o < 365) {
        const u = e[n++],
          c = e[n++],
          d = e[n++],
          g =
            (((o & 7) << 18) | ((u & 63) << 12) | ((c & 63) << 6) | (d & 63)) -
            65536
        ;(t[i++] = String.fromCharCode(55296 + (g >> 10))),
          (t[i++] = String.fromCharCode(56320 + (g & 1023)))
      } else {
        const u = e[n++],
          c = e[n++]
        t[i++] = String.fromCharCode(
          ((o & 15) << 12) | ((u & 63) << 6) | (c & 63)
        )
      }
    }
    return t.join('')
  },
  M1 = {
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
        const u = e[o],
          c = o + 1 < e.length,
          d = c ? e[o + 1] : 0,
          g = o + 2 < e.length,
          w = g ? e[o + 2] : 0,
          P = u >> 2,
          O = ((u & 3) << 4) | (d >> 4)
        let k = ((d & 15) << 2) | (w >> 6),
          V = w & 63
        g || ((V = 64), c || (k = 64)), i.push(n[P], n[O], n[k], n[V])
      }
      return i.join('')
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(U1(e), t)
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : gC(this.decodeStringToByteArray(e, t))
    },
    decodeStringToByteArray(e, t) {
      this.init_()
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        i = []
      for (let o = 0; o < e.length; ) {
        const u = n[e.charAt(o++)],
          c = o < e.length ? n[e.charAt(o)] : 0
        ++o
        const d = o < e.length ? n[e.charAt(o)] : 64
        ++o
        const g = o < e.length ? n[e.charAt(o)] : 64
        if ((++o, u == null || c == null || d == null || g == null))
          throw new mC()
        const w = (u << 2) | (c >> 4)
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
class mC extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError')
  }
}
const vC = function (e) {
    const t = U1(e)
    return M1.encodeByteArray(t, !0)
  },
  Sc = function (e) {
    return vC(e).replace(/\./g, '')
  },
  yC = function (e) {
    try {
      return M1.decodeString(e, !0)
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
 */ function bC() {
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
 */ const wC = () => bC().__FIREBASE_DEFAULTS__,
  _C = () => {
    if (typeof process > 'u' || typeof Hv > 'u') return
    const e = Hv.__FIREBASE_DEFAULTS__
    if (e) return JSON.parse(e)
  },
  kC = () => {
    if (typeof document > 'u') return
    let e
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const t = e && yC(e[1])
    return t && JSON.parse(t)
  },
  $1 = () => {
    try {
      return wC() || _C() || kC()
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
      return
    }
  },
  SC = (e) => {
    var t, n
    return (n =
      (t = $1()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e]
  },
  EC = (e) => {
    const t = SC(e)
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
 */ class xC {
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
 */ function CC(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    )
  const n = { alg: 'none', type: 'JWT' },
    i = t || 'demo-project',
    o = e.iat || 0,
    u = e.sub || e.user_id
  if (!u)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
  const c = Object.assign(
    {
      iss: `https://securetoken.google.com/${i}`,
      aud: i,
      iat: o,
      exp: o + 3600,
      auth_time: o,
      sub: u,
      user_id: u,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    e
  )
  return [Sc(JSON.stringify(n)), Sc(JSON.stringify(c)), ''].join('.')
}
function AC() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function LC() {
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
          var u
          t(((u = o.error) === null || u === void 0 ? void 0 : u.message) || '')
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
 */ const PC = 'FirebaseError'
class wo extends Error {
  constructor(t, n, i) {
    super(n),
      (this.code = t),
      (this.customData = i),
      (this.name = PC),
      Object.setPrototypeOf(this, wo.prototype),
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
      u = this.errors[t],
      c = u ? OC(u, i) : 'Error',
      d = `${this.serviceName}: ${c} (${o}).`
    return new wo(o, d, i)
  }
}
function OC(e, t) {
  return e.replace(IC, (n, i) => {
    const o = t[i]
    return o != null ? String(o) : `<${i}?>`
  })
}
const IC = /\{\$([^}]+)}/g
function Od(e, t) {
  if (e === t) return !0
  const n = Object.keys(e),
    i = Object.keys(t)
  for (const o of n) {
    if (!i.includes(o)) return !1
    const u = e[o],
      c = t[o]
    if (Wv(u) && Wv(c)) {
      if (!Od(u, c)) return !1
    } else if (u !== c) return !1
  }
  for (const o of i) if (!n.includes(o)) return !1
  return !0
}
function Wv(e) {
  return e !== null && typeof e == 'object'
}
class Js {
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
 */ class TC {
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
      const i = new xC()
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
      } catch (u) {
        if (o) return null
        throw u
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
      if (RC(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Qi })
        } catch {}
      for (const [n, i] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(n)
        try {
          const u = this.getOrInitializeService({ instanceIdentifier: o })
          i.resolve(u)
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
    for (const [u, c] of this.instancesDeferred.entries()) {
      const d = this.normalizeInstanceIdentifier(u)
      i === d && c.resolve(o)
    }
    return o
  }
  onInit(t, n) {
    var i
    const o = this.normalizeInstanceIdentifier(n),
      u =
        (i = this.onInitCallbacks.get(o)) !== null && i !== void 0
          ? i
          : new Set()
    u.add(t), this.onInitCallbacks.set(o, u)
    const c = this.instances.get(o)
    return (
      c && t(c, o),
      () => {
        u.delete(t)
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
        instanceIdentifier: NC(t),
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
function NC(e) {
  return e === Qi ? void 0 : e
}
function RC(e) {
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
 */ class zC {
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
    const n = new TC(t, this)
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
 */ var ze
;(function (e) {
  ;(e[(e.DEBUG = 0)] = 'DEBUG'),
    (e[(e.VERBOSE = 1)] = 'VERBOSE'),
    (e[(e.INFO = 2)] = 'INFO'),
    (e[(e.WARN = 3)] = 'WARN'),
    (e[(e.ERROR = 4)] = 'ERROR'),
    (e[(e.SILENT = 5)] = 'SILENT')
})(ze || (ze = {}))
const jC = {
    debug: ze.DEBUG,
    verbose: ze.VERBOSE,
    info: ze.INFO,
    warn: ze.WARN,
    error: ze.ERROR,
    silent: ze.SILENT,
  },
  DC = ze.INFO,
  FC = {
    [ze.DEBUG]: 'log',
    [ze.VERBOSE]: 'log',
    [ze.INFO]: 'info',
    [ze.WARN]: 'warn',
    [ze.ERROR]: 'error',
  },
  UC = (e, t, ...n) => {
    if (t < e.logLevel) return
    const i = new Date().toISOString(),
      o = FC[t]
    if (o) console[o](`[${i}]  ${e.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      )
  }
let H1 = class {
  constructor(e) {
    ;(this.name = e),
      (this._logLevel = DC),
      (this._logHandler = UC),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(e) {
    if (!(e in ze))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
    this._logLevel = e
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? jC[e] : e
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
    this._userLogHandler && this._userLogHandler(this, ze.DEBUG, ...e),
      this._logHandler(this, ze.DEBUG, ...e)
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ze.VERBOSE, ...e),
      this._logHandler(this, ze.VERBOSE, ...e)
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ze.INFO, ...e),
      this._logHandler(this, ze.INFO, ...e)
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ze.WARN, ...e),
      this._logHandler(this, ze.WARN, ...e)
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ze.ERROR, ...e),
      this._logHandler(this, ze.ERROR, ...e)
  }
}
const MC = (e, t) => t.some((n) => e instanceof n)
let qv, Kv
function $C() {
  return (
    qv ||
    (qv = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  )
}
function BC() {
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
  Id = new WeakMap(),
  q1 = new WeakMap(),
  Ph = new WeakMap(),
  Ip = new WeakMap()
function VC(e) {
  const t = new Promise((n, i) => {
    const o = () => {
        e.removeEventListener('success', u), e.removeEventListener('error', c)
      },
      u = () => {
        n(vi(e.result)), o()
      },
      c = () => {
        i(e.error), o()
      }
    e.addEventListener('success', u), e.addEventListener('error', c)
  })
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && W1.set(n, e)
      })
      .catch(() => {}),
    Ip.set(t, e),
    t
  )
}
function HC(e) {
  if (Id.has(e)) return
  const t = new Promise((n, i) => {
    const o = () => {
        e.removeEventListener('complete', u),
          e.removeEventListener('error', c),
          e.removeEventListener('abort', c)
      },
      u = () => {
        n(), o()
      },
      c = () => {
        i(e.error || new DOMException('AbortError', 'AbortError')), o()
      }
    e.addEventListener('complete', u),
      e.addEventListener('error', c),
      e.addEventListener('abort', c)
  })
  Id.set(e, t)
}
let Td = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return Id.get(e)
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
function WC(e) {
  Td = e(Td)
}
function qC(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const i = e.call(Oh(this), t, ...n)
        return q1.set(i, t.sort ? t.sort() : [t]), vi(i)
      }
    : BC().includes(e)
    ? function (...t) {
        return e.apply(Oh(this), t), vi(W1.get(this))
      }
    : function (...t) {
        return vi(e.apply(Oh(this), t))
      }
}
function KC(e) {
  return typeof e == 'function'
    ? qC(e)
    : (e instanceof IDBTransaction && HC(e), MC(e, $C()) ? new Proxy(e, Td) : e)
}
function vi(e) {
  if (e instanceof IDBRequest) return VC(e)
  if (Ph.has(e)) return Ph.get(e)
  const t = KC(e)
  return t !== e && (Ph.set(e, t), Ip.set(t, e)), t
}
const Oh = (e) => Ip.get(e)
function QC(e, t, { blocked: n, upgrade: i, blocking: o, terminated: u } = {}) {
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
        u && g.addEventListener('close', () => u()),
          o &&
            g.addEventListener('versionchange', (w) =>
              o(w.oldVersion, w.newVersion, w)
            )
      })
      .catch(() => {}),
    d
  )
}
const GC = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  JC = ['put', 'add', 'delete', 'clear'],
  Ih = new Map()
function Qv(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return
  if (Ih.get(t)) return Ih.get(t)
  const n = t.replace(/FromIndex$/, ''),
    i = t !== n,
    o = JC.includes(n)
  if (
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || GC.includes(n))
  )
    return
  const u = async function (c, ...d) {
    const g = this.transaction(c, o ? 'readwrite' : 'readonly')
    let w = g.store
    return (
      i && (w = w.index(d.shift())),
      (await Promise.all([w[n](...d), o && g.done]))[0]
    )
  }
  return Ih.set(t, u), u
}
WC((e) => ({
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
 */ class YC {
  constructor(t) {
    this.container = t
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((t) => {
        if (XC(t)) {
          const n = t.getImmediate()
          return `${n.library}/${n.version}`
        } else return null
      })
      .filter((t) => t)
      .join(' ')
  }
}
function XC(e) {
  return e.getComponent()?.type === 'VERSION'
}
const Nd = '@firebase/app',
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
 */ const Nr = new H1('@firebase/app'),
  ZC = '@firebase/app-compat',
  e3 = '@firebase/analytics-compat',
  t3 = '@firebase/analytics',
  n3 = '@firebase/app-check-compat',
  r3 = '@firebase/app-check',
  i3 = '@firebase/auth',
  a3 = '@firebase/auth-compat',
  o3 = '@firebase/database',
  s3 = '@firebase/data-connect',
  u3 = '@firebase/database-compat',
  l3 = '@firebase/functions',
  c3 = '@firebase/functions-compat',
  f3 = '@firebase/installations',
  h3 = '@firebase/installations-compat',
  d3 = '@firebase/messaging',
  p3 = '@firebase/messaging-compat',
  g3 = '@firebase/performance',
  m3 = '@firebase/performance-compat',
  v3 = '@firebase/remote-config',
  y3 = '@firebase/remote-config-compat',
  b3 = '@firebase/storage',
  w3 = '@firebase/storage-compat',
  _3 = '@firebase/firestore',
  k3 = '@firebase/vertexai',
  S3 = '@firebase/firestore-compat',
  E3 = 'firebase',
  x3 = '11.0.1'
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
 */ const Rd = '[DEFAULT]',
  C3 = {
    [Nd]: 'fire-core',
    [ZC]: 'fire-core-compat',
    [t3]: 'fire-analytics',
    [e3]: 'fire-analytics-compat',
    [r3]: 'fire-app-check',
    [n3]: 'fire-app-check-compat',
    [i3]: 'fire-auth',
    [a3]: 'fire-auth-compat',
    [o3]: 'fire-rtdb',
    [s3]: 'fire-data-connect',
    [u3]: 'fire-rtdb-compat',
    [l3]: 'fire-fn',
    [c3]: 'fire-fn-compat',
    [f3]: 'fire-iid',
    [h3]: 'fire-iid-compat',
    [d3]: 'fire-fcm',
    [p3]: 'fire-fcm-compat',
    [g3]: 'fire-perf',
    [m3]: 'fire-perf-compat',
    [v3]: 'fire-rc',
    [y3]: 'fire-rc-compat',
    [b3]: 'fire-gcs',
    [w3]: 'fire-gcs-compat',
    [_3]: 'fire-fst',
    [S3]: 'fire-fst-compat',
    [k3]: 'fire-vertex',
    'fire-js': 'fire-js',
    [E3]: 'fire-js-all',
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
 */ const Ec = new Map(),
  A3 = new Map(),
  zd = new Map()
function Jv(e, t) {
  try {
    e.container.addComponent(t)
  } catch (n) {
    Nr.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    )
  }
}
function xc(e) {
  const t = e.name
  if (zd.has(t))
    return (
      Nr.debug(`There were multiple attempts to register component ${t}.`), !1
    )
  zd.set(t, e)
  for (const n of Ec.values()) Jv(n, e)
  for (const n of A3.values()) Jv(n, e)
  return !0
}
function L3(e, t) {
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
 */ const P3 = {
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
  yi = new V1('app', 'Firebase', P3)
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
 */ class O3 {
  constructor(t, n, i) {
    ;(this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = i),
      this.container.addComponent(new Js('app', () => this, 'PUBLIC'))
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
 */ const I3 = x3
function K1(e, t = {}) {
  let n = e
  typeof t != 'object' && (t = { name: t })
  const i = Object.assign({ name: Rd, automaticDataCollectionEnabled: !1 }, t),
    o = i.name
  if (typeof o != 'string' || !o)
    throw yi.create('bad-app-name', { appName: String(o) })
  if ((n || (n = B1()), !n)) throw yi.create('no-options')
  const u = Ec.get(o)
  if (u) {
    if (Od(n, u.options) && Od(i, u.config)) return u
    throw yi.create('duplicate-app', { appName: o })
  }
  const c = new zC(o)
  for (const g of zd.values()) c.addComponent(g)
  const d = new O3(n, i, c)
  return Ec.set(o, d), d
}
function T3(e = Rd) {
  const t = Ec.get(e)
  if (!t && e === Rd && B1()) return K1()
  if (!t) throw yi.create('no-app', { appName: e })
  return t
}
function so(e, t, n) {
  var i
  let o = (i = C3[e]) !== null && i !== void 0 ? i : e
  n && (o += `-${n}`)
  const u = o.match(/\s|\//),
    c = t.match(/\s|\//)
  if (u || c) {
    const d = [`Unable to register library "${o}" with version "${t}":`]
    u &&
      d.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`
      ),
      u && c && d.push('and'),
      c &&
        d.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Nr.warn(d.join(' '))
    return
  }
  xc(new Js(`${o}-version`, () => ({ library: o, version: t }), 'VERSION'))
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
 */ const N3 = 'firebase-heartbeat-database',
  R3 = 1,
  Ys = 'firebase-heartbeat-store'
let Th = null
function Q1() {
  return (
    Th ||
      (Th = QC(N3, R3, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Ys)
              } catch (n) {
                console.warn(n)
              }
          }
        },
      }).catch((e) => {
        throw yi.create('idb-open', { originalErrorMessage: e.message })
      })),
    Th
  )
}
async function z3(e) {
  try {
    const t = (await Q1()).transaction(Ys),
      n = await t.objectStore(Ys).get(G1(e))
    return await t.done, n
  } catch (t) {
    if (t instanceof wo) Nr.warn(t.message)
    else {
      const n = yi.create('idb-get', { originalErrorMessage: t?.message })
      Nr.warn(n.message)
    }
  }
}
async function Yv(e, t) {
  try {
    const n = (await Q1()).transaction(Ys, 'readwrite')
    await n.objectStore(Ys).put(t, G1(e)), await n.done
  } catch (n) {
    if (n instanceof wo) Nr.warn(n.message)
    else {
      const i = yi.create('idb-set', { originalErrorMessage: n?.message })
      Nr.warn(i.message)
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
 */ const j3 = 1024,
  D3 = 30 * 24 * 60 * 60 * 1e3
class F3 {
  constructor(t) {
    ;(this.container = t), (this._heartbeatsCache = null)
    const n = this.container.getProvider('app').getImmediate()
    ;(this._storage = new M3(n)),
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
        this._heartbeatsCache.heartbeats.some((u) => u.date === o)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: o, agent: i }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((u) => {
              const c = new Date(u.date).valueOf()
              return Date.now() - c <= D3
            })),
          this._storage.overwrite(this._heartbeatsCache))
    } catch (i) {
      Nr.warn(i)
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
        { heartbeatsToSend: i, unsentEntries: o } = U3(
          this._heartbeatsCache.heartbeats
        ),
        u = Sc(JSON.stringify({ version: 2, heartbeats: i }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        o.length > 0
          ? ((this._heartbeatsCache.heartbeats = o),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        u
      )
    } catch (n) {
      return Nr.warn(n), ''
    }
  }
}
function Xv() {
  return new Date().toISOString().substring(0, 10)
}
function U3(e, t = j3) {
  const n = []
  let i = e.slice()
  for (const o of e) {
    const u = n.find((c) => c.agent === o.agent)
    if (u) {
      if ((u.dates.push(o.date), Zv(n) > t)) {
        u.dates.pop()
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
class M3 {
  constructor(t) {
    ;(this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
  }
  async runIndexedDBEnvironmentCheck() {
    return AC()
      ? LC()
          .then(() => !0)
          .catch(() => !1)
      : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await z3(this.app)
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
  return Sc(JSON.stringify({ version: 2, heartbeats: e })).length
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
 */ function $3(e) {
  xc(new Js('platform-logger', (t) => new YC(t), 'PRIVATE')),
    xc(new Js('heartbeat', (t) => new F3(t), 'PRIVATE')),
    so(Nd, Gv, e),
    so(Nd, Gv, 'esm2017'),
    so('fire-js', '')
}
$3('')
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
      (S.C = function (L, R, F) {
        for (
          var A = Array(arguments.length - 2), Ze = 2;
          Ze < arguments.length;
          Ze++
        )
          A[Ze - 2] = arguments[Ze]
        return _.prototype[R].apply(L, A)
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
    var L = Array(16)
    if (typeof _ == 'string')
      for (var R = 0; 16 > R; ++R)
        L[R] =
          _.charCodeAt(C++) |
          (_.charCodeAt(C++) << 8) |
          (_.charCodeAt(C++) << 16) |
          (_.charCodeAt(C++) << 24)
    else
      for (R = 0; 16 > R; ++R)
        L[R] = _[C++] | (_[C++] << 8) | (_[C++] << 16) | (_[C++] << 24)
    ;(_ = S.g[0]), (C = S.g[1]), (R = S.g[2])
    var F = S.g[3],
      A = (_ + (F ^ (C & (R ^ F))) + L[0] + 3614090360) & 4294967295
    ;(_ = C + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (F + (R ^ (_ & (C ^ R))) + L[1] + 3905402710) & 4294967295),
      (F = _ + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (R + (C ^ (F & (_ ^ C))) + L[2] + 606105819) & 4294967295),
      (R = F + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (C + (_ ^ (R & (F ^ _))) + L[3] + 3250441966) & 4294967295),
      (C = R + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (_ + (F ^ (C & (R ^ F))) + L[4] + 4118548399) & 4294967295),
      (_ = C + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (F + (R ^ (_ & (C ^ R))) + L[5] + 1200080426) & 4294967295),
      (F = _ + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (R + (C ^ (F & (_ ^ C))) + L[6] + 2821735955) & 4294967295),
      (R = F + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (C + (_ ^ (R & (F ^ _))) + L[7] + 4249261313) & 4294967295),
      (C = R + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (_ + (F ^ (C & (R ^ F))) + L[8] + 1770035416) & 4294967295),
      (_ = C + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (F + (R ^ (_ & (C ^ R))) + L[9] + 2336552879) & 4294967295),
      (F = _ + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (R + (C ^ (F & (_ ^ C))) + L[10] + 4294925233) & 4294967295),
      (R = F + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (C + (_ ^ (R & (F ^ _))) + L[11] + 2304563134) & 4294967295),
      (C = R + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (_ + (F ^ (C & (R ^ F))) + L[12] + 1804603682) & 4294967295),
      (_ = C + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (F + (R ^ (_ & (C ^ R))) + L[13] + 4254626195) & 4294967295),
      (F = _ + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (R + (C ^ (F & (_ ^ C))) + L[14] + 2792965006) & 4294967295),
      (R = F + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (C + (_ ^ (R & (F ^ _))) + L[15] + 1236535329) & 4294967295),
      (C = R + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (_ + (R ^ (F & (C ^ R))) + L[1] + 4129170786) & 4294967295),
      (_ = C + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (F + (C ^ (R & (_ ^ C))) + L[6] + 3225465664) & 4294967295),
      (F = _ + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (R + (_ ^ (C & (F ^ _))) + L[11] + 643717713) & 4294967295),
      (R = F + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (C + (F ^ (_ & (R ^ F))) + L[0] + 3921069994) & 4294967295),
      (C = R + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (_ + (R ^ (F & (C ^ R))) + L[5] + 3593408605) & 4294967295),
      (_ = C + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (F + (C ^ (R & (_ ^ C))) + L[10] + 38016083) & 4294967295),
      (F = _ + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (R + (_ ^ (C & (F ^ _))) + L[15] + 3634488961) & 4294967295),
      (R = F + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (C + (F ^ (_ & (R ^ F))) + L[4] + 3889429448) & 4294967295),
      (C = R + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (_ + (R ^ (F & (C ^ R))) + L[9] + 568446438) & 4294967295),
      (_ = C + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (F + (C ^ (R & (_ ^ C))) + L[14] + 3275163606) & 4294967295),
      (F = _ + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (R + (_ ^ (C & (F ^ _))) + L[3] + 4107603335) & 4294967295),
      (R = F + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (C + (F ^ (_ & (R ^ F))) + L[8] + 1163531501) & 4294967295),
      (C = R + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (_ + (R ^ (F & (C ^ R))) + L[13] + 2850285829) & 4294967295),
      (_ = C + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (F + (C ^ (R & (_ ^ C))) + L[2] + 4243563512) & 4294967295),
      (F = _ + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (R + (_ ^ (C & (F ^ _))) + L[7] + 1735328473) & 4294967295),
      (R = F + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (C + (F ^ (_ & (R ^ F))) + L[12] + 2368359562) & 4294967295),
      (C = R + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (_ + (C ^ R ^ F) + L[5] + 4294588738) & 4294967295),
      (_ = C + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (F + (_ ^ C ^ R) + L[8] + 2272392833) & 4294967295),
      (F = _ + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (R + (F ^ _ ^ C) + L[11] + 1839030562) & 4294967295),
      (R = F + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (C + (R ^ F ^ _) + L[14] + 4259657740) & 4294967295),
      (C = R + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (_ + (C ^ R ^ F) + L[1] + 2763975236) & 4294967295),
      (_ = C + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (F + (_ ^ C ^ R) + L[4] + 1272893353) & 4294967295),
      (F = _ + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (R + (F ^ _ ^ C) + L[7] + 4139469664) & 4294967295),
      (R = F + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (C + (R ^ F ^ _) + L[10] + 3200236656) & 4294967295),
      (C = R + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (_ + (C ^ R ^ F) + L[13] + 681279174) & 4294967295),
      (_ = C + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (F + (_ ^ C ^ R) + L[0] + 3936430074) & 4294967295),
      (F = _ + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (R + (F ^ _ ^ C) + L[3] + 3572445317) & 4294967295),
      (R = F + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (C + (R ^ F ^ _) + L[6] + 76029189) & 4294967295),
      (C = R + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (_ + (C ^ R ^ F) + L[9] + 3654602809) & 4294967295),
      (_ = C + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (F + (_ ^ C ^ R) + L[12] + 3873151461) & 4294967295),
      (F = _ + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (R + (F ^ _ ^ C) + L[15] + 530742520) & 4294967295),
      (R = F + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (C + (R ^ F ^ _) + L[2] + 3299628645) & 4294967295),
      (C = R + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (_ + (R ^ (C | ~F)) + L[0] + 4096336452) & 4294967295),
      (_ = C + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (F + (C ^ (_ | ~R)) + L[7] + 1126891415) & 4294967295),
      (F = _ + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (R + (_ ^ (F | ~C)) + L[14] + 2878612391) & 4294967295),
      (R = F + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (C + (F ^ (R | ~_)) + L[5] + 4237533241) & 4294967295),
      (C = R + (((A << 21) & 4294967295) | (A >>> 11))),
      (A = (_ + (R ^ (C | ~F)) + L[12] + 1700485571) & 4294967295),
      (_ = C + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (F + (C ^ (_ | ~R)) + L[3] + 2399980690) & 4294967295),
      (F = _ + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (R + (_ ^ (F | ~C)) + L[10] + 4293915773) & 4294967295),
      (R = F + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (C + (F ^ (R | ~_)) + L[1] + 2240044497) & 4294967295),
      (C = R + (((A << 21) & 4294967295) | (A >>> 11))),
      (A = (_ + (R ^ (C | ~F)) + L[8] + 1873313359) & 4294967295),
      (_ = C + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (F + (C ^ (_ | ~R)) + L[15] + 4264355552) & 4294967295),
      (F = _ + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (R + (_ ^ (F | ~C)) + L[6] + 2734768916) & 4294967295),
      (R = F + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (C + (F ^ (R | ~_)) + L[13] + 1309151649) & 4294967295),
      (C = R + (((A << 21) & 4294967295) | (A >>> 11))),
      (A = (_ + (R ^ (C | ~F)) + L[4] + 4149444226) & 4294967295),
      (_ = C + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (F + (C ^ (_ | ~R)) + L[11] + 3174756917) & 4294967295),
      (F = _ + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (R + (_ ^ (F | ~C)) + L[2] + 718787259) & 4294967295),
      (R = F + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (C + (F ^ (R | ~_)) + L[9] + 3951481745) & 4294967295),
      (S.g[0] = (S.g[0] + _) & 4294967295),
      (S.g[1] =
        (S.g[1] + (R + (((A << 21) & 4294967295) | (A >>> 11)))) & 4294967295),
      (S.g[2] = (S.g[2] + R) & 4294967295),
      (S.g[3] = (S.g[3] + F) & 4294967295)
  }
  ;(i.prototype.u = function (S, _) {
    _ === void 0 && (_ = S.length)
    for (var C = _ - this.blockSize, L = this.B, R = this.h, F = 0; F < _; ) {
      if (R == 0) for (; F <= C; ) o(this, S, F), (F += this.blockSize)
      if (typeof S == 'string') {
        for (; F < _; )
          if (((L[R++] = S.charCodeAt(F++)), R == this.blockSize)) {
            o(this, L), (R = 0)
            break
          }
      } else
        for (; F < _; )
          if (((L[R++] = S[F++]), R == this.blockSize)) {
            o(this, L), (R = 0)
            break
          }
    }
    ;(this.h = R), (this.o += _)
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
        for (var L = 0; 32 > L; L += 8) S[C++] = (this.g[_] >>> L) & 255
      return S
    })
  function u(S, _) {
    var C = d
    return Object.prototype.hasOwnProperty.call(C, S) ? C[S] : (C[S] = _(S))
  }
  function c(S, _) {
    this.h = _
    for (var C = [], L = !0, R = S.length - 1; 0 <= R; R--) {
      var F = S[R] | 0
      ;(L && F == _) || ((C[R] = F), (L = !1))
    }
    this.g = C
  }
  var d = {}
  function g(S) {
    return -128 <= S && 128 > S
      ? u(S, function (_) {
          return new c([_ | 0], 0 > _ ? -1 : 0)
        })
      : new c([S | 0], 0 > S ? -1 : 0)
  }
  function w(S) {
    if (isNaN(S) || !isFinite(S)) return O
    if (0 > S) return J(w(-S))
    for (var _ = [], C = 1, L = 0; S >= C; L++)
      (_[L] = (S / C) | 0), (C *= 4294967296)
    return new c(_, 0)
  }
  function P(S, _) {
    if (S.length == 0) throw Error('number format error: empty string')
    if (((_ = _ || 10), 2 > _ || 36 < _))
      throw Error('radix out of range: ' + _)
    if (S.charAt(0) == '-') return J(P(S.substring(1), _))
    if (0 <= S.indexOf('-'))
      throw Error('number format error: interior "-" character')
    for (var C = w(Math.pow(_, 8)), L = O, R = 0; R < S.length; R += 8) {
      var F = Math.min(8, S.length - R),
        A = parseInt(S.substring(R, R + F), _)
      8 > F
        ? ((F = w(Math.pow(_, F))), (L = L.j(F).add(w(A))))
        : ((L = L.j(C)), (L = L.add(w(A))))
    }
    return L
  }
  var O = g(0),
    k = g(1),
    V = g(16777216)
  ;(e = c.prototype),
    (e.m = function () {
      if (W(this)) return -J(this).m()
      for (var S = 0, _ = 1, C = 0; C < this.g.length; C++) {
        var L = this.i(C)
        ;(S += (0 <= L ? L : 4294967296 + L) * _), (_ *= 4294967296)
      }
      return S
    }),
    (e.toString = function (S) {
      if (((S = S || 10), 2 > S || 36 < S))
        throw Error('radix out of range: ' + S)
      if (U(this)) return '0'
      if (W(this)) return '-' + J(this).toString(S)
      for (var _ = w(Math.pow(S, 6)), C = this, L = ''; ; ) {
        var R = B(C, _).g
        C = T(C, R.j(_))
        var F = ((0 < C.g.length ? C.g[0] : C.h) >>> 0).toString(S)
        if (((C = R), U(C))) return F + L
        for (; 6 > F.length; ) F = '0' + F
        L = F + L
      }
    }),
    (e.i = function (S) {
      return 0 > S ? 0 : S < this.g.length ? this.g[S] : this.h
    })
  function U(S) {
    if (S.h != 0) return !1
    for (var _ = 0; _ < S.g.length; _++) if (S.g[_] != 0) return !1
    return !0
  }
  function W(S) {
    return S.h == -1
  }
  e.l = function (S) {
    return (S = T(this, S)), W(S) ? -1 : U(S) ? 0 : 1
  }
  function J(S) {
    for (var _ = S.g.length, C = [], L = 0; L < _; L++) C[L] = ~S.g[L]
    return new c(C, ~S.h).add(k)
  }
  ;(e.abs = function () {
    return W(this) ? J(this) : this
  }),
    (e.add = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], L = 0, R = 0;
        R <= _;
        R++
      ) {
        var F = L + (this.i(R) & 65535) + (S.i(R) & 65535),
          A = (F >>> 16) + (this.i(R) >>> 16) + (S.i(R) >>> 16)
        ;(L = A >>> 16), (F &= 65535), (A &= 65535), (C[R] = (A << 16) | F)
      }
      return new c(C, C[C.length - 1] & -2147483648 ? -1 : 0)
    })
  function T(S, _) {
    return S.add(J(_))
  }
  e.j = function (S) {
    if (U(this) || U(S)) return O
    if (W(this)) return W(S) ? J(this).j(J(S)) : J(J(this).j(S))
    if (W(S)) return J(this.j(J(S)))
    if (0 > this.l(V) && 0 > S.l(V)) return w(this.m() * S.m())
    for (var _ = this.g.length + S.g.length, C = [], L = 0; L < 2 * _; L++)
      C[L] = 0
    for (L = 0; L < this.g.length; L++)
      for (var R = 0; R < S.g.length; R++) {
        var F = this.i(L) >>> 16,
          A = this.i(L) & 65535,
          Ze = S.i(R) >>> 16,
          $t = S.i(R) & 65535
        ;(C[2 * L + 2 * R] += A * $t),
          x(C, 2 * L + 2 * R),
          (C[2 * L + 2 * R + 1] += F * $t),
          x(C, 2 * L + 2 * R + 1),
          (C[2 * L + 2 * R + 1] += A * Ze),
          x(C, 2 * L + 2 * R + 1),
          (C[2 * L + 2 * R + 2] += F * Ze),
          x(C, 2 * L + 2 * R + 2)
      }
    for (L = 0; L < _; L++) C[L] = (C[2 * L + 1] << 16) | C[2 * L]
    for (L = _; L < 2 * _; L++) C[L] = 0
    return new c(C, 0)
  }
  function x(S, _) {
    for (; (S[_] & 65535) != S[_]; )
      (S[_ + 1] += S[_] >>> 16), (S[_] &= 65535), _++
  }
  function N(S, _) {
    ;(this.g = S), (this.h = _)
  }
  function B(S, _) {
    if (U(_)) throw Error('division by zero')
    if (U(S)) return new N(O, O)
    if (W(S)) return (_ = B(J(S), _)), new N(J(_.g), J(_.h))
    if (W(_)) return (_ = B(S, J(_))), new N(J(_.g), _.h)
    if (30 < S.g.length) {
      if (W(S) || W(_))
        throw Error('slowDivide_ only works with positive integers.')
      for (var C = k, L = _; 0 >= L.l(S); ) (C = G(C)), (L = G(L))
      var R = X(C, 1),
        F = X(L, 1)
      for (L = X(L, 2), C = X(C, 2); !U(L); ) {
        var A = F.add(L)
        0 >= A.l(S) && ((R = R.add(C)), (F = A)), (L = X(L, 1)), (C = X(C, 1))
      }
      return (_ = T(S, R.j(_))), new N(R, _)
    }
    for (R = O; 0 <= S.l(_); ) {
      for (
        C = Math.max(1, Math.floor(S.m() / _.m())),
          L = Math.ceil(Math.log(C) / Math.LN2),
          L = 48 >= L ? 1 : Math.pow(2, L - 48),
          F = w(C),
          A = F.j(_);
        W(A) || 0 < A.l(S);

      )
        (C -= L), (F = w(C)), (A = F.j(_))
      U(F) && (F = k), (R = R.add(F)), (S = T(S, A))
    }
    return new N(R, S)
  }
  ;(e.A = function (S) {
    return B(this, S).h
  }),
    (e.and = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], L = 0;
        L < _;
        L++
      )
        C[L] = this.i(L) & S.i(L)
      return new c(C, this.h & S.h)
    }),
    (e.or = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], L = 0;
        L < _;
        L++
      )
        C[L] = this.i(L) | S.i(L)
      return new c(C, this.h | S.h)
    }),
    (e.xor = function (S) {
      for (
        var _ = Math.max(this.g.length, S.g.length), C = [], L = 0;
        L < _;
        L++
      )
        C[L] = this.i(L) ^ S.i(L)
      return new c(C, this.h ^ S.h)
    })
  function G(S) {
    for (var _ = S.g.length + 1, C = [], L = 0; L < _; L++)
      C[L] = (S.i(L) << 1) | (S.i(L - 1) >>> 31)
    return new c(C, S.h)
  }
  function X(S, _) {
    var C = _ >> 5
    _ %= 32
    for (var L = S.g.length - C, R = [], F = 0; F < L; F++)
      R[F] =
        0 < _ ? (S.i(F + C) >>> _) | (S.i(F + C + 1) << (32 - _)) : S.i(F + C)
    return new c(R, S.h)
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
var Fl =
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
      typeof Fl == 'object' && Fl,
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
  function u(s, f) {
    s instanceof String && (s += '')
    var p = 0,
      y = !1,
      D = {
        next: function () {
          if (!y && p < s.length) {
            var M = p++
            return { value: f(M, s[M]), done: !1 }
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
        return u(this, function (f, p) {
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
  function U(s, f) {
    function p() {}
    ;(p.prototype = f.prototype),
      (s.aa = f.prototype),
      (s.prototype = new p()),
      (s.prototype.constructor = s),
      (s.Qb = function (y, D, M) {
        for (
          var ee = Array(arguments.length - 2), Re = 2;
          Re < arguments.length;
          Re++
        )
          ee[Re - 2] = arguments[Re]
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
          M = y.length || 0
        s.length = D + M
        for (let ee = 0; ee < M; ee++) s[D + ee] = y[ee]
      } else s.push(y)
    }
  }
  class T {
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
  function N() {
    var s = d.navigator
    return s && (s = s.userAgent) ? s : ''
  }
  function B(s) {
    return B[' '](s), s
  }
  B[' '] = function () {}
  var G =
    N().indexOf('Gecko') != -1 &&
    !(N().toLowerCase().indexOf('webkit') != -1 && N().indexOf('Edge') == -1) &&
    !(N().indexOf('Trident') != -1 || N().indexOf('MSIE') != -1) &&
    N().indexOf('Edge') == -1
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
  function L(s, f) {
    let p, y
    for (let D = 1; D < arguments.length; D++) {
      y = arguments[D]
      for (p in y) s[p] = y[p]
      for (let M = 0; M < C.length; M++)
        (p = C[M]), Object.prototype.hasOwnProperty.call(y, p) && (s[p] = y[p])
    }
  }
  function R(s) {
    var f = 1
    s = s.split(':')
    const p = []
    for (; 0 < f && s.length; ) p.push(s.shift()), f--
    return s.length && p.push(s.join(':')), p
  }
  function F(s) {
    d.setTimeout(() => {
      throw s
    }, 0)
  }
  function A() {
    var s = ae
    let f = null
    return (
      s.g &&
        ((f = s.g), (s.g = s.g.next), s.g || (s.h = null), (f.next = null)),
      f
    )
  }
  class Ze {
    constructor() {
      this.h = this.g = null
    }
    add(f, p) {
      const y = $t.get()
      y.set(f, p), this.h ? (this.h.next = y) : (this.g = y), (this.h = y)
    }
  }
  var $t = new T(
    () => new Hn(),
    (s) => s.reset()
  )
  class Hn {
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
  let xe,
    Z = !1,
    ae = new Ze(),
    le = () => {
      const s = d.Promise.resolve(void 0)
      xe = () => {
        s.then(we)
      }
    }
  var we = () => {
    for (var s; (s = A()); ) {
      try {
        s.h.call(s.g)
      } catch (p) {
        F(p)
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
  function Ve(s, f) {
    ;(this.type = s), (this.g = this.target = f), (this.defaultPrevented = !1)
  }
  Ve.prototype.h = function () {
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
  function yt(s, f) {
    if (
      (Ve.call(this, s ? s.type : ''),
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
        s.defaultPrevented && yt.aa.h.call(this)
    }
  }
  U(yt, Ve)
  var Bt = { 2: 'touch', 3: 'pen', 4: 'mouse' }
  yt.prototype.h = function () {
    yt.aa.h.call(this)
    var s = this.i
    s.preventDefault ? s.preventDefault() : (s.returnValue = !1)
  }
  var dn = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
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
  function ua(s) {
    ;(s.da = !0),
      (s.listener = null),
      (s.proxy = null),
      (s.src = null),
      (s.ha = null)
  }
  function nr(s) {
    ;(this.src = s), (this.g = {}), (this.h = 0)
  }
  nr.prototype.add = function (s, f, p, y, D) {
    var M = s.toString()
    ;(s = this.g[M]), s || ((s = this.g[M] = []), this.h++)
    var ee = la(s, f, y, D)
    return (
      -1 < ee
        ? ((f = s[ee]), p || (f.fa = !1))
        : ((f = new xi(f, this.src, M, !!y, D)), (f.fa = p), s.push(f)),
      f
    )
  }
  function zr(s, f) {
    var p = f.type
    if (p in s.g) {
      var y = s.g[p],
        D = Array.prototype.indexOf.call(y, f, void 0),
        M
      ;(M = 0 <= D) && Array.prototype.splice.call(y, D, 1),
        M && (ua(f), s.g[p].length == 0 && (delete s.g[p], s.h--))
    }
  }
  function la(s, f, p, y) {
    for (var D = 0; D < s.length; ++D) {
      var M = s[D]
      if (!M.da && M.listener == f && M.capture == !!p && M.ha == y) return D
    }
    return -1
  }
  var It = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    rr = {}
  function au(s, f, p, y, D) {
    if (y && y.once) return su(s, f, p, y, D)
    if (Array.isArray(f)) {
      for (var M = 0; M < f.length; M++) au(s, f[M], p, y, D)
      return null
    }
    return (
      (p = ko(p)),
      s && s[dn]
        ? s.K(f, p, w(y) ? !!y.capture : !!y, D)
        : pn(s, f, p, !1, y, D)
    )
  }
  function pn(s, f, p, y, D, M) {
    if (!f) throw Error('Invalid event type')
    var ee = w(D) ? !!D.capture : !!D,
      Re = _o(s)
    if ((Re || (s[It] = Re = new nr(s)), (p = Re.add(f, p, y, ee, M)), p.proxy))
      return p
    if (
      ((y = ou()),
      (p.proxy = y),
      (y.src = s),
      (y.listener = p),
      s.addEventListener)
    )
      Pn || (D = ee),
        D === void 0 && (D = !1),
        s.addEventListener(f.toString(), y, D)
    else if (s.attachEvent) s.attachEvent(Dr(f.toString()), y)
    else if (s.addListener && s.removeListener) s.addListener(y)
    else throw Error('addEventListener and attachEvent are unavailable.')
    return p
  }
  function ou() {
    function s(p) {
      return f.call(s.src, s.listener, p)
    }
    const f = ca
    return s
  }
  function su(s, f, p, y, D) {
    if (Array.isArray(f)) {
      for (var M = 0; M < f.length; M++) su(s, f[M], p, y, D)
      return null
    }
    return (
      (p = ko(p)),
      s && s[dn]
        ? s.L(f, p, w(y) ? !!y.capture : !!y, D)
        : pn(s, f, p, !0, y, D)
    )
  }
  function jr(s, f, p, y, D) {
    if (Array.isArray(f))
      for (var M = 0; M < f.length; M++) jr(s, f[M], p, y, D)
    else
      (y = w(y) ? !!y.capture : !!y),
        (p = ko(p)),
        s && s[dn]
          ? ((s = s.i),
            (f = String(f).toString()),
            f in s.g &&
              ((M = s.g[f]),
              (p = la(M, p, y, D)),
              -1 < p &&
                (ua(M[p]),
                Array.prototype.splice.call(M, p, 1),
                M.length == 0 && (delete s.g[f], s.h--))))
          : s &&
            (s = _o(s)) &&
            ((f = s.g[f.toString()]),
            (s = -1),
            f && (s = la(f, p, y, D)),
            (p = -1 < s ? f[s] : null) && Tt(p))
  }
  function Tt(s) {
    if (typeof s != 'number' && s && !s.da) {
      var f = s.src
      if (f && f[dn]) zr(f.i, s)
      else {
        var p = s.type,
          y = s.proxy
        f.removeEventListener
          ? f.removeEventListener(p, y, s.capture)
          : f.detachEvent
          ? f.detachEvent(Dr(p), y)
          : f.addListener && f.removeListener && f.removeListener(y),
          (p = _o(f))
            ? (zr(p, s), p.h == 0 && ((p.src = null), (f[It] = null)))
            : ua(s)
      }
    }
  }
  function Dr(s) {
    return s in rr ? rr[s] : (rr[s] = 'on' + s)
  }
  function ca(s, f) {
    if (s.da) s = !0
    else {
      f = new yt(f, this)
      var p = s.listener,
        y = s.ha || s.src
      s.fa && Tt(s), (s = p.call(y, f))
    }
    return s
  }
  function _o(s) {
    return (s = s[It]), s instanceof nr ? s : null
  }
  var ir = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  function ko(s) {
    return typeof s == 'function'
      ? s
      : (s[ir] ||
          (s[ir] = function (f) {
            return s.handleEvent(f)
          }),
        s[ir])
  }
  function Ge() {
    Pe.call(this), (this.i = new nr(this)), (this.M = this), (this.F = null)
  }
  U(Ge, Pe),
    (Ge.prototype[dn] = !0),
    (Ge.prototype.removeEventListener = function (s, f, p, y) {
      jr(this, s, f, p, y)
    })
  function Je(s, f) {
    var p,
      y = s.F
    if (y) for (p = []; y; y = y.F) p.push(y)
    if (((s = s.M), (y = f.type || f), typeof f == 'string')) f = new Ve(f, s)
    else if (f instanceof Ve) f.target = f.target || s
    else {
      var D = f
      ;(f = new Ve(y, s)), L(f, D)
    }
    if (((D = !0), p))
      for (var M = p.length - 1; 0 <= M; M--) {
        var ee = (f.g = p[M])
        D = Fr(ee, y, !0, f) && D
      }
    if (
      ((ee = f.g = s),
      (D = Fr(ee, y, !0, f) && D),
      (D = Fr(ee, y, !1, f) && D),
      p)
    )
      for (M = 0; M < p.length; M++)
        (ee = f.g = p[M]), (D = Fr(ee, y, !1, f) && D)
  }
  ;(Ge.prototype.N = function () {
    if ((Ge.aa.N.call(this), this.i)) {
      var s = this.i,
        f
      for (f in s.g) {
        for (var p = s.g[f], y = 0; y < p.length; y++) ua(p[y])
        delete s.g[f], s.h--
      }
    }
    this.F = null
  }),
    (Ge.prototype.K = function (s, f, p, y) {
      return this.i.add(String(s), f, !1, p, y)
    }),
    (Ge.prototype.L = function (s, f, p, y) {
      return this.i.add(String(s), f, !0, p, y)
    })
  function Fr(s, f, p, y) {
    if (((f = s.i.g[String(f)]), !f)) return !0
    f = f.concat()
    for (var D = !0, M = 0; M < f.length; ++M) {
      var ee = f[M]
      if (ee && !ee.da && ee.capture == p) {
        var Re = ee.listener,
          at = ee.ha || ee.src
        ee.fa && zr(s.i, ee), (D = Re.call(at, y) !== !1 && D)
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
  class So extends Pe {
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
  function ar(s) {
    Pe.call(this), (this.h = s), (this.g = {})
  }
  U(ar, Pe)
  var da = []
  function pa(s) {
    X(
      s.g,
      function (f, p) {
        this.g.hasOwnProperty(p) && Tt(f)
      },
      s
    ),
      (s.g = {})
  }
  ;(ar.prototype.N = function () {
    ar.aa.N.call(this), pa(this)
  }),
    (ar.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented')
    })
  var Ci = d.JSON.stringify,
    Eo = d.JSON.parse,
    Gc = class {
      stringify(s) {
        return d.JSON.stringify(s, void 0)
      }
      parse(s) {
        return d.JSON.parse(s, void 0)
      }
    }
  function xo() {}
  xo.prototype.h = null
  function uu(s) {
    return s.h || (s.h = s.i())
  }
  var Ai = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' }
  function ga() {
    Ve.call(this, 'd')
  }
  U(ga, Ve)
  function Co() {
    Ve.call(this, 'c')
  }
  U(Co, Ve)
  var Ur = {},
    lu = null
  function Ao() {
    return (lu = lu || new Ge())
  }
  Ur.La = 'serverreachability'
  function Lo(s) {
    Ve.call(this, Ur.La, s)
  }
  U(Lo, Ve)
  function Li(s) {
    const f = Ao()
    Je(f, new Lo(f))
  }
  Ur.STAT_EVENT = 'statevent'
  function cu(s, f) {
    Ve.call(this, Ur.STAT_EVENT, s), (this.stat = f)
  }
  U(cu, Ve)
  function dt(s) {
    const f = Ao()
    Je(f, new cu(f, s))
  }
  Ur.Ma = 'timingevent'
  function ma(s, f) {
    Ve.call(this, Ur.Ma, s), (this.size = f)
  }
  U(ma, Ve)
  function Pi(s, f) {
    if (typeof s != 'function')
      throw Error('Fn must not be null and must be a function')
    return d.setTimeout(function () {
      s()
    }, f)
  }
  function or() {
    this.g = !0
  }
  or.prototype.xa = function () {
    this.g = !1
  }
  function Jc(s, f, p, y, D, M) {
    s.info(function () {
      if (s.g)
        if (M)
          for (var ee = '', Re = M.split('&'), at = 0; at < Re.length; at++) {
            var ke = Re[at].split('=')
            if (1 < ke.length) {
              var rt = ke[0]
              ke = ke[1]
              var kt = rt.split('_')
              ee =
                2 <= kt.length && kt[1] == 'type'
                  ? ee + (rt + '=' + ke + '&')
                  : ee + (rt + '=redacted&')
            }
          }
        else ee = null
      else ee = M
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
  function Yc(s, f, p, y, D, M, ee) {
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
        M +
        ' ' +
        ee
      )
    })
  }
  function Mr(s, f, p, y) {
    s.info(function () {
      return 'XMLHTTP TEXT (' + f + '): ' + Zc(s, p) + (y ? ' ' + y : '')
    })
  }
  function Xc(s, f) {
    s.info(function () {
      return 'TIMEOUT: ' + f
    })
  }
  or.prototype.info = function () {}
  function Zc(s, f) {
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
                var M = D[0]
                if (M != 'noop' && M != 'stop' && M != 'close')
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
  var Po
  function va() {}
  U(va, xo),
    (va.prototype.g = function () {
      return new XMLHttpRequest()
    }),
    (va.prototype.i = function () {
      return {}
    }),
    (Po = new va())
  function Wn(s, f, p, y) {
    ;(this.j = s),
      (this.i = f),
      (this.l = p),
      (this.R = y || 1),
      (this.U = new ar(this)),
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
      (this.h = new Oo())
  }
  function Oo() {
    ;(this.i = null), (this.g = ''), (this.h = !1)
  }
  var fu = {},
    Io = {}
  function To(s, f, p) {
    ;(s.L = 1), (s.v = wa(mn(f))), (s.m = p), (s.P = !0), hu(s, null)
  }
  function hu(s, f) {
    ;(s.F = Date.now()), sr(s), (s.A = mn(s.v))
    var p = s.A,
      y = s.R
    Array.isArray(y) || (y = [String(y)]),
      Cu(p.i, 't', y),
      (s.C = 0),
      (p = s.j.J),
      (s.h = new Oo()),
      (s.g = zu(s.j, p ? f : null, !s.m)),
      0 < s.O && (s.M = new So(k(s.Y, s, s.g), s.O)),
      (f = s.U),
      (p = s.g),
      (y = s.ca)
    var D = 'readystatechange'
    Array.isArray(D) || (D && (da[0] = D.toString()), (D = da))
    for (var M = 0; M < D.length; M++) {
      var ee = au(p, D[M], y || f.handleEvent, !1, f.h || f)
      if (!ee) break
      f.g[ee.key] = ee
    }
    ;(f = s.H ? _(s.H) : {}),
      s.m
        ? (s.u || (s.u = 'POST'),
          (f['Content-Type'] = 'application/x-www-form-urlencoded'),
          s.g.ea(s.A, s.u, s.m, f))
        : ((s.u = 'GET'), s.g.ea(s.A, s.u, null, f)),
      Li(),
      Jc(s.i, s.u, s.A, s.l, s.R, s.m)
  }
  ;(Wn.prototype.ca = function (s) {
    s = s.target
    const f = this.M
    f && je(s) == 3 ? f.j() : this.Y(s)
  }),
    (Wn.prototype.Y = function (s) {
      try {
        if (s == this.g)
          e: {
            const kt = je(this.g)
            var f = this.g.Ba()
            const dr = this.g.Z()
            if (
              !(3 > kt) &&
              (kt != 3 || (this.g && (this.h.h || this.g.oa() || Sa(this.g))))
            ) {
              this.J ||
                kt != 4 ||
                f == 7 ||
                (f == 8 || 0 >= dr ? Li(3) : Li(2)),
                $r(this)
              var p = this.g.Z()
              this.X = p
              t: if (du(this)) {
                var y = Sa(this.g)
                s = ''
                var D = y.length,
                  M = je(this.g) == 4
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    ur(this), Oi(this)
                    var ee = ''
                    break t
                  }
                  this.h.i = new d.TextDecoder()
                }
                for (f = 0; f < D; f++)
                  (this.h.h = !0),
                    (s += this.h.i.decode(y[f], { stream: !(M && f == D - 1) }))
                ;(y.length = 0), (this.h.g += s), (this.C = 0), (ee = this.h.g)
              } else ee = this.g.oa()
              if (
                ((this.o = p == 200),
                Yc(this.i, this.u, this.A, this.l, this.R, kt, p),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var Re,
                        at = this.g
                      if (
                        (Re = at.g
                          ? at.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !x(Re)
                      ) {
                        var ke = Re
                        break t
                      }
                    }
                    ke = null
                  }
                  if ((p = ke))
                    Mr(
                      this.i,
                      this.l,
                      p,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      No(this, p)
                  else {
                    ;(this.o = !1), (this.s = 3), dt(12), ur(this), Oi(this)
                    break e
                  }
                }
                if (this.P) {
                  p = !0
                  let Ue
                  for (; !this.J && this.C < ee.length; )
                    if (((Ue = ef(this, ee)), Ue == Io)) {
                      kt == 4 && ((this.s = 4), dt(14), (p = !1)),
                        Mr(this.i, this.l, null, '[Incomplete Response]')
                      break
                    } else if (Ue == fu) {
                      ;(this.s = 4),
                        dt(15),
                        Mr(this.i, this.l, ee, '[Invalid Chunk]'),
                        (p = !1)
                      break
                    } else Mr(this.i, this.l, Ue, null), No(this, Ue)
                  if (
                    (du(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    kt != 4 ||
                      ee.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), dt(16), (p = !1)),
                    (this.o = this.o && p),
                    !p)
                  )
                    Mr(this.i, this.l, ee, '[Invalid Chunked Response]'),
                      ur(this),
                      Oi(this)
                  else if (0 < ee.length && !this.W) {
                    this.W = !0
                    var rt = this.j
                    rt.g == this &&
                      rt.ba &&
                      !rt.M &&
                      (rt.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          ee.length
                      ),
                      Wo(rt),
                      (rt.M = !0),
                      dt(11))
                  }
                } else Mr(this.i, this.l, ee, null), No(this, ee)
                kt == 4 && ur(this),
                  this.o &&
                    !this.J &&
                    (kt == 4 ? Di(this.j, this) : ((this.o = !1), sr(this)))
              } else
                fr(this.g),
                  p == 400 && 0 < ee.indexOf('Unknown SID')
                    ? ((this.s = 3), dt(12))
                    : ((this.s = 0), dt(13)),
                  ur(this),
                  Oi(this)
            }
          }
      } catch {
      } finally {
      }
    })
  function du(s) {
    return s.g ? s.u == 'GET' && s.L != 2 && s.j.Ca : !1
  }
  function ef(s, f) {
    var p = s.C,
      y = f.indexOf(
        `
`,
        p
      )
    return y == -1
      ? Io
      : ((p = Number(f.substring(p, y))),
        isNaN(p)
          ? fu
          : ((y += 1),
            y + p > f.length
              ? Io
              : ((f = f.slice(y, y + p)), (s.C = y + p), f)))
  }
  Wn.prototype.cancel = function () {
    ;(this.J = !0), ur(this)
  }
  function sr(s) {
    ;(s.S = Date.now() + s.I), pu(s, s.I)
  }
  function pu(s, f) {
    if (s.B != null) throw Error('WatchDog timer not null')
    s.B = Pi(k(s.ba, s), f)
  }
  function $r(s) {
    s.B && (d.clearTimeout(s.B), (s.B = null))
  }
  Wn.prototype.ba = function () {
    this.B = null
    const s = Date.now()
    0 <= s - this.S
      ? (Xc(this.i, this.A),
        this.L != 2 && (Li(), dt(17)),
        ur(this),
        (this.s = 2),
        Oi(this))
      : pu(this, this.S - s)
  }
  function Oi(s) {
    s.j.G == 0 || s.J || Di(s.j, s)
  }
  function ur(s) {
    $r(s)
    var f = s.M
    f && typeof f.ma == 'function' && f.ma(),
      (s.M = null),
      pa(s.U),
      s.g && ((f = s.g), (s.g = null), f.abort(), f.ma())
  }
  function No(s, f) {
    try {
      var p = s.j
      if (p.G != 0 && (p.g == s || jo(p.h, s))) {
        if (!s.K && jo(p.h, s) && p.G == 3) {
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
                  if (p.g.F + 3e3 < s.F) tn(p), zi(p)
                  else break e
                _t(p), dt(18)
              }
            } else
              (p.za = D[1]),
                0 < p.za - p.T &&
                  37500 > D[2] &&
                  p.F &&
                  p.v == 0 &&
                  !p.C &&
                  (p.C = Pi(k(p.Za, p), 6e3))
            if (1 >= mu(p.h) && p.ca) {
              try {
                p.ca()
              } catch {}
              p.ca = void 0
            }
          } else Ee(p, 11)
        } else if (((s.K || p.g == s) && tn(p), !x(f)))
          for (D = p.Da.g.parse(f), f = 0; f < D.length; f++) {
            let ke = D[f]
            if (((p.T = ke[0]), (ke = ke[1]), p.G == 2))
              if (ke[0] == 'c') {
                ;(p.K = ke[1]), (p.ia = ke[2])
                const rt = ke[3]
                rt != null && ((p.la = rt), p.j.info('VER=' + p.la))
                const kt = ke[4]
                kt != null && ((p.Aa = kt), p.j.info('SVER=' + p.Aa))
                const dr = ke[5]
                dr != null &&
                  typeof dr == 'number' &&
                  0 < dr &&
                  ((y = 1.5 * dr),
                  (p.L = y),
                  p.j.info('backChannelRequestTimeoutMs_=' + y)),
                  (y = p)
                const Ue = s.g
                if (Ue) {
                  const Kr = Ue.g
                    ? Ue.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null
                  if (Kr) {
                    var M = y.h
                    M.g ||
                      (Kr.indexOf('spdy') == -1 &&
                        Kr.indexOf('quic') == -1 &&
                        Kr.indexOf('h2') == -1) ||
                      ((M.j = M.l),
                      (M.g = new Set()),
                      M.h && (Do(M, M.h), (M.h = null)))
                  }
                  if (y.D) {
                    const pr = Ue.g
                      ? Ue.g.getResponseHeader('X-HTTP-Session-Id')
                      : null
                    pr && ((y.ya = pr), Oe(y.I, y.D, pr))
                  }
                }
                ;(p.G = 3),
                  p.l && p.l.ua(),
                  p.ba &&
                    ((p.R = Date.now() - s.F),
                    p.j.info('Handshake RTT: ' + p.R + 'ms')),
                  (y = p)
                var ee = s
                if (((y.qa = Ca(y, y.J ? y.ia : null, y.W)), ee.K)) {
                  vu(y.h, ee)
                  var Re = ee,
                    at = y.L
                  at && (Re.I = at), Re.B && ($r(Re), sr(Re)), (y.g = ee)
                } else Ru(y)
                0 < p.i.length && ji(p)
              } else (ke[0] != 'stop' && ke[0] != 'close') || Ee(p, 7)
            else
              p.G == 3 &&
                (ke[0] == 'stop' || ke[0] == 'close'
                  ? ke[0] == 'stop'
                    ? Ee(p, 7)
                    : bt(p)
                  : ke[0] != 'noop' && p.l && p.l.ta(ke),
                (p.v = 0))
          }
      }
      Li(4)
    } catch {}
  }
  var gu = class {
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
  function zo(s) {
    return s.h ? !0 : s.g ? s.g.size >= s.j : !1
  }
  function mu(s) {
    return s.h ? 1 : s.g ? s.g.size : 0
  }
  function jo(s, f) {
    return s.h ? s.h == f : s.g ? s.g.has(f) : !1
  }
  function Do(s, f) {
    s.g ? s.g.add(f) : (s.h = f)
  }
  function vu(s, f) {
    s.h && s.h == f ? (s.h = null) : s.g && s.g.has(f) && s.g.delete(f)
  }
  Ro.prototype.cancel = function () {
    if (((this.i = Fo(this)), this.h)) this.h.cancel(), (this.h = null)
    else if (this.g && this.g.size !== 0) {
      for (const s of this.g.values()) s.cancel()
      this.g.clear()
    }
  }
  function Fo(s) {
    if (s.h != null) return s.i.concat(s.h.D)
    if (s.g != null && s.g.size !== 0) {
      let f = s.i
      for (const p of s.g.values()) f = f.concat(p.D)
      return f
    }
    return W(s.i)
  }
  function yu(s) {
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
  function bu(s) {
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
  function ya(s, f) {
    if (s.forEach && typeof s.forEach == 'function') s.forEach(f, void 0)
    else if (g(s) || typeof s == 'string')
      Array.prototype.forEach.call(s, f, void 0)
    else
      for (var p = bu(s), y = yu(s), D = y.length, M = 0; M < D; M++)
        f.call(void 0, y[M], p && p[M], s)
  }
  var wu = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  )
  function _u(s, f) {
    if (s) {
      s = s.split('&')
      for (var p = 0; p < s.length; p++) {
        var y = s[p].indexOf('='),
          D = null
        if (0 <= y) {
          var M = s[p].substring(0, y)
          D = s[p].substring(y + 1)
        } else M = s[p]
        f(M, D ? decodeURIComponent(D.replace(/\+/g, ' ')) : '')
      }
    }
  }
  function gn(s) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      s instanceof gn)
    ) {
      ;(this.h = s.h),
        ba(this, s.j),
        (this.o = s.o),
        (this.g = s.g),
        Ii(this, s.s),
        (this.l = s.l)
      var f = s.i,
        p = new Vr()
      ;(p.i = f.i),
        f.g && ((p.g = new Map(f.g)), (p.h = f.h)),
        Uo(this, p),
        (this.m = s.m)
    } else
      s && (f = String(s).match(wu))
        ? ((this.h = !1),
          ba(this, f[1] || '', !0),
          (this.o = Br(f[2] || '')),
          (this.g = Br(f[3] || '', !0)),
          Ii(this, f[4]),
          (this.l = Br(f[5] || '', !0)),
          Uo(this, f[6] || '', !0),
          (this.m = Br(f[7] || '')))
        : ((this.h = !1), (this.i = new Vr(null, this.h)))
  }
  gn.prototype.toString = function () {
    var s = [],
      f = this.j
    f && s.push(lr(f, cr, !0), ':')
    var p = this.g
    return (
      (p || f == 'file') &&
        (s.push('//'),
        (f = this.o) && s.push(lr(f, cr, !0), '@'),
        s.push(
          encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (p = this.s),
        p != null && s.push(':', String(p))),
      (p = this.l) &&
        (this.g && p.charAt(0) != '/' && s.push('/'),
        s.push(lr(p, p.charAt(0) == '/' ? Su : ku, !0))),
      (p = this.i.toString()) && s.push('?', p),
      (p = this.m) && s.push('#', lr(p, Eu)),
      s.join('')
    )
  }
  function mn(s) {
    return new gn(s)
  }
  function ba(s, f, p) {
    ;(s.j = p ? Br(f, !0) : f), s.j && (s.j = s.j.replace(/:$/, ''))
  }
  function Ii(s, f) {
    if (f) {
      if (((f = Number(f)), isNaN(f) || 0 > f))
        throw Error('Bad port number ' + f)
      s.s = f
    } else s.s = null
  }
  function Uo(s, f, p) {
    f instanceof Vr
      ? ((s.i = f), Au(s.i, s.h))
      : (p || (f = lr(f, tf)), (s.i = new Vr(f, s.h)))
  }
  function Oe(s, f, p) {
    s.i.set(f, p)
  }
  function wa(s) {
    return (
      Oe(
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
  function Br(s, f) {
    return s
      ? f
        ? decodeURI(s.replace(/%25/g, '%2525'))
        : decodeURIComponent(s)
      : ''
  }
  function lr(s, f, p) {
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
  var cr = /[#\/\?@]/g,
    ku = /[#\?:]/g,
    Su = /[#\?]/g,
    tf = /[#\?@]/g,
    Eu = /#/g
  function Vr(s, f) {
    ;(this.h = this.g = null), (this.i = s || null), (this.j = !!f)
  }
  function On(s) {
    s.g ||
      ((s.g = new Map()),
      (s.h = 0),
      s.i &&
        _u(s.i, function (f, p) {
          s.add(decodeURIComponent(f.replace(/\+/g, ' ')), p)
        }))
  }
  ;(e = Vr.prototype),
    (e.add = function (s, f) {
      On(this), (this.i = null), (s = Hr(this, s))
      var p = this.g.get(s)
      return p || this.g.set(s, (p = [])), p.push(f), (this.h += 1), this
    })
  function $o(s, f) {
    On(s),
      (f = Hr(s, f)),
      s.g.has(f) && ((s.i = null), (s.h -= s.g.get(f).length), s.g.delete(f))
  }
  function xu(s, f) {
    return On(s), (f = Hr(s, f)), s.g.has(f)
  }
  ;(e.forEach = function (s, f) {
    On(this),
      this.g.forEach(function (p, y) {
        p.forEach(function (D) {
          s.call(f, D, y, this)
        }, this)
      }, this)
  }),
    (e.na = function () {
      On(this)
      const s = Array.from(this.g.values()),
        f = Array.from(this.g.keys()),
        p = []
      for (let y = 0; y < f.length; y++) {
        const D = s[y]
        for (let M = 0; M < D.length; M++) p.push(f[y])
      }
      return p
    }),
    (e.V = function (s) {
      On(this)
      let f = []
      if (typeof s == 'string')
        xu(this, s) && (f = f.concat(this.g.get(Hr(this, s))))
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
        xu(this, s) && (this.h -= this.g.get(s).length),
        this.g.set(s, [f]),
        (this.h += 1),
        this
      )
    }),
    (e.get = function (s, f) {
      return s ? ((s = this.V(s)), 0 < s.length ? String(s[0]) : f) : f
    })
  function Cu(s, f, p) {
    $o(s, f),
      0 < p.length && ((s.i = null), s.g.set(Hr(s, f), W(p)), (s.h += p.length))
  }
  e.toString = function () {
    if (this.i) return this.i
    if (!this.g) return ''
    const s = [],
      f = Array.from(this.g.keys())
    for (var p = 0; p < f.length; p++) {
      var y = f[p]
      const M = encodeURIComponent(String(y)),
        ee = this.V(y)
      for (y = 0; y < ee.length; y++) {
        var D = M
        ee[y] !== '' && (D += '=' + encodeURIComponent(String(ee[y]))),
          s.push(D)
      }
    }
    return (this.i = s.join('&'))
  }
  function Hr(s, f) {
    return (f = String(f)), s.j && (f = f.toLowerCase()), f
  }
  function Au(s, f) {
    f &&
      !s.j &&
      (On(s),
      (s.i = null),
      s.g.forEach(function (p, y) {
        var D = y.toLowerCase()
        y != D && ($o(this, y), Cu(this, D, p))
      }, s)),
      (s.j = f)
  }
  function nf(s, f) {
    const p = new or()
    if (d.Image) {
      const y = new Image()
      ;(y.onload = V(qn, p, 'TestLoadImage: loaded', !0, f, y)),
        (y.onerror = V(qn, p, 'TestLoadImage: error', !1, f, y)),
        (y.onabort = V(qn, p, 'TestLoadImage: abort', !1, f, y)),
        (y.ontimeout = V(qn, p, 'TestLoadImage: timeout', !1, f, y)),
        d.setTimeout(function () {
          y.ontimeout && y.ontimeout()
        }, 1e4),
        (y.src = s)
    } else f(!1)
  }
  function rf(s, f) {
    const p = new or(),
      y = new AbortController(),
      D = setTimeout(() => {
        y.abort(), qn(p, 'TestPingServer: timeout', !1, f)
      }, 1e4)
    fetch(s, { signal: y.signal })
      .then((M) => {
        clearTimeout(D),
          M.ok
            ? qn(p, 'TestPingServer: ok', !0, f)
            : qn(p, 'TestPingServer: server error', !1, f)
      })
      .catch(() => {
        clearTimeout(D), qn(p, 'TestPingServer: error', !1, f)
      })
  }
  function qn(s, f, p, y, D) {
    try {
      D &&
        ((D.onload = null),
        (D.onerror = null),
        (D.onabort = null),
        (D.ontimeout = null)),
        y(p)
    } catch {}
  }
  function af() {
    this.g = new Gc()
  }
  function Bo(s, f, p) {
    const y = p || ''
    try {
      ya(s, function (D, M) {
        let ee = D
        w(D) && (ee = Ci(D)), f.push(y + M + '=' + encodeURIComponent(ee))
      })
    } catch (D) {
      throw (f.push(y + 'type=' + encodeURIComponent('_badmap')), D)
    }
  }
  function _a(s) {
    ;(this.l = s.Ub || null), (this.j = s.eb || !1)
  }
  U(_a, xo),
    (_a.prototype.g = function () {
      return new ka(this.l, this.j)
    }),
    (_a.prototype.i = (function (s) {
      return function () {
        return s
      }
    })({}))
  function ka(s, f) {
    Ge.call(this),
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
  U(ka, Ge),
    (e = ka.prototype),
    (e.open = function (s, f) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.B = s), (this.A = f), (this.readyState = 1), Ni(this)
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
          ((this.g = !1), Ti(this)),
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
          Ni(this)),
        this.g && ((this.readyState = 3), Ni(this), this.g))
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
          Lu(this)
        } else s.text().then(this.Ra.bind(this), this.ga.bind(this))
    })
  function Lu(s) {
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
      s.done ? Ti(this) : Ni(this), this.readyState == 3 && Lu(this)
    }
  }),
    (e.Ra = function (s) {
      this.g && ((this.response = this.responseText = s), Ti(this))
    }),
    (e.Qa = function (s) {
      this.g && ((this.response = s), Ti(this))
    }),
    (e.ga = function () {
      this.g && Ti(this)
    })
  function Ti(s) {
    ;(s.readyState = 4), (s.l = null), (s.j = null), (s.v = null), Ni(s)
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
  function Ni(s) {
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
  function Ne(s) {
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
  function Ae(s, f, p) {
    e: {
      for (y in p) {
        var y = !1
        break e
      }
      y = !0
    }
    y ||
      ((p = Ne(p)),
      typeof s == 'string'
        ? p != null && encodeURIComponent(String(p))
        : Oe(s, f, p))
  }
  function He(s) {
    Ge.call(this),
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
  U(He, Ge)
  var of = /^https?$/i,
    sf = ['POST', 'PUT']
  ;(e = He.prototype),
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
        (this.g = this.o ? this.o.g() : Po.g()),
        (this.v = this.o ? uu(this.o) : uu(Po)),
        (this.g.onreadystatechange = k(this.Ea, this))
      try {
        ;(this.B = !0), this.g.open(f, String(s), !0), (this.B = !1)
      } catch (M) {
        Pu(this, M)
        return
      }
      if (((s = p || ''), (p = new Map(this.headers)), y))
        if (Object.getPrototypeOf(y) === Object.prototype)
          for (var D in y) p.set(D, y[D])
        else if (typeof y.keys == 'function' && typeof y.get == 'function')
          for (const M of y.keys()) p.set(M, y.get(M))
        else throw Error('Unknown input type for opt_headers: ' + String(y))
      ;(y = Array.from(p.keys()).find(
        (M) => M.toLowerCase() == 'content-type'
      )),
        (D = d.FormData && s instanceof d.FormData),
        !(0 <= Array.prototype.indexOf.call(sf, f, void 0)) ||
          y ||
          D ||
          p.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          )
      for (const [M, ee] of p) this.g.setRequestHeader(M, ee)
      this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J)
      try {
        Tu(this), (this.u = !0), this.g.send(s), (this.u = !1)
      } catch (M) {
        Pu(this, M)
      }
    })
  function Pu(s, f) {
    ;(s.h = !1),
      s.g && ((s.j = !0), s.g.abort(), (s.j = !1)),
      (s.l = f),
      (s.m = 5),
      Ou(s),
      Ri(s)
  }
  function Ou(s) {
    s.A || ((s.A = !0), Je(s, 'complete'), Je(s, 'error'))
  }
  ;(e.abort = function (s) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = s || 7),
      Je(this, 'complete'),
      Je(this, 'abort'),
      Ri(this))
  }),
    (e.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Ri(this, !0)),
        He.aa.N.call(this)
    }),
    (e.Ea = function () {
      this.s || (this.B || this.u || this.j ? Iu(this) : this.bb())
    }),
    (e.bb = function () {
      Iu(this)
    })
  function Iu(s) {
    if (s.h && typeof c < 'u' && (!s.v[1] || je(s) != 4 || s.Z() != 2)) {
      if (s.u && je(s) == 4) fa(s.Ea, 0, s)
      else if ((Je(s, 'readystatechange'), je(s) == 4)) {
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
              var D = String(s.D).match(wu)[1] || null
              !D &&
                d.self &&
                d.self.location &&
                (D = d.self.location.protocol.slice(0, -1)),
                (y = !of.test(D ? D.toLowerCase() : ''))
            }
            p = y
          }
          if (p) Je(s, 'complete'), Je(s, 'success')
          else {
            s.m = 6
            try {
              var M = 2 < je(s) ? s.g.statusText : ''
            } catch {
              M = ''
            }
            ;(s.l = M + ' [' + s.Z() + ']'), Ou(s)
          }
        } finally {
          Ri(s)
        }
      }
    }
  }
  function Ri(s, f) {
    if (s.g) {
      Tu(s)
      const p = s.g,
        y = s.v[0] ? () => {} : null
      ;(s.g = null), (s.v = null), f || Je(s, 'ready')
      try {
        p.onreadystatechange = y
      } catch {}
    }
  }
  function Tu(s) {
    s.I && (d.clearTimeout(s.I), (s.I = null))
  }
  e.isActive = function () {
    return !!this.g
  }
  function je(s) {
    return s.g ? s.g.readyState : 0
  }
  ;(e.Z = function () {
    try {
      return 2 < je(this) ? this.g.status : -1
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
        return s && f.indexOf(s) == 0 && (f = f.substring(s.length)), Eo(f)
      }
    })
  function Sa(s) {
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
  function fr(s) {
    const f = {}
    s = ((s.g && 2 <= je(s) && s.g.getAllResponseHeaders()) || '').split(`\r
`)
    for (let y = 0; y < s.length; y++) {
      if (x(s[y])) continue
      var p = R(s[y])
      const D = p[0]
      if (((p = p[1]), typeof p != 'string')) continue
      p = p.trim()
      const M = f[D] || []
      ;(f[D] = M), M.push(p)
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
  function Wr(s, f, p) {
    return (p && p.internalChannelParams && p.internalChannelParams[s]) || f
  }
  function Ea(s) {
    ;(this.Aa = 0),
      (this.i = []),
      (this.j = new or()),
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
      (this.Va = Wr('failFast', !1, s)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = Wr('baseRetryDelayMs', 5e3, s)),
      (this.cb = Wr('retryDelaySeedMs', 1e4, s)),
      (this.Wa = Wr('forwardChannelMaxRetries', 2, s)),
      (this.wa = Wr('forwardChannelRequestTimeoutMs', 2e4, s)),
      (this.pa = (s && s.xmlHttpFactory) || void 0),
      (this.Xa = (s && s.Tb) || void 0),
      (this.Ca = (s && s.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (s && s.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new Ro(s && s.concurrentRequestLimit)),
      (this.Da = new af()),
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
  ;(e = Ea.prototype),
    (e.la = 8),
    (e.G = 1),
    (e.connect = function (s, f, p, y) {
      dt(0),
        (this.W = s),
        (this.H = f || {}),
        p && y !== void 0 && ((this.H.OSID = p), (this.H.OAID = y)),
        (this.F = this.X),
        (this.I = Ca(this, null, this.W)),
        ji(this)
    })
  function bt(s) {
    if ((Vo(s), s.G == 3)) {
      var f = s.U++,
        p = mn(s.I)
      if (
        (Oe(p, 'SID', s.K),
        Oe(p, 'RID', f),
        Oe(p, 'TYPE', 'terminate'),
        qr(s, p),
        (f = new Wn(s, s.j, f)),
        (f.L = 2),
        (f.v = wa(mn(p))),
        (p = !1),
        d.navigator && d.navigator.sendBeacon)
      )
        try {
          p = d.navigator.sendBeacon(f.v.toString(), '')
        } catch {}
      !p && d.Image && ((new Image().src = f.v), (p = !0)),
        p || ((f.g = zu(f.j, null)), f.g.ea(f.v)),
        (f.F = Date.now()),
        sr(f)
    }
    In(s)
  }
  function zi(s) {
    s.g && (Wo(s), s.g.cancel(), (s.g = null))
  }
  function Vo(s) {
    zi(s),
      s.u && (d.clearTimeout(s.u), (s.u = null)),
      tn(s),
      s.h.cancel(),
      s.s && (typeof s.s == 'number' && d.clearTimeout(s.s), (s.s = null))
  }
  function ji(s) {
    if (!zo(s.h) && !s.s) {
      s.s = !0
      var f = s.Ga
      xe || le(), Z || (xe(), (Z = !0)), ae.add(f, s), (s.B = 0)
    }
  }
  function Nu(s, f) {
    return mu(s.h) >= s.h.j - (s.s ? 1 : 0)
      ? !1
      : s.s
      ? ((s.i = f.D.concat(s.i)), !0)
      : s.G == 1 || s.G == 2 || s.B >= (s.Va ? 0 : s.Wa)
      ? !1
      : ((s.s = Pi(k(s.Ga, s, f), xa(s, s.B))), s.B++, !0)
  }
  e.Ga = function (s) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!s) {
          ;(this.U = Math.floor(1e5 * Math.random())), (s = this.U++)
          const D = new Wn(this, this.j, s)
          let M = this.o
          if (
            (this.S && (M ? ((M = _(M)), L(M, this.S)) : (M = this.S)),
            this.m !== null || this.O || ((D.H = M), (M = null)),
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
          ;(f = wt(this, D, f)),
            (p = mn(this.I)),
            Oe(p, 'RID', s),
            Oe(p, 'CVER', 22),
            this.D && Oe(p, 'X-HTTP-Session-Id', this.D),
            qr(this, p),
            M &&
              (this.O
                ? (f = 'headers=' + encodeURIComponent(String(Ne(M))) + '&' + f)
                : this.m && Ae(p, this.m, M)),
            Do(this.h, D),
            this.Ua && Oe(p, 'TYPE', 'init'),
            this.P
              ? (Oe(p, '$req', f),
                Oe(p, 'SID', 'null'),
                (D.T = !0),
                To(D, p, null))
              : To(D, p, f),
            (this.G = 2)
        }
      } else
        this.G == 3 &&
          (s ? Ho(this, s) : this.i.length == 0 || zo(this.h) || Ho(this))
  }
  function Ho(s, f) {
    var p
    f ? (p = f.l) : (p = s.U++)
    const y = mn(s.I)
    Oe(y, 'SID', s.K),
      Oe(y, 'RID', p),
      Oe(y, 'AID', s.T),
      qr(s, y),
      s.m && s.o && Ae(y, s.m, s.o),
      (p = new Wn(s, s.j, p, s.B + 1)),
      s.m === null && (p.H = s.o),
      f && (s.i = f.D.concat(s.i)),
      (f = wt(s, p, 1e3)),
      (p.I = Math.round(0.5 * s.wa) + Math.round(0.5 * s.wa * Math.random())),
      Do(s.h, p),
      To(p, y, f)
  }
  function qr(s, f) {
    s.H &&
      X(s.H, function (p, y) {
        Oe(f, y, p)
      }),
      s.l &&
        ya({}, function (p, y) {
          Oe(f, y, p)
        })
  }
  function wt(s, f, p) {
    p = Math.min(s.i.length, p)
    var y = s.l ? k(s.l.Na, s.l, s) : null
    e: {
      var D = s.i
      let M = -1
      for (;;) {
        const ee = ['count=' + p]
        M == -1
          ? 0 < p
            ? ((M = D[0].g), ee.push('ofs=' + M))
            : (M = 0)
          : ee.push('ofs=' + M)
        let Re = !0
        for (let at = 0; at < p; at++) {
          let ke = D[at].g
          const rt = D[at].map
          if (((ke -= M), 0 > ke)) (M = Math.max(0, D[at].g - 100)), (Re = !1)
          else
            try {
              Bo(rt, ee, 'req' + ke + '_')
            } catch {
              y && y(rt)
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
  function Ru(s) {
    if (!s.g && !s.u) {
      s.Y = 1
      var f = s.Fa
      xe || le(), Z || (xe(), (Z = !0)), ae.add(f, s), (s.v = 0)
    }
  }
  function _t(s) {
    return s.g || s.u || 3 <= s.v
      ? !1
      : (s.Y++, (s.u = Pi(k(s.Fa, s), xa(s, s.v))), s.v++, !0)
  }
  ;(e.Fa = function () {
    if (
      ((this.u = null),
      qo(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var s = 2 * this.R
      this.j.info('BP detection timer enabled: ' + s),
        (this.A = Pi(k(this.ab, this), s))
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
        zi(this),
        qo(this))
    })
  function Wo(s) {
    s.A != null && (d.clearTimeout(s.A), (s.A = null))
  }
  function qo(s) {
    ;(s.g = new Wn(s, s.j, 'rpc', s.Y)),
      s.m === null && (s.g.H = s.o),
      (s.g.O = 0)
    var f = mn(s.qa)
    Oe(f, 'RID', 'rpc'),
      Oe(f, 'SID', s.K),
      Oe(f, 'AID', s.T),
      Oe(f, 'CI', s.F ? '0' : '1'),
      !s.F && s.ja && Oe(f, 'TO', s.ja),
      Oe(f, 'TYPE', 'xmlhttp'),
      qr(s, f),
      s.m && s.o && Ae(f, s.m, s.o),
      s.L && (s.g.I = s.L)
    var p = s.g
    ;(s = s.ia),
      (p.L = 1),
      (p.v = wa(mn(f))),
      (p.m = null),
      (p.P = !0),
      hu(p, s)
  }
  e.Za = function () {
    this.C != null && ((this.C = null), zi(this), _t(this), dt(19))
  }
  function tn(s) {
    s.C != null && (d.clearTimeout(s.C), (s.C = null))
  }
  function Di(s, f) {
    var p = null
    if (s.g == f) {
      tn(s), Wo(s), (s.g = null)
      var y = 2
    } else if (jo(s.h, f)) (p = f.D), vu(s.h, f), (y = 1)
    else return
    if (s.G != 0) {
      if (f.o)
        if (y == 1) {
          ;(p = f.m ? f.m.length : 0), (f = Date.now() - f.F)
          var D = s.B
          ;(y = Ao()), Je(y, new ma(y, p)), ji(s)
        } else Ru(s)
      else if (
        ((D = f.s),
        D == 3 ||
          (D == 0 && 0 < f.X) ||
          !((y == 1 && Nu(s, f)) || (y == 2 && _t(s))))
      )
        switch ((p && 0 < p.length && ((f = s.h), (f.i = f.i.concat(p))), D)) {
          case 1:
            Ee(s, 5)
            break
          case 4:
            Ee(s, 10)
            break
          case 3:
            Ee(s, 6)
            break
          default:
            Ee(s, 2)
        }
    }
  }
  function xa(s, f) {
    let p = s.Ta + Math.floor(Math.random() * s.cb)
    return s.isActive() || (p *= 2), p * f
  }
  function Ee(s, f) {
    if ((s.j.info('Error code ' + f), f == 2)) {
      var p = k(s.fb, s),
        y = s.Xa
      const D = !y
      ;(y = new gn(y || '//www.google.com/images/cleardot.gif')),
        (d.location && d.location.protocol == 'http') || ba(y, 'https'),
        wa(y),
        D ? nf(y.toString(), p) : rf(y.toString(), p)
    } else dt(2)
    ;(s.G = 0), s.l && s.l.sa(f), In(s), Vo(s)
  }
  e.fb = function (s) {
    s
      ? (this.j.info('Successfully pinged google.com'), dt(2))
      : (this.j.info('Failed to ping google.com'), dt(1))
  }
  function In(s) {
    if (((s.G = 0), (s.ka = []), s.l)) {
      const f = Fo(s.h)
      ;(f.length != 0 || s.i.length != 0) &&
        (J(s.ka, f),
        J(s.ka, s.i),
        (s.h.i.length = 0),
        W(s.i),
        (s.i.length = 0)),
        s.l.ra()
    }
  }
  function Ca(s, f, p) {
    var y = p instanceof gn ? mn(p) : new gn(p)
    if (y.g != '') f && (y.g = f + '.' + y.g), Ii(y, y.s)
    else {
      var D = d.location
      ;(y = D.protocol),
        (f = f ? f + '.' + D.hostname : D.hostname),
        (D = +D.port)
      var M = new gn(null)
      y && ba(M, y), f && (M.g = f), D && Ii(M, D), p && (M.l = p), (y = M)
    }
    return (
      (p = s.D),
      (f = s.ya),
      p && f && Oe(y, p, f),
      Oe(y, 'VER', s.la),
      qr(s, y),
      y
    )
  }
  function zu(s, f, p) {
    if (f && !s.J)
      throw Error("Can't create secondary domain capable XhrIo object.")
    return (
      (f = s.Ca && !s.pa ? new He(new _a({ eb: p })) : new He(s.pa)),
      f.Ha(s.J),
      f
    )
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this)
  }
  function Aa() {}
  ;(e = Aa.prototype),
    (e.ua = function () {}),
    (e.ta = function () {}),
    (e.sa = function () {}),
    (e.ra = function () {}),
    (e.isActive = function () {
      return !0
    }),
    (e.Na = function () {})
  function Vt(s, f) {
    Ge.call(this),
      (this.g = new Ea(f)),
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
      (this.j = new hr(this))
  }
  U(Vt, Ge),
    (Vt.prototype.m = function () {
      ;(this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }),
    (Vt.prototype.close = function () {
      bt(this.g)
    }),
    (Vt.prototype.o = function (s) {
      var f = this.g
      if (typeof s == 'string') {
        var p = {}
        ;(p.__data__ = s), (s = p)
      } else this.u && ((p = {}), (p.__data__ = Ci(s)), (s = p))
      f.i.push(new gu(f.Ya++, s)), f.G == 3 && ji(f)
    }),
    (Vt.prototype.N = function () {
      ;(this.g.l = null),
        delete this.j,
        bt(this.g),
        delete this.g,
        Vt.aa.N.call(this)
    })
  function ju(s) {
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
  U(ju, ga)
  function Du() {
    Co.call(this), (this.status = 1)
  }
  U(Du, Co)
  function hr(s) {
    this.g = s
  }
  U(hr, Aa),
    (hr.prototype.ua = function () {
      Je(this.g, 'a')
    }),
    (hr.prototype.ta = function (s) {
      Je(this.g, new ju(s))
    }),
    (hr.prototype.sa = function (s) {
      Je(this.g, new Du())
    }),
    (hr.prototype.ra = function () {
      Je(this.g, 'b')
    }),
    (Vt.prototype.send = Vt.prototype.o),
    (Vt.prototype.open = Vt.prototype.m),
    (Vt.prototype.close = Vt.prototype.close),
    (Ai.OPEN = 'a'),
    (Ai.CLOSE = 'b'),
    (Ai.ERROR = 'c'),
    (Ai.MESSAGE = 'd'),
    (Ge.prototype.listen = Ge.prototype.K),
    (He.prototype.listenOnce = He.prototype.L),
    (He.prototype.getLastError = He.prototype.Ka),
    (He.prototype.getLastErrorCode = He.prototype.Ba),
    (He.prototype.getStatus = He.prototype.Z),
    (He.prototype.getResponseJson = He.prototype.Oa),
    (He.prototype.getResponseText = He.prototype.oa),
    (He.prototype.send = He.prototype.ea),
    (He.prototype.setWithCredentials = He.prototype.Ha)
}).apply(
  typeof Fl < 'u'
    ? Fl
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
 */ let iu = '11.0.0'
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
 */ const mo = new H1('@firebase/firestore')
function Mn(e, ...t) {
  if (mo.logLevel <= ze.DEBUG) {
    const n = t.map(Tp)
    mo.debug(`Firestore (${iu}): ${e}`, ...n)
  }
}
function Y1(e, ...t) {
  if (mo.logLevel <= ze.ERROR) {
    const n = t.map(Tp)
    mo.error(`Firestore (${iu}): ${e}`, ...n)
  }
}
function B3(e, ...t) {
  if (mo.logLevel <= ze.WARN) {
    const n = t.map(Tp)
    mo.warn(`Firestore (${iu}): ${e}`, ...n)
  }
}
function Tp(e) {
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
 */ function Np(e = 'Unexpected state') {
  const t = `FIRESTORE (${iu}) INTERNAL ASSERTION FAILED: ` + e
  throw (Y1(t), new Error(t))
}
function Os(e, t) {
  e || Np()
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
 */ const Gt = {
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
class Jt extends wo {
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
class V3 {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(Dt.UNAUTHENTICATED))
  }
  shutdown() {}
}
class H3 {
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
class W3 {
  constructor(t) {
    ;(this.t = t),
      (this.currentUser = Dt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(t, n) {
    Os(this.o === void 0)
    let i = this.i
    const o = (g) => (this.i !== i ? ((i = this.i), n(g)) : Promise.resolve())
    let u = new Is()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        u.resolve(),
        (u = new Is()),
        t.enqueueRetryable(() => o(this.currentUser))
    }
    const c = () => {
        const g = u
        t.enqueueRetryable(async () => {
          await g.promise, await o(this.currentUser)
        })
      },
      d = (g) => {
        Mn('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = g),
          this.o && (this.auth.addAuthTokenListener(this.o), c())
      }
    this.t.onInit((g) => d(g)),
      setTimeout(() => {
        if (!this.auth) {
          const g = this.t.getImmediate({ optional: !0 })
          g
            ? d(g)
            : (Mn('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              u.resolve(),
              (u = new Is()))
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
                ? (Mn(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : i
                ? (Os(typeof i.accessToken == 'string'),
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
    return Os(t === null || typeof t == 'string'), new Dt(t)
  }
}
class q3 {
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
class K3 {
  constructor(t, n, i) {
    ;(this.l = t), (this.h = n), (this.P = i)
  }
  getToken() {
    return Promise.resolve(new q3(this.l, this.h, this.P))
  }
  start(t, n) {
    t.enqueueRetryable(() => n(Dt.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class Q3 {
  constructor(t) {
    ;(this.value = t),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set('x-firebase-appcheck', this.value)
  }
}
class G3 {
  constructor(t) {
    ;(this.A = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null)
  }
  start(t, n) {
    Os(this.o === void 0)
    const i = (u) => {
      u.error != null &&
        Mn(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`
        )
      const c = u.token !== this.R
      return (
        (this.R = u.token),
        Mn(
          'FirebaseAppCheckTokenProvider',
          `Received ${c ? 'new' : 'existing'} token.`
        ),
        c ? n(u.token) : Promise.resolve()
      )
    }
    this.o = (u) => {
      t.enqueueRetryable(() => i(u))
    }
    const o = (u) => {
      Mn('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = u),
        this.o && this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((u) => o(u)),
      setTimeout(() => {
        if (!this.appCheck) {
          const u = this.A.getImmediate({ optional: !0 })
          u
            ? o(u)
            : Mn('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected')
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
                ? (Os(typeof n.token == 'string'),
                  (this.R = n.token),
                  new Q3(n.token))
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
function J3(e) {
  return e.name === 'IndexedDbTransactionError'
}
class Cc {
  constructor(t, n) {
    ;(this.projectId = t), (this.database = n || '(default)')
  }
  static empty() {
    return new Cc('', '')
  }
  get isDefaultDatabase() {
    return this.database === '(default)'
  }
  isEqual(t) {
    return (
      t instanceof Cc &&
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
 */ new J1([4294967295, 4294967295], 0)
function Nh() {
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
 */ class Y3 {
  constructor(t, n, i = 1e3, o = 1.5, u = 6e4) {
    ;(this.ui = t),
      (this.timerId = n),
      (this.ko = i),
      (this.qo = o),
      (this.Qo = u),
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
      Mn(
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
 */ class Rp {
  constructor(t, n, i, o, u) {
    ;(this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = i),
      (this.op = o),
      (this.removalCallback = u),
      (this.deferred = new Is()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((c) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(t, n, i, o, u) {
    const c = Date.now() + i,
      d = new Rp(t, n, c, o, u)
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
        new Jt(Gt.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))
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
 */ function X3(e) {
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
function Z3(e, t, n, i) {
  if (t === !0 && i === !0)
    throw new Jt(Gt.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`)
}
function e9(e) {
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
  return typeof e == 'function' ? 'a function' : Np()
}
function t9(e, t) {
  if (('_delegate' in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new Jt(
        Gt.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = e9(e)
      throw new Jt(
        Gt.INVALID_ARGUMENT,
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
        throw new Jt(
          Gt.INVALID_ARGUMENT,
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
          Gt.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        )
      this.cacheSizeBytes = t.cacheSizeBytes
    }
    Z3(
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
      (this.experimentalLongPollingOptions = X3(
        (i = t.experimentalLongPollingOptions) !== null && i !== void 0 ? i : {}
      )),
      (function (o) {
        if (o.timeoutSeconds !== void 0) {
          if (isNaN(o.timeoutSeconds))
            throw new Jt(
              Gt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`
            )
          if (o.timeoutSeconds < 5)
            throw new Jt(
              Gt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (o.timeoutSeconds > 30)
            throw new Jt(
              Gt.INVALID_ARGUMENT,
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
      throw new Jt(
        Gt.FAILED_PRECONDITION,
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
        Gt.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new o0(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new V3()
          switch (n.type) {
            case 'firstParty':
              return new K3(
                n.sessionIndex || '0',
                n.iamToken || null,
                n.authTokenFactory || null
              )
            case 'provider':
              return n.client
            default:
              throw new Jt(
                Gt.INVALID_ARGUMENT,
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
          (Mn('ComponentProvider', 'Removing Datastore'),
          a0.delete(t),
          n.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function n9(e, t, n, i = {}) {
  var o
  const u = (e = t9(e, Z1))._getSettings(),
    c = `${t}:${n}`
  if (
    (u.host !== 'firestore.googleapis.com' &&
      u.host !== c &&
      B3(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ),
    e._setSettings(Object.assign(Object.assign({}, u), { host: c, ssl: !1 })),
    i.mockUserToken)
  ) {
    let d, g
    if (typeof i.mockUserToken == 'string')
      (d = i.mockUserToken), (g = Dt.MOCK_USER)
    else {
      d = CC(
        i.mockUserToken,
        (o = e._app) === null || o === void 0 ? void 0 : o.options.projectId
      )
      const w = i.mockUserToken.sub || i.mockUserToken.user_id
      if (!w)
        throw new Jt(
          Gt.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      g = new Dt(w)
    }
    e._authCredentials = new H3(new X1(d, g))
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
      (this.t_ = new Y3(this, 'async_queue_retry')),
      (this.Vu = () => {
        const i = Nh()
        i &&
          Mn('AsyncQueue', 'Visibility state changed to ' + i.visibilityState),
          this.t_.jo()
      }),
      (this.mu = t)
    const n = Nh()
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
      const n = Nh()
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
        if (!J3(t)) throw t
        Mn('AsyncQueue', 'Operation failed with retryable error: ' + t)
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
            const o = (function (u) {
              let c = u.message || ''
              return (
                u.stack &&
                  (c = u.stack.includes(u.message)
                    ? u.stack
                    : u.message +
                      `
` +
                      u.stack),
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
    const o = Rp.createAndSchedule(this, t, n, i, (u) => this.yu(u))
    return this.Tu.push(o), o
  }
  fu() {
    this.Eu && Np()
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
class r9 extends Z1 {
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
function i9(e, t) {
  const n = typeof e == 'object' ? e : T3(),
    i = typeof e == 'string' ? e : t || '(default)',
    o = L3(n, 'firestore').getImmediate({ identifier: i })
  if (!o._initialized) {
    const u = EC('firestore')
    u && n9(o, ...u)
  }
  return o
}
;(function (e, t = !0) {
  ;(function (n) {
    iu = n
  })(I3),
    xc(
      new Js(
        'firestore',
        (n, { instanceIdentifier: i, options: o }) => {
          const u = n.getProvider('app').getImmediate(),
            c = new r9(
              new W3(n.getProvider('auth-internal')),
              new G3(n.getProvider('app-check-internal')),
              (function (d, g) {
                if (
                  !Object.prototype.hasOwnProperty.apply(d.options, [
                    'projectId',
                  ])
                )
                  throw new Jt(
                    Gt.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new Cc(d.options.projectId, g)
              })(u, i),
              u
            )
          return (
            (o = Object.assign({ useFetchStreams: t }, o)), c._setSettings(o), c
          )
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    so(t0, '4.7.4', e),
    so(t0, '4.7.4', 'esm2017')
})()
var a9 = 'firebase',
  o9 = '11.0.1'
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
 */ so(a9, o9, 'app')
const s9 = {
    apiKey: 'AIzaSyDVlRzfLEHgZDHF8brQyVqoQvIvgIkrcnA',
    authDomain: 'visamaz-69bdf.firebaseapp.com',
    projectId: 'visamaz-69bdf',
    storageBucket: 'visamaz-69bdf.firebasestorage.app',
    messagingSenderId: '521376424647',
    appId: '1:521376424647:web:d74bf4909c2c2e096b14e2',
  },
  u9 = K1(s9)
i9(u9)
var Ac = { exports: {} }
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ Ac.exports
;(function (e, t) {
  ;(function () {
    var n,
      i = '4.17.21',
      o = 200,
      u = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      c = 'Expected a function',
      d = 'Invalid `variable` option passed into `_.template`',
      g = '__lodash_hash_undefined__',
      w = 500,
      P = '__lodash_placeholder__',
      O = 1,
      k = 2,
      V = 4,
      U = 1,
      W = 2,
      J = 1,
      T = 2,
      x = 4,
      N = 8,
      B = 16,
      G = 32,
      X = 64,
      S = 128,
      _ = 256,
      C = 512,
      L = 30,
      R = '...',
      F = 800,
      A = 16,
      Ze = 1,
      $t = 2,
      Hn = 3,
      xe = 1 / 0,
      Z = 9007199254740991,
      ae = 17976931348623157e292,
      le = NaN,
      we = 4294967295,
      Pe = we - 1,
      Ve = we >>> 1,
      Pn = [
        ['ary', S],
        ['bind', J],
        ['bindKey', T],
        ['curry', N],
        ['curryRight', B],
        ['flip', C],
        ['partial', G],
        ['partialRight', X],
        ['rearg', _],
      ],
      yt = '[object Arguments]',
      Bt = '[object Array]',
      dn = '[object AsyncFunction]',
      Ei = '[object Boolean]',
      xi = '[object Date]',
      ua = '[object DOMException]',
      nr = '[object Error]',
      zr = '[object Function]',
      la = '[object GeneratorFunction]',
      It = '[object Map]',
      rr = '[object Number]',
      au = '[object Null]',
      pn = '[object Object]',
      ou = '[object Promise]',
      su = '[object Proxy]',
      jr = '[object RegExp]',
      Tt = '[object Set]',
      Dr = '[object String]',
      ca = '[object Symbol]',
      _o = '[object Undefined]',
      ir = '[object WeakMap]',
      ko = '[object WeakSet]',
      Ge = '[object ArrayBuffer]',
      Je = '[object DataView]',
      Fr = '[object Float32Array]',
      fa = '[object Float64Array]',
      ha = '[object Int8Array]',
      So = '[object Int16Array]',
      ar = '[object Int32Array]',
      da = '[object Uint8Array]',
      pa = '[object Uint8ClampedArray]',
      Ci = '[object Uint16Array]',
      Eo = '[object Uint32Array]',
      Gc = /\b__p \+= '';/g,
      xo = /\b(__p \+=) '' \+/g,
      uu = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Ai = /&(?:amp|lt|gt|quot|#39);/g,
      ga = /[&<>"']/g,
      Co = RegExp(Ai.source),
      Ur = RegExp(ga.source),
      lu = /<%-([\s\S]+?)%>/g,
      Ao = /<%([\s\S]+?)%>/g,
      Lo = /<%=([\s\S]+?)%>/g,
      Li = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      cu = /^\w*$/,
      dt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ma = /[\\^$.*+?()[\]{}|]/g,
      Pi = RegExp(ma.source),
      or = /^\s+/,
      Jc = /\s/,
      Yc = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Mr = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Xc = /,? & /,
      Zc = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Po = /[()=,{}\[\]\/\s]/,
      va = /\\(\\)?/g,
      Wn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Oo = /\w*$/,
      fu = /^[-+]0x[0-9a-f]+$/i,
      Io = /^0b[01]+$/i,
      To = /^\[object .+?Constructor\]$/,
      hu = /^0o[0-7]+$/i,
      du = /^(?:0|[1-9]\d*)$/,
      ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      sr = /($^)/,
      pu = /['\n\r\u2028\u2029\\]/g,
      $r = '\\ud800-\\udfff',
      Oi = '\\u0300-\\u036f',
      ur = '\\ufe20-\\ufe2f',
      No = '\\u20d0-\\u20ff',
      gu = Oi + ur + No,
      Ro = '\\u2700-\\u27bf',
      zo = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      mu = '\\xac\\xb1\\xd7\\xf7',
      jo = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      Do = '\\u2000-\\u206f',
      vu =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      Fo = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      yu = '\\ufe0e\\ufe0f',
      bu = mu + jo + Do + vu,
      ya = "['’]",
      wu = '[' + $r + ']',
      _u = '[' + bu + ']',
      gn = '[' + gu + ']',
      mn = '\\d+',
      ba = '[' + Ro + ']',
      Ii = '[' + zo + ']',
      Uo = '[^' + $r + bu + mn + Ro + zo + Fo + ']',
      Oe = '\\ud83c[\\udffb-\\udfff]',
      wa = '(?:' + gn + '|' + Oe + ')',
      Br = '[^' + $r + ']',
      lr = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      Mo = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      cr = '[' + Fo + ']',
      ku = '\\u200d',
      Su = '(?:' + Ii + '|' + Uo + ')',
      tf = '(?:' + cr + '|' + Uo + ')',
      Eu = '(?:' + ya + '(?:d|ll|m|re|s|t|ve))?',
      Vr = '(?:' + ya + '(?:D|LL|M|RE|S|T|VE))?',
      On = wa + '?',
      $o = '[' + yu + ']?',
      xu = '(?:' + ku + '(?:' + [Br, lr, Mo].join('|') + ')' + $o + On + ')*',
      Cu = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      Hr = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      Au = $o + On + xu,
      nf = '(?:' + [ba, lr, Mo].join('|') + ')' + Au,
      rf = '(?:' + [Br + gn + '?', gn, lr, Mo, wu].join('|') + ')',
      qn = RegExp(ya, 'g'),
      af = RegExp(gn, 'g'),
      Bo = RegExp(Oe + '(?=' + Oe + ')|' + rf + Au, 'g'),
      _a = RegExp(
        [
          cr + '?' + Ii + '+' + Eu + '(?=' + [_u, cr, '$'].join('|') + ')',
          tf + '+' + Vr + '(?=' + [_u, cr + Su, '$'].join('|') + ')',
          cr + '?' + Su + '+' + Eu,
          cr + '+' + Vr,
          Hr,
          Cu,
          mn,
          nf,
        ].join('|'),
        'g'
      ),
      ka = RegExp('[' + ku + $r + gu + yu + ']'),
      Lu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Ti = [
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
      Ni = -1,
      Ne = {}
    ;(Ne[Fr] =
      Ne[fa] =
      Ne[ha] =
      Ne[So] =
      Ne[ar] =
      Ne[da] =
      Ne[pa] =
      Ne[Ci] =
      Ne[Eo] =
        !0),
      (Ne[yt] =
        Ne[Bt] =
        Ne[Ge] =
        Ne[Ei] =
        Ne[Je] =
        Ne[xi] =
        Ne[nr] =
        Ne[zr] =
        Ne[It] =
        Ne[rr] =
        Ne[pn] =
        Ne[jr] =
        Ne[Tt] =
        Ne[Dr] =
        Ne[ir] =
          !1)
    var Ae = {}
    ;(Ae[yt] =
      Ae[Bt] =
      Ae[Ge] =
      Ae[Je] =
      Ae[Ei] =
      Ae[xi] =
      Ae[Fr] =
      Ae[fa] =
      Ae[ha] =
      Ae[So] =
      Ae[ar] =
      Ae[It] =
      Ae[rr] =
      Ae[pn] =
      Ae[jr] =
      Ae[Tt] =
      Ae[Dr] =
      Ae[ca] =
      Ae[da] =
      Ae[pa] =
      Ae[Ci] =
      Ae[Eo] =
        !0),
      (Ae[nr] = Ae[zr] = Ae[ir] = !1)
    var He = {
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
      of = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      sf = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      Pu = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      Ou = parseFloat,
      Iu = parseInt,
      Ri = typeof ss == 'object' && ss && ss.Object === Object && ss,
      Tu = typeof self == 'object' && self && self.Object === Object && self,
      je = Ri || Tu || Function('return this')(),
      Sa = t && !t.nodeType && t,
      fr = Sa && !0 && e && !e.nodeType && e,
      Wr = fr && fr.exports === Sa,
      Ea = Wr && Ri.process,
      bt = (function () {
        try {
          var z = fr && fr.require && fr.require('util').types
          return z || (Ea && Ea.binding && Ea.binding('util'))
        } catch {}
      })(),
      zi = bt && bt.isArrayBuffer,
      Vo = bt && bt.isDate,
      ji = bt && bt.isMap,
      Nu = bt && bt.isRegExp,
      Ho = bt && bt.isSet,
      qr = bt && bt.isTypedArray
    function wt(z, H, $) {
      switch ($.length) {
        case 0:
          return z.call(H)
        case 1:
          return z.call(H, $[0])
        case 2:
          return z.call(H, $[0], $[1])
        case 3:
          return z.call(H, $[0], $[1], $[2])
      }
      return z.apply(H, $)
    }
    function Ru(z, H, $, ne) {
      for (var ce = -1, Ce = z == null ? 0 : z.length; ++ce < Ce; ) {
        var ot = z[ce]
        H(ne, ot, $(ot), z)
      }
      return ne
    }
    function _t(z, H) {
      for (
        var $ = -1, ne = z == null ? 0 : z.length;
        ++$ < ne && H(z[$], $, z) !== !1;

      );
      return z
    }
    function Wo(z, H) {
      for (var $ = z == null ? 0 : z.length; $-- && H(z[$], $, z) !== !1; );
      return z
    }
    function qo(z, H) {
      for (var $ = -1, ne = z == null ? 0 : z.length; ++$ < ne; )
        if (!H(z[$], $, z)) return !1
      return !0
    }
    function tn(z, H) {
      for (
        var $ = -1, ne = z == null ? 0 : z.length, ce = 0, Ce = [];
        ++$ < ne;

      ) {
        var ot = z[$]
        H(ot, $, z) && (Ce[ce++] = ot)
      }
      return Ce
    }
    function Di(z, H) {
      var $ = z == null ? 0 : z.length
      return !!$ && f(z, H, 0) > -1
    }
    function xa(z, H, $) {
      for (var ne = -1, ce = z == null ? 0 : z.length; ++ne < ce; )
        if ($(H, z[ne])) return !0
      return !1
    }
    function Ee(z, H) {
      for (
        var $ = -1, ne = z == null ? 0 : z.length, ce = Array(ne);
        ++$ < ne;

      )
        ce[$] = H(z[$], $, z)
      return ce
    }
    function In(z, H) {
      for (var $ = -1, ne = H.length, ce = z.length; ++$ < ne; )
        z[ce + $] = H[$]
      return z
    }
    function Ca(z, H, $, ne) {
      var ce = -1,
        Ce = z == null ? 0 : z.length
      for (ne && Ce && ($ = z[++ce]); ++ce < Ce; ) $ = H($, z[ce], ce, z)
      return $
    }
    function zu(z, H, $, ne) {
      var ce = z == null ? 0 : z.length
      for (ne && ce && ($ = z[--ce]); ce--; ) $ = H($, z[ce], ce, z)
      return $
    }
    function Aa(z, H) {
      for (var $ = -1, ne = z == null ? 0 : z.length; ++$ < ne; )
        if (H(z[$], $, z)) return !0
      return !1
    }
    var Vt = M('length')
    function ju(z) {
      return z.split('')
    }
    function Du(z) {
      return z.match(Zc) || []
    }
    function hr(z, H, $) {
      var ne
      return (
        $(z, function (ce, Ce, ot) {
          if (H(ce, Ce, ot)) return (ne = Ce), !1
        }),
        ne
      )
    }
    function s(z, H, $, ne) {
      for (var ce = z.length, Ce = $ + (ne ? 1 : -1); ne ? Ce-- : ++Ce < ce; )
        if (H(z[Ce], Ce, z)) return Ce
      return -1
    }
    function f(z, H, $) {
      return H === H ? cb(z, H, $) : s(z, y, $)
    }
    function p(z, H, $, ne) {
      for (var ce = $ - 1, Ce = z.length; ++ce < Ce; )
        if (ne(z[ce], H)) return ce
      return -1
    }
    function y(z) {
      return z !== z
    }
    function D(z, H) {
      var $ = z == null ? 0 : z.length
      return $ ? ke(z, H) / $ : le
    }
    function M(z) {
      return function (H) {
        return H == null ? n : H[z]
      }
    }
    function ee(z) {
      return function (H) {
        return z == null ? n : z[H]
      }
    }
    function Re(z, H, $, ne, ce) {
      return (
        ce(z, function (Ce, ot, De) {
          $ = ne ? ((ne = !1), Ce) : H($, Ce, ot, De)
        }),
        $
      )
    }
    function at(z, H) {
      var $ = z.length
      for (z.sort(H); $--; ) z[$] = z[$].value
      return z
    }
    function ke(z, H) {
      for (var $, ne = -1, ce = z.length; ++ne < ce; ) {
        var Ce = H(z[ne])
        Ce !== n && ($ = $ === n ? Ce : $ + Ce)
      }
      return $
    }
    function rt(z, H) {
      for (var $ = -1, ne = Array(z); ++$ < z; ) ne[$] = H($)
      return ne
    }
    function kt(z, H) {
      return Ee(H, function ($) {
        return [$, z[$]]
      })
    }
    function dr(z) {
      return z && z.slice(0, Fp(z) + 1).replace(or, '')
    }
    function Ue(z) {
      return function (H) {
        return z(H)
      }
    }
    function Kr(z, H) {
      return Ee(H, function ($) {
        return z[$]
      })
    }
    function pr(z, H) {
      return z.has(H)
    }
    function zp(z, H) {
      for (var $ = -1, ne = z.length; ++$ < ne && f(H, z[$], 0) > -1; );
      return $
    }
    function jp(z, H) {
      for (var $ = z.length; $-- && f(H, z[$], 0) > -1; );
      return $
    }
    function nb(z, H) {
      for (var $ = z.length, ne = 0; $--; ) z[$] === H && ++ne
      return ne
    }
    var rb = ee(He),
      ib = ee(of)
    function ab(z) {
      return '\\' + Pu[z]
    }
    function ob(z, H) {
      return z == null ? n : z[H]
    }
    function La(z) {
      return ka.test(z)
    }
    function sb(z) {
      return Lu.test(z)
    }
    function ub(z) {
      for (var H, $ = []; !(H = z.next()).done; ) $.push(H.value)
      return $
    }
    function uf(z) {
      var H = -1,
        $ = Array(z.size)
      return (
        z.forEach(function (ne, ce) {
          $[++H] = [ce, ne]
        }),
        $
      )
    }
    function Dp(z, H) {
      return function ($) {
        return z(H($))
      }
    }
    function Qr(z, H) {
      for (var $ = -1, ne = z.length, ce = 0, Ce = []; ++$ < ne; ) {
        var ot = z[$]
        ;(ot === H || ot === P) && ((z[$] = P), (Ce[ce++] = $))
      }
      return Ce
    }
    function Fu(z) {
      var H = -1,
        $ = Array(z.size)
      return (
        z.forEach(function (ne) {
          $[++H] = ne
        }),
        $
      )
    }
    function lb(z) {
      var H = -1,
        $ = Array(z.size)
      return (
        z.forEach(function (ne) {
          $[++H] = [ne, ne]
        }),
        $
      )
    }
    function cb(z, H, $) {
      for (var ne = $ - 1, ce = z.length; ++ne < ce; )
        if (z[ne] === H) return ne
      return -1
    }
    function fb(z, H, $) {
      for (var ne = $ + 1; ne--; ) if (z[ne] === H) return ne
      return ne
    }
    function Pa(z) {
      return La(z) ? db(z) : Vt(z)
    }
    function Tn(z) {
      return La(z) ? pb(z) : ju(z)
    }
    function Fp(z) {
      for (var H = z.length; H-- && Jc.test(z.charAt(H)); );
      return H
    }
    var hb = ee(sf)
    function db(z) {
      for (var H = (Bo.lastIndex = 0); Bo.test(z); ) ++H
      return H
    }
    function pb(z) {
      return z.match(Bo) || []
    }
    function gb(z) {
      return z.match(_a) || []
    }
    var mb = function z(H) {
        H = H == null ? je : Oa.defaults(je.Object(), H, Oa.pick(je, Ti))
        var $ = H.Array,
          ne = H.Date,
          ce = H.Error,
          Ce = H.Function,
          ot = H.Math,
          De = H.Object,
          lf = H.RegExp,
          vb = H.String,
          vn = H.TypeError,
          Uu = $.prototype,
          yb = Ce.prototype,
          Ia = De.prototype,
          Mu = H['__core-js_shared__'],
          $u = yb.toString,
          Ie = Ia.hasOwnProperty,
          bb = 0,
          Up = (function () {
            var r = /[^.]+$/.exec((Mu && Mu.keys && Mu.keys.IE_PROTO) || '')
            return r ? 'Symbol(src)_1.' + r : ''
          })(),
          Bu = Ia.toString,
          wb = $u.call(De),
          _b = je._,
          kb = lf(
            '^' +
              $u
                .call(Ie)
                .replace(ma, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          Vu = Wr ? H.Buffer : n,
          Gr = H.Symbol,
          Hu = H.Uint8Array,
          Mp = Vu ? Vu.allocUnsafe : n,
          Wu = Dp(De.getPrototypeOf, De),
          $p = De.create,
          Bp = Ia.propertyIsEnumerable,
          qu = Uu.splice,
          Vp = Gr ? Gr.isConcatSpreadable : n,
          Ko = Gr ? Gr.iterator : n,
          Fi = Gr ? Gr.toStringTag : n,
          Ku = (function () {
            try {
              var r = Vi(De, 'defineProperty')
              return r({}, '', {}), r
            } catch {}
          })(),
          Sb = H.clearTimeout !== je.clearTimeout && H.clearTimeout,
          Eb = ne && ne.now !== je.Date.now && ne.now,
          xb = H.setTimeout !== je.setTimeout && H.setTimeout,
          Qu = ot.ceil,
          Gu = ot.floor,
          cf = De.getOwnPropertySymbols,
          Cb = Vu ? Vu.isBuffer : n,
          Hp = H.isFinite,
          Ab = Uu.join,
          Lb = Dp(De.keys, De),
          st = ot.max,
          St = ot.min,
          Pb = ne.now,
          Ob = H.parseInt,
          Wp = ot.random,
          Ib = Uu.reverse,
          ff = Vi(H, 'DataView'),
          Qo = Vi(H, 'Map'),
          hf = Vi(H, 'Promise'),
          Ta = Vi(H, 'Set'),
          Go = Vi(H, 'WeakMap'),
          Jo = Vi(De, 'create'),
          Ju = Go && new Go(),
          Na = {},
          Tb = Hi(ff),
          Nb = Hi(Qo),
          Rb = Hi(hf),
          zb = Hi(Ta),
          jb = Hi(Go),
          Yu = Gr ? Gr.prototype : n,
          Yo = Yu ? Yu.valueOf : n,
          qp = Yu ? Yu.toString : n
        function v(r) {
          if (Ye(r) && !he(r) && !(r instanceof ve)) {
            if (r instanceof yn) return r
            if (Ie.call(r, '__wrapped__')) return Kg(r)
          }
          return new yn(r)
        }
        var Ra = (function () {
          function r() {}
          return function (a) {
            if (!We(a)) return {}
            if ($p) return $p(a)
            r.prototype = a
            var l = new r()
            return (r.prototype = n), l
          }
        })()
        function Xu() {}
        function yn(r, a) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!a),
            (this.__index__ = 0),
            (this.__values__ = n)
        }
        ;(v.templateSettings = {
          escape: lu,
          evaluate: Ao,
          interpolate: Lo,
          variable: '',
          imports: { _: v },
        }),
          (v.prototype = Xu.prototype),
          (v.prototype.constructor = v),
          (yn.prototype = Ra(Xu.prototype)),
          (yn.prototype.constructor = yn)
        function ve(r) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = we),
            (this.__views__ = [])
        }
        function Db() {
          var r = new ve(this.__wrapped__)
          return (
            (r.__actions__ = Ht(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = Ht(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = Ht(this.__views__)),
            r
          )
        }
        function Fb() {
          if (this.__filtered__) {
            var r = new ve(this)
            ;(r.__dir__ = -1), (r.__filtered__ = !0)
          } else (r = this.clone()), (r.__dir__ *= -1)
          return r
        }
        function Ub() {
          var r = this.__wrapped__.value(),
            a = this.__dir__,
            l = he(r),
            h = a < 0,
            m = l ? r.length : 0,
            b = Yw(0, m, this.__views__),
            E = b.start,
            I = b.end,
            j = I - E,
            q = h ? I : E - 1,
            K = this.__iteratees__,
            Q = K.length,
            te = 0,
            ie = St(j, this.__takeCount__)
          if (!l || (!h && m == j && ie == j)) return mg(r, this.__actions__)
          var se = []
          e: for (; j-- && te < ie; ) {
            q += a
            for (var pe = -1, ue = r[q]; ++pe < Q; ) {
              var me = K[pe],
                be = me.iteratee,
                an = me.type,
                zt = be(ue)
              if (an == $t) ue = zt
              else if (!zt) {
                if (an == Ze) continue e
                break e
              }
            }
            se[te++] = ue
          }
          return se
        }
        ;(ve.prototype = Ra(Xu.prototype)), (ve.prototype.constructor = ve)
        function Ui(r) {
          var a = -1,
            l = r == null ? 0 : r.length
          for (this.clear(); ++a < l; ) {
            var h = r[a]
            this.set(h[0], h[1])
          }
        }
        function Mb() {
          ;(this.__data__ = Jo ? Jo(null) : {}), (this.size = 0)
        }
        function $b(r) {
          var a = this.has(r) && delete this.__data__[r]
          return (this.size -= a ? 1 : 0), a
        }
        function Bb(r) {
          var a = this.__data__
          if (Jo) {
            var l = a[r]
            return l === g ? n : l
          }
          return Ie.call(a, r) ? a[r] : n
        }
        function Vb(r) {
          var a = this.__data__
          return Jo ? a[r] !== n : Ie.call(a, r)
        }
        function Hb(r, a) {
          var l = this.__data__
          return (
            (this.size += this.has(r) ? 0 : 1),
            (l[r] = Jo && a === n ? g : a),
            this
          )
        }
        ;(Ui.prototype.clear = Mb),
          (Ui.prototype.delete = $b),
          (Ui.prototype.get = Bb),
          (Ui.prototype.has = Vb),
          (Ui.prototype.set = Hb)
        function gr(r) {
          var a = -1,
            l = r == null ? 0 : r.length
          for (this.clear(); ++a < l; ) {
            var h = r[a]
            this.set(h[0], h[1])
          }
        }
        function Wb() {
          ;(this.__data__ = []), (this.size = 0)
        }
        function qb(r) {
          var a = this.__data__,
            l = Zu(a, r)
          if (l < 0) return !1
          var h = a.length - 1
          return l == h ? a.pop() : qu.call(a, l, 1), --this.size, !0
        }
        function Kb(r) {
          var a = this.__data__,
            l = Zu(a, r)
          return l < 0 ? n : a[l][1]
        }
        function Qb(r) {
          return Zu(this.__data__, r) > -1
        }
        function Gb(r, a) {
          var l = this.__data__,
            h = Zu(l, r)
          return h < 0 ? (++this.size, l.push([r, a])) : (l[h][1] = a), this
        }
        ;(gr.prototype.clear = Wb),
          (gr.prototype.delete = qb),
          (gr.prototype.get = Kb),
          (gr.prototype.has = Qb),
          (gr.prototype.set = Gb)
        function mr(r) {
          var a = -1,
            l = r == null ? 0 : r.length
          for (this.clear(); ++a < l; ) {
            var h = r[a]
            this.set(h[0], h[1])
          }
        }
        function Jb() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new Ui(),
              map: new (Qo || gr)(),
              string: new Ui(),
            })
        }
        function Yb(r) {
          var a = fl(this, r).delete(r)
          return (this.size -= a ? 1 : 0), a
        }
        function Xb(r) {
          return fl(this, r).get(r)
        }
        function Zb(r) {
          return fl(this, r).has(r)
        }
        function ew(r, a) {
          var l = fl(this, r),
            h = l.size
          return l.set(r, a), (this.size += l.size == h ? 0 : 1), this
        }
        ;(mr.prototype.clear = Jb),
          (mr.prototype.delete = Yb),
          (mr.prototype.get = Xb),
          (mr.prototype.has = Zb),
          (mr.prototype.set = ew)
        function Mi(r) {
          var a = -1,
            l = r == null ? 0 : r.length
          for (this.__data__ = new mr(); ++a < l; ) this.add(r[a])
        }
        function tw(r) {
          return this.__data__.set(r, g), this
        }
        function nw(r) {
          return this.__data__.has(r)
        }
        ;(Mi.prototype.add = Mi.prototype.push = tw), (Mi.prototype.has = nw)
        function Nn(r) {
          var a = (this.__data__ = new gr(r))
          this.size = a.size
        }
        function rw() {
          ;(this.__data__ = new gr()), (this.size = 0)
        }
        function iw(r) {
          var a = this.__data__,
            l = a.delete(r)
          return (this.size = a.size), l
        }
        function aw(r) {
          return this.__data__.get(r)
        }
        function ow(r) {
          return this.__data__.has(r)
        }
        function sw(r, a) {
          var l = this.__data__
          if (l instanceof gr) {
            var h = l.__data__
            if (!Qo || h.length < o - 1)
              return h.push([r, a]), (this.size = ++l.size), this
            l = this.__data__ = new mr(h)
          }
          return l.set(r, a), (this.size = l.size), this
        }
        ;(Nn.prototype.clear = rw),
          (Nn.prototype.delete = iw),
          (Nn.prototype.get = aw),
          (Nn.prototype.has = ow),
          (Nn.prototype.set = sw)
        function Kp(r, a) {
          var l = he(r),
            h = !l && Wi(r),
            m = !l && !h && ei(r),
            b = !l && !h && !m && Fa(r),
            E = l || h || m || b,
            I = E ? rt(r.length, vb) : [],
            j = I.length
          for (var q in r)
            (a || Ie.call(r, q)) &&
              !(
                E &&
                (q == 'length' ||
                  (m && (q == 'offset' || q == 'parent')) ||
                  (b &&
                    (q == 'buffer' ||
                      q == 'byteLength' ||
                      q == 'byteOffset')) ||
                  wr(q, j))
              ) &&
              I.push(q)
          return I
        }
        function Qp(r) {
          var a = r.length
          return a ? r[Sf(0, a - 1)] : n
        }
        function uw(r, a) {
          return hl(Ht(r), $i(a, 0, r.length))
        }
        function lw(r) {
          return hl(Ht(r))
        }
        function df(r, a, l) {
          ;((l !== n && !Rn(r[a], l)) || (l === n && !(a in r))) && vr(r, a, l)
        }
        function Xo(r, a, l) {
          var h = r[a]
          ;(!(Ie.call(r, a) && Rn(h, l)) || (l === n && !(a in r))) &&
            vr(r, a, l)
        }
        function Zu(r, a) {
          for (var l = r.length; l--; ) if (Rn(r[l][0], a)) return l
          return -1
        }
        function cw(r, a, l, h) {
          return (
            Jr(r, function (m, b, E) {
              a(h, m, l(m), E)
            }),
            h
          )
        }
        function Gp(r, a) {
          return r && Qn(a, ct(a), r)
        }
        function fw(r, a) {
          return r && Qn(a, qt(a), r)
        }
        function vr(r, a, l) {
          a == '__proto__' && Ku
            ? Ku(r, a, {
                configurable: !0,
                enumerable: !0,
                value: l,
                writable: !0,
              })
            : (r[a] = l)
        }
        function pf(r, a) {
          for (var l = -1, h = a.length, m = $(h), b = r == null; ++l < h; )
            m[l] = b ? n : Qf(r, a[l])
          return m
        }
        function $i(r, a, l) {
          return (
            r === r &&
              (l !== n && (r = r <= l ? r : l),
              a !== n && (r = r >= a ? r : a)),
            r
          )
        }
        function bn(r, a, l, h, m, b) {
          var E,
            I = a & O,
            j = a & k,
            q = a & V
          if ((l && (E = m ? l(r, h, m, b) : l(r)), E !== n)) return E
          if (!We(r)) return r
          var K = he(r)
          if (K) {
            if (((E = Zw(r)), !I)) return Ht(r, E)
          } else {
            var Q = Et(r),
              te = Q == zr || Q == la
            if (ei(r)) return bg(r, I)
            if (Q == pn || Q == yt || (te && !m)) {
              if (((E = j || te ? {} : Fg(r)), !I))
                return j ? Bw(r, fw(E, r)) : $w(r, Gp(E, r))
            } else {
              if (!Ae[Q]) return m ? r : {}
              E = e2(r, Q, I)
            }
          }
          b || (b = new Nn())
          var ie = b.get(r)
          if (ie) return ie
          b.set(r, E),
            dm(r)
              ? r.forEach(function (ue) {
                  E.add(bn(ue, a, l, ue, r, b))
                })
              : fm(r) &&
                r.forEach(function (ue, me) {
                  E.set(me, bn(ue, a, l, me, r, b))
                })
          var se = q ? (j ? Rf : Nf) : j ? qt : ct,
            pe = K ? n : se(r)
          return (
            _t(pe || r, function (ue, me) {
              pe && ((me = ue), (ue = r[me])), Xo(E, me, bn(ue, a, l, me, r, b))
            }),
            E
          )
        }
        function hw(r) {
          var a = ct(r)
          return function (l) {
            return Jp(l, r, a)
          }
        }
        function Jp(r, a, l) {
          var h = l.length
          if (r == null) return !h
          for (r = De(r); h--; ) {
            var m = l[h],
              b = a[m],
              E = r[m]
            if ((E === n && !(m in r)) || !b(E)) return !1
          }
          return !0
        }
        function Yp(r, a, l) {
          if (typeof r != 'function') throw new vn(c)
          return as(function () {
            r.apply(n, l)
          }, a)
        }
        function Zo(r, a, l, h) {
          var m = -1,
            b = Di,
            E = !0,
            I = r.length,
            j = [],
            q = a.length
          if (!I) return j
          l && (a = Ee(a, Ue(l))),
            h
              ? ((b = xa), (E = !1))
              : a.length >= o && ((b = pr), (E = !1), (a = new Mi(a)))
          e: for (; ++m < I; ) {
            var K = r[m],
              Q = l == null ? K : l(K)
            if (((K = h || K !== 0 ? K : 0), E && Q === Q)) {
              for (var te = q; te--; ) if (a[te] === Q) continue e
              j.push(K)
            } else b(a, Q, h) || j.push(K)
          }
          return j
        }
        var Jr = Eg(Kn),
          Xp = Eg(mf, !0)
        function dw(r, a) {
          var l = !0
          return (
            Jr(r, function (h, m, b) {
              return (l = !!a(h, m, b)), l
            }),
            l
          )
        }
        function el(r, a, l) {
          for (var h = -1, m = r.length; ++h < m; ) {
            var b = r[h],
              E = a(b)
            if (E != null && (I === n ? E === E && !rn(E) : l(E, I)))
              var I = E,
                j = b
          }
          return j
        }
        function pw(r, a, l, h) {
          var m = r.length
          for (
            l = de(l),
              l < 0 && (l = -l > m ? 0 : m + l),
              h = h === n || h > m ? m : de(h),
              h < 0 && (h += m),
              h = l > h ? 0 : gm(h);
            l < h;

          )
            r[l++] = a
          return r
        }
        function Zp(r, a) {
          var l = []
          return (
            Jr(r, function (h, m, b) {
              a(h, m, b) && l.push(h)
            }),
            l
          )
        }
        function pt(r, a, l, h, m) {
          var b = -1,
            E = r.length
          for (l || (l = n2), m || (m = []); ++b < E; ) {
            var I = r[b]
            a > 0 && l(I)
              ? a > 1
                ? pt(I, a - 1, l, h, m)
                : In(m, I)
              : h || (m[m.length] = I)
          }
          return m
        }
        var gf = xg(),
          eg = xg(!0)
        function Kn(r, a) {
          return r && gf(r, a, ct)
        }
        function mf(r, a) {
          return r && eg(r, a, ct)
        }
        function tl(r, a) {
          return tn(a, function (l) {
            return _r(r[l])
          })
        }
        function Bi(r, a) {
          a = Xr(a, r)
          for (var l = 0, h = a.length; r != null && l < h; ) r = r[Gn(a[l++])]
          return l && l == h ? r : n
        }
        function tg(r, a, l) {
          var h = a(r)
          return he(r) ? h : In(h, l(r))
        }
        function Nt(r) {
          return r == null
            ? r === n
              ? _o
              : au
            : Fi && Fi in De(r)
            ? Jw(r)
            : l2(r)
        }
        function vf(r, a) {
          return r > a
        }
        function gw(r, a) {
          return r != null && Ie.call(r, a)
        }
        function mw(r, a) {
          return r != null && a in De(r)
        }
        function vw(r, a, l) {
          return r >= St(a, l) && r < st(a, l)
        }
        function yf(r, a, l) {
          for (
            var h = l ? xa : Di,
              m = r[0].length,
              b = r.length,
              E = b,
              I = $(b),
              j = 1 / 0,
              q = [];
            E--;

          ) {
            var K = r[E]
            E && a && (K = Ee(K, Ue(a))),
              (j = St(K.length, j)),
              (I[E] =
                !l && (a || (m >= 120 && K.length >= 120)) ? new Mi(E && K) : n)
          }
          K = r[0]
          var Q = -1,
            te = I[0]
          e: for (; ++Q < m && q.length < j; ) {
            var ie = K[Q],
              se = a ? a(ie) : ie
            if (
              ((ie = l || ie !== 0 ? ie : 0), !(te ? pr(te, se) : h(q, se, l)))
            ) {
              for (E = b; --E; ) {
                var pe = I[E]
                if (!(pe ? pr(pe, se) : h(r[E], se, l))) continue e
              }
              te && te.push(se), q.push(ie)
            }
          }
          return q
        }
        function yw(r, a, l, h) {
          return (
            Kn(r, function (m, b, E) {
              a(h, l(m), b, E)
            }),
            h
          )
        }
        function es(r, a, l) {
          ;(a = Xr(a, r)), (r = Bg(r, a))
          var h = r == null ? r : r[Gn(_n(a))]
          return h == null ? n : wt(h, r, l)
        }
        function ng(r) {
          return Ye(r) && Nt(r) == yt
        }
        function bw(r) {
          return Ye(r) && Nt(r) == Ge
        }
        function ww(r) {
          return Ye(r) && Nt(r) == xi
        }
        function ts(r, a, l, h, m) {
          return r === a
            ? !0
            : r == null || a == null || (!Ye(r) && !Ye(a))
            ? r !== r && a !== a
            : _w(r, a, l, h, ts, m)
        }
        function _w(r, a, l, h, m, b) {
          var E = he(r),
            I = he(a),
            j = E ? Bt : Et(r),
            q = I ? Bt : Et(a)
          ;(j = j == yt ? pn : j), (q = q == yt ? pn : q)
          var K = j == pn,
            Q = q == pn,
            te = j == q
          if (te && ei(r)) {
            if (!ei(a)) return !1
            ;(E = !0), (K = !1)
          }
          if (te && !K)
            return (
              b || (b = new Nn()),
              E || Fa(r) ? zg(r, a, l, h, m, b) : Qw(r, a, j, l, h, m, b)
            )
          if (!(l & U)) {
            var ie = K && Ie.call(r, '__wrapped__'),
              se = Q && Ie.call(a, '__wrapped__')
            if (ie || se) {
              var pe = ie ? r.value() : r,
                ue = se ? a.value() : a
              return b || (b = new Nn()), m(pe, ue, l, h, b)
            }
          }
          return te ? (b || (b = new Nn()), Gw(r, a, l, h, m, b)) : !1
        }
        function kw(r) {
          return Ye(r) && Et(r) == It
        }
        function bf(r, a, l, h) {
          var m = l.length,
            b = m,
            E = !h
          if (r == null) return !b
          for (r = De(r); m--; ) {
            var I = l[m]
            if (E && I[2] ? I[1] !== r[I[0]] : !(I[0] in r)) return !1
          }
          for (; ++m < b; ) {
            I = l[m]
            var j = I[0],
              q = r[j],
              K = I[1]
            if (E && I[2]) {
              if (q === n && !(j in r)) return !1
            } else {
              var Q = new Nn()
              if (h) var te = h(q, K, j, r, a, Q)
              if (!(te === n ? ts(K, q, U | W, h, Q) : te)) return !1
            }
          }
          return !0
        }
        function rg(r) {
          if (!We(r) || i2(r)) return !1
          var a = _r(r) ? kb : To
          return a.test(Hi(r))
        }
        function Sw(r) {
          return Ye(r) && Nt(r) == jr
        }
        function Ew(r) {
          return Ye(r) && Et(r) == Tt
        }
        function xw(r) {
          return Ye(r) && yl(r.length) && !!Ne[Nt(r)]
        }
        function ig(r) {
          return typeof r == 'function'
            ? r
            : r == null
            ? Kt
            : typeof r == 'object'
            ? he(r)
              ? sg(r[0], r[1])
              : og(r)
            : Cm(r)
        }
        function wf(r) {
          if (!is(r)) return Lb(r)
          var a = []
          for (var l in De(r)) Ie.call(r, l) && l != 'constructor' && a.push(l)
          return a
        }
        function Cw(r) {
          if (!We(r)) return u2(r)
          var a = is(r),
            l = []
          for (var h in r)
            (h == 'constructor' && (a || !Ie.call(r, h))) || l.push(h)
          return l
        }
        function _f(r, a) {
          return r < a
        }
        function ag(r, a) {
          var l = -1,
            h = Wt(r) ? $(r.length) : []
          return (
            Jr(r, function (m, b, E) {
              h[++l] = a(m, b, E)
            }),
            h
          )
        }
        function og(r) {
          var a = jf(r)
          return a.length == 1 && a[0][2]
            ? Mg(a[0][0], a[0][1])
            : function (l) {
                return l === r || bf(l, r, a)
              }
        }
        function sg(r, a) {
          return Ff(r) && Ug(a)
            ? Mg(Gn(r), a)
            : function (l) {
                var h = Qf(l, r)
                return h === n && h === a ? Gf(l, r) : ts(a, h, U | W)
              }
        }
        function nl(r, a, l, h, m) {
          r !== a &&
            gf(
              a,
              function (b, E) {
                if ((m || (m = new Nn()), We(b))) Aw(r, a, E, l, nl, h, m)
                else {
                  var I = h ? h(Mf(r, E), b, E + '', r, a, m) : n
                  I === n && (I = b), df(r, E, I)
                }
              },
              qt
            )
        }
        function Aw(r, a, l, h, m, b, E) {
          var I = Mf(r, l),
            j = Mf(a, l),
            q = E.get(j)
          if (q) {
            df(r, l, q)
            return
          }
          var K = b ? b(I, j, l + '', r, a, E) : n,
            Q = K === n
          if (Q) {
            var te = he(j),
              ie = !te && ei(j),
              se = !te && !ie && Fa(j)
            ;(K = j),
              te || ie || se
                ? he(I)
                  ? (K = I)
                  : et(I)
                  ? (K = Ht(I))
                  : ie
                  ? ((Q = !1), (K = bg(j, !0)))
                  : se
                  ? ((Q = !1), (K = wg(j, !0)))
                  : (K = [])
                : os(j) || Wi(j)
                ? ((K = I),
                  Wi(I) ? (K = mm(I)) : (!We(I) || _r(I)) && (K = Fg(j)))
                : (Q = !1)
          }
          Q && (E.set(j, K), m(K, j, h, b, E), E.delete(j)), df(r, l, K)
        }
        function ug(r, a) {
          var l = r.length
          if (l) return (a += a < 0 ? l : 0), wr(a, l) ? r[a] : n
        }
        function lg(r, a, l) {
          a.length
            ? (a = Ee(a, function (b) {
                return he(b)
                  ? function (E) {
                      return Bi(E, b.length === 1 ? b[0] : b)
                    }
                  : b
              }))
            : (a = [Kt])
          var h = -1
          a = Ee(a, Ue(oe()))
          var m = ag(r, function (b, E, I) {
            var j = Ee(a, function (q) {
              return q(b)
            })
            return { criteria: j, index: ++h, value: b }
          })
          return at(m, function (b, E) {
            return Mw(b, E, l)
          })
        }
        function Lw(r, a) {
          return cg(r, a, function (l, h) {
            return Gf(r, h)
          })
        }
        function cg(r, a, l) {
          for (var h = -1, m = a.length, b = {}; ++h < m; ) {
            var E = a[h],
              I = Bi(r, E)
            l(I, E) && ns(b, Xr(E, r), I)
          }
          return b
        }
        function Pw(r) {
          return function (a) {
            return Bi(a, r)
          }
        }
        function kf(r, a, l, h) {
          var m = h ? p : f,
            b = -1,
            E = a.length,
            I = r
          for (r === a && (a = Ht(a)), l && (I = Ee(r, Ue(l))); ++b < E; )
            for (
              var j = 0, q = a[b], K = l ? l(q) : q;
              (j = m(I, K, j, h)) > -1;

            )
              I !== r && qu.call(I, j, 1), qu.call(r, j, 1)
          return r
        }
        function fg(r, a) {
          for (var l = r ? a.length : 0, h = l - 1; l--; ) {
            var m = a[l]
            if (l == h || m !== b) {
              var b = m
              wr(m) ? qu.call(r, m, 1) : Cf(r, m)
            }
          }
          return r
        }
        function Sf(r, a) {
          return r + Gu(Wp() * (a - r + 1))
        }
        function Ow(r, a, l, h) {
          for (var m = -1, b = st(Qu((a - r) / (l || 1)), 0), E = $(b); b--; )
            (E[h ? b : ++m] = r), (r += l)
          return E
        }
        function Ef(r, a) {
          var l = ''
          if (!r || a < 1 || a > Z) return l
          do a % 2 && (l += r), (a = Gu(a / 2)), a && (r += r)
          while (a)
          return l
        }
        function ge(r, a) {
          return $f($g(r, a, Kt), r + '')
        }
        function Iw(r) {
          return Qp(Ua(r))
        }
        function Tw(r, a) {
          var l = Ua(r)
          return hl(l, $i(a, 0, l.length))
        }
        function ns(r, a, l, h) {
          if (!We(r)) return r
          a = Xr(a, r)
          for (
            var m = -1, b = a.length, E = b - 1, I = r;
            I != null && ++m < b;

          ) {
            var j = Gn(a[m]),
              q = l
            if (j === '__proto__' || j === 'constructor' || j === 'prototype')
              return r
            if (m != E) {
              var K = I[j]
              ;(q = h ? h(K, j, I) : n),
                q === n && (q = We(K) ? K : wr(a[m + 1]) ? [] : {})
            }
            Xo(I, j, q), (I = I[j])
          }
          return r
        }
        var hg = Ju
            ? function (r, a) {
                return Ju.set(r, a), r
              }
            : Kt,
          Nw = Ku
            ? function (r, a) {
                return Ku(r, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Yf(a),
                  writable: !0,
                })
              }
            : Kt
        function Rw(r) {
          return hl(Ua(r))
        }
        function wn(r, a, l) {
          var h = -1,
            m = r.length
          a < 0 && (a = -a > m ? 0 : m + a),
            (l = l > m ? m : l),
            l < 0 && (l += m),
            (m = a > l ? 0 : (l - a) >>> 0),
            (a >>>= 0)
          for (var b = $(m); ++h < m; ) b[h] = r[h + a]
          return b
        }
        function zw(r, a) {
          var l
          return (
            Jr(r, function (h, m, b) {
              return (l = a(h, m, b)), !l
            }),
            !!l
          )
        }
        function rl(r, a, l) {
          var h = 0,
            m = r == null ? h : r.length
          if (typeof a == 'number' && a === a && m <= Ve) {
            for (; h < m; ) {
              var b = (h + m) >>> 1,
                E = r[b]
              E !== null && !rn(E) && (l ? E <= a : E < a)
                ? (h = b + 1)
                : (m = b)
            }
            return m
          }
          return xf(r, a, Kt, l)
        }
        function xf(r, a, l, h) {
          var m = 0,
            b = r == null ? 0 : r.length
          if (b === 0) return 0
          a = l(a)
          for (
            var E = a !== a, I = a === null, j = rn(a), q = a === n;
            m < b;

          ) {
            var K = Gu((m + b) / 2),
              Q = l(r[K]),
              te = Q !== n,
              ie = Q === null,
              se = Q === Q,
              pe = rn(Q)
            if (E) var ue = h || se
            else
              q
                ? (ue = se && (h || te))
                : I
                ? (ue = se && te && (h || !ie))
                : j
                ? (ue = se && te && !ie && (h || !pe))
                : ie || pe
                ? (ue = !1)
                : (ue = h ? Q <= a : Q < a)
            ue ? (m = K + 1) : (b = K)
          }
          return St(b, Pe)
        }
        function dg(r, a) {
          for (var l = -1, h = r.length, m = 0, b = []; ++l < h; ) {
            var E = r[l],
              I = a ? a(E) : E
            if (!l || !Rn(I, j)) {
              var j = I
              b[m++] = E === 0 ? 0 : E
            }
          }
          return b
        }
        function pg(r) {
          return typeof r == 'number' ? r : rn(r) ? le : +r
        }
        function nn(r) {
          if (typeof r == 'string') return r
          if (he(r)) return Ee(r, nn) + ''
          if (rn(r)) return qp ? qp.call(r) : ''
          var a = r + ''
          return a == '0' && 1 / r == -xe ? '-0' : a
        }
        function Yr(r, a, l) {
          var h = -1,
            m = Di,
            b = r.length,
            E = !0,
            I = [],
            j = I
          if (l) (E = !1), (m = xa)
          else if (b >= o) {
            var q = a ? null : qw(r)
            if (q) return Fu(q)
            ;(E = !1), (m = pr), (j = new Mi())
          } else j = a ? [] : I
          e: for (; ++h < b; ) {
            var K = r[h],
              Q = a ? a(K) : K
            if (((K = l || K !== 0 ? K : 0), E && Q === Q)) {
              for (var te = j.length; te--; ) if (j[te] === Q) continue e
              a && j.push(Q), I.push(K)
            } else m(j, Q, l) || (j !== I && j.push(Q), I.push(K))
          }
          return I
        }
        function Cf(r, a) {
          return (
            (a = Xr(a, r)), (r = Bg(r, a)), r == null || delete r[Gn(_n(a))]
          )
        }
        function gg(r, a, l, h) {
          return ns(r, a, l(Bi(r, a)), h)
        }
        function il(r, a, l, h) {
          for (
            var m = r.length, b = h ? m : -1;
            (h ? b-- : ++b < m) && a(r[b], b, r);

          );
          return l
            ? wn(r, h ? 0 : b, h ? b + 1 : m)
            : wn(r, h ? b + 1 : 0, h ? m : b)
        }
        function mg(r, a) {
          var l = r
          return (
            l instanceof ve && (l = l.value()),
            Ca(
              a,
              function (h, m) {
                return m.func.apply(m.thisArg, In([h], m.args))
              },
              l
            )
          )
        }
        function Af(r, a, l) {
          var h = r.length
          if (h < 2) return h ? Yr(r[0]) : []
          for (var m = -1, b = $(h); ++m < h; )
            for (var E = r[m], I = -1; ++I < h; )
              I != m && (b[m] = Zo(b[m] || E, r[I], a, l))
          return Yr(pt(b, 1), a, l)
        }
        function vg(r, a, l) {
          for (var h = -1, m = r.length, b = a.length, E = {}; ++h < m; ) {
            var I = h < b ? a[h] : n
            l(E, r[h], I)
          }
          return E
        }
        function Lf(r) {
          return et(r) ? r : []
        }
        function Pf(r) {
          return typeof r == 'function' ? r : Kt
        }
        function Xr(r, a) {
          return he(r) ? r : Ff(r, a) ? [r] : qg(Le(r))
        }
        var jw = ge
        function Zr(r, a, l) {
          var h = r.length
          return (l = l === n ? h : l), !a && l >= h ? r : wn(r, a, l)
        }
        var yg =
          Sb ||
          function (r) {
            return je.clearTimeout(r)
          }
        function bg(r, a) {
          if (a) return r.slice()
          var l = r.length,
            h = Mp ? Mp(l) : new r.constructor(l)
          return r.copy(h), h
        }
        function Of(r) {
          var a = new r.constructor(r.byteLength)
          return new Hu(a).set(new Hu(r)), a
        }
        function Dw(r, a) {
          var l = a ? Of(r.buffer) : r.buffer
          return new r.constructor(l, r.byteOffset, r.byteLength)
        }
        function Fw(r) {
          var a = new r.constructor(r.source, Oo.exec(r))
          return (a.lastIndex = r.lastIndex), a
        }
        function Uw(r) {
          return Yo ? De(Yo.call(r)) : {}
        }
        function wg(r, a) {
          var l = a ? Of(r.buffer) : r.buffer
          return new r.constructor(l, r.byteOffset, r.length)
        }
        function _g(r, a) {
          if (r !== a) {
            var l = r !== n,
              h = r === null,
              m = r === r,
              b = rn(r),
              E = a !== n,
              I = a === null,
              j = a === a,
              q = rn(a)
            if (
              (!I && !q && !b && r > a) ||
              (b && E && j && !I && !q) ||
              (h && E && j) ||
              (!l && j) ||
              !m
            )
              return 1
            if (
              (!h && !b && !q && r < a) ||
              (q && l && m && !h && !b) ||
              (I && l && m) ||
              (!E && m) ||
              !j
            )
              return -1
          }
          return 0
        }
        function Mw(r, a, l) {
          for (
            var h = -1,
              m = r.criteria,
              b = a.criteria,
              E = m.length,
              I = l.length;
            ++h < E;

          ) {
            var j = _g(m[h], b[h])
            if (j) {
              if (h >= I) return j
              var q = l[h]
              return j * (q == 'desc' ? -1 : 1)
            }
          }
          return r.index - a.index
        }
        function kg(r, a, l, h) {
          for (
            var m = -1,
              b = r.length,
              E = l.length,
              I = -1,
              j = a.length,
              q = st(b - E, 0),
              K = $(j + q),
              Q = !h;
            ++I < j;

          )
            K[I] = a[I]
          for (; ++m < E; ) (Q || m < b) && (K[l[m]] = r[m])
          for (; q--; ) K[I++] = r[m++]
          return K
        }
        function Sg(r, a, l, h) {
          for (
            var m = -1,
              b = r.length,
              E = -1,
              I = l.length,
              j = -1,
              q = a.length,
              K = st(b - I, 0),
              Q = $(K + q),
              te = !h;
            ++m < K;

          )
            Q[m] = r[m]
          for (var ie = m; ++j < q; ) Q[ie + j] = a[j]
          for (; ++E < I; ) (te || m < b) && (Q[ie + l[E]] = r[m++])
          return Q
        }
        function Ht(r, a) {
          var l = -1,
            h = r.length
          for (a || (a = $(h)); ++l < h; ) a[l] = r[l]
          return a
        }
        function Qn(r, a, l, h) {
          var m = !l
          l || (l = {})
          for (var b = -1, E = a.length; ++b < E; ) {
            var I = a[b],
              j = h ? h(l[I], r[I], I, l, r) : n
            j === n && (j = r[I]), m ? vr(l, I, j) : Xo(l, I, j)
          }
          return l
        }
        function $w(r, a) {
          return Qn(r, Df(r), a)
        }
        function Bw(r, a) {
          return Qn(r, jg(r), a)
        }
        function al(r, a) {
          return function (l, h) {
            var m = he(l) ? Ru : cw,
              b = a ? a() : {}
            return m(l, r, oe(h, 2), b)
          }
        }
        function za(r) {
          return ge(function (a, l) {
            var h = -1,
              m = l.length,
              b = m > 1 ? l[m - 1] : n,
              E = m > 2 ? l[2] : n
            for (
              b = r.length > 3 && typeof b == 'function' ? (m--, b) : n,
                E && Rt(l[0], l[1], E) && ((b = m < 3 ? n : b), (m = 1)),
                a = De(a);
              ++h < m;

            ) {
              var I = l[h]
              I && r(a, I, h, b)
            }
            return a
          })
        }
        function Eg(r, a) {
          return function (l, h) {
            if (l == null) return l
            if (!Wt(l)) return r(l, h)
            for (
              var m = l.length, b = a ? m : -1, E = De(l);
              (a ? b-- : ++b < m) && h(E[b], b, E) !== !1;

            );
            return l
          }
        }
        function xg(r) {
          return function (a, l, h) {
            for (var m = -1, b = De(a), E = h(a), I = E.length; I--; ) {
              var j = E[r ? I : ++m]
              if (l(b[j], j, b) === !1) break
            }
            return a
          }
        }
        function Vw(r, a, l) {
          var h = a & J,
            m = rs(r)
          function b() {
            var E = this && this !== je && this instanceof b ? m : r
            return E.apply(h ? l : this, arguments)
          }
          return b
        }
        function Cg(r) {
          return function (a) {
            a = Le(a)
            var l = La(a) ? Tn(a) : n,
              h = l ? l[0] : a.charAt(0),
              m = l ? Zr(l, 1).join('') : a.slice(1)
            return h[r]() + m
          }
        }
        function ja(r) {
          return function (a) {
            return Ca(Em(Sm(a).replace(qn, '')), r, '')
          }
        }
        function rs(r) {
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
            var l = Ra(r.prototype),
              h = r.apply(l, a)
            return We(h) ? h : l
          }
        }
        function Hw(r, a, l) {
          var h = rs(r)
          function m() {
            for (var b = arguments.length, E = $(b), I = b, j = Da(m); I--; )
              E[I] = arguments[I]
            var q = b < 3 && E[0] !== j && E[b - 1] !== j ? [] : Qr(E, j)
            if (((b -= q.length), b < l))
              return Ig(r, a, ol, m.placeholder, n, E, q, n, n, l - b)
            var K = this && this !== je && this instanceof m ? h : r
            return wt(K, this, E)
          }
          return m
        }
        function Ag(r) {
          return function (a, l, h) {
            var m = De(a)
            if (!Wt(a)) {
              var b = oe(l, 3)
              ;(a = ct(a)),
                (l = function (I) {
                  return b(m[I], I, m)
                })
            }
            var E = r(a, l, h)
            return E > -1 ? m[b ? a[E] : E] : n
          }
        }
        function Lg(r) {
          return br(function (a) {
            var l = a.length,
              h = l,
              m = yn.prototype.thru
            for (r && a.reverse(); h--; ) {
              var b = a[h]
              if (typeof b != 'function') throw new vn(c)
              if (m && !E && cl(b) == 'wrapper') var E = new yn([], !0)
            }
            for (h = E ? h : l; ++h < l; ) {
              b = a[h]
              var I = cl(b),
                j = I == 'wrapper' ? zf(b) : n
              j &&
              Uf(j[0]) &&
              j[1] == (S | N | G | _) &&
              !j[4].length &&
              j[9] == 1
                ? (E = E[cl(j[0])].apply(E, j[3]))
                : (E = b.length == 1 && Uf(b) ? E[I]() : E.thru(b))
            }
            return function () {
              var q = arguments,
                K = q[0]
              if (E && q.length == 1 && he(K)) return E.plant(K).value()
              for (var Q = 0, te = l ? a[Q].apply(this, q) : K; ++Q < l; )
                te = a[Q].call(this, te)
              return te
            }
          })
        }
        function ol(r, a, l, h, m, b, E, I, j, q) {
          var K = a & S,
            Q = a & J,
            te = a & T,
            ie = a & (N | B),
            se = a & C,
            pe = te ? n : rs(r)
          function ue() {
            for (var me = arguments.length, be = $(me), an = me; an--; )
              be[an] = arguments[an]
            if (ie)
              var zt = Da(ue),
                on = nb(be, zt)
            if (
              (h && (be = kg(be, h, m, ie)),
              b && (be = Sg(be, b, E, ie)),
              (me -= on),
              ie && me < q)
            ) {
              var tt = Qr(be, zt)
              return Ig(r, a, ol, ue.placeholder, l, be, tt, I, j, q - me)
            }
            var zn = Q ? l : this,
              Sr = te ? zn[r] : r
            return (
              (me = be.length),
              I ? (be = c2(be, I)) : se && me > 1 && be.reverse(),
              K && j < me && (be.length = j),
              this && this !== je && this instanceof ue && (Sr = pe || rs(Sr)),
              Sr.apply(zn, be)
            )
          }
          return ue
        }
        function Pg(r, a) {
          return function (l, h) {
            return yw(l, r, a(h), {})
          }
        }
        function sl(r, a) {
          return function (l, h) {
            var m
            if (l === n && h === n) return a
            if ((l !== n && (m = l), h !== n)) {
              if (m === n) return h
              typeof l == 'string' || typeof h == 'string'
                ? ((l = nn(l)), (h = nn(h)))
                : ((l = pg(l)), (h = pg(h))),
                (m = r(l, h))
            }
            return m
          }
        }
        function If(r) {
          return br(function (a) {
            return (
              (a = Ee(a, Ue(oe()))),
              ge(function (l) {
                var h = this
                return r(a, function (m) {
                  return wt(m, h, l)
                })
              })
            )
          })
        }
        function ul(r, a) {
          a = a === n ? ' ' : nn(a)
          var l = a.length
          if (l < 2) return l ? Ef(a, r) : a
          var h = Ef(a, Qu(r / Pa(a)))
          return La(a) ? Zr(Tn(h), 0, r).join('') : h.slice(0, r)
        }
        function Ww(r, a, l, h) {
          var m = a & J,
            b = rs(r)
          function E() {
            for (
              var I = -1,
                j = arguments.length,
                q = -1,
                K = h.length,
                Q = $(K + j),
                te = this && this !== je && this instanceof E ? b : r;
              ++q < K;

            )
              Q[q] = h[q]
            for (; j--; ) Q[q++] = arguments[++I]
            return wt(te, m ? l : this, Q)
          }
          return E
        }
        function Og(r) {
          return function (a, l, h) {
            return (
              h && typeof h != 'number' && Rt(a, l, h) && (l = h = n),
              (a = kr(a)),
              l === n ? ((l = a), (a = 0)) : (l = kr(l)),
              (h = h === n ? (a < l ? 1 : -1) : kr(h)),
              Ow(a, l, h, r)
            )
          }
        }
        function ll(r) {
          return function (a, l) {
            return (
              (typeof a == 'string' && typeof l == 'string') ||
                ((a = kn(a)), (l = kn(l))),
              r(a, l)
            )
          }
        }
        function Ig(r, a, l, h, m, b, E, I, j, q) {
          var K = a & N,
            Q = K ? E : n,
            te = K ? n : E,
            ie = K ? b : n,
            se = K ? n : b
          ;(a |= K ? G : X), (a &= ~(K ? X : G)), a & x || (a &= ~(J | T))
          var pe = [r, a, m, ie, Q, se, te, I, j, q],
            ue = l.apply(n, pe)
          return Uf(r) && Vg(ue, pe), (ue.placeholder = h), Hg(ue, r, a)
        }
        function Tf(r) {
          var a = ot[r]
          return function (l, h) {
            if (
              ((l = kn(l)), (h = h == null ? 0 : St(de(h), 292)), h && Hp(l))
            ) {
              var m = (Le(l) + 'e').split('e'),
                b = a(m[0] + 'e' + (+m[1] + h))
              return (m = (Le(b) + 'e').split('e')), +(m[0] + 'e' + (+m[1] - h))
            }
            return a(l)
          }
        }
        var qw =
          Ta && 1 / Fu(new Ta([, -0]))[1] == xe
            ? function (r) {
                return new Ta(r)
              }
            : eh
        function Tg(r) {
          return function (a) {
            var l = Et(a)
            return l == It ? uf(a) : l == Tt ? lb(a) : kt(a, r(a))
          }
        }
        function yr(r, a, l, h, m, b, E, I) {
          var j = a & T
          if (!j && typeof r != 'function') throw new vn(c)
          var q = h ? h.length : 0
          if (
            (q || ((a &= ~(G | X)), (h = m = n)),
            (E = E === n ? E : st(de(E), 0)),
            (I = I === n ? I : de(I)),
            (q -= m ? m.length : 0),
            a & X)
          ) {
            var K = h,
              Q = m
            h = m = n
          }
          var te = j ? n : zf(r),
            ie = [r, a, l, h, m, K, Q, b, E, I]
          if (
            (te && s2(ie, te),
            (r = ie[0]),
            (a = ie[1]),
            (l = ie[2]),
            (h = ie[3]),
            (m = ie[4]),
            (I = ie[9] = ie[9] === n ? (j ? 0 : r.length) : st(ie[9] - q, 0)),
            !I && a & (N | B) && (a &= ~(N | B)),
            !a || a == J)
          )
            var se = Vw(r, a, l)
          else
            a == N || a == B
              ? (se = Hw(r, a, I))
              : (a == G || a == (J | G)) && !m.length
              ? (se = Ww(r, a, l, h))
              : (se = ol.apply(n, ie))
          var pe = te ? hg : Vg
          return Hg(pe(se, ie), r, a)
        }
        function Ng(r, a, l, h) {
          return r === n || (Rn(r, Ia[l]) && !Ie.call(h, l)) ? a : r
        }
        function Rg(r, a, l, h, m, b) {
          return (
            We(r) && We(a) && (b.set(a, r), nl(r, a, n, Rg, b), b.delete(a)), r
          )
        }
        function Kw(r) {
          return os(r) ? n : r
        }
        function zg(r, a, l, h, m, b) {
          var E = l & U,
            I = r.length,
            j = a.length
          if (I != j && !(E && j > I)) return !1
          var q = b.get(r),
            K = b.get(a)
          if (q && K) return q == a && K == r
          var Q = -1,
            te = !0,
            ie = l & W ? new Mi() : n
          for (b.set(r, a), b.set(a, r); ++Q < I; ) {
            var se = r[Q],
              pe = a[Q]
            if (h) var ue = E ? h(pe, se, Q, a, r, b) : h(se, pe, Q, r, a, b)
            if (ue !== n) {
              if (ue) continue
              te = !1
              break
            }
            if (ie) {
              if (
                !Aa(a, function (me, be) {
                  if (!pr(ie, be) && (se === me || m(se, me, l, h, b)))
                    return ie.push(be)
                })
              ) {
                te = !1
                break
              }
            } else if (!(se === pe || m(se, pe, l, h, b))) {
              te = !1
              break
            }
          }
          return b.delete(r), b.delete(a), te
        }
        function Qw(r, a, l, h, m, b, E) {
          switch (l) {
            case Je:
              if (r.byteLength != a.byteLength || r.byteOffset != a.byteOffset)
                return !1
              ;(r = r.buffer), (a = a.buffer)
            case Ge:
              return !(r.byteLength != a.byteLength || !b(new Hu(r), new Hu(a)))
            case Ei:
            case xi:
            case rr:
              return Rn(+r, +a)
            case nr:
              return r.name == a.name && r.message == a.message
            case jr:
            case Dr:
              return r == a + ''
            case It:
              var I = uf
            case Tt:
              var j = h & U
              if ((I || (I = Fu), r.size != a.size && !j)) return !1
              var q = E.get(r)
              if (q) return q == a
              ;(h |= W), E.set(r, a)
              var K = zg(I(r), I(a), h, m, b, E)
              return E.delete(r), K
            case ca:
              if (Yo) return Yo.call(r) == Yo.call(a)
          }
          return !1
        }
        function Gw(r, a, l, h, m, b) {
          var E = l & U,
            I = Nf(r),
            j = I.length,
            q = Nf(a),
            K = q.length
          if (j != K && !E) return !1
          for (var Q = j; Q--; ) {
            var te = I[Q]
            if (!(E ? te in a : Ie.call(a, te))) return !1
          }
          var ie = b.get(r),
            se = b.get(a)
          if (ie && se) return ie == a && se == r
          var pe = !0
          b.set(r, a), b.set(a, r)
          for (var ue = E; ++Q < j; ) {
            te = I[Q]
            var me = r[te],
              be = a[te]
            if (h) var an = E ? h(be, me, te, a, r, b) : h(me, be, te, r, a, b)
            if (!(an === n ? me === be || m(me, be, l, h, b) : an)) {
              pe = !1
              break
            }
            ue || (ue = te == 'constructor')
          }
          if (pe && !ue) {
            var zt = r.constructor,
              on = a.constructor
            zt != on &&
              'constructor' in r &&
              'constructor' in a &&
              !(
                typeof zt == 'function' &&
                zt instanceof zt &&
                typeof on == 'function' &&
                on instanceof on
              ) &&
              (pe = !1)
          }
          return b.delete(r), b.delete(a), pe
        }
        function br(r) {
          return $f($g(r, n, Jg), r + '')
        }
        function Nf(r) {
          return tg(r, ct, Df)
        }
        function Rf(r) {
          return tg(r, qt, jg)
        }
        var zf = Ju
          ? function (r) {
              return Ju.get(r)
            }
          : eh
        function cl(r) {
          for (
            var a = r.name + '', l = Na[a], h = Ie.call(Na, a) ? l.length : 0;
            h--;

          ) {
            var m = l[h],
              b = m.func
            if (b == null || b == r) return m.name
          }
          return a
        }
        function Da(r) {
          var a = Ie.call(v, 'placeholder') ? v : r
          return a.placeholder
        }
        function oe() {
          var r = v.iteratee || Xf
          return (
            (r = r === Xf ? ig : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          )
        }
        function fl(r, a) {
          var l = r.__data__
          return r2(a) ? l[typeof a == 'string' ? 'string' : 'hash'] : l.map
        }
        function jf(r) {
          for (var a = ct(r), l = a.length; l--; ) {
            var h = a[l],
              m = r[h]
            a[l] = [h, m, Ug(m)]
          }
          return a
        }
        function Vi(r, a) {
          var l = ob(r, a)
          return rg(l) ? l : n
        }
        function Jw(r) {
          var a = Ie.call(r, Fi),
            l = r[Fi]
          try {
            r[Fi] = n
            var h = !0
          } catch {}
          var m = Bu.call(r)
          return h && (a ? (r[Fi] = l) : delete r[Fi]), m
        }
        var Df = cf
            ? function (r) {
                return r == null
                  ? []
                  : ((r = De(r)),
                    tn(cf(r), function (a) {
                      return Bp.call(r, a)
                    }))
              }
            : th,
          jg = cf
            ? function (r) {
                for (var a = []; r; ) In(a, Df(r)), (r = Wu(r))
                return a
              }
            : th,
          Et = Nt
        ;((ff && Et(new ff(new ArrayBuffer(1))) != Je) ||
          (Qo && Et(new Qo()) != It) ||
          (hf && Et(hf.resolve()) != ou) ||
          (Ta && Et(new Ta()) != Tt) ||
          (Go && Et(new Go()) != ir)) &&
          (Et = function (r) {
            var a = Nt(r),
              l = a == pn ? r.constructor : n,
              h = l ? Hi(l) : ''
            if (h)
              switch (h) {
                case Tb:
                  return Je
                case Nb:
                  return It
                case Rb:
                  return ou
                case zb:
                  return Tt
                case jb:
                  return ir
              }
            return a
          })
        function Yw(r, a, l) {
          for (var h = -1, m = l.length; ++h < m; ) {
            var b = l[h],
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
                r = st(r, a - E)
                break
            }
          }
          return { start: r, end: a }
        }
        function Xw(r) {
          var a = r.match(Mr)
          return a ? a[1].split(Xc) : []
        }
        function Dg(r, a, l) {
          a = Xr(a, r)
          for (var h = -1, m = a.length, b = !1; ++h < m; ) {
            var E = Gn(a[h])
            if (!(b = r != null && l(r, E))) break
            r = r[E]
          }
          return b || ++h != m
            ? b
            : ((m = r == null ? 0 : r.length),
              !!m && yl(m) && wr(E, m) && (he(r) || Wi(r)))
        }
        function Zw(r) {
          var a = r.length,
            l = new r.constructor(a)
          return (
            a &&
              typeof r[0] == 'string' &&
              Ie.call(r, 'index') &&
              ((l.index = r.index), (l.input = r.input)),
            l
          )
        }
        function Fg(r) {
          return typeof r.constructor == 'function' && !is(r) ? Ra(Wu(r)) : {}
        }
        function e2(r, a, l) {
          var h = r.constructor
          switch (a) {
            case Ge:
              return Of(r)
            case Ei:
            case xi:
              return new h(+r)
            case Je:
              return Dw(r, l)
            case Fr:
            case fa:
            case ha:
            case So:
            case ar:
            case da:
            case pa:
            case Ci:
            case Eo:
              return wg(r, l)
            case It:
              return new h()
            case rr:
            case Dr:
              return new h(r)
            case jr:
              return Fw(r)
            case Tt:
              return new h()
            case ca:
              return Uw(r)
          }
        }
        function t2(r, a) {
          var l = a.length
          if (!l) return r
          var h = l - 1
          return (
            (a[h] = (l > 1 ? '& ' : '') + a[h]),
            (a = a.join(l > 2 ? ', ' : ' ')),
            r.replace(
              Yc,
              `{
/* [wrapped with ` +
                a +
                `] */
`
            )
          )
        }
        function n2(r) {
          return he(r) || Wi(r) || !!(Vp && r && r[Vp])
        }
        function wr(r, a) {
          var l = typeof r
          return (
            (a = a ?? Z),
            !!a &&
              (l == 'number' || (l != 'symbol' && du.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < a
          )
        }
        function Rt(r, a, l) {
          if (!We(l)) return !1
          var h = typeof a
          return (
            h == 'number' ? Wt(l) && wr(a, l.length) : h == 'string' && a in l
          )
            ? Rn(l[a], r)
            : !1
        }
        function Ff(r, a) {
          if (he(r)) return !1
          var l = typeof r
          return l == 'number' ||
            l == 'symbol' ||
            l == 'boolean' ||
            r == null ||
            rn(r)
            ? !0
            : cu.test(r) || !Li.test(r) || (a != null && r in De(a))
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
        function Uf(r) {
          var a = cl(r),
            l = v[a]
          if (typeof l != 'function' || !(a in ve.prototype)) return !1
          if (r === l) return !0
          var h = zf(l)
          return !!h && r === h[0]
        }
        function i2(r) {
          return !!Up && Up in r
        }
        var a2 = Mu ? _r : nh
        function is(r) {
          var a = r && r.constructor,
            l = (typeof a == 'function' && a.prototype) || Ia
          return r === l
        }
        function Ug(r) {
          return r === r && !We(r)
        }
        function Mg(r, a) {
          return function (l) {
            return l == null ? !1 : l[r] === a && (a !== n || r in De(l))
          }
        }
        function o2(r) {
          var a = ml(r, function (h) {
              return l.size === w && l.clear(), h
            }),
            l = a.cache
          return a
        }
        function s2(r, a) {
          var l = r[1],
            h = a[1],
            m = l | h,
            b = m < (J | T | S),
            E =
              (h == S && l == N) ||
              (h == S && l == _ && r[7].length <= a[8]) ||
              (h == (S | _) && a[7].length <= a[8] && l == N)
          if (!(b || E)) return r
          h & J && ((r[2] = a[2]), (m |= l & J ? 0 : x))
          var I = a[3]
          if (I) {
            var j = r[3]
            ;(r[3] = j ? kg(j, I, a[4]) : I), (r[4] = j ? Qr(r[3], P) : a[4])
          }
          return (
            (I = a[5]),
            I &&
              ((j = r[5]),
              (r[5] = j ? Sg(j, I, a[6]) : I),
              (r[6] = j ? Qr(r[5], P) : a[6])),
            (I = a[7]),
            I && (r[7] = I),
            h & S && (r[8] = r[8] == null ? a[8] : St(r[8], a[8])),
            r[9] == null && (r[9] = a[9]),
            (r[0] = a[0]),
            (r[1] = m),
            r
          )
        }
        function u2(r) {
          var a = []
          if (r != null) for (var l in De(r)) a.push(l)
          return a
        }
        function l2(r) {
          return Bu.call(r)
        }
        function $g(r, a, l) {
          return (
            (a = st(a === n ? r.length - 1 : a, 0)),
            function () {
              for (
                var h = arguments, m = -1, b = st(h.length - a, 0), E = $(b);
                ++m < b;

              )
                E[m] = h[a + m]
              m = -1
              for (var I = $(a + 1); ++m < a; ) I[m] = h[m]
              return (I[a] = l(E)), wt(r, this, I)
            }
          )
        }
        function Bg(r, a) {
          return a.length < 2 ? r : Bi(r, wn(a, 0, -1))
        }
        function c2(r, a) {
          for (var l = r.length, h = St(a.length, l), m = Ht(r); h--; ) {
            var b = a[h]
            r[h] = wr(b, l) ? m[b] : n
          }
          return r
        }
        function Mf(r, a) {
          if (
            !(a === 'constructor' && typeof r[a] == 'function') &&
            a != '__proto__'
          )
            return r[a]
        }
        var Vg = Wg(hg),
          as =
            xb ||
            function (r, a) {
              return je.setTimeout(r, a)
            },
          $f = Wg(Nw)
        function Hg(r, a, l) {
          var h = a + ''
          return $f(r, t2(h, f2(Xw(h), l)))
        }
        function Wg(r) {
          var a = 0,
            l = 0
          return function () {
            var h = Pb(),
              m = A - (h - l)
            if (((l = h), m > 0)) {
              if (++a >= F) return arguments[0]
            } else a = 0
            return r.apply(n, arguments)
          }
        }
        function hl(r, a) {
          var l = -1,
            h = r.length,
            m = h - 1
          for (a = a === n ? h : a; ++l < a; ) {
            var b = Sf(l, m),
              E = r[b]
            ;(r[b] = r[l]), (r[l] = E)
          }
          return (r.length = a), r
        }
        var qg = o2(function (r) {
          var a = []
          return (
            r.charCodeAt(0) === 46 && a.push(''),
            r.replace(dt, function (l, h, m, b) {
              a.push(m ? b.replace(va, '$1') : h || l)
            }),
            a
          )
        })
        function Gn(r) {
          if (typeof r == 'string' || rn(r)) return r
          var a = r + ''
          return a == '0' && 1 / r == -xe ? '-0' : a
        }
        function Hi(r) {
          if (r != null) {
            try {
              return $u.call(r)
            } catch {}
            try {
              return r + ''
            } catch {}
          }
          return ''
        }
        function f2(r, a) {
          return (
            _t(Pn, function (l) {
              var h = '_.' + l[0]
              a & l[1] && !Di(r, h) && r.push(h)
            }),
            r.sort()
          )
        }
        function Kg(r) {
          if (r instanceof ve) return r.clone()
          var a = new yn(r.__wrapped__, r.__chain__)
          return (
            (a.__actions__ = Ht(r.__actions__)),
            (a.__index__ = r.__index__),
            (a.__values__ = r.__values__),
            a
          )
        }
        function h2(r, a, l) {
          ;(l ? Rt(r, a, l) : a === n) ? (a = 1) : (a = st(de(a), 0))
          var h = r == null ? 0 : r.length
          if (!h || a < 1) return []
          for (var m = 0, b = 0, E = $(Qu(h / a)); m < h; )
            E[b++] = wn(r, m, (m += a))
          return E
        }
        function d2(r) {
          for (
            var a = -1, l = r == null ? 0 : r.length, h = 0, m = [];
            ++a < l;

          ) {
            var b = r[a]
            b && (m[h++] = b)
          }
          return m
        }
        function p2() {
          var r = arguments.length
          if (!r) return []
          for (var a = $(r - 1), l = arguments[0], h = r; h--; )
            a[h - 1] = arguments[h]
          return In(he(l) ? Ht(l) : [l], pt(a, 1))
        }
        var g2 = ge(function (r, a) {
            return et(r) ? Zo(r, pt(a, 1, et, !0)) : []
          }),
          m2 = ge(function (r, a) {
            var l = _n(a)
            return (
              et(l) && (l = n), et(r) ? Zo(r, pt(a, 1, et, !0), oe(l, 2)) : []
            )
          }),
          v2 = ge(function (r, a) {
            var l = _n(a)
            return et(l) && (l = n), et(r) ? Zo(r, pt(a, 1, et, !0), n, l) : []
          })
        function y2(r, a, l) {
          var h = r == null ? 0 : r.length
          return h
            ? ((a = l || a === n ? 1 : de(a)), wn(r, a < 0 ? 0 : a, h))
            : []
        }
        function b2(r, a, l) {
          var h = r == null ? 0 : r.length
          return h
            ? ((a = l || a === n ? 1 : de(a)),
              (a = h - a),
              wn(r, 0, a < 0 ? 0 : a))
            : []
        }
        function w2(r, a) {
          return r && r.length ? il(r, oe(a, 3), !0, !0) : []
        }
        function _2(r, a) {
          return r && r.length ? il(r, oe(a, 3), !0) : []
        }
        function k2(r, a, l, h) {
          var m = r == null ? 0 : r.length
          return m
            ? (l && typeof l != 'number' && Rt(r, a, l) && ((l = 0), (h = m)),
              pw(r, a, l, h))
            : []
        }
        function Qg(r, a, l) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = l == null ? 0 : de(l)
          return m < 0 && (m = st(h + m, 0)), s(r, oe(a, 3), m)
        }
        function Gg(r, a, l) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h - 1
          return (
            l !== n && ((m = de(l)), (m = l < 0 ? st(h + m, 0) : St(m, h - 1))),
            s(r, oe(a, 3), m, !0)
          )
        }
        function Jg(r) {
          var a = r == null ? 0 : r.length
          return a ? pt(r, 1) : []
        }
        function S2(r) {
          var a = r == null ? 0 : r.length
          return a ? pt(r, xe) : []
        }
        function E2(r, a) {
          var l = r == null ? 0 : r.length
          return l ? ((a = a === n ? 1 : de(a)), pt(r, a)) : []
        }
        function x2(r) {
          for (var a = -1, l = r == null ? 0 : r.length, h = {}; ++a < l; ) {
            var m = r[a]
            h[m[0]] = m[1]
          }
          return h
        }
        function Yg(r) {
          return r && r.length ? r[0] : n
        }
        function C2(r, a, l) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = l == null ? 0 : de(l)
          return m < 0 && (m = st(h + m, 0)), f(r, a, m)
        }
        function A2(r) {
          var a = r == null ? 0 : r.length
          return a ? wn(r, 0, -1) : []
        }
        var L2 = ge(function (r) {
            var a = Ee(r, Lf)
            return a.length && a[0] === r[0] ? yf(a) : []
          }),
          P2 = ge(function (r) {
            var a = _n(r),
              l = Ee(r, Lf)
            return (
              a === _n(l) ? (a = n) : l.pop(),
              l.length && l[0] === r[0] ? yf(l, oe(a, 2)) : []
            )
          }),
          O2 = ge(function (r) {
            var a = _n(r),
              l = Ee(r, Lf)
            return (
              (a = typeof a == 'function' ? a : n),
              a && l.pop(),
              l.length && l[0] === r[0] ? yf(l, n, a) : []
            )
          })
        function I2(r, a) {
          return r == null ? '' : Ab.call(r, a)
        }
        function _n(r) {
          var a = r == null ? 0 : r.length
          return a ? r[a - 1] : n
        }
        function T2(r, a, l) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h
          return (
            l !== n && ((m = de(l)), (m = m < 0 ? st(h + m, 0) : St(m, h - 1))),
            a === a ? fb(r, a, m) : s(r, y, m, !0)
          )
        }
        function N2(r, a) {
          return r && r.length ? ug(r, de(a)) : n
        }
        var R2 = ge(Xg)
        function Xg(r, a) {
          return r && r.length && a && a.length ? kf(r, a) : r
        }
        function z2(r, a, l) {
          return r && r.length && a && a.length ? kf(r, a, oe(l, 2)) : r
        }
        function j2(r, a, l) {
          return r && r.length && a && a.length ? kf(r, a, n, l) : r
        }
        var D2 = br(function (r, a) {
          var l = r == null ? 0 : r.length,
            h = pf(r, a)
          return (
            fg(
              r,
              Ee(a, function (m) {
                return wr(m, l) ? +m : m
              }).sort(_g)
            ),
            h
          )
        })
        function F2(r, a) {
          var l = []
          if (!(r && r.length)) return l
          var h = -1,
            m = [],
            b = r.length
          for (a = oe(a, 3); ++h < b; ) {
            var E = r[h]
            a(E, h, r) && (l.push(E), m.push(h))
          }
          return fg(r, m), l
        }
        function Bf(r) {
          return r == null ? r : Ib.call(r)
        }
        function U2(r, a, l) {
          var h = r == null ? 0 : r.length
          return h
            ? (l && typeof l != 'number' && Rt(r, a, l)
                ? ((a = 0), (l = h))
                : ((a = a == null ? 0 : de(a)), (l = l === n ? h : de(l))),
              wn(r, a, l))
            : []
        }
        function M2(r, a) {
          return rl(r, a)
        }
        function $2(r, a, l) {
          return xf(r, a, oe(l, 2))
        }
        function B2(r, a) {
          var l = r == null ? 0 : r.length
          if (l) {
            var h = rl(r, a)
            if (h < l && Rn(r[h], a)) return h
          }
          return -1
        }
        function V2(r, a) {
          return rl(r, a, !0)
        }
        function H2(r, a, l) {
          return xf(r, a, oe(l, 2), !0)
        }
        function W2(r, a) {
          var l = r == null ? 0 : r.length
          if (l) {
            var h = rl(r, a, !0) - 1
            if (Rn(r[h], a)) return h
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
          return a ? wn(r, 1, a) : []
        }
        function G2(r, a, l) {
          return r && r.length
            ? ((a = l || a === n ? 1 : de(a)), wn(r, 0, a < 0 ? 0 : a))
            : []
        }
        function J2(r, a, l) {
          var h = r == null ? 0 : r.length
          return h
            ? ((a = l || a === n ? 1 : de(a)),
              (a = h - a),
              wn(r, a < 0 ? 0 : a, h))
            : []
        }
        function Y2(r, a) {
          return r && r.length ? il(r, oe(a, 3), !1, !0) : []
        }
        function X2(r, a) {
          return r && r.length ? il(r, oe(a, 3)) : []
        }
        var Z2 = ge(function (r) {
            return Yr(pt(r, 1, et, !0))
          }),
          e_ = ge(function (r) {
            var a = _n(r)
            return et(a) && (a = n), Yr(pt(r, 1, et, !0), oe(a, 2))
          }),
          t_ = ge(function (r) {
            var a = _n(r)
            return (
              (a = typeof a == 'function' ? a : n), Yr(pt(r, 1, et, !0), n, a)
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
            (r = tn(r, function (l) {
              if (et(l)) return (a = st(l.length, a)), !0
            })),
            rt(a, function (l) {
              return Ee(r, M(l))
            })
          )
        }
        function Zg(r, a) {
          if (!(r && r.length)) return []
          var l = Vf(r)
          return a == null
            ? l
            : Ee(l, function (h) {
                return wt(a, n, h)
              })
        }
        var a_ = ge(function (r, a) {
            return et(r) ? Zo(r, a) : []
          }),
          o_ = ge(function (r) {
            return Af(tn(r, et))
          }),
          s_ = ge(function (r) {
            var a = _n(r)
            return et(a) && (a = n), Af(tn(r, et), oe(a, 2))
          }),
          u_ = ge(function (r) {
            var a = _n(r)
            return (a = typeof a == 'function' ? a : n), Af(tn(r, et), n, a)
          }),
          l_ = ge(Vf)
        function c_(r, a) {
          return vg(r || [], a || [], Xo)
        }
        function f_(r, a) {
          return vg(r || [], a || [], ns)
        }
        var h_ = ge(function (r) {
          var a = r.length,
            l = a > 1 ? r[a - 1] : n
          return (l = typeof l == 'function' ? (r.pop(), l) : n), Zg(r, l)
        })
        function em(r) {
          var a = v(r)
          return (a.__chain__ = !0), a
        }
        function d_(r, a) {
          return a(r), r
        }
        function dl(r, a) {
          return a(r)
        }
        var p_ = br(function (r) {
          var a = r.length,
            l = a ? r[0] : 0,
            h = this.__wrapped__,
            m = function (b) {
              return pf(b, r)
            }
          return a > 1 ||
            this.__actions__.length ||
            !(h instanceof ve) ||
            !wr(l)
            ? this.thru(m)
            : ((h = h.slice(l, +l + (a ? 1 : 0))),
              h.__actions__.push({ func: dl, args: [m], thisArg: n }),
              new yn(h, this.__chain__).thru(function (b) {
                return a && !b.length && b.push(n), b
              }))
        })
        function g_() {
          return em(this)
        }
        function m_() {
          return new yn(this.value(), this.__chain__)
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
          for (var a, l = this; l instanceof Xu; ) {
            var h = Kg(l)
            ;(h.__index__ = 0),
              (h.__values__ = n),
              a ? (m.__wrapped__ = h) : (a = h)
            var m = h
            l = l.__wrapped__
          }
          return (m.__wrapped__ = r), a
        }
        function w_() {
          var r = this.__wrapped__
          if (r instanceof ve) {
            var a = r
            return (
              this.__actions__.length && (a = new ve(this)),
              (a = a.reverse()),
              a.__actions__.push({ func: dl, args: [Bf], thisArg: n }),
              new yn(a, this.__chain__)
            )
          }
          return this.thru(Bf)
        }
        function __() {
          return mg(this.__wrapped__, this.__actions__)
        }
        var k_ = al(function (r, a, l) {
          Ie.call(r, l) ? ++r[l] : vr(r, l, 1)
        })
        function S_(r, a, l) {
          var h = he(r) ? qo : dw
          return l && Rt(r, a, l) && (a = n), h(r, oe(a, 3))
        }
        function E_(r, a) {
          var l = he(r) ? tn : Zp
          return l(r, oe(a, 3))
        }
        var x_ = Ag(Qg),
          C_ = Ag(Gg)
        function A_(r, a) {
          return pt(pl(r, a), 1)
        }
        function L_(r, a) {
          return pt(pl(r, a), xe)
        }
        function P_(r, a, l) {
          return (l = l === n ? 1 : de(l)), pt(pl(r, a), l)
        }
        function tm(r, a) {
          var l = he(r) ? _t : Jr
          return l(r, oe(a, 3))
        }
        function nm(r, a) {
          var l = he(r) ? Wo : Xp
          return l(r, oe(a, 3))
        }
        var O_ = al(function (r, a, l) {
          Ie.call(r, l) ? r[l].push(a) : vr(r, l, [a])
        })
        function I_(r, a, l, h) {
          ;(r = Wt(r) ? r : Ua(r)), (l = l && !h ? de(l) : 0)
          var m = r.length
          return (
            l < 0 && (l = st(m + l, 0)),
            bl(r) ? l <= m && r.indexOf(a, l) > -1 : !!m && f(r, a, l) > -1
          )
        }
        var T_ = ge(function (r, a, l) {
            var h = -1,
              m = typeof a == 'function',
              b = Wt(r) ? $(r.length) : []
            return (
              Jr(r, function (E) {
                b[++h] = m ? wt(a, E, l) : es(E, a, l)
              }),
              b
            )
          }),
          N_ = al(function (r, a, l) {
            vr(r, l, a)
          })
        function pl(r, a) {
          var l = he(r) ? Ee : ag
          return l(r, oe(a, 3))
        }
        function R_(r, a, l, h) {
          return r == null
            ? []
            : (he(a) || (a = a == null ? [] : [a]),
              (l = h ? n : l),
              he(l) || (l = l == null ? [] : [l]),
              lg(r, a, l))
        }
        var z_ = al(
          function (r, a, l) {
            r[l ? 0 : 1].push(a)
          },
          function () {
            return [[], []]
          }
        )
        function j_(r, a, l) {
          var h = he(r) ? Ca : Re,
            m = arguments.length < 3
          return h(r, oe(a, 4), l, m, Jr)
        }
        function D_(r, a, l) {
          var h = he(r) ? zu : Re,
            m = arguments.length < 3
          return h(r, oe(a, 4), l, m, Xp)
        }
        function F_(r, a) {
          var l = he(r) ? tn : Zp
          return l(r, vl(oe(a, 3)))
        }
        function U_(r) {
          var a = he(r) ? Qp : Iw
          return a(r)
        }
        function M_(r, a, l) {
          ;(l ? Rt(r, a, l) : a === n) ? (a = 1) : (a = de(a))
          var h = he(r) ? uw : Tw
          return h(r, a)
        }
        function $_(r) {
          var a = he(r) ? lw : Rw
          return a(r)
        }
        function B_(r) {
          if (r == null) return 0
          if (Wt(r)) return bl(r) ? Pa(r) : r.length
          var a = Et(r)
          return a == It || a == Tt ? r.size : wf(r).length
        }
        function V_(r, a, l) {
          var h = he(r) ? Aa : zw
          return l && Rt(r, a, l) && (a = n), h(r, oe(a, 3))
        }
        var H_ = ge(function (r, a) {
            if (r == null) return []
            var l = a.length
            return (
              l > 1 && Rt(r, a[0], a[1])
                ? (a = [])
                : l > 2 && Rt(a[0], a[1], a[2]) && (a = [a[0]]),
              lg(r, pt(a, 1), [])
            )
          }),
          gl =
            Eb ||
            function () {
              return je.Date.now()
            }
        function W_(r, a) {
          if (typeof a != 'function') throw new vn(c)
          return (
            (r = de(r)),
            function () {
              if (--r < 1) return a.apply(this, arguments)
            }
          )
        }
        function rm(r, a, l) {
          return (
            (a = l ? n : a),
            (a = r && a == null ? r.length : a),
            yr(r, S, n, n, n, n, a)
          )
        }
        function im(r, a) {
          var l
          if (typeof a != 'function') throw new vn(c)
          return (
            (r = de(r)),
            function () {
              return (
                --r > 0 && (l = a.apply(this, arguments)), r <= 1 && (a = n), l
              )
            }
          )
        }
        var Hf = ge(function (r, a, l) {
            var h = J
            if (l.length) {
              var m = Qr(l, Da(Hf))
              h |= G
            }
            return yr(r, h, a, l, m)
          }),
          am = ge(function (r, a, l) {
            var h = J | T
            if (l.length) {
              var m = Qr(l, Da(am))
              h |= G
            }
            return yr(a, h, r, l, m)
          })
        function om(r, a, l) {
          a = l ? n : a
          var h = yr(r, N, n, n, n, n, n, a)
          return (h.placeholder = om.placeholder), h
        }
        function sm(r, a, l) {
          a = l ? n : a
          var h = yr(r, B, n, n, n, n, n, a)
          return (h.placeholder = sm.placeholder), h
        }
        function um(r, a, l) {
          var h,
            m,
            b,
            E,
            I,
            j,
            q = 0,
            K = !1,
            Q = !1,
            te = !0
          if (typeof r != 'function') throw new vn(c)
          ;(a = kn(a) || 0),
            We(l) &&
              ((K = !!l.leading),
              (Q = 'maxWait' in l),
              (b = Q ? st(kn(l.maxWait) || 0, a) : b),
              (te = 'trailing' in l ? !!l.trailing : te))
          function ie(tt) {
            var zn = h,
              Sr = m
            return (h = m = n), (q = tt), (E = r.apply(Sr, zn)), E
          }
          function se(tt) {
            return (q = tt), (I = as(me, a)), K ? ie(tt) : E
          }
          function pe(tt) {
            var zn = tt - j,
              Sr = tt - q,
              Am = a - zn
            return Q ? St(Am, b - Sr) : Am
          }
          function ue(tt) {
            var zn = tt - j,
              Sr = tt - q
            return j === n || zn >= a || zn < 0 || (Q && Sr >= b)
          }
          function me() {
            var tt = gl()
            if (ue(tt)) return be(tt)
            I = as(me, pe(tt))
          }
          function be(tt) {
            return (I = n), te && h ? ie(tt) : ((h = m = n), E)
          }
          function an() {
            I !== n && yg(I), (q = 0), (h = j = m = I = n)
          }
          function zt() {
            return I === n ? E : be(gl())
          }
          function on() {
            var tt = gl(),
              zn = ue(tt)
            if (((h = arguments), (m = this), (j = tt), zn)) {
              if (I === n) return se(j)
              if (Q) return yg(I), (I = as(me, a)), ie(j)
            }
            return I === n && (I = as(me, a)), E
          }
          return (on.cancel = an), (on.flush = zt), on
        }
        var q_ = ge(function (r, a) {
            return Yp(r, 1, a)
          }),
          K_ = ge(function (r, a, l) {
            return Yp(r, kn(a) || 0, l)
          })
        function Q_(r) {
          return yr(r, C)
        }
        function ml(r, a) {
          if (typeof r != 'function' || (a != null && typeof a != 'function'))
            throw new vn(c)
          var l = function () {
            var h = arguments,
              m = a ? a.apply(this, h) : h[0],
              b = l.cache
            if (b.has(m)) return b.get(m)
            var E = r.apply(this, h)
            return (l.cache = b.set(m, E) || b), E
          }
          return (l.cache = new (ml.Cache || mr)()), l
        }
        ml.Cache = mr
        function vl(r) {
          if (typeof r != 'function') throw new vn(c)
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
        var J_ = jw(function (r, a) {
            a =
              a.length == 1 && he(a[0])
                ? Ee(a[0], Ue(oe()))
                : Ee(pt(a, 1), Ue(oe()))
            var l = a.length
            return ge(function (h) {
              for (var m = -1, b = St(h.length, l); ++m < b; )
                h[m] = a[m].call(this, h[m])
              return wt(r, this, h)
            })
          }),
          Wf = ge(function (r, a) {
            var l = Qr(a, Da(Wf))
            return yr(r, G, n, a, l)
          }),
          lm = ge(function (r, a) {
            var l = Qr(a, Da(lm))
            return yr(r, X, n, a, l)
          }),
          Y_ = br(function (r, a) {
            return yr(r, _, n, n, n, a)
          })
        function X_(r, a) {
          if (typeof r != 'function') throw new vn(c)
          return (a = a === n ? a : de(a)), ge(r, a)
        }
        function Z_(r, a) {
          if (typeof r != 'function') throw new vn(c)
          return (
            (a = a == null ? 0 : st(de(a), 0)),
            ge(function (l) {
              var h = l[a],
                m = Zr(l, 0, a)
              return h && In(m, h), wt(r, this, m)
            })
          )
        }
        function ek(r, a, l) {
          var h = !0,
            m = !0
          if (typeof r != 'function') throw new vn(c)
          return (
            We(l) &&
              ((h = 'leading' in l ? !!l.leading : h),
              (m = 'trailing' in l ? !!l.trailing : m)),
            um(r, a, { leading: h, maxWait: a, trailing: m })
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
          return he(r) ? r : [r]
        }
        function ik(r) {
          return bn(r, V)
        }
        function ak(r, a) {
          return (a = typeof a == 'function' ? a : n), bn(r, V, a)
        }
        function ok(r) {
          return bn(r, O | V)
        }
        function sk(r, a) {
          return (a = typeof a == 'function' ? a : n), bn(r, O | V, a)
        }
        function uk(r, a) {
          return a == null || Jp(r, a, ct(a))
        }
        function Rn(r, a) {
          return r === a || (r !== r && a !== a)
        }
        var lk = ll(vf),
          ck = ll(function (r, a) {
            return r >= a
          }),
          Wi = ng(
            (function () {
              return arguments
            })()
          )
            ? ng
            : function (r) {
                return Ye(r) && Ie.call(r, 'callee') && !Bp.call(r, 'callee')
              },
          he = $.isArray,
          fk = zi ? Ue(zi) : bw
        function Wt(r) {
          return r != null && yl(r.length) && !_r(r)
        }
        function et(r) {
          return Ye(r) && Wt(r)
        }
        function hk(r) {
          return r === !0 || r === !1 || (Ye(r) && Nt(r) == Ei)
        }
        var ei = Cb || nh,
          dk = Vo ? Ue(Vo) : ww
        function pk(r) {
          return Ye(r) && r.nodeType === 1 && !os(r)
        }
        function gk(r) {
          if (r == null) return !0
          if (
            Wt(r) &&
            (he(r) ||
              typeof r == 'string' ||
              typeof r.splice == 'function' ||
              ei(r) ||
              Fa(r) ||
              Wi(r))
          )
            return !r.length
          var a = Et(r)
          if (a == It || a == Tt) return !r.size
          if (is(r)) return !wf(r).length
          for (var l in r) if (Ie.call(r, l)) return !1
          return !0
        }
        function mk(r, a) {
          return ts(r, a)
        }
        function vk(r, a, l) {
          l = typeof l == 'function' ? l : n
          var h = l ? l(r, a) : n
          return h === n ? ts(r, a, n, l) : !!h
        }
        function qf(r) {
          if (!Ye(r)) return !1
          var a = Nt(r)
          return (
            a == nr ||
            a == ua ||
            (typeof r.message == 'string' &&
              typeof r.name == 'string' &&
              !os(r))
          )
        }
        function yk(r) {
          return typeof r == 'number' && Hp(r)
        }
        function _r(r) {
          if (!We(r)) return !1
          var a = Nt(r)
          return a == zr || a == la || a == dn || a == su
        }
        function cm(r) {
          return typeof r == 'number' && r == de(r)
        }
        function yl(r) {
          return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= Z
        }
        function We(r) {
          var a = typeof r
          return r != null && (a == 'object' || a == 'function')
        }
        function Ye(r) {
          return r != null && typeof r == 'object'
        }
        var fm = ji ? Ue(ji) : kw
        function bk(r, a) {
          return r === a || bf(r, a, jf(a))
        }
        function wk(r, a, l) {
          return (l = typeof l == 'function' ? l : n), bf(r, a, jf(a), l)
        }
        function _k(r) {
          return hm(r) && r != +r
        }
        function kk(r) {
          if (a2(r)) throw new ce(u)
          return rg(r)
        }
        function Sk(r) {
          return r === null
        }
        function Ek(r) {
          return r == null
        }
        function hm(r) {
          return typeof r == 'number' || (Ye(r) && Nt(r) == rr)
        }
        function os(r) {
          if (!Ye(r) || Nt(r) != pn) return !1
          var a = Wu(r)
          if (a === null) return !0
          var l = Ie.call(a, 'constructor') && a.constructor
          return typeof l == 'function' && l instanceof l && $u.call(l) == wb
        }
        var Kf = Nu ? Ue(Nu) : Sw
        function xk(r) {
          return cm(r) && r >= -Z && r <= Z
        }
        var dm = Ho ? Ue(Ho) : Ew
        function bl(r) {
          return typeof r == 'string' || (!he(r) && Ye(r) && Nt(r) == Dr)
        }
        function rn(r) {
          return typeof r == 'symbol' || (Ye(r) && Nt(r) == ca)
        }
        var Fa = qr ? Ue(qr) : xw
        function Ck(r) {
          return r === n
        }
        function Ak(r) {
          return Ye(r) && Et(r) == ir
        }
        function Lk(r) {
          return Ye(r) && Nt(r) == ko
        }
        var Pk = ll(_f),
          Ok = ll(function (r, a) {
            return r <= a
          })
        function pm(r) {
          if (!r) return []
          if (Wt(r)) return bl(r) ? Tn(r) : Ht(r)
          if (Ko && r[Ko]) return ub(r[Ko]())
          var a = Et(r),
            l = a == It ? uf : a == Tt ? Fu : Ua
          return l(r)
        }
        function kr(r) {
          if (!r) return r === 0 ? r : 0
          if (((r = kn(r)), r === xe || r === -xe)) {
            var a = r < 0 ? -1 : 1
            return a * ae
          }
          return r === r ? r : 0
        }
        function de(r) {
          var a = kr(r),
            l = a % 1
          return a === a ? (l ? a - l : a) : 0
        }
        function gm(r) {
          return r ? $i(de(r), 0, we) : 0
        }
        function kn(r) {
          if (typeof r == 'number') return r
          if (rn(r)) return le
          if (We(r)) {
            var a = typeof r.valueOf == 'function' ? r.valueOf() : r
            r = We(a) ? a + '' : a
          }
          if (typeof r != 'string') return r === 0 ? r : +r
          r = dr(r)
          var l = Io.test(r)
          return l || hu.test(r)
            ? Iu(r.slice(2), l ? 2 : 8)
            : fu.test(r)
            ? le
            : +r
        }
        function mm(r) {
          return Qn(r, qt(r))
        }
        function Ik(r) {
          return r ? $i(de(r), -Z, Z) : r === 0 ? r : 0
        }
        function Le(r) {
          return r == null ? '' : nn(r)
        }
        var Tk = za(function (r, a) {
            if (is(a) || Wt(a)) {
              Qn(a, ct(a), r)
              return
            }
            for (var l in a) Ie.call(a, l) && Xo(r, l, a[l])
          }),
          vm = za(function (r, a) {
            Qn(a, qt(a), r)
          }),
          wl = za(function (r, a, l, h) {
            Qn(a, qt(a), r, h)
          }),
          Nk = za(function (r, a, l, h) {
            Qn(a, ct(a), r, h)
          }),
          Rk = br(pf)
        function zk(r, a) {
          var l = Ra(r)
          return a == null ? l : Gp(l, a)
        }
        var jk = ge(function (r, a) {
            r = De(r)
            var l = -1,
              h = a.length,
              m = h > 2 ? a[2] : n
            for (m && Rt(a[0], a[1], m) && (h = 1); ++l < h; )
              for (var b = a[l], E = qt(b), I = -1, j = E.length; ++I < j; ) {
                var q = E[I],
                  K = r[q]
                ;(K === n || (Rn(K, Ia[q]) && !Ie.call(r, q))) && (r[q] = b[q])
              }
            return r
          }),
          Dk = ge(function (r) {
            return r.push(n, Rg), wt(ym, n, r)
          })
        function Fk(r, a) {
          return hr(r, oe(a, 3), Kn)
        }
        function Uk(r, a) {
          return hr(r, oe(a, 3), mf)
        }
        function Mk(r, a) {
          return r == null ? r : gf(r, oe(a, 3), qt)
        }
        function $k(r, a) {
          return r == null ? r : eg(r, oe(a, 3), qt)
        }
        function Bk(r, a) {
          return r && Kn(r, oe(a, 3))
        }
        function Vk(r, a) {
          return r && mf(r, oe(a, 3))
        }
        function Hk(r) {
          return r == null ? [] : tl(r, ct(r))
        }
        function Wk(r) {
          return r == null ? [] : tl(r, qt(r))
        }
        function Qf(r, a, l) {
          var h = r == null ? n : Bi(r, a)
          return h === n ? l : h
        }
        function qk(r, a) {
          return r != null && Dg(r, a, gw)
        }
        function Gf(r, a) {
          return r != null && Dg(r, a, mw)
        }
        var Kk = Pg(function (r, a, l) {
            a != null && typeof a.toString != 'function' && (a = Bu.call(a)),
              (r[a] = l)
          }, Yf(Kt)),
          Qk = Pg(function (r, a, l) {
            a != null && typeof a.toString != 'function' && (a = Bu.call(a)),
              Ie.call(r, a) ? r[a].push(l) : (r[a] = [l])
          }, oe),
          Gk = ge(es)
        function ct(r) {
          return Wt(r) ? Kp(r) : wf(r)
        }
        function qt(r) {
          return Wt(r) ? Kp(r, !0) : Cw(r)
        }
        function Jk(r, a) {
          var l = {}
          return (
            (a = oe(a, 3)),
            Kn(r, function (h, m, b) {
              vr(l, a(h, m, b), h)
            }),
            l
          )
        }
        function Yk(r, a) {
          var l = {}
          return (
            (a = oe(a, 3)),
            Kn(r, function (h, m, b) {
              vr(l, m, a(h, m, b))
            }),
            l
          )
        }
        var Xk = za(function (r, a, l) {
            nl(r, a, l)
          }),
          ym = za(function (r, a, l, h) {
            nl(r, a, l, h)
          }),
          Zk = br(function (r, a) {
            var l = {}
            if (r == null) return l
            var h = !1
            ;(a = Ee(a, function (b) {
              return (b = Xr(b, r)), h || (h = b.length > 1), b
            })),
              Qn(r, Rf(r), l),
              h && (l = bn(l, O | k | V, Kw))
            for (var m = a.length; m--; ) Cf(l, a[m])
            return l
          })
        function eS(r, a) {
          return bm(r, vl(oe(a)))
        }
        var tS = br(function (r, a) {
          return r == null ? {} : Lw(r, a)
        })
        function bm(r, a) {
          if (r == null) return {}
          var l = Ee(Rf(r), function (h) {
            return [h]
          })
          return (
            (a = oe(a)),
            cg(r, l, function (h, m) {
              return a(h, m[0])
            })
          )
        }
        function nS(r, a, l) {
          a = Xr(a, r)
          var h = -1,
            m = a.length
          for (m || ((m = 1), (r = n)); ++h < m; ) {
            var b = r == null ? n : r[Gn(a[h])]
            b === n && ((h = m), (b = l)), (r = _r(b) ? b.call(r) : b)
          }
          return r
        }
        function rS(r, a, l) {
          return r == null ? r : ns(r, a, l)
        }
        function iS(r, a, l, h) {
          return (
            (h = typeof h == 'function' ? h : n), r == null ? r : ns(r, a, l, h)
          )
        }
        var wm = Tg(ct),
          _m = Tg(qt)
        function aS(r, a, l) {
          var h = he(r),
            m = h || ei(r) || Fa(r)
          if (((a = oe(a, 4)), l == null)) {
            var b = r && r.constructor
            m
              ? (l = h ? new b() : [])
              : We(r)
              ? (l = _r(b) ? Ra(Wu(r)) : {})
              : (l = {})
          }
          return (
            (m ? _t : Kn)(r, function (E, I, j) {
              return a(l, E, I, j)
            }),
            l
          )
        }
        function oS(r, a) {
          return r == null ? !0 : Cf(r, a)
        }
        function sS(r, a, l) {
          return r == null ? r : gg(r, a, Pf(l))
        }
        function uS(r, a, l, h) {
          return (
            (h = typeof h == 'function' ? h : n),
            r == null ? r : gg(r, a, Pf(l), h)
          )
        }
        function Ua(r) {
          return r == null ? [] : Kr(r, ct(r))
        }
        function lS(r) {
          return r == null ? [] : Kr(r, qt(r))
        }
        function cS(r, a, l) {
          return (
            l === n && ((l = a), (a = n)),
            l !== n && ((l = kn(l)), (l = l === l ? l : 0)),
            a !== n && ((a = kn(a)), (a = a === a ? a : 0)),
            $i(kn(r), a, l)
          )
        }
        function fS(r, a, l) {
          return (
            (a = kr(a)),
            l === n ? ((l = a), (a = 0)) : (l = kr(l)),
            (r = kn(r)),
            vw(r, a, l)
          )
        }
        function hS(r, a, l) {
          if (
            (l && typeof l != 'boolean' && Rt(r, a, l) && (a = l = n),
            l === n &&
              (typeof a == 'boolean'
                ? ((l = a), (a = n))
                : typeof r == 'boolean' && ((l = r), (r = n))),
            r === n && a === n
              ? ((r = 0), (a = 1))
              : ((r = kr(r)), a === n ? ((a = r), (r = 0)) : (a = kr(a))),
            r > a)
          ) {
            var h = r
            ;(r = a), (a = h)
          }
          if (l || r % 1 || a % 1) {
            var m = Wp()
            return St(r + m * (a - r + Ou('1e-' + ((m + '').length - 1))), a)
          }
          return Sf(r, a)
        }
        var dS = ja(function (r, a, l) {
          return (a = a.toLowerCase()), r + (l ? km(a) : a)
        })
        function km(r) {
          return Jf(Le(r).toLowerCase())
        }
        function Sm(r) {
          return (r = Le(r)), r && r.replace(ef, rb).replace(af, '')
        }
        function pS(r, a, l) {
          ;(r = Le(r)), (a = nn(a))
          var h = r.length
          l = l === n ? h : $i(de(l), 0, h)
          var m = l
          return (l -= a.length), l >= 0 && r.slice(l, m) == a
        }
        function gS(r) {
          return (r = Le(r)), r && Ur.test(r) ? r.replace(ga, ib) : r
        }
        function mS(r) {
          return (r = Le(r)), r && Pi.test(r) ? r.replace(ma, '\\$&') : r
        }
        var vS = ja(function (r, a, l) {
            return r + (l ? '-' : '') + a.toLowerCase()
          }),
          yS = ja(function (r, a, l) {
            return r + (l ? ' ' : '') + a.toLowerCase()
          }),
          bS = Cg('toLowerCase')
        function wS(r, a, l) {
          ;(r = Le(r)), (a = de(a))
          var h = a ? Pa(r) : 0
          if (!a || h >= a) return r
          var m = (a - h) / 2
          return ul(Gu(m), l) + r + ul(Qu(m), l)
        }
        function _S(r, a, l) {
          ;(r = Le(r)), (a = de(a))
          var h = a ? Pa(r) : 0
          return a && h < a ? r + ul(a - h, l) : r
        }
        function kS(r, a, l) {
          ;(r = Le(r)), (a = de(a))
          var h = a ? Pa(r) : 0
          return a && h < a ? ul(a - h, l) + r : r
        }
        function SS(r, a, l) {
          return (
            l || a == null ? (a = 0) : a && (a = +a),
            Ob(Le(r).replace(or, ''), a || 0)
          )
        }
        function ES(r, a, l) {
          return (
            (l ? Rt(r, a, l) : a === n) ? (a = 1) : (a = de(a)), Ef(Le(r), a)
          )
        }
        function xS() {
          var r = arguments,
            a = Le(r[0])
          return r.length < 3 ? a : a.replace(r[1], r[2])
        }
        var CS = ja(function (r, a, l) {
          return r + (l ? '_' : '') + a.toLowerCase()
        })
        function AS(r, a, l) {
          return (
            l && typeof l != 'number' && Rt(r, a, l) && (a = l = n),
            (l = l === n ? we : l >>> 0),
            l
              ? ((r = Le(r)),
                r &&
                (typeof a == 'string' || (a != null && !Kf(a))) &&
                ((a = nn(a)), !a && La(r))
                  ? Zr(Tn(r), 0, l)
                  : r.split(a, l))
              : []
          )
        }
        var LS = ja(function (r, a, l) {
          return r + (l ? ' ' : '') + Jf(a)
        })
        function PS(r, a, l) {
          return (
            (r = Le(r)),
            (l = l == null ? 0 : $i(de(l), 0, r.length)),
            (a = nn(a)),
            r.slice(l, l + a.length) == a
          )
        }
        function OS(r, a, l) {
          var h = v.templateSettings
          l && Rt(r, a, l) && (a = n), (r = Le(r)), (a = wl({}, a, h, Ng))
          var m = wl({}, a.imports, h.imports, Ng),
            b = ct(m),
            E = Kr(m, b),
            I,
            j,
            q = 0,
            K = a.interpolate || sr,
            Q = "__p += '",
            te = lf(
              (a.escape || sr).source +
                '|' +
                K.source +
                '|' +
                (K === Lo ? Wn : sr).source +
                '|' +
                (a.evaluate || sr).source +
                '|$',
              'g'
            ),
            ie =
              '//# sourceURL=' +
              (Ie.call(a, 'sourceURL')
                ? (a.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++Ni + ']') +
              `
`
          r.replace(te, function (ue, me, be, an, zt, on) {
            return (
              be || (be = an),
              (Q += r.slice(q, on).replace(pu, ab)),
              me &&
                ((I = !0),
                (Q +=
                  `' +
__e(` +
                  me +
                  `) +
'`)),
              zt &&
                ((j = !0),
                (Q +=
                  `';
` +
                  zt +
                  `;
__p += '`)),
              be &&
                (Q +=
                  `' +
((__t = (` +
                  be +
                  `)) == null ? '' : __t) +
'`),
              (q = on + ue.length),
              ue
            )
          }),
            (Q += `';
`)
          var se = Ie.call(a, 'variable') && a.variable
          if (!se)
            Q =
              `with (obj) {
` +
              Q +
              `
}
`
          else if (Po.test(se)) throw new ce(d)
          ;(Q = (j ? Q.replace(Gc, '') : Q)
            .replace(xo, '$1')
            .replace(uu, '$1;')),
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
              (I ? ', __e = _.escape' : '') +
              (j
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Q +
              `return __p
}`)
          var pe = xm(function () {
            return Ce(b, ie + 'return ' + Q).apply(n, E)
          })
          if (((pe.source = Q), qf(pe))) throw pe
          return pe
        }
        function IS(r) {
          return Le(r).toLowerCase()
        }
        function TS(r) {
          return Le(r).toUpperCase()
        }
        function NS(r, a, l) {
          if (((r = Le(r)), r && (l || a === n))) return dr(r)
          if (!r || !(a = nn(a))) return r
          var h = Tn(r),
            m = Tn(a),
            b = zp(h, m),
            E = jp(h, m) + 1
          return Zr(h, b, E).join('')
        }
        function RS(r, a, l) {
          if (((r = Le(r)), r && (l || a === n))) return r.slice(0, Fp(r) + 1)
          if (!r || !(a = nn(a))) return r
          var h = Tn(r),
            m = jp(h, Tn(a)) + 1
          return Zr(h, 0, m).join('')
        }
        function zS(r, a, l) {
          if (((r = Le(r)), r && (l || a === n))) return r.replace(or, '')
          if (!r || !(a = nn(a))) return r
          var h = Tn(r),
            m = zp(h, Tn(a))
          return Zr(h, m).join('')
        }
        function jS(r, a) {
          var l = L,
            h = R
          if (We(a)) {
            var m = 'separator' in a ? a.separator : m
            ;(l = 'length' in a ? de(a.length) : l),
              (h = 'omission' in a ? nn(a.omission) : h)
          }
          r = Le(r)
          var b = r.length
          if (La(r)) {
            var E = Tn(r)
            b = E.length
          }
          if (l >= b) return r
          var I = l - Pa(h)
          if (I < 1) return h
          var j = E ? Zr(E, 0, I).join('') : r.slice(0, I)
          if (m === n) return j + h
          if ((E && (I += j.length - I), Kf(m))) {
            if (r.slice(I).search(m)) {
              var q,
                K = j
              for (
                m.global || (m = lf(m.source, Le(Oo.exec(m)) + 'g')),
                  m.lastIndex = 0;
                (q = m.exec(K));

              )
                var Q = q.index
              j = j.slice(0, Q === n ? I : Q)
            }
          } else if (r.indexOf(nn(m), I) != I) {
            var te = j.lastIndexOf(m)
            te > -1 && (j = j.slice(0, te))
          }
          return j + h
        }
        function DS(r) {
          return (r = Le(r)), r && Co.test(r) ? r.replace(Ai, hb) : r
        }
        var FS = ja(function (r, a, l) {
            return r + (l ? ' ' : '') + a.toUpperCase()
          }),
          Jf = Cg('toUpperCase')
        function Em(r, a, l) {
          return (
            (r = Le(r)),
            (a = l ? n : a),
            a === n ? (sb(r) ? gb(r) : Du(r)) : r.match(a) || []
          )
        }
        var xm = ge(function (r, a) {
            try {
              return wt(r, n, a)
            } catch (l) {
              return qf(l) ? l : new ce(l)
            }
          }),
          US = br(function (r, a) {
            return (
              _t(a, function (l) {
                ;(l = Gn(l)), vr(r, l, Hf(r[l], r))
              }),
              r
            )
          })
        function MS(r) {
          var a = r == null ? 0 : r.length,
            l = oe()
          return (
            (r = a
              ? Ee(r, function (h) {
                  if (typeof h[1] != 'function') throw new vn(c)
                  return [l(h[0]), h[1]]
                })
              : []),
            ge(function (h) {
              for (var m = -1; ++m < a; ) {
                var b = r[m]
                if (wt(b[0], this, h)) return wt(b[1], this, h)
              }
            })
          )
        }
        function $S(r) {
          return hw(bn(r, O))
        }
        function Yf(r) {
          return function () {
            return r
          }
        }
        function BS(r, a) {
          return r == null || r !== r ? a : r
        }
        var VS = Lg(),
          HS = Lg(!0)
        function Kt(r) {
          return r
        }
        function Xf(r) {
          return ig(typeof r == 'function' ? r : bn(r, O))
        }
        function WS(r) {
          return og(bn(r, O))
        }
        function qS(r, a) {
          return sg(r, bn(a, O))
        }
        var KS = ge(function (r, a) {
            return function (l) {
              return es(l, r, a)
            }
          }),
          QS = ge(function (r, a) {
            return function (l) {
              return es(r, l, a)
            }
          })
        function Zf(r, a, l) {
          var h = ct(a),
            m = tl(a, h)
          l == null &&
            !(We(a) && (m.length || !h.length)) &&
            ((l = a), (a = r), (r = this), (m = tl(a, ct(a))))
          var b = !(We(l) && 'chain' in l) || !!l.chain,
            E = _r(r)
          return (
            _t(m, function (I) {
              var j = a[I]
              ;(r[I] = j),
                E &&
                  (r.prototype[I] = function () {
                    var q = this.__chain__
                    if (b || q) {
                      var K = r(this.__wrapped__),
                        Q = (K.__actions__ = Ht(this.__actions__))
                      return (
                        Q.push({ func: j, args: arguments, thisArg: r }),
                        (K.__chain__ = q),
                        K
                      )
                    }
                    return j.apply(r, In([this.value()], arguments))
                  })
            }),
            r
          )
        }
        function GS() {
          return je._ === this && (je._ = _b), this
        }
        function eh() {}
        function JS(r) {
          return (
            (r = de(r)),
            ge(function (a) {
              return ug(a, r)
            })
          )
        }
        var YS = If(Ee),
          XS = If(qo),
          ZS = If(Aa)
        function Cm(r) {
          return Ff(r) ? M(Gn(r)) : Pw(r)
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
          if (((r = de(r)), r < 1 || r > Z)) return []
          var l = we,
            h = St(r, we)
          ;(a = oe(a)), (r -= we)
          for (var m = rt(h, a); ++l < r; ) a(l)
          return m
        }
        function sE(r) {
          return he(r) ? Ee(r, Gn) : rn(r) ? [r] : Ht(qg(Le(r)))
        }
        function uE(r) {
          var a = ++bb
          return Le(r) + a
        }
        var lE = sl(function (r, a) {
            return r + a
          }, 0),
          cE = Tf('ceil'),
          fE = sl(function (r, a) {
            return r / a
          }, 1),
          hE = Tf('floor')
        function dE(r) {
          return r && r.length ? el(r, Kt, vf) : n
        }
        function pE(r, a) {
          return r && r.length ? el(r, oe(a, 2), vf) : n
        }
        function gE(r) {
          return D(r, Kt)
        }
        function mE(r, a) {
          return D(r, oe(a, 2))
        }
        function vE(r) {
          return r && r.length ? el(r, Kt, _f) : n
        }
        function yE(r, a) {
          return r && r.length ? el(r, oe(a, 2), _f) : n
        }
        var bE = sl(function (r, a) {
            return r * a
          }, 1),
          wE = Tf('round'),
          _E = sl(function (r, a) {
            return r - a
          }, 0)
        function kE(r) {
          return r && r.length ? ke(r, Kt) : 0
        }
        function SE(r, a) {
          return r && r.length ? ke(r, oe(a, 2)) : 0
        }
        return (
          (v.after = W_),
          (v.ary = rm),
          (v.assign = Tk),
          (v.assignIn = vm),
          (v.assignInWith = wl),
          (v.assignWith = Nk),
          (v.at = Rk),
          (v.before = im),
          (v.bind = Hf),
          (v.bindAll = US),
          (v.bindKey = am),
          (v.castArray = rk),
          (v.chain = em),
          (v.chunk = h2),
          (v.compact = d2),
          (v.concat = p2),
          (v.cond = MS),
          (v.conforms = $S),
          (v.constant = Yf),
          (v.countBy = k_),
          (v.create = zk),
          (v.curry = om),
          (v.curryRight = sm),
          (v.debounce = um),
          (v.defaults = jk),
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
          (v.flatMap = A_),
          (v.flatMapDeep = L_),
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
          (v.initial = A2),
          (v.intersection = L2),
          (v.intersectionBy = P2),
          (v.intersectionWith = O2),
          (v.invert = Kk),
          (v.invertBy = Qk),
          (v.invokeMap = T_),
          (v.iteratee = Xf),
          (v.keyBy = N_),
          (v.keys = ct),
          (v.keysIn = qt),
          (v.map = pl),
          (v.mapKeys = Jk),
          (v.mapValues = Yk),
          (v.matches = WS),
          (v.matchesProperty = qS),
          (v.memoize = ml),
          (v.merge = Xk),
          (v.mergeWith = ym),
          (v.method = KS),
          (v.methodOf = QS),
          (v.mixin = Zf),
          (v.negate = vl),
          (v.nthArg = JS),
          (v.omit = Zk),
          (v.omitBy = eS),
          (v.once = G_),
          (v.orderBy = R_),
          (v.over = YS),
          (v.overArgs = J_),
          (v.overEvery = XS),
          (v.overSome = ZS),
          (v.partial = Wf),
          (v.partialRight = lm),
          (v.partition = z_),
          (v.pick = tS),
          (v.pickBy = bm),
          (v.property = Cm),
          (v.propertyOf = eE),
          (v.pull = R2),
          (v.pullAll = Xg),
          (v.pullAllBy = z2),
          (v.pullAllWith = j2),
          (v.pullAt = D2),
          (v.range = tE),
          (v.rangeRight = nE),
          (v.rearg = Y_),
          (v.reject = F_),
          (v.remove = F2),
          (v.rest = X_),
          (v.reverse = Bf),
          (v.sampleSize = M_),
          (v.set = rS),
          (v.setWith = iS),
          (v.shuffle = $_),
          (v.slice = U2),
          (v.sortBy = H_),
          (v.sortedUniq = q2),
          (v.sortedUniqBy = K2),
          (v.split = AS),
          (v.spread = Z_),
          (v.tail = Q2),
          (v.take = G2),
          (v.takeRight = J2),
          (v.takeRightWhile = Y2),
          (v.takeWhile = X2),
          (v.tap = d_),
          (v.throttle = ek),
          (v.thru = dl),
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
          (v.updateWith = uS),
          (v.values = Ua),
          (v.valuesIn = lS),
          (v.without = a_),
          (v.words = Em),
          (v.wrap = nk),
          (v.xor = o_),
          (v.xorBy = s_),
          (v.xorWith = u_),
          (v.zip = l_),
          (v.zipObject = c_),
          (v.zipObjectDeep = f_),
          (v.zipWith = h_),
          (v.entries = wm),
          (v.entriesIn = _m),
          (v.extend = vm),
          (v.extendWith = wl),
          Zf(v, v),
          (v.add = lE),
          (v.attempt = xm),
          (v.camelCase = dS),
          (v.capitalize = km),
          (v.ceil = cE),
          (v.clamp = cS),
          (v.clone = ik),
          (v.cloneDeep = ok),
          (v.cloneDeepWith = sk),
          (v.cloneWith = ak),
          (v.conformsTo = uk),
          (v.deburr = Sm),
          (v.defaultTo = BS),
          (v.divide = fE),
          (v.endsWith = pS),
          (v.eq = Rn),
          (v.escape = gS),
          (v.escapeRegExp = mS),
          (v.every = S_),
          (v.find = x_),
          (v.findIndex = Qg),
          (v.findKey = Fk),
          (v.findLast = C_),
          (v.findLastIndex = Gg),
          (v.findLastKey = Uk),
          (v.floor = hE),
          (v.forEach = tm),
          (v.forEachRight = nm),
          (v.forIn = Mk),
          (v.forInRight = $k),
          (v.forOwn = Bk),
          (v.forOwnRight = Vk),
          (v.get = Qf),
          (v.gt = lk),
          (v.gte = ck),
          (v.has = qk),
          (v.hasIn = Gf),
          (v.head = Yg),
          (v.identity = Kt),
          (v.includes = I_),
          (v.indexOf = C2),
          (v.inRange = fS),
          (v.invoke = Gk),
          (v.isArguments = Wi),
          (v.isArray = he),
          (v.isArrayBuffer = fk),
          (v.isArrayLike = Wt),
          (v.isArrayLikeObject = et),
          (v.isBoolean = hk),
          (v.isBuffer = ei),
          (v.isDate = dk),
          (v.isElement = pk),
          (v.isEmpty = gk),
          (v.isEqual = mk),
          (v.isEqualWith = vk),
          (v.isError = qf),
          (v.isFinite = yk),
          (v.isFunction = _r),
          (v.isInteger = cm),
          (v.isLength = yl),
          (v.isMap = fm),
          (v.isMatch = bk),
          (v.isMatchWith = wk),
          (v.isNaN = _k),
          (v.isNative = kk),
          (v.isNil = Ek),
          (v.isNull = Sk),
          (v.isNumber = hm),
          (v.isObject = We),
          (v.isObjectLike = Ye),
          (v.isPlainObject = os),
          (v.isRegExp = Kf),
          (v.isSafeInteger = xk),
          (v.isSet = dm),
          (v.isString = bl),
          (v.isSymbol = rn),
          (v.isTypedArray = Fa),
          (v.isUndefined = Ck),
          (v.isWeakMap = Ak),
          (v.isWeakSet = Lk),
          (v.join = I2),
          (v.kebabCase = vS),
          (v.last = _n),
          (v.lastIndexOf = T2),
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
          (v.nth = N2),
          (v.noConflict = GS),
          (v.noop = eh),
          (v.now = gl),
          (v.pad = wS),
          (v.padEnd = _S),
          (v.padStart = kS),
          (v.parseInt = SS),
          (v.random = hS),
          (v.reduce = j_),
          (v.reduceRight = D_),
          (v.repeat = ES),
          (v.replace = xS),
          (v.result = nS),
          (v.round = wE),
          (v.runInContext = z),
          (v.sample = U_),
          (v.size = B_),
          (v.snakeCase = CS),
          (v.some = V_),
          (v.sortedIndex = M2),
          (v.sortedIndexBy = $2),
          (v.sortedIndexOf = B2),
          (v.sortedLastIndex = V2),
          (v.sortedLastIndexBy = H2),
          (v.sortedLastIndexOf = W2),
          (v.startCase = LS),
          (v.startsWith = PS),
          (v.subtract = _E),
          (v.sum = kE),
          (v.sumBy = SE),
          (v.template = OS),
          (v.times = oE),
          (v.toFinite = kr),
          (v.toInteger = de),
          (v.toLength = gm),
          (v.toLower = IS),
          (v.toNumber = kn),
          (v.toSafeInteger = Ik),
          (v.toString = Le),
          (v.toUpper = TS),
          (v.trim = NS),
          (v.trimEnd = RS),
          (v.trimStart = zS),
          (v.truncate = jS),
          (v.unescape = DS),
          (v.uniqueId = uE),
          (v.upperCase = FS),
          (v.upperFirst = Jf),
          (v.each = tm),
          (v.eachRight = nm),
          (v.first = Yg),
          Zf(
            v,
            (function () {
              var r = {}
              return (
                Kn(v, function (a, l) {
                  Ie.call(v.prototype, l) || (r[l] = a)
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
            ;(ve.prototype[r] = function (l) {
              l = l === n ? 1 : st(de(l), 0)
              var h = this.__filtered__ && !a ? new ve(this) : this.clone()
              return (
                h.__filtered__
                  ? (h.__takeCount__ = St(l, h.__takeCount__))
                  : h.__views__.push({
                      size: St(l, we),
                      type: r + (h.__dir__ < 0 ? 'Right' : ''),
                    }),
                h
              )
            }),
              (ve.prototype[r + 'Right'] = function (l) {
                return this.reverse()[r](l).reverse()
              })
          }),
          _t(['filter', 'map', 'takeWhile'], function (r, a) {
            var l = a + 1,
              h = l == Ze || l == Hn
            ve.prototype[r] = function (m) {
              var b = this.clone()
              return (
                b.__iteratees__.push({ iteratee: oe(m, 3), type: l }),
                (b.__filtered__ = b.__filtered__ || h),
                b
              )
            }
          }),
          _t(['head', 'last'], function (r, a) {
            var l = 'take' + (a ? 'Right' : '')
            ve.prototype[r] = function () {
              return this[l](1).value()[0]
            }
          }),
          _t(['initial', 'tail'], function (r, a) {
            var l = 'drop' + (a ? '' : 'Right')
            ve.prototype[r] = function () {
              return this.__filtered__ ? new ve(this) : this[l](1)
            }
          }),
          (ve.prototype.compact = function () {
            return this.filter(Kt)
          }),
          (ve.prototype.find = function (r) {
            return this.filter(r).head()
          }),
          (ve.prototype.findLast = function (r) {
            return this.reverse().find(r)
          }),
          (ve.prototype.invokeMap = ge(function (r, a) {
            return typeof r == 'function'
              ? new ve(this)
              : this.map(function (l) {
                  return es(l, r, a)
                })
          })),
          (ve.prototype.reject = function (r) {
            return this.filter(vl(oe(r)))
          }),
          (ve.prototype.slice = function (r, a) {
            r = de(r)
            var l = this
            return l.__filtered__ && (r > 0 || a < 0)
              ? new ve(l)
              : (r < 0 ? (l = l.takeRight(-r)) : r && (l = l.drop(r)),
                a !== n &&
                  ((a = de(a)), (l = a < 0 ? l.dropRight(-a) : l.take(a - r))),
                l)
          }),
          (ve.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse()
          }),
          (ve.prototype.toArray = function () {
            return this.take(we)
          }),
          Kn(ve.prototype, function (r, a) {
            var l = /^(?:filter|find|map|reject)|While$/.test(a),
              h = /^(?:head|last)$/.test(a),
              m = v[h ? 'take' + (a == 'last' ? 'Right' : '') : a],
              b = h || /^find/.test(a)
            m &&
              (v.prototype[a] = function () {
                var E = this.__wrapped__,
                  I = h ? [1] : arguments,
                  j = E instanceof ve,
                  q = I[0],
                  K = j || he(E),
                  Q = function (me) {
                    var be = m.apply(v, In([me], I))
                    return h && te ? be[0] : be
                  }
                K &&
                  l &&
                  typeof q == 'function' &&
                  q.length != 1 &&
                  (j = K = !1)
                var te = this.__chain__,
                  ie = !!this.__actions__.length,
                  se = b && !te,
                  pe = j && !ie
                if (!b && K) {
                  E = pe ? E : new ve(this)
                  var ue = r.apply(E, I)
                  return (
                    ue.__actions__.push({ func: dl, args: [Q], thisArg: n }),
                    new yn(ue, te)
                  )
                }
                return se && pe
                  ? r.apply(this, I)
                  : ((ue = this.thru(Q)),
                    se ? (h ? ue.value()[0] : ue.value()) : ue)
              })
          }),
          _t(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (r) {
              var a = Uu[r],
                l = /^(?:push|sort|unshift)$/.test(r) ? 'tap' : 'thru',
                h = /^(?:pop|shift)$/.test(r)
              v.prototype[r] = function () {
                var m = arguments
                if (h && !this.__chain__) {
                  var b = this.value()
                  return a.apply(he(b) ? b : [], m)
                }
                return this[l](function (E) {
                  return a.apply(he(E) ? E : [], m)
                })
              }
            }
          ),
          Kn(ve.prototype, function (r, a) {
            var l = v[a]
            if (l) {
              var h = l.name + ''
              Ie.call(Na, h) || (Na[h] = []), Na[h].push({ name: a, func: l })
            }
          }),
          (Na[ol(n, T).name] = [{ name: 'wrapper', func: n }]),
          (ve.prototype.clone = Db),
          (ve.prototype.reverse = Fb),
          (ve.prototype.value = Ub),
          (v.prototype.at = p_),
          (v.prototype.chain = g_),
          (v.prototype.commit = m_),
          (v.prototype.next = v_),
          (v.prototype.plant = b_),
          (v.prototype.reverse = w_),
          (v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = __),
          (v.prototype.first = v.prototype.head),
          Ko && (v.prototype[Ko] = y_),
          v
        )
      },
      Oa = mb()
    fr ? (((fr.exports = Oa)._ = Oa), (Sa._ = Oa)) : (je._ = Oa)
  }).call(ss)
})(Ac, Ac.exports)
Ac.exports
const l9 = () =>
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
function c9() {
  return oi.jsx(pC, { children: oi.jsx(l9, {}) })
}
const fe = (e) => typeof e == 'string',
  ms = () => {
    let e, t
    const n = new Promise((i, o) => {
      ;(e = i), (t = o)
    })
    return (n.resolve = e), (n.reject = t), n
  },
  u0 = (e) => (e == null ? '' : '' + e),
  f9 = (e, t, n) => {
    e.forEach((i) => {
      t[i] && (n[i] = t[i])
    })
  },
  h9 = /###/g,
  l0 = (e) => (e && e.indexOf('###') > -1 ? e.replace(h9, '.') : e),
  c0 = (e) => !e || fe(e),
  Ts = (e, t, n) => {
    const i = fe(t) ? t.split('.') : t
    let o = 0
    for (; o < i.length - 1; ) {
      if (c0(e)) return {}
      const u = l0(i[o])
      !e[u] && n && (e[u] = new n()),
        Object.prototype.hasOwnProperty.call(e, u) ? (e = e[u]) : (e = {}),
        ++o
    }
    return c0(e) ? {} : { obj: e, k: l0(i[o]) }
  },
  f0 = (e, t, n) => {
    const { obj: i, k: o } = Ts(e, t, Object)
    if (i !== void 0 || t.length === 1) {
      i[o] = n
      return
    }
    let u = t[t.length - 1],
      c = t.slice(0, t.length - 1),
      d = Ts(e, c, Object)
    for (; d.obj === void 0 && c.length; )
      (u = `${c[c.length - 1]}.${u}`),
        (c = c.slice(0, c.length - 1)),
        (d = Ts(e, c, Object)),
        d && d.obj && typeof d.obj[`${d.k}.${u}`] < 'u' && (d.obj = void 0)
    d.obj[`${d.k}.${u}`] = n
  },
  d9 = (e, t, n, i) => {
    const { obj: o, k: u } = Ts(e, t, Object)
    ;(o[u] = o[u] || []), o[u].push(n)
  },
  Lc = (e, t) => {
    const { obj: n, k: i } = Ts(e, t)
    if (n) return n[i]
  },
  p9 = (e, t, n) => {
    const i = Lc(e, n)
    return i !== void 0 ? i : Lc(t, n)
  },
  eb = (e, t, n) => {
    for (const i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in e
          ? fe(e[i]) ||
            e[i] instanceof String ||
            fe(t[i]) ||
            t[i] instanceof String
            ? n && (e[i] = t[i])
            : eb(e[i], t[i], n)
          : (e[i] = t[i]))
    return e
  },
  $a = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var g9 = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const m9 = (e) => (fe(e) ? e.replace(/[&<>"'\/]/g, (t) => g9[t]) : e)
class v9 {
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
const y9 = [' ', ',', '?', '!', ';'],
  b9 = new v9(20),
  w9 = (e, t, n) => {
    ;(t = t || ''), (n = n || '')
    const i = y9.filter((c) => t.indexOf(c) < 0 && n.indexOf(c) < 0)
    if (i.length === 0) return !0
    const o = b9.getRegExp(
      `(${i.map((c) => (c === '?' ? '\\?' : c)).join('|')})`
    )
    let u = !o.test(e)
    if (!u) {
      const c = e.indexOf(n)
      c > 0 && !o.test(e.substring(0, c)) && (u = !0)
    }
    return u
  },
  jd = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!e) return
    if (e[t]) return e[t]
    const i = t.split(n)
    let o = e
    for (let u = 0; u < i.length; ) {
      if (!o || typeof o != 'object') return
      let c,
        d = ''
      for (let g = u; g < i.length; ++g)
        if ((g !== u && (d += n), (d += i[g]), (c = o[d]), c !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof c) > -1 &&
            g < i.length - 1
          )
            continue
          u += g - u + 1
          break
        }
      o = c
    }
    return o
  },
  Pc = (e) => e && e.replace('_', '-'),
  _9 = {
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
class Oc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || _9),
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
      : (fe(t[0]) && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[n](t))
  }
  create(t) {
    return new Oc(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Oc(this.logger, t)
    )
  }
}
var Zn = new Oc()
class Qc {
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
      Array.from(this.observers[t].entries()).forEach((u) => {
        let [c, d] = u
        for (let g = 0; g < d; g++) c(...i)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((u) => {
          let [c, d] = u
          for (let g = 0; g < d; g++) c.apply(c, [t, ...i])
        })
  }
}
class h0 extends Qc {
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
    const u =
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
            : fe(i) && u
            ? d.push(...i.split(u))
            : d.push(i)))
    const g = Lc(this.data, d)
    return (
      !g &&
        !n &&
        !i &&
        t.indexOf('.') > -1 &&
        ((t = d[0]), (n = d[1]), (i = d.slice(2).join('.'))),
      g || !c || !fe(i)
        ? g
        : jd(this.data && this.data[t] && this.data[t][n], i, u)
    )
  }
  addResource(t, n, i, o) {
    let u =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const c =
      u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator
    let d = [t, n]
    i && (d = d.concat(c ? i.split(c) : i)),
      t.indexOf('.') > -1 && ((d = t.split('.')), (o = n), (n = d[1])),
      this.addNamespaces(n),
      f0(this.data, d, o),
      u.silent || this.emit('added', t, n, i, o)
  }
  addResources(t, n, i) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const u in i)
      (fe(i[u]) || Array.isArray(i[u])) &&
        this.addResource(t, n, u, i[u], { silent: !0 })
    o.silent || this.emit('added', t, n, i)
  }
  addResourceBundle(t, n, i, o, u) {
    let c =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      d = [t, n]
    t.indexOf('.') > -1 && ((d = t.split('.')), (o = i), (i = n), (n = d[1])),
      this.addNamespaces(n)
    let g = Lc(this.data, d) || {}
    c.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      o ? eb(g, i, u) : (g = { ...g, ...i }),
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
      e.forEach((u) => {
        this.processors[u] && (t = this.processors[u].process(t, n, i, o))
      }),
      t
    )
  },
}
const d0 = {}
class Ic extends Qc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      f9(
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
      (this.logger = Zn.create('translator'))
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
    let u = n.ns || this.options.defaultNS || []
    const c = i && t.indexOf(i) > -1,
      d =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !w9(t, i, o)
    if (c && !d) {
      const g = t.match(this.interpolator.nestingRegexp)
      if (g && g.length > 0) return { key: t, namespaces: u }
      const w = t.split(i)
      ;(i !== o || (i === o && this.options.ns.indexOf(w[0]) > -1)) &&
        (u = w.shift()),
        (t = w.join(o))
    }
    return fe(u) && (u = [u]), { key: t, namespaces: u }
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
      u =
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
      U = (O && O.exactUsedKey) || c,
      W = Object.prototype.toString.apply(k),
      J = ['[object Number]', '[object Function]', '[object RegExp]'],
      T = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      x = !this.i18nFormat || this.i18nFormat.handleAsObject,
      N = !fe(k) && typeof k != 'boolean' && typeof k != 'number'
    if (x && k && N && J.indexOf(W) < 0 && !(fe(T) && Array.isArray(k))) {
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
      if (u) {
        const B = Array.isArray(k),
          G = B ? [] : {},
          X = B ? U : V
        for (const S in k)
          if (Object.prototype.hasOwnProperty.call(k, S)) {
            const _ = `${X}${u}${S}`
            ;(G[S] = this.translate(_, { ...n, joinArrays: !1, ns: d })),
              G[S] === _ && (G[S] = k[S])
          }
        k = G
      }
    } else if (x && fe(T) && Array.isArray(k))
      (k = k.join(T)), k && (k = this.extendTranslation(k, t, n, i))
    else {
      let B = !1,
        G = !1
      const X = n.count !== void 0 && !fe(n.count),
        S = Ic.hasDefaultValue(n),
        _ = X ? this.pluralResolver.getSuffix(w, n.count, n) : '',
        C =
          n.ordinal && X
            ? this.pluralResolver.getSuffix(w, n.count, { ordinal: !1 })
            : '',
        L =
          X &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        R =
          (L && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${_}`] ||
          n[`defaultValue${C}`] ||
          n.defaultValue
      !this.isValidLookup(k) && S && ((B = !0), (k = R)),
        this.isValidLookup(k) || ((G = !0), (k = c))
      const F =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          G
            ? void 0
            : k,
        A = S && R !== k && this.options.updateMissing
      if (G || B || A) {
        if (
          (this.logger.log(A ? 'updateKey' : 'missingKey', w, g, c, A ? R : k),
          u)
        ) {
          const xe = this.resolve(c, { ...n, keySeparator: !1 })
          xe &&
            xe.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let Ze = []
        const $t = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && $t && $t[0])
          for (let xe = 0; xe < $t.length; xe++) Ze.push($t[xe])
        else
          this.options.saveMissingTo === 'all'
            ? (Ze = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Ze.push(n.lng || this.language)
        const Hn = (xe, Z, ae) => {
          const le = S && ae !== k ? ae : F
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(xe, g, Z, le, A, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(xe, g, Z, le, A, n),
            this.emit('missingKey', xe, g, Z, k)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && X
            ? Ze.forEach((xe) => {
                const Z = this.pluralResolver.getSuffixes(xe, n)
                L &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  Z.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  Z.push(`${this.options.pluralSeparator}zero`),
                  Z.forEach((ae) => {
                    Hn([xe], c + ae, n[`defaultValue${ae}`] || R)
                  })
              })
            : Hn(Ze, c, R))
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
  extendTranslation(t, n, i, o, u) {
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
        fe(t) &&
        (i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let P
      if (w) {
        const k = t.match(this.interpolator.nestingRegexp)
        P = k && k.length
      }
      let O = i.replace && !fe(i.replace) ? i.replace : i
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
                var k = arguments.length, V = new Array(k), U = 0;
                U < k;
                U++
              )
                V[U] = arguments[U]
              return u && u[0] === V[0] && !i.context
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
      g = fe(d) ? [d] : d
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
      u,
      c,
      d
    return (
      fe(t) && (t = [t]),
      t.forEach((g) => {
        if (this.isValidLookup(i)) return
        const w = this.extractFromKey(g, n),
          P = w.key
        o = P
        let O = w.namespaces
        this.options.fallbackNS && (O = O.concat(this.options.fallbackNS))
        const k = n.count !== void 0 && !fe(n.count),
          V =
            k &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          U =
            n.context !== void 0 &&
            (fe(n.context) || typeof n.context == 'number') &&
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
            W.forEach((T) => {
              if (this.isValidLookup(i)) return
              c = T
              const x = [P]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(x, P, T, J, n)
              else {
                let B
                k && (B = this.pluralResolver.getSuffix(T, n.count, n))
                const G = `${this.options.pluralSeparator}zero`,
                  X = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (k &&
                    (x.push(P + B),
                    n.ordinal &&
                      B.indexOf(X) === 0 &&
                      x.push(P + B.replace(X, this.options.pluralSeparator)),
                    V && x.push(P + G)),
                  U)
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
              let N
              for (; (N = x.pop()); )
                this.isValidLookup(i) ||
                  ((u = N), (i = this.getResource(T, J, N, n)))
            }))
        })
      }),
      { res: i, usedKey: o, exactUsedKey: u, usedLng: c, usedNS: d }
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
      i = t.replace && !fe(t.replace)
    let o = i ? t.replace : t
    if (
      (i && typeof t.count < 'u' && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !i)
    ) {
      o = { ...o }
      for (const u of n) delete o[u]
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
const Rh = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class p0 {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Zn.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = Pc(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = Pc(t)), !t || t.indexOf('-') < 0)) return t
    const n = t.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(t) {
    if (fe(t) && t.indexOf('-') > -1) {
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
              (i[1] = Rh(i[1].toLowerCase())))
          : i.length === 3 &&
            ((i[0] = i[0].toLowerCase()),
            i[1].length === 2 && (i[1] = i[1].toUpperCase()),
            i[0] !== 'sgn' && i[2].length === 2 && (i[2] = i[2].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = Rh(i[1].toLowerCase())),
            n.indexOf(i[2].toLowerCase()) > -1 &&
              (i[2] = Rh(i[2].toLowerCase()))),
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
          n = this.options.supportedLngs.find((u) => {
            if (
              u === o ||
              (!(u.indexOf('-') < 0 && o.indexOf('-') < 0) &&
                ((u.indexOf('-') > 0 &&
                  o.indexOf('-') < 0 &&
                  u.substring(0, u.indexOf('-')) === o) ||
                  (u.indexOf(o) === 0 && o.length > 1)))
            )
              return u
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
      fe(t) && (t = [t]),
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
      u = (c) => {
        c &&
          (this.isSupportedCode(c)
            ? o.push(c)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${c}`
              ))
      }
    return (
      fe(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            u(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            u(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            u(this.getLanguagePartFromCode(t)))
        : fe(t) && u(this.formatLanguageCode(t)),
      i.forEach((c) => {
        o.indexOf(c) < 0 && u(this.formatLanguageCode(c))
      }),
      o
    )
  }
}
let k9 = [
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
  S9 = {
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
const E9 = ['v1', 'v2', 'v3'],
  x9 = ['v4'],
  g0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  C9 = () => {
    const e = {}
    return (
      k9.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: S9[t.fc] }
        })
      }),
      e
    )
  }
class A9 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = n),
      (this.logger = Zn.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        x9.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = C9()),
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
        const i = Pc(t === 'dev' ? 'en' : t),
          o = n.ordinal ? 'ordinal' : 'cardinal',
          u = JSON.stringify({ cleanedCode: i, type: o })
        if (u in this.pluralRulesCache) return this.pluralRulesCache[u]
        const c = new Intl.PluralRules(i, { type: o })
        return (this.pluralRulesCache[u] = c), c
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
            .pluralCategories.sort((o, u) => g0[o] - g0[u])
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
    const u = () =>
      this.options.prepend && o.toString()
        ? this.options.prepend + o.toString()
        : o.toString()
    return this.options.compatibilityJSON === 'v1'
      ? o === 1
        ? ''
        : typeof o == 'number'
        ? `_plural_${o.toString()}`
        : u()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? u()
      : this.options.prepend && i.toString()
      ? this.options.prepend + i.toString()
      : i.toString()
  }
  shouldUseIntlApi() {
    return !E9.includes(this.options.compatibilityJSON)
  }
}
const m0 = function (e, t, n) {
    let i =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      u = p9(e, t, n)
    return (
      !u &&
        o &&
        fe(n) &&
        ((u = jd(e, n, i)), u === void 0 && (u = jd(t, n, i))),
      u
    )
  },
  zh = (e) => e.replace(/\$/g, '$$$$')
class L9 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Zn.create('interpolator')),
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
      prefix: u,
      prefixEscaped: c,
      suffix: d,
      suffixEscaped: g,
      formatSeparator: w,
      unescapeSuffix: P,
      unescapePrefix: O,
      nestingPrefix: k,
      nestingPrefixEscaped: V,
      nestingSuffix: U,
      nestingSuffixEscaped: W,
      nestingOptionsSeparator: J,
      maxReplaces: T,
      alwaysFormat: x,
    } = t.interpolation
    ;(this.escape = n !== void 0 ? n : m9),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = u ? $a(u) : c || '{{'),
      (this.suffix = d ? $a(d) : g || '}}'),
      (this.formatSeparator = w || ','),
      (this.unescapePrefix = P ? '' : O || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : P || ''),
      (this.nestingPrefix = k ? $a(k) : V || $a('$t(')),
      (this.nestingSuffix = U ? $a(U) : W || $a(')')),
      (this.nestingOptionsSeparator = J || ','),
      (this.maxReplaces = T || 1e3),
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
    let u, c, d
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
          U = V.shift().trim(),
          W = V.join(this.formatSeparator).trim()
        return this.format(
          m0(
            n,
            g,
            U,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          W,
          i,
          { ...o, ...n, interpolationkey: U }
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
        { regex: this.regexpUnescape, safeValue: (k) => zh(k) },
        {
          regex: this.regexp,
          safeValue: (k) => (this.escapeValue ? zh(this.escape(k)) : zh(k)),
        },
      ].forEach((k) => {
        for (d = 0; (u = k.regex.exec(t)); ) {
          const V = u[1].trim()
          if (((c = w(V)), c === void 0))
            if (typeof P == 'function') {
              const W = P(t, u, o)
              c = fe(W) ? W : ''
            } else if (o && Object.prototype.hasOwnProperty.call(o, V)) c = ''
            else if (O) {
              c = u[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${V} for interpolating ${t}`
              ),
                (c = '')
          else !fe(c) && !this.useRawValueToEscape && (c = u0(c))
          const U = k.safeValue(c)
          if (
            ((t = t.replace(u[0], U)),
            O
              ? ((k.regex.lastIndex += c.length),
                (k.regex.lastIndex -= u[0].length))
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
      u,
      c
    const d = (g, w) => {
      const P = this.nestingOptionsSeparator
      if (g.indexOf(P) < 0) return g
      const O = g.split(new RegExp(`${P}[ ]*{`))
      let k = `{${O[1]}`
      ;(g = O[0]), (k = this.interpolate(k, c))
      const V = k.match(/'/g),
        U = k.match(/"/g)
      ;((V && V.length % 2 === 0 && !U) || U.length % 2 !== 0) &&
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
        (c = c.replace && !fe(c.replace) ? c.replace : c),
        (c.applyPostProcessor = !1),
        delete c.defaultValue
      let w = !1
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const P = o[1].split(this.formatSeparator).map((O) => O.trim())
        ;(o[1] = P.shift()), (g = P), (w = !0)
      }
      if (((u = n(d.call(this, o[1].trim(), c), c)), u && o[0] === t && !fe(u)))
        return u
      fe(u) || (u = u0(u)),
        u ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
          (u = '')),
        w &&
          (u = g.reduce(
            (P, O) =>
              this.format(P, O, i.lng, { ...i, interpolationkey: o[1].trim() }),
            u.trim()
          )),
        (t = t.replace(o[0], u)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
const P9 = (e) => {
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
        : o.split(';').forEach((u) => {
            if (u) {
              const [c, ...d] = u.split(':'),
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
  Ba = (e) => {
    const t = {}
    return (n, i, o) => {
      let u = o
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (u = { ...u, [o.interpolationkey]: void 0 })
      const c = i + JSON.stringify(u)
      let d = t[c]
      return d || ((d = e(Pc(i), o)), (t[c] = d)), d(n)
    }
  }
class O9 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Zn.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Ba((n, i) => {
          const o = new Intl.NumberFormat(n, { ...i })
          return (u) => o.format(u)
        }),
        currency: Ba((n, i) => {
          const o = new Intl.NumberFormat(n, { ...i, style: 'currency' })
          return (u) => o.format(u)
        }),
        datetime: Ba((n, i) => {
          const o = new Intl.DateTimeFormat(n, { ...i })
          return (u) => o.format(u)
        }),
        relativetime: Ba((n, i) => {
          const o = new Intl.RelativeTimeFormat(n, { ...i })
          return (u) => o.format(u, i.range || 'day')
        }),
        list: Ba((n, i) => {
          const o = new Intl.ListFormat(n, { ...i })
          return (u) => o.format(u)
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
    this.formats[t.toLowerCase().trim()] = Ba(n)
  }
  format(t, n, i) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const u = n.split(this.formatSeparator)
    if (
      u.length > 1 &&
      u[0].indexOf('(') > 1 &&
      u[0].indexOf(')') < 0 &&
      u.find((c) => c.indexOf(')') > -1)
    ) {
      const c = u.findIndex((d) => d.indexOf(')') > -1)
      u[0] = [u[0], ...u.splice(1, c)].join(this.formatSeparator)
    }
    return u.reduce((c, d) => {
      const { formatName: g, formatOptions: w } = P9(d)
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
const I9 = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class T9 extends Qc {
  constructor(t, n, i) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = o),
      (this.logger = Zn.create('backendConnector')),
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
    const u = {},
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
                  u[k] === void 0 && (u[k] = !0),
                  g[O] === void 0 && (g[O] = !0)))
        }),
          P || (d[w] = !0)
      }),
      (Object.keys(u).length || Object.keys(c).length) &&
        this.queue.push({
          pending: c,
          pendingCount: Object.keys(c).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(u),
        pending: Object.keys(c),
        toLoadLanguages: Object.keys(d),
        toLoadNamespaces: Object.keys(g),
      }
    )
  }
  loaded(t, n, i) {
    const o = t.split('|'),
      u = o[0],
      c = o[1]
    n && this.emit('failedLoading', u, c, n),
      !n &&
        i &&
        this.store.addResourceBundle(u, c, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && i && (this.state[t] = 0)
    const d = {}
    this.queue.forEach((g) => {
      d9(g.loaded, [u], c),
        I9(g, t),
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
      u =
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
        wait: u,
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
            this.read.call(this, t, n, i, o + 1, u * 2, c)
          }, u)
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
    fe(t) && (t = this.languageUtils.toResolveHierarchy(t)), fe(n) && (n = [n])
    const u = this.queueLoad(t, n, i, o)
    if (!u.toLoad.length) return u.pending.length || o(), null
    u.toLoad.forEach((c) => {
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
      u = i[1]
    this.read(o, u, 'read', void 0, void 0, (c, d) => {
      c &&
        this.logger.warn(
          `${n}loading namespace ${u} for language ${o} failed`,
          c
        ),
        !c &&
          d &&
          this.logger.log(`${n}loaded namespace ${u} for language ${o}`, d),
        this.loaded(t, c, d)
    })
  }
  saveMissing(t, n, i, o, u) {
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
        const g = { ...c, isUpdate: u },
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
        fe(e[1]) && (t.defaultValue = e[1]),
        fe(e[2]) && (t.tDescription = e[2]),
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
    fe(e.ns) && (e.ns = [e.ns]),
    fe(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    fe(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  Ul = () => {},
  N9 = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
      typeof e[t] == 'function' && (e[t] = e[t].bind(e))
    })
  }
class Xs extends Qc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = y0(t)),
      (this.services = {}),
      (this.logger = Zn),
      (this.modules = { external: [] }),
      N9(this),
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
        (fe(n.ns)
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
    const u = (g) => (g ? (typeof g == 'function' ? new g() : g) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? Zn.init(u(this.modules.logger), this.options)
        : Zn.init(null, this.options)
      let g
      this.modules.formatter
        ? (g = this.modules.formatter)
        : typeof Intl < 'u' && (g = O9)
      const w = new p0(this.options)
      this.store = new h0(this.options.resources, this.options)
      const P = this.services
      ;(P.logger = Zn),
        (P.resourceStore = this.store),
        (P.languageUtils = w),
        (P.pluralResolver = new A9(w, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((P.formatter = u(g)),
          P.formatter.init(P, this.options),
          (this.options.interpolation.format = P.formatter.format.bind(
            P.formatter
          ))),
        (P.interpolator = new L9(this.options)),
        (P.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (P.backendConnector = new T9(
          u(this.modules.backend),
          P.resourceStore,
          P,
          this.options
        )),
        P.backendConnector.on('*', function (O) {
          for (
            var k = arguments.length, V = new Array(k > 1 ? k - 1 : 0), U = 1;
            U < k;
            U++
          )
            V[U - 1] = arguments[U]
          t.emit(O, ...V)
        }),
        this.modules.languageDetector &&
          ((P.languageDetector = u(this.modules.languageDetector)),
          P.languageDetector.init &&
            P.languageDetector.init(P, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((P.i18nFormat = u(this.modules.i18nFormat)),
          P.i18nFormat.init && P.i18nFormat.init(this)),
        (this.translator = new Ic(this.services, this.options)),
        this.translator.on('*', function (O) {
          for (
            var k = arguments.length, V = new Array(k > 1 ? k - 1 : 0), U = 1;
            U < k;
            U++
          )
            V[U - 1] = arguments[U]
          t.emit(O, ...V)
        }),
        this.modules.external.forEach((O) => {
          O.init && O.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = Ul),
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
    const c = ms(),
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ul
    const i = fe(t) ? t : this.language
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
        u = (c) => {
          !c ||
            c === 'cimode' ||
            this.services.languageUtils.toResolveHierarchy(c).forEach((d) => {
              d !== 'cimode' && o.indexOf(d) < 0 && o.push(d)
            })
        }
      i
        ? u(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((c) => u(c)),
        this.options.preload && this.options.preload.forEach((c) => u(c)),
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
    const o = ms()
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof n == 'function' && ((i = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      i || (i = Ul),
      this.services.backendConnector.reload(t, n, (u) => {
        o.resolve(), i(u)
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
    const o = ms()
    this.emit('languageChanging', t)
    const u = (g) => {
        ;(this.language = g),
          (this.languages = this.services.languageUtils.toResolveHierarchy(g)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(g)
      },
      c = (g, w) => {
        w
          ? (u(w),
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
        const w = fe(g)
          ? g
          : this.services.languageUtils.getBestMatchFromCodes(g)
        w &&
          (this.language || u(w),
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
    const u = function (c, d) {
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
      ;(g.lng = g.lng || u.lng),
        (g.lngs = g.lngs || u.lngs),
        (g.ns = g.ns || u.ns),
        g.keyPrefix !== '' && (g.keyPrefix = g.keyPrefix || i || u.keyPrefix)
      const k = o.options.keySeparator || '.'
      let V
      return (
        g.keyPrefix && Array.isArray(c)
          ? (V = c.map((U) => `${g.keyPrefix}${k}${U}`))
          : (V = g.keyPrefix ? `${g.keyPrefix}${k}${c}` : c),
        o.t(V, g)
      )
    }
    return fe(t) ? (u.lng = t) : (u.lngs = t), (u.ns = n), (u.keyPrefix = i), u
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
      u = this.languages[this.languages.length - 1]
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
      (c(i, t) && (!o || c(u, t)))
    )
  }
  loadNamespaces(t, n) {
    const i = ms()
    return this.options.ns
      ? (fe(t) && (t = [t]),
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
    const i = ms()
    fe(t) && (t = [t])
    const o = this.options.preload || [],
      u = t.filter(
        (c) =>
          o.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c)
      )
    return u.length
      ? ((this.options.preload = o.concat(u)),
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
    return new Xs(t, n)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ul
    const i = t.forkResourceStore
    i && delete t.forkResourceStore
    const o = { ...this.options, ...t, isClone: !0 },
      u = new Xs(o)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (u.logger = u.logger.clone(t)),
      ['store', 'services', 'language'].forEach((c) => {
        u[c] = this[c]
      }),
      (u.services = { ...this.services }),
      (u.services.utils = { hasLoadedNamespace: u.hasLoadedNamespace.bind(u) }),
      i &&
        ((u.store = new h0(this.store.data, o)),
        (u.services.resourceStore = u.store)),
      (u.translator = new Ic(u.services, o)),
      u.translator.on('*', function (c) {
        for (
          var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), w = 1;
          w < d;
          w++
        )
          g[w - 1] = arguments[w]
        u.emit(c, ...g)
      }),
      u.init(o, n),
      (u.translator.options = o),
      (u.translator.backendConnector.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u),
      }),
      u
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
const Ot = Xs.createInstance()
Ot.createInstance = Xs.createInstance
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
Ot.use(rC).init({
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
jh.createRoot(document.getElementById('root')).render(
  oi.jsx(L0.StrictMode, { children: oi.jsx(c9, {}) })
)
