const Document = require('../../schemas/document/document.schema.js');
const {HtmlConvertor,WordConvertor,PdfConvertor} = require('../../classes');

exports.index = async (docId) => {
  return await Document.findOne({_id:docId});
}

exports.setComment = async (req) => {
  const userId = req.params.userId;
  const docId = req.params.docId;

  console.log(userId);

  let checkUser = async () => {
    let res = await Document.findOne({_id: docId},{'commentsUsers': { "$elemMatch": { "userId": userId } }});
    console.log(res);
    if (!res.commentsUsers.length || !res.commentsUsers[0].userId) {
      return false
    }
    else {
      return true;
    }
  }

  let filter = {};

  let update = {};

  const option = {
    new: true
  }

  if (await checkUser()) {
    filter = {
      _id: docId,
      'commentsUsers': { "$elemMatch": { "userId": userId } }
    }
    update = {
      $push:{
        'commentsUsers.$.comments':{
          selectedString: req.body.selectedString,
          comment: req.body.comment,
        }
      }
    };

    return await Document.findOneAndUpdate(filter,update,option);
  }
  else {
    filter = {
      _id: docId,
    }

    update = {
      $push:{
        'commentsUsers':{
          userId: userId,
        },
      },
    }

    const res = await Document.findOneAndUpdate(filter,update,option);
    if (res) {
      filter = {
        _id: docId,
        'commentsUsers': { "$elemMatch": { "userId": userId } }
      }
      update = {
        $push:{
          'commentsUsers.$.comments':{
            selectedString: req.body.selectedString,
            comment: req.body.comment,
          }
        }
      };

      return await Document.findOneAndUpdate(filter,update,option);
    }
  }
}

exports.confirmDocument = async (req) => {
  const docId = req.params.docId;
  const documentData = await Document.findById(docId);
  const htmlConvertor = new HtmlConvertor(docId,documentData.regDocument);
  return await htmlConvertor.createDocument();
}


exports.createWord = async (req) => {
  const docId = req.params.docId;
  const wordConvertor = new WordConvertor(docId);
  return wordConvertor.convert();
}

exports.createPdf = async (req) => {
  const docId = req.params.docId;
  const pdfConvertor = new PdfConvertor(docId);
  return pdfConvertor.convert();
}
