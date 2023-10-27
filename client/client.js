var socket = io();
var side = 400


function myDraw(){
    
}

function handleMatrix(matrix){
   console.log(matrix)
    for (var y = 0; y < matrix.length; y++) { // cl
        for (var x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
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

            rect(x * side/matrix.length, y * side/matrix.length, side/matrix.length, side/matrix.length);
        }
}
}


let but  = document.getElementById("b")
but.addEventListener("click",clickHandler)

io.on('connection', function (socket) {
    socket.emit("myMatrix", myDraw);
});


