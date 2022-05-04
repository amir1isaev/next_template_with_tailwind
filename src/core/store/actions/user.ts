import { UserModel } from '@/models'
import { UserAction, EUserAction } from '../type/user'

export const getUser = (payload: UserModel.User): UserAction => ({
	type: EUserAction.GET_USER,
	payload,
})
