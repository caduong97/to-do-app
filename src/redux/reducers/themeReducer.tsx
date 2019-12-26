import { themeList } from '../store/theme'

export const themeReducer = (state={}, action: any) => {
  if(action.type === 'SWITCH_THEME') {
    if (state === themeList.defaultTheme) {
      return themeList.darkTheme
    } else {
      return themeList.defaultTheme
    }
  } else {
    return state
  }
}