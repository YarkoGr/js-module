const title = document.getElementById("test");

//вітання з юзером ))
let name = prompt("Enter your name please");
alert(`Hello ${name}`);

//скільки тобі років
let year = prompt("Please, enter your year of birthday");
const howOld = 2020 - year;
alert(`You have ${howOld}`);
console.log(howOld);

//периметр квадрата
let londSideCube = prompt("input length side of square");
let perimetr = londSideCube * 4;
alert(`perimetr = ${perimetr}`);

//площа кола
let longCircle = prompt("input length of circle");
let areaOfCircle = 3.14 * longCircle ** 2;
alert(`area = ${areaOfCircle}`);

//дистанція+час=швидкість руху
let distance = prompt("What distance do you need(km)");
let time = prompt("How many time do you have(hour)");
let countKmPerHour = distance / time;
alert(`You must move ${countKmPerHour} km/hour`);

//конверт долар => євро
let dollars = prompt("How many dollars do you whant convert to euro");
const crosscurs = 1.32;
let euro = dollars * crosscurs;
alert(`you would be have ${euro} euro`);

//прорахунок кількості файлів для флешок
let memoryFlashCard = prompt("How many GB has your flash card");
let fileSize = 820;
let countFiles = (memoryFlashCard * 1000) / fileSize;
alert(`You can record ${parseInt(countFiles)} files with size 820mb`);

//кількість шоколаду на певну суму зі здачею
let money = prompt("How many money dou have");
let cost = prompt("What is the price of chokolate");
let amount = money / cost;
let change = money % cost;
if (amount > 1) {
    alert(`You can by ${parseInt(amount)} chokolates and have ${change} change`);
} else {
    alert(`You can't by`);
}

//дзеркальне відображення числа
let numberForRevers = prompt("Enter number for revers");
let x = numberForRevers;
let revers = 0;
while (x > 0) {
    let y = x % 10;
    revers = revers * 10 + y;
    x = parseInt(x / 10);
}
alert(`Yor revers number ${revers}`);

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

//розрахунок депозиту
let sumDeposit = prompt("insert your sum deposit");
let month = prompt("insert how many month");
let moneyFromDeposit = (sumDeposit / 12) * 0.05 * month;
alert(`your earn money ${moneyFromDeposit}`);