import React, { useState } from 'react'
import AddTaskModal from './AddTaskModal'

export default function BottomBar({
  showBottomBar,
  currentTask,
  tasks,
  openModal,
  setTasks,
  setOpenModal,
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
        item.id === currentTask
          ? { ...item, sets: item.initialSets, completed: false }
          : item
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
          onClick={() => setOpenModal(true)}
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
        {openModal && (
          <AddTaskModal
            closeModal={setOpenModal}
            setTasks={setTasks}
            tasks={tasks}
          />
        )}
      </div>
    </div>
  )
}
