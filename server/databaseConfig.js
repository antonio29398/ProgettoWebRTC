var mysql = require('mysql2');


const dbConfig = {
    host: '194.20.1.3',
    user: 'guest',
    password: 'prova',
    database: 'utenti',
    port: 3306,
  };
  


const connection = mysql.createConnection(dbConfig);


module.exports = {
    connect: function () {
      connection.connect((err) => {
        if (err) {
          console.error('Errore di connessione al database:', err.message);
        } else {
          console.log('Connessione al database stabilita con successo');
        }
      });
    },
    close: function () {
      connection.destroy((err) => {
        if (err) {
          console.error('Errore durante la chiusura della connessione al database:', err.message);
        } else {
          console.log('Connessione al database chiusa con successo');
        }
      });
    },
    query: function (queryString, values = []) {
      return new Promise((resolve, reject) => {
        connection.query(queryString, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    },
  };