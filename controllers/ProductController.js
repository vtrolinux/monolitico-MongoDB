const Product = require('../models/Product')

module.exports = class ToughController {
  static async showProducts(req, res) {
    //const products = await Product.getProducts()

    //console.log(products)

    res.render('products/all', /*{ products }*/)
  }
}