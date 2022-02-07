
const mongoose = require('mongoose');
const User = require('../../schemas/user/user.schema.js');


exports.saveAccountData = async (req) => {
 const userId = req.params.userId;
 const filter = {
   _id: userId
 }
 const imageLink = '/uploads/' + req.file.originalname;
 const update = {
  login: req.body.login,
   email: req.body.email,
   profileStatus: req.body.profileStatus,
   profile: {
     name: req.body.name,
     lastName: req.body.lastName,
     patronymic: req.body.patronymic,
     DOB:req.body.dob,
     NameOrganization: req.body.NameOrganization,
     sybDivision:req.body.sybDivision,
     position: req.body.position,
     phone: req.body.phone,
     imageLink: imageLink
   },
 }

 const option = {
   new: true
 }

 return await User.findOneAndUpdate(filter,update, option);

}

exports.updateAccountData = async (req) => {
 const userId = req.params.userId;
 const filter = {
   _id: userId
 }

 const update = {
  $set: {
   login: req.body.login,
   email: req.body.email,
   profileStatus: req.body.profileStatus,
   "profile.name":req.body.name,
   "profile.lastName":req.body.lastName,
   "profile.DOB":req.body.dob,
   "profile.NameOrganization":req.body.NameOrganization,
   "profile.sybDivision":req.body.sybDivision,
   "profile.position":req.body.position,
   "profile.phone":req.body.phone
  }
 }

 const option = {
   new: true
 }

 return await User.findOneAndUpdate(filter,update, option);

}
