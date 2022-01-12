const Router = require('express')
const router = Router();
const authController = require('../../controller/auth/auth.controller')

router.get('/', authController.index);
router.get('/register', authController.register);

module.exports = router;
