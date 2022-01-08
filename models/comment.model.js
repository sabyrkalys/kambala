const Regulat = require('../schemas/regulat.schema.js');

exports.index = async (req) => {
  res.render('commentRegulat', {
   title: 'Режим комментирования',
   isCommentRegulat: true
  })
}

exports.setComment = async (req) => {


}

exports.saveDocumnet = async (req) => {


}
