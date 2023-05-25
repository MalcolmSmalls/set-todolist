import React, { useState } from 'react'

export default function BottomBar({
  showBottomBar,
  currentTask,
  tasks,
  setTasks,
}) {
  const buttonStyle = {
    textTransform: 'uppercase',
    padding: '0.5rem',
    borderWidth: '1px',
    borderRadius: '0.5rem',
    fontSize: '0.75rem',

    // className=' text-xs hover:bg-indigo-500
    //           hover:border-indigo-500
    //            hover:text-white
  }

  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== currentTask))
  }

  const handleReset = () => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === currentTask ? { ...item, sets: item.initialSets } : item
      )
    )
  }
  return (
    <div
      className={
        showBottomBar
          ? 'bottom-0 fixed  duration-300 w-full'
          : 'bottom-[-100%] fixed  duration-700 w-full'
      }
    >
      <div className='bg-gray-950 h-14 flex justify-center gap-5 items-center w-full'>
        {tasks.map((item) => {
          if (item.id === currentTask) {
            return (
              <div>
                <span className='pr-2 text-indigo-500'>Task Name:</span>
                {item.task}
              </div>
            )
          }
        })}
        <button
          style={buttonStyle}
          className='hover:bg-indigo-500 hover:border-indigo-500 hover:text-white'
          onClick={handleDelete}
        >
          Delete Task
        </button>
        <button
          style={buttonStyle}
          className='hover:bg-indigo-500 hover:border-indigo-500 hover:text-white'
        >
          Edit Task
        </button>
        <button
          style={buttonStyle}
          className='hover:bg-indigo-500 hover:border-indigo-500 hover:text-white'
          onClick={handleReset}
        >
          Reset Sets
        </button>
      </div>
    </div>
  )
}
