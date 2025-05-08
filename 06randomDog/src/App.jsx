import { useState } from 'react'
import Counter from './component/counter.jsx'
import './App.css'
import DogViewer from './component/DogViewer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<DogViewer/>
    </>
  )
}

export default App
