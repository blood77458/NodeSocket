var ws = require("nodejs-websocket");
var connects = new Array();//多人
var server = ws.createServer();

server.addListener('connection', function(conn){
    console.log("接入");
    connects.push(conn);
    conn.on('text',function(msg){
        console.log(msg);
        for(var co in connects){
            if(connects[co]!=conn){
                connects[co].send(msg);
            }
        }
    });
});
server.listen(8001);
console.log("WebSocket建立完毕")