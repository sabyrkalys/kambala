const mongoose = require('mongoose');
const User = require('../../schemas/user/user.schema.js');
const {AuthService} = require('../../classes');
const auth = new AuthService;


exports.loginUser = async (req) => {
  const user = await User.findOne({
    login:req.body.fieldItemLogin, password: req.body.fieldItemPassword
  });
  if (!user) {
    return false;
  }
  else {
    const {accessToken, refreshToken} = auth.sign(req.session,req.body.fieldItemLogin,req.body.fieldItemPassword);
    const result = await User.findOneAndUpdate(
      {
        _id:user._id
      },
      {
        $set:{
          accessToken: accessToken,
          refreshToken: refreshToken,
        }
      },
      {
        new: true
      }
    )

    return result;
  }
}

exports.registerUser = async (req) => {
  const {accessToken, refreshToken} = auth.sign(req.session, req.body.login,req.body.password);
  const user = new User({
    login: req.body.fieldItemLogin,
    email: req.body.fieldItemEmail,
    password: req.body.fieldItemPassword,
    accessToken: accessToken,
    refreshToken: refreshToken,
  })

  req.session.accessToken = accessToken;
  req.session.refreshToken = refreshToken;

  return await user.save();
}
