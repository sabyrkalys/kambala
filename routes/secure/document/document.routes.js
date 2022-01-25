const Router = require('express')
const router = Router({mergeParams: true});
const {documentController} = require('../../../controller')

router.get('/', documentController.index);
router.get('/createDocument', documentController.createDocument);
router.get('/createDocument/:docId', documentController.createDocument);
router.get('/editDocument/:docId', documentController.editDocument);


router.post('/setDocumentHeader', documentController.setDocumentHeader);
router.put('/updateDocumentHeader/:docId', documentController.updateDocumentHeader);
router.put('/setDocumentBody_1/:docId', documentController.setDocumentBody_1);
router.put('/setDocumentBody_2/:docId', documentController.setDocumentBody_2);
router.put('/setDocumentBody_3/:docId', documentController.setDocumentBody_3);
router.put('/setDocumentBody_4/:docId', documentController.setDocumentBody_4);
router.put('/setDocumentBody_5/:docId', documentController.setDocumentBody_5);
router.put('/saveDocument/:docId', documentController.saveDocument);
router.post('/sendDocument', documentController.sendDocument);

router.put('/confirmDocument/:docId', documentController.confirmDocument);
router.put('/createWord/:docId', documentController.createWord);
router.put('/createPdf/:docId', documentController.createPdf);

module.exports = router;
