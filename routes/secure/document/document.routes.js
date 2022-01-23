const Router = require('express')
const router = Router();
const {documentController} = require('../../../controller')

router.get('/:userId/document', documentController.index);
router.get('/:userId/document/createDocument', documentController.createDocument);
router.get('/:userId/document/createDocument/:docId', documentController.createDocument);
router.get('/:userId/document/editDocument/:docId', documentController.editDocument);


router.post('/setDocumentHeader', documentController.setDocumentHeader);
router.put('/updateDocumentHeader/:docId', documentController.updateDocumentHeader);
router.put('/setDocumentBody_1', documentController.setDocumentBody_1);
router.put('/setDocumentBody_2', documentController.setDocumentBody_2);
router.put('/setDocumentBody_3', documentController.setDocumentBody_3);
router.put('/setDocumentBody_4', documentController.setDocumentBody_4);
router.put('/setDocumentBody_5', documentController.setDocumentBody_5);
router.put('/saveDocument', documentController.saveDocument);
router.post('/sendDocument', documentController.sendDocument);

router.put('/confirmDocument/:docId', documentController.confirmDocument);
router.put('/createWord/:docId', documentController.createWord);
router.put('/createPdf/:docId', documentController.createPdf);

module.exports = router;
