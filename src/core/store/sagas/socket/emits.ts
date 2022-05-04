import { apply } from 'redux-saga/effects'
import { Socket } from 'socket.io-client'
import ESocketType from './types'

function* message(socket: Socket, action: any) {
	// console.log(`[${ESocketType.CLIENT_NEW_MESSAGE}]`)
	// yield apply(socket, socket.emit, [ESocketType.CLIENT_NEW_MESSAGE, 'HELLO SOCKET'])
}

export { message }
