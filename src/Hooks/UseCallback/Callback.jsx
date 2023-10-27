import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const Callback = () => {
    const [count,setCount]=useState(0)
 const min = useCallback(()=>{
    setCount(count-1)
 })

  return (
    <div>
        <h1>Usecallback</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={min}>-</button>
    </div>
  )
}

export default Callback
