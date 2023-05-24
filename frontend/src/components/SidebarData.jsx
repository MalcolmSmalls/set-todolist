import React from 'react'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Log-In',
    path: '/login',
    icon: <BiIcons.BiLogIn />,
  },
  {
    title: 'Sign-Up',
    path: '/signup',
    icon: <MdIcons.MdAccountBox />,
  },
  {
    title: 'Create new task list',
    path: '/newtasklist',
    icon: <IoIcons.IoIosAddCircleOutline />,
  },
]
