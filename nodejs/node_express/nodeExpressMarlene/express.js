let express = require('express');
let fs = require('fs'); //filesystem
let bodyParse = require("body-parser");
let todo =require ('./controller/ToDoController');
let users =require ('./controller/usersController');
let session = require("express-session");
let cors = require('cors');



let app = express();
//definition de la vue de template a utiliser
app.set('view engine', 'ejs');
app.use(cors());
app.use(session({
    secret: 'secretekey4session',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
    // cookie: { secure: false, maxAge: 60000 }
}));

//declaration du repertoire static
app.use('/static', express.static("assets"));
// parse application/x-www-form-urlencoded
app.use(bodyParse.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParse.json());


//declaration de middleware(controller)
app.use('/todo',todo);
app.use('/users',users);




//app.use('/node', express.static("node_modules"));
app.get('/',(request, response)=>{
    request.session.test = "azerty";
    request.session.name = "Marlene";

    fs.readFile('assets/index.html', (err, data)=>{
        if(err) {
           throw err;
        }
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.send(data)
});
});
app.get('/ejs',(request, response)=>{
    //service.selectAll
    let todoService =  require('./service/TodoService');
    todoService.selectAll((data)=>{
        response.render("index", {data:data});
    })

});
app.put('/',(request, response)=>{

});
app.post('/',(request, response)=>{

});
app.delete('/',(request, response)=>{

});




app.listen(8090);