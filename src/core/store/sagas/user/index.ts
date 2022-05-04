import { takeEvery } from 'redux-saga/effects'

import login from './user.login'

function* userWatcher() {
	// yield takeEvery(EUserAction.USER_LOGIN, login)
}

export default userWatcher
