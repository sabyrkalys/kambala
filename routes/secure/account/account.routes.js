const {Router} = require('express')
const router = Router()
const { accountController } = require('../../../controller');
const upload = require('../../../middlewere/upload');


router.get('/:userId/account', accountController.index);
router.post('/:userId/account/saveAccountData', upload.single('avatar'), accountController.saveAccountData);
router.post('/:userId/account/updateAccountData', upload.single('avatar'), accountController.updateAccountData);


module.exports = router
