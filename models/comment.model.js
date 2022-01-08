const Regulat = require('../schemas/regulat.schema.js');

exports.index = async (viewToken) => {
  return await Regulat.findOne({viewToken:viewToken});
}

exports.setComment = async (req) => {


}

exports.saveDocumnet = async (req) => {


}
