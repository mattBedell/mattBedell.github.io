const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001
const isDev = process.env.NODE_ENV || process.argv[2] || 'dev'

switch(isDev) {
  case 'dev':
  const logger = require('morgan')
  app.use(logger('dev'))
  require('dotenv').config()
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log(`REQUEST FROM: ${req.headers.origin} METHOD: ${req.method}`);
  return next()
})
app.use('/sendOut', require('./routes/sendOut'))

app.listen(PORT, console.log(`Mail Server is listening on port: ${PORT}`))
