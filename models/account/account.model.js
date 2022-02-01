const mongoose = require('mongoose');
const multer  = require('multer');
const User = require('../../schemas/user/user.schema.js');

exports.updateUser = async (req) => {

}

exports.uploadPhoto = async (req) => {
  const imageLink = req.headers.host + '/uploads/' + req.file.originalname;
  return await User.findOneAndUpdate({_id:req.params.userId},{profile:{imageLink: imageLink}},{ new:true });
}
