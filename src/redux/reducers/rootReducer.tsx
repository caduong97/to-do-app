import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'

const rootReducer: any = combineReducers({
  theme: themeReducer
})

export default rootReducer