import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

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
      <nav
        className={
          sidebar
            ? 'left-0 fixed  duration-300'
            : 'left-[-100%] fixed  duration-700'
        }
      >
        <ul className='bg-gray-950 h-screen w-60 flex pt-10  flex-col fixed top-0'>
          <li className='p-3 text-2xl w-full'>
            <Link to='#' onClick={showSidebar}>
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
    </>
  )
}
