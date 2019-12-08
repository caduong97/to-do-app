import React from 'react'
import { AppBar, Toolbar, Typography} from '@material-ui/core'
import './styles.scss'

const Header = () => {
  return (
    <div>
      <AppBar className="header" position="absolute">
        <Toolbar >
          <Typography variant="h6">
            To Do App
          </Typography>
    
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
