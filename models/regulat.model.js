const Regulat = require('../schemas/regulat.schema.js');

exports.index = async () => {

}


exports.setDocumentHeader = async (req) => {
  const action = req.query.action;
  if(action === 'create'){
    const regulat = new Regulat({
     authorId: req.body.authorId,
     title: req.body.title,
     date: req.body.dateCreation,
     status: req.body.status,
     versions: {
       $push:{} 
     },
     regDocument:{
      headDOC:{
       headerTitle: req.body.headDOC.headerTitle,
       deliveryDoc: req.body.headDOC.deliveryDoc,
       servicy: req.body.headDOC.servicy
      }
     }
    })
    return await regulat.save();
  }
}
