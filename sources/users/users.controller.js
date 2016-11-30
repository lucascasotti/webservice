import Users from './users.model.js'

console.log(Users);

module.exports = {
  list,
}

function list (req, res) {
  Users
    .find()
    .then(users => res.json(users))
}