const User = require('../../schemas/user/user.schema.js');


exports.saveAccountData = async (req) => {
 const userId = req.params.userId;
 const filter = {
   _id: userId
 }

 const update = {
  login: req.body.login,
   email: req.body.email,
   profileStatus: req.body.profileStatus,
   profile: {
     name: req.body.profile.name,
     lastName: req.body.profile.lastName,
     patronymic: req.body.profile.patronymic,
     DOB:req.body.profile.DOB,
     NameOrganization: req.body.profile.NameOrganization,
     sybDivision:req.body.profile.sybDivision,
     position: req.body.profile.position,
     phone: req.body.profile.phone
   },
 }

 const option = {
   new: true
 }

 return await User.findOneAndUpdate(filter,update, option);

}