import React from 'react'

const ShowTimer = ({hour,minute,second,paused,handlePause,handleReset,handleResume}) => {
  return (
    <div className='timer-container'>
          <div className="timer-box">
            <div>{hour < 10 ? `0${hour}` : hour}</div>
            <span>:</span>
            <div>{minute < 10 ? `0${minute}` : minute}</div>
            <span>:</span>
            <div>{second < 10 ? `0${second}` : second}</div>
          </div>
          <div className="button-container">
            {paused && <button className='resume-button' onClick={handleResume}>Resume</button>
            }
            {!paused && <button className='pause-button' onClick={handlePause}>Pause</button>
            }             
             <button className='reset-button' onClick={handleReset}>Reset</button>
    
          </div>
        </div>
  )
}

export default ShowTimer