const { putGatoId } = require("./gatos.controller")
const { Perros } = require("./model")

const getPerro = async(req,res,next)=>{
   try {
    const buscar = await Perros.find()
    res.status(200).json(buscar)
   } catch (error){
    next({statusText : error.message})
   }
}

const getPerroId = async(req,res,next)=>{
   try{
      const {_id}=req.params
      const buscar = await Perros.findOne({_id})
      res.json(buscar)
   }catch(error){
      next ({statusText : error.message})
   }

}


const postPerro = async(req,res,next)=>{
   try {
    const {imagen, nombre, raza, edad, genero, caracter, descripcion}=req.body
    const nuevo = new Perros ({imagen, nombre, raza, edad, genero, caracter, descripcion})
    await nuevo.save()
    const buscar = await Perros.find()
    res.status(200).json (buscar)
  }catch (error){
    next({statusText : error.message})
   }
}

const putPerro = async(req,res,next)=>{
   try{

    const {_id, ...datos} =req.body
    await Perros.findByIdAndUpdate (_id, datos)
    const buscar = await Perros.find()
    res.status(200).json(buscar)
   } catch (error){
    next({statusText : error.message})
   }
}


const putPerroId = async (req, res, next)=>{
   try{
      const {_id} =req.params
      const datos = req.body
      await Perros.findByIdAndUpdate (_id,datos)
      const buscar = await Perros.find()
      res.status(200).json(buscar)
   } catch (error) {
      next({statusText:error.message})
   }
}


const deletePerro = async(req,res,next)=>{

    const {_id} = req.params
    await Perros.findByIdAndDelete(_id)
    const buscar = await Perros.find()
  try{
    res.status(200).json(buscar)
  } catch (error){
    next({statusText : error.message})
   }
}




module.exports={
   getPerro,
   putPerro,
   postPerro,
   deletePerro,
   getPerroId,
   putPerroId,
}