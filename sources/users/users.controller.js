import Users from './users.model.js'

const privateFields = '-password -__v'

module.exports = {
  list,
  get,
  create,
  disable,
}

function list (req, res) {
  Users
    .find({active: {$ne: false}}, privateFields)
    // Quando não se trabalha o parametro, pode passar diretamente o res.json, ficando assim
    // .then(res.json)
    .then(users => res.json(users))
}

function get (req, res) {
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

function disable (req, res) {
  Users
    .findByIdAndUpdate(req.params.id, {$set: {active: false}})
    .then(() => res.json({mesage: 'deleted'}))
}