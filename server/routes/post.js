const router = require('express').Router();
const middlewareController = require('../controllers/middlewareController');
const postController = require('../controllers/postController');

//CREATE POST
router.post('/', middlewareController.verifyToken, postController.createPost)
router.get('/:id', postController.getAPost)
module.exports = router