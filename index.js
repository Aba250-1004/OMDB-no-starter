require('dotenv').config()
const express = require('express')
const app = express();
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs')

app.set('view engine','ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false}))

app.get('/',(request,res)=>{
    res.render('home.ejs')
})

let movies = require('./controllers/movies');
app.use('/movies',movies)

app.listen(8000,()=>{
    console.log("connected to port 8000")
})