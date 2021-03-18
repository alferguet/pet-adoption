import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ListingCard } from '../components/listings/ListingCard'
import { fetchListings } from '../services/listings.service'
import { PetListing } from '../types/pet-listing.interface'

export const Listings: React.FC = () => {
  const [listings, setListings] = useState<PetListing[]>([])

  useEffect(() => {
    return fetchListings(setListings)
  }, [])

  return (
    <Container className="d-flex flex-row justify-content-around flex-wrap">
      {listings.map((listing: PetListing, index) => {
        listing.id = index
        return <ListingCard listing={listing} key={index}></ListingCard>
      })}
    </Container>
  )
}
