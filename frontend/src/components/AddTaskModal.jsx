import React from 'react'

export default function AddTaskModal() {
  return (
    <div className='backgroundBlur'>
      <div className='modalContainer bg-gray-900 w-[800px] h-96 flex flex-col items-center rounded-lg gap-5'>
        <button className='ml-auto pt-3 pr-4'>
          <i className='fas fa-xmark text-3xl'></i>
        </button>
        <div className='title'>
          <h1 className='uppercase text-xl'>Add A Task</h1>
        </div>
        <div className='body border-2 w-full pt-5'>
          <input placeHolder='Task Name' />
          <div>
            <input placeHolder='Sets' />
            <input placeHolder='Time per set' />
          </div>
        </div>
        <div className='footer'>
          <button className='bg-red-500 p-3 rounded-lg w-36 mr-5 hover:bg-red-600'>
            Cancel
          </button>
          <button className='bg-green-500 p-3 rounded-lg w-36 hover:bg-green-600'>
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}
