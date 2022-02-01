const {accountModel} = require('../../models');
const {AuthService} = require('../../classes');
const auth = new AuthService;


exports.updateUser = async (req, res) => {
  // accountModel.u
}

exports.uploadPhoto = async (req, res) => {
  let isLogined = await auth.check(req.session);
  if (isLogined) {
    if (req.params.userId) {
      const result = await accountModel.uploadPhoto(req);
      if (!result) {
        return res.status(404).send();
      }
      else {
        console.log(result);
        return res.status(200).send({result})
      }
    }
    else {
      return res.status(400).send();
    }
  }
  else {
    res.status(401).send(isLogined);
  }
}
