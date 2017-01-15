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
  function sendMail(req, res, next) {

  }
  return {
    sendMail
  }
}
module.exports = mailSender()
