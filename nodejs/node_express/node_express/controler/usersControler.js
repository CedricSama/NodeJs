let { Controler } = require('./abstractControler');
let UserControl = new Controler('../lien_avec_la_database/userServices');


UserControl.getRouter().post('/login', (request, response) => {
    if (result) {
        request.session.user = {
            login:request.body.email,
            password:request.body.password
        }
    }else {
        response.send('Pas de connexion')
    }
});


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

module.exports = UserControl.getRouter();