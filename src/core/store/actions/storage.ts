import { ETheme } from '@/enums'
import { StorageAction, EStorageAction } from '../type/storage'

export const getThemeType = (payload: ETheme): StorageAction => ({
	type: EStorageAction.GET_THEME_TYPE,
	payload,
})
