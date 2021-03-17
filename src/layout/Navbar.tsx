import React, { FunctionComponent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export const Navbar: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Pet Adoption App</h2>
        </Col>
        <Col>
          <Nav>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/pets">Pets</Link>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
