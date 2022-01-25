const {authModel} = require('../../models');



exports.index = async (req, res) => {
  res.render('login', {
   title: 'Вход в систему',
   isLogin: true,
  })
}

//exports.registerPage = async (req, res) => {
//  res.render('register', {
//   title: 'Регестрация'
//  })
//}

exports.loginUser = async (req, res) => {
  try {
    const result = await authModel.loginUser(req);
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

exports.registerUser = async (req, res) => {
  try {
    const result = await authModel.registerUser(req);
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

exports.logoutUser = async (req, res) => {
  req.session.destroy();

}
