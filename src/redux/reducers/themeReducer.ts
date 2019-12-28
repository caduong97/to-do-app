import { Theme,  themeList } from '../store/theme'
import { SwitchThemeAction } from '../actions/actionCreators'

export const themeReducer = (state:Theme = {}, action:SwitchThemeAction ) => {
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