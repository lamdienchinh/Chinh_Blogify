const router = require("express").Router();
const authController = require('../controllers/authController')
const middlewareController = require('../controllers/middlewareController')

router.post("/register", authController.register)
router.post("/login", authController.login)
router.post("/refresh",authController.requestRefreshToken)
router.post("/logout", authController.logout)
module.exports = router