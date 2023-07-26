//create web server

const express = require('express');
const app = express();
const port = 3000;

//get the data from the json file
const data = require('./data.json');

//set up the view engine
app.set('view engine', 'pug');

//serve static files
app.use('/static', express.static('public'));

//render index page
app.get('/', (req, res) => {
    res.render('index', {data: data.projects});
});

//render about page
app.get('/about', (req, res) => {
    res.render('about');
});

//render project page
app.get('/project/:id', (req, res) => {
    const {id} = req.params;
    res.render('project', {data: data.projects[id]});
});

//render error page
app.get('*', (req, res) => {
    res.render('error');
});

//listen to the port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});