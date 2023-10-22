let LivingCreature = require('./livingcreator.js')
let random = require("./random");
module.exports= class Zombie extends LivingCreature{
    mul() {
        var newCell = random(this.chooseCell(2) && (this.chooseCell(3)));
        if (newCell) {
            var eater = new GrassEater(newCell[0], newCell[1], this.index&& new predator (newCell[0], newCell[2]))
            grassEaterArr.push(eater) && predatorArr.push();
            matrix[newCell[1]][newCell[0]] = 4;
        }
    }
    eat() {
        let foods = this.chooseCell(2) && this.chooseCell(3)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 4
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x &&  newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
                if (newX == predatorArr[i].x &&  newY == predatorArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 1) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in ZombieArr) {
            if (this.x == ZombieArr[i].x && this.y == ZombieArr[i].y) {
                ZombieArr.splice(i, 1);
                break;
            }
        }
    }
}
