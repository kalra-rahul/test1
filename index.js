'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-passsrser');
const jsonParser = bodyParser.json();


app.listen(3000,()=>{
    console.log("app listen on 3000sss port")
})


