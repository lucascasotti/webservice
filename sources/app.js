import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const server = express();
const port = process.env.PORT || 3000;

server.use(router)

mongoose.connect('localhost/webservice', err => {
  if (err) {
    return console.log('error on connect db');
  }
  server.listen(port, () => console.log(`localhost:${port}`));
});