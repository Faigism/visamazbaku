function V2(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in t)) {
          const o = Object.getOwnPropertyDescriptor(r, i)
          o &&
            Object.defineProperty(
              t,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const u of o.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && r(u)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
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
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
var hu =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function M2(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t
}
var O1 = { exports: {} },
  hf = {},
  D1 = { exports: {} },
  Ce = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dl = Symbol.for('react.element'),
  b2 = Symbol.for('react.portal'),
  F2 = Symbol.for('react.fragment'),
  U2 = Symbol.for('react.strict_mode'),
  z2 = Symbol.for('react.profiler'),
  B2 = Symbol.for('react.provider'),
  $2 = Symbol.for('react.context'),
  j2 = Symbol.for('react.forward_ref'),
  W2 = Symbol.for('react.suspense'),
  q2 = Symbol.for('react.memo'),
  H2 = Symbol.for('react.lazy'),
  s0 = Symbol.iterator
function K2(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (s0 && t[s0]) || t['@@iterator']),
      typeof t == 'function' ? t : null)
}
var V1 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  M1 = Object.assign,
  b1 = {}
function _a(t, e, n) {
  ;(this.props = t),
    (this.context = e),
    (this.refs = b1),
    (this.updater = n || V1)
}
_a.prototype.isReactComponent = {}
_a.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, t, e, 'setState')
}
_a.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
}
function F1() {}
F1.prototype = _a.prototype
function Jg(t, e, n) {
  ;(this.props = t),
    (this.context = e),
    (this.refs = b1),
    (this.updater = n || V1)
}
var Zg = (Jg.prototype = new F1())
Zg.constructor = Jg
M1(Zg, _a.prototype)
Zg.isPureReactComponent = !0
var o0 = Array.isArray,
  U1 = Object.prototype.hasOwnProperty,
  em = { current: null },
  z1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function B1(t, e, n) {
  var r,
    i = {},
    o = null,
    u = null
  if (e != null)
    for (r in (e.ref !== void 0 && (u = e.ref),
    e.key !== void 0 && (o = '' + e.key),
    e))
      U1.call(e, r) && !z1.hasOwnProperty(r) && (i[r] = e[r])
  var h = arguments.length - 2
  if (h === 1) i.children = n
  else if (1 < h) {
    for (var f = Array(h), g = 0; g < h; g++) f[g] = arguments[g + 2]
    i.children = f
  }
  if (t && t.defaultProps)
    for (r in ((h = t.defaultProps), h)) i[r] === void 0 && (i[r] = h[r])
  return { $$typeof: dl, type: t, key: o, ref: u, props: i, _owner: em.current }
}
function G2(t, e) {
  return {
    $$typeof: dl,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  }
}
function tm(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === dl
}
function Q2(t) {
  var e = { '=': '=0', ':': '=2' }
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n]
    })
  )
}
var a0 = /\/+/g
function Qd(t, e) {
  return typeof t == 'object' && t !== null && t.key != null
    ? Q2('' + t.key)
    : e.toString(36)
}
function oh(t, e, n, r, i) {
  var o = typeof t
  ;(o === 'undefined' || o === 'boolean') && (t = null)
  var u = !1
  if (t === null) u = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        u = !0
        break
      case 'object':
        switch (t.$$typeof) {
          case dl:
          case b2:
            u = !0
        }
    }
  if (u)
    return (
      (u = t),
      (i = i(u)),
      (t = r === '' ? '.' + Qd(u, 0) : r),
      o0(i)
        ? ((n = ''),
          t != null && (n = t.replace(a0, '$&/') + '/'),
          oh(i, e, n, '', function (g) {
            return g
          }))
        : i != null &&
          (tm(i) &&
            (i = G2(
              i,
              n +
                (!i.key || (u && u.key === i.key)
                  ? ''
                  : ('' + i.key).replace(a0, '$&/') + '/') +
                t
            )),
          e.push(i)),
      1
    )
  if (((u = 0), (r = r === '' ? '.' : r + ':'), o0(t)))
    for (var h = 0; h < t.length; h++) {
      o = t[h]
      var f = r + Qd(o, h)
      u += oh(o, e, n, f, i)
    }
  else if (((f = K2(t)), typeof f == 'function'))
    for (t = f.call(t), h = 0; !(o = t.next()).done; )
      (o = o.value), (f = r + Qd(o, h++)), (u += oh(o, e, n, f, i))
  else if (o === 'object')
    throw (
      ((e = String(t)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return u
}
function Fc(t, e, n) {
  if (t == null) return t
  var r = [],
    i = 0
  return (
    oh(t, r, '', '', function (o) {
      return e.call(n, o, i++)
    }),
    r
  )
}
function Y2(t) {
  if (t._status === -1) {
    var e = t._result
    ;(e = e()),
      e.then(
        function (n) {
          ;(t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n))
        },
        function (n) {
          ;(t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n))
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e))
  }
  if (t._status === 1) return t._result.default
  throw t._result
}
var cn = { current: null },
  ah = { transition: null },
  X2 = {
    ReactCurrentDispatcher: cn,
    ReactCurrentBatchConfig: ah,
    ReactCurrentOwner: em,
  }
Ce.Children = {
  map: Fc,
  forEach: function (t, e, n) {
    Fc(
      t,
      function () {
        e.apply(this, arguments)
      },
      n
    )
  },
  count: function (t) {
    var e = 0
    return (
      Fc(t, function () {
        e++
      }),
      e
    )
  },
  toArray: function (t) {
    return (
      Fc(t, function (e) {
        return e
      }) || []
    )
  },
  only: function (t) {
    if (!tm(t))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return t
  },
}
Ce.Component = _a
Ce.Fragment = F2
Ce.Profiler = z2
Ce.PureComponent = Jg
Ce.StrictMode = U2
Ce.Suspense = W2
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X2
Ce.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        t +
        '.'
    )
  var r = M1({}, t.props),
    i = t.key,
    o = t.ref,
    u = t._owner
  if (e != null) {
    if (
      (e.ref !== void 0 && ((o = e.ref), (u = em.current)),
      e.key !== void 0 && (i = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var h = t.type.defaultProps
    for (f in e)
      U1.call(e, f) &&
        !z1.hasOwnProperty(f) &&
        (r[f] = e[f] === void 0 && h !== void 0 ? h[f] : e[f])
  }
  var f = arguments.length - 2
  if (f === 1) r.children = n
  else if (1 < f) {
    h = Array(f)
    for (var g = 0; g < f; g++) h[g] = arguments[g + 2]
    r.children = h
  }
  return { $$typeof: dl, type: t.type, key: i, ref: o, props: r, _owner: u }
}
Ce.createContext = function (t) {
  return (
    (t = {
      $$typeof: $2,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: B2, _context: t }),
    (t.Consumer = t)
  )
}
Ce.createElement = B1
Ce.createFactory = function (t) {
  var e = B1.bind(null, t)
  return (e.type = t), e
}
Ce.createRef = function () {
  return { current: null }
}
Ce.forwardRef = function (t) {
  return { $$typeof: j2, render: t }
}
Ce.isValidElement = tm
Ce.lazy = function (t) {
  return { $$typeof: H2, _payload: { _status: -1, _result: t }, _init: Y2 }
}
Ce.memo = function (t, e) {
  return { $$typeof: q2, type: t, compare: e === void 0 ? null : e }
}
Ce.startTransition = function (t) {
  var e = ah.transition
  ah.transition = {}
  try {
    t()
  } finally {
    ah.transition = e
  }
}
Ce.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
Ce.useCallback = function (t, e) {
  return cn.current.useCallback(t, e)
}
Ce.useContext = function (t) {
  return cn.current.useContext(t)
}
Ce.useDebugValue = function () {}
Ce.useDeferredValue = function (t) {
  return cn.current.useDeferredValue(t)
}
Ce.useEffect = function (t, e) {
  return cn.current.useEffect(t, e)
}
Ce.useId = function () {
  return cn.current.useId()
}
Ce.useImperativeHandle = function (t, e, n) {
  return cn.current.useImperativeHandle(t, e, n)
}
Ce.useInsertionEffect = function (t, e) {
  return cn.current.useInsertionEffect(t, e)
}
Ce.useLayoutEffect = function (t, e) {
  return cn.current.useLayoutEffect(t, e)
}
Ce.useMemo = function (t, e) {
  return cn.current.useMemo(t, e)
}
Ce.useReducer = function (t, e, n) {
  return cn.current.useReducer(t, e, n)
}
Ce.useRef = function (t) {
  return cn.current.useRef(t)
}
Ce.useState = function (t) {
  return cn.current.useState(t)
}
Ce.useSyncExternalStore = function (t, e, n) {
  return cn.current.useSyncExternalStore(t, e, n)
}
Ce.useTransition = function () {
  return cn.current.useTransition()
}
Ce.version = '18.2.0'
D1.exports = Ce
var je = D1.exports
const $1 = M2(je),
  J2 = V2({ __proto__: null, default: $1 }, [je])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Z2 = je,
  eP = Symbol.for('react.element'),
  tP = Symbol.for('react.fragment'),
  nP = Object.prototype.hasOwnProperty,
  rP = Z2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  iP = { key: !0, ref: !0, __self: !0, __source: !0 }
function j1(t, e, n) {
  var r,
    i = {},
    o = null,
    u = null
  n !== void 0 && (o = '' + n),
    e.key !== void 0 && (o = '' + e.key),
    e.ref !== void 0 && (u = e.ref)
  for (r in e) nP.call(e, r) && !iP.hasOwnProperty(r) && (i[r] = e[r])
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r])
  return { $$typeof: eP, type: t, key: o, ref: u, props: i, _owner: rP.current }
}
hf.Fragment = tP
hf.jsx = j1
hf.jsxs = j1
O1.exports = hf
var pr = O1.exports,
  Lp = {},
  W1 = { exports: {} },
  Dn = {},
  q1 = { exports: {} },
  H1 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (t) {
  function e(Z, ue) {
    var le = Z.length
    Z.push(ue)
    e: for (; 0 < le; ) {
      var Se = (le - 1) >>> 1,
        Be = Z[Se]
      if (0 < i(Be, ue)) (Z[Se] = ue), (Z[le] = Be), (le = Se)
      else break e
    }
  }
  function n(Z) {
    return Z.length === 0 ? null : Z[0]
  }
  function r(Z) {
    if (Z.length === 0) return null
    var ue = Z[0],
      le = Z.pop()
    if (le !== ue) {
      Z[0] = le
      e: for (var Se = 0, Be = Z.length, Ze = Be >>> 1; Se < Ze; ) {
        var er = 2 * (Se + 1) - 1,
          Bt = Z[er],
          fn = er + 1,
          tr = Z[fn]
        if (0 > i(Bt, le))
          fn < Be && 0 > i(tr, Bt)
            ? ((Z[Se] = tr), (Z[fn] = le), (Se = fn))
            : ((Z[Se] = Bt), (Z[er] = le), (Se = er))
        else if (fn < Be && 0 > i(tr, le)) (Z[Se] = tr), (Z[fn] = le), (Se = fn)
        else break e
      }
    }
    return ue
  }
  function i(Z, ue) {
    var le = Z.sortIndex - ue.sortIndex
    return le !== 0 ? le : Z.id - ue.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    t.unstable_now = function () {
      return o.now()
    }
  } else {
    var u = Date,
      h = u.now()
    t.unstable_now = function () {
      return u.now() - h
    }
  }
  var f = [],
    g = [],
    v = 1,
    E = null,
    _ = 3,
    L = !1,
    b = !1,
    B = !1,
    j = typeof setTimeout == 'function' ? setTimeout : null,
    P = typeof clearTimeout == 'function' ? clearTimeout : null,
    C = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function O(Z) {
    for (var ue = n(g); ue !== null; ) {
      if (ue.callback === null) r(g)
      else if (ue.startTime <= Z)
        r(g), (ue.sortIndex = ue.expirationTime), e(f, ue)
      else break
      ue = n(g)
    }
  }
  function $(Z) {
    if (((B = !1), O(Z), !b))
      if (n(f) !== null) (b = !0), Mn(Q)
      else {
        var ue = n(g)
        ue !== null && mt($, ue.startTime - Z)
      }
  }
  function Q(Z, ue) {
    ;(b = !1), B && ((B = !1), P(I), (I = -1)), (L = !0)
    var le = _
    try {
      for (
        O(ue), E = n(f);
        E !== null && (!(E.expirationTime > ue) || (Z && !V()));

      ) {
        var Se = E.callback
        if (typeof Se == 'function') {
          ;(E.callback = null), (_ = E.priorityLevel)
          var Be = Se(E.expirationTime <= ue)
          ;(ue = t.unstable_now()),
            typeof Be == 'function' ? (E.callback = Be) : E === n(f) && r(f),
            O(ue)
        } else r(f)
        E = n(f)
      }
      if (E !== null) var Ze = !0
      else {
        var er = n(g)
        er !== null && mt($, er.startTime - ue), (Ze = !1)
      }
      return Ze
    } finally {
      ;(E = null), (_ = le), (L = !1)
    }
  }
  var X = !1,
    A = null,
    I = -1,
    x = 5,
    N = -1
  function V() {
    return !(t.unstable_now() - N < x)
  }
  function z() {
    if (A !== null) {
      var Z = t.unstable_now()
      N = Z
      var ue = !0
      try {
        ue = A(!0, Z)
      } finally {
        ue ? k() : ((X = !1), (A = null))
      }
    } else X = !1
  }
  var k
  if (typeof C == 'function')
    k = function () {
      C(z)
    }
  else if (typeof MessageChannel < 'u') {
    var lt = new MessageChannel(),
      en = lt.port2
    ;(lt.port1.onmessage = z),
      (k = function () {
        en.postMessage(null)
      })
  } else
    k = function () {
      j(z, 0)
    }
  function Mn(Z) {
    ;(A = Z), X || ((X = !0), k())
  }
  function mt(Z, ue) {
    I = j(function () {
      Z(t.unstable_now())
    }, ue)
  }
  ;(t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (Z) {
      Z.callback = null
    }),
    (t.unstable_continueExecution = function () {
      b || L || ((b = !0), Mn(Q))
    }),
    (t.unstable_forceFrameRate = function (Z) {
      0 > Z || 125 < Z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (x = 0 < Z ? Math.floor(1e3 / Z) : 5)
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return _
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(f)
    }),
    (t.unstable_next = function (Z) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var ue = 3
          break
        default:
          ue = _
      }
      var le = _
      _ = ue
      try {
        return Z()
      } finally {
        _ = le
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (Z, ue) {
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
      var le = _
      _ = Z
      try {
        return ue()
      } finally {
        _ = le
      }
    }),
    (t.unstable_scheduleCallback = function (Z, ue, le) {
      var Se = t.unstable_now()
      switch (
        (typeof le == 'object' && le !== null
          ? ((le = le.delay),
            (le = typeof le == 'number' && 0 < le ? Se + le : Se))
          : (le = Se),
        Z)
      ) {
        case 1:
          var Be = -1
          break
        case 2:
          Be = 250
          break
        case 5:
          Be = 1073741823
          break
        case 4:
          Be = 1e4
          break
        default:
          Be = 5e3
      }
      return (
        (Be = le + Be),
        (Z = {
          id: v++,
          callback: ue,
          priorityLevel: Z,
          startTime: le,
          expirationTime: Be,
          sortIndex: -1,
        }),
        le > Se
          ? ((Z.sortIndex = le),
            e(g, Z),
            n(f) === null &&
              Z === n(g) &&
              (B ? (P(I), (I = -1)) : (B = !0), mt($, le - Se)))
          : ((Z.sortIndex = Be), e(f, Z), b || L || ((b = !0), Mn(Q))),
        Z
      )
    }),
    (t.unstable_shouldYield = V),
    (t.unstable_wrapCallback = function (Z) {
      var ue = _
      return function () {
        var le = _
        _ = ue
        try {
          return Z.apply(this, arguments)
        } finally {
          _ = le
        }
      }
    })
})(H1)
q1.exports = H1
var sP = q1.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var K1 = je,
  On = sP
function ee(t) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
    n < arguments.length;
    n++
  )
    e += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var G1 = new Set(),
  ju = {}
function Gs(t, e) {
  oa(t, e), oa(t + 'Capture', e)
}
function oa(t, e) {
  for (ju[t] = e, t = 0; t < e.length; t++) G1.add(e[t])
}
var ii = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Op = Object.prototype.hasOwnProperty,
  oP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  u0 = {},
  l0 = {}
function aP(t) {
  return Op.call(l0, t)
    ? !0
    : Op.call(u0, t)
    ? !1
    : oP.test(t)
    ? (l0[t] = !0)
    : ((u0[t] = !0), !1)
}
function uP(t, e, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-')
    default:
      return !1
  }
}
function lP(t, e, n, r) {
  if (e === null || typeof e > 'u' || uP(t, e, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e
      case 4:
        return e === !1
      case 5:
        return isNaN(e)
      case 6:
        return isNaN(e) || 1 > e
    }
  return !1
}
function hn(t, e, n, r, i, o, u) {
  ;(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u)
}
var Ut = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (t) {
    Ut[t] = new hn(t, 0, !1, t, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (t) {
  var e = t[0]
  Ut[e] = new hn(e, 1, !1, t[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
  Ut[t] = new hn(t, 2, !1, t.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (t) {
  Ut[t] = new hn(t, 2, !1, t, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (t) {
    Ut[t] = new hn(t, 3, !1, t.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
  Ut[t] = new hn(t, 3, !0, t, null, !1, !1)
})
;['capture', 'download'].forEach(function (t) {
  Ut[t] = new hn(t, 4, !1, t, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (t) {
  Ut[t] = new hn(t, 6, !1, t, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (t) {
  Ut[t] = new hn(t, 5, !1, t.toLowerCase(), null, !1, !1)
})
var nm = /[\-:]([a-z])/g
function rm(t) {
  return t[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(nm, rm)
    Ut[e] = new hn(e, 1, !1, t, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(nm, rm)
    Ut[e] = new hn(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(nm, rm)
  Ut[e] = new hn(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (t) {
  Ut[t] = new hn(t, 1, !1, t.toLowerCase(), null, !1, !1)
})
Ut.xlinkHref = new hn(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (t) {
  Ut[t] = new hn(t, 1, !1, t.toLowerCase(), null, !0, !0)
})
function im(t, e, n, r) {
  var i = Ut.hasOwnProperty(e) ? Ut[e] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== 'o' && e[0] !== 'O') ||
      (e[1] !== 'n' && e[1] !== 'N')) &&
    (lP(e, n, i, r) && (n = null),
    r || i === null
      ? aP(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var ci = K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Uc = Symbol.for('react.element'),
  bo = Symbol.for('react.portal'),
  Fo = Symbol.for('react.fragment'),
  sm = Symbol.for('react.strict_mode'),
  Dp = Symbol.for('react.profiler'),
  Q1 = Symbol.for('react.provider'),
  Y1 = Symbol.for('react.context'),
  om = Symbol.for('react.forward_ref'),
  Vp = Symbol.for('react.suspense'),
  Mp = Symbol.for('react.suspense_list'),
  am = Symbol.for('react.memo'),
  ki = Symbol.for('react.lazy'),
  X1 = Symbol.for('react.offscreen'),
  c0 = Symbol.iterator
function fu(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (c0 && t[c0]) || t['@@iterator']),
      typeof t == 'function' ? t : null)
}
var it = Object.assign,
  Yd
function Eu(t) {
  if (Yd === void 0)
    try {
      throw Error()
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/)
      Yd = (e && e[1]) || ''
    }
  return (
    `
` +
    Yd +
    t
  )
}
var Xd = !1
function Jd(t, e) {
  if (!t || Xd) return ''
  Xd = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (e)
      if (
        ((e = function () {
          throw Error()
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, [])
        } catch (g) {
          var r = g
        }
        Reflect.construct(t, [], e)
      } else {
        try {
          e.call()
        } catch (g) {
          r = g
        }
        t.call(e.prototype)
      }
    else {
      try {
        throw Error()
      } catch (g) {
        r = g
      }
      t()
    }
  } catch (g) {
    if (g && r && typeof g.stack == 'string') {
      for (
        var i = g.stack.split(`
`),
          o = r.stack.split(`
`),
          u = i.length - 1,
          h = o.length - 1;
        1 <= u && 0 <= h && i[u] !== o[h];

      )
        h--
      for (; 1 <= u && 0 <= h; u--, h--)
        if (i[u] !== o[h]) {
          if (u !== 1 || h !== 1)
            do
              if ((u--, h--, 0 > h || i[u] !== o[h])) {
                var f =
                  `
` + i[u].replace(' at new ', ' at ')
                return (
                  t.displayName &&
                    f.includes('<anonymous>') &&
                    (f = f.replace('<anonymous>', t.displayName)),
                  f
                )
              }
            while (1 <= u && 0 <= h)
          break
        }
    }
  } finally {
    ;(Xd = !1), (Error.prepareStackTrace = n)
  }
  return (t = t ? t.displayName || t.name : '') ? Eu(t) : ''
}
function cP(t) {
  switch (t.tag) {
    case 5:
      return Eu(t.type)
    case 16:
      return Eu('Lazy')
    case 13:
      return Eu('Suspense')
    case 19:
      return Eu('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (t = Jd(t.type, !1)), t
    case 11:
      return (t = Jd(t.type.render, !1)), t
    case 1:
      return (t = Jd(t.type, !0)), t
    default:
      return ''
  }
}
function bp(t) {
  if (t == null) return null
  if (typeof t == 'function') return t.displayName || t.name || null
  if (typeof t == 'string') return t
  switch (t) {
    case Fo:
      return 'Fragment'
    case bo:
      return 'Portal'
    case Dp:
      return 'Profiler'
    case sm:
      return 'StrictMode'
    case Vp:
      return 'Suspense'
    case Mp:
      return 'SuspenseList'
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case Y1:
        return (t.displayName || 'Context') + '.Consumer'
      case Q1:
        return (t._context.displayName || 'Context') + '.Provider'
      case om:
        var e = t.render
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        )
      case am:
        return (
          (e = t.displayName || null), e !== null ? e : bp(t.type) || 'Memo'
        )
      case ki:
        ;(e = t._payload), (t = t._init)
        try {
          return bp(t(e))
        } catch {}
    }
  return null
}
function hP(t) {
  var e = t.type
  switch (t.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (e.displayName || 'Context') + '.Consumer'
    case 10:
      return (e._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ''),
        e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return e
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return bp(e)
    case 8:
      return e === sm ? 'StrictMode' : 'Mode'
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
      if (typeof e == 'function') return e.displayName || e.name || null
      if (typeof e == 'string') return e
  }
  return null
}
function Gi(t) {
  switch (typeof t) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return t
    case 'object':
      return t
    default:
      return ''
  }
}
function J1(t) {
  var e = t.type
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  )
}
function fP(t) {
  var e = J1(t) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = '' + t[e]
  if (
    !t.hasOwnProperty(e) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (u) {
          ;(r = '' + u), o.call(this, u)
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (u) {
          r = '' + u
        },
        stopTracking: function () {
          ;(t._valueTracker = null), delete t[e]
        },
      }
    )
  }
}
function zc(t) {
  t._valueTracker || (t._valueTracker = fP(t))
}
function Z1(t) {
  if (!t) return !1
  var e = t._valueTracker
  if (!e) return !0
  var n = e.getValue(),
    r = ''
  return (
    t && (r = J1(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  )
}
function Ih(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
    return null
  try {
    return t.activeElement || t.body
  } catch {
    return t.body
  }
}
function Fp(t, e) {
  var n = e.checked
  return it({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  })
}
function h0(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked
  ;(n = Gi(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === 'checkbox' || e.type === 'radio'
          ? e.checked != null
          : e.value != null,
    })
}
function ew(t, e) {
  ;(e = e.checked), e != null && im(t, 'checked', e, !1)
}
function Up(t, e) {
  ew(t, e)
  var n = Gi(e.value),
    r = e.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
      : t.value !== '' + n && (t.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    t.removeAttribute('value')
    return
  }
  e.hasOwnProperty('value')
    ? zp(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && zp(t, e.type, Gi(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked)
}
function f0(t, e, n) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var r = e.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return
    ;(e = '' + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e)
  }
  ;(n = t.name),
    n !== '' && (t.name = ''),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== '' && (t.name = n)
}
function zp(t, e, n) {
  ;(e !== 'number' || Ih(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n))
}
var Tu = Array.isArray
function Qo(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {}
    for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0)
  } else {
    for (n = '' + Gi(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        ;(t[i].selected = !0), r && (t[i].defaultSelected = !0)
        return
      }
      e !== null || t[i].disabled || (e = t[i])
    }
    e !== null && (e.selected = !0)
  }
}
function Bp(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(ee(91))
  return it({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue,
  })
}
function d0(t, e) {
  var n = e.value
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(ee(92))
      if (Tu(n)) {
        if (1 < n.length) throw Error(ee(93))
        n = n[0]
      }
      e = n
    }
    e == null && (e = ''), (n = e)
  }
  t._wrapperState = { initialValue: Gi(n) }
}
function tw(t, e) {
  var n = Gi(e.value),
    r = Gi(e.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = '' + r)
}
function p0(t) {
  var e = t.textContent
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e)
}
function nw(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function $p(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? nw(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : t
}
var Bc,
  rw = (function (t) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i)
          })
        }
      : t
  })(function (t, e) {
    if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
      t.innerHTML = e
    else {
      for (
        Bc = Bc || document.createElement('div'),
          Bc.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = Bc.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild)
      for (; e.firstChild; ) t.appendChild(e.firstChild)
    }
  })
function Wu(t, e) {
  if (e) {
    var n = t.firstChild
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e
      return
    }
  }
  t.textContent = e
}
var Pu = {
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
  dP = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Pu).forEach(function (t) {
  dP.forEach(function (e) {
    ;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Pu[e] = Pu[t])
  })
})
function iw(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (Pu.hasOwnProperty(t) && Pu[t])
    ? ('' + e).trim()
    : e + 'px'
}
function sw(t, e) {
  t = t.style
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = iw(n, e[n], r)
      n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i)
    }
}
var pP = it(
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
function jp(t, e) {
  if (e) {
    if (pP[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(ee(137, t))
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(ee(60))
      if (
        typeof e.dangerouslySetInnerHTML != 'object' ||
        !('__html' in e.dangerouslySetInnerHTML)
      )
        throw Error(ee(61))
    }
    if (e.style != null && typeof e.style != 'object') throw Error(ee(62))
  }
}
function Wp(t, e) {
  if (t.indexOf('-') === -1) return typeof e.is == 'string'
  switch (t) {
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
var qp = null
function um(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  )
}
var Hp = null,
  Yo = null,
  Xo = null
function g0(t) {
  if ((t = ml(t))) {
    if (typeof Hp != 'function') throw Error(ee(280))
    var e = t.stateNode
    e && ((e = mf(e)), Hp(t.stateNode, t.type, e))
  }
}
function ow(t) {
  Yo ? (Xo ? Xo.push(t) : (Xo = [t])) : (Yo = t)
}
function aw() {
  if (Yo) {
    var t = Yo,
      e = Xo
    if (((Xo = Yo = null), g0(t), e)) for (t = 0; t < e.length; t++) g0(e[t])
  }
}
function uw(t, e) {
  return t(e)
}
function lw() {}
var Zd = !1
function cw(t, e, n) {
  if (Zd) return t(e, n)
  Zd = !0
  try {
    return uw(t, e, n)
  } finally {
    ;(Zd = !1), (Yo !== null || Xo !== null) && (lw(), aw())
  }
}
function qu(t, e) {
  var n = t.stateNode
  if (n === null) return null
  var r = mf(n)
  if (r === null) return null
  n = r[e]
  e: switch (e) {
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
      ;(r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === 'button' ||
          t === 'input' ||
          t === 'select' ||
          t === 'textarea'
        ))),
        (t = !r)
      break e
    default:
      t = !1
  }
  if (t) return null
  if (n && typeof n != 'function') throw Error(ee(231, e, typeof n))
  return n
}
var Kp = !1
if (ii)
  try {
    var du = {}
    Object.defineProperty(du, 'passive', {
      get: function () {
        Kp = !0
      },
    }),
      window.addEventListener('test', du, du),
      window.removeEventListener('test', du, du)
  } catch {
    Kp = !1
  }
function gP(t, e, n, r, i, o, u, h, f) {
  var g = Array.prototype.slice.call(arguments, 3)
  try {
    e.apply(n, g)
  } catch (v) {
    this.onError(v)
  }
}
var ku = !1,
  Ah = null,
  Ch = !1,
  Gp = null,
  mP = {
    onError: function (t) {
      ;(ku = !0), (Ah = t)
    },
  }
function yP(t, e, n, r, i, o, u, h, f) {
  ;(ku = !1), (Ah = null), gP.apply(mP, arguments)
}
function vP(t, e, n, r, i, o, u, h, f) {
  if ((yP.apply(this, arguments), ku)) {
    if (ku) {
      var g = Ah
      ;(ku = !1), (Ah = null)
    } else throw Error(ee(198))
    Ch || ((Ch = !0), (Gp = g))
  }
}
function Qs(t) {
  var e = t,
    n = t
  if (t.alternate) for (; e.return; ) e = e.return
  else {
    t = e
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return)
    while (t)
  }
  return e.tag === 3 ? n : null
}
function hw(t) {
  if (t.tag === 13) {
    var e = t.memoizedState
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated
  }
  return null
}
function m0(t) {
  if (Qs(t) !== t) throw Error(ee(188))
}
function _P(t) {
  var e = t.alternate
  if (!e) {
    if (((e = Qs(t)), e === null)) throw Error(ee(188))
    return e !== t ? null : t
  }
  for (var n = t, r = e; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return m0(i), t
        if (o === r) return m0(i), e
        o = o.sibling
      }
      throw Error(ee(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var u = !1, h = i.child; h; ) {
        if (h === n) {
          ;(u = !0), (n = i), (r = o)
          break
        }
        if (h === r) {
          ;(u = !0), (r = i), (n = o)
          break
        }
        h = h.sibling
      }
      if (!u) {
        for (h = o.child; h; ) {
          if (h === n) {
            ;(u = !0), (n = o), (r = i)
            break
          }
          if (h === r) {
            ;(u = !0), (r = o), (n = i)
            break
          }
          h = h.sibling
        }
        if (!u) throw Error(ee(189))
      }
    }
    if (n.alternate !== r) throw Error(ee(190))
  }
  if (n.tag !== 3) throw Error(ee(188))
  return n.stateNode.current === n ? t : e
}
function fw(t) {
  return (t = _P(t)), t !== null ? dw(t) : null
}
function dw(t) {
  if (t.tag === 5 || t.tag === 6) return t
  for (t = t.child; t !== null; ) {
    var e = dw(t)
    if (e !== null) return e
    t = t.sibling
  }
  return null
}
var pw = On.unstable_scheduleCallback,
  y0 = On.unstable_cancelCallback,
  wP = On.unstable_shouldYield,
  EP = On.unstable_requestPaint,
  pt = On.unstable_now,
  TP = On.unstable_getCurrentPriorityLevel,
  lm = On.unstable_ImmediatePriority,
  gw = On.unstable_UserBlockingPriority,
  Rh = On.unstable_NormalPriority,
  SP = On.unstable_LowPriority,
  mw = On.unstable_IdlePriority,
  ff = null,
  Pr = null
function IP(t) {
  if (Pr && typeof Pr.onCommitFiberRoot == 'function')
    try {
      Pr.onCommitFiberRoot(ff, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var gr = Math.clz32 ? Math.clz32 : RP,
  AP = Math.log,
  CP = Math.LN2
function RP(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((AP(t) / CP) | 0)) | 0
}
var $c = 64,
  jc = 4194304
function Su(t) {
  switch (t & -t) {
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
      return t & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return t
  }
}
function xh(t, e) {
  var n = t.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = t.suspendedLanes,
    o = t.pingedLanes,
    u = n & 268435455
  if (u !== 0) {
    var h = u & ~i
    h !== 0 ? (r = Su(h)) : ((o &= u), o !== 0 && (r = Su(o)))
  } else (u = n & ~i), u !== 0 ? (r = Su(u)) : o !== 0 && (r = Su(o))
  if (r === 0) return 0
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return e
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - gr(e)), (i = 1 << n), (r |= t[n]), (e &= ~i)
  return r
}
function xP(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250
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
      return e + 5e3
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
function PP(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      o = t.pendingLanes;
    0 < o;

  ) {
    var u = 31 - gr(o),
      h = 1 << u,
      f = i[u]
    f === -1
      ? (!(h & n) || h & r) && (i[u] = xP(h, e))
      : f <= e && (t.expiredLanes |= h),
      (o &= ~h)
  }
}
function Qp(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  )
}
function yw() {
  var t = $c
  return ($c <<= 1), !($c & 4194240) && ($c = 64), t
}
function ep(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t)
  return e
}
function pl(t, e, n) {
  ;(t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - gr(e)),
    (t[e] = n)
}
function kP(t, e) {
  var n = t.pendingLanes & ~e
  ;(t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements)
  var r = t.eventTimes
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - gr(n),
      o = 1 << i
    ;(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o)
  }
}
function cm(t, e) {
  var n = (t.entangledLanes |= e)
  for (t = t.entanglements; n; ) {
    var r = 31 - gr(n),
      i = 1 << r
    ;(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i)
  }
}
var We = 0
function vw(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
}
var _w,
  hm,
  ww,
  Ew,
  Tw,
  Yp = !1,
  Wc = [],
  Fi = null,
  Ui = null,
  zi = null,
  Hu = new Map(),
  Ku = new Map(),
  Li = [],
  NP =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function v0(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      Fi = null
      break
    case 'dragenter':
    case 'dragleave':
      Ui = null
      break
    case 'mouseover':
    case 'mouseout':
      zi = null
      break
    case 'pointerover':
    case 'pointerout':
      Hu.delete(e.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ku.delete(e.pointerId)
  }
}
function pu(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      e !== null && ((e = ml(e)), e !== null && hm(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t)
}
function LP(t, e, n, r, i) {
  switch (e) {
    case 'focusin':
      return (Fi = pu(Fi, t, e, n, r, i)), !0
    case 'dragenter':
      return (Ui = pu(Ui, t, e, n, r, i)), !0
    case 'mouseover':
      return (zi = pu(zi, t, e, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Hu.set(o, pu(Hu.get(o) || null, t, e, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Ku.set(o, pu(Ku.get(o) || null, t, e, n, r, i)), !0
      )
  }
  return !1
}
function Sw(t) {
  var e = Ls(t.target)
  if (e !== null) {
    var n = Qs(e)
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = hw(n)), e !== null)) {
          ;(t.blockedOn = e),
            Tw(t.priority, function () {
              ww(n)
            })
          return
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  t.blockedOn = null
}
function uh(t) {
  if (t.blockedOn !== null) return !1
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Xp(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent)
    if (n === null) {
      n = t.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(qp = r), n.target.dispatchEvent(r), (qp = null)
    } else return (e = ml(n)), e !== null && hm(e), (t.blockedOn = n), !1
    e.shift()
  }
  return !0
}
function _0(t, e, n) {
  uh(t) && n.delete(e)
}
function OP() {
  ;(Yp = !1),
    Fi !== null && uh(Fi) && (Fi = null),
    Ui !== null && uh(Ui) && (Ui = null),
    zi !== null && uh(zi) && (zi = null),
    Hu.forEach(_0),
    Ku.forEach(_0)
}
function gu(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Yp ||
      ((Yp = !0), On.unstable_scheduleCallback(On.unstable_NormalPriority, OP)))
}
function Gu(t) {
  function e(i) {
    return gu(i, t)
  }
  if (0 < Wc.length) {
    gu(Wc[0], t)
    for (var n = 1; n < Wc.length; n++) {
      var r = Wc[n]
      r.blockedOn === t && (r.blockedOn = null)
    }
  }
  for (
    Fi !== null && gu(Fi, t),
      Ui !== null && gu(Ui, t),
      zi !== null && gu(zi, t),
      Hu.forEach(e),
      Ku.forEach(e),
      n = 0;
    n < Li.length;
    n++
  )
    (r = Li[n]), r.blockedOn === t && (r.blockedOn = null)
  for (; 0 < Li.length && ((n = Li[0]), n.blockedOn === null); )
    Sw(n), n.blockedOn === null && Li.shift()
}
var Jo = ci.ReactCurrentBatchConfig,
  Ph = !0
function DP(t, e, n, r) {
  var i = We,
    o = Jo.transition
  Jo.transition = null
  try {
    ;(We = 1), fm(t, e, n, r)
  } finally {
    ;(We = i), (Jo.transition = o)
  }
}
function VP(t, e, n, r) {
  var i = We,
    o = Jo.transition
  Jo.transition = null
  try {
    ;(We = 4), fm(t, e, n, r)
  } finally {
    ;(We = i), (Jo.transition = o)
  }
}
function fm(t, e, n, r) {
  if (Ph) {
    var i = Xp(t, e, n, r)
    if (i === null) cp(t, e, r, kh, n), v0(t, r)
    else if (LP(i, t, e, n, r)) r.stopPropagation()
    else if ((v0(t, r), e & 4 && -1 < NP.indexOf(t))) {
      for (; i !== null; ) {
        var o = ml(i)
        if (
          (o !== null && _w(o),
          (o = Xp(t, e, n, r)),
          o === null && cp(t, e, r, kh, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else cp(t, e, r, null, n)
  }
}
var kh = null
function Xp(t, e, n, r) {
  if (((kh = null), (t = um(r)), (t = Ls(t)), t !== null))
    if (((e = Qs(t)), e === null)) t = null
    else if (((n = e.tag), n === 13)) {
      if (((t = hw(e)), t !== null)) return t
      t = null
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null
      t = null
    } else e !== t && (t = null)
  return (kh = t), null
}
function Iw(t) {
  switch (t) {
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
      switch (TP()) {
        case lm:
          return 1
        case gw:
          return 4
        case Rh:
        case SP:
          return 16
        case mw:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Di = null,
  dm = null,
  lh = null
function Aw() {
  if (lh) return lh
  var t,
    e = dm,
    n = e.length,
    r,
    i = 'value' in Di ? Di.value : Di.textContent,
    o = i.length
  for (t = 0; t < n && e[t] === i[t]; t++);
  var u = n - t
  for (r = 1; r <= u && e[n - r] === i[o - r]; r++);
  return (lh = i.slice(t, 1 < r ? 1 - r : void 0))
}
function ch(t) {
  var e = t.keyCode
  return (
    'charCode' in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  )
}
function qc() {
  return !0
}
function w0() {
  return !1
}
function Vn(t) {
  function e(n, r, i, o, u) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null)
    for (var h in t)
      t.hasOwnProperty(h) && ((n = t[h]), (this[h] = n ? n(o) : o[h]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? qc
        : w0),
      (this.isPropagationStopped = w0),
      this
    )
  }
  return (
    it(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = qc))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = qc))
      },
      persist: function () {},
      isPersistent: qc,
    }),
    e
  )
}
var wa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pm = Vn(wa),
  gl = it({}, wa, { view: 0, detail: 0 }),
  MP = Vn(gl),
  tp,
  np,
  mu,
  df = it({}, gl, {
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
    getModifierState: gm,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget
    },
    movementX: function (t) {
      return 'movementX' in t
        ? t.movementX
        : (t !== mu &&
            (mu && t.type === 'mousemove'
              ? ((tp = t.screenX - mu.screenX), (np = t.screenY - mu.screenY))
              : (np = tp = 0),
            (mu = t)),
          tp)
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : np
    },
  }),
  E0 = Vn(df),
  bP = it({}, df, { dataTransfer: 0 }),
  FP = Vn(bP),
  UP = it({}, gl, { relatedTarget: 0 }),
  rp = Vn(UP),
  zP = it({}, wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  BP = Vn(zP),
  $P = it({}, wa, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData
    },
  }),
  jP = Vn($P),
  WP = it({}, wa, { data: 0 }),
  T0 = Vn(WP),
  qP = {
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
  HP = {
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
  KP = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function GP(t) {
  var e = this.nativeEvent
  return e.getModifierState ? e.getModifierState(t) : (t = KP[t]) ? !!e[t] : !1
}
function gm() {
  return GP
}
var QP = it({}, gl, {
    key: function (t) {
      if (t.key) {
        var e = qP[t.key] || t.key
        if (e !== 'Unidentified') return e
      }
      return t.type === 'keypress'
        ? ((t = ch(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? HP[t.keyCode] || 'Unidentified'
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
    getModifierState: gm,
    charCode: function (t) {
      return t.type === 'keypress' ? ch(t) : 0
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
    },
    which: function (t) {
      return t.type === 'keypress'
        ? ch(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0
    },
  }),
  YP = Vn(QP),
  XP = it({}, df, {
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
  S0 = Vn(XP),
  JP = it({}, gl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gm,
  }),
  ZP = Vn(JP),
  ek = it({}, wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tk = Vn(ek),
  nk = it({}, df, {
    deltaX: function (t) {
      return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
    },
    deltaY: function (t) {
      return 'deltaY' in t
        ? t.deltaY
        : 'wheelDeltaY' in t
        ? -t.wheelDeltaY
        : 'wheelDelta' in t
        ? -t.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  rk = Vn(nk),
  ik = [9, 13, 27, 32],
  mm = ii && 'CompositionEvent' in window,
  Nu = null
ii && 'documentMode' in document && (Nu = document.documentMode)
var sk = ii && 'TextEvent' in window && !Nu,
  Cw = ii && (!mm || (Nu && 8 < Nu && 11 >= Nu)),
  I0 = ' ',
  A0 = !1
function Rw(t, e) {
  switch (t) {
    case 'keyup':
      return ik.indexOf(e.keyCode) !== -1
    case 'keydown':
      return e.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function xw(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
}
var Uo = !1
function ok(t, e) {
  switch (t) {
    case 'compositionend':
      return xw(e)
    case 'keypress':
      return e.which !== 32 ? null : ((A0 = !0), I0)
    case 'textInput':
      return (t = e.data), t === I0 && A0 ? null : t
    default:
      return null
  }
}
function ak(t, e) {
  if (Uo)
    return t === 'compositionend' || (!mm && Rw(t, e))
      ? ((t = Aw()), (lh = dm = Di = null), (Uo = !1), t)
      : null
  switch (t) {
    case 'paste':
      return null
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char
        if (e.which) return String.fromCharCode(e.which)
      }
      return null
    case 'compositionend':
      return Cw && e.locale !== 'ko' ? null : e.data
    default:
      return null
  }
}
var uk = {
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
function C0(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase()
  return e === 'input' ? !!uk[t.type] : e === 'textarea'
}
function Pw(t, e, n, r) {
  ow(r),
    (e = Nh(e, 'onChange')),
    0 < e.length &&
      ((n = new pm('onChange', 'change', null, n, r)),
      t.push({ event: n, listeners: e }))
}
var Lu = null,
  Qu = null
function lk(t) {
  zw(t, 0)
}
function pf(t) {
  var e = $o(t)
  if (Z1(e)) return t
}
function ck(t, e) {
  if (t === 'change') return e
}
var kw = !1
if (ii) {
  var ip
  if (ii) {
    var sp = 'oninput' in document
    if (!sp) {
      var R0 = document.createElement('div')
      R0.setAttribute('oninput', 'return;'),
        (sp = typeof R0.oninput == 'function')
    }
    ip = sp
  } else ip = !1
  kw = ip && (!document.documentMode || 9 < document.documentMode)
}
function x0() {
  Lu && (Lu.detachEvent('onpropertychange', Nw), (Qu = Lu = null))
}
function Nw(t) {
  if (t.propertyName === 'value' && pf(Qu)) {
    var e = []
    Pw(e, Qu, t, um(t)), cw(lk, e)
  }
}
function hk(t, e, n) {
  t === 'focusin'
    ? (x0(), (Lu = e), (Qu = n), Lu.attachEvent('onpropertychange', Nw))
    : t === 'focusout' && x0()
}
function fk(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return pf(Qu)
}
function dk(t, e) {
  if (t === 'click') return pf(e)
}
function pk(t, e) {
  if (t === 'input' || t === 'change') return pf(e)
}
function gk(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
}
var yr = typeof Object.is == 'function' ? Object.is : gk
function Yu(t, e) {
  if (yr(t, e)) return !0
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
    return !1
  var n = Object.keys(t),
    r = Object.keys(e)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Op.call(e, i) || !yr(t[i], e[i])) return !1
  }
  return !0
}
function P0(t) {
  for (; t && t.firstChild; ) t = t.firstChild
  return t
}
function k0(t, e) {
  var n = P0(t)
  t = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t }
      t = r
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
    n = P0(n)
  }
}
function Lw(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Lw(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1
}
function Ow() {
  for (var t = window, e = Ih(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) t = e.contentWindow
    else break
    e = Ih(t.document)
  }
  return e
}
function ym(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase()
  return (
    e &&
    ((e === 'input' &&
      (t.type === 'text' ||
        t.type === 'search' ||
        t.type === 'tel' ||
        t.type === 'url' ||
        t.type === 'password')) ||
      e === 'textarea' ||
      t.contentEditable === 'true')
  )
}
function mk(t) {
  var e = Ow(),
    n = t.focusedElem,
    r = t.selectionRange
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Lw(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ym(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        'selectionStart' in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length))
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !t.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = k0(n, o))
        var u = k0(n, r)
        i &&
          u &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== u.node ||
            t.focusOffset !== u.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          o > r
            ? (t.addRange(e), t.extend(u.node, u.offset))
            : (e.setEnd(u.node, u.offset), t.addRange(e)))
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top)
  }
}
var yk = ii && 'documentMode' in document && 11 >= document.documentMode,
  zo = null,
  Jp = null,
  Ou = null,
  Zp = !1
function N0(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Zp ||
    zo == null ||
    zo !== Ih(r) ||
    ((r = zo),
    'selectionStart' in r && ym(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ou && Yu(Ou, r)) ||
      ((Ou = r),
      (r = Nh(Jp, 'onSelect')),
      0 < r.length &&
        ((e = new pm('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = zo))))
}
function Hc(t, e) {
  var n = {}
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  )
}
var Bo = {
    animationend: Hc('Animation', 'AnimationEnd'),
    animationiteration: Hc('Animation', 'AnimationIteration'),
    animationstart: Hc('Animation', 'AnimationStart'),
    transitionend: Hc('Transition', 'TransitionEnd'),
  },
  op = {},
  Dw = {}
ii &&
  ((Dw = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Bo.animationend.animation,
    delete Bo.animationiteration.animation,
    delete Bo.animationstart.animation),
  'TransitionEvent' in window || delete Bo.transitionend.transition)
function gf(t) {
  if (op[t]) return op[t]
  if (!Bo[t]) return t
  var e = Bo[t],
    n
  for (n in e) if (e.hasOwnProperty(n) && n in Dw) return (op[t] = e[n])
  return t
}
var Vw = gf('animationend'),
  Mw = gf('animationiteration'),
  bw = gf('animationstart'),
  Fw = gf('transitionend'),
  Uw = new Map(),
  L0 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function ts(t, e) {
  Uw.set(t, e), Gs(e, [t])
}
for (var ap = 0; ap < L0.length; ap++) {
  var up = L0[ap],
    vk = up.toLowerCase(),
    _k = up[0].toUpperCase() + up.slice(1)
  ts(vk, 'on' + _k)
}
ts(Vw, 'onAnimationEnd')
ts(Mw, 'onAnimationIteration')
ts(bw, 'onAnimationStart')
ts('dblclick', 'onDoubleClick')
ts('focusin', 'onFocus')
ts('focusout', 'onBlur')
ts(Fw, 'onTransitionEnd')
oa('onMouseEnter', ['mouseout', 'mouseover'])
oa('onMouseLeave', ['mouseout', 'mouseover'])
oa('onPointerEnter', ['pointerout', 'pointerover'])
oa('onPointerLeave', ['pointerout', 'pointerover'])
Gs(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Gs(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Gs('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Gs(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Gs(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Gs(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Iu =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  wk = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Iu))
function O0(t, e, n) {
  var r = t.type || 'unknown-event'
  ;(t.currentTarget = n), vP(r, e, void 0, t), (t.currentTarget = null)
}
function zw(t, e) {
  e = (e & 4) !== 0
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (e)
        for (var u = r.length - 1; 0 <= u; u--) {
          var h = r[u],
            f = h.instance,
            g = h.currentTarget
          if (((h = h.listener), f !== o && i.isPropagationStopped())) break e
          O0(i, h, g), (o = f)
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((h = r[u]),
            (f = h.instance),
            (g = h.currentTarget),
            (h = h.listener),
            f !== o && i.isPropagationStopped())
          )
            break e
          O0(i, h, g), (o = f)
        }
    }
  }
  if (Ch) throw ((t = Gp), (Ch = !1), (Gp = null), t)
}
function Qe(t, e) {
  var n = e[ig]
  n === void 0 && (n = e[ig] = new Set())
  var r = t + '__bubble'
  n.has(r) || (Bw(e, t, 2, !1), n.add(r))
}
function lp(t, e, n) {
  var r = 0
  e && (r |= 4), Bw(n, t, r, e)
}
var Kc = '_reactListening' + Math.random().toString(36).slice(2)
function Xu(t) {
  if (!t[Kc]) {
    ;(t[Kc] = !0),
      G1.forEach(function (n) {
        n !== 'selectionchange' && (wk.has(n) || lp(n, !1, t), lp(n, !0, t))
      })
    var e = t.nodeType === 9 ? t : t.ownerDocument
    e === null || e[Kc] || ((e[Kc] = !0), lp('selectionchange', !1, e))
  }
}
function Bw(t, e, n, r) {
  switch (Iw(e)) {
    case 1:
      var i = DP
      break
    case 4:
      i = VP
      break
    default:
      i = fm
  }
  ;(n = i.bind(null, e, n, t)),
    (i = void 0),
    !Kp ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1)
}
function cp(t, e, n, r, i) {
  var o = r
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var u = r.tag
      if (u === 3 || u === 4) {
        var h = r.stateNode.containerInfo
        if (h === i || (h.nodeType === 8 && h.parentNode === i)) break
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var f = u.tag
            if (
              (f === 3 || f === 4) &&
              ((f = u.stateNode.containerInfo),
              f === i || (f.nodeType === 8 && f.parentNode === i))
            )
              return
            u = u.return
          }
        for (; h !== null; ) {
          if (((u = Ls(h)), u === null)) return
          if (((f = u.tag), f === 5 || f === 6)) {
            r = o = u
            continue e
          }
          h = h.parentNode
        }
      }
      r = r.return
    }
  cw(function () {
    var g = o,
      v = um(n),
      E = []
    e: {
      var _ = Uw.get(t)
      if (_ !== void 0) {
        var L = pm,
          b = t
        switch (t) {
          case 'keypress':
            if (ch(n) === 0) break e
          case 'keydown':
          case 'keyup':
            L = YP
            break
          case 'focusin':
            ;(b = 'focus'), (L = rp)
            break
          case 'focusout':
            ;(b = 'blur'), (L = rp)
            break
          case 'beforeblur':
          case 'afterblur':
            L = rp
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
            L = E0
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            L = FP
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            L = ZP
            break
          case Vw:
          case Mw:
          case bw:
            L = BP
            break
          case Fw:
            L = tk
            break
          case 'scroll':
            L = MP
            break
          case 'wheel':
            L = rk
            break
          case 'copy':
          case 'cut':
          case 'paste':
            L = jP
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            L = S0
        }
        var B = (e & 4) !== 0,
          j = !B && t === 'scroll',
          P = B ? (_ !== null ? _ + 'Capture' : null) : _
        B = []
        for (var C = g, O; C !== null; ) {
          O = C
          var $ = O.stateNode
          if (
            (O.tag === 5 &&
              $ !== null &&
              ((O = $),
              P !== null && (($ = qu(C, P)), $ != null && B.push(Ju(C, $, O)))),
            j)
          )
            break
          C = C.return
        }
        0 < B.length &&
          ((_ = new L(_, b, null, n, v)), E.push({ event: _, listeners: B }))
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((_ = t === 'mouseover' || t === 'pointerover'),
          (L = t === 'mouseout' || t === 'pointerout'),
          _ &&
            n !== qp &&
            (b = n.relatedTarget || n.fromElement) &&
            (Ls(b) || b[si]))
        )
          break e
        if (
          (L || _) &&
          ((_ =
            v.window === v
              ? v
              : (_ = v.ownerDocument)
              ? _.defaultView || _.parentWindow
              : window),
          L
            ? ((b = n.relatedTarget || n.toElement),
              (L = g),
              (b = b ? Ls(b) : null),
              b !== null &&
                ((j = Qs(b)), b !== j || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((L = null), (b = g)),
          L !== b)
        ) {
          if (
            ((B = E0),
            ($ = 'onMouseLeave'),
            (P = 'onMouseEnter'),
            (C = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((B = S0),
              ($ = 'onPointerLeave'),
              (P = 'onPointerEnter'),
              (C = 'pointer')),
            (j = L == null ? _ : $o(L)),
            (O = b == null ? _ : $o(b)),
            (_ = new B($, C + 'leave', L, n, v)),
            (_.target = j),
            (_.relatedTarget = O),
            ($ = null),
            Ls(v) === g &&
              ((B = new B(P, C + 'enter', b, n, v)),
              (B.target = O),
              (B.relatedTarget = j),
              ($ = B)),
            (j = $),
            L && b)
          )
            t: {
              for (B = L, P = b, C = 0, O = B; O; O = ko(O)) C++
              for (O = 0, $ = P; $; $ = ko($)) O++
              for (; 0 < C - O; ) (B = ko(B)), C--
              for (; 0 < O - C; ) (P = ko(P)), O--
              for (; C--; ) {
                if (B === P || (P !== null && B === P.alternate)) break t
                ;(B = ko(B)), (P = ko(P))
              }
              B = null
            }
          else B = null
          L !== null && D0(E, _, L, B, !1),
            b !== null && j !== null && D0(E, j, b, B, !0)
        }
      }
      e: {
        if (
          ((_ = g ? $o(g) : window),
          (L = _.nodeName && _.nodeName.toLowerCase()),
          L === 'select' || (L === 'input' && _.type === 'file'))
        )
          var Q = ck
        else if (C0(_))
          if (kw) Q = pk
          else {
            Q = fk
            var X = hk
          }
        else
          (L = _.nodeName) &&
            L.toLowerCase() === 'input' &&
            (_.type === 'checkbox' || _.type === 'radio') &&
            (Q = dk)
        if (Q && (Q = Q(t, g))) {
          Pw(E, Q, n, v)
          break e
        }
        X && X(t, _, g),
          t === 'focusout' &&
            (X = _._wrapperState) &&
            X.controlled &&
            _.type === 'number' &&
            zp(_, 'number', _.value)
      }
      switch (((X = g ? $o(g) : window), t)) {
        case 'focusin':
          ;(C0(X) || X.contentEditable === 'true') &&
            ((zo = X), (Jp = g), (Ou = null))
          break
        case 'focusout':
          Ou = Jp = zo = null
          break
        case 'mousedown':
          Zp = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Zp = !1), N0(E, n, v)
          break
        case 'selectionchange':
          if (yk) break
        case 'keydown':
        case 'keyup':
          N0(E, n, v)
      }
      var A
      if (mm)
        e: {
          switch (t) {
            case 'compositionstart':
              var I = 'onCompositionStart'
              break e
            case 'compositionend':
              I = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              I = 'onCompositionUpdate'
              break e
          }
          I = void 0
        }
      else
        Uo
          ? Rw(t, n) && (I = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (I = 'onCompositionStart')
      I &&
        (Cw &&
          n.locale !== 'ko' &&
          (Uo || I !== 'onCompositionStart'
            ? I === 'onCompositionEnd' && Uo && (A = Aw())
            : ((Di = v),
              (dm = 'value' in Di ? Di.value : Di.textContent),
              (Uo = !0))),
        (X = Nh(g, I)),
        0 < X.length &&
          ((I = new T0(I, t, null, n, v)),
          E.push({ event: I, listeners: X }),
          A ? (I.data = A) : ((A = xw(n)), A !== null && (I.data = A)))),
        (A = sk ? ok(t, n) : ak(t, n)) &&
          ((g = Nh(g, 'onBeforeInput')),
          0 < g.length &&
            ((v = new T0('onBeforeInput', 'beforeinput', null, n, v)),
            E.push({ event: v, listeners: g }),
            (v.data = A)))
    }
    zw(E, e)
  })
}
function Ju(t, e, n) {
  return { instance: t, listener: e, currentTarget: n }
}
function Nh(t, e) {
  for (var n = e + 'Capture', r = []; t !== null; ) {
    var i = t,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = qu(t, n)),
      o != null && r.unshift(Ju(t, o, i)),
      (o = qu(t, e)),
      o != null && r.push(Ju(t, o, i))),
      (t = t.return)
  }
  return r
}
function ko(t) {
  if (t === null) return null
  do t = t.return
  while (t && t.tag !== 5)
  return t || null
}
function D0(t, e, n, r, i) {
  for (var o = e._reactName, u = []; n !== null && n !== r; ) {
    var h = n,
      f = h.alternate,
      g = h.stateNode
    if (f !== null && f === r) break
    h.tag === 5 &&
      g !== null &&
      ((h = g),
      i
        ? ((f = qu(n, o)), f != null && u.unshift(Ju(n, f, h)))
        : i || ((f = qu(n, o)), f != null && u.push(Ju(n, f, h)))),
      (n = n.return)
  }
  u.length !== 0 && t.push({ event: e, listeners: u })
}
var Ek = /\r\n?/g,
  Tk = /\u0000|\uFFFD/g
function V0(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      Ek,
      `
`
    )
    .replace(Tk, '')
}
function Gc(t, e, n) {
  if (((e = V0(e)), V0(t) !== e && n)) throw Error(ee(425))
}
function Lh() {}
var eg = null,
  tg = null
function ng(t, e) {
  return (
    t === 'textarea' ||
    t === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  )
}
var rg = typeof setTimeout == 'function' ? setTimeout : void 0,
  Sk = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  M0 = typeof Promise == 'function' ? Promise : void 0,
  Ik =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof M0 < 'u'
      ? function (t) {
          return M0.resolve(null).then(t).catch(Ak)
        }
      : rg
function Ak(t) {
  setTimeout(function () {
    throw t
  })
}
function hp(t, e) {
  var n = e,
    r = 0
  do {
    var i = n.nextSibling
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          t.removeChild(i), Gu(e)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Gu(e)
}
function Bi(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType
    if (e === 1 || e === 3) break
    if (e === 8) {
      if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break
      if (e === '/$') return null
    }
  }
  return t
}
function b0(t) {
  t = t.previousSibling
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (e === 0) return t
        e--
      } else n === '/$' && e++
    }
    t = t.previousSibling
  }
  return null
}
var Ea = Math.random().toString(36).slice(2),
  Cr = '__reactFiber$' + Ea,
  Zu = '__reactProps$' + Ea,
  si = '__reactContainer$' + Ea,
  ig = '__reactEvents$' + Ea,
  Ck = '__reactListeners$' + Ea,
  Rk = '__reactHandles$' + Ea
function Ls(t) {
  var e = t[Cr]
  if (e) return e
  for (var n = t.parentNode; n; ) {
    if ((e = n[si] || n[Cr])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = b0(t); t !== null; ) {
          if ((n = t[Cr])) return n
          t = b0(t)
        }
      return e
    }
    ;(t = n), (n = t.parentNode)
  }
  return null
}
function ml(t) {
  return (
    (t = t[Cr] || t[si]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  )
}
function $o(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode
  throw Error(ee(33))
}
function mf(t) {
  return t[Zu] || null
}
var sg = [],
  jo = -1
function ns(t) {
  return { current: t }
}
function Ye(t) {
  0 > jo || ((t.current = sg[jo]), (sg[jo] = null), jo--)
}
function Ge(t, e) {
  jo++, (sg[jo] = t.current), (t.current = e)
}
var Qi = {},
  Jt = ns(Qi),
  Tn = ns(!1),
  $s = Qi
function aa(t, e) {
  var n = t.type.contextTypes
  if (!n) return Qi
  var r = t.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = e[o]
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Sn(t) {
  return (t = t.childContextTypes), t != null
}
function Oh() {
  Ye(Tn), Ye(Jt)
}
function F0(t, e, n) {
  if (Jt.current !== Qi) throw Error(ee(168))
  Ge(Jt, e), Ge(Tn, n)
}
function $w(t, e, n) {
  var r = t.stateNode
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in e)) throw Error(ee(108, hP(t) || 'Unknown', i))
  return it({}, n, r)
}
function Dh(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Qi),
    ($s = Jt.current),
    Ge(Jt, t),
    Ge(Tn, Tn.current),
    !0
  )
}
function U0(t, e, n) {
  var r = t.stateNode
  if (!r) throw Error(ee(169))
  n
    ? ((t = $w(t, e, $s)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Ye(Tn),
      Ye(Jt),
      Ge(Jt, t))
    : Ye(Tn),
    Ge(Tn, n)
}
var ei = null,
  yf = !1,
  fp = !1
function jw(t) {
  ei === null ? (ei = [t]) : ei.push(t)
}
function xk(t) {
  ;(yf = !0), jw(t)
}
function rs() {
  if (!fp && ei !== null) {
    fp = !0
    var t = 0,
      e = We
    try {
      var n = ei
      for (We = 1; t < n.length; t++) {
        var r = n[t]
        do r = r(!0)
        while (r !== null)
      }
      ;(ei = null), (yf = !1)
    } catch (i) {
      throw (ei !== null && (ei = ei.slice(t + 1)), pw(lm, rs), i)
    } finally {
      ;(We = e), (fp = !1)
    }
  }
  return null
}
var Wo = [],
  qo = 0,
  Vh = null,
  Mh = 0,
  Gn = [],
  Qn = 0,
  js = null,
  ti = 1,
  ni = ''
function Ps(t, e) {
  ;(Wo[qo++] = Mh), (Wo[qo++] = Vh), (Vh = t), (Mh = e)
}
function Ww(t, e, n) {
  ;(Gn[Qn++] = ti), (Gn[Qn++] = ni), (Gn[Qn++] = js), (js = t)
  var r = ti
  t = ni
  var i = 32 - gr(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - gr(e) + i
  if (30 < o) {
    var u = i - (i % 5)
    ;(o = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (i -= u),
      (ti = (1 << (32 - gr(e) + i)) | (n << i) | r),
      (ni = o + t)
  } else (ti = (1 << o) | (n << i) | r), (ni = t)
}
function vm(t) {
  t.return !== null && (Ps(t, 1), Ww(t, 1, 0))
}
function _m(t) {
  for (; t === Vh; )
    (Vh = Wo[--qo]), (Wo[qo] = null), (Mh = Wo[--qo]), (Wo[qo] = null)
  for (; t === js; )
    (js = Gn[--Qn]),
      (Gn[Qn] = null),
      (ni = Gn[--Qn]),
      (Gn[Qn] = null),
      (ti = Gn[--Qn]),
      (Gn[Qn] = null)
}
var Ln = null,
  Nn = null,
  Je = !1,
  dr = null
function qw(t, e) {
  var n = Yn(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n)
}
function z0(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Ln = t), (Nn = Bi(e.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Ln = t), (Nn = null), !0) : !1
      )
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = js !== null ? { id: ti, overflow: ni } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Yn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Ln = t),
            (Nn = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function og(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function ag(t) {
  if (Je) {
    var e = Nn
    if (e) {
      var n = e
      if (!z0(t, e)) {
        if (og(t)) throw Error(ee(418))
        e = Bi(n.nextSibling)
        var r = Ln
        e && z0(t, e)
          ? qw(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (Je = !1), (Ln = t))
      }
    } else {
      if (og(t)) throw Error(ee(418))
      ;(t.flags = (t.flags & -4097) | 2), (Je = !1), (Ln = t)
    }
  }
}
function B0(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return
  Ln = t
}
function Qc(t) {
  if (t !== Ln) return !1
  if (!Je) return B0(t), (Je = !0), !1
  var e
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== 'head' && e !== 'body' && !ng(t.type, t.memoizedProps))),
    e && (e = Nn))
  ) {
    if (og(t)) throw (Hw(), Error(ee(418)))
    for (; e; ) qw(t, e), (e = Bi(e.nextSibling))
  }
  if ((B0(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(ee(317))
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data
          if (n === '/$') {
            if (e === 0) {
              Nn = Bi(t.nextSibling)
              break e
            }
            e--
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++
        }
        t = t.nextSibling
      }
      Nn = null
    }
  } else Nn = Ln ? Bi(t.stateNode.nextSibling) : null
  return !0
}
function Hw() {
  for (var t = Nn; t; ) t = Bi(t.nextSibling)
}
function ua() {
  ;(Nn = Ln = null), (Je = !1)
}
function wm(t) {
  dr === null ? (dr = [t]) : dr.push(t)
}
var Pk = ci.ReactCurrentBatchConfig
function hr(t, e) {
  if (t && t.defaultProps) {
    ;(e = it({}, e)), (t = t.defaultProps)
    for (var n in t) e[n] === void 0 && (e[n] = t[n])
    return e
  }
  return e
}
var bh = ns(null),
  Fh = null,
  Ho = null,
  Em = null
function Tm() {
  Em = Ho = Fh = null
}
function Sm(t) {
  var e = bh.current
  Ye(bh), (t._currentValue = e)
}
function ug(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break
    t = t.return
  }
}
function Zo(t, e) {
  ;(Fh = t),
    (Em = Ho = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (En = !0), (t.firstContext = null))
}
function Jn(t) {
  var e = t._currentValue
  if (Em !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Ho === null)) {
      if (Fh === null) throw Error(ee(308))
      ;(Ho = t), (Fh.dependencies = { lanes: 0, firstContext: t })
    } else Ho = Ho.next = t
  return e
}
var Os = null
function Im(t) {
  Os === null ? (Os = [t]) : Os.push(t)
}
function Kw(t, e, n, r) {
  var i = e.interleaved
  return (
    i === null ? ((n.next = n), Im(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    oi(t, r)
  )
}
function oi(t, e) {
  t.lanes |= e
  var n = t.alternate
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return)
  return n.tag === 3 ? n.stateNode : null
}
var Ni = !1
function Am(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Gw(t, e) {
  ;(t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      })
}
function ri(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function $i(t, e, n) {
  var r = t.updateQueue
  if (r === null) return null
  if (((r = r.shared), De & 2)) {
    var i = r.pending
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      oi(t, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Im(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    oi(t, n)
  )
}
function hh(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes
    ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), cm(t, n)
  }
}
function $0(t, e) {
  var n = t.updateQueue,
    r = t.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (i = o = u) : (o = o.next = u), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = e) : (o = o.next = e)
    } else i = o = e
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n)
    return
  }
  ;(t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e)
}
function Uh(t, e, n, r) {
  var i = t.updateQueue
  Ni = !1
  var o = i.firstBaseUpdate,
    u = i.lastBaseUpdate,
    h = i.shared.pending
  if (h !== null) {
    i.shared.pending = null
    var f = h,
      g = f.next
    ;(f.next = null), u === null ? (o = g) : (u.next = g), (u = f)
    var v = t.alternate
    v !== null &&
      ((v = v.updateQueue),
      (h = v.lastBaseUpdate),
      h !== u &&
        (h === null ? (v.firstBaseUpdate = g) : (h.next = g),
        (v.lastBaseUpdate = f)))
  }
  if (o !== null) {
    var E = i.baseState
    ;(u = 0), (v = g = f = null), (h = o)
    do {
      var _ = h.lane,
        L = h.eventTime
      if ((r & _) === _) {
        v !== null &&
          (v = v.next =
            {
              eventTime: L,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null,
            })
        e: {
          var b = t,
            B = h
          switch (((_ = e), (L = n), B.tag)) {
            case 1:
              if (((b = B.payload), typeof b == 'function')) {
                E = b.call(L, E, _)
                break e
              }
              E = b
              break e
            case 3:
              b.flags = (b.flags & -65537) | 128
            case 0:
              if (
                ((b = B.payload),
                (_ = typeof b == 'function' ? b.call(L, E, _) : b),
                _ == null)
              )
                break e
              E = it({}, E, _)
              break e
            case 2:
              Ni = !0
          }
        }
        h.callback !== null &&
          h.lane !== 0 &&
          ((t.flags |= 64),
          (_ = i.effects),
          _ === null ? (i.effects = [h]) : _.push(h))
      } else
        (L = {
          eventTime: L,
          lane: _,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null,
        }),
          v === null ? ((g = v = L), (f = E)) : (v = v.next = L),
          (u |= _)
      if (((h = h.next), h === null)) {
        if (((h = i.shared.pending), h === null)) break
        ;(_ = h),
          (h = _.next),
          (_.next = null),
          (i.lastBaseUpdate = _),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (v === null && (f = E),
      (i.baseState = f),
      (i.firstBaseUpdate = g),
      (i.lastBaseUpdate = v),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e
      do (u |= i.lane), (i = i.next)
      while (i !== e)
    } else o === null && (i.shared.lanes = 0)
    ;(qs |= u), (t.lanes = u), (t.memoizedState = E)
  }
}
function j0(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(ee(191, i))
        i.call(r)
      }
    }
}
var Qw = new K1.Component().refs
function lg(t, e, n, r) {
  ;(e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : it({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var vf = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Qs(t) === t : !1
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals
    var r = ln(),
      i = Wi(t),
      o = ri(r, i)
    ;(o.payload = e),
      n != null && (o.callback = n),
      (e = $i(t, o, i)),
      e !== null && (mr(e, t, i, r), hh(e, t, i))
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals
    var r = ln(),
      i = Wi(t),
      o = ri(r, i)
    ;(o.tag = 1),
      (o.payload = e),
      n != null && (o.callback = n),
      (e = $i(t, o, i)),
      e !== null && (mr(e, t, i, r), hh(e, t, i))
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals
    var n = ln(),
      r = Wi(t),
      i = ri(n, r)
    ;(i.tag = 2),
      e != null && (i.callback = e),
      (e = $i(t, i, r)),
      e !== null && (mr(e, t, r, n), hh(e, t, r))
  },
}
function W0(t, e, n, r, i, o, u) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(r, o, u)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Yu(n, r) || !Yu(i, o)
      : !0
  )
}
function Yw(t, e, n) {
  var r = !1,
    i = Qi,
    o = e.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = Jn(o))
      : ((i = Sn(e) ? $s : Jt.current),
        (r = e.contextTypes),
        (o = (r = r != null) ? aa(t, i) : Qi)),
    (e = new e(n, o)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = vf),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    e
  )
}
function q0(t, e, n, r) {
  ;(t = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && vf.enqueueReplaceState(e, e.state, null)
}
function cg(t, e, n, r) {
  var i = t.stateNode
  ;(i.props = n), (i.state = t.memoizedState), (i.refs = Qw), Am(t)
  var o = e.contextType
  typeof o == 'object' && o !== null
    ? (i.context = Jn(o))
    : ((o = Sn(e) ? $s : Jt.current), (i.context = aa(t, o))),
    (i.state = t.memoizedState),
    (o = e.getDerivedStateFromProps),
    typeof o == 'function' && (lg(t, e, o, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((e = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && vf.enqueueReplaceState(i, i.state, null),
      Uh(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == 'function' && (t.flags |= 4194308)
}
function yu(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(ee(309))
        var r = n.stateNode
      }
      if (!r) throw Error(ee(147, t))
      var i = r,
        o = '' + t
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == 'function' &&
        e.ref._stringRef === o
        ? e.ref
        : ((e = function (u) {
            var h = i.refs
            h === Qw && (h = i.refs = {}), u === null ? delete h[o] : (h[o] = u)
          }),
          (e._stringRef = o),
          e)
    }
    if (typeof t != 'string') throw Error(ee(284))
    if (!n._owner) throw Error(ee(290, t))
  }
  return t
}
function Yc(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      ee(
        31,
        t === '[object Object]'
          ? 'object with keys {' + Object.keys(e).join(', ') + '}'
          : t
      )
    ))
  )
}
function H0(t) {
  var e = t._init
  return e(t._payload)
}
function Xw(t) {
  function e(P, C) {
    if (t) {
      var O = P.deletions
      O === null ? ((P.deletions = [C]), (P.flags |= 16)) : O.push(C)
    }
  }
  function n(P, C) {
    if (!t) return null
    for (; C !== null; ) e(P, C), (C = C.sibling)
    return null
  }
  function r(P, C) {
    for (P = new Map(); C !== null; )
      C.key !== null ? P.set(C.key, C) : P.set(C.index, C), (C = C.sibling)
    return P
  }
  function i(P, C) {
    return (P = qi(P, C)), (P.index = 0), (P.sibling = null), P
  }
  function o(P, C, O) {
    return (
      (P.index = O),
      t
        ? ((O = P.alternate),
          O !== null
            ? ((O = O.index), O < C ? ((P.flags |= 2), C) : O)
            : ((P.flags |= 2), C))
        : ((P.flags |= 1048576), C)
    )
  }
  function u(P) {
    return t && P.alternate === null && (P.flags |= 2), P
  }
  function h(P, C, O, $) {
    return C === null || C.tag !== 6
      ? ((C = _p(O, P.mode, $)), (C.return = P), C)
      : ((C = i(C, O)), (C.return = P), C)
  }
  function f(P, C, O, $) {
    var Q = O.type
    return Q === Fo
      ? v(P, C, O.props.children, $, O.key)
      : C !== null &&
        (C.elementType === Q ||
          (typeof Q == 'object' &&
            Q !== null &&
            Q.$$typeof === ki &&
            H0(Q) === C.type))
      ? (($ = i(C, O.props)), ($.ref = yu(P, C, O)), ($.return = P), $)
      : (($ = yh(O.type, O.key, O.props, null, P.mode, $)),
        ($.ref = yu(P, C, O)),
        ($.return = P),
        $)
  }
  function g(P, C, O, $) {
    return C === null ||
      C.tag !== 4 ||
      C.stateNode.containerInfo !== O.containerInfo ||
      C.stateNode.implementation !== O.implementation
      ? ((C = wp(O, P.mode, $)), (C.return = P), C)
      : ((C = i(C, O.children || [])), (C.return = P), C)
  }
  function v(P, C, O, $, Q) {
    return C === null || C.tag !== 7
      ? ((C = Fs(O, P.mode, $, Q)), (C.return = P), C)
      : ((C = i(C, O)), (C.return = P), C)
  }
  function E(P, C, O) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (C = _p('' + C, P.mode, O)), (C.return = P), C
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case Uc:
          return (
            (O = yh(C.type, C.key, C.props, null, P.mode, O)),
            (O.ref = yu(P, null, C)),
            (O.return = P),
            O
          )
        case bo:
          return (C = wp(C, P.mode, O)), (C.return = P), C
        case ki:
          var $ = C._init
          return E(P, $(C._payload), O)
      }
      if (Tu(C) || fu(C)) return (C = Fs(C, P.mode, O, null)), (C.return = P), C
      Yc(P, C)
    }
    return null
  }
  function _(P, C, O, $) {
    var Q = C !== null ? C.key : null
    if ((typeof O == 'string' && O !== '') || typeof O == 'number')
      return Q !== null ? null : h(P, C, '' + O, $)
    if (typeof O == 'object' && O !== null) {
      switch (O.$$typeof) {
        case Uc:
          return O.key === Q ? f(P, C, O, $) : null
        case bo:
          return O.key === Q ? g(P, C, O, $) : null
        case ki:
          return (Q = O._init), _(P, C, Q(O._payload), $)
      }
      if (Tu(O) || fu(O)) return Q !== null ? null : v(P, C, O, $, null)
      Yc(P, O)
    }
    return null
  }
  function L(P, C, O, $, Q) {
    if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number')
      return (P = P.get(O) || null), h(C, P, '' + $, Q)
    if (typeof $ == 'object' && $ !== null) {
      switch ($.$$typeof) {
        case Uc:
          return (P = P.get($.key === null ? O : $.key) || null), f(C, P, $, Q)
        case bo:
          return (P = P.get($.key === null ? O : $.key) || null), g(C, P, $, Q)
        case ki:
          var X = $._init
          return L(P, C, O, X($._payload), Q)
      }
      if (Tu($) || fu($)) return (P = P.get(O) || null), v(C, P, $, Q, null)
      Yc(C, $)
    }
    return null
  }
  function b(P, C, O, $) {
    for (
      var Q = null, X = null, A = C, I = (C = 0), x = null;
      A !== null && I < O.length;
      I++
    ) {
      A.index > I ? ((x = A), (A = null)) : (x = A.sibling)
      var N = _(P, A, O[I], $)
      if (N === null) {
        A === null && (A = x)
        break
      }
      t && A && N.alternate === null && e(P, A),
        (C = o(N, C, I)),
        X === null ? (Q = N) : (X.sibling = N),
        (X = N),
        (A = x)
    }
    if (I === O.length) return n(P, A), Je && Ps(P, I), Q
    if (A === null) {
      for (; I < O.length; I++)
        (A = E(P, O[I], $)),
          A !== null &&
            ((C = o(A, C, I)), X === null ? (Q = A) : (X.sibling = A), (X = A))
      return Je && Ps(P, I), Q
    }
    for (A = r(P, A); I < O.length; I++)
      (x = L(A, P, I, O[I], $)),
        x !== null &&
          (t && x.alternate !== null && A.delete(x.key === null ? I : x.key),
          (C = o(x, C, I)),
          X === null ? (Q = x) : (X.sibling = x),
          (X = x))
    return (
      t &&
        A.forEach(function (V) {
          return e(P, V)
        }),
      Je && Ps(P, I),
      Q
    )
  }
  function B(P, C, O, $) {
    var Q = fu(O)
    if (typeof Q != 'function') throw Error(ee(150))
    if (((O = Q.call(O)), O == null)) throw Error(ee(151))
    for (
      var X = (Q = null), A = C, I = (C = 0), x = null, N = O.next();
      A !== null && !N.done;
      I++, N = O.next()
    ) {
      A.index > I ? ((x = A), (A = null)) : (x = A.sibling)
      var V = _(P, A, N.value, $)
      if (V === null) {
        A === null && (A = x)
        break
      }
      t && A && V.alternate === null && e(P, A),
        (C = o(V, C, I)),
        X === null ? (Q = V) : (X.sibling = V),
        (X = V),
        (A = x)
    }
    if (N.done) return n(P, A), Je && Ps(P, I), Q
    if (A === null) {
      for (; !N.done; I++, N = O.next())
        (N = E(P, N.value, $)),
          N !== null &&
            ((C = o(N, C, I)), X === null ? (Q = N) : (X.sibling = N), (X = N))
      return Je && Ps(P, I), Q
    }
    for (A = r(P, A); !N.done; I++, N = O.next())
      (N = L(A, P, I, N.value, $)),
        N !== null &&
          (t && N.alternate !== null && A.delete(N.key === null ? I : N.key),
          (C = o(N, C, I)),
          X === null ? (Q = N) : (X.sibling = N),
          (X = N))
    return (
      t &&
        A.forEach(function (z) {
          return e(P, z)
        }),
      Je && Ps(P, I),
      Q
    )
  }
  function j(P, C, O, $) {
    if (
      (typeof O == 'object' &&
        O !== null &&
        O.type === Fo &&
        O.key === null &&
        (O = O.props.children),
      typeof O == 'object' && O !== null)
    ) {
      switch (O.$$typeof) {
        case Uc:
          e: {
            for (var Q = O.key, X = C; X !== null; ) {
              if (X.key === Q) {
                if (((Q = O.type), Q === Fo)) {
                  if (X.tag === 7) {
                    n(P, X.sibling),
                      (C = i(X, O.props.children)),
                      (C.return = P),
                      (P = C)
                    break e
                  }
                } else if (
                  X.elementType === Q ||
                  (typeof Q == 'object' &&
                    Q !== null &&
                    Q.$$typeof === ki &&
                    H0(Q) === X.type)
                ) {
                  n(P, X.sibling),
                    (C = i(X, O.props)),
                    (C.ref = yu(P, X, O)),
                    (C.return = P),
                    (P = C)
                  break e
                }
                n(P, X)
                break
              } else e(P, X)
              X = X.sibling
            }
            O.type === Fo
              ? ((C = Fs(O.props.children, P.mode, $, O.key)),
                (C.return = P),
                (P = C))
              : (($ = yh(O.type, O.key, O.props, null, P.mode, $)),
                ($.ref = yu(P, C, O)),
                ($.return = P),
                (P = $))
          }
          return u(P)
        case bo:
          e: {
            for (X = O.key; C !== null; ) {
              if (C.key === X)
                if (
                  C.tag === 4 &&
                  C.stateNode.containerInfo === O.containerInfo &&
                  C.stateNode.implementation === O.implementation
                ) {
                  n(P, C.sibling),
                    (C = i(C, O.children || [])),
                    (C.return = P),
                    (P = C)
                  break e
                } else {
                  n(P, C)
                  break
                }
              else e(P, C)
              C = C.sibling
            }
            ;(C = wp(O, P.mode, $)), (C.return = P), (P = C)
          }
          return u(P)
        case ki:
          return (X = O._init), j(P, C, X(O._payload), $)
      }
      if (Tu(O)) return b(P, C, O, $)
      if (fu(O)) return B(P, C, O, $)
      Yc(P, O)
    }
    return (typeof O == 'string' && O !== '') || typeof O == 'number'
      ? ((O = '' + O),
        C !== null && C.tag === 6
          ? (n(P, C.sibling), (C = i(C, O)), (C.return = P), (P = C))
          : (n(P, C), (C = _p(O, P.mode, $)), (C.return = P), (P = C)),
        u(P))
      : n(P, C)
  }
  return j
}
var la = Xw(!0),
  Jw = Xw(!1),
  yl = {},
  kr = ns(yl),
  el = ns(yl),
  tl = ns(yl)
function Ds(t) {
  if (t === yl) throw Error(ee(174))
  return t
}
function Cm(t, e) {
  switch ((Ge(tl, e), Ge(el, t), Ge(kr, yl), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : $p(null, '')
      break
    default:
      ;(t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = $p(e, t))
  }
  Ye(kr), Ge(kr, e)
}
function ca() {
  Ye(kr), Ye(el), Ye(tl)
}
function Zw(t) {
  Ds(tl.current)
  var e = Ds(kr.current),
    n = $p(e, t.type)
  e !== n && (Ge(el, t), Ge(kr, n))
}
function Rm(t) {
  el.current === t && (Ye(kr), Ye(el))
}
var tt = ns(0)
function zh(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return e
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e
    } else if (e.child !== null) {
      ;(e.child.return = e), (e = e.child)
      continue
    }
    if (e === t) break
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null
      e = e.return
    }
    ;(e.sibling.return = e.return), (e = e.sibling)
  }
  return null
}
var dp = []
function xm() {
  for (var t = 0; t < dp.length; t++) dp[t]._workInProgressVersionPrimary = null
  dp.length = 0
}
var fh = ci.ReactCurrentDispatcher,
  pp = ci.ReactCurrentBatchConfig,
  Ws = 0,
  nt = null,
  St = null,
  kt = null,
  Bh = !1,
  Du = !1,
  nl = 0,
  kk = 0
function Ht() {
  throw Error(ee(321))
}
function Pm(t, e) {
  if (e === null) return !1
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!yr(t[n], e[n])) return !1
  return !0
}
function km(t, e, n, r, i, o) {
  if (
    ((Ws = o),
    (nt = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (fh.current = t === null || t.memoizedState === null ? Dk : Vk),
    (t = n(r, i)),
    Du)
  ) {
    o = 0
    do {
      if (((Du = !1), (nl = 0), 25 <= o)) throw Error(ee(301))
      ;(o += 1),
        (kt = St = null),
        (e.updateQueue = null),
        (fh.current = Mk),
        (t = n(r, i))
    } while (Du)
  }
  if (
    ((fh.current = $h),
    (e = St !== null && St.next !== null),
    (Ws = 0),
    (kt = St = nt = null),
    (Bh = !1),
    e)
  )
    throw Error(ee(300))
  return t
}
function Nm() {
  var t = nl !== 0
  return (nl = 0), t
}
function Ar() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return kt === null ? (nt.memoizedState = kt = t) : (kt = kt.next = t), kt
}
function Zn() {
  if (St === null) {
    var t = nt.alternate
    t = t !== null ? t.memoizedState : null
  } else t = St.next
  var e = kt === null ? nt.memoizedState : kt.next
  if (e !== null) (kt = e), (St = t)
  else {
    if (t === null) throw Error(ee(310))
    ;(St = t),
      (t = {
        memoizedState: St.memoizedState,
        baseState: St.baseState,
        baseQueue: St.baseQueue,
        queue: St.queue,
        next: null,
      }),
      kt === null ? (nt.memoizedState = kt = t) : (kt = kt.next = t)
  }
  return kt
}
function rl(t, e) {
  return typeof e == 'function' ? e(t) : e
}
function gp(t) {
  var e = Zn(),
    n = e.queue
  if (n === null) throw Error(ee(311))
  n.lastRenderedReducer = t
  var r = St,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var u = i.next
      ;(i.next = o.next), (o.next = u)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var h = (u = null),
      f = null,
      g = o
    do {
      var v = g.lane
      if ((Ws & v) === v)
        f !== null &&
          (f = f.next =
            {
              lane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
          (r = g.hasEagerState ? g.eagerState : t(r, g.action))
      else {
        var E = {
          lane: v,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        }
        f === null ? ((h = f = E), (u = r)) : (f = f.next = E),
          (nt.lanes |= v),
          (qs |= v)
      }
      g = g.next
    } while (g !== null && g !== o)
    f === null ? (u = r) : (f.next = h),
      yr(r, e.memoizedState) || (En = !0),
      (e.memoizedState = r),
      (e.baseState = u),
      (e.baseQueue = f),
      (n.lastRenderedState = r)
  }
  if (((t = n.interleaved), t !== null)) {
    i = t
    do (o = i.lane), (nt.lanes |= o), (qs |= o), (i = i.next)
    while (i !== t)
  } else i === null && (n.lanes = 0)
  return [e.memoizedState, n.dispatch]
}
function mp(t) {
  var e = Zn(),
    n = e.queue
  if (n === null) throw Error(ee(311))
  n.lastRenderedReducer = t
  var r = n.dispatch,
    i = n.pending,
    o = e.memoizedState
  if (i !== null) {
    n.pending = null
    var u = (i = i.next)
    do (o = t(o, u.action)), (u = u.next)
    while (u !== i)
    yr(o, e.memoizedState) || (En = !0),
      (e.memoizedState = o),
      e.baseQueue === null && (e.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function eE() {}
function tE(t, e) {
  var n = nt,
    r = Zn(),
    i = e(),
    o = !yr(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (En = !0)),
    (r = r.queue),
    Lm(iE.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || (kt !== null && kt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      il(9, rE.bind(null, n, r, i, e), void 0, null),
      Nt === null)
    )
      throw Error(ee(349))
    Ws & 30 || nE(n, e, i)
  }
  return i
}
function nE(t, e, n) {
  ;(t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = nt.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (nt.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t))
}
function rE(t, e, n, r) {
  ;(e.value = n), (e.getSnapshot = r), sE(e) && oE(t)
}
function iE(t, e, n) {
  return n(function () {
    sE(e) && oE(t)
  })
}
function sE(t) {
  var e = t.getSnapshot
  t = t.value
  try {
    var n = e()
    return !yr(t, n)
  } catch {
    return !0
  }
}
function oE(t) {
  var e = oi(t, 1)
  e !== null && mr(e, t, 1, -1)
}
function K0(t) {
  var e = Ar()
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rl,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Ok.bind(null, nt, t)),
    [e.memoizedState, t]
  )
}
function il(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = nt.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (nt.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  )
}
function aE() {
  return Zn().memoizedState
}
function dh(t, e, n, r) {
  var i = Ar()
  ;(nt.flags |= t),
    (i.memoizedState = il(1 | e, n, void 0, r === void 0 ? null : r))
}
function _f(t, e, n, r) {
  var i = Zn()
  r = r === void 0 ? null : r
  var o = void 0
  if (St !== null) {
    var u = St.memoizedState
    if (((o = u.destroy), r !== null && Pm(r, u.deps))) {
      i.memoizedState = il(e, n, o, r)
      return
    }
  }
  ;(nt.flags |= t), (i.memoizedState = il(1 | e, n, o, r))
}
function G0(t, e) {
  return dh(8390656, 8, t, e)
}
function Lm(t, e) {
  return _f(2048, 8, t, e)
}
function uE(t, e) {
  return _f(4, 2, t, e)
}
function lE(t, e) {
  return _f(4, 4, t, e)
}
function cE(t, e) {
  if (typeof e == 'function')
    return (
      (t = t()),
      e(t),
      function () {
        e(null)
      }
    )
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null
      }
    )
}
function hE(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), _f(4, 4, cE.bind(null, e, t), n)
  )
}
function Om() {}
function fE(t, e) {
  var n = Zn()
  e = e === void 0 ? null : e
  var r = n.memoizedState
  return r !== null && e !== null && Pm(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t)
}
function dE(t, e) {
  var n = Zn()
  e = e === void 0 ? null : e
  var r = n.memoizedState
  return r !== null && e !== null && Pm(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t)
}
function pE(t, e, n) {
  return Ws & 21
    ? (yr(n, e) || ((n = yw()), (nt.lanes |= n), (qs |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (En = !0)), (t.memoizedState = n))
}
function Nk(t, e) {
  var n = We
  ;(We = n !== 0 && 4 > n ? n : 4), t(!0)
  var r = pp.transition
  pp.transition = {}
  try {
    t(!1), e()
  } finally {
    ;(We = n), (pp.transition = r)
  }
}
function gE() {
  return Zn().memoizedState
}
function Lk(t, e, n) {
  var r = Wi(t)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mE(t))
  )
    yE(e, n)
  else if (((n = Kw(t, e, n, r)), n !== null)) {
    var i = ln()
    mr(n, t, r, i), vE(n, e, r)
  }
}
function Ok(t, e, n) {
  var r = Wi(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (mE(t)) yE(e, i)
  else {
    var o = t.alternate
    if (
      t.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = e.lastRenderedReducer), o !== null)
    )
      try {
        var u = e.lastRenderedState,
          h = o(u, n)
        if (((i.hasEagerState = !0), (i.eagerState = h), yr(h, u))) {
          var f = e.interleaved
          f === null
            ? ((i.next = i), Im(e))
            : ((i.next = f.next), (f.next = i)),
            (e.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Kw(t, e, i, r)),
      n !== null && ((i = ln()), mr(n, t, r, i), vE(n, e, r))
  }
}
function mE(t) {
  var e = t.alternate
  return t === nt || (e !== null && e === nt)
}
function yE(t, e) {
  Du = Bh = !0
  var n = t.pending
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e)
}
function vE(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes
    ;(r &= t.pendingLanes), (n |= r), (e.lanes = n), cm(t, n)
  }
}
var $h = {
    readContext: Jn,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useInsertionEffect: Ht,
    useLayoutEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useMutableSource: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    unstable_isNewReconciler: !1,
  },
  Dk = {
    readContext: Jn,
    useCallback: function (t, e) {
      return (Ar().memoizedState = [t, e === void 0 ? null : e]), t
    },
    useContext: Jn,
    useEffect: G0,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        dh(4194308, 4, cE.bind(null, e, t), n)
      )
    },
    useLayoutEffect: function (t, e) {
      return dh(4194308, 4, t, e)
    },
    useInsertionEffect: function (t, e) {
      return dh(4, 2, t, e)
    },
    useMemo: function (t, e) {
      var n = Ar()
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      )
    },
    useReducer: function (t, e, n) {
      var r = Ar()
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = Lk.bind(null, nt, t)),
        [r.memoizedState, t]
      )
    },
    useRef: function (t) {
      var e = Ar()
      return (t = { current: t }), (e.memoizedState = t)
    },
    useState: K0,
    useDebugValue: Om,
    useDeferredValue: function (t) {
      return (Ar().memoizedState = t)
    },
    useTransition: function () {
      var t = K0(!1),
        e = t[0]
      return (t = Nk.bind(null, t[1])), (Ar().memoizedState = t), [e, t]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = nt,
        i = Ar()
      if (Je) {
        if (n === void 0) throw Error(ee(407))
        n = n()
      } else {
        if (((n = e()), Nt === null)) throw Error(ee(349))
        Ws & 30 || nE(r, e, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: e }
      return (
        (i.queue = o),
        G0(iE.bind(null, r, o, t), [t]),
        (r.flags |= 2048),
        il(9, rE.bind(null, r, o, n, e), void 0, null),
        n
      )
    },
    useId: function () {
      var t = Ar(),
        e = Nt.identifierPrefix
      if (Je) {
        var n = ni,
          r = ti
        ;(n = (r & ~(1 << (32 - gr(r) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = nl++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':')
      } else (n = kk++), (e = ':' + e + 'r' + n.toString(32) + ':')
      return (t.memoizedState = e)
    },
    unstable_isNewReconciler: !1,
  },
  Vk = {
    readContext: Jn,
    useCallback: fE,
    useContext: Jn,
    useEffect: Lm,
    useImperativeHandle: hE,
    useInsertionEffect: uE,
    useLayoutEffect: lE,
    useMemo: dE,
    useReducer: gp,
    useRef: aE,
    useState: function () {
      return gp(rl)
    },
    useDebugValue: Om,
    useDeferredValue: function (t) {
      var e = Zn()
      return pE(e, St.memoizedState, t)
    },
    useTransition: function () {
      var t = gp(rl)[0],
        e = Zn().memoizedState
      return [t, e]
    },
    useMutableSource: eE,
    useSyncExternalStore: tE,
    useId: gE,
    unstable_isNewReconciler: !1,
  },
  Mk = {
    readContext: Jn,
    useCallback: fE,
    useContext: Jn,
    useEffect: Lm,
    useImperativeHandle: hE,
    useInsertionEffect: uE,
    useLayoutEffect: lE,
    useMemo: dE,
    useReducer: mp,
    useRef: aE,
    useState: function () {
      return mp(rl)
    },
    useDebugValue: Om,
    useDeferredValue: function (t) {
      var e = Zn()
      return St === null ? (e.memoizedState = t) : pE(e, St.memoizedState, t)
    },
    useTransition: function () {
      var t = mp(rl)[0],
        e = Zn().memoizedState
      return [t, e]
    },
    useMutableSource: eE,
    useSyncExternalStore: tE,
    useId: gE,
    unstable_isNewReconciler: !1,
  }
function ha(t, e) {
  try {
    var n = '',
      r = e
    do (n += cP(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: t, source: e, stack: i, digest: null }
}
function yp(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null }
}
function hg(t, e) {
  try {
    console.error(e.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var bk = typeof WeakMap == 'function' ? WeakMap : Map
function _E(t, e, n) {
  ;(n = ri(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = e.value
  return (
    (n.callback = function () {
      Wh || ((Wh = !0), (Eg = r)), hg(t, e)
    }),
    n
  )
}
function wE(t, e, n) {
  ;(n = ri(-1, n)), (n.tag = 3)
  var r = t.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = e.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        hg(t, e)
      })
  }
  var o = t.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        hg(t, e),
          typeof r != 'function' &&
            (ji === null ? (ji = new Set([this])) : ji.add(this))
        var u = e.stack
        this.componentDidCatch(e.value, { componentStack: u !== null ? u : '' })
      }),
    n
  )
}
function Q0(t, e, n) {
  var r = t.pingCache
  if (r === null) {
    r = t.pingCache = new bk()
    var i = new Set()
    r.set(e, i)
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i))
  i.has(n) || (i.add(n), (t = Xk.bind(null, t, e, n)), e.then(t, t))
}
function Y0(t) {
  do {
    var e
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t
    t = t.return
  } while (t !== null)
  return null
}
function X0(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = ri(-1, 1)), (e.tag = 2), $i(n, e, 1))),
          (n.lanes |= 1)),
      t)
}
var Fk = ci.ReactCurrentOwner,
  En = !1
function an(t, e, n, r) {
  e.child = t === null ? Jw(e, null, n, r) : la(e, t.child, n, r)
}
function J0(t, e, n, r, i) {
  n = n.render
  var o = e.ref
  return (
    Zo(e, i),
    (r = km(t, e, n, r, o, i)),
    (n = Nm()),
    t !== null && !En
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        ai(t, e, i))
      : (Je && n && vm(e), (e.flags |= 1), an(t, e, r, i), e.child)
  )
}
function Z0(t, e, n, r, i) {
  if (t === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Bm(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = o), EE(t, e, o, r, i))
      : ((t = yh(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t))
  }
  if (((o = t.child), !(t.lanes & i))) {
    var u = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Yu), n(u, r) && t.ref === e.ref)
    )
      return ai(t, e, i)
  }
  return (
    (e.flags |= 1),
    (t = qi(o, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  )
}
function EE(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps
    if (Yu(o, r) && t.ref === e.ref)
      if (((En = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
        t.flags & 131072 && (En = !0)
      else return (e.lanes = t.lanes), ai(t, e, i)
  }
  return fg(t, e, n, r, i)
}
function TE(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    o = t !== null ? t.memoizedState : null
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ge(Go, kn),
        (kn |= n)
    else {
      if (!(n & 1073741824))
        return (
          (t = o !== null ? o.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          Ge(Go, kn),
          (kn |= t),
          null
        )
      ;(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Ge(Go, kn),
        (kn |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
      Ge(Go, kn),
      (kn |= r)
  return an(t, e, i, n), e.child
}
function SE(t, e) {
  var n = e.ref
  ;((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152))
}
function fg(t, e, n, r, i) {
  var o = Sn(n) ? $s : Jt.current
  return (
    (o = aa(e, o)),
    Zo(e, i),
    (n = km(t, e, n, r, o, i)),
    (r = Nm()),
    t !== null && !En
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        ai(t, e, i))
      : (Je && r && vm(e), (e.flags |= 1), an(t, e, n, i), e.child)
  )
}
function e_(t, e, n, r, i) {
  if (Sn(n)) {
    var o = !0
    Dh(e)
  } else o = !1
  if ((Zo(e, i), e.stateNode === null))
    ph(t, e), Yw(e, n, r), cg(e, n, r, i), (r = !0)
  else if (t === null) {
    var u = e.stateNode,
      h = e.memoizedProps
    u.props = h
    var f = u.context,
      g = n.contextType
    typeof g == 'object' && g !== null
      ? (g = Jn(g))
      : ((g = Sn(n) ? $s : Jt.current), (g = aa(e, g)))
    var v = n.getDerivedStateFromProps,
      E =
        typeof v == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'
    E ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((h !== r || f !== g) && q0(e, u, r, g)),
      (Ni = !1)
    var _ = e.memoizedState
    ;(u.state = _),
      Uh(e, r, u, i),
      (f = e.memoizedState),
      h !== r || _ !== f || Tn.current || Ni
        ? (typeof v == 'function' && (lg(e, n, v, r), (f = e.memoizedState)),
          (h = Ni || W0(e, n, h, r, _, f, g))
            ? (E ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = f)),
          (u.props = r),
          (u.state = f),
          (u.context = g),
          (r = h))
        : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
          (r = !1))
  } else {
    ;(u = e.stateNode),
      Gw(t, e),
      (h = e.memoizedProps),
      (g = e.type === e.elementType ? h : hr(e.type, h)),
      (u.props = g),
      (E = e.pendingProps),
      (_ = u.context),
      (f = n.contextType),
      typeof f == 'object' && f !== null
        ? (f = Jn(f))
        : ((f = Sn(n) ? $s : Jt.current), (f = aa(e, f)))
    var L = n.getDerivedStateFromProps
    ;(v =
      typeof L == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function') ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((h !== E || _ !== f) && q0(e, u, r, f)),
      (Ni = !1),
      (_ = e.memoizedState),
      (u.state = _),
      Uh(e, r, u, i)
    var b = e.memoizedState
    h !== E || _ !== b || Tn.current || Ni
      ? (typeof L == 'function' && (lg(e, n, L, r), (b = e.memoizedState)),
        (g = Ni || W0(e, n, g, r, _, b, f) || !1)
          ? (v ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(r, b, f),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(r, b, f)),
            typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (h === t.memoizedProps && _ === t.memoizedState) ||
              (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (h === t.memoizedProps && _ === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = b)),
        (u.props = r),
        (u.state = b),
        (u.context = f),
        (r = g))
      : (typeof u.componentDidUpdate != 'function' ||
          (h === t.memoizedProps && _ === t.memoizedState) ||
          (e.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (h === t.memoizedProps && _ === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1))
  }
  return dg(t, e, n, r, o, i)
}
function dg(t, e, n, r, i, o) {
  SE(t, e)
  var u = (e.flags & 128) !== 0
  if (!r && !u) return i && U0(e, n, !1), ai(t, e, o)
  ;(r = e.stateNode), (Fk.current = e)
  var h =
    u && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (e.flags |= 1),
    t !== null && u
      ? ((e.child = la(e, t.child, null, o)), (e.child = la(e, null, h, o)))
      : an(t, e, h, o),
    (e.memoizedState = r.state),
    i && U0(e, n, !0),
    e.child
  )
}
function IE(t) {
  var e = t.stateNode
  e.pendingContext
    ? F0(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && F0(t, e.context, !1),
    Cm(t, e.containerInfo)
}
function t_(t, e, n, r, i) {
  return ua(), wm(i), (e.flags |= 256), an(t, e, n, r), e.child
}
var pg = { dehydrated: null, treeContext: null, retryLane: 0 }
function gg(t) {
  return { baseLanes: t, cachePool: null, transitions: null }
}
function AE(t, e, n) {
  var r = e.pendingProps,
    i = tt.current,
    o = !1,
    u = (e.flags & 128) !== 0,
    h
  if (
    ((h = u) ||
      (h = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    h
      ? ((o = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    Ge(tt, i & 1),
    t === null)
  )
    return (
      ag(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === '$!'
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((u = r.children),
          (t = r.fallback),
          o
            ? ((r = e.mode),
              (o = e.child),
              (u = { mode: 'hidden', children: u }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = u))
                : (o = Tf(u, r, 0, null)),
              (t = Fs(t, r, n, null)),
              (o.return = e),
              (t.return = e),
              (o.sibling = t),
              (e.child = o),
              (e.child.memoizedState = gg(n)),
              (e.memoizedState = pg),
              t)
            : Dm(e, u))
    )
  if (((i = t.memoizedState), i !== null && ((h = i.dehydrated), h !== null)))
    return Uk(t, e, u, r, h, i, n)
  if (o) {
    ;(o = r.fallback), (u = e.mode), (i = t.child), (h = i.sibling)
    var f = { mode: 'hidden', children: r.children }
    return (
      !(u & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = f),
          (e.deletions = null))
        : ((r = qi(i, f)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      h !== null ? (o = qi(h, o)) : ((o = Fs(o, u, n, null)), (o.flags |= 2)),
      (o.return = e),
      (r.return = e),
      (r.sibling = o),
      (e.child = r),
      (r = o),
      (o = e.child),
      (u = t.child.memoizedState),
      (u =
        u === null
          ? gg(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (o.memoizedState = u),
      (o.childLanes = t.childLanes & ~n),
      (e.memoizedState = pg),
      r
    )
  }
  return (
    (o = t.child),
    (t = o.sibling),
    (r = qi(o, { mode: 'visible', children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  )
}
function Dm(t, e) {
  return (
    (e = Tf({ mode: 'visible', children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  )
}
function Xc(t, e, n, r) {
  return (
    r !== null && wm(r),
    la(e, t.child, null, n),
    (t = Dm(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  )
}
function Uk(t, e, n, r, i, o, u) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = yp(Error(ee(422)))), Xc(t, e, u, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((o = r.fallback),
        (i = e.mode),
        (r = Tf({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Fs(o, i, u, null)),
        (o.flags |= 2),
        (r.return = e),
        (o.return = e),
        (r.sibling = o),
        (e.child = r),
        e.mode & 1 && la(e, t.child, null, u),
        (e.child.memoizedState = gg(u)),
        (e.memoizedState = pg),
        o)
  if (!(e.mode & 1)) return Xc(t, e, u, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var h = r.dgst
    return (r = h), (o = Error(ee(419))), (r = yp(o, r, void 0)), Xc(t, e, u, r)
  }
  if (((h = (u & t.childLanes) !== 0), En || h)) {
    if (((r = Nt), r !== null)) {
      switch (u & -u) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
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
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | u) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), oi(t, i), mr(r, t, i, -1))
    }
    return zm(), (r = yp(Error(ee(421)))), Xc(t, e, u, r)
  }
  return i.data === '$?'
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = Jk.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = o.treeContext),
      (Nn = Bi(i.nextSibling)),
      (Ln = e),
      (Je = !0),
      (dr = null),
      t !== null &&
        ((Gn[Qn++] = ti),
        (Gn[Qn++] = ni),
        (Gn[Qn++] = js),
        (ti = t.id),
        (ni = t.overflow),
        (js = e)),
      (e = Dm(e, r.children)),
      (e.flags |= 4096),
      e)
}
function n_(t, e, n) {
  t.lanes |= e
  var r = t.alternate
  r !== null && (r.lanes |= e), ug(t.return, e, n)
}
function vp(t, e, n, r, i) {
  var o = t.memoizedState
  o === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function CE(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((an(t, e, r.children, n), (r = tt.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128)
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && n_(t, n, e)
        else if (t.tag === 19) n_(t, n, e)
        else if (t.child !== null) {
          ;(t.child.return = t), (t = t.child)
          continue
        }
        if (t === e) break e
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    r &= 1
  }
  if ((Ge(tt, r), !(e.mode & 1))) e.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && zh(t) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          vp(e, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && zh(t) === null)) {
            e.child = i
            break
          }
          ;(t = i.sibling), (i.sibling = n), (n = i), (i = t)
        }
        vp(e, !0, n, null, o)
        break
      case 'together':
        vp(e, !1, null, null, void 0)
        break
      default:
        e.memoizedState = null
    }
  return e.child
}
function ph(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2))
}
function ai(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (qs |= e.lanes),
    !(n & e.childLanes))
  )
    return null
  if (t !== null && e.child !== t.child) throw Error(ee(153))
  if (e.child !== null) {
    for (
      t = e.child, n = qi(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = qi(t, t.pendingProps)), (n.return = e)
    n.sibling = null
  }
  return e.child
}
function zk(t, e, n) {
  switch (e.tag) {
    case 3:
      IE(e), ua()
      break
    case 5:
      Zw(e)
      break
    case 1:
      Sn(e.type) && Dh(e)
      break
    case 4:
      Cm(e, e.stateNode.containerInfo)
      break
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value
      Ge(bh, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ge(tt, tt.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? AE(t, e, n)
          : (Ge(tt, tt.current & 1),
            (t = ai(t, e, n)),
            t !== null ? t.sibling : null)
      Ge(tt, tt.current & 1)
      break
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return CE(t, e, n)
        e.flags |= 128
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ge(tt, tt.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (e.lanes = 0), TE(t, e, n)
  }
  return ai(t, e, n)
}
var RE, mg, xE, PE
RE = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === e) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
mg = function () {}
xE = function (t, e, n, r) {
  var i = t.memoizedProps
  if (i !== r) {
    ;(t = e.stateNode), Ds(kr.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Fp(t, i)), (r = Fp(t, r)), (o = [])
        break
      case 'select':
        ;(i = it({}, i, { value: void 0 })),
          (r = it({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = Bp(t, i)), (r = Bp(t, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (t.onclick = Lh)
    }
    jp(n, r)
    var u
    n = null
    for (g in i)
      if (!r.hasOwnProperty(g) && i.hasOwnProperty(g) && i[g] != null)
        if (g === 'style') {
          var h = i[g]
          for (u in h) h.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''))
        } else
          g !== 'dangerouslySetInnerHTML' &&
            g !== 'children' &&
            g !== 'suppressContentEditableWarning' &&
            g !== 'suppressHydrationWarning' &&
            g !== 'autoFocus' &&
            (ju.hasOwnProperty(g) ? o || (o = []) : (o = o || []).push(g, null))
    for (g in r) {
      var f = r[g]
      if (
        ((h = i?.[g]),
        r.hasOwnProperty(g) && f !== h && (f != null || h != null))
      )
        if (g === 'style')
          if (h) {
            for (u in h)
              !h.hasOwnProperty(u) ||
                (f && f.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ''))
            for (u in f)
              f.hasOwnProperty(u) &&
                h[u] !== f[u] &&
                (n || (n = {}), (n[u] = f[u]))
          } else n || (o || (o = []), o.push(g, n)), (n = f)
        else
          g === 'dangerouslySetInnerHTML'
            ? ((f = f ? f.__html : void 0),
              (h = h ? h.__html : void 0),
              f != null && h !== f && (o = o || []).push(g, f))
            : g === 'children'
            ? (typeof f != 'string' && typeof f != 'number') ||
              (o = o || []).push(g, '' + f)
            : g !== 'suppressContentEditableWarning' &&
              g !== 'suppressHydrationWarning' &&
              (ju.hasOwnProperty(g)
                ? (f != null && g === 'onScroll' && Qe('scroll', t),
                  o || h === f || (o = []))
                : (o = o || []).push(g, f))
    }
    n && (o = o || []).push('style', n)
    var g = o
    ;(e.updateQueue = g) && (e.flags |= 4)
  }
}
PE = function (t, e, n, r) {
  n !== r && (e.flags |= 4)
}
function vu(t, e) {
  if (!Je)
    switch (t.tailMode) {
      case 'hidden':
        e = t.tail
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling)
        n === null ? (t.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = t.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Kt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling)
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling)
  return (t.subtreeFlags |= r), (t.childLanes = n), e
}
function Bk(t, e, n) {
  var r = e.pendingProps
  switch ((_m(e), e.tag)) {
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
      return Kt(e), null
    case 1:
      return Sn(e.type) && Oh(), Kt(e), null
    case 3:
      return (
        (r = e.stateNode),
        ca(),
        Ye(Tn),
        Ye(Jt),
        xm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Qc(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), dr !== null && (Ig(dr), (dr = null)))),
        mg(t, e),
        Kt(e),
        null
      )
    case 5:
      Rm(e)
      var i = Ds(tl.current)
      if (((n = e.type), t !== null && e.stateNode != null))
        xE(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(ee(166))
          return Kt(e), null
        }
        if (((t = Ds(kr.current)), Qc(e))) {
          ;(r = e.stateNode), (n = e.type)
          var o = e.memoizedProps
          switch (((r[Cr] = e), (r[Zu] = o), (t = (e.mode & 1) !== 0), n)) {
            case 'dialog':
              Qe('cancel', r), Qe('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Qe('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < Iu.length; i++) Qe(Iu[i], r)
              break
            case 'source':
              Qe('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              Qe('error', r), Qe('load', r)
              break
            case 'details':
              Qe('toggle', r)
              break
            case 'input':
              h0(r, o), Qe('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                Qe('invalid', r)
              break
            case 'textarea':
              d0(r, o), Qe('invalid', r)
          }
          jp(n, o), (i = null)
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var h = o[u]
              u === 'children'
                ? typeof h == 'string'
                  ? r.textContent !== h &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gc(r.textContent, h, t),
                    (i = ['children', h]))
                  : typeof h == 'number' &&
                    r.textContent !== '' + h &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gc(r.textContent, h, t),
                    (i = ['children', '' + h]))
                : ju.hasOwnProperty(u) &&
                  h != null &&
                  u === 'onScroll' &&
                  Qe('scroll', r)
            }
          switch (n) {
            case 'input':
              zc(r), f0(r, o, !0)
              break
            case 'textarea':
              zc(r), p0(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = Lh)
          }
          ;(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4)
        } else {
          ;(u = i.nodeType === 9 ? i : i.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = nw(n)),
            t === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((t = u.createElement('div')),
                  (t.innerHTML = '<script></script>'),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == 'string'
                ? (t = u.createElement(n, { is: r.is }))
                : ((t = u.createElement(n)),
                  n === 'select' &&
                    ((u = t),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (t = u.createElementNS(t, n)),
            (t[Cr] = e),
            (t[Zu] = r),
            RE(t, e, !1, !1),
            (e.stateNode = t)
          e: {
            switch (((u = Wp(n, r)), n)) {
              case 'dialog':
                Qe('cancel', t), Qe('close', t), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Qe('load', t), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < Iu.length; i++) Qe(Iu[i], t)
                i = r
                break
              case 'source':
                Qe('error', t), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                Qe('error', t), Qe('load', t), (i = r)
                break
              case 'details':
                Qe('toggle', t), (i = r)
                break
              case 'input':
                h0(t, r), (i = Fp(t, r)), Qe('invalid', t)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = it({}, r, { value: void 0 })),
                  Qe('invalid', t)
                break
              case 'textarea':
                d0(t, r), (i = Bp(t, r)), Qe('invalid', t)
                break
              default:
                i = r
            }
            jp(n, i), (h = i)
            for (o in h)
              if (h.hasOwnProperty(o)) {
                var f = h[o]
                o === 'style'
                  ? sw(t, f)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((f = f ? f.__html : void 0), f != null && rw(t, f))
                  : o === 'children'
                  ? typeof f == 'string'
                    ? (n !== 'textarea' || f !== '') && Wu(t, f)
                    : typeof f == 'number' && Wu(t, '' + f)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (ju.hasOwnProperty(o)
                      ? f != null && o === 'onScroll' && Qe('scroll', t)
                      : f != null && im(t, o, f, u))
              }
            switch (n) {
              case 'input':
                zc(t), f0(t, r, !1)
                break
              case 'textarea':
                zc(t), p0(t)
                break
              case 'option':
                r.value != null && t.setAttribute('value', '' + Gi(r.value))
                break
              case 'select':
                ;(t.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qo(t, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qo(t, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (t.onclick = Lh)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (e.flags |= 4)
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152))
      }
      return Kt(e), null
    case 6:
      if (t && e.stateNode != null) PE(t, e, t.memoizedProps, r)
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(ee(166))
        if (((n = Ds(tl.current)), Ds(kr.current), Qc(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Cr] = e),
            (o = r.nodeValue !== n) && ((t = Ln), t !== null))
          )
            switch (t.tag) {
              case 3:
                Gc(r.nodeValue, n, (t.mode & 1) !== 0)
                break
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gc(r.nodeValue, n, (t.mode & 1) !== 0)
            }
          o && (e.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Cr] = e),
            (e.stateNode = r)
      }
      return Kt(e), null
    case 13:
      if (
        (Ye(tt),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (Je && Nn !== null && e.mode & 1 && !(e.flags & 128))
          Hw(), ua(), (e.flags |= 98560), (o = !1)
        else if (((o = Qc(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!o) throw Error(ee(318))
            if (
              ((o = e.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(ee(317))
            o[Cr] = e
          } else
            ua(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4)
          Kt(e), (o = !1)
        } else dr !== null && (Ig(dr), (dr = null)), (o = !0)
        if (!o) return e.flags & 65536 ? e : null
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || tt.current & 1 ? At === 0 && (At = 3) : zm())),
          e.updateQueue !== null && (e.flags |= 4),
          Kt(e),
          null)
    case 4:
      return (
        ca(), mg(t, e), t === null && Xu(e.stateNode.containerInfo), Kt(e), null
      )
    case 10:
      return Sm(e.type._context), Kt(e), null
    case 17:
      return Sn(e.type) && Oh(), Kt(e), null
    case 19:
      if ((Ye(tt), (o = e.memoizedState), o === null)) return Kt(e), null
      if (((r = (e.flags & 128) !== 0), (u = o.rendering), u === null))
        if (r) vu(o, !1)
        else {
          if (At !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((u = zh(t)), u !== null)) {
                for (
                  e.flags |= 128,
                    vu(o, !1),
                    r = u.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (o = n),
                    (t = r),
                    (o.flags &= 14680066),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = t),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (t = u.dependencies),
                        (o.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling)
                return Ge(tt, (tt.current & 1) | 2), e.child
              }
              t = t.sibling
            }
          o.tail !== null &&
            pt() > fa &&
            ((e.flags |= 128), (r = !0), vu(o, !1), (e.lanes = 4194304))
        }
      else {
        if (!r)
          if (((t = zh(u)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              vu(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !u.alternate && !Je)
            )
              return Kt(e), null
          } else
            2 * pt() - o.renderingStartTime > fa &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), vu(o, !1), (e.lanes = 4194304))
        o.isBackwards
          ? ((u.sibling = e.child), (e.child = u))
          : ((n = o.last),
            n !== null ? (n.sibling = u) : (e.child = u),
            (o.last = u))
      }
      return o.tail !== null
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = pt()),
          (e.sibling = null),
          (n = tt.current),
          Ge(tt, r ? (n & 1) | 2 : n & 1),
          e)
        : (Kt(e), null)
    case 22:
    case 23:
      return (
        Um(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? kn & 1073741824 && (Kt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Kt(e),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(ee(156, e.tag))
}
function $k(t, e) {
  switch ((_m(e), e.tag)) {
    case 1:
      return (
        Sn(e.type) && Oh(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 3:
      return (
        ca(),
        Ye(Tn),
        Ye(Jt),
        xm(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 5:
      return Rm(e), null
    case 13:
      if (
        (Ye(tt), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(ee(340))
        ua()
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      )
    case 19:
      return Ye(tt), null
    case 4:
      return ca(), null
    case 10:
      return Sm(e.type._context), null
    case 22:
    case 23:
      return Um(), null
    case 24:
      return null
    default:
      return null
  }
}
var Jc = !1,
  Yt = !1,
  jk = typeof WeakSet == 'function' ? WeakSet : Set,
  oe = null
function Ko(t, e) {
  var n = t.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        at(t, e, r)
      }
    else n.current = null
}
function yg(t, e, n) {
  try {
    n()
  } catch (r) {
    at(t, e, r)
  }
}
var r_ = !1
function Wk(t, e) {
  if (((eg = Ph), (t = Ow()), ym(t))) {
    if ('selectionStart' in t)
      var n = { start: t.selectionStart, end: t.selectionEnd }
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var u = 0,
            h = -1,
            f = -1,
            g = 0,
            v = 0,
            E = t,
            _ = null
          t: for (;;) {
            for (
              var L;
              E !== n || (i !== 0 && E.nodeType !== 3) || (h = u + i),
                E !== o || (r !== 0 && E.nodeType !== 3) || (f = u + r),
                E.nodeType === 3 && (u += E.nodeValue.length),
                (L = E.firstChild) !== null;

            )
              (_ = E), (E = L)
            for (;;) {
              if (E === t) break t
              if (
                (_ === n && ++g === i && (h = u),
                _ === o && ++v === r && (f = u),
                (L = E.nextSibling) !== null)
              )
                break
              ;(E = _), (_ = E.parentNode)
            }
            E = L
          }
          n = h === -1 || f === -1 ? null : { start: h, end: f }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (
    tg = { focusedElem: t, selectionRange: n }, Ph = !1, oe = e;
    oe !== null;

  )
    if (((e = oe), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (oe = t)
    else
      for (; oe !== null; ) {
        e = oe
        try {
          var b = e.alternate
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (b !== null) {
                  var B = b.memoizedProps,
                    j = b.memoizedState,
                    P = e.stateNode,
                    C = P.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? B : hr(e.type, B),
                      j
                    )
                  P.__reactInternalSnapshotBeforeUpdate = C
                }
                break
              case 3:
                var O = e.stateNode.containerInfo
                O.nodeType === 1
                  ? (O.textContent = '')
                  : O.nodeType === 9 &&
                    O.documentElement &&
                    O.removeChild(O.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(ee(163))
            }
        } catch ($) {
          at(e, e.return, $)
        }
        if (((t = e.sibling), t !== null)) {
          ;(t.return = e.return), (oe = t)
          break
        }
        oe = e.return
      }
  return (b = r_), (r_ = !1), b
}
function Vu(t, e, n) {
  var r = e.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && yg(e, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function wf(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next)
    do {
      if ((n.tag & t) === t) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== e)
  }
}
function vg(t) {
  var e = t.ref
  if (e !== null) {
    var n = t.stateNode
    switch (t.tag) {
      case 5:
        t = n
        break
      default:
        t = n
    }
    typeof e == 'function' ? e(t) : (e.current = t)
  }
}
function kE(t) {
  var e = t.alternate
  e !== null && ((t.alternate = null), kE(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Cr], delete e[Zu], delete e[ig], delete e[Ck], delete e[Rk])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null)
}
function NE(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function i_(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || NE(t.return)) return null
      t = t.return
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e
      ;(t.child.return = t), (t = t.child)
    }
    if (!(t.flags & 2)) return t.stateNode
  }
}
function _g(t, e, n) {
  var r = t.tag
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Lh))
  else if (r !== 4 && ((t = t.child), t !== null))
    for (_g(t, e, n), t = t.sibling; t !== null; ) _g(t, e, n), (t = t.sibling)
}
function wg(t, e, n) {
  var r = t.tag
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t)
  else if (r !== 4 && ((t = t.child), t !== null))
    for (wg(t, e, n), t = t.sibling; t !== null; ) wg(t, e, n), (t = t.sibling)
}
var Mt = null,
  fr = !1
function Pi(t, e, n) {
  for (n = n.child; n !== null; ) LE(t, e, n), (n = n.sibling)
}
function LE(t, e, n) {
  if (Pr && typeof Pr.onCommitFiberUnmount == 'function')
    try {
      Pr.onCommitFiberUnmount(ff, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Yt || Ko(n, e)
    case 6:
      var r = Mt,
        i = fr
      ;(Mt = null),
        Pi(t, e, n),
        (Mt = r),
        (fr = i),
        Mt !== null &&
          (fr
            ? ((t = Mt),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Mt.removeChild(n.stateNode))
      break
    case 18:
      Mt !== null &&
        (fr
          ? ((t = Mt),
            (n = n.stateNode),
            t.nodeType === 8
              ? hp(t.parentNode, n)
              : t.nodeType === 1 && hp(t, n),
            Gu(t))
          : hp(Mt, n.stateNode))
      break
    case 4:
      ;(r = Mt),
        (i = fr),
        (Mt = n.stateNode.containerInfo),
        (fr = !0),
        Pi(t, e, n),
        (Mt = r),
        (fr = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Yt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            u = o.destroy
          ;(o = o.tag),
            u !== void 0 && (o & 2 || o & 4) && yg(n, e, u),
            (i = i.next)
        } while (i !== r)
      }
      Pi(t, e, n)
      break
    case 1:
      if (
        !Yt &&
        (Ko(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (h) {
          at(n, e, h)
        }
      Pi(t, e, n)
      break
    case 21:
      Pi(t, e, n)
      break
    case 22:
      n.mode & 1
        ? ((Yt = (r = Yt) || n.memoizedState !== null), Pi(t, e, n), (Yt = r))
        : Pi(t, e, n)
      break
    default:
      Pi(t, e, n)
  }
}
function s_(t) {
  var e = t.updateQueue
  if (e !== null) {
    t.updateQueue = null
    var n = t.stateNode
    n === null && (n = t.stateNode = new jk()),
      e.forEach(function (r) {
        var i = Zk.bind(null, t, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function cr(t, e) {
  var n = e.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = t,
          u = e,
          h = u
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 5:
              ;(Mt = h.stateNode), (fr = !1)
              break e
            case 3:
              ;(Mt = h.stateNode.containerInfo), (fr = !0)
              break e
            case 4:
              ;(Mt = h.stateNode.containerInfo), (fr = !0)
              break e
          }
          h = h.return
        }
        if (Mt === null) throw Error(ee(160))
        LE(o, u, i), (Mt = null), (fr = !1)
        var f = i.alternate
        f !== null && (f.return = null), (i.return = null)
      } catch (g) {
        at(i, e, g)
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) OE(e, t), (e = e.sibling)
}
function OE(t, e) {
  var n = t.alternate,
    r = t.flags
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((cr(e, t), Ir(t), r & 4)) {
        try {
          Vu(3, t, t.return), wf(3, t)
        } catch (B) {
          at(t, t.return, B)
        }
        try {
          Vu(5, t, t.return)
        } catch (B) {
          at(t, t.return, B)
        }
      }
      break
    case 1:
      cr(e, t), Ir(t), r & 512 && n !== null && Ko(n, n.return)
      break
    case 5:
      if (
        (cr(e, t),
        Ir(t),
        r & 512 && n !== null && Ko(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode
        try {
          Wu(i, '')
        } catch (B) {
          at(t, t.return, B)
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var o = t.memoizedProps,
          u = n !== null ? n.memoizedProps : o,
          h = t.type,
          f = t.updateQueue
        if (((t.updateQueue = null), f !== null))
          try {
            h === 'input' && o.type === 'radio' && o.name != null && ew(i, o),
              Wp(h, u)
            var g = Wp(h, o)
            for (u = 0; u < f.length; u += 2) {
              var v = f[u],
                E = f[u + 1]
              v === 'style'
                ? sw(i, E)
                : v === 'dangerouslySetInnerHTML'
                ? rw(i, E)
                : v === 'children'
                ? Wu(i, E)
                : im(i, v, E, g)
            }
            switch (h) {
              case 'input':
                Up(i, o)
                break
              case 'textarea':
                tw(i, o)
                break
              case 'select':
                var _ = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var L = o.value
                L != null
                  ? Qo(i, !!o.multiple, L, !1)
                  : _ !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qo(i, !!o.multiple, o.defaultValue, !0)
                      : Qo(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Zu] = o
          } catch (B) {
            at(t, t.return, B)
          }
      }
      break
    case 6:
      if ((cr(e, t), Ir(t), r & 4)) {
        if (t.stateNode === null) throw Error(ee(162))
        ;(i = t.stateNode), (o = t.memoizedProps)
        try {
          i.nodeValue = o
        } catch (B) {
          at(t, t.return, B)
        }
      }
      break
    case 3:
      if (
        (cr(e, t), Ir(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gu(e.containerInfo)
        } catch (B) {
          at(t, t.return, B)
        }
      break
    case 4:
      cr(e, t), Ir(t)
      break
    case 13:
      cr(e, t),
        Ir(t),
        (i = t.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (bm = pt())),
        r & 4 && s_(t)
      break
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Yt = (g = Yt) || v), cr(e, t), (Yt = g)) : cr(e, t),
        Ir(t),
        r & 8192)
      ) {
        if (
          ((g = t.memoizedState !== null),
          (t.stateNode.isHidden = g) && !v && t.mode & 1)
        )
          for (oe = t, v = t.child; v !== null; ) {
            for (E = oe = v; oe !== null; ) {
              switch (((_ = oe), (L = _.child), _.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vu(4, _, _.return)
                  break
                case 1:
                  Ko(_, _.return)
                  var b = _.stateNode
                  if (typeof b.componentWillUnmount == 'function') {
                    ;(r = _), (n = _.return)
                    try {
                      ;(e = r),
                        (b.props = e.memoizedProps),
                        (b.state = e.memoizedState),
                        b.componentWillUnmount()
                    } catch (B) {
                      at(r, n, B)
                    }
                  }
                  break
                case 5:
                  Ko(_, _.return)
                  break
                case 22:
                  if (_.memoizedState !== null) {
                    a_(E)
                    continue
                  }
              }
              L !== null ? ((L.return = _), (oe = L)) : a_(E)
            }
            v = v.sibling
          }
        e: for (v = null, E = t; ; ) {
          if (E.tag === 5) {
            if (v === null) {
              v = E
              try {
                ;(i = E.stateNode),
                  g
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((h = E.stateNode),
                      (f = E.memoizedProps.style),
                      (u =
                        f != null && f.hasOwnProperty('display')
                          ? f.display
                          : null),
                      (h.style.display = iw('display', u)))
              } catch (B) {
                at(t, t.return, B)
              }
            }
          } else if (E.tag === 6) {
            if (v === null)
              try {
                E.stateNode.nodeValue = g ? '' : E.memoizedProps
              } catch (B) {
                at(t, t.return, B)
              }
          } else if (
            ((E.tag !== 22 && E.tag !== 23) ||
              E.memoizedState === null ||
              E === t) &&
            E.child !== null
          ) {
            ;(E.child.return = E), (E = E.child)
            continue
          }
          if (E === t) break e
          for (; E.sibling === null; ) {
            if (E.return === null || E.return === t) break e
            v === E && (v = null), (E = E.return)
          }
          v === E && (v = null), (E.sibling.return = E.return), (E = E.sibling)
        }
      }
      break
    case 19:
      cr(e, t), Ir(t), r & 4 && s_(t)
      break
    case 21:
      break
    default:
      cr(e, t), Ir(t)
  }
}
function Ir(t) {
  var e = t.flags
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (NE(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(ee(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Wu(i, ''), (r.flags &= -33))
          var o = i_(t)
          wg(t, o, i)
          break
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            h = i_(t)
          _g(t, h, u)
          break
        default:
          throw Error(ee(161))
      }
    } catch (f) {
      at(t, t.return, f)
    }
    t.flags &= -3
  }
  e & 4096 && (t.flags &= -4097)
}
function qk(t, e, n) {
  ;(oe = t), DE(t)
}
function DE(t, e, n) {
  for (var r = (t.mode & 1) !== 0; oe !== null; ) {
    var i = oe,
      o = i.child
    if (i.tag === 22 && r) {
      var u = i.memoizedState !== null || Jc
      if (!u) {
        var h = i.alternate,
          f = (h !== null && h.memoizedState !== null) || Yt
        h = Jc
        var g = Yt
        if (((Jc = u), (Yt = f) && !g))
          for (oe = i; oe !== null; )
            (u = oe),
              (f = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? u_(i)
                : f !== null
                ? ((f.return = u), (oe = f))
                : u_(i)
        for (; o !== null; ) (oe = o), DE(o), (o = o.sibling)
        ;(oe = i), (Jc = h), (Yt = g)
      }
      o_(t)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (oe = o)) : o_(t)
  }
}
function o_(t) {
  for (; oe !== null; ) {
    var e = oe
    if (e.flags & 8772) {
      var n = e.alternate
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Yt || wf(5, e)
              break
            case 1:
              var r = e.stateNode
              if (e.flags & 4 && !Yt)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : hr(e.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = e.updateQueue
              o !== null && j0(e, o, r)
              break
            case 3:
              var u = e.updateQueue
              if (u !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode
                      break
                    case 1:
                      n = e.child.stateNode
                  }
                j0(e, u, n)
              }
              break
            case 5:
              var h = e.stateNode
              if (n === null && e.flags & 4) {
                n = h
                var f = e.memoizedProps
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    f.autoFocus && n.focus()
                    break
                  case 'img':
                    f.src && (n.src = f.src)
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
              if (e.memoizedState === null) {
                var g = e.alternate
                if (g !== null) {
                  var v = g.memoizedState
                  if (v !== null) {
                    var E = v.dehydrated
                    E !== null && Gu(E)
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
              throw Error(ee(163))
          }
        Yt || (e.flags & 512 && vg(e))
      } catch (_) {
        at(e, e.return, _)
      }
    }
    if (e === t) {
      oe = null
      break
    }
    if (((n = e.sibling), n !== null)) {
      ;(n.return = e.return), (oe = n)
      break
    }
    oe = e.return
  }
}
function a_(t) {
  for (; oe !== null; ) {
    var e = oe
    if (e === t) {
      oe = null
      break
    }
    var n = e.sibling
    if (n !== null) {
      ;(n.return = e.return), (oe = n)
      break
    }
    oe = e.return
  }
}
function u_(t) {
  for (; oe !== null; ) {
    var e = oe
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return
          try {
            wf(4, e)
          } catch (f) {
            at(e, n, f)
          }
          break
        case 1:
          var r = e.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = e.return
            try {
              r.componentDidMount()
            } catch (f) {
              at(e, i, f)
            }
          }
          var o = e.return
          try {
            vg(e)
          } catch (f) {
            at(e, o, f)
          }
          break
        case 5:
          var u = e.return
          try {
            vg(e)
          } catch (f) {
            at(e, u, f)
          }
      }
    } catch (f) {
      at(e, e.return, f)
    }
    if (e === t) {
      oe = null
      break
    }
    var h = e.sibling
    if (h !== null) {
      ;(h.return = e.return), (oe = h)
      break
    }
    oe = e.return
  }
}
var Hk = Math.ceil,
  jh = ci.ReactCurrentDispatcher,
  Vm = ci.ReactCurrentOwner,
  Xn = ci.ReactCurrentBatchConfig,
  De = 0,
  Nt = null,
  _t = null,
  Ft = 0,
  kn = 0,
  Go = ns(0),
  At = 0,
  sl = null,
  qs = 0,
  Ef = 0,
  Mm = 0,
  Mu = null,
  wn = null,
  bm = 0,
  fa = 1 / 0,
  Zr = null,
  Wh = !1,
  Eg = null,
  ji = null,
  Zc = !1,
  Vi = null,
  qh = 0,
  bu = 0,
  Tg = null,
  gh = -1,
  mh = 0
function ln() {
  return De & 6 ? pt() : gh !== -1 ? gh : (gh = pt())
}
function Wi(t) {
  return t.mode & 1
    ? De & 2 && Ft !== 0
      ? Ft & -Ft
      : Pk.transition !== null
      ? (mh === 0 && (mh = yw()), mh)
      : ((t = We),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Iw(t.type))),
        t)
    : 1
}
function mr(t, e, n, r) {
  if (50 < bu) throw ((bu = 0), (Tg = null), Error(ee(185)))
  pl(t, n, r),
    (!(De & 2) || t !== Nt) &&
      (t === Nt && (!(De & 2) && (Ef |= n), At === 4 && Oi(t, Ft)),
      In(t, r),
      n === 1 && De === 0 && !(e.mode & 1) && ((fa = pt() + 500), yf && rs()))
}
function In(t, e) {
  var n = t.callbackNode
  PP(t, e)
  var r = xh(t, t === Nt ? Ft : 0)
  if (r === 0)
    n !== null && y0(n), (t.callbackNode = null), (t.callbackPriority = 0)
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && y0(n), e === 1))
      t.tag === 0 ? xk(l_.bind(null, t)) : jw(l_.bind(null, t)),
        Ik(function () {
          !(De & 6) && rs()
        }),
        (n = null)
    else {
      switch (vw(r)) {
        case 1:
          n = lm
          break
        case 4:
          n = gw
          break
        case 16:
          n = Rh
          break
        case 536870912:
          n = mw
          break
        default:
          n = Rh
      }
      n = $E(n, VE.bind(null, t))
    }
    ;(t.callbackPriority = e), (t.callbackNode = n)
  }
}
function VE(t, e) {
  if (((gh = -1), (mh = 0), De & 6)) throw Error(ee(327))
  var n = t.callbackNode
  if (ea() && t.callbackNode !== n) return null
  var r = xh(t, t === Nt ? Ft : 0)
  if (r === 0) return null
  if (r & 30 || r & t.expiredLanes || e) e = Hh(t, r)
  else {
    e = r
    var i = De
    De |= 2
    var o = bE()
    ;(Nt !== t || Ft !== e) && ((Zr = null), (fa = pt() + 500), bs(t, e))
    do
      try {
        Qk()
        break
      } catch (h) {
        ME(t, h)
      }
    while (!0)
    Tm(),
      (jh.current = o),
      (De = i),
      _t !== null ? (e = 0) : ((Nt = null), (Ft = 0), (e = At))
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Qp(t)), i !== 0 && ((r = i), (e = Sg(t, i)))), e === 1)
    )
      throw ((n = sl), bs(t, 0), Oi(t, r), In(t, pt()), n)
    if (e === 6) Oi(t, r)
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !Kk(i) &&
          ((e = Hh(t, r)),
          e === 2 && ((o = Qp(t)), o !== 0 && ((r = o), (e = Sg(t, o)))),
          e === 1))
      )
        throw ((n = sl), bs(t, 0), Oi(t, r), In(t, pt()), n)
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(ee(345))
        case 2:
          ks(t, wn, Zr)
          break
        case 3:
          if (
            (Oi(t, r), (r & 130023424) === r && ((e = bm + 500 - pt()), 10 < e))
          ) {
            if (xh(t, 0) !== 0) break
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              ln(), (t.pingedLanes |= t.suspendedLanes & i)
              break
            }
            t.timeoutHandle = rg(ks.bind(null, t, wn, Zr), e)
            break
          }
          ks(t, wn, Zr)
          break
        case 4:
          if ((Oi(t, r), (r & 4194240) === r)) break
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var u = 31 - gr(r)
            ;(o = 1 << u), (u = e[u]), u > i && (i = u), (r &= ~o)
          }
          if (
            ((r = i),
            (r = pt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Hk(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = rg(ks.bind(null, t, wn, Zr), r)
            break
          }
          ks(t, wn, Zr)
          break
        case 5:
          ks(t, wn, Zr)
          break
        default:
          throw Error(ee(329))
      }
    }
  }
  return In(t, pt()), t.callbackNode === n ? VE.bind(null, t) : null
}
function Sg(t, e) {
  var n = Mu
  return (
    t.current.memoizedState.isDehydrated && (bs(t, e).flags |= 256),
    (t = Hh(t, e)),
    t !== 2 && ((e = wn), (wn = n), e !== null && Ig(e)),
    t
  )
}
function Ig(t) {
  wn === null ? (wn = t) : wn.push.apply(wn, t)
}
function Kk(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!yr(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n)
    else {
      if (e === t) break
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0
        e = e.return
      }
      ;(e.sibling.return = e.return), (e = e.sibling)
    }
  }
  return !0
}
function Oi(t, e) {
  for (
    e &= ~Mm,
      e &= ~Ef,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - gr(e),
      r = 1 << n
    ;(t[n] = -1), (e &= ~r)
  }
}
function l_(t) {
  if (De & 6) throw Error(ee(327))
  ea()
  var e = xh(t, 0)
  if (!(e & 1)) return In(t, pt()), null
  var n = Hh(t, e)
  if (t.tag !== 0 && n === 2) {
    var r = Qp(t)
    r !== 0 && ((e = r), (n = Sg(t, r)))
  }
  if (n === 1) throw ((n = sl), bs(t, 0), Oi(t, e), In(t, pt()), n)
  if (n === 6) throw Error(ee(345))
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    ks(t, wn, Zr),
    In(t, pt()),
    null
  )
}
function Fm(t, e) {
  var n = De
  De |= 1
  try {
    return t(e)
  } finally {
    ;(De = n), De === 0 && ((fa = pt() + 500), yf && rs())
  }
}
function Hs(t) {
  Vi !== null && Vi.tag === 0 && !(De & 6) && ea()
  var e = De
  De |= 1
  var n = Xn.transition,
    r = We
  try {
    if (((Xn.transition = null), (We = 1), t)) return t()
  } finally {
    ;(We = r), (Xn.transition = n), (De = e), !(De & 6) && rs()
  }
}
function Um() {
  ;(kn = Go.current), Ye(Go)
}
function bs(t, e) {
  ;(t.finishedWork = null), (t.finishedLanes = 0)
  var n = t.timeoutHandle
  if ((n !== -1 && ((t.timeoutHandle = -1), Sk(n)), _t !== null))
    for (n = _t.return; n !== null; ) {
      var r = n
      switch ((_m(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Oh()
          break
        case 3:
          ca(), Ye(Tn), Ye(Jt), xm()
          break
        case 5:
          Rm(r)
          break
        case 4:
          ca()
          break
        case 13:
          Ye(tt)
          break
        case 19:
          Ye(tt)
          break
        case 10:
          Sm(r.type._context)
          break
        case 22:
        case 23:
          Um()
      }
      n = n.return
    }
  if (
    ((Nt = t),
    (_t = t = qi(t.current, null)),
    (Ft = kn = e),
    (At = 0),
    (sl = null),
    (Mm = Ef = qs = 0),
    (wn = Mu = null),
    Os !== null)
  ) {
    for (e = 0; e < Os.length; e++)
      if (((n = Os[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var u = o.next
          ;(o.next = i), (r.next = u)
        }
        n.pending = r
      }
    Os = null
  }
  return t
}
function ME(t, e) {
  do {
    var n = _t
    try {
      if ((Tm(), (fh.current = $h), Bh)) {
        for (var r = nt.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Bh = !1
      }
      if (
        ((Ws = 0),
        (kt = St = nt = null),
        (Du = !1),
        (nl = 0),
        (Vm.current = null),
        n === null || n.return === null)
      ) {
        ;(At = 1), (sl = e), (_t = null)
        break
      }
      e: {
        var o = t,
          u = n.return,
          h = n,
          f = e
        if (
          ((e = Ft),
          (h.flags |= 32768),
          f !== null && typeof f == 'object' && typeof f.then == 'function')
        ) {
          var g = f,
            v = h,
            E = v.tag
          if (!(v.mode & 1) && (E === 0 || E === 11 || E === 15)) {
            var _ = v.alternate
            _
              ? ((v.updateQueue = _.updateQueue),
                (v.memoizedState = _.memoizedState),
                (v.lanes = _.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null))
          }
          var L = Y0(u)
          if (L !== null) {
            ;(L.flags &= -257),
              X0(L, u, h, o, e),
              L.mode & 1 && Q0(o, g, e),
              (e = L),
              (f = g)
            var b = e.updateQueue
            if (b === null) {
              var B = new Set()
              B.add(f), (e.updateQueue = B)
            } else b.add(f)
            break e
          } else {
            if (!(e & 1)) {
              Q0(o, g, e), zm()
              break e
            }
            f = Error(ee(426))
          }
        } else if (Je && h.mode & 1) {
          var j = Y0(u)
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              X0(j, u, h, o, e),
              wm(ha(f, h))
            break e
          }
        }
        ;(o = f = ha(f, h)),
          At !== 4 && (At = 2),
          Mu === null ? (Mu = [o]) : Mu.push(o),
          (o = u)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (e &= -e), (o.lanes |= e)
              var P = _E(o, f, e)
              $0(o, P)
              break e
            case 1:
              h = f
              var C = o.type,
                O = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof C.getDerivedStateFromError == 'function' ||
                  (O !== null &&
                    typeof O.componentDidCatch == 'function' &&
                    (ji === null || !ji.has(O))))
              ) {
                ;(o.flags |= 65536), (e &= -e), (o.lanes |= e)
                var $ = wE(o, h, e)
                $0(o, $)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      UE(n)
    } catch (Q) {
      ;(e = Q), _t === n && n !== null && (_t = n = n.return)
      continue
    }
    break
  } while (!0)
}
function bE() {
  var t = jh.current
  return (jh.current = $h), t === null ? $h : t
}
function zm() {
  ;(At === 0 || At === 3 || At === 2) && (At = 4),
    Nt === null || (!(qs & 268435455) && !(Ef & 268435455)) || Oi(Nt, Ft)
}
function Hh(t, e) {
  var n = De
  De |= 2
  var r = bE()
  ;(Nt !== t || Ft !== e) && ((Zr = null), bs(t, e))
  do
    try {
      Gk()
      break
    } catch (i) {
      ME(t, i)
    }
  while (!0)
  if ((Tm(), (De = n), (jh.current = r), _t !== null)) throw Error(ee(261))
  return (Nt = null), (Ft = 0), At
}
function Gk() {
  for (; _t !== null; ) FE(_t)
}
function Qk() {
  for (; _t !== null && !wP(); ) FE(_t)
}
function FE(t) {
  var e = BE(t.alternate, t, kn)
  ;(t.memoizedProps = t.pendingProps),
    e === null ? UE(t) : (_t = e),
    (Vm.current = null)
}
function UE(t) {
  var e = t
  do {
    var n = e.alternate
    if (((t = e.return), e.flags & 32768)) {
      if (((n = $k(n, e)), n !== null)) {
        ;(n.flags &= 32767), (_t = n)
        return
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)
      else {
        ;(At = 6), (_t = null)
        return
      }
    } else if (((n = Bk(n, e, kn)), n !== null)) {
      _t = n
      return
    }
    if (((e = e.sibling), e !== null)) {
      _t = e
      return
    }
    _t = e = t
  } while (e !== null)
  At === 0 && (At = 5)
}
function ks(t, e, n) {
  var r = We,
    i = Xn.transition
  try {
    ;(Xn.transition = null), (We = 1), Yk(t, e, n, r)
  } finally {
    ;(Xn.transition = i), (We = r)
  }
  return null
}
function Yk(t, e, n, r) {
  do ea()
  while (Vi !== null)
  if (De & 6) throw Error(ee(327))
  n = t.finishedWork
  var i = t.finishedLanes
  if (n === null) return null
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(ee(177))
  ;(t.callbackNode = null), (t.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (kP(t, o),
    t === Nt && ((_t = Nt = null), (Ft = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zc ||
      ((Zc = !0),
      $E(Rh, function () {
        return ea(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Xn.transition), (Xn.transition = null)
    var u = We
    We = 1
    var h = De
    ;(De |= 4),
      (Vm.current = null),
      Wk(t, n),
      OE(n, t),
      mk(tg),
      (Ph = !!eg),
      (tg = eg = null),
      (t.current = n),
      qk(n),
      EP(),
      (De = h),
      (We = u),
      (Xn.transition = o)
  } else t.current = n
  if (
    (Zc && ((Zc = !1), (Vi = t), (qh = i)),
    (o = t.pendingLanes),
    o === 0 && (ji = null),
    IP(n.stateNode),
    In(t, pt()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Wh) throw ((Wh = !1), (t = Eg), (Eg = null), t)
  return (
    qh & 1 && t.tag !== 0 && ea(),
    (o = t.pendingLanes),
    o & 1 ? (t === Tg ? bu++ : ((bu = 0), (Tg = t))) : (bu = 0),
    rs(),
    null
  )
}
function ea() {
  if (Vi !== null) {
    var t = vw(qh),
      e = Xn.transition,
      n = We
    try {
      if (((Xn.transition = null), (We = 16 > t ? 16 : t), Vi === null))
        var r = !1
      else {
        if (((t = Vi), (Vi = null), (qh = 0), De & 6)) throw Error(ee(331))
        var i = De
        for (De |= 4, oe = t.current; oe !== null; ) {
          var o = oe,
            u = o.child
          if (oe.flags & 16) {
            var h = o.deletions
            if (h !== null) {
              for (var f = 0; f < h.length; f++) {
                var g = h[f]
                for (oe = g; oe !== null; ) {
                  var v = oe
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vu(8, v, o)
                  }
                  var E = v.child
                  if (E !== null) (E.return = v), (oe = E)
                  else
                    for (; oe !== null; ) {
                      v = oe
                      var _ = v.sibling,
                        L = v.return
                      if ((kE(v), v === g)) {
                        oe = null
                        break
                      }
                      if (_ !== null) {
                        ;(_.return = L), (oe = _)
                        break
                      }
                      oe = L
                    }
                }
              }
              var b = o.alternate
              if (b !== null) {
                var B = b.child
                if (B !== null) {
                  b.child = null
                  do {
                    var j = B.sibling
                    ;(B.sibling = null), (B = j)
                  } while (B !== null)
                }
              }
              oe = o
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (oe = u)
          else
            e: for (; oe !== null; ) {
              if (((o = oe), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vu(9, o, o.return)
                }
              var P = o.sibling
              if (P !== null) {
                ;(P.return = o.return), (oe = P)
                break e
              }
              oe = o.return
            }
        }
        var C = t.current
        for (oe = C; oe !== null; ) {
          u = oe
          var O = u.child
          if (u.subtreeFlags & 2064 && O !== null) (O.return = u), (oe = O)
          else
            e: for (u = C; oe !== null; ) {
              if (((h = oe), h.flags & 2048))
                try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wf(9, h)
                  }
                } catch (Q) {
                  at(h, h.return, Q)
                }
              if (h === u) {
                oe = null
                break e
              }
              var $ = h.sibling
              if ($ !== null) {
                ;($.return = h.return), (oe = $)
                break e
              }
              oe = h.return
            }
        }
        if (
          ((De = i), rs(), Pr && typeof Pr.onPostCommitFiberRoot == 'function')
        )
          try {
            Pr.onPostCommitFiberRoot(ff, t)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(We = n), (Xn.transition = e)
    }
  }
  return !1
}
function c_(t, e, n) {
  ;(e = ha(n, e)),
    (e = _E(t, e, 1)),
    (t = $i(t, e, 1)),
    (e = ln()),
    t !== null && (pl(t, 1, e), In(t, e))
}
function at(t, e, n) {
  if (t.tag === 3) c_(t, t, n)
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        c_(e, t, n)
        break
      } else if (e.tag === 1) {
        var r = e.stateNode
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ji === null || !ji.has(r)))
        ) {
          ;(t = ha(n, t)),
            (t = wE(e, t, 1)),
            (e = $i(e, t, 1)),
            (t = ln()),
            e !== null && (pl(e, 1, t), In(e, t))
          break
        }
      }
      e = e.return
    }
}
function Xk(t, e, n) {
  var r = t.pingCache
  r !== null && r.delete(e),
    (e = ln()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Nt === t &&
      (Ft & n) === n &&
      (At === 4 || (At === 3 && (Ft & 130023424) === Ft && 500 > pt() - bm)
        ? bs(t, 0)
        : (Mm |= n)),
    In(t, e)
}
function zE(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = jc), (jc <<= 1), !(jc & 130023424) && (jc = 4194304))
      : (e = 1))
  var n = ln()
  ;(t = oi(t, e)), t !== null && (pl(t, e, n), In(t, n))
}
function Jk(t) {
  var e = t.memoizedState,
    n = 0
  e !== null && (n = e.retryLane), zE(t, n)
}
function Zk(t, e) {
  var n = 0
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = t.stateNode
      break
    default:
      throw Error(ee(314))
  }
  r !== null && r.delete(e), zE(t, n)
}
var BE
BE = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Tn.current) En = !0
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (En = !1), zk(t, e, n)
      En = !!(t.flags & 131072)
    }
  else (En = !1), Je && e.flags & 1048576 && Ww(e, Mh, e.index)
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type
      ph(t, e), (t = e.pendingProps)
      var i = aa(e, Jt.current)
      Zo(e, n), (i = km(null, e, r, t, i, n))
      var o = Nm()
      return (
        (e.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Sn(r) ? ((o = !0), Dh(e)) : (o = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Am(e),
            (i.updater = vf),
            (e.stateNode = i),
            (i._reactInternals = e),
            cg(e, r, t, n),
            (e = dg(null, e, r, !0, o, n)))
          : ((e.tag = 0), Je && o && vm(e), an(null, e, i, n), (e = e.child)),
        e
      )
    case 16:
      r = e.elementType
      e: {
        switch (
          (ph(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = tN(r)),
          (t = hr(r, t)),
          i)
        ) {
          case 0:
            e = fg(null, e, r, t, n)
            break e
          case 1:
            e = e_(null, e, r, t, n)
            break e
          case 11:
            e = J0(null, e, r, t, n)
            break e
          case 14:
            e = Z0(null, e, r, hr(r.type, t), n)
            break e
        }
        throw Error(ee(306, r, ''))
      }
      return e
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : hr(r, i)),
        fg(t, e, r, i, n)
      )
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : hr(r, i)),
        e_(t, e, r, i, n)
      )
    case 3:
      e: {
        if ((IE(e), t === null)) throw Error(ee(387))
        ;(r = e.pendingProps),
          (o = e.memoizedState),
          (i = o.element),
          Gw(t, e),
          Uh(e, r, null, n)
        var u = e.memoizedState
        if (((r = u.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (e.updateQueue.baseState = o),
            (e.memoizedState = o),
            e.flags & 256)
          ) {
            ;(i = ha(Error(ee(423)), e)), (e = t_(t, e, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = ha(Error(ee(424)), e)), (e = t_(t, e, r, n, i))
            break e
          } else
            for (
              Nn = Bi(e.stateNode.containerInfo.firstChild),
                Ln = e,
                Je = !0,
                dr = null,
                n = Jw(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((ua(), r === i)) {
            e = ai(t, e, n)
            break e
          }
          an(t, e, r, n)
        }
        e = e.child
      }
      return e
    case 5:
      return (
        Zw(e),
        t === null && ag(e),
        (r = e.type),
        (i = e.pendingProps),
        (o = t !== null ? t.memoizedProps : null),
        (u = i.children),
        ng(r, i) ? (u = null) : o !== null && ng(r, o) && (e.flags |= 32),
        SE(t, e),
        an(t, e, u, n),
        e.child
      )
    case 6:
      return t === null && ag(e), null
    case 13:
      return AE(t, e, n)
    case 4:
      return (
        Cm(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = la(e, null, r, n)) : an(t, e, r, n),
        e.child
      )
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : hr(r, i)),
        J0(t, e, r, i, n)
      )
    case 7:
      return an(t, e, e.pendingProps, n), e.child
    case 8:
      return an(t, e, e.pendingProps.children, n), e.child
    case 12:
      return an(t, e, e.pendingProps.children, n), e.child
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (o = e.memoizedProps),
          (u = i.value),
          Ge(bh, r._currentValue),
          (r._currentValue = u),
          o !== null)
        )
          if (yr(o.value, u)) {
            if (o.children === i.children && !Tn.current) {
              e = ai(t, e, n)
              break e
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var h = o.dependencies
              if (h !== null) {
                u = o.child
                for (var f = h.firstContext; f !== null; ) {
                  if (f.context === r) {
                    if (o.tag === 1) {
                      ;(f = ri(-1, n & -n)), (f.tag = 2)
                      var g = o.updateQueue
                      if (g !== null) {
                        g = g.shared
                        var v = g.pending
                        v === null
                          ? (f.next = f)
                          : ((f.next = v.next), (v.next = f)),
                          (g.pending = f)
                      }
                    }
                    ;(o.lanes |= n),
                      (f = o.alternate),
                      f !== null && (f.lanes |= n),
                      ug(o.return, n, e),
                      (h.lanes |= n)
                    break
                  }
                  f = f.next
                }
              } else if (o.tag === 10) u = o.type === e.type ? null : o.child
              else if (o.tag === 18) {
                if (((u = o.return), u === null)) throw Error(ee(341))
                ;(u.lanes |= n),
                  (h = u.alternate),
                  h !== null && (h.lanes |= n),
                  ug(u, n, e),
                  (u = o.sibling)
              } else u = o.child
              if (u !== null) u.return = o
              else
                for (u = o; u !== null; ) {
                  if (u === e) {
                    u = null
                    break
                  }
                  if (((o = u.sibling), o !== null)) {
                    ;(o.return = u.return), (u = o)
                    break
                  }
                  u = u.return
                }
              o = u
            }
        an(t, e, i.children, n), (e = e.child)
      }
      return e
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Zo(e, n),
        (i = Jn(i)),
        (r = r(i)),
        (e.flags |= 1),
        an(t, e, r, n),
        e.child
      )
    case 14:
      return (
        (r = e.type),
        (i = hr(r, e.pendingProps)),
        (i = hr(r.type, i)),
        Z0(t, e, r, i, n)
      )
    case 15:
      return EE(t, e, e.type, e.pendingProps, n)
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : hr(r, i)),
        ph(t, e),
        (e.tag = 1),
        Sn(r) ? ((t = !0), Dh(e)) : (t = !1),
        Zo(e, n),
        Yw(e, r, i),
        cg(e, r, i, n),
        dg(null, e, r, !0, t, n)
      )
    case 19:
      return CE(t, e, n)
    case 22:
      return TE(t, e, n)
  }
  throw Error(ee(156, e.tag))
}
function $E(t, e) {
  return pw(t, e)
}
function eN(t, e, n, r) {
  ;(this.tag = t),
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
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Yn(t, e, n, r) {
  return new eN(t, e, n, r)
}
function Bm(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent)
}
function tN(t) {
  if (typeof t == 'function') return Bm(t) ? 1 : 0
  if (t != null) {
    if (((t = t.$$typeof), t === om)) return 11
    if (t === am) return 14
  }
  return 2
}
function qi(t, e) {
  var n = t.alternate
  return (
    n === null
      ? ((n = Yn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  )
}
function yh(t, e, n, r, i, o) {
  var u = 2
  if (((r = t), typeof t == 'function')) Bm(t) && (u = 1)
  else if (typeof t == 'string') u = 5
  else
    e: switch (t) {
      case Fo:
        return Fs(n.children, i, o, e)
      case sm:
        ;(u = 8), (i |= 8)
        break
      case Dp:
        return (t = Yn(12, n, e, i | 2)), (t.elementType = Dp), (t.lanes = o), t
      case Vp:
        return (t = Yn(13, n, e, i)), (t.elementType = Vp), (t.lanes = o), t
      case Mp:
        return (t = Yn(19, n, e, i)), (t.elementType = Mp), (t.lanes = o), t
      case X1:
        return Tf(n, i, o, e)
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case Q1:
              u = 10
              break e
            case Y1:
              u = 9
              break e
            case om:
              u = 11
              break e
            case am:
              u = 14
              break e
            case ki:
              ;(u = 16), (r = null)
              break e
          }
        throw Error(ee(130, t == null ? t : typeof t, ''))
    }
  return (
    (e = Yn(u, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = o), e
  )
}
function Fs(t, e, n, r) {
  return (t = Yn(7, t, r, e)), (t.lanes = n), t
}
function Tf(t, e, n, r) {
  return (
    (t = Yn(22, t, r, e)),
    (t.elementType = X1),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  )
}
function _p(t, e, n) {
  return (t = Yn(6, t, null, e)), (t.lanes = n), t
}
function wp(t, e, n) {
  return (
    (e = Yn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  )
}
function nN(t, e, n, r, i) {
  ;(this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ep(0)),
    (this.expirationTimes = ep(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ep(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function $m(t, e, n, r, i, o, u, h, f) {
  return (
    (t = new nN(t, e, n, h, f)),
    e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
    (o = Yn(3, null, null, e)),
    (t.current = o),
    (o.stateNode = t),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Am(o),
    t
  )
}
function rN(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: bo,
    key: r == null ? null : '' + r,
    children: t,
    containerInfo: e,
    implementation: n,
  }
}
function jE(t) {
  if (!t) return Qi
  t = t._reactInternals
  e: {
    if (Qs(t) !== t || t.tag !== 1) throw Error(ee(170))
    var e = t
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context
          break e
        case 1:
          if (Sn(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      e = e.return
    } while (e !== null)
    throw Error(ee(171))
  }
  if (t.tag === 1) {
    var n = t.type
    if (Sn(n)) return $w(t, n, e)
  }
  return e
}
function WE(t, e, n, r, i, o, u, h, f) {
  return (
    (t = $m(n, r, !0, t, i, o, u, h, f)),
    (t.context = jE(null)),
    (n = t.current),
    (r = ln()),
    (i = Wi(n)),
    (o = ri(r, i)),
    (o.callback = e ?? null),
    $i(n, o, i),
    (t.current.lanes = i),
    pl(t, i, r),
    In(t, r),
    t
  )
}
function Sf(t, e, n, r) {
  var i = e.current,
    o = ln(),
    u = Wi(i)
  return (
    (n = jE(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = ri(o, u)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = $i(i, e, u)),
    t !== null && (mr(t, i, u, o), hh(t, i, u)),
    u
  )
}
function Kh(t) {
  if (((t = t.current), !t.child)) return null
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode
    default:
      return t.child.stateNode
  }
}
function h_(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane
    t.retryLane = n !== 0 && n < e ? n : e
  }
}
function jm(t, e) {
  h_(t, e), (t = t.alternate) && h_(t, e)
}
function iN() {
  return null
}
var qE =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t)
      }
function Wm(t) {
  this._internalRoot = t
}
If.prototype.render = Wm.prototype.render = function (t) {
  var e = this._internalRoot
  if (e === null) throw Error(ee(409))
  Sf(t, e, null, null)
}
If.prototype.unmount = Wm.prototype.unmount = function () {
  var t = this._internalRoot
  if (t !== null) {
    this._internalRoot = null
    var e = t.containerInfo
    Hs(function () {
      Sf(null, t, null, null)
    }),
      (e[si] = null)
  }
}
function If(t) {
  this._internalRoot = t
}
If.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Ew()
    t = { blockedOn: null, target: t, priority: e }
    for (var n = 0; n < Li.length && e !== 0 && e < Li[n].priority; n++);
    Li.splice(n, 0, t), n === 0 && Sw(t)
  }
}
function qm(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
}
function Af(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  )
}
function f_() {}
function sN(t, e, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var g = Kh(u)
        o.call(g)
      }
    }
    var u = WE(e, r, t, 0, null, !1, !1, '', f_)
    return (
      (t._reactRootContainer = u),
      (t[si] = u.current),
      Xu(t.nodeType === 8 ? t.parentNode : t),
      Hs(),
      u
    )
  }
  for (; (i = t.lastChild); ) t.removeChild(i)
  if (typeof r == 'function') {
    var h = r
    r = function () {
      var g = Kh(f)
      h.call(g)
    }
  }
  var f = $m(t, 0, !1, null, null, !1, !1, '', f_)
  return (
    (t._reactRootContainer = f),
    (t[si] = f.current),
    Xu(t.nodeType === 8 ? t.parentNode : t),
    Hs(function () {
      Sf(e, f, n, r)
    }),
    f
  )
}
function Cf(t, e, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var u = o
    if (typeof i == 'function') {
      var h = i
      i = function () {
        var f = Kh(u)
        h.call(f)
      }
    }
    Sf(e, u, t, i)
  } else u = sN(n, e, t, i, r)
  return Kh(u)
}
_w = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode
      if (e.current.memoizedState.isDehydrated) {
        var n = Su(e.pendingLanes)
        n !== 0 &&
          (cm(e, n | 1), In(e, pt()), !(De & 6) && ((fa = pt() + 500), rs()))
      }
      break
    case 13:
      Hs(function () {
        var r = oi(t, 1)
        if (r !== null) {
          var i = ln()
          mr(r, t, 1, i)
        }
      }),
        jm(t, 1)
  }
}
hm = function (t) {
  if (t.tag === 13) {
    var e = oi(t, 134217728)
    if (e !== null) {
      var n = ln()
      mr(e, t, 134217728, n)
    }
    jm(t, 134217728)
  }
}
ww = function (t) {
  if (t.tag === 13) {
    var e = Wi(t),
      n = oi(t, e)
    if (n !== null) {
      var r = ln()
      mr(n, t, e, r)
    }
    jm(t, e)
  }
}
Ew = function () {
  return We
}
Tw = function (t, e) {
  var n = We
  try {
    return (We = t), e()
  } finally {
    We = n
  }
}
Hp = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((Up(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e]
          if (r !== t && r.form === t.form) {
            var i = mf(r)
            if (!i) throw Error(ee(90))
            Z1(r), Up(r, i)
          }
        }
      }
      break
    case 'textarea':
      tw(t, n)
      break
    case 'select':
      ;(e = n.value), e != null && Qo(t, !!n.multiple, e, !1)
  }
}
uw = Fm
lw = Hs
var oN = { usingClientEntryPoint: !1, Events: [ml, $o, mf, ow, aw, Fm] },
  _u = {
    findFiberByHostInstance: Ls,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  aN = {
    bundleType: _u.bundleType,
    version: _u.version,
    rendererPackageName: _u.rendererPackageName,
    rendererConfig: _u.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ci.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = fw(t)), t === null ? null : t.stateNode
    },
    findFiberByHostInstance: _u.findFiberByHostInstance || iN,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var eh = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!eh.isDisabled && eh.supportsFiber)
    try {
      ;(ff = eh.inject(aN)), (Pr = eh)
    } catch {}
}
Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oN
Dn.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!qm(e)) throw Error(ee(200))
  return rN(t, e, null, n)
}
Dn.createRoot = function (t, e) {
  if (!qm(t)) throw Error(ee(299))
  var n = !1,
    r = '',
    i = qE
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = $m(t, 1, !1, null, null, n, !1, r, i)),
    (t[si] = e.current),
    Xu(t.nodeType === 8 ? t.parentNode : t),
    new Wm(e)
  )
}
Dn.findDOMNode = function (t) {
  if (t == null) return null
  if (t.nodeType === 1) return t
  var e = t._reactInternals
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(ee(188))
      : ((t = Object.keys(t).join(',')), Error(ee(268, t)))
  return (t = fw(e)), (t = t === null ? null : t.stateNode), t
}
Dn.flushSync = function (t) {
  return Hs(t)
}
Dn.hydrate = function (t, e, n) {
  if (!Af(e)) throw Error(ee(200))
  return Cf(null, t, e, !0, n)
}
Dn.hydrateRoot = function (t, e, n) {
  if (!qm(t)) throw Error(ee(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    u = qE
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (e = WE(e, null, t, 1, n ?? null, i, !1, o, u)),
    (t[si] = e.current),
    Xu(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i)
  return new If(e)
}
Dn.render = function (t, e, n) {
  if (!Af(e)) throw Error(ee(200))
  return Cf(null, t, e, !1, n)
}
Dn.unmountComponentAtNode = function (t) {
  if (!Af(t)) throw Error(ee(40))
  return t._reactRootContainer
    ? (Hs(function () {
        Cf(null, null, t, !1, function () {
          ;(t._reactRootContainer = null), (t[si] = null)
        })
      }),
      !0)
    : !1
}
Dn.unstable_batchedUpdates = Fm
Dn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Af(n)) throw Error(ee(200))
  if (t == null || t._reactInternals === void 0) throw Error(ee(38))
  return Cf(t, e, n, !1, r)
}
Dn.version = '18.2.0-next-9e3b772b8-20220608'
function HE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(HE)
    } catch (t) {
      console.error(t)
    }
}
HE(), (W1.exports = Dn)
var uN = W1.exports,
  d_ = uN
;(Lp.createRoot = d_.createRoot), (Lp.hydrateRoot = d_.hydrateRoot)
const lN = (...t) => {
    console?.warn &&
      (Us(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t))
  },
  p_ = {},
  Ag = (...t) => {
    ;(Us(t[0]) && p_[t[0]]) || (Us(t[0]) && (p_[t[0]] = new Date()), lN(...t))
  },
  KE = (t, e) => () => {
    if (t.isInitialized) e()
    else {
      const n = () => {
        setTimeout(() => {
          t.off('initialized', n)
        }, 0),
          e()
      }
      t.on('initialized', n)
    }
  },
  g_ = (t, e, n) => {
    t.loadNamespaces(e, KE(t, n))
  },
  m_ = (t, e, n, r) => {
    Us(n) && (n = [n]),
      n.forEach((i) => {
        t.options.ns.indexOf(i) < 0 && t.options.ns.push(i)
      }),
      t.loadLanguages(e, KE(t, r))
  },
  cN = (t, e, n = {}) =>
    !e.languages || !e.languages.length
      ? (Ag('i18n.languages were undefined or empty', e.languages), !0)
      : e.hasLoadedNamespace(t, {
          lng: n.lng,
          precheck: (r, i) => {
            if (
              n.bindI18n?.indexOf('languageChanging') > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !i(r.isLanguageChangingTo, t)
            )
              return !1
          },
        }),
  Us = (t) => typeof t == 'string',
  hN = (t) => typeof t == 'object' && t !== null,
  fN =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  dN = {
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
  pN = (t) => dN[t],
  gN = (t) => t.replace(fN, pN)
let Cg = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: gN,
}
const mN = (t = {}) => {
    Cg = { ...Cg, ...t }
  },
  yN = () => Cg
let GE
const vN = (t) => {
    GE = t
  },
  _N = () => GE,
  wN = {
    type: '3rdParty',
    init(t) {
      mN(t.options.react), vN(t)
    },
  },
  EN = je.createContext()
class TN {
  constructor() {
    this.usedNamespaces = {}
  }
  addUsedNamespaces(e) {
    e.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
    })
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces)
  }
}
const SN = (t, e) => {
    const n = je.useRef()
    return (
      je.useEffect(() => {
        n.current = t
      }, [t, e]),
      n.current
    )
  },
  QE = (t, e, n, r) => t.getFixedT(e, n, r),
  IN = (t, e, n, r) => je.useCallback(QE(t, e, n, r), [t, e, n, r]),
  AN = (t, e = {}) => {
    const { i18n: n } = e,
      { i18n: r, defaultNS: i } = je.useContext(EN) || {},
      o = n || r || _N()
    if ((o && !o.reportNamespaces && (o.reportNamespaces = new TN()), !o)) {
      Ag(
        'You will need to pass in an i18next instance by using initReactI18next'
      )
      const $ = (X, A) =>
          Us(A)
            ? A
            : hN(A) && Us(A.defaultValue)
            ? A.defaultValue
            : Array.isArray(X)
            ? X[X.length - 1]
            : X,
        Q = [$, {}, !1]
      return (Q.t = $), (Q.i18n = {}), (Q.ready = !1), Q
    }
    o.options.react?.wait &&
      Ag(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      )
    const u = { ...yN(), ...o.options.react, ...e },
      { useSuspense: h, keyPrefix: f } = u
    let g = i || o.options?.defaultNS
    ;(g = Us(g) ? [g] : g || ['translation']),
      o.reportNamespaces.addUsedNamespaces?.(g)
    const v =
        (o.isInitialized || o.initializedStoreOnce) &&
        g.every(($) => cN($, o, u)),
      E = IN(o, e.lng || null, u.nsMode === 'fallback' ? g : g[0], f),
      _ = () => E,
      L = () => QE(o, e.lng || null, u.nsMode === 'fallback' ? g : g[0], f),
      [b, B] = je.useState(_)
    let j = g.join()
    e.lng && (j = `${e.lng}${j}`)
    const P = SN(j),
      C = je.useRef(!0)
    je.useEffect(() => {
      const { bindI18n: $, bindI18nStore: Q } = u
      ;(C.current = !0),
        !v &&
          !h &&
          (e.lng
            ? m_(o, e.lng, g, () => {
                C.current && B(L)
              })
            : g_(o, g, () => {
                C.current && B(L)
              })),
        v && P && P !== j && C.current && B(L)
      const X = () => {
        C.current && B(L)
      }
      return (
        $ && o?.on($, X),
        Q && o?.store.on(Q, X),
        () => {
          ;(C.current = !1),
            o && $?.split(' ').forEach((A) => o.off(A, X)),
            Q && o && Q.split(' ').forEach((A) => o.store.off(A, X))
        }
      )
    }, [o, j]),
      je.useEffect(() => {
        C.current && v && B(_)
      }, [o, f, v])
    const O = [b, o, v]
    if (((O.t = b), (O.i18n = o), (O.ready = v), v || (!v && !h))) return O
    throw new Promise(($) => {
      e.lng ? m_(o, e.lng, g, () => $()) : g_(o, g, () => $())
    })
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
 */ function Gh() {
  return (
    (Gh = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }),
    Gh.apply(this, arguments)
  )
}
var Vs
;(function (t) {
  ;(t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE')
})(Vs || (Vs = {}))
const y_ = 'popstate'
function CN(t) {
  t === void 0 && (t = {})
  function e(r, i) {
    let { pathname: o, search: u, hash: h } = r.location
    return Rg(
      '',
      { pathname: o, search: u, hash: h },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : XE(i)
  }
  return xN(e, n, null, t)
}
function YE(t, e) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(e)
}
function RN() {
  return Math.random().toString(36).substr(2, 8)
}
function v_(t, e) {
  return { usr: t.state, key: t.key, idx: e }
}
function Rg(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    Gh(
      { pathname: typeof t == 'string' ? t : t.pathname, search: '', hash: '' },
      typeof e == 'string' ? JE(e) : e,
      { state: n, key: (e && e.key) || r || RN() }
    )
  )
}
function XE(t) {
  let { pathname: e = '/', search: n = '', hash: r = '' } = t
  return (
    n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  )
}
function JE(t) {
  let e = {}
  if (t) {
    let n = t.indexOf('#')
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)))
    let r = t.indexOf('?')
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t)
  }
  return e
}
function xN(t, e, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    u = i.history,
    h = Vs.Pop,
    f = null,
    g = v()
  g == null && ((g = 0), u.replaceState(Gh({}, u.state, { idx: g }), ''))
  function v() {
    return (u.state || { idx: null }).idx
  }
  function E() {
    h = Vs.Pop
    let j = v(),
      P = j == null ? null : j - g
    ;(g = j), f && f({ action: h, location: B.location, delta: P })
  }
  function _(j, P) {
    h = Vs.Push
    let C = Rg(B.location, j, P)
    g = v() + 1
    let O = v_(C, g),
      $ = B.createHref(C)
    try {
      u.pushState(O, '', $)
    } catch (Q) {
      if (Q instanceof DOMException && Q.name === 'DataCloneError') throw Q
      i.location.assign($)
    }
    o && f && f({ action: h, location: B.location, delta: 1 })
  }
  function L(j, P) {
    h = Vs.Replace
    let C = Rg(B.location, j, P)
    g = v()
    let O = v_(C, g),
      $ = B.createHref(C)
    u.replaceState(O, '', $),
      o && f && f({ action: h, location: B.location, delta: 0 })
  }
  function b(j) {
    let P = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      C = typeof j == 'string' ? j : XE(j)
    return (
      (C = C.replace(/ $/, '%20')),
      YE(
        P,
        'No window.location.(origin|href) available to create URL for href: ' +
          C
      ),
      new URL(C, P)
    )
  }
  let B = {
    get action() {
      return h
    },
    get location() {
      return t(i, u)
    },
    listen(j) {
      if (f) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(y_, E),
        (f = j),
        () => {
          i.removeEventListener(y_, E), (f = null)
        }
      )
    },
    createHref(j) {
      return e(i, j)
    },
    createURL: b,
    encodeLocation(j) {
      let P = b(j)
      return { pathname: P.pathname, search: P.search, hash: P.hash }
    },
    push: _,
    replace: L,
    go(j) {
      return u.go(j)
    },
  }
  return B
}
var __
;(function (t) {
  ;(t.data = 'data'),
    (t.deferred = 'deferred'),
    (t.redirect = 'redirect'),
    (t.error = 'error')
})(__ || (__ = {}))
function PN(t, e) {
  if (e === '/') return t
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null
  let n = e.endsWith('/') ? e.length - 1 : e.length,
    r = t.charAt(n)
  return r && r !== '/' ? null : t.slice(n) || '/'
}
const ZE = ['post', 'put', 'patch', 'delete']
new Set(ZE)
const kN = ['get', ...ZE]
new Set(kN)
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xg() {
  return (
    (xg = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }),
    xg.apply(this, arguments)
  )
}
const NN = je.createContext(null),
  eT = je.createContext(null)
function LN() {
  return je.useContext(eT) != null
}
function ON(t) {
  let {
    basename: e = '/',
    children: n = null,
    location: r,
    navigationType: i = Vs.Pop,
    navigator: o,
    static: u = !1,
    future: h,
  } = t
  LN() && YE(!1)
  let f = e.replace(/^\/*/, '/'),
    g = je.useMemo(
      () => ({
        basename: f,
        navigator: o,
        static: u,
        future: xg({ v7_relativeSplatPath: !1 }, h),
      }),
      [f, h, o, u]
    )
  typeof r == 'string' && (r = JE(r))
  let {
      pathname: v = '/',
      search: E = '',
      hash: _ = '',
      state: L = null,
      key: b = 'default',
    } = r,
    B = je.useMemo(() => {
      let j = PN(v, f)
      return j == null
        ? null
        : {
            location: { pathname: j, search: E, hash: _, state: L, key: b },
            navigationType: i,
          }
    }, [f, v, E, _, L, b, i])
  return B == null
    ? null
    : je.createElement(
        NN.Provider,
        { value: g },
        je.createElement(eT.Provider, { children: n, value: B })
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
 */ const DN = '6'
try {
  window.__reactRouterVersion = DN
} catch {}
const VN = 'startTransition',
  w_ = J2[VN]
function MN(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    o = je.useRef()
  o.current == null && (o.current = CN({ window: i, v5Compat: !0 }))
  let u = o.current,
    [h, f] = je.useState({ action: u.action, location: u.location }),
    { v7_startTransition: g } = r || {},
    v = je.useCallback(
      (E) => {
        g && w_ ? w_(() => f(E)) : f(E)
      },
      [f, g]
    )
  return (
    je.useLayoutEffect(() => u.listen(v), [u, v]),
    je.createElement(ON, {
      basename: e,
      children: n,
      location: h.location,
      navigationType: h.action,
      navigator: u,
      future: r,
    })
  )
}
var E_
;(function (t) {
  ;(t.UseScrollRestoration = 'useScrollRestoration'),
    (t.UseSubmit = 'useSubmit'),
    (t.UseSubmitFetcher = 'useSubmitFetcher'),
    (t.UseFetcher = 'useFetcher'),
    (t.useViewTransitionState = 'useViewTransitionState')
})(E_ || (E_ = {}))
var T_
;(function (t) {
  ;(t.UseFetcher = 'useFetcher'),
    (t.UseFetchers = 'useFetchers'),
    (t.UseScrollRestoration = 'useScrollRestoration')
})(T_ || (T_ = {}))
var S_ = {}
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
 */ const tT = function (t) {
    const e = []
    let n = 0
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r)
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
    }
    return e
  },
  bN = function (t) {
    const e = []
    let n = 0,
      r = 0
    for (; n < t.length; ) {
      const i = t[n++]
      if (i < 128) e[r++] = String.fromCharCode(i)
      else if (i > 191 && i < 224) {
        const o = t[n++]
        e[r++] = String.fromCharCode(((i & 31) << 6) | (o & 63))
      } else if (i > 239 && i < 365) {
        const o = t[n++],
          u = t[n++],
          h = t[n++],
          f =
            (((i & 7) << 18) | ((o & 63) << 12) | ((u & 63) << 6) | (h & 63)) -
            65536
        ;(e[r++] = String.fromCharCode(55296 + (f >> 10))),
          (e[r++] = String.fromCharCode(56320 + (f & 1023)))
      } else {
        const o = t[n++],
          u = t[n++]
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((o & 63) << 6) | (u & 63)
        )
      }
    }
    return e.join('')
  },
  nT = {
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
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error('encodeByteArray takes an array as a parameter')
      this.init_()
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = []
      for (let i = 0; i < t.length; i += 3) {
        const o = t[i],
          u = i + 1 < t.length,
          h = u ? t[i + 1] : 0,
          f = i + 2 < t.length,
          g = f ? t[i + 2] : 0,
          v = o >> 2,
          E = ((o & 3) << 4) | (h >> 4)
        let _ = ((h & 15) << 2) | (g >> 6),
          L = g & 63
        f || ((L = 64), u || (_ = 64)), r.push(n[v], n[E], n[_], n[L])
      }
      return r.join('')
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(tT(t), e)
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : bN(this.decodeStringToByteArray(t, e))
    },
    decodeStringToByteArray(t, e) {
      this.init_()
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = []
      for (let i = 0; i < t.length; ) {
        const o = n[t.charAt(i++)],
          h = i < t.length ? n[t.charAt(i)] : 0
        ++i
        const g = i < t.length ? n[t.charAt(i)] : 64
        ++i
        const E = i < t.length ? n[t.charAt(i)] : 64
        if ((++i, o == null || h == null || g == null || E == null))
          throw new FN()
        const _ = (o << 2) | (h >> 4)
        if ((r.push(_), g !== 64)) {
          const L = ((h << 4) & 240) | (g >> 2)
          if ((r.push(L), E !== 64)) {
            const b = ((g << 6) & 192) | E
            r.push(b)
          }
        }
      }
      return r
    },
    init_() {
      if (!this.byteToCharMap_) {
        ;(this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {})
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t))
      }
    },
  }
class FN extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError')
  }
}
const UN = function (t) {
    const e = tT(t)
    return nT.encodeByteArray(e, !0)
  },
  Qh = function (t) {
    return UN(t).replace(/\./g, '')
  },
  zN = function (t) {
    try {
      return nT.decodeString(t, !0)
    } catch (e) {
      console.error('base64Decode failed: ', e)
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
 */ function BN() {
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
 */ const $N = () => BN().__FIREBASE_DEFAULTS__,
  jN = () => {
    if (typeof process > 'u' || typeof S_ > 'u') return
    const t = S_.__FIREBASE_DEFAULTS__
    if (t) return JSON.parse(t)
  },
  WN = () => {
    if (typeof document > 'u') return
    let t
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const e = t && zN(t[1])
    return e && JSON.parse(e)
  },
  Hm = () => {
    try {
      return $N() || jN() || WN()
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)
      return
    }
  },
  qN = (t) => {
    var e, n
    return (n =
      (e = Hm()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t]
  },
  HN = (t) => {
    const e = qN(t)
    if (!e) return
    const n = e.lastIndexOf(':')
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`)
    const r = parseInt(e.substring(n + 1), 10)
    return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r]
  },
  rT = () => {
    var t
    return (t = Hm()) === null || t === void 0 ? void 0 : t.config
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
 */ class KN {
  constructor() {
    ;(this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        ;(this.resolve = e), (this.reject = n)
      }))
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r))
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
 */ function GN(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    )
  const n = { alg: 'none', type: 'JWT' },
    r = e || 'demo-project',
    i = t.iat || 0,
    o = t.sub || t.user_id
  if (!o)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
  const u = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: o,
      user_id: o,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    t
  )
  return [Qh(JSON.stringify(n)), Qh(JSON.stringify(u)), ''].join('.')
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
 */ function QN() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : ''
}
function YN() {
  var t
  const e = (t = Hm()) === null || t === void 0 ? void 0 : t.forceEnvironment
  if (e === 'node') return !0
  if (e === 'browser') return !1
  try {
    return Object.prototype.toString.call(global.process) === '[object process]'
  } catch {
    return !1
  }
}
function XN() {
  return (
    !YN() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome')
  )
}
function JN() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function ZN() {
  return new Promise((t, e) => {
    try {
      let n = !0
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r)
      ;(i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0)
      }),
        (i.onupgradeneeded = () => {
          n = !1
        }),
        (i.onerror = () => {
          var o
          e(((o = i.error) === null || o === void 0 ? void 0 : o.message) || '')
        })
    } catch (n) {
      e(n)
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
 */ const eL = 'FirebaseError'
class Ta extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = eL),
      Object.setPrototypeOf(this, Ta.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, iT.prototype.create)
  }
}
class iT {
  constructor(e, n, r) {
    ;(this.service = e), (this.serviceName = n), (this.errors = r)
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      o = this.errors[e],
      u = o ? tL(o, r) : 'Error',
      h = `${this.serviceName}: ${u} (${i}).`
    return new Ta(i, h, r)
  }
}
function tL(t, e) {
  return t.replace(nL, (n, r) => {
    const i = e[r]
    return i != null ? String(i) : `<${r}?>`
  })
}
const nL = /\{\$([^}]+)}/g
function Pg(t, e) {
  if (t === e) return !0
  const n = Object.keys(t),
    r = Object.keys(e)
  for (const i of n) {
    if (!r.includes(i)) return !1
    const o = t[i],
      u = e[i]
    if (I_(o) && I_(u)) {
      if (!Pg(o, u)) return !1
    } else if (o !== u) return !1
  }
  for (const i of r) if (!n.includes(i)) return !1
  return !0
}
function I_(t) {
  return t !== null && typeof t == 'object'
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
 */ function sT(t) {
  return t && t._delegate ? t._delegate : t
}
class ol {
  constructor(e, n, r) {
    ;(this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null)
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this
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
 */ const Ns = '[DEFAULT]'
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
 */ class rL {
  constructor(e, n) {
    ;(this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map())
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e)
    if (!this.instancesDeferred.has(n)) {
      const r = new KN()
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n })
          i && r.resolve(i)
        } catch {}
    }
    return this.instancesDeferred.get(n).promise
  }
  getImmediate(e) {
    var n
    const r = this.normalizeInstanceIdentifier(e?.identifier),
      i = (n = e?.optional) !== null && n !== void 0 ? n : !1
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r })
      } catch (o) {
        if (i) return null
        throw o
      }
    else {
      if (i) return null
      throw Error(`Service ${this.name} is not available`)
    }
  }
  getComponent() {
    return this.component
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`)
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`)
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (sL(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Ns })
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n)
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: i })
          r.resolve(o)
        } catch {}
      }
    }
  }
  clearInstance(e = Ns) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e)
  }
  async delete() {
    const e = Array.from(this.instances.values())
    await Promise.all([
      ...e.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => '_delete' in n).map((n) => n._delete()),
    ])
  }
  isComponentSet() {
    return this.component != null
  }
  isInitialized(e = Ns) {
    return this.instances.has(e)
  }
  getOptions(e = Ns) {
    return this.instancesOptions.get(e) || {}
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier)
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`)
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`)
    const i = this.getOrInitializeService({ instanceIdentifier: r, options: n })
    for (const [o, u] of this.instancesDeferred.entries()) {
      const h = this.normalizeInstanceIdentifier(o)
      r === h && u.resolve(i)
    }
    return i
  }
  onInit(e, n) {
    var r
    const i = this.normalizeInstanceIdentifier(n),
      o =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set()
    o.add(e), this.onInitCallbacks.set(i, o)
    const u = this.instances.get(i)
    return (
      u && e(u, i),
      () => {
        o.delete(e)
      }
    )
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n)
    if (r)
      for (const i of r)
        try {
          i(e, n)
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e)
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: iL(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r)
      } catch {}
    return r || null
  }
  normalizeInstanceIdentifier(e = Ns) {
    return this.component ? (this.component.multipleInstances ? e : Ns) : e
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
  }
}
function iL(t) {
  return t === Ns ? void 0 : t
}
function sL(t) {
  return t.instantiationMode === 'EAGER'
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
 */ class oL {
  constructor(e) {
    ;(this.name = e), (this.providers = new Map())
  }
  addComponent(e) {
    const n = this.getProvider(e.name)
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      )
    n.setComponent(e)
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e)
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e)
    const n = new rL(e, this)
    return this.providers.set(e, n), n
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
 */ var ke
;(function (t) {
  ;(t[(t.DEBUG = 0)] = 'DEBUG'),
    (t[(t.VERBOSE = 1)] = 'VERBOSE'),
    (t[(t.INFO = 2)] = 'INFO'),
    (t[(t.WARN = 3)] = 'WARN'),
    (t[(t.ERROR = 4)] = 'ERROR'),
    (t[(t.SILENT = 5)] = 'SILENT')
})(ke || (ke = {}))
const aL = {
    debug: ke.DEBUG,
    verbose: ke.VERBOSE,
    info: ke.INFO,
    warn: ke.WARN,
    error: ke.ERROR,
    silent: ke.SILENT,
  },
  uL = ke.INFO,
  lL = {
    [ke.DEBUG]: 'log',
    [ke.VERBOSE]: 'log',
    [ke.INFO]: 'info',
    [ke.WARN]: 'warn',
    [ke.ERROR]: 'error',
  },
  cL = (t, e, ...n) => {
    if (e < t.logLevel) return
    const r = new Date().toISOString(),
      i = lL[e]
    if (i) console[i](`[${r}]  ${t.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      )
  }
let oT = class {
  constructor(e) {
    ;(this.name = e),
      (this._logLevel = uL),
      (this._logHandler = cL),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(e) {
    if (!(e in ke))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
    this._logLevel = e
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? aL[e] : e
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
    this._userLogHandler && this._userLogHandler(this, ke.DEBUG, ...e),
      this._logHandler(this, ke.DEBUG, ...e)
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.VERBOSE, ...e),
      this._logHandler(this, ke.VERBOSE, ...e)
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.INFO, ...e),
      this._logHandler(this, ke.INFO, ...e)
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.WARN, ...e),
      this._logHandler(this, ke.WARN, ...e)
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ke.ERROR, ...e),
      this._logHandler(this, ke.ERROR, ...e)
  }
}
const hL = (t, e) => e.some((n) => t instanceof n)
let A_, C_
function fL() {
  return (
    A_ ||
    (A_ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  )
}
function dL() {
  return (
    C_ ||
    (C_ = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  )
}
const aT = new WeakMap(),
  kg = new WeakMap(),
  uT = new WeakMap(),
  Ep = new WeakMap(),
  Km = new WeakMap()
function pL(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('success', o), t.removeEventListener('error', u)
      },
      o = () => {
        n(Hi(t.result)), i()
      },
      u = () => {
        r(t.error), i()
      }
    t.addEventListener('success', o), t.addEventListener('error', u)
  })
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && aT.set(n, t)
      })
      .catch(() => {}),
    Km.set(e, t),
    e
  )
}
function gL(t) {
  if (kg.has(t)) return
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('complete', o),
          t.removeEventListener('error', u),
          t.removeEventListener('abort', u)
      },
      o = () => {
        n(), i()
      },
      u = () => {
        r(t.error || new DOMException('AbortError', 'AbortError')), i()
      }
    t.addEventListener('complete', o),
      t.addEventListener('error', u),
      t.addEventListener('abort', u)
  })
  kg.set(t, e)
}
let Ng = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === 'done') return kg.get(t)
      if (e === 'objectStoreNames') return t.objectStoreNames || uT.get(t)
      if (e === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0])
    }
    return Hi(t[e])
  },
  set(t, e, n) {
    return (t[e] = n), !0
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === 'done' || e === 'store')
      ? !0
      : e in t
  },
}
function mL(t) {
  Ng = t(Ng)
}
function yL(t) {
  return t === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Tp(this), e, ...n)
        return uT.set(r, e.sort ? e.sort() : [e]), Hi(r)
      }
    : dL().includes(t)
    ? function (...e) {
        return t.apply(Tp(this), e), Hi(aT.get(this))
      }
    : function (...e) {
        return Hi(t.apply(Tp(this), e))
      }
}
function vL(t) {
  return typeof t == 'function'
    ? yL(t)
    : (t instanceof IDBTransaction && gL(t), hL(t, fL()) ? new Proxy(t, Ng) : t)
}
function Hi(t) {
  if (t instanceof IDBRequest) return pL(t)
  if (Ep.has(t)) return Ep.get(t)
  const e = vL(t)
  return e !== t && (Ep.set(t, e), Km.set(e, t)), e
}
const Tp = (t) => Km.get(t)
function _L(t, e, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
  const u = indexedDB.open(t, e),
    h = Hi(u)
  return (
    r &&
      u.addEventListener('upgradeneeded', (f) => {
        r(Hi(u.result), f.oldVersion, f.newVersion, Hi(u.transaction), f)
      }),
    n && u.addEventListener('blocked', (f) => n(f.oldVersion, f.newVersion, f)),
    h
      .then((f) => {
        o && f.addEventListener('close', () => o()),
          i &&
            f.addEventListener('versionchange', (g) =>
              i(g.oldVersion, g.newVersion, g)
            )
      })
      .catch(() => {}),
    h
  )
}
const wL = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  EL = ['put', 'add', 'delete', 'clear'],
  Sp = new Map()
function R_(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == 'string')) return
  if (Sp.get(e)) return Sp.get(e)
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    i = EL.includes(n)
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || wL.includes(n))
  )
    return
  const o = async function (u, ...h) {
    const f = this.transaction(u, i ? 'readwrite' : 'readonly')
    let g = f.store
    return (
      r && (g = g.index(h.shift())),
      (await Promise.all([g[n](...h), i && f.done]))[0]
    )
  }
  return Sp.set(e, o), o
}
mL((t) => ({
  ...t,
  get: (e, n, r) => R_(e, n) || t.get(e, n, r),
  has: (e, n) => !!R_(e, n) || t.has(e, n),
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
 */ class TL {
  constructor(e) {
    this.container = e
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (SL(n)) {
          const r = n.getImmediate()
          return `${r.library}/${r.version}`
        } else return null
      })
      .filter((n) => n)
      .join(' ')
  }
}
function SL(t) {
  const e = t.getComponent()
  return e?.type === 'VERSION'
}
const Lg = '@firebase/app',
  x_ = '0.10.15'
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
 */ const ui = new oT('@firebase/app'),
  IL = '@firebase/app-compat',
  AL = '@firebase/analytics-compat',
  CL = '@firebase/analytics',
  RL = '@firebase/app-check-compat',
  xL = '@firebase/app-check',
  PL = '@firebase/auth',
  kL = '@firebase/auth-compat',
  NL = '@firebase/database',
  LL = '@firebase/data-connect',
  OL = '@firebase/database-compat',
  DL = '@firebase/functions',
  VL = '@firebase/functions-compat',
  ML = '@firebase/installations',
  bL = '@firebase/installations-compat',
  FL = '@firebase/messaging',
  UL = '@firebase/messaging-compat',
  zL = '@firebase/performance',
  BL = '@firebase/performance-compat',
  $L = '@firebase/remote-config',
  jL = '@firebase/remote-config-compat',
  WL = '@firebase/storage',
  qL = '@firebase/storage-compat',
  HL = '@firebase/firestore',
  KL = '@firebase/vertexai',
  GL = '@firebase/firestore-compat',
  QL = 'firebase',
  YL = '11.0.1'
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
 */ const Og = '[DEFAULT]',
  XL = {
    [Lg]: 'fire-core',
    [IL]: 'fire-core-compat',
    [CL]: 'fire-analytics',
    [AL]: 'fire-analytics-compat',
    [xL]: 'fire-app-check',
    [RL]: 'fire-app-check-compat',
    [PL]: 'fire-auth',
    [kL]: 'fire-auth-compat',
    [NL]: 'fire-rtdb',
    [LL]: 'fire-data-connect',
    [OL]: 'fire-rtdb-compat',
    [DL]: 'fire-fn',
    [VL]: 'fire-fn-compat',
    [ML]: 'fire-iid',
    [bL]: 'fire-iid-compat',
    [FL]: 'fire-fcm',
    [UL]: 'fire-fcm-compat',
    [zL]: 'fire-perf',
    [BL]: 'fire-perf-compat',
    [$L]: 'fire-rc',
    [jL]: 'fire-rc-compat',
    [WL]: 'fire-gcs',
    [qL]: 'fire-gcs-compat',
    [HL]: 'fire-fst',
    [GL]: 'fire-fst-compat',
    [KL]: 'fire-vertex',
    'fire-js': 'fire-js',
    [QL]: 'fire-js-all',
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
 */ const Yh = new Map(),
  JL = new Map(),
  Dg = new Map()
function P_(t, e) {
  try {
    t.container.addComponent(e)
  } catch (n) {
    ui.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    )
  }
}
function Xh(t) {
  const e = t.name
  if (Dg.has(e))
    return (
      ui.debug(`There were multiple attempts to register component ${e}.`), !1
    )
  Dg.set(e, t)
  for (const n of Yh.values()) P_(n, t)
  for (const n of JL.values()) P_(n, t)
  return !0
}
function ZL(t, e) {
  const n = t.container.getProvider('heartbeat').getImmediate({ optional: !0 })
  return n && n.triggerHeartbeat(), t.container.getProvider(e)
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
 */ const eO = {
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
  Ki = new iT('app', 'Firebase', eO)
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
 */ class tO {
  constructor(e, n, r) {
    ;(this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new ol('app', () => this, 'PUBLIC'))
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e)
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
  set isDeleted(e) {
    this._isDeleted = e
  }
  checkDestroyed() {
    if (this.isDeleted) throw Ki.create('app-deleted', { appName: this._name })
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
 */ const nO = YL
function lT(t, e = {}) {
  let n = t
  typeof e != 'object' && (e = { name: e })
  const r = Object.assign({ name: Og, automaticDataCollectionEnabled: !1 }, e),
    i = r.name
  if (typeof i != 'string' || !i)
    throw Ki.create('bad-app-name', { appName: String(i) })
  if ((n || (n = rT()), !n)) throw Ki.create('no-options')
  const o = Yh.get(i)
  if (o) {
    if (Pg(n, o.options) && Pg(r, o.config)) return o
    throw Ki.create('duplicate-app', { appName: i })
  }
  const u = new oL(i)
  for (const f of Dg.values()) u.addComponent(f)
  const h = new tO(n, r, u)
  return Yh.set(i, h), h
}
function rO(t = Og) {
  const e = Yh.get(t)
  if (!e && t === Og && rT()) return lT()
  if (!e) throw Ki.create('no-app', { appName: t })
  return e
}
function ta(t, e, n) {
  var r
  let i = (r = XL[t]) !== null && r !== void 0 ? r : t
  n && (i += `-${n}`)
  const o = i.match(/\s|\//),
    u = e.match(/\s|\//)
  if (o || u) {
    const h = [`Unable to register library "${i}" with version "${e}":`]
    o &&
      h.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      o && u && h.push('and'),
      u &&
        h.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      ui.warn(h.join(' '))
    return
  }
  Xh(new ol(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'))
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
 */ const iO = 'firebase-heartbeat-database',
  sO = 1,
  al = 'firebase-heartbeat-store'
let Ip = null
function cT() {
  return (
    Ip ||
      (Ip = _L(iO, sO, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(al)
              } catch (n) {
                console.warn(n)
              }
          }
        },
      }).catch((t) => {
        throw Ki.create('idb-open', { originalErrorMessage: t.message })
      })),
    Ip
  )
}
async function oO(t) {
  try {
    const n = (await cT()).transaction(al),
      r = await n.objectStore(al).get(hT(t))
    return await n.done, r
  } catch (e) {
    if (e instanceof Ta) ui.warn(e.message)
    else {
      const n = Ki.create('idb-get', { originalErrorMessage: e?.message })
      ui.warn(n.message)
    }
  }
}
async function k_(t, e) {
  try {
    const r = (await cT()).transaction(al, 'readwrite')
    await r.objectStore(al).put(e, hT(t)), await r.done
  } catch (n) {
    if (n instanceof Ta) ui.warn(n.message)
    else {
      const r = Ki.create('idb-set', { originalErrorMessage: n?.message })
      ui.warn(r.message)
    }
  }
}
function hT(t) {
  return `${t.name}!${t.options.appId}`
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
 */ const aO = 1024,
  uO = 30 * 24 * 60 * 60 * 1e3
class lO {
  constructor(e) {
    ;(this.container = e), (this._heartbeatsCache = null)
    const n = this.container.getProvider('app').getImmediate()
    ;(this._storage = new hO(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)))
  }
  async triggerHeartbeat() {
    var e, n
    try {
      const i = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        o = N_()
      return (((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null &&
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
              const h = new Date(u.date).valueOf()
              return Date.now() - h <= uO
            })),
          this._storage.overwrite(this._heartbeatsCache))
    } catch (r) {
      ui.warn(r)
    }
  }
  async getHeartbeatsHeader() {
    var e
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return ''
      const n = N_(),
        { heartbeatsToSend: r, unsentEntries: i } = cO(
          this._heartbeatsCache.heartbeats
        ),
        o = Qh(JSON.stringify({ version: 2, heartbeats: r }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        o
      )
    } catch (n) {
      return ui.warn(n), ''
    }
  }
}
function N_() {
  return new Date().toISOString().substring(0, 10)
}
function cO(t, e = aO) {
  const n = []
  let r = t.slice()
  for (const i of t) {
    const o = n.find((u) => u.agent === i.agent)
    if (o) {
      if ((o.dates.push(i.date), L_(n) > e)) {
        o.dates.pop()
        break
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), L_(n) > e)) {
      n.pop()
      break
    }
    r = r.slice(1)
  }
  return { heartbeatsToSend: n, unsentEntries: r }
}
class hO {
  constructor(e) {
    ;(this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
  }
  async runIndexedDBEnvironmentCheck() {
    return JN()
      ? ZN()
          .then(() => !0)
          .catch(() => !1)
      : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await oO(this.app)
      return n?.heartbeats ? n : { heartbeats: [] }
    } else return { heartbeats: [] }
  }
  async overwrite(e) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return k_(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      })
    } else return
  }
  async add(e) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read()
      return k_(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      })
    } else return
  }
}
function L_(t) {
  return Qh(JSON.stringify({ version: 2, heartbeats: t })).length
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
 */ function fO(t) {
  Xh(new ol('platform-logger', (e) => new TL(e), 'PRIVATE')),
    Xh(new ol('heartbeat', (e) => new lO(e), 'PRIVATE')),
    ta(Lg, x_, t),
    ta(Lg, x_, 'esm2017'),
    ta('fire-js', '')
}
fO('')
var O_ =
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
*/ var zs, fT
;(function () {
  var t
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(A, I) {
    function x() {}
    ;(x.prototype = I.prototype),
      (A.D = I.prototype),
      (A.prototype = new x()),
      (A.prototype.constructor = A),
      (A.C = function (N, V, z) {
        for (
          var k = Array(arguments.length - 2), lt = 2;
          lt < arguments.length;
          lt++
        )
          k[lt - 2] = arguments[lt]
        return I.prototype[V].apply(N, k)
      })
  }
  function n() {
    this.blockSize = -1
  }
  function r() {
    ;(this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s()
  }
  e(r, n),
    (r.prototype.s = function () {
      ;(this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0)
    })
  function i(A, I, x) {
    x || (x = 0)
    var N = Array(16)
    if (typeof I == 'string')
      for (var V = 0; 16 > V; ++V)
        N[V] =
          I.charCodeAt(x++) |
          (I.charCodeAt(x++) << 8) |
          (I.charCodeAt(x++) << 16) |
          (I.charCodeAt(x++) << 24)
    else
      for (V = 0; 16 > V; ++V)
        N[V] = I[x++] | (I[x++] << 8) | (I[x++] << 16) | (I[x++] << 24)
    ;(I = A.g[0]), (x = A.g[1]), (V = A.g[2])
    var z = A.g[3],
      k = (I + (z ^ (x & (V ^ z))) + N[0] + 3614090360) & 4294967295
    ;(I = x + (((k << 7) & 4294967295) | (k >>> 25))),
      (k = (z + (V ^ (I & (x ^ V))) + N[1] + 3905402710) & 4294967295),
      (z = I + (((k << 12) & 4294967295) | (k >>> 20))),
      (k = (V + (x ^ (z & (I ^ x))) + N[2] + 606105819) & 4294967295),
      (V = z + (((k << 17) & 4294967295) | (k >>> 15))),
      (k = (x + (I ^ (V & (z ^ I))) + N[3] + 3250441966) & 4294967295),
      (x = V + (((k << 22) & 4294967295) | (k >>> 10))),
      (k = (I + (z ^ (x & (V ^ z))) + N[4] + 4118548399) & 4294967295),
      (I = x + (((k << 7) & 4294967295) | (k >>> 25))),
      (k = (z + (V ^ (I & (x ^ V))) + N[5] + 1200080426) & 4294967295),
      (z = I + (((k << 12) & 4294967295) | (k >>> 20))),
      (k = (V + (x ^ (z & (I ^ x))) + N[6] + 2821735955) & 4294967295),
      (V = z + (((k << 17) & 4294967295) | (k >>> 15))),
      (k = (x + (I ^ (V & (z ^ I))) + N[7] + 4249261313) & 4294967295),
      (x = V + (((k << 22) & 4294967295) | (k >>> 10))),
      (k = (I + (z ^ (x & (V ^ z))) + N[8] + 1770035416) & 4294967295),
      (I = x + (((k << 7) & 4294967295) | (k >>> 25))),
      (k = (z + (V ^ (I & (x ^ V))) + N[9] + 2336552879) & 4294967295),
      (z = I + (((k << 12) & 4294967295) | (k >>> 20))),
      (k = (V + (x ^ (z & (I ^ x))) + N[10] + 4294925233) & 4294967295),
      (V = z + (((k << 17) & 4294967295) | (k >>> 15))),
      (k = (x + (I ^ (V & (z ^ I))) + N[11] + 2304563134) & 4294967295),
      (x = V + (((k << 22) & 4294967295) | (k >>> 10))),
      (k = (I + (z ^ (x & (V ^ z))) + N[12] + 1804603682) & 4294967295),
      (I = x + (((k << 7) & 4294967295) | (k >>> 25))),
      (k = (z + (V ^ (I & (x ^ V))) + N[13] + 4254626195) & 4294967295),
      (z = I + (((k << 12) & 4294967295) | (k >>> 20))),
      (k = (V + (x ^ (z & (I ^ x))) + N[14] + 2792965006) & 4294967295),
      (V = z + (((k << 17) & 4294967295) | (k >>> 15))),
      (k = (x + (I ^ (V & (z ^ I))) + N[15] + 1236535329) & 4294967295),
      (x = V + (((k << 22) & 4294967295) | (k >>> 10))),
      (k = (I + (V ^ (z & (x ^ V))) + N[1] + 4129170786) & 4294967295),
      (I = x + (((k << 5) & 4294967295) | (k >>> 27))),
      (k = (z + (x ^ (V & (I ^ x))) + N[6] + 3225465664) & 4294967295),
      (z = I + (((k << 9) & 4294967295) | (k >>> 23))),
      (k = (V + (I ^ (x & (z ^ I))) + N[11] + 643717713) & 4294967295),
      (V = z + (((k << 14) & 4294967295) | (k >>> 18))),
      (k = (x + (z ^ (I & (V ^ z))) + N[0] + 3921069994) & 4294967295),
      (x = V + (((k << 20) & 4294967295) | (k >>> 12))),
      (k = (I + (V ^ (z & (x ^ V))) + N[5] + 3593408605) & 4294967295),
      (I = x + (((k << 5) & 4294967295) | (k >>> 27))),
      (k = (z + (x ^ (V & (I ^ x))) + N[10] + 38016083) & 4294967295),
      (z = I + (((k << 9) & 4294967295) | (k >>> 23))),
      (k = (V + (I ^ (x & (z ^ I))) + N[15] + 3634488961) & 4294967295),
      (V = z + (((k << 14) & 4294967295) | (k >>> 18))),
      (k = (x + (z ^ (I & (V ^ z))) + N[4] + 3889429448) & 4294967295),
      (x = V + (((k << 20) & 4294967295) | (k >>> 12))),
      (k = (I + (V ^ (z & (x ^ V))) + N[9] + 568446438) & 4294967295),
      (I = x + (((k << 5) & 4294967295) | (k >>> 27))),
      (k = (z + (x ^ (V & (I ^ x))) + N[14] + 3275163606) & 4294967295),
      (z = I + (((k << 9) & 4294967295) | (k >>> 23))),
      (k = (V + (I ^ (x & (z ^ I))) + N[3] + 4107603335) & 4294967295),
      (V = z + (((k << 14) & 4294967295) | (k >>> 18))),
      (k = (x + (z ^ (I & (V ^ z))) + N[8] + 1163531501) & 4294967295),
      (x = V + (((k << 20) & 4294967295) | (k >>> 12))),
      (k = (I + (V ^ (z & (x ^ V))) + N[13] + 2850285829) & 4294967295),
      (I = x + (((k << 5) & 4294967295) | (k >>> 27))),
      (k = (z + (x ^ (V & (I ^ x))) + N[2] + 4243563512) & 4294967295),
      (z = I + (((k << 9) & 4294967295) | (k >>> 23))),
      (k = (V + (I ^ (x & (z ^ I))) + N[7] + 1735328473) & 4294967295),
      (V = z + (((k << 14) & 4294967295) | (k >>> 18))),
      (k = (x + (z ^ (I & (V ^ z))) + N[12] + 2368359562) & 4294967295),
      (x = V + (((k << 20) & 4294967295) | (k >>> 12))),
      (k = (I + (x ^ V ^ z) + N[5] + 4294588738) & 4294967295),
      (I = x + (((k << 4) & 4294967295) | (k >>> 28))),
      (k = (z + (I ^ x ^ V) + N[8] + 2272392833) & 4294967295),
      (z = I + (((k << 11) & 4294967295) | (k >>> 21))),
      (k = (V + (z ^ I ^ x) + N[11] + 1839030562) & 4294967295),
      (V = z + (((k << 16) & 4294967295) | (k >>> 16))),
      (k = (x + (V ^ z ^ I) + N[14] + 4259657740) & 4294967295),
      (x = V + (((k << 23) & 4294967295) | (k >>> 9))),
      (k = (I + (x ^ V ^ z) + N[1] + 2763975236) & 4294967295),
      (I = x + (((k << 4) & 4294967295) | (k >>> 28))),
      (k = (z + (I ^ x ^ V) + N[4] + 1272893353) & 4294967295),
      (z = I + (((k << 11) & 4294967295) | (k >>> 21))),
      (k = (V + (z ^ I ^ x) + N[7] + 4139469664) & 4294967295),
      (V = z + (((k << 16) & 4294967295) | (k >>> 16))),
      (k = (x + (V ^ z ^ I) + N[10] + 3200236656) & 4294967295),
      (x = V + (((k << 23) & 4294967295) | (k >>> 9))),
      (k = (I + (x ^ V ^ z) + N[13] + 681279174) & 4294967295),
      (I = x + (((k << 4) & 4294967295) | (k >>> 28))),
      (k = (z + (I ^ x ^ V) + N[0] + 3936430074) & 4294967295),
      (z = I + (((k << 11) & 4294967295) | (k >>> 21))),
      (k = (V + (z ^ I ^ x) + N[3] + 3572445317) & 4294967295),
      (V = z + (((k << 16) & 4294967295) | (k >>> 16))),
      (k = (x + (V ^ z ^ I) + N[6] + 76029189) & 4294967295),
      (x = V + (((k << 23) & 4294967295) | (k >>> 9))),
      (k = (I + (x ^ V ^ z) + N[9] + 3654602809) & 4294967295),
      (I = x + (((k << 4) & 4294967295) | (k >>> 28))),
      (k = (z + (I ^ x ^ V) + N[12] + 3873151461) & 4294967295),
      (z = I + (((k << 11) & 4294967295) | (k >>> 21))),
      (k = (V + (z ^ I ^ x) + N[15] + 530742520) & 4294967295),
      (V = z + (((k << 16) & 4294967295) | (k >>> 16))),
      (k = (x + (V ^ z ^ I) + N[2] + 3299628645) & 4294967295),
      (x = V + (((k << 23) & 4294967295) | (k >>> 9))),
      (k = (I + (V ^ (x | ~z)) + N[0] + 4096336452) & 4294967295),
      (I = x + (((k << 6) & 4294967295) | (k >>> 26))),
      (k = (z + (x ^ (I | ~V)) + N[7] + 1126891415) & 4294967295),
      (z = I + (((k << 10) & 4294967295) | (k >>> 22))),
      (k = (V + (I ^ (z | ~x)) + N[14] + 2878612391) & 4294967295),
      (V = z + (((k << 15) & 4294967295) | (k >>> 17))),
      (k = (x + (z ^ (V | ~I)) + N[5] + 4237533241) & 4294967295),
      (x = V + (((k << 21) & 4294967295) | (k >>> 11))),
      (k = (I + (V ^ (x | ~z)) + N[12] + 1700485571) & 4294967295),
      (I = x + (((k << 6) & 4294967295) | (k >>> 26))),
      (k = (z + (x ^ (I | ~V)) + N[3] + 2399980690) & 4294967295),
      (z = I + (((k << 10) & 4294967295) | (k >>> 22))),
      (k = (V + (I ^ (z | ~x)) + N[10] + 4293915773) & 4294967295),
      (V = z + (((k << 15) & 4294967295) | (k >>> 17))),
      (k = (x + (z ^ (V | ~I)) + N[1] + 2240044497) & 4294967295),
      (x = V + (((k << 21) & 4294967295) | (k >>> 11))),
      (k = (I + (V ^ (x | ~z)) + N[8] + 1873313359) & 4294967295),
      (I = x + (((k << 6) & 4294967295) | (k >>> 26))),
      (k = (z + (x ^ (I | ~V)) + N[15] + 4264355552) & 4294967295),
      (z = I + (((k << 10) & 4294967295) | (k >>> 22))),
      (k = (V + (I ^ (z | ~x)) + N[6] + 2734768916) & 4294967295),
      (V = z + (((k << 15) & 4294967295) | (k >>> 17))),
      (k = (x + (z ^ (V | ~I)) + N[13] + 1309151649) & 4294967295),
      (x = V + (((k << 21) & 4294967295) | (k >>> 11))),
      (k = (I + (V ^ (x | ~z)) + N[4] + 4149444226) & 4294967295),
      (I = x + (((k << 6) & 4294967295) | (k >>> 26))),
      (k = (z + (x ^ (I | ~V)) + N[11] + 3174756917) & 4294967295),
      (z = I + (((k << 10) & 4294967295) | (k >>> 22))),
      (k = (V + (I ^ (z | ~x)) + N[2] + 718787259) & 4294967295),
      (V = z + (((k << 15) & 4294967295) | (k >>> 17))),
      (k = (x + (z ^ (V | ~I)) + N[9] + 3951481745) & 4294967295),
      (A.g[0] = (A.g[0] + I) & 4294967295),
      (A.g[1] =
        (A.g[1] + (V + (((k << 21) & 4294967295) | (k >>> 11)))) & 4294967295),
      (A.g[2] = (A.g[2] + V) & 4294967295),
      (A.g[3] = (A.g[3] + z) & 4294967295)
  }
  ;(r.prototype.u = function (A, I) {
    I === void 0 && (I = A.length)
    for (var x = I - this.blockSize, N = this.B, V = this.h, z = 0; z < I; ) {
      if (V == 0) for (; z <= x; ) i(this, A, z), (z += this.blockSize)
      if (typeof A == 'string') {
        for (; z < I; )
          if (((N[V++] = A.charCodeAt(z++)), V == this.blockSize)) {
            i(this, N), (V = 0)
            break
          }
      } else
        for (; z < I; )
          if (((N[V++] = A[z++]), V == this.blockSize)) {
            i(this, N), (V = 0)
            break
          }
    }
    ;(this.h = V), (this.o += I)
  }),
    (r.prototype.v = function () {
      var A = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      )
      A[0] = 128
      for (var I = 1; I < A.length - 8; ++I) A[I] = 0
      var x = 8 * this.o
      for (I = A.length - 8; I < A.length; ++I) (A[I] = x & 255), (x /= 256)
      for (this.u(A), A = Array(16), I = x = 0; 4 > I; ++I)
        for (var N = 0; 32 > N; N += 8) A[x++] = (this.g[I] >>> N) & 255
      return A
    })
  function o(A, I) {
    var x = h
    return Object.prototype.hasOwnProperty.call(x, A) ? x[A] : (x[A] = I(A))
  }
  function u(A, I) {
    this.h = I
    for (var x = [], N = !0, V = A.length - 1; 0 <= V; V--) {
      var z = A[V] | 0
      ;(N && z == I) || ((x[V] = z), (N = !1))
    }
    this.g = x
  }
  var h = {}
  function f(A) {
    return -128 <= A && 128 > A
      ? o(A, function (I) {
          return new u([I | 0], 0 > I ? -1 : 0)
        })
      : new u([A | 0], 0 > A ? -1 : 0)
  }
  function g(A) {
    if (isNaN(A) || !isFinite(A)) return E
    if (0 > A) return j(g(-A))
    for (var I = [], x = 1, N = 0; A >= x; N++)
      (I[N] = (A / x) | 0), (x *= 4294967296)
    return new u(I, 0)
  }
  function v(A, I) {
    if (A.length == 0) throw Error('number format error: empty string')
    if (((I = I || 10), 2 > I || 36 < I))
      throw Error('radix out of range: ' + I)
    if (A.charAt(0) == '-') return j(v(A.substring(1), I))
    if (0 <= A.indexOf('-'))
      throw Error('number format error: interior "-" character')
    for (var x = g(Math.pow(I, 8)), N = E, V = 0; V < A.length; V += 8) {
      var z = Math.min(8, A.length - V),
        k = parseInt(A.substring(V, V + z), I)
      8 > z
        ? ((z = g(Math.pow(I, z))), (N = N.j(z).add(g(k))))
        : ((N = N.j(x)), (N = N.add(g(k))))
    }
    return N
  }
  var E = f(0),
    _ = f(1),
    L = f(16777216)
  ;(t = u.prototype),
    (t.m = function () {
      if (B(this)) return -j(this).m()
      for (var A = 0, I = 1, x = 0; x < this.g.length; x++) {
        var N = this.i(x)
        ;(A += (0 <= N ? N : 4294967296 + N) * I), (I *= 4294967296)
      }
      return A
    }),
    (t.toString = function (A) {
      if (((A = A || 10), 2 > A || 36 < A))
        throw Error('radix out of range: ' + A)
      if (b(this)) return '0'
      if (B(this)) return '-' + j(this).toString(A)
      for (var I = g(Math.pow(A, 6)), x = this, N = ''; ; ) {
        var V = $(x, I).g
        x = P(x, V.j(I))
        var z = ((0 < x.g.length ? x.g[0] : x.h) >>> 0).toString(A)
        if (((x = V), b(x))) return z + N
        for (; 6 > z.length; ) z = '0' + z
        N = z + N
      }
    }),
    (t.i = function (A) {
      return 0 > A ? 0 : A < this.g.length ? this.g[A] : this.h
    })
  function b(A) {
    if (A.h != 0) return !1
    for (var I = 0; I < A.g.length; I++) if (A.g[I] != 0) return !1
    return !0
  }
  function B(A) {
    return A.h == -1
  }
  t.l = function (A) {
    return (A = P(this, A)), B(A) ? -1 : b(A) ? 0 : 1
  }
  function j(A) {
    for (var I = A.g.length, x = [], N = 0; N < I; N++) x[N] = ~A.g[N]
    return new u(x, ~A.h).add(_)
  }
  ;(t.abs = function () {
    return B(this) ? j(this) : this
  }),
    (t.add = function (A) {
      for (
        var I = Math.max(this.g.length, A.g.length), x = [], N = 0, V = 0;
        V <= I;
        V++
      ) {
        var z = N + (this.i(V) & 65535) + (A.i(V) & 65535),
          k = (z >>> 16) + (this.i(V) >>> 16) + (A.i(V) >>> 16)
        ;(N = k >>> 16), (z &= 65535), (k &= 65535), (x[V] = (k << 16) | z)
      }
      return new u(x, x[x.length - 1] & -2147483648 ? -1 : 0)
    })
  function P(A, I) {
    return A.add(j(I))
  }
  t.j = function (A) {
    if (b(this) || b(A)) return E
    if (B(this)) return B(A) ? j(this).j(j(A)) : j(j(this).j(A))
    if (B(A)) return j(this.j(j(A)))
    if (0 > this.l(L) && 0 > A.l(L)) return g(this.m() * A.m())
    for (var I = this.g.length + A.g.length, x = [], N = 0; N < 2 * I; N++)
      x[N] = 0
    for (N = 0; N < this.g.length; N++)
      for (var V = 0; V < A.g.length; V++) {
        var z = this.i(N) >>> 16,
          k = this.i(N) & 65535,
          lt = A.i(V) >>> 16,
          en = A.i(V) & 65535
        ;(x[2 * N + 2 * V] += k * en),
          C(x, 2 * N + 2 * V),
          (x[2 * N + 2 * V + 1] += z * en),
          C(x, 2 * N + 2 * V + 1),
          (x[2 * N + 2 * V + 1] += k * lt),
          C(x, 2 * N + 2 * V + 1),
          (x[2 * N + 2 * V + 2] += z * lt),
          C(x, 2 * N + 2 * V + 2)
      }
    for (N = 0; N < I; N++) x[N] = (x[2 * N + 1] << 16) | x[2 * N]
    for (N = I; N < 2 * I; N++) x[N] = 0
    return new u(x, 0)
  }
  function C(A, I) {
    for (; (A[I] & 65535) != A[I]; )
      (A[I + 1] += A[I] >>> 16), (A[I] &= 65535), I++
  }
  function O(A, I) {
    ;(this.g = A), (this.h = I)
  }
  function $(A, I) {
    if (b(I)) throw Error('division by zero')
    if (b(A)) return new O(E, E)
    if (B(A)) return (I = $(j(A), I)), new O(j(I.g), j(I.h))
    if (B(I)) return (I = $(A, j(I))), new O(j(I.g), I.h)
    if (30 < A.g.length) {
      if (B(A) || B(I))
        throw Error('slowDivide_ only works with positive integers.')
      for (var x = _, N = I; 0 >= N.l(A); ) (x = Q(x)), (N = Q(N))
      var V = X(x, 1),
        z = X(N, 1)
      for (N = X(N, 2), x = X(x, 2); !b(N); ) {
        var k = z.add(N)
        0 >= k.l(A) && ((V = V.add(x)), (z = k)), (N = X(N, 1)), (x = X(x, 1))
      }
      return (I = P(A, V.j(I))), new O(V, I)
    }
    for (V = E; 0 <= A.l(I); ) {
      for (
        x = Math.max(1, Math.floor(A.m() / I.m())),
          N = Math.ceil(Math.log(x) / Math.LN2),
          N = 48 >= N ? 1 : Math.pow(2, N - 48),
          z = g(x),
          k = z.j(I);
        B(k) || 0 < k.l(A);

      )
        (x -= N), (z = g(x)), (k = z.j(I))
      b(z) && (z = _), (V = V.add(z)), (A = P(A, k))
    }
    return new O(V, A)
  }
  ;(t.A = function (A) {
    return $(this, A).h
  }),
    (t.and = function (A) {
      for (
        var I = Math.max(this.g.length, A.g.length), x = [], N = 0;
        N < I;
        N++
      )
        x[N] = this.i(N) & A.i(N)
      return new u(x, this.h & A.h)
    }),
    (t.or = function (A) {
      for (
        var I = Math.max(this.g.length, A.g.length), x = [], N = 0;
        N < I;
        N++
      )
        x[N] = this.i(N) | A.i(N)
      return new u(x, this.h | A.h)
    }),
    (t.xor = function (A) {
      for (
        var I = Math.max(this.g.length, A.g.length), x = [], N = 0;
        N < I;
        N++
      )
        x[N] = this.i(N) ^ A.i(N)
      return new u(x, this.h ^ A.h)
    })
  function Q(A) {
    for (var I = A.g.length + 1, x = [], N = 0; N < I; N++)
      x[N] = (A.i(N) << 1) | (A.i(N - 1) >>> 31)
    return new u(x, A.h)
  }
  function X(A, I) {
    var x = I >> 5
    I %= 32
    for (var N = A.g.length - x, V = [], z = 0; z < N; z++)
      V[z] =
        0 < I ? (A.i(z + x) >>> I) | (A.i(z + x + 1) << (32 - I)) : A.i(z + x)
    return new u(V, A.h)
  }
  ;(r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (fT = r),
    (u.prototype.add = u.prototype.add),
    (u.prototype.multiply = u.prototype.j),
    (u.prototype.modulo = u.prototype.A),
    (u.prototype.compare = u.prototype.l),
    (u.prototype.toNumber = u.prototype.m),
    (u.prototype.toString = u.prototype.toString),
    (u.prototype.getBits = u.prototype.i),
    (u.fromNumber = g),
    (u.fromString = v),
    (zs = u)
}).apply(
  typeof O_ < 'u'
    ? O_
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
var th =
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
*/ var dT, Au, pT, vh, Vg, gT, mT, yT
;(function () {
  var t,
    e =
      typeof Object.defineProperties == 'function'
        ? Object.defineProperty
        : function (l, d, m) {
            return (
              l == Array.prototype || l == Object.prototype || (l[d] = m.value),
              l
            )
          }
  function n(l) {
    l = [
      typeof globalThis == 'object' && globalThis,
      l,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof th == 'object' && th,
    ]
    for (var d = 0; d < l.length; ++d) {
      var m = l[d]
      if (m && m.Math == Math) return m
    }
    throw Error('Cannot find global object')
  }
  var r = n(this)
  function i(l, d) {
    if (d)
      e: {
        var m = r
        l = l.split('.')
        for (var T = 0; T < l.length - 1; T++) {
          var U = l[T]
          if (!(U in m)) break e
          m = m[U]
        }
        ;(l = l[l.length - 1]),
          (T = m[l]),
          (d = d(T)),
          d != T &&
            d != null &&
            e(m, l, { configurable: !0, writable: !0, value: d })
      }
  }
  function o(l, d) {
    l instanceof String && (l += '')
    var m = 0,
      T = !1,
      U = {
        next: function () {
          if (!T && m < l.length) {
            var q = m++
            return { value: d(q, l[q]), done: !1 }
          }
          return (T = !0), { done: !0, value: void 0 }
        },
      }
    return (
      (U[Symbol.iterator] = function () {
        return U
      }),
      U
    )
  }
  i('Array.prototype.values', function (l) {
    return (
      l ||
      function () {
        return o(this, function (d, m) {
          return m
        })
      }
    )
  })
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var u = u || {},
    h = this || self
  function f(l) {
    var d = typeof l
    return (
      (d = d != 'object' ? d : l ? (Array.isArray(l) ? 'array' : d) : 'null'),
      d == 'array' || (d == 'object' && typeof l.length == 'number')
    )
  }
  function g(l) {
    var d = typeof l
    return (d == 'object' && l != null) || d == 'function'
  }
  function v(l, d, m) {
    return l.call.apply(l.bind, arguments)
  }
  function E(l, d, m) {
    if (!l) throw Error()
    if (2 < arguments.length) {
      var T = Array.prototype.slice.call(arguments, 2)
      return function () {
        var U = Array.prototype.slice.call(arguments)
        return Array.prototype.unshift.apply(U, T), l.apply(d, U)
      }
    }
    return function () {
      return l.apply(d, arguments)
    }
  }
  function _(l, d, m) {
    return (
      (_ =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? v
          : E),
      _.apply(null, arguments)
    )
  }
  function L(l, d) {
    var m = Array.prototype.slice.call(arguments, 1)
    return function () {
      var T = m.slice()
      return T.push.apply(T, arguments), l.apply(this, T)
    }
  }
  function b(l, d) {
    function m() {}
    ;(m.prototype = d.prototype),
      (l.aa = d.prototype),
      (l.prototype = new m()),
      (l.prototype.constructor = l),
      (l.Qb = function (T, U, q) {
        for (
          var te = Array(arguments.length - 2), be = 2;
          be < arguments.length;
          be++
        )
          te[be - 2] = arguments[be]
        return d.prototype[U].apply(T, te)
      })
  }
  function B(l) {
    const d = l.length
    if (0 < d) {
      const m = Array(d)
      for (let T = 0; T < d; T++) m[T] = l[T]
      return m
    }
    return []
  }
  function j(l, d) {
    for (let m = 1; m < arguments.length; m++) {
      const T = arguments[m]
      if (f(T)) {
        const U = l.length || 0,
          q = T.length || 0
        l.length = U + q
        for (let te = 0; te < q; te++) l[U + te] = T[te]
      } else l.push(T)
    }
  }
  class P {
    constructor(d, m) {
      ;(this.i = d), (this.j = m), (this.h = 0), (this.g = null)
    }
    get() {
      let d
      return (
        0 < this.h
          ? (this.h--, (d = this.g), (this.g = d.next), (d.next = null))
          : (d = this.i()),
        d
      )
    }
  }
  function C(l) {
    return /^[\s\xa0]*$/.test(l)
  }
  function O() {
    var l = h.navigator
    return l && (l = l.userAgent) ? l : ''
  }
  function $(l) {
    return $[' '](l), l
  }
  $[' '] = function () {}
  var Q =
    O().indexOf('Gecko') != -1 &&
    !(O().toLowerCase().indexOf('webkit') != -1 && O().indexOf('Edge') == -1) &&
    !(O().indexOf('Trident') != -1 || O().indexOf('MSIE') != -1) &&
    O().indexOf('Edge') == -1
  function X(l, d, m) {
    for (const T in l) d.call(m, l[T], T, l)
  }
  function A(l, d) {
    for (const m in l) d.call(void 0, l[m], m, l)
  }
  function I(l) {
    const d = {}
    for (const m in l) d[m] = l[m]
    return d
  }
  const x =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    )
  function N(l, d) {
    let m, T
    for (let U = 1; U < arguments.length; U++) {
      T = arguments[U]
      for (m in T) l[m] = T[m]
      for (let q = 0; q < x.length; q++)
        (m = x[q]), Object.prototype.hasOwnProperty.call(T, m) && (l[m] = T[m])
    }
  }
  function V(l) {
    var d = 1
    l = l.split(':')
    const m = []
    for (; 0 < d && l.length; ) m.push(l.shift()), d--
    return l.length && m.push(l.join(':')), m
  }
  function z(l) {
    h.setTimeout(() => {
      throw l
    }, 0)
  }
  function k() {
    var l = ue
    let d = null
    return (
      l.g &&
        ((d = l.g), (l.g = l.g.next), l.g || (l.h = null), (d.next = null)),
      d
    )
  }
  class lt {
    constructor() {
      this.h = this.g = null
    }
    add(d, m) {
      const T = en.get()
      T.set(d, m), this.h ? (this.h.next = T) : (this.g = T), (this.h = T)
    }
  }
  var en = new P(
    () => new Mn(),
    (l) => l.reset()
  )
  class Mn {
    constructor() {
      this.next = this.g = this.h = null
    }
    set(d, m) {
      ;(this.h = d), (this.g = m), (this.next = null)
    }
    reset() {
      this.next = this.g = this.h = null
    }
  }
  let mt,
    Z = !1,
    ue = new lt(),
    le = () => {
      const l = h.Promise.resolve(void 0)
      mt = () => {
        l.then(Se)
      }
    }
  var Se = () => {
    for (var l; (l = k()); ) {
      try {
        l.h.call(l.g)
      } catch (m) {
        z(m)
      }
      var d = en
      d.j(l), 100 > d.h && (d.h++, (l.next = d.g), (d.g = l))
    }
    Z = !1
  }
  function Be() {
    ;(this.s = this.s), (this.C = this.C)
  }
  ;(Be.prototype.s = !1),
    (Be.prototype.ma = function () {
      this.s || ((this.s = !0), this.N())
    }),
    (Be.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()()
    })
  function Ze(l, d) {
    ;(this.type = l), (this.g = this.target = d), (this.defaultPrevented = !1)
  }
  Ze.prototype.h = function () {
    this.defaultPrevented = !0
  }
  var er = (function () {
    if (!h.addEventListener || !Object.defineProperty) return !1
    var l = !1,
      d = Object.defineProperty({}, 'passive', {
        get: function () {
          l = !0
        },
      })
    try {
      const m = () => {}
      h.addEventListener('test', m, d), h.removeEventListener('test', m, d)
    } catch {}
    return l
  })()
  function Bt(l, d) {
    if (
      (Ze.call(this, l ? l.type : ''),
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
      l)
    ) {
      var m = (this.type = l.type),
        T =
          l.changedTouches && l.changedTouches.length
            ? l.changedTouches[0]
            : null
      if (
        ((this.target = l.target || l.srcElement),
        (this.g = d),
        (d = l.relatedTarget))
      ) {
        if (Q) {
          e: {
            try {
              $(d.nodeName)
              var U = !0
              break e
            } catch {}
            U = !1
          }
          U || (d = null)
        }
      } else
        m == 'mouseover'
          ? (d = l.fromElement)
          : m == 'mouseout' && (d = l.toElement)
      ;(this.relatedTarget = d),
        T
          ? ((this.clientX = T.clientX !== void 0 ? T.clientX : T.pageX),
            (this.clientY = T.clientY !== void 0 ? T.clientY : T.pageY),
            (this.screenX = T.screenX || 0),
            (this.screenY = T.screenY || 0))
          : ((this.clientX = l.clientX !== void 0 ? l.clientX : l.pageX),
            (this.clientY = l.clientY !== void 0 ? l.clientY : l.pageY),
            (this.screenX = l.screenX || 0),
            (this.screenY = l.screenY || 0)),
        (this.button = l.button),
        (this.key = l.key || ''),
        (this.ctrlKey = l.ctrlKey),
        (this.altKey = l.altKey),
        (this.shiftKey = l.shiftKey),
        (this.metaKey = l.metaKey),
        (this.pointerId = l.pointerId || 0),
        (this.pointerType =
          typeof l.pointerType == 'string'
            ? l.pointerType
            : fn[l.pointerType] || ''),
        (this.state = l.state),
        (this.i = l),
        l.defaultPrevented && Bt.aa.h.call(this)
    }
  }
  b(Bt, Ze)
  var fn = { 2: 'touch', 3: 'pen', 4: 'mouse' }
  Bt.prototype.h = function () {
    Bt.aa.h.call(this)
    var l = this.i
    l.preventDefault ? l.preventDefault() : (l.returnValue = !1)
  }
  var tr = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    is = 0
  function ss(l, d, m, T, U) {
    ;(this.listener = l),
      (this.proxy = null),
      (this.src = d),
      (this.type = m),
      (this.capture = !!T),
      (this.ha = U),
      (this.key = ++is),
      (this.da = this.fa = !1)
  }
  function Js(l) {
    ;(l.da = !0),
      (l.listener = null),
      (l.proxy = null),
      (l.src = null),
      (l.ha = null)
  }
  function Dr(l) {
    ;(this.src = l), (this.g = {}), (this.h = 0)
  }
  Dr.prototype.add = function (l, d, m, T, U) {
    var q = l.toString()
    ;(l = this.g[q]), l || ((l = this.g[q] = []), this.h++)
    var te = Zs(l, d, T, U)
    return (
      -1 < te
        ? ((d = l[te]), m || (d.fa = !1))
        : ((d = new ss(d, this.src, q, !!T, U)), (d.fa = m), l.push(d)),
      d
    )
  }
  function hi(l, d) {
    var m = d.type
    if (m in l.g) {
      var T = l.g[m],
        U = Array.prototype.indexOf.call(T, d, void 0),
        q
      ;(q = 0 <= U) && Array.prototype.splice.call(T, U, 1),
        q && (Js(d), l.g[m].length == 0 && (delete l.g[m], l.h--))
    }
  }
  function Zs(l, d, m, T) {
    for (var U = 0; U < l.length; ++U) {
      var q = l[U]
      if (!q.da && q.listener == d && q.capture == !!m && q.ha == T) return U
    }
    return -1
  }
  var tn = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    Vr = {}
  function Tl(l, d, m, T, U) {
    if (Array.isArray(d)) {
      for (var q = 0; q < d.length; q++) Tl(l, d[q], m, T, U)
      return null
    }
    return (
      (m = di(m)),
      l && l[tr]
        ? l.K(d, m, g(T) ? !!T.capture : !!T, U)
        : nr(l, d, m, !1, T, U)
    )
  }
  function nr(l, d, m, T, U, q) {
    if (!d) throw Error('Invalid event type')
    var te = g(U) ? !!U.capture : !!U,
      be = fi(l)
    if ((be || (l[tn] = be = new Dr(l)), (m = be.add(d, m, T, te, q)), m.proxy))
      return m
    if (
      ((T = Sl()),
      (m.proxy = T),
      (T.src = l),
      (T.listener = m),
      l.addEventListener)
    )
      er || (U = te),
        U === void 0 && (U = !1),
        l.addEventListener(d.toString(), T, U)
    else if (l.attachEvent) l.attachEvent(dn(d.toString()), T)
    else if (l.addListener && l.removeListener) l.addListener(T)
    else throw Error('addEventListener and attachEvent are unavailable.')
    return m
  }
  function Sl() {
    function l(m) {
      return d.call(l.src, l.listener, m)
    }
    const d = os
    return l
  }
  function Il(l, d, m, T, U) {
    if (Array.isArray(d))
      for (var q = 0; q < d.length; q++) Il(l, d[q], m, T, U)
    else
      (T = g(T) ? !!T.capture : !!T),
        (m = di(m)),
        l && l[tr]
          ? ((l = l.i),
            (d = String(d).toString()),
            d in l.g &&
              ((q = l.g[d]),
              (m = Zs(q, m, T, U)),
              -1 < m &&
                (Js(q[m]),
                Array.prototype.splice.call(q, m, 1),
                q.length == 0 && (delete l.g[d], l.h--))))
          : l &&
            (l = fi(l)) &&
            ((d = l.g[d.toString()]),
            (l = -1),
            d && (l = Zs(d, m, T, U)),
            (m = -1 < l ? d[l] : null) && Mr(m))
  }
  function Mr(l) {
    if (typeof l != 'number' && l && !l.da) {
      var d = l.src
      if (d && d[tr]) hi(d.i, l)
      else {
        var m = l.type,
          T = l.proxy
        d.removeEventListener
          ? d.removeEventListener(m, T, l.capture)
          : d.detachEvent
          ? d.detachEvent(dn(m), T)
          : d.addListener && d.removeListener && d.removeListener(T),
          (m = fi(d))
            ? (hi(m, l), m.h == 0 && ((m.src = null), (d[tn] = null)))
            : Js(l)
      }
    }
  }
  function dn(l) {
    return l in Vr ? Vr[l] : (Vr[l] = 'on' + l)
  }
  function os(l, d) {
    if (l.da) l = !0
    else {
      d = new Bt(d, this)
      var m = l.listener,
        T = l.ha || l.src
      l.fa && Mr(l), (l = m.call(T, d))
    }
    return l
  }
  function fi(l) {
    return (l = l[tn]), l instanceof Dr ? l : null
  }
  var Ca = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  function di(l) {
    return typeof l == 'function'
      ? l
      : (l[Ca] ||
          (l[Ca] = function (d) {
            return l.handleEvent(d)
          }),
        l[Ca])
  }
  function Ct() {
    Be.call(this), (this.i = new Dr(this)), (this.M = this), (this.F = null)
  }
  b(Ct, Be),
    (Ct.prototype[tr] = !0),
    (Ct.prototype.removeEventListener = function (l, d, m, T) {
      Il(this, l, d, m, T)
    })
  function ct(l, d) {
    var m,
      T = l.F
    if (T) for (m = []; T; T = T.F) m.push(T)
    if (((l = l.M), (T = d.type || d), typeof d == 'string')) d = new Ze(d, l)
    else if (d instanceof Ze) d.target = d.target || l
    else {
      var U = d
      ;(d = new Ze(T, l)), N(d, U)
    }
    if (((U = !0), m))
      for (var q = m.length - 1; 0 <= q; q--) {
        var te = (d.g = m[q])
        U = rr(te, T, !0, d) && U
      }
    if (
      ((te = d.g = l),
      (U = rr(te, T, !0, d) && U),
      (U = rr(te, T, !1, d) && U),
      m)
    )
      for (q = 0; q < m.length; q++)
        (te = d.g = m[q]), (U = rr(te, T, !1, d) && U)
  }
  ;(Ct.prototype.N = function () {
    if ((Ct.aa.N.call(this), this.i)) {
      var l = this.i,
        d
      for (d in l.g) {
        for (var m = l.g[d], T = 0; T < m.length; T++) Js(m[T])
        delete l.g[d], l.h--
      }
    }
    this.F = null
  }),
    (Ct.prototype.K = function (l, d, m, T) {
      return this.i.add(String(l), d, !1, m, T)
    }),
    (Ct.prototype.L = function (l, d, m, T) {
      return this.i.add(String(l), d, !0, m, T)
    })
  function rr(l, d, m, T) {
    if (((d = l.i.g[String(d)]), !d)) return !0
    d = d.concat()
    for (var U = !0, q = 0; q < d.length; ++q) {
      var te = d[q]
      if (te && !te.da && te.capture == m) {
        var be = te.listener,
          wt = te.ha || te.src
        te.fa && hi(l.i, te), (U = be.call(wt, T) !== !1 && U)
      }
    }
    return U && !T.defaultPrevented
  }
  function eo(l, d, m) {
    if (typeof l == 'function') m && (l = _(l, m))
    else if (l && typeof l.handleEvent == 'function') l = _(l.handleEvent, l)
    else throw Error('Invalid listener argument')
    return 2147483647 < Number(d) ? -1 : h.setTimeout(l, d || 0)
  }
  function to(l) {
    l.g = eo(() => {
      ;(l.g = null), l.i && ((l.i = !1), to(l))
    }, l.l)
    const d = l.h
    ;(l.h = null), l.m.apply(null, d)
  }
  class Ra extends Be {
    constructor(d, m) {
      super(),
        (this.m = d),
        (this.l = m),
        (this.h = null),
        (this.i = !1),
        (this.g = null)
    }
    j(d) {
      ;(this.h = arguments), this.g ? (this.i = !0) : to(this)
    }
    N() {
      super.N(),
        this.g &&
          (h.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null))
    }
  }
  function br(l) {
    Be.call(this), (this.h = l), (this.g = {})
  }
  b(br, Be)
  var no = []
  function ro(l) {
    X(
      l.g,
      function (d, m) {
        this.g.hasOwnProperty(m) && Mr(d)
      },
      l
    ),
      (l.g = {})
  }
  ;(br.prototype.N = function () {
    br.aa.N.call(this), ro(this)
  }),
    (br.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented')
    })
  var as = h.JSON.stringify,
    xa = h.JSON.parse,
    Pa = class {
      stringify(l) {
        return h.JSON.stringify(l, void 0)
      }
      parse(l) {
        return h.JSON.parse(l, void 0)
      }
    }
  function ka() {}
  ka.prototype.h = null
  function Al(l) {
    return l.h || (l.h = l.i())
  }
  function Cl() {}
  var pi = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' }
  function io() {
    Ze.call(this, 'd')
  }
  b(io, Ze)
  function Na() {
    Ze.call(this, 'c')
  }
  b(Na, Ze)
  var Fr = {},
    Rl = null
  function so() {
    return (Rl = Rl || new Ct())
  }
  Fr.La = 'serverreachability'
  function La(l) {
    Ze.call(this, Fr.La, l)
  }
  b(La, Ze)
  function us(l) {
    const d = so()
    ct(d, new La(d))
  }
  Fr.STAT_EVENT = 'statevent'
  function xl(l, d) {
    Ze.call(this, Fr.STAT_EVENT, l), (this.stat = d)
  }
  b(xl, Ze)
  function Ot(l) {
    const d = so()
    ct(d, new xl(d, l))
  }
  Fr.Ma = 'timingevent'
  function oo(l, d) {
    Ze.call(this, Fr.Ma, l), (this.size = d)
  }
  b(oo, Ze)
  function ls(l, d) {
    if (typeof l != 'function')
      throw Error('Fn must not be null and must be a function')
    return h.setTimeout(function () {
      l()
    }, d)
  }
  function Ur() {
    this.g = !0
  }
  Ur.prototype.xa = function () {
    this.g = !1
  }
  function zf(l, d, m, T, U, q) {
    l.info(function () {
      if (l.g)
        if (q)
          for (var te = '', be = q.split('&'), wt = 0; wt < be.length; wt++) {
            var Re = be[wt].split('=')
            if (1 < Re.length) {
              var Ue = Re[0]
              Re = Re[1]
              var yt = Ue.split('_')
              te =
                2 <= yt.length && yt[1] == 'type'
                  ? te + (Ue + '=' + Re + '&')
                  : te + (Ue + '=redacted&')
            }
          }
        else te = null
      else te = q
      return (
        'XMLHTTP REQ (' +
        T +
        ') [attempt ' +
        U +
        ']: ' +
        d +
        `
` +
        m +
        `
` +
        te
      )
    })
  }
  function Bf(l, d, m, T, U, q, te) {
    l.info(function () {
      return (
        'XMLHTTP RESP (' +
        T +
        ') [ attempt ' +
        U +
        ']: ' +
        d +
        `
` +
        m +
        `
` +
        q +
        ' ' +
        te
      )
    })
  }
  function gi(l, d, m, T) {
    l.info(function () {
      return 'XMLHTTP TEXT (' + d + '): ' + jf(l, m) + (T ? ' ' + T : '')
    })
  }
  function $f(l, d) {
    l.info(function () {
      return 'TIMEOUT: ' + d
    })
  }
  Ur.prototype.info = function () {}
  function jf(l, d) {
    if (!l.g) return d
    if (!d) return null
    try {
      var m = JSON.parse(d)
      if (m) {
        for (l = 0; l < m.length; l++)
          if (Array.isArray(m[l])) {
            var T = m[l]
            if (!(2 > T.length)) {
              var U = T[1]
              if (Array.isArray(U) && !(1 > U.length)) {
                var q = U[0]
                if (q != 'noop' && q != 'stop' && q != 'close')
                  for (var te = 1; te < U.length; te++) U[te] = ''
              }
            }
          }
      }
      return as(m)
    } catch {
      return d
    }
  }
  var ao = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    Pl = {
      lb: 'complete',
      Hb: 'success',
      Ja: 'error',
      Ia: 'abort',
      zb: 'ready',
      Ab: 'readystatechange',
      TIMEOUT: 'timeout',
      vb: 'incrementaldata',
      yb: 'progress',
      ob: 'downloadprogress',
      Pb: 'uploadprogress',
    },
    Oa
  function cs() {}
  b(cs, ka),
    (cs.prototype.g = function () {
      return new XMLHttpRequest()
    }),
    (cs.prototype.i = function () {
      return {}
    }),
    (Oa = new cs())
  function vr(l, d, m, T) {
    ;(this.j = l),
      (this.i = d),
      (this.l = m),
      (this.R = T || 1),
      (this.U = new br(this)),
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
      (this.h = new kl())
  }
  function kl() {
    ;(this.i = null), (this.g = ''), (this.h = !1)
  }
  var Nl = {},
    Da = {}
  function Va(l, d, m) {
    ;(l.L = 1), (l.v = yi(bn(d))), (l.m = m), (l.P = !0), Ll(l, null)
  }
  function Ll(l, d) {
    ;(l.F = Date.now()), zr(l), (l.A = bn(l.v))
    var m = l.A,
      T = l.R
    Array.isArray(T) || (T = [String(T)]),
      ja(m.i, 't', T),
      (l.C = 0),
      (m = l.j.J),
      (l.h = new kl()),
      (l.g = Zl(l.j, m ? d : null, !l.m)),
      0 < l.O && (l.M = new Ra(_(l.Y, l, l.g), l.O)),
      (d = l.U),
      (m = l.g),
      (T = l.ca)
    var U = 'readystatechange'
    Array.isArray(U) || (U && (no[0] = U.toString()), (U = no))
    for (var q = 0; q < U.length; q++) {
      var te = Tl(m, U[q], T || d.handleEvent, !1, d.h || d)
      if (!te) break
      d.g[te.key] = te
    }
    ;(d = l.H ? I(l.H) : {}),
      l.m
        ? (l.u || (l.u = 'POST'),
          (d['Content-Type'] = 'application/x-www-form-urlencoded'),
          l.g.ea(l.A, l.u, l.m, d))
        : ((l.u = 'GET'), l.g.ea(l.A, l.u, null, d)),
      us(),
      zf(l.i, l.u, l.A, l.l, l.R, l.m)
  }
  ;(vr.prototype.ca = function (l) {
    l = l.target
    const d = this.M
    d && Dt(l) == 3 ? d.j() : this.Y(l)
  }),
    (vr.prototype.Y = function (l) {
      try {
        if (l == this.g)
          e: {
            const yt = Dt(this.g)
            var d = this.g.Ba()
            const Bn = this.g.Z()
            if (
              !(3 > yt) &&
              (yt != 3 || (this.g && (this.h.h || this.g.oa() || Ha(this.g))))
            ) {
              this.J ||
                yt != 4 ||
                d == 7 ||
                (d == 8 || 0 >= Bn ? us(3) : us(2)),
                Ma(this)
              var m = this.g.Z()
              this.X = m
              t: if (hs(this)) {
                var T = Ha(this.g)
                l = ''
                var U = T.length,
                  q = Dt(this.g) == 4
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    _r(this), fs(this)
                    var te = ''
                    break t
                  }
                  this.h.i = new h.TextDecoder()
                }
                for (d = 0; d < U; d++)
                  (this.h.h = !0),
                    (l += this.h.i.decode(T[d], { stream: !(q && d == U - 1) }))
                ;(T.length = 0), (this.h.g += l), (this.C = 0), (te = this.h.g)
              } else te = this.g.oa()
              if (
                ((this.o = m == 200),
                Bf(this.i, this.u, this.A, this.l, this.R, yt, m),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var be,
                        wt = this.g
                      if (
                        (be = wt.g
                          ? wt.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !C(be)
                      ) {
                        var Re = be
                        break t
                      }
                    }
                    Re = null
                  }
                  if ((m = Re))
                    gi(
                      this.i,
                      this.l,
                      m,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      uo(this, m)
                  else {
                    ;(this.o = !1), (this.s = 3), Ot(12), _r(this), fs(this)
                    break e
                  }
                }
                if (this.P) {
                  m = !0
                  let pn
                  for (; !this.J && this.C < te.length; )
                    if (((pn = Wf(this, te)), pn == Da)) {
                      yt == 4 && ((this.s = 4), Ot(14), (m = !1)),
                        gi(this.i, this.l, null, '[Incomplete Response]')
                      break
                    } else if (pn == Nl) {
                      ;(this.s = 4),
                        Ot(15),
                        gi(this.i, this.l, te, '[Invalid Chunk]'),
                        (m = !1)
                      break
                    } else gi(this.i, this.l, pn, null), uo(this, pn)
                  if (
                    (hs(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    yt != 4 ||
                      te.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), Ot(16), (m = !1)),
                    (this.o = this.o && m),
                    !m)
                  )
                    gi(this.i, this.l, te, '[Invalid Chunked Response]'),
                      _r(this),
                      fs(this)
                  else if (0 < te.length && !this.W) {
                    this.W = !0
                    var Ue = this.j
                    Ue.g == this &&
                      Ue.ba &&
                      !Ue.M &&
                      (Ue.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          te.length
                      ),
                      zn(Ue),
                      (Ue.M = !0),
                      Ot(11))
                  }
                } else gi(this.i, this.l, te, null), uo(this, te)
                yt == 4 && _r(this),
                  this.o &&
                    !this.J &&
                    (yt == 4 ? He(this.j, this) : ((this.o = !1), zr(this)))
              } else
                Ka(this.g),
                  m == 400 && 0 < te.indexOf('Unknown SID')
                    ? ((this.s = 3), Ot(12))
                    : ((this.s = 0), Ot(13)),
                  _r(this),
                  fs(this)
            }
          }
      } catch {
      } finally {
      }
    })
  function hs(l) {
    return l.g ? l.u == 'GET' && l.L != 2 && l.j.Ca : !1
  }
  function Wf(l, d) {
    var m = l.C,
      T = d.indexOf(
        `
`,
        m
      )
    return T == -1
      ? Da
      : ((m = Number(d.substring(m, T))),
        isNaN(m)
          ? Nl
          : ((T += 1),
            T + m > d.length
              ? Da
              : ((d = d.slice(T, T + m)), (l.C = T + m), d)))
  }
  vr.prototype.cancel = function () {
    ;(this.J = !0), _r(this)
  }
  function zr(l) {
    ;(l.S = Date.now() + l.I), Ol(l, l.I)
  }
  function Ol(l, d) {
    if (l.B != null) throw Error('WatchDog timer not null')
    l.B = ls(_(l.ba, l), d)
  }
  function Ma(l) {
    l.B && (h.clearTimeout(l.B), (l.B = null))
  }
  vr.prototype.ba = function () {
    this.B = null
    const l = Date.now()
    0 <= l - this.S
      ? ($f(this.i, this.A),
        this.L != 2 && (us(), Ot(17)),
        _r(this),
        (this.s = 2),
        fs(this))
      : Ol(this, this.S - l)
  }
  function fs(l) {
    l.j.G == 0 || l.J || He(l.j, l)
  }
  function _r(l) {
    Ma(l)
    var d = l.M
    d && typeof d.ma == 'function' && d.ma(),
      (l.M = null),
      ro(l.U),
      l.g && ((d = l.g), (l.g = null), d.abort(), d.ma())
  }
  function uo(l, d) {
    try {
      var m = l.j
      if (m.G != 0 && (m.g == l || ba(m.h, l))) {
        if (!l.K && ba(m.h, l) && m.G == 3) {
          try {
            var T = m.Da.g.parse(d)
          } catch {
            T = null
          }
          if (Array.isArray(T) && T.length == 3) {
            var U = T
            if (U[0] == 0) {
              e: if (!m.u) {
                if (m.g)
                  if (m.g.F + 3e3 < l.F) wi(m), gs(m)
                  else break e
                go(m), Ot(18)
              }
            } else
              (m.za = U[1]),
                0 < m.za - m.T &&
                  37500 > U[2] &&
                  m.F &&
                  m.v == 0 &&
                  !m.C &&
                  (m.C = ls(_(m.Za, m), 6e3))
            if (1 >= bl(m.h) && m.ca) {
              try {
                m.ca()
              } catch {}
              m.ca = void 0
            }
          } else sr(m, 11)
        } else if (((l.K || m.g == l) && wi(m), !C(d)))
          for (U = m.Da.g.parse(d), d = 0; d < U.length; d++) {
            let Re = U[d]
            if (((m.T = Re[0]), (Re = Re[1]), m.G == 2))
              if (Re[0] == 'c') {
                ;(m.K = Re[1]), (m.ia = Re[2])
                const Ue = Re[3]
                Ue != null && ((m.la = Ue), m.j.info('VER=' + m.la))
                const yt = Re[4]
                yt != null && ((m.Aa = yt), m.j.info('SVER=' + m.Aa))
                const Bn = Re[5]
                Bn != null &&
                  typeof Bn == 'number' &&
                  0 < Bn &&
                  ((T = 1.5 * Bn),
                  (m.L = T),
                  m.j.info('backChannelRequestTimeoutMs_=' + T)),
                  (T = m)
                const pn = l.g
                if (pn) {
                  const ws = pn.g
                    ? pn.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null
                  if (ws) {
                    var q = T.h
                    q.g ||
                      (ws.indexOf('spdy') == -1 &&
                        ws.indexOf('quic') == -1 &&
                        ws.indexOf('h2') == -1) ||
                      ((q.j = q.l),
                      (q.g = new Set()),
                      q.h && (lo(q, q.h), (q.h = null)))
                  }
                  if (T.D) {
                    const Ya = pn.g
                      ? pn.g.getResponseHeader('X-HTTP-Session-Id')
                      : null
                    Ya && ((T.ya = Ya), qe(T.I, T.D, Ya))
                  }
                }
                ;(m.G = 3),
                  m.l && m.l.ua(),
                  m.ba &&
                    ((m.R = Date.now() - l.F),
                    m.j.info('Handshake RTT: ' + m.R + 'ms')),
                  (T = m)
                var te = l
                if (((T.qa = mo(T, T.J ? T.ia : null, T.W)), te.K)) {
                  Fa(T.h, te)
                  var be = te,
                    wt = T.L
                  wt && (be.I = wt), be.B && (Ma(be), zr(be)), (T.g = te)
                } else Xl(T)
                0 < m.i.length && ms(m)
              } else (Re[0] != 'stop' && Re[0] != 'close') || sr(m, 7)
            else
              m.G == 3 &&
                (Re[0] == 'stop' || Re[0] == 'close'
                  ? Re[0] == 'stop'
                    ? sr(m, 7)
                    : po(m)
                  : Re[0] != 'noop' && m.l && m.l.ta(Re),
                (m.v = 0))
          }
      }
      us(4)
    } catch {}
  }
  var Dl = class {
    constructor(l, d) {
      ;(this.g = l), (this.map = d)
    }
  }
  function Vl(l) {
    ;(this.l = l || 10),
      h.PerformanceNavigationTiming
        ? ((l = h.performance.getEntriesByType('navigation')),
          (l =
            0 < l.length &&
            (l[0].nextHopProtocol == 'hq' || l[0].nextHopProtocol == 'h2')))
        : (l = !!(
            h.chrome &&
            h.chrome.loadTimes &&
            h.chrome.loadTimes() &&
            h.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = l ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = [])
  }
  function Ml(l) {
    return l.h ? !0 : l.g ? l.g.size >= l.j : !1
  }
  function bl(l) {
    return l.h ? 1 : l.g ? l.g.size : 0
  }
  function ba(l, d) {
    return l.h ? l.h == d : l.g ? l.g.has(d) : !1
  }
  function lo(l, d) {
    l.g ? l.g.add(d) : (l.h = d)
  }
  function Fa(l, d) {
    l.h && l.h == d ? (l.h = null) : l.g && l.g.has(d) && l.g.delete(d)
  }
  Vl.prototype.cancel = function () {
    if (((this.i = Ua(this)), this.h)) this.h.cancel(), (this.h = null)
    else if (this.g && this.g.size !== 0) {
      for (const l of this.g.values()) l.cancel()
      this.g.clear()
    }
  }
  function Ua(l) {
    if (l.h != null) return l.i.concat(l.h.D)
    if (l.g != null && l.g.size !== 0) {
      let d = l.i
      for (const m of l.g.values()) d = d.concat(m.D)
      return d
    }
    return B(l.i)
  }
  function za(l) {
    if (l.V && typeof l.V == 'function') return l.V()
    if (
      (typeof Map < 'u' && l instanceof Map) ||
      (typeof Set < 'u' && l instanceof Set)
    )
      return Array.from(l.values())
    if (typeof l == 'string') return l.split('')
    if (f(l)) {
      for (var d = [], m = l.length, T = 0; T < m; T++) d.push(l[T])
      return d
    }
    ;(d = []), (m = 0)
    for (T in l) d[m++] = l[T]
    return d
  }
  function qf(l) {
    if (l.na && typeof l.na == 'function') return l.na()
    if (!l.V || typeof l.V != 'function') {
      if (typeof Map < 'u' && l instanceof Map) return Array.from(l.keys())
      if (!(typeof Set < 'u' && l instanceof Set)) {
        if (f(l) || typeof l == 'string') {
          var d = []
          l = l.length
          for (var m = 0; m < l; m++) d.push(m)
          return d
        }
        ;(d = []), (m = 0)
        for (const T in l) d[m++] = T
        return d
      }
    }
  }
  function Ba(l, d) {
    if (l.forEach && typeof l.forEach == 'function') l.forEach(d, void 0)
    else if (f(l) || typeof l == 'string')
      Array.prototype.forEach.call(l, d, void 0)
    else
      for (var m = qf(l), T = za(l), U = T.length, q = 0; q < U; q++)
        d.call(void 0, T[q], m && m[q], l)
  }
  var ds = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  )
  function Fl(l, d) {
    if (l) {
      l = l.split('&')
      for (var m = 0; m < l.length; m++) {
        var T = l[m].indexOf('='),
          U = null
        if (0 <= T) {
          var q = l[m].substring(0, T)
          U = l[m].substring(T + 1)
        } else q = l[m]
        d(q, U ? decodeURIComponent(U.replace(/\+/g, ' ')) : '')
      }
    }
  }
  function Br(l) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      l instanceof Br)
    ) {
      ;(this.h = l.h),
        ps(this, l.j),
        (this.o = l.o),
        (this.g = l.g),
        mi(this, l.s),
        (this.l = l.l)
      var d = l.i,
        m = new vi()
      ;(m.i = d.i),
        d.g && ((m.g = new Map(d.g)), (m.h = d.h)),
        Ul(this, m),
        (this.m = l.m)
    } else
      l && (d = String(l).match(ds))
        ? ((this.h = !1),
          ps(this, d[1] || '', !0),
          (this.o = $r(d[2] || '')),
          (this.g = $r(d[3] || '', !0)),
          mi(this, d[4]),
          (this.l = $r(d[5] || '', !0)),
          Ul(this, d[6] || '', !0),
          (this.m = $r(d[7] || '')))
        : ((this.h = !1), (this.i = new vi(null, this.h)))
  }
  Br.prototype.toString = function () {
    var l = [],
      d = this.j
    d && l.push(Fn(d, $a, !0), ':')
    var m = this.g
    return (
      (m || d == 'file') &&
        (l.push('//'),
        (d = this.o) && l.push(Fn(d, $a, !0), '@'),
        l.push(
          encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (m = this.s),
        m != null && l.push(':', String(m))),
      (m = this.l) &&
        (this.g && m.charAt(0) != '/' && l.push('/'),
        l.push(Fn(m, m.charAt(0) == '/' ? Bl : Hf, !0))),
      (m = this.i.toString()) && l.push('?', m),
      (m = this.m) && l.push('#', Fn(m, jl)),
      l.join('')
    )
  }
  function bn(l) {
    return new Br(l)
  }
  function ps(l, d, m) {
    ;(l.j = m ? $r(d, !0) : d), l.j && (l.j = l.j.replace(/:$/, ''))
  }
  function mi(l, d) {
    if (d) {
      if (((d = Number(d)), isNaN(d) || 0 > d))
        throw Error('Bad port number ' + d)
      l.s = d
    } else l.s = null
  }
  function Ul(l, d, m) {
    d instanceof vi
      ? ((l.i = d), Kf(l.i, l.h))
      : (m || (d = Fn(d, $l)), (l.i = new vi(d, l.h)))
  }
  function qe(l, d, m) {
    l.i.set(d, m)
  }
  function yi(l) {
    return (
      qe(
        l,
        'zx',
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      l
    )
  }
  function $r(l, d) {
    return l
      ? d
        ? decodeURI(l.replace(/%25/g, '%2525'))
        : decodeURIComponent(l)
      : ''
  }
  function Fn(l, d, m) {
    return typeof l == 'string'
      ? ((l = encodeURI(l).replace(d, zl)),
        m && (l = l.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        l)
      : null
  }
  function zl(l) {
    return (
      (l = l.charCodeAt(0)),
      '%' + ((l >> 4) & 15).toString(16) + (l & 15).toString(16)
    )
  }
  var $a = /[#\/\?@]/g,
    Hf = /[#\?:]/g,
    Bl = /[#\?]/g,
    $l = /[#\?@]/g,
    jl = /#/g
  function vi(l, d) {
    ;(this.h = this.g = null), (this.i = l || null), (this.j = !!d)
  }
  function wr(l) {
    l.g ||
      ((l.g = new Map()),
      (l.h = 0),
      l.i &&
        Fl(l.i, function (d, m) {
          l.add(decodeURIComponent(d.replace(/\+/g, ' ')), m)
        }))
  }
  ;(t = vi.prototype),
    (t.add = function (l, d) {
      wr(this), (this.i = null), (l = _i(this, l))
      var m = this.g.get(l)
      return m || this.g.set(l, (m = [])), m.push(d), (this.h += 1), this
    })
  function Wl(l, d) {
    wr(l),
      (d = _i(l, d)),
      l.g.has(d) && ((l.i = null), (l.h -= l.g.get(d).length), l.g.delete(d))
  }
  function ql(l, d) {
    return wr(l), (d = _i(l, d)), l.g.has(d)
  }
  ;(t.forEach = function (l, d) {
    wr(this),
      this.g.forEach(function (m, T) {
        m.forEach(function (U) {
          l.call(d, U, T, this)
        }, this)
      }, this)
  }),
    (t.na = function () {
      wr(this)
      const l = Array.from(this.g.values()),
        d = Array.from(this.g.keys()),
        m = []
      for (let T = 0; T < d.length; T++) {
        const U = l[T]
        for (let q = 0; q < U.length; q++) m.push(d[T])
      }
      return m
    }),
    (t.V = function (l) {
      wr(this)
      let d = []
      if (typeof l == 'string')
        ql(this, l) && (d = d.concat(this.g.get(_i(this, l))))
      else {
        l = Array.from(this.g.values())
        for (let m = 0; m < l.length; m++) d = d.concat(l[m])
      }
      return d
    }),
    (t.set = function (l, d) {
      return (
        wr(this),
        (this.i = null),
        (l = _i(this, l)),
        ql(this, l) && (this.h -= this.g.get(l).length),
        this.g.set(l, [d]),
        (this.h += 1),
        this
      )
    }),
    (t.get = function (l, d) {
      return l ? ((l = this.V(l)), 0 < l.length ? String(l[0]) : d) : d
    })
  function ja(l, d, m) {
    Wl(l, d),
      0 < m.length && ((l.i = null), l.g.set(_i(l, d), B(m)), (l.h += m.length))
  }
  t.toString = function () {
    if (this.i) return this.i
    if (!this.g) return ''
    const l = [],
      d = Array.from(this.g.keys())
    for (var m = 0; m < d.length; m++) {
      var T = d[m]
      const q = encodeURIComponent(String(T)),
        te = this.V(T)
      for (T = 0; T < te.length; T++) {
        var U = q
        te[T] !== '' && (U += '=' + encodeURIComponent(String(te[T]))),
          l.push(U)
      }
    }
    return (this.i = l.join('&'))
  }
  function _i(l, d) {
    return (d = String(d)), l.j && (d = d.toLowerCase()), d
  }
  function Kf(l, d) {
    d &&
      !l.j &&
      (wr(l),
      (l.i = null),
      l.g.forEach(function (m, T) {
        var U = T.toLowerCase()
        T != U && (Wl(this, T), ja(this, U, m))
      }, l)),
      (l.j = d)
  }
  function Gf(l, d) {
    const m = new Ur()
    if (h.Image) {
      const T = new Image()
      ;(T.onload = L(Un, m, 'TestLoadImage: loaded', !0, d, T)),
        (T.onerror = L(Un, m, 'TestLoadImage: error', !1, d, T)),
        (T.onabort = L(Un, m, 'TestLoadImage: abort', !1, d, T)),
        (T.ontimeout = L(Un, m, 'TestLoadImage: timeout', !1, d, T)),
        h.setTimeout(function () {
          T.ontimeout && T.ontimeout()
        }, 1e4),
        (T.src = l)
    } else d(!1)
  }
  function Qf(l, d) {
    const m = new Ur(),
      T = new AbortController(),
      U = setTimeout(() => {
        T.abort(), Un(m, 'TestPingServer: timeout', !1, d)
      }, 1e4)
    fetch(l, { signal: T.signal })
      .then((q) => {
        clearTimeout(U),
          q.ok
            ? Un(m, 'TestPingServer: ok', !0, d)
            : Un(m, 'TestPingServer: server error', !1, d)
      })
      .catch(() => {
        clearTimeout(U), Un(m, 'TestPingServer: error', !1, d)
      })
  }
  function Un(l, d, m, T, U) {
    try {
      U &&
        ((U.onload = null),
        (U.onerror = null),
        (U.onabort = null),
        (U.ontimeout = null)),
        T(m)
    } catch {}
  }
  function Yf() {
    this.g = new Pa()
  }
  function Xf(l, d, m) {
    const T = m || ''
    try {
      Ba(l, function (U, q) {
        let te = U
        g(U) && (te = as(U)), d.push(T + q + '=' + encodeURIComponent(te))
      })
    } catch (U) {
      throw (d.push(T + 'type=' + encodeURIComponent('_badmap')), U)
    }
  }
  function co(l) {
    ;(this.l = l.Ub || null), (this.j = l.eb || !1)
  }
  b(co, ka),
    (co.prototype.g = function () {
      return new ho(this.l, this.j)
    }),
    (co.prototype.i = (function (l) {
      return function () {
        return l
      }
    })({}))
  function ho(l, d) {
    Ct.call(this),
      (this.D = l),
      (this.o = d),
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
  b(ho, Ct),
    (t = ho.prototype),
    (t.open = function (l, d) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.B = l), (this.A = d), (this.readyState = 1), Ve(this)
    }),
    (t.send = function (l) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '))
      this.g = !0
      const d = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      }
      l && (d.body = l),
        (this.D || h)
          .fetch(new Request(this.A, d))
          .then(this.Sa.bind(this), this.ga.bind(this))
    }),
    (t.abort = function () {
      ;(this.response = this.responseText = ''),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel('Request was aborted.').catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Me(this)),
        (this.readyState = 0)
    }),
    (t.Sa = function (l) {
      if (
        this.g &&
        ((this.l = l),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = l.headers),
          (this.readyState = 2),
          Ve(this)),
        this.g && ((this.readyState = 3), Ve(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          l.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this))
        else if (typeof h.ReadableStream < 'u' && 'body' in l) {
          if (((this.j = l.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              )
            this.response = []
          } else
            (this.response = this.responseText = ''),
              (this.v = new TextDecoder())
          Hl(this)
        } else l.text().then(this.Ra.bind(this), this.ga.bind(this))
    })
  function Hl(l) {
    l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))
  }
  ;(t.Pa = function (l) {
    if (this.g) {
      if (this.o && l.value) this.response.push(l.value)
      else if (!this.o) {
        var d = l.value ? l.value : new Uint8Array(0)
        ;(d = this.v.decode(d, { stream: !l.done })) &&
          (this.response = this.responseText += d)
      }
      l.done ? Me(this) : Ve(this), this.readyState == 3 && Hl(this)
    }
  }),
    (t.Ra = function (l) {
      this.g && ((this.response = this.responseText = l), Me(this))
    }),
    (t.Qa = function (l) {
      this.g && ((this.response = l), Me(this))
    }),
    (t.ga = function () {
      this.g && Me(this)
    })
  function Me(l) {
    ;(l.readyState = 4), (l.l = null), (l.j = null), (l.v = null), Ve(l)
  }
  ;(t.setRequestHeader = function (l, d) {
    this.u.append(l, d)
  }),
    (t.getResponseHeader = function (l) {
      return (this.h && this.h.get(l.toLowerCase())) || ''
    }),
    (t.getAllResponseHeaders = function () {
      if (!this.h) return ''
      const l = [],
        d = this.h.entries()
      for (var m = d.next(); !m.done; )
        (m = m.value), l.push(m[0] + ': ' + m[1]), (m = d.next())
      return l.join(`\r
`)
    })
  function Ve(l) {
    l.onreadystatechange && l.onreadystatechange.call(l)
  }
  Object.defineProperty(ho.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include'
    },
    set: function (l) {
      this.m = l ? 'include' : 'same-origin'
    },
  })
  function Kl(l) {
    let d = ''
    return (
      X(l, function (m, T) {
        ;(d += T),
          (d += ':'),
          (d += m),
          (d += `\r
`)
      }),
      d
    )
  }
  function Wa(l, d, m) {
    e: {
      for (T in m) {
        var T = !1
        break e
      }
      T = !0
    }
    T ||
      ((m = Kl(m)),
      typeof l == 'string'
        ? m != null && encodeURIComponent(String(m))
        : qe(l, d, m))
  }
  function Xe(l) {
    Ct.call(this),
      (this.headers = new Map()),
      (this.o = l || null),
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
  b(Xe, Ct)
  var Jf = /^https?$/i,
    Zf = ['POST', 'PUT']
  ;(t = Xe.prototype),
    (t.Ha = function (l) {
      this.J = l
    }),
    (t.ea = function (l, d, m, T) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            l
        )
      ;(d = d ? d.toUpperCase() : 'GET'),
        (this.D = l),
        (this.l = ''),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : Oa.g()),
        (this.v = this.o ? Al(this.o) : Al(Oa)),
        (this.g.onreadystatechange = _(this.Ea, this))
      try {
        ;(this.B = !0), this.g.open(d, String(l), !0), (this.B = !1)
      } catch (q) {
        Gl(this, q)
        return
      }
      if (((l = m || ''), (m = new Map(this.headers)), T))
        if (Object.getPrototypeOf(T) === Object.prototype)
          for (var U in T) m.set(U, T[U])
        else if (typeof T.keys == 'function' && typeof T.get == 'function')
          for (const q of T.keys()) m.set(q, T.get(q))
        else throw Error('Unknown input type for opt_headers: ' + String(T))
      ;(T = Array.from(m.keys()).find(
        (q) => q.toLowerCase() == 'content-type'
      )),
        (U = h.FormData && l instanceof h.FormData),
        !(0 <= Array.prototype.indexOf.call(Zf, d, void 0)) ||
          T ||
          U ||
          m.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          )
      for (const [q, te] of m) this.g.setRequestHeader(q, te)
      this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J)
      try {
        fo(this), (this.u = !0), this.g.send(l), (this.u = !1)
      } catch (q) {
        Gl(this, q)
      }
    })
  function Gl(l, d) {
    ;(l.h = !1),
      l.g && ((l.j = !0), l.g.abort(), (l.j = !1)),
      (l.l = d),
      (l.m = 5),
      qa(l),
      st(l)
  }
  function qa(l) {
    l.A || ((l.A = !0), ct(l, 'complete'), ct(l, 'error'))
  }
  ;(t.abort = function (l) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = l || 7),
      ct(this, 'complete'),
      ct(this, 'abort'),
      st(this))
  }),
    (t.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        st(this, !0)),
        Xe.aa.N.call(this)
    }),
    (t.Ea = function () {
      this.s || (this.B || this.u || this.j ? Ql(this) : this.bb())
    }),
    (t.bb = function () {
      Ql(this)
    })
  function Ql(l) {
    if (l.h && typeof u < 'u' && (!l.v[1] || Dt(l) != 4 || l.Z() != 2)) {
      if (l.u && Dt(l) == 4) eo(l.Ea, 0, l)
      else if ((ct(l, 'readystatechange'), Dt(l) == 4)) {
        l.h = !1
        try {
          const te = l.Z()
          e: switch (te) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var d = !0
              break e
            default:
              d = !1
          }
          var m
          if (!(m = d)) {
            var T
            if ((T = te === 0)) {
              var U = String(l.D).match(ds)[1] || null
              !U &&
                h.self &&
                h.self.location &&
                (U = h.self.location.protocol.slice(0, -1)),
                (T = !Jf.test(U ? U.toLowerCase() : ''))
            }
            m = T
          }
          if (m) ct(l, 'complete'), ct(l, 'success')
          else {
            l.m = 6
            try {
              var q = 2 < Dt(l) ? l.g.statusText : ''
            } catch {
              q = ''
            }
            ;(l.l = q + ' [' + l.Z() + ']'), qa(l)
          }
        } finally {
          st(l)
        }
      }
    }
  }
  function st(l, d) {
    if (l.g) {
      fo(l)
      const m = l.g,
        T = l.v[0] ? () => {} : null
      ;(l.g = null), (l.v = null), d || ct(l, 'ready')
      try {
        m.onreadystatechange = T
      } catch {}
    }
  }
  function fo(l) {
    l.I && (h.clearTimeout(l.I), (l.I = null))
  }
  t.isActive = function () {
    return !!this.g
  }
  function Dt(l) {
    return l.g ? l.g.readyState : 0
  }
  ;(t.Z = function () {
    try {
      return 2 < Dt(this) ? this.g.status : -1
    } catch {
      return -1
    }
  }),
    (t.oa = function () {
      try {
        return this.g ? this.g.responseText : ''
      } catch {
        return ''
      }
    }),
    (t.Oa = function (l) {
      if (this.g) {
        var d = this.g.responseText
        return l && d.indexOf(l) == 0 && (d = d.substring(l.length)), xa(d)
      }
    })
  function Ha(l) {
    try {
      if (!l.g) return null
      if ('response' in l.g) return l.g.response
      switch (l.H) {
        case '':
        case 'text':
          return l.g.responseText
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in l.g) return l.g.mozResponseArrayBuffer
      }
      return null
    } catch {
      return null
    }
  }
  function Ka(l) {
    const d = {}
    l = ((l.g && 2 <= Dt(l) && l.g.getAllResponseHeaders()) || '').split(`\r
`)
    for (let T = 0; T < l.length; T++) {
      if (C(l[T])) continue
      var m = V(l[T])
      const U = m[0]
      if (((m = m[1]), typeof m != 'string')) continue
      m = m.trim()
      const q = d[U] || []
      ;(d[U] = q), q.push(m)
    }
    A(d, function (T) {
      return T.join(', ')
    })
  }
  ;(t.Ba = function () {
    return this.m
  }),
    (t.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l)
    })
  function Rt(l, d, m) {
    return (m && m.internalChannelParams && m.internalChannelParams[l]) || d
  }
  function Ga(l) {
    ;(this.Aa = 0),
      (this.i = []),
      (this.j = new Ur()),
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
      (this.Va = Rt('failFast', !1, l)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = Rt('baseRetryDelayMs', 5e3, l)),
      (this.cb = Rt('retryDelaySeedMs', 1e4, l)),
      (this.Wa = Rt('forwardChannelMaxRetries', 2, l)),
      (this.wa = Rt('forwardChannelRequestTimeoutMs', 2e4, l)),
      (this.pa = (l && l.xmlHttpFactory) || void 0),
      (this.Xa = (l && l.Tb) || void 0),
      (this.Ca = (l && l.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (l && l.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new Vl(l && l.concurrentRequestLimit)),
      (this.Da = new Yf()),
      (this.P = (l && l.fastHandshake) || !1),
      (this.O = (l && l.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (l && l.Rb) || !1),
      l && l.xa && this.j.xa(),
      l && l.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && l && l.detectBufferingProxy) || !1),
      (this.ja = void 0),
      l &&
        l.longPollingTimeout &&
        0 < l.longPollingTimeout &&
        (this.ja = l.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null)
  }
  ;(t = Ga.prototype),
    (t.la = 8),
    (t.G = 1),
    (t.connect = function (l, d, m, T) {
      Ot(0),
        (this.W = l),
        (this.H = d || {}),
        m && T !== void 0 && ((this.H.OSID = m), (this.H.OAID = T)),
        (this.F = this.X),
        (this.I = mo(this, null, this.W)),
        ms(this)
    })
  function po(l) {
    if ((Qa(l), l.G == 3)) {
      var d = l.U++,
        m = bn(l.I)
      if (
        (qe(m, 'SID', l.K),
        qe(m, 'RID', d),
        qe(m, 'TYPE', 'terminate'),
        ys(l, m),
        (d = new vr(l, l.j, d)),
        (d.L = 2),
        (d.v = yi(bn(m))),
        (m = !1),
        h.navigator && h.navigator.sendBeacon)
      )
        try {
          m = h.navigator.sendBeacon(d.v.toString(), '')
        } catch {}
      !m && h.Image && ((new Image().src = d.v), (m = !0)),
        m || ((d.g = Zl(d.j, null)), d.g.ea(d.v)),
        (d.F = Date.now()),
        zr(d)
    }
    Jl(l)
  }
  function gs(l) {
    l.g && (zn(l), l.g.cancel(), (l.g = null))
  }
  function Qa(l) {
    gs(l),
      l.u && (h.clearTimeout(l.u), (l.u = null)),
      wi(l),
      l.h.cancel(),
      l.s && (typeof l.s == 'number' && h.clearTimeout(l.s), (l.s = null))
  }
  function ms(l) {
    if (!Ml(l.h) && !l.s) {
      l.s = !0
      var d = l.Ga
      mt || le(), Z || (mt(), (Z = !0)), ue.add(d, l), (l.B = 0)
    }
  }
  function Yl(l, d) {
    return bl(l.h) >= l.h.j - (l.s ? 1 : 0)
      ? !1
      : l.s
      ? ((l.i = d.D.concat(l.i)), !0)
      : l.G == 1 || l.G == 2 || l.B >= (l.Va ? 0 : l.Wa)
      ? !1
      : ((l.s = ls(_(l.Ga, l, d), ir(l, l.B))), l.B++, !0)
  }
  t.Ga = function (l) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!l) {
          ;(this.U = Math.floor(1e5 * Math.random())), (l = this.U++)
          const U = new vr(this, this.j, l)
          let q = this.o
          if (
            (this.S && (q ? ((q = I(q)), N(q, this.S)) : (q = this.S)),
            this.m !== null || this.O || ((U.H = q), (q = null)),
            this.P)
          )
            e: {
              for (var d = 0, m = 0; m < this.i.length; m++) {
                t: {
                  var T = this.i[m]
                  if (
                    '__data__' in T.map &&
                    ((T = T.map.__data__), typeof T == 'string')
                  ) {
                    T = T.length
                    break t
                  }
                  T = void 0
                }
                if (T === void 0) break
                if (((d += T), 4096 < d)) {
                  d = m
                  break e
                }
                if (d === 4096 || m === this.i.length - 1) {
                  d = m + 1
                  break e
                }
              }
              d = 1e3
            }
          else d = 1e3
          ;(d = nn(this, U, d)),
            (m = bn(this.I)),
            qe(m, 'RID', l),
            qe(m, 'CVER', 22),
            this.D && qe(m, 'X-HTTP-Session-Id', this.D),
            ys(this, m),
            q &&
              (this.O
                ? (d = 'headers=' + encodeURIComponent(String(Kl(q))) + '&' + d)
                : this.m && Wa(m, this.m, q)),
            lo(this.h, U),
            this.Ua && qe(m, 'TYPE', 'init'),
            this.P
              ? (qe(m, '$req', d),
                qe(m, 'SID', 'null'),
                (U.T = !0),
                Va(U, m, null))
              : Va(U, m, d),
            (this.G = 2)
        }
      } else
        this.G == 3 &&
          (l ? $t(this, l) : this.i.length == 0 || Ml(this.h) || $t(this))
  }
  function $t(l, d) {
    var m
    d ? (m = d.l) : (m = l.U++)
    const T = bn(l.I)
    qe(T, 'SID', l.K),
      qe(T, 'RID', m),
      qe(T, 'AID', l.T),
      ys(l, T),
      l.m && l.o && Wa(T, l.m, l.o),
      (m = new vr(l, l.j, m, l.B + 1)),
      l.m === null && (m.H = l.o),
      d && (l.i = d.D.concat(l.i)),
      (d = nn(l, m, 1e3)),
      (m.I = Math.round(0.5 * l.wa) + Math.round(0.5 * l.wa * Math.random())),
      lo(l.h, m),
      Va(m, T, d)
  }
  function ys(l, d) {
    l.H &&
      X(l.H, function (m, T) {
        qe(d, T, m)
      }),
      l.l &&
        Ba({}, function (m, T) {
          qe(d, T, m)
        })
  }
  function nn(l, d, m) {
    m = Math.min(l.i.length, m)
    var T = l.l ? _(l.l.Na, l.l, l) : null
    e: {
      var U = l.i
      let q = -1
      for (;;) {
        const te = ['count=' + m]
        q == -1
          ? 0 < m
            ? ((q = U[0].g), te.push('ofs=' + q))
            : (q = 0)
          : te.push('ofs=' + q)
        let be = !0
        for (let wt = 0; wt < m; wt++) {
          let Re = U[wt].g
          const Ue = U[wt].map
          if (((Re -= q), 0 > Re)) (q = Math.max(0, U[wt].g - 100)), (be = !1)
          else
            try {
              Xf(Ue, te, 'req' + Re + '_')
            } catch {
              T && T(Ue)
            }
        }
        if (be) {
          T = te.join('&')
          break e
        }
      }
    }
    return (l = l.i.splice(0, m)), (d.D = l), T
  }
  function Xl(l) {
    if (!l.g && !l.u) {
      l.Y = 1
      var d = l.Fa
      mt || le(), Z || (mt(), (Z = !0)), ue.add(d, l), (l.v = 0)
    }
  }
  function go(l) {
    return l.g || l.u || 3 <= l.v
      ? !1
      : (l.Y++, (l.u = ls(_(l.Fa, l), ir(l, l.v))), l.v++, !0)
  }
  ;(t.Fa = function () {
    if (
      ((this.u = null),
      vs(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var l = 2 * this.R
      this.j.info('BP detection timer enabled: ' + l),
        (this.A = ls(_(this.ab, this), l))
    }
  }),
    (t.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        Ot(10),
        gs(this),
        vs(this))
    })
  function zn(l) {
    l.A != null && (h.clearTimeout(l.A), (l.A = null))
  }
  function vs(l) {
    ;(l.g = new vr(l, l.j, 'rpc', l.Y)),
      l.m === null && (l.g.H = l.o),
      (l.g.O = 0)
    var d = bn(l.qa)
    qe(d, 'RID', 'rpc'),
      qe(d, 'SID', l.K),
      qe(d, 'AID', l.T),
      qe(d, 'CI', l.F ? '0' : '1'),
      !l.F && l.ja && qe(d, 'TO', l.ja),
      qe(d, 'TYPE', 'xmlhttp'),
      ys(l, d),
      l.m && l.o && Wa(d, l.m, l.o),
      l.L && (l.g.I = l.L)
    var m = l.g
    ;(l = l.ia),
      (m.L = 1),
      (m.v = yi(bn(d))),
      (m.m = null),
      (m.P = !0),
      Ll(m, l)
  }
  t.Za = function () {
    this.C != null && ((this.C = null), gs(this), go(this), Ot(19))
  }
  function wi(l) {
    l.C != null && (h.clearTimeout(l.C), (l.C = null))
  }
  function He(l, d) {
    var m = null
    if (l.g == d) {
      wi(l), zn(l), (l.g = null)
      var T = 2
    } else if (ba(l.h, d)) (m = d.D), Fa(l.h, d), (T = 1)
    else return
    if (l.G != 0) {
      if (d.o)
        if (T == 1) {
          ;(m = d.m ? d.m.length : 0), (d = Date.now() - d.F)
          var U = l.B
          ;(T = so()), ct(T, new oo(T, m)), ms(l)
        } else Xl(l)
      else if (
        ((U = d.s),
        U == 3 ||
          (U == 0 && 0 < d.X) ||
          !((T == 1 && Yl(l, d)) || (T == 2 && go(l))))
      )
        switch ((m && 0 < m.length && ((d = l.h), (d.i = d.i.concat(m))), U)) {
          case 1:
            sr(l, 5)
            break
          case 4:
            sr(l, 10)
            break
          case 3:
            sr(l, 6)
            break
          default:
            sr(l, 2)
        }
    }
  }
  function ir(l, d) {
    let m = l.Ta + Math.floor(Math.random() * l.cb)
    return l.isActive() || (m *= 2), m * d
  }
  function sr(l, d) {
    if ((l.j.info('Error code ' + d), d == 2)) {
      var m = _(l.fb, l),
        T = l.Xa
      const U = !T
      ;(T = new Br(T || '//www.google.com/images/cleardot.gif')),
        (h.location && h.location.protocol == 'http') || ps(T, 'https'),
        yi(T),
        U ? Gf(T.toString(), m) : Qf(T.toString(), m)
    } else Ot(2)
    ;(l.G = 0), l.l && l.l.sa(d), Jl(l), Qa(l)
  }
  t.fb = function (l) {
    l
      ? (this.j.info('Successfully pinged google.com'), Ot(2))
      : (this.j.info('Failed to ping google.com'), Ot(1))
  }
  function Jl(l) {
    if (((l.G = 0), (l.ka = []), l.l)) {
      const d = Ua(l.h)
      ;(d.length != 0 || l.i.length != 0) &&
        (j(l.ka, d),
        j(l.ka, l.i),
        (l.h.i.length = 0),
        B(l.i),
        (l.i.length = 0)),
        l.l.ra()
    }
  }
  function mo(l, d, m) {
    var T = m instanceof Br ? bn(m) : new Br(m)
    if (T.g != '') d && (T.g = d + '.' + T.g), mi(T, T.s)
    else {
      var U = h.location
      ;(T = U.protocol),
        (d = d ? d + '.' + U.hostname : U.hostname),
        (U = +U.port)
      var q = new Br(null)
      T && ps(q, T), d && (q.g = d), U && mi(q, U), m && (q.l = m), (T = q)
    }
    return (
      (m = l.D),
      (d = l.ya),
      m && d && qe(T, m, d),
      qe(T, 'VER', l.la),
      ys(l, T),
      T
    )
  }
  function Zl(l, d, m) {
    if (d && !l.J)
      throw Error("Can't create secondary domain capable XhrIo object.")
    return (
      (d = l.Ca && !l.pa ? new Xe(new co({ eb: m })) : new Xe(l.pa)),
      d.Ha(l.J),
      d
    )
  }
  t.isActive = function () {
    return !!this.l && this.l.isActive(this)
  }
  function ec() {}
  ;(t = ec.prototype),
    (t.ua = function () {}),
    (t.ta = function () {}),
    (t.sa = function () {}),
    (t.ra = function () {}),
    (t.isActive = function () {
      return !0
    }),
    (t.Na = function () {})
  function yo() {}
  yo.prototype.g = function (l, d) {
    return new jt(l, d)
  }
  function jt(l, d) {
    Ct.call(this),
      (this.g = new Ga(d)),
      (this.l = l),
      (this.h = (d && d.messageUrlParams) || null),
      (l = (d && d.messageHeaders) || null),
      d &&
        d.clientProtocolHeaderRequired &&
        (l
          ? (l['X-Client-Protocol'] = 'webchannel')
          : (l = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = l),
      (l = (d && d.initMessageHeaders) || null),
      d &&
        d.messageContentType &&
        (l
          ? (l['X-WebChannel-Content-Type'] = d.messageContentType)
          : (l = { 'X-WebChannel-Content-Type': d.messageContentType })),
      d &&
        d.va &&
        (l
          ? (l['X-WebChannel-Client-Profile'] = d.va)
          : (l = { 'X-WebChannel-Client-Profile': d.va })),
      (this.g.S = l),
      (l = d && d.Sb) && !C(l) && (this.g.m = l),
      (this.v = (d && d.supportsCrossDomainXhr) || !1),
      (this.u = (d && d.sendRawJson) || !1),
      (d = d && d.httpSessionIdParam) &&
        !C(d) &&
        ((this.g.D = d),
        (l = this.h),
        l !== null && d in l && ((l = this.h), d in l && delete l[d])),
      (this.j = new Ei(this))
  }
  b(jt, Ct),
    (jt.prototype.m = function () {
      ;(this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }),
    (jt.prototype.close = function () {
      po(this.g)
    }),
    (jt.prototype.o = function (l) {
      var d = this.g
      if (typeof l == 'string') {
        var m = {}
        ;(m.__data__ = l), (l = m)
      } else this.u && ((m = {}), (m.__data__ = as(l)), (l = m))
      d.i.push(new Dl(d.Ya++, l)), d.G == 3 && ms(d)
    }),
    (jt.prototype.N = function () {
      ;(this.g.l = null),
        delete this.j,
        po(this.g),
        delete this.g,
        jt.aa.N.call(this)
    })
  function _s(l) {
    io.call(this),
      l.__headers__ &&
        ((this.headers = l.__headers__),
        (this.statusCode = l.__status__),
        delete l.__headers__,
        delete l.__status__)
    var d = l.__sm__
    if (d) {
      e: {
        for (const m in d) {
          l = m
          break e
        }
        l = void 0
      }
      ;(this.i = l) &&
        ((l = this.i), (d = d !== null && l in d ? d[l] : void 0)),
        (this.data = d)
    } else this.data = l
  }
  b(_s, io)
  function jr() {
    Na.call(this), (this.status = 1)
  }
  b(jr, Na)
  function Ei(l) {
    this.g = l
  }
  b(Ei, ec),
    (Ei.prototype.ua = function () {
      ct(this.g, 'a')
    }),
    (Ei.prototype.ta = function (l) {
      ct(this.g, new _s(l))
    }),
    (Ei.prototype.sa = function (l) {
      ct(this.g, new jr())
    }),
    (Ei.prototype.ra = function () {
      ct(this.g, 'b')
    }),
    (yo.prototype.createWebChannel = yo.prototype.g),
    (jt.prototype.send = jt.prototype.o),
    (jt.prototype.open = jt.prototype.m),
    (jt.prototype.close = jt.prototype.close),
    (yT = function () {
      return new yo()
    }),
    (mT = function () {
      return so()
    }),
    (gT = Fr),
    (Vg = {
      mb: 0,
      pb: 1,
      qb: 2,
      Jb: 3,
      Ob: 4,
      Lb: 5,
      Mb: 6,
      Kb: 7,
      Ib: 8,
      Nb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Gb: 12,
      Cb: 13,
      Db: 14,
      Bb: 15,
      Eb: 16,
      Fb: 17,
      ib: 18,
      hb: 19,
      jb: 20,
    }),
    (ao.NO_ERROR = 0),
    (ao.TIMEOUT = 8),
    (ao.HTTP_ERROR = 6),
    (vh = ao),
    (Pl.COMPLETE = 'complete'),
    (pT = Pl),
    (Cl.EventType = pi),
    (pi.OPEN = 'a'),
    (pi.CLOSE = 'b'),
    (pi.ERROR = 'c'),
    (pi.MESSAGE = 'd'),
    (Ct.prototype.listen = Ct.prototype.K),
    (Au = Cl),
    (Xe.prototype.listenOnce = Xe.prototype.L),
    (Xe.prototype.getLastError = Xe.prototype.Ka),
    (Xe.prototype.getLastErrorCode = Xe.prototype.Ba),
    (Xe.prototype.getStatus = Xe.prototype.Z),
    (Xe.prototype.getResponseJson = Xe.prototype.Oa),
    (Xe.prototype.getResponseText = Xe.prototype.oa),
    (Xe.prototype.send = Xe.prototype.ea),
    (Xe.prototype.setWithCredentials = Xe.prototype.Ha),
    (dT = Xe)
}).apply(
  typeof th < 'u'
    ? th
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
const D_ = '@firebase/firestore'
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
 */ class Qt {
  constructor(e) {
    this.uid = e
  }
  isAuthenticated() {
    return this.uid != null
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user'
  }
  isEqual(e) {
    return e.uid === this.uid
  }
}
;(Qt.UNAUTHENTICATED = new Qt(null)),
  (Qt.GOOGLE_CREDENTIALS = new Qt('google-credentials-uid')),
  (Qt.FIRST_PARTY = new Qt('first-party-uid')),
  (Qt.MOCK_USER = new Qt('mock-user'))
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
 */ let Sa = '11.0.0'
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
 */ const Ks = new oT('@firebase/firestore')
function Oo() {
  return Ks.logLevel
}
function se(t, ...e) {
  if (Ks.logLevel <= ke.DEBUG) {
    const n = e.map(Gm)
    Ks.debug(`Firestore (${Sa}): ${t}`, ...n)
  }
}
function li(t, ...e) {
  if (Ks.logLevel <= ke.ERROR) {
    const n = e.map(Gm)
    Ks.error(`Firestore (${Sa}): ${t}`, ...n)
  }
}
function da(t, ...e) {
  if (Ks.logLevel <= ke.WARN) {
    const n = e.map(Gm)
    Ks.warn(`Firestore (${Sa}): ${t}`, ...n)
  }
}
function Gm(t) {
  if (typeof t == 'string') return t
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
     */ return (function (n) {
      return JSON.stringify(n)
    })(t)
  } catch {
    return t
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
 */ function _e(t = 'Unexpected state') {
  const e = `FIRESTORE (${Sa}) INTERNAL ASSERTION FAILED: ` + t
  throw (li(e), new Error(e))
}
function rt(t, e) {
  t || _e()
}
function Ne(t, e) {
  return t
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
 */ const re = {
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
class de extends Ta {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
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
 */ class na {
  constructor() {
    this.promise = new Promise((e, n) => {
      ;(this.resolve = e), (this.reject = n)
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
 */ class vT {
  constructor(e, n) {
    ;(this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`)
  }
}
class dO {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Qt.UNAUTHENTICATED))
  }
  shutdown() {}
}
class pO {
  constructor(e) {
    ;(this.token = e), (this.changeListener = null)
  }
  getToken() {
    return Promise.resolve(this.token)
  }
  invalidateToken() {}
  start(e, n) {
    ;(this.changeListener = n), e.enqueueRetryable(() => n(this.token.user))
  }
  shutdown() {
    this.changeListener = null
  }
}
class gO {
  constructor(e) {
    ;(this.t = e),
      (this.currentUser = Qt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(e, n) {
    rt(this.o === void 0)
    let r = this.i
    const i = (f) => (this.i !== r ? ((r = this.i), n(f)) : Promise.resolve())
    let o = new na()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        o.resolve(),
        (o = new na()),
        e.enqueueRetryable(() => i(this.currentUser))
    }
    const u = () => {
        const f = o
        e.enqueueRetryable(async () => {
          await f.promise, await i(this.currentUser)
        })
      },
      h = (f) => {
        se('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = f),
          this.o && (this.auth.addAuthTokenListener(this.o), u())
      }
    this.t.onInit((f) => h(f)),
      setTimeout(() => {
        if (!this.auth) {
          const f = this.t.getImmediate({ optional: !0 })
          f
            ? h(f)
            : (se('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              o.resolve(),
              (o = new na()))
        }
      }, 0),
      u()
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (se(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : r
                ? (rt(typeof r.accessToken == 'string'),
                  new vT(r.accessToken, this.currentUser))
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
    const e = this.auth && this.auth.getUid()
    return rt(e === null || typeof e == 'string'), new Qt(e)
  }
}
class mO {
  constructor(e, n, r) {
    ;(this.l = e),
      (this.h = n),
      (this.P = r),
      (this.type = 'FirstParty'),
      (this.user = Qt.FIRST_PARTY),
      (this.I = new Map())
  }
  T() {
    return this.P ? this.P() : null
  }
  get headers() {
    this.I.set('X-Goog-AuthUser', this.l)
    const e = this.T()
    return (
      e && this.I.set('Authorization', e),
      this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
      this.I
    )
  }
}
class yO {
  constructor(e, n, r) {
    ;(this.l = e), (this.h = n), (this.P = r)
  }
  getToken() {
    return Promise.resolve(new mO(this.l, this.h, this.P))
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Qt.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class vO {
  constructor(e) {
    ;(this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value)
  }
}
class _O {
  constructor(e) {
    ;(this.A = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null)
  }
  start(e, n) {
    rt(this.o === void 0)
    const r = (o) => {
      o.error != null &&
        se(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`
        )
      const u = o.token !== this.R
      return (
        (this.R = o.token),
        se(
          'FirebaseAppCheckTokenProvider',
          `Received ${u ? 'new' : 'existing'} token.`
        ),
        u ? n(o.token) : Promise.resolve()
      )
    }
    this.o = (o) => {
      e.enqueueRetryable(() => r(o))
    }
    const i = (o) => {
      se('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = o),
        this.o && this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((o) => i(o)),
      setTimeout(() => {
        if (!this.appCheck) {
          const o = this.A.getImmediate({ optional: !0 })
          o
            ? i(o)
            : se('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected')
        }
      }, 0)
  }
  getToken() {
    const e = this.forceRefresh
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (rt(typeof n.token == 'string'),
                  (this.R = n.token),
                  new vO(n.token))
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
 */ function wO(t) {
  const e = typeof self < 'u' && (self.crypto || self.msCrypto),
    n = new Uint8Array(t)
  if (e && typeof e.getRandomValues == 'function') e.getRandomValues(n)
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random())
  return n
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
 */ class EO {
  static newId() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / e.length) * e.length
    let r = ''
    for (; r.length < 20; ) {
      const i = wO(40)
      for (let o = 0; o < i.length; ++o)
        r.length < 20 && i[o] < n && (r += e.charAt(i[o] % e.length))
    }
    return r
  }
}
function Le(t, e) {
  return t < e ? -1 : t > e ? 1 : 0
}
function pa(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]))
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
 */ class An {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new de(
        re.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + n
      )
    if (n >= 1e9)
      throw new de(
        re.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + n
      )
    if (e < -62135596800)
      throw new de(re.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e)
    if (e >= 253402300800)
      throw new de(re.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e)
  }
  static now() {
    return An.fromMillis(Date.now())
  }
  static fromDate(e) {
    return An.fromMillis(e.getTime())
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n))
    return new An(n, r)
  }
  toDate() {
    return new Date(this.toMillis())
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? Le(this.nanoseconds, e.nanoseconds)
      : Le(this.seconds, e.seconds)
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
  }
  toString() {
    return (
      'Timestamp(seconds=' +
      this.seconds +
      ', nanoseconds=' +
      this.nanoseconds +
      ')'
    )
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds }
  }
  valueOf() {
    const e = this.seconds - -62135596800
    return (
      String(e).padStart(12, '0') +
      '.' +
      String(this.nanoseconds).padStart(9, '0')
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
 */ class ye {
  constructor(e) {
    this.timestamp = e
  }
  static fromTimestamp(e) {
    return new ye(e)
  }
  static min() {
    return new ye(new An(0, 0))
  }
  static max() {
    return new ye(new An(253402300799, 999999999))
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp)
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp)
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')'
  }
  toTimestamp() {
    return this.timestamp
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
 */ class ul {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && _e(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && _e(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r)
  }
  get length() {
    return this.len
  }
  isEqual(e) {
    return ul.comparator(this, e) === 0
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit())
    return (
      e instanceof ul
        ? e.forEach((r) => {
            n.push(r)
          })
        : n.push(e),
      this.construct(n)
    )
  }
  limit() {
    return this.offset + this.length
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    )
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1)
  }
  firstSegment() {
    return this.segments[this.offset]
  }
  lastSegment() {
    return this.get(this.length - 1)
  }
  get(e) {
    return this.segments[this.offset + e]
  }
  isEmpty() {
    return this.length === 0
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1
    return !0
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1
    return !0
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n])
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit())
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length)
    for (let i = 0; i < r; i++) {
      const o = e.get(i),
        u = n.get(i)
      if (o < u) return -1
      if (o > u) return 1
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0
  }
}
class ut extends ul {
  construct(e, n, r) {
    return new ut(e, n, r)
  }
  canonicalString() {
    return this.toArray().join('/')
  }
  toString() {
    return this.canonicalString()
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join('/')
  }
  static fromString(...e) {
    const n = []
    for (const r of e) {
      if (r.indexOf('//') >= 0)
        throw new de(
          re.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        )
      n.push(...r.split('/').filter((i) => i.length > 0))
    }
    return new ut(n)
  }
  static emptyPath() {
    return new ut([])
  }
}
const TO = /^[_a-zA-Z][_a-zA-Z0-9]*$/
class un extends ul {
  construct(e, n, r) {
    return new un(e, n, r)
  }
  static isValidIdentifier(e) {
    return TO.test(e)
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          un.isValidIdentifier(e) || (e = '`' + e + '`'),
          e
        )
      )
      .join('.')
  }
  toString() {
    return this.canonicalString()
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === '__name__'
  }
  static keyField() {
    return new un(['__name__'])
  }
  static fromServerFormat(e) {
    const n = []
    let r = '',
      i = 0
    const o = () => {
      if (r.length === 0)
        throw new de(
          re.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        )
      n.push(r), (r = '')
    }
    let u = !1
    for (; i < e.length; ) {
      const h = e[i]
      if (h === '\\') {
        if (i + 1 === e.length)
          throw new de(
            re.INVALID_ARGUMENT,
            'Path has trailing escape character: ' + e
          )
        const f = e[i + 1]
        if (f !== '\\' && f !== '.' && f !== '`')
          throw new de(
            re.INVALID_ARGUMENT,
            'Path has invalid escape sequence: ' + e
          )
        ;(r += f), (i += 2)
      } else
        h === '`'
          ? ((u = !u), i++)
          : h !== '.' || u
          ? ((r += h), i++)
          : (o(), i++)
    }
    if ((o(), u))
      throw new de(re.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e)
    return new un(n)
  }
  static emptyPath() {
    return new un([])
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
 */ class pe {
  constructor(e) {
    this.path = e
  }
  static fromPath(e) {
    return new pe(ut.fromString(e))
  }
  static fromName(e) {
    return new pe(ut.fromString(e).popFirst(5))
  }
  static empty() {
    return new pe(ut.emptyPath())
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment()
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2)
  }
  getCollectionPath() {
    return this.path.popLast()
  }
  isEqual(e) {
    return e !== null && ut.comparator(this.path, e.path) === 0
  }
  toString() {
    return this.path.toString()
  }
  static comparator(e, n) {
    return ut.comparator(e.path, n.path)
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0
  }
  static fromSegments(e) {
    return new pe(new ut(e.slice()))
  }
}
function SO(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = ye.fromTimestamp(r === 1e9 ? new An(n + 1, 0) : new An(n, r))
  return new Yi(i, pe.empty(), e)
}
function IO(t) {
  return new Yi(t.readTime, t.key, -1)
}
class Yi {
  constructor(e, n, r) {
    ;(this.readTime = e), (this.documentKey = n), (this.largestBatchId = r)
  }
  static min() {
    return new Yi(ye.min(), pe.empty(), -1)
  }
  static max() {
    return new Yi(ye.max(), pe.empty(), -1)
  }
}
function AO(t, e) {
  let n = t.readTime.compareTo(e.readTime)
  return n !== 0
    ? n
    : ((n = pe.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : Le(t.largestBatchId, e.largestBatchId))
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
 */ const CO =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.'
class RO {
  constructor() {
    this.onCommittedListeners = []
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e)
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e())
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
 */ async function Rf(t) {
  if (t.code !== re.FAILED_PRECONDITION || t.message !== CO) throw t
  se('LocalStore', 'Unexpectedly lost primary lease')
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
 */ class Y {
  constructor(e) {
    ;(this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          ;(this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n)
        },
        (n) => {
          ;(this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n)
        }
      )
  }
  catch(e) {
    return this.next(void 0, e)
  }
  next(e, n) {
    return (
      this.callbackAttached && _e(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new Y((r, i) => {
            ;(this.nextCallback = (o) => {
              this.wrapSuccess(e, o).next(r, i)
            }),
              (this.catchCallback = (o) => {
                this.wrapFailure(n, o).next(r, i)
              })
          })
    )
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n)
    })
  }
  wrapUserFunction(e) {
    try {
      const n = e()
      return n instanceof Y ? n : Y.resolve(n)
    } catch (n) {
      return Y.reject(n)
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : Y.resolve(n)
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : Y.reject(n)
  }
  static resolve(e) {
    return new Y((n, r) => {
      n(e)
    })
  }
  static reject(e) {
    return new Y((n, r) => {
      r(e)
    })
  }
  static waitFor(e) {
    return new Y((n, r) => {
      let i = 0,
        o = 0,
        u = !1
      e.forEach((h) => {
        ++i,
          h.next(
            () => {
              ++o, u && o === i && n()
            },
            (f) => r(f)
          )
      }),
        (u = !0),
        o === i && n()
    })
  }
  static or(e) {
    let n = Y.resolve(!1)
    for (const r of e) n = n.next((i) => (i ? Y.resolve(i) : r()))
    return n
  }
  static forEach(e, n) {
    const r = []
    return (
      e.forEach((i, o) => {
        r.push(n.call(this, i, o))
      }),
      this.waitFor(r)
    )
  }
  static mapArray(e, n) {
    return new Y((r, i) => {
      const o = e.length,
        u = new Array(o)
      let h = 0
      for (let f = 0; f < o; f++) {
        const g = f
        n(e[g]).next(
          (v) => {
            ;(u[g] = v), ++h, h === o && r(u)
          },
          (v) => i(v)
        )
      }
    })
  }
  static doWhile(e, n) {
    return new Y((r, i) => {
      const o = () => {
        e() === !0
          ? n().next(() => {
              o()
            }, i)
          : r()
      }
      o()
    })
  }
}
function xO(t) {
  const e = t.match(/Android ([\d.]+)/i),
    n = e ? e[1].split('.').slice(0, 2).join('.') : '-1'
  return Number(n)
}
function Ia(t) {
  return t.name === 'IndexedDbTransactionError'
}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */ class xf {
  constructor(e, n) {
    ;(this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ie(r)),
        (this.se = (r) => n.writeSequenceNumber(r)))
  }
  ie(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    )
  }
  next() {
    const e = ++this.previousValue
    return this.se && this.se(e), e
  }
}
xf.oe = -1
function Pf(t) {
  return t == null
}
function Mg(t) {
  return t === 0 && 1 / t == -1 / 0
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
 */ function PO(t) {
  let e = ''
  for (let n = 0; n < t.length; n++)
    e.length > 0 && (e = V_(e)), (e = kO(t.get(n), e))
  return V_(e)
}
function kO(t, e) {
  let n = e
  const r = t.length
  for (let i = 0; i < r; i++) {
    const o = t.charAt(i)
    switch (o) {
      case '\0':
        n += ''
        break
      case '':
        n += ''
        break
      default:
        n += o
    }
  }
  return n
}
function V_(t) {
  return t + ''
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
 */ function M_(t) {
  let e = 0
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++
  return e
}
function vl(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
}
function NO(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1
  return !0
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
 */ class gt {
  constructor(e, n) {
    ;(this.comparator = e), (this.root = n || bt.EMPTY)
  }
  insert(e, n) {
    return new gt(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, bt.BLACK, null, null)
    )
  }
  remove(e) {
    return new gt(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, bt.BLACK, null, null)
    )
  }
  get(e) {
    let n = this.root
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key)
      if (r === 0) return n.value
      r < 0 ? (n = n.left) : r > 0 && (n = n.right)
    }
    return null
  }
  indexOf(e) {
    let n = 0,
      r = this.root
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key)
      if (i === 0) return n + r.left.size
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right))
    }
    return -1
  }
  isEmpty() {
    return this.root.isEmpty()
  }
  get size() {
    return this.root.size
  }
  minKey() {
    return this.root.minKey()
  }
  maxKey() {
    return this.root.maxKey()
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e)
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1))
  }
  toString() {
    const e = []
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(', ')}}`
    )
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e)
  }
  getIterator() {
    return new nh(this.root, null, this.comparator, !1)
  }
  getIteratorFrom(e) {
    return new nh(this.root, e, this.comparator, !1)
  }
  getReverseIterator() {
    return new nh(this.root, null, this.comparator, !0)
  }
  getReverseIteratorFrom(e) {
    return new nh(this.root, e, this.comparator, !0)
  }
}
class nh {
  constructor(e, n, r, i) {
    ;(this.isReverse = i), (this.nodeStack = [])
    let o = 1
    for (; !e.isEmpty(); )
      if (((o = n ? r(e.key, n) : 1), n && i && (o *= -1), o < 0))
        e = this.isReverse ? e.left : e.right
      else {
        if (o === 0) {
          this.nodeStack.push(e)
          break
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left)
      }
  }
  getNext() {
    let e = this.nodeStack.pop()
    const n = { key: e.key, value: e.value }
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right)
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left)
    return n
  }
  hasNext() {
    return this.nodeStack.length > 0
  }
  peek() {
    if (this.nodeStack.length === 0) return null
    const e = this.nodeStack[this.nodeStack.length - 1]
    return { key: e.key, value: e.value }
  }
}
class bt {
  constructor(e, n, r, i, o) {
    ;(this.key = e),
      (this.value = n),
      (this.color = r ?? bt.RED),
      (this.left = i ?? bt.EMPTY),
      (this.right = o ?? bt.EMPTY),
      (this.size = this.left.size + 1 + this.right.size)
  }
  copy(e, n, r, i, o) {
    return new bt(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      o ?? this.right
    )
  }
  isEmpty() {
    return !1
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    )
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    )
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min()
  }
  minKey() {
    return this.min().key
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey()
  }
  insert(e, n, r) {
    let i = this
    const o = r(e, i.key)
    return (
      (i =
        o < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : o === 0
          ? i.copy(null, n, null, null, null)
          : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    )
  }
  removeMin() {
    if (this.left.isEmpty()) return bt.EMPTY
    let e = this
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    )
  }
  remove(e, n) {
    let r,
      i = this
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null))
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return bt.EMPTY
        ;(r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()))
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n))
    }
    return i.fixUp()
  }
  isRed() {
    return this.color
  }
  fixUp() {
    let e = this
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    )
  }
  moveRedLeft() {
    let e = this.colorFlip()
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    )
  }
  moveRedRight() {
    let e = this.colorFlip()
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    )
  }
  rotateLeft() {
    const e = this.copy(null, null, bt.RED, null, this.right.left)
    return this.right.copy(null, null, this.color, e, null)
  }
  rotateRight() {
    const e = this.copy(null, null, bt.RED, this.left.right, null)
    return this.left.copy(null, null, this.color, null, e)
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null)
    return this.copy(null, null, !this.color, e, n)
  }
  checkMaxDepth() {
    const e = this.check()
    return Math.pow(2, e) <= this.size + 1
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw _e()
    const e = this.left.check()
    if (e !== this.right.check()) throw _e()
    return e + (this.isRed() ? 0 : 1)
  }
}
;(bt.EMPTY = null), (bt.RED = !0), (bt.BLACK = !1)
bt.EMPTY = new (class {
  constructor() {
    this.size = 0
  }
  get key() {
    throw _e()
  }
  get value() {
    throw _e()
  }
  get color() {
    throw _e()
  }
  get left() {
    throw _e()
  }
  get right() {
    throw _e()
  }
  copy(e, n, r, i, o) {
    return this
  }
  insert(e, n, r) {
    return new bt(e, n)
  }
  remove(e, n) {
    return this
  }
  isEmpty() {
    return !0
  }
  inorderTraversal(e) {
    return !1
  }
  reverseTraversal(e) {
    return !1
  }
  minKey() {
    return null
  }
  maxKey() {
    return null
  }
  isRed() {
    return !1
  }
  checkMaxDepth() {
    return !0
  }
  check() {
    return 0
  }
})()
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
 */ class Lt {
  constructor(e) {
    ;(this.comparator = e), (this.data = new gt(this.comparator))
  }
  has(e) {
    return this.data.get(e) !== null
  }
  first() {
    return this.data.minKey()
  }
  last() {
    return this.data.maxKey()
  }
  get size() {
    return this.data.size
  }
  indexOf(e) {
    return this.data.indexOf(e)
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1))
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0])
    for (; r.hasNext(); ) {
      const i = r.getNext()
      if (this.comparator(i.key, e[1]) >= 0) return
      n(i.key)
    }
  }
  forEachWhile(e, n) {
    let r
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e)
    return n.hasNext() ? n.getNext().key : null
  }
  getIterator() {
    return new b_(this.data.getIterator())
  }
  getIteratorFrom(e) {
    return new b_(this.data.getIteratorFrom(e))
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0))
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this
  }
  isEmpty() {
    return this.data.isEmpty()
  }
  unionWith(e) {
    let n = this
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r)
      }),
      n
    )
  }
  isEqual(e) {
    if (!(e instanceof Lt) || this.size !== e.size) return !1
    const n = this.data.getIterator(),
      r = e.data.getIterator()
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        o = r.getNext().key
      if (this.comparator(i, o) !== 0) return !1
    }
    return !0
  }
  toArray() {
    const e = []
    return (
      this.forEach((n) => {
        e.push(n)
      }),
      e
    )
  }
  toString() {
    const e = []
    return this.forEach((n) => e.push(n)), 'SortedSet(' + e.toString() + ')'
  }
  copy(e) {
    const n = new Lt(this.comparator)
    return (n.data = e), n
  }
}
class b_ {
  constructor(e) {
    this.iter = e
  }
  getNext() {
    return this.iter.getNext().key
  }
  hasNext() {
    return this.iter.hasNext()
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
 */ class Mi {
  constructor(e) {
    ;(this.fields = e), e.sort(un.comparator)
  }
  static empty() {
    return new Mi([])
  }
  unionWith(e) {
    let n = new Lt(un.comparator)
    for (const r of this.fields) n = n.add(r)
    for (const r of e) n = n.add(r)
    return new Mi(n.toArray())
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0
    return !1
  }
  isEqual(e) {
    return pa(this.fields, e.fields, (n, r) => n.isEqual(r))
  }
}
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
 */ class _T extends Error {
  constructor() {
    super(...arguments), (this.name = 'Base64DecodeError')
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
 */ class zt {
  constructor(e) {
    this.binaryString = e
  }
  static fromBase64String(e) {
    const n = (function (i) {
      try {
        return atob(i)
      } catch (o) {
        throw typeof DOMException < 'u' && o instanceof DOMException
          ? new _T('Invalid base64 string: ' + o)
          : o
      }
    })(e)
    return new zt(n)
  }
  static fromUint8Array(e) {
    const n = (function (i) {
      let o = ''
      for (let u = 0; u < i.length; ++u) o += String.fromCharCode(i[u])
      return o
    })(e)
    return new zt(n)
  }
  [Symbol.iterator]() {
    let e = 0
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    }
  }
  toBase64() {
    return (function (n) {
      return btoa(n)
    })(this.binaryString)
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length)
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i)
      return r
    })(this.binaryString)
  }
  approximateByteSize() {
    return 2 * this.binaryString.length
  }
  compareTo(e) {
    return Le(this.binaryString, e.binaryString)
  }
  isEqual(e) {
    return this.binaryString === e.binaryString
  }
}
zt.EMPTY_BYTE_STRING = new zt('')
const LO = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function Xi(t) {
  if ((rt(!!t), typeof t == 'string')) {
    let e = 0
    const n = LO.exec(t)
    if ((rt(!!n), n[1])) {
      let i = n[1]
      ;(i = (i + '000000000').substr(0, 9)), (e = Number(i))
    }
    const r = new Date(t)
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e }
  }
  return { seconds: dt(t.seconds), nanos: dt(t.nanos) }
}
function dt(t) {
  return typeof t == 'number' ? t : typeof t == 'string' ? Number(t) : 0
}
function Ji(t) {
  return typeof t == 'string' ? zt.fromBase64String(t) : zt.fromUint8Array(t)
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
 */ function Qm(t) {
  var e, n
  return (
    ((n = (
      ((e = t?.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === 'server_timestamp'
  )
}
function kf(t) {
  const e = t.mapValue.fields.__previous_value__
  return Qm(e) ? kf(e) : e
}
function ll(t) {
  const e = Xi(t.mapValue.fields.__local_write_time__.timestampValue)
  return new An(e.seconds, e.nanos)
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
 */ class OO {
  constructor(e, n, r, i, o, u, h, f, g) {
    ;(this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = o),
      (this.forceLongPolling = u),
      (this.autoDetectLongPolling = h),
      (this.longPollingOptions = f),
      (this.useFetchStreams = g)
  }
}
class cl {
  constructor(e, n) {
    ;(this.projectId = e), (this.database = n || '(default)')
  }
  static empty() {
    return new cl('', '')
  }
  get isDefaultDatabase() {
    return this.database === '(default)'
  }
  isEqual(e) {
    return (
      e instanceof cl &&
      e.projectId === this.projectId &&
      e.database === this.database
    )
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
 */ const rh = {
  mapValue: { fields: { __type__: { stringValue: '__max__' } } },
}
function Zi(t) {
  return 'nullValue' in t
    ? 0
    : 'booleanValue' in t
    ? 1
    : 'integerValue' in t || 'doubleValue' in t
    ? 2
    : 'timestampValue' in t
    ? 3
    : 'stringValue' in t
    ? 5
    : 'bytesValue' in t
    ? 6
    : 'referenceValue' in t
    ? 7
    : 'geoPointValue' in t
    ? 8
    : 'arrayValue' in t
    ? 9
    : 'mapValue' in t
    ? Qm(t)
      ? 4
      : VO(t)
      ? 9007199254740991
      : DO(t)
      ? 10
      : 11
    : _e()
}
function Lr(t, e) {
  if (t === e) return !0
  const n = Zi(t)
  if (n !== Zi(e)) return !1
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0
    case 1:
      return t.booleanValue === e.booleanValue
    case 4:
      return ll(t).isEqual(ll(e))
    case 3:
      return (function (i, o) {
        if (
          typeof i.timestampValue == 'string' &&
          typeof o.timestampValue == 'string' &&
          i.timestampValue.length === o.timestampValue.length
        )
          return i.timestampValue === o.timestampValue
        const u = Xi(i.timestampValue),
          h = Xi(o.timestampValue)
        return u.seconds === h.seconds && u.nanos === h.nanos
      })(t, e)
    case 5:
      return t.stringValue === e.stringValue
    case 6:
      return (function (i, o) {
        return Ji(i.bytesValue).isEqual(Ji(o.bytesValue))
      })(t, e)
    case 7:
      return t.referenceValue === e.referenceValue
    case 8:
      return (function (i, o) {
        return (
          dt(i.geoPointValue.latitude) === dt(o.geoPointValue.latitude) &&
          dt(i.geoPointValue.longitude) === dt(o.geoPointValue.longitude)
        )
      })(t, e)
    case 2:
      return (function (i, o) {
        if ('integerValue' in i && 'integerValue' in o)
          return dt(i.integerValue) === dt(o.integerValue)
        if ('doubleValue' in i && 'doubleValue' in o) {
          const u = dt(i.doubleValue),
            h = dt(o.doubleValue)
          return u === h ? Mg(u) === Mg(h) : isNaN(u) && isNaN(h)
        }
        return !1
      })(t, e)
    case 9:
      return pa(t.arrayValue.values || [], e.arrayValue.values || [], Lr)
    case 10:
    case 11:
      return (function (i, o) {
        const u = i.mapValue.fields || {},
          h = o.mapValue.fields || {}
        if (M_(u) !== M_(h)) return !1
        for (const f in u)
          if (u.hasOwnProperty(f) && (h[f] === void 0 || !Lr(u[f], h[f])))
            return !1
        return !0
      })(t, e)
    default:
      return _e()
  }
}
function hl(t, e) {
  return (t.values || []).find((n) => Lr(n, e)) !== void 0
}
function ga(t, e) {
  if (t === e) return 0
  const n = Zi(t),
    r = Zi(e)
  if (n !== r) return Le(n, r)
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0
    case 1:
      return Le(t.booleanValue, e.booleanValue)
    case 2:
      return (function (o, u) {
        const h = dt(o.integerValue || o.doubleValue),
          f = dt(u.integerValue || u.doubleValue)
        return h < f
          ? -1
          : h > f
          ? 1
          : h === f
          ? 0
          : isNaN(h)
          ? isNaN(f)
            ? 0
            : -1
          : 1
      })(t, e)
    case 3:
      return F_(t.timestampValue, e.timestampValue)
    case 4:
      return F_(ll(t), ll(e))
    case 5:
      return Le(t.stringValue, e.stringValue)
    case 6:
      return (function (o, u) {
        const h = Ji(o),
          f = Ji(u)
        return h.compareTo(f)
      })(t.bytesValue, e.bytesValue)
    case 7:
      return (function (o, u) {
        const h = o.split('/'),
          f = u.split('/')
        for (let g = 0; g < h.length && g < f.length; g++) {
          const v = Le(h[g], f[g])
          if (v !== 0) return v
        }
        return Le(h.length, f.length)
      })(t.referenceValue, e.referenceValue)
    case 8:
      return (function (o, u) {
        const h = Le(dt(o.latitude), dt(u.latitude))
        return h !== 0 ? h : Le(dt(o.longitude), dt(u.longitude))
      })(t.geoPointValue, e.geoPointValue)
    case 9:
      return U_(t.arrayValue, e.arrayValue)
    case 10:
      return (function (o, u) {
        var h, f, g, v
        const E = o.fields || {},
          _ = u.fields || {},
          L = (h = E.value) === null || h === void 0 ? void 0 : h.arrayValue,
          b = (f = _.value) === null || f === void 0 ? void 0 : f.arrayValue,
          B = Le(
            ((g = L?.values) === null || g === void 0 ? void 0 : g.length) || 0,
            ((v = b?.values) === null || v === void 0 ? void 0 : v.length) || 0
          )
        return B !== 0 ? B : U_(L, b)
      })(t.mapValue, e.mapValue)
    case 11:
      return (function (o, u) {
        if (o === rh.mapValue && u === rh.mapValue) return 0
        if (o === rh.mapValue) return 1
        if (u === rh.mapValue) return -1
        const h = o.fields || {},
          f = Object.keys(h),
          g = u.fields || {},
          v = Object.keys(g)
        f.sort(), v.sort()
        for (let E = 0; E < f.length && E < v.length; ++E) {
          const _ = Le(f[E], v[E])
          if (_ !== 0) return _
          const L = ga(h[f[E]], g[v[E]])
          if (L !== 0) return L
        }
        return Le(f.length, v.length)
      })(t.mapValue, e.mapValue)
    default:
      throw _e()
  }
}
function F_(t, e) {
  if (typeof t == 'string' && typeof e == 'string' && t.length === e.length)
    return Le(t, e)
  const n = Xi(t),
    r = Xi(e),
    i = Le(n.seconds, r.seconds)
  return i !== 0 ? i : Le(n.nanos, r.nanos)
}
function U_(t, e) {
  const n = t.values || [],
    r = e.values || []
  for (let i = 0; i < n.length && i < r.length; ++i) {
    const o = ga(n[i], r[i])
    if (o) return o
  }
  return Le(n.length, r.length)
}
function ma(t) {
  return bg(t)
}
function bg(t) {
  return 'nullValue' in t
    ? 'null'
    : 'booleanValue' in t
    ? '' + t.booleanValue
    : 'integerValue' in t
    ? '' + t.integerValue
    : 'doubleValue' in t
    ? '' + t.doubleValue
    : 'timestampValue' in t
    ? (function (n) {
        const r = Xi(n)
        return `time(${r.seconds},${r.nanos})`
      })(t.timestampValue)
    : 'stringValue' in t
    ? t.stringValue
    : 'bytesValue' in t
    ? (function (n) {
        return Ji(n).toBase64()
      })(t.bytesValue)
    : 'referenceValue' in t
    ? (function (n) {
        return pe.fromName(n).toString()
      })(t.referenceValue)
    : 'geoPointValue' in t
    ? (function (n) {
        return `geo(${n.latitude},${n.longitude})`
      })(t.geoPointValue)
    : 'arrayValue' in t
    ? (function (n) {
        let r = '[',
          i = !0
        for (const o of n.values || []) i ? (i = !1) : (r += ','), (r += bg(o))
        return r + ']'
      })(t.arrayValue)
    : 'mapValue' in t
    ? (function (n) {
        const r = Object.keys(n.fields || {}).sort()
        let i = '{',
          o = !0
        for (const u of r)
          o ? (o = !1) : (i += ','), (i += `${u}:${bg(n.fields[u])}`)
        return i + '}'
      })(t.mapValue)
    : _e()
}
function _h(t) {
  switch (Zi(t)) {
    case 0:
    case 1:
      return 4
    case 2:
      return 8
    case 3:
    case 8:
      return 16
    case 4:
      const e = kf(t)
      return e ? 16 + _h(e) : 16
    case 5:
      return 2 * t.stringValue.length
    case 6:
      return Ji(t.bytesValue).approximateByteSize()
    case 7:
      return t.referenceValue.length
    case 9:
      return (function (r) {
        return (r.values || []).reduce((i, o) => i + _h(o), 0)
      })(t.arrayValue)
    case 10:
    case 11:
      return (function (r) {
        let i = 0
        return (
          vl(r.fields, (o, u) => {
            i += o.length + _h(u)
          }),
          i
        )
      })(t.mapValue)
    default:
      throw _e()
  }
}
function Fg(t) {
  return !!t && 'integerValue' in t
}
function Ym(t) {
  return !!t && 'arrayValue' in t
}
function z_(t) {
  return !!t && 'nullValue' in t
}
function B_(t) {
  return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue))
}
function Ap(t) {
  return !!t && 'mapValue' in t
}
function DO(t) {
  var e, n
  return (
    ((n = (
      ((e = t?.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === '__vector__'
  )
}
function Fu(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) }
  if (t.timestampValue && typeof t.timestampValue == 'object')
    return { timestampValue: Object.assign({}, t.timestampValue) }
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } }
    return vl(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = Fu(r))), e
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } }
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Fu(t.arrayValue.values[n])
    return e
  }
  return Object.assign({}, t)
}
function VO(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === '__max__'
  )
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
 */ class Rr {
  constructor(e) {
    this.value = e
  }
  static empty() {
    return new Rr({ mapValue: {} })
  }
  field(e) {
    if (e.isEmpty()) return this.value
    {
      let n = this.value
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !Ap(n))) return null
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Fu(n)
  }
  setAll(e) {
    let n = un.emptyPath(),
      r = {},
      i = []
    e.forEach((u, h) => {
      if (!n.isImmediateParentOf(h)) {
        const f = this.getFieldsMap(n)
        this.applyChanges(f, r, i), (r = {}), (i = []), (n = h.popLast())
      }
      u ? (r[h.lastSegment()] = Fu(u)) : i.push(h.lastSegment())
    })
    const o = this.getFieldsMap(n)
    this.applyChanges(o, r, i)
  }
  delete(e) {
    const n = this.field(e.popLast())
    Ap(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()]
  }
  isEqual(e) {
    return Lr(this.value, e.value)
  }
  getFieldsMap(e) {
    let n = this.value
    n.mapValue.fields || (n.mapValue = { fields: {} })
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)]
      ;(Ap(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i)
    }
    return n.mapValue.fields
  }
  applyChanges(e, n, r) {
    vl(n, (i, o) => (e[i] = o))
    for (const i of r) delete e[i]
  }
  clone() {
    return new Rr(Fu(this.value))
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
 */ class Xt {
  constructor(e, n, r, i, o, u, h) {
    ;(this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = o),
      (this.data = u),
      (this.documentState = h)
  }
  static newInvalidDocument(e) {
    return new Xt(e, 0, ye.min(), ye.min(), ye.min(), Rr.empty(), 0)
  }
  static newFoundDocument(e, n, r, i) {
    return new Xt(e, 1, n, ye.min(), r, i, 0)
  }
  static newNoDocument(e, n) {
    return new Xt(e, 2, n, ye.min(), ye.min(), Rr.empty(), 0)
  }
  static newUnknownDocument(e, n) {
    return new Xt(e, 3, n, ye.min(), ye.min(), Rr.empty(), 2)
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(ye.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    )
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = Rr.empty()),
      (this.documentState = 0),
      this
    )
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Rr.empty()),
      (this.documentState = 2),
      this
    )
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = ye.min()), this
  }
  setReadTime(e) {
    return (this.readTime = e), this
  }
  get hasLocalMutations() {
    return this.documentState === 1
  }
  get hasCommittedMutations() {
    return this.documentState === 2
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations
  }
  isValidDocument() {
    return this.documentType !== 0
  }
  isFoundDocument() {
    return this.documentType === 1
  }
  isNoDocument() {
    return this.documentType === 2
  }
  isUnknownDocument() {
    return this.documentType === 3
  }
  isEqual(e) {
    return (
      e instanceof Xt &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    )
  }
  mutableCopy() {
    return new Xt(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    )
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`
  }
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
 */ class Jh {
  constructor(e, n) {
    ;(this.position = e), (this.inclusive = n)
  }
}
function $_(t, e, n) {
  let r = 0
  for (let i = 0; i < t.position.length; i++) {
    const o = e[i],
      u = t.position[i]
    if (
      (o.field.isKeyField()
        ? (r = pe.comparator(pe.fromName(u.referenceValue), n.key))
        : (r = ga(u, n.data.field(o.field))),
      o.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break
  }
  return r
}
function j_(t, e) {
  if (t === null) return e === null
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1
  for (let n = 0; n < t.position.length; n++)
    if (!Lr(t.position[n], e.position[n])) return !1
  return !0
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
 */ class Zh {
  constructor(e, n = 'asc') {
    ;(this.field = e), (this.dir = n)
  }
}
function MO(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field)
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
 */ class wT {}
class It extends wT {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r)
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === 'in' || n === 'not-in'
        ? this.createKeyFieldInFilter(e, n, r)
        : new FO(e, n, r)
      : n === 'array-contains'
      ? new BO(e, r)
      : n === 'in'
      ? new $O(e, r)
      : n === 'not-in'
      ? new jO(e, r)
      : n === 'array-contains-any'
      ? new WO(e, r)
      : new It(e, n, r)
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === 'in' ? new UO(e, r) : new zO(e, r)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return this.op === '!='
      ? n !== null && this.matchesComparison(ga(n, this.value))
      : n !== null &&
          Zi(this.value) === Zi(n) &&
          this.matchesComparison(ga(n, this.value))
  }
  matchesComparison(e) {
    switch (this.op) {
      case '<':
        return e < 0
      case '<=':
        return e <= 0
      case '==':
        return e === 0
      case '!=':
        return e !== 0
      case '>':
        return e > 0
      case '>=':
        return e >= 0
      default:
        return _e()
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0
  }
  getFlattenedFilters() {
    return [this]
  }
  getFilters() {
    return [this]
  }
}
class Or extends wT {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ae = null)
  }
  static create(e, n) {
    return new Or(e, n)
  }
  matches(e) {
    return ET(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0
  }
  getFlattenedFilters() {
    return (
      this.ae !== null ||
        (this.ae = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          []
        )),
      this.ae
    )
  }
  getFilters() {
    return Object.assign([], this.filters)
  }
}
function ET(t) {
  return t.op === 'and'
}
function TT(t) {
  return bO(t) && ET(t)
}
function bO(t) {
  for (const e of t.filters) if (e instanceof Or) return !1
  return !0
}
function Ug(t) {
  if (t instanceof It)
    return t.field.canonicalString() + t.op.toString() + ma(t.value)
  if (TT(t)) return t.filters.map((e) => Ug(e)).join(',')
  {
    const e = t.filters.map((n) => Ug(n)).join(',')
    return `${t.op}(${e})`
  }
}
function ST(t, e) {
  return t instanceof It
    ? (function (r, i) {
        return (
          i instanceof It &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          Lr(r.value, i.value)
        )
      })(t, e)
    : t instanceof Or
    ? (function (r, i) {
        return i instanceof Or &&
          r.op === i.op &&
          r.filters.length === i.filters.length
          ? r.filters.reduce((o, u, h) => o && ST(u, i.filters[h]), !0)
          : !1
      })(t, e)
    : void _e()
}
function IT(t) {
  return t instanceof It
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${ma(n.value)}`
      })(t)
    : t instanceof Or
    ? (function (n) {
        return n.op.toString() + ' {' + n.getFilters().map(IT).join(' ,') + '}'
      })(t)
    : 'Filter'
}
class FO extends It {
  constructor(e, n, r) {
    super(e, n, r), (this.key = pe.fromName(r.referenceValue))
  }
  matches(e) {
    const n = pe.comparator(e.key, this.key)
    return this.matchesComparison(n)
  }
}
class UO extends It {
  constructor(e, n) {
    super(e, 'in', n), (this.keys = AT('in', n))
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key))
  }
}
class zO extends It {
  constructor(e, n) {
    super(e, 'not-in', n), (this.keys = AT('not-in', n))
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key))
  }
}
function AT(t, e) {
  var n
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => pe.fromName(r.referenceValue))
}
class BO extends It {
  constructor(e, n) {
    super(e, 'array-contains', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return Ym(n) && hl(n.arrayValue, this.value)
  }
}
class $O extends It {
  constructor(e, n) {
    super(e, 'in', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return n !== null && hl(this.value.arrayValue, n)
  }
}
class jO extends It {
  constructor(e, n) {
    super(e, 'not-in', n)
  }
  matches(e) {
    if (hl(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1
    const n = e.data.field(this.field)
    return n !== null && !hl(this.value.arrayValue, n)
  }
}
class WO extends It {
  constructor(e, n) {
    super(e, 'array-contains-any', n)
  }
  matches(e) {
    const n = e.data.field(this.field)
    return (
      !(!Ym(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => hl(this.value.arrayValue, r))
    )
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
 */ class qO {
  constructor(e, n = null, r = [], i = [], o = null, u = null, h = null) {
    ;(this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = o),
      (this.startAt = u),
      (this.endAt = h),
      (this.ue = null)
  }
}
function W_(t, e = null, n = [], r = [], i = null, o = null, u = null) {
  return new qO(t, e, n, r, i, o, u)
}
function Xm(t) {
  const e = Ne(t)
  if (e.ue === null) {
    let n = e.path.canonicalString()
    e.collectionGroup !== null && (n += '|cg:' + e.collectionGroup),
      (n += '|f:'),
      (n += e.filters.map((r) => Ug(r)).join(',')),
      (n += '|ob:'),
      (n += e.orderBy
        .map((r) =>
          (function (o) {
            return o.field.canonicalString() + o.dir
          })(r)
        )
        .join(',')),
      Pf(e.limit) || ((n += '|l:'), (n += e.limit)),
      e.startAt &&
        ((n += '|lb:'),
        (n += e.startAt.inclusive ? 'b:' : 'a:'),
        (n += e.startAt.position.map((r) => ma(r)).join(','))),
      e.endAt &&
        ((n += '|ub:'),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => ma(r)).join(','))),
      (e.ue = n)
  }
  return e.ue
}
function Jm(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1
  for (let n = 0; n < t.orderBy.length; n++)
    if (!MO(t.orderBy[n], e.orderBy[n])) return !1
  if (t.filters.length !== e.filters.length) return !1
  for (let n = 0; n < t.filters.length; n++)
    if (!ST(t.filters[n], e.filters[n])) return !1
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!j_(t.startAt, e.startAt) &&
    j_(t.endAt, e.endAt)
  )
}
function zg(t) {
  return (
    pe.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  )
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
 */ class Nf {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    o = null,
    u = 'F',
    h = null,
    f = null
  ) {
    ;(this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = o),
      (this.limitType = u),
      (this.startAt = h),
      (this.endAt = f),
      (this.ce = null),
      (this.le = null),
      (this.he = null),
      this.startAt,
      this.endAt
  }
}
function HO(t, e, n, r, i, o, u, h) {
  return new Nf(t, e, n, r, i, o, u, h)
}
function Zm(t) {
  return new Nf(t)
}
function q_(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  )
}
function KO(t) {
  return t.collectionGroup !== null
}
function Uu(t) {
  const e = Ne(t)
  if (e.ce === null) {
    e.ce = []
    const n = new Set()
    for (const o of e.explicitOrderBy)
      e.ce.push(o), n.add(o.field.canonicalString())
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : 'asc'
    ;(function (u) {
      let h = new Lt(un.comparator)
      return (
        u.filters.forEach((f) => {
          f.getFlattenedFilters().forEach((g) => {
            g.isInequality() && (h = h.add(g.field))
          })
        }),
        h
      )
    })(e).forEach((o) => {
      n.has(o.canonicalString()) || o.isKeyField() || e.ce.push(new Zh(o, r))
    }),
      n.has(un.keyField().canonicalString()) ||
        e.ce.push(new Zh(un.keyField(), r))
  }
  return e.ce
}
function Nr(t) {
  const e = Ne(t)
  return e.le || (e.le = GO(e, Uu(t))), e.le
}
function GO(t, e) {
  if (t.limitType === 'F')
    return W_(
      t.path,
      t.collectionGroup,
      e,
      t.filters,
      t.limit,
      t.startAt,
      t.endAt
    )
  {
    e = e.map((i) => {
      const o = i.dir === 'desc' ? 'asc' : 'desc'
      return new Zh(i.field, o)
    })
    const n = t.endAt ? new Jh(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new Jh(t.startAt.position, t.startAt.inclusive) : null
    return W_(t.path, t.collectionGroup, e, t.filters, t.limit, n, r)
  }
}
function Bg(t, e, n) {
  return new Nf(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  )
}
function Lf(t, e) {
  return Jm(Nr(t), Nr(e)) && t.limitType === e.limitType
}
function CT(t) {
  return `${Xm(Nr(t))}|lt:${t.limitType}`
}
function Do(t) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString()
    return (
      n.collectionGroup !== null &&
        (r += ' collectionGroup=' + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((i) => IT(i)).join(', ')}]`),
      Pf(n.limit) || (r += ', limit: ' + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((i) =>
            (function (u) {
              return `${u.field.canonicalString()} (${u.dir})`
            })(i)
          )
          .join(', ')}]`),
      n.startAt &&
        ((r += ', startAt: '),
        (r += n.startAt.inclusive ? 'b:' : 'a:'),
        (r += n.startAt.position.map((i) => ma(i)).join(','))),
      n.endAt &&
        ((r += ', endAt: '),
        (r += n.endAt.inclusive ? 'a:' : 'b:'),
        (r += n.endAt.position.map((i) => ma(i)).join(','))),
      `Target(${r})`
    )
  })(Nr(t))}; limitType=${t.limitType})`
}
function Of(t, e) {
  return (
    e.isFoundDocument() &&
    (function (r, i) {
      const o = i.key.path
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(o)
        : pe.isDocumentKey(r.path)
        ? r.path.isEqual(o)
        : r.path.isImmediateParentOf(o)
    })(t, e) &&
    (function (r, i) {
      for (const o of Uu(r))
        if (!o.field.isKeyField() && i.data.field(o.field) === null) return !1
      return !0
    })(t, e) &&
    (function (r, i) {
      for (const o of r.filters) if (!o.matches(i)) return !1
      return !0
    })(t, e) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (u, h, f) {
            const g = $_(u, h, f)
            return u.inclusive ? g <= 0 : g < 0
          })(r.startAt, Uu(r), i)) ||
        (r.endAt &&
          !(function (u, h, f) {
            const g = $_(u, h, f)
            return u.inclusive ? g >= 0 : g > 0
          })(r.endAt, Uu(r), i))
      )
    })(t, e)
  )
}
function QO(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  )
}
function RT(t) {
  return (e, n) => {
    let r = !1
    for (const i of Uu(t)) {
      const o = YO(i, e, n)
      if (o !== 0) return o
      r = r || i.field.isKeyField()
    }
    return 0
  }
}
function YO(t, e, n) {
  const r = t.field.isKeyField()
    ? pe.comparator(e.key, n.key)
    : (function (o, u, h) {
        const f = u.data.field(o),
          g = h.data.field(o)
        return f !== null && g !== null ? ga(f, g) : _e()
      })(t.field, e, n)
  switch (t.dir) {
    case 'asc':
      return r
    case 'desc':
      return -1 * r
    default:
      return _e()
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
 */ class Ys {
  constructor(e, n) {
    ;(this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0)
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n]
    if (r !== void 0) {
      for (const [i, o] of r) if (this.equalsFn(i, e)) return o
    }
  }
  has(e) {
    return this.get(e) !== void 0
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r]
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++
    for (let o = 0; o < i.length; o++)
      if (this.equalsFn(i[o][0], e)) return void (i[o] = [e, n])
    i.push([e, n]), this.innerSize++
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n]
    if (r === void 0) return !1
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        )
    return !1
  }
  forEach(e) {
    vl(this.inner, (n, r) => {
      for (const [i, o] of r) e(i, o)
    })
  }
  isEmpty() {
    return NO(this.inner)
  }
  size() {
    return this.innerSize
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
 */ const XO = new gt(pe.comparator)
function es() {
  return XO
}
const xT = new gt(pe.comparator)
function Cu(...t) {
  let e = xT
  for (const n of t) e = e.insert(n.key, n)
  return e
}
function JO(t) {
  let e = xT
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e
}
function Ms() {
  return zu()
}
function PT() {
  return zu()
}
function zu() {
  return new Ys(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  )
}
const ZO = new Lt(pe.comparator)
function Oe(...t) {
  let e = ZO
  for (const n of t) e = e.add(n)
  return e
}
const eD = new Lt(Le)
function tD() {
  return eD
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
 */ function nD(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: 'NaN' }
    if (e === 1 / 0) return { doubleValue: 'Infinity' }
    if (e === -1 / 0) return { doubleValue: '-Infinity' }
  }
  return { doubleValue: Mg(e) ? '-0' : e }
}
function rD(t) {
  return { integerValue: '' + t }
}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */ class Df {
  constructor() {
    this._ = void 0
  }
}
function iD(t, e, n) {
  return t instanceof $g
    ? (function (i, o) {
        const u = {
          fields: {
            __type__: { stringValue: 'server_timestamp' },
            __local_write_time__: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        }
        return (
          o && Qm(o) && (o = kf(o)),
          o && (u.fields.__previous_value__ = o),
          { mapValue: u }
        )
      })(n, e)
    : t instanceof ef
    ? kT(t, e)
    : t instanceof tf
    ? NT(t, e)
    : (function (i, o) {
        const u = oD(i, o),
          h = H_(u) + H_(i.Pe)
        return Fg(u) && Fg(i.Pe) ? rD(h) : nD(i.serializer, h)
      })(t, e)
}
function sD(t, e, n) {
  return t instanceof ef ? kT(t, e) : t instanceof tf ? NT(t, e) : n
}
function oD(t, e) {
  return t instanceof jg
    ? (function (r) {
        return (
          Fg(r) ||
          (function (o) {
            return !!o && 'doubleValue' in o
          })(r)
        )
      })(e)
      ? e
      : { integerValue: 0 }
    : null
}
class $g extends Df {}
class ef extends Df {
  constructor(e) {
    super(), (this.elements = e)
  }
}
function kT(t, e) {
  const n = LT(e)
  for (const r of t.elements) n.some((i) => Lr(i, r)) || n.push(r)
  return { arrayValue: { values: n } }
}
class tf extends Df {
  constructor(e) {
    super(), (this.elements = e)
  }
}
function NT(t, e) {
  let n = LT(e)
  for (const r of t.elements) n = n.filter((i) => !Lr(i, r))
  return { arrayValue: { values: n } }
}
class jg extends Df {
  constructor(e, n) {
    super(), (this.serializer = e), (this.Pe = n)
  }
}
function H_(t) {
  return dt(t.integerValue || t.doubleValue)
}
function LT(t) {
  return Ym(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
}
function aD(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (r, i) {
      return (r instanceof ef && i instanceof ef) ||
        (r instanceof tf && i instanceof tf)
        ? pa(r.elements, i.elements, Lr)
        : r instanceof jg && i instanceof jg
        ? Lr(r.Pe, i.Pe)
        : r instanceof $g && i instanceof $g
    })(t.transform, e.transform)
  )
}
class Bs {
  constructor(e, n) {
    ;(this.updateTime = e), (this.exists = n)
  }
  static none() {
    return new Bs()
  }
  static exists(e) {
    return new Bs(void 0, e)
  }
  static updateTime(e) {
    return new Bs(e)
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    )
  }
}
function wh(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument()
}
class ey {}
function OT(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null
  if (e === null)
    return t.isNoDocument()
      ? new lD(t.key, Bs.none())
      : new ty(t.key, t.data, Bs.none())
  {
    const n = t.data,
      r = Rr.empty()
    let i = new Lt(un.comparator)
    for (let o of e.fields)
      if (!i.has(o)) {
        let u = n.field(o)
        u === null && o.length > 1 && ((o = o.popLast()), (u = n.field(o))),
          u === null ? r.delete(o) : r.set(o, u),
          (i = i.add(o))
      }
    return new Vf(t.key, r, new Mi(i.toArray()), Bs.none())
  }
}
function uD(t, e, n) {
  t instanceof ty
    ? (function (i, o, u) {
        const h = i.value.clone(),
          f = G_(i.fieldTransforms, o, u.transformResults)
        h.setAll(f),
          o.convertToFoundDocument(u.version, h).setHasCommittedMutations()
      })(t, e, n)
    : t instanceof Vf
    ? (function (i, o, u) {
        if (!wh(i.precondition, o))
          return void o.convertToUnknownDocument(u.version)
        const h = G_(i.fieldTransforms, o, u.transformResults),
          f = o.data
        f.setAll(DT(i)),
          f.setAll(h),
          o.convertToFoundDocument(u.version, f).setHasCommittedMutations()
      })(t, e, n)
    : (function (i, o, u) {
        o.convertToNoDocument(u.version).setHasCommittedMutations()
      })(0, e, n)
}
function Bu(t, e, n, r) {
  return t instanceof ty
    ? (function (o, u, h, f) {
        if (!wh(o.precondition, u)) return h
        const g = o.value.clone(),
          v = Q_(o.fieldTransforms, f, u)
        return (
          g.setAll(v),
          u.convertToFoundDocument(u.version, g).setHasLocalMutations(),
          null
        )
      })(t, e, n, r)
    : t instanceof Vf
    ? (function (o, u, h, f) {
        if (!wh(o.precondition, u)) return h
        const g = Q_(o.fieldTransforms, f, u),
          v = u.data
        return (
          v.setAll(DT(o)),
          v.setAll(g),
          u.convertToFoundDocument(u.version, v).setHasLocalMutations(),
          h === null
            ? null
            : h
                .unionWith(o.fieldMask.fields)
                .unionWith(o.fieldTransforms.map((E) => E.field))
        )
      })(t, e, n, r)
    : (function (o, u, h) {
        return wh(o.precondition, u)
          ? (u.convertToNoDocument(u.version).setHasLocalMutations(), null)
          : h
      })(t, e, n)
}
function K_(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && pa(r, i, (o, u) => aD(o, u)))
      )
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  )
}
class ty extends ey {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0)
  }
  getFieldMask() {
    return null
  }
}
class Vf extends ey {
  constructor(e, n, r, i, o = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = o),
      (this.type = 1)
  }
  getFieldMask() {
    return this.fieldMask
  }
}
function DT(t) {
  const e = new Map()
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n)
        e.set(n, r)
      }
    }),
    e
  )
}
function G_(t, e, n) {
  const r = new Map()
  rt(t.length === n.length)
  for (let i = 0; i < n.length; i++) {
    const o = t[i],
      u = o.transform,
      h = e.data.field(o.field)
    r.set(o.field, sD(u, h, n[i]))
  }
  return r
}
function Q_(t, e, n) {
  const r = new Map()
  for (const i of t) {
    const o = i.transform,
      u = n.data.field(i.field)
    r.set(i.field, iD(o, u, e))
  }
  return r
}
class lD extends ey {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = [])
  }
  getFieldMask() {
    return null
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
 */ class cD {
  constructor(e, n, r, i) {
    ;(this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i)
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults
    for (let i = 0; i < this.mutations.length; i++) {
      const o = this.mutations[i]
      o.key.isEqual(e.key) && uD(o, e, r[i])
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Bu(r, e, n, this.localWriteTime))
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = Bu(r, e, n, this.localWriteTime))
    return n
  }
  applyToLocalDocumentSet(e, n) {
    const r = PT()
    return (
      this.mutations.forEach((i) => {
        const o = e.get(i.key),
          u = o.overlayedDocument
        let h = this.applyToLocalView(u, o.mutatedFields)
        h = n.has(i.key) ? null : h
        const f = OT(u, h)
        f !== null && r.set(i.key, f),
          u.isValidDocument() || u.convertToNoDocument(ye.min())
      }),
      r
    )
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), Oe())
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      pa(this.mutations, e.mutations, (n, r) => K_(n, r)) &&
      pa(this.baseMutations, e.baseMutations, (n, r) => K_(n, r))
    )
  }
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
 */ class hD {
  constructor(e, n) {
    ;(this.largestBatchId = e), (this.mutation = n)
  }
  getKey() {
    return this.mutation.key
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
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
 */ class fD {
  constructor(e, n) {
    ;(this.count = e), (this.unchangedNames = n)
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
 */ var vt, Pe
function VT(t) {
  if (t === void 0) return li('GRPC error has no .code'), re.UNKNOWN
  switch (t) {
    case vt.OK:
      return re.OK
    case vt.CANCELLED:
      return re.CANCELLED
    case vt.UNKNOWN:
      return re.UNKNOWN
    case vt.DEADLINE_EXCEEDED:
      return re.DEADLINE_EXCEEDED
    case vt.RESOURCE_EXHAUSTED:
      return re.RESOURCE_EXHAUSTED
    case vt.INTERNAL:
      return re.INTERNAL
    case vt.UNAVAILABLE:
      return re.UNAVAILABLE
    case vt.UNAUTHENTICATED:
      return re.UNAUTHENTICATED
    case vt.INVALID_ARGUMENT:
      return re.INVALID_ARGUMENT
    case vt.NOT_FOUND:
      return re.NOT_FOUND
    case vt.ALREADY_EXISTS:
      return re.ALREADY_EXISTS
    case vt.PERMISSION_DENIED:
      return re.PERMISSION_DENIED
    case vt.FAILED_PRECONDITION:
      return re.FAILED_PRECONDITION
    case vt.ABORTED:
      return re.ABORTED
    case vt.OUT_OF_RANGE:
      return re.OUT_OF_RANGE
    case vt.UNIMPLEMENTED:
      return re.UNIMPLEMENTED
    case vt.DATA_LOSS:
      return re.DATA_LOSS
    default:
      return _e()
  }
}
;((Pe = vt || (vt = {}))[(Pe.OK = 0)] = 'OK'),
  (Pe[(Pe.CANCELLED = 1)] = 'CANCELLED'),
  (Pe[(Pe.UNKNOWN = 2)] = 'UNKNOWN'),
  (Pe[(Pe.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (Pe[(Pe.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (Pe[(Pe.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (Pe[(Pe.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (Pe[(Pe.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (Pe[(Pe.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (Pe[(Pe.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (Pe[(Pe.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (Pe[(Pe.ABORTED = 10)] = 'ABORTED'),
  (Pe[(Pe.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (Pe[(Pe.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (Pe[(Pe.INTERNAL = 13)] = 'INTERNAL'),
  (Pe[(Pe.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (Pe[(Pe.DATA_LOSS = 15)] = 'DATA_LOSS')
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
 */ function dD() {
  return new TextEncoder()
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
 */ const pD = new zs([4294967295, 4294967295], 0)
function Y_(t) {
  const e = dD().encode(t),
    n = new fT()
  return n.update(e), new Uint8Array(n.digest())
}
function X_(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    o = e.getUint32(12, !0)
  return [new zs([n, r], 0), new zs([i, o], 0)]
}
class ny {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new Ru(`Invalid padding: ${n}`)
    if (r < 0) throw new Ru(`Invalid hash count: ${r}`)
    if (e.length > 0 && this.hashCount === 0)
      throw new Ru(`Invalid hash count: ${r}`)
    if (e.length === 0 && n !== 0)
      throw new Ru(`Invalid padding when bitmap length is 0: ${n}`)
    ;(this.Ie = 8 * e.length - n), (this.Te = zs.fromNumber(this.Ie))
  }
  Ee(e, n, r) {
    let i = e.add(n.multiply(zs.fromNumber(r)))
    return (
      i.compare(pD) === 1 && (i = new zs([i.getBits(0), i.getBits(1)], 0)),
      i.modulo(this.Te).toNumber()
    )
  }
  de(e) {
    return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0
  }
  mightContain(e) {
    if (this.Ie === 0) return !1
    const n = Y_(e),
      [r, i] = X_(n)
    for (let o = 0; o < this.hashCount; o++) {
      const u = this.Ee(r, i, o)
      if (!this.de(u)) return !1
    }
    return !0
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - (e % 8),
      o = new Uint8Array(Math.ceil(e / 8)),
      u = new ny(o, i, n)
    return r.forEach((h) => u.insert(h)), u
  }
  insert(e) {
    if (this.Ie === 0) return
    const n = Y_(e),
      [r, i] = X_(n)
    for (let o = 0; o < this.hashCount; o++) {
      const u = this.Ee(r, i, o)
      this.Ae(u)
    }
  }
  Ae(e) {
    const n = Math.floor(e / 8),
      r = e % 8
    this.bitmap[n] |= 1 << r
  }
}
class Ru extends Error {
  constructor() {
    super(...arguments), (this.name = 'BloomFilterError')
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
 */ class Mf {
  constructor(e, n, r, i, o) {
    ;(this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = o)
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map()
    return (
      i.set(e, _l.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new Mf(ye.min(), i, new gt(Le), es(), Oe())
    )
  }
}
class _l {
  constructor(e, n, r, i, o) {
    ;(this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = o)
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new _l(r, n, Oe(), Oe(), Oe())
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
 */ class Eh {
  constructor(e, n, r, i) {
    ;(this.Re = e), (this.removedTargetIds = n), (this.key = r), (this.Ve = i)
  }
}
class MT {
  constructor(e, n) {
    ;(this.targetId = e), (this.me = n)
  }
}
class bT {
  constructor(e, n, r = zt.EMPTY_BYTE_STRING, i = null) {
    ;(this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i)
  }
}
class J_ {
  constructor() {
    ;(this.fe = 0),
      (this.ge = e1()),
      (this.pe = zt.EMPTY_BYTE_STRING),
      (this.ye = !1),
      (this.we = !0)
  }
  get current() {
    return this.ye
  }
  get resumeToken() {
    return this.pe
  }
  get Se() {
    return this.fe !== 0
  }
  get be() {
    return this.we
  }
  De(e) {
    e.approximateByteSize() > 0 && ((this.we = !0), (this.pe = e))
  }
  ve() {
    let e = Oe(),
      n = Oe(),
      r = Oe()
    return (
      this.ge.forEach((i, o) => {
        switch (o) {
          case 0:
            e = e.add(i)
            break
          case 2:
            n = n.add(i)
            break
          case 1:
            r = r.add(i)
            break
          default:
            _e()
        }
      }),
      new _l(this.pe, this.ye, e, n, r)
    )
  }
  Ce() {
    ;(this.we = !1), (this.ge = e1())
  }
  Fe(e, n) {
    ;(this.we = !0), (this.ge = this.ge.insert(e, n))
  }
  Me(e) {
    ;(this.we = !0), (this.ge = this.ge.remove(e))
  }
  xe() {
    this.fe += 1
  }
  Oe() {
    ;(this.fe -= 1), rt(this.fe >= 0)
  }
  Ne() {
    ;(this.we = !0), (this.ye = !0)
  }
}
class gD {
  constructor(e) {
    ;(this.Le = e),
      (this.Be = new Map()),
      (this.ke = es()),
      (this.qe = Z_()),
      (this.Qe = new gt(Le))
  }
  Ke(e) {
    for (const n of e.Re)
      e.Ve && e.Ve.isFoundDocument()
        ? this.$e(n, e.Ve)
        : this.Ue(n, e.key, e.Ve)
    for (const n of e.removedTargetIds) this.Ue(n, e.key, e.Ve)
  }
  We(e) {
    this.forEachTarget(e, (n) => {
      const r = this.Ge(n)
      switch (e.state) {
        case 0:
          this.ze(n) && r.De(e.resumeToken)
          break
        case 1:
          r.Oe(), r.Se || r.Ce(), r.De(e.resumeToken)
          break
        case 2:
          r.Oe(), r.Se || this.removeTarget(n)
          break
        case 3:
          this.ze(n) && (r.Ne(), r.De(e.resumeToken))
          break
        case 4:
          this.ze(n) && (this.je(n), r.De(e.resumeToken))
          break
        default:
          _e()
      }
    })
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.Be.forEach((r, i) => {
          this.ze(i) && n(i)
        })
  }
  He(e) {
    const n = e.targetId,
      r = e.me.count,
      i = this.Je(n)
    if (i) {
      const o = i.target
      if (zg(o))
        if (r === 0) {
          const u = new pe(o.path)
          this.Ue(n, u, Xt.newNoDocument(u, ye.min()))
        } else rt(r === 1)
      else {
        const u = this.Ye(n)
        if (u !== r) {
          const h = this.Ze(e),
            f = h ? this.Xe(h, e, u) : 1
          if (f !== 0) {
            this.je(n)
            const g =
              f === 2
                ? 'TargetPurposeExistenceFilterMismatchBloom'
                : 'TargetPurposeExistenceFilterMismatch'
            this.Qe = this.Qe.insert(n, g)
          }
        }
      }
    }
  }
  Ze(e) {
    const n = e.me.unchangedNames
    if (!n || !n.bits) return null
    const {
      bits: { bitmap: r = '', padding: i = 0 },
      hashCount: o = 0,
    } = n
    let u, h
    try {
      u = Ji(r).toUint8Array()
    } catch (f) {
      if (f instanceof _T)
        return (
          da(
            'Decoding the base64 bloom filter in existence filter failed (' +
              f.message +
              '); ignoring the bloom filter and falling back to full re-query.'
          ),
          null
        )
      throw f
    }
    try {
      h = new ny(u, i, o)
    } catch (f) {
      return (
        da(
          f instanceof Ru
            ? 'BloomFilter error: '
            : 'Applying bloom filter failed: ',
          f
        ),
        null
      )
    }
    return h.Ie === 0 ? null : h
  }
  Xe(e, n, r) {
    return n.me.count === r - this.nt(e, n.targetId) ? 0 : 2
  }
  nt(e, n) {
    const r = this.Le.getRemoteKeysForTarget(n)
    let i = 0
    return (
      r.forEach((o) => {
        const u = this.Le.tt(),
          h = `projects/${u.projectId}/databases/${
            u.database
          }/documents/${o.path.canonicalString()}`
        e.mightContain(h) || (this.Ue(n, o, null), i++)
      }),
      i
    )
  }
  rt(e) {
    const n = new Map()
    this.Be.forEach((o, u) => {
      const h = this.Je(u)
      if (h) {
        if (o.current && zg(h.target)) {
          const f = new pe(h.target.path)
          this.ke.get(f) !== null ||
            this.it(u, f) ||
            this.Ue(u, f, Xt.newNoDocument(f, e))
        }
        o.be && (n.set(u, o.ve()), o.Ce())
      }
    })
    let r = Oe()
    this.qe.forEach((o, u) => {
      let h = !0
      u.forEachWhile((f) => {
        const g = this.Je(f)
        return (
          !g || g.purpose === 'TargetPurposeLimboResolution' || ((h = !1), !1)
        )
      }),
        h && (r = r.add(o))
    }),
      this.ke.forEach((o, u) => u.setReadTime(e))
    const i = new Mf(e, n, this.Qe, this.ke, r)
    return (this.ke = es()), (this.qe = Z_()), (this.Qe = new gt(Le)), i
  }
  $e(e, n) {
    if (!this.ze(e)) return
    const r = this.it(e, n.key) ? 2 : 0
    this.Ge(e).Fe(n.key, r),
      (this.ke = this.ke.insert(n.key, n)),
      (this.qe = this.qe.insert(n.key, this.st(n.key).add(e)))
  }
  Ue(e, n, r) {
    if (!this.ze(e)) return
    const i = this.Ge(e)
    this.it(e, n) ? i.Fe(n, 1) : i.Me(n),
      (this.qe = this.qe.insert(n, this.st(n).delete(e))),
      r && (this.ke = this.ke.insert(n, r))
  }
  removeTarget(e) {
    this.Be.delete(e)
  }
  Ye(e) {
    const n = this.Ge(e).ve()
    return (
      this.Le.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    )
  }
  xe(e) {
    this.Ge(e).xe()
  }
  Ge(e) {
    let n = this.Be.get(e)
    return n || ((n = new J_()), this.Be.set(e, n)), n
  }
  st(e) {
    let n = this.qe.get(e)
    return n || ((n = new Lt(Le)), (this.qe = this.qe.insert(e, n))), n
  }
  ze(e) {
    const n = this.Je(e) !== null
    return n || se('WatchChangeAggregator', 'Detected inactive target', e), n
  }
  Je(e) {
    const n = this.Be.get(e)
    return n && n.Se ? null : this.Le.ot(e)
  }
  je(e) {
    this.Be.set(e, new J_()),
      this.Le.getRemoteKeysForTarget(e).forEach((n) => {
        this.Ue(e, n, null)
      })
  }
  it(e, n) {
    return this.Le.getRemoteKeysForTarget(e).has(n)
  }
}
function Z_() {
  return new gt(pe.comparator)
}
function e1() {
  return new gt(pe.comparator)
}
const mD = { asc: 'ASCENDING', desc: 'DESCENDING' },
  yD = {
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '==': 'EQUAL',
    '!=': 'NOT_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
    in: 'IN',
    'not-in': 'NOT_IN',
    'array-contains-any': 'ARRAY_CONTAINS_ANY',
  },
  vD = { and: 'AND', or: 'OR' }
class _D {
  constructor(e, n) {
    ;(this.databaseId = e), (this.useProto3Json = n)
  }
}
function Wg(t, e) {
  return t.useProto3Json || Pf(e) ? e : { value: e }
}
function wD(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, '')
        .replace('Z', '')}.${('000000000' + e.nanoseconds).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds }
}
function ED(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array()
}
function ra(t) {
  return (
    rt(!!t),
    ye.fromTimestamp(
      (function (n) {
        const r = Xi(n)
        return new An(r.seconds, r.nanos)
      })(t)
    )
  )
}
function TD(t, e) {
  return qg(t, e).canonicalString()
}
function qg(t, e) {
  const n = (function (i) {
    return new ut(['projects', i.projectId, 'databases', i.database])
  })(t).child('documents')
  return e === void 0 ? n : n.child(e)
}
function FT(t) {
  const e = ut.fromString(t)
  return rt(jT(e)), e
}
function Cp(t, e) {
  const n = FT(e)
  if (n.get(1) !== t.databaseId.projectId)
    throw new de(
      re.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        n.get(1) +
        ' vs ' +
        t.databaseId.projectId
    )
  if (n.get(3) !== t.databaseId.database)
    throw new de(
      re.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        n.get(3) +
        ' vs ' +
        t.databaseId.database
    )
  return new pe(zT(n))
}
function UT(t, e) {
  return TD(t.databaseId, e)
}
function SD(t) {
  const e = FT(t)
  return e.length === 4 ? ut.emptyPath() : zT(e)
}
function t1(t) {
  return new ut([
    'projects',
    t.databaseId.projectId,
    'databases',
    t.databaseId.database,
  ]).canonicalString()
}
function zT(t) {
  return rt(t.length > 4 && t.get(4) === 'documents'), t.popFirst(5)
}
function ID(t, e) {
  let n
  if ('targetChange' in e) {
    e.targetChange
    const r = (function (g) {
        return g === 'NO_CHANGE'
          ? 0
          : g === 'ADD'
          ? 1
          : g === 'REMOVE'
          ? 2
          : g === 'CURRENT'
          ? 3
          : g === 'RESET'
          ? 4
          : _e()
      })(e.targetChange.targetChangeType || 'NO_CHANGE'),
      i = e.targetChange.targetIds || [],
      o = (function (g, v) {
        return g.useProto3Json
          ? (rt(v === void 0 || typeof v == 'string'),
            zt.fromBase64String(v || ''))
          : (rt(v === void 0 || v instanceof Buffer || v instanceof Uint8Array),
            zt.fromUint8Array(v || new Uint8Array()))
      })(t, e.targetChange.resumeToken),
      u = e.targetChange.cause,
      h =
        u &&
        (function (g) {
          const v = g.code === void 0 ? re.UNKNOWN : VT(g.code)
          return new de(v, g.message || '')
        })(u)
    n = new bT(r, i, o, h || null)
  } else if ('documentChange' in e) {
    e.documentChange
    const r = e.documentChange
    r.document, r.document.name, r.document.updateTime
    const i = Cp(t, r.document.name),
      o = ra(r.document.updateTime),
      u = r.document.createTime ? ra(r.document.createTime) : ye.min(),
      h = new Rr({ mapValue: { fields: r.document.fields } }),
      f = Xt.newFoundDocument(i, o, u, h),
      g = r.targetIds || [],
      v = r.removedTargetIds || []
    n = new Eh(g, v, f.key, f)
  } else if ('documentDelete' in e) {
    e.documentDelete
    const r = e.documentDelete
    r.document
    const i = Cp(t, r.document),
      o = r.readTime ? ra(r.readTime) : ye.min(),
      u = Xt.newNoDocument(i, o),
      h = r.removedTargetIds || []
    n = new Eh([], h, u.key, u)
  } else if ('documentRemove' in e) {
    e.documentRemove
    const r = e.documentRemove
    r.document
    const i = Cp(t, r.document),
      o = r.removedTargetIds || []
    n = new Eh([], o, i, null)
  } else {
    if (!('filter' in e)) return _e()
    {
      e.filter
      const r = e.filter
      r.targetId
      const { count: i = 0, unchangedNames: o } = r,
        u = new fD(i, o),
        h = r.targetId
      n = new MT(h, u)
    }
  }
  return n
}
function AD(t, e) {
  return { documents: [UT(t, e.path)] }
}
function CD(t, e) {
  const n = { structuredQuery: {} },
    r = e.path
  let i
  e.collectionGroup !== null
    ? ((i = r),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((i = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = UT(t, i))
  const o = (function (g) {
    if (g.length !== 0) return $T(Or.create(g, 'and'))
  })(e.filters)
  o && (n.structuredQuery.where = o)
  const u = (function (g) {
    if (g.length !== 0)
      return g.map((v) =>
        (function (_) {
          return { field: Vo(_.field), direction: PD(_.dir) }
        })(v)
      )
  })(e.orderBy)
  u && (n.structuredQuery.orderBy = u)
  const h = Wg(t, e.limit)
  return (
    h !== null && (n.structuredQuery.limit = h),
    e.startAt &&
      (n.structuredQuery.startAt = (function (g) {
        return { before: g.inclusive, values: g.position }
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (g) {
        return { before: !g.inclusive, values: g.position }
      })(e.endAt)),
    { _t: n, parent: i }
  )
}
function RD(t) {
  let e = SD(t.parent)
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0
  let i = null
  if (r > 0) {
    rt(r === 1)
    const v = n.from[0]
    v.allDescendants ? (i = v.collectionId) : (e = e.child(v.collectionId))
  }
  let o = []
  n.where &&
    (o = (function (E) {
      const _ = BT(E)
      return _ instanceof Or && TT(_) ? _.getFilters() : [_]
    })(n.where))
  let u = []
  n.orderBy &&
    (u = (function (E) {
      return E.map((_) =>
        (function (b) {
          return new Zh(
            Mo(b.field),
            (function (j) {
              switch (j) {
                case 'ASCENDING':
                  return 'asc'
                case 'DESCENDING':
                  return 'desc'
                default:
                  return
              }
            })(b.direction)
          )
        })(_)
      )
    })(n.orderBy))
  let h = null
  n.limit &&
    (h = (function (E) {
      let _
      return (_ = typeof E == 'object' ? E.value : E), Pf(_) ? null : _
    })(n.limit))
  let f = null
  n.startAt &&
    (f = (function (E) {
      const _ = !!E.before,
        L = E.values || []
      return new Jh(L, _)
    })(n.startAt))
  let g = null
  return (
    n.endAt &&
      (g = (function (E) {
        const _ = !E.before,
          L = E.values || []
        return new Jh(L, _)
      })(n.endAt)),
    HO(e, i, u, o, h, 'F', f, g)
  )
}
function xD(t, e) {
  const n = (function (i) {
    switch (i) {
      case 'TargetPurposeListen':
        return null
      case 'TargetPurposeExistenceFilterMismatch':
        return 'existence-filter-mismatch'
      case 'TargetPurposeExistenceFilterMismatchBloom':
        return 'existence-filter-mismatch-bloom'
      case 'TargetPurposeLimboResolution':
        return 'limbo-document'
      default:
        return _e()
    }
  })(e.purpose)
  return n == null ? null : { 'goog-listen-tags': n }
}
function BT(t) {
  return t.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case 'IS_NAN':
            const r = Mo(n.unaryFilter.field)
            return It.create(r, '==', { doubleValue: NaN })
          case 'IS_NULL':
            const i = Mo(n.unaryFilter.field)
            return It.create(i, '==', { nullValue: 'NULL_VALUE' })
          case 'IS_NOT_NAN':
            const o = Mo(n.unaryFilter.field)
            return It.create(o, '!=', { doubleValue: NaN })
          case 'IS_NOT_NULL':
            const u = Mo(n.unaryFilter.field)
            return It.create(u, '!=', { nullValue: 'NULL_VALUE' })
          default:
            return _e()
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (n) {
        return It.create(
          Mo(n.fieldFilter.field),
          (function (i) {
            switch (i) {
              case 'EQUAL':
                return '=='
              case 'NOT_EQUAL':
                return '!='
              case 'GREATER_THAN':
                return '>'
              case 'GREATER_THAN_OR_EQUAL':
                return '>='
              case 'LESS_THAN':
                return '<'
              case 'LESS_THAN_OR_EQUAL':
                return '<='
              case 'ARRAY_CONTAINS':
                return 'array-contains'
              case 'IN':
                return 'in'
              case 'NOT_IN':
                return 'not-in'
              case 'ARRAY_CONTAINS_ANY':
                return 'array-contains-any'
              default:
                return _e()
            }
          })(n.fieldFilter.op),
          n.fieldFilter.value
        )
      })(t)
    : t.compositeFilter !== void 0
    ? (function (n) {
        return Or.create(
          n.compositeFilter.filters.map((r) => BT(r)),
          (function (i) {
            switch (i) {
              case 'AND':
                return 'and'
              case 'OR':
                return 'or'
              default:
                return _e()
            }
          })(n.compositeFilter.op)
        )
      })(t)
    : _e()
}
function PD(t) {
  return mD[t]
}
function kD(t) {
  return yD[t]
}
function ND(t) {
  return vD[t]
}
function Vo(t) {
  return { fieldPath: t.canonicalString() }
}
function Mo(t) {
  return un.fromServerFormat(t.fieldPath)
}
function $T(t) {
  return t instanceof It
    ? (function (n) {
        if (n.op === '==') {
          if (B_(n.value))
            return { unaryFilter: { field: Vo(n.field), op: 'IS_NAN' } }
          if (z_(n.value))
            return { unaryFilter: { field: Vo(n.field), op: 'IS_NULL' } }
        } else if (n.op === '!=') {
          if (B_(n.value))
            return { unaryFilter: { field: Vo(n.field), op: 'IS_NOT_NAN' } }
          if (z_(n.value))
            return { unaryFilter: { field: Vo(n.field), op: 'IS_NOT_NULL' } }
        }
        return {
          fieldFilter: { field: Vo(n.field), op: kD(n.op), value: n.value },
        }
      })(t)
    : t instanceof Or
    ? (function (n) {
        const r = n.getFilters().map((i) => $T(i))
        return r.length === 1
          ? r[0]
          : { compositeFilter: { op: ND(n.op), filters: r } }
      })(t)
    : _e()
}
function jT(t) {
  return t.length >= 4 && t.get(0) === 'projects' && t.get(2) === 'databases'
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
 */ class bi {
  constructor(
    e,
    n,
    r,
    i,
    o = ye.min(),
    u = ye.min(),
    h = zt.EMPTY_BYTE_STRING,
    f = null
  ) {
    ;(this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = o),
      (this.lastLimboFreeSnapshotVersion = u),
      (this.resumeToken = h),
      (this.expectedCount = f)
  }
  withSequenceNumber(e) {
    return new bi(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    )
  }
  withResumeToken(e, n) {
    return new bi(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null
    )
  }
  withExpectedCount(e) {
    return new bi(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e
    )
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new bi(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount
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
 */ class LD {
  constructor(e) {
    this.ct = e
  }
}
function OD(t) {
  const e = RD({ parent: t.parent, structuredQuery: t.structuredQuery })
  return t.limitType === 'LAST' ? Bg(e, e.limit, 'L') : e
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
 */ class DD {
  constructor() {
    this.un = new VD()
  }
  addToCollectionParentIndex(e, n) {
    return this.un.add(n), Y.resolve()
  }
  getCollectionParents(e, n) {
    return Y.resolve(this.un.getEntries(n))
  }
  addFieldIndex(e, n) {
    return Y.resolve()
  }
  deleteFieldIndex(e, n) {
    return Y.resolve()
  }
  deleteAllFieldIndexes(e) {
    return Y.resolve()
  }
  createTargetIndexes(e, n) {
    return Y.resolve()
  }
  getDocumentsMatchingTarget(e, n) {
    return Y.resolve(null)
  }
  getIndexType(e, n) {
    return Y.resolve(0)
  }
  getFieldIndexes(e, n) {
    return Y.resolve([])
  }
  getNextCollectionGroupToUpdate(e) {
    return Y.resolve(null)
  }
  getMinOffset(e, n) {
    return Y.resolve(Yi.min())
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return Y.resolve(Yi.min())
  }
  updateCollectionGroup(e, n, r) {
    return Y.resolve()
  }
  updateIndexEntries(e, n) {
    return Y.resolve()
  }
}
class VD {
  constructor() {
    this.index = {}
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new Lt(ut.comparator),
      o = !i.has(r)
    return (this.index[n] = i.add(r)), o
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n]
    return i && i.has(r)
  }
  getEntries(e) {
    return (this.index[e] || new Lt(ut.comparator)).toArray()
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */ const n1 = {
  didRun: !1,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0,
}
class _n {
  constructor(e, n, r) {
    ;(this.cacheSizeCollectionThreshold = e),
      (this.percentileToCollect = n),
      (this.maximumSequenceNumbersToCollect = r)
  }
  static withCacheSize(e) {
    return new _n(
      e,
      _n.DEFAULT_COLLECTION_PERCENTILE,
      _n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
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
 */ ;(_n.DEFAULT_COLLECTION_PERCENTILE = 10),
  (_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (_n.DEFAULT = new _n(
    41943040,
    _n.DEFAULT_COLLECTION_PERCENTILE,
    _n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
  )),
  (_n.DISABLED = new _n(-1, 0, 0))
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
 */ class ya {
  constructor(e) {
    this.Ln = e
  }
  next() {
    return (this.Ln += 2), this.Ln
  }
  static Bn() {
    return new ya(0)
  }
  static kn() {
    return new ya(-1)
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
 */ function r1([t, e], [n, r]) {
  const i = Le(t, n)
  return i === 0 ? Le(e, r) : i
}
class MD {
  constructor(e) {
    ;(this.Un = e), (this.buffer = new Lt(r1)), (this.Wn = 0)
  }
  Gn() {
    return ++this.Wn
  }
  zn(e) {
    const n = [e, this.Gn()]
    if (this.buffer.size < this.Un) this.buffer = this.buffer.add(n)
    else {
      const r = this.buffer.last()
      r1(n, r) < 0 && (this.buffer = this.buffer.delete(r).add(n))
    }
  }
  get maxValue() {
    return this.buffer.last()[0]
  }
}
class bD {
  constructor(e, n, r) {
    ;(this.garbageCollector = e),
      (this.asyncQueue = n),
      (this.localStore = r),
      (this.jn = null)
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.Hn(6e4)
  }
  stop() {
    this.jn && (this.jn.cancel(), (this.jn = null))
  }
  get started() {
    return this.jn !== null
  }
  Hn(e) {
    se('LruGarbageCollector', `Garbage collection scheduled in ${e}ms`),
      (this.jn = this.asyncQueue.enqueueAfterDelay(
        'lru_garbage_collection',
        e,
        async () => {
          this.jn = null
          try {
            await this.localStore.collectGarbage(this.garbageCollector)
          } catch (n) {
            Ia(n)
              ? se(
                  'LruGarbageCollector',
                  'Ignoring IndexedDB error during garbage collection: ',
                  n
                )
              : await Rf(n)
          }
          await this.Hn(3e5)
        }
      ))
  }
}
class FD {
  constructor(e, n) {
    ;(this.Jn = e), (this.params = n)
  }
  calculateTargetCount(e, n) {
    return this.Jn.Yn(e).next((r) => Math.floor((n / 100) * r))
  }
  nthSequenceNumber(e, n) {
    if (n === 0) return Y.resolve(xf.oe)
    const r = new MD(n)
    return this.Jn.forEachTarget(e, (i) => r.zn(i.sequenceNumber))
      .next(() => this.Jn.Zn(e, (i) => r.zn(i)))
      .next(() => r.maxValue)
  }
  removeTargets(e, n, r) {
    return this.Jn.removeTargets(e, n, r)
  }
  removeOrphanedDocuments(e, n) {
    return this.Jn.removeOrphanedDocuments(e, n)
  }
  collect(e, n) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? (se('LruGarbageCollector', 'Garbage collection skipped; disabled'),
        Y.resolve(n1))
      : this.getCacheSize(e).next((r) =>
          r < this.params.cacheSizeCollectionThreshold
            ? (se(
                'LruGarbageCollector',
                `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
              ),
              n1)
            : this.Xn(e, n)
        )
  }
  getCacheSize(e) {
    return this.Jn.getCacheSize(e)
  }
  Xn(e, n) {
    let r, i, o, u, h, f, g
    const v = Date.now()
    return this.calculateTargetCount(e, this.params.percentileToCollect)
      .next(
        (E) => (
          E > this.params.maximumSequenceNumbersToCollect
            ? (se(
                'LruGarbageCollector',
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`
              ),
              (i = this.params.maximumSequenceNumbersToCollect))
            : (i = E),
          (u = Date.now()),
          this.nthSequenceNumber(e, i)
        )
      )
      .next((E) => ((r = E), (h = Date.now()), this.removeTargets(e, r, n)))
      .next(
        (E) => ((o = E), (f = Date.now()), this.removeOrphanedDocuments(e, r))
      )
      .next(
        (E) => (
          (g = Date.now()),
          Oo() <= ke.DEBUG &&
            se(
              'LruGarbageCollector',
              `LRU Garbage Collection
	Counted targets in ${u - v}ms
	Determined least recently used ${i} in ` +
                (h - u) +
                `ms
	Removed ${o} targets in ` +
                (f - h) +
                `ms
	Removed ${E} documents in ` +
                (g - f) +
                `ms
Total Duration: ${g - v}ms`
            ),
          Y.resolve({
            didRun: !0,
            sequenceNumbersCollected: i,
            targetsRemoved: o,
            documentsRemoved: E,
          })
        )
      )
  }
}
function UD(t, e) {
  return new FD(t, e)
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
 */ class zD {
  constructor() {
    ;(this.changes = new Ys(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1)
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e)
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, Xt.newInvalidDocument(e).setReadTime(n))
  }
  getEntry(e, n) {
    this.assertNotApplied()
    const r = this.changes.get(n)
    return r !== void 0 ? Y.resolve(r) : this.getFromCache(e, n)
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n)
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    )
  }
  assertNotApplied() {}
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
 */ /**
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
 */ class BD {
  constructor(e, n) {
    ;(this.overlayedDocument = e), (this.mutatedFields = n)
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
 */ class $D {
  constructor(e, n, r, i) {
    ;(this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i)
  }
  getDocument(e, n) {
    let r = null
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && Bu(r.mutation, i, Mi.empty(), An.now()), i))
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, Oe()).next(() => r))
  }
  getLocalViewOfDocuments(e, n, r = Oe()) {
    const i = Ms()
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((o) => {
        let u = Cu()
        return (
          o.forEach((h, f) => {
            u = u.insert(h, f.overlayedDocument)
          }),
          u
        )
      })
    )
  }
  getOverlayedDocuments(e, n) {
    const r = Ms()
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, Oe())
    )
  }
  populateOverlays(e, n, r) {
    const i = []
    return (
      r.forEach((o) => {
        n.has(o) || i.push(o)
      }),
      this.documentOverlayCache.getOverlays(e, i).next((o) => {
        o.forEach((u, h) => {
          n.set(u, h)
        })
      })
    )
  }
  computeViews(e, n, r, i) {
    let o = es()
    const u = zu(),
      h = (function () {
        return zu()
      })()
    return (
      n.forEach((f, g) => {
        const v = r.get(g.key)
        i.has(g.key) && (v === void 0 || v.mutation instanceof Vf)
          ? (o = o.insert(g.key, g))
          : v !== void 0
          ? (u.set(g.key, v.mutation.getFieldMask()),
            Bu(v.mutation, g, v.mutation.getFieldMask(), An.now()))
          : u.set(g.key, Mi.empty())
      }),
      this.recalculateAndSaveOverlays(e, o).next(
        (f) => (
          f.forEach((g, v) => u.set(g, v)),
          n.forEach((g, v) => {
            var E
            return h.set(
              g,
              new BD(v, (E = u.get(g)) !== null && E !== void 0 ? E : null)
            )
          }),
          h
        )
      )
    )
  }
  recalculateAndSaveOverlays(e, n) {
    const r = zu()
    let i = new gt((u, h) => u - h),
      o = Oe()
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((u) => {
        for (const h of u)
          h.keys().forEach((f) => {
            const g = n.get(f)
            if (g === null) return
            let v = r.get(f) || Mi.empty()
            ;(v = h.applyToLocalView(g, v)), r.set(f, v)
            const E = (i.get(h.batchId) || Oe()).add(f)
            i = i.insert(h.batchId, E)
          })
      })
      .next(() => {
        const u = [],
          h = i.getReverseIterator()
        for (; h.hasNext(); ) {
          const f = h.getNext(),
            g = f.key,
            v = f.value,
            E = PT()
          v.forEach((_) => {
            if (!o.has(_)) {
              const L = OT(n.get(_), r.get(_))
              L !== null && E.set(_, L), (o = o.add(_))
            }
          }),
            u.push(this.documentOverlayCache.saveOverlays(e, g, E))
        }
        return Y.waitFor(u)
      })
      .next(() => r)
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r))
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return (function (u) {
      return (
        pe.isDocumentKey(u.path) &&
        u.collectionGroup === null &&
        u.filters.length === 0
      )
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : KO(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i)
      : this.getDocumentsMatchingCollectionQuery(e, n, r, i)
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((o) => {
        const u =
          i - o.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - o.size
              )
            : Y.resolve(Ms())
        let h = -1,
          f = o
        return u.next((g) =>
          Y.forEach(
            g,
            (v, E) => (
              h < E.largestBatchId && (h = E.largestBatchId),
              o.get(v)
                ? Y.resolve()
                : this.remoteDocumentCache.getEntry(e, v).next((_) => {
                    f = f.insert(v, _)
                  })
            )
          )
            .next(() => this.populateOverlays(e, g, o))
            .next(() => this.computeViews(e, f, g, Oe()))
            .next((v) => ({ batchId: h, changes: JO(v) }))
        )
      })
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new pe(n)).next((r) => {
      let i = Cu()
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i
    })
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
    const o = n.collectionGroup
    let u = Cu()
    return this.indexManager.getCollectionParents(e, o).next((h) =>
      Y.forEach(h, (f) => {
        const g = (function (E, _) {
          return new Nf(
            _,
            null,
            E.explicitOrderBy.slice(),
            E.filters.slice(),
            E.limit,
            E.limitType,
            E.startAt,
            E.endAt
          )
        })(n, f.child(o))
        return this.getDocumentsMatchingCollectionQuery(e, g, r, i).next(
          (v) => {
            v.forEach((E, _) => {
              u = u.insert(E, _)
            })
          }
        )
      }).next(() => u)
    )
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
    let o
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (u) => (
          (o = u),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, o, i)
        )
      )
      .next((u) => {
        o.forEach((f, g) => {
          const v = g.getKey()
          u.get(v) === null && (u = u.insert(v, Xt.newInvalidDocument(v)))
        })
        let h = Cu()
        return (
          u.forEach((f, g) => {
            const v = o.get(f)
            v !== void 0 && Bu(v.mutation, g, Mi.empty(), An.now()),
              Of(n, g) && (h = h.insert(f, g))
          }),
          h
        )
      })
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
 */ class jD {
  constructor(e) {
    ;(this.serializer = e), (this.hr = new Map()), (this.Pr = new Map())
  }
  getBundleMetadata(e, n) {
    return Y.resolve(this.hr.get(n))
  }
  saveBundleMetadata(e, n) {
    return (
      this.hr.set(
        n.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: ra(i.createTime) }
        })(n)
      ),
      Y.resolve()
    )
  }
  getNamedQuery(e, n) {
    return Y.resolve(this.Pr.get(n))
  }
  saveNamedQuery(e, n) {
    return (
      this.Pr.set(
        n.name,
        (function (i) {
          return {
            name: i.name,
            query: OD(i.bundledQuery),
            readTime: ra(i.readTime),
          }
        })(n)
      ),
      Y.resolve()
    )
  }
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
 */ class WD {
  constructor() {
    ;(this.overlays = new gt(pe.comparator)), (this.Ir = new Map())
  }
  getOverlay(e, n) {
    return Y.resolve(this.overlays.get(n))
  }
  getOverlays(e, n) {
    const r = Ms()
    return Y.forEach(n, (i) =>
      this.getOverlay(e, i).next((o) => {
        o !== null && r.set(i, o)
      })
    ).next(() => r)
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, o) => {
        this.ht(e, n, o)
      }),
      Y.resolve()
    )
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.Ir.get(r)
    return (
      i !== void 0 &&
        (i.forEach((o) => (this.overlays = this.overlays.remove(o))),
        this.Ir.delete(r)),
      Y.resolve()
    )
  }
  getOverlaysForCollection(e, n, r) {
    const i = Ms(),
      o = n.length + 1,
      u = new pe(n.child('')),
      h = this.overlays.getIteratorFrom(u)
    for (; h.hasNext(); ) {
      const f = h.getNext().value,
        g = f.getKey()
      if (!n.isPrefixOf(g.path)) break
      g.path.length === o && f.largestBatchId > r && i.set(f.getKey(), f)
    }
    return Y.resolve(i)
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let o = new gt((g, v) => g - v)
    const u = this.overlays.getIterator()
    for (; u.hasNext(); ) {
      const g = u.getNext().value
      if (g.getKey().getCollectionGroup() === n && g.largestBatchId > r) {
        let v = o.get(g.largestBatchId)
        v === null && ((v = Ms()), (o = o.insert(g.largestBatchId, v))),
          v.set(g.getKey(), g)
      }
    }
    const h = Ms(),
      f = o.getIterator()
    for (
      ;
      f.hasNext() &&
      (f.getNext().value.forEach((g, v) => h.set(g, v)), !(h.size() >= i));

    );
    return Y.resolve(h)
  }
  ht(e, n, r) {
    const i = this.overlays.get(r.key)
    if (i !== null) {
      const u = this.Ir.get(i.largestBatchId).delete(r.key)
      this.Ir.set(i.largestBatchId, u)
    }
    this.overlays = this.overlays.insert(r.key, new hD(n, r))
    let o = this.Ir.get(n)
    o === void 0 && ((o = Oe()), this.Ir.set(n, o)),
      this.Ir.set(n, o.add(r.key))
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */ class qD {
  constructor() {
    this.sessionToken = zt.EMPTY_BYTE_STRING
  }
  getSessionToken(e) {
    return Y.resolve(this.sessionToken)
  }
  setSessionToken(e, n) {
    return (this.sessionToken = n), Y.resolve()
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
 */ class ry {
  constructor() {
    ;(this.Tr = new Lt(Pt.Er)), (this.dr = new Lt(Pt.Ar))
  }
  isEmpty() {
    return this.Tr.isEmpty()
  }
  addReference(e, n) {
    const r = new Pt(e, n)
    ;(this.Tr = this.Tr.add(r)), (this.dr = this.dr.add(r))
  }
  Rr(e, n) {
    e.forEach((r) => this.addReference(r, n))
  }
  removeReference(e, n) {
    this.Vr(new Pt(e, n))
  }
  mr(e, n) {
    e.forEach((r) => this.removeReference(r, n))
  }
  gr(e) {
    const n = new pe(new ut([])),
      r = new Pt(n, e),
      i = new Pt(n, e + 1),
      o = []
    return (
      this.dr.forEachInRange([r, i], (u) => {
        this.Vr(u), o.push(u.key)
      }),
      o
    )
  }
  pr() {
    this.Tr.forEach((e) => this.Vr(e))
  }
  Vr(e) {
    ;(this.Tr = this.Tr.delete(e)), (this.dr = this.dr.delete(e))
  }
  yr(e) {
    const n = new pe(new ut([])),
      r = new Pt(n, e),
      i = new Pt(n, e + 1)
    let o = Oe()
    return (
      this.dr.forEachInRange([r, i], (u) => {
        o = o.add(u.key)
      }),
      o
    )
  }
  containsKey(e) {
    const n = new Pt(e, 0),
      r = this.Tr.firstAfterOrEqual(n)
    return r !== null && e.isEqual(r.key)
  }
}
class Pt {
  constructor(e, n) {
    ;(this.key = e), (this.wr = n)
  }
  static Er(e, n) {
    return pe.comparator(e.key, n.key) || Le(e.wr, n.wr)
  }
  static Ar(e, n) {
    return Le(e.wr, n.wr) || pe.comparator(e.key, n.key)
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
 */ class HD {
  constructor(e, n) {
    ;(this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.Sr = 1),
      (this.br = new Lt(Pt.Er))
  }
  checkEmpty(e) {
    return Y.resolve(this.mutationQueue.length === 0)
  }
  addMutationBatch(e, n, r, i) {
    const o = this.Sr
    this.Sr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]
    const u = new cD(o, n, r, i)
    this.mutationQueue.push(u)
    for (const h of i)
      (this.br = this.br.add(new Pt(h.key, o))),
        this.indexManager.addToCollectionParentIndex(e, h.key.path.popLast())
    return Y.resolve(u)
  }
  lookupMutationBatch(e, n) {
    return Y.resolve(this.Dr(n))
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.vr(r),
      o = i < 0 ? 0 : i
    return Y.resolve(
      this.mutationQueue.length > o ? this.mutationQueue[o] : null
    )
  }
  getHighestUnacknowledgedBatchId() {
    return Y.resolve(this.mutationQueue.length === 0 ? -1 : this.Sr - 1)
  }
  getAllMutationBatches(e) {
    return Y.resolve(this.mutationQueue.slice())
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new Pt(n, 0),
      i = new Pt(n, Number.POSITIVE_INFINITY),
      o = []
    return (
      this.br.forEachInRange([r, i], (u) => {
        const h = this.Dr(u.wr)
        o.push(h)
      }),
      Y.resolve(o)
    )
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new Lt(Le)
    return (
      n.forEach((i) => {
        const o = new Pt(i, 0),
          u = new Pt(i, Number.POSITIVE_INFINITY)
        this.br.forEachInRange([o, u], (h) => {
          r = r.add(h.wr)
        })
      }),
      Y.resolve(this.Cr(r))
    )
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1
    let o = r
    pe.isDocumentKey(o) || (o = o.child(''))
    const u = new Pt(new pe(o), 0)
    let h = new Lt(Le)
    return (
      this.br.forEachWhile((f) => {
        const g = f.key.path
        return !!r.isPrefixOf(g) && (g.length === i && (h = h.add(f.wr)), !0)
      }, u),
      Y.resolve(this.Cr(h))
    )
  }
  Cr(e) {
    const n = []
    return (
      e.forEach((r) => {
        const i = this.Dr(r)
        i !== null && n.push(i)
      }),
      n
    )
  }
  removeMutationBatch(e, n) {
    rt(this.Fr(n.batchId, 'removed') === 0), this.mutationQueue.shift()
    let r = this.br
    return Y.forEach(n.mutations, (i) => {
      const o = new Pt(i.key, n.batchId)
      return (
        (r = r.delete(o)),
        this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      )
    }).next(() => {
      this.br = r
    })
  }
  On(e) {}
  containsKey(e, n) {
    const r = new Pt(n, 0),
      i = this.br.firstAfterOrEqual(r)
    return Y.resolve(n.isEqual(i && i.key))
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, Y.resolve()
  }
  Fr(e, n) {
    return this.vr(e)
  }
  vr(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId
  }
  Dr(e) {
    const n = this.vr(e)
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n]
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
 */ class KD {
  constructor(e) {
    ;(this.Mr = e),
      (this.docs = (function () {
        return new gt(pe.comparator)
      })()),
      (this.size = 0)
  }
  setIndexManager(e) {
    this.indexManager = e
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      o = i ? i.size : 0,
      u = this.Mr(n)
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: u })),
      (this.size += u - o),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    )
  }
  removeEntry(e) {
    const n = this.docs.get(e)
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size))
  }
  getEntry(e, n) {
    const r = this.docs.get(n)
    return Y.resolve(r ? r.document.mutableCopy() : Xt.newInvalidDocument(n))
  }
  getEntries(e, n) {
    let r = es()
    return (
      n.forEach((i) => {
        const o = this.docs.get(i)
        r = r.insert(i, o ? o.document.mutableCopy() : Xt.newInvalidDocument(i))
      }),
      Y.resolve(r)
    )
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let o = es()
    const u = n.path,
      h = new pe(u.child('')),
      f = this.docs.getIteratorFrom(h)
    for (; f.hasNext(); ) {
      const {
        key: g,
        value: { document: v },
      } = f.getNext()
      if (!u.isPrefixOf(g.path)) break
      g.path.length > u.length + 1 ||
        AO(IO(v), r) <= 0 ||
        ((i.has(v.key) || Of(n, v)) && (o = o.insert(v.key, v.mutableCopy())))
    }
    return Y.resolve(o)
  }
  getAllFromCollectionGroup(e, n, r, i) {
    _e()
  }
  Or(e, n) {
    return Y.forEach(this.docs, (r) => n(r))
  }
  newChangeBuffer(e) {
    return new GD(this)
  }
  getSize(e) {
    return Y.resolve(this.size)
  }
}
class GD extends zD {
  constructor(e) {
    super(), (this.cr = e)
  }
  applyChanges(e) {
    const n = []
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.cr.addEntry(e, i))
          : this.cr.removeEntry(r)
      }),
      Y.waitFor(n)
    )
  }
  getFromCache(e, n) {
    return this.cr.getEntry(e, n)
  }
  getAllFromCache(e, n) {
    return this.cr.getEntries(e, n)
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
 */ class QD {
  constructor(e) {
    ;(this.persistence = e),
      (this.Nr = new Ys((n) => Xm(n), Jm)),
      (this.lastRemoteSnapshotVersion = ye.min()),
      (this.highestTargetId = 0),
      (this.Lr = 0),
      (this.Br = new ry()),
      (this.targetCount = 0),
      (this.kr = ya.Bn())
  }
  forEachTarget(e, n) {
    return this.Nr.forEach((r, i) => n(i)), Y.resolve()
  }
  getLastRemoteSnapshotVersion(e) {
    return Y.resolve(this.lastRemoteSnapshotVersion)
  }
  getHighestSequenceNumber(e) {
    return Y.resolve(this.Lr)
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.kr.next()), Y.resolve(this.highestTargetId)
    )
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.Lr && (this.Lr = n),
      Y.resolve()
    )
  }
  Kn(e) {
    this.Nr.set(e.target, e)
    const n = e.targetId
    n > this.highestTargetId &&
      ((this.kr = new ya(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Lr && (this.Lr = e.sequenceNumber)
  }
  addTargetData(e, n) {
    return this.Kn(n), (this.targetCount += 1), Y.resolve()
  }
  updateTargetData(e, n) {
    return this.Kn(n), Y.resolve()
  }
  removeTargetData(e, n) {
    return (
      this.Nr.delete(n.target),
      this.Br.gr(n.targetId),
      (this.targetCount -= 1),
      Y.resolve()
    )
  }
  removeTargets(e, n, r) {
    let i = 0
    const o = []
    return (
      this.Nr.forEach((u, h) => {
        h.sequenceNumber <= n &&
          r.get(h.targetId) === null &&
          (this.Nr.delete(u),
          o.push(this.removeMatchingKeysForTargetId(e, h.targetId)),
          i++)
      }),
      Y.waitFor(o).next(() => i)
    )
  }
  getTargetCount(e) {
    return Y.resolve(this.targetCount)
  }
  getTargetData(e, n) {
    const r = this.Nr.get(n) || null
    return Y.resolve(r)
  }
  addMatchingKeys(e, n, r) {
    return this.Br.Rr(n, r), Y.resolve()
  }
  removeMatchingKeys(e, n, r) {
    this.Br.mr(n, r)
    const i = this.persistence.referenceDelegate,
      o = []
    return (
      i &&
        n.forEach((u) => {
          o.push(i.markPotentiallyOrphaned(e, u))
        }),
      Y.waitFor(o)
    )
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Br.gr(n), Y.resolve()
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Br.yr(n)
    return Y.resolve(r)
  }
  containsKey(e, n) {
    return Y.resolve(this.Br.containsKey(n))
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
 */ class WT {
  constructor(e, n) {
    ;(this.qr = {}),
      (this.overlays = {}),
      (this.Qr = new xf(0)),
      (this.Kr = !1),
      (this.Kr = !0),
      (this.$r = new qD()),
      (this.referenceDelegate = e(this)),
      (this.Ur = new QD(this)),
      (this.indexManager = new DD()),
      (this.remoteDocumentCache = (function (i) {
        return new KD(i)
      })((r) => this.referenceDelegate.Wr(r))),
      (this.serializer = new LD(n)),
      (this.Gr = new jD(this.serializer))
  }
  start() {
    return Promise.resolve()
  }
  shutdown() {
    return (this.Kr = !1), Promise.resolve()
  }
  get started() {
    return this.Kr
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()]
    return n || ((n = new WD()), (this.overlays[e.toKey()] = n)), n
  }
  getMutationQueue(e, n) {
    let r = this.qr[e.toKey()]
    return (
      r || ((r = new HD(n, this.referenceDelegate)), (this.qr[e.toKey()] = r)),
      r
    )
  }
  getGlobalsCache() {
    return this.$r
  }
  getTargetCache() {
    return this.Ur
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache
  }
  getBundleCache() {
    return this.Gr
  }
  runTransaction(e, n, r) {
    se('MemoryPersistence', 'Starting transaction:', e)
    const i = new YD(this.Qr.next())
    return (
      this.referenceDelegate.zr(),
      r(i)
        .next((o) => this.referenceDelegate.jr(i).next(() => o))
        .toPromise()
        .then((o) => (i.raiseOnCommittedEvent(), o))
    )
  }
  Hr(e, n) {
    return Y.or(Object.values(this.qr).map((r) => () => r.containsKey(e, n)))
  }
}
class YD extends RO {
  constructor(e) {
    super(), (this.currentSequenceNumber = e)
  }
}
class iy {
  constructor(e) {
    ;(this.persistence = e), (this.Jr = new ry()), (this.Yr = null)
  }
  static Zr(e) {
    return new iy(e)
  }
  get Xr() {
    if (this.Yr) return this.Yr
    throw _e()
  }
  addReference(e, n, r) {
    return this.Jr.addReference(r, n), this.Xr.delete(r.toString()), Y.resolve()
  }
  removeReference(e, n, r) {
    return this.Jr.removeReference(r, n), this.Xr.add(r.toString()), Y.resolve()
  }
  markPotentiallyOrphaned(e, n) {
    return this.Xr.add(n.toString()), Y.resolve()
  }
  removeTarget(e, n) {
    this.Jr.gr(n.targetId).forEach((i) => this.Xr.add(i.toString()))
    const r = this.persistence.getTargetCache()
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((o) => this.Xr.add(o.toString()))
      })
      .next(() => r.removeTargetData(e, n))
  }
  zr() {
    this.Yr = new Set()
  }
  jr(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer()
    return Y.forEach(this.Xr, (r) => {
      const i = pe.fromPath(r)
      return this.ei(e, i).next((o) => {
        o || n.removeEntry(i, ye.min())
      })
    }).next(() => ((this.Yr = null), n.apply(e)))
  }
  updateLimboDocument(e, n) {
    return this.ei(e, n).next((r) => {
      r ? this.Xr.delete(n.toString()) : this.Xr.add(n.toString())
    })
  }
  Wr(e) {
    return 0
  }
  ei(e, n) {
    return Y.or([
      () => Y.resolve(this.Jr.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Hr(e, n),
    ])
  }
}
class nf {
  constructor(e, n) {
    ;(this.persistence = e),
      (this.ti = new Ys(
        (r) => PO(r.path),
        (r, i) => r.isEqual(i)
      )),
      (this.garbageCollector = UD(this, n))
  }
  static Zr(e, n) {
    return new nf(e, n)
  }
  zr() {}
  jr(e) {
    return Y.resolve()
  }
  forEachTarget(e, n) {
    return this.persistence.getTargetCache().forEachTarget(e, n)
  }
  Yn(e) {
    const n = this.er(e)
    return this.persistence
      .getTargetCache()
      .getTargetCount(e)
      .next((r) => n.next((i) => r + i))
  }
  er(e) {
    let n = 0
    return this.Zn(e, (r) => {
      n++
    }).next(() => n)
  }
  Zn(e, n) {
    return Y.forEach(this.ti, (r, i) =>
      this.nr(e, r, i).next((o) => (o ? Y.resolve() : n(i)))
    )
  }
  removeTargets(e, n, r) {
    return this.persistence.getTargetCache().removeTargets(e, n, r)
  }
  removeOrphanedDocuments(e, n) {
    let r = 0
    const i = this.persistence.getRemoteDocumentCache(),
      o = i.newChangeBuffer()
    return i
      .Or(e, (u) =>
        this.nr(e, u, n).next((h) => {
          h || (r++, o.removeEntry(u, ye.min()))
        })
      )
      .next(() => o.apply(e))
      .next(() => r)
  }
  markPotentiallyOrphaned(e, n) {
    return this.ti.set(n, e.currentSequenceNumber), Y.resolve()
  }
  removeTarget(e, n) {
    const r = n.withSequenceNumber(e.currentSequenceNumber)
    return this.persistence.getTargetCache().updateTargetData(e, r)
  }
  addReference(e, n, r) {
    return this.ti.set(r, e.currentSequenceNumber), Y.resolve()
  }
  removeReference(e, n, r) {
    return this.ti.set(r, e.currentSequenceNumber), Y.resolve()
  }
  updateLimboDocument(e, n) {
    return this.ti.set(n, e.currentSequenceNumber), Y.resolve()
  }
  Wr(e) {
    let n = e.key.toString().length
    return e.isFoundDocument() && (n += _h(e.data.value)), n
  }
  nr(e, n, r) {
    return Y.or([
      () => this.persistence.Hr(e, n),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => {
        const i = this.ti.get(n)
        return Y.resolve(i !== void 0 && i > r)
      },
    ])
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e)
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
 */ class sy {
  constructor(e, n, r, i) {
    ;(this.targetId = e), (this.fromCache = n), (this.$i = r), (this.Ui = i)
  }
  static Wi(e, n) {
    let r = Oe(),
      i = Oe()
    for (const o of n.docChanges)
      switch (o.type) {
        case 0:
          r = r.add(o.doc.key)
          break
        case 1:
          i = i.add(o.doc.key)
      }
    return new sy(e, n.fromCache, r, i)
  }
}
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
 */ class XD {
  constructor() {
    this._documentReadCount = 0
  }
  get documentReadCount() {
    return this._documentReadCount
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e
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
 */ class JD {
  constructor() {
    ;(this.Gi = !1),
      (this.zi = !1),
      (this.ji = 100),
      (this.Hi = (function () {
        return XN() ? 8 : xO(QN()) > 0 ? 6 : 4
      })())
  }
  initialize(e, n) {
    ;(this.Ji = e), (this.indexManager = n), (this.Gi = !0)
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    const o = { result: null }
    return this.Yi(e, n)
      .next((u) => {
        o.result = u
      })
      .next(() => {
        if (!o.result)
          return this.Zi(e, n, i, r).next((u) => {
            o.result = u
          })
      })
      .next(() => {
        if (o.result) return
        const u = new XD()
        return this.Xi(e, n, u).next((h) => {
          if (((o.result = h), this.zi)) return this.es(e, n, u, h.size)
        })
      })
      .next(() => o.result)
  }
  es(e, n, r, i) {
    return r.documentReadCount < this.ji
      ? (Oo() <= ke.DEBUG &&
          se(
            'QueryEngine',
            'SDK will not create cache indexes for query:',
            Do(n),
            'since it only creates cache indexes for collection contains',
            'more than or equal to',
            this.ji,
            'documents'
          ),
        Y.resolve())
      : (Oo() <= ke.DEBUG &&
          se(
            'QueryEngine',
            'Query:',
            Do(n),
            'scans',
            r.documentReadCount,
            'local documents and returns',
            i,
            'documents as results.'
          ),
        r.documentReadCount > this.Hi * i
          ? (Oo() <= ke.DEBUG &&
              se(
                'QueryEngine',
                'The SDK decides to create cache indexes for query:',
                Do(n),
                'as using cache indexes may help improve performance.'
              ),
            this.indexManager.createTargetIndexes(e, Nr(n)))
          : Y.resolve())
  }
  Yi(e, n) {
    if (q_(n)) return Y.resolve(null)
    let r = Nr(n)
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = Bg(n, null, 'F')), (r = Nr(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((o) => {
            const u = Oe(...o)
            return this.Ji.getDocuments(e, u).next((h) =>
              this.indexManager.getMinOffset(e, r).next((f) => {
                const g = this.ts(n, h)
                return this.ns(n, g, u, f.readTime)
                  ? this.Yi(e, Bg(n, null, 'F'))
                  : this.rs(e, g, n, f)
              })
            )
          }))
    )
  }
  Zi(e, n, r, i) {
    return q_(n) || i.isEqual(ye.min())
      ? Y.resolve(null)
      : this.Ji.getDocuments(e, r).next((o) => {
          const u = this.ts(n, o)
          return this.ns(n, u, r, i)
            ? Y.resolve(null)
            : (Oo() <= ke.DEBUG &&
                se(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  i.toString(),
                  Do(n)
                ),
              this.rs(e, u, n, SO(i, -1)).next((h) => h))
        })
  }
  ts(e, n) {
    let r = new Lt(RT(e))
    return (
      n.forEach((i, o) => {
        Of(e, o) && (r = r.add(o))
      }),
      r
    )
  }
  ns(e, n, r, i) {
    if (e.limit === null) return !1
    if (r.size !== n.size) return !0
    const o = e.limitType === 'F' ? n.last() : n.first()
    return !!o && (o.hasPendingWrites || o.version.compareTo(i) > 0)
  }
  Xi(e, n, r) {
    return (
      Oo() <= ke.DEBUG &&
        se(
          'QueryEngine',
          'Using full collection scan to execute query:',
          Do(n)
        ),
      this.Ji.getDocumentsMatchingQuery(e, n, Yi.min(), r)
    )
  }
  rs(e, n, r, i) {
    return this.Ji.getDocumentsMatchingQuery(e, r, i).next(
      (o) => (
        n.forEach((u) => {
          o = o.insert(u.key, u)
        }),
        o
      )
    )
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
 */ class ZD {
  constructor(e, n, r, i) {
    ;(this.persistence = e),
      (this.ss = n),
      (this.serializer = i),
      (this.os = new gt(Le)),
      (this._s = new Ys((o) => Xm(o), Jm)),
      (this.us = new Map()),
      (this.cs = e.getRemoteDocumentCache()),
      (this.Ur = e.getTargetCache()),
      (this.Gr = e.getBundleCache()),
      this.ls(r)
  }
  ls(e) {
    ;(this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new $D(
        this.cs,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.cs.setIndexManager(this.indexManager),
      this.ss.initialize(this.localDocuments, this.indexManager)
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      'Collect garbage',
      'readwrite-primary',
      (n) => e.collect(n, this.os)
    )
  }
}
function eV(t, e, n, r) {
  return new ZD(t, e, n, r)
}
async function qT(t, e) {
  const n = Ne(t)
  return await n.persistence.runTransaction(
    'Handle user change',
    'readonly',
    (r) => {
      let i
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (o) => ((i = o), n.ls(e), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((o) => {
          const u = [],
            h = []
          let f = Oe()
          for (const g of i) {
            u.push(g.batchId)
            for (const v of g.mutations) f = f.add(v.key)
          }
          for (const g of o) {
            h.push(g.batchId)
            for (const v of g.mutations) f = f.add(v.key)
          }
          return n.localDocuments
            .getDocuments(r, f)
            .next((g) => ({ hs: g, removedBatchIds: u, addedBatchIds: h }))
        })
    }
  )
}
function HT(t) {
  const e = Ne(t)
  return e.persistence.runTransaction(
    'Get last remote snapshot version',
    'readonly',
    (n) => e.Ur.getLastRemoteSnapshotVersion(n)
  )
}
function tV(t, e) {
  const n = Ne(t),
    r = e.snapshotVersion
  let i = n.os
  return n.persistence
    .runTransaction('Apply remote event', 'readwrite-primary', (o) => {
      const u = n.cs.newChangeBuffer({ trackRemovals: !0 })
      i = n.os
      const h = []
      e.targetChanges.forEach((v, E) => {
        const _ = i.get(E)
        if (!_) return
        h.push(
          n.Ur.removeMatchingKeys(o, v.removedDocuments, E).next(() =>
            n.Ur.addMatchingKeys(o, v.addedDocuments, E)
          )
        )
        let L = _.withSequenceNumber(o.currentSequenceNumber)
        e.targetMismatches.get(E) !== null
          ? (L = L.withResumeToken(
              zt.EMPTY_BYTE_STRING,
              ye.min()
            ).withLastLimboFreeSnapshotVersion(ye.min()))
          : v.resumeToken.approximateByteSize() > 0 &&
            (L = L.withResumeToken(v.resumeToken, r)),
          (i = i.insert(E, L)),
          (function (B, j, P) {
            return B.resumeToken.approximateByteSize() === 0 ||
              j.snapshotVersion.toMicroseconds() -
                B.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : P.addedDocuments.size +
                  P.modifiedDocuments.size +
                  P.removedDocuments.size >
                  0
          })(_, L, v) && h.push(n.Ur.updateTargetData(o, L))
      })
      let f = es(),
        g = Oe()
      if (
        (e.documentUpdates.forEach((v) => {
          e.resolvedLimboDocuments.has(v) &&
            h.push(n.persistence.referenceDelegate.updateLimboDocument(o, v))
        }),
        h.push(
          nV(o, u, e.documentUpdates).next((v) => {
            ;(f = v.Ps), (g = v.Is)
          })
        ),
        !r.isEqual(ye.min()))
      ) {
        const v = n.Ur.getLastRemoteSnapshotVersion(o).next((E) =>
          n.Ur.setTargetsMetadata(o, o.currentSequenceNumber, r)
        )
        h.push(v)
      }
      return Y.waitFor(h)
        .next(() => u.apply(o))
        .next(() => n.localDocuments.getLocalViewOfDocuments(o, f, g))
        .next(() => f)
    })
    .then((o) => ((n.os = i), o))
}
function nV(t, e, n) {
  let r = Oe(),
    i = Oe()
  return (
    n.forEach((o) => (r = r.add(o))),
    e.getEntries(t, r).next((o) => {
      let u = es()
      return (
        n.forEach((h, f) => {
          const g = o.get(h)
          f.isFoundDocument() !== g.isFoundDocument() && (i = i.add(h)),
            f.isNoDocument() && f.version.isEqual(ye.min())
              ? (e.removeEntry(h, f.readTime), (u = u.insert(h, f)))
              : !g.isValidDocument() ||
                f.version.compareTo(g.version) > 0 ||
                (f.version.compareTo(g.version) === 0 && g.hasPendingWrites)
              ? (e.addEntry(f), (u = u.insert(h, f)))
              : se(
                  'LocalStore',
                  'Ignoring outdated watch update for ',
                  h,
                  '. Current version:',
                  g.version,
                  ' Watch version:',
                  f.version
                )
        }),
        { Ps: u, Is: i }
      )
    })
  )
}
function rV(t, e) {
  const n = Ne(t)
  return n.persistence
    .runTransaction('Allocate target', 'readwrite', (r) => {
      let i
      return n.Ur.getTargetData(r, e).next((o) =>
        o
          ? ((i = o), Y.resolve(i))
          : n.Ur.allocateTargetId(r).next(
              (u) => (
                (i = new bi(
                  e,
                  u,
                  'TargetPurposeListen',
                  r.currentSequenceNumber
                )),
                n.Ur.addTargetData(r, i).next(() => i)
              )
            )
      )
    })
    .then((r) => {
      const i = n.os.get(r.targetId)
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.os = n.os.insert(r.targetId, r)), n._s.set(e, r.targetId)),
        r
      )
    })
}
async function Hg(t, e, n) {
  const r = Ne(t),
    i = r.os.get(e),
    o = n ? 'readwrite' : 'readwrite-primary'
  try {
    n ||
      (await r.persistence.runTransaction('Release target', o, (u) =>
        r.persistence.referenceDelegate.removeTarget(u, i)
      ))
  } catch (u) {
    if (!Ia(u)) throw u
    se('LocalStore', `Failed to update sequence numbers for target ${e}: ${u}`)
  }
  ;(r.os = r.os.remove(e)), r._s.delete(i.target)
}
function i1(t, e, n) {
  const r = Ne(t)
  let i = ye.min(),
    o = Oe()
  return r.persistence.runTransaction('Execute query', 'readwrite', (u) =>
    (function (f, g, v) {
      const E = Ne(f),
        _ = E._s.get(v)
      return _ !== void 0 ? Y.resolve(E.os.get(_)) : E.Ur.getTargetData(g, v)
    })(r, u, Nr(e))
      .next((h) => {
        if (h)
          return (
            (i = h.lastLimboFreeSnapshotVersion),
            r.Ur.getMatchingKeysForTargetId(u, h.targetId).next((f) => {
              o = f
            })
          )
      })
      .next(() =>
        r.ss.getDocumentsMatchingQuery(u, e, n ? i : ye.min(), n ? o : Oe())
      )
      .next((h) => (iV(r, QO(e), h), { documents: h, Ts: o }))
  )
}
function iV(t, e, n) {
  let r = t.us.get(e) || ye.min()
  n.forEach((i, o) => {
    o.readTime.compareTo(r) > 0 && (r = o.readTime)
  }),
    t.us.set(e, r)
}
class s1 {
  constructor() {
    this.activeTargetIds = tD()
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e)
  }
  gs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e)
  }
  Vs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    }
    return JSON.stringify(e)
  }
}
class sV {
  constructor() {
    ;(this.so = new s1()),
      (this.oo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null)
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e, n = !0) {
    return n && this.so.fs(e), this.oo[e] || 'not-current'
  }
  updateQueryState(e, n, r) {
    this.oo[e] = n
  }
  removeLocalQueryTarget(e) {
    this.so.gs(e)
  }
  isLocalQueryTarget(e) {
    return this.so.activeTargetIds.has(e)
  }
  clearQueryState(e) {
    delete this.oo[e]
  }
  getAllActiveQueryTargets() {
    return this.so.activeTargetIds
  }
  isActiveQueryTarget(e) {
    return this.so.activeTargetIds.has(e)
  }
  start() {
    return (this.so = new s1()), Promise.resolve()
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
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
 */ class oV {
  _o(e) {}
  shutdown() {}
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
 */ class o1 {
  constructor() {
    ;(this.ao = () => this.uo()),
      (this.co = () => this.lo()),
      (this.ho = []),
      this.Po()
  }
  _o(e) {
    this.ho.push(e)
  }
  shutdown() {
    window.removeEventListener('online', this.ao),
      window.removeEventListener('offline', this.co)
  }
  Po() {
    window.addEventListener('online', this.ao),
      window.addEventListener('offline', this.co)
  }
  uo() {
    se('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE')
    for (const e of this.ho) e(0)
  }
  lo() {
    se('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE')
    for (const e of this.ho) e(1)
  }
  static D() {
    return (
      typeof window < 'u' &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    )
  }
}
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
 */ let ih = null
function Rp() {
  return (
    ih === null
      ? (ih = (function () {
          return 268435456 + Math.round(2147483648 * Math.random())
        })())
      : ih++,
    '0x' + ih.toString(16)
  )
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
 */ const aV = {
  BatchGetDocuments: 'batchGet',
  Commit: 'commit',
  RunQuery: 'runQuery',
  RunAggregationQuery: 'runAggregationQuery',
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
 */ class uV {
  constructor(e) {
    ;(this.Io = e.Io), (this.To = e.To)
  }
  Eo(e) {
    this.Ao = e
  }
  Ro(e) {
    this.Vo = e
  }
  mo(e) {
    this.fo = e
  }
  onMessage(e) {
    this.po = e
  }
  close() {
    this.To()
  }
  send(e) {
    this.Io(e)
  }
  yo() {
    this.Ao()
  }
  wo() {
    this.Vo()
  }
  So(e) {
    this.fo(e)
  }
  bo(e) {
    this.po(e)
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
 */ const Gt = 'WebChannelConnection'
class lV extends class {
  constructor(n) {
    ;(this.databaseInfo = n), (this.databaseId = n.databaseId)
    const r = n.ssl ? 'https' : 'http',
      i = encodeURIComponent(this.databaseId.projectId),
      o = encodeURIComponent(this.databaseId.database)
    ;(this.Do = r + '://' + n.host),
      (this.vo = `projects/${i}/databases/${o}`),
      (this.Co =
        this.databaseId.database === '(default)'
          ? `project_id=${i}`
          : `project_id=${i}&database_id=${o}`)
  }
  get Fo() {
    return !1
  }
  Mo(n, r, i, o, u) {
    const h = Rp(),
      f = this.xo(n, r.toUriEncodedString())
    se('RestConnection', `Sending RPC '${n}' ${h}:`, f, i)
    const g = {
      'google-cloud-resource-prefix': this.vo,
      'x-goog-request-params': this.Co,
    }
    return (
      this.Oo(g, o, u),
      this.No(n, f, g, i).then(
        (v) => (se('RestConnection', `Received RPC '${n}' ${h}: `, v), v),
        (v) => {
          throw (
            (da(
              'RestConnection',
              `RPC '${n}' ${h} failed with error: `,
              v,
              'url: ',
              f,
              'request:',
              i
            ),
            v)
          )
        }
      )
    )
  }
  Lo(n, r, i, o, u, h) {
    return this.Mo(n, r, i, o, u)
  }
  Oo(n, r, i) {
    ;(n['X-Goog-Api-Client'] = (function () {
      return 'gl-js/ fire/' + Sa
    })()),
      (n['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId &&
        (n['X-Firebase-GMPID'] = this.databaseInfo.appId),
      r && r.headers.forEach((o, u) => (n[u] = o)),
      i && i.headers.forEach((o, u) => (n[u] = o))
  }
  xo(n, r) {
    const i = aV[n]
    return `${this.Do}/v1/${r}:${i}`
  }
  terminate() {}
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions)
  }
  No(e, n, r, i) {
    const o = Rp()
    return new Promise((u, h) => {
      const f = new dT()
      f.setWithCredentials(!0),
        f.listenOnce(pT.COMPLETE, () => {
          try {
            switch (f.getLastErrorCode()) {
              case vh.NO_ERROR:
                const v = f.getResponseJson()
                se(Gt, `XHR for RPC '${e}' ${o} received:`, JSON.stringify(v)),
                  u(v)
                break
              case vh.TIMEOUT:
                se(Gt, `RPC '${e}' ${o} timed out`),
                  h(new de(re.DEADLINE_EXCEEDED, 'Request time out'))
                break
              case vh.HTTP_ERROR:
                const E = f.getStatus()
                if (
                  (se(
                    Gt,
                    `RPC '${e}' ${o} failed with status:`,
                    E,
                    'response text:',
                    f.getResponseText()
                  ),
                  E > 0)
                ) {
                  let _ = f.getResponseJson()
                  Array.isArray(_) && (_ = _[0])
                  const L = _?.error
                  if (L && L.status && L.message) {
                    const b = (function (j) {
                      const P = j.toLowerCase().replace(/_/g, '-')
                      return Object.values(re).indexOf(P) >= 0 ? P : re.UNKNOWN
                    })(L.status)
                    h(new de(b, L.message))
                  } else
                    h(
                      new de(
                        re.UNKNOWN,
                        'Server responded with status ' + f.getStatus()
                      )
                    )
                } else h(new de(re.UNAVAILABLE, 'Connection failed.'))
                break
              default:
                _e()
            }
          } finally {
            se(Gt, `RPC '${e}' ${o} completed.`)
          }
        })
      const g = JSON.stringify(i)
      se(Gt, `RPC '${e}' ${o} sending request:`, i), f.send(n, 'POST', g, r, 15)
    })
  }
  Bo(e, n, r) {
    const i = Rp(),
      o = [this.Do, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
      u = yT(),
      h = mT(),
      f = {
        httpSessionIdParam: 'gsessionid',
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      g = this.longPollingOptions.timeoutSeconds
    g !== void 0 && (f.longPollingTimeout = Math.round(1e3 * g)),
      this.useFetchStreams && (f.useFetchStreams = !0),
      this.Oo(f.initMessageHeaders, n, r),
      (f.encodeInitMessageHeaders = !0)
    const v = o.join('')
    se(Gt, `Creating RPC '${e}' stream ${i}: ${v}`, f)
    const E = u.createWebChannel(v, f)
    let _ = !1,
      L = !1
    const b = new uV({
        Io: (j) => {
          L
            ? se(Gt, `Not sending because RPC '${e}' stream ${i} is closed:`, j)
            : (_ ||
                (se(Gt, `Opening RPC '${e}' stream ${i} transport.`),
                E.open(),
                (_ = !0)),
              se(Gt, `RPC '${e}' stream ${i} sending:`, j),
              E.send(j))
        },
        To: () => E.close(),
      }),
      B = (j, P, C) => {
        j.listen(P, (O) => {
          try {
            C(O)
          } catch ($) {
            setTimeout(() => {
              throw $
            }, 0)
          }
        })
      }
    return (
      B(E, Au.EventType.OPEN, () => {
        L || (se(Gt, `RPC '${e}' stream ${i} transport opened.`), b.yo())
      }),
      B(E, Au.EventType.CLOSE, () => {
        L ||
          ((L = !0), se(Gt, `RPC '${e}' stream ${i} transport closed`), b.So())
      }),
      B(E, Au.EventType.ERROR, (j) => {
        L ||
          ((L = !0),
          da(Gt, `RPC '${e}' stream ${i} transport errored:`, j),
          b.So(new de(re.UNAVAILABLE, 'The operation could not be completed')))
      }),
      B(E, Au.EventType.MESSAGE, (j) => {
        var P
        if (!L) {
          const C = j.data[0]
          rt(!!C)
          const O = C,
            $ =
              O.error ||
              ((P = O[0]) === null || P === void 0 ? void 0 : P.error)
          if ($) {
            se(Gt, `RPC '${e}' stream ${i} received error:`, $)
            const Q = $.status
            let X = (function (x) {
                const N = vt[x]
                if (N !== void 0) return VT(N)
              })(Q),
              A = $.message
            X === void 0 &&
              ((X = re.INTERNAL),
              (A =
                'Unknown error status: ' + Q + ' with message ' + $.message)),
              (L = !0),
              b.So(new de(X, A)),
              E.close()
          } else se(Gt, `RPC '${e}' stream ${i} received:`, C), b.bo(C)
        }
      }),
      B(h, gT.STAT_EVENT, (j) => {
        j.stat === Vg.PROXY
          ? se(Gt, `RPC '${e}' stream ${i} detected buffering proxy`)
          : j.stat === Vg.NOPROXY &&
            se(Gt, `RPC '${e}' stream ${i} detected no buffering proxy`)
      }),
      setTimeout(() => {
        b.wo()
      }, 0),
      b
    )
  }
}
function xp() {
  return typeof document < 'u' ? document : null
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
 */ function KT(t) {
  return new _D(t, !0)
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
 */ class GT {
  constructor(e, n, r = 1e3, i = 1.5, o = 6e4) {
    ;(this.ui = e),
      (this.timerId = n),
      (this.ko = r),
      (this.qo = i),
      (this.Qo = o),
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
  Go(e) {
    this.cancel()
    const n = Math.floor(this.Ko + this.zo()),
      r = Math.max(0, Date.now() - this.Uo),
      i = Math.max(0, n - r)
    i > 0 &&
      se(
        'ExponentialBackoff',
        `Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Uo = Date.now()), e())
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
 */ class cV {
  constructor(e, n, r, i, o, u, h, f) {
    ;(this.ui = e),
      (this.Ho = r),
      (this.Jo = i),
      (this.connection = o),
      (this.authCredentialsProvider = u),
      (this.appCheckCredentialsProvider = h),
      (this.listener = f),
      (this.state = 0),
      (this.Yo = 0),
      (this.Zo = null),
      (this.Xo = null),
      (this.stream = null),
      (this.e_ = 0),
      (this.t_ = new GT(e, n))
  }
  n_() {
    return this.state === 1 || this.state === 5 || this.r_()
  }
  r_() {
    return this.state === 2 || this.state === 3
  }
  start() {
    ;(this.e_ = 0), this.state !== 4 ? this.auth() : this.i_()
  }
  async stop() {
    this.n_() && (await this.close(0))
  }
  s_() {
    ;(this.state = 0), this.t_.reset()
  }
  o_() {
    this.r_() &&
      this.Zo === null &&
      (this.Zo = this.ui.enqueueAfterDelay(this.Ho, 6e4, () => this.__()))
  }
  a_(e) {
    this.u_(), this.stream.send(e)
  }
  async __() {
    if (this.r_()) return this.close(0)
  }
  u_() {
    this.Zo && (this.Zo.cancel(), (this.Zo = null))
  }
  c_() {
    this.Xo && (this.Xo.cancel(), (this.Xo = null))
  }
  async close(e, n) {
    this.u_(),
      this.c_(),
      this.t_.cancel(),
      this.Yo++,
      e !== 4
        ? this.t_.reset()
        : n && n.code === re.RESOURCE_EXHAUSTED
        ? (li(n.toString()),
          li('Using maximum backoff delay to prevent overloading the backend.'),
          this.t_.Wo())
        : n &&
          n.code === re.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.l_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.mo(n)
  }
  l_() {}
  auth() {
    this.state = 1
    const e = this.h_(this.Yo),
      n = this.Yo
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.Yo === n && this.P_(r, i)
      },
      (r) => {
        e(() => {
          const i = new de(
            re.UNKNOWN,
            'Fetching auth token failed: ' + r.message
          )
          return this.I_(i)
        })
      }
    )
  }
  P_(e, n) {
    const r = this.h_(this.Yo)
    ;(this.stream = this.T_(e, n)),
      this.stream.Eo(() => {
        r(() => this.listener.Eo())
      }),
      this.stream.Ro(() => {
        r(
          () => (
            (this.state = 2),
            (this.Xo = this.ui.enqueueAfterDelay(
              this.Jo,
              1e4,
              () => (this.r_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Ro()
          )
        )
      }),
      this.stream.mo((i) => {
        r(() => this.I_(i))
      }),
      this.stream.onMessage((i) => {
        r(() => (++this.e_ == 1 ? this.E_(i) : this.onNext(i)))
      })
  }
  i_() {
    ;(this.state = 5),
      this.t_.Go(async () => {
        ;(this.state = 0), this.start()
      })
  }
  I_(e) {
    return (
      se('PersistentStream', `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    )
  }
  h_(e) {
    return (n) => {
      this.ui.enqueueAndForget(() =>
        this.Yo === e
          ? n()
          : (se(
              'PersistentStream',
              'stream callback skipped by getCloseGuardedDispatcher.'
            ),
            Promise.resolve())
      )
    }
  }
}
class hV extends cV {
  constructor(e, n, r, i, o, u) {
    super(
      e,
      'listen_stream_connection_backoff',
      'listen_stream_idle',
      'health_check_timeout',
      n,
      r,
      i,
      u
    ),
      (this.serializer = o)
  }
  T_(e, n) {
    return this.connection.Bo('Listen', e, n)
  }
  E_(e) {
    return this.onNext(e)
  }
  onNext(e) {
    this.t_.reset()
    const n = ID(this.serializer, e),
      r = (function (o) {
        if (!('targetChange' in o)) return ye.min()
        const u = o.targetChange
        return u.targetIds && u.targetIds.length
          ? ye.min()
          : u.readTime
          ? ra(u.readTime)
          : ye.min()
      })(e)
    return this.listener.d_(n, r)
  }
  A_(e) {
    const n = {}
    ;(n.database = t1(this.serializer)),
      (n.addTarget = (function (o, u) {
        let h
        const f = u.target
        if (
          ((h = zg(f) ? { documents: AD(o, f) } : { query: CD(o, f)._t }),
          (h.targetId = u.targetId),
          u.resumeToken.approximateByteSize() > 0)
        ) {
          h.resumeToken = ED(o, u.resumeToken)
          const g = Wg(o, u.expectedCount)
          g !== null && (h.expectedCount = g)
        } else if (u.snapshotVersion.compareTo(ye.min()) > 0) {
          h.readTime = wD(o, u.snapshotVersion.toTimestamp())
          const g = Wg(o, u.expectedCount)
          g !== null && (h.expectedCount = g)
        }
        return h
      })(this.serializer, e))
    const r = xD(this.serializer, e)
    r && (n.labels = r), this.a_(n)
  }
  R_(e) {
    const n = {}
    ;(n.database = t1(this.serializer)), (n.removeTarget = e), this.a_(n)
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
 */ class fV extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.y_ = !1)
  }
  w_() {
    if (this.y_)
      throw new de(
        re.FAILED_PRECONDITION,
        'The client has already been terminated.'
      )
  }
  Mo(e, n, r, i) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, u]) => this.connection.Mo(e, qg(n, r), i, o, u))
        .catch((o) => {
          throw o.name === 'FirebaseError'
            ? (o.code === re.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new de(re.UNKNOWN, o.toString())
        })
    )
  }
  Lo(e, n, r, i, o) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([u, h]) => this.connection.Lo(e, qg(n, r), i, u, h, o))
        .catch((u) => {
          throw u.name === 'FirebaseError'
            ? (u.code === re.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              u)
            : new de(re.UNKNOWN, u.toString())
        })
    )
  }
  terminate() {
    ;(this.y_ = !0), this.connection.terminate()
  }
}
class dV {
  constructor(e, n) {
    ;(this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = 'Unknown'),
      (this.S_ = 0),
      (this.b_ = null),
      (this.D_ = !0)
  }
  v_() {
    this.S_ === 0 &&
      (this.C_('Unknown'),
      (this.b_ = this.asyncQueue.enqueueAfterDelay(
        'online_state_timeout',
        1e4,
        () => (
          (this.b_ = null),
          this.F_("Backend didn't respond within 10 seconds."),
          this.C_('Offline'),
          Promise.resolve()
        )
      )))
  }
  M_(e) {
    this.state === 'Online'
      ? this.C_('Unknown')
      : (this.S_++,
        this.S_ >= 1 &&
          (this.x_(),
          this.F_(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.C_('Offline')))
  }
  set(e) {
    this.x_(), (this.S_ = 0), e === 'Online' && (this.D_ = !1), this.C_(e)
  }
  C_(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e))
  }
  F_(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`
    this.D_ ? (li(n), (this.D_ = !1)) : se('OnlineStateTracker', n)
  }
  x_() {
    this.b_ !== null && (this.b_.cancel(), (this.b_ = null))
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
 */ class pV {
  constructor(e, n, r, i, o) {
    ;(this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.O_ = []),
      (this.N_ = new Map()),
      (this.L_ = new Set()),
      (this.B_ = []),
      (this.k_ = o),
      this.k_._o((u) => {
        r.enqueueAndForget(async () => {
          El(this) &&
            (se(
              'RemoteStore',
              'Restarting streams for network reachability change.'
            ),
            await (async function (f) {
              const g = Ne(f)
              g.L_.add(4),
                await wl(g),
                g.q_.set('Unknown'),
                g.L_.delete(4),
                await bf(g)
            })(this))
        })
      }),
      (this.q_ = new dV(r, i))
  }
}
async function bf(t) {
  if (El(t)) for (const e of t.B_) await e(!0)
}
async function wl(t) {
  for (const e of t.B_) await e(!1)
}
function QT(t, e) {
  const n = Ne(t)
  n.N_.has(e.targetId) ||
    (n.N_.set(e.targetId, e), ly(n) ? uy(n) : Aa(n).r_() && ay(n, e))
}
function oy(t, e) {
  const n = Ne(t),
    r = Aa(n)
  n.N_.delete(e),
    r.r_() && YT(n, e),
    n.N_.size === 0 && (r.r_() ? r.o_() : El(n) && n.q_.set('Unknown'))
}
function ay(t, e) {
  if (
    (t.Q_.xe(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(ye.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size
    e = e.withExpectedCount(n)
  }
  Aa(t).A_(e)
}
function YT(t, e) {
  t.Q_.xe(e), Aa(t).R_(e)
}
function uy(t) {
  ;(t.Q_ = new gD({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    ot: (e) => t.N_.get(e) || null,
    tt: () => t.datastore.serializer.databaseId,
  })),
    Aa(t).start(),
    t.q_.v_()
}
function ly(t) {
  return El(t) && !Aa(t).n_() && t.N_.size > 0
}
function El(t) {
  return Ne(t).L_.size === 0
}
function XT(t) {
  t.Q_ = void 0
}
async function gV(t) {
  t.q_.set('Online')
}
async function mV(t) {
  t.N_.forEach((e, n) => {
    ay(t, e)
  })
}
async function yV(t, e) {
  XT(t), ly(t) ? (t.q_.M_(e), uy(t)) : t.q_.set('Unknown')
}
async function vV(t, e, n) {
  if ((t.q_.set('Online'), e instanceof bT && e.state === 2 && e.cause))
    try {
      await (async function (i, o) {
        const u = o.cause
        for (const h of o.targetIds)
          i.N_.has(h) &&
            (await i.remoteSyncer.rejectListen(h, u),
            i.N_.delete(h),
            i.Q_.removeTarget(h))
      })(t, e)
    } catch (r) {
      se(
        'RemoteStore',
        'Failed to remove targets %s: %s ',
        e.targetIds.join(','),
        r
      ),
        await a1(t, r)
    }
  else if (
    (e instanceof Eh ? t.Q_.Ke(e) : e instanceof MT ? t.Q_.He(e) : t.Q_.We(e),
    !n.isEqual(ye.min()))
  )
    try {
      const r = await HT(t.localStore)
      n.compareTo(r) >= 0 &&
        (await (function (o, u) {
          const h = o.Q_.rt(u)
          return (
            h.targetChanges.forEach((f, g) => {
              if (f.resumeToken.approximateByteSize() > 0) {
                const v = o.N_.get(g)
                v && o.N_.set(g, v.withResumeToken(f.resumeToken, u))
              }
            }),
            h.targetMismatches.forEach((f, g) => {
              const v = o.N_.get(f)
              if (!v) return
              o.N_.set(
                f,
                v.withResumeToken(zt.EMPTY_BYTE_STRING, v.snapshotVersion)
              ),
                YT(o, f)
              const E = new bi(v.target, f, g, v.sequenceNumber)
              ay(o, E)
            }),
            o.remoteSyncer.applyRemoteEvent(h)
          )
        })(t, n))
    } catch (r) {
      se('RemoteStore', 'Failed to raise snapshot:', r), await a1(t, r)
    }
}
async function a1(t, e, n) {
  if (!Ia(e)) throw e
  t.L_.add(1),
    await wl(t),
    t.q_.set('Offline'),
    n || (n = () => HT(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      se('RemoteStore', 'Retrying IndexedDB access'),
        await n(),
        t.L_.delete(1),
        await bf(t)
    })
}
async function u1(t, e) {
  const n = Ne(t)
  n.asyncQueue.verifyOperationInProgress(),
    se('RemoteStore', 'RemoteStore received new credentials')
  const r = El(n)
  n.L_.add(3),
    await wl(n),
    r && n.q_.set('Unknown'),
    await n.remoteSyncer.handleCredentialChange(e),
    n.L_.delete(3),
    await bf(n)
}
async function _V(t, e) {
  const n = Ne(t)
  e
    ? (n.L_.delete(2), await bf(n))
    : e || (n.L_.add(2), await wl(n), n.q_.set('Unknown'))
}
function Aa(t) {
  return (
    t.K_ ||
      ((t.K_ = (function (n, r, i) {
        const o = Ne(n)
        return (
          o.w_(),
          new hV(
            r,
            o.connection,
            o.authCredentials,
            o.appCheckCredentials,
            o.serializer,
            i
          )
        )
      })(t.datastore, t.asyncQueue, {
        Eo: gV.bind(null, t),
        Ro: mV.bind(null, t),
        mo: yV.bind(null, t),
        d_: vV.bind(null, t),
      })),
      t.B_.push(async (e) => {
        e
          ? (t.K_.s_(), ly(t) ? uy(t) : t.q_.set('Unknown'))
          : (await t.K_.stop(), XT(t))
      })),
    t.K_
  )
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
 */ class cy {
  constructor(e, n, r, i, o) {
    ;(this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = o),
      (this.deferred = new na()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((u) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(e, n, r, i, o) {
    const u = Date.now() + r,
      h = new cy(e, n, u, i, o)
    return h.start(r), h
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e)
  }
  skipDelay() {
    return this.handleDelayElapsed()
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new de(re.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))
      ))
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
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
function JT(t, e) {
  if ((li('AsyncQueue', `${e}: ${t}`), Ia(t)))
    return new de(re.UNAVAILABLE, `${e}: ${t}`)
  throw t
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
 */ class ia {
  constructor(e) {
    ;(this.comparator = e
      ? (n, r) => e(n, r) || pe.comparator(n.key, r.key)
      : (n, r) => pe.comparator(n.key, r.key)),
      (this.keyedMap = Cu()),
      (this.sortedSet = new gt(this.comparator))
  }
  static emptySet(e) {
    return new ia(e.comparator)
  }
  has(e) {
    return this.keyedMap.get(e) != null
  }
  get(e) {
    return this.keyedMap.get(e)
  }
  first() {
    return this.sortedSet.minKey()
  }
  last() {
    return this.sortedSet.maxKey()
  }
  isEmpty() {
    return this.sortedSet.isEmpty()
  }
  indexOf(e) {
    const n = this.keyedMap.get(e)
    return n ? this.sortedSet.indexOf(n) : -1
  }
  get size() {
    return this.sortedSet.size
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1))
  }
  add(e) {
    const n = this.delete(e.key)
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null))
  }
  delete(e) {
    const n = this.get(e)
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this
  }
  isEqual(e) {
    if (!(e instanceof ia) || this.size !== e.size) return !1
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator()
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        o = r.getNext().key
      if (!i.isEqual(o)) return !1
    }
    return !0
  }
  toString() {
    const e = []
    return (
      this.forEach((n) => {
        e.push(n.toString())
      }),
      e.length === 0
        ? 'DocumentSet ()'
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    )
  }
  copy(e, n) {
    const r = new ia()
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
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
 */ class l1 {
  constructor() {
    this.W_ = new gt(pe.comparator)
  }
  track(e) {
    const n = e.doc.key,
      r = this.W_.get(n)
    r
      ? e.type !== 0 && r.type === 3
        ? (this.W_ = this.W_.insert(n, e))
        : e.type === 3 && r.type !== 1
        ? (this.W_ = this.W_.insert(n, { type: r.type, doc: e.doc }))
        : e.type === 2 && r.type === 2
        ? (this.W_ = this.W_.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && r.type === 0
        ? (this.W_ = this.W_.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && r.type === 0
        ? (this.W_ = this.W_.remove(n))
        : e.type === 1 && r.type === 2
        ? (this.W_ = this.W_.insert(n, { type: 1, doc: r.doc }))
        : e.type === 0 && r.type === 1
        ? (this.W_ = this.W_.insert(n, { type: 2, doc: e.doc }))
        : _e()
      : (this.W_ = this.W_.insert(n, e))
  }
  G_() {
    const e = []
    return (
      this.W_.inorderTraversal((n, r) => {
        e.push(r)
      }),
      e
    )
  }
}
class va {
  constructor(e, n, r, i, o, u, h, f, g) {
    ;(this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = o),
      (this.fromCache = u),
      (this.syncStateChanged = h),
      (this.excludesMetadataChanges = f),
      (this.hasCachedResults = g)
  }
  static fromInitialDocuments(e, n, r, i, o) {
    const u = []
    return (
      n.forEach((h) => {
        u.push({ type: 0, doc: h })
      }),
      new va(e, n, ia.emptySet(n), u, r, i, !0, !1, o)
    )
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty()
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Lf(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1
    const n = this.docChanges,
      r = e.docChanges
    if (n.length !== r.length) return !1
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1
    return !0
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
 */ class wV {
  constructor() {
    ;(this.z_ = void 0), (this.j_ = [])
  }
  H_() {
    return this.j_.some((e) => e.J_())
  }
}
class EV {
  constructor() {
    ;(this.queries = c1()),
      (this.onlineState = 'Unknown'),
      (this.Y_ = new Set())
  }
  terminate() {
    ;(function (n, r) {
      const i = Ne(n),
        o = i.queries
      ;(i.queries = c1()),
        o.forEach((u, h) => {
          for (const f of h.j_) f.onError(r)
        })
    })(this, new de(re.ABORTED, 'Firestore shutting down'))
  }
}
function c1() {
  return new Ys((t) => CT(t), Lf)
}
async function TV(t, e) {
  const n = Ne(t)
  let r = 3
  const i = e.query
  let o = n.queries.get(i)
  o ? !o.H_() && e.J_() && (r = 2) : ((o = new wV()), (r = e.J_() ? 0 : 1))
  try {
    switch (r) {
      case 0:
        o.z_ = await n.onListen(i, !0)
        break
      case 1:
        o.z_ = await n.onListen(i, !1)
        break
      case 2:
        await n.onFirstRemoteStoreListen(i)
    }
  } catch (u) {
    const h = JT(u, `Initialization of query '${Do(e.query)}' failed`)
    return void e.onError(h)
  }
  n.queries.set(i, o),
    o.j_.push(e),
    e.Z_(n.onlineState),
    o.z_ && e.X_(o.z_) && hy(n)
}
async function SV(t, e) {
  const n = Ne(t),
    r = e.query
  let i = 3
  const o = n.queries.get(r)
  if (o) {
    const u = o.j_.indexOf(e)
    u >= 0 &&
      (o.j_.splice(u, 1),
      o.j_.length === 0 ? (i = e.J_() ? 0 : 1) : !o.H_() && e.J_() && (i = 2))
  }
  switch (i) {
    case 0:
      return n.queries.delete(r), n.onUnlisten(r, !0)
    case 1:
      return n.queries.delete(r), n.onUnlisten(r, !1)
    case 2:
      return n.onLastRemoteStoreUnlisten(r)
    default:
      return
  }
}
function IV(t, e) {
  const n = Ne(t)
  let r = !1
  for (const i of e) {
    const o = i.query,
      u = n.queries.get(o)
    if (u) {
      for (const h of u.j_) h.X_(i) && (r = !0)
      u.z_ = i
    }
  }
  r && hy(n)
}
function AV(t, e, n) {
  const r = Ne(t),
    i = r.queries.get(e)
  if (i) for (const o of i.j_) o.onError(n)
  r.queries.delete(e)
}
function hy(t) {
  t.Y_.forEach((e) => {
    e.next()
  })
}
var Kg, h1
;((h1 = Kg || (Kg = {})).ea = 'default'), (h1.Cache = 'cache')
class CV {
  constructor(e, n, r) {
    ;(this.query = e),
      (this.ta = n),
      (this.na = !1),
      (this.ra = null),
      (this.onlineState = 'Unknown'),
      (this.options = r || {})
  }
  X_(e) {
    if (!this.options.includeMetadataChanges) {
      const r = []
      for (const i of e.docChanges) i.type !== 3 && r.push(i)
      e = new va(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      )
    }
    let n = !1
    return (
      this.na
        ? this.ia(e) && (this.ta.next(e), (n = !0))
        : this.sa(e, this.onlineState) && (this.oa(e), (n = !0)),
      (this.ra = e),
      n
    )
  }
  onError(e) {
    this.ta.error(e)
  }
  Z_(e) {
    this.onlineState = e
    let n = !1
    return (
      this.ra &&
        !this.na &&
        this.sa(this.ra, e) &&
        (this.oa(this.ra), (n = !0)),
      n
    )
  }
  sa(e, n) {
    if (!e.fromCache || !this.J_()) return !0
    const r = n !== 'Offline'
    return (
      (!this.options._a || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === 'Offline')
    )
  }
  ia(e) {
    if (e.docChanges.length > 0) return !0
    const n = this.ra && this.ra.hasPendingWrites !== e.hasPendingWrites
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    )
  }
  oa(e) {
    ;(e = va.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.na = !0),
      this.ta.next(e)
  }
  J_() {
    return this.options.source !== Kg.Cache
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
 */ class ZT {
  constructor(e) {
    this.key = e
  }
}
class eS {
  constructor(e) {
    this.key = e
  }
}
class RV {
  constructor(e, n) {
    ;(this.query = e),
      (this.Ta = n),
      (this.Ea = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.da = Oe()),
      (this.mutatedKeys = Oe()),
      (this.Aa = RT(e)),
      (this.Ra = new ia(this.Aa))
  }
  get Va() {
    return this.Ta
  }
  ma(e, n) {
    const r = n ? n.fa : new l1(),
      i = n ? n.Ra : this.Ra
    let o = n ? n.mutatedKeys : this.mutatedKeys,
      u = i,
      h = !1
    const f =
        this.query.limitType === 'F' && i.size === this.query.limit
          ? i.last()
          : null,
      g =
        this.query.limitType === 'L' && i.size === this.query.limit
          ? i.first()
          : null
    if (
      (e.inorderTraversal((v, E) => {
        const _ = i.get(v),
          L = Of(this.query, E) ? E : null,
          b = !!_ && this.mutatedKeys.has(_.key),
          B =
            !!L &&
            (L.hasLocalMutations ||
              (this.mutatedKeys.has(L.key) && L.hasCommittedMutations))
        let j = !1
        _ && L
          ? _.data.isEqual(L.data)
            ? b !== B && (r.track({ type: 3, doc: L }), (j = !0))
            : this.ga(_, L) ||
              (r.track({ type: 2, doc: L }),
              (j = !0),
              ((f && this.Aa(L, f) > 0) || (g && this.Aa(L, g) < 0)) &&
                (h = !0))
          : !_ && L
          ? (r.track({ type: 0, doc: L }), (j = !0))
          : _ &&
            !L &&
            (r.track({ type: 1, doc: _ }), (j = !0), (f || g) && (h = !0)),
          j &&
            (L
              ? ((u = u.add(L)), (o = B ? o.add(v) : o.delete(v)))
              : ((u = u.delete(v)), (o = o.delete(v))))
      }),
      this.query.limit !== null)
    )
      for (; u.size > this.query.limit; ) {
        const v = this.query.limitType === 'F' ? u.last() : u.first()
        ;(u = u.delete(v.key)),
          (o = o.delete(v.key)),
          r.track({ type: 1, doc: v })
      }
    return { Ra: u, fa: r, ns: h, mutatedKeys: o }
  }
  ga(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    )
  }
  applyChanges(e, n, r, i) {
    const o = this.Ra
    ;(this.Ra = e.Ra), (this.mutatedKeys = e.mutatedKeys)
    const u = e.fa.G_()
    u.sort(
      (v, E) =>
        (function (L, b) {
          const B = (j) => {
            switch (j) {
              case 0:
                return 1
              case 2:
              case 3:
                return 2
              case 1:
                return 0
              default:
                return _e()
            }
          }
          return B(L) - B(b)
        })(v.type, E.type) || this.Aa(v.doc, E.doc)
    ),
      this.pa(r),
      (i = i != null && i)
    const h = n && !i ? this.ya() : [],
      f = this.da.size === 0 && this.current && !i ? 1 : 0,
      g = f !== this.Ea
    return (
      (this.Ea = f),
      u.length !== 0 || g
        ? {
            snapshot: new va(
              this.query,
              e.Ra,
              o,
              u,
              e.mutatedKeys,
              f === 0,
              g,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            wa: h,
          }
        : { wa: h }
    )
  }
  Z_(e) {
    return this.current && e === 'Offline'
      ? ((this.current = !1),
        this.applyChanges(
          { Ra: this.Ra, fa: new l1(), mutatedKeys: this.mutatedKeys, ns: !1 },
          !1
        ))
      : { wa: [] }
  }
  Sa(e) {
    return (
      !this.Ta.has(e) && !!this.Ra.has(e) && !this.Ra.get(e).hasLocalMutations
    )
  }
  pa(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Ta = this.Ta.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Ta = this.Ta.delete(n))),
      (this.current = e.current))
  }
  ya() {
    if (!this.current) return []
    const e = this.da
    ;(this.da = Oe()),
      this.Ra.forEach((r) => {
        this.Sa(r.key) && (this.da = this.da.add(r.key))
      })
    const n = []
    return (
      e.forEach((r) => {
        this.da.has(r) || n.push(new eS(r))
      }),
      this.da.forEach((r) => {
        e.has(r) || n.push(new ZT(r))
      }),
      n
    )
  }
  ba(e) {
    ;(this.Ta = e.Ts), (this.da = Oe())
    const n = this.ma(e.documents)
    return this.applyChanges(n, !0)
  }
  Da() {
    return va.fromInitialDocuments(
      this.query,
      this.Ra,
      this.mutatedKeys,
      this.Ea === 0,
      this.hasCachedResults
    )
  }
}
class xV {
  constructor(e, n, r) {
    ;(this.query = e), (this.targetId = n), (this.view = r)
  }
}
class PV {
  constructor(e) {
    ;(this.key = e), (this.va = !1)
  }
}
class kV {
  constructor(e, n, r, i, o, u) {
    ;(this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = o),
      (this.maxConcurrentLimboResolutions = u),
      (this.Ca = {}),
      (this.Fa = new Ys((h) => CT(h), Lf)),
      (this.Ma = new Map()),
      (this.xa = new Set()),
      (this.Oa = new gt(pe.comparator)),
      (this.Na = new Map()),
      (this.La = new ry()),
      (this.Ba = {}),
      (this.ka = new Map()),
      (this.qa = ya.kn()),
      (this.onlineState = 'Unknown'),
      (this.Qa = void 0)
  }
  get isPrimaryClient() {
    return this.Qa === !0
  }
}
async function NV(t, e, n = !0) {
  const r = sS(t)
  let i
  const o = r.Fa.get(e)
  return (
    o
      ? (r.sharedClientState.addLocalQueryTarget(o.targetId), (i = o.view.Da()))
      : (i = await tS(r, e, n, !0)),
    i
  )
}
async function LV(t, e) {
  const n = sS(t)
  await tS(n, e, !0, !1)
}
async function tS(t, e, n, r) {
  const i = await rV(t.localStore, Nr(e)),
    o = i.targetId,
    u = t.sharedClientState.addLocalQueryTarget(o, n)
  let h
  return (
    r && (h = await OV(t, e, o, u === 'current', i.resumeToken)),
    t.isPrimaryClient && n && QT(t.remoteStore, i),
    h
  )
}
async function OV(t, e, n, r, i) {
  t.Ka = (E, _, L) =>
    (async function (B, j, P, C) {
      let O = j.view.ma(P)
      O.ns &&
        (O = await i1(B.localStore, j.query, !1).then(({ documents: A }) =>
          j.view.ma(A, O)
        ))
      const $ = C && C.targetChanges.get(j.targetId),
        Q = C && C.targetMismatches.get(j.targetId) != null,
        X = j.view.applyChanges(O, B.isPrimaryClient, $, Q)
      return d1(B, j.targetId, X.wa), X.snapshot
    })(t, E, _, L)
  const o = await i1(t.localStore, e, !0),
    u = new RV(e, o.Ts),
    h = u.ma(o.documents),
    f = _l.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== 'Offline',
      i
    ),
    g = u.applyChanges(h, t.isPrimaryClient, f)
  d1(t, n, g.wa)
  const v = new xV(e, n, u)
  return (
    t.Fa.set(e, v),
    t.Ma.has(n) ? t.Ma.get(n).push(e) : t.Ma.set(n, [e]),
    g.snapshot
  )
}
async function DV(t, e, n) {
  const r = Ne(t),
    i = r.Fa.get(e),
    o = r.Ma.get(i.targetId)
  if (o.length > 1)
    return (
      r.Ma.set(
        i.targetId,
        o.filter((u) => !Lf(u, e))
      ),
      void r.Fa.delete(e)
    )
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(i.targetId),
      r.sharedClientState.isActiveQueryTarget(i.targetId) ||
        (await Hg(r.localStore, i.targetId, !1)
          .then(() => {
            r.sharedClientState.clearQueryState(i.targetId),
              n && oy(r.remoteStore, i.targetId),
              Gg(r, i.targetId)
          })
          .catch(Rf)))
    : (Gg(r, i.targetId), await Hg(r.localStore, i.targetId, !0))
}
async function VV(t, e) {
  const n = Ne(t),
    r = n.Fa.get(e),
    i = n.Ma.get(r.targetId)
  n.isPrimaryClient &&
    i.length === 1 &&
    (n.sharedClientState.removeLocalQueryTarget(r.targetId),
    oy(n.remoteStore, r.targetId))
}
async function nS(t, e) {
  const n = Ne(t)
  try {
    const r = await tV(n.localStore, e)
    e.targetChanges.forEach((i, o) => {
      const u = n.Na.get(o)
      u &&
        (rt(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (u.va = !0)
          : i.modifiedDocuments.size > 0
          ? rt(u.va)
          : i.removedDocuments.size > 0 && (rt(u.va), (u.va = !1)))
    }),
      await iS(n, r, e)
  } catch (r) {
    await Rf(r)
  }
}
function f1(t, e, n) {
  const r = Ne(t)
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = []
    r.Fa.forEach((o, u) => {
      const h = u.view.Z_(e)
      h.snapshot && i.push(h.snapshot)
    }),
      (function (u, h) {
        const f = Ne(u)
        f.onlineState = h
        let g = !1
        f.queries.forEach((v, E) => {
          for (const _ of E.j_) _.Z_(h) && (g = !0)
        }),
          g && hy(f)
      })(r.eventManager, e),
      i.length && r.Ca.d_(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e)
  }
}
async function MV(t, e, n) {
  const r = Ne(t)
  r.sharedClientState.updateQueryState(e, 'rejected', n)
  const i = r.Na.get(e),
    o = i && i.key
  if (o) {
    let u = new gt(pe.comparator)
    u = u.insert(o, Xt.newNoDocument(o, ye.min()))
    const h = Oe().add(o),
      f = new Mf(ye.min(), new Map(), new gt(Le), u, h)
    await nS(r, f), (r.Oa = r.Oa.remove(o)), r.Na.delete(e), fy(r)
  } else
    await Hg(r.localStore, e, !1)
      .then(() => Gg(r, e, n))
      .catch(Rf)
}
function Gg(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e)
  for (const r of t.Ma.get(e)) t.Fa.delete(r), n && t.Ca.$a(r, n)
  t.Ma.delete(e),
    t.isPrimaryClient &&
      t.La.gr(e).forEach((r) => {
        t.La.containsKey(r) || rS(t, r)
      })
}
function rS(t, e) {
  t.xa.delete(e.path.canonicalString())
  const n = t.Oa.get(e)
  n !== null &&
    (oy(t.remoteStore, n), (t.Oa = t.Oa.remove(e)), t.Na.delete(n), fy(t))
}
function d1(t, e, n) {
  for (const r of n)
    r instanceof ZT
      ? (t.La.addReference(r.key, e), bV(t, r))
      : r instanceof eS
      ? (se('SyncEngine', 'Document no longer in limbo: ' + r.key),
        t.La.removeReference(r.key, e),
        t.La.containsKey(r.key) || rS(t, r.key))
      : _e()
}
function bV(t, e) {
  const n = e.key,
    r = n.path.canonicalString()
  t.Oa.get(n) ||
    t.xa.has(r) ||
    (se('SyncEngine', 'New document in limbo: ' + n), t.xa.add(r), fy(t))
}
function fy(t) {
  for (; t.xa.size > 0 && t.Oa.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.xa.values().next().value
    t.xa.delete(e)
    const n = new pe(ut.fromString(e)),
      r = t.qa.next()
    t.Na.set(r, new PV(n)),
      (t.Oa = t.Oa.insert(n, r)),
      QT(
        t.remoteStore,
        new bi(Nr(Zm(n.path)), r, 'TargetPurposeLimboResolution', xf.oe)
      )
  }
}
async function iS(t, e, n) {
  const r = Ne(t),
    i = [],
    o = [],
    u = []
  r.Fa.isEmpty() ||
    (r.Fa.forEach((h, f) => {
      u.push(
        r.Ka(f, e, n).then((g) => {
          var v
          if ((g || n) && r.isPrimaryClient) {
            const E = g
              ? !g.fromCache
              : (v = n?.targetChanges.get(f.targetId)) === null || v === void 0
              ? void 0
              : v.current
            r.sharedClientState.updateQueryState(
              f.targetId,
              E ? 'current' : 'not-current'
            )
          }
          if (g) {
            i.push(g)
            const E = sy.Wi(f.targetId, g)
            o.push(E)
          }
        })
      )
    }),
    await Promise.all(u),
    r.Ca.d_(i),
    await (async function (f, g) {
      const v = Ne(f)
      try {
        await v.persistence.runTransaction(
          'notifyLocalViewChanges',
          'readwrite',
          (E) =>
            Y.forEach(g, (_) =>
              Y.forEach(_.$i, (L) =>
                v.persistence.referenceDelegate.addReference(E, _.targetId, L)
              ).next(() =>
                Y.forEach(_.Ui, (L) =>
                  v.persistence.referenceDelegate.removeReference(
                    E,
                    _.targetId,
                    L
                  )
                )
              )
            )
        )
      } catch (E) {
        if (!Ia(E)) throw E
        se('LocalStore', 'Failed to update sequence numbers: ' + E)
      }
      for (const E of g) {
        const _ = E.targetId
        if (!E.fromCache) {
          const L = v.os.get(_),
            b = L.snapshotVersion,
            B = L.withLastLimboFreeSnapshotVersion(b)
          v.os = v.os.insert(_, B)
        }
      }
    })(r.localStore, o))
}
async function FV(t, e) {
  const n = Ne(t)
  if (!n.currentUser.isEqual(e)) {
    se('SyncEngine', 'User change. New user:', e.toKey())
    const r = await qT(n.localStore, e)
    ;(n.currentUser = e),
      (function (o, u) {
        o.ka.forEach((h) => {
          h.forEach((f) => {
            f.reject(new de(re.CANCELLED, u))
          })
        }),
          o.ka.clear()
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await iS(n, r.hs)
  }
}
function UV(t, e) {
  const n = Ne(t),
    r = n.Na.get(e)
  if (r && r.va) return Oe().add(r.key)
  {
    let i = Oe()
    const o = n.Ma.get(e)
    if (!o) return i
    for (const u of o) {
      const h = n.Fa.get(u)
      i = i.unionWith(h.view.Va)
    }
    return i
  }
}
function sS(t) {
  const e = Ne(t)
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = nS.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = UV.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = MV.bind(null, e)),
    (e.Ca.d_ = IV.bind(null, e.eventManager)),
    (e.Ca.$a = AV.bind(null, e.eventManager)),
    e
  )
}
class rf {
  constructor() {
    ;(this.kind = 'memory'), (this.synchronizeTabs = !1)
  }
  async initialize(e) {
    ;(this.serializer = KT(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.Wa(e)),
      (this.persistence = this.Ga(e)),
      await this.persistence.start(),
      (this.localStore = this.za(e)),
      (this.gcScheduler = this.ja(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Ha(e, this.localStore))
  }
  ja(e, n) {
    return null
  }
  Ha(e, n) {
    return null
  }
  za(e) {
    return eV(this.persistence, new JD(), e.initialUser, this.serializer)
  }
  Ga(e) {
    return new WT(iy.Zr, this.serializer)
  }
  Wa(e) {
    return new sV()
  }
  async terminate() {
    var e, n
    ;(e = this.gcScheduler) === null || e === void 0 || e.stop(),
      (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown()
  }
}
rf.provider = { build: () => new rf() }
class zV extends rf {
  constructor(e) {
    super(), (this.cacheSizeBytes = e)
  }
  ja(e, n) {
    rt(this.persistence.referenceDelegate instanceof nf)
    const r = this.persistence.referenceDelegate.garbageCollector
    return new bD(r, e.asyncQueue, n)
  }
  Ga(e) {
    const n =
      this.cacheSizeBytes !== void 0
        ? _n.withCacheSize(this.cacheSizeBytes)
        : _n.DEFAULT
    return new WT((r) => nf.Zr(r, n), this.serializer)
  }
}
class Qg {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        f1(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = FV.bind(
        null,
        this.syncEngine
      )),
      await _V(this.remoteStore, this.syncEngine.isPrimaryClient))
  }
  createEventManager(e) {
    return (function () {
      return new EV()
    })()
  }
  createDatastore(e) {
    const n = KT(e.databaseInfo.databaseId),
      r = (function (o) {
        return new lV(o)
      })(e.databaseInfo)
    return (function (o, u, h, f) {
      return new fV(o, u, h, f)
    })(e.authCredentials, e.appCheckCredentials, r, n)
  }
  createRemoteStore(e) {
    return (function (r, i, o, u, h) {
      return new pV(r, i, o, u, h)
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (n) => f1(this.syncEngine, n, 0),
      (function () {
        return o1.D() ? new o1() : new oV()
      })()
    )
  }
  createSyncEngine(e, n) {
    return (function (i, o, u, h, f, g, v) {
      const E = new kV(i, o, u, h, f, g)
      return v && (E.Qa = !0), E
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    )
  }
  async terminate() {
    var e, n
    await (async function (i) {
      const o = Ne(i)
      se('RemoteStore', 'RemoteStore shutting down.'),
        o.L_.add(5),
        await wl(o),
        o.k_.shutdown(),
        o.q_.set('Unknown')
    })(this.remoteStore),
      (e = this.datastore) === null || e === void 0 || e.terminate(),
      (n = this.eventManager) === null || n === void 0 || n.terminate()
  }
}
Qg.provider = { build: () => new Qg() }
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
 */ /**
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
 */ class BV {
  constructor(e) {
    ;(this.observer = e), (this.muted = !1)
  }
  next(e) {
    this.muted || (this.observer.next && this.Ya(this.observer.next, e))
  }
  error(e) {
    this.muted ||
      (this.observer.error
        ? this.Ya(this.observer.error, e)
        : li('Uncaught Error in snapshot listener:', e.toString()))
  }
  Za() {
    this.muted = !0
  }
  Ya(e, n) {
    setTimeout(() => {
      this.muted || e(n)
    }, 0)
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
 */ class $V {
  constructor(e, n, r, i, o) {
    ;(this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = Qt.UNAUTHENTICATED),
      (this.clientId = EO.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = o),
      this.authCredentials.start(r, async (u) => {
        se('FirestoreClient', 'Received user=', u.uid),
          await this.authCredentialListener(u),
          (this.user = u)
      }),
      this.appCheckCredentials.start(
        r,
        (u) => (
          se('FirestoreClient', 'Received new app check token=', u),
          this.appCheckCredentialListener(u, this.user)
        )
      )
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    }
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode()
    const e = new na()
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve()
        } catch (n) {
          const r = JT(n, 'Failed to shutdown persistence')
          e.reject(r)
        }
      }),
      e.promise
    )
  }
}
async function Pp(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    se('FirestoreClient', 'Initializing OfflineComponentProvider')
  const n = t.configuration
  await e.initialize(n)
  let r = n.initialUser
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await qT(e.localStore, i), (r = i))
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e)
}
async function p1(t, e) {
  t.asyncQueue.verifyOperationInProgress()
  const n = await jV(t)
  se('FirestoreClient', 'Initializing OnlineComponentProvider'),
    await e.initialize(n, t.configuration),
    t.setCredentialChangeListener((r) => u1(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, i) => u1(e.remoteStore, i)),
    (t._onlineComponents = e)
}
async function jV(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      se('FirestoreClient', 'Using user provided OfflineComponentProvider')
      try {
        await Pp(t, t._uninitializedComponentsProvider._offline)
      } catch (e) {
        const n = e
        if (
          !(function (i) {
            return i.name === 'FirebaseError'
              ? i.code === re.FAILED_PRECONDITION || i.code === re.UNIMPLEMENTED
              : !(typeof DOMException < 'u' && i instanceof DOMException) ||
                  i.code === 22 ||
                  i.code === 20 ||
                  i.code === 11
          })(n)
        )
          throw n
        da(
          'Error using user provided cache. Falling back to memory cache: ' + n
        ),
          await Pp(t, new rf())
      }
    } else
      se('FirestoreClient', 'Using default OfflineComponentProvider'),
        await Pp(t, new zV(void 0))
  return t._offlineComponents
}
async function WV(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? (se('FirestoreClient', 'Using user provided OnlineComponentProvider'),
          await p1(t, t._uninitializedComponentsProvider._online))
        : (se('FirestoreClient', 'Using default OnlineComponentProvider'),
          await p1(t, new Qg()))),
    t._onlineComponents
  )
}
async function g1(t) {
  const e = await WV(t),
    n = e.eventManager
  return (
    (n.onListen = NV.bind(null, e.syncEngine)),
    (n.onUnlisten = DV.bind(null, e.syncEngine)),
    (n.onFirstRemoteStoreListen = LV.bind(null, e.syncEngine)),
    (n.onLastRemoteStoreUnlisten = VV.bind(null, e.syncEngine)),
    n
  )
}
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
 */ function oS(t) {
  const e = {}
  return t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
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
 */ const m1 = new Map()
function qV(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new de(re.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`)
}
function y1(t) {
  if (pe.isDocumentKey(t))
    throw new de(
      re.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    )
}
function HV(t) {
  if (t === void 0) return 'undefined'
  if (t === null) return 'null'
  if (typeof t == 'string')
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t)
  if (typeof t == 'number' || typeof t == 'boolean') return '' + t
  if (typeof t == 'object') {
    if (t instanceof Array) return 'an array'
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null
      })(t)
      return e ? `a custom ${e} object` : 'an object'
    }
  }
  return typeof t == 'function' ? 'a function' : _e()
}
function Th(t, e) {
  if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new de(
        re.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = HV(t)
      throw new de(
        re.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      )
    }
  }
  return t
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
 */ class v1 {
  constructor(e) {
    var n, r
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new de(
          re.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        )
      ;(this.host = 'firestore.googleapis.com'), (this.ssl = !0)
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n)
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new de(
          re.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        )
      this.cacheSizeBytes = e.cacheSizeBytes
    }
    qV(
      'experimentalForceLongPolling',
      e.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      e.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = oS(
        (r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (o) {
        if (o.timeoutSeconds !== void 0) {
          if (isNaN(o.timeoutSeconds))
            throw new de(
              re.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`
            )
          if (o.timeoutSeconds < 5)
            throw new de(
              re.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (o.timeoutSeconds > 30)
            throw new de(
              re.INVALID_ARGUMENT,
              `invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`
            )
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams)
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    )
  }
}
class dy {
  constructor(e, n, r, i) {
    ;(this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new v1({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = 'notTerminated')
  }
  get app() {
    if (!this._app)
      throw new de(
        re.FAILED_PRECONDITION,
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
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new de(
        re.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new v1(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new dO()
          switch (r.type) {
            case 'firstParty':
              return new yO(
                r.sessionIndex || '0',
                r.iamToken || null,
                r.authTokenFactory || null
              )
            case 'provider':
              return r.client
            default:
              throw new de(
                re.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              )
          }
        })(e.credentials))
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
      (function (n) {
        const r = m1.get(n)
        r &&
          (se('ComponentProvider', 'Removing Datastore'),
          m1.delete(n),
          r.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function KV(t, e, n, r = {}) {
  var i
  const o = (t = Th(t, dy))._getSettings(),
    u = `${e}:${n}`
  if (
    (o.host !== 'firestore.googleapis.com' &&
      o.host !== u &&
      da(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ),
    t._setSettings(Object.assign(Object.assign({}, o), { host: u, ssl: !1 })),
    r.mockUserToken)
  ) {
    let h, f
    if (typeof r.mockUserToken == 'string')
      (h = r.mockUserToken), (f = Qt.MOCK_USER)
    else {
      h = GN(
        r.mockUserToken,
        (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId
      )
      const g = r.mockUserToken.sub || r.mockUserToken.user_id
      if (!g)
        throw new de(
          re.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      f = new Qt(g)
    }
    t._authCredentials = new pO(new vT(h, f))
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
 */ class Ff {
  constructor(e, n, r) {
    ;(this.converter = n),
      (this._query = r),
      (this.type = 'query'),
      (this.firestore = e)
  }
  withConverter(e) {
    return new Ff(this.firestore, e, this._query)
  }
}
class Xs {
  constructor(e, n, r) {
    ;(this.converter = n),
      (this._key = r),
      (this.type = 'document'),
      (this.firestore = e)
  }
  get _path() {
    return this._key.path
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get path() {
    return this._key.path.canonicalString()
  }
  get parent() {
    return new sa(this.firestore, this.converter, this._key.path.popLast())
  }
  withConverter(e) {
    return new Xs(this.firestore, e, this._key)
  }
}
class sa extends Ff {
  constructor(e, n, r) {
    super(e, n, Zm(r)), (this._path = r), (this.type = 'collection')
  }
  get id() {
    return this._query.path.lastSegment()
  }
  get path() {
    return this._query.path.canonicalString()
  }
  get parent() {
    const e = this._path.popLast()
    return e.isEmpty() ? null : new Xs(this.firestore, null, new pe(e))
  }
  withConverter(e) {
    return new sa(this.firestore, e, this._path)
  }
}
function GV(t, e, ...n) {
  if (((t = sT(t)), t instanceof dy)) {
    const r = ut.fromString(e, ...n)
    return y1(r), new sa(t, null, r)
  }
  {
    if (!(t instanceof Xs || t instanceof sa))
      throw new de(
        re.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      )
    const r = t._path.child(ut.fromString(e, ...n))
    return y1(r), new sa(t.firestore, null, r)
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
 */ class _1 {
  constructor(e = Promise.resolve()) {
    ;(this.Pu = []),
      (this.Iu = !1),
      (this.Tu = []),
      (this.Eu = null),
      (this.du = !1),
      (this.Au = !1),
      (this.Ru = []),
      (this.t_ = new GT(this, 'async_queue_retry')),
      (this.Vu = () => {
        const r = xp()
        r &&
          se('AsyncQueue', 'Visibility state changed to ' + r.visibilityState),
          this.t_.jo()
      }),
      (this.mu = e)
    const n = xp()
    n &&
      typeof n.addEventListener == 'function' &&
      n.addEventListener('visibilitychange', this.Vu)
  }
  get isShuttingDown() {
    return this.Iu
  }
  enqueueAndForget(e) {
    this.enqueue(e)
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.fu(), this.gu(e)
  }
  enterRestrictedMode(e) {
    if (!this.Iu) {
      ;(this.Iu = !0), (this.Au = e || !1)
      const n = xp()
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Vu)
    }
  }
  enqueue(e) {
    if ((this.fu(), this.Iu)) return new Promise(() => {})
    const n = new na()
    return this.gu(() =>
      this.Iu && this.Au
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise)
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Pu.push(e), this.pu()))
  }
  async pu() {
    if (this.Pu.length !== 0) {
      try {
        await this.Pu[0](), this.Pu.shift(), this.t_.reset()
      } catch (e) {
        if (!Ia(e)) throw e
        se('AsyncQueue', 'Operation failed with retryable error: ' + e)
      }
      this.Pu.length > 0 && this.t_.Go(() => this.pu())
    }
  }
  gu(e) {
    const n = this.mu.then(
      () => (
        (this.du = !0),
        e()
          .catch((r) => {
            ;(this.Eu = r), (this.du = !1)
            const i = (function (u) {
              let h = u.message || ''
              return (
                u.stack &&
                  (h = u.stack.includes(u.message)
                    ? u.stack
                    : u.message +
                      `
` +
                      u.stack),
                h
              )
            })(r)
            throw (li('INTERNAL UNHANDLED ERROR: ', i), r)
          })
          .then((r) => ((this.du = !1), r))
      )
    )
    return (this.mu = n), n
  }
  enqueueAfterDelay(e, n, r) {
    this.fu(), this.Ru.indexOf(e) > -1 && (n = 0)
    const i = cy.createAndSchedule(this, e, n, r, (o) => this.yu(o))
    return this.Tu.push(i), i
  }
  fu() {
    this.Eu && _e()
  }
  verifyOperationInProgress() {}
  async wu() {
    let e
    do (e = this.mu), await e
    while (e !== this.mu)
  }
  Su(e) {
    for (const n of this.Tu) if (n.timerId === e) return !0
    return !1
  }
  bu(e) {
    return this.wu().then(() => {
      this.Tu.sort((n, r) => n.targetTimeMs - r.targetTimeMs)
      for (const n of this.Tu)
        if ((n.skipDelay(), e !== 'all' && n.timerId === e)) break
      return this.wu()
    })
  }
  Du(e) {
    this.Ru.push(e)
  }
  yu(e) {
    const n = this.Tu.indexOf(e)
    this.Tu.splice(n, 1)
  }
}
function w1(t) {
  return (function (n, r) {
    if (typeof n != 'object' || n === null) return !1
    const i = n
    for (const o of r) if (o in i && typeof i[o] == 'function') return !0
    return !1
  })(t, ['next', 'error', 'complete'])
}
class Yg extends dy {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = 'firestore'),
      (this._queue = new _1()),
      (this._persistenceKey = i?.name || '[DEFAULT]')
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate()
      ;(this._queue = new _1(e)), (this._firestoreClient = void 0), await e
    }
  }
}
function QV(t, e) {
  const n = typeof t == 'object' ? t : rO(),
    r = typeof t == 'string' ? t : '(default)',
    i = ZL(n, 'firestore').getImmediate({ identifier: r })
  if (!i._initialized) {
    const o = HN('firestore')
    o && KV(i, ...o)
  }
  return i
}
function YV(t) {
  if (t._terminated)
    throw new de(
      re.FAILED_PRECONDITION,
      'The client has already been terminated.'
    )
  return t._firestoreClient || XV(t), t._firestoreClient
}
function XV(t) {
  var e, n, r
  const i = t._freezeSettings(),
    o = (function (h, f, g, v) {
      return new OO(
        h,
        f,
        g,
        v.host,
        v.ssl,
        v.experimentalForceLongPolling,
        v.experimentalAutoDetectLongPolling,
        oS(v.experimentalLongPollingOptions),
        v.useFetchStreams
      )
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || '',
      t._persistenceKey,
      i
    )
  t._componentsProvider ||
    (!((n = i.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (t._componentsProvider = {
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      })),
    (t._firestoreClient = new $V(
      t._authCredentials,
      t._appCheckCredentials,
      t._queue,
      o,
      t._componentsProvider &&
        (function (h) {
          const f = h?._online.build()
          return { _offline: h?._offline.build(f), _online: f }
        })(t._componentsProvider)
    ))
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
 */ class sf {
  constructor(e) {
    this._byteString = e
  }
  static fromBase64String(e) {
    try {
      return new sf(zt.fromBase64String(e))
    } catch (n) {
      throw new de(
        re.INVALID_ARGUMENT,
        'Failed to construct data from Base64 string: ' + n
      )
    }
  }
  static fromUint8Array(e) {
    return new sf(zt.fromUint8Array(e))
  }
  toBase64() {
    return this._byteString.toBase64()
  }
  toUint8Array() {
    return this._byteString.toUint8Array()
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')'
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString)
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
 */ class aS {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new de(
          re.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        )
    this._internalPath = new un(e)
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath)
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
 */ class JV {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new de(
        re.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      )
    if (!isFinite(n) || n < -180 || n > 180)
      throw new de(
        re.INVALID_ARGUMENT,
        'Longitude must be a number between -180 and 180, but was: ' + n
      )
    ;(this._lat = e), (this._long = n)
  }
  get latitude() {
    return this._lat
  }
  get longitude() {
    return this._long
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long }
  }
  _compareTo(e) {
    return Le(this._lat, e._lat) || Le(this._long, e._long)
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */ class ZV {
  constructor(e) {
    this._values = (e || []).map((n) => n)
  }
  toArray() {
    return this._values.map((e) => e)
  }
  isEqual(e) {
    return (function (r, i) {
      if (r.length !== i.length) return !1
      for (let o = 0; o < r.length; ++o) if (r[o] !== i[o]) return !1
      return !0
    })(this._values, e._values)
  }
}
const e4 = new RegExp('[~\\*/\\[\\]]')
function t4(t, e, n) {
  if (e.search(e4) >= 0)
    throw E1(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t
    )
  try {
    return new aS(...e.split('.'))._internalPath
  } catch {
    throw E1(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t
    )
  }
}
function E1(t, e, n, r, i) {
  let o = `Function ${e}() called with invalid data`
  o += '. '
  let u = ''
  return new de(re.INVALID_ARGUMENT, o + t + u)
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
 */ class uS {
  constructor(e, n, r, i, o) {
    ;(this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = o)
  }
  get id() {
    return this._key.path.lastSegment()
  }
  get ref() {
    return new Xs(this._firestore, this._converter, this._key)
  }
  exists() {
    return this._document !== null
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new n4(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        )
        return this._converter.fromFirestore(e)
      }
      return this._userDataWriter.convertValue(this._document.data.value)
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(lS('DocumentSnapshot.get', e))
      if (n !== null) return this._userDataWriter.convertValue(n)
    }
  }
}
class n4 extends uS {
  data() {
    return super.data()
  }
}
function lS(t, e) {
  return typeof e == 'string'
    ? t4(t, e)
    : e instanceof aS
    ? e._internalPath
    : e._delegate._internalPath
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
 */ function r4(t) {
  if (t.limitType === 'L' && t.explicitOrderBy.length === 0)
    throw new de(
      re.UNIMPLEMENTED,
      'limitToLast() queries require specifying at least one orderBy() clause'
    )
}
class i4 {
  convertValue(e, n = 'none') {
    switch (Zi(e)) {
      case 0:
        return null
      case 1:
        return e.booleanValue
      case 2:
        return dt(e.integerValue || e.doubleValue)
      case 3:
        return this.convertTimestamp(e.timestampValue)
      case 4:
        return this.convertServerTimestamp(e, n)
      case 5:
        return e.stringValue
      case 6:
        return this.convertBytes(Ji(e.bytesValue))
      case 7:
        return this.convertReference(e.referenceValue)
      case 8:
        return this.convertGeoPoint(e.geoPointValue)
      case 9:
        return this.convertArray(e.arrayValue, n)
      case 11:
        return this.convertObject(e.mapValue, n)
      case 10:
        return this.convertVectorValue(e.mapValue)
      default:
        throw _e()
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n)
  }
  convertObjectMap(e, n = 'none') {
    const r = {}
    return (
      vl(e, (i, o) => {
        r[i] = this.convertValue(o, n)
      }),
      r
    )
  }
  convertVectorValue(e) {
    var n, r, i
    const o =
      (i =
        (r =
          (n = e.fields) === null || n === void 0
            ? void 0
            : n.value.arrayValue) === null || r === void 0
          ? void 0
          : r.values) === null || i === void 0
        ? void 0
        : i.map((u) => dt(u.doubleValue))
    return new ZV(o)
  }
  convertGeoPoint(e) {
    return new JV(dt(e.latitude), dt(e.longitude))
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n))
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case 'previous':
        const r = kf(e)
        return r == null ? null : this.convertValue(r, n)
      case 'estimate':
        return this.convertTimestamp(ll(e))
      default:
        return null
    }
  }
  convertTimestamp(e) {
    const n = Xi(e)
    return new An(n.seconds, n.nanos)
  }
  convertDocumentKey(e, n) {
    const r = ut.fromString(e)
    rt(jT(r))
    const i = new cl(r.get(1), r.get(3)),
      o = new pe(r.popFirst(5))
    return (
      i.isEqual(n) ||
        li(
          `Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      o
    )
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
 */ class xu {
  constructor(e, n) {
    ;(this.hasPendingWrites = e), (this.fromCache = n)
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    )
  }
}
class cS extends uS {
  constructor(e, n, r, i, o, u) {
    super(e, n, r, i, u),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = o)
  }
  exists() {
    return super.exists()
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new Sh(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        )
        return this._converter.fromFirestore(n, e)
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      )
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(lS('DocumentSnapshot.get', e))
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps)
    }
  }
}
class Sh extends cS {
  data(e = {}) {
    return super.data(e)
  }
}
class s4 {
  constructor(e, n, r, i) {
    ;(this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new xu(i.hasPendingWrites, i.fromCache)),
      (this.query = r)
  }
  get docs() {
    const e = []
    return this.forEach((n) => e.push(n)), e
  }
  get size() {
    return this._snapshot.docs.size
  }
  get empty() {
    return this.size === 0
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new Sh(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new xu(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      )
    })
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges
    if (n && this._snapshot.excludesMetadataChanges)
      throw new de(
        re.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      )
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (i, o) {
          if (i._snapshot.oldDocs.isEmpty()) {
            let u = 0
            return i._snapshot.docChanges.map((h) => {
              const f = new Sh(
                i._firestore,
                i._userDataWriter,
                h.doc.key,
                h.doc,
                new xu(
                  i._snapshot.mutatedKeys.has(h.doc.key),
                  i._snapshot.fromCache
                ),
                i.query.converter
              )
              return (
                h.doc, { type: 'added', doc: f, oldIndex: -1, newIndex: u++ }
              )
            })
          }
          {
            let u = i._snapshot.oldDocs
            return i._snapshot.docChanges
              .filter((h) => o || h.type !== 3)
              .map((h) => {
                const f = new Sh(
                  i._firestore,
                  i._userDataWriter,
                  h.doc.key,
                  h.doc,
                  new xu(
                    i._snapshot.mutatedKeys.has(h.doc.key),
                    i._snapshot.fromCache
                  ),
                  i.query.converter
                )
                let g = -1,
                  v = -1
                return (
                  h.type !== 0 &&
                    ((g = u.indexOf(h.doc.key)), (u = u.delete(h.doc.key))),
                  h.type !== 1 &&
                    ((u = u.add(h.doc)), (v = u.indexOf(h.doc.key))),
                  { type: o4(h.type), doc: f, oldIndex: g, newIndex: v }
                )
              })
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    )
  }
}
function o4(t) {
  switch (t) {
    case 0:
      return 'added'
    case 2:
    case 3:
      return 'modified'
    case 1:
      return 'removed'
    default:
      return _e()
  }
}
class hS extends i4 {
  constructor(e) {
    super(), (this.firestore = e)
  }
  convertBytes(e) {
    return new sf(e)
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId)
    return new Xs(this.firestore, null, n)
  }
}
function a4(t, ...e) {
  var n, r, i
  t = sT(t)
  let o = { includeMetadataChanges: !1, source: 'default' },
    u = 0
  typeof e[u] != 'object' || w1(e[u]) || ((o = e[u]), u++)
  const h = {
    includeMetadataChanges: o.includeMetadataChanges,
    source: o.source,
  }
  if (w1(e[u])) {
    const E = e[u]
    ;(e[u] = (n = E.next) === null || n === void 0 ? void 0 : n.bind(E)),
      (e[u + 1] = (r = E.error) === null || r === void 0 ? void 0 : r.bind(E)),
      (e[u + 2] =
        (i = E.complete) === null || i === void 0 ? void 0 : i.bind(E))
  }
  let f, g, v
  if (t instanceof Xs)
    (g = Th(t.firestore, Yg)),
      (v = Zm(t._key.path)),
      (f = {
        next: (E) => {
          e[u] && e[u](u4(g, t, E))
        },
        error: e[u + 1],
        complete: e[u + 2],
      })
  else {
    const E = Th(t, Ff)
    ;(g = Th(E.firestore, Yg)), (v = E._query)
    const _ = new hS(g)
    ;(f = {
      next: (L) => {
        e[u] && e[u](new s4(g, _, E, L))
      },
      error: e[u + 1],
      complete: e[u + 2],
    }),
      r4(t._query)
  }
  return (function (_, L, b, B) {
    const j = new BV(B),
      P = new CV(L, j, b)
    return (
      _.asyncQueue.enqueueAndForget(async () => TV(await g1(_), P)),
      () => {
        j.Za(), _.asyncQueue.enqueueAndForget(async () => SV(await g1(_), P))
      }
    )
  })(YV(g), v, h, f)
}
function u4(t, e, n) {
  const r = n.docs.get(e._key),
    i = new hS(t)
  return new cS(
    t,
    i,
    e._key,
    r,
    new xu(n.hasPendingWrites, n.fromCache),
    e.converter
  )
}
;(function (e, n = !0) {
  ;(function (i) {
    Sa = i
  })(nO),
    Xh(
      new ol(
        'firestore',
        (r, { instanceIdentifier: i, options: o }) => {
          const u = r.getProvider('app').getImmediate(),
            h = new Yg(
              new gO(r.getProvider('auth-internal')),
              new _O(r.getProvider('app-check-internal')),
              (function (g, v) {
                if (
                  !Object.prototype.hasOwnProperty.apply(g.options, [
                    'projectId',
                  ])
                )
                  throw new de(
                    re.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new cl(g.options.projectId, v)
              })(u, i),
              u
            )
          return (
            (o = Object.assign({ useFetchStreams: n }, o)), h._setSettings(o), h
          )
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    ta(D_, '4.7.4', e),
    ta(D_, '4.7.4', 'esm2017')
})()
var l4 = 'firebase',
  c4 = '11.0.1'
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
 */ ta(l4, c4, 'app')
const h4 = {
    apiKey: void 0,
    authDomain: void 0,
    projectId: 'visamaz-69bdf',
    storageBucket: void 0,
    messagingSenderId: void 0,
    appId: void 0,
  },
  f4 = lT(h4),
  d4 = QV(f4)
var of = { exports: {} }
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ of.exports
;(function (t, e) {
  ;(function () {
    var n,
      r = '4.17.21',
      i = 200,
      o = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      u = 'Expected a function',
      h = 'Invalid `variable` option passed into `_.template`',
      f = '__lodash_hash_undefined__',
      g = 500,
      v = '__lodash_placeholder__',
      E = 1,
      _ = 2,
      L = 4,
      b = 1,
      B = 2,
      j = 1,
      P = 2,
      C = 4,
      O = 8,
      $ = 16,
      Q = 32,
      X = 64,
      A = 128,
      I = 256,
      x = 512,
      N = 30,
      V = '...',
      z = 800,
      k = 16,
      lt = 1,
      en = 2,
      Mn = 3,
      mt = 1 / 0,
      Z = 9007199254740991,
      ue = 17976931348623157e292,
      le = NaN,
      Se = 4294967295,
      Be = Se - 1,
      Ze = Se >>> 1,
      er = [
        ['ary', A],
        ['bind', j],
        ['bindKey', P],
        ['curry', O],
        ['curryRight', $],
        ['flip', x],
        ['partial', Q],
        ['partialRight', X],
        ['rearg', I],
      ],
      Bt = '[object Arguments]',
      fn = '[object Array]',
      tr = '[object AsyncFunction]',
      is = '[object Boolean]',
      ss = '[object Date]',
      Js = '[object DOMException]',
      Dr = '[object Error]',
      hi = '[object Function]',
      Zs = '[object GeneratorFunction]',
      tn = '[object Map]',
      Vr = '[object Number]',
      Tl = '[object Null]',
      nr = '[object Object]',
      Sl = '[object Promise]',
      Il = '[object Proxy]',
      Mr = '[object RegExp]',
      dn = '[object Set]',
      os = '[object String]',
      fi = '[object Symbol]',
      Ca = '[object Undefined]',
      di = '[object WeakMap]',
      Ct = '[object WeakSet]',
      ct = '[object ArrayBuffer]',
      rr = '[object DataView]',
      eo = '[object Float32Array]',
      to = '[object Float64Array]',
      Ra = '[object Int8Array]',
      br = '[object Int16Array]',
      no = '[object Int32Array]',
      ro = '[object Uint8Array]',
      as = '[object Uint8ClampedArray]',
      xa = '[object Uint16Array]',
      Pa = '[object Uint32Array]',
      ka = /\b__p \+= '';/g,
      Al = /\b(__p \+=) '' \+/g,
      Cl = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      pi = /&(?:amp|lt|gt|quot|#39);/g,
      io = /[&<>"']/g,
      Na = RegExp(pi.source),
      Fr = RegExp(io.source),
      Rl = /<%-([\s\S]+?)%>/g,
      so = /<%([\s\S]+?)%>/g,
      La = /<%=([\s\S]+?)%>/g,
      us = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      xl = /^\w*$/,
      Ot =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      oo = /[\\^$.*+?()[\]{}|]/g,
      ls = RegExp(oo.source),
      Ur = /^\s+/,
      zf = /\s/,
      Bf = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      gi = /\{\n\/\* \[wrapped with (.+)\] \*/,
      $f = /,? & /,
      jf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ao = /[()=,{}\[\]\/\s]/,
      Pl = /\\(\\)?/g,
      Oa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      cs = /\w*$/,
      vr = /^[-+]0x[0-9a-f]+$/i,
      kl = /^0b[01]+$/i,
      Nl = /^\[object .+?Constructor\]$/,
      Da = /^0o[0-7]+$/i,
      Va = /^(?:0|[1-9]\d*)$/,
      Ll = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      hs = /($^)/,
      Wf = /['\n\r\u2028\u2029\\]/g,
      zr = '\\ud800-\\udfff',
      Ol = '\\u0300-\\u036f',
      Ma = '\\ufe20-\\ufe2f',
      fs = '\\u20d0-\\u20ff',
      _r = Ol + Ma + fs,
      uo = '\\u2700-\\u27bf',
      Dl = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      Vl = '\\xac\\xb1\\xd7\\xf7',
      Ml = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      bl = '\\u2000-\\u206f',
      ba =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      lo = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      Fa = '\\ufe0e\\ufe0f',
      Ua = Vl + Ml + bl + ba,
      za = "['’]",
      qf = '[' + zr + ']',
      Ba = '[' + Ua + ']',
      ds = '[' + _r + ']',
      Fl = '\\d+',
      Br = '[' + uo + ']',
      bn = '[' + Dl + ']',
      ps = '[^' + zr + Ua + Fl + uo + Dl + lo + ']',
      mi = '\\ud83c[\\udffb-\\udfff]',
      Ul = '(?:' + ds + '|' + mi + ')',
      qe = '[^' + zr + ']',
      yi = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      $r = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      Fn = '[' + lo + ']',
      zl = '\\u200d',
      $a = '(?:' + bn + '|' + ps + ')',
      Hf = '(?:' + Fn + '|' + ps + ')',
      Bl = '(?:' + za + '(?:d|ll|m|re|s|t|ve))?',
      $l = '(?:' + za + '(?:D|LL|M|RE|S|T|VE))?',
      jl = Ul + '?',
      vi = '[' + Fa + ']?',
      wr = '(?:' + zl + '(?:' + [qe, yi, $r].join('|') + ')' + vi + jl + ')*',
      Wl = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      ql = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      ja = vi + jl + wr,
      _i = '(?:' + [Br, yi, $r].join('|') + ')' + ja,
      Kf = '(?:' + [qe + ds + '?', ds, yi, $r, qf].join('|') + ')',
      Gf = RegExp(za, 'g'),
      Qf = RegExp(ds, 'g'),
      Un = RegExp(mi + '(?=' + mi + ')|' + Kf + ja, 'g'),
      Yf = RegExp(
        [
          Fn + '?' + bn + '+' + Bl + '(?=' + [Ba, Fn, '$'].join('|') + ')',
          Hf + '+' + $l + '(?=' + [Ba, Fn + $a, '$'].join('|') + ')',
          Fn + '?' + $a + '+' + Bl,
          Fn + '+' + $l,
          ql,
          Wl,
          Fl,
          _i,
        ].join('|'),
        'g'
      ),
      Xf = RegExp('[' + zl + zr + _r + Fa + ']'),
      co = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      ho = [
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
      Hl = -1,
      Me = {}
    ;(Me[eo] =
      Me[to] =
      Me[Ra] =
      Me[br] =
      Me[no] =
      Me[ro] =
      Me[as] =
      Me[xa] =
      Me[Pa] =
        !0),
      (Me[Bt] =
        Me[fn] =
        Me[ct] =
        Me[is] =
        Me[rr] =
        Me[ss] =
        Me[Dr] =
        Me[hi] =
        Me[tn] =
        Me[Vr] =
        Me[nr] =
        Me[Mr] =
        Me[dn] =
        Me[os] =
        Me[di] =
          !1)
    var Ve = {}
    ;(Ve[Bt] =
      Ve[fn] =
      Ve[ct] =
      Ve[rr] =
      Ve[is] =
      Ve[ss] =
      Ve[eo] =
      Ve[to] =
      Ve[Ra] =
      Ve[br] =
      Ve[no] =
      Ve[tn] =
      Ve[Vr] =
      Ve[nr] =
      Ve[Mr] =
      Ve[dn] =
      Ve[os] =
      Ve[fi] =
      Ve[ro] =
      Ve[as] =
      Ve[xa] =
      Ve[Pa] =
        !0),
      (Ve[Dr] = Ve[hi] = Ve[di] = !1)
    var Kl = {
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
      Wa = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      Xe = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      Jf = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      Zf = parseFloat,
      Gl = parseInt,
      qa = typeof hu == 'object' && hu && hu.Object === Object && hu,
      Ql = typeof self == 'object' && self && self.Object === Object && self,
      st = qa || Ql || Function('return this')(),
      fo = e && !e.nodeType && e,
      Dt = fo && !0 && t && !t.nodeType && t,
      Ha = Dt && Dt.exports === fo,
      Ka = Ha && qa.process,
      Rt = (function () {
        try {
          var M = Dt && Dt.require && Dt.require('util').types
          return M || (Ka && Ka.binding && Ka.binding('util'))
        } catch {}
      })(),
      Ga = Rt && Rt.isArrayBuffer,
      po = Rt && Rt.isDate,
      gs = Rt && Rt.isMap,
      Qa = Rt && Rt.isRegExp,
      ms = Rt && Rt.isSet,
      Yl = Rt && Rt.isTypedArray
    function $t(M, H, W) {
      switch (W.length) {
        case 0:
          return M.call(H)
        case 1:
          return M.call(H, W[0])
        case 2:
          return M.call(H, W[0], W[1])
        case 3:
          return M.call(H, W[0], W[1], W[2])
      }
      return M.apply(H, W)
    }
    function ys(M, H, W, ie) {
      for (var ge = -1, Fe = M == null ? 0 : M.length; ++ge < Fe; ) {
        var Et = M[ge]
        H(ie, Et, W(Et), M)
      }
      return ie
    }
    function nn(M, H) {
      for (
        var W = -1, ie = M == null ? 0 : M.length;
        ++W < ie && H(M[W], W, M) !== !1;

      );
      return M
    }
    function Xl(M, H) {
      for (var W = M == null ? 0 : M.length; W-- && H(M[W], W, M) !== !1; );
      return M
    }
    function go(M, H) {
      for (var W = -1, ie = M == null ? 0 : M.length; ++W < ie; )
        if (!H(M[W], W, M)) return !1
      return !0
    }
    function zn(M, H) {
      for (
        var W = -1, ie = M == null ? 0 : M.length, ge = 0, Fe = [];
        ++W < ie;

      ) {
        var Et = M[W]
        H(Et, W, M) && (Fe[ge++] = Et)
      }
      return Fe
    }
    function vs(M, H) {
      var W = M == null ? 0 : M.length
      return !!W && jr(M, H, 0) > -1
    }
    function wi(M, H, W) {
      for (var ie = -1, ge = M == null ? 0 : M.length; ++ie < ge; )
        if (W(H, M[ie])) return !0
      return !1
    }
    function He(M, H) {
      for (
        var W = -1, ie = M == null ? 0 : M.length, ge = Array(ie);
        ++W < ie;

      )
        ge[W] = H(M[W], W, M)
      return ge
    }
    function ir(M, H) {
      for (var W = -1, ie = H.length, ge = M.length; ++W < ie; )
        M[ge + W] = H[W]
      return M
    }
    function sr(M, H, W, ie) {
      var ge = -1,
        Fe = M == null ? 0 : M.length
      for (ie && Fe && (W = M[++ge]); ++ge < Fe; ) W = H(W, M[ge], ge, M)
      return W
    }
    function Jl(M, H, W, ie) {
      var ge = M == null ? 0 : M.length
      for (ie && ge && (W = M[--ge]); ge--; ) W = H(W, M[ge], ge, M)
      return W
    }
    function mo(M, H) {
      for (var W = -1, ie = M == null ? 0 : M.length; ++W < ie; )
        if (H(M[W], W, M)) return !0
      return !1
    }
    var Zl = m('length')
    function ec(M) {
      return M.split('')
    }
    function yo(M) {
      return M.match(jf) || []
    }
    function jt(M, H, W) {
      var ie
      return (
        W(M, function (ge, Fe, Et) {
          if (H(ge, Fe, Et)) return (ie = Fe), !1
        }),
        ie
      )
    }
    function _s(M, H, W, ie) {
      for (var ge = M.length, Fe = W + (ie ? 1 : -1); ie ? Fe-- : ++Fe < ge; )
        if (H(M[Fe], Fe, M)) return Fe
      return -1
    }
    function jr(M, H, W) {
      return H === H ? ES(M, H, W) : _s(M, l, W)
    }
    function Ei(M, H, W, ie) {
      for (var ge = W - 1, Fe = M.length; ++ge < Fe; )
        if (ie(M[ge], H)) return ge
      return -1
    }
    function l(M) {
      return M !== M
    }
    function d(M, H) {
      var W = M == null ? 0 : M.length
      return W ? te(M, H) / W : le
    }
    function m(M) {
      return function (H) {
        return H == null ? n : H[M]
      }
    }
    function T(M) {
      return function (H) {
        return M == null ? n : M[H]
      }
    }
    function U(M, H, W, ie, ge) {
      return (
        ge(M, function (Fe, Et, Ke) {
          W = ie ? ((ie = !1), Fe) : H(W, Fe, Et, Ke)
        }),
        W
      )
    }
    function q(M, H) {
      var W = M.length
      for (M.sort(H); W--; ) M[W] = M[W].value
      return M
    }
    function te(M, H) {
      for (var W, ie = -1, ge = M.length; ++ie < ge; ) {
        var Fe = H(M[ie])
        Fe !== n && (W = W === n ? Fe : W + Fe)
      }
      return W
    }
    function be(M, H) {
      for (var W = -1, ie = Array(M); ++W < M; ) ie[W] = H(W)
      return ie
    }
    function wt(M, H) {
      return He(H, function (W) {
        return [W, M[W]]
      })
    }
    function Re(M) {
      return M && M.slice(0, gy(M) + 1).replace(Ur, '')
    }
    function Ue(M) {
      return function (H) {
        return M(H)
      }
    }
    function yt(M, H) {
      return He(H, function (W) {
        return M[W]
      })
    }
    function Bn(M, H) {
      return M.has(H)
    }
    function pn(M, H) {
      for (var W = -1, ie = M.length; ++W < ie && jr(H, M[W], 0) > -1; );
      return W
    }
    function ws(M, H) {
      for (var W = M.length; W-- && jr(H, M[W], 0) > -1; );
      return W
    }
    function Ya(M, H) {
      for (var W = M.length, ie = 0; W--; ) M[W] === H && ++ie
      return ie
    }
    var pS = T(Kl),
      gS = T(Wa)
    function mS(M) {
      return '\\' + Jf[M]
    }
    function yS(M, H) {
      return M == null ? n : M[H]
    }
    function vo(M) {
      return Xf.test(M)
    }
    function vS(M) {
      return co.test(M)
    }
    function _S(M) {
      for (var H, W = []; !(H = M.next()).done; ) W.push(H.value)
      return W
    }
    function ed(M) {
      var H = -1,
        W = Array(M.size)
      return (
        M.forEach(function (ie, ge) {
          W[++H] = [ge, ie]
        }),
        W
      )
    }
    function py(M, H) {
      return function (W) {
        return M(H(W))
      }
    }
    function Ti(M, H) {
      for (var W = -1, ie = M.length, ge = 0, Fe = []; ++W < ie; ) {
        var Et = M[W]
        ;(Et === H || Et === v) && ((M[W] = v), (Fe[ge++] = W))
      }
      return Fe
    }
    function tc(M) {
      var H = -1,
        W = Array(M.size)
      return (
        M.forEach(function (ie) {
          W[++H] = ie
        }),
        W
      )
    }
    function wS(M) {
      var H = -1,
        W = Array(M.size)
      return (
        M.forEach(function (ie) {
          W[++H] = [ie, ie]
        }),
        W
      )
    }
    function ES(M, H, W) {
      for (var ie = W - 1, ge = M.length; ++ie < ge; )
        if (M[ie] === H) return ie
      return -1
    }
    function TS(M, H, W) {
      for (var ie = W + 1; ie--; ) if (M[ie] === H) return ie
      return ie
    }
    function _o(M) {
      return vo(M) ? IS(M) : Zl(M)
    }
    function or(M) {
      return vo(M) ? AS(M) : ec(M)
    }
    function gy(M) {
      for (var H = M.length; H-- && zf.test(M.charAt(H)); );
      return H
    }
    var SS = T(Xe)
    function IS(M) {
      for (var H = (Un.lastIndex = 0); Un.test(M); ) ++H
      return H
    }
    function AS(M) {
      return M.match(Un) || []
    }
    function CS(M) {
      return M.match(Yf) || []
    }
    var RS = function M(H) {
        H = H == null ? st : wo.defaults(st.Object(), H, wo.pick(st, ho))
        var W = H.Array,
          ie = H.Date,
          ge = H.Error,
          Fe = H.Function,
          Et = H.Math,
          Ke = H.Object,
          td = H.RegExp,
          xS = H.String,
          $n = H.TypeError,
          nc = W.prototype,
          PS = Fe.prototype,
          Eo = Ke.prototype,
          rc = H['__core-js_shared__'],
          ic = PS.toString,
          $e = Eo.hasOwnProperty,
          kS = 0,
          my = (function () {
            var s = /[^.]+$/.exec((rc && rc.keys && rc.keys.IE_PROTO) || '')
            return s ? 'Symbol(src)_1.' + s : ''
          })(),
          sc = Eo.toString,
          NS = ic.call(Ke),
          LS = st._,
          OS = td(
            '^' +
              ic
                .call($e)
                .replace(oo, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          oc = Ha ? H.Buffer : n,
          Si = H.Symbol,
          ac = H.Uint8Array,
          yy = oc ? oc.allocUnsafe : n,
          uc = py(Ke.getPrototypeOf, Ke),
          vy = Ke.create,
          _y = Eo.propertyIsEnumerable,
          lc = nc.splice,
          wy = Si ? Si.isConcatSpreadable : n,
          Xa = Si ? Si.iterator : n,
          Es = Si ? Si.toStringTag : n,
          cc = (function () {
            try {
              var s = Cs(Ke, 'defineProperty')
              return s({}, '', {}), s
            } catch {}
          })(),
          DS = H.clearTimeout !== st.clearTimeout && H.clearTimeout,
          VS = ie && ie.now !== st.Date.now && ie.now,
          MS = H.setTimeout !== st.setTimeout && H.setTimeout,
          hc = Et.ceil,
          fc = Et.floor,
          nd = Ke.getOwnPropertySymbols,
          bS = oc ? oc.isBuffer : n,
          Ey = H.isFinite,
          FS = nc.join,
          US = py(Ke.keys, Ke),
          Tt = Et.max,
          Wt = Et.min,
          zS = ie.now,
          BS = H.parseInt,
          Ty = Et.random,
          $S = nc.reverse,
          rd = Cs(H, 'DataView'),
          Ja = Cs(H, 'Map'),
          id = Cs(H, 'Promise'),
          To = Cs(H, 'Set'),
          Za = Cs(H, 'WeakMap'),
          eu = Cs(Ke, 'create'),
          dc = Za && new Za(),
          So = {},
          jS = Rs(rd),
          WS = Rs(Ja),
          qS = Rs(id),
          HS = Rs(To),
          KS = Rs(Za),
          pc = Si ? Si.prototype : n,
          tu = pc ? pc.valueOf : n,
          Sy = pc ? pc.toString : n
        function w(s) {
          if (ot(s) && !ve(s) && !(s instanceof Ae)) {
            if (s instanceof jn) return s
            if ($e.call(s, '__wrapped__')) return Iv(s)
          }
          return new jn(s)
        }
        var Io = (function () {
          function s() {}
          return function (a) {
            if (!et(a)) return {}
            if (vy) return vy(a)
            s.prototype = a
            var c = new s()
            return (s.prototype = n), c
          }
        })()
        function gc() {}
        function jn(s, a) {
          ;(this.__wrapped__ = s),
            (this.__actions__ = []),
            (this.__chain__ = !!a),
            (this.__index__ = 0),
            (this.__values__ = n)
        }
        ;(w.templateSettings = {
          escape: Rl,
          evaluate: so,
          interpolate: La,
          variable: '',
          imports: { _: w },
        }),
          (w.prototype = gc.prototype),
          (w.prototype.constructor = w),
          (jn.prototype = Io(gc.prototype)),
          (jn.prototype.constructor = jn)
        function Ae(s) {
          ;(this.__wrapped__ = s),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = Se),
            (this.__views__ = [])
        }
        function GS() {
          var s = new Ae(this.__wrapped__)
          return (
            (s.__actions__ = gn(this.__actions__)),
            (s.__dir__ = this.__dir__),
            (s.__filtered__ = this.__filtered__),
            (s.__iteratees__ = gn(this.__iteratees__)),
            (s.__takeCount__ = this.__takeCount__),
            (s.__views__ = gn(this.__views__)),
            s
          )
        }
        function QS() {
          if (this.__filtered__) {
            var s = new Ae(this)
            ;(s.__dir__ = -1), (s.__filtered__ = !0)
          } else (s = this.clone()), (s.__dir__ *= -1)
          return s
        }
        function YS() {
          var s = this.__wrapped__.value(),
            a = this.__dir__,
            c = ve(s),
            p = a < 0,
            y = c ? s.length : 0,
            S = uA(0, y, this.__views__),
            R = S.start,
            D = S.end,
            F = D - R,
            K = p ? D : R - 1,
            G = this.__iteratees__,
            J = G.length,
            ne = 0,
            ae = Wt(F, this.__takeCount__)
          if (!c || (!p && y == F && ae == F)) return Ky(s, this.__actions__)
          var he = []
          e: for (; F-- && ne < ae; ) {
            K += a
            for (var Ee = -1, fe = s[K]; ++Ee < J; ) {
              var Ie = G[Ee],
                xe = Ie.iteratee,
                xn = Ie.type,
                on = xe(fe)
              if (xn == en) fe = on
              else if (!on) {
                if (xn == lt) continue e
                break e
              }
            }
            he[ne++] = fe
          }
          return he
        }
        ;(Ae.prototype = Io(gc.prototype)), (Ae.prototype.constructor = Ae)
        function Ts(s) {
          var a = -1,
            c = s == null ? 0 : s.length
          for (this.clear(); ++a < c; ) {
            var p = s[a]
            this.set(p[0], p[1])
          }
        }
        function XS() {
          ;(this.__data__ = eu ? eu(null) : {}), (this.size = 0)
        }
        function JS(s) {
          var a = this.has(s) && delete this.__data__[s]
          return (this.size -= a ? 1 : 0), a
        }
        function ZS(s) {
          var a = this.__data__
          if (eu) {
            var c = a[s]
            return c === f ? n : c
          }
          return $e.call(a, s) ? a[s] : n
        }
        function eI(s) {
          var a = this.__data__
          return eu ? a[s] !== n : $e.call(a, s)
        }
        function tI(s, a) {
          var c = this.__data__
          return (
            (this.size += this.has(s) ? 0 : 1),
            (c[s] = eu && a === n ? f : a),
            this
          )
        }
        ;(Ts.prototype.clear = XS),
          (Ts.prototype.delete = JS),
          (Ts.prototype.get = ZS),
          (Ts.prototype.has = eI),
          (Ts.prototype.set = tI)
        function Wr(s) {
          var a = -1,
            c = s == null ? 0 : s.length
          for (this.clear(); ++a < c; ) {
            var p = s[a]
            this.set(p[0], p[1])
          }
        }
        function nI() {
          ;(this.__data__ = []), (this.size = 0)
        }
        function rI(s) {
          var a = this.__data__,
            c = mc(a, s)
          if (c < 0) return !1
          var p = a.length - 1
          return c == p ? a.pop() : lc.call(a, c, 1), --this.size, !0
        }
        function iI(s) {
          var a = this.__data__,
            c = mc(a, s)
          return c < 0 ? n : a[c][1]
        }
        function sI(s) {
          return mc(this.__data__, s) > -1
        }
        function oI(s, a) {
          var c = this.__data__,
            p = mc(c, s)
          return p < 0 ? (++this.size, c.push([s, a])) : (c[p][1] = a), this
        }
        ;(Wr.prototype.clear = nI),
          (Wr.prototype.delete = rI),
          (Wr.prototype.get = iI),
          (Wr.prototype.has = sI),
          (Wr.prototype.set = oI)
        function qr(s) {
          var a = -1,
            c = s == null ? 0 : s.length
          for (this.clear(); ++a < c; ) {
            var p = s[a]
            this.set(p[0], p[1])
          }
        }
        function aI() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new Ts(),
              map: new (Ja || Wr)(),
              string: new Ts(),
            })
        }
        function uI(s) {
          var a = xc(this, s).delete(s)
          return (this.size -= a ? 1 : 0), a
        }
        function lI(s) {
          return xc(this, s).get(s)
        }
        function cI(s) {
          return xc(this, s).has(s)
        }
        function hI(s, a) {
          var c = xc(this, s),
            p = c.size
          return c.set(s, a), (this.size += c.size == p ? 0 : 1), this
        }
        ;(qr.prototype.clear = aI),
          (qr.prototype.delete = uI),
          (qr.prototype.get = lI),
          (qr.prototype.has = cI),
          (qr.prototype.set = hI)
        function Ss(s) {
          var a = -1,
            c = s == null ? 0 : s.length
          for (this.__data__ = new qr(); ++a < c; ) this.add(s[a])
        }
        function fI(s) {
          return this.__data__.set(s, f), this
        }
        function dI(s) {
          return this.__data__.has(s)
        }
        ;(Ss.prototype.add = Ss.prototype.push = fI), (Ss.prototype.has = dI)
        function ar(s) {
          var a = (this.__data__ = new Wr(s))
          this.size = a.size
        }
        function pI() {
          ;(this.__data__ = new Wr()), (this.size = 0)
        }
        function gI(s) {
          var a = this.__data__,
            c = a.delete(s)
          return (this.size = a.size), c
        }
        function mI(s) {
          return this.__data__.get(s)
        }
        function yI(s) {
          return this.__data__.has(s)
        }
        function vI(s, a) {
          var c = this.__data__
          if (c instanceof Wr) {
            var p = c.__data__
            if (!Ja || p.length < i - 1)
              return p.push([s, a]), (this.size = ++c.size), this
            c = this.__data__ = new qr(p)
          }
          return c.set(s, a), (this.size = c.size), this
        }
        ;(ar.prototype.clear = pI),
          (ar.prototype.delete = gI),
          (ar.prototype.get = mI),
          (ar.prototype.has = yI),
          (ar.prototype.set = vI)
        function Iy(s, a) {
          var c = ve(s),
            p = !c && xs(s),
            y = !c && !p && xi(s),
            S = !c && !p && !y && xo(s),
            R = c || p || y || S,
            D = R ? be(s.length, xS) : [],
            F = D.length
          for (var K in s)
            (a || $e.call(s, K)) &&
              !(
                R &&
                (K == 'length' ||
                  (y && (K == 'offset' || K == 'parent')) ||
                  (S &&
                    (K == 'buffer' ||
                      K == 'byteLength' ||
                      K == 'byteOffset')) ||
                  Qr(K, F))
              ) &&
              D.push(K)
          return D
        }
        function Ay(s) {
          var a = s.length
          return a ? s[gd(0, a - 1)] : n
        }
        function _I(s, a) {
          return Pc(gn(s), Is(a, 0, s.length))
        }
        function wI(s) {
          return Pc(gn(s))
        }
        function sd(s, a, c) {
          ;((c !== n && !ur(s[a], c)) || (c === n && !(a in s))) && Hr(s, a, c)
        }
        function nu(s, a, c) {
          var p = s[a]
          ;(!($e.call(s, a) && ur(p, c)) || (c === n && !(a in s))) &&
            Hr(s, a, c)
        }
        function mc(s, a) {
          for (var c = s.length; c--; ) if (ur(s[c][0], a)) return c
          return -1
        }
        function EI(s, a, c, p) {
          return (
            Ii(s, function (y, S, R) {
              a(p, y, c(y), R)
            }),
            p
          )
        }
        function Cy(s, a) {
          return s && Tr(a, xt(a), s)
        }
        function TI(s, a) {
          return s && Tr(a, yn(a), s)
        }
        function Hr(s, a, c) {
          a == '__proto__' && cc
            ? cc(s, a, {
                configurable: !0,
                enumerable: !0,
                value: c,
                writable: !0,
              })
            : (s[a] = c)
        }
        function od(s, a) {
          for (var c = -1, p = a.length, y = W(p), S = s == null; ++c < p; )
            y[c] = S ? n : zd(s, a[c])
          return y
        }
        function Is(s, a, c) {
          return (
            s === s &&
              (c !== n && (s = s <= c ? s : c),
              a !== n && (s = s >= a ? s : a)),
            s
          )
        }
        function Wn(s, a, c, p, y, S) {
          var R,
            D = a & E,
            F = a & _,
            K = a & L
          if ((c && (R = y ? c(s, p, y, S) : c(s)), R !== n)) return R
          if (!et(s)) return s
          var G = ve(s)
          if (G) {
            if (((R = cA(s)), !D)) return gn(s, R)
          } else {
            var J = qt(s),
              ne = J == hi || J == Zs
            if (xi(s)) return Yy(s, D)
            if (J == nr || J == Bt || (ne && !y)) {
              if (((R = F || ne ? {} : gv(s)), !D))
                return F ? ZI(s, TI(R, s)) : JI(s, Cy(R, s))
            } else {
              if (!Ve[J]) return y ? s : {}
              R = hA(s, J, D)
            }
          }
          S || (S = new ar())
          var ae = S.get(s)
          if (ae) return ae
          S.set(s, R),
            Wv(s)
              ? s.forEach(function (fe) {
                  R.add(Wn(fe, a, c, fe, s, S))
                })
              : $v(s) &&
                s.forEach(function (fe, Ie) {
                  R.set(Ie, Wn(fe, a, c, Ie, s, S))
                })
          var he = K ? (F ? Cd : Ad) : F ? yn : xt,
            Ee = G ? n : he(s)
          return (
            nn(Ee || s, function (fe, Ie) {
              Ee && ((Ie = fe), (fe = s[Ie])), nu(R, Ie, Wn(fe, a, c, Ie, s, S))
            }),
            R
          )
        }
        function SI(s) {
          var a = xt(s)
          return function (c) {
            return Ry(c, s, a)
          }
        }
        function Ry(s, a, c) {
          var p = c.length
          if (s == null) return !p
          for (s = Ke(s); p--; ) {
            var y = c[p],
              S = a[y],
              R = s[y]
            if ((R === n && !(y in s)) || !S(R)) return !1
          }
          return !0
        }
        function xy(s, a, c) {
          if (typeof s != 'function') throw new $n(u)
          return lu(function () {
            s.apply(n, c)
          }, a)
        }
        function ru(s, a, c, p) {
          var y = -1,
            S = vs,
            R = !0,
            D = s.length,
            F = [],
            K = a.length
          if (!D) return F
          c && (a = He(a, Ue(c))),
            p
              ? ((S = wi), (R = !1))
              : a.length >= i && ((S = Bn), (R = !1), (a = new Ss(a)))
          e: for (; ++y < D; ) {
            var G = s[y],
              J = c == null ? G : c(G)
            if (((G = p || G !== 0 ? G : 0), R && J === J)) {
              for (var ne = K; ne--; ) if (a[ne] === J) continue e
              F.push(G)
            } else S(a, J, p) || F.push(G)
          }
          return F
        }
        var Ii = tv(Er),
          Py = tv(ud, !0)
        function II(s, a) {
          var c = !0
          return (
            Ii(s, function (p, y, S) {
              return (c = !!a(p, y, S)), c
            }),
            c
          )
        }
        function yc(s, a, c) {
          for (var p = -1, y = s.length; ++p < y; ) {
            var S = s[p],
              R = a(S)
            if (R != null && (D === n ? R === R && !Rn(R) : c(R, D)))
              var D = R,
                F = S
          }
          return F
        }
        function AI(s, a, c, p) {
          var y = s.length
          for (
            c = we(c),
              c < 0 && (c = -c > y ? 0 : y + c),
              p = p === n || p > y ? y : we(p),
              p < 0 && (p += y),
              p = c > p ? 0 : Hv(p);
            c < p;

          )
            s[c++] = a
          return s
        }
        function ky(s, a) {
          var c = []
          return (
            Ii(s, function (p, y, S) {
              a(p, y, S) && c.push(p)
            }),
            c
          )
        }
        function Vt(s, a, c, p, y) {
          var S = -1,
            R = s.length
          for (c || (c = dA), y || (y = []); ++S < R; ) {
            var D = s[S]
            a > 0 && c(D)
              ? a > 1
                ? Vt(D, a - 1, c, p, y)
                : ir(y, D)
              : p || (y[y.length] = D)
          }
          return y
        }
        var ad = nv(),
          Ny = nv(!0)
        function Er(s, a) {
          return s && ad(s, a, xt)
        }
        function ud(s, a) {
          return s && Ny(s, a, xt)
        }
        function vc(s, a) {
          return zn(a, function (c) {
            return Yr(s[c])
          })
        }
        function As(s, a) {
          a = Ci(a, s)
          for (var c = 0, p = a.length; s != null && c < p; ) s = s[Sr(a[c++])]
          return c && c == p ? s : n
        }
        function Ly(s, a, c) {
          var p = a(s)
          return ve(s) ? p : ir(p, c(s))
        }
        function rn(s) {
          return s == null
            ? s === n
              ? Ca
              : Tl
            : Es && Es in Ke(s)
            ? aA(s)
            : wA(s)
        }
        function ld(s, a) {
          return s > a
        }
        function CI(s, a) {
          return s != null && $e.call(s, a)
        }
        function RI(s, a) {
          return s != null && a in Ke(s)
        }
        function xI(s, a, c) {
          return s >= Wt(a, c) && s < Tt(a, c)
        }
        function cd(s, a, c) {
          for (
            var p = c ? wi : vs,
              y = s[0].length,
              S = s.length,
              R = S,
              D = W(S),
              F = 1 / 0,
              K = [];
            R--;

          ) {
            var G = s[R]
            R && a && (G = He(G, Ue(a))),
              (F = Wt(G.length, F)),
              (D[R] =
                !c && (a || (y >= 120 && G.length >= 120)) ? new Ss(R && G) : n)
          }
          G = s[0]
          var J = -1,
            ne = D[0]
          e: for (; ++J < y && K.length < F; ) {
            var ae = G[J],
              he = a ? a(ae) : ae
            if (
              ((ae = c || ae !== 0 ? ae : 0), !(ne ? Bn(ne, he) : p(K, he, c)))
            ) {
              for (R = S; --R; ) {
                var Ee = D[R]
                if (!(Ee ? Bn(Ee, he) : p(s[R], he, c))) continue e
              }
              ne && ne.push(he), K.push(ae)
            }
          }
          return K
        }
        function PI(s, a, c, p) {
          return (
            Er(s, function (y, S, R) {
              a(p, c(y), S, R)
            }),
            p
          )
        }
        function iu(s, a, c) {
          ;(a = Ci(a, s)), (s = _v(s, a))
          var p = s == null ? s : s[Sr(Hn(a))]
          return p == null ? n : $t(p, s, c)
        }
        function Oy(s) {
          return ot(s) && rn(s) == Bt
        }
        function kI(s) {
          return ot(s) && rn(s) == ct
        }
        function NI(s) {
          return ot(s) && rn(s) == ss
        }
        function su(s, a, c, p, y) {
          return s === a
            ? !0
            : s == null || a == null || (!ot(s) && !ot(a))
            ? s !== s && a !== a
            : LI(s, a, c, p, su, y)
        }
        function LI(s, a, c, p, y, S) {
          var R = ve(s),
            D = ve(a),
            F = R ? fn : qt(s),
            K = D ? fn : qt(a)
          ;(F = F == Bt ? nr : F), (K = K == Bt ? nr : K)
          var G = F == nr,
            J = K == nr,
            ne = F == K
          if (ne && xi(s)) {
            if (!xi(a)) return !1
            ;(R = !0), (G = !1)
          }
          if (ne && !G)
            return (
              S || (S = new ar()),
              R || xo(s) ? fv(s, a, c, p, y, S) : sA(s, a, F, c, p, y, S)
            )
          if (!(c & b)) {
            var ae = G && $e.call(s, '__wrapped__'),
              he = J && $e.call(a, '__wrapped__')
            if (ae || he) {
              var Ee = ae ? s.value() : s,
                fe = he ? a.value() : a
              return S || (S = new ar()), y(Ee, fe, c, p, S)
            }
          }
          return ne ? (S || (S = new ar()), oA(s, a, c, p, y, S)) : !1
        }
        function OI(s) {
          return ot(s) && qt(s) == tn
        }
        function hd(s, a, c, p) {
          var y = c.length,
            S = y,
            R = !p
          if (s == null) return !S
          for (s = Ke(s); y--; ) {
            var D = c[y]
            if (R && D[2] ? D[1] !== s[D[0]] : !(D[0] in s)) return !1
          }
          for (; ++y < S; ) {
            D = c[y]
            var F = D[0],
              K = s[F],
              G = D[1]
            if (R && D[2]) {
              if (K === n && !(F in s)) return !1
            } else {
              var J = new ar()
              if (p) var ne = p(K, G, F, s, a, J)
              if (!(ne === n ? su(G, K, b | B, p, J) : ne)) return !1
            }
          }
          return !0
        }
        function Dy(s) {
          if (!et(s) || gA(s)) return !1
          var a = Yr(s) ? OS : Nl
          return a.test(Rs(s))
        }
        function DI(s) {
          return ot(s) && rn(s) == Mr
        }
        function VI(s) {
          return ot(s) && qt(s) == dn
        }
        function MI(s) {
          return ot(s) && Vc(s.length) && !!Me[rn(s)]
        }
        function Vy(s) {
          return typeof s == 'function'
            ? s
            : s == null
            ? vn
            : typeof s == 'object'
            ? ve(s)
              ? Fy(s[0], s[1])
              : by(s)
            : r0(s)
        }
        function fd(s) {
          if (!uu(s)) return US(s)
          var a = []
          for (var c in Ke(s)) $e.call(s, c) && c != 'constructor' && a.push(c)
          return a
        }
        function bI(s) {
          if (!et(s)) return _A(s)
          var a = uu(s),
            c = []
          for (var p in s)
            (p == 'constructor' && (a || !$e.call(s, p))) || c.push(p)
          return c
        }
        function dd(s, a) {
          return s < a
        }
        function My(s, a) {
          var c = -1,
            p = mn(s) ? W(s.length) : []
          return (
            Ii(s, function (y, S, R) {
              p[++c] = a(y, S, R)
            }),
            p
          )
        }
        function by(s) {
          var a = xd(s)
          return a.length == 1 && a[0][2]
            ? yv(a[0][0], a[0][1])
            : function (c) {
                return c === s || hd(c, s, a)
              }
        }
        function Fy(s, a) {
          return kd(s) && mv(a)
            ? yv(Sr(s), a)
            : function (c) {
                var p = zd(c, s)
                return p === n && p === a ? Bd(c, s) : su(a, p, b | B)
              }
        }
        function _c(s, a, c, p, y) {
          s !== a &&
            ad(
              a,
              function (S, R) {
                if ((y || (y = new ar()), et(S))) FI(s, a, R, c, _c, p, y)
                else {
                  var D = p ? p(Ld(s, R), S, R + '', s, a, y) : n
                  D === n && (D = S), sd(s, R, D)
                }
              },
              yn
            )
        }
        function FI(s, a, c, p, y, S, R) {
          var D = Ld(s, c),
            F = Ld(a, c),
            K = R.get(F)
          if (K) {
            sd(s, c, K)
            return
          }
          var G = S ? S(D, F, c + '', s, a, R) : n,
            J = G === n
          if (J) {
            var ne = ve(F),
              ae = !ne && xi(F),
              he = !ne && !ae && xo(F)
            ;(G = F),
              ne || ae || he
                ? ve(D)
                  ? (G = D)
                  : ht(D)
                  ? (G = gn(D))
                  : ae
                  ? ((J = !1), (G = Yy(F, !0)))
                  : he
                  ? ((J = !1), (G = Xy(F, !0)))
                  : (G = [])
                : cu(F) || xs(F)
                ? ((G = D),
                  xs(D) ? (G = Kv(D)) : (!et(D) || Yr(D)) && (G = gv(F)))
                : (J = !1)
          }
          J && (R.set(F, G), y(G, F, p, S, R), R.delete(F)), sd(s, c, G)
        }
        function Uy(s, a) {
          var c = s.length
          if (c) return (a += a < 0 ? c : 0), Qr(a, c) ? s[a] : n
        }
        function zy(s, a, c) {
          a.length
            ? (a = He(a, function (S) {
                return ve(S)
                  ? function (R) {
                      return As(R, S.length === 1 ? S[0] : S)
                    }
                  : S
              }))
            : (a = [vn])
          var p = -1
          a = He(a, Ue(ce()))
          var y = My(s, function (S, R, D) {
            var F = He(a, function (K) {
              return K(S)
            })
            return { criteria: F, index: ++p, value: S }
          })
          return q(y, function (S, R) {
            return XI(S, R, c)
          })
        }
        function UI(s, a) {
          return By(s, a, function (c, p) {
            return Bd(s, p)
          })
        }
        function By(s, a, c) {
          for (var p = -1, y = a.length, S = {}; ++p < y; ) {
            var R = a[p],
              D = As(s, R)
            c(D, R) && ou(S, Ci(R, s), D)
          }
          return S
        }
        function zI(s) {
          return function (a) {
            return As(a, s)
          }
        }
        function pd(s, a, c, p) {
          var y = p ? Ei : jr,
            S = -1,
            R = a.length,
            D = s
          for (s === a && (a = gn(a)), c && (D = He(s, Ue(c))); ++S < R; )
            for (
              var F = 0, K = a[S], G = c ? c(K) : K;
              (F = y(D, G, F, p)) > -1;

            )
              D !== s && lc.call(D, F, 1), lc.call(s, F, 1)
          return s
        }
        function $y(s, a) {
          for (var c = s ? a.length : 0, p = c - 1; c--; ) {
            var y = a[c]
            if (c == p || y !== S) {
              var S = y
              Qr(y) ? lc.call(s, y, 1) : vd(s, y)
            }
          }
          return s
        }
        function gd(s, a) {
          return s + fc(Ty() * (a - s + 1))
        }
        function BI(s, a, c, p) {
          for (var y = -1, S = Tt(hc((a - s) / (c || 1)), 0), R = W(S); S--; )
            (R[p ? S : ++y] = s), (s += c)
          return R
        }
        function md(s, a) {
          var c = ''
          if (!s || a < 1 || a > Z) return c
          do a % 2 && (c += s), (a = fc(a / 2)), a && (s += s)
          while (a)
          return c
        }
        function Te(s, a) {
          return Od(vv(s, a, vn), s + '')
        }
        function $I(s) {
          return Ay(Po(s))
        }
        function jI(s, a) {
          var c = Po(s)
          return Pc(c, Is(a, 0, c.length))
        }
        function ou(s, a, c, p) {
          if (!et(s)) return s
          a = Ci(a, s)
          for (
            var y = -1, S = a.length, R = S - 1, D = s;
            D != null && ++y < S;

          ) {
            var F = Sr(a[y]),
              K = c
            if (F === '__proto__' || F === 'constructor' || F === 'prototype')
              return s
            if (y != R) {
              var G = D[F]
              ;(K = p ? p(G, F, D) : n),
                K === n && (K = et(G) ? G : Qr(a[y + 1]) ? [] : {})
            }
            nu(D, F, K), (D = D[F])
          }
          return s
        }
        var jy = dc
            ? function (s, a) {
                return dc.set(s, a), s
              }
            : vn,
          WI = cc
            ? function (s, a) {
                return cc(s, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: jd(a),
                  writable: !0,
                })
              }
            : vn
        function qI(s) {
          return Pc(Po(s))
        }
        function qn(s, a, c) {
          var p = -1,
            y = s.length
          a < 0 && (a = -a > y ? 0 : y + a),
            (c = c > y ? y : c),
            c < 0 && (c += y),
            (y = a > c ? 0 : (c - a) >>> 0),
            (a >>>= 0)
          for (var S = W(y); ++p < y; ) S[p] = s[p + a]
          return S
        }
        function HI(s, a) {
          var c
          return (
            Ii(s, function (p, y, S) {
              return (c = a(p, y, S)), !c
            }),
            !!c
          )
        }
        function wc(s, a, c) {
          var p = 0,
            y = s == null ? p : s.length
          if (typeof a == 'number' && a === a && y <= Ze) {
            for (; p < y; ) {
              var S = (p + y) >>> 1,
                R = s[S]
              R !== null && !Rn(R) && (c ? R <= a : R < a)
                ? (p = S + 1)
                : (y = S)
            }
            return y
          }
          return yd(s, a, vn, c)
        }
        function yd(s, a, c, p) {
          var y = 0,
            S = s == null ? 0 : s.length
          if (S === 0) return 0
          a = c(a)
          for (
            var R = a !== a, D = a === null, F = Rn(a), K = a === n;
            y < S;

          ) {
            var G = fc((y + S) / 2),
              J = c(s[G]),
              ne = J !== n,
              ae = J === null,
              he = J === J,
              Ee = Rn(J)
            if (R) var fe = p || he
            else
              K
                ? (fe = he && (p || ne))
                : D
                ? (fe = he && ne && (p || !ae))
                : F
                ? (fe = he && ne && !ae && (p || !Ee))
                : ae || Ee
                ? (fe = !1)
                : (fe = p ? J <= a : J < a)
            fe ? (y = G + 1) : (S = G)
          }
          return Wt(S, Be)
        }
        function Wy(s, a) {
          for (var c = -1, p = s.length, y = 0, S = []; ++c < p; ) {
            var R = s[c],
              D = a ? a(R) : R
            if (!c || !ur(D, F)) {
              var F = D
              S[y++] = R === 0 ? 0 : R
            }
          }
          return S
        }
        function qy(s) {
          return typeof s == 'number' ? s : Rn(s) ? le : +s
        }
        function Cn(s) {
          if (typeof s == 'string') return s
          if (ve(s)) return He(s, Cn) + ''
          if (Rn(s)) return Sy ? Sy.call(s) : ''
          var a = s + ''
          return a == '0' && 1 / s == -mt ? '-0' : a
        }
        function Ai(s, a, c) {
          var p = -1,
            y = vs,
            S = s.length,
            R = !0,
            D = [],
            F = D
          if (c) (R = !1), (y = wi)
          else if (S >= i) {
            var K = a ? null : rA(s)
            if (K) return tc(K)
            ;(R = !1), (y = Bn), (F = new Ss())
          } else F = a ? [] : D
          e: for (; ++p < S; ) {
            var G = s[p],
              J = a ? a(G) : G
            if (((G = c || G !== 0 ? G : 0), R && J === J)) {
              for (var ne = F.length; ne--; ) if (F[ne] === J) continue e
              a && F.push(J), D.push(G)
            } else y(F, J, c) || (F !== D && F.push(J), D.push(G))
          }
          return D
        }
        function vd(s, a) {
          return (
            (a = Ci(a, s)), (s = _v(s, a)), s == null || delete s[Sr(Hn(a))]
          )
        }
        function Hy(s, a, c, p) {
          return ou(s, a, c(As(s, a)), p)
        }
        function Ec(s, a, c, p) {
          for (
            var y = s.length, S = p ? y : -1;
            (p ? S-- : ++S < y) && a(s[S], S, s);

          );
          return c
            ? qn(s, p ? 0 : S, p ? S + 1 : y)
            : qn(s, p ? S + 1 : 0, p ? y : S)
        }
        function Ky(s, a) {
          var c = s
          return (
            c instanceof Ae && (c = c.value()),
            sr(
              a,
              function (p, y) {
                return y.func.apply(y.thisArg, ir([p], y.args))
              },
              c
            )
          )
        }
        function _d(s, a, c) {
          var p = s.length
          if (p < 2) return p ? Ai(s[0]) : []
          for (var y = -1, S = W(p); ++y < p; )
            for (var R = s[y], D = -1; ++D < p; )
              D != y && (S[y] = ru(S[y] || R, s[D], a, c))
          return Ai(Vt(S, 1), a, c)
        }
        function Gy(s, a, c) {
          for (var p = -1, y = s.length, S = a.length, R = {}; ++p < y; ) {
            var D = p < S ? a[p] : n
            c(R, s[p], D)
          }
          return R
        }
        function wd(s) {
          return ht(s) ? s : []
        }
        function Ed(s) {
          return typeof s == 'function' ? s : vn
        }
        function Ci(s, a) {
          return ve(s) ? s : kd(s, a) ? [s] : Sv(ze(s))
        }
        var KI = Te
        function Ri(s, a, c) {
          var p = s.length
          return (c = c === n ? p : c), !a && c >= p ? s : qn(s, a, c)
        }
        var Qy =
          DS ||
          function (s) {
            return st.clearTimeout(s)
          }
        function Yy(s, a) {
          if (a) return s.slice()
          var c = s.length,
            p = yy ? yy(c) : new s.constructor(c)
          return s.copy(p), p
        }
        function Td(s) {
          var a = new s.constructor(s.byteLength)
          return new ac(a).set(new ac(s)), a
        }
        function GI(s, a) {
          var c = a ? Td(s.buffer) : s.buffer
          return new s.constructor(c, s.byteOffset, s.byteLength)
        }
        function QI(s) {
          var a = new s.constructor(s.source, cs.exec(s))
          return (a.lastIndex = s.lastIndex), a
        }
        function YI(s) {
          return tu ? Ke(tu.call(s)) : {}
        }
        function Xy(s, a) {
          var c = a ? Td(s.buffer) : s.buffer
          return new s.constructor(c, s.byteOffset, s.length)
        }
        function Jy(s, a) {
          if (s !== a) {
            var c = s !== n,
              p = s === null,
              y = s === s,
              S = Rn(s),
              R = a !== n,
              D = a === null,
              F = a === a,
              K = Rn(a)
            if (
              (!D && !K && !S && s > a) ||
              (S && R && F && !D && !K) ||
              (p && R && F) ||
              (!c && F) ||
              !y
            )
              return 1
            if (
              (!p && !S && !K && s < a) ||
              (K && c && y && !p && !S) ||
              (D && c && y) ||
              (!R && y) ||
              !F
            )
              return -1
          }
          return 0
        }
        function XI(s, a, c) {
          for (
            var p = -1,
              y = s.criteria,
              S = a.criteria,
              R = y.length,
              D = c.length;
            ++p < R;

          ) {
            var F = Jy(y[p], S[p])
            if (F) {
              if (p >= D) return F
              var K = c[p]
              return F * (K == 'desc' ? -1 : 1)
            }
          }
          return s.index - a.index
        }
        function Zy(s, a, c, p) {
          for (
            var y = -1,
              S = s.length,
              R = c.length,
              D = -1,
              F = a.length,
              K = Tt(S - R, 0),
              G = W(F + K),
              J = !p;
            ++D < F;

          )
            G[D] = a[D]
          for (; ++y < R; ) (J || y < S) && (G[c[y]] = s[y])
          for (; K--; ) G[D++] = s[y++]
          return G
        }
        function ev(s, a, c, p) {
          for (
            var y = -1,
              S = s.length,
              R = -1,
              D = c.length,
              F = -1,
              K = a.length,
              G = Tt(S - D, 0),
              J = W(G + K),
              ne = !p;
            ++y < G;

          )
            J[y] = s[y]
          for (var ae = y; ++F < K; ) J[ae + F] = a[F]
          for (; ++R < D; ) (ne || y < S) && (J[ae + c[R]] = s[y++])
          return J
        }
        function gn(s, a) {
          var c = -1,
            p = s.length
          for (a || (a = W(p)); ++c < p; ) a[c] = s[c]
          return a
        }
        function Tr(s, a, c, p) {
          var y = !c
          c || (c = {})
          for (var S = -1, R = a.length; ++S < R; ) {
            var D = a[S],
              F = p ? p(c[D], s[D], D, c, s) : n
            F === n && (F = s[D]), y ? Hr(c, D, F) : nu(c, D, F)
          }
          return c
        }
        function JI(s, a) {
          return Tr(s, Pd(s), a)
        }
        function ZI(s, a) {
          return Tr(s, dv(s), a)
        }
        function Tc(s, a) {
          return function (c, p) {
            var y = ve(c) ? ys : EI,
              S = a ? a() : {}
            return y(c, s, ce(p, 2), S)
          }
        }
        function Ao(s) {
          return Te(function (a, c) {
            var p = -1,
              y = c.length,
              S = y > 1 ? c[y - 1] : n,
              R = y > 2 ? c[2] : n
            for (
              S = s.length > 3 && typeof S == 'function' ? (y--, S) : n,
                R && sn(c[0], c[1], R) && ((S = y < 3 ? n : S), (y = 1)),
                a = Ke(a);
              ++p < y;

            ) {
              var D = c[p]
              D && s(a, D, p, S)
            }
            return a
          })
        }
        function tv(s, a) {
          return function (c, p) {
            if (c == null) return c
            if (!mn(c)) return s(c, p)
            for (
              var y = c.length, S = a ? y : -1, R = Ke(c);
              (a ? S-- : ++S < y) && p(R[S], S, R) !== !1;

            );
            return c
          }
        }
        function nv(s) {
          return function (a, c, p) {
            for (var y = -1, S = Ke(a), R = p(a), D = R.length; D--; ) {
              var F = R[s ? D : ++y]
              if (c(S[F], F, S) === !1) break
            }
            return a
          }
        }
        function eA(s, a, c) {
          var p = a & j,
            y = au(s)
          function S() {
            var R = this && this !== st && this instanceof S ? y : s
            return R.apply(p ? c : this, arguments)
          }
          return S
        }
        function rv(s) {
          return function (a) {
            a = ze(a)
            var c = vo(a) ? or(a) : n,
              p = c ? c[0] : a.charAt(0),
              y = c ? Ri(c, 1).join('') : a.slice(1)
            return p[s]() + y
          }
        }
        function Co(s) {
          return function (a) {
            return sr(t0(e0(a).replace(Gf, '')), s, '')
          }
        }
        function au(s) {
          return function () {
            var a = arguments
            switch (a.length) {
              case 0:
                return new s()
              case 1:
                return new s(a[0])
              case 2:
                return new s(a[0], a[1])
              case 3:
                return new s(a[0], a[1], a[2])
              case 4:
                return new s(a[0], a[1], a[2], a[3])
              case 5:
                return new s(a[0], a[1], a[2], a[3], a[4])
              case 6:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5])
              case 7:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5], a[6])
            }
            var c = Io(s.prototype),
              p = s.apply(c, a)
            return et(p) ? p : c
          }
        }
        function tA(s, a, c) {
          var p = au(s)
          function y() {
            for (var S = arguments.length, R = W(S), D = S, F = Ro(y); D--; )
              R[D] = arguments[D]
            var K = S < 3 && R[0] !== F && R[S - 1] !== F ? [] : Ti(R, F)
            if (((S -= K.length), S < c))
              return uv(s, a, Sc, y.placeholder, n, R, K, n, n, c - S)
            var G = this && this !== st && this instanceof y ? p : s
            return $t(G, this, R)
          }
          return y
        }
        function iv(s) {
          return function (a, c, p) {
            var y = Ke(a)
            if (!mn(a)) {
              var S = ce(c, 3)
              ;(a = xt(a)),
                (c = function (D) {
                  return S(y[D], D, y)
                })
            }
            var R = s(a, c, p)
            return R > -1 ? y[S ? a[R] : R] : n
          }
        }
        function sv(s) {
          return Gr(function (a) {
            var c = a.length,
              p = c,
              y = jn.prototype.thru
            for (s && a.reverse(); p--; ) {
              var S = a[p]
              if (typeof S != 'function') throw new $n(u)
              if (y && !R && Rc(S) == 'wrapper') var R = new jn([], !0)
            }
            for (p = R ? p : c; ++p < c; ) {
              S = a[p]
              var D = Rc(S),
                F = D == 'wrapper' ? Rd(S) : n
              F &&
              Nd(F[0]) &&
              F[1] == (A | O | Q | I) &&
              !F[4].length &&
              F[9] == 1
                ? (R = R[Rc(F[0])].apply(R, F[3]))
                : (R = S.length == 1 && Nd(S) ? R[D]() : R.thru(S))
            }
            return function () {
              var K = arguments,
                G = K[0]
              if (R && K.length == 1 && ve(G)) return R.plant(G).value()
              for (var J = 0, ne = c ? a[J].apply(this, K) : G; ++J < c; )
                ne = a[J].call(this, ne)
              return ne
            }
          })
        }
        function Sc(s, a, c, p, y, S, R, D, F, K) {
          var G = a & A,
            J = a & j,
            ne = a & P,
            ae = a & (O | $),
            he = a & x,
            Ee = ne ? n : au(s)
          function fe() {
            for (var Ie = arguments.length, xe = W(Ie), xn = Ie; xn--; )
              xe[xn] = arguments[xn]
            if (ae)
              var on = Ro(fe),
                Pn = Ya(xe, on)
            if (
              (p && (xe = Zy(xe, p, y, ae)),
              S && (xe = ev(xe, S, R, ae)),
              (Ie -= Pn),
              ae && Ie < K)
            ) {
              var ft = Ti(xe, on)
              return uv(s, a, Sc, fe.placeholder, c, xe, ft, D, F, K - Ie)
            }
            var lr = J ? c : this,
              Jr = ne ? lr[s] : s
            return (
              (Ie = xe.length),
              D ? (xe = EA(xe, D)) : he && Ie > 1 && xe.reverse(),
              G && F < Ie && (xe.length = F),
              this && this !== st && this instanceof fe && (Jr = Ee || au(Jr)),
              Jr.apply(lr, xe)
            )
          }
          return fe
        }
        function ov(s, a) {
          return function (c, p) {
            return PI(c, s, a(p), {})
          }
        }
        function Ic(s, a) {
          return function (c, p) {
            var y
            if (c === n && p === n) return a
            if ((c !== n && (y = c), p !== n)) {
              if (y === n) return p
              typeof c == 'string' || typeof p == 'string'
                ? ((c = Cn(c)), (p = Cn(p)))
                : ((c = qy(c)), (p = qy(p))),
                (y = s(c, p))
            }
            return y
          }
        }
        function Sd(s) {
          return Gr(function (a) {
            return (
              (a = He(a, Ue(ce()))),
              Te(function (c) {
                var p = this
                return s(a, function (y) {
                  return $t(y, p, c)
                })
              })
            )
          })
        }
        function Ac(s, a) {
          a = a === n ? ' ' : Cn(a)
          var c = a.length
          if (c < 2) return c ? md(a, s) : a
          var p = md(a, hc(s / _o(a)))
          return vo(a) ? Ri(or(p), 0, s).join('') : p.slice(0, s)
        }
        function nA(s, a, c, p) {
          var y = a & j,
            S = au(s)
          function R() {
            for (
              var D = -1,
                F = arguments.length,
                K = -1,
                G = p.length,
                J = W(G + F),
                ne = this && this !== st && this instanceof R ? S : s;
              ++K < G;

            )
              J[K] = p[K]
            for (; F--; ) J[K++] = arguments[++D]
            return $t(ne, y ? c : this, J)
          }
          return R
        }
        function av(s) {
          return function (a, c, p) {
            return (
              p && typeof p != 'number' && sn(a, c, p) && (c = p = n),
              (a = Xr(a)),
              c === n ? ((c = a), (a = 0)) : (c = Xr(c)),
              (p = p === n ? (a < c ? 1 : -1) : Xr(p)),
              BI(a, c, p, s)
            )
          }
        }
        function Cc(s) {
          return function (a, c) {
            return (
              (typeof a == 'string' && typeof c == 'string') ||
                ((a = Kn(a)), (c = Kn(c))),
              s(a, c)
            )
          }
        }
        function uv(s, a, c, p, y, S, R, D, F, K) {
          var G = a & O,
            J = G ? R : n,
            ne = G ? n : R,
            ae = G ? S : n,
            he = G ? n : S
          ;(a |= G ? Q : X), (a &= ~(G ? X : Q)), a & C || (a &= ~(j | P))
          var Ee = [s, a, y, ae, J, he, ne, D, F, K],
            fe = c.apply(n, Ee)
          return Nd(s) && wv(fe, Ee), (fe.placeholder = p), Ev(fe, s, a)
        }
        function Id(s) {
          var a = Et[s]
          return function (c, p) {
            if (
              ((c = Kn(c)), (p = p == null ? 0 : Wt(we(p), 292)), p && Ey(c))
            ) {
              var y = (ze(c) + 'e').split('e'),
                S = a(y[0] + 'e' + (+y[1] + p))
              return (y = (ze(S) + 'e').split('e')), +(y[0] + 'e' + (+y[1] - p))
            }
            return a(c)
          }
        }
        var rA =
          To && 1 / tc(new To([, -0]))[1] == mt
            ? function (s) {
                return new To(s)
              }
            : Hd
        function lv(s) {
          return function (a) {
            var c = qt(a)
            return c == tn ? ed(a) : c == dn ? wS(a) : wt(a, s(a))
          }
        }
        function Kr(s, a, c, p, y, S, R, D) {
          var F = a & P
          if (!F && typeof s != 'function') throw new $n(u)
          var K = p ? p.length : 0
          if (
            (K || ((a &= ~(Q | X)), (p = y = n)),
            (R = R === n ? R : Tt(we(R), 0)),
            (D = D === n ? D : we(D)),
            (K -= y ? y.length : 0),
            a & X)
          ) {
            var G = p,
              J = y
            p = y = n
          }
          var ne = F ? n : Rd(s),
            ae = [s, a, c, p, y, G, J, S, R, D]
          if (
            (ne && vA(ae, ne),
            (s = ae[0]),
            (a = ae[1]),
            (c = ae[2]),
            (p = ae[3]),
            (y = ae[4]),
            (D = ae[9] = ae[9] === n ? (F ? 0 : s.length) : Tt(ae[9] - K, 0)),
            !D && a & (O | $) && (a &= ~(O | $)),
            !a || a == j)
          )
            var he = eA(s, a, c)
          else
            a == O || a == $
              ? (he = tA(s, a, D))
              : (a == Q || a == (j | Q)) && !y.length
              ? (he = nA(s, a, c, p))
              : (he = Sc.apply(n, ae))
          var Ee = ne ? jy : wv
          return Ev(Ee(he, ae), s, a)
        }
        function cv(s, a, c, p) {
          return s === n || (ur(s, Eo[c]) && !$e.call(p, c)) ? a : s
        }
        function hv(s, a, c, p, y, S) {
          return (
            et(s) && et(a) && (S.set(a, s), _c(s, a, n, hv, S), S.delete(a)), s
          )
        }
        function iA(s) {
          return cu(s) ? n : s
        }
        function fv(s, a, c, p, y, S) {
          var R = c & b,
            D = s.length,
            F = a.length
          if (D != F && !(R && F > D)) return !1
          var K = S.get(s),
            G = S.get(a)
          if (K && G) return K == a && G == s
          var J = -1,
            ne = !0,
            ae = c & B ? new Ss() : n
          for (S.set(s, a), S.set(a, s); ++J < D; ) {
            var he = s[J],
              Ee = a[J]
            if (p) var fe = R ? p(Ee, he, J, a, s, S) : p(he, Ee, J, s, a, S)
            if (fe !== n) {
              if (fe) continue
              ne = !1
              break
            }
            if (ae) {
              if (
                !mo(a, function (Ie, xe) {
                  if (!Bn(ae, xe) && (he === Ie || y(he, Ie, c, p, S)))
                    return ae.push(xe)
                })
              ) {
                ne = !1
                break
              }
            } else if (!(he === Ee || y(he, Ee, c, p, S))) {
              ne = !1
              break
            }
          }
          return S.delete(s), S.delete(a), ne
        }
        function sA(s, a, c, p, y, S, R) {
          switch (c) {
            case rr:
              if (s.byteLength != a.byteLength || s.byteOffset != a.byteOffset)
                return !1
              ;(s = s.buffer), (a = a.buffer)
            case ct:
              return !(s.byteLength != a.byteLength || !S(new ac(s), new ac(a)))
            case is:
            case ss:
            case Vr:
              return ur(+s, +a)
            case Dr:
              return s.name == a.name && s.message == a.message
            case Mr:
            case os:
              return s == a + ''
            case tn:
              var D = ed
            case dn:
              var F = p & b
              if ((D || (D = tc), s.size != a.size && !F)) return !1
              var K = R.get(s)
              if (K) return K == a
              ;(p |= B), R.set(s, a)
              var G = fv(D(s), D(a), p, y, S, R)
              return R.delete(s), G
            case fi:
              if (tu) return tu.call(s) == tu.call(a)
          }
          return !1
        }
        function oA(s, a, c, p, y, S) {
          var R = c & b,
            D = Ad(s),
            F = D.length,
            K = Ad(a),
            G = K.length
          if (F != G && !R) return !1
          for (var J = F; J--; ) {
            var ne = D[J]
            if (!(R ? ne in a : $e.call(a, ne))) return !1
          }
          var ae = S.get(s),
            he = S.get(a)
          if (ae && he) return ae == a && he == s
          var Ee = !0
          S.set(s, a), S.set(a, s)
          for (var fe = R; ++J < F; ) {
            ne = D[J]
            var Ie = s[ne],
              xe = a[ne]
            if (p) var xn = R ? p(xe, Ie, ne, a, s, S) : p(Ie, xe, ne, s, a, S)
            if (!(xn === n ? Ie === xe || y(Ie, xe, c, p, S) : xn)) {
              Ee = !1
              break
            }
            fe || (fe = ne == 'constructor')
          }
          if (Ee && !fe) {
            var on = s.constructor,
              Pn = a.constructor
            on != Pn &&
              'constructor' in s &&
              'constructor' in a &&
              !(
                typeof on == 'function' &&
                on instanceof on &&
                typeof Pn == 'function' &&
                Pn instanceof Pn
              ) &&
              (Ee = !1)
          }
          return S.delete(s), S.delete(a), Ee
        }
        function Gr(s) {
          return Od(vv(s, n, Rv), s + '')
        }
        function Ad(s) {
          return Ly(s, xt, Pd)
        }
        function Cd(s) {
          return Ly(s, yn, dv)
        }
        var Rd = dc
          ? function (s) {
              return dc.get(s)
            }
          : Hd
        function Rc(s) {
          for (
            var a = s.name + '', c = So[a], p = $e.call(So, a) ? c.length : 0;
            p--;

          ) {
            var y = c[p],
              S = y.func
            if (S == null || S == s) return y.name
          }
          return a
        }
        function Ro(s) {
          var a = $e.call(w, 'placeholder') ? w : s
          return a.placeholder
        }
        function ce() {
          var s = w.iteratee || Wd
          return (
            (s = s === Wd ? Vy : s),
            arguments.length ? s(arguments[0], arguments[1]) : s
          )
        }
        function xc(s, a) {
          var c = s.__data__
          return pA(a) ? c[typeof a == 'string' ? 'string' : 'hash'] : c.map
        }
        function xd(s) {
          for (var a = xt(s), c = a.length; c--; ) {
            var p = a[c],
              y = s[p]
            a[c] = [p, y, mv(y)]
          }
          return a
        }
        function Cs(s, a) {
          var c = yS(s, a)
          return Dy(c) ? c : n
        }
        function aA(s) {
          var a = $e.call(s, Es),
            c = s[Es]
          try {
            s[Es] = n
            var p = !0
          } catch {}
          var y = sc.call(s)
          return p && (a ? (s[Es] = c) : delete s[Es]), y
        }
        var Pd = nd
            ? function (s) {
                return s == null
                  ? []
                  : ((s = Ke(s)),
                    zn(nd(s), function (a) {
                      return _y.call(s, a)
                    }))
              }
            : Kd,
          dv = nd
            ? function (s) {
                for (var a = []; s; ) ir(a, Pd(s)), (s = uc(s))
                return a
              }
            : Kd,
          qt = rn
        ;((rd && qt(new rd(new ArrayBuffer(1))) != rr) ||
          (Ja && qt(new Ja()) != tn) ||
          (id && qt(id.resolve()) != Sl) ||
          (To && qt(new To()) != dn) ||
          (Za && qt(new Za()) != di)) &&
          (qt = function (s) {
            var a = rn(s),
              c = a == nr ? s.constructor : n,
              p = c ? Rs(c) : ''
            if (p)
              switch (p) {
                case jS:
                  return rr
                case WS:
                  return tn
                case qS:
                  return Sl
                case HS:
                  return dn
                case KS:
                  return di
              }
            return a
          })
        function uA(s, a, c) {
          for (var p = -1, y = c.length; ++p < y; ) {
            var S = c[p],
              R = S.size
            switch (S.type) {
              case 'drop':
                s += R
                break
              case 'dropRight':
                a -= R
                break
              case 'take':
                a = Wt(a, s + R)
                break
              case 'takeRight':
                s = Tt(s, a - R)
                break
            }
          }
          return { start: s, end: a }
        }
        function lA(s) {
          var a = s.match(gi)
          return a ? a[1].split($f) : []
        }
        function pv(s, a, c) {
          a = Ci(a, s)
          for (var p = -1, y = a.length, S = !1; ++p < y; ) {
            var R = Sr(a[p])
            if (!(S = s != null && c(s, R))) break
            s = s[R]
          }
          return S || ++p != y
            ? S
            : ((y = s == null ? 0 : s.length),
              !!y && Vc(y) && Qr(R, y) && (ve(s) || xs(s)))
        }
        function cA(s) {
          var a = s.length,
            c = new s.constructor(a)
          return (
            a &&
              typeof s[0] == 'string' &&
              $e.call(s, 'index') &&
              ((c.index = s.index), (c.input = s.input)),
            c
          )
        }
        function gv(s) {
          return typeof s.constructor == 'function' && !uu(s) ? Io(uc(s)) : {}
        }
        function hA(s, a, c) {
          var p = s.constructor
          switch (a) {
            case ct:
              return Td(s)
            case is:
            case ss:
              return new p(+s)
            case rr:
              return GI(s, c)
            case eo:
            case to:
            case Ra:
            case br:
            case no:
            case ro:
            case as:
            case xa:
            case Pa:
              return Xy(s, c)
            case tn:
              return new p()
            case Vr:
            case os:
              return new p(s)
            case Mr:
              return QI(s)
            case dn:
              return new p()
            case fi:
              return YI(s)
          }
        }
        function fA(s, a) {
          var c = a.length
          if (!c) return s
          var p = c - 1
          return (
            (a[p] = (c > 1 ? '& ' : '') + a[p]),
            (a = a.join(c > 2 ? ', ' : ' ')),
            s.replace(
              Bf,
              `{
/* [wrapped with ` +
                a +
                `] */
`
            )
          )
        }
        function dA(s) {
          return ve(s) || xs(s) || !!(wy && s && s[wy])
        }
        function Qr(s, a) {
          var c = typeof s
          return (
            (a = a ?? Z),
            !!a &&
              (c == 'number' || (c != 'symbol' && Va.test(s))) &&
              s > -1 &&
              s % 1 == 0 &&
              s < a
          )
        }
        function sn(s, a, c) {
          if (!et(c)) return !1
          var p = typeof a
          return (
            p == 'number' ? mn(c) && Qr(a, c.length) : p == 'string' && a in c
          )
            ? ur(c[a], s)
            : !1
        }
        function kd(s, a) {
          if (ve(s)) return !1
          var c = typeof s
          return c == 'number' ||
            c == 'symbol' ||
            c == 'boolean' ||
            s == null ||
            Rn(s)
            ? !0
            : xl.test(s) || !us.test(s) || (a != null && s in Ke(a))
        }
        function pA(s) {
          var a = typeof s
          return a == 'string' ||
            a == 'number' ||
            a == 'symbol' ||
            a == 'boolean'
            ? s !== '__proto__'
            : s === null
        }
        function Nd(s) {
          var a = Rc(s),
            c = w[a]
          if (typeof c != 'function' || !(a in Ae.prototype)) return !1
          if (s === c) return !0
          var p = Rd(c)
          return !!p && s === p[0]
        }
        function gA(s) {
          return !!my && my in s
        }
        var mA = rc ? Yr : Gd
        function uu(s) {
          var a = s && s.constructor,
            c = (typeof a == 'function' && a.prototype) || Eo
          return s === c
        }
        function mv(s) {
          return s === s && !et(s)
        }
        function yv(s, a) {
          return function (c) {
            return c == null ? !1 : c[s] === a && (a !== n || s in Ke(c))
          }
        }
        function yA(s) {
          var a = Oc(s, function (p) {
              return c.size === g && c.clear(), p
            }),
            c = a.cache
          return a
        }
        function vA(s, a) {
          var c = s[1],
            p = a[1],
            y = c | p,
            S = y < (j | P | A),
            R =
              (p == A && c == O) ||
              (p == A && c == I && s[7].length <= a[8]) ||
              (p == (A | I) && a[7].length <= a[8] && c == O)
          if (!(S || R)) return s
          p & j && ((s[2] = a[2]), (y |= c & j ? 0 : C))
          var D = a[3]
          if (D) {
            var F = s[3]
            ;(s[3] = F ? Zy(F, D, a[4]) : D), (s[4] = F ? Ti(s[3], v) : a[4])
          }
          return (
            (D = a[5]),
            D &&
              ((F = s[5]),
              (s[5] = F ? ev(F, D, a[6]) : D),
              (s[6] = F ? Ti(s[5], v) : a[6])),
            (D = a[7]),
            D && (s[7] = D),
            p & A && (s[8] = s[8] == null ? a[8] : Wt(s[8], a[8])),
            s[9] == null && (s[9] = a[9]),
            (s[0] = a[0]),
            (s[1] = y),
            s
          )
        }
        function _A(s) {
          var a = []
          if (s != null) for (var c in Ke(s)) a.push(c)
          return a
        }
        function wA(s) {
          return sc.call(s)
        }
        function vv(s, a, c) {
          return (
            (a = Tt(a === n ? s.length - 1 : a, 0)),
            function () {
              for (
                var p = arguments, y = -1, S = Tt(p.length - a, 0), R = W(S);
                ++y < S;

              )
                R[y] = p[a + y]
              y = -1
              for (var D = W(a + 1); ++y < a; ) D[y] = p[y]
              return (D[a] = c(R)), $t(s, this, D)
            }
          )
        }
        function _v(s, a) {
          return a.length < 2 ? s : As(s, qn(a, 0, -1))
        }
        function EA(s, a) {
          for (var c = s.length, p = Wt(a.length, c), y = gn(s); p--; ) {
            var S = a[p]
            s[p] = Qr(S, c) ? y[S] : n
          }
          return s
        }
        function Ld(s, a) {
          if (
            !(a === 'constructor' && typeof s[a] == 'function') &&
            a != '__proto__'
          )
            return s[a]
        }
        var wv = Tv(jy),
          lu =
            MS ||
            function (s, a) {
              return st.setTimeout(s, a)
            },
          Od = Tv(WI)
        function Ev(s, a, c) {
          var p = a + ''
          return Od(s, fA(p, TA(lA(p), c)))
        }
        function Tv(s) {
          var a = 0,
            c = 0
          return function () {
            var p = zS(),
              y = k - (p - c)
            if (((c = p), y > 0)) {
              if (++a >= z) return arguments[0]
            } else a = 0
            return s.apply(n, arguments)
          }
        }
        function Pc(s, a) {
          var c = -1,
            p = s.length,
            y = p - 1
          for (a = a === n ? p : a; ++c < a; ) {
            var S = gd(c, y),
              R = s[S]
            ;(s[S] = s[c]), (s[c] = R)
          }
          return (s.length = a), s
        }
        var Sv = yA(function (s) {
          var a = []
          return (
            s.charCodeAt(0) === 46 && a.push(''),
            s.replace(Ot, function (c, p, y, S) {
              a.push(y ? S.replace(Pl, '$1') : p || c)
            }),
            a
          )
        })
        function Sr(s) {
          if (typeof s == 'string' || Rn(s)) return s
          var a = s + ''
          return a == '0' && 1 / s == -mt ? '-0' : a
        }
        function Rs(s) {
          if (s != null) {
            try {
              return ic.call(s)
            } catch {}
            try {
              return s + ''
            } catch {}
          }
          return ''
        }
        function TA(s, a) {
          return (
            nn(er, function (c) {
              var p = '_.' + c[0]
              a & c[1] && !vs(s, p) && s.push(p)
            }),
            s.sort()
          )
        }
        function Iv(s) {
          if (s instanceof Ae) return s.clone()
          var a = new jn(s.__wrapped__, s.__chain__)
          return (
            (a.__actions__ = gn(s.__actions__)),
            (a.__index__ = s.__index__),
            (a.__values__ = s.__values__),
            a
          )
        }
        function SA(s, a, c) {
          ;(c ? sn(s, a, c) : a === n) ? (a = 1) : (a = Tt(we(a), 0))
          var p = s == null ? 0 : s.length
          if (!p || a < 1) return []
          for (var y = 0, S = 0, R = W(hc(p / a)); y < p; )
            R[S++] = qn(s, y, (y += a))
          return R
        }
        function IA(s) {
          for (
            var a = -1, c = s == null ? 0 : s.length, p = 0, y = [];
            ++a < c;

          ) {
            var S = s[a]
            S && (y[p++] = S)
          }
          return y
        }
        function AA() {
          var s = arguments.length
          if (!s) return []
          for (var a = W(s - 1), c = arguments[0], p = s; p--; )
            a[p - 1] = arguments[p]
          return ir(ve(c) ? gn(c) : [c], Vt(a, 1))
        }
        var CA = Te(function (s, a) {
            return ht(s) ? ru(s, Vt(a, 1, ht, !0)) : []
          }),
          RA = Te(function (s, a) {
            var c = Hn(a)
            return (
              ht(c) && (c = n), ht(s) ? ru(s, Vt(a, 1, ht, !0), ce(c, 2)) : []
            )
          }),
          xA = Te(function (s, a) {
            var c = Hn(a)
            return ht(c) && (c = n), ht(s) ? ru(s, Vt(a, 1, ht, !0), n, c) : []
          })
        function PA(s, a, c) {
          var p = s == null ? 0 : s.length
          return p
            ? ((a = c || a === n ? 1 : we(a)), qn(s, a < 0 ? 0 : a, p))
            : []
        }
        function kA(s, a, c) {
          var p = s == null ? 0 : s.length
          return p
            ? ((a = c || a === n ? 1 : we(a)),
              (a = p - a),
              qn(s, 0, a < 0 ? 0 : a))
            : []
        }
        function NA(s, a) {
          return s && s.length ? Ec(s, ce(a, 3), !0, !0) : []
        }
        function LA(s, a) {
          return s && s.length ? Ec(s, ce(a, 3), !0) : []
        }
        function OA(s, a, c, p) {
          var y = s == null ? 0 : s.length
          return y
            ? (c && typeof c != 'number' && sn(s, a, c) && ((c = 0), (p = y)),
              AI(s, a, c, p))
            : []
        }
        function Av(s, a, c) {
          var p = s == null ? 0 : s.length
          if (!p) return -1
          var y = c == null ? 0 : we(c)
          return y < 0 && (y = Tt(p + y, 0)), _s(s, ce(a, 3), y)
        }
        function Cv(s, a, c) {
          var p = s == null ? 0 : s.length
          if (!p) return -1
          var y = p - 1
          return (
            c !== n && ((y = we(c)), (y = c < 0 ? Tt(p + y, 0) : Wt(y, p - 1))),
            _s(s, ce(a, 3), y, !0)
          )
        }
        function Rv(s) {
          var a = s == null ? 0 : s.length
          return a ? Vt(s, 1) : []
        }
        function DA(s) {
          var a = s == null ? 0 : s.length
          return a ? Vt(s, mt) : []
        }
        function VA(s, a) {
          var c = s == null ? 0 : s.length
          return c ? ((a = a === n ? 1 : we(a)), Vt(s, a)) : []
        }
        function MA(s) {
          for (var a = -1, c = s == null ? 0 : s.length, p = {}; ++a < c; ) {
            var y = s[a]
            p[y[0]] = y[1]
          }
          return p
        }
        function xv(s) {
          return s && s.length ? s[0] : n
        }
        function bA(s, a, c) {
          var p = s == null ? 0 : s.length
          if (!p) return -1
          var y = c == null ? 0 : we(c)
          return y < 0 && (y = Tt(p + y, 0)), jr(s, a, y)
        }
        function FA(s) {
          var a = s == null ? 0 : s.length
          return a ? qn(s, 0, -1) : []
        }
        var UA = Te(function (s) {
            var a = He(s, wd)
            return a.length && a[0] === s[0] ? cd(a) : []
          }),
          zA = Te(function (s) {
            var a = Hn(s),
              c = He(s, wd)
            return (
              a === Hn(c) ? (a = n) : c.pop(),
              c.length && c[0] === s[0] ? cd(c, ce(a, 2)) : []
            )
          }),
          BA = Te(function (s) {
            var a = Hn(s),
              c = He(s, wd)
            return (
              (a = typeof a == 'function' ? a : n),
              a && c.pop(),
              c.length && c[0] === s[0] ? cd(c, n, a) : []
            )
          })
        function $A(s, a) {
          return s == null ? '' : FS.call(s, a)
        }
        function Hn(s) {
          var a = s == null ? 0 : s.length
          return a ? s[a - 1] : n
        }
        function jA(s, a, c) {
          var p = s == null ? 0 : s.length
          if (!p) return -1
          var y = p
          return (
            c !== n && ((y = we(c)), (y = y < 0 ? Tt(p + y, 0) : Wt(y, p - 1))),
            a === a ? TS(s, a, y) : _s(s, l, y, !0)
          )
        }
        function WA(s, a) {
          return s && s.length ? Uy(s, we(a)) : n
        }
        var qA = Te(Pv)
        function Pv(s, a) {
          return s && s.length && a && a.length ? pd(s, a) : s
        }
        function HA(s, a, c) {
          return s && s.length && a && a.length ? pd(s, a, ce(c, 2)) : s
        }
        function KA(s, a, c) {
          return s && s.length && a && a.length ? pd(s, a, n, c) : s
        }
        var GA = Gr(function (s, a) {
          var c = s == null ? 0 : s.length,
            p = od(s, a)
          return (
            $y(
              s,
              He(a, function (y) {
                return Qr(y, c) ? +y : y
              }).sort(Jy)
            ),
            p
          )
        })
        function QA(s, a) {
          var c = []
          if (!(s && s.length)) return c
          var p = -1,
            y = [],
            S = s.length
          for (a = ce(a, 3); ++p < S; ) {
            var R = s[p]
            a(R, p, s) && (c.push(R), y.push(p))
          }
          return $y(s, y), c
        }
        function Dd(s) {
          return s == null ? s : $S.call(s)
        }
        function YA(s, a, c) {
          var p = s == null ? 0 : s.length
          return p
            ? (c && typeof c != 'number' && sn(s, a, c)
                ? ((a = 0), (c = p))
                : ((a = a == null ? 0 : we(a)), (c = c === n ? p : we(c))),
              qn(s, a, c))
            : []
        }
        function XA(s, a) {
          return wc(s, a)
        }
        function JA(s, a, c) {
          return yd(s, a, ce(c, 2))
        }
        function ZA(s, a) {
          var c = s == null ? 0 : s.length
          if (c) {
            var p = wc(s, a)
            if (p < c && ur(s[p], a)) return p
          }
          return -1
        }
        function eC(s, a) {
          return wc(s, a, !0)
        }
        function tC(s, a, c) {
          return yd(s, a, ce(c, 2), !0)
        }
        function nC(s, a) {
          var c = s == null ? 0 : s.length
          if (c) {
            var p = wc(s, a, !0) - 1
            if (ur(s[p], a)) return p
          }
          return -1
        }
        function rC(s) {
          return s && s.length ? Wy(s) : []
        }
        function iC(s, a) {
          return s && s.length ? Wy(s, ce(a, 2)) : []
        }
        function sC(s) {
          var a = s == null ? 0 : s.length
          return a ? qn(s, 1, a) : []
        }
        function oC(s, a, c) {
          return s && s.length
            ? ((a = c || a === n ? 1 : we(a)), qn(s, 0, a < 0 ? 0 : a))
            : []
        }
        function aC(s, a, c) {
          var p = s == null ? 0 : s.length
          return p
            ? ((a = c || a === n ? 1 : we(a)),
              (a = p - a),
              qn(s, a < 0 ? 0 : a, p))
            : []
        }
        function uC(s, a) {
          return s && s.length ? Ec(s, ce(a, 3), !1, !0) : []
        }
        function lC(s, a) {
          return s && s.length ? Ec(s, ce(a, 3)) : []
        }
        var cC = Te(function (s) {
            return Ai(Vt(s, 1, ht, !0))
          }),
          hC = Te(function (s) {
            var a = Hn(s)
            return ht(a) && (a = n), Ai(Vt(s, 1, ht, !0), ce(a, 2))
          }),
          fC = Te(function (s) {
            var a = Hn(s)
            return (
              (a = typeof a == 'function' ? a : n), Ai(Vt(s, 1, ht, !0), n, a)
            )
          })
        function dC(s) {
          return s && s.length ? Ai(s) : []
        }
        function pC(s, a) {
          return s && s.length ? Ai(s, ce(a, 2)) : []
        }
        function gC(s, a) {
          return (
            (a = typeof a == 'function' ? a : n),
            s && s.length ? Ai(s, n, a) : []
          )
        }
        function Vd(s) {
          if (!(s && s.length)) return []
          var a = 0
          return (
            (s = zn(s, function (c) {
              if (ht(c)) return (a = Tt(c.length, a)), !0
            })),
            be(a, function (c) {
              return He(s, m(c))
            })
          )
        }
        function kv(s, a) {
          if (!(s && s.length)) return []
          var c = Vd(s)
          return a == null
            ? c
            : He(c, function (p) {
                return $t(a, n, p)
              })
        }
        var mC = Te(function (s, a) {
            return ht(s) ? ru(s, a) : []
          }),
          yC = Te(function (s) {
            return _d(zn(s, ht))
          }),
          vC = Te(function (s) {
            var a = Hn(s)
            return ht(a) && (a = n), _d(zn(s, ht), ce(a, 2))
          }),
          _C = Te(function (s) {
            var a = Hn(s)
            return (a = typeof a == 'function' ? a : n), _d(zn(s, ht), n, a)
          }),
          wC = Te(Vd)
        function EC(s, a) {
          return Gy(s || [], a || [], nu)
        }
        function TC(s, a) {
          return Gy(s || [], a || [], ou)
        }
        var SC = Te(function (s) {
          var a = s.length,
            c = a > 1 ? s[a - 1] : n
          return (c = typeof c == 'function' ? (s.pop(), c) : n), kv(s, c)
        })
        function Nv(s) {
          var a = w(s)
          return (a.__chain__ = !0), a
        }
        function IC(s, a) {
          return a(s), s
        }
        function kc(s, a) {
          return a(s)
        }
        var AC = Gr(function (s) {
          var a = s.length,
            c = a ? s[0] : 0,
            p = this.__wrapped__,
            y = function (S) {
              return od(S, s)
            }
          return a > 1 ||
            this.__actions__.length ||
            !(p instanceof Ae) ||
            !Qr(c)
            ? this.thru(y)
            : ((p = p.slice(c, +c + (a ? 1 : 0))),
              p.__actions__.push({ func: kc, args: [y], thisArg: n }),
              new jn(p, this.__chain__).thru(function (S) {
                return a && !S.length && S.push(n), S
              }))
        })
        function CC() {
          return Nv(this)
        }
        function RC() {
          return new jn(this.value(), this.__chain__)
        }
        function xC() {
          this.__values__ === n && (this.__values__ = qv(this.value()))
          var s = this.__index__ >= this.__values__.length,
            a = s ? n : this.__values__[this.__index__++]
          return { done: s, value: a }
        }
        function PC() {
          return this
        }
        function kC(s) {
          for (var a, c = this; c instanceof gc; ) {
            var p = Iv(c)
            ;(p.__index__ = 0),
              (p.__values__ = n),
              a ? (y.__wrapped__ = p) : (a = p)
            var y = p
            c = c.__wrapped__
          }
          return (y.__wrapped__ = s), a
        }
        function NC() {
          var s = this.__wrapped__
          if (s instanceof Ae) {
            var a = s
            return (
              this.__actions__.length && (a = new Ae(this)),
              (a = a.reverse()),
              a.__actions__.push({ func: kc, args: [Dd], thisArg: n }),
              new jn(a, this.__chain__)
            )
          }
          return this.thru(Dd)
        }
        function LC() {
          return Ky(this.__wrapped__, this.__actions__)
        }
        var OC = Tc(function (s, a, c) {
          $e.call(s, c) ? ++s[c] : Hr(s, c, 1)
        })
        function DC(s, a, c) {
          var p = ve(s) ? go : II
          return c && sn(s, a, c) && (a = n), p(s, ce(a, 3))
        }
        function VC(s, a) {
          var c = ve(s) ? zn : ky
          return c(s, ce(a, 3))
        }
        var MC = iv(Av),
          bC = iv(Cv)
        function FC(s, a) {
          return Vt(Nc(s, a), 1)
        }
        function UC(s, a) {
          return Vt(Nc(s, a), mt)
        }
        function zC(s, a, c) {
          return (c = c === n ? 1 : we(c)), Vt(Nc(s, a), c)
        }
        function Lv(s, a) {
          var c = ve(s) ? nn : Ii
          return c(s, ce(a, 3))
        }
        function Ov(s, a) {
          var c = ve(s) ? Xl : Py
          return c(s, ce(a, 3))
        }
        var BC = Tc(function (s, a, c) {
          $e.call(s, c) ? s[c].push(a) : Hr(s, c, [a])
        })
        function $C(s, a, c, p) {
          ;(s = mn(s) ? s : Po(s)), (c = c && !p ? we(c) : 0)
          var y = s.length
          return (
            c < 0 && (c = Tt(y + c, 0)),
            Mc(s) ? c <= y && s.indexOf(a, c) > -1 : !!y && jr(s, a, c) > -1
          )
        }
        var jC = Te(function (s, a, c) {
            var p = -1,
              y = typeof a == 'function',
              S = mn(s) ? W(s.length) : []
            return (
              Ii(s, function (R) {
                S[++p] = y ? $t(a, R, c) : iu(R, a, c)
              }),
              S
            )
          }),
          WC = Tc(function (s, a, c) {
            Hr(s, c, a)
          })
        function Nc(s, a) {
          var c = ve(s) ? He : My
          return c(s, ce(a, 3))
        }
        function qC(s, a, c, p) {
          return s == null
            ? []
            : (ve(a) || (a = a == null ? [] : [a]),
              (c = p ? n : c),
              ve(c) || (c = c == null ? [] : [c]),
              zy(s, a, c))
        }
        var HC = Tc(
          function (s, a, c) {
            s[c ? 0 : 1].push(a)
          },
          function () {
            return [[], []]
          }
        )
        function KC(s, a, c) {
          var p = ve(s) ? sr : U,
            y = arguments.length < 3
          return p(s, ce(a, 4), c, y, Ii)
        }
        function GC(s, a, c) {
          var p = ve(s) ? Jl : U,
            y = arguments.length < 3
          return p(s, ce(a, 4), c, y, Py)
        }
        function QC(s, a) {
          var c = ve(s) ? zn : ky
          return c(s, Dc(ce(a, 3)))
        }
        function YC(s) {
          var a = ve(s) ? Ay : $I
          return a(s)
        }
        function XC(s, a, c) {
          ;(c ? sn(s, a, c) : a === n) ? (a = 1) : (a = we(a))
          var p = ve(s) ? _I : jI
          return p(s, a)
        }
        function JC(s) {
          var a = ve(s) ? wI : qI
          return a(s)
        }
        function ZC(s) {
          if (s == null) return 0
          if (mn(s)) return Mc(s) ? _o(s) : s.length
          var a = qt(s)
          return a == tn || a == dn ? s.size : fd(s).length
        }
        function eR(s, a, c) {
          var p = ve(s) ? mo : HI
          return c && sn(s, a, c) && (a = n), p(s, ce(a, 3))
        }
        var tR = Te(function (s, a) {
            if (s == null) return []
            var c = a.length
            return (
              c > 1 && sn(s, a[0], a[1])
                ? (a = [])
                : c > 2 && sn(a[0], a[1], a[2]) && (a = [a[0]]),
              zy(s, Vt(a, 1), [])
            )
          }),
          Lc =
            VS ||
            function () {
              return st.Date.now()
            }
        function nR(s, a) {
          if (typeof a != 'function') throw new $n(u)
          return (
            (s = we(s)),
            function () {
              if (--s < 1) return a.apply(this, arguments)
            }
          )
        }
        function Dv(s, a, c) {
          return (
            (a = c ? n : a),
            (a = s && a == null ? s.length : a),
            Kr(s, A, n, n, n, n, a)
          )
        }
        function Vv(s, a) {
          var c
          if (typeof a != 'function') throw new $n(u)
          return (
            (s = we(s)),
            function () {
              return (
                --s > 0 && (c = a.apply(this, arguments)), s <= 1 && (a = n), c
              )
            }
          )
        }
        var Md = Te(function (s, a, c) {
            var p = j
            if (c.length) {
              var y = Ti(c, Ro(Md))
              p |= Q
            }
            return Kr(s, p, a, c, y)
          }),
          Mv = Te(function (s, a, c) {
            var p = j | P
            if (c.length) {
              var y = Ti(c, Ro(Mv))
              p |= Q
            }
            return Kr(a, p, s, c, y)
          })
        function bv(s, a, c) {
          a = c ? n : a
          var p = Kr(s, O, n, n, n, n, n, a)
          return (p.placeholder = bv.placeholder), p
        }
        function Fv(s, a, c) {
          a = c ? n : a
          var p = Kr(s, $, n, n, n, n, n, a)
          return (p.placeholder = Fv.placeholder), p
        }
        function Uv(s, a, c) {
          var p,
            y,
            S,
            R,
            D,
            F,
            K = 0,
            G = !1,
            J = !1,
            ne = !0
          if (typeof s != 'function') throw new $n(u)
          ;(a = Kn(a) || 0),
            et(c) &&
              ((G = !!c.leading),
              (J = 'maxWait' in c),
              (S = J ? Tt(Kn(c.maxWait) || 0, a) : S),
              (ne = 'trailing' in c ? !!c.trailing : ne))
          function ae(ft) {
            var lr = p,
              Jr = y
            return (p = y = n), (K = ft), (R = s.apply(Jr, lr)), R
          }
          function he(ft) {
            return (K = ft), (D = lu(Ie, a)), G ? ae(ft) : R
          }
          function Ee(ft) {
            var lr = ft - F,
              Jr = ft - K,
              i0 = a - lr
            return J ? Wt(i0, S - Jr) : i0
          }
          function fe(ft) {
            var lr = ft - F,
              Jr = ft - K
            return F === n || lr >= a || lr < 0 || (J && Jr >= S)
          }
          function Ie() {
            var ft = Lc()
            if (fe(ft)) return xe(ft)
            D = lu(Ie, Ee(ft))
          }
          function xe(ft) {
            return (D = n), ne && p ? ae(ft) : ((p = y = n), R)
          }
          function xn() {
            D !== n && Qy(D), (K = 0), (p = F = y = D = n)
          }
          function on() {
            return D === n ? R : xe(Lc())
          }
          function Pn() {
            var ft = Lc(),
              lr = fe(ft)
            if (((p = arguments), (y = this), (F = ft), lr)) {
              if (D === n) return he(F)
              if (J) return Qy(D), (D = lu(Ie, a)), ae(F)
            }
            return D === n && (D = lu(Ie, a)), R
          }
          return (Pn.cancel = xn), (Pn.flush = on), Pn
        }
        var rR = Te(function (s, a) {
            return xy(s, 1, a)
          }),
          iR = Te(function (s, a, c) {
            return xy(s, Kn(a) || 0, c)
          })
        function sR(s) {
          return Kr(s, x)
        }
        function Oc(s, a) {
          if (typeof s != 'function' || (a != null && typeof a != 'function'))
            throw new $n(u)
          var c = function () {
            var p = arguments,
              y = a ? a.apply(this, p) : p[0],
              S = c.cache
            if (S.has(y)) return S.get(y)
            var R = s.apply(this, p)
            return (c.cache = S.set(y, R) || S), R
          }
          return (c.cache = new (Oc.Cache || qr)()), c
        }
        Oc.Cache = qr
        function Dc(s) {
          if (typeof s != 'function') throw new $n(u)
          return function () {
            var a = arguments
            switch (a.length) {
              case 0:
                return !s.call(this)
              case 1:
                return !s.call(this, a[0])
              case 2:
                return !s.call(this, a[0], a[1])
              case 3:
                return !s.call(this, a[0], a[1], a[2])
            }
            return !s.apply(this, a)
          }
        }
        function oR(s) {
          return Vv(2, s)
        }
        var aR = KI(function (s, a) {
            a =
              a.length == 1 && ve(a[0])
                ? He(a[0], Ue(ce()))
                : He(Vt(a, 1), Ue(ce()))
            var c = a.length
            return Te(function (p) {
              for (var y = -1, S = Wt(p.length, c); ++y < S; )
                p[y] = a[y].call(this, p[y])
              return $t(s, this, p)
            })
          }),
          bd = Te(function (s, a) {
            var c = Ti(a, Ro(bd))
            return Kr(s, Q, n, a, c)
          }),
          zv = Te(function (s, a) {
            var c = Ti(a, Ro(zv))
            return Kr(s, X, n, a, c)
          }),
          uR = Gr(function (s, a) {
            return Kr(s, I, n, n, n, a)
          })
        function lR(s, a) {
          if (typeof s != 'function') throw new $n(u)
          return (a = a === n ? a : we(a)), Te(s, a)
        }
        function cR(s, a) {
          if (typeof s != 'function') throw new $n(u)
          return (
            (a = a == null ? 0 : Tt(we(a), 0)),
            Te(function (c) {
              var p = c[a],
                y = Ri(c, 0, a)
              return p && ir(y, p), $t(s, this, y)
            })
          )
        }
        function hR(s, a, c) {
          var p = !0,
            y = !0
          if (typeof s != 'function') throw new $n(u)
          return (
            et(c) &&
              ((p = 'leading' in c ? !!c.leading : p),
              (y = 'trailing' in c ? !!c.trailing : y)),
            Uv(s, a, { leading: p, maxWait: a, trailing: y })
          )
        }
        function fR(s) {
          return Dv(s, 1)
        }
        function dR(s, a) {
          return bd(Ed(a), s)
        }
        function pR() {
          if (!arguments.length) return []
          var s = arguments[0]
          return ve(s) ? s : [s]
        }
        function gR(s) {
          return Wn(s, L)
        }
        function mR(s, a) {
          return (a = typeof a == 'function' ? a : n), Wn(s, L, a)
        }
        function yR(s) {
          return Wn(s, E | L)
        }
        function vR(s, a) {
          return (a = typeof a == 'function' ? a : n), Wn(s, E | L, a)
        }
        function _R(s, a) {
          return a == null || Ry(s, a, xt(a))
        }
        function ur(s, a) {
          return s === a || (s !== s && a !== a)
        }
        var wR = Cc(ld),
          ER = Cc(function (s, a) {
            return s >= a
          }),
          xs = Oy(
            (function () {
              return arguments
            })()
          )
            ? Oy
            : function (s) {
                return ot(s) && $e.call(s, 'callee') && !_y.call(s, 'callee')
              },
          ve = W.isArray,
          TR = Ga ? Ue(Ga) : kI
        function mn(s) {
          return s != null && Vc(s.length) && !Yr(s)
        }
        function ht(s) {
          return ot(s) && mn(s)
        }
        function SR(s) {
          return s === !0 || s === !1 || (ot(s) && rn(s) == is)
        }
        var xi = bS || Gd,
          IR = po ? Ue(po) : NI
        function AR(s) {
          return ot(s) && s.nodeType === 1 && !cu(s)
        }
        function CR(s) {
          if (s == null) return !0
          if (
            mn(s) &&
            (ve(s) ||
              typeof s == 'string' ||
              typeof s.splice == 'function' ||
              xi(s) ||
              xo(s) ||
              xs(s))
          )
            return !s.length
          var a = qt(s)
          if (a == tn || a == dn) return !s.size
          if (uu(s)) return !fd(s).length
          for (var c in s) if ($e.call(s, c)) return !1
          return !0
        }
        function RR(s, a) {
          return su(s, a)
        }
        function xR(s, a, c) {
          c = typeof c == 'function' ? c : n
          var p = c ? c(s, a) : n
          return p === n ? su(s, a, n, c) : !!p
        }
        function Fd(s) {
          if (!ot(s)) return !1
          var a = rn(s)
          return (
            a == Dr ||
            a == Js ||
            (typeof s.message == 'string' &&
              typeof s.name == 'string' &&
              !cu(s))
          )
        }
        function PR(s) {
          return typeof s == 'number' && Ey(s)
        }
        function Yr(s) {
          if (!et(s)) return !1
          var a = rn(s)
          return a == hi || a == Zs || a == tr || a == Il
        }
        function Bv(s) {
          return typeof s == 'number' && s == we(s)
        }
        function Vc(s) {
          return typeof s == 'number' && s > -1 && s % 1 == 0 && s <= Z
        }
        function et(s) {
          var a = typeof s
          return s != null && (a == 'object' || a == 'function')
        }
        function ot(s) {
          return s != null && typeof s == 'object'
        }
        var $v = gs ? Ue(gs) : OI
        function kR(s, a) {
          return s === a || hd(s, a, xd(a))
        }
        function NR(s, a, c) {
          return (c = typeof c == 'function' ? c : n), hd(s, a, xd(a), c)
        }
        function LR(s) {
          return jv(s) && s != +s
        }
        function OR(s) {
          if (mA(s)) throw new ge(o)
          return Dy(s)
        }
        function DR(s) {
          return s === null
        }
        function VR(s) {
          return s == null
        }
        function jv(s) {
          return typeof s == 'number' || (ot(s) && rn(s) == Vr)
        }
        function cu(s) {
          if (!ot(s) || rn(s) != nr) return !1
          var a = uc(s)
          if (a === null) return !0
          var c = $e.call(a, 'constructor') && a.constructor
          return typeof c == 'function' && c instanceof c && ic.call(c) == NS
        }
        var Ud = Qa ? Ue(Qa) : DI
        function MR(s) {
          return Bv(s) && s >= -Z && s <= Z
        }
        var Wv = ms ? Ue(ms) : VI
        function Mc(s) {
          return typeof s == 'string' || (!ve(s) && ot(s) && rn(s) == os)
        }
        function Rn(s) {
          return typeof s == 'symbol' || (ot(s) && rn(s) == fi)
        }
        var xo = Yl ? Ue(Yl) : MI
        function bR(s) {
          return s === n
        }
        function FR(s) {
          return ot(s) && qt(s) == di
        }
        function UR(s) {
          return ot(s) && rn(s) == Ct
        }
        var zR = Cc(dd),
          BR = Cc(function (s, a) {
            return s <= a
          })
        function qv(s) {
          if (!s) return []
          if (mn(s)) return Mc(s) ? or(s) : gn(s)
          if (Xa && s[Xa]) return _S(s[Xa]())
          var a = qt(s),
            c = a == tn ? ed : a == dn ? tc : Po
          return c(s)
        }
        function Xr(s) {
          if (!s) return s === 0 ? s : 0
          if (((s = Kn(s)), s === mt || s === -mt)) {
            var a = s < 0 ? -1 : 1
            return a * ue
          }
          return s === s ? s : 0
        }
        function we(s) {
          var a = Xr(s),
            c = a % 1
          return a === a ? (c ? a - c : a) : 0
        }
        function Hv(s) {
          return s ? Is(we(s), 0, Se) : 0
        }
        function Kn(s) {
          if (typeof s == 'number') return s
          if (Rn(s)) return le
          if (et(s)) {
            var a = typeof s.valueOf == 'function' ? s.valueOf() : s
            s = et(a) ? a + '' : a
          }
          if (typeof s != 'string') return s === 0 ? s : +s
          s = Re(s)
          var c = kl.test(s)
          return c || Da.test(s)
            ? Gl(s.slice(2), c ? 2 : 8)
            : vr.test(s)
            ? le
            : +s
        }
        function Kv(s) {
          return Tr(s, yn(s))
        }
        function $R(s) {
          return s ? Is(we(s), -Z, Z) : s === 0 ? s : 0
        }
        function ze(s) {
          return s == null ? '' : Cn(s)
        }
        var jR = Ao(function (s, a) {
            if (uu(a) || mn(a)) {
              Tr(a, xt(a), s)
              return
            }
            for (var c in a) $e.call(a, c) && nu(s, c, a[c])
          }),
          Gv = Ao(function (s, a) {
            Tr(a, yn(a), s)
          }),
          bc = Ao(function (s, a, c, p) {
            Tr(a, yn(a), s, p)
          }),
          WR = Ao(function (s, a, c, p) {
            Tr(a, xt(a), s, p)
          }),
          qR = Gr(od)
        function HR(s, a) {
          var c = Io(s)
          return a == null ? c : Cy(c, a)
        }
        var KR = Te(function (s, a) {
            s = Ke(s)
            var c = -1,
              p = a.length,
              y = p > 2 ? a[2] : n
            for (y && sn(a[0], a[1], y) && (p = 1); ++c < p; )
              for (var S = a[c], R = yn(S), D = -1, F = R.length; ++D < F; ) {
                var K = R[D],
                  G = s[K]
                ;(G === n || (ur(G, Eo[K]) && !$e.call(s, K))) && (s[K] = S[K])
              }
            return s
          }),
          GR = Te(function (s) {
            return s.push(n, hv), $t(Qv, n, s)
          })
        function QR(s, a) {
          return jt(s, ce(a, 3), Er)
        }
        function YR(s, a) {
          return jt(s, ce(a, 3), ud)
        }
        function XR(s, a) {
          return s == null ? s : ad(s, ce(a, 3), yn)
        }
        function JR(s, a) {
          return s == null ? s : Ny(s, ce(a, 3), yn)
        }
        function ZR(s, a) {
          return s && Er(s, ce(a, 3))
        }
        function ex(s, a) {
          return s && ud(s, ce(a, 3))
        }
        function tx(s) {
          return s == null ? [] : vc(s, xt(s))
        }
        function nx(s) {
          return s == null ? [] : vc(s, yn(s))
        }
        function zd(s, a, c) {
          var p = s == null ? n : As(s, a)
          return p === n ? c : p
        }
        function rx(s, a) {
          return s != null && pv(s, a, CI)
        }
        function Bd(s, a) {
          return s != null && pv(s, a, RI)
        }
        var ix = ov(function (s, a, c) {
            a != null && typeof a.toString != 'function' && (a = sc.call(a)),
              (s[a] = c)
          }, jd(vn)),
          sx = ov(function (s, a, c) {
            a != null && typeof a.toString != 'function' && (a = sc.call(a)),
              $e.call(s, a) ? s[a].push(c) : (s[a] = [c])
          }, ce),
          ox = Te(iu)
        function xt(s) {
          return mn(s) ? Iy(s) : fd(s)
        }
        function yn(s) {
          return mn(s) ? Iy(s, !0) : bI(s)
        }
        function ax(s, a) {
          var c = {}
          return (
            (a = ce(a, 3)),
            Er(s, function (p, y, S) {
              Hr(c, a(p, y, S), p)
            }),
            c
          )
        }
        function ux(s, a) {
          var c = {}
          return (
            (a = ce(a, 3)),
            Er(s, function (p, y, S) {
              Hr(c, y, a(p, y, S))
            }),
            c
          )
        }
        var lx = Ao(function (s, a, c) {
            _c(s, a, c)
          }),
          Qv = Ao(function (s, a, c, p) {
            _c(s, a, c, p)
          }),
          cx = Gr(function (s, a) {
            var c = {}
            if (s == null) return c
            var p = !1
            ;(a = He(a, function (S) {
              return (S = Ci(S, s)), p || (p = S.length > 1), S
            })),
              Tr(s, Cd(s), c),
              p && (c = Wn(c, E | _ | L, iA))
            for (var y = a.length; y--; ) vd(c, a[y])
            return c
          })
        function hx(s, a) {
          return Yv(s, Dc(ce(a)))
        }
        var fx = Gr(function (s, a) {
          return s == null ? {} : UI(s, a)
        })
        function Yv(s, a) {
          if (s == null) return {}
          var c = He(Cd(s), function (p) {
            return [p]
          })
          return (
            (a = ce(a)),
            By(s, c, function (p, y) {
              return a(p, y[0])
            })
          )
        }
        function dx(s, a, c) {
          a = Ci(a, s)
          var p = -1,
            y = a.length
          for (y || ((y = 1), (s = n)); ++p < y; ) {
            var S = s == null ? n : s[Sr(a[p])]
            S === n && ((p = y), (S = c)), (s = Yr(S) ? S.call(s) : S)
          }
          return s
        }
        function px(s, a, c) {
          return s == null ? s : ou(s, a, c)
        }
        function gx(s, a, c, p) {
          return (
            (p = typeof p == 'function' ? p : n), s == null ? s : ou(s, a, c, p)
          )
        }
        var Xv = lv(xt),
          Jv = lv(yn)
        function mx(s, a, c) {
          var p = ve(s),
            y = p || xi(s) || xo(s)
          if (((a = ce(a, 4)), c == null)) {
            var S = s && s.constructor
            y
              ? (c = p ? new S() : [])
              : et(s)
              ? (c = Yr(S) ? Io(uc(s)) : {})
              : (c = {})
          }
          return (
            (y ? nn : Er)(s, function (R, D, F) {
              return a(c, R, D, F)
            }),
            c
          )
        }
        function yx(s, a) {
          return s == null ? !0 : vd(s, a)
        }
        function vx(s, a, c) {
          return s == null ? s : Hy(s, a, Ed(c))
        }
        function _x(s, a, c, p) {
          return (
            (p = typeof p == 'function' ? p : n),
            s == null ? s : Hy(s, a, Ed(c), p)
          )
        }
        function Po(s) {
          return s == null ? [] : yt(s, xt(s))
        }
        function wx(s) {
          return s == null ? [] : yt(s, yn(s))
        }
        function Ex(s, a, c) {
          return (
            c === n && ((c = a), (a = n)),
            c !== n && ((c = Kn(c)), (c = c === c ? c : 0)),
            a !== n && ((a = Kn(a)), (a = a === a ? a : 0)),
            Is(Kn(s), a, c)
          )
        }
        function Tx(s, a, c) {
          return (
            (a = Xr(a)),
            c === n ? ((c = a), (a = 0)) : (c = Xr(c)),
            (s = Kn(s)),
            xI(s, a, c)
          )
        }
        function Sx(s, a, c) {
          if (
            (c && typeof c != 'boolean' && sn(s, a, c) && (a = c = n),
            c === n &&
              (typeof a == 'boolean'
                ? ((c = a), (a = n))
                : typeof s == 'boolean' && ((c = s), (s = n))),
            s === n && a === n
              ? ((s = 0), (a = 1))
              : ((s = Xr(s)), a === n ? ((a = s), (s = 0)) : (a = Xr(a))),
            s > a)
          ) {
            var p = s
            ;(s = a), (a = p)
          }
          if (c || s % 1 || a % 1) {
            var y = Ty()
            return Wt(s + y * (a - s + Zf('1e-' + ((y + '').length - 1))), a)
          }
          return gd(s, a)
        }
        var Ix = Co(function (s, a, c) {
          return (a = a.toLowerCase()), s + (c ? Zv(a) : a)
        })
        function Zv(s) {
          return $d(ze(s).toLowerCase())
        }
        function e0(s) {
          return (s = ze(s)), s && s.replace(Ll, pS).replace(Qf, '')
        }
        function Ax(s, a, c) {
          ;(s = ze(s)), (a = Cn(a))
          var p = s.length
          c = c === n ? p : Is(we(c), 0, p)
          var y = c
          return (c -= a.length), c >= 0 && s.slice(c, y) == a
        }
        function Cx(s) {
          return (s = ze(s)), s && Fr.test(s) ? s.replace(io, gS) : s
        }
        function Rx(s) {
          return (s = ze(s)), s && ls.test(s) ? s.replace(oo, '\\$&') : s
        }
        var xx = Co(function (s, a, c) {
            return s + (c ? '-' : '') + a.toLowerCase()
          }),
          Px = Co(function (s, a, c) {
            return s + (c ? ' ' : '') + a.toLowerCase()
          }),
          kx = rv('toLowerCase')
        function Nx(s, a, c) {
          ;(s = ze(s)), (a = we(a))
          var p = a ? _o(s) : 0
          if (!a || p >= a) return s
          var y = (a - p) / 2
          return Ac(fc(y), c) + s + Ac(hc(y), c)
        }
        function Lx(s, a, c) {
          ;(s = ze(s)), (a = we(a))
          var p = a ? _o(s) : 0
          return a && p < a ? s + Ac(a - p, c) : s
        }
        function Ox(s, a, c) {
          ;(s = ze(s)), (a = we(a))
          var p = a ? _o(s) : 0
          return a && p < a ? Ac(a - p, c) + s : s
        }
        function Dx(s, a, c) {
          return (
            c || a == null ? (a = 0) : a && (a = +a),
            BS(ze(s).replace(Ur, ''), a || 0)
          )
        }
        function Vx(s, a, c) {
          return (
            (c ? sn(s, a, c) : a === n) ? (a = 1) : (a = we(a)), md(ze(s), a)
          )
        }
        function Mx() {
          var s = arguments,
            a = ze(s[0])
          return s.length < 3 ? a : a.replace(s[1], s[2])
        }
        var bx = Co(function (s, a, c) {
          return s + (c ? '_' : '') + a.toLowerCase()
        })
        function Fx(s, a, c) {
          return (
            c && typeof c != 'number' && sn(s, a, c) && (a = c = n),
            (c = c === n ? Se : c >>> 0),
            c
              ? ((s = ze(s)),
                s &&
                (typeof a == 'string' || (a != null && !Ud(a))) &&
                ((a = Cn(a)), !a && vo(s))
                  ? Ri(or(s), 0, c)
                  : s.split(a, c))
              : []
          )
        }
        var Ux = Co(function (s, a, c) {
          return s + (c ? ' ' : '') + $d(a)
        })
        function zx(s, a, c) {
          return (
            (s = ze(s)),
            (c = c == null ? 0 : Is(we(c), 0, s.length)),
            (a = Cn(a)),
            s.slice(c, c + a.length) == a
          )
        }
        function Bx(s, a, c) {
          var p = w.templateSettings
          c && sn(s, a, c) && (a = n), (s = ze(s)), (a = bc({}, a, p, cv))
          var y = bc({}, a.imports, p.imports, cv),
            S = xt(y),
            R = yt(y, S),
            D,
            F,
            K = 0,
            G = a.interpolate || hs,
            J = "__p += '",
            ne = td(
              (a.escape || hs).source +
                '|' +
                G.source +
                '|' +
                (G === La ? Oa : hs).source +
                '|' +
                (a.evaluate || hs).source +
                '|$',
              'g'
            ),
            ae =
              '//# sourceURL=' +
              ($e.call(a, 'sourceURL')
                ? (a.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++Hl + ']') +
              `
`
          s.replace(ne, function (fe, Ie, xe, xn, on, Pn) {
            return (
              xe || (xe = xn),
              (J += s.slice(K, Pn).replace(Wf, mS)),
              Ie &&
                ((D = !0),
                (J +=
                  `' +
__e(` +
                  Ie +
                  `) +
'`)),
              on &&
                ((F = !0),
                (J +=
                  `';
` +
                  on +
                  `;
__p += '`)),
              xe &&
                (J +=
                  `' +
((__t = (` +
                  xe +
                  `)) == null ? '' : __t) +
'`),
              (K = Pn + fe.length),
              fe
            )
          }),
            (J += `';
`)
          var he = $e.call(a, 'variable') && a.variable
          if (!he)
            J =
              `with (obj) {
` +
              J +
              `
}
`
          else if (ao.test(he)) throw new ge(h)
          ;(J = (F ? J.replace(ka, '') : J)
            .replace(Al, '$1')
            .replace(Cl, '$1;')),
            (J =
              'function(' +
              (he || 'obj') +
              `) {
` +
              (he
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (D ? ', __e = _.escape' : '') +
              (F
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              J +
              `return __p
}`)
          var Ee = n0(function () {
            return Fe(S, ae + 'return ' + J).apply(n, R)
          })
          if (((Ee.source = J), Fd(Ee))) throw Ee
          return Ee
        }
        function $x(s) {
          return ze(s).toLowerCase()
        }
        function jx(s) {
          return ze(s).toUpperCase()
        }
        function Wx(s, a, c) {
          if (((s = ze(s)), s && (c || a === n))) return Re(s)
          if (!s || !(a = Cn(a))) return s
          var p = or(s),
            y = or(a),
            S = pn(p, y),
            R = ws(p, y) + 1
          return Ri(p, S, R).join('')
        }
        function qx(s, a, c) {
          if (((s = ze(s)), s && (c || a === n))) return s.slice(0, gy(s) + 1)
          if (!s || !(a = Cn(a))) return s
          var p = or(s),
            y = ws(p, or(a)) + 1
          return Ri(p, 0, y).join('')
        }
        function Hx(s, a, c) {
          if (((s = ze(s)), s && (c || a === n))) return s.replace(Ur, '')
          if (!s || !(a = Cn(a))) return s
          var p = or(s),
            y = pn(p, or(a))
          return Ri(p, y).join('')
        }
        function Kx(s, a) {
          var c = N,
            p = V
          if (et(a)) {
            var y = 'separator' in a ? a.separator : y
            ;(c = 'length' in a ? we(a.length) : c),
              (p = 'omission' in a ? Cn(a.omission) : p)
          }
          s = ze(s)
          var S = s.length
          if (vo(s)) {
            var R = or(s)
            S = R.length
          }
          if (c >= S) return s
          var D = c - _o(p)
          if (D < 1) return p
          var F = R ? Ri(R, 0, D).join('') : s.slice(0, D)
          if (y === n) return F + p
          if ((R && (D += F.length - D), Ud(y))) {
            if (s.slice(D).search(y)) {
              var K,
                G = F
              for (
                y.global || (y = td(y.source, ze(cs.exec(y)) + 'g')),
                  y.lastIndex = 0;
                (K = y.exec(G));

              )
                var J = K.index
              F = F.slice(0, J === n ? D : J)
            }
          } else if (s.indexOf(Cn(y), D) != D) {
            var ne = F.lastIndexOf(y)
            ne > -1 && (F = F.slice(0, ne))
          }
          return F + p
        }
        function Gx(s) {
          return (s = ze(s)), s && Na.test(s) ? s.replace(pi, SS) : s
        }
        var Qx = Co(function (s, a, c) {
            return s + (c ? ' ' : '') + a.toUpperCase()
          }),
          $d = rv('toUpperCase')
        function t0(s, a, c) {
          return (
            (s = ze(s)),
            (a = c ? n : a),
            a === n ? (vS(s) ? CS(s) : yo(s)) : s.match(a) || []
          )
        }
        var n0 = Te(function (s, a) {
            try {
              return $t(s, n, a)
            } catch (c) {
              return Fd(c) ? c : new ge(c)
            }
          }),
          Yx = Gr(function (s, a) {
            return (
              nn(a, function (c) {
                ;(c = Sr(c)), Hr(s, c, Md(s[c], s))
              }),
              s
            )
          })
        function Xx(s) {
          var a = s == null ? 0 : s.length,
            c = ce()
          return (
            (s = a
              ? He(s, function (p) {
                  if (typeof p[1] != 'function') throw new $n(u)
                  return [c(p[0]), p[1]]
                })
              : []),
            Te(function (p) {
              for (var y = -1; ++y < a; ) {
                var S = s[y]
                if ($t(S[0], this, p)) return $t(S[1], this, p)
              }
            })
          )
        }
        function Jx(s) {
          return SI(Wn(s, E))
        }
        function jd(s) {
          return function () {
            return s
          }
        }
        function Zx(s, a) {
          return s == null || s !== s ? a : s
        }
        var e2 = sv(),
          t2 = sv(!0)
        function vn(s) {
          return s
        }
        function Wd(s) {
          return Vy(typeof s == 'function' ? s : Wn(s, E))
        }
        function n2(s) {
          return by(Wn(s, E))
        }
        function r2(s, a) {
          return Fy(s, Wn(a, E))
        }
        var i2 = Te(function (s, a) {
            return function (c) {
              return iu(c, s, a)
            }
          }),
          s2 = Te(function (s, a) {
            return function (c) {
              return iu(s, c, a)
            }
          })
        function qd(s, a, c) {
          var p = xt(a),
            y = vc(a, p)
          c == null &&
            !(et(a) && (y.length || !p.length)) &&
            ((c = a), (a = s), (s = this), (y = vc(a, xt(a))))
          var S = !(et(c) && 'chain' in c) || !!c.chain,
            R = Yr(s)
          return (
            nn(y, function (D) {
              var F = a[D]
              ;(s[D] = F),
                R &&
                  (s.prototype[D] = function () {
                    var K = this.__chain__
                    if (S || K) {
                      var G = s(this.__wrapped__),
                        J = (G.__actions__ = gn(this.__actions__))
                      return (
                        J.push({ func: F, args: arguments, thisArg: s }),
                        (G.__chain__ = K),
                        G
                      )
                    }
                    return F.apply(s, ir([this.value()], arguments))
                  })
            }),
            s
          )
        }
        function o2() {
          return st._ === this && (st._ = LS), this
        }
        function Hd() {}
        function a2(s) {
          return (
            (s = we(s)),
            Te(function (a) {
              return Uy(a, s)
            })
          )
        }
        var u2 = Sd(He),
          l2 = Sd(go),
          c2 = Sd(mo)
        function r0(s) {
          return kd(s) ? m(Sr(s)) : zI(s)
        }
        function h2(s) {
          return function (a) {
            return s == null ? n : As(s, a)
          }
        }
        var f2 = av(),
          d2 = av(!0)
        function Kd() {
          return []
        }
        function Gd() {
          return !1
        }
        function p2() {
          return {}
        }
        function g2() {
          return ''
        }
        function m2() {
          return !0
        }
        function y2(s, a) {
          if (((s = we(s)), s < 1 || s > Z)) return []
          var c = Se,
            p = Wt(s, Se)
          ;(a = ce(a)), (s -= Se)
          for (var y = be(p, a); ++c < s; ) a(c)
          return y
        }
        function v2(s) {
          return ve(s) ? He(s, Sr) : Rn(s) ? [s] : gn(Sv(ze(s)))
        }
        function _2(s) {
          var a = ++kS
          return ze(s) + a
        }
        var w2 = Ic(function (s, a) {
            return s + a
          }, 0),
          E2 = Id('ceil'),
          T2 = Ic(function (s, a) {
            return s / a
          }, 1),
          S2 = Id('floor')
        function I2(s) {
          return s && s.length ? yc(s, vn, ld) : n
        }
        function A2(s, a) {
          return s && s.length ? yc(s, ce(a, 2), ld) : n
        }
        function C2(s) {
          return d(s, vn)
        }
        function R2(s, a) {
          return d(s, ce(a, 2))
        }
        function x2(s) {
          return s && s.length ? yc(s, vn, dd) : n
        }
        function P2(s, a) {
          return s && s.length ? yc(s, ce(a, 2), dd) : n
        }
        var k2 = Ic(function (s, a) {
            return s * a
          }, 1),
          N2 = Id('round'),
          L2 = Ic(function (s, a) {
            return s - a
          }, 0)
        function O2(s) {
          return s && s.length ? te(s, vn) : 0
        }
        function D2(s, a) {
          return s && s.length ? te(s, ce(a, 2)) : 0
        }
        return (
          (w.after = nR),
          (w.ary = Dv),
          (w.assign = jR),
          (w.assignIn = Gv),
          (w.assignInWith = bc),
          (w.assignWith = WR),
          (w.at = qR),
          (w.before = Vv),
          (w.bind = Md),
          (w.bindAll = Yx),
          (w.bindKey = Mv),
          (w.castArray = pR),
          (w.chain = Nv),
          (w.chunk = SA),
          (w.compact = IA),
          (w.concat = AA),
          (w.cond = Xx),
          (w.conforms = Jx),
          (w.constant = jd),
          (w.countBy = OC),
          (w.create = HR),
          (w.curry = bv),
          (w.curryRight = Fv),
          (w.debounce = Uv),
          (w.defaults = KR),
          (w.defaultsDeep = GR),
          (w.defer = rR),
          (w.delay = iR),
          (w.difference = CA),
          (w.differenceBy = RA),
          (w.differenceWith = xA),
          (w.drop = PA),
          (w.dropRight = kA),
          (w.dropRightWhile = NA),
          (w.dropWhile = LA),
          (w.fill = OA),
          (w.filter = VC),
          (w.flatMap = FC),
          (w.flatMapDeep = UC),
          (w.flatMapDepth = zC),
          (w.flatten = Rv),
          (w.flattenDeep = DA),
          (w.flattenDepth = VA),
          (w.flip = sR),
          (w.flow = e2),
          (w.flowRight = t2),
          (w.fromPairs = MA),
          (w.functions = tx),
          (w.functionsIn = nx),
          (w.groupBy = BC),
          (w.initial = FA),
          (w.intersection = UA),
          (w.intersectionBy = zA),
          (w.intersectionWith = BA),
          (w.invert = ix),
          (w.invertBy = sx),
          (w.invokeMap = jC),
          (w.iteratee = Wd),
          (w.keyBy = WC),
          (w.keys = xt),
          (w.keysIn = yn),
          (w.map = Nc),
          (w.mapKeys = ax),
          (w.mapValues = ux),
          (w.matches = n2),
          (w.matchesProperty = r2),
          (w.memoize = Oc),
          (w.merge = lx),
          (w.mergeWith = Qv),
          (w.method = i2),
          (w.methodOf = s2),
          (w.mixin = qd),
          (w.negate = Dc),
          (w.nthArg = a2),
          (w.omit = cx),
          (w.omitBy = hx),
          (w.once = oR),
          (w.orderBy = qC),
          (w.over = u2),
          (w.overArgs = aR),
          (w.overEvery = l2),
          (w.overSome = c2),
          (w.partial = bd),
          (w.partialRight = zv),
          (w.partition = HC),
          (w.pick = fx),
          (w.pickBy = Yv),
          (w.property = r0),
          (w.propertyOf = h2),
          (w.pull = qA),
          (w.pullAll = Pv),
          (w.pullAllBy = HA),
          (w.pullAllWith = KA),
          (w.pullAt = GA),
          (w.range = f2),
          (w.rangeRight = d2),
          (w.rearg = uR),
          (w.reject = QC),
          (w.remove = QA),
          (w.rest = lR),
          (w.reverse = Dd),
          (w.sampleSize = XC),
          (w.set = px),
          (w.setWith = gx),
          (w.shuffle = JC),
          (w.slice = YA),
          (w.sortBy = tR),
          (w.sortedUniq = rC),
          (w.sortedUniqBy = iC),
          (w.split = Fx),
          (w.spread = cR),
          (w.tail = sC),
          (w.take = oC),
          (w.takeRight = aC),
          (w.takeRightWhile = uC),
          (w.takeWhile = lC),
          (w.tap = IC),
          (w.throttle = hR),
          (w.thru = kc),
          (w.toArray = qv),
          (w.toPairs = Xv),
          (w.toPairsIn = Jv),
          (w.toPath = v2),
          (w.toPlainObject = Kv),
          (w.transform = mx),
          (w.unary = fR),
          (w.union = cC),
          (w.unionBy = hC),
          (w.unionWith = fC),
          (w.uniq = dC),
          (w.uniqBy = pC),
          (w.uniqWith = gC),
          (w.unset = yx),
          (w.unzip = Vd),
          (w.unzipWith = kv),
          (w.update = vx),
          (w.updateWith = _x),
          (w.values = Po),
          (w.valuesIn = wx),
          (w.without = mC),
          (w.words = t0),
          (w.wrap = dR),
          (w.xor = yC),
          (w.xorBy = vC),
          (w.xorWith = _C),
          (w.zip = wC),
          (w.zipObject = EC),
          (w.zipObjectDeep = TC),
          (w.zipWith = SC),
          (w.entries = Xv),
          (w.entriesIn = Jv),
          (w.extend = Gv),
          (w.extendWith = bc),
          qd(w, w),
          (w.add = w2),
          (w.attempt = n0),
          (w.camelCase = Ix),
          (w.capitalize = Zv),
          (w.ceil = E2),
          (w.clamp = Ex),
          (w.clone = gR),
          (w.cloneDeep = yR),
          (w.cloneDeepWith = vR),
          (w.cloneWith = mR),
          (w.conformsTo = _R),
          (w.deburr = e0),
          (w.defaultTo = Zx),
          (w.divide = T2),
          (w.endsWith = Ax),
          (w.eq = ur),
          (w.escape = Cx),
          (w.escapeRegExp = Rx),
          (w.every = DC),
          (w.find = MC),
          (w.findIndex = Av),
          (w.findKey = QR),
          (w.findLast = bC),
          (w.findLastIndex = Cv),
          (w.findLastKey = YR),
          (w.floor = S2),
          (w.forEach = Lv),
          (w.forEachRight = Ov),
          (w.forIn = XR),
          (w.forInRight = JR),
          (w.forOwn = ZR),
          (w.forOwnRight = ex),
          (w.get = zd),
          (w.gt = wR),
          (w.gte = ER),
          (w.has = rx),
          (w.hasIn = Bd),
          (w.head = xv),
          (w.identity = vn),
          (w.includes = $C),
          (w.indexOf = bA),
          (w.inRange = Tx),
          (w.invoke = ox),
          (w.isArguments = xs),
          (w.isArray = ve),
          (w.isArrayBuffer = TR),
          (w.isArrayLike = mn),
          (w.isArrayLikeObject = ht),
          (w.isBoolean = SR),
          (w.isBuffer = xi),
          (w.isDate = IR),
          (w.isElement = AR),
          (w.isEmpty = CR),
          (w.isEqual = RR),
          (w.isEqualWith = xR),
          (w.isError = Fd),
          (w.isFinite = PR),
          (w.isFunction = Yr),
          (w.isInteger = Bv),
          (w.isLength = Vc),
          (w.isMap = $v),
          (w.isMatch = kR),
          (w.isMatchWith = NR),
          (w.isNaN = LR),
          (w.isNative = OR),
          (w.isNil = VR),
          (w.isNull = DR),
          (w.isNumber = jv),
          (w.isObject = et),
          (w.isObjectLike = ot),
          (w.isPlainObject = cu),
          (w.isRegExp = Ud),
          (w.isSafeInteger = MR),
          (w.isSet = Wv),
          (w.isString = Mc),
          (w.isSymbol = Rn),
          (w.isTypedArray = xo),
          (w.isUndefined = bR),
          (w.isWeakMap = FR),
          (w.isWeakSet = UR),
          (w.join = $A),
          (w.kebabCase = xx),
          (w.last = Hn),
          (w.lastIndexOf = jA),
          (w.lowerCase = Px),
          (w.lowerFirst = kx),
          (w.lt = zR),
          (w.lte = BR),
          (w.max = I2),
          (w.maxBy = A2),
          (w.mean = C2),
          (w.meanBy = R2),
          (w.min = x2),
          (w.minBy = P2),
          (w.stubArray = Kd),
          (w.stubFalse = Gd),
          (w.stubObject = p2),
          (w.stubString = g2),
          (w.stubTrue = m2),
          (w.multiply = k2),
          (w.nth = WA),
          (w.noConflict = o2),
          (w.noop = Hd),
          (w.now = Lc),
          (w.pad = Nx),
          (w.padEnd = Lx),
          (w.padStart = Ox),
          (w.parseInt = Dx),
          (w.random = Sx),
          (w.reduce = KC),
          (w.reduceRight = GC),
          (w.repeat = Vx),
          (w.replace = Mx),
          (w.result = dx),
          (w.round = N2),
          (w.runInContext = M),
          (w.sample = YC),
          (w.size = ZC),
          (w.snakeCase = bx),
          (w.some = eR),
          (w.sortedIndex = XA),
          (w.sortedIndexBy = JA),
          (w.sortedIndexOf = ZA),
          (w.sortedLastIndex = eC),
          (w.sortedLastIndexBy = tC),
          (w.sortedLastIndexOf = nC),
          (w.startCase = Ux),
          (w.startsWith = zx),
          (w.subtract = L2),
          (w.sum = O2),
          (w.sumBy = D2),
          (w.template = Bx),
          (w.times = y2),
          (w.toFinite = Xr),
          (w.toInteger = we),
          (w.toLength = Hv),
          (w.toLower = $x),
          (w.toNumber = Kn),
          (w.toSafeInteger = $R),
          (w.toString = ze),
          (w.toUpper = jx),
          (w.trim = Wx),
          (w.trimEnd = qx),
          (w.trimStart = Hx),
          (w.truncate = Kx),
          (w.unescape = Gx),
          (w.uniqueId = _2),
          (w.upperCase = Qx),
          (w.upperFirst = $d),
          (w.each = Lv),
          (w.eachRight = Ov),
          (w.first = xv),
          qd(
            w,
            (function () {
              var s = {}
              return (
                Er(w, function (a, c) {
                  $e.call(w.prototype, c) || (s[c] = a)
                }),
                s
              )
            })(),
            { chain: !1 }
          ),
          (w.VERSION = r),
          nn(
            [
              'bind',
              'bindKey',
              'curry',
              'curryRight',
              'partial',
              'partialRight',
            ],
            function (s) {
              w[s].placeholder = w
            }
          ),
          nn(['drop', 'take'], function (s, a) {
            ;(Ae.prototype[s] = function (c) {
              c = c === n ? 1 : Tt(we(c), 0)
              var p = this.__filtered__ && !a ? new Ae(this) : this.clone()
              return (
                p.__filtered__
                  ? (p.__takeCount__ = Wt(c, p.__takeCount__))
                  : p.__views__.push({
                      size: Wt(c, Se),
                      type: s + (p.__dir__ < 0 ? 'Right' : ''),
                    }),
                p
              )
            }),
              (Ae.prototype[s + 'Right'] = function (c) {
                return this.reverse()[s](c).reverse()
              })
          }),
          nn(['filter', 'map', 'takeWhile'], function (s, a) {
            var c = a + 1,
              p = c == lt || c == Mn
            Ae.prototype[s] = function (y) {
              var S = this.clone()
              return (
                S.__iteratees__.push({ iteratee: ce(y, 3), type: c }),
                (S.__filtered__ = S.__filtered__ || p),
                S
              )
            }
          }),
          nn(['head', 'last'], function (s, a) {
            var c = 'take' + (a ? 'Right' : '')
            Ae.prototype[s] = function () {
              return this[c](1).value()[0]
            }
          }),
          nn(['initial', 'tail'], function (s, a) {
            var c = 'drop' + (a ? '' : 'Right')
            Ae.prototype[s] = function () {
              return this.__filtered__ ? new Ae(this) : this[c](1)
            }
          }),
          (Ae.prototype.compact = function () {
            return this.filter(vn)
          }),
          (Ae.prototype.find = function (s) {
            return this.filter(s).head()
          }),
          (Ae.prototype.findLast = function (s) {
            return this.reverse().find(s)
          }),
          (Ae.prototype.invokeMap = Te(function (s, a) {
            return typeof s == 'function'
              ? new Ae(this)
              : this.map(function (c) {
                  return iu(c, s, a)
                })
          })),
          (Ae.prototype.reject = function (s) {
            return this.filter(Dc(ce(s)))
          }),
          (Ae.prototype.slice = function (s, a) {
            s = we(s)
            var c = this
            return c.__filtered__ && (s > 0 || a < 0)
              ? new Ae(c)
              : (s < 0 ? (c = c.takeRight(-s)) : s && (c = c.drop(s)),
                a !== n &&
                  ((a = we(a)), (c = a < 0 ? c.dropRight(-a) : c.take(a - s))),
                c)
          }),
          (Ae.prototype.takeRightWhile = function (s) {
            return this.reverse().takeWhile(s).reverse()
          }),
          (Ae.prototype.toArray = function () {
            return this.take(Se)
          }),
          Er(Ae.prototype, function (s, a) {
            var c = /^(?:filter|find|map|reject)|While$/.test(a),
              p = /^(?:head|last)$/.test(a),
              y = w[p ? 'take' + (a == 'last' ? 'Right' : '') : a],
              S = p || /^find/.test(a)
            y &&
              (w.prototype[a] = function () {
                var R = this.__wrapped__,
                  D = p ? [1] : arguments,
                  F = R instanceof Ae,
                  K = D[0],
                  G = F || ve(R),
                  J = function (Ie) {
                    var xe = y.apply(w, ir([Ie], D))
                    return p && ne ? xe[0] : xe
                  }
                G &&
                  c &&
                  typeof K == 'function' &&
                  K.length != 1 &&
                  (F = G = !1)
                var ne = this.__chain__,
                  ae = !!this.__actions__.length,
                  he = S && !ne,
                  Ee = F && !ae
                if (!S && G) {
                  R = Ee ? R : new Ae(this)
                  var fe = s.apply(R, D)
                  return (
                    fe.__actions__.push({ func: kc, args: [J], thisArg: n }),
                    new jn(fe, ne)
                  )
                }
                return he && Ee
                  ? s.apply(this, D)
                  : ((fe = this.thru(J)),
                    he ? (p ? fe.value()[0] : fe.value()) : fe)
              })
          }),
          nn(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (s) {
              var a = nc[s],
                c = /^(?:push|sort|unshift)$/.test(s) ? 'tap' : 'thru',
                p = /^(?:pop|shift)$/.test(s)
              w.prototype[s] = function () {
                var y = arguments
                if (p && !this.__chain__) {
                  var S = this.value()
                  return a.apply(ve(S) ? S : [], y)
                }
                return this[c](function (R) {
                  return a.apply(ve(R) ? R : [], y)
                })
              }
            }
          ),
          Er(Ae.prototype, function (s, a) {
            var c = w[a]
            if (c) {
              var p = c.name + ''
              $e.call(So, p) || (So[p] = []), So[p].push({ name: a, func: c })
            }
          }),
          (So[Sc(n, P).name] = [{ name: 'wrapper', func: n }]),
          (Ae.prototype.clone = GS),
          (Ae.prototype.reverse = QS),
          (Ae.prototype.value = YS),
          (w.prototype.at = AC),
          (w.prototype.chain = CC),
          (w.prototype.commit = RC),
          (w.prototype.next = xC),
          (w.prototype.plant = kC),
          (w.prototype.reverse = NC),
          (w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = LC),
          (w.prototype.first = w.prototype.head),
          Xa && (w.prototype[Xa] = PC),
          w
        )
      },
      wo = RS()
    Dt ? (((Dt.exports = wo)._ = wo), (fo._ = wo)) : (st._ = wo)
  }).call(hu)
})(of, of.exports)
of.exports
const p4 = () =>
    pr.jsx('div', {
      className:
        'fixed inset-0 flex items-center justify-center bg-white z-[9999]',
      children: pr.jsx('div', {
        className:
          'w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin',
      }),
    }),
  g4 = () =>
    pr.jsx('div', {
      className:
        'flex items-center justify-center h-screen bg-gray-100 text-gray-800',
      children: pr.jsxs('div', {
        className: 'text-center',
        children: [
          pr.jsx('h1', {
            className: 'text-4xl font-bold mb-4',
            children: 'Coming Soon',
          }),
          pr.jsx('p', {
            className: 'text-lg text-gray-600 mb-6',
            children: "We're working hard to bring you something amazing!..",
          }),
        ],
      }),
    })
function m4() {
  const [t, e] = je.useState([]),
    { i18n: n } = AN(),
    [r, i] = je.useState(!0)
  return (
    je.useEffect(() => {
      ;(() => {
        const u = a4(GV(d4, 'blogs'), (h) => {
          const f = h.docs.map((g) => ({ id: g.id, ...g.data() }))
          e(f), i(!1)
        })
        return () => u()
      })()
    }, []),
    je.useEffect(() => {
      const o = () => {
        i(!1)
      }
      return (
        n.on('languageChanged', o),
        () => {
          n.off('languageChanged', o)
        }
      )
    }, [n]),
    r ? pr.jsx(p4, {}) : pr.jsx(MN, { children: pr.jsx(g4, {}) })
  )
}
const me = (t) => typeof t == 'string',
  wu = () => {
    let t, e
    const n = new Promise((r, i) => {
      ;(t = r), (e = i)
    })
    return (n.resolve = t), (n.reject = e), n
  },
  T1 = (t) => (t == null ? '' : '' + t),
  y4 = (t, e, n) => {
    t.forEach((r) => {
      e[r] && (n[r] = e[r])
    })
  },
  v4 = /###/g,
  S1 = (t) => (t && t.indexOf('###') > -1 ? t.replace(v4, '.') : t),
  I1 = (t) => !t || me(t),
  $u = (t, e, n) => {
    const r = me(e) ? e.split('.') : e
    let i = 0
    for (; i < r.length - 1; ) {
      if (I1(t)) return {}
      const o = S1(r[i])
      !t[o] && n && (t[o] = new n()),
        Object.prototype.hasOwnProperty.call(t, o) ? (t = t[o]) : (t = {}),
        ++i
    }
    return I1(t) ? {} : { obj: t, k: S1(r[i]) }
  },
  A1 = (t, e, n) => {
    const { obj: r, k: i } = $u(t, e, Object)
    if (r !== void 0 || e.length === 1) {
      r[i] = n
      return
    }
    let o = e[e.length - 1],
      u = e.slice(0, e.length - 1),
      h = $u(t, u, Object)
    for (; h.obj === void 0 && u.length; )
      (o = `${u[u.length - 1]}.${o}`),
        (u = u.slice(0, u.length - 1)),
        (h = $u(t, u, Object)),
        h && h.obj && typeof h.obj[`${h.k}.${o}`] < 'u' && (h.obj = void 0)
    h.obj[`${h.k}.${o}`] = n
  },
  _4 = (t, e, n, r) => {
    const { obj: i, k: o } = $u(t, e, Object)
    ;(i[o] = i[o] || []), i[o].push(n)
  },
  af = (t, e) => {
    const { obj: n, k: r } = $u(t, e)
    if (n) return n[r]
  },
  w4 = (t, e, n) => {
    const r = af(t, n)
    return r !== void 0 ? r : af(e, n)
  },
  fS = (t, e, n) => {
    for (const r in e)
      r !== '__proto__' &&
        r !== 'constructor' &&
        (r in t
          ? me(t[r]) ||
            t[r] instanceof String ||
            me(e[r]) ||
            e[r] instanceof String
            ? n && (t[r] = e[r])
            : fS(t[r], e[r], n)
          : (t[r] = e[r]))
    return t
  },
  No = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var E4 = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const T4 = (t) => (me(t) ? t.replace(/[&<>"'\/]/g, (e) => E4[e]) : t)
class S4 {
  constructor(e) {
    ;(this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = [])
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e)
    if (n !== void 0) return n
    const r = new RegExp(e)
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, r),
      this.regExpQueue.push(e),
      r
    )
  }
}
const I4 = [' ', ',', '?', '!', ';'],
  A4 = new S4(20),
  C4 = (t, e, n) => {
    ;(e = e || ''), (n = n || '')
    const r = I4.filter((u) => e.indexOf(u) < 0 && n.indexOf(u) < 0)
    if (r.length === 0) return !0
    const i = A4.getRegExp(
      `(${r.map((u) => (u === '?' ? '\\?' : u)).join('|')})`
    )
    let o = !i.test(t)
    if (!o) {
      const u = t.indexOf(n)
      u > 0 && !i.test(t.substring(0, u)) && (o = !0)
    }
    return o
  },
  Xg = function (t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!t) return
    if (t[e]) return t[e]
    const r = e.split(n)
    let i = t
    for (let o = 0; o < r.length; ) {
      if (!i || typeof i != 'object') return
      let u,
        h = ''
      for (let f = o; f < r.length; ++f)
        if ((f !== o && (h += n), (h += r[f]), (u = i[h]), u !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof u) > -1 &&
            f < r.length - 1
          )
            continue
          o += f - o + 1
          break
        }
      i = u
    }
    return i
  },
  uf = (t) => t && t.replace('_', '-'),
  R4 = {
    type: 'logger',
    log(t) {
      this.output('log', t)
    },
    warn(t) {
      this.output('warn', t)
    },
    error(t) {
      this.output('error', t)
    },
    output(t, e) {
      console && console[t] && console[t].apply(console, e)
    },
  }
class lf {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(e, n)
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = e || R4),
      (this.options = n),
      (this.debug = n.debug)
  }
  log() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r]
    return this.forward(n, 'log', '', !0)
  }
  warn() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r]
    return this.forward(n, 'warn', '', !0)
  }
  error() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r]
    return this.forward(n, 'error', '')
  }
  deprecate() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r]
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0)
  }
  forward(e, n, r, i) {
    return i && !this.debug
      ? null
      : (me(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[n](e))
  }
  create(e) {
    return new lf(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    })
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new lf(this.logger, e)
    )
  }
}
var xr = new lf()
class Uf {
  constructor() {
    this.observers = {}
  }
  on(e, n) {
    return (
      e.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map())
        const i = this.observers[r].get(n) || 0
        this.observers[r].set(n, i + 1)
      }),
      this
    )
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e]
        return
      }
      this.observers[e].delete(n)
    }
  }
  emit(e) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i]
    this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach((u) => {
        let [h, f] = u
        for (let g = 0; g < f; g++) h(...r)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((u) => {
          let [h, f] = u
          for (let g = 0; g < f; g++) h.apply(h, [e, ...r])
        })
  }
}
class C1 extends Uf {
  constructor(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' }
    super(),
      (this.data = e || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0)
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e)
    n > -1 && this.options.ns.splice(n, 1)
  }
  getResource(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      u =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure
    let h
    e.indexOf('.') > -1
      ? (h = e.split('.'))
      : ((h = [e, n]),
        r &&
          (Array.isArray(r)
            ? h.push(...r)
            : me(r) && o
            ? h.push(...r.split(o))
            : h.push(r)))
    const f = af(this.data, h)
    return (
      !f &&
        !n &&
        !r &&
        e.indexOf('.') > -1 &&
        ((e = h[0]), (n = h[1]), (r = h.slice(2).join('.'))),
      f || !u || !me(r)
        ? f
        : Xg(this.data && this.data[e] && this.data[e][n], r, o)
    )
  }
  addResource(e, n, r, i) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const u =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
    let h = [e, n]
    r && (h = h.concat(u ? r.split(u) : r)),
      e.indexOf('.') > -1 && ((h = e.split('.')), (i = n), (n = h[1])),
      this.addNamespaces(n),
      A1(this.data, h, i),
      o.silent || this.emit('added', e, n, r, i)
  }
  addResources(e, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const o in r)
      (me(r[o]) || Array.isArray(r[o])) &&
        this.addResource(e, n, o, r[o], { silent: !0 })
    i.silent || this.emit('added', e, n, r)
  }
  addResourceBundle(e, n, r, i, o) {
    let u =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      h = [e, n]
    e.indexOf('.') > -1 && ((h = e.split('.')), (i = r), (r = n), (n = h[1])),
      this.addNamespaces(n)
    let f = af(this.data, h) || {}
    u.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? fS(f, r, o) : (f = { ...f, ...r }),
      A1(this.data, h, f),
      u.silent || this.emit('added', e, n, r)
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n],
      this.removeNamespaces(n),
      this.emit('removed', e, n)
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0
  }
  getResourceBundle(e, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(e, n) }
        : this.getResource(e, n)
    )
  }
  getDataByLanguage(e) {
    return this.data[e]
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e)
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    )
  }
  toJSON() {
    return this.data
  }
}
var dS = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t
  },
  handle(t, e, n, r, i) {
    return (
      t.forEach((o) => {
        this.processors[o] && (e = this.processors[o].process(e, n, r, i))
      }),
      e
    )
  },
}
const R1 = {}
class cf extends Uf {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      y4(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        e,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = xr.create('translator'))
  }
  changeLanguage(e) {
    e && (this.language = e)
  }
  exists(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    if (e == null) return !1
    const r = this.resolve(e, n)
    return r && r.res !== void 0
  }
  extractFromKey(e, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator
    r === void 0 && (r = ':')
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
    let o = n.ns || this.options.defaultNS || []
    const u = r && e.indexOf(r) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !C4(e, r, i)
    if (u && !h) {
      const f = e.match(this.interpolator.nestingRegexp)
      if (f && f.length > 0) return { key: e, namespaces: o }
      const g = e.split(r)
      ;(r !== i || (r === i && this.options.ns.indexOf(g[0]) > -1)) &&
        (o = g.shift()),
        (e = g.join(i))
    }
    return me(o) && (o = [o]), { key: e, namespaces: o }
  }
  translate(e, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      e == null)
    )
      return ''
    Array.isArray(e) || (e = [String(e)])
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: u, namespaces: h } = this.extractFromKey(e[e.length - 1], n),
      f = h[h.length - 1],
      g = n.lng || this.language,
      v = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (g && g.toLowerCase() === 'cimode') {
      if (v) {
        const $ = n.nsSeparator || this.options.nsSeparator
        return i
          ? {
              res: `${f}${$}${u}`,
              usedKey: u,
              exactUsedKey: u,
              usedLng: g,
              usedNS: f,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${f}${$}${u}`
      }
      return i
        ? {
            res: u,
            usedKey: u,
            exactUsedKey: u,
            usedLng: g,
            usedNS: f,
            usedParams: this.getUsedParamsDetails(n),
          }
        : u
    }
    const E = this.resolve(e, n)
    let _ = E && E.res
    const L = (E && E.usedKey) || u,
      b = (E && E.exactUsedKey) || u,
      B = Object.prototype.toString.apply(_),
      j = ['[object Number]', '[object Function]', '[object RegExp]'],
      P = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      C = !this.i18nFormat || this.i18nFormat.handleAsObject,
      O = !me(_) && typeof _ != 'boolean' && typeof _ != 'number'
    if (C && _ && O && j.indexOf(B) < 0 && !(me(P) && Array.isArray(_))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          )
        const $ = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(L, _, { ...n, ns: h })
          : `key '${u} (${this.language})' returned an object instead of string.`
        return i
          ? ((E.res = $), (E.usedParams = this.getUsedParamsDetails(n)), E)
          : $
      }
      if (o) {
        const $ = Array.isArray(_),
          Q = $ ? [] : {},
          X = $ ? b : L
        for (const A in _)
          if (Object.prototype.hasOwnProperty.call(_, A)) {
            const I = `${X}${o}${A}`
            ;(Q[A] = this.translate(I, { ...n, joinArrays: !1, ns: h })),
              Q[A] === I && (Q[A] = _[A])
          }
        _ = Q
      }
    } else if (C && me(P) && Array.isArray(_))
      (_ = _.join(P)), _ && (_ = this.extendTranslation(_, e, n, r))
    else {
      let $ = !1,
        Q = !1
      const X = n.count !== void 0 && !me(n.count),
        A = cf.hasDefaultValue(n),
        I = X ? this.pluralResolver.getSuffix(g, n.count, n) : '',
        x =
          n.ordinal && X
            ? this.pluralResolver.getSuffix(g, n.count, { ordinal: !1 })
            : '',
        N =
          X &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        V =
          (N && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${I}`] ||
          n[`defaultValue${x}`] ||
          n.defaultValue
      !this.isValidLookup(_) && A && (($ = !0), (_ = V)),
        this.isValidLookup(_) || ((Q = !0), (_ = u))
      const k =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          Q
            ? void 0
            : _,
        lt = A && V !== _ && this.options.updateMissing
      if (Q || $ || lt) {
        if (
          (this.logger.log(
            lt ? 'updateKey' : 'missingKey',
            g,
            f,
            u,
            lt ? V : _
          ),
          o)
        ) {
          const Z = this.resolve(u, { ...n, keySeparator: !1 })
          Z &&
            Z.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let en = []
        const Mn = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && Mn && Mn[0])
          for (let Z = 0; Z < Mn.length; Z++) en.push(Mn[Z])
        else
          this.options.saveMissingTo === 'all'
            ? (en = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : en.push(n.lng || this.language)
        const mt = (Z, ue, le) => {
          const Se = A && le !== _ ? le : k
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(Z, f, ue, Se, lt, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(Z, f, ue, Se, lt, n),
            this.emit('missingKey', Z, f, ue, _)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && X
            ? en.forEach((Z) => {
                const ue = this.pluralResolver.getSuffixes(Z, n)
                N &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  ue.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  ue.push(`${this.options.pluralSeparator}zero`),
                  ue.forEach((le) => {
                    mt([Z], u + le, n[`defaultValue${le}`] || V)
                  })
              })
            : mt(en, u, V))
      }
      ;(_ = this.extendTranslation(_, e, n, E, r)),
        Q &&
          _ === u &&
          this.options.appendNamespaceToMissingKey &&
          (_ = `${f}:${u}`),
        (Q || $) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (_ = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${f}:${u}` : u,
                $ ? _ : void 0
              ))
            : (_ = this.options.parseMissingKeyHandler(_)))
    }
    return i
      ? ((E.res = _), (E.usedParams = this.getUsedParamsDetails(n)), E)
      : _
  }
  extendTranslation(e, n, r, i, o) {
    var u = this
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      )
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        })
      const g =
        me(e) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let v
      if (g) {
        const _ = e.match(this.interpolator.nestingRegexp)
        v = _ && _.length
      }
      let E = r.replace && !me(r.replace) ? r.replace : r
      if (
        (this.options.interpolation.defaultVariables &&
          (E = { ...this.options.interpolation.defaultVariables, ...E }),
        (e = this.interpolator.interpolate(
          e,
          E,
          r.lng || this.language || i.usedLng,
          r
        )),
        g)
      ) {
        const _ = e.match(this.interpolator.nestingRegexp),
          L = _ && _.length
        v < L && (r.nest = !1)
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        i &&
        i.res &&
        (r.lng = this.language || i.usedLng),
        r.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (
                var _ = arguments.length, L = new Array(_), b = 0;
                b < _;
                b++
              )
                L[b] = arguments[b]
              return o && o[0] === L[0] && !r.context
                ? (u.logger.warn(
                    `It seems you are nesting recursively key: ${L[0]} in key: ${n[0]}`
                  ),
                  null)
                : u.translate(...L, n)
            },
            r
          )),
        r.interpolation && this.interpolator.reset()
    }
    const h = r.postProcess || this.options.postProcess,
      f = me(h) ? [h] : h
    return (
      e != null &&
        f &&
        f.length &&
        r.applyPostProcessor !== !1 &&
        (e = dS.handle(
          f,
          e,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      e
    )
  }
  resolve(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      o,
      u,
      h
    return (
      me(e) && (e = [e]),
      e.forEach((f) => {
        if (this.isValidLookup(r)) return
        const g = this.extractFromKey(f, n),
          v = g.key
        i = v
        let E = g.namespaces
        this.options.fallbackNS && (E = E.concat(this.options.fallbackNS))
        const _ = n.count !== void 0 && !me(n.count),
          L =
            _ &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          b =
            n.context !== void 0 &&
            (me(n.context) || typeof n.context == 'number') &&
            n.context !== '',
          B = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              )
        E.forEach((j) => {
          this.isValidLookup(r) ||
            ((h = j),
            !R1[`${B[0]}-${j}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(h) &&
              ((R1[`${B[0]}-${j}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${B.join(
                  ', '
                )}" won't get resolved as namespace "${h}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            B.forEach((P) => {
              if (this.isValidLookup(r)) return
              u = P
              const C = [v]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(C, v, P, j, n)
              else {
                let $
                _ && ($ = this.pluralResolver.getSuffix(P, n.count, n))
                const Q = `${this.options.pluralSeparator}zero`,
                  X = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (_ &&
                    (C.push(v + $),
                    n.ordinal &&
                      $.indexOf(X) === 0 &&
                      C.push(v + $.replace(X, this.options.pluralSeparator)),
                    L && C.push(v + Q)),
                  b)
                ) {
                  const A = `${v}${this.options.contextSeparator}${n.context}`
                  C.push(A),
                    _ &&
                      (C.push(A + $),
                      n.ordinal &&
                        $.indexOf(X) === 0 &&
                        C.push(A + $.replace(X, this.options.pluralSeparator)),
                      L && C.push(A + Q))
                }
              }
              let O
              for (; (O = C.pop()); )
                this.isValidLookup(r) ||
                  ((o = O), (r = this.getResource(P, j, O, n)))
            }))
        })
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: u, usedNS: h }
    )
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === '')
    )
  }
  getResource(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(e, n, r, i)
      : this.resourceStore.getResource(e, n, r, i)
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
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
      r = e.replace && !me(e.replace)
    let i = r ? e.replace : e
    if (
      (r && typeof e.count < 'u' && (i.count = e.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i }
      for (const o of n) delete i[o]
    }
    return i
  }
  static hasDefaultValue(e) {
    const n = 'defaultValue'
    for (const r in e)
      if (
        Object.prototype.hasOwnProperty.call(e, r) &&
        n === r.substring(0, n.length) &&
        e[r] !== void 0
      )
        return !0
    return !1
  }
}
const kp = (t) => t.charAt(0).toUpperCase() + t.slice(1)
class x1 {
  constructor(e) {
    ;(this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = xr.create('languageUtils'))
  }
  getScriptPartFromCode(e) {
    if (((e = uf(e)), !e || e.indexOf('-') < 0)) return null
    const n = e.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(e) {
    if (((e = uf(e)), !e || e.indexOf('-') < 0)) return e
    const n = e.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(e) {
    if (me(e) && e.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let i = Intl.getCanonicalLocales(e)[0]
          if ((i && this.options.lowerCaseLng && (i = i.toLowerCase()), i))
            return i
        } catch {}
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let r = e.split('-')
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = kp(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== 'sgn' && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = kp(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = kp(r[2].toLowerCase()))),
        r.join('-')
      )
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e
  }
  isSupportedCode(e) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    )
  }
  getBestMatchFromCodes(e) {
    if (!e) return null
    let n
    return (
      e.forEach((r) => {
        if (n) return
        const i = this.formatLanguageCode(r)
        ;(!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i)
      }),
      !n &&
        this.options.supportedLngs &&
        e.forEach((r) => {
          if (n) return
          const i = this.getLanguagePartFromCode(r)
          if (this.isSupportedCode(i)) return (n = i)
          n = this.options.supportedLngs.find((o) => {
            if (o === i) return o
            if (
              !(o.indexOf('-') < 0 && i.indexOf('-') < 0) &&
              ((o.indexOf('-') > 0 &&
                i.indexOf('-') < 0 &&
                o.substring(0, o.indexOf('-')) === i) ||
                (o.indexOf(i) === 0 && i.length > 1))
            )
              return o
          })
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    )
  }
  getFallbackCodes(e, n) {
    if (!e) return []
    if (
      (typeof e == 'function' && (e = e(n)),
      me(e) && (e = [e]),
      Array.isArray(e))
    )
      return e
    if (!n) return e.default || []
    let r = e[n]
    return (
      r || (r = e[this.getScriptPartFromCode(n)]),
      r || (r = e[this.formatLanguageCode(n)]),
      r || (r = e[this.getLanguagePartFromCode(n)]),
      r || (r = e.default),
      r || []
    )
  }
  toResolveHierarchy(e, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], e),
      i = [],
      o = (u) => {
        u &&
          (this.isSupportedCode(u)
            ? i.push(u)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${u}`
              ))
      }
    return (
      me(e) && (e.indexOf('-') > -1 || e.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            o(this.formatLanguageCode(e)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            o(this.getScriptPartFromCode(e)),
          this.options.load !== 'currentOnly' &&
            o(this.getLanguagePartFromCode(e)))
        : me(e) && o(this.formatLanguageCode(e)),
      r.forEach((u) => {
        i.indexOf(u) < 0 && o(this.formatLanguageCode(u))
      }),
      i
    )
  }
}
let x4 = [
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
  P4 = {
    1: (t) => +(t > 1),
    2: (t) => +(t != 1),
    3: (t) => 0,
    4: (t) =>
      t % 10 == 1 && t % 100 != 11
        ? 0
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
        ? 1
        : 2,
    5: (t) =>
      t == 0
        ? 0
        : t == 1
        ? 1
        : t == 2
        ? 2
        : t % 100 >= 3 && t % 100 <= 10
        ? 3
        : t % 100 >= 11
        ? 4
        : 5,
    6: (t) => (t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2),
    7: (t) =>
      t == 1
        ? 0
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
        ? 1
        : 2,
    8: (t) => (t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3),
    9: (t) => +(t >= 2),
    10: (t) => (t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4),
    11: (t) =>
      t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3,
    12: (t) => +(t % 10 != 1 || t % 100 == 11),
    13: (t) => +(t !== 0),
    14: (t) => (t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3),
    15: (t) =>
      t % 10 == 1 && t % 100 != 11
        ? 0
        : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20)
        ? 1
        : 2,
    16: (t) => (t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2),
    17: (t) => (t == 1 || (t % 10 == 1 && t % 100 != 11) ? 0 : 1),
    18: (t) => (t == 0 ? 0 : t == 1 ? 1 : 2),
    19: (t) =>
      t == 1
        ? 0
        : t == 0 || (t % 100 > 1 && t % 100 < 11)
        ? 1
        : t % 100 > 10 && t % 100 < 20
        ? 2
        : 3,
    20: (t) => (t == 1 ? 0 : t == 0 || (t % 100 > 0 && t % 100 < 20) ? 1 : 2),
    21: (t) =>
      t % 100 == 1
        ? 1
        : t % 100 == 2
        ? 2
        : t % 100 == 3 || t % 100 == 4
        ? 3
        : 0,
    22: (t) =>
      t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3,
  }
const k4 = ['v1', 'v2', 'v3'],
  N4 = ['v4'],
  P1 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  L4 = () => {
    const t = {}
    return (
      x4.forEach((e) => {
        e.lngs.forEach((n) => {
          t[n] = { numbers: e.nr, plurals: P4[e.fc] }
        })
      }),
      t
    )
  }
class O4 {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = e),
      (this.options = n),
      (this.logger = xr.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        N4.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = L4()),
      (this.pluralRulesCache = {})
  }
  addRule(e, n) {
    this.rules[e] = n
  }
  clearCache() {
    this.pluralRulesCache = {}
  }
  getRule(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (this.shouldUseIntlApi())
      try {
        const r = uf(e === 'dev' ? 'en' : e),
          i = n.ordinal ? 'ordinal' : 'cardinal',
          o = JSON.stringify({ cleanedCode: r, type: i })
        if (o in this.pluralRulesCache) return this.pluralRulesCache[o]
        const u = new Intl.PluralRules(r, { type: i })
        return (this.pluralRulesCache[o] = u), u
      } catch {
        return
      }
    return (
      this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    )
  }
  needsPlural(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(e, n)
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1
  }
  getPluralFormsOfKey(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return this.getSuffixes(e, r).map((i) => `${n}${i}`)
  }
  getSuffixes(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(e, n)
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => P1[i] - P1[o])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ''
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(e, i, n))
      : []
  }
  getSuffix(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const i = this.getRule(e, r)
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ''
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${e}`), '')
  }
  getSuffixRetroCompatible(e, n) {
    const r = e.noAbs ? e.plurals(n) : e.plurals(Math.abs(n))
    let i = e.numbers[r]
    this.options.simplifyPluralSuffix &&
      e.numbers.length === 2 &&
      e.numbers[0] === 1 &&
      (i === 2 ? (i = 'plural') : i === 1 && (i = ''))
    const o = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString()
    return this.options.compatibilityJSON === 'v1'
      ? i === 1
        ? ''
        : typeof i == 'number'
        ? `_plural_${i.toString()}`
        : o()
      : this.options.compatibilityJSON === 'v2' ||
        (this.options.simplifyPluralSuffix &&
          e.numbers.length === 2 &&
          e.numbers[0] === 1)
      ? o()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString()
  }
  shouldUseIntlApi() {
    return !k4.includes(this.options.compatibilityJSON)
  }
}
const k1 = function (t, e, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = w4(t, e, n)
    return (
      !o &&
        i &&
        me(n) &&
        ((o = Xg(t, n, r)), o === void 0 && (o = Xg(e, n, r))),
      o
    )
  },
  Np = (t) => t.replace(/\$/g, '$$$$')
class D4 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = xr.create('interpolator')),
      (this.options = e),
      (this.format = (e.interpolation && e.interpolation.format) || ((n) => n)),
      this.init(e)
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    e.interpolation || (e.interpolation = { escapeValue: !0 })
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: u,
      suffix: h,
      suffixEscaped: f,
      formatSeparator: g,
      unescapeSuffix: v,
      unescapePrefix: E,
      nestingPrefix: _,
      nestingPrefixEscaped: L,
      nestingSuffix: b,
      nestingSuffixEscaped: B,
      nestingOptionsSeparator: j,
      maxReplaces: P,
      alwaysFormat: C,
    } = e.interpolation
    ;(this.escape = n !== void 0 ? n : T4),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? No(o) : u || '{{'),
      (this.suffix = h ? No(h) : f || '}}'),
      (this.formatSeparator = g || ','),
      (this.unescapePrefix = v ? '' : E || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : v || ''),
      (this.nestingPrefix = _ ? No(_) : L || No('$t(')),
      (this.nestingSuffix = b ? No(b) : B || No(')')),
      (this.nestingOptionsSeparator = j || ','),
      (this.maxReplaces = P || 1e3),
      (this.alwaysFormat = C !== void 0 ? C : !1),
      this.resetRegExp()
  }
  reset() {
    this.options && this.init(this.options)
  }
  resetRegExp() {
    const e = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g')
    ;(this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ))
  }
  interpolate(e, n, r, i) {
    let o, u, h
    const f =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      g = (L) => {
        if (L.indexOf(this.formatSeparator) < 0) {
          const P = k1(
            n,
            f,
            L,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          )
          return this.alwaysFormat
            ? this.format(P, void 0, r, { ...i, ...n, interpolationkey: L })
            : P
        }
        const b = L.split(this.formatSeparator),
          B = b.shift().trim(),
          j = b.join(this.formatSeparator).trim()
        return this.format(
          k1(
            n,
            f,
            B,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          j,
          r,
          { ...i, ...n, interpolationkey: B }
        )
      }
    this.resetRegExp()
    const v =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      E =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (L) => Np(L) },
        {
          regex: this.regexp,
          safeValue: (L) => (this.escapeValue ? Np(this.escape(L)) : Np(L)),
        },
      ].forEach((L) => {
        for (h = 0; (o = L.regex.exec(e)); ) {
          const b = o[1].trim()
          if (((u = g(b)), u === void 0))
            if (typeof v == 'function') {
              const j = v(e, o, i)
              u = me(j) ? j : ''
            } else if (i && Object.prototype.hasOwnProperty.call(i, b)) u = ''
            else if (E) {
              u = o[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${b} for interpolating ${e}`
              ),
                (u = '')
          else !me(u) && !this.useRawValueToEscape && (u = T1(u))
          const B = L.safeValue(u)
          if (
            ((e = e.replace(o[0], B)),
            E
              ? ((L.regex.lastIndex += u.length),
                (L.regex.lastIndex -= o[0].length))
              : (L.regex.lastIndex = 0),
            h++,
            h >= this.maxReplaces)
          )
            break
        }
      }),
      e
    )
  }
  nest(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      u
    const h = (f, g) => {
      const v = this.nestingOptionsSeparator
      if (f.indexOf(v) < 0) return f
      const E = f.split(new RegExp(`${v}[ ]*{`))
      let _ = `{${E[1]}`
      ;(f = E[0]), (_ = this.interpolate(_, u))
      const L = _.match(/'/g),
        b = _.match(/"/g)
      ;((L && L.length % 2 === 0 && !b) || b.length % 2 !== 0) &&
        (_ = _.replace(/'/g, '"'))
      try {
        ;(u = JSON.parse(_)), g && (u = { ...g, ...u })
      } catch (B) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${f}`,
            B
          ),
          `${f}${v}${_}`
        )
      }
      return (
        u.defaultValue &&
          u.defaultValue.indexOf(this.prefix) > -1 &&
          delete u.defaultValue,
        f
      )
    }
    for (; (i = this.nestingRegexp.exec(e)); ) {
      let f = []
      ;(u = { ...r }),
        (u = u.replace && !me(u.replace) ? u.replace : u),
        (u.applyPostProcessor = !1),
        delete u.defaultValue
      let g = !1
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const v = i[1].split(this.formatSeparator).map((E) => E.trim())
        ;(i[1] = v.shift()), (f = v), (g = !0)
      }
      if (((o = n(h.call(this, i[1].trim(), u), u)), o && i[0] === e && !me(o)))
        return o
      me(o) || (o = T1(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),
          (o = '')),
        g &&
          (o = f.reduce(
            (v, E) =>
              this.format(v, E, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim()
          )),
        (e = e.replace(i[0], o)),
        (this.regexp.lastIndex = 0)
    }
    return e
  }
}
const V4 = (t) => {
    let e = t.toLowerCase().trim()
    const n = {}
    if (t.indexOf('(') > -1) {
      const r = t.split('(')
      e = r[0].toLowerCase().trim()
      const i = r[1].substring(0, r[1].length - 1)
      e === 'currency' && i.indexOf(':') < 0
        ? n.currency || (n.currency = i.trim())
        : e === 'relativetime' && i.indexOf(':') < 0
        ? n.range || (n.range = i.trim())
        : i.split(';').forEach((u) => {
            if (u) {
              const [h, ...f] = u.split(':'),
                g = f
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                v = h.trim()
              n[v] || (n[v] = g),
                g === 'false' && (n[v] = !1),
                g === 'true' && (n[v] = !0),
                isNaN(g) || (n[v] = parseInt(g, 10))
            }
          })
    }
    return { formatName: e, formatOptions: n }
  },
  Lo = (t) => {
    const e = {}
    return (n, r, i) => {
      let o = i
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (o = { ...o, [i.interpolationkey]: void 0 })
      const u = r + JSON.stringify(o)
      let h = e[u]
      return h || ((h = t(uf(r), i)), (e[u] = h)), h(n)
    }
  }
class M4 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = xr.create('formatter')),
      (this.options = e),
      (this.formats = {
        number: Lo((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r })
          return (o) => i.format(o)
        }),
        currency: Lo((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: 'currency' })
          return (o) => i.format(o)
        }),
        datetime: Lo((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r })
          return (o) => i.format(o)
        }),
        relativetime: Lo((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r })
          return (o) => i.format(o, r.range || 'day')
        }),
        list: Lo((n, r) => {
          const i = new Intl.ListFormat(n, { ...r })
          return (o) => i.format(o)
        }),
      }),
      this.init(e)
  }
  init(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    this.formatSeparator = n.interpolation.formatSeparator || ','
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = Lo(n)
  }
  format(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const o = n.split(this.formatSeparator)
    if (
      o.length > 1 &&
      o[0].indexOf('(') > 1 &&
      o[0].indexOf(')') < 0 &&
      o.find((h) => h.indexOf(')') > -1)
    ) {
      const h = o.findIndex((f) => f.indexOf(')') > -1)
      o[0] = [o[0], ...o.splice(1, h)].join(this.formatSeparator)
    }
    return o.reduce((h, f) => {
      const { formatName: g, formatOptions: v } = V4(f)
      if (this.formats[g]) {
        let E = h
        try {
          const _ =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            L = _.locale || _.lng || i.locale || i.lng || r
          E = this.formats[g](h, L, { ...v, ...i, ..._ })
        } catch (_) {
          this.logger.warn(_)
        }
        return E
      } else this.logger.warn(`there was no format function for ${g}`)
      return h
    }, e)
  }
}
const b4 = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--)
}
class F4 extends Uf {
  constructor(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = e),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = xr.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i)
  }
  queueLoad(e, n, r, i) {
    const o = {},
      u = {},
      h = {},
      f = {}
    return (
      e.forEach((g) => {
        let v = !0
        n.forEach((E) => {
          const _ = `${g}|${E}`
          !r.reload && this.store.hasResourceBundle(g, E)
            ? (this.state[_] = 2)
            : this.state[_] < 0 ||
              (this.state[_] === 1
                ? u[_] === void 0 && (u[_] = !0)
                : ((this.state[_] = 1),
                  (v = !1),
                  u[_] === void 0 && (u[_] = !0),
                  o[_] === void 0 && (o[_] = !0),
                  f[E] === void 0 && (f[E] = !0)))
        }),
          v || (h[g] = !0)
      }),
      (Object.keys(o).length || Object.keys(u).length) &&
        this.queue.push({
          pending: u,
          pendingCount: Object.keys(u).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(u),
        toLoadLanguages: Object.keys(h),
        toLoadNamespaces: Object.keys(f),
      }
    )
  }
  loaded(e, n, r) {
    const i = e.split('|'),
      o = i[0],
      u = i[1]
    n && this.emit('failedLoading', o, u, n),
      !n &&
        r &&
        this.store.addResourceBundle(o, u, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = n ? -1 : 2),
      n && r && (this.state[e] = 0)
    const h = {}
    this.queue.forEach((f) => {
      _4(f.loaded, [o], u),
        b4(f, e),
        n && f.errors.push(n),
        f.pendingCount === 0 &&
          !f.done &&
          (Object.keys(f.loaded).forEach((g) => {
            h[g] || (h[g] = {})
            const v = f.loaded[g]
            v.length &&
              v.forEach((E) => {
                h[g][E] === void 0 && (h[g][E] = !0)
              })
          }),
          (f.done = !0),
          f.errors.length ? f.callback(f.errors) : f.callback())
    }),
      this.emit('loaded', h),
      (this.queue = this.queue.filter((f) => !f.done))
  }
  read(e, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      u = arguments.length > 5 ? arguments[5] : void 0
    if (!e.length) return u(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: u,
      })
      return
    }
    this.readingCalls++
    const h = (g, v) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const E = this.waitingReads.shift()
          this.read(E.lng, E.ns, E.fcName, E.tried, E.wait, E.callback)
        }
        if (g && v && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, n, r, i + 1, o * 2, u)
          }, o)
          return
        }
        u(g, v)
      },
      f = this.backend[r].bind(this.backend)
    if (f.length === 2) {
      try {
        const g = f(e, n)
        g && typeof g.then == 'function'
          ? g.then((v) => h(null, v)).catch(h)
          : h(null, g)
      } catch (g) {
        h(g)
      }
      return
    }
    return f(e, n, h)
  }
  prepareLoading(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        i && i()
      )
    me(e) && (e = this.languageUtils.toResolveHierarchy(e)), me(n) && (n = [n])
    const o = this.queueLoad(e, n, r, i)
    if (!o.toLoad.length) return o.pending.length || i(), null
    o.toLoad.forEach((u) => {
      this.loadOne(u)
    })
  }
  load(e, n, r) {
    this.prepareLoading(e, n, {}, r)
  }
  reload(e, n, r) {
    this.prepareLoading(e, n, { reload: !0 }, r)
  }
  loadOne(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const r = e.split('|'),
      i = r[0],
      o = r[1]
    this.read(i, o, 'read', void 0, void 0, (u, h) => {
      u &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          u
        ),
        !u &&
          h &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, h),
        this.loaded(e, u, h)
    })
  }
  saveMissing(e, n, r, i, o) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      h =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {}
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      )
      return
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const f = { ...u, isUpdate: o },
          g = this.backend.create.bind(this.backend)
        if (g.length < 6)
          try {
            let v
            g.length === 5 ? (v = g(e, n, r, i, f)) : (v = g(e, n, r, i)),
              v && typeof v.then == 'function'
                ? v.then((E) => h(null, E)).catch(h)
                : h(null, v)
          } catch (v) {
            h(v)
          }
        else g(e, n, r, i, h, f)
      }
      !e || !e[0] || this.store.addResource(e[0], n, r, i)
    }
  }
}
const N1 = () => ({
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
    overloadTranslationOptionHandler: (t) => {
      let e = {}
      if (
        (typeof t[1] == 'object' && (e = t[1]),
        me(t[1]) && (e.defaultValue = t[1]),
        me(t[2]) && (e.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const n = t[3] || t[2]
        Object.keys(n).forEach((r) => {
          e[r] = n[r]
        })
      }
      return e
    },
    interpolation: {
      escapeValue: !0,
      format: (t) => t,
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
  L1 = (t) => (
    me(t.ns) && (t.ns = [t.ns]),
    me(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]),
    me(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]),
    t.supportedLngs &&
      t.supportedLngs.indexOf('cimode') < 0 &&
      (t.supportedLngs = t.supportedLngs.concat(['cimode'])),
    t
  ),
  sh = () => {},
  U4 = (t) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
      typeof t[n] == 'function' && (t[n] = t[n].bind(t))
    })
  }
class fl extends Uf {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = L1(e)),
      (this.services = {}),
      (this.logger = xr),
      (this.modules = { external: [] }),
      U4(this),
      n && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(e, n), this
      setTimeout(() => {
        this.init(e, n)
      }, 0)
    }
  }
  init() {
    var e = this
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0
    ;(this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (me(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]))
    const i = N1()
    ;(this.options = { ...i, ...this.options, ...L1(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator)
    const o = (v) => (v ? (typeof v == 'function' ? new v() : v) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? xr.init(o(this.modules.logger), this.options)
        : xr.init(null, this.options)
      let v
      this.modules.formatter
        ? (v = this.modules.formatter)
        : typeof Intl < 'u' && (v = M4)
      const E = new x1(this.options)
      this.store = new C1(this.options.resources, this.options)
      const _ = this.services
      ;(_.logger = xr),
        (_.resourceStore = this.store),
        (_.languageUtils = E),
        (_.pluralResolver = new O4(E, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        v &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((_.formatter = o(v)),
          _.formatter.init(_, this.options),
          (this.options.interpolation.format = _.formatter.format.bind(
            _.formatter
          ))),
        (_.interpolator = new D4(this.options)),
        (_.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (_.backendConnector = new F4(
          o(this.modules.backend),
          _.resourceStore,
          _,
          this.options
        )),
        _.backendConnector.on('*', function (L) {
          for (
            var b = arguments.length, B = new Array(b > 1 ? b - 1 : 0), j = 1;
            j < b;
            j++
          )
            B[j - 1] = arguments[j]
          e.emit(L, ...B)
        }),
        this.modules.languageDetector &&
          ((_.languageDetector = o(this.modules.languageDetector)),
          _.languageDetector.init &&
            _.languageDetector.init(_, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((_.i18nFormat = o(this.modules.i18nFormat)),
          _.i18nFormat.init && _.i18nFormat.init(this)),
        (this.translator = new cf(this.services, this.options)),
        this.translator.on('*', function (L) {
          for (
            var b = arguments.length, B = new Array(b > 1 ? b - 1 : 0), j = 1;
            j < b;
            j++
          )
            B[j - 1] = arguments[j]
          e.emit(L, ...B)
        }),
        this.modules.external.forEach((L) => {
          L.init && L.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = sh),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const v = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      )
      v.length > 0 && v[0] !== 'dev' && (this.options.lng = v[0])
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
      ].forEach((v) => {
        this[v] = function () {
          return e.store[v](...arguments)
        }
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((v) => {
        this[v] = function () {
          return e.store[v](...arguments), e
        }
      })
    const f = wu(),
      g = () => {
        const v = (E, _) => {
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
            f.resolve(_),
            r(E, _)
        }
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return v(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, v)
      }
    return (
      this.options.resources || !this.options.initImmediate
        ? g()
        : setTimeout(g, 0),
      f
    )
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : sh
    const i = me(e) ? e : this.language
    if (
      (typeof e == 'function' && (r = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r()
      const o = [],
        u = (h) => {
          if (!h || h === 'cimode') return
          this.services.languageUtils.toResolveHierarchy(h).forEach((g) => {
            g !== 'cimode' && o.indexOf(g) < 0 && o.push(g)
          })
        }
      i
        ? u(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((f) => u(f)),
        this.options.preload && this.options.preload.forEach((h) => u(h)),
        this.services.backendConnector.load(o, this.options.ns, (h) => {
          !h &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(h)
        })
    } else r(null)
  }
  reloadResources(e, n, r) {
    const i = wu()
    return (
      typeof e == 'function' && ((r = e), (e = void 0)),
      typeof n == 'function' && ((r = n), (n = void 0)),
      e || (e = this.languages),
      n || (n = this.options.ns),
      r || (r = sh),
      this.services.backendConnector.reload(e, n, (o) => {
        i.resolve(), r(o)
      }),
      i
    )
  }
  use(e) {
    if (!e)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      )
    if (!e.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      )
    return (
      e.type === 'backend' && (this.modules.backend = e),
      (e.type === 'logger' || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === 'languageDetector' && (this.modules.languageDetector = e),
      e.type === 'i18nFormat' && (this.modules.i18nFormat = e),
      e.type === 'postProcessor' && dS.addPostProcessor(e),
      e.type === 'formatter' && (this.modules.formatter = e),
      e.type === '3rdParty' && this.modules.external.push(e),
      this
    )
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(['cimode', 'dev'].indexOf(e) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n]
        if (
          !(['cimode', 'dev'].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r
          break
        }
      }
  }
  changeLanguage(e, n) {
    var r = this
    this.isLanguageChangingTo = e
    const i = wu()
    this.emit('languageChanging', e)
    const o = (f) => {
        ;(this.language = f),
          (this.languages = this.services.languageUtils.toResolveHierarchy(f)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(f)
      },
      u = (f, g) => {
        g
          ? (o(g),
            this.translator.changeLanguage(g),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', g),
            this.logger.log('languageChanged', g))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments)
          }),
          n &&
            n(f, function () {
              return r.t(...arguments)
            })
      },
      h = (f) => {
        !e && !f && this.services.languageDetector && (f = [])
        const g = me(f)
          ? f
          : this.services.languageUtils.getBestMatchFromCodes(f)
        g &&
          (this.language || o(g),
          this.translator.language || this.translator.changeLanguage(g),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(g)),
          this.loadResources(g, (v) => {
            u(v, g)
          })
      }
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? h(this.services.languageDetector.detect())
        : !e &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(h)
          : this.services.languageDetector.detect(h)
        : h(e),
      i
    )
  }
  getFixedT(e, n, r) {
    var i = this
    const o = function (u, h) {
      let f
      if (typeof h != 'object') {
        for (
          var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), E = 2;
          E < g;
          E++
        )
          v[E - 2] = arguments[E]
        f = i.options.overloadTranslationOptionHandler([u, h].concat(v))
      } else f = { ...h }
      ;(f.lng = f.lng || o.lng),
        (f.lngs = f.lngs || o.lngs),
        (f.ns = f.ns || o.ns),
        f.keyPrefix !== '' && (f.keyPrefix = f.keyPrefix || r || o.keyPrefix)
      const _ = i.options.keySeparator || '.'
      let L
      return (
        f.keyPrefix && Array.isArray(u)
          ? (L = u.map((b) => `${f.keyPrefix}${_}${b}`))
          : (L = f.keyPrefix ? `${f.keyPrefix}${_}${u}` : u),
        i.t(L, f)
      )
    }
    return me(e) ? (o.lng = e) : (o.lngs = e), (o.ns = n), (o.keyPrefix = r), o
  }
  t() {
    return this.translator && this.translator.translate(...arguments)
  }
  exists() {
    return this.translator && this.translator.exists(...arguments)
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e
  }
  hasLoadedNamespace(e) {
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
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1]
    if (r.toLowerCase() === 'cimode') return !0
    const u = (h, f) => {
      const g = this.services.backendConnector.state[`${h}|${f}`]
      return g === -1 || g === 0 || g === 2
    }
    if (n.precheck) {
      const h = n.precheck(this, u)
      if (h !== void 0) return h
    }
    return !!(
      this.hasResourceBundle(r, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (u(r, e) && (!i || u(o, e)))
    )
  }
  loadNamespaces(e, n) {
    const r = wu()
    return this.options.ns
      ? (me(e) && (e = [e]),
        e.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  loadLanguages(e, n) {
    const r = wu()
    me(e) && (e = [e])
    const i = this.options.preload || [],
      o = e.filter(
        (u) =>
          i.indexOf(u) < 0 && this.services.languageUtils.isSupportedCode(u)
      )
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((u) => {
          r.resolve(), n && n(u)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  dir(e) {
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !e)
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
      r = (this.services && this.services.languageUtils) || new x1(N1())
    return n.indexOf(r.getLanguagePartFromCode(e)) > -1 ||
      e.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    return new fl(e, n)
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : sh
    const r = e.forkResourceStore
    r && delete e.forkResourceStore
    const i = { ...this.options, ...e, isClone: !0 },
      o = new fl(i)
    return (
      (e.debug !== void 0 || e.prefix !== void 0) &&
        (o.logger = o.logger.clone(e)),
      ['store', 'services', 'language'].forEach((h) => {
        o[h] = this[h]
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new C1(this.store.data, i)),
        (o.services.resourceStore = o.store)),
      (o.translator = new cf(o.services, i)),
      o.translator.on('*', function (h) {
        for (
          var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), v = 1;
          v < f;
          v++
        )
          g[v - 1] = arguments[v]
        o.emit(h, ...g)
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
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
const Zt = fl.createInstance()
Zt.createInstance = fl.createInstance
Zt.createInstance
Zt.dir
Zt.init
Zt.loadResources
Zt.reloadResources
Zt.use
Zt.changeLanguage
Zt.getFixedT
Zt.t
Zt.exists
Zt.setDefaultNamespace
Zt.hasLoadedNamespace
Zt.loadNamespaces
Zt.loadLanguages
Zt.use(wN).init({
  resources: {
    en: {
      translation: {
        Services: 'Services',
        Blog: 'Blog',
        ContactUs: 'Contact Us',
        AboutUs: 'About Us',
        apply: 'Apply',
        loading: 'Loading...',
        requests: {
          errorOther: 'An error occurred.',
          errorEmailValidation:
            'Just enter a Gmail address (example: example@gmail.com).',
          errorEmailValidation2: 'The email address you entered is incorrect.',
          errorEmailLimited:
            'You can only send requests 2 times per day with this account.',
          successFormMessage:
            'Your request has been sent, we will get back to you as soon as possible.',
        },
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
        requests: {
          errorOther: 'Xəta baş verdi.',
          errorEmailValidation:
            'Yalnız Gmail ünvanı daxil edin (nümunə: example@gmail.com).',
          errorEmailValidation2: 'Daxil etdiyiniz email ünvanı düzgün deyil.',
          errorEmailLimited:
            'Bu hesabla gün ərzində yalnız 2 dəfə sorğu göndərə bilərsiniz.',
          successFormMessage:
            'Sorğunuz göndərildi, ən qısa zamanda sizə geri dönüş olacaq.',
        },
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
        requests: {
          errorOther: 'произошла ошибка',
          errorEmailValidation:
            'Просто введите адрес Gmail (например: example@gmail.com).',
          errorEmailValidation2:
            'Введенный вами адрес электронной почты неверен.',
          errorEmailLimited:
            'С помощью этой учетной записи вы можете отправлять запросы только 2 раза в день.',
          successFormMessage:
            'Ваш запрос отправлен, мы свяжемся с вами как можно скорее.',
        },
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
Lp.createRoot(document.getElementById('root')).render(
  pr.jsx($1.StrictMode, { children: pr.jsx(m4, {}) })
)
