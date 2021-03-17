import React, { FunctionComponent } from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './layout/Navbar'
import { RouteView } from './router/RouteView'

export const App: FunctionComponent = () => {
  return (
    <Router>
      <Container>
        <Navbar></Navbar>
        <RouteView></RouteView>
      </Container>
    </Router>
  )
}
