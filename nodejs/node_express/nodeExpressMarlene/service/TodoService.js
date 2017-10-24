//let dbModule = require("../conf/db");
let {DBManager} = require("../conf/db");
let mysql =require ("mysql");

class TodoService{
    static selectAll(callback){
        let dbModule = new DBManager();
        dbModule.query("select * from todolist ORDER BY id DESC;", function (err,rows) {
            if(err)throw err;
            callback(rows);
        });
        dbModule.end();
    }

    static selectOneById(id, callback){
        let dbModule = new DBManager();
        dbModule.query("select * from todolist where id=?;",[id], function (err,rows) {
            if(err)throw err;
            callback(rows);
        });
        dbModule.end();
    }

    static findByTitle(titre, callback){
        let dbModule = new DBManager();
        dbModule.query("select * from todolist where titre like ?;",[titre+"%"], function (err,rows) {
            if(err)throw err;
            callback(rows);
        });
        dbModule.end();
    };

    static addOne(data, callback){
        let dbModule = new DBManager();
    dbModule.query("INSERT INTO todolist SET titre=?, body=?;",[data.titre, data.body], function (err,insertResult) {
        if(err)throw err;
        callback(insertResult);
        console.log(data);
    });
        dbModule.end();
}
static addMany(data, callback){
  let sqlStr = [];
  for(let i = 0; i<data.length; i++){
      let str = mysql.format("( ?, ? )", [data[i].titre, data[i].body]);
      sqlStr.push(str);
  }
  console.log(sqlStr.join(' , '));
    let dbModule = new DBManager();
  dbModule.query("INSERT INTO todolist (titre, body) Values"+sqlStr.join(' , ')+";", data, function (err, insertResult) {
      if(err)throw err;
      callback(insertResult);
  });
    dbModule.end();
}

static deleteOne(id, callback){
    let dbModule = new DBManager();
        dbModule.query("DELETE FROM todolist where id=?;",[id], function (err, insertResult) {
            if(err)throw err;
            callback(insertResult);
        });
    dbModule.end();
}
static deleteMany(ids, callback){
    let dbModule = new DBManager();
    dbModule.query("DELETE FROM todolist where id in ( ? );",[ids], function (err, insertResult) {
        if(err)throw err;
        callback(insertResult);
    });
    dbModule.end();
    }
static updateOne(data, callback){
    let dbModule = new DBManager();
    dbModule.query("UPDATE todolist SET titre=?, body=? WHERE id=?;",[data.titre, data.body, data.id], function (err,insertResult) {
        if(err)throw err;
        callback(insertResult);
        console.log(data);
    });
    dbModule.end();
    }
}

module.exports = TodoService;

