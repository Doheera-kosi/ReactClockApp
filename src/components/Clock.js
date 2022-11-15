import React, { useState } from 'react'

function Clock() {
  // Creating State Hooks to maintain date and time
  const [currentDateTime, secCurrentDateTime] = useState(new Date())

  // Time and Date for every second
  setInterval(() => secCurrentDateTime(new Date()), 1000);

  // Rendering Clock component
  return (
    <div>
      <h1>React Hooks Clock App</h1>
      <p>
        The current iem is {currentDateTime.toString()}
      </p>
    </div>
  )
}

export default Clock;