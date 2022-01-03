const Router = require('express')
const router = Router();
const Regulat = require('../models/regulat.model');
const regulatController = require('../controller/regulat.controller')

router.get('/', regulatController.index);
router.post('/setDocumentHeader', regulatController.setDocumentHeader);
// router.put('/setDocumentBody_1', regulatController.setDocumentBody_1);
// router.put('/setDocumentBody_2', regulatController.setDocumentBody_2);
// router.put('/setDocumentBody_3', regulatController.setDocumentBody_3);
// router.put('/setDocumentBody_4', regulatController.setDocumentBody_4);
// router.put('/setDocumentBody_5', regulatController.setDocumentBody_5);

module.exports = router;
