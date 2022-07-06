const app = require('express')()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', function (req, res) {
    // res.send('<h1>Hello</h1>')
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    console.log('User is connected')
    socket.emit('hi');

    socket.on('disconnect', function () {
        console.log('User is disconnected')
    })

    socket.on('chat message', function (msg) {
        console.log(`msg:${msg}`)
        socket.broadcast.emit('chat message', msg) // всем кроме излучающего
        // socket.emit('chat message', msg) // всем
    })
})

let port = 3000
server.listen(port, function () {
    console.log(`Listening on port ${port}`)
})
