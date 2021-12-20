const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
 res.render('myRegulat', {
 title: 'Мои регламенты',
 isHome: true
})
})

//router.get('/addRegulat', async (req, res) => {
// res.render('addRegulat', {
//  title: 'Создать регламент',
//  isAddRegulat: true
// })
 
//})
module.exports = router