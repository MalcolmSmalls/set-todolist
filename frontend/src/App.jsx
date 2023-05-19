import { useState } from 'react'
import TaskList from './components/TaskList'
import AddTaskModal from './components/AddTaskModal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [tasks, setTasks] = useState([
    { task: 'Get Money', sets: 5, id: 1, completed: false },
    { task: 'Bicep Curls', sets: 4, id: 2, completed: false },
    { task: 'Read', time: '5hrs', id: 3, completed: false },
    { task: 'Pushups', sets: 2, id: 4, completed: false },
    { task: 'Get Money', sets: 5, id: 5, completed: false },
    { task: 'Bicep Curls', sets: 4, id: 6, completed: false },
    { task: 'Read', time: '5hrs', id: 7, completed: false },
    { task: 'Pushups', sets: 2, id: 8, completed: false },
    { task: 'Get Money', sets: 5, id: 9, completed: false },
    { task: 'Bicep Curls', sets: 4, id: 10, completed: false },
    { task: 'Read', time: '5hrs', id: 11, completed: false },
    { task: 'Pushups', sets: 2, id: 12, completed: false },
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
