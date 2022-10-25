import React from 'react'
import './ActivityCard.css'
import ellipsis from '../images/icon-ellipsis.svg'

const ActivityCard = (props) => {
  return (
    <div 
      className="card" 
      style={{backgroundColor: props.bgColor, backgroundImage: `url(${props.img})`}}
    >
      <div className="activity-container">
        <div className="header">
          <header>{props.title}</header>
          <img src={ellipsis} alt='ellipsis' />
        </div>
      </div>
    </div>
  )
}

export default ActivityCard