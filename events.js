var event = require('events')
var eventEmitter = new event.EventEmitter();

var myEventHandler = () => {
    console.log('I hear a scream');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');