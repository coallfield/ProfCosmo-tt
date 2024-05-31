import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ITodo } from '@/interfaces/ITodo'
import { SERVER_URL } from '@/config'
export const useTodosStore = defineStore('todos', () => {
  const todos = ref<ITodo[]>([])
  const errorMessage = ref('')
  const isError = ref(false)
  const isWaiting = ref(false)



  const getTodos = async () => {
    const response = await fetch(`${SERVER_URL}/get-todos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const todos: ITodo[] = await response.json()
    setTodos(todos)

  }

  const createTodo = async (title: string, body: string, email: string) => {
    isWaiting.value = true
    const requestBody = { title, body, email }
    const response = await fetch(`${SERVER_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    const todos = await response.json()
    setTodos(todos)
    isWaiting.value = false
  }

  const setTodos = (data: ITodo[]) => {
    todos.value = data
  }

  const editTodo = async (isComplete: boolean, body: string, id: string | number) => {
    const status = isComplete ? 'complete' : 'incomplete'
    const requestBody = { status, body, id }
    const response = await fetch(`${SERVER_URL}/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    const todo: ITodo = await response.json()
    todos.value.map((el) => {
      if(el.id === todo.id) {
        
          return todo
      }
      return el

    })

  }


  const setErrorMessage = (message: string) => {
    errorMessage.value = message
  }
  const setError = (bool: boolean) => {
    isError.value = bool
  }

  return { todos, getTodos, errorMessage, isError, setErrorMessage, setError, createTodo, isWaiting, editTodo }
})
