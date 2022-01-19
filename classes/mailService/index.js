var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

class MailService {
  user = {
    user: '',
    pass: '',
  }

  option = {
    from: process.env.GMAIL_USER,
    to: [],
    subject: 'Доступ к документу',
    text: 'Ссылка для общего доступа'
  }

  trasporter;
  response;

  constructor(user,pass) {
    this.user = user;
    this.pass = pass;
  }

  async init(){
    this.transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: this.user,
        pass: this.pass
      }
    }));
  }

  async sendDocument(emailArray, documentLink){
    await this.init();
    var response = '';
    this.option.text = 'Ссылка на общий доступ к документу: ' + `<a href="${documentLink}">${documentLink}</a>`
    for (let i = 0; i < emailArray.length; i++) {
      this.option.to[i] = emailArray[i].email;
    }

    try {
      await this.transporter.sendMail(this.option, function(error, info){
        if (error) {
          console.log(error);
        } else {
          response = info.response;
          console.log('Email sent: ' + info.response);
        }
      })
    } catch (e) {
      console.log(e);
      return false;
    } finally {
      return true;
    }
  }
}

module.exports = MailService
