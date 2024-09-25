const mongoose = require('mongoose')
const { gatosSchema, perrosSchema, usersSchema } = require('./scheme')

const Gatos = mongoose.model ('Gatos' , gatosSchema)
const Perros = mongoose.model ('Perros', perrosSchema)
const Users = mongoose.model ('Users', usersSchema)


module.exports={
Gatos,
Perros,
Users,
}