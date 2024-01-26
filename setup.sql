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
    email VARCHAR(45) UNIQUE NOT NULL
);
INSERT INTO utenti.credenziali  (username, password, nome, cognome, email) VALUES ('admin', 'admin', 'Ad', 'Min', 'admin@example.com');
-- INSERT INTO utenti.credenziali (username, password, nome, cognome, email) VALUES ('admin', 'admin', 'John', 'Doe', 'admin@example.com');
-- CREATE TABLE IF NOT EXISTS utenti.credenziali ( 
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   username VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL
--   );

--  INSERT INTO users (username, email) VALUES  ('user1', 'user1@example.com'),   ('user2', 'user2@example.com');
