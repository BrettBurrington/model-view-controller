const express = require('express');
const { Post, User, Comment } = require('../../models'); // Adjust the paths based on your project's structure
const router = express.Router();

// Middleware for checking if the user is logged in
const withAuth = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    next();
  }
};

// Route for displaying all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text', 'createdAt', 'User.username'],
        },
      ],
    });

    res.render('homepage', { posts }); // Render the homepage template with posts data
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).render('error'); // Render an error page
  }
});

// Route for displaying a single post and its comments
router.get('/post/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findOne({
      where: { id: postId },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text', 'createdAt', 'User.username'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    res.render('post', { post }); // Render the post template with post and comments data
  } catch (error) {
    console.error('Error fetching post and comments:', error);
    res.status(500).render('error'); // Render an error page
  }
});

// Other post-related routes (create, update, delete) can be added here

module.exports = router;
