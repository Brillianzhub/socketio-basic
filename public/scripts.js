// console.log(io)
// io() connects to the socket.io server at the url
const socket = io('http://localhost:3500', {
    auth: {
        secret: "This is a secret"
    },
    query: {
        meaningOfLife: 42,
    }
})

//just like on our server, our socket has an:
// on method and 
// emit method
socket.on('welcome', data => {
    console.log('Welcome message from the server to the client ', data)

    // once welcome is emitted from the server,
    socket.emit('thankYou', [4, 3, 2, 1])

    socket.emit('newClient', data => {
        console.log('A new user has joined', data)
    })
})


socket.on('messageFromServerToAllClients', newMessage => {
    document.getElementById('messages').innerHTML += `<li>${newMessage}</li>`
})

document.getElementById('messageForm').addEventListener('submit', e => {
    e.preventDefault()
    const newMessage = document.getElementById('userMessage').value

    document.getElementById('userMessage').value = ""

    // this socket is sending an event to the server...
    socket.emit('messageFromClientToServer', newMessage)
})

