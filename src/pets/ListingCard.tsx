import { PetListing } from './pet-listing.interface'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

interface ListingCardProps {
  listing: PetListing
}
export const ListingCard: React.FC<ListingCardProps> = ({
  listing,
}: ListingCardProps) => {
  return (
    <Card className="mw-30 mh-30">
      <Card.Img variant="top" className="img-thumbnail" src="/bug.png" />
      <Card.Title>{listing.pet.name}</Card.Title>
    </Card>
  )
}
