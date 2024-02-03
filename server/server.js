var app = require('express')();
var http = require('http').Server(app);
const cors = require('cors');
const express = require('express')
const database = require('./databaseConfig');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');


// Aggiungo il token come variabile di sessione
app.use(session({
    secret: 'pippozzo',
    saveUninitialized: true,
    resave: false,
    rolling: true,
    cookie: {
        name: 'sessionCookie',
        maxAge: 3600000, // Durata massima del cookie in millisecondi (ad esempio, 1 ora)
        httpOnly: false,
        secure: false, // Imposta a true se stai usando HTTPS
    }
}))

// Folder risorse statiche
app.use(express.static("collegamenti"));

// Server http in ascolto
var port = 8000;

http.listen(port, function () {
    console.log('Listening on port ' + port + '...');
});


// Serve per interpretare il body delle req come oggetti json
app.use(express.json())


// Utilizzo il package cors per consentire l'invio di risorse dal
// sito da cui è previsto l'invio del login
var corsOptions = { origin: ['http://localhost:3000', 'https://localhost', 'https://localhost/server'], credentials: true, optionSuccessStatus: 200 }
app.use(cors(corsOptions));


// Configurazione delle risposte a richieste http
const jsonData = {
    message: 'Login avvenuto con successo',
    userId: 123,
    username: 'esempio_username'
};

// Favicon
app.get('/icona.ico', function (req, res) {
    res.sendFile(__dirname + '/icona.ico')
}
)

// Middleware per verificare l'autenticazione
const verificaAutenticazione = (req, res, next) => {
    
    console.log("ID della sessione",req.sessionID);
    console.log("Il token è:",req.session.token);
    console.log("Quando entro la sessione è:",req.session);
    
    if (req.session.token === undefined) {
        // Prosegui con la richiesta se l'utente è autenticato
        res.status(401).sendFile(__dirname + '/collegamenti/no-auth.html');
        console.log("Non autenticato. Token: ", req.session)
    } else {

        const getToken = 'SELECT token FROM credenziali where username = ?'
        let username = req.session.user;

        database.query(getToken, [username])

            // res.send viene fatto nel then perché è l'ultima parte di codice ad essere
            // eseguita, inoltre, siamo sicuri che questa query vada a buon fine
            // (passa già un check su login valido!)
            .then((results) => {

                if (results.length > 0 && results[0].token === req.session.token) {
                    console.log("Autenticato. Token: ", req.session.token);
                    next();
                }
                else {
                    // Rispondi con un errore se non esiste l'utente
                    res.status(401).send('Il token non corrisponde all&apos;utente');
                }

            })
            .catch((err) => {
                console.error("Errore della query token: ", err);
                res.status(500).json({ error: "Errore interno del server", message: "Errore durante la verifica dell'autenticazione" });
            })

        console.log("Autenticato. Token: ", req.session.token)

    }
};

app.get('/UniNaScreensharing', verificaAutenticazione, function (req, res) {
    res.sendFile(__dirname + '/index.html')
});


// LOGIN
// Aggiungi gestione OPTIONS
app.options('/login');

app.post('/login', function (req, res) {
    console.log("postFunziona");

    const user = req.body.username;
    const pass = req.body.password;


    // Collegamento al database
    database.connect();

    // Richiesta al db per verificare l'esistenza di un utente registrato
    const query = 'SELECT * FROM credenziali where username = ? and password = ?'
    const getToken = 'SELECT token FROM credenziali where username = ?'

    database.query(query, [user, pass])
        .then((results) => {
            console.log('Risultati della query:', results);

            // Invio dell'esito della query
            if (results.length === 0) {
                res.send({ message: "credenziali errate" });
            }
            else {
                database.query(getToken, [user])

                    // res.send viene fatto nel then perché è l'ultima parte di codice ad essere
                    // eseguita, inoltre, siamo sicuri che questa query vada a buon fine
                    // (passa già un check su login valido!)
                    .then((results) => {

                        let token = results[0].token;
                        req.session.token = token;
                        req.session.user = user;
                        console.log("ID della sessione",req.sessionID);
                        console.log("Setto il token a:",req.session.token);
                        console.log("Quando setto la sessione è:",req.session);

                        req.session.save(() => {
                            res.send({ message: "credenziali valide" });
                        });
                    })
                    .catch((err) => {
                        console.error("Errore della query token: ", err);
                        res.status(500).send('Errore interno del server');
                    })

                req.session.user = user;

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
app.post('/register', function (req, res) {
    console.log("postFunziona");

    const user = req.body.username;
    const pass = req.body.password;
    const nome = req.body.nome;
    const cognome = req.body.cognome;
    const email = req.body.email;

    // Collegamento al database
    database.connect();

    // Chiedo al database di inserire l'utente. Se già esiste l'operazione non viene effettuata.
    const insert = 'INSERT ignore INTO utenti.credenziali (username, password, nome, cognome, email) VALUES (?, ?, ?, ?, ?) '

    database.query(insert, [user, pass, nome, cognome, email])
        .then((results) => {
            console.log('Risultati della query:', results);

            // In base all'esito della query invio il messaggio corretto al client
            if (results.affectedRows > 0) {

                const token = uuidv4();

                const updatetoken = 'UPDATE utenti.credenziali SET token = ? WHERE username = ?;'
                database.query(updatetoken, [token, user])

                res.send({ message: "utente creato" });

            } else {
                res.send({ message: "utente già esistente" });
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

