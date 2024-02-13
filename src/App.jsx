import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hello, setCount] = useState(0)

  return (
    <>
      <div className="count">the hello is {hello} </div>
      <button onClick={()=>{setCount(hello-1)}}> click</button>
    </>
  )
}

export default App
