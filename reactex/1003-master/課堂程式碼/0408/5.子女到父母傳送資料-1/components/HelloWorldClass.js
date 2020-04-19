import React from 'react'

class HelloWorldClass extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
    }
  }

  render() {
    return (
      <>
        <h1>類別型元件</h1>
        <input
          type="text"
          value={this.state.inputText}
          onChange={(event) => this.setState({ inputText: event.target.value })}
        />
        <button>送資料到App(父母元件)</button>
      </>
    )
  }
}

export default HelloWorldClass
