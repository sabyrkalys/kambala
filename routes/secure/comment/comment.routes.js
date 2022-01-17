const Router = require('express');
const router = Router();
const { commentController } = require('../../../controller');

router.get('/:docId', commentController.index);

router.get('/', commentController.index);
router.put('/setComment/:viewToken', commentController.setComment);


module.exports = router;
