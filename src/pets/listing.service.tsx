import firebase from 'firebase'

export function setFavorite(id: number, state: boolean): void {
  firebase.database().ref(`/listings/${id}`).update({ favorite: state })
}
