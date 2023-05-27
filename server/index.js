const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const connectDB = require('./config/mongoose')

app.use('/', require('./routes'))

app.listen(5000, () => {
  console.log('listening for requests')
})
