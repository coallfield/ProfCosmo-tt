
const TodosService = require('../services/todos-service')

class TodosController {
    async create(req, res, next) {
        try {
            const todo = req.body
            console.log(todo)
            const todos = await TodosService.create(todo)
            return res.json(todos)
        } catch (error) {
            next(error)
        }
    }

    async getTodos(req, res, next) {
        try {
            const todos = await TodosService.getTodos()
            return res.json(todos)
        } catch (error) {
            next(error)
        }
    }
    async editTodo(req, res, next) {
        try {
            const {status, body, id} = req.body
            const editedTodo = await TodosService.edit(status, body, id)
            return res.json(editedTodo)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new TodosController()