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
})({"js/js-25-functions.js":[function(require,module,exports) {
document.getElementById("btn25-1").onclick = function (event) {
  event.preventDefault(); //1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
  // 1 – если первое больше, чем второе; и 0 – если числа равны.

  alert("if a > b = 1; a < b = -1; a === b = 0");

  function checkNumbers(a, b) {
    if (a < b) {
      return "-1";
    } else if (a > b) {
      return "1";
    }

    return "0";
  }

  var a = +prompt("insert a", 50);
  var b = +prompt("insert b", 50);
  alert(checkNumbers(a, b));
}; //


document.getElementById("btn25-2").onclick = function (event) {
  event.preventDefault(); //Написать функцию, которая вычисляет факториал переданного ей числа.

  function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
  }

  var numberForCalcFactorial = prompt("insert number for calc factorial", 3);
  alert(factorial(numberForCalcFactorial));
}; //


document.getElementById("btn25-3").onclick = function (event) {
  event.preventDefault(); //3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
  // Например: цифры 1, 4, 9 превратятся в число 149.

  function sumDigits(a, b, c) {
    var digiitsToNumber = "".concat(a).concat(b).concat(c);
    return digiitsToNumber;
  }

  alert("Transform three digits to one number - function");
  alert(sumDigits(1, 7, 5));
}; //


document.getElementById("btn25-4").onclick = function (event) {
  event.preventDefault(); //4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
  // Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

  function calcSquare(a, b) {
    if (!b) {
      var squareOfRectangle = a * a;
      return squareOfRectangle;
    } else {
      var _squareOfRectangle = a * b;

      return _squareOfRectangle;
    }
  }

  alert("Sum of square - function");
  alert(calcSquare(6, 9));
}; //


document.getElementById("btn25-5").onclick = function (event) {
  event.preventDefault(); //5.Написать функцию, которая проверяет, является ли переданное ей число совершенным.
  //Совершенное число – это число, равное сумме всех своих собственных делителей.

  var checkIsPerfect = +prompt("Enter number for check is perfect", 28);

  function isPerfect(a) {
    if (a === 0) {
      return false;
    }

    var calc = 0;

    for (var i = 1; i < a; i++) {
      if (a % i === 0) {
        calc += i;
      }
    }

    console.log(calc);
    return calc === a;
  }

  alert("Is perfect ".concat(isPerfect(checkIsPerfect)));
}; //


document.getElementById("btn25-6").onclick = function (event) {
  event.preventDefault(); //6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
  //и выводит только те числа из диапазона, которые являются совершенными.
  //Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

  var findFrom = +prompt("Find perfect number from diapason, enter from", 10);
  var findTo = +prompt("Find perfect number from diapason, enter to", 10000);

  function isPerfect(a) {
    if (a === 0) {
      return false;
    }

    var calc = 0;

    for (var i = 1; i < a; i++) {
      if (a % i === 0) {
        calc += i;
      }
    }

    return calc === a;
  }

  function findPerfect(mn, mx) {
    var perfects = [];

    for (var i = mn; i < mx; i++) {
      if (isPerfect(i)) {
        perfects.push(i);
      }
    }

    return perfects;
  }

  alert("perfect numbers is ".concat(findPerfect(findFrom, findTo)));
}; //


document.getElementById("btn25-7").onclick = function (event) {
  event.preventDefault(); //.7Написать функцию, которая принимает время (часы, минуты, секунды)
  // и выводит его на экран в формате «чч:мм:сс».
  //Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

  var timeNow = function timeNow() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var sec = time.getSeconds(0);
    alert("time is now <<".concat(hours, ":").concat(minutes, ":").concat(sec, ">>"));
  };

  timeNow();
}; //


document.getElementById("btn25-8").onclick = function (event) {
  event.preventDefault(); //8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

  var timeNowInSwconds = function timeNowInSwconds() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var sec = time.getSeconds(0);
    var totalSeconds = (hours * 60 + minutes) * 60 + sec;
    alert("time is now <<".concat(hours, ":").concat(minutes, ":").concat(sec, ">> = ").concat(totalSeconds, " seconds"));
  };

  timeNowInSwconds();
}; //


document.getElementById("btn25-9").onclick = function (event) {
  event.preventDefault(); //9.Написать функцию, которая принимает количество секунд,
  // переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»

  var inputSeconds = +prompt("Enert please, how many seconds convert to <<hh.mm.ss>>", 50000);

  var convertSeconds = function convertSeconds(s) {
    var h = Math.floor(s / (60 * 60));
    s %= 60 * 60;
    var m = Math.floor(s / 60);
    var sec = s % 60;
    return "<<" + h + ":" + m + ":" + sec + ">>";
  };

  alert(convertSeconds(inputSeconds));
}; //


document.getElementById("btn25-10").onclick = function (event) {
  event.preventDefault(); //10.Написать функцию, которая считает разницу между датами.

  var startHours = +prompt("Enter start Hours", 1);
  var startMinutes = +prompt("Enter start Minutes", 22);
  var startSeconds = +prompt("Enter start Seconds", 33);
  var endHours = +prompt("Enter end Hours", 12);
  var endMinutes = +prompt("Enter end Minutes", 33);
  var endSeconds = +prompt("Enter end Seconds", 44);

  function timeToSeconds(h, m, s) {
    var totalSeconds = (h * 60 + m) * 60 + s;
    return totalSeconds;
  }

  var convertStartToSeconds = timeToSeconds(startHours, startMinutes, startSeconds);
  console.log(convertStartToSeconds);
  var convertEndToSeconds = timeToSeconds(endHours, endMinutes, endSeconds);
  console.log(convertEndToSeconds);
  var diff = convertEndToSeconds - convertStartToSeconds;
  console.log(diff);
  var resultofSeconds = convertSeconds;

  var convertSeconds = function convertSeconds(s) {
    var h = Math.floor(s / (60 * 60));
    s %= 60 * 60;
    var m = Math.floor(s / 60);
    var sec = s % 60;
    return "<<" + h + ":" + m + ":" + sec + ">>";
  };

  alert(convertSeconds(diff));
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49903" + '/');

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
},{}]},{},["C:/Users/Yarko/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/js-25-functions.js"], null)
//# sourceMappingURL=/js-25-functions.ba593c90.js.map