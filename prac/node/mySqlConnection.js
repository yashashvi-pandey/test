const mariadb = require('mariadb/callback');
var http = require('http');


//first server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
res.write("Connection Start");
const pool = mariadb.createPool({ 
    host: '127.0.0.1',
     user: 'root',
     password: 'root',
     database : 'firstdb',
      port:3307,connectionLimit: 5 });


pool.getConnection((err, conn) => {
  if (err) {
    console.log("not connected due to error: " + err);
  } else {
    console.log("connected ! connection id is " + conn.threadId);
    // conn.query("INSERT INTO `firstdb`.`products` (`product_id`, `product_name`, `product_price`, `pproduct_rating`) VALUES ('3', 'Sofa', '460', '3.8');", function(err, rows, fields) {
    //     if (err) throw err;
    //     console.log(rows);
    //     });

    conn.query('SELECT * FROM products', function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        // res.write(rows);
        });
    conn.end(); //release to pool
  }
});

  res.end();

}).listen(8080);
