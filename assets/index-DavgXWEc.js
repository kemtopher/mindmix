(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const s = {};
    return (
      l.integrity && (s.integrity = l.integrity),
      l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const s = n(l);
    fetch(l.href, s);
  }
})();
var Ja = { exports: {} },
  ol = {},
  eo = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr = Symbol.for('react.element'),
  gc = Symbol.for('react.portal'),
  wc = Symbol.for('react.fragment'),
  Nc = Symbol.for('react.strict_mode'),
  jc = Symbol.for('react.profiler'),
  kc = Symbol.for('react.provider'),
  Sc = Symbol.for('react.context'),
  Ec = Symbol.for('react.forward_ref'),
  Cc = Symbol.for('react.suspense'),
  _c = Symbol.for('react.memo'),
  Pc = Symbol.for('react.lazy'),
  Hi = Symbol.iterator;
function Mc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hi && e[Hi]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var to = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  no = Object.assign,
  ro = {};
function cn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ro),
    (this.updater = n || to));
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function lo() {}
lo.prototype = cn.prototype;
function Gs(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ro),
    (this.updater = n || to));
}
var Xs = (Gs.prototype = new lo());
Xs.constructor = Gs;
no(Xs, cn.prototype);
Xs.isPureReactComponent = !0;
var Qi = Array.isArray,
  so = Object.prototype.hasOwnProperty,
  Zs = { current: null },
  io = { key: !0, ref: !0, __self: !0, __source: !0 };
function ao(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      so.call(t, r) && !io.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), d = 0; d < o; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: tr,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: Zs.current,
  };
}
function Tc(e, t) {
  return {
    $$typeof: tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qs(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === tr;
}
function zc(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ki = /\/+/g;
function _l(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? zc('' + e.key)
    : t.toString(36);
}
function Cr(e, t, n, r, l) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case tr:
          case gc:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === '' ? '.' + _l(a, 0) : r),
      Qi(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ki, '$&/') + '/'),
          Cr(l, t, n, '', function (d) {
            return d;
          }))
        : l != null &&
          (qs(l) &&
            (l = Tc(
              l,
              n +
                (!l.key || (a && a.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ki, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Qi(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var u = r + _l(s, o);
      a += Cr(s, t, n, u, l);
    }
  else if (((u = Mc(e)), typeof u == 'function'))
    for (e = u.call(e), o = 0; !(s = e.next()).done; )
      ((s = s.value), (u = r + _l(s, o++)), (a += Cr(s, t, n, u, l)));
  else if (s === 'object')
    throw (
      (t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      )
    );
  return a;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Cr(e, r, '', '', function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function Lc(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  _r = { transition: null },
  Ic = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: _r,
    ReactCurrentOwner: Zs,
  };
function oo() {
  throw Error('act(...) is not supported in production builds of React.');
}
T.Children = {
  map: or,
  forEach: function (e, t, n) {
    or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qs(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
T.Component = cn;
T.Fragment = wc;
T.Profiler = jc;
T.PureComponent = Gs;
T.StrictMode = Nc;
T.Suspense = Cc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ic;
T.act = oo;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = no({}, e.props),
    l = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Zs.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      so.call(t, u) &&
        !io.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var d = 0; d < u; d++) o[d] = arguments[d + 2];
    r.children = o;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ao;
T.createFactory = function (e) {
  var t = ao.bind(null, e);
  return ((t.type = e), t);
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Ec, render: e };
};
T.isValidElement = qs;
T.lazy = function (e) {
  return { $$typeof: Pc, _payload: { _status: -1, _result: e }, _init: Lc };
};
T.memo = function (e, t) {
  return { $$typeof: _c, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = _r.transition;
  _r.transition = {};
  try {
    e();
  } finally {
    _r.transition = t;
  }
};
T.unstable_act = oo;
T.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ce.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
T.useId = function () {
  return ce.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ce.current.useRef(e);
};
T.useState = function (e) {
  return ce.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ce.current.useTransition();
};
T.version = '18.3.1';
eo.exports = T;
var O = eo.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc = O,
  Oc = Symbol.for('react.element'),
  Dc = Symbol.for('react.fragment'),
  Fc = Object.prototype.hasOwnProperty,
  Ac = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function uo(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  (n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) Fc.call(t, r) && !Uc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Oc,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: Ac.current,
  };
}
ol.Fragment = Dc;
ol.jsx = uo;
ol.jsxs = uo;
Ja.exports = ol;
var i = Ja.exports,
  co = { exports: {} },
  je = {},
  fo = { exports: {} },
  mo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(S, P) {
    var M = S.length;
    S.push(P);
    e: for (; 0 < M; ) {
      var K = (M - 1) >>> 1,
        Z = S[K];
      if (0 < l(Z, P)) ((S[K] = P), (S[M] = Z), (M = K));
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var P = S[0],
      M = S.pop();
    if (M !== P) {
      S[0] = M;
      e: for (var K = 0, Z = S.length, ir = Z >>> 1; K < ir; ) {
        var wt = 2 * (K + 1) - 1,
          Cl = S[wt],
          Nt = wt + 1,
          ar = S[Nt];
        if (0 > l(Cl, M))
          Nt < Z && 0 > l(ar, Cl)
            ? ((S[K] = ar), (S[Nt] = M), (K = Nt))
            : ((S[K] = Cl), (S[wt] = M), (K = wt));
        else if (Nt < Z && 0 > l(ar, M)) ((S[K] = ar), (S[Nt] = M), (K = Nt));
        else break e;
      }
    }
    return P;
  }
  function l(S, P) {
    var M = S.sortIndex - P.sortIndex;
    return M !== 0 ? M : S.id - P.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var u = [],
    d = [],
    x = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    N = !1,
    U = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(S) {
    for (var P = n(d); P !== null; ) {
      if (P.callback === null) r(d);
      else if (P.startTime <= S)
        (r(d), (P.sortIndex = P.expirationTime), t(u, P));
      else break;
      P = n(d);
    }
  }
  function v(S) {
    if (((N = !1), m(S), !w))
      if (n(u) !== null) ((w = !0), Sl(k));
      else {
        var P = n(d);
        P !== null && El(v, P.startTime - S);
      }
  }
  function k(S, P) {
    ((w = !1), N && ((N = !1), f(_), (_ = -1)), (g = !0));
    var M = p;
    try {
      for (
        m(P), h = n(u);
        h !== null && (!(h.expirationTime > P) || (S && !Te()));

      ) {
        var K = h.callback;
        if (typeof K == 'function') {
          ((h.callback = null), (p = h.priorityLevel));
          var Z = K(h.expirationTime <= P);
          ((P = e.unstable_now()),
            typeof Z == 'function' ? (h.callback = Z) : h === n(u) && r(u),
            m(P));
        } else r(u);
        h = n(u);
      }
      if (h !== null) var ir = !0;
      else {
        var wt = n(d);
        (wt !== null && El(v, wt.startTime - P), (ir = !1));
      }
      return ir;
    } finally {
      ((h = null), (p = M), (g = !1));
    }
  }
  var E = !1,
    C = null,
    _ = -1,
    Q = 5,
    z = -1;
  function Te() {
    return !(e.unstable_now() - z < Q);
  }
  function mn() {
    if (C !== null) {
      var S = e.unstable_now();
      z = S;
      var P = !0;
      try {
        P = C(!0, S);
      } finally {
        P ? pn() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var pn;
  if (typeof c == 'function')
    pn = function () {
      c(mn);
    };
  else if (typeof MessageChannel < 'u') {
    var Wi = new MessageChannel(),
      yc = Wi.port2;
    ((Wi.port1.onmessage = mn),
      (pn = function () {
        yc.postMessage(null);
      }));
  } else
    pn = function () {
      U(mn, 0);
    };
  function Sl(S) {
    ((C = S), E || ((E = !0), pn()));
  }
  function El(S, P) {
    _ = U(function () {
      S(e.unstable_now());
    }, P);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Sl(k));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (Q = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (S) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var M = p;
      p = P;
      try {
        return S();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, P) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var M = p;
      p = S;
      try {
        return P();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (S, P, M) {
      var K = e.unstable_now();
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? K + M : K))
          : (M = K),
        S)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = M + Z),
        (S = {
          id: x++,
          callback: P,
          priorityLevel: S,
          startTime: M,
          expirationTime: Z,
          sortIndex: -1,
        }),
        M > K
          ? ((S.sortIndex = M),
            t(d, S),
            n(u) === null &&
              S === n(d) &&
              (N ? (f(_), (_ = -1)) : (N = !0), El(v, M - K)))
          : ((S.sortIndex = Z), t(u, S), w || g || ((w = !0), Sl(k))),
        S
      );
    }),
    (e.unstable_shouldYield = Te),
    (e.unstable_wrapCallback = function (S) {
      var P = p;
      return function () {
        var M = p;
        p = P;
        try {
          return S.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    }));
})(mo);
fo.exports = mo;
var $c = fo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc = O,
  Ne = $c;
function y(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var po = new Set(),
  Fn = {};
function Rt(e, t) {
  (nn(e, t), nn(e + 'Capture', t));
}
function nn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) po.add(t[e]);
}
var Ge = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ns = Object.prototype.hasOwnProperty,
  Vc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yi = {},
  bi = {};
function Wc(e) {
  return ns.call(bi, e)
    ? !0
    : ns.call(Yi, e)
      ? !1
      : Vc.test(e)
        ? (bi[e] = !0)
        : ((Yi[e] = !0), !1);
}
function Hc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Qc(e, t, n, r) {
  if (t === null || typeof t > 'u' || Hc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, l, s, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a));
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Js = /[\-:]([a-z])/g;
function ei(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Js, ei);
    ne[t] = new de(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Js, ei);
    ne[t] = new de(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Js, ei);
  ne[t] = new de(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ti(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Qc(t, n, l, r) && (n = null),
    r || l === null
      ? Wc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ur = Symbol.for('react.element'),
  At = Symbol.for('react.portal'),
  Ut = Symbol.for('react.fragment'),
  ni = Symbol.for('react.strict_mode'),
  rs = Symbol.for('react.profiler'),
  ho = Symbol.for('react.provider'),
  xo = Symbol.for('react.context'),
  ri = Symbol.for('react.forward_ref'),
  ls = Symbol.for('react.suspense'),
  ss = Symbol.for('react.suspense_list'),
  li = Symbol.for('react.memo'),
  tt = Symbol.for('react.lazy'),
  vo = Symbol.for('react.offscreen'),
  Gi = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Gi && e[Gi]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var W = Object.assign,
  Pl;
function Sn(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || '';
    }
  return (
    `
` +
    Pl +
    e
  );
}
var Ml = !1;
function Tl(e, t) {
  if (!e || Ml) return '';
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == 'string') {
      for (
        var l = d.stack.split(`
`),
          s = r.stack.split(`
`),
          a = l.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && l[a] !== s[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (l[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || l[a] !== s[o])) {
                var u =
                  `
` + l[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    ((Ml = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? Sn(e) : '';
}
function Kc(e) {
  switch (e.tag) {
    case 5:
      return Sn(e.type);
    case 16:
      return Sn('Lazy');
    case 13:
      return Sn('Suspense');
    case 19:
      return Sn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ((e = Tl(e.type, !1)), e);
    case 11:
      return ((e = Tl(e.type.render, !1)), e);
    case 1:
      return ((e = Tl(e.type, !0)), e);
    default:
      return '';
  }
}
function is(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ut:
      return 'Fragment';
    case At:
      return 'Portal';
    case rs:
      return 'Profiler';
    case ni:
      return 'StrictMode';
    case ls:
      return 'Suspense';
    case ss:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case xo:
        return (e.displayName || 'Context') + '.Consumer';
      case ho:
        return (e._context.displayName || 'Context') + '.Provider';
      case ri:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case li:
        return (
          (t = e.displayName || null),
          t !== null ? t : is(e.type) || 'Memo'
        );
      case tt:
        ((t = e._payload), (e = e._init));
        try {
          return is(e(t));
        } catch {}
    }
  return null;
}
function Yc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return is(t);
    case 8:
      return t === ni ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function yo(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function bc(e) {
  var t = yo(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (a) {
          ((r = '' + a), s.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = bc(e));
}
function go(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = yo(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function as(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xi(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    }));
}
function wo(e, t) {
  ((t = t.checked), t != null && ti(e, 'checked', t, !1));
}
function os(e, t) {
  wo(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  (t.hasOwnProperty('value')
    ? us(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && us(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Zi(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n));
}
function us(e, t, n) {
  (t !== 'number' || Ar(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var En = Array.isArray;
function Xt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = '' + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function cs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function qi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (En(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ''), (n = t));
  }
  e._wrapperState = { initialValue: ht(n) };
}
function No(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function Ji(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function jo(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ds(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? jo(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var dr,
  ko = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        dr = dr || document.createElement('div'),
          dr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = dr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function An(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
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
  Gc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Pn).forEach(function (e) {
  Gc.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]));
  });
});
function So(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Eo(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = So(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Xc = W(
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
);
function fs(e, t) {
  if (t) {
    if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(y(62));
  }
}
function ms(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ps = null;
function si(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hs = null,
  Zt = null,
  qt = null;
function ea(e) {
  if ((e = lr(e))) {
    if (typeof hs != 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ml(t)), hs(e.stateNode, e.type, t));
  }
}
function Co(e) {
  Zt ? (qt ? qt.push(e) : (qt = [e])) : (Zt = e);
}
function _o() {
  if (Zt) {
    var e = Zt,
      t = qt;
    if (((qt = Zt = null), ea(e), t)) for (e = 0; e < t.length; e++) ea(t[e]);
  }
}
function Po(e, t) {
  return e(t);
}
function Mo() {}
var zl = !1;
function To(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return Po(e, t, n);
  } finally {
    ((zl = !1), (Zt !== null || qt !== null) && (Mo(), _o()));
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ml(n);
  if (r === null) return null;
  n = r[t];
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
  return n;
}
var xs = !1;
if (Ge)
  try {
    var xn = {};
    (Object.defineProperty(xn, 'passive', {
      get: function () {
        xs = !0;
      },
    }),
      window.addEventListener('test', xn, xn),
      window.removeEventListener('test', xn, xn));
  } catch {
    xs = !1;
  }
function Zc(e, t, n, r, l, s, a, o, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (x) {
    this.onError(x);
  }
}
var Mn = !1,
  Ur = null,
  $r = !1,
  vs = null,
  qc = {
    onError: function (e) {
      ((Mn = !0), (Ur = e));
    },
  };
function Jc(e, t, n, r, l, s, a, o, u) {
  ((Mn = !1), (Ur = null), Zc.apply(qc, arguments));
}
function ed(e, t, n, r, l, s, a, o, u) {
  if ((Jc.apply(this, arguments), Mn)) {
    if (Mn) {
      var d = Ur;
      ((Mn = !1), (Ur = null));
    } else throw Error(y(198));
    $r || (($r = !0), (vs = d));
  }
}
function Ot(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zo(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ta(e) {
  if (Ot(e) !== e) throw Error(y(188));
}
function td(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ot(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var s = l.alternate;
    if (s === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === s.child) {
      for (s = l.child; s; ) {
        if (s === n) return (ta(l), e);
        if (s === r) return (ta(l), t);
        s = s.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) ((n = l), (r = s));
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          ((a = !0), (n = l), (r = s));
          break;
        }
        if (o === r) {
          ((a = !0), (r = l), (n = s));
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            ((a = !0), (n = s), (r = l));
            break;
          }
          if (o === r) {
            ((a = !0), (r = s), (n = l));
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Lo(e) {
  return ((e = td(e)), e !== null ? Io(e) : null);
}
function Io(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Io(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ro = Ne.unstable_scheduleCallback,
  na = Ne.unstable_cancelCallback,
  nd = Ne.unstable_shouldYield,
  rd = Ne.unstable_requestPaint,
  Y = Ne.unstable_now,
  ld = Ne.unstable_getCurrentPriorityLevel,
  ii = Ne.unstable_ImmediatePriority,
  Oo = Ne.unstable_UserBlockingPriority,
  Br = Ne.unstable_NormalPriority,
  sd = Ne.unstable_LowPriority,
  Do = Ne.unstable_IdlePriority,
  ul = null,
  Ve = null;
function id(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == 'function')
    try {
      Ve.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : ud,
  ad = Math.log,
  od = Math.LN2;
function ud(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((ad(e) / od) | 0)) | 0);
}
var fr = 64,
  mr = 4194304;
function Cn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? (r = Cn(o)) : ((s &= a), s !== 0 && (r = Cn(s)));
  } else ((a = n & ~l), a !== 0 ? (r = Cn(a)) : s !== 0 && (r = Cn(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function cd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - Oe(s),
      o = 1 << a,
      u = l[a];
    (u === -1
      ? (!(o & n) || o & r) && (l[a] = cd(o, t))
      : u <= t && (e.expiredLanes |= o),
      (s &= ~o));
  }
}
function ys(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fo() {
  var e = fr;
  return ((fr <<= 1), !(fr & 4194240) && (fr = 64), e);
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n));
}
function fd(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      s = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s));
  }
}
function ai(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var I = 0;
function Ao(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Uo,
  oi,
  $o,
  Bo,
  Vo,
  gs = !1,
  pr = [],
  at = null,
  ot = null,
  ut = null,
  $n = new Map(),
  Bn = new Map(),
  rt = [],
  md =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function ra(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      at = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ot = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ut = null;
      break;
    case 'pointerover':
    case 'pointerout':
      $n.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Bn.delete(t.pointerId);
  }
}
function vn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = lr(t)), t !== null && oi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function pd(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return ((at = vn(at, e, t, n, r, l)), !0);
    case 'dragenter':
      return ((ot = vn(ot, e, t, n, r, l)), !0);
    case 'mouseover':
      return ((ut = vn(ut, e, t, n, r, l)), !0);
    case 'pointerover':
      var s = l.pointerId;
      return ($n.set(s, vn($n.get(s) || null, e, t, n, r, l)), !0);
    case 'gotpointercapture':
      return (
        (s = l.pointerId),
        Bn.set(s, vn(Bn.get(s) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Wo(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zo(n)), t !== null)) {
          ((e.blockedOn = t),
            Vo(e.priority, function () {
              $o(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ps = r), n.target.dispatchEvent(r), (ps = null));
    } else return ((t = lr(n)), t !== null && oi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function la(e, t, n) {
  Pr(e) && n.delete(t);
}
function hd() {
  ((gs = !1),
    at !== null && Pr(at) && (at = null),
    ot !== null && Pr(ot) && (ot = null),
    ut !== null && Pr(ut) && (ut = null),
    $n.forEach(la),
    Bn.forEach(la));
}
function yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gs ||
      ((gs = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, hd)));
}
function Vn(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < pr.length) {
    yn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && yn(at, e),
      ot !== null && yn(ot, e),
      ut !== null && yn(ut, e),
      $n.forEach(t),
      Bn.forEach(t),
      n = 0;
    n < rt.length;
    n++
  )
    ((r = rt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < rt.length && ((n = rt[0]), n.blockedOn === null); )
    (Wo(n), n.blockedOn === null && rt.shift());
}
var Jt = Je.ReactCurrentBatchConfig,
  Wr = !0;
function xd(e, t, n, r) {
  var l = I,
    s = Jt.transition;
  Jt.transition = null;
  try {
    ((I = 1), ui(e, t, n, r));
  } finally {
    ((I = l), (Jt.transition = s));
  }
}
function vd(e, t, n, r) {
  var l = I,
    s = Jt.transition;
  Jt.transition = null;
  try {
    ((I = 4), ui(e, t, n, r));
  } finally {
    ((I = l), (Jt.transition = s));
  }
}
function ui(e, t, n, r) {
  if (Wr) {
    var l = ws(e, t, n, r);
    if (l === null) (Vl(e, t, r, Hr, n), ra(e, r));
    else if (pd(l, e, t, n, r)) r.stopPropagation();
    else if ((ra(e, r), t & 4 && -1 < md.indexOf(e))) {
      for (; l !== null; ) {
        var s = lr(l);
        if (
          (s !== null && Uo(s),
          (s = ws(e, t, n, r)),
          s === null && Vl(e, t, r, Hr, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Hr = null;
function ws(e, t, n, r) {
  if (((Hr = null), (e = si(r)), (e = St(e)), e !== null))
    if (((t = Ot(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zo(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Hr = e), null);
}
function Ho(e) {
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
      return 1;
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
      return 4;
    case 'message':
      switch (ld()) {
        case ii:
          return 1;
        case Oo:
          return 4;
        case Br:
        case sd:
          return 16;
        case Do:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null,
  ci = null,
  Mr = null;
function Qo() {
  if (Mr) return Mr;
  var e,
    t = ci,
    n = t.length,
    r,
    l = 'value' in st ? st.value : st.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++);
  return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Tr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hr() {
  return !0;
}
function sa() {
  return !1;
}
function ke(e) {
  function t(n, r, l, s, a) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? hr
        : sa),
      (this.isPropagationStopped = sa),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = hr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = hr));
      },
      persist: function () {},
      isPersistent: hr,
    }),
    t
  );
}
var dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  di = ke(dn),
  rr = W({}, dn, { view: 0, detail: 0 }),
  yd = ke(rr),
  Il,
  Rl,
  gn,
  cl = W({}, rr, {
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
    getModifierState: fi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== gn &&
            (gn && e.type === 'mousemove'
              ? ((Il = e.screenX - gn.screenX), (Rl = e.screenY - gn.screenY))
              : (Rl = Il = 0),
            (gn = e)),
          Il);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Rl;
    },
  }),
  ia = ke(cl),
  gd = W({}, cl, { dataTransfer: 0 }),
  wd = ke(gd),
  Nd = W({}, rr, { relatedTarget: 0 }),
  Ol = ke(Nd),
  jd = W({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kd = ke(jd),
  Sd = W({}, dn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ed = ke(Sd),
  Cd = W({}, dn, { data: 0 }),
  aa = ke(Cd),
  _d = {
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
  Pd = {
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
  Md = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Td(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Md[e]) ? !!t[e] : !1;
}
function fi() {
  return Td;
}
var zd = W({}, rr, {
    key: function (e) {
      if (e.key) {
        var t = _d[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Tr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Pd[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fi,
    charCode: function (e) {
      return e.type === 'keypress' ? Tr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Tr(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Ld = ke(zd),
  Id = W({}, cl, {
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
  oa = ke(Id),
  Rd = W({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fi,
  }),
  Od = ke(Rd),
  Dd = W({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fd = ke(Dd),
  Ad = W({}, cl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ud = ke(Ad),
  $d = [9, 13, 27, 32],
  mi = Ge && 'CompositionEvent' in window,
  Tn = null;
Ge && 'documentMode' in document && (Tn = document.documentMode);
var Bd = Ge && 'TextEvent' in window && !Tn,
  Ko = Ge && (!mi || (Tn && 8 < Tn && 11 >= Tn)),
  ua = ' ',
  ca = !1;
function Yo(e, t) {
  switch (e) {
    case 'keyup':
      return $d.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function bo(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var $t = !1;
function Vd(e, t) {
  switch (e) {
    case 'compositionend':
      return bo(t);
    case 'keypress':
      return t.which !== 32 ? null : ((ca = !0), ua);
    case 'textInput':
      return ((e = t.data), e === ua && ca ? null : e);
    default:
      return null;
  }
}
function Wd(e, t) {
  if ($t)
    return e === 'compositionend' || (!mi && Yo(e, t))
      ? ((e = Qo()), (Mr = ci = st = null), ($t = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ko && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Hd = {
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
};
function da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Hd[e.type] : t === 'textarea';
}
function Go(e, t, n, r) {
  (Co(r),
    (t = Qr(t, 'onChange')),
    0 < t.length &&
      ((n = new di('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t })));
}
var zn = null,
  Wn = null;
function Qd(e) {
  iu(e, 0);
}
function dl(e) {
  var t = Wt(e);
  if (go(t)) return e;
}
function Kd(e, t) {
  if (e === 'change') return t;
}
var Xo = !1;
if (Ge) {
  var Dl;
  if (Ge) {
    var Fl = 'oninput' in document;
    if (!Fl) {
      var fa = document.createElement('div');
      (fa.setAttribute('oninput', 'return;'),
        (Fl = typeof fa.oninput == 'function'));
    }
    Dl = Fl;
  } else Dl = !1;
  Xo = Dl && (!document.documentMode || 9 < document.documentMode);
}
function ma() {
  zn && (zn.detachEvent('onpropertychange', Zo), (Wn = zn = null));
}
function Zo(e) {
  if (e.propertyName === 'value' && dl(Wn)) {
    var t = [];
    (Go(t, Wn, e, si(e)), To(Qd, t));
  }
}
function Yd(e, t, n) {
  e === 'focusin'
    ? (ma(), (zn = t), (Wn = n), zn.attachEvent('onpropertychange', Zo))
    : e === 'focusout' && ma();
}
function bd(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return dl(Wn);
}
function Gd(e, t) {
  if (e === 'click') return dl(t);
}
function Xd(e, t) {
  if (e === 'input' || e === 'change') return dl(t);
}
function Zd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == 'function' ? Object.is : Zd;
function Hn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ns.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function pa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ha(e, t) {
  var n = pa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pa(n);
  }
}
function qo(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? qo(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Jo() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
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
  );
}
function qd(e) {
  var t = Jo(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qo(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          s = Math.min(r.start, l);
        ((r = r.end === void 0 ? s : Math.min(r.end, l)),
          !e.extend && s > r && ((l = r), (r = s), (s = l)),
          (l = ha(n, s)));
        var a = ha(n, r);
        l &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Jd = Ge && 'documentMode' in document && 11 >= document.documentMode,
  Bt = null,
  Ns = null,
  Ln = null,
  js = !1;
function xa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  js ||
    Bt == null ||
    Bt !== Ar(r) ||
    ((r = Bt),
    'selectionStart' in r && pi(r)
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
    (Ln && Hn(Ln, r)) ||
      ((Ln = r),
      (r = Qr(Ns, 'onSelect')),
      0 < r.length &&
        ((t = new di('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Bt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Vt = {
    animationend: xr('Animation', 'AnimationEnd'),
    animationiteration: xr('Animation', 'AnimationIteration'),
    animationstart: xr('Animation', 'AnimationStart'),
    transitionend: xr('Transition', 'TransitionEnd'),
  },
  Al = {},
  eu = {};
Ge &&
  ((eu = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  'TransitionEvent' in window || delete Vt.transitionend.transition);
function fl(e) {
  if (Al[e]) return Al[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in eu) return (Al[e] = t[n]);
  return e;
}
var tu = fl('animationend'),
  nu = fl('animationiteration'),
  ru = fl('animationstart'),
  lu = fl('transitionend'),
  su = new Map(),
  va =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function vt(e, t) {
  (su.set(e, t), Rt(t, [e]));
}
for (var Ul = 0; Ul < va.length; Ul++) {
  var $l = va[Ul],
    ef = $l.toLowerCase(),
    tf = $l[0].toUpperCase() + $l.slice(1);
  vt(ef, 'on' + tf);
}
vt(tu, 'onAnimationEnd');
vt(nu, 'onAnimationIteration');
vt(ru, 'onAnimationStart');
vt('dblclick', 'onDoubleClick');
vt('focusin', 'onFocus');
vt('focusout', 'onBlur');
vt(lu, 'onTransitionEnd');
nn('onMouseEnter', ['mouseout', 'mouseover']);
nn('onMouseLeave', ['mouseout', 'mouseover']);
nn('onPointerEnter', ['pointerout', 'pointerover']);
nn('onPointerLeave', ['pointerout', 'pointerover']);
Rt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Rt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Rt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Rt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Rt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Rt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var _n =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  nf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_n));
function ya(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), ed(r, t, void 0, e), (e.currentTarget = null));
}
function iu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            u = o.instance,
            d = o.currentTarget;
          if (((o = o.listener), u !== s && l.isPropagationStopped())) break e;
          (ya(l, o, d), (s = u));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (u = o.instance),
            (d = o.currentTarget),
            (o = o.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          (ya(l, o, d), (s = u));
        }
    }
  }
  if ($r) throw ((e = vs), ($r = !1), (vs = null), e);
}
function F(e, t) {
  var n = t[_s];
  n === void 0 && (n = t[_s] = new Set());
  var r = e + '__bubble';
  n.has(r) || (au(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  (t && (r |= 4), au(n, e, r, t));
}
var vr = '_reactListening' + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[vr]) {
    ((e[vr] = !0),
      po.forEach(function (n) {
        n !== 'selectionchange' && (nf.has(n) || Bl(n, !1, e), Bl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || ((t[vr] = !0), Bl('selectionchange', !1, t));
  }
}
function au(e, t, n, r) {
  switch (Ho(t)) {
    case 1:
      var l = xd;
      break;
    case 4:
      l = vd;
      break;
    default:
      l = ui;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !xs ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function Vl(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = St(o)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  To(function () {
    var d = s,
      x = si(n),
      h = [];
    e: {
      var p = su.get(e);
      if (p !== void 0) {
        var g = di,
          w = e;
        switch (e) {
          case 'keypress':
            if (Tr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = Ld;
            break;
          case 'focusin':
            ((w = 'focus'), (g = Ol));
            break;
          case 'focusout':
            ((w = 'blur'), (g = Ol));
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Ol;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = ia;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = wd;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Od;
            break;
          case tu:
          case nu:
          case ru:
            g = kd;
            break;
          case lu:
            g = Fd;
            break;
          case 'scroll':
            g = yd;
            break;
          case 'wheel':
            g = Ud;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Ed;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = oa;
        }
        var N = (t & 4) !== 0,
          U = !N && e === 'scroll',
          f = N ? (p !== null ? p + 'Capture' : null) : p;
        N = [];
        for (var c = d, m; c !== null; ) {
          m = c;
          var v = m.stateNode;
          if (
            (m.tag === 5 &&
              v !== null &&
              ((m = v),
              f !== null && ((v = Un(c, f)), v != null && N.push(Kn(c, v, m)))),
            U)
          )
            break;
          c = c.return;
        }
        0 < N.length &&
          ((p = new g(p, w, null, n, x)), h.push({ event: p, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== ps &&
            (w = n.relatedTarget || n.fromElement) &&
            (St(w) || w[Xe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            x.window === x
              ? x
              : (p = x.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = d),
              (w = w ? St(w) : null),
              w !== null &&
                ((U = Ot(w)), w !== U || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = d)),
          g !== w)
        ) {
          if (
            ((N = ia),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((N = oa),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (U = g == null ? p : Wt(g)),
            (m = w == null ? p : Wt(w)),
            (p = new N(v, c + 'leave', g, n, x)),
            (p.target = U),
            (p.relatedTarget = m),
            (v = null),
            St(x) === d &&
              ((N = new N(f, c + 'enter', w, n, x)),
              (N.target = m),
              (N.relatedTarget = U),
              (v = N)),
            (U = v),
            g && w)
          )
            t: {
              for (N = g, f = w, c = 0, m = N; m; m = Dt(m)) c++;
              for (m = 0, v = f; v; v = Dt(v)) m++;
              for (; 0 < c - m; ) ((N = Dt(N)), c--);
              for (; 0 < m - c; ) ((f = Dt(f)), m--);
              for (; c--; ) {
                if (N === f || (f !== null && N === f.alternate)) break t;
                ((N = Dt(N)), (f = Dt(f)));
              }
              N = null;
            }
          else N = null;
          (g !== null && ga(h, p, g, N, !1),
            w !== null && U !== null && ga(h, U, w, N, !0));
        }
      }
      e: {
        if (
          ((p = d ? Wt(d) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && p.type === 'file'))
        )
          var k = Kd;
        else if (da(p))
          if (Xo) k = Xd;
          else {
            k = bd;
            var E = Yd;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (k = Gd);
        if (k && (k = k(e, d))) {
          Go(h, k, n, x);
          break e;
        }
        (E && E(e, p, d),
          e === 'focusout' &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === 'number' &&
            us(p, 'number', p.value));
      }
      switch (((E = d ? Wt(d) : window), e)) {
        case 'focusin':
          (da(E) || E.contentEditable === 'true') &&
            ((Bt = E), (Ns = d), (Ln = null));
          break;
        case 'focusout':
          Ln = Ns = Bt = null;
          break;
        case 'mousedown':
          js = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((js = !1), xa(h, n, x));
          break;
        case 'selectionchange':
          if (Jd) break;
        case 'keydown':
        case 'keyup':
          xa(h, n, x);
      }
      var C;
      if (mi)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        $t
          ? Yo(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      (_ &&
        (Ko &&
          n.locale !== 'ko' &&
          ($t || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && $t && (C = Qo())
            : ((st = x),
              (ci = 'value' in st ? st.value : st.textContent),
              ($t = !0))),
        (E = Qr(d, _)),
        0 < E.length &&
          ((_ = new aa(_, e, null, n, x)),
          h.push({ event: _, listeners: E }),
          C ? (_.data = C) : ((C = bo(n)), C !== null && (_.data = C)))),
        (C = Bd ? Vd(e, n) : Wd(e, n)) &&
          ((d = Qr(d, 'onBeforeInput')),
          0 < d.length &&
            ((x = new aa('onBeforeInput', 'beforeinput', null, n, x)),
            h.push({ event: x, listeners: d }),
            (x.data = C))));
    }
    iu(h, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    (l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = Un(e, n)),
      s != null && r.unshift(Kn(e, s, l)),
      (s = Un(e, t)),
      s != null && r.push(Kn(e, s, l))),
      (e = e.return));
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ga(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      u = o.alternate,
      d = o.stateNode;
    if (u !== null && u === r) break;
    (o.tag === 5 &&
      d !== null &&
      ((o = d),
      l
        ? ((u = Un(n, s)), u != null && a.unshift(Kn(n, u, o)))
        : l || ((u = Un(n, s)), u != null && a.push(Kn(n, u, o)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var rf = /\r\n?/g,
  lf = /\u0000|\uFFFD/g;
function wa(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      rf,
      `
`
    )
    .replace(lf, '');
}
function yr(e, t, n) {
  if (((t = wa(t)), wa(e) !== t && n)) throw Error(y(425));
}
function Kr() {}
var ks = null,
  Ss = null;
function Es(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Cs = typeof setTimeout == 'function' ? setTimeout : void 0,
  sf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Na = typeof Promise == 'function' ? Promise : void 0,
  af =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Na < 'u'
        ? function (e) {
            return Na.resolve(null).then(e).catch(of);
          }
        : Cs;
function of(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          (e.removeChild(l), Vn(t));
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Vn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function ja(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2),
  Be = '__reactFiber$' + fn,
  Yn = '__reactProps$' + fn,
  Xe = '__reactContainer$' + fn,
  _s = '__reactEvents$' + fn,
  uf = '__reactListeners$' + fn,
  cf = '__reactHandles$' + fn;
function St(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ja(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = ja(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function lr(e) {
  return (
    (e = e[Be] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ml(e) {
  return e[Yn] || null;
}
var Ps = [],
  Ht = -1;
function yt(e) {
  return { current: e };
}
function A(e) {
  0 > Ht || ((e.current = Ps[Ht]), (Ps[Ht] = null), Ht--);
}
function D(e, t) {
  (Ht++, (Ps[Ht] = e.current), (e.current = t));
}
var xt = {},
  ae = yt(xt),
  pe = yt(!1),
  Mt = xt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    s;
  for (s in n) l[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return ((e = e.childContextTypes), e != null);
}
function Yr() {
  (A(pe), A(ae));
}
function ka(e, t, n) {
  if (ae.current !== xt) throw Error(y(168));
  (D(ae, t), D(pe, n));
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Yc(e) || 'Unknown', l));
  return W({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xt),
    (Mt = ae.current),
    D(ae, e),
    D(pe, pe.current),
    !0
  );
}
function Sa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  (n
    ? ((e = ou(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(pe),
      A(ae),
      D(ae, e))
    : A(pe),
    D(pe, n));
}
var Qe = null,
  pl = !1,
  Hl = !1;
function uu(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function df(e) {
  ((pl = !0), uu(e));
}
function gt() {
  if (!Hl && Qe !== null) {
    Hl = !0;
    var e = 0,
      t = I;
    try {
      var n = Qe;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Qe = null), (pl = !1));
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), Ro(ii, gt), l);
    } finally {
      ((I = t), (Hl = !1));
    }
  }
  return null;
}
var Qt = [],
  Kt = 0,
  Gr = null,
  Xr = 0,
  Se = [],
  Ee = 0,
  Tt = null,
  Ke = 1,
  Ye = '';
function jt(e, t) {
  ((Qt[Kt++] = Xr), (Qt[Kt++] = Gr), (Gr = e), (Xr = t));
}
function cu(e, t, n) {
  ((Se[Ee++] = Ke), (Se[Ee++] = Ye), (Se[Ee++] = Tt), (Tt = e));
  var r = Ke;
  e = Ye;
  var l = 32 - Oe(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var s = 32 - Oe(t) + l;
  if (30 < s) {
    var a = l - (l % 5);
    ((s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (l -= a),
      (Ke = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Ye = s + e));
  } else ((Ke = (1 << s) | (n << l) | r), (Ye = e));
}
function hi(e) {
  e.return !== null && (jt(e, 1), cu(e, 1, 0));
}
function xi(e) {
  for (; e === Gr; )
    ((Gr = Qt[--Kt]), (Qt[Kt] = null), (Xr = Qt[--Kt]), (Qt[Kt] = null));
  for (; e === Tt; )
    ((Tt = Se[--Ee]),
      (Se[Ee] = null),
      (Ye = Se[--Ee]),
      (Se[Ee] = null),
      (Ke = Se[--Ee]),
      (Se[Ee] = null));
}
var we = null,
  ge = null,
  $ = !1,
  Re = null;
function du(e, t) {
  var n = Ce(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ge = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: Ke, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ms(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ts(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Ea(e, t)) {
        if (Ms(e)) throw Error(y(418));
        t = ct(n.nextSibling);
        var r = we;
        t && Ea(e, t)
          ? du(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e));
      }
    } else {
      if (Ms(e)) throw Error(y(418));
      ((e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e));
    }
  }
}
function Ca(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function gr(e) {
  if (e !== we) return !1;
  if (!$) return (Ca(e), ($ = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Es(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Ms(e)) throw (fu(), Error(y(418)));
    for (; t; ) (du(e, t), (t = ct(t.nextSibling)));
  }
  if ((Ca(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ge = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = we ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function fu() {
  for (var e = ge; e; ) e = ct(e.nextSibling);
}
function ln() {
  ((ge = we = null), ($ = !1));
}
function vi(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var ff = Je.ReactCurrentBatchConfig;
function wn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        s = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = l.refs;
            a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function wr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    )
  );
}
function _a(e) {
  var t = e._init;
  return t(e._payload);
}
function mu(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) (t(f, c), (c = c.sibling));
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      (c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling));
    return f;
  }
  function l(f, c) {
    return ((f = pt(f, c)), (f.index = 0), (f.sibling = null), f);
  }
  function s(f, c, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function a(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function o(f, c, m, v) {
    return c === null || c.tag !== 6
      ? ((c = Zl(m, f.mode, v)), (c.return = f), c)
      : ((c = l(c, m)), (c.return = f), c);
  }
  function u(f, c, m, v) {
    var k = m.type;
    return k === Ut
      ? x(f, c, m.props.children, v, m.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == 'object' &&
              k !== null &&
              k.$$typeof === tt &&
              _a(k) === c.type))
        ? ((v = l(c, m.props)), (v.ref = wn(f, c, m)), (v.return = f), v)
        : ((v = Fr(m.type, m.key, m.props, null, f.mode, v)),
          (v.ref = wn(f, c, m)),
          (v.return = f),
          v);
  }
  function d(f, c, m, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = ql(m, f.mode, v)), (c.return = f), c)
      : ((c = l(c, m.children || [])), (c.return = f), c);
  }
  function x(f, c, m, v, k) {
    return c === null || c.tag !== 7
      ? ((c = Pt(m, f.mode, v, k)), (c.return = f), c)
      : ((c = l(c, m)), (c.return = f), c);
  }
  function h(f, c, m) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return ((c = Zl('' + c, f.mode, m)), (c.return = f), c);
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case ur:
          return (
            (m = Fr(c.type, c.key, c.props, null, f.mode, m)),
            (m.ref = wn(f, null, c)),
            (m.return = f),
            m
          );
        case At:
          return ((c = ql(c, f.mode, m)), (c.return = f), c);
        case tt:
          var v = c._init;
          return h(f, v(c._payload), m);
      }
      if (En(c) || hn(c))
        return ((c = Pt(c, f.mode, m, null)), (c.return = f), c);
      wr(f, c);
    }
    return null;
  }
  function p(f, c, m, v) {
    var k = c !== null ? c.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return k !== null ? null : o(f, c, '' + m, v);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case ur:
          return m.key === k ? u(f, c, m, v) : null;
        case At:
          return m.key === k ? d(f, c, m, v) : null;
        case tt:
          return ((k = m._init), p(f, c, k(m._payload), v));
      }
      if (En(m) || hn(m)) return k !== null ? null : x(f, c, m, v, null);
      wr(f, m);
    }
    return null;
  }
  function g(f, c, m, v, k) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return ((f = f.get(m) || null), o(c, f, '' + v, k));
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case ur:
          return (
            (f = f.get(v.key === null ? m : v.key) || null),
            u(c, f, v, k)
          );
        case At:
          return (
            (f = f.get(v.key === null ? m : v.key) || null),
            d(c, f, v, k)
          );
        case tt:
          var E = v._init;
          return g(f, c, m, E(v._payload), k);
      }
      if (En(v) || hn(v)) return ((f = f.get(m) || null), x(c, f, v, k, null));
      wr(c, v);
    }
    return null;
  }
  function w(f, c, m, v) {
    for (
      var k = null, E = null, C = c, _ = (c = 0), Q = null;
      C !== null && _ < m.length;
      _++
    ) {
      C.index > _ ? ((Q = C), (C = null)) : (Q = C.sibling);
      var z = p(f, C, m[_], v);
      if (z === null) {
        C === null && (C = Q);
        break;
      }
      (e && C && z.alternate === null && t(f, C),
        (c = s(z, c, _)),
        E === null ? (k = z) : (E.sibling = z),
        (E = z),
        (C = Q));
    }
    if (_ === m.length) return (n(f, C), $ && jt(f, _), k);
    if (C === null) {
      for (; _ < m.length; _++)
        ((C = h(f, m[_], v)),
          C !== null &&
            ((c = s(C, c, _)),
            E === null ? (k = C) : (E.sibling = C),
            (E = C)));
      return ($ && jt(f, _), k);
    }
    for (C = r(f, C); _ < m.length; _++)
      ((Q = g(C, f, _, m[_], v)),
        Q !== null &&
          (e && Q.alternate !== null && C.delete(Q.key === null ? _ : Q.key),
          (c = s(Q, c, _)),
          E === null ? (k = Q) : (E.sibling = Q),
          (E = Q)));
    return (
      e &&
        C.forEach(function (Te) {
          return t(f, Te);
        }),
      $ && jt(f, _),
      k
    );
  }
  function N(f, c, m, v) {
    var k = hn(m);
    if (typeof k != 'function') throw Error(y(150));
    if (((m = k.call(m)), m == null)) throw Error(y(151));
    for (
      var E = (k = null), C = c, _ = (c = 0), Q = null, z = m.next();
      C !== null && !z.done;
      _++, z = m.next()
    ) {
      C.index > _ ? ((Q = C), (C = null)) : (Q = C.sibling);
      var Te = p(f, C, z.value, v);
      if (Te === null) {
        C === null && (C = Q);
        break;
      }
      (e && C && Te.alternate === null && t(f, C),
        (c = s(Te, c, _)),
        E === null ? (k = Te) : (E.sibling = Te),
        (E = Te),
        (C = Q));
    }
    if (z.done) return (n(f, C), $ && jt(f, _), k);
    if (C === null) {
      for (; !z.done; _++, z = m.next())
        ((z = h(f, z.value, v)),
          z !== null &&
            ((c = s(z, c, _)),
            E === null ? (k = z) : (E.sibling = z),
            (E = z)));
      return ($ && jt(f, _), k);
    }
    for (C = r(f, C); !z.done; _++, z = m.next())
      ((z = g(C, f, _, z.value, v)),
        z !== null &&
          (e && z.alternate !== null && C.delete(z.key === null ? _ : z.key),
          (c = s(z, c, _)),
          E === null ? (k = z) : (E.sibling = z),
          (E = z)));
    return (
      e &&
        C.forEach(function (mn) {
          return t(f, mn);
        }),
      $ && jt(f, _),
      k
    );
  }
  function U(f, c, m, v) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Ut &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case ur:
          e: {
            for (var k = m.key, E = c; E !== null; ) {
              if (E.key === k) {
                if (((k = m.type), k === Ut)) {
                  if (E.tag === 7) {
                    (n(f, E.sibling),
                      (c = l(E, m.props.children)),
                      (c.return = f),
                      (f = c));
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === tt &&
                    _a(k) === E.type)
                ) {
                  (n(f, E.sibling),
                    (c = l(E, m.props)),
                    (c.ref = wn(f, E, m)),
                    (c.return = f),
                    (f = c));
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            m.type === Ut
              ? ((c = Pt(m.props.children, f.mode, v, m.key)),
                (c.return = f),
                (f = c))
              : ((v = Fr(m.type, m.key, m.props, null, f.mode, v)),
                (v.ref = wn(f, c, m)),
                (v.return = f),
                (f = v));
          }
          return a(f);
        case At:
          e: {
            for (E = m.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  (n(f, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = f),
                    (f = c));
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            ((c = ql(m, f.mode, v)), (c.return = f), (f = c));
          }
          return a(f);
        case tt:
          return ((E = m._init), U(f, c, E(m._payload), v));
      }
      if (En(m)) return w(f, c, m, v);
      if (hn(m)) return N(f, c, m, v);
      wr(f, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, m)), (c.return = f), (f = c))
          : (n(f, c), (c = Zl(m, f.mode, v)), (c.return = f), (f = c)),
        a(f))
      : n(f, c);
  }
  return U;
}
var sn = mu(!0),
  pu = mu(!1),
  Zr = yt(null),
  qr = null,
  Yt = null,
  yi = null;
function gi() {
  yi = Yt = qr = null;
}
function wi(e) {
  var t = Zr.current;
  (A(Zr), (e._currentValue = t));
}
function zs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  ((qr = e),
    (yi = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null)));
}
function Pe(e) {
  var t = e._currentValue;
  if (yi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (qr === null) throw Error(y(308));
      ((Yt = e), (qr.dependencies = { lanes: 0, firstContext: e }));
    } else Yt = Yt.next = e;
  return t;
}
var Et = null;
function Ni(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function hu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ni(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function ji(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xu(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ni(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function zr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n));
  }
}
function Pa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (l = s = a) : (s = s.next = a), (n = n.next));
      } while (n !== null);
      s === null ? (l = s = t) : (s = s.next = t);
    } else l = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Jr(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var s = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      d = u.next;
    ((u.next = null), a === null ? (s = d) : (a.next = d), (a = u));
    var x = e.alternate;
    x !== null &&
      ((x = x.updateQueue),
      (o = x.lastBaseUpdate),
      o !== a &&
        (o === null ? (x.firstBaseUpdate = d) : (o.next = d),
        (x.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var h = l.baseState;
    ((a = 0), (x = d = u = null), (o = s));
    do {
      var p = o.lane,
        g = o.eventTime;
      if ((r & p) === p) {
        x !== null &&
          (x = x.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            N = o;
          switch (((p = t), (g = n), N.tag)) {
            case 1:
              if (((w = N.payload), typeof w == 'function')) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = N.payload),
                (p = typeof w == 'function' ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = W({}, h, p);
              break e;
            case 2:
              nt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [o]) : p.push(o));
      } else
        ((g = {
          eventTime: g,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          x === null ? ((d = x = g), (u = h)) : (x = x.next = g),
          (a |= p));
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        ((p = o),
          (o = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (x === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = x),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((a |= l.lane), (l = l.next));
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    ((Lt |= a), (e.lanes = a), (e.memoizedState = h));
  }
}
function Ma(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var sr = {},
  We = yt(sr),
  bn = yt(sr),
  Gn = yt(sr);
function Ct(e) {
  if (e === sr) throw Error(y(174));
  return e;
}
function ki(e, t) {
  switch ((D(Gn, t), D(bn, e), D(We, sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ds(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ds(t, e)));
  }
  (A(We), D(We, t));
}
function an() {
  (A(We), A(bn), A(Gn));
}
function vu(e) {
  Ct(Gn.current);
  var t = Ct(We.current),
    n = ds(t, e.type);
  t !== n && (D(bn, e), D(We, n));
}
function Si(e) {
  bn.current === e && (A(We), A(bn));
}
var B = yt(0);
function el(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Ql = [];
function Ei() {
  for (var e = 0; e < Ql.length; e++)
    Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0;
}
var Lr = Je.ReactCurrentDispatcher,
  Kl = Je.ReactCurrentBatchConfig,
  zt = 0,
  V = null,
  G = null,
  q = null,
  tl = !1,
  In = !1,
  Xn = 0,
  mf = 0;
function re() {
  throw Error(y(321));
}
function Ci(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function _i(e, t, n, r, l, s) {
  if (
    ((zt = s),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Lr.current = e === null || e.memoizedState === null ? vf : yf),
    (e = n(r, l)),
    In)
  ) {
    s = 0;
    do {
      if (((In = !1), (Xn = 0), 25 <= s)) throw Error(y(301));
      ((s += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Lr.current = gf),
        (e = n(r, l)));
    } while (In);
  }
  if (
    ((Lr.current = nl),
    (t = G !== null && G.next !== null),
    (zt = 0),
    (q = G = V = null),
    (tl = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Pi() {
  var e = Xn !== 0;
  return ((Xn = 0), e);
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (q === null ? (V.memoizedState = q = e) : (q = q.next = e), q);
}
function Me() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) ((q = t), (G = e));
  else {
    if (e === null) throw Error(y(310));
    ((G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (V.memoizedState = q = e) : (q = q.next = e));
  }
  return q;
}
function Zn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Yl(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      ((l.next = s.next), (s.next = a));
    }
    ((r.baseQueue = l = s), (n.pending = null));
  }
  if (l !== null) {
    ((s = l.next), (r = r.baseState));
    var o = (a = null),
      u = null,
      d = s;
    do {
      var x = d.lane;
      if ((zt & x) === x)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action)));
      else {
        var h = {
          lane: x,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        (u === null ? ((o = u = h), (a = r)) : (u = u.next = h),
          (V.lanes |= x),
          (Lt |= x));
      }
      d = d.next;
    } while (d !== null && d !== s);
    (u === null ? (a = r) : (u.next = o),
      Fe(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((s = l.lane), (V.lanes |= s), (Lt |= s), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bl(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = (l = l.next);
    do ((s = e(s, a.action)), (a = a.next));
    while (a !== l);
    (Fe(s, t.memoizedState) || (me = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function yu() {}
function gu(e, t) {
  var n = V,
    r = Me(),
    l = t(),
    s = !Fe(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    Mi(ju.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qn(9, Nu.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    zt & 30 || wu(n, t, l);
  }
  return l;
}
function wu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Nu(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ku(t) && Su(e));
}
function ju(e, t, n) {
  return n(function () {
    ku(t) && Su(e);
  });
}
function ku(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Su(e) {
  var t = Ze(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Ta(e) {
  var t = $e();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function qn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Eu() {
  return Me().memoizedState;
}
function Ir(e, t, n, r) {
  var l = $e();
  ((V.flags |= e),
    (l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r)));
}
function hl(e, t, n, r) {
  var l = Me();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (G !== null) {
    var a = G.memoizedState;
    if (((s = a.destroy), r !== null && Ci(r, a.deps))) {
      l.memoizedState = qn(t, n, s, r);
      return;
    }
  }
  ((V.flags |= e), (l.memoizedState = qn(1 | t, n, s, r)));
}
function za(e, t) {
  return Ir(8390656, 8, e, t);
}
function Mi(e, t) {
  return hl(2048, 8, e, t);
}
function Cu(e, t) {
  return hl(4, 2, e, t);
}
function _u(e, t) {
  return hl(4, 4, e, t);
}
function Pu(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Mu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    hl(4, 4, Pu.bind(null, t, e), n)
  );
}
function Ti() {}
function Tu(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ci(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function zu(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ci(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lu(e, t, n) {
  return zt & 21
    ? (Fe(n, t) || ((n = Fo()), (V.lanes |= n), (Lt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function pf(e, t) {
  var n = I;
  ((I = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Kl.transition;
  Kl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((I = n), (Kl.transition = r));
  }
}
function Iu() {
  return Me().memoizedState;
}
function hf(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ru(e))
  )
    Ou(t, n);
  else if (((n = hu(e, t, n, r)), n !== null)) {
    var l = ue();
    (De(n, e, r, l), Du(n, t, r));
  }
}
function xf(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ru(e)) Ou(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), Fe(o, a))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), Ni(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = hu(e, t, l, r)),
      n !== null && ((l = ue()), De(n, e, r, l), Du(n, t, r)));
  }
}
function Ru(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Ou(e, t) {
  In = tl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Du(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n));
  }
}
var nl = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  vf = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (($e().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Pe,
    useEffect: za,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ir(4194308, 4, Pu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ir(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ir(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Ta,
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = Ta(!1),
        t = e[0];
      return ((e = pf.bind(null, e[1])), ($e().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = $e();
      if ($) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        zt & 30 || wu(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        za(ju.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        qn(9, Nu.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = J.identifierPrefix;
      if ($) {
        var n = Ye,
          r = Ke;
        ((n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Xn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'));
      } else ((n = mf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yf = {
    readContext: Pe,
    useCallback: Tu,
    useContext: Pe,
    useEffect: Mi,
    useImperativeHandle: Mu,
    useInsertionEffect: Cu,
    useLayoutEffect: _u,
    useMemo: zu,
    useReducer: Yl,
    useRef: Eu,
    useState: function () {
      return Yl(Zn);
    },
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      var t = Me();
      return Lu(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Zn)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: yu,
    useSyncExternalStore: gu,
    useId: Iu,
    unstable_isNewReconciler: !1,
  },
  gf = {
    readContext: Pe,
    useCallback: Tu,
    useContext: Pe,
    useEffect: Mi,
    useImperativeHandle: Mu,
    useInsertionEffect: Cu,
    useLayoutEffect: _u,
    useMemo: zu,
    useReducer: bl,
    useRef: Eu,
    useState: function () {
      return bl(Zn);
    },
    useDebugValue: Ti,
    useDeferredValue: function (e) {
      var t = Me();
      return G === null ? (t.memoizedState = e) : Lu(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(Zn)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: yu,
    useSyncExternalStore: gu,
    useId: Iu,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    ((t = W({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ls(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ot(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = mt(e),
      s = be(r, l);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = dt(e, s, l)),
      t !== null && (De(t, e, l, r), zr(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = mt(e),
      s = be(r, l);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = dt(e, s, l)),
      t !== null && (De(t, e, l, r), zr(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = mt(e),
      l = be(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = dt(e, l, r)),
      t !== null && (De(t, e, r, n), zr(t, e, r)));
  },
};
function La(e, t, n, r, l, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Hn(n, r) || !Hn(l, s)
        : !0
  );
}
function Fu(e, t, n) {
  var r = !1,
    l = xt,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Pe(s))
      : ((l = he(t) ? Mt : ae.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? rn(e, l) : xt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Ia(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null));
}
function Is(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ji(e));
  var s = t.contextType;
  (typeof s == 'object' && s !== null
    ? (l.context = Pe(s))
    : ((s = he(t) ? Mt : ae.current), (l.context = rn(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (Ls(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && xl.enqueueReplaceState(l, l.state, null),
      Jr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
}
function on(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += Kc(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (s) {
    l =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wf = typeof WeakMap == 'function' ? WeakMap : Map;
function Au(e, t, n) {
  ((n = be(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (ll || ((ll = !0), (Hs = r)), Rs(e, t));
    }),
    n
  );
}
function Uu(e, t, n) {
  ((n = be(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Rs(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        (Rs(e, t),
          typeof r != 'function' &&
            (ft === null ? (ft = new Set([this])) : ft.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function Ra(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wf();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Rf.bind(null, e, t, n)), t.then(e, e));
}
function Oa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Da(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = be(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Nf = Je.ReactCurrentOwner,
  me = !1;
function oe(e, t, n, r) {
  t.child = e === null ? pu(t, null, n, r) : sn(t, e.child, n, r);
}
function Fa(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    en(t, l),
    (r = _i(e, t, n, r, s, l)),
    (n = Pi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : ($ && n && hi(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Aa(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !Ai(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), $u(e, t, s, r, l))
      : ((e = Fr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hn), n(a, r) && e.ref === t.ref)
    )
      return qe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $u(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Hn(s, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return ((t.lanes = e.lanes), qe(e, t, l));
  }
  return Os(e, t, n, r, l);
}
function Bu(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Gt, ye),
        (ye |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Gt, ye),
          (ye |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        D(Gt, ye),
        (ye |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Gt, ye),
      (ye |= r));
  return (oe(e, t, l, n), t.child);
}
function Vu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Os(e, t, n, r, l) {
  var s = he(n) ? Mt : ae.current;
  return (
    (s = rn(t, s)),
    en(t, l),
    (n = _i(e, t, n, r, s, l)),
    (r = Pi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : ($ && r && hi(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Ua(e, t, n, r, l) {
  if (he(n)) {
    var s = !0;
    br(t);
  } else s = !1;
  if ((en(t, l), t.stateNode === null))
    (Rr(e, t), Fu(t, n, r), Is(t, n, r, l), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var u = a.context,
      d = n.contextType;
    typeof d == 'object' && d !== null
      ? (d = Pe(d))
      : ((d = he(n) ? Mt : ae.current), (d = rn(t, d)));
    var x = n.getDerivedStateFromProps,
      h =
        typeof x == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    (h ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((o !== r || u !== d) && Ia(t, a, r, d)),
      (nt = !1));
    var p = t.memoizedState;
    ((a.state = p),
      Jr(t, r, a, l),
      (u = t.memoizedState),
      o !== r || p !== u || pe.current || nt
        ? (typeof x == 'function' && (Ls(t, n, x, r), (u = t.memoizedState)),
          (o = nt || La(t, n, o, r, p, u, d))
            ? (h ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = d),
          (r = o))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = t.stateNode),
      xu(e, t),
      (o = t.memoizedProps),
      (d = t.type === t.elementType ? o : Le(t.type, o)),
      (a.props = d),
      (h = t.pendingProps),
      (p = a.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = Pe(u))
        : ((u = he(n) ? Mt : ae.current), (u = rn(t, u))));
    var g = n.getDerivedStateFromProps;
    ((x =
      typeof g == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((o !== h || p !== u) && Ia(t, a, r, u)),
      (nt = !1),
      (p = t.memoizedState),
      (a.state = p),
      Jr(t, r, a, l));
    var w = t.memoizedState;
    o !== h || p !== w || pe.current || nt
      ? (typeof g == 'function' && (Ls(t, n, g, r), (w = t.memoizedState)),
        (d = nt || La(t, n, d, r, p, w, u) || !1)
          ? (x ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, w, u),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, w, u)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (a.props = r),
        (a.state = w),
        (a.context = u),
        (r = d))
      : (typeof a.componentDidUpdate != 'function' ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ds(e, t, n, r, s, l);
}
function Ds(e, t, n, r, l, s) {
  Vu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (l && Sa(t, n, !1), qe(e, t, s));
  ((r = t.stateNode), (Nf.current = t));
  var o =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = sn(t, e.child, null, s)), (t.child = sn(t, null, o, s)))
      : oe(e, t, o, s),
    (t.memoizedState = r.state),
    l && Sa(t, n, !0),
    t.child
  );
}
function Wu(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ka(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ka(e, t.context, !1),
    ki(e, t.containerInfo));
}
function $a(e, t, n, r, l) {
  return (ln(), vi(l), (t.flags |= 256), oe(e, t, n, r), t.child);
}
var Fs = { dehydrated: null, treeContext: null, retryLane: 0 };
function As(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hu(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(B, l & 1),
    e === null)
  )
    return (
      Ts(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = gl(a, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = As(n)),
              (t.memoizedState = Fs),
              e)
            : zi(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return jf(e, t, a, r, o, l, n);
  if (s) {
    ((s = r.fallback), (a = t.mode), (l = e.child), (o = l.sibling));
    var u = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = pt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (s = pt(o, s)) : ((s = Pt(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? As(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fs),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = pt(s, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zi(e, t) {
  return (
    (t = gl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && vi(r),
    sn(t, e.child, null, n),
    (e = zi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jf(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gl(Error(y(422)))), Nr(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = gl({ mode: 'visible', children: r.children }, l, 0, null)),
          (s = Pt(s, l, a, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && sn(t, e.child, null, a),
          (t.child.memoizedState = As(a)),
          (t.memoizedState = Fs),
          s);
  if (!(t.mode & 1)) return Nr(e, t, a, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (s = Error(y(419))),
      (r = Gl(s, r, void 0)),
      Nr(e, t, a, r)
    );
  }
  if (((o = (a & e.childLanes) !== 0), me || o)) {
    if (((r = J), r !== null)) {
      switch (a & -a) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | a) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), Ze(e, l), De(r, e, l, -1)));
    }
    return (Fi(), (r = Gl(Error(y(421)))), Nr(e, t, a, r));
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Of.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ge = ct(l.nextSibling)),
      (we = t),
      ($ = !0),
      (Re = null),
      e !== null &&
        ((Se[Ee++] = Ke),
        (Se[Ee++] = Ye),
        (Se[Ee++] = Tt),
        (Ke = e.id),
        (Ye = e.overflow),
        (Tt = t)),
      (t = zi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ba(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), zs(e.return, t, n));
}
function Xl(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = l));
}
function Qu(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((oe(e, t, r.children, n), (r = B.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ba(e, n, t);
        else if (e.tag === 19) Ba(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && el(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Xl(t, !1, l, n, s));
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && el(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Xl(t, !0, n, null, s);
        break;
      case 'together':
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Rr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = pt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function kf(e, t, n) {
  switch (t.tag) {
    case 3:
      (Wu(t), ln());
      break;
    case 5:
      vu(t);
      break;
    case 1:
      he(t.type) && br(t);
      break;
    case 4:
      ki(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (D(Zr, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Hu(e, t, n)
            : (D(B, B.current & 1),
              (e = qe(e, t, n)),
              e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Bu(e, t, n));
  }
  return qe(e, t, n);
}
var Ku, Us, Yu, bu;
Ku = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Us = function () {};
Yu = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Ct(We.current));
    var s = null;
    switch (n) {
      case 'input':
        ((l = as(e, l)), (r = as(e, r)), (s = []));
        break;
      case 'select':
        ((l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (s = []));
        break;
      case 'textarea':
        ((l = cs(e, l)), (r = cs(e, r)), (s = []));
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Kr);
    }
    fs(n, r);
    var a;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === 'style') {
          var o = l[d];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          d !== 'dangerouslySetInnerHTML' &&
            d !== 'children' &&
            d !== 'suppressContentEditableWarning' &&
            d !== 'suppressHydrationWarning' &&
            d !== 'autoFocus' &&
            (Fn.hasOwnProperty(d)
              ? s || (s = [])
              : (s = s || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (
        ((o = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && u !== o && (u != null || o != null))
      )
        if (d === 'style')
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in u)
              u.hasOwnProperty(a) &&
                o[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else (n || (s || (s = []), s.push(d, n)), (n = u));
        else
          d === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (s = s || []).push(d, u))
            : d === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (s = s || []).push(d, '' + u)
              : d !== 'suppressContentEditableWarning' &&
                d !== 'suppressHydrationWarning' &&
                (Fn.hasOwnProperty(d)
                  ? (u != null && d === 'onScroll' && F('scroll', e),
                    s || o === u || (s = []))
                  : (s = s || []).push(d, u));
    }
    n && (s = s || []).push('style', n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
bu = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Sf(e, t, n) {
  var r = t.pendingProps;
  switch ((xi(t), t.tag)) {
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
      return (le(t), null);
    case 1:
      return (he(t.type) && Yr(), le(t), null);
    case 3:
      return (
        (r = t.stateNode),
        an(),
        A(pe),
        A(ae),
        Ei(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (Ys(Re), (Re = null)))),
        Us(e, t),
        le(t),
        null
      );
    case 5:
      Si(t);
      var l = Ct(Gn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Yu(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return (le(t), null);
        }
        if (((e = Ct(We.current)), gr(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[Be] = t), (r[Yn] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              (F('cancel', r), F('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < _n.length; l++) F(_n[l], r);
              break;
            case 'source':
              F('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              (F('error', r), F('load', r));
              break;
            case 'details':
              F('toggle', r);
              break;
            case 'input':
              (Xi(r, s), F('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                F('invalid', r));
              break;
            case 'textarea':
              (qi(r, s), F('invalid', r));
          }
          (fs(n, s), (l = null));
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === 'children'
                ? typeof o == 'string'
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, o, e),
                    (l = ['children', o]))
                  : typeof o == 'number' &&
                    r.textContent !== '' + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, o, e),
                    (l = ['children', '' + o]))
                : Fn.hasOwnProperty(a) &&
                  o != null &&
                  a === 'onScroll' &&
                  F('scroll', r);
            }
          switch (n) {
            case 'input':
              (cr(r), Zi(r, s, !0));
              break;
            case 'textarea':
              (cr(r), Ji(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = Kr);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = jo(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === 'select' &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Be] = t),
            (e[Yn] = r),
            Ku(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = ms(n, r)), n)) {
              case 'dialog':
                (F('cancel', e), F('close', e), (l = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                (F('load', e), (l = r));
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < _n.length; l++) F(_n[l], e);
                l = r;
                break;
              case 'source':
                (F('error', e), (l = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                (F('error', e), F('load', e), (l = r));
                break;
              case 'details':
                (F('toggle', e), (l = r));
                break;
              case 'input':
                (Xi(e, r), (l = as(e, r)), F('invalid', e));
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  F('invalid', e));
                break;
              case 'textarea':
                (qi(e, r), (l = cs(e, r)), F('invalid', e));
                break;
              default:
                l = r;
            }
            (fs(n, l), (o = l));
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var u = o[s];
                s === 'style'
                  ? Eo(e, u)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && ko(e, u))
                    : s === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && An(e, u)
                        : typeof u == 'number' && An(e, '' + u)
                      : s !== 'suppressContentEditableWarning' &&
                        s !== 'suppressHydrationWarning' &&
                        s !== 'autoFocus' &&
                        (Fn.hasOwnProperty(s)
                          ? u != null && s === 'onScroll' && F('scroll', e)
                          : u != null && ti(e, s, u, a));
              }
            switch (n) {
              case 'input':
                (cr(e), Zi(e, r, !1));
                break;
              case 'textarea':
                (cr(e), Ji(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ht(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Xt(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Xt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Kr);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (le(t), null);
    case 6:
      if (e && t.stateNode != null) bu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = Ct(Gn.current)), Ct(We.current), gr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (s = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r));
      }
      return (le(t), null);
    case 13:
      if (
        (A(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          (fu(), ln(), (t.flags |= 98560), (s = !1));
        else if (((s = gr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(y(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(y(317));
            s[Be] = t;
          } else
            (ln(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (le(t), (s = !1));
        } else (Re !== null && (Ys(Re), (Re = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? X === 0 && (X = 3) : Fi())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        an(),
        Us(e, t),
        e === null && Qn(t.stateNode.containerInfo),
        le(t),
        null
      );
    case 10:
      return (wi(t.type._context), le(t), null);
    case 17:
      return (he(t.type) && Yr(), le(t), null);
    case 19:
      if ((A(B), (s = t.memoizedState), s === null)) return (le(t), null);
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) Nn(s, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = el(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Nn(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (D(B, (B.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Y() > un &&
            ((t.flags |= 128), (r = !0), Nn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = el(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nn(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !a.alternate && !$)
            )
              return (le(t), null);
          } else
            2 * Y() - s.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Di(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Ef(e, t) {
  switch ((xi(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Yr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        A(pe),
        A(ae),
        Ei(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Si(t), null);
    case 13:
      if ((A(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        ln();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (A(B), null);
    case 4:
      return (an(), null);
    case 10:
      return (wi(t.type._context), null);
    case 22:
    case 23:
      return (Di(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  ie = !1,
  Cf = typeof WeakSet == 'function' ? WeakSet : Set,
  j = null;
function bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function $s(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Va = !1;
function _f(e, t) {
  if (((ks = Wr), (e = Jo()), pi(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            u = -1,
            d = 0,
            x = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (o = a + l),
                h !== s || (r !== 0 && h.nodeType !== 3) || (u = a + r),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              ((p = h), (h = g));
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++d === l && (o = a),
                p === s && ++x === r && (u = a),
                (g = h.nextSibling) !== null)
              )
                break;
              ((h = p), (p = h.parentNode));
            }
            h = g;
          }
          n = o === -1 || u === -1 ? null : { start: o, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ss = { focusedElem: e, selectionRange: n }, Wr = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (j = e));
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var N = w.memoizedProps,
                    U = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : Le(t.type, N),
                      U
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          H(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (j = e));
          break;
        }
        j = t.return;
      }
  return ((w = Va), (Va = !1), w);
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        ((l.destroy = void 0), s !== void 0 && $s(t, n, s));
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Gu(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Gu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[Yn], delete t[_s], delete t[uf], delete t[cf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Xu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xu(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vs(e, t, n), e = e.sibling; e !== null; )
      (Vs(e, t, n), (e = e.sibling));
}
function Ws(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ws(e, t, n), e = e.sibling; e !== null; )
      (Ws(e, t, n), (e = e.sibling));
}
var ee = null,
  Ie = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) (Zu(e, t, n), (n = n.sibling));
}
function Zu(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == 'function')
    try {
      Ve.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || bt(n, t);
    case 6:
      var r = ee,
        l = Ie;
      ((ee = null),
        et(e, t, n),
        (ee = r),
        (Ie = l),
        ee !== null &&
          (Ie
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode)));
      break;
    case 18:
      ee !== null &&
        (Ie
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, n)
              : e.nodeType === 1 && Wl(e, n),
            Vn(e))
          : Wl(ee, n.stateNode));
      break;
    case 4:
      ((r = ee),
        (l = Ie),
        (ee = n.stateNode.containerInfo),
        (Ie = !0),
        et(e, t, n),
        (ee = r),
        (Ie = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            a = s.destroy;
          ((s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && $s(n, t, a),
            (l = l.next));
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (bt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          H(n, t, o);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), et(e, t, n), (ie = r))
        : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function Ha(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Cf()),
      t.forEach(function (r) {
        var l = Df.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((ee = o.stateNode), (Ie = !1));
              break e;
            case 3:
              ((ee = o.stateNode.containerInfo), (Ie = !0));
              break e;
            case 4:
              ((ee = o.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          o = o.return;
        }
        if (ee === null) throw Error(y(160));
        (Zu(s, a, l), (ee = null), (Ie = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (d) {
        H(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (qu(t, e), (t = t.sibling));
}
function qu(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Ue(e), r & 4)) {
        try {
          (Rn(3, e, e.return), vl(3, e));
        } catch (N) {
          H(e, e.return, N);
        }
        try {
          Rn(5, e, e.return);
        } catch (N) {
          H(e, e.return, N);
        }
      }
      break;
    case 1:
      (ze(t, e), Ue(e), r & 512 && n !== null && bt(n, n.return));
      break;
    case 5:
      if (
        (ze(t, e),
        Ue(e),
        r & 512 && n !== null && bt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          An(l, '');
        } catch (N) {
          H(e, e.return, N);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (o === 'input' && s.type === 'radio' && s.name != null && wo(l, s),
              ms(o, a));
            var d = ms(o, s);
            for (a = 0; a < u.length; a += 2) {
              var x = u[a],
                h = u[a + 1];
              x === 'style'
                ? Eo(l, h)
                : x === 'dangerouslySetInnerHTML'
                  ? ko(l, h)
                  : x === 'children'
                    ? An(l, h)
                    : ti(l, x, h, d);
            }
            switch (o) {
              case 'input':
                os(l, s);
                break;
              case 'textarea':
                No(l, s);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Xt(l, !!s.multiple, g, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Xt(l, !!s.multiple, s.defaultValue, !0)
                      : Xt(l, !!s.multiple, s.multiple ? [] : '', !1));
            }
            l[Yn] = s;
          } catch (N) {
            H(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        ((l = e.stateNode), (s = e.memoizedProps));
        try {
          l.nodeValue = s;
        } catch (N) {
          H(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vn(t.containerInfo);
        } catch (N) {
          H(e, e.return, N);
        }
      break;
    case 4:
      (ze(t, e), Ue(e));
      break;
    case 13:
      (ze(t, e),
        Ue(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ri = Y())),
        r & 4 && Ha(e));
      break;
    case 22:
      if (
        ((x = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (d = ie) || x), ze(t, e), (ie = d)) : ze(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !x && e.mode & 1)
        )
          for (j = e, x = e.child; x !== null; ) {
            for (h = j = x; j !== null; ) {
              switch (((p = j), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, p, p.return);
                  break;
                case 1:
                  bt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (N) {
                      H(r, n, N);
                    }
                  }
                  break;
                case 5:
                  bt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ka(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (j = g)) : Ka(h);
            }
            x = x.sibling;
          }
        e: for (x = null, h = e; ; ) {
          if (h.tag === 5) {
            if (x === null) {
              x = h;
              try {
                ((l = h.stateNode),
                  d
                    ? ((s = l.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((o = h.stateNode),
                      (u = h.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (o.style.display = So('display', a))));
              } catch (N) {
                H(e, e.return, N);
              }
            }
          } else if (h.tag === 6) {
            if (x === null)
              try {
                h.stateNode.nodeValue = d ? '' : h.memoizedProps;
              } catch (N) {
                H(e, e.return, N);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (x === h && (x = null), (h = h.return));
          }
          (x === h && (x = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (ze(t, e), Ue(e), r & 4 && Ha(e));
      break;
    case 21:
      break;
    default:
      (ze(t, e), Ue(e));
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (An(l, ''), (r.flags &= -33));
          var s = Wa(e);
          Ws(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = Wa(e);
          Vs(e, o, a);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      H(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pf(e, t, n) {
  ((j = e), Ju(e));
}
function Ju(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || jr;
      if (!a) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || ie;
        o = jr;
        var d = ie;
        if (((jr = a), (ie = u) && !d))
          for (j = l; j !== null; )
            ((a = j),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Ya(l)
                : u !== null
                  ? ((u.return = a), (j = u))
                  : Ya(l));
        for (; s !== null; ) ((j = s), Ju(s), (s = s.sibling));
        ((j = l), (jr = o), (ie = d));
      }
      Qa(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (j = s)) : Qa(e);
  }
}
function Qa(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Ma(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ma(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var x = d.memoizedState;
                  if (x !== null) {
                    var h = x.dehydrated;
                    h !== null && Vn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        ie || (t.flags & 512 && Bs(t));
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function Ka(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function Ya(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vl(4, t);
          } catch (u) {
            H(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              H(t, l, u);
            }
          }
          var s = t.return;
          try {
            Bs(t);
          } catch (u) {
            H(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Bs(t);
          } catch (u) {
            H(t, a, u);
          }
      }
    } catch (u) {
      H(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (j = o));
      break;
    }
    j = t.return;
  }
}
var Mf = Math.ceil,
  rl = Je.ReactCurrentDispatcher,
  Li = Je.ReactCurrentOwner,
  _e = Je.ReactCurrentBatchConfig,
  L = 0,
  J = null,
  b = null,
  te = 0,
  ye = 0,
  Gt = yt(0),
  X = 0,
  Jn = null,
  Lt = 0,
  yl = 0,
  Ii = 0,
  On = null,
  fe = null,
  Ri = 0,
  un = 1 / 0,
  He = null,
  ll = !1,
  Hs = null,
  ft = null,
  kr = !1,
  it = null,
  sl = 0,
  Dn = 0,
  Qs = null,
  Or = -1,
  Dr = 0;
function ue() {
  return L & 6 ? Y() : Or !== -1 ? Or : (Or = Y());
}
function mt(e) {
  return e.mode & 1
    ? L & 2 && te !== 0
      ? te & -te
      : ff.transition !== null
        ? (Dr === 0 && (Dr = Fo()), Dr)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ho(e.type))),
          e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Dn) throw ((Dn = 0), (Qs = null), Error(y(185)));
  (nr(e, n, r),
    (!(L & 2) || e !== J) &&
      (e === J && (!(L & 2) && (yl |= n), X === 4 && lt(e, te)),
      xe(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((un = Y() + 500), pl && gt())));
}
function xe(e, t) {
  var n = e.callbackNode;
  dd(e, t);
  var r = Vr(e, e === J ? te : 0);
  if (r === 0)
    (n !== null && na(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && na(n), t === 1))
      (e.tag === 0 ? df(ba.bind(null, e)) : uu(ba.bind(null, e)),
        af(function () {
          !(L & 6) && gt();
        }),
        (n = null));
    else {
      switch (Ao(r)) {
        case 1:
          n = ii;
          break;
        case 4:
          n = Oo;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = Do;
          break;
        default:
          n = Br;
      }
      n = ac(n, ec.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ec(e, t) {
  if (((Or = -1), (Dr = 0), L & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Vr(e, e === J ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var s = nc();
    (J !== e || te !== t) && ((He = null), (un = Y() + 500), _t(e, t));
    do
      try {
        Lf();
        break;
      } catch (o) {
        tc(e, o);
      }
    while (!0);
    (gi(),
      (rl.current = s),
      (L = l),
      b !== null ? (t = 0) : ((J = null), (te = 0), (t = X)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ys(e)), l !== 0 && ((r = l), (t = Ks(e, l)))), t === 1)
    )
      throw ((n = Jn), _t(e, 0), lt(e, r), xe(e, Y()), n);
    if (t === 6) lt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Tf(l) &&
          ((t = il(e, r)),
          t === 2 && ((s = ys(e)), s !== 0 && ((r = s), (t = Ks(e, s)))),
          t === 1))
      )
        throw ((n = Jn), _t(e, 0), lt(e, r), xe(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, fe, He);
          break;
        case 3:
          if (
            (lt(e, r), (r & 130023424) === r && ((t = Ri + 500 - Y()), 10 < t))
          ) {
            if (Vr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ue(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Cs(kt.bind(null, e, fe, He), t);
            break;
          }
          kt(e, fe, He);
          break;
        case 4:
          if ((lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - Oe(r);
            ((s = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~s));
          }
          if (
            ((r = l),
            (r = Y() - r),
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
                          : 1960 * Mf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Cs(kt.bind(null, e, fe, He), r);
            break;
          }
          kt(e, fe, He);
          break;
        case 5:
          kt(e, fe, He);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return (xe(e, Y()), e.callbackNode === n ? ec.bind(null, e) : null);
}
function Ks(e, t) {
  var n = On;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = il(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && Ys(t)),
    e
  );
}
function Ys(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Tf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function lt(e, t) {
  for (
    t &= ~Ii,
      t &= ~yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ba(e) {
  if (L & 6) throw Error(y(327));
  tn();
  var t = Vr(e, 0);
  if (!(t & 1)) return (xe(e, Y()), null);
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ys(e);
    r !== 0 && ((t = r), (n = Ks(e, r)));
  }
  if (n === 1) throw ((n = Jn), _t(e, 0), lt(e, t), xe(e, Y()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, fe, He),
    xe(e, Y()),
    null
  );
}
function Oi(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    ((L = n), L === 0 && ((un = Y() + 500), pl && gt()));
  }
}
function It(e) {
  it !== null && it.tag === 0 && !(L & 6) && tn();
  var t = L;
  L |= 1;
  var n = _e.transition,
    r = I;
  try {
    if (((_e.transition = null), (I = 1), e)) return e();
  } finally {
    ((I = r), (_e.transition = n), (L = t), !(L & 6) && gt());
  }
}
function Di() {
  ((ye = Gt.current), A(Gt));
}
function _t(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sf(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n;
      switch ((xi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Yr());
          break;
        case 3:
          (an(), A(pe), A(ae), Ei());
          break;
        case 5:
          Si(r);
          break;
        case 4:
          an();
          break;
        case 13:
          A(B);
          break;
        case 19:
          A(B);
          break;
        case 10:
          wi(r.type._context);
          break;
        case 22:
        case 23:
          Di();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (b = e = pt(e.current, null)),
    (te = ye = t),
    (X = 0),
    (Jn = null),
    (Ii = yl = Lt = 0),
    (fe = On = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          ((s.next = l), (r.next = a));
        }
        n.pending = r;
      }
    Et = null;
  }
  return e;
}
function tc(e, t) {
  do {
    var n = b;
    try {
      if ((gi(), (Lr.current = nl), tl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        tl = !1;
      }
      if (
        ((zt = 0),
        (q = G = V = null),
        (In = !1),
        (Xn = 0),
        (Li.current = null),
        n === null || n.return === null)
      ) {
        ((X = 1), (Jn = t), (b = null));
        break;
      }
      e: {
        var s = e,
          a = n.return,
          o = n,
          u = t;
        if (
          ((t = te),
          (o.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var d = u,
            x = o,
            h = x.tag;
          if (!(x.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = x.alternate;
            p
              ? ((x.updateQueue = p.updateQueue),
                (x.memoizedState = p.memoizedState),
                (x.lanes = p.lanes))
              : ((x.updateQueue = null), (x.memoizedState = null));
          }
          var g = Oa(a);
          if (g !== null) {
            ((g.flags &= -257),
              Da(g, a, o, s, t),
              g.mode & 1 && Ra(s, d, t),
              (t = g),
              (u = d));
            var w = t.updateQueue;
            if (w === null) {
              var N = new Set();
              (N.add(u), (t.updateQueue = N));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (Ra(s, d, t), Fi());
              break e;
            }
            u = Error(y(426));
          }
        } else if ($ && o.mode & 1) {
          var U = Oa(a);
          if (U !== null) {
            (!(U.flags & 65536) && (U.flags |= 256),
              Da(U, a, o, s, t),
              vi(on(u, o)));
            break e;
          }
        }
        ((s = u = on(u, o)),
          X !== 4 && (X = 2),
          On === null ? (On = [s]) : On.push(s),
          (s = a));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var f = Au(s, u, t);
              Pa(s, f);
              break e;
            case 1:
              o = u;
              var c = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (ft === null || !ft.has(m))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var v = Uu(s, o, t);
                Pa(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      lc(n);
    } catch (k) {
      ((t = k), b === n && n !== null && (b = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function nc() {
  var e = rl.current;
  return ((rl.current = nl), e === null ? nl : e);
}
function Fi() {
  ((X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Lt & 268435455) && !(yl & 268435455)) || lt(J, te));
}
function il(e, t) {
  var n = L;
  L |= 2;
  var r = nc();
  (J !== e || te !== t) && ((He = null), _t(e, t));
  do
    try {
      zf();
      break;
    } catch (l) {
      tc(e, l);
    }
  while (!0);
  if ((gi(), (L = n), (rl.current = r), b !== null)) throw Error(y(261));
  return ((J = null), (te = 0), X);
}
function zf() {
  for (; b !== null; ) rc(b);
}
function Lf() {
  for (; b !== null && !nd(); ) rc(b);
}
function rc(e) {
  var t = ic(e.alternate, e, ye);
  ((e.memoizedProps = e.pendingProps),
    t === null ? lc(e) : (b = t),
    (Li.current = null));
}
function lc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ef(n, t)), n !== null)) {
        ((n.flags &= 32767), (b = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((X = 6), (b = null));
        return;
      }
    } else if (((n = Sf(n, t, ye)), n !== null)) {
      b = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function kt(e, t, n) {
  var r = I,
    l = _e.transition;
  try {
    ((_e.transition = null), (I = 1), If(e, t, n, r));
  } finally {
    ((_e.transition = l), (I = r));
  }
  return null;
}
function If(e, t, n, r) {
  do tn();
  while (it !== null);
  if (L & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (fd(e, s),
    e === J && ((b = J = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      kr ||
      ((kr = !0),
      ac(Br, function () {
        return (tn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = _e.transition), (_e.transition = null));
    var a = I;
    I = 1;
    var o = L;
    ((L |= 4),
      (Li.current = null),
      _f(e, n),
      qu(n, e),
      qd(Ss),
      (Wr = !!ks),
      (Ss = ks = null),
      (e.current = n),
      Pf(n),
      rd(),
      (L = o),
      (I = a),
      (_e.transition = s));
  } else e.current = n;
  if (
    (kr && ((kr = !1), (it = e), (sl = l)),
    (s = e.pendingLanes),
    s === 0 && (ft = null),
    id(n.stateNode),
    xe(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (ll) throw ((ll = !1), (e = Hs), (Hs = null), e);
  return (
    sl & 1 && e.tag !== 0 && tn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Qs ? Dn++ : ((Dn = 0), (Qs = e))) : (Dn = 0),
    gt(),
    null
  );
}
function tn() {
  if (it !== null) {
    var e = Ao(sl),
      t = _e.transition,
      n = I;
    try {
      if (((_e.transition = null), (I = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (sl = 0), L & 6)) throw Error(y(331));
        var l = L;
        for (L |= 4, j = e.current; j !== null; ) {
          var s = j,
            a = s.child;
          if (j.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var d = o[u];
                for (j = d; j !== null; ) {
                  var x = j;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, x, s);
                  }
                  var h = x.child;
                  if (h !== null) ((h.return = x), (j = h));
                  else
                    for (; j !== null; ) {
                      x = j;
                      var p = x.sibling,
                        g = x.return;
                      if ((Gu(x), x === d)) {
                        j = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = g), (j = p));
                        break;
                      }
                      j = g;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var N = w.child;
                if (N !== null) {
                  w.child = null;
                  do {
                    var U = N.sibling;
                    ((N.sibling = null), (N = U));
                  } while (N !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) ((a.return = s), (j = a));
          else
            e: for (; j !== null; ) {
              if (((s = j), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                ((f.return = s.return), (j = f));
                break e;
              }
              j = s.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          a = j;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) ((m.return = a), (j = m));
          else
            e: for (a = c; j !== null; ) {
              if (((o = j), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(9, o);
                  }
                } catch (k) {
                  H(o, o.return, k);
                }
              if (o === a) {
                j = null;
                break e;
              }
              var v = o.sibling;
              if (v !== null) {
                ((v.return = o.return), (j = v));
                break e;
              }
              j = o.return;
            }
        }
        if (
          ((L = l), gt(), Ve && typeof Ve.onPostCommitFiberRoot == 'function')
        )
          try {
            Ve.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((I = n), (_e.transition = t));
    }
  }
  return !1;
}
function Ga(e, t, n) {
  ((t = on(n, t)),
    (t = Au(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = ue()),
    e !== null && (nr(e, 1, t), xe(e, t)));
}
function H(e, t, n) {
  if (e.tag === 3) Ga(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ft === null || !ft.has(r)))
        ) {
          ((e = on(n, e)),
            (e = Uu(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = ue()),
            t !== null && (nr(t, 1, e), xe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Rf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > Y() - Ri)
        ? _t(e, 0)
        : (Ii |= n)),
    xe(e, t));
}
function sc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = mr), (mr <<= 1), !(mr & 130023424) && (mr = 4194304))
      : (t = 1));
  var n = ue();
  ((e = Ze(e, t)), e !== null && (nr(e, t, n), xe(e, n)));
}
function Of(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), sc(e, n));
}
function Df(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  (r !== null && r.delete(t), sc(e, n));
}
var ic;
ic = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((me = !1), kf(e, t, n));
      me = !!(e.flags & 131072);
    }
  else ((me = !1), $ && t.flags & 1048576 && cu(t, Xr, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Rr(e, t), (e = t.pendingProps));
      var l = rn(t, ae.current);
      (en(t, n), (l = _i(null, t, r, e, l, n)));
      var s = Pi();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((s = !0), br(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ji(t),
            (l.updater = xl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Is(t, r, e, n),
            (t = Ds(null, t, r, !0, s, n)))
          : ((t.tag = 0), $ && s && hi(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Rr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Af(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Os(null, t, r, e, n);
            break e;
          case 1:
            t = Ua(null, t, r, e, n);
            break e;
          case 11:
            t = Fa(null, t, r, e, n);
            break e;
          case 14:
            t = Aa(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Os(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ua(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wu(t), e === null)) throw Error(y(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          xu(e, t),
          Jr(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((l = on(Error(y(423)), t)), (t = $a(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = on(Error(y(424)), t)), (t = $a(e, t, r, n, l)));
            break e;
          } else
            for (
              ge = ct(t.stateNode.containerInfo.firstChild),
                we = t,
                $ = !0,
                Re = null,
                n = pu(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((ln(), r === l)) {
            t = qe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        vu(t),
        e === null && Ts(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = l.children),
        Es(r, l) ? (a = null) : s !== null && Es(r, s) && (t.flags |= 32),
        Vu(e, t),
        oe(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && Ts(t), null);
    case 13:
      return Hu(e, t, n);
    case 4:
      return (
        ki(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Fa(e, t, r, l, n)
      );
    case 7:
      return (oe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (oe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (oe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (a = l.value),
          D(Zr, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (Fe(s.value, a)) {
            if (s.children === l.children && !pe.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      ((u = be(-1, n & -n)), (u.tag = 2));
                      var d = s.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var x = d.pending;
                        (x === null
                          ? (u.next = u)
                          : ((u.next = x.next), (x.next = u)),
                          (d.pending = u));
                      }
                    }
                    ((s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      zs(s.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(y(341));
                ((a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  zs(a, n, t),
                  (a = s.sibling));
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    ((s.return = a.return), (a = s));
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        (oe(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        en(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Aa(e, t, r, l, n)
      );
    case 15:
      return $u(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Rr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), br(t)) : (e = !1),
        en(t, n),
        Fu(t, r, l),
        Is(t, r, l, n),
        Ds(null, t, r, !0, e, n)
      );
    case 19:
      return Qu(e, t, n);
    case 22:
      return Bu(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ac(e, t) {
  return Ro(e, t);
}
function Ff(e, t, n, r) {
  ((this.tag = e),
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ce(e, t, n, r) {
  return new Ff(e, t, n, r);
}
function Ai(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Af(e) {
  if (typeof e == 'function') return Ai(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ri)) return 11;
    if (e === li) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
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
  );
}
function Fr(e, t, n, r, l, s) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Ai(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case Ut:
        return Pt(n.children, l, s, t);
      case ni:
        ((a = 8), (l |= 8));
        break;
      case rs:
        return (
          (e = Ce(12, n, t, l | 2)),
          (e.elementType = rs),
          (e.lanes = s),
          e
        );
      case ls:
        return ((e = Ce(13, n, t, l)), (e.elementType = ls), (e.lanes = s), e);
      case ss:
        return ((e = Ce(19, n, t, l)), (e.elementType = ss), (e.lanes = s), e);
      case vo:
        return gl(n, l, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ho:
              a = 10;
              break e;
            case xo:
              a = 9;
              break e;
            case ri:
              a = 11;
              break e;
            case li:
              a = 14;
              break e;
            case tt:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ce(a, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Pt(e, t, n, r) {
  return ((e = Ce(7, e, r, t)), (e.lanes = n), e);
}
function gl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = vo),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return ((e = Ce(6, e, null, t)), (e.lanes = n), e);
}
function ql(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uf(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Ui(e, t, n, r, l, s, a, o, u) {
  return (
    (e = new Uf(e, t, n, o, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ce(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ji(s),
    e
  );
}
function $f(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: At,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function oc(e) {
  if (!e) return xt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return ou(e, n, t);
  }
  return t;
}
function uc(e, t, n, r, l, s, a, o, u) {
  return (
    (e = Ui(n, r, !0, e, l, s, a, o, u)),
    (e.context = oc(null)),
    (n = e.current),
    (r = ue()),
    (l = mt(n)),
    (s = be(r, l)),
    (s.callback = t ?? null),
    dt(n, s, l),
    (e.current.lanes = l),
    nr(e, l, r),
    xe(e, r),
    e
  );
}
function wl(e, t, n, r) {
  var l = t.current,
    s = ue(),
    a = mt(l);
  return (
    (n = oc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = be(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(l, t, a)),
    e !== null && (De(e, l, a, s), zr(e, l, a)),
    a
  );
}
function al(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $i(e, t) {
  (Xa(e, t), (e = e.alternate) && Xa(e, t));
}
function Bf() {
  return null;
}
var cc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bi(e) {
  this._internalRoot = e;
}
Nl.prototype.render = Bi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  wl(e, t, null, null);
};
Nl.prototype.unmount = Bi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (It(function () {
      wl(null, e, null, null);
    }),
      (t[Xe] = null));
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bo();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++);
    (rt.splice(n, 0, e), n === 0 && Wo(e));
  }
};
function Vi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Za() {}
function Vf(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var d = al(a);
        s.call(d);
      };
    }
    var a = uc(t, r, e, 0, null, !1, !1, '', Za);
    return (
      (e._reactRootContainer = a),
      (e[Xe] = a.current),
      Qn(e.nodeType === 8 ? e.parentNode : e),
      It(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var o = r;
    r = function () {
      var d = al(u);
      o.call(d);
    };
  }
  var u = Ui(e, 0, !1, null, null, !1, !1, '', Za);
  return (
    (e._reactRootContainer = u),
    (e[Xe] = u.current),
    Qn(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      wl(t, u, n, r);
    }),
    u
  );
}
function kl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == 'function') {
      var o = l;
      l = function () {
        var u = al(a);
        o.call(u);
      };
    }
    wl(t, a, e, l);
  } else a = Vf(n, t, e, l, r);
  return al(a);
}
Uo = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (ai(t, n | 1), xe(t, Y()), !(L & 6) && ((un = Y() + 500), gt()));
      }
      break;
    case 13:
      (It(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ue();
          De(r, e, 1, l);
        }
      }),
        $i(e, 1));
  }
};
oi = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ue();
      De(t, e, 134217728, n);
    }
    $i(e, 134217728);
  }
};
$o = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ue();
      De(n, e, t, r);
    }
    $i(e, t);
  }
};
Bo = function () {
  return I;
};
Vo = function (e, t) {
  var n = I;
  try {
    return ((I = e), t());
  } finally {
    I = n;
  }
};
hs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((os(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ml(r);
            if (!l) throw Error(y(90));
            (go(r), os(r, l));
          }
        }
      }
      break;
    case 'textarea':
      No(e, n);
      break;
    case 'select':
      ((t = n.value), t != null && Xt(e, !!n.multiple, t, !1));
  }
};
Po = Oi;
Mo = It;
var Wf = { usingClientEntryPoint: !1, Events: [lr, Wt, ml, Co, _o, Oi] },
  jn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Hf = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Lo(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: jn.findFiberByHostInstance || Bf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      ((ul = Sr.inject(Hf)), (Ve = Sr));
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wf;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vi(t)) throw Error(y(200));
  return $f(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!Vi(e)) throw Error(y(299));
  var n = !1,
    r = '',
    l = cc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ui(e, 1, !1, null, null, n, !1, r, l)),
    (e[Xe] = t.current),
    Qn(e.nodeType === 8 ? e.parentNode : e),
    new Bi(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return ((e = Lo(t)), (e = e === null ? null : e.stateNode), e);
};
je.flushSync = function (e) {
  return It(e);
};
je.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(y(200));
  return kl(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!Vi(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = '',
    a = cc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = uc(t, null, e, 1, n ?? null, l, !1, s, a)),
    (e[Xe] = t.current),
    Qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Nl(t);
};
je.render = function (e, t, n) {
  if (!jl(t)) throw Error(y(200));
  return kl(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (It(function () {
        kl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Xe] = null));
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = Oi;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return kl(e, t, n, !1, r);
};
je.version = '18.3.1-next-f1338f8080-20240426';
function dc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc);
    } catch (e) {
      console.error(e);
    }
}
(dc(), (co.exports = je));
var Qf = co.exports,
  fc,
  qa = Qf;
((fc = qa.createRoot), qa.hydrateRoot);
const Ae = ({
    children: e,
    variant: t = 'primary',
    href: n,
    onClick: r,
    className: l = '',
    fullWidth: s = !1,
    type: a = 'button',
  }) => {
    const o = `btn btn-${t} ${s ? 'w-full' : ''} ${l}`;
    return n
      ? i.jsx('a', { href: n, className: o, onClick: r, children: e })
      : i.jsx('button', { type: a, className: o, onClick: r, children: e });
  },
  Kf = () => {
    const [e, t] = O.useState(!1),
      [n, r] = O.useState(!1);
    O.useEffect(() => {
      const s = () => {
        const a = window.scrollY > 10;
        a !== e && t(a);
      };
      return (
        window.addEventListener('scroll', s),
        () => {
          window.removeEventListener('scroll', s);
        }
      );
    }, [e]);
    const l = () => {
      r(!n);
    };
    return i.jsxs('header', {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? 'bg-dark/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`,
      children: [
        i.jsxs('div', {
          className: 'container-custom flex items-center justify-between',
          children: [
            i.jsx('a', {
              href: '/',
              className: 'group',
              children: i.jsx('span', {
                className:
                  'text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300',
                children: 'MindMix',
              }),
            }),
            i.jsxs('nav', {
              className: 'hidden md:flex items-center space-x-8',
              children: [
                i.jsx('a', {
                  href: '#why-it-works',
                  className: 'text-light hover:text-primary transition-colors',
                  children: 'Why It Works',
                }),
                i.jsx('a', {
                  href: '#flavors',
                  className: 'text-light hover:text-primary transition-colors',
                  children: 'Flavors',
                }),
                i.jsx('a', {
                  href: '#benefits',
                  className: 'text-light hover:text-primary transition-colors',
                  children: 'Benefits',
                }),
                i.jsx('a', {
                  href: '#science',
                  className: 'text-light hover:text-primary transition-colors',
                  children: 'Science',
                }),
                i.jsx('a', {
                  href: '#pricing',
                  className: 'text-light hover:text-primary transition-colors',
                  children: 'Pricing',
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'hidden md:block relative group',
              children: [
                i.jsxs(Ae, {
                  variant: 'primary',
                  href: '#pricing',
                  className:
                    'relative overflow-hidden group-hover:scale-105 transform transition-all duration-500',
                  children: [
                    i.jsxs('span', {
                      className: 'relative z-10 text-center',
                      children: [
                        i.jsx('span', {
                          className: 'text-lg font-bold block',
                          children: 'Try It Free',
                        }),
                        i.jsx('span', {
                          className: 'block text-sm font-normal opacity-90',
                          children: 'Just Cover Shipping',
                        }),
                      ],
                    }),
                    i.jsx('div', {
                      className:
                        'absolute inset-0 bg-gradient-to-r from-cta via-primary via-blue to-cta bg-[length:300%_100%] animate-shimmer opacity-90',
                    }),
                  ],
                }),
                i.jsx('div', {
                  className:
                    'absolute -inset-[2px] bg-gradient-to-r from-cta via-primary via-blue to-cta opacity-0 blur-md group-hover:opacity-75 transition-opacity duration-700 -z-10',
                }),
              ],
            }),
            i.jsx('button', {
              className: 'md:hidden text-light hover:text-primary',
              onClick: l,
              'aria-label': 'Toggle mobile menu',
              children: i.jsx('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                className: 'h-6 w-6',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                children: i.jsx('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  d: n ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16',
                }),
              }),
            }),
          ],
        }),
        n &&
          i.jsx('div', {
            className: 'md:hidden bg-darker py-4 px-4 shadow-lg',
            children: i.jsxs('nav', {
              className: 'flex flex-col space-y-4',
              children: [
                i.jsx('a', {
                  href: '#why-it-works',
                  className:
                    'text-light hover:text-primary transition-colors py-2',
                  onClick: () => r(!1),
                  children: 'Why It Works',
                }),
                i.jsx('a', {
                  href: '#flavors',
                  className:
                    'text-light hover:text-primary transition-colors py-2',
                  onClick: () => r(!1),
                  children: 'Flavors',
                }),
                i.jsx('a', {
                  href: '#benefits',
                  className:
                    'text-light hover:text-primary transition-colors py-2',
                  onClick: () => r(!1),
                  children: 'Benefits',
                }),
                i.jsx('a', {
                  href: '#science',
                  className:
                    'text-light hover:text-primary transition-colors py-2',
                  onClick: () => r(!1),
                  children: 'Science',
                }),
                i.jsx('a', {
                  href: '#pricing',
                  className:
                    'text-light hover:text-primary transition-colors py-2',
                  onClick: () => r(!1),
                  children: 'Pricing',
                }),
                i.jsxs(Ae, {
                  variant: 'primary',
                  href: '#pricing',
                  onClick: () => r(!1),
                  fullWidth: !0,
                  className: 'relative overflow-hidden',
                  children: [
                    i.jsxs('span', {
                      className: 'relative z-10 text-center',
                      children: [
                        i.jsx('span', {
                          className: 'text-lg font-bold block',
                          children: 'Try It Free',
                        }),
                        i.jsx('span', {
                          className: 'block text-sm font-normal opacity-90',
                          children: 'Just Cover Shipping',
                        }),
                      ],
                    }),
                    i.jsx('div', {
                      className:
                        'absolute inset-0 bg-gradient-to-r from-cta via-primary via-blue to-cta bg-[length:300%_100%] animate-shimmer opacity-90',
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  };
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Yf = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  R = (e, t) => {
    const n = O.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: a,
          className: o = '',
          children: u,
          ...d
        },
        x
      ) =>
        O.createElement(
          'svg',
          {
            ref: x,
            ...Yf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: a ? (Number(s) * 24) / Number(l) : s,
            className: ['lucide', `lucide-${bf(e)}`, o].join(' '),
            ...d,
          },
          [
            ...t.map(([h, p]) => O.createElement(h, p)),
            ...(Array.isArray(u) ? u : [u]),
          ]
        )
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jl = R('AlertCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = R('Award', [
  ['circle', { cx: '12', cy: '8', r: '6', key: '1vp47v' }],
  ['path', { d: 'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11', key: 'em7aur' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mc = R('Battery', [
  [
    'rect',
    {
      width: '16',
      height: '10',
      x: '2',
      y: '7',
      rx: '2',
      ry: '2',
      key: '1w10f2',
    },
  ],
  ['line', { x1: '22', x2: '22', y1: '11', y2: '13', key: '4dh1rd' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = R('BookOpen', [
  ['path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', key: 'vv98re' }],
  ['path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z', key: '1cyq3y' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const er = R('Brain', [
  [
    'path',
    {
      d: 'M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z',
      key: '1mhkh5',
    },
  ],
  [
    'path',
    {
      d: 'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z',
      key: '1d6s00',
    },
  ],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const se = R('CheckCircle', [
  ['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' }],
  ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = R('ChevronDown', [
  ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = R('ChevronUp', [
  ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = R('Chrome', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
  ['line', { x1: '21.17', x2: '12', y1: '8', y2: '8', key: 'a0cw5f' }],
  ['line', { x1: '3.95', x2: '8.54', y1: '6.06', y2: '14', key: '1kftof' }],
  ['line', { x1: '10.88', x2: '15.46', y1: '21.94', y2: '14', key: '1ymyh8' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const em = R('Clock', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tm = R('CreditCard', [
  [
    'rect',
    { width: '20', height: '14', x: '2', y: '5', rx: '2', key: 'ynyp8z' },
  ],
  ['line', { x1: '2', x2: '22', y1: '10', y2: '10', key: '1b3vmo' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nm = R('Facebook', [
  [
    'path',
    {
      d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
      key: '1jg4f8',
    },
  ],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pc = R('FlaskRound', [
  ['path', { d: 'M10 2v7.31', key: '5d1hyh' }],
  ['path', { d: 'M14 9.3V1.99', key: '14k4l0' }],
  ['path', { d: 'M8.5 2h7', key: 'csnxdl' }],
  ['path', { d: 'M14 9.3a6.5 6.5 0 1 1-4 0', key: '1r8fvy' }],
  ['path', { d: 'M5.52 16h12.96', key: '46hh1i' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rm = R('Instagram', [
  [
    'rect',
    {
      width: '20',
      height: '20',
      x: '2',
      y: '2',
      rx: '5',
      ry: '5',
      key: '2e1cvw',
    },
  ],
  [
    'path',
    { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: '9exkf1' },
  ],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'r4j83e' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lm = R('Leaf', [
  [
    'path',
    {
      d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z',
      key: 'nnexq3',
    },
  ],
  [
    'path',
    { d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12', key: 'mt58a7' },
  ],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sm = R('Lock', [
  [
    'rect',
    {
      width: '18',
      height: '11',
      x: '3',
      y: '11',
      rx: '2',
      ry: '2',
      key: '1w4ew1',
    },
  ],
  ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const im = R('Mic', [
  [
    'path',
    {
      d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z',
      key: '131961',
    },
  ],
  ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2', key: '1vc78b' }],
  ['line', { x1: '12', x2: '12', y1: '19', y2: '22', key: 'x3vr5v' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const am = R('Play', [
  ['polygon', { points: '5 3 19 12 5 21 5 3', key: '191637' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const om = R('Scale', [
  [
    'path',
    { d: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', key: '7g6ntu' },
  ],
  [
    'path',
    { d: 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', key: 'ijws7r' },
  ],
  ['path', { d: 'M7 21h10', key: '1b0cd5' }],
  ['path', { d: 'M12 3v18', key: '108xh3' }],
  ['path', { d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2', key: '3gwbw2' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hc = R('ShieldCheck', [
  ['path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10', key: '1irkt0' }],
  ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const um = R('Shield', [
  ['path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10', key: '1irkt0' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xc = R('Star', [
  [
    'polygon',
    {
      points:
        '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
      key: '8f66p6',
    },
  ],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cm = R('Tag', [
  [
    'path',
    {
      d: 'M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z',
      key: '14b2ls',
    },
  ],
  ['path', { d: 'M7 7h.01', key: '7u93v4' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = R('Target', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = R('Twitter', [
  [
    'path',
    {
      d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
      key: 'pff0z6',
    },
  ],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vc = R('Users', [
  ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
  ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
  ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75', key: '1da9ce' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ve = R('X', [
  ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
  ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mm = R('Youtube', [
  [
    'path',
    {
      d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17',
      key: '1q2vi4',
    },
  ],
  ['path', { d: 'm10 15 5-3-5-3z', key: '1jp15x' }],
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bs = R('Zap', [
    [
      'polygon',
      { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2', key: '45s27k' },
    ],
  ]),
  pm = () => {
    const e = O.useRef(null);
    return (
      O.useEffect(() => {
        const t = new IntersectionObserver(
            (r) => {
              r.forEach((l) => {
                l.isIntersecting && l.target.classList.add('is-visible');
              });
            },
            { threshold: 0.1 }
          ),
          n = document.querySelectorAll('.fade-in');
        return (
          n.forEach((r) => t.observe(r)),
          () => {
            n.forEach((r) => t.unobserve(r));
          }
        );
      }, []),
      i.jsxs('section', {
        className:
          'min-h-screen pt-24 pb-16 relative overflow-hidden neural-bg',
        children: [
          i.jsx('div', {
            className: 'absolute inset-0 bg-neuron-pattern opacity-5',
          }),
          i.jsx('div', {
            className: 'container-custom relative z-10',
            children: i.jsxs('div', {
              className: 'grid lg:grid-cols-2 gap-12 items-center',
              children: [
                i.jsxs('div', {
                  className: 'fade-in',
                  children: [
                    i.jsx('p', {
                      className: 'text-primary font-semibold mb-2',
                      children: 'DAILY NOOTROPIC DRINK MIX',
                    }),
                    i.jsxs('h1', {
                      className: 'text-white mb-4',
                      children: [
                        'UNLOCK YOUR ',
                        i.jsx('br', {}),
                        i.jsx('span', {
                          className: 'text-primary',
                          children: 'MENTAL EDGE',
                        }),
                      ],
                    }),
                    i.jsx('h3', {
                      className: 'text-white mb-4',
                      children: 'ENGINEERED FOR PEAK PERFORMANCE',
                    }),
                    i.jsx('p', {
                      className:
                        'text-primary text-3xl font-bold mb-6 tracking-wide',
                      children: 'Clarity. Energy. Focus.',
                    }),
                    i.jsx('p', {
                      className: 'text-light mb-8 max-w-md',
                      children:
                        'Experience cognitive enhancement with our scientifically formulated nootropic drink mix. Optimize your mind.',
                    }),
                    i.jsxs('div', {
                      className: 'flex flex-wrap gap-4 mb-12',
                      children: [
                        i.jsx(Ae, {
                          variant: 'cta',
                          href: '#pricing',
                          className:
                            'px-8 py-4 text-lg font-bold hover:transform hover:scale-105 transition-transform',
                          children: 'Shop Now',
                        }),
                        i.jsx(Ae, {
                          variant: 'mint',
                          href: '#pricing',
                          className:
                            'px-8 py-4 text-lg font-bold hover:transform hover:scale-105 transition-transform',
                          children: 'Try Free Sample',
                        }),
                      ],
                    }),
                    i.jsxs('div', {
                      ref: e,
                      className: 'grid grid-cols-1 sm:grid-cols-3 gap-6',
                      children: [
                        i.jsxs('div', {
                          className: 'fade-in flex items-center',
                          children: [
                            i.jsx(em, {
                              className: 'h-6 w-6 text-primary mr-2',
                            }),
                            i.jsxs('p', {
                              className: 'text-white',
                              children: [
                                'Focus kicks in: ',
                                i.jsx('span', {
                                  className: 'text-primary font-semibold',
                                  children: '30 minutes',
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsxs('div', {
                          className: 'fade-in flex items-center',
                          style: { transitionDelay: '0.2s' },
                          children: [
                            i.jsx(vc, {
                              className: 'h-6 w-6 text-primary mr-2',
                            }),
                            i.jsx('p', {
                              className: 'text-white',
                              children: '10,000+ students trust MindMix',
                            }),
                          ],
                        }),
                        i.jsxs('div', {
                          className: 'fade-in flex items-center',
                          style: { transitionDelay: '0.4s' },
                          children: [
                            i.jsx(um, {
                              className: 'h-6 w-6 text-primary mr-2',
                            }),
                            i.jsx('p', {
                              className: 'text-white',
                              children: 'Zero crash guarantee',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'fade-in relative',
                  style: { transitionDelay: '0.3s' },
                  children: [
                    i.jsxs('div', {
                      className:
                        'relative flex justify-center items-center h-[500px]',
                      children: [
                        i.jsx('div', {
                          className:
                            'absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/[0.01] to-transparent opacity-30 blur-3xl',
                        }),
                        i.jsx('div', {
                          className:
                            'transform -rotate-12 translate-x-12 animate-float shadow-2xl',
                          style: { animationDelay: '0.5s' },
                          children: i.jsxs('div', {
                            className:
                              'h-96 w-20 bg-darker rounded-2xl border border-primary/20 flex items-end justify-center pb-4 overflow-hidden relative z-20',
                            children: [
                              i.jsx('div', {
                                className:
                                  'absolute inset-0 bg-gradient-to-t from-citrus/10 via-transparent to-transparent',
                              }),
                              i.jsx('div', {
                                className:
                                  'w-full h-1/2 bg-gradient-to-t from-citrus/20 to-transparent',
                              }),
                            ],
                          }),
                        }),
                        i.jsx('div', {
                          className:
                            'z-30 transform translate-y-8 animate-float shadow-2xl',
                          style: { animationDelay: '0.3s' },
                          children: i.jsxs('div', {
                            className:
                              'h-96 w-20 bg-dark rounded-2xl border border-primary/30 flex items-end justify-center pb-4 overflow-hidden relative',
                            children: [
                              i.jsx('div', {
                                className:
                                  'absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent',
                              }),
                              i.jsx('div', {
                                className:
                                  'w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent',
                              }),
                            ],
                          }),
                        }),
                        i.jsx('div', {
                          className:
                            'transform rotate-12 -translate-x-12 animate-float shadow-2xl z-20',
                          children: i.jsxs('div', {
                            className:
                              'h-96 w-20 bg-darker rounded-2xl border border-blue/20 flex items-end justify-center pb-4 overflow-hidden relative',
                            children: [
                              i.jsx('div', {
                                className:
                                  'absolute inset-0 bg-gradient-to-t from-blue/10 via-transparent to-transparent',
                              }),
                              i.jsx('div', {
                                className:
                                  'w-full h-1/2 bg-gradient-to-t from-blue/20 to-transparent',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    i.jsxs('div', {
                      className: 'text-center mt-8',
                      children: [
                        i.jsx('p', {
                          className: 'text-light/80',
                          children: 'Scroll to explore your mental upgrade',
                        }),
                        i.jsx('div', {
                          className:
                            'mt-2 mx-auto h-10 w-5 border-2 border-light/20 rounded-full flex justify-center',
                          children: i.jsx('div', {
                            className:
                              'w-1 h-2 bg-primary rounded-full animate-bounce mt-1',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  hm = ({
    isOpen: e,
    onClose: t,
    title: n,
    description: r,
    science: l,
    imageUrl: s,
    benefits: a,
  }) =>
    e
      ? i.jsxs('div', {
          className: 'fixed inset-0 z-50 flex items-center justify-center p-4',
          children: [
            i.jsx('div', {
              className: 'absolute inset-0 bg-black/80',
              onClick: t,
            }),
            i.jsxs('div', {
              className:
                'relative bg-darker max-w-4xl w-full rounded-xl overflow-hidden',
              children: [
                i.jsx('button', {
                  onClick: t,
                  className:
                    'absolute top-4 right-4 text-light hover:text-primary transition-colors',
                  children: i.jsx(ve, { className: 'h-6 w-6' }),
                }),
                i.jsxs('div', {
                  className: 'h-64 relative',
                  children: [
                    i.jsx('img', {
                      src: s,
                      alt: n,
                      className: 'w-full h-full object-cover',
                    }),
                    i.jsx('div', {
                      className:
                        'absolute inset-0 bg-gradient-to-t from-darker to-transparent',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'p-8',
                  children: [
                    i.jsx('h3', {
                      className: 'text-3xl font-bold text-white mb-2',
                      children: n,
                    }),
                    i.jsx('p', {
                      className: 'text-primary text-lg mb-6',
                      children: r,
                    }),
                    i.jsxs('div', {
                      className: 'mb-8',
                      children: [
                        i.jsx('h4', {
                          className: 'text-white text-xl font-semibold mb-4',
                          children: 'The Science',
                        }),
                        i.jsx('p', { className: 'text-light', children: l }),
                      ],
                    }),
                    i.jsxs('div', {
                      children: [
                        i.jsx('h4', {
                          className: 'text-white text-xl font-semibold mb-4',
                          children: 'Key Benefits',
                        }),
                        i.jsx('ul', {
                          className: 'grid grid-cols-2 gap-4',
                          children: a.map((o, u) =>
                            i.jsxs(
                              'li',
                              {
                                className: 'flex items-start',
                                children: [
                                  i.jsx('div', {
                                    className:
                                      'h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0',
                                  }),
                                  i.jsx('span', {
                                    className: 'text-light',
                                    children: o,
                                  }),
                                ],
                              },
                              u
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null,
  kn = ({
    icon: e,
    title: t,
    description: n,
    timeToWork: r,
    delay: l = 0,
    className: s = '',
    modalContent: a,
  }) => {
    const [o, u] = O.useState(!1);
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs('button', {
          onClick: () => u(!0),
          className: `feature-card group hover:shadow-glow fade-in text-left ${s}`,
          style: { transitionDelay: `${l}s` },
          children: [
            i.jsx('div', { className: 'mb-4', children: e }),
            i.jsx('h4', {
              className:
                'text-white text-lg font-semibold mb-2 group-hover:text-primary transition-colors',
              children: t,
            }),
            i.jsx('p', { className: 'text-light mb-4', children: n }),
            i.jsxs('div', {
              className: 'flex items-center text-sm',
              children: [
                i.jsx('div', {
                  className: 'h-2 w-2 rounded-full bg-primary mr-2',
                }),
                i.jsxs('span', {
                  className: 'text-primary',
                  children: ['Works in ', r],
                }),
              ],
            }),
            i.jsx('div', {
              className:
                'mt-4 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500',
            }),
          ],
        }),
        i.jsx(hm, {
          isOpen: o,
          onClose: () => u(!1),
          title: t,
          description: n,
          science: a.science,
          imageUrl: a.imageUrl,
          benefits: a.benefits,
        }),
      ],
    });
  },
  xm = () => (
    O.useEffect(() => {
      const e = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        t = document.querySelectorAll('.fade-in');
      return (
        t.forEach((n) => e.observe(n)),
        () => {
          t.forEach((n) => e.unobserve(n));
        }
      );
    }, []),
    i.jsxs(i.Fragment, {
      children: [
        i.jsxs('section', {
          className: 'py-16 md:py-24 relative overflow-hidden',
          children: [
            i.jsxs('div', {
              className: 'absolute inset-0',
              children: [
                i.jsx('img', {
                  src: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
                  alt: 'Rhodiola flowers',
                  className: 'w-full h-full object-cover',
                }),
                i.jsx('div', {
                  className: 'absolute inset-0 bg-dark/90 backdrop-blur-sm',
                }),
                i.jsx('div', {
                  className:
                    'absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-40',
                }),
              ],
            }),
            i.jsx('div', {
              className: 'container-custom relative z-10',
              children: i.jsxs('div', {
                className: 'text-center max-w-3xl mx-auto fade-in',
                children: [
                  i.jsxs('h2', {
                    className:
                      'text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4',
                    children: [
                      'POWERED BY ',
                      i.jsx('span', {
                        className: 'text-primary',
                        children: 'RHODIOLA',
                      }),
                    ],
                  }),
                  i.jsx('p', {
                    className: 'text-light text-base md:text-xl px-4',
                    children:
                      'The adaptogenic powerhouse behind peak mental performance',
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsxs('section', {
          id: 'why-it-works',
          className: 'section-padding bg-dark relative',
          children: [
            i.jsx('div', {
              className: 'absolute inset-0 bg-neuron-pattern opacity-5',
            }),
            i.jsxs('div', {
              className: 'container-custom relative z-10',
              children: [
                i.jsxs('div', {
                  className:
                    'text-center max-w-3xl mx-auto mb-8 md:mb-16 fade-in px-4',
                  children: [
                    i.jsxs('h2', {
                      className: 'text-white text-2xl md:text-4xl mb-4',
                      children: [
                        'NEURAL PATHWAYS ',
                        i.jsx('span', {
                          className: 'text-primary',
                          children: 'ACTIVATED',
                        }),
                      ],
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm md:text-base',
                      children:
                        'Science-backed formula designed for cognitive enhancement',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className:
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4',
                  children: [
                    i.jsx(kn, {
                      icon: i.jsx(er, {
                        className: 'h-8 w-8 md:h-10 md:w-10 text-primary',
                      }),
                      title: 'Rhodiola Rosea',
                      description:
                        'Enhanced focus without burnout + stress adaptation',
                      timeToWork: '30-45 minutes',
                      delay: 0,
                      modalContent: {
                        science:
                          'Rhodiola Rosea is an adaptogenic herb that has been used in traditional medicine for centuries. Clinical studies show it helps reduce mental fatigue and improves cognitive function during stress-inducing tasks by modulating cortisol levels and enhancing neurotransmitter activity.',
                        imageUrl:
                          'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
                        benefits: [
                          'Reduces mental fatigue',
                          'Improves stress resilience',
                          'Enhances cognitive performance',
                          'Boosts mental energy',
                          'Supports mood balance',
                          'Optimizes brain function',
                        ],
                      },
                    }),
                    i.jsx(kn, {
                      icon: i.jsx(Jf, {
                        className: 'h-8 w-8 md:h-10 md:w-10 text-primary',
                      }),
                      title: "Lion's Mane",
                      description:
                        'Accelerated memory retention + neural growth',
                      timeToWork: '40-60 minutes',
                      delay: 0.1,
                      modalContent: {
                        science:
                          "Lion's Mane mushroom contains compounds that stimulate the production of nerve growth factor (NGF), supporting neuroplasticity and cognitive function. Research indicates it can enhance memory formation and protect against cognitive decline.",
                        imageUrl:
                          'https://images.pexels.com/photos/6157034/pexels-photo-6157034.jpeg',
                        benefits: [
                          'Supports nerve growth',
                          'Enhances memory formation',
                          'Improves focus and clarity',
                          'Protects brain cells',
                          'Boosts learning ability',
                          'Promotes neuroplasticity',
                        ],
                      },
                    }),
                    i.jsx(kn, {
                      icon: i.jsx(bs, {
                        className: 'h-8 w-8 md:h-10 md:w-10 text-primary',
                      }),
                      title: 'L-Theanine',
                      description:
                        'Optimized neurotransmitter function + mental clarity',
                      timeToWork: '20-30 minutes',
                      delay: 0.2,
                      modalContent: {
                        science:
                          'L-Theanine is an amino acid that promotes alpha brain wave activity, creating a state of relaxed alertness. It works synergistically with caffeine to enhance focus while reducing jitters and anxiety.',
                        imageUrl:
                          'https://images.pexels.com/photos/5417678/pexels-photo-5417678.jpeg',
                        benefits: [
                          'Promotes calm alertness',
                          'Reduces mental stress',
                          'Enhances focus',
                          'Improves sleep quality',
                          'Supports cognitive function',
                          'Balances mood',
                        ],
                      },
                    }),
                    i.jsx(kn, {
                      icon: i.jsx(lm, {
                        className: 'h-8 w-8 md:h-10 md:w-10 text-primary',
                      }),
                      title: 'Green Tea Extract',
                      description:
                        'Sustained cognitive energy + antioxidant protection',
                      timeToWork: '15-30 minutes',
                      delay: 0.3,
                      modalContent: {
                        science:
                          'Green tea extract contains EGCG and L-theanine, providing sustained energy and neuroprotective benefits. Studies show it enhances memory and attention while protecting brain cells from oxidative stress.',
                        imageUrl:
                          'https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg',
                        benefits: [
                          'Sustained energy',
                          'Antioxidant protection',
                          'Enhanced memory',
                          'Improved attention',
                          'Neuroprotective effects',
                          'Cellular health support',
                        ],
                      },
                    }),
                    i.jsx(kn, {
                      icon: i.jsx(mc, {
                        className: 'h-8 w-8 md:h-10 md:w-10 text-primary',
                      }),
                      title: 'Vitamin B12',
                      description: 'Neural pathway optimization + brain fuel',
                      timeToWork: '45-60 minutes',
                      delay: 0.4,
                      modalContent: {
                        science:
                          'Vitamin B12 is essential for neural metabolism and DNA synthesis. It supports myelin formation, enhancing signal transmission between neurons and maintaining cognitive function.',
                        imageUrl:
                          'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg',
                        benefits: [
                          'Supports brain energy',
                          'Enhances neural signals',
                          'Maintains cognitive function',
                          'Promotes mental clarity',
                          'Supports memory',
                          'Optimizes brain health',
                        ],
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  es = ({
    name: e,
    tagline: t,
    description: n,
    useCase: r,
    colorClass: l,
    accentColor: s,
    delay: a = 0,
  }) => {
    const [o, u] = O.useState(!1);
    return i.jsxs('div', {
      className: `card p-6 h-96 relative overflow-hidden fade-in ${s} border border-opacity-30 hover:border-opacity-100 transition-all duration-500`,
      style: { transitionDelay: `${a}s` },
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      children: [
        i.jsx('div', {
          className: `absolute inset-0 bg-gradient-to-t ${l} opacity-30 transition-opacity duration-500 ${o ? 'opacity-50' : 'opacity-30'}`,
        }),
        i.jsxs('div', {
          className: 'relative z-10 h-full flex flex-col',
          children: [
            i.jsxs('div', {
              className: 'mb-4',
              children: [
                i.jsx('h3', {
                  className: 'text-white text-2xl font-bold',
                  children: e,
                }),
                i.jsx('p', {
                  className: 'text-primary font-medium',
                  children: t,
                }),
              ],
            }),
            i.jsx('div', {
              className: 'flex-grow',
              children: i.jsx('div', {
                className: `mx-auto w-12 h-64 relative bg-dark border ${s} border-opacity-50 rounded-md overflow-hidden transition-transform duration-500 ${o ? 'transform -translate-y-4' : ''}`,
                children: i.jsx('div', {
                  className: `absolute bottom-0 w-full h-1/2 bg-gradient-to-t ${l}`,
                }),
              }),
            }),
            i.jsxs('div', {
              className: 'mt-auto',
              children: [
                i.jsxs('div', {
                  className: 'bg-dark/70 p-3 rounded-md',
                  children: [
                    i.jsx('p', {
                      className: 'text-light text-sm mb-1',
                      children: n,
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: r,
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'mt-3 flex items-center justify-between',
                  children: [
                    i.jsx('span', {
                      className: 'text-xs text-light',
                      children: '1 SERVING | POWERED BY RHODIOLA',
                    }),
                    i.jsxs('span', {
                      className: 'text-xs text-primary font-medium',
                      children: [
                        e === 'CITRUS ICE' && '4AM hustle ready',
                        e === 'LEMON MINT' && 'All-day clarity',
                        e === 'BLUE SURGE' && 'Flow state activated',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  vm = () => (
    O.useEffect(() => {
      const e = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        t = document.querySelectorAll('.fade-in');
      return (
        t.forEach((n) => e.observe(n)),
        () => {
          t.forEach((n) => e.unobserve(n));
        }
      );
    }, []),
    i.jsxs('section', {
      id: 'flavors',
      className:
        'section-padding bg-gradient-to-b from-dark to-darker relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsxs('div', {
          className: 'container-custom relative z-10',
          children: [
            i.jsxs('div', {
              className: 'text-center max-w-4xl mx-auto mb-16 fade-in',
              children: [
                i.jsxs('h2', {
                  className: 'text-white mb-6',
                  children: [
                    i.jsx('span', {
                      className:
                        'block text-5xl md:text-6xl font-bold tracking-tight',
                      children: 'CHOOSE YOUR',
                    }),
                    i.jsx('span', {
                      className:
                        'block text-5xl md:text-6xl font-bold tracking-tight mt-2 text-primary',
                      children: 'COGNITIVE CATALYST',
                    }),
                  ],
                }),
                i.jsx('p', {
                  className: 'text-light text-xl',
                  children:
                    'Three scientifically-formulated flavors, each optimized for peak mental performance',
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'grid md:grid-cols-3 gap-8 mb-16',
              children: [
                i.jsx(es, {
                  name: 'CITRUS ICE',
                  tagline: 'Morning Focus Boost',
                  description: 'Energizing and bright',
                  useCase: 'Perfect for early productivity',
                  colorClass: 'from-citrus/20 to-transparent',
                  accentColor: 'border-citrus',
                  delay: 0,
                }),
                i.jsx(es, {
                  name: 'LEMON MINT',
                  tagline: 'Sustained Mental Energy',
                  description: 'Cool and refreshing',
                  useCase: 'Long-duration focus sessions',
                  colorClass: 'from-mint/20 to-transparent',
                  accentColor: 'border-mint',
                  delay: 0.2,
                }),
                i.jsx(es, {
                  name: 'BLUE SURGE',
                  tagline: 'Deep Work Sessions',
                  description: 'Bold and intense',
                  useCase: 'Maximum concentration mode',
                  colorClass: 'from-blue/20 to-transparent',
                  accentColor: 'border-blue',
                  delay: 0.4,
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'text-center fade-in',
              children: [
                i.jsx('p', {
                  className: 'text-light text-lg mb-8',
                  children:
                    'Mix & match for your optimal cognitive routine throughout the day',
                }),
                i.jsx(Ae, {
                  variant: 'mint',
                  href: '#pricing',
                  className: 'text-lg px-8 py-4',
                  children: 'Try All Three Flavors',
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  ym = () => {
    const [e, t] = O.useState(0),
      n = [
        {
          url: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Deadline ready',
        },
        {
          url: 'https://images.pexels.com/photos/6893988/pexels-photo-6893988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Morning mental edge',
        },
        {
          url: 'https://images.pexels.com/photos/8473359/pexels-photo-8473359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Creative flow unlocked',
        },
        {
          url: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          caption: 'Mind-muscle connection',
        },
      ];
    return (
      O.useEffect(() => {
        const r = new IntersectionObserver(
            (a) => {
              a.forEach((o) => {
                o.isIntersecting && o.target.classList.add('is-visible');
              });
            },
            { threshold: 0.1 }
          ),
          l = document.querySelectorAll('.fade-in');
        l.forEach((a) => r.observe(a));
        const s = setInterval(() => {
          t((a) => (a + 1) % n.length);
        }, 5e3);
        return () => {
          (l.forEach((a) => r.unobserve(a)), clearInterval(s));
        };
      }, [n.length]),
      i.jsxs('section', {
        className: 'section-padding bg-darker relative',
        children: [
          i.jsx('div', {
            className: 'absolute inset-0 bg-neuron-pattern opacity-5',
          }),
          i.jsx('div', {
            className: 'container-custom relative z-10',
            children: i.jsxs('div', {
              className: 'grid md:grid-cols-2 gap-12 items-center',
              children: [
                i.jsxs('div', {
                  className:
                    'fade-in h-[500px] relative rounded-xl overflow-hidden',
                  children: [
                    n.map((r, l) =>
                      i.jsxs(
                        'div',
                        {
                          className: `absolute inset-0 transition-opacity duration-1000 ${e === l ? 'opacity-100' : 'opacity-0'}`,
                          children: [
                            i.jsx('img', {
                              src: r.url,
                              alt: r.caption,
                              className: 'w-full h-full object-cover',
                            }),
                            i.jsx('div', {
                              className:
                                'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent p-6',
                              children: i.jsx('p', {
                                className: 'text-white text-xl font-semibold',
                                children: r.caption,
                              }),
                            }),
                          ],
                        },
                        l
                      )
                    ),
                    i.jsx('div', {
                      className:
                        'absolute bottom-4 left-0 right-0 flex justify-center space-x-2',
                      children: n.map((r, l) =>
                        i.jsx(
                          'button',
                          {
                            className: `w-2 h-2 rounded-full transition-all duration-300 ${e === l ? 'bg-primary w-6' : 'bg-white/50'}`,
                            onClick: () => t(l),
                            'aria-label': `Go to image ${l + 1}`,
                          },
                          l
                        )
                      ),
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'fade-in',
                  style: { transitionDelay: '0.2s' },
                  children: [
                    i.jsxs('h2', {
                      className: 'text-white mb-4',
                      children: [
                        'DIALED IN. ',
                        i.jsx('span', {
                          className: 'text-primary',
                          children: 'NOT ON EDGE.',
                        }),
                      ],
                    }),
                    i.jsx('p', {
                      className: 'text-light mb-8',
                      children: 'Peak mental performance when you need it most',
                    }),
                    i.jsxs('div', {
                      className: 'space-y-4 mb-8',
                      children: [
                        i.jsxs('div', {
                          className: 'flex items-start',
                          children: [
                            i.jsx(se, {
                              className:
                                'h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3',
                            }),
                            i.jsx('p', {
                              className: 'text-light',
                              children:
                                'No jitters, no crash, just sustained clarity',
                            }),
                          ],
                        }),
                        i.jsxs('div', {
                          className: 'flex items-start',
                          children: [
                            i.jsx(se, {
                              className:
                                'h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3',
                            }),
                            i.jsx('p', {
                              className: 'text-light',
                              children:
                                'Enhanced productivity within 30 minutes',
                            }),
                          ],
                        }),
                        i.jsxs('div', {
                          className: 'flex items-start',
                          children: [
                            i.jsx(se, {
                              className:
                                'h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3',
                            }),
                            i.jsx('p', {
                              className: 'text-light',
                              children: 'Trusted by 10,000+ high performers',
                            }),
                          ],
                        }),
                        i.jsxs('div', {
                          className: 'flex items-start',
                          children: [
                            i.jsx(se, {
                              className:
                                'h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3',
                            }),
                            i.jsx('p', {
                              className: 'text-light',
                              children: 'Featured in top productivity podcasts',
                            }),
                          ],
                        }),
                        i.jsxs('div', {
                          className: 'flex items-start',
                          children: [
                            i.jsx(se, {
                              className:
                                'h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3',
                            }),
                            i.jsx('p', {
                              className: 'text-light',
                              children: 'Zero artificial stimulants',
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs('div', {
                      className: 'flex flex-wrap gap-4',
                      children: [
                        i.jsx(Ae, {
                          variant: 'primary',
                          href: '#pricing',
                          children: 'Experience the Edge',
                        }),
                        i.jsx(Ae, {
                          variant: 'secondary',
                          href: '#science',
                          children: 'Learn the Science',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Ft = ({ icon: e, title: t, description: n, delay: r = 0 }) =>
    i.jsxs('div', {
      className: 'feature-card group hover:shadow-glow fade-in',
      style: { transitionDelay: `${r}s` },
      children: [
        i.jsx('div', { className: 'mb-4 text-primary', children: e }),
        i.jsx('h4', {
          className:
            'text-white text-lg font-semibold mb-2 group-hover:text-primary transition-colors',
          children: t,
        }),
        i.jsx('p', { className: 'text-light', children: n }),
        i.jsx('div', {
          className:
            'mt-4 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500',
        }),
      ],
    }),
  gm = () => (
    O.useEffect(() => {
      const e = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        t = document.querySelectorAll('.fade-in');
      return (
        t.forEach((n) => e.observe(n)),
        () => {
          t.forEach((n) => e.unobserve(n));
        }
      );
    }, []),
    i.jsxs('section', {
      id: 'benefits',
      className: 'section-padding bg-dark relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsxs('div', {
          className: 'container-custom relative z-10',
          children: [
            i.jsxs('div', {
              className: 'text-center max-w-3xl mx-auto mb-16 fade-in',
              children: [
                i.jsxs('h2', {
                  className: 'text-white mb-4',
                  children: [
                    'HOW YOUR BRAIN ',
                    i.jsx('span', {
                      className: 'text-primary',
                      children: 'WILL FEEL',
                    }),
                  ],
                }),
                i.jsx('p', {
                  className: 'text-light',
                  children: 'Scientifically-measured cognitive improvements',
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12',
              children: [
                i.jsx(Ft, {
                  icon: i.jsx(bs, { className: 'h-10 w-10' }),
                  title: 'Enhanced processing speed',
                  description: 'Think faster, decide quicker',
                  delay: 0,
                }),
                i.jsx(Ft, {
                  icon: i.jsx(er, { className: 'h-10 w-10' }),
                  title: 'Improved memory retention',
                  description: 'Remember more, recall instantly',
                  delay: 0.1,
                }),
                i.jsx(Ft, {
                  icon: i.jsx(dm, { className: 'h-10 w-10' }),
                  title: 'Laser-sharp focus',
                  description: 'Deep work for hours without distraction',
                  delay: 0.2,
                }),
                i.jsx(Ft, {
                  icon: i.jsx(xc, { className: 'h-10 w-10' }),
                  title: 'Mental clarity',
                  description: 'Clear thoughts, confident decisions',
                  delay: 0.3,
                }),
                i.jsx(Ft, {
                  icon: i.jsx(om, { className: 'h-10 w-10' }),
                  title: 'Stress adaptation',
                  description: 'Calm under pressure, composed in chaos',
                  delay: 0.4,
                }),
                i.jsx(Ft, {
                  icon: i.jsx(mc, { className: 'h-10 w-10' }),
                  title: 'Sustained energy',
                  description: 'No crash, no fade, consistent performance',
                  delay: 0.5,
                }),
              ],
            }),
            i.jsx('div', {
              className: 'text-center fade-in',
              children: i.jsx(Ae, {
                variant: 'mint',
                href: '#pricing',
                children: 'Unlock Your Potential',
              }),
            }),
            i.jsx('div', {
              className: 'mt-20 fade-in',
              children: i.jsx('div', {
                className: 'bg-darker rounded-xl overflow-hidden',
                children: i.jsxs('div', {
                  className: 'relative',
                  children: [
                    i.jsxs('div', {
                      className: 'grid grid-cols-1 md:grid-cols-2',
                      children: [
                        i.jsxs('div', {
                          className: 'p-4 md:p-8 bg-darkest',
                          children: [
                            i.jsx('h4', {
                              className: 'text-white mb-4 text-lg md:text-xl',
                              children: 'BEFORE MINDMIX',
                            }),
                            i.jsxs('div', {
                              className: 'space-y-4 md:space-y-6',
                              children: [
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Focus',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className: 'w-1/3 h-full bg-primary/30',
                                      }),
                                    }),
                                  ],
                                }),
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Memory',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className: 'w-1/4 h-full bg-primary/30',
                                      }),
                                    }),
                                  ],
                                }),
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Clarity',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className: 'w-2/5 h-full bg-primary/30',
                                      }),
                                    }),
                                  ],
                                }),
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Energy',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className: 'w-1/2 h-full bg-primary/30',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsxs('div', {
                          className: 'p-4 md:p-8',
                          children: [
                            i.jsx('h4', {
                              className: 'text-primary mb-4 text-lg md:text-xl',
                              children: 'AFTER MINDMIX',
                            }),
                            i.jsxs('div', {
                              className: 'space-y-4 md:space-y-6',
                              children: [
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Focus',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className:
                                          'w-4/5 h-full bg-primary animate-pulse-slow',
                                      }),
                                    }),
                                  ],
                                }),
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Memory',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className:
                                          'w-3/4 h-full bg-primary animate-pulse-slow',
                                      }),
                                    }),
                                  ],
                                }),
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Clarity',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className:
                                          'w-5/6 h-full bg-primary animate-pulse-slow',
                                      }),
                                    }),
                                  ],
                                }),
                                i.jsxs('div', {
                                  className:
                                    'flex items-center justify-between gap-4',
                                  children: [
                                    i.jsx('span', {
                                      className:
                                        'text-light text-sm md:text-base whitespace-nowrap',
                                      children: 'Energy',
                                    }),
                                    i.jsx('div', {
                                      className:
                                        'w-24 md:w-32 h-3 md:h-4 bg-dark rounded-full overflow-hidden',
                                      children: i.jsx('div', {
                                        className:
                                          'w-4/5 h-full bg-primary animate-pulse-slow',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsx('div', {
                      className:
                        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 bg-primary rounded-full flex items-center justify-center z-10',
                      children: i.jsx(bs, {
                        className: 'h-5 w-5 md:h-6 md:w-6 text-dark',
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    })
  ),
  wm = () => (
    O.useEffect(() => {
      const e = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        t = document.querySelectorAll('.fade-in');
      return (
        t.forEach((n) => e.observe(n)),
        () => {
          t.forEach((n) => e.unobserve(n));
        }
      );
    }, []),
    i.jsxs('section', {
      id: 'science',
      className:
        'section-padding bg-gradient-to-b from-darker to-dark relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsxs('div', {
          className: 'container-custom relative z-10',
          children: [
            i.jsxs('div', {
              className: 'text-center max-w-3xl mx-auto mb-16 fade-in',
              children: [
                i.jsxs('h2', {
                  className: 'text-white mb-4',
                  children: [
                    'BACKED BY ',
                    i.jsx('span', {
                      className: 'text-primary',
                      children: 'NEUROSCIENCE',
                    }),
                  ],
                }),
                i.jsx('p', {
                  className: 'text-light',
                  children:
                    'Every ingredient chosen for maximum cognitive impact',
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'grid lg:grid-cols-2 gap-12 items-center',
              children: [
                i.jsx('div', {
                  className: 'fade-in',
                  children: i.jsxs('div', {
                    className:
                      'p-6 bg-darker rounded-xl border border-primary/20 hover:border-primary/40 transition-colors',
                    children: [
                      i.jsxs('div', {
                        className: 'flex items-center mb-6',
                        children: [
                          i.jsx(pc, { className: 'h-8 w-8 text-primary mr-3' }),
                          i.jsx('h3', {
                            className: 'text-white text-xl',
                            children: 'Clinical Research',
                          }),
                        ],
                      }),
                      i.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          i.jsxs('div', {
                            className: 'p-4 bg-darkest rounded-lg',
                            children: [
                              i.jsx('h5', {
                                className: 'text-primary font-medium mb-2',
                                children: 'Rhodiola Rosea',
                              }),
                              i.jsx('p', {
                                className: 'text-light text-sm',
                                children:
                                  'Clinical studies show Rhodiola can reduce mental fatigue and improve cognitive function during stress-inducing tasks.',
                              }),
                              i.jsx('p', {
                                className: 'text-xs text-light/70 mt-2',
                                children:
                                  'Source: Journal of Alternative and Complementary Medicine, 2018',
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            className: 'p-4 bg-darkest rounded-lg',
                            children: [
                              i.jsx('h5', {
                                className: 'text-primary font-medium mb-2',
                                children: "Lion's Mane Mushroom",
                              }),
                              i.jsx('p', {
                                className: 'text-light text-sm',
                                children:
                                  "Research indicates Lion's Mane supports nerve growth factor (NGF) production, enhancing neural growth and memory formation.",
                              }),
                              i.jsx('p', {
                                className: 'text-xs text-light/70 mt-2',
                                children:
                                  'Source: International Journal of Medicinal Mushrooms, 2019',
                              }),
                            ],
                          }),
                          i.jsxs('div', {
                            className: 'p-4 bg-darkest rounded-lg',
                            children: [
                              i.jsx('h5', {
                                className: 'text-primary font-medium mb-2',
                                children: 'L-Theanine + Green Tea',
                              }),
                              i.jsx('p', {
                                className: 'text-light text-sm',
                                children:
                                  'The combination demonstrates improved attention switching and reduced susceptibility to distraction compared to placebo.',
                              }),
                              i.jsx('p', {
                                className: 'text-xs text-light/70 mt-2',
                                children:
                                  'Source: Nutritional Neuroscience, 2020',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                i.jsx('div', {
                  className: 'fade-in',
                  style: { transitionDelay: '0.2s' },
                  children: i.jsxs('div', {
                    className: 'grid grid-cols-2 gap-6',
                    children: [
                      i.jsx('div', {
                        className:
                          'p-6 bg-darker rounded-xl border border-primary/20 hover:border-primary/40 transition-colors',
                        children: i.jsxs('div', {
                          className: 'flex flex-col items-center text-center',
                          children: [
                            i.jsx(Gf, {
                              className: 'h-12 w-12 text-primary mb-4',
                            }),
                            i.jsx('h4', {
                              className: 'text-white text-lg mb-2',
                              children: 'Third-Party Tested',
                            }),
                            i.jsx('p', {
                              className: 'text-light text-sm',
                              children:
                                'Every batch independently verified for purity and potency',
                            }),
                          ],
                        }),
                      }),
                      i.jsx('div', {
                        className:
                          'p-6 bg-darker rounded-xl border border-primary/20 hover:border-primary/40 transition-colors',
                        children: i.jsxs('div', {
                          className: 'flex flex-col items-center text-center',
                          children: [
                            i.jsx(er, {
                              className: 'h-12 w-12 text-primary mb-4',
                            }),
                            i.jsx('h4', {
                              className: 'text-white text-lg mb-2',
                              children: 'Neuroscientist Formulated',
                            }),
                            i.jsx('p', {
                              className: 'text-light text-sm',
                              children:
                                'Developed by cognitive performance experts',
                            }),
                          ],
                        }),
                      }),
                      i.jsx('div', {
                        className:
                          'p-6 bg-darker rounded-xl border border-primary/20 hover:border-primary/40 transition-colors',
                        children: i.jsxs('div', {
                          className: 'flex flex-col items-center text-center',
                          children: [
                            i.jsx(se, {
                              className: 'h-12 w-12 text-primary mb-4',
                            }),
                            i.jsx('h4', {
                              className: 'text-white text-lg mb-2',
                              children: 'Transparent Sourcing',
                            }),
                            i.jsx('p', {
                              className: 'text-light text-sm',
                              children:
                                'Full ingredient traceability and quality control',
                            }),
                          ],
                        }),
                      }),
                      i.jsx('div', {
                        className:
                          'p-6 bg-darker rounded-xl border border-primary/20 hover:border-primary/40 transition-colors',
                        children: i.jsxs('div', {
                          className: 'flex flex-col items-center text-center',
                          children: [
                            i.jsx(hc, {
                              className: 'h-12 w-12 text-primary mb-4',
                            }),
                            i.jsx('h4', {
                              className: 'text-white text-lg mb-2',
                              children: 'No Artificial Stimulants',
                            }),
                            i.jsx('p', {
                              className: 'text-light text-sm',
                              children:
                                'Clean formula without synthetic additives',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  ts = ({
    badge: e,
    title: t,
    subtitle: n,
    price: r,
    description: l,
    features: s,
    buttonText: a,
    buttonVariant: o,
    isPopular: u,
    delay: d = 0,
  }) =>
    i.jsxs('div', {
      className: `card fade-in h-full flex flex-col ${u ? 'border-2 border-primary relative transform hover:-translate-y-2' : 'border border-gray-800 hover:border-primary/30 transform hover:-translate-y-1'} transition-all duration-300`,
      style: { transitionDelay: `${d}s` },
      children: [
        e &&
          i.jsx('div', {
            className: 'absolute -top-4 left-0 right-0 flex justify-center',
            children: i.jsx('span', {
              className:
                'bg-primary text-dark text-xs font-bold px-4 py-1 rounded-full',
              children: e,
            }),
          }),
        i.jsxs('div', {
          className: 'p-6 flex flex-col flex-grow',
          children: [
            i.jsx('h3', {
              className: 'text-white text-xl font-bold mb-1',
              children: t,
            }),
            n &&
              i.jsx('p', {
                className: 'text-primary text-sm mb-4',
                children: n,
              }),
            i.jsxs('div', {
              className: 'mt-4 mb-6',
              children: [
                i.jsx('span', {
                  className: 'text-white text-3xl font-bold',
                  children: r,
                }),
                i.jsxs('span', {
                  className: 'text-light text-sm ml-2',
                  children: ['(', l, ')'],
                }),
              ],
            }),
            i.jsx('ul', {
              className: 'space-y-3 flex-grow',
              children: s.map((x, h) =>
                i.jsxs(
                  'li',
                  {
                    className: 'flex items-start',
                    children: [
                      i.jsx(se, {
                        className:
                          'h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2',
                      }),
                      i.jsx('span', {
                        className: 'text-light text-sm',
                        children: x,
                      }),
                    ],
                  },
                  h
                )
              ),
            }),
            i.jsx('div', {
              className: 'mt-8',
              children: i.jsx(Ae, {
                variant: o,
                href: '#contact',
                className: 'w-full',
                children: a,
              }),
            }),
          ],
        }),
      ],
    }),
  Nm = () => (
    O.useEffect(() => {
      const e = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        t = document.querySelectorAll('.fade-in');
      return (
        t.forEach((n) => e.observe(n)),
        () => {
          t.forEach((n) => e.unobserve(n));
        }
      );
    }, []),
    i.jsxs('section', {
      id: 'pricing',
      className: 'section-padding bg-dark relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsxs('div', {
          className: 'container-custom relative z-10',
          children: [
            i.jsxs('div', {
              className: 'text-center max-w-3xl mx-auto mb-16 fade-in',
              children: [
                i.jsxs('h2', {
                  className: 'text-white mb-4',
                  children: [
                    'CHOOSE YOUR ',
                    i.jsx('span', {
                      className: 'text-primary',
                      children: 'MENTAL ADVANTAGE',
                    }),
                  ],
                }),
                i.jsx('p', {
                  className: 'text-light',
                  children:
                    'Risk-free trial or select the plan that fits your performance goals',
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'grid md:grid-cols-3 gap-8',
              children: [
                i.jsx(ts, {
                  badge: 'MOST POPULAR',
                  title: 'COGNITIVE TRIAL PACK',
                  price: '$5.95',
                  description: 'Just Cover Shipping',
                  features: [
                    '3 premium stick packs (one of each flavor)',
                    'Complete ingredient profile guide',
                    'Performance tracking sheet',
                    '30-day money-back guarantee',
                    'No subscription, no commitment',
                    'Free mental performance guide PDF',
                  ],
                  buttonText: 'Unlock Your Edge - Try Free Today',
                  buttonVariant: 'mint',
                  isPopular: !0,
                  delay: 0,
                }),
                i.jsx(ts, {
                  badge: '',
                  title: 'FOCUS STARTER',
                  subtitle: '10-Pack',
                  price: '$29.95',
                  description: 'Save 25%',
                  features: [
                    'Mix & match all flavors',
                    'Free shipping nationwide',
                    'Performance optimization guide',
                    'Email coaching tips',
                    'Subscribe & save 15% option',
                    '30-day guarantee',
                  ],
                  buttonText: 'Start Performing',
                  buttonVariant: 'primary',
                  isPopular: !1,
                  delay: 0.2,
                }),
                i.jsx(ts, {
                  badge: '',
                  title: 'PEAK PERFORMER',
                  subtitle: '30-Pack',
                  price: '$79.95',
                  description: 'Save 35%',
                  features: [
                    'Complete monthly supply',
                    'Priority customer support',
                    'Exclusive performance content',
                    'Advanced mixing guide',
                    'Free shipping + tracking',
                    'Subscribe & save 20% option',
                    '60-day guarantee',
                  ],
                  buttonText: 'Go Pro',
                  buttonVariant: 'primary',
                  isPopular: !1,
                  delay: 0.4,
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'mt-16 grid md:grid-cols-4 gap-6 fade-in',
              children: [
                i.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    i.jsx(vc, {
                      className: 'h-6 w-6 text-primary mr-2 flex-shrink-0',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: 'Used by 10,000+ students during finals week',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    i.jsx(hc, {
                      className: 'h-6 w-6 text-primary mr-2 flex-shrink-0',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: '30-day money-back guarantee',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    i.jsx(tm, {
                      className: 'h-6 w-6 text-primary mr-2 flex-shrink-0',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: 'No subscription required for trial',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    i.jsx(sm, {
                      className: 'h-6 w-6 text-primary mr-2 flex-shrink-0',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: 'Secure checkout with encryption',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  Er = ({
    name: e,
    handle: t,
    role: n,
    quote: r,
    rating: l,
    improvement: s,
    imageUrl: a,
    delay: o = 0,
  }) =>
    i.jsxs('div', {
      className: 'card fade-in group relative overflow-hidden',
      style: { transitionDelay: `${o}s` },
      children: [
        i.jsxs('div', {
          className: 'aspect-w-16 aspect-h-9 relative',
          children: [
            i.jsx('img', {
              src: a,
              alt: `${e} testimonial`,
              className: 'w-full h-48 object-cover',
            }),
            i.jsx('div', {
              className:
                'absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70',
            }),
            i.jsx('div', {
              className:
                'absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity',
              children: i.jsx('div', {
                className:
                  'h-14 w-14 rounded-full bg-primary/80 flex items-center justify-center',
                children: i.jsx(am, { className: 'h-6 w-6 text-dark' }),
              }),
            }),
          ],
        }),
        i.jsxs('div', {
          className: 'p-5',
          children: [
            i.jsxs('div', {
              className: 'flex items-center mb-2',
              children: [
                i.jsx('p', {
                  className: 'text-white font-semibold',
                  children: e,
                }),
                i.jsx('p', {
                  className: 'text-primary text-xs ml-2',
                  children: t,
                }),
              ],
            }),
            i.jsx('p', {
              className: 'text-light/70 text-sm mb-3',
              children: n,
            }),
            i.jsxs('p', {
              className: 'text-light mb-3',
              children: ['"', r, '"'],
            }),
            i.jsx('div', {
              className: 'flex items-center mb-2',
              children: [...Array(l)].map((u, d) =>
                i.jsx(xc, { className: 'h-4 w-4 text-primary fill-primary' }, d)
              ),
            }),
            i.jsx('div', {
              className:
                'p-2 bg-dark/50 rounded text-primary text-sm font-medium',
              children: s,
            }),
          ],
        }),
      ],
    }),
  jm = () => (
    O.useEffect(() => {
      const e = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        t = document.querySelectorAll('.fade-in');
      return (
        t.forEach((n) => e.observe(n)),
        () => {
          t.forEach((n) => e.unobserve(n));
        }
      );
    }, []),
    i.jsxs('section', {
      className: 'section-padding bg-darker relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsxs('div', {
          className: 'container-custom relative z-10',
          children: [
            i.jsxs('div', {
              className: 'text-center max-w-3xl mx-auto mb-16 fade-in',
              children: [
                i.jsxs('h2', {
                  className: 'text-white mb-4',
                  children: [
                    'PEAK PERFORMERS ',
                    i.jsx('span', {
                      className: 'text-primary',
                      children: 'CHOOSE MINDMIX',
                    }),
                  ],
                }),
                i.jsx('p', {
                  className: 'text-light',
                  children:
                    'See how top students and professionals unlock their mental edge',
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16',
              children: [
                i.jsx(Er, {
                  name: 'Alex K.',
                  handle: '@alexcreates',
                  role: 'Designer',
                  quote:
                    'MindMix gave me 6 hours of deep focus. Game-changing for client deadlines!',
                  rating: 5,
                  improvement: 'Focus increased 300%',
                  imageUrl:
                    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  delay: 0,
                }),
                i.jsx(Er, {
                  name: 'Sam T.',
                  handle: '@samstudies',
                  role: 'Med Student',
                  quote:
                    'Lemon Mint is my secret weapon for 12-hour study sessions. No crash!',
                  rating: 5,
                  improvement: 'Memory retention up 40%',
                  imageUrl:
                    'https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  delay: 0.1,
                }),
                i.jsx(Er, {
                  name: 'Jamie L.',
                  handle: '@jamiecodes',
                  role: 'Developer',
                  quote:
                    'Finally found a nootropic that actually works. Blue Surge = coding flow state.',
                  rating: 5,
                  improvement: 'Productivity through the roof',
                  imageUrl:
                    'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  delay: 0.2,
                }),
                i.jsx(Er, {
                  name: 'Morgan W.',
                  handle: '@morgancreative',
                  role: 'Content Creator',
                  quote:
                    'Citrus Ice fuels my creative sessions. Ideas flow like never before.',
                  rating: 5,
                  improvement: 'Creative blocks eliminated',
                  imageUrl:
                    'https://images.pexels.com/photos/9775636/pexels-photo-9775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  delay: 0.3,
                }),
              ],
            }),
            i.jsxs('div', {
              className: 'grid grid-cols-2 md:grid-cols-4 gap-8 fade-in',
              children: [
                i.jsxs('div', {
                  className: 'text-center',
                  children: [
                    i.jsx('p', {
                      className: 'text-primary text-3xl font-bold mb-2',
                      children: '15+',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: 'Featured in productivity podcasts',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'text-center',
                  children: [
                    i.jsx('p', {
                      className: 'text-primary text-3xl font-bold mb-2',
                      children: '500+',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: 'Fortune 500 remote workers',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'text-center',
                  children: [
                    i.jsx('p', {
                      className: 'text-primary text-3xl font-bold mb-2',
                      children: '97%',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: 'Report improved focus within 30 minutes',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className: 'text-center',
                  children: [
                    i.jsx('p', {
                      className: 'text-primary text-3xl font-bold mb-2',
                      children: '#1',
                    }),
                    i.jsx('p', {
                      className: 'text-light text-sm',
                      children: 'Nootropic for students on Reddit',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  km = () => (
    O.useEffect(() => {
      const e = new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        t = document.querySelectorAll('.fade-in');
      return (
        t.forEach((n) => e.observe(n)),
        () => {
          t.forEach((n) => e.unobserve(n));
        }
      );
    }, []),
    i.jsxs('section', {
      className: 'section-padding bg-dark relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsxs('div', {
          className: 'container-custom relative z-10',
          children: [
            i.jsxs('div', {
              className: 'text-center max-w-3xl mx-auto mb-16 fade-in',
              children: [
                i.jsxs('h2', {
                  className: 'text-white mb-4',
                  children: [
                    'WHY MINDMIX ',
                    i.jsx('span', {
                      className: 'text-primary',
                      children: 'DOMINATES',
                    }),
                  ],
                }),
                i.jsx('p', {
                  className: 'text-light',
                  children: '100% Natural Ingredients, Proudly Made in USA',
                }),
              ],
            }),
            i.jsx('div', {
              className: 'overflow-x-auto fade-in',
              children: i.jsxs('table', {
                className: 'w-full min-w-[600px]',
                children: [
                  i.jsx('thead', {
                    children: i.jsxs('tr', {
                      className: 'border-b border-gray-800',
                      children: [
                        i.jsx('th', {
                          className: 'text-left py-4 px-4 text-light',
                        }),
                        i.jsx('th', {
                          className:
                            'text-center py-4 px-4 text-primary font-bold',
                          children: 'MindMix',
                        }),
                        i.jsx('th', {
                          className: 'text-center py-4 px-4 text-light',
                          children: 'Coffee',
                        }),
                        i.jsx('th', {
                          className: 'text-center py-4 px-4 text-light',
                          children: 'Energy Drinks',
                        }),
                        i.jsx('th', {
                          className: 'text-center py-4 px-4 text-light',
                          children: 'Prescription',
                        }),
                      ],
                    }),
                  }),
                  i.jsxs('tbody', {
                    children: [
                      i.jsxs('tr', {
                        className: 'border-b border-gray-800',
                        children: [
                          i.jsx('td', {
                            className: 'text-left py-4 px-4 text-light',
                            children: '100% Natural',
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-primary mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-light/50 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                        ],
                      }),
                      i.jsxs('tr', {
                        className: 'border-b border-gray-800',
                        children: [
                          i.jsx('td', {
                            className: 'text-left py-4 px-4 text-light',
                            children: 'Made in USA',
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-primary mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(Jl, {
                              className: 'h-6 w-6 text-yellow-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(Jl, {
                              className: 'h-6 w-6 text-yellow-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(Jl, {
                              className: 'h-6 w-6 text-yellow-500 mx-auto',
                            }),
                          }),
                        ],
                      }),
                      i.jsxs('tr', {
                        className: 'border-b border-gray-800',
                        children: [
                          i.jsx('td', {
                            className: 'text-left py-4 px-4 text-light',
                            children: 'No Crash',
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-primary mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                        ],
                      }),
                      i.jsxs('tr', {
                        className: 'border-b border-gray-800',
                        children: [
                          i.jsx('td', {
                            className: 'text-left py-4 px-4 text-light',
                            children: '4+ Hour Focus',
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-primary mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-light/50 mx-auto',
                            }),
                          }),
                        ],
                      }),
                      i.jsxs('tr', {
                        className: 'border-b border-gray-800',
                        children: [
                          i.jsx('td', {
                            className: 'text-left py-4 px-4 text-light',
                            children: 'Zero Artificial Ingredients',
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-primary mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-light/50 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                        ],
                      }),
                      i.jsxs('tr', {
                        className: 'border-b border-gray-800',
                        children: [
                          i.jsx('td', {
                            className: 'text-left py-4 px-4 text-light',
                            children: 'Brain Health Support',
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(se, {
                              className: 'h-6 w-6 text-primary mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                          i.jsx('td', {
                            className: 'text-center py-4 px-4',
                            children: i.jsx(ve, {
                              className: 'h-6 w-6 text-red-500 mx-auto',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            i.jsxs('div', {
              className:
                'mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 fade-in',
              children: [
                i.jsxs('div', {
                  className:
                    'p-4 bg-darker rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center',
                  children: [
                    i.jsx('div', {
                      className:
                        'h-12 w-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center',
                      children: i.jsx('img', {
                        src: 'https://img.icons8.com/material-outlined/96/00e5a0/fda.png',
                        alt: 'FDA Registered',
                        className: 'h-6 w-6',
                      }),
                    }),
                    i.jsx('p', {
                      className: 'text-light text-xs',
                      children: 'FDA Registered Facility',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className:
                    'p-4 bg-darker rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center',
                  children: [
                    i.jsx('div', {
                      className:
                        'h-12 w-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center',
                      children: i.jsx('img', {
                        src: 'https://img.icons8.com/material-outlined/96/00e5a0/test-tube.png',
                        alt: 'Third-Party Tested',
                        className: 'h-6 w-6',
                      }),
                    }),
                    i.jsx('p', {
                      className: 'text-light text-xs',
                      children: 'Third-Party Tested',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className:
                    'p-4 bg-darker rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center',
                  children: [
                    i.jsx('div', {
                      className:
                        'h-12 w-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center',
                      children: i.jsx('img', {
                        src: 'https://img.icons8.com/material-outlined/96/00e5a0/certificate.png',
                        alt: 'GMP Certified',
                        className: 'h-6 w-6',
                      }),
                    }),
                    i.jsx('p', {
                      className: 'text-light text-xs',
                      children: 'GMP Certified',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className:
                    'p-4 bg-darker rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center',
                  children: [
                    i.jsx('div', {
                      className:
                        'h-12 w-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center',
                      children: i.jsx('img', {
                        src: 'https://img.icons8.com/material-outlined/96/00e5a0/guarantee.png',
                        alt: '30-Day Guarantee',
                        className: 'h-6 w-6',
                      }),
                    }),
                    i.jsx('p', {
                      className: 'text-light text-xs',
                      children: '30-Day Guarantee',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className:
                    'p-4 bg-darker rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center',
                  children: [
                    i.jsx('div', {
                      className:
                        'h-12 w-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center',
                      children: i.jsx('img', {
                        src: 'https://img.icons8.com/material-outlined/96/00e5a0/lock-2.png',
                        alt: 'Secure Checkout',
                        className: 'h-6 w-6',
                      }),
                    }),
                    i.jsx('p', {
                      className: 'text-light text-xs',
                      children: 'Secure Checkout',
                    }),
                  ],
                }),
                i.jsxs('div', {
                  className:
                    'p-4 bg-darker rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center',
                  children: [
                    i.jsx('div', {
                      className:
                        'h-12 w-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center',
                      children: i.jsx('img', {
                        src: 'https://img.icons8.com/material-outlined/96/00e5a0/truck.png',
                        alt: 'Free Shipping',
                        className: 'h-6 w-6',
                      }),
                    }),
                    i.jsx('p', {
                      className: 'text-light text-xs',
                      children: 'Free Shipping',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  Sm = () => {
    const [e, t] = O.useState(null),
      n = [
        {
          question: 'How quickly does MindMix work?',
          answer:
            'Most users feel the cognitive benefits within 30-45 minutes after consumption. The formula is designed to provide a steady, sustained boost to mental performance without the crash associated with caffeine or other stimulants.',
        },
        {
          question: 'Is it safe to take daily?',
          answer:
            'Yes, MindMix is formulated with natural ingredients that are safe for daily consumption. The adaptogenic herbs and nootropic compounds are specifically selected to support long-term brain health and function without dependency or tolerance buildup.',
        },
        {
          question: 'Will I crash later?',
          answer:
            "No, MindMix is specifically designed to avoid the crash associated with caffeine and energy drinks. The formula works by optimizing your brain's natural processes rather than artificially stimulating them, resulting in a smooth, gradual decline in effects rather than a sudden crash.",
        },
        {
          question: 'Can I mix with coffee?',
          answer:
            "Yes, but we recommend starting with half doses of each. MindMix complements coffee well, with L-theanine helping to smooth out caffeine's potential jitters while enhancing focus. Many users find they need less coffee when using MindMix.",
        },
        {
          question: "What if I don't like it?",
          answer:
            "We offer a 30-day money-back guarantee. If you're not completely satisfied with MindMix for any reason, simply contact our customer service team for a full refund. We stand behind our product's effectiveness.",
        },
        {
          question: 'Is there caffeine?',
          answer:
            'MindMix contains a minimal amount of natural caffeine from green tea extract, equivalent to approximately 1/4 cup of coffee per serving. This is enough to provide synergistic benefits with other ingredients without causing jitters or sleep disruption.',
        },
      ];
    O.useEffect(() => {
      const l = new IntersectionObserver(
          (a) => {
            a.forEach((o) => {
              o.isIntersecting && o.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        s = document.querySelectorAll('.fade-in');
      return (
        s.forEach((a) => l.observe(a)),
        () => {
          s.forEach((a) => l.unobserve(a));
        }
      );
    }, []);
    const r = (l) => {
      t(e === l ? null : l);
    };
    return i.jsxs('section', {
      className: 'section-padding bg-darker relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsxs('div', {
          className: 'container-custom relative z-10 max-w-4xl mx-auto',
          children: [
            i.jsx('div', {
              className: 'text-center max-w-3xl mx-auto mb-16 fade-in',
              children: i.jsxs('h2', {
                className: 'text-white mb-4',
                children: [
                  'FREQUENTLY ASKED ',
                  i.jsx('span', {
                    className: 'text-primary',
                    children: 'QUESTIONS',
                  }),
                ],
              }),
            }),
            i.jsx('div', {
              className: 'space-y-4 mb-12 fade-in',
              children: n.map((l, s) =>
                i.jsxs(
                  'div',
                  {
                    className:
                      'bg-dark rounded-lg overflow-hidden border border-gray-800 hover:border-primary/30 transition-colors',
                    children: [
                      i.jsxs('button', {
                        className:
                          'w-full text-left p-5 flex items-center justify-between focus:outline-none',
                        onClick: () => r(s),
                        'aria-expanded': e === s,
                        children: [
                          i.jsx('h4', {
                            className: 'text-white font-medium',
                            children: l.question,
                          }),
                          e === s
                            ? i.jsx(qf, {
                                className: 'h-5 w-5 text-primary flex-shrink-0',
                              })
                            : i.jsx(Zf, {
                                className: 'h-5 w-5 text-primary flex-shrink-0',
                              }),
                        ],
                      }),
                      i.jsx('div', {
                        className: `px-5 overflow-hidden transition-all duration-300 ${e === s ? 'max-h-96 pb-5' : 'max-h-0'}`,
                        children: i.jsx('p', {
                          className: 'text-light',
                          children: l.answer,
                        }),
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
            i.jsxs('div', {
              className: 'text-center fade-in',
              children: [
                i.jsx('p', {
                  className: 'text-light mb-6',
                  children: "Still have questions? We're here to help!",
                }),
                i.jsx(Ae, {
                  variant: 'secondary',
                  href: '#contact',
                  children: 'Contact Our Team',
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Em = () => {
    const [e, t] = O.useState('');
    O.useEffect(() => {
      const r = new IntersectionObserver(
          (s) => {
            s.forEach((a) => {
              a.isIntersecting && a.target.classList.add('is-visible');
            });
          },
          { threshold: 0.1 }
        ),
        l = document.querySelectorAll('.fade-in');
      return (
        l.forEach((s) => r.observe(s)),
        () => {
          l.forEach((s) => r.unobserve(s));
        }
      );
    }, []);
    const n = (r) => {
      (r.preventDefault(), console.log('Email submitted:', e), t(''));
    };
    return i.jsxs('section', {
      className: 'section-padding bg-dark relative',
      children: [
        i.jsx('div', {
          className: 'absolute inset-0 bg-neuron-pattern opacity-5',
        }),
        i.jsx('div', {
          className: 'container-custom relative z-10 max-w-4xl mx-auto',
          children: i.jsxs('div', {
            className:
              'p-8 md:p-12 bg-darker rounded-xl border border-primary/20 fade-in',
            children: [
              i.jsxs('div', {
                className: 'text-center max-w-3xl mx-auto mb-8',
                children: [
                  i.jsxs('h2', {
                    className: 'text-white mb-4',
                    children: [
                      'JOIN THE PEAK ',
                      i.jsx('span', {
                        className: 'text-primary',
                        children: 'PERFORMANCE COMMUNITY',
                      }),
                    ],
                  }),
                  i.jsx('p', {
                    className: 'text-light',
                    children:
                      'Get exclusive tips, research updates, and member-only discounts',
                  }),
                ],
              }),
              i.jsx('form', {
                onSubmit: n,
                className: 'max-w-md mx-auto',
                children: i.jsxs('div', {
                  className: 'flex flex-col sm:flex-row gap-4',
                  children: [
                    i.jsx('input', {
                      type: 'email',
                      value: e,
                      onChange: (r) => t(r.target.value),
                      placeholder: 'Enter your email',
                      className:
                        'flex-grow px-4 py-3 bg-dark border border-gray-800 focus:border-primary rounded-md text-light focus:outline-none',
                      required: !0,
                    }),
                    i.jsx(Ae, {
                      variant: 'mint',
                      type: 'submit',
                      children: 'Unlock Insider Access',
                    }),
                  ],
                }),
              }),
              i.jsxs('div', {
                className: 'grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10',
                children: [
                  i.jsxs('div', {
                    className: 'text-center',
                    children: [
                      i.jsx('div', {
                        className:
                          'h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center',
                        children: i.jsx(Xf, {
                          className: 'h-6 w-6 text-primary',
                        }),
                      }),
                      i.jsx('p', {
                        className: 'text-light text-sm',
                        children: 'Weekly cognitive enhancement tips',
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'text-center',
                    children: [
                      i.jsx('div', {
                        className:
                          'h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center',
                        children: i.jsx(pc, {
                          className: 'h-6 w-6 text-primary',
                        }),
                      }),
                      i.jsx('p', {
                        className: 'text-light text-sm',
                        children: 'New flavor early access',
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'text-center',
                    children: [
                      i.jsx('div', {
                        className:
                          'h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center',
                        children: i.jsx(cm, {
                          className: 'h-6 w-6 text-primary',
                        }),
                      }),
                      i.jsx('p', {
                        className: 'text-light text-sm',
                        children: 'Member-only discounts',
                      }),
                    ],
                  }),
                  i.jsxs('div', {
                    className: 'text-center',
                    children: [
                      i.jsx('div', {
                        className:
                          'h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center',
                        children: i.jsx(im, {
                          className: 'h-6 w-6 text-primary',
                        }),
                      }),
                      i.jsx('p', {
                        className: 'text-light text-sm',
                        children: 'Expert interviews',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Cm = () =>
    i.jsx('footer', {
      className: 'bg-darker pt-16 pb-8',
      children: i.jsxs('div', {
        className: 'container-custom',
        children: [
          i.jsxs('div', {
            className: 'grid md:grid-cols-5 gap-8 mb-12',
            children: [
              i.jsxs('div', {
                className: 'md:col-span-2',
                children: [
                  i.jsx('a', {
                    href: '/',
                    className: 'group mb-4 inline-block',
                    children: i.jsx('span', {
                      className:
                        'text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300',
                      children: 'MindMix',
                    }),
                  }),
                  i.jsx('p', {
                    className: 'text-light mb-6 max-w-md',
                    children:
                      'Unlock Your Mental Edge with our scientifically formulated nootropic drink mix designed for peak cognitive performance.',
                  }),
                  i.jsxs('div', {
                    className: 'flex space-x-4',
                    children: [
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light hover:text-primary transition-colors',
                        children: i.jsx(nm, { className: 'h-5 w-5' }),
                      }),
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light hover:text-primary transition-colors',
                        children: i.jsx(fm, { className: 'h-5 w-5' }),
                      }),
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light hover:text-primary transition-colors',
                        children: i.jsx(rm, { className: 'h-5 w-5' }),
                      }),
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light hover:text-primary transition-colors',
                        children: i.jsx(mm, { className: 'h-5 w-5' }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('div', {
                children: [
                  i.jsx('h5', {
                    className: 'text-white font-semibold mb-4',
                    children: 'Shop',
                  }),
                  i.jsxs('ul', {
                    className: 'space-y-2',
                    children: [
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'All Products',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Starter Packs',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Subscriptions',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Gift Cards',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('div', {
                children: [
                  i.jsx('h5', {
                    className: 'text-white font-semibold mb-4',
                    children: 'Learn',
                  }),
                  i.jsxs('ul', {
                    className: 'space-y-2',
                    children: [
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Our Science',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Ingredients',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Research',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Blog',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs('div', {
                children: [
                  i.jsx('h5', {
                    className: 'text-white font-semibold mb-4',
                    children: 'Support',
                  }),
                  i.jsxs('ul', {
                    className: 'space-y-2',
                    children: [
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'FAQ',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Contact',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Shipping',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Returns',
                        }),
                      }),
                      i.jsx('li', {
                        children: i.jsx('a', {
                          href: '#',
                          className:
                            'text-light hover:text-primary transition-colors',
                          children: 'Track Order',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs('div', {
            className: 'border-t border-gray-800 pt-8',
            children: [
              i.jsxs('div', {
                className:
                  'flex flex-col md:flex-row justify-between items-center',
                children: [
                  i.jsx('p', {
                    className: 'text-light/60 text-sm mb-4 md:mb-0',
                    children: '© 2025 MindMix. All rights reserved.',
                  }),
                  i.jsxs('div', {
                    className: 'flex space-x-6',
                    children: [
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light/60 hover:text-primary text-sm transition-colors',
                        children: 'Terms',
                      }),
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light/60 hover:text-primary text-sm transition-colors',
                        children: 'Privacy',
                      }),
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light/60 hover:text-primary text-sm transition-colors',
                        children: 'FDA Disclaimer',
                      }),
                      i.jsx('a', {
                        href: '#',
                        className:
                          'text-light/60 hover:text-primary text-sm transition-colors',
                        children: 'Affiliate Program',
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx('p', {
                className: 'text-light/40 text-xs mt-8 text-center',
                children:
                  '*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.',
              }),
            ],
          }),
        ],
      }),
    }),
  _m = () =>
    i.jsx('div', {
      className: 'fixed inset-0 bg-dark flex items-center justify-center z-50',
      children: i.jsxs('div', {
        className: 'relative w-32 h-32',
        children: [
          i.jsx('div', {
            className: 'absolute inset-0 flex items-center justify-center',
            children: i.jsx(er, {
              className: 'w-24 h-24 text-primary/20',
              strokeWidth: 1.5,
            }),
          }),
          i.jsx('div', {
            className:
              'absolute inset-0 flex items-center justify-center overflow-hidden',
            children: i.jsx(er, {
              className: 'w-24 h-24 text-primary animate-brain-fill',
              strokeWidth: 1.5,
            }),
          }),
          i.jsxs('div', {
            className:
              'absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap',
            children: [
              i.jsx('span', {
                className: 'text-primary text-sm font-medium',
                children: 'Enhancing',
              }),
              i.jsx('span', { className: 'animate-pulse', children: '...' }),
            ],
          }),
        ],
      }),
    });
function Pm() {
  const [e, t] = O.useState(!0);
  return (
    O.useEffect(() => {
      const n = setTimeout(() => {
        t(!1);
      }, 2e3);
      return () => clearTimeout(n);
    }, []),
    e
      ? i.jsx(_m, {})
      : i.jsxs('div', {
          className: 'min-h-screen bg-dark text-light',
          children: [
            i.jsx(Kf, {}),
            i.jsxs('main', {
              children: [
                i.jsx(pm, {}),
                i.jsx(xm, {}),
                i.jsx(vm, {}),
                i.jsx(ym, {}),
                i.jsx(gm, {}),
                i.jsx(wm, {}),
                i.jsx(Nm, {}),
                i.jsx(jm, {}),
                i.jsx(km, {}),
                i.jsx(Sm, {}),
                i.jsx(Em, {}),
              ],
            }),
            i.jsx(Cm, {}),
          ],
        })
  );
}
fc(document.getElementById('root')).render(
  i.jsx(O.StrictMode, { children: i.jsx(Pm, {}) })
);
