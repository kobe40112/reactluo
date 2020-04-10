import React from 'react'

import HelloWorldFunc from './components/HelloWorldFunc'
import HelloWorldClass from './components/HelloWorldClass'
import HelloWorldText from './components/HelloWorldText'
import SelectBox from './components/SelectBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      textNow: '',
    }
  }

  // 為了要綁定this值，用類似箭頭函式的寫法
  // 專門設計給子女元件，送資料到父母元件
  sendDataToMe = (value) => {
    this.setState({ textNow: value })
  }

  render() {
    return (
      <>
        <SelectBox />
        {/* <HelloWorldClass sendMe={this.sendDataToMe} />
        <HelloWorldFunc sendMe={this.sendDataToMe} />
        <HelloWorldText text={this.state.textNow} /> */}
      </>
    )
  }
}

export default App