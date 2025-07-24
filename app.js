const express = require('express');

// Create an Express application
const app = express();

//register view engine
app.set('view engine', 'ejs');


//listen for requests on port 3000
app.listen(3000);


app.get('/', (req, res) => {
     const blogs = [
        { title: 'Blog 1', snippet: 'This is blog 1' },
        { title: 'Blog 2', snippet: 'This is blog 2' },
        { title: 'Blog 3', snippet: 'This is blog 3' }
    ];
    res.render('index', { title: 'Home', blogs, name: 'Blog Ninja' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });   
});
//error handling
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});



