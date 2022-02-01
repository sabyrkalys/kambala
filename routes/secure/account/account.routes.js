const {Router} = require('express')
const router = Router()
const { accountController } = require('../../../controller');
const multer = require('multer');
const upload  = multer({dest: + '/public/uploads/'});

router.get('/', async (req, res) => {
 res.render('account', {
  title: 'Мой аккаунт',
  isAccount: true
 })
})

router.put('/uploadPhoto/:userId',upload.single('avatar'), accountController.uploadPhoto);
module.exports = router
