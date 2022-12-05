const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, minLength: 1},
    description: {type: String, maxLength: 600},
    image: {type: String, minLength: 1},
    slug: {type: String, minLength: 1},
    videoId: {type: String, minLength: 1},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course)