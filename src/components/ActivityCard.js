import React from 'react'
import './ActivityCard.css'

const ActivityCard = (props) => {
  return (
    <div 
      className="card" 
      style={{backgroundColor: props.bgColor, backgroundImage: `url(${props.img})`}}
    >
      <div className="activity-container" />
    </div>
  )
}

export default ActivityCard