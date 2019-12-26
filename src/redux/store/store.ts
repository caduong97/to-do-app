import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { themeList } from './theme'

const initialState = {
  theme: themeList.defaultTheme
}


const store = createStore(rootReducer, initialState)

export default store