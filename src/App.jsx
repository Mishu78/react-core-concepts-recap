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
      <li>Jsx</li>
      <li>Props</li>
      <li>Event Handler</li>
      <li>State</li>
      <li>Load data</li>
    </ol>
    <Posts></Posts>
    </>
  )
}

export default App
