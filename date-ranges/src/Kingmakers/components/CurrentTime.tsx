import React, { useEffect, useState } from 'react'
import {
  Font,
} from ".."
const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timerID)
    }
  }, [])
  return <Font variant="giant" color="white">
            {currentTime.toLocaleTimeString()}
          </Font>
}

export default CurrentTime
