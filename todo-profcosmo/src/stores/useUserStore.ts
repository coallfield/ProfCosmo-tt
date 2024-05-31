import type { IUser } from "@/interfaces/IUser"
import { ref } from "vue"
import { defineStore } from 'pinia'
import type { IUserServerRespone } from "@/interfaces/IUserServerRespone"
import { useRouter } from "vue-router"
import { SERVER_URL } from '@/config'
export const useUserStore = defineStore('user', () => {
    const router = useRouter()
    const userData = ref<IUser>({} as IUser)
    const errorMessage = ref('')
    const isWaiting = ref(false)
    const isError = ref(false)


    const login = async (email: string, password: string) => {
        isWaiting.value = true
        const body = {email, password}
        const response = await fetch(`${SERVER_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            const error: string = await response.json()
            setErrorMessage(error)
            isWaiting.value = false
            throw new Error(errorMessage.value)
        }
        const data: IUserServerRespone = await response.json()
        localStorage.setItem('accessToken', data.accessToken)
        setUserData(data.user)
        isWaiting.value = false
        router.push('/')
    }

        const logout = () => {
            localStorage.removeItem('accessToken')
            router.push('/login')
        }


    const checkAuth = async () => {
        if(!localStorage.getItem('accessToken')) {
            setUserData({} as IUser)
            router.push('/login');
            throw new Error('The user is not logged in')
        }
        
        const response = await fetch(`${SERVER_URL}/check-access`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if(!response.ok) {
            localStorage.removeItem('accessToken')
            router.push('/login')
        }
        const userData = await response.json()
        setUserData(userData)
   
    }

    const setUserData = (data: IUser) => {
        userData.value = data
    }

    const setErrorMessage = (message: string) => {
        errorMessage.value = message
    }

    const setError = (bool: boolean) => {
        isError.value = bool
      }

    return { userData, login, logout, errorMessage, setErrorMessage, setError ,isWaiting, isError, checkAuth}
  })
  