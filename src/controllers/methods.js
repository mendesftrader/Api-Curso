const ProductsModel = require('../models/products')

// função para localizar os itens pelo ID método get
async function get(req, res){
    const {id} = req.params //pega o id de um item

    const obj = id ? { _id: id} : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

//função para criar o método post, recebe os itens
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

//função para atualizar os itens por ID
async function put(req, res){
    const {id} = req.params // //pega o id de um item

    const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, { new: true})

    res.send({
        message: 'success',
        product
    })
    
}

async function remove(req, res){
    const {id} = req.params //pega o id de um item

    const remove = await ProductsModel.deleteOne({ _id: id })
   
    const message = remove.deletedCount === 1 ? 'succes' : 'error' //if ternário
   
    res.send({
        message,
    }) 
   
}


module.exports = {
    get,
    post,
    put,
    remove
}