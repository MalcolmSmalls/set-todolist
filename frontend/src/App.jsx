import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Task List</h1>
      <TaskList />
    </>
  )
}

export default App
