var mysql = require('mysql2');


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'utenti',
    port: 13306,
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