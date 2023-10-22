// var matrix = []; // server
// let num1 = 90
// let num2 = 150
// let grass = 100
// let grasseater = 100
// let gishatich = 100
// let zombie = 10
// let grassArr = []
// let grassEaterArr = []
// let predatorArr = []
// let ZombieArr = []
// let sparkArr = []
var side = 50; // server

Grass = require('../server/class.js/index.js') // Class
GrassEater = require('./grasseater.js')
predator= require('../server/predator.js/index.js')
Zombie= require('./Zombie.js') //  server

createMatrix(num1, num2) // server

function createMatrix(num1, num2) {
    for (let i = 0; i < num1; i++) {
        matrix.push([])
        for (let j = 0; j < num2; j++) {
            matrix[i].push(0)
        }
    }
} // server

function character(index, count) {// (1,10)
    for (let a = 0; a < count; a++) {
        
        var x = Math.floor(random(0, num1))
        var y = Math.floor(random(0, num2))
        if (matrix[x][y] == 0) {
            matrix[x][y] = index
        }
    }
} // server


function setup() {
    frameRate(5);

    character(1,grass)
    character(2,grasseater)
    character(3,gishatich)
    character(4,zombie) // server

    createCanvas(matrix[0].length * side, matrix.length * side); // client
    background('#acacac'); // client

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
         
        }
    }
}



function draw() {

    for (var y = 0; y < matrix.length; y++) { // cl
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

    for (var i in grassArr) { // server
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