const express = require('express');
const router = express.Router();
const projectController = require('../controllers/Projectcontroller');

// Define your routes here
router.get('/', projectController.getAllProjects);
router.post('/', projectController.createProject);

module.exports = router;
