const commentModel = require('../models/comment.model.js');


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

  await commentModel.confirmDocument(req);
}
