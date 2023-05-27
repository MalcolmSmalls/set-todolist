import React, { useState, useRef, useEffect } from 'react'

export default function Timer({ setNewTimer, time }) {
  const [timer, setTimer] = useState('00:00:00')
  const Ref = useRef(null)

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / 1000 / 60 / 60) % 24)
    return {
      total,
      hours,
      minutes,
      seconds,
    }
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer('00:00:10')

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current)
    const id = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
  }

  const getDeadTime = () => {
    let deadline = new Date()

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10)
    return deadline
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime())
  }
  return (
    <div className='backgroundBlur bg-black/50 w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm'>
      <div className='modalContainer bg-gray-900 w-1/2 h-96 flex flex-col items-center rounded-lg gap-5 shadow-2xl'>
        <div className='ml-auto pt-3 pr-4'>
          <button onClick={() => setNewTimer({ status: false, time: '' })}>
            <i className='fas fa-xmark text-3xl'></i>
          </button>
        </div>
        <div className='title'>
          <h1 className='uppercase text-xl'>Timer</h1>
        </div>
        {timer}
        <div className='footer'>
          <button
            className='bg-green-500 p-3 rounded-lg w-36 mr-5 hover:bg-green-600'
            onClick={onClickReset}
          >
            Reset
          </button>
          <button
            type='button'
            className='bg-red-500 p-3 rounded-lg w-36  hover:bg-red-600'
            onClick={() => setNewTimer({ status: false, time: '' })}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
