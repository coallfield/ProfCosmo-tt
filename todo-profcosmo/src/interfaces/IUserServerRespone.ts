import type { IUser } from "./IUser";

export interface IUserServerRespone {
    accessToken: string,
    user: IUser
}