import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <Link to='#'>
        <FaIcons.FaBars />
      </Link>
    </>
  )
}
