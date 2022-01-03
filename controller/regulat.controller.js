const regulatModel = require('../models/regulat.model.js');


exports.index = (request, response) => {
  const action = 'create';
  response.render('addRegulat', {
   title: 'Создать регламент',
   isAddRegulat: true
  })
};


exports.setDocumentHeader = async function (req, res) {
  if (req.query.action !== 'create' || req.query.action !== 'edit') {
    res.status(400);
  }

  try {
    const result = await regulatModel.setDocumentHeader(req);

    if (!result) {
      res.status(404);
    }
    else {
      res.status(200).send({result})
    }

  } catch (e) {
    console.log(e);
    res.status(500).send()
  }

}

// exports.setDocumentBody_1 = function (request, response) {
  // try{
  //  const regulatBase = await Regulat.findById(req.body.subRegulat.id)
  //  const regHeadDOC = regulatBase.regDocument.headDOC
  //  console.log('regHeadDOC: ', regHeadDOC);
  //  const regulat = {
  //   regDocument:{
  //    headDOC:regHeadDOC,
  //    subRegulat: {
  //     items:[{
  //      nameOrgan1:req.body.subRegulat.nameOrgan1,
  //      nameService1:req.body.subRegulat.nameService1,
  //      nameOrgan2:req.body.subRegulat.nameOrgan2,
  //      nameService2:req.body.subRegulat.nameService2,
  //     }]
  //    }
  //   }
  //  }
  //
  //  res.status(200).json(regulat)
  //  //await regulat.save();
  // } catch(e){
  //  console.log(e);
  // }
// }
