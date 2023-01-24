import {useState} from 'react';
import './App.css';
import CountDown from './components/CountDown';
import Reloj from './components/Reloj';
import Fecha from './components/Fecha';
// import Countdown from 'react-countdown';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  return (
    <main className="App">
      <CountDown />
      {/* <Reloj time={time} setTime={setTime} /> */}
      {/* <Fecha time={time} /> */}
    </main>
  );
}

export default App;
