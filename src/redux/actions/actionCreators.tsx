const SWITCH_THEME = "SWITCH_THEME"
const ADD_TODO = "ADD_TODO"

export interface SwitchThemeAction {
  type: typeof SWITCH_THEME
}

export interface AddTodoAction {
  type: typeof ADD_TODO, 
  todo: string
}

export const switchTheme = ():SwitchThemeAction => {
  return {
    type: SWITCH_THEME
  }
}

export const addTodo = (todo: string):AddTodoAction => {
  console.log(todo)
  return {
    type: ADD_TODO,
    todo: todo,
  }
}