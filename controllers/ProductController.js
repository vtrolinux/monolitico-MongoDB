const Product = require('../models/Product')

module.exports = class ToughController {
  static async showProducts(req, res) {
    //const products = await Product.getProducts()

    //console.log(products)

    res.render('products/all', /*{ products }*/)
  }
  static createProduct(req, res) {
    res.render('products/create')
  }
  static createProductPost(req, res) {
    const name = req.body.name
    const price = req.body.price
    const description = req.body.description

    const product = new Product(name, price, description)

    product.save()

    res.redirect('/products')
  }
}