// var app = require('express')();
// var http = require('http').Server(app);
// const express = require('express');

// app.use(express.static("public"));

// app.get('/',function(req, res){
//     res.sendFile(__dirname +'/index.html');

// });

// http.listen(8080,function(){
//     console.log('Listening on port 8080...');
// });

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "172.18.0.4",
  user: "root",
  password: "piopio",
 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
