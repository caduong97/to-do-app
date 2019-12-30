import React, { useState, useRef } from 'react'
import './styles.scss'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Typography, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ReplayIcon from '@material-ui/icons/Replay';
import Checkbox from '@material-ui/core/Checkbox'

import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../redux/actions/actionCreators'
import { InitialState } from '../../redux/store/store'

interface Props extends ReduxProps {
  status: string
  content: string
}

const ToDoItem: React.FC<Props> = ({theme, status, content, markDone, deleteDoingItem, editItem, reDoItem, deleteDoneItem}) => {

  const [edit, setEdit] = useState(false)
  const input = useRef(null)


  //TODO: instead of hard coded hex-code color here, grab it from redux theme store
  const CustomCheckbox = withStyles({
    root: {
      color: "#4e97fc",
    },
  })(Checkbox)

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

  const markDoneTodo = (arg: string) => {
    setTimeout(() => {
      markDone(arg)
    }, 100)
  }

  const toggleEditMode = () => {
    setEdit(true)
  }

  const toggleSaveTodo = () => {
    setEdit(false)
    editItem(content, input.current.value)
  }

  return (
    <div >
      {status === "doing" ? (
        <div className="todo">
          { edit ? (
            <div className="todo__edit">
              <CustomTextField
                id="custom-css-outlined-input"
                className="todo__edit__field"
                variant="outlined" 
                defaultValue={content}
                inputRef={input}
              />
              <IconButton aria-label="edit" onClick={toggleSaveTodo}>
                <CheckCircleRoundedIcon className="todo__edit__save"/>
              </IconButton>
            </div>
          ) : ( 
            <div className="todo__item">
              <CustomCheckbox
                color="default"
                className="todo__item__check"
                onClick={() => markDoneTodo(content)}
              />
              <Typography className="todo__item__title" variant='body1'>{content}</Typography>
              <IconButton aria-label="edit" onClick={toggleEditMode}>
                <EditIcon className="todo__item__edit" />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => deleteDoingItem(content)}>
                <DeleteIcon className="todo__item__delete" />
              </IconButton>
            </div>
          )}

          
        </div>
      ) : (
        <div className="todo">
          <div className="todo__item">
            <Typography className="todo__item__title--disable" variant='body1'>{content}</Typography>
            <IconButton aria-label="redo">
              <ReplayIcon 
                className="todo__item__redo"
                onClick={() => reDoItem(content)}
              />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon 
                className="todo__item__delete" 
                onClick={() => deleteDoneItem(content)}
              />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: InitialState) => {
  return {
    theme: state.theme,
    todos: state.todos
  }
}

//TODO: statically type dispatch function parameter's type
// previously couldnt use type TodoAction
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

type ReduxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem)


