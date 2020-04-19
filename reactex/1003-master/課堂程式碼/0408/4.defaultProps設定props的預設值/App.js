import React from 'react'

import HelloWorldFunc from './components/HelloWorldFunc'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      <HelloWorldFunc text="早上好" total="test" />
      <HelloWorldClass total={1} />
    </>
  )
}

export default App
