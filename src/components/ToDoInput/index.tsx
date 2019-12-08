import React from 'react'
import './styles.scss'
import {TextField, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export const ToDoInput: React.FC = () => {
  return (
    <div className="input-group">
      <TextField
        className="input-group__field"
        id="standard-textarea"
        label="What do want to do?"
        placeholder="Do something"
        multiline
        margin="normal"
      />
      <Fab 
        size="medium"
        color="primary"    
        aria-label="add" 
        className="input-group__button"
      >
        <AddIcon />
      </Fab>
    </div>
  )
}

export default ToDoInput
