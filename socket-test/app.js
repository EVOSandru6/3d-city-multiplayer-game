const app = require('express')()
const http = require('http').Server(app)

app.get('/', function(req, res) {
    // res.send('<h1>Hello</h1>')
    res.sendFile(__dirname + '/index.html')
})

let port = 3000
http.listen(port, function() {
    console.log(`Listening on port ${port}`)
})
