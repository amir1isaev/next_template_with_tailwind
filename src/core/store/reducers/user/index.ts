import { userState } from '../../state'
import { EUserAction, IUserState, UserAction } from '../../type/user'
import { getUserSlices } from './slices'

const userReducer = (state = userState, action: UserAction): IUserState => {
	switch (action.type) {
		case EUserAction.GET_USER:
			return getUserSlices(state, action.payload)

		default:
			return state
	}
}

export default userReducer
