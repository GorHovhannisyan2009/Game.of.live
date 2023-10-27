var express = require("express");
var app = express();

var server = require('http').createServer(app); // add
var io = require('socket.io')(server); // add

app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () { // new
    console.log("Example is running on port 3000");
});
io.on('connection', function (socket) {
    socket.emit("myMatrix", myDraw);
});






// 

let random = require("./random");

matrix = []; // server
let num1 = 20
let num2 = 20
let grass = 100
let grasseater = 100
let gishatich = 100
let zombie = 10


grassArr = []
grassEaterArr = []
predatorArr = []
ZombieArr = []
sparkArr = []

Grass = require('./class.js') // Class
GrassEater = require('./grasseater.js')
predator = require('./predator.js')
Zombie = require('./Zombie.js') //  server


function createMatrix(num1, num2) {
    for (let i = 0; i < num1; i++) {
        matrix.push([])
        for (let j = 0; j < num2; j++) {
            matrix[i].push(0)
        }
    }
}


function character(index, count) {// (1,10)
    for (let a = 0; a < count; a++) {

        var x = Math.floor(random(num1))
        var y = Math.floor(random(num2))
        if (matrix[x][y] == 0) {
            matrix[x][y] = index
        }
    }
}

function createObj() {
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

function start() {
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


    io.sockets.emit("myMatrix", matrix);
}


createMatrix(num1, num2)
character(1, grass)
character(2, grasseater)
character(3, gishatich)
character(4, zombie) // server

createObj()
setInterval(start, 1000)





var clickCount = 0;
function clickHandler(evt) {
    clickCount++;
    console.log(evt);
    if(clickCount = 0){
        console.log("ձմեռ")
    }
    else if(clickCount = 1){
        console.log("գարուն")
    }
    else if(clickCount = 2){
        console.log("ամառ")
    }
    else if(clickCount = 3){
        console.log("աշուն")
    }
    else if(clickCount = 4){
        clickCount = 0
    }
    var str = "Thanks for clicking " + clickCount;
    this.innerText = str;
}


