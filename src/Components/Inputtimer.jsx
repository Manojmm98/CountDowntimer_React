import React from 'react'

const Inputtimer = ({handleChange,handleStart}) => {
  return (
    <div className='container'>
    <h1>Countdown Timer</h1>
    <div className="input-box">
      <input id='hours' placeholder='HH' onChange={handleChange} />
      <input id='minutes' placeholder='MM' onChange={handleChange} />
      <input id='seconds' placeholder='SS' onChange={handleChange} />
    </div>
    <button onClick={handleStart} className='start-button'>Start</button>
  </div>
  )
}

export default Inputtimer