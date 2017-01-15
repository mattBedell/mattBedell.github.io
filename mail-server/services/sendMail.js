const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
  {
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
})
function mailSender() {
  function getMailInfo(req) {
    const mailOptions = {
      from: `${req.body.name} <CannotAlterSenderOnGmailServers@gmail.com>`,
      to: process.env.MY_EMAIL,
      subject: `PORTFOLIO CONTACT: ${req.body.email}`,
      text: req.body.text
    }
    return mailOptions
  }
  function sendMail(req, res, next) {
    console.log(req.body.email);
    //console.log(req.body);
    transporter.sendMail(getMailInfo(req), (err, info) => {
      if(err) {
        console.log(`Send Mail error: ${err}`);
      } else {
        console.log(`Sent Mail : ${info.response}`);
      }
    })
  }

  return {
    sendMail
  }
}
module.exports = mailSender()
