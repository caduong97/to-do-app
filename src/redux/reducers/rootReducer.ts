import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { todoReducer } from './todoReducer'

const rootReducer: any = combineReducers({
  theme: themeReducer,
  todos: todoReducer
})

export default rootReducer

export type RootReducer = ReturnType<typeof rootReducer>