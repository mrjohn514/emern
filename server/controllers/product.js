const Product = require('../models/product')

module.exports.addproduct = async (req, res) => {
  try {
    console.log('here')
    // Create a new product object
    const product = new Product(req.body)

    // Save the product to the database
    await product.save()

    return res
      .status(201)
      .json({ message: 'Product added successfully', product })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports.getproducts = async (req, res) => {
  const { query } = req
  console.log('enterd herer', query)

  // Use the Mongoose model to query the MongoDB Atlas database for matching products
  const products = await Product.find({
    $or: [
      { brandName: new RegExp(query.q, 'i') },
      { name: new RegExp(query.q, 'i') },
      { description: new RegExp(query.q, 'i') },
    ],
  }).limit(10)

  // Return the search results as a list of suggestions in JSON format
  const suggestions = products.map((product) => ({
    name: product.name,
    imageUrl: product.imageUrl,
  }))

  return res.json(suggestions)
}

module.exports.getimages = async (req, res) => {
  try {
    const productsWithImageUrl = await Product.find(
      {},
      'name description brandName Quantity Rating imageUrl'
    )

    const imageUrlArray = productsWithImageUrl.map(
      (product) => product.imageUrl
    )

    return res.json({
      message: 'success',
      imglist: imageUrlArray,
    })
  } catch (error) {
    console.log(error)
  }
}
