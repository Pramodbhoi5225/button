import React, { useEffect, useState } from 'react'

const Index = () => {
    const [count,setCount]=useState(0)
   
    useEffect(()=>{
        document.title=`${count}`
        
    },[count])


  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Index
