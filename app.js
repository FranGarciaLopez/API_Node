const express = require('express');
var bodyParser = require('body-parser')

//Routes
const authRoutes = require('./router/auth').router;
const teamsRoutes = require('./router/team').router;

const app = express();
app.use(bodyParser.json());

const port = 3005;

app.get('/', (req, res) => {
    //req es la peticion
    //res es la respuesta
    console.log(res)
    res.status(200).send('Hello World!');
});

app.use('/auth', authRoutes);
app.use('/teams', teamsRoutes);

app.listen(port, () => {
    console.log('Server started at port 3005');
});

exports.app = app;