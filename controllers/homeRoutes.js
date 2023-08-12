const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../models');


module.exports = router;

router.get('/', async (req, res) => {
  t
    const blogPosts = await BlogPost.findAll();
    res.render('homepage', { blogPosts })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching data.' });
  }
});

// Other routes for login, signup, etc.

module.exports = router;
