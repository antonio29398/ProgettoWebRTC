var app = require('express')();
var http = require('http').Server(app);
const cors = require('cors');
const express = require('express');
const database = require('./databaseConfig');


// Folder risorse statiche
app.use(express.static("collegamenti"));

// Server http in ascolto
var port = 8080;

http.listen(port, function () {
    console.log('Listening on port ' + port + '...');
});


// Serve per interpretare il body delle req come oggetti json
app.use(express.json())


// Utilizzo il package cors per consentire l'invio di risorse dal
// sito da cui è previsto l'invio del login
app.use(cors());
var corsOptions = { origin: 'http://localhost:3000' }


// Configurazione delle risposte a richieste http
const jsonData = {
    message: 'Login avvenuto con successo',
    userId: 123,
    username: 'esempio_username'
};

// Richiesta dell'applicativo
app.get ('/UniNaScreensharing', function (req,res) {
    res.sendFile(__dirname +'/index.html')});  

// LOGIN
app.post('/login', cors(corsOptions), function (req, res) {
    console.log("postFunziona");

    const user = req.body.username;
    const pass = req.body.password;


    // Collegamento al database
    database.connect();

    // Richiesta al db per verificare l'esistenza di un utente registrato
    const query = 'SELECT * FROM credenziali where username = ? and password = ?'

    database.query(query, [user, pass])
        .then((results) => {
            console.log('Risultati della query:', results);

            // Invio dell'esito della query
            if (results.length === 0) {
                res.send({ message: "credenziali errate" });
            }
            else {
                res.send({ message: "credenziali valide" });
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

});



// REGISTER
app.post('/register', cors(corsOptions), function (req, res) {
    console.log("postFunziona");

    const user = req.body.username;
    const pass = req.body.password;
    const nome = req.body.nome;
    const cognome = req.body.cognome;
    const email = req.body.email;

    // Collegamento al database
    database.connect();

    // Chiedo al database di inserire l'utente. Se già esiste l'operazione non viene effettuata.
    const insert = 'INSERT  ignore INTO utenti.credenziali (username, password, nome, cognome, email ) VALUES (?, ?, ?, ?, ?) '

    database.query(insert, [user, pass, nome, cognome, email])
        .then((results) => {
            console.log('Risultati della query:', results);

            // In base all'esito della query invio il messaggio corretto al client
            if (results.affectedRows > 0) {
                res.send({message: "utente creato"});
            } else {
                res.send({message: "utente già esistente"});
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

});

