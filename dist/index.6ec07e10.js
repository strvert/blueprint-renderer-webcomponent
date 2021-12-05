// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l57BM":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "1d19109b6ec07e10";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"e5SF0":[function(require,module,exports) {
var _index = require("../src/index");

},{"../src/index":"7PGg5"}],"7PGg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlueprintRendererElement", ()=>BlueprintRendererElement1
);
var _helpers = require("@swc/helpers");
var _lit = require("lit");
var _decorators = require("lit/decorators");
var _blueprintRenderer = require("blueprint-renderer");
var _class;
var _class1, _descriptor, _dec;
var _dec1 = _decorators.customElement("blueprint-renderer");
let BlueprintRendererElement1 = _class1 = _dec1((_class1 = (_class = class BlueprintRendererElement extends _lit.LitElement {
    constructor(){
        super();
        _helpers.initializerDefineProperty(this, "src", _descriptor, this);
        this.graph = undefined;
    }
    async firstUpdated() {
        const data = await BlueprintRendererElement.readGraphCode("./graph.bp");
        const g = this.shadowRoot?.getElementById("graph");
        const wrapper = this.shadowRoot?.querySelector(".wrapper");
        this.graph = new _blueprintRenderer.Graph(g, {
            size: {
                width: wrapper.clientWidth,
                height: wrapper.clientHeight
            }
        });
        window.addEventListener("resize", ()=>{
            if (this.graph !== undefined) {
                this.graph.stage.width(wrapper.clientWidth);
                this.graph.stage.height(wrapper.clientHeight);
            }
        });
    }
    static async readGraphCode(url) {
        const res = await fetch(url, {
            headers: {
                "Content-Type": "text/plain"
            }
        });
        try {
            if (!res.ok) {
                console.error("response.ok:", res.ok);
                console.error("response.status:", res.status);
                console.error("response.statusText:", res.statusText);
                throw new Error(res.statusText);
            }
        } catch (error) {
            console.error(error);
        }
        return await res.text();
    }
    render() {
        return _lit.html` <div class="wrapper"><div id="graph"></div></div>`;
    }
    updateGraph() {
    }
}, _class.styles = _lit.css`
    .wrapper {
      inline-size: 100%;
      block-size: 100%;
    }
  `, _class), _dec = _decorators.property({
    attribute: true,
    reflect: true
}), _descriptor = _helpers.applyDecoratedDescriptor(_class1.prototype, "src", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), _class1)) || _class1;

},{"@swc/helpers":"5iRUX","lit":"kktHg","lit/decorators":"9WbAK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","blueprint-renderer":"9iFbY"}],"5iRUX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
parcelHelpers.export(exports, "createSuper", ()=>_createSuperDefault.default
);
parcelHelpers.export(exports, "isNativeReflectConstruct", ()=>_isNativeReflectConstructDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);
var _createSuper = require("./_create_super");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);

},{"./_apply_decorated_descriptor":"btYa2","./_array_with_holes":"jRZ6o","./_array_without_holes":"k60W7","./_assert_this_initialized":"6RZ90","./_async_generator":"e4yzN","./_async_generator_delegate":"easW4","./_async_iterator":"jUG8d","./_async_to_generator":"a4KO2","./_await_async_generator":"famZR","./_await_value":"lbGVP","./_class_call_check":"f6wZm","./_class_name_tdz_error":"b5sCG","./_class_private_field_get":"j6IZw","./_class_private_field_loose_base":"4fhFt","./_class_private_field_set":"a5ipB","./_class_private_method_get":"hMKj5","./_class_private_method_set":"90nxE","./_class_static_private_field_spec_get":"lcFr2","./_class_static_private_field_spec_set":"9wc7j","./_construct":"2xKtl","./_create_class":"18wuI","./_decorate":"8yBxn","./_defaults":"7YjUQ","./_define_enumerable_properties":"327af","./_define_property":"bkGsg","./_extends":"c0JdL","./_get":"5z3LM","./_get_prototype_of":"lU1YI","./_inherits":"g3ZJ3","./_inherits_loose":"8mHzi","./_initializer_define_property":"lMxQg","./_initializer_warning_helper":"6CeKw","./_instanceof":"ixGV6","./_interop_require_default":"f5RMf","./_interop_require_wildcard":"emrg2","./_is_native_function":"2RlX2","./_iterable_to_array":"1iA6P","./_iterable_to_array_limit":"7XtIf","./_iterable_to_array_limit_loose":"col2E","./_jsx":"hSYbM","./_new_arrow_check":"bCqhX","./_non_iterable_rest":"gP5TE","./_non_iterable_spread":"i5QUC","./_object_spread":"bxzjM","./_object_without_properties":"bpHqs","./_object_without_properties_loose":"lEfSc","./_possible_constructor_return":"b3CfP","./_read_only_error":"lbg1U","./_set":"61PHC","./_set_prototype_of":"c9Qlo","./_skip_first_generator_next":"eFaA9","./_sliced_to_array":"40Yyz","./_sliced_to_array_loose":"bHGeI","./_super_prop_base":"cS3wi","./_tagged_template_literal":"kw14y","./_tagged_template_literal_loose":"9k2dX","./_throw":"JU2li","./_to_array":"eKdb2","./_to_consumable_array":"305l5","./_to_primitive":"2OdsX","./_to_property_key":"8cPay","./_type_of":"iTx0L","./_wrap_async_generator":"3HGpw","./_wrap_native_super":"aAa8w","./_create_super":"ectFQ","./_is_native_reflect_construct":"hKBcz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"btYa2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {
    };
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    if (context && desc1.initializer !== void 0) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jRZ6o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k60W7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
exports.default = _arrayWithoutHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6RZ90":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e4yzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"lbGVP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lbGVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"easW4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {
    }, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jUG8d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a4KO2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"famZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"lbGVP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f6wZm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b5sCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j6IZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver).value;
}
exports.default = _classPrivateFieldGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4fhFt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a5ipB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classPrivateFieldSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hMKj5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"90nxE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lcFr2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    return descriptor.value;
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9wc7j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2xKtl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"18wuI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8yBxn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \"" + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \"" + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({
        }, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \"" + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"eKdb2","./_to_property_key":"8cPay","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eKdb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"jRZ6o","./_iterable_to_array":"1iA6P","./_non_iterable_rest":"gP5TE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1iA6P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gP5TE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8cPay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"iTx0L","./_to_primitive":"2OdsX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iTx0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2OdsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"iTx0L","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7YjUQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"327af":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bkGsg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c0JdL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5z3LM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"cS3wi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cS3wi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"lU1YI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lU1YI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g3ZJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"c9Qlo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c9Qlo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8mHzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lMxQg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6CeKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ixGV6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f5RMf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"emrg2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                };
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2RlX2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7XtIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"col2E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
    for(var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hSYbM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {
    };
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bCqhX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i5QUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bxzjM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"bkGsg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bpHqs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"lEfSc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lEfSc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b3CfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"6RZ90","./_type_of":"iTx0L","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lbg1U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"61PHC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"bkGsg","./_super_prop_base":"cS3wi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eFaA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"40Yyz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"jRZ6o","./_iterable_to_array":"1iA6P","./_non_iterable_rest":"gP5TE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bHGeI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"jRZ6o","./_iterable_to_array_limit_loose":"col2E","./_non_iterable_rest":"gP5TE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kw14y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9k2dX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"JU2li":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"305l5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"k60W7","./_iterable_to_array":"1iA6P","./_non_iterable_spread":"i5QUC","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3HGpw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"e4yzN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aAa8w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"2xKtl","./_is_native_function":"2RlX2","./_get_prototype_of":"lU1YI","./_set_prototype_of":"c9Qlo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ectFQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstructDefault.default();
    return function _createSuperInternal() {
        var Super = _getPrototypeOfDefault.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOfDefault.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturnDefault.default(this, result);
    };
}
exports.default = _createSuper;

},{"./_is_native_reflect_construct":"hKBcz","./_get_prototype_of":"lU1YI","./_possible_constructor_return":"b3CfP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hKBcz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kktHg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);

},{"@lit/reactive-element":"925eu","lit-html":"5SJ7D","lit-element/lit-element.js":"6KaZw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"925eu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>_cssTagJs.CSSResult
);
parcelHelpers.export(exports, "adoptStyles", ()=>_cssTagJs.adoptStyles
);
parcelHelpers.export(exports, "css", ()=>_cssTagJs.css
);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>_cssTagJs.getCompatibleStyle
);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>_cssTagJs.supportsAdoptingStyleSheets
);
parcelHelpers.export(exports, "unsafeCSS", ()=>_cssTagJs.unsafeCSS
);
parcelHelpers.export(exports, "ReactiveElement", ()=>a
);
parcelHelpers.export(exports, "defaultConverter", ()=>o
);
parcelHelpers.export(exports, "notEqual", ()=>n
);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s1;
const e1 = window.trustedTypes, r1 = e1 ? e1.emptyScript : "", h = window.reactiveElementPolyfillSupport, o = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? r1 : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t1) {
                    s = null;
                }
        }
        return s;
    }
}, n = (t, i)=>i !== t && (i == i || t == t)
, l = {
    attribute: !0,
    type: String,
    converter: o,
    reflect: !1,
    hasChanged: n
};
class a extends HTMLElement {
    constructor(){
        super(), this._$Et = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
    }
    static addInitializer(t7) {
        var i;
        null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t7);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Eh(s, i);
            void 0 !== e && (this._$Eu.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t2, i4 = l) {
        if (i4.state && (i4.attribute = !1), this.finalize(), this.elementProperties.set(t2, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t2)) {
            const s = "symbol" == typeof t2 ? Symbol() : "__" + t2, e = this.getPropertyDescriptor(t2, s, i4);
            void 0 !== e && Object.defineProperty(this.prototype, t2, e);
        }
    }
    static getPropertyDescriptor(t3, i1, s) {
        return {
            get () {
                return this[i1];
            },
            set (e) {
                const r = this[t3];
                this[i1] = e, this.requestUpdate(t3, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t4) {
        return this.elementProperties.get(t4) || l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i2) {
        const s = [];
        if (Array.isArray(i2)) {
            const e = new Set(i2.flat(1 / 0).reverse());
            for (const i of e)s.unshift(_cssTagJs.getCompatibleStyle(i));
        } else void 0 !== i2 && s.push(_cssTagJs.getCompatibleStyle(i2));
        return s;
    }
    static _$Eh(t5, i3) {
        const s = i3.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    o() {
        var t6;
        this._$Ep = new Promise((t)=>this.enableUpdating = t
        ), this._$AL = new Map, this._$Em(), this.requestUpdate(), null === (t6 = this.constructor.l) || void 0 === t6 || t6.forEach((t)=>t(this)
        );
    }
    addController(t10) {
        var i, s;
        (null !== (i = this._$Eg) && void 0 !== i ? i : this._$Eg = []).push(t10), void 0 !== this.renderRoot && this.isConnected && (null === (s = t10.hostConnected) || void 0 === s || s.call(t10));
    }
    removeController(t8) {
        var i;
        null === (i = this._$Eg) || void 0 === i || i.splice(this._$Eg.indexOf(t8) >>> 0, 1);
    }
    _$Em() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return _cssTagJs.adoptStyles(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t9;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t9 = this._$Eg) || void 0 === t9 || t9.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t12) {
    }
    disconnectedCallback() {
        var t11;
        null === (t11 = this._$Eg) || void 0 === t11 || t11.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t18, i9, s2) {
        this._$AK(t18, s2);
    }
    _$ES(t13, i5, s3 = l) {
        var e, r;
        const h = this.constructor._$Eh(t13, s3);
        if (void 0 !== h && !0 === s3.reflect) {
            const n = (null !== (r = null === (e = s3.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== r ? r : o.toAttribute)(i5, s3.type);
            this._$Ei = t13, null == n ? this.removeAttribute(h) : this.setAttribute(h, n), this._$Ei = null;
        }
    }
    _$AK(t14, i6) {
        var s, e, r;
        const h = this.constructor, n = h._$Eu.get(t14);
        if (void 0 !== n && this._$Ei !== n) {
            const t = h.getPropertyOptions(n), l = t.converter, a = null !== (r = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== r ? r : o.fromAttribute;
            this._$Ei = n, this[n] = a(i6, t.type), this._$Ei = null;
        }
    }
    requestUpdate(t15, i7, s4) {
        let e = !0;
        void 0 !== t15 && (((s4 = s4 || this.constructor.getPropertyOptions(t15)).hasChanged || n)(this[t15], i7) ? (this._$AL.has(t15) || this._$AL.set(t15, i7), !0 === s4.reflect && this._$Ei !== t15 && (void 0 === this._$E_ && (this._$E_ = new Map), this._$E_.set(t15, s4))) : e = !1), !this.isUpdatePending && e && (this._$Ep = this._$EC());
    }
    async _$EC() {
        this.isUpdatePending = !0;
        try {
            await this._$Ep;
        } catch (t16) {
            Promise.reject(t16);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t17;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Et && (this._$Et.forEach((t, i)=>this[i] = t
        ), this._$Et = void 0);
        let i8 = !1;
        const s = this._$AL;
        try {
            i8 = this.shouldUpdate(s), i8 ? (this.willUpdate(s), null === (t17 = this._$Eg) || void 0 === t17 || t17.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$EU();
        } catch (t) {
            throw i8 = !1, this._$EU(), t;
        }
        i8 && this._$AE(s);
    }
    willUpdate(t20) {
    }
    _$AE(t19) {
        var i10;
        null === (i10 = this._$Eg) || void 0 === i10 || i10.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t19)), this.updated(t19);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$Ep;
    }
    shouldUpdate(t22) {
        return !0;
    }
    update(t21) {
        void 0 !== this._$E_ && (this._$E_.forEach((t, i)=>this._$ES(i, this[i], t)
        ), this._$E_ = void 0), this._$EU();
    }
    updated(t) {
    }
    firstUpdated(t23) {
    }
}
a.finalized = !0, a.elementProperties = new Map, a.elementStyles = [], a.shadowRootOptions = {
    mode: "open"
}, null == h || h({
    ReactiveElement: a
}), (null !== (s1 = globalThis.reactiveElementVersions) && void 0 !== s1 ? s1 : globalThis.reactiveElementVersions = []).push("1.0.2");

},{"./css-tag.js":"5NEkK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5NEkK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>s1
);
parcelHelpers.export(exports, "adoptStyles", ()=>i
);
parcelHelpers.export(exports, "css", ()=>r
);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>S
);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>t2
);
parcelHelpers.export(exports, "unsafeCSS", ()=>o1
);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t2 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e1 = Symbol(), n2 = new Map;
class s1 {
    constructor(t1, n1){
        if (this._$cssResult$ = !0, n1 !== e1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t1;
    }
    get styleSheet() {
        let e = n2.get(this.cssText);
        return t2 && void 0 === e && (n2.set(this.cssText, e = new CSSStyleSheet), e.replaceSync(this.cssText)), e;
    }
    toString() {
        return this.cssText;
    }
}
const o1 = (t)=>new s1("string" == typeof t ? t : t + "", e1)
, r = (t3, ...n3)=>{
    const o = 1 === t3.length ? t3[0] : n3.reduce((e, n, s)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(n) + t3[s + 1]
    , t3[0]);
    return new s1(o, e1);
}, i = (e, n4)=>{
    t2 ? e.adoptedStyleSheets = n4.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet
    ) : n4.forEach((t)=>{
        const n = document.createElement("style"), s = window.litNonce;
        void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n);
    });
}, S = t2 ? (t)=>t
 : (t4)=>t4 instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const n of t.cssRules)e += n.cssText;
        return o1(e);
    })(t4) : t4
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5SJ7D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>R
);
parcelHelpers.export(exports, "html", ()=>p1
);
parcelHelpers.export(exports, "noChange", ()=>b
);
parcelHelpers.export(exports, "nothing", ()=>T
);
parcelHelpers.export(exports, "render", ()=>w
);
parcelHelpers.export(exports, "svg", ()=>y1
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var t1;
const i1 = globalThis.trustedTypes, s1 = i1 ? i1.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e1 = `lit$${(Math.random() + "").slice(9)}$`, o1 = "?" + e1, n1 = `<${o1}>`, l1 = document, h1 = (t = "")=>l1.createComment(t)
, r1 = (t)=>null === t || "object" != typeof t && "function" != typeof t
, d1 = Array.isArray, u1 = (t)=>{
    var i;
    return d1(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea)$/i, $1 = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        })
, p1 = $1(1), y1 = $1(2), b = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), x = new WeakMap, w = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new N(i.insertBefore(h1(), t), t, void 0, null != s ? s : {
        });
    }
    return l._$AI(t), l;
}, A = l1.createTreeWalker(l1, 129, null, !1), C = (t, i)=>{
    const o = t.length - 1, l = [];
    let h, r = 2 === i ? "<svg>" : "", d = c;
    for(let i2 = 0; i2 < o; i2++){
        const s = t[i2];
        let o, u, $ = -1, p = 0;
        for(; p < s.length && (d.lastIndex = p, u = d.exec(s), null !== u);)p = d.lastIndex, d === c ? "!--" === u[1] ? d = v : void 0 !== u[1] ? d = a : void 0 !== u[2] ? (g.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = f) : void 0 !== u[3] && (d = f) : d === f ? ">" === u[0] ? (d = null != h ? h : c, $ = -1) : void 0 === u[1] ? $ = -2 : ($ = d.lastIndex - u[2].length, o = u[1], d = void 0 === u[3] ? f : '"' === u[3] ? m : _) : d === m || d === _ ? d = f : d === v || d === a ? d = c : (d = f, h = void 0);
        const y = d === f && t[i2 + 1].startsWith("/>") ? " " : "";
        r += d === c ? s + n1 : $ >= 0 ? (l.push(o), s.slice(0, $) + "$lit$" + s.slice($) + e1 + y) : s + e1 + (-2 === $ ? (l.push(void 0), i2) : y);
    }
    const u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
    return [
        void 0 !== s1 ? s1.createHTML(u) : u,
        l
    ];
};
class P {
    constructor({ strings: t3 , _$litType$: s2  }, n2){
        let l;
        this.parts = [];
        let r = 0, d = 0;
        const u = t3.length - 1, c = this.parts, [v, a] = C(t3, s2);
        if (this.el = P.createElement(v, n2), A.currentNode = this.el.content, 2 === s2) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (l = A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t = [];
                    for (const i of l.getAttributeNames())if (i.endsWith("$lit$") || i.startsWith(e1)) {
                        const s = a[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = l.getAttribute(s.toLowerCase() + "$lit$").split(e1), i = /([.?@])?(.*)/.exec(s);
                            c.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? M : "?" === i[1] ? H : "@" === i[1] ? I : S
                            });
                        } else c.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i3 of t)l.removeAttribute(i3);
                }
                if (g.test(l.tagName)) {
                    const t = l.textContent.split(e1), s = t.length - 1;
                    if (s > 0) {
                        l.textContent = i1 ? i1.emptyScript : "";
                        for(let i = 0; i < s; i++)l.append(t[i], h1()), A.nextNode(), c.push({
                            type: 2,
                            index: ++r
                        });
                        l.append(t[s], h1());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === o1) c.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = l.data.indexOf(e1, t + 1));)c.push({
                        type: 7,
                        index: r
                    }), t += e1.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t2, i4) {
        const s = l1.createElement("template");
        return s.innerHTML = t2, s;
    }
}
function V(t, i, s = t, e) {
    var o, n, l, h;
    if (i === b) return i;
    let d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
    const u = r1(i) ? void 0 : i._$litDirective$;
    return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = V(t, d._$AS(t, i.values), d, e)), i;
}
class E {
    constructor(t, i){
        this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t4) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t4 ? void 0 : t4.creationScope) && void 0 !== i ? i : l1).importNode(s, !0);
        A.currentNode = o;
        let n = A.nextNode(), h = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (h === d.index) {
                let i;
                2 === d.type ? i = new N(n, n.nextSibling, this, t4) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t4) : 6 === d.type && (i = new L(n, this, t4)), this.v.push(i), d = e[++r];
            }
            h !== (null == d ? void 0 : d.index) && (n = A.nextNode(), h++);
        }
        return o;
    }
    m(t5) {
        let i = 0;
        for (const s of this.v)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t5, s, i), i += s.strings.length - 2) : s._$AI(t5[i])), i++;
    }
}
class N {
    constructor(t6, i5, s, e){
        var o;
        this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t6, this._$AB = i5, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t7, i6 = this) {
        t7 = V(this, t7, i6), r1(t7) ? t7 === T || null == t7 || "" === t7 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t7 !== this._$AH && t7 !== b && this.$(t7) : void 0 !== t7._$litType$ ? this.T(t7) : void 0 !== t7.nodeType ? this.S(t7) : u1(t7) ? this.M(t7) : this.$(t7);
    }
    A(t8, i7 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t8, i7);
    }
    S(t9) {
        this._$AH !== t9 && (this._$AR(), this._$AH = this.A(t9));
    }
    $(t10) {
        this._$AH !== T && r1(this._$AH) ? this._$AA.nextSibling.data = t10 : this.S(l1.createTextNode(t10)), this._$AH = t10;
    }
    T(t11) {
        var i;
        const { values: s , _$litType$: e  } = t11, o = "number" == typeof e ? this._$AC(t11) : (void 0 === e.el && (e.el = P.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);
        else {
            const t = new E(o, this), i = t.p(this.options);
            t.m(s), this.S(i), this._$AH = t;
        }
    }
    _$AC(t12) {
        let i = x.get(t12.strings);
        return void 0 === i && x.set(t12.strings, i = new P(t12)), i;
    }
    M(t13) {
        d1(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t13)e === i.length ? i.push(s = new N(this.A(h1()), this.A(h1()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t14 = this._$AA.nextSibling, i8) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i8); t14 && t14 !== this._$AB;){
            const i = t14.nextSibling;
            t14.remove(), t14 = i;
        }
    }
    setConnected(t15) {
        var i;
        void 0 === this._$AM && (this._$Cg = t15, null === (i = this._$AP) || void 0 === i || i.call(this, t15));
    }
}
class S {
    constructor(t16, i9, s3, e2, o){
        this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t16, this.name = i9, this._$AM = e2, this.options = o, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String), this.strings = s3) : this._$AH = T;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t17, i10 = this, s4, e3) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t17 = V(this, t17, i10, 0), n = !r1(t17) || t17 !== this._$AH && t17 !== b, n && (this._$AH = t17);
        else {
            const e = t17;
            let l, h;
            for(t17 = o[0], l = 0; l < o.length - 1; l++)h = V(this, e[s4 + l], i10, l), h === b && (h = this._$AH[l]), n || (n = !r1(h) || h !== this._$AH[l]), h === T ? t17 = T : t17 !== T && (t17 += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e3 && this.k(t17);
    }
    k(t18) {
        t18 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t18 ? t18 : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    k(t19) {
        this.element[this.name] = t19 === T ? void 0 : t19;
    }
}
const k = i1 ? i1.emptyScript : "";
class H extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    k(t20) {
        t20 && t20 !== T ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
}
class I extends S {
    constructor(t21, i11, s5, e4, o2){
        super(t21, i11, s5, e4, o2), this.type = 5;
    }
    _$AI(t22, i12 = this) {
        var s;
        if ((t22 = null !== (s = V(this, t22, i12, 0)) && void 0 !== s ? s : T) === b) return;
        const e = this._$AH, o = t22 === T && e !== T || t22.capture !== e.capture || t22.once !== e.once || t22.passive !== e.passive, n = t22 !== T && (e === T || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t22), this._$AH = t22;
    }
    handleEvent(t23) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t23) : this._$AH.handleEvent(t23);
    }
}
class L {
    constructor(t24, i13, s6){
        this.element = t24, this.type = 6, this._$AN = void 0, this._$AM = i13, this.options = s6;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t25) {
        V(this, t25);
    }
}
const R = {
    P: "$lit$",
    V: e1,
    L: o1,
    I: 1,
    N: C,
    R: E,
    D: u1,
    j: V,
    H: N,
    O: S,
    F: H,
    B: I,
    W: M,
    Z: L
}, z = window.litHtmlPolyfillSupport;
null == z || z(P, N), (null !== (t1 = globalThis.litHtmlVersions) && void 0 !== t1 ? t1 : globalThis.litHtmlVersions = []).push("2.0.2");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6KaZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s
);
parcelHelpers.export(exports, "UpdatingElement", ()=>r
);
parcelHelpers.export(exports, "_$LE", ()=>h
);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_reactiveElement, exports);
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = _reactiveElement.ReactiveElement;
class s extends _reactiveElement.ReactiveElement {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Dt = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t1) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t1), this._$Dt = _litHtml.render(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.0.2");

},{"@lit/reactive-element":"925eu","lit-html":"5SJ7D","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9WbAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"ft1UD","@lit/reactive-element/decorators/property.js":"h1yps","@lit/reactive-element/decorators/state.js":"bTuAK","@lit/reactive-element/decorators/event-options.js":"5TuUf","@lit/reactive-element/decorators/query.js":"bEgDe","@lit/reactive-element/decorators/query-all.js":"exb2U","@lit/reactive-element/decorators/query-async.js":"bqepy","@lit/reactive-element/decorators/query-assigned-nodes.js":"hCCbA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ft1UD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>n1
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const n1 = (n2)=>(e1)=>"function" == typeof e1 ? ((n, e)=>(window.customElements.define(n, e), e)
        )(n2, e1) : ((n, e2)=>{
            const { kind: t , elements: i  } = e2;
            return {
                kind: t,
                elements: i,
                finisher (e) {
                    window.customElements.define(n, e);
                }
            };
        })(n2, e1)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h1yps":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>e1
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const i1 = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {
        },
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }
;
function e1(e2) {
    return (n1, t)=>void 0 !== t ? ((i, e, n)=>{
            e.constructor.createProperty(n, i);
        })(e2, n1, t) : i1(e2, n1)
    ;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bTuAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>t1
);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function t1(t) {
    return _propertyJs.property({
        ...t,
        state: !0
    });
}

},{"./property.js":"h1yps","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5TuUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>e1
);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e1(e) {
    return _baseJs.decorateProperty({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

},{"./base.js":"hc0Bl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hc0Bl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decorateProperty", ()=>o1
);
parcelHelpers.export(exports, "legacyPrototypeMethod", ()=>e1
);
parcelHelpers.export(exports, "standardPrototypeMethod", ()=>t1
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e1 = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, t1 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    })
, o1 = ({ finisher: e , descriptor: t2  })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t2 ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t2(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t2 && Object.defineProperty(o, n, t2(n)), null == e || e(r, n);
        }
    }
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bEgDe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>i1
);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i1(i, n1) {
    return _baseJs.decorateProperty({
        descriptor: (o1)=>{
            const t1 = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n1) {
                const n = "symbol" == typeof o1 ? Symbol() : "__" + o1;
                t1.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t1;
        }
    });
}

},{"./base.js":"hc0Bl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"exb2U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>e1
);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e1(e) {
    return _baseJs.decorateProperty({
        descriptor: (r1)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"hc0Bl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bqepy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>e1
);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e1(e) {
    return _baseJs.decorateProperty({
        descriptor: (r1)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"hc0Bl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hCCbA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>o1
);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o1(o = "", n = !1, t = "") {
    return _baseJs.decorateProperty({
        descriptor: (e1)=>({
                get () {
                    var e2, r, l;
                    const i = "slot" + (o ? `[name=${o}]` : ":not([name])");
                    let u = null !== (l = null === (r = null === (e2 = this.renderRoot) || void 0 === e2 ? void 0 : e2.querySelector(i)) || void 0 === r ? void 0 : r.assignedNodes({
                        flatten: n
                    })) && void 0 !== l ? l : [];
                    return t && (u = u.filter((e)=>e.nodeType === Node.ELEMENT_NODE && e.matches(t)
                    )), u;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"hc0Bl","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9iFbY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Graph", ()=>$88d88e0e9d7489b9$export$614db49f3febe941
);
parcelHelpers.export(exports, "buildBasicNode", ()=>$7f8533487eef243b$export$618c773c1304e196
);
var _konva = require("konva");
var _konvaDefault = parcelHelpers.interopDefault(_konva);
var _imagePromise = require("image-promise");
var _imagePromiseDefault = parcelHelpers.interopDefault(_imagePromise);
var _parseCssColor = require("parse-css-color");
var _parseCssColorDefault = parcelHelpers.interopDefault(_parseCssColor);
var global = arguments[3];
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {
};
var $parcel$modules = {
};
var $parcel$inits = {
};
var parcelRequire = $parcel$global["parcelRequire4628"];
if (parcelRequire == null) {
    parcelRequire = function(id) {
        if (id in $parcel$modules) return $parcel$modules[id].exports;
        if (id in $parcel$inits) {
            var init = $parcel$inits[id];
            delete $parcel$inits[id];
            var module = {
                id: id,
                exports: {
                }
            };
            $parcel$modules[id] = module;
            init.call(module.exports, module, module.exports);
            return module.exports;
        }
        var err = new Error("Cannot find module '" + id + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
    };
    parcelRequire.register = function register(id, init) {
        $parcel$inits[id] = init;
    };
    $parcel$global["parcelRequire4628"] = parcelRequire;
}
const $593f084dca2aa93b$var$pathRoundRect = (ctx, left, top, width, height, rounds)=>{
    const l = left;
    const t = top;
    const r = left + width;
    const b = t + height;
    ctx.beginPath();
    ctx.moveTo(l + rounds.lt, t);
    ctx.arcTo(r, t, r, b - rounds.rb, rounds.rt);
    ctx.arcTo(r, b, l + rounds.lb, b, rounds.rb);
    ctx.arcTo(l, b, l, t + rounds.lt, rounds.lb);
    ctx.arcTo(l, t, r, t, rounds.lt);
};
const $593f084dca2aa93b$export$270e7ba5936d3c48 = (options, contentRenderer)=>{
    const defaultOptions = {
        nodeColor: "rgb(31, 149, 255)",
        x: 0,
        y: 0,
        width: 200,
        height: 200
    };
    const opts = {
        ...defaultOptions,
        ...options
    };
    const nodeHeaderHeight = 27;
    const nodeOpacity = 0.95;
    const renderBase = (ctx, shape)=>{
        const width = shape.width();
        const height = shape.height();
        const headerH = shape.getAttr("headerHeight");
        const inColor = _parseCssColorDefault.default(opts.nodeColor);
        const headColor = `rgba(${inColor.values[0]}, ${inColor.values[1]}, ${inColor.values[2]}, ${nodeOpacity})`;
        const baseColor = `rgba(17, 17, 17, ${nodeOpacity})`;
        // Head
        ctx.save();
        const g = ctx.createLinearGradient(0, -headerH * 2, width, headerH * 2);
        g.addColorStop(0, headColor);
        g.addColorStop(0.7, headColor);
        g.addColorStop(1, baseColor);
        ctx.fillStyle = g;
        $593f084dca2aa93b$var$pathRoundRect(ctx, 0, 0, width, headerH, {
            lt: 10,
            rt: 10,
            rb: 0,
            lb: 0
        });
        ctx.fill();
        ctx.restore();
        // Body
        ctx.save();
        ctx.fillStyle = baseColor;
        $593f084dca2aa93b$var$pathRoundRect(ctx, 0, headerH, width, height - headerH, {
            lt: 0,
            rt: 0,
            rb: 10,
            lb: 10
        });
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = "#030303";
        ctx.lineWidth = 2;
        $593f084dca2aa93b$var$pathRoundRect(ctx, 0, 0, width, height, {
            lt: 10,
            rt: 10,
            rb: 10,
            lb: 10
        });
        ctx.stroke();
        ctx.restore();
    };
    const renderContent = (ctx, shape)=>{
        const renderer = shape.getAttr("contentRenderer");
        if (renderer) renderer.render(ctx, shape);
    };
    const node = new _konvaDefault.default.Shape({
        x: opts.x,
        y: opts.y,
        width: opts.width,
        height: opts.height,
        draggable: false,
        sceneFunc: function(ctx, shape) {
            ctx.save();
            // const nodeTitle = shape.getAttr("nodeTitle");
            // const titlePosX = 26;
            // ctx.font = "bold 12px san-serif";
            // ctx.textAlign = "left";
            // const mt = ctx.measureText(nodeTitle);
            // this.width(titlePosX + mt.width + 32);
            // this.set({ width: titlePosX + mt.width + 32 });
            renderBase(ctx, this);
            renderContent(ctx, this);
            // ctx.fillStyle = "#fefefe";
            // ctx.fillText(nodeTitle, titlePosX, 18);
            ctx.restore();
            ctx.fillStrokeShape(shape);
        },
        getSelfRect: function() {
            return {
                x: this.x(),
                y: this.y(),
                width: this.width(),
                height: this.height()
            };
        }
    });
    node.setAttr("contentRenderer", contentRenderer);
    node.setAttr("headerHeight", nodeHeaderHeight);
    node.className = "BPNode";
    node.on("mouseover", ()=>{
        document.body.style.cursor = "move";
    });
    node.on("mousemove", ()=>{
        document.body.style.cursor = "move";
    });
    node.on("mouseout", ()=>{
        document.body.style.cursor = "default";
    });
    return node;
};
const $a706eeb93ebe8800$var$PinTypes = [
    "Exec",
    "Boolean",
    "Byte",
    "Class",
    "SoftClass",
    "Int",
    "Int64",
    "Float",
    "Double",
    "Name",
    "Vector",
    "Rotator",
    "Transform",
    "Delegate",
    "MCDelegate",
    "Object",
    "Interface",
    "SoftObject",
    "String",
    "Text",
    "Struct",
    "Wildcard",
    "Enum",
    "FieldPath", 
];
const $a706eeb93ebe8800$var$pathToImg = (path)=>{
    const img = new Image();
    img.src = path;
    return img;
};
parcelRequire.register("3vD7t", function(module, exports) {
    module.exports = parcelRequire("3IRMm").getBundleURL('f3Ts0') + "Pin_connected_VarA.6baa3ede.png";
});
parcelRequire.register("3IRMm", function(module, exports) {
    $parcel$export(module.exports, "getBundleURL", ()=>$2b5f32906e60800f$export$bdfd709ae4826697
    , (v)=>$2b5f32906e60800f$export$bdfd709ae4826697 = v
    );
    var $2b5f32906e60800f$export$bdfd709ae4826697;
    var $2b5f32906e60800f$export$c9e73fbda7da57b6;
    var $2b5f32906e60800f$export$5a759dc7a1cfb72a;
    var $2b5f32906e60800f$var$bundleURL = {
    };
    function $2b5f32906e60800f$var$getBundleURLCached(id) {
        var value = $2b5f32906e60800f$var$bundleURL[id];
        if (!value) {
            value = $2b5f32906e60800f$var$getBundleURL();
            $2b5f32906e60800f$var$bundleURL[id] = value;
        }
        return value;
    }
    function $2b5f32906e60800f$var$getBundleURL() {
        try {
            throw new Error();
        } catch (err) {
            var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
            if (matches) // Use the 3rd one, which will be a runtime in the original bundle.
            return $2b5f32906e60800f$var$getBaseURL(matches[2]);
        }
        return '/';
    }
    function $2b5f32906e60800f$var$getBaseURL(url) {
        return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
    } // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
    function $2b5f32906e60800f$var$getOrigin(url) {
        var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
        if (!matches) throw new Error('Origin not found');
        return matches[0];
    }
    $2b5f32906e60800f$export$bdfd709ae4826697 = $2b5f32906e60800f$var$getBundleURLCached;
    $2b5f32906e60800f$export$c9e73fbda7da57b6 = $2b5f32906e60800f$var$getBaseURL;
    $2b5f32906e60800f$export$5a759dc7a1cfb72a = $2b5f32906e60800f$var$getOrigin;
});
parcelRequire.register("bjbVQ", function(module, exports) {
    module.exports = parcelRequire("3IRMm").getBundleURL('f3Ts0') + "Pin_disconnected_VarA.8d681485.png";
});
parcelRequire.register("6UsgB", function(module, exports) {
    module.exports = parcelRequire("3IRMm").getBundleURL('f3Ts0') + "ExecPin_Connected.9918e2db.png";
});
parcelRequire.register("dbjYy", function(module, exports) {
    module.exports = parcelRequire("3IRMm").getBundleURL('f3Ts0') + "ExecPin_Disconnected.10f4d0f9.png";
});
const $a706eeb93ebe8800$export$5be178b6eece6ea9 = new Map([
    [
        "Delegate",
        {
            connected: $a706eeb93ebe8800$var$pathToImg(parcelRequire("3vD7t")),
            disconnected: $a706eeb93ebe8800$var$pathToImg(parcelRequire("bjbVQ"))
        }, 
    ],
    [
        "Value",
        {
            connected: $a706eeb93ebe8800$var$pathToImg(parcelRequire("3vD7t")),
            disconnected: $a706eeb93ebe8800$var$pathToImg(parcelRequire("bjbVQ"))
        }, 
    ],
    [
        "Exec",
        {
            connected: $a706eeb93ebe8800$var$pathToImg(parcelRequire("6UsgB")),
            disconnected: $a706eeb93ebe8800$var$pathToImg(parcelRequire("dbjYy"))
        }, 
    ], 
]);
const $a706eeb93ebe8800$export$4c4b68499a43b876 = new Map([
    [
        "Exec",
        {
            category: "Exec",
            color: "white"
        }
    ],
    [
        "Boolean",
        {
            category: "Value",
            color: "rgba(76.5, 0.0, 0.0, 255.0)"
        }
    ],
    [
        "Byte",
        {
            category: "Value",
            color: "rgba(0.0, 40.800000000000004, 33.47385, 255.0)"
        }, 
    ],
    [
        "Class",
        {
            category: "Value",
            color: "rgba(25.5, 0.0, 127.5, 255.0)"
        }
    ],
    [
        "Int",
        {
            category: "Value",
            color: "rgba(3.461625, 196.35, 109.550295, 255.0)"
        }, 
    ],
    [
        "Int64",
        {
            category: "Value",
            color: "rgba(105.46162500000001, 196.35, 109.550295, 255.0)"
        }, 
    ],
    [
        "Float",
        {
            category: "Value",
            color: "rgba(91.205085, 255.0, 15.299999999999999, 255.0)"
        }, 
    ],
    [
        "Name",
        {
            category: "Value",
            color: "rgba(154.96783499999998, 57.37092, 255.0, 255.0)"
        }, 
    ],
    [
        "Delegate",
        {
            category: "Delegate",
            color: "rgba(255.0, 10.200000000000001, 10.200000000000001, 255.0)"
        }, 
    ],
    [
        "Object",
        {
            category: "Value",
            color: "rgba(0.0, 102.0, 232.05, 255.0)"
        }
    ],
    [
        "SoftObject",
        {
            category: "Value",
            color: "rgba(76.5, 255.0, 255.0, 255.0)"
        }, 
    ],
    [
        "SoftClass",
        {
            category: "Value",
            color: "rgba(255.0, 76.5, 255.0, 255.0)"
        }, 
    ],
    [
        "Interface",
        {
            category: "Value",
            color: "rgba(223.992, 255.0, 102.0, 255.0)"
        }, 
    ],
    [
        "String",
        {
            category: "Value",
            color: "rgba(255.0, 0.0, 168.436935, 255.0)"
        }, 
    ],
    [
        "Text",
        {
            category: "Value",
            color: "rgba(204.0, 51.0, 102.0, 255.0)"
        }
    ],
    [
        "Struct",
        {
            category: "Value",
            color: "rgba(0.0, 25.5, 153.0, 255.0)"
        }
    ],
    [
        "Wildcard",
        {
            category: "Value",
            color: "rgba(56.1, 49.929, 49.929, 255.0)"
        }, 
    ],
    [
        "Vector",
        {
            category: "Value",
            color: "rgba(255.0, 150.770025, 4.21056, 255.0)"
        }, 
    ],
    [
        "Rotator",
        {
            category: "Value",
            color: "rgba(90.115215, 115.81462499999999, 255.0, 255.0)"
        }, 
    ],
    [
        "Transform",
        {
            category: "Value",
            color: "rgba(255.0, 44.009175, 0.0, 255.0)"
        }, 
    ], 
]);
const $7f8533487eef243b$var$findExec = (pins)=>{
    return pins.find((pin)=>pin.type === "Exec"
    );
};
const $7f8533487eef243b$var$valuePin = $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Value").disconnected;
const $7f8533487eef243b$var$valuePinImg = new _konvaDefault.default.Image({
    width: 15,
    height: 11,
    image: $7f8533487eef243b$var$valuePin
});
$7f8533487eef243b$var$valuePinImg.filters([
    _konvaDefault.default.Filters.RGB
]);
const $7f8533487eef243b$var$reqImages = [
    $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Value").disconnected,
    $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Value").connected,
    $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Exec").disconnected,
    $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Exec").connected,
    $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Delegate").disconnected,
    $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Delegate").connected, 
];
const $7f8533487eef243b$var$vPin = new _konvaDefault.default.Image({
    image: $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Value").disconnected
});
const $7f8533487eef243b$var$ePin = new _konvaDefault.default.Image({
    image: $a706eeb93ebe8800$export$5be178b6eece6ea9.get("Exec").disconnected
});
$7f8533487eef243b$var$vPin.cache();
$7f8533487eef243b$var$ePin.cache();
const $7f8533487eef243b$var$pinImgCaches = new Map();
const $7f8533487eef243b$var$makeGraphPin = (style)=>{
    // if (pinImgCaches.has(style)) {
    //   return pinImgCaches.get(style).clone();
    // }
    const p = (()=>{
        switch(style.category){
            case "Value":
                return $7f8533487eef243b$var$vPin.clone();
            case "Exec":
                return $7f8533487eef243b$var$ePin.clone();
            case "Delegate":
                return null;
        }
    })();
    p.cache();
    p.filters([
        _konvaDefault.default.Filters.RGB,
        _konvaDefault.default.Filters.Brighten
    ]);
    const c = _parseCssColorDefault.default(style.color);
    p.red(c.values[0] + 10);
    p.green(c.values[1] + 10);
    p.blue(c.values[2] + 10);
    p.cache();
    // pinImgCaches.set(style, p);
    return p;
};
const $7f8533487eef243b$export$618c773c1304e196 = (options)=>{
    const node = $593f084dca2aa93b$export$270e7ba5936d3c48(options);
    const container = new _konvaDefault.default.Group({
        x: node.x(),
        y: node.y(),
        draggable: true,
        width: node.width(),
        height: node.height()
    });
    node.zIndex(0);
    container.className = "BPNode";
    node.position({
        x: 0,
        y: 0
    });
    container.add(node);
    const nodeTitle = new _konvaDefault.default.Text({
        x: 26,
        y: 7.5,
        text: options.nodeTitle ? options.nodeTitle : "Unknown",
        fontSize: 12,
        fontStyle: "bold",
        fontFamily: "san-serif",
        fill: "#EEEEEE"
    });
    nodeTitle.zIndex(10);
    container.add(nodeTitle);
    const headerH = node.getAttr("headerHeight");
    const iPins = options.pins.filter((pin)=>pin.direction === "Input"
    );
    const iExecs = iPins.filter((pin)=>pin.type === "Exec"
    );
    const iValues = iPins.filter((pin)=>$a706eeb93ebe8800$export$4c4b68499a43b876.get(pin.type).category === "Value"
    );
    const oPins = options.pins.filter((pin)=>pin.direction === "Output"
    );
    const oValues = oPins.filter((pin)=>$a706eeb93ebe8800$export$4c4b68499a43b876.get(pin.type).category === "Value"
    );
    const oExecs = oPins.filter((pin)=>pin.type === "Exec"
    );
    const iPinMarginLeft = 10;
    const execPinHeight = 35;
    const pinName = new _konvaDefault.default.Text({
        fontSize: 11.5,
        fontFamily: "san-serif",
        fill: "#EEEEEE"
    });
    _imagePromiseDefault.default($7f8533487eef243b$var$reqImages).then(()=>{
        const makePinText = (text, pin, offset)=>{
            return text.text(pin.name).x(iPinMarginLeft + offset).y(iOff - 1);
        };
        const iMaxWidth = Math.max(...iValues.map((pin)=>pinName.measureSize(pin.name).width
        ));
        const oMaxWidth = Math.max(...oValues.map((pin)=>pinName.measureSize(pin.name).width
        )) * 2;
        const pinMaxWidth = iMaxWidth + oMaxWidth + iPinMarginLeft + $7f8533487eef243b$var$vPin.width() + $7f8533487eef243b$var$ePin.width();
        const titleWidth = nodeTitle.measureSize(options.nodeTitle).width + 62;
        const nodeWidth = pinMaxWidth > titleWidth ? pinMaxWidth : titleWidth;
        node.width(nodeWidth);
        let iOff = 1;
        for (const pin4 of iExecs){
            const pinImg = $7f8533487eef243b$var$makeGraphPin($a706eeb93ebe8800$export$4c4b68499a43b876.get(pin4.type));
            container.add(pinImg);
            pinImg.x(iPinMarginLeft);
            pinImg.y(headerH + 10 + iOff);
            iOff += execPinHeight;
        }
        for (const pin1 of iValues){
            const pinImg = $7f8533487eef243b$var$makeGraphPin($a706eeb93ebe8800$export$4c4b68499a43b876.get(pin1.type));
            container.add(pinImg);
            pinImg.x(iPinMarginLeft);
            pinImg.y(iOff += 30);
            container.add(makePinText(pinName.clone(), pin1, pinImg.width() + 20).y(iOff));
        }
        let oOff = 0;
        for (const pin2 of oExecs){
            const pinImg = $7f8533487eef243b$var$makeGraphPin($a706eeb93ebe8800$export$4c4b68499a43b876.get(pin2.type));
            container.add(pinImg);
            pinImg.x(node.width() - 20);
            pinImg.y(headerH + 10 + oOff);
            oOff += execPinHeight;
        }
        for (const pin3 of oValues){
            const pinImg = $7f8533487eef243b$var$makeGraphPin($a706eeb93ebe8800$export$4c4b68499a43b876.get(pin3.type));
            container.add(pinImg);
            pinImg.x(node.width() - 20);
            pinImg.y(oOff += 30);
            const text = pinName.clone().align("right");
            container.add(makePinText(text, pin3, node.width() - text.measureSize().width * 2).y(oOff));
        }
        const bottomMargin = 20;
        node.height(oOff > iOff ? oOff + bottomMargin : iOff + bottomMargin);
    });
    return container;
};
const $15a1407f33ed5d4c$export$7236a4129b8bddbe = ()=>{
    return new _konvaDefault.default.Transformer({
        borderStroke: "#EAA500",
        borderStrokeWidth: 8,
        resizeEnabled: false,
        rotateEnabled: false
    });
};
const $b72057e732820704$export$fce123c48a7b4eae = (options)=>{
    const defaults = {
        span: 16,
        gridRegularColor: "#363636",
        gridRulerColor: "#020202",
        backgroundColor: "#272726",
        drawScale: 1,
        looking: {
            x: 0,
            y: 0
        }
    };
    const drawLine = (ctx, _shape, x1, y1, x2, y2, color, width)=>{
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    };
    const drawGrid = (ctx, shape)=>{
        const regSpan = 8;
        const drawScale = shape.getAttr("drawScale");
        const span = shape.getAttr("span");
        const scaledSpan = span * drawScale;
        const looking = shape.getAttr("looking");
        const calcOffset = (p)=>{
            if (p < 0) return (span * regSpan + p % (span * regSpan)) * drawScale;
            else return p % (span * regSpan) * drawScale;
        };
        const offset = {
            x: calcOffset(looking.x),
            y: calcOffset(looking.y)
        };
        for(let x = Math.floor(-offset.x); x <= Math.floor((shape.width() - offset.x) / scaledSpan); x += 1)drawLine(ctx, shape, x * scaledSpan + offset.x, 0, x * scaledSpan + offset.x, shape.height(), x % regSpan === 0 ? shape.getAttr("gridRulerColor") : shape.getAttr("gridRegularColor"), drawScale);
        for(let y = Math.floor(-offset.y); y <= Math.floor((shape.height() - offset.y) / scaledSpan); y += 1)drawLine(ctx, shape, 0, y * scaledSpan + offset.y, shape.width(), y * scaledSpan + offset.y, y % regSpan === 0 ? shape.getAttr("gridRulerColor") : shape.getAttr("gridRegularColor"), drawScale);
    };
    const config = {
        ...defaults,
        ...options
    };
    const grid = new _konvaDefault.default.Shape({
        sceneFunc: function(ctx, shape) {
            ctx.save();
            drawGrid(ctx, shape);
            ctx.fillStrokeShape(shape);
            ctx.restore();
        }
    });
    grid.setAttr("drawScale", config.drawScale);
    grid.setAttr("span", config.span);
    grid.setAttr("backgroundColor", config.backgroundColor);
    grid.setAttr("gridRulerColor", config.gridRulerColor);
    grid.setAttr("gridRegularColor", config.gridRegularColor);
    grid.setAttr("looking", config.looking);
    grid.className = "BPGrid";
    return grid;
};
class $88d88e0e9d7489b9$export$614db49f3febe941 {
    constructor(element, options){
        this.looking = {
            x: 0,
            y: 0
        };
        this.panInfo = {
            panning: false,
            startPoint: {
                x: 0,
                y: 0
            },
            prevPoint: {
                x: 0,
                y: 0
            },
            startLookPoint: {
                x: 0,
                y: 0
            }
        };
        this.scale = 1;
        this.stage = new _konvaDefault.default.Stage({
            container: element,
            ...options.size
        });
        this.nodeLayer = new _konvaDefault.default.Layer();
        this.stage.add(this.nodeLayer);
        this.grid = $b72057e732820704$export$fce123c48a7b4eae({
            x: 0,
            y: 0,
            ...options.size
        });
        this.grid.setAttr("looking", this.looking);
        this.nodeLayer.add(this.grid);
        this.grid.moveToBottom();
        this.transformer = $15a1407f33ed5d4c$export$7236a4129b8bddbe();
        this.nodeLayer.add(this.transformer);
        const elm = typeof element === "string" ? document.getElementById(element) : element;
        elm.style.backgroundColor = "#272726";
        elm.addEventListener("contextmenu", (e)=>e.preventDefault()
        );
        this.grid.width(this.stage.width());
        this.grid.height(this.stage.height());
        window.addEventListener("resize", ()=>{
            this.grid.width(this.stage.width());
            this.grid.height(this.stage.height());
        });
        this.initEvents();
    }
    initEvents() {
        this.initNodeSelectEvent();
        this.initGraphDragEvent();
        this.initZoomEvent();
    }
    initNodeSelectEvent() {
        this.stage.on("mousedown touchstart", (e)=>{
            if (e.evt.button === 0) {
                if (e.target.className === "BPNode") {
                    this.transformer.nodes([
                        e.target
                    ]);
                    // this.transformer.moveToTop();
                    // e.target.moveToTop();
                    return;
                }
                this.transformer.nodes([]);
            }
        });
    }
    initGraphDragEvent() {
        const mouseButton = 2;
        this.stage.on("mousedown touchstart", (e)=>{
            if (e.evt.button === mouseButton) {
                this.panInfo.panning = true;
                this.panInfo.startPoint = this.stage.getPointerPosition();
                this.panInfo.prevPoint = this.panInfo.startPoint;
                this.panInfo.startLookPoint = this.looking;
            }
        });
        this.stage.on("mousemove touchmove", (_e)=>{
            if (this.panInfo.panning) {
                document.body.style.cursor = "grabbing";
                const currPoint = this.stage.getPointerPosition();
                const dx = currPoint.x - this.panInfo.prevPoint.x;
                const dy = currPoint.y - this.panInfo.prevPoint.y;
                this.setLookPoint({
                    x: this.looking.x + dx,
                    y: this.looking.y + dy
                });
                this.panInfo.prevPoint = currPoint;
            }
        });
        this.stage.on("mouseup touchend", (e)=>{
            if (e.evt.button === mouseButton) {
                document.body.style.cursor = "default";
                this.panInfo.panning = false;
            }
        });
    }
    initZoomEvent() {
        this.stage.on("wheel", (e)=>{
            const d = e.evt.deltaY;
            const zoom = this.scale * 0.999 ** d;
            this.toZoom(this.stage.getPointerPosition(), zoom >= 2 ? 2 : zoom <= 0.3 ? 0.3 : zoom);
        });
    }
    rewiring() {
    }
    setLookPoint(point) {
        const gl = this.grid.getAttr("looking");
        this.grid.setAttr("looking", {
            x: gl.x + (point.x - this.looking.x) / this.scale,
            y: gl.y + (point.y - this.looking.y) / this.scale
        });
        for (const node of this.nodeLayer.getChildren())if (node.className === "BPNode") {
            node.x(node.x() + point.x - this.looking.x);
            node.y(node.y() + point.y - this.looking.y);
        }
        this.looking = point;
    }
    addNodes(nodes) {
        for (const node of nodes)this.addNode(node);
        this.rewiring();
    }
    addNode(node) {
        this.nodeLayer.add(node);
        this.rewiring();
    }
    toZoom(point1, scale) {
        const offset = {
            x: (scale / this.scale - 1) * point1.x,
            y: (scale / this.scale - 1) * point1.y
        };
        this.setLookPoint({
            x: this.looking.x - offset.x,
            y: this.looking.y - offset.y
        });
        this.setScale(scale);
    }
    setScale(scale1) {
        this.grid.setAttr("drawScale", scale1);
        for (const node of this.nodeLayer.getChildren())if (node.className === "BPNode") {
            node.x(node.x() * (scale1 / this.scale));
            node.y(node.y() * (scale1 / this.scale));
            node.scale({
                x: scale1,
                y: scale1
            });
        }
        this.scale = scale1;
    }
}

},{"konva":"eesmo","image-promise":"htaIB","parse-css-color":"XPtCL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eesmo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fullInternalsJs = require("./_FullInternals.js");
exports.default = _fullInternalsJs.Konva;

},{"./_FullInternals.js":"9mvCw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9mvCw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Konva", ()=>Konva
);
var _coreInternalsJs = require("./_CoreInternals.js");
var _arcJs = require("./shapes/Arc.js");
var _arrowJs = require("./shapes/Arrow.js");
var _circleJs = require("./shapes/Circle.js");
var _ellipseJs = require("./shapes/Ellipse.js");
var _imageJs = require("./shapes/Image.js");
var _labelJs = require("./shapes/Label.js");
var _lineJs = require("./shapes/Line.js");
var _pathJs = require("./shapes/Path.js");
var _rectJs = require("./shapes/Rect.js");
var _regularPolygonJs = require("./shapes/RegularPolygon.js");
var _ringJs = require("./shapes/Ring.js");
var _spriteJs = require("./shapes/Sprite.js");
var _starJs = require("./shapes/Star.js");
var _textJs = require("./shapes/Text.js");
var _textPathJs = require("./shapes/TextPath.js");
var _transformerJs = require("./shapes/Transformer.js");
var _wedgeJs = require("./shapes/Wedge.js");
var _blurJs = require("./filters/Blur.js");
var _brightenJs = require("./filters/Brighten.js");
var _contrastJs = require("./filters/Contrast.js");
var _embossJs = require("./filters/Emboss.js");
var _enhanceJs = require("./filters/Enhance.js");
var _grayscaleJs = require("./filters/Grayscale.js");
var _hslJs = require("./filters/HSL.js");
var _hsvJs = require("./filters/HSV.js");
var _invertJs = require("./filters/Invert.js");
var _kaleidoscopeJs = require("./filters/Kaleidoscope.js");
var _maskJs = require("./filters/Mask.js");
var _noiseJs = require("./filters/Noise.js");
var _pixelateJs = require("./filters/Pixelate.js");
var _posterizeJs = require("./filters/Posterize.js");
var _rgbJs = require("./filters/RGB.js");
var _rgbaJs = require("./filters/RGBA.js");
var _sepiaJs = require("./filters/Sepia.js");
var _solarizeJs = require("./filters/Solarize.js");
var _thresholdJs = require("./filters/Threshold.js");
const Konva = _coreInternalsJs.Konva.Util._assign(_coreInternalsJs.Konva, {
    Arc: _arcJs.Arc,
    Arrow: _arrowJs.Arrow,
    Circle: _circleJs.Circle,
    Ellipse: _ellipseJs.Ellipse,
    Image: _imageJs.Image,
    Label: _labelJs.Label,
    Tag: _labelJs.Tag,
    Line: _lineJs.Line,
    Path: _pathJs.Path,
    Rect: _rectJs.Rect,
    RegularPolygon: _regularPolygonJs.RegularPolygon,
    Ring: _ringJs.Ring,
    Sprite: _spriteJs.Sprite,
    Star: _starJs.Star,
    Text: _textJs.Text,
    TextPath: _textPathJs.TextPath,
    Transformer: _transformerJs.Transformer,
    Wedge: _wedgeJs.Wedge,
    Filters: {
        Blur: _blurJs.Blur,
        Brighten: _brightenJs.Brighten,
        Contrast: _contrastJs.Contrast,
        Emboss: _embossJs.Emboss,
        Enhance: _enhanceJs.Enhance,
        Grayscale: _grayscaleJs.Grayscale,
        HSL: _hslJs.HSL,
        HSV: _hsvJs.HSV,
        Invert: _invertJs.Invert,
        Kaleidoscope: _kaleidoscopeJs.Kaleidoscope,
        Mask: _maskJs.Mask,
        Noise: _noiseJs.Noise,
        Pixelate: _pixelateJs.Pixelate,
        Posterize: _posterizeJs.Posterize,
        RGB: _rgbJs.RGB,
        RGBA: _rgbaJs.RGBA,
        Sepia: _sepiaJs.Sepia,
        Solarize: _solarizeJs.Solarize,
        Threshold: _thresholdJs.Threshold
    }
});

},{"./_CoreInternals.js":"3Inag","./shapes/Arc.js":"F7buL","./shapes/Arrow.js":"6FMY7","./shapes/Circle.js":"fTvxr","./shapes/Ellipse.js":"4hjZI","./shapes/Image.js":"fUwIk","./shapes/Label.js":"7pquy","./shapes/Line.js":"8Ks45","./shapes/Path.js":"8EWPy","./shapes/Rect.js":"ic9u2","./shapes/RegularPolygon.js":"gCizK","./shapes/Ring.js":"4Piwf","./shapes/Sprite.js":"7o4Iq","./shapes/Star.js":"bxaXl","./shapes/Text.js":"dzdPT","./shapes/TextPath.js":"30jgk","./shapes/Transformer.js":"fWKdn","./shapes/Wedge.js":"5rRig","./filters/Blur.js":"6QTsv","./filters/Brighten.js":"94FPc","./filters/Contrast.js":"bwgum","./filters/Emboss.js":"7ZmJj","./filters/Enhance.js":"bNomJ","./filters/Grayscale.js":"grkWT","./filters/HSL.js":"5c9Ip","./filters/HSV.js":"9JuIe","./filters/Invert.js":"eBi4g","./filters/Kaleidoscope.js":"r63Ws","./filters/Mask.js":"4A3pb","./filters/Noise.js":"gV012","./filters/Pixelate.js":"8NilK","./filters/Posterize.js":"45q74","./filters/RGB.js":"8KjCF","./filters/RGBA.js":"dNKU2","./filters/Sepia.js":"19I2Q","./filters/Solarize.js":"jZigB","./filters/Threshold.js":"1R9QS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Inag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Konva", ()=>Konva
);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
var _nodeJs = require("./Node.js");
var _containerJs = require("./Container.js");
var _stageJs = require("./Stage.js");
var _layerJs = require("./Layer.js");
var _fastLayerJs = require("./FastLayer.js");
var _groupJs = require("./Group.js");
var _dragAndDropJs = require("./DragAndDrop.js");
var _shapeJs = require("./Shape.js");
var _animationJs = require("./Animation.js");
var _tweenJs = require("./Tween.js");
var _contextJs = require("./Context.js");
var _canvasJs = require("./Canvas.js");
const Konva = _utilJs.Util._assign(_globalJs.Konva, {
    Util: _utilJs.Util,
    Transform: _utilJs.Transform,
    Node: _nodeJs.Node,
    Container: _containerJs.Container,
    Stage: _stageJs.Stage,
    stages: _stageJs.stages,
    Layer: _layerJs.Layer,
    FastLayer: _fastLayerJs.FastLayer,
    Group: _groupJs.Group,
    DD: _dragAndDropJs.DD,
    Shape: _shapeJs.Shape,
    shapes: _shapeJs.shapes,
    Animation: _animationJs.Animation,
    Tween: _tweenJs.Tween,
    Easings: _tweenJs.Easings,
    Context: _contextJs.Context,
    Canvas: _canvasJs.Canvas
});
exports.default = Konva;

},{"./Global.js":"1LGjN","./Util.js":"98XwR","./Node.js":"em6vr","./Container.js":"4VECF","./Stage.js":"eC0Bq","./Layer.js":"2r1Kv","./FastLayer.js":"9wqBZ","./Group.js":"ijBUs","./DragAndDrop.js":"fIsEZ","./Shape.js":"7oUQ5","./Animation.js":"8fson","./Tween.js":"8hEXD","./Context.js":"j7jpk","./Canvas.js":"gdTkf","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1LGjN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glob", ()=>glob
);
parcelHelpers.export(exports, "Konva", ()=>Konva1
);
parcelHelpers.export(exports, "_registerNode", ()=>_registerNode
);
var global = arguments[3];
var PI_OVER_180 = Math.PI / 180;
function detectBrowser() {
    return typeof window !== 'undefined' && (({
    }).toString.call(window) === '[object Window]' || ({
    }).toString.call(window) === '[object global]');
}
const glob = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' ? self : {
};
const Konva1 = {
    _global: glob,
    version: '8.3.0',
    isBrowser: detectBrowser(),
    isUnminified: /param/.test((function(param) {
    }).toString()),
    dblClickWindow: 400,
    getAngle (angle) {
        return Konva1.angleDeg ? angle * PI_OVER_180 : angle;
    },
    enableTrace: false,
    pointerEventsEnabled: true,
    autoDrawEnabled: true,
    hitOnDragEnabled: false,
    capturePointerEventsEnabled: false,
    _mouseListenClick: false,
    _touchListenClick: false,
    _pointerListenClick: false,
    _mouseInDblClickWindow: false,
    _touchInDblClickWindow: false,
    _pointerInDblClickWindow: false,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    pixelRatio: typeof window !== 'undefined' && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [
        0,
        1
    ],
    isDragging () {
        return Konva1['DD'].isDragging;
    },
    isDragReady () {
        return !!Konva1['DD'].node;
    },
    document: glob.document,
    _injectGlobal (Konva) {
        glob.Konva = Konva;
    }
};
const _registerNode = (NodeClass)=>{
    Konva1[NodeClass.prototype.getClassName()] = NodeClass;
};
Konva1._injectGlobal(Konva1);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"98XwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transform", ()=>Transform
);
parcelHelpers.export(exports, "Util", ()=>Util
);
var _globalJs = require("./Global.js");
class Transform {
    constructor(m = [
        1,
        0,
        0,
        1,
        0,
        0
    ]){
        this.dirty = false;
        this.m = m && m.slice() || [
            1,
            0,
            0,
            1,
            0,
            0
        ];
    }
    reset() {
        this.m[0] = 1;
        this.m[1] = 0;
        this.m[2] = 0;
        this.m[3] = 1;
        this.m[4] = 0;
        this.m[5] = 0;
    }
    copy() {
        return new Transform(this.m);
    }
    copyInto(tr) {
        tr.m[0] = this.m[0];
        tr.m[1] = this.m[1];
        tr.m[2] = this.m[2];
        tr.m[3] = this.m[3];
        tr.m[4] = this.m[4];
        tr.m[5] = this.m[5];
    }
    point(point1) {
        var m = this.m;
        return {
            x: m[0] * point1.x + m[2] * point1.y + m[4],
            y: m[1] * point1.x + m[3] * point1.y + m[5]
        };
    }
    translate(x4, y4) {
        this.m[4] += this.m[0] * x4 + this.m[2] * y4;
        this.m[5] += this.m[1] * x4 + this.m[3] * y4;
        return this;
    }
    scale(sx, sy) {
        this.m[0] *= sx;
        this.m[1] *= sx;
        this.m[2] *= sy;
        this.m[3] *= sy;
        return this;
    }
    rotate(rad1) {
        var c = Math.cos(rad1);
        var s = Math.sin(rad1);
        var m11 = this.m[0] * c + this.m[2] * s;
        var m12 = this.m[1] * c + this.m[3] * s;
        var m21 = this.m[0] * -s + this.m[2] * c;
        var m22 = this.m[1] * -s + this.m[3] * c;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    getTranslation() {
        return {
            x: this.m[4],
            y: this.m[5]
        };
    }
    skew(sx1, sy1) {
        var m11 = this.m[0] + this.m[2] * sy1;
        var m12 = this.m[1] + this.m[3] * sy1;
        var m21 = this.m[2] + this.m[0] * sx1;
        var m22 = this.m[3] + this.m[1] * sx1;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    multiply(matrix) {
        var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
        var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
        var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
        var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
        var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
        var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        this.m[4] = dx;
        this.m[5] = dy;
        return this;
    }
    invert() {
        var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
        var m0 = this.m[3] * d;
        var m1 = -this.m[1] * d;
        var m2 = -this.m[2] * d;
        var m3 = this.m[0] * d;
        var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
        var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        this.m[0] = m0;
        this.m[1] = m1;
        this.m[2] = m2;
        this.m[3] = m3;
        this.m[4] = m4;
        this.m[5] = m5;
        return this;
    }
    getMatrix() {
        return this.m;
    }
    setAbsolutePosition(x1, y1) {
        var m0 = this.m[0], m1 = this.m[1], m2 = this.m[2], m3 = this.m[3], m4 = this.m[4], m5 = this.m[5], yt = (m0 * (y1 - m5) - m1 * (x1 - m4)) / (m0 * m3 - m1 * m2), xt = (x1 - m4 - m2 * yt) / m0;
        return this.translate(xt, yt);
    }
    decompose() {
        var a = this.m[0];
        var b = this.m[1];
        var c = this.m[2];
        var d = this.m[3];
        var e = this.m[4];
        var f = this.m[5];
        var delta = a * d - b * c;
        let result = {
            x: e,
            y: f,
            rotation: 0,
            scaleX: 0,
            scaleY: 0,
            skewX: 0,
            skewY: 0
        };
        if (a != 0 || b != 0) {
            var r = Math.sqrt(a * a + b * b);
            result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
            result.scaleX = r;
            result.scaleY = delta / r;
            result.skewX = (a * c + b * d) / delta;
            result.skewY = 0;
        } else if (c != 0 || d != 0) {
            var s = Math.sqrt(c * c + d * d);
            result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
            result.scaleX = delta / s;
            result.scaleY = s;
            result.skewX = 0;
            result.skewY = (a * c + b * d) / delta;
        }
        result.rotation = Util._getRotation(result.rotation);
        return result;
    }
}
var OBJECT_ARRAY = '[object Array]', OBJECT_NUMBER = '[object Number]', OBJECT_STRING = '[object String]', OBJECT_BOOLEAN = '[object Boolean]', PI_OVER_DEG180 = Math.PI / 180, DEG180_OVER_PI = 180 / Math.PI, HASH = '#', EMPTY_STRING = '', ZERO = '0', KONVA_WARNING = 'Konva warning: ', KONVA_ERROR = 'Konva error: ', RGB_PAREN = 'rgb(', COLORS = {
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        132,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        255,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    grey: [
        128,
        128,
        128
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        203
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    rebeccapurple: [
        102,
        51,
        153
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        119,
        128,
        144
    ],
    slategrey: [
        119,
        128,
        144
    ],
    snow: [
        255,
        255,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    transparent: [
        255,
        255,
        255,
        0
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        5
    ]
}, RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, animQueue = [];
const req = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame || function(f) {
    setTimeout(f, 60);
};
const Util = {
    _isElement (obj) {
        return !!(obj && obj.nodeType == 1);
    },
    _isFunction (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    _isPlainObject (obj) {
        return !!obj && obj.constructor === Object;
    },
    _isArray (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
    },
    _isNumber (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
    },
    _isString (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_STRING;
    },
    _isBoolean (obj) {
        return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
    },
    isObject (val) {
        return val instanceof Object;
    },
    isValidSelector (selector) {
        if (typeof selector !== 'string') return false;
        var firstChar = selector[0];
        return firstChar === '#' || firstChar === '.' || firstChar === firstChar.toUpperCase();
    },
    _sign (number) {
        if (number === 0) return 1;
        if (number > 0) return 1;
        else return -1;
    },
    requestAnimFrame (callback) {
        animQueue.push(callback);
        if (animQueue.length === 1) req(function() {
            const queue = animQueue;
            animQueue = [];
            queue.forEach(function(cb) {
                cb();
            });
        });
    },
    createCanvasElement () {
        var canvas = document.createElement('canvas');
        try {
            canvas.style = canvas.style || {
            };
        } catch (e) {
        }
        return canvas;
    },
    createImageElement () {
        return document.createElement('img');
    },
    _isInDocument (el) {
        while(el = el.parentNode){
            if (el == document) return true;
        }
        return false;
    },
    _urlToImage (url, callback) {
        var imageObj = Util.createImageElement();
        imageObj.onload = function() {
            callback(imageObj);
        };
        imageObj.src = url;
    },
    _rgbToHex (r, g, b) {
        return (16777216 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    _hexToRgb (hex) {
        hex = hex.replace(HASH, EMPTY_STRING);
        var bigint = parseInt(hex, 16);
        return {
            r: bigint >> 16 & 255,
            g: bigint >> 8 & 255,
            b: bigint & 255
        };
    },
    getRandomColor () {
        var randColor = (Math.random() * 16777215 << 0).toString(16);
        while(randColor.length < 6)randColor = ZERO + randColor;
        return HASH + randColor;
    },
    getRGB (color) {
        var rgb;
        if (color in COLORS) {
            rgb = COLORS[color];
            return {
                r: rgb[0],
                g: rgb[1],
                b: rgb[2]
            };
        } else if (color[0] === HASH) return this._hexToRgb(color.substring(1));
        else if (color.substr(0, 4) === RGB_PAREN) {
            rgb = RGB_REGEX.exec(color.replace(/ /g, ''));
            return {
                r: parseInt(rgb[1], 10),
                g: parseInt(rgb[2], 10),
                b: parseInt(rgb[3], 10)
            };
        } else return {
            r: 0,
            g: 0,
            b: 0
        };
    },
    colorToRGBA (str) {
        str = str || 'black';
        return Util._namedColorToRBA(str) || Util._hex3ColorToRGBA(str) || Util._hex6ColorToRGBA(str) || Util._rgbColorToRGBA(str) || Util._rgbaColorToRGBA(str) || Util._hslColorToRGBA(str);
    },
    _namedColorToRBA (str) {
        var c = COLORS[str.toLowerCase()];
        if (!c) return null;
        return {
            r: c[0],
            g: c[1],
            b: c[2],
            a: 1
        };
    },
    _rgbColorToRGBA (str) {
        if (str.indexOf('rgb(') === 0) {
            str = str.match(/rgb\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: 1
            };
        }
    },
    _rgbaColorToRGBA (str) {
        if (str.indexOf('rgba(') === 0) {
            str = str.match(/rgba\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: parts[3]
            };
        }
    },
    _hex6ColorToRGBA (str) {
        if (str[0] === '#' && str.length === 7) return {
            r: parseInt(str.slice(1, 3), 16),
            g: parseInt(str.slice(3, 5), 16),
            b: parseInt(str.slice(5, 7), 16),
            a: 1
        };
    },
    _hex3ColorToRGBA (str) {
        if (str[0] === '#' && str.length === 4) return {
            r: parseInt(str[1] + str[1], 16),
            g: parseInt(str[2] + str[2], 16),
            b: parseInt(str[3] + str[3], 16),
            a: 1
        };
    },
    _hslColorToRGBA (str) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
            const [_, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str);
            const h = Number(hsl[0]) / 360;
            const s = Number(hsl[1]) / 100;
            const l = Number(hsl[2]) / 100;
            let t2;
            let t3;
            let val;
            if (s === 0) {
                val = l * 255;
                return {
                    r: Math.round(val),
                    g: Math.round(val),
                    b: Math.round(val),
                    a: 1
                };
            }
            if (l < 0.5) t2 = l * (1 + s);
            else t2 = l + s - l * s;
            const t1 = 2 * l - t2;
            const rgb = [
                0,
                0,
                0
            ];
            for(let i = 0; i < 3; i++){
                t3 = h + 1 / 3 * -(i - 1);
                if (t3 < 0) t3++;
                if (t3 > 1) t3--;
                if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
                else if (2 * t3 < 1) val = t2;
                else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
                else val = t1;
                rgb[i] = val * 255;
            }
            return {
                r: Math.round(rgb[0]),
                g: Math.round(rgb[1]),
                b: Math.round(rgb[2]),
                a: 1
            };
        }
    },
    haveIntersection (r1, r2) {
        return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
    },
    cloneObject (obj) {
        var retObj = {
        };
        for(var key in obj){
            if (this._isPlainObject(obj[key])) retObj[key] = this.cloneObject(obj[key]);
            else if (this._isArray(obj[key])) retObj[key] = this.cloneArray(obj[key]);
            else retObj[key] = obj[key];
        }
        return retObj;
    },
    cloneArray (arr) {
        return arr.slice(0);
    },
    degToRad (deg) {
        return deg * PI_OVER_DEG180;
    },
    radToDeg (rad) {
        return rad * DEG180_OVER_PI;
    },
    _degToRad (deg) {
        Util.warn('Util._degToRad is removed. Please use public Util.degToRad instead.');
        return Util.degToRad(deg);
    },
    _radToDeg (rad) {
        Util.warn('Util._radToDeg is removed. Please use public Util.radToDeg instead.');
        return Util.radToDeg(rad);
    },
    _getRotation (radians) {
        return _globalJs.Konva.angleDeg ? Util.radToDeg(radians) : radians;
    },
    _capitalize (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    throw (str) {
        throw new Error(KONVA_ERROR + str);
    },
    error (str) {
        console.error(KONVA_ERROR + str);
    },
    warn (str) {
        if (!_globalJs.Konva.showWarnings) return;
        console.warn(KONVA_WARNING + str);
    },
    each (obj, func) {
        for(var key in obj)func(key, obj[key]);
    },
    _inRange (val, left, right) {
        return left <= val && val < right;
    },
    _getProjectionToSegment (x1, y1, x2, y2, x3, y3) {
        var x, y, dist;
        var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        if (pd2 == 0) {
            x = x1;
            y = y1;
            dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
        } else {
            var u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
            if (u < 0) {
                x = x1;
                y = y1;
                dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
            } else if (u > 1) {
                x = x2;
                y = y2;
                dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
            } else {
                x = x1 + u * (x2 - x1);
                y = y1 + u * (y2 - y1);
                dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
            }
        }
        return [
            x,
            y,
            dist
        ];
    },
    _getProjectionToLine (pt, line, isClosed) {
        var pc = Util.cloneObject(pt);
        var dist = Number.MAX_VALUE;
        line.forEach(function(p1, i) {
            if (!isClosed && i === line.length - 1) return;
            var p2 = line[(i + 1) % line.length];
            var proj = Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
            var px = proj[0], py = proj[1], pdist = proj[2];
            if (pdist < dist) {
                pc.x = px;
                pc.y = py;
                dist = pdist;
            }
        });
        return pc;
    },
    _prepareArrayForTween (startArray, endArray, isClosed) {
        var n, start = [], end = [];
        if (startArray.length > endArray.length) {
            var temp = endArray;
            endArray = startArray;
            startArray = temp;
        }
        for(n = 0; n < startArray.length; n += 2)start.push({
            x: startArray[n],
            y: startArray[n + 1]
        });
        for(n = 0; n < endArray.length; n += 2)end.push({
            x: endArray[n],
            y: endArray[n + 1]
        });
        var newStart = [];
        end.forEach(function(point) {
            var pr = Util._getProjectionToLine(point, start, isClosed);
            newStart.push(pr.x);
            newStart.push(pr.y);
        });
        return newStart;
    },
    _prepareToStringify (obj) {
        var desc;
        obj.visitedByCircularReferenceRemoval = true;
        for(var key in obj){
            if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')) continue;
            desc = Object.getOwnPropertyDescriptor(obj, key);
            if (obj[key].visitedByCircularReferenceRemoval || Util._isElement(obj[key])) {
                if (desc.configurable) delete obj[key];
                else return null;
            } else if (Util._prepareToStringify(obj[key]) === null) {
                if (desc.configurable) delete obj[key];
                else return null;
            }
        }
        delete obj.visitedByCircularReferenceRemoval;
        return obj;
    },
    _assign (target, source) {
        for(var key in source)target[key] = source[key];
        return target;
    },
    _getFirstPointerId (evt) {
        if (!evt.touches) return evt.pointerId || 999;
        else return evt.changedTouches[0].identifier;
    }
};

},{"./Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"em6vr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Node", ()=>Node
);
var _utilJs = require("./Util.js");
var _factoryJs = require("./Factory.js");
var _canvasJs = require("./Canvas.js");
var _globalJs = require("./Global.js");
var _dragAndDropJs = require("./DragAndDrop.js");
var _validatorsJs = require("./Validators.js");
var ABSOLUTE_OPACITY = 'absoluteOpacity', ALL_LISTENERS = 'allEventListeners', ABSOLUTE_TRANSFORM = 'absoluteTransform', ABSOLUTE_SCALE = 'absoluteScale', CANVAS = 'canvas', CHANGE = 'Change', CHILDREN = 'children', KONVA = 'konva', LISTENING = 'listening', MOUSEENTER = 'mouseenter', MOUSELEAVE = 'mouseleave', NAME = 'name', SET = 'set', SHAPE = 'Shape', SPACE = ' ', STAGE = 'stage', TRANSFORM = 'transform', UPPER_STAGE = 'Stage', VISIBLE = 'visible', TRANSFORM_CHANGE_STR = [
    'xChange.konva',
    'yChange.konva',
    'scaleXChange.konva',
    'scaleYChange.konva',
    'skewXChange.konva',
    'skewYChange.konva',
    'rotationChange.konva',
    'offsetXChange.konva',
    'offsetYChange.konva',
    'transformsEnabledChange.konva', 
].join(SPACE);
let idCounter = 1;
class Node {
    constructor(config){
        this._id = idCounter++;
        this.eventListeners = {
        };
        this.attrs = {
        };
        this.index = 0;
        this._allEventListeners = null;
        this.parent = null;
        this._cache = new Map();
        this._attachedDepsListeners = new Map();
        this._lastPos = null;
        this._batchingTransformChange = false;
        this._needClearTransformCache = false;
        this._filterUpToDate = false;
        this._isUnderCache = false;
        this._dragEventId = null;
        this._shouldFireChangeEvents = false;
        this.setAttrs(config);
        this._shouldFireChangeEvents = true;
    }
    hasChildren() {
        return false;
    }
    _clearCache(attr) {
        if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) this._cache.get(attr).dirty = true;
        else if (attr) this._cache.delete(attr);
        else this._cache.clear();
    }
    _getCache(attr1, privateGetter) {
        var cache = this._cache.get(attr1);
        var isTransform = attr1 === TRANSFORM || attr1 === ABSOLUTE_TRANSFORM;
        var invalid = cache === undefined || isTransform && cache.dirty === true;
        if (invalid) {
            cache = privateGetter.call(this);
            this._cache.set(attr1, cache);
        }
        return cache;
    }
    _calculate(name, deps, getter) {
        if (!this._attachedDepsListeners.get(name)) {
            const depsString = deps.map((dep)=>dep + 'Change.konva'
            ).join(SPACE);
            this.on(depsString, ()=>{
                this._clearCache(name);
            });
            this._attachedDepsListeners.set(name, true);
        }
        return this._getCache(name, getter);
    }
    _getCanvasCache() {
        return this._cache.get(CANVAS);
    }
    _clearSelfAndDescendantCache(attr2) {
        this._clearCache(attr2);
        if (attr2 === ABSOLUTE_TRANSFORM) this.fire('absoluteTransformChange');
    }
    clearCache() {
        this._cache.delete(CANVAS);
        this._clearSelfAndDescendantCache();
        this._requestDraw();
        return this;
    }
    cache(config1) {
        var conf = config1 || {
        };
        var rect = {
        };
        if (conf.x === undefined || conf.y === undefined || conf.width === undefined || conf.height === undefined) rect = this.getClientRect({
            skipTransform: true,
            relativeTo: this.getParent()
        });
        var width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x = conf.x === undefined ? rect.x : conf.x, y = conf.y === undefined ? rect.y : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
        if (!width || !height) {
            _utilJs.Util.error('Can not cache the node. Width or height of the node equals 0. Caching is skipped.');
            return;
        }
        width += offset * 2;
        height += offset * 2;
        x -= offset;
        y -= offset;
        var cachedSceneCanvas = new _canvasJs.SceneCanvas({
            pixelRatio: pixelRatio,
            width: width,
            height: height
        }), cachedFilterCanvas = new _canvasJs.SceneCanvas({
            pixelRatio: pixelRatio,
            width: 0,
            height: 0
        }), cachedHitCanvas = new _canvasJs.HitCanvas({
            pixelRatio: hitCanvasPixelRatio,
            width: width,
            height: height
        }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
        cachedHitCanvas.isCache = true;
        cachedSceneCanvas.isCache = true;
        this._cache.delete(CANVAS);
        this._filterUpToDate = false;
        if (conf.imageSmoothingEnabled === false) {
            cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
            cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
        }
        sceneContext.save();
        hitContext.save();
        sceneContext.translate(-x, -y);
        hitContext.translate(-x, -y);
        this._isUnderCache = true;
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this.drawScene(cachedSceneCanvas, this);
        this.drawHit(cachedHitCanvas, this);
        this._isUnderCache = false;
        sceneContext.restore();
        hitContext.restore();
        if (drawBorder) {
            sceneContext.save();
            sceneContext.beginPath();
            sceneContext.rect(0, 0, width, height);
            sceneContext.closePath();
            sceneContext.setAttr('strokeStyle', 'red');
            sceneContext.setAttr('lineWidth', 5);
            sceneContext.stroke();
            sceneContext.restore();
        }
        this._cache.set(CANVAS, {
            scene: cachedSceneCanvas,
            filter: cachedFilterCanvas,
            hit: cachedHitCanvas,
            x: x,
            y: y
        });
        this._requestDraw();
        return this;
    }
    isCached() {
        return this._cache.has(CANVAS);
    }
    getClientRect(config2) {
        throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(rect, top) {
        var points = [
            {
                x: rect.x,
                y: rect.y
            },
            {
                x: rect.x + rect.width,
                y: rect.y
            },
            {
                x: rect.x + rect.width,
                y: rect.y + rect.height
            },
            {
                x: rect.x,
                y: rect.y + rect.height
            }, 
        ];
        var minX, minY, maxX, maxY;
        var trans = this.getAbsoluteTransform(top);
        points.forEach(function(point) {
            var transformed = trans.point(point);
            if (minX === undefined) {
                minX = maxX = transformed.x;
                minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
        });
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }
    _drawCachedSceneCanvas(context) {
        context.save();
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
        const canvasCache = this._getCanvasCache();
        context.translate(canvasCache.x, canvasCache.y);
        var cacheCanvas = this._getCachedSceneCanvas();
        var ratio = cacheCanvas.pixelRatio;
        context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
        context.restore();
    }
    _drawCachedHitCanvas(context1) {
        var canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
        context1.save();
        context1.translate(canvasCache.x, canvasCache.y);
        context1.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
        context1.restore();
    }
    _getCachedSceneCanvas() {
        var filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n, filter;
        if (filters) {
            if (!this._filterUpToDate) {
                var ratio = sceneCanvas.pixelRatio;
                filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
                try {
                    len = filters.length;
                    filterContext.clear();
                    filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
                    imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
                    for(n = 0; n < len; n++){
                        filter = filters[n];
                        if (typeof filter !== 'function') {
                            _utilJs.Util.error('Filter should be type of function, but got ' + typeof filter + ' instead. Please check correct filters');
                            continue;
                        }
                        filter.call(this, imageData);
                        filterContext.putImageData(imageData, 0, 0);
                    }
                } catch (e) {
                    _utilJs.Util.error('Unable to apply filter. ' + e.message + ' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.');
                }
                this._filterUpToDate = true;
            }
            return filterCanvas;
        }
        return sceneCanvas;
    }
    on(evtStr, handler) {
        this._cache && this._cache.delete(ALL_LISTENERS);
        if (arguments.length === 3) return this._delegate.apply(this, arguments);
        var events = evtStr.split(SPACE), len = events.length, n, event, parts, baseEvent, name;
        for(n = 0; n < len; n++){
            event = events[n];
            parts = event.split('.');
            baseEvent = parts[0];
            name = parts[1] || '';
            if (!this.eventListeners[baseEvent]) this.eventListeners[baseEvent] = [];
            this.eventListeners[baseEvent].push({
                name: name,
                handler: handler
            });
        }
        return this;
    }
    off(evtStr1, callback) {
        var events = (evtStr1 || '').split(SPACE), len = events.length, n, t, event, parts, baseEvent, name;
        this._cache && this._cache.delete(ALL_LISTENERS);
        if (!evtStr1) for(t in this.eventListeners)this._off(t);
        for(n = 0; n < len; n++){
            event = events[n];
            parts = event.split('.');
            baseEvent = parts[0];
            name = parts[1];
            if (baseEvent) {
                if (this.eventListeners[baseEvent]) this._off(baseEvent, name, callback);
            } else for(t in this.eventListeners)this._off(t, name, callback);
        }
        return this;
    }
    dispatchEvent(evt1) {
        var e = {
            target: this,
            type: evt1.type,
            evt: evt1
        };
        this.fire(evt1.type, e);
        return this;
    }
    addEventListener(type, handler1) {
        this.on(type, function(evt) {
            handler1.call(this, evt.evt);
        });
        return this;
    }
    removeEventListener(type1) {
        this.off(type1);
        return this;
    }
    _delegate(event, selector, handler2) {
        var stopNode = this;
        this.on(event, function(evt) {
            var targets = evt.target.findAncestors(selector, true, stopNode);
            for(var i = 0; i < targets.length; i++){
                evt = _utilJs.Util.cloneObject(evt);
                evt.currentTarget = targets[i];
                handler2.call(targets[i], evt);
            }
        });
    }
    remove() {
        if (this.isDragging()) this.stopDrag();
        _dragAndDropJs.DD._dragElements.delete(this._id);
        this._remove();
        return this;
    }
    _clearCaches() {
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this._clearSelfAndDescendantCache(STAGE);
        this._clearSelfAndDescendantCache(VISIBLE);
        this._clearSelfAndDescendantCache(LISTENING);
    }
    _remove() {
        this._clearCaches();
        var parent = this.getParent();
        if (parent && parent.children) {
            parent.children.splice(this.index, 1);
            parent._setChildrenIndices();
            this.parent = null;
        }
    }
    destroy() {
        this.remove();
        return this;
    }
    getAttr(attr3) {
        var method = 'get' + _utilJs.Util._capitalize(attr3);
        if (_utilJs.Util._isFunction(this[method])) return this[method]();
        return this.attrs[attr3];
    }
    getAncestors() {
        var parent = this.getParent(), ancestors = [];
        while(parent){
            ancestors.push(parent);
            parent = parent.getParent();
        }
        return ancestors;
    }
    getAttrs() {
        return this.attrs || {
        };
    }
    setAttrs(config3) {
        this._batchTransformChanges(()=>{
            var key, method;
            if (!config3) return this;
            for(key in config3){
                if (key === CHILDREN) continue;
                method = SET + _utilJs.Util._capitalize(key);
                if (_utilJs.Util._isFunction(this[method])) this[method](config3[key]);
                else this._setAttr(key, config3[key]);
            }
        });
        return this;
    }
    isListening() {
        return this._getCache(LISTENING, this._isListening);
    }
    _isListening(relativeTo) {
        const listening = this.listening();
        if (!listening) return false;
        const parent = this.getParent();
        if (parent && parent !== relativeTo && this !== relativeTo) return parent._isListening(relativeTo);
        else return true;
    }
    isVisible() {
        return this._getCache(VISIBLE, this._isVisible);
    }
    _isVisible(relativeTo1) {
        const visible = this.visible();
        if (!visible) return false;
        const parent = this.getParent();
        if (parent && parent !== relativeTo1 && this !== relativeTo1) return parent._isVisible(relativeTo1);
        else return true;
    }
    shouldDrawHit(top1, skipDragCheck = false) {
        if (top1) return this._isVisible(top1) && this._isListening(top1);
        var layer = this.getLayer();
        var layerUnderDrag = false;
        _dragAndDropJs.DD._dragElements.forEach((elem)=>{
            if (elem.dragStatus !== 'dragging') return;
            else if (elem.node.nodeType === 'Stage') layerUnderDrag = true;
            else if (elem.node.getLayer() === layer) layerUnderDrag = true;
        });
        var dragSkip = !skipDragCheck && !_globalJs.Konva.hitOnDragEnabled && layerUnderDrag;
        return this.isListening() && this.isVisible() && !dragSkip;
    }
    show() {
        this.visible(true);
        return this;
    }
    hide() {
        this.visible(false);
        return this;
    }
    getZIndex() {
        return this.index || 0;
    }
    getAbsoluteZIndex() {
        var depth = this.getDepth(), that = this, index = 0, nodes, len, n, child;
        function addChildren(children) {
            nodes = [];
            len = children.length;
            for(n = 0; n < len; n++){
                child = children[n];
                index++;
                if (child.nodeType !== SHAPE) nodes = nodes.concat(child.getChildren().slice());
                if (child._id === that._id) n = len;
            }
            if (nodes.length > 0 && nodes[0].getDepth() <= depth) addChildren(nodes);
        }
        if (that.nodeType !== UPPER_STAGE) addChildren(that.getStage().getChildren());
        return index;
    }
    getDepth() {
        var depth = 0, parent = this.parent;
        while(parent){
            depth++;
            parent = parent.parent;
        }
        return depth;
    }
    _batchTransformChanges(func) {
        this._batchingTransformChange = true;
        func();
        this._batchingTransformChange = false;
        if (this._needClearTransformCache) {
            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        }
        this._needClearTransformCache = false;
    }
    setPosition(pos) {
        this._batchTransformChanges(()=>{
            this.x(pos.x);
            this.y(pos.y);
        });
        return this;
    }
    getPosition() {
        return {
            x: this.x(),
            y: this.y()
        };
    }
    getRelativePointerPosition() {
        if (!this.getStage()) return null;
        var pos = this.getStage().getPointerPosition();
        if (!pos) return null;
        var transform = this.getAbsoluteTransform().copy();
        transform.invert();
        return transform.point(pos);
    }
    getAbsolutePosition(top2) {
        let haveCachedParent = false;
        let parent = this.parent;
        while(parent){
            if (parent.isCached()) {
                haveCachedParent = true;
                break;
            }
            parent = parent.parent;
        }
        if (haveCachedParent && !top2) top2 = true;
        var absoluteMatrix = this.getAbsoluteTransform(top2).getMatrix(), absoluteTransform = new _utilJs.Transform(), offset = this.offset();
        absoluteTransform.m = absoluteMatrix.slice();
        absoluteTransform.translate(offset.x, offset.y);
        return absoluteTransform.getTranslation();
    }
    setAbsolutePosition(pos1) {
        var origTrans = this._clearTransform();
        this.attrs.x = origTrans.x;
        this.attrs.y = origTrans.y;
        delete origTrans.x;
        delete origTrans.y;
        this._clearCache(TRANSFORM);
        var it = this._getAbsoluteTransform().copy();
        it.invert();
        it.translate(pos1.x, pos1.y);
        pos1 = {
            x: this.attrs.x + it.getTranslation().x,
            y: this.attrs.y + it.getTranslation().y
        };
        this._setTransform(origTrans);
        this.setPosition({
            x: pos1.x,
            y: pos1.y
        });
        this._clearCache(TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        return this;
    }
    _setTransform(trans) {
        var key;
        for(key in trans)this.attrs[key] = trans[key];
    }
    _clearTransform() {
        var trans = {
            x: this.x(),
            y: this.y(),
            rotation: this.rotation(),
            scaleX: this.scaleX(),
            scaleY: this.scaleY(),
            offsetX: this.offsetX(),
            offsetY: this.offsetY(),
            skewX: this.skewX(),
            skewY: this.skewY()
        };
        this.attrs.x = 0;
        this.attrs.y = 0;
        this.attrs.rotation = 0;
        this.attrs.scaleX = 1;
        this.attrs.scaleY = 1;
        this.attrs.offsetX = 0;
        this.attrs.offsetY = 0;
        this.attrs.skewX = 0;
        this.attrs.skewY = 0;
        return trans;
    }
    move(change) {
        var changeX = change.x, changeY = change.y, x = this.x(), y = this.y();
        if (changeX !== undefined) x += changeX;
        if (changeY !== undefined) y += changeY;
        this.setPosition({
            x: x,
            y: y
        });
        return this;
    }
    _eachAncestorReverse(func1, top3) {
        var family = [], parent = this.getParent(), len, n;
        if (top3 && top3._id === this._id) return;
        family.unshift(this);
        while(parent && (!top3 || parent._id !== top3._id)){
            family.unshift(parent);
            parent = parent.parent;
        }
        len = family.length;
        for(n = 0; n < len; n++)func1(family[n]);
    }
    rotate(theta) {
        this.rotation(this.rotation() + theta);
        return this;
    }
    moveToTop() {
        if (!this.parent) {
            _utilJs.Util.warn('Node has no parent. moveToTop function is ignored.');
            return false;
        }
        var index = this.index;
        this.parent.children.splice(index, 1);
        this.parent.children.push(this);
        this.parent._setChildrenIndices();
        return true;
    }
    moveUp() {
        if (!this.parent) {
            _utilJs.Util.warn('Node has no parent. moveUp function is ignored.');
            return false;
        }
        var index = this.index, len = this.parent.getChildren().length;
        if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index + 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveDown() {
        if (!this.parent) {
            _utilJs.Util.warn('Node has no parent. moveDown function is ignored.');
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index - 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveToBottom() {
        if (!this.parent) {
            _utilJs.Util.warn('Node has no parent. moveToBottom function is ignored.');
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.unshift(this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    setZIndex(zIndex) {
        if (!this.parent) {
            _utilJs.Util.warn('Node has no parent. zIndex parameter is ignored.');
            return this;
        }
        if (zIndex < 0 || zIndex >= this.parent.children.length) _utilJs.Util.warn('Unexpected value ' + zIndex + ' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' + (this.parent.children.length - 1) + '.');
        var index = this.index;
        this.parent.children.splice(index, 1);
        this.parent.children.splice(zIndex, 0, this);
        this.parent._setChildrenIndices();
        return this;
    }
    getAbsoluteOpacity() {
        return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
        var absOpacity = this.opacity();
        var parent = this.getParent();
        if (parent && !parent._isUnderCache) absOpacity *= parent.getAbsoluteOpacity();
        return absOpacity;
    }
    moveTo(newContainer) {
        if (this.getParent() !== newContainer) {
            this._remove();
            newContainer.add(this);
        }
        return this;
    }
    toObject() {
        var obj = {
        }, attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
        obj.attrs = {
        };
        for(key in attrs){
            val = attrs[key];
            nonPlainObject = _utilJs.Util.isObject(val) && !_utilJs.Util._isPlainObject(val) && !_utilJs.Util._isArray(val);
            if (nonPlainObject) continue;
            getter = typeof this[key] === 'function' && this[key];
            delete attrs[key];
            defaultValue = getter ? getter.call(this) : null;
            attrs[key] = val;
            if (defaultValue !== val) obj.attrs[key] = val;
        }
        obj.className = this.getClassName();
        return _utilJs.Util._prepareToStringify(obj);
    }
    toJSON() {
        return JSON.stringify(this.toObject());
    }
    getParent() {
        return this.parent;
    }
    findAncestors(selector1, includeSelf, stopNode) {
        var res = [];
        if (includeSelf && this._isMatch(selector1)) res.push(this);
        var ancestor = this.parent;
        while(ancestor){
            if (ancestor === stopNode) return res;
            if (ancestor._isMatch(selector1)) res.push(ancestor);
            ancestor = ancestor.parent;
        }
        return res;
    }
    isAncestorOf(node1) {
        return false;
    }
    findAncestor(selector2, includeSelf1, stopNode1) {
        return this.findAncestors(selector2, includeSelf1, stopNode1)[0];
    }
    _isMatch(selector3) {
        if (!selector3) return false;
        if (typeof selector3 === 'function') return selector3(this);
        var selectorArr = selector3.replace(/ /g, '').split(','), len = selectorArr.length, n, sel;
        for(n = 0; n < len; n++){
            sel = selectorArr[n];
            if (!_utilJs.Util.isValidSelector(sel)) {
                _utilJs.Util.warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
                _utilJs.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
                _utilJs.Util.warn('Konva is awesome, right?');
            }
            if (sel.charAt(0) === '#') {
                if (this.id() === sel.slice(1)) return true;
            } else if (sel.charAt(0) === '.') {
                if (this.hasName(sel.slice(1))) return true;
            } else if (this.className === sel || this.nodeType === sel) return true;
        }
        return false;
    }
    getLayer() {
        var parent = this.getParent();
        return parent ? parent.getLayer() : null;
    }
    getStage() {
        return this._getCache(STAGE, this._getStage);
    }
    _getStage() {
        var parent = this.getParent();
        if (parent) return parent.getStage();
        else return undefined;
    }
    fire(eventType, evt8 = {
    }, bubble) {
        evt8.target = evt8.target || this;
        if (bubble) this._fireAndBubble(eventType, evt8);
        else this._fire(eventType, evt8);
        return this;
    }
    getAbsoluteTransform(top4) {
        if (top4) return this._getAbsoluteTransform(top4);
        else return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(top5) {
        var at;
        if (top5) {
            at = new _utilJs.Transform();
            this._eachAncestorReverse(function(node) {
                var transformsEnabled = node.transformsEnabled();
                if (transformsEnabled === 'all') at.multiply(node.getTransform());
                else if (transformsEnabled === 'position') at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
            }, top5);
            return at;
        } else {
            at = this._cache.get(ABSOLUTE_TRANSFORM) || new _utilJs.Transform();
            if (this.parent) this.parent.getAbsoluteTransform().copyInto(at);
            else at.reset();
            var transformsEnabled1 = this.transformsEnabled();
            if (transformsEnabled1 === 'all') at.multiply(this.getTransform());
            else if (transformsEnabled1 === 'position') {
                const x = this.attrs.x || 0;
                const y = this.attrs.y || 0;
                const offsetX = this.attrs.offsetX || 0;
                const offsetY = this.attrs.offsetY || 0;
                at.translate(x - offsetX, y - offsetY);
            }
            at.dirty = false;
            return at;
        }
    }
    getAbsoluteScale(top6) {
        var parent = this;
        while(parent){
            if (parent._isUnderCache) top6 = parent;
            parent = parent.getParent();
        }
        const transform = this.getAbsoluteTransform(top6);
        const attrs = transform.decompose();
        return {
            x: attrs.scaleX,
            y: attrs.scaleY
        };
    }
    getAbsoluteRotation() {
        return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
        return this._getCache(TRANSFORM, this._getTransform);
    }
    _getTransform() {
        var _a, _b;
        var m = this._cache.get(TRANSFORM) || new _utilJs.Transform();
        m.reset();
        var x = this.x(), y = this.y(), rotation = _globalJs.Konva.getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== void 0 ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== void 0 ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
        if (x !== 0 || y !== 0) m.translate(x, y);
        if (rotation !== 0) m.rotate(rotation);
        if (skewX !== 0 || skewY !== 0) m.skew(skewX, skewY);
        if (scaleX !== 1 || scaleY !== 1) m.scale(scaleX, scaleY);
        if (offsetX !== 0 || offsetY !== 0) m.translate(-1 * offsetX, -1 * offsetY);
        m.dirty = false;
        return m;
    }
    clone(obj) {
        var attrs = _utilJs.Util.cloneObject(this.attrs), key, allListeners, len, n, listener;
        for(key in obj)attrs[key] = obj[key];
        var node = new this.constructor(attrs);
        for(key in this.eventListeners){
            allListeners = this.eventListeners[key];
            len = allListeners.length;
            for(n = 0; n < len; n++){
                listener = allListeners[n];
                if (listener.name.indexOf(KONVA) < 0) {
                    if (!node.eventListeners[key]) node.eventListeners[key] = [];
                    node.eventListeners[key].push(listener);
                }
            }
        }
        return node;
    }
    _toKonvaCanvas(config4) {
        config4 = config4 || {
        };
        var box = this.getClientRect();
        var stage = this.getStage(), x = config4.x !== undefined ? config4.x : box.x, y = config4.y !== undefined ? config4.y : box.y, pixelRatio = config4.pixelRatio || 1, canvas = new _canvasJs.SceneCanvas({
            width: config4.width || box.width || (stage ? stage.width() : 0),
            height: config4.height || box.height || (stage ? stage.height() : 0),
            pixelRatio: pixelRatio
        }), context = canvas.getContext();
        context.save();
        if (x || y) context.translate(-1 * x, -1 * y);
        this.drawScene(canvas);
        context.restore();
        return canvas;
    }
    toCanvas(config5) {
        return this._toKonvaCanvas(config5)._canvas;
    }
    toDataURL(config6) {
        config6 = config6 || {
        };
        var mimeType = config6.mimeType || null, quality = config6.quality || null;
        var url = this._toKonvaCanvas(config6).toDataURL(mimeType, quality);
        if (config6.callback) config6.callback(url);
        return url;
    }
    toImage(config7) {
        if (!config7 || !config7.callback) throw 'callback required for toImage method config argument';
        var callback = config7.callback;
        delete config7.callback;
        _utilJs.Util._urlToImage(this.toDataURL(config7), function(img) {
            callback(img);
        });
    }
    setSize(size) {
        this.width(size.width);
        this.height(size.height);
        return this;
    }
    getSize() {
        return {
            width: this.width(),
            height: this.height()
        };
    }
    getClassName() {
        return this.className || this.nodeType;
    }
    getType() {
        return this.nodeType;
    }
    getDragDistance() {
        if (this.attrs.dragDistance !== undefined) return this.attrs.dragDistance;
        else if (this.parent) return this.parent.getDragDistance();
        else return _globalJs.Konva.dragDistance;
    }
    _off(type2, name1, callback1) {
        var evtListeners = this.eventListeners[type2], i, evtName, handler;
        for(i = 0; i < evtListeners.length; i++){
            evtName = evtListeners[i].name;
            handler = evtListeners[i].handler;
            if ((evtName !== 'konva' || name1 === 'konva') && (!name1 || evtName === name1) && (!callback1 || callback1 === handler)) {
                evtListeners.splice(i, 1);
                if (evtListeners.length === 0) {
                    delete this.eventListeners[type2];
                    break;
                }
                i--;
            }
        }
    }
    _fireChangeEvent(attr4, oldVal, newVal) {
        this._fire(attr4 + CHANGE, {
            oldVal: oldVal,
            newVal: newVal
        });
    }
    addName(name2) {
        if (!this.hasName(name2)) {
            var oldName = this.name();
            var newName = oldName ? oldName + ' ' + name2 : name2;
            this.name(newName);
        }
        return this;
    }
    hasName(name3) {
        if (!name3) return false;
        const fullName = this.name();
        if (!fullName) return false;
        var names = (fullName || '').split(/\s/g);
        return names.indexOf(name3) !== -1;
    }
    removeName(name4) {
        var names = (this.name() || '').split(/\s/g);
        var index = names.indexOf(name4);
        if (index !== -1) {
            names.splice(index, 1);
            this.name(names.join(' '));
        }
        return this;
    }
    setAttr(attr5, val3) {
        var func = this[SET + _utilJs.Util._capitalize(attr5)];
        if (_utilJs.Util._isFunction(func)) func.call(this, val3);
        else this._setAttr(attr5, val3);
        return this;
    }
    _requestDraw() {
        if (_globalJs.Konva.autoDrawEnabled) {
            const drawNode = this.getLayer() || this.getStage();
            drawNode === null || drawNode === void 0 || drawNode.batchDraw();
        }
    }
    _setAttr(key, val1) {
        var oldVal = this.attrs[key];
        if (oldVal === val1 && !_utilJs.Util.isObject(val1)) return;
        if (val1 === undefined || val1 === null) delete this.attrs[key];
        else this.attrs[key] = val1;
        if (this._shouldFireChangeEvents) this._fireChangeEvent(key, oldVal, val1);
        this._requestDraw();
    }
    _setComponentAttr(key1, component, val2) {
        var oldVal;
        if (val2 !== undefined) {
            oldVal = this.attrs[key1];
            if (!oldVal) this.attrs[key1] = this.getAttr(key1);
            this.attrs[key1][component] = val2;
            this._fireChangeEvent(key1, oldVal, val2);
        }
    }
    _fireAndBubble(eventType1, evt2, compareShape) {
        if (evt2 && this.nodeType === SHAPE) evt2.target = this;
        var shouldStop = (eventType1 === MOUSEENTER || eventType1 === MOUSELEAVE) && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === 'Stage' && !compareShape);
        if (!shouldStop) {
            this._fire(eventType1, evt2);
            var stopBubble = (eventType1 === MOUSEENTER || eventType1 === MOUSELEAVE) && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
            if ((evt2 && !evt2.cancelBubble || !evt2) && this.parent && this.parent.isListening() && !stopBubble) {
                if (compareShape && compareShape.parent) this._fireAndBubble.call(this.parent, eventType1, evt2, compareShape);
                else this._fireAndBubble.call(this.parent, eventType1, evt2);
            }
        }
    }
    _getProtoListeners(eventType2) {
        let listeners = this._cache.get(ALL_LISTENERS);
        if (!listeners) {
            listeners = {
            };
            let obj = Object.getPrototypeOf(this);
            while(obj){
                if (!obj.eventListeners) {
                    obj = Object.getPrototypeOf(obj);
                    continue;
                }
                for(var event in obj.eventListeners){
                    const newEvents = obj.eventListeners[event];
                    const oldEvents = listeners[event] || [];
                    listeners[event] = newEvents.concat(oldEvents);
                }
                obj = Object.getPrototypeOf(obj);
            }
            this._cache.set(ALL_LISTENERS, listeners);
        }
        return listeners[eventType2];
    }
    _fire(eventType3, evt3) {
        evt3 = evt3 || {
        };
        evt3.currentTarget = this;
        evt3.type = eventType3;
        const topListeners = this._getProtoListeners(eventType3);
        if (topListeners) for(var i = 0; i < topListeners.length; i++)topListeners[i].handler.call(this, evt3);
        const selfListeners = this.eventListeners[eventType3];
        if (selfListeners) for(var i = 0; i < selfListeners.length; i++)selfListeners[i].handler.call(this, evt3);
    }
    draw() {
        this.drawScene();
        this.drawHit();
        return this;
    }
    _createDragElement(evt4) {
        var pointerId = evt4 ? evt4.pointerId : undefined;
        var stage = this.getStage();
        var ap = this.getAbsolutePosition();
        var pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
        _dragAndDropJs.DD._dragElements.set(this._id, {
            node: this,
            startPointerPos: pos,
            offset: {
                x: pos.x - ap.x,
                y: pos.y - ap.y
            },
            dragStatus: 'ready',
            pointerId
        });
    }
    startDrag(evt5, bubbleEvent = true) {
        if (!_dragAndDropJs.DD._dragElements.has(this._id)) this._createDragElement(evt5);
        const elem = _dragAndDropJs.DD._dragElements.get(this._id);
        elem.dragStatus = 'dragging';
        this.fire('dragstart', {
            type: 'dragstart',
            target: this,
            evt: evt5 && evt5.evt
        }, bubbleEvent);
    }
    _setDragPosition(evt6, elem1) {
        const pos = this.getStage()._getPointerById(elem1.pointerId);
        if (!pos) return;
        var newNodePos = {
            x: pos.x - elem1.offset.x,
            y: pos.y - elem1.offset.y
        };
        var dbf = this.dragBoundFunc();
        if (dbf !== undefined) {
            const bounded = dbf.call(this, newNodePos, evt6);
            if (!bounded) _utilJs.Util.warn('dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.');
            else newNodePos = bounded;
        }
        if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
            this.setAbsolutePosition(newNodePos);
            this._requestDraw();
        }
        this._lastPos = newNodePos;
    }
    stopDrag(evt7) {
        const elem = _dragAndDropJs.DD._dragElements.get(this._id);
        if (elem) elem.dragStatus = 'stopped';
        _dragAndDropJs.DD._endDragBefore(evt7);
        _dragAndDropJs.DD._endDragAfter(evt7);
    }
    setDraggable(draggable) {
        this._setAttr('draggable', draggable);
        this._dragChange();
    }
    isDragging() {
        const elem = _dragAndDropJs.DD._dragElements.get(this._id);
        return elem ? elem.dragStatus === 'dragging' : false;
    }
    _listenDrag() {
        this._dragCleanup();
        this.on('mousedown.konva touchstart.konva', function(evt) {
            var shouldCheckButton = evt.evt['button'] !== undefined;
            var canDrag = !shouldCheckButton || _globalJs.Konva.dragButtons.indexOf(evt.evt['button']) >= 0;
            if (!canDrag) return;
            if (this.isDragging()) return;
            var hasDraggingChild = false;
            _dragAndDropJs.DD._dragElements.forEach((elem)=>{
                if (this.isAncestorOf(elem.node)) hasDraggingChild = true;
            });
            if (!hasDraggingChild) this._createDragElement(evt);
        });
    }
    _dragChange() {
        if (this.attrs.draggable) this._listenDrag();
        else {
            this._dragCleanup();
            var stage = this.getStage();
            if (!stage) return;
            const dragElement = _dragAndDropJs.DD._dragElements.get(this._id);
            const isDragging = dragElement && dragElement.dragStatus === 'dragging';
            const isReady = dragElement && dragElement.dragStatus === 'ready';
            if (isDragging) this.stopDrag();
            else if (isReady) _dragAndDropJs.DD._dragElements.delete(this._id);
        }
    }
    _dragCleanup() {
        this.off('mousedown.konva');
        this.off('touchstart.konva');
    }
    isClientRectOnScreen(margin = {
        x: 0,
        y: 0
    }) {
        const stage = this.getStage();
        if (!stage) return false;
        const screenRect = {
            x: -margin.x,
            y: -margin.y,
            width: stage.width() + margin.x,
            height: stage.height() + margin.y
        };
        return _utilJs.Util.haveIntersection(screenRect, this.getClientRect());
    }
    static create(data, container) {
        if (_utilJs.Util._isString(data)) data = JSON.parse(data);
        return this._createNode(data, container);
    }
    static _createNode(obj1, container1) {
        var className = Node.prototype.getClassName.call(obj1), children = obj1.children, no, len, n;
        if (container1) obj1.attrs.container = container1;
        if (!_globalJs.Konva[className]) {
            _utilJs.Util.warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
            className = 'Shape';
        }
        const Class = _globalJs.Konva[className];
        no = new Class(obj1.attrs);
        if (children) {
            len = children.length;
            for(n = 0; n < len; n++)no.add(Node._createNode(children[n]));
        }
        return no;
    }
}
Node.prototype.nodeType = 'Node';
Node.prototype._attrsAffectingSize = [];
Node.prototype.eventListeners = {
};
Node.prototype.on.call(Node.prototype, TRANSFORM_CHANGE_STR, function() {
    if (this._batchingTransformChange) {
        this._needClearTransformCache = true;
        return;
    }
    this._clearCache(TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
});
Node.prototype.on.call(Node.prototype, 'visibleChange.konva', function() {
    this._clearSelfAndDescendantCache(VISIBLE);
});
Node.prototype.on.call(Node.prototype, 'listeningChange.konva', function() {
    this._clearSelfAndDescendantCache(LISTENING);
});
Node.prototype.on.call(Node.prototype, 'opacityChange.konva', function() {
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
});
const addGetterSetter = _factoryJs.Factory.addGetterSetter;
addGetterSetter(Node, 'zIndex');
addGetterSetter(Node, 'absolutePosition');
addGetterSetter(Node, 'position');
addGetterSetter(Node, 'x', 0, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'y', 0, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'globalCompositeOperation', 'source-over', _validatorsJs.getStringValidator());
addGetterSetter(Node, 'opacity', 1, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'name', '', _validatorsJs.getStringValidator());
addGetterSetter(Node, 'id', '', _validatorsJs.getStringValidator());
addGetterSetter(Node, 'rotation', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addComponentsGetterSetter(Node, 'scale', [
    'x',
    'y'
]);
addGetterSetter(Node, 'scaleX', 1, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'scaleY', 1, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addComponentsGetterSetter(Node, 'skew', [
    'x',
    'y'
]);
addGetterSetter(Node, 'skewX', 0, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'skewY', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addComponentsGetterSetter(Node, 'offset', [
    'x',
    'y'
]);
addGetterSetter(Node, 'offsetX', 0, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'offsetY', 0, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'dragDistance', null, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'width', 0, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'height', 0, _validatorsJs.getNumberValidator());
addGetterSetter(Node, 'listening', true, _validatorsJs.getBooleanValidator());
addGetterSetter(Node, 'preventDefault', true, _validatorsJs.getBooleanValidator());
addGetterSetter(Node, 'filters', null, function(val) {
    this._filterUpToDate = false;
    return val;
});
addGetterSetter(Node, 'visible', true, _validatorsJs.getBooleanValidator());
addGetterSetter(Node, 'transformsEnabled', 'all', _validatorsJs.getStringValidator());
addGetterSetter(Node, 'size');
addGetterSetter(Node, 'dragBoundFunc');
addGetterSetter(Node, 'draggable', false, _validatorsJs.getBooleanValidator());
_factoryJs.Factory.backCompat(Node, {
    rotateDeg: 'rotate',
    setRotationDeg: 'setRotation',
    getRotationDeg: 'getRotation'
});

},{"./Util.js":"98XwR","./Factory.js":"ifTus","./Canvas.js":"gdTkf","./Global.js":"1LGjN","./DragAndDrop.js":"fIsEZ","./Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ifTus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Factory", ()=>Factory
);
var _utilJs = require("./Util.js");
var _validatorsJs = require("./Validators.js");
var GET = 'get', SET = 'set';
const Factory = {
    addGetterSetter (constructor, attr, def, validator, after) {
        Factory.addGetter(constructor, attr, def);
        Factory.addSetter(constructor, attr, validator, after);
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addGetter (constructor, attr, def) {
        var method = GET + _utilJs.Util._capitalize(attr);
        constructor.prototype[method] = constructor.prototype[method] || function() {
            var val = this.attrs[attr];
            return val === undefined ? def : val;
        };
    },
    addSetter (constructor, attr, validator, after) {
        var method = SET + _utilJs.Util._capitalize(attr);
        if (!constructor.prototype[method]) Factory.overWriteSetter(constructor, attr, validator, after);
    },
    overWriteSetter (constructor, attr, validator, after) {
        var method = SET + _utilJs.Util._capitalize(attr);
        constructor.prototype[method] = function(val) {
            if (validator && val !== undefined && val !== null) val = validator.call(this, val, attr);
            this._setAttr(attr, val);
            if (after) after.call(this);
            return this;
        };
    },
    addComponentsGetterSetter (constructor, attr, components, validator, after) {
        var len = components.length, capitalize = _utilJs.Util._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr), n, component;
        constructor.prototype[getter] = function() {
            var ret = {
            };
            for(n = 0; n < len; n++){
                component = components[n];
                ret[component] = this.getAttr(attr + capitalize(component));
            }
            return ret;
        };
        var basicValidator = _validatorsJs.getComponentValidator(components);
        constructor.prototype[setter] = function(val) {
            var oldVal = this.attrs[attr], key;
            if (validator) val = validator.call(this, val);
            if (basicValidator) basicValidator.call(this, val, attr);
            for(key in val){
                if (!val.hasOwnProperty(key)) continue;
                this._setAttr(attr + capitalize(key), val[key]);
            }
            this._fireChangeEvent(attr, oldVal, val);
            if (after) after.call(this);
            return this;
        };
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addOverloadedGetterSetter (constructor, attr) {
        var capitalizedAttr = _utilJs.Util._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
        constructor.prototype[attr] = function() {
            if (arguments.length) {
                this[setter](arguments[0]);
                return this;
            }
            return this[getter]();
        };
    },
    addDeprecatedGetterSetter (constructor, attr, def, validator) {
        _utilJs.Util.error('Adding deprecated ' + attr);
        var method = GET + _utilJs.Util._capitalize(attr);
        var message = attr + ' property is deprecated and will be removed soon. Look at Konva change log for more information.';
        constructor.prototype[method] = function() {
            _utilJs.Util.error(message);
            var val = this.attrs[attr];
            return val === undefined ? def : val;
        };
        Factory.addSetter(constructor, attr, validator, function() {
            _utilJs.Util.error(message);
        });
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    backCompat (constructor, methods) {
        _utilJs.Util.each(methods, function(oldMethodName, newMethodName) {
            var method = constructor.prototype[newMethodName];
            var oldGetter = GET + _utilJs.Util._capitalize(oldMethodName);
            var oldSetter = SET + _utilJs.Util._capitalize(oldMethodName);
            function deprecated() {
                method.apply(this, arguments);
                _utilJs.Util.error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
            }
            constructor.prototype[oldMethodName] = deprecated;
            constructor.prototype[oldGetter] = deprecated;
            constructor.prototype[oldSetter] = deprecated;
        });
    },
    afterSetFilter () {
        this._filterUpToDate = false;
    }
};

},{"./Util.js":"98XwR","./Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5lPi2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RGBComponent", ()=>RGBComponent
);
parcelHelpers.export(exports, "alphaComponent", ()=>alphaComponent
);
parcelHelpers.export(exports, "getNumberValidator", ()=>getNumberValidator
);
parcelHelpers.export(exports, "getNumberOrArrayOfNumbersValidator", ()=>getNumberOrArrayOfNumbersValidator
);
parcelHelpers.export(exports, "getNumberOrAutoValidator", ()=>getNumberOrAutoValidator
);
parcelHelpers.export(exports, "getStringValidator", ()=>getStringValidator
);
parcelHelpers.export(exports, "getStringOrGradientValidator", ()=>getStringOrGradientValidator
);
parcelHelpers.export(exports, "getFunctionValidator", ()=>getFunctionValidator
);
parcelHelpers.export(exports, "getNumberArrayValidator", ()=>getNumberArrayValidator
);
parcelHelpers.export(exports, "getBooleanValidator", ()=>getBooleanValidator
);
parcelHelpers.export(exports, "getComponentValidator", ()=>getComponentValidator
);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
function _formatValue(val) {
    if (_utilJs.Util._isString(val)) return '"' + val + '"';
    if (Object.prototype.toString.call(val) === '[object Number]') return val;
    if (_utilJs.Util._isBoolean(val)) return val;
    return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
    if (val > 255) return 255;
    else if (val < 0) return 0;
    return Math.round(val);
}
function alphaComponent(val) {
    if (val > 1) return 1;
    else if (val < 0.0001) return 0.0001;
    return val;
}
function getNumberValidator() {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        if (!_utilJs.Util._isNumber(val)) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
        return val;
    };
}
function getNumberOrArrayOfNumbersValidator(noOfElements) {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        let isNumber = _utilJs.Util._isNumber(val);
        let isValidArray = _utilJs.Util._isArray(val) && val.length == noOfElements;
        if (!isNumber && !isValidArray) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or Array<number>(' + noOfElements + ')');
        return val;
    };
}
function getNumberOrAutoValidator() {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        var isNumber = _utilJs.Util._isNumber(val);
        var isAuto = val === 'auto';
        if (!(isNumber || isAuto)) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
        return val;
    };
}
function getStringValidator() {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        if (!_utilJs.Util._isString(val)) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
        return val;
    };
}
function getStringOrGradientValidator() {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        const isString = _utilJs.Util._isString(val);
        const isGradient = Object.prototype.toString.call(val) === '[object CanvasGradient]' || val && val.addColorStop;
        if (!(isString || isGradient)) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string or a native gradient.');
        return val;
    };
}
function getFunctionValidator() {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        if (!_utilJs.Util._isFunction(val)) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a function.');
        return val;
    };
}
function getNumberArrayValidator() {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        if (!_utilJs.Util._isArray(val)) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
        else val.forEach(function(item) {
            if (!_utilJs.Util._isNumber(item)) _utilJs.Util.warn('"' + attr + '" attribute has non numeric element ' + item + '. Make sure that all elements are numbers.');
        });
        return val;
    };
}
function getBooleanValidator() {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        var isBool = val === true || val === false;
        if (!isBool) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
        return val;
    };
}
function getComponentValidator(components) {
    if (_globalJs.Konva.isUnminified) return function(val, attr) {
        if (!_utilJs.Util.isObject(val)) _utilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
        return val;
    };
}

},{"./Global.js":"1LGjN","./Util.js":"98XwR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gdTkf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Canvas", ()=>Canvas
);
parcelHelpers.export(exports, "SceneCanvas", ()=>SceneCanvas
);
parcelHelpers.export(exports, "HitCanvas", ()=>HitCanvas
);
var _utilJs = require("./Util.js");
var _contextJs = require("./Context.js");
var _globalJs = require("./Global.js");
var _factoryJs = require("./Factory.js");
var _validatorsJs = require("./Validators.js");
var _pixelRatio;
function getDevicePixelRatio() {
    if (_pixelRatio) return _pixelRatio;
    var canvas = _utilJs.Util.createCanvasElement();
    var context = canvas.getContext('2d');
    _pixelRatio = (function() {
        var devicePixelRatio = _globalJs.Konva._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
        return devicePixelRatio / backingStoreRatio;
    })();
    return _pixelRatio;
}
class Canvas {
    constructor(config){
        this.pixelRatio = 1;
        this.width = 0;
        this.height = 0;
        this.isCache = false;
        var conf = config || {
        };
        var pixelRatio = conf.pixelRatio || _globalJs.Konva.pixelRatio || getDevicePixelRatio();
        this.pixelRatio = pixelRatio;
        this._canvas = _utilJs.Util.createCanvasElement();
        this._canvas.style.padding = '0';
        this._canvas.style.margin = '0';
        this._canvas.style.border = '0';
        this._canvas.style.background = 'transparent';
        this._canvas.style.position = 'absolute';
        this._canvas.style.top = '0';
        this._canvas.style.left = '0';
    }
    getContext() {
        return this.context;
    }
    getPixelRatio() {
        return this.pixelRatio;
    }
    setPixelRatio(pixelRatio) {
        var previousRatio = this.pixelRatio;
        this.pixelRatio = pixelRatio;
        this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
    }
    setWidth(width) {
        this.width = this._canvas.width = width * this.pixelRatio;
        this._canvas.style.width = width + 'px';
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    }
    setHeight(height) {
        this.height = this._canvas.height = height * this.pixelRatio;
        this._canvas.style.height = height + 'px';
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setSize(width1, height1) {
        this.setWidth(width1 || 0);
        this.setHeight(height1 || 0);
    }
    toDataURL(mimeType, quality) {
        try {
            return this._canvas.toDataURL(mimeType, quality);
        } catch (e) {
            try {
                return this._canvas.toDataURL();
            } catch (err) {
                _utilJs.Util.error('Unable to get data URL. ' + err.message + ' For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.');
                return '';
            }
        }
    }
}
_factoryJs.Factory.addGetterSetter(Canvas, 'pixelRatio', undefined, _validatorsJs.getNumberValidator());
class SceneCanvas extends Canvas {
    constructor(config1 = {
        width: 0,
        height: 0
    }){
        super(config1);
        this.context = new _contextJs.SceneContext(this);
        this.setSize(config1.width, config1.height);
    }
}
class HitCanvas extends Canvas {
    constructor(config2 = {
        width: 0,
        height: 0
    }){
        super(config2);
        this.hitCanvas = true;
        this.context = new _contextJs.HitContext(this);
        this.setSize(config2.width, config2.height);
    }
}

},{"./Util.js":"98XwR","./Context.js":"j7jpk","./Global.js":"1LGjN","./Factory.js":"ifTus","./Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j7jpk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Context", ()=>Context
);
parcelHelpers.export(exports, "SceneContext", ()=>SceneContext
);
parcelHelpers.export(exports, "HitContext", ()=>HitContext
);
var _utilJs = require("./Util.js");
var _globalJs = require("./Global.js");
function simplifyArray(arr) {
    var retArr = [], len = arr.length, util = _utilJs.Util, n, val;
    for(n = 0; n < len; n++){
        val = arr[n];
        if (util._isNumber(val)) val = Math.round(val * 1000) / 1000;
        else if (!util._isString(val)) val = val + '';
        retArr.push(val);
    }
    return retArr;
}
var COMMA = ',', OPEN_PAREN = '(', CLOSE_PAREN = ')', OPEN_PAREN_BRACKET = '([', CLOSE_BRACKET_PAREN = '])', SEMICOLON = ';', DOUBLE_PAREN = '()', EQUALS = '=', CONTEXT_METHODS = [
    'arc',
    'arcTo',
    'beginPath',
    'bezierCurveTo',
    'clearRect',
    'clip',
    'closePath',
    'createLinearGradient',
    'createPattern',
    'createRadialGradient',
    'drawImage',
    'ellipse',
    'fill',
    'fillText',
    'getImageData',
    'createImageData',
    'lineTo',
    'moveTo',
    'putImageData',
    'quadraticCurveTo',
    'rect',
    'restore',
    'rotate',
    'save',
    'scale',
    'setLineDash',
    'setTransform',
    'stroke',
    'strokeText',
    'transform',
    'translate', 
];
var CONTEXT_PROPERTIES = [
    'fillStyle',
    'strokeStyle',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY',
    'lineCap',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'miterLimit',
    'font',
    'textAlign',
    'textBaseline',
    'globalAlpha',
    'globalCompositeOperation',
    'imageSmoothingEnabled', 
];
const traceArrMax = 100;
class Context {
    constructor(canvas){
        this.canvas = canvas;
        this._context = canvas._canvas.getContext('2d');
        if (_globalJs.Konva.enableTrace) {
            this.traceArr = [];
            this._enableTrace();
        }
    }
    fillShape(shape) {
        if (shape.fillEnabled()) this._fill(shape);
    }
    _fill(shape1) {
    }
    strokeShape(shape2) {
        if (shape2.hasStroke()) this._stroke(shape2);
    }
    _stroke(shape3) {
    }
    fillStrokeShape(shape4) {
        if (shape4.attrs.fillAfterStrokeEnabled) {
            this.strokeShape(shape4);
            this.fillShape(shape4);
        } else {
            this.fillShape(shape4);
            this.strokeShape(shape4);
        }
    }
    getTrace(relaxed, rounded) {
        var traceArr = this.traceArr, len = traceArr.length, str = '', n, trace, method, args;
        for(n = 0; n < len; n++){
            trace = traceArr[n];
            method = trace.method;
            if (method) {
                args = trace.args;
                str += method;
                if (relaxed) str += DOUBLE_PAREN;
                else if (_utilJs.Util._isArray(args[0])) str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
                else {
                    if (rounded) args = args.map((a)=>typeof a === 'number' ? Math.floor(a) : a
                    );
                    str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
                }
            } else {
                str += trace.property;
                if (!relaxed) str += EQUALS + trace.val;
            }
            str += SEMICOLON;
        }
        return str;
    }
    clearTrace() {
        this.traceArr = [];
    }
    _trace(str) {
        var traceArr = this.traceArr, len;
        traceArr.push(str);
        len = traceArr.length;
        if (len >= traceArrMax) traceArr.shift();
    }
    reset() {
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
    }
    getCanvas() {
        return this.canvas;
    }
    clear(bounds) {
        var canvas = this.getCanvas();
        if (bounds) this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
        else this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
    }
    _applyLineCap(shape5) {
        var lineCap = shape5.getLineCap();
        if (lineCap) this.setAttr('lineCap', lineCap);
    }
    _applyOpacity(shape6) {
        var absOpacity = shape6.getAbsoluteOpacity();
        if (absOpacity !== 1) this.setAttr('globalAlpha', absOpacity);
    }
    _applyLineJoin(shape7) {
        var lineJoin = shape7.attrs.lineJoin;
        if (lineJoin) this.setAttr('lineJoin', lineJoin);
    }
    setAttr(attr, val1) {
        this._context[attr] = val1;
    }
    arc(a0, a1, a2, a3, a4, a5) {
        this._context.arc(a0, a1, a2, a3, a4, a5);
    }
    arcTo(a01, a11, a21, a31, a41) {
        this._context.arcTo(a01, a11, a21, a31, a41);
    }
    beginPath() {
        this._context.beginPath();
    }
    bezierCurveTo(a02, a12, a22, a32, a42, a51) {
        this._context.bezierCurveTo(a02, a12, a22, a32, a42, a51);
    }
    clearRect(a03, a13, a23, a33) {
        this._context.clearRect(a03, a13, a23, a33);
    }
    clip() {
        this._context.clip();
    }
    closePath() {
        this._context.closePath();
    }
    createImageData(a04, a14) {
        var a = arguments;
        if (a.length === 2) return this._context.createImageData(a04, a14);
        else if (a.length === 1) return this._context.createImageData(a04);
    }
    createLinearGradient(a05, a15, a24, a34) {
        return this._context.createLinearGradient(a05, a15, a24, a34);
    }
    createPattern(a06, a16) {
        return this._context.createPattern(a06, a16);
    }
    createRadialGradient(a07, a17, a25, a35, a43, a52) {
        return this._context.createRadialGradient(a07, a17, a25, a35, a43, a52);
    }
    drawImage(a08, a18, a26, a36, a44, a53, a6, a7, a8) {
        var a = arguments, _context = this._context;
        if (a.length === 3) _context.drawImage(a08, a18, a26);
        else if (a.length === 5) _context.drawImage(a08, a18, a26, a36, a44);
        else if (a.length === 9) _context.drawImage(a08, a18, a26, a36, a44, a53, a6, a7, a8);
    }
    ellipse(a09, a19, a27, a37, a45, a54, a61, a71) {
        this._context.ellipse(a09, a19, a27, a37, a45, a54, a61, a71);
    }
    isPointInPath(x, y) {
        return this._context.isPointInPath(x, y);
    }
    fill(path2d) {
        if (path2d) this._context.fill(path2d);
        else this._context.fill();
    }
    fillRect(x1, y1, width, height) {
        this._context.fillRect(x1, y1, width, height);
    }
    strokeRect(x2, y2, width1, height1) {
        this._context.strokeRect(x2, y2, width1, height1);
    }
    fillText(text, x3, y3, maxWidth) {
        if (maxWidth) this._context.fillText(text, x3, y3, maxWidth);
        else this._context.fillText(text, x3, y3);
    }
    measureText(text1) {
        return this._context.measureText(text1);
    }
    getImageData(a010, a110, a28, a38) {
        return this._context.getImageData(a010, a110, a28, a38);
    }
    lineTo(a011, a111) {
        this._context.lineTo(a011, a111);
    }
    moveTo(a012, a112) {
        this._context.moveTo(a012, a112);
    }
    rect(a013, a113, a29, a39) {
        this._context.rect(a013, a113, a29, a39);
    }
    putImageData(a014, a114, a210) {
        this._context.putImageData(a014, a114, a210);
    }
    quadraticCurveTo(a015, a115, a211, a310) {
        this._context.quadraticCurveTo(a015, a115, a211, a310);
    }
    restore() {
        this._context.restore();
    }
    rotate(a016) {
        this._context.rotate(a016);
    }
    save() {
        this._context.save();
    }
    scale(a017, a116) {
        this._context.scale(a017, a116);
    }
    setLineDash(a018) {
        if (this._context.setLineDash) this._context.setLineDash(a018);
        else if ('mozDash' in this._context) this._context['mozDash'] = a018;
        else if ('webkitLineDash' in this._context) this._context['webkitLineDash'] = a018;
    }
    getLineDash() {
        return this._context.getLineDash();
    }
    setTransform(a019, a117, a212, a311, a46, a55) {
        this._context.setTransform(a019, a117, a212, a311, a46, a55);
    }
    stroke(path2d1) {
        if (path2d1) this._context.stroke(path2d1);
        else this._context.stroke();
    }
    strokeText(a020, a118, a213, a312) {
        this._context.strokeText(a020, a118, a213, a312);
    }
    transform(a021, a119, a214, a313, a47, a56) {
        this._context.transform(a021, a119, a214, a313, a47, a56);
    }
    translate(a022, a120) {
        this._context.translate(a022, a120);
    }
    _enableTrace() {
        var that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n, args;
        var func = function(methodName) {
            var origMethod = that[methodName], ret;
            that[methodName] = function() {
                args = simplifyArray(Array.prototype.slice.call(arguments, 0));
                ret = origMethod.apply(that, arguments);
                that._trace({
                    method: methodName,
                    args: args
                });
                return ret;
            };
        };
        for(n = 0; n < len; n++)func(CONTEXT_METHODS[n]);
        that.setAttr = function() {
            origSetter.apply(that, arguments);
            var prop = arguments[0];
            var val = arguments[1];
            if (prop === 'shadowOffsetX' || prop === 'shadowOffsetY' || prop === 'shadowBlur') val = val / this.canvas.getPixelRatio();
            that._trace({
                property: prop,
                val: val
            });
        };
    }
    _applyGlobalCompositeOperation(node) {
        const op = node.attrs.globalCompositeOperation;
        var def = !op || op === 'source-over';
        if (!def) this.setAttr('globalCompositeOperation', op);
    }
}
CONTEXT_PROPERTIES.forEach(function(prop) {
    Object.defineProperty(Context.prototype, prop, {
        get () {
            return this._context[prop];
        },
        set (val) {
            this._context[prop] = val;
        }
    });
});
class SceneContext extends Context {
    _fillColor(shape8) {
        var fill = shape8.fill();
        this.setAttr('fillStyle', fill);
        shape8._fillFunc(this);
    }
    _fillPattern(shape9) {
        this.setAttr('fillStyle', shape9._getFillPattern());
        shape9._fillFunc(this);
    }
    _fillLinearGradient(shape10) {
        var grd = shape10._getLinearGradient();
        if (grd) {
            this.setAttr('fillStyle', grd);
            shape10._fillFunc(this);
        }
    }
    _fillRadialGradient(shape11) {
        var grd = shape11._getRadialGradient();
        if (grd) {
            this.setAttr('fillStyle', grd);
            shape11._fillFunc(this);
        }
    }
    _fill(shape12) {
        var hasColor = shape12.fill(), fillPriority = shape12.getFillPriority();
        if (hasColor && fillPriority === 'color') {
            this._fillColor(shape12);
            return;
        }
        var hasPattern = shape12.getFillPatternImage();
        if (hasPattern && fillPriority === 'pattern') {
            this._fillPattern(shape12);
            return;
        }
        var hasLinearGradient = shape12.getFillLinearGradientColorStops();
        if (hasLinearGradient && fillPriority === 'linear-gradient') {
            this._fillLinearGradient(shape12);
            return;
        }
        var hasRadialGradient = shape12.getFillRadialGradientColorStops();
        if (hasRadialGradient && fillPriority === 'radial-gradient') {
            this._fillRadialGradient(shape12);
            return;
        }
        if (hasColor) this._fillColor(shape12);
        else if (hasPattern) this._fillPattern(shape12);
        else if (hasLinearGradient) this._fillLinearGradient(shape12);
        else if (hasRadialGradient) this._fillRadialGradient(shape12);
    }
    _strokeLinearGradient(shape13) {
        var start = shape13.getStrokeLinearGradientStartPoint(), end = shape13.getStrokeLinearGradientEndPoint(), colorStops = shape13.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
        if (colorStops) {
            for(var n = 0; n < colorStops.length; n += 2)grd.addColorStop(colorStops[n], colorStops[n + 1]);
            this.setAttr('strokeStyle', grd);
        }
    }
    _stroke(shape14) {
        var dash = shape14.dash(), strokeScaleEnabled = shape14.getStrokeScaleEnabled();
        if (shape14.hasStroke()) {
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape14);
            if (dash && shape14.dashEnabled()) {
                this.setLineDash(dash);
                this.setAttr('lineDashOffset', shape14.dashOffset());
            }
            this.setAttr('lineWidth', shape14.strokeWidth());
            if (!shape14.getShadowForStrokeEnabled()) this.setAttr('shadowColor', 'rgba(0,0,0,0)');
            var hasLinearGradient = shape14.getStrokeLinearGradientColorStops();
            if (hasLinearGradient) this._strokeLinearGradient(shape14);
            else this.setAttr('strokeStyle', shape14.stroke());
            shape14._strokeFunc(this);
            if (!strokeScaleEnabled) this.restore();
        }
    }
    _applyShadow(shape15) {
        var _a, _b, _c;
        var color = (_a = shape15.getShadowRGBA()) !== null && _a !== void 0 ? _a : 'black', blur = (_b = shape15.getShadowBlur()) !== null && _b !== void 0 ? _b : 5, offset = (_c = shape15.getShadowOffset()) !== null && _c !== void 0 ? _c : {
            x: 0,
            y: 0
        }, scale = shape15.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
        this.setAttr('shadowColor', color);
        this.setAttr('shadowBlur', blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
        this.setAttr('shadowOffsetX', offset.x * scaleX);
        this.setAttr('shadowOffsetY', offset.y * scaleY);
    }
}
class HitContext extends Context {
    _fill(shape16) {
        this.save();
        this.setAttr('fillStyle', shape16.colorKey);
        shape16._fillFuncHit(this);
        this.restore();
    }
    strokeShape(shape17) {
        if (shape17.hasHitStroke()) this._stroke(shape17);
    }
    _stroke(shape18) {
        if (shape18.hasHitStroke()) {
            var strokeScaleEnabled = shape18.getStrokeScaleEnabled();
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape18);
            var hitStrokeWidth = shape18.hitStrokeWidth();
            var strokeWidth = hitStrokeWidth === 'auto' ? shape18.strokeWidth() : hitStrokeWidth;
            this.setAttr('lineWidth', strokeWidth);
            this.setAttr('strokeStyle', shape18.colorKey);
            shape18._strokeFuncHit(this);
            if (!strokeScaleEnabled) this.restore();
        }
    }
}

},{"./Util.js":"98XwR","./Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fIsEZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DD", ()=>DD
);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
const DD = {
    get isDragging () {
        var flag = false;
        DD._dragElements.forEach((elem)=>{
            if (elem.dragStatus === 'dragging') flag = true;
        });
        return flag;
    },
    justDragged: false,
    get node () {
        var node;
        DD._dragElements.forEach((elem)=>{
            node = elem.node;
        });
        return node;
    },
    _dragElements: new Map(),
    _drag (evt) {
        const nodesToFireEvents = [];
        DD._dragElements.forEach((elem, key)=>{
            const { node  } = elem;
            const stage = node.getStage();
            stage.setPointersPositions(evt);
            if (elem.pointerId === undefined) elem.pointerId = _utilJs.Util._getFirstPointerId(evt);
            const pos1 = stage._changedPointerPositions.find((pos)=>pos.id === elem.pointerId
            );
            if (!pos1) return;
            if (elem.dragStatus !== 'dragging') {
                var dragDistance = node.dragDistance();
                var distance = Math.max(Math.abs(pos1.x - elem.startPointerPos.x), Math.abs(pos1.y - elem.startPointerPos.y));
                if (distance < dragDistance) return;
                node.startDrag({
                    evt
                });
                if (!node.isDragging()) return;
            }
            node._setDragPosition(evt, elem);
            nodesToFireEvents.push(node);
        });
        nodesToFireEvents.forEach((node)=>{
            node.fire('dragmove', {
                type: 'dragmove',
                target: node,
                evt: evt
            }, true);
        });
    },
    _endDragBefore (evt) {
        DD._dragElements.forEach((elem)=>{
            const { node  } = elem;
            const stage = node.getStage();
            if (evt) stage.setPointersPositions(evt);
            const pos2 = stage._changedPointerPositions.find((pos)=>pos.id === elem.pointerId
            );
            if (!pos2) return;
            if (elem.dragStatus === 'dragging' || elem.dragStatus === 'stopped') {
                DD.justDragged = true;
                _globalJs.Konva._mouseListenClick = false;
                _globalJs.Konva._touchListenClick = false;
                _globalJs.Konva._pointerListenClick = false;
                elem.dragStatus = 'stopped';
            }
            const drawNode = elem.node.getLayer() || elem.node instanceof _globalJs.Konva['Stage'] && elem.node;
            if (drawNode) drawNode.batchDraw();
        });
    },
    _endDragAfter (evt) {
        DD._dragElements.forEach((elem, key)=>{
            if (elem.dragStatus === 'stopped') elem.node.fire('dragend', {
                type: 'dragend',
                target: elem.node,
                evt: evt
            }, true);
            if (elem.dragStatus !== 'dragging') DD._dragElements.delete(key);
        });
    }
};
if (_globalJs.Konva.isBrowser) {
    window.addEventListener('mouseup', DD._endDragBefore, true);
    window.addEventListener('touchend', DD._endDragBefore, true);
    window.addEventListener('mousemove', DD._drag);
    window.addEventListener('touchmove', DD._drag);
    window.addEventListener('mouseup', DD._endDragAfter, false);
    window.addEventListener('touchend', DD._endDragAfter, false);
}

},{"./Global.js":"1LGjN","./Util.js":"98XwR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4VECF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container
);
var _factoryJs = require("./Factory.js");
var _nodeJs = require("./Node.js");
var _validatorsJs = require("./Validators.js");
class Container extends _nodeJs.Node {
    constructor(){
        super(...arguments);
        this.children = [];
    }
    getChildren(filterFunc) {
        if (!filterFunc) return this.children || [];
        const children = this.children || [];
        var results = [];
        children.forEach(function(child) {
            if (filterFunc(child)) results.push(child);
        });
        return results;
    }
    hasChildren() {
        return this.getChildren().length > 0;
    }
    removeChildren() {
        this.getChildren().forEach((child)=>{
            child.parent = null;
            child.index = 0;
            child.remove();
        });
        this.children = [];
        this._requestDraw();
        return this;
    }
    destroyChildren() {
        this.getChildren().forEach((child)=>{
            child.parent = null;
            child.index = 0;
            child.destroy();
        });
        this.children = [];
        this._requestDraw();
        return this;
    }
    add(...children) {
        if (arguments.length > 1) {
            for(var i = 0; i < arguments.length; i++)this.add(arguments[i]);
            return this;
        }
        var child = children[0];
        if (child.getParent()) {
            child.moveTo(this);
            return this;
        }
        this._validateAdd(child);
        child.index = this.getChildren().length;
        child.parent = this;
        child._clearCaches();
        this.getChildren().push(child);
        this._fire('add', {
            child: child
        });
        this._requestDraw();
        return this;
    }
    destroy() {
        if (this.hasChildren()) this.destroyChildren();
        super.destroy();
        return this;
    }
    find(selector) {
        return this._generalFind(selector, false);
    }
    findOne(selector1) {
        var result = this._generalFind(selector1, true);
        return result.length > 0 ? result[0] : undefined;
    }
    _generalFind(selector2, findOne) {
        var retArr = [];
        this._descendants((node)=>{
            const valid = node._isMatch(selector2);
            if (valid) retArr.push(node);
            if (valid && findOne) return true;
            return false;
        });
        return retArr;
    }
    _descendants(fn) {
        let shouldStop = false;
        const children = this.getChildren();
        for (const child of children){
            shouldStop = fn(child);
            if (shouldStop) return true;
            if (!child.hasChildren()) continue;
            shouldStop = child._descendants(fn);
            if (shouldStop) return true;
        }
        return false;
    }
    toObject() {
        var obj = _nodeJs.Node.prototype.toObject.call(this);
        obj.children = [];
        this.getChildren().forEach((child)=>{
            obj.children.push(child.toObject());
        });
        return obj;
    }
    isAncestorOf(node1) {
        var parent = node1.getParent();
        while(parent){
            if (parent._id === this._id) return true;
            parent = parent.getParent();
        }
        return false;
    }
    clone(obj) {
        var node = _nodeJs.Node.prototype.clone.call(this, obj);
        this.getChildren().forEach(function(no) {
            node.add(no.clone());
        });
        return node;
    }
    getAllIntersections(pos) {
        var arr = [];
        this.find('Shape').forEach(function(shape) {
            if (shape.isVisible() && shape.intersects(pos)) arr.push(shape);
        });
        return arr;
    }
    _clearSelfAndDescendantCache(attr) {
        var _a;
        super._clearSelfAndDescendantCache(attr);
        if (this.isCached()) return;
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(node) {
            node._clearSelfAndDescendantCache(attr);
        });
    }
    _setChildrenIndices() {
        var _a;
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(child, n) {
            child.index = n;
        });
        this._requestDraw();
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
        var caching = canvas && canvas.isCache;
        if (!this.isVisible() && !caching) return this;
        if (cachedSceneCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
        } else this._drawChildren('drawScene', canvas, top);
        return this;
    }
    drawHit(can1, top1) {
        if (!this.shouldDrawHit(top1)) return this;
        var layer = this.getLayer(), canvas = can1 || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (cachedHitCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top1).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
        } else this._drawChildren('drawHit', canvas, top1);
        return this;
    }
    _drawChildren(drawMethod, canvas, top2) {
        var _a;
        var context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = clipWidth && clipHeight || clipFunc;
        const selfCache = top2 === this;
        if (hasClip) {
            context.save();
            var transform = this.getAbsoluteTransform(top2);
            var m = transform.getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            context.beginPath();
            if (clipFunc) clipFunc.call(this, context, this);
            else {
                var clipX = this.clipX();
                var clipY = this.clipY();
                context.rect(clipX, clipY, clipWidth, clipHeight);
            }
            context.clip();
            m = transform.copy().invert().getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        }
        var hasComposition = !selfCache && this.globalCompositeOperation() !== 'source-over' && drawMethod === 'drawScene';
        if (hasComposition) {
            context.save();
            context._applyGlobalCompositeOperation(this);
        }
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(child) {
            child[drawMethod](canvas, top2);
        });
        if (hasComposition) context.restore();
        if (hasClip) context.restore();
    }
    getClientRect(config) {
        var _a;
        config = config || {
        };
        var skipTransform = config.skipTransform;
        var relativeTo = config.relativeTo;
        var minX, minY, maxX, maxY;
        var selfRect = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0
        };
        var that = this;
        (_a = this.children) === null || _a === void 0 || _a.forEach(function(child) {
            if (!child.visible()) return;
            var rect = child.getClientRect({
                relativeTo: that,
                skipShadow: config.skipShadow,
                skipStroke: config.skipStroke
            });
            if (rect.width === 0 && rect.height === 0) return;
            if (minX === undefined) {
                minX = rect.x;
                minY = rect.y;
                maxX = rect.x + rect.width;
                maxY = rect.y + rect.height;
            } else {
                minX = Math.min(minX, rect.x);
                minY = Math.min(minY, rect.y);
                maxX = Math.max(maxX, rect.x + rect.width);
                maxY = Math.max(maxY, rect.y + rect.height);
            }
        });
        var shapes = this.find('Shape');
        var hasVisible = false;
        for(var i = 0; i < shapes.length; i++){
            var shape = shapes[i];
            if (shape._isVisible(this)) {
                hasVisible = true;
                break;
            }
        }
        if (hasVisible && minX !== undefined) selfRect = {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
        else selfRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        if (!skipTransform) return this._transformedRect(selfRect, relativeTo);
        return selfRect;
    }
}
_factoryJs.Factory.addComponentsGetterSetter(Container, 'clip', [
    'x',
    'y',
    'width',
    'height', 
]);
_factoryJs.Factory.addGetterSetter(Container, 'clipX', undefined, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Container, 'clipY', undefined, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Container, 'clipWidth', undefined, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Container, 'clipHeight', undefined, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Container, 'clipFunc');

},{"./Factory.js":"ifTus","./Node.js":"em6vr","./Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eC0Bq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stages", ()=>stages
);
parcelHelpers.export(exports, "Stage", ()=>Stage
);
var _utilJs = require("./Util.js");
var _factoryJs = require("./Factory.js");
var _containerJs = require("./Container.js");
var _globalJs = require("./Global.js");
var _canvasJs = require("./Canvas.js");
var _dragAndDropJs = require("./DragAndDrop.js");
var _pointerEventsJs = require("./PointerEvents.js");
var STAGE = 'Stage', STRING = 'string', PX = 'px', MOUSEOUT = 'mouseout', MOUSELEAVE = 'mouseleave', MOUSEOVER = 'mouseover', MOUSEENTER = 'mouseenter', MOUSEMOVE = 'mousemove', MOUSEDOWN = 'mousedown', MOUSEUP = 'mouseup', POINTERMOVE = 'pointermove', POINTERDOWN = 'pointerdown', POINTERUP = 'pointerup', POINTERCANCEL = 'pointercancel', LOSTPOINTERCAPTURE = 'lostpointercapture', POINTEROUT = 'pointerout', POINTERLEAVE = 'pointerleave', POINTEROVER = 'pointerover', POINTERENTER = 'pointerenter', CONTEXTMENU = 'contextmenu', TOUCHSTART = 'touchstart', TOUCHEND = 'touchend', TOUCHMOVE = 'touchmove', TOUCHCANCEL = 'touchcancel', WHEEL = 'wheel', MAX_LAYERS_NUMBER = 5, EVENTS = [
    [
        MOUSEENTER,
        '_pointerenter'
    ],
    [
        MOUSEDOWN,
        '_pointerdown'
    ],
    [
        MOUSEMOVE,
        '_pointermove'
    ],
    [
        MOUSEUP,
        '_pointerup'
    ],
    [
        MOUSELEAVE,
        '_pointerleave'
    ],
    [
        TOUCHSTART,
        '_pointerdown'
    ],
    [
        TOUCHMOVE,
        '_pointermove'
    ],
    [
        TOUCHEND,
        '_pointerup'
    ],
    [
        TOUCHCANCEL,
        '_pointercancel'
    ],
    [
        MOUSEOVER,
        '_pointerover'
    ],
    [
        WHEEL,
        '_wheel'
    ],
    [
        CONTEXTMENU,
        '_contextmenu'
    ],
    [
        POINTERDOWN,
        '_pointerdown'
    ],
    [
        POINTERMOVE,
        '_pointermove'
    ],
    [
        POINTERUP,
        '_pointerup'
    ],
    [
        POINTERCANCEL,
        '_pointercancel'
    ],
    [
        LOSTPOINTERCAPTURE,
        '_lostpointercapture'
    ], 
];
const EVENTS_MAP = {
    mouse: {
        [POINTEROUT]: MOUSEOUT,
        [POINTERLEAVE]: MOUSELEAVE,
        [POINTEROVER]: MOUSEOVER,
        [POINTERENTER]: MOUSEENTER,
        [POINTERMOVE]: MOUSEMOVE,
        [POINTERDOWN]: MOUSEDOWN,
        [POINTERUP]: MOUSEUP,
        [POINTERCANCEL]: 'mousecancel',
        pointerclick: 'click',
        pointerdblclick: 'dblclick'
    },
    touch: {
        [POINTEROUT]: 'touchout',
        [POINTERLEAVE]: 'touchleave',
        [POINTEROVER]: 'touchover',
        [POINTERENTER]: 'touchenter',
        [POINTERMOVE]: TOUCHMOVE,
        [POINTERDOWN]: TOUCHSTART,
        [POINTERUP]: TOUCHEND,
        [POINTERCANCEL]: TOUCHCANCEL,
        pointerclick: 'tap',
        pointerdblclick: 'dbltap'
    },
    pointer: {
        [POINTEROUT]: POINTEROUT,
        [POINTERLEAVE]: POINTERLEAVE,
        [POINTEROVER]: POINTEROVER,
        [POINTERENTER]: POINTERENTER,
        [POINTERMOVE]: POINTERMOVE,
        [POINTERDOWN]: POINTERDOWN,
        [POINTERUP]: POINTERUP,
        [POINTERCANCEL]: POINTERCANCEL,
        pointerclick: 'pointerclick',
        pointerdblclick: 'pointerdblclick'
    }
};
const getEventType = (type)=>{
    if (type.indexOf('pointer') >= 0) return 'pointer';
    if (type.indexOf('touch') >= 0) return 'touch';
    return 'mouse';
};
const getEventsMap = (eventType)=>{
    const type = getEventType(eventType);
    if (type === 'pointer') return _globalJs.Konva.pointerEventsEnabled && EVENTS_MAP.pointer;
    if (type === 'touch') return EVENTS_MAP.touch;
    if (type === 'mouse') return EVENTS_MAP.mouse;
};
function checkNoClip(attrs = {
}) {
    if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) _utilJs.Util.warn('Stage does not support clipping. Please use clip for Layers or Groups.');
    return attrs;
}
const NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
const stages = [];
class Stage extends _containerJs.Container {
    constructor(config){
        super(checkNoClip(config));
        this._pointerPositions = [];
        this._changedPointerPositions = [];
        this._buildDOM();
        this._bindContentEvents();
        stages.push(this);
        this.on('widthChange.konva heightChange.konva', this._resizeDOM);
        this.on('visibleChange.konva', this._checkVisibility);
        this.on('clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva', ()=>{
            checkNoClip(this.attrs);
        });
        this._checkVisibility();
    }
    _validateAdd(child) {
        const isLayer = child.getType() === 'Layer';
        const isFastLayer = child.getType() === 'FastLayer';
        const valid = isLayer || isFastLayer;
        if (!valid) _utilJs.Util.throw('You may only add layers to the stage.');
    }
    _checkVisibility() {
        if (!this.content) return;
        const style = this.visible() ? '' : 'none';
        this.content.style.display = style;
    }
    setContainer(container) {
        if (typeof container === STRING) {
            if (container.charAt(0) === '.') {
                var className = container.slice(1);
                container = document.getElementsByClassName(className)[0];
            } else {
                var id;
                if (container.charAt(0) !== '#') id = container;
                else id = container.slice(1);
                container = document.getElementById(id);
            }
            if (!container) throw 'Can not find container in document with id ' + id;
        }
        this._setAttr('container', container);
        if (this.content) {
            if (this.content.parentElement) this.content.parentElement.removeChild(this.content);
            container.appendChild(this.content);
        }
        return this;
    }
    shouldDrawHit() {
        return true;
    }
    clear() {
        var layers = this.children, len = layers.length, n;
        for(n = 0; n < len; n++)layers[n].clear();
        return this;
    }
    clone(obj) {
        if (!obj) obj = {
        };
        obj.container = typeof document !== 'undefined' && document.createElement('div');
        return _containerJs.Container.prototype.clone.call(this, obj);
    }
    destroy() {
        super.destroy();
        var content = this.content;
        if (content && _utilJs.Util._isInDocument(content)) this.container().removeChild(content);
        var index = stages.indexOf(this);
        if (index > -1) stages.splice(index, 1);
        return this;
    }
    getPointerPosition() {
        const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
        if (!pos) {
            _utilJs.Util.warn(NO_POINTERS_MESSAGE);
            return null;
        }
        return {
            x: pos.x,
            y: pos.y
        };
    }
    _getPointerById(id) {
        return this._pointerPositions.find((p)=>p.id === id
        );
    }
    getPointersPositions() {
        return this._pointerPositions;
    }
    getStage() {
        return this;
    }
    getContent() {
        return this.content;
    }
    _toKonvaCanvas(config1) {
        config1 = config1 || {
        };
        config1.x = config1.x || 0;
        config1.y = config1.y || 0;
        config1.width = config1.width || this.width();
        config1.height = config1.height || this.height();
        var canvas = new _canvasJs.SceneCanvas({
            width: config1.width,
            height: config1.height,
            pixelRatio: config1.pixelRatio || 1
        });
        var _context = canvas.getContext()._context;
        var layers = this.children;
        if (config1.x || config1.y) _context.translate(-1 * config1.x, -1 * config1.y);
        layers.forEach(function(layer) {
            if (!layer.isVisible()) return;
            var layerCanvas = layer._toKonvaCanvas(config1);
            _context.drawImage(layerCanvas._canvas, config1.x, config1.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
        });
        return canvas;
    }
    getIntersection(pos1) {
        if (!pos1) return null;
        var layers = this.children, len = layers.length, end = len - 1, n;
        for(n = end; n >= 0; n--){
            const shape = layers[n].getIntersection(pos1);
            if (shape) return shape;
        }
        return null;
    }
    _resizeDOM() {
        var width = this.width();
        var height = this.height();
        if (this.content) {
            this.content.style.width = width + PX;
            this.content.style.height = height + PX;
        }
        this.bufferCanvas.setSize(width, height);
        this.bufferHitCanvas.setSize(width, height);
        this.children.forEach((layer)=>{
            layer.setSize({
                width,
                height
            });
            layer.draw();
        });
    }
    add(layer1, ...rest) {
        if (arguments.length > 1) {
            for(var i = 0; i < arguments.length; i++)this.add(arguments[i]);
            return this;
        }
        super.add(layer1);
        var length = this.children.length;
        if (length > MAX_LAYERS_NUMBER) _utilJs.Util.warn('The stage has ' + length + ' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.');
        layer1.setSize({
            width: this.width(),
            height: this.height()
        });
        layer1.draw();
        if (_globalJs.Konva.isBrowser) this.content.appendChild(layer1.canvas._canvas);
        return this;
    }
    getParent() {
        return null;
    }
    getLayer() {
        return null;
    }
    hasPointerCapture(pointerId3) {
        return _pointerEventsJs.hasPointerCapture(pointerId3, this);
    }
    setPointerCapture(pointerId1) {
        _pointerEventsJs.setPointerCapture(pointerId1, this);
    }
    releaseCapture(pointerId2) {
        _pointerEventsJs.releaseCapture(pointerId2, this);
    }
    getLayers() {
        return this.children;
    }
    _bindContentEvents() {
        if (!_globalJs.Konva.isBrowser) return;
        EVENTS.forEach(([event, methodName])=>{
            this.content.addEventListener(event, (evt)=>{
                this[methodName](evt);
            });
        });
    }
    _pointerenter(evt) {
        this.setPointersPositions(evt);
        const events = getEventsMap(evt.type);
        this._fire(events.pointerenter, {
            evt: evt,
            target: this,
            currentTarget: this
        });
    }
    _pointerover(evt1) {
        this.setPointersPositions(evt1);
        const events = getEventsMap(evt1.type);
        this._fire(events.pointerover, {
            evt: evt1,
            target: this,
            currentTarget: this
        });
    }
    _getTargetShape(evenType) {
        let shape = this[evenType + 'targetShape'];
        if (shape && !shape.getStage()) shape = null;
        return shape;
    }
    _pointerleave(evt2) {
        const events = getEventsMap(evt2.type);
        const eventType = getEventType(evt2.type);
        if (!events) return;
        this.setPointersPositions(evt2);
        var targetShape = this._getTargetShape(eventType);
        var eventsEnabled = !_dragAndDropJs.DD.isDragging || _globalJs.Konva.hitOnDragEnabled;
        if (targetShape && eventsEnabled) {
            targetShape._fireAndBubble(events.pointerout, {
                evt: evt2
            });
            targetShape._fireAndBubble(events.pointerleave, {
                evt: evt2
            });
            this._fire(events.pointerleave, {
                evt: evt2,
                target: this,
                currentTarget: this
            });
            this[eventType + 'targetShape'] = null;
        } else if (eventsEnabled) {
            this._fire(events.pointerleave, {
                evt: evt2,
                target: this,
                currentTarget: this
            });
            this._fire(events.pointerout, {
                evt: evt2,
                target: this,
                currentTarget: this
            });
        }
        this.pointerPos = undefined;
        this._pointerPositions = [];
    }
    _pointerdown(evt3) {
        const events = getEventsMap(evt3.type);
        const eventType = getEventType(evt3.type);
        if (!events) return;
        this.setPointersPositions(evt3);
        var triggeredOnShape = false;
        this._changedPointerPositions.forEach((pos)=>{
            var shape = this.getIntersection(pos);
            _dragAndDropJs.DD.justDragged = false;
            _globalJs.Konva['_' + eventType + 'ListenClick'] = true;
            const hasShape = shape && shape.isListening();
            if (!hasShape) return;
            if (_globalJs.Konva.capturePointerEventsEnabled) shape.setPointerCapture(pos.id);
            this[eventType + 'ClickStartShape'] = shape;
            shape._fireAndBubble(events.pointerdown, {
                evt: evt3,
                pointerId: pos.id
            });
            triggeredOnShape = true;
            const isTouch = evt3.type.indexOf('touch') >= 0;
            if (shape.preventDefault() && evt3.cancelable && isTouch) evt3.preventDefault();
        });
        if (!triggeredOnShape) this._fire(events.pointerdown, {
            evt: evt3,
            target: this,
            currentTarget: this,
            pointerId: this._pointerPositions[0].id
        });
    }
    _pointermove(evt4) {
        const events = getEventsMap(evt4.type);
        const eventType = getEventType(evt4.type);
        if (!events) return;
        if (_dragAndDropJs.DD.isDragging && _dragAndDropJs.DD.node.preventDefault() && evt4.cancelable) evt4.preventDefault();
        this.setPointersPositions(evt4);
        var eventsEnabled = !_dragAndDropJs.DD.isDragging || _globalJs.Konva.hitOnDragEnabled;
        if (!eventsEnabled) return;
        var processedShapesIds = {
        };
        let triggeredOnShape = false;
        var targetShape = this._getTargetShape(eventType);
        this._changedPointerPositions.forEach((pos)=>{
            const shape = _pointerEventsJs.getCapturedShape(pos.id) || this.getIntersection(pos);
            const pointerId = pos.id;
            const event = {
                evt: evt4,
                pointerId
            };
            var differentTarget = targetShape !== shape;
            if (differentTarget && targetShape) {
                targetShape._fireAndBubble(events.pointerout, Object.assign({
                }, event), shape);
                targetShape._fireAndBubble(events.pointerleave, Object.assign({
                }, event), shape);
            }
            if (shape) {
                if (processedShapesIds[shape._id]) return;
                processedShapesIds[shape._id] = true;
            }
            if (shape && shape.isListening()) {
                triggeredOnShape = true;
                if (differentTarget) {
                    shape._fireAndBubble(events.pointerover, Object.assign({
                    }, event), targetShape);
                    shape._fireAndBubble(events.pointerenter, Object.assign({
                    }, event), targetShape);
                    this[eventType + 'targetShape'] = shape;
                }
                shape._fireAndBubble(events.pointermove, Object.assign({
                }, event));
            } else if (targetShape) {
                this._fire(events.pointerover, {
                    evt: evt4,
                    target: this,
                    currentTarget: this,
                    pointerId
                });
                this[eventType + 'targetShape'] = null;
            }
        });
        if (!triggeredOnShape) this._fire(events.pointermove, {
            evt: evt4,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id
        });
    }
    _pointerup(evt5) {
        const events = getEventsMap(evt5.type);
        const eventType = getEventType(evt5.type);
        if (!events) return;
        this.setPointersPositions(evt5);
        const clickStartShape = this[eventType + 'ClickStartShape'];
        const clickEndShape = this[eventType + 'ClickEndShape'];
        var processedShapesIds = {
        };
        let triggeredOnShape = false;
        this._changedPointerPositions.forEach((pos)=>{
            const shape = _pointerEventsJs.getCapturedShape(pos.id) || this.getIntersection(pos);
            if (shape) {
                shape.releaseCapture(pos.id);
                if (processedShapesIds[shape._id]) return;
                processedShapesIds[shape._id] = true;
            }
            const pointerId = pos.id;
            const event = {
                evt: evt5,
                pointerId
            };
            let fireDblClick = false;
            if (_globalJs.Konva['_' + eventType + 'InDblClickWindow'] && _globalJs.Konva['_' + eventType + 'InDblClickWindowId'] === pointerId) {
                fireDblClick = true;
                clearTimeout(this[eventType + 'DblTimeout']);
            } else if (!_dragAndDropJs.DD.justDragged) {
                _globalJs.Konva['_' + eventType + 'InDblClickWindow'] = true;
                _globalJs.Konva['_' + eventType + 'InDblClickWindowId'] = pointerId;
                clearTimeout(this[eventType + 'DblTimeout']);
            }
            this[eventType + 'DblTimeout'] = setTimeout(function() {
                _globalJs.Konva['_' + eventType + 'InDblClickWindow'] = false;
            }, _globalJs.Konva.dblClickWindow);
            if (shape && shape.isListening()) {
                triggeredOnShape = true;
                this[eventType + 'ClickEndShape'] = shape;
                shape._fireAndBubble(events.pointerup, Object.assign({
                }, event));
                if (_globalJs.Konva['_' + eventType + 'ListenClick'] && clickStartShape && clickStartShape === shape) {
                    shape._fireAndBubble(events.pointerclick, Object.assign({
                    }, event));
                    if (fireDblClick && clickEndShape && clickEndShape === shape) shape._fireAndBubble(events.pointerdblclick, Object.assign({
                    }, event));
                }
            } else {
                this[eventType + 'ClickEndShape'] = null;
                if (_globalJs.Konva['_' + eventType + 'ListenClick']) this._fire(events.pointerclick, {
                    evt: evt5,
                    target: this,
                    currentTarget: this,
                    pointerId
                });
                if (fireDblClick) this._fire(events.pointerdblclick, {
                    evt: evt5,
                    target: this,
                    currentTarget: this,
                    pointerId
                });
            }
        });
        if (!triggeredOnShape) this._fire(events.pointerup, {
            evt: evt5,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id
        });
        _globalJs.Konva['_' + eventType + 'ListenClick'] = false;
        if (evt5.cancelable) evt5.preventDefault();
    }
    _contextmenu(evt6) {
        this.setPointersPositions(evt6);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) shape._fireAndBubble(CONTEXTMENU, {
            evt: evt6
        });
        else this._fire(CONTEXTMENU, {
            evt: evt6,
            target: this,
            currentTarget: this
        });
    }
    _wheel(evt7) {
        this.setPointersPositions(evt7);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) shape._fireAndBubble(WHEEL, {
            evt: evt7
        });
        else this._fire(WHEEL, {
            evt: evt7,
            target: this,
            currentTarget: this
        });
    }
    _pointercancel(evt8) {
        this.setPointersPositions(evt8);
        const shape = _pointerEventsJs.getCapturedShape(evt8.pointerId) || this.getIntersection(this.getPointerPosition());
        if (shape) shape._fireAndBubble(POINTERUP, _pointerEventsJs.createEvent(evt8));
        _pointerEventsJs.releaseCapture(evt8.pointerId);
    }
    _lostpointercapture(evt9) {
        _pointerEventsJs.releaseCapture(evt9.pointerId);
    }
    setPointersPositions(evt10) {
        var contentPosition = this._getContentPosition(), x = null, y = null;
        evt10 = evt10 ? evt10 : window.event;
        if (evt10.touches !== undefined) {
            this._pointerPositions = [];
            this._changedPointerPositions = [];
            Array.prototype.forEach.call(evt10.touches, (touch)=>{
                this._pointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
                });
            });
            Array.prototype.forEach.call(evt10.changedTouches || evt10.touches, (touch)=>{
                this._changedPointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
                });
            });
        } else {
            x = (evt10.clientX - contentPosition.left) / contentPosition.scaleX;
            y = (evt10.clientY - contentPosition.top) / contentPosition.scaleY;
            this.pointerPos = {
                x: x,
                y: y
            };
            this._pointerPositions = [
                {
                    x,
                    y,
                    id: _utilJs.Util._getFirstPointerId(evt10)
                }
            ];
            this._changedPointerPositions = [
                {
                    x,
                    y,
                    id: _utilJs.Util._getFirstPointerId(evt10)
                }, 
            ];
        }
    }
    _setPointerPosition(evt11) {
        _utilJs.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
        this.setPointersPositions(evt11);
    }
    _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect) return {
            top: 0,
            left: 0,
            scaleX: 1,
            scaleY: 1
        };
        var rect = this.content.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            scaleX: rect.width / this.content.clientWidth || 1,
            scaleY: rect.height / this.content.clientHeight || 1
        };
    }
    _buildDOM() {
        this.bufferCanvas = new _canvasJs.SceneCanvas({
            width: this.width(),
            height: this.height()
        });
        this.bufferHitCanvas = new _canvasJs.HitCanvas({
            pixelRatio: 1,
            width: this.width(),
            height: this.height()
        });
        if (!_globalJs.Konva.isBrowser) return;
        var container = this.container();
        if (!container) throw 'Stage has no container. A container is required.';
        container.innerHTML = '';
        this.content = document.createElement('div');
        this.content.style.position = 'relative';
        this.content.style.userSelect = 'none';
        this.content.className = 'konvajs-content';
        this.content.setAttribute('role', 'presentation');
        container.appendChild(this.content);
        this._resizeDOM();
    }
    cache() {
        _utilJs.Util.warn('Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.');
        return this;
    }
    clearCache() {
        return this;
    }
    batchDraw() {
        this.getChildren().forEach(function(layer) {
            layer.batchDraw();
        });
        return this;
    }
}
Stage.prototype.nodeType = STAGE;
_globalJs._registerNode(Stage);
_factoryJs.Factory.addGetterSetter(Stage, 'container');

},{"./Util.js":"98XwR","./Factory.js":"ifTus","./Container.js":"4VECF","./Global.js":"1LGjN","./Canvas.js":"gdTkf","./DragAndDrop.js":"fIsEZ","./PointerEvents.js":"8HFAq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8HFAq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCapturedShape", ()=>getCapturedShape
);
parcelHelpers.export(exports, "createEvent", ()=>createEvent
);
parcelHelpers.export(exports, "hasPointerCapture", ()=>hasPointerCapture
);
parcelHelpers.export(exports, "setPointerCapture", ()=>setPointerCapture
);
parcelHelpers.export(exports, "releaseCapture", ()=>releaseCapture
);
var _globalJs = require("./Global.js");
const Captures = new Map();
const SUPPORT_POINTER_EVENTS = _globalJs.Konva._global['PointerEvent'] !== undefined;
function getCapturedShape(pointerId) {
    return Captures.get(pointerId);
}
function createEvent(evt) {
    return {
        evt,
        pointerId: evt.pointerId
    };
}
function hasPointerCapture(pointerId, shape) {
    return Captures.get(pointerId) === shape;
}
function setPointerCapture(pointerId, shape) {
    releaseCapture(pointerId);
    const stage = shape.getStage();
    if (!stage) return;
    Captures.set(pointerId, shape);
    if (SUPPORT_POINTER_EVENTS) shape._fire('gotpointercapture', createEvent(new PointerEvent('gotpointercapture')));
}
function releaseCapture(pointerId, target) {
    const shape = Captures.get(pointerId);
    if (!shape) return;
    const stage = shape.getStage();
    stage && stage.content;
    Captures.delete(pointerId);
    if (SUPPORT_POINTER_EVENTS) shape._fire('lostpointercapture', createEvent(new PointerEvent('lostpointercapture')));
}

},{"./Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2r1Kv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Layer", ()=>Layer
);
var _utilJs = require("./Util.js");
var _containerJs = require("./Container.js");
var _nodeJs = require("./Node.js");
var _factoryJs = require("./Factory.js");
var _canvasJs = require("./Canvas.js");
var _validatorsJs = require("./Validators.js");
var _shapeJs = require("./Shape.js");
var _globalJs = require("./Global.js");
var HASH = '#', BEFORE_DRAW = 'beforeDraw', DRAW = 'draw', INTERSECTION_OFFSETS = [
    {
        x: 0,
        y: 0
    },
    {
        x: -1,
        y: -1
    },
    {
        x: 1,
        y: -1
    },
    {
        x: 1,
        y: 1
    },
    {
        x: -1,
        y: 1
    }, 
], INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
class Layer extends _containerJs.Container {
    constructor(config){
        super(config);
        this.canvas = new _canvasJs.SceneCanvas();
        this.hitCanvas = new _canvasJs.HitCanvas({
            pixelRatio: 1
        });
        this._waitingForDraw = false;
        this.on('visibleChange.konva', this._checkVisibility);
        this._checkVisibility();
        this.on('imageSmoothingEnabledChange.konva', this._setSmoothEnabled);
        this._setSmoothEnabled();
    }
    createPNGStream() {
        const c = this.canvas._canvas;
        return c.createPNGStream();
    }
    getCanvas() {
        return this.canvas;
    }
    getNativeCanvasElement() {
        return this.canvas._canvas;
    }
    getHitCanvas() {
        return this.hitCanvas;
    }
    getContext() {
        return this.getCanvas().getContext();
    }
    clear(bounds) {
        this.getContext().clear(bounds);
        this.getHitCanvas().getContext().clear(bounds);
        return this;
    }
    setZIndex(index) {
        super.setZIndex(index);
        var stage = this.getStage();
        if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            if (index < stage.children.length - 1) stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
            else stage.content.appendChild(this.getNativeCanvasElement());
        }
        return this;
    }
    moveToTop() {
        _nodeJs.Node.prototype.moveToTop.call(this);
        var stage = this.getStage();
        if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            stage.content.appendChild(this.getNativeCanvasElement());
        }
        return true;
    }
    moveUp() {
        var moved = _nodeJs.Node.prototype.moveUp.call(this);
        if (!moved) return false;
        var stage = this.getStage();
        if (!stage || !stage.content) return false;
        stage.content.removeChild(this.getNativeCanvasElement());
        if (this.index < stage.children.length - 1) stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
        else stage.content.appendChild(this.getNativeCanvasElement());
        return true;
    }
    moveDown() {
        if (_nodeJs.Node.prototype.moveDown.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                if (stage.content) {
                    stage.content.removeChild(this.getNativeCanvasElement());
                    stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
                }
            }
            return true;
        }
        return false;
    }
    moveToBottom() {
        if (_nodeJs.Node.prototype.moveToBottom.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                if (stage.content) {
                    stage.content.removeChild(this.getNativeCanvasElement());
                    stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
                }
            }
            return true;
        }
        return false;
    }
    getLayer() {
        return this;
    }
    remove() {
        var _canvas = this.getNativeCanvasElement();
        _nodeJs.Node.prototype.remove.call(this);
        if (_canvas && _canvas.parentNode && _utilJs.Util._isInDocument(_canvas)) _canvas.parentNode.removeChild(_canvas);
        return this;
    }
    getStage() {
        return this.parent;
    }
    setSize({ width , height  }) {
        this.canvas.setSize(width, height);
        this.hitCanvas.setSize(width, height);
        this._setSmoothEnabled();
        return this;
    }
    _validateAdd(child) {
        var type = child.getType();
        if (type !== 'Group' && type !== 'Shape') _utilJs.Util.throw('You may only add groups and shapes to a layer.');
    }
    _toKonvaCanvas(config1) {
        config1 = config1 || {
        };
        config1.width = config1.width || this.getWidth();
        config1.height = config1.height || this.getHeight();
        config1.x = config1.x !== undefined ? config1.x : this.x();
        config1.y = config1.y !== undefined ? config1.y : this.y();
        return _nodeJs.Node.prototype._toKonvaCanvas.call(this, config1);
    }
    _checkVisibility() {
        const visible = this.visible();
        if (visible) this.canvas._canvas.style.display = 'block';
        else this.canvas._canvas.style.display = 'none';
    }
    _setSmoothEnabled() {
        this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
        if (this.parent) return this.parent.width();
    }
    setWidth() {
        _utilJs.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
        if (this.parent) return this.parent.height();
    }
    setHeight() {
        _utilJs.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
        if (!this._waitingForDraw) {
            this._waitingForDraw = true;
            _utilJs.Util.requestAnimFrame(()=>{
                this.draw();
                this._waitingForDraw = false;
            });
        }
        return this;
    }
    getIntersection(pos) {
        if (!this.isListening() || !this.isVisible()) return null;
        var spiralSearchDistance = 1;
        var continueSearch = false;
        while(true){
            for(let i = 0; i < INTERSECTION_OFFSETS_LEN; i++){
                const intersectionOffset = INTERSECTION_OFFSETS[i];
                const obj = this._getIntersection({
                    x: pos.x + intersectionOffset.x * spiralSearchDistance,
                    y: pos.y + intersectionOffset.y * spiralSearchDistance
                });
                const shape = obj.shape;
                if (shape) return shape;
                continueSearch = !!obj.antialiased;
                if (!obj.antialiased) break;
            }
            if (continueSearch) spiralSearchDistance += 1;
            else return null;
        }
    }
    _getIntersection(pos1) {
        const ratio = this.hitCanvas.pixelRatio;
        const p = this.hitCanvas.context.getImageData(Math.round(pos1.x * ratio), Math.round(pos1.y * ratio), 1, 1).data;
        const p3 = p[3];
        if (p3 === 255) {
            const colorKey = _utilJs.Util._rgbToHex(p[0], p[1], p[2]);
            const shape = _shapeJs.shapes[HASH + colorKey];
            if (shape) return {
                shape: shape
            };
            return {
                antialiased: true
            };
        } else if (p3 > 0) return {
            antialiased: true
        };
        return {
        };
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
        this._fire(BEFORE_DRAW, {
            node: this
        });
        if (this.clearBeforeDraw()) canvas.getContext().clear();
        _containerJs.Container.prototype.drawScene.call(this, canvas, top);
        this._fire(DRAW, {
            node: this
        });
        return this;
    }
    drawHit(can1, top1) {
        var layer = this.getLayer(), canvas = can1 || layer && layer.hitCanvas;
        if (layer && layer.clearBeforeDraw()) layer.getHitCanvas().getContext().clear();
        _containerJs.Container.prototype.drawHit.call(this, canvas, top1);
        return this;
    }
    enableHitGraph() {
        this.hitGraphEnabled(true);
        return this;
    }
    disableHitGraph() {
        this.hitGraphEnabled(false);
        return this;
    }
    setHitGraphEnabled(val) {
        _utilJs.Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.');
        this.listening(val);
    }
    getHitGraphEnabled(val1) {
        _utilJs.Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.');
        return this.listening();
    }
    toggleHitCanvas() {
        if (!this.parent || !this.parent['content']) return;
        var parent = this.parent;
        var added = !!this.hitCanvas._canvas.parentNode;
        if (added) parent.content.removeChild(this.hitCanvas._canvas);
        else parent.content.appendChild(this.hitCanvas._canvas);
    }
}
Layer.prototype.nodeType = 'Layer';
_globalJs._registerNode(Layer);
_factoryJs.Factory.addGetterSetter(Layer, 'imageSmoothingEnabled', true);
_factoryJs.Factory.addGetterSetter(Layer, 'clearBeforeDraw', true);
_factoryJs.Factory.addGetterSetter(Layer, 'hitGraphEnabled', true, _validatorsJs.getBooleanValidator());

},{"./Util.js":"98XwR","./Container.js":"4VECF","./Node.js":"em6vr","./Factory.js":"ifTus","./Canvas.js":"gdTkf","./Validators.js":"5lPi2","./Shape.js":"7oUQ5","./Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7oUQ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shapes", ()=>shapes
);
parcelHelpers.export(exports, "Shape", ()=>Shape
);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
var _factoryJs = require("./Factory.js");
var _nodeJs = require("./Node.js");
var _validatorsJs = require("./Validators.js");
var _pointerEventsJs = require("./PointerEvents.js");
var HAS_SHADOW = 'hasShadow';
var SHADOW_RGBA = 'shadowRGBA';
var patternImage = 'patternImage';
var linearGradient = 'linearGradient';
var radialGradient = 'radialGradient';
let dummyContext;
function getDummyContext() {
    if (dummyContext) return dummyContext;
    dummyContext = _utilJs.Util.createCanvasElement().getContext('2d');
    return dummyContext;
}
const shapes = {
};
function _fillFunc(context) {
    context.fill();
}
function _strokeFunc(context) {
    context.stroke();
}
function _fillFuncHit(context) {
    context.fill();
}
function _strokeFuncHit(context) {
    context.stroke();
}
function _clearHasShadowCache() {
    this._clearCache(HAS_SHADOW);
}
function _clearGetShadowRGBACache() {
    this._clearCache(SHADOW_RGBA);
}
function _clearFillPatternCache() {
    this._clearCache(patternImage);
}
function _clearLinearGradientCache() {
    this._clearCache(linearGradient);
}
function _clearRadialGradientCache() {
    this._clearCache(radialGradient);
}
class Shape extends _nodeJs.Node {
    constructor(config){
        super(config);
        let key;
        while(true){
            key = _utilJs.Util.getRandomColor();
            if (key && !(key in shapes)) break;
        }
        this.colorKey = key;
        shapes[key] = this;
    }
    getContext() {
        _utilJs.Util.warn('shape.getContext() method is deprecated. Please do not use it.');
        return this.getLayer().getContext();
    }
    getCanvas() {
        _utilJs.Util.warn('shape.getCanvas() method is deprecated. Please do not use it.');
        return this.getLayer().getCanvas();
    }
    getSceneFunc() {
        return this.attrs.sceneFunc || this['_sceneFunc'];
    }
    getHitFunc() {
        return this.attrs.hitFunc || this['_hitFunc'];
    }
    hasShadow() {
        return this._getCache(HAS_SHADOW, this._hasShadow);
    }
    _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
        return this._getCache(patternImage, this.__getFillPattern);
    }
    __getFillPattern() {
        if (this.fillPatternImage()) {
            var ctx = getDummyContext();
            const pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || 'repeat');
            if (pattern && pattern.setTransform) {
                const tr = new _utilJs.Transform();
                tr.translate(this.fillPatternX(), this.fillPatternY());
                tr.rotate(_globalJs.Konva.getAngle(this.fillPatternRotation()));
                tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
                tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
                const m = tr.getMatrix();
                pattern.setTransform({
                    a: m[0],
                    b: m[1],
                    c: m[2],
                    d: m[3],
                    e: m[4],
                    f: m[5]
                });
            }
            return pattern;
        }
    }
    _getLinearGradient() {
        return this._getCache(linearGradient, this.__getLinearGradient);
    }
    __getLinearGradient() {
        var colorStops = this.fillLinearGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillLinearGradientStartPoint();
            var end = this.fillLinearGradientEndPoint();
            var grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
            for(var n = 0; n < colorStops.length; n += 2)grd.addColorStop(colorStops[n], colorStops[n + 1]);
            return grd;
        }
    }
    _getRadialGradient() {
        return this._getCache(radialGradient, this.__getRadialGradient);
    }
    __getRadialGradient() {
        var colorStops = this.fillRadialGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillRadialGradientStartPoint();
            var end = this.fillRadialGradientEndPoint();
            var grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
            for(var n = 0; n < colorStops.length; n += 2)grd.addColorStop(colorStops[n], colorStops[n + 1]);
            return grd;
        }
    }
    getShadowRGBA() {
        return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
    }
    _getShadowRGBA() {
        if (this.hasShadow()) {
            var rgba = _utilJs.Util.colorToRGBA(this.shadowColor());
            return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + rgba.a * (this.shadowOpacity() || 1) + ')';
        }
    }
    hasFill() {
        return this._calculate('hasFill', [
            'fillEnabled',
            'fill',
            'fillPatternImage',
            'fillLinearGradientColorStops',
            'fillRadialGradientColorStops', 
        ], ()=>{
            return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
        });
    }
    hasStroke() {
        return this._calculate('hasStroke', [
            'strokeEnabled',
            'strokeWidth',
            'stroke',
            'strokeLinearGradientColorStops', 
        ], ()=>{
            return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
        });
    }
    hasHitStroke() {
        const width = this.hitStrokeWidth();
        if (width === 'auto') return this.hasStroke();
        return this.strokeEnabled() && !!width;
    }
    intersects(point) {
        var stage = this.getStage(), bufferHitCanvas = stage.bufferHitCanvas, p;
        bufferHitCanvas.getContext().clear();
        this.drawHit(bufferHitCanvas, null, true);
        p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
        return p[3] > 0;
    }
    destroy() {
        _nodeJs.Node.prototype.destroy.call(this);
        delete shapes[this.colorKey];
        delete this.colorKey;
        return this;
    }
    _useBufferCanvas(forceFill) {
        var _a;
        if (!this.getStage()) return false;
        const perfectDrawEnabled = (_a = this.attrs.perfectDrawEnabled) !== null && _a !== void 0 ? _a : true;
        if (!perfectDrawEnabled) return false;
        const hasFill = forceFill || this.hasFill();
        const hasStroke = this.hasStroke();
        const isTransparent = this.getAbsoluteOpacity() !== 1;
        if (hasFill && hasStroke && isTransparent) return true;
        const hasShadow = this.hasShadow();
        const strokeForShadow = this.shadowForStrokeEnabled();
        if (hasFill && hasStroke && hasShadow && strokeForShadow) return true;
        return false;
    }
    setStrokeHitEnabled(val) {
        _utilJs.Util.warn('strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.');
        if (val) this.hitStrokeWidth('auto');
        else this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
        if (this.hitStrokeWidth() === 0) return false;
        else return true;
    }
    getSelfRect() {
        var size = this.size();
        return {
            x: this._centroid ? -size.width / 2 : 0,
            y: this._centroid ? -size.height / 2 : 0,
            width: size.width,
            height: size.height
        };
    }
    getClientRect(config1 = {
    }) {
        const skipTransform = config1.skipTransform;
        const relativeTo = config1.relativeTo;
        const fillRect = this.getSelfRect();
        const applyStroke = !config1.skipStroke && this.hasStroke();
        const strokeWidth = applyStroke && this.strokeWidth() || 0;
        const fillAndStrokeWidth = fillRect.width + strokeWidth;
        const fillAndStrokeHeight = fillRect.height + strokeWidth;
        const applyShadow = !config1.skipShadow && this.hasShadow();
        const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
        const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
        const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
        const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
        const blurRadius = applyShadow && this.shadowBlur() || 0;
        const width = preWidth + blurRadius * 2;
        const height = preHeight + blurRadius * 2;
        let roundingOffset = 0;
        if (Math.round(strokeWidth / 2) !== strokeWidth / 2) roundingOffset = 1;
        const rect = {
            width: width + roundingOffset,
            height: height + roundingOffset,
            x: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
            y: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
        };
        if (!skipTransform) return this._transformedRect(rect, relativeTo);
        return rect;
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow(), stage, bufferCanvas, bufferContext;
        var skipBuffer = canvas.isCache;
        var cachingSelf = top === this;
        if (!this.isVisible() && !cachingSelf) return this;
        if (cachedCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) return this;
        context.save();
        if (this._useBufferCanvas() && !skipBuffer) {
            stage = this.getStage();
            bufferCanvas = stage.bufferCanvas;
            bufferContext = bufferCanvas.getContext();
            bufferContext.clear();
            bufferContext.save();
            bufferContext._applyLineJoin(this);
            var o = this.getAbsoluteTransform(top).getMatrix();
            bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
            drawFunc.call(this, bufferContext, this);
            bufferContext.restore();
            var ratio = bufferCanvas.pixelRatio;
            if (hasShadow) context._applyShadow(this);
            context._applyOpacity(this);
            context._applyGlobalCompositeOperation(this);
            context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
        } else {
            context._applyLineJoin(this);
            if (!cachingSelf) {
                var o = this.getAbsoluteTransform(top).getMatrix();
                context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                context._applyOpacity(this);
                context._applyGlobalCompositeOperation(this);
            }
            if (hasShadow) context._applyShadow(this);
            drawFunc.call(this, context, this);
        }
        context.restore();
        return this;
    }
    drawHit(can1, top1, skipDragCheck = false) {
        if (!this.shouldDrawHit(top1, skipDragCheck)) return this;
        var layer = this.getLayer(), canvas = can1 || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (!this.colorKey) _utilJs.Util.warn('Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()');
        if (cachedHitCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top1).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) return this;
        context.save();
        context._applyLineJoin(this);
        const selfCache = this === top1;
        if (!selfCache) {
            var o = this.getAbsoluteTransform(top1).getMatrix();
            context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        }
        drawFunc.call(this, context, this);
        context.restore();
        return this;
    }
    drawHitFromCache(alphaThreshold = 0) {
        var cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight(), hitImageData, hitData, len, rgbColorKey, i, alpha;
        hitContext.clear();
        hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
        try {
            hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
            hitData = hitImageData.data;
            len = hitData.length;
            rgbColorKey = _utilJs.Util._hexToRgb(this.colorKey);
            for(i = 0; i < len; i += 4){
                alpha = hitData[i + 3];
                if (alpha > alphaThreshold) {
                    hitData[i] = rgbColorKey.r;
                    hitData[i + 1] = rgbColorKey.g;
                    hitData[i + 2] = rgbColorKey.b;
                    hitData[i + 3] = 255;
                } else hitData[i + 3] = 0;
            }
            hitContext.putImageData(hitImageData, 0, 0);
        } catch (e) {
            _utilJs.Util.error('Unable to draw hit graph from cached scene canvas. ' + e.message);
        }
        return this;
    }
    hasPointerCapture(pointerId) {
        return _pointerEventsJs.hasPointerCapture(pointerId, this);
    }
    setPointerCapture(pointerId1) {
        _pointerEventsJs.setPointerCapture(pointerId1, this);
    }
    releaseCapture(pointerId2) {
        _pointerEventsJs.releaseCapture(pointerId2, this);
    }
}
Shape.prototype._fillFunc = _fillFunc;
Shape.prototype._strokeFunc = _strokeFunc;
Shape.prototype._fillFuncHit = _fillFuncHit;
Shape.prototype._strokeFuncHit = _strokeFuncHit;
Shape.prototype._centroid = false;
Shape.prototype.nodeType = 'Shape';
_globalJs._registerNode(Shape);
Shape.prototype.eventListeners = {
};
Shape.prototype.on.call(Shape.prototype, 'shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearHasShadowCache);
Shape.prototype.on.call(Shape.prototype, 'shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearGetShadowRGBACache);
Shape.prototype.on.call(Shape.prototype, 'fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva', _clearFillPatternCache);
Shape.prototype.on.call(Shape.prototype, 'fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva', _clearLinearGradientCache);
Shape.prototype.on.call(Shape.prototype, 'fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva', _clearRadialGradientCache);
_factoryJs.Factory.addGetterSetter(Shape, 'stroke', undefined, _validatorsJs.getStringOrGradientValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'strokeWidth', 2, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'fillAfterStrokeEnabled', false);
_factoryJs.Factory.addGetterSetter(Shape, 'hitStrokeWidth', 'auto', _validatorsJs.getNumberOrAutoValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'strokeHitEnabled', true, _validatorsJs.getBooleanValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'perfectDrawEnabled', true, _validatorsJs.getBooleanValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'shadowForStrokeEnabled', true, _validatorsJs.getBooleanValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'lineJoin');
_factoryJs.Factory.addGetterSetter(Shape, 'lineCap');
_factoryJs.Factory.addGetterSetter(Shape, 'sceneFunc');
_factoryJs.Factory.addGetterSetter(Shape, 'hitFunc');
_factoryJs.Factory.addGetterSetter(Shape, 'dash');
_factoryJs.Factory.addGetterSetter(Shape, 'dashOffset', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'shadowColor', undefined, _validatorsJs.getStringValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'shadowBlur', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'shadowOpacity', 1, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'shadowOffset', [
    'x',
    'y'
]);
_factoryJs.Factory.addGetterSetter(Shape, 'shadowOffsetX', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'shadowOffsetY', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternImage');
_factoryJs.Factory.addGetterSetter(Shape, 'fill', undefined, _validatorsJs.getStringOrGradientValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternX', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternY', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientColorStops');
_factoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientColorStops');
_factoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientStartRadius', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientEndRadius', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientColorStops');
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternRepeat', 'repeat');
_factoryJs.Factory.addGetterSetter(Shape, 'fillEnabled', true);
_factoryJs.Factory.addGetterSetter(Shape, 'strokeEnabled', true);
_factoryJs.Factory.addGetterSetter(Shape, 'shadowEnabled', true);
_factoryJs.Factory.addGetterSetter(Shape, 'dashEnabled', true);
_factoryJs.Factory.addGetterSetter(Shape, 'strokeScaleEnabled', true);
_factoryJs.Factory.addGetterSetter(Shape, 'fillPriority', 'color');
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'fillPatternOffset', [
    'x',
    'y'
]);
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternOffsetX', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternOffsetY', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'fillPatternScale', [
    'x',
    'y'
]);
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternScaleX', 1, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternScaleY', 1, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'fillLinearGradientStartPoint', [
    'x',
    'y', 
]);
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'strokeLinearGradientStartPoint', [
    'x',
    'y', 
]);
_factoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientStartPointX', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientStartPointX', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientStartPointY', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientStartPointY', 0);
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'fillLinearGradientEndPoint', [
    'x',
    'y', 
]);
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'strokeLinearGradientEndPoint', [
    'x',
    'y', 
]);
_factoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientEndPointX', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientEndPointX', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientEndPointY', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientEndPointY', 0);
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'fillRadialGradientStartPoint', [
    'x',
    'y', 
]);
_factoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientStartPointX', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientStartPointY', 0);
_factoryJs.Factory.addComponentsGetterSetter(Shape, 'fillRadialGradientEndPoint', [
    'x',
    'y', 
]);
_factoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientEndPointX', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientEndPointY', 0);
_factoryJs.Factory.addGetterSetter(Shape, 'fillPatternRotation', 0);
_factoryJs.Factory.backCompat(Shape, {
    dashArray: 'dash',
    getDashArray: 'getDash',
    setDashArray: 'getDash',
    drawFunc: 'sceneFunc',
    getDrawFunc: 'getSceneFunc',
    setDrawFunc: 'setSceneFunc',
    drawHitFunc: 'hitFunc',
    getDrawHitFunc: 'getHitFunc',
    setDrawHitFunc: 'setHitFunc'
});

},{"./Global.js":"1LGjN","./Util.js":"98XwR","./Factory.js":"ifTus","./Node.js":"em6vr","./Validators.js":"5lPi2","./PointerEvents.js":"8HFAq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9wqBZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FastLayer", ()=>FastLayer
);
var _utilJs = require("./Util.js");
var _layerJs = require("./Layer.js");
var _globalJs = require("./Global.js");
class FastLayer extends _layerJs.Layer {
    constructor(attrs){
        super(attrs);
        this.listening(false);
        _utilJs.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
}
FastLayer.prototype.nodeType = 'FastLayer';
_globalJs._registerNode(FastLayer);

},{"./Util.js":"98XwR","./Layer.js":"2r1Kv","./Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ijBUs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Group", ()=>Group
);
var _utilJs = require("./Util.js");
var _containerJs = require("./Container.js");
var _globalJs = require("./Global.js");
class Group extends _containerJs.Container {
    _validateAdd(child) {
        var type = child.getType();
        if (type !== 'Group' && type !== 'Shape') _utilJs.Util.throw('You may only add groups and shapes to groups.');
    }
}
Group.prototype.nodeType = 'Group';
_globalJs._registerNode(Group);

},{"./Util.js":"98XwR","./Container.js":"4VECF","./Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8fson":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation
);
var _globalJs = require("./Global.js");
var _utilJs = require("./Util.js");
var now = function() {
    if (_globalJs.glob.performance && _globalJs.glob.performance.now) return function() {
        return _globalJs.glob.performance.now();
    };
    return function() {
        return new Date().getTime();
    };
}();
class Animation {
    constructor(func, layers){
        this.id = Animation.animIdCounter++;
        this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: now(),
            frameRate: 0
        };
        this.func = func;
        this.setLayers(layers);
    }
    setLayers(layers1) {
        var lays = [];
        if (!layers1) lays = [];
        else if (layers1.length > 0) lays = layers1;
        else lays = [
            layers1
        ];
        this.layers = lays;
        return this;
    }
    getLayers() {
        return this.layers;
    }
    addLayer(layer) {
        var layers = this.layers, len = layers.length, n;
        for(n = 0; n < len; n++){
            if (layers[n]._id === layer._id) return false;
        }
        this.layers.push(layer);
        return true;
    }
    isRunning() {
        var a = Animation, animations = a.animations, len = animations.length, n;
        for(n = 0; n < len; n++){
            if (animations[n].id === this.id) return true;
        }
        return false;
    }
    start() {
        this.stop();
        this.frame.timeDiff = 0;
        this.frame.lastTime = now();
        Animation._addAnimation(this);
        return this;
    }
    stop() {
        Animation._removeAnimation(this);
        return this;
    }
    _updateFrameObject(time) {
        this.frame.timeDiff = time - this.frame.lastTime;
        this.frame.lastTime = time;
        this.frame.time += this.frame.timeDiff;
        this.frame.frameRate = 1000 / this.frame.timeDiff;
    }
    static _addAnimation(anim) {
        this.animations.push(anim);
        this._handleAnimation();
    }
    static _removeAnimation(anim1) {
        var id = anim1.id, animations = this.animations, len = animations.length, n;
        for(n = 0; n < len; n++)if (animations[n].id === id) {
            this.animations.splice(n, 1);
            break;
        }
    }
    static _runFrames() {
        var layerHash = {
        }, animations = this.animations, anim, layers, func, n, i, layersLen, layer, key, needRedraw;
        for(n = 0; n < animations.length; n++){
            anim = animations[n];
            layers = anim.layers;
            func = anim.func;
            anim._updateFrameObject(now());
            layersLen = layers.length;
            if (func) needRedraw = func.call(anim, anim.frame) !== false;
            else needRedraw = true;
            if (!needRedraw) continue;
            for(i = 0; i < layersLen; i++){
                layer = layers[i];
                if (layer._id !== undefined) layerHash[layer._id] = layer;
            }
        }
        for(key in layerHash){
            if (!layerHash.hasOwnProperty(key)) continue;
            layerHash[key].batchDraw();
        }
    }
    static _animationLoop() {
        var Anim = Animation;
        if (Anim.animations.length) {
            Anim._runFrames();
            _utilJs.Util.requestAnimFrame(Anim._animationLoop);
        } else Anim.animRunning = false;
    }
    static _handleAnimation() {
        if (!this.animRunning) {
            this.animRunning = true;
            _utilJs.Util.requestAnimFrame(this._animationLoop);
        }
    }
}
Animation.animations = [];
Animation.animIdCounter = 0;
Animation.animRunning = false;

},{"./Global.js":"1LGjN","./Util.js":"98XwR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8hEXD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tween", ()=>Tween
);
parcelHelpers.export(exports, "Easings", ()=>Easings
);
var _utilJs = require("./Util.js");
var _animationJs = require("./Animation.js");
var _nodeJs = require("./Node.js");
var _globalJs = require("./Global.js");
var blacklist = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
}, PAUSED = 1, PLAYING = 2, REVERSING = 3, idCounter = 0, colorAttrs = [
    'fill',
    'stroke',
    'shadowColor'
];
class TweenEngine {
    constructor(prop, propFunc, func, begin, finish, duration, yoyo){
        this.prop = prop;
        this.propFunc = propFunc;
        this.begin = begin;
        this._pos = begin;
        this.duration = duration;
        this._change = 0;
        this.prevPos = 0;
        this.yoyo = yoyo;
        this._time = 0;
        this._position = 0;
        this._startTime = 0;
        this._finish = 0;
        this.func = func;
        this._change = finish - this.begin;
        this.pause();
    }
    fire(str) {
        var handler = this[str];
        if (handler) handler();
    }
    setTime(t4) {
        if (t4 > this.duration) {
            if (this.yoyo) {
                this._time = this.duration;
                this.reverse();
            } else this.finish();
        } else if (t4 < 0) {
            if (this.yoyo) {
                this._time = 0;
                this.play();
            } else this.reset();
        } else {
            this._time = t4;
            this.update();
        }
    }
    getTime() {
        return this._time;
    }
    setPosition(p1) {
        this.prevPos = this._pos;
        this.propFunc(p1);
        this._pos = p1;
    }
    getPosition(t1) {
        if (t1 === undefined) t1 = this._time;
        return this.func(t1, this.begin, this._change, this.duration);
    }
    play() {
        this.state = PLAYING;
        this._startTime = this.getTimer() - this._time;
        this.onEnterFrame();
        this.fire('onPlay');
    }
    reverse() {
        this.state = REVERSING;
        this._time = this.duration - this._time;
        this._startTime = this.getTimer() - this._time;
        this.onEnterFrame();
        this.fire('onReverse');
    }
    seek(t2) {
        this.pause();
        this._time = t2;
        this.update();
        this.fire('onSeek');
    }
    reset() {
        this.pause();
        this._time = 0;
        this.update();
        this.fire('onReset');
    }
    finish() {
        this.pause();
        this._time = this.duration;
        this.update();
        this.fire('onFinish');
    }
    update() {
        this.setPosition(this.getPosition(this._time));
        this.fire('onUpdate');
    }
    onEnterFrame() {
        var t = this.getTimer() - this._startTime;
        if (this.state === PLAYING) this.setTime(t);
        else if (this.state === REVERSING) this.setTime(this.duration - t);
    }
    pause() {
        this.state = PAUSED;
        this.fire('onPause');
    }
    getTimer() {
        return new Date().getTime();
    }
}
class Tween {
    constructor(config){
        var that = this, node = config.node, nodeId = node._id, duration, easing = config.easing || Easings.Linear, yoyo = !!config.yoyo, key;
        if (typeof config.duration === 'undefined') duration = 0.3;
        else if (config.duration === 0) duration = 0.001;
        else duration = config.duration;
        this.node = node;
        this._id = idCounter++;
        var layers = node.getLayer() || (node instanceof _globalJs.Konva['Stage'] ? node.getLayers() : null);
        if (!layers) _utilJs.Util.error('Tween constructor have `node` that is not in a layer. Please add node into layer first.');
        this.anim = new _animationJs.Animation(function() {
            that.tween.onEnterFrame();
        }, layers);
        this.tween = new TweenEngine(key, function(i) {
            that._tweenFunc(i);
        }, easing, 0, 1, duration * 1000, yoyo);
        this._addListeners();
        if (!Tween.attrs[nodeId]) Tween.attrs[nodeId] = {
        };
        if (!Tween.attrs[nodeId][this._id]) Tween.attrs[nodeId][this._id] = {
        };
        if (!Tween.tweens[nodeId]) Tween.tweens[nodeId] = {
        };
        for(key in config)if (blacklist[key] === undefined) this._addAttr(key, config[key]);
        this.reset();
        this.onFinish = config.onFinish;
        this.onReset = config.onReset;
        this.onUpdate = config.onUpdate;
    }
    _addAttr(key, end) {
        var node = this.node, nodeId = node._id, start, diff, tweenId, n, len, trueEnd, trueStart, endRGBA;
        tweenId = Tween.tweens[nodeId][key];
        if (tweenId) delete Tween.attrs[nodeId][tweenId][key];
        start = node.getAttr(key);
        if (_utilJs.Util._isArray(end)) {
            diff = [];
            len = Math.max(end.length, start.length);
            if (key === 'points' && end.length !== start.length) {
                if (end.length > start.length) {
                    trueStart = start;
                    start = _utilJs.Util._prepareArrayForTween(start, end, node.closed());
                } else {
                    trueEnd = end;
                    end = _utilJs.Util._prepareArrayForTween(end, start, node.closed());
                }
            }
            if (key.indexOf('fill') === 0) {
                for(n = 0; n < len; n++)if (n % 2 === 0) diff.push(end[n] - start[n]);
                else {
                    var startRGBA = _utilJs.Util.colorToRGBA(start[n]);
                    endRGBA = _utilJs.Util.colorToRGBA(end[n]);
                    start[n] = startRGBA;
                    diff.push({
                        r: endRGBA.r - startRGBA.r,
                        g: endRGBA.g - startRGBA.g,
                        b: endRGBA.b - startRGBA.b,
                        a: endRGBA.a - startRGBA.a
                    });
                }
            } else for(n = 0; n < len; n++)diff.push(end[n] - start[n]);
        } else if (colorAttrs.indexOf(key) !== -1) {
            start = _utilJs.Util.colorToRGBA(start);
            endRGBA = _utilJs.Util.colorToRGBA(end);
            diff = {
                r: endRGBA.r - start.r,
                g: endRGBA.g - start.g,
                b: endRGBA.b - start.b,
                a: endRGBA.a - start.a
            };
        } else diff = end - start;
        Tween.attrs[nodeId][this._id][key] = {
            start: start,
            diff: diff,
            end: end,
            trueEnd: trueEnd,
            trueStart: trueStart
        };
        Tween.tweens[nodeId][key] = this._id;
    }
    _tweenFunc(i) {
        var node = this.node, attrs = Tween.attrs[node._id][this._id], key, attr, start, diff, newVal, n, len, end;
        for(key in attrs){
            attr = attrs[key];
            start = attr.start;
            diff = attr.diff;
            end = attr.end;
            if (_utilJs.Util._isArray(start)) {
                newVal = [];
                len = Math.max(start.length, end.length);
                if (key.indexOf('fill') === 0) {
                    for(n = 0; n < len; n++)if (n % 2 === 0) newVal.push((start[n] || 0) + diff[n] * i);
                    else newVal.push('rgba(' + Math.round(start[n].r + diff[n].r * i) + ',' + Math.round(start[n].g + diff[n].g * i) + ',' + Math.round(start[n].b + diff[n].b * i) + ',' + (start[n].a + diff[n].a * i) + ')');
                } else for(n = 0; n < len; n++)newVal.push((start[n] || 0) + diff[n] * i);
            } else if (colorAttrs.indexOf(key) !== -1) newVal = 'rgba(' + Math.round(start.r + diff.r * i) + ',' + Math.round(start.g + diff.g * i) + ',' + Math.round(start.b + diff.b * i) + ',' + (start.a + diff.a * i) + ')';
            else newVal = start + diff * i;
            node.setAttr(key, newVal);
        }
    }
    _addListeners() {
        this.tween.onPlay = ()=>{
            this.anim.start();
        };
        this.tween.onReverse = ()=>{
            this.anim.start();
        };
        this.tween.onPause = ()=>{
            this.anim.stop();
        };
        this.tween.onFinish = ()=>{
            var node = this.node;
            var attrs = Tween.attrs[node._id][this._id];
            if (attrs.points && attrs.points.trueEnd) node.setAttr('points', attrs.points.trueEnd);
            if (this.onFinish) this.onFinish.call(this);
        };
        this.tween.onReset = ()=>{
            var node = this.node;
            var attrs = Tween.attrs[node._id][this._id];
            if (attrs.points && attrs.points.trueStart) node.points(attrs.points.trueStart);
            if (this.onReset) this.onReset();
        };
        this.tween.onUpdate = ()=>{
            if (this.onUpdate) this.onUpdate.call(this);
        };
    }
    play() {
        this.tween.play();
        return this;
    }
    reverse() {
        this.tween.reverse();
        return this;
    }
    reset() {
        this.tween.reset();
        return this;
    }
    seek(t3) {
        this.tween.seek(t3 * 1000);
        return this;
    }
    pause() {
        this.tween.pause();
        return this;
    }
    finish() {
        this.tween.finish();
        return this;
    }
    destroy() {
        var nodeId = this.node._id, thisId = this._id, attrs = Tween.tweens[nodeId], key;
        this.pause();
        for(key in attrs)delete Tween.tweens[nodeId][key];
        delete Tween.attrs[nodeId][thisId];
    }
}
Tween.attrs = {
};
Tween.tweens = {
};
_nodeJs.Node.prototype.to = function(params) {
    var onFinish = params.onFinish;
    params.node = this;
    params.onFinish = function() {
        this.destroy();
        if (onFinish) onFinish();
    };
    var tween = new Tween(params);
    tween.play();
};
const Easings = {
    BackEaseIn (t, b, c, d) {
        var s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    BackEaseOut (t, b, c, d) {
        var s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    BackEaseInOut (t, b, c, d) {
        var s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    ElasticEaseIn (t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) return b;
        if ((t /= d) === 1) return b + c;
        if (!p) p = d * 0.3;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    ElasticEaseOut (t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) return b;
        if ((t /= d) === 1) return b + c;
        if (!p) p = d * 0.3;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    ElasticEaseInOut (t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) return b;
        if ((t /= d / 2) === 2) return b + c;
        if (!p) p = d * (0.3 * 1.5);
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    },
    BounceEaseOut (t, b, c, d) {
        if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;
        else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        else return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    },
    BounceEaseIn (t, b, c, d) {
        return c - Easings.BounceEaseOut(d - t, 0, c, d) + b;
    },
    BounceEaseInOut (t, b, c, d) {
        if (t < d / 2) return Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
        else return Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    },
    EaseIn (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    EaseOut (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    EaseInOut (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
    },
    StrongEaseIn (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    StrongEaseOut (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    StrongEaseInOut (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    Linear (t, b, c, d) {
        return c * t / d + b;
    }
};

},{"./Util.js":"98XwR","./Animation.js":"8fson","./Node.js":"em6vr","./Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"F7buL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Arc", ()=>Arc
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _globalJs = require("../Global.js");
var _validatorsJs = require("../Validators.js");
class Arc extends _shapeJs.Shape {
    _sceneFunc(context) {
        var angle = _globalJs.Konva.getAngle(this.angle()), clockwise = this.clockwise();
        context.beginPath();
        context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
        context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.outerRadius() * 2;
    }
    getHeight() {
        return this.outerRadius() * 2;
    }
    setWidth(width) {
        this.outerRadius(width / 2);
    }
    setHeight(height) {
        this.outerRadius(height / 2);
    }
}
Arc.prototype._centroid = true;
Arc.prototype.className = 'Arc';
Arc.prototype._attrsAffectingSize = [
    'innerRadius',
    'outerRadius'
];
_globalJs._registerNode(Arc);
_factoryJs.Factory.addGetterSetter(Arc, 'innerRadius', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Arc, 'outerRadius', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Arc, 'angle', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Arc, 'clockwise', false, _validatorsJs.getBooleanValidator());

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Global.js":"1LGjN","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6FMY7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Arrow", ()=>Arrow
);
var _factoryJs = require("../Factory.js");
var _lineJs = require("./Line.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
var _pathJs = require("./Path.js");
class Arrow extends _lineJs.Line {
    _sceneFunc(ctx) {
        super._sceneFunc(ctx);
        var PI2 = Math.PI * 2;
        var points = this.points();
        var tp = points;
        var fromTension = this.tension() !== 0 && points.length > 4;
        if (fromTension) tp = this.getTensionPoints();
        var length = this.pointerLength();
        var n = points.length;
        var dx, dy;
        if (fromTension) {
            const lp = [
                tp[tp.length - 4],
                tp[tp.length - 3],
                tp[tp.length - 2],
                tp[tp.length - 1],
                points[n - 2],
                points[n - 1], 
            ];
            const lastLength = _pathJs.Path.calcLength(tp[tp.length - 4], tp[tp.length - 3], 'C', lp);
            const previous = _pathJs.Path.getPointOnQuadraticBezier(Math.min(1, 1 - length / lastLength), lp[0], lp[1], lp[2], lp[3], lp[4], lp[5]);
            dx = points[n - 2] - previous.x;
            dy = points[n - 1] - previous.y;
        } else {
            dx = points[n - 2] - points[n - 4];
            dy = points[n - 1] - points[n - 3];
        }
        var radians = (Math.atan2(dy, dx) + PI2) % PI2;
        var width = this.pointerWidth();
        if (this.pointerAtEnding()) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(points[n - 2], points[n - 1]);
            ctx.rotate(radians);
            ctx.moveTo(0, 0);
            ctx.lineTo(-length, width / 2);
            ctx.lineTo(-length, -width / 2);
            ctx.closePath();
            ctx.restore();
            this.__fillStroke(ctx);
        }
        if (this.pointerAtBeginning()) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(points[0], points[1]);
            if (fromTension) {
                dx = (tp[0] + tp[2]) / 2 - points[0];
                dy = (tp[1] + tp[3]) / 2 - points[1];
            } else {
                dx = points[2] - points[0];
                dy = points[3] - points[1];
            }
            ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
            ctx.moveTo(0, 0);
            ctx.lineTo(-length, width / 2);
            ctx.lineTo(-length, -width / 2);
            ctx.closePath();
            ctx.restore();
            this.__fillStroke(ctx);
        }
    }
    __fillStroke(ctx1) {
        var isDashEnabled = this.dashEnabled();
        if (isDashEnabled) {
            this.attrs.dashEnabled = false;
            ctx1.setLineDash([]);
        }
        ctx1.fillStrokeShape(this);
        if (isDashEnabled) this.attrs.dashEnabled = true;
    }
    getSelfRect() {
        const lineRect = super.getSelfRect();
        const offset = this.pointerWidth() / 2;
        return {
            x: lineRect.x - offset,
            y: lineRect.y - offset,
            width: lineRect.width + offset * 2,
            height: lineRect.height + offset * 2
        };
    }
}
Arrow.prototype.className = 'Arrow';
_globalJs._registerNode(Arrow);
_factoryJs.Factory.addGetterSetter(Arrow, 'pointerLength', 10, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Arrow, 'pointerWidth', 10, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Arrow, 'pointerAtBeginning', false);
_factoryJs.Factory.addGetterSetter(Arrow, 'pointerAtEnding', true);

},{"../Factory.js":"ifTus","./Line.js":"8Ks45","../Validators.js":"5lPi2","../Global.js":"1LGjN","./Path.js":"8EWPy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Ks45":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Line", ()=>Line
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
function getControlPoints(x0, y0, x1, y1, x2, y2, t) {
    var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa = t * d01 / (d01 + d12), fb = t * d12 / (d01 + d12), p1x = x1 - fa * (x2 - x0), p1y = y1 - fa * (y2 - y0), p2x = x1 + fb * (x2 - x0), p2y = y1 + fb * (y2 - y0);
    return [
        p1x,
        p1y,
        p2x,
        p2y
    ];
}
function expandPoints(p, tension) {
    var len = p.length, allPoints = [], n, cp;
    for(n = 2; n < len - 2; n += 2){
        cp = getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
        if (isNaN(cp[0])) continue;
        allPoints.push(cp[0]);
        allPoints.push(cp[1]);
        allPoints.push(p[n]);
        allPoints.push(p[n + 1]);
        allPoints.push(cp[2]);
        allPoints.push(cp[3]);
    }
    return allPoints;
}
class Line extends _shapeJs.Shape {
    constructor(config){
        super(config);
        this.on('pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva', function() {
            this._clearCache('tensionPoints');
        });
    }
    _sceneFunc(context) {
        var points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier(), tp, len, n;
        if (!length) return;
        context.beginPath();
        context.moveTo(points[0], points[1]);
        if (tension !== 0 && length > 4) {
            tp = this.getTensionPoints();
            len = tp.length;
            n = closed ? 0 : 4;
            if (!closed) context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
            while(n < len - 2)context.bezierCurveTo(tp[n++], tp[n++], tp[n++], tp[n++], tp[n++], tp[n++]);
            if (!closed) context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
        } else if (bezier) {
            n = 2;
            while(n < length)context.bezierCurveTo(points[n++], points[n++], points[n++], points[n++], points[n++], points[n++]);
        } else for(n = 2; n < length; n += 2)context.lineTo(points[n], points[n + 1]);
        if (closed) {
            context.closePath();
            context.fillStrokeShape(this);
        } else context.strokeShape(this);
    }
    getTensionPoints() {
        return this._getCache('tensionPoints', this._getTensionPoints);
    }
    _getTensionPoints() {
        if (this.closed()) return this._getTensionPointsClosed();
        else return expandPoints(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
        var p = this.points(), len = p.length, tension = this.tension(), firstControlPoints = getControlPoints(p[len - 2], p[len - 1], p[0], p[1], p[2], p[3], tension), lastControlPoints = getControlPoints(p[len - 4], p[len - 3], p[len - 2], p[len - 1], p[0], p[1], tension), middle = expandPoints(p, tension), tp = [
            firstControlPoints[2],
            firstControlPoints[3]
        ].concat(middle).concat([
            lastControlPoints[0],
            lastControlPoints[1],
            p[len - 2],
            p[len - 1],
            lastControlPoints[2],
            lastControlPoints[3],
            firstControlPoints[0],
            firstControlPoints[1],
            p[0],
            p[1], 
        ]);
        return tp;
    }
    getWidth() {
        return this.getSelfRect().width;
    }
    getHeight() {
        return this.getSelfRect().height;
    }
    getSelfRect() {
        var points = this.points();
        if (points.length < 4) return {
            x: points[0] || 0,
            y: points[1] || 0,
            width: 0,
            height: 0
        };
        if (this.tension() !== 0) points = [
            points[0],
            points[1],
            ...this._getTensionPoints(),
            points[points.length - 2],
            points[points.length - 1], 
        ];
        else points = this.points();
        var minX = points[0];
        var maxX = points[0];
        var minY = points[1];
        var maxY = points[1];
        var x, y;
        for(var i = 0; i < points.length / 2; i++){
            x = points[i * 2];
            y = points[i * 2 + 1];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }
}
Line.prototype.className = 'Line';
Line.prototype._attrsAffectingSize = [
    'points',
    'bezier',
    'tension'
];
_globalJs._registerNode(Line);
_factoryJs.Factory.addGetterSetter(Line, 'closed', false);
_factoryJs.Factory.addGetterSetter(Line, 'bezier', false);
_factoryJs.Factory.addGetterSetter(Line, 'tension', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Line, 'points', [], _validatorsJs.getNumberArrayValidator());

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8EWPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Path", ()=>Path
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _globalJs = require("../Global.js");
class Path extends _shapeJs.Shape {
    constructor(config){
        super(config);
        this.dataArray = [];
        this.pathLength = 0;
        this.dataArray = Path.parsePathData(this.data());
        this.pathLength = 0;
        for(var i1 = 0; i1 < this.dataArray.length; ++i1)this.pathLength += this.dataArray[i1].pathLength;
        this.on('dataChange.konva', function() {
            this.dataArray = Path.parsePathData(this.data());
            this.pathLength = 0;
            for(var i = 0; i < this.dataArray.length; ++i)this.pathLength += this.dataArray[i].pathLength;
        });
    }
    _sceneFunc(context) {
        var ca = this.dataArray;
        context.beginPath();
        var isClosed = false;
        for(var n = 0; n < ca.length; n++){
            var c = ca[n].command;
            var p = ca[n].points;
            switch(c){
                case 'L':
                    context.lineTo(p[0], p[1]);
                    break;
                case 'M':
                    context.moveTo(p[0], p[1]);
                    break;
                case 'C':
                    context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                    break;
                case 'Q':
                    context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                    break;
                case 'A':
                    var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6], fs = p[7];
                    var r = rx > ry ? rx : ry;
                    var scaleX = rx > ry ? 1 : rx / ry;
                    var scaleY = rx > ry ? ry / rx : 1;
                    context.translate(cx, cy);
                    context.rotate(psi);
                    context.scale(scaleX, scaleY);
                    context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
                    context.scale(1 / scaleX, 1 / scaleY);
                    context.rotate(-psi);
                    context.translate(-cx, -cy);
                    break;
                case 'z':
                    isClosed = true;
                    context.closePath();
                    break;
            }
        }
        if (!isClosed && !this.hasFill()) context.strokeShape(this);
        else context.fillStrokeShape(this);
    }
    getSelfRect() {
        var points = [];
        this.dataArray.forEach(function(data) {
            if (data.command === 'A') {
                var start = data.points[4];
                var dTheta = data.points[5];
                var end = data.points[4] + dTheta;
                var inc = Math.PI / 180;
                if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
                if (dTheta < 0) for(let t = start - inc; t > end; t -= inc){
                    const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
                    points.push(point.x, point.y);
                }
                else for(let t1 = start + inc; t1 < end; t1 += inc){
                    const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t1, 0);
                    points.push(point.x, point.y);
                }
            } else if (data.command === 'C') for(let t = 0; t <= 1; t += 0.01){
                const point = Path.getPointOnCubicBezier(t, data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]);
                points.push(point.x, point.y);
            }
            else points = points.concat(data.points);
        });
        var minX = points[0];
        var maxX = points[0];
        var minY = points[1];
        var maxY = points[1];
        var x, y;
        for(var i = 0; i < points.length / 2; i++){
            x = points[i * 2];
            y = points[i * 2 + 1];
            if (!isNaN(x)) {
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
            }
            if (!isNaN(y)) {
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        }
        return {
            x: Math.round(minX),
            y: Math.round(minY),
            width: Math.round(maxX - minX),
            height: Math.round(maxY - minY)
        };
    }
    getLength() {
        return this.pathLength;
    }
    getPointAtLength(length) {
        var point, i = 0, ii = this.dataArray.length;
        if (!ii) return null;
        while(i < ii && length > this.dataArray[i].pathLength){
            length -= this.dataArray[i].pathLength;
            ++i;
        }
        if (i === ii) {
            point = this.dataArray[i - 1].points.slice(-2);
            return {
                x: point[0],
                y: point[1]
            };
        }
        if (length < 0.01) {
            point = this.dataArray[i].points.slice(0, 2);
            return {
                x: point[0],
                y: point[1]
            };
        }
        var cp = this.dataArray[i];
        var p = cp.points;
        switch(cp.command){
            case 'L':
                return Path.getPointOnLine(length, cp.start.x, cp.start.y, p[0], p[1]);
            case 'C':
                return Path.getPointOnCubicBezier(length / cp.pathLength, cp.start.x, cp.start.y, p[0], p[1], p[2], p[3], p[4], p[5]);
            case 'Q':
                return Path.getPointOnQuadraticBezier(length / cp.pathLength, cp.start.x, cp.start.y, p[0], p[1], p[2], p[3]);
            case 'A':
                var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6];
                theta += dTheta * length / cp.pathLength;
                return Path.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
        }
        return null;
    }
    static getLineLength(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
    static getPointOnLine(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
        if (fromX === undefined) fromX = P1x;
        if (fromY === undefined) fromY = P1y;
        var m = (P2y - P1y) / (P2x - P1x + 0.00000001);
        var run = Math.sqrt(dist * dist / (1 + m * m));
        if (P2x < P1x) run *= -1;
        var rise = m * run;
        var pt;
        if (P2x === P1x) pt = {
            x: fromX,
            y: fromY + rise
        };
        else if ((fromY - P1y) / (fromX - P1x + 0.00000001) === m) pt = {
            x: fromX + run,
            y: fromY + rise
        };
        else {
            var ix, iy;
            var len = this.getLineLength(P1x, P1y, P2x, P2y);
            var u = (fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y);
            u = u / (len * len);
            ix = P1x + u * (P2x - P1x);
            iy = P1y + u * (P2y - P1y);
            var pRise = this.getLineLength(fromX, fromY, ix, iy);
            var pRun = Math.sqrt(dist * dist - pRise * pRise);
            run = Math.sqrt(pRun * pRun / (1 + m * m));
            if (P2x < P1x) run *= -1;
            rise = m * run;
            pt = {
                x: ix + run,
                y: iy + rise
            };
        }
        return pt;
    }
    static getPointOnCubicBezier(pct, P1x1, P1y1, P2x1, P2y1, P3x, P3y, P4x, P4y) {
        function CB1(t) {
            return t * t * t;
        }
        function CB2(t) {
            return 3 * t * t * (1 - t);
        }
        function CB3(t) {
            return 3 * t * (1 - t) * (1 - t);
        }
        function CB4(t) {
            return (1 - t) * (1 - t) * (1 - t);
        }
        var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x1 * CB3(pct) + P1x1 * CB4(pct);
        var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y1 * CB3(pct) + P1y1 * CB4(pct);
        return {
            x: x,
            y: y
        };
    }
    static getPointOnQuadraticBezier(pct1, P1x2, P1y2, P2x2, P2y2, P3x1, P3y1) {
        function QB1(t) {
            return t * t;
        }
        function QB2(t) {
            return 2 * t * (1 - t);
        }
        function QB3(t) {
            return (1 - t) * (1 - t);
        }
        var x = P3x1 * QB1(pct1) + P2x2 * QB2(pct1) + P1x2 * QB3(pct1);
        var y = P3y1 * QB1(pct1) + P2y2 * QB2(pct1) + P1y2 * QB3(pct1);
        return {
            x: x,
            y: y
        };
    }
    static getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
        var cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
        var pt = {
            x: rx * Math.cos(theta),
            y: ry * Math.sin(theta)
        };
        return {
            x: cx + (pt.x * cosPsi - pt.y * sinPsi),
            y: cy + (pt.x * sinPsi + pt.y * cosPsi)
        };
    }
    static parsePathData(data) {
        if (!data) return [];
        var cs = data;
        var cc = [
            'm',
            'M',
            'l',
            'L',
            'v',
            'V',
            'h',
            'H',
            'z',
            'Z',
            'c',
            'C',
            'q',
            'Q',
            't',
            'T',
            's',
            'S',
            'a',
            'A', 
        ];
        cs = cs.replace(new RegExp(' ', 'g'), ',');
        for(var n = 0; n < cc.length; n++)cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
        var arr = cs.split('|');
        var ca = [];
        var coords = [];
        var cpx = 0;
        var cpy = 0;
        var re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
        var match;
        for(n = 1; n < arr.length; n++){
            var str = arr[n];
            var c = str.charAt(0);
            str = str.slice(1);
            coords.length = 0;
            while(match = re.exec(str))coords.push(match[0]);
            var p = [];
            for(var j = 0, jlen = coords.length; j < jlen; j++){
                if (coords[j] === '00') {
                    p.push(0, 0);
                    continue;
                }
                var parsed = parseFloat(coords[j]);
                if (!isNaN(parsed)) p.push(parsed);
                else p.push(0);
            }
            while(p.length > 0){
                if (isNaN(p[0])) break;
                var cmd = null;
                var points = [];
                var startX = cpx, startY = cpy;
                var prevCmd, ctlPtx, ctlPty;
                var rx, ry, psi, fa, fs, x1, y1;
                switch(c){
                    case 'l':
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'L':
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'm':
                        var dx = p.shift();
                        var dy = p.shift();
                        cpx += dx;
                        cpy += dy;
                        cmd = 'M';
                        if (ca.length > 2 && ca[ca.length - 1].command === 'z') {
                            for(var idx = ca.length - 2; idx >= 0; idx--)if (ca[idx].command === 'M') {
                                cpx = ca[idx].points[0] + dx;
                                cpy = ca[idx].points[1] + dy;
                                break;
                            }
                        }
                        points.push(cpx, cpy);
                        c = 'l';
                        break;
                    case 'M':
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'M';
                        points.push(cpx, cpy);
                        c = 'L';
                        break;
                    case 'h':
                        cpx += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'H':
                        cpx = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'v':
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'V':
                        cpy = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'C':
                        points.push(p.shift(), p.shift(), p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'c':
                        points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'S':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 's':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'Q':
                        points.push(p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'q':
                        points.push(cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(cpx, cpy);
                        break;
                    case 'T':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 't':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 'A':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();
                        x1 = cpx;
                        y1 = cpy;
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                    case 'a':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();
                        x1 = cpx;
                        y1 = cpy;
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                }
                ca.push({
                    command: cmd || c,
                    points: points,
                    start: {
                        x: startX,
                        y: startY
                    },
                    pathLength: this.calcLength(startX, startY, cmd || c, points)
                });
            }
            if (c === 'z' || c === 'Z') ca.push({
                command: 'z',
                points: [],
                start: undefined,
                pathLength: 0
            });
        }
        return ca;
    }
    static calcLength(x, y, cmd, points) {
        var len, p1, p2, t;
        var path = Path;
        switch(cmd){
            case 'L':
                return path.getLineLength(x, y, points[0], points[1]);
            case 'C':
                len = 0;
                p1 = path.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                for(t = 0.01; t <= 1; t += 0.01){
                    p2 = path.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'Q':
                len = 0;
                p1 = path.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                for(t = 0.01; t <= 1; t += 0.01){
                    p2 = path.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'A':
                len = 0;
                var start = points[4];
                var dTheta = points[5];
                var end = points[4] + dTheta;
                var inc = Math.PI / 180;
                if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
                p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                if (dTheta < 0) for(t = start - inc; t > end; t -= inc){
                    p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                else for(t = start + inc; t < end; t += inc){
                    p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                return len;
        }
        return 0;
    }
    static convertEndpointToCenterParameterization(x11, y11, x21, y21, fa, fs, rx1, ry1, psiDeg) {
        var psi = psiDeg * (Math.PI / 180);
        var xp = Math.cos(psi) * (x11 - x21) / 2 + Math.sin(psi) * (y11 - y21) / 2;
        var yp = -1 * Math.sin(psi) * (x11 - x21) / 2 + Math.cos(psi) * (y11 - y21) / 2;
        var lambda = xp * xp / (rx1 * rx1) + yp * yp / (ry1 * ry1);
        if (lambda > 1) {
            rx1 *= Math.sqrt(lambda);
            ry1 *= Math.sqrt(lambda);
        }
        var f = Math.sqrt((rx1 * rx1 * (ry1 * ry1) - rx1 * rx1 * (yp * yp) - ry1 * ry1 * (xp * xp)) / (rx1 * rx1 * (yp * yp) + ry1 * ry1 * (xp * xp)));
        if (fa === fs) f *= -1;
        if (isNaN(f)) f = 0;
        var cxp = f * rx1 * yp / ry1;
        var cyp = f * -ry1 * xp / rx1;
        var cx = (x11 + x21) / 2 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
        var cy = (y11 + y21) / 2 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
        var vMag = function(v) {
            return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
        };
        var vRatio = function(u, v) {
            return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
        };
        var vAngle = function(u, v) {
            return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
        };
        var theta = vAngle([
            1,
            0
        ], [
            (xp - cxp) / rx1,
            (yp - cyp) / ry1
        ]);
        var u1 = [
            (xp - cxp) / rx1,
            (yp - cyp) / ry1
        ];
        var v1 = [
            (-1 * xp - cxp) / rx1,
            (-1 * yp - cyp) / ry1
        ];
        var dTheta = vAngle(u1, v1);
        if (vRatio(u1, v1) <= -1) dTheta = Math.PI;
        if (vRatio(u1, v1) >= 1) dTheta = 0;
        if (fs === 0 && dTheta > 0) dTheta = dTheta - 2 * Math.PI;
        if (fs === 1 && dTheta < 0) dTheta = dTheta + 2 * Math.PI;
        return [
            cx,
            cy,
            rx1,
            ry1,
            theta,
            dTheta,
            psi,
            fs
        ];
    }
}
Path.prototype.className = 'Path';
Path.prototype._attrsAffectingSize = [
    'data'
];
_globalJs._registerNode(Path);
_factoryJs.Factory.addGetterSetter(Path, 'data');

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fTvxr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Circle", ()=>Circle
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
class Circle extends _shapeJs.Shape {
    _sceneFunc(context) {
        context.beginPath();
        context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.radius() * 2;
    }
    getHeight() {
        return this.radius() * 2;
    }
    setWidth(width) {
        if (this.radius() !== width / 2) this.radius(width / 2);
    }
    setHeight(height) {
        if (this.radius() !== height / 2) this.radius(height / 2);
    }
}
Circle.prototype._centroid = true;
Circle.prototype.className = 'Circle';
Circle.prototype._attrsAffectingSize = [
    'radius'
];
_globalJs._registerNode(Circle);
_factoryJs.Factory.addGetterSetter(Circle, 'radius', 0, _validatorsJs.getNumberValidator());

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4hjZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ellipse", ()=>Ellipse
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
class Ellipse extends _shapeJs.Shape {
    _sceneFunc(context) {
        var rx = this.radiusX(), ry = this.radiusY();
        context.beginPath();
        context.save();
        if (rx !== ry) context.scale(1, ry / rx);
        context.arc(0, 0, rx, 0, Math.PI * 2, false);
        context.restore();
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.radiusX() * 2;
    }
    getHeight() {
        return this.radiusY() * 2;
    }
    setWidth(width) {
        this.radiusX(width / 2);
    }
    setHeight(height) {
        this.radiusY(height / 2);
    }
}
Ellipse.prototype.className = 'Ellipse';
Ellipse.prototype._centroid = true;
Ellipse.prototype._attrsAffectingSize = [
    'radiusX',
    'radiusY'
];
_globalJs._registerNode(Ellipse);
_factoryJs.Factory.addComponentsGetterSetter(Ellipse, 'radius', [
    'x',
    'y'
]);
_factoryJs.Factory.addGetterSetter(Ellipse, 'radiusX', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Ellipse, 'radiusY', 0, _validatorsJs.getNumberValidator());

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fUwIk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Image", ()=>Image
);
var _utilJs = require("../Util.js");
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
class Image extends _shapeJs.Shape {
    constructor(attrs){
        super(attrs);
        this.on('imageChange.konva', ()=>{
            this._setImageLoad();
        });
        this._setImageLoad();
    }
    _setImageLoad() {
        const image = this.image();
        if (image && image.complete) return;
        if (image && image.readyState === 4) return;
        if (image && image['addEventListener']) image['addEventListener']('load', ()=>{
            this._requestDraw();
        });
    }
    _useBufferCanvas() {
        return super._useBufferCanvas(true);
    }
    _sceneFunc(context) {
        const width = this.getWidth();
        const height = this.getHeight();
        const image = this.attrs.image;
        let params;
        if (image) {
            const cropWidth = this.attrs.cropWidth;
            const cropHeight = this.attrs.cropHeight;
            if (cropWidth && cropHeight) params = [
                image,
                this.cropX(),
                this.cropY(),
                cropWidth,
                cropHeight,
                0,
                0,
                width,
                height, 
            ];
            else params = [
                image,
                0,
                0,
                width,
                height
            ];
        }
        if (this.hasFill() || this.hasStroke()) {
            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        }
        if (image) context.drawImage.apply(context, params);
    }
    _hitFunc(context1) {
        var width = this.width(), height = this.height();
        context1.beginPath();
        context1.rect(0, 0, width, height);
        context1.closePath();
        context1.fillStrokeShape(this);
    }
    getWidth() {
        var _a, _b;
        return (_a = this.attrs.width) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.width;
    }
    getHeight() {
        var _a, _b;
        return (_a = this.attrs.height) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.height;
    }
    static fromURL(url, callback) {
        var img = _utilJs.Util.createImageElement();
        img.onload = function() {
            var image = new Image({
                image: img
            });
            callback(image);
        };
        img.crossOrigin = 'Anonymous';
        img.src = url;
    }
}
Image.prototype.className = 'Image';
_globalJs._registerNode(Image);
_factoryJs.Factory.addGetterSetter(Image, 'image');
_factoryJs.Factory.addComponentsGetterSetter(Image, 'crop', [
    'x',
    'y',
    'width',
    'height'
]);
_factoryJs.Factory.addGetterSetter(Image, 'cropX', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Image, 'cropY', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Image, 'cropWidth', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Image, 'cropHeight', 0, _validatorsJs.getNumberValidator());

},{"../Util.js":"98XwR","../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7pquy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Label", ()=>Label
);
parcelHelpers.export(exports, "Tag", ()=>Tag
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _groupJs = require("../Group.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
var ATTR_CHANGE_LIST = [
    'fontFamily',
    'fontSize',
    'fontStyle',
    'padding',
    'lineHeight',
    'text',
    'width',
    'height', 
], CHANGE_KONVA = 'Change.konva', NONE = 'none', UP = 'up', RIGHT = 'right', DOWN = 'down', LEFT = 'left', attrChangeListLen = ATTR_CHANGE_LIST.length;
class Label extends _groupJs.Group {
    constructor(config){
        super(config);
        this.on('add.konva', function(evt) {
            this._addListeners(evt.child);
            this._sync();
        });
    }
    getText() {
        return this.find('Text')[0];
    }
    getTag() {
        return this.find('Tag')[0];
    }
    _addListeners(text) {
        var that = this, n;
        var func = function() {
            that._sync();
        };
        for(n = 0; n < attrChangeListLen; n++)text.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, func);
    }
    getWidth() {
        return this.getText().width();
    }
    getHeight() {
        return this.getText().height();
    }
    _sync() {
        var text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x, y, pointerHeight;
        if (text && tag) {
            width = text.width();
            height = text.height();
            pointerDirection = tag.pointerDirection();
            pointerWidth = tag.pointerWidth();
            pointerHeight = tag.pointerHeight();
            x = 0;
            y = 0;
            switch(pointerDirection){
                case UP:
                    x = width / 2;
                    y = -1 * pointerHeight;
                    break;
                case RIGHT:
                    x = width + pointerWidth;
                    y = height / 2;
                    break;
                case DOWN:
                    x = width / 2;
                    y = height + pointerHeight;
                    break;
                case LEFT:
                    x = -1 * pointerWidth;
                    y = height / 2;
                    break;
            }
            tag.setAttrs({
                x: -1 * x,
                y: -1 * y,
                width: width,
                height: height
            });
            text.setAttrs({
                x: -1 * x,
                y: -1 * y
            });
        }
    }
}
Label.prototype.className = 'Label';
_globalJs._registerNode(Label);
class Tag extends _shapeJs.Shape {
    _sceneFunc(context) {
        var width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
        let topLeft = 0;
        let topRight = 0;
        let bottomLeft = 0;
        let bottomRight = 0;
        if (typeof cornerRadius === 'number') topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
        else {
            topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
            topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
            bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
            bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
        }
        context.beginPath();
        context.moveTo(topLeft, 0);
        if (pointerDirection === UP) {
            context.lineTo((width - pointerWidth) / 2, 0);
            context.lineTo(width / 2, -1 * pointerHeight);
            context.lineTo((width + pointerWidth) / 2, 0);
        }
        context.lineTo(width - topRight, 0);
        context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
        if (pointerDirection === RIGHT) {
            context.lineTo(width, (height - pointerHeight) / 2);
            context.lineTo(width + pointerWidth, height / 2);
            context.lineTo(width, (height + pointerHeight) / 2);
        }
        context.lineTo(width, height - bottomRight);
        context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
        if (pointerDirection === DOWN) {
            context.lineTo((width + pointerWidth) / 2, height);
            context.lineTo(width / 2, height + pointerHeight);
            context.lineTo((width - pointerWidth) / 2, height);
        }
        context.lineTo(bottomLeft, height);
        context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
        if (pointerDirection === LEFT) {
            context.lineTo(0, (height + pointerHeight) / 2);
            context.lineTo(-1 * pointerWidth, height / 2);
            context.lineTo(0, (height - pointerHeight) / 2);
        }
        context.lineTo(0, topLeft);
        context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getSelfRect() {
        var x = 0, y = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
        if (direction === UP) {
            y -= pointerHeight;
            height += pointerHeight;
        } else if (direction === DOWN) height += pointerHeight;
        else if (direction === LEFT) {
            x -= pointerWidth * 1.5;
            width += pointerWidth;
        } else if (direction === RIGHT) width += pointerWidth * 1.5;
        return {
            x: x,
            y: y,
            width: width,
            height: height
        };
    }
}
Tag.prototype.className = 'Tag';
_globalJs._registerNode(Tag);
_factoryJs.Factory.addGetterSetter(Tag, 'pointerDirection', NONE);
_factoryJs.Factory.addGetterSetter(Tag, 'pointerWidth', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Tag, 'pointerHeight', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Tag, 'cornerRadius', 0, _validatorsJs.getNumberOrArrayOfNumbersValidator(4));

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Group.js":"ijBUs","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ic9u2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rect", ()=>Rect
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _globalJs = require("../Global.js");
var _validatorsJs = require("../Validators.js");
class Rect extends _shapeJs.Shape {
    _sceneFunc(context) {
        var cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
        context.beginPath();
        if (!cornerRadius) context.rect(0, 0, width, height);
        else {
            let topLeft = 0;
            let topRight = 0;
            let bottomLeft = 0;
            let bottomRight = 0;
            if (typeof cornerRadius === 'number') topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
            else {
                topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
                topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
                bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
                bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
            }
            context.moveTo(topLeft, 0);
            context.lineTo(width - topRight, 0);
            context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
            context.lineTo(width, height - bottomRight);
            context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
            context.lineTo(bottomLeft, height);
            context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
            context.lineTo(0, topLeft);
            context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
        }
        context.closePath();
        context.fillStrokeShape(this);
    }
}
Rect.prototype.className = 'Rect';
_globalJs._registerNode(Rect);
_factoryJs.Factory.addGetterSetter(Rect, 'cornerRadius', 0, _validatorsJs.getNumberOrArrayOfNumbersValidator(4));

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Global.js":"1LGjN","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gCizK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegularPolygon", ()=>RegularPolygon
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
class RegularPolygon extends _shapeJs.Shape {
    _sceneFunc(context) {
        const points = this._getPoints();
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for(var n = 1; n < points.length; n++)context.lineTo(points[n].x, points[n].y);
        context.closePath();
        context.fillStrokeShape(this);
    }
    _getPoints() {
        const sides = this.attrs.sides;
        const radius = this.attrs.radius || 0;
        const points = [];
        for(var n = 0; n < sides; n++)points.push({
            x: radius * Math.sin(n * 2 * Math.PI / sides),
            y: -1 * radius * Math.cos(n * 2 * Math.PI / sides)
        });
        return points;
    }
    getSelfRect() {
        const points = this._getPoints();
        var minX = points[0].x;
        var maxX = points[0].y;
        var minY = points[0].x;
        var maxY = points[0].y;
        points.forEach((point)=>{
            minX = Math.min(minX, point.x);
            maxX = Math.max(maxX, point.x);
            minY = Math.min(minY, point.y);
            maxY = Math.max(maxY, point.y);
        });
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }
    getWidth() {
        return this.radius() * 2;
    }
    getHeight() {
        return this.radius() * 2;
    }
    setWidth(width) {
        this.radius(width / 2);
    }
    setHeight(height) {
        this.radius(height / 2);
    }
}
RegularPolygon.prototype.className = 'RegularPolygon';
RegularPolygon.prototype._centroid = true;
RegularPolygon.prototype._attrsAffectingSize = [
    'radius'
];
_globalJs._registerNode(RegularPolygon);
_factoryJs.Factory.addGetterSetter(RegularPolygon, 'radius', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(RegularPolygon, 'sides', 0, _validatorsJs.getNumberValidator());

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4Piwf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ring", ()=>Ring
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
var PIx2 = Math.PI * 2;
class Ring extends _shapeJs.Shape {
    _sceneFunc(context) {
        context.beginPath();
        context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
        context.moveTo(this.outerRadius(), 0);
        context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.outerRadius() * 2;
    }
    getHeight() {
        return this.outerRadius() * 2;
    }
    setWidth(width) {
        this.outerRadius(width / 2);
    }
    setHeight(height) {
        this.outerRadius(height / 2);
    }
}
Ring.prototype.className = 'Ring';
Ring.prototype._centroid = true;
Ring.prototype._attrsAffectingSize = [
    'innerRadius',
    'outerRadius'
];
_globalJs._registerNode(Ring);
_factoryJs.Factory.addGetterSetter(Ring, 'innerRadius', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Ring, 'outerRadius', 0, _validatorsJs.getNumberValidator());

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7o4Iq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sprite", ()=>Sprite
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _animationJs = require("../Animation.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
class Sprite extends _shapeJs.Shape {
    constructor(config){
        super(config);
        this._updated = true;
        this.anim = new _animationJs.Animation(()=>{
            var updated = this._updated;
            this._updated = false;
            return updated;
        });
        this.on('animationChange.konva', function() {
            this.frameIndex(0);
        });
        this.on('frameIndexChange.konva', function() {
            this._updated = true;
        });
        this.on('frameRateChange.konva', function() {
            if (!this.anim.isRunning()) return;
            clearInterval(this.interval);
            this._setInterval();
        });
    }
    _sceneFunc(context) {
        var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x = set[ix4 + 0], y = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
        if (this.hasFill() || this.hasStroke()) {
            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        }
        if (image) {
            if (offsets) {
                var offset = offsets[anim], ix2 = index * 2;
                context.drawImage(image, x, y, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
            } else context.drawImage(image, x, y, width, height, 0, 0, width, height);
        }
    }
    _hitFunc(context1) {
        var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
        context1.beginPath();
        if (offsets) {
            var offset = offsets[anim];
            var ix2 = index * 2;
            context1.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
        } else context1.rect(0, 0, width, height);
        context1.closePath();
        context1.fillShape(this);
    }
    _useBufferCanvas() {
        return super._useBufferCanvas(true);
    }
    _setInterval() {
        var that = this;
        this.interval = setInterval(function() {
            that._updateIndex();
        }, 1000 / this.frameRate());
    }
    start() {
        if (this.isRunning()) return;
        var layer = this.getLayer();
        this.anim.setLayers(layer);
        this._setInterval();
        this.anim.start();
    }
    stop() {
        this.anim.stop();
        clearInterval(this.interval);
    }
    isRunning() {
        return this.anim.isRunning();
    }
    _updateIndex() {
        var index = this.frameIndex(), animation = this.animation(), animations = this.animations(), anim = animations[animation], len = anim.length / 4;
        if (index < len - 1) this.frameIndex(index + 1);
        else this.frameIndex(0);
    }
}
Sprite.prototype.className = 'Sprite';
_globalJs._registerNode(Sprite);
_factoryJs.Factory.addGetterSetter(Sprite, 'animation');
_factoryJs.Factory.addGetterSetter(Sprite, 'animations');
_factoryJs.Factory.addGetterSetter(Sprite, 'frameOffsets');
_factoryJs.Factory.addGetterSetter(Sprite, 'image');
_factoryJs.Factory.addGetterSetter(Sprite, 'frameIndex', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Sprite, 'frameRate', 17, _validatorsJs.getNumberValidator());
_factoryJs.Factory.backCompat(Sprite, {
    index: 'frameIndex',
    getIndex: 'getFrameIndex',
    setIndex: 'setFrameIndex'
});

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Animation.js":"8fson","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bxaXl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Star", ()=>Star
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
class Star extends _shapeJs.Shape {
    _sceneFunc(context) {
        var innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
        context.beginPath();
        context.moveTo(0, 0 - outerRadius);
        for(var n = 1; n < numPoints * 2; n++){
            var radius = n % 2 === 0 ? outerRadius : innerRadius;
            var x = radius * Math.sin(n * Math.PI / numPoints);
            var y = -1 * radius * Math.cos(n * Math.PI / numPoints);
            context.lineTo(x, y);
        }
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.outerRadius() * 2;
    }
    getHeight() {
        return this.outerRadius() * 2;
    }
    setWidth(width) {
        this.outerRadius(width / 2);
    }
    setHeight(height) {
        this.outerRadius(height / 2);
    }
}
Star.prototype.className = 'Star';
Star.prototype._centroid = true;
Star.prototype._attrsAffectingSize = [
    'innerRadius',
    'outerRadius'
];
_globalJs._registerNode(Star);
_factoryJs.Factory.addGetterSetter(Star, 'numPoints', 5, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Star, 'innerRadius', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Star, 'outerRadius', 0, _validatorsJs.getNumberValidator());

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dzdPT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringToArray", ()=>stringToArray
);
parcelHelpers.export(exports, "Text", ()=>Text
);
var _utilJs = require("../Util.js");
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
function stringToArray(string) {
    return Array.from(string);
}
var AUTO = 'auto', CENTER = 'center', JUSTIFY = 'justify', CHANGE_KONVA = 'Change.konva', CONTEXT_2D = '2d', DASH = '-', LEFT = 'left', TEXT = 'text', TEXT_UPPER = 'Text', TOP = 'top', BOTTOM = 'bottom', MIDDLE = 'middle', NORMAL = 'normal', PX_SPACE = 'px ', SPACE = ' ', RIGHT = 'right', WORD = 'word', CHAR = 'char', NONE = 'none', ELLIPSIS = '…', ATTR_CHANGE_LIST = [
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontVariant',
    'padding',
    'align',
    'verticalAlign',
    'lineHeight',
    'text',
    'width',
    'height',
    'wrap',
    'ellipsis',
    'letterSpacing', 
], attrChangeListLen = ATTR_CHANGE_LIST.length;
function normalizeFontFamily(fontFamily) {
    return fontFamily.split(',').map((family)=>{
        family = family.trim();
        const hasSpace = family.indexOf(' ') >= 0;
        const hasQuotes = family.indexOf('"') >= 0 || family.indexOf("'") >= 0;
        if (hasSpace && !hasQuotes) family = `"${family}"`;
        return family;
    }).join(', ');
}
var dummyContext;
function getDummyContext() {
    if (dummyContext) return dummyContext;
    dummyContext = _utilJs.Util.createCanvasElement().getContext(CONTEXT_2D);
    return dummyContext;
}
function _fillFunc(context) {
    context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _strokeFunc(context) {
    context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
    config = config || {
    };
    if (!config.fillLinearGradientColorStops && !config.fillRadialGradientColorStops && !config.fillPatternImage) config.fill = config.fill || 'black';
    return config;
}
class Text extends _shapeJs.Shape {
    constructor(config){
        super(checkDefaultFill(config));
        this._partialTextX = 0;
        this._partialTextY = 0;
        for(var n = 0; n < attrChangeListLen; n++)this.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, this._setTextData);
        this._setTextData();
    }
    _sceneFunc(context) {
        var textArr = this.textArr, textArrLen = textArr.length;
        if (!this.text()) return;
        var padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), fill = this.fill(), textDecoration = this.textDecoration(), shouldUnderline = textDecoration.indexOf('underline') !== -1, shouldLineThrough = textDecoration.indexOf('line-through') !== -1, n;
        var translateY = 0;
        var translateY = lineHeightPx / 2;
        var lineTranslateX = 0;
        var lineTranslateY = 0;
        context.setAttr('font', this._getContextFont());
        context.setAttr('textBaseline', MIDDLE);
        context.setAttr('textAlign', LEFT);
        if (verticalAlign === MIDDLE) alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
        else if (verticalAlign === BOTTOM) alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
        context.translate(padding, alignY + padding);
        for(n = 0; n < textArrLen; n++){
            var lineTranslateX = 0;
            var lineTranslateY = 0;
            var obj = textArr[n], text = obj.text, width = obj.width, lastLine = n !== textArrLen - 1, spacesNumber, oneWord, lineWidth;
            context.save();
            if (align === RIGHT) lineTranslateX += totalWidth - width - padding * 2;
            else if (align === CENTER) lineTranslateX += (totalWidth - width - padding * 2) / 2;
            if (shouldUnderline) {
                context.save();
                context.beginPath();
                context.moveTo(lineTranslateX, translateY + lineTranslateY + Math.round(fontSize / 2));
                spacesNumber = text.split(' ').length - 1;
                oneWord = spacesNumber === 0;
                lineWidth = align === JUSTIFY && lastLine && !oneWord ? totalWidth - padding * 2 : width;
                context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY + Math.round(fontSize / 2));
                context.lineWidth = fontSize / 15;
                context.strokeStyle = fill;
                context.stroke();
                context.restore();
            }
            if (shouldLineThrough) {
                context.save();
                context.beginPath();
                context.moveTo(lineTranslateX, translateY + lineTranslateY);
                spacesNumber = text.split(' ').length - 1;
                oneWord = spacesNumber === 0;
                lineWidth = align === JUSTIFY && lastLine && !oneWord ? totalWidth - padding * 2 : width;
                context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY);
                context.lineWidth = fontSize / 15;
                context.strokeStyle = fill;
                context.stroke();
                context.restore();
            }
            if (letterSpacing !== 0 || align === JUSTIFY) {
                spacesNumber = text.split(' ').length - 1;
                var array = stringToArray(text);
                for(var li = 0; li < array.length; li++){
                    var letter = array[li];
                    if (letter === ' ' && n !== textArrLen - 1 && align === JUSTIFY) lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
                    this._partialTextX = lineTranslateX;
                    this._partialTextY = translateY + lineTranslateY;
                    this._partialText = letter;
                    context.fillStrokeShape(this);
                    lineTranslateX += this.measureSize(letter).width + letterSpacing;
                }
            } else {
                this._partialTextX = lineTranslateX;
                this._partialTextY = translateY + lineTranslateY;
                this._partialText = text;
                context.fillStrokeShape(this);
            }
            context.restore();
            if (textArrLen > 1) translateY += lineHeightPx;
        }
    }
    _hitFunc(context1) {
        var width = this.getWidth(), height = this.getHeight();
        context1.beginPath();
        context1.rect(0, 0, width, height);
        context1.closePath();
        context1.fillStrokeShape(this);
    }
    setText(text) {
        var str = _utilJs.Util._isString(text) ? text : text === null || text === undefined ? '' : text + '';
        this._setAttr(TEXT, str);
        return this;
    }
    getWidth() {
        var isAuto = this.attrs.width === AUTO || this.attrs.width === undefined;
        return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
        var isAuto = this.attrs.height === AUTO || this.attrs.height === undefined;
        return isAuto ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
    }
    getTextWidth() {
        return this.textWidth;
    }
    getTextHeight() {
        _utilJs.Util.warn('text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.');
        return this.textHeight;
    }
    measureSize(text1) {
        var _context = getDummyContext(), fontSize = this.fontSize(), metrics;
        _context.save();
        _context.font = this._getContextFont();
        metrics = _context.measureText(text1);
        _context.restore();
        return {
            width: metrics.width,
            height: fontSize
        };
    }
    _getContextFont() {
        return this.fontStyle() + SPACE + this.fontVariant() + SPACE + (this.fontSize() + PX_SPACE) + normalizeFontFamily(this.fontFamily());
    }
    _addTextLine(line) {
        if (this.align() === JUSTIFY) line = line.trim();
        var width = this._getTextWidth(line);
        return this.textArr.push({
            text: line,
            width: width
        });
    }
    _getTextWidth(text2) {
        var letterSpacing = this.letterSpacing();
        var length = text2.length;
        return getDummyContext().measureText(text2).width + (length ? letterSpacing * (length - 1) : 0);
    }
    _setTextData() {
        var lines = this.text().split('\n'), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== undefined, fixedHeight = height !== AUTO && height !== undefined, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== NONE, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis();
        this.textArr = [];
        getDummyContext().font = this._getContextFont();
        var additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
        for(var i = 0, max = lines.length; i < max; ++i){
            var line = lines[i];
            var lineWidth = this._getTextWidth(line);
            if (fixedWidth && lineWidth > maxWidth) while(line.length > 0){
                var low = 0, high = line.length, match = '', matchWidth = 0;
                while(low < high){
                    var mid = low + high >>> 1, substr = line.slice(0, mid + 1), substrWidth = this._getTextWidth(substr) + additionalWidth;
                    if (substrWidth <= maxWidth) {
                        low = mid + 1;
                        match = substr;
                        matchWidth = substrWidth;
                    } else high = mid;
                }
                if (match) {
                    if (wrapAtWord) {
                        var wrapIndex;
                        var nextChar = line[match.length];
                        var nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
                        if (nextIsSpaceOrDash && matchWidth <= maxWidth) wrapIndex = match.length;
                        else wrapIndex = Math.max(match.lastIndexOf(SPACE), match.lastIndexOf(DASH)) + 1;
                        if (wrapIndex > 0) {
                            low = wrapIndex;
                            match = match.slice(0, low);
                            matchWidth = this._getTextWidth(match);
                        }
                    }
                    match = match.trimRight();
                    this._addTextLine(match);
                    textWidth = Math.max(textWidth, matchWidth);
                    currentHeightPx += lineHeightPx;
                    if (!shouldWrap || fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
                        var lastLine = this.textArr[this.textArr.length - 1];
                        if (lastLine) {
                            if (shouldAddEllipsis) {
                                var haveSpace = this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth;
                                if (!haveSpace) lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
                                this.textArr.splice(this.textArr.length - 1, 1);
                                this._addTextLine(lastLine.text + ELLIPSIS);
                            }
                        }
                        break;
                    }
                    line = line.slice(low);
                    line = line.trimLeft();
                    if (line.length > 0) {
                        lineWidth = this._getTextWidth(line);
                        if (lineWidth <= maxWidth) {
                            this._addTextLine(line);
                            currentHeightPx += lineHeightPx;
                            textWidth = Math.max(textWidth, lineWidth);
                            break;
                        }
                    }
                } else break;
            }
            else {
                this._addTextLine(line);
                currentHeightPx += lineHeightPx;
                textWidth = Math.max(textWidth, lineWidth);
            }
            if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) break;
        }
        this.textHeight = fontSize;
        this.textWidth = textWidth;
    }
    getStrokeScaleEnabled() {
        return true;
    }
}
Text.prototype._fillFunc = _fillFunc;
Text.prototype._strokeFunc = _strokeFunc;
Text.prototype.className = TEXT_UPPER;
Text.prototype._attrsAffectingSize = [
    'text',
    'fontSize',
    'padding',
    'wrap',
    'lineHeight',
    'letterSpacing', 
];
_globalJs._registerNode(Text);
_factoryJs.Factory.overWriteSetter(Text, 'width', _validatorsJs.getNumberOrAutoValidator());
_factoryJs.Factory.overWriteSetter(Text, 'height', _validatorsJs.getNumberOrAutoValidator());
_factoryJs.Factory.addGetterSetter(Text, 'fontFamily', 'Arial');
_factoryJs.Factory.addGetterSetter(Text, 'fontSize', 12, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Text, 'fontStyle', NORMAL);
_factoryJs.Factory.addGetterSetter(Text, 'fontVariant', NORMAL);
_factoryJs.Factory.addGetterSetter(Text, 'padding', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Text, 'align', LEFT);
_factoryJs.Factory.addGetterSetter(Text, 'verticalAlign', TOP);
_factoryJs.Factory.addGetterSetter(Text, 'lineHeight', 1, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Text, 'wrap', WORD);
_factoryJs.Factory.addGetterSetter(Text, 'ellipsis', false, _validatorsJs.getBooleanValidator());
_factoryJs.Factory.addGetterSetter(Text, 'letterSpacing', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Text, 'text', '', _validatorsJs.getStringValidator());
_factoryJs.Factory.addGetterSetter(Text, 'textDecoration', '');

},{"../Util.js":"98XwR","../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"30jgk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextPath", ()=>TextPath
);
var _utilJs = require("../Util.js");
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _pathJs = require("./Path.js");
var _textJs = require("./Text.js");
var _validatorsJs = require("../Validators.js");
var _globalJs = require("../Global.js");
var EMPTY_STRING = '', NORMAL = 'normal';
function _fillFunc(context) {
    context.fillText(this.partialText, 0, 0);
}
function _strokeFunc(context) {
    context.strokeText(this.partialText, 0, 0);
}
class TextPath extends _shapeJs.Shape {
    constructor(config){
        super(config);
        this.dummyCanvas = _utilJs.Util.createCanvasElement();
        this.dataArray = [];
        this.dataArray = _pathJs.Path.parsePathData(this.attrs.data);
        this.on('dataChange.konva', function() {
            this.dataArray = _pathJs.Path.parsePathData(this.attrs.data);
            this._setTextData();
        });
        this.on('textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva', this._setTextData);
        this._setTextData();
    }
    _sceneFunc(context) {
        context.setAttr('font', this._getContextFont());
        context.setAttr('textBaseline', this.textBaseline());
        context.setAttr('textAlign', 'left');
        context.save();
        var textDecoration = this.textDecoration();
        var fill = this.fill();
        var fontSize = this.fontSize();
        var glyphInfo = this.glyphInfo;
        if (textDecoration === 'underline') context.beginPath();
        for(var i = 0; i < glyphInfo.length; i++){
            context.save();
            var p0 = glyphInfo[i].p0;
            context.translate(p0.x, p0.y);
            context.rotate(glyphInfo[i].rotation);
            this.partialText = glyphInfo[i].text;
            context.fillStrokeShape(this);
            if (textDecoration === 'underline') {
                if (i === 0) context.moveTo(0, fontSize / 2 + 1);
                context.lineTo(fontSize, fontSize / 2 + 1);
            }
            context.restore();
        }
        if (textDecoration === 'underline') {
            context.strokeStyle = fill;
            context.lineWidth = fontSize / 20;
            context.stroke();
        }
        context.restore();
    }
    _hitFunc(context1) {
        context1.beginPath();
        var glyphInfo = this.glyphInfo;
        if (glyphInfo.length >= 1) {
            var p0 = glyphInfo[0].p0;
            context1.moveTo(p0.x, p0.y);
        }
        for(var i = 0; i < glyphInfo.length; i++){
            var p1 = glyphInfo[i].p1;
            context1.lineTo(p1.x, p1.y);
        }
        context1.setAttr('lineWidth', this.fontSize());
        context1.setAttr('strokeStyle', this.colorKey);
        context1.stroke();
    }
    getTextWidth() {
        return this.textWidth;
    }
    getTextHeight() {
        _utilJs.Util.warn('text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.');
        return this.textHeight;
    }
    setText(text) {
        return _textJs.Text.prototype.setText.call(this, text);
    }
    _getContextFont() {
        return _textJs.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(text1) {
        var dummyCanvas = this.dummyCanvas;
        var _context = dummyCanvas.getContext('2d');
        _context.save();
        _context.font = this._getContextFont();
        var metrics = _context.measureText(text1);
        _context.restore();
        return {
            width: metrics.width,
            height: parseInt(this.attrs.fontSize, 10)
        };
    }
    _setTextData() {
        var that = this;
        var size = this._getTextSize(this.attrs.text);
        var letterSpacing = this.letterSpacing();
        var align = this.align();
        var kerningFunc = this.kerningFunc();
        this.textWidth = size.width;
        this.textHeight = size.height;
        var textFullWidth = Math.max(this.textWidth + ((this.attrs.text || '').length - 1) * letterSpacing, 0);
        this.glyphInfo = [];
        var fullPathWidth = 0;
        for(var l = 0; l < that.dataArray.length; l++)if (that.dataArray[l].pathLength > 0) fullPathWidth += that.dataArray[l].pathLength;
        var offset = 0;
        if (align === 'center') offset = Math.max(0, fullPathWidth / 2 - textFullWidth / 2);
        if (align === 'right') offset = Math.max(0, fullPathWidth - textFullWidth);
        var charArr = _textJs.stringToArray(this.text());
        var spacesNumber = this.text().split(' ').length - 1;
        var p0, p1, pathCmd;
        var pIndex = -1;
        var currentT = 0;
        var getNextPathSegment = function() {
            currentT = 0;
            var pathData = that.dataArray;
            for(var j = pIndex + 1; j < pathData.length; j++){
                if (pathData[j].pathLength > 0) {
                    pIndex = j;
                    return pathData[j];
                } else if (pathData[j].command === 'M') p0 = {
                    x: pathData[j].points[0],
                    y: pathData[j].points[1]
                };
            }
            return {
            };
        };
        var findSegmentToFitCharacter = function(c) {
            var glyphWidth = that._getTextSize(c).width + letterSpacing;
            if (c === ' ' && align === 'justify') glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
            var currLen = 0;
            var attempts = 0;
            p1 = undefined;
            while(Math.abs(glyphWidth - currLen) / glyphWidth > 0.01 && attempts < 20){
                attempts++;
                var cumulativePathLength = currLen;
                while(pathCmd === undefined){
                    pathCmd = getNextPathSegment();
                    if (pathCmd && cumulativePathLength + pathCmd.pathLength < glyphWidth) {
                        cumulativePathLength += pathCmd.pathLength;
                        pathCmd = undefined;
                    }
                }
                if (pathCmd === {
                } || p0 === undefined) return undefined;
                var needNewSegment = false;
                switch(pathCmd.command){
                    case 'L':
                        if (_pathJs.Path.getLineLength(p0.x, p0.y, pathCmd.points[0], pathCmd.points[1]) > glyphWidth) p1 = _pathJs.Path.getPointOnLine(glyphWidth, p0.x, p0.y, pathCmd.points[0], pathCmd.points[1], p0.x, p0.y);
                        else pathCmd = undefined;
                        break;
                    case 'A':
                        var start = pathCmd.points[4];
                        var dTheta = pathCmd.points[5];
                        var end = pathCmd.points[4] + dTheta;
                        if (currentT === 0) currentT = start + 0.00000001;
                        else if (glyphWidth > currLen) currentT += Math.PI / 180 * dTheta / Math.abs(dTheta);
                        else currentT -= Math.PI / 360 * dTheta / Math.abs(dTheta);
                        if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                            currentT = end;
                            needNewSegment = true;
                        }
                        p1 = _pathJs.Path.getPointOnEllipticalArc(pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], currentT, pathCmd.points[6]);
                        break;
                    case 'C':
                        if (currentT === 0) {
                            if (glyphWidth > pathCmd.pathLength) currentT = 0.00000001;
                            else currentT = glyphWidth / pathCmd.pathLength;
                        } else if (glyphWidth > currLen) currentT += (glyphWidth - currLen) / pathCmd.pathLength / 2;
                        else currentT = Math.max(currentT - (currLen - glyphWidth) / pathCmd.pathLength / 2, 0);
                        if (currentT > 1) {
                            currentT = 1;
                            needNewSegment = true;
                        }
                        p1 = _pathJs.Path.getPointOnCubicBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], pathCmd.points[4], pathCmd.points[5]);
                        break;
                    case 'Q':
                        if (currentT === 0) currentT = glyphWidth / pathCmd.pathLength;
                        else if (glyphWidth > currLen) currentT += (glyphWidth - currLen) / pathCmd.pathLength;
                        else currentT -= (currLen - glyphWidth) / pathCmd.pathLength;
                        if (currentT > 1) {
                            currentT = 1;
                            needNewSegment = true;
                        }
                        p1 = _pathJs.Path.getPointOnQuadraticBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3]);
                        break;
                }
                if (p1 !== undefined) currLen = _pathJs.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
                if (needNewSegment) {
                    needNewSegment = false;
                    pathCmd = undefined;
                }
            }
        };
        var testChar = 'C';
        var glyphWidth1 = that._getTextSize(testChar).width + letterSpacing;
        var lettersInOffset = offset / glyphWidth1 - 1;
        for(var k = 0; k < lettersInOffset; k++){
            findSegmentToFitCharacter(testChar);
            if (p0 === undefined || p1 === undefined) break;
            p0 = p1;
        }
        for(var i = 0; i < charArr.length; i++){
            findSegmentToFitCharacter(charArr[i]);
            if (p0 === undefined || p1 === undefined) break;
            var width = _pathJs.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
            var kern = 0;
            if (kerningFunc) try {
                kern = kerningFunc(charArr[i - 1], charArr[i]) * this.fontSize();
            } catch (e) {
                kern = 0;
            }
            p0.x += kern;
            p1.x += kern;
            this.textWidth += kern;
            var midpoint = _pathJs.Path.getPointOnLine(kern + width / 2, p0.x, p0.y, p1.x, p1.y);
            var rotation = Math.atan2(p1.y - p0.y, p1.x - p0.x);
            this.glyphInfo.push({
                transposeX: midpoint.x,
                transposeY: midpoint.y,
                text: charArr[i],
                rotation: rotation,
                p0: p0,
                p1: p1
            });
            p0 = p1;
        }
    }
    getSelfRect() {
        if (!this.glyphInfo.length) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        var points = [];
        this.glyphInfo.forEach(function(info) {
            points.push(info.p0.x);
            points.push(info.p0.y);
            points.push(info.p1.x);
            points.push(info.p1.y);
        });
        var minX = points[0] || 0;
        var maxX = points[0] || 0;
        var minY = points[1] || 0;
        var maxY = points[1] || 0;
        var x, y;
        for(var i = 0; i < points.length / 2; i++){
            x = points[i * 2];
            y = points[i * 2 + 1];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }
        var fontSize = this.fontSize();
        return {
            x: minX - fontSize / 2,
            y: minY - fontSize / 2,
            width: maxX - minX + fontSize,
            height: maxY - minY + fontSize
        };
    }
}
TextPath.prototype._fillFunc = _fillFunc;
TextPath.prototype._strokeFunc = _strokeFunc;
TextPath.prototype._fillFuncHit = _fillFunc;
TextPath.prototype._strokeFuncHit = _strokeFunc;
TextPath.prototype.className = 'TextPath';
TextPath.prototype._attrsAffectingSize = [
    'text',
    'fontSize',
    'data'
];
_globalJs._registerNode(TextPath);
_factoryJs.Factory.addGetterSetter(TextPath, 'data');
_factoryJs.Factory.addGetterSetter(TextPath, 'fontFamily', 'Arial');
_factoryJs.Factory.addGetterSetter(TextPath, 'fontSize', 12, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(TextPath, 'fontStyle', NORMAL);
_factoryJs.Factory.addGetterSetter(TextPath, 'align', 'left');
_factoryJs.Factory.addGetterSetter(TextPath, 'letterSpacing', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(TextPath, 'textBaseline', 'middle');
_factoryJs.Factory.addGetterSetter(TextPath, 'fontVariant', NORMAL);
_factoryJs.Factory.addGetterSetter(TextPath, 'text', EMPTY_STRING);
_factoryJs.Factory.addGetterSetter(TextPath, 'textDecoration', null);
_factoryJs.Factory.addGetterSetter(TextPath, 'kerningFunc', null);

},{"../Util.js":"98XwR","../Factory.js":"ifTus","../Shape.js":"7oUQ5","./Path.js":"8EWPy","./Text.js":"dzdPT","../Validators.js":"5lPi2","../Global.js":"1LGjN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fWKdn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transformer", ()=>Transformer
);
var _utilJs = require("../Util.js");
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _shapeJs = require("../Shape.js");
var _rectJs = require("./Rect.js");
var _groupJs = require("../Group.js");
var _globalJs = require("../Global.js");
var _validatorsJs = require("../Validators.js");
var EVENTS_NAME = 'tr-konva';
var ATTR_CHANGE_LIST = [
    'resizeEnabledChange',
    'rotateAnchorOffsetChange',
    'rotateEnabledChange',
    'enabledAnchorsChange',
    'anchorSizeChange',
    'borderEnabledChange',
    'borderStrokeChange',
    'borderStrokeWidthChange',
    'borderDashChange',
    'anchorStrokeChange',
    'anchorStrokeWidthChange',
    'anchorFillChange',
    'anchorCornerRadiusChange',
    'ignoreStrokeChange', 
].map((e)=>e + `.${EVENTS_NAME}`
).join(' ');
var NODES_RECT = 'nodesRect';
var TRANSFORM_CHANGE_STR = [
    'widthChange',
    'heightChange',
    'scaleXChange',
    'scaleYChange',
    'skewXChange',
    'skewYChange',
    'rotationChange',
    'offsetXChange',
    'offsetYChange',
    'transformsEnabledChange',
    'strokeWidthChange', 
];
var ANGLES = {
    'top-left': -45,
    'top-center': 0,
    'top-right': 45,
    'middle-right': -90,
    'middle-left': 90,
    'bottom-left': -135,
    'bottom-center': 180,
    'bottom-right': 135
};
const TOUCH_DEVICE = 'ontouchstart' in _globalJs.Konva._global;
function getCursor(anchorName, rad) {
    if (anchorName === 'rotater') return 'crosshair';
    rad += _utilJs.Util.degToRad(ANGLES[anchorName] || 0);
    var angle = (_utilJs.Util.radToDeg(rad) % 360 + 360) % 360;
    if (_utilJs.Util._inRange(angle, 337.5, 360) || _utilJs.Util._inRange(angle, 0, 22.5)) return 'ns-resize';
    else if (_utilJs.Util._inRange(angle, 22.5, 67.5)) return 'nesw-resize';
    else if (_utilJs.Util._inRange(angle, 67.5, 112.5)) return 'ew-resize';
    else if (_utilJs.Util._inRange(angle, 112.5, 157.5)) return 'nwse-resize';
    else if (_utilJs.Util._inRange(angle, 157.5, 202.5)) return 'ns-resize';
    else if (_utilJs.Util._inRange(angle, 202.5, 247.5)) return 'nesw-resize';
    else if (_utilJs.Util._inRange(angle, 247.5, 292.5)) return 'ew-resize';
    else if (_utilJs.Util._inRange(angle, 292.5, 337.5)) return 'nwse-resize';
    else {
        _utilJs.Util.error('Transformer has unknown angle for cursor detection: ' + angle);
        return 'pointer';
    }
}
var ANCHORS_NAMES = [
    'top-left',
    'top-center',
    'top-right',
    'middle-right',
    'middle-left',
    'bottom-left',
    'bottom-center',
    'bottom-right', 
];
var MAX_SAFE_INTEGER = 100000000;
function getCenter(shape) {
    return {
        x: shape.x + shape.width / 2 * Math.cos(shape.rotation) + shape.height / 2 * Math.sin(-shape.rotation),
        y: shape.y + shape.height / 2 * Math.cos(shape.rotation) + shape.width / 2 * Math.sin(shape.rotation)
    };
}
function rotateAroundPoint(shape, angleRad, point) {
    const x = point.x + (shape.x - point.x) * Math.cos(angleRad) - (shape.y - point.y) * Math.sin(angleRad);
    const y = point.y + (shape.x - point.x) * Math.sin(angleRad) + (shape.y - point.y) * Math.cos(angleRad);
    return Object.assign(Object.assign({
    }, shape), {
        rotation: shape.rotation + angleRad,
        x,
        y
    });
}
function rotateAroundCenter(shape, deltaRad) {
    const center = getCenter(shape);
    return rotateAroundPoint(shape, deltaRad, center);
}
function getSnap(snaps, newRotationRad, tol) {
    let snapped = newRotationRad;
    for(let i = 0; i < snaps.length; i++){
        const angle = _globalJs.Konva.getAngle(snaps[i]);
        const absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
        const dif = Math.min(absDiff, Math.PI * 2 - absDiff);
        if (dif < tol) snapped = angle;
    }
    return snapped;
}
class Transformer extends _groupJs.Group {
    constructor(config){
        super(config);
        this._transforming = false;
        this._createElements();
        this._handleMouseMove = this._handleMouseMove.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
        this.update = this.update.bind(this);
        this.on(ATTR_CHANGE_LIST, this.update);
        if (this.getNode()) this.update();
    }
    attachTo(node2) {
        this.setNode(node2);
        return this;
    }
    setNode(node1) {
        _utilJs.Util.warn('tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.');
        return this.setNodes([
            node1
        ]);
    }
    getNode() {
        return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
        return EVENTS_NAME + this._id;
    }
    setNodes(nodes = []) {
        if (this._nodes && this._nodes.length) this.detach();
        this._nodes = nodes;
        if (nodes.length === 1 && this.useSingleNodeRotation()) this.rotation(nodes[0].getAbsoluteRotation());
        else this.rotation(0);
        this._nodes.forEach((node)=>{
            const onChange = ()=>{
                if (this.nodes().length === 1 && this.useSingleNodeRotation()) this.rotation(this.nodes()[0].getAbsoluteRotation());
                this._resetTransformCache();
                if (!this._transforming && !this.isDragging()) this.update();
            };
            const additionalEvents = node._attrsAffectingSize.map((prop)=>prop + 'Change.' + this._getEventNamespace()
            ).join(' ');
            node.on(additionalEvents, onChange);
            node.on(TRANSFORM_CHANGE_STR.map((e)=>e + `.${this._getEventNamespace()}`
            ).join(' '), onChange);
            node.on(`absoluteTransformChange.${this._getEventNamespace()}`, onChange);
            this._proxyDrag(node);
        });
        this._resetTransformCache();
        var elementsCreated = !!this.findOne('.top-left');
        if (elementsCreated) this.update();
        return this;
    }
    _proxyDrag(node3) {
        let lastPos;
        node3.on(`dragstart.${this._getEventNamespace()}`, (e)=>{
            lastPos = node3.getAbsolutePosition();
            if (!this.isDragging() && node3 !== this.findOne('.back')) this.startDrag(e, false);
        });
        node3.on(`dragmove.${this._getEventNamespace()}`, (e)=>{
            if (!lastPos) return;
            const abs = node3.getAbsolutePosition();
            const dx = abs.x - lastPos.x;
            const dy = abs.y - lastPos.y;
            this.nodes().forEach((otherNode)=>{
                if (otherNode === node3) return;
                if (otherNode.isDragging()) return;
                const otherAbs = otherNode.getAbsolutePosition();
                otherNode.setAbsolutePosition({
                    x: otherAbs.x + dx,
                    y: otherAbs.y + dy
                });
                otherNode.startDrag(e);
            });
            lastPos = null;
        });
    }
    getNodes() {
        return this._nodes || [];
    }
    getActiveAnchor() {
        return this._movingAnchorName;
    }
    detach() {
        if (this._nodes) this._nodes.forEach((node)=>{
            node.off('.' + this._getEventNamespace());
        });
        this._nodes = [];
        this._resetTransformCache();
    }
    _resetTransformCache() {
        this._clearCache(NODES_RECT);
        this._clearCache('transform');
        this._clearSelfAndDescendantCache('absoluteTransform');
    }
    _getNodeRect() {
        return this._getCache(NODES_RECT, this.__getNodeRect);
    }
    __getNodeShape(node5, rot = this.rotation(), relative) {
        var rect = node5.getClientRect({
            skipTransform: true,
            skipShadow: true,
            skipStroke: this.ignoreStroke()
        });
        var absScale = node5.getAbsoluteScale(relative);
        var absPos = node5.getAbsolutePosition(relative);
        var dx = rect.x * absScale.x - node5.offsetX() * absScale.x;
        var dy = rect.y * absScale.y - node5.offsetY() * absScale.y;
        const rotation = (_globalJs.Konva.getAngle(node5.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
        const box = {
            x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
            y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
            width: rect.width * absScale.x,
            height: rect.height * absScale.y,
            rotation: rotation
        };
        return rotateAroundPoint(box, -_globalJs.Konva.getAngle(rot), {
            x: 0,
            y: 0
        });
    }
    __getNodeRect() {
        var node4 = this.getNode();
        if (!node4) return {
            x: -MAX_SAFE_INTEGER,
            y: -MAX_SAFE_INTEGER,
            width: 0,
            height: 0,
            rotation: 0
        };
        const totalPoints = [];
        this.nodes().map((node)=>{
            const box = node.getClientRect({
                skipTransform: true,
                skipShadow: true,
                skipStroke: this.ignoreStroke()
            });
            var points = [
                {
                    x: box.x,
                    y: box.y
                },
                {
                    x: box.x + box.width,
                    y: box.y
                },
                {
                    x: box.x + box.width,
                    y: box.y + box.height
                },
                {
                    x: box.x,
                    y: box.y + box.height
                }, 
            ];
            var trans = node.getAbsoluteTransform();
            points.forEach(function(point) {
                var transformed = trans.point(point);
                totalPoints.push(transformed);
            });
        });
        const tr = new _utilJs.Transform();
        tr.rotate(-_globalJs.Konva.getAngle(this.rotation()));
        var minX, minY, maxX, maxY;
        totalPoints.forEach(function(point) {
            var transformed = tr.point(point);
            if (minX === undefined) {
                minX = maxX = transformed.x;
                minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
        });
        tr.invert();
        const p = tr.point({
            x: minX,
            y: minY
        });
        return {
            x: p.x,
            y: p.y,
            width: maxX - minX,
            height: maxY - minY,
            rotation: _globalJs.Konva.getAngle(this.rotation())
        };
    }
    getX() {
        return this._getNodeRect().x;
    }
    getY() {
        return this._getNodeRect().y;
    }
    getWidth() {
        return this._getNodeRect().width;
    }
    getHeight() {
        return this._getNodeRect().height;
    }
    _createElements() {
        this._createBack();
        ANCHORS_NAMES.forEach((function(name) {
            this._createAnchor(name);
        }).bind(this));
        this._createAnchor('rotater');
    }
    _createAnchor(name1) {
        var anchor = new _rectJs.Rect({
            stroke: 'rgb(0, 161, 255)',
            fill: 'white',
            strokeWidth: 1,
            name: name1 + ' _anchor',
            dragDistance: 0,
            draggable: true,
            hitStrokeWidth: TOUCH_DEVICE ? 10 : 'auto'
        });
        var self = this;
        anchor.on('mousedown touchstart', function(e) {
            self._handleMouseDown(e);
        });
        anchor.on('dragstart', (e)=>{
            anchor.stopDrag();
            e.cancelBubble = true;
        });
        anchor.on('dragend', (e)=>{
            e.cancelBubble = true;
        });
        anchor.on('mouseenter', ()=>{
            var rad = _globalJs.Konva.getAngle(this.rotation());
            var cursor = getCursor(name1, rad);
            anchor.getStage().content && (anchor.getStage().content.style.cursor = cursor);
            this._cursorChange = true;
        });
        anchor.on('mouseout', ()=>{
            anchor.getStage().content && (anchor.getStage().content.style.cursor = '');
            this._cursorChange = false;
        });
        this.add(anchor);
    }
    _createBack() {
        var back = new _shapeJs.Shape({
            name: 'back',
            width: 0,
            height: 0,
            draggable: true,
            sceneFunc (ctx) {
                var tr = this.getParent();
                var padding = tr.padding();
                ctx.beginPath();
                ctx.rect(-padding, -padding, this.width() + padding * 2, this.height() + padding * 2);
                ctx.moveTo(this.width() / 2, -padding);
                if (tr.rotateEnabled()) ctx.lineTo(this.width() / 2, -tr.rotateAnchorOffset() * _utilJs.Util._sign(this.height()) - padding);
                ctx.fillStrokeShape(this);
            },
            hitFunc: (ctx, shape)=>{
                if (!this.shouldOverdrawWholeArea()) return;
                var padding = this.padding();
                ctx.beginPath();
                ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
                ctx.fillStrokeShape(shape);
            }
        });
        this.add(back);
        this._proxyDrag(back);
        back.on('dragstart', (e)=>{
            e.cancelBubble = true;
        });
        back.on('dragmove', (e)=>{
            e.cancelBubble = true;
        });
        back.on('dragend', (e)=>{
            e.cancelBubble = true;
        });
        this.on('dragmove', (e)=>{
            this.update();
        });
    }
    _handleMouseDown(e) {
        this._movingAnchorName = e.target.name().split(' ')[0];
        var attrs = this._getNodeRect();
        var width = attrs.width;
        var height = attrs.height;
        var hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        this.sin = Math.abs(height / hypotenuse);
        this.cos = Math.abs(width / hypotenuse);
        if (typeof window !== 'undefined') {
            window.addEventListener('mousemove', this._handleMouseMove);
            window.addEventListener('touchmove', this._handleMouseMove);
            window.addEventListener('mouseup', this._handleMouseUp, true);
            window.addEventListener('touchend', this._handleMouseUp, true);
        }
        this._transforming = true;
        var ap = e.target.getAbsolutePosition();
        var pos = e.target.getStage().getPointerPosition();
        this._anchorDragOffset = {
            x: pos.x - ap.x,
            y: pos.y - ap.y
        };
        this._fire('transformstart', {
            evt: e,
            target: this.getNode()
        });
        this._nodes.forEach((target)=>{
            target._fire('transformstart', {
                evt: e,
                target
            });
        });
    }
    _handleMouseMove(e1) {
        var x, y, newHypotenuse;
        var anchorNode = this.findOne('.' + this._movingAnchorName);
        var stage = anchorNode.getStage();
        stage.setPointersPositions(e1);
        const pp = stage.getPointerPosition();
        let newNodePos = {
            x: pp.x - this._anchorDragOffset.x,
            y: pp.y - this._anchorDragOffset.y
        };
        const oldAbs = anchorNode.getAbsolutePosition();
        if (this.anchorDragBoundFunc()) newNodePos = this.anchorDragBoundFunc()(oldAbs, newNodePos, e1);
        anchorNode.setAbsolutePosition(newNodePos);
        const newAbs = anchorNode.getAbsolutePosition();
        if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) return;
        if (this._movingAnchorName === 'rotater') {
            var attrs = this._getNodeRect();
            x = anchorNode.x() - attrs.width / 2;
            y = -anchorNode.y() + attrs.height / 2;
            let delta = Math.atan2(-y, x) + Math.PI / 2;
            if (attrs.height < 0) delta -= Math.PI;
            var oldRotation = _globalJs.Konva.getAngle(this.rotation());
            const newRotation = oldRotation + delta;
            const tol = _globalJs.Konva.getAngle(this.rotationSnapTolerance());
            const snappedRot = getSnap(this.rotationSnaps(), newRotation, tol);
            const diff = snappedRot - attrs.rotation;
            const shape = rotateAroundCenter(attrs, diff);
            this._fitNodesInto(shape, e1);
            return;
        }
        var keepProportion = this.keepRatio() || e1.shiftKey;
        var centeredScaling = this.centeredScaling() || e1.altKey;
        if (this._movingAnchorName === 'top-left') {
            if (keepProportion) {
                var comparePoint = centeredScaling ? {
                    x: this.width() / 2,
                    y: this.height() / 2
                } : {
                    x: this.findOne('.bottom-right').x(),
                    y: this.findOne('.bottom-right').y()
                };
                newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
                var reverseX = this.findOne('.top-left').x() > comparePoint.x ? -1 : 1;
                var reverseY = this.findOne('.top-left').y() > comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                this.findOne('.top-left').x(comparePoint.x - x);
                this.findOne('.top-left').y(comparePoint.y - y);
            }
        } else if (this._movingAnchorName === 'top-center') this.findOne('.top-left').y(anchorNode.y());
        else if (this._movingAnchorName === 'top-right') {
            if (keepProportion) {
                var comparePoint = centeredScaling ? {
                    x: this.width() / 2,
                    y: this.height() / 2
                } : {
                    x: this.findOne('.bottom-left').x(),
                    y: this.findOne('.bottom-left').y()
                };
                newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
                var reverseX = this.findOne('.top-right').x() < comparePoint.x ? -1 : 1;
                var reverseY = this.findOne('.top-right').y() > comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                this.findOne('.top-right').x(comparePoint.x + x);
                this.findOne('.top-right').y(comparePoint.y - y);
            }
            var pos = anchorNode.position();
            this.findOne('.top-left').y(pos.y);
            this.findOne('.bottom-right').x(pos.x);
        } else if (this._movingAnchorName === 'middle-left') this.findOne('.top-left').x(anchorNode.x());
        else if (this._movingAnchorName === 'middle-right') this.findOne('.bottom-right').x(anchorNode.x());
        else if (this._movingAnchorName === 'bottom-left') {
            if (keepProportion) {
                var comparePoint = centeredScaling ? {
                    x: this.width() / 2,
                    y: this.height() / 2
                } : {
                    x: this.findOne('.top-right').x(),
                    y: this.findOne('.top-right').y()
                };
                newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
                var reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
                var reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                anchorNode.x(comparePoint.x - x);
                anchorNode.y(comparePoint.y + y);
            }
            pos = anchorNode.position();
            this.findOne('.top-left').x(pos.x);
            this.findOne('.bottom-right').y(pos.y);
        } else if (this._movingAnchorName === 'bottom-center') this.findOne('.bottom-right').y(anchorNode.y());
        else if (this._movingAnchorName === 'bottom-right') {
            if (keepProportion) {
                var comparePoint = centeredScaling ? {
                    x: this.width() / 2,
                    y: this.height() / 2
                } : {
                    x: this.findOne('.top-left').x(),
                    y: this.findOne('.top-left').y()
                };
                newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
                var reverseX = this.findOne('.bottom-right').x() < comparePoint.x ? -1 : 1;
                var reverseY = this.findOne('.bottom-right').y() < comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                this.findOne('.bottom-right').x(comparePoint.x + x);
                this.findOne('.bottom-right').y(comparePoint.y + y);
            }
        } else console.error(new Error('Wrong position argument of selection resizer: ' + this._movingAnchorName));
        var centeredScaling = this.centeredScaling() || e1.altKey;
        if (centeredScaling) {
            var topLeft = this.findOne('.top-left');
            var bottomRight = this.findOne('.bottom-right');
            var topOffsetX = topLeft.x();
            var topOffsetY = topLeft.y();
            var bottomOffsetX = this.getWidth() - bottomRight.x();
            var bottomOffsetY = this.getHeight() - bottomRight.y();
            bottomRight.move({
                x: -topOffsetX,
                y: -topOffsetY
            });
            topLeft.move({
                x: bottomOffsetX,
                y: bottomOffsetY
            });
        }
        var absPos = this.findOne('.top-left').getAbsolutePosition();
        x = absPos.x;
        y = absPos.y;
        var width = this.findOne('.bottom-right').x() - this.findOne('.top-left').x();
        var height = this.findOne('.bottom-right').y() - this.findOne('.top-left').y();
        this._fitNodesInto({
            x: x,
            y: y,
            width: width,
            height: height,
            rotation: _globalJs.Konva.getAngle(this.rotation())
        }, e1);
    }
    _handleMouseUp(e2) {
        this._removeEvents(e2);
    }
    getAbsoluteTransform() {
        return this.getTransform();
    }
    _removeEvents(e3) {
        if (this._transforming) {
            this._transforming = false;
            if (typeof window !== 'undefined') {
                window.removeEventListener('mousemove', this._handleMouseMove);
                window.removeEventListener('touchmove', this._handleMouseMove);
                window.removeEventListener('mouseup', this._handleMouseUp, true);
                window.removeEventListener('touchend', this._handleMouseUp, true);
            }
            var node = this.getNode();
            this._fire('transformend', {
                evt: e3,
                target: node
            });
            if (node) this._nodes.forEach((target)=>{
                target._fire('transformend', {
                    evt: e3,
                    target
                });
            });
            this._movingAnchorName = null;
        }
    }
    _fitNodesInto(newAttrs, evt) {
        var oldAttrs = this._getNodeRect();
        const minSize = 1;
        if (_utilJs.Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
            this.update();
            return;
        }
        if (_utilJs.Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
            this.update();
            return;
        }
        const allowNegativeScale = this.flipEnabled();
        var t = new _utilJs.Transform();
        t.rotate(_globalJs.Konva.getAngle(this.rotation()));
        if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf('left') >= 0) {
            const offset = t.point({
                x: -this.padding() * 2,
                y: 0
            });
            newAttrs.x += offset.x;
            newAttrs.y += offset.y;
            newAttrs.width += this.padding() * 2;
            this._movingAnchorName = this._movingAnchorName.replace('left', 'right');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        } else if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf('right') >= 0) {
            const offset = t.point({
                x: this.padding() * 2,
                y: 0
            });
            this._movingAnchorName = this._movingAnchorName.replace('right', 'left');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.width += this.padding() * 2;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        }
        if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf('top') >= 0) {
            const offset = t.point({
                x: 0,
                y: -this.padding() * 2
            });
            newAttrs.x += offset.x;
            newAttrs.y += offset.y;
            this._movingAnchorName = this._movingAnchorName.replace('top', 'bottom');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.height += this.padding() * 2;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        } else if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf('bottom') >= 0) {
            const offset = t.point({
                x: 0,
                y: this.padding() * 2
            });
            this._movingAnchorName = this._movingAnchorName.replace('bottom', 'top');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.height += this.padding() * 2;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        }
        if (this.boundBoxFunc()) {
            const bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
            if (bounded) newAttrs = bounded;
            else _utilJs.Util.warn('boundBoxFunc returned falsy. You should return new bound rect from it!');
        }
        const baseSize = 10000000;
        const oldTr = new _utilJs.Transform();
        oldTr.translate(oldAttrs.x, oldAttrs.y);
        oldTr.rotate(oldAttrs.rotation);
        oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
        const newTr = new _utilJs.Transform();
        newTr.translate(newAttrs.x, newAttrs.y);
        newTr.rotate(newAttrs.rotation);
        newTr.scale(newAttrs.width / baseSize, newAttrs.height / baseSize);
        const delta = newTr.multiply(oldTr.invert());
        this._nodes.forEach((node)=>{
            var _a;
            const parentTransform = node.getParent().getAbsoluteTransform();
            const localTransform = node.getTransform().copy();
            localTransform.translate(node.offsetX(), node.offsetY());
            const newLocalTransform = new _utilJs.Transform();
            newLocalTransform.multiply(parentTransform.copy().invert()).multiply(delta).multiply(parentTransform).multiply(localTransform);
            const attrs = newLocalTransform.decompose();
            node.setAttrs(attrs);
            this._fire('transform', {
                evt: evt,
                target: node
            });
            node._fire('transform', {
                evt: evt,
                target: node
            });
            (_a = node.getLayer()) === null || _a === void 0 || _a.batchDraw();
        });
        this.rotation(_utilJs.Util._getRotation(newAttrs.rotation));
        this._resetTransformCache();
        this.update();
        this.getLayer().batchDraw();
    }
    forceUpdate() {
        this._resetTransformCache();
        this.update();
    }
    _batchChangeChild(selector, attrs) {
        const anchor = this.findOne(selector);
        anchor.setAttrs(attrs);
    }
    update() {
        var _a;
        var attrs = this._getNodeRect();
        this.rotation(_utilJs.Util._getRotation(attrs.rotation));
        var width = attrs.width;
        var height = attrs.height;
        var enabledAnchors = this.enabledAnchors();
        var resizeEnabled = this.resizeEnabled();
        var padding = this.padding();
        var anchorSize = this.anchorSize();
        this.find('._anchor').forEach((node)=>{
            node.setAttrs({
                width: anchorSize,
                height: anchorSize,
                offsetX: anchorSize / 2,
                offsetY: anchorSize / 2,
                stroke: this.anchorStroke(),
                strokeWidth: this.anchorStrokeWidth(),
                fill: this.anchorFill(),
                cornerRadius: this.anchorCornerRadius()
            });
        });
        this._batchChangeChild('.top-left', {
            x: 0,
            y: 0,
            offsetX: anchorSize / 2 + padding,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('top-left') >= 0
        });
        this._batchChangeChild('.top-center', {
            x: width / 2,
            y: 0,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('top-center') >= 0
        });
        this._batchChangeChild('.top-right', {
            x: width,
            y: 0,
            offsetX: anchorSize / 2 - padding,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('top-right') >= 0
        });
        this._batchChangeChild('.middle-left', {
            x: 0,
            y: height / 2,
            offsetX: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('middle-left') >= 0
        });
        this._batchChangeChild('.middle-right', {
            x: width,
            y: height / 2,
            offsetX: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('middle-right') >= 0
        });
        this._batchChangeChild('.bottom-left', {
            x: 0,
            y: height,
            offsetX: anchorSize / 2 + padding,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('bottom-left') >= 0
        });
        this._batchChangeChild('.bottom-center', {
            x: width / 2,
            y: height,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('bottom-center') >= 0
        });
        this._batchChangeChild('.bottom-right', {
            x: width,
            y: height,
            offsetX: anchorSize / 2 - padding,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('bottom-right') >= 0
        });
        this._batchChangeChild('.rotater', {
            x: width / 2,
            y: -this.rotateAnchorOffset() * _utilJs.Util._sign(height) - padding,
            visible: this.rotateEnabled()
        });
        this._batchChangeChild('.back', {
            width: width,
            height: height,
            visible: this.borderEnabled(),
            stroke: this.borderStroke(),
            strokeWidth: this.borderStrokeWidth(),
            dash: this.borderDash(),
            x: 0,
            y: 0
        });
        (_a = this.getLayer()) === null || _a === void 0 || _a.batchDraw();
    }
    isTransforming() {
        return this._transforming;
    }
    stopTransform() {
        if (this._transforming) {
            this._removeEvents();
            var anchorNode = this.findOne('.' + this._movingAnchorName);
            if (anchorNode) anchorNode.stopDrag();
        }
    }
    destroy() {
        if (this.getStage() && this._cursorChange) this.getStage().content && (this.getStage().content.style.cursor = '');
        _groupJs.Group.prototype.destroy.call(this);
        this.detach();
        this._removeEvents();
        return this;
    }
    toObject() {
        return _nodeJs.Node.prototype.toObject.call(this);
    }
}
function validateAnchors(val) {
    if (!(val instanceof Array)) _utilJs.Util.warn('enabledAnchors value should be an array');
    if (val instanceof Array) val.forEach(function(name) {
        if (ANCHORS_NAMES.indexOf(name) === -1) _utilJs.Util.warn('Unknown anchor name: ' + name + '. Available names are: ' + ANCHORS_NAMES.join(', '));
    });
    return val || [];
}
Transformer.prototype.className = 'Transformer';
_globalJs._registerNode(Transformer);
_factoryJs.Factory.addGetterSetter(Transformer, 'enabledAnchors', ANCHORS_NAMES, validateAnchors);
_factoryJs.Factory.addGetterSetter(Transformer, 'flipEnabled', true, _validatorsJs.getBooleanValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'resizeEnabled', true);
_factoryJs.Factory.addGetterSetter(Transformer, 'anchorSize', 10, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'rotateEnabled', true);
_factoryJs.Factory.addGetterSetter(Transformer, 'rotationSnaps', []);
_factoryJs.Factory.addGetterSetter(Transformer, 'rotateAnchorOffset', 50, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'rotationSnapTolerance', 5, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'borderEnabled', true);
_factoryJs.Factory.addGetterSetter(Transformer, 'anchorStroke', 'rgb(0, 161, 255)');
_factoryJs.Factory.addGetterSetter(Transformer, 'anchorStrokeWidth', 1, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'anchorFill', 'white');
_factoryJs.Factory.addGetterSetter(Transformer, 'anchorCornerRadius', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'borderStroke', 'rgb(0, 161, 255)');
_factoryJs.Factory.addGetterSetter(Transformer, 'borderStrokeWidth', 1, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'borderDash');
_factoryJs.Factory.addGetterSetter(Transformer, 'keepRatio', true);
_factoryJs.Factory.addGetterSetter(Transformer, 'centeredScaling', false);
_factoryJs.Factory.addGetterSetter(Transformer, 'ignoreStroke', false);
_factoryJs.Factory.addGetterSetter(Transformer, 'padding', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Transformer, 'node');
_factoryJs.Factory.addGetterSetter(Transformer, 'nodes');
_factoryJs.Factory.addGetterSetter(Transformer, 'boundBoxFunc');
_factoryJs.Factory.addGetterSetter(Transformer, 'anchorDragBoundFunc');
_factoryJs.Factory.addGetterSetter(Transformer, 'shouldOverdrawWholeArea', false);
_factoryJs.Factory.addGetterSetter(Transformer, 'useSingleNodeRotation', true);
_factoryJs.Factory.backCompat(Transformer, {
    lineEnabled: 'borderEnabled',
    rotateHandlerOffset: 'rotateAnchorOffset',
    enabledHandlers: 'enabledAnchors'
});

},{"../Util.js":"98XwR","../Factory.js":"ifTus","../Node.js":"em6vr","../Shape.js":"7oUQ5","./Rect.js":"ic9u2","../Group.js":"ijBUs","../Global.js":"1LGjN","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5rRig":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Wedge", ()=>Wedge
);
var _factoryJs = require("../Factory.js");
var _shapeJs = require("../Shape.js");
var _globalJs = require("../Global.js");
var _validatorsJs = require("../Validators.js");
class Wedge extends _shapeJs.Shape {
    _sceneFunc(context) {
        context.beginPath();
        context.arc(0, 0, this.radius(), 0, _globalJs.Konva.getAngle(this.angle()), this.clockwise());
        context.lineTo(0, 0);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.radius() * 2;
    }
    getHeight() {
        return this.radius() * 2;
    }
    setWidth(width) {
        this.radius(width / 2);
    }
    setHeight(height) {
        this.radius(height / 2);
    }
}
Wedge.prototype.className = 'Wedge';
Wedge.prototype._centroid = true;
Wedge.prototype._attrsAffectingSize = [
    'radius'
];
_globalJs._registerNode(Wedge);
_factoryJs.Factory.addGetterSetter(Wedge, 'radius', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Wedge, 'angle', 0, _validatorsJs.getNumberValidator());
_factoryJs.Factory.addGetterSetter(Wedge, 'clockwise', false);
_factoryJs.Factory.backCompat(Wedge, {
    angleDeg: 'angle',
    getAngleDeg: 'getAngle',
    setAngleDeg: 'setAngle'
});

},{"../Factory.js":"ifTus","../Shape.js":"7oUQ5","../Global.js":"1LGjN","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6QTsv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Blur", ()=>Blur
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
function BlurStack() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
}
var mul_table = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259, 
];
var shg_table = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24, 
];
function filterGaussBlurRGBA(imageData, radius) {
    var pixels = imageData.data, width = imageData.width, height = imageData.height;
    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
    var div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack(), stackEnd = null, stack = stackStart, stackIn = null, stackOut = null, mul_sum = mul_table[radius], shg_sum = shg_table[radius];
    for(i = 1; i < div; i++){
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) stackEnd = stack;
    }
    stack.next = stackStart;
    yw = yi = 0;
    for(y = 0; y < height; y++){
        r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;
        stack = stackStart;
        for(i = 0; i < radiusPlus1; i++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }
        for(i = 1; i < radiusPlus1; i++){
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for(x = 0; x < width; x++){
            pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
            if (pa !== 0) {
                pa = 255 / pa;
                pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
                pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
                pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            r_in_sum += stackIn.r = pixels[p];
            g_in_sum += stackIn.g = pixels[p + 1];
            b_in_sum += stackIn.b = pixels[p + 2];
            a_in_sum += stackIn.a = pixels[p + 3];
            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for(x = 0; x < width; x++){
        g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;
        stack = stackStart;
        for(i = 0; i < radiusPlus1; i++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }
        yp = width;
        for(i = 1; i <= radius; i++){
            yi = yp + x << 2;
            r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;
            if (i < heightMinus1) yp += width;
        }
        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for(y = 0; y < height; y++){
            p = yi << 2;
            pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
            if (pa > 0) {
                pa = 255 / pa;
                pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
                pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
                pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            r_sum += r_in_sum += stackIn.r = pixels[p];
            g_sum += g_in_sum += stackIn.g = pixels[p + 1];
            b_sum += b_in_sum += stackIn.b = pixels[p + 2];
            a_sum += a_in_sum += stackIn.a = pixels[p + 3];
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += width;
        }
    }
}
const Blur = function Blur(imageData) {
    var radius = Math.round(this.blurRadius());
    if (radius > 0) filterGaussBlurRGBA(imageData, radius);
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'blurRadius', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"94FPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Brighten", ()=>Brighten
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const Brighten = function(imageData) {
    var brightness = this.brightness() * 255, data = imageData.data, len = data.length, i;
    for(i = 0; i < len; i += 4){
        data[i] += brightness;
        data[i + 1] += brightness;
        data[i + 2] += brightness;
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'brightness', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bwgum":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Contrast", ()=>Contrast
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const Contrast = function(imageData) {
    var adjust = Math.pow((this.contrast() + 100) / 100, 2);
    var data = imageData.data, nPixels = data.length, red = 150, green = 150, blue = 150, i;
    for(i = 0; i < nPixels; i += 4){
        red = data[i];
        green = data[i + 1];
        blue = data[i + 2];
        red /= 255;
        red -= 0.5;
        red *= adjust;
        red += 0.5;
        red *= 255;
        green /= 255;
        green -= 0.5;
        green *= adjust;
        green += 0.5;
        green *= 255;
        blue /= 255;
        blue -= 0.5;
        blue *= adjust;
        blue += 0.5;
        blue *= 255;
        red = red < 0 ? 0 : red > 255 ? 255 : red;
        green = green < 0 ? 0 : green > 255 ? 255 : green;
        blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
        data[i] = red;
        data[i + 1] = green;
        data[i + 2] = blue;
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'contrast', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7ZmJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Emboss", ()=>Emboss
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _utilJs = require("../Util.js");
var _validatorsJs = require("../Validators.js");
const Emboss = function(imageData) {
    var strength = this.embossStrength() * 10, greyLevel = this.embossWhiteLevel() * 255, direction = this.embossDirection(), blend = this.embossBlend(), dirY = 0, dirX = 0, data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4, y = h;
    switch(direction){
        case 'top-left':
            dirY = -1;
            dirX = -1;
            break;
        case 'top':
            dirY = -1;
            dirX = 0;
            break;
        case 'top-right':
            dirY = -1;
            dirX = 1;
            break;
        case 'right':
            dirY = 0;
            dirX = 1;
            break;
        case 'bottom-right':
            dirY = 1;
            dirX = 1;
            break;
        case 'bottom':
            dirY = 1;
            dirX = 0;
            break;
        case 'bottom-left':
            dirY = 1;
            dirX = -1;
            break;
        case 'left':
            dirY = 0;
            dirX = -1;
            break;
        default:
            _utilJs.Util.error('Unknown emboss direction: ' + direction);
    }
    do {
        var offsetY = (y - 1) * w4;
        var otherY = dirY;
        if (y + otherY < 1) otherY = 0;
        if (y + otherY > h) otherY = 0;
        var offsetYOther = (y - 1 + otherY) * w * 4;
        var x = w;
        do {
            var offset = offsetY + (x - 1) * 4;
            var otherX = dirX;
            if (x + otherX < 1) otherX = 0;
            if (x + otherX > w) otherX = 0;
            var offsetOther = offsetYOther + (x - 1 + otherX) * 4;
            var dR = data[offset] - data[offsetOther];
            var dG = data[offset + 1] - data[offsetOther + 1];
            var dB = data[offset + 2] - data[offsetOther + 2];
            var dif = dR;
            var absDif = dif > 0 ? dif : -dif;
            var absG = dG > 0 ? dG : -dG;
            var absB = dB > 0 ? dB : -dB;
            if (absG > absDif) dif = dG;
            if (absB > absDif) dif = dB;
            dif *= strength;
            if (blend) {
                var r = data[offset] + dif;
                var g = data[offset + 1] + dif;
                var b = data[offset + 2] + dif;
                data[offset] = r > 255 ? 255 : r < 0 ? 0 : r;
                data[offset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
                data[offset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
            } else {
                var grey = greyLevel - dif;
                if (grey < 0) grey = 0;
                else if (grey > 255) grey = 255;
                data[offset] = data[offset + 1] = data[offset + 2] = grey;
            }
        }while (--x)
    }while (--y)
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'embossStrength', 0.5, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'embossWhiteLevel', 0.5, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'embossDirection', 'top-left', null, _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'embossBlend', false, null, _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Util.js":"98XwR","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bNomJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Enhance", ()=>Enhance
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
function remap(fromValue, fromMin, fromMax, toMin, toMax) {
    var fromRange = fromMax - fromMin, toRange = toMax - toMin, toValue;
    if (fromRange === 0) return toMin + toRange / 2;
    if (toRange === 0) return toMin;
    toValue = (fromValue - fromMin) / fromRange;
    toValue = toRange * toValue + toMin;
    return toValue;
}
const Enhance = function(imageData) {
    var data = imageData.data, nSubPixels = data.length, rMin = data[0], rMax = rMin, r, gMin = data[1], gMax = gMin, g, bMin = data[2], bMax = bMin, b, i;
    var enhanceAmount = this.enhance();
    if (enhanceAmount === 0) return;
    for(i = 0; i < nSubPixels; i += 4){
        r = data[i + 0];
        if (r < rMin) rMin = r;
        else if (r > rMax) rMax = r;
        g = data[i + 1];
        if (g < gMin) gMin = g;
        else if (g > gMax) gMax = g;
        b = data[i + 2];
        if (b < bMin) bMin = b;
        else if (b > bMax) bMax = b;
    }
    if (rMax === rMin) {
        rMax = 255;
        rMin = 0;
    }
    if (gMax === gMin) {
        gMax = 255;
        gMin = 0;
    }
    if (bMax === bMin) {
        bMax = 255;
        bMin = 0;
    }
    var rMid, rGoalMax, rGoalMin, gMid, gGoalMax, gGoalMin, bMid, bGoalMax, bGoalMin;
    if (enhanceAmount > 0) {
        rGoalMax = rMax + enhanceAmount * (255 - rMax);
        rGoalMin = rMin - enhanceAmount * (rMin - 0);
        gGoalMax = gMax + enhanceAmount * (255 - gMax);
        gGoalMin = gMin - enhanceAmount * (gMin - 0);
        bGoalMax = bMax + enhanceAmount * (255 - bMax);
        bGoalMin = bMin - enhanceAmount * (bMin - 0);
    } else {
        rMid = (rMax + rMin) * 0.5;
        rGoalMax = rMax + enhanceAmount * (rMax - rMid);
        rGoalMin = rMin + enhanceAmount * (rMin - rMid);
        gMid = (gMax + gMin) * 0.5;
        gGoalMax = gMax + enhanceAmount * (gMax - gMid);
        gGoalMin = gMin + enhanceAmount * (gMin - gMid);
        bMid = (bMax + bMin) * 0.5;
        bGoalMax = bMax + enhanceAmount * (bMax - bMid);
        bGoalMin = bMin + enhanceAmount * (bMin - bMid);
    }
    for(i = 0; i < nSubPixels; i += 4){
        data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
        data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
        data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'enhance', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"grkWT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Grayscale", ()=>Grayscale
);
const Grayscale = function(imageData) {
    var data = imageData.data, len = data.length, i, brightness;
    for(i = 0; i < len; i += 4){
        brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5c9Ip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HSL", ()=>HSL
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'hue', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'saturation', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'luminance', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
const HSL = function(imageData) {
    var data = imageData.data, nPixels = data.length, v = 1, s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, l = this.luminance() * 127, i;
    var vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
    var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
    var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
    var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
    var r, g, b, a;
    for(i = 0; i < nPixels; i += 4){
        r = data[i + 0];
        g = data[i + 1];
        b = data[i + 2];
        a = data[i + 3];
        data[i + 0] = rr * r + rg * g + rb * b + l;
        data[i + 1] = gr * r + gg * g + gb * b + l;
        data[i + 2] = br * r + bg * g + bb * b + l;
        data[i + 3] = a;
    }
};

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9JuIe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HSV", ()=>HSV
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const HSV = function(imageData) {
    var data = imageData.data, nPixels = data.length, v = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, i;
    var vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
    var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
    var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
    var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
    var r, g, b, a;
    for(i = 0; i < nPixels; i += 4){
        r = data[i + 0];
        g = data[i + 1];
        b = data[i + 2];
        a = data[i + 3];
        data[i + 0] = rr * r + rg * g + rb * b;
        data[i + 1] = gr * r + gg * g + gb * b;
        data[i + 2] = br * r + bg * g + bb * b;
        data[i + 3] = a;
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'hue', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'saturation', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'value', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eBi4g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Invert", ()=>Invert
);
const Invert = function(imageData) {
    var data = imageData.data, len = data.length, i;
    for(i = 0; i < len; i += 4){
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"r63Ws":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Kaleidoscope", ()=>Kaleidoscope
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _utilJs = require("../Util.js");
var _validatorsJs = require("../Validators.js");
var ToPolar = function(src, dst, opt) {
    var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x, y, r = 0, g = 0, b = 0, a = 0;
    var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt(x * x + y * y);
    rMax = rad > rMax ? rad : rMax;
    var rSize = ySize, tSize = xSize, radius, theta;
    var conversion = 360 / tSize * Math.PI / 180, sin, cos;
    for(theta = 0; theta < tSize; theta += 1){
        sin = Math.sin(theta * conversion);
        cos = Math.cos(theta * conversion);
        for(radius = 0; radius < rSize; radius += 1){
            x = Math.floor(xMid + rMax * radius / rSize * cos);
            y = Math.floor(yMid + rMax * radius / rSize * sin);
            i = (y * xSize + x) * 4;
            r = srcPixels[i + 0];
            g = srcPixels[i + 1];
            b = srcPixels[i + 2];
            a = srcPixels[i + 3];
            i = (theta + radius * xSize) * 4;
            dstPixels[i + 0] = r;
            dstPixels[i + 1] = g;
            dstPixels[i + 2] = b;
            dstPixels[i + 3] = a;
        }
    }
};
var FromPolar = function(src, dst, opt) {
    var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x, y, dx, dy, r = 0, g = 0, b = 0, a = 0;
    var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt(x * x + y * y);
    rMax = rad > rMax ? rad : rMax;
    var rSize = ySize, tSize = xSize, radius, theta, phaseShift = opt.polarRotation || 0;
    var x1, y1;
    for(x = 0; x < xSize; x += 1)for(y = 0; y < ySize; y += 1){
        dx = x - xMid;
        dy = y - yMid;
        radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
        theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
        theta = theta * tSize / 360;
        x1 = Math.floor(theta);
        y1 = Math.floor(radius);
        i = (y1 * xSize + x1) * 4;
        r = srcPixels[i + 0];
        g = srcPixels[i + 1];
        b = srcPixels[i + 2];
        a = srcPixels[i + 3];
        i = (y * xSize + x) * 4;
        dstPixels[i + 0] = r;
        dstPixels[i + 1] = g;
        dstPixels[i + 2] = b;
        dstPixels[i + 3] = a;
    }
};
const Kaleidoscope = function(imageData) {
    var xSize = imageData.width, ySize = imageData.height;
    var x, y, xoff, i, r, g, b, a, srcPos, dstPos;
    var power = Math.round(this.kaleidoscopePower());
    var angle = Math.round(this.kaleidoscopeAngle());
    var offset = Math.floor(xSize * (angle % 360) / 360);
    if (power < 1) return;
    var tempCanvas = _utilJs.Util.createCanvasElement();
    tempCanvas.width = xSize;
    tempCanvas.height = ySize;
    var scratchData = tempCanvas.getContext('2d').getImageData(0, 0, xSize, ySize);
    ToPolar(imageData, scratchData, {
        polarCenterX: xSize / 2,
        polarCenterY: ySize / 2
    });
    var minSectionSize = xSize / Math.pow(2, power);
    while(minSectionSize <= 8){
        minSectionSize = minSectionSize * 2;
        power -= 1;
    }
    minSectionSize = Math.ceil(minSectionSize);
    var sectionSize = minSectionSize;
    var xStart = 0, xEnd = sectionSize, xDelta = 1;
    if (offset + minSectionSize > xSize) {
        xStart = sectionSize;
        xEnd = 0;
        xDelta = -1;
    }
    for(y = 0; y < ySize; y += 1)for(x = xStart; x !== xEnd; x += xDelta){
        xoff = Math.round(x + offset) % xSize;
        srcPos = (xSize * y + xoff) * 4;
        r = scratchData.data[srcPos + 0];
        g = scratchData.data[srcPos + 1];
        b = scratchData.data[srcPos + 2];
        a = scratchData.data[srcPos + 3];
        dstPos = (xSize * y + x) * 4;
        scratchData.data[dstPos + 0] = r;
        scratchData.data[dstPos + 1] = g;
        scratchData.data[dstPos + 2] = b;
        scratchData.data[dstPos + 3] = a;
    }
    for(y = 0; y < ySize; y += 1){
        sectionSize = Math.floor(minSectionSize);
        for(i = 0; i < power; i += 1){
            for(x = 0; x < sectionSize + 1; x += 1){
                srcPos = (xSize * y + x) * 4;
                r = scratchData.data[srcPos + 0];
                g = scratchData.data[srcPos + 1];
                b = scratchData.data[srcPos + 2];
                a = scratchData.data[srcPos + 3];
                dstPos = (xSize * y + sectionSize * 2 - x - 1) * 4;
                scratchData.data[dstPos + 0] = r;
                scratchData.data[dstPos + 1] = g;
                scratchData.data[dstPos + 2] = b;
                scratchData.data[dstPos + 3] = a;
            }
            sectionSize *= 2;
        }
    }
    FromPolar(scratchData, imageData, {
        polarRotation: 0
    });
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'kaleidoscopePower', 2, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'kaleidoscopeAngle', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Util.js":"98XwR","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4A3pb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mask", ()=>Mask
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
function pixelAt(idata, x, y) {
    var idx = (y * idata.width + x) * 4;
    var d = [];
    d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
    return d;
}
function rgbDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
}
function rgbMean(pTab) {
    var m = [
        0,
        0,
        0
    ];
    for(var i = 0; i < pTab.length; i++){
        m[0] += pTab[i][0];
        m[1] += pTab[i][1];
        m[2] += pTab[i][2];
    }
    m[0] /= pTab.length;
    m[1] /= pTab.length;
    m[2] /= pTab.length;
    return m;
}
function backgroundMask(idata, threshold) {
    var rgbv_no = pixelAt(idata, 0, 0);
    var rgbv_ne = pixelAt(idata, idata.width - 1, 0);
    var rgbv_so = pixelAt(idata, 0, idata.height - 1);
    var rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
    var thres = threshold || 10;
    if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {
        var mean = rgbMean([
            rgbv_ne,
            rgbv_no,
            rgbv_se,
            rgbv_so
        ]);
        var mask = [];
        for(var i = 0; i < idata.width * idata.height; i++){
            var d = rgbDistance(mean, [
                idata.data[i * 4],
                idata.data[i * 4 + 1],
                idata.data[i * 4 + 2], 
            ]);
            mask[i] = d < thres ? 0 : 255;
        }
        return mask;
    }
}
function applyMask(idata, mask) {
    for(var i = 0; i < idata.width * idata.height; i++)idata.data[4 * i + 3] = mask[i];
}
function erodeMask(mask, sw, sh) {
    var weights = [
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        1
    ];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var maskResult = [];
    for(var y = 0; y < sh; y++)for(var x = 0; x < sw; x++){
        var so = y * sw + x;
        var a = 0;
        for(var cy = 0; cy < side; cy++)for(var cx = 0; cx < side; cx++){
            var scy = y + cy - halfSide;
            var scx = x + cx - halfSide;
            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                var srcOff = scy * sw + scx;
                var wt = weights[cy * side + cx];
                a += mask[srcOff] * wt;
            }
        }
        maskResult[so] = a === 2040 ? 255 : 0;
    }
    return maskResult;
}
function dilateMask(mask, sw, sh) {
    var weights = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var maskResult = [];
    for(var y = 0; y < sh; y++)for(var x = 0; x < sw; x++){
        var so = y * sw + x;
        var a = 0;
        for(var cy = 0; cy < side; cy++)for(var cx = 0; cx < side; cx++){
            var scy = y + cy - halfSide;
            var scx = x + cx - halfSide;
            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                var srcOff = scy * sw + scx;
                var wt = weights[cy * side + cx];
                a += mask[srcOff] * wt;
            }
        }
        maskResult[so] = a >= 1020 ? 255 : 0;
    }
    return maskResult;
}
function smoothEdgeMask(mask, sw, sh) {
    var weights = [
        1 / 9,
        1 / 9,
        1 / 9,
        1 / 9,
        1 / 9,
        1 / 9,
        1 / 9,
        1 / 9,
        1 / 9
    ];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var maskResult = [];
    for(var y = 0; y < sh; y++)for(var x = 0; x < sw; x++){
        var so = y * sw + x;
        var a = 0;
        for(var cy = 0; cy < side; cy++)for(var cx = 0; cx < side; cx++){
            var scy = y + cy - halfSide;
            var scx = x + cx - halfSide;
            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                var srcOff = scy * sw + scx;
                var wt = weights[cy * side + cx];
                a += mask[srcOff] * wt;
            }
        }
        maskResult[so] = a;
    }
    return maskResult;
}
const Mask = function(imageData) {
    var threshold = this.threshold(), mask = backgroundMask(imageData, threshold);
    if (mask) {
        mask = erodeMask(mask, imageData.width, imageData.height);
        mask = dilateMask(mask, imageData.width, imageData.height);
        mask = smoothEdgeMask(mask, imageData.width, imageData.height);
        applyMask(imageData, mask);
    }
    return imageData;
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'threshold', 0, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gV012":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Noise", ()=>Noise
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const Noise = function(imageData) {
    var amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2, i;
    for(i = 0; i < nPixels; i += 4){
        data[i + 0] += half - 2 * half * Math.random();
        data[i + 1] += half - 2 * half * Math.random();
        data[i + 2] += half - 2 * half * Math.random();
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'noise', 0.2, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8NilK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pixelate", ()=>Pixelate
);
var _factoryJs = require("../Factory.js");
var _utilJs = require("../Util.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const Pixelate = function(imageData) {
    var pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, x, y, i, red, green, blue, alpha, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), xBinStart, xBinEnd, yBinStart, yBinEnd, xBin, yBin, pixelsInBin, data = imageData.data;
    if (pixelSize <= 0) {
        _utilJs.Util.error('pixelSize value can not be <= 0');
        return;
    }
    for(xBin = 0; xBin < nBinsX; xBin += 1)for(yBin = 0; yBin < nBinsY; yBin += 1){
        red = 0;
        green = 0;
        blue = 0;
        alpha = 0;
        xBinStart = xBin * pixelSize;
        xBinEnd = xBinStart + pixelSize;
        yBinStart = yBin * pixelSize;
        yBinEnd = yBinStart + pixelSize;
        pixelsInBin = 0;
        for(x = xBinStart; x < xBinEnd; x += 1){
            if (x >= width) continue;
            for(y = yBinStart; y < yBinEnd; y += 1){
                if (y >= height) continue;
                i = (width * y + x) * 4;
                red += data[i + 0];
                green += data[i + 1];
                blue += data[i + 2];
                alpha += data[i + 3];
                pixelsInBin += 1;
            }
        }
        red = red / pixelsInBin;
        green = green / pixelsInBin;
        blue = blue / pixelsInBin;
        alpha = alpha / pixelsInBin;
        for(x = xBinStart; x < xBinEnd; x += 1){
            if (x >= width) continue;
            for(y = yBinStart; y < yBinEnd; y += 1){
                if (y >= height) continue;
                i = (width * y + x) * 4;
                data[i + 0] = red;
                data[i + 1] = green;
                data[i + 2] = blue;
                data[i + 3] = alpha;
            }
        }
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'pixelSize', 8, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Util.js":"98XwR","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"45q74":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Posterize", ()=>Posterize
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const Posterize = function(imageData) {
    var levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels, i;
    for(i = 0; i < len; i += 1)data[i] = Math.floor(data[i] / scale) * scale;
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'levels', 0.5, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8KjCF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RGB", ()=>RGB
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const RGB = function(imageData) {
    var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), i, brightness;
    for(i = 0; i < nPixels; i += 4){
        brightness = (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]) / 255;
        data[i] = brightness * red;
        data[i + 1] = brightness * green;
        data[i + 2] = brightness * blue;
        data[i + 3] = data[i + 3];
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'red', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) return 255;
    else if (val < 0) return 0;
    else return Math.round(val);
});
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'green', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) return 255;
    else if (val < 0) return 0;
    else return Math.round(val);
});
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'blue', 0, _validatorsJs.RGBComponent, _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dNKU2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RGBA", ()=>RGBA
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const RGBA = function(imageData) {
    var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha(), i, ia;
    for(i = 0; i < nPixels; i += 4){
        ia = 1 - alpha;
        data[i] = red * alpha + data[i] * ia;
        data[i + 1] = green * alpha + data[i + 1] * ia;
        data[i + 2] = blue * alpha + data[i + 2] * ia;
    }
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'red', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) return 255;
    else if (val < 0) return 0;
    else return Math.round(val);
});
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'green', 0, function(val) {
    this._filterUpToDate = false;
    if (val > 255) return 255;
    else if (val < 0) return 0;
    else return Math.round(val);
});
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'blue', 0, _validatorsJs.RGBComponent, _factoryJs.Factory.afterSetFilter);
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'alpha', 1, function(val) {
    this._filterUpToDate = false;
    if (val > 1) return 1;
    else if (val < 0) return 0;
    else return val;
});

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"19I2Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sepia", ()=>Sepia
);
const Sepia = function(imageData) {
    var data = imageData.data, nPixels = data.length, i, r, g, b;
    for(i = 0; i < nPixels; i += 4){
        r = data[i + 0];
        g = data[i + 1];
        b = data[i + 2];
        data[i + 0] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
        data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
        data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jZigB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Solarize", ()=>Solarize
);
const Solarize = function(imageData) {
    var data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4, y = h;
    do {
        var offsetY = (y - 1) * w4;
        var x = w;
        do {
            var offset = offsetY + (x - 1) * 4;
            var r = data[offset];
            var g = data[offset + 1];
            var b = data[offset + 2];
            if (r > 127) r = 255 - r;
            if (g > 127) g = 255 - g;
            if (b > 127) b = 255 - b;
            data[offset] = r;
            data[offset + 1] = g;
            data[offset + 2] = b;
        }while (--x)
    }while (--y)
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1R9QS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Threshold", ()=>Threshold
);
var _factoryJs = require("../Factory.js");
var _nodeJs = require("../Node.js");
var _validatorsJs = require("../Validators.js");
const Threshold = function(imageData) {
    var level = this.threshold() * 255, data = imageData.data, len = data.length, i;
    for(i = 0; i < len; i += 1)data[i] = data[i] < level ? 0 : 255;
};
_factoryJs.Factory.addGetterSetter(_nodeJs.Node, 'threshold', 0.5, _validatorsJs.getNumberValidator(), _factoryJs.Factory.afterSetFilter);

},{"../Factory.js":"ifTus","../Node.js":"em6vr","../Validators.js":"5lPi2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"htaIB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isArrayLike(input) {
    return input.length !== undefined;
}
function loadSingleImage(image) {
    var promise = new Promise(function(resolve, reject) {
        if (image.naturalWidth) // If the browser can determine the naturalWidth the image is already loaded successfully
        resolve(image);
        else if (image.complete) // If the image is complete but the naturalWidth is 0px it is probably broken
        reject(image);
        else {
            image.addEventListener('load', fulfill);
            image.addEventListener('error', fulfill);
        }
        function fulfill() {
            if (image.naturalWidth) resolve(image);
            else reject(image);
            image.removeEventListener('load', fulfill);
            image.removeEventListener('error', fulfill);
        }
    });
    return Object.assign(promise, {
        image: image
    });
}
function loadImages(input, attributes) {
    if (attributes === void 0) attributes = {
    };
    if (input instanceof HTMLImageElement) return loadSingleImage(input);
    if (typeof input === 'string') {
        /* Create a <img> from a string */ var src = input;
        var image_1 = new Image();
        Object.keys(attributes).forEach(function(name) {
            return image_1.setAttribute(name, attributes[name]);
        });
        image_1.src = src;
        return loadSingleImage(image_1);
    }
    if (isArrayLike(input)) {
        // Momentarily ignore errors
        var reflect = function(img) {
            return loadImages(img, attributes).catch(function(error) {
                return error;
            });
        };
        var reflected = [].map.call(input, reflect);
        var tsFix_1 = Promise.all(reflected).then(function(results) {
            var loaded = results.filter(function(x) {
                return x.naturalWidth;
            });
            if (loaded.length === results.length) return loaded;
            return Promise.reject({
                loaded: loaded,
                errored: results.filter(function(x) {
                    return !x.naturalWidth;
                })
            });
        });
        // Variables named `tsFix` are only here because TypeScript hates Promise-returning functions.
        return tsFix_1;
    }
    var tsFix = Promise.reject(new TypeError('input is not an image, a URL string, or an array of them.'));
    return tsFix;
}
exports.default = loadImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"XPtCL":[function(require,module,exports) {
!function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = e || self).parseCssColor = n();
}(this, function() {
    "use strict";
    var e1 = {
        aliceblue: [
            240,
            248,
            255
        ],
        antiquewhite: [
            250,
            235,
            215
        ],
        aqua: [
            0,
            255,
            255
        ],
        aquamarine: [
            127,
            255,
            212
        ],
        azure: [
            240,
            255,
            255
        ],
        beige: [
            245,
            245,
            220
        ],
        bisque: [
            255,
            228,
            196
        ],
        black: [
            0,
            0,
            0
        ],
        blanchedalmond: [
            255,
            235,
            205
        ],
        blue: [
            0,
            0,
            255
        ],
        blueviolet: [
            138,
            43,
            226
        ],
        brown: [
            165,
            42,
            42
        ],
        burlywood: [
            222,
            184,
            135
        ],
        cadetblue: [
            95,
            158,
            160
        ],
        chartreuse: [
            127,
            255,
            0
        ],
        chocolate: [
            210,
            105,
            30
        ],
        coral: [
            255,
            127,
            80
        ],
        cornflowerblue: [
            100,
            149,
            237
        ],
        cornsilk: [
            255,
            248,
            220
        ],
        crimson: [
            220,
            20,
            60
        ],
        cyan: [
            0,
            255,
            255
        ],
        darkblue: [
            0,
            0,
            139
        ],
        darkcyan: [
            0,
            139,
            139
        ],
        darkgoldenrod: [
            184,
            134,
            11
        ],
        darkgray: [
            169,
            169,
            169
        ],
        darkgreen: [
            0,
            100,
            0
        ],
        darkgrey: [
            169,
            169,
            169
        ],
        darkkhaki: [
            189,
            183,
            107
        ],
        darkmagenta: [
            139,
            0,
            139
        ],
        darkolivegreen: [
            85,
            107,
            47
        ],
        darkorange: [
            255,
            140,
            0
        ],
        darkorchid: [
            153,
            50,
            204
        ],
        darkred: [
            139,
            0,
            0
        ],
        darksalmon: [
            233,
            150,
            122
        ],
        darkseagreen: [
            143,
            188,
            143
        ],
        darkslateblue: [
            72,
            61,
            139
        ],
        darkslategray: [
            47,
            79,
            79
        ],
        darkslategrey: [
            47,
            79,
            79
        ],
        darkturquoise: [
            0,
            206,
            209
        ],
        darkviolet: [
            148,
            0,
            211
        ],
        deeppink: [
            255,
            20,
            147
        ],
        deepskyblue: [
            0,
            191,
            255
        ],
        dimgray: [
            105,
            105,
            105
        ],
        dimgrey: [
            105,
            105,
            105
        ],
        dodgerblue: [
            30,
            144,
            255
        ],
        firebrick: [
            178,
            34,
            34
        ],
        floralwhite: [
            255,
            250,
            240
        ],
        forestgreen: [
            34,
            139,
            34
        ],
        fuchsia: [
            255,
            0,
            255
        ],
        gainsboro: [
            220,
            220,
            220
        ],
        ghostwhite: [
            248,
            248,
            255
        ],
        gold: [
            255,
            215,
            0
        ],
        goldenrod: [
            218,
            165,
            32
        ],
        gray: [
            128,
            128,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        greenyellow: [
            173,
            255,
            47
        ],
        grey: [
            128,
            128,
            128
        ],
        honeydew: [
            240,
            255,
            240
        ],
        hotpink: [
            255,
            105,
            180
        ],
        indianred: [
            205,
            92,
            92
        ],
        indigo: [
            75,
            0,
            130
        ],
        ivory: [
            255,
            255,
            240
        ],
        khaki: [
            240,
            230,
            140
        ],
        lavender: [
            230,
            230,
            250
        ],
        lavenderblush: [
            255,
            240,
            245
        ],
        lawngreen: [
            124,
            252,
            0
        ],
        lemonchiffon: [
            255,
            250,
            205
        ],
        lightblue: [
            173,
            216,
            230
        ],
        lightcoral: [
            240,
            128,
            128
        ],
        lightcyan: [
            224,
            255,
            255
        ],
        lightgoldenrodyellow: [
            250,
            250,
            210
        ],
        lightgray: [
            211,
            211,
            211
        ],
        lightgreen: [
            144,
            238,
            144
        ],
        lightgrey: [
            211,
            211,
            211
        ],
        lightpink: [
            255,
            182,
            193
        ],
        lightsalmon: [
            255,
            160,
            122
        ],
        lightseagreen: [
            32,
            178,
            170
        ],
        lightskyblue: [
            135,
            206,
            250
        ],
        lightslategray: [
            119,
            136,
            153
        ],
        lightslategrey: [
            119,
            136,
            153
        ],
        lightsteelblue: [
            176,
            196,
            222
        ],
        lightyellow: [
            255,
            255,
            224
        ],
        lime: [
            0,
            255,
            0
        ],
        limegreen: [
            50,
            205,
            50
        ],
        linen: [
            250,
            240,
            230
        ],
        magenta: [
            255,
            0,
            255
        ],
        maroon: [
            128,
            0,
            0
        ],
        mediumaquamarine: [
            102,
            205,
            170
        ],
        mediumblue: [
            0,
            0,
            205
        ],
        mediumorchid: [
            186,
            85,
            211
        ],
        mediumpurple: [
            147,
            112,
            219
        ],
        mediumseagreen: [
            60,
            179,
            113
        ],
        mediumslateblue: [
            123,
            104,
            238
        ],
        mediumspringgreen: [
            0,
            250,
            154
        ],
        mediumturquoise: [
            72,
            209,
            204
        ],
        mediumvioletred: [
            199,
            21,
            133
        ],
        midnightblue: [
            25,
            25,
            112
        ],
        mintcream: [
            245,
            255,
            250
        ],
        mistyrose: [
            255,
            228,
            225
        ],
        moccasin: [
            255,
            228,
            181
        ],
        navajowhite: [
            255,
            222,
            173
        ],
        navy: [
            0,
            0,
            128
        ],
        oldlace: [
            253,
            245,
            230
        ],
        olive: [
            128,
            128,
            0
        ],
        olivedrab: [
            107,
            142,
            35
        ],
        orange: [
            255,
            165,
            0
        ],
        orangered: [
            255,
            69,
            0
        ],
        orchid: [
            218,
            112,
            214
        ],
        palegoldenrod: [
            238,
            232,
            170
        ],
        palegreen: [
            152,
            251,
            152
        ],
        paleturquoise: [
            175,
            238,
            238
        ],
        palevioletred: [
            219,
            112,
            147
        ],
        papayawhip: [
            255,
            239,
            213
        ],
        peachpuff: [
            255,
            218,
            185
        ],
        peru: [
            205,
            133,
            63
        ],
        pink: [
            255,
            192,
            203
        ],
        plum: [
            221,
            160,
            221
        ],
        powderblue: [
            176,
            224,
            230
        ],
        purple: [
            128,
            0,
            128
        ],
        rebeccapurple: [
            102,
            51,
            153
        ],
        red: [
            255,
            0,
            0
        ],
        rosybrown: [
            188,
            143,
            143
        ],
        royalblue: [
            65,
            105,
            225
        ],
        saddlebrown: [
            139,
            69,
            19
        ],
        salmon: [
            250,
            128,
            114
        ],
        sandybrown: [
            244,
            164,
            96
        ],
        seagreen: [
            46,
            139,
            87
        ],
        seashell: [
            255,
            245,
            238
        ],
        sienna: [
            160,
            82,
            45
        ],
        silver: [
            192,
            192,
            192
        ],
        skyblue: [
            135,
            206,
            235
        ],
        slateblue: [
            106,
            90,
            205
        ],
        slategray: [
            112,
            128,
            144
        ],
        slategrey: [
            112,
            128,
            144
        ],
        snow: [
            255,
            250,
            250
        ],
        springgreen: [
            0,
            255,
            127
        ],
        steelblue: [
            70,
            130,
            180
        ],
        tan: [
            210,
            180,
            140
        ],
        teal: [
            0,
            128,
            128
        ],
        thistle: [
            216,
            191,
            216
        ],
        tomato: [
            255,
            99,
            71
        ],
        turquoise: [
            64,
            224,
            208
        ],
        violet: [
            238,
            130,
            238
        ],
        wheat: [
            245,
            222,
            179
        ],
        white: [
            255,
            255,
            255
        ],
        whitesmoke: [
            245,
            245,
            245
        ],
        yellow: [
            255,
            255,
            0
        ],
        yellowgreen: [
            154,
            205,
            50
        ]
    }, n1 = new RegExp(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/, "i"), r1 = "-?\\d*(?:\\.\\d+)", a1 = "(" + r1 + "?)", l1 = "(" + r1 + "?%)", t1 = ("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,\n    \\s*" + l1 + "\\s*,\n    \\s*" + l1 + "\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), s1 = new RegExp(t1), i1 = ("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*\n    \\s+" + l1 + "\n    \\s+" + l1 + "\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), o = new RegExp(i1), d = ("^\n  rgba?\\(\n    \\s*" + a1 + "\\s*,\n    \\s*" + a1 + "\\s*,\n    \\s*" + a1 + "\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), u = new RegExp(d), g = ("^\n  rgba?\\(\n    \\s*" + l1 + "\\s*,\n    \\s*" + l1 + "\\s*,\n    \\s*" + l1 + "\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g, ""), p = new RegExp(g), c = ("^\n  rgba?\\(\n    \\s*" + a1 + "\n    \\s+" + a1 + "\n    \\s+" + a1 + "\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g, ""), h = new RegExp(c), m = ("^\n  rgba?\\(\n    \\s*" + l1 + "\n    \\s+" + l1 + "\n    \\s+" + l1 + "\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g, ""), f = new RegExp(m), y = new RegExp(/^transparent$/, "i"), b = new RegExp("[^#a-f\\d]", "gi"), w = new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$", "i"), k = function(e, n, r) {
        return Math.min(Math.max(n, e), r);
    }, v = function(e) {
        var n = e;
        return "number" != typeof n && (n = n.endsWith("%") ? 255 * parseFloat(n) / 100 : parseFloat(n)), k(Math.round(n), 0, 255);
    }, x = function(e) {
        return k(parseFloat(e), 0, 100);
    };
    function E(e) {
        var n = e;
        return "number" != typeof n && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), k(n, 0, 1);
    }
    function R(e2) {
        var n2 = function(e, n) {
            if (void 0 === n && (n = {
            }), "string" != typeof e || b.test(e) || !w.test(e)) throw new TypeError("Expected a valid hex string");
            var r = 1;
            8 === (e = e.replace(/^#/, "")).length && (r = parseInt(e.slice(6, 8), 16) / 255, e = e.slice(0, 6)), 4 === e.length && (r = parseInt(e.slice(3, 4).repeat(2), 16) / 255, e = e.slice(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
            var a = parseInt(e, 16), l = a >> 16, t = a >> 8 & 255, s = 255 & a;
            return "array" === n.format ? [
                l,
                t,
                s,
                r
            ] : {
                red: l,
                green: t,
                blue: s,
                alpha: r
            };
        }(e2, {
            format: "array"
        });
        return $([
            null,
            n2[0],
            n2[1],
            n2[2],
            n2[3]
        ]);
    }
    function $(e) {
        var n = e[1], r = e[2], a = e[3], l = e[4];
        return void 0 === l && (l = 1), {
            type: "rgb",
            values: [
                n,
                r,
                a
            ].map(v),
            alpha: E(null === l ? 1 : l)
        };
    }
    /**
	 * parse-css-color
	 * @version v0.1.2
	 * @link http://github.com/noeldelgado/parse-css-color/
	 * @license MIT
	 */ return function(r2) {
        if ("string" != typeof r2) return null;
        var a2 = n1.exec(r2);
        if (a2) return R(a2[0]);
        var l2 = o.exec(r2) || s1.exec(r2);
        if (l2) return (function(e) {
            var n = e[1], r = e[2], a = e[3], l = e[4];
            void 0 === l && (l = 1);
            var t = n;
            return {
                type: "hsl",
                values: [
                    t = t.endsWith("turn") ? 360 * parseFloat(t) / 1 : t.endsWith("rad") ? Math.round(180 * parseFloat(t) / Math.PI) : parseFloat(t),
                    x(r),
                    x(a)
                ],
                alpha: E(null === l ? 1 : l)
            };
        })(l2);
        var t2 = h.exec(r2) || f.exec(r2) || u.exec(r2) || p.exec(r2);
        if (t2) return $(t2);
        if (y.exec(r2)) return $([
            null,
            0,
            0,
            0,
            0
        ]);
        var i = e1[r2.toLowerCase()];
        return i ? $([
            null,
            i[0],
            i[1],
            i[2],
            1
        ]) : null;
    };
});

},{}]},["l57BM","e5SF0"], "e5SF0", "parcelRequire0fd3")

//# sourceMappingURL=index.6ec07e10.js.map
