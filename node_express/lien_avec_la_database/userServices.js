let dataBaseModule = require('../config/dataBase');
let mySql = require('mysql');

class UsersServices {
    //function static pour la methode static
    //Selection
    static SelectOne(id, FcB) {
        dataBaseModule.query('SELECT * FROM users WHERE id=?;', [id], (err, ligne) => {
            if (err) throw err;
            FcB(ligne);
        });
    }

    //Selection multiple
    static SelectAll(functionCallback) {
        dataBaseModule.query('SELECT * FROM users;', (err, ligne) => {
            if (err) throw err;
            functionCallback(ligne);
        });
    }

    //Recherche d'un element
    static SelectSearch(user, funcitonCB) {
        dataBaseModule.query('SELECT * FROM users WHERE user like ?;', [user + "%"], (err, lignedatabase) => {
            if (err) throw  err;
            funcitonCB(lignedatabase);
        })
    }

    //Ajout d'un element
    static AddOne(data, function_callback) {
        dataBaseModule.query('INSERT INTO users SET  user=?, email=?, password = ?;', [data.user, data.email, data.password], (err, resultat_objet) => {
            if (err) throw err;
            function_callback(resultat_objet);
        })
    }

    //Ajout de plusieurs elements
    static AddSeveral(data, function_cb) {
        let sQlString = [];
        for (let i = 0; i < data.length; i++) {
            let stringSql = mySql.format("(?, ?)", [data[i].titre, data[i].corps, data[i].email, data[i].password]);
            sQlString.push(stringSql);
        }
        dataBaseModule.query('INSERT INTO users (titre, corps, email, password) VALUES ' + sQlString.join(', ') + ';', (err, resultat_objet) => {
            if (err) throw err;
            function_cb(resultat_objet);
        })
    }

    //Mise à jours de la table
    static Maj(id, data, f_callback) {
        dataBaseModule.query('UPDATE users SET user=?, email=?, password WHERE id=?;', [data.user, data.email, data.password, data.id], (err, resultat_objet) => {
            if (err) throw err;
            f_callback(resultat_objet);
        })
    }

    //Effacement d'une table
    static DeleteOne(id, f_callback) {
        dataBaseModule.query('DELETE FROM users WHERE id=?;', [id], (err, resultat_objet) => {
            if (err) throw err;
            f_callback(resultat_objet);
        })
    }

    //Effacement de plusieur table
    static DeleteMany(ids, fCallback) {
        dataBaseModule.query('DELETE FROM users WHERE id in (?);', [ids], (err, resultat_objet) => {
            if (err) throw err;
            fCallback(resultat_objet);
        })
    }
}

module.exports = UsersServices;