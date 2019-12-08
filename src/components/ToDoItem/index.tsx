import React from 'react'
import './styles.scss'
import { Typography, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

interface Props {
  status: string
  content: string
}

const ToDoItem: React.FC<Props> = ({status, content}) => {
  return (
    <div >
      {status === "doing" ? (
        <div className="todo">
          <Checkbox
            color="primary"
            className="todo__check"
          />
          <Typography className="todo__title" variant='body1'>{content}</Typography>
          <IconButton aria-label="edit">
            <EditIcon className="todo__edit" htmlColor="#6bc77e" fontSize="small"/>
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon className="todo__delete" fontSize="small" color="error"/>
          </IconButton>
        </div>
      ) : (
        <div className="todo">
          <Typography color="textSecondary" className="todo__title" variant='body1'>{content}</Typography>
          <IconButton aria-label="delete">
            <DeleteIcon className="todo__delete" fontSize="small" color="error"/>
          </IconButton>
        </div>
      )}
    </div>
  )
}
export default ToDoItem


