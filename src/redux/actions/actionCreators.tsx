import {
  SWITCH_THEME,
  ADD_TODO, 
  DELETE_DOING_ITEM, 
  EDIT_ITEM, 
  RE_DO_ITEM,
  DELETE_DONE_ITEM, 
  MARK_DONE,
  
} from './actions'

export interface SwitchThemeAction {
  type: typeof SWITCH_THEME
}

export interface TodoAction {
  type: string, 
  todo: string,
  newTodo?: string
}

export const switchTheme = ():SwitchThemeAction => {
  return {
    type: SWITCH_THEME
  }
}

export const addTodo = (todo: string):TodoAction => {
  console.log(todo)
  return {
    type: ADD_TODO,
    todo: todo,
  }
}

export const deleteDoingItem = (todo: string, ):TodoAction => {
  return {
    type: DELETE_DOING_ITEM,
    todo: todo,
  }
}

export const editItem = (todo: string, newTodo: string):TodoAction => {
  return {
    type: EDIT_ITEM,
    todo: todo, 
    newTodo: newTodo
  }
}

export const reDoItem = (todo: string):TodoAction => {
  return {
    type: RE_DO_ITEM,
    todo
  }
}

export const deleteDoneItem = (todo: string):TodoAction => {
  return {
    type: DELETE_DONE_ITEM,
    todo: todo,
  }
}

export const markDone = (todo: string):TodoAction => {
  return {
    type: MARK_DONE,
    todo: todo,
  }
}