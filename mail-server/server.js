const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001
const isDev = process.argv[2] || 'dev'

switch(isDev) {
  case 'dev':
  const logger = require('morgan')
  app.use(logger('dev'))
  require('dotenv').config()
}
app.use('/sendOut', require('./routes/sendOut'))

app.listen(PORT, console.log(`Mail Server is listening on port: ${PORT}`))
