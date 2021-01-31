const express = require('express');
const cors = require('cors');
const rotas = require('./routes');

require('./db');

const bodyParser = require('body-parser');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())

app.use(rotas)

app.listen(3000,()=>{
    console.log('server is running')
})