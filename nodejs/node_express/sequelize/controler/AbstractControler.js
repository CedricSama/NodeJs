let express = require('express');
class AbstractController {
    constructor(model) {
        this.router = express.Router();
        this.model = model;
        this.router.delete('/:id', (request, response) => {
        });
        this.router.delete('/', (request, response) => {
        });
        this.router.get('/', (request, response) => {
            this.model.findAll().then((users)=>{
                response.json(users);
            });
        });
        this.router.get('/:id', (request, response) => {
            this.model.findAll({where:{id:1, nom:{$like:"ayo%"}}}).then((users)=>{
                response.json(users);
            });
        });
        this.router.get('/search/:titre', (request, response) => {
        });
        this.router.put('/', (request, response) => {
        });
        this.router.post('/', (request, response) => {
        });
    }
    getService(){
        return this.model;
    }
    getRouter() {
        return this.router;
    }
}
module.exports.Controller = AbstractController;




