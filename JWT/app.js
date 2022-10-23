const express  = require ('express');

const app = express();

const jwt = require('jsonwebtoken');
const keys =  require('./settings/keys');

app.listen(3000,()=>{
    console.log('SERVIDOR UP EN http://localhost:3000')
})