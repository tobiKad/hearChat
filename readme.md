1. Download the repository using git clone "link"
2. Install dependecies:
"dependencies": {
    "chart.js": "^3.2.1",
    "express": "^4.17.1",
    "johnny-five": "^2.0.0",
    "nodemon": "^2.0.7",
    "serialport": "^9.0.7",
    "socket.io": "^4.1.2"
  }
Type command npm install "name of the dependencies"
3. Open hearRate directory and run upload the Arduino script to the board (you need to have Arduino IDE https://www.arduino.cc/en/software)
    This script is for the heart rate board from the spark fun - https://learn.sparkfun.com/tutorials/ad8232-heart-rate-monitor-hookup-guide/all
    but you could use any other sensor, just write another Arduino script and upload it into the board, the data should be transferred regardless from where they were gathered.
4. After running and connecting Arduino hardware run the code typing in the console nodemon run.js
5. Go to the http://localhost:8082/chat.html you should see the chat.index page from the public folder.