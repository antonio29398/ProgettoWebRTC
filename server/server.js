var app = require('express')();
var http = require('http').Server(app);
const express = require('express');

app.use(express.static("public"));

app.get('/',function(req, res){
    res.sendFile(__dirname +'/index.html');

});

http.listen(8080,function(){
    console.log('Listening on port 8080...');
});