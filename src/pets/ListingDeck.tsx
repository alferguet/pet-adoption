import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { initFirebaseDb } from '../firebase'
import { PetListing } from './interfaces/pet-listing.interface'
import { ListingCard } from './ListingCard'

const database = initFirebaseDb()

export const ListingDeck: React.FC = () => {
  const [listings, setListings] = useState<PetListing[]>([])

  useEffect(() => {
    const listingsRef = database.ref('/listings')
    listingsRef.on('child_added', snapshot => {
      if (snapshot.exists()) {
        const newListing = snapshot.val()
        setListings(prevListings => [...prevListings, newListing])
      }
    })

    return () => {
      listingsRef.off()
    }
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
