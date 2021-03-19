import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { fetchPic } from '../../services/listings.service'
import { PetListing } from '../../types/pet-listing.interface'
import { FavButton } from './FavButton'

interface ListingCardProps {
  listing: PetListing
}
export const ListingCard: React.FC<ListingCardProps> = ({
  listing,
}: ListingCardProps) => {
  const history = useHistory()
  const defaultPic = '/bug.png'
  const [inHover, setHover] = useState(false)
  const [pic, setPic] = useState(defaultPic)
  useEffect(() => {
    const picture = listing.picture
    if (picture) fetchPic(picture, setPic)
  }, [])
  return (
    <Card
      className="mr-2 mb-2"
      style={{ width: '250px' }}
      border={inHover ? 'primary' : 'dark'}
    >
      <Card.Img
        variant="top"
        className="img-thumbnail"
        onClick={() => history.push(`/listings/${listing.id}`)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={pic}
      />
      <Card.Body
        onClick={() => history.push(`/listings/${listing.id}`)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Card.Title>{listing.pet.name}</Card.Title>
        <Card.Text>{listing.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <span className="d-flex flex-row flex-nowrap justify-content-around">
          <FavButton id={listing.id} favorite={listing.favorite} />
        </span>
      </Card.Footer>
    </Card>
  )
}
