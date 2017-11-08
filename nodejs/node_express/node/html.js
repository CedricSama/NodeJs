const http = require('http');
const serv = http.createServer();
let fileS = require('fs');

serv.on('request', (request, response) => {
    fileS.readFile('node/index.html', (erreur, data) => {
        if (erreur) throw erreur;
        response.writeHead(201, "Wouha c'est mortel", {
            'Content-Type': 'text/html; charset=utf-8',
            'toto': 'titi'
        });
        response.end(data);
    });
});
serv.listen(8080);