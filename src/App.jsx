import React, { useState } from 'react'

const App = () => {
  const [bgColor,setBgColor] = useState("bg-white")
  return (
    <>
    <div className={`${bgColor} flex gap-[80px] h-screen items-center justify-center`}>
      <button onClick={() => setBgColor("bg-red-400")} className='px-8 py-4 shadow-xl rounded-xl bg-red-600'>Red</button>
      <button onClick={() => setBgColor("bg-blue-400")} className='px-8 py-4 shadow-xl rounded-xl bg-blue-600'>Blue</button>
      <button onClick={() => setBgColor("bg-green-400")} className='px-8 py-4 shadow-xl rounded-xl bg-green-600'>Green</button>
    </div>
    </>
  )
}

export default App