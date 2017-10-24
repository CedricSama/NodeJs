let dataBaseModule = require('../config/dataBase');
let mySql = require('mysql');

class TodoServices {
    //function static pour la methode static
    //Selection
    static SelectOne(id, FcB) {
        dataBaseModule.query('SELECT * FROM todo_table WHERE id=?;', [id], (err, ligne) => {
            if (err) throw err;
            FcB(ligne);
        });
    }
    //Selection multiple
    static SelectAll(functionCallback) {
        dataBaseModule.query('SELECT * FROM todo_table;', (err, ligne) => {
            if (err) throw err;
            functionCallback(ligne);
        });
    }
    //Recherche d'un element
    static SelectSearch(titre, funcitonCB) {
        dataBaseModule.query('SELECT * FROM todo_table WHERE titre like ?;', [titre + "%"], (err, lignedatabase) => {
            if (err) throw  err;
            funcitonCB(lignedatabase);
        })
    }
    //Ajout d'un element
    static AddOne(data, function_callback) {
        dataBaseModule.query('INSERT INTO todo_table SET titre=?, corps=?;', [data.titre, data.corps], (err, resultat_objet) => {
            if (err) throw err;
            function_callback(resultat_objet);
        })
    }
    //Ajout de plusieurs elements
    static AddSeveral(data, function_cb) {
        let sQlString = [];
        for (let i = 0; i < data.length; i++) {
            let stringSql = mySql.format("(?, ?)", [data[i].titre, data[i].corps]);
            sQlString.push(stringSql);
        }
        //console.log(sQlString.join(', ') );
        dataBaseModule.query('INSERT INTO todo_table (titre, corps) VALUES ' + sQlString.join(', ') + ';', (err, resultat_objet) => {
            if (err) throw err;
            function_cb(resultat_objet);
        })
    }
    //Mise à jours de la table
    static Maj(id, data, f_callback) {
        dataBaseModule.query('UPDATE todo_table SET titre=?, corps=? WHERE id=?;', [data.titre, data.corps, data.id], (err, resultat_objet) => {
            if (err) throw err;
            f_callback(resultat_objet);
        })
    }
    //Effacement d'une table
    static DeleteOne(id, f_callback) {
        dataBaseModule.query('DELETE FROM todo_table WHERE id=?;', [id], (err, resultat_objet) => {
            if (err) throw err;
            f_callback(resultat_objet);
        })
    }
    //Effacement de plusieur table
    static DeleteMany(ids, fCallback) {
        dataBaseModule.query('DELETE FROM todo_table WHERE id in (?);', [ids], (err, resultat_objet) => {
            if (err) throw err;
            fCallback(resultat_objet);
        })
    }
}

module.exports = TodoServices;