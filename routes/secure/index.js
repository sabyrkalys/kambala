const Router = require('express')
const router = Router();

const documentRoutes = require('./document/document.routes')
const accountRoutes = require('./account/account.routes')
const commentRoutes = require('./comment/comment.routes')

router.use('/document', documentRoutes)
router.use('/account', accountRoutes)
router.use('/comment', commentRoutes)

module.exports = router;
