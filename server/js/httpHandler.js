const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = require('./messageQueue');
// console.log(messageQueue.messages);
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

// const keypressInput = require('./keypressHandler');

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  var commands = ['up', 'down', 'left', 'right'];
  var index = Math.floor(Math.random() * commands.length);
  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    // console.log('the data from the server:', )
    console.log('router dequeueing');
    var returnValue = messageQueue.dequeue() || 'default value';
    res.end(returnValue);
  }

  next(); // invoke next() at the end of a request to help with testing!
};
