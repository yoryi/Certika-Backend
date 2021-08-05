//IMPORTACION DE MODULOS
const express = require('express')
const router = require('./router/router')
const morgan = require('morgan')
const http = require('http')
const app = express()
const servidor = http.createServer(app)
const { mildelware } = require('./mildelware')
require('dotenv').config()

mildelware(app, morgan, express)
app.use(router)

//SERVIDOR
servidor.listen(process.env.PORT || process.env.SERVER, () => {
    console.log('Servidor en el puerto:', process.env.SERVER)
});