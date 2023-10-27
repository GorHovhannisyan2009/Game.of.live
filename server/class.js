let LivingCreature = require('./livingcreator.js')
let random = require("./random");
module.exports = class Grass extends LivingCreature {
    mul() {
        let b = 0
        let a = 8 * b
        if (clickHandler = 0) {
            let b = 2
        }
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        console.log(newCell, this.multiply);
        if (this.multiply >= a && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}
