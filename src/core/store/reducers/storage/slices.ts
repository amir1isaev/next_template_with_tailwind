import { ETheme } from '@/enums'
import { IStorageState } from '../../type/storage'

const getThemeSlices = (state: IStorageState, payload: ETheme) => {
	return {
		...state,
		themeType: payload,
	}
}

export { getThemeSlices }
