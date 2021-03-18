import app from 'firebase/app'
import 'firebase/database'
import { PetListing } from '../types/pet-listing.interface'

export function fetchListings(
  update: (value: React.SetStateAction<PetListing[]>) => void
): () => void {
  const ref = app.database().ref('/listings')
  ref.on('child_added', snapshot => {
    if (snapshot.exists()) {
      const newListing = snapshot.val()
      update(prevListings => [...prevListings, newListing])
    }
  })
  ref.on('child_changed', snapshot => {
    if (snapshot.exists()) {
      const updatedListing = snapshot.val()
      update(prevListings => {
        const updatedListings = [...prevListings]
        const listingIndex = updatedListings.findIndex(
          (listing: PetListing) => listing.pet.name === updatedListing.pet.name
        )
        updatedListings[listingIndex] = updatedListing
        return updatedListings
      })
    }
  })
  return () => {
    ref.off()
  }
}

export function setFavorite(id: number | undefined, state: boolean): void {
  app.database().ref(`/listings/${id}/`).update({ favorite: state })
}
