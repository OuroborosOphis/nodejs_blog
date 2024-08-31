const Course = require('../models/Course');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => {
                res.render('courses/show', { course });
            })
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    // luu vao database
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }

    // [GET] /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', { course }))
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next){
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

// GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
// GET: gui yeu cau len sv va tra du lieu ve cho client 
// POST: gui yeu cau len sv va luu du lieu vao database
// PUT: gui yeu cau len sv va cap nhat du lieu trong database (toan bo)
// PATCH: gui yeu cau len sv va cap nhat du lieu trong database (1 phan)
// DELETE: gui yeu cau len sv va xoa du lieu trong database
// OPTIONS: gui yeu cau len sv de xem xet cac phuong thuc ho tro
// HEAD: giong nhu GET nhung khong co phan body


module.exports = new CourseController();