// document.getElementById("btn26-1").onclick = (event) => {
//     event.preventDefault();};
document.getElementById("btn26-1").onclick = (event) => {
    event.preventDefault();
    //1.Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
    //и следующие функции для работы с этим объектом:
    const car = {
        producer: "Japan",
        model: "Toyota",
        year: 2015,
        speed: 100,
    };
    //Функция для вывода на экран информации об автомобиле;
    for (let key in car) {
        alert(key);
        alert(car[key]);
    }

    //Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
    // Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
    const timeForDistance = +prompt("Enter your distance 'km' for this car", 550);

    const calcTimeForDistance = (a) => {
        const needTimeForDistance = a / car.speed;
        console.log(needTimeForDistance);
        const timeForPause = Math.floor(needTimeForDistance / 4);
        console.log(timeForPause);
        const totalTime = needTimeForDistance + timeForPause;
        return totalTime;
    };
    alert(calcTimeForDistance(timeForDistance));
};
//
document.getElementById("btn26-2").onclick = (event) => {
    event.preventDefault();
    //2.Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
    // и следующие функции для работы с этим объектом:
    const numerator1 = +prompt(`enter numerator please`, 8);
    const denominator1 = +prompt(`enter denominator, please`, 22);
    const numerator2 = +prompt(`enter numerator please`, 12);
    const denominator2 = +prompt(`enter denominator, please`, 32);

    const factions1 = {
        numerator1: numerator1,
        denominator1: denominator1,
    };
    const factions2 = {
        numerator2: numerator2,
        denominator2: denominator2,
    };

    function leastDividerOfTwoNumbers(x, y) {
        if (typeof x !== "number" || typeof y !== "number") return false;
        return !x || !y ? 0 : Math.abs((x * y) / biggestDividerOfTwoNumbers(x, y));
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
    const commonDenom = leastDividerOfTwoNumbers(
        factions1.denominator1,
        factions2.denominator2
    );

    function plusFactions() {
        const resultPlus =
            (commonDenom / factions1.denominator1) * factions1.numerator1 +
            (commonDenom / factions2.denominator2) * factions2.numerator2;
        return resultPlus;
    }
    alert(`Plus function = ${plusFactions()};`);

    function minusFactions() {
        const resultPlus =
            (commonDenom / factions1.denominator1) * factions1.numerator1 -
            (commonDenom / factions2.denominator2) * factions2.numerator2;
        return resultPlus;
    }
    alert(`Plus function = ${minusFactions()};`);

    function multiplicationFactions() {
        const result =
            (factions1.numerator1 * factions2.numerator2) /
            (factions1.denominator1 * factions2.denominator2);
        return result;
    }
    alert(`Plus function = ${multiplicationFactions()};`);

    function divisionFactions() {
        const result =
            (factions1.numerator1 * factions2.denominator2) /
            (factions1.denominator1 * factions2.numerator2);
        return result;
    }
    alert(`Plus function = ${divisionFactions()};`);
};
//
document.getElementById("btn26-3").onclick = (event) => {
    event.preventDefault();

    //3.Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

    const now = new Date();
    alert(now.toLocaleTimeString());
    const addSec = +prompt(
        `Time is now ${now.toLocaleTimeString()} How many seconds add to this time`,
        120
    );
    const date1 = new Date();
    const newDateSec = new Date();
    newDateSec.setSeconds(date1.getSeconds() + addSec);
    alert(newDateSec.toLocaleTimeString());

    const addMin = +prompt(
        `Time is now ${now.toLocaleTimeString()} How many minutes add to this time`,
        24
    );
    const newDateMin = new Date();
    newDateMin.setMinutes(date1.getMinutes() + addMin);
    alert(newDateMin.toLocaleTimeString());

    const addHours = +prompt(
        `Time is now ${now.toLocaleTimeString()} How many minutes add to this time`,
        4
    );
    const newDateHours = new Date();
    newDateHours.setHours(date1.getHours() + addHours);
    alert(newDateHours.toLocaleTimeString());
    // const nowDate = new Date();
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