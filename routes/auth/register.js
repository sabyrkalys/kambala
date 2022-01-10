const Router = require('express')
const router = Router();
const registerController = require('../../controller/auth/register.controller')

router.post('/', registerController.register);


module.exports = router;
