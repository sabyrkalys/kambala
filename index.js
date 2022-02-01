global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const {url} = require('./password');
const multer = require('multer');
const app = express();
const router = require('./routes');
const Handlebars= require("handlebars");

const hbs = handlebars.create({
 defaultLayout: 'main',
 extname: 'hbs',
 helpers: {
		getDate: function() {
			let date = new Date();
			let year  = date.getFullYear();
			let month = date.getMonth() + 1;
			let day   = date.getDate();
   day = (day < 10) ? '0' + day : day;
   month = (month < 10) ? '0' + month : month;
			return day + '.' + month + '.' + year + '.';
		},
  getHours: function() {
			let date = new Date();
			let hours  = date.getHours();
			let minutes = date.getMinutes();
			let seconds   = date.getSeconds();
   minutes = (minutes < 10) ? '0' + minutes : minutes;
   seconds = (seconds < 10) ? '0' + seconds : seconds;
   hours = (hours < 10) ? '0' + hours : hours;
			return hours + ':' + minutes;
		},
  sum: function(num) {
   return +num + 1;
  },
  wordSlice: function(word){
   let words = word.split(" ");
   for(let i = 0; i<words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
   }
   let result = words.join(" ");
   return result.slice(0, 30) + '...'
  }

	}
});

Handlebars.registerHelper("list", function(context, options) {
 var ret;
 for (var i = 0; i < 1; i++) {
   ret = options.fn(context[i]);
 }
 return ret;
});

Handlebars.registerHelper('length', function (context) {
 return Object.keys(context).length;
});


Handlebars.registerHelper('loud', function (aString) {
 return aString.toUpperCase()
})

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, __dirname + "/public/uploads/");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    if(file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"||
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
 }

app.use(multer({storage:storageConfig, fileFilter: fileFilter}).single("avatar"))


app.use(session({
  secret: process.env.APP_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(cookieParser());

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
 extended: true
}));
app.use(express.json());

app.use(router);


const PORT = process.env.PORT || 3000;


async function start() {
 try {
  const password = '';
  //const url = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
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
