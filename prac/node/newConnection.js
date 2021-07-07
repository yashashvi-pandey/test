// var http = require("http"); 
// var fs = require("fs");

// fs.readFile('./sitename.html', function (err, html) 
// {
//     if (err) throw err; 

//     http.createServer(function (request,response)
//     {  
//         // serve site
//         if (request.url === "/getProductData")
//         {
//             response.writeHeader(200, {"Content-Type": "text/html"});  
//             response.write(html);  
//         }
//         response.end(); 
//     }).listen(8080); 
// });

var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('./mySql');

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(5000);