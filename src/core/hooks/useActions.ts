import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '@/store'
import { UserActions, StorageActions, InterfaceAction } from '@/actions'

const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators({ ...UserActions, ...StorageActions, ...InterfaceAction }, dispatch)
}

export default useActions
