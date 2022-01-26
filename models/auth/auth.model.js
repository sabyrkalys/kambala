const mongoose = require('mongoose');
const User = require('../../schemas/user/user.schema.js');
const {AuthService} = require('../../classes');
const auth = new AuthService;


exports.loginUser = async (req) => {
  const user = await User.findOne({
    login:req.body.login, password: req.body.password
  });
  if (!user) {
    return false
  }
  else {
    const {accessToken, refreshToken} = auth.sign(req.session,req.body.login,req.body.password);
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
  const {accessToken, refreshToken} = auth.sign(req.body.login,req.body.password);
  const user = new User({
    login: req.body.login,
    email: req.body.email,
    password: req.body.password,
    accessToken: accessToken,
    refreshToken: refreshToken,
  })

  req.session.accessToken = accessToken;
  req.session.refreshToken = refreshToken;

  return await user.save();
}
