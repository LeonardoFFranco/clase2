const http = require('http');
const server = http.createServer(function (req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('Mostrar algo');
    res.end('Hola Mundo');
});
server.listen(3030, function (){
    console.log('Servidor Inicializado');
})