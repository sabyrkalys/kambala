const Router = require('express');
const router = Router();
const { commentController } = require('../../../controller');

router.get('/:docId', commentController.index);
router.put('/confirmDocument/:docId', commentController.confirmDocument);
router.put('/createWord/:docId', commentController.createWord);
router.put('/createPdf/:docId', commentController.createPdf);

router.get('/', commentController.index);
router.put('/setComment/:viewToken', commentController.setComment);


module.exports = router;
