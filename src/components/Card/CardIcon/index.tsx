import React from 'react'
import './styles.scss'
import AssignmentIcon from '@material-ui/icons/Assignment'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import classNames from 'classnames'

interface Props {
  status: string
}

const CardIcon = ({status}: Props) => {

  let iconBackground
  let icon 
  switch (status) {
    case 'todo':
      iconBackground = 'blue'
      icon = <AssignmentIcon/>
      break;
    case 'doing':
      iconBackground = 'yellow'
      icon = <FormatListBulletedIcon/>
      break;
    case 'done':
      iconBackground = 'green'
      icon = <AssignmentTurnedInIcon/>
      break;
    default:
      iconBackground = 'blue'
      break;
  }

  const cardClass = classNames(
    {'card-icon': true},
    {[`card-icon--${iconBackground}`]: true}
  )
  return (
    <div className={cardClass}>
      {icon}
    </div>
  )
}

export default CardIcon
