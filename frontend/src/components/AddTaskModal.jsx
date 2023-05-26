import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

export default function AddTaskModal({
  closeModal,
  setTasks,
  editing,
  currentTask,
  tasks,
  setCurrentTask,
}) {
  const [newTask, setNewTask] = useState({
    task: '',
    sets: '',
    time: '',
    initialSets: '',
    initialTime: '',
  })
  const [warning, setWarning] = useState({
    noTask: false,
    noSets: false,
    noTime: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setNewTask((prevTask) => {
      return { ...prevTask, [name]: type === 'checkbox' ? checked : value }
    })
  }

  useEffect(() => {
    if (editing) {
      const currentTaskDetailed = tasks.filter(
        (item) => item.id === currentTask
      )
      setNewTask(currentTaskDetailed[0])
    }
  }, [editing])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask.task) {
      setWarning((prevWarning) => ({ ...prevWarning, noTask: false }))
    }
    if (newTask.sets) {
      setWarning((prevWarning) => ({ ...prevWarning, noSets: false }))
    }

    if (!newTask.task) {
      setWarning((prevWarning) => ({
        ...prevWarning,
        noTask: true,
      }))
    } else if (!newTask.sets) {
      setWarning((prevWarning) => ({
        ...prevWarning,
        noSets: true,
      }))
    }

    if (editing) {
      if ((newTask.task !== '' && newTask.sets !== '') || newTask.time !== '') {
        setTasks((prevTasks) =>
          prevTasks.map((item) => {
            return item.id === currentTask
              ? {
                  ...item,
                  task: newTask.task,
                  sets: newTask.sets,
                  time: newTask.time,
                  initialTime: newTask.time,
                  initialSets: newTask.sets,
                }
              : item
          })
        )
        closeModal(false)
      }
    } else if (!editing) {
      if ((newTask.task !== '' && newTask.sets !== '') || newTask.time !== '') {
        setTasks((prevTasks) => [
          ...prevTasks,
          {
            id: nanoid(),
            task: newTask.task,
            sets: newTask.sets,
            time: newTask.time,
            initialTime: newTask.time,
            initialSets: newTask.sets,
            completed: false,
          },
        ])
        closeModal(false)
      }
    }
  }

  const handleClose = () => {
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
          <h1 className='uppercase text-xl'>
            {editing ? 'Edit Task' : 'Add A Task'}
          </h1>
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
            value={editing ? newTask?.task : newTask.task}
          />
          {warning.noTask && (
            <span className='text-red-500 -mt-5'>Must include task name</span>
          )}
          <div className='flex gap-5'>
            <input
              type='number'
              placeholder='Sets'
              className='w-1/2 rounded h-10 p-2 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300 text-gray-900'
              name='sets'
              onChange={handleChange}
              value={editing ? newTask?.sets : newTask.sets}
            />
            <input
              type='number'
              placeholder='Minutes per set'
              className='w-1/2 rounded h-10 p-2 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-2 ring-inset ring-gray-300 text-gray-900'
              name='time'
              onChange={handleChange}
              value={editing ? newTask?.time : newTask.time}
            />
          </div>
          {warning.noSets && (
            <span className='text-red-500 -mt-5'>
              Must include number of sets
            </span>
          )}
          <div className='footer'>
            <button className='bg-green-500 p-3 rounded-lg w-36 mr-5 hover:bg-green-600'>
              {editing ? 'Edit' : 'Add'} Task
            </button>
            <button
              type='button'
              className='bg-red-500 p-3 rounded-lg w-36  hover:bg-red-600'
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
