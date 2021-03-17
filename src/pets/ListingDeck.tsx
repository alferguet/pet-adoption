import React, { useEffect, useState } from 'react'
import { CardDeck } from 'react-bootstrap'
import { initFirebaseDb } from '../firebase'
import { ListingCard } from './ListingCard'
import { PetListing } from './pet-listing.interface'

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
    <CardDeck>
      {listings.map((listing: PetListing) => {
        return (
          <ListingCard listing={listing} key={listing.pet.name}>
            {JSON.stringify(listing)}
          </ListingCard>
        )
      })}
    </CardDeck>
  )
}
