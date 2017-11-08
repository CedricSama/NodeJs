

let express = require('express');
class AbstractController {
    constructor(Service) {
        this.router = express.Router();
        this.service = require(Service);
        this.router.delete('/:id', (request, response) => {
            this.service.deleteOne(request.params.id, function () {
                response.send({});
            });
        });
        this.router.delete('/', (request, response) => {
            this.service.deleteOne(request.body.id, function () {
                response.send({});
            });
        });
        this.router.get('/', (request, response) => {
            this.service.selectAll(function (dbData) {
                response.json(dbData);
            });
        });
        this.router.get('/:id', (request, response) => {
            this.service.selectOn(request.params.id, function (selected) {
                response.json(selected);
            });
        });
        this.router.get('/search/:titre', (request, response) => {
            this.service.findByTitle(request.params.titre, function (selected) {
                response.json(selected);
            });
        });
        this.router.put('/', (request, response) => {
            let data = request.body;
            this.service.addOne(data, function (databack) {
                data.id = databack.insertId;
                response.json(data);
            });
        });
        this.router.post('/', (request, response) => {
                     let data = request.body;
            this.service.updateOne(data, function (databack) {
         
                response.json(data);
            });
        });

    }
    getService(){
        return this.service;
    }
    getRouter() {
        return this.router;
    }
}
module.exports.Controller = AbstractController;



