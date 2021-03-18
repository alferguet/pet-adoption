import app from 'firebase/app'
import 'firebase/database'
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID
const config = {
  apiKey: process.env.API_KEY,
  authDomain: `https://${PROJECT_ID}.firebaseapp.com/`,
  databaseURL: `https://${PROJECT_ID}-default-rtdb.firebaseio.com/`,
  projectId: PROJECT_ID,
}

export function initFirebaseDb(): void {
  app.initializeApp(config)
}
