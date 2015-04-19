var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({ port: 4000 });

wss.on('connection', function(ws) {
    console.log('it\'s alive!');
    ws.on('message', function(msg) {
        console.log('received', msg);
        ws.send('you sent: ' + msg);
    });
    ws.send('you have connected!');
});

