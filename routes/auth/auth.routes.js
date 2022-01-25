const Router = require('express')
const router = Router();
const {authController} = require('../../controller')

router.get('/', authController.index);
//router.get('/register', authController.registerPage);
router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);
router.post('/logout', authController.logoutUser);

module.exports = router;
