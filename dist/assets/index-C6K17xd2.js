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
var ul =
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
var Sv = { exports: {} },
  Nf = {},
  Ev = { exports: {} },
  we = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eu = Symbol.for('react.element'),
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
  Rm = Symbol.iterator
function FC(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Rm && e[Rm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var xv = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cv = Object.assign,
  kv = {}
function Es(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = kv),
    (this.updater = n || xv)
}
Es.prototype.isReactComponent = {}
Es.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Es.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Tv() {}
Tv.prototype = Es.prototype
function bd(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = kv),
    (this.updater = n || xv)
}
var Hd = (bd.prototype = new Tv())
Hd.constructor = bd
Cv(Hd, Es.prototype)
Hd.isPureReactComponent = !0
var Lm = Array.isArray,
  Av = Object.prototype.hasOwnProperty,
  jd = { current: null },
  Iv = { key: !0, ref: !0, __self: !0, __source: !0 }
function Pv(e, t, n) {
  var i,
    s = {},
    u = null,
    f = null
  if (t != null)
    for (i in (t.ref !== void 0 && (f = t.ref),
    t.key !== void 0 && (u = '' + t.key),
    t))
      Av.call(t, i) && !Iv.hasOwnProperty(i) && (s[i] = t[i])
  var d = arguments.length - 2
  if (d === 1) s.children = n
  else if (1 < d) {
    for (var g = Array(d), w = 0; w < d; w++) g[w] = arguments[w + 2]
    s.children = g
  }
  if (e && e.defaultProps)
    for (i in ((d = e.defaultProps), d)) s[i] === void 0 && (s[i] = d[i])
  return { $$typeof: eu, type: e, key: u, ref: f, props: s, _owner: jd.current }
}
function zC(e, t) {
  return {
    $$typeof: eu,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Vd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === eu
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
var Om = /\/+/g
function sh(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? UC('' + e.key)
    : t.toString(36)
}
function $a(e, t, n, i, s) {
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
          case eu:
          case TC:
            f = !0
        }
    }
  if (f)
    return (
      (f = e),
      (s = s(f)),
      (e = i === '' ? '.' + sh(f, 0) : i),
      Lm(s)
        ? ((n = ''),
          e != null && (n = e.replace(Om, '$&/') + '/'),
          $a(s, t, n, '', function (w) {
            return w
          }))
        : s != null &&
          (Vd(s) &&
            (s = zC(
              s,
              n +
                (!s.key || (f && f.key === s.key)
                  ? ''
                  : ('' + s.key).replace(Om, '$&/') + '/') +
                e
            )),
          t.push(s)),
      1
    )
  if (((f = 0), (i = i === '' ? '.' : i + ':'), Lm(e)))
    for (var d = 0; d < e.length; d++) {
      u = e[d]
      var g = i + sh(u, d)
      f += $a(u, t, n, g, s)
    }
  else if (((g = FC(e)), typeof g == 'function'))
    for (e = g.call(e), d = 0; !(u = e.next()).done; )
      (u = u.value), (g = i + sh(u, d++)), (f += $a(u, t, n, g, s))
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
function Sa(e, t, n) {
  if (e == null) return e
  var i = [],
    s = 0
  return (
    $a(e, i, '', '', function (u) {
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
var Bt = { current: null },
  ba = { transition: null },
  $C = {
    ReactCurrentDispatcher: Bt,
    ReactCurrentBatchConfig: ba,
    ReactCurrentOwner: jd,
  }
we.Children = {
  map: Sa,
  forEach: function (e, t, n) {
    Sa(
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
      Sa(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Sa(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Vd(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
we.Component = Es
we.Fragment = AC
we.Profiler = PC
we.PureComponent = bd
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
  var i = Cv({}, e.props),
    s = e.key,
    u = e.ref,
    f = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (f = jd.current)),
      t.key !== void 0 && (s = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps
    for (g in t)
      Av.call(t, g) &&
        !Iv.hasOwnProperty(g) &&
        (i[g] = t[g] === void 0 && d !== void 0 ? d[g] : t[g])
  }
  var g = arguments.length - 2
  if (g === 1) i.children = n
  else if (1 < g) {
    d = Array(g)
    for (var w = 0; w < g; w++) d[w] = arguments[w + 2]
    i.children = d
  }
  return { $$typeof: eu, type: e.type, key: s, ref: u, props: i, _owner: f }
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
we.createElement = Pv
we.createFactory = function (e) {
  var t = Pv.bind(null, e)
  return (t.type = e), t
}
we.createRef = function () {
  return { current: null }
}
we.forwardRef = function (e) {
  return { $$typeof: OC, render: e }
}
we.isValidElement = Vd
we.lazy = function (e) {
  return { $$typeof: MC, _payload: { _status: -1, _result: e }, _init: BC }
}
we.memo = function (e, t) {
  return { $$typeof: DC, type: e, compare: t === void 0 ? null : t }
}
we.startTransition = function (e) {
  var t = ba.transition
  ba.transition = {}
  try {
    e()
  } finally {
    ba.transition = t
  }
}
we.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
we.useCallback = function (e, t) {
  return Bt.current.useCallback(e, t)
}
we.useContext = function (e) {
  return Bt.current.useContext(e)
}
we.useDebugValue = function () {}
we.useDeferredValue = function (e) {
  return Bt.current.useDeferredValue(e)
}
we.useEffect = function (e, t) {
  return Bt.current.useEffect(e, t)
}
we.useId = function () {
  return Bt.current.useId()
}
we.useImperativeHandle = function (e, t, n) {
  return Bt.current.useImperativeHandle(e, t, n)
}
we.useInsertionEffect = function (e, t) {
  return Bt.current.useInsertionEffect(e, t)
}
we.useLayoutEffect = function (e, t) {
  return Bt.current.useLayoutEffect(e, t)
}
we.useMemo = function (e, t) {
  return Bt.current.useMemo(e, t)
}
we.useReducer = function (e, t, n) {
  return Bt.current.useReducer(e, t, n)
}
we.useRef = function (e) {
  return Bt.current.useRef(e)
}
we.useState = function (e) {
  return Bt.current.useState(e)
}
we.useSyncExternalStore = function (e, t, n) {
  return Bt.current.useSyncExternalStore(e, t, n)
}
we.useTransition = function () {
  return Bt.current.useTransition()
}
we.version = '18.2.0'
Ev.exports = we
var kt = Ev.exports
const Rv = kC(kt),
  bC = CC({ __proto__: null, default: Rv }, [kt])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var HC = kt,
  jC = Symbol.for('react.element'),
  VC = Symbol.for('react.fragment'),
  WC = Object.prototype.hasOwnProperty,
  KC = HC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  GC = { key: !0, ref: !0, __self: !0, __source: !0 }
function Lv(e, t, n) {
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
Nf.Fragment = VC
Nf.jsx = Lv
Nf.jsxs = Lv
Sv.exports = Nf
var ui = Sv.exports,
  Bh = {},
  Ov = { exports: {} },
  fn = {},
  Nv = { exports: {} },
  Dv = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(X, oe) {
    var se = X.length
    X.push(oe)
    e: for (; 0 < se; ) {
      var me = (se - 1) >>> 1,
        Pe = X[me]
      if (0 < s(Pe, oe)) (X[me] = oe), (X[se] = Pe), (se = me)
      else break e
    }
  }
  function n(X) {
    return X.length === 0 ? null : X[0]
  }
  function i(X) {
    if (X.length === 0) return null
    var oe = X[0],
      se = X.pop()
    if (se !== oe) {
      X[0] = se
      e: for (var me = 0, Pe = X.length, be = Pe >>> 1; me < be; ) {
        var On = 2 * (me + 1) - 1,
          wt = X[On],
          bt = On + 1,
          dn = X[bt]
        if (0 > s(wt, se))
          bt < Pe && 0 > s(dn, wt)
            ? ((X[me] = dn), (X[bt] = se), (me = bt))
            : ((X[me] = wt), (X[On] = se), (me = On))
        else if (bt < Pe && 0 > s(dn, se)) (X[me] = dn), (X[bt] = se), (me = bt)
        else break e
      }
    }
    return oe
  }
  function s(X, oe) {
    var se = X.sortIndex - oe.sortIndex
    return se !== 0 ? se : X.id - oe.id
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
    w = [],
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
  function N(X) {
    for (var oe = n(w); oe !== null; ) {
      if (oe.callback === null) i(w)
      else if (oe.startTime <= X)
        i(w), (oe.sortIndex = oe.expirationTime), t(g, oe)
      else break
      oe = n(w)
    }
  }
  function j(X) {
    if (((V = !1), N(X), !$))
      if (n(g) !== null) ($ = !0), hn(Q)
      else {
        var oe = n(w)
        oe !== null && tt(j, oe.startTime - X)
      }
  }
  function Q(X, oe) {
    ;($ = !1), V && ((V = !1), R(S), (S = -1)), (B = !0)
    var se = E
    try {
      for (
        N(oe), O = n(g);
        O !== null && (!(O.expirationTime > oe) || (X && !D()));

      ) {
        var me = O.callback
        if (typeof me == 'function') {
          ;(O.callback = null), (E = O.priorityLevel)
          var Pe = me(O.expirationTime <= oe)
          ;(oe = e.unstable_now()),
            typeof Pe == 'function' ? (O.callback = Pe) : O === n(g) && i(g),
            N(oe)
        } else i(g)
        O = n(g)
      }
      if (O !== null) var be = !0
      else {
        var On = n(w)
        On !== null && tt(j, On.startTime - oe), (be = !1)
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
      var X = e.unstable_now()
      I = X
      var oe = !0
      try {
        oe = x(!0, X)
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
      It = Xe.port2
    ;(Xe.port1.onmessage = U),
      (A = function () {
        It.postMessage(null)
      })
  } else
    A = function () {
      q(U, 0)
    }
  function hn(X) {
    ;(x = X), Z || ((Z = !0), A())
  }
  function tt(X, oe) {
    S = q(function () {
      X(e.unstable_now())
    }, oe)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (X) {
      X.callback = null
    }),
    (e.unstable_continueExecution = function () {
      $ || B || (($ = !0), hn(Q))
    }),
    (e.unstable_forceFrameRate = function (X) {
      0 > X || 125 < X
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < X ? Math.floor(1e3 / X) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return E
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(g)
    }),
    (e.unstable_next = function (X) {
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
        return X()
      } finally {
        E = se
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (X, oe) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          X = 3
      }
      var se = E
      E = X
      try {
        return oe()
      } finally {
        E = se
      }
    }),
    (e.unstable_scheduleCallback = function (X, oe, se) {
      var me = e.unstable_now()
      switch (
        (typeof se == 'object' && se !== null
          ? ((se = se.delay),
            (se = typeof se == 'number' && 0 < se ? me + se : me))
          : (se = me),
        X)
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
        (Pe = se + Pe),
        (X = {
          id: P++,
          callback: oe,
          priorityLevel: X,
          startTime: se,
          expirationTime: Pe,
          sortIndex: -1,
        }),
        se > me
          ? ((X.sortIndex = se),
            t(w, X),
            n(g) === null &&
              X === n(w) &&
              (V ? (R(S), (S = -1)) : (V = !0), tt(j, se - me)))
          : ((X.sortIndex = Pe), t(g, X), $ || B || (($ = !0), hn(Q))),
        X
      )
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (X) {
      var oe = E
      return function () {
        var se = E
        E = oe
        try {
          return X.apply(this, arguments)
        } finally {
          E = se
        }
      }
    })
})(Dv)
Nv.exports = Dv
var qC = Nv.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mv = kt,
  an = qC
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
var Fv = new Set(),
  Dl = {}
function lo(e, t) {
  ps(e, t), ps(e + 'Capture', t)
}
function ps(e, t) {
  for (Dl[e] = t, e = 0; e < t.length; e++) Fv.add(t[e])
}
var Ir = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  $h = Object.prototype.hasOwnProperty,
  YC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Nm = {},
  Dm = {}
function QC(e) {
  return $h.call(Dm, e)
    ? !0
    : $h.call(Nm, e)
    ? !1
    : YC.test(e)
    ? (Dm[e] = !0)
    : ((Nm[e] = !0), !1)
}
function XC(e, t, n, i) {
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
  if (t === null || typeof t > 'u' || XC(e, t, n, i)) return !0
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
function $t(e, t, n, i, s, u, f) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = f)
}
var yt = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    yt[e] = new $t(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  yt[t] = new $t(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  yt[e] = new $t(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  yt[e] = new $t(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    yt[e] = new $t(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  yt[e] = new $t(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  yt[e] = new $t(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  yt[e] = new $t(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  yt[e] = new $t(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Wd = /[\-:]([a-z])/g
function Kd(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wd, Kd)
    yt[t] = new $t(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wd, Kd)
    yt[t] = new $t(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Wd, Kd)
  yt[t] = new $t(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  yt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
yt.xlinkHref = new $t(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  yt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Gd(e, t, n, i) {
  var s = yt.hasOwnProperty(t) ? yt[t] : null
  ;(s !== null
    ? s.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (JC(t, n, s, i) && (n = null),
    i || s === null
      ? QC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Nr = Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ea = Symbol.for('react.element'),
  Yo = Symbol.for('react.portal'),
  Qo = Symbol.for('react.fragment'),
  qd = Symbol.for('react.strict_mode'),
  bh = Symbol.for('react.profiler'),
  zv = Symbol.for('react.provider'),
  Uv = Symbol.for('react.context'),
  Yd = Symbol.for('react.forward_ref'),
  Hh = Symbol.for('react.suspense'),
  jh = Symbol.for('react.suspense_list'),
  Qd = Symbol.for('react.memo'),
  ii = Symbol.for('react.lazy'),
  Bv = Symbol.for('react.offscreen'),
  Mm = Symbol.iterator
function al(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Mm && e[Mm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Ke = Object.assign,
  lh
function yl(e) {
  if (lh === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      lh = (t && t[1]) || ''
    }
  return (
    `
` +
    lh +
    e
  )
}
var uh = !1
function ah(e, t) {
  if (!e || uh) return ''
  uh = !0
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
        var s = w.stack.split(`
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
    ;(uh = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? yl(e) : ''
}
function ZC(e) {
  switch (e.tag) {
    case 5:
      return yl(e.type)
    case 16:
      return yl('Lazy')
    case 13:
      return yl('Suspense')
    case 19:
      return yl('SuspenseList')
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
function Vh(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Qo:
      return 'Fragment'
    case Yo:
      return 'Portal'
    case bh:
      return 'Profiler'
    case qd:
      return 'StrictMode'
    case Hh:
      return 'Suspense'
    case jh:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Uv:
        return (e.displayName || 'Context') + '.Consumer'
      case zv:
        return (e._context.displayName || 'Context') + '.Provider'
      case Yd:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Qd:
        return (
          (t = e.displayName || null), t !== null ? t : Vh(e.type) || 'Memo'
        )
      case ii:
        ;(t = e._payload), (e = e._init)
        try {
          return Vh(e(t))
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
      return Vh(t)
    case 8:
      return t === qd ? 'StrictMode' : 'Mode'
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
function Si(e) {
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
function $v(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function tk(e) {
  var t = $v(e) ? 'checked' : 'value',
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
function xa(e) {
  e._valueTracker || (e._valueTracker = tk(e))
}
function bv(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    i = ''
  return (
    e && (i = $v(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ja(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Wh(e, t) {
  var n = t.checked
  return Ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Fm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Si(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Hv(e, t) {
  ;(t = t.checked), t != null && Gd(e, 'checked', t, !1)
}
function Kh(e, t) {
  Hv(e, t)
  var n = Si(t.value),
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
    ? Gh(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Gh(e, t.type, Si(t.defaultValue)),
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
function Gh(e, t, n) {
  ;(t !== 'number' || Ja(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var wl = Array.isArray
function ls(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {}
    for (var s = 0; s < n.length; s++) t['$' + n[s]] = !0
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && i && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Si(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ;(e[s].selected = !0), i && (e[s].defaultSelected = !0)
        return
      }
      t !== null || e[s].disabled || (t = e[s])
    }
    t !== null && (t.selected = !0)
  }
}
function qh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(J(91))
  return Ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Um(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(J(92))
      if (wl(n)) {
        if (1 < n.length) throw Error(J(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Si(n) }
}
function jv(e, t) {
  var n = Si(t.value),
    i = Si(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = '' + i)
}
function Bm(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Vv(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Yh(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Vv(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Ca,
  Wv = (function (e) {
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
        Ca = Ca || document.createElement('div'),
          Ca.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ca.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Ml(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var El = {
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
Object.keys(El).forEach(function (e) {
  nk.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (El[t] = El[e])
  })
})
function Kv(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (El.hasOwnProperty(e) && El[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Gv(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf('--') === 0,
        s = Kv(n, t[n], i)
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
function Qh(e, t) {
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
var Jh = null
function Xd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Zh = null,
  us = null,
  as = null
function $m(e) {
  if ((e = ru(e))) {
    if (typeof Zh != 'function') throw Error(J(280))
    var t = e.stateNode
    t && ((t = Uf(t)), Zh(e.stateNode, e.type, t))
  }
}
function qv(e) {
  us ? (as ? as.push(e) : (as = [e])) : (us = e)
}
function Yv() {
  if (us) {
    var e = us,
      t = as
    if (((as = us = null), $m(e), t)) for (e = 0; e < t.length; e++) $m(t[e])
  }
}
function Qv(e, t) {
  return e(t)
}
function Xv() {}
var fh = !1
function Jv(e, t, n) {
  if (fh) return e(t, n)
  fh = !0
  try {
    return Qv(e, t, n)
  } finally {
    ;(fh = !1), (us !== null || as !== null) && (Xv(), Yv())
  }
}
function Fl(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var i = Uf(n)
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
var ed = !1
if (Ir)
  try {
    var fl = {}
    Object.defineProperty(fl, 'passive', {
      get: function () {
        ed = !0
      },
    }),
      window.addEventListener('test', fl, fl),
      window.removeEventListener('test', fl, fl)
  } catch {
    ed = !1
  }
function ik(e, t, n, i, s, u, f, d, g) {
  var w = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, w)
  } catch (P) {
    this.onError(P)
  }
}
var xl = !1,
  Za = null,
  ef = !1,
  td = null,
  ok = {
    onError: function (e) {
      ;(xl = !0), (Za = e)
    },
  }
function sk(e, t, n, i, s, u, f, d, g) {
  ;(xl = !1), (Za = null), ik.apply(ok, arguments)
}
function lk(e, t, n, i, s, u, f, d, g) {
  if ((sk.apply(this, arguments), xl)) {
    if (xl) {
      var w = Za
      ;(xl = !1), (Za = null)
    } else throw Error(J(198))
    ef || ((ef = !0), (td = w))
  }
}
function uo(e) {
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
function Zv(e) {
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
function bm(e) {
  if (uo(e) !== e) throw Error(J(188))
}
function uk(e) {
  var t = e.alternate
  if (!t) {
    if (((t = uo(e)), t === null)) throw Error(J(188))
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
        if (u === n) return bm(s), e
        if (u === i) return bm(s), t
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
function e1(e) {
  return (e = uk(e)), e !== null ? t1(e) : null
}
function t1(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = t1(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var n1 = an.unstable_scheduleCallback,
  Hm = an.unstable_cancelCallback,
  ak = an.unstable_shouldYield,
  fk = an.unstable_requestPaint,
  et = an.unstable_now,
  ck = an.unstable_getCurrentPriorityLevel,
  Jd = an.unstable_ImmediatePriority,
  r1 = an.unstable_UserBlockingPriority,
  tf = an.unstable_NormalPriority,
  hk = an.unstable_LowPriority,
  i1 = an.unstable_IdlePriority,
  Df = null,
  or = null
function dk(e) {
  if (or && typeof or.onCommitFiberRoot == 'function')
    try {
      or.onCommitFiberRoot(Df, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var jn = Math.clz32 ? Math.clz32 : mk,
  pk = Math.log,
  gk = Math.LN2
function mk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pk(e) / gk) | 0)) | 0
}
var ka = 64,
  Ta = 4194304
function _l(e) {
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
function nf(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var i = 0,
    s = e.suspendedLanes,
    u = e.pingedLanes,
    f = n & 268435455
  if (f !== 0) {
    var d = f & ~s
    d !== 0 ? (i = _l(d)) : ((u &= f), u !== 0 && (i = _l(u)))
  } else (f = n & ~s), f !== 0 ? (i = _l(f)) : u !== 0 && (i = _l(u))
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
      (n = 31 - jn(t)), (s = 1 << n), (i |= e[n]), (t &= ~s)
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
    var f = 31 - jn(u),
      d = 1 << f,
      g = s[f]
    g === -1
      ? (!(d & n) || d & i) && (s[f] = vk(d, t))
      : g <= t && (e.expiredLanes |= d),
      (u &= ~d)
  }
}
function nd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function o1() {
  var e = ka
  return (ka <<= 1), !(ka & 4194240) && (ka = 64), e
}
function ch(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function tu(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jn(t)),
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
    var s = 31 - jn(n),
      u = 1 << s
    ;(t[s] = 0), (i[s] = -1), (e[s] = -1), (n &= ~u)
  }
}
function Zd(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var i = 31 - jn(n),
      s = 1 << i
    ;(s & t) | (e[i] & t) && (e[i] |= t), (n &= ~s)
  }
}
var Ne = 0
function s1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var l1,
  ep,
  u1,
  a1,
  f1,
  rd = !1,
  Aa = [],
  ci = null,
  hi = null,
  di = null,
  zl = new Map(),
  Ul = new Map(),
  si = [],
  _k =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function jm(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ci = null
      break
    case 'dragenter':
    case 'dragleave':
      hi = null
      break
    case 'mouseover':
    case 'mouseout':
      di = null
      break
    case 'pointerover':
    case 'pointerout':
      zl.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ul.delete(t.pointerId)
  }
}
function cl(e, t, n, i, s, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [s],
      }),
      t !== null && ((t = ru(t)), t !== null && ep(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e)
}
function Sk(e, t, n, i, s) {
  switch (t) {
    case 'focusin':
      return (ci = cl(ci, e, t, n, i, s)), !0
    case 'dragenter':
      return (hi = cl(hi, e, t, n, i, s)), !0
    case 'mouseover':
      return (di = cl(di, e, t, n, i, s)), !0
    case 'pointerover':
      var u = s.pointerId
      return zl.set(u, cl(zl.get(u) || null, e, t, n, i, s)), !0
    case 'gotpointercapture':
      return (
        (u = s.pointerId), Ul.set(u, cl(Ul.get(u) || null, e, t, n, i, s)), !0
      )
  }
  return !1
}
function c1(e) {
  var t = Qi(e.target)
  if (t !== null) {
    var n = uo(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zv(n)), t !== null)) {
          ;(e.blockedOn = t),
            f1(e.priority, function () {
              u1(n)
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
function Ha(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = id(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var i = new n.constructor(n.type, n)
      ;(Jh = i), n.target.dispatchEvent(i), (Jh = null)
    } else return (t = ru(n)), t !== null && ep(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Vm(e, t, n) {
  Ha(e) && n.delete(t)
}
function Ek() {
  ;(rd = !1),
    ci !== null && Ha(ci) && (ci = null),
    hi !== null && Ha(hi) && (hi = null),
    di !== null && Ha(di) && (di = null),
    zl.forEach(Vm),
    Ul.forEach(Vm)
}
function hl(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    rd ||
      ((rd = !0), an.unstable_scheduleCallback(an.unstable_NormalPriority, Ek)))
}
function Bl(e) {
  function t(s) {
    return hl(s, e)
  }
  if (0 < Aa.length) {
    hl(Aa[0], e)
    for (var n = 1; n < Aa.length; n++) {
      var i = Aa[n]
      i.blockedOn === e && (i.blockedOn = null)
    }
  }
  for (
    ci !== null && hl(ci, e),
      hi !== null && hl(hi, e),
      di !== null && hl(di, e),
      zl.forEach(t),
      Ul.forEach(t),
      n = 0;
    n < si.length;
    n++
  )
    (i = si[n]), i.blockedOn === e && (i.blockedOn = null)
  for (; 0 < si.length && ((n = si[0]), n.blockedOn === null); )
    c1(n), n.blockedOn === null && si.shift()
}
var fs = Nr.ReactCurrentBatchConfig,
  rf = !0
function xk(e, t, n, i) {
  var s = Ne,
    u = fs.transition
  fs.transition = null
  try {
    ;(Ne = 1), tp(e, t, n, i)
  } finally {
    ;(Ne = s), (fs.transition = u)
  }
}
function Ck(e, t, n, i) {
  var s = Ne,
    u = fs.transition
  fs.transition = null
  try {
    ;(Ne = 4), tp(e, t, n, i)
  } finally {
    ;(Ne = s), (fs.transition = u)
  }
}
function tp(e, t, n, i) {
  if (rf) {
    var s = id(e, t, n, i)
    if (s === null) Sh(e, t, i, of, n), jm(e, i)
    else if (Sk(s, e, t, n, i)) i.stopPropagation()
    else if ((jm(e, i), t & 4 && -1 < _k.indexOf(e))) {
      for (; s !== null; ) {
        var u = ru(s)
        if (
          (u !== null && l1(u),
          (u = id(e, t, n, i)),
          u === null && Sh(e, t, i, of, n),
          u === s)
        )
          break
        s = u
      }
      s !== null && i.stopPropagation()
    } else Sh(e, t, i, null, n)
  }
}
var of = null
function id(e, t, n, i) {
  if (((of = null), (e = Xd(i)), (e = Qi(e)), e !== null))
    if (((t = uo(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Zv(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (of = e), null
}
function h1(e) {
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
        case Jd:
          return 1
        case r1:
          return 4
        case tf:
        case hk:
          return 16
        case i1:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var ai = null,
  np = null,
  ja = null
function d1() {
  if (ja) return ja
  var e,
    t = np,
    n = t.length,
    i,
    s = 'value' in ai ? ai.value : ai.textContent,
    u = s.length
  for (e = 0; e < n && t[e] === s[e]; e++);
  var f = n - e
  for (i = 1; i <= f && t[n - i] === s[u - i]; i++);
  return (ja = s.slice(e, 1 < i ? 1 - i : void 0))
}
function Va(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ia() {
  return !0
}
function Wm() {
  return !1
}
function cn(e) {
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
        ? Ia
        : Wm),
      (this.isPropagationStopped = Wm),
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
          (this.isDefaultPrevented = Ia))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ia))
      },
      persist: function () {},
      isPersistent: Ia,
    }),
    t
  )
}
var xs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  rp = cn(xs),
  nu = Ke({}, xs, { view: 0, detail: 0 }),
  kk = cn(nu),
  hh,
  dh,
  dl,
  Mf = Ke({}, nu, {
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
    getModifierState: ip,
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
        : (e !== dl &&
            (dl && e.type === 'mousemove'
              ? ((hh = e.screenX - dl.screenX), (dh = e.screenY - dl.screenY))
              : (dh = hh = 0),
            (dl = e)),
          hh)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : dh
    },
  }),
  Km = cn(Mf),
  Tk = Ke({}, Mf, { dataTransfer: 0 }),
  Ak = cn(Tk),
  Ik = Ke({}, nu, { relatedTarget: 0 }),
  ph = cn(Ik),
  Pk = Ke({}, xs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rk = cn(Pk),
  Lk = Ke({}, xs, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Ok = cn(Lk),
  Nk = Ke({}, xs, { data: 0 }),
  Gm = cn(Nk),
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
function ip() {
  return zk
}
var Uk = Ke({}, nu, {
    key: function (e) {
      if (e.key) {
        var t = Dk[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Va(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
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
    getModifierState: ip,
    charCode: function (e) {
      return e.type === 'keypress' ? Va(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Va(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Bk = cn(Uk),
  $k = Ke({}, Mf, {
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
  qm = cn($k),
  bk = Ke({}, nu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ip,
  }),
  Hk = cn(bk),
  jk = Ke({}, xs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vk = cn(jk),
  Wk = Ke({}, Mf, {
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
  Kk = cn(Wk),
  Gk = [9, 13, 27, 32],
  op = Ir && 'CompositionEvent' in window,
  Cl = null
Ir && 'documentMode' in document && (Cl = document.documentMode)
var qk = Ir && 'TextEvent' in window && !Cl,
  p1 = Ir && (!op || (Cl && 8 < Cl && 11 >= Cl)),
  Ym = ' ',
  Qm = !1
function g1(e, t) {
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
function m1(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Xo = !1
function Yk(e, t) {
  switch (e) {
    case 'compositionend':
      return m1(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Qm = !0), Ym)
    case 'textInput':
      return (e = t.data), e === Ym && Qm ? null : e
    default:
      return null
  }
}
function Qk(e, t) {
  if (Xo)
    return e === 'compositionend' || (!op && g1(e, t))
      ? ((e = d1()), (ja = np = ai = null), (Xo = !1), e)
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
      return p1 && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Xk = {
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
  return t === 'input' ? !!Xk[e.type] : t === 'textarea'
}
function v1(e, t, n, i) {
  qv(i),
    (t = sf(t, 'onChange')),
    0 < t.length &&
      ((n = new rp('onChange', 'change', null, n, i)),
      e.push({ event: n, listeners: t }))
}
var kl = null,
  $l = null
function Jk(e) {
  I1(e, 0)
}
function Ff(e) {
  var t = es(e)
  if (bv(t)) return e
}
function Zk(e, t) {
  if (e === 'change') return t
}
var y1 = !1
if (Ir) {
  var gh
  if (Ir) {
    var mh = 'oninput' in document
    if (!mh) {
      var Jm = document.createElement('div')
      Jm.setAttribute('oninput', 'return;'),
        (mh = typeof Jm.oninput == 'function')
    }
    gh = mh
  } else gh = !1
  y1 = gh && (!document.documentMode || 9 < document.documentMode)
}
function Zm() {
  kl && (kl.detachEvent('onpropertychange', w1), ($l = kl = null))
}
function w1(e) {
  if (e.propertyName === 'value' && Ff($l)) {
    var t = []
    v1(t, $l, e, Xd(e)), Jv(Jk, t)
  }
}
function e4(e, t, n) {
  e === 'focusin'
    ? (Zm(), (kl = t), ($l = n), kl.attachEvent('onpropertychange', w1))
    : e === 'focusout' && Zm()
}
function t4(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ff($l)
}
function n4(e, t) {
  if (e === 'click') return Ff(t)
}
function r4(e, t) {
  if (e === 'input' || e === 'change') return Ff(t)
}
function i4(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Wn = typeof Object.is == 'function' ? Object.is : i4
function bl(e, t) {
  if (Wn(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    i = Object.keys(t)
  if (n.length !== i.length) return !1
  for (i = 0; i < n.length; i++) {
    var s = n[i]
    if (!$h.call(t, s) || !Wn(e[s], t[s])) return !1
  }
  return !0
}
function e0(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function t0(e, t) {
  var n = e0(e)
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
    n = e0(n)
  }
}
function _1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _1(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function S1() {
  for (var e = window, t = Ja(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ja(e.document)
  }
  return t
}
function sp(e) {
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
function o4(e) {
  var t = S1(),
    n = e.focusedElem,
    i = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _1(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && sp(n)) {
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
          (s = t0(n, u))
        var f = t0(n, i)
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
var s4 = Ir && 'documentMode' in document && 11 >= document.documentMode,
  Jo = null,
  od = null,
  Tl = null,
  sd = !1
function n0(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  sd ||
    Jo == null ||
    Jo !== Ja(i) ||
    ((i = Jo),
    'selectionStart' in i && sp(i)
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
    (Tl && bl(Tl, i)) ||
      ((Tl = i),
      (i = sf(od, 'onSelect')),
      0 < i.length &&
        ((t = new rp('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Jo))))
}
function Pa(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Zo = {
    animationend: Pa('Animation', 'AnimationEnd'),
    animationiteration: Pa('Animation', 'AnimationIteration'),
    animationstart: Pa('Animation', 'AnimationStart'),
    transitionend: Pa('Transition', 'TransitionEnd'),
  },
  vh = {},
  E1 = {}
Ir &&
  ((E1 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Zo.animationend.animation,
    delete Zo.animationiteration.animation,
    delete Zo.animationstart.animation),
  'TransitionEvent' in window || delete Zo.transitionend.transition)
function zf(e) {
  if (vh[e]) return vh[e]
  if (!Zo[e]) return e
  var t = Zo[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in E1) return (vh[e] = t[n])
  return e
}
var x1 = zf('animationend'),
  C1 = zf('animationiteration'),
  k1 = zf('animationstart'),
  T1 = zf('transitionend'),
  A1 = new Map(),
  r0 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function xi(e, t) {
  A1.set(e, t), lo(t, [e])
}
for (var yh = 0; yh < r0.length; yh++) {
  var wh = r0[yh],
    l4 = wh.toLowerCase(),
    u4 = wh[0].toUpperCase() + wh.slice(1)
  xi(l4, 'on' + u4)
}
xi(x1, 'onAnimationEnd')
xi(C1, 'onAnimationIteration')
xi(k1, 'onAnimationStart')
xi('dblclick', 'onDoubleClick')
xi('focusin', 'onFocus')
xi('focusout', 'onBlur')
xi(T1, 'onTransitionEnd')
ps('onMouseEnter', ['mouseout', 'mouseover'])
ps('onMouseLeave', ['mouseout', 'mouseover'])
ps('onPointerEnter', ['pointerout', 'pointerover'])
ps('onPointerLeave', ['pointerout', 'pointerover'])
lo(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
lo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
lo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
lo(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
lo(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
lo(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Sl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  a4 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Sl))
function i0(e, t, n) {
  var i = e.type || 'unknown-event'
  ;(e.currentTarget = n), lk(i, t, void 0, e), (e.currentTarget = null)
}
function I1(e, t) {
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
            w = d.currentTarget
          if (((d = d.listener), g !== u && s.isPropagationStopped())) break e
          i0(s, d, w), (u = g)
        }
      else
        for (f = 0; f < i.length; f++) {
          if (
            ((d = i[f]),
            (g = d.instance),
            (w = d.currentTarget),
            (d = d.listener),
            g !== u && s.isPropagationStopped())
          )
            break e
          i0(s, d, w), (u = g)
        }
    }
  }
  if (ef) throw ((e = td), (ef = !1), (td = null), e)
}
function Ue(e, t) {
  var n = t[cd]
  n === void 0 && (n = t[cd] = new Set())
  var i = e + '__bubble'
  n.has(i) || (P1(t, e, 2, !1), n.add(i))
}
function _h(e, t, n) {
  var i = 0
  t && (i |= 4), P1(n, e, i, t)
}
var Ra = '_reactListening' + Math.random().toString(36).slice(2)
function Hl(e) {
  if (!e[Ra]) {
    ;(e[Ra] = !0),
      Fv.forEach(function (n) {
        n !== 'selectionchange' && (a4.has(n) || _h(n, !1, e), _h(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ra] || ((t[Ra] = !0), _h('selectionchange', !1, t))
  }
}
function P1(e, t, n, i) {
  switch (h1(t)) {
    case 1:
      var s = xk
      break
    case 4:
      s = Ck
      break
    default:
      s = tp
  }
  ;(n = s.bind(null, t, n, e)),
    (s = void 0),
    !ed ||
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
function Sh(e, t, n, i, s) {
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
  Jv(function () {
    var w = u,
      P = Xd(n),
      O = []
    e: {
      var E = A1.get(e)
      if (E !== void 0) {
        var B = rp,
          $ = e
        switch (e) {
          case 'keypress':
            if (Va(n) === 0) break e
          case 'keydown':
          case 'keyup':
            B = Bk
            break
          case 'focusin':
            ;($ = 'focus'), (B = ph)
            break
          case 'focusout':
            ;($ = 'blur'), (B = ph)
            break
          case 'beforeblur':
          case 'afterblur':
            B = ph
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
            B = Km
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
          case x1:
          case C1:
          case k1:
            B = Rk
            break
          case T1:
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
            B = qm
        }
        var V = (t & 4) !== 0,
          q = !V && e === 'scroll',
          R = V ? (E !== null ? E + 'Capture' : null) : E
        V = []
        for (var k = w, N; k !== null; ) {
          N = k
          var j = N.stateNode
          if (
            (N.tag === 5 &&
              j !== null &&
              ((N = j),
              R !== null && ((j = Fl(k, R)), j != null && V.push(jl(k, j, N)))),
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
            n !== Jh &&
            ($ = n.relatedTarget || n.fromElement) &&
            (Qi($) || $[Pr]))
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
              (B = w),
              ($ = $ ? Qi($) : null),
              $ !== null &&
                ((q = uo($)), $ !== q || ($.tag !== 5 && $.tag !== 6)) &&
                ($ = null))
            : ((B = null), ($ = w)),
          B !== $)
        ) {
          if (
            ((V = Km),
            (j = 'onMouseLeave'),
            (R = 'onMouseEnter'),
            (k = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((V = qm),
              (j = 'onPointerLeave'),
              (R = 'onPointerEnter'),
              (k = 'pointer')),
            (q = B == null ? E : es(B)),
            (N = $ == null ? E : es($)),
            (E = new V(j, k + 'leave', B, n, P)),
            (E.target = q),
            (E.relatedTarget = N),
            (j = null),
            Qi(P) === w &&
              ((V = new V(R, k + 'enter', $, n, P)),
              (V.target = N),
              (V.relatedTarget = q),
              (j = V)),
            (q = j),
            B && $)
          )
            t: {
              for (V = B, R = $, k = 0, N = V; N; N = Ko(N)) k++
              for (N = 0, j = R; j; j = Ko(j)) N++
              for (; 0 < k - N; ) (V = Ko(V)), k--
              for (; 0 < N - k; ) (R = Ko(R)), N--
              for (; k--; ) {
                if (V === R || (R !== null && V === R.alternate)) break t
                ;(V = Ko(V)), (R = Ko(R))
              }
              V = null
            }
          else V = null
          B !== null && o0(O, E, B, V, !1),
            $ !== null && q !== null && o0(O, q, $, V, !0)
        }
      }
      e: {
        if (
          ((E = w ? es(w) : window),
          (B = E.nodeName && E.nodeName.toLowerCase()),
          B === 'select' || (B === 'input' && E.type === 'file'))
        )
          var Q = Zk
        else if (Xm(E))
          if (y1) Q = r4
          else {
            Q = t4
            var Z = e4
          }
        else
          (B = E.nodeName) &&
            B.toLowerCase() === 'input' &&
            (E.type === 'checkbox' || E.type === 'radio') &&
            (Q = n4)
        if (Q && (Q = Q(e, w))) {
          v1(O, Q, n, P)
          break e
        }
        Z && Z(e, E, w),
          e === 'focusout' &&
            (Z = E._wrapperState) &&
            Z.controlled &&
            E.type === 'number' &&
            Gh(E, 'number', E.value)
      }
      switch (((Z = w ? es(w) : window), e)) {
        case 'focusin':
          ;(Xm(Z) || Z.contentEditable === 'true') &&
            ((Jo = Z), (od = w), (Tl = null))
          break
        case 'focusout':
          Tl = od = Jo = null
          break
        case 'mousedown':
          sd = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(sd = !1), n0(O, n, P)
          break
        case 'selectionchange':
          if (s4) break
        case 'keydown':
        case 'keyup':
          n0(O, n, P)
      }
      var x
      if (op)
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
        Xo
          ? g1(e, n) && (S = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (S = 'onCompositionStart')
      S &&
        (p1 &&
          n.locale !== 'ko' &&
          (Xo || S !== 'onCompositionStart'
            ? S === 'onCompositionEnd' && Xo && (x = d1())
            : ((ai = P),
              (np = 'value' in ai ? ai.value : ai.textContent),
              (Xo = !0))),
        (Z = sf(w, S)),
        0 < Z.length &&
          ((S = new Gm(S, e, null, n, P)),
          O.push({ event: S, listeners: Z }),
          x ? (S.data = x) : ((x = m1(n)), x !== null && (S.data = x)))),
        (x = qk ? Yk(e, n) : Qk(e, n)) &&
          ((w = sf(w, 'onBeforeInput')),
          0 < w.length &&
            ((P = new Gm('onBeforeInput', 'beforeinput', null, n, P)),
            O.push({ event: P, listeners: w }),
            (P.data = x)))
    }
    I1(O, t)
  })
}
function jl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function sf(e, t) {
  for (var n = t + 'Capture', i = []; e !== null; ) {
    var s = e,
      u = s.stateNode
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      (u = Fl(e, n)),
      u != null && i.unshift(jl(e, u, s)),
      (u = Fl(e, t)),
      u != null && i.push(jl(e, u, s))),
      (e = e.return)
  }
  return i
}
function Ko(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function o0(e, t, n, i, s) {
  for (var u = t._reactName, f = []; n !== null && n !== i; ) {
    var d = n,
      g = d.alternate,
      w = d.stateNode
    if (g !== null && g === i) break
    d.tag === 5 &&
      w !== null &&
      ((d = w),
      s
        ? ((g = Fl(n, u)), g != null && f.unshift(jl(n, g, d)))
        : s || ((g = Fl(n, u)), g != null && f.push(jl(n, g, d)))),
      (n = n.return)
  }
  f.length !== 0 && e.push({ event: t, listeners: f })
}
var f4 = /\r\n?/g,
  c4 = /\u0000|\uFFFD/g
function s0(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      f4,
      `
`
    )
    .replace(c4, '')
}
function La(e, t, n) {
  if (((t = s0(t)), s0(e) !== t && n)) throw Error(J(425))
}
function lf() {}
var ld = null,
  ud = null
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
var fd = typeof setTimeout == 'function' ? setTimeout : void 0,
  h4 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  l0 = typeof Promise == 'function' ? Promise : void 0,
  d4 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof l0 < 'u'
      ? function (e) {
          return l0.resolve(null).then(e).catch(p4)
        }
      : fd
function p4(e) {
  setTimeout(function () {
    throw e
  })
}
function Eh(e, t) {
  var n = t,
    i = 0
  do {
    var s = n.nextSibling
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === '/$')) {
        if (i === 0) {
          e.removeChild(s), Bl(t)
          return
        }
        i--
      } else (n !== '$' && n !== '$?' && n !== '$!') || i++
    n = s
  } while (n)
  Bl(t)
}
function pi(e) {
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
function u0(e) {
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
var Cs = Math.random().toString(36).slice(2),
  rr = '__reactFiber$' + Cs,
  Vl = '__reactProps$' + Cs,
  Pr = '__reactContainer$' + Cs,
  cd = '__reactEvents$' + Cs,
  g4 = '__reactListeners$' + Cs,
  m4 = '__reactHandles$' + Cs
function Qi(e) {
  var t = e[rr]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pr] || n[rr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = u0(e); e !== null; ) {
          if ((n = e[rr])) return n
          e = u0(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function ru(e) {
  return (
    (e = e[rr] || e[Pr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function es(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(J(33))
}
function Uf(e) {
  return e[Vl] || null
}
var hd = [],
  ts = -1
function Ci(e) {
  return { current: e }
}
function Be(e) {
  0 > ts || ((e.current = hd[ts]), (hd[ts] = null), ts--)
}
function ze(e, t) {
  ts++, (hd[ts] = e.current), (e.current = t)
}
var Ei = {},
  Tt = Ci(Ei),
  Jt = Ci(!1),
  no = Ei
function gs(e, t) {
  var n = e.type.contextTypes
  if (!n) return Ei
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
function Zt(e) {
  return (e = e.childContextTypes), e != null
}
function uf() {
  Be(Jt), Be(Tt)
}
function a0(e, t, n) {
  if (Tt.current !== Ei) throw Error(J(168))
  ze(Tt, t), ze(Jt, n)
}
function R1(e, t, n) {
  var i = e.stateNode
  if (((t = t.childContextTypes), typeof i.getChildContext != 'function'))
    return n
  i = i.getChildContext()
  for (var s in i) if (!(s in t)) throw Error(J(108, ek(e) || 'Unknown', s))
  return Ke({}, n, i)
}
function af(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ei),
    (no = Tt.current),
    ze(Tt, e),
    ze(Jt, Jt.current),
    !0
  )
}
function f0(e, t, n) {
  var i = e.stateNode
  if (!i) throw Error(J(169))
  n
    ? ((e = R1(e, t, no)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      Be(Jt),
      Be(Tt),
      ze(Tt, e))
    : Be(Jt),
    ze(Jt, n)
}
var Cr = null,
  Bf = !1,
  xh = !1
function L1(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e)
}
function v4(e) {
  ;(Bf = !0), L1(e)
}
function ki() {
  if (!xh && Cr !== null) {
    xh = !0
    var e = 0,
      t = Ne
    try {
      var n = Cr
      for (Ne = 1; e < n.length; e++) {
        var i = n[e]
        do i = i(!0)
        while (i !== null)
      }
      ;(Cr = null), (Bf = !1)
    } catch (s) {
      throw (Cr !== null && (Cr = Cr.slice(e + 1)), n1(Jd, ki), s)
    } finally {
      ;(Ne = t), (xh = !1)
    }
  }
  return null
}
var ns = [],
  rs = 0,
  ff = null,
  cf = 0,
  Tn = [],
  An = 0,
  ro = null,
  kr = 1,
  Tr = ''
function Gi(e, t) {
  ;(ns[rs++] = cf), (ns[rs++] = ff), (ff = e), (cf = t)
}
function O1(e, t, n) {
  ;(Tn[An++] = kr), (Tn[An++] = Tr), (Tn[An++] = ro), (ro = e)
  var i = kr
  e = Tr
  var s = 32 - jn(i) - 1
  ;(i &= ~(1 << s)), (n += 1)
  var u = 32 - jn(t) + s
  if (30 < u) {
    var f = s - (s % 5)
    ;(u = (i & ((1 << f) - 1)).toString(32)),
      (i >>= f),
      (s -= f),
      (kr = (1 << (32 - jn(t) + s)) | (n << s) | i),
      (Tr = u + e)
  } else (kr = (1 << u) | (n << s) | i), (Tr = e)
}
function lp(e) {
  e.return !== null && (Gi(e, 1), O1(e, 1, 0))
}
function up(e) {
  for (; e === ff; )
    (ff = ns[--rs]), (ns[rs] = null), (cf = ns[--rs]), (ns[rs] = null)
  for (; e === ro; )
    (ro = Tn[--An]),
      (Tn[An] = null),
      (Tr = Tn[--An]),
      (Tn[An] = null),
      (kr = Tn[--An]),
      (Tn[An] = null)
}
var un = null,
  ln = null,
  $e = !1,
  bn = null
function N1(e, t) {
  var n = In(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function c0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (un = e), (ln = pi(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (un = e), (ln = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ro !== null ? { id: kr, overflow: Tr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = In(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (un = e),
            (ln = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function dd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function pd(e) {
  if ($e) {
    var t = ln
    if (t) {
      var n = t
      if (!c0(e, t)) {
        if (dd(e)) throw Error(J(418))
        t = pi(n.nextSibling)
        var i = un
        t && c0(e, t)
          ? N1(i, n)
          : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (un = e))
      }
    } else {
      if (dd(e)) throw Error(J(418))
      ;(e.flags = (e.flags & -4097) | 2), ($e = !1), (un = e)
    }
  }
}
function h0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  un = e
}
function Oa(e) {
  if (e !== un) return !1
  if (!$e) return h0(e), ($e = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ad(e.type, e.memoizedProps))),
    t && (t = ln))
  ) {
    if (dd(e)) throw (D1(), Error(J(418)))
    for (; t; ) N1(e, t), (t = pi(t.nextSibling))
  }
  if ((h0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(J(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              ln = pi(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      ln = null
    }
  } else ln = un ? pi(e.stateNode.nextSibling) : null
  return !0
}
function D1() {
  for (var e = ln; e; ) e = pi(e.nextSibling)
}
function ms() {
  ;(ln = un = null), ($e = !1)
}
function ap(e) {
  bn === null ? (bn = [e]) : bn.push(e)
}
var y4 = Nr.ReactCurrentBatchConfig
function Bn(e, t) {
  if (e && e.defaultProps) {
    ;(t = Ke({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var hf = Ci(null),
  df = null,
  is = null,
  fp = null
function cp() {
  fp = is = df = null
}
function hp(e) {
  var t = hf.current
  Be(hf), (e._currentValue = t)
}
function gd(e, t, n) {
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
function cs(e, t) {
  ;(df = e),
    (fp = is = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xt = !0), (e.firstContext = null))
}
function Rn(e) {
  var t = e._currentValue
  if (fp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), is === null)) {
      if (df === null) throw Error(J(308))
      ;(is = e), (df.dependencies = { lanes: 0, firstContext: e })
    } else is = is.next = e
  return t
}
var Xi = null
function dp(e) {
  Xi === null ? (Xi = [e]) : Xi.push(e)
}
function M1(e, t, n, i) {
  var s = t.interleaved
  return (
    s === null ? ((n.next = n), dp(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Rr(e, i)
  )
}
function Rr(e, t) {
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
var oi = !1
function pp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function F1(e, t) {
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
function Ar(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function gi(e, t, n) {
  var i = e.updateQueue
  if (i === null) return null
  if (((i = i.shared), xe & 2)) {
    var s = i.pending
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (i.pending = t),
      Rr(e, n)
    )
  }
  return (
    (s = i.interleaved),
    s === null ? ((t.next = t), dp(i)) : ((t.next = s.next), (s.next = t)),
    (i.interleaved = t),
    Rr(e, n)
  )
}
function Wa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Zd(e, n)
  }
}
function d0(e, t) {
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
function pf(e, t, n, i) {
  var s = e.updateQueue
  oi = !1
  var u = s.firstBaseUpdate,
    f = s.lastBaseUpdate,
    d = s.shared.pending
  if (d !== null) {
    s.shared.pending = null
    var g = d,
      w = g.next
    ;(g.next = null), f === null ? (u = w) : (f.next = w), (f = g)
    var P = e.alternate
    P !== null &&
      ((P = P.updateQueue),
      (d = P.lastBaseUpdate),
      d !== f &&
        (d === null ? (P.firstBaseUpdate = w) : (d.next = w),
        (P.lastBaseUpdate = g)))
  }
  if (u !== null) {
    var O = s.baseState
    ;(f = 0), (P = w = g = null), (d = u)
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
              oi = !0
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
          P === null ? ((w = P = B), (g = O)) : (P = P.next = B),
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
      (s.firstBaseUpdate = w),
      (s.lastBaseUpdate = P),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t
      do (f |= s.lane), (s = s.next)
      while (s !== t)
    } else u === null && (s.shared.lanes = 0)
    ;(oo |= f), (e.lanes = f), (e.memoizedState = O)
  }
}
function p0(e, t, n) {
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
var z1 = new Mv.Component().refs
function md(e, t, n, i) {
  ;(t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : Ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var $f = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? uo(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var i = Ut(),
      s = vi(e),
      u = Ar(i, s)
    ;(u.payload = t),
      n != null && (u.callback = n),
      (t = gi(e, u, s)),
      t !== null && (Vn(t, e, s, i), Wa(t, e, s))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var i = Ut(),
      s = vi(e),
      u = Ar(i, s)
    ;(u.tag = 1),
      (u.payload = t),
      n != null && (u.callback = n),
      (t = gi(e, u, s)),
      t !== null && (Vn(t, e, s, i), Wa(t, e, s))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ut(),
      i = vi(e),
      s = Ar(n, i)
    ;(s.tag = 2),
      t != null && (s.callback = t),
      (t = gi(e, s, i)),
      t !== null && (Vn(t, e, i, n), Wa(t, e, i))
  },
}
function g0(e, t, n, i, s, u, f) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(i, u, f)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bl(n, i) || !bl(s, u)
      : !0
  )
}
function U1(e, t, n) {
  var i = !1,
    s = Ei,
    u = t.contextType
  return (
    typeof u == 'object' && u !== null
      ? (u = Rn(u))
      : ((s = Zt(t) ? no : Tt.current),
        (i = t.contextTypes),
        (u = (i = i != null) ? gs(e, s) : Ei)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $f),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  )
}
function m0(e, t, n, i) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && $f.enqueueReplaceState(t, t.state, null)
}
function vd(e, t, n, i) {
  var s = e.stateNode
  ;(s.props = n), (s.state = e.memoizedState), (s.refs = z1), pp(e)
  var u = t.contextType
  typeof u == 'object' && u !== null
    ? (s.context = Rn(u))
    : ((u = Zt(t) ? no : Tt.current), (s.context = gs(e, u))),
    (s.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == 'function' && (md(e, t, u, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function' ||
      (typeof s.UNSAFE_componentWillMount != 'function' &&
        typeof s.componentWillMount != 'function') ||
      ((t = s.state),
      typeof s.componentWillMount == 'function' && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == 'function' &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && $f.enqueueReplaceState(s, s.state, null),
      pf(e, n, s, i),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == 'function' && (e.flags |= 4194308)
}
function pl(e, t, n) {
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
            d === z1 && (d = s.refs = {}), f === null ? delete d[u] : (d[u] = f)
          }),
          (t._stringRef = u),
          t)
    }
    if (typeof e != 'string') throw Error(J(284))
    if (!n._owner) throw Error(J(290, e))
  }
  return e
}
function Na(e, t) {
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
function v0(e) {
  var t = e._init
  return t(e._payload)
}
function B1(e) {
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
    return (R = yi(R, k)), (R.index = 0), (R.sibling = null), R
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
      ? ((k = Rh(N, R.mode, j)), (k.return = R), k)
      : ((k = s(k, N)), (k.return = R), k)
  }
  function g(R, k, N, j) {
    var Q = N.type
    return Q === Qo
      ? P(R, k, N.props.children, j, N.key)
      : k !== null &&
        (k.elementType === Q ||
          (typeof Q == 'object' &&
            Q !== null &&
            Q.$$typeof === ii &&
            v0(Q) === k.type))
      ? ((j = s(k, N.props)), (j.ref = pl(R, k, N)), (j.return = R), j)
      : ((j = Xa(N.type, N.key, N.props, null, R.mode, j)),
        (j.ref = pl(R, k, N)),
        (j.return = R),
        j)
  }
  function w(R, k, N, j) {
    return k === null ||
      k.tag !== 4 ||
      k.stateNode.containerInfo !== N.containerInfo ||
      k.stateNode.implementation !== N.implementation
      ? ((k = Lh(N, R.mode, j)), (k.return = R), k)
      : ((k = s(k, N.children || [])), (k.return = R), k)
  }
  function P(R, k, N, j, Q) {
    return k === null || k.tag !== 7
      ? ((k = to(N, R.mode, j, Q)), (k.return = R), k)
      : ((k = s(k, N)), (k.return = R), k)
  }
  function O(R, k, N) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (k = Rh('' + k, R.mode, N)), (k.return = R), k
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case Ea:
          return (
            (N = Xa(k.type, k.key, k.props, null, R.mode, N)),
            (N.ref = pl(R, null, k)),
            (N.return = R),
            N
          )
        case Yo:
          return (k = Lh(k, R.mode, N)), (k.return = R), k
        case ii:
          var j = k._init
          return O(R, j(k._payload), N)
      }
      if (wl(k) || al(k)) return (k = to(k, R.mode, N, null)), (k.return = R), k
      Na(R, k)
    }
    return null
  }
  function E(R, k, N, j) {
    var Q = k !== null ? k.key : null
    if ((typeof N == 'string' && N !== '') || typeof N == 'number')
      return Q !== null ? null : d(R, k, '' + N, j)
    if (typeof N == 'object' && N !== null) {
      switch (N.$$typeof) {
        case Ea:
          return N.key === Q ? g(R, k, N, j) : null
        case Yo:
          return N.key === Q ? w(R, k, N, j) : null
        case ii:
          return (Q = N._init), E(R, k, Q(N._payload), j)
      }
      if (wl(N) || al(N)) return Q !== null ? null : P(R, k, N, j, null)
      Na(R, N)
    }
    return null
  }
  function B(R, k, N, j, Q) {
    if ((typeof j == 'string' && j !== '') || typeof j == 'number')
      return (R = R.get(N) || null), d(k, R, '' + j, Q)
    if (typeof j == 'object' && j !== null) {
      switch (j.$$typeof) {
        case Ea:
          return (R = R.get(j.key === null ? N : j.key) || null), g(k, R, j, Q)
        case Yo:
          return (R = R.get(j.key === null ? N : j.key) || null), w(k, R, j, Q)
        case ii:
          var Z = j._init
          return B(R, k, N, Z(j._payload), Q)
      }
      if (wl(j) || al(j)) return (R = R.get(N) || null), P(k, R, j, Q, null)
      Na(k, j)
    }
    return null
  }
  function $(R, k, N, j) {
    for (
      var Q = null, Z = null, x = k, S = (k = 0), T = null;
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
        Z === null ? (Q = I) : (Z.sibling = I),
        (Z = I),
        (x = T)
    }
    if (S === N.length) return n(R, x), $e && Gi(R, S), Q
    if (x === null) {
      for (; S < N.length; S++)
        (x = O(R, N[S], j)),
          x !== null &&
            ((k = u(x, k, S)), Z === null ? (Q = x) : (Z.sibling = x), (Z = x))
      return $e && Gi(R, S), Q
    }
    for (x = i(R, x); S < N.length; S++)
      (T = B(x, R, S, N[S], j)),
        T !== null &&
          (e && T.alternate !== null && x.delete(T.key === null ? S : T.key),
          (k = u(T, k, S)),
          Z === null ? (Q = T) : (Z.sibling = T),
          (Z = T))
    return (
      e &&
        x.forEach(function (D) {
          return t(R, D)
        }),
      $e && Gi(R, S),
      Q
    )
  }
  function V(R, k, N, j) {
    var Q = al(N)
    if (typeof Q != 'function') throw Error(J(150))
    if (((N = Q.call(N)), N == null)) throw Error(J(151))
    for (
      var Z = (Q = null), x = k, S = (k = 0), T = null, I = N.next();
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
        Z === null ? (Q = D) : (Z.sibling = D),
        (Z = D),
        (x = T)
    }
    if (I.done) return n(R, x), $e && Gi(R, S), Q
    if (x === null) {
      for (; !I.done; S++, I = N.next())
        (I = O(R, I.value, j)),
          I !== null &&
            ((k = u(I, k, S)), Z === null ? (Q = I) : (Z.sibling = I), (Z = I))
      return $e && Gi(R, S), Q
    }
    for (x = i(R, x); !I.done; S++, I = N.next())
      (I = B(x, R, S, I.value, j)),
        I !== null &&
          (e && I.alternate !== null && x.delete(I.key === null ? S : I.key),
          (k = u(I, k, S)),
          Z === null ? (Q = I) : (Z.sibling = I),
          (Z = I))
    return (
      e &&
        x.forEach(function (U) {
          return t(R, U)
        }),
      $e && Gi(R, S),
      Q
    )
  }
  function q(R, k, N, j) {
    if (
      (typeof N == 'object' &&
        N !== null &&
        N.type === Qo &&
        N.key === null &&
        (N = N.props.children),
      typeof N == 'object' && N !== null)
    ) {
      switch (N.$$typeof) {
        case Ea:
          e: {
            for (var Q = N.key, Z = k; Z !== null; ) {
              if (Z.key === Q) {
                if (((Q = N.type), Q === Qo)) {
                  if (Z.tag === 7) {
                    n(R, Z.sibling),
                      (k = s(Z, N.props.children)),
                      (k.return = R),
                      (R = k)
                    break e
                  }
                } else if (
                  Z.elementType === Q ||
                  (typeof Q == 'object' &&
                    Q !== null &&
                    Q.$$typeof === ii &&
                    v0(Q) === Z.type)
                ) {
                  n(R, Z.sibling),
                    (k = s(Z, N.props)),
                    (k.ref = pl(R, Z, N)),
                    (k.return = R),
                    (R = k)
                  break e
                }
                n(R, Z)
                break
              } else t(R, Z)
              Z = Z.sibling
            }
            N.type === Qo
              ? ((k = to(N.props.children, R.mode, j, N.key)),
                (k.return = R),
                (R = k))
              : ((j = Xa(N.type, N.key, N.props, null, R.mode, j)),
                (j.ref = pl(R, k, N)),
                (j.return = R),
                (R = j))
          }
          return f(R)
        case Yo:
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
            ;(k = Lh(N, R.mode, j)), (k.return = R), (R = k)
          }
          return f(R)
        case ii:
          return (Z = N._init), q(R, k, Z(N._payload), j)
      }
      if (wl(N)) return $(R, k, N, j)
      if (al(N)) return V(R, k, N, j)
      Na(R, N)
    }
    return (typeof N == 'string' && N !== '') || typeof N == 'number'
      ? ((N = '' + N),
        k !== null && k.tag === 6
          ? (n(R, k.sibling), (k = s(k, N)), (k.return = R), (R = k))
          : (n(R, k), (k = Rh(N, R.mode, j)), (k.return = R), (R = k)),
        f(R))
      : n(R, k)
  }
  return q
}
var vs = B1(!0),
  $1 = B1(!1),
  iu = {},
  sr = Ci(iu),
  Wl = Ci(iu),
  Kl = Ci(iu)
function Ji(e) {
  if (e === iu) throw Error(J(174))
  return e
}
function gp(e, t) {
  switch ((ze(Kl, t), ze(Wl, e), ze(sr, iu), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yh(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yh(t, e))
  }
  Be(sr), ze(sr, t)
}
function ys() {
  Be(sr), Be(Wl), Be(Kl)
}
function b1(e) {
  Ji(Kl.current)
  var t = Ji(sr.current),
    n = Yh(t, e.type)
  t !== n && (ze(Wl, e), ze(sr, n))
}
function mp(e) {
  Wl.current === e && (Be(sr), Be(Wl))
}
var Ve = Ci(0)
function gf(e) {
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
var Ch = []
function vp() {
  for (var e = 0; e < Ch.length; e++) Ch[e]._workInProgressVersionPrimary = null
  Ch.length = 0
}
var Ka = Nr.ReactCurrentDispatcher,
  kh = Nr.ReactCurrentBatchConfig,
  io = 0,
  We = null,
  at = null,
  dt = null,
  mf = !1,
  Al = !1,
  Gl = 0,
  w4 = 0
function Et() {
  throw Error(J(321))
}
function yp(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wn(e[n], t[n])) return !1
  return !0
}
function wp(e, t, n, i, s, u) {
  if (
    ((io = u),
    (We = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ka.current = e === null || e.memoizedState === null ? x4 : C4),
    (e = n(i, s)),
    Al)
  ) {
    u = 0
    do {
      if (((Al = !1), (Gl = 0), 25 <= u)) throw Error(J(301))
      ;(u += 1),
        (dt = at = null),
        (t.updateQueue = null),
        (Ka.current = k4),
        (e = n(i, s))
    } while (Al)
  }
  if (
    ((Ka.current = vf),
    (t = at !== null && at.next !== null),
    (io = 0),
    (dt = at = We = null),
    (mf = !1),
    t)
  )
    throw Error(J(300))
  return e
}
function _p() {
  var e = Gl !== 0
  return (Gl = 0), e
}
function nr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return dt === null ? (We.memoizedState = dt = e) : (dt = dt.next = e), dt
}
function Ln() {
  if (at === null) {
    var e = We.alternate
    e = e !== null ? e.memoizedState : null
  } else e = at.next
  var t = dt === null ? We.memoizedState : dt.next
  if (t !== null) (dt = t), (at = e)
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
      dt === null ? (We.memoizedState = dt = e) : (dt = dt.next = e)
  }
  return dt
}
function ql(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Th(e) {
  var t = Ln(),
    n = t.queue
  if (n === null) throw Error(J(311))
  n.lastRenderedReducer = e
  var i = at,
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
      w = u
    do {
      var P = w.lane
      if ((io & P) === P)
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
        g === null ? ((d = g = O), (f = i)) : (g = g.next = O),
          (We.lanes |= P),
          (oo |= P)
      }
      w = w.next
    } while (w !== null && w !== u)
    g === null ? (f = i) : (g.next = d),
      Wn(i, t.memoizedState) || (Xt = !0),
      (t.memoizedState = i),
      (t.baseState = f),
      (t.baseQueue = g),
      (n.lastRenderedState = i)
  }
  if (((e = n.interleaved), e !== null)) {
    s = e
    do (u = s.lane), (We.lanes |= u), (oo |= u), (s = s.next)
    while (s !== e)
  } else s === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Ah(e) {
  var t = Ln(),
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
    Wn(u, t.memoizedState) || (Xt = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u)
  }
  return [u, i]
}
function H1() {}
function j1(e, t) {
  var n = We,
    i = Ln(),
    s = t(),
    u = !Wn(i.memoizedState, s)
  if (
    (u && ((i.memoizedState = s), (Xt = !0)),
    (i = i.queue),
    Sp(K1.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || u || (dt !== null && dt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yl(9, W1.bind(null, n, i, s, t), void 0, null),
      pt === null)
    )
      throw Error(J(349))
    io & 30 || V1(n, t, s)
  }
  return s
}
function V1(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function W1(e, t, n, i) {
  ;(t.value = n), (t.getSnapshot = i), G1(t) && q1(e)
}
function K1(e, t, n) {
  return n(function () {
    G1(t) && q1(e)
  })
}
function G1(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Wn(e, n)
  } catch {
    return !0
  }
}
function q1(e) {
  var t = Rr(e, 1)
  t !== null && Vn(t, e, 1, -1)
}
function y0(e) {
  var t = nr()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ql,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = E4.bind(null, We, e)),
    [t.memoizedState, e]
  )
}
function Yl(e, t, n, i) {
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
function Y1() {
  return Ln().memoizedState
}
function Ga(e, t, n, i) {
  var s = nr()
  ;(We.flags |= e),
    (s.memoizedState = Yl(1 | t, n, void 0, i === void 0 ? null : i))
}
function bf(e, t, n, i) {
  var s = Ln()
  i = i === void 0 ? null : i
  var u = void 0
  if (at !== null) {
    var f = at.memoizedState
    if (((u = f.destroy), i !== null && yp(i, f.deps))) {
      s.memoizedState = Yl(t, n, u, i)
      return
    }
  }
  ;(We.flags |= e), (s.memoizedState = Yl(1 | t, n, u, i))
}
function w0(e, t) {
  return Ga(8390656, 8, e, t)
}
function Sp(e, t) {
  return bf(2048, 8, e, t)
}
function Q1(e, t) {
  return bf(4, 2, e, t)
}
function X1(e, t) {
  return bf(4, 4, e, t)
}
function J1(e, t) {
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
function Z1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bf(4, 4, J1.bind(null, t, e), n)
  )
}
function Ep() {}
function ey(e, t) {
  var n = Ln()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && yp(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e)
}
function ty(e, t) {
  var n = Ln()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && yp(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function ny(e, t, n) {
  return io & 21
    ? (Wn(n, t) || ((n = o1()), (We.lanes |= n), (oo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xt = !0)), (e.memoizedState = n))
}
function _4(e, t) {
  var n = Ne
  ;(Ne = n !== 0 && 4 > n ? n : 4), e(!0)
  var i = kh.transition
  kh.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Ne = n), (kh.transition = i)
  }
}
function ry() {
  return Ln().memoizedState
}
function S4(e, t, n) {
  var i = vi(e)
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    iy(e))
  )
    oy(t, n)
  else if (((n = M1(e, t, n, i)), n !== null)) {
    var s = Ut()
    Vn(n, e, i, s), sy(n, t, i)
  }
}
function E4(e, t, n) {
  var i = vi(e),
    s = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (iy(e)) oy(t, s)
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
        if (((s.hasEagerState = !0), (s.eagerState = d), Wn(d, f))) {
          var g = t.interleaved
          g === null
            ? ((s.next = s), dp(t))
            : ((s.next = g.next), (g.next = s)),
            (t.interleaved = s)
          return
        }
      } catch {
      } finally {
      }
    ;(n = M1(e, t, s, i)),
      n !== null && ((s = Ut()), Vn(n, e, i, s), sy(n, t, i))
  }
}
function iy(e) {
  var t = e.alternate
  return e === We || (t !== null && t === We)
}
function oy(e, t) {
  Al = mf = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function sy(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Zd(e, n)
  }
}
var vf = {
    readContext: Rn,
    useCallback: Et,
    useContext: Et,
    useEffect: Et,
    useImperativeHandle: Et,
    useInsertionEffect: Et,
    useLayoutEffect: Et,
    useMemo: Et,
    useReducer: Et,
    useRef: Et,
    useState: Et,
    useDebugValue: Et,
    useDeferredValue: Et,
    useTransition: Et,
    useMutableSource: Et,
    useSyncExternalStore: Et,
    useId: Et,
    unstable_isNewReconciler: !1,
  },
  x4 = {
    readContext: Rn,
    useCallback: function (e, t) {
      return (nr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Rn,
    useEffect: w0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ga(4194308, 4, J1.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Ga(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ga(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = nr()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var i = nr()
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
        (e = e.dispatch = S4.bind(null, We, e)),
        [i.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = nr()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: y0,
    useDebugValue: Ep,
    useDeferredValue: function (e) {
      return (nr().memoizedState = e)
    },
    useTransition: function () {
      var e = y0(!1),
        t = e[0]
      return (e = _4.bind(null, e[1])), (nr().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = We,
        s = nr()
      if ($e) {
        if (n === void 0) throw Error(J(407))
        n = n()
      } else {
        if (((n = t()), pt === null)) throw Error(J(349))
        io & 30 || V1(i, t, n)
      }
      s.memoizedState = n
      var u = { value: n, getSnapshot: t }
      return (
        (s.queue = u),
        w0(K1.bind(null, i, u, e), [e]),
        (i.flags |= 2048),
        Yl(9, W1.bind(null, i, u, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = nr(),
        t = pt.identifierPrefix
      if ($e) {
        var n = Tr,
          i = kr
        ;(n = (i & ~(1 << (32 - jn(i) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Gl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = w4++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  C4 = {
    readContext: Rn,
    useCallback: ey,
    useContext: Rn,
    useEffect: Sp,
    useImperativeHandle: Z1,
    useInsertionEffect: Q1,
    useLayoutEffect: X1,
    useMemo: ty,
    useReducer: Th,
    useRef: Y1,
    useState: function () {
      return Th(ql)
    },
    useDebugValue: Ep,
    useDeferredValue: function (e) {
      var t = Ln()
      return ny(t, at.memoizedState, e)
    },
    useTransition: function () {
      var e = Th(ql)[0],
        t = Ln().memoizedState
      return [e, t]
    },
    useMutableSource: H1,
    useSyncExternalStore: j1,
    useId: ry,
    unstable_isNewReconciler: !1,
  },
  k4 = {
    readContext: Rn,
    useCallback: ey,
    useContext: Rn,
    useEffect: Sp,
    useImperativeHandle: Z1,
    useInsertionEffect: Q1,
    useLayoutEffect: X1,
    useMemo: ty,
    useReducer: Ah,
    useRef: Y1,
    useState: function () {
      return Ah(ql)
    },
    useDebugValue: Ep,
    useDeferredValue: function (e) {
      var t = Ln()
      return at === null ? (t.memoizedState = e) : ny(t, at.memoizedState, e)
    },
    useTransition: function () {
      var e = Ah(ql)[0],
        t = Ln().memoizedState
      return [e, t]
    },
    useMutableSource: H1,
    useSyncExternalStore: j1,
    useId: ry,
    unstable_isNewReconciler: !1,
  }
function ws(e, t) {
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
function Ih(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function yd(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var T4 = typeof WeakMap == 'function' ? WeakMap : Map
function ly(e, t, n) {
  ;(n = Ar(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var i = t.value
  return (
    (n.callback = function () {
      wf || ((wf = !0), (Id = i)), yd(e, t)
    }),
    n
  )
}
function uy(e, t, n) {
  ;(n = Ar(-1, n)), (n.tag = 3)
  var i = e.type.getDerivedStateFromError
  if (typeof i == 'function') {
    var s = t.value
    ;(n.payload = function () {
      return i(s)
    }),
      (n.callback = function () {
        yd(e, t)
      })
  }
  var u = e.stateNode
  return (
    u !== null &&
      typeof u.componentDidCatch == 'function' &&
      (n.callback = function () {
        yd(e, t),
          typeof i != 'function' &&
            (mi === null ? (mi = new Set([this])) : mi.add(this))
        var f = t.stack
        this.componentDidCatch(t.value, { componentStack: f !== null ? f : '' })
      }),
    n
  )
}
function _0(e, t, n) {
  var i = e.pingCache
  if (i === null) {
    i = e.pingCache = new T4()
    var s = new Set()
    i.set(t, s)
  } else (s = i.get(t)), s === void 0 && ((s = new Set()), i.set(t, s))
  s.has(n) || (s.add(n), (e = $4.bind(null, e, t, n)), t.then(e, e))
}
function S0(e) {
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
function E0(e, t, n, i, s) {
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
              : ((t = Ar(-1, 1)), (t.tag = 2), gi(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var A4 = Nr.ReactCurrentOwner,
  Xt = !1
function Ft(e, t, n, i) {
  t.child = e === null ? $1(t, null, n, i) : vs(t, e.child, n, i)
}
function x0(e, t, n, i, s) {
  n = n.render
  var u = t.ref
  return (
    cs(t, s),
    (i = wp(e, t, n, i, u, s)),
    (n = _p()),
    e !== null && !Xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Lr(e, t, s))
      : ($e && n && lp(t), (t.flags |= 1), Ft(e, t, i, s), t.child)
  )
}
function C0(e, t, n, i, s) {
  if (e === null) {
    var u = n.type
    return typeof u == 'function' &&
      !Rp(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), ay(e, t, u, i, s))
      : ((e = Xa(n.type, null, i, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((u = e.child), !(e.lanes & s))) {
    var f = u.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : bl), n(f, i) && e.ref === t.ref)
    )
      return Lr(e, t, s)
  }
  return (
    (t.flags |= 1),
    (e = yi(u, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function ay(e, t, n, i, s) {
  if (e !== null) {
    var u = e.memoizedProps
    if (bl(u, i) && e.ref === t.ref)
      if (((Xt = !1), (t.pendingProps = i = u), (e.lanes & s) !== 0))
        e.flags & 131072 && (Xt = !0)
      else return (t.lanes = e.lanes), Lr(e, t, s)
  }
  return wd(e, t, n, i, s)
}
function fy(e, t, n) {
  var i = t.pendingProps,
    s = i.children,
    u = e !== null ? e.memoizedState : null
  if (i.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ze(ss, sn),
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
          ze(ss, sn),
          (sn |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = u !== null ? u.baseLanes : n),
        ze(ss, sn),
        (sn |= i)
    }
  else
    u !== null ? ((i = u.baseLanes | n), (t.memoizedState = null)) : (i = n),
      ze(ss, sn),
      (sn |= i)
  return Ft(e, t, s, n), t.child
}
function cy(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function wd(e, t, n, i, s) {
  var u = Zt(n) ? no : Tt.current
  return (
    (u = gs(t, u)),
    cs(t, s),
    (n = wp(e, t, n, i, u, s)),
    (i = _p()),
    e !== null && !Xt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Lr(e, t, s))
      : ($e && i && lp(t), (t.flags |= 1), Ft(e, t, n, s), t.child)
  )
}
function k0(e, t, n, i, s) {
  if (Zt(n)) {
    var u = !0
    af(t)
  } else u = !1
  if ((cs(t, s), t.stateNode === null))
    qa(e, t), U1(t, n, i), vd(t, n, i, s), (i = !0)
  else if (e === null) {
    var f = t.stateNode,
      d = t.memoizedProps
    f.props = d
    var g = f.context,
      w = n.contextType
    typeof w == 'object' && w !== null
      ? (w = Rn(w))
      : ((w = Zt(n) ? no : Tt.current), (w = gs(t, w)))
    var P = n.getDerivedStateFromProps,
      O =
        typeof P == 'function' || typeof f.getSnapshotBeforeUpdate == 'function'
    O ||
      (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof f.componentWillReceiveProps != 'function') ||
      ((d !== i || g !== w) && m0(t, f, i, w)),
      (oi = !1)
    var E = t.memoizedState
    ;(f.state = E),
      pf(t, i, f, s),
      (g = t.memoizedState),
      d !== i || E !== g || Jt.current || oi
        ? (typeof P == 'function' && (md(t, n, P, i), (g = t.memoizedState)),
          (d = oi || g0(t, n, d, i, E, g, w))
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
          (f.context = w),
          (i = d))
        : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
          (i = !1))
  } else {
    ;(f = t.stateNode),
      F1(e, t),
      (d = t.memoizedProps),
      (w = t.type === t.elementType ? d : Bn(t.type, d)),
      (f.props = w),
      (O = t.pendingProps),
      (E = f.context),
      (g = n.contextType),
      typeof g == 'object' && g !== null
        ? (g = Rn(g))
        : ((g = Zt(n) ? no : Tt.current), (g = gs(t, g)))
    var B = n.getDerivedStateFromProps
    ;(P =
      typeof B == 'function' ||
      typeof f.getSnapshotBeforeUpdate == 'function') ||
      (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof f.componentWillReceiveProps != 'function') ||
      ((d !== O || E !== g) && m0(t, f, i, g)),
      (oi = !1),
      (E = t.memoizedState),
      (f.state = E),
      pf(t, i, f, s)
    var $ = t.memoizedState
    d !== O || E !== $ || Jt.current || oi
      ? (typeof B == 'function' && (md(t, n, B, i), ($ = t.memoizedState)),
        (w = oi || g0(t, n, w, i, E, $, g) || !1)
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
        (i = w))
      : (typeof f.componentDidUpdate != 'function' ||
          (d === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 4),
        typeof f.getSnapshotBeforeUpdate != 'function' ||
          (d === e.memoizedProps && E === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1))
  }
  return _d(e, t, n, i, u, s)
}
function _d(e, t, n, i, s, u) {
  cy(e, t)
  var f = (t.flags & 128) !== 0
  if (!i && !f) return s && f0(t, n, !1), Lr(e, t, u)
  ;(i = t.stateNode), (A4.current = t)
  var d =
    f && typeof n.getDerivedStateFromError != 'function' ? null : i.render()
  return (
    (t.flags |= 1),
    e !== null && f
      ? ((t.child = vs(t, e.child, null, u)), (t.child = vs(t, null, d, u)))
      : Ft(e, t, d, u),
    (t.memoizedState = i.state),
    s && f0(t, n, !0),
    t.child
  )
}
function hy(e) {
  var t = e.stateNode
  t.pendingContext
    ? a0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && a0(e, t.context, !1),
    gp(e, t.containerInfo)
}
function T0(e, t, n, i, s) {
  return ms(), ap(s), (t.flags |= 256), Ft(e, t, n, i), t.child
}
var Sd = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ed(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function dy(e, t, n) {
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
      pd(t),
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
                : (u = Vf(f, i, 0, null)),
              (e = to(e, i, n, null)),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              (t.child.memoizedState = Ed(n)),
              (t.memoizedState = Sd),
              e)
            : xp(t, f))
    )
  if (((s = e.memoizedState), s !== null && ((d = s.dehydrated), d !== null)))
    return I4(e, t, f, i, d, s, n)
  if (u) {
    ;(u = i.fallback), (f = t.mode), (s = e.child), (d = s.sibling)
    var g = { mode: 'hidden', children: i.children }
    return (
      !(f & 1) && t.child !== s
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = g),
          (t.deletions = null))
        : ((i = yi(s, g)), (i.subtreeFlags = s.subtreeFlags & 14680064)),
      d !== null ? (u = yi(d, u)) : ((u = to(u, f, n, null)), (u.flags |= 2)),
      (u.return = t),
      (i.return = t),
      (i.sibling = u),
      (t.child = i),
      (i = u),
      (u = t.child),
      (f = e.child.memoizedState),
      (f =
        f === null
          ? Ed(n)
          : {
              baseLanes: f.baseLanes | n,
              cachePool: null,
              transitions: f.transitions,
            }),
      (u.memoizedState = f),
      (u.childLanes = e.childLanes & ~n),
      (t.memoizedState = Sd),
      i
    )
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (i = yi(u, { mode: 'visible', children: i.children })),
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
function xp(e, t) {
  return (
    (t = Vf({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Da(e, t, n, i) {
  return (
    i !== null && ap(i),
    vs(t, e.child, null, n),
    (e = xp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function I4(e, t, n, i, s, u, f) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = Ih(Error(J(422)))), Da(e, t, f, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((u = i.fallback),
        (s = t.mode),
        (i = Vf({ mode: 'visible', children: i.children }, s, 0, null)),
        (u = to(u, s, f, null)),
        (u.flags |= 2),
        (i.return = t),
        (u.return = t),
        (i.sibling = u),
        (t.child = i),
        t.mode & 1 && vs(t, e.child, null, f),
        (t.child.memoizedState = Ed(f)),
        (t.memoizedState = Sd),
        u)
  if (!(t.mode & 1)) return Da(e, t, f, null)
  if (s.data === '$!') {
    if (((i = s.nextSibling && s.nextSibling.dataset), i)) var d = i.dgst
    return (i = d), (u = Error(J(419))), (i = Ih(u, i, void 0)), Da(e, t, f, i)
  }
  if (((d = (f & e.childLanes) !== 0), Xt || d)) {
    if (((i = pt), i !== null)) {
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
          ((u.retryLane = s), Rr(e, s), Vn(i, e, s, -1))
    }
    return Pp(), (i = Ih(Error(J(421)))), Da(e, t, f, i)
  }
  return s.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = b4.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = u.treeContext),
      (ln = pi(s.nextSibling)),
      (un = t),
      ($e = !0),
      (bn = null),
      e !== null &&
        ((Tn[An++] = kr),
        (Tn[An++] = Tr),
        (Tn[An++] = ro),
        (kr = e.id),
        (Tr = e.overflow),
        (ro = t)),
      (t = xp(t, i.children)),
      (t.flags |= 4096),
      t)
}
function A0(e, t, n) {
  e.lanes |= t
  var i = e.alternate
  i !== null && (i.lanes |= t), gd(e.return, t, n)
}
function Ph(e, t, n, i, s) {
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
function py(e, t, n) {
  var i = t.pendingProps,
    s = i.revealOrder,
    u = i.tail
  if ((Ft(e, t, i.children, n), (i = Ve.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && A0(e, n, t)
        else if (e.tag === 19) A0(e, n, t)
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
            e !== null && gf(e) === null && (s = n),
            (n = n.sibling)
        ;(n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ph(t, !1, s, n, u)
        break
      case 'backwards':
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && gf(e) === null)) {
            t.child = s
            break
          }
          ;(e = s.sibling), (s.sibling = n), (n = s), (s = e)
        }
        Ph(t, !0, n, null, u)
        break
      case 'together':
        Ph(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function qa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Lr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (oo |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(J(153))
  if (t.child !== null) {
    for (
      e = t.child, n = yi(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = yi(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function P4(e, t, n) {
  switch (t.tag) {
    case 3:
      hy(t), ms()
      break
    case 5:
      b1(t)
      break
    case 1:
      Zt(t.type) && af(t)
      break
    case 4:
      gp(t, t.stateNode.containerInfo)
      break
    case 10:
      var i = t.type._context,
        s = t.memoizedProps.value
      ze(hf, i._currentValue), (i._currentValue = s)
      break
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ze(Ve, Ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dy(e, t, n)
          : (ze(Ve, Ve.current & 1),
            (e = Lr(e, t, n)),
            e !== null ? e.sibling : null)
      ze(Ve, Ve.current & 1)
      break
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return py(e, t, n)
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
      return (t.lanes = 0), fy(e, t, n)
  }
  return Lr(e, t, n)
}
var gy, xd, my, vy
gy = function (e, t) {
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
xd = function () {}
my = function (e, t, n, i) {
  var s = e.memoizedProps
  if (s !== i) {
    ;(e = t.stateNode), Ji(sr.current)
    var u = null
    switch (n) {
      case 'input':
        ;(s = Wh(e, s)), (i = Wh(e, i)), (u = [])
        break
      case 'select':
        ;(s = Ke({}, s, { value: void 0 })),
          (i = Ke({}, i, { value: void 0 })),
          (u = [])
        break
      case 'textarea':
        ;(s = qh(e, s)), (i = qh(e, i)), (u = [])
        break
      default:
        typeof s.onClick != 'function' &&
          typeof i.onClick == 'function' &&
          (e.onclick = lf)
    }
    Qh(n, i)
    var f
    n = null
    for (w in s)
      if (!i.hasOwnProperty(w) && s.hasOwnProperty(w) && s[w] != null)
        if (w === 'style') {
          var d = s[w]
          for (f in d) d.hasOwnProperty(f) && (n || (n = {}), (n[f] = ''))
        } else
          w !== 'dangerouslySetInnerHTML' &&
            w !== 'children' &&
            w !== 'suppressContentEditableWarning' &&
            w !== 'suppressHydrationWarning' &&
            w !== 'autoFocus' &&
            (Dl.hasOwnProperty(w) ? u || (u = []) : (u = u || []).push(w, null))
    for (w in i) {
      var g = i[w]
      if (
        ((d = s?.[w]),
        i.hasOwnProperty(w) && g !== d && (g != null || d != null))
      )
        if (w === 'style')
          if (d) {
            for (f in d)
              !d.hasOwnProperty(f) ||
                (g && g.hasOwnProperty(f)) ||
                (n || (n = {}), (n[f] = ''))
            for (f in g)
              g.hasOwnProperty(f) &&
                d[f] !== g[f] &&
                (n || (n = {}), (n[f] = g[f]))
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
              (Dl.hasOwnProperty(w)
                ? (g != null && w === 'onScroll' && Ue('scroll', e),
                  u || d === g || (u = []))
                : (u = u || []).push(w, g))
    }
    n && (u = u || []).push('style', n)
    var w = u
    ;(t.updateQueue = w) && (t.flags |= 4)
  }
}
vy = function (e, t, n, i) {
  n !== i && (t.flags |= 4)
}
function gl(e, t) {
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
function xt(e) {
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
function R4(e, t, n) {
  var i = t.pendingProps
  switch ((up(t), t.tag)) {
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
      return xt(t), null
    case 1:
      return Zt(t.type) && uf(), xt(t), null
    case 3:
      return (
        (i = t.stateNode),
        ys(),
        Be(Jt),
        Be(Tt),
        vp(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), bn !== null && (Ld(bn), (bn = null)))),
        xd(e, t),
        xt(t),
        null
      )
    case 5:
      mp(t)
      var s = Ji(Kl.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        my(e, t, n, i, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(J(166))
          return xt(t), null
        }
        if (((e = Ji(sr.current)), Oa(t))) {
          ;(i = t.stateNode), (n = t.type)
          var u = t.memoizedProps
          switch (((i[rr] = t), (i[Vl] = u), (e = (t.mode & 1) !== 0), n)) {
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
              for (s = 0; s < Sl.length; s++) Ue(Sl[s], i)
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
              Fm(i, u), Ue('invalid', i)
              break
            case 'select':
              ;(i._wrapperState = { wasMultiple: !!u.multiple }),
                Ue('invalid', i)
              break
            case 'textarea':
              Um(i, u), Ue('invalid', i)
          }
          Qh(n, u), (s = null)
          for (var f in u)
            if (u.hasOwnProperty(f)) {
              var d = u[f]
              f === 'children'
                ? typeof d == 'string'
                  ? i.textContent !== d &&
                    (u.suppressHydrationWarning !== !0 &&
                      La(i.textContent, d, e),
                    (s = ['children', d]))
                  : typeof d == 'number' &&
                    i.textContent !== '' + d &&
                    (u.suppressHydrationWarning !== !0 &&
                      La(i.textContent, d, e),
                    (s = ['children', '' + d]))
                : Dl.hasOwnProperty(f) &&
                  d != null &&
                  f === 'onScroll' &&
                  Ue('scroll', i)
            }
          switch (n) {
            case 'input':
              xa(i), zm(i, u, !0)
              break
            case 'textarea':
              xa(i), Bm(i)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof u.onClick == 'function' && (i.onclick = lf)
          }
          ;(i = s), (t.updateQueue = i), i !== null && (t.flags |= 4)
        } else {
          ;(f = s.nodeType === 9 ? s : s.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Vv(n)),
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
            (e[rr] = t),
            (e[Vl] = i),
            gy(e, t, !1, !1),
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
                for (s = 0; s < Sl.length; s++) Ue(Sl[s], e)
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
                Fm(e, i), (s = Wh(e, i)), Ue('invalid', e)
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
                Um(e, i), (s = qh(e, i)), Ue('invalid', e)
                break
              default:
                s = i
            }
            Qh(n, s), (d = s)
            for (u in d)
              if (d.hasOwnProperty(u)) {
                var g = d[u]
                u === 'style'
                  ? Gv(e, g)
                  : u === 'dangerouslySetInnerHTML'
                  ? ((g = g ? g.__html : void 0), g != null && Wv(e, g))
                  : u === 'children'
                  ? typeof g == 'string'
                    ? (n !== 'textarea' || g !== '') && Ml(e, g)
                    : typeof g == 'number' && Ml(e, '' + g)
                  : u !== 'suppressContentEditableWarning' &&
                    u !== 'suppressHydrationWarning' &&
                    u !== 'autoFocus' &&
                    (Dl.hasOwnProperty(u)
                      ? g != null && u === 'onScroll' && Ue('scroll', e)
                      : g != null && Gd(e, u, g, f))
              }
            switch (n) {
              case 'input':
                xa(e), zm(e, i, !1)
                break
              case 'textarea':
                xa(e), Bm(e)
                break
              case 'option':
                i.value != null && e.setAttribute('value', '' + Si(i.value))
                break
              case 'select':
                ;(e.multiple = !!i.multiple),
                  (u = i.value),
                  u != null
                    ? ls(e, !!i.multiple, u, !1)
                    : i.defaultValue != null &&
                      ls(e, !!i.multiple, i.defaultValue, !0)
                break
              default:
                typeof s.onClick == 'function' && (e.onclick = lf)
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
      return xt(t), null
    case 6:
      if (e && t.stateNode != null) vy(e, t, e.memoizedProps, i)
      else {
        if (typeof i != 'string' && t.stateNode === null) throw Error(J(166))
        if (((n = Ji(Kl.current)), Ji(sr.current), Oa(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[rr] = t),
            (u = i.nodeValue !== n) && ((e = un), e !== null))
          )
            switch (e.tag) {
              case 3:
                La(i.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  La(i.nodeValue, n, (e.mode & 1) !== 0)
            }
          u && (t.flags |= 4)
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[rr] = t),
            (t.stateNode = i)
      }
      return xt(t), null
    case 13:
      if (
        (Be(Ve),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($e && ln !== null && t.mode & 1 && !(t.flags & 128))
          D1(), ms(), (t.flags |= 98560), (u = !1)
        else if (((u = Oa(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(J(318))
            if (
              ((u = t.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(J(317))
            u[rr] = t
          } else
            ms(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          xt(t), (u = !1)
        } else bn !== null && (Ld(bn), (bn = null)), (u = !0)
        if (!u) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ve.current & 1 ? ft === 0 && (ft = 3) : Pp())),
          t.updateQueue !== null && (t.flags |= 4),
          xt(t),
          null)
    case 4:
      return (
        ys(), xd(e, t), e === null && Hl(t.stateNode.containerInfo), xt(t), null
      )
    case 10:
      return hp(t.type._context), xt(t), null
    case 17:
      return Zt(t.type) && uf(), xt(t), null
    case 19:
      if ((Be(Ve), (u = t.memoizedState), u === null)) return xt(t), null
      if (((i = (t.flags & 128) !== 0), (f = u.rendering), f === null))
        if (i) gl(u, !1)
        else {
          if (ft !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((f = gf(e)), f !== null)) {
                for (
                  t.flags |= 128,
                    gl(u, !1),
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
            et() > _s &&
            ((t.flags |= 128), (i = !0), gl(u, !1), (t.lanes = 4194304))
        }
      else {
        if (!i)
          if (((e = gf(f)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gl(u, !0),
              u.tail === null && u.tailMode === 'hidden' && !f.alternate && !$e)
            )
              return xt(t), null
          } else
            2 * et() - u.renderingStartTime > _s &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), gl(u, !1), (t.lanes = 4194304))
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
          (u.renderingStartTime = et()),
          (t.sibling = null),
          (n = Ve.current),
          ze(Ve, i ? (n & 1) | 2 : n & 1),
          t)
        : (xt(t), null)
    case 22:
    case 23:
      return (
        Ip(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? sn & 1073741824 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(J(156, t.tag))
}
function L4(e, t) {
  switch ((up(t), t.tag)) {
    case 1:
      return (
        Zt(t.type) && uf(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ys(),
        Be(Jt),
        Be(Tt),
        vp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return mp(t), null
    case 13:
      if (
        (Be(Ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(J(340))
        ms()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return Be(Ve), null
    case 4:
      return ys(), null
    case 10:
      return hp(t.type._context), null
    case 22:
    case 23:
      return Ip(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ma = !1,
  Ct = !1,
  O4 = typeof WeakSet == 'function' ? WeakSet : Set,
  re = null
function os(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (i) {
        Qe(e, t, i)
      }
    else n.current = null
}
function Cd(e, t, n) {
  try {
    n()
  } catch (i) {
    Qe(e, t, i)
  }
}
var I0 = !1
function N4(e, t) {
  if (((ld = rf), (e = S1()), sp(e))) {
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
            w = 0,
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
                (E === n && ++w === s && (d = f),
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
    ud = { focusedElem: e, selectionRange: n }, rf = !1, re = t;
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
                      t.elementType === t.type ? V : Bn(t.type, V),
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
          Qe(t, t.return, j)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (re = e)
          break
        }
        re = t.return
      }
  return ($ = I0), (I0 = !1), $
}
function Il(e, t, n) {
  var i = t.updateQueue
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var s = (i = i.next)
    do {
      if ((s.tag & e) === e) {
        var u = s.destroy
        ;(s.destroy = void 0), u !== void 0 && Cd(t, n, u)
      }
      s = s.next
    } while (s !== i)
  }
}
function Hf(e, t) {
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
function yy(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), yy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rr], delete t[Vl], delete t[cd], delete t[g4], delete t[m4])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function wy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function P0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wy(e.return)) return null
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
function Td(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = lf))
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Td(e, t, n), e = e.sibling; e !== null; ) Td(e, t, n), (e = e.sibling)
}
function Ad(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Ad(e, t, n), e = e.sibling; e !== null; ) Ad(e, t, n), (e = e.sibling)
}
var mt = null,
  $n = !1
function ri(e, t, n) {
  for (n = n.child; n !== null; ) _y(e, t, n), (n = n.sibling)
}
function _y(e, t, n) {
  if (or && typeof or.onCommitFiberUnmount == 'function')
    try {
      or.onCommitFiberUnmount(Df, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ct || os(n, t)
    case 6:
      var i = mt,
        s = $n
      ;(mt = null),
        ri(e, t, n),
        (mt = i),
        ($n = s),
        mt !== null &&
          ($n
            ? ((e = mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : mt.removeChild(n.stateNode))
      break
    case 18:
      mt !== null &&
        ($n
          ? ((e = mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Eh(e.parentNode, n)
              : e.nodeType === 1 && Eh(e, n),
            Bl(e))
          : Eh(mt, n.stateNode))
      break
    case 4:
      ;(i = mt),
        (s = $n),
        (mt = n.stateNode.containerInfo),
        ($n = !0),
        ri(e, t, n),
        (mt = i),
        ($n = s)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ct &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        s = i = i.next
        do {
          var u = s,
            f = u.destroy
          ;(u = u.tag),
            f !== void 0 && (u & 2 || u & 4) && Cd(n, t, f),
            (s = s.next)
        } while (s !== i)
      }
      ri(e, t, n)
      break
    case 1:
      if (
        !Ct &&
        (os(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == 'function')
      )
        try {
          ;(i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount()
        } catch (d) {
          Qe(n, t, d)
        }
      ri(e, t, n)
      break
    case 21:
      ri(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ct = (i = Ct) || n.memoizedState !== null), ri(e, t, n), (Ct = i))
        : ri(e, t, n)
      break
    default:
      ri(e, t, n)
  }
}
function R0(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new O4()),
      t.forEach(function (i) {
        var s = H4.bind(null, e, i)
        n.has(i) || (n.add(i), i.then(s, s))
      })
  }
}
function Un(e, t) {
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
              ;(mt = d.stateNode), ($n = !1)
              break e
            case 3:
              ;(mt = d.stateNode.containerInfo), ($n = !0)
              break e
            case 4:
              ;(mt = d.stateNode.containerInfo), ($n = !0)
              break e
          }
          d = d.return
        }
        if (mt === null) throw Error(J(160))
        _y(u, f, s), (mt = null), ($n = !1)
        var g = s.alternate
        g !== null && (g.return = null), (s.return = null)
      } catch (w) {
        Qe(s, t, w)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sy(t, e), (t = t.sibling)
}
function Sy(e, t) {
  var n = e.alternate,
    i = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Un(t, e), tr(e), i & 4)) {
        try {
          Il(3, e, e.return), Hf(3, e)
        } catch (V) {
          Qe(e, e.return, V)
        }
        try {
          Il(5, e, e.return)
        } catch (V) {
          Qe(e, e.return, V)
        }
      }
      break
    case 1:
      Un(t, e), tr(e), i & 512 && n !== null && os(n, n.return)
      break
    case 5:
      if (
        (Un(t, e),
        tr(e),
        i & 512 && n !== null && os(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode
        try {
          Ml(s, '')
        } catch (V) {
          Qe(e, e.return, V)
        }
      }
      if (i & 4 && ((s = e.stateNode), s != null)) {
        var u = e.memoizedProps,
          f = n !== null ? n.memoizedProps : u,
          d = e.type,
          g = e.updateQueue
        if (((e.updateQueue = null), g !== null))
          try {
            d === 'input' && u.type === 'radio' && u.name != null && Hv(s, u),
              Xh(d, f)
            var w = Xh(d, u)
            for (f = 0; f < g.length; f += 2) {
              var P = g[f],
                O = g[f + 1]
              P === 'style'
                ? Gv(s, O)
                : P === 'dangerouslySetInnerHTML'
                ? Wv(s, O)
                : P === 'children'
                ? Ml(s, O)
                : Gd(s, P, O, w)
            }
            switch (d) {
              case 'input':
                Kh(s, u)
                break
              case 'textarea':
                jv(s, u)
                break
              case 'select':
                var E = s._wrapperState.wasMultiple
                s._wrapperState.wasMultiple = !!u.multiple
                var B = u.value
                B != null
                  ? ls(s, !!u.multiple, B, !1)
                  : E !== !!u.multiple &&
                    (u.defaultValue != null
                      ? ls(s, !!u.multiple, u.defaultValue, !0)
                      : ls(s, !!u.multiple, u.multiple ? [] : '', !1))
            }
            s[Vl] = u
          } catch (V) {
            Qe(e, e.return, V)
          }
      }
      break
    case 6:
      if ((Un(t, e), tr(e), i & 4)) {
        if (e.stateNode === null) throw Error(J(162))
        ;(s = e.stateNode), (u = e.memoizedProps)
        try {
          s.nodeValue = u
        } catch (V) {
          Qe(e, e.return, V)
        }
      }
      break
    case 3:
      if (
        (Un(t, e), tr(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Bl(t.containerInfo)
        } catch (V) {
          Qe(e, e.return, V)
        }
      break
    case 4:
      Un(t, e), tr(e)
      break
    case 13:
      Un(t, e),
        tr(e),
        (s = e.child),
        s.flags & 8192 &&
          ((u = s.memoizedState !== null),
          (s.stateNode.isHidden = u),
          !u ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Tp = et())),
        i & 4 && R0(e)
      break
    case 22:
      if (
        ((P = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ct = (w = Ct) || P), Un(t, e), (Ct = w)) : Un(t, e),
        tr(e),
        i & 8192)
      ) {
        if (
          ((w = e.memoizedState !== null),
          (e.stateNode.isHidden = w) && !P && e.mode & 1)
        )
          for (re = e, P = e.child; P !== null; ) {
            for (O = re = P; re !== null; ) {
              switch (((E = re), (B = E.child), E.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Il(4, E, E.return)
                  break
                case 1:
                  os(E, E.return)
                  var $ = E.stateNode
                  if (typeof $.componentWillUnmount == 'function') {
                    ;(i = E), (n = E.return)
                    try {
                      ;(t = i),
                        ($.props = t.memoizedProps),
                        ($.state = t.memoizedState),
                        $.componentWillUnmount()
                    } catch (V) {
                      Qe(i, n, V)
                    }
                  }
                  break
                case 5:
                  os(E, E.return)
                  break
                case 22:
                  if (E.memoizedState !== null) {
                    O0(O)
                    continue
                  }
              }
              B !== null ? ((B.return = E), (re = B)) : O0(O)
            }
            P = P.sibling
          }
        e: for (P = null, O = e; ; ) {
          if (O.tag === 5) {
            if (P === null) {
              P = O
              try {
                ;(s = O.stateNode),
                  w
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
                      (d.style.display = Kv('display', f)))
              } catch (V) {
                Qe(e, e.return, V)
              }
            }
          } else if (O.tag === 6) {
            if (P === null)
              try {
                O.stateNode.nodeValue = w ? '' : O.memoizedProps
              } catch (V) {
                Qe(e, e.return, V)
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
      Un(t, e), tr(e), i & 4 && R0(e)
      break
    case 21:
      break
    default:
      Un(t, e), tr(e)
  }
}
function tr(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wy(n)) {
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
          i.flags & 32 && (Ml(s, ''), (i.flags &= -33))
          var u = P0(e)
          Ad(e, u, s)
          break
        case 3:
        case 4:
          var f = i.stateNode.containerInfo,
            d = P0(e)
          Td(e, d, f)
          break
        default:
          throw Error(J(161))
      }
    } catch (g) {
      Qe(e, e.return, g)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function D4(e, t, n) {
  ;(re = e), Ey(e)
}
function Ey(e, t, n) {
  for (var i = (e.mode & 1) !== 0; re !== null; ) {
    var s = re,
      u = s.child
    if (s.tag === 22 && i) {
      var f = s.memoizedState !== null || Ma
      if (!f) {
        var d = s.alternate,
          g = (d !== null && d.memoizedState !== null) || Ct
        d = Ma
        var w = Ct
        if (((Ma = f), (Ct = g) && !w))
          for (re = s; re !== null; )
            (f = re),
              (g = f.child),
              f.tag === 22 && f.memoizedState !== null
                ? N0(s)
                : g !== null
                ? ((g.return = f), (re = g))
                : N0(s)
        for (; u !== null; ) (re = u), Ey(u), (u = u.sibling)
        ;(re = s), (Ma = d), (Ct = w)
      }
      L0(e)
    } else
      s.subtreeFlags & 8772 && u !== null ? ((u.return = s), (re = u)) : L0(e)
  }
}
function L0(e) {
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
              Ct || Hf(5, t)
              break
            case 1:
              var i = t.stateNode
              if (t.flags & 4 && !Ct)
                if (n === null) i.componentDidMount()
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Bn(t.type, n.memoizedProps)
                  i.componentDidUpdate(
                    s,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var u = t.updateQueue
              u !== null && p0(t, u, i)
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
                p0(t, f, n)
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
                    O !== null && Bl(O)
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
      } catch (E) {
        Qe(t, t.return, E)
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
function O0(e) {
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
function N0(e) {
  for (; re !== null; ) {
    var t = re
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Hf(4, t)
          } catch (g) {
            Qe(t, n, g)
          }
          break
        case 1:
          var i = t.stateNode
          if (typeof i.componentDidMount == 'function') {
            var s = t.return
            try {
              i.componentDidMount()
            } catch (g) {
              Qe(t, s, g)
            }
          }
          var u = t.return
          try {
            kd(t)
          } catch (g) {
            Qe(t, u, g)
          }
          break
        case 5:
          var f = t.return
          try {
            kd(t)
          } catch (g) {
            Qe(t, f, g)
          }
      }
    } catch (g) {
      Qe(t, t.return, g)
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
var M4 = Math.ceil,
  yf = Nr.ReactCurrentDispatcher,
  Cp = Nr.ReactCurrentOwner,
  Pn = Nr.ReactCurrentBatchConfig,
  xe = 0,
  pt = null,
  it = null,
  vt = 0,
  sn = 0,
  ss = Ci(0),
  ft = 0,
  Ql = null,
  oo = 0,
  jf = 0,
  kp = 0,
  Pl = null,
  qt = null,
  Tp = 0,
  _s = 1 / 0,
  xr = null,
  wf = !1,
  Id = null,
  mi = null,
  Fa = !1,
  fi = null,
  _f = 0,
  Rl = 0,
  Pd = null,
  Ya = -1,
  Qa = 0
function Ut() {
  return xe & 6 ? et() : Ya !== -1 ? Ya : (Ya = et())
}
function vi(e) {
  return e.mode & 1
    ? xe & 2 && vt !== 0
      ? vt & -vt
      : y4.transition !== null
      ? (Qa === 0 && (Qa = o1()), Qa)
      : ((e = Ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : h1(e.type))),
        e)
    : 1
}
function Vn(e, t, n, i) {
  if (50 < Rl) throw ((Rl = 0), (Pd = null), Error(J(185)))
  tu(e, n, i),
    (!(xe & 2) || e !== pt) &&
      (e === pt && (!(xe & 2) && (jf |= n), ft === 4 && li(e, vt)),
      en(e, i),
      n === 1 && xe === 0 && !(t.mode & 1) && ((_s = et() + 500), Bf && ki()))
}
function en(e, t) {
  var n = e.callbackNode
  yk(e, t)
  var i = nf(e, e === pt ? vt : 0)
  if (i === 0)
    n !== null && Hm(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Hm(n), t === 1))
      e.tag === 0 ? v4(D0.bind(null, e)) : L1(D0.bind(null, e)),
        d4(function () {
          !(xe & 6) && ki()
        }),
        (n = null)
    else {
      switch (s1(i)) {
        case 1:
          n = Jd
          break
        case 4:
          n = r1
          break
        case 16:
          n = tf
          break
        case 536870912:
          n = i1
          break
        default:
          n = tf
      }
      n = Ry(n, xy.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function xy(e, t) {
  if (((Ya = -1), (Qa = 0), xe & 6)) throw Error(J(327))
  var n = e.callbackNode
  if (hs() && e.callbackNode !== n) return null
  var i = nf(e, e === pt ? vt : 0)
  if (i === 0) return null
  if (i & 30 || i & e.expiredLanes || t) t = Sf(e, i)
  else {
    t = i
    var s = xe
    xe |= 2
    var u = ky()
    ;(pt !== e || vt !== t) && ((xr = null), (_s = et() + 500), eo(e, t))
    do
      try {
        U4()
        break
      } catch (d) {
        Cy(e, d)
      }
    while (!0)
    cp(),
      (yf.current = u),
      (xe = s),
      it !== null ? (t = 0) : ((pt = null), (vt = 0), (t = ft))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = nd(e)), s !== 0 && ((i = s), (t = Rd(e, s)))), t === 1)
    )
      throw ((n = Ql), eo(e, 0), li(e, i), en(e, et()), n)
    if (t === 6) li(e, i)
    else {
      if (
        ((s = e.current.alternate),
        !(i & 30) &&
          !F4(s) &&
          ((t = Sf(e, i)),
          t === 2 && ((u = nd(e)), u !== 0 && ((i = u), (t = Rd(e, u)))),
          t === 1))
      )
        throw ((n = Ql), eo(e, 0), li(e, i), en(e, et()), n)
      switch (((e.finishedWork = s), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(J(345))
        case 2:
          qi(e, qt, xr)
          break
        case 3:
          if (
            (li(e, i), (i & 130023424) === i && ((t = Tp + 500 - et()), 10 < t))
          ) {
            if (nf(e, 0) !== 0) break
            if (((s = e.suspendedLanes), (s & i) !== i)) {
              Ut(), (e.pingedLanes |= e.suspendedLanes & s)
              break
            }
            e.timeoutHandle = fd(qi.bind(null, e, qt, xr), t)
            break
          }
          qi(e, qt, xr)
          break
        case 4:
          if ((li(e, i), (i & 4194240) === i)) break
          for (t = e.eventTimes, s = -1; 0 < i; ) {
            var f = 31 - jn(i)
            ;(u = 1 << f), (f = t[f]), f > s && (s = f), (i &= ~u)
          }
          if (
            ((i = s),
            (i = et() - i),
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
                : 1960 * M4(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = fd(qi.bind(null, e, qt, xr), i)
            break
          }
          qi(e, qt, xr)
          break
        case 5:
          qi(e, qt, xr)
          break
        default:
          throw Error(J(329))
      }
    }
  }
  return en(e, et()), e.callbackNode === n ? xy.bind(null, e) : null
}
function Rd(e, t) {
  var n = Pl
  return (
    e.current.memoizedState.isDehydrated && (eo(e, t).flags |= 256),
    (e = Sf(e, t)),
    e !== 2 && ((t = qt), (qt = n), t !== null && Ld(t)),
    e
  )
}
function Ld(e) {
  qt === null ? (qt = e) : qt.push.apply(qt, e)
}
function F4(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            u = s.getSnapshot
          s = s.value
          try {
            if (!Wn(u(), s)) return !1
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
function li(e, t) {
  for (
    t &= ~kp,
      t &= ~jf,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - jn(t),
      i = 1 << n
    ;(e[n] = -1), (t &= ~i)
  }
}
function D0(e) {
  if (xe & 6) throw Error(J(327))
  hs()
  var t = nf(e, 0)
  if (!(t & 1)) return en(e, et()), null
  var n = Sf(e, t)
  if (e.tag !== 0 && n === 2) {
    var i = nd(e)
    i !== 0 && ((t = i), (n = Rd(e, i)))
  }
  if (n === 1) throw ((n = Ql), eo(e, 0), li(e, t), en(e, et()), n)
  if (n === 6) throw Error(J(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qi(e, qt, xr),
    en(e, et()),
    null
  )
}
function Ap(e, t) {
  var n = xe
  xe |= 1
  try {
    return e(t)
  } finally {
    ;(xe = n), xe === 0 && ((_s = et() + 500), Bf && ki())
  }
}
function so(e) {
  fi !== null && fi.tag === 0 && !(xe & 6) && hs()
  var t = xe
  xe |= 1
  var n = Pn.transition,
    i = Ne
  try {
    if (((Pn.transition = null), (Ne = 1), e)) return e()
  } finally {
    ;(Ne = i), (Pn.transition = n), (xe = t), !(xe & 6) && ki()
  }
}
function Ip() {
  ;(sn = ss.current), Be(ss)
}
function eo(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), h4(n)), it !== null))
    for (n = it.return; n !== null; ) {
      var i = n
      switch ((up(i), i.tag)) {
        case 1:
          ;(i = i.type.childContextTypes), i != null && uf()
          break
        case 3:
          ys(), Be(Jt), Be(Tt), vp()
          break
        case 5:
          mp(i)
          break
        case 4:
          ys()
          break
        case 13:
          Be(Ve)
          break
        case 19:
          Be(Ve)
          break
        case 10:
          hp(i.type._context)
          break
        case 22:
        case 23:
          Ip()
      }
      n = n.return
    }
  if (
    ((pt = e),
    (it = e = yi(e.current, null)),
    (vt = sn = t),
    (ft = 0),
    (Ql = null),
    (kp = jf = oo = 0),
    (qt = Pl = null),
    Xi !== null)
  ) {
    for (t = 0; t < Xi.length; t++)
      if (((n = Xi[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null
        var s = i.next,
          u = n.pending
        if (u !== null) {
          var f = u.next
          ;(u.next = s), (i.next = f)
        }
        n.pending = i
      }
    Xi = null
  }
  return e
}
function Cy(e, t) {
  do {
    var n = it
    try {
      if ((cp(), (Ka.current = vf), mf)) {
        for (var i = We.memoizedState; i !== null; ) {
          var s = i.queue
          s !== null && (s.pending = null), (i = i.next)
        }
        mf = !1
      }
      if (
        ((io = 0),
        (dt = at = We = null),
        (Al = !1),
        (Gl = 0),
        (Cp.current = null),
        n === null || n.return === null)
      ) {
        ;(ft = 1), (Ql = t), (it = null)
        break
      }
      e: {
        var u = e,
          f = n.return,
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
            var E = P.alternate
            E
              ? ((P.updateQueue = E.updateQueue),
                (P.memoizedState = E.memoizedState),
                (P.lanes = E.lanes))
              : ((P.updateQueue = null), (P.memoizedState = null))
          }
          var B = S0(f)
          if (B !== null) {
            ;(B.flags &= -257),
              E0(B, f, d, u, t),
              B.mode & 1 && _0(u, w, t),
              (t = B),
              (g = w)
            var $ = t.updateQueue
            if ($ === null) {
              var V = new Set()
              V.add(g), (t.updateQueue = V)
            } else $.add(g)
            break e
          } else {
            if (!(t & 1)) {
              _0(u, w, t), Pp()
              break e
            }
            g = Error(J(426))
          }
        } else if ($e && d.mode & 1) {
          var q = S0(f)
          if (q !== null) {
            !(q.flags & 65536) && (q.flags |= 256),
              E0(q, f, d, u, t),
              ap(ws(g, d))
            break e
          }
        }
        ;(u = g = ws(g, d)),
          ft !== 4 && (ft = 2),
          Pl === null ? (Pl = [u]) : Pl.push(u),
          (u = f)
        do {
          switch (u.tag) {
            case 3:
              ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
              var R = ly(u, g, t)
              d0(u, R)
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
                    (mi === null || !mi.has(N))))
              ) {
                ;(u.flags |= 65536), (t &= -t), (u.lanes |= t)
                var j = uy(u, d, t)
                d0(u, j)
                break e
              }
          }
          u = u.return
        } while (u !== null)
      }
      Ay(n)
    } catch (Q) {
      ;(t = Q), it === n && n !== null && (it = n = n.return)
      continue
    }
    break
  } while (!0)
}
function ky() {
  var e = yf.current
  return (yf.current = vf), e === null ? vf : e
}
function Pp() {
  ;(ft === 0 || ft === 3 || ft === 2) && (ft = 4),
    pt === null || (!(oo & 268435455) && !(jf & 268435455)) || li(pt, vt)
}
function Sf(e, t) {
  var n = xe
  xe |= 2
  var i = ky()
  ;(pt !== e || vt !== t) && ((xr = null), eo(e, t))
  do
    try {
      z4()
      break
    } catch (s) {
      Cy(e, s)
    }
  while (!0)
  if ((cp(), (xe = n), (yf.current = i), it !== null)) throw Error(J(261))
  return (pt = null), (vt = 0), ft
}
function z4() {
  for (; it !== null; ) Ty(it)
}
function U4() {
  for (; it !== null && !ak(); ) Ty(it)
}
function Ty(e) {
  var t = Py(e.alternate, e, sn)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Ay(e) : (it = t),
    (Cp.current = null)
}
function Ay(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = L4(n, t)), n !== null)) {
        ;(n.flags &= 32767), (it = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ft = 6), (it = null)
        return
      }
    } else if (((n = R4(n, t, sn)), n !== null)) {
      it = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      it = t
      return
    }
    it = t = e
  } while (t !== null)
  ft === 0 && (ft = 5)
}
function qi(e, t, n) {
  var i = Ne,
    s = Pn.transition
  try {
    ;(Pn.transition = null), (Ne = 1), B4(e, t, n, i)
  } finally {
    ;(Pn.transition = s), (Ne = i)
  }
  return null
}
function B4(e, t, n, i) {
  do hs()
  while (fi !== null)
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
    e === pt && ((it = pt = null), (vt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fa ||
      ((Fa = !0),
      Ry(tf, function () {
        return hs(), null
      })),
    (u = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || u)
  ) {
    ;(u = Pn.transition), (Pn.transition = null)
    var f = Ne
    Ne = 1
    var d = xe
    ;(xe |= 4),
      (Cp.current = null),
      N4(e, n),
      Sy(n, e),
      o4(ud),
      (rf = !!ld),
      (ud = ld = null),
      (e.current = n),
      D4(n),
      fk(),
      (xe = d),
      (Ne = f),
      (Pn.transition = u)
  } else e.current = n
  if (
    (Fa && ((Fa = !1), (fi = e), (_f = s)),
    (u = e.pendingLanes),
    u === 0 && (mi = null),
    dk(n.stateNode),
    en(e, et()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), i(s.value, { componentStack: s.stack, digest: s.digest })
  if (wf) throw ((wf = !1), (e = Id), (Id = null), e)
  return (
    _f & 1 && e.tag !== 0 && hs(),
    (u = e.pendingLanes),
    u & 1 ? (e === Pd ? Rl++ : ((Rl = 0), (Pd = e))) : (Rl = 0),
    ki(),
    null
  )
}
function hs() {
  if (fi !== null) {
    var e = s1(_f),
      t = Pn.transition,
      n = Ne
    try {
      if (((Pn.transition = null), (Ne = 16 > e ? 16 : e), fi === null))
        var i = !1
      else {
        if (((e = fi), (fi = null), (_f = 0), xe & 6)) throw Error(J(331))
        var s = xe
        for (xe |= 4, re = e.current; re !== null; ) {
          var u = re,
            f = u.child
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
                      Il(8, P, u)
                  }
                  var O = P.child
                  if (O !== null) (O.return = P), (re = O)
                  else
                    for (; re !== null; ) {
                      P = re
                      var E = P.sibling,
                        B = P.return
                      if ((yy(P), P === w)) {
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
                    Il(9, u, u.return)
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
                      Hf(9, d)
                  }
                } catch (Q) {
                  Qe(d, d.return, Q)
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
          ((xe = s), ki(), or && typeof or.onPostCommitFiberRoot == 'function')
        )
          try {
            or.onPostCommitFiberRoot(Df, e)
          } catch {}
        i = !0
      }
      return i
    } finally {
      ;(Ne = n), (Pn.transition = t)
    }
  }
  return !1
}
function M0(e, t, n) {
  ;(t = ws(n, t)),
    (t = ly(e, t, 1)),
    (e = gi(e, t, 1)),
    (t = Ut()),
    e !== null && (tu(e, 1, t), en(e, t))
}
function Qe(e, t, n) {
  if (e.tag === 3) M0(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        M0(t, e, n)
        break
      } else if (t.tag === 1) {
        var i = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof i.componentDidCatch == 'function' &&
            (mi === null || !mi.has(i)))
        ) {
          ;(e = ws(n, e)),
            (e = uy(t, e, 1)),
            (t = gi(t, e, 1)),
            (e = Ut()),
            t !== null && (tu(t, 1, e), en(t, e))
          break
        }
      }
      t = t.return
    }
}
function $4(e, t, n) {
  var i = e.pingCache
  i !== null && i.delete(t),
    (t = Ut()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pt === e &&
      (vt & n) === n &&
      (ft === 4 || (ft === 3 && (vt & 130023424) === vt && 500 > et() - Tp)
        ? eo(e, 0)
        : (kp |= n)),
    en(e, t)
}
function Iy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ta), (Ta <<= 1), !(Ta & 130023424) && (Ta = 4194304))
      : (t = 1))
  var n = Ut()
  ;(e = Rr(e, t)), e !== null && (tu(e, t, n), en(e, n))
}
function b4(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Iy(e, n)
}
function H4(e, t) {
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
  i !== null && i.delete(t), Iy(e, n)
}
var Py
Py = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Jt.current) Xt = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xt = !1), P4(e, t, n)
      Xt = !!(e.flags & 131072)
    }
  else (Xt = !1), $e && t.flags & 1048576 && O1(t, cf, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type
      qa(e, t), (e = t.pendingProps)
      var s = gs(t, Tt.current)
      cs(t, n), (s = wp(null, t, i, e, s, n))
      var u = _p()
      return (
        (t.flags |= 1),
        typeof s == 'object' &&
        s !== null &&
        typeof s.render == 'function' &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Zt(i) ? ((u = !0), af(t)) : (u = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            pp(t),
            (s.updater = $f),
            (t.stateNode = s),
            (s._reactInternals = t),
            vd(t, i, e, n),
            (t = _d(null, t, i, !0, u, n)))
          : ((t.tag = 0), $e && u && lp(t), Ft(null, t, s, n), (t = t.child)),
        t
      )
    case 16:
      i = t.elementType
      e: {
        switch (
          (qa(e, t),
          (e = t.pendingProps),
          (s = i._init),
          (i = s(i._payload)),
          (t.type = i),
          (s = t.tag = V4(i)),
          (e = Bn(i, e)),
          s)
        ) {
          case 0:
            t = wd(null, t, i, e, n)
            break e
          case 1:
            t = k0(null, t, i, e, n)
            break e
          case 11:
            t = x0(null, t, i, e, n)
            break e
          case 14:
            t = C0(null, t, i, Bn(i.type, e), n)
            break e
        }
        throw Error(J(306, i, ''))
      }
      return t
    case 0:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Bn(i, s)),
        wd(e, t, i, s, n)
      )
    case 1:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Bn(i, s)),
        k0(e, t, i, s, n)
      )
    case 3:
      e: {
        if ((hy(t), e === null)) throw Error(J(387))
        ;(i = t.pendingProps),
          (u = t.memoizedState),
          (s = u.element),
          F1(e, t),
          pf(t, i, null, n)
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
            ;(s = ws(Error(J(423)), t)), (t = T0(e, t, i, n, s))
            break e
          } else if (i !== s) {
            ;(s = ws(Error(J(424)), t)), (t = T0(e, t, i, n, s))
            break e
          } else
            for (
              ln = pi(t.stateNode.containerInfo.firstChild),
                un = t,
                $e = !0,
                bn = null,
                n = $1(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((ms(), i === s)) {
            t = Lr(e, t, n)
            break e
          }
          Ft(e, t, i, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        b1(t),
        e === null && pd(t),
        (i = t.type),
        (s = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (f = s.children),
        ad(i, s) ? (f = null) : u !== null && ad(i, u) && (t.flags |= 32),
        cy(e, t),
        Ft(e, t, f, n),
        t.child
      )
    case 6:
      return e === null && pd(t), null
    case 13:
      return dy(e, t, n)
    case 4:
      return (
        gp(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = vs(t, null, i, n)) : Ft(e, t, i, n),
        t.child
      )
    case 11:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Bn(i, s)),
        x0(e, t, i, s, n)
      )
    case 7:
      return Ft(e, t, t.pendingProps, n), t.child
    case 8:
      return Ft(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ft(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (s = t.pendingProps),
          (u = t.memoizedProps),
          (f = s.value),
          ze(hf, i._currentValue),
          (i._currentValue = f),
          u !== null)
        )
          if (Wn(u.value, f)) {
            if (u.children === s.children && !Jt.current) {
              t = Lr(e, t, n)
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
                      ;(g = Ar(-1, n & -n)), (g.tag = 2)
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
                      gd(u.return, n, t),
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
                  gd(f, n, t),
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
        Ft(e, t, s.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (s = t.type),
        (i = t.pendingProps.children),
        cs(t, n),
        (s = Rn(s)),
        (i = i(s)),
        (t.flags |= 1),
        Ft(e, t, i, n),
        t.child
      )
    case 14:
      return (
        (i = t.type),
        (s = Bn(i, t.pendingProps)),
        (s = Bn(i.type, s)),
        C0(e, t, i, s, n)
      )
    case 15:
      return ay(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (s = t.elementType === i ? s : Bn(i, s)),
        qa(e, t),
        (t.tag = 1),
        Zt(i) ? ((e = !0), af(t)) : (e = !1),
        cs(t, n),
        U1(t, i, s),
        vd(t, i, s, n),
        _d(null, t, i, !0, e, n)
      )
    case 19:
      return py(e, t, n)
    case 22:
      return fy(e, t, n)
  }
  throw Error(J(156, t.tag))
}
function Ry(e, t) {
  return n1(e, t)
}
function j4(e, t, n, i) {
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
function In(e, t, n, i) {
  return new j4(e, t, n, i)
}
function Rp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function V4(e) {
  if (typeof e == 'function') return Rp(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Yd)) return 11
    if (e === Qd) return 14
  }
  return 2
}
function yi(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = In(e.tag, t, e.key, e.mode)),
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
function Xa(e, t, n, i, s, u) {
  var f = 2
  if (((i = e), typeof e == 'function')) Rp(e) && (f = 1)
  else if (typeof e == 'string') f = 5
  else
    e: switch (e) {
      case Qo:
        return to(n.children, s, u, t)
      case qd:
        ;(f = 8), (s |= 8)
        break
      case bh:
        return (e = In(12, n, t, s | 2)), (e.elementType = bh), (e.lanes = u), e
      case Hh:
        return (e = In(13, n, t, s)), (e.elementType = Hh), (e.lanes = u), e
      case jh:
        return (e = In(19, n, t, s)), (e.elementType = jh), (e.lanes = u), e
      case Bv:
        return Vf(n, s, u, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case zv:
              f = 10
              break e
            case Uv:
              f = 9
              break e
            case Yd:
              f = 11
              break e
            case Qd:
              f = 14
              break e
            case ii:
              ;(f = 16), (i = null)
              break e
          }
        throw Error(J(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = In(f, n, t, s)), (t.elementType = e), (t.type = i), (t.lanes = u), t
  )
}
function to(e, t, n, i) {
  return (e = In(7, e, i, t)), (e.lanes = n), e
}
function Vf(e, t, n, i) {
  return (
    (e = In(22, e, i, t)),
    (e.elementType = Bv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Rh(e, t, n) {
  return (e = In(6, e, null, t)), (e.lanes = n), e
}
function Lh(e, t, n) {
  return (
    (t = In(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function W4(e, t, n, i, s) {
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
    (this.eventTimes = ch(0)),
    (this.expirationTimes = ch(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ch(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null)
}
function Lp(e, t, n, i, s, u, f, d, g) {
  return (
    (e = new W4(e, t, n, d, g)),
    t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
    (u = In(3, null, null, t)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pp(u),
    e
  )
}
function K4(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Yo,
    key: i == null ? null : '' + i,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Ly(e) {
  if (!e) return Ei
  e = e._reactInternals
  e: {
    if (uo(e) !== e || e.tag !== 1) throw Error(J(170))
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
    throw Error(J(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Zt(n)) return R1(e, n, t)
  }
  return t
}
function Oy(e, t, n, i, s, u, f, d, g) {
  return (
    (e = Lp(n, i, !0, e, s, u, f, d, g)),
    (e.context = Ly(null)),
    (n = e.current),
    (i = Ut()),
    (s = vi(n)),
    (u = Ar(i, s)),
    (u.callback = t ?? null),
    gi(n, u, s),
    (e.current.lanes = s),
    tu(e, s, i),
    en(e, i),
    e
  )
}
function Wf(e, t, n, i) {
  var s = t.current,
    u = Ut(),
    f = vi(s)
  return (
    (n = Ly(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ar(u, f)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = gi(s, t, f)),
    e !== null && (Vn(e, s, f, u), Wa(e, s, f)),
    f
  )
}
function Ef(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function F0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Op(e, t) {
  F0(e, t), (e = e.alternate) && F0(e, t)
}
function G4() {
  return null
}
var Ny =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Np(e) {
  this._internalRoot = e
}
Kf.prototype.render = Np.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(J(409))
  Wf(e, t, null, null)
}
Kf.prototype.unmount = Np.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    so(function () {
      Wf(null, e, null, null)
    }),
      (t[Pr] = null)
  }
}
function Kf(e) {
  this._internalRoot = e
}
Kf.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = a1()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < si.length && t !== 0 && t < si[n].priority; n++);
    si.splice(n, 0, e), n === 0 && c1(e)
  }
}
function Dp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Gf(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function z0() {}
function q4(e, t, n, i, s) {
  if (s) {
    if (typeof i == 'function') {
      var u = i
      i = function () {
        var w = Ef(f)
        u.call(w)
      }
    }
    var f = Oy(t, i, e, 0, null, !1, !1, '', z0)
    return (
      (e._reactRootContainer = f),
      (e[Pr] = f.current),
      Hl(e.nodeType === 8 ? e.parentNode : e),
      so(),
      f
    )
  }
  for (; (s = e.lastChild); ) e.removeChild(s)
  if (typeof i == 'function') {
    var d = i
    i = function () {
      var w = Ef(g)
      d.call(w)
    }
  }
  var g = Lp(e, 0, !1, null, null, !1, !1, '', z0)
  return (
    (e._reactRootContainer = g),
    (e[Pr] = g.current),
    Hl(e.nodeType === 8 ? e.parentNode : e),
    so(function () {
      Wf(t, g, n, i)
    }),
    g
  )
}
function qf(e, t, n, i, s) {
  var u = n._reactRootContainer
  if (u) {
    var f = u
    if (typeof s == 'function') {
      var d = s
      s = function () {
        var g = Ef(f)
        d.call(g)
      }
    }
    Wf(t, f, e, s)
  } else f = q4(n, t, e, s, i)
  return Ef(f)
}
l1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = _l(t.pendingLanes)
        n !== 0 &&
          (Zd(t, n | 1), en(t, et()), !(xe & 6) && ((_s = et() + 500), ki()))
      }
      break
    case 13:
      so(function () {
        var i = Rr(e, 1)
        if (i !== null) {
          var s = Ut()
          Vn(i, e, 1, s)
        }
      }),
        Op(e, 1)
  }
}
ep = function (e) {
  if (e.tag === 13) {
    var t = Rr(e, 134217728)
    if (t !== null) {
      var n = Ut()
      Vn(t, e, 134217728, n)
    }
    Op(e, 134217728)
  }
}
u1 = function (e) {
  if (e.tag === 13) {
    var t = vi(e),
      n = Rr(e, t)
    if (n !== null) {
      var i = Ut()
      Vn(n, e, t, i)
    }
    Op(e, t)
  }
}
a1 = function () {
  return Ne
}
f1 = function (e, t) {
  var n = Ne
  try {
    return (Ne = e), t()
  } finally {
    Ne = n
  }
}
Zh = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Kh(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var s = Uf(i)
            if (!s) throw Error(J(90))
            bv(i), Kh(i, s)
          }
        }
      }
      break
    case 'textarea':
      jv(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && ls(e, !!n.multiple, t, !1)
  }
}
Qv = Ap
Xv = so
var Y4 = { usingClientEntryPoint: !1, Events: [ru, es, Uf, qv, Yv, Ap] },
  ml = {
    findFiberByHostInstance: Qi,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Q4 = {
    bundleType: ml.bundleType,
    version: ml.version,
    rendererPackageName: ml.rendererPackageName,
    rendererConfig: ml.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = e1(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ml.findFiberByHostInstance || G4,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var za = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!za.isDisabled && za.supportsFiber)
    try {
      ;(Df = za.inject(Q4)), (or = za)
    } catch {}
}
fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y4
fn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Dp(t)) throw Error(J(200))
  return K4(e, t, null, n)
}
fn.createRoot = function (e, t) {
  if (!Dp(e)) throw Error(J(299))
  var n = !1,
    i = '',
    s = Ny
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Lp(e, 1, !1, null, null, n, !1, i, s)),
    (e[Pr] = t.current),
    Hl(e.nodeType === 8 ? e.parentNode : e),
    new Np(t)
  )
}
fn.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(J(188))
      : ((e = Object.keys(e).join(',')), Error(J(268, e)))
  return (e = e1(t)), (e = e === null ? null : e.stateNode), e
}
fn.flushSync = function (e) {
  return so(e)
}
fn.hydrate = function (e, t, n) {
  if (!Gf(t)) throw Error(J(200))
  return qf(null, e, t, !0, n)
}
fn.hydrateRoot = function (e, t, n) {
  if (!Dp(e)) throw Error(J(405))
  var i = (n != null && n.hydratedSources) || null,
    s = !1,
    u = '',
    f = Ny
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
    (t = Oy(t, null, e, 1, n ?? null, s, !1, u, f)),
    (e[Pr] = t.current),
    Hl(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s)
  return new Kf(t)
}
fn.render = function (e, t, n) {
  if (!Gf(t)) throw Error(J(200))
  return qf(null, e, t, !1, n)
}
fn.unmountComponentAtNode = function (e) {
  if (!Gf(e)) throw Error(J(40))
  return e._reactRootContainer
    ? (so(function () {
        qf(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Pr] = null)
        })
      }),
      !0)
    : !1
}
fn.unstable_batchedUpdates = Ap
fn.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Gf(n)) throw Error(J(200))
  if (e == null || e._reactInternals === void 0) throw Error(J(38))
  return qf(e, t, n, !1, i)
}
fn.version = '18.2.0-next-9e3b772b8-20220608'
function Dy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy)
    } catch (e) {
      console.error(e)
    }
}
Dy(), (Ov.exports = fn)
var X4 = Ov.exports,
  U0 = X4
;(Bh.createRoot = U0.createRoot), (Bh.hydrateRoot = U0.hydrateRoot)
const J4 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Z4 = {
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
  eT = (e) => Z4[e],
  tT = (e) => e.replace(J4, eT)
let B0 = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: tT,
}
const nT = (e = {}) => {
    B0 = { ...B0, ...e }
  },
  rT = {
    type: '3rdParty',
    init(e) {
      nT(e.options.react)
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
 */ function xf() {
  return (
    (xf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    xf.apply(this, arguments)
  )
}
var Zi
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Zi || (Zi = {}))
const $0 = 'popstate'
function iT(e) {
  e === void 0 && (e = {})
  function t(i, s) {
    let { pathname: u, search: f, hash: d } = i.location
    return Od(
      '',
      { pathname: u, search: f, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    )
  }
  function n(i, s) {
    return typeof s == 'string' ? s : Fy(s)
  }
  return sT(t, n, null, e)
}
function My(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function oT() {
  return Math.random().toString(36).substr(2, 8)
}
function b0(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Od(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    xf(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? zy(t) : t,
      { state: n, key: (t && t.key) || i || oT() }
    )
  )
}
function Fy(e) {
  let { pathname: t = '/', search: n = '', hash: i = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    i && i !== '#' && (t += i.charAt(0) === '#' ? i : '#' + i),
    t
  )
}
function zy(e) {
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
function sT(e, t, n, i) {
  i === void 0 && (i = {})
  let { window: s = document.defaultView, v5Compat: u = !1 } = i,
    f = s.history,
    d = Zi.Pop,
    g = null,
    w = P()
  w == null && ((w = 0), f.replaceState(xf({}, f.state, { idx: w }), ''))
  function P() {
    return (f.state || { idx: null }).idx
  }
  function O() {
    d = Zi.Pop
    let q = P(),
      R = q == null ? null : q - w
    ;(w = q), g && g({ action: d, location: V.location, delta: R })
  }
  function E(q, R) {
    d = Zi.Push
    let k = Od(V.location, q, R)
    n && n(k, q), (w = P() + 1)
    let N = b0(k, w),
      j = V.createHref(k)
    try {
      f.pushState(N, '', j)
    } catch (Q) {
      if (Q instanceof DOMException && Q.name === 'DataCloneError') throw Q
      s.location.assign(j)
    }
    u && g && g({ action: d, location: V.location, delta: 1 })
  }
  function B(q, R) {
    d = Zi.Replace
    let k = Od(V.location, q, R)
    n && n(k, q), (w = P())
    let N = b0(k, w),
      j = V.createHref(k)
    f.replaceState(N, '', j),
      u && g && g({ action: d, location: V.location, delta: 0 })
  }
  function $(q) {
    let R = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      k = typeof q == 'string' ? q : Fy(q)
    return (
      (k = k.replace(/ $/, '%20')),
      My(
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
        s.addEventListener($0, O),
        (g = q),
        () => {
          s.removeEventListener($0, O), (g = null)
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
var H0
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(H0 || (H0 = {}))
function lT(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    i = e.charAt(n)
  return i && i !== '/' ? null : e.slice(n) || '/'
}
const Uy = ['post', 'put', 'patch', 'delete']
new Set(Uy)
const uT = ['get', ...Uy]
new Set(uT)
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nd() {
  return (
    (Nd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    Nd.apply(this, arguments)
  )
}
const aT = kt.createContext(null),
  By = kt.createContext(null)
function fT() {
  return kt.useContext(By) != null
}
function cT(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: s = Zi.Pop,
    navigator: u,
    static: f = !1,
    future: d,
  } = e
  fT() && My(!1)
  let g = t.replace(/^\/*/, '/'),
    w = kt.useMemo(
      () => ({
        basename: g,
        navigator: u,
        static: f,
        future: Nd({ v7_relativeSplatPath: !1 }, d),
      }),
      [g, d, u, f]
    )
  typeof i == 'string' && (i = zy(i))
  let {
      pathname: P = '/',
      search: O = '',
      hash: E = '',
      state: B = null,
      key: $ = 'default',
    } = i,
    V = kt.useMemo(() => {
      let q = lT(P, g)
      return q == null
        ? null
        : {
            location: { pathname: q, search: O, hash: E, state: B, key: $ },
            navigationType: s,
          }
    }, [g, P, O, E, B, $, s])
  return V == null
    ? null
    : kt.createElement(
        aT.Provider,
        { value: w },
        kt.createElement(By.Provider, { children: n, value: V })
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
 */ const hT = '6'
try {
  window.__reactRouterVersion = hT
} catch {}
const dT = 'startTransition',
  j0 = bC[dT]
function pT(e) {
  let { basename: t, children: n, future: i, window: s } = e,
    u = kt.useRef()
  u.current == null && (u.current = iT({ window: s, v5Compat: !0 }))
  let f = u.current,
    [d, g] = kt.useState({ action: f.action, location: f.location }),
    { v7_startTransition: w } = i || {},
    P = kt.useCallback(
      (O) => {
        w && j0 ? j0(() => g(O)) : g(O)
      },
      [g, w]
    )
  return (
    kt.useLayoutEffect(() => f.listen(P), [f, P]),
    kt.createElement(cT, {
      basename: t,
      children: n,
      location: d.location,
      navigationType: d.action,
      navigator: f,
      future: i,
    })
  )
}
var V0
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(V0 || (V0 = {}))
var W0
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(W0 || (W0 = {}))
var K0 = {}
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
 */ const $y = function (e) {
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
  gT = function (e) {
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
  by = {
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
          w = g ? e[s + 2] : 0,
          P = u >> 2,
          O = ((u & 3) << 4) | (d >> 4)
        let E = ((d & 15) << 2) | (w >> 6),
          B = w & 63
        g || ((B = 64), f || (E = 64)), i.push(n[P], n[O], n[E], n[B])
      }
      return i.join('')
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray($y(e), t)
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : gT(this.decodeStringToByteArray(e, t))
    },
    decodeStringToByteArray(e, t) {
      this.init_()
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        i = []
      for (let s = 0; s < e.length; ) {
        const u = n[e.charAt(s++)],
          d = s < e.length ? n[e.charAt(s)] : 0
        ++s
        const w = s < e.length ? n[e.charAt(s)] : 64
        ++s
        const O = s < e.length ? n[e.charAt(s)] : 64
        if ((++s, u == null || d == null || w == null || O == null))
          throw new mT()
        const E = (u << 2) | (d >> 4)
        if ((i.push(E), w !== 64)) {
          const B = ((d << 4) & 240) | (w >> 2)
          if ((i.push(B), O !== 64)) {
            const $ = ((w << 6) & 192) | O
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
class mT extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError')
  }
}
const vT = function (e) {
    const t = $y(e)
    return by.encodeByteArray(t, !0)
  },
  Cf = function (e) {
    return vT(e).replace(/\./g, '')
  },
  yT = function (e) {
    try {
      return by.decodeString(e, !0)
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
 */ function wT() {
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
 */ const _T = () => wT().__FIREBASE_DEFAULTS__,
  ST = () => {
    if (typeof process > 'u' || typeof K0 > 'u') return
    const e = K0.__FIREBASE_DEFAULTS__
    if (e) return JSON.parse(e)
  },
  ET = () => {
    if (typeof document > 'u') return
    let e
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
      return
    }
    const t = e && yT(e[1])
    return t && JSON.parse(t)
  },
  Hy = () => {
    try {
      return _T() || ST() || ET()
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
      return
    }
  },
  xT = (e) => {
    var t, n
    return (n =
      (t = Hy()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e]
  },
  CT = (e) => {
    const t = xT(e)
    if (!t) return
    const n = t.lastIndexOf(':')
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`)
    const i = parseInt(t.substring(n + 1), 10)
    return t[0] === '[' ? [t.substring(1, n - 1), i] : [t.substring(0, n), i]
  },
  jy = () => {
    var e
    return (e = Hy()) === null || e === void 0 ? void 0 : e.config
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
 */ class kT {
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
 */ function TT(e, t) {
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
  return [Cf(JSON.stringify(n)), Cf(JSON.stringify(f)), ''].join('.')
}
function AT() {
  try {
    return typeof indexedDB == 'object'
  } catch {
    return !1
  }
}
function IT() {
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
 */ const PT = 'FirebaseError'
class ks extends Error {
  constructor(t, n, i) {
    super(n),
      (this.code = t),
      (this.customData = i),
      (this.name = PT),
      Object.setPrototypeOf(this, ks.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Vy.prototype.create)
  }
}
class Vy {
  constructor(t, n, i) {
    ;(this.service = t), (this.serviceName = n), (this.errors = i)
  }
  create(t, ...n) {
    const i = n[0] || {},
      s = `${this.service}/${t}`,
      u = this.errors[t],
      f = u ? RT(u, i) : 'Error',
      d = `${this.serviceName}: ${f} (${s}).`
    return new ks(s, d, i)
  }
}
function RT(e, t) {
  return e.replace(LT, (n, i) => {
    const s = t[i]
    return s != null ? String(s) : `<${i}?>`
  })
}
const LT = /\{\$([^}]+)}/g
function Dd(e, t) {
  if (e === t) return !0
  const n = Object.keys(e),
    i = Object.keys(t)
  for (const s of n) {
    if (!i.includes(s)) return !1
    const u = e[s],
      f = t[s]
    if (G0(u) && G0(f)) {
      if (!Dd(u, f)) return !1
    } else if (u !== f) return !1
  }
  for (const s of i) if (!n.includes(s)) return !1
  return !0
}
function G0(e) {
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
 */ class OT {
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
      const i = new kT()
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
      if (DT(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Yi })
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
        instanceIdentifier: NT(t),
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
function NT(e) {
  return e === Yi ? void 0 : e
}
function DT(e) {
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
 */ class MT {
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
    const n = new OT(t, this)
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
 */ var Me
;(function (e) {
  ;(e[(e.DEBUG = 0)] = 'DEBUG'),
    (e[(e.VERBOSE = 1)] = 'VERBOSE'),
    (e[(e.INFO = 2)] = 'INFO'),
    (e[(e.WARN = 3)] = 'WARN'),
    (e[(e.ERROR = 4)] = 'ERROR'),
    (e[(e.SILENT = 5)] = 'SILENT')
})(Me || (Me = {}))
const FT = {
    debug: Me.DEBUG,
    verbose: Me.VERBOSE,
    info: Me.INFO,
    warn: Me.WARN,
    error: Me.ERROR,
    silent: Me.SILENT,
  },
  zT = Me.INFO,
  UT = {
    [Me.DEBUG]: 'log',
    [Me.VERBOSE]: 'log',
    [Me.INFO]: 'info',
    [Me.WARN]: 'warn',
    [Me.ERROR]: 'error',
  },
  BT = (e, t, ...n) => {
    if (t < e.logLevel) return
    const i = new Date().toISOString(),
      s = UT[t]
    if (s) console[s](`[${i}]  ${e.name}:`, ...n)
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      )
  }
let Wy = class {
  constructor(t) {
    ;(this.name = t),
      (this._logLevel = zT),
      (this._logHandler = BT),
      (this._userLogHandler = null)
  }
  get logLevel() {
    return this._logLevel
  }
  set logLevel(t) {
    if (!(t in Me))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``)
    this._logLevel = t
  }
  setLogLevel(t) {
    this._logLevel = typeof t == 'string' ? FT[t] : t
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
    this._userLogHandler && this._userLogHandler(this, Me.DEBUG, ...t),
      this._logHandler(this, Me.DEBUG, ...t)
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, Me.VERBOSE, ...t),
      this._logHandler(this, Me.VERBOSE, ...t)
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, Me.INFO, ...t),
      this._logHandler(this, Me.INFO, ...t)
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, Me.WARN, ...t),
      this._logHandler(this, Me.WARN, ...t)
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, Me.ERROR, ...t),
      this._logHandler(this, Me.ERROR, ...t)
  }
}
const $T = (e, t) => t.some((n) => e instanceof n)
let q0, Y0
function bT() {
  return (
    q0 ||
    (q0 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  )
}
function HT() {
  return (
    Y0 ||
    (Y0 = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  )
}
const Ky = new WeakMap(),
  Md = new WeakMap(),
  Gy = new WeakMap(),
  Oh = new WeakMap(),
  Mp = new WeakMap()
function jT(e) {
  const t = new Promise((n, i) => {
    const s = () => {
        e.removeEventListener('success', u), e.removeEventListener('error', f)
      },
      u = () => {
        n(wi(e.result)), s()
      },
      f = () => {
        i(e.error), s()
      }
    e.addEventListener('success', u), e.addEventListener('error', f)
  })
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Ky.set(n, e)
      })
      .catch(() => {}),
    Mp.set(t, e),
    t
  )
}
function VT(e) {
  if (Md.has(e)) return
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
  Md.set(e, t)
}
let Fd = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return Md.get(e)
      if (t === 'objectStoreNames') return e.objectStoreNames || Gy.get(e)
      if (t === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0])
    }
    return wi(e[t])
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
function WT(e) {
  Fd = e(Fd)
}
function KT(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const i = e.call(Nh(this), t, ...n)
        return Gy.set(i, t.sort ? t.sort() : [t]), wi(i)
      }
    : HT().includes(e)
    ? function (...t) {
        return e.apply(Nh(this), t), wi(Ky.get(this))
      }
    : function (...t) {
        return wi(e.apply(Nh(this), t))
      }
}
function GT(e) {
  return typeof e == 'function'
    ? KT(e)
    : (e instanceof IDBTransaction && VT(e), $T(e, bT()) ? new Proxy(e, Fd) : e)
}
function wi(e) {
  if (e instanceof IDBRequest) return jT(e)
  if (Oh.has(e)) return Oh.get(e)
  const t = GT(e)
  return t !== e && (Oh.set(e, t), Mp.set(t, e)), t
}
const Nh = (e) => Mp.get(e)
function qT(e, t, { blocked: n, upgrade: i, blocking: s, terminated: u } = {}) {
  const f = indexedDB.open(e, t),
    d = wi(f)
  return (
    i &&
      f.addEventListener('upgradeneeded', (g) => {
        i(wi(f.result), g.oldVersion, g.newVersion, wi(f.transaction), g)
      }),
    n && f.addEventListener('blocked', (g) => n(g.oldVersion, g.newVersion, g)),
    d
      .then((g) => {
        u && g.addEventListener('close', () => u()),
          s &&
            g.addEventListener('versionchange', (w) =>
              s(w.oldVersion, w.newVersion, w)
            )
      })
      .catch(() => {}),
    d
  )
}
const YT = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  QT = ['put', 'add', 'delete', 'clear'],
  Dh = new Map()
function Q0(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return
  if (Dh.get(t)) return Dh.get(t)
  const n = t.replace(/FromIndex$/, ''),
    i = t !== n,
    s = QT.includes(n)
  if (
    !(n in (i ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || YT.includes(n))
  )
    return
  const u = async function (f, ...d) {
    const g = this.transaction(f, s ? 'readwrite' : 'readonly')
    let w = g.store
    return (
      i && (w = w.index(d.shift())),
      (await Promise.all([w[n](...d), s && g.done]))[0]
    )
  }
  return Dh.set(t, u), u
}
WT((e) => ({
  ...e,
  get: (t, n, i) => Q0(t, n) || e.get(t, n, i),
  has: (t, n) => !!Q0(t, n) || e.has(t, n),
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
 */ class XT {
  constructor(t) {
    this.container = t
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (JT(n)) {
          const i = n.getImmediate()
          return `${i.library}/${i.version}`
        } else return null
      })
      .filter((n) => n)
      .join(' ')
  }
}
function JT(e) {
  const t = e.getComponent()
  return t?.type === 'VERSION'
}
const zd = '@firebase/app',
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
 */ const Or = new Wy('@firebase/app'),
  ZT = '@firebase/app-compat',
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
 */ const Ud = '[DEFAULT]',
  TA = {
    [zd]: 'fire-core',
    [ZT]: 'fire-core-compat',
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
 */ const kf = new Map(),
  AA = new Map(),
  Bd = new Map()
function J0(e, t) {
  try {
    e.container.addComponent(t)
  } catch (n) {
    Or.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    )
  }
}
function Tf(e) {
  const t = e.name
  if (Bd.has(t))
    return (
      Or.debug(`There were multiple attempts to register component ${t}.`), !1
    )
  Bd.set(t, e)
  for (const n of kf.values()) J0(n, e)
  for (const n of AA.values()) J0(n, e)
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
  _i = new Vy('app', 'Firebase', PA)
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
    if (this.isDeleted) throw _i.create('app-deleted', { appName: this._name })
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
function qy(e, t = {}) {
  let n = e
  typeof t != 'object' && (t = { name: t })
  const i = Object.assign({ name: Ud, automaticDataCollectionEnabled: !1 }, t),
    s = i.name
  if (typeof s != 'string' || !s)
    throw _i.create('bad-app-name', { appName: String(s) })
  if ((n || (n = jy()), !n)) throw _i.create('no-options')
  const u = kf.get(s)
  if (u) {
    if (Dd(n, u.options) && Dd(i, u.config)) return u
    throw _i.create('duplicate-app', { appName: s })
  }
  const f = new MT(s)
  for (const g of Bd.values()) f.addComponent(g)
  const d = new RA(n, i, f)
  return kf.set(s, d), d
}
function OA(e = Ud) {
  const t = kf.get(e)
  if (!t && e === Ud && jy()) return qy()
  if (!t) throw _i.create('no-app', { appName: e })
  return t
}
function ds(e, t, n) {
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
      Or.warn(d.join(' '))
    return
  }
  Tf(new Xl(`${s}-version`, () => ({ library: s, version: t }), 'VERSION'))
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
  Jl = 'firebase-heartbeat-store'
let Mh = null
function Yy() {
  return (
    Mh ||
      (Mh = qT(NA, DA, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Jl)
              } catch (n) {
                console.warn(n)
              }
          }
        },
      }).catch((e) => {
        throw _i.create('idb-open', { originalErrorMessage: e.message })
      })),
    Mh
  )
}
async function MA(e) {
  try {
    const n = (await Yy()).transaction(Jl),
      i = await n.objectStore(Jl).get(Qy(e))
    return await n.done, i
  } catch (t) {
    if (t instanceof ks) Or.warn(t.message)
    else {
      const n = _i.create('idb-get', { originalErrorMessage: t?.message })
      Or.warn(n.message)
    }
  }
}
async function Z0(e, t) {
  try {
    const i = (await Yy()).transaction(Jl, 'readwrite')
    await i.objectStore(Jl).put(t, Qy(e)), await i.done
  } catch (n) {
    if (n instanceof ks) Or.warn(n.message)
    else {
      const i = _i.create('idb-set', { originalErrorMessage: n?.message })
      Or.warn(i.message)
    }
  }
}
function Qy(e) {
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
        u = ev()
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
      const n = ev(),
        { heartbeatsToSend: i, unsentEntries: s } = BA(
          this._heartbeatsCache.heartbeats
        ),
        u = Cf(JSON.stringify({ version: 2, heartbeats: i }))
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
      return Or.warn(n), ''
    }
  }
}
function ev() {
  return new Date().toISOString().substring(0, 10)
}
function BA(e, t = FA) {
  const n = []
  let i = e.slice()
  for (const s of e) {
    const u = n.find((f) => f.agent === s.agent)
    if (u) {
      if ((u.dates.push(s.date), tv(n) > t)) {
        u.dates.pop()
        break
      }
    } else if ((n.push({ agent: s.agent, dates: [s.date] }), tv(n) > t)) {
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
    return AT()
      ? IT()
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
      return Z0(this.app, {
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
      return Z0(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...t.heartbeats],
      })
    } else return
  }
}
function tv(e) {
  return Cf(JSON.stringify({ version: 2, heartbeats: e })).length
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
  Tf(new Xl('platform-logger', (t) => new XT(t), 'PRIVATE')),
    Tf(new Xl('heartbeat', (t) => new UA(t), 'PRIVATE')),
    ds(zd, X0, e),
    ds(zd, X0, 'esm2017'),
    ds('fire-js', '')
}
bA('')
var nv =
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
  function w(x) {
    if (isNaN(x) || !isFinite(x)) return O
    if (0 > x) return q(w(-x))
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
    for (var T = w(Math.pow(S, 8)), I = O, D = 0; D < x.length; D += 8) {
      var U = Math.min(8, x.length - D),
        A = parseInt(x.substring(D, D + U), S)
      8 > U
        ? ((U = w(Math.pow(S, U))), (I = I.j(U).add(w(A))))
        : ((I = I.j(T)), (I = I.add(w(A))))
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
      for (var S = w(Math.pow(x, 6)), T = this, I = ''; ; ) {
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
    if (0 > this.l(B) && 0 > x.l(B)) return w(this.m() * x.m())
    for (var S = this.g.length + x.g.length, T = [], I = 0; I < 2 * S; I++)
      T[I] = 0
    for (I = 0; I < this.g.length; I++)
      for (var D = 0; D < x.g.length; D++) {
        var U = this.i(I) >>> 16,
          A = this.i(I) & 65535,
          Xe = x.i(D) >>> 16,
          It = x.i(D) & 65535
        ;(T[2 * I + 2 * D] += A * It),
          k(T, 2 * I + 2 * D),
          (T[2 * I + 2 * D + 1] += U * It),
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
      for (var T = E, I = S; 0 >= I.l(x); ) (T = Q(T)), (I = Q(I))
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
          U = w(T),
          A = U.j(S);
        V(A) || 0 < A.l(x);

      )
        (T -= I), (U = w(T)), (A = U.j(S))
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
  function Q(x) {
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
    (f.fromNumber = w),
    (f.fromString = P),
    (Xy = f)
}).apply(
  typeof nv < 'u'
    ? nv
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
var Ua =
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
      typeof Ua == 'object' && Ua,
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
        for (var y = 0; y < l.length - 1; y++) {
          var z = l[y]
          if (!(z in p)) break e
          p = p[z]
        }
        ;(l = l[l.length - 1]),
          (y = p[l]),
          (c = c(y)),
          c != y &&
            c != null &&
            t(p, l, { configurable: !0, writable: !0, value: c })
      }
  }
  function u(l, c) {
    l instanceof String && (l += '')
    var p = 0,
      y = !1,
      z = {
        next: function () {
          if (!y && p < l.length) {
            var b = p++
            return { value: c(b, l[b]), done: !1 }
          }
          return (y = !0), { done: !0, value: void 0 }
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
  function w(l) {
    var c = typeof l
    return (c == 'object' && l != null) || c == 'function'
  }
  function P(l, c, p) {
    return l.call.apply(l.bind, arguments)
  }
  function O(l, c, p) {
    if (!l) throw Error()
    if (2 < arguments.length) {
      var y = Array.prototype.slice.call(arguments, 2)
      return function () {
        var z = Array.prototype.slice.call(arguments)
        return Array.prototype.unshift.apply(z, y), l.apply(c, z)
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
      var y = p.slice()
      return y.push.apply(y, arguments), l.apply(this, y)
    }
  }
  function $(l, c) {
    function p() {}
    ;(p.prototype = c.prototype),
      (l.aa = c.prototype),
      (l.prototype = new p()),
      (l.prototype.constructor = l),
      (l.Qb = function (y, z, b) {
        for (
          var ee = Array(arguments.length - 2), ke = 2;
          ke < arguments.length;
          ke++
        )
          ee[ke - 2] = arguments[ke]
        return c.prototype[z].apply(y, ee)
      })
  }
  function V(l) {
    const c = l.length
    if (0 < c) {
      const p = Array(c)
      for (let y = 0; y < c; y++) p[y] = l[y]
      return p
    }
    return []
  }
  function q(l, c) {
    for (let p = 1; p < arguments.length; p++) {
      const y = arguments[p]
      if (g(y)) {
        const z = l.length || 0,
          b = y.length || 0
        l.length = z + b
        for (let ee = 0; ee < b; ee++) l[z + ee] = y[ee]
      } else l.push(y)
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
  var Q =
    N().indexOf('Gecko') != -1 &&
    !(N().toLowerCase().indexOf('webkit') != -1 && N().indexOf('Edge') == -1) &&
    !(N().indexOf('Trident') != -1 || N().indexOf('MSIE') != -1) &&
    N().indexOf('Edge') == -1
  function Z(l, c, p) {
    for (const y in l) c.call(p, l[y], y, l)
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
    let p, y
    for (let z = 1; z < arguments.length; z++) {
      y = arguments[z]
      for (p in y) l[p] = y[p]
      for (let b = 0; b < T.length; b++)
        (p = T[b]), Object.prototype.hasOwnProperty.call(y, p) && (l[p] = y[p])
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
      const y = It.get()
      y.set(c, p), this.h ? (this.h.next = y) : (this.g = y), (this.h = y)
    }
  }
  var It = new R(
    () => new hn(),
    (l) => l.reset()
  )
  class hn {
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
  let tt,
    X = !1,
    oe = new Xe(),
    se = () => {
      const l = d.Promise.resolve(void 0)
      tt = () => {
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
      var c = It
      c.j(l), 100 > c.h && (c.h++, (l.next = c.g), (c.g = l))
    }
    X = !1
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
  function be(l, c) {
    ;(this.type = l), (this.g = this.target = c), (this.defaultPrevented = !1)
  }
  be.prototype.h = function () {
    this.defaultPrevented = !0
  }
  var On = (function () {
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
  function wt(l, c) {
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
        y =
          l.changedTouches && l.changedTouches.length
            ? l.changedTouches[0]
            : null
      if (
        ((this.target = l.target || l.srcElement),
        (this.g = c),
        (c = l.relatedTarget))
      ) {
        if (Q) {
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
        y
          ? ((this.clientX = y.clientX !== void 0 ? y.clientX : y.pageX),
            (this.clientY = y.clientY !== void 0 ? y.clientY : y.pageY),
            (this.screenX = y.screenX || 0),
            (this.screenY = y.screenY || 0))
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
            : bt[l.pointerType] || ''),
        (this.state = l.state),
        (this.i = l),
        l.defaultPrevented && wt.aa.h.call(this)
    }
  }
  $(wt, be)
  var bt = { 2: 'touch', 3: 'pen', 4: 'mouse' }
  wt.prototype.h = function () {
    wt.aa.h.call(this)
    var l = this.i
    l.preventDefault ? l.preventDefault() : (l.returnValue = !1)
  }
  var dn = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    Ti = 0
  function Ai(l, c, p, y, z) {
    ;(this.listener = l),
      (this.proxy = null),
      (this.src = c),
      (this.type = p),
      (this.capture = !!y),
      (this.ha = z),
      (this.key = ++Ti),
      (this.da = this.fa = !1)
  }
  function ao(l) {
    ;(l.da = !0),
      (l.listener = null),
      (l.proxy = null),
      (l.src = null),
      (l.ha = null)
  }
  function lr(l) {
    ;(this.src = l), (this.g = {}), (this.h = 0)
  }
  lr.prototype.add = function (l, c, p, y, z) {
    var b = l.toString()
    ;(l = this.g[b]), l || ((l = this.g[b] = []), this.h++)
    var ee = fo(l, c, y, z)
    return (
      -1 < ee
        ? ((c = l[ee]), p || (c.fa = !1))
        : ((c = new Ai(c, this.src, b, !!y, z)), (c.fa = p), l.push(c)),
      c
    )
  }
  function Dr(l, c) {
    var p = c.type
    if (p in l.g) {
      var y = l.g[p],
        z = Array.prototype.indexOf.call(y, c, void 0),
        b
      ;(b = 0 <= z) && Array.prototype.splice.call(y, z, 1),
        b && (ao(c), l.g[p].length == 0 && (delete l.g[p], l.h--))
    }
  }
  function fo(l, c, p, y) {
    for (var z = 0; z < l.length; ++z) {
      var b = l[z]
      if (!b.da && b.listener == c && b.capture == !!p && b.ha == y) return z
    }
    return -1
  }
  var Pt = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    ur = {}
  function su(l, c, p, y, z) {
    if (y && y.once) return uu(l, c, p, y, z)
    if (Array.isArray(c)) {
      for (var b = 0; b < c.length; b++) su(l, c[b], p, y, z)
      return null
    }
    return (
      (p = As(p)),
      l && l[dn]
        ? l.K(c, p, w(y) ? !!y.capture : !!y, z)
        : pn(l, c, p, !1, y, z)
    )
  }
  function pn(l, c, p, y, z, b) {
    if (!c) throw Error('Invalid event type')
    var ee = w(z) ? !!z.capture : !!z,
      ke = Ts(l)
    if ((ke || (l[Pt] = ke = new lr(l)), (p = ke.add(c, p, y, ee, b)), p.proxy))
      return p
    if (
      ((y = lu()),
      (p.proxy = y),
      (y.src = l),
      (y.listener = p),
      l.addEventListener)
    )
      On || (z = ee),
        z === void 0 && (z = !1),
        l.addEventListener(c.toString(), y, z)
    else if (l.attachEvent) l.attachEvent(Fr(c.toString()), y)
    else if (l.addListener && l.removeListener) l.addListener(y)
    else throw Error('addEventListener and attachEvent are unavailable.')
    return p
  }
  function lu() {
    function l(p) {
      return c.call(l.src, l.listener, p)
    }
    const c = co
    return l
  }
  function uu(l, c, p, y, z) {
    if (Array.isArray(c)) {
      for (var b = 0; b < c.length; b++) uu(l, c[b], p, y, z)
      return null
    }
    return (
      (p = As(p)),
      l && l[dn]
        ? l.L(c, p, w(y) ? !!y.capture : !!y, z)
        : pn(l, c, p, !0, y, z)
    )
  }
  function Mr(l, c, p, y, z) {
    if (Array.isArray(c))
      for (var b = 0; b < c.length; b++) Mr(l, c[b], p, y, z)
    else
      (y = w(y) ? !!y.capture : !!y),
        (p = As(p)),
        l && l[dn]
          ? ((l = l.i),
            (c = String(c).toString()),
            c in l.g &&
              ((b = l.g[c]),
              (p = fo(b, p, y, z)),
              -1 < p &&
                (ao(b[p]),
                Array.prototype.splice.call(b, p, 1),
                b.length == 0 && (delete l.g[c], l.h--))))
          : l &&
            (l = Ts(l)) &&
            ((c = l.g[c.toString()]),
            (l = -1),
            c && (l = fo(c, p, y, z)),
            (p = -1 < l ? c[l] : null) && Rt(p))
  }
  function Rt(l) {
    if (typeof l != 'number' && l && !l.da) {
      var c = l.src
      if (c && c[dn]) Dr(c.i, l)
      else {
        var p = l.type,
          y = l.proxy
        c.removeEventListener
          ? c.removeEventListener(p, y, l.capture)
          : c.detachEvent
          ? c.detachEvent(Fr(p), y)
          : c.addListener && c.removeListener && c.removeListener(y),
          (p = Ts(c))
            ? (Dr(p, l), p.h == 0 && ((p.src = null), (c[Pt] = null)))
            : ao(l)
      }
    }
  }
  function Fr(l) {
    return l in ur ? ur[l] : (ur[l] = 'on' + l)
  }
  function co(l, c) {
    if (l.da) l = !0
    else {
      c = new wt(c, this)
      var p = l.listener,
        y = l.ha || l.src
      l.fa && Rt(l), (l = p.call(y, c))
    }
    return l
  }
  function Ts(l) {
    return (l = l[Pt]), l instanceof lr ? l : null
  }
  var ar = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
  function As(l) {
    return typeof l == 'function'
      ? l
      : (l[ar] ||
          (l[ar] = function (c) {
            return l.handleEvent(c)
          }),
        l[ar])
  }
  function Ge() {
    Pe.call(this), (this.i = new lr(this)), (this.M = this), (this.F = null)
  }
  $(Ge, Pe),
    (Ge.prototype[dn] = !0),
    (Ge.prototype.removeEventListener = function (l, c, p, y) {
      Mr(this, l, c, p, y)
    })
  function qe(l, c) {
    var p,
      y = l.F
    if (y) for (p = []; y; y = y.F) p.push(y)
    if (((l = l.M), (y = c.type || c), typeof c == 'string')) c = new be(c, l)
    else if (c instanceof be) c.target = c.target || l
    else {
      var z = c
      ;(c = new be(y, l)), I(c, z)
    }
    if (((z = !0), p))
      for (var b = p.length - 1; 0 <= b; b--) {
        var ee = (c.g = p[b])
        z = zr(ee, y, !0, c) && z
      }
    if (
      ((ee = c.g = l),
      (z = zr(ee, y, !0, c) && z),
      (z = zr(ee, y, !1, c) && z),
      p)
    )
      for (b = 0; b < p.length; b++)
        (ee = c.g = p[b]), (z = zr(ee, y, !1, c) && z)
  }
  ;(Ge.prototype.N = function () {
    if ((Ge.aa.N.call(this), this.i)) {
      var l = this.i,
        c
      for (c in l.g) {
        for (var p = l.g[c], y = 0; y < p.length; y++) ao(p[y])
        delete l.g[c], l.h--
      }
    }
    this.F = null
  }),
    (Ge.prototype.K = function (l, c, p, y) {
      return this.i.add(String(l), c, !1, p, y)
    }),
    (Ge.prototype.L = function (l, c, p, y) {
      return this.i.add(String(l), c, !0, p, y)
    })
  function zr(l, c, p, y) {
    if (((c = l.i.g[String(c)]), !c)) return !0
    c = c.concat()
    for (var z = !0, b = 0; b < c.length; ++b) {
      var ee = c[b]
      if (ee && !ee.da && ee.capture == p) {
        var ke = ee.listener,
          st = ee.ha || ee.src
        ee.fa && Dr(l.i, ee), (z = ke.call(st, y) !== !1 && z)
      }
    }
    return z && !y.defaultPrevented
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
  class Is extends Pe {
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
  function fr(l) {
    Pe.call(this), (this.h = l), (this.g = {})
  }
  $(fr, Pe)
  var go = []
  function mo(l) {
    Z(
      l.g,
      function (c, p) {
        this.g.hasOwnProperty(p) && Rt(c)
      },
      l
    ),
      (l.g = {})
  }
  ;(fr.prototype.N = function () {
    fr.aa.N.call(this), mo(this)
  }),
    (fr.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented')
    })
  var Ii = d.JSON.stringify,
    Ps = d.JSON.parse,
    Qf = class {
      stringify(l) {
        return d.JSON.stringify(l, void 0)
      }
      parse(l) {
        return d.JSON.parse(l, void 0)
      }
    }
  function Rs() {}
  Rs.prototype.h = null
  function au(l) {
    return l.h || (l.h = l.i())
  }
  function fu() {}
  var Ur = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' }
  function Ls() {
    be.call(this, 'd')
  }
  $(Ls, be)
  function Os() {
    be.call(this, 'c')
  }
  $(Os, be)
  var Br = {},
    cu = null
  function vo() {
    return (cu = cu || new Ge())
  }
  Br.La = 'serverreachability'
  function hu(l) {
    be.call(this, Br.La, l)
  }
  $(hu, be)
  function Pi(l) {
    const c = vo()
    qe(c, new hu(c))
  }
  Br.STAT_EVENT = 'statevent'
  function du(l, c) {
    be.call(this, Br.STAT_EVENT, l), (this.stat = c)
  }
  $(du, be)
  function ot(l) {
    const c = vo()
    qe(c, new du(c, l))
  }
  Br.Ma = 'timingevent'
  function pu(l, c) {
    be.call(this, Br.Ma, l), (this.size = c)
  }
  $(pu, be)
  function cr(l, c) {
    if (typeof l != 'function')
      throw Error('Fn must not be null and must be a function')
    return d.setTimeout(function () {
      l()
    }, c)
  }
  function Ri() {
    this.g = !0
  }
  Ri.prototype.xa = function () {
    this.g = !1
  }
  function Xf(l, c, p, y, z, b) {
    l.info(function () {
      if (l.g)
        if (b)
          for (var ee = '', ke = b.split('&'), st = 0; st < ke.length; st++) {
            var _e = ke[st].split('=')
            if (1 < _e.length) {
              var Ae = _e[0]
              _e = _e[1]
              var rt = Ae.split('_')
              ee =
                2 <= rt.length && rt[1] == 'type'
                  ? ee + (Ae + '=' + _e + '&')
                  : ee + (Ae + '=redacted&')
            }
          }
        else ee = null
      else ee = b
      return (
        'XMLHTTP REQ (' +
        y +
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
  function Jf(l, c, p, y, z, b, ee) {
    l.info(function () {
      return (
        'XMLHTTP RESP (' +
        y +
        ') [ attempt ' +
        z +
        ']: ' +
        c +
        `
` +
        p +
        `
` +
        b +
        ' ' +
        ee
      )
    })
  }
  function $r(l, c, p, y) {
    l.info(function () {
      return 'XMLHTTP TEXT (' + c + '): ' + ec(l, p) + (y ? ' ' + y : '')
    })
  }
  function Zf(l, c) {
    l.info(function () {
      return 'TIMEOUT: ' + c
    })
  }
  Ri.prototype.info = function () {}
  function ec(l, c) {
    if (!l.g) return c
    if (!c) return null
    try {
      var p = JSON.parse(c)
      if (p) {
        for (l = 0; l < p.length; l++)
          if (Array.isArray(p[l])) {
            var y = p[l]
            if (!(2 > y.length)) {
              var z = y[1]
              if (Array.isArray(z) && !(1 > z.length)) {
                var b = z[0]
                if (b != 'noop' && b != 'stop' && b != 'close')
                  for (var ee = 1; ee < z.length; ee++) z[ee] = ''
              }
            }
          }
      }
      return Ii(p)
    } catch {
      return c
    }
  }
  var Ns = {
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
    tc = {
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
    yo
  function wo() {}
  $(wo, Rs),
    (wo.prototype.g = function () {
      return new XMLHttpRequest()
    }),
    (wo.prototype.i = function () {
      return {}
    }),
    (yo = new wo())
  function Kn(l, c, p, y) {
    ;(this.j = l),
      (this.i = c),
      (this.l = p),
      (this.R = y || 1),
      (this.U = new fr(this)),
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
      (this.h = new gu())
  }
  function gu() {
    ;(this.i = null), (this.g = ''), (this.h = !1)
  }
  var mu = {},
    Ds = {}
  function Ms(l, c, p) {
    ;(l.L = 1), (l.v = jr(gn(c))), (l.m = p), (l.P = !0), Li(l, null)
  }
  function Li(l, c) {
    ;(l.F = Date.now()), So(l), (l.A = gn(l.v))
    var p = l.A,
      y = l.R
    Array.isArray(y) || (y = [String(y)]),
      Ru(p.i, 't', y),
      (l.C = 0),
      (p = l.j.J),
      (l.h = new gu()),
      (l.g = Fu(l.j, p ? c : null, !l.m)),
      0 < l.O && (l.M = new Is(E(l.Y, l, l.g), l.O)),
      (c = l.U),
      (p = l.g),
      (y = l.ca)
    var z = 'readystatechange'
    Array.isArray(z) || (z && (go[0] = z.toString()), (z = go))
    for (var b = 0; b < z.length; b++) {
      var ee = su(p, z[b], y || c.handleEvent, !1, c.h || c)
      if (!ee) break
      c.g[ee.key] = ee
    }
    ;(c = l.H ? S(l.H) : {}),
      l.m
        ? (l.u || (l.u = 'POST'),
          (c['Content-Type'] = 'application/x-www-form-urlencoded'),
          l.g.ea(l.A, l.u, l.m, c))
        : ((l.u = 'GET'), l.g.ea(l.A, l.u, null, c)),
      Pi(),
      Xf(l.i, l.u, l.A, l.l, l.R, l.m)
  }
  ;(Kn.prototype.ca = function (l) {
    l = l.target
    const c = this.M
    c && vn(l) == 3 ? c.j() : this.Y(l)
  }),
    (Kn.prototype.Y = function (l) {
      try {
        if (l == this.g)
          e: {
            const rt = vn(this.g)
            var c = this.g.Ba()
            const wn = this.g.Z()
            if (
              !(3 > rt) &&
              (rt != 3 || (this.g && (this.h.h || this.g.oa() || Po(this.g))))
            ) {
              this.J ||
                rt != 4 ||
                c == 7 ||
                (c == 8 || 0 >= wn ? Pi(3) : Pi(2)),
                Fs(this)
              var p = this.g.Z()
              this.X = p
              t: if (vu(this)) {
                var y = Po(this.g)
                l = ''
                var z = y.length,
                  b = vn(this.g) == 4
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    Gn(this), br(this)
                    var ee = ''
                    break t
                  }
                  this.h.i = new d.TextDecoder()
                }
                for (c = 0; c < z; c++)
                  (this.h.h = !0),
                    (l += this.h.i.decode(y[c], { stream: !(b && c == z - 1) }))
                ;(y.length = 0), (this.h.g += l), (this.C = 0), (ee = this.h.g)
              } else ee = this.g.oa()
              if (
                ((this.o = p == 200),
                Jf(this.i, this.u, this.A, this.l, this.R, rt, p),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var ke,
                        st = this.g
                      if (
                        (ke = st.g
                          ? st.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !k(ke)
                      ) {
                        var _e = ke
                        break t
                      }
                    }
                    _e = null
                  }
                  if ((p = _e))
                    $r(
                      this.i,
                      this.l,
                      p,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      Eo(this, p)
                  else {
                    ;(this.o = !1), (this.s = 3), ot(12), Gn(this), br(this)
                    break e
                  }
                }
                if (this.P) {
                  p = !0
                  let jt
                  for (; !this.J && this.C < ee.length; )
                    if (((jt = _o(this, ee)), jt == Ds)) {
                      rt == 4 && ((this.s = 4), ot(14), (p = !1)),
                        $r(this.i, this.l, null, '[Incomplete Response]')
                      break
                    } else if (jt == mu) {
                      ;(this.s = 4),
                        ot(15),
                        $r(this.i, this.l, ee, '[Invalid Chunk]'),
                        (p = !1)
                      break
                    } else $r(this.i, this.l, jt, null), Eo(this, jt)
                  if (
                    (vu(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    rt != 4 ||
                      ee.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), ot(16), (p = !1)),
                    (this.o = this.o && p),
                    !p)
                  )
                    $r(this.i, this.l, ee, '[Invalid Chunked Response]'),
                      Gn(this),
                      br(this)
                  else if (0 < ee.length && !this.W) {
                    this.W = !0
                    var Ae = this.j
                    Ae.g == this &&
                      Ae.ba &&
                      !Ae.M &&
                      (Ae.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          ee.length
                      ),
                      qr(Ae),
                      (Ae.M = !0),
                      ot(11))
                  }
                } else $r(this.i, this.l, ee, null), Eo(this, ee)
                rt == 4 && Gn(this),
                  this.o &&
                    !this.J &&
                    (rt == 4 ? Nn(this.j, this) : ((this.o = !1), So(this)))
              } else
                Ht(this.g),
                  p == 400 && 0 < ee.indexOf('Unknown SID')
                    ? ((this.s = 3), ot(12))
                    : ((this.s = 0), ot(13)),
                  Gn(this),
                  br(this)
            }
          }
      } catch {
      } finally {
      }
    })
  function vu(l) {
    return l.g ? l.u == 'GET' && l.L != 2 && l.j.Ca : !1
  }
  function _o(l, c) {
    var p = l.C,
      y = c.indexOf(
        `
`,
        p
      )
    return y == -1
      ? Ds
      : ((p = Number(c.substring(p, y))),
        isNaN(p)
          ? mu
          : ((y += 1),
            y + p > c.length
              ? Ds
              : ((c = c.slice(y, y + p)), (l.C = y + p), c)))
  }
  Kn.prototype.cancel = function () {
    ;(this.J = !0), Gn(this)
  }
  function So(l) {
    ;(l.S = Date.now() + l.I), yu(l, l.I)
  }
  function yu(l, c) {
    if (l.B != null) throw Error('WatchDog timer not null')
    l.B = cr(E(l.ba, l), c)
  }
  function Fs(l) {
    l.B && (d.clearTimeout(l.B), (l.B = null))
  }
  Kn.prototype.ba = function () {
    this.B = null
    const l = Date.now()
    0 <= l - this.S
      ? (Zf(this.i, this.A),
        this.L != 2 && (Pi(), ot(17)),
        Gn(this),
        (this.s = 2),
        br(this))
      : yu(this, this.S - l)
  }
  function br(l) {
    l.j.G == 0 || l.J || Nn(l.j, l)
  }
  function Gn(l) {
    Fs(l)
    var c = l.M
    c && typeof c.ma == 'function' && c.ma(),
      (l.M = null),
      mo(l.U),
      l.g && ((c = l.g), (l.g = null), c.abort(), c.ma())
  }
  function Eo(l, c) {
    try {
      var p = l.j
      if (p.G != 0 && (p.g == l || xo(p.h, l))) {
        if (!l.K && xo(p.h, l) && p.G == 3) {
          try {
            var y = p.Da.g.parse(c)
          } catch {
            y = null
          }
          if (Array.isArray(y) && y.length == 3) {
            var z = y
            if (z[0] == 0) {
              e: if (!p.u) {
                if (p.g)
                  if (p.g.F + 3e3 < l.F) Le(p), Mi(p)
                  else break e
                yn(p), ot(18)
              }
            } else
              (p.za = z[1]),
                0 < p.za - p.T &&
                  37500 > z[2] &&
                  p.F &&
                  p.v == 0 &&
                  !p.C &&
                  (p.C = cr(E(p.Za, p), 6e3))
            if (1 >= Su(p.h) && p.ca) {
              try {
                p.ca()
              } catch {}
              p.ca = void 0
            }
          } else hr(p, 11)
        } else if (((l.K || p.g == l) && Le(p), !k(c)))
          for (z = p.Da.g.parse(c), c = 0; c < z.length; c++) {
            let _e = z[c]
            if (((p.T = _e[0]), (_e = _e[1]), p.G == 2))
              if (_e[0] == 'c') {
                ;(p.K = _e[1]), (p.ia = _e[2])
                const Ae = _e[3]
                Ae != null && ((p.la = Ae), p.j.info('VER=' + p.la))
                const rt = _e[4]
                rt != null && ((p.Aa = rt), p.j.info('SVER=' + p.Aa))
                const wn = _e[5]
                wn != null &&
                  typeof wn == 'number' &&
                  0 < wn &&
                  ((y = 1.5 * wn),
                  (p.L = y),
                  p.j.info('backChannelRequestTimeoutMs_=' + y)),
                  (y = p)
                const jt = l.g
                if (jt) {
                  const Ui = jt.g
                    ? jt.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null
                  if (Ui) {
                    var b = y.h
                    b.g ||
                      (Ui.indexOf('spdy') == -1 &&
                        Ui.indexOf('quic') == -1 &&
                        Ui.indexOf('h2') == -1) ||
                      ((b.j = b.l),
                      (b.g = new Set()),
                      b.h && (Co(b, b.h), (b.h = null)))
                  }
                  if (y.D) {
                    const Gs = jt.g
                      ? jt.g.getResponseHeader('X-HTTP-Session-Id')
                      : null
                    Gs && ((y.ya = Gs), Re(y.I, y.D, Gs))
                  }
                }
                ;(p.G = 3),
                  p.l && p.l.ua(),
                  p.ba &&
                    ((p.R = Date.now() - l.F),
                    p.j.info('Handshake RTT: ' + p.R + 'ms')),
                  (y = p)
                var ee = l
                if (((y.qa = Mu(y, y.J ? y.ia : null, y.W)), ee.K)) {
                  zs(y.h, ee)
                  var ke = ee,
                    st = y.L
                  st && (ke.I = st), ke.B && (Fs(ke), So(ke)), (y.g = ee)
                } else Ks(y)
                0 < p.i.length && Fi(p)
              } else (_e[0] != 'stop' && _e[0] != 'close') || hr(p, 7)
            else
              p.G == 3 &&
                (_e[0] == 'stop' || _e[0] == 'close'
                  ? _e[0] == 'stop'
                    ? hr(p, 7)
                    : Ro(p)
                  : _e[0] != 'noop' && p.l && p.l.ta(_e),
                (p.v = 0))
          }
      }
      Pi(4)
    } catch {}
  }
  var nc = class {
    constructor(l, c) {
      ;(this.g = l), (this.map = c)
    }
  }
  function wu(l) {
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
  function _u(l) {
    return l.h ? !0 : l.g ? l.g.size >= l.j : !1
  }
  function Su(l) {
    return l.h ? 1 : l.g ? l.g.size : 0
  }
  function xo(l, c) {
    return l.h ? l.h == c : l.g ? l.g.has(c) : !1
  }
  function Co(l, c) {
    l.g ? l.g.add(c) : (l.h = c)
  }
  function zs(l, c) {
    l.h && l.h == c ? (l.h = null) : l.g && l.g.has(c) && l.g.delete(c)
  }
  wu.prototype.cancel = function () {
    if (((this.i = ko(this)), this.h)) this.h.cancel(), (this.h = null)
    else if (this.g && this.g.size !== 0) {
      for (const l of this.g.values()) l.cancel()
      this.g.clear()
    }
  }
  function ko(l) {
    if (l.h != null) return l.i.concat(l.h.D)
    if (l.g != null && l.g.size !== 0) {
      let c = l.i
      for (const p of l.g.values()) c = c.concat(p.D)
      return c
    }
    return V(l.i)
  }
  function rc(l) {
    if (l.V && typeof l.V == 'function') return l.V()
    if (
      (typeof Map < 'u' && l instanceof Map) ||
      (typeof Set < 'u' && l instanceof Set)
    )
      return Array.from(l.values())
    if (typeof l == 'string') return l.split('')
    if (g(l)) {
      for (var c = [], p = l.length, y = 0; y < p; y++) c.push(l[y])
      return c
    }
    ;(c = []), (p = 0)
    for (y in l) c[p++] = l[y]
    return c
  }
  function Eu(l) {
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
        for (const y in l) c[p++] = y
        return c
      }
    }
  }
  function Oi(l, c) {
    if (l.forEach && typeof l.forEach == 'function') l.forEach(c, void 0)
    else if (g(l) || typeof l == 'string')
      Array.prototype.forEach.call(l, c, void 0)
    else
      for (var p = Eu(l), y = rc(l), z = y.length, b = 0; b < z; b++)
        c.call(void 0, y[b], p && p[b], l)
  }
  var Us = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  )
  function ic(l, c) {
    if (l) {
      l = l.split('&')
      for (var p = 0; p < l.length; p++) {
        var y = l[p].indexOf('='),
          z = null
        if (0 <= y) {
          var b = l[p].substring(0, y)
          z = l[p].substring(y + 1)
        } else b = l[p]
        c(b, z ? decodeURIComponent(z.replace(/\+/g, ' ')) : '')
      }
    }
  }
  function qn(l) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      l instanceof qn)
    ) {
      ;(this.h = l.h),
        Hr(this, l.j),
        (this.o = l.o),
        (this.g = l.g),
        To(this, l.s),
        (this.l = l.l)
      var c = l.i,
        p = new Ni()
      ;(p.i = c.i),
        c.g && ((p.g = new Map(c.g)), (p.h = c.h)),
        Bs(this, p),
        (this.m = l.m)
    } else
      l && (c = String(l).match(Us))
        ? ((this.h = !1),
          Hr(this, c[1] || '', !0),
          (this.o = mn(c[2] || '')),
          (this.g = mn(c[3] || '', !0)),
          To(this, c[4]),
          (this.l = mn(c[5] || '', !0)),
          Bs(this, c[6] || '', !0),
          (this.m = mn(c[7] || '')))
        : ((this.h = !1), (this.i = new Ni(null, this.h)))
  }
  qn.prototype.toString = function () {
    var l = [],
      c = this.j
    c && l.push(Vr(c, Cu, !0), ':')
    var p = this.g
    return (
      (p || c == 'file') &&
        (l.push('//'),
        (c = this.o) && l.push(Vr(c, Cu, !0), '@'),
        l.push(
          encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (p = this.s),
        p != null && l.push(':', String(p))),
      (p = this.l) &&
        (this.g && p.charAt(0) != '/' && l.push('/'),
        l.push(Vr(p, p.charAt(0) == '/' ? Tu : ku, !0))),
      (p = this.i.toString()) && l.push('?', p),
      (p = this.m) && l.push('#', Vr(p, Iu)),
      l.join('')
    )
  }
  function gn(l) {
    return new qn(l)
  }
  function Hr(l, c, p) {
    ;(l.j = p ? mn(c, !0) : c), l.j && (l.j = l.j.replace(/:$/, ''))
  }
  function To(l, c) {
    if (c) {
      if (((c = Number(c)), isNaN(c) || 0 > c))
        throw Error('Bad port number ' + c)
      l.s = c
    } else l.s = null
  }
  function Bs(l, c, p) {
    c instanceof Ni
      ? ((l.i = c), oc(l.i, l.h))
      : (p || (c = Vr(c, Au)), (l.i = new Ni(c, l.h)))
  }
  function Re(l, c, p) {
    l.i.set(c, p)
  }
  function jr(l) {
    return (
      Re(
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
  function mn(l, c) {
    return l
      ? c
        ? decodeURI(l.replace(/%25/g, '%2525'))
        : decodeURIComponent(l)
      : ''
  }
  function Vr(l, c, p) {
    return typeof l == 'string'
      ? ((l = encodeURI(l).replace(c, xu)),
        p && (l = l.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        l)
      : null
  }
  function xu(l) {
    return (
      (l = l.charCodeAt(0)),
      '%' + ((l >> 4) & 15).toString(16) + (l & 15).toString(16)
    )
  }
  var Cu = /[#\/\?@]/g,
    ku = /[#\?:]/g,
    Tu = /[#\?]/g,
    Au = /[#\?@]/g,
    Iu = /#/g
  function Ni(l, c) {
    ;(this.h = this.g = null), (this.i = l || null), (this.j = !!c)
  }
  function Yn(l) {
    l.g ||
      ((l.g = new Map()),
      (l.h = 0),
      l.i &&
        ic(l.i, function (c, p) {
          l.add(decodeURIComponent(c.replace(/\+/g, ' ')), p)
        }))
  }
  ;(e = Ni.prototype),
    (e.add = function (l, c) {
      Yn(this), (this.i = null), (l = Wr(this, l))
      var p = this.g.get(l)
      return p || this.g.set(l, (p = [])), p.push(c), (this.h += 1), this
    })
  function Pu(l, c) {
    Yn(l),
      (c = Wr(l, c)),
      l.g.has(c) && ((l.i = null), (l.h -= l.g.get(c).length), l.g.delete(c))
  }
  function $s(l, c) {
    return Yn(l), (c = Wr(l, c)), l.g.has(c)
  }
  ;(e.forEach = function (l, c) {
    Yn(this),
      this.g.forEach(function (p, y) {
        p.forEach(function (z) {
          l.call(c, z, y, this)
        }, this)
      }, this)
  }),
    (e.na = function () {
      Yn(this)
      const l = Array.from(this.g.values()),
        c = Array.from(this.g.keys()),
        p = []
      for (let y = 0; y < c.length; y++) {
        const z = l[y]
        for (let b = 0; b < z.length; b++) p.push(c[y])
      }
      return p
    }),
    (e.V = function (l) {
      Yn(this)
      let c = []
      if (typeof l == 'string')
        $s(this, l) && (c = c.concat(this.g.get(Wr(this, l))))
      else {
        l = Array.from(this.g.values())
        for (let p = 0; p < l.length; p++) c = c.concat(l[p])
      }
      return c
    }),
    (e.set = function (l, c) {
      return (
        Yn(this),
        (this.i = null),
        (l = Wr(this, l)),
        $s(this, l) && (this.h -= this.g.get(l).length),
        this.g.set(l, [c]),
        (this.h += 1),
        this
      )
    }),
    (e.get = function (l, c) {
      return l ? ((l = this.V(l)), 0 < l.length ? String(l[0]) : c) : c
    })
  function Ru(l, c, p) {
    Pu(l, c),
      0 < p.length && ((l.i = null), l.g.set(Wr(l, c), V(p)), (l.h += p.length))
  }
  e.toString = function () {
    if (this.i) return this.i
    if (!this.g) return ''
    const l = [],
      c = Array.from(this.g.keys())
    for (var p = 0; p < c.length; p++) {
      var y = c[p]
      const b = encodeURIComponent(String(y)),
        ee = this.V(y)
      for (y = 0; y < ee.length; y++) {
        var z = b
        ee[y] !== '' && (z += '=' + encodeURIComponent(String(ee[y]))),
          l.push(z)
      }
    }
    return (this.i = l.join('&'))
  }
  function Wr(l, c) {
    return (c = String(c)), l.j && (c = c.toLowerCase()), c
  }
  function oc(l, c) {
    c &&
      !l.j &&
      (Yn(l),
      (l.i = null),
      l.g.forEach(function (p, y) {
        var z = y.toLowerCase()
        y != z && (Pu(this, y), Ru(this, z, p))
      }, l)),
      (l.j = c)
  }
  function sc(l, c) {
    const p = new Ri()
    if (d.Image) {
      const y = new Image()
      ;(y.onload = B(Qn, p, 'TestLoadImage: loaded', !0, c, y)),
        (y.onerror = B(Qn, p, 'TestLoadImage: error', !1, c, y)),
        (y.onabort = B(Qn, p, 'TestLoadImage: abort', !1, c, y)),
        (y.ontimeout = B(Qn, p, 'TestLoadImage: timeout', !1, c, y)),
        d.setTimeout(function () {
          y.ontimeout && y.ontimeout()
        }, 1e4),
        (y.src = l)
    } else c(!1)
  }
  function bs(l, c) {
    const p = new Ri(),
      y = new AbortController(),
      z = setTimeout(() => {
        y.abort(), Qn(p, 'TestPingServer: timeout', !1, c)
      }, 1e4)
    fetch(l, { signal: y.signal })
      .then((b) => {
        clearTimeout(z),
          b.ok
            ? Qn(p, 'TestPingServer: ok', !0, c)
            : Qn(p, 'TestPingServer: server error', !1, c)
      })
      .catch(() => {
        clearTimeout(z), Qn(p, 'TestPingServer: error', !1, c)
      })
  }
  function Qn(l, c, p, y, z) {
    try {
      z &&
        ((z.onload = null),
        (z.onerror = null),
        (z.onabort = null),
        (z.ontimeout = null)),
        y(p)
    } catch {}
  }
  function lc() {
    this.g = new Qf()
  }
  function uc(l, c, p) {
    const y = p || ''
    try {
      Oi(l, function (z, b) {
        let ee = z
        w(z) && (ee = Ii(z)), c.push(y + b + '=' + encodeURIComponent(ee))
      })
    } catch (z) {
      throw (c.push(y + 'type=' + encodeURIComponent('_badmap')), z)
    }
  }
  function Ao(l) {
    ;(this.l = l.Ub || null), (this.j = l.eb || !1)
  }
  $(Ao, Rs),
    (Ao.prototype.g = function () {
      return new Io(this.l, this.j)
    }),
    (Ao.prototype.i = (function (l) {
      return function () {
        return l
      }
    })({}))
  function Io(l, c) {
    Ge.call(this),
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
  $(Io, Ge),
    (e = Io.prototype),
    (e.open = function (l, c) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.B = l), (this.A = c), (this.readyState = 1), Di(this)
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
          ((this.g = !1), Ce(this)),
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
          Di(this)),
        this.g && ((this.readyState = 3), Di(this), this.g))
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
          De(this)
        } else l.text().then(this.Ra.bind(this), this.ga.bind(this))
    })
  function De(l) {
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
      l.done ? Ce(this) : Di(this), this.readyState == 3 && De(this)
    }
  }),
    (e.Ra = function (l) {
      this.g && ((this.response = this.responseText = l), Ce(this))
    }),
    (e.Qa = function (l) {
      this.g && ((this.response = l), Ce(this))
    }),
    (e.ga = function () {
      this.g && Ce(this)
    })
  function Ce(l) {
    ;(l.readyState = 4), (l.l = null), (l.j = null), (l.v = null), Di(l)
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
  function Di(l) {
    l.onreadystatechange && l.onreadystatechange.call(l)
  }
  Object.defineProperty(Io.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include'
    },
    set: function (l) {
      this.m = l ? 'include' : 'same-origin'
    },
  })
  function Lu(l) {
    let c = ''
    return (
      Z(l, function (p, y) {
        ;(c += y),
          (c += ':'),
          (c += p),
          (c += `\r
`)
      }),
      c
    )
  }
  function Hs(l, c, p) {
    e: {
      for (y in p) {
        var y = !1
        break e
      }
      y = !0
    }
    y ||
      ((p = Lu(p)),
      typeof l == 'string'
        ? p != null && encodeURIComponent(String(p))
        : Re(l, c, p))
  }
  function He(l) {
    Ge.call(this),
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
  $(He, Ge)
  var ac = /^https?$/i,
    fc = ['POST', 'PUT']
  ;(e = He.prototype),
    (e.Ha = function (l) {
      this.J = l
    }),
    (e.ea = function (l, c, p, y) {
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
        (this.g = this.o ? this.o.g() : yo.g()),
        (this.v = this.o ? au(this.o) : au(yo)),
        (this.g.onreadystatechange = E(this.Ea, this))
      try {
        ;(this.B = !0), this.g.open(c, String(l), !0), (this.B = !1)
      } catch (b) {
        js(this, b)
        return
      }
      if (((l = p || ''), (p = new Map(this.headers)), y))
        if (Object.getPrototypeOf(y) === Object.prototype)
          for (var z in y) p.set(z, y[z])
        else if (typeof y.keys == 'function' && typeof y.get == 'function')
          for (const b of y.keys()) p.set(b, y.get(b))
        else throw Error('Unknown input type for opt_headers: ' + String(y))
      ;(y = Array.from(p.keys()).find(
        (b) => b.toLowerCase() == 'content-type'
      )),
        (z = d.FormData && l instanceof d.FormData),
        !(0 <= Array.prototype.indexOf.call(fc, c, void 0)) ||
          y ||
          z ||
          p.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          )
      for (const [b, ee] of p) this.g.setRequestHeader(b, ee)
      this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J)
      try {
        Xn(this), (this.u = !0), this.g.send(l), (this.u = !1)
      } catch (b) {
        js(this, b)
      }
    })
  function js(l, c) {
    ;(l.h = !1),
      l.g && ((l.j = !0), l.g.abort(), (l.j = !1)),
      (l.l = c),
      (l.m = 5),
      Ou(l),
      Kr(l)
  }
  function Ou(l) {
    l.A || ((l.A = !0), qe(l, 'complete'), qe(l, 'error'))
  }
  ;(e.abort = function (l) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = l || 7),
      qe(this, 'complete'),
      qe(this, 'abort'),
      Kr(this))
  }),
    (e.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Kr(this, !0)),
        He.aa.N.call(this)
    }),
    (e.Ea = function () {
      this.s || (this.B || this.u || this.j ? nt(this) : this.bb())
    }),
    (e.bb = function () {
      nt(this)
    })
  function nt(l) {
    if (l.h && typeof f < 'u' && (!l.v[1] || vn(l) != 4 || l.Z() != 2)) {
      if (l.u && vn(l) == 4) ho(l.Ea, 0, l)
      else if ((qe(l, 'readystatechange'), vn(l) == 4)) {
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
            var y
            if ((y = ee === 0)) {
              var z = String(l.D).match(Us)[1] || null
              !z &&
                d.self &&
                d.self.location &&
                (z = d.self.location.protocol.slice(0, -1)),
                (y = !ac.test(z ? z.toLowerCase() : ''))
            }
            p = y
          }
          if (p) qe(l, 'complete'), qe(l, 'success')
          else {
            l.m = 6
            try {
              var b = 2 < vn(l) ? l.g.statusText : ''
            } catch {
              b = ''
            }
            ;(l.l = b + ' [' + l.Z() + ']'), Ou(l)
          }
        } finally {
          Kr(l)
        }
      }
    }
  }
  function Kr(l, c) {
    if (l.g) {
      Xn(l)
      const p = l.g,
        y = l.v[0] ? () => {} : null
      ;(l.g = null), (l.v = null), c || qe(l, 'ready')
      try {
        p.onreadystatechange = y
      } catch {}
    }
  }
  function Xn(l) {
    l.I && (d.clearTimeout(l.I), (l.I = null))
  }
  e.isActive = function () {
    return !!this.g
  }
  function vn(l) {
    return l.g ? l.g.readyState : 0
  }
  ;(e.Z = function () {
    try {
      return 2 < vn(this) ? this.g.status : -1
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
        return l && c.indexOf(l) == 0 && (c = c.substring(l.length)), Ps(c)
      }
    })
  function Po(l) {
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
  function Ht(l) {
    const c = {}
    l = ((l.g && 2 <= vn(l) && l.g.getAllResponseHeaders()) || '').split(`\r
`)
    for (let y = 0; y < l.length; y++) {
      if (k(l[y])) continue
      var p = D(l[y])
      const z = p[0]
      if (((p = p[1]), typeof p != 'string')) continue
      p = p.trim()
      const b = c[z] || []
      ;(c[z] = b), b.push(p)
    }
    x(c, function (y) {
      return y.join(', ')
    })
  }
  ;(e.Ba = function () {
    return this.m
  }),
    (e.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l)
    })
  function Gr(l, c, p) {
    return (p && p.internalChannelParams && p.internalChannelParams[l]) || c
  }
  function Vs(l) {
    ;(this.Aa = 0),
      (this.i = []),
      (this.j = new Ri()),
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
      (this.Va = Gr('failFast', !1, l)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = Gr('baseRetryDelayMs', 5e3, l)),
      (this.cb = Gr('retryDelaySeedMs', 1e4, l)),
      (this.Wa = Gr('forwardChannelMaxRetries', 2, l)),
      (this.wa = Gr('forwardChannelRequestTimeoutMs', 2e4, l)),
      (this.pa = (l && l.xmlHttpFactory) || void 0),
      (this.Xa = (l && l.Tb) || void 0),
      (this.Ca = (l && l.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (l && l.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new wu(l && l.concurrentRequestLimit)),
      (this.Da = new lc()),
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
    (e.connect = function (l, c, p, y) {
      ot(0),
        (this.W = l),
        (this.H = c || {}),
        p && y !== void 0 && ((this.H.OSID = p), (this.H.OAID = y)),
        (this.F = this.X),
        (this.I = Mu(this, null, this.W)),
        Fi(this)
    })
  function Ro(l) {
    if ((Ws(l), l.G == 3)) {
      var c = l.U++,
        p = gn(l.I)
      if (
        (Re(p, 'SID', l.K),
        Re(p, 'RID', c),
        Re(p, 'TYPE', 'terminate'),
        ct(l, p),
        (c = new Kn(l, l.j, c)),
        (c.L = 2),
        (c.v = jr(gn(p))),
        (p = !1),
        d.navigator && d.navigator.sendBeacon)
      )
        try {
          p = d.navigator.sendBeacon(c.v.toString(), '')
        } catch {}
      !p && d.Image && ((new Image().src = c.v), (p = !0)),
        p || ((c.g = Fu(c.j, null)), c.g.ea(c.v)),
        (c.F = Date.now()),
        So(c)
    }
    No(l)
  }
  function Mi(l) {
    l.g && (qr(l), l.g.cancel(), (l.g = null))
  }
  function Ws(l) {
    Mi(l),
      l.u && (d.clearTimeout(l.u), (l.u = null)),
      Le(l),
      l.h.cancel(),
      l.s && (typeof l.s == 'number' && d.clearTimeout(l.s), (l.s = null))
  }
  function Fi(l) {
    if (!_u(l.h) && !l.s) {
      l.s = !0
      var c = l.Ga
      tt || se(), X || (tt(), (X = !0)), oe.add(c, l), (l.B = 0)
    }
  }
  function Lt(l, c) {
    return Su(l.h) >= l.h.j - (l.s ? 1 : 0)
      ? !1
      : l.s
      ? ((l.i = c.D.concat(l.i)), !0)
      : l.G == 1 || l.G == 2 || l.B >= (l.Va ? 0 : l.Wa)
      ? !1
      : ((l.s = cr(E(l.Ga, l, c), Oo(l, l.B))), l.B++, !0)
  }
  e.Ga = function (l) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!l) {
          ;(this.U = Math.floor(1e5 * Math.random())), (l = this.U++)
          const z = new Kn(this, this.j, l)
          let b = this.o
          if (
            (this.S && (b ? ((b = S(b)), I(b, this.S)) : (b = this.S)),
            this.m !== null || this.O || ((z.H = b), (b = null)),
            this.P)
          )
            e: {
              for (var c = 0, p = 0; p < this.i.length; p++) {
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
                if (((c += y), 4096 < c)) {
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
          ;(c = Du(this, z, c)),
            (p = gn(this.I)),
            Re(p, 'RID', l),
            Re(p, 'CVER', 22),
            this.D && Re(p, 'X-HTTP-Session-Id', this.D),
            ct(this, p),
            b &&
              (this.O
                ? (c = 'headers=' + encodeURIComponent(String(Lu(b))) + '&' + c)
                : this.m && Hs(p, this.m, b)),
            Co(this.h, z),
            this.Ua && Re(p, 'TYPE', 'init'),
            this.P
              ? (Re(p, '$req', c),
                Re(p, 'SID', 'null'),
                (z.T = !0),
                Ms(z, p, null))
              : Ms(z, p, c),
            (this.G = 2)
        }
      } else
        this.G == 3 &&
          (l ? Nu(this, l) : this.i.length == 0 || _u(this.h) || Nu(this))
  }
  function Nu(l, c) {
    var p
    c ? (p = c.l) : (p = l.U++)
    const y = gn(l.I)
    Re(y, 'SID', l.K),
      Re(y, 'RID', p),
      Re(y, 'AID', l.T),
      ct(l, y),
      l.m && l.o && Hs(y, l.m, l.o),
      (p = new Kn(l, l.j, p, l.B + 1)),
      l.m === null && (p.H = l.o),
      c && (l.i = c.D.concat(l.i)),
      (c = Du(l, p, 1e3)),
      (p.I = Math.round(0.5 * l.wa) + Math.round(0.5 * l.wa * Math.random())),
      Co(l.h, p),
      Ms(p, y, c)
  }
  function ct(l, c) {
    l.H &&
      Z(l.H, function (p, y) {
        Re(c, y, p)
      }),
      l.l &&
        Oi({}, function (p, y) {
          Re(c, y, p)
        })
  }
  function Du(l, c, p) {
    p = Math.min(l.i.length, p)
    var y = l.l ? E(l.l.Na, l.l, l) : null
    e: {
      var z = l.i
      let b = -1
      for (;;) {
        const ee = ['count=' + p]
        b == -1
          ? 0 < p
            ? ((b = z[0].g), ee.push('ofs=' + b))
            : (b = 0)
          : ee.push('ofs=' + b)
        let ke = !0
        for (let st = 0; st < p; st++) {
          let _e = z[st].g
          const Ae = z[st].map
          if (((_e -= b), 0 > _e)) (b = Math.max(0, z[st].g - 100)), (ke = !1)
          else
            try {
              uc(Ae, ee, 'req' + _e + '_')
            } catch {
              y && y(Ae)
            }
        }
        if (ke) {
          y = ee.join('&')
          break e
        }
      }
    }
    return (l = l.i.splice(0, p)), (c.D = l), y
  }
  function Ks(l) {
    if (!l.g && !l.u) {
      l.Y = 1
      var c = l.Fa
      tt || se(), X || (tt(), (X = !0)), oe.add(c, l), (l.v = 0)
    }
  }
  function yn(l) {
    return l.g || l.u || 3 <= l.v
      ? !1
      : (l.Y++, (l.u = cr(E(l.Fa, l), Oo(l, l.v))), l.v++, !0)
  }
  ;(e.Fa = function () {
    if (
      ((this.u = null),
      Lo(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var l = 2 * this.R
      this.j.info('BP detection timer enabled: ' + l),
        (this.A = cr(E(this.ab, this), l))
    }
  }),
    (e.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        ot(10),
        Mi(this),
        Lo(this))
    })
  function qr(l) {
    l.A != null && (d.clearTimeout(l.A), (l.A = null))
  }
  function Lo(l) {
    ;(l.g = new Kn(l, l.j, 'rpc', l.Y)),
      l.m === null && (l.g.H = l.o),
      (l.g.O = 0)
    var c = gn(l.qa)
    Re(c, 'RID', 'rpc'),
      Re(c, 'SID', l.K),
      Re(c, 'AID', l.T),
      Re(c, 'CI', l.F ? '0' : '1'),
      !l.F && l.ja && Re(c, 'TO', l.ja),
      Re(c, 'TYPE', 'xmlhttp'),
      ct(l, c),
      l.m && l.o && Hs(c, l.m, l.o),
      l.L && (l.g.I = l.L)
    var p = l.g
    ;(l = l.ia),
      (p.L = 1),
      (p.v = jr(gn(c))),
      (p.m = null),
      (p.P = !0),
      Li(p, l)
  }
  e.Za = function () {
    this.C != null && ((this.C = null), Mi(this), yn(this), ot(19))
  }
  function Le(l) {
    l.C != null && (d.clearTimeout(l.C), (l.C = null))
  }
  function Nn(l, c) {
    var p = null
    if (l.g == c) {
      Le(l), qr(l), (l.g = null)
      var y = 2
    } else if (xo(l.h, c)) (p = c.D), zs(l.h, c), (y = 1)
    else return
    if (l.G != 0) {
      if (c.o)
        if (y == 1) {
          ;(p = c.m ? c.m.length : 0), (c = Date.now() - c.F)
          var z = l.B
          ;(y = vo()), qe(y, new pu(y, p)), Fi(l)
        } else Ks(l)
      else if (
        ((z = c.s),
        z == 3 ||
          (z == 0 && 0 < c.X) ||
          !((y == 1 && Lt(l, c)) || (y == 2 && yn(l))))
      )
        switch ((p && 0 < p.length && ((c = l.h), (c.i = c.i.concat(p))), z)) {
          case 1:
            hr(l, 5)
            break
          case 4:
            hr(l, 10)
            break
          case 3:
            hr(l, 6)
            break
          default:
            hr(l, 2)
        }
    }
  }
  function Oo(l, c) {
    let p = l.Ta + Math.floor(Math.random() * l.cb)
    return l.isActive() || (p *= 2), p * c
  }
  function hr(l, c) {
    if ((l.j.info('Error code ' + c), c == 2)) {
      var p = E(l.fb, l),
        y = l.Xa
      const z = !y
      ;(y = new qn(y || '//www.google.com/images/cleardot.gif')),
        (d.location && d.location.protocol == 'http') || Hr(y, 'https'),
        jr(y),
        z ? sc(y.toString(), p) : bs(y.toString(), p)
    } else ot(2)
    ;(l.G = 0), l.l && l.l.sa(c), No(l), Ws(l)
  }
  e.fb = function (l) {
    l
      ? (this.j.info('Successfully pinged google.com'), ot(2))
      : (this.j.info('Failed to ping google.com'), ot(1))
  }
  function No(l) {
    if (((l.G = 0), (l.ka = []), l.l)) {
      const c = ko(l.h)
      ;(c.length != 0 || l.i.length != 0) &&
        (q(l.ka, c),
        q(l.ka, l.i),
        (l.h.i.length = 0),
        V(l.i),
        (l.i.length = 0)),
        l.l.ra()
    }
  }
  function Mu(l, c, p) {
    var y = p instanceof qn ? gn(p) : new qn(p)
    if (y.g != '') c && (y.g = c + '.' + y.g), To(y, y.s)
    else {
      var z = d.location
      ;(y = z.protocol),
        (c = c ? c + '.' + z.hostname : z.hostname),
        (z = +z.port)
      var b = new qn(null)
      y && Hr(b, y), c && (b.g = c), z && To(b, z), p && (b.l = p), (y = b)
    }
    return (
      (p = l.D),
      (c = l.ya),
      p && c && Re(y, p, c),
      Re(y, 'VER', l.la),
      ct(l, y),
      y
    )
  }
  function Fu(l, c, p) {
    if (c && !l.J)
      throw Error("Can't create secondary domain capable XhrIo object.")
    return (
      (c = l.Ca && !l.pa ? new He(new Ao({ eb: p })) : new He(l.pa)),
      c.Ha(l.J),
      c
    )
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this)
  }
  function zu() {}
  ;(e = zu.prototype),
    (e.ua = function () {}),
    (e.ta = function () {}),
    (e.sa = function () {}),
    (e.ra = function () {}),
    (e.isActive = function () {
      return !0
    }),
    (e.Na = function () {})
  function Ot(l, c) {
    Ge.call(this),
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
      (this.j = new Yr(this))
  }
  $(Ot, Ge),
    (Ot.prototype.m = function () {
      ;(this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }),
    (Ot.prototype.close = function () {
      Ro(this.g)
    }),
    (Ot.prototype.o = function (l) {
      var c = this.g
      if (typeof l == 'string') {
        var p = {}
        ;(p.__data__ = l), (l = p)
      } else this.u && ((p = {}), (p.__data__ = Ii(l)), (l = p))
      c.i.push(new nc(c.Ya++, l)), c.G == 3 && Fi(c)
    }),
    (Ot.prototype.N = function () {
      ;(this.g.l = null),
        delete this.j,
        Ro(this.g),
        delete this.g,
        Ot.aa.N.call(this)
    })
  function zi(l) {
    Ls.call(this),
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
  $(zi, Ls)
  function dr() {
    Os.call(this), (this.status = 1)
  }
  $(dr, Os)
  function Yr(l) {
    this.g = l
  }
  $(Yr, zu),
    (Yr.prototype.ua = function () {
      qe(this.g, 'a')
    }),
    (Yr.prototype.ta = function (l) {
      qe(this.g, new zi(l))
    }),
    (Yr.prototype.sa = function (l) {
      qe(this.g, new dr())
    }),
    (Yr.prototype.ra = function () {
      qe(this.g, 'b')
    }),
    (Ot.prototype.send = Ot.prototype.o),
    (Ot.prototype.open = Ot.prototype.m),
    (Ot.prototype.close = Ot.prototype.close),
    (Ns.NO_ERROR = 0),
    (Ns.TIMEOUT = 8),
    (Ns.HTTP_ERROR = 6),
    (tc.COMPLETE = 'complete'),
    (fu.EventType = Ur),
    (Ur.OPEN = 'a'),
    (Ur.CLOSE = 'b'),
    (Ur.ERROR = 'c'),
    (Ur.MESSAGE = 'd'),
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
  typeof Ua < 'u'
    ? Ua
    : typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : {}
)
const rv = '@firebase/firestore'
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
 */ class zt {
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
;(zt.UNAUTHENTICATED = new zt(null)),
  (zt.GOOGLE_CREDENTIALS = new zt('google-credentials-uid')),
  (zt.FIRST_PARTY = new zt('first-party-uid')),
  (zt.MOCK_USER = new zt('mock-user'))
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
 */ let ou = '11.0.0'
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
 */ const Ss = new Wy('@firebase/firestore')
function Hn(e, ...t) {
  if (Ss.logLevel <= Me.DEBUG) {
    const n = t.map(Fp)
    Ss.debug(`Firestore (${ou}): ${e}`, ...n)
  }
}
function Jy(e, ...t) {
  if (Ss.logLevel <= Me.ERROR) {
    const n = t.map(Fp)
    Ss.error(`Firestore (${ou}): ${e}`, ...n)
  }
}
function HA(e, ...t) {
  if (Ss.logLevel <= Me.WARN) {
    const n = t.map(Fp)
    Ss.warn(`Firestore (${ou}): ${e}`, ...n)
  }
}
function Fp(e) {
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
 */ function zp(e = 'Unexpected state') {
  const t = `FIRESTORE (${ou}) INTERNAL ASSERTION FAILED: ` + e
  throw (Jy(t), new Error(t))
}
function Ll(e, t) {
  e || zp()
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
 */ const Yt = {
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
class Qt extends ks {
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
 */ class Ol {
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
 */ class Zy {
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
    t.enqueueRetryable(() => n(zt.UNAUTHENTICATED))
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
      (this.currentUser = zt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null)
  }
  start(t, n) {
    Ll(this.o === void 0)
    let i = this.i
    const s = (g) => (this.i !== i ? ((i = this.i), n(g)) : Promise.resolve())
    let u = new Ol()
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        u.resolve(),
        (u = new Ol()),
        t.enqueueRetryable(() => s(this.currentUser))
    }
    const f = () => {
        const g = u
        t.enqueueRetryable(async () => {
          await g.promise, await s(this.currentUser)
        })
      },
      d = (g) => {
        Hn('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = g),
          this.o && (this.auth.addAuthTokenListener(this.o), f())
      }
    this.t.onInit((g) => d(g)),
      setTimeout(() => {
        if (!this.auth) {
          const g = this.t.getImmediate({ optional: !0 })
          g
            ? d(g)
            : (Hn('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              u.resolve(),
              (u = new Ol()))
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
                ? (Hn(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : i
                ? (Ll(typeof i.accessToken == 'string'),
                  new Zy(i.accessToken, this.currentUser))
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
    return Ll(t === null || typeof t == 'string'), new zt(t)
  }
}
class KA {
  constructor(t, n, i) {
    ;(this.l = t),
      (this.h = n),
      (this.P = i),
      (this.type = 'FirstParty'),
      (this.user = zt.FIRST_PARTY),
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
    t.enqueueRetryable(() => n(zt.FIRST_PARTY))
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
    Ll(this.o === void 0)
    const i = (u) => {
      u.error != null &&
        Hn(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`
        )
      const f = u.token !== this.R
      return (
        (this.R = u.token),
        Hn(
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
      Hn('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = u),
        this.o && this.appCheck.addTokenListener(this.o)
    }
    this.A.onInit((u) => s(u)),
      setTimeout(() => {
        if (!this.appCheck) {
          const u = this.A.getImmediate({ optional: !0 })
          u
            ? s(u)
            : Hn('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected')
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
                ? (Ll(typeof n.token == 'string'),
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
function QA(e) {
  return e.name === 'IndexedDbTransactionError'
}
class Af {
  constructor(t, n) {
    ;(this.projectId = t), (this.database = n || '(default)')
  }
  static empty() {
    return new Af('', '')
  }
  get isDefaultDatabase() {
    return this.database === '(default)'
  }
  isEqual(t) {
    return (
      t instanceof Af &&
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
 */ var iv, Ee
;((Ee = iv || (iv = {}))[(Ee.OK = 0)] = 'OK'),
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
function Fh() {
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
 */ class XA {
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
      Hn(
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
 */ class Up {
  constructor(t, n, i, s, u) {
    ;(this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = i),
      (this.op = s),
      (this.removalCallback = u),
      (this.deferred = new Ol()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((f) => {})
  }
  get promise() {
    return this.deferred.promise
  }
  static createAndSchedule(t, n, i, s, u) {
    const f = Date.now() + i,
      d = new Up(t, n, f, s, u)
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
        new Qt(Yt.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))
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
var ov, sv
;((sv = ov || (ov = {})).ea = 'default'), (sv.Cache = 'cache')
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
 */ const lv = new Map()
function ZA(e, t, n, i) {
  if (t === !0 && i === !0)
    throw new Qt(Yt.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`)
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
  return typeof e == 'function' ? 'a function' : zp()
}
function tI(e, t) {
  if (('_delegate' in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new Qt(
        Yt.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      )
    {
      const n = eI(e)
      throw new Qt(
        Yt.INVALID_ARGUMENT,
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
 */ class uv {
  constructor(t) {
    var n, i
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new Qt(
          Yt.INVALID_ARGUMENT,
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
          Yt.INVALID_ARGUMENT,
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
              Yt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`
            )
          if (u.timeoutSeconds < 5)
            throw new Qt(
              Yt.INVALID_ARGUMENT,
              `invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`
            )
          if (u.timeoutSeconds > 30)
            throw new Qt(
              Yt.INVALID_ARGUMENT,
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
class ew {
  constructor(t, n, i, s) {
    ;(this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = i),
      (this._app = s),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new uv({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = 'notTerminated')
  }
  get app() {
    if (!this._app)
      throw new Qt(
        Yt.FAILED_PRECONDITION,
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
        Yt.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      )
    ;(this._settings = new uv(t)),
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
                Yt.INVALID_ARGUMENT,
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
        const i = lv.get(n)
        i &&
          (Hn('ComponentProvider', 'Removing Datastore'),
          lv.delete(n),
          i.terminate())
      })(this),
      Promise.resolve()
    )
  }
}
function nI(e, t, n, i = {}) {
  var s
  const u = (e = tI(e, ew))._getSettings(),
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
      (d = i.mockUserToken), (g = zt.MOCK_USER)
    else {
      d = TT(
        i.mockUserToken,
        (s = e._app) === null || s === void 0 ? void 0 : s.options.projectId
      )
      const w = i.mockUserToken.sub || i.mockUserToken.user_id
      if (!w)
        throw new Qt(
          Yt.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        )
      g = new zt(w)
    }
    e._authCredentials = new VA(new Zy(d, g))
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
 */ class av {
  constructor(t = Promise.resolve()) {
    ;(this.Pu = []),
      (this.Iu = !1),
      (this.Tu = []),
      (this.Eu = null),
      (this.du = !1),
      (this.Au = !1),
      (this.Ru = []),
      (this.t_ = new XA(this, 'async_queue_retry')),
      (this.Vu = () => {
        const i = Fh()
        i &&
          Hn('AsyncQueue', 'Visibility state changed to ' + i.visibilityState),
          this.t_.jo()
      }),
      (this.mu = t)
    const n = Fh()
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
      const n = Fh()
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Vu)
    }
  }
  enqueue(t) {
    if ((this.fu(), this.Iu)) return new Promise(() => {})
    const n = new Ol()
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
        if (!QA(t)) throw t
        Hn('AsyncQueue', 'Operation failed with retryable error: ' + t)
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
            throw (Jy('INTERNAL UNHANDLED ERROR: ', s), i)
          })
          .then((i) => ((this.du = !1), i))
      )
    )
    return (this.mu = n), n
  }
  enqueueAfterDelay(t, n, i) {
    this.fu(), this.Ru.indexOf(t) > -1 && (n = 0)
    const s = Up.createAndSchedule(this, t, n, i, (u) => this.yu(u))
    return this.Tu.push(s), s
  }
  fu() {
    this.Eu && zp()
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
class rI extends ew {
  constructor(t, n, i, s) {
    super(t, n, i, s),
      (this.type = 'firestore'),
      (this._queue = new av()),
      (this._persistenceKey = s?.name || '[DEFAULT]')
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate()
      ;(this._queue = new av(t)), (this._firestoreClient = void 0), await t
    }
  }
}
function iI(e, t) {
  const n = typeof e == 'object' ? e : OA(),
    i = typeof e == 'string' ? e : t || '(default)',
    s = IA(n, 'firestore').getImmediate({ identifier: i })
  if (!s._initialized) {
    const u = CT('firestore')
    u && nI(s, ...u)
  }
  return s
}
;(function (t, n = !0) {
  ;(function (s) {
    ou = s
  })(LA),
    Tf(
      new Xl(
        'firestore',
        (i, { instanceIdentifier: s, options: u }) => {
          const f = i.getProvider('app').getImmediate(),
            d = new rI(
              new WA(i.getProvider('auth-internal')),
              new YA(i.getProvider('app-check-internal')),
              (function (w, P) {
                if (
                  !Object.prototype.hasOwnProperty.apply(w.options, [
                    'projectId',
                  ])
                )
                  throw new Qt(
                    Yt.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  )
                return new Af(w.options.projectId, P)
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
    ds(rv, '4.7.4', t),
    ds(rv, '4.7.4', 'esm2017')
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
 */ ds(oI, sI, 'app')
const lI = {
    apiKey: 'AIzaSyDVlRzfLEHgZDHF8brQyVqoQvIvgIkrcnA',
    authDomain: 'visamaz-69bdf.firebaseapp.com',
    projectId: 'visamaz-69bdf',
    storageBucket: 'visamaz-69bdf.firebasestorage.app',
    messagingSenderId: '521376424647',
    appId: '1:521376424647:web:d74bf4909c2c2e096b14e2',
  },
  uI = qy(lI)
iI(uI)
var If = { exports: {} }
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ If.exports
;(function (e, t) {
  ;(function () {
    var n,
      i = '4.17.21',
      s = 200,
      u = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      f = 'Expected a function',
      d = 'Invalid `variable` option passed into `_.template`',
      g = '__lodash_hash_undefined__',
      w = 500,
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
      Q = 32,
      Z = 64,
      x = 128,
      S = 256,
      T = 512,
      I = 30,
      D = '...',
      U = 800,
      A = 16,
      Xe = 1,
      It = 2,
      hn = 3,
      tt = 1 / 0,
      X = 9007199254740991,
      oe = 17976931348623157e292,
      se = NaN,
      me = 4294967295,
      Pe = me - 1,
      be = me >>> 1,
      On = [
        ['ary', x],
        ['bind', q],
        ['bindKey', R],
        ['curry', N],
        ['curryRight', j],
        ['flip', T],
        ['partial', Q],
        ['partialRight', Z],
        ['rearg', S],
      ],
      wt = '[object Arguments]',
      bt = '[object Array]',
      dn = '[object AsyncFunction]',
      Ti = '[object Boolean]',
      Ai = '[object Date]',
      ao = '[object DOMException]',
      lr = '[object Error]',
      Dr = '[object Function]',
      fo = '[object GeneratorFunction]',
      Pt = '[object Map]',
      ur = '[object Number]',
      su = '[object Null]',
      pn = '[object Object]',
      lu = '[object Promise]',
      uu = '[object Proxy]',
      Mr = '[object RegExp]',
      Rt = '[object Set]',
      Fr = '[object String]',
      co = '[object Symbol]',
      Ts = '[object Undefined]',
      ar = '[object WeakMap]',
      As = '[object WeakSet]',
      Ge = '[object ArrayBuffer]',
      qe = '[object DataView]',
      zr = '[object Float32Array]',
      ho = '[object Float64Array]',
      po = '[object Int8Array]',
      Is = '[object Int16Array]',
      fr = '[object Int32Array]',
      go = '[object Uint8Array]',
      mo = '[object Uint8ClampedArray]',
      Ii = '[object Uint16Array]',
      Ps = '[object Uint32Array]',
      Qf = /\b__p \+= '';/g,
      Rs = /\b(__p \+=) '' \+/g,
      au = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      fu = /&(?:amp|lt|gt|quot|#39);/g,
      Ur = /[&<>"']/g,
      Ls = RegExp(fu.source),
      Os = RegExp(Ur.source),
      Br = /<%-([\s\S]+?)%>/g,
      cu = /<%([\s\S]+?)%>/g,
      vo = /<%=([\s\S]+?)%>/g,
      hu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Pi = /^\w*$/,
      du =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ot = /[\\^$.*+?()[\]{}|]/g,
      pu = RegExp(ot.source),
      cr = /^\s+/,
      Ri = /\s/,
      Xf = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Jf = /\{\n\/\* \[wrapped with (.+)\] \*/,
      $r = /,? & /,
      Zf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ec = /[()=,{}\[\]\/\s]/,
      Ns = /\\(\\)?/g,
      tc = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      yo = /\w*$/,
      wo = /^[-+]0x[0-9a-f]+$/i,
      Kn = /^0b[01]+$/i,
      gu = /^\[object .+?Constructor\]$/,
      mu = /^0o[0-7]+$/i,
      Ds = /^(?:0|[1-9]\d*)$/,
      Ms = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Li = /($^)/,
      vu = /['\n\r\u2028\u2029\\]/g,
      _o = '\\ud800-\\udfff',
      So = '\\u0300-\\u036f',
      yu = '\\ufe20-\\ufe2f',
      Fs = '\\u20d0-\\u20ff',
      br = So + yu + Fs,
      Gn = '\\u2700-\\u27bf',
      Eo = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      nc = '\\xac\\xb1\\xd7\\xf7',
      wu = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      _u = '\\u2000-\\u206f',
      Su =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      xo = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      Co = '\\ufe0e\\ufe0f',
      zs = nc + wu + _u + Su,
      ko = "['’]",
      rc = '[' + _o + ']',
      Eu = '[' + zs + ']',
      Oi = '[' + br + ']',
      Us = '\\d+',
      ic = '[' + Gn + ']',
      qn = '[' + Eo + ']',
      gn = '[^' + _o + zs + Us + Gn + Eo + xo + ']',
      Hr = '\\ud83c[\\udffb-\\udfff]',
      To = '(?:' + Oi + '|' + Hr + ')',
      Bs = '[^' + _o + ']',
      Re = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      jr = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      mn = '[' + xo + ']',
      Vr = '\\u200d',
      xu = '(?:' + qn + '|' + gn + ')',
      Cu = '(?:' + mn + '|' + gn + ')',
      ku = '(?:' + ko + '(?:d|ll|m|re|s|t|ve))?',
      Tu = '(?:' + ko + '(?:D|LL|M|RE|S|T|VE))?',
      Au = To + '?',
      Iu = '[' + Co + ']?',
      Ni = '(?:' + Vr + '(?:' + [Bs, Re, jr].join('|') + ')' + Iu + Au + ')*',
      Yn = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      Pu = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      $s = Iu + Au + Ni,
      Ru = '(?:' + [ic, Re, jr].join('|') + ')' + $s,
      Wr = '(?:' + [Bs + Oi + '?', Oi, Re, jr, rc].join('|') + ')',
      oc = RegExp(ko, 'g'),
      sc = RegExp(Oi, 'g'),
      bs = RegExp(Hr + '(?=' + Hr + ')|' + Wr + $s, 'g'),
      Qn = RegExp(
        [
          mn + '?' + qn + '+' + ku + '(?=' + [Eu, mn, '$'].join('|') + ')',
          Cu + '+' + Tu + '(?=' + [Eu, mn + xu, '$'].join('|') + ')',
          mn + '?' + xu + '+' + ku,
          mn + '+' + Tu,
          Pu,
          Yn,
          Us,
          Ru,
        ].join('|'),
        'g'
      ),
      lc = RegExp('[' + Vr + _o + br + Co + ']'),
      uc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Ao = [
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
      Io = -1,
      De = {}
    ;(De[zr] =
      De[ho] =
      De[po] =
      De[Is] =
      De[fr] =
      De[go] =
      De[mo] =
      De[Ii] =
      De[Ps] =
        !0),
      (De[wt] =
        De[bt] =
        De[Ge] =
        De[Ti] =
        De[qe] =
        De[Ai] =
        De[lr] =
        De[Dr] =
        De[Pt] =
        De[ur] =
        De[pn] =
        De[Mr] =
        De[Rt] =
        De[Fr] =
        De[ar] =
          !1)
    var Ce = {}
    ;(Ce[wt] =
      Ce[bt] =
      Ce[Ge] =
      Ce[qe] =
      Ce[Ti] =
      Ce[Ai] =
      Ce[zr] =
      Ce[ho] =
      Ce[po] =
      Ce[Is] =
      Ce[fr] =
      Ce[Pt] =
      Ce[ur] =
      Ce[pn] =
      Ce[Mr] =
      Ce[Rt] =
      Ce[Fr] =
      Ce[co] =
      Ce[go] =
      Ce[mo] =
      Ce[Ii] =
      Ce[Ps] =
        !0),
      (Ce[lr] = Ce[Dr] = Ce[ar] = !1)
    var Di = {
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
      Lu = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      Hs = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
      He = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      ac = parseFloat,
      fc = parseInt,
      js = typeof ul == 'object' && ul && ul.Object === Object && ul,
      Ou = typeof self == 'object' && self && self.Object === Object && self,
      nt = js || Ou || Function('return this')(),
      Kr = t && !t.nodeType && t,
      Xn = Kr && !0 && e && !e.nodeType && e,
      vn = Xn && Xn.exports === Kr,
      Po = vn && js.process,
      Ht = (function () {
        try {
          var M = Xn && Xn.require && Xn.require('util').types
          return M || (Po && Po.binding && Po.binding('util'))
        } catch {}
      })(),
      Gr = Ht && Ht.isArrayBuffer,
      Vs = Ht && Ht.isDate,
      Ro = Ht && Ht.isMap,
      Mi = Ht && Ht.isRegExp,
      Ws = Ht && Ht.isSet,
      Fi = Ht && Ht.isTypedArray
    function Lt(M, W, H) {
      switch (H.length) {
        case 0:
          return M.call(W)
        case 1:
          return M.call(W, H[0])
        case 2:
          return M.call(W, H[0], H[1])
        case 3:
          return M.call(W, H[0], H[1], H[2])
      }
      return M.apply(W, H)
    }
    function Nu(M, W, H, ne) {
      for (var fe = -1, Te = M == null ? 0 : M.length; ++fe < Te; ) {
        var lt = M[fe]
        W(ne, lt, H(lt), M)
      }
      return ne
    }
    function ct(M, W) {
      for (
        var H = -1, ne = M == null ? 0 : M.length;
        ++H < ne && W(M[H], H, M) !== !1;

      );
      return M
    }
    function Du(M, W) {
      for (var H = M == null ? 0 : M.length; H-- && W(M[H], H, M) !== !1; );
      return M
    }
    function Ks(M, W) {
      for (var H = -1, ne = M == null ? 0 : M.length; ++H < ne; )
        if (!W(M[H], H, M)) return !1
      return !0
    }
    function yn(M, W) {
      for (
        var H = -1, ne = M == null ? 0 : M.length, fe = 0, Te = [];
        ++H < ne;

      ) {
        var lt = M[H]
        W(lt, H, M) && (Te[fe++] = lt)
      }
      return Te
    }
    function qr(M, W) {
      var H = M == null ? 0 : M.length
      return !!H && dr(M, W, 0) > -1
    }
    function Lo(M, W, H) {
      for (var ne = -1, fe = M == null ? 0 : M.length; ++ne < fe; )
        if (H(W, M[ne])) return !0
      return !1
    }
    function Le(M, W) {
      for (
        var H = -1, ne = M == null ? 0 : M.length, fe = Array(ne);
        ++H < ne;

      )
        fe[H] = W(M[H], H, M)
      return fe
    }
    function Nn(M, W) {
      for (var H = -1, ne = W.length, fe = M.length; ++H < ne; )
        M[fe + H] = W[H]
      return M
    }
    function Oo(M, W, H, ne) {
      var fe = -1,
        Te = M == null ? 0 : M.length
      for (ne && Te && (H = M[++fe]); ++fe < Te; ) H = W(H, M[fe], fe, M)
      return H
    }
    function hr(M, W, H, ne) {
      var fe = M == null ? 0 : M.length
      for (ne && fe && (H = M[--fe]); fe--; ) H = W(H, M[fe], fe, M)
      return H
    }
    function No(M, W) {
      for (var H = -1, ne = M == null ? 0 : M.length; ++H < ne; )
        if (W(M[H], H, M)) return !0
      return !1
    }
    var Mu = p('length')
    function Fu(M) {
      return M.split('')
    }
    function zu(M) {
      return M.match(Zf) || []
    }
    function Ot(M, W, H) {
      var ne
      return (
        H(M, function (fe, Te, lt) {
          if (W(fe, Te, lt)) return (ne = Te), !1
        }),
        ne
      )
    }
    function zi(M, W, H, ne) {
      for (var fe = M.length, Te = H + (ne ? 1 : -1); ne ? Te-- : ++Te < fe; )
        if (W(M[Te], Te, M)) return Te
      return -1
    }
    function dr(M, W, H) {
      return W === W ? fw(M, W, H) : zi(M, l, H)
    }
    function Yr(M, W, H, ne) {
      for (var fe = H - 1, Te = M.length; ++fe < Te; )
        if (ne(M[fe], W)) return fe
      return -1
    }
    function l(M) {
      return M !== M
    }
    function c(M, W) {
      var H = M == null ? 0 : M.length
      return H ? ee(M, W) / H : se
    }
    function p(M) {
      return function (W) {
        return W == null ? n : W[M]
      }
    }
    function y(M) {
      return function (W) {
        return M == null ? n : M[W]
      }
    }
    function z(M, W, H, ne, fe) {
      return (
        fe(M, function (Te, lt, Fe) {
          H = ne ? ((ne = !1), Te) : W(H, Te, lt, Fe)
        }),
        H
      )
    }
    function b(M, W) {
      var H = M.length
      for (M.sort(W); H--; ) M[H] = M[H].value
      return M
    }
    function ee(M, W) {
      for (var H, ne = -1, fe = M.length; ++ne < fe; ) {
        var Te = W(M[ne])
        Te !== n && (H = H === n ? Te : H + Te)
      }
      return H
    }
    function ke(M, W) {
      for (var H = -1, ne = Array(M); ++H < M; ) ne[H] = W(H)
      return ne
    }
    function st(M, W) {
      return Le(W, function (H) {
        return [H, M[H]]
      })
    }
    function _e(M) {
      return M && M.slice(0, $p(M) + 1).replace(cr, '')
    }
    function Ae(M) {
      return function (W) {
        return M(W)
      }
    }
    function rt(M, W) {
      return Le(W, function (H) {
        return M[H]
      })
    }
    function wn(M, W) {
      return M.has(W)
    }
    function jt(M, W) {
      for (var H = -1, ne = M.length; ++H < ne && dr(W, M[H], 0) > -1; );
      return H
    }
    function Ui(M, W) {
      for (var H = M.length; H-- && dr(W, M[H], 0) > -1; );
      return H
    }
    function Gs(M, W) {
      for (var H = M.length, ne = 0; H--; ) M[H] === W && ++ne
      return ne
    }
    var rw = y(Di),
      iw = y(Lu)
    function ow(M) {
      return '\\' + He[M]
    }
    function sw(M, W) {
      return M == null ? n : M[W]
    }
    function Do(M) {
      return lc.test(M)
    }
    function lw(M) {
      return uc.test(M)
    }
    function uw(M) {
      for (var W, H = []; !(W = M.next()).done; ) H.push(W.value)
      return H
    }
    function cc(M) {
      var W = -1,
        H = Array(M.size)
      return (
        M.forEach(function (ne, fe) {
          H[++W] = [fe, ne]
        }),
        H
      )
    }
    function Bp(M, W) {
      return function (H) {
        return M(W(H))
      }
    }
    function Qr(M, W) {
      for (var H = -1, ne = M.length, fe = 0, Te = []; ++H < ne; ) {
        var lt = M[H]
        ;(lt === W || lt === P) && ((M[H] = P), (Te[fe++] = H))
      }
      return Te
    }
    function Uu(M) {
      var W = -1,
        H = Array(M.size)
      return (
        M.forEach(function (ne) {
          H[++W] = ne
        }),
        H
      )
    }
    function aw(M) {
      var W = -1,
        H = Array(M.size)
      return (
        M.forEach(function (ne) {
          H[++W] = [ne, ne]
        }),
        H
      )
    }
    function fw(M, W, H) {
      for (var ne = H - 1, fe = M.length; ++ne < fe; )
        if (M[ne] === W) return ne
      return -1
    }
    function cw(M, W, H) {
      for (var ne = H + 1; ne--; ) if (M[ne] === W) return ne
      return ne
    }
    function Mo(M) {
      return Do(M) ? dw(M) : Mu(M)
    }
    function Dn(M) {
      return Do(M) ? pw(M) : Fu(M)
    }
    function $p(M) {
      for (var W = M.length; W-- && Ri.test(M.charAt(W)); );
      return W
    }
    var hw = y(Hs)
    function dw(M) {
      for (var W = (bs.lastIndex = 0); bs.test(M); ) ++W
      return W
    }
    function pw(M) {
      return M.match(bs) || []
    }
    function gw(M) {
      return M.match(Qn) || []
    }
    var mw = function M(W) {
        W = W == null ? nt : Fo.defaults(nt.Object(), W, Fo.pick(nt, Ao))
        var H = W.Array,
          ne = W.Date,
          fe = W.Error,
          Te = W.Function,
          lt = W.Math,
          Fe = W.Object,
          hc = W.RegExp,
          vw = W.String,
          _n = W.TypeError,
          Bu = H.prototype,
          yw = Te.prototype,
          zo = Fe.prototype,
          $u = W['__core-js_shared__'],
          bu = yw.toString,
          Oe = zo.hasOwnProperty,
          ww = 0,
          bp = (function () {
            var r = /[^.]+$/.exec(($u && $u.keys && $u.keys.IE_PROTO) || '')
            return r ? 'Symbol(src)_1.' + r : ''
          })(),
          Hu = zo.toString,
          _w = bu.call(Fe),
          Sw = nt._,
          Ew = hc(
            '^' +
              bu
                .call(Oe)
                .replace(ot, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          ju = vn ? W.Buffer : n,
          Xr = W.Symbol,
          Vu = W.Uint8Array,
          Hp = ju ? ju.allocUnsafe : n,
          Wu = Bp(Fe.getPrototypeOf, Fe),
          jp = Fe.create,
          Vp = zo.propertyIsEnumerable,
          Ku = Bu.splice,
          Wp = Xr ? Xr.isConcatSpreadable : n,
          qs = Xr ? Xr.iterator : n,
          Bi = Xr ? Xr.toStringTag : n,
          Gu = (function () {
            try {
              var r = Vi(Fe, 'defineProperty')
              return r({}, '', {}), r
            } catch {}
          })(),
          xw = W.clearTimeout !== nt.clearTimeout && W.clearTimeout,
          Cw = ne && ne.now !== nt.Date.now && ne.now,
          kw = W.setTimeout !== nt.setTimeout && W.setTimeout,
          qu = lt.ceil,
          Yu = lt.floor,
          dc = Fe.getOwnPropertySymbols,
          Tw = ju ? ju.isBuffer : n,
          Kp = W.isFinite,
          Aw = Bu.join,
          Iw = Bp(Fe.keys, Fe),
          ut = lt.max,
          _t = lt.min,
          Pw = ne.now,
          Rw = W.parseInt,
          Gp = lt.random,
          Lw = Bu.reverse,
          pc = Vi(W, 'DataView'),
          Ys = Vi(W, 'Map'),
          gc = Vi(W, 'Promise'),
          Uo = Vi(W, 'Set'),
          Qs = Vi(W, 'WeakMap'),
          Xs = Vi(Fe, 'create'),
          Qu = Qs && new Qs(),
          Bo = {},
          Ow = Wi(pc),
          Nw = Wi(Ys),
          Dw = Wi(gc),
          Mw = Wi(Uo),
          Fw = Wi(Qs),
          Xu = Xr ? Xr.prototype : n,
          Js = Xu ? Xu.valueOf : n,
          qp = Xu ? Xu.toString : n
        function v(r) {
          if (Ye(r) && !he(r) && !(r instanceof ye)) {
            if (r instanceof Sn) return r
            if (Oe.call(r, '__wrapped__')) return Yg(r)
          }
          return new Sn(r)
        }
        var $o = (function () {
          function r() {}
          return function (o) {
            if (!je(o)) return {}
            if (jp) return jp(o)
            r.prototype = o
            var a = new r()
            return (r.prototype = n), a
          }
        })()
        function Ju() {}
        function Sn(r, o) {
          ;(this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!o),
            (this.__index__ = 0),
            (this.__values__ = n)
        }
        ;(v.templateSettings = {
          escape: Br,
          evaluate: cu,
          interpolate: vo,
          variable: '',
          imports: { _: v },
        }),
          (v.prototype = Ju.prototype),
          (v.prototype.constructor = v),
          (Sn.prototype = $o(Ju.prototype)),
          (Sn.prototype.constructor = Sn)
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
            (r.__actions__ = Vt(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = Vt(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = Vt(this.__views__)),
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
            _ = X_(0, m, this.__views__),
            C = _.start,
            L = _.end,
            F = L - C,
            K = h ? L : C - 1,
            G = this.__iteratees__,
            Y = G.length,
            te = 0,
            ie = _t(F, this.__takeCount__)
          if (!a || (!h && m == F && ie == F)) return yg(r, this.__actions__)
          var ue = []
          e: for (; F-- && te < ie; ) {
            K += o
            for (var pe = -1, ae = r[K]; ++pe < Y; ) {
              var ve = G[pe],
                Se = ve.iteratee,
                rn = ve.type,
                Mt = Se(ae)
              if (rn == It) ae = Mt
              else if (!Mt) {
                if (rn == Xe) continue e
                break e
              }
            }
            ue[te++] = ae
          }
          return ue
        }
        ;(ye.prototype = $o(Ju.prototype)), (ye.prototype.constructor = ye)
        function $i(r) {
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
          return Oe.call(o, r) ? o[r] : n
        }
        function jw(r) {
          var o = this.__data__
          return Xs ? o[r] !== n : Oe.call(o, r)
        }
        function Vw(r, o) {
          var a = this.__data__
          return (
            (this.size += this.has(r) ? 0 : 1),
            (a[r] = Xs && o === n ? g : o),
            this
          )
        }
        ;($i.prototype.clear = $w),
          ($i.prototype.delete = bw),
          ($i.prototype.get = Hw),
          ($i.prototype.has = jw),
          ($i.prototype.set = Vw)
        function pr(r) {
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
            a = Zu(o, r)
          if (a < 0) return !1
          var h = o.length - 1
          return a == h ? o.pop() : Ku.call(o, a, 1), --this.size, !0
        }
        function Gw(r) {
          var o = this.__data__,
            a = Zu(o, r)
          return a < 0 ? n : o[a][1]
        }
        function qw(r) {
          return Zu(this.__data__, r) > -1
        }
        function Yw(r, o) {
          var a = this.__data__,
            h = Zu(a, r)
          return h < 0 ? (++this.size, a.push([r, o])) : (a[h][1] = o), this
        }
        ;(pr.prototype.clear = Ww),
          (pr.prototype.delete = Kw),
          (pr.prototype.get = Gw),
          (pr.prototype.has = qw),
          (pr.prototype.set = Yw)
        function gr(r) {
          var o = -1,
            a = r == null ? 0 : r.length
          for (this.clear(); ++o < a; ) {
            var h = r[o]
            this.set(h[0], h[1])
          }
        }
        function Qw() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new $i(),
              map: new (Ys || pr)(),
              string: new $i(),
            })
        }
        function Xw(r) {
          var o = ca(this, r).delete(r)
          return (this.size -= o ? 1 : 0), o
        }
        function Jw(r) {
          return ca(this, r).get(r)
        }
        function Zw(r) {
          return ca(this, r).has(r)
        }
        function e_(r, o) {
          var a = ca(this, r),
            h = a.size
          return a.set(r, o), (this.size += a.size == h ? 0 : 1), this
        }
        ;(gr.prototype.clear = Qw),
          (gr.prototype.delete = Xw),
          (gr.prototype.get = Jw),
          (gr.prototype.has = Zw),
          (gr.prototype.set = e_)
        function bi(r) {
          var o = -1,
            a = r == null ? 0 : r.length
          for (this.__data__ = new gr(); ++o < a; ) this.add(r[o])
        }
        function t_(r) {
          return this.__data__.set(r, g), this
        }
        function n_(r) {
          return this.__data__.has(r)
        }
        ;(bi.prototype.add = bi.prototype.push = t_), (bi.prototype.has = n_)
        function Mn(r) {
          var o = (this.__data__ = new pr(r))
          this.size = o.size
        }
        function r_() {
          ;(this.__data__ = new pr()), (this.size = 0)
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
          if (a instanceof pr) {
            var h = a.__data__
            if (!Ys || h.length < s - 1)
              return h.push([r, o]), (this.size = ++a.size), this
            a = this.__data__ = new gr(h)
          }
          return a.set(r, o), (this.size = a.size), this
        }
        ;(Mn.prototype.clear = r_),
          (Mn.prototype.delete = i_),
          (Mn.prototype.get = o_),
          (Mn.prototype.has = s_),
          (Mn.prototype.set = l_)
        function Yp(r, o) {
          var a = he(r),
            h = !a && Ki(r),
            m = !a && !h && ni(r),
            _ = !a && !h && !m && Vo(r),
            C = a || h || m || _,
            L = C ? ke(r.length, vw) : [],
            F = L.length
          for (var K in r)
            (o || Oe.call(r, K)) &&
              !(
                C &&
                (K == 'length' ||
                  (m && (K == 'offset' || K == 'parent')) ||
                  (_ &&
                    (K == 'buffer' ||
                      K == 'byteLength' ||
                      K == 'byteOffset')) ||
                  wr(K, F))
              ) &&
              L.push(K)
          return L
        }
        function Qp(r) {
          var o = r.length
          return o ? r[Tc(0, o - 1)] : n
        }
        function u_(r, o) {
          return ha(Vt(r), Hi(o, 0, r.length))
        }
        function a_(r) {
          return ha(Vt(r))
        }
        function mc(r, o, a) {
          ;((a !== n && !Fn(r[o], a)) || (a === n && !(o in r))) && mr(r, o, a)
        }
        function Zs(r, o, a) {
          var h = r[o]
          ;(!(Oe.call(r, o) && Fn(h, a)) || (a === n && !(o in r))) &&
            mr(r, o, a)
        }
        function Zu(r, o) {
          for (var a = r.length; a--; ) if (Fn(r[a][0], o)) return a
          return -1
        }
        function f_(r, o, a, h) {
          return (
            Jr(r, function (m, _, C) {
              o(h, m, a(m), C)
            }),
            h
          )
        }
        function Xp(r, o) {
          return r && Zn(o, ht(o), r)
        }
        function c_(r, o) {
          return r && Zn(o, Kt(o), r)
        }
        function mr(r, o, a) {
          o == '__proto__' && Gu
            ? Gu(r, o, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (r[o] = a)
        }
        function vc(r, o) {
          for (var a = -1, h = o.length, m = H(h), _ = r == null; ++a < h; )
            m[a] = _ ? n : Xc(r, o[a])
          return m
        }
        function Hi(r, o, a) {
          return (
            r === r &&
              (a !== n && (r = r <= a ? r : a),
              o !== n && (r = r >= o ? r : o)),
            r
          )
        }
        function En(r, o, a, h, m, _) {
          var C,
            L = o & O,
            F = o & E,
            K = o & B
          if ((a && (C = m ? a(r, h, m, _) : a(r)), C !== n)) return C
          if (!je(r)) return r
          var G = he(r)
          if (G) {
            if (((C = Z_(r)), !L)) return Vt(r, C)
          } else {
            var Y = St(r),
              te = Y == Dr || Y == fo
            if (ni(r)) return Sg(r, L)
            if (Y == pn || Y == wt || (te && !m)) {
              if (((C = F || te ? {} : $g(r)), !L))
                return F ? H_(r, c_(C, r)) : b_(r, Xp(C, r))
            } else {
              if (!Ce[Y]) return m ? r : {}
              C = e2(r, Y, L)
            }
          }
          _ || (_ = new Mn())
          var ie = _.get(r)
          if (ie) return ie
          _.set(r, C),
            gm(r)
              ? r.forEach(function (ae) {
                  C.add(En(ae, o, a, ae, r, _))
                })
              : dm(r) &&
                r.forEach(function (ae, ve) {
                  C.set(ve, En(ae, o, a, ve, r, _))
                })
          var ue = K ? (F ? zc : Fc) : F ? Kt : ht,
            pe = G ? n : ue(r)
          return (
            ct(pe || r, function (ae, ve) {
              pe && ((ve = ae), (ae = r[ve])), Zs(C, ve, En(ae, o, a, ve, r, _))
            }),
            C
          )
        }
        function h_(r) {
          var o = ht(r)
          return function (a) {
            return Jp(a, r, o)
          }
        }
        function Jp(r, o, a) {
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
        function Zp(r, o, a) {
          if (typeof r != 'function') throw new _n(f)
          return sl(function () {
            r.apply(n, a)
          }, o)
        }
        function el(r, o, a, h) {
          var m = -1,
            _ = qr,
            C = !0,
            L = r.length,
            F = [],
            K = o.length
          if (!L) return F
          a && (o = Le(o, Ae(a))),
            h
              ? ((_ = Lo), (C = !1))
              : o.length >= s && ((_ = wn), (C = !1), (o = new bi(o)))
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
        var Jr = Tg(Jn),
          eg = Tg(wc, !0)
        function d_(r, o) {
          var a = !0
          return (
            Jr(r, function (h, m, _) {
              return (a = !!o(h, m, _)), a
            }),
            a
          )
        }
        function ea(r, o, a) {
          for (var h = -1, m = r.length; ++h < m; ) {
            var _ = r[h],
              C = o(_)
            if (C != null && (L === n ? C === C && !nn(C) : a(C, L)))
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
              h = a > h ? 0 : vm(h);
            a < h;

          )
            r[a++] = o
          return r
        }
        function tg(r, o) {
          var a = []
          return (
            Jr(r, function (h, m, _) {
              o(h, m, _) && a.push(h)
            }),
            a
          )
        }
        function gt(r, o, a, h, m) {
          var _ = -1,
            C = r.length
          for (a || (a = n2), m || (m = []); ++_ < C; ) {
            var L = r[_]
            o > 0 && a(L)
              ? o > 1
                ? gt(L, o - 1, a, h, m)
                : Nn(m, L)
              : h || (m[m.length] = L)
          }
          return m
        }
        var yc = Ag(),
          ng = Ag(!0)
        function Jn(r, o) {
          return r && yc(r, o, ht)
        }
        function wc(r, o) {
          return r && ng(r, o, ht)
        }
        function ta(r, o) {
          return yn(o, function (a) {
            return _r(r[a])
          })
        }
        function ji(r, o) {
          o = ei(o, r)
          for (var a = 0, h = o.length; r != null && a < h; ) r = r[er(o[a++])]
          return a && a == h ? r : n
        }
        function rg(r, o, a) {
          var h = o(r)
          return he(r) ? h : Nn(h, a(r))
        }
        function Nt(r) {
          return r == null
            ? r === n
              ? Ts
              : su
            : Bi && Bi in Fe(r)
            ? Q_(r)
            : a2(r)
        }
        function _c(r, o) {
          return r > o
        }
        function g_(r, o) {
          return r != null && Oe.call(r, o)
        }
        function m_(r, o) {
          return r != null && o in Fe(r)
        }
        function v_(r, o, a) {
          return r >= _t(o, a) && r < ut(o, a)
        }
        function Sc(r, o, a) {
          for (
            var h = a ? Lo : qr,
              m = r[0].length,
              _ = r.length,
              C = _,
              L = H(_),
              F = 1 / 0,
              K = [];
            C--;

          ) {
            var G = r[C]
            C && o && (G = Le(G, Ae(o))),
              (F = _t(G.length, F)),
              (L[C] =
                !a && (o || (m >= 120 && G.length >= 120)) ? new bi(C && G) : n)
          }
          G = r[0]
          var Y = -1,
            te = L[0]
          e: for (; ++Y < m && K.length < F; ) {
            var ie = G[Y],
              ue = o ? o(ie) : ie
            if (
              ((ie = a || ie !== 0 ? ie : 0), !(te ? wn(te, ue) : h(K, ue, a)))
            ) {
              for (C = _; --C; ) {
                var pe = L[C]
                if (!(pe ? wn(pe, ue) : h(r[C], ue, a))) continue e
              }
              te && te.push(ue), K.push(ie)
            }
          }
          return K
        }
        function y_(r, o, a, h) {
          return (
            Jn(r, function (m, _, C) {
              o(h, a(m), _, C)
            }),
            h
          )
        }
        function tl(r, o, a) {
          ;(o = ei(o, r)), (r = Vg(r, o))
          var h = r == null ? r : r[er(Cn(o))]
          return h == null ? n : Lt(h, r, a)
        }
        function ig(r) {
          return Ye(r) && Nt(r) == wt
        }
        function w_(r) {
          return Ye(r) && Nt(r) == Ge
        }
        function __(r) {
          return Ye(r) && Nt(r) == Ai
        }
        function nl(r, o, a, h, m) {
          return r === o
            ? !0
            : r == null || o == null || (!Ye(r) && !Ye(o))
            ? r !== r && o !== o
            : S_(r, o, a, h, nl, m)
        }
        function S_(r, o, a, h, m, _) {
          var C = he(r),
            L = he(o),
            F = C ? bt : St(r),
            K = L ? bt : St(o)
          ;(F = F == wt ? pn : F), (K = K == wt ? pn : K)
          var G = F == pn,
            Y = K == pn,
            te = F == K
          if (te && ni(r)) {
            if (!ni(o)) return !1
            ;(C = !0), (G = !1)
          }
          if (te && !G)
            return (
              _ || (_ = new Mn()),
              C || Vo(r) ? zg(r, o, a, h, m, _) : q_(r, o, F, a, h, m, _)
            )
          if (!(a & $)) {
            var ie = G && Oe.call(r, '__wrapped__'),
              ue = Y && Oe.call(o, '__wrapped__')
            if (ie || ue) {
              var pe = ie ? r.value() : r,
                ae = ue ? o.value() : o
              return _ || (_ = new Mn()), m(pe, ae, a, h, _)
            }
          }
          return te ? (_ || (_ = new Mn()), Y_(r, o, a, h, m, _)) : !1
        }
        function E_(r) {
          return Ye(r) && St(r) == Pt
        }
        function Ec(r, o, a, h) {
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
              var Y = new Mn()
              if (h) var te = h(K, G, F, r, o, Y)
              if (!(te === n ? nl(G, K, $ | V, h, Y) : te)) return !1
            }
          }
          return !0
        }
        function og(r) {
          if (!je(r) || i2(r)) return !1
          var o = _r(r) ? Ew : gu
          return o.test(Wi(r))
        }
        function x_(r) {
          return Ye(r) && Nt(r) == Mr
        }
        function C_(r) {
          return Ye(r) && St(r) == Rt
        }
        function k_(r) {
          return Ye(r) && ya(r.length) && !!De[Nt(r)]
        }
        function sg(r) {
          return typeof r == 'function'
            ? r
            : r == null
            ? Gt
            : typeof r == 'object'
            ? he(r)
              ? ag(r[0], r[1])
              : ug(r)
            : Im(r)
        }
        function xc(r) {
          if (!ol(r)) return Iw(r)
          var o = []
          for (var a in Fe(r)) Oe.call(r, a) && a != 'constructor' && o.push(a)
          return o
        }
        function T_(r) {
          if (!je(r)) return u2(r)
          var o = ol(r),
            a = []
          for (var h in r)
            (h == 'constructor' && (o || !Oe.call(r, h))) || a.push(h)
          return a
        }
        function Cc(r, o) {
          return r < o
        }
        function lg(r, o) {
          var a = -1,
            h = Wt(r) ? H(r.length) : []
          return (
            Jr(r, function (m, _, C) {
              h[++a] = o(m, _, C)
            }),
            h
          )
        }
        function ug(r) {
          var o = Bc(r)
          return o.length == 1 && o[0][2]
            ? Hg(o[0][0], o[0][1])
            : function (a) {
                return a === r || Ec(a, r, o)
              }
        }
        function ag(r, o) {
          return bc(r) && bg(o)
            ? Hg(er(r), o)
            : function (a) {
                var h = Xc(a, r)
                return h === n && h === o ? Jc(a, r) : nl(o, h, $ | V)
              }
        }
        function na(r, o, a, h, m) {
          r !== o &&
            yc(
              o,
              function (_, C) {
                if ((m || (m = new Mn()), je(_))) A_(r, o, C, a, na, h, m)
                else {
                  var L = h ? h(jc(r, C), _, C + '', r, o, m) : n
                  L === n && (L = _), mc(r, C, L)
                }
              },
              Kt
            )
        }
        function A_(r, o, a, h, m, _, C) {
          var L = jc(r, a),
            F = jc(o, a),
            K = C.get(F)
          if (K) {
            mc(r, a, K)
            return
          }
          var G = _ ? _(L, F, a + '', r, o, C) : n,
            Y = G === n
          if (Y) {
            var te = he(F),
              ie = !te && ni(F),
              ue = !te && !ie && Vo(F)
            ;(G = F),
              te || ie || ue
                ? he(L)
                  ? (G = L)
                  : Je(L)
                  ? (G = Vt(L))
                  : ie
                  ? ((Y = !1), (G = Sg(F, !0)))
                  : ue
                  ? ((Y = !1), (G = Eg(F, !0)))
                  : (G = [])
                : ll(F) || Ki(F)
                ? ((G = L),
                  Ki(L) ? (G = ym(L)) : (!je(L) || _r(L)) && (G = $g(F)))
                : (Y = !1)
          }
          Y && (C.set(F, G), m(G, F, h, _, C), C.delete(F)), mc(r, a, G)
        }
        function fg(r, o) {
          var a = r.length
          if (a) return (o += o < 0 ? a : 0), wr(o, a) ? r[o] : n
        }
        function cg(r, o, a) {
          o.length
            ? (o = Le(o, function (_) {
                return he(_)
                  ? function (C) {
                      return ji(C, _.length === 1 ? _[0] : _)
                    }
                  : _
              }))
            : (o = [Gt])
          var h = -1
          o = Le(o, Ae(le()))
          var m = lg(r, function (_, C, L) {
            var F = Le(o, function (K) {
              return K(_)
            })
            return { criteria: F, index: ++h, value: _ }
          })
          return b(m, function (_, C) {
            return $_(_, C, a)
          })
        }
        function I_(r, o) {
          return hg(r, o, function (a, h) {
            return Jc(r, h)
          })
        }
        function hg(r, o, a) {
          for (var h = -1, m = o.length, _ = {}; ++h < m; ) {
            var C = o[h],
              L = ji(r, C)
            a(L, C) && rl(_, ei(C, r), L)
          }
          return _
        }
        function P_(r) {
          return function (o) {
            return ji(o, r)
          }
        }
        function kc(r, o, a, h) {
          var m = h ? Yr : dr,
            _ = -1,
            C = o.length,
            L = r
          for (r === o && (o = Vt(o)), a && (L = Le(r, Ae(a))); ++_ < C; )
            for (
              var F = 0, K = o[_], G = a ? a(K) : K;
              (F = m(L, G, F, h)) > -1;

            )
              L !== r && Ku.call(L, F, 1), Ku.call(r, F, 1)
          return r
        }
        function dg(r, o) {
          for (var a = r ? o.length : 0, h = a - 1; a--; ) {
            var m = o[a]
            if (a == h || m !== _) {
              var _ = m
              wr(m) ? Ku.call(r, m, 1) : Pc(r, m)
            }
          }
          return r
        }
        function Tc(r, o) {
          return r + Yu(Gp() * (o - r + 1))
        }
        function R_(r, o, a, h) {
          for (var m = -1, _ = ut(qu((o - r) / (a || 1)), 0), C = H(_); _--; )
            (C[h ? _ : ++m] = r), (r += a)
          return C
        }
        function Ac(r, o) {
          var a = ''
          if (!r || o < 1 || o > X) return a
          do o % 2 && (a += r), (o = Yu(o / 2)), o && (r += r)
          while (o)
          return a
        }
        function ge(r, o) {
          return Vc(jg(r, o, Gt), r + '')
        }
        function L_(r) {
          return Qp(Wo(r))
        }
        function O_(r, o) {
          var a = Wo(r)
          return ha(a, Hi(o, 0, a.length))
        }
        function rl(r, o, a, h) {
          if (!je(r)) return r
          o = ei(o, r)
          for (
            var m = -1, _ = o.length, C = _ - 1, L = r;
            L != null && ++m < _;

          ) {
            var F = er(o[m]),
              K = a
            if (F === '__proto__' || F === 'constructor' || F === 'prototype')
              return r
            if (m != C) {
              var G = L[F]
              ;(K = h ? h(G, F, L) : n),
                K === n && (K = je(G) ? G : wr(o[m + 1]) ? [] : {})
            }
            Zs(L, F, K), (L = L[F])
          }
          return r
        }
        var pg = Qu
            ? function (r, o) {
                return Qu.set(r, o), r
              }
            : Gt,
          N_ = Gu
            ? function (r, o) {
                return Gu(r, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: eh(o),
                  writable: !0,
                })
              }
            : Gt
        function D_(r) {
          return ha(Wo(r))
        }
        function xn(r, o, a) {
          var h = -1,
            m = r.length
          o < 0 && (o = -o > m ? 0 : m + o),
            (a = a > m ? m : a),
            a < 0 && (a += m),
            (m = o > a ? 0 : (a - o) >>> 0),
            (o >>>= 0)
          for (var _ = H(m); ++h < m; ) _[h] = r[h + o]
          return _
        }
        function M_(r, o) {
          var a
          return (
            Jr(r, function (h, m, _) {
              return (a = o(h, m, _)), !a
            }),
            !!a
          )
        }
        function ra(r, o, a) {
          var h = 0,
            m = r == null ? h : r.length
          if (typeof o == 'number' && o === o && m <= be) {
            for (; h < m; ) {
              var _ = (h + m) >>> 1,
                C = r[_]
              C !== null && !nn(C) && (a ? C <= o : C < o)
                ? (h = _ + 1)
                : (m = _)
            }
            return m
          }
          return Ic(r, o, Gt, a)
        }
        function Ic(r, o, a, h) {
          var m = 0,
            _ = r == null ? 0 : r.length
          if (_ === 0) return 0
          o = a(o)
          for (
            var C = o !== o, L = o === null, F = nn(o), K = o === n;
            m < _;

          ) {
            var G = Yu((m + _) / 2),
              Y = a(r[G]),
              te = Y !== n,
              ie = Y === null,
              ue = Y === Y,
              pe = nn(Y)
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
          return _t(_, Pe)
        }
        function gg(r, o) {
          for (var a = -1, h = r.length, m = 0, _ = []; ++a < h; ) {
            var C = r[a],
              L = o ? o(C) : C
            if (!a || !Fn(L, F)) {
              var F = L
              _[m++] = C === 0 ? 0 : C
            }
          }
          return _
        }
        function mg(r) {
          return typeof r == 'number' ? r : nn(r) ? se : +r
        }
        function tn(r) {
          if (typeof r == 'string') return r
          if (he(r)) return Le(r, tn) + ''
          if (nn(r)) return qp ? qp.call(r) : ''
          var o = r + ''
          return o == '0' && 1 / r == -tt ? '-0' : o
        }
        function Zr(r, o, a) {
          var h = -1,
            m = qr,
            _ = r.length,
            C = !0,
            L = [],
            F = L
          if (a) (C = !1), (m = Lo)
          else if (_ >= s) {
            var K = o ? null : K_(r)
            if (K) return Uu(K)
            ;(C = !1), (m = wn), (F = new bi())
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
        function Pc(r, o) {
          return (
            (o = ei(o, r)), (r = Vg(r, o)), r == null || delete r[er(Cn(o))]
          )
        }
        function vg(r, o, a, h) {
          return rl(r, o, a(ji(r, o)), h)
        }
        function ia(r, o, a, h) {
          for (
            var m = r.length, _ = h ? m : -1;
            (h ? _-- : ++_ < m) && o(r[_], _, r);

          );
          return a
            ? xn(r, h ? 0 : _, h ? _ + 1 : m)
            : xn(r, h ? _ + 1 : 0, h ? m : _)
        }
        function yg(r, o) {
          var a = r
          return (
            a instanceof ye && (a = a.value()),
            Oo(
              o,
              function (h, m) {
                return m.func.apply(m.thisArg, Nn([h], m.args))
              },
              a
            )
          )
        }
        function Rc(r, o, a) {
          var h = r.length
          if (h < 2) return h ? Zr(r[0]) : []
          for (var m = -1, _ = H(h); ++m < h; )
            for (var C = r[m], L = -1; ++L < h; )
              L != m && (_[m] = el(_[m] || C, r[L], o, a))
          return Zr(gt(_, 1), o, a)
        }
        function wg(r, o, a) {
          for (var h = -1, m = r.length, _ = o.length, C = {}; ++h < m; ) {
            var L = h < _ ? o[h] : n
            a(C, r[h], L)
          }
          return C
        }
        function Lc(r) {
          return Je(r) ? r : []
        }
        function Oc(r) {
          return typeof r == 'function' ? r : Gt
        }
        function ei(r, o) {
          return he(r) ? r : bc(r, o) ? [r] : qg(Ie(r))
        }
        var F_ = ge
        function ti(r, o, a) {
          var h = r.length
          return (a = a === n ? h : a), !o && a >= h ? r : xn(r, o, a)
        }
        var _g =
          xw ||
          function (r) {
            return nt.clearTimeout(r)
          }
        function Sg(r, o) {
          if (o) return r.slice()
          var a = r.length,
            h = Hp ? Hp(a) : new r.constructor(a)
          return r.copy(h), h
        }
        function Nc(r) {
          var o = new r.constructor(r.byteLength)
          return new Vu(o).set(new Vu(r)), o
        }
        function z_(r, o) {
          var a = o ? Nc(r.buffer) : r.buffer
          return new r.constructor(a, r.byteOffset, r.byteLength)
        }
        function U_(r) {
          var o = new r.constructor(r.source, yo.exec(r))
          return (o.lastIndex = r.lastIndex), o
        }
        function B_(r) {
          return Js ? Fe(Js.call(r)) : {}
        }
        function Eg(r, o) {
          var a = o ? Nc(r.buffer) : r.buffer
          return new r.constructor(a, r.byteOffset, r.length)
        }
        function xg(r, o) {
          if (r !== o) {
            var a = r !== n,
              h = r === null,
              m = r === r,
              _ = nn(r),
              C = o !== n,
              L = o === null,
              F = o === o,
              K = nn(o)
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
            var F = xg(m[h], _[h])
            if (F) {
              if (h >= L) return F
              var K = a[h]
              return F * (K == 'desc' ? -1 : 1)
            }
          }
          return r.index - o.index
        }
        function Cg(r, o, a, h) {
          for (
            var m = -1,
              _ = r.length,
              C = a.length,
              L = -1,
              F = o.length,
              K = ut(_ - C, 0),
              G = H(F + K),
              Y = !h;
            ++L < F;

          )
            G[L] = o[L]
          for (; ++m < C; ) (Y || m < _) && (G[a[m]] = r[m])
          for (; K--; ) G[L++] = r[m++]
          return G
        }
        function kg(r, o, a, h) {
          for (
            var m = -1,
              _ = r.length,
              C = -1,
              L = a.length,
              F = -1,
              K = o.length,
              G = ut(_ - L, 0),
              Y = H(G + K),
              te = !h;
            ++m < G;

          )
            Y[m] = r[m]
          for (var ie = m; ++F < K; ) Y[ie + F] = o[F]
          for (; ++C < L; ) (te || m < _) && (Y[ie + a[C]] = r[m++])
          return Y
        }
        function Vt(r, o) {
          var a = -1,
            h = r.length
          for (o || (o = H(h)); ++a < h; ) o[a] = r[a]
          return o
        }
        function Zn(r, o, a, h) {
          var m = !a
          a || (a = {})
          for (var _ = -1, C = o.length; ++_ < C; ) {
            var L = o[_],
              F = h ? h(a[L], r[L], L, a, r) : n
            F === n && (F = r[L]), m ? mr(a, L, F) : Zs(a, L, F)
          }
          return a
        }
        function b_(r, o) {
          return Zn(r, $c(r), o)
        }
        function H_(r, o) {
          return Zn(r, Ug(r), o)
        }
        function oa(r, o) {
          return function (a, h) {
            var m = he(a) ? Nu : f_,
              _ = o ? o() : {}
            return m(a, r, le(h, 2), _)
          }
        }
        function bo(r) {
          return ge(function (o, a) {
            var h = -1,
              m = a.length,
              _ = m > 1 ? a[m - 1] : n,
              C = m > 2 ? a[2] : n
            for (
              _ = r.length > 3 && typeof _ == 'function' ? (m--, _) : n,
                C && Dt(a[0], a[1], C) && ((_ = m < 3 ? n : _), (m = 1)),
                o = Fe(o);
              ++h < m;

            ) {
              var L = a[h]
              L && r(o, L, h, _)
            }
            return o
          })
        }
        function Tg(r, o) {
          return function (a, h) {
            if (a == null) return a
            if (!Wt(a)) return r(a, h)
            for (
              var m = a.length, _ = o ? m : -1, C = Fe(a);
              (o ? _-- : ++_ < m) && h(C[_], _, C) !== !1;

            );
            return a
          }
        }
        function Ag(r) {
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
            m = il(r)
          function _() {
            var C = this && this !== nt && this instanceof _ ? m : r
            return C.apply(h ? a : this, arguments)
          }
          return _
        }
        function Ig(r) {
          return function (o) {
            o = Ie(o)
            var a = Do(o) ? Dn(o) : n,
              h = a ? a[0] : o.charAt(0),
              m = a ? ti(a, 1).join('') : o.slice(1)
            return h[r]() + m
          }
        }
        function Ho(r) {
          return function (o) {
            return Oo(Tm(km(o).replace(oc, '')), r, '')
          }
        }
        function il(r) {
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
            var a = $o(r.prototype),
              h = r.apply(a, o)
            return je(h) ? h : a
          }
        }
        function V_(r, o, a) {
          var h = il(r)
          function m() {
            for (var _ = arguments.length, C = H(_), L = _, F = jo(m); L--; )
              C[L] = arguments[L]
            var K = _ < 3 && C[0] !== F && C[_ - 1] !== F ? [] : Qr(C, F)
            if (((_ -= K.length), _ < a))
              return Ng(r, o, sa, m.placeholder, n, C, K, n, n, a - _)
            var G = this && this !== nt && this instanceof m ? h : r
            return Lt(G, this, C)
          }
          return m
        }
        function Pg(r) {
          return function (o, a, h) {
            var m = Fe(o)
            if (!Wt(o)) {
              var _ = le(a, 3)
              ;(o = ht(o)),
                (a = function (L) {
                  return _(m[L], L, m)
                })
            }
            var C = r(o, a, h)
            return C > -1 ? m[_ ? o[C] : C] : n
          }
        }
        function Rg(r) {
          return yr(function (o) {
            var a = o.length,
              h = a,
              m = Sn.prototype.thru
            for (r && o.reverse(); h--; ) {
              var _ = o[h]
              if (typeof _ != 'function') throw new _n(f)
              if (m && !C && fa(_) == 'wrapper') var C = new Sn([], !0)
            }
            for (h = C ? h : a; ++h < a; ) {
              _ = o[h]
              var L = fa(_),
                F = L == 'wrapper' ? Uc(_) : n
              F &&
              Hc(F[0]) &&
              F[1] == (x | N | Q | S) &&
              !F[4].length &&
              F[9] == 1
                ? (C = C[fa(F[0])].apply(C, F[3]))
                : (C = _.length == 1 && Hc(_) ? C[L]() : C.thru(_))
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
        function sa(r, o, a, h, m, _, C, L, F, K) {
          var G = o & x,
            Y = o & q,
            te = o & R,
            ie = o & (N | j),
            ue = o & T,
            pe = te ? n : il(r)
          function ae() {
            for (var ve = arguments.length, Se = H(ve), rn = ve; rn--; )
              Se[rn] = arguments[rn]
            if (ie)
              var Mt = jo(ae),
                on = Gs(Se, Mt)
            if (
              (h && (Se = Cg(Se, h, m, ie)),
              _ && (Se = kg(Se, _, C, ie)),
              (ve -= on),
              ie && ve < K)
            ) {
              var Ze = Qr(Se, Mt)
              return Ng(r, o, sa, ae.placeholder, a, Se, Ze, L, F, K - ve)
            }
            var zn = Y ? a : this,
              Er = te ? zn[r] : r
            return (
              (ve = Se.length),
              L ? (Se = f2(Se, L)) : ue && ve > 1 && Se.reverse(),
              G && F < ve && (Se.length = F),
              this && this !== nt && this instanceof ae && (Er = pe || il(Er)),
              Er.apply(zn, Se)
            )
          }
          return ae
        }
        function Lg(r, o) {
          return function (a, h) {
            return y_(a, r, o(h), {})
          }
        }
        function la(r, o) {
          return function (a, h) {
            var m
            if (a === n && h === n) return o
            if ((a !== n && (m = a), h !== n)) {
              if (m === n) return h
              typeof a == 'string' || typeof h == 'string'
                ? ((a = tn(a)), (h = tn(h)))
                : ((a = mg(a)), (h = mg(h))),
                (m = r(a, h))
            }
            return m
          }
        }
        function Dc(r) {
          return yr(function (o) {
            return (
              (o = Le(o, Ae(le()))),
              ge(function (a) {
                var h = this
                return r(o, function (m) {
                  return Lt(m, h, a)
                })
              })
            )
          })
        }
        function ua(r, o) {
          o = o === n ? ' ' : tn(o)
          var a = o.length
          if (a < 2) return a ? Ac(o, r) : o
          var h = Ac(o, qu(r / Mo(o)))
          return Do(o) ? ti(Dn(h), 0, r).join('') : h.slice(0, r)
        }
        function W_(r, o, a, h) {
          var m = o & q,
            _ = il(r)
          function C() {
            for (
              var L = -1,
                F = arguments.length,
                K = -1,
                G = h.length,
                Y = H(G + F),
                te = this && this !== nt && this instanceof C ? _ : r;
              ++K < G;

            )
              Y[K] = h[K]
            for (; F--; ) Y[K++] = arguments[++L]
            return Lt(te, m ? a : this, Y)
          }
          return C
        }
        function Og(r) {
          return function (o, a, h) {
            return (
              h && typeof h != 'number' && Dt(o, a, h) && (a = h = n),
              (o = Sr(o)),
              a === n ? ((a = o), (o = 0)) : (a = Sr(a)),
              (h = h === n ? (o < a ? 1 : -1) : Sr(h)),
              R_(o, a, h, r)
            )
          }
        }
        function aa(r) {
          return function (o, a) {
            return (
              (typeof o == 'string' && typeof a == 'string') ||
                ((o = kn(o)), (a = kn(a))),
              r(o, a)
            )
          }
        }
        function Ng(r, o, a, h, m, _, C, L, F, K) {
          var G = o & N,
            Y = G ? C : n,
            te = G ? n : C,
            ie = G ? _ : n,
            ue = G ? n : _
          ;(o |= G ? Q : Z), (o &= ~(G ? Z : Q)), o & k || (o &= ~(q | R))
          var pe = [r, o, m, ie, Y, ue, te, L, F, K],
            ae = a.apply(n, pe)
          return Hc(r) && Wg(ae, pe), (ae.placeholder = h), Kg(ae, r, o)
        }
        function Mc(r) {
          var o = lt[r]
          return function (a, h) {
            if (
              ((a = kn(a)), (h = h == null ? 0 : _t(de(h), 292)), h && Kp(a))
            ) {
              var m = (Ie(a) + 'e').split('e'),
                _ = o(m[0] + 'e' + (+m[1] + h))
              return (m = (Ie(_) + 'e').split('e')), +(m[0] + 'e' + (+m[1] - h))
            }
            return o(a)
          }
        }
        var K_ =
          Uo && 1 / Uu(new Uo([, -0]))[1] == tt
            ? function (r) {
                return new Uo(r)
              }
            : rh
        function Dg(r) {
          return function (o) {
            var a = St(o)
            return a == Pt ? cc(o) : a == Rt ? aw(o) : st(o, r(o))
          }
        }
        function vr(r, o, a, h, m, _, C, L) {
          var F = o & R
          if (!F && typeof r != 'function') throw new _n(f)
          var K = h ? h.length : 0
          if (
            (K || ((o &= ~(Q | Z)), (h = m = n)),
            (C = C === n ? C : ut(de(C), 0)),
            (L = L === n ? L : de(L)),
            (K -= m ? m.length : 0),
            o & Z)
          ) {
            var G = h,
              Y = m
            h = m = n
          }
          var te = F ? n : Uc(r),
            ie = [r, o, a, h, m, G, Y, _, C, L]
          if (
            (te && l2(ie, te),
            (r = ie[0]),
            (o = ie[1]),
            (a = ie[2]),
            (h = ie[3]),
            (m = ie[4]),
            (L = ie[9] = ie[9] === n ? (F ? 0 : r.length) : ut(ie[9] - K, 0)),
            !L && o & (N | j) && (o &= ~(N | j)),
            !o || o == q)
          )
            var ue = j_(r, o, a)
          else
            o == N || o == j
              ? (ue = V_(r, o, L))
              : (o == Q || o == (q | Q)) && !m.length
              ? (ue = W_(r, o, a, h))
              : (ue = sa.apply(n, ie))
          var pe = te ? pg : Wg
          return Kg(pe(ue, ie), r, o)
        }
        function Mg(r, o, a, h) {
          return r === n || (Fn(r, zo[a]) && !Oe.call(h, a)) ? o : r
        }
        function Fg(r, o, a, h, m, _) {
          return (
            je(r) && je(o) && (_.set(o, r), na(r, o, n, Fg, _), _.delete(o)), r
          )
        }
        function G_(r) {
          return ll(r) ? n : r
        }
        function zg(r, o, a, h, m, _) {
          var C = a & $,
            L = r.length,
            F = o.length
          if (L != F && !(C && F > L)) return !1
          var K = _.get(r),
            G = _.get(o)
          if (K && G) return K == o && G == r
          var Y = -1,
            te = !0,
            ie = a & V ? new bi() : n
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
                !No(o, function (ve, Se) {
                  if (!wn(ie, Se) && (ue === ve || m(ue, ve, a, h, _)))
                    return ie.push(Se)
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
            case qe:
              if (r.byteLength != o.byteLength || r.byteOffset != o.byteOffset)
                return !1
              ;(r = r.buffer), (o = o.buffer)
            case Ge:
              return !(r.byteLength != o.byteLength || !_(new Vu(r), new Vu(o)))
            case Ti:
            case Ai:
            case ur:
              return Fn(+r, +o)
            case lr:
              return r.name == o.name && r.message == o.message
            case Mr:
            case Fr:
              return r == o + ''
            case Pt:
              var L = cc
            case Rt:
              var F = h & $
              if ((L || (L = Uu), r.size != o.size && !F)) return !1
              var K = C.get(r)
              if (K) return K == o
              ;(h |= V), C.set(r, o)
              var G = zg(L(r), L(o), h, m, _, C)
              return C.delete(r), G
            case co:
              if (Js) return Js.call(r) == Js.call(o)
          }
          return !1
        }
        function Y_(r, o, a, h, m, _) {
          var C = a & $,
            L = Fc(r),
            F = L.length,
            K = Fc(o),
            G = K.length
          if (F != G && !C) return !1
          for (var Y = F; Y--; ) {
            var te = L[Y]
            if (!(C ? te in o : Oe.call(o, te))) return !1
          }
          var ie = _.get(r),
            ue = _.get(o)
          if (ie && ue) return ie == o && ue == r
          var pe = !0
          _.set(r, o), _.set(o, r)
          for (var ae = C; ++Y < F; ) {
            te = L[Y]
            var ve = r[te],
              Se = o[te]
            if (h) var rn = C ? h(Se, ve, te, o, r, _) : h(ve, Se, te, r, o, _)
            if (!(rn === n ? ve === Se || m(ve, Se, a, h, _) : rn)) {
              pe = !1
              break
            }
            ae || (ae = te == 'constructor')
          }
          if (pe && !ae) {
            var Mt = r.constructor,
              on = o.constructor
            Mt != on &&
              'constructor' in r &&
              'constructor' in o &&
              !(
                typeof Mt == 'function' &&
                Mt instanceof Mt &&
                typeof on == 'function' &&
                on instanceof on
              ) &&
              (pe = !1)
          }
          return _.delete(r), _.delete(o), pe
        }
        function yr(r) {
          return Vc(jg(r, n, Jg), r + '')
        }
        function Fc(r) {
          return rg(r, ht, $c)
        }
        function zc(r) {
          return rg(r, Kt, Ug)
        }
        var Uc = Qu
          ? function (r) {
              return Qu.get(r)
            }
          : rh
        function fa(r) {
          for (
            var o = r.name + '', a = Bo[o], h = Oe.call(Bo, o) ? a.length : 0;
            h--;

          ) {
            var m = a[h],
              _ = m.func
            if (_ == null || _ == r) return m.name
          }
          return o
        }
        function jo(r) {
          var o = Oe.call(v, 'placeholder') ? v : r
          return o.placeholder
        }
        function le() {
          var r = v.iteratee || th
          return (
            (r = r === th ? sg : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          )
        }
        function ca(r, o) {
          var a = r.__data__
          return r2(o) ? a[typeof o == 'string' ? 'string' : 'hash'] : a.map
        }
        function Bc(r) {
          for (var o = ht(r), a = o.length; a--; ) {
            var h = o[a],
              m = r[h]
            o[a] = [h, m, bg(m)]
          }
          return o
        }
        function Vi(r, o) {
          var a = sw(r, o)
          return og(a) ? a : n
        }
        function Q_(r) {
          var o = Oe.call(r, Bi),
            a = r[Bi]
          try {
            r[Bi] = n
            var h = !0
          } catch {}
          var m = Hu.call(r)
          return h && (o ? (r[Bi] = a) : delete r[Bi]), m
        }
        var $c = dc
            ? function (r) {
                return r == null
                  ? []
                  : ((r = Fe(r)),
                    yn(dc(r), function (o) {
                      return Vp.call(r, o)
                    }))
              }
            : ih,
          Ug = dc
            ? function (r) {
                for (var o = []; r; ) Nn(o, $c(r)), (r = Wu(r))
                return o
              }
            : ih,
          St = Nt
        ;((pc && St(new pc(new ArrayBuffer(1))) != qe) ||
          (Ys && St(new Ys()) != Pt) ||
          (gc && St(gc.resolve()) != lu) ||
          (Uo && St(new Uo()) != Rt) ||
          (Qs && St(new Qs()) != ar)) &&
          (St = function (r) {
            var o = Nt(r),
              a = o == pn ? r.constructor : n,
              h = a ? Wi(a) : ''
            if (h)
              switch (h) {
                case Ow:
                  return qe
                case Nw:
                  return Pt
                case Dw:
                  return lu
                case Mw:
                  return Rt
                case Fw:
                  return ar
              }
            return o
          })
        function X_(r, o, a) {
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
                o = _t(o, r + C)
                break
              case 'takeRight':
                r = ut(r, o - C)
                break
            }
          }
          return { start: r, end: o }
        }
        function J_(r) {
          var o = r.match(Jf)
          return o ? o[1].split($r) : []
        }
        function Bg(r, o, a) {
          o = ei(o, r)
          for (var h = -1, m = o.length, _ = !1; ++h < m; ) {
            var C = er(o[h])
            if (!(_ = r != null && a(r, C))) break
            r = r[C]
          }
          return _ || ++h != m
            ? _
            : ((m = r == null ? 0 : r.length),
              !!m && ya(m) && wr(C, m) && (he(r) || Ki(r)))
        }
        function Z_(r) {
          var o = r.length,
            a = new r.constructor(o)
          return (
            o &&
              typeof r[0] == 'string' &&
              Oe.call(r, 'index') &&
              ((a.index = r.index), (a.input = r.input)),
            a
          )
        }
        function $g(r) {
          return typeof r.constructor == 'function' && !ol(r) ? $o(Wu(r)) : {}
        }
        function e2(r, o, a) {
          var h = r.constructor
          switch (o) {
            case Ge:
              return Nc(r)
            case Ti:
            case Ai:
              return new h(+r)
            case qe:
              return z_(r, a)
            case zr:
            case ho:
            case po:
            case Is:
            case fr:
            case go:
            case mo:
            case Ii:
            case Ps:
              return Eg(r, a)
            case Pt:
              return new h()
            case ur:
            case Fr:
              return new h(r)
            case Mr:
              return U_(r)
            case Rt:
              return new h()
            case co:
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
          return he(r) || Ki(r) || !!(Wp && r && r[Wp])
        }
        function wr(r, o) {
          var a = typeof r
          return (
            (o = o ?? X),
            !!o &&
              (a == 'number' || (a != 'symbol' && Ds.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < o
          )
        }
        function Dt(r, o, a) {
          if (!je(a)) return !1
          var h = typeof o
          return (
            h == 'number' ? Wt(a) && wr(o, a.length) : h == 'string' && o in a
          )
            ? Fn(a[o], r)
            : !1
        }
        function bc(r, o) {
          if (he(r)) return !1
          var a = typeof r
          return a == 'number' ||
            a == 'symbol' ||
            a == 'boolean' ||
            r == null ||
            nn(r)
            ? !0
            : Pi.test(r) || !hu.test(r) || (o != null && r in Fe(o))
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
        function Hc(r) {
          var o = fa(r),
            a = v[o]
          if (typeof a != 'function' || !(o in ye.prototype)) return !1
          if (r === a) return !0
          var h = Uc(a)
          return !!h && r === h[0]
        }
        function i2(r) {
          return !!bp && bp in r
        }
        var o2 = $u ? _r : oh
        function ol(r) {
          var o = r && r.constructor,
            a = (typeof o == 'function' && o.prototype) || zo
          return r === a
        }
        function bg(r) {
          return r === r && !je(r)
        }
        function Hg(r, o) {
          return function (a) {
            return a == null ? !1 : a[r] === o && (o !== n || r in Fe(a))
          }
        }
        function s2(r) {
          var o = ma(r, function (h) {
              return a.size === w && a.clear(), h
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
            ;(r[3] = F ? Cg(F, L, o[4]) : L), (r[4] = F ? Qr(r[3], P) : o[4])
          }
          return (
            (L = o[5]),
            L &&
              ((F = r[5]),
              (r[5] = F ? kg(F, L, o[6]) : L),
              (r[6] = F ? Qr(r[5], P) : o[6])),
            (L = o[7]),
            L && (r[7] = L),
            h & x && (r[8] = r[8] == null ? o[8] : _t(r[8], o[8])),
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
          return Hu.call(r)
        }
        function jg(r, o, a) {
          return (
            (o = ut(o === n ? r.length - 1 : o, 0)),
            function () {
              for (
                var h = arguments, m = -1, _ = ut(h.length - o, 0), C = H(_);
                ++m < _;

              )
                C[m] = h[o + m]
              m = -1
              for (var L = H(o + 1); ++m < o; ) L[m] = h[m]
              return (L[o] = a(C)), Lt(r, this, L)
            }
          )
        }
        function Vg(r, o) {
          return o.length < 2 ? r : ji(r, xn(o, 0, -1))
        }
        function f2(r, o) {
          for (var a = r.length, h = _t(o.length, a), m = Vt(r); h--; ) {
            var _ = o[h]
            r[h] = wr(_, a) ? m[_] : n
          }
          return r
        }
        function jc(r, o) {
          if (
            !(o === 'constructor' && typeof r[o] == 'function') &&
            o != '__proto__'
          )
            return r[o]
        }
        var Wg = Gg(pg),
          sl =
            kw ||
            function (r, o) {
              return nt.setTimeout(r, o)
            },
          Vc = Gg(N_)
        function Kg(r, o, a) {
          var h = o + ''
          return Vc(r, t2(h, c2(J_(h), a)))
        }
        function Gg(r) {
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
        function ha(r, o) {
          var a = -1,
            h = r.length,
            m = h - 1
          for (o = o === n ? h : o; ++a < o; ) {
            var _ = Tc(a, m),
              C = r[_]
            ;(r[_] = r[a]), (r[a] = C)
          }
          return (r.length = o), r
        }
        var qg = s2(function (r) {
          var o = []
          return (
            r.charCodeAt(0) === 46 && o.push(''),
            r.replace(du, function (a, h, m, _) {
              o.push(m ? _.replace(Ns, '$1') : h || a)
            }),
            o
          )
        })
        function er(r) {
          if (typeof r == 'string' || nn(r)) return r
          var o = r + ''
          return o == '0' && 1 / r == -tt ? '-0' : o
        }
        function Wi(r) {
          if (r != null) {
            try {
              return bu.call(r)
            } catch {}
            try {
              return r + ''
            } catch {}
          }
          return ''
        }
        function c2(r, o) {
          return (
            ct(On, function (a) {
              var h = '_.' + a[0]
              o & a[1] && !qr(r, h) && r.push(h)
            }),
            r.sort()
          )
        }
        function Yg(r) {
          if (r instanceof ye) return r.clone()
          var o = new Sn(r.__wrapped__, r.__chain__)
          return (
            (o.__actions__ = Vt(r.__actions__)),
            (o.__index__ = r.__index__),
            (o.__values__ = r.__values__),
            o
          )
        }
        function h2(r, o, a) {
          ;(a ? Dt(r, o, a) : o === n) ? (o = 1) : (o = ut(de(o), 0))
          var h = r == null ? 0 : r.length
          if (!h || o < 1) return []
          for (var m = 0, _ = 0, C = H(qu(h / o)); m < h; )
            C[_++] = xn(r, m, (m += o))
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
          for (var o = H(r - 1), a = arguments[0], h = r; h--; )
            o[h - 1] = arguments[h]
          return Nn(he(a) ? Vt(a) : [a], gt(o, 1))
        }
        var g2 = ge(function (r, o) {
            return Je(r) ? el(r, gt(o, 1, Je, !0)) : []
          }),
          m2 = ge(function (r, o) {
            var a = Cn(o)
            return (
              Je(a) && (a = n), Je(r) ? el(r, gt(o, 1, Je, !0), le(a, 2)) : []
            )
          }),
          v2 = ge(function (r, o) {
            var a = Cn(o)
            return Je(a) && (a = n), Je(r) ? el(r, gt(o, 1, Je, !0), n, a) : []
          })
        function y2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = a || o === n ? 1 : de(o)), xn(r, o < 0 ? 0 : o, h))
            : []
        }
        function w2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = a || o === n ? 1 : de(o)),
              (o = h - o),
              xn(r, 0, o < 0 ? 0 : o))
            : []
        }
        function _2(r, o) {
          return r && r.length ? ia(r, le(o, 3), !0, !0) : []
        }
        function S2(r, o) {
          return r && r.length ? ia(r, le(o, 3), !0) : []
        }
        function E2(r, o, a, h) {
          var m = r == null ? 0 : r.length
          return m
            ? (a && typeof a != 'number' && Dt(r, o, a) && ((a = 0), (h = m)),
              p_(r, o, a, h))
            : []
        }
        function Qg(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = a == null ? 0 : de(a)
          return m < 0 && (m = ut(h + m, 0)), zi(r, le(o, 3), m)
        }
        function Xg(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h - 1
          return (
            a !== n && ((m = de(a)), (m = a < 0 ? ut(h + m, 0) : _t(m, h - 1))),
            zi(r, le(o, 3), m, !0)
          )
        }
        function Jg(r) {
          var o = r == null ? 0 : r.length
          return o ? gt(r, 1) : []
        }
        function x2(r) {
          var o = r == null ? 0 : r.length
          return o ? gt(r, tt) : []
        }
        function C2(r, o) {
          var a = r == null ? 0 : r.length
          return a ? ((o = o === n ? 1 : de(o)), gt(r, o)) : []
        }
        function k2(r) {
          for (var o = -1, a = r == null ? 0 : r.length, h = {}; ++o < a; ) {
            var m = r[o]
            h[m[0]] = m[1]
          }
          return h
        }
        function Zg(r) {
          return r && r.length ? r[0] : n
        }
        function T2(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = a == null ? 0 : de(a)
          return m < 0 && (m = ut(h + m, 0)), dr(r, o, m)
        }
        function A2(r) {
          var o = r == null ? 0 : r.length
          return o ? xn(r, 0, -1) : []
        }
        var I2 = ge(function (r) {
            var o = Le(r, Lc)
            return o.length && o[0] === r[0] ? Sc(o) : []
          }),
          P2 = ge(function (r) {
            var o = Cn(r),
              a = Le(r, Lc)
            return (
              o === Cn(a) ? (o = n) : a.pop(),
              a.length && a[0] === r[0] ? Sc(a, le(o, 2)) : []
            )
          }),
          R2 = ge(function (r) {
            var o = Cn(r),
              a = Le(r, Lc)
            return (
              (o = typeof o == 'function' ? o : n),
              o && a.pop(),
              a.length && a[0] === r[0] ? Sc(a, n, o) : []
            )
          })
        function L2(r, o) {
          return r == null ? '' : Aw.call(r, o)
        }
        function Cn(r) {
          var o = r == null ? 0 : r.length
          return o ? r[o - 1] : n
        }
        function O2(r, o, a) {
          var h = r == null ? 0 : r.length
          if (!h) return -1
          var m = h
          return (
            a !== n && ((m = de(a)), (m = m < 0 ? ut(h + m, 0) : _t(m, h - 1))),
            o === o ? cw(r, o, m) : zi(r, l, m, !0)
          )
        }
        function N2(r, o) {
          return r && r.length ? fg(r, de(o)) : n
        }
        var D2 = ge(em)
        function em(r, o) {
          return r && r.length && o && o.length ? kc(r, o) : r
        }
        function M2(r, o, a) {
          return r && r.length && o && o.length ? kc(r, o, le(a, 2)) : r
        }
        function F2(r, o, a) {
          return r && r.length && o && o.length ? kc(r, o, n, a) : r
        }
        var z2 = yr(function (r, o) {
          var a = r == null ? 0 : r.length,
            h = vc(r, o)
          return (
            dg(
              r,
              Le(o, function (m) {
                return wr(m, a) ? +m : m
              }).sort(xg)
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
          return dg(r, m), a
        }
        function Wc(r) {
          return r == null ? r : Lw.call(r)
        }
        function B2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? (a && typeof a != 'number' && Dt(r, o, a)
                ? ((o = 0), (a = h))
                : ((o = o == null ? 0 : de(o)), (a = a === n ? h : de(a))),
              xn(r, o, a))
            : []
        }
        function $2(r, o) {
          return ra(r, o)
        }
        function b2(r, o, a) {
          return Ic(r, o, le(a, 2))
        }
        function H2(r, o) {
          var a = r == null ? 0 : r.length
          if (a) {
            var h = ra(r, o)
            if (h < a && Fn(r[h], o)) return h
          }
          return -1
        }
        function j2(r, o) {
          return ra(r, o, !0)
        }
        function V2(r, o, a) {
          return Ic(r, o, le(a, 2), !0)
        }
        function W2(r, o) {
          var a = r == null ? 0 : r.length
          if (a) {
            var h = ra(r, o, !0) - 1
            if (Fn(r[h], o)) return h
          }
          return -1
        }
        function K2(r) {
          return r && r.length ? gg(r) : []
        }
        function G2(r, o) {
          return r && r.length ? gg(r, le(o, 2)) : []
        }
        function q2(r) {
          var o = r == null ? 0 : r.length
          return o ? xn(r, 1, o) : []
        }
        function Y2(r, o, a) {
          return r && r.length
            ? ((o = a || o === n ? 1 : de(o)), xn(r, 0, o < 0 ? 0 : o))
            : []
        }
        function Q2(r, o, a) {
          var h = r == null ? 0 : r.length
          return h
            ? ((o = a || o === n ? 1 : de(o)),
              (o = h - o),
              xn(r, o < 0 ? 0 : o, h))
            : []
        }
        function X2(r, o) {
          return r && r.length ? ia(r, le(o, 3), !1, !0) : []
        }
        function J2(r, o) {
          return r && r.length ? ia(r, le(o, 3)) : []
        }
        var Z2 = ge(function (r) {
            return Zr(gt(r, 1, Je, !0))
          }),
          eS = ge(function (r) {
            var o = Cn(r)
            return Je(o) && (o = n), Zr(gt(r, 1, Je, !0), le(o, 2))
          }),
          tS = ge(function (r) {
            var o = Cn(r)
            return (
              (o = typeof o == 'function' ? o : n), Zr(gt(r, 1, Je, !0), n, o)
            )
          })
        function nS(r) {
          return r && r.length ? Zr(r) : []
        }
        function rS(r, o) {
          return r && r.length ? Zr(r, le(o, 2)) : []
        }
        function iS(r, o) {
          return (
            (o = typeof o == 'function' ? o : n),
            r && r.length ? Zr(r, n, o) : []
          )
        }
        function Kc(r) {
          if (!(r && r.length)) return []
          var o = 0
          return (
            (r = yn(r, function (a) {
              if (Je(a)) return (o = ut(a.length, o)), !0
            })),
            ke(o, function (a) {
              return Le(r, p(a))
            })
          )
        }
        function tm(r, o) {
          if (!(r && r.length)) return []
          var a = Kc(r)
          return o == null
            ? a
            : Le(a, function (h) {
                return Lt(o, n, h)
              })
        }
        var oS = ge(function (r, o) {
            return Je(r) ? el(r, o) : []
          }),
          sS = ge(function (r) {
            return Rc(yn(r, Je))
          }),
          lS = ge(function (r) {
            var o = Cn(r)
            return Je(o) && (o = n), Rc(yn(r, Je), le(o, 2))
          }),
          uS = ge(function (r) {
            var o = Cn(r)
            return (o = typeof o == 'function' ? o : n), Rc(yn(r, Je), n, o)
          }),
          aS = ge(Kc)
        function fS(r, o) {
          return wg(r || [], o || [], Zs)
        }
        function cS(r, o) {
          return wg(r || [], o || [], rl)
        }
        var hS = ge(function (r) {
          var o = r.length,
            a = o > 1 ? r[o - 1] : n
          return (a = typeof a == 'function' ? (r.pop(), a) : n), tm(r, a)
        })
        function nm(r) {
          var o = v(r)
          return (o.__chain__ = !0), o
        }
        function dS(r, o) {
          return o(r), r
        }
        function da(r, o) {
          return o(r)
        }
        var pS = yr(function (r) {
          var o = r.length,
            a = o ? r[0] : 0,
            h = this.__wrapped__,
            m = function (_) {
              return vc(_, r)
            }
          return o > 1 ||
            this.__actions__.length ||
            !(h instanceof ye) ||
            !wr(a)
            ? this.thru(m)
            : ((h = h.slice(a, +a + (o ? 1 : 0))),
              h.__actions__.push({ func: da, args: [m], thisArg: n }),
              new Sn(h, this.__chain__).thru(function (_) {
                return o && !_.length && _.push(n), _
              }))
        })
        function gS() {
          return nm(this)
        }
        function mS() {
          return new Sn(this.value(), this.__chain__)
        }
        function vS() {
          this.__values__ === n && (this.__values__ = mm(this.value()))
          var r = this.__index__ >= this.__values__.length,
            o = r ? n : this.__values__[this.__index__++]
          return { done: r, value: o }
        }
        function yS() {
          return this
        }
        function wS(r) {
          for (var o, a = this; a instanceof Ju; ) {
            var h = Yg(a)
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
              o.__actions__.push({ func: da, args: [Wc], thisArg: n }),
              new Sn(o, this.__chain__)
            )
          }
          return this.thru(Wc)
        }
        function SS() {
          return yg(this.__wrapped__, this.__actions__)
        }
        var ES = oa(function (r, o, a) {
          Oe.call(r, a) ? ++r[a] : mr(r, a, 1)
        })
        function xS(r, o, a) {
          var h = he(r) ? Ks : d_
          return a && Dt(r, o, a) && (o = n), h(r, le(o, 3))
        }
        function CS(r, o) {
          var a = he(r) ? yn : tg
          return a(r, le(o, 3))
        }
        var kS = Pg(Qg),
          TS = Pg(Xg)
        function AS(r, o) {
          return gt(pa(r, o), 1)
        }
        function IS(r, o) {
          return gt(pa(r, o), tt)
        }
        function PS(r, o, a) {
          return (a = a === n ? 1 : de(a)), gt(pa(r, o), a)
        }
        function rm(r, o) {
          var a = he(r) ? ct : Jr
          return a(r, le(o, 3))
        }
        function im(r, o) {
          var a = he(r) ? Du : eg
          return a(r, le(o, 3))
        }
        var RS = oa(function (r, o, a) {
          Oe.call(r, a) ? r[a].push(o) : mr(r, a, [o])
        })
        function LS(r, o, a, h) {
          ;(r = Wt(r) ? r : Wo(r)), (a = a && !h ? de(a) : 0)
          var m = r.length
          return (
            a < 0 && (a = ut(m + a, 0)),
            wa(r) ? a <= m && r.indexOf(o, a) > -1 : !!m && dr(r, o, a) > -1
          )
        }
        var OS = ge(function (r, o, a) {
            var h = -1,
              m = typeof o == 'function',
              _ = Wt(r) ? H(r.length) : []
            return (
              Jr(r, function (C) {
                _[++h] = m ? Lt(o, C, a) : tl(C, o, a)
              }),
              _
            )
          }),
          NS = oa(function (r, o, a) {
            mr(r, a, o)
          })
        function pa(r, o) {
          var a = he(r) ? Le : lg
          return a(r, le(o, 3))
        }
        function DS(r, o, a, h) {
          return r == null
            ? []
            : (he(o) || (o = o == null ? [] : [o]),
              (a = h ? n : a),
              he(a) || (a = a == null ? [] : [a]),
              cg(r, o, a))
        }
        var MS = oa(
          function (r, o, a) {
            r[a ? 0 : 1].push(o)
          },
          function () {
            return [[], []]
          }
        )
        function FS(r, o, a) {
          var h = he(r) ? Oo : z,
            m = arguments.length < 3
          return h(r, le(o, 4), a, m, Jr)
        }
        function zS(r, o, a) {
          var h = he(r) ? hr : z,
            m = arguments.length < 3
          return h(r, le(o, 4), a, m, eg)
        }
        function US(r, o) {
          var a = he(r) ? yn : tg
          return a(r, va(le(o, 3)))
        }
        function BS(r) {
          var o = he(r) ? Qp : L_
          return o(r)
        }
        function $S(r, o, a) {
          ;(a ? Dt(r, o, a) : o === n) ? (o = 1) : (o = de(o))
          var h = he(r) ? u_ : O_
          return h(r, o)
        }
        function bS(r) {
          var o = he(r) ? a_ : D_
          return o(r)
        }
        function HS(r) {
          if (r == null) return 0
          if (Wt(r)) return wa(r) ? Mo(r) : r.length
          var o = St(r)
          return o == Pt || o == Rt ? r.size : xc(r).length
        }
        function jS(r, o, a) {
          var h = he(r) ? No : M_
          return a && Dt(r, o, a) && (o = n), h(r, le(o, 3))
        }
        var VS = ge(function (r, o) {
            if (r == null) return []
            var a = o.length
            return (
              a > 1 && Dt(r, o[0], o[1])
                ? (o = [])
                : a > 2 && Dt(o[0], o[1], o[2]) && (o = [o[0]]),
              cg(r, gt(o, 1), [])
            )
          }),
          ga =
            Cw ||
            function () {
              return nt.Date.now()
            }
        function WS(r, o) {
          if (typeof o != 'function') throw new _n(f)
          return (
            (r = de(r)),
            function () {
              if (--r < 1) return o.apply(this, arguments)
            }
          )
        }
        function om(r, o, a) {
          return (
            (o = a ? n : o),
            (o = r && o == null ? r.length : o),
            vr(r, x, n, n, n, n, o)
          )
        }
        function sm(r, o) {
          var a
          if (typeof o != 'function') throw new _n(f)
          return (
            (r = de(r)),
            function () {
              return (
                --r > 0 && (a = o.apply(this, arguments)), r <= 1 && (o = n), a
              )
            }
          )
        }
        var Gc = ge(function (r, o, a) {
            var h = q
            if (a.length) {
              var m = Qr(a, jo(Gc))
              h |= Q
            }
            return vr(r, h, o, a, m)
          }),
          lm = ge(function (r, o, a) {
            var h = q | R
            if (a.length) {
              var m = Qr(a, jo(lm))
              h |= Q
            }
            return vr(o, h, r, a, m)
          })
        function um(r, o, a) {
          o = a ? n : o
          var h = vr(r, N, n, n, n, n, n, o)
          return (h.placeholder = um.placeholder), h
        }
        function am(r, o, a) {
          o = a ? n : o
          var h = vr(r, j, n, n, n, n, n, o)
          return (h.placeholder = am.placeholder), h
        }
        function fm(r, o, a) {
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
          if (typeof r != 'function') throw new _n(f)
          ;(o = kn(o) || 0),
            je(a) &&
              ((G = !!a.leading),
              (Y = 'maxWait' in a),
              (_ = Y ? ut(kn(a.maxWait) || 0, o) : _),
              (te = 'trailing' in a ? !!a.trailing : te))
          function ie(Ze) {
            var zn = h,
              Er = m
            return (h = m = n), (K = Ze), (C = r.apply(Er, zn)), C
          }
          function ue(Ze) {
            return (K = Ze), (L = sl(ve, o)), G ? ie(Ze) : C
          }
          function pe(Ze) {
            var zn = Ze - F,
              Er = Ze - K,
              Pm = o - zn
            return Y ? _t(Pm, _ - Er) : Pm
          }
          function ae(Ze) {
            var zn = Ze - F,
              Er = Ze - K
            return F === n || zn >= o || zn < 0 || (Y && Er >= _)
          }
          function ve() {
            var Ze = ga()
            if (ae(Ze)) return Se(Ze)
            L = sl(ve, pe(Ze))
          }
          function Se(Ze) {
            return (L = n), te && h ? ie(Ze) : ((h = m = n), C)
          }
          function rn() {
            L !== n && _g(L), (K = 0), (h = F = m = L = n)
          }
          function Mt() {
            return L === n ? C : Se(ga())
          }
          function on() {
            var Ze = ga(),
              zn = ae(Ze)
            if (((h = arguments), (m = this), (F = Ze), zn)) {
              if (L === n) return ue(F)
              if (Y) return _g(L), (L = sl(ve, o)), ie(F)
            }
            return L === n && (L = sl(ve, o)), C
          }
          return (on.cancel = rn), (on.flush = Mt), on
        }
        var KS = ge(function (r, o) {
            return Zp(r, 1, o)
          }),
          GS = ge(function (r, o, a) {
            return Zp(r, kn(o) || 0, a)
          })
        function qS(r) {
          return vr(r, T)
        }
        function ma(r, o) {
          if (typeof r != 'function' || (o != null && typeof o != 'function'))
            throw new _n(f)
          var a = function () {
            var h = arguments,
              m = o ? o.apply(this, h) : h[0],
              _ = a.cache
            if (_.has(m)) return _.get(m)
            var C = r.apply(this, h)
            return (a.cache = _.set(m, C) || _), C
          }
          return (a.cache = new (ma.Cache || gr)()), a
        }
        ma.Cache = gr
        function va(r) {
          if (typeof r != 'function') throw new _n(f)
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
          return sm(2, r)
        }
        var QS = F_(function (r, o) {
            o =
              o.length == 1 && he(o[0])
                ? Le(o[0], Ae(le()))
                : Le(gt(o, 1), Ae(le()))
            var a = o.length
            return ge(function (h) {
              for (var m = -1, _ = _t(h.length, a); ++m < _; )
                h[m] = o[m].call(this, h[m])
              return Lt(r, this, h)
            })
          }),
          qc = ge(function (r, o) {
            var a = Qr(o, jo(qc))
            return vr(r, Q, n, o, a)
          }),
          cm = ge(function (r, o) {
            var a = Qr(o, jo(cm))
            return vr(r, Z, n, o, a)
          }),
          XS = yr(function (r, o) {
            return vr(r, S, n, n, n, o)
          })
        function JS(r, o) {
          if (typeof r != 'function') throw new _n(f)
          return (o = o === n ? o : de(o)), ge(r, o)
        }
        function ZS(r, o) {
          if (typeof r != 'function') throw new _n(f)
          return (
            (o = o == null ? 0 : ut(de(o), 0)),
            ge(function (a) {
              var h = a[o],
                m = ti(a, 0, o)
              return h && Nn(m, h), Lt(r, this, m)
            })
          )
        }
        function eE(r, o, a) {
          var h = !0,
            m = !0
          if (typeof r != 'function') throw new _n(f)
          return (
            je(a) &&
              ((h = 'leading' in a ? !!a.leading : h),
              (m = 'trailing' in a ? !!a.trailing : m)),
            fm(r, o, { leading: h, maxWait: o, trailing: m })
          )
        }
        function tE(r) {
          return om(r, 1)
        }
        function nE(r, o) {
          return qc(Oc(o), r)
        }
        function rE() {
          if (!arguments.length) return []
          var r = arguments[0]
          return he(r) ? r : [r]
        }
        function iE(r) {
          return En(r, B)
        }
        function oE(r, o) {
          return (o = typeof o == 'function' ? o : n), En(r, B, o)
        }
        function sE(r) {
          return En(r, O | B)
        }
        function lE(r, o) {
          return (o = typeof o == 'function' ? o : n), En(r, O | B, o)
        }
        function uE(r, o) {
          return o == null || Jp(r, o, ht(o))
        }
        function Fn(r, o) {
          return r === o || (r !== r && o !== o)
        }
        var aE = aa(_c),
          fE = aa(function (r, o) {
            return r >= o
          }),
          Ki = ig(
            (function () {
              return arguments
            })()
          )
            ? ig
            : function (r) {
                return Ye(r) && Oe.call(r, 'callee') && !Vp.call(r, 'callee')
              },
          he = H.isArray,
          cE = Gr ? Ae(Gr) : w_
        function Wt(r) {
          return r != null && ya(r.length) && !_r(r)
        }
        function Je(r) {
          return Ye(r) && Wt(r)
        }
        function hE(r) {
          return r === !0 || r === !1 || (Ye(r) && Nt(r) == Ti)
        }
        var ni = Tw || oh,
          dE = Vs ? Ae(Vs) : __
        function pE(r) {
          return Ye(r) && r.nodeType === 1 && !ll(r)
        }
        function gE(r) {
          if (r == null) return !0
          if (
            Wt(r) &&
            (he(r) ||
              typeof r == 'string' ||
              typeof r.splice == 'function' ||
              ni(r) ||
              Vo(r) ||
              Ki(r))
          )
            return !r.length
          var o = St(r)
          if (o == Pt || o == Rt) return !r.size
          if (ol(r)) return !xc(r).length
          for (var a in r) if (Oe.call(r, a)) return !1
          return !0
        }
        function mE(r, o) {
          return nl(r, o)
        }
        function vE(r, o, a) {
          a = typeof a == 'function' ? a : n
          var h = a ? a(r, o) : n
          return h === n ? nl(r, o, n, a) : !!h
        }
        function Yc(r) {
          if (!Ye(r)) return !1
          var o = Nt(r)
          return (
            o == lr ||
            o == ao ||
            (typeof r.message == 'string' &&
              typeof r.name == 'string' &&
              !ll(r))
          )
        }
        function yE(r) {
          return typeof r == 'number' && Kp(r)
        }
        function _r(r) {
          if (!je(r)) return !1
          var o = Nt(r)
          return o == Dr || o == fo || o == dn || o == uu
        }
        function hm(r) {
          return typeof r == 'number' && r == de(r)
        }
        function ya(r) {
          return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= X
        }
        function je(r) {
          var o = typeof r
          return r != null && (o == 'object' || o == 'function')
        }
        function Ye(r) {
          return r != null && typeof r == 'object'
        }
        var dm = Ro ? Ae(Ro) : E_
        function wE(r, o) {
          return r === o || Ec(r, o, Bc(o))
        }
        function _E(r, o, a) {
          return (a = typeof a == 'function' ? a : n), Ec(r, o, Bc(o), a)
        }
        function SE(r) {
          return pm(r) && r != +r
        }
        function EE(r) {
          if (o2(r)) throw new fe(u)
          return og(r)
        }
        function xE(r) {
          return r === null
        }
        function CE(r) {
          return r == null
        }
        function pm(r) {
          return typeof r == 'number' || (Ye(r) && Nt(r) == ur)
        }
        function ll(r) {
          if (!Ye(r) || Nt(r) != pn) return !1
          var o = Wu(r)
          if (o === null) return !0
          var a = Oe.call(o, 'constructor') && o.constructor
          return typeof a == 'function' && a instanceof a && bu.call(a) == _w
        }
        var Qc = Mi ? Ae(Mi) : x_
        function kE(r) {
          return hm(r) && r >= -X && r <= X
        }
        var gm = Ws ? Ae(Ws) : C_
        function wa(r) {
          return typeof r == 'string' || (!he(r) && Ye(r) && Nt(r) == Fr)
        }
        function nn(r) {
          return typeof r == 'symbol' || (Ye(r) && Nt(r) == co)
        }
        var Vo = Fi ? Ae(Fi) : k_
        function TE(r) {
          return r === n
        }
        function AE(r) {
          return Ye(r) && St(r) == ar
        }
        function IE(r) {
          return Ye(r) && Nt(r) == As
        }
        var PE = aa(Cc),
          RE = aa(function (r, o) {
            return r <= o
          })
        function mm(r) {
          if (!r) return []
          if (Wt(r)) return wa(r) ? Dn(r) : Vt(r)
          if (qs && r[qs]) return uw(r[qs]())
          var o = St(r),
            a = o == Pt ? cc : o == Rt ? Uu : Wo
          return a(r)
        }
        function Sr(r) {
          if (!r) return r === 0 ? r : 0
          if (((r = kn(r)), r === tt || r === -tt)) {
            var o = r < 0 ? -1 : 1
            return o * oe
          }
          return r === r ? r : 0
        }
        function de(r) {
          var o = Sr(r),
            a = o % 1
          return o === o ? (a ? o - a : o) : 0
        }
        function vm(r) {
          return r ? Hi(de(r), 0, me) : 0
        }
        function kn(r) {
          if (typeof r == 'number') return r
          if (nn(r)) return se
          if (je(r)) {
            var o = typeof r.valueOf == 'function' ? r.valueOf() : r
            r = je(o) ? o + '' : o
          }
          if (typeof r != 'string') return r === 0 ? r : +r
          r = _e(r)
          var a = Kn.test(r)
          return a || mu.test(r)
            ? fc(r.slice(2), a ? 2 : 8)
            : wo.test(r)
            ? se
            : +r
        }
        function ym(r) {
          return Zn(r, Kt(r))
        }
        function LE(r) {
          return r ? Hi(de(r), -X, X) : r === 0 ? r : 0
        }
        function Ie(r) {
          return r == null ? '' : tn(r)
        }
        var OE = bo(function (r, o) {
            if (ol(o) || Wt(o)) {
              Zn(o, ht(o), r)
              return
            }
            for (var a in o) Oe.call(o, a) && Zs(r, a, o[a])
          }),
          wm = bo(function (r, o) {
            Zn(o, Kt(o), r)
          }),
          _a = bo(function (r, o, a, h) {
            Zn(o, Kt(o), r, h)
          }),
          NE = bo(function (r, o, a, h) {
            Zn(o, ht(o), r, h)
          }),
          DE = yr(vc)
        function ME(r, o) {
          var a = $o(r)
          return o == null ? a : Xp(a, o)
        }
        var FE = ge(function (r, o) {
            r = Fe(r)
            var a = -1,
              h = o.length,
              m = h > 2 ? o[2] : n
            for (m && Dt(o[0], o[1], m) && (h = 1); ++a < h; )
              for (var _ = o[a], C = Kt(_), L = -1, F = C.length; ++L < F; ) {
                var K = C[L],
                  G = r[K]
                ;(G === n || (Fn(G, zo[K]) && !Oe.call(r, K))) && (r[K] = _[K])
              }
            return r
          }),
          zE = ge(function (r) {
            return r.push(n, Fg), Lt(_m, n, r)
          })
        function UE(r, o) {
          return Ot(r, le(o, 3), Jn)
        }
        function BE(r, o) {
          return Ot(r, le(o, 3), wc)
        }
        function $E(r, o) {
          return r == null ? r : yc(r, le(o, 3), Kt)
        }
        function bE(r, o) {
          return r == null ? r : ng(r, le(o, 3), Kt)
        }
        function HE(r, o) {
          return r && Jn(r, le(o, 3))
        }
        function jE(r, o) {
          return r && wc(r, le(o, 3))
        }
        function VE(r) {
          return r == null ? [] : ta(r, ht(r))
        }
        function WE(r) {
          return r == null ? [] : ta(r, Kt(r))
        }
        function Xc(r, o, a) {
          var h = r == null ? n : ji(r, o)
          return h === n ? a : h
        }
        function KE(r, o) {
          return r != null && Bg(r, o, g_)
        }
        function Jc(r, o) {
          return r != null && Bg(r, o, m_)
        }
        var GE = Lg(function (r, o, a) {
            o != null && typeof o.toString != 'function' && (o = Hu.call(o)),
              (r[o] = a)
          }, eh(Gt)),
          qE = Lg(function (r, o, a) {
            o != null && typeof o.toString != 'function' && (o = Hu.call(o)),
              Oe.call(r, o) ? r[o].push(a) : (r[o] = [a])
          }, le),
          YE = ge(tl)
        function ht(r) {
          return Wt(r) ? Yp(r) : xc(r)
        }
        function Kt(r) {
          return Wt(r) ? Yp(r, !0) : T_(r)
        }
        function QE(r, o) {
          var a = {}
          return (
            (o = le(o, 3)),
            Jn(r, function (h, m, _) {
              mr(a, o(h, m, _), h)
            }),
            a
          )
        }
        function XE(r, o) {
          var a = {}
          return (
            (o = le(o, 3)),
            Jn(r, function (h, m, _) {
              mr(a, m, o(h, m, _))
            }),
            a
          )
        }
        var JE = bo(function (r, o, a) {
            na(r, o, a)
          }),
          _m = bo(function (r, o, a, h) {
            na(r, o, a, h)
          }),
          ZE = yr(function (r, o) {
            var a = {}
            if (r == null) return a
            var h = !1
            ;(o = Le(o, function (_) {
              return (_ = ei(_, r)), h || (h = _.length > 1), _
            })),
              Zn(r, zc(r), a),
              h && (a = En(a, O | E | B, G_))
            for (var m = o.length; m--; ) Pc(a, o[m])
            return a
          })
        function ex(r, o) {
          return Sm(r, va(le(o)))
        }
        var tx = yr(function (r, o) {
          return r == null ? {} : I_(r, o)
        })
        function Sm(r, o) {
          if (r == null) return {}
          var a = Le(zc(r), function (h) {
            return [h]
          })
          return (
            (o = le(o)),
            hg(r, a, function (h, m) {
              return o(h, m[0])
            })
          )
        }
        function nx(r, o, a) {
          o = ei(o, r)
          var h = -1,
            m = o.length
          for (m || ((m = 1), (r = n)); ++h < m; ) {
            var _ = r == null ? n : r[er(o[h])]
            _ === n && ((h = m), (_ = a)), (r = _r(_) ? _.call(r) : _)
          }
          return r
        }
        function rx(r, o, a) {
          return r == null ? r : rl(r, o, a)
        }
        function ix(r, o, a, h) {
          return (
            (h = typeof h == 'function' ? h : n), r == null ? r : rl(r, o, a, h)
          )
        }
        var Em = Dg(ht),
          xm = Dg(Kt)
        function ox(r, o, a) {
          var h = he(r),
            m = h || ni(r) || Vo(r)
          if (((o = le(o, 4)), a == null)) {
            var _ = r && r.constructor
            m
              ? (a = h ? new _() : [])
              : je(r)
              ? (a = _r(_) ? $o(Wu(r)) : {})
              : (a = {})
          }
          return (
            (m ? ct : Jn)(r, function (C, L, F) {
              return o(a, C, L, F)
            }),
            a
          )
        }
        function sx(r, o) {
          return r == null ? !0 : Pc(r, o)
        }
        function lx(r, o, a) {
          return r == null ? r : vg(r, o, Oc(a))
        }
        function ux(r, o, a, h) {
          return (
            (h = typeof h == 'function' ? h : n),
            r == null ? r : vg(r, o, Oc(a), h)
          )
        }
        function Wo(r) {
          return r == null ? [] : rt(r, ht(r))
        }
        function ax(r) {
          return r == null ? [] : rt(r, Kt(r))
        }
        function fx(r, o, a) {
          return (
            a === n && ((a = o), (o = n)),
            a !== n && ((a = kn(a)), (a = a === a ? a : 0)),
            o !== n && ((o = kn(o)), (o = o === o ? o : 0)),
            Hi(kn(r), o, a)
          )
        }
        function cx(r, o, a) {
          return (
            (o = Sr(o)),
            a === n ? ((a = o), (o = 0)) : (a = Sr(a)),
            (r = kn(r)),
            v_(r, o, a)
          )
        }
        function hx(r, o, a) {
          if (
            (a && typeof a != 'boolean' && Dt(r, o, a) && (o = a = n),
            a === n &&
              (typeof o == 'boolean'
                ? ((a = o), (o = n))
                : typeof r == 'boolean' && ((a = r), (r = n))),
            r === n && o === n
              ? ((r = 0), (o = 1))
              : ((r = Sr(r)), o === n ? ((o = r), (r = 0)) : (o = Sr(o))),
            r > o)
          ) {
            var h = r
            ;(r = o), (o = h)
          }
          if (a || r % 1 || o % 1) {
            var m = Gp()
            return _t(r + m * (o - r + ac('1e-' + ((m + '').length - 1))), o)
          }
          return Tc(r, o)
        }
        var dx = Ho(function (r, o, a) {
          return (o = o.toLowerCase()), r + (a ? Cm(o) : o)
        })
        function Cm(r) {
          return Zc(Ie(r).toLowerCase())
        }
        function km(r) {
          return (r = Ie(r)), r && r.replace(Ms, rw).replace(sc, '')
        }
        function px(r, o, a) {
          ;(r = Ie(r)), (o = tn(o))
          var h = r.length
          a = a === n ? h : Hi(de(a), 0, h)
          var m = a
          return (a -= o.length), a >= 0 && r.slice(a, m) == o
        }
        function gx(r) {
          return (r = Ie(r)), r && Os.test(r) ? r.replace(Ur, iw) : r
        }
        function mx(r) {
          return (r = Ie(r)), r && pu.test(r) ? r.replace(ot, '\\$&') : r
        }
        var vx = Ho(function (r, o, a) {
            return r + (a ? '-' : '') + o.toLowerCase()
          }),
          yx = Ho(function (r, o, a) {
            return r + (a ? ' ' : '') + o.toLowerCase()
          }),
          wx = Ig('toLowerCase')
        function _x(r, o, a) {
          ;(r = Ie(r)), (o = de(o))
          var h = o ? Mo(r) : 0
          if (!o || h >= o) return r
          var m = (o - h) / 2
          return ua(Yu(m), a) + r + ua(qu(m), a)
        }
        function Sx(r, o, a) {
          ;(r = Ie(r)), (o = de(o))
          var h = o ? Mo(r) : 0
          return o && h < o ? r + ua(o - h, a) : r
        }
        function Ex(r, o, a) {
          ;(r = Ie(r)), (o = de(o))
          var h = o ? Mo(r) : 0
          return o && h < o ? ua(o - h, a) + r : r
        }
        function xx(r, o, a) {
          return (
            a || o == null ? (o = 0) : o && (o = +o),
            Rw(Ie(r).replace(cr, ''), o || 0)
          )
        }
        function Cx(r, o, a) {
          return (
            (a ? Dt(r, o, a) : o === n) ? (o = 1) : (o = de(o)), Ac(Ie(r), o)
          )
        }
        function kx() {
          var r = arguments,
            o = Ie(r[0])
          return r.length < 3 ? o : o.replace(r[1], r[2])
        }
        var Tx = Ho(function (r, o, a) {
          return r + (a ? '_' : '') + o.toLowerCase()
        })
        function Ax(r, o, a) {
          return (
            a && typeof a != 'number' && Dt(r, o, a) && (o = a = n),
            (a = a === n ? me : a >>> 0),
            a
              ? ((r = Ie(r)),
                r &&
                (typeof o == 'string' || (o != null && !Qc(o))) &&
                ((o = tn(o)), !o && Do(r))
                  ? ti(Dn(r), 0, a)
                  : r.split(o, a))
              : []
          )
        }
        var Ix = Ho(function (r, o, a) {
          return r + (a ? ' ' : '') + Zc(o)
        })
        function Px(r, o, a) {
          return (
            (r = Ie(r)),
            (a = a == null ? 0 : Hi(de(a), 0, r.length)),
            (o = tn(o)),
            r.slice(a, a + o.length) == o
          )
        }
        function Rx(r, o, a) {
          var h = v.templateSettings
          a && Dt(r, o, a) && (o = n), (r = Ie(r)), (o = _a({}, o, h, Mg))
          var m = _a({}, o.imports, h.imports, Mg),
            _ = ht(m),
            C = rt(m, _),
            L,
            F,
            K = 0,
            G = o.interpolate || Li,
            Y = "__p += '",
            te = hc(
              (o.escape || Li).source +
                '|' +
                G.source +
                '|' +
                (G === vo ? tc : Li).source +
                '|' +
                (o.evaluate || Li).source +
                '|$',
              'g'
            ),
            ie =
              '//# sourceURL=' +
              (Oe.call(o, 'sourceURL')
                ? (o.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++Io + ']') +
              `
`
          r.replace(te, function (ae, ve, Se, rn, Mt, on) {
            return (
              Se || (Se = rn),
              (Y += r.slice(K, on).replace(vu, ow)),
              ve &&
                ((L = !0),
                (Y +=
                  `' +
__e(` +
                  ve +
                  `) +
'`)),
              Mt &&
                ((F = !0),
                (Y +=
                  `';
` +
                  Mt +
                  `;
__p += '`)),
              Se &&
                (Y +=
                  `' +
((__t = (` +
                  Se +
                  `)) == null ? '' : __t) +
'`),
              (K = on + ae.length),
              ae
            )
          }),
            (Y += `';
`)
          var ue = Oe.call(o, 'variable') && o.variable
          if (!ue)
            Y =
              `with (obj) {
` +
              Y +
              `
}
`
          else if (ec.test(ue)) throw new fe(d)
          ;(Y = (F ? Y.replace(Qf, '') : Y)
            .replace(Rs, '$1')
            .replace(au, '$1;')),
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
          var pe = Am(function () {
            return Te(_, ie + 'return ' + Y).apply(n, C)
          })
          if (((pe.source = Y), Yc(pe))) throw pe
          return pe
        }
        function Lx(r) {
          return Ie(r).toLowerCase()
        }
        function Ox(r) {
          return Ie(r).toUpperCase()
        }
        function Nx(r, o, a) {
          if (((r = Ie(r)), r && (a || o === n))) return _e(r)
          if (!r || !(o = tn(o))) return r
          var h = Dn(r),
            m = Dn(o),
            _ = jt(h, m),
            C = Ui(h, m) + 1
          return ti(h, _, C).join('')
        }
        function Dx(r, o, a) {
          if (((r = Ie(r)), r && (a || o === n))) return r.slice(0, $p(r) + 1)
          if (!r || !(o = tn(o))) return r
          var h = Dn(r),
            m = Ui(h, Dn(o)) + 1
          return ti(h, 0, m).join('')
        }
        function Mx(r, o, a) {
          if (((r = Ie(r)), r && (a || o === n))) return r.replace(cr, '')
          if (!r || !(o = tn(o))) return r
          var h = Dn(r),
            m = jt(h, Dn(o))
          return ti(h, m).join('')
        }
        function Fx(r, o) {
          var a = I,
            h = D
          if (je(o)) {
            var m = 'separator' in o ? o.separator : m
            ;(a = 'length' in o ? de(o.length) : a),
              (h = 'omission' in o ? tn(o.omission) : h)
          }
          r = Ie(r)
          var _ = r.length
          if (Do(r)) {
            var C = Dn(r)
            _ = C.length
          }
          if (a >= _) return r
          var L = a - Mo(h)
          if (L < 1) return h
          var F = C ? ti(C, 0, L).join('') : r.slice(0, L)
          if (m === n) return F + h
          if ((C && (L += F.length - L), Qc(m))) {
            if (r.slice(L).search(m)) {
              var K,
                G = F
              for (
                m.global || (m = hc(m.source, Ie(yo.exec(m)) + 'g')),
                  m.lastIndex = 0;
                (K = m.exec(G));

              )
                var Y = K.index
              F = F.slice(0, Y === n ? L : Y)
            }
          } else if (r.indexOf(tn(m), L) != L) {
            var te = F.lastIndexOf(m)
            te > -1 && (F = F.slice(0, te))
          }
          return F + h
        }
        function zx(r) {
          return (r = Ie(r)), r && Ls.test(r) ? r.replace(fu, hw) : r
        }
        var Ux = Ho(function (r, o, a) {
            return r + (a ? ' ' : '') + o.toUpperCase()
          }),
          Zc = Ig('toUpperCase')
        function Tm(r, o, a) {
          return (
            (r = Ie(r)),
            (o = a ? n : o),
            o === n ? (lw(r) ? gw(r) : zu(r)) : r.match(o) || []
          )
        }
        var Am = ge(function (r, o) {
            try {
              return Lt(r, n, o)
            } catch (a) {
              return Yc(a) ? a : new fe(a)
            }
          }),
          Bx = yr(function (r, o) {
            return (
              ct(o, function (a) {
                ;(a = er(a)), mr(r, a, Gc(r[a], r))
              }),
              r
            )
          })
        function $x(r) {
          var o = r == null ? 0 : r.length,
            a = le()
          return (
            (r = o
              ? Le(r, function (h) {
                  if (typeof h[1] != 'function') throw new _n(f)
                  return [a(h[0]), h[1]]
                })
              : []),
            ge(function (h) {
              for (var m = -1; ++m < o; ) {
                var _ = r[m]
                if (Lt(_[0], this, h)) return Lt(_[1], this, h)
              }
            })
          )
        }
        function bx(r) {
          return h_(En(r, O))
        }
        function eh(r) {
          return function () {
            return r
          }
        }
        function Hx(r, o) {
          return r == null || r !== r ? o : r
        }
        var jx = Rg(),
          Vx = Rg(!0)
        function Gt(r) {
          return r
        }
        function th(r) {
          return sg(typeof r == 'function' ? r : En(r, O))
        }
        function Wx(r) {
          return ug(En(r, O))
        }
        function Kx(r, o) {
          return ag(r, En(o, O))
        }
        var Gx = ge(function (r, o) {
            return function (a) {
              return tl(a, r, o)
            }
          }),
          qx = ge(function (r, o) {
            return function (a) {
              return tl(r, a, o)
            }
          })
        function nh(r, o, a) {
          var h = ht(o),
            m = ta(o, h)
          a == null &&
            !(je(o) && (m.length || !h.length)) &&
            ((a = o), (o = r), (r = this), (m = ta(o, ht(o))))
          var _ = !(je(a) && 'chain' in a) || !!a.chain,
            C = _r(r)
          return (
            ct(m, function (L) {
              var F = o[L]
              ;(r[L] = F),
                C &&
                  (r.prototype[L] = function () {
                    var K = this.__chain__
                    if (_ || K) {
                      var G = r(this.__wrapped__),
                        Y = (G.__actions__ = Vt(this.__actions__))
                      return (
                        Y.push({ func: F, args: arguments, thisArg: r }),
                        (G.__chain__ = K),
                        G
                      )
                    }
                    return F.apply(r, Nn([this.value()], arguments))
                  })
            }),
            r
          )
        }
        function Yx() {
          return nt._ === this && (nt._ = Sw), this
        }
        function rh() {}
        function Qx(r) {
          return (
            (r = de(r)),
            ge(function (o) {
              return fg(o, r)
            })
          )
        }
        var Xx = Dc(Le),
          Jx = Dc(Ks),
          Zx = Dc(No)
        function Im(r) {
          return bc(r) ? p(er(r)) : P_(r)
        }
        function eC(r) {
          return function (o) {
            return r == null ? n : ji(r, o)
          }
        }
        var tC = Og(),
          nC = Og(!0)
        function ih() {
          return []
        }
        function oh() {
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
          if (((r = de(r)), r < 1 || r > X)) return []
          var a = me,
            h = _t(r, me)
          ;(o = le(o)), (r -= me)
          for (var m = ke(h, o); ++a < r; ) o(a)
          return m
        }
        function lC(r) {
          return he(r) ? Le(r, er) : nn(r) ? [r] : Vt(qg(Ie(r)))
        }
        function uC(r) {
          var o = ++ww
          return Ie(r) + o
        }
        var aC = la(function (r, o) {
            return r + o
          }, 0),
          fC = Mc('ceil'),
          cC = la(function (r, o) {
            return r / o
          }, 1),
          hC = Mc('floor')
        function dC(r) {
          return r && r.length ? ea(r, Gt, _c) : n
        }
        function pC(r, o) {
          return r && r.length ? ea(r, le(o, 2), _c) : n
        }
        function gC(r) {
          return c(r, Gt)
        }
        function mC(r, o) {
          return c(r, le(o, 2))
        }
        function vC(r) {
          return r && r.length ? ea(r, Gt, Cc) : n
        }
        function yC(r, o) {
          return r && r.length ? ea(r, le(o, 2), Cc) : n
        }
        var wC = la(function (r, o) {
            return r * o
          }, 1),
          _C = Mc('round'),
          SC = la(function (r, o) {
            return r - o
          }, 0)
        function EC(r) {
          return r && r.length ? ee(r, Gt) : 0
        }
        function xC(r, o) {
          return r && r.length ? ee(r, le(o, 2)) : 0
        }
        return (
          (v.after = WS),
          (v.ary = om),
          (v.assign = OE),
          (v.assignIn = wm),
          (v.assignInWith = _a),
          (v.assignWith = NE),
          (v.at = DE),
          (v.before = sm),
          (v.bind = Gc),
          (v.bindAll = Bx),
          (v.bindKey = lm),
          (v.castArray = rE),
          (v.chain = nm),
          (v.chunk = h2),
          (v.compact = d2),
          (v.concat = p2),
          (v.cond = $x),
          (v.conforms = bx),
          (v.constant = eh),
          (v.countBy = ES),
          (v.create = ME),
          (v.curry = um),
          (v.curryRight = am),
          (v.debounce = fm),
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
          (v.flatten = Jg),
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
          (v.iteratee = th),
          (v.keyBy = NS),
          (v.keys = ht),
          (v.keysIn = Kt),
          (v.map = pa),
          (v.mapKeys = QE),
          (v.mapValues = XE),
          (v.matches = Wx),
          (v.matchesProperty = Kx),
          (v.memoize = ma),
          (v.merge = JE),
          (v.mergeWith = _m),
          (v.method = Gx),
          (v.methodOf = qx),
          (v.mixin = nh),
          (v.negate = va),
          (v.nthArg = Qx),
          (v.omit = ZE),
          (v.omitBy = ex),
          (v.once = YS),
          (v.orderBy = DS),
          (v.over = Xx),
          (v.overArgs = QS),
          (v.overEvery = Jx),
          (v.overSome = Zx),
          (v.partial = qc),
          (v.partialRight = cm),
          (v.partition = MS),
          (v.pick = tx),
          (v.pickBy = Sm),
          (v.property = Im),
          (v.propertyOf = eC),
          (v.pull = D2),
          (v.pullAll = em),
          (v.pullAllBy = M2),
          (v.pullAllWith = F2),
          (v.pullAt = z2),
          (v.range = tC),
          (v.rangeRight = nC),
          (v.rearg = XS),
          (v.reject = US),
          (v.remove = U2),
          (v.rest = JS),
          (v.reverse = Wc),
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
          (v.takeRight = Q2),
          (v.takeRightWhile = X2),
          (v.takeWhile = J2),
          (v.tap = dS),
          (v.throttle = eE),
          (v.thru = da),
          (v.toArray = mm),
          (v.toPairs = Em),
          (v.toPairsIn = xm),
          (v.toPath = lC),
          (v.toPlainObject = ym),
          (v.transform = ox),
          (v.unary = tE),
          (v.union = Z2),
          (v.unionBy = eS),
          (v.unionWith = tS),
          (v.uniq = nS),
          (v.uniqBy = rS),
          (v.uniqWith = iS),
          (v.unset = sx),
          (v.unzip = Kc),
          (v.unzipWith = tm),
          (v.update = lx),
          (v.updateWith = ux),
          (v.values = Wo),
          (v.valuesIn = ax),
          (v.without = oS),
          (v.words = Tm),
          (v.wrap = nE),
          (v.xor = sS),
          (v.xorBy = lS),
          (v.xorWith = uS),
          (v.zip = aS),
          (v.zipObject = fS),
          (v.zipObjectDeep = cS),
          (v.zipWith = hS),
          (v.entries = Em),
          (v.entriesIn = xm),
          (v.extend = wm),
          (v.extendWith = _a),
          nh(v, v),
          (v.add = aC),
          (v.attempt = Am),
          (v.camelCase = dx),
          (v.capitalize = Cm),
          (v.ceil = fC),
          (v.clamp = fx),
          (v.clone = iE),
          (v.cloneDeep = sE),
          (v.cloneDeepWith = lE),
          (v.cloneWith = oE),
          (v.conformsTo = uE),
          (v.deburr = km),
          (v.defaultTo = Hx),
          (v.divide = cC),
          (v.endsWith = px),
          (v.eq = Fn),
          (v.escape = gx),
          (v.escapeRegExp = mx),
          (v.every = xS),
          (v.find = kS),
          (v.findIndex = Qg),
          (v.findKey = UE),
          (v.findLast = TS),
          (v.findLastIndex = Xg),
          (v.findLastKey = BE),
          (v.floor = hC),
          (v.forEach = rm),
          (v.forEachRight = im),
          (v.forIn = $E),
          (v.forInRight = bE),
          (v.forOwn = HE),
          (v.forOwnRight = jE),
          (v.get = Xc),
          (v.gt = aE),
          (v.gte = fE),
          (v.has = KE),
          (v.hasIn = Jc),
          (v.head = Zg),
          (v.identity = Gt),
          (v.includes = LS),
          (v.indexOf = T2),
          (v.inRange = cx),
          (v.invoke = YE),
          (v.isArguments = Ki),
          (v.isArray = he),
          (v.isArrayBuffer = cE),
          (v.isArrayLike = Wt),
          (v.isArrayLikeObject = Je),
          (v.isBoolean = hE),
          (v.isBuffer = ni),
          (v.isDate = dE),
          (v.isElement = pE),
          (v.isEmpty = gE),
          (v.isEqual = mE),
          (v.isEqualWith = vE),
          (v.isError = Yc),
          (v.isFinite = yE),
          (v.isFunction = _r),
          (v.isInteger = hm),
          (v.isLength = ya),
          (v.isMap = dm),
          (v.isMatch = wE),
          (v.isMatchWith = _E),
          (v.isNaN = SE),
          (v.isNative = EE),
          (v.isNil = CE),
          (v.isNull = xE),
          (v.isNumber = pm),
          (v.isObject = je),
          (v.isObjectLike = Ye),
          (v.isPlainObject = ll),
          (v.isRegExp = Qc),
          (v.isSafeInteger = kE),
          (v.isSet = gm),
          (v.isString = wa),
          (v.isSymbol = nn),
          (v.isTypedArray = Vo),
          (v.isUndefined = TE),
          (v.isWeakMap = AE),
          (v.isWeakSet = IE),
          (v.join = L2),
          (v.kebabCase = vx),
          (v.last = Cn),
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
          (v.stubArray = ih),
          (v.stubFalse = oh),
          (v.stubObject = rC),
          (v.stubString = iC),
          (v.stubTrue = oC),
          (v.multiply = wC),
          (v.nth = N2),
          (v.noConflict = Yx),
          (v.noop = rh),
          (v.now = ga),
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
          (v.toFinite = Sr),
          (v.toInteger = de),
          (v.toLength = vm),
          (v.toLower = Lx),
          (v.toNumber = kn),
          (v.toSafeInteger = LE),
          (v.toString = Ie),
          (v.toUpper = Ox),
          (v.trim = Nx),
          (v.trimEnd = Dx),
          (v.trimStart = Mx),
          (v.truncate = Fx),
          (v.unescape = zx),
          (v.uniqueId = uC),
          (v.upperCase = Ux),
          (v.upperFirst = Zc),
          (v.each = rm),
          (v.eachRight = im),
          (v.first = Zg),
          nh(
            v,
            (function () {
              var r = {}
              return (
                Jn(v, function (o, a) {
                  Oe.call(v.prototype, a) || (r[a] = o)
                }),
                r
              )
            })(),
            { chain: !1 }
          ),
          (v.VERSION = i),
          ct(
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
          ct(['drop', 'take'], function (r, o) {
            ;(ye.prototype[r] = function (a) {
              a = a === n ? 1 : ut(de(a), 0)
              var h = this.__filtered__ && !o ? new ye(this) : this.clone()
              return (
                h.__filtered__
                  ? (h.__takeCount__ = _t(a, h.__takeCount__))
                  : h.__views__.push({
                      size: _t(a, me),
                      type: r + (h.__dir__ < 0 ? 'Right' : ''),
                    }),
                h
              )
            }),
              (ye.prototype[r + 'Right'] = function (a) {
                return this.reverse()[r](a).reverse()
              })
          }),
          ct(['filter', 'map', 'takeWhile'], function (r, o) {
            var a = o + 1,
              h = a == Xe || a == hn
            ye.prototype[r] = function (m) {
              var _ = this.clone()
              return (
                _.__iteratees__.push({ iteratee: le(m, 3), type: a }),
                (_.__filtered__ = _.__filtered__ || h),
                _
              )
            }
          }),
          ct(['head', 'last'], function (r, o) {
            var a = 'take' + (o ? 'Right' : '')
            ye.prototype[r] = function () {
              return this[a](1).value()[0]
            }
          }),
          ct(['initial', 'tail'], function (r, o) {
            var a = 'drop' + (o ? '' : 'Right')
            ye.prototype[r] = function () {
              return this.__filtered__ ? new ye(this) : this[a](1)
            }
          }),
          (ye.prototype.compact = function () {
            return this.filter(Gt)
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
                  return tl(a, r, o)
                })
          })),
          (ye.prototype.reject = function (r) {
            return this.filter(va(le(r)))
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
          Jn(ye.prototype, function (r, o) {
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
                    var Se = m.apply(v, Nn([ve], L))
                    return h && te ? Se[0] : Se
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
                    ae.__actions__.push({ func: da, args: [Y], thisArg: n }),
                    new Sn(ae, te)
                  )
                }
                return ue && pe
                  ? r.apply(this, L)
                  : ((ae = this.thru(Y)),
                    ue ? (h ? ae.value()[0] : ae.value()) : ae)
              })
          }),
          ct(
            ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
            function (r) {
              var o = Bu[r],
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
          Jn(ye.prototype, function (r, o) {
            var a = v[o]
            if (a) {
              var h = a.name + ''
              Oe.call(Bo, h) || (Bo[h] = []), Bo[h].push({ name: o, func: a })
            }
          }),
          (Bo[sa(n, R).name] = [{ name: 'wrapper', func: n }]),
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
          qs && (v.prototype[qs] = yS),
          v
        )
      },
      Fo = mw()
    Xn ? (((Xn.exports = Fo)._ = Fo), (Kr._ = Fo)) : (nt._ = Fo)
  }).call(ul)
})(If, If.exports)
If.exports
const aI = () =>
  ui.jsx('div', {
    className:
      'flex items-center justify-center h-screen bg-gray-100 text-gray-800',
    children: ui.jsxs('div', {
      className: 'text-center',
      children: [
        ui.jsx('h1', {
          className: 'text-4xl font-bold mb-4',
          children: 'Coming Soon',
        }),
        ui.jsx('p', {
          className: 'text-lg text-gray-600 mb-6',
          children: "We're working hard to bring you something amazing.",
        }),
      ],
    }),
  })
function fI() {
  return ui.jsx(pT, { children: ui.jsx(aI, {}) })
}
const ce = (e) => typeof e == 'string',
  vl = () => {
    let e, t
    const n = new Promise((i, s) => {
      ;(e = i), (t = s)
    })
    return (n.resolve = e), (n.reject = t), n
  },
  fv = (e) => (e == null ? '' : '' + e),
  cI = (e, t, n) => {
    e.forEach((i) => {
      t[i] && (n[i] = t[i])
    })
  },
  hI = /###/g,
  cv = (e) => (e && e.indexOf('###') > -1 ? e.replace(hI, '.') : e),
  hv = (e) => !e || ce(e),
  Nl = (e, t, n) => {
    const i = ce(t) ? t.split('.') : t
    let s = 0
    for (; s < i.length - 1; ) {
      if (hv(e)) return {}
      const u = cv(i[s])
      !e[u] && n && (e[u] = new n()),
        Object.prototype.hasOwnProperty.call(e, u) ? (e = e[u]) : (e = {}),
        ++s
    }
    return hv(e) ? {} : { obj: e, k: cv(i[s]) }
  },
  dv = (e, t, n) => {
    const { obj: i, k: s } = Nl(e, t, Object)
    if (i !== void 0 || t.length === 1) {
      i[s] = n
      return
    }
    let u = t[t.length - 1],
      f = t.slice(0, t.length - 1),
      d = Nl(e, f, Object)
    for (; d.obj === void 0 && f.length; )
      (u = `${f[f.length - 1]}.${u}`),
        (f = f.slice(0, f.length - 1)),
        (d = Nl(e, f, Object)),
        d && d.obj && typeof d.obj[`${d.k}.${u}`] < 'u' && (d.obj = void 0)
    d.obj[`${d.k}.${u}`] = n
  },
  dI = (e, t, n, i) => {
    const { obj: s, k: u } = Nl(e, t, Object)
    ;(s[u] = s[u] || []), s[u].push(n)
  },
  Pf = (e, t) => {
    const { obj: n, k: i } = Nl(e, t)
    if (n) return n[i]
  },
  pI = (e, t, n) => {
    const i = Pf(e, n)
    return i !== void 0 ? i : Pf(t, n)
  },
  tw = (e, t, n) => {
    for (const i in t)
      i !== '__proto__' &&
        i !== 'constructor' &&
        (i in e
          ? ce(e[i]) ||
            e[i] instanceof String ||
            ce(t[i]) ||
            t[i] instanceof String
            ? n && (e[i] = t[i])
            : tw(e[i], t[i], n)
          : (e[i] = t[i]))
    return e
  },
  Go = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
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
  $d = function (e, t) {
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
  Rf = (e) => e && e.replace('_', '-'),
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
class Lf {
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
    return new Lf(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Lf(this.logger, t)
    )
  }
}
var ir = new Lf()
class Yf {
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
        for (let w = 0; w < g; w++) d(...i)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((f) => {
          let [d, g] = f
          for (let w = 0; w < g; w++) d.apply(d, [t, ...i])
        })
  }
}
class pv extends Yf {
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
    const g = Pf(this.data, d)
    return (
      !g &&
        !n &&
        !i &&
        t.indexOf('.') > -1 &&
        ((t = d[0]), (n = d[1]), (i = d.slice(2).join('.'))),
      g || !f || !ce(i)
        ? g
        : $d(this.data && this.data[t] && this.data[t][n], i, u)
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
      dv(this.data, d, s),
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
    let g = Pf(this.data, d) || {}
    f.skipCopy || (i = JSON.parse(JSON.stringify(i))),
      s ? tw(g, i, u) : (g = { ...g, ...i }),
      dv(this.data, d, g),
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
var nw = {
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
const gv = {}
class Of extends Yf {
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
      (this.logger = ir.create('translator'))
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
      const w = t.split(i)
      ;(i !== s || (i === s && this.options.ns.indexOf(w[0]) > -1)) &&
        (u = w.shift()),
        (t = w.join(s))
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
      w = n.lng || this.language,
      P = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (w && w.toLowerCase() === 'cimode') {
      if (P) {
        const j = n.nsSeparator || this.options.nsSeparator
        return s
          ? {
              res: `${g}${j}${f}`,
              usedKey: f,
              exactUsedKey: f,
              usedLng: w,
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
            usedLng: w,
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
          Q = j ? [] : {},
          Z = j ? $ : B
        for (const x in E)
          if (Object.prototype.hasOwnProperty.call(E, x)) {
            const S = `${Z}${u}${x}`
            ;(Q[x] = this.translate(S, { ...n, joinArrays: !1, ns: d })),
              Q[x] === S && (Q[x] = E[x])
          }
        E = Q
      }
    } else if (k && ce(R) && Array.isArray(E))
      (E = E.join(R)), E && (E = this.extendTranslation(E, t, n, i))
    else {
      let j = !1,
        Q = !1
      const Z = n.count !== void 0 && !ce(n.count),
        x = Of.hasDefaultValue(n),
        S = Z ? this.pluralResolver.getSuffix(w, n.count, n) : '',
        T =
          n.ordinal && Z
            ? this.pluralResolver.getSuffix(w, n.count, { ordinal: !1 })
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
        this.isValidLookup(E) || ((Q = !0), (E = f))
      const A =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          Q
            ? void 0
            : E,
        Xe = x && D !== E && this.options.updateMissing
      if (Q || j || Xe) {
        if (
          (this.logger.log(
            Xe ? 'updateKey' : 'missingKey',
            w,
            g,
            f,
            Xe ? D : E
          ),
          u)
        ) {
          const X = this.resolve(f, { ...n, keySeparator: !1 })
          X &&
            X.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let It = []
        const hn = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && hn && hn[0])
          for (let X = 0; X < hn.length; X++) It.push(hn[X])
        else
          this.options.saveMissingTo === 'all'
            ? (It = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : It.push(n.lng || this.language)
        const tt = (X, oe, se) => {
          const me = x && se !== E ? se : A
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(X, g, oe, me, Xe, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(X, g, oe, me, Xe, n),
            this.emit('missingKey', X, g, oe, E)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && Z
            ? It.forEach((X) => {
                const oe = this.pluralResolver.getSuffixes(X, n)
                I &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  oe.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  oe.push(`${this.options.pluralSeparator}zero`),
                  oe.forEach((se) => {
                    tt([X], f + se, n[`defaultValue${se}`] || D)
                  })
              })
            : tt(It, f, D))
      }
      ;(E = this.extendTranslation(E, t, n, O, i)),
        Q &&
          E === f &&
          this.options.appendNamespaceToMissingKey &&
          (E = `${g}:${f}`),
        (Q || j) &&
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
      const w =
        ce(t) &&
        (i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let P
      if (w) {
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
        w)
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
        (t = nw.handle(
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
        const w = this.extractFromKey(g, n),
          P = w.key
        s = P
        let O = w.namespaces
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
            !gv[`${V[0]}-${q}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(d) &&
              ((gv[`${V[0]}-${q}`] = !0),
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
                const Q = `${this.options.pluralSeparator}zero`,
                  Z = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (E &&
                    (k.push(P + j),
                    n.ordinal &&
                      j.indexOf(Z) === 0 &&
                      k.push(P + j.replace(Z, this.options.pluralSeparator)),
                    B && k.push(P + Q)),
                  $)
                ) {
                  const x = `${P}${this.options.contextSeparator}${n.context}`
                  k.push(x),
                    E &&
                      (k.push(x + j),
                      n.ordinal &&
                        j.indexOf(Z) === 0 &&
                        k.push(x + j.replace(Z, this.options.pluralSeparator)),
                      B && k.push(x + Q))
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
const zh = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class mv {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = ir.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = Rf(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = Rf(t)), !t || t.indexOf('-') < 0)) return t
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
              (i[1] = zh(i[1].toLowerCase())))
          : i.length === 3 &&
            ((i[0] = i[0].toLowerCase()),
            i[1].length === 2 && (i[1] = i[1].toUpperCase()),
            i[0] !== 'sgn' && i[2].length === 2 && (i[2] = i[2].toUpperCase()),
            n.indexOf(i[1].toLowerCase()) > -1 &&
              (i[1] = zh(i[1].toLowerCase())),
            n.indexOf(i[2].toLowerCase()) > -1 &&
              (i[2] = zh(i[2].toLowerCase()))),
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
  vv = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
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
      (this.logger = ir.create('pluralResolver')),
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
        const i = Rf(t === 'dev' ? 'en' : t),
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
            .pluralCategories.sort((s, u) => vv[s] - vv[u])
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
const yv = function (e, t, n) {
    let i =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      u = pI(e, t, n)
    return (
      !u &&
        s &&
        ce(n) &&
        ((u = $d(e, n, i)), u === void 0 && (u = $d(t, n, i))),
      u
    )
  },
  Uh = (e) => e.replace(/\$/g, '$$$$')
class II {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = ir.create('interpolator')),
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
      formatSeparator: w,
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
      (this.prefix = u ? Go(u) : f || '{{'),
      (this.suffix = d ? Go(d) : g || '}}'),
      (this.formatSeparator = w || ','),
      (this.unescapePrefix = P ? '' : O || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : P || ''),
      (this.nestingPrefix = E ? Go(E) : B || Go('$t(')),
      (this.nestingSuffix = $ ? Go($) : V || Go(')')),
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
      w = (B) => {
        if (B.indexOf(this.formatSeparator) < 0) {
          const R = yv(
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
          yv(
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
        { regex: this.regexpUnescape, safeValue: (B) => Uh(B) },
        {
          regex: this.regexp,
          safeValue: (B) => (this.escapeValue ? Uh(this.escape(B)) : Uh(B)),
        },
      ].forEach((B) => {
        for (d = 0; (u = B.regex.exec(t)); ) {
          const $ = u[1].trim()
          if (((f = w($)), f === void 0))
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
          else !ce(f) && !this.useRawValueToEscape && (f = fv(f))
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
    const d = (g, w) => {
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
        ;(f = JSON.parse(E)), w && (f = { ...w, ...f })
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
      let w = !1
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const P = s[1].split(this.formatSeparator).map((O) => O.trim())
        ;(s[1] = P.shift()), (g = P), (w = !0)
      }
      if (((u = n(d.call(this, s[1].trim(), f), f)), u && s[0] === t && !ce(u)))
        return u
      ce(u) || (u = fv(u)),
        u ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),
          (u = '')),
        w &&
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
                w = g
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                P = d.trim()
              n[P] || (n[P] = w),
                w === 'false' && (n[P] = !1),
                w === 'true' && (n[P] = !0),
                isNaN(w) || (n[P] = parseInt(w, 10))
            }
          })
    }
    return { formatName: t, formatOptions: n }
  },
  qo = (e) => {
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
      return d || ((d = e(Rf(i), s)), (t[f] = d)), d(n)
    }
  }
class RI {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = ir.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: qo((n, i) => {
          const s = new Intl.NumberFormat(n, { ...i })
          return (u) => s.format(u)
        }),
        currency: qo((n, i) => {
          const s = new Intl.NumberFormat(n, { ...i, style: 'currency' })
          return (u) => s.format(u)
        }),
        datetime: qo((n, i) => {
          const s = new Intl.DateTimeFormat(n, { ...i })
          return (u) => s.format(u)
        }),
        relativetime: qo((n, i) => {
          const s = new Intl.RelativeTimeFormat(n, { ...i })
          return (u) => s.format(u, i.range || 'day')
        }),
        list: qo((n, i) => {
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
    this.formats[t.toLowerCase().trim()] = qo(n)
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
      const { formatName: w, formatOptions: P } = PI(g)
      if (this.formats[w]) {
        let O = d
        try {
          const E =
              (s && s.formatParams && s.formatParams[s.interpolationkey]) || {},
            B = E.locale || E.lng || s.locale || s.lng || i
          O = this.formats[w](d, B, { ...P, ...s, ...E })
        } catch (E) {
          this.logger.warn(E)
        }
        return O
      } else this.logger.warn(`there was no format function for ${w}`)
      return d
    }, t)
  }
}
const LI = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class OI extends Yf {
  constructor(t, n, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = i),
      (this.languageUtils = i.languageUtils),
      (this.options = s),
      (this.logger = ir.create('backendConnector')),
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
      t.forEach((w) => {
        let P = !0
        n.forEach((O) => {
          const E = `${w}|${O}`
          !i.reload && this.store.hasResourceBundle(w, O)
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
          P || (d[w] = !0)
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
    const d = (w, P) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const O = this.waitingReads.shift()
          this.read(O.lng, O.ns, O.fcName, O.tried, O.wait, O.callback)
        }
        if (w && P && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, i, s + 1, u * 2, f)
          }, u)
          return
        }
        f(w, P)
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
          w = this.backend.create.bind(this.backend)
        if (w.length < 6)
          try {
            let P
            w.length === 5 ? (P = w(t, n, i, s, g)) : (P = w(t, n, i, s)),
              P && typeof P.then == 'function'
                ? P.then((O) => d(null, O)).catch(d)
                : d(null, P)
          } catch (P) {
            d(P)
          }
        else w(t, n, i, s, d, g)
      }
      !t || !t[0] || this.store.addResource(t[0], n, i, s)
    }
  }
}
const wv = () => ({
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
  _v = (e) => (
    ce(e.ns) && (e.ns = [e.ns]),
    ce(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    ce(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  Ba = () => {},
  NI = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == 'function' && (e[n] = e[n].bind(e))
    })
  }
class Zl extends Yf {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = _v(t)),
      (this.services = {}),
      (this.logger = ir),
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
    const s = wv()
    ;(this.options = { ...s, ...this.options, ..._v(n) }),
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
        ? ir.init(u(this.modules.logger), this.options)
        : ir.init(null, this.options)
      let P
      this.modules.formatter
        ? (P = this.modules.formatter)
        : typeof Intl < 'u' && (P = RI)
      const O = new mv(this.options)
      this.store = new pv(this.options.resources, this.options)
      const E = this.services
      ;(E.logger = ir),
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
        (this.translator = new Of(this.services, this.options)),
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
      i || (i = Ba),
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
    const g = vl(),
      w = () => {
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
        ? w()
        : setTimeout(w, 0),
      g
    )
  }
  loadResources(t) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ba
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
          this.services.languageUtils.toResolveHierarchy(d).forEach((w) => {
            w !== 'cimode' && u.indexOf(w) < 0 && u.push(w)
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
    const s = vl()
    return (
      typeof t == 'function' && ((i = t), (t = void 0)),
      typeof n == 'function' && ((i = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      i || (i = Ba),
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
      t.type === 'postProcessor' && nw.addPostProcessor(t),
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
    const s = vl()
    this.emit('languageChanging', t)
    const u = (g) => {
        ;(this.language = g),
          (this.languages = this.services.languageUtils.toResolveHierarchy(g)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(g)
      },
      f = (g, w) => {
        w
          ? (u(w),
            this.translator.changeLanguage(w),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', w),
            this.logger.log('languageChanged', w))
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
        const w = ce(g)
          ? g
          : this.services.languageUtils.getBestMatchFromCodes(g)
        w &&
          (this.language || u(w),
          this.translator.language || this.translator.changeLanguage(w),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(w)),
          this.loadResources(w, (P) => {
            f(P, w)
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
          var w = arguments.length, P = new Array(w > 2 ? w - 2 : 0), O = 2;
          O < w;
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
      const w = this.services.backendConnector.state[`${d}|${g}`]
      return w === -1 || w === 0 || w === 2
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
    const i = vl()
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
    const i = vl()
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
      i = (this.services && this.services.languageUtils) || new mv(wv())
    return n.indexOf(i.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    return new Zl(t, n)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ba
    const i = t.forkResourceStore
    i && delete t.forkResourceStore
    const s = { ...this.options, ...t, isClone: !0 },
      u = new Zl(s)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (u.logger = u.logger.clone(t)),
      ['store', 'services', 'language'].forEach((d) => {
        u[d] = this[d]
      }),
      (u.services = { ...this.services }),
      (u.services.utils = { hasLoadedNamespace: u.hasLoadedNamespace.bind(u) }),
      i &&
        ((u.store = new pv(this.store.data, s)),
        (u.services.resourceStore = u.store)),
      (u.translator = new Of(u.services, s)),
      u.translator.on('*', function (d) {
        for (
          var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), P = 1;
          P < g;
          P++
        )
          w[P - 1] = arguments[P]
        u.emit(d, ...w)
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
const At = Zl.createInstance()
At.createInstance = Zl.createInstance
At.createInstance
At.dir
At.init
At.loadResources
At.reloadResources
At.use
At.changeLanguage
At.getFixedT
At.t
At.exists
At.setDefaultNamespace
At.hasLoadedNamespace
At.loadNamespaces
At.loadLanguages
At.use(rT).init({
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
Bh.createRoot(document.getElementById('root')).render(
  ui.jsx(Rv.StrictMode, { children: ui.jsx(fI, {}) })
)
