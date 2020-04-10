import React, { useState, useEffect } from 'react'

function ClockFunc(props) {
  const [date, setDate] = useState(new Date())

  //取代 componentDidMount 與 componentWillUnmount
  useEffect(() => {
    // componentDidMount要執行的部份
    var timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      // 回傳的的函式裡是componentWillUnmount
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(new Date())
  }

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  )
}

export default ClockFunc