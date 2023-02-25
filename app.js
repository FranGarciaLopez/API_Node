const express = require('express')
const app = express();
const port = 3004;

app.get('/', (req, res) => {
    //req es la peticion
    //res es la respuesta
    console.log(req)
    res.status(200).send('Hello World!')
});

app.listen(port, () => {
    console.log('Server started at port 3004');
});


