import SocketType from './types'
import { onMessage } from './listener'

function* checkTypeHandler(res: any) {
	const { type, payload } = res

	// switch (type) {
	// 	case SocketType.SERVER_NEW_MESSAGE:
	// 		yield onMessage(payload)
	// 		break
	// 	default:
	// 		break
	// }
}

export default checkTypeHandler
