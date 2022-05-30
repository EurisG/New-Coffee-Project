const express = require('express');
const Products = require('./models/coffee')
const app = express();

require('dotenv').config();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

const coffeeData = require('./models/coffee')

app.get('/', (req,res) => {
    res.render('Welcome')
})

app.get('/home', (req,res) => {
    res.render('Index', {Products: coffeeData})
});

app.get('/home/new', (req,res) => {
    res.render('New')
});

app.get('/home/:id', (req,res) => {
        res.render('Show', {Products: coffeeData[req.params.id]});
});

app.post('/home', (req,res) => {
    Products.push(req.body)
    console.log(coffeeData)
    res.redirect('home')
})

// app.delete('/home/delete', (req, res) => {
//     res.render('')
// })




const PORT = 3000;
app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}...`)
});