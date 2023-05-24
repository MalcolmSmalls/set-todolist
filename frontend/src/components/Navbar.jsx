import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import useComponentVisible from '../hooks/useComponentVisible'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const { ref, isComponentVisible } = useComponentVisible(true)

  const showSidebar = (boolean) => {
    setSidebar((prevSidebar) => !prevSidebar)
  }

  return (
    <div className='w-60' ref={ref}>
      <div className='p-5 text-2xl'>
        <Link to='#' onClick={() => setSidebar(true)}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav
        className={
          sidebar && isComponentVisible
            ? 'left-0 fixed  duration-300'
            : 'left-[-100%] fixed  duration-700'
        }
      >
        <ul className='bg-gray-950 h-screen w-60 flex pt-10  flex-col fixed top-0'>
          <li className='p-3 text-2xl w-full'>
            <Link to='#' onClick={() => setSidebar(false)}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className='text-white flex h-10 hover:bg-indigo-500 w-[95%] rounded p-3'
              >
                <Link
                  to={item.path}
                  className='flex items-center gap-2'
                  onClick={showSidebar}
                >
                  <div>{item.icon}</div>
                  <div>{item.title}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
