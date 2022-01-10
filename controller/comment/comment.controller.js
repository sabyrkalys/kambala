const commentModel = require('../../models/comment/comment.model.js');


exports.index = async (req, res) => {
  if (req.query.viewToken) {
    try {
      const result = await commentModel.index(req.query.viewToken);
      if (!result) {
        return res.status(404).send();
      }
      else {
        res.render('commentRegulat', {
         title: 'Режим комментирования',
         isCommentRegulat: true,
         documentData: result
        })
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send();
    }
  }
  else {
    return res.status(404).send();
  }

}

exports.setComment = async (req, res) => {
  try {
    const result = await commentModel.setComment(req);
    if (!result) {
      return res.status(404).send();
    }
    else {
      return res.status(200).send({result})
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
}


exports.confirmDocument = async (req,res) => {
  try {
    const result = await commentModel.confirmDocument(req);
    if (!result) {
      return res.status(404).send();
    }
    else {
      return res.status(200).send({result})
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
}


exports.createWord = async (req,res) => {
  try {
    const result = await commentModel.createWord(req)
    if (!result) {
      return res.status(404).send();
    }
    else {
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename=document.docx`);
      res.setHeader('Content-Length', result.length);
      return res.status(200).send(result);
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
}


exports.createPdf = async (req,res) => {
  try {
    const result = await commentModel.createPdf(req);

    if (!result) {
      return res.status(404).send();
    }
    else {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=document.pdf')
      result.toBuffer(function(err, buffer){
        if (err) {
          console.log(err);
          return res.status(404).send();
        }
        else {
          return res.status(200).send(buffer)
        }
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
}
