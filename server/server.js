var app = require('express')();
var http = require('http').Server(app);
// var https = require('https');
const express = require('express');
// const  fs = require('fs')
// const port = 8080

//react flag

app.use(express.static("collegamenti"));

app.get('/',function(req, res){
    res.sendFile(__dirname +'/index.html');
    
});

// const httpsOptions = {
//     key:  fs.readFileSync('./security/localhost.key'),
//     cert: fs.readFileSync('./security/localhost.crt')
// }



// const server = https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('server running at ' + port)
//   })

http.listen(80,function(){
    console.log('Listening on port 80...');
});

// var mysql = require('mysql2');

// var con = mysql.createConnection({
//   host: "172.18.0.4",
//   user: "root",
//   password: "piopio",
 
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.end((err) => {
//     if(err){
//       console.error('Errore nella chiusura della connessione', err);
//     }
//     console.log('Connessione chiusa.');

//   });
// });


