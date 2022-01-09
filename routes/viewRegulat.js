const Router = require('express')
const router = Router();
const regulatController = require('../controller/regulat.controller')

router.get('/', async (req, res) => {
 res.render('viewRegulat', {
  title: 'Режим просмотра',
  isViewRegulat: true
 })
})

module.exports = router;
