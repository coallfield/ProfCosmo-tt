const Router = require('express').Router
const UserController = require('../controllers/user-controller')
const TodosController = require('../controllers/todos-controller')
const router = new Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/login', UserController.login)
router.post('/create', TodosController.create)
router.get('/get-todos', TodosController.getTodos)
router.get('/check-access', authMiddleware, (req, res) => res.json(req.user))
router.post('/edit', TodosController.editTodo)
module.exports = router