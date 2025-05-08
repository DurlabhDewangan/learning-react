import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
    setCopied(false)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Password Generator</h1>
        
        <div className="flex rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className={`px-4 py-3 font-medium text-white rounded-r-lg transition-colors ${
              copied ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-sm font-medium text-gray-700">
              Length: {length}
            </label>
            <input
              type="range"
              id="length"
              min={6}
              max={100}
              value={length}
              className="w-3/5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numberInput"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="numberInput" className="ml-2 text-sm text-gray-700">
                Include Numbers
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="charInput"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="charInput" className="ml-2 text-sm text-gray-700">
                Include Special Characters
              </label>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center">
          <p>Password strength: {length >= 12 ? 'Strong' : length >= 8 ? 'Medium' : 'Weak'}</p>
        </div>
      </div>
    </div>
  )
}

export default App