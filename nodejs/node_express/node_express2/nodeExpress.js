let express = require('express');
let fs = require('fs');
let users = require('./controler/usersControler');
let usersS = require('./lien_avec_la_database/userServices');
let todo = require('./controler/newTodoControler');
let parseBody = require('body-parser');
let session = require('express-session');
let cors = require('cors');

let app = express();

/*
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
*/

/*declaration deu repertoir des statics*/
app.set('view engine', 'ejs');
app.use('/statics', express.static('assets'));
app.use(cors());
app.use(session({
    secret: 'SecretQuiDechireIciEtQuiPermetALaApp.SessionDeCripterLeSecretEtDeProtegerLesSessionsTahi',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }
}));
/*declaration des middleware (Controlers$*/
app.use(parseBody.urlencoded({extended: false}));
app.use(parseBody.json());
app.use('/todo', todo);
app.use('/users', users);

//app.use('/user', todo);
//app.use('/blabla', todo);

//app.use('/node', express.static('node_modules'));
app.get('/utpl', (request, response) =>{
    usersS.SelectAll((users)=>{
        response.render("UserTemplate", {Userlist:users})
    });

});
app.get('/', (request, response) => {
   //request.session.message = "Blabla";
    fs.readFile('assets/index.html', (err, data) => {
        if (err) throw err;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.send(data);
    });
});
app.put('/', (request, response) => {});
app.post('/', (request, response) => {});
app.delete('/', (request, response) => {});

app.listen(8080);