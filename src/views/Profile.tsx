import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { fetchPic } from '../services/listings.service'
import { PetListing } from '../types/pet-listing.interface'
import { FavButton } from '../components/listings/FavButton'
import { useParams } from 'react-router-dom'
import { fetchListing } from '../services/listings.service'
import { AdoptButton } from '../components/listings/AdoptButton'
import { Field } from '../components/profile/Field'
import { capitalize } from '../utils/text'

interface ProfileParams {
  id: string | undefined
}
export const Profile: React.FC = () => {
  const { id } = useParams<ProfileParams>()
  const defaultPic = '/bug.png'
  const [listing, setListing] = useState<PetListing | null>(null)

  useEffect(() => {
    return fetchListing(id, setListing)
  }, [])
  const [pic, setPic] = useState(defaultPic)
  useEffect(() => {
    if (listing?.picture) {
      const picture = listing.picture
      fetchPic(picture, setPic)
    }
  }, [listing])
  return listing ? (
    <Container fluid className="pt-3">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={4}>
                  <Card.Img variant="top" className="img-thumbnail" src={pic} />
                </Col>
                <Col className="pt-1">
                  <h1>{listing.pet.name}</h1>
                  <h3>Sheltered at {listing.shelter}</h3>
                  <Card.Text>{listing.description}</Card.Text>
                  <hr />
                  <Field
                    title="Species"
                    value={capitalize(listing.pet.species)}
                  />
                  <Field title="Birthday" value={listing.pet.birthday} />
                  <Field title="Quirks" value={listing.pet.quirks} />
                </Col>
                <Col
                  md={2}
                  className="d-flex flex-column align-items-center pt-1"
                >
                  <AdoptButton />
                  <FavButton id={listing.id} favorite={listing.favorite} />
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
