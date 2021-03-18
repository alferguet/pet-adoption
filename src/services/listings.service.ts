import app from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import { PetListing } from '../types/pet-listing.interface'

export function fetchListing(
  id: string | undefined,
  update: (value: React.SetStateAction<PetListing | null>) => void
): () => void {
  if (!id)
    return () => {
      return
    }
  const ref = app.database().ref(`/listings/${id}`)
  ref.on('value', snapshot => {
    if (snapshot.exists()) {
      const listing = snapshot.val()
      update(listing)
    }
  })
  return () => {
    ref.off()
  }
}

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
      console.log(err)
      switch (err.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break
        case 'storage/canceled':
          // User canceled the upload
          break
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break
      }
    })
}
