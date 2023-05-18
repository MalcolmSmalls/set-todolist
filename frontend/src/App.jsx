import { useState } from 'react'
import TaskList from './components/TaskList'
import AddTaskModal from './components/AddTaskModal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [tasks, setTasks] = useState([
    { task: 'Get Money', sets: 5, id: 1 },
    { task: 'Bicep Curls', sets: 4, id: 2 },
    { task: 'Read', time: '5hrs', id: 3 },
    { task: 'Pushups', sets: 2, id: 4 },
    { task: 'Get Money', sets: 5, id: 5 },
    { task: 'Bicep Curls', sets: 4, id: 6 },
    { task: 'Read', time: '5hrs', id: 7 },
    { task: 'Pushups', sets: 2, id: 8 },
    { task: 'Get Money', sets: 5, id: 9 },
    { task: 'Bicep Curls', sets: 4, id: 10 },
    { task: 'Read', time: '5hrs', id: 11 },
    { task: 'Pushups', sets: 2, id: 12 },
  ])

  return (
    <main className='dark:bg-black bg-gray-800 w-full h-fit text-white font-Poppins'>
      <div className='flex justify-center items-center pt-20 flex-col gap-10'>
        <h1 className='text-5xl uppercase tracking-widest font-bold'>
          Sets Todo List
        </h1>
        <button
          onClick={() => setOpenModal(true)}
          className='bg-gray-900 text-gray-300 w-1/2 h-50 rounded-lg shadow-lg h-10 uppercase font-bold hover:bg-gray-950 hover:text-white'
        >
          <i className='fas fa-plus pr-2'></i>Add Task
        </button>
        {openModal && (
          <AddTaskModal closeModal={setOpenModal} setTasks={setTasks} />
        )}

        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  )
}

export default App
