const router = require('express').Router();
const { Post, User} = require('../models'); 
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          // attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
      } catch (err) {
        res.status(500).json(err);
    }
  });

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});


router.get('/post/:id', (req, res) => {
  Post.findByPk(req.params.id, {
      include: [
          {
              model: User
          }
      ],
      where: {
          user_id: req.session.user_id
      }
  }).then((posts) => {
      console.log(posts);
      console.log(`$ test`)
      res.render('eachpost', { posts: posts.dataValues });
  });
});

module.exports = router;
