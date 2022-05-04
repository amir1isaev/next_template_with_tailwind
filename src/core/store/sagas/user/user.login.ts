import { call, put } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios'
import { UserActions } from '@/actions'
import { UserModel } from '@/models'
import { apiRoutes } from '@/routes'
import { axiosResponse } from '../axiosResponce'

function* login() {
	const url = apiRoutes.authAPIRoutes.login()

	try {
		const res: AxiosResponse = yield call(axiosResponse, 'POST', url, {})
		console.log('[LOGIN RESULT]', res)
		if (res) {
			yield put(UserActions.getUser(res.data.user))
		}
	} catch (error) {
		console.log('[ERROR]', error)
	}
}

export default login
