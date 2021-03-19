import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavButton } from './NavButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation } from 'react-router-dom'

const links = (
  <Col
    md={{ span: 4, offset: 4 }}
    xs={{ span: 2, offset: 2 }}
    className="d-flex flex-row-reverse align-items-center"
  >
    <Nav className="float-right">
      <NavButton to="/listings" title="Listings"></NavButton>
    </Nav>
  </Col>
)

export const Navbar: React.FC = () => {
  const history = useHistory()
  const [inHover, setHover] = useState(false)
  const location = useLocation()
  return (
    <Container fluid className="py-2 bg-primary">
      <Row>
        <Col md={4}>
          <span className="d-flex">
            <FontAwesomeIcon
              className={`p-1 mr-2 ${
                inHover ? 'border-dark' : 'border-primary'
              }`}
              size="2x"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              icon={faKiwiBird}
              onClick={() => history.push('/')}
              border
            />
            <h1>Pinder</h1>
          </span>
        </Col>
        {location.pathname !== '/listings' ? links : null}
      </Row>
    </Container>
  )
}
