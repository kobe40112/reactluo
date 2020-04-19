import React, { useState, useEffect } from 'react'
//import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import { FaReact } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import { GiSwordman } from 'react-icons/gi'

function App() {
  return (
    <>
      <Button variant="primary">
        <FaReact /> React v16
      </Button>
      <GiSwordman style={{ fontSize: 100, color: 'green' }} />
    </>
  )
}

export default App
