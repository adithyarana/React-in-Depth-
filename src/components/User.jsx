import React from 'react'
import { useState } from 'react'
const User = (props) => {

  const[count, setcount] = useState(0)
    const {name,location} = props
  return (
    <div className='card'>
        <h2>Name:{name}</h2>
        <h3>Loacation:{location}</h3>
        <h4>Contact:adi@gmail.com</h4>
        <button onClick={()=>setcount(count+1)}>count:{count}</button>
    </div>
  )
}

export default User