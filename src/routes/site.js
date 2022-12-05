const express = require('express');
const router = express.Router();

// khi khởi tạo thì chỉ cần viết thường chữ cái đầu tiên
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
