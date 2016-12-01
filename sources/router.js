import {Router} from 'express'
import users from './users/users.controller.js'
import validate from './validate/validate.controller.js'

const router = Router()

// Quando se tem um parâmetro que esta em várias rotas, você pode criar um validador para esse parâmetro.
// Os parametros esperados são ([nome], callback)
router.param('id', validate.id)

router
  .route('/users')
  .get(users.list)
  .post(users.create)

router
  // É possivel passar uma regex aqui caso queira algo muito específico, ficando
  // .route(/regex/)
  .route('/users/:id')
  .get(users.get)
  .delete(users.disable)


module.exports = router