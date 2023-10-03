var matrix = [];
let num1 = +prompt("inchqan e zer taxtaki erkarutyun@?")
let num2 = +prompt("inchqan e zer taxtaki laynutyun@?")
let grass = +prompt("inchqan xot eq uzum taxtakin?")
let grasseater = +prompt("inchqan xotaker eq uzum taxtakin?")
let gishatich = +prompt("inchqan gishatich eq uzum taxtakin?")
let zombie = +prompt("inchqan zombie eq uzum taxtakin?")
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let ZombieArr = []
let sparkArr = []
var side = 50;



createMatrix(num1, num2)
if (num1 > 20) {
    alert("chi kareli 20-ic barcr tiv!")
}
else if (num1 < 5) {
    alert("chi kareli 5-ic cacr tiv!")
}
else if (num2 < 5) {
    alert("chi kareli 5-ic cacr tiv!")
}
else if (num2 > 20) {
    alert("chi kareli 20-ic barcr tiv!")
}

function createMatrix(num1, num2) {
    for (let i = 0; i < num1; i++) {
        matrix.push([])
        for (let j = 0; j < num2; j++) {
            matrix[i].push(0)
        }
    }
}

function character(index, count) {
    for (let a = 0; a < count; a++) {
        
        var x = Math.floor(random(0, num1))
        var y = Math.floor(random(0, num2))
        if (matrix[x][y] == 0) {
            matrix[x][y] = index
        }
    }
}


function setup() {
    frameRate(5);
    character(1,grass)
    character(2,grasseater)
    character(3,gishatich)
    character(4,zombie)
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEa = new GrassEater(x, y, 2);
                grassEaterArr.push(grEa)
            }
            else if (matrix[y][x] == 3) {
                var pr = new predator(x, y, 3);
                predatorArr.push(pr)

            }
            else if (matrix[y][x] == 4) {
                var Zo = new Zombie(x, y, 4);
                ZombieArr.push(Zo)
            }
            else if (matrix[y][x] == 5) {
                var sp = new spark(x, y, 5);
                sparkArr.push(sp)}
            else if (matrix[y][x] == 8) {

            }
        }
    }
}



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("brown")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }

            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in ZombieArr) {
        ZombieArr[i].eat();
    }
}