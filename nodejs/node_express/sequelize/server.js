let express = require('express');
let { Controller } = require('./controler/AbstractControler');
let UserModel = require('./modele/user');
let PostModel = require('./modele/post');
let app = express();

app.use('/user', (new Controller(UserModel)).getRouter());
app.use('/post', (new Controller(PostModel)).getRouter());

app.get('/', function (a, b) {
    b.write('Api in /user')  ;
    b.write('Api in /user <a href="/user"');
    b.end()
});
app.listen(8080);
