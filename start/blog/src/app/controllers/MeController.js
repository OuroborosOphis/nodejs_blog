const Course = require('../models/Course');

class MeController {
    // [GET] /stored/courses
    storedCourses(req, res, next) {
        // let courseQuery = Course.find({}).lean();

        // // sap xep theo column va type
        // if (req.query.hasOwnProperty('_sort')) { // neu co _sort trong query
        //     courseQuery = courseQuery.sort({  // sap xep theo column va type
        //         [req.query.column]: ['asc', 'desc'].includes(req.query.type) ? req.query.type : 'desc'
        //     });
        // }

        // de lay duoc so luong cac course da bi xoa 
        Promise.all([
            Course.find({}).lean().sortable(req), // khi can sap xep thi goi ham sortable 
            Course.countDocumentsWithDeleted( { deleted: true })])
            .then(([courses, deletedCount]) => 
                res.render('me/stored-courses', {
                    deletedCount,
                    courses
                })
            )
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});
        
        // Course.find({}).lean()
        //     .then(courses => res.render('me/stored-courses', {
        //         courses
        //     }))
        //     .catch(next);
    }

    // [GET] /trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true}).lean()
            .then(courses => res.render('me/trash-courses', {
                courses
            }))
            .catch(next);
    }
    
}

module.exports = new MeController();