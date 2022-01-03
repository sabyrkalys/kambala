global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const express = require('express')
const path = require('path');
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()
const MyRegulatRoutes = require('./routes/scriptMyRegulat')
const accountRoutes = require('./routes/account')
const addRegulatRoutes = require('./routes/addRegulat')


const hbs = handlebars.create({
 defaultLayout: 'main',
 extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
 extended: true
}))
app.use(express.json())

app.use('/', MyRegulatRoutes)
app.use('/addRegulat', addRegulatRoutes)
app.use('/account', accountRoutes)


const PORT = process.env.PORT || 3000;


async function start() {
 try {
  const password = '';
  const url = `mongodb+srv://kalys78:${password}@cluster0.gwcvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
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