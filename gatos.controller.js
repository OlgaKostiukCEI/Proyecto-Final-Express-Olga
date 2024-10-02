const { Gatos } = require("./model")

const getGato = async(req,res,next)=>{
   try {
    const buscar = await Gatos.find()
    res.status(200).json(buscar)
   } catch (error){
    next({statusText : error.message})
   }
}

const getGatoId = async (req, res, next)=>{
   try{
      const {_id}=req.params
      const buscar = await Gatos.findOne({_id})
      res.json(buscar)
   }catch(error){
      next({statusText : error.message})
   }
   
}

const postGato = async(req,res,next)=>{
  try {
    const {imagen, nombre, raza, edad, genero, caracter, descripcion} =req.body

    const nuevo = new Gatos ({imagen, nombre, raza, edad, genero, caracter, descripcion})
    await nuevo.save()
    const buscar = await Gatos.find()
    res.status(200).json (buscar)
  }catch (error){
    next({statusText : error.message})
   }
}

const putGato = async(req,res,next)=>{
    try {
       const {_id, ...datos} = req.body
       await Gatos.findByIdAndUpdate (_id, datos)    
       const buscar = await Gatos.find()
       res.status(200).json(buscar)
    }catch (error){
       next({statusText : error.message})
    }
}

const putGatoId = async(req,res,next)=>{
   try {
      const {_id,} = req.params
      const datos = req.body
      await Gatos.findByIdAndUpdate (_id, datos)    
      const buscar = await Gatos.find()
      res.status(200).json(buscar)
   }catch (error){
      next({statusText : error.message})
   }
}


const deleteGato = async(req,res,next)=>{
    try {

        const {_id} = req.params
        await Gatos.findByIdAndDelete(_id)
        const buscar = await Gatos.find()
        res.status(200).json(buscar)
    }   catch (error){
        next({statusText : error.message})
     }
}




module.exports={
   getGato,
   getGatoId,
   postGato,
   putGato,
   deleteGato,
   putGatoId,

 
}