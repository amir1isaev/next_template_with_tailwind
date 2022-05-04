import { UserModel } from '@/models'
import EUserAction from './types'

interface IGetUser {
	type: EUserAction.GET_USER
	payload: UserModel.User
}

export type { IGetUser }
