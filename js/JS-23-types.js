document.getElementById("btn2").onclick = function btnTwo() {
    //Запросить у пользователя его возраст и определить,
    // кем он является: ребенком (0–2), подростком (12–18),
    //взрослым (18_60) или пенсионером (60– ...)
    let age = +prompt("Enter your age pls");
    if (age != 0 && age <= 12 && age != null) {
        alert(`you are child`);
    } else if (age > 12 && age < 18) {
        alert(`you are teen`);
    } else if (age >= 18 && age < 60) {
        alert(`you are adult`);
        0;
    } else if (age >= 60) {
        alert(`you are pensioner`);
    } else {
        alert(`try again`);
    }
    //
    //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
    // который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
    let inputKey = Number(
        prompt(`Enter number from 0 to 9, than return symbol for this number`)
    );
    switch (true) {
        case inputKey == 1:
            alert(`your symbol = "!"`);
            break;
        case inputKey == 2:
            alert(`your symbol = "@"`);
            break;
        case inputKey == 3:
            alert(`your symbol = "#"`);
            break;
        case inputKey == 4:
            alert(`your symbol = "$"`);
            break;
        case inputKey == 5:
            alert(`your symbol = "%"`);
            break;
        case inputKey == 6:
            alert(`your symbol = "^"`);
            break;
        case inputKey == 7:
            alert(`your symbol = "&"`);
            break;
        case inputKey == 8:
            alert(`your symbol = "*"`);
            break;
        case inputKey == 9:
            alert(`your symbol = "("`);
            break;
        case inputKey == 0:
            alert(`your symbol = ")"`);
            break;
        default:
            alert(`try again`);
            break;
    }
    //
    //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
    let threeDigitNumber = +prompt(
        `enter three-digit number please, for checked identical numbers in it`
    );
    let check1 = parseInt(threeDigitNumber / 100);
    console.log(check1);
    let check2 = parseInt(threeDigitNumber / 10) % 10;
    console.log(check2);
    let check3 = threeDigitNumber % 10;
    console.log(check3);
    if (check1 != check2 && check2 != check3 && check1 != check3) {
        alert(`no same digits`);
    } else {
        alert(`find same digits`);
    }
    //
    //Запросить у пользователя год и проверить, високосный он или нет.
    // Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
    let isLeapYear = +prompt("for check a leap year enter 'YYYY' please");
    if (
        isLeapYear % 400 === 0 ||
        (isLeapYear % 4 === 0 && isLeapYear % 100 != 0)
    ) {
        alert(`yes`);
    } else {
        alert(`not`);
    }
    //
    //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
    let isPalindrom = +prompt(`check number for is it palindrom`);
    let forCheckPalindrom = isPalindrom;
    let transformNumber = 0;
    while (forCheckPalindrom > 0) {
        let y = forCheckPalindrom % 10;
        transformNumber = transformNumber * 10 + y;
        forCheckPalindrom = parseInt(forCheckPalindrom / 10);
    }
    console.log(transformNumber);
    console.log(isPalindrom);
    let palindromResult = isPalindrom === transformNumber ? "it is" : "it is not";
    alert(palindromResult);
    //
    //Написать конвертор валют. Пользователь вводит количество USD, выбирает,
    //в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
    let inputUsd = +prompt("Eter how much dollars you want to convert");
    let inputCurrency = prompt(
        "Enter for choise (EUR UAH AZN or eur uah azn) please"
    );
    const usdToEur = 0.7;
    const usdToUah = 27.3;
    const usdToAzn = 158;
    switch (true) {
        case inputCurrency == "EUR" || inputCurrency == "eur":
            let convertEur = inputUsd * usdToEur;
            alert(convertEur);
            break;
        case inputCurrency == "UAH" || inputCurrency == "uah":
            let convertUah = inputUsd * usdToUah;
            alert(convertUah);
            break;
        case inputCurrency == "AZN" || inputCurrency == "azn":
            let convertAzn = inputUsd * usdToAzn;
            alert(convertAzn);
            break;
        default:
            alert("Try again please");
            break;
    }

    //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
    //от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
    let purchaseAmount = +prompt(
        "your discont 200-300=3%; 300-500=5%; >500=7%; Enter your summ please"
    );
    let discont;
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
    let yourTotalSum = purchaseAmount - (purchaseAmount / 100) * discont;
    alert(`Your total sum ${yourTotalSum}`);
};