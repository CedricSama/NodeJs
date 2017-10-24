const http = require('http');
let m = require('./module');
//let m = require('module');
let serv = http.createServer();
//() => {} ();
//serv.on('request', function (request, response) {
serv.on('request', (request, response) => {
    console.log(request.method);
    //m.execute();
    response.writeHead(201, "Wouha c'est mortel" ,{
        'Content-Type': 'text/html; charset=utf-8' });
    //response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.write('Serveur est entrain de marché');
    response.end();
    //response.end('Serveur est entrain de marché');
});
serv.listen(8080);