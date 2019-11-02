const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')



const app = express()
app.use(express.json())
app.use(cors())

const port = 3001


mongoose.connect('mongodb://localhost:27017/nodeApi', {
    useNewUrlParser: true
})

requireDir('./src/models')



app.use('/api', require('./src/routes'))
app.use(require("./routes"));


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})