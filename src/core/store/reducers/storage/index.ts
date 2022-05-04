import { storageState } from '../../state'
import { EStorageAction, IStorageState, StorageAction } from '../../type/storage'
import { getThemeSlices } from './slices'

const storageReducer = (state = storageState, action: StorageAction): IStorageState => {
	switch (action.type) {
		case EStorageAction.GET_THEME_TYPE:
			return getThemeSlices(state, action.payload)

		default:
			return state
	}
}

export default storageReducer
