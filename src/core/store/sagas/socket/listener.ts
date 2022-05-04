// import { StorageActions } from '@/actions'
// import { put } from 'redux-saga/effects'
import ESocketType from './types'

function* onMessage(res: any) {
	// console.log(`[${ESocketType.SERVER_NEW_MESSAGE}]`, res)
	// yield put(StorageActions.getMessage(res))
}

export { onMessage }
