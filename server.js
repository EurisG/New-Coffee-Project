// Importing epxress 
const express = require('express');
const Products = require('./models/coffee')
const app = express();

// Importing dotenv in order to connect to database 
require('dotenv').config();

// Setting engine to display my JSX 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// defining new variable to my model 
const coffeeData = require('./models/coffee')

// First route that renders the welcome jsx 
app.get('/', (req,res) => {
    res.render('Welcome')
})

// route that renders Index. jsx and show all products 
app.get('/home', (req,res) => {
    res.render('Index', {Products: coffeeData})
});

// route that takes you to form to create new product 
app.get('/home/new', (req,res) => {
    // console.log(req.params.id)
    res.render('New')
});


// route to post new data to my home page 
app.post('/home', (req,res) => {
    Products.push(req.body)
    console.log(coffeeData)
    res.redirect('home')
});

// route that takes you to individual product and gives you data 
app.get('/product/:id', (req,res) => {
    res.render('Show', {Products: coffeeData[req.params.id]});
});

// route that will delete your product 
app.delete('/product/:id/delete', (req, res) => {
    console.log(req.params.id)
   Products.findByIdAndDelete(req.params.id)
       console.log("Item was deleted")
       res.redirect('deleted')
    
});

// route that will edit your product 
app.get('/home/:id/edit', (req,res) => {
    Products.findByIdAndUpdate()
    res.render('Edit')
})


// Port listener 
const PORT = 3000;
app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}...`)
});




