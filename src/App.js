import logo from './logo.svg';
import './App.css';
import ActivityCard from './components/ActivityCard';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        {[1,2,3,4,5, 6].map(val => {
          return <ActivityCard />
        })}
      </div>
    </div>
  );
}

export default App;
