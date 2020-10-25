function solve() {

    class Balloon {

        constructor(color, gasWeight) {

            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {

        constructor(color, gasWeight, ribbonColor, ribbonLength) {

            super(color, gasWeight);

            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;

            this._ribbonObj = {
                color: ribbonColor,
                length: ribbonLength
            };
        }

        get ribbon() {

            return this._ribbonObj;
        }
    }

    class BirthdayBalloon extends PartyBalloon {

        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {

            super(color, gasWeight, ribbonColor, ribbonLength);

            this._text = text;
        }

        get text() {

            return this._text;
        }
    }

    /* let test = new PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
    let ribbon = test.ribbon;
    console.log(ribbon); */

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
solve();