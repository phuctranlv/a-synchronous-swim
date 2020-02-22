


const keypressHandler = require('./js/keypressHandler');
const messageQueueMethods = require('./js/messageQueue.js');

// keypressHandler.initialize(message => {

//   console.log('queueing what you pressed');
//   messageQueueMethods.enqueue(message);
//   console.dir(messageQueueMethods);
// });

const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
