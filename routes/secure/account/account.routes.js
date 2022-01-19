const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
 res.render('account', {
  title: 'Мой аккаунт',
  isAccount: true
 })
})

module.exports = router