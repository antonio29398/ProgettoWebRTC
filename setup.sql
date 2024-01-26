-- create the databases
CREATE DATABASE IF NOT EXISTS utenti;

-- create the users for each database
CREATE USER 'guest'@'%' IDENTIFIED BY 'prova';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `utenti`.* TO 'guest'@'%';

FLUSH PRIVILEGES;
