const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Create course
router.get('/create', courseController.create);

// Show current course
router.post('/store', courseController.store);

// Edit data
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);

// Delete data
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);

router.get('/:slug', courseController.show); // /:slug truyền biến nào thì đặt tên biến đó example: /:id, /:name, etc

module.exports = router; 