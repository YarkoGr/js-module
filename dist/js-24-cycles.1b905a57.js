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
})({"js/js-24-cycles.js":[function(require,module,exports) {
document.getElementById("btn24-1").onclick = function (event) {
  event.preventDefault(); //1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.

  var sumForAlert = 0;

  while (true) {
    var sumOfNumbers = +prompt("Enter numbers for sum");
    if (!sumOfNumbers) break;
    sumForAlert += sumOfNumbers;
  }

  alert("your sum ".concat(sumForAlert));
}; // //


document.getElementById("btn24-2").onclick = function (event) {
  event.preventDefault(); //2.Запросить 2 числа и найти только наибольший общий делитель.

  var firstNumber = +prompt("Enter first number, please");
  var secondNumber = +prompt("Enter second number, please");
  var divider = 0;

  while (firstNumber !== 0) {
    divider = secondNumber % firstNumber;
    secondNumber = firstNumber;
    firstNumber = divider;
  }

  alert(secondNumber);
}; // //


document.getElementById("btn24-3").onclick = function (event) {
  event.preventDefault(); //3.Запросить у пользователя число и вывести все делители этого числа.

  var numberForDivid = +prompt("Enter some nuber, and i show you all divided numbers");
  var forCicle = numberForDivid;

  for (var i = 1; i < forCicle; i++) {
    var x = forCicle % i;

    if (x == 0) {
      alert(i);
    }
  }
}; // //


document.getElementById("btn24-4").onclick = function (event) {
  event.preventDefault(); //4.Определить количество цифр в введенном числе.

  var lenghtOfNumber = prompt("calculate lenght of nuber please");
  alert(lenghtOfNumber.length);
}; // //


document.getElementById("btn24-5").onclick = function (event) {
  event.preventDefault(); //5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
  // При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

  var zero = 0;
  var minus = 0;
  var plus = 0;
  var even = 0;
  var odd = 0;

  for (var i = 1; i <= 10; i++) {
    var number = +prompt("insert ten numbers, please, that is number ".concat(i));

    if (number == 0) {
      zero += 1;
    } else if (number < 0) {
      minus += 1;
    } else {
      plus += 1;
    }

    if (number % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }

  alert("you insert null = ".concat(zero, "; minuses = ").concat(minus, "; pluses = ").concat(plus, "; evens = ").concat(even, "; odds = ").concat(odd));
}; //


document.getElementById("btn24-6").onclick = function (event) {
  event.preventDefault(); //6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
  // И так до тех пор, пока пользователь не откажется.

  while (true) {
    var numberA = +prompt("For calculate, insert firt number");
    var numberB = +prompt("For calculate, insert firt number");
    var action = prompt("For calculate, insert '*' '/' '+' '-'");
    var result = 0;

    if (action == "*") {
      result = numberA * numberB;
      alert(result);
    } else if (action == "/") {
      result = numberA / numberB;
      alert(result);
    } else if (action == "+") {
      result = numberA + numberB;
      alert(result);
    } else {
      result = numberA - numberB;
      alert(result);
    }

    var conf = confirm("do you want again?");

    if (!conf) {
      break;
    }
  }
}; //


document.getElementById("btn24-7").onclick = function (event) {
  event.preventDefault(); //7.Запросить у пользователя число и на сколько цифр его сдвинуть.
  //Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

  var freeNumber = prompt("enter some number, please");
  var moveNumber = prompt("how many digit replace");
  alert(freeNumber.slice(moveNumber) + freeNumber.slice(0, moveNumber));
}; //


document.getElementById("btn24-8").onclick = function (event) {
  event.preventDefault(); //8.Зациклить вывод дней недели таким образом: «День недели.
  // Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

  var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var countDays = 0;
  alert("Today is = " + daysOfWeek[countDays]);

  while (true) {
    var conf = confirm("do show you next day?");

    if (conf) {
      countDays += 1;
      alert("Today is = " + daysOfWeek[countDays]);
    } else {
      break;
    }
  }
}; //


document.getElementById("btn24-9").onclick = function (event) {
  event.preventDefault(); //9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

  var showTable = alert;

  for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
      console.log("".concat(i, " * ").concat(j, " = ").concat(i * j));
    }
  }

  alert("check console");
}; //


document.getElementById("btn24-10").onclick = function (event) {
  event.preventDefault(); //Игра «Угадай число».

  alert("Guess the number from 0 to 100");
  var beginNumber = 0;
  var lastNumber = 100;
  var symbol = "";

  do {
    var counting = Math.floor((lastNumber - beginNumber) / 2 + beginNumber);
    symbol = prompt("your number > or < or = ".concat(counting), "> < =");

    if (symbol == ">") {
      beginNumber = counting;
    } else if (symbol == "<") {
      lastNumber = counting;
    } else if (symbol == "=") {
      alert("your number is ".concat(counting));
      break;
    } else {
      alert("input wrong, try again please");
      break;
    }
  } while (symbol !== "=");
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
},{}]},{},["C:/Users/Yarko/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/js-24-cycles.js"], null)
//# sourceMappingURL=/js-24-cycles.1b905a57.js.map