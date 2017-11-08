/* Fichier qui permet les nouvelles install sur nouvelle becanes*/
CREATE SCHEMA todoliste;
USE todoliste;
CREATE TABLE todoliste.Todo_Table
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titre VARCHAR(255),
    corps LONGTEXT NOT NULL
);
CREATE UNIQUE INDEX Todo_Table_id_uindex ON Todo_Table (id);

CREATE TABLE todoliste.users
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL

);
CREATE UNIQUE INDEX table_name_id_uindex ON users (id);
CREATE UNIQUE INDEX table_name_user_uindex ON users (user);
CREATE UNIQUE INDEX table_name_email_uindex ON users (email);