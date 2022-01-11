global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
require('dotenv').config()

const express = require('express')
const path = require('path');
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()
const MyRegulatRoutes = require('./routes/document/scriptMyRegulat')
const accountRoutes = require('./routes/account/account.routes')
const addRegulatRoutes = require('./routes/document/addRegulat')
const editRegulatRoutes = require('./routes/document/editRegulat')
// const commentRegulates = require('./routes/comment/commentRegulat')
// const commentRegulatesView = require('./routes/comment/commentRegulatView')
const commentRegulatesView = require('./routes/comment/comment.routes')
const viewRegulates = require('./routes/document/viewRegulat')
const authRoutes = require('./routes/auth/auth.routes')

const hbs = handlebars.create({
 defaultLayout: 'main',
 extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
// app.set('trust proxy',true);

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
 extended: true
}))
app.use(express.json())

app.use('/', MyRegulatRoutes)
app.use('/auth', authRoutes)
app.use('/addRegulat', addRegulatRoutes)
app.use('/editRegulat', editRegulatRoutes)
app.use('/account', accountRoutes)
app.use('/commentRegulat', commentRegulates)
app.use('/commentRegulatesView', commentRegulatesView)
app.use('/viewRegulat', viewRegulates)


const PORT = process.env.PORT || 3000;


async function start() {
 try {
  const password = '';
  const url = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
  await mongoose.connect(url, {
   useNewUrlParser: true,
  });
  app.listen(PORT, () => {
   console.log(`Запущен сервер на ${PORT}`);
  })
 } catch (e) {
  console.log(e);
 }
}
start();
