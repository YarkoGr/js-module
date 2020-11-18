//
//1.Создать массив «Список покупок».
// Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом
document.getElementById("btn27-1-1").onclick = (event) => {
    event.preventDefault();
    //Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
    const shopList = [{
            name: "shugar",
            amount: 4,
            isBought: true,
        },
        {
            name: "apples",
            amount: 2,
            isBought: false,
        },
        {
            name: "flour",
            amount: 3,
            isBought: true,
        },
        {
            name: "strawberry",
            amount: 6,
            isBought: false,
        },
    ];

    shopList.sort((a, b) => {
        return a.isBought - b.isBought;
    });
    let prinList = "";
    for (let i of shopList) {
        prinList += [i.name] +
            "  - amount = " + [i.amount] +
            "; Is bought = " + [i.isBought] +
            "\n";
    }
    alert(prinList);
};
//
document.getElementById("btn27-1-2").onclick = (event) => {
    event.preventDefault();
    //Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
    //необходимо увеличивать количество в существующей покупке, а не добавлять новую.
    const shopList = [{
            name: "shugar",
            amount: 4,
            isBought: true,
        },
        {
            name: "apples",
            amount: 2,
            isBought: false,
        },
        {
            name: "flour",
            amount: 3,
            isBought: true,
        },
        {
            name: "strawberry",
            amount: 6,
            isBought: false,
        },
    ];

    const addToList = prompt(
        `Enter name of product for add to Shop list`,
        "shugar"
    );

    function addedNameToList() {
        const find = shopList.find((item) => item.name === addToList);
        if (find) {
            find.amount += 1;
        } else {
            const newShopLiist = {
                name: addToList,
                amount: 1,
                isBought: false,
            };
            shopList.push(newShopLiist);
        }
    }
    addedNameToList(shopList);

    let prinList = "";
    for (let i of shopList) {
        prinList += [i.name] +
            "  - amount = " + [i.amount] +
            "; Is bought = " + [i.isBought] +
            "\n";
    }
    alert(`Your new shop list after added some product is \n ${prinList}`);
};
//
document.getElementById("btn27-1-3").onclick = (event) => {
    event.preventDefault();
    //Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
    const shopList = [{
            name: "shugar",
            amount: 4,
            isBought: true,
        },
        {
            name: "apples",
            amount: 2,
            isBought: false,
        },
        {
            name: "flour",
            amount: 3,
            isBought: true,
        },
        {
            name: "strawberry",
            amount: 6,
            isBought: false,
        },
    ];

    const nameWichBy = prompt(`Enter name of product witch you by`, "apples");

    function checketIsBought() {
        const find = shopList.find((item) => item.name === nameWichBy);
        if (find) {
            find.isBought = true;
        } else {
            alert(`Don't have this name in list`);
        }
    }
    checketIsBought(shopList);
    let prinList = "";
    for (let i of shopList) {
        prinList += [i.name] +
            "  - amount = " + [i.amount] +
            "; Is bought = " + [i.isBought] +
            "\n";
    }
    alert(`Your new shop list after by some product is \n ${prinList}`);
};