const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, minLength: 1},
    description: {type: String, maxLength: 600},
    image: {type: String, minLength: 1},
    slug: {type: String, slug: 'name', unique: true}, // never exit the same slug
    videoId: {type: String, minLength: 1}
}, {
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deleteAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);