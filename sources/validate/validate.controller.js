import {isValid as isValidId} from 'valid-objectid'
import jwt from 'jsonwebtoken'

module.exports = {
  id,
  token 
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

function token(req, res, next) {
  const token = req.headers.token
    || req.body.token
    || req.body.token

    jwt.verify(token, '86y123unx23n8qdhwb81by1z2', (err, decoded) => {
      if(err) {
        const message = 'invalid token'
        return res
          .status(401)
          .json({message})
      }

      req.decoded = decoded

      next()
    })
}