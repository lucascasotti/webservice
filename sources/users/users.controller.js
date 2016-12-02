import Users from './users.model.js'
import encode from '../encode/encode.helper.js'
import jwt from 'jsonwebtoken'

const privateFields = '-password -__v'

module.exports = {
  list,
  get,
  create,
  disable,
  authenticate,
}

function list(req, res) {
  Users
    .find({active: {$ne: false}}, privateFields)
    // Quando não se trabalha o parametro, pode passar diretamente o res.json, ficando assim
    // .then(res.json)
    .then(users => res.json(users))
}

function get(req, res) {
  Users
    .findById(req.params.id, privateFields)
    .then(user => res.json(user))
    .catch()
}

function create(req, res) {
  console.log(req.body)

  const user = new Users(req.body)

  user
    .save()
    .then(() => res.status(201).json({message: 'created'}))
    .catch((err) => {
      console.log(err)
      res.status(400).json({message: 'error on created user'}) 
    })
}

function disable(req, res) {
  Users
    .findByIdAndUpdate(req.params.id, {$set: {active: false}})
    .then(() => res.json({mesage: 'deleted'}))
}

function authenticate(req, res) {
  
  const email     = req.body.email
  const password  = encode.md5(req.body.password)
  const active    = true

  console.log({email, password, active})

  Users
    .findOne({email, password, active})
    .then(returnToken)
    .catch(() => res.status(401).json({message: 'invalid credentials'}))

  function returnToken(user) {
    console.log(user)
    const id = user.id
    const token = jwt.sign({id, email}, '86y123unx23n8qdhwb81by1z2')
    res.json({token})
  }
}