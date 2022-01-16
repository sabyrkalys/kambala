const jwt = require('jsonwebtoken');
const User = require('../../schemas/user/user.schema.js');

class AuthService {

  sign(login,password){
    const accessToken = jwt.sign({ login: login, password: password}, process.env.APP_SECRET);
    const refreshToken = jwt.sign({ accessToken: accessToken, iat: Date.now() }, process.env.APP_SECRET);
    return {accessToken, refreshToken};
  }

  async check(accessToken, refreshToken){
    const user = await User.findOne({accessToken: accessToken});
    if (!user) {
      return false;
    }
    else {
      if (user.refreshToken === refreshToken) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}


module.exports = AuthService;
