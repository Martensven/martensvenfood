import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Router>

      </Router>
    </>
  )
}

export default App
