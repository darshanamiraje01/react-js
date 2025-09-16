import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-3'>
          <div className='flex flex-wrap justify-centergap-3 shadow-lg bg-white px-4 py-2 rounded-xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 rounded-md text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 rounded-md text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-md text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-md text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-md text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 rounded-md text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
            <button onClick={() => setColor("gray")} className='outline-none px-4 rounded-md text-white shadow-lg' style={{backgroundColor: "gray"}}>Gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
