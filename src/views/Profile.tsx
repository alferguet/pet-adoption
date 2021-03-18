import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
// import { fetchPic } from '../services/listings.service'
import { PetListing } from '../types/pet-listing.interface'
import { FavButton } from '../components/FavButton'
import { useParams } from 'react-router-dom'
import { fetchListing } from '../services/listings.service'

interface ProfileParams {
  id: string | undefined
}
export const Profile: React.FC = () => {
  const { id } = useParams<ProfileParams>()
  const history = useHistory()
  const defaultPic = '/bug.png'
  const [listing, setListing] = useState<PetListing | null>(null)

  useEffect(() => {
    return fetchListing(id, setListing)
  }, [])
  const [pic, setPic] = useState(defaultPic)
  useEffect(() => {
    // const picture = listing.picture
    // if (picture) fetchPic(picture, setPic)
  }, [])
  return listing ? (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={4}>
                  <Card.Img variant="top" className="img-thumbnail" src={pic} />
                </Col>
                <Col>
                  <h1>{listing.pet.name}</h1>
                  <h3>Sheltered at {listing.shelter}</h3>
                  <Card.Text>{listing.description}</Card.Text>
                  <hr />
                  <p>Species {listing.pet.species}</p>
                  <p>Birthday {listing.pet.birthday}</p>
                  <p>Quirks {listing.pet.quirks}</p>
                </Col>
                <Col md={2}>
                  <FavButton listing={listing} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : (
    <p>Not found</p>
  )
}
