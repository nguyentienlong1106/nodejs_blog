const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show); // /:slug truyền biến nào thì đặt tên biến đó example: /:id, /:name, etc

module.exports = router; 