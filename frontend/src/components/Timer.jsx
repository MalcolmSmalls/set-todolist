import React, { useState, useRef, useEffect } from 'react'

export default function Timer({ setOpenTimer }) {
  const [timer, setTimer] = useState('00:00:00')
  return (
    <div className='backgroundBlur bg-black/50 w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm'>
      <div className='modalContainer bg-gray-900 w-1/2 h-96 flex flex-col items-center rounded-lg gap-5 shadow-2xl'>
        <div className='ml-auto pt-3 pr-4'>
          <button onClick={() => setOpenTimer(false)}>
            <i className='fas fa-xmark text-3xl'></i>
          </button>
        </div>
        <div className='title'>
          <h1 className='uppercase text-xl'>Timer</h1>
        </div>

        <div className='footer'>
          <button className='bg-green-500 p-3 rounded-lg w-36 mr-5 hover:bg-green-600'>
            Reset
          </button>
          <button
            type='button'
            className='bg-red-500 p-3 rounded-lg w-36  hover:bg-red-600'
            onClick={() => setOpenTimer(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
