import React, { useState } from 'react'

export default function TaskList() {
  const tasks = [
    { task: 'Get Money', sets: 5 },
    { task: 'Bicep Curls', sets: 4 },
    { task: 'Read', time: '5hrs' },
    { task: 'Pushups', sets: 2 },
    { task: 'Get Money', sets: 5 },
    { task: 'Bicep Curls', sets: 4 },
    { task: 'Read', time: '5hrs' },
    { task: 'Pushups', sets: 2 },
    { task: 'Get Money', sets: 5 },
    { task: 'Bicep Curls', sets: 4 },
    { task: 'Read', time: '5hrs' },
    { task: 'Pushups', sets: 2 },
  ]
  return (
    <div className='bg-gray-900 text-gray-300 w-1/2 h-50 rounded shadow-lg h-fit p-10'>
      {tasks.map((item) => (
        <li>
          {item.task} x {item.sets}
        </li>
      ))}
    </div>
  )
}
