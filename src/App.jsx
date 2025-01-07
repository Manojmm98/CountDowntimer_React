import { useState, useEffect } from 'react'
import './App.css'
import Inputtimer from './Components/Inputtimer';
import ShowTimer from './Components/ShowTimer';

function App() {
  const [start, setstart] = useState(false);
  const [paused, setpaused] = useState(false);
  const [hour, sethour] = useState(0);
  const [minute, setminute] = useState(0);
  const [second, setsecond] = useState(0);
  const [timerId, setTimerId] = useState(0);


  const handleStart = () => {
    if (hour < 0 || minute < 0 || second <= 0) {
      alert('Kindly Input some valid value');
      return;
    }
    setstart(true);
    setpaused(false);
  }

  const resetTimer = ()=>{
    setstart(false);
    sethour(0);
    setminute(0);
    setsecond(0);
    clearInterval(timerId);
  }

  const handleReset = () => {
    resetTimer();
  }

  const handleChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === 'hours') {
      sethour(value)
    }
    else if (id === 'minutes') {
      setminute(value)
    }
    else {
      setsecond(value);
    }
  }

  const handleResume = () => {
    setpaused(false);
    runTimer(hour, minute, second);
  }

  const handlePause = () => {
    setpaused(true);
    clearInterval(timerId);
  }

  // timer logic
  const runTimer = (hr, min, sec, tid) => {
    // if second  >0 have some value then decrease second by 1
    if (sec > 0) {
      setsecond((s) => s - 1);
    }
    // when second is 0 and minute >1 in that case make sec 59 & decease min by 1
    else if (sec === 0 && min > 0) {
      setminute((m) => m - 1);
      setsecond(59);
    }
    // when hour > 1 and min become then decrease the hour by 1 and make second 59 & minute also 59
    else if (min === 0 && hr > 0) {
      sethour((h) => h - 1);
      setminute(59);
      setsecond(59);
    }

    if (hour === 0 && minute === 0 && second === 0) {
      resetTimer();
      alert('Timer is Finished');
      clearInterval(tid);
      return;
    }

  }

  useEffect(() => {
    let tid;
    if (start) {
      tid = setInterval(() => {
        runTimer(hour, minute, second)
      }, 1000)
      setTimerId(tid)
    }
    return () => {
      clearInterval(tid);
    }
  }, [start, hour, minute, second])

  return (
    <>
      {!start && (
       <Inputtimer handleChange={handleChange} handleStart={handleStart}/>
      )
      }
      {start && (
        <ShowTimer hour={hour} minute={minute} second={second} paused={paused}
        handlePause={handlePause} handleReset={handleReset} handleResume={handleResume}/>
      )
      }
    </>
  )
}

export default App
