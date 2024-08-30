const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')  // index.js trong routes se tu dong duoc require 

// /img/logo.png -> se tim trong public/img/logo.png va hien thi ra
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
// dung cho gui form
app.use(express.urlencoded({
  extended: true
}));
// dung cho gui json tu client len server (axios, fetch) 
app.use(express.json());

// Http logger
app.use(morgan('combined'))

// Template engine
      app.engine(
  'hbs',  handlebars.engine({
  extname: 
    '.hbs'
}));
app.set('view engine', 
  'hbs');
  app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH: ', path.join(__dirname, 'resources/views'));

// Routes init
route(  app);  // dung route trong index.js

// 127.0.0.1 is the local IP address (localhost)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })