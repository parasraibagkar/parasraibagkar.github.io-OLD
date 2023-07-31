import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import addNotification from 'react-push-notification'

function App() {
  const [currentTime, setCurrentTime] = useState("")
  const [alarmTime, setAlarmTime] = useState({morning:null, evening:null})

  useEffect(() => {
    var clock = setInterval(() => handleCurrentTime(),
      1000
    )
  
    return () => {
      clearInterval(clock)
    }
  }, [])
  
  useEffect(() => {
    if(currentTime === "9:00:00 PM" || currentTime === "11:00:00 AM") {
      addNotification({
        title: 'Call Mansi',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
    } 
  
  }, [currentTime])
  
 
  

  function handleCurrentTime(){
    setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: true }));
  }
  
  return (
    <>
    <h3>current time: {currentTime}</h3>
      
    </>
  )
}

export default App
