
class NewsController {

  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  // [GET] /news/:slug
  // slug la bien dong nhan gia tri tu nguoi dung truyen vao 
  show(req, res) {
    res.send('NEWS DETAIL');
  }
}

module.exports = new NewsController();