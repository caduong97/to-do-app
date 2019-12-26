import React from 'react'
import './styles.scss'
import { withStyles } from '@material-ui/core/styles'
import { Typography, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'

interface Props {
  status: string
  content: string
}

const ToDoItem: React.FC<Props> = ({status, content}) => {

  //TODO: instead of hard coded hex-code color here, grab it from redux theme store
  const CustomCheckbox = withStyles({
    root: {
      color: "#4e97fc",
    },
  })(Checkbox)

  return (
    <div >
      {status === "doing" ? (
        <div className="todo">
          <CustomCheckbox
            color="default"
            className="todo__check"
          />
          <Typography className="todo__title" variant='body1'>{content}</Typography>
          <IconButton aria-label="edit">
            <EditIcon className="todo__edit"/>
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon className="todo__delete"/>
          </IconButton>
        </div>
      ) : (
        <div className="todo">
          <Typography className="todo__title--disable" variant='body1'>{content}</Typography>
          <IconButton aria-label="delete">
            <DeleteIcon className="todo__delete" fontSize="small" color="error"/>
          </IconButton>
        </div>
      )}
    </div>
  )
}
export default ToDoItem


