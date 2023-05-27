const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  brandName: String,
  Quantity: Number,
  Rating: Number,
  imageUrl: String,
  options: [
    {
      optionName: String,
      optionValue: String,
      optionPrice: Number,
    },
  ],
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
