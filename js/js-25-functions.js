document.getElementById("btn25-1").onclick = (event) => {
    event.preventDefault();
    //1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
    // 1 – если первое больше, чем второе; и 0 – если числа равны.
    alert(`if a > b = 1; a < b = -1; a === b = 0`);

    function checkNumbers(a, b) {
        if (a < b) {
            return "-1";
        } else if (a > b) {
            return "1";
        }
        return "0";
    }
    const a = +prompt(`insert a`, 50);
    const b = +prompt(`insert b`, 50);
    alert(checkNumbers(a, b));
};
//
document.getElementById("btn25-2").onclick = (event) => {
    event.preventDefault();
    //Написать функцию, которая вычисляет факториал переданного ей числа.
    function factorial(n) {
        return n != 1 ? n * factorial(n - 1) : 1;
    }
    const numberForCalcFactorial = prompt(`insert number for calc factorial`, 3);
    alert(factorial(numberForCalcFactorial));
};
//
document.getElementById("btn25-3").onclick = (event) => {
    event.preventDefault();
    //3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
    // Например: цифры 1, 4, 9 превратятся в число 149.
    function sumDigits(a, b, c) {
        const digiitsToNumber = `${a}${b}${c}`;
        return digiitsToNumber;
    }
    alert(`Transform three digits to one number - function`);
    alert(sumDigits(1, 7, 5));
};
//
document.getElementById("btn25-4").onclick = (event) => {
    event.preventDefault();
    //4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
    // Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
    function calcSquare(a, b) {
        if (!b) {
            const squareOfRectangle = a * a;
            return squareOfRectangle;
        } else {
            const squareOfRectangle = a * b;
            return squareOfRectangle;
        }
    }
    alert("Sum of square - function");
    alert(calcSquare(6, 9));
};
//
document.getElementById("btn25-5").onclick = (event) => {
    event.preventDefault();
    //5.Написать функцию, которая проверяет, является ли переданное ей число совершенным.
    //Совершенное число – это число, равное сумме всех своих собственных делителей.
    const checkIsPerfect = +prompt(`Enter number for check is perfect`, 28);

    function isPerfect(a) {
        if (a === 0) {
            return false;
        }
        let calc = 0;
        for (let i = 1; i < a; i++) {
            if (a % i === 0) {
                calc += i;
            }
        }
        console.log(calc);
        return calc === a;
    }
    alert(`Is perfect ${isPerfect(checkIsPerfect)}`);
};
//
document.getElementById("btn25-6").onclick = (event) => {
    event.preventDefault();
    //6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
    //и выводит только те числа из диапазона, которые являются совершенными.
    //Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
    const findFrom = +prompt("Find perfect number from diapason, enter from", 10);
    const findTo = +prompt("Find perfect number from diapason, enter to", 10000);

    function isPerfect(a) {
        if (a === 0) {
            return false;
        }
        let calc = 0;
        for (let i = 1; i < a; i++) {
            if (a % i === 0) {
                calc += i;
            }
        }
        return calc === a;
    }

    function findPerfect(mn, mx) {
        const perfects = [];
        for (let i = mn; i < mx; i++) {
            if (isPerfect(i)) {
                perfects.push(i);
            }
        }
        return perfects;
    }

    alert(`perfect numbers is ${findPerfect(findFrom, findTo)}`);
};
//
document.getElementById("btn25-7").onclick = (event) => {
    event.preventDefault();
    //.7Написать функцию, которая принимает время (часы, минуты, секунды)
    // и выводит его на экран в формате «чч:мм:сс».
    //Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

    let timeNow = () => {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const sec = time.getSeconds(0);
        alert(`time is now <<${hours}:${minutes}:${sec}>>`);
    };
    timeNow();
};
//
document.getElementById("btn25-8").onclick = (event) => {
    event.preventDefault();
    //8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
    let timeNowInSwconds = () => {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const sec = time.getSeconds(0);
        const totalSeconds = (hours * 60 + minutes) * 60 + sec;
        alert(
            `time is now <<${hours}:${minutes}:${sec}>> = ${totalSeconds} seconds`
        );
    };
    timeNowInSwconds();
};
//
document.getElementById("btn25-9").onclick = (event) => {
    event.preventDefault();
    //9.Написать функцию, которая принимает количество секунд,
    // переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»
    const inputSeconds = +prompt(
        "Enert please, how many seconds convert to <<hh.mm.ss>>",
        50000
    );

    const convertSeconds = (s) => {
        const h = Math.floor(s / (60 * 60));
        s %= 60 * 60;
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return "<<" + h + ":" + m + ":" + sec + ">>";
    };
    alert(convertSeconds(inputSeconds));
};
//
document.getElementById("btn25-10").onclick = (event) => {
    event.preventDefault();
    //10.Написать функцию, которая считает разницу между датами.

    const startHours = +prompt(`Enter start Hours`, 1);
    const startMinutes = +prompt(`Enter start Minutes`, 22);
    const startSeconds = +prompt(`Enter start Seconds`, 33);
    const endHours = +prompt(`Enter end Hours`, 12);
    const endMinutes = +prompt(`Enter end Minutes`, 33);
    const endSeconds = +prompt(`Enter end Seconds`, 44);

    function timeToSeconds(h, m, s) {
        const totalSeconds = (h * 60 + m) * 60 + s;
        return totalSeconds;
    }
    const convertStartToSeconds = timeToSeconds(
        startHours,
        startMinutes,
        startSeconds
    );
    console.log(convertStartToSeconds);

    const convertEndToSeconds = timeToSeconds(endHours, endMinutes, endSeconds);
    console.log(convertEndToSeconds);

    const diff = convertEndToSeconds - convertStartToSeconds;
    console.log(diff);

    const resultofSeconds = convertSeconds;
    const convertSeconds = (s) => {
        const h = Math.floor(s / (60 * 60));
        s %= 60 * 60;
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return "<<" + h + ":" + m + ":" + sec + ">>";
    };
    alert(convertSeconds(diff));
};