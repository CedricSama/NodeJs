let {Controler} = require('./abstractControler');
let UserControl = new Controler('../lien_avec_la_database/userServices');

UserControl.getRouter().put('/login', (request, response) => {
    let dataDb = {};
    UserControl.getService().SelectAll((Data_de_la_DB) => {
        dataDb = Data_de_la_DB;
        return response.json(Data_de_la_DB);
    });
       /* for (let i = 0; i < dataDb.length; i++) {
            if (request.body.user === dataDb[i].user && request.body.password === dataDb[i].password) {
            }else {
                return ('Oops! Wrong password.')
        }
    }*/
            /*function(req, email, password, done) {*/
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            /*
             connection.query("select * from users where email = '"+email+"'",function(err,rows){
             console.log(rows);
             console.log("above row object");
             if (rows.length) {
             return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
             } else {
             // if there is no user with that email
             // create the user
             var newUserMysql = new Object();
             newUserMysql.email    = email;
             newUserMysql.password = password; // use the generateHash function in our user model
             var insertQuery = "INSERT INTO users ( email, password ) values ('" + email +"','"+ password +"')";
             console.log(insertQuery);
             connection.query(insertQuery,function(err,rows){
             newUserMysql.id = rows.insertId;
             return done(null, newUserMysql);
             });
             }
             }
             */
            //request.session.user = {user:null,password:null};
            /*
             UserControl.getService().SelectAll((Data_de_la_DB) => {
             dataDb = Data_de_la_DB;
             return response.json(Data_de_la_DB);
             });
             */
            /*
             if (request.session.user.user === null) {
             for (let i = 0; i < dataDb.length; i++) {
             if (request.body.user === dataDb[i].user && request.body.password === dataDb[i].password) {
             request.session.regenerate((err) => {
             request.session.user.user = request.body.use;
             request.session.user.passwordr = request.body.password;
             console.log('il y a une erreur de regeneration de session');
             });
             }
             }
             }else {
             for (let i = 0; i < dataDb.length; i++) {
             if (request.body.user === dataDb[i].user && request.body.password === dataDb[i].password) {
             request.session.reload((err) => {
             request.session.user.user = request.body.use;
             request.session.user.passwordr = request.body.password;
             console.log('il y a une erreur de recharge de session');
             });
             }
             }
             }
             */
            //il faut verifier son existance dans la base de donné
//il faut ouvrir sa session
//request.session.user = {user:"", password:""};
            /*UserControl.getService().SelectAll();
             }else {
             //user is connected
             }*/
            /*if (request.session.user.user === request.body.user &&
             request.session.user.password === request.body.password) {
             //si pas trouvé le laisser a null
             //redirect to authentification form
             } else {
             //request.session.user
             }*/
            /*
             let innerDelete = (id, response) => {
             TodoControl.DeleteOne(id, () => {
             console.log(arguments[0]);
             response.send('delete one todo');
             });
             };

             UserControl.getRouter().delete('/', (request, response) => {
             if (request.body.length && request.body.length > 0) {
             let ids = [];
             for (let i = 0; i < request.body.length; i++) {
             ids.push(request.body[i].id);
             }
             UserControl.DeleteMany(ids, () => {
             console.log(arguments[0]);
             response.send('delete several todo');
             });
             } else {
             innerDelete(request.body.id, response);
             }
             });
             */
        });
module.exports = UserControl.getRouter();