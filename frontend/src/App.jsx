import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import AddTaskModal from './components/AddTaskModal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <main className='dark:bg-black bg-gray-800 w-full min-h-screen text-white font-Poppins'>
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
          <AddTaskModal
            closeModal={setOpenModal}
            setTasks={setTasks}
            tasks={tasks}
          />
        )}

        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  )
}

export default App
