const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ejemplo = require('./ejemplo');
const pruebaRutas = require('./routing/prueba.route');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send({saludo: ejemplo.suma(12,4)});
});

app.post('/',(req, res) =>{
    
    res.send({post: 'Hola Post'});
});

app.put('/', (valor1,valor2) => {
    valor2.send({put: 'Actualizar datos'});
})

app.delete('/', (entrada, salida) => {
    salida.send({delete: 'Eliminado'});
})

//llamadas desde un archivo routing

app.use('/usuarios', pruebaRutas);

app.use('/calculadora',pruebaRutas);



app.listen(3031, ()=> {
    console.log('servidor express')
})