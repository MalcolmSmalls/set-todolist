import React, { useState, useEffect, useRef } from 'react'
import useComponentVisible from '../hooks/useComponentVisible'

export default function TaskList({ tasks, setTasks }) {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [currentTask, setCurrentTask] = useState('')
  const [showCompleted, setShowCompleted] = useState(false)
  const { ref, isComponentVisible } = useComponentVisible(true)

  const dragStart = (e, position) => {
    dragItem.current = position
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
  }

  const drop = (e) => {
    const copyListItems = [...tasks]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setTasks(copyListItems)
  }

  const minusSet = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((item) => {
        if (item.id === id) {
          if (item.sets === 1) {
            return { ...item, sets: item.sets - 1, completed: true }
          } else {
            return { ...item, sets: item.sets - 1 }
          }
        } else {
          return item
        }
      })
    })
  }

  return (
    <div
      ref={ref}
      className='bg-gray-900 text-gray-300 w-1/2 h-50 rounded-lg shadow-lg h-fit mb-20'
    >
      <button
        className='h-10 flex justify-center w-full hover:bg-gray-950 items-center uppercase rounded-lg hover:text-white font-bold '
        onClick={() =>
          setShowCompleted((prevShowCompleted) => !prevShowCompleted)
        }
      >
        {showCompleted ? 'Show Tasks' : 'Show Completed'}
      </button>
      {tasks.length > 0
        ? tasks.map((item, index) =>
            item.completed === showCompleted ? (
              <div
                key={item.id}
                className={`hover:cursor-pointer border-b border-b-gray-200/10 border-b-1 ${
                  item.id === currentTask && isComponentVisible
                    ? 'bg-gray-950'
                    : 'bg-gray-900'
                }`}
                onClick={() => setCurrentTask(item.id)}
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
              >
                <li className='list-none p-3 text-sm flex gap-4 items-center justify-center w-full'>
                  <div className='ml-5 rounded-full border-2 w-5 h-5'></div>
                  <div className='w-fit'>
                    {item.task}
                    <span className='text-indigo-500 text-xs'>
                      {' '}
                      {!item.completed ? (
                        <span className='font-bold'>
                          x {item.sets} {item.sets > 1 ? 'sets' : 'set'}
                          {item.time}
                        </span>
                      ) : (
                        <span className='font-bold uppercase text-green-500'>
                          Completed
                        </span>
                      )}
                    </span>
                  </div>
                  <div className='ml-auto w-1/3  flex justify-center'>
                    {item.time ? (
                      <button
                        className='uppercase border-[1px] p-2 rounded-lg text-xs hover:bg-indigo-500 
                hover:border-indigo-500 
                 hover:text-white '
                      >
                        Start Time
                      </button>
                    ) : (
                      <button
                        id={item.id}
                        className='uppercase border-[1px] p-2 rounded-lg text-xs hover:bg-indigo-500 
                  hover:border-indigo-500 
                   hover:text-white '
                        onClick={(e) => minusSet(e.target.id)}
                      >
                        Minus Set
                      </button>
                    )}
                  </div>
                </li>
              </div>
            ) : null
          )
        : null}
    </div>
  )
}
