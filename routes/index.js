import  express from 'express';

const router = express.Router();

// Route for the home page
router.get('/',  (req, res, next) => {
    res.render('index', { title: 'Home Page' });
});

module.exports = router;
