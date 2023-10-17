var socket = io();


socket.on('esim', handleMatrix);


function handleMatrix(info){
   console.log(info)
}