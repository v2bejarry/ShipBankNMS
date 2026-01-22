import { AuthRepository } from "./auth.repository"
import { UserCredentialsEntity } from "../user/user.credentials.entity"

export const AUTH_REPOSITORY = Symbol('AUTH_REPOSITORY')

export interface IAuthRepository{
    findCredentialByEmail(email:string): Promise<UserCredentialsEntity | null>
}