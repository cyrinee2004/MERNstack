const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog'); // Import the Blog model

// Create an Express application
const app = express();

// MongoDB connection string (replace <db_password> with your actual password)
const dbuRI='mongodb+srv://netninja:cyrine.04@cluster0.9vhlkvc.mongodb.net/'
mongoose.connect(dbuRI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch(err => console.error('Could not connect to MongoDB:', err));


//register view engine
app.set('view engine', 'ejs');


//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
 res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result });
        })
        .catch((err) =>{
             console.error(err)
        });
}); 


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });   
});
//error handling
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});



