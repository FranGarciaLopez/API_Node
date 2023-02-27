const express = require('express');
const app = express();
const port = 3004;

app.get('/', (req, res) => {
    //req es la peticion
    //res es la respuesta
    console.log(req)
    res.status(200).send('Hello World!');
});

app.post('/team/pokemons', () => {
    //req es la peticion
    //res es la respuesta
    res.status(200).send('Hello World!');
});

app.get('/team', () => {
    //req es la peticion
    //res es la respuesta
    res.status(200).send('Hello World!');
});

app.delete('/team/pokemons/:pokeid', () => {
    //req es la peticion
    //res es la respuesta
    res.status(200).send('Hello World!');
});

app.put('/team', () => {
    //req es la peticion
    //res es la respuesta
    console.log(req)
    res.status(200).send('Hello World!');
});

app.listen(port, () => {
    console.log('Server started at port 3004');
});


exports.app = app;