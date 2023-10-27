import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
 const [name,setName]=useState(" ")
 const count = useRef(0)
 useEffect( ()=>{
    return  ()=>{
        count.current=count.current+1
    }
 })



  return (
    <div>
        <h1>useref</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <h1>my name is {name}</h1>
      <h1>count{count.current}</h1>

    </div>
  )
}

export default UseRef
