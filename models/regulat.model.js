const Regulat = require('../schemas/regulat.schema.js');

exports.index = async () => {

}


exports.setDocumentHeader = async (req) => {
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

exports.updateDocumentHeader = async (req) => {
  const docId = req.params.docId;

  const filter = {
    _id: docId
  }

  const update = {
    title: req.body.title,
    regDocument:{
     headDOC:{
       headerTitle: req.body.headDOC.headerTitle,
       deliveryDoc: req.body.headDOC.deliveryDoc,
       servicy: req.body.headDOC.servicy
     }
   }
  }

  const option = {
    new: true
  }

  return await Regulat.findOneAndUpdate(filter,update, option);

}

exports.setDocumentBody_1 = async (req) => {
  const action = req.query.action;
  const docId = req.params.docId;

  const filter = {
    _id: docId
  }

  let update = {};

  if (action === 'create') {
    update = {
      $set:{
        step: 1,
        "regDocument.regulat_1.subRegulat_1_1.items": req.body.row_1_1,
        "regDocument.regulat_1.subRegulat_1_2.items": req.body.row_1_2,
        "regDocument.regulat_1.subRegulat_1_3.items": req.body.row_1_3
      }
    }
  }
  else if (action === 'edit') {
    update = {
      $set:{
        "regDocument.regulat_1.subRegulat_1_1.items": req.body.row_1_1,
        "regDocument.regulat_1.subRegulat_1_2.items": req.body.row_1_2,
        "regDocument.regulat_1.subRegulat_1_3.items": req.body.row_1_3
      }
    }
  }

  const option = {
    new: true
  }

  return await Regulat.findOneAndUpdate(filter,update, option);
}

exports.setDocumentBody_2 = async (req) => {
  const action = req.query.action;
  const docId = req.params.docId;

  const filter = {
    _id: docId
  }

  let update = {};

  if (action === 'create') {

    update = {
      $set:{
        step: 2,
        "regDocument.regulat_2.subRegulat_2_1.items": req.body.row_2_1,
        "regDocument.regulat_2.subRegulat_2_2.items": req.body.row_2_2,
        "regDocument.regulat_2.subRegulat_2_3.items": req.body.row_2_3,
        "regDocument.regulat_2.subRegulat_2_4.items": req.body.row_2_4,
        "regDocument.regulat_2.subRegulat_2_5.items": req.body.row_2_5,
        "regDocument.regulat_2.subRegulat_2_6.items": req.body.row_2_6,
        "regDocument.regulat_2.subRegulat_2_7.items": req.body.row_2_7,
        "regDocument.regulat_2.subRegulat_2_8.items": req.body.row_2_8,
        "regDocument.regulat_2.subRegulat_2_9.items": req.body.row_2_9,
        "regDocument.regulat_2.subRegulat_2_10.items": req.body.row_2_10,
        "regDocument.regulat_2.subRegulat_2_11.items": req.body.row_2_11,
        "regDocument.regulat_2.subRegulat_2_12.items": req.body.row_2_12,
        "regDocument.regulat_2.subRegulat_2_13.items": req.body.row_2_13,
        "regDocument.regulat_2.subRegulat_2_14.items": req.body.row_2_14,
        "regDocument.regulat_2.subRegulat_2_15.items": req.body.row_2_15,
        "regDocument.regulat_2.subRegulat_2_16.items": req.body.row_2_16,
        "regDocument.regulat_2.subRegulat_2_17.items": req.body.row_2_17,
        "regDocument.regulat_2.subRegulat_2_18.items": req.body.row_2_18,
        "regDocument.regulat_2.subRegulat_2_19.items": req.body.row_2_19,
      }
    }
  }
  else if (action === 'edit') {
    update = {
      $set:{
        "regDocument.regulat_2.subRegulat_2_1.items": req.body.row_2_1,
        "regDocument.regulat_2.subRegulat_2_2.items": req.body.row_2_2,
        "regDocument.regulat_2.subRegulat_2_3.items": req.body.row_2_3,
        "regDocument.regulat_2.subRegulat_2_4.items": req.body.row_2_4,
        "regDocument.regulat_2.subRegulat_2_5.items": req.body.row_2_5,
        "regDocument.regulat_2.subRegulat_2_6.items": req.body.row_2_6,
        "regDocument.regulat_2.subRegulat_2_7.items": req.body.row_2_7,
        "regDocument.regulat_2.subRegulat_2_8.items": req.body.row_2_8,
        "regDocument.regulat_2.subRegulat_2_9.items": req.body.row_2_9,
        "regDocument.regulat_2.subRegulat_2_10.items": req.body.row_2_10,
        "regDocument.regulat_2.subRegulat_2_11.items": req.body.row_2_11,
        "regDocument.regulat_2.subRegulat_2_12.items": req.body.row_2_12,
        "regDocument.regulat_2.subRegulat_2_13.items": req.body.row_2_13,
        "regDocument.regulat_2.subRegulat_2_14.items": req.body.row_2_14,
        "regDocument.regulat_2.subRegulat_2_15.items": req.body.row_2_15,
        "regDocument.regulat_2.subRegulat_2_16.items": req.body.row_2_16,
        "regDocument.regulat_2.subRegulat_2_17.items": req.body.row_2_17,
        "regDocument.regulat_2.subRegulat_2_18.items": req.body.row_2_18,
        "regDocument.regulat_2.subRegulat_2_19.items": req.body.row_2_19,
      }
    }
  }

  const option = {
    new: true
  }

  return await Regulat.findOneAndUpdate(filter,update, option);
},

exports.setDocumentBody_3 = async (req) => {
  const action = req.query.action;
  const docId = req.params.docId;

  const filter = {
    _id: docId
  }

  let update = {};

  if (action === 'create') {

    update = {
      $set:{
        step: 3,
        "regDocument.regulat_3.subRegulat_3_1.items": req.body.row_3_1,
      }
    }

  }
  else if (action === 'edit') {

    update = {
      $set:{
        "regDocument.regulat_3.subRegulat_3_1.items": req.body.row_3_1,
      }
    }

  }

  const option = {
    new: true
  }

  return await Regulat.findOneAndUpdate(filter,update, option);
}

exports.setDocumentBody_4 = async (req) => {
  const action = req.query.action;
  const docId = req.params.docId;

  const filter = {
    _id: docId
  }

  let update = {}

  if (action === 'create') {
    update = {
      $set:{
        step: 4,
        "regDocument.regulat_4.subRegulat_4_1.items": req.body.row_4_1,
      }
    }
  }
  else if (action === 'edit') {
    update = {
      $set:{
        "regDocument.regulat_4.subRegulat_4_1.items": req.body.row_4_1,
      }
    }
  }

  const option = {
    new: true
  }

  return await Regulat.findOneAndUpdate(filter,update, option);

}

exports.setDocumentBody_5 = async (req) => {
  const action = req.query.action;
  const docId = req.params.docId;

  const filter = {
    _id: docId
  }

  let update = {}

  if (action === 'create') {

    update = {
      $set:{
        step: 5,
        "regDocument.regulat_5.subRegulat_5_1.items": req.body.row_5_1,
      }
    }

  }
  else if (action === 'edit') {

    update = {
      $set:{
        "regDocument.regulat_5.subRegulat_5_1.items": req.body.row_5_1,
      }
    }

  }

  const option = {
    new: true
  }

  return await Regulat.findOneAndUpdate(filter,update, option);
}
