const express = require('express') // import the express
const app = express() // create an express app

//ensure static files are served from the public folder
app.use(express.static('public'))
const expressServer = app.listen(3500) // listen to port 3500 HTTP server


const socketio = require('socket.io')

// io is our socket.io server! below
const io = socketio(expressServer, {

})

// on is a regular js/node event listener
// emit sends out event
io.on('connect', socket => {
    // console.log(socket.id + " has joined the room")

    // console.log(socket.handshake)

    //first arg or emit is the event name. 
    // socket.emit('welcome', [1, 2, 3, 4]) // We push an event to the bowser(client)

    // io.emit('newClient', socket.id)

    // socket.on('thankYou', data => {
    //     console.log("Message from client to me the server ", data)
    // })

    socket.on('messageFromClientToServer', newMessage => {
        io.emit('messageFromServerToAllClients', newMessage)
    })

})
