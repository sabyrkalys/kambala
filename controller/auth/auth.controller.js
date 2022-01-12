exports.index = async (req, res) => {
  res.render('login', {
   title: 'Вход в систему',
   isAddRegulat: true,
  })
}

exports.login = async (req, res) => {

}

exports.register = async (req, res) => {
  res.render('register', {
   title: 'Регестрация',
   isAddRegulat: true,
  })
}
