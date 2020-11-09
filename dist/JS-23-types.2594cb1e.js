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
})({"js/JS-23-types.js":[function(require,module,exports) {
document.getElementById("btn23-1").onclick = function (event) {
  event.preventDefault(); //1.Запросить у пользователя его возраст и определить,
  // кем он является: ребенком (0–2), подростком (12–18),
  //взрослым (18_60) или пенсионером (60– ...)

  var age = +prompt("Enter your age pls");

  if (age != 0 && age <= 12 && age != null) {
    alert("you are child");
  } else if (age > 12 && age < 18) {
    alert("you are teen");
  } else if (age >= 18 && age < 60) {
    alert("you are adult");
    0;
  } else if (age >= 60) {
    alert("you are pensioner");
  } else {
    alert("try again");
  }
}; //


document.getElementById("btn23-2").onclick = function (event) {
  event.preventDefault(); //2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
  // который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

  var inputKey = Number(prompt("Enter number from 0 to 9, than return symbol for this number"));

  switch (true) {
    case inputKey == 1:
      alert("your symbol = \"!\"");
      break;

    case inputKey == 2:
      alert("your symbol = \"@\"");
      break;

    case inputKey == 3:
      alert("your symbol = \"#\"");
      break;

    case inputKey == 4:
      alert("your symbol = \"$\"");
      break;

    case inputKey == 5:
      alert("your symbol = \"%\"");
      break;

    case inputKey == 6:
      alert("your symbol = \"^\"");
      break;

    case inputKey == 7:
      alert("your symbol = \"&\"");
      break;

    case inputKey == 8:
      alert("your symbol = \"*\"");
      break;

    case inputKey == 9:
      alert("your symbol = \"(\"");
      break;

    case inputKey == 0:
      alert("your symbol = \")\"");
      break;

    default:
      alert("try again");
      break;
  }
}; //


document.getElementById("btn23-3").onclick = function (event) {
  event.preventDefault(); //3.Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

  var threeDigitNumber = +prompt("enter three-digit number please, for checked identical numbers in it");
  var check1 = parseInt(threeDigitNumber / 100);
  console.log(check1);
  var check2 = parseInt(threeDigitNumber / 10) % 10;
  console.log(check2);
  var check3 = threeDigitNumber % 10;
  console.log(check3);

  if (check1 != check2 && check2 != check3 && check1 != check3) {
    alert("no same digits");
  } else {
    alert("find same digits");
  }
}; //


document.getElementById("btn23-4").onclick = function (event) {
  event.preventDefault(); //4.Запросить у пользователя год и проверить, високосный он или нет.
  // Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

  var isLeapYear = +prompt("for check a leap year enter 'YYYY' please");

  if (isLeapYear % 400 === 0 || isLeapYear % 4 === 0 && isLeapYear % 100 != 0) {
    alert("yes");
  } else {
    alert("not");
  }
}; //


document.getElementById("btn23-5").onclick = function (event) {
  event.preventDefault(); //5.Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

  var isPalindrom = +prompt("check number for is it palindrom");
  var forCheckPalindrom = isPalindrom;
  var transformNumber = 0;

  while (forCheckPalindrom > 0) {
    var y = forCheckPalindrom % 10;
    transformNumber = transformNumber * 10 + y;
    forCheckPalindrom = parseInt(forCheckPalindrom / 10);
  }

  console.log(transformNumber);
  console.log(isPalindrom);
  var palindromResult = isPalindrom === transformNumber ? "it is" : "it is not";
  alert(palindromResult);
}; //


document.getElementById("btn23-6").onclick = function (event) {
  event.preventDefault(); //6.Написать конвертор валют. Пользователь вводит количество USD, выбирает,
  //в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

  var inputUsd = +prompt("Eter how much dollars you want to convert");
  var inputCurrency = prompt("Enter for choise (EUR UAH AZN or eur uah azn) please");
  var usdToEur = 0.7;
  var usdToUah = 27.3;
  var usdToAzn = 158;

  switch (true) {
    case inputCurrency == "EUR" || inputCurrency == "eur":
      var convertEur = inputUsd * usdToEur;
      alert(convertEur);
      break;

    case inputCurrency == "UAH" || inputCurrency == "uah":
      var convertUah = inputUsd * usdToUah;
      alert(convertUah);
      break;

    case inputCurrency == "AZN" || inputCurrency == "azn":
      var convertAzn = inputUsd * usdToAzn;
      alert(convertAzn);
      break;

    default:
      alert("Try again please");
      break;
  }
}; //


document.getElementById("btn23-7").onclick = function (event) {
  event.preventDefault(); //7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
  //от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

  var purchaseAmount = +prompt("your discont 200-300=3%; 300-500=5%; >500=7%; Enter your summ please");
  var discont = 0;

  switch (true) {
    case purchaseAmount >= 200 && purchaseAmount <= 299:
      discont = 3;
      break;

    case purchaseAmount >= 300 && purchaseAmount <= 499:
      discont = 5;
      break;

    case purchaseAmount >= 500:
      discont = 7;
      break;

    default:
      break;
  }

  var yourTotalSum = purchaseAmount - purchaseAmount / 100 * discont;
  alert("Your total sum ".concat(yourTotalSum));
}; //


document.getElementById("btn23-8").onclick = function (event) {
  event.preventDefault(); //8.Запросить у пользователя длину окружности и периметр квадрата.
  //Определить, может ли такая окружность поместиться в указанный квадрат.

  var lenghtOfCircle = +prompt("Enter lenght of circle please");
  var perimetrOfSquare = +prompt("Enter perimetr of square please");
  var diametrOfCircle = lenghtOfCircle / 3.14;
  var compareSize = perimetrOfSquare > diametrOfCircle ? "can insert circle in square" : "can not insert circle in square";
  alert(compareSize);
}; //


document.getElementById("btn23-9").onclick = function (event) {
  event.preventDefault(); //9.Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла.
  //После вопросов выведите пользователю количество набранных баллов.

  var z = 0;

  for (var i = 0; i < 3; i++) {
    alert("how much ".concat(i, " + ").concat(i, " ?, true = 2 points"));
    var x = i + i;
    confirm("".concat(i, " + ").concat(i, " = ").concat(x + 1));
    confirm("".concat(i, " + ").concat(i, " = ").concat(x + 2));
    var rightAnswer = confirm("".concat(i, " + ").concat(i, " = ").concat(x));

    if (rightAnswer == true) {
      rightAnswer = 2;
      z = z + rightAnswer;
    }

    console.log("".concat(rightAnswer, " and ").concat(z));
  }

  alert("you have ".concat(z, " points"));
}; //


document.getElementById("btn23-10").onclick = function (event) {
  event.preventDefault(); //10.Запросить дату (день, месяц, год) и вывести следующую за ней дату.
  // Учтите возможность перехода на следующий месяц, год, а также високосный год.

  var date = new Date(prompt("Enter date in format like as mm.dd.year"));
  date.setDate(date.getDate() + 1);
  alert("tomorrow it will be ".concat(date));
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
},{}]},{},["C:/Users/Yarko/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/JS-23-types.js"], null)
//# sourceMappingURL=/JS-23-types.2594cb1e.js.map