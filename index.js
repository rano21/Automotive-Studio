const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const path = require("path")

const testroute = require("./routes/test.route")
const userroute = require('./routes/user.route');
const adminroute = require('./routes/admin.route');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname, 'public')));
app.use('/user', userroute)
app.use('/admin', adminroute)
app.use("/test" , testroute )
app.get('*', function(req, res){
    res.status(404).send('404 error: page not found');
  });



app.listen(port, hostname, () => {
    console.log(`Running At http://${hostname}:${port}/`);
})