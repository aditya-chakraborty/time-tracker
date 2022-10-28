import React from 'react'
import './ActivityCard.css'
import ellipsis from '../images/icon-ellipsis.svg'

const ActivityCard = (props) => {
  const Timeperiod = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month',
  }
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
        <section className="time-display">
          <header className="time__current">
            {props.hours.current}hrs
          </header>
          <p className="time__prev">
            {Timeperiod[props.timeframe]} - {props.hours.previous}hrs
          </p>
        </section>
      </div>
    </div>
  )
}

export default ActivityCard