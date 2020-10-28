document.getElementById("btn3").onclick = () => {
    //Подсчитать сумму всех чисел в заданном пользователем диапазоне.
    let t = 1;

    function task() {
        alert(`task-${t}`);
        t += 1;
    }
    // //
    // task();
    // //1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
    // let sumForAlert = 0;
    // while (true) {
    //     let sumOfNumbers = +prompt(`Enter numbers for sum`);
    //     if (!sumOfNumbers) break;
    //     sumForAlert += sumOfNumbers;
    // }
    // alert(`your sum ${sumForAlert}`);
    // //
    // task();
    // //2.Запросить 2 числа и найти только наибольший общий делитель.
    // let firstNumber = +prompt(`Enter first number, please`);
    // let secondNumber = +prompt(`Enter second number, please`);
    // let divider = 0;
    // while (firstNumber !== 0) {
    //     divider = secondNumber % firstNumber;
    //     secondNumber = firstNumber;
    //     firstNumber = divider;
    // }
    // alert(secondNumber);
    // //
    // task();
    // //3.Запросить у пользователя число и вывести все делители этого числа.
    // let numberForDivid = +prompt(
    //     `Enter some nuber, and i show you all divided numbers`
    // );
    // let forCicle = numberForDivid;
    // for (let i = 1; i < forCicle; i++) {
    //     let x = forCicle % i;
    //     if (x == 0) {
    //         alert(i);
    //     }
    // }
    // //
    // task();
    // //4.Определить количество цифр в введенном числе.
    // let lenghtOfNumber = prompt(`calculate lenght of nuber please`);
    // alert(lenghtOfNumber.length);
    // //
    // task();
    // //5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
    // // При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
    // let zero = 0;
    // let minus = 0;
    // let plus = 0;
    // let even = 0;
    // let odd = 0;
    // for (let i = 1; i <= 10; i++) {
    //     let number = +prompt(`insert ten numbers, please, that is number ${i}`);
    //     if (number == 0) {
    //         zero += 1;
    //     } else if (number < 0) {
    //         minus += 1;
    //     } else {
    //         plus += 1;
    //     }
    //     if (number % 2 == 0) {
    //         even += 1;
    //     } else {
    //         odd += 1;
    //     }
    // }
    // alert(
    //     `you insert null = ${zero}; minuses = ${minus}; pluses = ${plus}; evens = ${even}; odds = ${odd}`
    // );
    // alert(`you break`);
    //
    task();
    //6.
};