const Router = require('express')
const router = Router();
const commentController = require('../../controller/comment/comment.controller');

router.get('/', commentController.index);
router.put('/setComment/:viewToken', commentController.setComment);




module.exports = router;
