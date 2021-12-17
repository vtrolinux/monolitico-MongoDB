const connection = require('../db/connection')

class Product {
    constructor(name, price, description, image){
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }
    save(){
        const product = connection.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image
        })
        return product
    }
    static getProducts() {
        const products = connection.db().collection('products').find().toArray()  
        return products
    }
}
module.exports = Product