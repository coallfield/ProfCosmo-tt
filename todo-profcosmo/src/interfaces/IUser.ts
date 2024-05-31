import type {Role} from '@/types/Role'

export interface IUser {
    id: string,
    email: string,
    role: Role
}