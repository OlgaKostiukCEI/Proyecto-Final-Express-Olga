const mongoose = require('mongoose')

const gatosSchema = new mongoose.Schema(
    {imagen: String, nombre: String, raza: String, edad: Number, genero: String, caracter: String, descripcion: String},
    {collection:'Gatos', versionKey : false}
)

const perrosSchema = new mongoose.Schema(
    {imagen: String, nombre: String, raza: String, edad: Number, genero: String, caracter: String, descripcion: String},
    {collection:'Perros', versionKey : false}
)

const usersSchema = new mongoose.Schema(
    {user: String, pass: String},
    {collection:'Usuarios',versionKey : false}
)


module.exports={
    gatosSchema,
    perrosSchema,
    usersSchema,
}