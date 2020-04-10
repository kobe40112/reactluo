import React from 'react'

class SelectBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange = (e) => {
    console.log('setState前(this.state.value): ', this.state.value)

    // 因為setState有異步的特性
    // 所以要利用第二個傳入參數，真正更新完才能得到更新過的值
    this.setState({ value: e.target.value }, () => {
      console.log('setState保証已經完成更新: ', this.state.value)
    })

    console.log('setState後(this.state.value): ', this.state.value)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate時(this.state.value)', this.state.value)
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