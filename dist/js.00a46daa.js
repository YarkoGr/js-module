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
},{}],"js/js-24-cycles.js":[function(require,module,exports) {
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
},{}],"js/js-25-functions.js":[function(require,module,exports) {
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
},{}],"js/js-26-objects.js":[function(require,module,exports) {
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
},{}],"js/js-27-arrays.js":[function(require,module,exports) {
//
//1.Создать массив «Список покупок».
// Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом
document.getElementById("btn27-1-1").onclick = function (event) {
  event.preventDefault(); //Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

  var shopList = [{
    name: "shugar",
    amount: 4,
    isBought: true
  }, {
    name: "apples",
    amount: 2,
    isBought: false
  }, {
    name: "flour",
    amount: 3,
    isBought: true
  }, {
    name: "strawberry",
    amount: 6,
    isBought: false
  }];
  console.log(shopList);
  shopList.sort(function (a, b) {
    return a.isBought - b.isBought;
  });
  var prinList = "";

  for (var _i = 0, _shopList = shopList; _i < _shopList.length; _i++) {
    var i = _shopList[_i];
    prinList += [i.name] + "  - amount = " + [i.amount] + "; Is bought = " + [i.isBought] + "\n";
  }

  alert(prinList);
}; //


document.getElementById("btn27-1-2").onclick = function (event) {
  event.preventDefault(); //Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
  //необходимо увеличивать количество в существующей покупке, а не добавлять новую.

  var shopList = [{
    name: "shugar",
    amount: 4,
    isBought: true
  }, {
    name: "apples",
    amount: 2,
    isBought: false
  }, {
    name: "flour",
    amount: 3,
    isBought: true
  }, {
    name: "strawberry",
    amount: 6,
    isBought: false
  }]; // console.log(shopList);

  function addToShopList() {
    var addToList = prompt("Enter name of product for add to Shop list", "flour");

    for (var i in shopList) {
      if (addToList === shopList[i].name) {
        shopList[i].amount += 1;
      } else {
        shopList.push({
          name: addToList,
          amount: 1,
          isBought: false
        });
        return shopList;
      }
    }
  }

  addToShopList(shopList);
  console.log(shopList);
  var prinList = "";

  for (var _i2 = 0, _shopList2 = shopList; _i2 < _shopList2.length; _i2++) {
    var i = _shopList2[_i2];
    prinList += [i.name] + "  - amount = " + [i.amount] + "; Is bought = " + [i.isBought] + "\n";
  }

  alert("Your new shop list is \n ".concat(prinList));
};
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("./JS-23-types");

require("./js-24-cycles");

require("./js-25-functions");

require("./js-26-objects");

require("./js-27-arrays");

//
document.getElementById("btn22-1").onclick = function (event) {
  event.preventDefault(); //1.вітання з юзером ))

  var name = prompt("Enter your name please");
  alert("Hello ".concat(name));
}; //


document.getElementById("btn22-2").onclick = function (event) {
  event.preventDefault(); //2.скільки тобі років

  var year = prompt("Please, enter your year of birthday");
  var howOld = 2020 - year;
  alert("You have ".concat(howOld));
  console.log(howOld);
}; //


document.getElementById("btn22-3").onclick = function (event) {
  event.preventDefault(); //3.периметр квадрата

  var londSideCube = prompt("input length side of square");
  var perimetr = londSideCube * 4;
  alert("perimetr = ".concat(perimetr));
}; //


document.getElementById("btn22-4").onclick = function (event) {
  event.preventDefault(); //4.площа кола

  var longCircle = prompt("input length of circle");
  var areaOfCircle = 3.14 * Math.pow(longCircle, 2);
  alert("area = ".concat(areaOfCircle));
}; //


document.getElementById("btn22-5").onclick = function (event) {
  event.preventDefault(); //5.дистанція+час=швидкість руху

  var distance = prompt("What distance do you need(km)");
  var time = prompt("How many time do you have(hour)");
  var countKmPerHour = distance / time;
  alert("You must move ".concat(countKmPerHour, " km/hour"));
}; //


document.getElementById("btn22-6").onclick = function (event) {
  event.preventDefault(); //6.конверт долар => євро

  var dollars = prompt("How many dollars do you whant convert to euro");
  var crosscurs = 1.32;
  var euro = dollars * crosscurs;
  alert("you would be have ".concat(euro, " euro"));
}; //


document.getElementById("btn22-7").onclick = function (event) {
  event.preventDefault(); //7.прорахунок кількості файлів для флешок

  var memoryFlashCard = prompt("How many GB has your flash card");
  var fileSize = 820;
  var countFiles = memoryFlashCard * 1000 / fileSize;
  alert("You can record ".concat(parseInt(countFiles), " files with size 820mb"));
}; //


document.getElementById("btn22-8").onclick = function (event) {
  event.preventDefault(); //8.кількість шоколаду на певну суму зі здачею

  var money = prompt("How many money dou have");
  var cost = prompt("What is the price of chokolate");
  var amount = money / cost;
  var change = money % cost;

  if (amount > 1) {
    alert("You can by ".concat(parseInt(amount), " chokolates and have ").concat(change, " change"));
  } else {
    alert("You can't by");
  }
}; //


document.getElementById("btn22-9").onclick = function (event) {
  event.preventDefault(); //9.дзеркальне відображення числа

  var numberForRevers = prompt("Enter number for revers");
  var x = numberForRevers;
  var rev = 0;

  while (x > 0) {
    var y = x % 10;
    rev = rev * 10 + y;
    x = parseInt(x / 10);
  }

  alert("Yor revers number ".concat(rev));
}; // //алгоритм-початок циклу while (x > 0)
// x = 123 //допустим ввели 123
// y = 0
// y = 123 % 10 = 3             //перша ітерація
// revers=((0 * 10) +3) = 3
// x = parseInt (123 / 10) = 12
// x = 12
// y = 12 % 10 = 2               //друга ітерація
// revers=((3 * 10) +2) = 32
// x = parseInt (12 / 10) = 1
// x = 1
// y = 1 % 10 = 1               //третя ітерація
// revers=((32 * 10) +1) = 321
// x = parseInt (1 / 10) = 0 //кінець циклу while (x > 0)
//


document.getElementById("btn22-10").onclick = function (event) {
  event.preventDefault(); //10.розрахунок депозиту

  var sumDeposit = prompt("insert your sum deposit");
  var month = prompt("insert how many month");
  var moneyFromDeposit = sumDeposit / 12 * 0.05 * month;
  alert("your earn money ".concat(moneyFromDeposit));
  alert("we are finish - good job");
};
},{"./JS-23-types":"js/JS-23-types.js","./js-24-cycles":"js/js-24-cycles.js","./js-25-functions":"js/js-25-functions.js","./js-26-objects":"js/js-26-objects.js","./js-27-arrays":"js/js-27-arrays.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64960" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map