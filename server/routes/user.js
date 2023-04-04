const router = require('express').Router();
const userController = require('../controllers/userController');
const middlewareController = require('../controllers/middlewareController');

router.get('/', middlewareController.verifyToken, userController.getAll)
router.delete('/:id', middlewareController.verifyToken, userController.delete)


module.exports = router