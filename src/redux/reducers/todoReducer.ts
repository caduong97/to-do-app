import { ToDos } from '../store/todos'
import { AddTodoAction } from '../actions/actionCreators'

const initialState: ToDos = {
  doing: [],
  done: []
}

export const todoReducer = (state = initialState, action: AddTodoAction) => {
  console.log(action.type)
  switch (action.type) {
    case "ADD_TODO":
      return  {doing: [...state.doing, action.todo], done: state.done} 
      
    // case "DELETE_DOING_ITEM":
    //   return {doing: state.doing.filter(i => i === action.todo)}
    // case "MARK_DONE":
    //   return [action.payload, ...todos.done  ]
    default:
      return state
  }
  

}