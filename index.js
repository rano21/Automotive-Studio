const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

const userroute = require('./routes/router');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/user', userroute)

app.listen(port, hostname, () => {
    console.log(`Running At http://${hostname}:${port}/`);
})


