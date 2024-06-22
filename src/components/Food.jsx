import React from 'react'
import { NavLink } from 'react-router-dom'

const Food = () => {
  return (
    <div>
       <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/monday" ><p> monday</p></NavLink>
    </div>
  )
}

export default Food
