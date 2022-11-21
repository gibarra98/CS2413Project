const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { isStringObject } = require('util/types');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'build')));

io.on('connection', function(socket) {

    socket.broadcast.emit('message', 'A user has joined the chat');

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    socket.on('chatMessage', msg => {
        io.emit('message', msg)
    });
    
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));