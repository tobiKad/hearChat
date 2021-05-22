// Init the dependencies
const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const express = require('express');
const socketio = require('socket.io');

// Setup the app and listen on the port
const app = express();
app.use(express.static(__dirname + '/public'));
const expressServer = app.listen(8082);
const io = socketio(expressServer);

//Connection of throught the SerialPort
const serialPort = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600
})
const parser = new Readline()
serialPort.pipe(parser)

//Simple socket.io connection
parser.on('data', function (data) {
  // Here console log the received data from the hardware
  console.log('data received: ' + data)
  //socket emit data
  io.sockets.emit('map', data);
})

serialPort.on('open', function () {
  console.log('Communication is on!')
})