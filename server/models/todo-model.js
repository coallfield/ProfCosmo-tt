const {Schema, model} = require('mongoose')

const TodoSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String},
    email: {type: String, required: true},
    status: {type: String, default: "incomplete"}


})

module.exports = model('Todo', TodoSchema)