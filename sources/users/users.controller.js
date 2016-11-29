module.exports = {
  list,
}

function list (req, res) {
  const users = [
    {name: 'Darlan'},
    {name: 'Lucas'}
  ]
  res.json(users);
}