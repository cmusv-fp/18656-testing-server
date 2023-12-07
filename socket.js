var data = require('./liveFeed.js')
var WsServer= require('ws').Server;

function spinWebSocketserver(server){

const sockserver = new WsServer({ server: server })
sockserver.on('connection', ws => {
  console.log("ll")
  var a = {
    'alal': 1,
    "mmmm": 2,
    "pol": "mmm"
  };
  ws.send(JSON.stringify(a));
  ws.on('close', () => console.log('Client has disconnected!'))
  // ws.on('message', data => {
  //   // sockserver.clients.forEach(client => {
  //     console.log(data.)
  //     // client.send(`hello`)
  // })
  // // })
  ws.onerror = function () {
    console.log('websocket error')
  }
 })
    
}

module.exports = spinWebSocketserver;