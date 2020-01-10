const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
require('dotenv/config')



const app = express()
app.use(express.json())
app.use(cors())

const port = 3001


mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})