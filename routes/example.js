// This is just an example
// Replace here with your own routes
import express from 'express';

const router = express.Router();

// Route for example page
router.get('/example',  (req, res, next) => {
    res.render('example', { title: 'Example Page' });
});

module.exports = router;
