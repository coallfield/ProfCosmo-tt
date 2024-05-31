
import { useTodosStore } from "@/stores/useTodosStore"
import { useUserStore } from "@/stores/useUserStore"

export const ApiInteraction = () => {
    const todosStore = useTodosStore()
    const userStore = useUserStore()

    async function createTodo(title: string, body: string, email: string) {
        if(title.length < 3 || title.length > 25) {
            todosStore.setErrorMessage('The length of the title must be at least 3 characters and no more than 25')
            todosStore.setError(true)
            setTimeout(() => {
                todosStore.setError(false)
            }, 1500)
            return
        } else if(userStore.userData.email !== email) {
            todosStore.setErrorMessage('Invalid email. Enter your email')
            todosStore.setError(true)
            setTimeout(() => {
                todosStore.setError(false)
            }, 1500)
            return
        } else {
            todosStore.createTodo(title, body, email)
        }
    }



    async function login(email: string, password: string) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailPattern.test(email)) {
            userStore.setErrorMessage('The email is invalid')
            userStore.setError(true)
            setTimeout(() => {
                userStore.setError(false)
            }, 1500)
            return
    
        }
        else if (password.trim() === '') {
            userStore.setErrorMessage('Enter the password')
            userStore.setError(true)
            setTimeout(() => {
                userStore.setError(false)
            }, 1500)
            return
        }
        else {
            try {
                await userStore.login(email, password)
            } catch (error) {
                userStore.setError(true)
                setTimeout(() => {
                    userStore.setError(false)
                }, 1500)
            }
    
        }
    }



    return {createTodo, login}
}