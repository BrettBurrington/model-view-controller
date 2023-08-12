const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../models'); // Adjust the path to match your directory structure

// Define your routes and logic here

module.exports = router;

router.get('/', async (req, res) => {
  try {
    // Fetch data from your models and pass it to your template
    const blogPosts = await BlogPost.findAll();
    res.render('homepage', { blogPosts }); // Replace 'homepage' with your template name
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching data.' });
  }
});

// Other routes for login, signup, etc.

module.exports = router;
