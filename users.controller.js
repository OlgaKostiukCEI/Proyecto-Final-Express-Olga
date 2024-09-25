const { Users } = require("./model")

const postUsuarios = async (req, res, next) =>{
 try {
    const {user,pass}=req.body
    const buscar = await Users.findOne({user,pass})
    res.status(200).json(buscar)
  }catch (error){
    next({statusText : error.message})
   }
}

module.exports = {
    postUsuarios
}