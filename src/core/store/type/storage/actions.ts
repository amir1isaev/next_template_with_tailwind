import { ETheme } from '@/enums'
import EStorageAction from './types'

interface IGetThemeType {
	type: EStorageAction.GET_THEME_TYPE
	payload: ETheme
}

export type { IGetThemeType }
