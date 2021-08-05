//Modulos
const express = require('express')
const api = express.Router()
const Core = require('../core/index') 

//Api
api.post('/Add_Monitor', Core.AddMonitores)
api.post('/Get_Monitor', Core.GetMonitores)
api.post('/Edit_Monitor/:id', Core.EditMonitores)
api.post('/Delete_Monitor/:id', Core.DeteleMonitores)

module.exports = api