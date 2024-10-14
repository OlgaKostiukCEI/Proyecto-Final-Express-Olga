const express = require ('express')
const { getGato, postGato, deleteGato, putGato, getGatoId, putGatoId } = require('./gatos.controller')
const { getPerro, postPerro, deletePerro, putPerro, getPerroId, putPerroId } = require('./perros.controller')
const { postUsuarios } = require('./users.controller')
const { getHome } = require('./gethome.controller')


const router =express.Router()

    router.route('/')
        .get(getHome)
        

    router.route('/gatos')
        .get(getGato)
        .post(postGato)
        .put(putGato)
    
    router.route('/gatos/id/:_id')
        .get(getGatoId)  
        .put(putGatoId)  
    
    router.route('/gatos/id/:_id')
        .delete(deleteGato)

    router.route('/perros')
        .get(getPerro)
        .post(postPerro)
        .put(putPerro)

    router.route ('/perros/id/:_id')
        .get(getPerroId)
        .put(putPerroId)

    router.route('/perros/id/:_id')
        .delete(deletePerro)

    router.route ('/users')
        .post(postUsuarios)

       router.all ('*', (res,req,next)=>{
        const err = new Error ()
            err.status = 404
            err.statusText = `No encuentro el Endpoint`
        next (err)
    })
    
        router.use ((err,req,res,next)=>{
        let {status , statusText} = err
            status = status || 500
            statusText = statusText || `Error interno de Api`
        res.status(status).json({status,statusText})
    })
    

module.exports={
    router
}