const Router = require('express')
const router = Router();

router.get('/', async (req, res) => {
 res.render('addRegulat', {
  title: 'Создать регламент',
  isAddRegulat: true
 })
 
})

module.exports = router