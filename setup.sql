-- create the databases
CREATE DATABASE IF NOT EXISTS utenti;

-- create the users for each database
CREATE USER 'guest'@'%' IDENTIFIED BY 'prova';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `utenti`.* TO 'guest'@'%';

FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS utenti.credenziali (
    username VARCHAR(45) PRIMARY KEY NOT NULL,
    password VARCHAR(45) NOT NULL,
    nome VARCHAR(45) NOT NULL,
    cognome VARCHAR(45) NOT NULL,
    email VARCHAR(45) UNIQUE NOT NULL,
    token VARCHAR(45) UNIQUE NOT NULL
);
INSERT INTO utenti.credenziali  (username, password, nome, cognome, email, token) VALUES ('admin', 'admin', 'Ad', 'Min', 'admin@example.com', 'admintoken');