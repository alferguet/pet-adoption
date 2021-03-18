import React from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { RouteView } from './router/RouteView'

export const App: React.FC = () => {
  return (
    <Router>
      <Container fluid className="h-100 mx-0">
        <Navbar></Navbar>
        <RouteView></RouteView>
      </Container>
    </Router>
  )
}
