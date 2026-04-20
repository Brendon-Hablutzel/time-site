import { useEffect, useState } from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'

const getMonth = (date: Date) => {
  return date.toLocaleString('default', { month: 'long' })
}

const getDayOfWeek = (date: Date) => {
  return date.toLocaleString('default', { weekday: 'long' })
}

function App() {
  const [time, setTime] = useState(new Date())

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    document.title = time.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    })
  }, [time])

  return (
    <div className="w-screen overflow-hidden">
      <div className="mt-[10vh] px-5 flex flex-col items-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-4xl font-medium">
            {time.toLocaleTimeString()}
          </h1>
          <h2 className="text-lg text-gray-600 tracking-wide text-center">
            {getDayOfWeek(time)}, {getMonth(time)} {time.getDate()}
          </h2>
          <div className="flex justify-center">
            <Clock value={time} size={200} />
          </div>
          <p className="text-gray-600 text-sm text-center max-w-full wrap-break-word">
            Current time in {timeZone}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
