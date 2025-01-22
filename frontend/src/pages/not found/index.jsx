import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='cont-2'>
      <h1 style={{textAlign:"center"}}>404 ERROR</h1>
      <h1 style={{textAlign:"center"}}>UNFORTUNATELY THIS PAGE DOES NOT EXIST</h1>
      <NavLink to="/">Go Back</NavLink>
    </div>
  )
}

export default NotFound
