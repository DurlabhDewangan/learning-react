import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const[password,setPassword] = useState("")

  //useref hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for (let index = 1; index <= length; index++) {
     let char = Math.floor(Math.random()*str.length + 1)
     pass += str.charAt(char);
      
    }

    setPassword(pass)

  } , [length,numberAllowed,charAllowed,setPassword])


  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password]
)

useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
    <h1> passwordGenerator</h1>
<div className='w-[50vw] h-[20vh] ml-23
 shadow-md rounded-lg  text-red-600 bg-gray-800'><div className='flex shodow rounded-lg overflow-hidden mb-4'>
  <input type="text
  " value={password} 
  className='ouline-none w-full py-1 px-3
  ' placeholder='password'
  readOnly
  ref={passwordRef}/>
<button onClick={copyPasswordToClipboard}  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition duration-200">
  Copy
</button>

  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" 
      name='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) =>{setLength(e.target.value)}}/>
      
      <label htmlFor="">length:{length}</label>
    </div>
    <div>
      <input type="checkbox"
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{
        setNumberAllowed((prev) => !prev);
      }} />

      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div>
      <input type="checkbox"
      defaultChecked={charAllowed}
      id='charInput'
      onChange={()=>{
        setCharAllowed((prev) => !prev);
      }} />

      <label htmlFor="numberInput">Characters</label>
    </div>
  </div>
  </div>
    </>
  )
}

export default App
