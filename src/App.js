import { useState, useEffect } from 'react'
import './App.css'
import ActivityCard from './components/ActivityCard'
import exerciseIcon from './images/icon-exercise.svg'
import playIcon from './images/icon-play.svg'
import workIcon from './images/icon-work.svg'
import selfCareIcon from './images/icon-self-care.svg'
import socialIcon from './images/icon-social.svg'
import studyIcon from './images/icon-study.svg'
import userImg from './images/image-jeremy.png'

function App() {

  const Timeframe = {
    Daily: 'daily',
    Weekly: 'weekly',
    Monthly: 'monthly',
  }

  const ActivityStyle = {
    'Work': {
      color: 'hsl(15, 100%, 70%)',
      icon: workIcon,
    },
    'Play': {
      color: 'hsl(195, 74%, 62%)',
      icon: playIcon,
    },
    'Study': {
      color: 'hsl(348, 100%, 68%)',
      icon: studyIcon,
    },
    'Exercise': {
      color: 'hsl(145, 58%, 55%)',
      icon: exerciseIcon,
    },
    'Social': {
      color: 'hsl(264, 64%, 52%)',
      icon: socialIcon,
    },
    'Self Care': {
      color: 'hsl(43, 84%, 65%)',
      icon: selfCareIcon,
    },
  }

  const [ timeframe, setTimeframe ] = useState(Timeframe.Daily)
  const [ data, setData ] = useState([])

  const updateTimeframe = (timeframe) => {
    setTimeframe(timeframe)
  }

  const getData = async () => {
    const response = await fetch('data.json')
    const result = await response.json()
    setData(result)
  } 

  useEffect(() => {
    getData()
  }, [])

  const activityDetails = data.map((activity, idx) => {
    return {
      ...activity,
      ...ActivityStyle[activity.title],
      id: idx,
    }
  })

  return (
    <div className="app">
      <div className="app-header">
        <section className='panel'>
          <div className="profile-card">
            <img src={userImg} alt="user" className="user-img" />
            <p className='report'>Report for</p>
            <header className='user-name'>Jeremy Robson</header>
          </div>
          <div className='tabs'>
            <li className='tab' onClick={(e) => updateTimeframe(Timeframe.Daily)}>Daily</li>
            <li className='tab' onClick={(e) => updateTimeframe(Timeframe.Weekly)}>Weekly</li>
            <li className='tab' onClick={(e) => updateTimeframe(Timeframe.Monthly)}>Monthly</li>
          </div>
        </section>
        {activityDetails.map(val => {
          return (
            <ActivityCard
              key={val.id}
              bgColor={val.color}
              img={val.icon}
              title={val.title}
              hours={val.timeframes[timeframe]}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
