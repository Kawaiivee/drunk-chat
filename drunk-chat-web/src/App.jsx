import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allisan from './components/Allisan'
import Jacky from './components/Jacky'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Allisan />
      <Jacky />
    </>
  )
}

export default App
