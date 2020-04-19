import React, { useState, useEffect } from 'react'
//import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import { FaReact } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import { GiSwordman } from 'react-icons/gi'
//import './styles/custom.scss'

function App() {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}

export default App
