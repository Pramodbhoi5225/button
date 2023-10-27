import React, { useState } from 'react'
import Countries from './StateData'
import './FetchApi.css'
const FetchState = () => {

const [data,setData]= useState([])

function handleClick(e){
    setData(Countries.find((item)=>item.name===e.target.value).states)
}

  return (
    <div>
      <section>
        {
            data.map((item)=>{
                return(
                    <select key={item.name} name={item.name} id="" onClick={handleClick}>
                        <option value={item.name}>{item.name}</option>
                    </select>
                )
            })
        }
      </section>
      <section>
        {
            Countries.map((item)=>{
                return(
                    <select key={item.name} name={item.name} id="" onClick={handleClick}>select state
                        <option value={item.name}>{item.name}</option>
                    </select>
                )
            })
        }
      </section>

      
    </div>
  )
}

export default FetchState
