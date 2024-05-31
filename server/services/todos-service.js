const TodoSchema = require('../models/todo-model')
const TodoDto = require('../dtos/todo-dto')
class TodosService {

    async create(todo) {
       const td = await TodoSchema.create({...todo})
        if(!td) {
            throw ApiError.BadRequest("Failed to create todo")
        }
        const todos = await TodoSchema.find()
        const todosDto = todos.map(el  => {
            el = new TodoDto(el)
            return el
        })
        return todosDto
    }

    async getTodos() {
        const todos = await TodoSchema.find()
        if(!todos) {
            throw ApiError.BadRequest('Failed to get todo')
        }
        const todosDto = todos.map(el  => {
            el = new TodoDto(el)
            return el
        })
        return todosDto
    }
    async edit(status, body, id) {
        const todo = await TodoSchema.findById(id)
        todo.status = status
        todo.body = body
        await todo.save()
        const todoDto = new TodoDto(todo)
        return todoDto
    }
}


module.exports = new TodosService()