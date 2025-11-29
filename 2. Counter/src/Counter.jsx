import React, { useEffect, useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="counter-container">
      <div className="counter-display">
        <h1>{counter}</h1>
      </div>
      <div className="button-group">
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <div className="time-display">
        <h3>Current Time</h3>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

export default Counter