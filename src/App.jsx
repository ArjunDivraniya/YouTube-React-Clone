import { useState } from 'react'


import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import MainScreen from './Components/MainScreen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <div className="div">
     <Sidebar/>
     <MainScreen/>
     </div>
    </>
  )
}

export default App
