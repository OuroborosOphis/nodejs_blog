const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
// ghi de len phuong thuc get, post cua form html bang cach them _method=PUT, _method=DELETE
const methodOverride = require('method-override') 

const sortMiddleware = require('./app/middlewares/sortMiddleware') 

const app = express()
const port = 3000

const route = require('./routes')  // index.js trong routes se tu dong duoc require 
const db = require('./config/db') // index.js trong db se tu dong duoc require

// Connect to DB
db.connect();

// /img/logo.png -> se tim trong public/img/logo.png va hien thi ra
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
// dung cho gui form
app.use(express.urlencoded({
  extended: true
}));
// dung cho gui json tu client len server (axios, fetch) 
app.use(express.json());

// method override 
app.use(methodOverride('_method'))

// custom middleware
app.use(sortMiddleware);

// chay function 1 -> function 2 
// neu function 1 return next() thi se chay function 2
// middleware chi anh huong den 1 route cu the 
// neu dung app.use thi se anh huong den tat ca cac route 
// neu dung app.get thi chi anh huong den route do
app.get('/middleware', 
  function (req, res, next) {
    if (['vethuong', 'vevip'].includes(req.query.ve)) {
      req.face = 'Gach gach gach!!!';
      return next();
    }
    res.status(403).json({
      message: 'Access denied!'
    })
  },
  function (req, res, next) {
  res.json({
    message: 'Successfully!',
    face: req.face
  });
});

// dung middleware cho tat ca cac route
// neu khong them ?ve=vethuong hoac ?ve=vevip thi se tra ve loi 403
// app.use(bacBaoVe);
// app.use('/test', bacBaoVe); // chi dung cho route /test
// function bacBaoVe(req, res, next) {
// if (['vethuong', 'vevip'].includes(req.query.ve)) {
//   req.face = 'Gach gach gach!!!';
//   return next();
// }
// res.status(403).json({
//   message: 'Access denied!'
// })
// }

// Http logger
app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs', 
    handlebars.engine({
      extname: '.hbs',
      helpers: require('./helpers/handlebars')
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log('PATH: ', path.join(__dirname, 'resources/views'));

// Routes init
route(app);  // dung route trong index.js

// 127.0.0.1 is the local IP address (localhost)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})