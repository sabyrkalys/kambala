const Router = require('express');
const router = Router();
const { commentController } = require('../../../controller');

router.get('/:userId/comments/:docId', commentController.index);
router.put('/:userId/comments/:docId/setComment/:docId', commentController.setComment);


module.exports = router;
