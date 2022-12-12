const Course = require('../models/Course.js');
const {mutipleMongooseToObject} = require('../../util/mongoose.js');

class MeController {

    storedCourses(req, res, next){

        // Course.countDocumentsDeleted()
        //     .then((deleteCount)=> {
        //         console.log(deleteCount);
        //     })
        //     .catch(error => next(error))
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', {courses: mutipleMongooseToObject(courses)});
            })
            .catch(error => next(error));
    }

    trashCourses(req, res, next){
        // find all courses have been deleted
        Course.findDeleted({})
            .then(courses => {
                res.render('me/trash-courses', {courses: mutipleMongooseToObject(courses)});
            })
            .catch(error => next(error));
    }

}

module.exports = new MeController();