// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/js-26-objects.js":[function(require,module,exports) {
// document.getElementById("btn26-1").onclick = (event) => {
//     event.preventDefault();};
document.getElementById("btn26-1").onclick = function (event) {
  event.preventDefault(); //1.Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
  //и следующие функции для работы с этим объектом:

  var car = {
    producer: "Japan",
    model: "Toyota",
    year: 2015,
    speed: 100
  }; //Функция для вывода на экран информации об автомобиле;

  for (var key in car) {
    alert(key);
    alert(car[key]);
  } //Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
  // Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


  var timeForDistance = +prompt("Enter your distance 'km' for this car", 550);

  var calcTimeForDistance = function calcTimeForDistance(a) {
    var needTimeForDistance = a / car.speed;
    console.log(needTimeForDistance);
    var timeForPause = Math.floor(needTimeForDistance / 4);
    console.log(timeForPause);
    var totalTime = needTimeForDistance + timeForPause;
    return totalTime;
  };

  alert(calcTimeForDistance(timeForDistance));
}; //


document.getElementById("btn26-2").onclick = function (event) {
  event.preventDefault(); //2.Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
  // и следующие функции для работы с этим объектом:

  var numerator1 = +prompt("enter numerator please", 8);
  var denominator1 = +prompt("enter denominator, please", 22);
  var numerator2 = +prompt("enter numerator please", 12);
  var denominator2 = +prompt("enter denominator, please", 32);
  var factions1 = {
    numerator1: numerator1,
    denominator1: denominator1
  };
  var factions2 = {
    numerator2: numerator2,
    denominator2: denominator2
  };

  function leastDividerOfTwoNumbers(x, y) {
    if (typeof x !== "number" || typeof y !== "number") return false;
    return !x || !y ? 0 : Math.abs(x * y / biggestDividerOfTwoNumbers(x, y));
  }

  function biggestDividerOfTwoNumbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }

    return x;
  }

  var commonDenom = leastDividerOfTwoNumbers(factions1.denominator1, factions2.denominator2);

  function plusFactions() {
    var resultPlus = commonDenom / factions1.denominator1 * factions1.numerator1 + commonDenom / factions2.denominator2 * factions2.numerator2;
    return resultPlus;
  }

  alert("Plus function = ".concat(plusFactions(), ";"));

  function minusFactions() {
    var resultPlus = commonDenom / factions1.denominator1 * factions1.numerator1 - commonDenom / factions2.denominator2 * factions2.numerator2;
    return resultPlus;
  }

  alert("Plus function = ".concat(minusFactions(), ";"));

  function multiplicationFactions() {
    var result = factions1.numerator1 * factions2.numerator2 / (factions1.denominator1 * factions2.denominator2);
    return result;
  }

  alert("Plus function = ".concat(multiplicationFactions(), ";"));

  function divisionFactions() {
    var result = factions1.numerator1 * factions2.denominator2 / (factions1.denominator1 * factions2.numerator2);
    return result;
  }

  alert("Plus function = ".concat(divisionFactions(), ";"));
}; //


document.getElementById("btn26-3").onclick = function (event) {
  event.preventDefault(); //3.Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

  var now = new Date();
  alert(now.toLocaleTimeString());
  var addSec = +prompt("Time is now ".concat(now.toLocaleTimeString(), " How many seconds add to this time"), 120);
  var date1 = new Date();
  var newDateSec = new Date();
  newDateSec.setSeconds(date1.getSeconds() + addSec);
  alert(newDateSec.toLocaleTimeString());
  var addMin = +prompt("Time is now ".concat(now.toLocaleTimeString(), " How many minutes add to this time"), 24);
  var newDateMin = new Date();
  newDateMin.setMinutes(date1.getMinutes() + addMin);
  alert(newDateMin.toLocaleTimeString());
  var addHours = +prompt("Time is now ".concat(now.toLocaleTimeString(), " How many minutes add to this time"), 4);
  var newDateHours = new Date();
  newDateHours.setHours(date1.getHours() + addHours);
  alert(newDateHours.toLocaleTimeString()); // const nowDate = new Date();
  // const hours = nowDate.getHours();
  // const minutes = nowDate.getMinutes();
  // const seconds = nowDate.getSeconds();
  // const myDateObj = {
  //     hours: nowDate.getHours(),
  //     minutes: nowDate.getMinutes(),
  //     seconds: nowDate.getSeconds(),
  // };
  // alert(`${hours}:${minutes}:${seconds}`);
  // for (let key in myDateObj) {
  //     alert(myDateObj[key]);
  //     alert(key);
  // }
  // for (let key in myDateObj) {
  //     alert(`${myDateObj.hours}:${myDateObj.minutes}:${myDateObj.seconds}`);
  // }
};
},{}],"C:/Users/Yarko/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50304" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Yarko/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/js-26-objects.js"], null)
//# sourceMappingURL=/js-26-objects.fe0e5774.js.map