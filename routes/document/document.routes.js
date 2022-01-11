const Router = require('express')
const router = Router();
const {documentController} = require('../../controller')

router.get('/', documentController.index);
router.get('/:docId', documentController.index);
router.get('/edit/:docId', documentController.index);
router.post('/setDocumentHeader', documentController.setDocumentHeader);
router.put('/updateDocumentHeader/:docId', documentController.updateDocumentHeader);
router.put('/setDocumentBody_1/:docId', documentController.setDocumentBody_1);
router.put('/setDocumentBody_2/:docId', documentController.setDocumentBody_2);
router.put('/setDocumentBody_3/:docId', documentController.setDocumentBody_3);
router.put('/setDocumentBody_4/:docId', documentController.setDocumentBody_4);
router.put('/setDocumentBody_5/:docId', documentController.setDocumentBody_5);
router.put('/saveDocument/:docId', documentController.saveDocument);
router.post('/sendDocument', documentController.sendDocument);

module.exports = router;
