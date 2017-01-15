const router = require('express').Router()
const { sendMail } = require('./../services/sendMail')
const bodyParser = require('body-parser')

const parseJson = bodyParser.json({strict: true})

const sendErrorResponse = (err, req, res, next) => {
  console.log(`Send Mail Error: ${err}`);
  res.status(503).end()
}

router.route('')
  .post(parseJson, sendMail, sendErrorResponse)

module.exports = router
