import React from 'react'
import { AppBar, Toolbar, Typography, Switch} from '@material-ui/core'
import './styles.scss'

import {Dispatch, bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../redux/actions/actionCreators'
import { InitialState } from '../../redux/store/store'


// interface Props {
//   switchTheme: () => void
// }

const Header = ({switchTheme}:Props) => {

  console.log(switchTheme)

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

const mapStateToProps = (state: InitialState) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch: Dispatch<actionCreators.SwitchThemeAction>) => {
  return bindActionCreators(actionCreators, dispatch)
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(Header)
