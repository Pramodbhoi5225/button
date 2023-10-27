import React, { useState } from 'react'

const Open = () => {

const [open,setOpen]=useState(false)

  return (
    <div>

        <button style={{color:'white'}} onClick={()=>setOpen(!open)}>open</button>
        {
            open && (
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit odio corporis blanditiis voluptatem est, delectus consequuntur nemo itaque? Eum hic cum laborum incidunt odio numquam consequatur delectus excepturi repellendus.</p>
                    <button style={{color:'white'}} onClick={()=>setOpen(!open)}>closed</button>
                </div>
            )
        }
    </div>
  )
}

export default Open
