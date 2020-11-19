document.getElementById("btn27-2").onclick = (event) => {
    event.preventDefault();
    const receipt = [{
            nameProduct: "olives",
            amount: 4,
            priceOfOne: 65,
        },
        {
            nameProduct: "cigar",
            amount: 1,
            priceOfOne: 25,
        },
        {
            nameProduct: "wiskey",
            amount: 2,
            priceOfOne: 395,
        },
    ];
    //Распечатка чека на экран;
    function showReceipt() {
        let listOfReceipt = "";
        for (i = 0; i < receipt.length; i++) {
            const summ = receipt[i].priceOfOne * receipt[i].amount;
            const addList = `${receipt[i].nameProduct} - ${receipt[i].priceOfOne} x ${receipt[i].amount} = ${summ}\n`;
            listOfReceipt += addList;
        }
        console.log(listOfReceipt);
        return listOfReceipt;
    }

    alert(`Your receipt:\n${showReceipt()}`);

    //Подсчет общей суммы покупки;

    function showTotalSum() {
        let totalSum = 0;
        for (i = 0; i < receipt.length; i++) {
            let summ = receipt[i].priceOfOne * receipt[i].amount;
            totalSum += summ;
        }
        return totalSum;
    }
    alert(`Your receipt:\n${showReceipt()}\nTotal sum = ${showTotalSum()}`);

    //Получение самой дорогой покупки в чеке;
    const sortReceipt = receipt.sort((a, b) => {
        return b.priceOfOne - a.priceOfOne;
    });
    console.log(sortReceipt);
    alert(`Most expensive is - ${sortReceipt[0].nameProduct}`);

    //Подсчет средней стоимости одного товара в чеке.
    function everagePriceOfReceipt() {
        let totalSum = 0;
        let totalAmount = 0;
        for (i = 0; i < receipt.length; i++) {
            let summ = receipt[i].priceOfOne * receipt[i].amount;
            totalSum += summ;
            totalAmount += receipt[i].amount;
        }
        let calcEveragePrice = (totalSum / totalAmount).toFixed(2);
        return calcEveragePrice;
    }
    alert(`Your everage price = ${everagePriceOfReceipt()}`);
};