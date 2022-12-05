const Course = require('../models/Course.js');
const {mongooseToObject} = require('../../util/mongoose.js');

class CourseController {
    // GET /course/:slug
    // 
    show(req, res, next){
        Course.findOne({ slug: req.params.slug})
            .then((course) => res.render('courses/show', {course: mongooseToObject(course)}))
            .catch(error => next(error));
    }
  
}

module.exports = new CourseController();