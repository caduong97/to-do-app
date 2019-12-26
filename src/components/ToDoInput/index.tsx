import React from 'react'
import {connect} from 'react-redux'
import './styles.scss'
import { withStyles } from '@material-ui/core/styles'
import {TextField, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

interface Props {
  theme: any
}

export const ToDoInput: React.FC<Props> = ({theme}) => {

  
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

  return (
    <div className="input-group">
      <CustomTextField
        className="input-group__field"
        id="custom-css-outlined-input"
        label="What you want to do?"
        multiline
        variant="outlined"
        margin="normal"
        
      />
      <CustomFab 
        size="medium" 
        color="primary"  
        aria-label="add" 
        className="input-group__button"
      >
        <AddIcon />
      </CustomFab>  
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(ToDoInput)
