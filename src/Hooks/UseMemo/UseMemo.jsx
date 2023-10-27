import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0)
const power = () =>{
    return count**2
}

const memo= useMemo(()=> 
    power(count)
    
)

  return (
    <div>
        <h1>usememo</h1>
      <h1>Count:{count}</h1>
      <h1>Power:{memo}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default UseMemo
