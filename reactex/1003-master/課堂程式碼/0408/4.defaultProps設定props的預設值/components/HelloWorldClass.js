import React from 'react'
import PropTypes from 'prop-types'

class HelloWorldClass extends React.Component {
  // 建構式如果要得到props值要用這個方式傳入
  constructor(props) {
    super(props)
    // 反樣式: 不用利用傳入props值來初始化自己的狀態值
    this.state = {}
    console.log(props)
  }

  render() {
    console.log(this.props)
    return (
      <>
        <h1>類別型元件</h1>
        父母元件傳了一個props給我: {this.props.text}
      </>
    )
  }
}

// 限制props的類型，or 必要
HelloWorldClass.propTypes = {
  text: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}

// 設定預設的props值
HelloWorldClass.defaultProps = {
  text: '很不好',
  total: 0,
}

export default HelloWorldClass
