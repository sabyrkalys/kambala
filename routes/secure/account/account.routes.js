const {Router} = require('express')
const router = Router()
const {accountController} = require('../../../controller')

router.get('/:userId/account', accountController.index);


module.exports = router