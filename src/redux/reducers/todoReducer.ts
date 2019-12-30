import { ToDos } from '../store/todos'
import { 
  ADD_TODO, 
  DELETE_DOING_ITEM, 
  EDIT_ITEM,
  RE_DO_ITEM,
  DELETE_DONE_ITEM, 
  MARK_DONE,
} from '../actions/actions'
import { TodoAction } from '../actions/actionCreators'

const initialState: ToDos = {
  doing: [],
  done: []
}

export const todoReducer = (state = initialState, action: TodoAction) => {
  console.log(action.type)
  switch (action.type) {
    case ADD_TODO:
      return  {
        doing: [...state.doing, action.todo], 
        done: state.done
      } 
    case DELETE_DOING_ITEM:
      return {
        doing: state.doing.filter(i => i !== action.todo), 
        done: state.done
      }

    case EDIT_ITEM: 
      let newDoing = state.doing.slice(0)
      newDoing[newDoing.indexOf(action.todo)] = action.newTodo
      return {
        doing: newDoing,
        done: state.done
      }
    
    case RE_DO_ITEM: 
      return {
        doing: [...state.doing, action.todo],
        done: state.done.filter(i => i !== action.todo)
      }
    
    case DELETE_DONE_ITEM:
      return {
        doing: state.doing, 
        done: state.done.filter(i => i !== action.todo)
      }
    case MARK_DONE:
      return {
        doing: state.doing.filter(i => i !== action.todo), 
        done: [...state.done, action.todo]
      }
    default:
      return state
  }
  

}