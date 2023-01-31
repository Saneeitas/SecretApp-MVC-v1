const router = require('express').Router();

const secretController = require('../controllers/secret');


router.get('/secrets', secretController.secrets)
router.post('/submit', secretController.submit)

module.exports = router;