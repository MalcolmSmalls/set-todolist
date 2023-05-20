import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export default function AddTaskModal({ closeModal, setTasks, tasks }) {
  const [newTask, setNewTask] = useState({ task: '', sets: '', time: '' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setNewTask((prevTask) => {
      return { ...prevTask, [name]: type === 'checkbox' ? checked : value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nanoid(),
        task: newTask.task,
        sets: newTask.sets,
        time: newTask.time,
        completed: false,
      },
    ])
    closeModal(false)
  }
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
        <form
          className='body pt-5 flex flex-col gap-5 w-1/2 items-center pb-5'
          onSubmit={handleSubmit}
        >
          <input
            placeholder='Task Name'
            className='w-full outline-0 rounded h-10 p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300 text-gray-900'
            name='task'
            onChange={handleChange}
            value={newTask.task}
          />
          <div className='flex gap-5'>
            <input
              placeholder='Sets'
              className='w-1/2 rounded h-10 p-2 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300 text-gray-900'
              name='sets'
              onChange={handleChange}
              value={newTask.sets}
            />
            <input
              placeholder='Minutes per set'
              className='w-1/2 rounded h-10 p-2 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300 text-gray-900'
              name='time'
              onChange={handleChange}
              value={newTask.time}
            />
          </div>
          <div className='footer'>
            <button className='bg-green-500 p-3 rounded-lg w-36 mr-5 hover:bg-green-600'>
              Add Task
            </button>
            <button
              type='button'
              className='bg-red-500 p-3 rounded-lg w-36  hover:bg-red-600'
              onClick={() => closeModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
