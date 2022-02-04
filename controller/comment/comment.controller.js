const commentModel = require('../../models/comment/comment.model.js');
const User = require('../../schemas/user/user.schema')
const Document = require('../../schemas/document/document.schema')


function mapCommentsItems(doc) {
 return doc.map(c => ({
  ...c.userId.profile, comments: c.comments
 }))
}
exports.index = async (req, res) => {
  if (req.params.docId) {
    try {
     const cmu = await Document.findById(req.params.docId).populate('commentsUsers.userId').lean();
     let commentsUser = mapCommentsItems(cmu.commentsUsers);

      const result = await commentModel.index(req.params.docId);
      const author = await User.findById(result.authorId).lean();
      if (!result) {
        return res.status(404).send();
      }
      else {
        res.render('commentDocument', {
         title: 'Режим комментирования',
         isCommentRegulat: true,
         documentData: result,
         documentAuthor: author,
         commentsUser: commentsUser
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