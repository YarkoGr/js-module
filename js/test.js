// let sum = 0;
// while (true) {
//     let value = +prompt("Введите число", "");
//     if (!value) break; // (*)
//     sum += value;
// }
// alert("Сумма: " + sum);
//
// for (let i = 0; i < 10; i++) {
//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
//     alert(i); // 1, затем 3, 5, 7, 9
// }
//
// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Значение на координатах (${i},${j})`, "");
//         // если пустая строка или Отмена, то выйти из обоих циклов
//         if (!input) break outer; // (*)
//         // сделать что-нибудь со значениями...
//     }
// }
//     alert("Готово!");
//
// let n = +prompt(`enter number`);
// nextPrime: for (let i = 2; i <= n; i++) {
//     // Для всех i...
//     for (let j = 2; j < i; j++) {
//         // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//     }
//     alert(i); // простое число
// }