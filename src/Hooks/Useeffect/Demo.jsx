import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    // const [count ,setCount] = useState(0)
    const [name,setName]= useState('')

    // useEffect(()=>{
    //     document.title=`${count}`
    //     console.log('hello');
    // })
 




  return (
    <div>
{/* 
        <h1>Use Effect</h1>
      <h1>{count}</h1> */}
      {/* <button onClick={()=>setCount(count+1)}>count</button> */}

      <button onClick={()=>setName("pramod bhoi")}>Clickhandle</button>
      <p>{`name:${name}`}</p>
    </div>
  )
}

export default UseEffect

