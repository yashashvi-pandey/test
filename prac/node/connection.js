var http = require('http');
var dt = require('./dateModule');
var db = require('./mySqlConnection');

//first server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log( __dirname  +'file name');
    res.write("The date and time are currently: " + dt.myDateTime());
  console.log("First Server");
  res.end();

}).listen(8080);


//Second servers
http.createServer(function (req,res){
  res.writeHead(200,{'Content-Type':'text/bolt'});
  res.write("Hello Yash"+dt.myDateTime());
  console.log("second Server");
  res.end();
}).listen(8081);



