var app = require('express')();
var http = require('http').Server(app);
const cors = require('cors');
const express = require('express');
const database = require('./databaseConfig');
var mysql = require('mysql2/promise');
app.use(express.static("collegamenti"));

// serve per interpretare il body delle req come oggetti json
app.use(express.json())
// //Utilizzo il package cors per consentire l'invio di risorse dal
// //sito da cui è previsto l'invio del login
app.use(cors());
var corsOptions = { origin: 'http://localhost:3000' }



// //Configurazione delle risposte a richieste http
const jsonData = {
  message: 'Login avvenuto con successo',
  userId: 123,
  username: 'esempio_username'
};


// // //LOGIN
app.post('/login', cors(corsOptions), function (req, res) {
  console.log("postFunziona");

  const user = req.body.username;
  const pass = req.body.password;



  // collegamento al database
  database.connect();

  const query = 'SELECT * FROM credenziali where username = ? and password = ?'

  // query
  database.query(query, [user, pass])
    .then((results) => {
      console.log('Risultati della query:', results);
      res.send(results);



    })
    .catch((err) => {
      console.error("Errore durante l'esecuzione della query:", err);
    })
    .finally(() => {

      /* ATTENZIONE */
      // La connessione non viene chiusa in quanto più tentativi di accesso richiederebero diversi tentativi di riconnessione
      // allo stesso database. Per questo motivo si sceglie di usare un unica connessione per tutto il ciclo di vita del server
      //  database.close(); 
    });



  // res.send(results)
  // res.send(jsonData);
});



// //REGISTER
app.post('/register', cors(corsOptions), function (req, res) {
  console.log("postFunziona");

  const user = req.body.username;
  const pass = req.body.password;
  const nome = req.body.nome;
  const cognome = req.body.cognome;
  const email = req.body.email;
  var flag=0;


  // collegamento al database
  database.connect();

  
// se l'utente già esiste non lo inserisco e comunico al client(DA GESTIRE), se c'è tutt appost

  const insert = 'INSERT  ignore INTO utenti.credenziali (username, password, nome,cognome, email ) VALUES (?, ?, ?, ?, ?) '

  // query
  database.query(insert, [user, pass, nome, cognome, email])
    .then((results) => {
      console.log('Risultati della query:', results);
      let jsnonMessage ={message: "caricato"}
      let jsnonMessage2 ={message: "non caricato"}
      
      // check di insert effettuato o meno
      if(results.affectedRows >0){
        res.send(jsnonMessage);
      }else{
        
        res.send(jsnonMessage2);

      }


    })
    .catch((err) => {
      console.error("Errore durante l'esecuzione della query:", err);
    })
    .finally(() => {

      /* ATTENZIONE */
      // La connessione non viene chiusa in quanto più tentativi di accesso richiederebero diversi tentativi di riconnessione
      // allo stesso database. Per questo motivo si sceglie di usare un unica connessione per tutto il ciclo di vita del server
      //  database.close(); 
    });



  // res.send(results)
  // res.send(jsonData);
});



http.listen(8080, function () {
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


// database.connect();

// let user = 1

// database.query('SELECT password FROM credenziali where username = ?',user)
//   .then((results) => {
//     if (results.length === 0) {
//       console.log('Niente');      
//     } else {

//       console.log('Risultati della query:', results);
//     }
//   })
//   .catch((err) => {
//     console.error("Errore durante l'esecuzione della query:", err);
//   })
//   .finally(() => {
//     // Chiudi la connessione al database quando hai finito
//     database.close();
//   });



