const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
  {
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
})
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
  transporter.sendMail(getMailInfo(req), (err, info) => {
    if(err) {
      next(err)
    } else {
      res.contactSender = req.body.email
      res.contactName = req.body.name

      console.log(`Mail Sent to ${process.env.MY_EMAIL} from: ${res.contactName} - ${res.contactSender}`)
      res.status(204).end()
    }
  })
}
module.exports = {
  sendMail
}
