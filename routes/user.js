const router = require('express').Router();

const userController = require('../controllers/user');

router.get('/', userController.homePage)
router.get('/login', userController.loginPage)
router.get('/register', userController.registerPage)
router.get('/submit', userController.submitPage)
router.get('/logout', userController.logout)
router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router;