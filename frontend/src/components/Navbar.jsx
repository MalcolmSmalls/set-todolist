import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar((prevSidebar) => !prevSidebar)
  }
  return (
    <>
      <div className='p-5 text-2xl'>
        <Link to='#' onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={sidebar ? 'inline' : 'hidden'}>
        <ul>
          <Link to='#' onClick={showSidebar}>
            <AiIcons.AiOutlineClose />
          </Link>
        </ul>
      </nav>
    </>
  )
}
