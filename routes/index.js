const Router = require('express')
const router = Router();

const authRoutes = require('./auth/auth.routes')
const documentRoutes = require('./document/document.routes')
const accountRoutes = require('./account/account.routes')
const commentRoutes = require('./comment/comment.routes')


router.use('/', authRoutes)
router.use('/document', documentRoutes)
router.use('/account', accountRoutes)
router.use('/comment', commentRoutes)


module.exports = router;
