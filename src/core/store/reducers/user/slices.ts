import { UserModel } from '@/models'
import { IUserState } from '../../type/user'

const getUserSlices = (state: IUserState, payload: UserModel.User) => {
	return {
		...state,
		user: payload,
	}
}

export { getUserSlices }
