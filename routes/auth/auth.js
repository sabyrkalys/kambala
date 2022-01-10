const Router = require('express')
const router = Router();
const authController = require('../../controller/auth/auth.controller')

router.post('/', authController.login);
router.post('/register', authController.register);

module.exports = router;
