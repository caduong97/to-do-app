import React from 'react'
import './App.scss'
import Header from './components/Header' 
import ToDoInput from './components/ToDoInput'
import ToDoItem from './components/ToDoItem'
import Card from './components/Card'
// import { Typography } from '@material-ui/core'

import {Dispatch, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from './redux/actions/actionCreators'
import { InitialState } from './redux/store/store'

// interface Props {
//   theme: any,
//   todos: any
// }

type Actions = actionCreators.SwitchThemeAction | actionCreators.TodoAction

const App: React.FC<Props> = ({theme, todos}) => {

  Object.keys(theme).map(key => {
    const value = theme[key]
    document.body.style.setProperty(key, value)
  })

  return (
    <div className="app">
      <Header/>
      
      <div className="app__main">
        <Card label="add item" status="todo">
          <ToDoInput/>
        </Card>
        <Card label="to-do list" status="doing">
          {todos.doing && (
            todos.doing.map((item: string, index: number) => <ToDoItem key={index} status="doing" content={item}/>)
          )}
        </Card>
        <Card label="completed" status="done">
          {todos.done && (todos.done.map((item: string, index: number) => <ToDoItem key={index} status="done" content={item}/>)
          )}
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = (state: InitialState) => {
  return {
    theme: state.theme,
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return bindActionCreators(actionCreators, dispatch)
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(App)
