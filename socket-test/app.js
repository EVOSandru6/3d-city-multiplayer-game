const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
    // res.send('<h1>Hello</h1>')
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    console.log('User is connected')

    socket.on('disconnect', function () {
        console.log('User is disconnected')
    })
})

let port = 3000
http.listen(port, function() {
    console.log(`Listening on port ${port}`)
})
