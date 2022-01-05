const Router = require('express')
const router = Router();

router.get('/', async (req, res) => {
 res.render('commentRegulat', {
  title: 'Режим комментирования',
  isCommentRegulat: true
 })
})

module.exports = router;