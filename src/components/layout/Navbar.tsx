import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavButton } from './NavButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const history = useHistory()
  return (
    <Container fluid className="py-2 bg-primary">
      <Row>
        <Col md={4}>
          <span className="d-flex">
            <FontAwesomeIcon
              className="p-1 mr-2 border-dark"
              size="2x"
              icon={faKiwiBird}
              onClick={() => history.push('/')}
              border
            />
            <h1>P(et)inder</h1>
          </span>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Nav className="float-right">
            <NavButton to="/listings" title="Listings"></NavButton>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
