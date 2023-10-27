import React, { useEffect, useState } from 'react'

const Index1 = () => {

        const [name,setName]=useState('')
        const [value,setValue]=useState('pramod bhoi')

        useEffect(()=>{
            document.title=`${name}`
        })

  return (
    <div>
          <input type="text"onChange={(e)=>setName(e.target.value)} />
      <h1>My Name is {name}</h1>
      <button onClick={()=>setValue(value)}>click</button>
    
    </div>
  )
}

export default Index1
