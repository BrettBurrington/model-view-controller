const express = require('express');
const router = express.Router();

const homeRoutes = require('./homeRoutes'); // Import your homeRoutes
// Import other API routes as needed

// Set up routes
router.use('/home', homeRoutes);
// Set up other routes here

module.exports = router;
