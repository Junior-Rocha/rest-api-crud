const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
//Retorna todos os resultados
    async index(req, res){
        const {page = 1} = req.query
        const products = await Product.paginate({},{page, limit:10})
        return res.json(products)
    },
//Retorna um produto especifico pelo id
    async show(req, res){
        const product = await Product.findById(req.params.id)
        return res.json(product)

    },
//Criação de novos products
    async store(req, res){
        const product = await Product.create(req.body)
        return res.json(product)
    },
//Atualização de products
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true})
        return res.json(product)
    },
//Remoção de products
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)
        return res.send()
    }

}