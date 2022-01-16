const mongoose = require('mongoose');
const User = require('../../schemas/user/user.schema.js');
const {AuthService} = require('../../classes');
const auth = new AuthService;


exports.registerUser = async (req) => {
  const {accessToken, refreshToken} = auth.sign(req.body.login,req.body.password);
  const user = new User({
    login: req.body.login,
    email: req.body.email,
    password: req.body.password,
    accessToken: accessToken,
    refreshToken: refreshToken,
  })

  return await user.save();
}
