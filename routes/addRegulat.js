const Router = require('express')
const router = Router();
const Regulat = require('../models/regulat');

router.get('/', async (req, res) => {
 res.render('addRegulat', {
  title: 'Создать регламент',
  isAddRegulat: true
 })
})

router.put('/headerContent', async (req, res) => {
 const regulat = new Regulat({
  regDocument:{
   headDOC:{
    headerTitle: req.body.headDOC.headerTitle,
    deliveryDoc: req.body.headDOC.deliveryDoc,
    servicy: req.body.headDOC.servicy
   }
  }
 })
 try{
  res.status(200).json(regulat)
  await regulat.save();
 } catch(e){
  console.log(e);
 }

})
router.put('/textBody_1', async (req, res) => {
 
 try{
  const regulatBase = await Regulat.findById(req.body.subRegulat.id)
  const regHeadDOC = regulatBase.regDocument.headDOC
  console.log('regHeadDOC: ', regHeadDOC);
  const regulat = {
   regDocument:{
    headDOC:regHeadDOC,
    subRegulat: {
     items:[{
      nameOrgan1:req.body.subRegulat.nameOrgan1,
      nameService1:req.body.subRegulat.nameService1,
      nameOrgan2:req.body.subRegulat.nameOrgan2,
      nameService2:req.body.subRegulat.nameService2,
     }]
    }
   }
  }
   
  res.status(200).json(regulat)
  //await regulat.save();
 } catch(e){
  console.log(e);
 }

})

module.exports = router