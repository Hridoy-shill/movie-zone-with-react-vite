import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/HomePage/Home'

function App() {
  const [totalWatchTime, setTotalWatchTime] = useState('')
  // console.log(totalWatchTime);

  const handleClick = (time) =>{
    const previwesWatchTimr = JSON.parse(localStorage.getItem('watch-time'));

    if(previwesWatchTimr){
      const sum = previwesWatchTimr + time
      localStorage.setItem('watch-time', sum);
      setTotalWatchTime(sum)
    }
    else{
      localStorage.setItem('watch-time', time)
      setTotalWatchTime(time)
    }
    // localStorage.setItem('watch-time', time)
  }

  const [count, setCount] = useState(0)

  return (
    <div className="App p-5">
      <Header></Header>
      <Home handleClick={handleClick} totalWatchTime={totalWatchTime}></Home>
    </div>
  )
}

export default App
