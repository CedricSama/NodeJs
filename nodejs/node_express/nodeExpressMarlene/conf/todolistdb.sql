CREATE SCHEMA mytodos;

CREATE TABLE mytodos.todolist
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titre VARCHAR(25) NOT NULL,
    body LONGTEXT NOT NULL
);
CREATE UNIQUE INDEX TotoList_id_uindex ON TotoList (id);
CREATE TABLE mytodos.users
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE UNIQUE INDEX users_id_uindex ON TotoList.users (id);
CREATE UNIQUE INDEX users_email_uindex ON TotoList.users (email);