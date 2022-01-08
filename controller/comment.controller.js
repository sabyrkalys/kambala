const commentModel = require('../models/comment.model.js');

exports.index = async (req, res) => {
  res.render('commentRegulat', {
   title: 'Режим комментирования',
   isCommentRegulat: true
  })
}

exports.setComment = async (req, res) => {

  return '';
}


exports.saveDocument = async (req,res) => {


}
