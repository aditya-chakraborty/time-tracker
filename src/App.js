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
  // const data = fetch('data.json')
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
            <li className='tab'>Daily</li>
            <li className='tab'>Weekly</li>
            <li className='tab'>Monthly</li>
          </div>
        </section>
        {[{
          id: 1,
          title: 'Work',
          bgColor: 'hsl(15, 100%, 70%)',
          icon: workIcon,
        },
        {
          id: 2,
          title: 'Play',
          bgColor: 'hsl(195, 74%, 62%)',
          icon: playIcon,
        },
        {
          id: 3,
          title: 'Study',
          bgColor: 'hsl(348, 100%, 68%)',
          icon: studyIcon,
        },
        {
          id: 4,
          title: 'Exercise',
          bgColor: 'hsl(145, 58%, 55%)',
          icon: exerciseIcon,
        },
        {
          id: 5,
          title: 'Social',
          bgColor: 'hsl(264, 64%, 52%)',
          icon: socialIcon,
        },
        {
          id: 6,
          title: 'Self Care',
          bgColor: 'hsl(43, 84%, 65%)',
          icon: selfCareIcon,
        },
    ].map(val => {
          return (
            <ActivityCard
              key={val.id}
              bgColor={val.bgColor}
              img={val.icon}
              title={val.title}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
