var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 4000 });

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('message ', message);
        connection.send('you sent: ' + message);
    });

    // establish handshake
    ws.send(connection + ' connected!');
    ws.on('disconnect', function(ws) {
        console.log('ws went bybye', ws);
    });
});
