document.getElementById("btn24-1").onclick = (event) => {
    event.preventDefault();
    //1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
    let sumForAlert = 0;
    while (true) {
        const sumOfNumbers = +prompt(`Enter numbers for sum`);
        if (!sumOfNumbers) break;
        sumForAlert += sumOfNumbers;
    }
    alert(`your sum ${sumForAlert}`);
}; // //
document.getElementById("btn24-2").onclick = (event) => {
    event.preventDefault();
    //2.Запросить 2 числа и найти только наибольший общий делитель.
    let firstNumber = +prompt(`Enter first number, please`);
    let secondNumber = +prompt(`Enter second number, please`);
    let divider = 0;
    while (firstNumber !== 0) {
        divider = secondNumber % firstNumber;
        secondNumber = firstNumber;
        firstNumber = divider;
    }
    alert(secondNumber);
};
// //
document.getElementById("btn24-3").onclick = (event) => {
    event.preventDefault();
    //3.Запросить у пользователя число и вывести все делители этого числа.
    let numberForDivid = +prompt(
        `Enter some nuber, and i show you all divided numbers`
    );
    let forCicle = numberForDivid;
    for (let i = 1; i < forCicle; i++) {
        let x = forCicle % i;
        if (x == 0) {
            alert(i);
        }
    }
};
// //
document.getElementById("btn24-4").onclick = (event) => {
    event.preventDefault();
    //4.Определить количество цифр в введенном числе.
    const lenghtOfNumber = prompt(`calculate lenght of nuber please`);
    alert(lenghtOfNumber.length);
};
// //
document.getElementById("btn24-5").onclick = (event) => {
    event.preventDefault();
    //5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
    // При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
    let zero = 0;
    let minus = 0;
    let plus = 0;
    let even = 0;
    let odd = 0;
    for (let i = 1; i <= 10; i++) {
        let number = +prompt(`insert ten numbers, please, that is number ${i}`);
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
    alert(
        `you insert null = ${zero}; minuses = ${minus}; pluses = ${plus}; evens = ${even}; odds = ${odd}`
    );
};
//
document.getElementById("btn24-6").onclick = (event) => {
    event.preventDefault();
    //6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
    // И так до тех пор, пока пользователь не откажется.
    while (true) {
        const numberA = +prompt("For calculate, insert firt number");
        const numberB = +prompt("For calculate, insert firt number");
        const action = prompt("For calculate, insert '*' '/' '+' '-'");
        let result = 0;
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
        const conf = confirm("do you want again?");
        if (!conf) {
            break;
        }
    }
};
//
document.getElementById("btn24-7").onclick = (event) => {
    event.preventDefault();
    //7.Запросить у пользователя число и на сколько цифр его сдвинуть.
    //Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
    let freeNumber = prompt("enter some number, please");
    let moveNumber = prompt("how many digit replace");

    alert(freeNumber.slice(moveNumber) + freeNumber.slice(0, moveNumber));
};
//
document.getElementById("btn24-8").onclick = (event) => {
    event.preventDefault();
    //8.Зациклить вывод дней недели таким образом: «День недели.
    // Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    let countDays = 0;
    alert(`Today is = ` + daysOfWeek[countDays]);
    while (true) {
        let conf = confirm("do show you next day?");
        if (conf) {
            countDays += 1;
            alert(`Today is = ` + daysOfWeek[countDays]);
        } else {
            break;
        }
    }
};
//
document.getElementById("btn24-9").onclick = (event) => {
    event.preventDefault();
    //9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
    const showTable = alert;

    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
    alert(`check console`);
};
//
document.getElementById("btn24-10").onclick = (event) => {
    event.preventDefault();
    //Игра «Угадай число».
    alert("Guess the number from 0 to 100");
    let beginNumber = 0;
    let lastNumber = 100;
    let symbol = "";
    do {
        let counting = Math.floor((lastNumber - beginNumber) / 2 + beginNumber);
        symbol = prompt(`your number > or < or = ${counting}`, "> < =");
        if (symbol == ">") {
            beginNumber = counting;
        } else if (symbol == "<") {
            lastNumber = counting;
        } else if (symbol == "=") {
            alert(`your number is ${counting}`);
            break;
        } else {
            alert(`input wrong, try again please`);
            break;
        }
    } while (symbol !== "=");
};