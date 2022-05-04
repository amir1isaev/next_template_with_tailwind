import { all, fork } from 'redux-saga/effects'
import userWatcher from './user'

export function* rootWatcher() {
	yield all([userWatcher()])
}
