import  { useEffect, useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

const DarkMode:React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(()=> {
    if(isDarkMode) {
    document.body.style.backgroundColor = "#1a202c";
    

    document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    }
  })

  return (
    <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
      className='absolute  top-0 right-0'
    />
  )
}

export default DarkMode;