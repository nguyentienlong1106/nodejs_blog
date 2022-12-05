const Course = require('../models/Course.js');
const {mutipleMongooseToObject} = require('../../util/mongoose.js');

class SiteController {
    //[GET] /
    index(req, res, next){
        
        // Course.find({}, function (err, courses) {
        //     if(!err) {
        //         res.json(courses);
        //     }else{
        //         next(err);
        //     }
        // })

        // Promise
        Course.find({})
            .then(courses => {
                res.render('home', {courses: mutipleMongooseToObject(courses)})
            })
            .catch(error => next(error));

        // Course.find({})
        //     .then(courses => res.render('home', { courses }))
        //     .catch(error);
    }

    

    // [GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController();