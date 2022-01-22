const express = require('express');
const http = require('http');
const path = require('path');
const io = require('socket.io');

const app = express();
const server = http.createServer(app);
const PORT = process.env.port || 3000;
console.log(`listening to the port ${PORT}`);
server.listen(PORT);


const activeUsers = new Set();
let roomID = "";

io.on('connection', (socket)=>{
    socket.on("JOIN_ROOM", (room)=>{
        roomID = room;
        socket.join(room);
    });

    socket.on("NEW_MESSAGE", (msg) => {
        io.to(roomId).emit("NEW_MESSAGE", msg);
    });
    
    socket.on("disconnect", () => {
        activeUsers.delete(socket.userId);
        io.to(roomId).emit("user disconnected", socket.userId);
    });
     
})