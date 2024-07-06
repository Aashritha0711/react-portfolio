const express = require('express');
const router = express.Router();
const blogController = require('../controllers/Blogcontroller');

router.get('/', blogController.getBlogs);
router.post('/', blogController.createBlog);

module.exports = router;
