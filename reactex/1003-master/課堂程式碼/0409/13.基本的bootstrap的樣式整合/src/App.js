import React from 'react'

import JquerySlideshow from './components/JquerySlideshow'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <button type="button" className="btn btn-primary">
          Notifications <span className="badge badge-light">4</span>
        </button>
      </>
    )
  }
}

export default App
