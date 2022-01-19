const jwt = require('jsonwebtoken');
const User = require('../../schemas/user/user.schema.js');

class AuthService {

  sign(session,login,password){
    const accessToken = jwt.sign({ login: login, password: password}, process.env.APP_SECRET);
    const refreshToken = jwt.sign({ accessToken: accessToken, iat: Date.now() }, process.env.APP_SECRET);
    session.accessToken = accessToken;
    session.refreshToken = refreshToken;
    return {accessToken, refreshToken};
  }

  async check(session){
    if (!session.accessToken && !session.refreshToken) {
      return false;
    }
    else {
      const user = await User.findOne({accessToken: session.accessToken,refreshToken: session.refreshToken});
      if (!user) {
        return false;
      }
      else {
        return true;
      }
    }
  }

  destroy (session) {
    session.destroy();
  }
}


module.exports = AuthService;
