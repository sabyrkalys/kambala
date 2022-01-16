const Document = require('../../schemas/document/document.schema.js');
const {HtmlConvertor,WordConvertor,PdfConvertor} = require('../../classes');

exports.index = async (viewToken) => {
  return await Document.findOne({viewToken:viewToken});
}

exports.setComment = async (req) => {
  const viewToken = req.params.viewToken;
  const ipAdress = req.ip;

  let checkIp = async () => {
    let res = await Document.findOne({viewToken: viewToken},{'commentsUsers': { "$elemMatch": { "ip": ipAdress } }});
    if (!res.commentsUsers.length || !res.commentsUsers[0].ip) {
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

  if (await checkIp()) {
    filter = {
      viewToken: viewToken,
      'commentsUsers': { "$elemMatch": { "ip": ipAdress } }
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
      viewToken: viewToken,
    }

    update = {
      $push:{
        'commentsUsers':{
          ip: ipAdress,
        },
      },
    }

    const res = await Document.findOneAndUpdate(filter,update,option);
    if (res) {
      filter = {
        viewToken: viewToken,
        'commentsUsers': { "$elemMatch": { "ip": ipAdress } }
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
