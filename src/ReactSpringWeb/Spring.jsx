import React from 'react'
import { Parallax, Background } from 'react-parallax';

const Spring = () => {
  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={""}
    bgImageAlt="the dog"
    strength={-200}
>
      <div className="mainapp">
        <nav className='navbar'>
          <div className="logo">
            WWW
          </div>
          <div>Products</div>
         <div className="dropdown">
          <select name="MarketPlace" id="">
            <option value="">Delhi</option>
          </select>
         </div>

        </nav>
      </div>
    <div style={{ height: '600px' }} />
</Parallax>
  )
}

export default Spring
