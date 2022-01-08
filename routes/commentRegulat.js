const Router = require('express');
const router = Router();
const commentController = require('../controller/comment.controller');

router.get('/:docId', commentController.index);
router.put('saveDocumnet', commentController.saveDocument);




module.exports = router;
