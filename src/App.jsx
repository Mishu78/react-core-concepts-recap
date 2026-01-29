import { useState } from 'react'
import './App.css'
import Posts from './posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <h3>React core concepts</h3>
    <ol>
      <li>Components</li>
      <li>Components</li>
    </ol>
    <Posts></Posts>
      

    </>
  )
}

export default App
