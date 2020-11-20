document.getElementById("btn28-1").onclick = (event) => {
    event.preventDefault();
    //Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
    //поле, хранящее радиус окружности;
    //get-свойство, возвращающее радиус окружности;
    //set-свойство, устанавливающее радиус окружности;
    //get-свойство, возвращающее диаметр окружности;
    //метод, вычисляющий площадь окружности;
    //метод, вычисляющий длину окружности
    class Circle {
        constructor(radius) {
                this.radius = radius;
            }
            // get/set of Circle
        get changeRadiusOfCircle() {
            return this.radius;
        }
        set changeRadiusOfCircle(newRadius) {
            this.radius = newRadius;
        }
        get diametrOfCircle() {
            return this.radius * 2;
        }
        squareOfCircle() {
            return Math.PI * Math.pow(this.radius, 2);
        }
        lengthOfCircle() {
            return Math.PI * this.diametrOfCircle;
        }
    }
    const circle = new Circle(14);
    console.log(circle.radius);
    const changeRadius = prompt(
        `This radius of circle is ${circle.radius}, enter new radius`,
        18
    );
    circle.changeRadiusOfCircle = changeRadius;
    alert(
        `New data of circle\nDiametr = ${
      circle.diametrOfCircle
    }\nSquare = ${circle.squareOfCircle()}\nLenght of Circle = ${circle.lengthOfCircle()}`
    );
};