const express = require('express');
const passport = require('passport')
require('./auth')(passport);

const app = express();
const port = 3004;

app.get('/', (req, res) => {
    //req es la peticion
    //res es la respuesta
    console.log(req)
    res.status(200).send('Hello World!');
});

app.post('/login', (req, res) => {
    res.status(200).json(
        {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zX5MPQtbjoNAS7rpsx_hI7gqGIlXOQq758dIqyBVxxY'}
    )
});

app.post('/team/pokemons', (req, res, next) => {
    
}, () => {
        //req es la peticion
        //res es la respuesta
        res.status(200).send('Hello World!');
    });

app.get('/team', 
    passport.authenticate('jwt', {session:false}),
(req, res) => {
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