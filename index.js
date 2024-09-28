

console.clear()

const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const { router } = require('./router')

const BBDD_URL = process.env.BBDD_URL || `mongodb://127.0.0.1:27017/Animales`

const conectar =async()=> await mongoose.connect (BBDD_URL)
    .then (()=>console.log (`Mongoose conectado`))
    .catch ((err)=>console.log(err))
     conectar()

const app =express()



app.use (cors())
app.use (express.json())
app.use (express.urlencoded({extended:false}))
app.use (router)



app.listen (3000, () => console.log ('Api Iniciando'))

