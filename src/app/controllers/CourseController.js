const Course = require('../models/Course.js');
const {mongooseToObject} = require('../../util/mongoose.js');
const slugify = require('slugify');

class CourseController {
    // GET /course/:slug
    show(req, res, next){
        Course.findOne({ slug: req.params.slug})
            .then((course) => res.render('courses/show', {course: mongooseToObject(course)}))
            .catch(error => next(error));
    }

    // GET /courses/create
    create(req, res, next){
        res.render('courses/create');
    }

    // POST /courses/store
    store(req, res, next){
        const formData = {...req.body};
        formData.image = `https://i.ytimg.com/vi_webp/${req.body.videoId}/maxresdefault.webp`; // Add atribute image: .. in DB
        const course =  new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => next(error))
    }

    // GET /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(error => next(error));
    }

    // PUT /courses/:id
    update(req, res, next){
        const formData = {...req.body}
        formData.image = `https://i.ytimg.com/vi_webp/${req.body.videoId}/maxresdefault.webp`;
        formData.slug = slugify(formData.name, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: true,     // strip special characters except replacement, defaults to `false`
            locale: 'vi',
        })
        Course.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => next(error));
    }

    // DELETE /courses/:id
    destroy(req, res, next){
        // when soft delete
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => next(error));
    }

    // DELETE /courses/:id/force
    forceDestroy(req, res, next){
        // when delete forever
        Course.deleteOne({ _id: req.params.id })
            // when delete success go to back site: redirect('back')
            .then(() => res.redirect('/me/trash/courses'))
            .catch(error => next(error));
    }

    // PATCH
    restore(req, res, next){
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(error => next(error));
    }
}

module.exports = new CourseController();