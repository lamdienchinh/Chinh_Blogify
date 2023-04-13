const router = require('express').Router();
const middlewareController = require('../controllers/middlewareController');
const postController = require('../controllers/postController');

//CREATE POST
router.get('/', middlewareController.verifyToken, postController.getAllPost)
router.post('/', middlewareController.verifyToken, postController.createPost)
router.get('/:id', middlewareController.verifyToken, postController.getAPost)

module.exports = router