const express = require('express');

// Create an Express application
const app = express();

//listen for requests on port 3000
app.listen(3000);
app.get('/', (req, res) => {
    //res.send('<h1>Home Page</h1>');
    res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    //res.send('<h1>about Page</h1>');
    res.sendFile('./views/about.html', { root: __dirname });
});
// Redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//error handling
app.use((req, res) => {
    res.status(400).sendFile('./views/404.html', { root: __dirname });
});



