import React from 'react'
import './App.scss'
import Header from './components/Header' 
import ToDoInput from './components/ToDoInput'
import ToDoItem from './components/ToDoItem'
import Card from './components/Card'

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="main">
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

export default App;
