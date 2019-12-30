import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators } from 'redux'

import './styles.scss'
import { withStyles } from '@material-ui/core/styles'
import {TextField, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import * as actionCreators from '../../redux/actions/actionCreators'

interface Props {
  theme: any,
  // todos: any,
  addTodo: (arg: string) => void
}

const ToDoInput = ({theme, addTodo}:Props) => {

  // console.log(theme)
  console.log(addTodo)
   
  //TODO: instead of hard coded hex-code color here, grab it from redux theme store
  const CustomTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#4e97fc',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: `${theme['--text-secondary']}`,
        },
        '&:hover fieldset': {
          borderColor: `${theme['--text-secondary']}`,
        },
        '&.Mui-focused fieldset': {
          borderColor: '#4e97fc',
        },
      },
    },
  })(TextField)

  const CustomFab = withStyles({
    root: {
      backgroundColor: '#4e97fc',

      '&:hover': {
        backgroundColor: '#2d6fcc',
      }
    }
  })(Fab)

  const input = useRef(null)

  // const onClick = () => {
  //   console.log(input.current.value)
  // }

  console.log("rerednder")

  return (
    <div className="input-group">
      <CustomTextField
        className="input-group__field"
        id="custom-css-outlined-input"
        label="What you want to do?"
        multiline
        variant="outlined"
        margin="normal"
        inputRef={input}
      />
      <CustomFab 
        size="medium" 
        color="primary"  
        aria-label="add" 
        className="input-group__button"
        onClick={() => addTodo(input.current.value)}
      >
        <AddIcon />
      </CustomFab>  

      
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    todos: state.todos //TO LEARN: why have to be here just for the action
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoInput)
