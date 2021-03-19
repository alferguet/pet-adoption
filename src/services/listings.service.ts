import app from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import { PetListing } from '../types/pet-listing.interface'

// Updates listing in every change
export function fetchListing(
  id: string | undefined,
  update: (value: React.SetStateAction<PetListing | null>) => void
): () => void {
  if (!id) {
    return () => {
      return
    }
  }
  const ref = app.database().ref(`/listings/${id}`)
  ref.on('value', snapshot => {
    if (snapshot.exists()) {
      const listing = snapshot.val()
      listing.id = id
      update(listing)
    }
  })
  return () => {
    ref.off()
  }
}
// Child added is called once and with additions, if changed updates
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

export function fetchPic(
  picName: string,
  update: (value: React.SetStateAction<string>) => void
): void {
  // Uses firebase storage to fetch picture download urls
  app
    .storage()
    .ref('images/')
    .child(picName)
    .getDownloadURL()
    .then((url: string) => {
      if (url) {
        update(url)
      }
    })
    .catch(err => {
      // Removed logs, may use toasts
      switch (err.code) {
        case 'storage/object-not-found':
          break
        case 'storage/unauthorized':
          break
        case 'storage/canceled':
          break
        case 'storage/unknown':
          break
      }
    })
}
