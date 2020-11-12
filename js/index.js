import "./JS-23-types";
import "./js-24-cycles";
import "./js-25-functions";
import "./js-26-objects";
//
document.getElementById("btn22-1").onclick = (event) => {
    event.preventDefault();
    //1.вітання з юзером ))
    const name = prompt("Enter your name please");
    alert(`Hello ${name}`);
};
//
document.getElementById("btn22-2").onclick = (event) => {
    event.preventDefault();
    //2.скільки тобі років
    const year = prompt("Please, enter your year of birthday");
    const howOld = 2020 - year;
    alert(`You have ${howOld}`);
    console.log(howOld);
};
//
document.getElementById("btn22-3").onclick = (event) => {
    event.preventDefault();
    //3.периметр квадрата
    const londSideCube = prompt("input length side of square");
    const perimetr = londSideCube * 4;
    alert(`perimetr = ${perimetr}`);
};
//
document.getElementById("btn22-4").onclick = (event) => {
    event.preventDefault();
    //4.площа кола
    const longCircle = prompt("input length of circle");
    const areaOfCircle = 3.14 * longCircle ** 2;
    alert(`area = ${areaOfCircle}`);
};
//
document.getElementById("btn22-5").onclick = (event) => {
    event.preventDefault();
    //5.дистанція+час=швидкість руху
    const distance = prompt("What distance do you need(km)");
    const time = prompt("How many time do you have(hour)");
    const countKmPerHour = distance / time;
    alert(`You must move ${countKmPerHour} km/hour`);
};
//
document.getElementById("btn22-6").onclick = (event) => {
    event.preventDefault();
    //6.конверт долар => євро
    const dollars = prompt("How many dollars do you whant convert to euro");
    const crosscurs = 1.32;
    const euro = dollars * crosscurs;
    alert(`you would be have ${euro} euro`);
};
//
document.getElementById("btn22-7").onclick = (event) => {
    event.preventDefault();
    //7.прорахунок кількості файлів для флешок
    const memoryFlashCard = prompt("How many GB has your flash card");
    const fileSize = 820;
    const countFiles = (memoryFlashCard * 1000) / fileSize;
    alert(`You can record ${parseInt(countFiles)} files with size 820mb`);
};
//
document.getElementById("btn22-8").onclick = (event) => {
    event.preventDefault();
    //8.кількість шоколаду на певну суму зі здачею
    const money = prompt("How many money dou have");
    const cost = prompt("What is the price of chokolate");
    const amount = money / cost;
    const change = money % cost;
    if (amount > 1) {
        alert(
            `You can by ${parseInt(amount)} chokolates and have ${change} change`
        );
    } else {
        alert(`You can't by`);
    }
};
//
document.getElementById("btn22-9").onclick = (event) => {
    event.preventDefault();
    //9.дзеркальне відображення числа
    const numberForRevers = prompt("Enter number for revers");
    let x = numberForRevers;
    let rev = 0;
    while (x > 0) {
        let y = x % 10;
        rev = rev * 10 + y;
        x = parseInt(x / 10);
    }
    alert(`Yor revers number ${rev}`);
};
// //алгоритм-початок циклу while (x > 0)
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
document.getElementById("btn22-10").onclick = (event) => {
    event.preventDefault();
    //10.розрахунок депозиту
    const sumDeposit = prompt("insert your sum deposit");
    const month = prompt("insert how many month");
    const moneyFromDeposit = (sumDeposit / 12) * 0.05 * month;
    alert(`your earn money ${moneyFromDeposit}`);
    alert(`we are finish - good job`);
};