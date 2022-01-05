const Router = require('express')
const router = Router();
const regulatController = require('../controller/regulat.controller')

router.get('/', regulatController.index);
router.get('/:docId', regulatController.index);
router.post('/setDocumentHeader', regulatController.setDocumentHeader);
router.put('/updateDocumentHeader/:docId', regulatController.updateDocumentHeader);
router.put('/setDocumentBody_1/:docId', regulatController.setDocumentBody_1);
router.put('/setDocumentBody_2/:docId', regulatController.setDocumentBody_2);
router.put('/setDocumentBody_3/:docId', regulatController.setDocumentBody_3);
router.put('/setDocumentBody_4/:docId', regulatController.setDocumentBody_4);
router.put('/setDocumentBody_5/:docId', regulatController.setDocumentBody_5);
router.put('/saveDocument/:docId', regulatController.saveDocument);


module.exports = router;
