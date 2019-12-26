import React from 'react'
import './App.scss'
import Header from './components/Header' 
import ToDoInput from './components/ToDoInput'
import ToDoItem from './components/ToDoItem'
import Card from './components/Card'

import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from './redux/actions/actionCreators'

interface Props {
  theme: any
}

const App: React.FC<Props> = ({theme}) => {

  console.log("theme and rerender", theme)

  Object.keys(theme).map(key => {
    const value = theme[key]
    document.body.style.setProperty(key, value)
    console.log(document.body.style.getPropertyValue(key))
  })

  return (
    <div className="app">
      <Header/>
      
      <div className="app__main">
        <Card label="add item" status="todo">
          <ToDoInput/>
        </Card>
        <Card label="to-do list" status="doing">
          <ToDoItem status="doing" content="blahblahblah blah blah blah "/>
          <ToDoItem status="doing" content="blahblahblah blah blah blah "/>
          <ToDoItem status="doing" content="blahblahblah blah blah blah "/>
        </Card>
        <Card label="completed" status="done">
          <ToDoItem status="done" content="blahblahblah blah blah blah "/>
          <ToDoItem status="done" content="blahblahblah blah blah blah "/>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
