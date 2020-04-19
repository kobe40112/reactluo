import React from 'react'
import LifeCycle from './components/LifeCycle'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShow: true,
    }
  }

  render() {
    let display = <LifeCycle />

    if (this.state.isShow === false) display = <h2>沒人在</h2>

    return (
      <>
        {display}
        <button
          onClick={() => {
            this.setState({ isShow: false })
          }}
        >
          不要你了，再見
        </button>
        <button
          onClick={() => {
            this.setState({ isShow: true })
          }}
        >
          復活
        </button>
      </>
    )
  }
}

export default App
