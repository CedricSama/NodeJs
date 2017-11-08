const http = require('http');
let fileS = require('fs');
//const {Console} = require('console');

let logger = require('./logger');

const serv = http.createServer();
/*let output = fileS.createWriteStream('./outlog.txt');
 let error = fileS.createWriteStream('./errlog.txt');
 let log = new Console(output, error);

 logger.log("logger created successfully");*/

serv.on('request', (request, response) => {
    logger.log('receotuion de la request : http://localhost:8080' + request.url);
    if (request.url === "/1") {
        fileS.readFile('node/index.html', (erreur, data) => {
            if (erreur) {
                logger.log('index.html has been red with errors');
                logger.error(erreur);
                // throw erreur;
            }
            logger.log('index.html has been red');
            response.writeHead(200, "Wouha c'est mortel",
                {
                    'Content-Type': 'text/html; charset=utf-8',
                    'toto': 'titi'
                });
            logger.log("Envoie de la data a l'utilisateur");
            response.end(data);

        });
    } else if (request.url === "/2") {
        fileS.readFile('node/indexExo.html', (erreur, data) => {
            if (erreur) {
                logger.log('index.html has been red with errors');
                logger.error(erreur);
                // throw erreur;
            }
            logger.log('index.html has been red');
            response.writeHead(200, "Wouha c'est trop mortel",
                {
                    'Content-Type': 'text/html; charset=utf-8',
                    'tata': 'toto'
                });
            console.log(data.toString('utf-8'));
            logger.log("Envoie de la data a l'utilisateur");
            response.end(data);
        });

    }
});
/*
 serv.on('request', (request, response) => {
 fileS.readFile('node/index.html', (erreur, data, fn) => {
 if (erreur) throw erreur;
 response.writeHead(200, "Wouha c'est mortel",
 {
 'Content-Type': 'text/html; charset=utf-8',
 'toto': 'titi'
 }
 );
 fn('request', (request, response) => {
 fileS.readFile('node/indexExo.html', (erreur, data) => {
 if (erreur) throw erreur;
 response.writeHead(200, "Wouha c'est TROP mortel", {
 'Content-Type': 'text/html; charset=utf-8',
 'tata': 'toto'
 });
 });
 });
 });
 response.end(data);
 });
 */
serv.listen(8080);