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

// 設定預設的props值
HelloWorldFunc.defaultProps = {
  text: '很不好',
  total: 0,
}

export default HelloWorldFunc
