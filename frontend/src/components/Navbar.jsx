import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='p-5 text-2xl'>
      <Link to='#'>
        <FaIcons.FaBars />
      </Link>
    </div>
  )
}
