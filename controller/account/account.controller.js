const {accountModel} = require('../../models');
const User = require('../../schemas/user/user.schema')


exports.index = async (req, res) => {
 const user = await User.findById(req.params.userId)
 res.render('account', {
  title: 'Мой аккаунт',
  isAccount: true,
  userAccount: user
 })
}