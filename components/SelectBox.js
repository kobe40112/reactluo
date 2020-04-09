import React from 'react'

class SelectBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange = (e) => {
    // 先對最後的結果加以運算完成(預測會有什麼值)
    let lastValue = this.state.value
    lastValue = e.target.value

    console.log('setState前(this.state.value): ', this.state.value)
    console.log('setState前(lastValue): ', lastValue)

    // 因為setState有異步的特性，所以讓它自己去執行
    this.setState({ value: lastValue })

    // 使用自行計算的值，才會正確得到最後改變的狀態值
    console.log('setState後(this.state.value): ', this.state.value)
    console.log('setState後(lastValue): ', lastValue)
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange} value={this.state.value}>
          <option value="星期一" key={1}>
            星期一
          </option>
          <option value="星期三" key={2}>
            星期三
          </option>
          <option value="星期日" key={3}>
            星期日
          </option>
        </select>
        <h1>{this.state.value}</h1>
      </div>
    )
  }
}

export default SelectBox