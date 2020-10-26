const express = require('express')
const app = express()
var http = require("http").createServer(app)
let io = require('socket.io')(http)

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));


io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log('cliente desconectado' + socket.id)
    })
    socket.on("msg", (data) => {
        socket.emit("showmsg", data)
        console.log(data)
        })
    })

    app.get('/', (req, res) => {
        res.render('index')
    })

    http.listen(8080, () => {
        console.log('rodando')
    })