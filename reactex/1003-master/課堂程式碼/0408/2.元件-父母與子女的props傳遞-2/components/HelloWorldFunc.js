import React from 'react'

function HelloWorldFunc(props) {
  console.log(props)

  return (
    <>
      <h1>函式型元件</h1>父母元件傳了一個props給我: {props.text}
    </>
  )
}

export default HelloWorldFunc
