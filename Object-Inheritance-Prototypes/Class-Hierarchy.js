function solve() {

    class Figure {

        units = 'cm';

        changeUnits(unit) {

            this.units = unit;
        }
    }

    const messurementUnits = {
        'cm': 1,
        'm' : 0.01,
        'mm': 10
    }

    class Circle extends Figure {

        constructor(radius) {

            super();

            this.radius = radius;
        }

        get area() {

            return Math.PI * (messurementUnits[this.units] * this.radius) ** 2;
        }

        toString() {

            return `Figures units: ${this.units} Area: ${this.area} - radius: ${messurementUnits[this.units] * this.radius}`;
        }
    }

    class Rectangle extends Figure {

        constructor(width, height, unit) {

            super();

            this.width = width;
            this.height = height;
            this.units = unit;
        }

        get area() {
            
            return (messurementUnits[this.units] * this.width) * (messurementUnits[this.units] * this.height);
        }

        toString() {

            return `Figures units: ${this.units} Area: ${this.area} - width: ${messurementUnits[this.units] * this.width}, height: ${messurementUnits[this.units] * this.height}`;
        }
    }

    /* let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200 
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50 */

    return {
        Figure,
        Circle,
        Rectangle
    }
}
solve()


