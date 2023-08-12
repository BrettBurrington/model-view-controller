const express = require('express');
const router = express.Router();

const userController = require('./userController'); // Adjust the filename based on your actual controller
const postController = require('./postController'); // Adjust the filename based on your actual controller

// Set up routes using the imported controllers
router.use('/users', userController);
router.use('/posts', postController);

module.exports = router;
