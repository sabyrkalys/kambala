const {Router} = require('express')
const router = Router()
const {accountController} = require('../../../controller')

router.get('/:userId/account', accountController.index);
router.post('/:userId/account/saveAccountData', accountController.saveAccountData);
router.put('/:userId/account/updateAccountData', accountController.updateAccountData);



module.exports = router