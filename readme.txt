The index.html and the scripts.js in the public directory are the client (browser) side

The server.js is a node server that handles the socket.io requests and operations

Within the socket.io is the express server which is the same as the HTTP server. This is serving as a call back url (port 3500)


'on' is a regular js/node event listener. io.on('connect', socket=>{}) listens to a connect event, then send callback in a variable called socket.

'emit' sends event out while 'on' listens to an event. Another big thing to know.