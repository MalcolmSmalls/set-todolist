import React, { useState, useRef, useEffect } from 'react'

export default function Timer({ setNewTimer, time, newTimer, setTasks }) {
  const [timer, setTimer] = useState('')
  const [timerStarted, setTimerStarted] = useState(false)
  const [timerEnds, setTimerEnds] = useState('')
  const [newPausedTime, setNewPausedTime] = useState('')
  const Ref = useRef(null)

  //   let newTime = time

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

  useEffect(() => {
    if (timer === '00:00:00') {
      setTasks((prevTasks) => {
        return prevTasks.map((item) => {
          if (item.id === newTimer.id) {
            if (item.sets == 1) {
              return { ...item, sets: item.sets - 1, completed: true }
            } else {
              return { ...item, sets: item.sets - 1 }
            }
          } else {
            return item
          }
        })
      })
      setNewTimer({ status: false, time: '', id: newTimer.id })
    }
  }, [timer])

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

  const initialTimer = (e) => {
    startTimer(e)
    if (Ref.current) clearInterval(Ref.current)
  }

  const clearTimer = (e) => {
    // initialTimer(e)

    if (Ref.current) clearInterval(Ref.current)
    const id = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = id
  }

  const resetTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current)
    startTimer(e)
  }

  const getDeadTime = (time) => {
    let deadline = new Date()

    deadline.setSeconds(deadline.getSeconds() + time * 60)
    if (!timerStarted) setTimerEnds(deadline)
    return deadline
  }

  useEffect(() => {
    initialTimer(getDeadTime(time))
  }, [])

  const onClickPause = () => {
    setTimerStarted(false)
    const newTime = Date.parse(timerEnds) - Date.parse(new Date())
    setNewPausedTime(newTime / 1000 / 60)

    if (Ref.current) clearInterval(Ref.current)
  }

  const onClickResume = () => {
    clearTimer(getDeadTime(newPausedTime))
    setTimerStarted(true)
  }

  const onClickStart = () => {
    clearTimer(getDeadTime(time))
    setTimerStarted(true)
  }
  const onClickReset = () => {
    resetTimer(getDeadTime(time))
    setNewPausedTime('')
    setTimerStarted(false)
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
        <div className='text-5xl'>{timer}</div>
        <div>
          <button
            className='uppercase border-[1px] p-2 rounded-lg text-base hover:bg-indigo-500 
                hover:border-indigo-500 
                 hover:text-white '
            onClick={
              timerStarted
                ? onClickPause
                : newPausedTime
                ? onClickResume
                : onClickStart
            }
          >
            {timerStarted ? 'Pause' : newPausedTime ? 'Resume' : 'Start'} Timer
          </button>
        </div>
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
