document.getElementById("btn27-3").onclick = (event) => {
    event.preventDefault();
    //Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
    //Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
    //Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
    // добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
    const cssStyles = [{
            name: "color",
            value: "blue",
        },
        {
            name: "font-size",
            value: "40px",
        },
        {
            name: "text-align",
            value: "center",
        },
    ];

    function addStyles() {
        let groupOfStyles = "";
        for (let i of cssStyles) {
            groupOfStyles += [i.name] + ": " + [i.value] + "; ";
        }
        return groupOfStyles;
    }
    console.log(addStyles());
    document.write(`<style type="text/css">p{${addStyles()}}</style>`);
    document.write(`<p>Hello Java Script</p>`);
};