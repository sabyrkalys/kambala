const Router = require('express')
const router = Router({mergeParams: true});
const {documentController} = require('../../../controller')

router.get('/:userId/document', documentController.index);
router.get('/:userId/document/createDocument', documentController.createDocument);
//router.get('/:userId/document/createDocument/:docId', documentController.createDocument);
router.get('/:userId/document/editDocument/:docId', documentController.editDocument);

// document create
router.post('/:userId/document/createDocument/setDocumentHeader', documentController.setDocumentHeader);
router.put('/updateDocumentHeader/:docId', documentController.updateDocumentHeader);
router.put('/:userId/document/createDocument/setDocumentBody_1', documentController.setDocumentBody_1);
router.put('/:userId/document/createDocument/setDocumentBody_2', documentController.setDocumentBody_2);
router.put('/:userId/document/createDocument/setDocumentBody_3', documentController.setDocumentBody_3);
router.put('/:userId/document/createDocument/setDocumentBody_4', documentController.setDocumentBody_4);
router.put('/:userId/document/createDocument/setDocumentBody_5', documentController.setDocumentBody_5);
router.put('/:userId/document/createDocument/saveDocument', documentController.saveDocument);
router.post('/:userId/document/createDocument/sendDocument', documentController.sendDocument);

//document edit
router.put('/:userId/document/editDocument/:docId/setDocumentHeader', documentController.updateDocumentHeader);
router.put('/:userId/document/editDocument/:docId/setDocumentBody_1', documentController.setDocumentBody_1);
router.put('/:userId/document/editDocument/:docId/setDocumentBody_2', documentController.setDocumentBody_2);
router.put('/:userId/document/editDocument/:docId/setDocumentBody_3', documentController.setDocumentBody_3);
router.put('/:userId/document/editDocument/:docId/setDocumentBody_4', documentController.setDocumentBody_4);
router.put('/:userId/document/editDocument/:docId/setDocumentBody_5', documentController.setDocumentBody_5);

router.get('/:userId/document/editDocument/:docId/confirmDocument', documentController.confirmDocument);
router.put('/createWord/:docId', documentController.createWord);
router.put('/createPdf/:docId', documentController.createPdf);



module.exports = router;
