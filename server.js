const path = require('path');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
// const cors = require("cors");
const { isStringObject } = require('util/types');

const app = express();
const server = http.createServer(app);
const io = new Server(server
//     {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// }
)
const PORT = 3000;// || process.env.PORT;

app.use(express.static(path.join(__dirname, 'build')));

io.on('connection', function(socket) {
    console.log("User "+ socket.id +" Connected");

    socket.broadcast.emit('message', 'A user has joined the chat');

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    socket.on('send_message', (msg) => {
        console.log(msg)
        io.emit('receive_message', msg);
    });
    
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));