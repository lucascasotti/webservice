import {isValid as isValidId} from 'valid-objectid'

module.exports = {
  id,
}

function id (req, res, next, value) {
  
  // Para que ele possa seguir com a rota, Utilizar o next() para que ele possa procurar outra rota que se encaixe.
  // Foi utlizado um módulo para poder validar se o valor passado como ID é um ObjectID válido
  if (!isValidId(value)) {
    const message = 'invalid id'
    return res
      .status(400)
      .json({message})
  } 

  next()
}