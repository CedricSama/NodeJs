let express = require('express');
let fs = require('fs');
let users = require('./controler/usersControler');
let todo = require('./controler/newTodoControler');
let parseBody = require('body-parser');
let session = require('express-session');
let cors = require('cors');

let app = express();



app.use(cors());
/*declaration deu repertoir des statics*/
app.use('/statics', express.static('assets'));
app.use(session({
    secret: 'SecretQuiDechireIciQuiPermetASessionDeCripterLeSecretEtProtegerLesSessions',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
/*declaration des middleware (Controlers$*/
app.use(parseBody.urlencoded({extended: false}));
app.use(parseBody.json());
app.use('/todo', todo);
app.use('/users', users);


//app.use('/user', todo);
//app.use('/blabla', todo);

//app.use('/node', express.static('node_modules'));
app.get('/', (request, response) => {
    request.session.message = "Blabla";
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