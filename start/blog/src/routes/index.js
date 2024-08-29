const newsRouter = require('./news');
const siteRouter = require('./site');

function routes(app) {

    // khi nguoi dung truy cap vao /news thi se chay vao newsRouter trong file news.js 
    app.use('/news', newsRouter);

    // khi nguoi dung truy cap vao / thi se chay vao siteRouter trong file site.js hien thi trang chu
    app.use('/', siteRouter);


    // app.get('/', (req, res) => {
    //     res.render('home');  // lay home.handlebars dua vao body trong main.handlebars 
    //   })
      
    //   app.get('/news', (req, res) => {
    //     res.render('news')  // lay noi dung trong news.handlebars dua vao trong phan body cua file main.handlebars trong layouts
    //   })

      
    //   // action ---> dispatcher ---> function handler
    //   app.get('/search', (req, res) => {
    //     res.render('search');
    //   })
      
    //   app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    //   })
}

module.exports = routes;