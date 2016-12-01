import express from 'express'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import router from './router.js'
import bodyParser from 'body-parser'

const server = express();
const port = process.env.PORT || 3000;

server
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(router)

mongoose.Promise = bluebird

mongoose.connect('localhost/webservice', err => {
  if (err) {
    return console.log('error on connect db');
  }
  server.listen(port, () => console.log(`localhost:${port}`));
});