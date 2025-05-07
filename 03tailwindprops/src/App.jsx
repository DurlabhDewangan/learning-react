import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"sandiago",
    age:20
  }

  let newArr = [1,2,3]

  return (
    <>
 <Card userName="Durlabh Dewangan" title ="Cadbury Dairy Milk Ad Song – Kiss Me" des="Kiss me
Close your eyes and miss me
Close your eyes and kiss me
I can read your lips on your fingertips
I can feel your smile
Come on and hold me tight
Come on and hold me tight now
Let’s pretend the moment’s right

Kiss me
Close your eyes and miss me
Close your eyes and kiss me
I can read your lips on your fingertips
I can feel your smile
Come on and hold me tight
Come on and hold me tight now
Let’s pretend the moment’s right
Love... "/>
 <Card userName="meow" title ="meow-meow Song" des="Kiss me
Close your eyes and miss me
Close your eyes and kiss me
I can read your lips on your fingertips
I can feel your smile
Come on and hold me tight
Come on and hold me tight now
Let’s pretend the moment’s right

Kiss me
Close your eyes and miss me
Close your eyes and kiss me
I can read your lips on your fingertips
I can feel your smile
Come on and hold me tight
Come on and hold me tight now
Let’s pretend the moment’s right
Love... "/>
    </>
  )
}

export default App
