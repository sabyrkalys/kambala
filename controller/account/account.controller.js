const {accountModel} = require('../../models');
const User = require('../../schemas/user/user.schema')


exports.index = async (req, res) => {
 const user = await User.findById(req.params.userId).lean();
  res.render('account', {
   title: 'Мой аккаунт',
   id: user._id,
   isAccount: true,
   user
  })

}



exports.saveAccountData = async (req, res) => {
  try {
   const result = await accountModel.saveAccountData(req);
   if (!result) {
     return res.status(404).send();
   }
   else {
     return res.status(200).redirect(`/user/${result._id}/document`);
     }
   } catch (e) {
     console.log(e);
     res.status(500).send();
   }

}

exports.updateAccountData = async (req, res) => {
  try {
   const result = await accountModel.updateAccountData(req);
   if (!result) {
     return res.status(404).send();
   }
   else {
     return res.status(200).redirect(`/user/${result._id}/account`);
     }
   } catch (e) {
     console.log(e);
     res.status(500).send();
   } 
 
}
