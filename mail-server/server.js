const express = require('express')
const logger = require('morgan')

const app = express()
const PORT = process.env.PORT || 3001

app.use(logger('dev'))

app.listen(PORT, console.log(`Mail Server is listening on port: ${PORT}`))
