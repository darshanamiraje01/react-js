import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  
  //useRef Hook
  const passwordRef = useRef(null) //We can take reference of any element on the webpage

  //useCallback(fun, dependencies)
  const passwordGenerator = useCallback(() => {     //useCallback is used to memorize and optimize the function, if setPassword, numberAllow, charAllow changes then it helps to keep it in the cache(memory). Only dependancies changes are optimized in this method.
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) string += "0123456789"
    if(charAllow) string += "!@#$%^&*()_-+={}[]\|?/<>*"

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)}, [password])

  useEffect(() => {passwordGenerator()}, [length, numberAllow, charAllow, passwordGenerator]) //Here if anything happens to the dependencies re-run it
  
  return (
    
      <div className='w-full max-w-md px-4 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md'>
        <h1 className='my-3 text-center text-white'>Password Generator</h1>
        <div className='flex mb-4 overflow-hidden bg-white rounded-lg'>
          <input type='text' value={password} className='w-full px-3 py-1 outline-none' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button> 
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' 
            defaultChecked={numberAllow} id='numberInput' onChange={() => {setNumberAllow((prev) => !prev);
              }} 
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllow} id='characterInput' onChange={() => {setCharAllow((prev) => !prev);
              }}
           />
           <label>Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
