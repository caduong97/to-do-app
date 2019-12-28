import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { Theme, themeList } from './theme'
import { ToDos, todos } from './todos'

export interface InitialState {
  theme: Theme
  todos: ToDos
}

const initialState: InitialState = {
  theme: themeList.defaultTheme,
  todos: todos
}


const store = createStore(rootReducer, initialState)

export default store