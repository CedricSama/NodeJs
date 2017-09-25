/**
 * Created by stagiaire on 07/09/2017.
 */
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'todoliste'
});
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = connection;
/*
 let appConf ={
 env:'dev',
 db:{
 server:"127.0.0.1",
 port:"3306",
 user:"root",
 password:"root",
 database:"todoliste"
 },
 author:"Cédric"
 };
 //en deux fichiers difference
 module.exports = appConf;

 if(env === 'dev')connection.connect((err) => {
 if (err) throw err;
 console.log("Connected!");
 });

 let appConfig = require('appConf');
 let DBManager = class dataBaseManager{
 let connection : Connection = null;
 constructor(){
 this.conneciton = mysql.createConnection({
 host: appConfig.db.server,
 port: appConfig.db.port,
 user: appConfig.db.user,
 password: appConfig.db.password,
 database: appConfig.db.database
 });
 }
 query(){
 this.connection.query(arguments[0], arguments[1], arguments[2]);
 }
 query(a, b, c){
 this.connection.query();
 }
 connect (){
 this.connection.connect();
 }
 end(){
 this.connection.end();
 }
 }

 module.exports.DBManager = DBManager;
 // Donc de l'autre coté le let blabla = require('DBManager');
 //  let dbModule = new DBManager;

 //static SelectAll(functionCallback) {
 //  dataBaseModule.query('SELECT * FROM todo_table;', (err, ligne) => {
 //  dbModule.connect(); ou tu met dans le constructeur "this.conneciton.connect();"
 //  if (err) throw err;
 //  functionCallback(ligne);
 //  dbModule.end();
 //  });
 //  }

 // et grace a la query tu peux lacher un dbModule.query.('SELECT * FROM todo_table;', (err, ligne) ...blablabla

 // let connection = mysql.createConnection({
 //     host: appConfig.db.server,
 //     port: appConfig.db.port,
 //     user: appConfig.db.user,
 //     password: appConfig.db.password,
 //     database: appConfig.db.database
 });*/
