/*
 * Middleware  Controller pour toutes les table
 ** */
let express = require('express');

class AbstractControler {
    constructor(fichierServices) {
        this.router = express.Router();
        this.services = require(fichierServices);
        this.router.get('/', (request, response) => {
            this.services.SelectAll((dataBaseData) => {
                return response.json(dataBaseData);
            });
        });
        this.router.get('/:id', (request, response) => {
            this.services.SelectOne(request.params.id, (selected) => {
                response.json(selected);
            });
        });
        this.router.get('/search/:titre', (request, response) => {
            this.services.SelectSearch(request.params.titre, (selected) => {
                response.json(selected);
            });
        });
        this.router.put('/', (request, response) => {
            let data = request.body;
            if (data.length && data.length > 0) {
                this.services.AddSeveral(data, (databack) => {
                    response.json(data);
                });
            } else {
                this.services.AddOne(data, (databack) => {
                    data.id = databack.insertId;
                    response.json(data);
                });
            }
        });
        this.router.post('/:id', (request, response) => {
            let data = request.body;
            let id = request.params.id;
            this.services.Maj(id, data, (selected) => {
                response.json(selected);
            });
        });
        this.router.post('/', (request, response) => {
            let data = request.body;
            let id = request.body.id;
            this.services.Maj(id, data, (selected) => {
                response.json(selected);
            });
        });
        this.router.delete('/:id', (request, response) => {
            this.services.DeleteOne(request.params.id, () => {
                response.send({});
            })
        });
        this.router.delete('/', (request, response) => {
            this.services.DeleteOne(request.body.id, () => {
                response.send({});
            });


        });
    }
    getRouter() {
        return this.router;
    }
    getService() {
        return this.services;
    }
}
    module.exports.Controler = AbstractControler;