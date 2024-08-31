const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {

  // [GET] /home
  async index(req, res, next) {

    // dung promise
    Course.find({})
    // lean() de chuyen doi tu mongoose document sang plain object
    .lean()
      .then(courses => {
        res.render('home', {
          courses
          // neu khong dung lean() thi dung course.toObject()
          // courses: courses.map(course => course.toObject())
          // dung util/mongoose.js de chuyen doi tu mongoose document sang plain object
          // courses: multipleMongooseToObject(courses)
        });
      })
      .catch(next);

    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();