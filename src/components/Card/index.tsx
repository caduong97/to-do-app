import React from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'
import { Typography } from '@material-ui/core'
import './styles.scss'
import CardIcon from './CardIcon'
// import ToDoItem from '../ToDoItem'

interface Props  {
  label: string
  status: string
  theme: any
  children: any
}

const Card: React.FC<Props> = ({label, status, theme, children}) => {
  // console.log("theme logged from card component", theme)
  var isAddLabel = (label === "add item") ? true : false

  const cardHeaderClass = classNames(
    {'card__header': true},
    {'card__header--no-border': isAddLabel}
  )

  return (
    <div className="card">
        <div className={cardHeaderClass} >
          <CardIcon status={status}/>
          <Typography variant="h6">{label}</Typography>
        </div>
        
        {children}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme
  }
}


export default connect(mapStateToProps)(Card)