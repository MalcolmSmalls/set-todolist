import React from 'react'

export default function AddTaskModal({ closeModal }) {
  return (
    <div className='backgroundBlur bg-black/50 w-[100vw] h-[100vh] fixed top-0 flex justify-center items-center backdrop-blur-sm'>
      <div className='modalContainer bg-gray-900 w-1/2 h-96 flex flex-col items-center rounded-lg gap-5 shadow-2xl'>
        <div className='ml-auto pt-3 pr-4'>
          <button onClick={() => closeModal(false)}>
            <i className='fas fa-xmark text-3xl'></i>
          </button>
        </div>
        <div className='title'>
          <h1 className='uppercase text-xl'>Add A Task</h1>
        </div>
        <div className='body pt-5 flex flex-col gap-5 w-1/2 items-center pb-5'>
          <input
            placeHolder='Task Name'
            className='w-full outline-0 rounded h-10 p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300'
          />
          <div className='flex gap-5'>
            <input
              placeHolder='Sets'
              className='w-1/2 rounded h-10 p-2 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300'
            />
            <input
              placeHolder='Minutes per set'
              className='w-1/2 rounded h-10 p-2 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300'
            />
          </div>
        </div>
        <div className='footer'>
          <button
            className='bg-red-500 p-3 rounded-lg w-36 mr-5 hover:bg-red-600'
            onClick={() => closeModal(false)}
          >
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
