import React from 'react'
import { AppBar, Toolbar, Typography, Switch} from '@material-ui/core'
import './styles.scss'

import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../redux/actions/actionCreators'

interface Props {
  switchTheme: () => void
}

const Header = ({switchTheme}:Props) => {

  return (
    <div>
      <AppBar className="header" position="absolute">
        <Toolbar className="header__toolbar" >
          <Typography className="header__toolbar__app-name" variant="h6">
            To Do App
          </Typography>
          
          <span className="header__toolbar__theme-switch">
            <Typography>Default</Typography>
            <Switch color="default" onChange={() => switchTheme()} />
            <Typography>Dark mode</Typography>
          </span>
          
          
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
