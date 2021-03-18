import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { PetListing } from '../../types/pet-listing.interface'
import { FavButton } from './FavButton'

interface ListingCardProps {
  listing: PetListing
}
export const ListingCard: React.FC<ListingCardProps> = ({
  listing,
}: ListingCardProps) => {
  const history = useHistory()
  return (
    <Card className="mr-2 mb-2 p-2">
      <Card.Img variant="top" className="img-thumbnail" src="/bug.png" />
      <Card.Body onClick={() => history.push(`/listings/${listing.id}`)}>
        <Card.Title>{listing.pet.name}</Card.Title>
        <Card.Text>{listing.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <span className="d-flex flex-row flex-nowrap justify-content-around">
          <FavButton listing={listing} />
        </span>
      </Card.Footer>
    </Card>
  )
}
