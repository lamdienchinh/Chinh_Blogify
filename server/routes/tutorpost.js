const router = require('express').Router();
const middlewareController = require('../controllers/middlewareController');
const tutorController = require('../controllers/tutorController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
//CREATE POST
router.get('/', middlewareController.verifyToken, tutorController.getAllPost)
router.post('/', middlewareController.verifyToken, upload.single('img'), tutorController.createPost)
router.get('/:id', middlewareController.verifyToken, tutorController.getAPost)

module.exports = router