import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { PetListing } from './interfaces/pet-listing.interface'

interface ListingCardProps {
  listing: PetListing
}
export const ListingCard: React.FC<ListingCardProps> = ({
  listing,
}: ListingCardProps) => {
  return (
    <Card className="mr-2 mb-2 p-2">
      <Card.Img variant="top" className="img-thumbnail" src="/bug.png" />
      <Card.Body>
        <Card.Title>{listing.pet.name}</Card.Title>
        <Card.Text>{listing.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <span className="d-flex flex-row flex-nowrap justify-content-around">
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </span>
      </Card.Footer>
    </Card>
  )
}
