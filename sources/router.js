import {Router} from 'express'
import users from './users/users.controller.js'

const router = Router()

router
  .route('/users')
  .get(users.list)

module.exports = router


