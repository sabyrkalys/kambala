const {Router} = require('express')
const router = Router()
const {accountController} = require('../../../controller')

router.get('/:userId/account', accountController.index);
router.post('/:userId/account/saveAccountData', accountController.saveAccountData);
router.put('/:userId/account/updateAccountData', accountController.updateAccountData);
const { accountController } = require('../../../controller');
const multer = require('multer');
const upload  = multer({dest: + '/public/uploads/'});


router.put('/uploadPhoto/:userId',upload.single('avatar'), accountController.uploadPhoto);
module.exports = router
