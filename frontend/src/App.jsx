import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='dark:bg-black bg-gray-800 w-full h-fit text-white font-Poppins'>
      <div className='flex justify-center items-center pt-20 flex-col gap-10'>
        <h1 className='text-5xl uppercase tracking-widest font-bold'>
          Set Task List
        </h1>

        <TaskList />
      </div>
    </main>
  )
}

export default App
