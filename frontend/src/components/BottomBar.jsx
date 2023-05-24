import React, { useState } from 'react'

export default function BottomBar({ showBottomBar }) {
  return (
    <div
      className={
        showBottomBar
          ? 'bottom-0 fixed  duration-300 w-full'
          : 'bottom-[-100%] fixed  duration-700 w-full'
      }
    >
      <div className='bg-gray-950 h-14 flex justify-center items-center w-full'>
        hey
      </div>
    </div>
  )
}
