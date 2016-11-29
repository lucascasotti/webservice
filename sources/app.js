import express from 'express'

const server = express();
const port = process.env.PORT || 3000;

server.get('/users', function(req, res) {
  const users = [
    {name: 'Darlan'},
    {name: 'Lucas'}
  ]
  res.json(users);
  console.log(req);
})

server.listen(port, () => console.log(`localhost:${port}`));