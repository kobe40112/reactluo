import React from 'react'

import HelloWorldFunc from './components/HelloWorldFunc'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      <HelloWorldFunc text="早上好" />
      <HelloWorldClass text="晚上好" />
    </>
  )
}

export default App
