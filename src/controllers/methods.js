const ProductsModel = require('../models/products')

// função para localizar os itens pelo ID método get
async function get(req, res){
    const {id} = req.params

    const obj = id ? { _id: id} : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

//função para criar o método post

async function post(req, res){
    const{
        name,
        brand,
        price,
    } = req.body


    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'Success'
    })
}




module.exports = {
    get,
    post,
}