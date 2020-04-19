import React, { useState, useEffect } from 'react'
//import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import { FaReact } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import { GiSwordman } from 'react-icons/gi'
import './styles/custom.scss'

function App() {
  return (
    <>
      <Button variant="primary">
        <FaReact /> React v16
      </Button>
      <GiSwordman className="green-icon" />
      <FaReact className="pink-icon" />
    </>
  )
}

export default App
