//require library
const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/ecommerce`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connextion error'))

db.once('open', function () {
  console.log('db connected')
})
