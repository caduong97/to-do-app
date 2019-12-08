import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import './styles.scss'
import CardIcon from './CardIcon'
// import ToDoItem from '../ToDoItem'



interface Props  {
  label: string
  status: string
}

const Card: React.FC<Props> = ({label, status, children}) => {
  return (
    <div>
      <Paper className="card">
        <div className="card__header" >
          <CardIcon status={status}/>
          <Typography variant="h6">{label}</Typography>
        </div>
        
        {children}
      </Paper>
    </div>
  )
}
export default Card