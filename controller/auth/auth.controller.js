const {authModel} = require('../../models');



exports.index = async (req, res) => {
  res.render('login', {
   title: 'Вход в систему'
  })
}

exports.registerPage = async (req, res) => {
  res.render('register', {
   title: 'Регестрация'
  })
}

exports.loginUser = async (req, res) => {

}

exports.registerUser = async (req, res) => {
  try {
    const result = await authModel.registerUser(req);
    if (!result) {
      return res.status(404).send();
    }
    else {
      return res.status(200).send();
      }
    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
}
