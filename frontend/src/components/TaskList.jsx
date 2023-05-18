import React, { useState } from 'react'

export default function TaskList({ tasks, setTasks }) {
  // const [tasks, setTasks] = useState([
  //   { task: 'Get Money', sets: 5, id: 1 },
  //   { task: 'Bicep Curls', sets: 4, id: 2 },
  //   { task: 'Read', time: '5hrs', id: 3 },
  //   { task: 'Pushups', sets: 2, id: 4 },
  //   { task: 'Get Money', sets: 5, id: 5 },
  //   { task: 'Bicep Curls', sets: 4, id: 6 },
  //   { task: 'Read', time: '5hrs', id: 7 },
  //   { task: 'Pushups', sets: 2, id: 8 },
  //   { task: 'Get Money', sets: 5, id: 9 },
  //   { task: 'Bicep Curls', sets: 4, id: 10 },
  //   { task: 'Read', time: '5hrs', id: 11 },
  //   { task: 'Pushups', sets: 2, id: 12 },
  // ])

  const minusSet = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((item) => {
        return item.id === +id ? { ...item, sets: item.sets - 1 } : item
      })
    })
  }
  return (
    <div className='bg-gray-900 text-gray-300 w-1/2 h-50 rounded-lg shadow-lg h-fit'>
      {tasks.map((item) => (
        <div key={item.id} className='border-b border-b-gray-200/10 border-b-1'>
          <li className='list-none p-3 text-sm flex gap-4 items-center justify-center w-full'>
            <div className='ml-5 rounded-full border-2 w-5 h-5'></div>
            <div className='w-fit'>
              {item.task}
              <span className='text-indigo-500 text-xs'>
                {' '}
                x{' '}
                <span className='font-bold'>
                  {item.sets} {item.sets > 1 ? 'sets' : 'set'}
                  {item.time}
                </span>
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
      ))}
    </div>
  )
}
