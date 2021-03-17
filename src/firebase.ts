import firebase from 'firebase'
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID
const config = {
  apiKey: process.env.API_KEY,
  authDomain: `https://${PROJECT_ID}.firebaseapp.com/`,
  databaseURL: `https://${PROJECT_ID}-default-rtdb.firebaseio.com/`,
  projectId: PROJECT_ID,
}

export function initFirebaseDb(): firebase.database.Database {
  firebase.initializeApp(config)
  return firebase.database()
}
