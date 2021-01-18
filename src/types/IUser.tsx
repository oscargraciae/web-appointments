import { IBusinessUser } from "./IBusinessUser";

export interface IUser {
  email: string
  password: string
  firstName: string
  lastName: string
  businessUser?: IBusinessUser
}

export interface IUserResponse {
  user?: IUser
  success: boolean
  message?: string
}