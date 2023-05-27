const mongoose = require('mongoose')

const pdSchema = new mongoose.Schema({
  name: String,
  description: String,
  brandName: String,
  Quantity: Number,
  Rating: Number,
  imageurl: string,
})

const Pd = mongoose.model('Pd', pdSchema)

module.exports = Pd
