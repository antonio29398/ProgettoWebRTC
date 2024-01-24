var app = require('express')();
var http = require('http').Server(app);
const cors = require ('cors');
const express = require('express');


app.use(express.static("collegamenti"));

//Utilizzo il package cors per consentire l'invio di risorse dal
//sito da cui è previsto l'invio del login
app.use(cors());
var corsOptions = { origin: 'http://localhost:3000'  }



//Configurazione delle risposte a richieste http
const jsonData = {
    message: 'Login avvenuto con successo',
    userId: 123,
    username: 'esempio_username'
  };


//LOGIN
app.post('/login', cors(corsOptions), function(req, res){
    console.log("postFunziona");
    res.send(jsonData)
});



//REGISTER
app.post('/register', cors(corsOptions), function(req, res){
    console.log("postFunziona");
    res.send(jsonData)
});

http.listen(8080,function(){
    console.log('Listening on port 8080...');
});


// const server = https.createServer(httpsOptions, app).listen(port, () => {
//     console.log('server running at ' + port)
//   })


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


