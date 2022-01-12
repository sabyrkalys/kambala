const Router = require('express')
const router = Router();

const authRoutes = require('./auth/auth.routes')
const secureRoutes = require('./secure')

router.use('/', authRoutes)
router.use('/user/:id', secureRoutes)

module.exports = router;
