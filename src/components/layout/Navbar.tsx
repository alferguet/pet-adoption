import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavButton } from './NavButton'

export const Navbar: React.FC = () => {
  return (
    <Container fluid className="py-2">
      <Row>
        <Col md={4}>
          <h2>Pet Adoption App</h2>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Nav className="float-right">
            <NavButton to="/" title="Home"></NavButton>
            <NavButton to="/listings" title="Listings"></NavButton>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
