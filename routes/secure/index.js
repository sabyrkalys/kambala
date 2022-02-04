const Router = require('express')
const router = Router({mergeParams: true});

const documentRoutes = require('./document/document.routes')
const accountRoutes = require('./account/account.routes')
const commentRoutes = require('./comment/comment.routes')

router.use('/user', documentRoutes)
router.use('/user', accountRoutes)
router.use('/user', commentRoutes)

module.exports = router;
