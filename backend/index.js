const express = require('express');
const app = express();
const router = require('./routes')
const dbConnect = require('./data/dbConnect')

dbConnect();

app.all(/^\//, router);



app.listen(3030, () => console.log('Rodando na porta 3030'));