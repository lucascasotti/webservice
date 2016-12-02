import {Router} from 'express'
import users from './users/users.controller.js'
import validate from './validate/validate.controller.js'

const router = Router()

// As rotas respeitam a ordem de criação portanto é necessário verificar se existe alguma rota que pode parecer
// Validar qual deve ser olhada primeiro.
// Neste caso a rota Authenticate poderia conflitar com a rota users/:id, mas como ele é post poderia dar conflito,
// Portanto deve ser usado primeiro

router
	.route('/users/authenticate')
	.post(users.authenticate)

router.use(validate.token)
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