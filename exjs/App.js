import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  function test() {
    let a = 1
    let b = 2
    a = a + b
    console.log(a)
    console.log(b)
  }

  test()

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}
export default App