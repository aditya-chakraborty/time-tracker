import './App.css'
import ActivityCard from './components/ActivityCard'
import exerciseIcon from './images/icon-exercise.svg'
import playIcon from './images/icon-play.svg'
import workIcon from './images/icon-work.svg'
import selfCareIcon from './images/icon-self-care.svg'
import socialIcon from './images/icon-social.svg'
import studyIcon from './images/icon-study.svg'

function App() {
  // const data = fetch('data.json')
  return (
    <div className="app">
      <div className="app-header">
        {[{
          id: 1,
          bgColor: 'hsl(15, 100%, 70%)',
          icon: workIcon,
        },
      {
        id: 2,
        bgColor: 'hsl(195, 74%, 62%)',
        icon: playIcon,
      },
      {
        id: 3,
        bgColor: 'hsl(348, 100%, 68%)',
        icon: studyIcon,
      },
      {
        id: 4,
        bgColor: 'hsl(145, 58%, 55%)',
        icon: exerciseIcon,
      },
      {
        id: 5,
        bgColor: 'hsl(264, 64%, 52%)',
        icon: socialIcon,
      },
      {
        id: 6,
        bgColor: 'hsl(43, 84%, 65%)',
        icon: selfCareIcon,
      },
    ].map(val => {
          return (
            <ActivityCard key={val.id} bgColor={val.bgColor} img={val.icon} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
