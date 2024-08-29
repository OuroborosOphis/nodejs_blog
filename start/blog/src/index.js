const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// /img/logo.png -> se tim trong public/img/logo.png va hien thi ra
app.use(express.static(path.join(__dirname, 'public')))

// Http logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH: ', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');  // lay home.handlebars dua vao body trong main.handlebars 
})

app.get('/news', (req, res) => {
  res.render('news')  // lay noi dung trong news.handlebars dua vao trong phan body cua file main.handlebars trong layouts
})


// 127.0.0.1 is the local IP address (localhost)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})