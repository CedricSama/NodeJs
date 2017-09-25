/*
 * Middleware  Controller pour tous les Todos
 ** */
let express = require('express');
let router = express.Router();
let todoServices = require('../lien_avec_la_database/todoServices');

let innerDelete = (id, response) => {
    todoServices.DeleteOne(id, () => {
        console.log(arguments[0]);
        response.send('delete one todo');
    });
};
//selection multiple
router.get('/', (request, response) => {
    console.log(request.session);
    todoServices.SelectAll((dataBaseData) => {
        return response.json(dataBaseData);
    });
});
//selection unique
router.get('/:id', (request, response) => {
    //console.log(request.params);
    todoServices.SelectOne(request.params.id, (selected) => {
        response.json(selected);
    });
});
//recherche unique
router.get('/search/:titre', (request, response) => {
    todoServices.SelectSearch(request.params.titre, (selected) => {
       response.json(selected);
    });
});
//ajout d'une ligne dans la bd
router.put('/', (request, response) => {
    //console.log(request.body);
    let data = request.body;
    //ajout multiple dans la bd
    if (data.length && data.length > 0) {
        //console.log(request.body);
        let data = request.body;
        todoServices.AddSeveral(data, (databack) => {
            //console.log(databack);
            //data.id = databack.insertId;
            response.json(data);
            //response.send('put todo list');
        });
    } else {
        todoServices.AddOne(data, (databack) => {
            //console.log(databack);
            data.id = databack.insertId;
            response.json(data);
        });
    }
});
//mise a jour d'une ligne dans la bd
router.post('/:id', (request, response) => {
    let data = request.body;
    let id = request.params.id;
    todoServices.Maj(id, data, (selected) => {
        response.json(selected);
    });
});
//effacement d'une ligne de la bd
router.delete('/:id', (request, response) => {
    innerDelete(request.params.id, response);
});
//effacement multiple dans la bd
router.delete('/', (request, response) => {
    if (request.body.length && request.body.length > 0) {
        let ids = [];
        for (let i = 0; i < request.body.length; i++) {
            ids.push(request.body[i].id);
        }
        todoServices.DeleteMany(ids, () => {
            console.log(arguments[0]);
            response.send('delete several todo');
        });
    } else {
        innerDelete(request.body.id, response);
    }
});

module.exports = router;