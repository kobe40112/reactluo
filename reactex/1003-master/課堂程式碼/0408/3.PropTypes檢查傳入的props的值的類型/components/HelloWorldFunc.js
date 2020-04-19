import React from 'react'
import PropTypes from 'prop-types'

function HelloWorldFunc(props) {
  console.log(props)

  return (
    <>
      <h1>函式型元件</h1>父母元件傳了一個props給我:
      {props.total} ，{props.text}
    </>
  )
}

HelloWorldFunc.propTypes = {
  text: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}

export default HelloWorldFunc
