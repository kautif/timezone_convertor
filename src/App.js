import './App.css';
import Timezones from './components/Timezones/Timezones';

function App() {
  return (
    <div className="App">
      <h1 className="timezones__heading">Compare Timezones</h1>
      <p className="timezones__desc">In this application, you'll select a timezone on the left. This is considered YOUR timezone. 
        Then, you will select a timezone on the right. 
        Between the two timezones, you will be told how many hours your timezone is ahead or behind.</p>
      <p className="timezones__desc">The times do not update automatically. They only update upon selecting a timezone.</p>
      <Timezones />
    </div>
  );
}

export default App;
