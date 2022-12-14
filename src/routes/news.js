const express = require('express');
const router = express.Router();

// khi khởi tạo thì chỉ cần viết thường chữ cái đầu tiên
const newsController = require('../app/controllers/NewController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router; 