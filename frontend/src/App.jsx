import { useState, useEffect } from 'react'
import BottomBar from './components/BottomBar'
import TaskList from './components/TaskList'
import AddTaskModal from './components/AddTaskModal'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [currentTask, setCurrentTask] = useState('')
  const [editing, setEditing] = useState(false)
  const [showBottomBar, setShowBottomBar] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleOpenModal = () => {
    setEditing(false)
    setOpenModal(true)
  }

  return (
    <main className='dark:bg-black bg-gray-800 w-full min-h-screen text-white font-Poppins'>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </Router>
      <div className='flex justify-center items-center pt=-10 flex-col gap-10'>
        <h1 className='text-5xl uppercase tracking-widest font-bold'>
          Sets Todo List
        </h1>
        <button
          onClick={handleOpenModal}
          className='bg-gray-900 text-gray-300 w-1/2 h-50 rounded-lg shadow-lg h-10 uppercase font-bold hover:bg-gray-950 hover:text-white'
        >
          <i className='fas fa-plus pr-2'></i>Add Task
        </button>
        {openModal && (
          <AddTaskModal
            closeModal={setOpenModal}
            setTasks={setTasks}
            tasks={tasks}
            editing={editing}
          />
        )}

        <TaskList
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          tasks={tasks}
          setTasks={setTasks}
          setShowBottomBar={setShowBottomBar}
          showBottomBar={showBottomBar}
        />
      </div>
      <BottomBar
        showBottomBar={showBottomBar}
        currentTask={currentTask}
        tasks={tasks}
        setTasks={setTasks}
        setOpenModal={setOpenModal}
        openModal={openModal}
        setEditing={setEditing}
        editing={editing}
      />
    </main>
  )
}

export default App
