import { eventChannel } from 'redux-saga'
import { Socket } from 'socket.io-client'
import ESocketType from './types'

function createSocketChannel(socket: Socket) {
	// return eventChannel(emit => {
	// 	// const messageHandler = (payload: any) => {
	// 	// 	emit({ type: ESocketType.SERVER_NEW_MESSAGE, payload })
	// 	// }
	// 	// socket.on(ESocketType.SERVER_NEW_MESSAGE, messageHandler)
	// 	// const unsubscribe = () => {
	// 	// 	socket.off(ESocketType.CLIENT_NEW_MESSAGE, messageHandler)
	// 	// }
	// 	// return unsubscribe
	// })
}

export default createSocketChannel
