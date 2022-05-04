import checkTypeHandler from './check.type'
import socketConnect from './connect'
import { call, fork, take } from 'redux-saga/effects'
import { EventChannel } from 'redux-saga'
import { Socket } from 'socket.io-client'
import createSocketChannel from './channel'

export function* socketWatcher() {
	const socket: Socket = yield call(socketConnect)

	// yield takeEvery(EStorageAction.START_GET_MESSAGE, (action: any) => message(socket, action))

	const socketChannel: EventChannel<any> = yield call(createSocketChannel, socket)

	while (true) {
		try {
			const res: EventChannel<any> = yield take(socketChannel)
			yield fork(checkTypeHandler, res)
		} catch (err) {
			console.error('[socket error]', err)
			socketChannel.close()
		}
	}
}

export default socketWatcher
