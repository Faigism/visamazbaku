function CC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n]
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const s in i)
        if (s !== 'default' && !(s in e)) {
          const u = Object.getOwnPropertyDescriptor(i, s)
          u &&
            Object.defineProperty(
              e,
              s,
              u.get ? u : { enumerable: !0, get: () => i[s] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s)
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === 'childList')
        for (const f of u.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && i(f)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const u = {}
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    )
  }
  function i(s) {
    if (s.ep) return
    s.ep = !0
    const u = n(s)
    fetch(s.href, u)
  }
})()
var ll =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function kC(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var _v = { exports: {} },
  Lf = {},
  Sv = { exports: {} },
  we = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zl = Symbol.for('react.element'),
  TC = Symbol.for('react.portal'),
  AC = Symbol.for('react.fragment'),
  IC = Symbol.for('react.strict_mode'),
  PC = Symbol.for('react.profiler'),
  RC = Symbol.for('react.provider'),
  LC = Symbol.for('react.context'),
  OC = Symbol.for('react.forward_ref'),
  NC = Symbol.for('react.suspense'),
  DC = Symbol.for('react.memo'),
  MC = Symbol.for('react.lazy'),
  Pm = Symbol.iterator
function FC(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Pm && e[Pm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Ev = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xv = Object.assign,
  Cv = {}
function ms(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Cv),
    (this.updater = n || Ev)
}
ms.prototype.isReactComponent = {}
ms.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
ms.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function kv() {}
kv.prototype = ms.prototype
function $d(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Cv),
    (this.updater = n || Ev)
}
var bd = ($d.prototype = new kv())
bd.constructor = $d
xv(bd, ms.prototype)
bd.isPureReactComponent = !0
var Rm = Array.isArray,
  Tv = Object.prototype.hasOwnProperty,
  Hd = { current: null },
  Av = { key: !0, ref: !0, __self: !0, __source: !0 }
function Iv(e, t, n) {
  var i,
    s = {},
    u = null,
    f = null
  if (t != null)
    for (i in (t.ref !== void 0 && (f = t.ref),
    t.key !== void 0 && (u = '' + t.key),
    t))
      Tv.call(t, i) && !Av.hasOwnProperty(i) && (s[i] = t[i])
  var d = arguments.length - 2
  if (d === 1) s.children = n
  else if (1 < d) {
    for (var g = Array(d), y = 0; y < d; y++) g[y] = arguments[y + 2]
    s.children = g
  }
  if (e && e.defaultProps)
    for (i in ((d = e.defaultProps), d)) s[i] === void 0 && (s[i] = d[i])
  return { $$typeof: Zl, type: e, key: u, ref: f, props: s, _owner: Hd.current }
}
function zC(e, t) {
  return {
    $$typeof: Zl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function jd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zl
}
function UC(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Lm = /\/+/g
function oh(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? UC('' + e.key)
    : t.toString(36)
}
function Ua(e, t, n, i, s) {
  var u = typeof e
  ;(u === 'undefined' || u === 'boolean') && (e = null)
  var f = !1
  if (e === null) f = !0
  else
    switch (u) {
      case 'string':
      case 'number':
        f = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Zl:
          case TC:
            f = !0
        }
    }
  if (f)
    return (
      (f = e),
      (s = s(f)),
      (e = i === '' ? '.' + oh(f, 0) : i),
      Rm(s)
        ? ((n = ''),
          e != null && (n = e.replace(Lm, '$&/') + '/'),
          Ua(s, t, n, '', function (y) {
            return y
          }))
        : s != null &&
          (jd(s) &&
            (s = zC(
              s,
              n +
                (!s.key || (f && f.key === s.key)
                  ? ''
                  : ('' + s.key).replace(Lm, '$&/') + '/') +
                e
            )),
          t.push(s)),
      1
    )
  if (((f = 0), (i = i === '' ? '.' : i + ':'), Rm(e)))
    for (var d = 0; d < e.length; d++) {
      u = e[d]
      var g = i + oh(u, d)
      f += Ua(u, t, n, g, s)
    }
  else if (((g = FC(e)), typeof g == 'function'))
    for (e = g.call(e), d = 0; !(u = e.next()).done; )
      (u = u.value), (g = i + oh(u, d++)), (f += Ua(u, t, n, g, s))
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
  return f
}
function wa(e, t, n) {
  if (e == null) return e
  var i = [],
    s = 0
  return (
    Ua(e, i, '', '', function (u) {
      return t.call(n, u, s++)
    }),
    i
  )
}
function BC(e) {
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
var $t = { current: null },
  Ba = { transition: null },
  $C = {
    ReactCurrentDispatcher: $t,
    ReactCurrentBatchConfig: Ba,
    ReactCurrentOwner: Hd,
  }
we.Children = {
  map: wa,
  forEach: function (e, t, n) {
    wa(
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
      wa(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      wa(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!jd(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
we.Component = ms
we.Fragment = AC
we.Profiler = PC
we.PureComponent = $d
we.StrictMode = IC
we.Suspense = NC
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $C
we.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var i = xv({}, e.props),
    s = e.key,
    u = e.ref,
    f = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (f = Hd.current)),
      t.key !== void 0 && (s = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps
    for (g in t)
      Tv.call(t, g) &&
        !Av.hasOwnProperty(g) &&
        (i[g] = t[g] === void 0 && d !== void 0 ? d[g] : t[g])
  }
  var g = arguments.length - 2
  if (g === 1) i.children = n
  else if (1 < g) {
    d = Array(g)
    for (var y = 0; y < g; y++) d[y] = arguments[y + 2]
    i.children = d
  }
  return { $$typeof: Zl, type: e.type, key: s, ref: u, props: i, _owner: f }
}
we.createContext = function (e) {
  return (
    (e = {
      $$typeof: LC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: RC, _context: e }),
    (e.Consumer = e)
  )
}
we.createElement = Iv
we.createFactory = function (e) {
  var t = Iv.bind(null, e)
  return (t.type = e), t
}
we.createRef = function () {
  return { current: null }
}
we.forwardRef = function (e) {
  return { $$typeof: OC, render: e }
}
we.isValidElement = jd
we.lazy = function (e) {
  return { $$typeof: MC, _payload: { _status: -1, _result: e }, _init: BC }
}
we.memo = function (e, t) {
  return { $$typeof: DC, type: e, compare: t === void 0 ? null : t }
}
we.startTransition = function (e) {
  var t = Ba.transition
  Ba.transition = {}
  try {
    e()
  } finally {
    Ba.transition = t
  }
}
we.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
we.useCallback = function (e, t) {
  return $t.current.useCallback(e, t)
}
we.useContext = function (e) {
  return $t.current.useContext(e)
}
we.useDebugValue = function () {}
we.useDeferredValue = function (e) {
  return $t.current.useDeferredValue(e)
}
we.useEffect = function (e, t) {
  return $t.current.useEffect(e, t)
}
we.useId = function () {
  return $t.current.useId()
}
we.useImperativeHandle = function (e, t, n) {
  return $t.current.useImperativeHandle(e, t, n)
}
we.useInsertionEffect = function (e, t) {
  return $t.current.useInsertionEffect(e, t)
}
we.useLayoutEffect = function (e, t) {
  return $t.current.useLayoutEffect(e, t)
}
we.useMemo = function (e, t) {
  return $t.current.useMemo(e, t)
}
we.useReducer = function (e, t, n) {
  return $t.current.useReducer(e, t, n)
}
we.useRef = function (e) {
  return $t.current.useRef(e)
}
we.useState = function (e) {
  return $t.current.useState(e)
}
we.useSyncExternalStore = function (e, t, n) {
  return $t.current.useSyncExternalStore(e, t, n)
}
we.useTransition = function () {
  return $t.current.useTransition()
}
we.version = '18.2.0'
Sv.exports = we
var It = Sv.exports
const Pv = kC(It),
  bC = CC({ __proto__: null, default: Pv }, [It])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var HC = It,
  jC = Symbol.for('react.element'),
  VC = Symbol.for('react.fragment'),
  WC = Object.prototype.hasOwnProperty,
  KC = HC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  GC = { key: !0, ref: !0, __self: !0, __source: !0 }
function Rv(e, t, n) {
  var i,
    s = {},
    u = null,
    f = null
  n !== void 0 && (u = '' + n),
    t.key !== void 0 && (u = '' + t.key),
    t.ref !== void 0 && (f = t.ref)
  for (i in t) WC.call(t, i) && !GC.hasOwnProperty(i) && (s[i] = t[i])
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) s[i] === void 0 && (s[i] = t[i])
  return { $$typeof: jC, type: e, key: u, ref: f, props: s, _owner: KC.current }
}
Lf.Fragment = VC
Lf.jsx = Rv
Lf.jsxs = Rv
_v.exports = Lf
var oi = _v.exports,
  Uh = {},
  Lv = { exports: {} },
  hn = {},
  Ov = { exports: {} },
  Nv = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(Q, oe) {
    var se = Q.length
    Q.push(oe)
    e: for (; 0 < se; ) {
      var me = (se - 1) >>> 1,
        Re = Q[me]
      if (0 < s(Re, oe)) (Q[me] = oe), (Q[se] = Re), (se = me)
      else break e
    }
  }
  function n(Q) {
    return Q.length === 0 ? null : Q[0]
  }
  function i(Q) {
    if (Q.length === 0) return null
    var oe = Q[0],
      se = Q.pop()
    if (se !== oe) {
      Q[0] = se
      e: for (var me = 0, Re = Q.length, be = Re >>> 1; me < be; ) {
        var Ln = 2 * (me + 1) - 1,
          St = Q[Ln],
          Ht = Ln + 1,
          On = Q[Ht]
        if (0 > s(St, se))
          Ht < Re && 0 > s(On, St)
            ? ((Q[me] = On), (Q[Ht] = se), (me = Ht))
            : ((Q[me] = St), (Q[Ln] = se), (me = Ln))
        else if (Ht < Re && 0 > s(On, se)) (Q[me] = On), (Q[Ht] = se), (me = Ht)
        else break e
      }
    }
    return oe
  }
  function s(Q, oe) {
    var se = Q.sortIndex - oe.sortIndex
    return se !== 0 ? se : Q.id - oe.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var u = performance
    e.unstable_now = function () {
      return u.now()
    }
  } else {
    var f = Date,
      d = f.now()
    e.unstable_now = function () {
      return f.now() - d
    }
  }
  var g = [],
    y = [],
    P = 1,
    O = null,
    E = 3,
    B = !1,
    $ = !1,
    V = !1,
    q = typeof setTimeout == 'function' ? setTimeout : null,
    R = typeof clearTimeout == 'function' ? clearTimeout : null,
    k = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function N(Q) {
    for (var oe = n(y); oe !== null; ) {
      if (oe.callback === null) i(y)
      else if (oe.startTime <= Q)
        i(y), (oe.sortIndex = oe.expirationTime), t(g, oe)
      else break
      oe = n(y)
    }
  }
  function j(Q) {
    if (((V = !1), N(Q), !$))
      if (n(g) !== null) ($ = !0), pn(X)
      else {
        var oe = n(y)
        oe !== null && nt(j, oe.startTime - Q)
      }
  }
  function X(Q, oe) {
    ;($ = !1), V && ((V = !1), R(S), (S = -1)), (B = !0)
    var se = E
    try {
      for (
        N(oe), O = n(g);
        O !== null && (!(O.expirationTime > oe) || (Q && !D()));

      ) {
        var me = O.callback
        if (typeof me == 'function') {
          ;(O.callback = null), (E = O.priorityLevel)
          var Re = me(O.expirationTime <= oe)
          ;(oe = e.unstable_now()),
            typeof Re == 'function' ? (O.callback = Re) : O === n(g) && i(g),
            N(oe)
        } else i(g)
        O = n(g)
      }
      if (O !== null) var be = !0
      else {
        var Ln = n(y)
        Ln !== null && nt(j, Ln.startTime - oe), (be = !1)
      }
      return be
    } finally {
      ;(O = null), (E = se), (B = !1)
    }
  }
  var Z = !1,
    x = null,
    S = -1,
    T = 5,
    I = -1
  function D() {
    return !(e.unstable_now() - I < T)
  }
  function U() {
    if (x !== null) {
      var Q = e.unstable_now()
      I = Q
      var oe = !0
      try {
        oe = x(!0, Q)
      } finally {
        oe ? A() : ((Z = !1), (x = null))
      }
    } else Z = !1
  }
  var A
  if (typeof k == 'function')
    A = function () {
      k(U)
    }
  else if (typeof MessageChannel < 'u') {
    var Xe = new MessageChannel(),
      Lt = Xe.port2
    ;(Xe.port1.onmessage = U),
      (A = function () {
        Lt.postMessage(null)
      })
  } else
    A = function () {
      q(U, 0)
    }
  function pn(Q) {
    ;(x = Q), Z || ((Z = !0), A())
  }
  function nt(Q, oe) {
    S = q(function () {
      Q(e.unstable_now())
    }, oe)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (Q) {
      Q.callback = null
    }),
    (e.unstable_continueExecution = function () {
      $ || B || (($ = !0), pn(X))
    }),
    (e.unstable_forceFrameRate = function (Q) {
      0 > Q || 125 < Q
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < Q ? Math.floor(1e3 / Q) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return E
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(g)
    }),
    (e.unstable_next = function (Q) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var oe = 3
          break
        default:
          oe = E
      }
      var se = E
      E = oe
      try {
        return Q()
      } finally {
        E = se
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (Q, oe) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          Q = 3
      }
      var se = E
      E = Q
      try {
        return oe()
      } finally {
        E = se
      }
    }),
    (e.unstable_scheduleCallback = function (Q, oe, se) {
      var me = e.unstable_now()
      switch (
        (typeof se == 'object' && se !== null
          ? ((se = se.delay),
            (se = typeof se == 'number' && 0 < se ? me + se : me))
          : (se = me),
        Q)
      ) {
        case 1:
          var Re = -1
          break
        case 2:
          Re = 250
          break
        case 5:
          Re = 1073741823
          break
        case 4:
          Re = 1e4
          break
        default:
          Re = 5e3
      }
      return (
        (Re = se + Re),
        (Q = {
          id: P++,
          callback: oe,
          priorityLevel: Q,
          startTime: se,
          expirationTime: Re,
          sortIndex: -1,
        }),
        se > me
          ? ((Q.sortIndex = se),
            t(y, Q),
            n(g) === null &&
              Q === n(y) &&
              (V ? (R(S), (S = -1)) : (V = !0), nt(j, se - me)))
          : ((Q.sortIndex = Re), t(g, Q), $ || B || (($ = !0), pn(X))),
        Q
      )
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (Q) {
      var oe = E
      return function () {
        var se = E
        E = oe
        try {
          return Q.apply(this, arguments)
        } finally {
          E = se
        }
      }
    })
})(Nv)
Ov.exports = Nv
var qC = Ov.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dv = It,
  cn = qC
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
var Mv = new Set(),
  Nl = {}
function uo(e, t) {
  us(e, t), us(e + 'Capture', t)
}
function us(e, t) {
  for (Nl[e] = t, e = 0; e < t.length; e++) Mv.add(t[e])
}
var Rr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Bh = Object.prototype.hasOwnProperty,
  YC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Om = {},
  Nm = {}
function XC(e) {
  return Bh.call(Nm, e)
    ? !0
    : Bh.call(Om, e)
    ? !1
    : YC.test(e)
    ? (Nm[e] = !0)
    : ((Om[e] = !0), !1)
}
function QC(e, t, n, i) {
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
function JC(e, t, n, i) {
  if (t === null || typeof t > 'u' || QC(e, t, n, i)) return !0
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
function bt(e, t, n, i, s, u, f) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = f)
}
var _t = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    _t[e] = new bt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  _t[t] = new bt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  _t[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  _t[e] = new bt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    _t[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  _t[e] = new bt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  _t[e] = new bt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  _t[e] = new bt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  _t[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Vd = /[\-:]([a-z])/g
function Wd(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Vd, Wd)
    _t[t] = new bt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Vd, Wd)
    _t[t] = new bt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Vd, Wd)
  _t[t] = new bt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  _t[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
_t.xlinkHref = new bt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  _t[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Kd(e, t, n, i) {
  var s = _t.hasOwnProperty(t) ? _t[t] : null
  ;(s !== null
    ? s.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (JC(t, n, s, i) && (n = null),
    i || s === null
      ? XC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : '') : n)
      : ((t = s.attributeName),
        (i = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? '' : '' + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var Mr = Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _a = Symbol.for('react.element'),
  jo = Symbol.for('react.portal'),
  Vo = Symbol.for('react.fragment'),
  Gd = Symbol.for('react.strict_mode'),
  $h = Symbol.for('react.profiler'),
  Fv = Symbol.for('react.provider'),
  zv = Symbol.for('react.context'),
  qd = Symbol.for('react.forward_ref'),
  bh = Symbol.for('react.suspense'),
  Hh = Symbol.for('react.suspense_list'),
  Yd = Symbol.for('react.memo'),
  ti = Symbol.for('react.lazy'),
  Uv = Symbol.for('react.offscreen'),
  Dm = Symbol.iterator
function ul(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Dm && e[Dm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Ke = Object.assign,
  sh
function vl(e) {
  if (sh === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      sh = (t && t[1]) || ''
    }
  return (
    `
` +
    sh +
    e
  )
}
var lh = !1
function uh(e, t) {
  if (!e || lh) return ''
  lh = !0
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
        } catch (y) {
          var i = y
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (y) {
          i = y
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (y) {
        i = y
      }
      e()
    }
  } catch (y) {
    if (y && i && typeof y.stack == 'string') {
      for (
        var s = y.stack.split(`
`),
          u = i.stack.split(`
`),
          f = s.length - 1,
          d = u.length - 1;
        1 <= f && 0 <= d && s[f] !== u[d];

      )
        d--
      for (; 1 <= f && 0 <= d; f--, d--)
        if (s[f] !== u[d]) {
          if (f !== 1 || d !== 1)
            do
              if ((f--, d--, 0 > d || s[f] !== u[d])) {
                var g =
                  `
` + s[f].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    g.includes('<anonymous>') &&
                    (g = g.replace('<anonymous>', e.displayName)),
                  g
                )
              }
            while (1 <= f && 0 <= d)
          break
        }
    }
  } finally {
    ;(lh = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? vl(e) : ''
}
function ZC(e) {
  switch (e.tag) {
    case 5:
      return vl(e.type)
    case 16:
      return vl('Lazy')
    case 13:
      return vl('Suspense')
    case 19:
      return vl('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = uh(e.type, !1)), e
    case 11:
      return (e = uh(e.type.render, !1)), e
    case 1:
      return (e = uh(e.type, !0)), e
    default:
      return ''
  }
}
function jh(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Vo:
      return 'Fragment'
    case jo:
      return 'Portal'
    case $h:
      return 'Profiler'
    case Gd:
      return 'StrictMode'
    case bh:
      return 'Suspense'
    case Hh:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case zv:
        return (e.displayName || 'Context') + '.Consumer'
      case Fv:
        return (e._context.displayName || 'Context') + '.Provider'
      case qd:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Yd:
        return (
          (t = e.displayName || null), t !== null ? t : jh(e.type) || 'Memo'
        )
      case ti:
        ;(t = e._payload), (e = e._init)
        try {
          return jh(e(t))
        } catch {}
    }
  return null
}
function ek(e) {
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
      return jh(t)
    case 8:
      return t === Gd ? 'StrictMode' : 'Mode'
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
function yi(e) {
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
function Bv(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function tk(e) {
  var t = Bv(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var s = n.get,
      u = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this)
        },
        set: function (f) {
          ;(i = '' + f), u.call(this, f)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i
        },
        setValue: function (f) {
          i = '' + f
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Sa(e) {
  e._valueTracker || (e._valueTracker = tk(e))
}
function $v(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    i = ''
  return (
    e && (i = Bv(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Xa(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Vh(e, t) {
  var n = t.checked
  return Ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Mm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked
  ;(n = yi(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function bv(e, t) {
  ;(t = t.checked), t != null && Kd(e, 'checked', t, !1)
}
function Wh(e, t) {
  bv(e, t)
  var n = yi(t.value),
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
    ? Kh(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Kh(e, t.type, yi(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Fm(e, t, n) {
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
function Kh(e, t, n) {
  ;(t !== 'number' || Xa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var yl = Array.isArray
function ts(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {}
    for (var s = 0; s < n.length; s++) t['$' + n[s]] = !0
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && i && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + yi(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ;(e[s].selected = !0), i && (e[s].defaultSelected = !0)
        return
      }
      t !== null || e[s].disabled || (t = e[s])
    }
    t !== null && (t.selected = !0)
  }
}
function Gh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(J(91))
  return Ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function zm(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(J(92))
      if (yl(n)) {
        if (1 < n.length) throw Error(J(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: yi(n) }
}
function Hv(e, t) {
  var n = yi(t.value),
    i = yi(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = '' + i)
}
function Um(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function jv(e) {
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
    ? jv(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Ea,
  Vv = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, s)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Ea = Ea || document.createElement('div'),
          Ea.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ea.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Dl(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Sl = {
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
  nk = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Sl).forEach(function (e) {
  nk.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sl[t] = Sl[e])
  })
})
function Wv(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Sl.hasOwnProperty(e) && Sl[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Kv(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf('--') === 0,
        s = Wv(n, t[n], i)
      n === 'float' && (n = 'cssFloat'), i ? e.setProperty(n, s) : (e[n] = s)
    }
}
var rk = Ke(
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
function Yh(e, t) {
  if (t) {
    if (rk[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Xh(e, t) {
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
var Qh = null
function Xd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Jh = null,
  ns = null,
  rs = null
function Bm(e) {
  if ((e = nu(e))) {
    if (typeof Jh != 'function') throw Error(J(280))
    var t = e.stateNode
    t && ((t = Ff(t)), Jh(e.stateNode, e.type, t))
  }
}
function Gv(e) {
  ns ? (rs ? rs.push(e) : (rs = [e])) : (ns = e)
}
function qv() {
  if (ns) {
    var e = ns,
      t = rs
    if (((rs = ns = null), Bm(e), t)) for (e = 0; e < t.length; e++) Bm(t[e])
  }
}
function Yv(e, t) {
  return e(t)
}
function Xv() {}
var ah = !1
function Qv(e, t, n) {
  if (ah) return e(t, n)
  ah = !0
  try {
    return Yv(e, t, n)
  } finally {
    ;(ah = !1), (ns !== null || rs !== null) && (Xv(), qv())
  }
}
function Ml(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var i = Ff(n)
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
var Zh = !1
if (Rr)
  try {
    var al = {}
    Object.defineProperty(al, 'passive', {
      get: function () {
        Zh = !0
      },
    }),
      window.addEventListener('test', al, al),
      window.removeEventListener('test', al, al)
  } catch {
    Zh = !1
  }
function ik(e, t, n, i, s, u, f, d, g) {
  var y = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, y)
  } catch (P) {
    this.onError(P)
  }
}
var El = !1,
  Qa = null,
  Ja = !1,
  ed = null,
  ok = {
    onError: function (e) {
      ;(El = !0), (Qa = e)
    },
  }
function sk(e, t, n, i, s, u, f, d, g) {
  ;(El = !1), (Qa = null), ik.apply(ok, arguments)
}
function lk(e, t, n, i, s, u, f, d, g) {
  if ((sk.apply(this, arguments), El)) {
    if (El) {
      var y = Qa
      ;(El = !1), (Qa = null)
    } else throw Error(J(198))
    Ja || ((Ja = !0), (ed = y))
  }
}
function ao(e) {
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
function Jv(e) {
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
function $m(e) {
  if (ao(e) !== e) throw Error(J(188))
}
function uk(e) {
  var t = e.alternate
  if (!t) {
    if (((t = ao(e)), t === null)) throw Error(J(188))
    return t !== e ? null : e
  }
  for (var n = e, i = t; ; ) {
    var s = n.return
    if (s === null) break
    var u = s.alternate
    if (u === null) {
      if (((i = s.return), i !== null)) {
        n = i
        continue
      }
      break
    }
    if (s.child === u.child) {
      for (u = s.child; u; ) {
        if (u === n) return $m(s), e
        if (u === i) return $m(s), t
        u = u.sibling
      }
      throw Error(J(188))
    }
    if (n.return !== i.return) (n = s), (i = u)
    else {
      for (var f = !1, d = s.child; d; ) {
        if (d === n) {
          ;(f = !0), (n = s), (i = u)
          break
        }
        if (d === i) {
          ;(f = !0), (i = s), (n = u)
          break
        }
        d = d.sibling
      }
      if (!f) {
        for (d = u.child; d; ) {
          if (d === n) {
            ;(f = !0), (n = u), (i = s)
            break
          }
          if (d === i) {
            ;(f = !0), (i = u), (n = s)
            break
          }
          d = d.sibling
        }
        if (!f) throw Error(J(189))
      }
    }
    if (n.alternate !== i) throw Error(J(190))
  }
  if (n.tag !== 3) throw Error(J(188))
  return n.stateNode.current === n ? e : t
}
function Zv(e) {
  return (e = uk(e)), e !== null ? e1(e) : null
}
function e1(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = e1(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var t1 = cn.unstable_scheduleCallback,
  bm = cn.unstable_cancelCallback,
  ak = cn.unstable_shouldYield,
  fk = cn.unstable_requestPaint,
  tt = cn.unstable_now,
  ck = cn.unstable_getCurrentPriorityLevel,
  Qd = cn.unstable_ImmediatePriority,
  n1 = cn.unstable_UserBlockingPriority,
  Za = cn.unstable_NormalPriority,
  hk = cn.unstable_LowPriority,
  r1 = cn.unstable_IdlePriority,
  Of = null,
  sr = null
function dk(e) {
  if (sr && typeof sr.onCommitFiberRoot == 'function')
    try {
      sr.onCommitFiberRoot(Of, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Kn = Math.clz32 ? Math.clz32 : mk,
  pk = Math.log,
  gk = Math.LN2
function mk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pk(e) / gk) | 0)) | 0
}
var xa = 64,
  Ca = 4194304
function wl(e) {
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
function ef(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var i = 0,
    s = e.suspendedLanes,
    u = e.pingedLanes,
    f = n & 268435455
  if (f !== 0) {
    var d = f & ~s
    d !== 0 ? (i = wl(d)) : ((u &= f), u !== 0 && (i = wl(u)))
  } else (f = n & ~s), f !== 0 ? (i = wl(f)) : u !== 0 && (i = wl(u))
  if (i === 0) return 0
  if (
    t !== 0 &&
    t !== i &&
    !(t & s) &&
    ((s = i & -i), (u = t & -t), s >= u || (s === 16 && (u & 4194240) !== 0))
  )
    return t
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - Kn(t)), (s = 1 << n), (i |= e[n]), (t &= ~s)
  return i
}
function vk(e, t) {
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
function yk(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      s = e.expirationTimes,
      u = e.pendingLanes;
    0 < u;

  ) {
    var f = 31 - Kn(u),
      d = 1 << f,
      g = s[f]
    g === -1
      ? (!(d & n) || d & i) && (s[f] = vk(d, t))
      : g <= t && (e.expiredLanes |= d),
      (u &= ~d)
  }
}
function td(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function i1() {
  var e = xa
  return (xa <<= 1), !(xa & 4194240) && (xa = 64), e
}
function fh(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function eu(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Kn(t)),
    (e[t] = n)
}
function wk(e, t) {
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
    var s = 31 - Kn(n),
      u = 1 << s
    ;(t[s] = 0), (i[s] = -1), (e[s] = -1), (n &= ~u)
  }
}
function Jd(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var i = 31 - Kn(n),
      s = 1 << i
    ;(s & t) | (e[i] & t) && (e[i] |= t), (n &= ~s)
  }
}
var Oe = 0
function o1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var s1,
  Zd,
  l1,
  u1,
  a1,
  nd = !1,
  ka = [],
  ui = null,
  ai = null,
  fi = null,
  Fl = new Map(),
  zl = new Map(),
  ri = [],
  _k =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Hm(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ui = null
      break
    case 'dragenter':
    case 'dragleave':
      ai = null
      break
    case 'mouseover':
    case 'mouseout':
      fi = null
      break
    case 'pointerover':
    case 'pointerout':
      Fl.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      zl.delete(t.pointerId)
  }
}
function fl(e, t, n, i, s, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [s],
      }),
      t !== null && ((t = nu(t)), t !== null && Zd(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e)
}
function Sk(e, t, n, i, s) {
  switch (t) {
    case 'focusin':
      return (ui = fl(ui, e, t, n, i, s)), !0
    case 'dragenter':
      return (ai = fl(ai, e, t, n, i, s)), !0
    case 'mouseover':
      return (fi = fl(fi, e, t, n, i, s)), !0
    case 'pointerover':
      var u = s.pointerId
      return Fl.set(u, fl(Fl.get(u) || null, e, t, n, i, s)), !0
    case 'gotpointercapture':
      return (
        (u = s.pointerId), zl.set(u, fl(zl.get(u) || null, e, t, n, i, s)), !0
      )
  }
  return !1
}
function f1(e) {
  var t = Qi(e.target)
  if (t !== null) {
    var n = ao(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jv(n)), t !== null)) {
          ;(e.blockedOn = t),
            a1(e.priority, function () {
              l1(n)
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
function $a(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var i = new n.constructor(n.type, n)
      ;(Qh = i), n.target.dispatchEvent(i), (Qh = null)
    } else return (t = nu(n)), t !== null && Zd(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function jm(e, t, n) {
  $a(e) && n.delete(t)
}
function Ek() {
  ;(nd = !1),
    ui !== null && $a(ui) && (ui = null),
    ai !== null && $a(ai) && (ai = null),
    fi !== null && $a(fi) && (fi = null),
    Fl.forEach(jm),
    zl.forEach(jm)
}
function cl(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nd ||
      ((nd = !0), cn.unstable_scheduleCallback(cn.unstable_NormalPriority, Ek)))
}
function Ul(e) {
  function t(s) {
    return cl(s, e)
  }
  if (0 < ka.length) {
    cl(ka[0], e)
    for (var n = 1; n < ka.length; n++) {
      var i = ka[n]
      i.blockedOn === e && (i.blockedOn = null)
    }
  }
  for (
    ui !== null && cl(ui, e),
      ai !== null && cl(ai, e),
      fi !== null && cl(fi, e),
      Fl.forEach(t),
      zl.forEach(t),
      n = 0;
    n < ri.length;
    n++
  )
    (i = ri[n]), i.blockedOn === e && (i.blockedOn = null)
  for (; 0 < ri.length && ((n = ri[0]), n.blockedOn === null); )
    f1(n), n.blockedOn === null && ri.shift()
}
var is = Mr.ReactCurrentBatchConfig,
  tf = !0
function xk(e, t, n, i) {
  var s = Oe,
    u = is.transition
  is.transition = null
  try {
    ;(Oe = 1), ep(e, t, n, i)
  } finally {
    ;(Oe = s), (is.transition = u)
  }
}
function Ck(e, t, n, i) {
  var s = Oe,
    u = is.transition
  is.transition = null
  try {
    ;(Oe = 4), ep(e, t, n, i)
  } finally {
    ;(Oe = s), (is.transition = u)
  }
}
function ep(e, t, n, i) {
  if (tf) {
    var s = rd(e, t, n, i)
    if (s === null) _h(e, t, i, nf, n), Hm(e, i)
    else if (Sk(s, e, t, n, i)) i.stopPropagation()
    else if ((Hm(e, i), t & 4 && -1 < _k.indexOf(e))) {
      for (; s !== null; ) {
        var u = nu(s)
        if (
          (u !== null && s1(u),
          (u = rd(e, t, n, i)),
          u === null && _h(e, t, i, nf, n),
          u === s)
        )
          break
        s = u
      }
      s !== null && i.stopPropagation()
    } else _h(e, t, i, null, n)
  }
}
var nf = null
function rd(e, t, n, i) {
  if (((nf = null), (e = Xd(i)), (e = Qi(e)), e !== null))
    if (((t = ao(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Jv(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (nf = e), null
}
function c1(e) {
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
      switch (ck()) {
        case Qd:
          return 1
        case n1:
          return 4
        case Za:
        case hk:
          return 16
        case r1:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var si = null,
  tp = null,
  ba = null
function h1() {
  if (ba) return ba
  var e,
    t = tp,
    n = t.length,
    i,
    s = 'value' in si ? si.value : si.textContent,
    u = s.length
  for (e = 0; e < n && t[e] === s[e]; e++);
  var f = n - e
  for (i = 1; i <= f && t[n - i] === s[u - i]; i++);
  return (ba = s.slice(e, 1 < i ? 1 - i : void 0))
}
function Ha(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ta() {
  return !0
}
function Vm() {
  return !1
}
function dn(e) {
  function t(n, i, s, u, f) {
    ;(this._reactName = n),
      (this._targetInst = s),
      (this.type = i),
      (this.nativeEvent = u),
      (this.target = f),
      (this.currentTarget = null)
    for (var d in e)
      e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(u) : u[d]))
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? Ta
        : Vm),
      (this.isPropagationStopped = Vm),
      this
    )
  }
  return (
    Ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ta))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ta))
      },
      persist: function () {},
      isPersistent: Ta,
    }),
    t
  )
}
var vs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  np = dn(vs),
  tu = Ke({}, vs, { view: 0, detail: 0 }),
  kk = dn(tu),
  ch,
  hh,
  hl,
  Nf = Ke({}, tu, {
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
    getModifierState: rp,
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
        : (e !== hl &&
            (hl && e.type === 'mousemove'
              ? ((ch = e.screenX - hl.screenX), (hh = e.screenY - hl.screenY))
              : (hh = ch = 0),
            (hl = e)),
          ch)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : hh
    },
  }),
  Wm = dn(Nf),
  Tk = Ke({}, Nf, { dataTransfer: 0 }),
  Ak = dn(Tk),
  Ik = Ke({}, tu, { relatedTarget: 0 }),
  dh = dn(Ik),
  Pk = Ke({}, vs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rk = dn(Pk),
  Lk = Ke({}, vs, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Ok = dn(Lk),
  Nk = Ke({}, vs, { data: 0 }),
  Km = dn(Nk),
  Dk = {
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
  Mk = {
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
  Fk = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function zk(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Fk[e]) ? !!t[e] : !1
}
function rp() {
  return zk
}
var Uk = Ke({}, tu, {
    key: function (e) {
      if (e.key) {
        var t = Dk[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Ha(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Mk[e.keyCode] || 'Unidentified'
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
    getModifierState: rp,
    charCode: function (e) {
      return e.type === 'keypress' ? Ha(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ha(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Bk = dn(Uk),
  $k = Ke({}, Nf, {
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
  Gm = dn($k),
  bk = Ke({}, tu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rp,
  }),
  Hk = dn(bk),
  jk = Ke({}, vs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vk = dn(jk),
  Wk = Ke({}, Nf, {
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
  Kk = dn(Wk),
  Gk = [9, 13, 27, 32],
  ip = Rr && 'CompositionEvent' in window,
  xl = null
Rr && 'documentMode' in document && (xl = document.documentMode)
var qk = Rr && 'TextEvent' in window && !xl,
  d1 = Rr && (!ip || (xl && 8 < xl && 11 >= xl)),
  qm = ' ',
  Ym = !1
function p1(e, t) {
  switch (e) {
    case 'keyup':
      return Gk.indexOf(t.keyCode) !== -1
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
function g1(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Wo = !1
function Yk(e, t) {
  switch (e) {
    case 'compositionend':
      return g1(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Ym = !0), qm)
    case 'textInput':
      return (e = t.data), e === qm && Ym ? null : e
    default:
      return null
  }
}
function Xk(e, t) {
  if (Wo)
    return e === 'compositionend' || (!ip && p1(e, t))
      ? ((e = h1()), (ba = tp = si = null), (Wo = !1), e)
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
      return d1 && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Qk = {
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
function Xm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Qk[e.type] : t === 'textarea'
}
function m1(e, t, n, i) {
  Gv(i),
    (t = rf(t, 'onChange')),
    0 < t.length &&
      ((n = new np('onChange', 'change', null, n, i)),
      e.push({ event: n, listeners: t }))
}
var Cl = null,
  Bl = null
function Jk(e) {
  A1(e, 0)
}
function Df(e) {
  var t = qo(e)
  if ($v(t)) return e
}
function Zk(e, t) {
  if (e === 'change') return t
}
var v1 = !1
if (Rr) {
  var ph
  if (Rr) {
    var gh = 'oninput' in document
    if (!gh) {
      var Qm = document.createElement('div')
      Qm.setAttribute('oninput', 'return;'),
        (gh = typeof Qm.oninput == 'function')
    }
    ph = gh
  } else ph = !1
  v1 = ph && (!document.documentMode || 9 < document.documentMode)
}
function Jm() {
  Cl && (Cl.detachEvent('onpropertychange', y1), (Bl = Cl = null))
}
function y1(e) {
  if (e.propertyName === 'value' && Df(Bl)) {
    var t = []
    m1(t, Bl, e, Xd(e)), Qv(Jk, t)
  }
}
function eT(e, t, n) {
  e === 'focusin'
    ? (Jm(), (Cl = t), (Bl = n), Cl.attachEvent('onpropertychange', y1))
    : e === 'focusout' && Jm()
}
function tT(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Df(Bl)
}
function nT(e, t) {
  if (e === 'click') return Df(t)
}
function rT(e, t) {
  if (e === 'input' || e === 'change') return Df(t)
}
function iT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var qn = typeof Object.is == 'function' ? Object.is : iT
function $l(e, t) {
  if (qn(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    i = Object.keys(t)
  if (n.length !== i.length) return !1
  for (i = 0; i < n.length; i++) {
    var s = n[i]
    if (!Bh.call(t, s) || !qn(e[s], t[s])) return !1
  }
  return !0
}
function Zm(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function e0(e, t) {
  var n = Zm(e)
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
    n = Zm(n)
  }
}
function w1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? w1(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function _1() {
  for (var e = window, t = Xa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Xa(e.document)
  }
  return t
}
function op(e) {
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
function oT(e) {
  var t = _1(),
    n = e.focusedElem,
    i = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    w1(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && op(n)) {
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
        var s = n.textContent.length,
          u = Math.min(i.start, s)
        ;(i = i.end === void 0 ? u : Math.min(i.end, s)),
          !e.extend && u > i && ((s = i), (i = u), (u = s)),
          (s = e0(n, u))
        var f = e0(n, i)
        s &&
          f &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== f.node ||
            e.focusOffset !== f.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          u > i
            ? (e.addRange(t), e.extend(f.node, f.offset))
            : (t.setEnd(f.node, f.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var sT = Rr && 'documentMode' in document && 11 >= document.documentMode,
  Ko = null,
  id = null,
  kl = null,
  od = !1
function t0(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  od ||
    Ko == null ||
    Ko !== Xa(i) ||
    ((i = Ko),
    'selectionStart' in i && op(i)
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
    (kl && $l(kl, i)) ||
      ((kl = i),
      (i = rf(id, 'onSelect')),
      0 < i.length &&
        ((t = new np('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Ko))))
}
function Aa(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Go = {
    animationend: Aa('Animation', 'AnimationEnd'),
    animationiteration: Aa('Animation', 'AnimationIteration'),
    animationstart: Aa('Animation', 'AnimationStart'),
    transitionend: Aa('Transition', 'TransitionEnd'),
  },
  mh = {},
  S1 = {}
Rr &&
  ((S1 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Go.animationend.animation,
    delete Go.animationiteration.animation,
    delete Go.animationstart.animation),
  'TransitionEvent' in window || delete Go.transitionend.transition)
function Mf(e) {
  if (mh[e]) return mh[e]
  if (!Go[e]) return e
  var t = Go[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in S1) return (mh[e] = t[n])
  return e
}
var E1 = Mf('animationend'),
  x1 = Mf('animationiteration'),
  C1 = Mf('animationstart'),
  k1 = Mf('transitionend'),
  T1 = new Map(),
  n0 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function _i(e, t) {
  T1.set(e, t), uo(t, [e])
}
for (var vh = 0; vh < n0.length; vh++) {
  var yh = n0[vh],
    lT = yh.toLowerCase(),
    uT = yh[0].toUpperCase() + yh.slice(1)
  _i(lT, 'on' + uT)
}
_i(E1, 'onAnimationEnd')
_i(x1, 'onAnimationIteration')
_i(C1, 'onAnimationStart')
_i('dblclick', 'onDoubleClick')
_i('focusin', 'onFocus')
_i('focusout', 'onBlur')
_i(k1, 'onTransitionEnd')
us('onMouseEnter', ['mouseout', 'mouseover'])
us('onMouseLeave', ['mouseout', 'mouseover'])
us('onPointerEnter', ['pointerout', 'pointerover'])
us('onPointerLeave', ['pointerout', 'pointerover'])
uo(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
uo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
uo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
uo(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
uo(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
uo(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var _l =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  aT = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_l))
function r0(e, t, n) {
  var i = e.type || 'unknown-event'
  ;(e.currentTarget = n), lk(i, t, void 0, e), (e.currentTarget = null)
}
function A1(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      s = i.event
    i = i.listeners
    e: {
      var u = void 0
      if (t)
        for (var f = i.length - 1; 0 <= f; f--) {
          var d = i[f],
            g = d.instance,
            y = d.currentTarget
          if (((d = d.listener), g !== u && s.isPropagationStopped())) break e
          r0(s, d, y), (u = g)
        }
      else
        for (f = 0; f < i.length; f++) {
          if (
            ((d = i[f]),
            (g = d.instance),
            (y = d.currentTarget),
            (d = d.listener),
            g !== u && s.isPropagationStopped())
          )
            break e
          r0(s, d, y), (u = g)
        }
    }
  }
  if (Ja) throw ((e = ed), (Ja = !1), (ed = null), e)
}
function Ue(e, t) {
  var n = t[fd]
  n === void 0 && (n = t[fd] = new Set())
  var i = e + '__bubble'
  n.has(i) || (I1(t, e, 2, !1), n.add(i))
}
function wh(e, t, n) {
  var i = 0
  t && (i |= 4), I1(n, e, i, t)
}
var Ia = '_reactListening' + Math.random().toString(36).slice(2)
function bl(e) {
  if (!e[Ia]) {
    ;(e[Ia] = !0),
      Mv.forEach(function (n) {
        n !== 'selectionchange' && (aT.has(n) || wh(n, !1, e), wh(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ia] || ((t[Ia] = !0), wh('selectionchange', !1, t))
  }
}
function I1(e, t, n, i) {
  switch (c1(t)) {
    case 1:
      var s = xk
      break
    case 4:
      s = Ck
      break
    default:
      s = ep
  }
  ;(n = s.bind(null, t, n, e)),
    (s = void 0),
    !Zh ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (s = !0),
    i
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1)
}
function _h(e, t, n, i, s) {
  var u = i
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return
      var f = i.tag
      if (f === 3 || f === 4) {
        var d = i.stateNode.containerInfo
        if (d === s || (d.nodeType === 8 && d.parentNode === s)) break
        if (f === 4)
          for (f = i.return; f !== null; ) {
            var g = f.tag
            if (
              (g === 3 || g === 4) &&
              ((g = f.stateNode.containerInfo),
              g === s || (g.nodeType === 8 && g.parentNode === s))
            )
              return
            f = f.return
          }
        for (; d !== null; ) {
          if (((f = Qi(d)), f === null)) return
          if (((g = f.tag), g === 5 || g === 6)) {
            i = u = f
            continue e
          }
          d = d.parentNode
        }
      }
      i = i.return
    }
  Qv(function () {
    var y = u,
      P = Xd(n),
      O = []
    e: {
      var E = T1.get(e)
      if (E !== void 0) {
        var B = np,
          $ = e
        switch (e) {
          case 'keypress':
            if (Ha(n) === 0) break e
          case 'keydown':
          case 'keyup':
            B = Bk
            break
          case 'focusin':
            ;($ = 'focus'), (B = dh)
            break
          case 'focusout':
            ;($ = 'blur'), (B = dh)
            break
          case 'beforeblur':
          case 'afterblur':
            B = dh
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
            B = Wm
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            B = Ak
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            B = Hk
            break
          case E1:
          case x1:
          case C1:
            B = Rk
            break
          case k1:
            B = Vk
            break
          case 'scroll':
            B = kk
            break
          case 'wheel':
            B = Kk
            break
          case 'copy':
          case 'cut':
          case 'paste':
            B = Ok
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            B = Gm
        }
        var V = (t & 4) !== 0,
          q = !V && e === 'scroll',
          R = V ? (E !== null ? E + 'Capture' : null) : E
        V = []
        for (var k = y, N; k !== null; ) {
          N = k
          var j = N.stateNode
          if (
            (N.tag === 5 &&
              j !== null &&
              ((N = j),
              R !== null && ((j = Ml(k, R)), j != null && V.push(Hl(k, j, N)))),
            q)
          )
            break
          k = k.return
        }
        0 < V.length &&
          ((E = new B(E, $, null, n, P)), O.push({ event: E, listeners: V }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((E = e === 'mouseover' || e === 'pointerover'),
          (B = e === 'mouseout' || e === 'pointerout'),
          E &&
            n !== Qh &&
            ($ = n.relatedTarget || n.fromElement) &&
            (Qi($) || $[Lr]))
        )
          break e
        if (
          (B || E) &&
          ((E =
            P.window === P
              ? P
              : (E = P.ownerDocument)
              ? E.defaultView || E.parentWindow
              : window),
          B
            ? (($ = n.relatedTarget || n.toElement),
              (B = y),
              ($ = $ ? Qi($) : null),
              $ !== null &&
                ((q = ao($)), $ !== q || ($.tag !== 5 && $.tag !== 6)) &&
                ($ = null))
            : ((B = null), ($ = y)),
          B !== $)
        ) {
          if (
            ((V = Wm),
            (j = 'onMouseLeave'),
            (R = 'onMouseEnter'),
            (k = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((V = Gm),
              (j = 'onPointerLeave'),
              (R = 'onPointerEnter'),
              (k = 'pointer')),
            (q = B == null ? E : qo(B)),
            (N = $ == null ? E : qo($)),
            (E = new V(j, k + 'leave', B, n, P)),
            (E.target = q),
            (E.relatedTarget = N),
            (j = null),
            Qi(P) === y &&
              ((V = new V(R, k + 'enter', $, n, P)),
              (V.target = N),
              (V.relatedTarget = q),
              (j = V)),
            (q = j),
            B && $)
          )
            t: {
              for (V = B, R = $, k = 0, N = V; N; N = $o(N)) k++
              for (N = 0, j = R; j; j = $o(j)) N++
              for (; 0 < k - N; ) (V = $o(V)), k--
              for (; 0 < N - k; ) (R = $o(R)), N--
              for (; k--; ) {
                if (V === R || (R !== null && V === R.alternate)) break t
                ;(V = $o(V)), (R = $o(R))
              }
              V = null
            }
          else V = null
          B !== null && i0(O, E, B, V, !1),
            $ !== null && q !== null && i0(O, q, $, V, !0)
        }
      }
      e: {
        if (
          ((E = y ? qo(y) : window),
          (B = E.nodeName && E.nodeName.toLowerCase()),
          B === 'select' || (B === 'input' && E.type === 'file'))
        )
          var X = Zk
        else if (Xm(E))
          if (v1) X = rT
          else {
            X = tT
            var Z = eT
          }
        else
          (B = E.nodeName) &&
            B.toLowerCase() === 'input' &&
            (E.type === 'checkbox' || E.type === 'radio') &&
            (X = nT)
        if (X && (X = X(e, y))) {
          m1(O, X, n, P)
          break e
        }
        Z && Z(e, E, y),
          e === 'focusout' &&
            (Z = E._wrapperState) &&
            Z.controlled &&
            E.type === 'number' &&
            Kh(E, 'number', E.value)
      }
      switch (((Z = y ? qo(y) : window), e)) {
        case 'focusin':
          ;(Xm(Z) || Z.contentEditable === 'true') &&
            ((Ko = Z), (id = y), (kl = null))
          break
        case 'focusout':
          kl = id = Ko = null
          break
        case 'mousedown':
          od = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(od = !1), t0(O, n, P)
          break
        case 'selectionchange':
          if (sT) break
        case 'keydown':
        case 'keyup':
          t0(O, n, P)
      }
      var x
      if (ip)
        e: {
          switch (e) {
            case 'compositionstart':
              var S = 'onCompositionStart'
              break e
            case 'compositionend':
              S = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              S = 'onCompositionUpdate'
              break e
          }
          S = void 0
        }
      else
        Wo
          ? p1(e, n) && (S = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (S = 'onCompositionStart')
      S &&
        (d1 &&
          n.locale !== 'ko' &&
          (Wo || S !== 'onCompositionStart'
            ? S === 'onCompositionEnd' && Wo && (x = h1())
            : ((si = P),
              (tp = 'value' in si ? si.value : si.textContent),
              (Wo = !0))),
        (Z = rf(y, S)),
        0 < Z.length &&
          ((S = new Km(S, e, null, n, P)),
          O.push({ event: S, listeners: Z }),
          x ? (S.data = x) : ((x = g1(n)), x !== null && (S.data = x)))),
        (x = qk ? Yk(e, n) : Xk(e, n)) &&
          ((y = rf(y, 'onBeforeInput')),
          0 < y.length &&
            ((P = new Km('onBeforeInput', 'beforeinput', null, n, P)),
            O.push({ event: P, listeners: y }),
            (P.data = x)))
    }
    A1(O, t)
  })
}
function Hl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function rf(e, t) {
  for (var n = t + 'Capture', i = []; e !== null; ) {
    var s = e,
      u = s.stateNode
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      (u = Ml(e, n)),
      u != null && i.unshift(Hl(e, u, s)),
      (u = Ml(e, t)),
      u != null && i.push(Hl(e, u, s))),
      (e = e.return)
  }
  return i
}
function $o(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function i0(e, t, n, i, s) {
  for (var u = t._reactName, f = []; n !== null && n !== i; ) {
    var d = n,
      g = d.alternate,
      y = d.stateNode
    if (g !== null && g === i) break
    d.tag === 5 &&
      y !== null &&
      ((d = y),
      s
        ? ((g = Ml(n, u)), g != null && f.unshift(Hl(n, g, d)))
        : s || ((g = Ml(n, u)), g != null && f.push(Hl(n, g, d)))),
      (n = n.return)
  }
  f.length !== 0 && e.push({ event: t, listeners: f })
}
var fT = /\r\n?/g,
  cT = /\u0000|\uFFFD/g
function o0(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      fT,
      `
`
    )
    .replace(cT, '')
}
function Pa(e, t, n) {
  if (((t = o0(t)), o0(e) !== t && n)) throw Error(J(425))
}
function of() {}
var sd = null,
  ld = null
function ud(e, t) {
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
var ad = typeof setTimeout == 'function' ? setTimeout : void 0,
  hT = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  s0 = typeof Promise == 'function' ? Promise : void 0,
  dT =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof s0 < 'u'
      ? function (e) {
          return s0.resolve(null).then(e).catch(pT)
        }
      : ad
function pT(e) {
  setTimeout(function () {
    throw e
  })
}
function Sh(e, t) {
  var n = t,
    i = 0
  do {
    var s = n.nextSibling
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === '/$')) {
        if (i === 0) {
          e.removeChild(s), Ul(t)
          return
        }
        i--
      } else (n !== '$' && n !== '$?' && n !== '$!') || i++
    n = s
  } while (n)
  Ul(t)
}
function ci(e) {
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
function l0(e) {
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
var ys = Math.random().toString(36).slice(2),
  ir = '__reactFiber$' + ys,
  jl = '__reactProps$' + ys,
  Lr = '__reactContainer$' + ys,
  fd = '__reactEvents$' + ys,
  gT = '__reactListeners$' + ys,
  mT = '__reactHandles$' + ys
function Qi(e) {
  var t = e[ir]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Lr] || n[ir])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = l0(e); e !== null; ) {
          if ((n = e[ir])) return n
          e = l0(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function nu(e) {
  return (
    (e = e[ir] || e[Lr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function qo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(J(33))
}
function Ff(e) {
  return e[jl] || null
}
var cd = [],
  Yo = -1
function Si(e) {
  return { current: e }
}
function Be(e) {
  0 > Yo || ((e.current = cd[Yo]), (cd[Yo] = null), Yo--)
}
function ze(e, t) {
  Yo++, (cd[Yo] = e.current), (e.current = t)
}
var wi = {},
  Pt = Si(wi),
  Zt = Si(!1),
  ro = wi
function as(e, t) {
  var n = e.type.contextTypes
  if (!n) return wi
  var i = e.stateNode
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext
  var s = {},
    u
  for (u in n) s[u] = t[u]
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  )
}
function en(e) {
  return (e = e.childContextTypes), e != null
}
function sf() {
  Be(Zt), Be(Pt)
}
function u0(e, t, n) {
  if (Pt.current !== wi) throw Error(J(168))
  ze(Pt, t), ze(Zt, n)
}
function P1(e, t, n) {
  var i = e.stateNode
  if (((t = t.childContextTypes), typeof i.getChildContext != 'function'))
    return n
  i = i.getChildContext()
  for (var s in i) if (!(s in t)) throw Error(J(108, ek(e) || 'Unknown', s))
  return Ke({}, n, i)
}
function lf(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wi),
    (ro = Pt.current),
    ze(Pt, e),
    ze(Zt, Zt.current),
    !0
  )
}
function a0(e, t, n) {
  var i = e.stateNode
  if (!i) throw Error(J(169))
  n
    ? ((e = P1(e, t, ro)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      Be(Zt),
      Be(Pt),
      ze(Pt, e))
    : Be(Zt),
    ze(Zt, n)
}
var Tr = null,
  zf = !1,
  Eh = !1
function R1(e) {
  Tr === null ? (Tr = [e]) : Tr.push(e)
}
function vT(e) {
  ;(zf = !0), R1(e)
}
function Ei() {
  if (!Eh && Tr !== null) {
    Eh = !0
    var e = 0,
      t = Oe
    try {
      var n = Tr
      for (Oe = 1; e < n.length; e++) {
        var i = n[e]
        do i = i(!0)
        while (i !== null)
      }
      ;(Tr = null), (zf = !1)
    } catch (s) {
      throw (Tr !== null && (Tr = Tr.slice(e + 1)), t1(Qd, Ei), s)
    } finally {
      ;(Oe = t), (Eh = !1)
    }
  }
  return null
}
var Xo = [],
  Qo = 0,
  uf = null,
  af = 0,
  kn = [],
  Tn = 0,
  io = null,
  Ar = 1,
  Ir = ''
function qi(e, t) {
  ;(Xo[Qo++] = af), (Xo[Qo++] = uf), (uf = e), (af = t)
}
function L1(e, t, n) {
  ;(kn[Tn++] = Ar), (kn[Tn++] = Ir), (kn[Tn++] = io), (io = e)
  var i = Ar
  e = Ir
  var s = 32 - Kn(i) - 1
  ;(i &= ~(1 << s)), (n += 1)
  var u = 32 - Kn(t) + s
  if (30 < u) {
    var f = s - (s % 5)
    ;(u = (i & ((1 << f) - 1)).toString(32)),
      (i >>= f),
      (s -= f),
      (Ar = (1 << (32 - Kn(t) + s)) | (n << s) | i),
      (Ir = u + e)
  } else (Ar = (1 << u) | (n << s) | i), (Ir = e)
}
function sp(e) {
  e.return !== null && (qi(e, 1), L1(e, 1, 0))
}
function lp(e) {
  for (; e === uf; )
    (uf = Xo[--Qo]), (Xo[Qo] = null), (af = Xo[--Qo]), (Xo[Qo] = null)
  for (; e === io; )
    (io = kn[--Tn]),
      (kn[Tn] = null),
      (Ir = kn[--Tn]),
      (kn[Tn] = null),
      (Ar = kn[--Tn]),
      (kn[Tn] = null)
}
var fn = null,
  an = null,
  $e = !1,
  Vn = null
function O1(e, t) {
  var n = An(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function f0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (fn = e), (an = ci(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (fn = e), (an = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = io !== null ? { id: Ar, overflow: Ir } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = An(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (fn = e),
            (an = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function hd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function dd(e) {
  if ($e) {
    var t = an
    if (t) {
      var n = t
      if (!f0(e, t)) {
        if (hd(e)) throw Error(J(418))
        t = ci(n.nextSibling)
        var i = fn
        t && f0(e, t)
          ? O1(i, n)
          : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (fn = e))
      }
    } else {
      if (hd(e)) throw Error(J(418))
      ;(e.flags = (e.flags & -4097) | 2), ($e = !1), (fn = e)
    }
  }
}
function c0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  fn = e
}
function Ra(e) {
  if (e !== fn) return !1
  if (!$e) return c0(e), ($e = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ud(e.type, e.memoizedProps))),
    t && (t = an))
  ) {
    if (hd(e)) throw (N1(), Error(J(418)))
    for (; t; ) O1(e, t), (t = ci(t.nextSibling))
  }
  if ((c0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(J(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              an = ci(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      an = null
    }
  } else an = fn ? ci(e.stateNode.nextSibling) : null
  return !0
}
function N1() {
  for (var e = an; e; ) e = ci(e.nextSibling)
}
function fs() {
  ;(an = fn = null), ($e = !1)
}
function up(e) {
  Vn === null ? (Vn = [e]) : Vn.push(e)
}
var yT = Mr.ReactCurrentBatchConfig
function Hn(e, t) {
  if (e && e.defaultProps) {
    ;(t = Ke({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var ff = Si(null),
  cf = null,
  Jo = null,
  ap = null
function fp() {
  ap = Jo = cf = null
}
function cp(e) {
  var t = ff.current
  Be(ff), (e._currentValue = t)
}
function pd(e, t, n) {
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
function os(e, t) {
  ;(cf = e),
    (ap = Jo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Jt = !0), (e.firstContext = null))
}
function Pn(e) {
  var t = e._currentValue
  if (ap !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jo === null)) {
      if (cf === null) throw Error(J(308))
      ;(Jo = e), (cf.dependencies = { lanes: 0, firstContext: e })
    } else Jo = Jo.next = e
  return t
}
var Ji = null
function hp(e) {
  Ji === null ? (Ji = [e]) : Ji.push(e)
}
function D1(e, t, n, i) {
  var s = t.interleaved
  return (
    s === null ? ((n.next = n), hp(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Or(e, i)
  )
}
function Or(e, t) {
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
var ni = !1
function dp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function M1(e, t) {
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
function Pr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function hi(e, t, n) {
  var i = e.updateQueue
  if (i === null) return null
  if (((i = i.shared), xe & 2)) {
    var s = i.pending
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (i.pending = t),
      Or(e, n)
    )
  }
  return (
    (s = i.interleaved),
    s === null ? ((t.next = t), hp(i)) : ((t.next = s.next), (s.next = t)),
    (i.interleaved = t),
    Or(e, n)
  )
}
function ja(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Jd(e, n)
  }
}
function h0(e, t) {
  var n = e.updateQueue,
    i = e.alternate
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var s = null,
      u = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var f = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        u === null ? (s = u = f) : (u = u.next = f), (n = n.next)
      } while (n !== null)
      u === null ? (s = u = t) : (u = u.next = t)
    } else s = u = t
    ;(n = {
      baseState: i.baseState,
      firstBaseUpdate: s,
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
function hf(e, t, n, i) {
  var s = e.updateQueue
  ni = !1
  var u = s.firstBaseUpdate,
    f = s.lastBaseUpdate,
    d = s.shared.pending
  if (d !== null) {
    s.shared.pending = null
    var g = d,
      y = g.next
    ;(g.next = null), f === null ? (u = y) : (f.next = y), (f = g)
    var P = e.alternate
    P !== null &&
      ((P = P.updateQueue),
      (d = P.lastBaseUpdate),
      d !== f &&
        (d === null ? (P.firstBaseUpdate = y) : (d.next = y),
        (P.lastBaseUpdate = g)))
  }
  if (u !== null) {
    var O = s.baseState
    ;(f = 0), (P = y = g = null), (d = u)
    do {
      var E = d.lane,
        B = d.eventTime
      if ((i & E) === E) {
        P !== null &&
          (P = P.next =
            {
              eventTime: B,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            })
        e: {
          var $ = e,
            V = d
          switch (((E = t), (B = n), V.tag)) {
            case 1:
              if ((($ = V.payload), typeof $ == 'function')) {
                O = $.call(B, O, E)
                break e
              }
              O = $
              break e
            case 3:
              $.flags = ($.flags & -65537) | 128
            case 0:
              if (
                (($ = V.payload),
                (E = typeof $ == 'function' ? $.call(B, O, E) : $),
                E == null)
              )
                break e
              O = Ke({}, O, E)
              break e
            case 2:
              ni = !0
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((e.flags |= 64),
          (E = s.effects),
          E === null ? (s.effects = [d]) : E.push(d))
      } else
        (B = {
          eventTime: B,
          lane: E,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          P === null ? ((y = P = B), (g = O)) : (P = P.next = B),
          (f |= E)
      if (((d = d.next), d === null)) {
        if (((d = s.shared.pending), d === null)) break
        ;(E = d),
          (d = E.next),
          (E.next = null),
          (s.lastBaseUpdate = E),
          (s.shared.pending = null)
      }
    } while (!0)
    if (
      (P === null && (g = O),
      (s.baseState = g),
      (s.firstBaseUpdate = y),
      (s.lastBaseUpdate = P),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t
      do (f |= s.lane), (s = s.next)
      while (s !== t)
    } else u === null && (s.shared.lanes = 0)
    ;(so |= f), (e.lanes = f), (e.memoizedState = O)
  }
}
function d0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        s = i.callback
      if (s !== null) {
        if (((i.callback = null), (i = n), typeof s != 'function'))
          throw Error(J(191, s))
        s.call(i)
      }
    }
}
var F1 = new Dv.Component().refs
function gd(e, t, n, i) {
  ;(t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : Ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Uf = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ao(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var i = Bt(),
      s = pi(e),
      u = Pr(i, s)
    ;(u.payload = t),
      n != null && (u.callback = n),
      (t = hi(e, u, s)),
      t !== null && (Gn(t, e, s, i), ja(t, e, s))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var i = Bt(),
      s = pi(e),
      u = Pr(i, s)
    ;(u.tag = 1),
      (u.payload = t),
      n != null && (u.callback = n),
      (t = hi(e, u, s)),
      t !== null && (Gn(t, e, s, i), ja(t, e, s))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Bt(),
      i = pi(e),
      s = Pr(n, i)
    ;(s.tag = 2),
      t != null && (s.callback = t),
      (t = hi(e, s, i)),
      t !== null && (Gn(t, e, i, n), ja(t, e, i))
  },
}
function p0(e, t, n, i, s, u, f) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(i, u, f)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$l(n, i) || !$l(s, u)
      : !0
  )
}
function z1(e, t, n) {
  var i = !1,
    s = wi,
    u = t.contextType
  return (
    typeof u == 'object' && u !== null
      ? (u = Pn(u))
      : ((s = en(t) ? ro : Pt.current),
        (i = t.contextTypes),
        (u = (i = i != null) ? as(e, s) : wi)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Uf),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  )
}
function g0(e, t, n, i) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Uf.enqueueReplaceState(t, t.state, null)
}
function md(e, t, n, i) {
  var s = e.stateNode
  ;(s.props = n), (s.state = e.memoizedState), (s.refs = F1), dp(e)
  var u = t.contextType
  typeof u == 'object' && u !== null
    ? (s.context = Pn(u))
    : ((u = en(t) ? ro : Pt.current), (s.context = as(e, u))),
    (s.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == 'function' && (gd(e, t, u, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function' ||
      (typeof s.UNSAFE_componentWillMount != 'function' &&
        typeof s.componentWillMount != 'function') ||
      ((t = s.state),
      typeof s.componentWillMount == 'function' && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == 'function' &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Uf.enqueueReplaceState(s, s.state, null),
      hf(e, n, s, i),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == 'function' && (e.flags |= 4194308)
}
function dl(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(J(309))
        var i = n.stateNode
      }
      if (!i) throw Error(J(147, e))
      var s = i,
        u = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === u
        ? t.ref
        : ((t = function (f) {
            var d = s.refs
            d === F1 && (d = s.refs = {}), f === null ? delete d[u] : (d[u] = f)
          }),
          (t._stringRef = u),
          t)
    }
    if (typeof e != 'string') throw Error(J(284))
    if (!n._owner) throw Error(J(290, e))
  }
  return e
}
function La(e, t) {
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
function m0(e) {
  var t = e._init
  return t(e._payload)
}
function U1(e) {
  function t(R, k) {
    if (e) {
      var N = R.deletions
      N === null ? ((R.deletions = [k]), (R.flags |= 16)) : N.push(k)
    }
  }
  function n(R, k) {
    if (!e) return null
    for (; k !== null; ) t(R, k), (k = k.sibling)
    return null
  }
  function i(R, k) {
    for (R = new Map(); k !== null; )
      k.key !== null ? R.set(k.key, k) : R.set(k.index, k), (k = k.sibling)
    return R
  }
  function s(R, k) {
    return (R = gi(R, k)), (R.index = 0), (R.sibling = null), R
  }
  function u(R, k, N) {
    return (
      (R.index = N),
      e
        ? ((N = R.alternate),
          N !== null
            ? ((N = N.index), N < k ? ((R.flags |= 2), k) : N)
            : ((R.flags |= 2), k))
        : ((R.flags |= 1048576), k)
    )
  }
  function f(R) {
    return e && R.alternate === null && (R.flags |= 2), R
  }
  function d(R, k, N, j) {
    return k === null || k.tag !== 6
      ? ((k = Ph(N, R.mode, j)), (k.return = R), k)
      : ((k = s(k, N)), (k.return = R), k)
  }
  function g(R, k, N, j) {
    var X = N.type
    return X === Vo
      ? P(R, k, N.props.children, j, N.key)
      : k !== null &&
        (k.elementType === X ||
          (typeof X == 'object' &&
            X !== null &&
            X.$$typeof === ti &&
            m0(X) === k.type))
      ? ((j = s(k, N.props)), (j.ref = dl(R, k, N)), (j.return = R), j)
      : ((j = Ya(N.type, N.key, N.props, null, R.mode, j)),
        (j.ref = dl(R, k, N)),
        (j.return = R),
        j)
  }
  function y(R, k, N, j) {
    return k === null ||
      k.tag !== 4 ||
      k.stateNode.containerInfo !== N.containerInfo ||
      k.stateNode.implementation !== N.implementation
      ? ((k = Rh(N, R.mode, j)), (k.return = R), k)
      : ((k = s(k, N.children || [])), (k.return = R), k)
  }
  function P(R, k, N, j, X) {
    return k === null || k.tag !== 7
      ? ((k = no(N, R.mode, j, X)), (k.return = R), k)
      : ((k = s(k, N)), (k.return = R), k)
  }
  function O(R, k, N) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (k = Ph('' + k, R.mode, N)), (k.return = R), k
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case _a:
          return (
            (N = Ya(k.type, k.key, k.props, null, R.mode, N)),
            (N.ref = dl(R, null, k)),
            (N.return = R),
            N
          )
        case jo:
          return (k = Rh(k, R.mode, N)), (k.return = R), k
        case ti:
          var j = k._init
          return O(R, j(k._payload), N)
      }
      if (yl(k) || ul(k)) return (k = no(k, R.mode, N, null)), (k.return = R), k
      La(R, k)
    }
    return null
  }
  function E(R, k, N, j) {
    var X = k !== null ? k.key : null
    if ((typeof N == 'string' && N !== '') || typeof N == 'number')
      return X !== null ? null : d(R, k, '' + N, j)
    if (typeof N == 'object' && N !== null) {
      switch (N.$$typeof) {
        case _a:
          return N.key === X ? g(R, k, N, j) : null
        case jo:
          return N.key === X ? y(R, k, N, j) : null
        case ti:
          return (X = N._init), E(R, k, X(N._payload), j)
      }
      if (yl(N) || ul(N)) return X !== null ? null : P(R, k, N, j, null)
      La(R, N)
    }
    return null
  }
  function B(R, k, N, j, X) {
    if ((typeof j == 'string' && j !== '') || typeof j == 'number')
      return (R = R.get(N) || null), d(k, R, '' + j, X)
    if (typeof j == 'object' && j !== null) {
      switch (j.$$typeof) {
        case _a:
          return (R = R.get(j.key === null ? N : j.key) || null), g(k, R, j, X)
        case jo:
          return (R = R.get(j.key === null ? N : j.key) || null), y(k, R, j, X)
        case ti:
          var Z = j._init
          return B(R, k, N, Z(j._payload), X)
      }
      if (yl(j) || ul(j)) return (R = R.get(N) || null), P(k, R, j, X, null)
      La(k, j)
    }
    return null
  }
  function $(R, k, N, j) {
    for (
      var X = null, Z = null, x = k, S = (k = 0), T = null;
      x !== null && S < N.length;
      S++
    ) {
      x.index > S ? ((T = x), (x = null)) : (T = x.sibling)
      var I = E(R, x, N[S], j)
      if (I === null) {
        x === null && (x = T)
        break
      }
      e && x && I.alternate === null && t(R, x),
        (k = u(I, k, S)),
        Z === null ? (X = I) : (Z.sibling = I),
        (Z = I),
        (x = T)
    }
    if (S === N.length) return n(R, x), $e && qi(R, S), X
    if (x === null) {
      for (; S < N.length; S++)
        (x = O(R, N[S], j)),
          x !== null &&
            ((k = u(x, k, S)), Z === null ? (X = x) : (Z.sibling = x), (Z = x))
      return $e && qi(R, S), X
    }
    for (x = i(R, x); S < N.length; S++)
      (T = B(x, R, S, N[S], j)),
        T !== null &&
          (e && T.alternate !== null && x.delete(T.key === null ? S : T.key),
          (k = u(T, k, S)),
          Z === null ? (X = T) : (Z.sibling = T),
          (Z = T))
    return (
      e &&
        x.forEach(function (D) {
          return t(R, D)
        }),
      $e && qi(R, S),
      X
    )
  }
  function V(R, k, N, j) {
    var X = ul(N)
    if (typeof X != 'function') throw Error(J(150))
    if (((N = X.call(N)), N == null)) throw Error(J(151))
    for (
      var Z = (X = null), x = k, S = (k = 0), T = null, I = N.next();
      x !== null && !I.done;
      S++, I = N.next()
    ) {
      x.index > S ? ((T = x), (x = null)) : (T = x.sibling)
      var D = E(R, x, I.value, j)
      if (D === null) {
        x === null && (x = T)
        break
      }
      e && x && D.alternate === null && t(R, x),
        (k = u(D, k, S)),
        Z === null ? (X = D) : (Z.sibling = D),
        (Z = D),
        (x = T)
    }
    if (I.done) return n(R, x), $e && qi(R, S), X
    if (x === null) {
      for (; !I.done; S++, I = N.next())
        (I = O(R, I.value, j)),
          I !== null &&
            ((k = u(I, k, S)), Z === null ? (X = I) : (Z.sibling = I), (Z = I))
      return $e && qi(R, S), X
    }
    for (x = i(R, x); !I.done; S++, I = N.next())
      (I = B(x, R, S, I.value, j)),
        I !== null &&
          (e && I.alternate !== null && x.delete(I.key === null ? S : I.key),
          (k = u(I, k, S)),
          Z === null ? (X = I) : (Z.sibling = I),
          (Z = I))
    return (
      e &&
        x.forEach(function (U) {
          return t(R, U)
        }),
      $e && qi(R, S),
      X
    )
  }
  function q(R, k, N, j) {
    if (
      (typeof N == 'object' &&
        N !== null &&
        N.type === Vo &&
        N.key === null &&
        (N = N.props.children),
      typeof N == 'object' && N !== null)
    ) {
      switch (N.$$typeof) {
        case _a:
          e: {
            for (var X = N.key, Z = k; Z !== null; ) {
              if (Z.key === X) {
                if (((X = N.type), X === Vo)) {
                  if (Z.tag === 7) {
                    n(R, Z.sibling),
                      (k = s(Z, N.props.children)),
                      (k.return = R),
                      (R = k)
                    break e
                  }
                } else if (
                  Z.elementType === X ||
                  (typeof X == 'object' &&
                    X !== null &&
                    X.$$typeof === ti &&
                    m0(X) === Z.type)
                ) {
                  n(R, Z.sibling),
                    (k = s(Z, N.props)),
                    (k.ref = dl(R, Z, N)),
                    (k.return = R),
                    (R = k)
                  break e
                }
                n(R, Z)
                break
              } else t(R, Z)
              Z = Z.sibling
            }
            N.type === Vo
              ? ((k = no(N.props.children, R.mode, j, N.key)),
                (k.return = R),
                (R = k))
              : ((j = Ya(N.type, N.key, N.props, null, R.mode, j)),
                (j.ref = dl(R, k, N)),
                (j.return = R),
                (R = j))
          }
          return f(R)
        case jo:
          e: {
            for (Z = N.key; k !== null; ) {
              if (k.key === Z)
                if (
                  k.tag === 4 &&
                  k.stateNode.containerInfo === N.containerInfo &&
                  k.stateNode.implementation === N.implementation
                ) {
                  n(R, k.sibling),
                    (k = s(k, N.children || [])),
                    (k.return = R),
                    (R = k)
                  break e
                } else {
                  n(R, k)
                  break
                }
              else t(R, k)
              k = k.sibling
            }
            ;(k = Rh(N, R.mode, j)), (k.return = R), (R = k)
          }
          return f(R)
        case ti:
          return (Z = N._init), q(R, k, Z(N._payload), j)
      }
      if (yl(N)) return $(R, k, N, j)
      if (ul(N)) return V(R, k, N, j)
      La(R, N)
    }
    return (typeof N == 'string' && N !== '') || typeof N == 'number'
      ? ((N = '' + N),
        k !== null && k.tag === 6
          ? (n(R, k.sibling), (k = s(k, N)), (k.return = R), (R = k))
          : (n(R, k), (k = Ph(N, R.mode, j)), (k.return = R), (R = k)),
        f(R))
      : n(R, k)
  }
  return q
}
var cs = U1(!0),
  B1 = U1(!1),
  ru = {},
  lr = Si(ru),
  Vl = Si(ru),
  Wl = Si(ru)
function Zi(e) {
  if (e === ru) throw Error(J(174))
  return e
}
function pp(e, t) {
  switch ((ze(Wl, t), ze(Vl, e), ze(lr, ru), (e = t.nodeType), e)) {
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
  Be(lr), ze(lr, t)
}
function hs() {
  Be(lr), Be(Vl), Be(Wl)
}
function $1(e) {
  Zi(Wl.current)
  var t = Zi(lr.current),
    n = qh(t, e.type)
  t !== n && (ze(Vl, e), ze(lr, n))
}
function gp(e) {
  Vl.current === e && (Be(lr), Be(Vl))
}
var Ve = Si(0)
function df(e) {
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
var xh = []
function mp() {
  for (var e = 0; e < xh.length; e++) xh[e]._workInProgressVersionPrimary = null
  xh.length = 0
}
var Va = Mr.ReactCurrentDispatcher,
  Ch = Mr.ReactCurrentBatchConfig,
  oo = 0,
  We = null,
  lt = null,
  ht = null,
  pf = !1,
  Tl = !1,
  Kl = 0,
  wT = 0
function kt() {
  throw Error(J(321))
}
function vp(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qn(e[n], t[n])) return !1
  return !0
}
function yp(e, t, n, i, s, u) {
  if (
    ((oo = u),
    (We = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Va.current = e === null || e.memoizedState === null ? xT : CT),
    (e = n(i, s)),
    Tl)
  ) {
    u = 0
    do {
      if (((Tl = !1), (Kl = 0), 25 <= u)) throw Error(J(301))
      ;(u += 1),
        (ht = lt = null),
        (t.updateQueue = null),
        (Va.current = kT),
        (e = n(i, s))
    } while (Tl)
  }
  if (
    ((Va.current = gf),
    (t = lt !== null && lt.next !== null),
    (oo = 0),
    (ht = lt = We = null),
    (pf = !1),
    t)
  )
    throw Error(J(300))
  return e
}
function wp() {
  var e = Kl !== 0
  return (Kl = 0), e
}
function rr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ht === null ? (We.memoizedState = ht = e) : (ht = ht.next = e), ht
}
function Rn() {
  if (lt === null) {
    var e = We.alternate
    e = e !== null ? e.memoizedState : null
  } else e = lt.next
  var t = ht === null ? We.memoizedState : ht.next
  if (t !== null) (ht = t), (lt = e)
  else {
    if (e === null) throw Error(J(310))
    ;(lt = e),
      (e = {
        memoizedState: lt.memoizedState,
        baseState: lt.baseState,
        baseQueue: lt.baseQueue,
        queue: lt.queue,
        next: null,
      }),
      ht === null ? (We.memoizedState = ht = e) : (ht = ht.next = e)
  }
  return ht
}
function Gl(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function kh(e) {
  var t = Rn(),
    n = t.queue
  if (n === null) throw Error(J(311))
  n.lastRenderedReducer = e
  var i = lt,
    s = i.baseQueue,
    u = n.pending
  if (u !== null) {
    if (s !== null) {
      var f = s.next
      ;(s.next = u.next), (u.next = f)
    }
    ;(i.baseQueue = s = u), (n.pending = null)
  }
  if (s !== null) {
    ;(u = s.next), (i = i.baseState)
    var d = (f = null),
      g = null,
      y = u
    do {
      var P = y.lane
      if ((oo & P) === P)
        g !== null &&
          (g = g.next =
            {
              lane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
          (i = y.hasEagerState ? y.eagerState : e(i, y.action))
      else {
        var O = {
          lane: P,
          action: y.action,
          hasEagerState: y.hasEagerState,
          eagerState: y.eagerState,
          next: null,
        }
        g === null ? ((d = g = O), (f = i)) : (g = g.next = O),
          (We.lanes |= P),
          (so |= P)
      }
      y = y.next
    } while (y !== null && y !== u)
    g === null ? (f = i) : (g.next = d),
      qn(i, t.memoizedState) || (Jt = !0),
      (t.memoizedState = i),
      (t.baseState = f),
      (t.baseQueue = g),
      (n.lastRenderedState = i)
  }
  if (((e = n.interleaved), e !== null)) {
    s = e
    do (u = s.lane), (We.lanes |= u), (so |= u), (s = s.next)
    while (s !== e)
  } else s === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Th(e) {
  var t = Rn(),
    n = t.queue
  if (n === null) throw Error(J(311))
  n.lastRenderedReducer = e
  var i = n.dispatch,
    s = n.pending,
    u = t.memoizedState
  if (s !== null) {
    n.pending = null
    var f = (s = s.next)
    do (u = e(u, f.action)), (f = f.next)
    while (f !== s)
    qn(u, t.memoizedState) || (Jt = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u)
  }
  return [u, i]
}
function b1() {}
function H1(e, t) {
  var n = We,
    i = Rn(),
    s = t(),
    u = !qn(i.memoizedState, s)
  if (
    (u && ((i.memoizedState = s), (Jt = !0)),
    (i = i.queue),
    _p(W1.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || u || (ht !== null && ht.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ql(9, V1.bind(null, n, i, s, t), void 0, null),
      dt === null)
    )
      throw Error(J(349))
    oo & 30 || j1(n, t, s)
  }
  return s
}
function j1(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function V1(e, t, n, i) {
  ;(t.value = n), (t.getSnapshot = i), K1(t) && G1(e)
}
function W1(e, t, n) {
  return n(function () {
    K1(t) && G1(e)
  })
}
function K1(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !qn(e, n)
  } catch {
    return !0
  }
}
function G1(e) {
  var t = Or(e, 1)
  t !== null && Gn(t, e, 1, -1)
}
function v0(e) {
  var t = rr()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ET.bind(null, We, e)),
    [t.memoizedState, e]
  )
}
function ql(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  )
}
function q1() {
  return Rn().memoizedState
}
function Wa(e, t, n, i) {
  var s = rr()
  ;(We.flags |= e),
    (s.memoizedState = ql(1 | t, n, void 0, i === void 0 ? null : i))
}
function Bf(e, t, n, i) {
  var s = Rn()
  i = i === void 0 ? null : i
  var u = void 0
  if (lt !== null) {
    var f = lt.memoizedState
    if (((u = f.destroy), i !== null && vp(i, f.deps))) {
      s.memoizedState = ql(t, n, u, i)
      return
    }
  }
  ;(We.flags |= e), (s.memoizedState = ql(1 | t, n, u, i))
}
function y0(e, t) {
  return Wa(8390656, 8, e, t)
}
function _p(e, t) {
  return Bf(2048, 8, e, t)
}
function Y1(e, t) {
  return Bf(4, 2, e, t)
}
function X1(e, t) {
  return Bf(4, 4, e, t)
}
function Q1(e, t) {
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
function J1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bf(4, 4, Q1.bind(null, t, e), n)
  )
}
function Sp() {}
function Z1(e, t) {
  var n = Rn()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && vp(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e)
}
function ey(e, t) {
  var n = Rn()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && vp(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function ty(e, t, n) {
  return oo & 21
    ? (qn(n, t) || ((n = i1()), (We.lanes |= n), (so |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Jt = !0)), (e.memoizedState = n))
}
function _T(e, t) {
  var n = Oe
  ;(Oe = n !== 0 && 4 > n ? n : 4), e(!0)
  var i = Ch.transition
  Ch.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Oe = n), (Ch.transition = i)
  }
}
function ny() {
  return Rn().memoizedState
}
function ST(e, t, n) {
  var i = pi(e)
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ry(e))
  )
    iy(t, n)
  else if (((n = D1(e, t, n, i)), n !== null)) {
    var s = Bt()
    Gn(n, e, i, s), oy(n, t, i)
  }
}
function ET(e, t, n) {
  var i = pi(e),
    s = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (ry(e)) iy(t, s)
  else {
    var u = e.alternate
    if (
      e.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = t.lastRenderedReducer), u !== null)
    )
      try {
        var f = t.lastRenderedState,
          d = u(f, n)
        if (((s.hasEagerState = !0), (s.eagerState = d), qn(d, f))) {
          var g = t.interleaved
          g === null
            ? ((s.next = s), hp(t))
            : ((s.next = g.next), (g.next = s)),
            (t.interleaved = s)
          return
        }
      } catch {
      } finally {
      }
    ;(n = D1(e, t, s, i)),
      n !== null && ((s = Bt()), Gn(n, e, i, s), oy(n, t, i))
  }
}
function ry(e) {
  var t = e.alternate
  return e === We || (t !== null && t === We)
}
function iy(e, t) {
  Tl = pf = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function oy(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Jd(e, n)
  }
}
var gf = {
    readContext: Pn,
    useCallback: kt,
    useContext: kt,
    useEffect: kt,
    useImperativeHandle: kt,
    useInsertionEffect: kt,
    useLayoutEffect: kt,
    useMemo: kt,
    useReducer: kt,
    useRef: kt,
    useState: kt,
    useDebugValue: kt,
    useDeferredValue: kt,
    useTransition: kt,
    useMutableSource: kt,
    useSyncExternalStore: kt,
    useId: kt,
    unstable_isNewReconciler: !1,
  },
  xT = {
    readContext: Pn,
    useCallback: function (e, t) {
      return (rr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Pn,
    useEffect: y0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wa(4194308, 4, Q1.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Wa(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Wa(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = rr()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var i = rr()
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
        (e = e.dispatch = ST.bind(null, We, e)),
        [i.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = rr()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: v0,
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      return (rr().memoizedState = e)
    },
    useTransition: function () {
      var e = v0(!1),
        t = e[0]
      return (e = _T.bind(null, e[1])), (rr().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = We,
        s = rr()
      if ($e) {
        if (n === void 0) throw Error(J(407))
        n = n()
      } else {
        if (((n = t()), dt === null)) throw Error(J(349))
        oo & 30 || j1(i, t, n)
      }
      s.memoizedState = n
      var u = { value: n, getSnapshot: t }
      return (
        (s.queue = u),
        y0(W1.bind(null, i, u, e), [e]),
        (i.flags |= 2048),
        ql(9, V1.bind(null, i, u, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = rr(),
        t = dt.identifierPrefix
      if ($e) {
        var n = Ir,
          i = Ar
        ;(n = (i & ~(1 << (32 - Kn(i) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Kl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = wT++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  CT = {
    readContext: Pn,
    useCallback: Z1,
    useContext: Pn,
    useEffect: _p,
    useImperativeHandle: J1,
    useInsertionEffect: Y1,
    useLayoutEffect: X1,
    useMemo: ey,
    useReducer: kh,
    useRef: q1,
    useState: function () {
      return kh(Gl)
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = Rn()
      return ty(t, lt.memoizedState, e)
    },
    useTransition: function () {
      var e = kh(Gl)[0],
        t = Rn().memoizedState
      return [e, t]
    },
    useMutableSource: b1,
    useSyncExternalStore: H1,
    useId: ny,
    unstable_isNewReconciler: !1,
  },
  kT = {
    readContext: Pn,
    useCallback: Z1,
    useContext: Pn,
    useEffect: _p,
    useImperativeHandle: J1,
    useInsertionEffect: Y1,
    useLayoutEffect: X1,
    useMemo: ey,
    useReducer: Th,
    useRef: q1,
    useState: function () {
      return Th(Gl)
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = Rn()
      return lt === null ? (t.memoizedState = e) : ty(t, lt.memoizedState, e)
    },
    useTransition: function () {
      var e = Th(Gl)[0],
        t = Rn().memoizedState
      return [e, t]
    },
    useMutableSource: b1,
    useSyncExternalStore: H1,
    useId: ny,
    unstable_isNewReconciler: !1,
  }
function ds(e, t) {
  try {
    var n = '',
      i = t
    do (n += ZC(i)), (i = i.return)
    while (i)
    var s = n
  } catch (u) {
    s =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack
  }
  return { value: e, source: t, stack: s, digest: null }
}
function Ah(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function vd(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var TT = typeof WeakMap == 'function' ? WeakMap : Map
function sy(e, t, n) {
  ;(n = Pr(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var i = t.value
  return (
    (n.callback = function () {
      vf || ((vf = !0), (Ad = i)), vd(e, t)
    }),
    n
  )
}
function ly(e, t, n) {
  ;(n = Pr(-1, n)), (n.tag = 3)
  var i = e.type.getDerivedStateFromError
  if (typeof i == 'function') {
    var s = t.value
    ;(n.payload = function () {
      return i(s)
    }),
      (n.callback = function () {
        vd(e, t)
      })
  }
  var u = e.stateNode
  return (
    u !== null &&
      typeof u.componentDidCatch == 'function' &&
      (n.callback = function () {
        vd(e, t),
          typeof i != 'function' &&
            (di === null ? (di = new Set([this])) : di.add(this))
        var f = t.stack
        this.componentDidCatch(t.value, { componentStack: f !== null ? f : '' })
      }),
    n
  )
}
function w0(e, t, n) {
  var i = e.pingCache
  if (i === null) {
    i = e.pingCache = new TT()
    var s = new Set()
    i.set(t, s)
  } else (s = i.get(t)), s === void 0 && ((s = new Set()), i.set(t, s))
  s.has(n) || (s.add(n), (e = $T.bind(null, e, t, n)), t.then(e, e))
}
function _0(e) {
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
function S0(e, t, n, i, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Pr(-1, 1)), (t.tag = 2), hi(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var AT = Mr.ReactCurrentOwner,
  Jt = !1
function zt(e, t, n, i) {
  t.child = e === null ? B1(t, null, n, i) : cs(t, e.child, n, i)
}
function E0(e, t, n, i, s) {
  n = n.render
  var u = t.ref
  return (
    os(t, s),
    (i = yp(e, t, n, i, u, s)),
    (n = wp()),
    e !== null && !Jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Nr(e, t, s))
      : ($e && n && sp(t), (t.flags |= 1), zt(e, t, i, s), t.child)
  )
}
function x0(e, t, n, i, s) {
  if (e === null) {
    var u = n.type
    return typeof u == 'function' &&
      !Pp(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), uy(e, t, u, i, s))
      : ((e = Ya(n.type, null, i, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((u = e.child), !(e.lanes & s))) {
    var f = u.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : $l), n(f, i) && e.ref === t.ref)
    )
      return Nr(e, t, s)
  }
  return (
    (t.flags |= 1),
    (e = gi(u, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function uy(e, t, n, i, s) {
  if (e !== null) {
    var u = e.memoizedProps
    if ($l(u, i) && e.ref === t.ref)
      if (((Jt = !1), (t.pendingProps = i = u), (e.lanes & s) !== 0))
        e.flags & 131072 && (Jt = !0)
      else return (t.lanes = e.lanes), Nr(e, t, s)
  }
  return yd(e, t, n, i, s)
}
function ay(e, t, n) {
  var i = t.pendingProps,
    s = i.children,
    u = e !== null ? e.memoizedState : null
  if (i.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ze(es, un),
        (un |= n)
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
          ze(es, un),
          (un |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = u !== null ? u.baseLanes : n),
        ze(es, un),
        (un |= i)
    }
  else
    u !== null ? ((i = u.baseLanes | n), (t.memoizedState = null)) : (i = n),
      ze(es, un),
      (un |= i)
  return zt(e, t, s, n), t.child
}
function fy(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function yd(e, t, n, i, s) {
  var u = en(n) ? ro : Pt.current
  return (
    (u = as(t, u)),
    os(t, s),
    (n = yp(e, t, n, i, u, s)),
    (i = wp()),
    e !== null && !Jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Nr(e, t, s))
      : ($e && i && sp(t), (t.flags |= 1), zt(e, t, n, s), t.child)
  )
}
function C0(e, t, n, i, s) {
  if (en(n)) {
    var u = !0
    lf(t)
  } else u = !1
  if ((os(t, s), t.stateNode === null))
    Ka(e, t), z1(t, n, i), md(t, n, i, s), (i = !0)
  else if (e === null) {
    var f = t.stateNode,
      d = t.memoizedProps
    f.props = d
    var g = f.context,
      y = n.contextType
    typeof y == 'object' && y !== null
      ? (y = Pn(y))
      : ((y = en(n) ? ro : Pt.current), (y = as(t, y)))
    var P = n.getDerivedStateFromProps,
      O =
        typeof P == 'function' || typeof f.getSnapshotBeforeUpdate == 'function'
    O ||
      (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof f.componentWillReceiveProps != 'function') ||
      ((d !== i || g !== y) && g0(t, f, i, y)),
      (ni = !1)
    var E = t.memoizedState
    ;(f.state = E),
      hf(t, i, f, s),
      (g = t.memoizedState),
      d !== i || E !== g || Zt.current || ni
        ? (typeof P == 'function' && (gd(t, n, P, i), (g = t.memoizedState)),
          (d = ni || p0(t, n, d, i, E, g, y))
            ? (O ||
                (typeof f.UNSAFE_componentWillMount != 'function' &&
                  typeof f.componentWillMount != 'function') ||
                (typeof f.componentWillMount == 'function' &&
                  f.componentWillMount(),
                typeof f.UNSAFE_componentWillMount == 'function' &&
                  f.UNSAFE_componentWillMount()),
              typeof f.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = g)),
          (f.props = i),
          (f.state = g),
          (f.context = y),
          (i = d))
        : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
          (i = !1))
  } else {
    ;(f = t.stateNode),
      M1(e, t),
      (d = t.memoizedProps),
      (y = t.type === t.elementType ? d : Hn(t.type, d)),
      (f.props = y),
      (O = t.pendingProps),
      (E = f.context),
      (g = n.contextType),
      typeof g == 'object' && g !== null
        ? (g = Pn(g))
        : ((g = en(n) ? ro : Pt.current), (g = as(t, g)))
    var B = n.getDerivedStateFromProps
    ;(P =
      typeof B == 'function' ||
      typeof f.getSnapshotBeforeUpdate == 'function') ||
      (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof f.componentWillReceiveProps != 'function') ||
      ((d !== O || E !== g) && g0(t, f, i, g)),
      (ni = !1),
      (E = t.memoizedState),
      (f.state = E),
      hf(t, i, f, s)
    var $ = t.memoizedState
    d !== O || E !== $ || Zt.current || ni
      ? (typeof B == 'function' && (gd(t, n, B, i), ($ = t.memoizedState)),
        (y = ni || p0(t, n, y, i, E, $, g) || !1)
          ? (P ||
              (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                typeof f.componentWillUpdate != 'function') ||
              (typeof f.componentWillUpdate == 'function' &&
                f.componentWillUpdate(i, $, g),
              typeof f.UNSAFE_componentWillUpdate == 'function' &&
                f.UNSAFE_componentWillUpdate(i, $, g)),
            typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof f.componentDidUpdate != 'function' ||
              (d === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != 'function' ||
              (d === e.memoizedProps && E === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = $)),
        (f.props = i),
        (f.state = $),
        (f.context = g),
        (i = y))
      : (typeof f.componentDidUpdate != 'function' ||
          (d === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 4),
        typeof f.getSnapshotBeforeUpdate != 'function' ||
          (d === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1))
  }
  return wd(e, t, n, i, u, s)
}
function wd(e, t, n, i, s, u) {
  fy(e, t)
  var f = (t.flags & 128) !== 0
  if (!i && !f) return s && a0(t, n, !1), Nr(e, t, u)
  ;(i = t.stateNode), (AT.current = t)
  var d =
    f && typeof n.getDerivedStateFromError != 'function' ? null : i.render()
  return (
    (t.flags |= 1),
    e !== null && f
      ? ((t.child = cs(t, e.child, null, u)), (t.child = cs(t, null, d, u)))
      : zt(e, t, d, u),
    (t.memoizedState = i.state),
    s && a0(t, n, !0),
    t.child
  )
}
function cy(e) {
  var t = e.stateNode
  t.pendingContext
    ? u0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && u0(e, t.context, !1),
    pp(e, t.containerInfo)
}
function k0(e, t, n, i, s) {
  return fs(), up(s), (t.flags |= 256), zt(e, t, n, i), t.child
}
var _d = { dehydrated: null, treeContext: null, retryLane: 0 }
function Sd(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function hy(e, t, n) {
  var i = t.pendingProps,
    s = Ve.current,
    u = !1,
    f = (t.flags & 128) !== 0,
    d
  if (
    ((d = f) ||
      (d = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    d
      ? ((u = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ze(Ve, s & 1),
    e === null)
  )
    return (
      dd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((f = i.children),
          (e = i.fallback),
          u
            ? ((i = t.mode),
              (u = t.child),
              (f = { mode: 'hidden', children: f }),
              !(i & 1) && u !== null
                ? ((u.childLanes = 0), (u.pendingProps = f))
                : (u = Hf(f, i, 0, null)),
              (e = no(e, i, n, null)),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              (t.child.memoizedState = Sd(n)),
              (t.memoizedState = _d),
              e)
            : Ep(t, f))
    )
  if (((s = e.memoizedState), s !== null && ((d = s.dehydrated), d !== null)))
    return IT(e, t, f, i, d, s, n)
  if (u) {
    ;(u = i.fallback), (f = t.mode), (s = e.child), (d = s.sibling)
    var g = { mode: 'hidden', children: i.children }
    return (
      !(f & 1) && t.child !== s
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = g),
          (t.deletions = null))
        : ((i = gi(s, g)), (i.subtreeFlags = s.subtreeFlags & 14680064)),
      d !== null ? (u = gi(d, u)) : ((u = no(u, f, n, null)), (u.flags |= 2)),
      (u.return = t),
      (i.return = t),
      (i.sibling = u),
      (t.child = i),
      (i = u),
      (u = t.child),
      (f = e.child.memoizedState),
      (f =
        f === null
          ? Sd(n)
          : {
              baseLanes: f.baseLanes | n,
              cachePool: null,
              transitions: f.transitions,
            }),
      (u.memoizedState = f),
      (u.childLanes = e.childLanes & ~n),
      (t.memoizedState = _d),
      i
    )
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (i = gi(u, { mode: 'visible', children: i.children })),
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
function Ep(e, t) {
  return (
    (t = Hf({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Oa(e, t, n, i) {
  return (
    i !== null && up(i),
    cs(t, e.child, null, n),
    (e = Ep(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function IT(e, t, n, i, s, u, f) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = Ah(Error(J(422)))), Oa(e, t, f, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((u = i.fallback),
        (s = t.mode),
        (i = Hf({ mode: 'visible', children: i.children }, s, 0, null)),
        (u = no(u, s, f, null)),
        (u.flags |= 2),
        (i.return = t),
        (u.return = t),
        (i.sibling = u),
        (t.child = i),
        t.mode & 1 && cs(t, e.child, null, f),
        (t.child.memoizedState = Sd(f)),
        (t.memoizedState = _d),
        u)
  if (!(t.mode & 1)) return Oa(e, t, f, null)
  if (s.data === '$!') {
    if (((i = s.nextSibling && s.nextSibling.dataset), i)) var d = i.dgst
    return (i = d), (u = Error(J(419))), (i = Ah(u, i, void 0)), Oa(e, t, f, i)
  }
  if (((d = (f & e.childLanes) !== 0), Jt || d)) {
    if (((i = dt), i !== null)) {
      switch (f & -f) {
        case 4:
          s = 2
          break
        case 16:
          s = 8
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
          s = 32
          break
        case 536870912:
          s = 268435456
          break
        default:
          s = 0
      }
      ;(s = s & (i.suspendedLanes | f) ? 0 : s),
        s !== 0 &&
          s !== u.retryLane &&
          ((u.retryLane = s), Or(e, s), Gn(i, e, s, -1))
    }
    return Ip(), (i = Ah(Error(J(421)))), Oa(e, t, f, i)
  }
  return s.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bT.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = u.treeContext),
      (an = ci(s.nextSibling)),
      (fn = t),
      ($e = !0),
      (Vn = null),
      e !== null &&
        ((kn[Tn++] = Ar),
        (kn[Tn++] = Ir),
        (kn[Tn++] = io),
        (Ar = e.id),
        (Ir = e.overflow),
        (io = t)),
      (t = Ep(t, i.children)),
      (t.flags |= 4096),
      t)
}
function T0(e, t, n) {
  e.lanes |= t
  var i = e.alternate
  i !== null && (i.lanes |= t), pd(e.return, t, n)
}
function Ih(e, t, n, i, s) {
  var u = e.memoizedState
  u === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: s,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = i),
      (u.tail = n),
      (u.tailMode = s))
}
function dy(e, t, n) {
  var i = t.pendingProps,
    s = i.revealOrder,
    u = i.tail
  if ((zt(e, t, i.children, n), (i = Ve.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && T0(e, n, t)
        else if (e.tag === 19) T0(e, n, t)
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
  if ((ze(Ve, i), !(t.mode & 1))) t.memoizedState = null
  else
    switch (s) {
      case 'forwards':
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && df(e) === null && (s = n),
            (n = n.sibling)
        ;(n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ih(t, !1, s, n, u)
        break
      case 'backwards':
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && df(e) === null)) {
            t.child = s
            break
          }
          ;(e = s.sibling), (s.sibling = n), (n = s), (s = e)
        }
        Ih(t, !0, n, null, u)
        break
      case 'together':
        Ih(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ka(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Nr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (so |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(J(153))
  if (t.child !== null) {
    for (
      e = t.child, n = gi(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gi(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function PT(e, t, n) {
  switch (t.tag) {
    case 3:
      cy(t), fs()
      break
    case 5:
      $1(t)
      break
    case 1:
      en(t.type) && lf(t)
      break
    case 4:
      pp(t, t.stateNode.containerInfo)
      break
    case 10:
      var i = t.type._context,
        s = t.memoizedProps.value
      ze(ff, i._currentValue), (i._currentValue = s)
      break
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ze(Ve, Ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hy(e, t, n)
          : (ze(Ve, Ve.current & 1),
            (e = Nr(e, t, n)),
            e !== null ? e.sibling : null)
      ze(Ve, Ve.current & 1)
      break
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return dy(e, t, n)
        t.flags |= 128
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ze(Ve, Ve.current),
        i)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), ay(e, t, n)
  }
  return Nr(e, t, n)
}
var py, Ed, gy, my
py = function (e, t) {
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
Ed = function () {}
gy = function (e, t, n, i) {
  var s = e.memoizedProps
  if (s !== i) {
    ;(e = t.stateNode), Zi(lr.current)
    var u = null
    switch (n) {
      case 'input':
        ;(s = Vh(e, s)), (i = Vh(e, i)), (u = [])
        break
      case 'select':
        ;(s = Ke({}, s, { value: void 0 })),
          (i = Ke({}, i, { value: void 0 })),
          (u = [])
        break
      case 'textarea':
        ;(s = Gh(e, s)), (i = Gh(e, i)), (u = [])
        break
      default:
        typeof s.onClick != 'function' &&
          typeof i.onClick == 'function' &&
          (e.onclick = of)
    }
    Yh(n, i)
    var f
    n = null
    for (y in s)
      if (!i.hasOwnProperty(y) && s.hasOwnProperty(y) && s[y] != null)
        if (y === 'style') {
          var d = s[y]
          for (f in d) d.hasOwnProperty(f) && (n || (n = {}), (n[f] = ''))
        } else
          y !== 'dangerouslySetInnerHTML' &&
            y !== 'children' &&
            y !== 'suppressContentEditableWarning' &&
            y !== 'suppressHydrationWarning' &&
            y !== 'autoFocus' &&
            (Nl.hasOwnProperty(y) ? u || (u = []) : (u = u || []).push(y, null))
    for (y in i) {
      var g = i[y]
      if (
        ((d = s?.[y]),
        i.hasOwnProperty(y) && g !== d && (g != null || d != null))
      )
        if (y === 'style')
          if (d) {
            for (f in d)
              !d.hasOwnProperty(f) ||
                (g && g.hasOwnProperty(f)) ||
                (n || (n = {}), (n[f] = ''))
            for (f in g)
              g.hasOwnProperty(f) &&
                d[f] !== g[f] &&
                (n || (n = {}), (n[f] = g[f]))
          } else n || (u || (u = []), u.push(y, n)), (n = g)
        else
          y === 'dangerouslySetInnerHTML'
            ? ((g = g ? g.__html : void 0),
              (d = d ? d.__html : void 0),
              g != null && d !== g && (u = u || []).push(y, g))
            : y === 'children'
            ? (typeof g != 'string' && typeof g != 'number') ||
              (u = u || []).push(y, '' + g)
            : y !== 'suppressContentEditableWarning' &&
              y !== 'suppressHydrationWarning' &&
              (Nl.hasOwnProperty(y)
                ? (g != null && y === 'onScroll' && Ue('scroll', e),
                  u || d === g || (u = []))
                : (u = u || []).push(y, g))
    }
    n && (u = u || []).push('style', n)
    var y = u
    ;(t.updateQueue = y) && (t.flags |= 4)
  }
}
my = function (e, t, n, i) {
  n !== i && (t.flags |= 4)
}
function pl(e, t) {
  if (!$e)
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
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (i |= s.subtreeFlags & 14680064),
        (i |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling)
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (i |= s.subtreeFlags),
        (i |= s.flags),
        (s.return = e),
        (s = s.sibling)
  return (e.subtreeFlags |= i), (e.childLanes = n), t
}
function RT(e, t, n) {
  var i = t.pendingProps
  switch ((lp(t), t.tag)) {
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
      return en(t.type) && sf(), Tt(t), null
    case 3:
      return (
        (i = t.stateNode),
        hs(),
        Be(Zt),
        Be(Pt),
        mp(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ra(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Vn !== null && (Rd(Vn), (Vn = null)))),
        Ed(e, t),
        Tt(t),
        null
      )
    case 5:
      gp(t)
      var s = Zi(Wl.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        gy(e, t, n, i, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(J(166))
          return Tt(t), null
        }
        if (((e = Zi(lr.current)), Ra(t))) {
          ;(i = t.stateNode), (n = t.type)
          var u = t.memoizedProps
          switch (((i[ir] = t), (i[jl] = u), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ue('cancel', i), Ue('close', i)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Ue('load', i)
              break
            case 'video':
            case 'audio':
              for (s = 0; s < _l.length; s++) Ue(_l[s], i)
              break
            case 'source':
              Ue('error', i)
              break
            case 'img':
            case 'image':
            case 'link':
              Ue('error', i), Ue('load', i)
              break
            case 'details':
              Ue('toggle', i)
              break
            case 'input':
              Mm(i, u), Ue('invalid', i)
              break
            case 'select':
              ;(i._wrapperState = { wasMultiple: !!u.multiple }),
                Ue('invalid', i)
              break
            case 'textarea':
              zm(i, u), Ue('invalid', i)
          }
          Yh(n, u), (s = null)
          for (var f in u)
            if (u.hasOwnProperty(f)) {
              var d = u[f]
              f === 'children'
                ? typeof d == 'string'
                  ? i.textContent !== d &&
                    (u.suppressHydrationWarning !== !0 &&
                      Pa(i.textContent, d, e),
                    (s = ['children', d]))
                  : typeof d == 'number' &&
                    i.textContent !== '' + d &&
                    (u.suppressHydrationWarning !== !0 &&
                      Pa(i.textContent, d, e),
                    (s = ['children', '' + d]))
                : Nl.hasOwnProperty(f) &&
                  d != null &&
                  f === 'onScroll' &&
                  Ue('scroll', i)
            }
          switch (n) {
            case 'input':
              Sa(i), Fm(i, u, !0)
              break
            case 'textarea':
              Sa(i), Um(i)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof u.onClick == 'function' && (i.onclick = of)
          }
          ;(i = s), (t.updateQueue = i), i !== null && (t.flags |= 4)
        } else {
          ;(f = s.nodeType === 9 ? s : s.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = jv(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = f.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == 'string'
                ? (e = f.createElement(n, { is: i.is }))
                : ((e = f.createElement(n)),
                  n === 'select' &&
                    ((f = e),
                    i.multiple
                      ? (f.multiple = !0)
                      : i.size && (f.size = i.size)))
              : (e = f.createElementNS(e, n)),
            (e[ir] = t),
            (e[jl] = i),
            py(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((f = Xh(n, i)), n)) {
              case 'dialog':
                Ue('cancel', e), Ue('close', e), (s = i)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Ue('load', e), (s = i)
                break
              case 'video':
              case 'audio':
                for (s = 0; s < _l.length; s++) Ue(_l[s], e)
                s = i
                break
              case 'source':
                Ue('error', e), (s = i)
                break
              case 'img':
              case 'image':
              case 'link':
                Ue('error', e), Ue('load', e), (s = i)
                break
              case 'details':
                Ue('toggle', e), (s = i)
                break
              case 'input':
                Mm(e, i), (s = Vh(e, i)), Ue('invalid', e)
                break
              case 'option':
                s = i
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                  (s = Ke({}, i, { value: void 0 })),
                  Ue('invalid', e)
                break
              case 'textarea':
                zm(e, i), (s = Gh(e, i)), Ue('invalid', e)
                break
              default:
                s = i
            }
            Yh(n, s), (d = s)
            for (u in d)
              if (d.hasOwnProperty(u)) {
                var g = d[u]
                u === 'style'
                  ? Kv(e, g)
                  : u === 'dangerouslySetInnerHTML'
                  ? ((g = g ? g.__html : void 0), g != null && Vv(e, g))
                  : u === 'children'
                  ? typeof g == 'string'
                    ? (n !== 'textarea' || g !== '') && Dl(e, g)
                    : typeof g == 'number' && Dl(e, '' + g)
                  : u !== 'suppressContentEditableWarning' &&
                    u !== 'suppressHydrationWarning' &&
                    u !== 'autoFocus' &&
                    (Nl.hasOwnProperty(u)
                      ? g != null && u === 'onScroll' && Ue('scroll', e)
                      : g != null && Kd(e, u, g, f))
              }
            switch (n) {
              case 'input':
                Sa(e), Fm(e, i, !1)
                break
              case 'textarea':
                Sa(e), Um(e)
                break
              case 'option':
                i.value != null && e.setAttribute('value', '' + yi(i.value))
                break
              case 'select':
                ;(e.multiple = !!i.multiple),
                  (u = i.value),
                  u != null
                    ? ts(e, !!i.multiple, u, !1)
                    : i.defaultValue != null &&
                      ts(e, !!i.multiple, i.defaultValue, !0)
                break
              default:
                typeof s.onClick == 'function' && (e.onclick = of)
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
      if (e && t.stateNode != null) my(e, t, e.memoizedProps, i)
      else {
        if (typeof i != 'string' && t.stateNode === null) throw Error(J(166))
        if (((n = Zi(Wl.current)), Zi(lr.current), Ra(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[ir] = t),
            (u = i.nodeValue !== n) && ((e = fn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pa(i.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pa(i.nodeValue, n, (e.mode & 1) !== 0)
            }
          u && (t.flags |= 4)
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[ir] = t),
            (t.stateNode = i)
      }
      return Tt(t), null
    case 13:
      if (
        (Be(Ve),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($e && an !== null && t.mode & 1 && !(t.flags & 128))
          N1(), fs(), (t.flags |= 98560), (u = !1)
        else if (((u = Ra(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(J(318))
            if (
              ((u = t.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(J(317))
            u[ir] = t
          } else
            fs(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Tt(t), (u = !1)
        } else Vn !== null && (Rd(Vn), (Vn = null)), (u = !0)
        if (!u) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ve.current & 1 ? ut === 0 && (ut = 3) : Ip())),
          t.updateQueue !== null && (t.flags |= 4),
          Tt(t),
          null)
    case 4:
      return (
        hs(), Ed(e, t), e === null && bl(t.stateNode.containerInfo), Tt(t), null
      )
    case 10:
      return cp(t.type._context), Tt(t), null
    case 17:
      return en(t.type) && sf(), Tt(t), null
    case 19:
      if ((Be(Ve), (u = t.memoizedState), u === null)) return Tt(t), null
      if (((i = (t.flags & 128) !== 0), (f = u.rendering), f === null))
        if (i) pl(u, !1)
        else {
          if (ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((f = df(e)), f !== null)) {
                for (
                  t.flags |= 128,
                    pl(u, !1),
                    i = f.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (u = n),
                    (e = i),
                    (u.flags &= 14680066),
                    (f = u.alternate),
                    f === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = f.childLanes),
                        (u.lanes = f.lanes),
                        (u.child = f.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = f.memoizedProps),
                        (u.memoizedState = f.memoizedState),
                        (u.updateQueue = f.updateQueue),
                        (u.type = f.type),
                        (e = f.dependencies),
                        (u.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ze(Ve, (Ve.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          u.tail !== null &&
            tt() > ps &&
            ((t.flags |= 128), (i = !0), pl(u, !1), (t.lanes = 4194304))
        }
      else {
        if (!i)
          if (((e = df(f)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pl(u, !0),
              u.tail === null && u.tailMode === 'hidden' && !f.alternate && !$e)
            )
              return Tt(t), null
          } else
            2 * tt() - u.renderingStartTime > ps &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), pl(u, !1), (t.lanes = 4194304))
        u.isBackwards
          ? ((f.sibling = t.child), (t.child = f))
          : ((n = u.last),
            n !== null ? (n.sibling = f) : (t.child = f),
            (u.last = f))
      }
      return u.tail !== null
        ? ((t = u.tail),
          (u.rendering = t),
          (u.tail = t.sibling),
          (u.renderingStartTime = tt()),
          (t.sibling = null),
          (n = Ve.current),
          ze(Ve, i ? (n & 1) | 2 : n & 1),
          t)
        : (Tt(t), null)
    case 22:
    case 23:
      return (
        Ap(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? un & 1073741824 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function LT(e, t) {
  switch ((lp(t), t.tag)) {
    case 1:
      return (
        en(t.type) && sf(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        hs(),
        Be(Zt),
        Be(Pt),
        mp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return gp(t), null
    case 13:
      if (
        (Be(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(J(340))
        fs()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return Be(Ve), null
    case 4:
      return hs(), null
    case 10:
      return cp(t.type._context), null
    case 22:
    case 23:
      return Ap(), null
    case 24:
      return null
    default:
      return null
  }
}
var Na = !1,
  At = !1,
  OT = typeof WeakSet == 'function' ? WeakSet : Set,
  re = null
function Zo(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (i) {
        Ye(e, t, i)
      }
    else n.current = null
}
function xd(e, t, n) {
  try {
    n()
  } catch (i) {
    Ye(e, t, i)
  }
}
var A0 = !1
function NT(e, t) {
  if (((sd = tf), (e = _1()), op(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var i = n.getSelection && n.getSelection()
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode
          var s = i.anchorOffset,
            u = i.focusNode
          i = i.focusOffset
          try {
            n.nodeType, u.nodeType
          } catch {
            n = null
            break e
          }
          var f = 0,
            d = -1,
            g = -1,
            y = 0,
            P = 0,
            O = e,
            E = null
          t: for (;;) {
            for (
              var B;
              O !== n || (s !== 0 && O.nodeType !== 3) || (d = f + s),
                O !== u || (i !== 0 && O.nodeType !== 3) || (g = f + i),
                O.nodeType === 3 && (f += O.nodeValue.length),
                (B = O.firstChild) !== null;

            )
              (E = O), (O = B)
            for (;;) {
              if (O === e) break t
              if (
                (E === n && ++y === s && (d = f),
                E === u && ++P === i && (g = f),
                (B = O.nextSibling) !== null)
              )
                break
              ;(O = E), (E = O.parentNode)
            }
            O = B
          }
          n = d === -1 || g === -1 ? null : { start: d, end: g }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (
    ld = { focusedElem: e, selectionRange: n }, tf = !1, re = t;
    re !== null;

  )
    if (((t = re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (re = e)
    else
      for (; re !== null; ) {
        t = re
        try {
          var $ = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if ($ !== null) {
                  var V = $.memoizedProps,
                    q = $.memoizedState,
                    R = t.stateNode,
                    k = R.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? V : Hn(t.type, V),
                      q
                    )
                  R.__reactInternalSnapshotBeforeUpdate = k
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
                throw Error(J(163))
            }
        } catch (j) {
          Ye(t, t.return, j)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (re = e)
          break
        }
        re = t.return
      }
  return ($ = A0), (A0 = !1), $
}
function Al(e, t, n) {
  var i = t.updateQueue
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var s = (i = i.next)
    do {
      if ((s.tag & e) === e) {
        var u = s.destroy
        ;(s.destroy = void 0), u !== void 0 && xd(t, n, u)
      }
      s = s.next
    } while (s !== i)
  }
}
function $f(e, t) {
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
function Cd(e) {
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
function vy(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), vy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ir], delete t[jl], delete t[fd], delete t[gT], delete t[mT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function yy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function I0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yy(e.return)) return null
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
          n != null || t.onclick !== null || (t.onclick = of))
  else if (i !== 4 && ((e = e.child), e !== null))
    for (kd(e, t, n), e = e.sibling; e !== null; ) kd(e, t, n), (e = e.sibling)
}
function Td(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Td(e, t, n), e = e.sibling; e !== null; ) Td(e, t, n), (e = e.sibling)
}
var yt = null,
  jn = !1
function ei(e, t, n) {
  for (n = n.child; n !== null; ) wy(e, t, n), (n = n.sibling)
}
function wy(e, t, n) {
  if (sr && typeof sr.onCommitFiberUnmount == 'function')
    try {
      sr.onCommitFiberUnmount(Of, n)
    } catch {}
  switch (n.tag) {
    case 5:
      At || Zo(n, t)
    case 6:
      var i = yt,
        s = jn
      ;(yt = null),
        ei(e, t, n),
        (yt = i),
        (jn = s),
        yt !== null &&
          (jn
            ? ((e = yt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : yt.removeChild(n.stateNode))
      break
    case 18:
      yt !== null &&
        (jn
          ? ((e = yt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Sh(e.parentNode, n)
              : e.nodeType === 1 && Sh(e, n),
            Ul(e))
          : Sh(yt, n.stateNode))
      break
    case 4:
      ;(i = yt),
        (s = jn),
        (yt = n.stateNode.containerInfo),
        (jn = !0),
        ei(e, t, n),
        (yt = i),
        (jn = s)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !At &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        s = i = i.next
        do {
          var u = s,
            f = u.destroy
          ;(u = u.tag),
            f !== void 0 && (u & 2 || u & 4) && xd(n, t, f),
            (s = s.next)
        } while (s !== i)
      }
      ei(e, t, n)
      break
    case 1:
      if (
        !At &&
        (Zo(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == 'function')
      )
        try {
          ;(i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount()
        } catch (d) {
          Ye(n, t, d)
        }
      ei(e, t, n)
      break
    case 21:
      ei(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((At = (i = At) || n.memoizedState !== null), ei(e, t, n), (At = i))
        : ei(e, t, n)
      break
    default:
      ei(e, t, n)
  }
}
function P0(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new OT()),
      t.forEach(function (i) {
        var s = HT.bind(null, e, i)
        n.has(i) || (n.add(i), i.then(s, s))
      })
  }
}
function bn(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var s = n[i]
      try {
        var u = e,
          f = t,
          d = f
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              ;(yt = d.stateNode), (jn = !1)
              break e
            case 3:
              ;(yt = d.stateNode.containerInfo), (jn = !0)
              break e
            case 4:
              ;(yt = d.stateNode.containerInfo), (jn = !0)
              break e
          }
          d = d.return
        }
        if (yt === null) throw Error(J(160))
        wy(u, f, s), (yt = null), (jn = !1)
        var g = s.alternate
        g !== null && (g.return = null), (s.return = null)
      } catch (y) {
        Ye(s, t, y)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _y(t, e), (t = t.sibling)
}
function _y(e, t) {
  var n = e.alternate,
    i = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((bn(t, e), nr(e), i & 4)) {
        try {
          Al(3, e, e.return), $f(3, e)
        } catch (V) {
          Ye(e, e.return, V)
        }
        try {
          Al(5, e, e.return)
        } catch (V) {
          Ye(e, e.return, V)
        }
      }
      break
    case 1:
      bn(t, e), nr(e), i & 512 && n !== null && Zo(n, n.return)
      break
    case 5:
      if (
        (bn(t, e),
        nr(e),
        i & 512 && n !== null && Zo(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode
        try {
          Dl(s, '')
        } catch (V) {
          Ye(e, e.return, V)
        }
      }
      if (i & 4 && ((s = e.stateNode), s != null)) {
        var u = e.memoizedProps,
          f = n !== null ? n.memoizedProps : u,
          d = e.type,
          g = e.updateQueue
        if (((e.updateQueue = null), g !== null))
          try {
            d === 'input' && u.type === 'radio' && u.name != null && bv(s, u),
              Xh(d, f)
            var y = Xh(d, u)
            for (f = 0; f < g.length; f += 2) {
              var P = g[f],
                O = g[f + 1]
              P === 'style'
                ? Kv(s, O)
                : P === 'dangerouslySetInnerHTML'
                ? Vv(s, O)
                : P === 'children'
                ? Dl(s, O)
                : Kd(s, P, O, y)
            }
            switch (d) {
              case 'input':
                Wh(s, u)
                break
              case 'textarea':
                Hv(s, u)
                break
              case 'select':
                var E = s._wrapperState.wasMultiple
                s._wrapperState.wasMultiple = !!u.multiple
                var B = u.value
                B != null
                  ? ts(s, !!u.multiple, B, !1)
                  : E !== !!u.multiple &&
                    (u.defaultValue != null
                      ? ts(s, !!u.multiple, u.defaultValue, !0)
                      : ts(s, !!u.multiple, u.multiple ? [] : '', !1))
            }
            s[jl] = u
          } catch (V) {
            Ye(e, e.return, V)
          }
      }
      break
    case 6:
      if ((bn(t, e), nr(e), i & 4)) {
        if (e.stateNode === null) throw Error(J(162))
        ;(s = e.stateNode), (u = e.memoizedProps)
        try {
          s.nodeValue = u
        } catch (V) {
          Ye(e, e.return, V)
        }
      }
      break
    case 3:
      if (
        (bn(t, e), nr(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ul(t.containerInfo)
        } catch (V) {
          Ye(e, e.return, V)
        }
      break
    case 4:
      bn(t, e), nr(e)
      break
    case 13:
      bn(t, e),
        nr(e),
        (s = e.child),
        s.flags & 8192 &&
          ((u = s.memoizedState !== null),
          (s.stateNode.isHidden = u),
          !u ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (kp = tt())),
        i & 4 && P0(e)
      break
    case 22:
      if (
        ((P = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((At = (y = At) || P), bn(t, e), (At = y)) : bn(t, e),
        nr(e),
        i & 8192)
      ) {
        if (
          ((y = e.memoizedState !== null),
          (e.stateNode.isHidden = y) && !P && e.mode & 1)
        )
          for (re = e, P = e.child; P !== null; ) {
            for (O = re = P; re !== null; ) {
              switch (((E = re), (B = E.child), E.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Al(4, E, E.return)
                  break
                case 1:
                  Zo(E, E.return)
                  var $ = E.stateNode
                  if (typeof $.componentWillUnmount == 'function') {
                    ;(i = E), (n = E.return)
                    try {
                      ;(t = i),
                        ($.props = t.memoizedProps),
                        ($.state = t.memoizedState),
                        $.componentWillUnmount()
                    } catch (V) {
                      Ye(i, n, V)
                    }
                  }
                  break
                case 5:
                  Zo(E, E.return)
                  break
                case 22:
                  if (E.memoizedState !== null) {
                    L0(O)
                    continue
                  }
              }
              B !== null ? ((B.return = E), (re = B)) : L0(O)
            }
            P = P.sibling
          }
        e: for (P = null, O = e; ; ) {
          if (O.tag === 5) {
            if (P === null) {
              P = O
              try {
                ;(s = O.stateNode),
                  y
                    ? ((u = s.style),
                      typeof u.setProperty == 'function'
                        ? u.setProperty('display', 'none', 'important')
                        : (u.display = 'none'))
                    : ((d = O.stateNode),
                      (g = O.memoizedProps.style),
                      (f =
                        g != null && g.hasOwnProperty('display')
                          ? g.display
                          : null),
                      (d.style.display = Wv('display', f)))
              } catch (V) {
                Ye(e, e.return, V)
              }
            }
          } else if (O.tag === 6) {
            if (P === null)
              try {
                O.stateNode.nodeValue = y ? '' : O.memoizedProps
              } catch (V) {
                Ye(e, e.return, V)
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
      bn(t, e), nr(e), i & 4 && P0(e)
      break
    case 21:
      break
    default:
      bn(t, e), nr(e)
  }
}
function nr(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yy(n)) {
            var i = n
            break e
          }
          n = n.return
        }
        throw Error(J(160))
      }
      switch (i.tag) {
        case 5:
          var s = i.stateNode
          i.flags & 32 && (Dl(s, ''), (i.flags &= -33))
          var u = I0(e)
          Td(e, u, s)
          break
        case 3:
        case 4:
          var f = i.stateNode.containerInfo,
            d = I0(e)
          kd(e, d, f)
          break
        default:
          throw Error(J(161))
      }
    } catch (g) {
      Ye(e, e.return, g)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function DT(e, t, n) {
  ;(re = e), Sy(e)
}
function Sy(e, t, n) {
  for (var i = (e.mode & 1) !== 0; re !== null; ) {
    var s = re,
      u = s.child
    if (s.tag === 22 && i) {
      var f = s.memoizedState !== null || Na
      if (!f) {
        var d = s.alternate,
          g = (d !== null && d.memoizedState !== null) || At
        d = Na
        var y = At
        if (((Na = f), (At = g) && !y))
          for (re = s; re !== null; )
            (f = re),
              (g = f.child),
              f.tag === 22 && f.memoizedState !== null
                ? O0(s)
                : g !== null
                ? ((g.return = f), (re = g))
                : O0(s)
        for (; u !== null; ) (re = u), Sy(u), (u = u.sibling)
        ;(re = s), (Na = d), (At = y)
      }
      R0(e)
    } else
      s.subtreeFlags & 8772 && u !== null ? ((u.return = s), (re = u)) : R0(e)
  }
}
function R0(e) {
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
              At || $f(5, t)
              break
            case 1:
              var i = t.stateNode
              if (t.flags & 4 && !At)
                if (n === null) i.componentDidMount()
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Hn(t.type, n.memoizedProps)
                  i.componentDidUpdate(
                    s,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var u = t.updateQueue
              u !== null && d0(t, u, i)
              break
            case 3:
              var f = t.updateQueue
              if (f !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                d0(t, f, n)
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
                var y = t.alternate
                if (y !== null) {
                  var P = y.memoizedState
                  if (P !== null) {
                    var O = P.dehydrated
                    O !== null && Ul(O)
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
        At || (t.flags & 512 && Cd(t))
      } catch (E) {
        Ye(t, t.return, E)
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
function L0(e) {
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
function O0(e) {
  for (; re !== null; ) {
    var t = re
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            $f(4, t)
          } catch (g) {
            Ye(t, n, g)
          }
          break
        case 1:
          var i = t.stateNode
          if (typeof i.componentDidMount == 'function') {
            var s = t.return
            try {
              i.componentDidMount()
            } catch (g) {
              Ye(t, s, g)
            }
          }
          var u = t.return
          try {
            Cd(t)
          } catch (g) {
            Ye(t, u, g)
          }
          break
        case 5:
          var f = t.return
          try {
            Cd(t)
          } catch (g) {
            Ye(t, f, g)
          }
      }
    } catch (g) {
      Ye(t, t.return, g)
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
var MT = Math.ceil,
  mf = Mr.ReactCurrentDispatcher,
  xp = Mr.ReactCurrentOwner,
  In = Mr.ReactCurrentBatchConfig,
  xe = 0,
  dt = null,
  rt = null,
  wt = 0,
  un = 0,
  es = Si(0),
  ut = 0,
  Yl = null,
  so = 0,
  bf = 0,
  Cp = 0,
  Il = null,
  Yt = null,
  kp = 0,
  ps = 1 / 0,
  kr = null,
  vf = !1,
  Ad = null,
  di = null,
  Da = !1,
  li = null,
  yf = 0,
  Pl = 0,
  Id = null,
  Ga = -1,
  qa = 0
function Bt() {
  return xe & 6 ? tt() : Ga !== -1 ? Ga : (Ga = tt())
}
function pi(e) {
  return e.mode & 1
    ? xe & 2 && wt !== 0
      ? wt & -wt
      : yT.transition !== null
      ? (qa === 0 && (qa = i1()), qa)
      : ((e = Oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : c1(e.type))),
        e)
    : 1
}
function Gn(e, t, n, i) {
  if (50 < Pl) throw ((Pl = 0), (Id = null), Error(J(185)))
  eu(e, n, i),
    (!(xe & 2) || e !== dt) &&
      (e === dt && (!(xe & 2) && (bf |= n), ut === 4 && ii(e, wt)),
      tn(e, i),
      n === 1 && xe === 0 && !(t.mode & 1) && ((ps = tt() + 500), zf && Ei()))
}
function tn(e, t) {
  var n = e.callbackNode
  yk(e, t)
  var i = ef(e, e === dt ? wt : 0)
  if (i === 0)
    n !== null && bm(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && bm(n), t === 1))
      e.tag === 0 ? vT(N0.bind(null, e)) : R1(N0.bind(null, e)),
        dT(function () {
          !(xe & 6) && Ei()
        }),
        (n = null)
    else {
      switch (o1(i)) {
        case 1:
          n = Qd
          break
        case 4:
          n = n1
          break
        case 16:
          n = Za
          break
        case 536870912:
          n = r1
          break
        default:
          n = Za
      }
      n = Py(n, Ey.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Ey(e, t) {
  if (((Ga = -1), (qa = 0), xe & 6)) throw Error(J(327))
  var n = e.callbackNode
  if (ss() && e.callbackNode !== n) return null
  var i = ef(e, e === dt ? wt : 0)
  if (i === 0) return null
  if (i & 30 || i & e.expiredLanes || t) t = wf(e, i)
  else {
    t = i
    var s = xe
    xe |= 2
    var u = Cy()
    ;(dt !== e || wt !== t) && ((kr = null), (ps = tt() + 500), to(e, t))
    do
      try {
        UT()
        break
      } catch (d) {
        xy(e, d)
      }
    while (!0)
    fp(),
      (mf.current = u),
      (xe = s),
      rt !== null ? (t = 0) : ((dt = null), (wt = 0), (t = ut))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = td(e)), s !== 0 && ((i = s), (t = Pd(e, s)))), t === 1)
    )
      throw ((n = Yl), to(e, 0), ii(e, i), tn(e, tt()), n)
    if (t === 6) ii(e, i)
    else {
      if (
        ((s = e.current.alternate),
        !(i & 30) &&
          !FT(s) &&
          ((t = wf(e, i)),
          t === 2 && ((u = td(e)), u !== 0 && ((i = u), (t = Pd(e, u)))),
          t === 1))
      )
        throw ((n = Yl), to(e, 0), ii(e, i), tn(e, tt()), n)
      switch (((e.finishedWork = s), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(J(345))
        case 2:
          Yi(e, Yt, kr)
          break
        case 3:
          if (
            (ii(e, i), (i & 130023424) === i && ((t = kp + 500 - tt()), 10 < t))
          ) {
            if (ef(e, 0) !== 0) break
            if (((s = e.suspendedLanes), (s & i) !== i)) {
              Bt(), (e.pingedLanes |= e.suspendedLanes & s)
              break
            }
            e.timeoutHandle = ad(Yi.bind(null, e, Yt, kr), t)
            break
          }
          Yi(e, Yt, kr)
          break
        case 4:
          if ((ii(e, i), (i & 4194240) === i)) break
          for (t = e.eventTimes, s = -1; 0 < i; ) {
            var f = 31 - Kn(i)
            ;(u = 1 << f), (f = t[f]), f > s && (s = f), (i &= ~u)
          }
          if (
            ((i = s),
            (i = tt() - i),
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
                : 1960 * MT(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = ad(Yi.bind(null, e, Yt, kr), i)
            break
          }
          Yi(e, Yt, kr)
          break
        case 5:
          Yi(e, Yt, kr)
          break
        default:
          throw Error(J(329))
      }
    }
  }
  return tn(e, tt()), e.callbackNode === n ? Ey.bind(null, e) : null
}
function Pd(e, t) {
  var n = Il
  return (
    e.current.memoizedState.isDehydrated && (to(e, t).flags |= 256),
    (e = wf(e, t)),
    e !== 2 && ((t = Yt), (Yt = n), t !== null && Rd(t)),
    e
  )
}
function Rd(e) {
  Yt === null ? (Yt = e) : Yt.push.apply(Yt, e)
}
function FT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            u = s.getSnapshot
          s = s.value
          try {
            if (!qn(u(), s)) return !1
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
function ii(e, t) {
  for (
    t &= ~Cp,
      t &= ~bf,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Kn(t),
      i = 1 << n
    ;(e[n] = -1), (t &= ~i)
  }
}
function N0(e) {
  if (xe & 6) throw Error(J(327))
  ss()
  var t = ef(e, 0)
  if (!(t & 1)) return tn(e, tt()), null
  var n = wf(e, t)
  if (e.tag !== 0 && n === 2) {
    var i = td(e)
    i !== 0 && ((t = i), (n = Pd(e, i)))
  }
  if (n === 1) throw ((n = Yl), to(e, 0), ii(e, t), tn(e, tt()), n)
  if (n === 6) throw Error(J(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yi(e, Yt, kr),
    tn(e, tt()),
    null
  )
}
function Tp(e, t) {
  var n = xe
  xe |= 1
  try {
    return e(t)
  } finally {
    ;(xe = n), xe === 0 && ((ps = tt() + 500), zf && Ei())
  }
}
function lo(e) {
  li !== null && li.tag === 0 && !(xe & 6) && ss()
  var t = xe
  xe |= 1
  var n = In.transition,
    i = Oe
  try {
    if (((In.transition = null), (Oe = 1), e)) return e()
  } finally {
    ;(Oe = i), (In.transition = n), (xe = t), !(xe & 6) && Ei()
  }
}
function Ap() {
  ;(un = es.current), Be(es)
}
function to(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), hT(n)), rt !== null))
    for (n = rt.return; n !== null; ) {
      var i = n
      switch ((lp(i), i.tag)) {
        case 1:
          ;(i = i.type.childContextTypes), i != null && sf()
          break
        case 3:
          hs(), Be(Zt), Be(Pt), mp()
          break
        case 5:
          gp(i)
          break
        case 4:
          hs()
          break
        case 13:
          Be(Ve)
          break
        case 19:
          Be(Ve)
          break
        case 10:
          cp(i.type._context)
          break
        case 22:
        case 23:
          Ap()
      }
      n = n.return
    }
  if (
    ((dt = e),
    (rt = e = gi(e.current, null)),
    (wt = un = t),
    (ut = 0),
    (Yl = null),
    (Cp = bf = so = 0),
    (Yt = Il = null),
    Ji !== null)
  ) {
    for (t = 0; t < Ji.length; t++)
      if (((n = Ji[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null
        var s = i.next,
          u = n.pending
        if (u !== null) {
          var f = u.next
          ;(u.next = s), (i.next = f)
        }
        n.pending = i
      }
    Ji = null
  }
  return e
}
function xy(e, t) {
  do {
    var n = rt
    try {
      if ((fp(), (Va.current = gf), pf)) {
        for (var i = We.memoizedState; i !== null; ) {
          var s = i.queue
          s !== null && (s.pending = null), (i = i.next)
        }
        pf = !1
      }
      if (
        ((oo = 0),
        (ht = lt = We = null),
        (Tl = !1),
        (Kl = 0),
        (xp.current = null),
        n === null || n.return === null)
      ) {
        ;(ut = 1), (Yl = t), (rt = null)
        break
      }
      e: {
        var u = e,
          f = n.return,
          d = n,
          g = t
        if (
          ((t = wt),
          (d.flags |= 32768),
          g !== null && typeof g == 'object' && typeof g.then == 'function')
        ) {
          var y = g,
            P = d,
            O = P.tag
          if (!(P.mode & 1) && (O === 0 || O === 11 || O === 15)) {
            var E = P.alternate
            E
              ? ((P.updateQueue = E.updateQueue),
                (P.memoizedState = E.memoizedState),
                (P.lanes = E.lanes))
              : ((P.updateQueue = null), (P.memoizedState = null))
          }
          var B = _0(f)
          if (B !== null) {
            ;(B.flags &= -257),
              S0(B, f, d, u, t),
              B.mode & 1 && w0(u, y, t),
              (t = B),
              (g = y)
            var $ = t.updateQueue
            if ($ === null) {
              var V = new Set()
              V.add(g), (t.updateQueue = V)
            } else $.add(g)
            break e
          } else {
            if (!(t & 1)) {
              w0(u, y, t), Ip()
              break e
            }
            g = Error(J(426))
          }
        } else if ($e && d.mode & 1) {
          var q = _0(f)
          if (q !== null) {
            !(q.flags & 65536) && (q.flags |= 256),
              S0(q, f, d, u, t),
              up(ds(g, d))
            break e
          }
        }
        ;(u = g = ds(g, d)),
          ut !== 4 && (ut = 2),
          Il === null ? (Il = [u]) : Il.push(u),
          (u = f)
        do {
          switch (u.tag) {
            case 3:
              ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
              var R = sy(u, g, t)
              h0(u, R)
              break e
            case 1:
              d = g
              var k = u.type,
                N = u.stateNode
              if (
                !(u.flags & 128) &&
                (typeof k.getDerivedStateFromError == 'function' ||
                  (N !== null &&
                    typeof N.componentDidCatch == 'function' &&
                    (di === null || !di.has(N))))
              ) {
                ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
                var j = ly(u, d, t)
                h0(u, j)
                break e
              }
          }
          u = u.return
        } while (u !== null)
      }
      Ty(n)
    } catch (X) {
      ;(t = X), rt === n && n !== null && (rt = n = n.return)
      continue
    }
    break
  } while (!0)
}
function Cy() {
  var e = mf.current
  return (mf.current = gf), e === null ? gf : e
}
function Ip() {
  ;(ut === 0 || ut === 3 || ut === 2) && (ut = 4),
    dt === null || (!(so & 268435455) && !(bf & 268435455)) || ii(dt, wt)
}
function wf(e, t) {
  var n = xe
  xe |= 2
  var i = Cy()
  ;(dt !== e || wt !== t) && ((kr = null), to(e, t))
  do
    try {
      zT()
      break
    } catch (s) {
      xy(e, s)
    }
  while (!0)
  if ((fp(), (xe = n), (mf.current = i), rt !== null)) throw Error(J(261))
  return (dt = null), (wt = 0), ut
}
function zT() {
  for (; rt !== null; ) ky(rt)
}
function UT() {
  for (; rt !== null && !ak(); ) ky(rt)
}
function ky(e) {
  var t = Iy(e.alternate, e, un)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Ty(e) : (rt = t),
    (xp.current = null)
}
function Ty(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = LT(n, t)), n !== null)) {
        ;(n.flags &= 32767), (rt = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ut = 6), (rt = null)
        return
      }
    } else if (((n = RT(n, t, un)), n !== null)) {
      rt = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      rt = t
      return
    }
    rt = t = e
  } while (t !== null)
  ut === 0 && (ut = 5)
}
function Yi(e, t, n) {
  var i = Oe,
    s = In.transition
  try {
    ;(In.transition = null), (Oe = 1), BT(e, t, n, i)
  } finally {
    ;(In.transition = s), (Oe = i)
  }
  return null
}
function BT(e, t, n, i) {
  do ss()
  while (li !== null)
  if (xe & 6) throw Error(J(327))
  n = e.finishedWork
  var s = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(J(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var u = n.lanes | n.childLanes
  if (
    (wk(e, u),
    e === dt && ((rt = dt = null), (wt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Da ||
      ((Da = !0),
      Py(Za, function () {
        return ss(), null
      })),
    (u = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || u)
  ) {
    ;(u = In.transition), (In.transition = null)
    var f = Oe
    Oe = 1
    var d = xe
    ;(xe |= 4),
      (xp.current = null),
      NT(e, n),
      _y(n, e),
      oT(ld),
      (tf = !!sd),
      (ld = sd = null),
      (e.current = n),
      DT(n),
      fk(),
      (xe = d),
      (Oe = f),
      (In.transition = u)
  } else e.current = n
  if (
    (Da && ((Da = !1), (li = e), (yf = s)),
    (u = e.pendingLanes),
    u === 0 && (di = null),
    dk(n.stateNode),
    tn(e, tt()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), i(s.value, { componentStack: s.stack, digest: s.digest })
  if (vf) throw ((vf = !1), (e = Ad), (Ad = null), e)
  return (
    yf & 1 && e.tag !== 0 && ss(),
    (u = e.pendingLanes),
    u & 1 ? (e === Id ? Pl++ : ((Pl = 0), (Id = e))) : (Pl = 0),
    Ei(),
    null
  )
}
function ss() {
  if (li !== null) {
    var e = o1(yf),
      t = In.transition,
      n = Oe
    try {
      if (((In.transition = null), (Oe = 16 > e ? 16 : e), li === null))
        var i = !1
      else {
        if (((e = li), (li = null), (yf = 0), xe & 6)) throw Error(J(331))
        var s = xe
        for (xe |= 4, re = e.current; re !== null; ) {
          var u = re,
            f = u.child
          if (re.flags & 16) {
            var d = u.deletions
            if (d !== null) {
              for (var g = 0; g < d.length; g++) {
                var y = d[g]
                for (re = y; re !== null; ) {
                  var P = re
                  switch (P.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(8, P, u)
                  }
                  var O = P.child
                  if (O !== null) (O.return = P), (re = O)
                  else
                    for (; re !== null; ) {
                      P = re
                      var E = P.sibling,
                        B = P.return
                      if ((vy(P), P === y)) {
                        re = null
                        break
                      }
                      if (E !== null) {
                        ;(E.return = B), (re = E)
                        break
                      }
                      re = B
                    }
                }
              }
              var $ = u.alternate
              if ($ !== null) {
                var V = $.child
                if (V !== null) {
                  $.child = null
                  do {
                    var q = V.sibling
                    ;(V.sibling = null), (V = q)
                  } while (V !== null)
                }
              }
              re = u
            }
          }
          if (u.subtreeFlags & 2064 && f !== null) (f.return = u), (re = f)
          else
            e: for (; re !== null; ) {
              if (((u = re), u.flags & 2048))
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Al(9, u, u.return)
                }
              var R = u.sibling
              if (R !== null) {
                ;(R.return = u.return), (re = R)
                break e
              }
              re = u.return
            }
        }
        var k = e.current
        for (re = k; re !== null; ) {
          f = re
          var N = f.child
          if (f.subtreeFlags & 2064 && N !== null) (N.return = f), (re = N)
          else
            e: for (f = k; re !== null; ) {
              if (((d = re), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $f(9, d)
                  }
                } catch (X) {
                  Ye(d, d.return, X)
                }
              if (d === f) {
                re = null
                break e
              }
              var j = d.sibling
              if (j !== null) {
                ;(j.return = d.return), (re = j)
                break e
              }
              re = d.return
            }
        }
        if (
          ((xe = s), Ei(), sr && typeof sr.onPostCommitFiberRoot == 'function')
        )
          try {
            sr.onPostCommitFiberRoot(Of, e)
          } catch {}
        i = !0
      }
      return i
    } finally {
      ;(Oe = n), (In.transition = t)
    }
  }
  return !1
}
function D0(e, t, n) {
  ;(t = ds(n, t)),
    (t = sy(e, t, 1)),
    (e = hi(e, t, 1)),
    (t = Bt()),
    e !== null && (eu(e, 1, t), tn(e, t))
}
function Ye(e, t, n) {
  if (e.tag === 3) D0(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        D0(t, e, n)
        break
      } else if (t.tag === 1) {
        var i = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof i.componentDidCatch == 'function' &&
            (di === null || !di.has(i)))
        ) {
          ;(e = ds(n, e)),
            (e = ly(t, e, 1)),
            (t = hi(t, e, 1)),
            (e = Bt()),
            t !== null && (eu(t, 1, e), tn(t, e))
          break
        }
      }
      t = t.return
    }
}
function $T(e, t, n) {
  var i = e.pingCache
  i !== null && i.delete(t),
    (t = Bt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    dt === e &&
      (wt & n) === n &&
      (ut === 4 || (ut === 3 && (wt & 130023424) === wt && 500 > tt() - kp)
        ? to(e, 0)
        : (Cp |= n)),
    tn(e, t)
}
function Ay(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ca), (Ca <<= 1), !(Ca & 130023424) && (Ca = 4194304))
      : (t = 1))
  var n = Bt()
  ;(e = Or(e, t)), e !== null && (eu(e, t, n), tn(e, n))
}
function bT(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Ay(e, n)
}
function HT(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        s = e.memoizedState
      s !== null && (n = s.retryLane)
      break
    case 19:
      i = e.stateNode
      break
    default:
      throw Error(J(314))
  }
  i !== null && i.delete(t), Ay(e, n)
}
var Iy
Iy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Zt.current) Jt = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Jt = !1), PT(e, t, n)
      Jt = !!(e.flags & 131072)
    }
  else (Jt = !1), $e && t.flags & 1048576 && L1(t, af, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type
      Ka(e, t), (e = t.pendingProps)
      var s = as(t, Pt.current)
      os(t, n), (s = yp(null, t, i, e, s, n))
      var u = wp()
      return (
        (t.flags |= 1),
        typeof s == 'object' &&
        s !== null &&
        typeof s.render == 'function' &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            en(i) ? ((u = !0), lf(t)) : (u = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            dp(t),
            (s.updater = Uf),
            (t.stateNode = s),
            (s._reactInternals = t),
            md(t, i, e, n),
            (t = wd(null, t, i, !0, u, n)))
          : ((t.tag = 0), $e && u && sp(t), zt(null, t, s, n), (t = t.child)),
        t
      )
    case 16:
      i = t.elementType
      e: {
        switch (
          (Ka(e, t),
          (e = t.pendingProps),
          (s = i._init),
          (i = s(i._payload)),
          (t.type = i),
          (s = t.tag = VT(i)),
          (e = Hn(i, e)),
          s)
        ) {
          case 0:
            t = yd(null, t, i, e, n)
            break e
          case 1:
            t = C0(null, t, i, e, n)
            break e
          case 11:
            t = E0(null, t, i, e, n)
            break e
          case 14:
            t = x0(null, t, i, Hn(i.type, e), n)
            break e
        }
        throw Error(J(306, i, ''))
      }
      return t
    case 0:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Hn(i, s)),
        yd(e, t, i, s, n)
      )
    case 1:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Hn(i, s)),
        C0(e, t, i, s, n)
      )
    case 3:
      e: {
        if ((cy(t), e === null)) throw Error(J(387))
        ;(i = t.pendingProps),
          (u = t.memoizedState),
          (s = u.element),
          M1(e, t),
          hf(t, i, null, n)
        var f = t.memoizedState
        if (((i = f.element), u.isDehydrated))
          if (
            ((u = {
              element: i,
              isDehydrated: !1,
              cache: f.cache,
              pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
              transitions: f.transitions,
            }),
            (t.updateQueue.baseState = u),
            (t.memoizedState = u),
            t.flags & 256)
          ) {
            ;(s = ds(Error(J(423)), t)), (t = k0(e, t, i, n, s))
            break e
          } else if (i !== s) {
            ;(s = ds(Error(J(424)), t)), (t = k0(e, t, i, n, s))
            break e
          } else
            for (
              an = ci(t.stateNode.containerInfo.firstChild),
                fn = t,
                $e = !0,
                Vn = null,
                n = B1(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((fs(), i === s)) {
            t = Nr(e, t, n)
            break e
          }
          zt(e, t, i, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        $1(t),
        e === null && dd(t),
        (i = t.type),
        (s = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (f = s.children),
        ud(i, s) ? (f = null) : u !== null && ud(i, u) && (t.flags |= 32),
        fy(e, t),
        zt(e, t, f, n),
        t.child
      )
    case 6:
      return e === null && dd(t), null
    case 13:
      return hy(e, t, n)
    case 4:
      return (
        pp(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = cs(t, null, i, n)) : zt(e, t, i, n),
        t.child
      )
    case 11:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Hn(i, s)),
        E0(e, t, i, s, n)
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
          (s = t.pendingProps),
          (u = t.memoizedProps),
          (f = s.value),
          ze(ff, i._currentValue),
          (i._currentValue = f),
          u !== null)
        )
          if (qn(u.value, f)) {
            if (u.children === s.children && !Zt.current) {
              t = Nr(e, t, n)
              break e
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var d = u.dependencies
              if (d !== null) {
                f = u.child
                for (var g = d.firstContext; g !== null; ) {
                  if (g.context === i) {
                    if (u.tag === 1) {
                      ;(g = Pr(-1, n & -n)), (g.tag = 2)
                      var y = u.updateQueue
                      if (y !== null) {
                        y = y.shared
                        var P = y.pending
                        P === null
                          ? (g.next = g)
                          : ((g.next = P.next), (P.next = g)),
                          (y.pending = g)
                      }
                    }
                    ;(u.lanes |= n),
                      (g = u.alternate),
                      g !== null && (g.lanes |= n),
                      pd(u.return, n, t),
                      (d.lanes |= n)
                    break
                  }
                  g = g.next
                }
              } else if (u.tag === 10) f = u.type === t.type ? null : u.child
              else if (u.tag === 18) {
                if (((f = u.return), f === null)) throw Error(J(341))
                ;(f.lanes |= n),
                  (d = f.alternate),
                  d !== null && (d.lanes |= n),
                  pd(f, n, t),
                  (f = u.sibling)
              } else f = u.child
              if (f !== null) f.return = u
              else
                for (f = u; f !== null; ) {
                  if (f === t) {
                    f = null
                    break
                  }
                  if (((u = f.sibling), u !== null)) {
                    ;(u.return = f.return), (f = u)
                    break
                  }
                  f = f.return
                }
              u = f
            }
        zt(e, t, s.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (s = t.type),
        (i = t.pendingProps.children),
        os(t, n),
        (s = Pn(s)),
        (i = i(s)),
        (t.flags |= 1),
        zt(e, t, i, n),
        t.child
      )
    case 14:
      return (
        (i = t.type),
        (s = Hn(i, t.pendingProps)),
        (s = Hn(i.type, s)),
        x0(e, t, i, s, n)
      )
    case 15:
      return uy(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Hn(i, s)),
        Ka(e, t),
        (t.tag = 1),
        en(i) ? ((e = !0), lf(t)) : (e = !1),
        os(t, n),
        z1(t, i, s),
        md(t, i, s, n),
        wd(null, t, i, !0, e, n)
      )
    case 19:
      return dy(e, t, n)
    case 22:
      return ay(e, t, n)
  }
  throw Error(J(156, t.tag))
}
function Py(e, t) {
  return t1(e, t)
}
function jT(e, t, n, i) {
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
function An(e, t, n, i) {
  return new jT(e, t, n, i)
}
function Pp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function VT(e) {
  if (typeof e == 'function') return Pp(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === qd)) return 11
    if (e === Yd) return 14
  }
  return 2
}
function gi(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = An(e.tag, t, e.key, e.mode)),
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
function Ya(e, t, n, i, s, u) {
  var f = 2
  if (((i = e), typeof e == 'function')) Pp(e) && (f = 1)
  else if (typeof e == 'string') f = 5
  else
    e: switch (e) {
      case Vo:
        return no(n.children, s, u, t)
      case Gd:
        ;(f = 8), (s |= 8)
        break
      case $h:
        return (e = An(12, n, t, s | 2)), (e.elementType = $h), (e.lanes = u), e
      case bh:
        return (e = An(13, n, t, s)), (e.elementType = bh), (e.lanes = u), e
      case Hh:
        return (e = An(19, n, t, s)), (e.elementType = Hh), (e.lanes = u), e
      case Uv:
        return Hf(n, s, u, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Fv:
              f = 10
              break e
            case zv:
              f = 9
              break e
            case qd:
              f = 11
              break e
            case Yd:
              f = 14
              break e
            case ti:
              ;(f = 16), (i = null)
              break e
          }
        throw Error(J(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = An(f, n, t, s)), (t.elementType = e), (t.type = i), (t.lanes = u), t
  )
}
function no(e, t, n, i) {
  return (e = An(7, e, i, t)), (e.lanes = n), e
}
function Hf(e, t, n, i) {
  return (
    (e = An(22, e, i, t)),
    (e.elementType = Uv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ph(e, t, n) {
  return (e = An(6, e, null, t)), (e.lanes = n), e
}
function Rh(e, t, n) {
  return (
    (t = An(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function WT(e, t, n, i, s) {
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
    (this.eventTimes = fh(0)),
    (this.expirationTimes = fh(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fh(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null)
}
function Rp(e, t, n, i, s, u, f, d, g) {
  return (
    (e = new WT(e, t, n, d, g)),
    t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
    (u = An(3, null, null, t)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dp(u),
    e
  )
}
function KT(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: jo,
    key: i == null ? null : '' + i,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Ry(e) {
  if (!e) return wi
  e = e._reactInternals
  e: {
    if (ao(e) !== e || e.tag !== 1) throw Error(J(170))
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
    if (en(n)) return P1(e, n, t)
  }
  return t
}
function Ly(e, t, n, i, s, u, f, d, g) {
  return (
    (e = Rp(n, i, !0, e, s, u, f, d, g)),
    (e.context = Ry(null)),
    (n = e.current),
    (i = Bt()),
    (s = pi(n)),
    (u = Pr(i, s)),
    (u.callback = t ?? null),
    hi(n, u, s),
    (e.current.lanes = s),
    eu(e, s, i),
    tn(e, i),
    e
  )
}
function jf(e, t, n, i) {
  var s = t.current,
    u = Bt(),
    f = pi(s)
  return (
    (n = Ry(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pr(u, f)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = hi(s, t, f)),
    e !== null && (Gn(e, s, f, u), ja(e, s, f)),
    f
  )
}
function _f(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function M0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Lp(e, t) {
  M0(e, t), (e = e.alternate) && M0(e, t)
}
function GT() {
  return null
}
var Oy =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Op(e) {
  this._internalRoot = e
}
Vf.prototype.render = Op.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(J(409))
  jf(e, t, null, null)
}
Vf.prototype.unmount = Op.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    lo(function () {
      jf(null, e, null, null)
    }),
      (t[Lr] = null)
  }
}
function Vf(e) {
  this._internalRoot = e
}
Vf.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = u1()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < ri.length && t !== 0 && t < ri[n].priority; n++);
    ri.splice(n, 0, e), n === 0 && f1(e)
  }
}
function Np(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Wf(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function F0() {}
function qT(e, t, n, i, s) {
  if (s) {
    if (typeof i == 'function') {
      var u = i
      i = function () {
        var y = _f(f)
        u.call(y)
      }
    }
    var f = Ly(t, i, e, 0, null, !1, !1, '', F0)
    return (
      (e._reactRootContainer = f),
      (e[Lr] = f.current),
      bl(e.nodeType === 8 ? e.parentNode : e),
      lo(),
      f
    )
  }
  for (; (s = e.lastChild); ) e.removeChild(s)
  if (typeof i == 'function') {
    var d = i
    i = function () {
      var y = _f(g)
      d.call(y)
    }
  }
  var g = Rp(e, 0, !1, null, null, !1, !1, '', F0)
  return (
    (e._reactRootContainer = g),
    (e[Lr] = g.current),
    bl(e.nodeType === 8 ? e.parentNode : e),
    lo(function () {
      jf(t, g, n, i)
    }),
    g
  )
}
function Kf(e, t, n, i, s) {
  var u = n._reactRootContainer
  if (u) {
    var f = u
    if (typeof s == 'function') {
      var d = s
      s = function () {
        var g = _f(f)
        d.call(g)
      }
    }
    jf(t, f, e, s)
  } else f = qT(n, t, e, s, i)
  return _f(f)
}
s1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = wl(t.pendingLanes)
        n !== 0 &&
          (Jd(t, n | 1), tn(t, tt()), !(xe & 6) && ((ps = tt() + 500), Ei()))
      }
      break
    case 13:
      lo(function () {
        var i = Or(e, 1)
        if (i !== null) {
          var s = Bt()
          Gn(i, e, 1, s)
        }
      }),
        Lp(e, 1)
  }
}
Zd = function (e) {
  if (e.tag === 13) {
    var t = Or(e, 134217728)
    if (t !== null) {
      var n = Bt()
      Gn(t, e, 134217728, n)
    }
    Lp(e, 134217728)
  }
}
l1 = function (e) {
  if (e.tag === 13) {
    var t = pi(e),
      n = Or(e, t)
    if (n !== null) {
      var i = Bt()
      Gn(n, e, t, i)
    }
    Lp(e, t)
  }
}
u1 = function () {
  return Oe
}
a1 = function (e, t) {
  var n = Oe
  try {
    return (Oe = e), t()
  } finally {
    Oe = n
  }
}
Jh = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Wh(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var s = Ff(i)
            if (!s) throw Error(J(90))
            $v(i), Wh(i, s)
          }
        }
      }
      break
    case 'textarea':
      Hv(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && ts(e, !!n.multiple, t, !1)
  }
}
Yv = Tp
Xv = lo
var YT = { usingClientEntryPoint: !1, Events: [nu, qo, Ff, Gv, qv, Tp] },
  gl = {
    findFiberByHostInstance: Qi,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  XT = {
    bundleType: gl.bundleType,
    version: gl.version,
    rendererPackageName: gl.rendererPackageName,
    rendererConfig: gl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zv(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: gl.findFiberByHostInstance || GT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ma = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Ma.isDisabled && Ma.supportsFiber)
    try {
      ;(Of = Ma.inject(XT)), (sr = Ma)
    } catch {}
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = YT
hn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Np(t)) throw Error(J(200))
  return KT(e, t, null, n)
}
hn.createRoot = function (e, t) {
  if (!Np(e)) throw Error(J(299))
  var n = !1,
    i = '',
    s = Oy
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Rp(e, 1, !1, null, null, n, !1, i, s)),
    (e[Lr] = t.current),
    bl(e.nodeType === 8 ? e.parentNode : e),
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
  return (e = Zv(t)), (e = e === null ? null : e.stateNode), e
}
hn.flushSync = function (e) {
  return lo(e)
}
hn.hydrate = function (e, t, n) {
  if (!Wf(t)) throw Error(J(200))
  return Kf(null, e, t, !0, n)
}
hn.hydrateRoot = function (e, t, n) {
  if (!Np(e)) throw Error(J(405))
  var i = (n != null && n.hydratedSources) || null,
    s = !1,
    u = '',
    f = Oy
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
    (t = Ly(t, null, e, 1, n ?? null, s, !1, u, f)),
    (e[Lr] = t.current),
    bl(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s)
  return new Vf(t)
}
hn.render = function (e, t, n) {
  if (!Wf(t)) throw Error(J(200))
  return Kf(null, e, t, !1, n)
}
hn.unmountComponentAtNode = function (e) {
  if (!Wf(e)) throw Error(J(40))
  return e._reactRootContainer
    ? (lo(function () {
        Kf(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Lr] = null)
        })
      }),
      !0)
    : !1
}
hn.unstable_batchedUpdates = Tp
hn.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Wf(n)) throw Error(J(200))
  if (e == null || e._reactInternals === void 0) throw Error(J(38))
  return Kf(e, t, n, !1, i)
}
hn.version = '18.2.0-next-9e3b772b8-20220608'
function Ny() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ny)
    } catch (e) {
      console.error(e)
    }
}
Ny(), (Lv.exports = hn)
var QT = Lv.exports,
  z0 = QT
;(Uh.createRoot = z0.createRoot), (Uh.hydrateRoot = z0.hydrateRoot)
const JT =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  ZT = {
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
  e4 = (e) => ZT[e],
  t4 = (e) => e.replace(JT, e4)
let U0 = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: t4,
}
const n4 = (e = {}) => {
    U0 = { ...U0, ...e }
  },
  r4 = {
    type: '3rdParty',
    init(e) {
      n4(e.options.react)
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
 */ function Sf() {
  return (
    (Sf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    Sf.apply(this, arguments)
  )
}
var eo
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(eo || (eo = {}))
const B0 = 'popstate'
function i4(e) {
  e === void 0 && (e = {})
  function t(i, s) {
    let { pathname: u, search: f, hash: d } = i.location
    return Ld(
      '',
      { pathname: u, search: f, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    )
  }
  function n(i, s) {
    return typeof s == 'string' ? s : My(s)
  }
  return s4(t, n, null, e)
}
function Dy(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function o4() {
  return Math.random().toString(36).substr(2, 8)
}
function $0(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Ld(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    Sf(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Fy(t) : t,
      { state: n, key: (t && t.key) || i || o4() }
    )
  )
}
function My(e) {
  let { pathname: t = '/', search: n = '', hash: i = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    i && i !== '#' && (t += i.charAt(0) === '#' ? i : '#' + i),
    t
  )
}
function Fy(e) {
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
function s4(e, t, n, i) {
  i === void 0 && (i = {})
  let { window: s = document.defaultView, v5Compat: u = !1 } = i,
    f = s.history,
    d = eo.Pop,
    g = null,
    y = P()
  y == null && ((y = 0), f.replaceState(Sf({}, f.state, { idx: y }), ''))
  function P() {
    return (f.state || { idx: null }).idx
  }
  function O() {
    d = eo.Pop
    let q = P(),
      R = q == null ? null : q - y
    ;(y = q), g && g({ action: d, location: V.location, delta: R })
  }
  function E(q, R) {
    d = eo.Push
    let k = Ld(V.location, q, R)
    y = P() + 1
    let N = $0(k, y),
      j = V.createHref(k)
    try {
      f.pushState(N, '', j)
    } catch (X) {
      if (X instanceof DOMException && X.name === 'DataCloneError') throw X
      s.location.assign(j)
    }
    u && g && g({ action: d, location: V.location, delta: 1 })
  }
  function B(q, R) {
    d = eo.Replace
    let k = Ld(V.location, q, R)
    y = P()
    let N = $0(k, y),
      j = V.createHref(k)
    f.replaceState(N, '', j),
      u && g && g({ action: d, location: V.location, delta: 0 })
  }
  function $(q) {
    let R = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      k = typeof q == 'string' ? q : My(q)
    return (
      (k = k.replace(/ $/, '%20')),
      Dy(
        R,
        'No window.location.(origin|href) available to create URL for href: ' +
          k
      ),
      new URL(k, R)
    )
  }
  let V = {
    get action() {
      return d
    },
    get location() {
      return e(s, f)
    },
    listen(q) {
      if (g) throw new Error('A history only accepts one active listener')
      return (
        s.addEventListener(B0, O),
        (g = q),
        () => {
          s.removeEventListener(B0, O), (g = null)
        }
      )
    },
    createHref(q) {
      return t(s, q)
    },
    createURL: $,
    encodeLocation(q) {
      let R = $(q)
      return { pathname: R.pathname, search: R.search, hash: R.hash }
    },
    push: E,
    replace: B,
    go(q) {
      return f.go(q)
    },
  }
  return V
}
var b0
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(b0 || (b0 = {}))
function l4(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    i = e.charAt(n)
  return i && i !== '/' ? null : e.slice(n) || '/'
}
const zy = ['post', 'put', 'patch', 'delete']
new Set(zy)
const u4 = ['get', ...zy]
new Set(u4)
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
const a4 = It.createContext(null),
  Uy = It.createContext(null)
function f4() {
  return It.useContext(Uy) != null
}
function c4(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: s = eo.Pop,
    navigator: u,
    static: f = !1,
    future: d,
  } = e
  f4() && Dy(!1)
  let g = t.replace(/^\/*/, '/'),
    y = It.useMemo(
      () => ({
        basename: g,
        navigator: u,
        static: f,
        future: Od({ v7_relativeSplatPath: !1 }, d),
      }),
      [g, d, u, f]
    )
  typeof i == 'string' && (i = Fy(i))
  let {
      pathname: P = '/',
      search: O = '',
      hash: E = '',
      state: B = null,
      key: $ = 'default',
    } = i,
    V = It.useMemo(() => {
      let q = l4(P, g)
      return q == null
        ? null
        : {
            location: { pathname: q, search: O, hash: E, state: B, key: $ },
            navigationType: s,
          }
    }, [g, P, O, E, B, $, s])
  return V == null
    ? null
    : It.createElement(
        a4.Provider,
        { value: y },
        It.createElement(Uy.Provider, { children: n, value: V })
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
 */ const h4 = '6'
try {
  window.__reactRouterVersion = h4
} catch {}
const d4 = 'startTransition',
  H0 = bC[d4]
function p4(e) {
  let { basename: t, children: n, future: i, window: s } = e,
    u = It.useRef()
  u.current == null && (u.current = i4({ window: s, v5Compat: !0 }))
  let f = u.current,
    [d, g] = It.useState({ action: f.action, location: f.location }),
    { v7_startTransition: y } = i || {},
    P = It.useCallback(
      (O) => {
        y && H0 ? H0(() => g(O)) : g(O)
      },
      [g, y]
    )
  return (
    It.useLayoutEffect(() => f.listen(P), [f, P]),
    It.createElement(c4, {
      basename: t,
      children: n,
      location: d.location,
      navigationType: d.action,
      navigator: f,
      future: i,
    })
  )
}
var j0
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(j0 || (j0 = {}))
var V0
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(V0 || (V0 = {}))
var W0 = {}
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
 */ const By = function (e) {
    const t = []
    let n = 0
    for (let i = 0; i < e.length; i++) {
      let s = e.charCodeAt(i)
      s < 128
        ? (t[n++] = s)
        : s < 2048
        ? ((t[n++] = (s >> 6) | 192), (t[n++] = (s & 63) | 128))
        : (s & 64512) === 55296 &&
          i + 1 < e.length &&
          (e.charCodeAt(i + 1) & 64512) === 56320
        ? ((s = 65536 + ((s & 1023) << 10) + (e.charCodeAt(++i) & 1023)),
          (t[n++] = (s >> 18) | 240),
          (t[n++] = ((s >> 12) & 63) | 128),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128))
        : ((t[n++] = (s >> 12) | 224),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128))
    }
    return t
  },
  g4 = function (e) {
    const t = []
    let n = 0,
      i = 0
    for (; n < e.length; ) {
      const s = e[n++]
      if (s < 128) t[i++] = String.fromCharCode(s)
      else if (s > 191 && s < 224) {
        const u = e[n++]
        t[i++] = String.fromCharCode(((s & 31) << 6) | (u & 63))
      } else if (s > 239 && s < 365) {
        const u = e[n++],
          f = e[n++],
          d = e[n++],
          g =
            (((s & 7) << 18) | ((u & 63) << 12) | ((f & 63) << 6) | (d & 63)) -
            65536
        ;(t[i++] = String.fromCharCode(55296 + (g >> 10))),
          (t[i++] = String.fromCharCode(56320 + (g & 1023)))
      } else {
        const u = e[n++],
          f = e[n++]
        t[i++] = String.fromCharCode(
          ((s & 15) << 12) | ((u & 63) << 6) | (f & 63)
        )
      }
    }
    return t.join('')
  },
  $y = {
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
      for (let s = 0; s < e.length; s += 3) {
        const u = e[s],
          f = s + 1 < e.length,
          d = f ? e[s + 1] : 0,
          g = s + 2 < e.length,
          y = g ? e[s + 2] : 0,
          P = u >> 2,
          O = ((u & 3) << 4) | (d >> 4)
        let E = ((d & 15) << 2) | (y >> 6),
          B = y & 63
        g || ((B = 64), f || (E = 64)), i.push(n[P], n[O], n[E], n[B])
      }
      return i.join('')
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(By(e), t)
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : g4(this.decodeStringToByteArray(e, t))
    },
    decodeStringToByteArray(e, t) {
      this.init_()
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        i = []
      for (let s = 0; s < e.length; ) {
        const u = n[e.charAt(s++)],
          d = s < e.length ? n[e.charAt(s)] : 0
        ++s
        const y = s < e.length ? n[e.charAt(s)] : 64
        ++s
        const O = s < e.length ? n[e.charAt(s)] : 64
        if ((++s, u == null || d == null || y == null || O == null))
          throw new m4()
        const E = (u << 2) | (d >> 4)
        if ((i.push(E), y !== 64)) {
          const B = ((d << 4) & 240) | (y >> 2)
          if ((i.push(B), O !== 64)) {
            const $ = ((y << 6) & 192) | O
            i.push($)
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
class m4 extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError')
  }
}
const v4 = function (e) {
    const t = By(e)
    return $y.encodeByteArray(t, !0)
  },
  Ef = function (e) {
    return v4(e).replace(/\./g, '')
  },
  y4 = function (e) {
    try {
      return $y.decodeString(e, !0)
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
 */ function w4() {
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
 */ const _4 = () => w4().__FIREBASE_DEFAULTS__,
  S4 = () => {
    if (typeof process > 'u' || typeof W0 > 'u') return
    const e = W0.__FIREBASE_DEFAULTS__
    if (e) return JSON.parse(e)
  },
  E4 = () => {
    if (typeof document > 'u') return
    let e
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const t = e && y4(e[1])
    return t && JSON.parse(t)
  },
  by = () => {
    try {
      return _4() || S4() || E4()
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
      return
    }
  },
  x4 = (e) => {
    var t, n
    return (n =
      (t = by()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e]
  },
  C4 = (e) => {
    const t = x4(e)
    if (!t) return
    const n = t.lastIndexOf(':')
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`)
    const i = parseInt(t.substring(n + 1), 10)
    return t[0] === '[' ? [t.substring(1, n - 1), i] : [t.substring(0, n), i]
  },
  Hy = () => {
    var e
    return (e = by()) === null || e === void 0 ? void 0 : e.config
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
 */ class k4 {
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
 */ function T4(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    )
  const n = { alg: 'none', type: 'JWT' },
    i = t || 'demo-project',
    s = e.iat || 0,
    u = e.sub || e.user_id
  if (!u)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
  const f = Object.assign(
    {
      iss: `https://securetoken.google.com/${i}`,
      aud: i,
      iat: s,
      exp: s + 3600,
      auth_time: s,
      sub: u,
      user_id: u,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    e
  )
  return [Ef(JSON.stringify(n)), Ef(JSON.stringify(f)), ''].join('.')
}
function A4() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function I4() {
  return new Promise((e, t) => {
    try {
      let n = !0
      const i = 'validate-browser-context-for-indexeddb-analytics-module',
        s = self.indexedDB.open(i)
      ;(s.onsuccess = () => {
        s.result.close(), n || self.indexedDB.deleteDatabase(i), e(!0)
      }),
        (s.onupgradeneeded = () => {
          n = !1
        }),
        (s.onerror = () => {
          var u
          t(((u = s.error) === null || u === void 0 ? void 0 : u.message) || '')
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
 */ const P4 = 'FirebaseError'
class ws extends Error {
  constructor(t, n, i) {
    super(n),
      (this.code = t),
      (this.customData = i),
      (this.name = P4),
      Object.setPrototypeOf(this, ws.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, jy.prototype.create)
  }
}
class jy {
  constructor(t, n, i) {
    ;(this.service = t), (this.serviceName = n), (this.errors = i)
  }
  create(t, ...n) {
    const i = n[0] || {},
      s = `${this.service}/${t}`,
      u = this.errors[t],
      f = u ? R4(u, i) : 'Error',
      d = `${this.serviceName}: ${f} (${s}).`
    return new ws(s, d, i)
  }
}
function R4(e, t) {
  return e.replace(L4, (n, i) => {
    const s = t[i]
    return s != null ? String(s) : `<${i}?>`
  })
}
const L4 = /\{\$([^}]+)}/g
function Nd(e, t) {
  if (e === t) return !0
  const n = Object.keys(e),
    i = Object.keys(t)
  for (const s of n) {
    if (!i.includes(s)) return !1
    const u = e[s],
      f = t[s]
    if (K0(u) && K0(f)) {
      if (!Nd(u, f)) return !1
    } else if (u !== f) return !1
  }
  for (const s of i) if (!n.includes(s)) return !1
  return !0
}
function K0(e) {
  return e !== null && typeof e == 'object'
}
class Xl {
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
 */ const Xi = '[DEFAULT]'
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
 */ class O4 {
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
      const i = new k4()
      if (
        (this.instancesDeferred.set(n, i),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: n })
          s && i.resolve(s)
        } catch {}
    }
    return this.instancesDeferred.get(n).promise
  }
  getImmediate(t) {
    var n
    const i = this.normalizeInstanceIdentifier(t?.identifier),
      s = (n = t?.optional) !== null && n !== void 0 ? n : !1
    if (this.isInitialized(i) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: i })
      } catch (u) {
        if (s) return null
        throw u
      }
    else {
      if (s) return null
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
      if (D4(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Xi })
        } catch {}
      for (const [n, i] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(n)
        try {
          const u = this.getOrInitializeService({ instanceIdentifier: s })
          i.resolve(u)
        } catch {}
      }
    }
  }
  clearInstance(t = Xi) {
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
  isInitialized(t = Xi) {
    return this.instances.has(t)
  }
  getOptions(t = Xi) {
    return this.instancesOptions.get(t) || {}
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      i = this.normalizeInstanceIdentifier(t.instanceIdentifier)
    if (this.isInitialized(i))
      throw Error(`${this.name}(${i}) has already been initialized`)
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`)
    const s = this.getOrInitializeService({ instanceIdentifier: i, options: n })
    for (const [u, f] of this.instancesDeferred.entries()) {
      const d = this.normalizeInstanceIdentifier(u)
      i === d && f.resolve(s)
    }
    return s
  }
  onInit(t, n) {
    var i
    const s = this.normalizeInstanceIdentifier(n),
      u =
        (i = this.onInitCallbacks.get(s)) !== null && i !== void 0
          ? i
          : new Set()
    u.add(t), this.onInitCallbacks.set(s, u)
    const f = this.instances.get(s)
    return (
      f && t(f, s),
      () => {
        u.delete(t)
      }
    )
  }
  invokeOnInitCallbacks(t, n) {
    const i = this.onInitCallbacks.get(n)
    if (i)
      for (const s of i)
        try {
          s(t, n)
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let i = this.instances.get(t)
    if (
      !i &&
      this.component &&
      ((i = this.component.instanceFactory(this.container, {
        instanceIdentifier: N4(t),
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
  normalizeInstanceIdentifier(t = Xi) {
    return this.component ? (this.component.multipleInstances ? t : Xi) : t
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
  }
}
function N4(e) {
  return e === Xi ? void 0 : e
}
function D4(e) {
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
 */ class M4 {
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
    const n = new O4(t, this)
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
const F4 = {
    debug: De.DEBUG,
    verbose: De.VERBOSE,
    info: De.INFO,
    warn: De.WARN,
    error: De.ERROR,
    silent: De.SILENT,
  },
  z4 = De.INFO,
  U4 = {
    [De.DEBUG]: 'log',
    [De.VERBOSE]: 'log',
    [De.INFO]: 'info',
    [De.WARN]: 'warn',
    [De.ERROR]: 'error',
  },
  B4 = (e, t, ...n) => {
    if (t < e.logLevel) return
    const i = new Date().toISOString(),
      s = U4[t]
    if (s) console[s](`[${i}]  ${e.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      )
  }
let Vy = class {
  constructor(t) {
    ;(this.name = t),
      (this._logLevel = z4),
      (this._logHandler = B4),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(t) {
    if (!(t in De))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``)
    this._logLevel = t
  }
  setLogLevel(t) {
    this._logLevel = typeof t == 'string' ? F4[t] : t
  }
  get logHandler() {
    return this._logHandler
  }
  set logHandler(t) {
    if (typeof t != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function')
    this._logHandler = t
  }
  get userLogHandler() {
    return this._userLogHandler
  }
  set userLogHandler(t) {
    this._userLogHandler = t
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, De.DEBUG, ...t),
      this._logHandler(this, De.DEBUG, ...t)
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, De.VERBOSE, ...t),
      this._logHandler(this, De.VERBOSE, ...t)
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, De.INFO, ...t),
      this._logHandler(this, De.INFO, ...t)
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, De.WARN, ...t),
      this._logHandler(this, De.WARN, ...t)
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, De.ERROR, ...t),
      this._logHandler(this, De.ERROR, ...t)
  }
}
const $4 = (e, t) => t.some((n) => e instanceof n)
let G0, q0
function b4() {
  return (
    G0 ||
    (G0 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  )
}
function H4() {
  return (
    q0 ||
    (q0 = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  )
}
const Wy = new WeakMap(),
  Dd = new WeakMap(),
  Ky = new WeakMap(),
  Lh = new WeakMap(),
  Dp = new WeakMap()
function j4(e) {
  const t = new Promise((n, i) => {
    const s = () => {
        e.removeEventListener('success', u), e.removeEventListener('error', f)
      },
      u = () => {
        n(mi(e.result)), s()
      },
      f = () => {
        i(e.error), s()
      }
    e.addEventListener('success', u), e.addEventListener('error', f)
  })
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Wy.set(n, e)
      })
      .catch(() => {}),
    Dp.set(t, e),
    t
  )
}
function V4(e) {
  if (Dd.has(e)) return
  const t = new Promise((n, i) => {
    const s = () => {
        e.removeEventListener('complete', u),
          e.removeEventListener('error', f),
          e.removeEventListener('abort', f)
      },
      u = () => {
        n(), s()
      },
      f = () => {
        i(e.error || new DOMException('AbortError', 'AbortError')), s()
      }
    e.addEventListener('complete', u),
      e.addEventListener('error', f),
      e.addEventListener('abort', f)
  })
  Dd.set(e, t)
}
let Md = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return Dd.get(e)
      if (t === 'objectStoreNames') return e.objectStoreNames || Ky.get(e)
      if (t === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0])
    }
    return mi(e[t])
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
function W4(e) {
  Md = e(Md)
}
function K4(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const i = e.call(Oh(this), t, ...n)
        return Ky.set(i, t.sort ? t.sort() : [t]), mi(i)
      }
    : H4().includes(e)
    ? function (...t) {
        return e.apply(Oh(this), t), mi(Wy.get(this))
      }
    : function (...t) {
        return mi(e.apply(Oh(this), t))
      }
}
function G4(e) {
  return typeof e == 'function'
    ? K4(e)
    : (e instanceof IDBTransaction && V4(e), $4(e, b4()) ? new Proxy(e, Md) : e)
}
function mi(e) {
  if (e instanceof IDBRequest) return j4(e)
  if (Lh.has(e)) return Lh.get(e)
  const t = G4(e)
  return t !== e && (Lh.set(e, t), Dp.set(t, e)), t
}
const Oh = (e) => Dp.get(e)
function q4(e, t, { blocked: n, upgrade: i, blocking: s, terminated: u } = {}) {
  const f = indexedDB.open(e, t),
    d = mi(f)
  return (
    i &&
      f.addEventListener('upgradeneeded', (g) => {
        i(mi(f.result), g.oldVersion, g.newVersion, mi(f.transaction), g)
      }),
    n && f.addEventListener('blocked', (g) => n(g.oldVersion, g.newVersion, g)),
    d
      .then((g) => {
        u && g.addEventListener('close', () => u()),
          s &&
            g.addEventListener('versionchange', (y) =>
              s(y.oldVersion, y.newVersion, y)
            )
      })
      .catch(() => {}),
    d
  )
}
const Y4 = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  X4 = ['put', 'add', 'delete', 'clear'],
  Nh = new Map()
function Y0(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return
  if (Nh.get(t)) return Nh.get(t)
  const n = t.replace(/FromIndex$/, ''),
    i = t !== n,
    s = X4.includes(n)
  if (
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || Y4.includes(n))
  )
    return
  const u = async function (f, ...d) {
    const g = this.transaction(f, s ? 'readwrite' : 'readonly')
    let y = g.store
    return (
      i && (y = y.index(d.shift())),
      (await Promise.all([y[n](...d), s && g.done]))[0]
    )
  }
  return Nh.set(t, u), u
}
W4((e) => ({
  ...e,
  get: (t, n, i) => Y0(t, n) || e.get(t, n, i),
  has: (t, n) => !!Y0(t, n) || e.has(t, n),
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
 */ class Q4 {
  constructor(t) {
    this.container = t
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (J4(n)) {
          const i = n.getImmediate()
          return `${i.library}/${i.version}`
        } else return null
      })
      .filter((n) => n)
      .join(' ')
  }
}
function J4(e) {
  const t = e.getComponent()
  return t?.type === 'VERSION'
}
const Fd = '@firebase/app',
  X0 = '0.10.15'
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
 */ const Dr = new Vy('@firebase/app'),
  Z4 = '@firebase/app-compat',
  eA = '@firebase/analytics-compat',
  tA = '@firebase/analytics',
  nA = '@firebase/app-check-compat',
  rA = '@firebase/app-check',
  iA = '@firebase/auth',
  oA = '@firebase/auth-compat',
  sA = '@firebase/database',
  lA = '@firebase/data-connect',
  uA = '@firebase/database-compat',
  aA = '@firebase/functions',
  fA = '@firebase/functions-compat',
  cA = '@firebase/installations',
  hA = '@firebase/installations-compat',
  dA = '@firebase/messaging',
  pA = '@firebase/messaging-compat',
  gA = '@firebase/performance',
  mA = '@firebase/performance-compat',
  vA = '@firebase/remote-config',
  yA = '@firebase/remote-config-compat',
  wA = '@firebase/storage',
  _A = '@firebase/storage-compat',
  SA = '@firebase/firestore',
  EA = '@firebase/vertexai',
  xA = '@firebase/firestore-compat',
  CA = 'firebase',
  kA = '11.0.1'
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
 */ const zd = '[DEFAULT]',
  TA = {
    [Fd]: 'fire-core',
    [Z4]: 'fire-core-compat',
    [tA]: 'fire-analytics',
    [eA]: 'fire-analytics-compat',
    [rA]: 'fire-app-check',
    [nA]: 'fire-app-check-compat',
    [iA]: 'fire-auth',
    [oA]: 'fire-auth-compat',
    [sA]: 'fire-rtdb',
    [lA]: 'fire-data-connect',
    [uA]: 'fire-rtdb-compat',
    [aA]: 'fire-fn',
    [fA]: 'fire-fn-compat',
    [cA]: 'fire-iid',
    [hA]: 'fire-iid-compat',
    [dA]: 'fire-fcm',
    [pA]: 'fire-fcm-compat',
    [gA]: 'fire-perf',
    [mA]: 'fire-perf-compat',
    [vA]: 'fire-rc',
    [yA]: 'fire-rc-compat',
    [wA]: 'fire-gcs',
    [_A]: 'fire-gcs-compat',
    [SA]: 'fire-fst',
    [xA]: 'fire-fst-compat',
    [EA]: 'fire-vertex',
    'fire-js': 'fire-js',
    [CA]: 'fire-js-all',
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
 */ const xf = new Map(),
  AA = new Map(),
  Ud = new Map()
function Q0(e, t) {
  try {
    e.container.addComponent(t)
  } catch (n) {
    Dr.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    )
  }
}
function Cf(e) {
  const t = e.name
  if (Ud.has(t))
    return (
      Dr.debug(`There were multiple attempts to register component ${t}.`), !1
    )
  Ud.set(t, e)
  for (const n of xf.values()) Q0(n, e)
  for (const n of AA.values()) Q0(n, e)
  return !0
}
function IA(e, t) {
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
 */ const PA = {
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
  vi = new jy('app', 'Firebase', PA)
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
 */ class RA {
  constructor(t, n, i) {
    ;(this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = i),
      this.container.addComponent(new Xl('app', () => this, 'PUBLIC'))
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
    if (this.isDeleted) throw vi.create('app-deleted', { appName: this._name })
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
 */ const LA = kA
function Gy(e, t = {}) {
  let n = e
  typeof t != 'object' && (t = { name: t })
  const i = Object.assign({ name: zd, automaticDataCollectionEnabled: !1 }, t),
    s = i.name
  if (typeof s != 'string' || !s)
    throw vi.create('bad-app-name', { appName: String(s) })
  if ((n || (n = Hy()), !n)) throw vi.create('no-options')
  const u = xf.get(s)
  if (u) {
    if (Nd(n, u.options) && Nd(i, u.config)) return u
    throw vi.create('duplicate-app', { appName: s })
  }
  const f = new M4(s)
  for (const g of Ud.values()) f.addComponent(g)
  const d = new RA(n, i, f)
  return xf.set(s, d), d
}
function OA(e = zd) {
  const t = xf.get(e)
  if (!t && e === zd && Hy()) return Gy()
  if (!t) throw vi.create('no-app', { appName: e })
  return t
}
function ls(e, t, n) {
  var i
  let s = (i = TA[e]) !== null && i !== void 0 ? i : e
  n && (s += `-${n}`)
  const u = s.match(/\s|\//),
    f = t.match(/\s|\//)
  if (u || f) {
    const d = [`Unable to register library "${s}" with version "${t}":`]
    u &&
      d.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`
      ),
      u && f && d.push('and'),
      f &&
        d.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Dr.warn(d.join(' '))
    return
  }
  Cf(new Xl(`${s}-version`, () => ({ library: s, version: t }), 'VERSION'))
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
 */ const NA = 'firebase-heartbeat-database',
  DA = 1,
  Ql = 'firebase-heartbeat-store'
let Dh = null
function qy() {
  return (
    Dh ||
      (Dh = q4(NA, DA, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Ql)
              } catch (n) {
                console.warn(n)
              }
          }
        },
      }).catch((e) => {
        throw vi.create('idb-open', { originalErrorMessage: e.message })
      })),
    Dh
  )
}
async function MA(e) {
  try {
    const n = (await qy()).transaction(Ql),
      i = await n.objectStore(Ql).get(Yy(e))
    return await n.done, i
  } catch (t) {
    if (t instanceof ws) Dr.warn(t.message)
    else {
      const n = vi.create('idb-get', { originalErrorMessage: t?.message })
      Dr.warn(n.message)
    }
  }
}
async function J0(e, t) {
  try {
    const i = (await qy()).transaction(Ql, 'readwrite')
    await i.objectStore(Ql).put(t, Yy(e)), await i.done
  } catch (n) {
    if (n instanceof ws) Dr.warn(n.message)
    else {
      const i = vi.create('idb-set', { originalErrorMessage: n?.message })
      Dr.warn(i.message)
    }
  }
}
function Yy(e) {
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
 */ const FA = 1024,
  zA = 30 * 24 * 60 * 60 * 1e3
class UA {
  constructor(t) {
    ;(this.container = t), (this._heartbeatsCache = null)
    const n = this.container.getProvider('app').getImmediate()
    ;(this._storage = new $A(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((i) => ((this._heartbeatsCache = i), i)))
  }
  async triggerHeartbeat() {
    var t, n
    try {
      const s = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        u = Z0()
      return (((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === u ||
        this._heartbeatsCache.heartbeats.some((f) => f.date === u)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: u, agent: s }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((f) => {
              const d = new Date(f.date).valueOf()
              return Date.now() - d <= zA
            })),
          this._storage.overwrite(this._heartbeatsCache))
    } catch (i) {
      Dr.warn(i)
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
      const n = Z0(),
        { heartbeatsToSend: i, unsentEntries: s } = BA(
          this._heartbeatsCache.heartbeats
        ),
        u = Ef(JSON.stringify({ version: 2, heartbeats: i }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        u
      )
    } catch (n) {
      return Dr.warn(n), ''
    }
  }
}
function Z0() {
  return new Date().toISOString().substring(0, 10)
}
function BA(e, t = FA) {
  const n = []
  let i = e.slice()
  for (const s of e) {
    const u = n.find((f) => f.agent === s.agent)
    if (u) {
      if ((u.dates.push(s.date), ev(n) > t)) {
        u.dates.pop()
        break
      }
    } else if ((n.push({ agent: s.agent, dates: [s.date] }), ev(n) > t)) {
      n.pop()
      break
    }
    i = i.slice(1)
  }
  return { heartbeatsToSend: n, unsentEntries: i }
}
class $A {
  constructor(t) {
    ;(this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
  }
  async runIndexedDBEnvironmentCheck() {
    return A4()
      ? I4()
          .then(() => !0)
          .catch(() => !1)
      : !1
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await MA(this.app)
      return n?.heartbeats ? n : { heartbeats: [] }
    } else return { heartbeats: [] }
  }
  async overwrite(t) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read()
      return J0(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : s.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      })
    } else return
  }
  async add(t) {
    var n
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read()
      return J0(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...t.heartbeats],
      })
    } else return
  }
}
function ev(e) {
  return Ef(JSON.stringify({ version: 2, heartbeats: e })).length
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
 */ function bA(e) {
  Cf(new Xl('platform-logger', (t) => new Q4(t), 'PRIVATE')),
    Cf(new Xl('heartbeat', (t) => new UA(t), 'PRIVATE')),
    ls(Fd, X0, e),
    ls(Fd, X0, 'esm2017'),
    ls('fire-js', '')
}
bA('')
var tv =
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
*/ var Xy
;(function () {
  var e
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function t(x, S) {
    function T() {}
    ;(T.prototype = S.prototype),
      (x.D = S.prototype),
      (x.prototype = new T()),
      (x.prototype.constructor = x),
      (x.C = function (I, D, U) {
        for (
          var A = Array(arguments.length - 2), Xe = 2;
          Xe < arguments.length;
          Xe++
        )
          A[Xe - 2] = arguments[Xe]
        return S.prototype[D].apply(I, A)
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
  function s(x, S, T) {
    T || (T = 0)
    var I = Array(16)
    if (typeof S == 'string')
      for (var D = 0; 16 > D; ++D)
        I[D] =
          S.charCodeAt(T++) |
          (S.charCodeAt(T++) << 8) |
          (S.charCodeAt(T++) << 16) |
          (S.charCodeAt(T++) << 24)
    else
      for (D = 0; 16 > D; ++D)
        I[D] = S[T++] | (S[T++] << 8) | (S[T++] << 16) | (S[T++] << 24)
    ;(S = x.g[0]), (T = x.g[1]), (D = x.g[2])
    var U = x.g[3],
      A = (S + (U ^ (T & (D ^ U))) + I[0] + 3614090360) & 4294967295
    ;(S = T + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (U + (D ^ (S & (T ^ D))) + I[1] + 3905402710) & 4294967295),
      (U = S + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (D + (T ^ (U & (S ^ T))) + I[2] + 606105819) & 4294967295),
      (D = U + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (T + (S ^ (D & (U ^ S))) + I[3] + 3250441966) & 4294967295),
      (T = D + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (S + (U ^ (T & (D ^ U))) + I[4] + 4118548399) & 4294967295),
      (S = T + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (U + (D ^ (S & (T ^ D))) + I[5] + 1200080426) & 4294967295),
      (U = S + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (D + (T ^ (U & (S ^ T))) + I[6] + 2821735955) & 4294967295),
      (D = U + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (T + (S ^ (D & (U ^ S))) + I[7] + 4249261313) & 4294967295),
      (T = D + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (S + (U ^ (T & (D ^ U))) + I[8] + 1770035416) & 4294967295),
      (S = T + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (U + (D ^ (S & (T ^ D))) + I[9] + 2336552879) & 4294967295),
      (U = S + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (D + (T ^ (U & (S ^ T))) + I[10] + 4294925233) & 4294967295),
      (D = U + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (T + (S ^ (D & (U ^ S))) + I[11] + 2304563134) & 4294967295),
      (T = D + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (S + (U ^ (T & (D ^ U))) + I[12] + 1804603682) & 4294967295),
      (S = T + (((A << 7) & 4294967295) | (A >>> 25))),
      (A = (U + (D ^ (S & (T ^ D))) + I[13] + 4254626195) & 4294967295),
      (U = S + (((A << 12) & 4294967295) | (A >>> 20))),
      (A = (D + (T ^ (U & (S ^ T))) + I[14] + 2792965006) & 4294967295),
      (D = U + (((A << 17) & 4294967295) | (A >>> 15))),
      (A = (T + (S ^ (D & (U ^ S))) + I[15] + 1236535329) & 4294967295),
      (T = D + (((A << 22) & 4294967295) | (A >>> 10))),
      (A = (S + (D ^ (U & (T ^ D))) + I[1] + 4129170786) & 4294967295),
      (S = T + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (U + (T ^ (D & (S ^ T))) + I[6] + 3225465664) & 4294967295),
      (U = S + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (D + (S ^ (T & (U ^ S))) + I[11] + 643717713) & 4294967295),
      (D = U + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (T + (U ^ (S & (D ^ U))) + I[0] + 3921069994) & 4294967295),
      (T = D + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (S + (D ^ (U & (T ^ D))) + I[5] + 3593408605) & 4294967295),
      (S = T + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (U + (T ^ (D & (S ^ T))) + I[10] + 38016083) & 4294967295),
      (U = S + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (D + (S ^ (T & (U ^ S))) + I[15] + 3634488961) & 4294967295),
      (D = U + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (T + (U ^ (S & (D ^ U))) + I[4] + 3889429448) & 4294967295),
      (T = D + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (S + (D ^ (U & (T ^ D))) + I[9] + 568446438) & 4294967295),
      (S = T + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (U + (T ^ (D & (S ^ T))) + I[14] + 3275163606) & 4294967295),
      (U = S + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (D + (S ^ (T & (U ^ S))) + I[3] + 4107603335) & 4294967295),
      (D = U + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (T + (U ^ (S & (D ^ U))) + I[8] + 1163531501) & 4294967295),
      (T = D + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (S + (D ^ (U & (T ^ D))) + I[13] + 2850285829) & 4294967295),
      (S = T + (((A << 5) & 4294967295) | (A >>> 27))),
      (A = (U + (T ^ (D & (S ^ T))) + I[2] + 4243563512) & 4294967295),
      (U = S + (((A << 9) & 4294967295) | (A >>> 23))),
      (A = (D + (S ^ (T & (U ^ S))) + I[7] + 1735328473) & 4294967295),
      (D = U + (((A << 14) & 4294967295) | (A >>> 18))),
      (A = (T + (U ^ (S & (D ^ U))) + I[12] + 2368359562) & 4294967295),
      (T = D + (((A << 20) & 4294967295) | (A >>> 12))),
      (A = (S + (T ^ D ^ U) + I[5] + 4294588738) & 4294967295),
      (S = T + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (U + (S ^ T ^ D) + I[8] + 2272392833) & 4294967295),
      (U = S + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (D + (U ^ S ^ T) + I[11] + 1839030562) & 4294967295),
      (D = U + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (T + (D ^ U ^ S) + I[14] + 4259657740) & 4294967295),
      (T = D + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (S + (T ^ D ^ U) + I[1] + 2763975236) & 4294967295),
      (S = T + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (U + (S ^ T ^ D) + I[4] + 1272893353) & 4294967295),
      (U = S + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (D + (U ^ S ^ T) + I[7] + 4139469664) & 4294967295),
      (D = U + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (T + (D ^ U ^ S) + I[10] + 3200236656) & 4294967295),
      (T = D + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (S + (T ^ D ^ U) + I[13] + 681279174) & 4294967295),
      (S = T + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (U + (S ^ T ^ D) + I[0] + 3936430074) & 4294967295),
      (U = S + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (D + (U ^ S ^ T) + I[3] + 3572445317) & 4294967295),
      (D = U + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (T + (D ^ U ^ S) + I[6] + 76029189) & 4294967295),
      (T = D + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (S + (T ^ D ^ U) + I[9] + 3654602809) & 4294967295),
      (S = T + (((A << 4) & 4294967295) | (A >>> 28))),
      (A = (U + (S ^ T ^ D) + I[12] + 3873151461) & 4294967295),
      (U = S + (((A << 11) & 4294967295) | (A >>> 21))),
      (A = (D + (U ^ S ^ T) + I[15] + 530742520) & 4294967295),
      (D = U + (((A << 16) & 4294967295) | (A >>> 16))),
      (A = (T + (D ^ U ^ S) + I[2] + 3299628645) & 4294967295),
      (T = D + (((A << 23) & 4294967295) | (A >>> 9))),
      (A = (S + (D ^ (T | ~U)) + I[0] + 4096336452) & 4294967295),
      (S = T + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (U + (T ^ (S | ~D)) + I[7] + 1126891415) & 4294967295),
      (U = S + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (D + (S ^ (U | ~T)) + I[14] + 2878612391) & 4294967295),
      (D = U + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (T + (U ^ (D | ~S)) + I[5] + 4237533241) & 4294967295),
      (T = D + (((A << 21) & 4294967295) | (A >>> 11))),
      (A = (S + (D ^ (T | ~U)) + I[12] + 1700485571) & 4294967295),
      (S = T + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (U + (T ^ (S | ~D)) + I[3] + 2399980690) & 4294967295),
      (U = S + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (D + (S ^ (U | ~T)) + I[10] + 4293915773) & 4294967295),
      (D = U + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (T + (U ^ (D | ~S)) + I[1] + 2240044497) & 4294967295),
      (T = D + (((A << 21) & 4294967295) | (A >>> 11))),
      (A = (S + (D ^ (T | ~U)) + I[8] + 1873313359) & 4294967295),
      (S = T + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (U + (T ^ (S | ~D)) + I[15] + 4264355552) & 4294967295),
      (U = S + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (D + (S ^ (U | ~T)) + I[6] + 2734768916) & 4294967295),
      (D = U + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (T + (U ^ (D | ~S)) + I[13] + 1309151649) & 4294967295),
      (T = D + (((A << 21) & 4294967295) | (A >>> 11))),
      (A = (S + (D ^ (T | ~U)) + I[4] + 4149444226) & 4294967295),
      (S = T + (((A << 6) & 4294967295) | (A >>> 26))),
      (A = (U + (T ^ (S | ~D)) + I[11] + 3174756917) & 4294967295),
      (U = S + (((A << 10) & 4294967295) | (A >>> 22))),
      (A = (D + (S ^ (U | ~T)) + I[2] + 718787259) & 4294967295),
      (D = U + (((A << 15) & 4294967295) | (A >>> 17))),
      (A = (T + (U ^ (D | ~S)) + I[9] + 3951481745) & 4294967295),
      (x.g[0] = (x.g[0] + S) & 4294967295),
      (x.g[1] =
        (x.g[1] + (D + (((A << 21) & 4294967295) | (A >>> 11)))) & 4294967295),
      (x.g[2] = (x.g[2] + D) & 4294967295),
      (x.g[3] = (x.g[3] + U) & 4294967295)
  }
  ;(i.prototype.u = function (x, S) {
    S === void 0 && (S = x.length)
    for (var T = S - this.blockSize, I = this.B, D = this.h, U = 0; U < S; ) {
      if (D == 0) for (; U <= T; ) s(this, x, U), (U += this.blockSize)
      if (typeof x == 'string') {
        for (; U < S; )
          if (((I[D++] = x.charCodeAt(U++)), D == this.blockSize)) {
            s(this, I), (D = 0)
            break
          }
      } else
        for (; U < S; )
          if (((I[D++] = x[U++]), D == this.blockSize)) {
            s(this, I), (D = 0)
            break
          }
    }
    ;(this.h = D), (this.o += S)
  }),
    (i.prototype.v = function () {
      var x = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      )
      x[0] = 128
      for (var S = 1; S < x.length - 8; ++S) x[S] = 0
      var T = 8 * this.o
      for (S = x.length - 8; S < x.length; ++S) (x[S] = T & 255), (T /= 256)
      for (this.u(x), x = Array(16), S = T = 0; 4 > S; ++S)
        for (var I = 0; 32 > I; I += 8) x[T++] = (this.g[S] >>> I) & 255
      return x
    })
  function u(x, S) {
    var T = d
    return Object.prototype.hasOwnProperty.call(T, x) ? T[x] : (T[x] = S(x))
  }
  function f(x, S) {
    this.h = S
    for (var T = [], I = !0, D = x.length - 1; 0 <= D; D--) {
      var U = x[D] | 0
      ;(I && U == S) || ((T[D] = U), (I = !1))
    }
    this.g = T
  }
  var d = {}
  function g(x) {
    return -128 <= x && 128 > x
      ? u(x, function (S) {
          return new f([S | 0], 0 > S ? -1 : 0)
        })
      : new f([x | 0], 0 > x ? -1 : 0)
  }
  function y(x) {
    if (isNaN(x) || !isFinite(x)) return O
    if (0 > x) return q(y(-x))
    for (var S = [], T = 1, I = 0; x >= T; I++)
      (S[I] = (x / T) | 0), (T *= 4294967296)
    return new f(S, 0)
  }
  function P(x, S) {
    if (x.length == 0) throw Error('number format error: empty string')
    if (((S = S || 10), 2 > S || 36 < S))
      throw Error('radix out of range: ' + S)
    if (x.charAt(0) == '-') return q(P(x.substring(1), S))
    if (0 <= x.indexOf('-'))
      throw Error('number format error: interior "-" character')
    for (var T = y(Math.pow(S, 8)), I = O, D = 0; D < x.length; D += 8) {
      var U = Math.min(8, x.length - D),
        A = parseInt(x.substring(D, D + U), S)
      8 > U
        ? ((U = y(Math.pow(S, U))), (I = I.j(U).add(y(A))))
        : ((I = I.j(T)), (I = I.add(y(A))))
    }
    return I
  }
  var O = g(0),
    E = g(1),
    B = g(16777216)
  ;(e = f.prototype),
    (e.m = function () {
      if (V(this)) return -q(this).m()
      for (var x = 0, S = 1, T = 0; T < this.g.length; T++) {
        var I = this.i(T)
        ;(x += (0 <= I ? I : 4294967296 + I) * S), (S *= 4294967296)
      }
      return x
    }),
    (e.toString = function (x) {
      if (((x = x || 10), 2 > x || 36 < x))
        throw Error('radix out of range: ' + x)
      if ($(this)) return '0'
      if (V(this)) return '-' + q(this).toString(x)
      for (var S = y(Math.pow(x, 6)), T = this, I = ''; ; ) {
        var D = j(T, S).g
        T = R(T, D.j(S))
        var U = ((0 < T.g.length ? T.g[0] : T.h) >>> 0).toString(x)
        if (((T = D), $(T))) return U + I
        for (; 6 > U.length; ) U = '0' + U
        I = U + I
      }
    }),
    (e.i = function (x) {
      return 0 > x ? 0 : x < this.g.length ? this.g[x] : this.h
    })
  function $(x) {
    if (x.h != 0) return !1
    for (var S = 0; S < x.g.length; S++) if (x.g[S] != 0) return !1
    return !0
  }
  function V(x) {
    return x.h == -1
  }
  e.l = function (x) {
    return (x = R(this, x)), V(x) ? -1 : $(x) ? 0 : 1
  }
  function q(x) {
    for (var S = x.g.length, T = [], I = 0; I < S; I++) T[I] = ~x.g[I]
    return new f(T, ~x.h).add(E)
  }
  ;(e.abs = function () {
    return V(this) ? q(this) : this
  }),
    (e.add = function (x) {
      for (
        var S = Math.max(this.g.length, x.g.length), T = [], I = 0, D = 0;
        D <= S;
        D++
      ) {
        var U = I + (this.i(D) & 65535) + (x.i(D) & 65535),
          A = (U >>> 16) + (this.i(D) >>> 16) + (x.i(D) >>> 16)
        ;(I = A >>> 16), (U &= 65535), (A &= 65535), (T[D] = (A << 16) | U)
      }
      return new f(T, T[T.length - 1] & -2147483648 ? -1 : 0)
    })
  function R(x, S) {
    return x.add(q(S))
  }
  e.j = function (x) {
    if ($(this) || $(x)) return O
    if (V(this)) return V(x) ? q(this).j(q(x)) : q(q(this).j(x))
    if (V(x)) return q(this.j(q(x)))
    if (0 > this.l(B) && 0 > x.l(B)) return y(this.m() * x.m())
    for (var S = this.g.length + x.g.length, T = [], I = 0; I < 2 * S; I++)
      T[I] = 0
    for (I = 0; I < this.g.length; I++)
      for (var D = 0; D < x.g.length; D++) {
        var U = this.i(I) >>> 16,
          A = this.i(I) & 65535,
          Xe = x.i(D) >>> 16,
          Lt = x.i(D) & 65535
        ;(T[2 * I + 2 * D] += A * Lt),
          k(T, 2 * I + 2 * D),
          (T[2 * I + 2 * D + 1] += U * Lt),
          k(T, 2 * I + 2 * D + 1),
          (T[2 * I + 2 * D + 1] += A * Xe),
          k(T, 2 * I + 2 * D + 1),
          (T[2 * I + 2 * D + 2] += U * Xe),
          k(T, 2 * I + 2 * D + 2)
      }
    for (I = 0; I < S; I++) T[I] = (T[2 * I + 1] << 16) | T[2 * I]
    for (I = S; I < 2 * S; I++) T[I] = 0
    return new f(T, 0)
  }
  function k(x, S) {
    for (; (x[S] & 65535) != x[S]; )
      (x[S + 1] += x[S] >>> 16), (x[S] &= 65535), S++
  }
  function N(x, S) {
    ;(this.g = x), (this.h = S)
  }
  function j(x, S) {
    if ($(S)) throw Error('division by zero')
    if ($(x)) return new N(O, O)
    if (V(x)) return (S = j(q(x), S)), new N(q(S.g), q(S.h))
    if (V(S)) return (S = j(x, q(S))), new N(q(S.g), S.h)
    if (30 < x.g.length) {
      if (V(x) || V(S))
        throw Error('slowDivide_ only works with positive integers.')
      for (var T = E, I = S; 0 >= I.l(x); ) (T = X(T)), (I = X(I))
      var D = Z(T, 1),
        U = Z(I, 1)
      for (I = Z(I, 2), T = Z(T, 2); !$(I); ) {
        var A = U.add(I)
        0 >= A.l(x) && ((D = D.add(T)), (U = A)), (I = Z(I, 1)), (T = Z(T, 1))
      }
      return (S = R(x, D.j(S))), new N(D, S)
    }
    for (D = O; 0 <= x.l(S); ) {
      for (
        T = Math.max(1, Math.floor(x.m() / S.m())),
          I = Math.ceil(Math.log(T) / Math.LN2),
          I = 48 >= I ? 1 : Math.pow(2, I - 48),
          U = y(T),
          A = U.j(S);
        V(A) || 0 < A.l(x);

      )
        (T -= I), (U = y(T)), (A = U.j(S))
      $(U) && (U = E), (D = D.add(U)), (x = R(x, A))
    }
    return new N(D, x)
  }
  ;(e.A = function (x) {
    return j(this, x).h
  }),
    (e.and = function (x) {
      for (
        var S = Math.max(this.g.length, x.g.length), T = [], I = 0;
        I < S;
        I++
      )
        T[I] = this.i(I) & x.i(I)
      return new f(T, this.h & x.h)
    }),
    (e.or = function (x) {
      for (
        var S = Math.max(this.g.length, x.g.length), T = [], I = 0;
        I < S;
        I++
      )
        T[I] = this.i(I) | x.i(I)
      return new f(T, this.h | x.h)
    }),
    (e.xor = function (x) {
      for (
        var S = Math.max(this.g.length, x.g.length), T = [], I = 0;
        I < S;
        I++
      )
        T[I] = this.i(I) ^ x.i(I)
      return new f(T, this.h ^ x.h)
    })
  function X(x) {
    for (var S = x.g.length + 1, T = [], I = 0; I < S; I++)
      T[I] = (x.i(I) << 1) | (x.i(I - 1) >>> 31)
    return new f(T, x.h)
  }
  function Z(x, S) {
    var T = S >> 5
    S %= 32
    for (var I = x.g.length - T, D = [], U = 0; U < I; U++)
      D[U] =
        0 < S ? (x.i(U + T) >>> S) | (x.i(U + T + 1) << (32 - S)) : x.i(U + T)
    return new f(D, x.h)
  }
  ;(i.prototype.digest = i.prototype.v),
    (i.prototype.reset = i.prototype.s),
    (i.prototype.update = i.prototype.u),
    (f.prototype.add = f.prototype.add),
    (f.prototype.multiply = f.prototype.j),
    (f.prototype.modulo = f.prototype.A),
    (f.prototype.compare = f.prototype.l),
    (f.prototype.toNumber = f.prototype.m),
    (f.prototype.toString = f.prototype.toString),
    (f.prototype.getBits = f.prototype.i),
    (f.fromNumber = y),
    (f.fromString = P),
    (Xy = f)
}).apply(
  typeof tv < 'u'
    ? tv
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
var Fa =
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
        : function (l, c, p) {
            return (
              l == Array.prototype || l == Object.prototype || (l[c] = p.value),
              l
            )
          }
  function n(l) {
    l = [
      typeof globalThis == 'object' && globalThis,
      l,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof Fa == 'object' && Fa,
    ]
    for (var c = 0; c < l.length; ++c) {
      var p = l[c]
      if (p && p.Math == Math) return p
    }
    throw Error('Cannot find global object')
  }
  var i = n(this)
  function s(l, c) {
    if (c)
      e: {
        var p = i
        l = l.split('.')
        for (var w = 0; w < l.length - 1; w++) {
          var z = l[w]
          if (!(z in p)) break e
          p = p[z]
        }
        ;(l = l[l.length - 1]),
          (w = p[l]),
          (c = c(w)),
          c != w &&
            c != null &&
            t(p, l, { configurable: !0, writable: !0, value: c })
      }
  }
  function u(l, c) {
    l instanceof String && (l += '')
    var p = 0,
      w = !1,
      z = {
        next: function () {
          if (!w && p < l.length) {
            var H = p++
            return { value: c(H, l[H]), done: !1 }
          }
          return (w = !0), { done: !0, value: void 0 }
        },
      }
    return (
      (z[Symbol.iterator] = function () {
        return z
      }),
      z
    )
  }
  s('Array.prototype.values', function (l) {
    return (
      l ||
      function () {
        return u(this, function (c, p) {
          return p
        })
      }
    )
  })
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var f = f || {},
    d = this || self
  function g(l) {
    var c = typeof l
    return (
      (c = c != 'object' ? c : l ? (Array.isArray(l) ? 'array' : c) : 'null'),
      c == 'array' || (c == 'object' && typeof l.length == 'number')
    )
  }
  function y(l) {
    var c = typeof l
    return (c == 'object' && l != null) || c == 'function'
  }
  function P(l, c, p) {
    return l.call.apply(l.bind, arguments)
  }
  function O(l, c, p) {
    if (!l) throw Error()
    if (2 < arguments.length) {
      var w = Array.prototype.slice.call(arguments, 2)
      return function () {
        var z = Array.prototype.slice.call(arguments)
        return Array.prototype.unshift.apply(z, w), l.apply(c, z)
      }
    }
    return function () {
      return l.apply(c, arguments)
    }
  }
  function E(l, c, p) {
    return (
      (E =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? P
          : O),
      E.apply(null, arguments)
    )
  }
  function B(l, c) {
    var p = Array.prototype.slice.call(arguments, 1)
    return function () {
      var w = p.slice()
      return w.push.apply(w, arguments), l.apply(this, w)
    }
  }
  function $(l, c) {
    function p() {}
    ;(p.prototype = c.prototype),
      (l.aa = c.prototype),
      (l.prototype = new p()),
      (l.prototype.constructor = l),
      (l.Qb = function (w, z, H) {
        for (
          var ee = Array(arguments.length - 2), Te = 2;
          Te < arguments.length;
          Te++
        )
          ee[Te - 2] = arguments[Te]
        return c.prototype[z].apply(w, ee)
      })
  }
  function V(l) {
    const c = l.length
    if (0 < c) {
      const p = Array(c)
      for (let w = 0; w < c; w++) p[w] = l[w]
      return p
    }
    return []
  }
  function q(l, c) {
    for (let p = 1; p < arguments.length; p++) {
      const w = arguments[p]
      if (g(w)) {
        const z = l.length || 0,
          H = w.length || 0
        l.length = z + H
        for (let ee = 0; ee < H; ee++) l[z + ee] = w[ee]
      } else l.push(w)
    }
  }
  class R {
    constructor(c, p) {
      ;(this.i = c), (this.j = p), (this.h = 0), (this.g = null)
    }
    get() {
      let c
      return (
        0 < this.h
          ? (this.h--, (c = this.g), (this.g = c.next), (c.next = null))
          : (c = this.i()),
        c
      )
    }
  }
  function k(l) {
    return /^[\s\xa0]*$/.test(l)
  }
  function N() {
    var l = d.navigator
    return l && (l = l.userAgent) ? l : ''
  }
  function j(l) {
    return j[' '](l), l
  }
  j[' '] = function () {}
  var X =
    N().indexOf('Gecko') != -1 &&
    !(N().toLowerCase().indexOf('webkit') != -1 && N().indexOf('Edge') == -1) &&
    !(N().indexOf('Trident') != -1 || N().indexOf('MSIE') != -1) &&
    N().indexOf('Edge') == -1
  function Z(l, c, p) {
    for (const w in l) c.call(p, l[w], w, l)
  }
  function x(l, c) {
    for (const p in l) c.call(void 0, l[p], p, l)
  }
  function S(l) {
    const c = {}
    for (const p in l) c[p] = l[p]
    return c
  }
  const T =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    )
  function I(l, c) {
    let p, w
    for (let z = 1; z < arguments.length; z++) {
      w = arguments[z]
      for (p in w) l[p] = w[p]
      for (let H = 0; H < T.length; H++)
        (p = T[H]), Object.prototype.hasOwnProperty.call(w, p) && (l[p] = w[p])
    }
  }
  function D(l) {
    var c = 1
    l = l.split(':')
    const p = []
    for (; 0 < c && l.length; ) p.push(l.shift()), c--
    return l.length && p.push(l.join(':')), p
  }
  function U(l) {
    d.setTimeout(() => {
      throw l
    }, 0)
  }
  function A() {
    var l = oe
    let c = null
    return (
      l.g &&
        ((c = l.g), (l.g = l.g.next), l.g || (l.h = null), (c.next = null)),
      c
    )
  }
  class Xe {
    constructor() {
      this.h = this.g = null
    }
    add(c, p) {
      const w = Lt.get()
      w.set(c, p), this.h ? (this.h.next = w) : (this.g = w), (this.h = w)
    }
  }
  var Lt = new R(
    () => new pn(),
    (l) => l.reset()
  )
  class pn {
    constructor() {
      this.next = this.g = this.h = null
    }
    set(c, p) {
      ;(this.h = c), (this.g = p), (this.next = null)
    }
    reset() {
      this.next = this.g = this.h = null
    }
  }
  let nt,
    Q = !1,
    oe = new Xe(),
    se = () => {
      const l = d.Promise.resolve(void 0)
      nt = () => {
        l.then(me)
      }
    }
  var me = () => {
    for (var l; (l = A()); ) {
      try {
        l.h.call(l.g)
      } catch (p) {
        U(p)
      }
      var c = Lt
      c.j(l), 100 > c.h && (c.h++, (l.next = c.g), (c.g = l))
    }
    Q = !1
  }
  function Re() {
    ;(this.s = this.s), (this.C = this.C)
  }
  ;(Re.prototype.s = !1),
    (Re.prototype.ma = function () {
      this.s || ((this.s = !0), this.N())
    }),
    (Re.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()()
    })
  function be(l, c) {
    ;(this.type = l), (this.g = this.target = c), (this.defaultPrevented = !1)
  }
  be.prototype.h = function () {
    this.defaultPrevented = !0
  }
  var Ln = (function () {
    if (!d.addEventListener || !Object.defineProperty) return !1
    var l = !1,
      c = Object.defineProperty({}, 'passive', {
        get: function () {
          l = !0
        },
      })
    try {
      const p = () => {}
      d.addEventListener('test', p, c), d.removeEventListener('test', p, c)
    } catch {}
    return l
  })()
  function St(l, c) {
    if (
      (be.call(this, l ? l.type : ''),
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
      var p = (this.type = l.type),
        w =
          l.changedTouches && l.changedTouches.length
            ? l.changedTouches[0]
            : null
      if (
        ((this.target = l.target || l.srcElement),
        (this.g = c),
        (c = l.relatedTarget))
      ) {
        if (X) {
          e: {
            try {
              j(c.nodeName)
              var z = !0
              break e
            } catch {}
            z = !1
          }
          z || (c = null)
        }
      } else
        p == 'mouseover'
          ? (c = l.fromElement)
          : p == 'mouseout' && (c = l.toElement)
      ;(this.relatedTarget = c),
        w
          ? ((this.clientX = w.clientX !== void 0 ? w.clientX : w.pageX),
            (this.clientY = w.clientY !== void 0 ? w.clientY : w.pageY),
            (this.screenX = w.screenX || 0),
            (this.screenY = w.screenY || 0))
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
            : Ht[l.pointerType] || ''),
        (this.state = l.state),
        (this.i = l),
        l.defaultPrevented && St.aa.h.call(this)
    }
  }
  $(St, be)
  var Ht = { 2: 'touch', 3: 'pen', 4: 'mouse' }
  St.prototype.h = function () {
    St.aa.h.call(this)
    var l = this.i
    l.preventDefault ? l.preventDefault() : (l.returnValue = !1)
  }
  var On = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    xi = 0
  function Ci(l, c, p, w, z) {
    ;(this.listener = l),
      (this.proxy = null),
      (this.src = c),
      (this.type = p),
      (this.capture = !!w),
      (this.ha = z),
      (this.key = ++xi),
      (this.da = this.fa = !1)
  }
  function fo(l) {
    ;(l.da = !0),
      (l.listener = null),
      (l.proxy = null),
      (l.src = null),
      (l.ha = null)
  }
  function ur(l) {
    ;(this.src = l), (this.g = {}), (this.h = 0)
  }
  ur.prototype.add = function (l, c, p, w, z) {
    var H = l.toString()
    ;(l = this.g[H]), l || ((l = this.g[H] = []), this.h++)
    var ee = co(l, c, w, z)
    return (
      -1 < ee
        ? ((c = l[ee]), p || (c.fa = !1))
        : ((c = new Ci(c, this.src, H, !!w, z)), (c.fa = p), l.push(c)),
      c
    )
  }
  function Fr(l, c) {
    var p = c.type
    if (p in l.g) {
      var w = l.g[p],
        z = Array.prototype.indexOf.call(w, c, void 0),
        H
      ;(H = 0 <= z) && Array.prototype.splice.call(w, z, 1),
        H && (fo(c), l.g[p].length == 0 && (delete l.g[p], l.h--))
    }
  }
  function co(l, c, p, w) {
    for (var z = 0; z < l.length; ++z) {
      var H = l[z]
      if (!H.da && H.listener == c && H.capture == !!p && H.ha == w) return z
    }
    return -1
  }
  var Ot = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    ar = {}
  function ou(l, c, p, w, z) {
    if (Array.isArray(c)) {
      for (var H = 0; H < c.length; H++) ou(l, c[H], p, w, z)
      return null
    }
    return (
      (p = Ur(p)),
      l && l[On]
        ? l.K(c, p, y(w) ? !!w.capture : !!w, z)
        : Nn(l, c, p, !1, w, z)
    )
  }
  function Nn(l, c, p, w, z, H) {
    if (!c) throw Error('Invalid event type')
    var ee = y(z) ? !!z.capture : !!z,
      Te = zr(l)
    if ((Te || (l[Ot] = Te = new ur(l)), (p = Te.add(c, p, w, ee, H)), p.proxy))
      return p
    if (
      ((w = su()),
      (p.proxy = w),
      (w.src = l),
      (w.listener = p),
      l.addEventListener)
    )
      Ln || (z = ee),
        z === void 0 && (z = !1),
        l.addEventListener(c.toString(), w, z)
    else if (l.attachEvent) l.attachEvent(jt(c.toString()), w)
    else if (l.addListener && l.removeListener) l.addListener(w)
    else throw Error('addEventListener and attachEvent are unavailable.')
    return p
  }
  function su() {
    function l(p) {
      return c.call(l.src, l.listener, p)
    }
    const c = ki
    return l
  }
  function lu(l, c, p, w, z) {
    if (Array.isArray(c))
      for (var H = 0; H < c.length; H++) lu(l, c[H], p, w, z)
    else
      (w = y(w) ? !!w.capture : !!w),
        (p = Ur(p)),
        l && l[On]
          ? ((l = l.i),
            (c = String(c).toString()),
            c in l.g &&
              ((H = l.g[c]),
              (p = co(H, p, w, z)),
              -1 < p &&
                (fo(H[p]),
                Array.prototype.splice.call(H, p, 1),
                H.length == 0 && (delete l.g[c], l.h--))))
          : l &&
            (l = zr(l)) &&
            ((c = l.g[c.toString()]),
            (l = -1),
            c && (l = co(c, p, w, z)),
            (p = -1 < l ? c[l] : null) && fr(p))
  }
  function fr(l) {
    if (typeof l != 'number' && l && !l.da) {
      var c = l.src
      if (c && c[On]) Fr(c.i, l)
      else {
        var p = l.type,
          w = l.proxy
        c.removeEventListener
          ? c.removeEventListener(p, w, l.capture)
          : c.detachEvent
          ? c.detachEvent(jt(p), w)
          : c.addListener && c.removeListener && c.removeListener(w),
          (p = zr(c))
            ? (Fr(p, l), p.h == 0 && ((p.src = null), (c[Ot] = null)))
            : fo(l)
      }
    }
  }
  function jt(l) {
    return l in ar ? ar[l] : (ar[l] = 'on' + l)
  }
  function ki(l, c) {
    if (l.da) l = !0
    else {
      c = new St(c, this)
      var p = l.listener,
        w = l.ha || l.src
      l.fa && fr(l), (l = p.call(w, c))
    }
    return l
  }
  function zr(l) {
    return (l = l[Ot]), l instanceof ur ? l : null
  }
  var _s = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  function Ur(l) {
    return typeof l == 'function'
      ? l
      : (l[_s] ||
          (l[_s] = function (c) {
            return l.handleEvent(c)
          }),
        l[_s])
  }
  function at() {
    Re.call(this), (this.i = new ur(this)), (this.M = this), (this.F = null)
  }
  $(at, Re),
    (at.prototype[On] = !0),
    (at.prototype.removeEventListener = function (l, c, p, w) {
      lu(this, l, c, p, w)
    })
  function Qe(l, c) {
    var p,
      w = l.F
    if (w) for (p = []; w; w = w.F) p.push(w)
    if (((l = l.M), (w = c.type || c), typeof c == 'string')) c = new be(c, l)
    else if (c instanceof be) c.target = c.target || l
    else {
      var z = c
      ;(c = new be(w, l)), I(c, z)
    }
    if (((z = !0), p))
      for (var H = p.length - 1; 0 <= H; H--) {
        var ee = (c.g = p[H])
        z = Dn(ee, w, !0, c) && z
      }
    if (
      ((ee = c.g = l),
      (z = Dn(ee, w, !0, c) && z),
      (z = Dn(ee, w, !1, c) && z),
      p)
    )
      for (H = 0; H < p.length; H++)
        (ee = c.g = p[H]), (z = Dn(ee, w, !1, c) && z)
  }
  ;(at.prototype.N = function () {
    if ((at.aa.N.call(this), this.i)) {
      var l = this.i,
        c
      for (c in l.g) {
        for (var p = l.g[c], w = 0; w < p.length; w++) fo(p[w])
        delete l.g[c], l.h--
      }
    }
    this.F = null
  }),
    (at.prototype.K = function (l, c, p, w) {
      return this.i.add(String(l), c, !1, p, w)
    }),
    (at.prototype.L = function (l, c, p, w) {
      return this.i.add(String(l), c, !0, p, w)
    })
  function Dn(l, c, p, w) {
    if (((c = l.i.g[String(c)]), !c)) return !0
    c = c.concat()
    for (var z = !0, H = 0; H < c.length; ++H) {
      var ee = c[H]
      if (ee && !ee.da && ee.capture == p) {
        var Te = ee.listener,
          Je = ee.ha || ee.src
        ee.fa && Fr(l.i, ee), (z = Te.call(Je, w) !== !1 && z)
      }
    }
    return z && !w.defaultPrevented
  }
  function ho(l, c, p) {
    if (typeof l == 'function') p && (l = E(l, p))
    else if (l && typeof l.handleEvent == 'function') l = E(l.handleEvent, l)
    else throw Error('Invalid listener argument')
    return 2147483647 < Number(c) ? -1 : d.setTimeout(l, c || 0)
  }
  function po(l) {
    l.g = ho(() => {
      ;(l.g = null), l.i && ((l.i = !1), po(l))
    }, l.l)
    const c = l.h
    ;(l.h = null), l.m.apply(null, c)
  }
  class Ss extends Re {
    constructor(c, p) {
      super(),
        (this.m = c),
        (this.l = p),
        (this.h = null),
        (this.i = !1),
        (this.g = null)
    }
    j(c) {
      ;(this.h = arguments), this.g ? (this.i = !0) : po(this)
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
  function cr(l) {
    Re.call(this), (this.h = l), (this.g = {})
  }
  $(cr, Re)
  var go = []
  function mo(l) {
    Z(
      l.g,
      function (c, p) {
        this.g.hasOwnProperty(p) && fr(c)
      },
      l
    ),
      (l.g = {})
  }
  ;(cr.prototype.N = function () {
    cr.aa.N.call(this), mo(this)
  }),
    (cr.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented')
    })
  var Ti = d.JSON.stringify,
    Es = d.JSON.parse,
    xs = class {
      stringify(l) {
        return d.JSON.stringify(l, void 0)
      }
      parse(l) {
        return d.JSON.parse(l, void 0)
      }
    }
  function Cs() {}
  Cs.prototype.h = null
  function uu(l) {
    return l.h || (l.h = l.i())
  }
  function qf() {}
  var Br = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' }
  function vo() {
    be.call(this, 'd')
  }
  $(vo, be)
  function ks() {
    be.call(this, 'c')
  }
  $(ks, be)
  var $r = {},
    au = null
  function Ts() {
    return (au = au || new at())
  }
  $r.La = 'serverreachability'
  function As(l) {
    be.call(this, $r.La, l)
  }
  $(As, be)
  function Ai(l) {
    const c = Ts()
    Qe(c, new As(c))
  }
  $r.STAT_EVENT = 'statevent'
  function fu(l, c) {
    be.call(this, $r.STAT_EVENT, l), (this.stat = c)
  }
  $(fu, be)
  function pt(l) {
    const c = Ts()
    Qe(c, new fu(c, l))
  }
  $r.Ma = 'timingevent'
  function yo(l, c) {
    be.call(this, $r.Ma, l), (this.size = c)
  }
  $(yo, be)
  function Ii(l, c) {
    if (typeof l != 'function')
      throw Error('Fn must not be null and must be a function')
    return d.setTimeout(function () {
      l()
    }, c)
  }
  function hr() {
    this.g = !0
  }
  hr.prototype.xa = function () {
    this.g = !1
  }
  function Yf(l, c, p, w, z, H) {
    l.info(function () {
      if (l.g)
        if (H)
          for (var ee = '', Te = H.split('&'), Je = 0; Je < Te.length; Je++) {
            var Se = Te[Je].split('=')
            if (1 < Se.length) {
              var it = Se[0]
              Se = Se[1]
              var Ie = it.split('_')
              ee =
                2 <= Ie.length && Ie[1] == 'type'
                  ? ee + (it + '=' + Se + '&')
                  : ee + (it + '=redacted&')
            }
          }
        else ee = null
      else ee = H
      return (
        'XMLHTTP REQ (' +
        w +
        ') [attempt ' +
        z +
        ']: ' +
        c +
        `
` +
        p +
        `
` +
        ee
      )
    })
  }
  function Xf(l, c, p, w, z, H, ee) {
    l.info(function () {
      return (
        'XMLHTTP RESP (' +
        w +
        ') [ attempt ' +
        z +
        ']: ' +
        c +
        `
` +
        p +
        `
` +
        H +
        ' ' +
        ee
      )
    })
  }
  function br(l, c, p, w) {
    l.info(function () {
      return 'XMLHTTP TEXT (' + c + '): ' + Jf(l, p) + (w ? ' ' + w : '')
    })
  }
  function Qf(l, c) {
    l.info(function () {
      return 'TIMEOUT: ' + c
    })
  }
  hr.prototype.info = function () {}
  function Jf(l, c) {
    if (!l.g) return c
    if (!c) return null
    try {
      var p = JSON.parse(c)
      if (p) {
        for (l = 0; l < p.length; l++)
          if (Array.isArray(p[l])) {
            var w = p[l]
            if (!(2 > w.length)) {
              var z = w[1]
              if (Array.isArray(z) && !(1 > z.length)) {
                var H = z[0]
                if (H != 'noop' && H != 'stop' && H != 'close')
                  for (var ee = 1; ee < z.length; ee++) z[ee] = ''
              }
            }
          }
      }
      return Ti(p)
    } catch {
      return c
    }
  }
  var Is = {
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
    Zf = {
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
    Ps
  function Pi() {}
  $(Pi, Cs),
    (Pi.prototype.g = function () {
      return new XMLHttpRequest()
    }),
    (Pi.prototype.i = function () {
      return {}
    }),
    (Ps = new Pi())
  function Yn(l, c, p, w) {
    ;(this.j = l),
      (this.i = c),
      (this.l = p),
      (this.R = w || 1),
      (this.U = new cr(this)),
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
      (this.h = new cu())
  }
  function cu() {
    ;(this.i = null), (this.g = ''), (this.h = !1)
  }
  var hu = {},
    Rs = {}
  function Ls(l, c, p) {
    ;(l.L = 1), (l.v = jr(gn(c))), (l.m = p), (l.P = !0), du(l, null)
  }
  function du(l, c) {
    ;(l.F = Date.now()), dr(l), (l.A = gn(l.v))
    var p = l.A,
      w = l.R
    Array.isArray(w) || (w = [String(w)]),
      Bs(p.i, 't', w),
      (l.C = 0),
      (p = l.j.J),
      (l.h = new cu()),
      (l.g = Du(l.j, p ? c : null, !l.m)),
      0 < l.O && (l.M = new Ss(E(l.Y, l, l.g), l.O)),
      (c = l.U),
      (p = l.g),
      (w = l.ca)
    var z = 'readystatechange'
    Array.isArray(z) || (z && (go[0] = z.toString()), (z = go))
    for (var H = 0; H < z.length; H++) {
      var ee = ou(p, z[H], w || c.handleEvent, !1, c.h || c)
      if (!ee) break
      c.g[ee.key] = ee
    }
    ;(c = l.H ? S(l.H) : {}),
      l.m
        ? (l.u || (l.u = 'POST'),
          (c['Content-Type'] = 'application/x-www-form-urlencoded'),
          l.g.ea(l.A, l.u, l.m, c))
        : ((l.u = 'GET'), l.g.ea(l.A, l.u, null, c)),
      Ai(),
      Yf(l.i, l.u, l.A, l.l, l.R, l.m)
  }
  ;(Yn.prototype.ca = function (l) {
    l = l.target
    const c = this.M
    c && gt(l) == 3 ? c.j() : this.Y(l)
  }),
    (Yn.prototype.Y = function (l) {
      try {
        if (l == this.g)
          e: {
            const Ie = gt(this.g)
            var c = this.g.Ba()
            const Jn = this.g.Z()
            if (
              !(3 > Ie) &&
              (Ie != 3 || (this.g && (this.h.h || this.g.oa() || Hs(this.g))))
            ) {
              this.J ||
                Ie != 4 ||
                c == 7 ||
                (c == 8 || 0 >= Jn ? Ai(3) : Ai(2)),
                Os(this)
              var p = this.g.Z()
              this.X = p
              t: if (Ri(this)) {
                var w = Hs(this.g)
                l = ''
                var z = w.length,
                  H = gt(this.g) == 4
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    Xn(this), Li(this)
                    var ee = ''
                    break t
                  }
                  this.h.i = new d.TextDecoder()
                }
                for (c = 0; c < z; c++)
                  (this.h.h = !0),
                    (l += this.h.i.decode(w[c], { stream: !(H && c == z - 1) }))
                ;(w.length = 0), (this.h.g += l), (this.C = 0), (ee = this.h.g)
              } else ee = this.g.oa()
              if (
                ((this.o = p == 200),
                Xf(this.i, this.u, this.A, this.l, this.R, Ie, p),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var Te,
                        Je = this.g
                      if (
                        (Te = Je.g
                          ? Je.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !k(Te)
                      ) {
                        var Se = Te
                        break t
                      }
                    }
                    Se = null
                  }
                  if ((p = Se))
                    br(
                      this.i,
                      this.l,
                      p,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      wo(this, p)
                  else {
                    ;(this.o = !1), (this.s = 3), pt(12), Xn(this), Li(this)
                    break e
                  }
                }
                if (this.P) {
                  p = !0
                  let mt
                  for (; !this.J && this.C < ee.length; )
                    if (((mt = ec(this, ee)), mt == Rs)) {
                      Ie == 4 && ((this.s = 4), pt(14), (p = !1)),
                        br(this.i, this.l, null, '[Incomplete Response]')
                      break
                    } else if (mt == hu) {
                      ;(this.s = 4),
                        pt(15),
                        br(this.i, this.l, ee, '[Invalid Chunk]'),
                        (p = !1)
                      break
                    } else br(this.i, this.l, mt, null), wo(this, mt)
                  if (
                    (Ri(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    Ie != 4 ||
                      ee.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), pt(16), (p = !1)),
                    (this.o = this.o && p),
                    !p)
                  )
                    br(this.i, this.l, ee, '[Invalid Chunked Response]'),
                      Xn(this),
                      Li(this)
                  else if (0 < ee.length && !this.W) {
                    this.W = !0
                    var it = this.j
                    it.g == this &&
                      it.ba &&
                      !it.M &&
                      (it.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          ee.length
                      ),
                      yn(it),
                      (it.M = !0),
                      pt(11))
                  }
                } else br(this.i, this.l, ee, null), wo(this, ee)
                Ie == 4 && Xn(this),
                  this.o &&
                    !this.J &&
                    (Ie == 4 ? Me(this.j, this) : ((this.o = !1), dr(this)))
              } else
                js(this.g),
                  p == 400 && 0 < ee.indexOf('Unknown SID')
                    ? ((this.s = 3), pt(12))
                    : ((this.s = 0), pt(13)),
                  Xn(this),
                  Li(this)
            }
          }
      } catch {
      } finally {
      }
    })
  function Ri(l) {
    return l.g ? l.u == 'GET' && l.L != 2 && l.j.Ca : !1
  }
  function ec(l, c) {
    var p = l.C,
      w = c.indexOf(
        `
`,
        p
      )
    return w == -1
      ? Rs
      : ((p = Number(c.substring(p, w))),
        isNaN(p)
          ? hu
          : ((w += 1),
            w + p > c.length
              ? Rs
              : ((c = c.slice(w, w + p)), (l.C = w + p), c)))
  }
  Yn.prototype.cancel = function () {
    ;(this.J = !0), Xn(this)
  }
  function dr(l) {
    ;(l.S = Date.now() + l.I), pu(l, l.I)
  }
  function pu(l, c) {
    if (l.B != null) throw Error('WatchDog timer not null')
    l.B = Ii(E(l.ba, l), c)
  }
  function Os(l) {
    l.B && (d.clearTimeout(l.B), (l.B = null))
  }
  Yn.prototype.ba = function () {
    this.B = null
    const l = Date.now()
    0 <= l - this.S
      ? (Qf(this.i, this.A),
        this.L != 2 && (Ai(), pt(17)),
        Xn(this),
        (this.s = 2),
        Li(this))
      : pu(this, this.S - l)
  }
  function Li(l) {
    l.j.G == 0 || l.J || Me(l.j, l)
  }
  function Xn(l) {
    Os(l)
    var c = l.M
    c && typeof c.ma == 'function' && c.ma(),
      (l.M = null),
      mo(l.U),
      l.g && ((c = l.g), (l.g = null), c.abort(), c.ma())
  }
  function wo(l, c) {
    try {
      var p = l.j
      if (p.G != 0 && (p.g == l || Ns(p.h, l))) {
        if (!l.K && Ns(p.h, l) && p.G == 3) {
          try {
            var w = p.Da.g.parse(c)
          } catch {
            w = null
          }
          if (Array.isArray(w) && w.length == 3) {
            var z = w
            if (z[0] == 0) {
              e: if (!p.u) {
                if (p.g)
                  if (p.g.F + 3e3 < l.F) Kr(p), Di(p)
                  else break e
                ko(p), pt(18)
              }
            } else
              (p.za = z[1]),
                0 < p.za - p.T &&
                  37500 > z[2] &&
                  p.F &&
                  p.v == 0 &&
                  !p.C &&
                  (p.C = Ii(E(p.Za, p), 6e3))
            if (1 >= yu(p.h) && p.ca) {
              try {
                p.ca()
              } catch {}
              p.ca = void 0
            }
          } else Fn(p, 11)
        } else if (((l.K || p.g == l) && Kr(p), !k(c)))
          for (z = p.Da.g.parse(c), c = 0; c < z.length; c++) {
            let Se = z[c]
            if (((p.T = Se[0]), (Se = Se[1]), p.G == 2))
              if (Se[0] == 'c') {
                ;(p.K = Se[1]), (p.ia = Se[2])
                const it = Se[3]
                it != null && ((p.la = it), p.j.info('VER=' + p.la))
                const Ie = Se[4]
                Ie != null && ((p.Aa = Ie), p.j.info('SVER=' + p.Aa))
                const Jn = Se[5]
                Jn != null &&
                  typeof Jn == 'number' &&
                  0 < Jn &&
                  ((w = 1.5 * Jn),
                  (p.L = w),
                  p.j.info('backChannelRequestTimeoutMs_=' + w)),
                  (w = p)
                const mt = l.g
                if (mt) {
                  const Bi = mt.g
                    ? mt.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null
                  if (Bi) {
                    var H = w.h
                    H.g ||
                      (Bi.indexOf('spdy') == -1 &&
                        Bi.indexOf('quic') == -1 &&
                        Bi.indexOf('h2') == -1) ||
                      ((H.j = H.l),
                      (H.g = new Set()),
                      H.h && (_o(H, H.h), (H.h = null)))
                  }
                  if (w.D) {
                    const Ao = mt.g
                      ? mt.g.getResponseHeader('X-HTTP-Session-Id')
                      : null
                    Ao && ((w.ya = Ao), Ne(w.I, w.D, Ao))
                  }
                }
                ;(p.G = 3),
                  p.l && p.l.ua(),
                  p.ba &&
                    ((p.R = Date.now() - l.F),
                    p.j.info('Handshake RTT: ' + p.R + 'ms')),
                  (w = p)
                var ee = l
                if (((w.qa = To(w, w.J ? w.ia : null, w.W)), ee.K)) {
                  Ds(w.h, ee)
                  var Te = ee,
                    Je = w.L
                  Je && (Te.I = Je), Te.B && (Os(Te), dr(Te)), (w.g = ee)
                } else Ou(w)
                0 < p.i.length && Mi(p)
              } else (Se[0] != 'stop' && Se[0] != 'close') || Fn(p, 7)
            else
              p.G == 3 &&
                (Se[0] == 'stop' || Se[0] == 'close'
                  ? Se[0] == 'stop'
                    ? Fn(p, 7)
                    : Co(p)
                  : Se[0] != 'noop' && p.l && p.l.ta(Se),
                (p.v = 0))
          }
      }
      Ai(4)
    } catch {}
  }
  var gu = class {
    constructor(l, c) {
      ;(this.g = l), (this.map = c)
    }
  }
  function mu(l) {
    ;(this.l = l || 10),
      d.PerformanceNavigationTiming
        ? ((l = d.performance.getEntriesByType('navigation')),
          (l =
            0 < l.length &&
            (l[0].nextHopProtocol == 'hq' || l[0].nextHopProtocol == 'h2')))
        : (l = !!(
            d.chrome &&
            d.chrome.loadTimes &&
            d.chrome.loadTimes() &&
            d.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = l ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = [])
  }
  function vu(l) {
    return l.h ? !0 : l.g ? l.g.size >= l.j : !1
  }
  function yu(l) {
    return l.h ? 1 : l.g ? l.g.size : 0
  }
  function Ns(l, c) {
    return l.h ? l.h == c : l.g ? l.g.has(c) : !1
  }
  function _o(l, c) {
    l.g ? l.g.add(c) : (l.h = c)
  }
  function Ds(l, c) {
    l.h && l.h == c ? (l.h = null) : l.g && l.g.has(c) && l.g.delete(c)
  }
  mu.prototype.cancel = function () {
    if (((this.i = Ms(this)), this.h)) this.h.cancel(), (this.h = null)
    else if (this.g && this.g.size !== 0) {
      for (const l of this.g.values()) l.cancel()
      this.g.clear()
    }
  }
  function Ms(l) {
    if (l.h != null) return l.i.concat(l.h.D)
    if (l.g != null && l.g.size !== 0) {
      let c = l.i
      for (const p of l.g.values()) c = c.concat(p.D)
      return c
    }
    return V(l.i)
  }
  function Fs(l) {
    if (l.V && typeof l.V == 'function') return l.V()
    if (
      (typeof Map < 'u' && l instanceof Map) ||
      (typeof Set < 'u' && l instanceof Set)
    )
      return Array.from(l.values())
    if (typeof l == 'string') return l.split('')
    if (g(l)) {
      for (var c = [], p = l.length, w = 0; w < p; w++) c.push(l[w])
      return c
    }
    ;(c = []), (p = 0)
    for (w in l) c[p++] = l[w]
    return c
  }
  function tc(l) {
    if (l.na && typeof l.na == 'function') return l.na()
    if (!l.V || typeof l.V != 'function') {
      if (typeof Map < 'u' && l instanceof Map) return Array.from(l.keys())
      if (!(typeof Set < 'u' && l instanceof Set)) {
        if (g(l) || typeof l == 'string') {
          var c = []
          l = l.length
          for (var p = 0; p < l; p++) c.push(p)
          return c
        }
        ;(c = []), (p = 0)
        for (const w in l) c[p++] = w
        return c
      }
    }
  }
  function zs(l, c) {
    if (l.forEach && typeof l.forEach == 'function') l.forEach(c, void 0)
    else if (g(l) || typeof l == 'string')
      Array.prototype.forEach.call(l, c, void 0)
    else
      for (var p = tc(l), w = Fs(l), z = w.length, H = 0; H < z; H++)
        c.call(void 0, w[H], p && p[H], l)
  }
  var Oi = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  )
  function wu(l, c) {
    if (l) {
      l = l.split('&')
      for (var p = 0; p < l.length; p++) {
        var w = l[p].indexOf('='),
          z = null
        if (0 <= w) {
          var H = l[p].substring(0, w)
          z = l[p].substring(w + 1)
        } else H = l[p]
        c(H, z ? decodeURIComponent(z.replace(/\+/g, ' ')) : '')
      }
    }
  }
  function pr(l) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      l instanceof pr)
    ) {
      ;(this.h = l.h),
        Ni(this, l.j),
        (this.o = l.o),
        (this.g = l.g),
        Hr(this, l.s),
        (this.l = l.l)
      var c = l.i,
        p = new Vr()
      ;(p.i = c.i),
        c.g && ((p.g = new Map(c.g)), (p.h = c.h)),
        _u(this, p),
        (this.m = l.m)
    } else
      l && (c = String(l).match(Oi))
        ? ((this.h = !1),
          Ni(this, c[1] || '', !0),
          (this.o = gr(c[2] || '')),
          (this.g = gr(c[3] || '', !0)),
          Hr(this, c[4]),
          (this.l = gr(c[5] || '', !0)),
          _u(this, c[6] || '', !0),
          (this.m = gr(c[7] || '')))
        : ((this.h = !1), (this.i = new Vr(null, this.h)))
  }
  pr.prototype.toString = function () {
    var l = [],
      c = this.j
    c && l.push(mn(c, Us, !0), ':')
    var p = this.g
    return (
      (p || c == 'file') &&
        (l.push('//'),
        (c = this.o) && l.push(mn(c, Us, !0), '@'),
        l.push(
          encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (p = this.s),
        p != null && l.push(':', String(p))),
      (p = this.l) &&
        (this.g && p.charAt(0) != '/' && l.push('/'),
        l.push(mn(p, p.charAt(0) == '/' ? Eu : nc, !0))),
      (p = this.i.toString()) && l.push('?', p),
      (p = this.m) && l.push('#', mn(p, Cu)),
      l.join('')
    )
  }
  function gn(l) {
    return new pr(l)
  }
  function Ni(l, c, p) {
    ;(l.j = p ? gr(c, !0) : c), l.j && (l.j = l.j.replace(/:$/, ''))
  }
  function Hr(l, c) {
    if (c) {
      if (((c = Number(c)), isNaN(c) || 0 > c))
        throw Error('Bad port number ' + c)
      l.s = c
    } else l.s = null
  }
  function _u(l, c, p) {
    c instanceof Vr
      ? ((l.i = c), rc(l.i, l.h))
      : (p || (c = mn(c, xu)), (l.i = new Vr(c, l.h)))
  }
  function Ne(l, c, p) {
    l.i.set(c, p)
  }
  function jr(l) {
    return (
      Ne(
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
  function gr(l, c) {
    return l
      ? c
        ? decodeURI(l.replace(/%25/g, '%2525'))
        : decodeURIComponent(l)
      : ''
  }
  function mn(l, c, p) {
    return typeof l == 'string'
      ? ((l = encodeURI(l).replace(c, Su)),
        p && (l = l.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        l)
      : null
  }
  function Su(l) {
    return (
      (l = l.charCodeAt(0)),
      '%' + ((l >> 4) & 15).toString(16) + (l & 15).toString(16)
    )
  }
  var Us = /[#\/\?@]/g,
    nc = /[#\?:]/g,
    Eu = /[#\?]/g,
    xu = /[#\?@]/g,
    Cu = /#/g
  function Vr(l, c) {
    ;(this.h = this.g = null), (this.i = l || null), (this.j = !!c)
  }
  function Qn(l) {
    l.g ||
      ((l.g = new Map()),
      (l.h = 0),
      l.i &&
        wu(l.i, function (c, p) {
          l.add(decodeURIComponent(c.replace(/\+/g, ' ')), p)
        }))
  }
  ;(e = Vr.prototype),
    (e.add = function (l, c) {
      Qn(this), (this.i = null), (l = Wr(this, l))
      var p = this.g.get(l)
      return p || this.g.set(l, (p = [])), p.push(c), (this.h += 1), this
    })
  function ku(l, c) {
    Qn(l),
      (c = Wr(l, c)),
      l.g.has(c) && ((l.i = null), (l.h -= l.g.get(c).length), l.g.delete(c))
  }
  function Tu(l, c) {
    return Qn(l), (c = Wr(l, c)), l.g.has(c)
  }
  ;(e.forEach = function (l, c) {
    Qn(this),
      this.g.forEach(function (p, w) {
        p.forEach(function (z) {
          l.call(c, z, w, this)
        }, this)
      }, this)
  }),
    (e.na = function () {
      Qn(this)
      const l = Array.from(this.g.values()),
        c = Array.from(this.g.keys()),
        p = []
      for (let w = 0; w < c.length; w++) {
        const z = l[w]
        for (let H = 0; H < z.length; H++) p.push(c[w])
      }
      return p
    }),
    (e.V = function (l) {
      Qn(this)
      let c = []
      if (typeof l == 'string')
        Tu(this, l) && (c = c.concat(this.g.get(Wr(this, l))))
      else {
        l = Array.from(this.g.values())
        for (let p = 0; p < l.length; p++) c = c.concat(l[p])
      }
      return c
    }),
    (e.set = function (l, c) {
      return (
        Qn(this),
        (this.i = null),
        (l = Wr(this, l)),
        Tu(this, l) && (this.h -= this.g.get(l).length),
        this.g.set(l, [c]),
        (this.h += 1),
        this
      )
    }),
    (e.get = function (l, c) {
      return l ? ((l = this.V(l)), 0 < l.length ? String(l[0]) : c) : c
    })
  function Bs(l, c, p) {
    ku(l, c),
      0 < p.length && ((l.i = null), l.g.set(Wr(l, c), V(p)), (l.h += p.length))
  }
  e.toString = function () {
    if (this.i) return this.i
    if (!this.g) return ''
    const l = [],
      c = Array.from(this.g.keys())
    for (var p = 0; p < c.length; p++) {
      var w = c[p]
      const H = encodeURIComponent(String(w)),
        ee = this.V(w)
      for (w = 0; w < ee.length; w++) {
        var z = H
        ee[w] !== '' && (z += '=' + encodeURIComponent(String(ee[w]))),
          l.push(z)
      }
    }
    return (this.i = l.join('&'))
  }
  function Wr(l, c) {
    return (c = String(c)), l.j && (c = c.toLowerCase()), c
  }
  function rc(l, c) {
    c &&
      !l.j &&
      (Qn(l),
      (l.i = null),
      l.g.forEach(function (p, w) {
        var z = w.toLowerCase()
        w != z && (ku(this, w), Bs(this, z, p))
      }, l)),
      (l.j = c)
  }
  function ic(l, c) {
    const p = new hr()
    if (d.Image) {
      const w = new Image()
      ;(w.onload = B(vn, p, 'TestLoadImage: loaded', !0, c, w)),
        (w.onerror = B(vn, p, 'TestLoadImage: error', !1, c, w)),
        (w.onabort = B(vn, p, 'TestLoadImage: abort', !1, c, w)),
        (w.ontimeout = B(vn, p, 'TestLoadImage: timeout', !1, c, w)),
        d.setTimeout(function () {
          w.ontimeout && w.ontimeout()
        }, 1e4),
        (w.src = l)
    } else c(!1)
  }
  function oc(l, c) {
    const p = new hr(),
      w = new AbortController(),
      z = setTimeout(() => {
        w.abort(), vn(p, 'TestPingServer: timeout', !1, c)
      }, 1e4)
    fetch(l, { signal: w.signal })
      .then((H) => {
        clearTimeout(z),
          H.ok
            ? vn(p, 'TestPingServer: ok', !0, c)
            : vn(p, 'TestPingServer: server error', !1, c)
      })
      .catch(() => {
        clearTimeout(z), vn(p, 'TestPingServer: error', !1, c)
      })
  }
  function vn(l, c, p, w, z) {
    try {
      z &&
        ((z.onload = null),
        (z.onerror = null),
        (z.onabort = null),
        (z.ontimeout = null)),
        w(p)
    } catch {}
  }
  function sc() {
    this.g = new xs()
  }
  function lc(l, c, p) {
    const w = p || ''
    try {
      zs(l, function (z, H) {
        let ee = z
        y(z) && (ee = Ti(z)), c.push(w + H + '=' + encodeURIComponent(ee))
      })
    } catch (z) {
      throw (c.push(w + 'type=' + encodeURIComponent('_badmap')), z)
    }
  }
  function So(l) {
    ;(this.l = l.Ub || null), (this.j = l.eb || !1)
  }
  $(So, Cs),
    (So.prototype.g = function () {
      return new Eo(this.l, this.j)
    }),
    (So.prototype.i = (function (l) {
      return function () {
        return l
      }
    })({}))
  function Eo(l, c) {
    at.call(this),
      (this.D = l),
      (this.o = c),
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
  $(Eo, at),
    (e = Eo.prototype),
    (e.open = function (l, c) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.B = l), (this.A = c), (this.readyState = 1), Ce(this)
    }),
    (e.send = function (l) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '))
      this.g = !0
      const c = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      }
      l && (c.body = l),
        (this.D || d)
          .fetch(new Request(this.A, c))
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
          ((this.g = !1), ke(this)),
        (this.readyState = 0)
    }),
    (e.Sa = function (l) {
      if (
        this.g &&
        ((this.l = l),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = l.headers),
          (this.readyState = 2),
          Ce(this)),
        this.g && ((this.readyState = 3), Ce(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          l.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this))
        else if (typeof d.ReadableStream < 'u' && 'body' in l) {
          if (((this.j = l.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              )
            this.response = []
          } else
            (this.response = this.responseText = ''),
              (this.v = new TextDecoder())
          Au(this)
        } else l.text().then(this.Ra.bind(this), this.ga.bind(this))
    })
  function Au(l) {
    l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))
  }
  ;(e.Pa = function (l) {
    if (this.g) {
      if (this.o && l.value) this.response.push(l.value)
      else if (!this.o) {
        var c = l.value ? l.value : new Uint8Array(0)
        ;(c = this.v.decode(c, { stream: !l.done })) &&
          (this.response = this.responseText += c)
      }
      l.done ? ke(this) : Ce(this), this.readyState == 3 && Au(this)
    }
  }),
    (e.Ra = function (l) {
      this.g && ((this.response = this.responseText = l), ke(this))
    }),
    (e.Qa = function (l) {
      this.g && ((this.response = l), ke(this))
    }),
    (e.ga = function () {
      this.g && ke(this)
    })
  function ke(l) {
    ;(l.readyState = 4), (l.l = null), (l.j = null), (l.v = null), Ce(l)
  }
  ;(e.setRequestHeader = function (l, c) {
    this.u.append(l, c)
  }),
    (e.getResponseHeader = function (l) {
      return (this.h && this.h.get(l.toLowerCase())) || ''
    }),
    (e.getAllResponseHeaders = function () {
      if (!this.h) return ''
      const l = [],
        c = this.h.entries()
      for (var p = c.next(); !p.done; )
        (p = p.value), l.push(p[0] + ': ' + p[1]), (p = c.next())
      return l.join(`\r
`)
    })
  function Ce(l) {
    l.onreadystatechange && l.onreadystatechange.call(l)
  }
  Object.defineProperty(Eo.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include'
    },
    set: function (l) {
      this.m = l ? 'include' : 'same-origin'
    },
  })
  function Iu(l) {
    let c = ''
    return (
      Z(l, function (p, w) {
        ;(c += w),
          (c += ':'),
          (c += p),
          (c += `\r
`)
      }),
      c
    )
  }
  function $s(l, c, p) {
    e: {
      for (w in p) {
        var w = !1
        break e
      }
      w = !0
    }
    w ||
      ((p = Iu(p)),
      typeof l == 'string'
        ? p != null && encodeURIComponent(String(p))
        : Ne(l, c, p))
  }
  function He(l) {
    at.call(this),
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
  $(He, at)
  var uc = /^https?$/i,
    ac = ['POST', 'PUT']
  ;(e = He.prototype),
    (e.Ha = function (l) {
      this.J = l
    }),
    (e.ea = function (l, c, p, w) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            l
        )
      ;(c = c ? c.toUpperCase() : 'GET'),
        (this.D = l),
        (this.l = ''),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : Ps.g()),
        (this.v = this.o ? uu(this.o) : uu(Ps)),
        (this.g.onreadystatechange = E(this.Ea, this))
      try {
        ;(this.B = !0), this.g.open(c, String(l), !0), (this.B = !1)
      } catch (H) {
        Pu(this, H)
        return
      }
      if (((l = p || ''), (p = new Map(this.headers)), w))
        if (Object.getPrototypeOf(w) === Object.prototype)
          for (var z in w) p.set(z, w[z])
        else if (typeof w.keys == 'function' && typeof w.get == 'function')
          for (const H of w.keys()) p.set(H, w.get(H))
        else throw Error('Unknown input type for opt_headers: ' + String(w))
      ;(w = Array.from(p.keys()).find(
        (H) => H.toLowerCase() == 'content-type'
      )),
        (z = d.FormData && l instanceof d.FormData),
        !(0 <= Array.prototype.indexOf.call(ac, c, void 0)) ||
          w ||
          z ||
          p.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          )
      for (const [H, ee] of p) this.g.setRequestHeader(H, ee)
      this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J)
      try {
        xo(this), (this.u = !0), this.g.send(l), (this.u = !1)
      } catch (H) {
        Pu(this, H)
      }
    })
  function Pu(l, c) {
    ;(l.h = !1),
      l.g && ((l.j = !0), l.g.abort(), (l.j = !1)),
      (l.l = c),
      (l.m = 5),
      bs(l),
      Ge(l)
  }
  function bs(l) {
    l.A || ((l.A = !0), Qe(l, 'complete'), Qe(l, 'error'))
  }
  ;(e.abort = function (l) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = l || 7),
      Qe(this, 'complete'),
      Qe(this, 'abort'),
      Ge(this))
  }),
    (e.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Ge(this, !0)),
        He.aa.N.call(this)
    }),
    (e.Ea = function () {
      this.s || (this.B || this.u || this.j ? Ru(this) : this.bb())
    }),
    (e.bb = function () {
      Ru(this)
    })
  function Ru(l) {
    if (l.h && typeof f < 'u' && (!l.v[1] || gt(l) != 4 || l.Z() != 2)) {
      if (l.u && gt(l) == 4) ho(l.Ea, 0, l)
      else if ((Qe(l, 'readystatechange'), gt(l) == 4)) {
        l.h = !1
        try {
          const ee = l.Z()
          e: switch (ee) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0
              break e
            default:
              c = !1
          }
          var p
          if (!(p = c)) {
            var w
            if ((w = ee === 0)) {
              var z = String(l.D).match(Oi)[1] || null
              !z &&
                d.self &&
                d.self.location &&
                (z = d.self.location.protocol.slice(0, -1)),
                (w = !uc.test(z ? z.toLowerCase() : ''))
            }
            p = w
          }
          if (p) Qe(l, 'complete'), Qe(l, 'success')
          else {
            l.m = 6
            try {
              var H = 2 < gt(l) ? l.g.statusText : ''
            } catch {
              H = ''
            }
            ;(l.l = H + ' [' + l.Z() + ']'), bs(l)
          }
        } finally {
          Ge(l)
        }
      }
    }
  }
  function Ge(l, c) {
    if (l.g) {
      xo(l)
      const p = l.g,
        w = l.v[0] ? () => {} : null
      ;(l.g = null), (l.v = null), c || Qe(l, 'ready')
      try {
        p.onreadystatechange = w
      } catch {}
    }
  }
  function xo(l) {
    l.I && (d.clearTimeout(l.I), (l.I = null))
  }
  e.isActive = function () {
    return !!this.g
  }
  function gt(l) {
    return l.g ? l.g.readyState : 0
  }
  ;(e.Z = function () {
    try {
      return 2 < gt(this) ? this.g.status : -1
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
    (e.Oa = function (l) {
      if (this.g) {
        var c = this.g.responseText
        return l && c.indexOf(l) == 0 && (c = c.substring(l.length)), Es(c)
      }
    })
  function Hs(l) {
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
  function js(l) {
    const c = {}
    l = ((l.g && 2 <= gt(l) && l.g.getAllResponseHeaders()) || '').split(`\r
`)
    for (let w = 0; w < l.length; w++) {
      if (k(l[w])) continue
      var p = D(l[w])
      const z = p[0]
      if (((p = p[1]), typeof p != 'string')) continue
      p = p.trim()
      const H = c[z] || []
      ;(c[z] = H), H.push(p)
    }
    x(c, function (w) {
      return w.join(', ')
    })
  }
  ;(e.Ba = function () {
    return this.m
  }),
    (e.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l)
    })
  function ft(l, c, p) {
    return (p && p.internalChannelParams && p.internalChannelParams[l]) || c
  }
  function Vs(l) {
    ;(this.Aa = 0),
      (this.i = []),
      (this.j = new hr()),
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
      (this.Va = ft('failFast', !1, l)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = ft('baseRetryDelayMs', 5e3, l)),
      (this.cb = ft('retryDelaySeedMs', 1e4, l)),
      (this.Wa = ft('forwardChannelMaxRetries', 2, l)),
      (this.wa = ft('forwardChannelRequestTimeoutMs', 2e4, l)),
      (this.pa = (l && l.xmlHttpFactory) || void 0),
      (this.Xa = (l && l.Tb) || void 0),
      (this.Ca = (l && l.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (l && l.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new mu(l && l.concurrentRequestLimit)),
      (this.Da = new sc()),
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
  ;(e = Vs.prototype),
    (e.la = 8),
    (e.G = 1),
    (e.connect = function (l, c, p, w) {
      pt(0),
        (this.W = l),
        (this.H = c || {}),
        p && w !== void 0 && ((this.H.OSID = p), (this.H.OAID = w)),
        (this.F = this.X),
        (this.I = To(this, null, this.W)),
        Mi(this)
    })
  function Co(l) {
    if ((Ws(l), l.G == 3)) {
      var c = l.U++,
        p = gn(l.I)
      if (
        (Ne(p, 'SID', l.K),
        Ne(p, 'RID', c),
        Ne(p, 'TYPE', 'terminate'),
        Fi(l, p),
        (c = new Yn(l, l.j, c)),
        (c.L = 2),
        (c.v = jr(gn(p))),
        (p = !1),
        d.navigator && d.navigator.sendBeacon)
      )
        try {
          p = d.navigator.sendBeacon(c.v.toString(), '')
        } catch {}
      !p && d.Image && ((new Image().src = c.v), (p = !0)),
        p || ((c.g = Du(c.j, null)), c.g.ea(c.v)),
        (c.F = Date.now()),
        dr(c)
    }
    Nu(l)
  }
  function Di(l) {
    l.g && (yn(l), l.g.cancel(), (l.g = null))
  }
  function Ws(l) {
    Di(l),
      l.u && (d.clearTimeout(l.u), (l.u = null)),
      Kr(l),
      l.h.cancel(),
      l.s && (typeof l.s == 'number' && d.clearTimeout(l.s), (l.s = null))
  }
  function Mi(l) {
    if (!vu(l.h) && !l.s) {
      l.s = !0
      var c = l.Ga
      nt || se(), Q || (nt(), (Q = !0)), oe.add(c, l), (l.B = 0)
    }
  }
  function Lu(l, c) {
    return yu(l.h) >= l.h.j - (l.s ? 1 : 0)
      ? !1
      : l.s
      ? ((l.i = c.D.concat(l.i)), !0)
      : l.G == 1 || l.G == 2 || l.B >= (l.Va ? 0 : l.Wa)
      ? !1
      : ((l.s = Ii(E(l.Ga, l, c), Mn(l, l.B))), l.B++, !0)
  }
  e.Ga = function (l) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!l) {
          ;(this.U = Math.floor(1e5 * Math.random())), (l = this.U++)
          const z = new Yn(this, this.j, l)
          let H = this.o
          if (
            (this.S && (H ? ((H = S(H)), I(H, this.S)) : (H = this.S)),
            this.m !== null || this.O || ((z.H = H), (H = null)),
            this.P)
          )
            e: {
              for (var c = 0, p = 0; p < this.i.length; p++) {
                t: {
                  var w = this.i[p]
                  if (
                    '__data__' in w.map &&
                    ((w = w.map.__data__), typeof w == 'string')
                  ) {
                    w = w.length
                    break t
                  }
                  w = void 0
                }
                if (w === void 0) break
                if (((c += w), 4096 < c)) {
                  c = p
                  break e
                }
                if (c === 4096 || p === this.i.length - 1) {
                  c = p + 1
                  break e
                }
              }
              c = 1e3
            }
          else c = 1e3
          ;(c = Nt(this, z, c)),
            (p = gn(this.I)),
            Ne(p, 'RID', l),
            Ne(p, 'CVER', 22),
            this.D && Ne(p, 'X-HTTP-Session-Id', this.D),
            Fi(this, p),
            H &&
              (this.O
                ? (c = 'headers=' + encodeURIComponent(String(Iu(H))) + '&' + c)
                : this.m && $s(p, this.m, H)),
            _o(this.h, z),
            this.Ua && Ne(p, 'TYPE', 'init'),
            this.P
              ? (Ne(p, '$req', c),
                Ne(p, 'SID', 'null'),
                (z.T = !0),
                Ls(z, p, null))
              : Ls(z, p, c),
            (this.G = 2)
        }
      } else
        this.G == 3 &&
          (l ? Et(this, l) : this.i.length == 0 || vu(this.h) || Et(this))
  }
  function Et(l, c) {
    var p
    c ? (p = c.l) : (p = l.U++)
    const w = gn(l.I)
    Ne(w, 'SID', l.K),
      Ne(w, 'RID', p),
      Ne(w, 'AID', l.T),
      Fi(l, w),
      l.m && l.o && $s(w, l.m, l.o),
      (p = new Yn(l, l.j, p, l.B + 1)),
      l.m === null && (p.H = l.o),
      c && (l.i = c.D.concat(l.i)),
      (c = Nt(l, p, 1e3)),
      (p.I = Math.round(0.5 * l.wa) + Math.round(0.5 * l.wa * Math.random())),
      _o(l.h, p),
      Ls(p, w, c)
  }
  function Fi(l, c) {
    l.H &&
      Z(l.H, function (p, w) {
        Ne(c, w, p)
      }),
      l.l &&
        zs({}, function (p, w) {
          Ne(c, w, p)
        })
  }
  function Nt(l, c, p) {
    p = Math.min(l.i.length, p)
    var w = l.l ? E(l.l.Na, l.l, l) : null
    e: {
      var z = l.i
      let H = -1
      for (;;) {
        const ee = ['count=' + p]
        H == -1
          ? 0 < p
            ? ((H = z[0].g), ee.push('ofs=' + H))
            : (H = 0)
          : ee.push('ofs=' + H)
        let Te = !0
        for (let Je = 0; Je < p; Je++) {
          let Se = z[Je].g
          const it = z[Je].map
          if (((Se -= H), 0 > Se)) (H = Math.max(0, z[Je].g - 100)), (Te = !1)
          else
            try {
              lc(it, ee, 'req' + Se + '_')
            } catch {
              w && w(it)
            }
        }
        if (Te) {
          w = ee.join('&')
          break e
        }
      }
    }
    return (l = l.i.splice(0, p)), (c.D = l), w
  }
  function Ou(l) {
    if (!l.g && !l.u) {
      l.Y = 1
      var c = l.Fa
      nt || se(), Q || (nt(), (Q = !0)), oe.add(c, l), (l.v = 0)
    }
  }
  function ko(l) {
    return l.g || l.u || 3 <= l.v
      ? !1
      : (l.Y++, (l.u = Ii(E(l.Fa, l), Mn(l, l.v))), l.v++, !0)
  }
  ;(e.Fa = function () {
    if (
      ((this.u = null),
      zi(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var l = 2 * this.R
      this.j.info('BP detection timer enabled: ' + l),
        (this.A = Ii(E(this.ab, this), l))
    }
  }),
    (e.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        pt(10),
        Di(this),
        zi(this))
    })
  function yn(l) {
    l.A != null && (d.clearTimeout(l.A), (l.A = null))
  }
  function zi(l) {
    ;(l.g = new Yn(l, l.j, 'rpc', l.Y)),
      l.m === null && (l.g.H = l.o),
      (l.g.O = 0)
    var c = gn(l.qa)
    Ne(c, 'RID', 'rpc'),
      Ne(c, 'SID', l.K),
      Ne(c, 'AID', l.T),
      Ne(c, 'CI', l.F ? '0' : '1'),
      !l.F && l.ja && Ne(c, 'TO', l.ja),
      Ne(c, 'TYPE', 'xmlhttp'),
      Fi(l, c),
      l.m && l.o && $s(c, l.m, l.o),
      l.L && (l.g.I = l.L)
    var p = l.g
    ;(l = l.ia),
      (p.L = 1),
      (p.v = jr(gn(c))),
      (p.m = null),
      (p.P = !0),
      du(p, l)
  }
  e.Za = function () {
    this.C != null && ((this.C = null), Di(this), ko(this), pt(19))
  }
  function Kr(l) {
    l.C != null && (d.clearTimeout(l.C), (l.C = null))
  }
  function Me(l, c) {
    var p = null
    if (l.g == c) {
      Kr(l), yn(l), (l.g = null)
      var w = 2
    } else if (Ns(l.h, c)) (p = c.D), Ds(l.h, c), (w = 1)
    else return
    if (l.G != 0) {
      if (c.o)
        if (w == 1) {
          ;(p = c.m ? c.m.length : 0), (c = Date.now() - c.F)
          var z = l.B
          ;(w = Ts()), Qe(w, new yo(w, p)), Mi(l)
        } else Ou(l)
      else if (
        ((z = c.s),
        z == 3 ||
          (z == 0 && 0 < c.X) ||
          !((w == 1 && Lu(l, c)) || (w == 2 && ko(l))))
      )
        switch ((p && 0 < p.length && ((c = l.h), (c.i = c.i.concat(p))), z)) {
          case 1:
            Fn(l, 5)
            break
          case 4:
            Fn(l, 10)
            break
          case 3:
            Fn(l, 6)
            break
          default:
            Fn(l, 2)
        }
    }
  }
  function Mn(l, c) {
    let p = l.Ta + Math.floor(Math.random() * l.cb)
    return l.isActive() || (p *= 2), p * c
  }
  function Fn(l, c) {
    if ((l.j.info('Error code ' + c), c == 2)) {
      var p = E(l.fb, l),
        w = l.Xa
      const z = !w
      ;(w = new pr(w || '//www.google.com/images/cleardot.gif')),
        (d.location && d.location.protocol == 'http') || Ni(w, 'https'),
        jr(w),
        z ? ic(w.toString(), p) : oc(w.toString(), p)
    } else pt(2)
    ;(l.G = 0), l.l && l.l.sa(c), Nu(l), Ws(l)
  }
  e.fb = function (l) {
    l
      ? (this.j.info('Successfully pinged google.com'), pt(2))
      : (this.j.info('Failed to ping google.com'), pt(1))
  }
  function Nu(l) {
    if (((l.G = 0), (l.ka = []), l.l)) {
      const c = Ms(l.h)
      ;(c.length != 0 || l.i.length != 0) &&
        (q(l.ka, c),
        q(l.ka, l.i),
        (l.h.i.length = 0),
        V(l.i),
        (l.i.length = 0)),
        l.l.ra()
    }
  }
  function To(l, c, p) {
    var w = p instanceof pr ? gn(p) : new pr(p)
    if (w.g != '') c && (w.g = c + '.' + w.g), Hr(w, w.s)
    else {
      var z = d.location
      ;(w = z.protocol),
        (c = c ? c + '.' + z.hostname : z.hostname),
        (z = +z.port)
      var H = new pr(null)
      w && Ni(H, w), c && (H.g = c), z && Hr(H, z), p && (H.l = p), (w = H)
    }
    return (
      (p = l.D),
      (c = l.ya),
      p && c && Ne(w, p, c),
      Ne(w, 'VER', l.la),
      Fi(l, w),
      w
    )
  }
  function Du(l, c, p) {
    if (c && !l.J)
      throw Error("Can't create secondary domain capable XhrIo object.")
    return (
      (c = l.Ca && !l.pa ? new He(new So({ eb: p })) : new He(l.pa)),
      c.Ha(l.J),
      c
    )
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this)
  }
  function Mu() {}
  ;(e = Mu.prototype),
    (e.ua = function () {}),
    (e.ta = function () {}),
    (e.sa = function () {}),
    (e.ra = function () {}),
    (e.isActive = function () {
      return !0
    }),
    (e.Na = function () {})
  function Vt(l, c) {
    at.call(this),
      (this.g = new Vs(c)),
      (this.l = l),
      (this.h = (c && c.messageUrlParams) || null),
      (l = (c && c.messageHeaders) || null),
      c &&
        c.clientProtocolHeaderRequired &&
        (l
          ? (l['X-Client-Protocol'] = 'webchannel')
          : (l = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = l),
      (l = (c && c.initMessageHeaders) || null),
      c &&
        c.messageContentType &&
        (l
          ? (l['X-WebChannel-Content-Type'] = c.messageContentType)
          : (l = { 'X-WebChannel-Content-Type': c.messageContentType })),
      c &&
        c.va &&
        (l
          ? (l['X-WebChannel-Client-Profile'] = c.va)
          : (l = { 'X-WebChannel-Client-Profile': c.va })),
      (this.g.S = l),
      (l = c && c.Sb) && !k(l) && (this.g.m = l),
      (this.v = (c && c.supportsCrossDomainXhr) || !1),
      (this.u = (c && c.sendRawJson) || !1),
      (c = c && c.httpSessionIdParam) &&
        !k(c) &&
        ((this.g.D = c),
        (l = this.h),
        l !== null && c in l && ((l = this.h), c in l && delete l[c])),
      (this.j = new nn(this))
  }
  $(Vt, at),
    (Vt.prototype.m = function () {
      ;(this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }),
    (Vt.prototype.close = function () {
      Co(this.g)
    }),
    (Vt.prototype.o = function (l) {
      var c = this.g
      if (typeof l == 'string') {
        var p = {}
        ;(p.__data__ = l), (l = p)
      } else this.u && ((p = {}), (p.__data__ = Ti(l)), (l = p))
      c.i.push(new gu(c.Ya++, l)), c.G == 3 && Mi(c)
    }),
    (Vt.prototype.N = function () {
      ;(this.g.l = null),
        delete this.j,
        Co(this.g),
        delete this.g,
        Vt.aa.N.call(this)
    })
  function Ks(l) {
    vo.call(this),
      l.__headers__ &&
        ((this.headers = l.__headers__),
        (this.statusCode = l.__status__),
        delete l.__headers__,
        delete l.__status__)
    var c = l.__sm__
    if (c) {
      e: {
        for (const p in c) {
          l = p
          break e
        }
        l = void 0
      }
      ;(this.i = l) &&
        ((l = this.i), (c = c !== null && l in c ? c[l] : void 0)),
        (this.data = c)
    } else this.data = l
  }
  $(Ks, vo)
  function Ui() {
    ks.call(this), (this.status = 1)
  }
  $(Ui, ks)
  function nn(l) {
    this.g = l
  }
  $(nn, Mu),
    (nn.prototype.ua = function () {
      Qe(this.g, 'a')
    }),
    (nn.prototype.ta = function (l) {
      Qe(this.g, new Ks(l))
    }),
    (nn.prototype.sa = function (l) {
      Qe(this.g, new Ui())
    }),
    (nn.prototype.ra = function () {
      Qe(this.g, 'b')
    }),
    (Vt.prototype.send = Vt.prototype.o),
    (Vt.prototype.open = Vt.prototype.m),
    (Vt.prototype.close = Vt.prototype.close),
    (Is.NO_ERROR = 0),
    (Is.TIMEOUT = 8),
    (Is.HTTP_ERROR = 6),
    (Zf.COMPLETE = 'complete'),
    (qf.EventType = Br),
    (Br.OPEN = 'a'),
    (Br.CLOSE = 'b'),
    (Br.ERROR = 'c'),
    (Br.MESSAGE = 'd'),
    (at.prototype.listen = at.prototype.K),
    (He.prototype.listenOnce = He.prototype.L),
    (He.prototype.getLastError = He.prototype.Ka),
    (He.prototype.getLastErrorCode = He.prototype.Ba),
    (He.prototype.getStatus = He.prototype.Z),
    (He.prototype.getResponseJson = He.prototype.Oa),
    (He.prototype.getResponseText = He.prototype.oa),
    (He.prototype.send = He.prototype.ea),
    (He.prototype.setWithCredentials = He.prototype.Ha)
}).apply(
  typeof Fa < 'u'
    ? Fa
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
const nv = '@firebase/firestore'
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
 */ class Ut {
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
;(Ut.UNAUTHENTICATED = new Ut(null)),
  (Ut.GOOGLE_CREDENTIALS = new Ut('google-credentials-uid')),
  (Ut.FIRST_PARTY = new Ut('first-party-uid')),
  (Ut.MOCK_USER = new Ut('mock-user'))
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
 */ const gs = new Vy('@firebase/firestore')
function Wn(e, ...t) {
  if (gs.logLevel <= De.DEBUG) {
    const n = t.map(Mp)
    gs.debug(`Firestore (${iu}): ${e}`, ...n)
  }
}
function Qy(e, ...t) {
  if (gs.logLevel <= De.ERROR) {
    const n = t.map(Mp)
    gs.error(`Firestore (${iu}): ${e}`, ...n)
  }
}
function HA(e, ...t) {
  if (gs.logLevel <= De.WARN) {
    const n = t.map(Mp)
    gs.warn(`Firestore (${iu}): ${e}`, ...n)
  }
}
function Mp(e) {
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
     */ return (function (n) {
      return JSON.stringify(n)
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
 */ function Fp(e = 'Unexpected state') {
  const t = `FIRESTORE (${iu}) INTERNAL ASSERTION FAILED: ` + e
  throw (Qy(t), new Error(t))
}
function Rl(e, t) {
  e || Fp()
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
 */ const Xt = {
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
class Qt extends ws {
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
 */ class Ll {
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
 */ class Jy {
  constructor(t, n) {
    ;(this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${t}`)
  }
}
class jA {
  getToken() {
    return Promise.resolve(null)
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(Ut.UNAUTHENTICATED))
  }
  shutdown() {}
}
class VA {
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
class WA {
  constructor(t) {
    ;(this.t = t),
      (this.currentUser = Ut.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(t, n) {
    Rl(this.o === void 0)
    let i = this.i
    const s = (g) => (this.i !== i ? ((i = this.i), n(g)) : Promise.resolve())
    let u = new Ll()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        u.resolve(),
        (u = new Ll()),
        t.enqueueRetryable(() => s(this.currentUser))
    }
    const f = () => {
        const g = u
        t.enqueueRetryable(async () => {
          await g.promise, await s(this.currentUser)
        })
      },
      d = (g) => {
        Wn('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = g),
          this.o && (this.auth.addAuthTokenListener(this.o), f())
      }
    this.t.onInit((g) => d(g)),
      setTimeout(() => {
        if (!this.auth) {
          const g = this.t.getImmediate({ optional: !0 })
          g
            ? d(g)
            : (Wn('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              u.resolve(),
              (u = new Ll()))
        }
      }, 0),
      f()
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
                ? (Wn(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : i
                ? (Rl(typeof i.accessToken == 'string'),
                  new Jy(i.accessToken, this.currentUser))
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
    return Rl(t === null || typeof t == 'string'), new Ut(t)
  }
}
class KA {
  constructor(t, n, i) {
    ;(this.l = t),
      (this.h = n),
      (this.P = i),
      (this.type = 'FirstParty'),
      (this.user = Ut.FIRST_PARTY),
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
class GA {
  constructor(t, n, i) {
    ;(this.l = t), (this.h = n), (this.P = i)
  }
  getToken() {
    return Promise.resolve(new KA(this.l, this.h, this.P))
  }
  start(t, n) {
    t.enqueueRetryable(() => n(Ut.FIRST_PARTY))
  }
  shutdown() {}
  invalidateToken() {}
}
class qA {
  constructor(t) {
    ;(this.value = t),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set('x-firebase-appcheck', this.value)
  }
}
class YA {
  constructor(t) {
    ;(this.A = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null)
  }
  start(t, n) {
    Rl(this.o === void 0)
    const i = (u) => {
      u.error != null &&
        Wn(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`
        )
      const f = u.token !== this.R
      return (
        (this.R = u.token),
        Wn(
          'FirebaseAppCheckTokenProvider',
          `Received ${f ? 'new' : 'existing'} token.`
        ),
        f ? n(u.token) : Promise.resolve()
      )
    }
    this.o = (u) => {
      t.enqueueRetryable(() => i(u))
    }
    const s = (u) => {
      Wn('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = u),
        this.o && this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((u) => s(u)),
      setTimeout(() => {
        if (!this.appCheck) {
          const u = this.A.getImmediate({ optional: !0 })
          u
            ? s(u)
            : Wn('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected')
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
                ? (Rl(typeof n.token == 'string'),
                  (this.R = n.token),
                  new qA(n.token))
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
function XA(e) {
  return e.name === 'IndexedDbTransactionError'
}
class kf {
  constructor(t, n) {
    ;(this.projectId = t), (this.database = n || '(default)')
  }
  static empty() {
    return new kf('', '')
  }
  get isDefaultDatabase() {
    return this.database === '(default)'
  }
  isEqual(t) {
    return (
      t instanceof kf &&
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
 */ var rv, Ee
;((Ee = rv || (rv = {}))[(Ee.OK = 0)] = 'OK'),
  (Ee[(Ee.CANCELLED = 1)] = 'CANCELLED'),
  (Ee[(Ee.UNKNOWN = 2)] = 'UNKNOWN'),
  (Ee[(Ee.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (Ee[(Ee.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (Ee[(Ee.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (Ee[(Ee.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (Ee[(Ee.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (Ee[(Ee.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (Ee[(Ee.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (Ee[(Ee.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (Ee[(Ee.ABORTED = 10)] = 'ABORTED'),
  (Ee[(Ee.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (Ee[(Ee.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (Ee[(Ee.INTERNAL = 13)] = 'INTERNAL'),
  (Ee[(Ee.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (Ee[(Ee.DATA_LOSS = 15)] = 'DATA_LOSS')
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
 */ new Xy([4294967295, 4294967295], 0)
function Mh() {
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
 */ class QA {
  constructor(t, n, i = 1e3, s = 1.5, u = 6e4) {
    ;(this.ui = t),
      (this.timerId = n),
      (this.ko = i),
      (this.qo = s),
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
      s = Math.max(0, n - i)
    s > 0 &&
      Wn(
        'ExponentialBackoff',
        `Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        s,
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
 */ class zp {
  constructor(t, n, i, s, u) {
    ;(this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = i),
      (this.op = s),
      (this.removalCallback = u),
      (this.deferred = new Ll()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((f) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(t, n, i, s, u) {
    const f = Date.now() + i,
      d = new zp(t, n, f, s, u)
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
        new Qt(Xt.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))
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
var iv, ov
;((ov = iv || (iv = {})).ea = 'default'), (ov.Cache = 'cache')
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
 */ function JA(e) {
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
 */ const sv = new Map()
function ZA(e, t, n, i) {
  if (t === !0 && i === !0)
    throw new Qt(Xt.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`)
}
function eI(e) {
  if (e === void 0) return 'undefined'
  if (e === null) return 'null'
  if (typeof e == 'string')
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e)
  if (typeof e == 'number' || typeof e == 'boolean') return '' + e
  if (typeof e == 'object') {
    if (e instanceof Array) return 'an array'
    {
      const t = (function (i) {
        return i.constructor ? i.constructor.name : null
      })(e)
      return t ? `a custom ${t} object` : 'an object'
    }
  }
  return typeof e == 'function' ? 'a function' : Fp()
}
function tI(e, t) {
  if (('_delegate' in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new Qt(
        Xt.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = eI(e)
      throw new Qt(
        Xt.INVALID_ARGUMENT,
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
 */ class lv {
  constructor(t) {
    var n, i
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new Qt(
          Xt.INVALID_ARGUMENT,
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
        throw new Qt(
          Xt.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        )
      this.cacheSizeBytes = t.cacheSizeBytes
    }
    ZA(
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
      (this.experimentalLongPollingOptions = JA(
        (i = t.experimentalLongPollingOptions) !== null && i !== void 0 ? i : {}
      )),
      (function (u) {
        if (u.timeoutSeconds !== void 0) {
          if (isNaN(u.timeoutSeconds))
            throw new Qt(
              Xt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`
            )
          if (u.timeoutSeconds < 5)
            throw new Qt(
              Xt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (u.timeoutSeconds > 30)
            throw new Qt(
              Xt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`
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
      (function (i, s) {
        return i.timeoutSeconds === s.timeoutSeconds
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    )
  }
}
class Zy {
  constructor(t, n, i, s) {
    ;(this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = i),
      (this._app = s),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new lv({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = 'notTerminated')
  }
  get app() {
    if (!this._app)
      throw new Qt(
        Xt.FAILED_PRECONDITION,
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
      throw new Qt(
        Xt.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new lv(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (i) {
          if (!i) return new jA()
          switch (i.type) {
            case 'firstParty':
              return new GA(
                i.sessionIndex || '0',
                i.iamToken || null,
                i.authTokenFactory || null
              )
            case 'provider':
              return i.client
            default:
              throw new Qt(
                Xt.INVALID_ARGUMENT,
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
      (function (n) {
        const i = sv.get(n)
        i &&
          (Wn('ComponentProvider', 'Removing Datastore'),
          sv.delete(n),
          i.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function nI(e, t, n, i = {}) {
  var s
  const u = (e = tI(e, Zy))._getSettings(),
    f = `${t}:${n}`
  if (
    (u.host !== 'firestore.googleapis.com' &&
      u.host !== f &&
      HA(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ),
    e._setSettings(Object.assign(Object.assign({}, u), { host: f, ssl: !1 })),
    i.mockUserToken)
  ) {
    let d, g
    if (typeof i.mockUserToken == 'string')
      (d = i.mockUserToken), (g = Ut.MOCK_USER)
    else {
      d = T4(
        i.mockUserToken,
        (s = e._app) === null || s === void 0 ? void 0 : s.options.projectId
      )
      const y = i.mockUserToken.sub || i.mockUserToken.user_id
      if (!y)
        throw new Qt(
          Xt.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      g = new Ut(y)
    }
    e._authCredentials = new VA(new Jy(d, g))
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
 */ class uv {
  constructor(t = Promise.resolve()) {
    ;(this.Pu = []),
      (this.Iu = !1),
      (this.Tu = []),
      (this.Eu = null),
      (this.du = !1),
      (this.Au = !1),
      (this.Ru = []),
      (this.t_ = new QA(this, 'async_queue_retry')),
      (this.Vu = () => {
        const i = Mh()
        i &&
          Wn('AsyncQueue', 'Visibility state changed to ' + i.visibilityState),
          this.t_.jo()
      }),
      (this.mu = t)
    const n = Mh()
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
      const n = Mh()
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Vu)
    }
  }
  enqueue(t) {
    if ((this.fu(), this.Iu)) return new Promise(() => {})
    const n = new Ll()
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
        if (!XA(t)) throw t
        Wn('AsyncQueue', 'Operation failed with retryable error: ' + t)
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
            const s = (function (f) {
              let d = f.message || ''
              return (
                f.stack &&
                  (d = f.stack.includes(f.message)
                    ? f.stack
                    : f.message +
                      `
` +
                      f.stack),
                d
              )
            })(i)
            throw (Qy('INTERNAL UNHANDLED ERROR: ', s), i)
          })
          .then((i) => ((this.du = !1), i))
      )
    )
    return (this.mu = n), n
  }
  enqueueAfterDelay(t, n, i) {
    this.fu(), this.Ru.indexOf(t) > -1 && (n = 0)
    const s = zp.createAndSchedule(this, t, n, i, (u) => this.yu(u))
    return this.Tu.push(s), s
  }
  fu() {
    this.Eu && Fp()
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
class rI extends Zy {
  constructor(t, n, i, s) {
    super(t, n, i, s),
      (this.type = 'firestore'),
      (this._queue = new uv()),
      (this._persistenceKey = s?.name || '[DEFAULT]')
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate()
      ;(this._queue = new uv(t)), (this._firestoreClient = void 0), await t
    }
  }
}
function iI(e, t) {
  const n = typeof e == 'object' ? e : OA(),
    i = typeof e == 'string' ? e : '(default)',
    s = IA(n, 'firestore').getImmediate({ identifier: i })
  if (!s._initialized) {
    const u = C4('firestore')
    u && nI(s, ...u)
  }
  return s
}
;(function (t, n = !0) {
  ;(function (s) {
    iu = s
  })(LA),
    Cf(
      new Xl(
        'firestore',
        (i, { instanceIdentifier: s, options: u }) => {
          const f = i.getProvider('app').getImmediate(),
            d = new rI(
              new WA(i.getProvider('auth-internal')),
              new YA(i.getProvider('app-check-internal')),
              (function (y, P) {
                if (
                  !Object.prototype.hasOwnProperty.apply(y.options, [
                    'projectId',
                  ])
                )
                  throw new Qt(
                    Xt.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new kf(y.options.projectId, P)
              })(f, s),
              f
            )
          return (
            (u = Object.assign({ useFetchStreams: n }, u)), d._setSettings(u), d
          )
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    ls(nv, '4.7.4', t),
    ls(nv, '4.7.4', 'esm2017')
})()
var oI = 'firebase',
  sI = '11.0.1'
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
 */ ls(oI, sI, 'app')
const lI = {
    apiKey: void 0,
    authDomain: void 0,
    projectId: 'visamaz-69bdf',
    storageBucket: void 0,
    messagingSenderId: void 0,
    appId: void 0,
  },
  uI = Gy(lI)
iI(uI)
var Tf = { exports: {} }
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ Tf.exports
;(function (e, t) {
  ;(function () {
    var n,
      i = '4.17.21',
      s = 200,
      u = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      f = 'Expected a function',
      d = 'Invalid `variable` option passed into `_.template`',
      g = '__lodash_hash_undefined__',
      y = 500,
      P = '__lodash_placeholder__',
      O = 1,
      E = 2,
      B = 4,
      $ = 1,
      V = 2,
      q = 1,
      R = 2,
      k = 4,
      N = 8,
      j = 16,
      X = 32,
      Z = 64,
      x = 128,
      S = 256,
      T = 512,
      I = 30,
      D = '...',
      U = 800,
      A = 16,
      Xe = 1,
      Lt = 2,
      pn = 3,
      nt = 1 / 0,
      Q = 9007199254740991,
      oe = 17976931348623157e292,
      se = NaN,
      me = 4294967295,
      Re = me - 1,
      be = me >>> 1,
      Ln = [
        ['ary', x],
        ['bind', q],
        ['bindKey', R],
        ['curry', N],
        ['curryRight', j],
        ['flip', T],
        ['partial', X],
        ['partialRight', Z],
        ['rearg', S],
      ],
      St = '[object Arguments]',
      Ht = '[object Array]',
      On = '[object AsyncFunction]',
      xi = '[object Boolean]',
      Ci = '[object Date]',
      fo = '[object DOMException]',
      ur = '[object Error]',
      Fr = '[object Function]',
      co = '[object GeneratorFunction]',
      Ot = '[object Map]',
      ar = '[object Number]',
      ou = '[object Null]',
      Nn = '[object Object]',
      su = '[object Promise]',
      lu = '[object Proxy]',
      fr = '[object RegExp]',
      jt = '[object Set]',
      ki = '[object String]',
      zr = '[object Symbol]',
      _s = '[object Undefined]',
      Ur = '[object WeakMap]',
      at = '[object WeakSet]',
      Qe = '[object ArrayBuffer]',
      Dn = '[object DataView]',
      ho = '[object Float32Array]',
      po = '[object Float64Array]',
      Ss = '[object Int8Array]',
      cr = '[object Int16Array]',
      go = '[object Int32Array]',
      mo = '[object Uint8Array]',
      Ti = '[object Uint8ClampedArray]',
      Es = '[object Uint16Array]',
      xs = '[object Uint32Array]',
      Cs = /\b__p \+= '';/g,
      uu = /\b(__p \+=) '' \+/g,
      qf = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Br = /&(?:amp|lt|gt|quot|#39);/g,
      vo = /[&<>"']/g,
      ks = RegExp(Br.source),
      $r = RegExp(vo.source),
      au = /<%-([\s\S]+?)%>/g,
      Ts = /<%([\s\S]+?)%>/g,
      As = /<%=([\s\S]+?)%>/g,
      Ai = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      fu = /^\w*$/,
      pt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      yo = /[\\^$.*+?()[\]{}|]/g,
      Ii = RegExp(yo.source),
      hr = /^\s+/,
      Yf = /\s/,
      Xf = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      br = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Qf = /,? & /,
      Jf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Is = /[()=,{}\[\]\/\s]/,
      Zf = /\\(\\)?/g,
      Ps = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Pi = /\w*$/,
      Yn = /^[-+]0x[0-9a-f]+$/i,
      cu = /^0b[01]+$/i,
      hu = /^\[object .+?Constructor\]$/,
      Rs = /^0o[0-7]+$/i,
      Ls = /^(?:0|[1-9]\d*)$/,
      du = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Ri = /($^)/,
      ec = /['\n\r\u2028\u2029\\]/g,
      dr = '\\ud800-\\udfff',
      pu = '\\u0300-\\u036f',
      Os = '\\ufe20-\\ufe2f',
      Li = '\\u20d0-\\u20ff',
      Xn = pu + Os + Li,
      wo = '\\u2700-\\u27bf',
      gu = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      mu = '\\xac\\xb1\\xd7\\xf7',
      vu = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      yu = '\\u2000-\\u206f',
      Ns =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      _o = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      Ds = '\\ufe0e\\ufe0f',
      Ms = mu + vu + yu + Ns,
      Fs = "['’]",
      tc = '[' + dr + ']',
      zs = '[' + Ms + ']',
      Oi = '[' + Xn + ']',
      wu = '\\d+',
      pr = '[' + wo + ']',
      gn = '[' + gu + ']',
      Ni = '[^' + dr + Ms + wu + wo + gu + _o + ']',
      Hr = '\\ud83c[\\udffb-\\udfff]',
      _u = '(?:' + Oi + '|' + Hr + ')',
      Ne = '[^' + dr + ']',
      jr = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      gr = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      mn = '[' + _o + ']',
      Su = '\\u200d',
      Us = '(?:' + gn + '|' + Ni + ')',
      nc = '(?:' + mn + '|' + Ni + ')',
      Eu = '(?:' + Fs + '(?:d|ll|m|re|s|t|ve))?',
      xu = '(?:' + Fs + '(?:D|LL|M|RE|S|T|VE))?',
      Cu = _u + '?',
      Vr = '[' + Ds + ']?',
      Qn = '(?:' + Su + '(?:' + [Ne, jr, gr].join('|') + ')' + Vr + Cu + ')*',
      ku = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      Tu = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      Bs = Vr + Cu + Qn,
      Wr = '(?:' + [pr, jr, gr].join('|') + ')' + Bs,
      rc = '(?:' + [Ne + Oi + '?', Oi, jr, gr, tc].join('|') + ')',
      ic = RegExp(Fs, 'g'),
      oc = RegExp(Oi, 'g'),
      vn = RegExp(Hr + '(?=' + Hr + ')|' + rc + Bs, 'g'),
      sc = RegExp(
        [
          mn + '?' + gn + '+' + Eu + '(?=' + [zs, mn, '$'].join('|') + ')',
          nc + '+' + xu + '(?=' + [zs, mn + Us, '$'].join('|') + ')',
          mn + '?' + Us + '+' + Eu,
          mn + '+' + xu,
          Tu,
          ku,
          wu,
          Wr,
        ].join('|'),
        'g'
      ),
      lc = RegExp('[' + Su + dr + Xn + Ds + ']'),
      So = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Eo = [
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
      Au = -1,
      ke = {}
    ;(ke[ho] =
      ke[po] =
      ke[Ss] =
      ke[cr] =
      ke[go] =
      ke[mo] =
      ke[Ti] =
      ke[Es] =
      ke[xs] =
        !0),
      (ke[St] =
        ke[Ht] =
        ke[Qe] =
        ke[xi] =
        ke[Dn] =
        ke[Ci] =
        ke[ur] =
        ke[Fr] =
        ke[Ot] =
        ke[ar] =
        ke[Nn] =
        ke[fr] =
        ke[jt] =
        ke[ki] =
        ke[Ur] =
          !1)
    var Ce = {}
    ;(Ce[St] =
      Ce[Ht] =
      Ce[Qe] =
      Ce[Dn] =
      Ce[xi] =
      Ce[Ci] =
      Ce[ho] =
      Ce[po] =
      Ce[Ss] =
      Ce[cr] =
      Ce[go] =
      Ce[Ot] =
      Ce[ar] =
      Ce[Nn] =
      Ce[fr] =
      Ce[jt] =
      Ce[ki] =
      Ce[zr] =
      Ce[mo] =
      Ce[Ti] =
      Ce[Es] =
      Ce[xs] =
        !0),
      (Ce[ur] = Ce[Fr] = Ce[Ur] = !1)
    var Iu = {
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
      $s = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      He = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      uc = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      ac = parseFloat,
      Pu = parseInt,
      bs = typeof ll == 'object' && ll && ll.Object === Object && ll,
      Ru = typeof self == 'object' && self && self.Object === Object && self,
      Ge = bs || Ru || Function('return this')(),
      xo = t && !t.nodeType && t,
      gt = xo && !0 && e && !e.nodeType && e,
      Hs = gt && gt.exports === xo,
      js = Hs && bs.process,
      ft = (function () {
        try {
          var M = gt && gt.require && gt.require('util').types
          return M || (js && js.binding && js.binding('util'))
        } catch {}
      })(),
      Vs = ft && ft.isArrayBuffer,
      Co = ft && ft.isDate,
      Di = ft && ft.isMap,
      Ws = ft && ft.isRegExp,
      Mi = ft && ft.isSet,
      Lu = ft && ft.isTypedArray
    function Et(M, W, b) {
      switch (b.length) {
        case 0:
          return M.call(W)
        case 1:
          return M.call(W, b[0])
        case 2:
          return M.call(W, b[0], b[1])
        case 3:
          return M.call(W, b[0], b[1], b[2])
      }
      return M.apply(W, b)
    }
    function Fi(M, W, b, ne) {
      for (var fe = -1, Ae = M == null ? 0 : M.length; ++fe < Ae; ) {
        var ot = M[fe]
        W(ne, ot, b(ot), M)
      }
      return ne
    }
    function Nt(M, W) {
      for (
        var b = -1, ne = M == null ? 0 : M.length;
        ++b < ne && W(M[b], b, M) !== !1;

      );
      return M
    }
    function Ou(M, W) {
      for (var b = M == null ? 0 : M.length; b-- && W(M[b], b, M) !== !1; );
      return M
    }
    function ko(M, W) {
      for (var b = -1, ne = M == null ? 0 : M.length; ++b < ne; )
        if (!W(M[b], b, M)) return !1
      return !0
    }
    function yn(M, W) {
      for (
        var b = -1, ne = M == null ? 0 : M.length, fe = 0, Ae = [];
        ++b < ne;

      ) {
        var ot = M[b]
        W(ot, b, M) && (Ae[fe++] = ot)
      }
      return Ae
    }
    function zi(M, W) {
      var b = M == null ? 0 : M.length
      return !!b && nn(M, W, 0) > -1
    }
    function Kr(M, W, b) {
      for (var ne = -1, fe = M == null ? 0 : M.length; ++ne < fe; )
        if (b(W, M[ne])) return !0
      return !1
    }
    function Me(M, W) {
      for (
        var b = -1, ne = M == null ? 0 : M.length, fe = Array(ne);
        ++b < ne;

      )
        fe[b] = W(M[b], b, M)
      return fe
    }
    function Mn(M, W) {
      for (var b = -1, ne = W.length, fe = M.length; ++b < ne; )
        M[fe + b] = W[b]
      return M
    }
    function Fn(M, W, b, ne) {
      var fe = -1,
        Ae = M == null ? 0 : M.length
      for (ne && Ae && (b = M[++fe]); ++fe < Ae; ) b = W(b, M[fe], fe, M)
      return b
    }
    function Nu(M, W, b, ne) {
      var fe = M == null ? 0 : M.length
      for (ne && fe && (b = M[--fe]); fe--; ) b = W(b, M[fe], fe, M)
      return b
    }
    function To(M, W) {
      for (var b = -1, ne = M == null ? 0 : M.length; ++b < ne; )
        if (W(M[b], b, M)) return !0
      return !1
    }
    var Du = w('length')
    function Mu(M) {
      return M.split('')
    }
    function Vt(M) {
      return M.match(Jf) || []
    }
    function Ks(M, W, b) {
      var ne
      return (
        b(M, function (fe, Ae, ot) {
          if (W(fe, Ae, ot)) return (ne = Ae), !1
        }),
        ne
      )
    }
    function Ui(M, W, b, ne) {
      for (var fe = M.length, Ae = b + (ne ? 1 : -1); ne ? Ae-- : ++Ae < fe; )
        if (W(M[Ae], Ae, M)) return Ae
      return -1
    }
    function nn(M, W, b) {
      return W === W ? fw(M, W, b) : Ui(M, c, b)
    }
    function l(M, W, b, ne) {
      for (var fe = b - 1, Ae = M.length; ++fe < Ae; )
        if (ne(M[fe], W)) return fe
      return -1
    }
    function c(M) {
      return M !== M
    }
    function p(M, W) {
      var b = M == null ? 0 : M.length
      return b ? Te(M, W) / b : se
    }
    function w(M) {
      return function (W) {
        return W == null ? n : W[M]
      }
    }
    function z(M) {
      return function (W) {
        return M == null ? n : M[W]
      }
    }
    function H(M, W, b, ne, fe) {
      return (
        fe(M, function (Ae, ot, Fe) {
          b = ne ? ((ne = !1), Ae) : W(b, Ae, ot, Fe)
        }),
        b
      )
    }
    function ee(M, W) {
      var b = M.length
      for (M.sort(W); b--; ) M[b] = M[b].value
      return M
    }
    function Te(M, W) {
      for (var b, ne = -1, fe = M.length; ++ne < fe; ) {
        var Ae = W(M[ne])
        Ae !== n && (b = b === n ? Ae : b + Ae)
      }
      return b
    }
    function Je(M, W) {
      for (var b = -1, ne = Array(M); ++b < M; ) ne[b] = W(b)
      return ne
    }
    function Se(M, W) {
      return Me(W, function (b) {
        return [b, M[b]]
      })
    }
    function it(M) {
      return M && M.slice(0, Bp(M) + 1).replace(hr, '')
    }
    function Ie(M) {
      return function (W) {
        return M(W)
      }
    }
    function Jn(M, W) {
      return Me(W, function (b) {
        return M[b]
      })
    }
    function mt(M, W) {
      return M.has(W)
    }
    function Bi(M, W) {
      for (var b = -1, ne = M.length; ++b < ne && nn(W, M[b], 0) > -1; );
      return b
    }
    function Ao(M, W) {
      for (var b = M.length; b-- && nn(W, M[b], 0) > -1; );
      return b
    }
    function nw(M, W) {
      for (var b = M.length, ne = 0; b--; ) M[b] === W && ++ne
      return ne
    }
    var rw = z(Iu),
      iw = z($s)
    function ow(M) {
      return '\\' + uc[M]
    }
    function sw(M, W) {
      return M == null ? n : M[W]
    }
    function Io(M) {
      return lc.test(M)
    }
    function lw(M) {
      return So.test(M)
    }
    function uw(M) {
      for (var W, b = []; !(W = M.next()).done; ) b.push(W.value)
      return b
    }
    function fc(M) {
      var W = -1,
        b = Array(M.size)
      return (
        M.forEach(function (ne, fe) {
          b[++W] = [fe, ne]
        }),
        b
      )
    }
    function Up(M, W) {
      return function (b) {
        return M(W(b))
      }
    }
    function Gr(M, W) {
      for (var b = -1, ne = M.length, fe = 0, Ae = []; ++b < ne; ) {
        var ot = M[b]
        ;(ot === W || ot === P) && ((M[b] = P), (Ae[fe++] = b))
      }
      return Ae
    }
    function Fu(M) {
      var W = -1,
        b = Array(M.size)
      return (
        M.forEach(function (ne) {
          b[++W] = ne
        }),
        b
      )
    }
    function aw(M) {
      var W = -1,
        b = Array(M.size)
      return (
        M.forEach(function (ne) {
          b[++W] = [ne, ne]
        }),
        b
      )
    }
    function fw(M, W, b) {
      for (var ne = b - 1, fe = M.length; ++ne < fe; )
        if (M[ne] === W) return ne
      return -1
    }
    function cw(M, W, b) {
      for (var ne = b + 1; ne--; ) if (M[ne] === W) return ne
      return ne
    }
    function Po(M) {
      return Io(M) ? dw(M) : Du(M)
    }
    function zn(M) {
      return Io(M) ? pw(M) : Mu(M)
    }
    function Bp(M) {
      for (var W = M.length; W-- && Yf.test(M.charAt(W)); );
      return W
    }
    var hw = z(He)
    function dw(M) {
      for (var W = (vn.lastIndex = 0); vn.test(M); ) ++W
      return W
    }
    function pw(M) {
      return M.match(vn) || []
    }
    function gw(M) {
      return M.match(sc) || []
    }
    var mw = function M(W) {
        W = W == null ? Ge : Ro.defaults(Ge.Object(), W, Ro.pick(Ge, Eo))
        var b = W.Array,
          ne = W.Date,
          fe = W.Error,
          Ae = W.Function,
          ot = W.Math,
          Fe = W.Object,
          cc = W.RegExp,
          vw = W.String,
          wn = W.TypeError,
          zu = b.prototype,
          yw = Ae.prototype,
          Lo = Fe.prototype,
          Uu = W['__core-js_shared__'],
          Bu = yw.toString,
          Le = Lo.hasOwnProperty,
          ww = 0,
          $p = (function () {
            var r = /[^.]+$/.exec((Uu && Uu.keys && Uu.keys.IE_PROTO) || '')
            return r ? 'Symbol(src)_1.' + r : ''
          })(),
          $u = Lo.toString,
          _w = Bu.call(Fe),
          Sw = Ge._,
          Ew = cc(
            '^' +
              Bu.call(Le)
                .replace(yo, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          bu = Hs ? W.Buffer : n,
          qr = W.Symbol,
          Hu = W.Uint8Array,
          bp = bu ? bu.allocUnsafe : n,
          ju = Up(Fe.getPrototypeOf, Fe),
          Hp = Fe.create,
          jp = Lo.propertyIsEnumerable,
          Vu = zu.splice,
          Vp = qr ? qr.isConcatSpreadable : n,
          Gs = qr ? qr.iterator : n,
          $i = qr ? qr.toStringTag : n,
          Wu = (function () {
            try {
              var r = Wi(Fe, 'defineProperty')
              return r({}, '', {}), r
            } catch {}
          })(),
          xw = W.clearTimeout !== Ge.clearTimeout && W.clearTimeout,
          Cw = ne && ne.now !== Ge.Date.now && ne.now,
          kw = W.setTimeout !== Ge.setTimeout && W.setTimeout,
          Ku = ot.ceil,
          Gu = ot.floor,
          hc = Fe.getOwnPropertySymbols,
          Tw = bu ? bu.isBuffer : n,
          Wp = W.isFinite,
          Aw = zu.join,
          Iw = Up(Fe.keys, Fe),
          st = ot.max,
          xt = ot.min,
          Pw = ne.now,
          Rw = W.parseInt,
          Kp = ot.random,
          Lw = zu.reverse,
          dc = Wi(W, 'DataView'),
          qs = Wi(W, 'Map'),
          pc = Wi(W, 'Promise'),
          Oo = Wi(W, 'Set'),
          Ys = Wi(W, 'WeakMap'),
          Xs = Wi(Fe, 'create'),
          qu = Ys && new Ys(),
          No = {},
          Ow = Ki(dc),
          Nw = Ki(qs),
          Dw = Ki(pc),
          Mw = Ki(Oo),
          Fw = Ki(Ys),
          Yu = qr ? qr.prototype : n,
          Qs = Yu ? Yu.valueOf : n,
          Gp = Yu ? Yu.toString : n
        function v(r) {
          if (qe(r) && !he(r) && !(r instanceof ye)) {
            if (r instanceof _n) return r
            if (Le.call(r, '__wrapped__')) return qg(r)
          }
          return new _n(r)
        }
        var Do = (function () {
          function r() {}
          return function (o) {
            if (!je(o)) return {}
            if (Hp) return Hp(o)
            r.prototype = o
            var a = new r()
            return (r.prototype = n), a
          }
        })()
        function Xu() {}
        function _n(r, o) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!o),
            (this.__index__ = 0),
            (this.__values__ = n)
        }
        ;(v.templateSettings = {
          escape: au,
          evaluate: Ts,
          interpolate: As,
          variable: '',
          imports: { _: v },
        }),
          (v.prototype = Xu.prototype),
          (v.prototype.constructor = v),
          (_n.prototype = Do(Xu.prototype)),
          (_n.prototype.constructor = _n)
        function ye(r) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = me),
            (this.__views__ = [])
        }
        function zw() {
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
        function Uw() {
          if (this.__filtered__) {
            var r = new ye(this)
            ;(r.__dir__ = -1), (r.__filtered__ = !0)
          } else (r = this.clone()), (r.__dir__ *= -1)
          return r
        }
        function Bw() {
          var r = this.__wrapped__.value(),
            o = this.__dir__,
            a = he(r),
            h = o < 0,
            m = a ? r.length : 0,
            _ = Q_(0, m, this.__views__),
            C = _.start,
            L = _.end,
            F = L - C,
            K = h ? L : C - 1,
            G = this.__iteratees__,
            Y = G.length,
            te = 0,
            ie = xt(F, this.__takeCount__)
          if (!a || (!h && m == F && ie == F)) return vg(r, this.__actions__)
          var ue = []
          e: for (; F-- && te < ie; ) {
            K += o
            for (var pe = -1, ae = r[K]; ++pe < Y; ) {
              var ve = G[pe],
                _e = ve.iteratee,
                sn = ve.type,
                Ft = _e(ae)
              if (sn == Lt) ae = Ft
              else if (!Ft) {
                if (sn == Xe) continue e
                break e
              }
            }
            ue[te++] = ae
          }
          return ue
        }
        ;(ye.prototype = Do(Xu.prototype)), (ye.prototype.constructor = ye)
        function bi(r) {
          var o = -1,
            a = r == null ? 0 : r.length
          for (this.clear(); ++o < a; ) {
            var h = r[o]
            this.set(h[0], h[1])
          }
        }
        function $w() {
          ;(this.__data__ = Xs ? Xs(null) : {}), (this.size = 0)
        }
        function bw(r) {
          var o = this.has(r) && delete this.__data__[r]
          return (this.size -= o ? 1 : 0), o
        }
        function Hw(r) {
          var o = this.__data__
          if (Xs) {
            var a = o[r]
            return a === g ? n : a
          }
          return Le.call(o, r) ? o[r] : n
        }
        function jw(r) {
          var o = this.__data__
          return Xs ? o[r] !== n : Le.call(o, r)
        }
        function Vw(r, o) {
          var a = this.__data__
          return (
            (this.size += this.has(r) ? 0 : 1),
            (a[r] = Xs && o === n ? g : o),
            this
          )
        }
        ;(bi.prototype.clear = $w),
          (bi.prototype.delete = bw),
          (bi.prototype.get = Hw),
          (bi.prototype.has = jw),
          (bi.prototype.set = Vw)
        function mr(r) {
          var o = -1,
            a = r == null ? 0 : r.length
          for (this.clear(); ++o < a; ) {
            var h = r[o]
            this.set(h[0], h[1])
          }
        }
        function Ww() {
          ;(this.__data__ = []), (this.size = 0)
        }
        function Kw(r) {
          var o = this.__data__,
            a = Qu(o, r)
          if (a < 0) return !1
          var h = o.length - 1
          return a == h ? o.pop() : Vu.call(o, a, 1), --this.size, !0
        }
        function Gw(r) {
          var o = this.__data__,
            a = Qu(o, r)
          return a < 0 ? n : o[a][1]
        }
        function qw(r) {
          return Qu(this.__data__, r) > -1
        }
        function Yw(r, o) {
          var a = this.__data__,
            h = Qu(a, r)
          return h < 0 ? (++this.size, a.push([r, o])) : (a[h][1] = o), this
        }
        ;(mr.prototype.clear = Ww),
          (mr.prototype.delete = Kw),
          (mr.prototype.get = Gw),
          (mr.prototype.has = qw),
          (mr.prototype.set = Yw)
        function vr(r) {
          var o = -1,
            a = r == null ? 0 : r.length
          for (this.clear(); ++o < a; ) {
            var h = r[o]
            this.set(h[0], h[1])
          }
        }
        function Xw() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new bi(),
              map: new (qs || mr)(),
              string: new bi(),
            })
        }
        function Qw(r) {
          var o = aa(this, r).delete(r)
          return (this.size -= o ? 1 : 0), o
        }
        function Jw(r) {
          return aa(this, r).get(r)
        }
        function Zw(r) {
          return aa(this, r).has(r)
        }
        function e_(r, o) {
          var a = aa(this, r),
            h = a.size
          return a.set(r, o), (this.size += a.size == h ? 0 : 1), this
        }
        ;(vr.prototype.clear = Xw),
          (vr.prototype.delete = Qw),
          (vr.prototype.get = Jw),
          (vr.prototype.has = Zw),
          (vr.prototype.set = e_)
        function Hi(r) {
          var o = -1,
            a = r == null ? 0 : r.length
          for (this.__data__ = new vr(); ++o < a; ) this.add(r[o])
        }
        function t_(r) {
          return this.__data__.set(r, g), this
        }
        function n_(r) {
          return this.__data__.has(r)
        }
        ;(Hi.prototype.add = Hi.prototype.push = t_), (Hi.prototype.has = n_)
        function Un(r) {
          var o = (this.__data__ = new mr(r))
          this.size = o.size
        }
        function r_() {
          ;(this.__data__ = new mr()), (this.size = 0)
        }
        function i_(r) {
          var o = this.__data__,
            a = o.delete(r)
          return (this.size = o.size), a
        }
        function o_(r) {
          return this.__data__.get(r)
        }
        function s_(r) {
          return this.__data__.has(r)
        }
        function l_(r, o) {
          var a = this.__data__
          if (a instanceof mr) {
            var h = a.__data__
            if (!qs || h.length < s - 1)
              return h.push([r, o]), (this.size = ++a.size), this
            a = this.__data__ = new vr(h)
          }
          return a.set(r, o), (this.size = a.size), this
        }
        ;(Un.prototype.clear = r_),
          (Un.prototype.delete = i_),
          (Un.prototype.get = o_),
          (Un.prototype.has = s_),
          (Un.prototype.set = l_)
        function qp(r, o) {
          var a = he(r),
            h = !a && Gi(r),
            m = !a && !h && Zr(r),
            _ = !a && !h && !m && Uo(r),
            C = a || h || m || _,
            L = C ? Je(r.length, vw) : [],
            F = L.length
          for (var K in r)
            (o || Le.call(r, K)) &&
              !(
                C &&
                (K == 'length' ||
                  (m && (K == 'offset' || K == 'parent')) ||
                  (_ &&
                    (K == 'buffer' ||
                      K == 'byteLength' ||
                      K == 'byteOffset')) ||
                  Sr(K, F))
              ) &&
              L.push(K)
          return L
        }
        function Yp(r) {
          var o = r.length
          return o ? r[kc(0, o - 1)] : n
        }
        function u_(r, o) {
          return fa(Wt(r), ji(o, 0, r.length))
        }
        function a_(r) {
          return fa(Wt(r))
        }
        function gc(r, o, a) {
          ;((a !== n && !Bn(r[o], a)) || (a === n && !(o in r))) && yr(r, o, a)
        }
        function Js(r, o, a) {
          var h = r[o]
          ;(!(Le.call(r, o) && Bn(h, a)) || (a === n && !(o in r))) &&
            yr(r, o, a)
        }
        function Qu(r, o) {
          for (var a = r.length; a--; ) if (Bn(r[a][0], o)) return a
          return -1
        }
        function f_(r, o, a, h) {
          return (
            Yr(r, function (m, _, C) {
              o(h, m, a(m), C)
            }),
            h
          )
        }
        function Xp(r, o) {
          return r && er(o, ct(o), r)
        }
        function c_(r, o) {
          return r && er(o, Gt(o), r)
        }
        function yr(r, o, a) {
          o == '__proto__' && Wu
            ? Wu(r, o, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (r[o] = a)
        }
        function mc(r, o) {
          for (var a = -1, h = o.length, m = b(h), _ = r == null; ++a < h; )
            m[a] = _ ? n : Xc(r, o[a])
          return m
        }
        function ji(r, o, a) {
          return (
            r === r &&
              (a !== n && (r = r <= a ? r : a),
              o !== n && (r = r >= o ? r : o)),
            r
          )
        }
        function Sn(r, o, a, h, m, _) {
          var C,
            L = o & O,
            F = o & E,
            K = o & B
          if ((a && (C = m ? a(r, h, m, _) : a(r)), C !== n)) return C
          if (!je(r)) return r
          var G = he(r)
          if (G) {
            if (((C = Z_(r)), !L)) return Wt(r, C)
          } else {
            var Y = Ct(r),
              te = Y == Fr || Y == co
            if (Zr(r)) return _g(r, L)
            if (Y == Nn || Y == St || (te && !m)) {
              if (((C = F || te ? {} : Bg(r)), !L))
                return F ? H_(r, c_(C, r)) : b_(r, Xp(C, r))
            } else {
              if (!Ce[Y]) return m ? r : {}
              C = e2(r, Y, L)
            }
          }
          _ || (_ = new Un())
          var ie = _.get(r)
          if (ie) return ie
          _.set(r, C),
            pm(r)
              ? r.forEach(function (ae) {
                  C.add(Sn(ae, o, a, ae, r, _))
                })
              : hm(r) &&
                r.forEach(function (ae, ve) {
                  C.set(ve, Sn(ae, o, a, ve, r, _))
                })
          var ue = K ? (F ? Fc : Mc) : F ? Gt : ct,
            pe = G ? n : ue(r)
          return (
            Nt(pe || r, function (ae, ve) {
              pe && ((ve = ae), (ae = r[ve])), Js(C, ve, Sn(ae, o, a, ve, r, _))
            }),
            C
          )
        }
        function h_(r) {
          var o = ct(r)
          return function (a) {
            return Qp(a, r, o)
          }
        }
        function Qp(r, o, a) {
          var h = a.length
          if (r == null) return !h
          for (r = Fe(r); h--; ) {
            var m = a[h],
              _ = o[m],
              C = r[m]
            if ((C === n && !(m in r)) || !_(C)) return !1
          }
          return !0
        }
        function Jp(r, o, a) {
          if (typeof r != 'function') throw new wn(f)
          return ol(function () {
            r.apply(n, a)
          }, o)
        }
        function Zs(r, o, a, h) {
          var m = -1,
            _ = zi,
            C = !0,
            L = r.length,
            F = [],
            K = o.length
          if (!L) return F
          a && (o = Me(o, Ie(a))),
            h
              ? ((_ = Kr), (C = !1))
              : o.length >= s && ((_ = mt), (C = !1), (o = new Hi(o)))
          e: for (; ++m < L; ) {
            var G = r[m],
              Y = a == null ? G : a(G)
            if (((G = h || G !== 0 ? G : 0), C && Y === Y)) {
              for (var te = K; te--; ) if (o[te] === Y) continue e
              F.push(G)
            } else _(o, Y, h) || F.push(G)
          }
          return F
        }
        var Yr = kg(Zn),
          Zp = kg(yc, !0)
        function d_(r, o) {
          var a = !0
          return (
            Yr(r, function (h, m, _) {
              return (a = !!o(h, m, _)), a
            }),
            a
          )
        }
        function Ju(r, o, a) {
          for (var h = -1, m = r.length; ++h < m; ) {
            var _ = r[h],
              C = o(_)
            if (C != null && (L === n ? C === C && !on(C) : a(C, L)))
              var L = C,
                F = _
          }
          return F
        }
        function p_(r, o, a, h) {
          var m = r.length
          for (
            a = de(a),
              a < 0 && (a = -a > m ? 0 : m + a),
              h = h === n || h > m ? m : de(h),
              h < 0 && (h += m),
              h = a > h ? 0 : mm(h);
            a < h;

          )
            r[a++] = o
          return r
        }
        function eg(r, o) {
          var a = []
          return (
            Yr(r, function (h, m, _) {
              o(h, m, _) && a.push(h)
            }),
            a
          )
        }
        function vt(r, o, a, h, m) {
          var _ = -1,
            C = r.length
          for (a || (a = n2), m || (m = []); ++_ < C; ) {
            var L = r[_]
            o > 0 && a(L)
              ? o > 1
                ? vt(L, o - 1, a, h, m)
                : Mn(m, L)
              : h || (m[m.length] = L)
          }
          return m
        }
        var vc = Tg(),
          tg = Tg(!0)
        function Zn(r, o) {
          return r && vc(r, o, ct)
        }
        function yc(r, o) {
          return r && tg(r, o, ct)
        }
        function Zu(r, o) {
          return yn(o, function (a) {
            return Er(r[a])
          })
        }
        function Vi(r, o) {
          o = Qr(o, r)
          for (var a = 0, h = o.length; r != null && a < h; ) r = r[tr(o[a++])]
          return a && a == h ? r : n
        }
        function ng(r, o, a) {
          var h = o(r)
          return he(r) ? h : Mn(h, a(r))
        }
        function Dt(r) {
          return r == null
            ? r === n
              ? _s
              : ou
            : $i && $i in Fe(r)
            ? X_(r)
            : a2(r)
        }
        function wc(r, o) {
          return r > o
        }
        function g_(r, o) {
          return r != null && Le.call(r, o)
        }
        function m_(r, o) {
          return r != null && o in Fe(r)
        }
        function v_(r, o, a) {
          return r >= xt(o, a) && r < st(o, a)
        }
        function _c(r, o, a) {
          for (
            var h = a ? Kr : zi,
              m = r[0].length,
              _ = r.length,
              C = _,
              L = b(_),
              F = 1 / 0,
              K = [];
            C--;

          ) {
            var G = r[C]
            C && o && (G = Me(G, Ie(o))),
              (F = xt(G.length, F)),
              (L[C] =
                !a && (o || (m >= 120 && G.length >= 120)) ? new Hi(C && G) : n)
          }
          G = r[0]
          var Y = -1,
            te = L[0]
          e: for (; ++Y < m && K.length < F; ) {
            var ie = G[Y],
              ue = o ? o(ie) : ie
            if (
              ((ie = a || ie !== 0 ? ie : 0), !(te ? mt(te, ue) : h(K, ue, a)))
            ) {
              for (C = _; --C; ) {
                var pe = L[C]
                if (!(pe ? mt(pe, ue) : h(r[C], ue, a))) continue e
              }
              te && te.push(ue), K.push(ie)
            }
          }
          return K
        }
        function y_(r, o, a, h) {
          return (
            Zn(r, function (m, _, C) {
              o(h, a(m), _, C)
            }),
            h
          )
        }
        function el(r, o, a) {
          ;(o = Qr(o, r)), (r = jg(r, o))
          var h = r == null ? r : r[tr(xn(o))]
          return h == null ? n : Et(h, r, a)
        }
        function rg(r) {
          return qe(r) && Dt(r) == St
        }
        function w_(r) {
          return qe(r) && Dt(r) == Qe
        }
        function __(r) {
          return qe(r) && Dt(r) == Ci
        }
        function tl(r, o, a, h, m) {
          return r === o
            ? !0
            : r == null || o == null || (!qe(r) && !qe(o))
            ? r !== r && o !== o
            : S_(r, o, a, h, tl, m)
        }
        function S_(r, o, a, h, m, _) {
          var C = he(r),
            L = he(o),
            F = C ? Ht : Ct(r),
            K = L ? Ht : Ct(o)
          ;(F = F == St ? Nn : F), (K = K == St ? Nn : K)
          var G = F == Nn,
            Y = K == Nn,
            te = F == K
          if (te && Zr(r)) {
            if (!Zr(o)) return !1
            ;(C = !0), (G = !1)
          }
          if (te && !G)
            return (
              _ || (_ = new Un()),
              C || Uo(r) ? Fg(r, o, a, h, m, _) : q_(r, o, F, a, h, m, _)
            )
          if (!(a & $)) {
            var ie = G && Le.call(r, '__wrapped__'),
              ue = Y && Le.call(o, '__wrapped__')
            if (ie || ue) {
              var pe = ie ? r.value() : r,
                ae = ue ? o.value() : o
              return _ || (_ = new Un()), m(pe, ae, a, h, _)
            }
          }
          return te ? (_ || (_ = new Un()), Y_(r, o, a, h, m, _)) : !1
        }
        function E_(r) {
          return qe(r) && Ct(r) == Ot
        }
        function Sc(r, o, a, h) {
          var m = a.length,
            _ = m,
            C = !h
          if (r == null) return !_
          for (r = Fe(r); m--; ) {
            var L = a[m]
            if (C && L[2] ? L[1] !== r[L[0]] : !(L[0] in r)) return !1
          }
          for (; ++m < _; ) {
            L = a[m]
            var F = L[0],
              K = r[F],
              G = L[1]
            if (C && L[2]) {
              if (K === n && !(F in r)) return !1
            } else {
              var Y = new Un()
              if (h) var te = h(K, G, F, r, o, Y)
              if (!(te === n ? tl(G, K, $ | V, h, Y) : te)) return !1
            }
          }
          return !0
        }
        function ig(r) {
          if (!je(r) || i2(r)) return !1
          var o = Er(r) ? Ew : hu
          return o.test(Ki(r))
        }
        function x_(r) {
          return qe(r) && Dt(r) == fr
        }
        function C_(r) {
          return qe(r) && Ct(r) == jt
        }
        function k_(r) {
          return qe(r) && ma(r.length) && !!ke[Dt(r)]
        }
        function og(r) {
          return typeof r == 'function'
            ? r
            : r == null
            ? qt
            : typeof r == 'object'
            ? he(r)
              ? ug(r[0], r[1])
              : lg(r)
            : Am(r)
        }
        function Ec(r) {
          if (!il(r)) return Iw(r)
          var o = []
          for (var a in Fe(r)) Le.call(r, a) && a != 'constructor' && o.push(a)
          return o
        }
        function T_(r) {
          if (!je(r)) return u2(r)
          var o = il(r),
            a = []
          for (var h in r)
            (h == 'constructor' && (o || !Le.call(r, h))) || a.push(h)
          return a
        }
        function xc(r, o) {
          return r < o
        }
        function sg(r, o) {
          var a = -1,
            h = Kt(r) ? b(r.length) : []
          return (
            Yr(r, function (m, _, C) {
              h[++a] = o(m, _, C)
            }),
            h
          )
        }
        function lg(r) {
          var o = Uc(r)
          return o.length == 1 && o[0][2]
            ? bg(o[0][0], o[0][1])
            : function (a) {
                return a === r || Sc(a, r, o)
              }
        }
        function ug(r, o) {
          return $c(r) && $g(o)
            ? bg(tr(r), o)
            : function (a) {
                var h = Xc(a, r)
                return h === n && h === o ? Qc(a, r) : tl(o, h, $ | V)
              }
        }
        function ea(r, o, a, h, m) {
          r !== o &&
            vc(
              o,
              function (_, C) {
                if ((m || (m = new Un()), je(_))) A_(r, o, C, a, ea, h, m)
                else {
                  var L = h ? h(Hc(r, C), _, C + '', r, o, m) : n
                  L === n && (L = _), gc(r, C, L)
                }
              },
              Gt
            )
        }
        function A_(r, o, a, h, m, _, C) {
          var L = Hc(r, a),
            F = Hc(o, a),
            K = C.get(F)
          if (K) {
            gc(r, a, K)
            return
          }
          var G = _ ? _(L, F, a + '', r, o, C) : n,
            Y = G === n
          if (Y) {
            var te = he(F),
              ie = !te && Zr(F),
              ue = !te && !ie && Uo(F)
            ;(G = F),
              te || ie || ue
                ? he(L)
                  ? (G = L)
                  : Ze(L)
                  ? (G = Wt(L))
                  : ie
                  ? ((Y = !1), (G = _g(F, !0)))
                  : ue
                  ? ((Y = !1), (G = Sg(F, !0)))
                  : (G = [])
                : sl(F) || Gi(F)
                ? ((G = L),
                  Gi(L) ? (G = vm(L)) : (!je(L) || Er(L)) && (G = Bg(F)))
                : (Y = !1)
          }
          Y && (C.set(F, G), m(G, F, h, _, C), C.delete(F)), gc(r, a, G)
        }
        function ag(r, o) {
          var a = r.length
          if (a) return (o += o < 0 ? a : 0), Sr(o, a) ? r[o] : n
        }
        function fg(r, o, a) {
          o.length
            ? (o = Me(o, function (_) {
                return he(_)
                  ? function (C) {
                      return Vi(C, _.length === 1 ? _[0] : _)
                    }
                  : _
              }))
            : (o = [qt])
          var h = -1
          o = Me(o, Ie(le()))
          var m = sg(r, function (_, C, L) {
            var F = Me(o, function (K) {
              return K(_)
            })
            return { criteria: F, index: ++h, value: _ }
          })
          return ee(m, function (_, C) {
            return $_(_, C, a)
          })
        }
        function I_(r, o) {
          return cg(r, o, function (a, h) {
            return Qc(r, h)
          })
        }
        function cg(r, o, a) {
          for (var h = -1, m = o.length, _ = {}; ++h < m; ) {
            var C = o[h],
              L = Vi(r, C)
            a(L, C) && nl(_, Qr(C, r), L)
          }
          return _
        }
        function P_(r) {
          return function (o) {
            return Vi(o, r)
          }
        }
        function Cc(r, o, a, h) {
          var m = h ? l : nn,
            _ = -1,
            C = o.length,
            L = r
          for (r === o && (o = Wt(o)), a && (L = Me(r, Ie(a))); ++_ < C; )
            for (
              var F = 0, K = o[_], G = a ? a(K) : K;
              (F = m(L, G, F, h)) > -1;

            )
              L !== r && Vu.call(L, F, 1), Vu.call(r, F, 1)
          return r
        }
        function hg(r, o) {
          for (var a = r ? o.length : 0, h = a - 1; a--; ) {
            var m = o[a]
            if (a == h || m !== _) {
              var _ = m
              Sr(m) ? Vu.call(r, m, 1) : Ic(r, m)
            }
          }
          return r
        }
        function kc(r, o) {
          return r + Gu(Kp() * (o - r + 1))
        }
        function R_(r, o, a, h) {
          for (var m = -1, _ = st(Ku((o - r) / (a || 1)), 0), C = b(_); _--; )
            (C[h ? _ : ++m] = r), (r += a)
          return C
        }
        function Tc(r, o) {
          var a = ''
          if (!r || o < 1 || o > Q) return a
          do o % 2 && (a += r), (o = Gu(o / 2)), o && (r += r)
          while (o)
          return a
        }
        function ge(r, o) {
          return jc(Hg(r, o, qt), r + '')
        }
        function L_(r) {
          return Yp(Bo(r))
        }
        function O_(r, o) {
          var a = Bo(r)
          return fa(a, ji(o, 0, a.length))
        }
        function nl(r, o, a, h) {
          if (!je(r)) return r
          o = Qr(o, r)
          for (
            var m = -1, _ = o.length, C = _ - 1, L = r;
            L != null && ++m < _;

          ) {
            var F = tr(o[m]),
              K = a
            if (F === '__proto__' || F === 'constructor' || F === 'prototype')
              return r
            if (m != C) {
              var G = L[F]
              ;(K = h ? h(G, F, L) : n),
                K === n && (K = je(G) ? G : Sr(o[m + 1]) ? [] : {})
            }
            Js(L, F, K), (L = L[F])
          }
          return r
        }
        var dg = qu
            ? function (r, o) {
                return qu.set(r, o), r
              }
            : qt,
          N_ = Wu
            ? function (r, o) {
                return Wu(r, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Zc(o),
                  writable: !0,
                })
              }
            : qt
        function D_(r) {
          return fa(Bo(r))
        }
        function En(r, o, a) {
          var h = -1,
            m = r.length
          o < 0 && (o = -o > m ? 0 : m + o),
            (a = a > m ? m : a),
            a < 0 && (a += m),
            (m = o > a ? 0 : (a - o) >>> 0),
            (o >>>= 0)
          for (var _ = b(m); ++h < m; ) _[h] = r[h + o]
          return _
        }
        function M_(r, o) {
          var a
          return (
            Yr(r, function (h, m, _) {
              return (a = o(h, m, _)), !a
            }),
            !!a
          )
        }
        function ta(r, o, a) {
          var h = 0,
            m = r == null ? h : r.length
          if (typeof o == 'number' && o === o && m <= be) {
            for (; h < m; ) {
              var _ = (h + m) >>> 1,
                C = r[_]
              C !== null && !on(C) && (a ? C <= o : C < o)
                ? (h = _ + 1)
                : (m = _)
            }
            return m
          }
          return Ac(r, o, qt, a)
        }
        function Ac(r, o, a, h) {
          var m = 0,
            _ = r == null ? 0 : r.length
          if (_ === 0) return 0
          o = a(o)
          for (
            var C = o !== o, L = o === null, F = on(o), K = o === n;
            m < _;

          ) {
            var G = Gu((m + _) / 2),
              Y = a(r[G]),
              te = Y !== n,
              ie = Y === null,
              ue = Y === Y,
              pe = on(Y)
            if (C) var ae = h || ue
            else
              K
                ? (ae = ue && (h || te))
                : L
                ? (ae = ue && te && (h || !ie))
                : F
                ? (ae = ue && te && !ie && (h || !pe))
                : ie || pe
                ? (ae = !1)
                : (ae = h ? Y <= o : Y < o)
            ae ? (m = G + 1) : (_ = G)
          }
          return xt(_, Re)
        }
        function pg(r, o) {
          for (var a = -1, h = r.length, m = 0, _ = []; ++a < h; ) {
            var C = r[a],
              L = o ? o(C) : C
            if (!a || !Bn(L, F)) {
              var F = L
              _[m++] = C === 0 ? 0 : C
            }
          }
          return _
        }
        function gg(r) {
          return typeof r == 'number' ? r : on(r) ? se : +r
        }
        function rn(r) {
          if (typeof r == 'string') return r
          if (he(r)) return Me(r, rn) + ''
          if (on(r)) return Gp ? Gp.call(r) : ''
          var o = r + ''
          return o == '0' && 1 / r == -nt ? '-0' : o
        }
        function Xr(r, o, a) {
          var h = -1,
            m = zi,
            _ = r.length,
            C = !0,
            L = [],
            F = L
          if (a) (C = !1), (m = Kr)
          else if (_ >= s) {
            var K = o ? null : K_(r)
            if (K) return Fu(K)
            ;(C = !1), (m = mt), (F = new Hi())
          } else F = o ? [] : L
          e: for (; ++h < _; ) {
            var G = r[h],
              Y = o ? o(G) : G
            if (((G = a || G !== 0 ? G : 0), C && Y === Y)) {
              for (var te = F.length; te--; ) if (F[te] === Y) continue e
              o && F.push(Y), L.push(G)
            } else m(F, Y, a) || (F !== L && F.push(Y), L.push(G))
          }
          return L
        }
        function Ic(r, o) {
          return (
            (o = Qr(o, r)), (r = jg(r, o)), r == null || delete r[tr(xn(o))]
          )
        }
        function mg(r, o, a, h) {
          return nl(r, o, a(Vi(r, o)), h)
        }
        function na(r, o, a, h) {
          for (
            var m = r.length, _ = h ? m : -1;
            (h ? _-- : ++_ < m) && o(r[_], _, r);

          );
          return a
            ? En(r, h ? 0 : _, h ? _ + 1 : m)
            : En(r, h ? _ + 1 : 0, h ? m : _)
        }
        function vg(r, o) {
          var a = r
          return (
            a instanceof ye && (a = a.value()),
            Fn(
              o,
              function (h, m) {
                return m.func.apply(m.thisArg, Mn([h], m.args))
              },
              a
            )
          )
        }
        function Pc(r, o, a) {
          var h = r.length
          if (h < 2) return h ? Xr(r[0]) : []
          for (var m = -1, _ = b(h); ++m < h; )
            for (var C = r[m], L = -1; ++L < h; )
              L != m && (_[m] = Zs(_[m] || C, r[L], o, a))
          return Xr(vt(_, 1), o, a)
        }
        function yg(r, o, a) {
          for (var h = -1, m = r.length, _ = o.length, C = {}; ++h < m; ) {
            var L = h < _ ? o[h] : n
            a(C, r[h], L)
          }
          return C
        }
        function Rc(r) {
          return Ze(r) ? r : []
        }
        function Lc(r) {
          return typeof r == 'function' ? r : qt
        }
        function Qr(r, o) {
          return he(r) ? r : $c(r, o) ? [r] : Gg(Pe(r))
        }
        var F_ = ge
        function Jr(r, o, a) {
          var h = r.length
          return (a = a === n ? h : a), !o && a >= h ? r : En(r, o, a)
        }
        var wg =
          xw ||
          function (r) {
            return Ge.clearTimeout(r)
          }
        function _g(r, o) {
          if (o) return r.slice()
          var a = r.length,
            h = bp ? bp(a) : new r.constructor(a)
          return r.copy(h), h
        }
        function Oc(r) {
          var o = new r.constructor(r.byteLength)
          return new Hu(o).set(new Hu(r)), o
        }
        function z_(r, o) {
          var a = o ? Oc(r.buffer) : r.buffer
          return new r.constructor(a, r.byteOffset, r.byteLength)
        }
        function U_(r) {
          var o = new r.constructor(r.source, Pi.exec(r))
          return (o.lastIndex = r.lastIndex), o
        }
        function B_(r) {
          return Qs ? Fe(Qs.call(r)) : {}
        }
        function Sg(r, o) {
          var a = o ? Oc(r.buffer) : r.buffer
          return new r.constructor(a, r.byteOffset, r.length)
        }
        function Eg(r, o) {
          if (r !== o) {
            var a = r !== n,
              h = r === null,
              m = r === r,
              _ = on(r),
              C = o !== n,
              L = o === null,
              F = o === o,
              K = on(o)
            if (
              (!L && !K && !_ && r > o) ||
              (_ && C && F && !L && !K) ||
              (h && C && F) ||
              (!a && F) ||
              !m
            )
              return 1
            if (
              (!h && !_ && !K && r < o) ||
              (K && a && m && !h && !_) ||
              (L && a && m) ||
              (!C && m) ||
              !F
            )
              return -1
          }
          return 0
        }
        function $_(r, o, a) {
          for (
            var h = -1,
              m = r.criteria,
              _ = o.criteria,
              C = m.length,
              L = a.length;
            ++h < C;

          ) {
            var F = Eg(m[h], _[h])
            if (F) {
              if (h >= L) return F
              var K = a[h]
              return F * (K == 'desc' ? -1 : 1)
            }
          }
          return r.index - o.index
        }
        function xg(r, o, a, h) {
          for (
            var m = -1,
              _ = r.length,
              C = a.length,
              L = -1,
              F = o.length,
              K = st(_ - C, 0),
              G = b(F + K),
              Y = !h;
            ++L < F;

          )
            G[L] = o[L]
          for (; ++m < C; ) (Y || m < _) && (G[a[m]] = r[m])
          for (; K--; ) G[L++] = r[m++]
          return G
        }
        function Cg(r, o, a, h) {
          for (
            var m = -1,
              _ = r.length,
              C = -1,
              L = a.length,
              F = -1,
              K = o.length,
              G = st(_ - L, 0),
              Y = b(G + K),
              te = !h;
            ++m < G;

          )
            Y[m] = r[m]
          for (var ie = m; ++F < K; ) Y[ie + F] = o[F]
          for (; ++C < L; ) (te || m < _) && (Y[ie + a[C]] = r[m++])
          return Y
        }
        function Wt(r, o) {
          var a = -1,
            h = r.length
          for (o || (o = b(h)); ++a < h; ) o[a] = r[a]
          return o
        }
        function er(r, o, a, h) {
          var m = !a
          a || (a = {})
          for (var _ = -1, C = o.length; ++_ < C; ) {
            var L = o[_],
              F = h ? h(a[L], r[L], L, a, r) : n
            F === n && (F = r[L]), m ? yr(a, L, F) : Js(a, L, F)
          }
          return a
        }
        function b_(r, o) {
          return er(r, Bc(r), o)
        }
        function H_(r, o) {
          return er(r, zg(r), o)
        }
        function ra(r, o) {
          return function (a, h) {
            var m = he(a) ? Fi : f_,
              _ = o ? o() : {}
            return m(a, r, le(h, 2), _)
          }
        }
        function Mo(r) {
          return ge(function (o, a) {
            var h = -1,
              m = a.length,
              _ = m > 1 ? a[m - 1] : n,
              C = m > 2 ? a[2] : n
            for (
              _ = r.length > 3 && typeof _ == 'function' ? (m--, _) : n,
                C && Mt(a[0], a[1], C) && ((_ = m < 3 ? n : _), (m = 1)),
                o = Fe(o);
              ++h < m;

            ) {
              var L = a[h]
              L && r(o, L, h, _)
            }
            return o
          })
        }
        function kg(r, o) {
          return function (a, h) {
            if (a == null) return a
            if (!Kt(a)) return r(a, h)
            for (
              var m = a.length, _ = o ? m : -1, C = Fe(a);
              (o ? _-- : ++_ < m) && h(C[_], _, C) !== !1;

            );
            return a
          }
        }
        function Tg(r) {
          return function (o, a, h) {
            for (var m = -1, _ = Fe(o), C = h(o), L = C.length; L--; ) {
              var F = C[r ? L : ++m]
              if (a(_[F], F, _) === !1) break
            }
            return o
          }
        }
        function j_(r, o, a) {
          var h = o & q,
            m = rl(r)
          function _() {
            var C = this && this !== Ge && this instanceof _ ? m : r
            return C.apply(h ? a : this, arguments)
          }
          return _
        }
        function Ag(r) {
          return function (o) {
            o = Pe(o)
            var a = Io(o) ? zn(o) : n,
              h = a ? a[0] : o.charAt(0),
              m = a ? Jr(a, 1).join('') : o.slice(1)
            return h[r]() + m
          }
        }
        function Fo(r) {
          return function (o) {
            return Fn(km(Cm(o).replace(ic, '')), r, '')
          }
        }
        function rl(r) {
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
            var a = Do(r.prototype),
              h = r.apply(a, o)
            return je(h) ? h : a
          }
        }
        function V_(r, o, a) {
          var h = rl(r)
          function m() {
            for (var _ = arguments.length, C = b(_), L = _, F = zo(m); L--; )
              C[L] = arguments[L]
            var K = _ < 3 && C[0] !== F && C[_ - 1] !== F ? [] : Gr(C, F)
            if (((_ -= K.length), _ < a))
              return Og(r, o, ia, m.placeholder, n, C, K, n, n, a - _)
            var G = this && this !== Ge && this instanceof m ? h : r
            return Et(G, this, C)
          }
          return m
        }
        function Ig(r) {
          return function (o, a, h) {
            var m = Fe(o)
            if (!Kt(o)) {
              var _ = le(a, 3)
              ;(o = ct(o)),
                (a = function (L) {
                  return _(m[L], L, m)
                })
            }
            var C = r(o, a, h)
            return C > -1 ? m[_ ? o[C] : C] : n
          }
        }
        function Pg(r) {
          return _r(function (o) {
            var a = o.length,
              h = a,
              m = _n.prototype.thru
            for (r && o.reverse(); h--; ) {
              var _ = o[h]
              if (typeof _ != 'function') throw new wn(f)
              if (m && !C && ua(_) == 'wrapper') var C = new _n([], !0)
            }
            for (h = C ? h : a; ++h < a; ) {
              _ = o[h]
              var L = ua(_),
                F = L == 'wrapper' ? zc(_) : n
              F &&
              bc(F[0]) &&
              F[1] == (x | N | X | S) &&
              !F[4].length &&
              F[9] == 1
                ? (C = C[ua(F[0])].apply(C, F[3]))
                : (C = _.length == 1 && bc(_) ? C[L]() : C.thru(_))
            }
            return function () {
              var K = arguments,
                G = K[0]
              if (C && K.length == 1 && he(G)) return C.plant(G).value()
              for (var Y = 0, te = a ? o[Y].apply(this, K) : G; ++Y < a; )
                te = o[Y].call(this, te)
              return te
            }
          })
        }
        function ia(r, o, a, h, m, _, C, L, F, K) {
          var G = o & x,
            Y = o & q,
            te = o & R,
            ie = o & (N | j),
            ue = o & T,
            pe = te ? n : rl(r)
          function ae() {
            for (var ve = arguments.length, _e = b(ve), sn = ve; sn--; )
              _e[sn] = arguments[sn]
            if (ie)
              var Ft = zo(ae),
                ln = nw(_e, Ft)
            if (
              (h && (_e = xg(_e, h, m, ie)),
              _ && (_e = Cg(_e, _, C, ie)),
              (ve -= ln),
              ie && ve < K)
            ) {
              var et = Gr(_e, Ft)
              return Og(r, o, ia, ae.placeholder, a, _e, et, L, F, K - ve)
            }
            var $n = Y ? a : this,
              Cr = te ? $n[r] : r
            return (
              (ve = _e.length),
              L ? (_e = f2(_e, L)) : ue && ve > 1 && _e.reverse(),
              G && F < ve && (_e.length = F),
              this && this !== Ge && this instanceof ae && (Cr = pe || rl(Cr)),
              Cr.apply($n, _e)
            )
          }
          return ae
        }
        function Rg(r, o) {
          return function (a, h) {
            return y_(a, r, o(h), {})
          }
        }
        function oa(r, o) {
          return function (a, h) {
            var m
            if (a === n && h === n) return o
            if ((a !== n && (m = a), h !== n)) {
              if (m === n) return h
              typeof a == 'string' || typeof h == 'string'
                ? ((a = rn(a)), (h = rn(h)))
                : ((a = gg(a)), (h = gg(h))),
                (m = r(a, h))
            }
            return m
          }
        }
        function Nc(r) {
          return _r(function (o) {
            return (
              (o = Me(o, Ie(le()))),
              ge(function (a) {
                var h = this
                return r(o, function (m) {
                  return Et(m, h, a)
                })
              })
            )
          })
        }
        function sa(r, o) {
          o = o === n ? ' ' : rn(o)
          var a = o.length
          if (a < 2) return a ? Tc(o, r) : o
          var h = Tc(o, Ku(r / Po(o)))
          return Io(o) ? Jr(zn(h), 0, r).join('') : h.slice(0, r)
        }
        function W_(r, o, a, h) {
          var m = o & q,
            _ = rl(r)
          function C() {
            for (
              var L = -1,
                F = arguments.length,
                K = -1,
                G = h.length,
                Y = b(G + F),
                te = this && this !== Ge && this instanceof C ? _ : r;
              ++K < G;

            )
              Y[K] = h[K]
            for (; F--; ) Y[K++] = arguments[++L]
            return Et(te, m ? a : this, Y)
          }
          return C
        }
        function Lg(r) {
          return function (o, a, h) {
            return (
              h && typeof h != 'number' && Mt(o, a, h) && (a = h = n),
              (o = xr(o)),
              a === n ? ((a = o), (o = 0)) : (a = xr(a)),
              (h = h === n ? (o < a ? 1 : -1) : xr(h)),
              R_(o, a, h, r)
            )
          }
        }
        function la(r) {
          return function (o, a) {
            return (
              (typeof o == 'string' && typeof a == 'string') ||
                ((o = Cn(o)), (a = Cn(a))),
              r(o, a)
            )
          }
        }
        function Og(r, o, a, h, m, _, C, L, F, K) {
          var G = o & N,
            Y = G ? C : n,
            te = G ? n : C,
            ie = G ? _ : n,
            ue = G ? n : _
          ;(o |= G ? X : Z), (o &= ~(G ? Z : X)), o & k || (o &= ~(q | R))
          var pe = [r, o, m, ie, Y, ue, te, L, F, K],
            ae = a.apply(n, pe)
          return bc(r) && Vg(ae, pe), (ae.placeholder = h), Wg(ae, r, o)
        }
        function Dc(r) {
          var o = ot[r]
          return function (a, h) {
            if (
              ((a = Cn(a)), (h = h == null ? 0 : xt(de(h), 292)), h && Wp(a))
            ) {
              var m = (Pe(a) + 'e').split('e'),
                _ = o(m[0] + 'e' + (+m[1] + h))
              return (m = (Pe(_) + 'e').split('e')), +(m[0] + 'e' + (+m[1] - h))
            }
            return o(a)
          }
        }
        var K_ =
          Oo && 1 / Fu(new Oo([, -0]))[1] == nt
            ? function (r) {
                return new Oo(r)
              }
            : nh
        function Ng(r) {
          return function (o) {
            var a = Ct(o)
            return a == Ot ? fc(o) : a == jt ? aw(o) : Se(o, r(o))
          }
        }
        function wr(r, o, a, h, m, _, C, L) {
          var F = o & R
          if (!F && typeof r != 'function') throw new wn(f)
          var K = h ? h.length : 0
          if (
            (K || ((o &= ~(X | Z)), (h = m = n)),
            (C = C === n ? C : st(de(C), 0)),
            (L = L === n ? L : de(L)),
            (K -= m ? m.length : 0),
            o & Z)
          ) {
            var G = h,
              Y = m
            h = m = n
          }
          var te = F ? n : zc(r),
            ie = [r, o, a, h, m, G, Y, _, C, L]
          if (
            (te && l2(ie, te),
            (r = ie[0]),
            (o = ie[1]),
            (a = ie[2]),
            (h = ie[3]),
            (m = ie[4]),
            (L = ie[9] = ie[9] === n ? (F ? 0 : r.length) : st(ie[9] - K, 0)),
            !L && o & (N | j) && (o &= ~(N | j)),
            !o || o == q)
          )
            var ue = j_(r, o, a)
          else
            o == N || o == j
              ? (ue = V_(r, o, L))
              : (o == X || o == (q | X)) && !m.length
              ? (ue = W_(r, o, a, h))
              : (ue = ia.apply(n, ie))
          var pe = te ? dg : Vg
          return Wg(pe(ue, ie), r, o)
        }
        function Dg(r, o, a, h) {
          return r === n || (Bn(r, Lo[a]) && !Le.call(h, a)) ? o : r
        }
        function Mg(r, o, a, h, m, _) {
          return (
            je(r) && je(o) && (_.set(o, r), ea(r, o, n, Mg, _), _.delete(o)), r
          )
        }
        function G_(r) {
          return sl(r) ? n : r
        }
        function Fg(r, o, a, h, m, _) {
          var C = a & $,
            L = r.length,
            F = o.length
          if (L != F && !(C && F > L)) return !1
          var K = _.get(r),
            G = _.get(o)
          if (K && G) return K == o && G == r
          var Y = -1,
            te = !0,
            ie = a & V ? new Hi() : n
          for (_.set(r, o), _.set(o, r); ++Y < L; ) {
            var ue = r[Y],
              pe = o[Y]
            if (h) var ae = C ? h(pe, ue, Y, o, r, _) : h(ue, pe, Y, r, o, _)
            if (ae !== n) {
              if (ae) continue
              te = !1
              break
            }
            if (ie) {
              if (
                !To(o, function (ve, _e) {
                  if (!mt(ie, _e) && (ue === ve || m(ue, ve, a, h, _)))
                    return ie.push(_e)
                })
              ) {
                te = !1
                break
              }
            } else if (!(ue === pe || m(ue, pe, a, h, _))) {
              te = !1
              break
            }
          }
          return _.delete(r), _.delete(o), te
        }
        function q_(r, o, a, h, m, _, C) {
          switch (a) {
            case Dn:
              if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
                return !1
              ;(r = r.buffer), (o = o.buffer)
            case Qe:
              return !(r.byteLength != o.byteLength || !_(new Hu(r), new Hu(o)))
            case xi:
            case Ci:
            case ar:
              return Bn(+r, +o)
            case ur:
              return r.name == o.name && r.message == o.message
            case fr:
            case ki:
              return r == o + ''
            case Ot:
              var L = fc
            case jt:
              var F = h & $
              if ((L || (L = Fu), r.size != o.size && !F)) return !1
              var K = C.get(r)
              if (K) return K == o
              ;(h |= V), C.set(r, o)
              var G = Fg(L(r), L(o), h, m, _, C)
              return C.delete(r), G
            case zr:
              if (Qs) return Qs.call(r) == Qs.call(o)
          }
          return !1
        }
        function Y_(r, o, a, h, m, _) {
          var C = a & $,
            L = Mc(r),
            F = L.length,
            K = Mc(o),
            G = K.length
          if (F != G && !C) return !1
          for (var Y = F; Y--; ) {
            var te = L[Y]
            if (!(C ? te in o : Le.call(o, te))) return !1
          }
          var ie = _.get(r),
            ue = _.get(o)
          if (ie && ue) return ie == o && ue == r
          var pe = !0
          _.set(r, o), _.set(o, r)
          for (var ae = C; ++Y < F; ) {
            te = L[Y]
            var ve = r[te],
              _e = o[te]
            if (h) var sn = C ? h(_e, ve, te, o, r, _) : h(ve, _e, te, r, o, _)
            if (!(sn === n ? ve === _e || m(ve, _e, a, h, _) : sn)) {
              pe = !1
              break
            }
            ae || (ae = te == 'constructor')
          }
          if (pe && !ae) {
            var Ft = r.constructor,
              ln = o.constructor
            Ft != ln &&
              'constructor' in r &&
              'constructor' in o &&
              !(
                typeof Ft == 'function' &&
                Ft instanceof Ft &&
                typeof ln == 'function' &&
                ln instanceof ln
              ) &&
              (pe = !1)
          }
          return _.delete(r), _.delete(o), pe
        }
        function _r(r) {
          return jc(Hg(r, n, Qg), r + '')
        }
        function Mc(r) {
          return ng(r, ct, Bc)
        }
        function Fc(r) {
          return ng(r, Gt, zg)
        }
        var zc = qu
          ? function (r) {
              return qu.get(r)
            }
          : nh
        function ua(r) {
          for (
            var o = r.name + '', a = No[o], h = Le.call(No, o) ? a.length : 0;
            h--;

          ) {
            var m = a[h],
              _ = m.func
            if (_ == null || _ == r) return m.name
          }
          return o
        }
        function zo(r) {
          var o = Le.call(v, 'placeholder') ? v : r
          return o.placeholder
        }
        function le() {
          var r = v.iteratee || eh
          return (
            (r = r === eh ? og : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          )
        }
        function aa(r, o) {
          var a = r.__data__
          return r2(o) ? a[typeof o == 'string' ? 'string' : 'hash'] : a.map
        }
        function Uc(r) {
          for (var o = ct(r), a = o.length; a--; ) {
            var h = o[a],
              m = r[h]
            o[a] = [h, m, $g(m)]
          }
          return o
        }
        function Wi(r, o) {
          var a = sw(r, o)
          return ig(a) ? a : n
        }
        function X_(r) {
          var o = Le.call(r, $i),
            a = r[$i]
          try {
            r[$i] = n
            var h = !0
          } catch {}
          var m = $u.call(r)
          return h && (o ? (r[$i] = a) : delete r[$i]), m
        }
        var Bc = hc
            ? function (r) {
                return r == null
                  ? []
                  : ((r = Fe(r)),
                    yn(hc(r), function (o) {
                      return jp.call(r, o)
                    }))
              }
            : rh,
          zg = hc
            ? function (r) {
                for (var o = []; r; ) Mn(o, Bc(r)), (r = ju(r))
                return o
              }
            : rh,
          Ct = Dt
        ;((dc && Ct(new dc(new ArrayBuffer(1))) != Dn) ||
          (qs && Ct(new qs()) != Ot) ||
          (pc && Ct(pc.resolve()) != su) ||
          (Oo && Ct(new Oo()) != jt) ||
          (Ys && Ct(new Ys()) != Ur)) &&
          (Ct = function (r) {
            var o = Dt(r),
              a = o == Nn ? r.constructor : n,
              h = a ? Ki(a) : ''
            if (h)
              switch (h) {
                case Ow:
                  return Dn
                case Nw:
                  return Ot
                case Dw:
                  return su
                case Mw:
                  return jt
                case Fw:
                  return Ur
              }
            return o
          })
        function Q_(r, o, a) {
          for (var h = -1, m = a.length; ++h < m; ) {
            var _ = a[h],
              C = _.size
            switch (_.type) {
              case 'drop':
                r += C
                break
              case 'dropRight':
                o -= C
                break
              case 'take':
                o = xt(o, r + C)
                break
              case 'takeRight':
                r = st(r, o - C)
                break
            }
          }
          return { start: r, end: o }
        }
        function J_(r) {
          var o = r.match(br)
          return o ? o[1].split(Qf) : []
        }
        function Ug(r, o, a) {
          o = Qr(o, r)
          for (var h = -1, m = o.length, _ = !1; ++h < m; ) {
            var C = tr(o[h])
            if (!(_ = r != null && a(r, C))) break
            r = r[C]
          }
          return _ || ++h != m
            ? _
            : ((m = r == null ? 0 : r.length),
              !!m && ma(m) && Sr(C, m) && (he(r) || Gi(r)))
        }
        function Z_(r) {
          var o = r.length,
            a = new r.constructor(o)
          return (
            o &&
              typeof r[0] == 'string' &&
              Le.call(r, 'index') &&
              ((a.index = r.index), (a.input = r.input)),
            a
          )
        }
        function Bg(r) {
          return typeof r.constructor == 'function' && !il(r) ? Do(ju(r)) : {}
        }
        function e2(r, o, a) {
          var h = r.constructor
          switch (o) {
            case Qe:
              return Oc(r)
            case xi:
            case Ci:
              return new h(+r)
            case Dn:
              return z_(r, a)
            case ho:
            case po:
            case Ss:
            case cr:
            case go:
            case mo:
            case Ti:
            case Es:
            case xs:
              return Sg(r, a)
            case Ot:
              return new h()
            case ar:
            case ki:
              return new h(r)
            case fr:
              return U_(r)
            case jt:
              return new h()
            case zr:
              return B_(r)
          }
        }
        function t2(r, o) {
          var a = o.length
          if (!a) return r
          var h = a - 1
          return (
            (o[h] = (a > 1 ? '& ' : '') + o[h]),
            (o = o.join(a > 2 ? ', ' : ' ')),
            r.replace(
              Xf,
              `{
/* [wrapped with ` +
                o +
                `] */
`
            )
          )
        }
        function n2(r) {
          return he(r) || Gi(r) || !!(Vp && r && r[Vp])
        }
        function Sr(r, o) {
          var a = typeof r
          return (
            (o = o ?? Q),
            !!o &&
              (a == 'number' || (a != 'symbol' && Ls.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < o
          )
        }
        function Mt(r, o, a) {
          if (!je(a)) return !1
          var h = typeof o
          return (
            h == 'number' ? Kt(a) && Sr(o, a.length) : h == 'string' && o in a
          )
            ? Bn(a[o], r)
            : !1
        }
        function $c(r, o) {
          if (he(r)) return !1
          var a = typeof r
          return a == 'number' ||
            a == 'symbol' ||
            a == 'boolean' ||
            r == null ||
            on(r)
            ? !0
            : fu.test(r) || !Ai.test(r) || (o != null && r in Fe(o))
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
        function bc(r) {
          var o = ua(r),
            a = v[o]
          if (typeof a != 'function' || !(o in ye.prototype)) return !1
          if (r === a) return !0
          var h = zc(a)
          return !!h && r === h[0]
        }
        function i2(r) {
          return !!$p && $p in r
        }
        var o2 = Uu ? Er : ih
        function il(r) {
          var o = r && r.constructor,
            a = (typeof o == 'function' && o.prototype) || Lo
          return r === a
        }
        function $g(r) {
          return r === r && !je(r)
        }
        function bg(r, o) {
          return function (a) {
            return a == null ? !1 : a[r] === o && (o !== n || r in Fe(a))
          }
        }
        function s2(r) {
          var o = pa(r, function (h) {
              return a.size === y && a.clear(), h
            }),
            a = o.cache
          return o
        }
        function l2(r, o) {
          var a = r[1],
            h = o[1],
            m = a | h,
            _ = m < (q | R | x),
            C =
              (h == x && a == N) ||
              (h == x && a == S && r[7].length <= o[8]) ||
              (h == (x | S) && o[7].length <= o[8] && a == N)
          if (!(_ || C)) return r
          h & q && ((r[2] = o[2]), (m |= a & q ? 0 : k))
          var L = o[3]
          if (L) {
            var F = r[3]
            ;(r[3] = F ? xg(F, L, o[4]) : L), (r[4] = F ? Gr(r[3], P) : o[4])
          }
          return (
            (L = o[5]),
            L &&
              ((F = r[5]),
              (r[5] = F ? Cg(F, L, o[6]) : L),
              (r[6] = F ? Gr(r[5], P) : o[6])),
            (L = o[7]),
            L && (r[7] = L),
            h & x && (r[8] = r[8] == null ? o[8] : xt(r[8], o[8])),
            r[9] == null && (r[9] = o[9]),
            (r[0] = o[0]),
            (r[1] = m),
            r
          )
        }
        function u2(r) {
          var o = []
          if (r != null) for (var a in Fe(r)) o.push(a)
          return o
        }
        function a2(r) {
          return $u.call(r)
        }
        function Hg(r, o, a) {
          return (
            (o = st(o === n ? r.length - 1 : o, 0)),
            function () {
              for (
                var h = arguments, m = -1, _ = st(h.length - o, 0), C = b(_);
                ++m < _;

              )
                C[m] = h[o + m]
              m = -1
              for (var L = b(o + 1); ++m < o; ) L[m] = h[m]
              return (L[o] = a(C)), Et(r, this, L)
            }
          )
        }
        function jg(r, o) {
          return o.length < 2 ? r : Vi(r, En(o, 0, -1))
        }
        function f2(r, o) {
          for (var a = r.length, h = xt(o.length, a), m = Wt(r); h--; ) {
            var _ = o[h]
            r[h] = Sr(_, a) ? m[_] : n
          }
          return r
        }
        function Hc(r, o) {
          if (
            !(o === 'constructor' && typeof r[o] == 'function') &&
            o != '__proto__'
          )
            return r[o]
        }
        var Vg = Kg(dg),
          ol =
            kw ||
            function (r, o) {
              return Ge.setTimeout(r, o)
            },
          jc = Kg(N_)
        function Wg(r, o, a) {
          var h = o + ''
          return jc(r, t2(h, c2(J_(h), a)))
        }
        function Kg(r) {
          var o = 0,
            a = 0
          return function () {
            var h = Pw(),
              m = A - (h - a)
            if (((a = h), m > 0)) {
              if (++o >= U) return arguments[0]
            } else o = 0
            return r.apply(n, arguments)
          }
        }
        function fa(r, o) {
          var a = -1,
            h = r.length,
            m = h - 1
          for (o = o === n ? h : o; ++a < o; ) {
            var _ = kc(a, m),
              C = r[_]
            ;(r[_] = r[a]), (r[a] = C)
          }
          return (r.length = o), r
        }
        var Gg = s2(function (r) {
          var o = []
          return (
            r.charCodeAt(0) === 46 && o.push(''),
            r.replace(pt, function (a, h, m, _) {
              o.push(m ? _.replace(Zf, '$1') : h || a)
            }),
            o
          )
        })
        function tr(r) {
          if (typeof r == 'string' || on(r)) return r
          var o = r + ''
          return o == '0' && 1 / r == -nt ? '-0' : o
        }
        function Ki(r) {
          if (r != null) {
            try {
              return Bu.call(r)
            } catch {}
            try {
              return r + ''
            } catch {}
          }
          return ''
        }
        function c2(r, o) {
          return (
            Nt(Ln, function (a) {
              var h = '_.' + a[0]
              o & a[1] && !zi(r, h) && r.push(h)
            }),
            r.sort()
          )
        }
        function qg(r) {
          if (r instanceof ye) return r.clone()
          var o = new _n(r.__wrapped__, r.__chain__)
          return (
            (o.__actions__ = Wt(r.__actions__)),
            (o.__index__ = r.__index__),
            (o.__values__ = r.__values__),
            o
          )
        }
        function h2(r, o, a) {
          ;(a ? Mt(r, o, a) : o === n) ? (o = 1) : (o = st(de(o), 0))
          var h = r == null ? 0 : r.length
          if (!h || o < 1) return []
          for (var m = 0, _ = 0, C = b(Ku(h / o)); m < h; )
            C[_++] = En(r, m, (m += o))
          return C
        }
        function d2(r) {
          for (
            var o = -1, a = r == null ? 0 : r.length, h = 0, m = [];
            ++o < a;

          ) {
            var _ = r[o]
            _ && (m[h++] = _)
          }
          return m
        }
        function p2() {
          var r = arguments.length
          if (!r) return []
          for (var o = b(r - 1), a = arguments[0], h = r; h--; )
            o[h - 1] = arguments[h]
          return Mn(he(a) ? Wt(a) : [a], vt(o, 1))
        }
        var g2 = ge(function (r, o) {
            return Ze(r) ? Zs(r, vt(o, 1, Ze, !0)) : []
          }),
          m2 = ge(function (r, o) {
            var a = xn(o)
            return (
              Ze(a) && (a = n), Ze(r) ? Zs(r, vt(o, 1, Ze, !0), le(a, 2)) : []
            )
          }),
          v2 = ge(function (r, o) {
            var a = xn(o)
            return Ze(a) && (a = n), Ze(r) ? Zs(r, vt(o, 1, Ze, !0), n, a) : []
          })
        function y2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = a || o === n ? 1 : de(o)), En(r, o < 0 ? 0 : o, h))
            : []
        }
        function w2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = a || o === n ? 1 : de(o)),
              (o = h - o),
              En(r, 0, o < 0 ? 0 : o))
            : []
        }
        function _2(r, o) {
          return r && r.length ? na(r, le(o, 3), !0, !0) : []
        }
        function S2(r, o) {
          return r && r.length ? na(r, le(o, 3), !0) : []
        }
        function E2(r, o, a, h) {
          var m = r == null ? 0 : r.length
          return m
            ? (a && typeof a != 'number' && Mt(r, o, a) && ((a = 0), (h = m)),
              p_(r, o, a, h))
            : []
        }
        function Yg(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = a == null ? 0 : de(a)
          return m < 0 && (m = st(h + m, 0)), Ui(r, le(o, 3), m)
        }
        function Xg(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h - 1
          return (
            a !== n && ((m = de(a)), (m = a < 0 ? st(h + m, 0) : xt(m, h - 1))),
            Ui(r, le(o, 3), m, !0)
          )
        }
        function Qg(r) {
          var o = r == null ? 0 : r.length
          return o ? vt(r, 1) : []
        }
        function x2(r) {
          var o = r == null ? 0 : r.length
          return o ? vt(r, nt) : []
        }
        function C2(r, o) {
          var a = r == null ? 0 : r.length
          return a ? ((o = o === n ? 1 : de(o)), vt(r, o)) : []
        }
        function k2(r) {
          for (var o = -1, a = r == null ? 0 : r.length, h = {}; ++o < a; ) {
            var m = r[o]
            h[m[0]] = m[1]
          }
          return h
        }
        function Jg(r) {
          return r && r.length ? r[0] : n
        }
        function T2(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = a == null ? 0 : de(a)
          return m < 0 && (m = st(h + m, 0)), nn(r, o, m)
        }
        function A2(r) {
          var o = r == null ? 0 : r.length
          return o ? En(r, 0, -1) : []
        }
        var I2 = ge(function (r) {
            var o = Me(r, Rc)
            return o.length && o[0] === r[0] ? _c(o) : []
          }),
          P2 = ge(function (r) {
            var o = xn(r),
              a = Me(r, Rc)
            return (
              o === xn(a) ? (o = n) : a.pop(),
              a.length && a[0] === r[0] ? _c(a, le(o, 2)) : []
            )
          }),
          R2 = ge(function (r) {
            var o = xn(r),
              a = Me(r, Rc)
            return (
              (o = typeof o == 'function' ? o : n),
              o && a.pop(),
              a.length && a[0] === r[0] ? _c(a, n, o) : []
            )
          })
        function L2(r, o) {
          return r == null ? '' : Aw.call(r, o)
        }
        function xn(r) {
          var o = r == null ? 0 : r.length
          return o ? r[o - 1] : n
        }
        function O2(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h
          return (
            a !== n && ((m = de(a)), (m = m < 0 ? st(h + m, 0) : xt(m, h - 1))),
            o === o ? cw(r, o, m) : Ui(r, c, m, !0)
          )
        }
        function N2(r, o) {
          return r && r.length ? ag(r, de(o)) : n
        }
        var D2 = ge(Zg)
        function Zg(r, o) {
          return r && r.length && o && o.length ? Cc(r, o) : r
        }
        function M2(r, o, a) {
          return r && r.length && o && o.length ? Cc(r, o, le(a, 2)) : r
        }
        function F2(r, o, a) {
          return r && r.length && o && o.length ? Cc(r, o, n, a) : r
        }
        var z2 = _r(function (r, o) {
          var a = r == null ? 0 : r.length,
            h = mc(r, o)
          return (
            hg(
              r,
              Me(o, function (m) {
                return Sr(m, a) ? +m : m
              }).sort(Eg)
            ),
            h
          )
        })
        function U2(r, o) {
          var a = []
          if (!(r && r.length)) return a
          var h = -1,
            m = [],
            _ = r.length
          for (o = le(o, 3); ++h < _; ) {
            var C = r[h]
            o(C, h, r) && (a.push(C), m.push(h))
          }
          return hg(r, m), a
        }
        function Vc(r) {
          return r == null ? r : Lw.call(r)
        }
        function B2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? (a && typeof a != 'number' && Mt(r, o, a)
                ? ((o = 0), (a = h))
                : ((o = o == null ? 0 : de(o)), (a = a === n ? h : de(a))),
              En(r, o, a))
            : []
        }
        function $2(r, o) {
          return ta(r, o)
        }
        function b2(r, o, a) {
          return Ac(r, o, le(a, 2))
        }
        function H2(r, o) {
          var a = r == null ? 0 : r.length
          if (a) {
            var h = ta(r, o)
            if (h < a && Bn(r[h], o)) return h
          }
          return -1
        }
        function j2(r, o) {
          return ta(r, o, !0)
        }
        function V2(r, o, a) {
          return Ac(r, o, le(a, 2), !0)
        }
        function W2(r, o) {
          var a = r == null ? 0 : r.length
          if (a) {
            var h = ta(r, o, !0) - 1
            if (Bn(r[h], o)) return h
          }
          return -1
        }
        function K2(r) {
          return r && r.length ? pg(r) : []
        }
        function G2(r, o) {
          return r && r.length ? pg(r, le(o, 2)) : []
        }
        function q2(r) {
          var o = r == null ? 0 : r.length
          return o ? En(r, 1, o) : []
        }
        function Y2(r, o, a) {
          return r && r.length
            ? ((o = a || o === n ? 1 : de(o)), En(r, 0, o < 0 ? 0 : o))
            : []
        }
        function X2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = a || o === n ? 1 : de(o)),
              (o = h - o),
              En(r, o < 0 ? 0 : o, h))
            : []
        }
        function Q2(r, o) {
          return r && r.length ? na(r, le(o, 3), !1, !0) : []
        }
        function J2(r, o) {
          return r && r.length ? na(r, le(o, 3)) : []
        }
        var Z2 = ge(function (r) {
            return Xr(vt(r, 1, Ze, !0))
          }),
          eS = ge(function (r) {
            var o = xn(r)
            return Ze(o) && (o = n), Xr(vt(r, 1, Ze, !0), le(o, 2))
          }),
          tS = ge(function (r) {
            var o = xn(r)
            return (
              (o = typeof o == 'function' ? o : n), Xr(vt(r, 1, Ze, !0), n, o)
            )
          })
        function nS(r) {
          return r && r.length ? Xr(r) : []
        }
        function rS(r, o) {
          return r && r.length ? Xr(r, le(o, 2)) : []
        }
        function iS(r, o) {
          return (
            (o = typeof o == 'function' ? o : n),
            r && r.length ? Xr(r, n, o) : []
          )
        }
        function Wc(r) {
          if (!(r && r.length)) return []
          var o = 0
          return (
            (r = yn(r, function (a) {
              if (Ze(a)) return (o = st(a.length, o)), !0
            })),
            Je(o, function (a) {
              return Me(r, w(a))
            })
          )
        }
        function em(r, o) {
          if (!(r && r.length)) return []
          var a = Wc(r)
          return o == null
            ? a
            : Me(a, function (h) {
                return Et(o, n, h)
              })
        }
        var oS = ge(function (r, o) {
            return Ze(r) ? Zs(r, o) : []
          }),
          sS = ge(function (r) {
            return Pc(yn(r, Ze))
          }),
          lS = ge(function (r) {
            var o = xn(r)
            return Ze(o) && (o = n), Pc(yn(r, Ze), le(o, 2))
          }),
          uS = ge(function (r) {
            var o = xn(r)
            return (o = typeof o == 'function' ? o : n), Pc(yn(r, Ze), n, o)
          }),
          aS = ge(Wc)
        function fS(r, o) {
          return yg(r || [], o || [], Js)
        }
        function cS(r, o) {
          return yg(r || [], o || [], nl)
        }
        var hS = ge(function (r) {
          var o = r.length,
            a = o > 1 ? r[o - 1] : n
          return (a = typeof a == 'function' ? (r.pop(), a) : n), em(r, a)
        })
        function tm(r) {
          var o = v(r)
          return (o.__chain__ = !0), o
        }
        function dS(r, o) {
          return o(r), r
        }
        function ca(r, o) {
          return o(r)
        }
        var pS = _r(function (r) {
          var o = r.length,
            a = o ? r[0] : 0,
            h = this.__wrapped__,
            m = function (_) {
              return mc(_, r)
            }
          return o > 1 ||
            this.__actions__.length ||
            !(h instanceof ye) ||
            !Sr(a)
            ? this.thru(m)
            : ((h = h.slice(a, +a + (o ? 1 : 0))),
              h.__actions__.push({ func: ca, args: [m], thisArg: n }),
              new _n(h, this.__chain__).thru(function (_) {
                return o && !_.length && _.push(n), _
              }))
        })
        function gS() {
          return tm(this)
        }
        function mS() {
          return new _n(this.value(), this.__chain__)
        }
        function vS() {
          this.__values__ === n && (this.__values__ = gm(this.value()))
          var r = this.__index__ >= this.__values__.length,
            o = r ? n : this.__values__[this.__index__++]
          return { done: r, value: o }
        }
        function yS() {
          return this
        }
        function wS(r) {
          for (var o, a = this; a instanceof Xu; ) {
            var h = qg(a)
            ;(h.__index__ = 0),
              (h.__values__ = n),
              o ? (m.__wrapped__ = h) : (o = h)
            var m = h
            a = a.__wrapped__
          }
          return (m.__wrapped__ = r), o
        }
        function _S() {
          var r = this.__wrapped__
          if (r instanceof ye) {
            var o = r
            return (
              this.__actions__.length && (o = new ye(this)),
              (o = o.reverse()),
              o.__actions__.push({ func: ca, args: [Vc], thisArg: n }),
              new _n(o, this.__chain__)
            )
          }
          return this.thru(Vc)
        }
        function SS() {
          return vg(this.__wrapped__, this.__actions__)
        }
        var ES = ra(function (r, o, a) {
          Le.call(r, a) ? ++r[a] : yr(r, a, 1)
        })
        function xS(r, o, a) {
          var h = he(r) ? ko : d_
          return a && Mt(r, o, a) && (o = n), h(r, le(o, 3))
        }
        function CS(r, o) {
          var a = he(r) ? yn : eg
          return a(r, le(o, 3))
        }
        var kS = Ig(Yg),
          TS = Ig(Xg)
        function AS(r, o) {
          return vt(ha(r, o), 1)
        }
        function IS(r, o) {
          return vt(ha(r, o), nt)
        }
        function PS(r, o, a) {
          return (a = a === n ? 1 : de(a)), vt(ha(r, o), a)
        }
        function nm(r, o) {
          var a = he(r) ? Nt : Yr
          return a(r, le(o, 3))
        }
        function rm(r, o) {
          var a = he(r) ? Ou : Zp
          return a(r, le(o, 3))
        }
        var RS = ra(function (r, o, a) {
          Le.call(r, a) ? r[a].push(o) : yr(r, a, [o])
        })
        function LS(r, o, a, h) {
          ;(r = Kt(r) ? r : Bo(r)), (a = a && !h ? de(a) : 0)
          var m = r.length
          return (
            a < 0 && (a = st(m + a, 0)),
            va(r) ? a <= m && r.indexOf(o, a) > -1 : !!m && nn(r, o, a) > -1
          )
        }
        var OS = ge(function (r, o, a) {
            var h = -1,
              m = typeof o == 'function',
              _ = Kt(r) ? b(r.length) : []
            return (
              Yr(r, function (C) {
                _[++h] = m ? Et(o, C, a) : el(C, o, a)
              }),
              _
            )
          }),
          NS = ra(function (r, o, a) {
            yr(r, a, o)
          })
        function ha(r, o) {
          var a = he(r) ? Me : sg
          return a(r, le(o, 3))
        }
        function DS(r, o, a, h) {
          return r == null
            ? []
            : (he(o) || (o = o == null ? [] : [o]),
              (a = h ? n : a),
              he(a) || (a = a == null ? [] : [a]),
              fg(r, o, a))
        }
        var MS = ra(
          function (r, o, a) {
            r[a ? 0 : 1].push(o)
          },
          function () {
            return [[], []]
          }
        )
        function FS(r, o, a) {
          var h = he(r) ? Fn : H,
            m = arguments.length < 3
          return h(r, le(o, 4), a, m, Yr)
        }
        function zS(r, o, a) {
          var h = he(r) ? Nu : H,
            m = arguments.length < 3
          return h(r, le(o, 4), a, m, Zp)
        }
        function US(r, o) {
          var a = he(r) ? yn : eg
          return a(r, ga(le(o, 3)))
        }
        function BS(r) {
          var o = he(r) ? Yp : L_
          return o(r)
        }
        function $S(r, o, a) {
          ;(a ? Mt(r, o, a) : o === n) ? (o = 1) : (o = de(o))
          var h = he(r) ? u_ : O_
          return h(r, o)
        }
        function bS(r) {
          var o = he(r) ? a_ : D_
          return o(r)
        }
        function HS(r) {
          if (r == null) return 0
          if (Kt(r)) return va(r) ? Po(r) : r.length
          var o = Ct(r)
          return o == Ot || o == jt ? r.size : Ec(r).length
        }
        function jS(r, o, a) {
          var h = he(r) ? To : M_
          return a && Mt(r, o, a) && (o = n), h(r, le(o, 3))
        }
        var VS = ge(function (r, o) {
            if (r == null) return []
            var a = o.length
            return (
              a > 1 && Mt(r, o[0], o[1])
                ? (o = [])
                : a > 2 && Mt(o[0], o[1], o[2]) && (o = [o[0]]),
              fg(r, vt(o, 1), [])
            )
          }),
          da =
            Cw ||
            function () {
              return Ge.Date.now()
            }
        function WS(r, o) {
          if (typeof o != 'function') throw new wn(f)
          return (
            (r = de(r)),
            function () {
              if (--r < 1) return o.apply(this, arguments)
            }
          )
        }
        function im(r, o, a) {
          return (
            (o = a ? n : o),
            (o = r && o == null ? r.length : o),
            wr(r, x, n, n, n, n, o)
          )
        }
        function om(r, o) {
          var a
          if (typeof o != 'function') throw new wn(f)
          return (
            (r = de(r)),
            function () {
              return (
                --r > 0 && (a = o.apply(this, arguments)), r <= 1 && (o = n), a
              )
            }
          )
        }
        var Kc = ge(function (r, o, a) {
            var h = q
            if (a.length) {
              var m = Gr(a, zo(Kc))
              h |= X
            }
            return wr(r, h, o, a, m)
          }),
          sm = ge(function (r, o, a) {
            var h = q | R
            if (a.length) {
              var m = Gr(a, zo(sm))
              h |= X
            }
            return wr(o, h, r, a, m)
          })
        function lm(r, o, a) {
          o = a ? n : o
          var h = wr(r, N, n, n, n, n, n, o)
          return (h.placeholder = lm.placeholder), h
        }
        function um(r, o, a) {
          o = a ? n : o
          var h = wr(r, j, n, n, n, n, n, o)
          return (h.placeholder = um.placeholder), h
        }
        function am(r, o, a) {
          var h,
            m,
            _,
            C,
            L,
            F,
            K = 0,
            G = !1,
            Y = !1,
            te = !0
          if (typeof r != 'function') throw new wn(f)
          ;(o = Cn(o) || 0),
            je(a) &&
              ((G = !!a.leading),
              (Y = 'maxWait' in a),
              (_ = Y ? st(Cn(a.maxWait) || 0, o) : _),
              (te = 'trailing' in a ? !!a.trailing : te))
          function ie(et) {
            var $n = h,
              Cr = m
            return (h = m = n), (K = et), (C = r.apply(Cr, $n)), C
          }
          function ue(et) {
            return (K = et), (L = ol(ve, o)), G ? ie(et) : C
          }
          function pe(et) {
            var $n = et - F,
              Cr = et - K,
              Im = o - $n
            return Y ? xt(Im, _ - Cr) : Im
          }
          function ae(et) {
            var $n = et - F,
              Cr = et - K
            return F === n || $n >= o || $n < 0 || (Y && Cr >= _)
          }
          function ve() {
            var et = da()
            if (ae(et)) return _e(et)
            L = ol(ve, pe(et))
          }
          function _e(et) {
            return (L = n), te && h ? ie(et) : ((h = m = n), C)
          }
          function sn() {
            L !== n && wg(L), (K = 0), (h = F = m = L = n)
          }
          function Ft() {
            return L === n ? C : _e(da())
          }
          function ln() {
            var et = da(),
              $n = ae(et)
            if (((h = arguments), (m = this), (F = et), $n)) {
              if (L === n) return ue(F)
              if (Y) return wg(L), (L = ol(ve, o)), ie(F)
            }
            return L === n && (L = ol(ve, o)), C
          }
          return (ln.cancel = sn), (ln.flush = Ft), ln
        }
        var KS = ge(function (r, o) {
            return Jp(r, 1, o)
          }),
          GS = ge(function (r, o, a) {
            return Jp(r, Cn(o) || 0, a)
          })
        function qS(r) {
          return wr(r, T)
        }
        function pa(r, o) {
          if (typeof r != 'function' || (o != null && typeof o != 'function'))
            throw new wn(f)
          var a = function () {
            var h = arguments,
              m = o ? o.apply(this, h) : h[0],
              _ = a.cache
            if (_.has(m)) return _.get(m)
            var C = r.apply(this, h)
            return (a.cache = _.set(m, C) || _), C
          }
          return (a.cache = new (pa.Cache || vr)()), a
        }
        pa.Cache = vr
        function ga(r) {
          if (typeof r != 'function') throw new wn(f)
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
        function YS(r) {
          return om(2, r)
        }
        var XS = F_(function (r, o) {
            o =
              o.length == 1 && he(o[0])
                ? Me(o[0], Ie(le()))
                : Me(vt(o, 1), Ie(le()))
            var a = o.length
            return ge(function (h) {
              for (var m = -1, _ = xt(h.length, a); ++m < _; )
                h[m] = o[m].call(this, h[m])
              return Et(r, this, h)
            })
          }),
          Gc = ge(function (r, o) {
            var a = Gr(o, zo(Gc))
            return wr(r, X, n, o, a)
          }),
          fm = ge(function (r, o) {
            var a = Gr(o, zo(fm))
            return wr(r, Z, n, o, a)
          }),
          QS = _r(function (r, o) {
            return wr(r, S, n, n, n, o)
          })
        function JS(r, o) {
          if (typeof r != 'function') throw new wn(f)
          return (o = o === n ? o : de(o)), ge(r, o)
        }
        function ZS(r, o) {
          if (typeof r != 'function') throw new wn(f)
          return (
            (o = o == null ? 0 : st(de(o), 0)),
            ge(function (a) {
              var h = a[o],
                m = Jr(a, 0, o)
              return h && Mn(m, h), Et(r, this, m)
            })
          )
        }
        function eE(r, o, a) {
          var h = !0,
            m = !0
          if (typeof r != 'function') throw new wn(f)
          return (
            je(a) &&
              ((h = 'leading' in a ? !!a.leading : h),
              (m = 'trailing' in a ? !!a.trailing : m)),
            am(r, o, { leading: h, maxWait: o, trailing: m })
          )
        }
        function tE(r) {
          return im(r, 1)
        }
        function nE(r, o) {
          return Gc(Lc(o), r)
        }
        function rE() {
          if (!arguments.length) return []
          var r = arguments[0]
          return he(r) ? r : [r]
        }
        function iE(r) {
          return Sn(r, B)
        }
        function oE(r, o) {
          return (o = typeof o == 'function' ? o : n), Sn(r, B, o)
        }
        function sE(r) {
          return Sn(r, O | B)
        }
        function lE(r, o) {
          return (o = typeof o == 'function' ? o : n), Sn(r, O | B, o)
        }
        function uE(r, o) {
          return o == null || Qp(r, o, ct(o))
        }
        function Bn(r, o) {
          return r === o || (r !== r && o !== o)
        }
        var aE = la(wc),
          fE = la(function (r, o) {
            return r >= o
          }),
          Gi = rg(
            (function () {
              return arguments
            })()
          )
            ? rg
            : function (r) {
                return qe(r) && Le.call(r, 'callee') && !jp.call(r, 'callee')
              },
          he = b.isArray,
          cE = Vs ? Ie(Vs) : w_
        function Kt(r) {
          return r != null && ma(r.length) && !Er(r)
        }
        function Ze(r) {
          return qe(r) && Kt(r)
        }
        function hE(r) {
          return r === !0 || r === !1 || (qe(r) && Dt(r) == xi)
        }
        var Zr = Tw || ih,
          dE = Co ? Ie(Co) : __
        function pE(r) {
          return qe(r) && r.nodeType === 1 && !sl(r)
        }
        function gE(r) {
          if (r == null) return !0
          if (
            Kt(r) &&
            (he(r) ||
              typeof r == 'string' ||
              typeof r.splice == 'function' ||
              Zr(r) ||
              Uo(r) ||
              Gi(r))
          )
            return !r.length
          var o = Ct(r)
          if (o == Ot || o == jt) return !r.size
          if (il(r)) return !Ec(r).length
          for (var a in r) if (Le.call(r, a)) return !1
          return !0
        }
        function mE(r, o) {
          return tl(r, o)
        }
        function vE(r, o, a) {
          a = typeof a == 'function' ? a : n
          var h = a ? a(r, o) : n
          return h === n ? tl(r, o, n, a) : !!h
        }
        function qc(r) {
          if (!qe(r)) return !1
          var o = Dt(r)
          return (
            o == ur ||
            o == fo ||
            (typeof r.message == 'string' &&
              typeof r.name == 'string' &&
              !sl(r))
          )
        }
        function yE(r) {
          return typeof r == 'number' && Wp(r)
        }
        function Er(r) {
          if (!je(r)) return !1
          var o = Dt(r)
          return o == Fr || o == co || o == On || o == lu
        }
        function cm(r) {
          return typeof r == 'number' && r == de(r)
        }
        function ma(r) {
          return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= Q
        }
        function je(r) {
          var o = typeof r
          return r != null && (o == 'object' || o == 'function')
        }
        function qe(r) {
          return r != null && typeof r == 'object'
        }
        var hm = Di ? Ie(Di) : E_
        function wE(r, o) {
          return r === o || Sc(r, o, Uc(o))
        }
        function _E(r, o, a) {
          return (a = typeof a == 'function' ? a : n), Sc(r, o, Uc(o), a)
        }
        function SE(r) {
          return dm(r) && r != +r
        }
        function EE(r) {
          if (o2(r)) throw new fe(u)
          return ig(r)
        }
        function xE(r) {
          return r === null
        }
        function CE(r) {
          return r == null
        }
        function dm(r) {
          return typeof r == 'number' || (qe(r) && Dt(r) == ar)
        }
        function sl(r) {
          if (!qe(r) || Dt(r) != Nn) return !1
          var o = ju(r)
          if (o === null) return !0
          var a = Le.call(o, 'constructor') && o.constructor
          return typeof a == 'function' && a instanceof a && Bu.call(a) == _w
        }
        var Yc = Ws ? Ie(Ws) : x_
        function kE(r) {
          return cm(r) && r >= -Q && r <= Q
        }
        var pm = Mi ? Ie(Mi) : C_
        function va(r) {
          return typeof r == 'string' || (!he(r) && qe(r) && Dt(r) == ki)
        }
        function on(r) {
          return typeof r == 'symbol' || (qe(r) && Dt(r) == zr)
        }
        var Uo = Lu ? Ie(Lu) : k_
        function TE(r) {
          return r === n
        }
        function AE(r) {
          return qe(r) && Ct(r) == Ur
        }
        function IE(r) {
          return qe(r) && Dt(r) == at
        }
        var PE = la(xc),
          RE = la(function (r, o) {
            return r <= o
          })
        function gm(r) {
          if (!r) return []
          if (Kt(r)) return va(r) ? zn(r) : Wt(r)
          if (Gs && r[Gs]) return uw(r[Gs]())
          var o = Ct(r),
            a = o == Ot ? fc : o == jt ? Fu : Bo
          return a(r)
        }
        function xr(r) {
          if (!r) return r === 0 ? r : 0
          if (((r = Cn(r)), r === nt || r === -nt)) {
            var o = r < 0 ? -1 : 1
            return o * oe
          }
          return r === r ? r : 0
        }
        function de(r) {
          var o = xr(r),
            a = o % 1
          return o === o ? (a ? o - a : o) : 0
        }
        function mm(r) {
          return r ? ji(de(r), 0, me) : 0
        }
        function Cn(r) {
          if (typeof r == 'number') return r
          if (on(r)) return se
          if (je(r)) {
            var o = typeof r.valueOf == 'function' ? r.valueOf() : r
            r = je(o) ? o + '' : o
          }
          if (typeof r != 'string') return r === 0 ? r : +r
          r = it(r)
          var a = cu.test(r)
          return a || Rs.test(r)
            ? Pu(r.slice(2), a ? 2 : 8)
            : Yn.test(r)
            ? se
            : +r
        }
        function vm(r) {
          return er(r, Gt(r))
        }
        function LE(r) {
          return r ? ji(de(r), -Q, Q) : r === 0 ? r : 0
        }
        function Pe(r) {
          return r == null ? '' : rn(r)
        }
        var OE = Mo(function (r, o) {
            if (il(o) || Kt(o)) {
              er(o, ct(o), r)
              return
            }
            for (var a in o) Le.call(o, a) && Js(r, a, o[a])
          }),
          ym = Mo(function (r, o) {
            er(o, Gt(o), r)
          }),
          ya = Mo(function (r, o, a, h) {
            er(o, Gt(o), r, h)
          }),
          NE = Mo(function (r, o, a, h) {
            er(o, ct(o), r, h)
          }),
          DE = _r(mc)
        function ME(r, o) {
          var a = Do(r)
          return o == null ? a : Xp(a, o)
        }
        var FE = ge(function (r, o) {
            r = Fe(r)
            var a = -1,
              h = o.length,
              m = h > 2 ? o[2] : n
            for (m && Mt(o[0], o[1], m) && (h = 1); ++a < h; )
              for (var _ = o[a], C = Gt(_), L = -1, F = C.length; ++L < F; ) {
                var K = C[L],
                  G = r[K]
                ;(G === n || (Bn(G, Lo[K]) && !Le.call(r, K))) && (r[K] = _[K])
              }
            return r
          }),
          zE = ge(function (r) {
            return r.push(n, Mg), Et(wm, n, r)
          })
        function UE(r, o) {
          return Ks(r, le(o, 3), Zn)
        }
        function BE(r, o) {
          return Ks(r, le(o, 3), yc)
        }
        function $E(r, o) {
          return r == null ? r : vc(r, le(o, 3), Gt)
        }
        function bE(r, o) {
          return r == null ? r : tg(r, le(o, 3), Gt)
        }
        function HE(r, o) {
          return r && Zn(r, le(o, 3))
        }
        function jE(r, o) {
          return r && yc(r, le(o, 3))
        }
        function VE(r) {
          return r == null ? [] : Zu(r, ct(r))
        }
        function WE(r) {
          return r == null ? [] : Zu(r, Gt(r))
        }
        function Xc(r, o, a) {
          var h = r == null ? n : Vi(r, o)
          return h === n ? a : h
        }
        function KE(r, o) {
          return r != null && Ug(r, o, g_)
        }
        function Qc(r, o) {
          return r != null && Ug(r, o, m_)
        }
        var GE = Rg(function (r, o, a) {
            o != null && typeof o.toString != 'function' && (o = $u.call(o)),
              (r[o] = a)
          }, Zc(qt)),
          qE = Rg(function (r, o, a) {
            o != null && typeof o.toString != 'function' && (o = $u.call(o)),
              Le.call(r, o) ? r[o].push(a) : (r[o] = [a])
          }, le),
          YE = ge(el)
        function ct(r) {
          return Kt(r) ? qp(r) : Ec(r)
        }
        function Gt(r) {
          return Kt(r) ? qp(r, !0) : T_(r)
        }
        function XE(r, o) {
          var a = {}
          return (
            (o = le(o, 3)),
            Zn(r, function (h, m, _) {
              yr(a, o(h, m, _), h)
            }),
            a
          )
        }
        function QE(r, o) {
          var a = {}
          return (
            (o = le(o, 3)),
            Zn(r, function (h, m, _) {
              yr(a, m, o(h, m, _))
            }),
            a
          )
        }
        var JE = Mo(function (r, o, a) {
            ea(r, o, a)
          }),
          wm = Mo(function (r, o, a, h) {
            ea(r, o, a, h)
          }),
          ZE = _r(function (r, o) {
            var a = {}
            if (r == null) return a
            var h = !1
            ;(o = Me(o, function (_) {
              return (_ = Qr(_, r)), h || (h = _.length > 1), _
            })),
              er(r, Fc(r), a),
              h && (a = Sn(a, O | E | B, G_))
            for (var m = o.length; m--; ) Ic(a, o[m])
            return a
          })
        function ex(r, o) {
          return _m(r, ga(le(o)))
        }
        var tx = _r(function (r, o) {
          return r == null ? {} : I_(r, o)
        })
        function _m(r, o) {
          if (r == null) return {}
          var a = Me(Fc(r), function (h) {
            return [h]
          })
          return (
            (o = le(o)),
            cg(r, a, function (h, m) {
              return o(h, m[0])
            })
          )
        }
        function nx(r, o, a) {
          o = Qr(o, r)
          var h = -1,
            m = o.length
          for (m || ((m = 1), (r = n)); ++h < m; ) {
            var _ = r == null ? n : r[tr(o[h])]
            _ === n && ((h = m), (_ = a)), (r = Er(_) ? _.call(r) : _)
          }
          return r
        }
        function rx(r, o, a) {
          return r == null ? r : nl(r, o, a)
        }
        function ix(r, o, a, h) {
          return (
            (h = typeof h == 'function' ? h : n), r == null ? r : nl(r, o, a, h)
          )
        }
        var Sm = Ng(ct),
          Em = Ng(Gt)
        function ox(r, o, a) {
          var h = he(r),
            m = h || Zr(r) || Uo(r)
          if (((o = le(o, 4)), a == null)) {
            var _ = r && r.constructor
            m
              ? (a = h ? new _() : [])
              : je(r)
              ? (a = Er(_) ? Do(ju(r)) : {})
              : (a = {})
          }
          return (
            (m ? Nt : Zn)(r, function (C, L, F) {
              return o(a, C, L, F)
            }),
            a
          )
        }
        function sx(r, o) {
          return r == null ? !0 : Ic(r, o)
        }
        function lx(r, o, a) {
          return r == null ? r : mg(r, o, Lc(a))
        }
        function ux(r, o, a, h) {
          return (
            (h = typeof h == 'function' ? h : n),
            r == null ? r : mg(r, o, Lc(a), h)
          )
        }
        function Bo(r) {
          return r == null ? [] : Jn(r, ct(r))
        }
        function ax(r) {
          return r == null ? [] : Jn(r, Gt(r))
        }
        function fx(r, o, a) {
          return (
            a === n && ((a = o), (o = n)),
            a !== n && ((a = Cn(a)), (a = a === a ? a : 0)),
            o !== n && ((o = Cn(o)), (o = o === o ? o : 0)),
            ji(Cn(r), o, a)
          )
        }
        function cx(r, o, a) {
          return (
            (o = xr(o)),
            a === n ? ((a = o), (o = 0)) : (a = xr(a)),
            (r = Cn(r)),
            v_(r, o, a)
          )
        }
        function hx(r, o, a) {
          if (
            (a && typeof a != 'boolean' && Mt(r, o, a) && (o = a = n),
            a === n &&
              (typeof o == 'boolean'
                ? ((a = o), (o = n))
                : typeof r == 'boolean' && ((a = r), (r = n))),
            r === n && o === n
              ? ((r = 0), (o = 1))
              : ((r = xr(r)), o === n ? ((o = r), (r = 0)) : (o = xr(o))),
            r > o)
          ) {
            var h = r
            ;(r = o), (o = h)
          }
          if (a || r % 1 || o % 1) {
            var m = Kp()
            return xt(r + m * (o - r + ac('1e-' + ((m + '').length - 1))), o)
          }
          return kc(r, o)
        }
        var dx = Fo(function (r, o, a) {
          return (o = o.toLowerCase()), r + (a ? xm(o) : o)
        })
        function xm(r) {
          return Jc(Pe(r).toLowerCase())
        }
        function Cm(r) {
          return (r = Pe(r)), r && r.replace(du, rw).replace(oc, '')
        }
        function px(r, o, a) {
          ;(r = Pe(r)), (o = rn(o))
          var h = r.length
          a = a === n ? h : ji(de(a), 0, h)
          var m = a
          return (a -= o.length), a >= 0 && r.slice(a, m) == o
        }
        function gx(r) {
          return (r = Pe(r)), r && $r.test(r) ? r.replace(vo, iw) : r
        }
        function mx(r) {
          return (r = Pe(r)), r && Ii.test(r) ? r.replace(yo, '\\$&') : r
        }
        var vx = Fo(function (r, o, a) {
            return r + (a ? '-' : '') + o.toLowerCase()
          }),
          yx = Fo(function (r, o, a) {
            return r + (a ? ' ' : '') + o.toLowerCase()
          }),
          wx = Ag('toLowerCase')
        function _x(r, o, a) {
          ;(r = Pe(r)), (o = de(o))
          var h = o ? Po(r) : 0
          if (!o || h >= o) return r
          var m = (o - h) / 2
          return sa(Gu(m), a) + r + sa(Ku(m), a)
        }
        function Sx(r, o, a) {
          ;(r = Pe(r)), (o = de(o))
          var h = o ? Po(r) : 0
          return o && h < o ? r + sa(o - h, a) : r
        }
        function Ex(r, o, a) {
          ;(r = Pe(r)), (o = de(o))
          var h = o ? Po(r) : 0
          return o && h < o ? sa(o - h, a) + r : r
        }
        function xx(r, o, a) {
          return (
            a || o == null ? (o = 0) : o && (o = +o),
            Rw(Pe(r).replace(hr, ''), o || 0)
          )
        }
        function Cx(r, o, a) {
          return (
            (a ? Mt(r, o, a) : o === n) ? (o = 1) : (o = de(o)), Tc(Pe(r), o)
          )
        }
        function kx() {
          var r = arguments,
            o = Pe(r[0])
          return r.length < 3 ? o : o.replace(r[1], r[2])
        }
        var Tx = Fo(function (r, o, a) {
          return r + (a ? '_' : '') + o.toLowerCase()
        })
        function Ax(r, o, a) {
          return (
            a && typeof a != 'number' && Mt(r, o, a) && (o = a = n),
            (a = a === n ? me : a >>> 0),
            a
              ? ((r = Pe(r)),
                r &&
                (typeof o == 'string' || (o != null && !Yc(o))) &&
                ((o = rn(o)), !o && Io(r))
                  ? Jr(zn(r), 0, a)
                  : r.split(o, a))
              : []
          )
        }
        var Ix = Fo(function (r, o, a) {
          return r + (a ? ' ' : '') + Jc(o)
        })
        function Px(r, o, a) {
          return (
            (r = Pe(r)),
            (a = a == null ? 0 : ji(de(a), 0, r.length)),
            (o = rn(o)),
            r.slice(a, a + o.length) == o
          )
        }
        function Rx(r, o, a) {
          var h = v.templateSettings
          a && Mt(r, o, a) && (o = n), (r = Pe(r)), (o = ya({}, o, h, Dg))
          var m = ya({}, o.imports, h.imports, Dg),
            _ = ct(m),
            C = Jn(m, _),
            L,
            F,
            K = 0,
            G = o.interpolate || Ri,
            Y = "__p += '",
            te = cc(
              (o.escape || Ri).source +
                '|' +
                G.source +
                '|' +
                (G === As ? Ps : Ri).source +
                '|' +
                (o.evaluate || Ri).source +
                '|$',
              'g'
            ),
            ie =
              '//# sourceURL=' +
              (Le.call(o, 'sourceURL')
                ? (o.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++Au + ']') +
              `
`
          r.replace(te, function (ae, ve, _e, sn, Ft, ln) {
            return (
              _e || (_e = sn),
              (Y += r.slice(K, ln).replace(ec, ow)),
              ve &&
                ((L = !0),
                (Y +=
                  `' +
__e(` +
                  ve +
                  `) +
'`)),
              Ft &&
                ((F = !0),
                (Y +=
                  `';
` +
                  Ft +
                  `;
__p += '`)),
              _e &&
                (Y +=
                  `' +
((__t = (` +
                  _e +
                  `)) == null ? '' : __t) +
'`),
              (K = ln + ae.length),
              ae
            )
          }),
            (Y += `';
`)
          var ue = Le.call(o, 'variable') && o.variable
          if (!ue)
            Y =
              `with (obj) {
` +
              Y +
              `
}
`
          else if (Is.test(ue)) throw new fe(d)
          ;(Y = (F ? Y.replace(Cs, '') : Y)
            .replace(uu, '$1')
            .replace(qf, '$1;')),
            (Y =
              'function(' +
              (ue || 'obj') +
              `) {
` +
              (ue
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (L ? ', __e = _.escape' : '') +
              (F
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Y +
              `return __p
}`)
          var pe = Tm(function () {
            return Ae(_, ie + 'return ' + Y).apply(n, C)
          })
          if (((pe.source = Y), qc(pe))) throw pe
          return pe
        }
        function Lx(r) {
          return Pe(r).toLowerCase()
        }
        function Ox(r) {
          return Pe(r).toUpperCase()
        }
        function Nx(r, o, a) {
          if (((r = Pe(r)), r && (a || o === n))) return it(r)
          if (!r || !(o = rn(o))) return r
          var h = zn(r),
            m = zn(o),
            _ = Bi(h, m),
            C = Ao(h, m) + 1
          return Jr(h, _, C).join('')
        }
        function Dx(r, o, a) {
          if (((r = Pe(r)), r && (a || o === n))) return r.slice(0, Bp(r) + 1)
          if (!r || !(o = rn(o))) return r
          var h = zn(r),
            m = Ao(h, zn(o)) + 1
          return Jr(h, 0, m).join('')
        }
        function Mx(r, o, a) {
          if (((r = Pe(r)), r && (a || o === n))) return r.replace(hr, '')
          if (!r || !(o = rn(o))) return r
          var h = zn(r),
            m = Bi(h, zn(o))
          return Jr(h, m).join('')
        }
        function Fx(r, o) {
          var a = I,
            h = D
          if (je(o)) {
            var m = 'separator' in o ? o.separator : m
            ;(a = 'length' in o ? de(o.length) : a),
              (h = 'omission' in o ? rn(o.omission) : h)
          }
          r = Pe(r)
          var _ = r.length
          if (Io(r)) {
            var C = zn(r)
            _ = C.length
          }
          if (a >= _) return r
          var L = a - Po(h)
          if (L < 1) return h
          var F = C ? Jr(C, 0, L).join('') : r.slice(0, L)
          if (m === n) return F + h
          if ((C && (L += F.length - L), Yc(m))) {
            if (r.slice(L).search(m)) {
              var K,
                G = F
              for (
                m.global || (m = cc(m.source, Pe(Pi.exec(m)) + 'g')),
                  m.lastIndex = 0;
                (K = m.exec(G));

              )
                var Y = K.index
              F = F.slice(0, Y === n ? L : Y)
            }
          } else if (r.indexOf(rn(m), L) != L) {
            var te = F.lastIndexOf(m)
            te > -1 && (F = F.slice(0, te))
          }
          return F + h
        }
        function zx(r) {
          return (r = Pe(r)), r && ks.test(r) ? r.replace(Br, hw) : r
        }
        var Ux = Fo(function (r, o, a) {
            return r + (a ? ' ' : '') + o.toUpperCase()
          }),
          Jc = Ag('toUpperCase')
        function km(r, o, a) {
          return (
            (r = Pe(r)),
            (o = a ? n : o),
            o === n ? (lw(r) ? gw(r) : Vt(r)) : r.match(o) || []
          )
        }
        var Tm = ge(function (r, o) {
            try {
              return Et(r, n, o)
            } catch (a) {
              return qc(a) ? a : new fe(a)
            }
          }),
          Bx = _r(function (r, o) {
            return (
              Nt(o, function (a) {
                ;(a = tr(a)), yr(r, a, Kc(r[a], r))
              }),
              r
            )
          })
        function $x(r) {
          var o = r == null ? 0 : r.length,
            a = le()
          return (
            (r = o
              ? Me(r, function (h) {
                  if (typeof h[1] != 'function') throw new wn(f)
                  return [a(h[0]), h[1]]
                })
              : []),
            ge(function (h) {
              for (var m = -1; ++m < o; ) {
                var _ = r[m]
                if (Et(_[0], this, h)) return Et(_[1], this, h)
              }
            })
          )
        }
        function bx(r) {
          return h_(Sn(r, O))
        }
        function Zc(r) {
          return function () {
            return r
          }
        }
        function Hx(r, o) {
          return r == null || r !== r ? o : r
        }
        var jx = Pg(),
          Vx = Pg(!0)
        function qt(r) {
          return r
        }
        function eh(r) {
          return og(typeof r == 'function' ? r : Sn(r, O))
        }
        function Wx(r) {
          return lg(Sn(r, O))
        }
        function Kx(r, o) {
          return ug(r, Sn(o, O))
        }
        var Gx = ge(function (r, o) {
            return function (a) {
              return el(a, r, o)
            }
          }),
          qx = ge(function (r, o) {
            return function (a) {
              return el(r, a, o)
            }
          })
        function th(r, o, a) {
          var h = ct(o),
            m = Zu(o, h)
          a == null &&
            !(je(o) && (m.length || !h.length)) &&
            ((a = o), (o = r), (r = this), (m = Zu(o, ct(o))))
          var _ = !(je(a) && 'chain' in a) || !!a.chain,
            C = Er(r)
          return (
            Nt(m, function (L) {
              var F = o[L]
              ;(r[L] = F),
                C &&
                  (r.prototype[L] = function () {
                    var K = this.__chain__
                    if (_ || K) {
                      var G = r(this.__wrapped__),
                        Y = (G.__actions__ = Wt(this.__actions__))
                      return (
                        Y.push({ func: F, args: arguments, thisArg: r }),
                        (G.__chain__ = K),
                        G
                      )
                    }
                    return F.apply(r, Mn([this.value()], arguments))
                  })
            }),
            r
          )
        }
        function Yx() {
          return Ge._ === this && (Ge._ = Sw), this
        }
        function nh() {}
        function Xx(r) {
          return (
            (r = de(r)),
            ge(function (o) {
              return ag(o, r)
            })
          )
        }
        var Qx = Nc(Me),
          Jx = Nc(ko),
          Zx = Nc(To)
        function Am(r) {
          return $c(r) ? w(tr(r)) : P_(r)
        }
        function eC(r) {
          return function (o) {
            return r == null ? n : Vi(r, o)
          }
        }
        var tC = Lg(),
          nC = Lg(!0)
        function rh() {
          return []
        }
        function ih() {
          return !1
        }
        function rC() {
          return {}
        }
        function iC() {
          return ''
        }
        function oC() {
          return !0
        }
        function sC(r, o) {
          if (((r = de(r)), r < 1 || r > Q)) return []
          var a = me,
            h = xt(r, me)
          ;(o = le(o)), (r -= me)
          for (var m = Je(h, o); ++a < r; ) o(a)
          return m
        }
        function lC(r) {
          return he(r) ? Me(r, tr) : on(r) ? [r] : Wt(Gg(Pe(r)))
        }
        function uC(r) {
          var o = ++ww
          return Pe(r) + o
        }
        var aC = oa(function (r, o) {
            return r + o
          }, 0),
          fC = Dc('ceil'),
          cC = oa(function (r, o) {
            return r / o
          }, 1),
          hC = Dc('floor')
        function dC(r) {
          return r && r.length ? Ju(r, qt, wc) : n
        }
        function pC(r, o) {
          return r && r.length ? Ju(r, le(o, 2), wc) : n
        }
        function gC(r) {
          return p(r, qt)
        }
        function mC(r, o) {
          return p(r, le(o, 2))
        }
        function vC(r) {
          return r && r.length ? Ju(r, qt, xc) : n
        }
        function yC(r, o) {
          return r && r.length ? Ju(r, le(o, 2), xc) : n
        }
        var wC = oa(function (r, o) {
            return r * o
          }, 1),
          _C = Dc('round'),
          SC = oa(function (r, o) {
            return r - o
          }, 0)
        function EC(r) {
          return r && r.length ? Te(r, qt) : 0
        }
        function xC(r, o) {
          return r && r.length ? Te(r, le(o, 2)) : 0
        }
        return (
          (v.after = WS),
          (v.ary = im),
          (v.assign = OE),
          (v.assignIn = ym),
          (v.assignInWith = ya),
          (v.assignWith = NE),
          (v.at = DE),
          (v.before = om),
          (v.bind = Kc),
          (v.bindAll = Bx),
          (v.bindKey = sm),
          (v.castArray = rE),
          (v.chain = tm),
          (v.chunk = h2),
          (v.compact = d2),
          (v.concat = p2),
          (v.cond = $x),
          (v.conforms = bx),
          (v.constant = Zc),
          (v.countBy = ES),
          (v.create = ME),
          (v.curry = lm),
          (v.curryRight = um),
          (v.debounce = am),
          (v.defaults = FE),
          (v.defaultsDeep = zE),
          (v.defer = KS),
          (v.delay = GS),
          (v.difference = g2),
          (v.differenceBy = m2),
          (v.differenceWith = v2),
          (v.drop = y2),
          (v.dropRight = w2),
          (v.dropRightWhile = _2),
          (v.dropWhile = S2),
          (v.fill = E2),
          (v.filter = CS),
          (v.flatMap = AS),
          (v.flatMapDeep = IS),
          (v.flatMapDepth = PS),
          (v.flatten = Qg),
          (v.flattenDeep = x2),
          (v.flattenDepth = C2),
          (v.flip = qS),
          (v.flow = jx),
          (v.flowRight = Vx),
          (v.fromPairs = k2),
          (v.functions = VE),
          (v.functionsIn = WE),
          (v.groupBy = RS),
          (v.initial = A2),
          (v.intersection = I2),
          (v.intersectionBy = P2),
          (v.intersectionWith = R2),
          (v.invert = GE),
          (v.invertBy = qE),
          (v.invokeMap = OS),
          (v.iteratee = eh),
          (v.keyBy = NS),
          (v.keys = ct),
          (v.keysIn = Gt),
          (v.map = ha),
          (v.mapKeys = XE),
          (v.mapValues = QE),
          (v.matches = Wx),
          (v.matchesProperty = Kx),
          (v.memoize = pa),
          (v.merge = JE),
          (v.mergeWith = wm),
          (v.method = Gx),
          (v.methodOf = qx),
          (v.mixin = th),
          (v.negate = ga),
          (v.nthArg = Xx),
          (v.omit = ZE),
          (v.omitBy = ex),
          (v.once = YS),
          (v.orderBy = DS),
          (v.over = Qx),
          (v.overArgs = XS),
          (v.overEvery = Jx),
          (v.overSome = Zx),
          (v.partial = Gc),
          (v.partialRight = fm),
          (v.partition = MS),
          (v.pick = tx),
          (v.pickBy = _m),
          (v.property = Am),
          (v.propertyOf = eC),
          (v.pull = D2),
          (v.pullAll = Zg),
          (v.pullAllBy = M2),
          (v.pullAllWith = F2),
          (v.pullAt = z2),
          (v.range = tC),
          (v.rangeRight = nC),
          (v.rearg = QS),
          (v.reject = US),
          (v.remove = U2),
          (v.rest = JS),
          (v.reverse = Vc),
          (v.sampleSize = $S),
          (v.set = rx),
          (v.setWith = ix),
          (v.shuffle = bS),
          (v.slice = B2),
          (v.sortBy = VS),
          (v.sortedUniq = K2),
          (v.sortedUniqBy = G2),
          (v.split = Ax),
          (v.spread = ZS),
          (v.tail = q2),
          (v.take = Y2),
          (v.takeRight = X2),
          (v.takeRightWhile = Q2),
          (v.takeWhile = J2),
          (v.tap = dS),
          (v.throttle = eE),
          (v.thru = ca),
          (v.toArray = gm),
          (v.toPairs = Sm),
          (v.toPairsIn = Em),
          (v.toPath = lC),
          (v.toPlainObject = vm),
          (v.transform = ox),
          (v.unary = tE),
          (v.union = Z2),
          (v.unionBy = eS),
          (v.unionWith = tS),
          (v.uniq = nS),
          (v.uniqBy = rS),
          (v.uniqWith = iS),
          (v.unset = sx),
          (v.unzip = Wc),
          (v.unzipWith = em),
          (v.update = lx),
          (v.updateWith = ux),
          (v.values = Bo),
          (v.valuesIn = ax),
          (v.without = oS),
          (v.words = km),
          (v.wrap = nE),
          (v.xor = sS),
          (v.xorBy = lS),
          (v.xorWith = uS),
          (v.zip = aS),
          (v.zipObject = fS),
          (v.zipObjectDeep = cS),
          (v.zipWith = hS),
          (v.entries = Sm),
          (v.entriesIn = Em),
          (v.extend = ym),
          (v.extendWith = ya),
          th(v, v),
          (v.add = aC),
          (v.attempt = Tm),
          (v.camelCase = dx),
          (v.capitalize = xm),
          (v.ceil = fC),
          (v.clamp = fx),
          (v.clone = iE),
          (v.cloneDeep = sE),
          (v.cloneDeepWith = lE),
          (v.cloneWith = oE),
          (v.conformsTo = uE),
          (v.deburr = Cm),
          (v.defaultTo = Hx),
          (v.divide = cC),
          (v.endsWith = px),
          (v.eq = Bn),
          (v.escape = gx),
          (v.escapeRegExp = mx),
          (v.every = xS),
          (v.find = kS),
          (v.findIndex = Yg),
          (v.findKey = UE),
          (v.findLast = TS),
          (v.findLastIndex = Xg),
          (v.findLastKey = BE),
          (v.floor = hC),
          (v.forEach = nm),
          (v.forEachRight = rm),
          (v.forIn = $E),
          (v.forInRight = bE),
          (v.forOwn = HE),
          (v.forOwnRight = jE),
          (v.get = Xc),
          (v.gt = aE),
          (v.gte = fE),
          (v.has = KE),
          (v.hasIn = Qc),
          (v.head = Jg),
          (v.identity = qt),
          (v.includes = LS),
          (v.indexOf = T2),
          (v.inRange = cx),
          (v.invoke = YE),
          (v.isArguments = Gi),
          (v.isArray = he),
          (v.isArrayBuffer = cE),
          (v.isArrayLike = Kt),
          (v.isArrayLikeObject = Ze),
          (v.isBoolean = hE),
          (v.isBuffer = Zr),
          (v.isDate = dE),
          (v.isElement = pE),
          (v.isEmpty = gE),
          (v.isEqual = mE),
          (v.isEqualWith = vE),
          (v.isError = qc),
          (v.isFinite = yE),
          (v.isFunction = Er),
          (v.isInteger = cm),
          (v.isLength = ma),
          (v.isMap = hm),
          (v.isMatch = wE),
          (v.isMatchWith = _E),
          (v.isNaN = SE),
          (v.isNative = EE),
          (v.isNil = CE),
          (v.isNull = xE),
          (v.isNumber = dm),
          (v.isObject = je),
          (v.isObjectLike = qe),
          (v.isPlainObject = sl),
          (v.isRegExp = Yc),
          (v.isSafeInteger = kE),
          (v.isSet = pm),
          (v.isString = va),
          (v.isSymbol = on),
          (v.isTypedArray = Uo),
          (v.isUndefined = TE),
          (v.isWeakMap = AE),
          (v.isWeakSet = IE),
          (v.join = L2),
          (v.kebabCase = vx),
          (v.last = xn),
          (v.lastIndexOf = O2),
          (v.lowerCase = yx),
          (v.lowerFirst = wx),
          (v.lt = PE),
          (v.lte = RE),
          (v.max = dC),
          (v.maxBy = pC),
          (v.mean = gC),
          (v.meanBy = mC),
          (v.min = vC),
          (v.minBy = yC),
          (v.stubArray = rh),
          (v.stubFalse = ih),
          (v.stubObject = rC),
          (v.stubString = iC),
          (v.stubTrue = oC),
          (v.multiply = wC),
          (v.nth = N2),
          (v.noConflict = Yx),
          (v.noop = nh),
          (v.now = da),
          (v.pad = _x),
          (v.padEnd = Sx),
          (v.padStart = Ex),
          (v.parseInt = xx),
          (v.random = hx),
          (v.reduce = FS),
          (v.reduceRight = zS),
          (v.repeat = Cx),
          (v.replace = kx),
          (v.result = nx),
          (v.round = _C),
          (v.runInContext = M),
          (v.sample = BS),
          (v.size = HS),
          (v.snakeCase = Tx),
          (v.some = jS),
          (v.sortedIndex = $2),
          (v.sortedIndexBy = b2),
          (v.sortedIndexOf = H2),
          (v.sortedLastIndex = j2),
          (v.sortedLastIndexBy = V2),
          (v.sortedLastIndexOf = W2),
          (v.startCase = Ix),
          (v.startsWith = Px),
          (v.subtract = SC),
          (v.sum = EC),
          (v.sumBy = xC),
          (v.template = Rx),
          (v.times = sC),
          (v.toFinite = xr),
          (v.toInteger = de),
          (v.toLength = mm),
          (v.toLower = Lx),
          (v.toNumber = Cn),
          (v.toSafeInteger = LE),
          (v.toString = Pe),
          (v.toUpper = Ox),
          (v.trim = Nx),
          (v.trimEnd = Dx),
          (v.trimStart = Mx),
          (v.truncate = Fx),
          (v.unescape = zx),
          (v.uniqueId = uC),
          (v.upperCase = Ux),
          (v.upperFirst = Jc),
          (v.each = nm),
          (v.eachRight = rm),
          (v.first = Jg),
          th(
            v,
            (function () {
              var r = {}
              return (
                Zn(v, function (o, a) {
                  Le.call(v.prototype, a) || (r[a] = o)
                }),
                r
              )
            })(),
            { chain: !1 }
          ),
          (v.VERSION = i),
          Nt(
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
          Nt(['drop', 'take'], function (r, o) {
            ;(ye.prototype[r] = function (a) {
              a = a === n ? 1 : st(de(a), 0)
              var h = this.__filtered__ && !o ? new ye(this) : this.clone()
              return (
                h.__filtered__
                  ? (h.__takeCount__ = xt(a, h.__takeCount__))
                  : h.__views__.push({
                      size: xt(a, me),
                      type: r + (h.__dir__ < 0 ? 'Right' : ''),
                    }),
                h
              )
            }),
              (ye.prototype[r + 'Right'] = function (a) {
                return this.reverse()[r](a).reverse()
              })
          }),
          Nt(['filter', 'map', 'takeWhile'], function (r, o) {
            var a = o + 1,
              h = a == Xe || a == pn
            ye.prototype[r] = function (m) {
              var _ = this.clone()
              return (
                _.__iteratees__.push({ iteratee: le(m, 3), type: a }),
                (_.__filtered__ = _.__filtered__ || h),
                _
              )
            }
          }),
          Nt(['head', 'last'], function (r, o) {
            var a = 'take' + (o ? 'Right' : '')
            ye.prototype[r] = function () {
              return this[a](1).value()[0]
            }
          }),
          Nt(['initial', 'tail'], function (r, o) {
            var a = 'drop' + (o ? '' : 'Right')
            ye.prototype[r] = function () {
              return this.__filtered__ ? new ye(this) : this[a](1)
            }
          }),
          (ye.prototype.compact = function () {
            return this.filter(qt)
          }),
          (ye.prototype.find = function (r) {
            return this.filter(r).head()
          }),
          (ye.prototype.findLast = function (r) {
            return this.reverse().find(r)
          }),
          (ye.prototype.invokeMap = ge(function (r, o) {
            return typeof r == 'function'
              ? new ye(this)
              : this.map(function (a) {
                  return el(a, r, o)
                })
          })),
          (ye.prototype.reject = function (r) {
            return this.filter(ga(le(r)))
          }),
          (ye.prototype.slice = function (r, o) {
            r = de(r)
            var a = this
            return a.__filtered__ && (r > 0 || o < 0)
              ? new ye(a)
              : (r < 0 ? (a = a.takeRight(-r)) : r && (a = a.drop(r)),
                o !== n &&
                  ((o = de(o)), (a = o < 0 ? a.dropRight(-o) : a.take(o - r))),
                a)
          }),
          (ye.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse()
          }),
          (ye.prototype.toArray = function () {
            return this.take(me)
          }),
          Zn(ye.prototype, function (r, o) {
            var a = /^(?:filter|find|map|reject)|While$/.test(o),
              h = /^(?:head|last)$/.test(o),
              m = v[h ? 'take' + (o == 'last' ? 'Right' : '') : o],
              _ = h || /^find/.test(o)
            m &&
              (v.prototype[o] = function () {
                var C = this.__wrapped__,
                  L = h ? [1] : arguments,
                  F = C instanceof ye,
                  K = L[0],
                  G = F || he(C),
                  Y = function (ve) {
                    var _e = m.apply(v, Mn([ve], L))
                    return h && te ? _e[0] : _e
                  }
                G &&
                  a &&
                  typeof K == 'function' &&
                  K.length != 1 &&
                  (F = G = !1)
                var te = this.__chain__,
                  ie = !!this.__actions__.length,
                  ue = _ && !te,
                  pe = F && !ie
                if (!_ && G) {
                  C = pe ? C : new ye(this)
                  var ae = r.apply(C, L)
                  return (
                    ae.__actions__.push({ func: ca, args: [Y], thisArg: n }),
                    new _n(ae, te)
                  )
                }
                return ue && pe
                  ? r.apply(this, L)
                  : ((ae = this.thru(Y)),
                    ue ? (h ? ae.value()[0] : ae.value()) : ae)
              })
          }),
          Nt(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (r) {
              var o = zu[r],
                a = /^(?:push|sort|unshift)$/.test(r) ? 'tap' : 'thru',
                h = /^(?:pop|shift)$/.test(r)
              v.prototype[r] = function () {
                var m = arguments
                if (h && !this.__chain__) {
                  var _ = this.value()
                  return o.apply(he(_) ? _ : [], m)
                }
                return this[a](function (C) {
                  return o.apply(he(C) ? C : [], m)
                })
              }
            }
          ),
          Zn(ye.prototype, function (r, o) {
            var a = v[o]
            if (a) {
              var h = a.name + ''
              Le.call(No, h) || (No[h] = []), No[h].push({ name: o, func: a })
            }
          }),
          (No[ia(n, R).name] = [{ name: 'wrapper', func: n }]),
          (ye.prototype.clone = zw),
          (ye.prototype.reverse = Uw),
          (ye.prototype.value = Bw),
          (v.prototype.at = pS),
          (v.prototype.chain = gS),
          (v.prototype.commit = mS),
          (v.prototype.next = vS),
          (v.prototype.plant = wS),
          (v.prototype.reverse = _S),
          (v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = SS),
          (v.prototype.first = v.prototype.head),
          Gs && (v.prototype[Gs] = yS),
          v
        )
      },
      Ro = mw()
    gt ? (((gt.exports = Ro)._ = Ro), (xo._ = Ro)) : (Ge._ = Ro)
  }).call(ll)
})(Tf, Tf.exports)
Tf.exports
const aI = () =>
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
          children: "We're working hard to bring you something amazing!..",
        }),
      ],
    }),
  })
function fI() {
  return oi.jsx(p4, { children: oi.jsx(aI, {}) })
}
const ce = (e) => typeof e == 'string',
  ml = () => {
    let e, t
    const n = new Promise((i, s) => {
      ;(e = i), (t = s)
    })
    return (n.resolve = e), (n.reject = t), n
  },
  av = (e) => (e == null ? '' : '' + e),
  cI = (e, t, n) => {
    e.forEach((i) => {
      t[i] && (n[i] = t[i])
    })
  },
  hI = /###/g,
  fv = (e) => (e && e.indexOf('###') > -1 ? e.replace(hI, '.') : e),
  cv = (e) => !e || ce(e),
  Ol = (e, t, n) => {
    const i = ce(t) ? t.split('.') : t
    let s = 0
    for (; s < i.length - 1; ) {
      if (cv(e)) return {}
      const u = fv(i[s])
      !e[u] && n && (e[u] = new n()),
        Object.prototype.hasOwnProperty.call(e, u) ? (e = e[u]) : (e = {}),
        ++s
    }
    return cv(e) ? {} : { obj: e, k: fv(i[s]) }
  },
  hv = (e, t, n) => {
    const { obj: i, k: s } = Ol(e, t, Object)
    if (i !== void 0 || t.length === 1) {
      i[s] = n
      return
    }
    let u = t[t.length - 1],
      f = t.slice(0, t.length - 1),
      d = Ol(e, f, Object)
    for (; d.obj === void 0 && f.length; )
      (u = `${f[f.length - 1]}.${u}`),
        (f = f.slice(0, f.length - 1)),
        (d = Ol(e, f, Object)),
        d && d.obj && typeof d.obj[`${d.k}.${u}`] < 'u' && (d.obj = void 0)
    d.obj[`${d.k}.${u}`] = n
  },
  dI = (e, t, n, i) => {
    const { obj: s, k: u } = Ol(e, t, Object)
    ;(s[u] = s[u] || []), s[u].push(n)
  },
  Af = (e, t) => {
    const { obj: n, k: i } = Ol(e, t)
    if (n) return n[i]
  },
  pI = (e, t, n) => {
    const i = Af(e, n)
    return i !== void 0 ? i : Af(t, n)
  },
  ew = (e, t, n) => {
    for (const i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in e
          ? ce(e[i]) ||
            e[i] instanceof String ||
            ce(t[i]) ||
            t[i] instanceof String
            ? n && (e[i] = t[i])
            : ew(e[i], t[i], n)
          : (e[i] = t[i]))
    return e
  },
  bo = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var gI = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const mI = (e) => (ce(e) ? e.replace(/[&<>"'\/]/g, (t) => gI[t]) : e)
class vI {
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
const yI = [' ', ',', '?', '!', ';'],
  wI = new vI(20),
  _I = (e, t, n) => {
    ;(t = t || ''), (n = n || '')
    const i = yI.filter((f) => t.indexOf(f) < 0 && n.indexOf(f) < 0)
    if (i.length === 0) return !0
    const s = wI.getRegExp(
      `(${i.map((f) => (f === '?' ? '\\?' : f)).join('|')})`
    )
    let u = !s.test(e)
    if (!u) {
      const f = e.indexOf(n)
      f > 0 && !s.test(e.substring(0, f)) && (u = !0)
    }
    return u
  },
  Bd = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!e) return
    if (e[t]) return e[t]
    const i = t.split(n)
    let s = e
    for (let u = 0; u < i.length; ) {
      if (!s || typeof s != 'object') return
      let f,
        d = ''
      for (let g = u; g < i.length; ++g)
        if ((g !== u && (d += n), (d += i[g]), (f = s[d]), f !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof f) > -1 &&
            g < i.length - 1
          )
            continue
          u += g - u + 1
          break
        }
      s = f
    }
    return s
  },
  If = (e) => e && e.replace('_', '-'),
  SI = {
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
class Pf {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || SI),
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
  forward(t, n, i, s) {
    return s && !this.debug
      ? null
      : (ce(t[0]) && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[n](t))
  }
  create(t) {
    return new Pf(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Pf(this.logger, t)
    )
  }
}
var or = new Pf()
class Gf {
  constructor() {
    this.observers = {}
  }
  on(t, n) {
    return (
      t.split(' ').forEach((i) => {
        this.observers[i] || (this.observers[i] = new Map())
        const s = this.observers[i].get(n) || 0
        this.observers[i].set(n, s + 1)
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
      var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1;
      s < n;
      s++
    )
      i[s - 1] = arguments[s]
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((f) => {
        let [d, g] = f
        for (let y = 0; y < g; y++) d(...i)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((f) => {
          let [d, g] = f
          for (let y = 0; y < g; y++) d.apply(d, [t, ...i])
        })
  }
}
class dv extends Gf {
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
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const u =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      f =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure
    let d
    t.indexOf('.') > -1
      ? (d = t.split('.'))
      : ((d = [t, n]),
        i &&
          (Array.isArray(i)
            ? d.push(...i)
            : ce(i) && u
            ? d.push(...i.split(u))
            : d.push(i)))
    const g = Af(this.data, d)
    return (
      !g &&
        !n &&
        !i &&
        t.indexOf('.') > -1 &&
        ((t = d[0]), (n = d[1]), (i = d.slice(2).join('.'))),
      g || !f || !ce(i)
        ? g
        : Bd(this.data && this.data[t] && this.data[t][n], i, u)
    )
  }
  addResource(t, n, i, s) {
    let u =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const f =
      u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator
    let d = [t, n]
    i && (d = d.concat(f ? i.split(f) : i)),
      t.indexOf('.') > -1 && ((d = t.split('.')), (s = n), (n = d[1])),
      this.addNamespaces(n),
      hv(this.data, d, s),
      u.silent || this.emit('added', t, n, i, s)
  }
  addResources(t, n, i) {
    let s =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const u in i)
      (ce(i[u]) || Array.isArray(i[u])) &&
        this.addResource(t, n, u, i[u], { silent: !0 })
    s.silent || this.emit('added', t, n, i)
  }
  addResourceBundle(t, n, i, s, u) {
    let f =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      d = [t, n]
    t.indexOf('.') > -1 && ((d = t.split('.')), (s = i), (i = n), (n = d[1])),
      this.addNamespaces(n)
    let g = Af(this.data, d) || {}
    f.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      s ? ew(g, i, u) : (g = { ...g, ...i }),
      hv(this.data, d, g),
      f.silent || this.emit('added', t, n, i)
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
      (s) => n[s] && Object.keys(n[s]).length > 0
    )
  }
  toJSON() {
    return this.data
  }
}
var tw = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e
  },
  handle(e, t, n, i, s) {
    return (
      e.forEach((u) => {
        this.processors[u] && (t = this.processors[u].process(t, n, i, s))
      }),
      t
    )
  },
}
const pv = {}
class Rf extends Gf {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      cI(
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
      (this.logger = or.create('translator'))
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
    const s =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
    let u = n.ns || this.options.defaultNS || []
    const f = i && t.indexOf(i) > -1,
      d =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !_I(t, i, s)
    if (f && !d) {
      const g = t.match(this.interpolator.nestingRegexp)
      if (g && g.length > 0) return { key: t, namespaces: u }
      const y = t.split(i)
      ;(i !== s || (i === s && this.options.ns.indexOf(y[0]) > -1)) &&
        (u = y.shift()),
        (t = y.join(s))
    }
    return ce(u) && (u = [u]), { key: t, namespaces: u }
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
    const s =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      u =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: f, namespaces: d } = this.extractFromKey(t[t.length - 1], n),
      g = d[d.length - 1],
      y = n.lng || this.language,
      P = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (y && y.toLowerCase() === 'cimode') {
      if (P) {
        const j = n.nsSeparator || this.options.nsSeparator
        return s
          ? {
              res: `${g}${j}${f}`,
              usedKey: f,
              exactUsedKey: f,
              usedLng: y,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${g}${j}${f}`
      }
      return s
        ? {
            res: f,
            usedKey: f,
            exactUsedKey: f,
            usedLng: y,
            usedNS: g,
            usedParams: this.getUsedParamsDetails(n),
          }
        : f
    }
    const O = this.resolve(t, n)
    let E = O && O.res
    const B = (O && O.usedKey) || f,
      $ = (O && O.exactUsedKey) || f,
      V = Object.prototype.toString.apply(E),
      q = ['[object Number]', '[object Function]', '[object RegExp]'],
      R = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      k = !this.i18nFormat || this.i18nFormat.handleAsObject,
      N = !ce(E) && typeof E != 'boolean' && typeof E != 'number'
    if (k && E && N && q.indexOf(V) < 0 && !(ce(R) && Array.isArray(E))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          )
        const j = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(B, E, { ...n, ns: d })
          : `key '${f} (${this.language})' returned an object instead of string.`
        return s
          ? ((O.res = j), (O.usedParams = this.getUsedParamsDetails(n)), O)
          : j
      }
      if (u) {
        const j = Array.isArray(E),
          X = j ? [] : {},
          Z = j ? $ : B
        for (const x in E)
          if (Object.prototype.hasOwnProperty.call(E, x)) {
            const S = `${Z}${u}${x}`
            ;(X[x] = this.translate(S, { ...n, joinArrays: !1, ns: d })),
              X[x] === S && (X[x] = E[x])
          }
        E = X
      }
    } else if (k && ce(R) && Array.isArray(E))
      (E = E.join(R)), E && (E = this.extendTranslation(E, t, n, i))
    else {
      let j = !1,
        X = !1
      const Z = n.count !== void 0 && !ce(n.count),
        x = Rf.hasDefaultValue(n),
        S = Z ? this.pluralResolver.getSuffix(y, n.count, n) : '',
        T =
          n.ordinal && Z
            ? this.pluralResolver.getSuffix(y, n.count, { ordinal: !1 })
            : '',
        I =
          Z &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        D =
          (I && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${S}`] ||
          n[`defaultValue${T}`] ||
          n.defaultValue
      !this.isValidLookup(E) && x && ((j = !0), (E = D)),
        this.isValidLookup(E) || ((X = !0), (E = f))
      const A =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          X
            ? void 0
            : E,
        Xe = x && D !== E && this.options.updateMissing
      if (X || j || Xe) {
        if (
          (this.logger.log(
            Xe ? 'updateKey' : 'missingKey',
            y,
            g,
            f,
            Xe ? D : E
          ),
          u)
        ) {
          const Q = this.resolve(f, { ...n, keySeparator: !1 })
          Q &&
            Q.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let Lt = []
        const pn = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && pn && pn[0])
          for (let Q = 0; Q < pn.length; Q++) Lt.push(pn[Q])
        else
          this.options.saveMissingTo === 'all'
            ? (Lt = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Lt.push(n.lng || this.language)
        const nt = (Q, oe, se) => {
          const me = x && se !== E ? se : A
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(Q, g, oe, me, Xe, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(Q, g, oe, me, Xe, n),
            this.emit('missingKey', Q, g, oe, E)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && Z
            ? Lt.forEach((Q) => {
                const oe = this.pluralResolver.getSuffixes(Q, n)
                I &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  oe.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  oe.push(`${this.options.pluralSeparator}zero`),
                  oe.forEach((se) => {
                    nt([Q], f + se, n[`defaultValue${se}`] || D)
                  })
              })
            : nt(Lt, f, D))
      }
      ;(E = this.extendTranslation(E, t, n, O, i)),
        X &&
          E === f &&
          this.options.appendNamespaceToMissingKey &&
          (E = `${g}:${f}`),
        (X || j) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (E = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${g}:${f}` : f,
                j ? E : void 0
              ))
            : (E = this.options.parseMissingKeyHandler(E)))
    }
    return s
      ? ((O.res = E), (O.usedParams = this.getUsedParamsDetails(n)), O)
      : E
  }
  extendTranslation(t, n, i, s, u) {
    var f = this
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...i },
        i.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s }
      )
    else if (!i.skipInterpolation) {
      i.interpolation &&
        this.interpolator.init({
          ...i,
          interpolation: { ...this.options.interpolation, ...i.interpolation },
        })
      const y =
        ce(t) &&
        (i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let P
      if (y) {
        const E = t.match(this.interpolator.nestingRegexp)
        P = E && E.length
      }
      let O = i.replace && !ce(i.replace) ? i.replace : i
      if (
        (this.options.interpolation.defaultVariables &&
          (O = { ...this.options.interpolation.defaultVariables, ...O }),
        (t = this.interpolator.interpolate(
          t,
          O,
          i.lng || this.language || s.usedLng,
          i
        )),
        y)
      ) {
        const E = t.match(this.interpolator.nestingRegexp),
          B = E && E.length
        P < B && (i.nest = !1)
      }
      !i.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        s &&
        s.res &&
        (i.lng = this.language || s.usedLng),
        i.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var E = arguments.length, B = new Array(E), $ = 0;
                $ < E;
                $++
              )
                B[$] = arguments[$]
              return u && u[0] === B[0] && !i.context
                ? (f.logger.warn(
                    `It seems you are nesting recursively key: ${B[0]} in key: ${n[0]}`
                  ),
                  null)
                : f.translate(...B, n)
            },
            i
          )),
        i.interpolation && this.interpolator.reset()
    }
    const d = i.postProcess || this.options.postProcess,
      g = ce(d) ? [d] : d
    return (
      t != null &&
        g &&
        g.length &&
        i.applyPostProcessor !== !1 &&
        (t = tw.handle(
          g,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
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
      s,
      u,
      f,
      d
    return (
      ce(t) && (t = [t]),
      t.forEach((g) => {
        if (this.isValidLookup(i)) return
        const y = this.extractFromKey(g, n),
          P = y.key
        s = P
        let O = y.namespaces
        this.options.fallbackNS && (O = O.concat(this.options.fallbackNS))
        const E = n.count !== void 0 && !ce(n.count),
          B =
            E &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          $ =
            n.context !== void 0 &&
            (ce(n.context) || typeof n.context == 'number') &&
            n.context !== '',
          V = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              )
        O.forEach((q) => {
          this.isValidLookup(i) ||
            ((d = q),
            !pv[`${V[0]}-${q}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(d) &&
              ((pv[`${V[0]}-${q}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${V.join(
                  ', '
                )}" won't get resolved as namespace "${d}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            V.forEach((R) => {
              if (this.isValidLookup(i)) return
              f = R
              const k = [P]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(k, P, R, q, n)
              else {
                let j
                E && (j = this.pluralResolver.getSuffix(R, n.count, n))
                const X = `${this.options.pluralSeparator}zero`,
                  Z = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (E &&
                    (k.push(P + j),
                    n.ordinal &&
                      j.indexOf(Z) === 0 &&
                      k.push(P + j.replace(Z, this.options.pluralSeparator)),
                    B && k.push(P + X)),
                  $)
                ) {
                  const x = `${P}${this.options.contextSeparator}${n.context}`
                  k.push(x),
                    E &&
                      (k.push(x + j),
                      n.ordinal &&
                        j.indexOf(Z) === 0 &&
                        k.push(x + j.replace(Z, this.options.pluralSeparator)),
                      B && k.push(x + X))
                }
              }
              let N
              for (; (N = k.pop()); )
                this.isValidLookup(i) ||
                  ((u = N), (i = this.getResource(R, q, N, n)))
            }))
        })
      }),
      { res: i, usedKey: s, exactUsedKey: u, usedLng: f, usedNS: d }
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
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, i, s)
      : this.resourceStore.getResource(t, n, i, s)
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
      i = t.replace && !ce(t.replace)
    let s = i ? t.replace : t
    if (
      (i && typeof t.count < 'u' && (s.count = t.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !i)
    ) {
      s = { ...s }
      for (const u of n) delete s[u]
    }
    return s
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
const Fh = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class gv {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = or.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = If(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = If(t)), !t || t.indexOf('-') < 0)) return t
    const n = t.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(t) {
    if (ce(t) && t.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let s = Intl.getCanonicalLocales(t)[0]
          if ((s && this.options.lowerCaseLng && (s = s.toLowerCase()), s))
            return s
        } catch {}
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let i = t.split('-')
      return (
        this.options.lowerCaseLng
          ? (i = i.map((s) => s.toLowerCase()))
          : i.length === 2
          ? ((i[0] = i[0].toLowerCase()),
            (i[1] = i[1].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = Fh(i[1].toLowerCase())))
          : i.length === 3 &&
            ((i[0] = i[0].toLowerCase()),
            i[1].length === 2 && (i[1] = i[1].toUpperCase()),
            i[0] !== 'sgn' && i[2].length === 2 && (i[2] = i[2].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = Fh(i[1].toLowerCase())),
            n.indexOf(i[2].toLowerCase()) > -1 &&
              (i[2] = Fh(i[2].toLowerCase()))),
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
        const s = this.formatLanguageCode(i)
        ;(!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s)
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((i) => {
          if (n) return
          const s = this.getLanguagePartFromCode(i)
          if (this.isSupportedCode(s)) return (n = s)
          n = this.options.supportedLngs.find((u) => {
            if (u === s) return u
            if (
              !(u.indexOf('-') < 0 && s.indexOf('-') < 0) &&
              ((u.indexOf('-') > 0 &&
                s.indexOf('-') < 0 &&
                u.substring(0, u.indexOf('-')) === s) ||
                (u.indexOf(s) === 0 && s.length > 1))
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
      ce(t) && (t = [t]),
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
      s = [],
      u = (f) => {
        f &&
          (this.isSupportedCode(f)
            ? s.push(f)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${f}`
              ))
      }
    return (
      ce(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            u(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            u(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            u(this.getLanguagePartFromCode(t)))
        : ce(t) && u(this.formatLanguageCode(t)),
      i.forEach((f) => {
        s.indexOf(f) < 0 && u(this.formatLanguageCode(f))
      }),
      s
    )
  }
}
let EI = [
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
  xI = {
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
const CI = ['v1', 'v2', 'v3'],
  kI = ['v4'],
  mv = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  TI = () => {
    const e = {}
    return (
      EI.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: xI[t.fc] }
        })
      }),
      e
    )
  }
class AI {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = n),
      (this.logger = or.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        kI.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = TI()),
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
        const i = If(t === 'dev' ? 'en' : t),
          s = n.ordinal ? 'ordinal' : 'cardinal',
          u = JSON.stringify({ cleanedCode: i, type: s })
        if (u in this.pluralRulesCache) return this.pluralRulesCache[u]
        const f = new Intl.PluralRules(i, { type: s })
        return (this.pluralRulesCache[u] = f), f
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
    return this.getSuffixes(t, i).map((s) => `${n}${s}`)
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const i = this.getRule(t, n)
    return i
      ? this.shouldUseIntlApi()
        ? i
            .resolvedOptions()
            .pluralCategories.sort((s, u) => mv[s] - mv[u])
            .map(
              (s) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ''
                }${s}`
            )
        : i.numbers.map((s) => this.getSuffix(t, s, n))
      : []
  }
  getSuffix(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const s = this.getRule(t, i)
    return s
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            i.ordinal ? `ordinal${this.options.prepend}` : ''
          }${s.select(n)}`
        : this.getSuffixRetroCompatible(s, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '')
  }
  getSuffixRetroCompatible(t, n) {
    const i = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n))
    let s = t.numbers[i]
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (s === 2 ? (s = 'plural') : s === 1 && (s = ''))
    const u = () =>
      this.options.prepend && s.toString()
        ? this.options.prepend + s.toString()
        : s.toString()
    return this.options.compatibilityJSON === 'v1'
      ? s === 1
        ? ''
        : typeof s == 'number'
        ? `_plural_${s.toString()}`
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
    return !CI.includes(this.options.compatibilityJSON)
  }
}
const vv = function (e, t, n) {
    let i =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      u = pI(e, t, n)
    return (
      !u &&
        s &&
        ce(n) &&
        ((u = Bd(e, n, i)), u === void 0 && (u = Bd(t, n, i))),
      u
    )
  },
  zh = (e) => e.replace(/\$/g, '$$$$')
class II {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = or.create('interpolator')),
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
      useRawValueToEscape: s,
      prefix: u,
      prefixEscaped: f,
      suffix: d,
      suffixEscaped: g,
      formatSeparator: y,
      unescapeSuffix: P,
      unescapePrefix: O,
      nestingPrefix: E,
      nestingPrefixEscaped: B,
      nestingSuffix: $,
      nestingSuffixEscaped: V,
      nestingOptionsSeparator: q,
      maxReplaces: R,
      alwaysFormat: k,
    } = t.interpolation
    ;(this.escape = n !== void 0 ? n : mI),
      (this.escapeValue = i !== void 0 ? i : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = u ? bo(u) : f || '{{'),
      (this.suffix = d ? bo(d) : g || '}}'),
      (this.formatSeparator = y || ','),
      (this.unescapePrefix = P ? '' : O || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : P || ''),
      (this.nestingPrefix = E ? bo(E) : B || bo('$t(')),
      (this.nestingSuffix = $ ? bo($) : V || bo(')')),
      (this.nestingOptionsSeparator = q || ','),
      (this.maxReplaces = R || 1e3),
      (this.alwaysFormat = k !== void 0 ? k : !1),
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
  interpolate(t, n, i, s) {
    let u, f, d
    const g =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      y = (B) => {
        if (B.indexOf(this.formatSeparator) < 0) {
          const R = vv(
            n,
            g,
            B,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          )
          return this.alwaysFormat
            ? this.format(R, void 0, i, { ...s, ...n, interpolationkey: B })
            : R
        }
        const $ = B.split(this.formatSeparator),
          V = $.shift().trim(),
          q = $.join(this.formatSeparator).trim()
        return this.format(
          vv(
            n,
            g,
            V,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          q,
          i,
          { ...s, ...n, interpolationkey: V }
        )
      }
    this.resetRegExp()
    const P =
        (s && s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      O =
        s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (B) => zh(B) },
        {
          regex: this.regexp,
          safeValue: (B) => (this.escapeValue ? zh(this.escape(B)) : zh(B)),
        },
      ].forEach((B) => {
        for (d = 0; (u = B.regex.exec(t)); ) {
          const $ = u[1].trim()
          if (((f = y($)), f === void 0))
            if (typeof P == 'function') {
              const q = P(t, u, s)
              f = ce(q) ? q : ''
            } else if (s && Object.prototype.hasOwnProperty.call(s, $)) f = ''
            else if (O) {
              f = u[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${$} for interpolating ${t}`
              ),
                (f = '')
          else !ce(f) && !this.useRawValueToEscape && (f = av(f))
          const V = B.safeValue(f)
          if (
            ((t = t.replace(u[0], V)),
            O
              ? ((B.regex.lastIndex += f.length),
                (B.regex.lastIndex -= u[0].length))
              : (B.regex.lastIndex = 0),
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
      s,
      u,
      f
    const d = (g, y) => {
      const P = this.nestingOptionsSeparator
      if (g.indexOf(P) < 0) return g
      const O = g.split(new RegExp(`${P}[ ]*{`))
      let E = `{${O[1]}`
      ;(g = O[0]), (E = this.interpolate(E, f))
      const B = E.match(/'/g),
        $ = E.match(/"/g)
      ;((B && B.length % 2 === 0 && !$) || $.length % 2 !== 0) &&
        (E = E.replace(/'/g, '"'))
      try {
        ;(f = JSON.parse(E)), y && (f = { ...y, ...f })
      } catch (V) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${g}`,
            V
          ),
          `${g}${P}${E}`
        )
      }
      return (
        f.defaultValue &&
          f.defaultValue.indexOf(this.prefix) > -1 &&
          delete f.defaultValue,
        g
      )
    }
    for (; (s = this.nestingRegexp.exec(t)); ) {
      let g = []
      ;(f = { ...i }),
        (f = f.replace && !ce(f.replace) ? f.replace : f),
        (f.applyPostProcessor = !1),
        delete f.defaultValue
      let y = !1
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const P = s[1].split(this.formatSeparator).map((O) => O.trim())
        ;(s[1] = P.shift()), (g = P), (y = !0)
      }
      if (((u = n(d.call(this, s[1].trim(), f), f)), u && s[0] === t && !ce(u)))
        return u
      ce(u) || (u = av(u)),
        u ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),
          (u = '')),
        y &&
          (u = g.reduce(
            (P, O) =>
              this.format(P, O, i.lng, { ...i, interpolationkey: s[1].trim() }),
            u.trim()
          )),
        (t = t.replace(s[0], u)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
const PI = (e) => {
    let t = e.toLowerCase().trim()
    const n = {}
    if (e.indexOf('(') > -1) {
      const i = e.split('(')
      t = i[0].toLowerCase().trim()
      const s = i[1].substring(0, i[1].length - 1)
      t === 'currency' && s.indexOf(':') < 0
        ? n.currency || (n.currency = s.trim())
        : t === 'relativetime' && s.indexOf(':') < 0
        ? n.range || (n.range = s.trim())
        : s.split(';').forEach((f) => {
            if (f) {
              const [d, ...g] = f.split(':'),
                y = g
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                P = d.trim()
              n[P] || (n[P] = y),
                y === 'false' && (n[P] = !1),
                y === 'true' && (n[P] = !0),
                isNaN(y) || (n[P] = parseInt(y, 10))
            }
          })
    }
    return { formatName: t, formatOptions: n }
  },
  Ho = (e) => {
    const t = {}
    return (n, i, s) => {
      let u = s
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (u = { ...u, [s.interpolationkey]: void 0 })
      const f = i + JSON.stringify(u)
      let d = t[f]
      return d || ((d = e(If(i), s)), (t[f] = d)), d(n)
    }
  }
class RI {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = or.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Ho((n, i) => {
          const s = new Intl.NumberFormat(n, { ...i })
          return (u) => s.format(u)
        }),
        currency: Ho((n, i) => {
          const s = new Intl.NumberFormat(n, { ...i, style: 'currency' })
          return (u) => s.format(u)
        }),
        datetime: Ho((n, i) => {
          const s = new Intl.DateTimeFormat(n, { ...i })
          return (u) => s.format(u)
        }),
        relativetime: Ho((n, i) => {
          const s = new Intl.RelativeTimeFormat(n, { ...i })
          return (u) => s.format(u, i.range || 'day')
        }),
        list: Ho((n, i) => {
          const s = new Intl.ListFormat(n, { ...i })
          return (u) => s.format(u)
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
    this.formats[t.toLowerCase().trim()] = Ho(n)
  }
  format(t, n, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const u = n.split(this.formatSeparator)
    if (
      u.length > 1 &&
      u[0].indexOf('(') > 1 &&
      u[0].indexOf(')') < 0 &&
      u.find((d) => d.indexOf(')') > -1)
    ) {
      const d = u.findIndex((g) => g.indexOf(')') > -1)
      u[0] = [u[0], ...u.splice(1, d)].join(this.formatSeparator)
    }
    return u.reduce((d, g) => {
      const { formatName: y, formatOptions: P } = PI(g)
      if (this.formats[y]) {
        let O = d
        try {
          const E =
              (s && s.formatParams && s.formatParams[s.interpolationkey]) || {},
            B = E.locale || E.lng || s.locale || s.lng || i
          O = this.formats[y](d, B, { ...P, ...s, ...E })
        } catch (E) {
          this.logger.warn(E)
        }
        return O
      } else this.logger.warn(`there was no format function for ${y}`)
      return d
    }, t)
  }
}
const LI = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class OI extends Gf {
  constructor(t, n, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = s),
      (this.logger = or.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(i, s.backend, s)
  }
  queueLoad(t, n, i, s) {
    const u = {},
      f = {},
      d = {},
      g = {}
    return (
      t.forEach((y) => {
        let P = !0
        n.forEach((O) => {
          const E = `${y}|${O}`
          !i.reload && this.store.hasResourceBundle(y, O)
            ? (this.state[E] = 2)
            : this.state[E] < 0 ||
              (this.state[E] === 1
                ? f[E] === void 0 && (f[E] = !0)
                : ((this.state[E] = 1),
                  (P = !1),
                  f[E] === void 0 && (f[E] = !0),
                  u[E] === void 0 && (u[E] = !0),
                  g[O] === void 0 && (g[O] = !0)))
        }),
          P || (d[y] = !0)
      }),
      (Object.keys(u).length || Object.keys(f).length) &&
        this.queue.push({
          pending: f,
          pendingCount: Object.keys(f).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(u),
        pending: Object.keys(f),
        toLoadLanguages: Object.keys(d),
        toLoadNamespaces: Object.keys(g),
      }
    )
  }
  loaded(t, n, i) {
    const s = t.split('|'),
      u = s[0],
      f = s[1]
    n && this.emit('failedLoading', u, f, n),
      !n &&
        i &&
        this.store.addResourceBundle(u, f, i, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && i && (this.state[t] = 0)
    const d = {}
    this.queue.forEach((g) => {
      dI(g.loaded, [u], f),
        LI(g, t),
        n && g.errors.push(n),
        g.pendingCount === 0 &&
          !g.done &&
          (Object.keys(g.loaded).forEach((y) => {
            d[y] || (d[y] = {})
            const P = g.loaded[y]
            P.length &&
              P.forEach((O) => {
                d[y][O] === void 0 && (d[y][O] = !0)
              })
          }),
          (g.done = !0),
          g.errors.length ? g.callback(g.errors) : g.callback())
    }),
      this.emit('loaded', d),
      (this.queue = this.queue.filter((g) => !g.done))
  }
  read(t, n, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      u =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      f = arguments.length > 5 ? arguments[5] : void 0
    if (!t.length) return f(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: i,
        tried: s,
        wait: u,
        callback: f,
      })
      return
    }
    this.readingCalls++
    const d = (y, P) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const O = this.waitingReads.shift()
          this.read(O.lng, O.ns, O.fcName, O.tried, O.wait, O.callback)
        }
        if (y && P && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, i, s + 1, u * 2, f)
          }, u)
          return
        }
        f(y, P)
      },
      g = this.backend[i].bind(this.backend)
    if (g.length === 2) {
      try {
        const y = g(t, n)
        y && typeof y.then == 'function'
          ? y.then((P) => d(null, P)).catch(d)
          : d(null, y)
      } catch (y) {
        d(y)
      }
      return
    }
    return g(t, n, d)
  }
  prepareLoading(t, n) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        s && s()
      )
    ce(t) && (t = this.languageUtils.toResolveHierarchy(t)), ce(n) && (n = [n])
    const u = this.queueLoad(t, n, i, s)
    if (!u.toLoad.length) return u.pending.length || s(), null
    u.toLoad.forEach((f) => {
      this.loadOne(f)
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
      s = i[0],
      u = i[1]
    this.read(s, u, 'read', void 0, void 0, (f, d) => {
      f &&
        this.logger.warn(
          `${n}loading namespace ${u} for language ${s} failed`,
          f
        ),
        !f &&
          d &&
          this.logger.log(`${n}loaded namespace ${u} for language ${s}`, d),
        this.loaded(t, f, d)
    })
  }
  saveMissing(t, n, i, s, u) {
    let f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
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
        const g = { ...f, isUpdate: u },
          y = this.backend.create.bind(this.backend)
        if (y.length < 6)
          try {
            let P
            y.length === 5 ? (P = y(t, n, i, s, g)) : (P = y(t, n, i, s)),
              P && typeof P.then == 'function'
                ? P.then((O) => d(null, O)).catch(d)
                : d(null, P)
          } catch (P) {
            d(P)
          }
        else y(t, n, i, s, d, g)
      }
      !t || !t[0] || this.store.addResource(t[0], n, i, s)
    }
  }
}
const yv = () => ({
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
        ce(e[1]) && (t.defaultValue = e[1]),
        ce(e[2]) && (t.tDescription = e[2]),
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
  wv = (e) => (
    ce(e.ns) && (e.ns = [e.ns]),
    ce(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    ce(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  za = () => {},
  NI = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == 'function' && (e[n] = e[n].bind(e))
    })
  }
class Jl extends Gf {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = wv(t)),
      (this.services = {}),
      (this.logger = or),
      (this.modules = { external: [] }),
      NI(this),
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
        (ce(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]))
    const s = yv()
    ;(this.options = { ...s, ...this.options, ...wv(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...s.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator)
    const u = (P) => (P ? (typeof P == 'function' ? new P() : P) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? or.init(u(this.modules.logger), this.options)
        : or.init(null, this.options)
      let P
      this.modules.formatter
        ? (P = this.modules.formatter)
        : typeof Intl < 'u' && (P = RI)
      const O = new gv(this.options)
      this.store = new dv(this.options.resources, this.options)
      const E = this.services
      ;(E.logger = or),
        (E.resourceStore = this.store),
        (E.languageUtils = O),
        (E.pluralResolver = new AI(O, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        P &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((E.formatter = u(P)),
          E.formatter.init(E, this.options),
          (this.options.interpolation.format = E.formatter.format.bind(
            E.formatter
          ))),
        (E.interpolator = new II(this.options)),
        (E.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (E.backendConnector = new OI(
          u(this.modules.backend),
          E.resourceStore,
          E,
          this.options
        )),
        E.backendConnector.on('*', function (B) {
          for (
            var $ = arguments.length, V = new Array($ > 1 ? $ - 1 : 0), q = 1;
            q < $;
            q++
          )
            V[q - 1] = arguments[q]
          t.emit(B, ...V)
        }),
        this.modules.languageDetector &&
          ((E.languageDetector = u(this.modules.languageDetector)),
          E.languageDetector.init &&
            E.languageDetector.init(E, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((E.i18nFormat = u(this.modules.i18nFormat)),
          E.i18nFormat.init && E.i18nFormat.init(this)),
        (this.translator = new Rf(this.services, this.options)),
        this.translator.on('*', function (B) {
          for (
            var $ = arguments.length, V = new Array($ > 1 ? $ - 1 : 0), q = 1;
            q < $;
            q++
          )
            V[q - 1] = arguments[q]
          t.emit(B, ...V)
        }),
        this.modules.external.forEach((B) => {
          B.init && B.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      i || (i = za),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const P = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      )
      P.length > 0 && P[0] !== 'dev' && (this.options.lng = P[0])
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
      ].forEach((P) => {
        this[P] = function () {
          return t.store[P](...arguments)
        }
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((P) => {
        this[P] = function () {
          return t.store[P](...arguments), t
        }
      })
    const g = ml(),
      y = () => {
        const P = (O, E) => {
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
            g.resolve(E),
            i(O, E)
        }
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return P(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, P)
      }
    return (
      this.options.resources || !this.options.initImmediate
        ? y()
        : setTimeout(y, 0),
      g
    )
  }
  loadResources(t) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : za
    const s = ce(t) ? t : this.language
    if (
      (typeof t == 'function' && (i = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        s &&
        s.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return i()
      const u = [],
        f = (d) => {
          if (!d || d === 'cimode') return
          this.services.languageUtils.toResolveHierarchy(d).forEach((y) => {
            y !== 'cimode' && u.indexOf(y) < 0 && u.push(y)
          })
        }
      s
        ? f(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((g) => f(g)),
        this.options.preload && this.options.preload.forEach((d) => f(d)),
        this.services.backendConnector.load(u, this.options.ns, (d) => {
          !d &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            i(d)
        })
    } else i(null)
  }
  reloadResources(t, n, i) {
    const s = ml()
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof n == 'function' && ((i = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      i || (i = za),
      this.services.backendConnector.reload(t, n, (u) => {
        s.resolve(), i(u)
      }),
      s
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
      t.type === 'postProcessor' && tw.addPostProcessor(t),
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
    const s = ml()
    this.emit('languageChanging', t)
    const u = (g) => {
        ;(this.language = g),
          (this.languages = this.services.languageUtils.toResolveHierarchy(g)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(g)
      },
      f = (g, y) => {
        y
          ? (u(y),
            this.translator.changeLanguage(y),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', y),
            this.logger.log('languageChanged', y))
          : (this.isLanguageChangingTo = void 0),
          s.resolve(function () {
            return i.t(...arguments)
          }),
          n &&
            n(g, function () {
              return i.t(...arguments)
            })
      },
      d = (g) => {
        !t && !g && this.services.languageDetector && (g = [])
        const y = ce(g)
          ? g
          : this.services.languageUtils.getBestMatchFromCodes(g)
        y &&
          (this.language || u(y),
          this.translator.language || this.translator.changeLanguage(y),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(y)),
          this.loadResources(y, (P) => {
            f(P, y)
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
      s
    )
  }
  getFixedT(t, n, i) {
    var s = this
    const u = function (f, d) {
      let g
      if (typeof d != 'object') {
        for (
          var y = arguments.length, P = new Array(y > 2 ? y - 2 : 0), O = 2;
          O < y;
          O++
        )
          P[O - 2] = arguments[O]
        g = s.options.overloadTranslationOptionHandler([f, d].concat(P))
      } else g = { ...d }
      ;(g.lng = g.lng || u.lng),
        (g.lngs = g.lngs || u.lngs),
        (g.ns = g.ns || u.ns),
        g.keyPrefix !== '' && (g.keyPrefix = g.keyPrefix || i || u.keyPrefix)
      const E = s.options.keySeparator || '.'
      let B
      return (
        g.keyPrefix && Array.isArray(f)
          ? (B = f.map(($) => `${g.keyPrefix}${E}${$}`))
          : (B = g.keyPrefix ? `${g.keyPrefix}${E}${f}` : f),
        s.t(B, g)
      )
    }
    return ce(t) ? (u.lng = t) : (u.lngs = t), (u.ns = n), (u.keyPrefix = i), u
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
      s = this.options ? this.options.fallbackLng : !1,
      u = this.languages[this.languages.length - 1]
    if (i.toLowerCase() === 'cimode') return !0
    const f = (d, g) => {
      const y = this.services.backendConnector.state[`${d}|${g}`]
      return y === -1 || y === 0 || y === 2
    }
    if (n.precheck) {
      const d = n.precheck(this, f)
      if (d !== void 0) return d
    }
    return !!(
      this.hasResourceBundle(i, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (f(i, t) && (!s || f(u, t)))
    )
  }
  loadNamespaces(t, n) {
    const i = ml()
    return this.options.ns
      ? (ce(t) && (t = [t]),
        t.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s)
        }),
        this.loadResources((s) => {
          i.resolve(), n && n(s)
        }),
        i)
      : (n && n(), Promise.resolve())
  }
  loadLanguages(t, n) {
    const i = ml()
    ce(t) && (t = [t])
    const s = this.options.preload || [],
      u = t.filter(
        (f) =>
          s.indexOf(f) < 0 && this.services.languageUtils.isSupportedCode(f)
      )
    return u.length
      ? ((this.options.preload = s.concat(u)),
        this.loadResources((f) => {
          i.resolve(), n && n(f)
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
      i = (this.services && this.services.languageUtils) || new gv(yv())
    return n.indexOf(i.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    return new Jl(t, n)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : za
    const i = t.forkResourceStore
    i && delete t.forkResourceStore
    const s = { ...this.options, ...t, isClone: !0 },
      u = new Jl(s)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (u.logger = u.logger.clone(t)),
      ['store', 'services', 'language'].forEach((d) => {
        u[d] = this[d]
      }),
      (u.services = { ...this.services }),
      (u.services.utils = { hasLoadedNamespace: u.hasLoadedNamespace.bind(u) }),
      i &&
        ((u.store = new dv(this.store.data, s)),
        (u.services.resourceStore = u.store)),
      (u.translator = new Rf(u.services, s)),
      u.translator.on('*', function (d) {
        for (
          var g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), P = 1;
          P < g;
          P++
        )
          y[P - 1] = arguments[P]
        u.emit(d, ...y)
      }),
      u.init(s, n),
      (u.translator.options = s),
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
const Rt = Jl.createInstance()
Rt.createInstance = Jl.createInstance
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
Rt.use(r4).init({
  resources: {
    en: {
      translation: {
        Services: 'Services',
        Blog: 'Blogs',
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
          title: 'We made the visa available for you.',
          desc: 'Where are you planning to travel?',
          search: 'Search by country..',
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
        popularCountry: {
          title1: 'About visas of the most frequently asked countries',
          title2:
            'Our center receives more questions about visas from these countries.',
          germany: 'Germany',
          italy: 'Italy',
          thailand: 'Thailand',
          austria: 'Austria',
          france: 'France',
          usa: 'USA',
          canada: 'Canada',
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
        Blog: 'Bloqlar',
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
          title: 'Vizanı sizin üçün əlçatan etdik',
          desc: 'Hara səyahət planlayırsınız',
          search: 'Ölkəyə görə axtarış..',
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
        popularCountry: {
          title1: 'Ən çox soruşulan ölkələrin vizaları haqqında',
          title2:
            'Mərkəzimizə daha çox bu ölkələrin vizaları ilə bağlı sual daxil olur.',
          germany: 'Almaniya',
          italy: 'Italiya',
          thailand: 'Tayland',
          austria: 'Avstria',
          france: 'Fransa',
          usa: 'ABŞ',
          canada: 'Kanada',
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
        Blog: 'Блоги',
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
          title: 'Мы сделали визу доступной для вас',
          desc: 'Куда вы планируете поехать?',
          search: 'Поиск по стране...',
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
        popularCountry: {
          title1: 'О визах самых часто задаваемых стран',
          title2:
            'В наш центр в основном поступают вопросы по визам в эти страны.',
          germany: 'Германия',
          italy: 'Италия',
          thailand: 'Таиланд',
          austria: 'Австрия',
          france: 'Франция',
          usa: 'США',
          canada: 'Канада',
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
Uh.createRoot(document.getElementById('root')).render(
  oi.jsx(Pv.StrictMode, { children: oi.jsx(fI, {}) })
)
