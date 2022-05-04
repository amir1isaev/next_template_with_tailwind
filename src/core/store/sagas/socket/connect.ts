import { socketURI } from '@/config'
import { io } from 'socket.io-client'

const socketConnect = () => {
	console.log('[START CONNECT]')
	return io(socketURI, {
		withCredentials: true,
		query: {},
		extraHeaders: {
			'my-custom-header': 'abcd',
		},
	})
}

export default socketConnect
