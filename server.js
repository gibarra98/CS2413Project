const path = require('path');
const http = require('http');
const express = require('express');
const cors = require("cors");
const app = express();
const { Server } = require('socket.io');

const server = http.createServer(app);
app.use(cors());
const io = new Server(server,
    {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
}
)
const PORT = 3001;// || process.env.PORT;

app.use(express.static(path.join(__dirname, 'build')));

io.on('connection', function(socket) {
    console.log("User "+ socket.id +" Connected");

    socket.broadcast.emit('message', 'A user has joined the chat');

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    socket.on("join_room", (room) => {
        socket.join(room);
        console.log("User "+ socket.id+ " joined room");
    })

    socket.on('send_message', (data) => {
        console.log(data)
        io.emit('receive_message', data);
    });
    
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));