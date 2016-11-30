import Users from './users.model.js'

console.log(Users);

module.exports = {
  list,
  get,
}

function list (req, res) {
  Users
    .find()
    // Quando não se trabalha o parametro, pode passar diretamente o res.json, ficando assim
    // .then(res.json)
    .then(users => res.json(users))
}

function get (req, res) {
  Users
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch()
}