const Router = require('express')
const router = Router();
const loginController = require('../../controller/auth/login.controller')

router.post('/', loginController.login);


module.exports = router;
