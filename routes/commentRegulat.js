const Router = require('express');
const router = Router();
const commentController = require('../controller/comment.controller');

router.get('/:docId', commentController.index);
router.put('/confirmDocument/:docId', commentController.confirmDocument);
// router.put('/createWord/:docId', commentController.createWorld);




module.exports = router;
