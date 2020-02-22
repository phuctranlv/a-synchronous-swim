const keypressInput = require('./keypressHandler');

module.exports.messages = []; // the storage unit for messages




module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  this.messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  console.log('dequeueing message');
  return this.messages.shift();
};

keypressInput.initialize(message => {
  // console.log('queueing what you pressed');
  console.dir(this)
  this.enqueue(message);
  // console.log(messages)
});
