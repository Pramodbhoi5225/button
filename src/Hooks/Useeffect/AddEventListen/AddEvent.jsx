import React, { useEffect } from 'react'

const AddEvent = () => {

    useEffect(()=>{
        let a=document.getElementById("btn1")
        a.addEventListener("click",()=>{
            window.print(a)
        })
    })
  return (
    <div>
      <button id='btn1'>Click</button>
    </div>
  )
}

export default AddEvent
