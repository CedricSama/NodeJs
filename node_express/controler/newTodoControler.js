let { Controler } = require('./abstractControler');
// let TodoServices = new Controler('../lien_avec_la_database/todoServices');
let TodoControl = new Controler('../lien_avec_la_database/todoServices');
let innerDelete = (id, response) => {
    TodoControl.DeleteOne(id, () => {
        console.log(arguments[0]);
        response.send('delete one todo');
    });
};

TodoControl.getRouter().delete('/', (request, response) => {
    if (request.body.length && request.body.length > 0) {
        let ids = [];
        for (let i = 0; i < request.body.length; i++) {
            ids.push(request.body[i].id);
        }
        TodoControl.getService().DeleteMany(ids, () => {
            console.log(arguments[0]);
            response.send('delete several todo');
        });
    } else {
        innerDelete(request.body.id, response);
    }
});

module.exports = TodoControl.getRouter();