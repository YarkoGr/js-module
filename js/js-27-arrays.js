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
    console.log(shopList);

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
    // console.log(shopList);

    function addToShopList() {
        const addToList = prompt(
            `Enter name of product for add to Shop list`,
            "flour"
        );

        for (let i in shopList) {
            if (addToList === shopList[i].name) {
                shopList[i].amount += 1;
            } else {
                shopList.push({
                    name: addToList,
                    amount: 1,
                    isBought: false,
                });
                return shopList;
            }
        }
    }
    addToShopList(shopList);
    console.log(shopList);
    let prinList = "";
    for (let i of shopList) {
        prinList += [i.name] +
            "  - amount = " + [i.amount] +
            "; Is bought = " + [i.isBought] +
            "\n";
    }
    alert(`Your new shop list is \n ${prinList}`);
};