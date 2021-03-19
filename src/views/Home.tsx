import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const Home: React.FC = () => {
  const history = useHistory()
  return (
    <Container
      fluid
      className="p-0 d-flex flex-column justify-content-center m-0 mt-5"
    >
      <h1 className="display-1 text-center">Welcome to Pinder</h1>
      <h2 className="display-6 text-center text-muted">
        The new application to provide sheltered pets a better home
      </h2>
      <span className="d-inline-flex justify-content-center">
        <Button
          onClick={() => history.push('/listings')}
          variant="outline-primary"
          size="lg"
        >
          Start here
        </Button>
      </span>
    </Container>
  )
}
